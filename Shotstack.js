var xe = Object.defineProperty;
var $e = (t, e, n) => e in t ? xe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var R = (t, e, n) => ($e(t, typeof e != "symbol" ? e + "" : e, n), n);
function z() {
}
function Me(t) {
  return t();
}
function me() {
  return /* @__PURE__ */ Object.create(null);
}
function Q(t) {
  t.forEach(Me);
}
function Ne(t) {
  return typeof t == "function";
}
function F(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let W;
function Le(t, e) {
  return W || (W = document.createElement("a")), W.href = e, t === W.href;
}
function Ce(t) {
  return Object.keys(t).length === 0;
}
let le = !1;
function Oe() {
  le = !0;
}
function ke() {
  le = !1;
}
function ze(t, e, n, r) {
  for (; t < e; ) {
    const l = t + (e - t >> 1);
    n(l) <= r ? t = l + 1 : e = l;
  }
  return t;
}
function Ye(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const o = [];
    for (let u = 0; u < e.length; u++) {
      const f = e[u];
      f.claim_order !== void 0 && o.push(f);
    }
    e = o;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let l = 0;
  for (let o = 0; o < e.length; o++) {
    const u = e[o].claim_order, f = (l > 0 && e[n[l]].claim_order <= u ? l + 1 : ze(1, l, (M) => e[n[M]].claim_order, u)) - 1;
    r[o] = n[f] + 1;
    const m = f + 1;
    n[m] = o, l = Math.max(m, l);
  }
  const s = [], i = [];
  let a = e.length - 1;
  for (let o = n[l] + 1; o != 0; o = r[o - 1]) {
    for (s.push(e[o - 1]); a >= o; a--)
      i.push(e[a]);
    a--;
  }
  for (; a >= 0; a--)
    i.push(e[a]);
  s.reverse(), i.sort((o, u) => o.claim_order - u.claim_order);
  for (let o = 0, u = 0; o < i.length; o++) {
    for (; u < s.length && i[o].claim_order >= s[u].claim_order; )
      u++;
    const f = u < s.length ? s[u] : null;
    t.insertBefore(i[o], f);
  }
}
function d(t, e) {
  if (le) {
    for (Ye(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function $(t, e, n) {
  le && !n ? d(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function p(t) {
  t.parentNode.removeChild(t);
}
function Re(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function oe(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function S(t) {
  return document.createTextNode(t);
}
function D() {
  return S(" ");
}
function ie(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function y(t) {
  return Array.from(t.childNodes);
}
function Pe(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Ie(t, e, n, r, l = !1) {
  Pe(t);
  const s = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const a = t[i];
      if (e(a)) {
        const o = n(a);
        return o === void 0 ? t.splice(i, 1) : t[i] = o, l || (t.claim_info.last_index = i), a;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const a = t[i];
      if (e(a)) {
        const o = n(a);
        return o === void 0 ? t.splice(i, 1) : t[i] = o, l ? o === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, a;
      }
    }
    return r();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Te(t, e, n, r) {
  return Ie(t, (l) => l.nodeName === e, (l) => {
    const s = [];
    for (let i = 0; i < l.attributes.length; i++) {
      const a = l.attributes[i];
      n[a.name] || s.push(a.name);
    }
    s.forEach((i) => l.removeAttribute(i));
  }, () => r(e));
}
function E(t, e, n) {
  return Te(t, e, n, v);
}
function _e(t, e, n) {
  return Te(t, e, n, oe);
}
function x(t, e) {
  return Ie(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const r = "" + e;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length)
          return n.splitText(r.length);
      } else
        n.data = r;
    },
    () => S(e),
    !0
  );
}
function A(t) {
  return x(t, " ");
}
function fe(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let de;
function B(t) {
  de = t;
}
const U = [], pe = [], K = [], ge = [], Ue = Promise.resolve();
let ae = !1;
function Be() {
  ae || (ae = !0, Ue.then(De));
}
function ue(t) {
  K.push(t);
}
const se = /* @__PURE__ */ new Set();
let X = 0;
function De() {
  const t = de;
  do {
    for (; X < U.length; ) {
      const e = U[X];
      X++, B(e), Ve(e.$$);
    }
    for (B(null), U.length = 0, X = 0; pe.length; )
      pe.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const n = K[e];
      se.has(n) || (se.add(n), n());
    }
    K.length = 0;
  } while (U.length);
  for (; ge.length; )
    ge.pop()();
  ae = !1, se.clear(), B(t);
}
function Ve(t) {
  if (t.fragment !== null) {
    t.update(), Q(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ue);
  }
}
const ee = /* @__PURE__ */ new Set();
let k;
function He() {
  k = {
    r: 0,
    c: [],
    p: k
  };
}
function Qe() {
  k.r || Q(k.c), k = k.p;
}
function C(t, e) {
  t && t.i && (ee.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (ee.has(t))
      return;
    ee.add(t), k.c.push(() => {
      ee.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function te(t) {
  t && t.c();
}
function ne(t, e) {
  t && t.l(e);
}
function V(t, e, n, r) {
  const { fragment: l, on_mount: s, on_destroy: i, after_update: a } = t.$$;
  l && l.m(e, n), r || ue(() => {
    const o = s.map(Me).filter(Ne);
    i ? i.push(...o) : Q(o), t.$$.on_mount = [];
  }), a.forEach(ue);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null && (Q(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Fe(t, e) {
  t.$$.dirty[0] === -1 && (U.push(t), Be(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function J(t, e, n, r, l, s, i, a = [-1]) {
  const o = de;
  B(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: z,
    not_equal: l,
    bound: me(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: me(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  i && i(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (m, M, ...N) => {
    const _ = N.length ? N[0] : M;
    return u.ctx && l(u.ctx[m], u.ctx[m] = _) && (!u.skip_bound && u.bound[m] && u.bound[m](_), f && Fe(t, m)), M;
  }) : [], u.update(), f = !0, Q(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      Oe();
      const m = y(e.target);
      u.fragment && u.fragment.l(m), m.forEach(p);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(t.$$.fragment), V(t, e.target, e.anchor, e.customElement), ke(), De();
  }
  B(o);
}
class G {
  $destroy() {
    H(this, 1), this.$destroy = z;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const l = r.indexOf(n);
      l !== -1 && r.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !Ce(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Je = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", Ge = "A 'merge' property is required", qe = "Property 'merge' must be an array", Ze = "Property 'merge' must contain at least one element", We = "A 'find' property is required on every element inside 'merge'", Xe = "Every 'find' property inside 'merge' must be of type string", Ke = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", et = "A 'replace' property is required on every element inside 'merge'", tt = "Unexpected error while parsing template JSON", nt = "Every element inside the 'merge' should be an object";
class j extends Error {
  constructor(e) {
    super(e);
  }
}
function rt(t) {
  return typeof t == "object";
}
function q(t, e) {
  return t in e;
}
function ce(t, e) {
  return !q(t, e);
}
function lt(t, e) {
  return q(t, e) && !(e[t] instanceof Array);
}
function it(t, e) {
  return q(t, e) && typeof e[t] != "string";
}
function st(t, e) {
  const n = q(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function ot(t, e) {
  const n = q(t, e) && e[t];
  return !(n instanceof Array && n.length > 0);
}
function at(t) {
  try {
    const e = JSON.parse(t);
    if (ce("merge", e))
      throw new j(Ge);
    if (lt("merge", e))
      throw new j(qe);
    if (ot("merge", e))
      throw new j(Ze);
    const { merge: n } = e, r = ut(n);
    return { ...e, merge: r };
  } catch (e) {
    throw Ae(e);
  }
}
function ut(t) {
  return t.map((n) => {
    if (!rt(n))
      throw new j(nt);
    if (ce("find", n))
      throw new j(We);
    if (ce("replace", n))
      throw new j(et);
    if (it("find", n))
      throw new j(Xe);
    if (st("find", n))
      throw new j(Ke);
    return n;
  }).map(({ find: n, replace: r }) => ({
    find: n,
    replace: je(r)
  }));
}
function ct(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Ae(t) {
  return t instanceof Error ? t : ct(t) ? new j(t.message) : new j(tt);
}
function je(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Se {
  constructor(e) {
    R(this, "template");
    R(this, "_result");
    R(this, "_error");
    R(this, "handlers");
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = { change: [], submit: [], error: [this.logger] }, this.setTemplateSource(e);
  }
  set error(e) {
    const n = this._error && { ...this._error } || null;
    this._error = e, e !== null && this.handlers.error.forEach((r) => r(e, n));
  }
  get error() {
    return this._error;
  }
  set result(e) {
    const n = { ...this._result };
    this._result = e, this.handlers.change.forEach((r) => r(e, n));
  }
  get result() {
    return this._result;
  }
  on(e, n) {
    this.handlers[e].push(n);
  }
  off(e, n) {
    this.handlers = {
      ...this.handlers,
      [e]: this.handlers[e].filter((r) => r !== n)
    };
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const n = at(je(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const r = Ae(n);
      this.error = r;
    }
  }
  updateResultMergeFields(e) {
    const { find: n, replace: r } = e, l = { find: n, replace: r }, s = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? l : i
    );
    return this.result = { ...this.result, merge: s }, s;
  }
  logger(e) {
    console.error(e);
  }
}
const ft = [
  {
    find: "NAME",
    replace: "world"
  }
], dt = {
  tracks: [
    {
      clips: [
        {
          asset: {
            type: "title",
            text: "Hello {{ NAME }}",
            style: "future"
          },
          start: 0,
          length: 5
        }
      ]
    }
  ]
}, ht = {
  format: "mp4",
  resolution: "hd"
}, mt = {
  merge: ft,
  timeline: dt,
  output: ht
};
function _t(t) {
  let e, n;
  return {
    c() {
      e = oe("svg"), n = oe("path"), this.h();
    },
    l(r) {
      e = _e(r, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var l = y(e);
      n = _e(l, "path", { d: !0 }), y(n).forEach(p), l.forEach(p), this.h();
    },
    h() {
      c(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), c(e, "class", "fill-current w-4 h-4 mr-2"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "viewBox", "0 0 20 20");
    },
    m(r, l) {
      $(r, e, l), d(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && p(e);
    }
  };
}
function pt(t) {
  return [];
}
class gt extends G {
  constructor(e) {
    super(), J(this, e, pt, _t, F, {});
  }
}
function vt(t) {
  let e, n, r, l;
  return n = new gt({}), {
    c() {
      e = v("a"), te(n.$$.fragment), r = S(`
	Download`), this.h();
    },
    l(s) {
      e = E(s, "A", { href: !0, download: !0, class: !0 });
      var i = y(e);
      ne(n.$$.fragment, i), r = x(i, `
	Download`), i.forEach(p), this.h();
    },
    h() {
      c(e, "href", t[0]), c(e, "download", "result.json"), c(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, i) {
      $(s, e, i), V(n, e, null), d(e, r), l = !0;
    },
    p(s, [i]) {
      (!l || i & 1) && c(e, "href", s[0]);
    },
    i(s) {
      l || (C(n.$$.fragment, s), l = !0);
    },
    o(s) {
      P(n.$$.fragment, s), l = !1;
    },
    d(s) {
      s && p(e), H(n);
    }
  };
}
function yt(t, e, n) {
  let { download: r = "" } = e;
  return t.$$set = (l) => {
    "download" in l && n(0, r = l.download);
  }, [r];
}
class bt extends G {
  constructor(e) {
    super(), J(this, e, yt, vt, F, { download: 0 });
  }
}
function wt(t) {
  let e, n, r, l;
  return {
    c() {
      e = v("button"), n = S("Submit"), this.h();
    },
    l(s) {
      e = E(s, "BUTTON", { class: !0 });
      var i = y(e);
      n = x(i, "Submit"), i.forEach(p), this.h();
    },
    h() {
      c(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, i) {
      $(s, e, i), d(e, n), r || (l = ie(e, "click", function() {
        Ne(t[0]) && t[0].apply(this, arguments);
      }), r = !0);
    },
    p(s, [i]) {
      t = s;
    },
    i: z,
    o: z,
    d(s) {
      s && p(e), r = !1, l();
    }
  };
}
function Et(t, e, n) {
  let { submit: r } = e;
  return t.$$set = (l) => {
    "submit" in l && n(0, r = l.submit);
  }, [r];
}
class Mt extends G {
  constructor(e) {
    super(), J(this, e, Et, wt, F, { submit: 0 });
  }
}
function Nt(t) {
  let e, n, r, l, s;
  return n = new bt({ props: { download: t[0] } }), l = new Mt({ props: { submit: t[1] } }), {
    c() {
      e = v("div"), te(n.$$.fragment), r = D(), te(l.$$.fragment), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var a = y(e);
      ne(n.$$.fragment, a), r = A(a), ne(l.$$.fragment, a), a.forEach(p), this.h();
    },
    h() {
      c(e, "class", "flex justify-between pt-4");
    },
    m(i, a) {
      $(i, e, a), V(n, e, null), d(e, r), V(l, e, null), s = !0;
    },
    p(i, [a]) {
      const o = {};
      a & 1 && (o.download = i[0]), n.$set(o);
      const u = {};
      a & 2 && (u.submit = i[1]), l.$set(u);
    },
    i(i) {
      s || (C(n.$$.fragment, i), C(l.$$.fragment, i), s = !0);
    },
    o(i) {
      P(n.$$.fragment, i), P(l.$$.fragment, i), s = !1;
    },
    d(i) {
      i && p(e), H(n), H(l);
    }
  };
}
function It(t, e, n) {
  let { download: r = "" } = e, { submit: l } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, r = s.download), "submit" in s && n(1, l = s.submit);
  }, [r, l];
}
class Tt extends G {
  constructor(e) {
    super(), J(this, e, It, Nt, F, { download: 0, submit: 1 });
  }
}
function ve(t, e, n) {
  const r = t.slice();
  return r[11] = e[n].find, r[12] = e[n].replace, r;
}
function ye(t) {
  let e, n, r = t[2].message + "", l;
  return {
    c() {
      e = v("p"), n = v("span"), l = S(r), this.h();
    },
    l(s) {
      e = E(s, "P", { "data-cy": !0, class: !0 });
      var i = y(e);
      n = E(i, "SPAN", { class: !0 });
      var a = y(n);
      l = x(a, r), a.forEach(p), i.forEach(p), this.h();
    },
    h() {
      c(n, "class", "monospace text-orange-900 svelte-r93edu"), c(e, "data-cy", "template-input-error"), c(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-r93edu");
    },
    m(s, i) {
      $(s, e, i), d(e, n), d(n, l);
    },
    p(s, i) {
      i & 4 && r !== (r = s[2].message + "") && fe(l, r);
    },
    d(s) {
      s && p(e);
    }
  };
}
function be(t) {
  let e, n, r, l, s, i = t[1].merge, a = [];
  for (let o = 0; o < i.length; o += 1)
    a[o] = we(ve(t, i, o));
  return {
    c() {
      e = v("div"), n = v("h1"), r = S("Modify Merge Values"), l = D(), s = v("div");
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      this.h();
    },
    l(o) {
      e = E(o, "DIV", { "data-cy": !0, class: !0 });
      var u = y(e);
      n = E(u, "H1", { class: !0 });
      var f = y(n);
      r = x(f, "Modify Merge Values"), f.forEach(p), l = A(u), s = E(u, "DIV", { class: !0 });
      var m = y(s);
      for (let M = 0; M < a.length; M += 1)
        a[M].l(m);
      m.forEach(p), u.forEach(p), this.h();
    },
    h() {
      c(n, "class", "text-teal-400 px-1 svelte-r93edu"), c(s, "class", "border p-4 mb-6 svelte-r93edu"), c(e, "data-cy", "merge-fields-input-section"), c(e, "class", "svelte-r93edu");
    },
    m(o, u) {
      $(o, e, u), d(e, n), d(n, r), d(e, l), d(e, s);
      for (let f = 0; f < a.length; f += 1)
        a[f].m(s, null);
    },
    p(o, u) {
      if (u & 34) {
        i = o[1].merge;
        let f;
        for (f = 0; f < i.length; f += 1) {
          const m = ve(o, i, f);
          a[f] ? a[f].p(m, u) : (a[f] = we(m), a[f].c(), a[f].m(s, null));
        }
        for (; f < a.length; f += 1)
          a[f].d(1);
        a.length = i.length;
      }
    },
    d(o) {
      o && p(e), Re(a, o);
    }
  };
}
function we(t) {
  let e, n, r = "{{ " + t[11] + " }} ", l, s, i, a, o, u, f, m, M;
  function N(..._) {
    return t[10](t[11], ..._);
  }
  return {
    c() {
      e = v("div"), n = v("label"), l = S(r), i = D(), a = v("input"), f = D(), this.h();
    },
    l(_) {
      e = E(_, "DIV", { "data-cy": !0, class: !0 });
      var I = y(e);
      n = E(I, "LABEL", { for: !0, class: !0 });
      var b = y(n);
      l = x(b, r), b.forEach(p), i = A(I), a = E(I, "INPUT", { class: !0, id: !0, type: !0 }), f = A(I), I.forEach(p), this.h();
    },
    h() {
      c(n, "for", s = t[11]), c(n, "class", "block mb-2 monospace svelte-r93edu"), c(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-r93edu"), c(a, "id", o = t[11]), c(a, "type", "text"), a.value = u = t[12], c(e, "data-cy", "label-input"), c(e, "class", "svelte-r93edu");
    },
    m(_, I) {
      $(_, e, I), d(e, n), d(n, l), d(e, i), d(e, a), d(e, f), m || (M = ie(a, "input", N), m = !0);
    },
    p(_, I) {
      t = _, I & 2 && r !== (r = "{{ " + t[11] + " }} ") && fe(l, r), I & 2 && s !== (s = t[11]) && c(n, "for", s), I & 2 && o !== (o = t[11]) && c(a, "id", o), I & 2 && u !== (u = t[12]) && a.value !== u && (a.value = u);
    },
    d(_) {
      _ && p(e), m = !1, M();
    }
  };
}
function Ee(t) {
  let e, n, r, l, s, i, a, o, u, f = re(t[0]) + "", m, M, N, _, I, b;
  return N = new Tt({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = v("div"), n = v("h1"), r = S("Result"), l = D(), s = v("abbr"), i = v("img"), o = D(), u = v("p"), m = S(f), M = D(), te(N.$$.fragment), this.h();
    },
    l(g) {
      e = E(g, "DIV", { "data-cy": !0, class: !0 });
      var h = y(e);
      n = E(h, "H1", { class: !0 });
      var L = y(n);
      r = x(L, "Result"), L.forEach(p), l = A(h), s = E(h, "ABBR", { title: !0, class: !0 });
      var w = y(s);
      i = E(w, "IMG", { src: !0, alt: !0, class: !0 }), w.forEach(p), o = A(h), u = E(h, "P", { "data-cy": !0, class: !0 });
      var T = y(u);
      m = x(T, f), T.forEach(p), M = A(h), ne(N.$$.fragment, h), h.forEach(p), this.h();
    },
    h() {
      c(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Le(i.src, a = Je) || c(i, "src", a), c(i, "alt", "copy-button"), c(i, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), c(s, "title", "Copy to clipboard"), c(s, "class", "svelte-r93edu"), c(u, "data-cy", "result"), c(u, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), c(e, "data-cy", "result-section"), c(e, "class", "svelte-r93edu");
    },
    m(g, h) {
      $(g, e, h), d(e, n), d(n, r), d(e, l), d(e, s), d(s, i), d(e, o), d(e, u), d(u, m), d(e, M), V(N, e, null), _ = !0, I || (b = ie(i, "click", t[6]), I = !0);
    },
    p(g, h) {
      (!_ || h & 1) && f !== (f = re(g[0]) + "") && fe(m, f);
      const L = {};
      h & 8 && (L.download = g[3]), N.$set(L);
    },
    i(g) {
      _ || (C(N.$$.fragment, g), _ = !0);
    },
    o(g) {
      P(N.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && p(e), H(N), I = !1, b();
    }
  };
}
function Dt(t) {
  var L;
  let e, n, r, l, s, i, a, o, u, f, m, M, N, _, I, b = t[2] && ye(t), g = ((L = t[1].merge) == null ? void 0 : L.length) && !t[2] && be(t), h = !t[2] && Ee(t);
  return {
    c() {
      e = v("div"), n = v("section"), r = v("form"), l = v("div"), s = v("label"), i = S("Paste template"), a = D(), o = v("textarea"), f = D(), b && b.c(), m = D(), g && g.c(), M = D(), h && h.c(), this.h();
    },
    l(w) {
      e = E(w, "DIV", { class: !0 });
      var T = y(e);
      n = E(T, "SECTION", { "data-cy": !0, class: !0 });
      var O = y(n);
      r = E(O, "FORM", { class: !0 });
      var Y = y(r);
      l = E(Y, "DIV", { "data-cy": !0, class: !0 });
      var Z = y(l);
      s = E(Z, "LABEL", { for: !0, class: !0 });
      var he = y(s);
      i = x(he, "Paste template"), he.forEach(p), a = A(Z), o = E(Z, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), y(o).forEach(p), Z.forEach(p), f = A(Y), b && b.l(Y), m = A(Y), g && g.l(Y), Y.forEach(p), M = A(O), h && h.l(O), O.forEach(p), T.forEach(p), this.h();
    },
    h() {
      c(s, "for", "json-input"), c(s, "class", "text-teal-400 px-1 svelte-r93edu"), c(o, "data-cy", "template-input"), c(o, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), c(o, "id", "json-input"), o.value = u = re(t[1]), c(l, "data-cy", "template-input-section"), c(l, "class", "mb-6 svelte-r93edu"), c(r, "class", "svelte-r93edu"), c(n, "data-cy", "form-container"), c(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), c(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(w, T) {
      $(w, e, T), d(e, n), d(n, r), d(r, l), d(l, s), d(s, i), d(l, a), d(l, o), d(r, f), b && b.m(r, null), d(r, m), g && g.m(r, null), d(n, M), h && h.m(n, null), N = !0, _ || (I = ie(o, "input", t[9]), _ = !0);
    },
    p(w, [T]) {
      var O;
      (!N || T & 2 && u !== (u = re(w[1]))) && (o.value = u), w[2] ? b ? b.p(w, T) : (b = ye(w), b.c(), b.m(r, m)) : b && (b.d(1), b = null), ((O = w[1].merge) == null ? void 0 : O.length) && !w[2] ? g ? g.p(w, T) : (g = be(w), g.c(), g.m(r, null)) : g && (g.d(1), g = null), w[2] ? h && (He(), P(h, 1, 1, () => {
        h = null;
      }), Qe()) : h ? (h.p(w, T), T & 4 && C(h, 1)) : (h = Ee(w), h.c(), C(h, 1), h.m(n, null));
    },
    i(w) {
      N || (C(h), N = !0);
    },
    o(w) {
      P(h), N = !1;
    },
    d(w) {
      w && p(e), b && b.d(), g && g.d(), h && h.d(), _ = !1, I();
    }
  };
}
function re(t) {
  return JSON.stringify(t, null, 2);
}
function At(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function jt(t, e, n) {
  let r, { editTemplateService: l = new Se(mt) } = e, s = l.template, i = l.result, a = null;
  function o(_) {
    l.setTemplateSource(_), n(1, s = l.template), n(0, i = l.result), n(2, a = l.error);
  }
  function u(_) {
    l.updateResultMergeFields(_), n(0, i = l.result);
  }
  function f() {
    navigator.clipboard.writeText(JSON.stringify(i)), alert("JSON copied to clipboard!");
  }
  function m() {
    l.submit(), window.alert("Form successfully submitted!");
  }
  const M = (_) => o(_.currentTarget.value), N = (_, I) => u({ find: _, replace: I.currentTarget.value });
  return t.$$set = (_) => {
    "editTemplateService" in _ && n(8, l = _.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, r = At(i) || "");
  }, [
    i,
    s,
    a,
    r,
    o,
    u,
    f,
    m,
    l,
    M,
    N
  ];
}
class St extends G {
  constructor(e) {
    super(), J(this, e, jt, Dt, F, { editTemplateService: 8 });
  }
}
class $t {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    R(this, "templateService");
    this.containerElement = n, this.templateService = new Se(e), this.initialize();
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
  initialize() {
    !this.containerElement || this.containerElement && this.render(this.containerElement);
  }
  render(e) {
    new St({
      target: e,
      props: {
        editTemplateService: this.templateService
      }
    });
  }
  display() {
    !this.containerElement || (this.containerElement.style.display = "block");
  }
  hide() {
    !this.containerElement || (this.containerElement.style.display = "none");
  }
  attach(e) {
    this.remove(), this.containerElement = e, this.render(this.containerElement);
  }
  remove() {
    !this.containerElement || this.containerElement.replaceChildren();
  }
  get container() {
    if (!!this.containerElement)
      return this.containerElement;
  }
  merge() {
    return this.templateService.result;
  }
  load(e) {
    this.templateService.setTemplateSource(e);
  }
}
export {
  $t as default
};
