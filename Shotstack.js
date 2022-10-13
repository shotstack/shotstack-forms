var xe = Object.defineProperty;
var $e = (t, e, n) => e in t ? xe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var R = (t, e, n) => ($e(t, typeof e != "symbol" ? e + "" : e, n), n);
function z() {
}
function Ee(t) {
  return t();
}
function me() {
  return /* @__PURE__ */ Object.create(null);
}
function H(t) {
  t.forEach(Ee);
}
function Ie(t) {
  return typeof t == "function";
}
function Q(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let W;
function Ce(t, e) {
  return W || (W = document.createElement("a")), W.href = e, t === W.href;
}
function Le(t) {
  return Object.keys(t).length === 0;
}
let ie = !1;
function Oe() {
  ie = !0;
}
function ke() {
  ie = !1;
}
function ze(t, e, n, r) {
  for (; t < e; ) {
    const i = t + (e - t >> 1);
    n(i) <= r ? t = i + 1 : e = i;
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
  let i = 0;
  for (let o = 0; o < e.length; o++) {
    const u = e[o].claim_order, f = (i > 0 && e[n[i]].claim_order <= u ? i + 1 : ze(1, i, (E) => e[n[E]].claim_order, u)) - 1;
    r[o] = n[f] + 1;
    const m = f + 1;
    n[m] = o, i = Math.max(m, i);
  }
  const s = [], l = [];
  let a = e.length - 1;
  for (let o = n[i] + 1; o != 0; o = r[o - 1]) {
    for (s.push(e[o - 1]); a >= o; a--)
      l.push(e[a]);
    a--;
  }
  for (; a >= 0; a--)
    l.push(e[a]);
  s.reverse(), l.sort((o, u) => o.claim_order - u.claim_order);
  for (let o = 0, u = 0; o < l.length; o++) {
    for (; u < s.length && l[o].claim_order >= s[u].claim_order; )
      u++;
    const f = u < s.length ? s[u] : null;
    t.insertBefore(l[o], f);
  }
}
function d(t, e) {
  if (ie) {
    for (Ye(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function $(t, e, n) {
  ie && !n ? d(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function _(t) {
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
function j(t) {
  return document.createTextNode(t);
}
function D() {
  return j(" ");
}
function le(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function y(t) {
  return Array.from(t.childNodes);
}
function Fe(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Ne(t, e, n, r, i = !1) {
  Fe(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const a = t[l];
      if (e(a)) {
        const o = n(a);
        return o === void 0 ? t.splice(l, 1) : t[l] = o, i || (t.claim_info.last_index = l), a;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const a = t[l];
      if (e(a)) {
        const o = n(a);
        return o === void 0 ? t.splice(l, 1) : t[l] = o, i ? o === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, a;
      }
    }
    return r();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Te(t, e, n, r) {
  return Ne(t, (i) => i.nodeName === e, (i) => {
    const s = [];
    for (let l = 0; l < i.attributes.length; l++) {
      const a = i.attributes[l];
      n[a.name] || s.push(a.name);
    }
    s.forEach((l) => i.removeAttribute(l));
  }, () => r(e));
}
function w(t, e, n) {
  return Te(t, e, n, v);
}
function pe(t, e, n) {
  return Te(t, e, n, oe);
}
function x(t, e) {
  return Ne(
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
    () => j(e),
    !0
  );
}
function S(t) {
  return x(t, " ");
}
function fe(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let de;
function U(t) {
  de = t;
}
const P = [], _e = [], K = [], ge = [], Pe = Promise.resolve();
let ae = !1;
function Ue() {
  ae || (ae = !0, Pe.then(De));
}
function ue(t) {
  K.push(t);
}
const se = /* @__PURE__ */ new Set();
let X = 0;
function De() {
  const t = de;
  do {
    for (; X < P.length; ) {
      const e = P[X];
      X++, U(e), Be(e.$$);
    }
    for (U(null), P.length = 0, X = 0; _e.length; )
      _e.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const n = K[e];
      se.has(n) || (se.add(n), n());
    }
    K.length = 0;
  } while (P.length);
  for (; ge.length; )
    ge.pop()();
  ae = !1, se.clear(), U(t);
}
function Be(t) {
  if (t.fragment !== null) {
    t.update(), H(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ue);
  }
}
const ee = /* @__PURE__ */ new Set();
let k;
function Ve() {
  k = {
    r: 0,
    c: [],
    p: k
  };
}
function He() {
  k.r || H(k.c), k = k.p;
}
function L(t, e) {
  t && t.i && (ee.delete(t), t.i(e));
}
function F(t, e, n, r) {
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
function B(t, e, n, r) {
  const { fragment: i, on_mount: s, on_destroy: l, after_update: a } = t.$$;
  i && i.m(e, n), r || ue(() => {
    const o = s.map(Ee).filter(Ie);
    l ? l.push(...o) : H(o), t.$$.on_mount = [];
  }), a.forEach(ue);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (H(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Qe(t, e) {
  t.$$.dirty[0] === -1 && (P.push(t), Ue(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function J(t, e, n, r, i, s, l, a = [-1]) {
  const o = de;
  U(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: z,
    not_equal: i,
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
  l && l(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (m, E, ...I) => {
    const p = I.length ? I[0] : E;
    return u.ctx && i(u.ctx[m], u.ctx[m] = p) && (!u.skip_bound && u.bound[m] && u.bound[m](p), f && Qe(t, m)), E;
  }) : [], u.update(), f = !0, H(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      Oe();
      const m = y(e.target);
      u.fragment && u.fragment.l(m), m.forEach(_);
    } else
      u.fragment && u.fragment.c();
    e.intro && L(t.$$.fragment), B(t, e.target, e.anchor, e.customElement), ke(), De();
  }
  U(o);
}
class G {
  $destroy() {
    V(this, 1), this.$destroy = z;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Le(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Je = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", Ge = "A 'merge' property is required", qe = "Property 'merge' must be an array", Ze = "Property 'merge' must contain at least one element", We = "A 'find' property is required on every element inside 'merge'", Xe = "Every 'find' property inside 'merge' must be of type string", Ke = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", et = "A 'replace' property is required on every element inside 'merge'", tt = "Unexpected error while parsing template JSON", nt = "Every element inside the 'merge' should be an object";
class A extends Error {
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
function it(t, e) {
  return q(t, e) && !(e[t] instanceof Array);
}
function lt(t, e) {
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
      throw new A(Ge);
    if (it("merge", e))
      throw new A(qe);
    if (ot("merge", e))
      throw new A(Ze);
    const { merge: n } = e, r = ut(n);
    return { ...e, merge: r };
  } catch (e) {
    throw Se(e);
  }
}
function ut(t) {
  return t.map((n) => {
    if (!rt(n))
      throw new A(nt);
    if (ce("find", n))
      throw new A(We);
    if (ce("replace", n))
      throw new A(et);
    if (lt("find", n))
      throw new A(Xe);
    if (st("find", n))
      throw new A(Ke);
    return n;
  }).map(({ find: n, replace: r }) => ({
    find: n,
    replace: Ae(r)
  }));
}
function ct(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Se(t) {
  return t instanceof Error ? t : ct(t) ? new A(t.message) : new A(tt);
}
function Ae(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class je {
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
      const n = at(Ae(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const r = Se(n);
      this.error = r;
    }
  }
  updateResultMergeFields(e) {
    const { find: n, replace: r } = e, i = { find: n, replace: r }, s = this.result.merge.map(
      (l) => (l == null ? void 0 : l.find) === e.find ? i : l
    );
    return this.result = { ...this.result, merge: s }, s;
  }
  logger(e) {
    console.error(e);
  }
  addMergeField(e) {
    this.setTemplateSource({
      ...this.result,
      merge: [...this.result.merge, e]
    });
  }
  removeMergeField(e) {
    this.setTemplateSource({
      ...this.result,
      merge: this.result.merge.filter((n) => n !== e)
    });
  }
  getMergeFieldItem(e) {
    if (Object.keys(e).length === 0)
      return;
    const n = function(r) {
      let i;
      for (i in e)
        if (r[i] !== e[i])
          return !1;
      return !0;
    };
    return this.result.merge.find(n);
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
function pt(t) {
  let e, n;
  return {
    c() {
      e = oe("svg"), n = oe("path"), this.h();
    },
    l(r) {
      e = pe(r, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var i = y(e);
      n = pe(i, "path", { d: !0 }), y(n).forEach(_), i.forEach(_), this.h();
    },
    h() {
      c(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), c(e, "class", "fill-current w-4 h-4 mr-2"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "viewBox", "0 0 20 20");
    },
    m(r, i) {
      $(r, e, i), d(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && _(e);
    }
  };
}
function _t(t) {
  return [];
}
class gt extends G {
  constructor(e) {
    super(), J(this, e, _t, pt, Q, {});
  }
}
function vt(t) {
  let e, n, r, i;
  return n = new gt({}), {
    c() {
      e = v("a"), te(n.$$.fragment), r = j(`
	Download`), this.h();
    },
    l(s) {
      e = w(s, "A", { href: !0, download: !0, class: !0 });
      var l = y(e);
      ne(n.$$.fragment, l), r = x(l, `
	Download`), l.forEach(_), this.h();
    },
    h() {
      c(e, "href", t[0]), c(e, "download", "result.json"), c(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      $(s, e, l), B(n, e, null), d(e, r), i = !0;
    },
    p(s, [l]) {
      (!i || l & 1) && c(e, "href", s[0]);
    },
    i(s) {
      i || (L(n.$$.fragment, s), i = !0);
    },
    o(s) {
      F(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && _(e), V(n);
    }
  };
}
function yt(t, e, n) {
  let { download: r = "" } = e;
  return t.$$set = (i) => {
    "download" in i && n(0, r = i.download);
  }, [r];
}
class bt extends G {
  constructor(e) {
    super(), J(this, e, yt, vt, Q, { download: 0 });
  }
}
function Mt(t) {
  let e, n, r, i;
  return {
    c() {
      e = v("button"), n = j("Submit"), this.h();
    },
    l(s) {
      e = w(s, "BUTTON", { class: !0 });
      var l = y(e);
      n = x(l, "Submit"), l.forEach(_), this.h();
    },
    h() {
      c(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      $(s, e, l), d(e, n), r || (i = le(e, "click", function() {
        Ie(t[0]) && t[0].apply(this, arguments);
      }), r = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: z,
    o: z,
    d(s) {
      s && _(e), r = !1, i();
    }
  };
}
function wt(t, e, n) {
  let { submit: r } = e;
  return t.$$set = (i) => {
    "submit" in i && n(0, r = i.submit);
  }, [r];
}
class Et extends G {
  constructor(e) {
    super(), J(this, e, wt, Mt, Q, { submit: 0 });
  }
}
function It(t) {
  let e, n, r, i, s;
  return n = new bt({ props: { download: t[0] } }), i = new Et({ props: { submit: t[1] } }), {
    c() {
      e = v("div"), te(n.$$.fragment), r = D(), te(i.$$.fragment), this.h();
    },
    l(l) {
      e = w(l, "DIV", { class: !0 });
      var a = y(e);
      ne(n.$$.fragment, a), r = S(a), ne(i.$$.fragment, a), a.forEach(_), this.h();
    },
    h() {
      c(e, "class", "flex justify-between pt-4");
    },
    m(l, a) {
      $(l, e, a), B(n, e, null), d(e, r), B(i, e, null), s = !0;
    },
    p(l, [a]) {
      const o = {};
      a & 1 && (o.download = l[0]), n.$set(o);
      const u = {};
      a & 2 && (u.submit = l[1]), i.$set(u);
    },
    i(l) {
      s || (L(n.$$.fragment, l), L(i.$$.fragment, l), s = !0);
    },
    o(l) {
      F(n.$$.fragment, l), F(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && _(e), V(n), V(i);
    }
  };
}
function Nt(t, e, n) {
  let { download: r = "" } = e, { submit: i } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, r = s.download), "submit" in s && n(1, i = s.submit);
  }, [r, i];
}
class Tt extends G {
  constructor(e) {
    super(), J(this, e, Nt, It, Q, { download: 0, submit: 1 });
  }
}
function ve(t, e, n) {
  const r = t.slice();
  return r[11] = e[n].find, r[12] = e[n].replace, r;
}
function ye(t) {
  let e, n, r = t[2].message + "", i;
  return {
    c() {
      e = v("p"), n = v("span"), i = j(r), this.h();
    },
    l(s) {
      e = w(s, "P", { "data-cy": !0, class: !0 });
      var l = y(e);
      n = w(l, "SPAN", { class: !0 });
      var a = y(n);
      i = x(a, r), a.forEach(_), l.forEach(_), this.h();
    },
    h() {
      c(n, "class", "monospace text-orange-900 svelte-r93edu"), c(e, "data-cy", "template-input-error"), c(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-r93edu");
    },
    m(s, l) {
      $(s, e, l), d(e, n), d(n, i);
    },
    p(s, l) {
      l & 4 && r !== (r = s[2].message + "") && fe(i, r);
    },
    d(s) {
      s && _(e);
    }
  };
}
function be(t) {
  let e, n, r, i, s, l = t[1].merge, a = [];
  for (let o = 0; o < l.length; o += 1)
    a[o] = Me(ve(t, l, o));
  return {
    c() {
      e = v("div"), n = v("h1"), r = j("Modify Merge Values"), i = D(), s = v("div");
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      this.h();
    },
    l(o) {
      e = w(o, "DIV", { "data-cy": !0, class: !0 });
      var u = y(e);
      n = w(u, "H1", { class: !0 });
      var f = y(n);
      r = x(f, "Modify Merge Values"), f.forEach(_), i = S(u), s = w(u, "DIV", { class: !0 });
      var m = y(s);
      for (let E = 0; E < a.length; E += 1)
        a[E].l(m);
      m.forEach(_), u.forEach(_), this.h();
    },
    h() {
      c(n, "class", "text-teal-400 px-1 svelte-r93edu"), c(s, "class", "border p-4 mb-6 svelte-r93edu"), c(e, "data-cy", "merge-fields-input-section"), c(e, "class", "svelte-r93edu");
    },
    m(o, u) {
      $(o, e, u), d(e, n), d(n, r), d(e, i), d(e, s);
      for (let f = 0; f < a.length; f += 1)
        a[f].m(s, null);
    },
    p(o, u) {
      if (u & 34) {
        l = o[1].merge;
        let f;
        for (f = 0; f < l.length; f += 1) {
          const m = ve(o, l, f);
          a[f] ? a[f].p(m, u) : (a[f] = Me(m), a[f].c(), a[f].m(s, null));
        }
        for (; f < a.length; f += 1)
          a[f].d(1);
        a.length = l.length;
      }
    },
    d(o) {
      o && _(e), Re(a, o);
    }
  };
}
function Me(t) {
  let e, n, r = t[11] + "", i, s, l, a, o, u, f, m, E;
  function I(...p) {
    return t[10](t[11], ...p);
  }
  return {
    c() {
      e = v("div"), n = v("label"), i = j(r), l = D(), a = v("input"), f = D(), this.h();
    },
    l(p) {
      e = w(p, "DIV", { "data-cy": !0, class: !0 });
      var N = y(e);
      n = w(N, "LABEL", { for: !0, class: !0 });
      var b = y(n);
      i = x(b, r), b.forEach(_), l = S(N), a = w(N, "INPUT", { class: !0, id: !0, type: !0 }), f = S(N), N.forEach(_), this.h();
    },
    h() {
      c(n, "for", s = t[11]), c(n, "class", "block mb-2 monospace svelte-r93edu"), c(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-r93edu"), c(a, "id", o = t[11]), c(a, "type", "text"), a.value = u = t[12], c(e, "data-cy", "label-input"), c(e, "class", "svelte-r93edu");
    },
    m(p, N) {
      $(p, e, N), d(e, n), d(n, i), d(e, l), d(e, a), d(e, f), m || (E = le(a, "input", I), m = !0);
    },
    p(p, N) {
      t = p, N & 2 && r !== (r = t[11] + "") && fe(i, r), N & 2 && s !== (s = t[11]) && c(n, "for", s), N & 2 && o !== (o = t[11]) && c(a, "id", o), N & 2 && u !== (u = t[12]) && a.value !== u && (a.value = u);
    },
    d(p) {
      p && _(e), m = !1, E();
    }
  };
}
function we(t) {
  let e, n, r, i, s, l, a, o, u, f = re(t[0]) + "", m, E, I, p, N, b;
  return I = new Tt({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = v("div"), n = v("h1"), r = j("Result"), i = D(), s = v("abbr"), l = v("img"), o = D(), u = v("p"), m = j(f), E = D(), te(I.$$.fragment), this.h();
    },
    l(g) {
      e = w(g, "DIV", { "data-cy": !0, class: !0 });
      var h = y(e);
      n = w(h, "H1", { class: !0 });
      var C = y(n);
      r = x(C, "Result"), C.forEach(_), i = S(h), s = w(h, "ABBR", { title: !0, class: !0 });
      var M = y(s);
      l = w(M, "IMG", { src: !0, alt: !0, class: !0 }), M.forEach(_), o = S(h), u = w(h, "P", { "data-cy": !0, class: !0 });
      var T = y(u);
      m = x(T, f), T.forEach(_), E = S(h), ne(I.$$.fragment, h), h.forEach(_), this.h();
    },
    h() {
      c(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Ce(l.src, a = Je) || c(l, "src", a), c(l, "alt", "copy-button"), c(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), c(s, "title", "Copy to clipboard"), c(s, "class", "svelte-r93edu"), c(u, "data-cy", "result"), c(u, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), c(e, "data-cy", "result-section"), c(e, "class", "svelte-r93edu");
    },
    m(g, h) {
      $(g, e, h), d(e, n), d(n, r), d(e, i), d(e, s), d(s, l), d(e, o), d(e, u), d(u, m), d(e, E), B(I, e, null), p = !0, N || (b = le(l, "click", t[6]), N = !0);
    },
    p(g, h) {
      (!p || h & 1) && f !== (f = re(g[0]) + "") && fe(m, f);
      const C = {};
      h & 8 && (C.download = g[3]), I.$set(C);
    },
    i(g) {
      p || (L(I.$$.fragment, g), p = !0);
    },
    o(g) {
      F(I.$$.fragment, g), p = !1;
    },
    d(g) {
      g && _(e), V(I), N = !1, b();
    }
  };
}
function Dt(t) {
  var C;
  let e, n, r, i, s, l, a, o, u, f, m, E, I, p, N, b = t[2] && ye(t), g = ((C = t[1].merge) == null ? void 0 : C.length) && !t[2] && be(t), h = !t[2] && we(t);
  return {
    c() {
      e = v("div"), n = v("section"), r = v("form"), i = v("div"), s = v("label"), l = j("Paste template"), a = D(), o = v("textarea"), f = D(), b && b.c(), m = D(), g && g.c(), E = D(), h && h.c(), this.h();
    },
    l(M) {
      e = w(M, "DIV", { class: !0 });
      var T = y(e);
      n = w(T, "SECTION", { "data-cy": !0, class: !0 });
      var O = y(n);
      r = w(O, "FORM", { class: !0 });
      var Y = y(r);
      i = w(Y, "DIV", { "data-cy": !0, class: !0 });
      var Z = y(i);
      s = w(Z, "LABEL", { for: !0, class: !0 });
      var he = y(s);
      l = x(he, "Paste template"), he.forEach(_), a = S(Z), o = w(Z, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), y(o).forEach(_), Z.forEach(_), f = S(Y), b && b.l(Y), m = S(Y), g && g.l(Y), Y.forEach(_), E = S(O), h && h.l(O), O.forEach(_), T.forEach(_), this.h();
    },
    h() {
      c(s, "for", "json-input"), c(s, "class", "text-teal-400 px-1 svelte-r93edu"), c(o, "data-cy", "template-input"), c(o, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), c(o, "id", "json-input"), o.value = u = re(t[1]), c(i, "data-cy", "template-input-section"), c(i, "class", "mb-6 svelte-r93edu"), c(r, "class", "svelte-r93edu"), c(n, "data-cy", "form-container"), c(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), c(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(M, T) {
      $(M, e, T), d(e, n), d(n, r), d(r, i), d(i, s), d(s, l), d(i, a), d(i, o), d(r, f), b && b.m(r, null), d(r, m), g && g.m(r, null), d(n, E), h && h.m(n, null), I = !0, p || (N = le(o, "input", t[9]), p = !0);
    },
    p(M, [T]) {
      var O;
      (!I || T & 2 && u !== (u = re(M[1]))) && (o.value = u), M[2] ? b ? b.p(M, T) : (b = ye(M), b.c(), b.m(r, m)) : b && (b.d(1), b = null), ((O = M[1].merge) == null ? void 0 : O.length) && !M[2] ? g ? g.p(M, T) : (g = be(M), g.c(), g.m(r, null)) : g && (g.d(1), g = null), M[2] ? h && (Ve(), F(h, 1, 1, () => {
        h = null;
      }), He()) : h ? (h.p(M, T), T & 4 && L(h, 1)) : (h = we(M), h.c(), L(h, 1), h.m(n, null));
    },
    i(M) {
      I || (L(h), I = !0);
    },
    o(M) {
      F(h), I = !1;
    },
    d(M) {
      M && _(e), b && b.d(), g && g.d(), h && h.d(), p = !1, N();
    }
  };
}
function re(t) {
  return JSON.stringify(t, null, 2);
}
function St(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function At(t, e, n) {
  let r, { editTemplateService: i = new je(mt) } = e, s = i.template, l = i.result, a = null;
  function o(p) {
    i.setTemplateSource(p), n(1, s = i.template), n(0, l = i.result), n(2, a = i.error);
  }
  function u(p) {
    i.updateResultMergeFields(p), n(0, l = i.result);
  }
  function f() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function m() {
    i.submit(), window.alert("Form successfully submitted!");
  }
  const E = (p) => o(p.currentTarget.value), I = (p, N) => u({ find: p, replace: N.currentTarget.value });
  return t.$$set = (p) => {
    "editTemplateService" in p && n(8, i = p.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, r = St(l) || "");
  }, [
    l,
    s,
    a,
    r,
    o,
    u,
    f,
    m,
    i,
    E,
    I
  ];
}
class jt extends G {
  constructor(e) {
    super(), J(this, e, At, Dt, Q, { editTemplateService: 8 });
  }
}
class $t {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    R(this, "templateService");
    this.containerElement = n, this.templateService = new je(e), this.initialize();
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
    new jt({
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
  addField(e, n) {
    this.templateService.addMergeField({ find: e, replace: n });
  }
  removeField(e) {
    this.templateService.removeMergeField(e);
  }
  getField(e) {
    return this.templateService.getMergeFieldItem(e);
  }
}
export {
  $t as default
};
