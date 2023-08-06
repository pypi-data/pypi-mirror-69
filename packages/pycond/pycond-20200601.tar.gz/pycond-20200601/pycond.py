"""
Condition parser

See README.
See Tests.

DEV Notes:

    f_xyz denotes a function (we work a lot with lambdas and partials)


Q:  Why not pass state inst
A:  The **kw for all functions at run time are for the custom lookup feature:

    model = {'eve': {'last_host': 'somehost'}}

    def my_lu(k, v, req, user, model=model):
        return (model.get(user) or {}).get(k), req[v]

    f = pc.pycond('last_host eq host', lookup=my_lu)

    req = {'host': 'somehost'}
    assert f(req=req, user='joe') == False 
    assert f(req=req, user='eve') == True

    Note: state= via **kw in the sig is even faster than via state=State in the sig!
"""

from __future__ import print_function
import operator, sys
import inspect
import json
from functools import partial
from copy import deepcopy
from ast import literal_eval

PY2 = sys.version_info[0] == 2
# is_str = lambda s: isinstance(s, basestring if PY2 else (bytes, str))
if PY2:
    is_str = lambda s: isinstance(s, basestring)
    sig_args = lambda f: inspect.getargspec(getattr(f, 'func', f)).args
else:
    is_str = lambda s: isinstance(s, (bytes, str))
    sig_args = lambda f: list(inspect.signature(f).parameters.keys())

# fmt:off
# from dir(operator):
_ops = {
    'nr': [
        ['add'        , '+'   ] ,
        ['and_'       , '&'   ] ,
        ['eq'         , '=='  ] ,
        ['floordiv'   , '//'  ] ,
        ['ge'         , '>='  ] ,
        ['gt'         , '>'   ] ,
        ['iadd'       , '+='  ] ,
        ['iand'       , '&='  ] ,
        ['ifloordiv'  , '//=' ] ,
        ['ilshift'    , '<<=' ] ,
        ['imod'       , '%='  ] ,
        ['imul'       , '*='  ] ,
        ['ior'        , '|='  ] ,
        ['ipow'       , '**=' ] ,
        ['irshift'    , '>>=' ] ,
        ['is_'        , 'is'  ] ,
        ['is_not'     , 'is'  ] ,
        ['isub'       , '-='  ] ,
        ['itruediv'   , '/='  ] ,
        ['ixor'       , '^='  ] ,
        ['le'         , '<='  ] ,
        ['lshift'     , '<<'  ] ,
        ['lt'         , '<'   ] ,
        ['mod'        , '%'   ] ,
        ['mul'        , '*'   ] ,
        ['ne'         , '!='  ] ,
        ['or_'        , '|'   ] ,
        ['pow'        , '**'  ] ,
        ['rshift'     , '>>'  ] ,
        ['sub'        , '-'   ] ,
        ['truediv'    , '/'   ] ,
        ['xor'        , '^'   ] ,
        ['itemgetter' , ''    ] , # 'itemgetter(item, ...) --> itemgetter object\n\nReturn a callable object that fetches the given item(s) from its operand.\nAfter f = itemgetter(2), the call f(r) returns r[2].\nAfter g = itemgetter(2, 5, 3), the call g(r) returns (r[2], r[5], r[3])',
        ['length_hint', ''    ] , #'Return an estimate of the number of items in obj.\n\nThis is useful for presizing containers when building from an iterable.\n\nIf the object supports len(), the result will be exact.\nOtherwise, it may over- or under-estimate by an arbitrary amount.\nThe result will be an integer >= 0.',
    ],
    'str': [
        ['attrgetter' , ''    ] , # "attrgetter(attr, ...) --> attrgetter object\n\nReturn a callable object that fetches the given attribute(s) from its operand.\nAfter f = attrgetter('name') , the call f(r) returns r.name.\nAfter g = attrgetter('name' , 'date') , the call g(r) returns (r.name , r.date).\nAfter h = attrgetter('name.first' , 'name.last') , the call h(r) returns\n(r.name.first , r.name.last)." ,
        ['concat'     , '+'   ] ,
        ['contains'   , ''    ] , # 'Same as b in a (note reversed operands).']  ,
        ['countOf'    , ''    ] , #'Return the number of times b occurs in a.'] ,
        ['iconcat'    , '+='  ] ,
        ['indexOf'    , ''    ] , #'Return the first index of b in a.']         ,
        ['methodcaller', ''   ] , #  "methodcaller(name, ...) --> methodcaller object\n\nReturn a callable object that calls the given method on its operand.\nAfter f = methodcaller('name'), the call f(r) returns r.name().\nAfter g = methodcaller('name', 'date', foo=1), the call g(r) returns\nr.name('date', foo=1).",
        ],
}
# fmt:on
OPS = {}
OPS_SYMBOLIC = {}

