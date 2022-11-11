function M() {
}
function ke(t) {
  return t();
}
function be() {
  return /* @__PURE__ */ Object.create(null);
}
function Q(t) {
  t.forEach(ke);
}
function le(t) {
  return typeof t == "function";
}
function O(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Z;
function $e(t, e) {
  return Z || (Z = document.createElement("a")), Z.href = e, t === Z.href;
}
function Be(t) {
  return Object.keys(t).length === 0;
}
function Qe(t, ...e) {
  if (t == null)
    return M;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function _e(t, e, n) {
  t.$$.on_destroy.push(Qe(e, n));
}
function m(t, e) {
  t.appendChild(e);
}
function E(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode.removeChild(t);
}
function Le(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function h(t) {
  return document.createElement(t);
}
function te(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function J(t) {
  return document.createTextNode(t);
}
function C() {
  return J(" ");
}
function x(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function ge(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Je(t) {
  return Array.from(t.childNodes);
}
function ie(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function ve(t, e) {
  t.value = e == null ? "" : e;
}
function B(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let me;
function q(t) {
  me = t;
}
const G = [], ne = [], K = [], ue = [], He = Promise.resolve();
let ae = !1;
function Ve() {
  ae || (ae = !0, He.then(Pe));
}
function ce(t) {
  K.push(t);
}
function we(t) {
  ue.push(t);
}
const oe = /* @__PURE__ */ new Set();
let W = 0;
function Pe() {
  const t = me;
  do {
    for (; W < G.length; ) {
      const e = G[W];
      W++, q(e), Ge(e.$$);
    }
    for (q(null), G.length = 0, W = 0; ne.length; )
      ne.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const n = K[e];
      oe.has(n) || (oe.add(n), n());
    }
    K.length = 0;
  } while (G.length);
  for (; ue.length; )
    ue.pop()();
  ae = !1, oe.clear(), q(t);
}
function Ge(t) {
  if (t.fragment !== null) {
    t.update(), Q(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ce);
  }
}
const ee = /* @__PURE__ */ new Set();
let R;
function he() {
  R = {
    r: 0,
    c: [],
    p: R
  };
}
function pe() {
  R.r || Q(R.c), R = R.p;
}
function v(t, e) {
  t && t.i && (ee.delete(t), t.i(e));
}
function N(t, e, n, l) {
  if (t && t.o) {
    if (ee.has(t))
      return;
    ee.add(t), R.c.push(() => {
      ee.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function ye(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function A(t) {
  t && t.c();
}
function j(t, e, n, l) {
  const { fragment: r, on_mount: i, on_destroy: s, after_update: u } = t.$$;
  r && r.m(e, n), l || ce(() => {
    const a = i.map(ke).filter(le);
    s ? s.push(...a) : Q(a), t.$$.on_mount = [];
  }), u.forEach(ce);
}
function D(t, e) {
  const n = t.$$;
  n.fragment !== null && (Q(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qe(t, e) {
  t.$$.dirty[0] === -1 && (G.push(t), Ve(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function k(t, e, n, l, r, i, s, u = [-1]) {
  const a = me;
  q(t);
  const o = t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: M,
    not_equal: r,
    bound: be(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: be(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(o.root);
  let f = !1;
  if (o.ctx = n ? n(t, e.props || {}, (d, g, ...b) => {
    const p = b.length ? b[0] : g;
    return o.ctx && r(o.ctx[d], o.ctx[d] = p) && (!o.skip_bound && o.bound[d] && o.bound[d](p), f && qe(t, d)), g;
  }) : [], o.update(), f = !0, Q(o.before_update), o.fragment = l ? l(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Je(e.target);
      o.fragment && o.fragment.l(d), d.forEach(T);
    } else
      o.fragment && o.fragment.c();
    e.intro && v(t.$$.fragment), j(t, e.target, e.anchor, e.customElement), Pe();
  }
  q(a);
}
class L {
  $destroy() {
    D(this, 1), this.$destroy = M;
  }
  $on(e, n) {
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Be(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ze = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", We = "A 'merge' property is required", Xe = "Property 'merge' must be an array", Ke = "A 'find' property is required on every element inside 'merge'", et = "Every 'find' property inside 'merge' must be of type string", tt = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", nt = "A 'replace' property is required on every element inside 'merge'", rt = "Unexpected error while parsing template JSON", lt = "Every element inside the 'merge' should be an object";
var it = Object.defineProperty, st = Object.defineProperties, ot = Object.getOwnPropertyDescriptors, Ie = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, at = Object.prototype.propertyIsEnumerable, Me = (t, e, n) => e in t ? it(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ct = (t, e) => {
  for (var n in e || (e = {}))
    ut.call(e, n) && Me(t, n, e[n]);
  if (Ie)
    for (var n of Ie(e))
      at.call(e, n) && Me(t, n, e[n]);
  return t;
}, ft = (t, e) => st(t, ot(e));
class z extends Error {
  constructor(e) {
    super(e);
  }
}
function dt(t) {
  return typeof t == "object";
}
function se(t, e) {
  return t in e;
}
function fe(t, e) {
  return !se(t, e);
}
function gt(t, e) {
  return se(t, e) && !(e[t] instanceof Array);
}
function mt(t, e) {
  return se(t, e) && typeof e[t] != "string";
}
function ht(t, e) {
  const n = se(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function pt(t) {
  try {
    const e = JSON.parse(t);
    if (fe("merge", e))
      throw new z(We);
    if (gt("merge", e))
      throw new z(Xe);
    const { merge: n } = e, l = bt(n);
    return ft(ct({}, e), { merge: l });
  } catch (e) {
    throw xe(e);
  }
}
function bt(t) {
  return t.map((n) => {
    if (!dt(n))
      throw new z(lt);
    if (fe("find", n))
      throw new z(Ke);
    if (fe("replace", n))
      throw new z(nt);
    if (mt("find", n))
      throw new z(et);
    if (ht("find", n))
      throw new z(tt);
    return n;
  }).map(({ find: n, replace: l }) => ({
    find: n,
    replace: ze(l)
  }));
}
function _t(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function xe(t) {
  return t instanceof Error ? t : _t(t) ? new z(t.message) : new z(rt);
}
function ze(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
function de(t) {
  const e = new RegExp("(?<={{).+(?=}})|(?<={{).+(?=}$)|(?<={{).+(?=$)", "g"), n = t.match(e);
  return n && n.toString().trim() || t;
}
var vt = Object.defineProperty, wt = Object.defineProperties, yt = Object.getOwnPropertyDescriptors, Fe = Object.getOwnPropertySymbols, It = Object.prototype.hasOwnProperty, Mt = Object.prototype.propertyIsEnumerable, Se = (t, e, n) => e in t ? vt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, V = (t, e) => {
  for (var n in e || (e = {}))
    It.call(e, n) && Se(t, n, e[n]);
  if (Fe)
    for (var n of Fe(e))
      Mt.call(e, n) && Se(t, n, e[n]);
  return t;
}, X = (t, e) => wt(t, yt(e));
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
    const n = this._error && V({}, this._error) || null;
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
    this.handlers = X(V({}, this.handlers), {
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
      const n = pt(ze(e));
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
    }), this.result = X(V({}, this.result), { merge: this.result.merge }), this.result.merge;
  }
  logger(e) {
    console.error(e);
  }
  addMergeField(e) {
    this.setTemplateSource(X(V({}, this.result), {
      merge: [...this.result.merge, e]
    }));
  }
  removeMergeField(e) {
    this.setTemplateSource(X(V({}, this.result), {
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
        de(i.placeholder) !== i.placeholder && n.push(i);
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
const Ft = [
  {
    find: "NAME",
    replace: "world"
  }
], St = {
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
}, Nt = {
  format: "mp4",
  resolution: "hd"
}, Ct = {
  merge: Ft,
  timeline: St,
  output: Nt
};
function Tt(t) {
  let e, n;
  return {
    c() {
      e = te("svg"), n = te("path"), c(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), c(e, "class", "fill-current w-4 h-4 mr-2"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "viewBox", "0 0 20 20");
    },
    m(l, r) {
      E(l, e, r), m(e, n);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && T(e);
    }
  };
}
function Et(t) {
  return [];
}
class jt extends L {
  constructor(e) {
    super(), k(this, e, Et, Tt, O, {});
  }
}
function Dt(t) {
  let e, n, l, r;
  return n = new jt({}), {
    c() {
      e = h("a"), A(n.$$.fragment), l = J(`
	Download`), c(e, "href", t[0]), c(e, "download", "result.json"), c(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(i, s) {
      E(i, e, s), j(n, e, null), m(e, l), r = !0;
    },
    p(i, [s]) {
      (!r || s & 1) && c(e, "href", i[0]);
    },
    i(i) {
      r || (v(n.$$.fragment, i), r = !0);
    },
    o(i) {
      N(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && T(e), D(n);
    }
  };
}
function Ot(t, e, n) {
  let { download: l = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, l = r.download);
  }, [l];
}
class At extends L {
  constructor(e) {
    super(), k(this, e, Ot, Dt, O, { download: 0 });
  }
}
function kt(t) {
  let e, n, l;
  return {
    c() {
      e = h("button"), e.textContent = "Submit", c(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(r, i) {
      E(r, e, i), n || (l = x(e, "click", function() {
        le(t[0]) && t[0].apply(this, arguments);
      }), n = !0);
    },
    p(r, [i]) {
      t = r;
    },
    i: M,
    o: M,
    d(r) {
      r && T(e), n = !1, l();
    }
  };
}
function Lt(t, e, n) {
  let { submit: l } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, l = r.submit);
  }, [l];
}
class Pt extends L {
  constructor(e) {
    super(), k(this, e, Lt, kt, O, { submit: 0 });
  }
}
function xt(t) {
  let e, n, l, r, i;
  return n = new At({ props: { download: t[0] } }), r = new Pt({ props: { submit: t[1] } }), {
    c() {
      e = h("div"), A(n.$$.fragment), l = C(), A(r.$$.fragment), c(e, "class", "flex justify-between pt-4");
    },
    m(s, u) {
      E(s, e, u), j(n, e, null), m(e, l), j(r, e, null), i = !0;
    },
    p(s, [u]) {
      const a = {};
      u & 1 && (a.download = s[0]), n.$set(a);
      const o = {};
      u & 2 && (o.submit = s[1]), r.$set(o);
    },
    i(s) {
      i || (v(n.$$.fragment, s), v(r.$$.fragment, s), i = !0);
    },
    o(s) {
      N(n.$$.fragment, s), N(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && T(e), D(n), D(r);
    }
  };
}
function zt(t, e, n) {
  let { download: l = "" } = e, { submit: r } = e;
  return t.$$set = (i) => {
    "download" in i && n(0, l = i.download), "submit" in i && n(1, r = i.submit);
  }, [l, r];
}
class Yt extends L {
  constructor(e) {
    super(), k(this, e, zt, xt, O, { download: 0, submit: 1 });
  }
}
const $ = [];
function Ne(t, e = M) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(u) {
    if (O(t, u) && (t = u, n)) {
      const a = !$.length;
      for (const o of l)
        o[1](), $.push(o, t);
      if (a) {
        for (let o = 0; o < $.length; o += 2)
          $[o][0]($[o + 1]);
        $.length = 0;
      }
    }
  }
  function i(u) {
    r(u(t));
  }
  function s(u, a = M) {
    const o = [u, a];
    return l.add(o), l.size === 1 && (n = e(r) || M), u(t), () => {
      l.delete(o), l.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: s };
}
function Rt(t) {
  let e, n, l;
  return {
    c() {
      e = h("input"), c(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(e, "type", "text"), c(e, "role", "textbox"), c(e, "aria-label", t[1]);
    },
    m(r, i) {
      E(r, e, i), ve(e, t[0]), n || (l = [
        x(e, "input", t[3]),
        x(e, "focus", t[4], { once: !0 })
      ], n = !0);
    },
    p(r, [i]) {
      i & 2 && c(e, "aria-label", r[1]), i & 1 && e.value !== r[0] && ve(e, r[0]);
    },
    i: M,
    o: M,
    d(r) {
      r && T(e), n = !1, Q(l);
    }
  };
}
function Ut(t, e, n) {
  let { value: l } = e, { label: r } = e, { onFocus: i } = e;
  function s() {
    l = this.value, n(0, l);
  }
  const u = (a) => i(a.currentTarget);
  return t.$$set = (a) => {
    "value" in a && n(0, l = a.value), "label" in a && n(1, r = a.label), "onFocus" in a && n(2, i = a.onFocus);
  }, [l, r, i, s, u];
}
class Ce extends L {
  constructor(e) {
    super(), k(this, e, Ut, Rt, O, { value: 0, label: 1, onFocus: 2 });
  }
}
function $t(t) {
  let e, n, l, r, i, s, u, a, o, f, d, g, b, p, _, I;
  function P(y) {
    t[7](y);
  }
  let F = {
    label: "MergeField.find",
    onFocus: t[6]
  };
  t[1] !== void 0 && (F.value = t[1]), s = new Ce({ props: F }), ne.push(() => ye(s, "value", P));
  function w(y) {
    t[9](y);
  }
  let S = {
    label: "MergeField.replace",
    onFocus: t[8]
  };
  return t[2] !== void 0 && (S.value = t[2]), o = new Ce({ props: S }), ne.push(() => ye(o, "value", w)), {
    c() {
      e = h("div"), n = h("div"), l = h("h1"), l.textContent = "Add a new merge field", r = C(), i = h("div"), A(s.$$.fragment), a = C(), A(o.$$.fragment), d = C(), g = h("div"), b = h("button"), b.textContent = "Add", c(l, "class", "text-teal-400 px-1"), c(b, "aria-label", "Add field"), c(b, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), c(g, "class", "flex flex-row-reverse"), c(i, "class", "border p-4 mb-6"), c(e, "data-cy", "add-merge-field-section");
    },
    m(y, Y) {
      E(y, e, Y), m(e, n), m(n, l), m(n, r), m(n, i), j(s, i, null), m(i, a), j(o, i, null), m(i, d), m(i, g), m(g, b), p = !0, _ || (I = x(b, "click", ge(t[10])), _ = !0);
    },
    p(y, [Y]) {
      const U = {};
      !u && Y & 2 && (u = !0, U.value = y[1], we(() => u = !1)), s.$set(U);
      const H = {};
      !f && Y & 4 && (f = !0, H.value = y[2], we(() => f = !1)), o.$set(H);
    },
    i(y) {
      p || (v(s.$$.fragment, y), v(o.$$.fragment, y), p = !0);
    },
    o(y) {
      N(s.$$.fragment, y), N(o.$$.fragment, y), p = !1;
    },
    d(y) {
      y && T(e), D(s), D(o), _ = !1, I();
    }
  };
}
function Bt(t, e, n) {
  let l, r, i = Ne("find");
  _e(t, i, (p) => n(1, l = p));
  let s = Ne("replace");
  _e(t, s, (p) => n(2, r = p));
  let u = (p) => p.set(""), { addField: a } = e;
  const o = () => u(i);
  function f(p) {
    l = p, i.set(l);
  }
  const d = () => u(s);
  function g(p) {
    r = p, s.set(r);
  }
  const b = () => a({ find: l, replace: r });
  return t.$$set = (p) => {
    "addField" in p && n(0, a = p.addField);
  }, [
    a,
    l,
    r,
    i,
    s,
    u,
    o,
    f,
    d,
    g,
    b
  ];
}
class Qt extends L {
  constructor(e) {
    super(), k(this, e, Bt, $t, O, { addField: 0 });
  }
}
function Jt(t) {
  let e, n;
  return {
    c() {
      e = te("svg"), n = te("path"), c(n, "fill", "white"), c(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      E(l, e, r), m(e, n);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && T(e);
    }
  };
}
function Ht(t) {
  return [];
}
class Vt extends L {
  constructor(e) {
    super(), k(this, e, Ht, Jt, O, {});
  }
}
function Gt(t) {
  let e, n, l, r, i;
  return n = new Vt({}), {
    c() {
      e = h("button"), A(n.$$.fragment), c(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"), c(e, "aria-label", "Remove field");
    },
    m(s, u) {
      E(s, e, u), j(n, e, null), l = !0, r || (i = x(e, "click", ge(function() {
        le(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(s, [u]) {
      t = s;
    },
    i(s) {
      l || (v(n.$$.fragment, s), l = !0);
    },
    o(s) {
      N(n.$$.fragment, s), l = !1;
    },
    d(s) {
      s && T(e), D(n), r = !1, i();
    }
  };
}
function qt(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class Zt extends L {
  constructor(e) {
    super(), k(this, e, qt, Gt, O, { onClick: 0 });
  }
}
function Wt(t) {
  let e, n;
  return {
    c() {
      e = h("label"), n = J(t[0]), c(e, "for", t[0]), c(e, "class", "block mb-2 monospace");
    },
    m(l, r) {
      E(l, e, r), m(e, n);
    },
    p(l, [r]) {
      r & 1 && ie(n, l[0]), r & 1 && c(e, "for", l[0]);
    },
    i: M,
    o: M,
    d(l) {
      l && T(e);
    }
  };
}
function Xt(t, e, n) {
  let { find: l } = e;
  return t.$$set = (r) => {
    "find" in r && n(0, l = r.find);
  }, [l];
}
class Kt extends L {
  constructor(e) {
    super(), k(this, e, Xt, Wt, O, { find: 0 });
  }
}
function en(t) {
  let e, n, l;
  return {
    c() {
      e = h("input"), c(e, "role", "textbox"), c(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(e, "type", "text"), e.value = t[2], c(e, "label", t[1]);
    },
    m(r, i) {
      E(r, e, i), n || (l = x(e, "input", t[4]), n = !0);
    },
    p(r, [i]) {
      i & 4 && e.value !== r[2] && (e.value = r[2]), i & 2 && c(e, "label", r[1]);
    },
    i: M,
    o: M,
    d(r) {
      r && T(e), n = !1, l();
    }
  };
}
function tn(t, e, n) {
  let { field: l } = e, { find: r } = e, { replace: i } = e, { handleFormInput: s } = e;
  const u = (a) => s({ find: r, replace: a.currentTarget.value }, l);
  return t.$$set = (a) => {
    "field" in a && n(0, l = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, i = a.replace), "handleFormInput" in a && n(3, s = a.handleFormInput);
  }, [l, r, i, s, u];
}
class nn extends L {
  constructor(e) {
    super(), k(this, e, tn, en, O, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function rn(t) {
  let e, n, l, r, i;
  return n = new Kt({ props: { find: t[0].find } }), r = new nn({
    props: {
      find: t[0].find,
      replace: t[0].replace,
      field: t[0],
      handleFormInput: t[1]
    }
  }), {
    c() {
      e = h("div"), A(n.$$.fragment), l = C(), A(r.$$.fragment), c(e, "data-cy", "label-input");
    },
    m(s, u) {
      E(s, e, u), j(n, e, null), m(e, l), j(r, e, null), i = !0;
    },
    p(s, [u]) {
      const a = {};
      u & 1 && (a.find = s[0].find), n.$set(a);
      const o = {};
      u & 1 && (o.find = s[0].find), u & 1 && (o.replace = s[0].replace), u & 1 && (o.field = s[0]), u & 2 && (o.handleFormInput = s[1]), r.$set(o);
    },
    i(s) {
      i || (v(n.$$.fragment, s), v(r.$$.fragment, s), i = !0);
    },
    o(s) {
      N(n.$$.fragment, s), N(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && T(e), D(n), D(r);
    }
  };
}
function ln(t, e, n) {
  let { field: l } = e, { handleFormInput: r } = e;
  return t.$$set = (i) => {
    "field" in i && n(0, l = i.field), "handleFormInput" in i && n(1, r = i.handleFormInput);
  }, [l, r];
}
class Re extends L {
  constructor(e) {
    super(), k(this, e, ln, rn, O, { field: 0, handleFormInput: 1 });
  }
}
function Te(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l;
}
function Ee(t) {
  let e, n, l, r, i, s;
  n = new Re({
    props: {
      field: t[6],
      handleFormInput: t[2]
    }
  });
  function u() {
    return t[5](t[6]);
  }
  return r = new Zt({ props: { onClick: u } }), {
    c() {
      e = h("div"), A(n.$$.fragment), l = C(), A(r.$$.fragment), i = C(), c(e, "class", "relative");
    },
    m(a, o) {
      E(a, e, o), j(n, e, null), m(e, l), j(r, e, null), m(e, i), s = !0;
    },
    p(a, o) {
      t = a;
      const f = {};
      o & 2 && (f.field = t[6]), o & 4 && (f.handleFormInput = t[2]), n.$set(f);
      const d = {};
      o & 18 && (d.onClick = u), r.$set(d);
    },
    i(a) {
      s || (v(n.$$.fragment, a), v(r.$$.fragment, a), s = !0);
    },
    o(a) {
      N(n.$$.fragment, a), N(r.$$.fragment, a), s = !1;
    },
    d(a) {
      a && T(e), D(n), D(r);
    }
  };
}
function sn(t) {
  let e, n, l, r, i, s, u, a, o = t[1], f = [];
  for (let g = 0; g < o.length; g += 1)
    f[g] = Ee(Te(t, o, g));
  const d = (g) => N(f[g], 1, 1, () => {
    f[g] = null;
  });
  return u = new Qt({ props: { addField: t[3] } }), {
    c() {
      e = h("div"), n = h("div"), l = h("h1"), l.textContent = "Modify Merge Values", r = C(), i = h("div");
      for (let g = 0; g < f.length; g += 1)
        f[g].c();
      s = C(), A(u.$$.fragment), c(l, "class", "text-teal-400 px-1"), c(i, "class", "border p-4 mb-6"), c(n, "data-cy", "merge-fields-input-section"), B(e, "hidden", t[0]);
    },
    m(g, b) {
      E(g, e, b), m(e, n), m(n, l), m(n, r), m(n, i);
      for (let p = 0; p < f.length; p += 1)
        f[p].m(i, null);
      m(e, s), j(u, e, null), a = !0;
    },
    p(g, [b]) {
      if (b & 22) {
        o = g[1];
        let _;
        for (_ = 0; _ < o.length; _ += 1) {
          const I = Te(g, o, _);
          f[_] ? (f[_].p(I, b), v(f[_], 1)) : (f[_] = Ee(I), f[_].c(), v(f[_], 1), f[_].m(i, null));
        }
        for (he(), _ = o.length; _ < f.length; _ += 1)
          d(_);
        pe();
      }
      const p = {};
      b & 8 && (p.addField = g[3]), u.$set(p), (!a || b & 1) && B(e, "hidden", g[0]);
    },
    i(g) {
      if (!a) {
        for (let b = 0; b < o.length; b += 1)
          v(f[b]);
        v(u.$$.fragment, g), a = !0;
      }
    },
    o(g) {
      f = f.filter(Boolean);
      for (let b = 0; b < f.length; b += 1)
        N(f[b]);
      N(u.$$.fragment, g), a = !1;
    },
    d(g) {
      g && T(e), Le(f, g), D(u);
    }
  };
}
function on(t, e, n) {
  let { error: l } = e, { fields: r = [] } = e, { handleFormInput: i } = e, { addField: s } = e, { removeField: u } = e;
  const a = (o) => u(o);
  return t.$$set = (o) => {
    "error" in o && n(0, l = o.error), "fields" in o && n(1, r = o.fields), "handleFormInput" in o && n(2, i = o.handleFormInput), "addField" in o && n(3, s = o.addField), "removeField" in o && n(4, u = o.removeField);
  }, [l, r, i, s, u, a];
}
class un extends L {
  constructor(e) {
    super(), k(this, e, on, sn, O, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function an(t) {
  let e, n, l;
  return {
    c() {
      e = h("button"), e.textContent = "Reset", c(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(r, i) {
      E(r, e, i), n || (l = x(e, "click", ge(function() {
        le(t[0]) && t[0].apply(this, arguments);
      })), n = !0);
    },
    p(r, [i]) {
      t = r;
    },
    i: M,
    o: M,
    d(r) {
      r && T(e), n = !1, l();
    }
  };
}
function cn(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class fn extends L {
  constructor(e) {
    super(), k(this, e, cn, an, O, { onClick: 0 });
  }
}
function dn(t) {
  let e, n, l, r, i, s, u, a;
  return u = new fn({ props: { onClick: t[0] } }), {
    c() {
      e = h("div"), n = h("p"), l = h("span"), r = J(t[2]), i = C(), s = h("div"), A(u.$$.fragment), c(l, "class", "monospace text-orange-900"), c(n, "data-cy", "template-input-error"), c(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), c(s, "class", "flex flex-row-reverse "), B(e, "hidden", !t[1]);
    },
    m(o, f) {
      E(o, e, f), m(e, n), m(n, l), m(l, r), m(e, i), m(e, s), j(u, s, null), a = !0;
    },
    p(o, [f]) {
      (!a || f & 4) && ie(r, o[2]);
      const d = {};
      f & 1 && (d.onClick = o[0]), u.$set(d), (!a || f & 2) && B(e, "hidden", !o[1]);
    },
    i(o) {
      a || (v(u.$$.fragment, o), a = !0);
    },
    o(o) {
      N(u.$$.fragment, o), a = !1;
    },
    d(o) {
      o && T(e), D(u);
    }
  };
}
function gn(t, e, n) {
  let l, { onClick: r } = e, { error: i } = e;
  return t.$$set = (s) => {
    "onClick" in s && n(0, r = s.onClick), "error" in s && n(1, i = s.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, l = i && i.message || "");
  }, [r, i, l];
}
class mn extends L {
  constructor(e) {
    super(), k(this, e, gn, dn, O, { onClick: 0, error: 1 });
  }
}
const je = (t, e) => async (n) => await e(n, t);
function hn(t) {
  let e, n, l = de(t[1]) + "", r, i, s, u, a, o, f;
  return {
    c() {
      e = h("div"), n = h("label"), r = J(l), i = C(), s = h("input"), u = C(), a = h("input"), c(n, "class", "block mb-2 monospace"), c(n, "for", "input"), c(s, "aria-label", "Current source value"), c(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(s, "type", "text"), s.value = t[0], s.disabled = !0, a.disabled = t[2], c(a, "role", "button"), c(a, "aria-label", "File upload"), c(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(a, "type", "file"), c(e, "data-cy", "source-input");
    },
    m(d, g) {
      E(d, e, g), m(e, n), m(n, r), m(e, i), m(e, s), m(e, u), m(e, a), o || (f = x(a, "change", t[7]), o = !0);
    },
    p(d, [g]) {
      g & 2 && l !== (l = de(d[1]) + "") && ie(r, l), g & 1 && s.value !== d[0] && (s.value = d[0]), g & 4 && (a.disabled = d[2]);
    },
    i: M,
    o: M,
    d(d) {
      d && T(e), o = !1, f();
    }
  };
}
function pn(t, e, n) {
  let l, { asset: r } = e, { value: i } = e, { label: s } = e, { handleChange: u } = e, a = !1, o = async (d) => {
    n(6, a = !0), await u(d), n(0, i = r.src), n(6, a = !1);
  };
  const f = (d) => o(d.currentTarget.files);
  return t.$$set = (d) => {
    "asset" in d && n(4, r = d.asset), "value" in d && n(0, i = d.value), "label" in d && n(1, s = d.label), "handleChange" in d && n(5, u = d.handleChange);
  }, t.$$.update = () => {
    t.$$.dirty & 64 && n(2, l = a);
  }, [i, s, l, o, r, u, a, f];
}
class Ue extends L {
  constructor(e) {
    super(), k(this, e, pn, hn, O, {
      asset: 4,
      value: 0,
      label: 1,
      handleChange: 5
    });
  }
}
function De(t, e, n) {
  const l = t.slice();
  return l[2] = e[n], l;
}
function Oe(t) {
  let e, n;
  return e = new Ue({
    props: {
      label: t[2].placeholder,
      handleChange: je(t[2].asset, t[1]),
      value: t[2].asset.src,
      asset: t[2].asset
    }
  }), {
    c() {
      A(e.$$.fragment);
    },
    m(l, r) {
      j(e, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & 1 && (i.label = l[2].placeholder), r & 3 && (i.handleChange = je(l[2].asset, l[1])), r & 1 && (i.value = l[2].asset.src), r & 1 && (i.asset = l[2].asset), e.$set(i);
    },
    i(l) {
      n || (v(e.$$.fragment, l), n = !0);
    },
    o(l) {
      N(e.$$.fragment, l), n = !1;
    },
    d(l) {
      D(e, l);
    }
  };
}
function bn(t) {
  let e, n, l, r, i, s = t[0], u = [];
  for (let o = 0; o < s.length; o += 1)
    u[o] = Oe(De(t, s, o));
  const a = (o) => N(u[o], 1, 1, () => {
    u[o] = null;
  });
  return {
    c() {
      e = h("div"), n = h("h1"), n.textContent = "Update sources", l = C(), r = h("div");
      for (let o = 0; o < u.length; o += 1)
        u[o].c();
      c(n, "class", "text-teal-400 px-1"), c(r, "class", "border p-4 mb-6"), c(e, "data-cy", "source-container"), B(e, "hidden", t[0].length < 1);
    },
    m(o, f) {
      E(o, e, f), m(e, n), m(e, l), m(e, r);
      for (let d = 0; d < u.length; d += 1)
        u[d].m(r, null);
      i = !0;
    },
    p(o, [f]) {
      if (f & 3) {
        s = o[0];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const g = De(o, s, d);
          u[d] ? (u[d].p(g, f), v(u[d], 1)) : (u[d] = Oe(g), u[d].c(), v(u[d], 1), u[d].m(r, null));
        }
        for (he(), d = s.length; d < u.length; d += 1)
          a(d);
        pe();
      }
      (!i || f & 1) && B(e, "hidden", o[0].length < 1);
    },
    i(o) {
      if (!i) {
        for (let f = 0; f < s.length; f += 1)
          v(u[f]);
        i = !0;
      }
    },
    o(o) {
      u = u.filter(Boolean);
      for (let f = 0; f < u.length; f += 1)
        N(u[f]);
      i = !1;
    },
    d(o) {
      o && T(e), Le(u, o);
    }
  };
}
function _n(t, e, n) {
  let { sources: l } = e, { handleSourceFieldUpdate: r } = e;
  return t.$$set = (i) => {
    "sources" in i && n(0, l = i.sources), "handleSourceFieldUpdate" in i && n(1, r = i.handleSourceFieldUpdate);
  }, [l, r];
}
class vn extends L {
  constructor(e) {
    super(), k(this, e, _n, bn, O, { sources: 0, handleSourceFieldUpdate: 1 });
  }
}
function Ae(t) {
  let e, n, l, r, i, s, u, a, o = re(t[0]) + "", f, d, g, b, p, _;
  return g = new Yt({
    props: {
      submit: t[8],
      download: t[4]
    }
  }), {
    c() {
      e = h("div"), n = h("h1"), n.textContent = "Result", l = C(), r = h("abbr"), i = h("img"), u = C(), a = h("p"), f = J(o), d = C(), A(g.$$.fragment), c(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), $e(i.src, s = Ze) || c(i, "src", s), c(i, "alt", "copy-button"), c(i, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), c(r, "title", "Copy to clipboard"), c(r, "class", "svelte-r93edu"), c(a, "data-cy", "result"), c(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), c(e, "data-cy", "result-section"), c(e, "class", "svelte-r93edu");
    },
    m(I, P) {
      E(I, e, P), m(e, n), m(e, l), m(e, r), m(r, i), m(e, u), m(e, a), m(a, f), m(e, d), j(g, e, null), b = !0, p || (_ = x(i, "click", t[7]), p = !0);
    },
    p(I, P) {
      (!b || P & 1) && o !== (o = re(I[0]) + "") && ie(f, o);
      const F = {};
      P & 16 && (F.download = I[4]), g.$set(F);
    },
    i(I) {
      b || (v(g.$$.fragment, I), b = !0);
    },
    o(I) {
      N(g.$$.fragment, I), b = !1;
    },
    d(I) {
      I && T(e), D(g), p = !1, _();
    }
  };
}
function wn(t) {
  let e, n, l, r, i, s, u, a, o, f, d, g, b, p, _, I, P, F;
  f = new mn({
    props: {
      error: t[2],
      onClick: t[11]
    }
  }), g = new un({
    props: {
      fields: t[0].merge,
      handleFormInput: t[6],
      addField: t[9],
      removeField: t[10],
      error: t[2]
    }
  }), p = new vn({
    props: {
      sources: t[3],
      handleSourceFieldUpdate: t[12]
    }
  });
  let w = !t[2] && Ae(t);
  return {
    c() {
      e = h("div"), n = h("section"), l = h("form"), r = h("div"), i = h("label"), i.textContent = "Paste template", s = C(), u = h("textarea"), o = C(), A(f.$$.fragment), d = C(), A(g.$$.fragment), b = C(), A(p.$$.fragment), _ = C(), w && w.c(), c(i, "for", "json-input"), c(i, "class", "text-teal-400 px-1 svelte-r93edu"), c(u, "data-cy", "template-input"), c(u, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), c(u, "id", "json-input"), u.value = a = re(t[1]), c(r, "data-cy", "template-input-section"), c(r, "class", "mb-6 svelte-r93edu"), c(l, "class", "svelte-r93edu"), c(n, "data-cy", "form-container"), c(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), c(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(S, y) {
      E(S, e, y), m(e, n), m(n, l), m(l, r), m(r, i), m(r, s), m(r, u), m(l, o), j(f, l, null), m(l, d), j(g, l, null), m(l, b), j(p, l, null), m(n, _), w && w.m(n, null), I = !0, P || (F = x(u, "input", t[14]), P = !0);
    },
    p(S, [y]) {
      (!I || y & 2 && a !== (a = re(S[1]))) && (u.value = a);
      const Y = {};
      y & 4 && (Y.error = S[2]), f.$set(Y);
      const U = {};
      y & 1 && (U.fields = S[0].merge), y & 4 && (U.error = S[2]), g.$set(U);
      const H = {};
      y & 8 && (H.sources = S[3]), p.$set(H), S[2] ? w && (he(), N(w, 1, 1, () => {
        w = null;
      }), pe()) : w ? (w.p(S, y), y & 4 && v(w, 1)) : (w = Ae(S), w.c(), v(w, 1), w.m(n, null));
    },
    i(S) {
      I || (v(f.$$.fragment, S), v(g.$$.fragment, S), v(p.$$.fragment, S), v(w), I = !0);
    },
    o(S) {
      N(f.$$.fragment, S), N(g.$$.fragment, S), N(p.$$.fragment, S), N(w), I = !1;
    },
    d(S) {
      S && T(e), D(f), D(g), D(p), w && w.d(), P = !1, F();
    }
  };
}
function re(t) {
  return JSON.stringify(t, null, 2);
}
function yn(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function In(t, e, n) {
  let l, { editTemplateService: r = new Ye(Ct) } = e, i = r.template, s = r.result, u = null, a = r.getSrcPlaceholders();
  function o(F) {
    r.setTemplateSource(F), n(1, i = r.template), n(0, s = r.result), n(2, u = r.error), n(3, a = r.getSrcPlaceholders());
  }
  function f(F, w) {
    r.updateResultMergeFields(F, w), n(0, s = r.result);
  }
  function d() {
    navigator.clipboard.writeText(JSON.stringify(s)), alert("JSON copied to clipboard!");
  }
  function g() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function b(F) {
    r.addMergeField(F), n(1, i = r.template), n(0, s = r.result), n(2, u = r.error);
  }
  function p(F) {
    const w = r.getMergeFieldItem(F);
    r.removeMergeField(w), n(1, i = r.template), n(0, s = r.result), n(2, u = r.error);
  }
  function _() {
    r.setTemplateSource(r.result), n(1, i = r.template), n(0, s = r.result), n(2, u = r.error);
  }
  async function I(F, w) {
    await r.updateSrc(F, w), n(1, i = r.template), n(0, s = r.result);
  }
  const P = (F) => o(F.currentTarget.value);
  return t.$$set = (F) => {
    "editTemplateService" in F && n(13, r = F.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(4, l = yn(s) || "");
  }, [
    s,
    i,
    u,
    a,
    l,
    o,
    f,
    d,
    g,
    b,
    p,
    _,
    I,
    r,
    P
  ];
}
class Mn extends L {
  constructor(e) {
    super(), k(this, e, In, wn, O, { editTemplateService: 13 });
  }
}
class Fn {
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
    this.container = e, new Mn({
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
      (n) => new Ue({
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
  Fn as default
};
