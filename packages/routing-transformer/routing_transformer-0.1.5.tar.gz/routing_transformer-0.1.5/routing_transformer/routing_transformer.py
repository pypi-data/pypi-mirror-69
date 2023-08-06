import torch
import torch.nn as nn
import torch.nn.functional as F
import math
from operator import mul
from functools import partial, reduce
from routing_transformer.reversible import ReversibleSequence, SequentialSequence

# constants

TOKEN_SELF_ATTN_VALUE = -5e4
KMEAN_INIT_ITERS = 10

# helper functions

def identity(x, *args, **kwargs):
    return x

def default(val, default_val):
    return default_val if val is None else val

def find_modules(nn_module, type):
    return [module for module in nn_module.modules() if isinstance(module, type)]

def is_empty(t):
    return t.nelement() == 0

def ema_inplace(moving_avg, new, decay):
    if is_empty(moving_avg):
        moving_avg.data.copy_(new)
        return
    moving_avg.data.mul_(decay).add_(1 - decay, new)

def max_neg_value(tensor):
    return -torch.finfo(tensor.dtype).max

def to(t):
    return {'device': t.device, 'dtype': t.dtype}

def batched_index_select(values, indices):
    last_dim = values.shape[-1]
    return values.gather(2, indices[:, :, :, None].expand(-1, -1, -1, last_dim))

def batched_bincount(index, num_classes, dim=-1):
    shape = list(index.shape)
    shape[dim] = num_classes
    out = index.new_zeros(shape)
    out.scatter_add_(dim, index, torch.ones_like(index, dtype=index.dtype))
    return out

def similarity(x, means):
    return torch.einsum('bhld,hcd->bhlc', x, means)

def squared_distance(x, means):
    return 2 - 2 * similarity(x, means)

def dists_and_buckets(x, means):
    dists = similarity(x, means)
    dists, buckets = torch.max(dists, dim=-1)
    return dists, buckets

def compute_se(x, means):
    dists = squared_distance(x, means)
    dists, buckets = torch.min(dists, dim=-1)
    dists_dtype = dists.dtype
    dists_float = dists.float()
    return dists.sum(-1).type(dists_dtype)

def buckets_to_means(x, buckets, num_clusters):
    b, h, l, d = x.shape
    means = buckets.new_zeros(b, h, num_clusters, d).float()  # hcd
    means.scatter_add_(-2, buckets.unsqueeze(-1).expand(-1, -1, -1, d), x.float())
    return F.normalize(means.sum(0, keepdim=True).type(x.dtype), dim=-1)

def kmeans_iter(x, means, num_clusters, compute_se_):  # hard k-means single iter
    dists, buckets = dists_and_buckets(x, means)
    bins = batched_bincount(buckets, num_clusters).sum(0, keepdim=True)
    zero_mask = bins.long() == 0
    means_ = buckets_to_means(x, buckets, num_clusters)
    means = torch.where(zero_mask.unsqueeze(-1), means, means_)
    means = means.squeeze(0)
    se = compute_se(x, means) if compute_se_ else None
    return means, se

def kmeans(x, means, training=True, init=False, compute_se=False):
    b, *_, d = x.shape
    num_clusters = means.shape[1]

    max_iters = 1 if training else 0
    
    if init:
        max_iters = max(KMEAN_INIT_ITERS, max_iters)
        means = x.transpose(0, 1).contiguous().view(t, -1, d)
        means = means[:, torch.randperm(num_clusters, device=x.device)[:num_clusters]]

    se = None

    for idx in range(max_iters):
        means, se = kmeans_iter(x, means, num_clusters, compute_se)

    dists = similarity(x, means)
    return means, dists, se

# pick the k points closest to each centroid and sort their indices in an ascending order for causal attention
def distribution(dists, window_size):
    _, topk_indices = dists.topk(k=window_size, dim=-2)
    sort_val, _ = topk_indices.sort(dim=-2)
    indices = sort_val.transpose(-2, -1)  # [b, h, c, l]
    return indices

def scatter_mean(t, index, dim, eps = 1e-5):
    numer = torch.zeros_like(t).scatter_add(dim, index, t)
    denom = torch.zeros_like(t).scatter_add(dim, index, torch.ones_like(t))
    return numer / (denom + eps)

