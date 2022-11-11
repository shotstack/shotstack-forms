function v() {
}
function Be(n, e) {
  for (const t in e)
    n[t] = e[t];
  return n;
}
function De(n) {
  return n();
}
function he() {
  return /* @__PURE__ */ Object.create(null);
}
function U(n) {
  n.forEach(De);
}
function ne(n) {
  return typeof n == "function";
}
function N(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let G;
function Je(n, e) {
  return G || (G = document.createElement("a")), G.href = e, n === G.href;
}
function Qe(n) {
  return Object.keys(n).length === 0;
}
function He(n, ...e) {
  if (n == null)
    return v;
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function pe(n, e, t) {
  n.$$.on_destroy.push(He(e, t));
}
function Ve(n, e, t, l) {
  if (n) {
    const r = Oe(n, e, t, l);
    return n[0](r);
  }
}
function Oe(n, e, t, l) {
  return n[1] && l ? Be(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function Ge(n, e, t, l) {
  if (n[2] && l) {
    const r = n[2](l(t));
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
function qe(n, e, t, l, r, s) {
  if (r) {
    const i = Oe(e, t, l, s);
    n.p(i, r);
  }
}
function Ze(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function h(n, e) {
  n.appendChild(e);
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function I(n) {
  n.parentNode.removeChild(n);
}
function Ae(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function p(n) {
  return document.createElement(n);
}
function K(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function x(n) {
  return document.createTextNode(n);
}
function D() {
  return x(" ");
}
function k(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function fe(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function d(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function We(n) {
  return Array.from(n.childNodes);
}
function re(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = e);
}
function _e(n, e) {
  n.value = e == null ? "" : e;
}
function $(n, e, t) {
  n.classList[t ? "add" : "remove"](e);
}
let de;
function Q(n) {
  de = n;
}
const J = [], ee = [], W = [], ie = [], Xe = Promise.resolve();
let ue = !1;
function Ke() {
  ue || (ue = !0, Xe.then(ke));
}
function oe(n) {
  W.push(n);
}
function be(n) {
  ie.push(n);
}
const se = /* @__PURE__ */ new Set();
let q = 0;
function ke() {
  const n = de;
  do {
    for (; q < J.length; ) {
      const e = J[q];
      q++, Q(e), et(e.$$);
    }
    for (Q(null), J.length = 0, q = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < W.length; e += 1) {
      const t = W[e];
      se.has(t) || (se.add(t), t());
    }
    W.length = 0;
  } while (J.length);
  for (; ie.length; )
    ie.pop()();
  ue = !1, se.clear(), Q(n);
}
function et(n) {
  if (n.fragment !== null) {
    n.update(), U(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(oe);
  }
}
const X = /* @__PURE__ */ new Set();
let z;
function Le() {
  z = {
    r: 0,
    c: [],
    p: z
  };
}
function $e() {
  z.r || U(z.c), z = z.p;
}
function w(n, e) {
  n && n.i && (X.delete(n), n.i(e));
}
function y(n, e, t, l) {
  if (n && n.o) {
    if (X.has(n))
      return;
    X.add(n), z.c.push(() => {
      X.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function we(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function S(n) {
  n && n.c();
}
function F(n, e, t, l) {
  const { fragment: r, on_mount: s, on_destroy: i, after_update: o } = n.$$;
  r && r.m(e, t), l || oe(() => {
    const a = s.map(De).filter(ne);
    i ? i.push(...a) : U(a), n.$$.on_mount = [];
  }), o.forEach(oe);
}
function T(n, e) {
  const t = n.$$;
  t.fragment !== null && (U(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function tt(n, e) {
  n.$$.dirty[0] === -1 && (J.push(n), Ke(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function C(n, e, t, l, r, s, i, o = [-1]) {
  const a = de;
  Q(n);
  const u = n.$$ = {
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
  if (u.ctx = t ? t(n, e.props || {}, (f, g, ..._) => {
    const m = _.length ? _[0] : g;
    return u.ctx && r(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && tt(n, f)), g;
  }) : [], u.update(), c = !0, U(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = We(e.target);
      u.fragment && u.fragment.l(f), f.forEach(I);
    } else
      u.fragment && u.fragment.c();
    e.intro && w(n.$$.fragment), F(n, e.target, e.anchor, e.customElement), ke();
  }
  Q(a);
}
class j {
  $destroy() {
    T(this, 1), this.$destroy = v;
  }
  $on(e, t) {
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const r = l.indexOf(t);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Qe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const nt = "A 'merge' property is required", rt = "Property 'merge' must be an array", lt = "A 'find' property is required on every element inside 'merge'", st = "Every 'find' property inside 'merge' must be of type string", it = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", ut = "A 'replace' property is required on every element inside 'merge'", ot = "Unexpected error while parsing template JSON", at = "Every element inside the 'merge' should be an object";
var ct = Object.defineProperty, ft = Object.defineProperties, dt = Object.getOwnPropertyDescriptors, ve = Object.getOwnPropertySymbols, mt = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable, ye = (n, e, t) => e in n ? ct(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, ht = (n, e) => {
  for (var t in e || (e = {}))
    mt.call(e, t) && ye(n, t, e[t]);
  if (ve)
    for (var t of ve(e))
      gt.call(e, t) && ye(n, t, e[t]);
  return n;
}, pt = (n, e) => ft(n, dt(e));
class L extends Error {
  constructor(e) {
    super(e);
  }
}
function _t(n) {
  return typeof n == "object";
}
function le(n, e) {
  return n in e;
}
function ae(n, e) {
  return !le(n, e);
}
function bt(n, e) {
  return le(n, e) && !(e[n] instanceof Array);
}
function wt(n, e) {
  return le(n, e) && typeof e[n] != "string";
}
function vt(n, e) {
  const t = le(n, e) && e[n];
  return !(typeof t == "string" && t.length > 0);
}
function yt(n) {
  try {
    const e = JSON.parse(n);
    if (ae("merge", e))
      throw new L(nt);
    if (bt("merge", e))
      throw new L(rt);
    const { merge: t } = e, l = It(t);
    return pt(ht({}, e), { merge: l });
  } catch (e) {
    throw xe(e);
  }
}
function It(n) {
  return n.map((t) => {
    if (!_t(t))
      throw new L(at);
    if (ae("find", t))
      throw new L(lt);
    if (ae("replace", t))
      throw new L(ut);
    if (wt("find", t))
      throw new L(st);
    if (vt("find", t))
      throw new L(it);
    return t;
  }).map(({ find: t, replace: l }) => ({
    find: t,
    replace: Pe(l)
  }));
}
function Mt(n) {
  return typeof n == "object" && n !== null && "message" in n;
}
function xe(n) {
  return n instanceof Error ? n : Mt(n) ? new L(n.message) : new L(ot);
}
function Pe(n) {
  return typeof n == "string" ? n : JSON.stringify(n);
}
function ce(n) {
  const e = new RegExp("(?<={{).+(?=}})|(?<={{).+(?=}$)|(?<={{).+(?=$)", "g"), t = n.match(e);
  return t && t.toString().trim() || n;
}
var Ft = Object.defineProperty, Tt = Object.defineProperties, St = Object.getOwnPropertyDescriptors, Ie = Object.getOwnPropertySymbols, Nt = Object.prototype.hasOwnProperty, Ct = Object.prototype.propertyIsEnumerable, Me = (n, e, t) => e in n ? Ft(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, B = (n, e) => {
  for (var t in e || (e = {}))
    Nt.call(e, t) && Me(n, t, e[t]);
  if (Ie)
    for (var t of Ie(e))
      Ct.call(e, t) && Me(n, t, e[t]);
  return n;
}, Z = (n, e) => Tt(n, St(e));
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
    const t = this._error && B({}, this._error) || null;
    this._error = e, e !== null && this.handlers.error.forEach((l) => l(e, t));
  }
  get error() {
    return this._error;
  }
  set result(e) {
    this._result = e, this.handlers.change.forEach((t) => t(e));
  }
  get result() {
    return this._result;
  }
  on(e, t) {
    this.handlers[e].push(t);
  }
  off(e, t) {
    this.handlers = Z(B({}, this.handlers), {
      [e]: this.handlers[e].filter((l) => l !== t)
    });
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const t = yt(Pe(e));
      this.template = t, this.result = t, this.error = null;
    } catch (t) {
      const l = xe(t);
      this.error = l;
    }
  }
  updateResultMergeFields(e, t) {
    const l = t || this.getMergeFieldItem({ find: e.find });
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
      merge: this.result.merge.filter((t) => t !== e)
    }));
  }
  getMergeFieldItem(e) {
    if (Object.keys(e).length === 0)
      return;
    const t = function(l) {
      let r;
      for (r in e)
        if (l[r] !== e[r])
          return !1;
      return !0;
    };
    return this.result.merge.find(t);
  }
  getSrcPlaceholders() {
    if (!this.template.timeline || !this.template.timeline.tracks)
      return [];
    const e = this.template.timeline.tracks, t = [];
    for (let l = 0; l < e.length; l++)
      for (let r = 0; r < e[l].clips.length; r++) {
        const s = {
          placeholder: e[l].clips[r].asset.src,
          asset: e[l].clips[r].asset
        };
        ce(s.placeholder) !== s.placeholder && t.push(s);
      }
    return t;
  }
  async updateSrc(e, t) {
    let l = t.src;
    for (let r = 0; r < this.handlers.upload.length; r++) {
      const s = this.handlers.upload[r];
      l = await s(e);
    }
    t.src = l, this.handlers.change.forEach((r) => r(this.result));
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
function Fe(n, e = v) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function r(o) {
    if (N(n, o) && (n = o, t)) {
      const a = !R.length;
      for (const u of l)
        u[1](), R.push(u, n);
      if (a) {
        for (let u = 0; u < R.length; u += 2)
          R[u][0](R[u + 1]);
        R.length = 0;
      }
    }
  }
  function s(o) {
    r(o(n));
  }
  function i(o, a = v) {
    const u = [o, a];
    return l.add(u), l.size === 1 && (t = e(r) || v), o(n), () => {
      l.delete(u), l.size === 0 && (t(), t = null);
    };
  }
  return { set: r, update: s, subscribe: i };
}
function At(n) {
  let e, t, l;
  return {
    c() {
      e = p("input"), d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text"), d(e, "role", "textbox"), d(e, "aria-label", n[1]);
    },
    m(r, s) {
      M(r, e, s), _e(e, n[0]), t || (l = [
        k(e, "input", n[3]),
        k(e, "focus", n[4], { once: !0 })
      ], t = !0);
    },
    p(r, [s]) {
      s & 2 && d(e, "aria-label", r[1]), s & 1 && e.value !== r[0] && _e(e, r[0]);
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), t = !1, U(l);
    }
  };
}
function kt(n, e, t) {
  let { value: l } = e, { label: r } = e, { onFocus: s } = e;
  function i() {
    l = this.value, t(0, l);
  }
  const o = (a) => s(a.currentTarget);
  return n.$$set = (a) => {
    "value" in a && t(0, l = a.value), "label" in a && t(1, r = a.label), "onFocus" in a && t(2, s = a.onFocus);
  }, [l, r, s, i, o];
}
class Te extends j {
  constructor(e) {
    super(), C(this, e, kt, At, N, { value: 0, label: 1, onFocus: 2 });
  }
}
function Lt(n) {
  let e, t, l, r, s, i, o, a, u, c, f, g, _, m, b, E;
  function A(O) {
    n[7](O);
  }
  let Y = {
    label: "MergeField.find",
    onFocus: n[6]
  };
  n[1] !== void 0 && (Y.value = n[1]), i = new Te({ props: Y }), ee.push(() => we(i, "value", A));
  function H(O) {
    n[9](O);
  }
  let P = {
    label: "MergeField.replace",
    onFocus: n[8]
  };
  return n[2] !== void 0 && (P.value = n[2]), u = new Te({ props: P }), ee.push(() => we(u, "value", H)), {
    c() {
      e = p("div"), t = p("div"), l = p("h1"), l.textContent = "Add a new merge field", r = D(), s = p("div"), S(i.$$.fragment), a = D(), S(u.$$.fragment), f = D(), g = p("div"), _ = p("button"), _.textContent = "Add", d(l, "class", "text-teal-400 px-1"), d(_, "aria-label", "Add field"), d(_, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), d(g, "class", "flex flex-row-reverse"), d(s, "class", "border p-4 mb-6"), d(e, "data-cy", "add-merge-field-section");
    },
    m(O, V) {
      M(O, e, V), h(e, t), h(t, l), h(t, r), h(t, s), F(i, s, null), h(s, a), F(u, s, null), h(s, f), h(s, g), h(g, _), m = !0, b || (E = k(_, "click", fe(n[10])), b = !0);
    },
    p(O, [V]) {
      const me = {};
      !o && V & 2 && (o = !0, me.value = O[1], be(() => o = !1)), i.$set(me);
      const ge = {};
      !c && V & 4 && (c = !0, ge.value = O[2], be(() => c = !1)), u.$set(ge);
    },
    i(O) {
      m || (w(i.$$.fragment, O), w(u.$$.fragment, O), m = !0);
    },
    o(O) {
      y(i.$$.fragment, O), y(u.$$.fragment, O), m = !1;
    },
    d(O) {
      O && I(e), T(i), T(u), b = !1, E();
    }
  };
}
function $t(n, e, t) {
  let l, r, s = Fe("find");
  pe(n, s, (m) => t(1, l = m));
  let i = Fe("replace");
  pe(n, i, (m) => t(2, r = m));
  let o = (m) => m.set(""), { addField: a } = e;
  const u = () => o(s);
  function c(m) {
    l = m, s.set(l);
  }
  const f = () => o(i);
  function g(m) {
    r = m, i.set(r);
  }
  const _ = () => a({ find: l, replace: r });
  return n.$$set = (m) => {
    "addField" in m && t(0, a = m.addField);
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
    g,
    _
  ];
}
class xt extends j {
  constructor(e) {
    super(), C(this, e, $t, Lt, N, { addField: 0 });
  }
}
function Pt(n) {
  let e, t;
  return {
    c() {
      e = K("svg"), t = K("path"), d(t, "fill", "white"), d(t, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      M(l, e, r), h(e, t);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function zt(n) {
  return [];
}
class Yt extends j {
  constructor(e) {
    super(), C(this, e, zt, Pt, N, {});
  }
}
function Rt(n) {
  let e, t, l, r, s;
  return t = new Yt({}), {
    c() {
      e = p("button"), S(t.$$.fragment), d(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"), d(e, "aria-label", "Remove field");
    },
    m(i, o) {
      M(i, e, o), F(t, e, null), l = !0, r || (s = k(e, "click", fe(function() {
        ne(n[0]) && n[0].apply(this, arguments);
      })), r = !0);
    },
    p(i, [o]) {
      n = i;
    },
    i(i) {
      l || (w(t.$$.fragment, i), l = !0);
    },
    o(i) {
      y(t.$$.fragment, i), l = !1;
    },
    d(i) {
      i && I(e), T(t), r = !1, s();
    }
  };
}
function Ut(n, e, t) {
  let { onClick: l } = e;
  return n.$$set = (r) => {
    "onClick" in r && t(0, l = r.onClick);
  }, [l];
}
class Bt extends j {
  constructor(e) {
    super(), C(this, e, Ut, Rt, N, { onClick: 0 });
  }
}
function Jt(n) {
  let e, t;
  return {
    c() {
      e = p("label"), t = x(n[0]), d(e, "for", n[0]), d(e, "class", "block mb-2 monospace");
    },
    m(l, r) {
      M(l, e, r), h(e, t);
    },
    p(l, [r]) {
      r & 1 && re(t, l[0]), r & 1 && d(e, "for", l[0]);
    },
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function Qt(n, e, t) {
  let { find: l } = e;
  return n.$$set = (r) => {
    "find" in r && t(0, l = r.find);
  }, [l];
}
class Ht extends j {
  constructor(e) {
    super(), C(this, e, Qt, Jt, N, { find: 0 });
  }
}
function Vt(n) {
  let e, t, l;
  return {
    c() {
      e = p("input"), d(e, "role", "textbox"), d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text"), e.value = n[2], d(e, "label", n[1]);
    },
    m(r, s) {
      M(r, e, s), t || (l = k(e, "input", n[4]), t = !0);
    },
    p(r, [s]) {
      s & 4 && e.value !== r[2] && (e.value = r[2]), s & 2 && d(e, "label", r[1]);
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), t = !1, l();
    }
  };
}
function Gt(n, e, t) {
  let { field: l } = e, { find: r } = e, { replace: s } = e, { handleFormInput: i } = e;
  const o = (a) => i({ find: r, replace: a.currentTarget.value }, l);
  return n.$$set = (a) => {
    "field" in a && t(0, l = a.field), "find" in a && t(1, r = a.find), "replace" in a && t(2, s = a.replace), "handleFormInput" in a && t(3, i = a.handleFormInput);
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
function Zt(n) {
  let e, t, l, r, s;
  return t = new Ht({ props: { find: n[0].find } }), r = new qt({
    props: {
      find: n[0].find,
      replace: n[0].replace,
      field: n[0],
      handleFormInput: n[1]
    }
  }), {
    c() {
      e = p("div"), S(t.$$.fragment), l = D(), S(r.$$.fragment), d(e, "data-cy", "label-input");
    },
    m(i, o) {
      M(i, e, o), F(t, e, null), h(e, l), F(r, e, null), s = !0;
    },
    p(i, [o]) {
      const a = {};
      o & 1 && (a.find = i[0].find), t.$set(a);
      const u = {};
      o & 1 && (u.find = i[0].find), o & 1 && (u.replace = i[0].replace), o & 1 && (u.field = i[0]), o & 2 && (u.handleFormInput = i[1]), r.$set(u);
    },
    i(i) {
      s || (w(t.$$.fragment, i), w(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(t.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && I(e), T(t), T(r);
    }
  };
}
function Wt(n, e, t) {
  let { field: l } = e, { handleFormInput: r } = e;
  return n.$$set = (s) => {
    "field" in s && t(0, l = s.field), "handleFormInput" in s && t(1, r = s.handleFormInput);
  }, [l, r];
}
class Ye extends j {
  constructor(e) {
    super(), C(this, e, Wt, Zt, N, { field: 0, handleFormInput: 1 });
  }
}
function Se(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function Ne(n) {
  let e, t, l, r, s, i;
  t = new Ye({
    props: {
      field: n[6],
      handleFormInput: n[2]
    }
  });
  function o() {
    return n[5](n[6]);
  }
  return r = new Bt({ props: { onClick: o } }), {
    c() {
      e = p("div"), S(t.$$.fragment), l = D(), S(r.$$.fragment), s = D(), d(e, "class", "relative");
    },
    m(a, u) {
      M(a, e, u), F(t, e, null), h(e, l), F(r, e, null), h(e, s), i = !0;
    },
    p(a, u) {
      n = a;
      const c = {};
      u & 2 && (c.field = n[6]), u & 4 && (c.handleFormInput = n[2]), t.$set(c);
      const f = {};
      u & 18 && (f.onClick = o), r.$set(f);
    },
    i(a) {
      i || (w(t.$$.fragment, a), w(r.$$.fragment, a), i = !0);
    },
    o(a) {
      y(t.$$.fragment, a), y(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && I(e), T(t), T(r);
    }
  };
}
function Xt(n) {
  let e, t, l, r, s, i, o, a, u = n[1], c = [];
  for (let g = 0; g < u.length; g += 1)
    c[g] = Ne(Se(n, u, g));
  const f = (g) => y(c[g], 1, 1, () => {
    c[g] = null;
  });
  return o = new xt({ props: { addField: n[3] } }), {
    c() {
      e = p("div"), t = p("div"), l = p("h1"), l.textContent = "Modify Merge Values", r = D(), s = p("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
      i = D(), S(o.$$.fragment), d(l, "class", "text-teal-400 px-1"), d(s, "class", "border p-4 mb-6"), d(t, "data-cy", "merge-fields-input-section"), $(e, "hidden", n[0]);
    },
    m(g, _) {
      M(g, e, _), h(e, t), h(t, l), h(t, r), h(t, s);
      for (let m = 0; m < c.length; m += 1)
        c[m].m(s, null);
      h(e, i), F(o, e, null), a = !0;
    },
    p(g, [_]) {
      if (_ & 22) {
        u = g[1];
        let b;
        for (b = 0; b < u.length; b += 1) {
          const E = Se(g, u, b);
          c[b] ? (c[b].p(E, _), w(c[b], 1)) : (c[b] = Ne(E), c[b].c(), w(c[b], 1), c[b].m(s, null));
        }
        for (Le(), b = u.length; b < c.length; b += 1)
          f(b);
        $e();
      }
      const m = {};
      _ & 8 && (m.addField = g[3]), o.$set(m), (!a || _ & 1) && $(e, "hidden", g[0]);
    },
    i(g) {
      if (!a) {
        for (let _ = 0; _ < u.length; _ += 1)
          w(c[_]);
        w(o.$$.fragment, g), a = !0;
      }
    },
    o(g) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        y(c[_]);
      y(o.$$.fragment, g), a = !1;
    },
    d(g) {
      g && I(e), Ae(c, g), T(o);
    }
  };
}
function Kt(n, e, t) {
  let { error: l } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: i } = e, { removeField: o } = e;
  const a = (u) => o(u);
  return n.$$set = (u) => {
    "error" in u && t(0, l = u.error), "fields" in u && t(1, r = u.fields), "handleFormInput" in u && t(2, s = u.handleFormInput), "addField" in u && t(3, i = u.addField), "removeField" in u && t(4, o = u.removeField);
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
function tn(n) {
  let e, t, l;
  return {
    c() {
      e = p("button"), e.textContent = "Reset", d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(r, s) {
      M(r, e, s), t || (l = k(e, "click", fe(function() {
        ne(n[0]) && n[0].apply(this, arguments);
      })), t = !0);
    },
    p(r, [s]) {
      n = r;
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), t = !1, l();
    }
  };
}
function nn(n, e, t) {
  let { onClick: l } = e;
  return n.$$set = (r) => {
    "onClick" in r && t(0, l = r.onClick);
  }, [l];
}
class rn extends j {
  constructor(e) {
    super(), C(this, e, nn, tn, N, { onClick: 0 });
  }
}
function ln(n) {
  let e, t, l, r, s, i, o, a;
  return o = new rn({ props: { onClick: n[0] } }), {
    c() {
      e = p("div"), t = p("p"), l = p("span"), r = x(n[2]), s = D(), i = p("div"), S(o.$$.fragment), d(l, "class", "monospace text-orange-900"), d(t, "data-cy", "template-input-error"), d(t, "class", "bg-rose-200 rounded py-2 my-4 px-4"), d(i, "class", "flex flex-row-reverse "), $(e, "hidden", !n[1]);
    },
    m(u, c) {
      M(u, e, c), h(e, t), h(t, l), h(l, r), h(e, s), h(e, i), F(o, i, null), a = !0;
    },
    p(u, [c]) {
      (!a || c & 4) && re(r, u[2]);
      const f = {};
      c & 1 && (f.onClick = u[0]), o.$set(f), (!a || c & 2) && $(e, "hidden", !u[1]);
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
function sn(n, e, t) {
  let l, { onClick: r } = e, { error: s } = e;
  return n.$$set = (i) => {
    "onClick" in i && t(0, r = i.onClick), "error" in i && t(1, s = i.error);
  }, n.$$.update = () => {
    n.$$.dirty & 2 && t(2, l = s && s.message || "");
  }, [r, s, l];
}
class un extends j {
  constructor(e) {
    super(), C(this, e, sn, ln, N, { onClick: 0, error: 1 });
  }
}
const Ce = (n, e) => async (t) => await e(t, n);
function on(n) {
  let e, t, l = ce(n[1]) + "", r, s, i, o, a, u, c;
  return {
    c() {
      e = p("div"), t = p("label"), r = x(l), s = D(), i = p("input"), o = D(), a = p("input"), d(t, "class", "block mb-2 monospace"), d(t, "for", "input"), d(i, "aria-label", "Current source value"), d(i, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(i, "type", "text"), i.value = n[0], i.disabled = !0, a.disabled = n[2], d(a, "role", "button"), d(a, "aria-label", "File upload"), d(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(a, "type", "file"), d(e, "data-cy", "source-input");
    },
    m(f, g) {
      M(f, e, g), h(e, t), h(t, r), h(e, s), h(e, i), h(e, o), h(e, a), u || (c = k(a, "change", n[7]), u = !0);
    },
    p(f, [g]) {
      g & 2 && l !== (l = ce(f[1]) + "") && re(r, l), g & 1 && i.value !== f[0] && (i.value = f[0]), g & 4 && (a.disabled = f[2]);
    },
    i: v,
    o: v,
    d(f) {
      f && I(e), u = !1, c();
    }
  };
}
function an(n, e, t) {
  let l, { asset: r } = e, { value: s } = e, { label: i } = e, { handleChange: o } = e, a = !1, u = async (f) => {
    t(6, a = !0), await o(f), t(0, s = r.src), t(6, a = !1);
  };
  const c = (f) => u(f.currentTarget.files);
  return n.$$set = (f) => {
    "asset" in f && t(4, r = f.asset), "value" in f && t(0, s = f.value), "label" in f && t(1, i = f.label), "handleChange" in f && t(5, o = f.handleChange);
  }, n.$$.update = () => {
    n.$$.dirty & 64 && t(2, l = a);
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
function je(n, e, t) {
  const l = n.slice();
  return l[2] = e[t], l;
}
function Ee(n) {
  let e, t;
  return e = new Re({
    props: {
      label: n[2].placeholder,
      handleChange: Ce(n[2].asset, n[1]),
      value: n[2].asset.src,
      asset: n[2].asset
    }
  }), {
    c() {
      S(e.$$.fragment);
    },
    m(l, r) {
      F(e, l, r), t = !0;
    },
    p(l, r) {
      const s = {};
      r & 1 && (s.label = l[2].placeholder), r & 3 && (s.handleChange = Ce(l[2].asset, l[1])), r & 1 && (s.value = l[2].asset.src), r & 1 && (s.asset = l[2].asset), e.$set(s);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      T(e, l);
    }
  };
}
function cn(n) {
  let e, t, l, r, s, i = n[0], o = [];
  for (let u = 0; u < i.length; u += 1)
    o[u] = Ee(je(n, i, u));
  const a = (u) => y(o[u], 1, 1, () => {
    o[u] = null;
  });
  return {
    c() {
      e = p("div"), t = p("h1"), t.textContent = "Update sources", l = D(), r = p("div");
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      d(t, "class", "text-teal-400 px-1"), d(r, "class", "border p-4 mb-6"), d(e, "data-cy", "source-container"), $(e, "hidden", n[0].length < 1);
    },
    m(u, c) {
      M(u, e, c), h(e, t), h(e, l), h(e, r);
      for (let f = 0; f < o.length; f += 1)
        o[f].m(r, null);
      s = !0;
    },
    p(u, [c]) {
      if (c & 3) {
        i = u[0];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const g = je(u, i, f);
          o[f] ? (o[f].p(g, c), w(o[f], 1)) : (o[f] = Ee(g), o[f].c(), w(o[f], 1), o[f].m(r, null));
        }
        for (Le(), f = i.length; f < o.length; f += 1)
          a(f);
        $e();
      }
      (!s || c & 1) && $(e, "hidden", u[0].length < 1);
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
function fn(n, e, t) {
  let { sources: l } = e, { handleSourceFieldUpdate: r } = e;
  return n.$$set = (s) => {
    "sources" in s && t(0, l = s.sources), "handleSourceFieldUpdate" in s && t(1, r = s.handleSourceFieldUpdate);
  }, [l, r];
}
class dn extends j {
  constructor(e) {
    super(), C(this, e, fn, cn, N, { sources: 0, handleSourceFieldUpdate: 1 });
  }
}
function mn(n) {
  let e, t;
  const l = n[1].default, r = Ve(l, n, n[0], null);
  return {
    c() {
      e = p("label"), r && r.c(), d(e, "for", "json-input"), d(e, "class", "text-teal-400 px-1");
    },
    m(s, i) {
      M(s, e, i), r && r.m(e, null), t = !0;
    },
    p(s, [i]) {
      r && r.p && (!t || i & 1) && qe(
        r,
        l,
        s,
        s[0],
        t ? Ge(l, s[0], i, null) : Ze(s[0]),
        null
      );
    },
    i(s) {
      t || (w(r, s), t = !0);
    },
    o(s) {
      y(r, s), t = !1;
    },
    d(s) {
      s && I(e), r && r.d(s);
    }
  };
}
function gn(n, e, t) {
  let { $$slots: l = {}, $$scope: r } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, r = s.$$scope);
  }, [r, l];
}
class Ue extends j {
  constructor(e) {
    super(), C(this, e, gn, mn, N, {});
  }
}
function te(n) {
  return JSON.stringify(n, null, 2);
}
function hn(n) {
  let e, t, l, r;
  return {
    c() {
      e = p("textarea"), d(e, "data-cy", "template-input"), d(e, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"), d(e, "id", "json-input"), e.value = t = te(n[1]);
    },
    m(s, i) {
      M(s, e, i), l || (r = k(e, "input", n[2]), l = !0);
    },
    p(s, [i]) {
      i & 2 && t !== (t = te(s[1])) && (e.value = t);
    },
    i: v,
    o: v,
    d(s) {
      s && I(e), l = !1, r();
    }
  };
}
function pn(n, e, t) {
  let { handleTemplateInput: l } = e, { template: r } = e;
  const s = (i) => l(i.currentTarget.value);
  return n.$$set = (i) => {
    "handleTemplateInput" in i && t(0, l = i.handleTemplateInput), "template" in i && t(1, r = i.template);
  }, [l, r, s];
}
class _n extends j {
  constructor(e) {
    super(), C(this, e, pn, hn, N, { handleTemplateInput: 0, template: 1 });
  }
}
function bn(n) {
  let e;
  return {
    c() {
      e = x("Paste template");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && I(e);
    }
  };
}
function wn(n) {
  let e, t, l, r, s;
  return t = new Ue({
    props: {
      $$slots: { default: [bn] },
      $$scope: { ctx: n }
    }
  }), r = new _n({
    props: {
      template: n[0],
      handleTemplateInput: n[1]
    }
  }), {
    c() {
      e = p("div"), S(t.$$.fragment), l = D(), S(r.$$.fragment), d(e, "data-cy", "template-input-section"), d(e, "class", "mb-6");
    },
    m(i, o) {
      M(i, e, o), F(t, e, null), h(e, l), F(r, e, null), s = !0;
    },
    p(i, [o]) {
      const a = {};
      o & 4 && (a.$$scope = { dirty: o, ctx: i }), t.$set(a);
      const u = {};
      o & 1 && (u.template = i[0]), o & 2 && (u.handleTemplateInput = i[1]), r.$set(u);
    },
    i(i) {
      s || (w(t.$$.fragment, i), w(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(t.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && I(e), T(t), T(r);
    }
  };
}
function vn(n, e, t) {
  let { template: l } = e, { handleTemplateInput: r } = e;
  return n.$$set = (s) => {
    "template" in s && t(0, l = s.template), "handleTemplateInput" in s && t(1, r = s.handleTemplateInput);
  }, [l, r];
}
class yn extends j {
  constructor(e) {
    super(), C(this, e, vn, wn, N, { template: 0, handleTemplateInput: 1 });
  }
}
function In(n) {
  let e, t;
  return {
    c() {
      e = K("svg"), t = K("path"), d(t, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), d(e, "class", "fill-current w-4 h-4 mr-2"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20");
    },
    m(l, r) {
      M(l, e, r), h(e, t);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function Mn(n) {
  return [];
}
class Fn extends j {
  constructor(e) {
    super(), C(this, e, Mn, In, N, {});
  }
}
function Tn(n) {
  let e, t, l, r;
  return t = new Fn({}), {
    c() {
      e = p("a"), S(t.$$.fragment), l = x(`
	Download`), d(e, "href", n[0]), d(e, "download", "result.json"), d(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, i) {
      M(s, e, i), F(t, e, null), h(e, l), r = !0;
    },
    p(s, [i]) {
      (!r || i & 1) && d(e, "href", s[0]);
    },
    i(s) {
      r || (w(t.$$.fragment, s), r = !0);
    },
    o(s) {
      y(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && I(e), T(t);
    }
  };
}
function Sn(n, e, t) {
  let { download: l = "" } = e;
  return n.$$set = (r) => {
    "download" in r && t(0, l = r.download);
  }, [l];
}
class Nn extends j {
  constructor(e) {
    super(), C(this, e, Sn, Tn, N, { download: 0 });
  }
}
function Cn(n) {
  let e, t, l;
  return {
    c() {
      e = p("button"), e.textContent = "Submit", d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(r, s) {
      M(r, e, s), t || (l = k(e, "click", function() {
        ne(n[0]) && n[0].apply(this, arguments);
      }), t = !0);
    },
    p(r, [s]) {
      n = r;
    },
    i: v,
    o: v,
    d(r) {
      r && I(e), t = !1, l();
    }
  };
}
function jn(n, e, t) {
  let { submit: l } = e;
  return n.$$set = (r) => {
    "submit" in r && t(0, l = r.submit);
  }, [l];
}
class En extends j {
  constructor(e) {
    super(), C(this, e, jn, Cn, N, { submit: 0 });
  }
}
function Dn(n) {
  let e, t, l, r, s;
  return t = new Nn({ props: { download: n[0] } }), r = new En({ props: { submit: n[1] } }), {
    c() {
      e = p("div"), S(t.$$.fragment), l = D(), S(r.$$.fragment), d(e, "class", "flex justify-between pt-4");
    },
    m(i, o) {
      M(i, e, o), F(t, e, null), h(e, l), F(r, e, null), s = !0;
    },
    p(i, [o]) {
      const a = {};
      o & 1 && (a.download = i[0]), t.$set(a);
      const u = {};
      o & 2 && (u.submit = i[1]), r.$set(u);
    },
    i(i) {
      s || (w(t.$$.fragment, i), w(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(t.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && I(e), T(t), T(r);
    }
  };
}
function On(n, e, t) {
  let { download: l = "" } = e, { submit: r } = e;
  return n.$$set = (s) => {
    "download" in s && t(0, l = s.download), "submit" in s && t(1, r = s.submit);
  }, [l, r];
}
class An extends j {
  constructor(e) {
    super(), C(this, e, On, Dn, N, { download: 0, submit: 1 });
  }
}
function kn(n) {
  navigator.clipboard.writeText(JSON.stringify(n)), alert("JSON copied to clipboard!");
}
const Ln = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==";
function $n(n) {
  let e, t, l, r, s;
  return {
    c() {
      e = p("abbr"), t = p("img"), Je(t.src, l = Ln) || d(t, "src", l), d(t, "alt", "copy-button"), d(t, "class", "h-4 cursor-pointer inline mb-1"), d(e, "title", "Copy to clipboard");
    },
    m(i, o) {
      M(i, e, o), h(e, t), r || (s = k(t, "click", kn), r = !0);
    },
    p: v,
    i: v,
    o: v,
    d(i) {
      i && I(e), r = !1, s();
    }
  };
}
class xn extends j {
  constructor(e) {
    super(), C(this, e, null, $n, N, {});
  }
}
function Pn(n) {
  let e, t;
  return {
    c() {
      e = p("p"), t = x(n[0]), d(e, "data-cy", "result"), d(e, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace");
    },
    m(l, r) {
      M(l, e, r), h(e, t);
    },
    p(l, [r]) {
      r & 1 && re(t, l[0]);
    },
    i: v,
    o: v,
    d(l) {
      l && I(e);
    }
  };
}
function zn(n, e, t) {
  let { text: l } = e;
  return n.$$set = (r) => {
    "text" in r && t(0, l = r.text);
  }, [l];
}
class Yn extends j {
  constructor(e) {
    super(), C(this, e, zn, Pn, N, { text: 0 });
  }
}
function Rn(n) {
  let e;
  return {
    c() {
      e = x("Result");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && I(e);
    }
  };
}
function Un(n) {
  let e, t, l, r, s, i, o, a, u;
  return t = new Ue({
    props: {
      $$slots: { default: [Rn] },
      $$scope: { ctx: n }
    }
  }), r = new xn({}), i = new Yn({
    props: { text: te(n[0]) }
  }), a = new An({
    props: {
      submit: n[2],
      download: n[1]
    }
  }), {
    c() {
      e = p("div"), S(t.$$.fragment), l = D(), S(r.$$.fragment), s = D(), S(i.$$.fragment), o = D(), S(a.$$.fragment), d(e, "data-cy", "result-section"), $(e, "hidden", n[3]);
    },
    m(c, f) {
      M(c, e, f), F(t, e, null), h(e, l), F(r, e, null), h(e, s), F(i, e, null), h(e, o), F(a, e, null), u = !0;
    },
    p(c, [f]) {
      const g = {};
      f & 16 && (g.$$scope = { dirty: f, ctx: c }), t.$set(g);
      const _ = {};
      f & 1 && (_.text = te(c[0])), i.$set(_);
      const m = {};
      f & 4 && (m.submit = c[2]), f & 2 && (m.download = c[1]), a.$set(m), (!u || f & 8) && $(e, "hidden", c[3]);
    },
    i(c) {
      u || (w(t.$$.fragment, c), w(r.$$.fragment, c), w(i.$$.fragment, c), w(a.$$.fragment, c), u = !0);
    },
    o(c) {
      y(t.$$.fragment, c), y(r.$$.fragment, c), y(i.$$.fragment, c), y(a.$$.fragment, c), u = !1;
    },
    d(c) {
      c && I(e), T(t), T(r), T(i), T(a);
    }
  };
}
function Bn(n, e, t) {
  let { result: l } = e, { download: r } = e, { submit: s } = e, { error: i } = e;
  return n.$$set = (o) => {
    "result" in o && t(0, l = o.result), "download" in o && t(1, r = o.download), "submit" in o && t(2, s = o.submit), "error" in o && t(3, i = o.error);
  }, [l, r, s, i];
}
class Jn extends j {
  constructor(e) {
    super(), C(this, e, Bn, Un, N, {
      result: 0,
      download: 1,
      submit: 2,
      error: 3
    });
  }
}
function Qn(n) {
  let e, t, l, r, s, i, o, a, u, c, f, g, _;
  return r = new yn({
    props: {
      template: n[1],
      handleTemplateInput: n[5]
    }
  }), i = new un({
    props: {
      error: n[2],
      onClick: n[10]
    }
  }), a = new en({
    props: {
      fields: n[0].merge,
      handleFormInput: n[6],
      addField: n[8],
      removeField: n[9],
      error: n[2]
    }
  }), c = new dn({
    props: {
      sources: n[3],
      handleSourceFieldUpdate: n[11]
    }
  }), g = new Jn({
    props: {
      submit: n[7],
      download: n[4],
      result: n[0],
      error: n[2]
    }
  }), {
    c() {
      e = p("div"), t = p("section"), l = p("form"), S(r.$$.fragment), s = D(), S(i.$$.fragment), o = D(), S(a.$$.fragment), u = D(), S(c.$$.fragment), f = D(), S(g.$$.fragment), d(l, "class", "svelte-r93edu"), d(t, "data-cy", "form-container"), d(t, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), d(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(m, b) {
      M(m, e, b), h(e, t), h(t, l), F(r, l, null), h(l, s), F(i, l, null), h(l, o), F(a, l, null), h(l, u), F(c, l, null), h(t, f), F(g, t, null), _ = !0;
    },
    p(m, [b]) {
      const E = {};
      b & 2 && (E.template = m[1]), r.$set(E);
      const A = {};
      b & 4 && (A.error = m[2]), i.$set(A);
      const Y = {};
      b & 1 && (Y.fields = m[0].merge), b & 4 && (Y.error = m[2]), a.$set(Y);
      const H = {};
      b & 8 && (H.sources = m[3]), c.$set(H);
      const P = {};
      b & 16 && (P.download = m[4]), b & 1 && (P.result = m[0]), b & 4 && (P.error = m[2]), g.$set(P);
    },
    i(m) {
      _ || (w(r.$$.fragment, m), w(i.$$.fragment, m), w(a.$$.fragment, m), w(c.$$.fragment, m), w(g.$$.fragment, m), _ = !0);
    },
    o(m) {
      y(r.$$.fragment, m), y(i.$$.fragment, m), y(a.$$.fragment, m), y(c.$$.fragment, m), y(g.$$.fragment, m), _ = !1;
    },
    d(m) {
      m && I(e), T(r), T(i), T(a), T(c), T(g);
    }
  };
}
function Hn(n) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(n, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function Vn(n, e, t) {
  let l, { editTemplateService: r = new ze(Ot) } = e, s = r.template, i = r.result, o = null, a = r.getSrcPlaceholders();
  function u(E) {
    r.setTemplateSource(E), t(1, s = r.template), t(0, i = r.result), t(2, o = r.error), t(3, a = r.getSrcPlaceholders());
  }
  function c(E, A) {
    r.updateResultMergeFields(E, A), t(0, i = r.result);
  }
  function f() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function g(E) {
    r.addMergeField(E), t(1, s = r.template), t(0, i = r.result), t(2, o = r.error);
  }
  function _(E) {
    const A = r.getMergeFieldItem(E);
    r.removeMergeField(A), t(1, s = r.template), t(0, i = r.result), t(2, o = r.error);
  }
  function m() {
    r.setTemplateSource(r.result), t(1, s = r.template), t(0, i = r.result), t(2, o = r.error);
  }
  async function b(E, A) {
    await r.updateSrc(E, A), t(1, s = r.template), t(0, i = r.result);
  }
  return n.$$set = (E) => {
    "editTemplateService" in E && t(12, r = E.editTemplateService);
  }, n.$$.update = () => {
    n.$$.dirty & 1 && t(4, l = Hn(i) || "");
  }, [
    i,
    s,
    o,
    a,
    l,
    u,
    c,
    f,
    g,
    _,
    m,
    b,
    r
  ];
}
class Gn extends j {
  constructor(e) {
    super(), C(this, e, Vn, Qn, N, { editTemplateService: 12 });
  }
}
class qn {
  constructor(e) {
    this.templateService = new ze(e), this.container = void 0;
  }
  on(e, t) {
    this.templateService.on(e, t);
  }
  off(e, t) {
    this.templateService.off(e, t);
  }
  submit() {
    this.templateService.submit();
  }
  renderForm(e) {
    this.container = e, new Gn({
      target: e,
      props: {
        editTemplateService: this.templateService
      }
    });
  }
  renderElements(e, t) {
    const l = this.getInputs();
    t ? t.after(...l) : e.append(...l);
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
  addField(e, t) {
    this.templateService.addMergeField({ find: e, replace: t });
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
      (t) => new Ye({
        target: e,
        props: {
          field: t,
          handleFormInput: (l) => {
            this.templateService.updateResultMergeFields(l, t);
          }
        }
      })
    );
  }
  renderSourceFields(e) {
    this.templateService.getSrcPlaceholders().forEach(
      (t) => new Re({
        target: e,
        props: {
          value: t.asset.src,
          asset: t.asset,
          label: t.placeholder,
          handleChange: async (l) => {
            await this.templateService.updateSrc(l, t.asset);
          }
        }
      })
    );
  }
}
export {
  qn as default
};