# extending operators with those:
def truthy(k, v=None):
    return operator.truth(k)


falsy = lambda k, v=None: not truthy(k, v)


def _in(a, b):
    return a in b


def get_ops():
    return _ops


def add_built_in_ops():
    OPS['truthy'] = truthy
    OPS['falsy'] = falsy
    OPS['in'] = _in


def clear_ops():
    OPS.clear()
    OPS_SYMBOLIC.clear()


def parse_ops():
    """Sets up OPs from scratch, using txt opts only"""
    clear_ops()
    for t in 'str', 'nr':
        for k, alias in _ops[t]:
            f = getattr(operator, k, None)
            # the list is python3.7 - not all have all:
            if f:
                OPS[k] = f
                if alias:
                    OPS_SYMBOLIC[alias] = f
    add_built_in_ops()


def ops_use_symbolic(allow_single_eq=False):
    OPS.clear()
    OPS.update(OPS_SYMBOLIC)
    add_built_in_ops()
    if allow_single_eq:
        OPS['='] = OPS['==']


def ops_use_symbolic_and_txt(allow_single_eq=False):
    parse_ops()
    OPS.update(OPS_SYMBOLIC)
    if allow_single_eq:
        OPS['='] = OPS['==']


def ops_reset():
    parse_ops()


ops_use_txt = ops_reset

ops_use_txt()
# see api below for these:
OPS_HK_APPLIED = False


# if val in these we deliver False:
FALSES = (None, False, '', 0, {}, [], ())

# default lookup of keys here - no, module does NOT need to have state.
# its a convenience thing, see tests:
# Discurraged to be used in non-cooperative async situations, since clearly not thread safe - just pass the state into pycond:
State = {}


def state_get_deep(key, val, cfg, state=State, deep='.', **kw):
    # key maybe already path tuple - or string with deep as seperator:
    parts = key.split(deep) if isinstance(key, str) else list(key)
    while parts:
        part = parts.pop(0)
        try:
            state = state.get(part)
        except AttributeError as ex:
            try:
                state = state[int(part)]
            except:
                return None, val
        if not state:
            break
    return state, val


def state_get(key, val, cfg, state=State, **kw):
    # a lookup function can modify key AND value, i.e. returns both:
    if isinstance(key, tuple):
        return state_get_deep(key, val, cfg, state, **kw)
    else:
        return state.get(key), val  # default k, v access function


def dbg_get(key, val, cfg, state=State, *a, **kw):
    res = state_get(key, val, cfg, state, *a, **kw)
    val = 'FALSES' if val == FALSES else val
    out('Lookup:', key, val, '->', res[0])
    return res


out = lambda *m: print(' '.join([str(s) for s in m]))


def comb_or(f, g, **kw):
    return f(**kw) or g(**kw)


def comb_or_not(f, g, **kw):
    return f(**kw) or not g(**kw)


def comb_and(f, g, **kw):
    return f(**kw) and g(**kw)


def comb_and_not(f, g, **kw):
    return f(**kw) and not g(**kw)


def comb_xor(f, g, **kw):
    return bool(f(**kw)) is not bool(g(**kw))


COMB_OPS = {
    'or': comb_or,
    'and': comb_and,
    'or_not': comb_or_not,
    'and_not': comb_and_not,
    'xor': comb_xor,
}  # extensible