def look_around(x, backward = 1, forward = 0, pad_value = -1, dim = 2):
    t = x.shape[1]
    dims = (len(x.shape) - dim) * (0, 0)
    padded_x = F.pad(x, (*dims, backward, forward), value= pad_value)
    tensors = [padded_x[:, ind:(ind + t), ...] for ind in range(forward + backward + 1)]
    return torch.cat(tensors, dim=dim)

def split_at_index(dim, index, t):
    pre_slices = (slice(None),) * dim
    l = (*pre_slices, slice(None, index))
    r = (*pre_slices, slice(index, None))
    return t[l], t[r]

# helper classes

class Chunk(nn.Module):
    def __init__(self, chunks, fn, along_dim = -1):
        super().__init__()
        self.dim = along_dim
        self.chunks = chunks
        self.fn = fn

    def forward(self, x):
        if self.chunks <= 1:
            return self.fn(x)
        chunks = x.chunk(self.chunks, dim = self.dim)
        return torch.cat([self.fn(c) for c in chunks], dim = self.dim)

class PreNorm(nn.ModuleList):
    def __init__(self, dim, fn):
        super().__init__()
        self.norm = nn.LayerNorm(dim)
        self.fn = fn
    def forward(self, x):
        x = self.norm(x)
        return self.fn(x)

# positional embeddings

class AbsolutePositionalEmbedding(nn.Module):
    def __init__(self, dim, max_seq_len):
        super().__init__()
        self.emb = nn.Embedding(max_seq_len, dim)

    def forward(self, x):
        t = torch.arange(x.shape[1], device=x.device)
        return self.emb(t)

def shift(x):
    *_, i, j = x.shape
    zero_pad = torch.zeros((*_, i, i), **to(x))
    x = torch.cat([x, zero_pad], -1)
    l = i + j - 1
    x = x.view(*_, -1)
    zero_pad = torch.zeros(*_, -x.size(-1) % l, **to(x))
    shifted = torch.cat([x, zero_pad], -1).view(*_, -1, l)
    return shifted[..., :i, i - 1:]

class RelativePositionalEmbedding(nn.Module):
    def __init__(self, dim, heads, length):
        super().__init__()
        self.scale = dim ** -0.5
        self.weights = nn.Parameter(torch.zeros(length, heads, dim))

    def forward(self, q):
        emb = torch.einsum('bhnid,jhd->bhnij', q, self.weights.type(q.dtype)) * self.scale
        return shift(emb)

class AxialPositionalEmbedding(nn.Module):
    def __init__(self, dim, max_seq_len, axial_shape = ()):
        super().__init__()
        assert reduce(mul, axial_shape, 1) == max_seq_len, 'axial position shape must multiply up to max sequence length'

        self.dim = dim
        self.seq_len = max_seq_len
        self.shape = axial_shape

        self.weights = ParameterList(self, 'weights', len(axial_shape))

        for ind, shape in enumerate(self.shape):
            ax_shape = [1] * len(self.shape)
            ax_shape[ind] = shape
            ax_shape = (1, *ax_shape, dim)
            ax_emb = nn.Parameter(torch.zeros(ax_shape).normal_(0, 1))
            self.weights.append(ax_emb)

    def forward(self, x):
        b, t, e = x.shape
        embs = []

        for ax_emb in self.weights.to_list():
            expand_shape = (b, *self.shape, self.dim)
            emb = ax_emb.expand(expand_shape).reshape(b, self.seq_len, self.dim)
            embs.append(emb)

        pos_emb = sum(embs)
        return pos_emb[:, :t].to(x)

# a mock parameter list object until below issue is resolved
# https://github.com/pytorch/pytorch/issues/36035
class ParameterList(object):
    def __init__(self, kls, prefix, length):
        self.ind = 0
        self.kls = kls
        self.prefix = prefix
        self.length = length

    def _keyname(self, prefix, ind):
        return f'{prefix}_{ind}'

    def append(self, x):
        setattr(self.kls, self._keyname(self.prefix, self.ind), x)
        self.ind += 1

    def to_list(self):
        return [getattr(self.kls, self._keyname(self.prefix, i)) for i in range(self.length)]

# local attention

