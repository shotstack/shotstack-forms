var He = Object.defineProperty;
var Qe = (t, e, n) => e in t ? He(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var W = (t, e, n) => (Qe(t, typeof e != "symbol" ? e + "" : e, n), n);
function x() {
}
function ke(t) {
  return t();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(ke);
}
function ye(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ie;
function Je(t, e) {
  return ie || (ie = document.createElement("a")), ie.href = e, t === ie.href;
}
function Ge(t) {
  return Object.keys(t).length === 0;
}
function qe(t, ...e) {
  if (t == null)
    return x;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Te(t, e, n) {
  t.$$.on_destroy.push(qe(e, n));
}
let fe = !1;
function Ze() {
  fe = !0;
}
function We() {
  fe = !1;
}
function Xe(t, e, n, r) {
  for (; t < e; ) {
    const i = t + (e - t >> 1);
    n(i) <= r ? t = i + 1 : e = i;
  }
  return t;
}
function Ke(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const p = e[o];
      p.claim_order !== void 0 && a.push(p);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let i = 0;
  for (let a = 0; a < e.length; a++) {
    const o = e[a].claim_order, p = (i > 0 && e[n[i]].claim_order <= o ? i + 1 : Xe(1, i, (N) => e[n[N]].claim_order, o)) - 1;
    r[a] = n[p] + 1;
    const f = p + 1;
    n[f] = a, i = Math.max(f, i);
  }
  const s = [], l = [];
  let u = e.length - 1;
  for (let a = n[i] + 1; a != 0; a = r[a - 1]) {
    for (s.push(e[a - 1]); u >= a; u--)
      l.push(e[u]);
    u--;
  }
  for (; u >= 0; u--)
    l.push(e[u]);
  s.reverse(), l.sort((a, o) => a.claim_order - o.claim_order);
  for (let a = 0, o = 0; a < l.length; a++) {
    for (; o < s.length && l[a].claim_order >= s[o].claim_order; )
      o++;
    const p = o < s.length ? s[o] : null;
    t.insertBefore(l[a], p);
  }
}
function g(t, e) {
  if (fe) {
    for (Ke(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function F(t, e, n) {
  fe && !n ? g(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode.removeChild(t);
}
function et(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function M(t) {
  return document.createElement(t);
}
function re(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function C(t) {
  return document.createTextNode(t);
}
function S() {
  return C(" ");
}
function J(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function ze(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function E(t) {
  return Array.from(t.childNodes);
}
function tt(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Ye(t, e, n, r, i = !1) {
  tt(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const u = t[l];
      if (e(u)) {
        const a = n(u);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, i || (t.claim_info.last_index = l), u;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const u = t[l];
      if (e(u)) {
        const a = n(u);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, i ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, u;
      }
    }
    return r();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Re(t, e, n, r) {
  return Ye(t, (i) => i.nodeName === e, (i) => {
    const s = [];
    for (let l = 0; l < i.attributes.length; l++) {
      const u = i.attributes[l];
      n[u.name] || s.push(u.name);
    }
    s.forEach((l) => i.removeAttribute(l));
  }, () => r(e));
}
function I(t, e, n) {
  return Re(t, e, n, M);
}
function oe(t, e, n) {
  return Re(t, e, n, re);
}
function L(t, e) {
  return Ye(
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
    () => C(e),
    !0
  );
}
function A(t) {
  return L(t, " ");
}
function we(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function De(t, e) {
  t.value = e == null ? "" : e;
}
let Ee;
function ne(t) {
  Ee = t;
}
const te = [], ae = [], se = [], me = [], nt = Promise.resolve();
let ge = !1;
function rt() {
  ge || (ge = !0, nt.then(Be));
}
function pe(t) {
  se.push(t);
}
function $e(t) {
  me.push(t);
}
const he = /* @__PURE__ */ new Set();
let le = 0;
function Be() {
  const t = Ee;
  do {
    for (; le < te.length; ) {
      const e = te[le];
      le++, ne(e), it(e.$$);
    }
    for (ne(null), te.length = 0, le = 0; ae.length; )
      ae.pop()();
    for (let e = 0; e < se.length; e += 1) {
      const n = se[e];
      he.has(n) || (he.add(n), n());
    }
    se.length = 0;
  } while (te.length);
  for (; me.length; )
    me.pop()();
  ge = !1, he.clear(), ne(t);
}
function it(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(pe);
  }
}
const ue = /* @__PURE__ */ new Set();
let q;
function _e() {
  q = {
    r: 0,
    c: [],
    p: q
  };
}
function ve() {
  q.r || K(q.c), q = q.p;
}
function $(t, e) {
  t && t.i && (ue.delete(t), t.i(e));
}
function j(t, e, n, r) {
  if (t && t.o) {
    if (ue.has(t))
      return;
    ue.add(t), q.c.push(() => {
      ue.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Se(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function R(t) {
  t && t.c();
}
function B(t, e) {
  t && t.l(e);
}
function O(t, e, n, r) {
  const { fragment: i, on_mount: s, on_destroy: l, after_update: u } = t.$$;
  i && i.m(e, n), r || pe(() => {
    const a = s.map(ke).filter(ye);
    l ? l.push(...a) : K(a), t.$$.on_mount = [];
  }), u.forEach(pe);
}
function k(t, e) {
  const n = t.$$;
  n.fragment !== null && (K(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function lt(t, e) {
  t.$$.dirty[0] === -1 && (te.push(t), rt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function U(t, e, n, r, i, s, l, u = [-1]) {
  const a = Ee;
  ne(t);
  const o = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: x,
    not_equal: i,
    bound: Ne(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Ne(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(o.root);
  let p = !1;
  if (o.ctx = n ? n(t, e.props || {}, (f, N, ...c) => {
    const d = c.length ? c[0] : N;
    return o.ctx && i(o.ctx[f], o.ctx[f] = d) && (!o.skip_bound && o.bound[f] && o.bound[f](d), p && lt(t, f)), N;
  }) : [], o.update(), p = !0, K(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      Ze();
      const f = E(e.target);
      o.fragment && o.fragment.l(f), f.forEach(b);
    } else
      o.fragment && o.fragment.c();
    e.intro && $(t.$$.fragment), O(t, e.target, e.anchor, e.customElement), We(), Be();
  }
  ne(a);
}
class V {
  $destroy() {
    k(this, 1), this.$destroy = x;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Ge(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const st = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", ut = "A 'merge' property is required", ot = "Property 'merge' must be an array", at = "A 'find' property is required on every element inside 'merge'", ct = "Every 'find' property inside 'merge' must be of type string", ft = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", dt = "A 'replace' property is required on every element inside 'merge'", ht = "Unexpected error while parsing template JSON", mt = "Every element inside the 'merge' should be an object";
class Q extends Error {
  constructor(e) {
    super(e);
  }
}
function gt(t) {
  return typeof t == "object";
}
function de(t, e) {
  return t in e;
}
function be(t, e) {
  return !de(t, e);
}
function pt(t, e) {
  return de(t, e) && !(e[t] instanceof Array);
}
function _t(t, e) {
  return de(t, e) && typeof e[t] != "string";
}
function vt(t, e) {
  const n = de(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function bt(t) {
  try {
    const e = JSON.parse(t);
    if (be("merge", e))
      throw new Q(ut);
    if (pt("merge", e))
      throw new Q(ot);
    const { merge: n } = e, r = yt(n);
    return { ...e, merge: r };
  } catch (e) {
    throw Ue(e);
  }
}
function yt(t) {
  return t.map((n) => {
    if (!gt(n))
      throw new Q(mt);
    if (be("find", n))
      throw new Q(at);
    if (be("replace", n))
      throw new Q(dt);
    if (_t("find", n))
      throw new Q(ct);
    if (vt("find", n))
      throw new Q(ft);
    return n;
  }).map(({ find: n, replace: r }) => ({
    find: n,
    replace: Ve(r)
  }));
}
function wt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Ue(t) {
  return t instanceof Error ? t : wt(t) ? new Q(t.message) : new Q(ht);
}
function Ve(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Pe {
  constructor(e) {
    W(this, "template");
    W(this, "_result");
    W(this, "_error");
    W(this, "handlers");
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
      const n = bt(Ve(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const r = Ue(n);
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
const Et = [
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
            style: "future"
          },
          start: 0,
          length: 5
        }
      ]
    }
  ]
}, It = {
  format: "mp4",
  resolution: "hd"
}, Nt = {
  merge: Et,
  timeline: Mt,
  output: It
};
function Tt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(r) {
      e = oe(r, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var i = E(e);
      n = oe(i, "path", { d: !0 }), E(n).forEach(b), i.forEach(b), this.h();
    },
    h() {
      h(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), h(e, "class", "fill-current w-4 h-4 mr-2"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "viewBox", "0 0 20 20");
    },
    m(r, i) {
      F(r, e, i), g(e, n);
    },
    p: x,
    i: x,
    o: x,
    d(r) {
      r && b(e);
    }
  };
}
function Dt(t) {
  return [];
}
class $t extends V {
  constructor(e) {
    super(), U(this, e, Dt, Tt, z, {});
  }
}
function St(t) {
  let e, n, r, i;
  return n = new $t({}), {
    c() {
      e = M("a"), R(n.$$.fragment), r = C(`
	Download`), this.h();
    },
    l(s) {
      e = I(s, "A", { href: !0, download: !0, class: !0 });
      var l = E(e);
      B(n.$$.fragment, l), r = L(l, `
	Download`), l.forEach(b), this.h();
    },
    h() {
      h(e, "href", t[0]), h(e, "download", "result.json"), h(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      F(s, e, l), O(n, e, null), g(e, r), i = !0;
    },
    p(s, [l]) {
      (!i || l & 1) && h(e, "href", s[0]);
    },
    i(s) {
      i || ($(n.$$.fragment, s), i = !0);
    },
    o(s) {
      j(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && b(e), k(n);
    }
  };
}
function At(t, e, n) {
  let { download: r = "" } = e;
  return t.$$set = (i) => {
    "download" in i && n(0, r = i.download);
  }, [r];
}
class jt extends V {
  constructor(e) {
    super(), U(this, e, At, St, z, { download: 0 });
  }
}
function xt(t) {
  let e, n, r, i;
  return {
    c() {
      e = M("button"), n = C("Submit"), this.h();
    },
    l(s) {
      e = I(s, "BUTTON", { class: !0 });
      var l = E(e);
      n = L(l, "Submit"), l.forEach(b), this.h();
    },
    h() {
      h(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      F(s, e, l), g(e, n), r || (i = J(e, "click", function() {
        ye(t[0]) && t[0].apply(this, arguments);
      }), r = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: x,
    o: x,
    d(s) {
      s && b(e), r = !1, i();
    }
  };
}
function Ft(t, e, n) {
  let { submit: r } = e;
  return t.$$set = (i) => {
    "submit" in i && n(0, r = i.submit);
  }, [r];
}
class Ct extends V {
  constructor(e) {
    super(), U(this, e, Ft, xt, z, { submit: 0 });
  }
}
function Lt(t) {
  let e, n, r, i, s;
  return n = new jt({ props: { download: t[0] } }), i = new Ct({ props: { submit: t[1] } }), {
    c() {
      e = M("div"), R(n.$$.fragment), r = S(), R(i.$$.fragment), this.h();
    },
    l(l) {
      e = I(l, "DIV", { class: !0 });
      var u = E(e);
      B(n.$$.fragment, u), r = A(u), B(i.$$.fragment, u), u.forEach(b), this.h();
    },
    h() {
      h(e, "class", "flex justify-between pt-4");
    },
    m(l, u) {
      F(l, e, u), O(n, e, null), g(e, r), O(i, e, null), s = !0;
    },
    p(l, [u]) {
      const a = {};
      u & 1 && (a.download = l[0]), n.$set(a);
      const o = {};
      u & 2 && (o.submit = l[1]), i.$set(o);
    },
    i(l) {
      s || ($(n.$$.fragment, l), $(i.$$.fragment, l), s = !0);
    },
    o(l) {
      j(n.$$.fragment, l), j(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && b(e), k(n), k(i);
    }
  };
}
function Ot(t, e, n) {
  let { download: r = "" } = e, { submit: i } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, r = s.download), "submit" in s && n(1, i = s.submit);
  }, [r, i];
}
class kt extends V {
  constructor(e) {
    super(), U(this, e, Ot, Lt, z, { download: 0, submit: 1 });
  }
}
const X = [];
function Ae(t, e = x) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (z(t, u) && (t = u, n)) {
      const a = !X.length;
      for (const o of r)
        o[1](), X.push(o, t);
      if (a) {
        for (let o = 0; o < X.length; o += 2)
          X[o][0](X[o + 1]);
        X.length = 0;
      }
    }
  }
  function s(u) {
    i(u(t));
  }
  function l(u, a = x) {
    const o = [u, a];
    return r.add(o), r.size === 1 && (n = e(i) || x), u(t), () => {
      r.delete(o), r.size === 0 && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: l };
}
function zt(t) {
  let e, n, r;
  return {
    c() {
      e = M("input"), this.h();
    },
    l(i) {
      e = I(i, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      h(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), h(e, "type", "text");
    },
    m(i, s) {
      F(i, e, s), De(e, t[0]), n || (r = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(i, [s]) {
      s & 1 && e.value !== i[0] && De(e, i[0]);
    },
    i: x,
    o: x,
    d(i) {
      i && b(e), n = !1, K(r);
    }
  };
}
function Yt(t, e, n) {
  let { value: r } = e, { onFocus: i } = e;
  function s() {
    r = this.value, n(0, r);
  }
  const l = (u) => i(u.currentTarget);
  return t.$$set = (u) => {
    "value" in u && n(0, r = u.value), "onFocus" in u && n(1, i = u.onFocus);
  }, [r, i, s, l];
}
class je extends V {
  constructor(e) {
    super(), U(this, e, Yt, zt, z, { value: 0, onFocus: 1 });
  }
}
function Rt(t) {
  let e, n, r, i, s, l, u, a, o, p, f, N, c, d, w, _, v, m;
  function y(D) {
    t[7](D);
  }
  let T = { onFocus: t[6] };
  t[1] !== void 0 && (T.value = t[1]), u = new je({ props: T }), ae.push(() => Se(u, "value", y));
  function P(D) {
    t[9](D);
  }
  let H = { onFocus: t[8] };
  return t[2] !== void 0 && (H.value = t[2]), p = new je({ props: H }), ae.push(() => Se(p, "value", P)), {
    c() {
      e = M("div"), n = M("div"), r = M("h1"), i = C("Add a new merge field"), s = S(), l = M("div"), R(u.$$.fragment), o = S(), R(p.$$.fragment), N = S(), c = M("div"), d = M("button"), w = C("Add"), this.h();
    },
    l(D) {
      e = I(D, "DIV", {});
      var Y = E(e);
      n = I(Y, "DIV", {});
      var G = E(n);
      r = I(G, "H1", { class: !0 });
      var ee = E(r);
      i = L(ee, "Add a new merge field"), ee.forEach(b), s = A(G), l = I(G, "DIV", { class: !0 });
      var Z = E(l);
      B(u.$$.fragment, Z), o = A(Z), B(p.$$.fragment, Z), N = A(Z), c = I(Z, "DIV", { class: !0 });
      var Me = E(c);
      d = I(Me, "BUTTON", { class: !0 });
      var Ie = E(d);
      w = L(Ie, "Add"), Ie.forEach(b), Me.forEach(b), Z.forEach(b), G.forEach(b), Y.forEach(b), this.h();
    },
    h() {
      h(r, "class", "text-teal-400 px-1"), h(d, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), h(c, "class", "flex flex-row-reverse"), h(l, "class", "border p-4 mb-6");
    },
    m(D, Y) {
      F(D, e, Y), g(e, n), g(n, r), g(r, i), g(n, s), g(n, l), O(u, l, null), g(l, o), O(p, l, null), g(l, N), g(l, c), g(c, d), g(d, w), _ = !0, v || (m = J(d, "click", ze(t[10])), v = !0);
    },
    p(D, [Y]) {
      const G = {};
      !a && Y & 2 && (a = !0, G.value = D[1], $e(() => a = !1)), u.$set(G);
      const ee = {};
      !f && Y & 4 && (f = !0, ee.value = D[2], $e(() => f = !1)), p.$set(ee);
    },
    i(D) {
      _ || ($(u.$$.fragment, D), $(p.$$.fragment, D), _ = !0);
    },
    o(D) {
      j(u.$$.fragment, D), j(p.$$.fragment, D), _ = !1;
    },
    d(D) {
      D && b(e), k(u), k(p), v = !1, m();
    }
  };
}
function Bt(t, e, n) {
  let r, i, s = Ae("find");
  Te(t, s, (d) => n(1, r = d));
  let l = Ae("replace");
  Te(t, l, (d) => n(2, i = d));
  let u = (d) => d.set(""), { addField: a } = e;
  const o = () => u(s);
  function p(d) {
    r = d, s.set(r);
  }
  const f = () => u(l);
  function N(d) {
    i = d, l.set(i);
  }
  const c = () => a({ find: r, replace: i });
  return t.$$set = (d) => {
    "addField" in d && n(0, a = d.addField);
  }, [
    a,
    r,
    i,
    s,
    l,
    u,
    o,
    p,
    f,
    N,
    c
  ];
}
class Ut extends V {
  constructor(e) {
    super(), U(this, e, Bt, Rt, z, { addField: 0 });
  }
}
function Vt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(r) {
      e = oe(r, "svg", { xmlns: !0, viewBox: !0 });
      var i = E(e);
      n = oe(i, "path", { fill: !0, d: !0 }), E(n).forEach(b), i.forEach(b), this.h();
    },
    h() {
      h(n, "fill", "white"), h(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "viewBox", "0 0 16 16");
    },
    m(r, i) {
      F(r, e, i), g(e, n);
    },
    p: x,
    i: x,
    o: x,
    d(r) {
      r && b(e);
    }
  };
}
function Pt(t) {
  return [];
}
class Ht extends V {
  constructor(e) {
    super(), U(this, e, Pt, Vt, z, {});
  }
}
function Qt(t) {
  let e, n, r, i, s;
  return n = new Ht({}), {
    c() {
      e = M("button"), R(n.$$.fragment), this.h();
    },
    l(l) {
      e = I(l, "BUTTON", { class: !0 });
      var u = E(e);
      B(n.$$.fragment, u), u.forEach(b), this.h();
    },
    h() {
      h(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(l, u) {
      F(l, e, u), O(n, e, null), r = !0, i || (s = J(e, "click", ze(function() {
        ye(t[0]) && t[0].apply(this, arguments);
      })), i = !0);
    },
    p(l, [u]) {
      t = l;
    },
    i(l) {
      r || ($(n.$$.fragment, l), r = !0);
    },
    o(l) {
      j(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && b(e), k(n), i = !1, s();
    }
  };
}
function Jt(t, e, n) {
  let { onClick: r } = e;
  return t.$$set = (i) => {
    "onClick" in i && n(0, r = i.onClick);
  }, [r];
}
class Gt extends V {
  constructor(e) {
    super(), U(this, e, Jt, Qt, z, { onClick: 0 });
  }
}
function xe(t, e, n) {
  const r = t.slice();
  return r[6] = e[n], r;
}
function Fe(t) {
  let e, n, r = t[6].find + "", i, s, l, u, a, o, p, f, N, c, d, w;
  function _(...m) {
    return t[4](t[6], ...m);
  }
  function v() {
    return t[5](t[6]);
  }
  return f = new Gt({ props: { onClick: v } }), {
    c() {
      e = M("div"), n = M("label"), i = C(r), l = S(), u = M("input"), p = S(), R(f.$$.fragment), N = S(), this.h();
    },
    l(m) {
      e = I(m, "DIV", { "data-cy": !0, class: !0 });
      var y = E(e);
      n = I(y, "LABEL", { for: !0, class: !0 });
      var T = E(n);
      i = L(T, r), T.forEach(b), l = A(y), u = I(y, "INPUT", { class: !0, id: !0, type: !0 }), p = A(y), B(f.$$.fragment, y), N = A(y), y.forEach(b), this.h();
    },
    h() {
      h(n, "for", s = t[6].find), h(n, "class", "block mb-2 monospace"), h(u, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), h(u, "id", a = t[6].find), h(u, "type", "text"), u.value = o = t[6].replace, h(e, "data-cy", "label-input"), h(e, "class", "relative");
    },
    m(m, y) {
      F(m, e, y), g(e, n), g(n, i), g(e, l), g(e, u), g(e, p), O(f, e, null), g(e, N), c = !0, d || (w = J(u, "input", _), d = !0);
    },
    p(m, y) {
      t = m, (!c || y & 1) && r !== (r = t[6].find + "") && we(i, r), (!c || y & 1 && s !== (s = t[6].find)) && h(n, "for", s), (!c || y & 1 && a !== (a = t[6].find)) && h(u, "id", a), (!c || y & 1 && o !== (o = t[6].replace) && u.value !== o) && (u.value = o);
      const T = {};
      y & 9 && (T.onClick = v), f.$set(T);
    },
    i(m) {
      c || ($(f.$$.fragment, m), c = !0);
    },
    o(m) {
      j(f.$$.fragment, m), c = !1;
    },
    d(m) {
      m && b(e), k(f), d = !1, w();
    }
  };
}
function qt(t) {
  let e, n, r, i, s, l, u, a, o, p = t[0], f = [];
  for (let c = 0; c < p.length; c += 1)
    f[c] = Fe(xe(t, p, c));
  const N = (c) => j(f[c], 1, 1, () => {
    f[c] = null;
  });
  return a = new Ut({ props: { addField: t[2] } }), {
    c() {
      e = M("div"), n = M("div"), r = M("h1"), i = C("Modify Merge Values"), s = S(), l = M("div");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      u = S(), R(a.$$.fragment), this.h();
    },
    l(c) {
      e = I(c, "DIV", {});
      var d = E(e);
      n = I(d, "DIV", { "data-cy": !0 });
      var w = E(n);
      r = I(w, "H1", { class: !0 });
      var _ = E(r);
      i = L(_, "Modify Merge Values"), _.forEach(b), s = A(w), l = I(w, "DIV", { class: !0 });
      var v = E(l);
      for (let m = 0; m < f.length; m += 1)
        f[m].l(v);
      v.forEach(b), w.forEach(b), u = A(d), B(a.$$.fragment, d), d.forEach(b), this.h();
    },
    h() {
      h(r, "class", "text-teal-400 px-1"), h(l, "class", "border p-4 mb-6"), h(n, "data-cy", "merge-fields-input-section");
    },
    m(c, d) {
      F(c, e, d), g(e, n), g(n, r), g(r, i), g(n, s), g(n, l);
      for (let w = 0; w < f.length; w += 1)
        f[w].m(l, null);
      g(e, u), O(a, e, null), o = !0;
    },
    p(c, [d]) {
      if (d & 11) {
        p = c[0];
        let _;
        for (_ = 0; _ < p.length; _ += 1) {
          const v = xe(c, p, _);
          f[_] ? (f[_].p(v, d), $(f[_], 1)) : (f[_] = Fe(v), f[_].c(), $(f[_], 1), f[_].m(l, null));
        }
        for (_e(), _ = p.length; _ < f.length; _ += 1)
          N(_);
        ve();
      }
      const w = {};
      d & 4 && (w.addField = c[2]), a.$set(w);
    },
    i(c) {
      if (!o) {
        for (let d = 0; d < p.length; d += 1)
          $(f[d]);
        $(a.$$.fragment, c), o = !0;
      }
    },
    o(c) {
      f = f.filter(Boolean);
      for (let d = 0; d < f.length; d += 1)
        j(f[d]);
      j(a.$$.fragment, c), o = !1;
    },
    d(c) {
      c && b(e), et(f, c), k(a);
    }
  };
}
function Zt(t, e, n) {
  let { fields: r = [] } = e, { handleFormInput: i } = e, { addField: s } = e, { removeField: l } = e;
  const u = (o, p) => i({
    find: o.find,
    replace: p.currentTarget.value
  }), a = (o) => l(o);
  return t.$$set = (o) => {
    "fields" in o && n(0, r = o.fields), "handleFormInput" in o && n(1, i = o.handleFormInput), "addField" in o && n(2, s = o.addField), "removeField" in o && n(3, l = o.removeField);
  }, [r, i, s, l, u, a];
}
class Wt extends V {
  constructor(e) {
    super(), U(this, e, Zt, qt, z, {
      fields: 0,
      handleFormInput: 1,
      addField: 2,
      removeField: 3
    });
  }
}
function Ce(t) {
  let e, n, r = t[2].message + "", i;
  return {
    c() {
      e = M("p"), n = M("span"), i = C(r), this.h();
    },
    l(s) {
      e = I(s, "P", { "data-cy": !0, class: !0 });
      var l = E(e);
      n = I(l, "SPAN", { class: !0 });
      var u = E(n);
      i = L(u, r), u.forEach(b), l.forEach(b), this.h();
    },
    h() {
      h(n, "class", "monospace text-orange-900 svelte-r93edu"), h(e, "data-cy", "template-input-error"), h(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-r93edu");
    },
    m(s, l) {
      F(s, e, l), g(e, n), g(n, i);
    },
    p(s, l) {
      l & 4 && r !== (r = s[2].message + "") && we(i, r);
    },
    d(s) {
      s && b(e);
    }
  };
}
function Le(t) {
  let e, n;
  return e = new Wt({
    props: {
      fields: t[1].merge,
      handleFormInput: t[5],
      addField: t[8],
      removeField: t[9]
    }
  }), {
    c() {
      R(e.$$.fragment);
    },
    l(r) {
      B(e.$$.fragment, r);
    },
    m(r, i) {
      O(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & 2 && (s.fields = r[1].merge), e.$set(s);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      j(e.$$.fragment, r), n = !1;
    },
    d(r) {
      k(e, r);
    }
  };
}
function Oe(t) {
  let e, n, r, i, s, l, u, a, o, p = ce(t[0]) + "", f, N, c, d, w, _;
  return c = new kt({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = M("div"), n = M("h1"), r = C("Result"), i = S(), s = M("abbr"), l = M("img"), a = S(), o = M("p"), f = C(p), N = S(), R(c.$$.fragment), this.h();
    },
    l(v) {
      e = I(v, "DIV", { "data-cy": !0, class: !0 });
      var m = E(e);
      n = I(m, "H1", { class: !0 });
      var y = E(n);
      r = L(y, "Result"), y.forEach(b), i = A(m), s = I(m, "ABBR", { title: !0, class: !0 });
      var T = E(s);
      l = I(T, "IMG", { src: !0, alt: !0, class: !0 }), T.forEach(b), a = A(m), o = I(m, "P", { "data-cy": !0, class: !0 });
      var P = E(o);
      f = L(P, p), P.forEach(b), N = A(m), B(c.$$.fragment, m), m.forEach(b), this.h();
    },
    h() {
      h(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Je(l.src, u = st) || h(l, "src", u), h(l, "alt", "copy-button"), h(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), h(s, "title", "Copy to clipboard"), h(s, "class", "svelte-r93edu"), h(o, "data-cy", "result"), h(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), h(e, "data-cy", "result-section"), h(e, "class", "svelte-r93edu");
    },
    m(v, m) {
      F(v, e, m), g(e, n), g(n, r), g(e, i), g(e, s), g(s, l), g(e, a), g(e, o), g(o, f), g(e, N), O(c, e, null), d = !0, w || (_ = J(l, "click", t[6]), w = !0);
    },
    p(v, m) {
      (!d || m & 1) && p !== (p = ce(v[0]) + "") && we(f, p);
      const y = {};
      m & 8 && (y.download = v[3]), c.$set(y);
    },
    i(v) {
      d || ($(c.$$.fragment, v), d = !0);
    },
    o(v) {
      j(c.$$.fragment, v), d = !1;
    },
    d(v) {
      v && b(e), k(c), w = !1, _();
    }
  };
}
function Xt(t) {
  let e, n, r, i, s, l, u, a, o, p, f, N, c, d, w, _ = t[2] && Ce(t), v = !t[2] && Le(t), m = !t[2] && Oe(t);
  return {
    c() {
      e = M("div"), n = M("section"), r = M("form"), i = M("div"), s = M("label"), l = C("Paste template"), u = S(), a = M("textarea"), p = S(), _ && _.c(), f = S(), v && v.c(), N = S(), m && m.c(), this.h();
    },
    l(y) {
      e = I(y, "DIV", { class: !0 });
      var T = E(e);
      n = I(T, "SECTION", { "data-cy": !0, class: !0 });
      var P = E(n);
      r = I(P, "FORM", { class: !0 });
      var H = E(r);
      i = I(H, "DIV", { "data-cy": !0, class: !0 });
      var D = E(i);
      s = I(D, "LABEL", { for: !0, class: !0 });
      var Y = E(s);
      l = L(Y, "Paste template"), Y.forEach(b), u = A(D), a = I(D, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), E(a).forEach(b), D.forEach(b), p = A(H), _ && _.l(H), f = A(H), v && v.l(H), H.forEach(b), N = A(P), m && m.l(P), P.forEach(b), T.forEach(b), this.h();
    },
    h() {
      h(s, "for", "json-input"), h(s, "class", "text-teal-400 px-1 svelte-r93edu"), h(a, "data-cy", "template-input"), h(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), h(a, "id", "json-input"), a.value = o = ce(t[1]), h(i, "data-cy", "template-input-section"), h(i, "class", "mb-6 svelte-r93edu"), h(r, "class", "svelte-r93edu"), h(n, "data-cy", "form-container"), h(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), h(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(y, T) {
      F(y, e, T), g(e, n), g(n, r), g(r, i), g(i, s), g(s, l), g(i, u), g(i, a), g(r, p), _ && _.m(r, null), g(r, f), v && v.m(r, null), g(n, N), m && m.m(n, null), c = !0, d || (w = J(a, "input", t[11]), d = !0);
    },
    p(y, [T]) {
      (!c || T & 2 && o !== (o = ce(y[1]))) && (a.value = o), y[2] ? _ ? _.p(y, T) : (_ = Ce(y), _.c(), _.m(r, f)) : _ && (_.d(1), _ = null), y[2] ? v && (_e(), j(v, 1, 1, () => {
        v = null;
      }), ve()) : v ? (v.p(y, T), T & 4 && $(v, 1)) : (v = Le(y), v.c(), $(v, 1), v.m(r, null)), y[2] ? m && (_e(), j(m, 1, 1, () => {
        m = null;
      }), ve()) : m ? (m.p(y, T), T & 4 && $(m, 1)) : (m = Oe(y), m.c(), $(m, 1), m.m(n, null));
    },
    i(y) {
      c || ($(v), $(m), c = !0);
    },
    o(y) {
      j(v), j(m), c = !1;
    },
    d(y) {
      y && b(e), _ && _.d(), v && v.d(), m && m.d(), d = !1, w();
    }
  };
}
function ce(t) {
  return JSON.stringify(t, null, 2);
}
function Kt(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function en(t, e, n) {
  let r, { editTemplateService: i = new Pe(Nt) } = e, s = i.template, l = i.result, u = null;
  function a(w) {
    i.setTemplateSource(w), n(1, s = i.template), n(0, l = i.result), n(2, u = i.error);
  }
  function o(w) {
    i.updateResultMergeFields(w), n(0, l = i.result);
  }
  function p() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function f() {
    i.submit(), window.alert("Form successfully submitted!");
  }
  function N(w) {
    i.addMergeField(w), n(1, s = i.template), n(0, l = i.result), n(2, u = i.error);
  }
  function c(w) {
    const _ = i.getMergeFieldItem(w);
    i.removeMergeField(_), n(1, s = i.template), n(0, l = i.result), n(2, u = i.error);
  }
  const d = (w) => a(w.currentTarget.value);
  return t.$$set = (w) => {
    "editTemplateService" in w && n(10, i = w.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, r = Kt(l) || "");
  }, [
    l,
    s,
    u,
    r,
    a,
    o,
    p,
    f,
    N,
    c,
    i,
    d
  ];
}
class tn extends V {
  constructor(e) {
    super(), U(this, e, en, Xt, z, { editTemplateService: 10 });
  }
}
class rn {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    W(this, "templateService");
    this.containerElement = n, this.templateService = new Pe(e), this.initialize();
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
    new tn({
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
  rn as default
};
