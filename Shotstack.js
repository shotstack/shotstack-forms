function v() {
}
function Be(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function De(t) {
  return t();
}
function he() {
  return /* @__PURE__ */ Object.create(null);
}
function U(t) {
  t.forEach(De);
}
function ne(t) {
  return typeof t == "function";
}
function N(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let G;
function Je(t, e) {
  return G || (G = document.createElement("a")), G.href = e, t === G.href;
}
function Qe(t) {
  return Object.keys(t).length === 0;
}
function He(t, ...e) {
  if (t == null)
    return v;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function pe(t, e, n) {
  t.$$.on_destroy.push(He(e, n));
}
function Ve(t, e, n, l) {
  if (t) {
    const r = Oe(t, e, n, l);
    return t[0](r);
  }
}
function Oe(t, e, n, l) {
  return t[1] && l ? Be(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function Ge(t, e, n, l) {
  if (t[2] && l) {
    const r = t[2](l(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], i = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < i; o += 1)
        s[o] = e.dirty[o] | r[o];
      return s;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function qe(t, e, n, l, r, s) {
  if (r) {
    const i = Oe(e, n, l, s);
    t.p(i, r);
  }
}
function Ze(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function h(t, e) {
  t.appendChild(e);
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function I(t) {
  t.parentNode.removeChild(t);
}
function Ae(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function p(t) {
  return document.createElement(t);
}
function K(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function P(t) {
  return document.createTextNode(t);
}
function D() {
  return P(" ");
}
function k(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function fe(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function We(t) {
  return Array.from(t.childNodes);
}
function re(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function _e(t, e) {
  t.value = e == null ? "" : e;
}
function L(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let de;
function Q(t) {
  de = t;
}
const J = [], ee = [], W = [], ie = [], Xe = Promise.resolve();
let ue = !1;
function Ke() {
  ue || (ue = !0, Xe.then(ke));
}
function oe(t) {
  W.push(t);
}
function be(t) {
  ie.push(t);
}
const se = /* @__PURE__ */ new Set();
let q = 0;
function ke() {
  const t = de;
  do {
    for (; q < J.length; ) {
      const e = J[q];
      q++, Q(e), et(e.$$);
    }
    for (Q(null), J.length = 0, q = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < W.length; e += 1) {
      const n = W[e];
      se.has(n) || (se.add(n), n());
    }
    W.length = 0;
  } while (J.length);
  for (; ie.length; )
    ie.pop()();
  ue = !1, se.clear(), Q(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), U(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(oe);
  }
}
const X = /* @__PURE__ */ new Set();
let z;
function $e() {
  z = {
    r: 0,
    c: [],
    p: z
  };
}
function Le() {
  z.r || U(z.c), z = z.p;
}
function w(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function y(t, e, n, l) {
  if (t && t.o) {
    if (X.has(t))
      return;
    X.add(t), z.c.push(() => {
      X.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function we(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function S(t) {
  t && t.c();
}
function F(t, e, n, l) {
  const { fragment: r, on_mount: s, on_destroy: i, after_update: o } = t.$$;
  r && r.m(e, n), l || oe(() => {
    const a = s.map(De).filter(ne);
    i ? i.push(...a) : U(a), t.$$.on_mount = [];
  }), o.forEach(oe);
}
function T(t, e) {
  const n = t.$$;
  n.fragment !== null && (U(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (J.push(t), Ke(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function C(t, e, n, l, r, s, i, o = [-1]) {
  const a = de;
  Q(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: v,
    not_equal: r,
    bound: he(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: he(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, m, ..._) => {
    const g = _.length ? _[0] : m;
    return u.ctx && r(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), c && tt(t, f)), m;
  }) : [], u.update(), c = !0, U(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = We(e.target);
      u.fragment && u.fragment.l(f), f.forEach(I);
    } else
      u.fragment && u.fragment.c();
    e.intro && w(t.$$.fragment), F(t, e.target, e.anchor, e.customElement), ke();
  }
  Q(a);
}
class j {
  $destroy() {
    T(this, 1), this.$destroy = v;
  }
  $on(e, n) {
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Qe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const nt = "A 'merge' property is required", rt = "Property 'merge' must be an array", lt = "A 'find' property is required on every element inside 'merge'", st = "Every 'find' property inside 'merge' must be of type string", it = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", ut = "A 'replace' property is required on every element inside 'merge'", ot = "Unexpected error while parsing template JSON", at = "Every element inside the 'merge' should be an object";
var ct = Object.defineProperty, ft = Object.defineProperties, dt = Object.getOwnPropertyDescriptors, ve = Object.getOwnPropertySymbols, mt = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable, ye = (t, e, n) => e in t ? ct(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ht = (t, e) => {
  for (var n in e || (e = {}))
    mt.call(e, n) && ye(t, n, e[n]);
  if (ve)
    for (var n of ve(e))
      gt.call(e, n) && ye(t, n, e[n]);
  return t;
}, pt = (t, e) => ft(t, dt(e));
class $ extends Error {
  constructor(e) {
    super(e);
  }
}
function _t(t) {
  return typeof t == "object";
}
function le(t, e) {
  return t in e;
}
function ae(t, e) {
  return !le(t, e);
}
function bt(t, e) {
  return le(t, e) && !(e[t] instanceof Array);
}
function wt(t, e) {
  return le(t, e) && typeof e[t] != "string";
}
function vt(t, e) {
  const n = le(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function yt(t) {
  try {
    const e = JSON.parse(t);
    if (ae("merge", e))
      throw new $(nt);
    if (bt("merge", e))
      throw new $(rt);
    const { merge: n } = e, l = It(n);
    return pt(ht({}, e), { merge: l });
  } catch (e) {
    throw Pe(e);
  }
}
function It(t) {
  return t.map((n) => {
    if (!_t(n))
      throw new $(at);
    if (ae("find", n))
      throw new $(lt);
    if (ae("replace", n))
      throw new $(ut);
    if (wt("find", n))
      throw new $(st);
    if (vt("find", n))
      throw new $(it);
    return n;
  }).map(({ find: n, replace: l }) => ({
    find: n,
    replace: xe(l)
  }));
}
function Mt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Pe(t) {
  return t instanceof Error ? t : Mt(t) ? new $(t.message) : new $(ot);
}
function xe(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
function ce(t) {
  const e = new RegExp("(?<={{).+(?=}})|(?<={{).+(?=}$)|(?<={{).+(?=$)", "g"), n = t.match(e);
  return n && n.toString().trim() || t;
}
var Ft = Object.defineProperty, Tt = Object.defineProperties, St = Object.getOwnPropertyDescriptors, Ie = Object.getOwnPropertySymbols, Nt = Object.prototype.hasOwnProperty, Ct = Object.prototype.propertyIsEnumerable, Me = (t, e, n) => e in t ? Ft(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, B = (t, e) => {
  for (var n in e || (e = {}))
    Nt.call(e, n) && Me(t, n, e[n]);
  if (Ie)
    for (var n of Ie(e))
      Ct.call(e, n) && Me(t, n, e[n]);
  return t;
}, Z = (t, e) => Tt(t, St(e));
class ze {
  constructor(e) {
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = {
      change: [],
      submit: [],
      error: [this.logger],
      upload: []
    }, this.setTemplateSource(e);
  }
  set error(e) {
    const n = this._error && B({}, this._error) || null;
    this._error = e, e !== null && this.handlers.error.forEach((l) => l(e, n));
  }
  get error() {
    return this._error;
  }
  set result(e) {
    this._result = e, this.handlers.change.forEach((n) => n(e));
  }
  get result() {
    return this._result;
  }
  on(e, n) {
    this.handlers[e].push(n);
  }
  off(e, n) {
    this.handlers = Z(B({}, this.handlers), {
      [e]: this.handlers[e].filter((l) => l !== n)
    });
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const n = yt(xe(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const l = Pe(n);
      this.error = l;
    }
  }
  updateResultMergeFields(e, n) {
    const l = n || this.getMergeFieldItem({ find: e.find });
    return this.result.merge.forEach((r) => {
      r === l && (r.find = e.find, r.replace = e.replace);
    }), this.result = Z(B({}, this.result), { merge: this.result.merge }), this.result.merge;
  }
  logger(e) {
    console.error(e);
  }
  addMergeField(e) {
    this.setTemplateSource(Z(B({}, this.result), {
      merge: [...this.result.merge, e]
    }));
  }
  removeMergeField(e) {
    this.setTemplateSource(Z(B({}, this.result), {
      merge: this.result.merge.filter((n) => n !== e)
    }));
  }
  getMergeFieldItem(e) {
    if (Object.keys(e).length === 0)
      return;
    const n = function(l) {
      let r;
      for (r in e)
        if (l[r] !== e[r])
          return !1;
      return !0;
    };
    return this.result.merge.find(n);
  }
  getSrcPlaceholders() {
    if (!this.template.timeline || !this.template.timeline.tracks)
      return [];
    const e = this.template.timeline.tracks, n = [];
    for (let l = 0; l < e.length; l++)
      for (let r = 0; r < e[l].clips.length; r++) {
        const s = {
          placeholder: e[l].clips[r].asset.src,
          asset: e[l].clips[r].asset
        };
        ce(s.placeholder) !== s.placeholder && n.push(s);
      }
    return n;
  }
  async updateSrc(e, n) {
    let l = n.src;
    for (let r = 0; r < this.handlers.upload.length; r++) {
      const s = this.handlers.upload[r];
      l = await s(e);
    }
    n.src = l, this.handlers.change.forEach((r) => r(this.result));
  }
}
const jt = [
  {
    find: "NAME",
    replace: "world"
  }
], Et = {
  tracks: [
    {
      clips: [
        {
          asset: {
            type: "title",
            text: "Hello {{ NAME }}",
            style: "future",
            src: "{{ ASSET }}"
          },
          start: 0,
          length: 5
        }
      ]
    }
  ]
}, Dt = {
  format: "mp4",
  resolution: "hd"
}, Ot = {
  merge: jt,
  timeline: Et,
  output: Dt
}, R = [];
function Fe(t, e = v) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(o) {
    if (N(t, o) && (t = o, n)) {
      const a = !R.length;
      for (const u of l)
        u[1](), R.push(u, t);
      if (a) {
        for (let u = 0; u < R.length; u += 2)
          R[u][0](R[u + 1]);
        R.length = 0;
      }
    }
  }
  function s(o) {
    r(o(t));
  }
  function i(o, a = v) {
    const u = [o, a];
    return l.add(u), l.size === 1 && (n = e(r) || v), o(t), () => {
      l.delete(u), l.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: i };
}
function At(t) {
  let e, n, l;
  return {
    c() {
      e = p("input"), d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text"), d(e, "role", "textbox"), d(e, "aria-label", t[1]);
    },
    m(r, s) {
      M(r, e, s), _e(e, t[0]), n || (l = [
        k(e, "input", t[3]),
        k(e, "focus", t[4], { once: !0 })
      ], n = !0);
    },
    p(r, [s]) {
      s & 2 && d(e, "aria-label", r[1]), s & 1 && e.value !== r[0] && _e(e, r[0]);
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), n = !1, U(l);
    }
  };
}
function kt(t, e, n) {
  let { value: l } = e, { label: r } = e, { onFocus: s } = e;
  function i() {
    l = this.value, n(0, l);
  }
  const o = (a) => s(a.currentTarget);
  return t.$$set = (a) => {
    "value" in a && n(0, l = a.value), "label" in a && n(1, r = a.label), "onFocus" in a && n(2, s = a.onFocus);
  }, [l, r, s, i, o];
}
class Te extends j {
  constructor(e) {
    super(), C(this, e, kt, At, N, { value: 0, label: 1, onFocus: 2 });
  }
}
function $t(t) {
  let e, n, l, r, s, i, o, a, u, c, f, m, _, g, b, E;
  function A(O) {
    t[7](O);
  }
  let Y = {
    label: "MergeField.find",
    onFocus: t[6]
  };
  t[1] !== void 0 && (Y.value = t[1]), i = new Te({ props: Y }), ee.push(() => we(i, "value", A));
  function H(O) {
    t[9](O);
  }
  let x = {
    label: "MergeField.replace",
    onFocus: t[8]
  };
  return t[2] !== void 0 && (x.value = t[2]), u = new Te({ props: x }), ee.push(() => we(u, "value", H)), {
    c() {
      e = p("div"), n = p("div"), l = p("h1"), l.textContent = "Add a new merge field", r = D(), s = p("div"), S(i.$$.fragment), a = D(), S(u.$$.fragment), f = D(), m = p("div"), _ = p("button"), _.textContent = "Add", d(l, "class", "text-teal-400 px-1"), d(_, "aria-label", "Add field"), d(_, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), d(m, "class", "flex flex-row-reverse"), d(s, "class", "border p-4 mb-6"), d(e, "data-cy", "add-merge-field-section");
    },
    m(O, V) {
      M(O, e, V), h(e, n), h(n, l), h(n, r), h(n, s), F(i, s, null), h(s, a), F(u, s, null), h(s, f), h(s, m), h(m, _), g = !0, b || (E = k(_, "click", fe(t[10])), b = !0);
    },
    p(O, [V]) {
      const me = {};
      !o && V & 2 && (o = !0, me.value = O[1], be(() => o = !1)), i.$set(me);
      const ge = {};
      !c && V & 4 && (c = !0, ge.value = O[2], be(() => c = !1)), u.$set(ge);
    },
    i(O) {
      g || (w(i.$$.fragment, O), w(u.$$.fragment, O), g = !0);
    },
    o(O) {
      y(i.$$.fragment, O), y(u.$$.fragment, O), g = !1;
    },
    d(O) {
      O && I(e), T(i), T(u), b = !1, E();
    }
  };
}
function Lt(t, e, n) {
  let l, r, s = Fe("find");
  pe(t, s, (g) => n(1, l = g));
  let i = Fe("replace");
  pe(t, i, (g) => n(2, r = g));
  let o = (g) => g.set(""), { addField: a } = e;
  const u = () => o(s);
  function c(g) {
    l = g, s.set(l);
  }
  const f = () => o(i);
  function m(g) {
    r = g, i.set(r);
  }
  const _ = () => a({ find: l, replace: r });
  return t.$$set = (g) => {
    "addField" in g && n(0, a = g.addField);
  }, [
    a,
    l,
    r,
    s,
    i,
    o,
    u,
    c,
    f,
    m,
    _
  ];
}
class Pt extends j {
  constructor(e) {
    super(), C(this, e, Lt, $t, N, { addField: 0 });
  }
}
function xt(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), d(n, "fill", "white"), d(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function zt(t) {
  return [];
}
class Yt extends j {
  constructor(e) {
    super(), C(this, e, zt, xt, N, {});
  }
}
function Rt(t) {
  let e, n, l, r, s;
  return n = new Yt({}), {
    c() {
      e = p("button"), S(n.$$.fragment), d(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"), d(e, "aria-label", "Remove field");
    },
    m(i, o) {
      M(i, e, o), F(n, e, null), l = !0, r || (s = k(e, "click", fe(function() {
        ne(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(i, [o]) {
      t = i;
    },
    i(i) {
      l || (w(n.$$.fragment, i), l = !0);
    },
    o(i) {
      y(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && I(e), T(n), r = !1, s();
    }
  };
}
function Ut(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class Bt extends j {
  constructor(e) {
    super(), C(this, e, Ut, Rt, N, { onClick: 0 });
  }
}
function Jt(t) {
  let e, n;
  return {
    c() {
      e = p("label"), n = P(t[0]), d(e, "for", t[0]), d(e, "class", "block mb-2 monospace"), d(e, "aria-label", "Current label Arial");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p(l, [r]) {
      r & 1 && re(n, l[0]), r & 1 && d(e, "for", l[0]);
    },
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function Qt(t, e, n) {
  let { find: l } = e;
  return t.$$set = (r) => {
    "find" in r && n(0, l = r.find);
  }, [l];
}
class Ht extends j {
  constructor(e) {
    super(), C(this, e, Qt, Jt, N, { find: 0 });
  }
}
function Vt(t) {
  let e, n, l;
  return {
    c() {
      e = p("input"), d(e, "role", "textbox"), d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text"), e.value = t[2], d(e, "label", t[1]);
    },
    m(r, s) {
      M(r, e, s), n || (l = k(e, "input", t[4]), n = !0);
    },
    p(r, [s]) {
      s & 4 && e.value !== r[2] && (e.value = r[2]), s & 2 && d(e, "label", r[1]);
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), n = !1, l();
    }
  };
}
function Gt(t, e, n) {
  let { field: l } = e, { find: r } = e, { replace: s } = e, { handleFormInput: i } = e;
  const o = (a) => i({ find: r, replace: a.currentTarget.value }, l);
  return t.$$set = (a) => {
    "field" in a && n(0, l = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, s = a.replace), "handleFormInput" in a && n(3, i = a.handleFormInput);
  }, [l, r, s, i, o];
}
class qt extends j {
  constructor(e) {
    super(), C(this, e, Gt, Vt, N, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function Zt(t) {
  let e, n, l, r, s;
  return n = new Ht({ props: { find: t[0].find } }), r = new qt({
    props: {
      find: t[0].find,
      replace: t[0].replace,
      field: t[0],
      handleFormInput: t[1]
    }
  }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), d(e, "data-cy", "label-input");
    },
    m(i, o) {
      M(i, e, o), F(n, e, null), h(e, l), F(r, e, null), s = !0;
    },
    p(i, [o]) {
      const a = {};
      o & 1 && (a.find = i[0].find), n.$set(a);
      const u = {};
      o & 1 && (u.find = i[0].find), o & 1 && (u.replace = i[0].replace), o & 1 && (u.field = i[0]), o & 2 && (u.handleFormInput = i[1]), r.$set(u);
    },
    i(i) {
      s || (w(n.$$.fragment, i), w(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(n.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && I(e), T(n), T(r);
    }
  };
}
function Wt(t, e, n) {
  let { field: l } = e, { handleFormInput: r } = e;
  return t.$$set = (s) => {
    "field" in s && n(0, l = s.field), "handleFormInput" in s && n(1, r = s.handleFormInput);
  }, [l, r];
}
class Ye extends j {
  constructor(e) {
    super(), C(this, e, Wt, Zt, N, { field: 0, handleFormInput: 1 });
  }
}
function Se(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l;
}
function Ne(t) {
  let e, n, l, r, s, i;
  n = new Ye({
    props: {
      field: t[6],
      handleFormInput: t[2]
    }
  });
  function o() {
    return t[5](t[6]);
  }
  return r = new Bt({ props: { onClick: o } }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), s = D(), d(e, "class", "relative");
    },
    m(a, u) {
      M(a, e, u), F(n, e, null), h(e, l), F(r, e, null), h(e, s), i = !0;
    },
    p(a, u) {
      t = a;
      const c = {};
      u & 2 && (c.field = t[6]), u & 4 && (c.handleFormInput = t[2]), n.$set(c);
      const f = {};
      u & 18 && (f.onClick = o), r.$set(f);
    },
    i(a) {
      i || (w(n.$$.fragment, a), w(r.$$.fragment, a), i = !0);
    },
    o(a) {
      y(n.$$.fragment, a), y(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && I(e), T(n), T(r);
    }
  };
}
function Xt(t) {
  let e, n, l, r, s, i, o, a, u = t[1], c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = Ne(Se(t, u, m));
  const f = (m) => y(c[m], 1, 1, () => {
    c[m] = null;
  });
  return o = new Pt({ props: { addField: t[3] } }), {
    c() {
      e = p("div"), n = p("div"), l = p("h1"), l.textContent = "Modify Merge Values", r = D(), s = p("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      i = D(), S(o.$$.fragment), d(l, "class", "text-teal-400 px-1"), d(s, "class", "border p-4 mb-6"), d(n, "data-cy", "merge-fields-input-section"), L(e, "hidden", t[0]);
    },
    m(m, _) {
      M(m, e, _), h(e, n), h(n, l), h(n, r), h(n, s);
      for (let g = 0; g < c.length; g += 1)
        c[g].m(s, null);
      h(e, i), F(o, e, null), a = !0;
    },
    p(m, [_]) {
      if (_ & 22) {
        u = m[1];
        let b;
        for (b = 0; b < u.length; b += 1) {
          const E = Se(m, u, b);
          c[b] ? (c[b].p(E, _), w(c[b], 1)) : (c[b] = Ne(E), c[b].c(), w(c[b], 1), c[b].m(s, null));
        }
        for ($e(), b = u.length; b < c.length; b += 1)
          f(b);
        Le();
      }
      const g = {};
      _ & 8 && (g.addField = m[3]), o.$set(g), (!a || _ & 1) && L(e, "hidden", m[0]);
    },
    i(m) {
      if (!a) {
        for (let _ = 0; _ < u.length; _ += 1)
          w(c[_]);
        w(o.$$.fragment, m), a = !0;
      }
    },
    o(m) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        y(c[_]);
      y(o.$$.fragment, m), a = !1;
    },
    d(m) {
      m && I(e), Ae(c, m), T(o);
    }
  };
}
function Kt(t, e, n) {
  let { error: l } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: i } = e, { removeField: o } = e;
  const a = (u) => o(u);
  return t.$$set = (u) => {
    "error" in u && n(0, l = u.error), "fields" in u && n(1, r = u.fields), "handleFormInput" in u && n(2, s = u.handleFormInput), "addField" in u && n(3, i = u.addField), "removeField" in u && n(4, o = u.removeField);
  }, [l, r, s, i, o, a];
}
class en extends j {
  constructor(e) {
    super(), C(this, e, Kt, Xt, N, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function tn(t) {
  let e, n, l;
  return {
    c() {
      e = p("button"), e.textContent = "Reset", d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(r, s) {
      M(r, e, s), n || (l = k(e, "click", fe(function() {
        ne(t[0]) && t[0].apply(this, arguments);
      })), n = !0);
    },
    p(r, [s]) {
      t = r;
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), n = !1, l();
    }
  };
}
function nn(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class rn extends j {
  constructor(e) {
    super(), C(this, e, nn, tn, N, { onClick: 0 });
  }
}
function ln(t) {
  let e, n, l, r, s, i, o, a;
  return o = new rn({ props: { onClick: t[0] } }), {
    c() {
      e = p("div"), n = p("p"), l = p("span"), r = P(t[2]), s = D(), i = p("div"), S(o.$$.fragment), d(l, "class", "monospace text-orange-900"), d(n, "data-cy", "template-input-error"), d(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), d(i, "class", "flex flex-row-reverse "), d(e, "data-cy", "error-container"), L(e, "hidden", !t[1]);
    },
    m(u, c) {
      M(u, e, c), h(e, n), h(n, l), h(l, r), h(e, s), h(e, i), F(o, i, null), a = !0;
    },
    p(u, [c]) {
      (!a || c & 4) && re(r, u[2]);
      const f = {};
      c & 1 && (f.onClick = u[0]), o.$set(f), (!a || c & 2) && L(e, "hidden", !u[1]);
    },
    i(u) {
      a || (w(o.$$.fragment, u), a = !0);
    },
    o(u) {
      y(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && I(e), T(o);
    }
  };
}
function sn(t, e, n) {
  let l, { onClick: r } = e, { error: s } = e;
  return t.$$set = (i) => {
    "onClick" in i && n(0, r = i.onClick), "error" in i && n(1, s = i.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, l = s && s.message || "");
  }, [r, s, l];
}
class un extends j {
  constructor(e) {
    super(), C(this, e, sn, ln, N, { onClick: 0, error: 1 });
  }
}
const Ce = (t, e) => async (n) => await e(n, t);
function on(t) {
  let e, n, l = ce(t[1]) + "", r, s, i, o, a, u, c;
  return {
    c() {
      e = p("div"), n = p("label"), r = P(l), s = D(), i = p("input"), o = D(), a = p("input"), d(n, "class", "block mb-2 monospace"), d(n, "for", "input"), d(i, "aria-label", "Current source value"), d(i, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(i, "type", "text"), i.value = t[0], i.disabled = !0, a.disabled = t[2], d(a, "role", "button"), d(a, "aria-label", "File upload"), d(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(a, "type", "file"), d(e, "data-cy", "source-input");
    },
    m(f, m) {
      M(f, e, m), h(e, n), h(n, r), h(e, s), h(e, i), h(e, o), h(e, a), u || (c = k(a, "change", t[7]), u = !0);
    },
    p(f, [m]) {
      m & 2 && l !== (l = ce(f[1]) + "") && re(r, l), m & 1 && i.value !== f[0] && (i.value = f[0]), m & 4 && (a.disabled = f[2]);
    },
    i: v,
    o: v,
    d(f) {
      f && I(e), u = !1, c();
    }
  };
}
function an(t, e, n) {
  let l, { asset: r } = e, { value: s } = e, { label: i } = e, { handleChange: o } = e, a = !1, u = async (f) => {
    n(6, a = !0), await o(f), n(0, s = r.src), n(6, a = !1);
  };
  const c = (f) => u(f.currentTarget.files);
  return t.$$set = (f) => {
    "asset" in f && n(4, r = f.asset), "value" in f && n(0, s = f.value), "label" in f && n(1, i = f.label), "handleChange" in f && n(5, o = f.handleChange);
  }, t.$$.update = () => {
    t.$$.dirty & 64 && n(2, l = a);
  }, [s, i, l, u, r, o, a, c];
}
class Re extends j {
  constructor(e) {
    super(), C(this, e, an, on, N, {
      asset: 4,
      value: 0,
      label: 1,
      handleChange: 5
    });
  }
}
function je(t, e, n) {
  const l = t.slice();
  return l[2] = e[n], l;
}
function Ee(t) {
  let e, n;
  return e = new Re({
    props: {
      label: t[2].placeholder,
      handleChange: Ce(t[2].asset, t[1]),
      value: t[2].asset.src,
      asset: t[2].asset
    }
  }), {
    c() {
      S(e.$$.fragment);
    },
    m(l, r) {
      F(e, l, r), n = !0;
    },
    p(l, r) {
      const s = {};
      r & 1 && (s.label = l[2].placeholder), r & 3 && (s.handleChange = Ce(l[2].asset, l[1])), r & 1 && (s.value = l[2].asset.src), r & 1 && (s.asset = l[2].asset), e.$set(s);
    },
    i(l) {
      n || (w(e.$$.fragment, l), n = !0);
    },
    o(l) {
      y(e.$$.fragment, l), n = !1;
    },
    d(l) {
      T(e, l);
    }
  };
}
function cn(t) {
  let e, n, l, r, s, i = t[0], o = [];
  for (let u = 0; u < i.length; u += 1)
    o[u] = Ee(je(t, i, u));
  const a = (u) => y(o[u], 1, 1, () => {
    o[u] = null;
  });
  return {
    c() {
      e = p("div"), n = p("h1"), n.textContent = "Update sources", l = D(), r = p("div");
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      d(n, "class", "text-teal-400 px-1"), d(r, "class", "border p-4 mb-6"), d(e, "data-cy", "source-container"), L(e, "hidden", t[0].length < 1);
    },
    m(u, c) {
      M(u, e, c), h(e, n), h(e, l), h(e, r);
      for (let f = 0; f < o.length; f += 1)
        o[f].m(r, null);
      s = !0;
    },
    p(u, [c]) {
      if (c & 3) {
        i = u[0];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const m = je(u, i, f);
          o[f] ? (o[f].p(m, c), w(o[f], 1)) : (o[f] = Ee(m), o[f].c(), w(o[f], 1), o[f].m(r, null));
        }
        for ($e(), f = i.length; f < o.length; f += 1)
          a(f);
        Le();
      }
      (!s || c & 1) && L(e, "hidden", u[0].length < 1);
    },
    i(u) {
      if (!s) {
        for (let c = 0; c < i.length; c += 1)
          w(o[c]);
        s = !0;
      }
    },
    o(u) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        y(o[c]);
      s = !1;
    },
    d(u) {
      u && I(e), Ae(o, u);
    }
  };
}
function fn(t, e, n) {
  let { sources: l } = e, { handleSourceFieldUpdate: r } = e;
  return t.$$set = (s) => {
    "sources" in s && n(0, l = s.sources), "handleSourceFieldUpdate" in s && n(1, r = s.handleSourceFieldUpdate);
  }, [l, r];
}
class dn extends j {
  constructor(e) {
    super(), C(this, e, fn, cn, N, { sources: 0, handleSourceFieldUpdate: 1 });
  }
}
function mn(t) {
  let e, n;
  const l = t[1].default, r = Ve(l, t, t[0], null);
  return {
    c() {
      e = p("label"), r && r.c(), d(e, "for", "json-input"), d(e, "class", "text-teal-400 px-1");
    },
    m(s, i) {
      M(s, e, i), r && r.m(e, null), n = !0;
    },
    p(s, [i]) {
      r && r.p && (!n || i & 1) && qe(
        r,
        l,
        s,
        s[0],
        n ? Ge(l, s[0], i, null) : Ze(s[0]),
        null
      );
    },
    i(s) {
      n || (w(r, s), n = !0);
    },
    o(s) {
      y(r, s), n = !1;
    },
    d(s) {
      s && I(e), r && r.d(s);
    }
  };
}
function gn(t, e, n) {
  let { $$slots: l = {}, $$scope: r } = e;
  return t.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, l];
}
class Ue extends j {
  constructor(e) {
    super(), C(this, e, gn, mn, N, {});
  }
}
function te(t) {
  return JSON.stringify(t, null, 2);
}
function hn(t) {
  let e, n, l, r;
  return {
    c() {
      e = p("textarea"), d(e, "data-cy", "template-input"), d(e, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"), d(e, "id", "json-input"), e.value = n = te(t[1]);
    },
    m(s, i) {
      M(s, e, i), l || (r = k(e, "input", t[2]), l = !0);
    },
    p(s, [i]) {
      i & 2 && n !== (n = te(s[1])) && (e.value = n);
    },
    i: v,
    o: v,
    d(s) {
      s && I(e), l = !1, r();
    }
  };
}
function pn(t, e, n) {
  let { handleTemplateInput: l } = e, { template: r } = e;
  const s = (i) => l(i.currentTarget.value);
  return t.$$set = (i) => {
    "handleTemplateInput" in i && n(0, l = i.handleTemplateInput), "template" in i && n(1, r = i.template);
  }, [l, r, s];
}
class _n extends j {
  constructor(e) {
    super(), C(this, e, pn, hn, N, { handleTemplateInput: 0, template: 1 });
  }
}
function bn(t) {
  let e;
  return {
    c() {
      e = P("Paste template");
    },
    m(n, l) {
      M(n, e, l);
    },
    d(n) {
      n && I(e);
    }
  };
}
function wn(t) {
  let e, n, l, r, s;
  return n = new Ue({
    props: {
      $$slots: { default: [bn] },
      $$scope: { ctx: t }
    }
  }), r = new _n({
    props: {
      template: t[0],
      handleTemplateInput: t[1]
    }
  }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), d(e, "data-cy", "template-input-section"), d(e, "class", "mb-6");
    },
    m(i, o) {
      M(i, e, o), F(n, e, null), h(e, l), F(r, e, null), s = !0;
    },
    p(i, [o]) {
      const a = {};
      o & 4 && (a.$$scope = { dirty: o, ctx: i }), n.$set(a);
      const u = {};
      o & 1 && (u.template = i[0]), o & 2 && (u.handleTemplateInput = i[1]), r.$set(u);
    },
    i(i) {
      s || (w(n.$$.fragment, i), w(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(n.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && I(e), T(n), T(r);
    }
  };
}
function vn(t, e, n) {
  let { template: l } = e, { handleTemplateInput: r } = e;
  return t.$$set = (s) => {
    "template" in s && n(0, l = s.template), "handleTemplateInput" in s && n(1, r = s.handleTemplateInput);
  }, [l, r];
}
class yn extends j {
  constructor(e) {
    super(), C(this, e, vn, wn, N, { template: 0, handleTemplateInput: 1 });
  }
}
function In(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), d(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), d(e, "class", "fill-current w-4 h-4 mr-2"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function Mn(t) {
  return [];
}
class Fn extends j {
  constructor(e) {
    super(), C(this, e, Mn, In, N, {});
  }
}
function Tn(t) {
  let e, n, l, r;
  return n = new Fn({}), {
    c() {
      e = p("a"), S(n.$$.fragment), l = P(`
	Download`), d(e, "href", t[0]), d(e, "download", "result.json"), d(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, i) {
      M(s, e, i), F(n, e, null), h(e, l), r = !0;
    },
    p(s, [i]) {
      (!r || i & 1) && d(e, "href", s[0]);
    },
    i(s) {
      r || (w(n.$$.fragment, s), r = !0);
    },
    o(s) {
      y(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && I(e), T(n);
    }
  };
}
function Sn(t, e, n) {
  let { download: l = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, l = r.download);
  }, [l];
}
class Nn extends j {
  constructor(e) {
    super(), C(this, e, Sn, Tn, N, { download: 0 });
  }
}
function Cn(t) {
  let e, n, l;
  return {
    c() {
      e = p("button"), e.textContent = "Submit", d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(r, s) {
      M(r, e, s), n || (l = k(e, "click", function() {
        ne(t[0]) && t[0].apply(this, arguments);
      }), n = !0);
    },
    p(r, [s]) {
      t = r;
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), n = !1, l();
    }
  };
}
function jn(t, e, n) {
  let { submit: l } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, l = r.submit);
  }, [l];
}
class En extends j {
  constructor(e) {
    super(), C(this, e, jn, Cn, N, { submit: 0 });
  }
}
function Dn(t) {
  let e, n, l, r, s;
  return n = new Nn({ props: { download: t[0] } }), r = new En({ props: { submit: t[1] } }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), d(e, "class", "flex justify-between pt-4");
    },
    m(i, o) {
      M(i, e, o), F(n, e, null), h(e, l), F(r, e, null), s = !0;
    },
    p(i, [o]) {
      const a = {};
      o & 1 && (a.download = i[0]), n.$set(a);
      const u = {};
      o & 2 && (u.submit = i[1]), r.$set(u);
    },
    i(i) {
      s || (w(n.$$.fragment, i), w(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(n.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && I(e), T(n), T(r);
    }
  };
}
function On(t, e, n) {
  let { download: l = "" } = e, { submit: r } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, l = s.download), "submit" in s && n(1, r = s.submit);
  }, [l, r];
}
class An extends j {
  constructor(e) {
    super(), C(this, e, On, Dn, N, { download: 0, submit: 1 });
  }
}
function kn(t) {
  navigator.clipboard.writeText(JSON.stringify(t)), alert("JSON copied to clipboard!");
}
const $n = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==";
function Ln(t) {
  let e, n, l, r, s;
  return {
    c() {
      e = p("abbr"), n = p("img"), Je(n.src, l = $n) || d(n, "src", l), d(n, "alt", "copy-button"), d(n, "class", "h-4 cursor-pointer inline mb-1"), d(e, "title", "Copy to clipboard");
    },
    m(i, o) {
      M(i, e, o), h(e, n), r || (s = k(n, "click", t[1]), r = !0);
    },
    p: v,
    i: v,
    o: v,
    d(i) {
      i && I(e), r = !1, s();
    }
  };
}
function Pn(t, e, n) {
  let { result: l } = e;
  const r = () => kn(l);
  return t.$$set = (s) => {
    "result" in s && n(0, l = s.result);
  }, [l, r];
}
class xn extends j {
  constructor(e) {
    super(), C(this, e, Pn, Ln, N, { result: 0 });
  }
}
function zn(t) {
  let e, n;
  return {
    c() {
      e = p("p"), n = P(t[0]), d(e, "data-cy", "result"), d(e, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p(l, [r]) {
      r & 1 && re(n, l[0]);
    },
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function Yn(t, e, n) {
  let { text: l } = e;
  return t.$$set = (r) => {
    "text" in r && n(0, l = r.text);
  }, [l];
}
class Rn extends j {
  constructor(e) {
    super(), C(this, e, Yn, zn, N, { text: 0 });
  }
}
function Un(t) {
  let e;
  return {
    c() {
      e = P("Result");
    },
    m(n, l) {
      M(n, e, l);
    },
    d(n) {
      n && I(e);
    }
  };
}
function Bn(t) {
  let e, n, l, r, s, i, o, a, u;
  return n = new Ue({
    props: {
      $$slots: { default: [Un] },
      $$scope: { ctx: t }
    }
  }), r = new xn({ props: { result: t[0] } }), i = new Rn({
    props: { text: te(t[0]) }
  }), a = new An({
    props: {
      submit: t[2],
      download: t[1]
    }
  }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), s = D(), S(i.$$.fragment), o = D(), S(a.$$.fragment), d(e, "data-cy", "result-section"), L(e, "hidden", t[3]);
    },
    m(c, f) {
      M(c, e, f), F(n, e, null), h(e, l), F(r, e, null), h(e, s), F(i, e, null), h(e, o), F(a, e, null), u = !0;
    },
    p(c, [f]) {
      const m = {};
      f & 16 && (m.$$scope = { dirty: f, ctx: c }), n.$set(m);
      const _ = {};
      f & 1 && (_.result = c[0]), r.$set(_);
      const g = {};
      f & 1 && (g.text = te(c[0])), i.$set(g);
      const b = {};
      f & 4 && (b.submit = c[2]), f & 2 && (b.download = c[1]), a.$set(b), (!u || f & 8) && L(e, "hidden", c[3]);
    },
    i(c) {
      u || (w(n.$$.fragment, c), w(r.$$.fragment, c), w(i.$$.fragment, c), w(a.$$.fragment, c), u = !0);
    },
    o(c) {
      y(n.$$.fragment, c), y(r.$$.fragment, c), y(i.$$.fragment, c), y(a.$$.fragment, c), u = !1;
    },
    d(c) {
      c && I(e), T(n), T(r), T(i), T(a);
    }
  };
}
function Jn(t, e, n) {
  let { result: l } = e, { download: r } = e, { submit: s } = e, { error: i } = e;
  return t.$$set = (o) => {
    "result" in o && n(0, l = o.result), "download" in o && n(1, r = o.download), "submit" in o && n(2, s = o.submit), "error" in o && n(3, i = o.error);
  }, [l, r, s, i];
}
class Qn extends j {
  constructor(e) {
    super(), C(this, e, Jn, Bn, N, {
      result: 0,
      download: 1,
      submit: 2,
      error: 3
    });
  }
}
function Hn(t) {
  let e, n, l, r, s, i, o, a, u, c, f, m, _;
  return r = new yn({
    props: {
      template: t[1],
      handleTemplateInput: t[5]
    }
  }), i = new un({
    props: {
      error: t[2],
      onClick: t[10]
    }
  }), a = new en({
    props: {
      fields: t[0].merge,
      handleFormInput: t[6],
      addField: t[8],
      removeField: t[9],
      error: t[2]
    }
  }), c = new dn({
    props: {
      sources: t[3],
      handleSourceFieldUpdate: t[11]
    }
  }), m = new Qn({
    props: {
      submit: t[7],
      download: t[4],
      result: t[0],
      error: t[2]
    }
  }), {
    c() {
      e = p("div"), n = p("section"), l = p("form"), S(r.$$.fragment), s = D(), S(i.$$.fragment), o = D(), S(a.$$.fragment), u = D(), S(c.$$.fragment), f = D(), S(m.$$.fragment), d(l, "class", "svelte-r93edu"), d(n, "data-cy", "form-container"), d(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), d(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(g, b) {
      M(g, e, b), h(e, n), h(n, l), F(r, l, null), h(l, s), F(i, l, null), h(l, o), F(a, l, null), h(l, u), F(c, l, null), h(n, f), F(m, n, null), _ = !0;
    },
    p(g, [b]) {
      const E = {};
      b & 2 && (E.template = g[1]), r.$set(E);
      const A = {};
      b & 4 && (A.error = g[2]), i.$set(A);
      const Y = {};
      b & 1 && (Y.fields = g[0].merge), b & 4 && (Y.error = g[2]), a.$set(Y);
      const H = {};
      b & 8 && (H.sources = g[3]), c.$set(H);
      const x = {};
      b & 16 && (x.download = g[4]), b & 1 && (x.result = g[0]), b & 4 && (x.error = g[2]), m.$set(x);
    },
    i(g) {
      _ || (w(r.$$.fragment, g), w(i.$$.fragment, g), w(a.$$.fragment, g), w(c.$$.fragment, g), w(m.$$.fragment, g), _ = !0);
    },
    o(g) {
      y(r.$$.fragment, g), y(i.$$.fragment, g), y(a.$$.fragment, g), y(c.$$.fragment, g), y(m.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && I(e), T(r), T(i), T(a), T(c), T(m);
    }
  };
}
function Vn(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function Gn(t, e, n) {
  let l, { editTemplateService: r = new ze(Ot) } = e, s = r.template, i = r.result, o = null, a = r.getSrcPlaceholders();
  function u(E) {
    r.setTemplateSource(E), n(1, s = r.template), n(0, i = r.result), n(2, o = r.error), n(3, a = r.getSrcPlaceholders());
  }
  function c(E, A) {
    r.updateResultMergeFields(E, A), n(0, i = r.result);
  }
  function f() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function m(E) {
    r.addMergeField(E), n(1, s = r.template), n(0, i = r.result), n(2, o = r.error);
  }
  function _(E) {
    const A = r.getMergeFieldItem(E);
    r.removeMergeField(A), n(1, s = r.template), n(0, i = r.result), n(2, o = r.error);
  }
  function g() {
    r.setTemplateSource(r.result), n(1, s = r.template), n(0, i = r.result), n(2, o = r.error);
  }
  async function b(E, A) {
    await r.updateSrc(E, A), n(1, s = r.template), n(0, i = r.result);
  }
  return t.$$set = (E) => {
    "editTemplateService" in E && n(12, r = E.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(4, l = Vn(i) || "");
  }, [
    i,
    s,
    o,
    a,
    l,
    u,
    c,
    f,
    m,
    _,
    g,
    b,
    r
  ];
}
class qn extends j {
  constructor(e) {
    super(), C(this, e, Gn, Hn, N, { editTemplateService: 12 });
  }
}
class Zn {
  constructor(e) {
    this.templateService = new ze(e), this.container = void 0;
  }
  on(e, n) {
    this.templateService.on(e, n);
  }
  off(e, n) {
    this.templateService.off(e, n);
  }
  submit() {
    this.templateService.submit();
  }
  renderForm(e) {
    this.container = e, new qn({
      target: e,
      props: {
        editTemplateService: this.templateService
      }
    });
  }
  renderElements(e, n) {
    const l = this.getInputs();
    n ? n.after(...l) : e.append(...l);
  }
  display() {
    this.container && (this.container.style.display = "block");
  }
  hide() {
    this.container && (this.container.style.display = "none");
  }
  attach(e) {
    this.remove(), this.container = e, this.renderForm(this.container);
  }
  remove() {
    this.container && this.container.replaceChildren();
  }
  merge() {
    return this.templateService.result;
  }
  load(e) {
    this.templateService.setTemplateSource(e);
  }
  addField(e, n) {
    this.templateService.addMergeField({ find: e, replace: n });
  }
  removeField(e) {
    this.templateService.removeMergeField(e);
  }
  getField(e) {
    return this.templateService.getMergeFieldItem(e);
  }
  getInputs() {
    const e = document.createElement("div");
    return this.renderMergeFields(e), this.renderSourceFields(e), e.children;
  }
  renderMergeFields(e) {
    this.templateService.template.merge.forEach(
      (n) => new Ye({
        target: e,
        props: {
          field: n,
          handleFormInput: (l) => {
            this.templateService.updateResultMergeFields(l, n);
          }
        }
      })
    );
  }
  renderSourceFields(e) {
    this.templateService.getSrcPlaceholders().forEach(
      (n) => new Re({
        target: e,
        props: {
          value: n.asset.src,
          asset: n.asset,
          label: n.placeholder,
          handleChange: async (l) => {
            await this.templateService.updateSrc(l, n.asset);
          }
        }
      })
    );
  }
}
export {
  Zn as default
};