# those from user space are also replaced at tokenizing time:
NEG_REV = {'not rev': 'not_rev', 'rev not': 'rev_not'}


def is_deep_list_path(key):
    """
    Identify the first list is a key, i.e. should actually be a tuple:

    [[['a', 'b', 0, 'c'], 'eq', 1], 'and', 'a'] -> should be:
    [[('a', 'b', 0, 'c'), 'eq', 1], 'and', 'a']

    When transferred over json we can't do paths as tuples
    We find if have a deep path by excluding every other option:
    """
    if not isinstance(key, list):
        return
    if any([k for k in key if not isinstance(k, (str, int))]):
        return
    if not (len(key)) > 1:
        return
    if key[1] in COMB_OPS:
        return
    if key[1] in OPS:
        return
    if len(key) == 4 and key[1] in OP_PREFIXES:
        return
    return True


def parse_struct_cond_after_deep_copy(cond, cfg, nfo):
    # resolve any conditions builds using the same subcond refs many times -
    # i.e. remove those refs can create unique items we can modify during parsing:
    # NOTE: This is build time, not eval time, i.e. does not hurt much:
    cond = literal_eval(str(cond))
    res = parse_struct_cond(cond, cfg, nfo)
    return res


KEY_STR_TYP, KEY_TPL_TYP, KEY_LST_TYP = 1, 2, 3


def key_type(key):
    if isinstance(key, str):
        return KEY_STR_TYP
    elif isinstance(key, tuple):
        return KEY_TPL_TYP
    elif isinstance(key, list) and is_deep_list_path(key):
        return KEY_LST_TYP
    return None


def parse_struct_cond(cond, cfg, nfo):
    """this expects json style conditions
    Examples:
    a and b or c - then we map those to the truthy op
    a eq foo and b eq bar
    [a eq foo] and b
    [a eq foo] and [b is baz]
    """
    cfg['foo'] = 'bar'
    nfo['foo'] = 'bar1'
    f1 = None
    while cond:
        key = cond.pop(0)
        kt = key_type(key)
        if kt:
            if kt == KEY_STR_TYP:
                if f1 and key in COMB_OPS:
                    # cond: b eq bar
                    return partial(
                        COMB_OPS[key], f1, parse_struct_cond(cond, cfg, nfo),
                    )
            elif kt == KEY_LST_TYP:
                key = tuple(key)
            ac = [key]
            while cond:
                if isinstance(cond[0], str) and cond[0] in COMB_OPS:
                    break
                ac.append(cond.pop(0))
            f1 = atomic_cond(ac, cfg, nfo)
            # now a combinator MUST come:
        else:
            # key is not a key but the first cond:
            f1 = parse_struct_cond(key, cfg, nfo)
    return f1


# _parse_cond = x_parse_cond

OP_PREFIXES = {'not', 'not_rev', 'rev_not', 'rev'}


def atomic_cond(cond, cfg, nfo):
    # ------------------------------------------------ Handle atomic conditions
    # cond like ['foo', 'not', 'le', '10']
    key = cond.pop(0)
    # autocondition for key only: not rev contains (None, 0, ...):
    if len(cond) == 0:
        comp = 'truthy'
        cond.insert(0, 0)
        cond.insert(0, comp)
    elif len(cond) == 1 and key == 'not':
        key = cond.pop(0)
        comp = 'falsy'
        cond.insert(0, 0)
        cond.insert(0, comp)

    nfo['keys'].add(key)

    # prefixes infront of the operator: not and rev - in any combi:
    # if sep was spc we replaced them at tokenizing with e.g. not_rev
    not_, rev_ = False, False
    # we accept [not] [rev] and also [rev] [not]
    for i in 1, 2:
        if cond[0] in OP_PREFIXES:
            nr = cond.pop(0)
            not_ = True if 'not' in nr else not_
            rev_ = True if 'rev' in nr else rev_

    op = cond.pop(0)
    f_op = OPS.get(op)
    if not f_op:
        raise Exception('Operator %s not known' % op)

    f_ot = cfg.get('ops_thru')
    if f_ot:
        f_op = partial(f_ot, f_op)

    val = cond.pop(0)
    # foo eq "42" -> tokenized to 'foo', 'eq', 'str:42' -> should now not
    # become number 42:
    if str(val).startswith('str:'):
        val = str(val[4:])
    else:
        if cfg.get('autoconv', True):  # can do this in the build phase already:
            val = py_type(val)  # '42' -> 42

    f_lookup = cfg['lookup']
    # we do what we can in the building not the evaluation phase:
    acl = cfg.get('autoconv_lookups', False)
    if 'cfg' in cfg['lookup_args']:
        fp_lookup = partial(f_lookup, key, val, cfg=cfg)
    else:
        fp_lookup = partial(f_lookup, key, val)

    # try save stackframes and evaluations for the eval phase:
    if any((acl, rev_, not_)):
        f_res = partial(f_atomic_arn, f_op, fp_lookup, key, val, not_, rev_, acl)
    else:
        # normal case:
        f_res = partial(f_atomic, f_op, fp_lookup, key, val)
    return f_res


