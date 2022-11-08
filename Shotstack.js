function M() {
}
function Oe(t) {
  return t();
}
function pe() {
  return /* @__PURE__ */ Object.create(null);
}
function Q(t) {
  t.forEach(Oe);
}
function le(t) {
  return typeof t == "function";
}
function O(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Z;
function Re(t, e) {
  return Z || (Z = document.createElement("a")), Z.href = e, t === Z.href;
}
function Ue(t) {
  return Object.keys(t).length === 0;
}
function $e(t, ...e) {
  if (t == null)
    return M;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function be(t, e, n) {
  t.$$.on_destroy.push($e(e, n));
}
function g(t, e) {
  t.appendChild(e);
}
function E(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode.removeChild(t);
}
function Ae(t, e) {
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
function de(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Be(t) {
  return Array.from(t.childNodes);
}
function ie(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function _e(t, e) {
  t.value = e == null ? "" : e;
}
function B(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let me;
function q(t) {
  me = t;
}
const V = [], ne = [], K = [], ue = [], Qe = Promise.resolve();
let ae = !1;
function Je() {
  ae || (ae = !0, Qe.then(ke));
}
function ce(t) {
  K.push(t);
}
function ve(t) {
  ue.push(t);
}
const oe = /* @__PURE__ */ new Set();
let W = 0;
function ke() {
  const t = me;
  do {
    for (; W < V.length; ) {
      const e = V[W];
      W++, q(e), He(e.$$);
    }
    for (q(null), V.length = 0, W = 0; ne.length; )
      ne.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const n = K[e];
      oe.has(n) || (oe.add(n), n());
    }
    K.length = 0;
  } while (V.length);
  for (; ue.length; )
    ue.pop()();
  ae = !1, oe.clear(), q(t);
}
function He(t) {
  if (t.fragment !== null) {
    t.update(), Q(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ce);
  }
}
const ee = /* @__PURE__ */ new Set();
let R;
function ge() {
  R = {
    r: 0,
    c: [],
    p: R
  };
}
function he() {
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
function we(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function A(t) {
  t && t.c();
}
function j(t, e, n, l) {
  const { fragment: r, on_mount: i, on_destroy: s, after_update: u } = t.$$;
  r && r.m(e, n), l || ce(() => {
    const a = i.map(Oe).filter(le);
    s ? s.push(...a) : Q(a), t.$$.on_mount = [];
  }), u.forEach(ce);
}
function D(t, e) {
  const n = t.$$;
  n.fragment !== null && (Q(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ge(t, e) {
  t.$$.dirty[0] === -1 && (V.push(t), Je(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
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
    bound: pe(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: pe(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(o.root);
  let f = !1;
  if (o.ctx = n ? n(t, e.props || {}, (d, m, ...b) => {
    const p = b.length ? b[0] : m;
    return o.ctx && r(o.ctx[d], o.ctx[d] = p) && (!o.skip_bound && o.bound[d] && o.bound[d](p), f && Ge(t, d)), m;
  }) : [], o.update(), f = !0, Q(o.before_update), o.fragment = l ? l(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Be(e.target);
      o.fragment && o.fragment.l(d), d.forEach(T);
    } else
      o.fragment && o.fragment.c();
    e.intro && v(t.$$.fragment), j(t, e.target, e.anchor, e.customElement), ke();
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
    this.$$set && !Ue(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ve = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", qe = "A 'merge' property is required", Ze = "Property 'merge' must be an array", We = "A 'find' property is required on every element inside 'merge'", Xe = "Every 'find' property inside 'merge' must be of type string", Ke = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", et = "A 'replace' property is required on every element inside 'merge'", tt = "Unexpected error while parsing template JSON", nt = "Every element inside the 'merge' should be an object";
var rt = Object.defineProperty, lt = Object.defineProperties, it = Object.getOwnPropertyDescriptors, ye = Object.getOwnPropertySymbols, st = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, Ie = (t, e, n) => e in t ? rt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ut = (t, e) => {
  for (var n in e || (e = {}))
    st.call(e, n) && Ie(t, n, e[n]);
  if (ye)
    for (var n of ye(e))
      ot.call(e, n) && Ie(t, n, e[n]);
  return t;
}, at = (t, e) => lt(t, it(e));
class z extends Error {
  constructor(e) {
    super(e);
  }
}
function ct(t) {
  return typeof t == "object";
}
function se(t, e) {
  return t in e;
}
function fe(t, e) {
  return !se(t, e);
}
function ft(t, e) {
  return se(t, e) && !(e[t] instanceof Array);
}
function dt(t, e) {
  return se(t, e) && typeof e[t] != "string";
}
function mt(t, e) {
  const n = se(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function gt(t) {
  try {
    const e = JSON.parse(t);
    if (fe("merge", e))
      throw new z(qe);
    if (ft("merge", e))
      throw new z(Ze);
    const { merge: n } = e, l = ht(n);
    return at(ut({}, e), { merge: l });
  } catch (e) {
    throw Le(e);
  }
}
function ht(t) {
  return t.map((n) => {
    if (!ct(n))
      throw new z(nt);
    if (fe("find", n))
      throw new z(We);
    if (fe("replace", n))
      throw new z(et);
    if (dt("find", n))
      throw new z(Xe);
    if (mt("find", n))
      throw new z(Ke);
    return n;
  }).map(({ find: n, replace: l }) => ({
    find: n,
    replace: Pe(l)
  }));
}
function pt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Le(t) {
  return t instanceof Error ? t : pt(t) ? new z(t.message) : new z(tt);
}
function Pe(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
var bt = Object.defineProperty, _t = Object.defineProperties, vt = Object.getOwnPropertyDescriptors, Me = Object.getOwnPropertySymbols, wt = Object.prototype.hasOwnProperty, yt = Object.prototype.propertyIsEnumerable, Fe = (t, e, n) => e in t ? bt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, G = (t, e) => {
  for (var n in e || (e = {}))
    wt.call(e, n) && Fe(t, n, e[n]);
  if (Me)
    for (var n of Me(e))
      yt.call(e, n) && Fe(t, n, e[n]);
  return t;
}, X = (t, e) => _t(t, vt(e));
class xe {
  constructor(e) {
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = {
      change: [],
      submit: [],
      error: [this.logger],
      upload: []
    }, this.setTemplateSource(e);
  }
  set error(e) {
    const n = this._error && G({}, this._error) || null;
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
    this.handlers = X(G({}, this.handlers), {
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
      const n = gt(Pe(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const l = Le(n);
      this.error = l;
    }
  }
  updateResultMergeFields(e, n) {
    const l = n || this.getMergeFieldItem({ find: e.find });
    return this.result.merge.forEach((r) => {
      r === l && (r.find = e.find, r.replace = e.replace);
    }), this.result = X(G({}, this.result), { merge: this.result.merge }), this.result.merge;
  }
  logger(e) {
    console.error(e);
  }
  addMergeField(e) {
    this.setTemplateSource(X(G({}, this.result), {
      merge: [...this.result.merge, e]
    }));
  }
  removeMergeField(e) {
    this.setTemplateSource(X(G({}, this.result), {
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
        i.placeholder !== void 0 && i.placeholder.charAt(0) === "{" && n.push(i);
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
const It = [
  {
    find: "NAME",
    replace: "world"
  }
], Mt = {
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
}, Ft = {
  format: "mp4",
  resolution: "hd"
}, St = {
  merge: It,
  timeline: Mt,
  output: Ft
};
function Nt(t) {
  let e, n;
  return {
    c() {
      e = te("svg"), n = te("path"), c(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), c(e, "class", "fill-current w-4 h-4 mr-2"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "viewBox", "0 0 20 20");
    },
    m(l, r) {
      E(l, e, r), g(e, n);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && T(e);
    }
  };
}
function Ct(t) {
  return [];
}
class Tt extends L {
  constructor(e) {
    super(), k(this, e, Ct, Nt, O, {});
  }
}
function Et(t) {
  let e, n, l, r;
  return n = new Tt({}), {
    c() {
      e = h("a"), A(n.$$.fragment), l = J(`
	Download`), c(e, "href", t[0]), c(e, "download", "result.json"), c(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(i, s) {
      E(i, e, s), j(n, e, null), g(e, l), r = !0;
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
function jt(t, e, n) {
  let { download: l = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, l = r.download);
  }, [l];
}
class Dt extends L {
  constructor(e) {
    super(), k(this, e, jt, Et, O, { download: 0 });
  }
}
function Ot(t) {
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
function At(t, e, n) {
  let { submit: l } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, l = r.submit);
  }, [l];
}
class kt extends L {
  constructor(e) {
    super(), k(this, e, At, Ot, O, { submit: 0 });
  }
}
function Lt(t) {
  let e, n, l, r, i;
  return n = new Dt({ props: { download: t[0] } }), r = new kt({ props: { submit: t[1] } }), {
    c() {
      e = h("div"), A(n.$$.fragment), l = C(), A(r.$$.fragment), c(e, "class", "flex justify-between pt-4");
    },
    m(s, u) {
      E(s, e, u), j(n, e, null), g(e, l), j(r, e, null), i = !0;
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
function Pt(t, e, n) {
  let { download: l = "" } = e, { submit: r } = e;
  return t.$$set = (i) => {
    "download" in i && n(0, l = i.download), "submit" in i && n(1, r = i.submit);
  }, [l, r];
}
class xt extends L {
  constructor(e) {
    super(), k(this, e, Pt, Lt, O, { download: 0, submit: 1 });
  }
}
const $ = [];
function Se(t, e = M) {
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
function zt(t) {
  let e, n, l;
  return {
    c() {
      e = h("input"), c(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(e, "type", "text"), c(e, "role", "textbox"), c(e, "aria-label", t[1]);
    },
    m(r, i) {
      E(r, e, i), _e(e, t[0]), n || (l = [
        x(e, "input", t[3]),
        x(e, "focus", t[4], { once: !0 })
      ], n = !0);
    },
    p(r, [i]) {
      i & 2 && c(e, "aria-label", r[1]), i & 1 && e.value !== r[0] && _e(e, r[0]);
    },
    i: M,
    o: M,
    d(r) {
      r && T(e), n = !1, Q(l);
    }
  };
}
function Yt(t, e, n) {
  let { value: l } = e, { label: r } = e, { onFocus: i } = e;
  function s() {
    l = this.value, n(0, l);
  }
  const u = (a) => i(a.currentTarget);
  return t.$$set = (a) => {
    "value" in a && n(0, l = a.value), "label" in a && n(1, r = a.label), "onFocus" in a && n(2, i = a.onFocus);
  }, [l, r, i, s, u];
}
class Ne extends L {
  constructor(e) {
    super(), k(this, e, Yt, zt, O, { value: 0, label: 1, onFocus: 2 });
  }
}
function Rt(t) {
  let e, n, l, r, i, s, u, a, o, f, d, m, b, p, _, I;
  function P(y) {
    t[7](y);
  }
  let F = {
    label: "MergeField.find",
    onFocus: t[6]
  };
  t[1] !== void 0 && (F.value = t[1]), s = new Ne({ props: F }), ne.push(() => we(s, "value", P));
  function w(y) {
    t[9](y);
  }
  let S = {
    label: "MergeField.replace",
    onFocus: t[8]
  };
  return t[2] !== void 0 && (S.value = t[2]), o = new Ne({ props: S }), ne.push(() => we(o, "value", w)), {
    c() {
      e = h("div"), n = h("div"), l = h("h1"), l.textContent = "Add a new merge field", r = C(), i = h("div"), A(s.$$.fragment), a = C(), A(o.$$.fragment), d = C(), m = h("div"), b = h("button"), b.textContent = "Add", c(l, "class", "text-teal-400 px-1"), c(b, "aria-label", "Add field"), c(b, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), c(m, "class", "flex flex-row-reverse"), c(i, "class", "border p-4 mb-6"), c(e, "data-cy", "add-merge-field-section");
    },
    m(y, Y) {
      E(y, e, Y), g(e, n), g(n, l), g(n, r), g(n, i), j(s, i, null), g(i, a), j(o, i, null), g(i, d), g(i, m), g(m, b), p = !0, _ || (I = x(b, "click", de(t[10])), _ = !0);
    },
    p(y, [Y]) {
      const U = {};
      !u && Y & 2 && (u = !0, U.value = y[1], ve(() => u = !1)), s.$set(U);
      const H = {};
      !f && Y & 4 && (f = !0, H.value = y[2], ve(() => f = !1)), o.$set(H);
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
function Ut(t, e, n) {
  let l, r, i = Se("find");
  be(t, i, (p) => n(1, l = p));
  let s = Se("replace");
  be(t, s, (p) => n(2, r = p));
  let u = (p) => p.set(""), { addField: a } = e;
  const o = () => u(i);
  function f(p) {
    l = p, i.set(l);
  }
  const d = () => u(s);
  function m(p) {
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
    m,
    b
  ];
}
class $t extends L {
  constructor(e) {
    super(), k(this, e, Ut, Rt, O, { addField: 0 });
  }
}
function Bt(t) {
  let e, n;
  return {
    c() {
      e = te("svg"), n = te("path"), c(n, "fill", "white"), c(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      E(l, e, r), g(e, n);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && T(e);
    }
  };
}
function Qt(t) {
  return [];
}
class Jt extends L {
  constructor(e) {
    super(), k(this, e, Qt, Bt, O, {});
  }
}
function Ht(t) {
  let e, n, l, r, i;
  return n = new Jt({}), {
    c() {
      e = h("button"), A(n.$$.fragment), c(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"), c(e, "aria-label", "Remove field");
    },
    m(s, u) {
      E(s, e, u), j(n, e, null), l = !0, r || (i = x(e, "click", de(function() {
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
function Gt(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class Vt extends L {
  constructor(e) {
    super(), k(this, e, Gt, Ht, O, { onClick: 0 });
  }
}
function qt(t) {
  let e, n;
  return {
    c() {
      e = h("label"), n = J(t[0]), c(e, "for", t[0]), c(e, "class", "block mb-2 monospace");
    },
    m(l, r) {
      E(l, e, r), g(e, n);
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
function Zt(t, e, n) {
  let { find: l } = e;
  return t.$$set = (r) => {
    "find" in r && n(0, l = r.find);
  }, [l];
}
class Wt extends L {
  constructor(e) {
    super(), k(this, e, Zt, qt, O, { find: 0 });
  }
}
function Xt(t) {
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
function Kt(t, e, n) {
  let { field: l } = e, { find: r } = e, { replace: i } = e, { handleFormInput: s } = e;
  const u = (a) => s({ find: r, replace: a.currentTarget.value }, l);
  return t.$$set = (a) => {
    "field" in a && n(0, l = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, i = a.replace), "handleFormInput" in a && n(3, s = a.handleFormInput);
  }, [l, r, i, s, u];
}
class en extends L {
  constructor(e) {
    super(), k(this, e, Kt, Xt, O, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function tn(t) {
  let e, n, l, r, i;
  return n = new Wt({ props: { find: t[0].find } }), r = new en({
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
      E(s, e, u), j(n, e, null), g(e, l), j(r, e, null), i = !0;
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
function nn(t, e, n) {
  let { field: l } = e, { handleFormInput: r } = e;
  return t.$$set = (i) => {
    "field" in i && n(0, l = i.field), "handleFormInput" in i && n(1, r = i.handleFormInput);
  }, [l, r];
}
class ze extends L {
  constructor(e) {
    super(), k(this, e, nn, tn, O, { field: 0, handleFormInput: 1 });
  }
}
function Ce(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l;
}
function Te(t) {
  let e, n, l, r, i, s;
  n = new ze({
    props: {
      field: t[6],
      handleFormInput: t[2]
    }
  });
  function u() {
    return t[5](t[6]);
  }
  return r = new Vt({ props: { onClick: u } }), {
    c() {
      e = h("div"), A(n.$$.fragment), l = C(), A(r.$$.fragment), i = C(), c(e, "class", "relative");
    },
    m(a, o) {
      E(a, e, o), j(n, e, null), g(e, l), j(r, e, null), g(e, i), s = !0;
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
function rn(t) {
  let e, n, l, r, i, s, u, a, o = t[1], f = [];
  for (let m = 0; m < o.length; m += 1)
    f[m] = Te(Ce(t, o, m));
  const d = (m) => N(f[m], 1, 1, () => {
    f[m] = null;
  });
  return u = new $t({ props: { addField: t[3] } }), {
    c() {
      e = h("div"), n = h("div"), l = h("h1"), l.textContent = "Modify Merge Values", r = C(), i = h("div");
      for (let m = 0; m < f.length; m += 1)
        f[m].c();
      s = C(), A(u.$$.fragment), c(l, "class", "text-teal-400 px-1"), c(i, "class", "border p-4 mb-6"), c(n, "data-cy", "merge-fields-input-section"), B(e, "hidden", t[0]);
    },
    m(m, b) {
      E(m, e, b), g(e, n), g(n, l), g(n, r), g(n, i);
      for (let p = 0; p < f.length; p += 1)
        f[p].m(i, null);
      g(e, s), j(u, e, null), a = !0;
    },
    p(m, [b]) {
      if (b & 22) {
        o = m[1];
        let _;
        for (_ = 0; _ < o.length; _ += 1) {
          const I = Ce(m, o, _);
          f[_] ? (f[_].p(I, b), v(f[_], 1)) : (f[_] = Te(I), f[_].c(), v(f[_], 1), f[_].m(i, null));
        }
        for (ge(), _ = o.length; _ < f.length; _ += 1)
          d(_);
        he();
      }
      const p = {};
      b & 8 && (p.addField = m[3]), u.$set(p), (!a || b & 1) && B(e, "hidden", m[0]);
    },
    i(m) {
      if (!a) {
        for (let b = 0; b < o.length; b += 1)
          v(f[b]);
        v(u.$$.fragment, m), a = !0;
      }
    },
    o(m) {
      f = f.filter(Boolean);
      for (let b = 0; b < f.length; b += 1)
        N(f[b]);
      N(u.$$.fragment, m), a = !1;
    },
    d(m) {
      m && T(e), Ae(f, m), D(u);
    }
  };
}
function ln(t, e, n) {
  let { error: l } = e, { fields: r = [] } = e, { handleFormInput: i } = e, { addField: s } = e, { removeField: u } = e;
  const a = (o) => u(o);
  return t.$$set = (o) => {
    "error" in o && n(0, l = o.error), "fields" in o && n(1, r = o.fields), "handleFormInput" in o && n(2, i = o.handleFormInput), "addField" in o && n(3, s = o.addField), "removeField" in o && n(4, u = o.removeField);
  }, [l, r, i, s, u, a];
}
class sn extends L {
  constructor(e) {
    super(), k(this, e, ln, rn, O, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function on(t) {
  let e, n, l;
  return {
    c() {
      e = h("button"), e.textContent = "Reset", c(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(r, i) {
      E(r, e, i), n || (l = x(e, "click", de(function() {
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
function un(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class an extends L {
  constructor(e) {
    super(), k(this, e, un, on, O, { onClick: 0 });
  }
}
function cn(t) {
  let e, n, l, r, i, s, u, a;
  return u = new an({ props: { onClick: t[0] } }), {
    c() {
      e = h("div"), n = h("p"), l = h("span"), r = J(t[2]), i = C(), s = h("div"), A(u.$$.fragment), c(l, "class", "monospace text-orange-900"), c(n, "data-cy", "template-input-error"), c(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), c(s, "class", "flex flex-row-reverse "), B(e, "hidden", !t[1]);
    },
    m(o, f) {
      E(o, e, f), g(e, n), g(n, l), g(l, r), g(e, i), g(e, s), j(u, s, null), a = !0;
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
function fn(t, e, n) {
  let l, { onClick: r } = e, { error: i } = e;
  return t.$$set = (s) => {
    "onClick" in s && n(0, r = s.onClick), "error" in s && n(1, i = s.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, l = i && i.message || "");
  }, [r, i, l];
}
class dn extends L {
  constructor(e) {
    super(), k(this, e, fn, cn, O, { onClick: 0, error: 1 });
  }
}
function mn(t) {
  let e, n, l = t[1].slice(2, -2).trim() + "", r, i, s, u, a, o, f;
  return {
    c() {
      e = h("div"), n = h("label"), r = J(l), i = C(), s = h("input"), u = C(), a = h("input"), c(n, "class", "block mb-2 monospace"), c(n, "for", "input"), c(s, "aria-label", "Current source value"), c(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(s, "type", "text"), s.value = t[0], s.disabled = !0, a.disabled = t[2], c(a, "role", "button"), c(a, "aria-label", "File upload"), c(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), c(a, "type", "file"), c(e, "data-cy", "source-input");
    },
    m(d, m) {
      E(d, e, m), g(e, n), g(n, r), g(e, i), g(e, s), g(e, u), g(e, a), o || (f = x(a, "change", t[7]), o = !0);
    },
    p(d, [m]) {
      m & 2 && l !== (l = d[1].slice(2, -2).trim() + "") && ie(r, l), m & 1 && s.value !== d[0] && (s.value = d[0]), m & 4 && (a.disabled = d[2]);
    },
    i: M,
    o: M,
    d(d) {
      d && T(e), o = !1, f();
    }
  };
}
function gn(t, e, n) {
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
class Ye extends L {
  constructor(e) {
    super(), k(this, e, gn, mn, O, {
      asset: 4,
      value: 0,
      label: 1,
      handleChange: 5
    });
  }
}
function Ee(t, e, n) {
  const l = t.slice();
  return l[3] = e[n], l;
}
function je(t) {
  let e, n;
  return e = new Ye({
    props: {
      label: t[3].placeholder,
      handleChange: t[1](t[3].asset),
      value: t[3].asset.src,
      asset: t[3].asset
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
      r & 1 && (i.label = l[3].placeholder), r & 1 && (i.handleChange = l[1](l[3].asset)), r & 1 && (i.value = l[3].asset.src), r & 1 && (i.asset = l[3].asset), e.$set(i);
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
function hn(t) {
  let e, n, l, r, i, s = t[0], u = [];
  for (let o = 0; o < s.length; o += 1)
    u[o] = je(Ee(t, s, o));
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
      E(o, e, f), g(e, n), g(e, l), g(e, r);
      for (let d = 0; d < u.length; d += 1)
        u[d].m(r, null);
      i = !0;
    },
    p(o, [f]) {
      if (f & 3) {
        s = o[0];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const m = Ee(o, s, d);
          u[d] ? (u[d].p(m, f), v(u[d], 1)) : (u[d] = je(m), u[d].c(), v(u[d], 1), u[d].m(r, null));
        }
        for (ge(), d = s.length; d < u.length; d += 1)
          a(d);
        he();
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
      o && T(e), Ae(u, o);
    }
  };
}
function pn(t, e, n) {
  let { sources: l } = e, { handleSourceFieldUpdate: r } = e;
  const i = (s) => async (u) => await r(u, s);
  return t.$$set = (s) => {
    "sources" in s && n(0, l = s.sources), "handleSourceFieldUpdate" in s && n(2, r = s.handleSourceFieldUpdate);
  }, [l, i, r];
}
class bn extends L {
  constructor(e) {
    super(), k(this, e, pn, hn, O, { sources: 0, handleSourceFieldUpdate: 2 });
  }
}
function De(t) {
  let e, n, l, r, i, s, u, a, o = re(t[0]) + "", f, d, m, b, p, _;
  return m = new xt({
    props: {
      submit: t[8],
      download: t[4]
    }
  }), {
    c() {
      e = h("div"), n = h("h1"), n.textContent = "Result", l = C(), r = h("abbr"), i = h("img"), u = C(), a = h("p"), f = J(o), d = C(), A(m.$$.fragment), c(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Re(i.src, s = Ve) || c(i, "src", s), c(i, "alt", "copy-button"), c(i, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), c(r, "title", "Copy to clipboard"), c(r, "class", "svelte-r93edu"), c(a, "data-cy", "result"), c(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), c(e, "data-cy", "result-section"), c(e, "class", "svelte-r93edu");
    },
    m(I, P) {
      E(I, e, P), g(e, n), g(e, l), g(e, r), g(r, i), g(e, u), g(e, a), g(a, f), g(e, d), j(m, e, null), b = !0, p || (_ = x(i, "click", t[7]), p = !0);
    },
    p(I, P) {
      (!b || P & 1) && o !== (o = re(I[0]) + "") && ie(f, o);
      const F = {};
      P & 16 && (F.download = I[4]), m.$set(F);
    },
    i(I) {
      b || (v(m.$$.fragment, I), b = !0);
    },
    o(I) {
      N(m.$$.fragment, I), b = !1;
    },
    d(I) {
      I && T(e), D(m), p = !1, _();
    }
  };
}
function _n(t) {
  let e, n, l, r, i, s, u, a, o, f, d, m, b, p, _, I, P, F;
  f = new dn({
    props: {
      error: t[2],
      onClick: t[11]
    }
  }), m = new sn({
    props: {
      fields: t[0].merge,
      handleFormInput: t[6],
      addField: t[9],
      removeField: t[10],
      error: t[2]
    }
  }), p = new bn({
    props: {
      sources: t[3],
      handleSourceFieldUpdate: t[12]
    }
  });
  let w = !t[2] && De(t);
  return {
    c() {
      e = h("div"), n = h("section"), l = h("form"), r = h("div"), i = h("label"), i.textContent = "Paste template", s = C(), u = h("textarea"), o = C(), A(f.$$.fragment), d = C(), A(m.$$.fragment), b = C(), A(p.$$.fragment), _ = C(), w && w.c(), c(i, "for", "json-input"), c(i, "class", "text-teal-400 px-1 svelte-r93edu"), c(u, "data-cy", "template-input"), c(u, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), c(u, "id", "json-input"), u.value = a = re(t[1]), c(r, "data-cy", "template-input-section"), c(r, "class", "mb-6 svelte-r93edu"), c(l, "class", "svelte-r93edu"), c(n, "data-cy", "form-container"), c(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), c(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(S, y) {
      E(S, e, y), g(e, n), g(n, l), g(l, r), g(r, i), g(r, s), g(r, u), g(l, o), j(f, l, null), g(l, d), j(m, l, null), g(l, b), j(p, l, null), g(n, _), w && w.m(n, null), I = !0, P || (F = x(u, "input", t[14]), P = !0);
    },
    p(S, [y]) {
      (!I || y & 2 && a !== (a = re(S[1]))) && (u.value = a);
      const Y = {};
      y & 4 && (Y.error = S[2]), f.$set(Y);
      const U = {};
      y & 1 && (U.fields = S[0].merge), y & 4 && (U.error = S[2]), m.$set(U);
      const H = {};
      y & 8 && (H.sources = S[3]), p.$set(H), S[2] ? w && (ge(), N(w, 1, 1, () => {
        w = null;
      }), he()) : w ? (w.p(S, y), y & 4 && v(w, 1)) : (w = De(S), w.c(), v(w, 1), w.m(n, null));
    },
    i(S) {
      I || (v(f.$$.fragment, S), v(m.$$.fragment, S), v(p.$$.fragment, S), v(w), I = !0);
    },
    o(S) {
      N(f.$$.fragment, S), N(m.$$.fragment, S), N(p.$$.fragment, S), N(w), I = !1;
    },
    d(S) {
      S && T(e), D(f), D(m), D(p), w && w.d(), P = !1, F();
    }
  };
}
function re(t) {
  return JSON.stringify(t, null, 2);
}
function vn(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function wn(t, e, n) {
  let l, { editTemplateService: r = new xe(St) } = e, i = r.template, s = r.result, u = null, a = r.getSrcPlaceholders();
  function o(F) {
    r.setTemplateSource(F), n(1, i = r.template), n(0, s = r.result), n(2, u = r.error), n(3, a = r.getSrcPlaceholders());
  }
  function f(F, w) {
    r.updateResultMergeFields(F, w), n(0, s = r.result);
  }
  function d() {
    navigator.clipboard.writeText(JSON.stringify(s)), alert("JSON copied to clipboard!");
  }
  function m() {
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
    t.$$.dirty & 1 && n(4, l = vn(s) || "");
  }, [
    s,
    i,
    u,
    a,
    l,
    o,
    f,
    d,
    m,
    b,
    p,
    _,
    I,
    r,
    P
  ];
}
class yn extends L {
  constructor(e) {
    super(), k(this, e, wn, _n, O, { editTemplateService: 13 });
  }
}
class In {
  constructor(e) {
    this.templateService = new xe(e), this.container = void 0;
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
    this.container = e, new yn({
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
      (n) => new ze({
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
      (n) => new Ye({
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
  In as default
};
