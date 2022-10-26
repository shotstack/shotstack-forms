var He = Object.defineProperty;
var Qe = (t, e, n) => e in t ? He(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var q = (t, e, n) => (Qe(t, typeof e != "symbol" ? e + "" : e, n), n);
function F() {
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
    return F;
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
      const h = e[u];
      h.claim_order !== void 0 && a.push(h);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1), i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let a = 0; a < e.length; a++) {
    const u = e[a].claim_order, h = (r > 0 && e[n[r]].claim_order <= u ? r + 1 : Xe(1, r, (N) => e[n[N]].claim_order, u)) - 1;
    i[a] = n[h] + 1;
    const c = h + 1;
    n[c] = a, r = Math.max(c, r);
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
    const h = u < s.length ? s[u] : null;
    t.insertBefore(l[a], h);
  }
}
function p(t, e) {
  if (he) {
    for (Ke(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function j(t, e, n) {
  he && !n ? p(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function g(t) {
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
function U(t) {
  return document.createTextNode(t);
}
function A() {
  return U(" ");
}
function J(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function we(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function b(t) {
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
function y(t, e, n) {
  return Oe(t, e, n, w);
}
function oe(t, e, n) {
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
    () => U(e),
    !0
  );
}
function C(t) {
  return P(t, " ");
}
function ye(t, e) {
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
function Fe(t) {
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
const ue = /* @__PURE__ */ new Set();
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
  t && t.i && (ue.delete(t), t.i(e));
}
function $(t, e, n, i) {
  if (t && t.o) {
    if (ue.has(t))
      return;
    ue.add(t), Z.c.push(() => {
      ue.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function $e(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function O(t) {
  t && t.c();
}
function z(t, e) {
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
function Y(t, e, n, i, r, s, l, o = [-1]) {
  const a = Ie;
  ne(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: F,
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
  let h = !1;
  if (u.ctx = n ? n(t, e.props || {}, (c, N, ...f) => {
    const m = f.length ? f[0] : N;
    return u.ctx && r(u.ctx[c], u.ctx[c] = m) && (!u.skip_bound && u.bound[c] && u.bound[c](m), h && lt(t, c)), N;
  }) : [], u.update(), h = !0, K(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      Ze();
      const c = b(e.target);
      u.fragment && u.fragment.l(c), c.forEach(g);
    } else
      u.fragment && u.fragment.c();
    e.intro && D(t.$$.fragment), x(t, e.target, e.anchor, e.customElement), We(), ze();
  }
  ne(a);
}
class R {
  $destroy() {
    L(this, 1), this.$destroy = F;
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
const st = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", ut = "A 'merge' property is required", ot = "Property 'merge' must be an array", at = "A 'find' property is required on every element inside 'merge'", ct = "Every 'find' property inside 'merge' must be of type string", ft = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", dt = "A 'replace' property is required on every element inside 'merge'", ht = "Unexpected error while parsing template JSON", mt = "Every element inside the 'merge' should be an object";
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
      throw new Q(ut);
    if (pt("merge", e))
      throw new Q(ot);
    const { merge: n } = e, i = wt(n);
    return { ...e, merge: i };
  } catch (e) {
    throw Be(e);
  }
}
function wt(t) {
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
function yt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Be(t) {
  return t instanceof Error ? t : yt(t) ? new Q(t.message) : new Q(ht);
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
      e = oe(i, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var r = b(e);
      n = oe(r, "path", { d: !0 }), b(n).forEach(g), r.forEach(g), this.h();
    },
    h() {
      d(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), d(e, "class", "fill-current w-4 h-4 mr-2"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20");
    },
    m(i, r) {
      j(i, e, r), p(e, n);
    },
    p: F,
    i: F,
    o: F,
    d(i) {
      i && g(e);
    }
  };
}
function Dt(t) {
  return [];
}
class Ft extends R {
  constructor(e) {
    super(), Y(this, e, Dt, Tt, k, {});
  }
}
function $t(t) {
  let e, n, i, r;
  return n = new Ft({}), {
    c() {
      e = w("a"), O(n.$$.fragment), i = U(`
	Download`), this.h();
    },
    l(s) {
      e = y(s, "A", { href: !0, download: !0, class: !0 });
      var l = b(e);
      z(n.$$.fragment, l), i = P(l, `
	Download`), l.forEach(g), this.h();
    },
    h() {
      d(e, "href", t[0]), d(e, "download", "result.json"), d(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      j(s, e, l), x(n, e, null), p(e, i), r = !0;
    },
    p(s, [l]) {
      (!r || l & 1) && d(e, "href", s[0]);
    },
    i(s) {
      r || (D(n.$$.fragment, s), r = !0);
    },
    o(s) {
      $(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && g(e), L(n);
    }
  };
}
function St(t, e, n) {
  let { download: i = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, i = r.download);
  }, [i];
}
class At extends R {
  constructor(e) {
    super(), Y(this, e, St, $t, k, { download: 0 });
  }
}
function Ct(t) {
  let e, n, i, r;
  return {
    c() {
      e = w("button"), n = U("Submit"), this.h();
    },
    l(s) {
      e = y(s, "BUTTON", { class: !0 });
      var l = b(e);
      n = P(l, "Submit"), l.forEach(g), this.h();
    },
    h() {
      d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      j(s, e, l), p(e, n), i || (r = J(e, "click", function() {
        de(t[0]) && t[0].apply(this, arguments);
      }), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: F,
    o: F,
    d(s) {
      s && g(e), i = !1, r();
    }
  };
}
function jt(t, e, n) {
  let { submit: i } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, i = r.submit);
  }, [i];
}
class xt extends R {
  constructor(e) {
    super(), Y(this, e, jt, Ct, k, { submit: 0 });
  }
}
function Lt(t) {
  let e, n, i, r, s;
  return n = new At({ props: { download: t[0] } }), r = new xt({ props: { submit: t[1] } }), {
    c() {
      e = w("div"), O(n.$$.fragment), i = A(), O(r.$$.fragment), this.h();
    },
    l(l) {
      e = y(l, "DIV", { class: !0 });
      var o = b(e);
      z(n.$$.fragment, o), i = C(o), z(r.$$.fragment, o), o.forEach(g), this.h();
    },
    h() {
      d(e, "class", "flex justify-between pt-4");
    },
    m(l, o) {
      j(l, e, o), x(n, e, null), p(e, i), x(r, e, null), s = !0;
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
      $(n.$$.fragment, l), $(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && g(e), L(n), L(r);
    }
  };
}
function kt(t, e, n) {
  let { download: i = "" } = e, { submit: r } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, i = s.download), "submit" in s && n(1, r = s.submit);
  }, [i, r];
}
class Ot extends R {
  constructor(e) {
    super(), Y(this, e, kt, Lt, k, { download: 0, submit: 1 });
  }
}
const X = [];
function Se(t, e = F) {
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
  function l(o, a = F) {
    const u = [o, a];
    return i.add(u), i.size === 1 && (n = e(r) || F), o(t), () => {
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
      e = y(r, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text");
    },
    m(r, s) {
      j(r, e, s), De(e, t[0]), n || (i = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(r, [s]) {
      s & 1 && e.value !== r[0] && De(e, r[0]);
    },
    i: F,
    o: F,
    d(r) {
      r && g(e), n = !1, K(i);
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
class Ae extends R {
  constructor(e) {
    super(), Y(this, e, Yt, zt, k, { value: 0, onFocus: 1 });
  }
}
function Rt(t) {
  let e, n, i, r, s, l, o, a, u, h, c, N, f, m, M, _, I, v;
  function E(T) {
    t[7](T);
  }
  let S = { onFocus: t[6] };
  t[1] !== void 0 && (S.value = t[1]), o = new Ae({ props: S }), ce.push(() => $e(o, "value", E));
  function V(T) {
    t[9](T);
  }
  let B = { onFocus: t[8] };
  return t[2] !== void 0 && (B.value = t[2]), h = new Ae({ props: B }), ce.push(() => $e(h, "value", V)), {
    c() {
      e = w("div"), n = w("div"), i = w("h1"), r = U("Add a new merge field"), s = A(), l = w("div"), O(o.$$.fragment), u = A(), O(h.$$.fragment), N = A(), f = w("div"), m = w("button"), M = U("Add"), this.h();
    },
    l(T) {
      e = y(T, "DIV", {});
      var H = b(e);
      n = y(H, "DIV", {});
      var G = b(n);
      i = y(G, "H1", { class: !0 });
      var ee = b(i);
      r = P(ee, "Add a new merge field"), ee.forEach(g), s = C(G), l = y(G, "DIV", { class: !0 });
      var W = b(l);
      z(o.$$.fragment, W), u = C(W), z(h.$$.fragment, W), N = C(W), f = y(W, "DIV", { class: !0 });
      var Me = b(f);
      m = y(Me, "BUTTON", { class: !0 });
      var Ee = b(m);
      M = P(Ee, "Add"), Ee.forEach(g), Me.forEach(g), W.forEach(g), G.forEach(g), H.forEach(g), this.h();
    },
    h() {
      d(i, "class", "text-teal-400 px-1"), d(m, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), d(f, "class", "flex flex-row-reverse"), d(l, "class", "border p-4 mb-6");
    },
    m(T, H) {
      j(T, e, H), p(e, n), p(n, i), p(i, r), p(n, s), p(n, l), x(o, l, null), p(l, u), x(h, l, null), p(l, N), p(l, f), p(f, m), p(m, M), _ = !0, I || (v = J(m, "click", we(t[10])), I = !0);
    },
    p(T, [H]) {
      const G = {};
      !a && H & 2 && (a = !0, G.value = T[1], Fe(() => a = !1)), o.$set(G);
      const ee = {};
      !c && H & 4 && (c = !0, ee.value = T[2], Fe(() => c = !1)), h.$set(ee);
    },
    i(T) {
      _ || (D(o.$$.fragment, T), D(h.$$.fragment, T), _ = !0);
    },
    o(T) {
      $(o.$$.fragment, T), $(h.$$.fragment, T), _ = !1;
    },
    d(T) {
      T && g(e), L(o), L(h), I = !1, v();
    }
  };
}
function Bt(t, e, n) {
  let i, r, s = Se("find");
  Te(t, s, (m) => n(1, i = m));
  let l = Se("replace");
  Te(t, l, (m) => n(2, r = m));
  let o = (m) => m.set(""), { addField: a } = e;
  const u = () => o(s);
  function h(m) {
    i = m, s.set(i);
  }
  const c = () => o(l);
  function N(m) {
    r = m, l.set(r);
  }
  const f = () => a({ find: i, replace: r });
  return t.$$set = (m) => {
    "addField" in m && n(0, a = m.addField);
  }, [
    a,
    i,
    r,
    s,
    l,
    o,
    u,
    h,
    c,
    N,
    f
  ];
}
class Ut extends R {
  constructor(e) {
    super(), Y(this, e, Bt, Rt, k, { addField: 0 });
  }
}
function Vt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = oe(i, "svg", { xmlns: !0, viewBox: !0 });
      var r = b(e);
      n = oe(r, "path", { fill: !0, d: !0 }), b(n).forEach(g), r.forEach(g), this.h();
    },
    h() {
      d(n, "fill", "white"), d(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 16 16");
    },
    m(i, r) {
      j(i, e, r), p(e, n);
    },
    p: F,
    i: F,
    o: F,
    d(i) {
      i && g(e);
    }
  };
}
function Pt(t) {
  return [];
}
class Ht extends R {
  constructor(e) {
    super(), Y(this, e, Pt, Vt, k, {});
  }
}
function Qt(t) {
  let e, n, i, r, s;
  return n = new Ht({}), {
    c() {
      e = w("button"), O(n.$$.fragment), this.h();
    },
    l(l) {
      e = y(l, "BUTTON", { class: !0 });
      var o = b(e);
      z(n.$$.fragment, o), o.forEach(g), this.h();
    },
    h() {
      d(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(l, o) {
      j(l, e, o), x(n, e, null), i = !0, r || (s = J(e, "click", we(function() {
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
      $(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && g(e), L(n), r = !1, s();
    }
  };
}
function Jt(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class Gt extends R {
  constructor(e) {
    super(), Y(this, e, Jt, Qt, k, { onClick: 0 });
  }
}
function qt(t) {
  let e, n;
  return {
    c() {
      e = w("label"), n = U(t[0]), this.h();
    },
    l(i) {
      e = y(i, "LABEL", { for: !0, class: !0 });
      var r = b(e);
      n = P(r, t[0]), r.forEach(g), this.h();
    },
    h() {
      d(e, "for", t[0]), d(e, "class", "block mb-2 monospace");
    },
    m(i, r) {
      j(i, e, r), p(e, n);
    },
    p(i, [r]) {
      r & 1 && ye(n, i[0]), r & 1 && d(e, "for", i[0]);
    },
    i: F,
    o: F,
    d(i) {
      i && g(e);
    }
  };
}
function Zt(t, e, n) {
  let { find: i } = e;
  return t.$$set = (r) => {
    "find" in r && n(0, i = r.find);
  }, [i];
}
class Wt extends R {
  constructor(e) {
    super(), Y(this, e, Zt, qt, k, { find: 0 });
  }
}
function Xt(t) {
  let e, n, i;
  return {
    c() {
      e = w("input"), this.h();
    },
    l(r) {
      e = y(r, "INPUT", {
        role: !0,
        class: !0,
        type: !0,
        label: !0
      }), this.h();
    },
    h() {
      d(e, "role", "textbox"), d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text"), e.value = t[2], d(e, "label", t[1]);
    },
    m(r, s) {
      j(r, e, s), n || (i = J(e, "input", t[4]), n = !0);
    },
    p(r, [s]) {
      s & 4 && e.value !== r[2] && (e.value = r[2]), s & 2 && d(e, "label", r[1]);
    },
    i: F,
    o: F,
    d(r) {
      r && g(e), n = !1, i();
    }
  };
}
function Kt(t, e, n) {
  let { field: i } = e, { find: r } = e, { replace: s } = e, { handleFormInput: l } = e;
  const o = (a) => l({ find: r, replace: a.currentTarget.value }, i);
  return t.$$set = (a) => {
    "field" in a && n(0, i = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, s = a.replace), "handleFormInput" in a && n(3, l = a.handleFormInput);
  }, [i, r, s, l, o];
}
class en extends R {
  constructor(e) {
    super(), Y(this, e, Kt, Xt, k, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function tn(t) {
  let e, n, i, r, s;
  return n = new Wt({ props: { find: t[0].find } }), r = new en({
    props: {
      find: t[0].find,
      replace: t[0].replace,
      field: t[0],
      handleFormInput: t[1]
    }
  }), {
    c() {
      e = w("div"), O(n.$$.fragment), i = A(), O(r.$$.fragment), this.h();
    },
    l(l) {
      e = y(l, "DIV", { "data-cy": !0 });
      var o = b(e);
      z(n.$$.fragment, o), i = C(o), z(r.$$.fragment, o), o.forEach(g), this.h();
    },
    h() {
      d(e, "data-cy", "label-input");
    },
    m(l, o) {
      j(l, e, o), x(n, e, null), p(e, i), x(r, e, null), s = !0;
    },
    p(l, [o]) {
      const a = {};
      o & 1 && (a.find = l[0].find), n.$set(a);
      const u = {};
      o & 1 && (u.find = l[0].find), o & 1 && (u.replace = l[0].replace), o & 1 && (u.field = l[0]), o & 2 && (u.handleFormInput = l[1]), r.$set(u);
    },
    i(l) {
      s || (D(n.$$.fragment, l), D(r.$$.fragment, l), s = !0);
    },
    o(l) {
      $(n.$$.fragment, l), $(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && g(e), L(n), L(r);
    }
  };
}
function nn(t, e, n) {
  let { field: i } = e, { handleFormInput: r } = e;
  return t.$$set = (s) => {
    "field" in s && n(0, i = s.field), "handleFormInput" in s && n(1, r = s.handleFormInput);
  }, [i, r];
}
class Pe extends R {
  constructor(e) {
    super(), Y(this, e, nn, tn, k, { field: 0, handleFormInput: 1 });
  }
}
function Ce(t, e, n) {
  const i = t.slice();
  return i[6] = e[n], i;
}
function je(t) {
  let e, n, i, r, s, l;
  n = new Pe({
    props: {
      field: t[6],
      handleFormInput: t[2]
    }
  });
  function o() {
    return t[5](t[6]);
  }
  return r = new Gt({ props: { onClick: o } }), {
    c() {
      e = w("div"), O(n.$$.fragment), i = A(), O(r.$$.fragment), s = A(), this.h();
    },
    l(a) {
      e = y(a, "DIV", { class: !0 });
      var u = b(e);
      z(n.$$.fragment, u), i = C(u), z(r.$$.fragment, u), s = C(u), u.forEach(g), this.h();
    },
    h() {
      d(e, "class", "relative");
    },
    m(a, u) {
      j(a, e, u), x(n, e, null), p(e, i), x(r, e, null), p(e, s), l = !0;
    },
    p(a, u) {
      t = a;
      const h = {};
      u & 2 && (h.field = t[6]), u & 4 && (h.handleFormInput = t[2]), n.$set(h);
      const c = {};
      u & 18 && (c.onClick = o), r.$set(c);
    },
    i(a) {
      l || (D(n.$$.fragment, a), D(r.$$.fragment, a), l = !0);
    },
    o(a) {
      $(n.$$.fragment, a), $(r.$$.fragment, a), l = !1;
    },
    d(a) {
      a && g(e), L(n), L(r);
    }
  };
}
function rn(t) {
  let e, n, i, r, s, l, o, a, u, h = t[1], c = [];
  for (let f = 0; f < h.length; f += 1)
    c[f] = je(Ce(t, h, f));
  const N = (f) => $(c[f], 1, 1, () => {
    c[f] = null;
  });
  return a = new Ut({ props: { addField: t[3] } }), {
    c() {
      e = w("div"), n = w("div"), i = w("h1"), r = U("Modify Merge Values"), s = A(), l = w("div");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      o = A(), O(a.$$.fragment), this.h();
    },
    l(f) {
      e = y(f, "DIV", {});
      var m = b(e);
      n = y(m, "DIV", { "data-cy": !0 });
      var M = b(n);
      i = y(M, "H1", { class: !0 });
      var _ = b(i);
      r = P(_, "Modify Merge Values"), _.forEach(g), s = C(M), l = y(M, "DIV", { class: !0 });
      var I = b(l);
      for (let v = 0; v < c.length; v += 1)
        c[v].l(I);
      I.forEach(g), M.forEach(g), o = C(m), z(a.$$.fragment, m), m.forEach(g), this.h();
    },
    h() {
      d(i, "class", "text-teal-400 px-1"), d(l, "class", "border p-4 mb-6"), d(n, "data-cy", "merge-fields-input-section"), ae(e, "hidden", t[0]);
    },
    m(f, m) {
      j(f, e, m), p(e, n), p(n, i), p(i, r), p(n, s), p(n, l);
      for (let M = 0; M < c.length; M += 1)
        c[M].m(l, null);
      p(e, o), x(a, e, null), u = !0;
    },
    p(f, [m]) {
      if (m & 22) {
        h = f[1];
        let _;
        for (_ = 0; _ < h.length; _ += 1) {
          const I = Ce(f, h, _);
          c[_] ? (c[_].p(I, m), D(c[_], 1)) : (c[_] = je(I), c[_].c(), D(c[_], 1), c[_].m(l, null));
        }
        for (Ye(), _ = h.length; _ < c.length; _ += 1)
          N(_);
        Re();
      }
      const M = {};
      m & 8 && (M.addField = f[3]), a.$set(M), (!u || m & 1) && ae(e, "hidden", f[0]);
    },
    i(f) {
      if (!u) {
        for (let m = 0; m < h.length; m += 1)
          D(c[m]);
        D(a.$$.fragment, f), u = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let m = 0; m < c.length; m += 1)
        $(c[m]);
      $(a.$$.fragment, f), u = !1;
    },
    d(f) {
      f && g(e), et(c, f), L(a);
    }
  };
}
function ln(t, e, n) {
  let { error: i } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: l } = e, { removeField: o } = e;
  const a = (u) => o(u);
  return t.$$set = (u) => {
    "error" in u && n(0, i = u.error), "fields" in u && n(1, r = u.fields), "handleFormInput" in u && n(2, s = u.handleFormInput), "addField" in u && n(3, l = u.addField), "removeField" in u && n(4, o = u.removeField);
  }, [i, r, s, l, o, a];
}
class sn extends R {
  constructor(e) {
    super(), Y(this, e, ln, rn, k, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function un(t) {
  let e, n, i, r;
  return {
    c() {
      e = w("button"), n = U("Reset"), this.h();
    },
    l(s) {
      e = y(s, "BUTTON", { class: !0 });
      var l = b(e);
      n = P(l, "Reset"), l.forEach(g), this.h();
    },
    h() {
      d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(s, l) {
      j(s, e, l), p(e, n), i || (r = J(e, "click", we(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: F,
    o: F,
    d(s) {
      s && g(e), i = !1, r();
    }
  };
}
function on(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class an extends R {
  constructor(e) {
    super(), Y(this, e, on, un, k, { onClick: 0 });
  }
}
function cn(t) {
  let e, n, i, r, s, l, o, a;
  return o = new an({ props: { onClick: t[0] } }), {
    c() {
      e = w("div"), n = w("p"), i = w("span"), r = U(t[2]), s = A(), l = w("div"), O(o.$$.fragment), this.h();
    },
    l(u) {
      e = y(u, "DIV", {});
      var h = b(e);
      n = y(h, "P", { "data-cy": !0, class: !0 });
      var c = b(n);
      i = y(c, "SPAN", { class: !0 });
      var N = b(i);
      r = P(N, t[2]), N.forEach(g), c.forEach(g), s = C(h), l = y(h, "DIV", { class: !0 });
      var f = b(l);
      z(o.$$.fragment, f), f.forEach(g), h.forEach(g), this.h();
    },
    h() {
      d(i, "class", "monospace text-orange-900"), d(n, "data-cy", "template-input-error"), d(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), d(l, "class", "flex flex-row-reverse "), ae(e, "hidden", !t[1]);
    },
    m(u, h) {
      j(u, e, h), p(e, n), p(n, i), p(i, r), p(e, s), p(e, l), x(o, l, null), a = !0;
    },
    p(u, [h]) {
      (!a || h & 4) && ye(r, u[2]);
      const c = {};
      h & 1 && (c.onClick = u[0]), o.$set(c), (!a || h & 2) && ae(e, "hidden", !u[1]);
    },
    i(u) {
      a || (D(o.$$.fragment, u), a = !0);
    },
    o(u) {
      $(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && g(e), L(o);
    }
  };
}
function fn(t, e, n) {
  let i, { onClick: r } = e, { error: s } = e;
  return t.$$set = (l) => {
    "onClick" in l && n(0, r = l.onClick), "error" in l && n(1, s = l.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, i = s && s.message || "");
  }, [r, s, i];
}
class dn extends R {
  constructor(e) {
    super(), Y(this, e, fn, cn, k, { onClick: 0, error: 1 });
  }
}
function xe(t) {
  let e, n, i, r, s, l, o, a, u, h = fe(t[0]) + "", c, N, f, m, M, _;
  return f = new Ot({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = w("div"), n = w("h1"), i = U("Result"), r = A(), s = w("abbr"), l = w("img"), a = A(), u = w("p"), c = U(h), N = A(), O(f.$$.fragment), this.h();
    },
    l(I) {
      e = y(I, "DIV", { "data-cy": !0, class: !0 });
      var v = b(e);
      n = y(v, "H1", { class: !0 });
      var E = b(n);
      i = P(E, "Result"), E.forEach(g), r = C(v), s = y(v, "ABBR", { title: !0, class: !0 });
      var S = b(s);
      l = y(S, "IMG", { src: !0, alt: !0, class: !0 }), S.forEach(g), a = C(v), u = y(v, "P", { "data-cy": !0, class: !0 });
      var V = b(u);
      c = P(V, h), V.forEach(g), N = C(v), z(f.$$.fragment, v), v.forEach(g), this.h();
    },
    h() {
      d(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Je(l.src, o = st) || d(l, "src", o), d(l, "alt", "copy-button"), d(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), d(s, "title", "Copy to clipboard"), d(s, "class", "svelte-r93edu"), d(u, "data-cy", "result"), d(u, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), d(e, "data-cy", "result-section"), d(e, "class", "svelte-r93edu");
    },
    m(I, v) {
      j(I, e, v), p(e, n), p(n, i), p(e, r), p(e, s), p(s, l), p(e, a), p(e, u), p(u, c), p(e, N), x(f, e, null), m = !0, M || (_ = J(l, "click", t[6]), M = !0);
    },
    p(I, v) {
      (!m || v & 1) && h !== (h = fe(I[0]) + "") && ye(c, h);
      const E = {};
      v & 8 && (E.download = I[3]), f.$set(E);
    },
    i(I) {
      m || (D(f.$$.fragment, I), m = !0);
    },
    o(I) {
      $(f.$$.fragment, I), m = !1;
    },
    d(I) {
      I && g(e), L(f), M = !1, _();
    }
  };
}
function hn(t) {
  let e, n, i, r, s, l, o, a, u, h, c, N, f, m, M, _, I;
  c = new dn({
    props: {
      error: t[2],
      onClick: t[10]
    }
  }), f = new sn({
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
      e = w("div"), n = w("section"), i = w("form"), r = w("div"), s = w("label"), l = U("Paste template"), o = A(), a = w("textarea"), h = A(), O(c.$$.fragment), N = A(), O(f.$$.fragment), m = A(), v && v.c(), this.h();
    },
    l(E) {
      e = y(E, "DIV", { class: !0 });
      var S = b(e);
      n = y(S, "SECTION", { "data-cy": !0, class: !0 });
      var V = b(n);
      i = y(V, "FORM", { class: !0 });
      var B = b(i);
      r = y(B, "DIV", { "data-cy": !0, class: !0 });
      var T = b(r);
      s = y(T, "LABEL", { for: !0, class: !0 });
      var H = b(s);
      l = P(H, "Paste template"), H.forEach(g), o = C(T), a = y(T, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), b(a).forEach(g), T.forEach(g), h = C(B), z(c.$$.fragment, B), N = C(B), z(f.$$.fragment, B), B.forEach(g), m = C(V), v && v.l(V), V.forEach(g), S.forEach(g), this.h();
    },
    h() {
      d(s, "for", "json-input"), d(s, "class", "text-teal-400 px-1 svelte-r93edu"), d(a, "data-cy", "template-input"), d(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), d(a, "id", "json-input"), a.value = u = fe(t[1]), d(r, "data-cy", "template-input-section"), d(r, "class", "mb-6 svelte-r93edu"), d(i, "class", "svelte-r93edu"), d(n, "data-cy", "form-container"), d(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), d(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(E, S) {
      j(E, e, S), p(e, n), p(n, i), p(i, r), p(r, s), p(s, l), p(r, o), p(r, a), p(i, h), x(c, i, null), p(i, N), x(f, i, null), p(n, m), v && v.m(n, null), M = !0, _ || (I = J(a, "input", t[12]), _ = !0);
    },
    p(E, [S]) {
      (!M || S & 2 && u !== (u = fe(E[1]))) && (a.value = u);
      const V = {};
      S & 4 && (V.error = E[2]), c.$set(V);
      const B = {};
      S & 1 && (B.fields = E[0].merge), S & 4 && (B.error = E[2]), f.$set(B), E[2] ? v && (Ye(), $(v, 1, 1, () => {
        v = null;
      }), Re()) : v ? (v.p(E, S), S & 4 && D(v, 1)) : (v = xe(E), v.c(), D(v, 1), v.m(n, null));
    },
    i(E) {
      M || (D(c.$$.fragment, E), D(f.$$.fragment, E), D(v), M = !0);
    },
    o(E) {
      $(c.$$.fragment, E), $(f.$$.fragment, E), $(v), M = !1;
    },
    d(E) {
      E && g(e), L(c), L(f), v && v.d(), _ = !1, I();
    }
  };
}
function fe(t) {
  return JSON.stringify(t, null, 2);
}
function mn(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function gn(t, e, n) {
  let i, { editTemplateService: r = new Ve(Nt) } = e, s = r.template, l = r.result, o = null;
  function a(_) {
    r.setTemplateSource(_), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function u(_, I) {
    r.updateResultMergeFields(_, I), n(0, l = r.result);
  }
  function h() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function c() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function N(_) {
    r.addMergeField(_), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function f(_) {
    const I = r.getMergeFieldItem(_);
    r.removeMergeField(I), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  function m() {
    r.setTemplateSource(r.result), n(1, s = r.template), n(0, l = r.result), n(2, o = r.error);
  }
  const M = (_) => a(_.currentTarget.value);
  return t.$$set = (_) => {
    "editTemplateService" in _ && n(11, r = _.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, i = mn(l) || "");
  }, [
    l,
    s,
    o,
    i,
    a,
    u,
    h,
    c,
    N,
    f,
    m,
    r,
    M
  ];
}
class pn extends R {
  constructor(e) {
    super(), Y(this, e, gn, hn, k, { editTemplateService: 11 });
  }
}
class vn {
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
    this.container = e, new pn({
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
  vn as default
};
