var He = Object.defineProperty;
var Qe = (t, e, n) => e in t ? He(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var W = (t, e, n) => (Qe(t, typeof e != "symbol" ? e + "" : e, n), n);
function A() {
}
function ze(t) {
  return t();
}
function Te() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(ze);
}
function fe(t) {
  return typeof t == "function";
}
function O(t, e) {
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
    return A;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function De(t, e, n) {
  t.$$.on_destroy.push(qe(e, n));
}
let de = !1;
function Ze() {
  de = !0;
}
function We() {
  de = !1;
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
    for (let u = 0; u < e.length; u++) {
      const h = e[u];
      h.claim_order !== void 0 && a.push(h);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let i = 0;
  for (let a = 0; a < e.length; a++) {
    const u = e[a].claim_order, h = (i > 0 && e[n[i]].claim_order <= u ? i + 1 : Xe(1, i, (I) => e[n[I]].claim_order, u)) - 1;
    r[a] = n[h] + 1;
    const c = h + 1;
    n[c] = a, i = Math.max(c, i);
  }
  const s = [], l = [];
  let o = e.length - 1;
  for (let a = n[i] + 1; a != 0; a = r[a - 1]) {
    for (s.push(e[a - 1]); o >= a; o--)
      l.push(e[o]);
    o--;
  }
  for (; o >= 0; o--)
    l.push(e[o]);
  s.reverse(), l.sort((a, u) => a.claim_order - u.claim_order);
  for (let a = 0, u = 0; a < l.length; a++) {
    for (; u < s.length && l[a].claim_order >= s[u].claim_order; )
      u++;
    const h = u < s.length ? s[u] : null;
    t.insertBefore(l[a], h);
  }
}
function p(t, e) {
  if (de) {
    for (Ke(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function x(t, e, n) {
  de && !n ? p(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function _(t) {
  t.parentNode.removeChild(t);
}
function et(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function E(t) {
  return document.createElement(t);
}
function re(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function F(t) {
  return document.createTextNode(t);
}
function C() {
  return F(" ");
}
function J(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function we(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function m(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function w(t) {
  return Array.from(t.childNodes);
}
function tt(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Re(t, e, n, r, i = !1) {
  tt(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const o = t[l];
      if (e(o)) {
        const a = n(o);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, i || (t.claim_info.last_index = l), o;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const o = t[l];
      if (e(o)) {
        const a = n(o);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, i ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, o;
      }
    }
    return r();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Ye(t, e, n, r) {
  return Re(t, (i) => i.nodeName === e, (i) => {
    const s = [];
    for (let l = 0; l < i.attributes.length; l++) {
      const o = i.attributes[l];
      n[o.name] || s.push(o.name);
    }
    s.forEach((l) => i.removeAttribute(l));
  }, () => r(e));
}
function M(t, e, n) {
  return Ye(t, e, n, E);
}
function ue(t, e, n) {
  return Ye(t, e, n, re);
}
function R(t, e) {
  return Re(
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
    () => F(e),
    !0
  );
}
function j(t) {
  return R(t, " ");
}
function Ee(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function $e(t, e) {
  t.value = e == null ? "" : e;
}
function Se(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Me;
function ne(t) {
  Me = t;
}
const te = [], ae = [], se = [], ge = [], nt = Promise.resolve();
let pe = !1;
function rt() {
  pe || (pe = !0, nt.then(Be));
}
function _e(t) {
  se.push(t);
}
function Ae(t) {
  ge.push(t);
}
const me = /* @__PURE__ */ new Set();
let le = 0;
function Be() {
  const t = Me;
  do {
    for (; le < te.length; ) {
      const e = te[le];
      le++, ne(e), it(e.$$);
    }
    for (ne(null), te.length = 0, le = 0; ae.length; )
      ae.pop()();
    for (let e = 0; e < se.length; e += 1) {
      const n = se[e];
      me.has(n) || (me.add(n), n());
    }
    se.length = 0;
  } while (te.length);
  for (; ge.length; )
    ge.pop()();
  pe = !1, me.clear(), ne(t);
}
function it(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(_e);
  }
}
const oe = /* @__PURE__ */ new Set();
let q;
function ve() {
  q = {
    r: 0,
    c: [],
    p: q
  };
}
function be() {
  q.r || K(q.c), q = q.p;
}
function $(t, e) {
  t && t.i && (oe.delete(t), t.i(e));
}
function S(t, e, n, r) {
  if (t && t.o) {
    if (oe.has(t))
      return;
    oe.add(t), q.c.push(() => {
      oe.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Ce(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function Y(t) {
  t && t.c();
}
function B(t, e) {
  t && t.l(e);
}
function k(t, e, n, r) {
  const { fragment: i, on_mount: s, on_destroy: l, after_update: o } = t.$$;
  i && i.m(e, n), r || _e(() => {
    const a = s.map(ze).filter(fe);
    l ? l.push(...a) : K(a), t.$$.on_mount = [];
  }), o.forEach(_e);
}
function L(t, e) {
  const n = t.$$;
  n.fragment !== null && (K(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function lt(t, e) {
  t.$$.dirty[0] === -1 && (te.push(t), rt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function U(t, e, n, r, i, s, l, o = [-1]) {
  const a = Me;
  ne(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: A,
    not_equal: i,
    bound: Te(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Te(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(u.root);
  let h = !1;
  if (u.ctx = n ? n(t, e.props || {}, (c, I, ...f) => {
    const d = f.length ? f[0] : I;
    return u.ctx && i(u.ctx[c], u.ctx[c] = d) && (!u.skip_bound && u.bound[c] && u.bound[c](d), h && lt(t, c)), I;
  }) : [], u.update(), h = !0, K(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      Ze();
      const c = w(e.target);
      u.fragment && u.fragment.l(c), c.forEach(_);
    } else
      u.fragment && u.fragment.c();
    e.intro && $(t.$$.fragment), k(t, e.target, e.anchor, e.customElement), We(), Be();
  }
  ne(a);
}
class V {
  $destroy() {
    L(this, 1), this.$destroy = A;
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
const st = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", ot = "A 'merge' property is required", ut = "Property 'merge' must be an array", at = "A 'find' property is required on every element inside 'merge'", ct = "Every 'find' property inside 'merge' must be of type string", ft = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", dt = "A 'replace' property is required on every element inside 'merge'", ht = "Unexpected error while parsing template JSON", mt = "Every element inside the 'merge' should be an object";
class Q extends Error {
  constructor(e) {
    super(e);
  }
}
function gt(t) {
  return typeof t == "object";
}
function he(t, e) {
  return t in e;
}
function ye(t, e) {
  return !he(t, e);
}
function pt(t, e) {
  return he(t, e) && !(e[t] instanceof Array);
}
function _t(t, e) {
  return he(t, e) && typeof e[t] != "string";
}
function vt(t, e) {
  const n = he(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function bt(t) {
  try {
    const e = JSON.parse(t);
    if (ye("merge", e))
      throw new Q(ot);
    if (pt("merge", e))
      throw new Q(ut);
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
    if (ye("find", n))
      throw new Q(at);
    if (ye("replace", n))
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
      e = ue(r, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var i = w(e);
      n = ue(i, "path", { d: !0 }), w(n).forEach(_), i.forEach(_), this.h();
    },
    h() {
      m(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), m(e, "class", "fill-current w-4 h-4 mr-2"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "viewBox", "0 0 20 20");
    },
    m(r, i) {
      x(r, e, i), p(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && _(e);
    }
  };
}
function Dt(t) {
  return [];
}
class $t extends V {
  constructor(e) {
    super(), U(this, e, Dt, Tt, O, {});
  }
}
function St(t) {
  let e, n, r, i;
  return n = new $t({}), {
    c() {
      e = E("a"), Y(n.$$.fragment), r = F(`
	Download`), this.h();
    },
    l(s) {
      e = M(s, "A", { href: !0, download: !0, class: !0 });
      var l = w(e);
      B(n.$$.fragment, l), r = R(l, `
	Download`), l.forEach(_), this.h();
    },
    h() {
      m(e, "href", t[0]), m(e, "download", "result.json"), m(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      x(s, e, l), k(n, e, null), p(e, r), i = !0;
    },
    p(s, [l]) {
      (!i || l & 1) && m(e, "href", s[0]);
    },
    i(s) {
      i || ($(n.$$.fragment, s), i = !0);
    },
    o(s) {
      S(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && _(e), L(n);
    }
  };
}
function At(t, e, n) {
  let { download: r = "" } = e;
  return t.$$set = (i) => {
    "download" in i && n(0, r = i.download);
  }, [r];
}
class Ct extends V {
  constructor(e) {
    super(), U(this, e, At, St, O, { download: 0 });
  }
}
function jt(t) {
  let e, n, r, i;
  return {
    c() {
      e = E("button"), n = F("Submit"), this.h();
    },
    l(s) {
      e = M(s, "BUTTON", { class: !0 });
      var l = w(e);
      n = R(l, "Submit"), l.forEach(_), this.h();
    },
    h() {
      m(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      x(s, e, l), p(e, n), r || (i = J(e, "click", function() {
        fe(t[0]) && t[0].apply(this, arguments);
      }), r = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: A,
    o: A,
    d(s) {
      s && _(e), r = !1, i();
    }
  };
}
function xt(t, e, n) {
  let { submit: r } = e;
  return t.$$set = (i) => {
    "submit" in i && n(0, r = i.submit);
  }, [r];
}
class Ft extends V {
  constructor(e) {
    super(), U(this, e, xt, jt, O, { submit: 0 });
  }
}
function kt(t) {
  let e, n, r, i, s;
  return n = new Ct({ props: { download: t[0] } }), i = new Ft({ props: { submit: t[1] } }), {
    c() {
      e = E("div"), Y(n.$$.fragment), r = C(), Y(i.$$.fragment), this.h();
    },
    l(l) {
      e = M(l, "DIV", { class: !0 });
      var o = w(e);
      B(n.$$.fragment, o), r = j(o), B(i.$$.fragment, o), o.forEach(_), this.h();
    },
    h() {
      m(e, "class", "flex justify-between pt-4");
    },
    m(l, o) {
      x(l, e, o), k(n, e, null), p(e, r), k(i, e, null), s = !0;
    },
    p(l, [o]) {
      const a = {};
      o & 1 && (a.download = l[0]), n.$set(a);
      const u = {};
      o & 2 && (u.submit = l[1]), i.$set(u);
    },
    i(l) {
      s || ($(n.$$.fragment, l), $(i.$$.fragment, l), s = !0);
    },
    o(l) {
      S(n.$$.fragment, l), S(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && _(e), L(n), L(i);
    }
  };
}
function Lt(t, e, n) {
  let { download: r = "" } = e, { submit: i } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, r = s.download), "submit" in s && n(1, i = s.submit);
  }, [r, i];
}
class Ot extends V {
  constructor(e) {
    super(), U(this, e, Lt, kt, O, { download: 0, submit: 1 });
  }
}
const X = [];
function je(t, e = A) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(o) {
    if (O(t, o) && (t = o, n)) {
      const a = !X.length;
      for (const u of r)
        u[1](), X.push(u, t);
      if (a) {
        for (let u = 0; u < X.length; u += 2)
          X[u][0](X[u + 1]);
        X.length = 0;
      }
    }
  }
  function s(o) {
    i(o(t));
  }
  function l(o, a = A) {
    const u = [o, a];
    return r.add(u), r.size === 1 && (n = e(i) || A), o(t), () => {
      r.delete(u), r.size === 0 && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: l };
}
function zt(t) {
  let e, n, r;
  return {
    c() {
      e = E("input"), this.h();
    },
    l(i) {
      e = M(i, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      m(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), m(e, "type", "text");
    },
    m(i, s) {
      x(i, e, s), $e(e, t[0]), n || (r = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(i, [s]) {
      s & 1 && e.value !== i[0] && $e(e, i[0]);
    },
    i: A,
    o: A,
    d(i) {
      i && _(e), n = !1, K(r);
    }
  };
}
function Rt(t, e, n) {
  let { value: r } = e, { onFocus: i } = e;
  function s() {
    r = this.value, n(0, r);
  }
  const l = (o) => i(o.currentTarget);
  return t.$$set = (o) => {
    "value" in o && n(0, r = o.value), "onFocus" in o && n(1, i = o.onFocus);
  }, [r, i, s, l];
}
class xe extends V {
  constructor(e) {
    super(), U(this, e, Rt, zt, O, { value: 0, onFocus: 1 });
  }
}
function Yt(t) {
  let e, n, r, i, s, l, o, a, u, h, c, I, f, d, N, b, v, g;
  function y(D) {
    t[7](D);
  }
  let T = { onFocus: t[6] };
  t[1] !== void 0 && (T.value = t[1]), o = new xe({ props: T }), ae.push(() => Ce(o, "value", y));
  function z(D) {
    t[9](D);
  }
  let H = { onFocus: t[8] };
  return t[2] !== void 0 && (H.value = t[2]), h = new xe({ props: H }), ae.push(() => Ce(h, "value", z)), {
    c() {
      e = E("div"), n = E("div"), r = E("h1"), i = F("Add a new merge field"), s = C(), l = E("div"), Y(o.$$.fragment), u = C(), Y(h.$$.fragment), I = C(), f = E("div"), d = E("button"), N = F("Add"), this.h();
    },
    l(D) {
      e = M(D, "DIV", {});
      var P = w(e);
      n = M(P, "DIV", {});
      var G = w(n);
      r = M(G, "H1", { class: !0 });
      var ee = w(r);
      i = R(ee, "Add a new merge field"), ee.forEach(_), s = j(G), l = M(G, "DIV", { class: !0 });
      var Z = w(l);
      B(o.$$.fragment, Z), u = j(Z), B(h.$$.fragment, Z), I = j(Z), f = M(Z, "DIV", { class: !0 });
      var Ie = w(f);
      d = M(Ie, "BUTTON", { class: !0 });
      var Ne = w(d);
      N = R(Ne, "Add"), Ne.forEach(_), Ie.forEach(_), Z.forEach(_), G.forEach(_), P.forEach(_), this.h();
    },
    h() {
      m(r, "class", "text-teal-400 px-1"), m(d, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), m(f, "class", "flex flex-row-reverse"), m(l, "class", "border p-4 mb-6");
    },
    m(D, P) {
      x(D, e, P), p(e, n), p(n, r), p(r, i), p(n, s), p(n, l), k(o, l, null), p(l, u), k(h, l, null), p(l, I), p(l, f), p(f, d), p(d, N), b = !0, v || (g = J(d, "click", we(t[10])), v = !0);
    },
    p(D, [P]) {
      const G = {};
      !a && P & 2 && (a = !0, G.value = D[1], Ae(() => a = !1)), o.$set(G);
      const ee = {};
      !c && P & 4 && (c = !0, ee.value = D[2], Ae(() => c = !1)), h.$set(ee);
    },
    i(D) {
      b || ($(o.$$.fragment, D), $(h.$$.fragment, D), b = !0);
    },
    o(D) {
      S(o.$$.fragment, D), S(h.$$.fragment, D), b = !1;
    },
    d(D) {
      D && _(e), L(o), L(h), v = !1, g();
    }
  };
}
function Bt(t, e, n) {
  let r, i, s = je("find");
  De(t, s, (d) => n(1, r = d));
  let l = je("replace");
  De(t, l, (d) => n(2, i = d));
  let o = (d) => d.set(""), { addField: a } = e;
  const u = () => o(s);
  function h(d) {
    r = d, s.set(r);
  }
  const c = () => o(l);
  function I(d) {
    i = d, l.set(i);
  }
  const f = () => a({ find: r, replace: i });
  return t.$$set = (d) => {
    "addField" in d && n(0, a = d.addField);
  }, [
    a,
    r,
    i,
    s,
    l,
    o,
    u,
    h,
    c,
    I,
    f
  ];
}
class Ut extends V {
  constructor(e) {
    super(), U(this, e, Bt, Yt, O, { addField: 0 });
  }
}
function Vt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(r) {
      e = ue(r, "svg", { xmlns: !0, viewBox: !0 });
      var i = w(e);
      n = ue(i, "path", { fill: !0, d: !0 }), w(n).forEach(_), i.forEach(_), this.h();
    },
    h() {
      m(n, "fill", "white"), m(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "viewBox", "0 0 16 16");
    },
    m(r, i) {
      x(r, e, i), p(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && _(e);
    }
  };
}
function Pt(t) {
  return [];
}
class Ht extends V {
  constructor(e) {
    super(), U(this, e, Pt, Vt, O, {});
  }
}
function Qt(t) {
  let e, n, r, i, s;
  return n = new Ht({}), {
    c() {
      e = E("button"), Y(n.$$.fragment), this.h();
    },
    l(l) {
      e = M(l, "BUTTON", { class: !0 });
      var o = w(e);
      B(n.$$.fragment, o), o.forEach(_), this.h();
    },
    h() {
      m(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(l, o) {
      x(l, e, o), k(n, e, null), r = !0, i || (s = J(e, "click", we(function() {
        fe(t[0]) && t[0].apply(this, arguments);
      })), i = !0);
    },
    p(l, [o]) {
      t = l;
    },
    i(l) {
      r || ($(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && _(e), L(n), i = !1, s();
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
    super(), U(this, e, Jt, Qt, O, { onClick: 0 });
  }
}
function Fe(t, e, n) {
  const r = t.slice();
  return r[6] = e[n], r;
}
function ke(t) {
  let e, n, r = t[6].find + "", i, s, l, o, a, u, h, c, I, f, d, N;
  function b(...g) {
    return t[4](t[6], ...g);
  }
  function v() {
    return t[5](t[6]);
  }
  return c = new Gt({ props: { onClick: v } }), {
    c() {
      e = E("div"), n = E("label"), i = F(r), l = C(), o = E("input"), h = C(), Y(c.$$.fragment), I = C(), this.h();
    },
    l(g) {
      e = M(g, "DIV", { "data-cy": !0, class: !0 });
      var y = w(e);
      n = M(y, "LABEL", { for: !0, class: !0 });
      var T = w(n);
      i = R(T, r), T.forEach(_), l = j(y), o = M(y, "INPUT", { class: !0, id: !0, type: !0 }), h = j(y), B(c.$$.fragment, y), I = j(y), y.forEach(_), this.h();
    },
    h() {
      m(n, "for", s = t[6].find), m(n, "class", "block mb-2 monospace"), m(o, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), m(o, "id", a = t[6].find), m(o, "type", "text"), o.value = u = t[6].replace, m(e, "data-cy", "label-input"), m(e, "class", "relative");
    },
    m(g, y) {
      x(g, e, y), p(e, n), p(n, i), p(e, l), p(e, o), p(e, h), k(c, e, null), p(e, I), f = !0, d || (N = J(o, "input", b), d = !0);
    },
    p(g, y) {
      t = g, (!f || y & 1) && r !== (r = t[6].find + "") && Ee(i, r), (!f || y & 1 && s !== (s = t[6].find)) && m(n, "for", s), (!f || y & 1 && a !== (a = t[6].find)) && m(o, "id", a), (!f || y & 1 && u !== (u = t[6].replace) && o.value !== u) && (o.value = u);
      const T = {};
      y & 9 && (T.onClick = v), c.$set(T);
    },
    i(g) {
      f || ($(c.$$.fragment, g), f = !0);
    },
    o(g) {
      S(c.$$.fragment, g), f = !1;
    },
    d(g) {
      g && _(e), L(c), d = !1, N();
    }
  };
}
function qt(t) {
  let e, n, r, i, s, l, o, a, u, h = t[0], c = [];
  for (let f = 0; f < h.length; f += 1)
    c[f] = ke(Fe(t, h, f));
  const I = (f) => S(c[f], 1, 1, () => {
    c[f] = null;
  });
  return a = new Ut({ props: { addField: t[2] } }), {
    c() {
      e = E("div"), n = E("div"), r = E("h1"), i = F("Modify Merge Values"), s = C(), l = E("div");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      o = C(), Y(a.$$.fragment), this.h();
    },
    l(f) {
      e = M(f, "DIV", {});
      var d = w(e);
      n = M(d, "DIV", { "data-cy": !0 });
      var N = w(n);
      r = M(N, "H1", { class: !0 });
      var b = w(r);
      i = R(b, "Modify Merge Values"), b.forEach(_), s = j(N), l = M(N, "DIV", { class: !0 });
      var v = w(l);
      for (let g = 0; g < c.length; g += 1)
        c[g].l(v);
      v.forEach(_), N.forEach(_), o = j(d), B(a.$$.fragment, d), d.forEach(_), this.h();
    },
    h() {
      m(r, "class", "text-teal-400 px-1"), m(l, "class", "border p-4 mb-6"), m(n, "data-cy", "merge-fields-input-section");
    },
    m(f, d) {
      x(f, e, d), p(e, n), p(n, r), p(r, i), p(n, s), p(n, l);
      for (let N = 0; N < c.length; N += 1)
        c[N].m(l, null);
      p(e, o), k(a, e, null), u = !0;
    },
    p(f, [d]) {
      if (d & 11) {
        h = f[0];
        let b;
        for (b = 0; b < h.length; b += 1) {
          const v = Fe(f, h, b);
          c[b] ? (c[b].p(v, d), $(c[b], 1)) : (c[b] = ke(v), c[b].c(), $(c[b], 1), c[b].m(l, null));
        }
        for (ve(), b = h.length; b < c.length; b += 1)
          I(b);
        be();
      }
      const N = {};
      d & 4 && (N.addField = f[2]), a.$set(N);
    },
    i(f) {
      if (!u) {
        for (let d = 0; d < h.length; d += 1)
          $(c[d]);
        $(a.$$.fragment, f), u = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let d = 0; d < c.length; d += 1)
        S(c[d]);
      S(a.$$.fragment, f), u = !1;
    },
    d(f) {
      f && _(e), et(c, f), L(a);
    }
  };
}
function Zt(t, e, n) {
  let { fields: r = [] } = e, { handleFormInput: i } = e, { addField: s } = e, { removeField: l } = e;
  const o = (u, h) => i({
    find: u.find,
    replace: h.currentTarget.value
  }), a = (u) => l(u);
  return t.$$set = (u) => {
    "fields" in u && n(0, r = u.fields), "handleFormInput" in u && n(1, i = u.handleFormInput), "addField" in u && n(2, s = u.addField), "removeField" in u && n(3, l = u.removeField);
  }, [r, i, s, l, o, a];
}
class Wt extends V {
  constructor(e) {
    super(), U(this, e, Zt, qt, O, {
      fields: 0,
      handleFormInput: 1,
      addField: 2,
      removeField: 3
    });
  }
}
function Xt(t) {
  let e, n, r, i;
  return {
    c() {
      e = E("button"), n = F("Reset"), this.h();
    },
    l(s) {
      e = M(s, "BUTTON", { class: !0 });
      var l = w(e);
      n = R(l, "Reset"), l.forEach(_), this.h();
    },
    h() {
      m(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(s, l) {
      x(s, e, l), p(e, n), r || (i = J(e, "click", we(function() {
        fe(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: A,
    o: A,
    d(s) {
      s && _(e), r = !1, i();
    }
  };
}
function Kt(t, e, n) {
  let { onClick: r } = e;
  return t.$$set = (i) => {
    "onClick" in i && n(0, r = i.onClick);
  }, [r];
}
class en extends V {
  constructor(e) {
    super(), U(this, e, Kt, Xt, O, { onClick: 0 });
  }
}
function tn(t) {
  let e, n, r, i, s, l, o, a;
  return o = new en({ props: { onClick: t[0] } }), {
    c() {
      e = E("div"), n = E("p"), r = E("span"), i = F(t[2]), s = C(), l = E("div"), Y(o.$$.fragment), this.h();
    },
    l(u) {
      e = M(u, "DIV", {});
      var h = w(e);
      n = M(h, "P", { "data-cy": !0, class: !0 });
      var c = w(n);
      r = M(c, "SPAN", { class: !0 });
      var I = w(r);
      i = R(I, t[2]), I.forEach(_), c.forEach(_), s = j(h), l = M(h, "DIV", { class: !0 });
      var f = w(l);
      B(o.$$.fragment, f), f.forEach(_), h.forEach(_), this.h();
    },
    h() {
      m(r, "class", "monospace text-orange-900"), m(n, "data-cy", "template-input-error"), m(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), m(l, "class", "flex flex-row-reverse "), Se(e, "hidden", !t[1]);
    },
    m(u, h) {
      x(u, e, h), p(e, n), p(n, r), p(r, i), p(e, s), p(e, l), k(o, l, null), a = !0;
    },
    p(u, [h]) {
      (!a || h & 4) && Ee(i, u[2]);
      const c = {};
      h & 1 && (c.onClick = u[0]), o.$set(c), (!a || h & 2) && Se(e, "hidden", !u[1]);
    },
    i(u) {
      a || ($(o.$$.fragment, u), a = !0);
    },
    o(u) {
      S(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && _(e), L(o);
    }
  };
}
function nn(t, e, n) {
  let r, { onClick: i } = e, { error: s } = e;
  return t.$$set = (l) => {
    "onClick" in l && n(0, i = l.onClick), "error" in l && n(1, s = l.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, r = s && s.message || "");
  }, [i, s, r];
}
class rn extends V {
  constructor(e) {
    super(), U(this, e, nn, tn, O, { onClick: 0, error: 1 });
  }
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
      Y(e.$$.fragment);
    },
    l(r) {
      B(e.$$.fragment, r);
    },
    m(r, i) {
      k(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & 2 && (s.fields = r[1].merge), e.$set(s);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Oe(t) {
  let e, n, r, i, s, l, o, a, u, h = ce(t[0]) + "", c, I, f, d, N, b;
  return f = new Ot({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = E("div"), n = E("h1"), r = F("Result"), i = C(), s = E("abbr"), l = E("img"), a = C(), u = E("p"), c = F(h), I = C(), Y(f.$$.fragment), this.h();
    },
    l(v) {
      e = M(v, "DIV", { "data-cy": !0, class: !0 });
      var g = w(e);
      n = M(g, "H1", { class: !0 });
      var y = w(n);
      r = R(y, "Result"), y.forEach(_), i = j(g), s = M(g, "ABBR", { title: !0, class: !0 });
      var T = w(s);
      l = M(T, "IMG", { src: !0, alt: !0, class: !0 }), T.forEach(_), a = j(g), u = M(g, "P", { "data-cy": !0, class: !0 });
      var z = w(u);
      c = R(z, h), z.forEach(_), I = j(g), B(f.$$.fragment, g), g.forEach(_), this.h();
    },
    h() {
      m(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Je(l.src, o = st) || m(l, "src", o), m(l, "alt", "copy-button"), m(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), m(s, "title", "Copy to clipboard"), m(s, "class", "svelte-r93edu"), m(u, "data-cy", "result"), m(u, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), m(e, "data-cy", "result-section"), m(e, "class", "svelte-r93edu");
    },
    m(v, g) {
      x(v, e, g), p(e, n), p(n, r), p(e, i), p(e, s), p(s, l), p(e, a), p(e, u), p(u, c), p(e, I), k(f, e, null), d = !0, N || (b = J(l, "click", t[6]), N = !0);
    },
    p(v, g) {
      (!d || g & 1) && h !== (h = ce(v[0]) + "") && Ee(c, h);
      const y = {};
      g & 8 && (y.download = v[3]), f.$set(y);
    },
    i(v) {
      d || ($(f.$$.fragment, v), d = !0);
    },
    o(v) {
      S(f.$$.fragment, v), d = !1;
    },
    d(v) {
      v && _(e), L(f), N = !1, b();
    }
  };
}
function ln(t) {
  let e, n, r, i, s, l, o, a, u, h, c, I, f, d, N, b;
  c = new rn({
    props: {
      error: t[2],
      onClick: t[10]
    }
  });
  let v = !t[2] && Le(t), g = !t[2] && Oe(t);
  return {
    c() {
      e = E("div"), n = E("section"), r = E("form"), i = E("div"), s = E("label"), l = F("Paste template"), o = C(), a = E("textarea"), h = C(), Y(c.$$.fragment), I = C(), v && v.c(), f = C(), g && g.c(), this.h();
    },
    l(y) {
      e = M(y, "DIV", { class: !0 });
      var T = w(e);
      n = M(T, "SECTION", { "data-cy": !0, class: !0 });
      var z = w(n);
      r = M(z, "FORM", { class: !0 });
      var H = w(r);
      i = M(H, "DIV", { "data-cy": !0, class: !0 });
      var D = w(i);
      s = M(D, "LABEL", { for: !0, class: !0 });
      var P = w(s);
      l = R(P, "Paste template"), P.forEach(_), o = j(D), a = M(D, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), w(a).forEach(_), D.forEach(_), h = j(H), B(c.$$.fragment, H), I = j(H), v && v.l(H), H.forEach(_), f = j(z), g && g.l(z), z.forEach(_), T.forEach(_), this.h();
    },
    h() {
      m(s, "for", "json-input"), m(s, "class", "text-teal-400 px-1 svelte-r93edu"), m(a, "data-cy", "template-input"), m(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), m(a, "id", "json-input"), a.value = u = ce(t[1]), m(i, "data-cy", "template-input-section"), m(i, "class", "mb-6 svelte-r93edu"), m(r, "class", "svelte-r93edu"), m(n, "data-cy", "form-container"), m(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), m(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(y, T) {
      x(y, e, T), p(e, n), p(n, r), p(r, i), p(i, s), p(s, l), p(i, o), p(i, a), p(r, h), k(c, r, null), p(r, I), v && v.m(r, null), p(n, f), g && g.m(n, null), d = !0, N || (b = J(a, "input", t[12]), N = !0);
    },
    p(y, [T]) {
      (!d || T & 2 && u !== (u = ce(y[1]))) && (a.value = u);
      const z = {};
      T & 4 && (z.error = y[2]), c.$set(z), y[2] ? v && (ve(), S(v, 1, 1, () => {
        v = null;
      }), be()) : v ? (v.p(y, T), T & 4 && $(v, 1)) : (v = Le(y), v.c(), $(v, 1), v.m(r, null)), y[2] ? g && (ve(), S(g, 1, 1, () => {
        g = null;
      }), be()) : g ? (g.p(y, T), T & 4 && $(g, 1)) : (g = Oe(y), g.c(), $(g, 1), g.m(n, null));
    },
    i(y) {
      d || ($(c.$$.fragment, y), $(v), $(g), d = !0);
    },
    o(y) {
      S(c.$$.fragment, y), S(v), S(g), d = !1;
    },
    d(y) {
      y && _(e), L(c), v && v.d(), g && g.d(), N = !1, b();
    }
  };
}
function ce(t) {
  return JSON.stringify(t, null, 2);
}
function sn(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function on(t, e, n) {
  let r, { editTemplateService: i = new Pe(Nt) } = e, s = i.template, l = i.result, o = null;
  function a(b) {
    i.setTemplateSource(b), n(1, s = i.template), n(0, l = i.result), n(2, o = i.error);
  }
  function u(b) {
    i.updateResultMergeFields(b), n(0, l = i.result);
  }
  function h() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function c() {
    i.submit(), window.alert("Form successfully submitted!");
  }
  function I(b) {
    i.addMergeField(b), n(1, s = i.template), n(0, l = i.result), n(2, o = i.error);
  }
  function f(b) {
    const v = i.getMergeFieldItem(b);
    i.removeMergeField(v), n(1, s = i.template), n(0, l = i.result), n(2, o = i.error);
  }
  function d() {
    i.setTemplateSource(i.result), n(1, s = i.template), n(0, l = i.result), n(2, o = i.error);
  }
  const N = (b) => a(b.currentTarget.value);
  return t.$$set = (b) => {
    "editTemplateService" in b && n(11, i = b.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, r = sn(l) || "");
  }, [
    l,
    s,
    o,
    r,
    a,
    u,
    h,
    c,
    I,
    f,
    d,
    i,
    N
  ];
}
class un extends V {
  constructor(e) {
    super(), U(this, e, on, ln, O, { editTemplateService: 11 });
  }
}
class cn {
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
    new un({
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
  cn as default
};