class LocalAttention(nn.Module):
    def __init__(self, bucket_size, heads, head_dim, causal = False, look_backward = 1, look_forward = None, dropout = 0., shared_qk = False):
        super().__init__()
        self.look_forward = default(look_forward, 0 if causal else 1)
        assert not (causal and self.look_forward > 0), 'you cannot look forward if causal'

        self.bucket_size = bucket_size
        self.causal = causal
        self.look_backward = look_backward
        self.shared_qk = shared_qk

        self.heads = heads
        self.rel_pos = RelativePositionalEmbedding(head_dim, heads, bucket_size * 2)
        self.dropout = nn.Dropout(dropout)

    def forward(self, q, k, v, input_mask = None):
        shape = q.shape

        merge_into_batch = lambda t: t.reshape(-1, *t.shape[-2:])
        q, k, v = map(merge_into_batch, (q, k, v))

        b, t, e, h, device, dtype = *q.shape, self.heads, q.device, q.dtype
        bucket_size, causal, look_backward, look_forward, shared_qk = self.bucket_size, self.causal, self.look_backward, self.look_forward, self.shared_qk

        buckets = t // bucket_size

        if shared_qk:
            k = F.normalize(k, 2, dim=-1).type(q.type())

        ticker = torch.arange(t, device=device, dtype=dtype)[None, :]
        b_t = ticker.reshape(1, buckets, bucket_size)

        bucket_fn = lambda t: t.reshape(b, buckets, bucket_size, -1)
        bq, bk, bv = map(bucket_fn, (q, k, v))

        look_around_kwargs = {'backward': look_backward, 'forward': look_forward}
        bk = look_around(bk, **look_around_kwargs)
        bv = look_around(bv, **look_around_kwargs)

        bq_t = b_t
        bq_k = look_around(b_t, **look_around_kwargs)

        dots = torch.einsum('bhie,bhje->bhij', bq, bk) * (e ** -0.5)

        rel_attn = self.rel_pos(bq.view(-1, h, *bq.shape[1:])).reshape_as(dots)
        dots = dots + rel_attn

        mask_value = max_neg_value(dots)

        if shared_qk:
            mask = bq_t[:, :, :, None] == bq_k[:, :, None, :]
            dots.masked_fill_(mask, TOKEN_SELF_ATTN_VALUE)
            del mask

        if causal:
            mask = bq_t[:, :, :, None] < bq_k[:, :, None, :]
            dots.masked_fill_(mask, mask_value)
            del mask

        mask = bq_k[:, :, None, :] == -1
        dots.masked_fill_(mask, mask_value)
        del mask

        if input_mask is not None:
            h = b // input_mask.shape[0]
            input_mask = input_mask.reshape(-1, buckets, bucket_size)
            mq = mk = input_mask
            mk = look_around(mk, pad_value=False, **look_around_kwargs)
            mask = (mq[:, None, :, :, None] * mk[:, None, :, None, :])
            mask = merge_dims(0, 1, mask.expand(-1, h, -1, -1, -1))
            dots.masked_fill_(~mask, mask_value)
            del mask

        attn = dots.softmax(dim=-1)
        attn = self.dropout(attn)

        out = torch.einsum('bhij,bhje->bhie', attn, bv)
        out = out.reshape(*shape)
        return out

# kmeans attention

def register_kmeans_update_on_backwards(module):
    module.kmean_attention_modules = find_modules(module, KmeansAttention)
    def hook(_, grad_in, grad_out):
        for m in module.kmean_attention_modules:
            m.update_kmeans()

    return module.register_backward_hook(hook)

