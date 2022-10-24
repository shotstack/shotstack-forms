var Pe = Object.defineProperty;
var He = (t, e, n) => e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var W = (t, e, n) => (He(t, typeof e != "symbol" ? e + "" : e, n), n);
function $() {
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
function de(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ie;
function Qe(t, e) {
  return ie || (ie = document.createElement("a")), ie.href = e, t === ie.href;
}
function Je(t) {
  return Object.keys(t).length === 0;
}
function Ge(t, ...e) {
  if (t == null)
    return $;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Te(t, e, n) {
  t.$$.on_destroy.push(Ge(e, n));
}
let he = !1;
function qe() {
  he = !0;
}
function Ze() {
  he = !1;
}
function We(t, e, n, i) {
  for (; t < e; ) {
    const r = t + (e - t >> 1);
    n(r) <= i ? t = r + 1 : e = r;
  }
  return t;
}
function Xe(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const u = [];
    for (let a = 0; a < e.length; a++) {
      const c = e[a];
      c.claim_order !== void 0 && u.push(c);
    }
    e = u;
  }
  const n = new Int32Array(e.length + 1), i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let u = 0; u < e.length; u++) {
    const a = e[u].claim_order, c = (r > 0 && e[n[r]].claim_order <= a ? r + 1 : We(1, r, (M) => e[n[M]].claim_order, a)) - 1;
    i[u] = n[c] + 1;
    const f = c + 1;
    n[f] = u, r = Math.max(f, r);
  }
  const s = [], l = [];
  let o = e.length - 1;
  for (let u = n[r] + 1; u != 0; u = i[u - 1]) {
    for (s.push(e[u - 1]); o >= u; o--)
      l.push(e[o]);
    o--;
  }
  for (; o >= 0; o--)
    l.push(e[o]);
  s.reverse(), l.sort((u, a) => u.claim_order - a.claim_order);
  for (let u = 0, a = 0; u < l.length; u++) {
    for (; a < s.length && l[u].claim_order >= s[a].claim_order; )
      a++;
    const c = a < s.length ? s[a] : null;
    t.insertBefore(l[u], c);
  }
}
function p(t, e) {
  if (he) {
    for (Xe(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function x(t, e, n) {
  he && !n ? p(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function _(t) {
  t.parentNode.removeChild(t);
}
function Ke(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function w(t) {
  return document.createElement(t);
}
function re(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function k(t) {
  return document.createTextNode(t);
}
function A() {
  return k(" ");
}
function J(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ye(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function m(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function y(t) {
  return Array.from(t.childNodes);
}
function et(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Le(t, e, n, i, r = !1) {
  et(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const o = t[l];
      if (e(o)) {
        const u = n(o);
        return u === void 0 ? t.splice(l, 1) : t[l] = u, r || (t.claim_info.last_index = l), o;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const o = t[l];
      if (e(o)) {
        const u = n(o);
        return u === void 0 ? t.splice(l, 1) : t[l] = u, r ? u === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, o;
      }
    }
    return i();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Oe(t, e, n, i) {
  return Le(t, (r) => r.nodeName === e, (r) => {
    const s = [];
    for (let l = 0; l < r.attributes.length; l++) {
      const o = r.attributes[l];
      n[o.name] || s.push(o.name);
    }
    s.forEach((l) => r.removeAttribute(l));
  }, () => i(e));
}
function E(t, e, n) {
  return Oe(t, e, n, w);
}
function ue(t, e, n) {
  return Oe(t, e, n, re);
}
function R(t, e) {
  return Le(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length)
          return n.splitText(i.length);
      } else
        n.data = i;
    },
    () => k(e),
    !0
  );
}
function C(t) {
  return R(t, " ");
}
function we(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function De(t, e) {
  t.value = e == null ? "" : e;
}
function ae(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Ee;
function ne(t) {
  Ee = t;
}
const te = [], ce = [], se = [], pe = [], tt = Promise.resolve();
let _e = !1;
function nt() {
  _e || (_e = !0, tt.then(ze));
}
function ve(t) {
  se.push(t);
}
function $e(t) {
  pe.push(t);
}
const ge = /* @__PURE__ */ new Set();
let le = 0;
function ze() {
  const t = Ee;
  do {
    for (; le < te.length; ) {
      const e = te[le];
      le++, ne(e), rt(e.$$);
    }
    for (ne(null), te.length = 0, le = 0; ce.length; )
      ce.pop()();
    for (let e = 0; e < se.length; e += 1) {
      const n = se[e];
      ge.has(n) || (ge.add(n), n());
    }
    se.length = 0;
  } while (te.length);
  for (; pe.length; )
    pe.pop()();
  _e = !1, ge.clear(), ne(t);
}
function rt(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ve);
  }
}
const oe = /* @__PURE__ */ new Set();
let q;
function Ye() {
  q = {
    r: 0,
    c: [],
    p: q
  };
}
function Re() {
  q.r || K(q.c), q = q.p;
}
function D(t, e) {
  t && t.i && (oe.delete(t), t.i(e));
}
function j(t, e, n, i) {
  if (t && t.o) {
    if (oe.has(t))
      return;
    oe.add(t), q.c.push(() => {
      oe.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Se(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function B(t) {
  t && t.c();
}
function U(t, e) {
  t && t.l(e);
}
function L(t, e, n, i) {
  const { fragment: r, on_mount: s, on_destroy: l, after_update: o } = t.$$;
  r && r.m(e, n), i || ve(() => {
    const u = s.map(ke).filter(de);
    l ? l.push(...u) : K(u), t.$$.on_mount = [];
  }), o.forEach(ve);
}
function O(t, e) {
  const n = t.$$;
  n.fragment !== null && (K(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function it(t, e) {
  t.$$.dirty[0] === -1 && (te.push(t), nt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function V(t, e, n, i, r, s, l, o = [-1]) {
  const u = Ee;
  ne(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: $,
    not_equal: r,
    bound: Ne(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: Ne(),
    dirty: o,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(a.root);
  let c = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, M, ...d) => {
    const h = d.length ? d[0] : M;
    return a.ctx && r(a.ctx[f], a.ctx[f] = h) && (!a.skip_bound && a.bound[f] && a.bound[f](h), c && it(t, f)), M;
  }) : [], a.update(), c = !0, K(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      qe();
      const f = y(e.target);
      a.fragment && a.fragment.l(f), f.forEach(_);
    } else
      a.fragment && a.fragment.c();
    e.intro && D(t.$$.fragment), L(t, e.target, e.anchor, e.customElement), Ze(), ze();
  }
  ne(u);
}
class P {
  $destroy() {
    O(this, 1), this.$destroy = $;
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Je(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const lt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", st = "A 'merge' property is required", ot = "Property 'merge' must be an array", ut = "A 'find' property is required on every element inside 'merge'", at = "Every 'find' property inside 'merge' must be of type string", ct = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", ft = "A 'replace' property is required on every element inside 'merge'", dt = "Unexpected error while parsing template JSON", ht = "Every element inside the 'merge' should be an object";
class Q extends Error {
  constructor(e) {
    super(e);
  }
}
function mt(t) {
  return typeof t == "object";
}
function me(t, e) {
  return t in e;
}
function be(t, e) {
  return !me(t, e);
}
function gt(t, e) {
  return me(t, e) && !(e[t] instanceof Array);
}
function pt(t, e) {
  return me(t, e) && typeof e[t] != "string";
}
function _t(t, e) {
  const n = me(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function vt(t) {
  try {
    const e = JSON.parse(t);
    if (be("merge", e))
      throw new Q(st);
    if (gt("merge", e))
      throw new Q(ot);
    const { merge: n } = e, i = bt(n);
    return { ...e, merge: i };
  } catch (e) {
    throw Be(e);
  }
}
function bt(t) {
  return t.map((n) => {
    if (!mt(n))
      throw new Q(ht);
    if (be("find", n))
      throw new Q(ut);
    if (be("replace", n))
      throw new Q(ft);
    if (pt("find", n))
      throw new Q(at);
    if (_t("find", n))
      throw new Q(ct);
    return n;
  }).map(({ find: n, replace: i }) => ({
    find: n,
    replace: Ue(i)
  }));
}
function yt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Be(t) {
  return t instanceof Error ? t : yt(t) ? new Q(t.message) : new Q(dt);
}
function Ue(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Ve {
  constructor(e) {
    W(this, "template");
    W(this, "_result");
    W(this, "_error");
    W(this, "handlers");
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = { change: [], submit: [], error: [this.logger] }, this.setTemplateSource(e);
  }
  set error(e) {
    const n = this._error && { ...this._error } || null;
    this._error = e, e !== null && this.handlers.error.forEach((i) => i(e, n));
  }
  get error() {
    return this._error;
  }
  set result(e) {
    const n = { ...this._result };
    this._result = e, this.handlers.change.forEach((i) => i(e, n));
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
      [e]: this.handlers[e].filter((i) => i !== n)
    };
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const n = vt(Ue(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const i = Be(n);
      this.error = i;
    }
  }
  updateResultMergeFields(e, n) {
    const i = n || this.getMergeFieldItem({ find: e.find }), r = this.result.merge.map((s) => s === i ? e : s);
    return this.result = { ...this.result, merge: r }, r;
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
    const n = function(i) {
      let r;
      for (r in e)
        if (i[r] !== e[r])
          return !1;
      return !0;
    };
    return this.result.merge.find(n);
  }
}
const wt = [
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
            style: "future"
          },
          start: 0,
          length: 5
        }
      ]
    }
  ]
}, Mt = {
  format: "mp4",
  resolution: "hd"
}, It = {
  merge: wt,
  timeline: Et,
  output: Mt
};
function Nt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = ue(i, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var r = y(e);
      n = ue(r, "path", { d: !0 }), y(n).forEach(_), r.forEach(_), this.h();
    },
    h() {
      m(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), m(e, "class", "fill-current w-4 h-4 mr-2"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "viewBox", "0 0 20 20");
    },
    m(i, r) {
      x(i, e, r), p(e, n);
    },
    p: $,
    i: $,
    o: $,
    d(i) {
      i && _(e);
    }
  };
}
function Tt(t) {
  return [];
}
class Dt extends P {
  constructor(e) {
    super(), V(this, e, Tt, Nt, z, {});
  }
}
function $t(t) {
  let e, n, i, r;
  return n = new Dt({}), {
    c() {
      e = w("a"), B(n.$$.fragment), i = k(`
	Download`), this.h();
    },
    l(s) {
      e = E(s, "A", { href: !0, download: !0, class: !0 });
      var l = y(e);
      U(n.$$.fragment, l), i = R(l, `
	Download`), l.forEach(_), this.h();
    },
    h() {
      m(e, "href", t[0]), m(e, "download", "result.json"), m(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      x(s, e, l), L(n, e, null), p(e, i), r = !0;
    },
    p(s, [l]) {
      (!r || l & 1) && m(e, "href", s[0]);
    },
    i(s) {
      r || (D(n.$$.fragment, s), r = !0);
    },
    o(s) {
      j(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && _(e), O(n);
    }
  };
}
function St(t, e, n) {
  let { download: i = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, i = r.download);
  }, [i];
}
class At extends P {
  constructor(e) {
    super(), V(this, e, St, $t, z, { download: 0 });
  }
}
function Ct(t) {
  let e, n, i, r;
  return {
    c() {
      e = w("button"), n = k("Submit"), this.h();
    },
    l(s) {
      e = E(s, "BUTTON", { class: !0 });
      var l = y(e);
      n = R(l, "Submit"), l.forEach(_), this.h();
    },
    h() {
      m(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      x(s, e, l), p(e, n), i || (r = J(e, "click", function() {
        de(t[0]) && t[0].apply(this, arguments);
      }), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: $,
    o: $,
    d(s) {
      s && _(e), i = !1, r();
    }
  };
}
function jt(t, e, n) {
  let { submit: i } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, i = r.submit);
  }, [i];
}
class xt extends P {
  constructor(e) {
    super(), V(this, e, jt, Ct, z, { submit: 0 });
  }
}
function Ft(t) {
  let e, n, i, r, s;
  return n = new At({ props: { download: t[0] } }), r = new xt({ props: { submit: t[1] } }), {
    c() {
      e = w("div"), B(n.$$.fragment), i = A(), B(r.$$.fragment), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var o = y(e);
      U(n.$$.fragment, o), i = C(o), U(r.$$.fragment, o), o.forEach(_), this.h();
    },
    h() {
      m(e, "class", "flex justify-between pt-4");
    },
    m(l, o) {
      x(l, e, o), L(n, e, null), p(e, i), L(r, e, null), s = !0;
    },
    p(l, [o]) {
      const u = {};
      o & 1 && (u.download = l[0]), n.$set(u);
      const a = {};
      o & 2 && (a.submit = l[1]), r.$set(a);
    },
    i(l) {
      s || (D(n.$$.fragment, l), D(r.$$.fragment, l), s = !0);
    },
    o(l) {
      j(n.$$.fragment, l), j(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && _(e), O(n), O(r);
    }
  };
}
function kt(t, e, n) {
  let { download: i = "" } = e, { submit: r } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, i = s.download), "submit" in s && n(1, r = s.submit);
  }, [i, r];
}
class Lt extends P {
  constructor(e) {
    super(), V(this, e, kt, Ft, z, { download: 0, submit: 1 });
  }
}
const X = [];
function Ae(t, e = $) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (z(t, o) && (t = o, n)) {
      const u = !X.length;
      for (const a of i)
        a[1](), X.push(a, t);
      if (u) {
        for (let a = 0; a < X.length; a += 2)
          X[a][0](X[a + 1]);
        X.length = 0;
      }
    }
  }
  function s(o) {
    r(o(t));
  }
  function l(o, u = $) {
    const a = [o, u];
    return i.add(a), i.size === 1 && (n = e(r) || $), o(t), () => {
      i.delete(a), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: l };
}
function Ot(t) {
  let e, n, i;
  return {
    c() {
      e = w("input"), this.h();
    },
    l(r) {
      e = E(r, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      m(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), m(e, "type", "text");
    },
    m(r, s) {
      x(r, e, s), De(e, t[0]), n || (i = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(r, [s]) {
      s & 1 && e.value !== r[0] && De(e, r[0]);
    },
    i: $,
    o: $,
    d(r) {
      r && _(e), n = !1, K(i);
    }
  };
}
function zt(t, e, n) {
  let { value: i } = e, { onFocus: r } = e;
  function s() {
    i = this.value, n(0, i);
  }
  const l = (o) => r(o.currentTarget);
  return t.$$set = (o) => {
    "value" in o && n(0, i = o.value), "onFocus" in o && n(1, r = o.onFocus);
  }, [i, r, s, l];
}
class Ce extends P {
  constructor(e) {
    super(), V(this, e, zt, Ot, z, { value: 0, onFocus: 1 });
  }
}
function Yt(t) {
  let e, n, i, r, s, l, o, u, a, c, f, M, d, h, N, v, b, g;
  function I(T) {
    t[7](T);
  }
  let S = { onFocus: t[6] };
  t[1] !== void 0 && (S.value = t[1]), o = new Ce({ props: S }), ce.push(() => Se(o, "value", I));
  function Y(T) {
    t[9](T);
  }
  let F = { onFocus: t[8] };
  return t[2] !== void 0 && (F.value = t[2]), c = new Ce({ props: F }), ce.push(() => Se(c, "value", Y)), {
    c() {
      e = w("div"), n = w("div"), i = w("h1"), r = k("Add a new merge field"), s = A(), l = w("div"), B(o.$$.fragment), a = A(), B(c.$$.fragment), M = A(), d = w("div"), h = w("button"), N = k("Add"), this.h();
    },
    l(T) {
      e = E(T, "DIV", {});
      var H = y(e);
      n = E(H, "DIV", {});
      var G = y(n);
      i = E(G, "H1", { class: !0 });
      var ee = y(i);
      r = R(ee, "Add a new merge field"), ee.forEach(_), s = C(G), l = E(G, "DIV", { class: !0 });
      var Z = y(l);
      U(o.$$.fragment, Z), a = C(Z), U(c.$$.fragment, Z), M = C(Z), d = E(Z, "DIV", { class: !0 });
      var Me = y(d);
      h = E(Me, "BUTTON", { class: !0 });
      var Ie = y(h);
      N = R(Ie, "Add"), Ie.forEach(_), Me.forEach(_), Z.forEach(_), G.forEach(_), H.forEach(_), this.h();
    },
    h() {
      m(i, "class", "text-teal-400 px-1"), m(h, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), m(d, "class", "flex flex-row-reverse"), m(l, "class", "border p-4 mb-6");
    },
    m(T, H) {
      x(T, e, H), p(e, n), p(n, i), p(i, r), p(n, s), p(n, l), L(o, l, null), p(l, a), L(c, l, null), p(l, M), p(l, d), p(d, h), p(h, N), v = !0, b || (g = J(h, "click", ye(t[10])), b = !0);
    },
    p(T, [H]) {
      const G = {};
      !u && H & 2 && (u = !0, G.value = T[1], $e(() => u = !1)), o.$set(G);
      const ee = {};
      !f && H & 4 && (f = !0, ee.value = T[2], $e(() => f = !1)), c.$set(ee);
    },
    i(T) {
      v || (D(o.$$.fragment, T), D(c.$$.fragment, T), v = !0);
    },
    o(T) {
      j(o.$$.fragment, T), j(c.$$.fragment, T), v = !1;
    },
    d(T) {
      T && _(e), O(o), O(c), b = !1, g();
    }
  };
}
function Rt(t, e, n) {
  let i, r, s = Ae("find");
  Te(t, s, (h) => n(1, i = h));
  let l = Ae("replace");
  Te(t, l, (h) => n(2, r = h));
  let o = (h) => h.set(""), { addField: u } = e;
  const a = () => o(s);
  function c(h) {
    i = h, s.set(i);
  }
  const f = () => o(l);
  function M(h) {
    r = h, l.set(r);
  }
  const d = () => u({ find: i, replace: r });
  return t.$$set = (h) => {
    "addField" in h && n(0, u = h.addField);
  }, [
    u,
    i,
    r,
    s,
    l,
    o,
    a,
    c,
    f,
    M,
    d
  ];
}
class Bt extends P {
  constructor(e) {
    super(), V(this, e, Rt, Yt, z, { addField: 0 });
  }
}
function Ut(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = ue(i, "svg", { xmlns: !0, viewBox: !0 });
      var r = y(e);
      n = ue(r, "path", { fill: !0, d: !0 }), y(n).forEach(_), r.forEach(_), this.h();
    },
    h() {
      m(n, "fill", "white"), m(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "viewBox", "0 0 16 16");
    },
    m(i, r) {
      x(i, e, r), p(e, n);
    },
    p: $,
    i: $,
    o: $,
    d(i) {
      i && _(e);
    }
  };
}
function Vt(t) {
  return [];
}
class Pt extends P {
  constructor(e) {
    super(), V(this, e, Vt, Ut, z, {});
  }
}
function Ht(t) {
  let e, n, i, r, s;
  return n = new Pt({}), {
    c() {
      e = w("button"), B(n.$$.fragment), this.h();
    },
    l(l) {
      e = E(l, "BUTTON", { class: !0 });
      var o = y(e);
      U(n.$$.fragment, o), o.forEach(_), this.h();
    },
    h() {
      m(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(l, o) {
      x(l, e, o), L(n, e, null), i = !0, r || (s = J(e, "click", ye(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(l, [o]) {
      t = l;
    },
    i(l) {
      i || (D(n.$$.fragment, l), i = !0);
    },
    o(l) {
      j(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && _(e), O(n), r = !1, s();
    }
  };
}
function Qt(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class Jt extends P {
  constructor(e) {
    super(), V(this, e, Qt, Ht, z, { onClick: 0 });
  }
}
function je(t, e, n) {
  const i = t.slice();
  return i[7] = e[n], i;
}
function xe(t) {
  let e, n, i = t[7].find + "", r, s, l, o, u, a, c, f, M, d, h;
  function N(...b) {
    return t[5](t[7], ...b);
  }
  function v() {
    return t[6](t[7]);
  }
  return c = new Jt({ props: { onClick: v } }), {
    c() {
      e = w("div"), n = w("label"), r = k(i), l = A(), o = w("input"), a = A(), B(c.$$.fragment), f = A(), this.h();
    },
    l(b) {
      e = E(b, "DIV", { "data-cy": !0, class: !0 });
      var g = y(e);
      n = E(g, "LABEL", { for: !0, class: !0 });
      var I = y(n);
      r = R(I, i), I.forEach(_), l = C(g), o = E(g, "INPUT", { role: !0, class: !0, type: !0 }), a = C(g), U(c.$$.fragment, g), f = C(g), g.forEach(_), this.h();
    },
    h() {
      m(n, "for", s = t[7].find), m(n, "class", "block mb-2 monospace"), m(o, "role", "textbox"), m(o, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), m(o, "type", "text"), o.value = u = t[7].replace, m(e, "data-cy", "label-input"), m(e, "class", "relative");
    },
    m(b, g) {
      x(b, e, g), p(e, n), p(n, r), p(e, l), p(e, o), p(e, a), L(c, e, null), p(e, f), M = !0, d || (h = J(o, "input", N), d = !0);
    },
    p(b, g) {
      t = b, (!M || g & 2) && i !== (i = t[7].find + "") && we(r, i), (!M || g & 2 && s !== (s = t[7].find)) && m(n, "for", s), (!M || g & 2 && u !== (u = t[7].replace) && o.value !== u) && (o.value = u);
      const I = {};
      g & 18 && (I.onClick = v), c.$set(I);
    },
    i(b) {
      M || (D(c.$$.fragment, b), M = !0);
    },
    o(b) {
      j(c.$$.fragment, b), M = !1;
    },
    d(b) {
      b && _(e), O(c), d = !1, h();
    }
  };
}
function Gt(t) {
  let e, n, i, r, s, l, o, u, a, c = t[1], f = [];
  for (let d = 0; d < c.length; d += 1)
    f[d] = xe(je(t, c, d));
  const M = (d) => j(f[d], 1, 1, () => {
    f[d] = null;
  });
  return u = new Bt({ props: { addField: t[3] } }), {
    c() {
      e = w("div"), n = w("div"), i = w("h1"), r = k("Modify Merge Values"), s = A(), l = w("div");
      for (let d = 0; d < f.length; d += 1)
        f[d].c();
      o = A(), B(u.$$.fragment), this.h();
    },
    l(d) {
      e = E(d, "DIV", {});
      var h = y(e);
      n = E(h, "DIV", { "data-cy": !0 });
      var N = y(n);
      i = E(N, "H1", { class: !0 });
      var v = y(i);
      r = R(v, "Modify Merge Values"), v.forEach(_), s = C(N), l = E(N, "DIV", { class: !0 });
      var b = y(l);
      for (let g = 0; g < f.length; g += 1)
        f[g].l(b);
      b.forEach(_), N.forEach(_), o = C(h), U(u.$$.fragment, h), h.forEach(_), this.h();
    },
    h() {
      m(i, "class", "text-teal-400 px-1"), m(l, "class", "border p-4 mb-6"), m(n, "data-cy", "merge-fields-input-section"), ae(e, "hidden", t[0]);
    },
    m(d, h) {
      x(d, e, h), p(e, n), p(n, i), p(i, r), p(n, s), p(n, l);
      for (let N = 0; N < f.length; N += 1)
        f[N].m(l, null);
      p(e, o), L(u, e, null), a = !0;
    },
    p(d, [h]) {
      if (h & 22) {
        c = d[1];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const b = je(d, c, v);
          f[v] ? (f[v].p(b, h), D(f[v], 1)) : (f[v] = xe(b), f[v].c(), D(f[v], 1), f[v].m(l, null));
        }
        for (Ye(), v = c.length; v < f.length; v += 1)
          M(v);
        Re();
      }
      const N = {};
      h & 8 && (N.addField = d[3]), u.$set(N), (!a || h & 1) && ae(e, "hidden", d[0]);
    },
    i(d) {
      if (!a) {
        for (let h = 0; h < c.length; h += 1)
          D(f[h]);
        D(u.$$.fragment, d), a = !0;
      }
    },
    o(d) {
      f = f.filter(Boolean);
      for (let h = 0; h < f.length; h += 1)
        j(f[h]);
      j(u.$$.fragment, d), a = !1;
    },
    d(d) {
      d && _(e), Ke(f, d), O(u);
    }
  };
}
function qt(t, e, n) {
  let { error: i } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: l } = e, { removeField: o } = e;
  const u = (c, f) => s(
    {
      find: c.find,
      replace: f.currentTarget.value
    },
    c
  ), a = (c) => o(c);
  return t.$$set = (c) => {
    "error" in c && n(0, i = c.error), "fields" in c && n(1, r = c.fields), "handleFormInput" in c && n(2, s = c.handleFormInput), "addField" in c && n(3, l = c.addField), "removeField" in c && n(4, o = c.removeField);
  }, [i, r, s, l, o, u, a];
}
class Zt extends P {
  constructor(e) {
    super(), V(this, e, qt, Gt, z, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function Wt(t) {
  let e, n, i, r;
  return {
    c() {
      e = w("button"), n = k("Reset"), this.h();
    },
    l(s) {
      e = E(s, "BUTTON", { class: !0 });
      var l = y(e);
      n = R(l, "Reset"), l.forEach(_), this.h();
    },
    h() {
      m(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(s, l) {
      x(s, e, l), p(e, n), i || (r = J(e, "click", ye(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: $,
    o: $,
    d(s) {
      s && _(e), i = !1, r();
    }
  };
}
function Xt(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class Kt extends P {
  constructor(e) {
    super(), V(this, e, Xt, Wt, z, { onClick: 0 });
  }
}
function en(t) {
  let e, n, i, r, s, l, o, u;
  return o = new Kt({ props: { onClick: t[0] } }), {
    c() {
      e = w("div"), n = w("p"), i = w("span"), r = k(t[2]), s = A(), l = w("div"), B(o.$$.fragment), this.h();
    },
    l(a) {
      e = E(a, "DIV", {});
      var c = y(e);
      n = E(c, "P", { "data-cy": !0, class: !0 });
      var f = y(n);
      i = E(f, "SPAN", { class: !0 });
      var M = y(i);
      r = R(M, t[2]), M.forEach(_), f.forEach(_), s = C(c), l = E(c, "DIV", { class: !0 });
      var d = y(l);
      U(o.$$.fragment, d), d.forEach(_), c.forEach(_), this.h();
    },
    h() {
      m(i, "class", "monospace text-orange-900"), m(n, "data-cy", "template-input-error"), m(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), m(l, "class", "flex flex-row-reverse "), ae(e, "hidden", !t[1]);
    },
    m(a, c) {
      x(a, e, c), p(e, n), p(n, i), p(i, r), p(e, s), p(e, l), L(o, l, null), u = !0;
    },
    p(a, [c]) {
      (!u || c & 4) && we(r, a[2]);
      const f = {};
      c & 1 && (f.onClick = a[0]), o.$set(f), (!u || c & 2) && ae(e, "hidden", !a[1]);
    },
    i(a) {
      u || (D(o.$$.fragment, a), u = !0);
    },
    o(a) {
      j(o.$$.fragment, a), u = !1;
    },
    d(a) {
      a && _(e), O(o);
    }
  };
}
function tn(t, e, n) {
  let i, { onClick: r } = e, { error: s } = e;
  return t.$$set = (l) => {
    "onClick" in l && n(0, r = l.onClick), "error" in l && n(1, s = l.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, i = s && s.message || "");
  }, [r, s, i];
}
class nn extends P {
  constructor(e) {
    super(), V(this, e, tn, en, z, { onClick: 0, error: 1 });
  }
}
function Fe(t) {
  let e, n, i, r, s, l, o, u, a, c = fe(t[0]) + "", f, M, d, h, N, v;
  return d = new Lt({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = w("div"), n = w("h1"), i = k("Result"), r = A(), s = w("abbr"), l = w("img"), u = A(), a = w("p"), f = k(c), M = A(), B(d.$$.fragment), this.h();
    },
    l(b) {
      e = E(b, "DIV", { "data-cy": !0, class: !0 });
      var g = y(e);
      n = E(g, "H1", { class: !0 });
      var I = y(n);
      i = R(I, "Result"), I.forEach(_), r = C(g), s = E(g, "ABBR", { title: !0, class: !0 });
      var S = y(s);
      l = E(S, "IMG", { src: !0, alt: !0, class: !0 }), S.forEach(_), u = C(g), a = E(g, "P", { "data-cy": !0, class: !0 });
      var Y = y(a);
      f = R(Y, c), Y.forEach(_), M = C(g), U(d.$$.fragment, g), g.forEach(_), this.h();
    },
    h() {
      m(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Qe(l.src, o = lt) || m(l, "src", o), m(l, "alt", "copy-button"), m(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), m(s, "title", "Copy to clipboard"), m(s, "class", "svelte-r93edu"), m(a, "data-cy", "result"), m(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), m(e, "data-cy", "result-section"), m(e, "class", "svelte-r93edu");
    },
    m(b, g) {
      x(b, e, g), p(e, n), p(n, i), p(e, r), p(e, s), p(s, l), p(e, u), p(e, a), p(a, f), p(e, M), L(d, e, null), h = !0, N || (v = J(l, "click", t[6]), N = !0);
    },
    p(b, g) {
      (!h || g & 1) && c !== (c = fe(b[0]) + "") && we(f, c);
      const I = {};
      g & 8 && (I.download = b[3]), d.$set(I);
    },
    i(b) {
      h || (D(d.$$.fragment, b), h = !0);
    },
    o(b) {
      j(d.$$.fragment, b), h = !1;
    },
    d(b) {
      b && _(e), O(d), N = !1, v();
    }
  };
}
function rn(t) {
  let e, n, i, r, s, l, o, u, a, c, f, M, d, h, N, v, b;
  f = new nn({
    props: {
      error: t[2],
      onClick: t[10]
    }
  }), d = new Zt({
    props: {
      fields: t[0].merge,
      handleFormInput: t[5],
      addField: t[8],
      removeField: t[9],
      error: t[2]
    }
  });
  let g = !t[2] && Fe(t);
  return {
    c() {
      e = w("div"), n = w("section"), i = w("form"), r = w("div"), s = w("label"), l = k("Paste template"), o = A(), u = w("textarea"), c = A(), B(f.$$.fragment), M = A(), B(d.$$.fragment), h = A(), g && g.c(), this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0 });
      var S = y(e);
      n = E(S, "SECTION", { "data-cy": !0, class: !0 });
      var Y = y(n);
      i = E(Y, "FORM", { class: !0 });
      var F = y(i);
      r = E(F, "DIV", { "data-cy": !0, class: !0 });
      var T = y(r);
      s = E(T, "LABEL", { for: !0, class: !0 });
      var H = y(s);
      l = R(H, "Paste template"), H.forEach(_), o = C(T), u = E(T, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), y(u).forEach(_), T.forEach(_), c = C(F), U(f.$$.fragment, F), M = C(F), U(d.$$.fragment, F), F.forEach(_), h = C(Y), g && g.l(Y), Y.forEach(_), S.forEach(_), this.h();
    },
    h() {
      m(s, "for", "json-input"), m(s, "class", "text-teal-400 px-1 svelte-r93edu"), m(u, "data-cy", "template-input"), m(u, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), m(u, "id", "json-input"), u.value = a = fe(t[1]), m(r, "data-cy", "template-input-section"), m(r, "class", "mb-6 svelte-r93edu"), m(i, "class", "svelte-r93edu"), m(n, "data-cy", "form-container"), m(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), m(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(I, S) {
      x(I, e, S), p(e, n), p(n, i), p(i, r), p(r, s), p(s, l), p(r, o), p(r, u), p(i, c), L(f, i, null), p(i, M), L(d, i, null), p(n, h), g && g.m(n, null), N = !0, v || (b = J(u, "input", t[12]), v = !0);
    },
    p(I, [S]) {
      (!N || S & 2 && a !== (a = fe(I[1]))) && (u.value = a);
      const Y = {};
      S & 4 && (Y.error = I[2]), f.$set(Y);
      const F = {};
      S & 1 && (F.fields = I[0].merge), S & 4 && (F.error = I[2]), d.$set(F), I[2] ? g && (Ye(), j(g, 1, 1, () => {
        g = null;
      }), Re()) : g ? (g.p(I, S), S & 4 && D(g, 1)) : (g = Fe(I), g.c(), D(g, 1), g.m(n, null));
    },
    i(I) {
      N || (D(f.$$.fragment, I), D(d.$$.fragment, I), D(g), N = !0);
    },
    o(I) {
      j(f.$$.fragment, I), j(d.$$.fragment, I), j(g), N = !1;
    },
    d(I) {
      I && _(e), O(f), O(d), g && g.d(), v = !1, b();
    }
  };
}
function fe(t) {
  return JSON.stringify(t, null, 2);
}
function ln(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function sn(t, e, n) {
  let i, { editTemplateService: r = new Ve(It) } = e, s = r.template, l = r.result, o = null;
  function u(v) {
    r.setTemplateSource(v), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function a(v, b) {
    r.updateResultMergeFields(v, b), n(0, l = r.result);
  }
  function c() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function f() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function M(v) {
    r.addMergeField(v), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function d(v) {
    const b = r.getMergeFieldItem(v);
    r.removeMergeField(b), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function h() {
    r.setTemplateSource(r.result), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  const N = (v) => u(v.currentTarget.value);
  return t.$$set = (v) => {
    "editTemplateService" in v && n(11, r = v.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, i = ln(l) || "");
  }, [
    l,
    s,
    o,
    i,
    u,
    a,
    c,
    f,
    M,
    d,
    h,
    r,
    N
  ];
}
class on extends P {
  constructor(e) {
    super(), V(this, e, sn, rn, z, { editTemplateService: 11 });
  }
}
class an {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    W(this, "templateService");
    this.containerElement = n, this.templateService = new Ve(e), this.initialize();
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
    new on({
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
  an as default
};
