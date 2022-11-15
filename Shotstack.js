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
      const i = [], s = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < s; o += 1)
        i[o] = e.dirty[o] | r[o];
      return i;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function qe(t, e, n, l, r, i) {
  if (r) {
    const s = Oe(e, n, l, i);
    t.p(s, r);
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
function y(t) {
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
function x(t) {
  return document.createTextNode(t);
}
function D() {
  return x(" ");
}
function k(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function fe(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function f(t, e, n) {
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
function P(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let de;
function Q(t) {
  de = t;
}
const J = [], ee = [], W = [], se = [], Xe = Promise.resolve();
let ue = !1;
function Ke() {
  ue || (ue = !0, Xe.then(ke));
}
function oe(t) {
  W.push(t);
}
function be(t) {
  se.push(t);
}
const ie = /* @__PURE__ */ new Set();
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
      ie.has(n) || (ie.add(n), n());
    }
    W.length = 0;
  } while (J.length);
  for (; se.length; )
    se.pop()();
  ue = !1, ie.clear(), Q(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), U(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(oe);
  }
}
const X = /* @__PURE__ */ new Set();
let Y;
function Le() {
  Y = {
    r: 0,
    c: [],
    p: Y
  };
}
function Pe() {
  Y.r || U(Y.c), Y = Y.p;
}
function w(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function I(t, e, n, l) {
  if (t && t.o) {
    if (X.has(t))
      return;
    X.add(t), Y.c.push(() => {
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
  const { fragment: r, on_mount: i, on_destroy: s, after_update: o } = t.$$;
  r && r.m(e, n), l || oe(() => {
    const a = i.map(De).filter(ne);
    s ? s.push(...a) : U(a), t.$$.on_mount = [];
  }), o.forEach(oe);
}
function T(t, e) {
  const n = t.$$;
  n.fragment !== null && (U(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (J.push(t), Ke(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function C(t, e, n, l, r, i, s, o = [-1]) {
  const a = de;
  Q(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
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
  s && s(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (d, m, ..._) => {
    const g = _.length ? _[0] : m;
    return u.ctx && r(u.ctx[d], u.ctx[d] = g) && (!u.skip_bound && u.bound[d] && u.bound[d](g), c && tt(t, d)), m;
  }) : [], u.update(), c = !0, U(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = We(e.target);
      u.fragment && u.fragment.l(d), d.forEach(y);
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
const nt = "A 'merge' property is required", rt = "Property 'merge' must be an array", lt = "A 'find' property is required on every element inside 'merge'", it = "Every 'find' property inside 'merge' must be of type string", st = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", ut = "A 'replace' property is required on every element inside 'merge'", ot = "Unexpected error while parsing template JSON", at = "Every element inside the 'merge' should be an object";
var ct = Object.defineProperty, ft = Object.defineProperties, dt = Object.getOwnPropertyDescriptors, ve = Object.getOwnPropertySymbols, mt = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable, Ie = (t, e, n) => e in t ? ct(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ht = (t, e) => {
  for (var n in e || (e = {}))
    mt.call(e, n) && Ie(t, n, e[n]);
  if (ve)
    for (var n of ve(e))
      gt.call(e, n) && Ie(t, n, e[n]);
  return t;
}, pt = (t, e) => ft(t, dt(e));
class L extends Error {
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
function It(t) {
  try {
    const e = JSON.parse(t);
    if (ae("merge", e))
      throw new L(nt);
    if (bt("merge", e))
      throw new L(rt);
    const { merge: n } = e, l = yt(n);
    return pt(ht({}, e), { merge: l });
  } catch (e) {
    throw xe(e);
  }
}
function yt(t) {
  return t.map((n) => {
    if (!_t(n))
      throw new L(at);
    if (ae("find", n))
      throw new L(lt);
    if (ae("replace", n))
      throw new L(ut);
    if (wt("find", n))
      throw new L(it);
    if (vt("find", n))
      throw new L(st);
    return n;
  }).map(({ find: n, replace: l }) => ({
    find: n,
    replace: ze(l)
  }));
}
function Mt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function xe(t) {
  return t instanceof Error ? t : Mt(t) ? new L(t.message) : new L(ot);
}
function ze(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
function ce(t) {
  const e = new RegExp("(?<={{).+(?=}})|(?<={{).+(?=}$)|(?<={{).+(?=$)", "g"), n = t.match(e);
  return n && n.toString().trim() || t;
}
var Ft = Object.defineProperty, Tt = Object.defineProperties, St = Object.getOwnPropertyDescriptors, ye = Object.getOwnPropertySymbols, Nt = Object.prototype.hasOwnProperty, Ct = Object.prototype.propertyIsEnumerable, Me = (t, e, n) => e in t ? Ft(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, B = (t, e) => {
  for (var n in e || (e = {}))
    Nt.call(e, n) && Me(t, n, e[n]);
  if (ye)
    for (var n of ye(e))
      Ct.call(e, n) && Me(t, n, e[n]);
  return t;
}, Z = (t, e) => Tt(t, St(e));
class Ye {
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
      const n = It(ze(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const l = xe(n);
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
        const i = {
          placeholder: e[l].clips[r].asset.src,
          asset: e[l].clips[r].asset
        };
        ce(i.placeholder) !== i.placeholder && n.push(i);
      }
    return n;
  }
  async updateSrc(e, n) {
    let l = n.src;
    for (let r = 0; r < this.handlers.upload.length; r++) {
      const i = this.handlers.upload[r];
      l = await i(e);
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
}, $ = [];
function Fe(t, e = v) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(o) {
    if (N(t, o) && (t = o, n)) {
      const a = !$.length;
      for (const u of l)
        u[1](), $.push(u, t);
      if (a) {
        for (let u = 0; u < $.length; u += 2)
          $[u][0]($[u + 1]);
        $.length = 0;
      }
    }
  }
  function i(o) {
    r(o(t));
  }
  function s(o, a = v) {
    const u = [o, a];
    return l.add(u), l.size === 1 && (n = e(r) || v), o(t), () => {
      l.delete(u), l.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: s };
}
function At(t) {
  let e, n, l;
  return {
    c() {
      e = p("input"), f(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(e, "type", "text"), f(e, "role", "textbox"), f(e, "aria-label", t[1]);
    },
    m(r, i) {
      M(r, e, i), _e(e, t[0]), n || (l = [
        k(e, "input", t[3]),
        k(e, "focus", t[4], { once: !0 })
      ], n = !0);
    },
    p(r, [i]) {
      i & 2 && f(e, "aria-label", r[1]), i & 1 && e.value !== r[0] && _e(e, r[0]);
    },
    i: v,
    o: v,
    d(r) {
      r && y(e), n = !1, U(l);
    }
  };
}
function kt(t, e, n) {
  let { value: l } = e, { label: r } = e, { onFocus: i } = e;
  function s() {
    l = this.value, n(0, l);
  }
  const o = (a) => i(a.currentTarget);
  return t.$$set = (a) => {
    "value" in a && n(0, l = a.value), "label" in a && n(1, r = a.label), "onFocus" in a && n(2, i = a.onFocus);
  }, [l, r, i, s, o];
}
class Te extends j {
  constructor(e) {
    super(), C(this, e, kt, At, N, { value: 0, label: 1, onFocus: 2 });
  }
}
function Lt(t) {
  let e, n, l, r, i, s, o, a, u, c, d, m, _, g, b, E;
  function A(O) {
    t[7](O);
  }
  let R = {
    label: "MergeField.find",
    onFocus: t[6]
  };
  t[1] !== void 0 && (R.value = t[1]), s = new Te({ props: R }), ee.push(() => we(s, "value", A));
  function H(O) {
    t[9](O);
  }
  let z = {
    label: "MergeField.replace",
    onFocus: t[8]
  };
  return t[2] !== void 0 && (z.value = t[2]), u = new Te({ props: z }), ee.push(() => we(u, "value", H)), {
    c() {
      e = p("div"), n = p("div"), l = p("h1"), l.textContent = "Add a new merge field", r = D(), i = p("div"), S(s.$$.fragment), a = D(), S(u.$$.fragment), d = D(), m = p("div"), _ = p("button"), _.textContent = "Add", f(l, "class", "text-teal-400 px-1"), f(_, "aria-label", "Add field"), f(_, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), f(m, "class", "flex flex-row-reverse"), f(i, "class", "border p-4 mb-6"), f(e, "data-cy", "add-merge-field-section");
    },
    m(O, V) {
      M(O, e, V), h(e, n), h(n, l), h(n, r), h(n, i), F(s, i, null), h(i, a), F(u, i, null), h(i, d), h(i, m), h(m, _), g = !0, b || (E = k(_, "click", fe(t[10])), b = !0);
    },
    p(O, [V]) {
      const me = {};
      !o && V & 2 && (o = !0, me.value = O[1], be(() => o = !1)), s.$set(me);
      const ge = {};
      !c && V & 4 && (c = !0, ge.value = O[2], be(() => c = !1)), u.$set(ge);
    },
    i(O) {
      g || (w(s.$$.fragment, O), w(u.$$.fragment, O), g = !0);
    },
    o(O) {
      I(s.$$.fragment, O), I(u.$$.fragment, O), g = !1;
    },
    d(O) {
      O && y(e), T(s), T(u), b = !1, E();
    }
  };
}
function Pt(t, e, n) {
  let l, r, i = Fe("find");
  pe(t, i, (g) => n(1, l = g));
  let s = Fe("replace");
  pe(t, s, (g) => n(2, r = g));
  let o = (g) => g.set(""), { addField: a } = e;
  const u = () => o(i);
  function c(g) {
    l = g, i.set(l);
  }
  const d = () => o(s);
  function m(g) {
    r = g, s.set(r);
  }
  const _ = () => a({ find: l, replace: r });
  return t.$$set = (g) => {
    "addField" in g && n(0, a = g.addField);
  }, [
    a,
    l,
    r,
    i,
    s,
    o,
    u,
    c,
    d,
    m,
    _
  ];
}
class xt extends j {
  constructor(e) {
    super(), C(this, e, Pt, Lt, N, { addField: 0 });
  }
}
function zt(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), f(n, "fill", "white"), f(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && y(e);
    }
  };
}
function Yt(t) {
  return [];
}
class Rt extends j {
  constructor(e) {
    super(), C(this, e, Yt, zt, N, {});
  }
}
function $t(t) {
  let e, n, l, r, i;
  return n = new Rt({}), {
    c() {
      e = p("button"), S(n.$$.fragment), f(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"), f(e, "aria-label", "Remove field");
    },
    m(s, o) {
      M(s, e, o), F(n, e, null), l = !0, r || (i = k(e, "click", fe(function() {
        ne(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(s, [o]) {
      t = s;
    },
    i(s) {
      l || (w(n.$$.fragment, s), l = !0);
    },
    o(s) {
      I(n.$$.fragment, s), l = !1;
    },
    d(s) {
      s && y(e), T(n), r = !1, i();
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
    super(), C(this, e, Ut, $t, N, { onClick: 0 });
  }
}
function Jt(t) {
  let e, n;
  return {
    c() {
      e = p("label"), n = x(t[0]), f(e, "for", t[1]), f(e, "class", "block mb-2 monospace"), f(e, "aria-label", "Current label");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p(l, [r]) {
      r & 1 && re(n, l[0]), r & 2 && f(e, "for", l[1]);
    },
    i: v,
    o: v,
    d(l) {
      l && y(e);
    }
  };
}
function Qt(t, e, n) {
  let { find: l } = e, { inputId: r } = e;
  return t.$$set = (i) => {
    "find" in i && n(0, l = i.find), "inputId" in i && n(1, r = i.inputId);
  }, [l, r];
}
class Ht extends j {
  constructor(e) {
    super(), C(this, e, Qt, Jt, N, { find: 0, inputId: 1 });
  }
}
function Vt(t) {
  let e, n, l;
  return {
    c() {
      e = p("input"), f(e, "id", t[3]), f(e, "role", "textbox"), f(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(e, "type", "text"), e.value = t[2], f(e, "label", t[1]);
    },
    m(r, i) {
      M(r, e, i), n || (l = k(e, "input", t[5]), n = !0);
    },
    p(r, [i]) {
      i & 8 && f(e, "id", r[3]), i & 4 && e.value !== r[2] && (e.value = r[2]), i & 2 && f(e, "label", r[1]);
    },
    i: v,
    o: v,
    d(r) {
      r && y(e), n = !1, l();
    }
  };
}
function Gt(t, e, n) {
  let { field: l } = e, { find: r } = e, { replace: i } = e, { inputId: s } = e, { handleFormInput: o } = e;
  const a = (u) => o({ find: r, replace: u.currentTarget.value }, l);
  return t.$$set = (u) => {
    "field" in u && n(0, l = u.field), "find" in u && n(1, r = u.find), "replace" in u && n(2, i = u.replace), "inputId" in u && n(3, s = u.inputId), "handleFormInput" in u && n(4, o = u.handleFormInput);
  }, [l, r, i, s, o, a];
}
class qt extends j {
  constructor(e) {
    super(), C(this, e, Gt, Vt, N, {
      field: 0,
      find: 1,
      replace: 2,
      inputId: 3,
      handleFormInput: 4
    });
  }
}
function Zt(t) {
  let e, n, l, r, i;
  return n = new Ht({
    props: {
      find: t[0].find,
      inputId: t[1]
    }
  }), r = new qt({
    props: {
      find: t[0].find,
      replace: t[0].replace,
      field: t[0],
      handleFormInput: t[2],
      inputId: t[1]
    }
  }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), f(e, "data-cy", "label-input");
    },
    m(s, o) {
      M(s, e, o), F(n, e, null), h(e, l), F(r, e, null), i = !0;
    },
    p(s, [o]) {
      const a = {};
      o & 1 && (a.find = s[0].find), o & 2 && (a.inputId = s[1]), n.$set(a);
      const u = {};
      o & 1 && (u.find = s[0].find), o & 1 && (u.replace = s[0].replace), o & 1 && (u.field = s[0]), o & 4 && (u.handleFormInput = s[2]), o & 2 && (u.inputId = s[1]), r.$set(u);
    },
    i(s) {
      i || (w(n.$$.fragment, s), w(r.$$.fragment, s), i = !0);
    },
    o(s) {
      I(n.$$.fragment, s), I(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && y(e), T(n), T(r);
    }
  };
}
function Wt(t, e, n) {
  let { field: l } = e, { inputId: r } = e, { handleFormInput: i } = e;
  return t.$$set = (s) => {
    "field" in s && n(0, l = s.field), "inputId" in s && n(1, r = s.inputId), "handleFormInput" in s && n(2, i = s.handleFormInput);
  }, [l, r, i];
}
class Re extends j {
  constructor(e) {
    super(), C(this, e, Wt, Zt, N, { field: 0, inputId: 1, handleFormInput: 2 });
  }
}
function Se(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l[8] = n, l;
}
function Ne(t) {
  let e, n, l, r, i, s;
  n = new Re({
    props: {
      field: t[6],
      handleFormInput: t[2],
      inputId: `mergefield-input-id-${t[8]}`
    }
  });
  function o() {
    return t[5](t[6]);
  }
  return r = new Bt({ props: { onClick: o } }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), i = D(), f(e, "class", "relative");
    },
    m(a, u) {
      M(a, e, u), F(n, e, null), h(e, l), F(r, e, null), h(e, i), s = !0;
    },
    p(a, u) {
      t = a;
      const c = {};
      u & 2 && (c.field = t[6]), u & 4 && (c.handleFormInput = t[2]), n.$set(c);
      const d = {};
      u & 18 && (d.onClick = o), r.$set(d);
    },
    i(a) {
      s || (w(n.$$.fragment, a), w(r.$$.fragment, a), s = !0);
    },
    o(a) {
      I(n.$$.fragment, a), I(r.$$.fragment, a), s = !1;
    },
    d(a) {
      a && y(e), T(n), T(r);
    }
  };
}
function Xt(t) {
  let e, n, l, r, i, s, o, a, u = t[1], c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = Ne(Se(t, u, m));
  const d = (m) => I(c[m], 1, 1, () => {
    c[m] = null;
  });
  return o = new xt({ props: { addField: t[3] } }), {
    c() {
      e = p("div"), n = p("div"), l = p("h1"), l.textContent = "Modify Merge Values", r = D(), i = p("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      s = D(), S(o.$$.fragment), f(l, "class", "text-teal-400 px-1"), f(i, "class", "border p-4 mb-6"), f(n, "data-cy", "merge-fields-input-section"), P(e, "hidden", t[0]);
    },
    m(m, _) {
      M(m, e, _), h(e, n), h(n, l), h(n, r), h(n, i);
      for (let g = 0; g < c.length; g += 1)
        c[g].m(i, null);
      h(e, s), F(o, e, null), a = !0;
    },
    p(m, [_]) {
      if (_ & 22) {
        u = m[1];
        let b;
        for (b = 0; b < u.length; b += 1) {
          const E = Se(m, u, b);
          c[b] ? (c[b].p(E, _), w(c[b], 1)) : (c[b] = Ne(E), c[b].c(), w(c[b], 1), c[b].m(i, null));
        }
        for (Le(), b = u.length; b < c.length; b += 1)
          d(b);
        Pe();
      }
      const g = {};
      _ & 8 && (g.addField = m[3]), o.$set(g), (!a || _ & 1) && P(e, "hidden", m[0]);
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
        I(c[_]);
      I(o.$$.fragment, m), a = !1;
    },
    d(m) {
      m && y(e), Ae(c, m), T(o);
    }
  };
}
function Kt(t, e, n) {
  let { error: l } = e, { fields: r = [] } = e, { handleFormInput: i } = e, { addField: s } = e, { removeField: o } = e;
  const a = (u) => o(u);
  return t.$$set = (u) => {
    "error" in u && n(0, l = u.error), "fields" in u && n(1, r = u.fields), "handleFormInput" in u && n(2, i = u.handleFormInput), "addField" in u && n(3, s = u.addField), "removeField" in u && n(4, o = u.removeField);
  }, [l, r, i, s, o, a];
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
      e = p("button"), e.textContent = "Reset", f(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(r, i) {
      M(r, e, i), n || (l = k(e, "click", fe(function() {
        ne(t[0]) && t[0].apply(this, arguments);
      })), n = !0);
    },
    p(r, [i]) {
      t = r;
    },
    i: v,
    o: v,
    d(r) {
      r && y(e), n = !1, l();
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
  let e, n, l, r, i, s, o, a;
  return o = new rn({ props: { onClick: t[0] } }), {
    c() {
      e = p("div"), n = p("p"), l = p("span"), r = x(t[2]), i = D(), s = p("div"), S(o.$$.fragment), f(l, "class", "monospace text-orange-900"), f(n, "data-cy", "template-input-error"), f(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), f(s, "class", "flex flex-row-reverse "), f(e, "data-cy", "error-container"), P(e, "hidden", !t[1]);
    },
    m(u, c) {
      M(u, e, c), h(e, n), h(n, l), h(l, r), h(e, i), h(e, s), F(o, s, null), a = !0;
    },
    p(u, [c]) {
      (!a || c & 4) && re(r, u[2]);
      const d = {};
      c & 1 && (d.onClick = u[0]), o.$set(d), (!a || c & 2) && P(e, "hidden", !u[1]);
    },
    i(u) {
      a || (w(o.$$.fragment, u), a = !0);
    },
    o(u) {
      I(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && y(e), T(o);
    }
  };
}
function sn(t, e, n) {
  let l, { onClick: r } = e, { error: i } = e;
  return t.$$set = (s) => {
    "onClick" in s && n(0, r = s.onClick), "error" in s && n(1, i = s.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, l = i && i.message || "");
  }, [r, i, l];
}
class un extends j {
  constructor(e) {
    super(), C(this, e, sn, ln, N, { onClick: 0, error: 1 });
  }
}
const Ce = (t, e) => async (n) => await e(n, t);
function on(t) {
  let e, n, l = ce(t[1]) + "", r, i, s, o, a, u, c;
  return {
    c() {
      e = p("div"), n = p("label"), r = x(l), i = D(), s = p("input"), o = D(), a = p("input"), f(n, "class", "block mb-2 monospace"), f(n, "for", "input"), f(s, "aria-label", "Current source value"), f(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(s, "type", "text"), s.value = t[0], s.disabled = !0, a.disabled = t[2], f(a, "role", "button"), f(a, "aria-label", "File upload"), f(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(a, "type", "file"), f(e, "data-cy", "source-input");
    },
    m(d, m) {
      M(d, e, m), h(e, n), h(n, r), h(e, i), h(e, s), h(e, o), h(e, a), u || (c = k(a, "change", t[7]), u = !0);
    },
    p(d, [m]) {
      m & 2 && l !== (l = ce(d[1]) + "") && re(r, l), m & 1 && s.value !== d[0] && (s.value = d[0]), m & 4 && (a.disabled = d[2]);
    },
    i: v,
    o: v,
    d(d) {
      d && y(e), u = !1, c();
    }
  };
}
function an(t, e, n) {
  let l, { asset: r } = e, { value: i } = e, { label: s } = e, { handleChange: o } = e, a = !1, u = async (d) => {
    n(6, a = !0), await o(d), n(0, i = r.src), n(6, a = !1);
  };
  const c = (d) => u(d.currentTarget.files);
  return t.$$set = (d) => {
    "asset" in d && n(4, r = d.asset), "value" in d && n(0, i = d.value), "label" in d && n(1, s = d.label), "handleChange" in d && n(5, o = d.handleChange);
  }, t.$$.update = () => {
    t.$$.dirty & 64 && n(2, l = a);
  }, [i, s, l, u, r, o, a, c];
}
class $e extends j {
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
  return e = new $e({
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
      const i = {};
      r & 1 && (i.label = l[2].placeholder), r & 3 && (i.handleChange = Ce(l[2].asset, l[1])), r & 1 && (i.value = l[2].asset.src), r & 1 && (i.asset = l[2].asset), e.$set(i);
    },
    i(l) {
      n || (w(e.$$.fragment, l), n = !0);
    },
    o(l) {
      I(e.$$.fragment, l), n = !1;
    },
    d(l) {
      T(e, l);
    }
  };
}
function cn(t) {
  let e, n, l, r, i, s = t[0], o = [];
  for (let u = 0; u < s.length; u += 1)
    o[u] = Ee(je(t, s, u));
  const a = (u) => I(o[u], 1, 1, () => {
    o[u] = null;
  });
  return {
    c() {
      e = p("div"), n = p("h1"), n.textContent = "Update sources", l = D(), r = p("div");
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      f(n, "class", "text-teal-400 px-1"), f(r, "class", "border p-4 mb-6"), f(e, "data-cy", "source-container"), P(e, "hidden", t[0].length < 1);
    },
    m(u, c) {
      M(u, e, c), h(e, n), h(e, l), h(e, r);
      for (let d = 0; d < o.length; d += 1)
        o[d].m(r, null);
      i = !0;
    },
    p(u, [c]) {
      if (c & 3) {
        s = u[0];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const m = je(u, s, d);
          o[d] ? (o[d].p(m, c), w(o[d], 1)) : (o[d] = Ee(m), o[d].c(), w(o[d], 1), o[d].m(r, null));
        }
        for (Le(), d = s.length; d < o.length; d += 1)
          a(d);
        Pe();
      }
      (!i || c & 1) && P(e, "hidden", u[0].length < 1);
    },
    i(u) {
      if (!i) {
        for (let c = 0; c < s.length; c += 1)
          w(o[c]);
        i = !0;
      }
    },
    o(u) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        I(o[c]);
      i = !1;
    },
    d(u) {
      u && y(e), Ae(o, u);
    }
  };
}
function fn(t, e, n) {
  let { sources: l } = e, { handleSourceFieldUpdate: r } = e;
  return t.$$set = (i) => {
    "sources" in i && n(0, l = i.sources), "handleSourceFieldUpdate" in i && n(1, r = i.handleSourceFieldUpdate);
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
      e = p("label"), r && r.c(), f(e, "for", "json-input"), f(e, "class", "text-teal-400 px-1");
    },
    m(i, s) {
      M(i, e, s), r && r.m(e, null), n = !0;
    },
    p(i, [s]) {
      r && r.p && (!n || s & 1) && qe(
        r,
        l,
        i,
        i[0],
        n ? Ge(l, i[0], s, null) : Ze(i[0]),
        null
      );
    },
    i(i) {
      n || (w(r, i), n = !0);
    },
    o(i) {
      I(r, i), n = !1;
    },
    d(i) {
      i && y(e), r && r.d(i);
    }
  };
}
function gn(t, e, n) {
  let { $$slots: l = {}, $$scope: r } = e;
  return t.$$set = (i) => {
    "$$scope" in i && n(0, r = i.$$scope);
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
      e = p("textarea"), f(e, "data-cy", "template-input"), f(e, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"), f(e, "id", "json-input"), e.value = n = te(t[1]);
    },
    m(i, s) {
      M(i, e, s), l || (r = k(e, "input", t[2]), l = !0);
    },
    p(i, [s]) {
      s & 2 && n !== (n = te(i[1])) && (e.value = n);
    },
    i: v,
    o: v,
    d(i) {
      i && y(e), l = !1, r();
    }
  };
}
function pn(t, e, n) {
  let { handleTemplateInput: l } = e, { template: r } = e;
  const i = (s) => l(s.currentTarget.value);
  return t.$$set = (s) => {
    "handleTemplateInput" in s && n(0, l = s.handleTemplateInput), "template" in s && n(1, r = s.template);
  }, [l, r, i];
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
      e = x("Paste template");
    },
    m(n, l) {
      M(n, e, l);
    },
    d(n) {
      n && y(e);
    }
  };
}
function wn(t) {
  let e, n, l, r, i;
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
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), f(e, "data-cy", "template-input-section"), f(e, "class", "mb-6");
    },
    m(s, o) {
      M(s, e, o), F(n, e, null), h(e, l), F(r, e, null), i = !0;
    },
    p(s, [o]) {
      const a = {};
      o & 4 && (a.$$scope = { dirty: o, ctx: s }), n.$set(a);
      const u = {};
      o & 1 && (u.template = s[0]), o & 2 && (u.handleTemplateInput = s[1]), r.$set(u);
    },
    i(s) {
      i || (w(n.$$.fragment, s), w(r.$$.fragment, s), i = !0);
    },
    o(s) {
      I(n.$$.fragment, s), I(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && y(e), T(n), T(r);
    }
  };
}
function vn(t, e, n) {
  let { template: l } = e, { handleTemplateInput: r } = e;
  return t.$$set = (i) => {
    "template" in i && n(0, l = i.template), "handleTemplateInput" in i && n(1, r = i.handleTemplateInput);
  }, [l, r];
}
class In extends j {
  constructor(e) {
    super(), C(this, e, vn, wn, N, { template: 0, handleTemplateInput: 1 });
  }
}
function yn(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), f(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), f(e, "class", "fill-current w-4 h-4 mr-2"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "viewBox", "0 0 20 20");
    },
    m(l, r) {
      M(l, e, r), h(e, n);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && y(e);
    }
  };
}
function Mn(t) {
  return [];
}
class Fn extends j {
  constructor(e) {
    super(), C(this, e, Mn, yn, N, {});
  }
}
function Tn(t) {
  let e, n, l, r;
  return n = new Fn({}), {
    c() {
      e = p("a"), S(n.$$.fragment), l = x(`
	Download`), f(e, "href", t[0]), f(e, "download", "result.json"), f(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(i, s) {
      M(i, e, s), F(n, e, null), h(e, l), r = !0;
    },
    p(i, [s]) {
      (!r || s & 1) && f(e, "href", i[0]);
    },
    i(i) {
      r || (w(n.$$.fragment, i), r = !0);
    },
    o(i) {
      I(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && y(e), T(n);
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
      e = p("button"), e.textContent = "Submit", f(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(r, i) {
      M(r, e, i), n || (l = k(e, "click", function() {
        ne(t[0]) && t[0].apply(this, arguments);
      }), n = !0);
    },
    p(r, [i]) {
      t = r;
    },
    i: v,
    o: v,
    d(r) {
      r && y(e), n = !1, l();
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
  let e, n, l, r, i;
  return n = new Nn({ props: { download: t[0] } }), r = new En({ props: { submit: t[1] } }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), f(e, "class", "flex justify-between pt-4");
    },
    m(s, o) {
      M(s, e, o), F(n, e, null), h(e, l), F(r, e, null), i = !0;
    },
    p(s, [o]) {
      const a = {};
      o & 1 && (a.download = s[0]), n.$set(a);
      const u = {};
      o & 2 && (u.submit = s[1]), r.$set(u);
    },
    i(s) {
      i || (w(n.$$.fragment, s), w(r.$$.fragment, s), i = !0);
    },
    o(s) {
      I(n.$$.fragment, s), I(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && y(e), T(n), T(r);
    }
  };
}
function On(t, e, n) {
  let { download: l = "" } = e, { submit: r } = e;
  return t.$$set = (i) => {
    "download" in i && n(0, l = i.download), "submit" in i && n(1, r = i.submit);
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
const Ln = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==";
function Pn(t) {
  let e, n, l, r, i;
  return {
    c() {
      e = p("abbr"), n = p("img"), Je(n.src, l = Ln) || f(n, "src", l), f(n, "alt", "copy-button"), f(n, "class", "h-4 cursor-pointer inline mb-1"), f(e, "title", "Copy to clipboard");
    },
    m(s, o) {
      M(s, e, o), h(e, n), r || (i = k(n, "click", t[1]), r = !0);
    },
    p: v,
    i: v,
    o: v,
    d(s) {
      s && y(e), r = !1, i();
    }
  };
}
function xn(t, e, n) {
  let { result: l } = e;
  const r = () => kn(l);
  return t.$$set = (i) => {
    "result" in i && n(0, l = i.result);
  }, [l, r];
}
class zn extends j {
  constructor(e) {
    super(), C(this, e, xn, Pn, N, { result: 0 });
  }
}
function Yn(t) {
  let e, n;
  return {
    c() {
      e = p("p"), n = x(t[0]), f(e, "data-cy", "result"), f(e, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace");
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
      l && y(e);
    }
  };
}
function Rn(t, e, n) {
  let { text: l } = e;
  return t.$$set = (r) => {
    "text" in r && n(0, l = r.text);
  }, [l];
}
class $n extends j {
  constructor(e) {
    super(), C(this, e, Rn, Yn, N, { text: 0 });
  }
}
function Un(t) {
  let e;
  return {
    c() {
      e = x("Result");
    },
    m(n, l) {
      M(n, e, l);
    },
    d(n) {
      n && y(e);
    }
  };
}
function Bn(t) {
  let e, n, l, r, i, s, o, a, u;
  return n = new Ue({
    props: {
      $$slots: { default: [Un] },
      $$scope: { ctx: t }
    }
  }), r = new zn({ props: { result: t[0] } }), s = new $n({
    props: { text: te(t[0]) }
  }), a = new An({
    props: {
      submit: t[2],
      download: t[1]
    }
  }), {
    c() {
      e = p("div"), S(n.$$.fragment), l = D(), S(r.$$.fragment), i = D(), S(s.$$.fragment), o = D(), S(a.$$.fragment), f(e, "data-cy", "result-section"), P(e, "hidden", t[3]);
    },
    m(c, d) {
      M(c, e, d), F(n, e, null), h(e, l), F(r, e, null), h(e, i), F(s, e, null), h(e, o), F(a, e, null), u = !0;
    },
    p(c, [d]) {
      const m = {};
      d & 16 && (m.$$scope = { dirty: d, ctx: c }), n.$set(m);
      const _ = {};
      d & 1 && (_.result = c[0]), r.$set(_);
      const g = {};
      d & 1 && (g.text = te(c[0])), s.$set(g);
      const b = {};
      d & 4 && (b.submit = c[2]), d & 2 && (b.download = c[1]), a.$set(b), (!u || d & 8) && P(e, "hidden", c[3]);
    },
    i(c) {
      u || (w(n.$$.fragment, c), w(r.$$.fragment, c), w(s.$$.fragment, c), w(a.$$.fragment, c), u = !0);
    },
    o(c) {
      I(n.$$.fragment, c), I(r.$$.fragment, c), I(s.$$.fragment, c), I(a.$$.fragment, c), u = !1;
    },
    d(c) {
      c && y(e), T(n), T(r), T(s), T(a);
    }
  };
}
function Jn(t, e, n) {
  let { result: l } = e, { download: r } = e, { submit: i } = e, { error: s } = e;
  return t.$$set = (o) => {
    "result" in o && n(0, l = o.result), "download" in o && n(1, r = o.download), "submit" in o && n(2, i = o.submit), "error" in o && n(3, s = o.error);
  }, [l, r, i, s];
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
  let e, n, l, r, i, s, o, a, u, c, d, m, _;
  return r = new In({
    props: {
      template: t[1],
      handleTemplateInput: t[5]
    }
  }), s = new un({
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
      e = p("div"), n = p("section"), l = p("form"), S(r.$$.fragment), i = D(), S(s.$$.fragment), o = D(), S(a.$$.fragment), u = D(), S(c.$$.fragment), d = D(), S(m.$$.fragment), f(l, "class", "svelte-r93edu"), f(n, "data-cy", "form-container"), f(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), f(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(g, b) {
      M(g, e, b), h(e, n), h(n, l), F(r, l, null), h(l, i), F(s, l, null), h(l, o), F(a, l, null), h(l, u), F(c, l, null), h(n, d), F(m, n, null), _ = !0;
    },
    p(g, [b]) {
      const E = {};
      b & 2 && (E.template = g[1]), r.$set(E);
      const A = {};
      b & 4 && (A.error = g[2]), s.$set(A);
      const R = {};
      b & 1 && (R.fields = g[0].merge), b & 4 && (R.error = g[2]), a.$set(R);
      const H = {};
      b & 8 && (H.sources = g[3]), c.$set(H);
      const z = {};
      b & 16 && (z.download = g[4]), b & 1 && (z.result = g[0]), b & 4 && (z.error = g[2]), m.$set(z);
    },
    i(g) {
      _ || (w(r.$$.fragment, g), w(s.$$.fragment, g), w(a.$$.fragment, g), w(c.$$.fragment, g), w(m.$$.fragment, g), _ = !0);
    },
    o(g) {
      I(r.$$.fragment, g), I(s.$$.fragment, g), I(a.$$.fragment, g), I(c.$$.fragment, g), I(m.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && y(e), T(r), T(s), T(a), T(c), T(m);
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
  let l, { editTemplateService: r = new Ye(Ot) } = e, i = r.template, s = r.result, o = null, a = r.getSrcPlaceholders();
  function u(E) {
    r.setTemplateSource(E), n(1, i = r.template), n(0, s = r.result), n(2, o = r.error), n(3, a = r.getSrcPlaceholders());
  }
  function c(E, A) {
    r.updateResultMergeFields(E, A), n(0, s = r.result);
  }
  function d() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function m(E) {
    r.addMergeField(E), n(1, i = r.template), n(0, s = r.result), n(2, o = r.error);
  }
  function _(E) {
    const A = r.getMergeFieldItem(E);
    r.removeMergeField(A), n(1, i = r.template), n(0, s = r.result), n(2, o = r.error);
  }
  function g() {
    r.setTemplateSource(r.result), n(1, i = r.template), n(0, s = r.result), n(2, o = r.error);
  }
  async function b(E, A) {
    await r.updateSrc(E, A), n(1, i = r.template), n(0, s = r.result);
  }
  return t.$$set = (E) => {
    "editTemplateService" in E && n(12, r = E.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(4, l = Vn(s) || "");
  }, [
    s,
    i,
    o,
    a,
    l,
    u,
    c,
    d,
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
    this.templateService = new Ye(e), this.container = void 0;
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
      (n) => new Re({
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
      (n) => new $e({
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