# ------------------------------------------------------------ Evaluation Phase
# we do these two versions for with cfg and w/o to safe a stackframe
# (otherwise a lambda would be required - or checking for cfg at each eval)
# when you change, check this number for effect on perf:
# 2 ~/GitHub/pycond/tests $ python test_pycond.py Perf.test_perf | grep 'fast
# ('With fast lookup function:', 2.1161916086894787)
def f_atomic(f_op, fp_lookup, key, val, **kw):
    # normal case - be fast:
    try:
        return f_op(*fp_lookup(**kw))
    except Exception as ex:
        msg = ''
        if fp_lookup != state_get:
            msg = '. Note: A custom lookup function must return two values:'
            msg += ' The cur. value for key from state plus the compare value.'
        raise Exception('%s. key: %s, compare val: %s%s' % (str(ex), key, val, msg))


def f_atomic_arn(f_op, fp_lookup, key, val, not_, rev_, acl, **kw):
    # when some switches are set in cfg:
    k, v = fp_lookup(**kw)
    if acl is True:
        k = py_type(k)
    if rev_ is True:
        k, v = v, k
    return not f_op(k, v) if not_ == True else f_op(k, v)


# ------------------------------------------------------------------ Public API
def sorted_keys(l):
    a = [i for i in l if isinstance(i, tuple)]
    b = l - set(a)
    return sorted(list(b)) + sorted(a, key=len)


def deserialize_str(cond, check_dict=False, **cfg):
    try:
        return json.loads(cond), cfg
    except:
        pass
    cfg['brkts'] = brkts = cfg.get('brkts', '[]')

    if check_dict:
        # in def qualify we accept textual (flat) dicts.
        # The cond strings (v) will be sent again into this method.
        p = cond.split(':', 1)
        if len(p) > 1 and not ' ' in p[0] and not brkts[0] in p[0]:
            kvs = [c.strip().split(':', 1) for c in cond.split(',')]
            return dict([(k.strip(), v.strip()) for k, v in kvs]), cfg

    sep = cfg.pop('sep', KV_DELIM)
    if cond.startswith('deep:'):
        cond = cond.split('deep:', 1)[1].strip()
        cfg['deep'] = '.'
    cond = tokenize(cond, sep=sep, brkts=brkts)
    return to_struct(cond, cfg['brkts']), cfg


def parse_cond(cond, lookup=state_get, **cfg):
    """ Main function.
        see tests
    """
    nfo = {'keys': set()}
    if is_str(cond):
        cond, cfg = deserialize_str(cond, **cfg)

    if cfg.get('get_struct'):
        return cond, cfg

    if cfg.get('deep'):
        lookup = partial(state_get_deep, deep=cfg['deep'])

    lp = cfg.get('lookup_provider')
    if lp:
        lookup = lookup_from_provider(lp, cfg, lookup)

    cfg['lookup'] = lookup
    cfg['lookup_args'] = sig_args(lookup)
    cond = parse_struct_cond_after_deep_copy(cond, cfg, nfo)
    nfo['keys'] = sorted_keys(nfo['keys'])
    provider = cfg.get('ctx_provider')
    if provider:
        nfo['complete_ctx'] = complete_ctx_data(nfo['keys'], provider=provider)
    return cond, nfo


