var He = Object.defineProperty;
var Qe = (t, e, n) => e in t ? He(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var q = (t, e, n) => (Qe(t, typeof e != "symbol" ? e + "" : e, n), n);
function S() {
}
function Le(t) {
  return t();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(Le);
}
function de(t) {
  return typeof t == "function";
}
function k(t, e) {
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
    return S;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Te(t, e, n) {
  t.$$.on_destroy.push(qe(e, n));
}
let he = !1;
function Ze() {
  he = !0;
}
function We() {
  he = !1;
}
function Xe(t, e, n, i) {
  for (; t < e; ) {
    const r = t + (e - t >> 1);
    n(r) <= i ? t = r + 1 : e = r;
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
      const m = e[u];
      m.claim_order !== void 0 && a.push(m);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1), i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let a = 0; a < e.length; a++) {
    const u = e[a].claim_order, m = (r > 0 && e[n[r]].claim_order <= u ? r + 1 : Xe(1, r, (E) => e[n[E]].claim_order, u)) - 1;
    i[a] = n[m] + 1;
    const d = m + 1;
    n[d] = a, r = Math.max(d, r);
  }
  const s = [], l = [];
  let o = e.length - 1;
  for (let a = n[r] + 1; a != 0; a = i[a - 1]) {
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
    const m = u < s.length ? s[u] : null;
    t.insertBefore(l[a], m);
  }
}
function g(t, e) {
  if (he) {
    for (Ke(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function $(t, e, n) {
  he && !n ? g(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function p(t) {
  t.parentNode.removeChild(t);
}
function et(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function w(t) {
  return document.createElement(t);
}
function re(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function z(t) {
  return document.createTextNode(t);
}
function A() {
  return z(" ");
}
function J(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ye(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function y(t) {
  return Array.from(t.childNodes);
}
function tt(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ke(t, e, n, i, r = !1) {
  tt(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const o = t[l];
      if (e(o)) {
        const a = n(o);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, r || (t.claim_info.last_index = l), o;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const o = t[l];
      if (e(o)) {
        const a = n(o);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, r ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, o;
      }
    }
    return i();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Oe(t, e, n, i) {
  return ke(t, (r) => r.nodeName === e, (r) => {
    const s = [];
    for (let l = 0; l < r.attributes.length; l++) {
      const o = r.attributes[l];
      n[o.name] || s.push(o.name);
    }
    s.forEach((l) => r.removeAttribute(l));
  }, () => i(e));
}
function I(t, e, n) {
  return Oe(t, e, n, w);
}
function ue(t, e, n) {
  return Oe(t, e, n, re);
}
function P(t, e) {
  return ke(
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
    () => z(e),
    !0
  );
}
function C(t) {
  return P(t, " ");
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
let Ie;
function ne(t) {
  Ie = t;
}
const te = [], ce = [], se = [], pe = [], nt = Promise.resolve();
let _e = !1;
function rt() {
  _e || (_e = !0, nt.then(ze));
}
function ve(t) {
  se.push(t);
}
function Se(t) {
  pe.push(t);
}
const ge = /* @__PURE__ */ new Set();
let le = 0;
function ze() {
  const t = Ie;
  do {
    for (; le < te.length; ) {
      const e = te[le];
      le++, ne(e), it(e.$$);
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
function it(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ve);
  }
}
const oe = /* @__PURE__ */ new Set();
let Z;
function Ye() {
  Z = {
    r: 0,
    c: [],
    p: Z
  };
}
function Re() {
  Z.r || K(Z.c), Z = Z.p;
}
function D(t, e) {
  t && t.i && (oe.delete(t), t.i(e));
}
function j(t, e, n, i) {
  if (t && t.o) {
    if (oe.has(t))
      return;
    oe.add(t), Z.c.push(() => {
      oe.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Fe(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function Y(t) {
  t && t.c();
}
function R(t, e) {
  t && t.l(e);
}
function x(t, e, n, i) {
  const { fragment: r, on_mount: s, on_destroy: l, after_update: o } = t.$$;
  r && r.m(e, n), i || ve(() => {
    const a = s.map(Le).filter(de);
    l ? l.push(...a) : K(a), t.$$.on_mount = [];
  }), o.forEach(ve);
}
function L(t, e) {
  const n = t.$$;
  n.fragment !== null && (K(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function lt(t, e) {
  t.$$.dirty[0] === -1 && (te.push(t), rt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function B(t, e, n, i, r, s, l, o = [-1]) {
  const a = Ie;
  ne(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: S,
    not_equal: r,
    bound: Ne(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Ne(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(u.root);
  let m = !1;
  if (u.ctx = n ? n(t, e.props || {}, (d, E, ...c) => {
    const f = c.length ? c[0] : E;
    return u.ctx && r(u.ctx[d], u.ctx[d] = f) && (!u.skip_bound && u.bound[d] && u.bound[d](f), m && lt(t, d)), E;
  }) : [], u.update(), m = !0, K(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      Ze();
      const d = y(e.target);
      u.fragment && u.fragment.l(d), d.forEach(p);
    } else
      u.fragment && u.fragment.c();
    e.intro && D(t.$$.fragment), x(t, e.target, e.anchor, e.customElement), We(), ze();
  }
  ne(a);
}
class U {
  $destroy() {
    L(this, 1), this.$destroy = S;
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
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
function me(t, e) {
  return t in e;
}
function be(t, e) {
  return !me(t, e);
}
function pt(t, e) {
  return me(t, e) && !(e[t] instanceof Array);
}
function _t(t, e) {
  return me(t, e) && typeof e[t] != "string";
}
function vt(t, e) {
  const n = me(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function bt(t) {
  try {
    const e = JSON.parse(t);
    if (be("merge", e))
      throw new Q(ot);
    if (pt("merge", e))
      throw new Q(ut);
    const { merge: n } = e, i = yt(n);
    return { ...e, merge: i };
  } catch (e) {
    throw Be(e);
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
  }).map(({ find: n, replace: i }) => ({
    find: n,
    replace: Ue(i)
  }));
}
function wt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Be(t) {
  return t instanceof Error ? t : wt(t) ? new Q(t.message) : new Q(ht);
}
function Ue(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Ve {
  constructor(e) {
    q(this, "template");
    q(this, "_result");
    q(this, "_error");
    q(this, "handlers");
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
    this._result = e, this.handlers.change.forEach((n) => n(e));
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
      const n = bt(Ue(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const i = Be(n);
      this.error = i;
    }
  }
  updateResultMergeFields(e, n) {
    const i = n || this.getMergeFieldItem({ find: e.find });
    return this.result.merge.forEach((r) => {
      r === i && (r.find = e.find, r.replace = e.replace);
    }), this.result = { ...this.result, merge: this.result.merge }, this.result.merge;
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
            style: "future"
          },
          start: 0,
          length: 5
        }
      ]
    }
  ]
}, Et = {
  format: "mp4",
  resolution: "hd"
}, Nt = {
  merge: It,
  timeline: Mt,
  output: Et
};
function Tt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = ue(i, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var r = y(e);
      n = ue(r, "path", { d: !0 }), y(n).forEach(p), r.forEach(p), this.h();
    },
    h() {
      h(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), h(e, "class", "fill-current w-4 h-4 mr-2"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "viewBox", "0 0 20 20");
    },
    m(i, r) {
      $(i, e, r), g(e, n);
    },
    p: S,
    i: S,
    o: S,
    d(i) {
      i && p(e);
    }
  };
}
function Dt(t) {
  return [];
}
class St extends U {
  constructor(e) {
    super(), B(this, e, Dt, Tt, k, {});
  }
}
function Ft(t) {
  let e, n, i, r;
  return n = new St({}), {
    c() {
      e = w("a"), Y(n.$$.fragment), i = z(`
	Download`), this.h();
    },
    l(s) {
      e = I(s, "A", { href: !0, download: !0, class: !0 });
      var l = y(e);
      R(n.$$.fragment, l), i = P(l, `
	Download`), l.forEach(p), this.h();
    },
    h() {
      h(e, "href", t[0]), h(e, "download", "result.json"), h(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      $(s, e, l), x(n, e, null), g(e, i), r = !0;
    },
    p(s, [l]) {
      (!r || l & 1) && h(e, "href", s[0]);
    },
    i(s) {
      r || (D(n.$$.fragment, s), r = !0);
    },
    o(s) {
      j(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && p(e), L(n);
    }
  };
}
function At(t, e, n) {
  let { download: i = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, i = r.download);
  }, [i];
}
class Ct extends U {
  constructor(e) {
    super(), B(this, e, At, Ft, k, { download: 0 });
  }
}
function jt(t) {
  let e, n, i, r;
  return {
    c() {
      e = w("button"), n = z("Submit"), this.h();
    },
    l(s) {
      e = I(s, "BUTTON", { class: !0 });
      var l = y(e);
      n = P(l, "Submit"), l.forEach(p), this.h();
    },
    h() {
      h(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      $(s, e, l), g(e, n), i || (r = J(e, "click", function() {
        de(t[0]) && t[0].apply(this, arguments);
      }), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: S,
    o: S,
    d(s) {
      s && p(e), i = !1, r();
    }
  };
}
function $t(t, e, n) {
  let { submit: i } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, i = r.submit);
  }, [i];
}
class xt extends U {
  constructor(e) {
    super(), B(this, e, $t, jt, k, { submit: 0 });
  }
}
function Lt(t) {
  let e, n, i, r, s;
  return n = new Ct({ props: { download: t[0] } }), r = new xt({ props: { submit: t[1] } }), {
    c() {
      e = w("div"), Y(n.$$.fragment), i = A(), Y(r.$$.fragment), this.h();
    },
    l(l) {
      e = I(l, "DIV", { class: !0 });
      var o = y(e);
      R(n.$$.fragment, o), i = C(o), R(r.$$.fragment, o), o.forEach(p), this.h();
    },
    h() {
      h(e, "class", "flex justify-between pt-4");
    },
    m(l, o) {
      $(l, e, o), x(n, e, null), g(e, i), x(r, e, null), s = !0;
    },
    p(l, [o]) {
      const a = {};
      o & 1 && (a.download = l[0]), n.$set(a);
      const u = {};
      o & 2 && (u.submit = l[1]), r.$set(u);
    },
    i(l) {
      s || (D(n.$$.fragment, l), D(r.$$.fragment, l), s = !0);
    },
    o(l) {
      j(n.$$.fragment, l), j(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && p(e), L(n), L(r);
    }
  };
}
function kt(t, e, n) {
  let { download: i = "" } = e, { submit: r } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, i = s.download), "submit" in s && n(1, r = s.submit);
  }, [i, r];
}
class Ot extends U {
  constructor(e) {
    super(), B(this, e, kt, Lt, k, { download: 0, submit: 1 });
  }
}
const X = [];
function Ae(t, e = S) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (k(t, o) && (t = o, n)) {
      const a = !X.length;
      for (const u of i)
        u[1](), X.push(u, t);
      if (a) {
        for (let u = 0; u < X.length; u += 2)
          X[u][0](X[u + 1]);
        X.length = 0;
      }
    }
  }
  function s(o) {
    r(o(t));
  }
  function l(o, a = S) {
    const u = [o, a];
    return i.add(u), i.size === 1 && (n = e(r) || S), o(t), () => {
      i.delete(u), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: l };
}
function zt(t) {
  let e, n, i;
  return {
    c() {
      e = w("input"), this.h();
    },
    l(r) {
      e = I(r, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      h(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), h(e, "type", "text");
    },
    m(r, s) {
      $(r, e, s), De(e, t[0]), n || (i = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(r, [s]) {
      s & 1 && e.value !== r[0] && De(e, r[0]);
    },
    i: S,
    o: S,
    d(r) {
      r && p(e), n = !1, K(i);
    }
  };
}
function Yt(t, e, n) {
  let { value: i } = e, { onFocus: r } = e;
  function s() {
    i = this.value, n(0, i);
  }
  const l = (o) => r(o.currentTarget);
  return t.$$set = (o) => {
    "value" in o && n(0, i = o.value), "onFocus" in o && n(1, r = o.onFocus);
  }, [i, r, s, l];
}
class Ce extends U {
  constructor(e) {
    super(), B(this, e, Yt, zt, k, { value: 0, onFocus: 1 });
  }
}
function Rt(t) {
  let e, n, i, r, s, l, o, a, u, m, d, E, c, f, b, _, M, v;
  function N(T) {
    t[7](T);
  }
  let F = { onFocus: t[6] };
  t[1] !== void 0 && (F.value = t[1]), o = new Ce({ props: F }), ce.push(() => Fe(o, "value", N));
  function V(T) {
    t[9](T);
  }
  let O = { onFocus: t[8] };
  return t[2] !== void 0 && (O.value = t[2]), m = new Ce({ props: O }), ce.push(() => Fe(m, "value", V)), {
    c() {
      e = w("div"), n = w("div"), i = w("h1"), r = z("Add a new merge field"), s = A(), l = w("div"), Y(o.$$.fragment), u = A(), Y(m.$$.fragment), E = A(), c = w("div"), f = w("button"), b = z("Add"), this.h();
    },
    l(T) {
      e = I(T, "DIV", {});
      var H = y(e);
      n = I(H, "DIV", {});
      var G = y(n);
      i = I(G, "H1", { class: !0 });
      var ee = y(i);
      r = P(ee, "Add a new merge field"), ee.forEach(p), s = C(G), l = I(G, "DIV", { class: !0 });
      var W = y(l);
      R(o.$$.fragment, W), u = C(W), R(m.$$.fragment, W), E = C(W), c = I(W, "DIV", { class: !0 });
      var Me = y(c);
      f = I(Me, "BUTTON", { class: !0 });
      var Ee = y(f);
      b = P(Ee, "Add"), Ee.forEach(p), Me.forEach(p), W.forEach(p), G.forEach(p), H.forEach(p), this.h();
    },
    h() {
      h(i, "class", "text-teal-400 px-1"), h(f, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), h(c, "class", "flex flex-row-reverse"), h(l, "class", "border p-4 mb-6");
    },
    m(T, H) {
      $(T, e, H), g(e, n), g(n, i), g(i, r), g(n, s), g(n, l), x(o, l, null), g(l, u), x(m, l, null), g(l, E), g(l, c), g(c, f), g(f, b), _ = !0, M || (v = J(f, "click", ye(t[10])), M = !0);
    },
    p(T, [H]) {
      const G = {};
      !a && H & 2 && (a = !0, G.value = T[1], Se(() => a = !1)), o.$set(G);
      const ee = {};
      !d && H & 4 && (d = !0, ee.value = T[2], Se(() => d = !1)), m.$set(ee);
    },
    i(T) {
      _ || (D(o.$$.fragment, T), D(m.$$.fragment, T), _ = !0);
    },
    o(T) {
      j(o.$$.fragment, T), j(m.$$.fragment, T), _ = !1;
    },
    d(T) {
      T && p(e), L(o), L(m), M = !1, v();
    }
  };
}
function Bt(t, e, n) {
  let i, r, s = Ae("find");
  Te(t, s, (f) => n(1, i = f));
  let l = Ae("replace");
  Te(t, l, (f) => n(2, r = f));
  let o = (f) => f.set(""), { addField: a } = e;
  const u = () => o(s);
  function m(f) {
    i = f, s.set(i);
  }
  const d = () => o(l);
  function E(f) {
    r = f, l.set(r);
  }
  const c = () => a({ find: i, replace: r });
  return t.$$set = (f) => {
    "addField" in f && n(0, a = f.addField);
  }, [
    a,
    i,
    r,
    s,
    l,
    o,
    u,
    m,
    d,
    E,
    c
  ];
}
class Ut extends U {
  constructor(e) {
    super(), B(this, e, Bt, Rt, k, { addField: 0 });
  }
}
function Vt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = ue(i, "svg", { xmlns: !0, viewBox: !0 });
      var r = y(e);
      n = ue(r, "path", { fill: !0, d: !0 }), y(n).forEach(p), r.forEach(p), this.h();
    },
    h() {
      h(n, "fill", "white"), h(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "viewBox", "0 0 16 16");
    },
    m(i, r) {
      $(i, e, r), g(e, n);
    },
    p: S,
    i: S,
    o: S,
    d(i) {
      i && p(e);
    }
  };
}
function Pt(t) {
  return [];
}
class Ht extends U {
  constructor(e) {
    super(), B(this, e, Pt, Vt, k, {});
  }
}
function Qt(t) {
  let e, n, i, r, s;
  return n = new Ht({}), {
    c() {
      e = w("button"), Y(n.$$.fragment), this.h();
    },
    l(l) {
      e = I(l, "BUTTON", { class: !0 });
      var o = y(e);
      R(n.$$.fragment, o), o.forEach(p), this.h();
    },
    h() {
      h(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(l, o) {
      $(l, e, o), x(n, e, null), i = !0, r || (s = J(e, "click", ye(function() {
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
      l && p(e), L(n), r = !1, s();
    }
  };
}
function Jt(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class Gt extends U {
  constructor(e) {
    super(), B(this, e, Jt, Qt, k, { onClick: 0 });
  }
}
function qt(t) {
  let e, n, i;
  return {
    c() {
      e = w("input"), this.h();
    },
    l(r) {
      e = I(r, "INPUT", { role: !0, class: !0, type: !0 }), this.h();
    },
    h() {
      h(e, "role", "textbox"), h(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), h(e, "type", "text"), e.value = t[2];
    },
    m(r, s) {
      $(r, e, s), n || (i = J(e, "input", t[4]), n = !0);
    },
    p(r, [s]) {
      s & 4 && e.value !== r[2] && (e.value = r[2]);
    },
    i: S,
    o: S,
    d(r) {
      r && p(e), n = !1, i();
    }
  };
}
function Zt(t, e, n) {
  let { field: i } = e, { find: r } = e, { replace: s } = e, { handleFormInput: l } = e;
  const o = (a) => l({ find: r, replace: a.currentTarget.value }, i);
  return t.$$set = (a) => {
    "field" in a && n(0, i = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, s = a.replace), "handleFormInput" in a && n(3, l = a.handleFormInput);
  }, [i, r, s, l, o];
}
class Pe extends U {
  constructor(e) {
    super(), B(this, e, Zt, qt, k, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function je(t, e, n) {
  const i = t.slice();
  return i[6] = e[n], i;
}
function $e(t) {
  let e, n, i = t[6].find + "", r, s, l, o, a, u, m, d;
  o = new Pe({
    props: {
      find: t[6].find,
      replace: t[6].replace,
      field: t[6],
      handleFormInput: t[2]
    }
  });
  function E() {
    return t[5](t[6]);
  }
  return u = new Gt({ props: { onClick: E } }), {
    c() {
      e = w("div"), n = w("label"), r = z(i), l = A(), Y(o.$$.fragment), a = A(), Y(u.$$.fragment), m = A(), this.h();
    },
    l(c) {
      e = I(c, "DIV", { "data-cy": !0, class: !0 });
      var f = y(e);
      n = I(f, "LABEL", { for: !0, class: !0 });
      var b = y(n);
      r = P(b, i), b.forEach(p), l = C(f), R(o.$$.fragment, f), a = C(f), R(u.$$.fragment, f), m = C(f), f.forEach(p), this.h();
    },
    h() {
      h(n, "for", s = t[6].find), h(n, "class", "block mb-2 monospace"), h(e, "data-cy", "label-input"), h(e, "class", "relative");
    },
    m(c, f) {
      $(c, e, f), g(e, n), g(n, r), g(e, l), x(o, e, null), g(e, a), x(u, e, null), g(e, m), d = !0;
    },
    p(c, f) {
      t = c, (!d || f & 2) && i !== (i = t[6].find + "") && we(r, i), (!d || f & 2 && s !== (s = t[6].find)) && h(n, "for", s);
      const b = {};
      f & 2 && (b.find = t[6].find), f & 2 && (b.replace = t[6].replace), f & 2 && (b.field = t[6]), f & 4 && (b.handleFormInput = t[2]), o.$set(b);
      const _ = {};
      f & 18 && (_.onClick = E), u.$set(_);
    },
    i(c) {
      d || (D(o.$$.fragment, c), D(u.$$.fragment, c), d = !0);
    },
    o(c) {
      j(o.$$.fragment, c), j(u.$$.fragment, c), d = !1;
    },
    d(c) {
      c && p(e), L(o), L(u);
    }
  };
}
function Wt(t) {
  let e, n, i, r, s, l, o, a, u, m = t[1], d = [];
  for (let c = 0; c < m.length; c += 1)
    d[c] = $e(je(t, m, c));
  const E = (c) => j(d[c], 1, 1, () => {
    d[c] = null;
  });
  return a = new Ut({ props: { addField: t[3] } }), {
    c() {
      e = w("div"), n = w("div"), i = w("h1"), r = z("Modify Merge Values"), s = A(), l = w("div");
      for (let c = 0; c < d.length; c += 1)
        d[c].c();
      o = A(), Y(a.$$.fragment), this.h();
    },
    l(c) {
      e = I(c, "DIV", {});
      var f = y(e);
      n = I(f, "DIV", { "data-cy": !0 });
      var b = y(n);
      i = I(b, "H1", { class: !0 });
      var _ = y(i);
      r = P(_, "Modify Merge Values"), _.forEach(p), s = C(b), l = I(b, "DIV", { class: !0 });
      var M = y(l);
      for (let v = 0; v < d.length; v += 1)
        d[v].l(M);
      M.forEach(p), b.forEach(p), o = C(f), R(a.$$.fragment, f), f.forEach(p), this.h();
    },
    h() {
      h(i, "class", "text-teal-400 px-1"), h(l, "class", "border p-4 mb-6"), h(n, "data-cy", "merge-fields-input-section"), ae(e, "hidden", t[0]);
    },
    m(c, f) {
      $(c, e, f), g(e, n), g(n, i), g(i, r), g(n, s), g(n, l);
      for (let b = 0; b < d.length; b += 1)
        d[b].m(l, null);
      g(e, o), x(a, e, null), u = !0;
    },
    p(c, [f]) {
      if (f & 22) {
        m = c[1];
        let _;
        for (_ = 0; _ < m.length; _ += 1) {
          const M = je(c, m, _);
          d[_] ? (d[_].p(M, f), D(d[_], 1)) : (d[_] = $e(M), d[_].c(), D(d[_], 1), d[_].m(l, null));
        }
        for (Ye(), _ = m.length; _ < d.length; _ += 1)
          E(_);
        Re();
      }
      const b = {};
      f & 8 && (b.addField = c[3]), a.$set(b), (!u || f & 1) && ae(e, "hidden", c[0]);
    },
    i(c) {
      if (!u) {
        for (let f = 0; f < m.length; f += 1)
          D(d[f]);
        D(a.$$.fragment, c), u = !0;
      }
    },
    o(c) {
      d = d.filter(Boolean);
      for (let f = 0; f < d.length; f += 1)
        j(d[f]);
      j(a.$$.fragment, c), u = !1;
    },
    d(c) {
      c && p(e), et(d, c), L(a);
    }
  };
}
function Xt(t, e, n) {
  let { error: i } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: l } = e, { removeField: o } = e;
  const a = (u) => o(u);
  return t.$$set = (u) => {
    "error" in u && n(0, i = u.error), "fields" in u && n(1, r = u.fields), "handleFormInput" in u && n(2, s = u.handleFormInput), "addField" in u && n(3, l = u.addField), "removeField" in u && n(4, o = u.removeField);
  }, [i, r, s, l, o, a];
}
class Kt extends U {
  constructor(e) {
    super(), B(this, e, Xt, Wt, k, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function en(t) {
  let e, n, i, r;
  return {
    c() {
      e = w("button"), n = z("Reset"), this.h();
    },
    l(s) {
      e = I(s, "BUTTON", { class: !0 });
      var l = y(e);
      n = P(l, "Reset"), l.forEach(p), this.h();
    },
    h() {
      h(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(s, l) {
      $(s, e, l), g(e, n), i || (r = J(e, "click", ye(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: S,
    o: S,
    d(s) {
      s && p(e), i = !1, r();
    }
  };
}
function tn(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class nn extends U {
  constructor(e) {
    super(), B(this, e, tn, en, k, { onClick: 0 });
  }
}
function rn(t) {
  let e, n, i, r, s, l, o, a;
  return o = new nn({ props: { onClick: t[0] } }), {
    c() {
      e = w("div"), n = w("p"), i = w("span"), r = z(t[2]), s = A(), l = w("div"), Y(o.$$.fragment), this.h();
    },
    l(u) {
      e = I(u, "DIV", {});
      var m = y(e);
      n = I(m, "P", { "data-cy": !0, class: !0 });
      var d = y(n);
      i = I(d, "SPAN", { class: !0 });
      var E = y(i);
      r = P(E, t[2]), E.forEach(p), d.forEach(p), s = C(m), l = I(m, "DIV", { class: !0 });
      var c = y(l);
      R(o.$$.fragment, c), c.forEach(p), m.forEach(p), this.h();
    },
    h() {
      h(i, "class", "monospace text-orange-900"), h(n, "data-cy", "template-input-error"), h(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), h(l, "class", "flex flex-row-reverse "), ae(e, "hidden", !t[1]);
    },
    m(u, m) {
      $(u, e, m), g(e, n), g(n, i), g(i, r), g(e, s), g(e, l), x(o, l, null), a = !0;
    },
    p(u, [m]) {
      (!a || m & 4) && we(r, u[2]);
      const d = {};
      m & 1 && (d.onClick = u[0]), o.$set(d), (!a || m & 2) && ae(e, "hidden", !u[1]);
    },
    i(u) {
      a || (D(o.$$.fragment, u), a = !0);
    },
    o(u) {
      j(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && p(e), L(o);
    }
  };
}
function ln(t, e, n) {
  let i, { onClick: r } = e, { error: s } = e;
  return t.$$set = (l) => {
    "onClick" in l && n(0, r = l.onClick), "error" in l && n(1, s = l.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, i = s && s.message || "");
  }, [r, s, i];
}
class sn extends U {
  constructor(e) {
    super(), B(this, e, ln, rn, k, { onClick: 0, error: 1 });
  }
}
function xe(t) {
  let e, n, i, r, s, l, o, a, u, m = fe(t[0]) + "", d, E, c, f, b, _;
  return c = new Ot({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = w("div"), n = w("h1"), i = z("Result"), r = A(), s = w("abbr"), l = w("img"), a = A(), u = w("p"), d = z(m), E = A(), Y(c.$$.fragment), this.h();
    },
    l(M) {
      e = I(M, "DIV", { "data-cy": !0, class: !0 });
      var v = y(e);
      n = I(v, "H1", { class: !0 });
      var N = y(n);
      i = P(N, "Result"), N.forEach(p), r = C(v), s = I(v, "ABBR", { title: !0, class: !0 });
      var F = y(s);
      l = I(F, "IMG", { src: !0, alt: !0, class: !0 }), F.forEach(p), a = C(v), u = I(v, "P", { "data-cy": !0, class: !0 });
      var V = y(u);
      d = P(V, m), V.forEach(p), E = C(v), R(c.$$.fragment, v), v.forEach(p), this.h();
    },
    h() {
      h(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Je(l.src, o = st) || h(l, "src", o), h(l, "alt", "copy-button"), h(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), h(s, "title", "Copy to clipboard"), h(s, "class", "svelte-r93edu"), h(u, "data-cy", "result"), h(u, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), h(e, "data-cy", "result-section"), h(e, "class", "svelte-r93edu");
    },
    m(M, v) {
      $(M, e, v), g(e, n), g(n, i), g(e, r), g(e, s), g(s, l), g(e, a), g(e, u), g(u, d), g(e, E), x(c, e, null), f = !0, b || (_ = J(l, "click", t[6]), b = !0);
    },
    p(M, v) {
      (!f || v & 1) && m !== (m = fe(M[0]) + "") && we(d, m);
      const N = {};
      v & 8 && (N.download = M[3]), c.$set(N);
    },
    i(M) {
      f || (D(c.$$.fragment, M), f = !0);
    },
    o(M) {
      j(c.$$.fragment, M), f = !1;
    },
    d(M) {
      M && p(e), L(c), b = !1, _();
    }
  };
}
function on(t) {
  let e, n, i, r, s, l, o, a, u, m, d, E, c, f, b, _, M;
  d = new sn({
    props: {
      error: t[2],
      onClick: t[10]
    }
  }), c = new Kt({
    props: {
      fields: t[0].merge,
      handleFormInput: t[5],
      addField: t[8],
      removeField: t[9],
      error: t[2]
    }
  });
  let v = !t[2] && xe(t);
  return {
    c() {
      e = w("div"), n = w("section"), i = w("form"), r = w("div"), s = w("label"), l = z("Paste template"), o = A(), a = w("textarea"), m = A(), Y(d.$$.fragment), E = A(), Y(c.$$.fragment), f = A(), v && v.c(), this.h();
    },
    l(N) {
      e = I(N, "DIV", { class: !0 });
      var F = y(e);
      n = I(F, "SECTION", { "data-cy": !0, class: !0 });
      var V = y(n);
      i = I(V, "FORM", { class: !0 });
      var O = y(i);
      r = I(O, "DIV", { "data-cy": !0, class: !0 });
      var T = y(r);
      s = I(T, "LABEL", { for: !0, class: !0 });
      var H = y(s);
      l = P(H, "Paste template"), H.forEach(p), o = C(T), a = I(T, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), y(a).forEach(p), T.forEach(p), m = C(O), R(d.$$.fragment, O), E = C(O), R(c.$$.fragment, O), O.forEach(p), f = C(V), v && v.l(V), V.forEach(p), F.forEach(p), this.h();
    },
    h() {
      h(s, "for", "json-input"), h(s, "class", "text-teal-400 px-1 svelte-r93edu"), h(a, "data-cy", "template-input"), h(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), h(a, "id", "json-input"), a.value = u = fe(t[1]), h(r, "data-cy", "template-input-section"), h(r, "class", "mb-6 svelte-r93edu"), h(i, "class", "svelte-r93edu"), h(n, "data-cy", "form-container"), h(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), h(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(N, F) {
      $(N, e, F), g(e, n), g(n, i), g(i, r), g(r, s), g(s, l), g(r, o), g(r, a), g(i, m), x(d, i, null), g(i, E), x(c, i, null), g(n, f), v && v.m(n, null), b = !0, _ || (M = J(a, "input", t[12]), _ = !0);
    },
    p(N, [F]) {
      (!b || F & 2 && u !== (u = fe(N[1]))) && (a.value = u);
      const V = {};
      F & 4 && (V.error = N[2]), d.$set(V);
      const O = {};
      F & 1 && (O.fields = N[0].merge), F & 4 && (O.error = N[2]), c.$set(O), N[2] ? v && (Ye(), j(v, 1, 1, () => {
        v = null;
      }), Re()) : v ? (v.p(N, F), F & 4 && D(v, 1)) : (v = xe(N), v.c(), D(v, 1), v.m(n, null));
    },
    i(N) {
      b || (D(d.$$.fragment, N), D(c.$$.fragment, N), D(v), b = !0);
    },
    o(N) {
      j(d.$$.fragment, N), j(c.$$.fragment, N), j(v), b = !1;
    },
    d(N) {
      N && p(e), L(d), L(c), v && v.d(), _ = !1, M();
    }
  };
}
function fe(t) {
  return JSON.stringify(t, null, 2);
}
function un(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function an(t, e, n) {
  let i, { editTemplateService: r = new Ve(Nt) } = e, s = r.template, l = r.result, o = null;
  function a(_) {
    r.setTemplateSource(_), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function u(_, M) {
    r.updateResultMergeFields(_, M), n(0, l = r.result);
  }
  function m() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function d() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function E(_) {
    r.addMergeField(_), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function c(_) {
    const M = r.getMergeFieldItem(_);
    r.removeMergeField(M), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function f() {
    r.setTemplateSource(r.result), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  const b = (_) => a(_.currentTarget.value);
  return t.$$set = (_) => {
    "editTemplateService" in _ && n(11, r = _.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, i = un(l) || "");
  }, [
    l,
    s,
    o,
    i,
    a,
    u,
    m,
    d,
    E,
    c,
    f,
    r,
    b
  ];
}
class cn extends U {
  constructor(e) {
    super(), B(this, e, an, on, k, { editTemplateService: 11 });
  }
}
class dn {
  constructor(e) {
    q(this, "templateService");
    q(this, "container");
    this.templateService = new Ve(e), this.container = void 0;
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
    this.container = e, new cn({
      target: e,
      props: {
        editTemplateService: this.templateService
      }
    });
  }
  renderElements(e, n) {
    const i = this.getInputs();
    n ? n.after(...i) : e.append(...i);
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
    return this.templateService.template.merge.forEach(
      (n) => new Pe({
        target: e,
        props: {
          find: n.find,
          replace: n.replace,
          field: n,
          handleFormInput: (i) => {
            this.templateService.updateResultMergeFields(i, n);
          }
        }
      })
    ), e.children;
  }
}
export {
  dn as default
};