class KmeansAttention(nn.Module):
    def __init__(self, num_clusters, window_size, num_heads, head_dim, causal = False, dropout = 0., ema_decay = 0.999):
        super().__init__()
        self.num_heads = num_heads
        self.num_clusters = num_clusters
        self.head_dim = head_dim

        self.window_size = window_size
        self.causal = causal

        self.router = nn.Parameter(torch.randn(num_heads, head_dim, head_dim))

        self.rel_pos = RelativePositionalEmbedding(head_dim, num_heads, window_size)

        self.ema_decay = ema_decay
        self.register_buffer('means', torch.zeros(num_heads, num_clusters, head_dim))
        self.register_buffer('new_means', torch.empty(num_heads, num_clusters, head_dim))
        self.register_buffer('initted', torch.tensor(True))

        self.dropout = nn.Dropout(dropout)

    def update_kmeans(self, new_means = None):
        new_means = default(new_means, self.new_means)
        assert not is_empty(new_means), 'new kmeans has not been supplied'

        first = not self.initted
        ema_inplace(self.means, new_means, 0. if first else self.ema_decay)

        if first:
            self.initted[0] = True

        if not is_empty(self.new_means):
            self.new_means = torch.empty_like(self.new_means)

    def forward(self, qk, v, **kwargs):
        b, h, t, d, wsz, device = *qk.shape, self.window_size, qk.device
        num_clusters = t // wsz

        with torch.no_grad():
            k_routing = torch.einsum('bhtd,hdr->bhtr', qk, self.router)
            k_routing = F.normalize(qk, dim=-1)

            means, dists, se = kmeans(k_routing, self.means, training=self.training, init=not self.initted)
            indices = distribution(dists, wsz)

            if self.training:
                self.new_means.copy_(means)

            indices = indices.contiguous().view(*indices.size()[:2], -1)
        
        qk = batched_index_select(qk, indices)
        v = batched_index_select(v, indices)

        qk, v = map(lambda x: x.reshape(b, h, num_clusters, wsz, d), (qk, v))

        q = qk
        k = F.normalize(qk, 2, dim=-1).type(qk.dtype)

        dots = torch.einsum('bhnid,bhnjd->bhnij', q, k) * (d ** -0.5)
        dots = dots + self.rel_pos(q)

        mask_value = max_neg_value(dots)

        if self.causal:
            mask = torch.ones(wsz, wsz, device=device).byte().triu_(1).bool()
            dots.masked_fill_(mask, mask_value)
            del mask

        mask = torch.eye(wsz, device=dots.device).bool()
        dots.masked_fill_(mask, TOKEN_SELF_ATTN_VALUE)
        del mask

        dots = dots.softmax(dim=-1)
        dots = self.dropout(dots)

        bo = torch.einsum('bhcij,bhcjd->bhcid', dots, v)
        so = torch.reshape(bo, (b, h, -1, bo.shape[-1])).float()
        out = scatter_mean(so, indices.unsqueeze(-1).expand_as(so), -2)
        return out

# feedforward

class GELU_(nn.Module):
    def forward(self, x):
        return 0.5 * x * (1 + torch.tanh(math.sqrt(2 / math.pi) * (x + 0.044715 * torch.pow(x, 3))))

GELU = nn.GELU if hasattr(nn, 'GELU') else GELU_

class FeedForward(nn.Module):
    def __init__(self, dim, mult = 4, dropout = 0., activation = None, glu = False):
        super().__init__()
        activation = default(activation, GELU)

        self.glu = glu
        self.w1 = nn.Linear(dim, dim * mult * (2 if glu else 1))
        self.act = activation()
        self.dropout = nn.Dropout(dropout)
        self.w2 = nn.Linear(dim * mult, dim)

    def forward(self, x, **kwargs):
        if not self.glu:
            x = self.w1(x)
            x = self.act(x)
        else:
            x, v = self.w1(x).chunk(2, dim=-1)
            x = self.act(x) * v

        x = self.dropout(x)
        x = self.w2(x)
        return x

# self attention