nil = '\x01'


def complete_ctx_data(keys, provider):
    def _getter(ctx, keys, provider):
        for k in keys:
            v = ctx.get(k, nil)
            if v != nil:
                continue
            ctx[k] = getattr(provider, k)(ctx)
        return ctx

    return partial(_getter, keys=keys, provider=provider)


def lookup_from_provider(provider, cfg, lookup):
    def _lookup(k, v, state, provider, cfg, lookup):
        kv = from_cache(state, k, v)
        if kv:
            return kv
        kv = lookup(k, v, cfg, state=state)
        if kv[0] != None:
            return kv
        f = getattr(provider, k, None)
        if not f:
            return None, v
        val = state[CACHE_KEY][k] = f(state)
        return val, v

    return partial(_lookup, provider=provider, cfg=cfg, lookup=lookup)


def pycond(cond, *a, **cfg):
    """ condition function - for those who don't need meta infos """
    return parse_cond(cond, *a, **cfg)[0]


def run_all_ops_thru(f_hook):
    """ wraps ALL operator evals within a custom function"""
    global OPS_HK_APPLIED
    if OPS_HK_APPLIED == f_hook:
        return

    def ops_wrapper(f_op, f_hook, a, b):
        return f_hook(f_op, a, b)

    ops = OPS.keys()
    for k in ops:
        OPS[k] = partial(ops_wrapper, OPS[k], f_hook)
    OPS_HK_APPLIED = f_hook


def py_type(v):
    if not is_str(v):
        return v

    def _(v):
        # returns a str(v) if float and int do not work:
        for t in float, int, str:
            try:
                return t(v)
            except:
                pass

    return (
        True
        if v == 'true'
        else False
        if v == 'false'
        else None
        if v == 'None'
        else _(v)
    )


# -------------- Following Code Only for Parsing String Conditions Into Structs

KV_DELIM = ' '  # default seperator for strings


def tokenize(cond, sep=KV_DELIM, brkts=('[', ']')):
    """ walk throug a single string expression """
    # '[[ a' -> '[ [ a', then split
    esc, escaped, have_apo_seps = [], [], False

    # remove the space from the ops here, comb ops are like 'and_not':
    for op in COMB_OPS:
        if '_' in op:
            cond = cond.replace(op.replace('_', sep), op)
    for op, repl in NEG_REV.items():
        cond = cond.replace(op, repl)

    cond = [c for c in cond]
    r = []
    while cond:
        c = cond.pop(0)
        have_apo = False
        for apo in '"', "'":
            if c != apo:
                continue
            have_apo = True
            r += 'str:'
            while cond and cond[0] != apo:  # and r[-1] != '\\':
                c = cond.pop(0)
                if c == sep:
                    c = '__sep__'
                    have_apo_seps = True
                r += c
            if cond:
                cond.pop(0)
            continue
        if have_apo:
            continue

        # esape:
        if c == '\\':
            c = cond.pop(0)
            if c in escaped:
                key = esc[escaped.index(c)]
            else:
                escaped.append(c)
                key = '__esc__%s' % len(escaped)
                esc.append(key)
            r += key
            continue

        isbr = False
        if c in brkts:
            isbr = True
            if r and r[-1] != sep:
                r += sep
        r += c
        if isbr and cond and cond[0] != sep:
            r += sep

    cond = ''.join(r)

    # replace back the escaped stuff:
    if not esc:
        # be fast:
        res = cond.split(sep)
    else:
        # fastets before splitting:
        cond = cond.replace(sep, '__ESC__')
        for i in range(len(esc)):
            cond = cond.replace(esc[i], escaped[i])
        res = cond.split('__ESC__')
    # replace back the previously excluded stuff in apostrophes:
    if have_apo_seps:
        res = [part.replace('__sep__', sep) for part in res]
    return res