class SelfAttention(nn.Module):
    def __init__(self,  dim, depth, max_seq_len, heads, local_attn_heads, window_size, causal = False, attn_dropout = 0., dropout = 0., kmeans_ema_decay = 0.999):
        super().__init__()
        assert (dim % heads) == 0, 'hidden dimension must be divisible by number of heads'
        assert (max_seq_len % window_size) == 0, 'maximum sequence length must be divisible by the target window size'
        assert local_attn_heads <= heads, 'number of local attention heads must be less than total heads'

        self.heads = heads

        self.local_attn_heads = local_attn_heads
        self.global_attn_heads = heads - local_attn_heads

        self.local_attn = self.global_attn = None

        head_dim = dim // heads
        num_clusters = max_seq_len // window_size

        if self.local_attn_heads > 0:
            self.local_attn = LocalAttention(window_size // 2, local_attn_heads, head_dim, causal = True, shared_qk = True, dropout = attn_dropout)

        if self.global_attn_heads > 0:
            self.global_attn = KmeansAttention(num_clusters, window_size, self.global_attn_heads, head_dim, causal = causal, dropout = attn_dropout, ema_decay = kmeans_ema_decay)

        self.to_qkv = nn.Linear(dim, dim * 2, bias = False)
        self.to_out = nn.Linear(dim, dim, bias = False)

        self.dropout = nn.Dropout(dropout)

    def forward(self, x):
        b, t, e, h = *x.shape, self.heads

        qk, v = self.to_qkv(x).chunk(2, dim=-1)
        split_heads = lambda v: v.reshape(b, t, h, -1).transpose(1, 2).contiguous()
        qk, v = map(split_heads, (qk, v))

        split_index_fn = partial(split_at_index, 1, self.local_attn_heads)
        (lqk, qk), (lv, v) = map(split_index_fn, (qk, v))
        has_local, has_global = map(lambda x: x.shape[1] > 0, (lqk, qk))

        out = []
        if has_local:
            out.append(self.local_attn(lqk, lqk, lv))

        if has_global:
            out.append(self.global_attn(qk, v))

        out = torch.cat(out, dim=1)
        out = out.reshape(b, h, t, -1).transpose(1, 2).reshape(b, t, -1)
        out = self.to_out(out)
        return self.dropout(out)

class RoutingTransformer(nn.Module):
    def __init__(self, dim, depth, max_seq_len, heads = 8, window_size = 64, causal = False, attn_dropout = 0., ff_dropout = 0., attn_layer_dropout = 0., layer_dropout = 0., n_local_attn_heads = 0, ff_glu = False, reversible = False, ff_chunks = 1, kmeans_ema_decay = 0.999):
        super().__init__()
        if type(n_local_attn_heads) is not tuple:
            n_local_attn_heads = tuple([n_local_attn_heads] * depth)

        assert len(n_local_attn_heads) == depth, 'local attention heads tuple must have the same length as the depth'
        assert all([local_heads <= heads for local_heads in n_local_attn_heads]), 'number of local attn heads must be less than the maximum number of heads'

        layers = nn.ModuleList([])
        fn_wrapper = partial(PreNorm, dim)

        for ind, local_heads in zip(range(depth), n_local_attn_heads):
            attn = SelfAttention(dim, depth, max_seq_len, heads, local_heads, window_size, causal = causal, attn_dropout = attn_dropout, dropout = attn_layer_dropout, kmeans_ema_decay = kmeans_ema_decay)
            ff = Chunk(ff_chunks, FeedForward(dim, dropout = ff_dropout, glu = ff_glu), along_dim=1)

            attn, ff = map(fn_wrapper, (attn, ff))
            layers.append(nn.ModuleList([attn, ff]))

        execute_type = ReversibleSequence if reversible else SequentialSequence
        self.layers = execute_type(layers, layer_dropout = layer_dropout)
        self.pad_to_window_size = window_size

        self.remove_handle_fn = register_kmeans_update_on_backwards(self)        

    def forward(self, x, **kwargs):
        x = self.layers(x, **kwargs)
        return x

class RoutingTransformerLM(nn.Module):
    def __init__(self, num_tokens, dim, depth, max_seq_len, heads = 8, window_size = 64, causal = False, attn_dropout = 0., ff_dropout = 0., attn_layer_dropout = 0., layer_dropout = 0., ff_mult = 4, ff_activation = None, ff_glu = False, return_embeddings = False, n_local_attn_heads = 0, reversible = False, ff_chunks = 1, kmeans_ema_decay = 0.999):
        super().__init__()
        self.max_seq_len = max_seq_len
        self.token_emb = nn.Embedding(num_tokens, dim)
        self.axial_pos_emb = AxialPositionalEmbedding(dim, max_seq_len, axial_shape=(max_seq_len // window_size, window_size))
        self.routing_transformer = RoutingTransformer(dim, depth, max_seq_len, heads = heads, window_size = window_size, causal = causal, ff_dropout = ff_dropout, attn_dropout = attn_dropout, attn_layer_dropout = attn_layer_dropout, layer_dropout = layer_dropout, n_local_attn_heads = n_local_attn_heads, ff_glu = ff_glu, reversible = reversible, ff_chunks = ff_chunks, kmeans_ema_decay = kmeans_ema_decay)
        self.out = nn.Linear(dim, num_tokens) if not return_embeddings else identity

    def forward(self, x, **kwargs):
        x = self.token_emb(x)
        x = x + self.axial_pos_emb(x)
        x = self.routing_transformer(x, **kwargs)
        return self.out(x)