def to_struct(cond, brackets='[]'):
    """Recursively scanning through a tokenized expression and building the
    condition function step by step
    """
    openbrkt, closebrkt = brackets
    expr1 = None
    res = []
    while cond:
        part = cond.pop(0)
        if part == openbrkt:
            lev = 1
            inner = []
            while not (lev == 1 and cond[0] == closebrkt):
                inner.append(cond.pop(0))
                if inner[-1] == openbrkt:
                    lev += 1
                elif inner[-1] == closebrkt:
                    lev -= 1
            cond.pop(0)
            res.append(to_struct(inner, brackets))
        else:
            res.append(part)

    return res


# ----------------------------------------------------------------------------- qualify
def norm(cond):
    kt = key_type(cond[0])
    if kt:
        cond = [cond]
    if len(cond) == 1:
        return cond, True
    elif isinstance(cond[1], str) and cond[1] in COMB_OPS:
        return cond, True
    # A list of conds:
    return cond, False


def init_conds(conds, cfg, d, prefix=()):
    """
    Recurses into conds

    """
    # a multi cond is a list of conds, with substreams behind
    if isinstance(conds, str):
        conds = deserialize_str(conds, **cfg)[0]

    if not isinstance(conds, (list, dict)) or not conds:
        raise Exception('Cannot parse: %s' % str(conds))
    if isinstance(conds, list):
        cond, is_single = norm(conds)
        if is_single:
            return {'cond': conds}
        else:
            return [init_conds(c, cfg, d, prefix) for c in conds]
            # conds = dict([(i, c) for i, c in zip(range(len(conds)), conds)])

    elif isinstance(conds, dict):
        res = [[k, init_conds(v, cfg, d, prefix + (k,))] for k, v in conds.items()]
        d.update(dict(res))
        return res

    raise


def build(conds, lookup, cfg):
    if isinstance(conds, dict) and 'cond' in conds:
        conds['built'] = parse_cond(conds['cond'], lookup, **cfg)
        return

    for k, v in conds:
        if isinstance(v, list):
            [build(c, lookup, cfg) for c in v]
        else:
            build(v, lookup, cfg)


CACHE_KEY = '.pyc_cache'


def pop_cache(state):
    return state.pop(CACHE_KEY, 0)


def from_cache(state, key, val):
    cache = state.get(CACHE_KEY)
    if cache is None:
        cache = state[CACHE_KEY] = {}
    v = cache.get(key, nil)
    if v != nil:
        return v, val


def sub_lookup(lookup):
    def lu(key, v, cfg, state=State, lookup=lookup, **kw):
        kv = from_cache(state, key, v)
        if kv:
            return kv
        kv = lookup(key, v, cfg, state, **kw)
        if kv[0] != None:
            return kv
        kvs = lookup(key, v, cfg, state=cfg['sub'], **kw)
        if kvs[0] == None:
            return kv
        val = state[CACHE_KEY][key] = kvs[0]['built'][0](state=state, **kw)
        return val, v

    return lu


def qualify(conds, lookup=state_get, **cfg):
    if isinstance(conds, str):
        conds, cfg = deserialize_str(conds, check_dict=True, **cfg)
    d = {}
    conds = init_conds(conds, cfg, d)
    cfg['sub'] = d
    build(conds, sub_lookup(lookup), cfg)

    root = cfg.get('root')
    if 'root' in d and root is None:
        root = 'root'
    if root:
        # put it first, we'll break after evaling that:
        c = []
        for k, v in conds:
            if k == root:
                c.insert(0, [k, v])
            else:
                c.append([k, v])
        conds = c

    def run_conds(state, conds=conds, subs=d, root=root, **kw):

        if isinstance(conds, dict):
            built = conds.get('built')
            if built:
                return built[0](state=state, **kw)
            raise  # never

        r = {}
        for k, v in conds:
            if isinstance(v, list):
                r[k] = [run_conds(state, c, d, **kw) for c in v]
            else:
                r[k] = run_conds(state, v, d, **kw)
            if root:
                break
        c = pop_cache(state)
        r.update(c)
        return r

    return run_conds
