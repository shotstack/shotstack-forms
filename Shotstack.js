var Qe = Object.defineProperty;
var Je = (t, e, n) => e in t ? Qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Z = (t, e, n) => (Je(t, typeof e != "symbol" ? e + "" : e, n), n);
function D() {
}
function ke(t) {
  return t();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function ee(t) {
  t.forEach(ke);
}
function de(t) {
  return typeof t == "function";
}
function O(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ie;
function Ge(t, e) {
  return ie || (ie = document.createElement("a")), ie.href = e, t === ie.href;
}
function qe(t) {
  return Object.keys(t).length === 0;
}
function Ze(t, ...e) {
  if (t == null)
    return D;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Te(t, e, n) {
  t.$$.on_destroy.push(Ze(e, n));
}
let he = !1;
function We() {
  he = !0;
}
function Xe() {
  he = !1;
}
function Ke(t, e, n, i) {
  for (; t < e; ) {
    const r = t + (e - t >> 1);
    n(r) <= i ? t = r + 1 : e = r;
  }
  return t;
}
function et(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const d = e[o];
      d.claim_order !== void 0 && a.push(d);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1), i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let a = 0; a < e.length; a++) {
    const o = e[a].claim_order, d = (r > 0 && e[n[r]].claim_order <= o ? r + 1 : Ke(1, r, (E) => e[n[E]].claim_order, o)) - 1;
    i[a] = n[d] + 1;
    const c = d + 1;
    n[c] = a, r = Math.max(c, r);
  }
  const s = [], l = [];
  let u = e.length - 1;
  for (let a = n[r] + 1; a != 0; a = i[a - 1]) {
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
    const d = o < s.length ? s[o] : null;
    t.insertBefore(l[a], d);
  }
}
function m(t, e) {
  if (he) {
    for (et(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function x(t, e, n) {
  he && !n ? m(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function g(t) {
  t.parentNode.removeChild(t);
}
function tt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function b(t) {
  return document.createElement(t);
}
function re(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function V(t) {
  return document.createTextNode(t);
}
function A() {
  return V(" ");
}
function J(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ye(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function f(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function v(t) {
  return Array.from(t.childNodes);
}
function nt(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Le(t, e, n, i, r = !1) {
  nt(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const u = t[l];
      if (e(u)) {
        const a = n(u);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, r || (t.claim_info.last_index = l), u;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const u = t[l];
      if (e(u)) {
        const a = n(u);
        return a === void 0 ? t.splice(l, 1) : t[l] = a, r ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, u;
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
      const u = r.attributes[l];
      n[u.name] || s.push(u.name);
    }
    s.forEach((l) => r.removeAttribute(l));
  }, () => i(e));
}
function y(t, e, n) {
  return Oe(t, e, n, b);
}
function oe(t, e, n) {
  return Oe(t, e, n, re);
}
function P(t, e) {
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
    () => V(e),
    !0
  );
}
function C(t) {
  return P(t, " ");
}
function we(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function $e(t, e) {
  t.value = e == null ? "" : e;
}
function ae(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Ie;
function ne(t) {
  Ie = t;
}
const te = [], ce = [], se = [], pe = [], rt = Promise.resolve();
let _e = !1;
function it() {
  _e || (_e = !0, rt.then(ze));
}
function be(t) {
  se.push(t);
}
function De(t) {
  pe.push(t);
}
const ge = /* @__PURE__ */ new Set();
let le = 0;
function ze() {
  const t = Ie;
  do {
    for (; le < te.length; ) {
      const e = te[le];
      le++, ne(e), lt(e.$$);
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
function lt(t) {
  if (t.fragment !== null) {
    t.update(), ee(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(be);
  }
}
const ue = /* @__PURE__ */ new Set();
let W;
function Ye() {
  W = {
    r: 0,
    c: [],
    p: W
  };
}
function Re() {
  W.r || ee(W.c), W = W.p;
}
function F(t, e) {
  t && t.i && (ue.delete(t), t.i(e));
}
function j(t, e, n, i) {
  if (t && t.o) {
    if (ue.has(t))
      return;
    ue.add(t), W.c.push(() => {
      ue.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Fe(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function z(t) {
  t && t.c();
}
function Y(t, e) {
  t && t.l(e);
}
function k(t, e, n, i) {
  const { fragment: r, on_mount: s, on_destroy: l, after_update: u } = t.$$;
  r && r.m(e, n), i || be(() => {
    const a = s.map(ke).filter(de);
    l ? l.push(...a) : ee(a), t.$$.on_mount = [];
  }), u.forEach(be);
}
function L(t, e) {
  const n = t.$$;
  n.fragment !== null && (ee(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function st(t, e) {
  t.$$.dirty[0] === -1 && (te.push(t), it(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(t, e, n, i, r, s, l, u = [-1]) {
  const a = Ie;
  ne(t);
  const o = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: D,
    not_equal: r,
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
  let d = !1;
  if (o.ctx = n ? n(t, e.props || {}, (c, E, ...h) => {
    const p = h.length ? h[0] : E;
    return o.ctx && r(o.ctx[c], o.ctx[c] = p) && (!o.skip_bound && o.bound[c] && o.bound[c](p), d && st(t, c)), E;
  }) : [], o.update(), d = !0, ee(o.before_update), o.fragment = i ? i(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      We();
      const c = v(e.target);
      o.fragment && o.fragment.l(c), c.forEach(g);
    } else
      o.fragment && o.fragment.c();
    e.intro && F(t.$$.fragment), k(t, e.target, e.anchor, e.customElement), Xe(), ze();
  }
  ne(a);
}
class U {
  $destroy() {
    L(this, 1), this.$destroy = D;
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !qe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ut = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", ot = "A 'merge' property is required", at = "Property 'merge' must be an array", ct = "A 'find' property is required on every element inside 'merge'", ft = "Every 'find' property inside 'merge' must be of type string", dt = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", ht = "A 'replace' property is required on every element inside 'merge'", mt = "Unexpected error while parsing template JSON", gt = "Every element inside the 'merge' should be an object";
class G extends Error {
  constructor(e) {
    super(e);
  }
}
function pt(t) {
  return typeof t == "object";
}
function me(t, e) {
  return t in e;
}
function ve(t, e) {
  return !me(t, e);
}
function _t(t, e) {
  return me(t, e) && !(e[t] instanceof Array);
}
function bt(t, e) {
  return me(t, e) && typeof e[t] != "string";
}
function vt(t, e) {
  const n = me(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function yt(t) {
  try {
    const e = JSON.parse(t);
    if (ve("merge", e))
      throw new G(ot);
    if (_t("merge", e))
      throw new G(at);
    const { merge: n } = e, i = wt(n);
    return { ...e, merge: i };
  } catch (e) {
    throw Ue(e);
  }
}
function wt(t) {
  return t.map((n) => {
    if (!pt(n))
      throw new G(gt);
    if (ve("find", n))
      throw new G(ct);
    if (ve("replace", n))
      throw new G(ht);
    if (bt("find", n))
      throw new G(ft);
    if (vt("find", n))
      throw new G(dt);
    return n;
  }).map(({ find: n, replace: i }) => ({
    find: n,
    replace: Be(i)
  }));
}
function It(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Ue(t) {
  return t instanceof Error ? t : It(t) ? new G(t.message) : new G(mt);
}
function Be(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Ve {
  constructor(e) {
    Z(this, "template");
    Z(this, "_result");
    Z(this, "_error");
    Z(this, "handlers");
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = {
      change: [],
      submit: [],
      error: [this.logger],
      upload: []
    }, this.setTemplateSource(e);
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
      const n = yt(Be(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const i = Ue(n);
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
  getSrcPlaceholders() {
    if (!this.template.timeline || !this.template.timeline.tracks)
      return [];
    const e = this.template.timeline.tracks, n = [];
    for (let i = 0; i < e.length; i++)
      for (let r = 0; r < e[i].clips.length; r++) {
        const s = {
          placeholder: e[i].clips[r].asset.src,
          asset: e[i].clips[r].asset
        };
        s.placeholder.charAt(0) === "{" && n.push(s);
      }
    return n;
  }
  updateSrc(e, n) {
    const i = this.handlers.upload.reduce(
      (r, s) => s(e),
      ""
    );
    n.src = i, this.handlers.change.forEach((r) => r(this.result));
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
}, Nt = {
  format: "mp4",
  resolution: "hd"
}, Tt = {
  merge: Et,
  timeline: Mt,
  output: Nt
};
function $t(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = oe(i, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var r = v(e);
      n = oe(r, "path", { d: !0 }), v(n).forEach(g), r.forEach(g), this.h();
    },
    h() {
      f(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), f(e, "class", "fill-current w-4 h-4 mr-2"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "viewBox", "0 0 20 20");
    },
    m(i, r) {
      x(i, e, r), m(e, n);
    },
    p: D,
    i: D,
    o: D,
    d(i) {
      i && g(e);
    }
  };
}
function Dt(t) {
  return [];
}
class Ft extends U {
  constructor(e) {
    super(), R(this, e, Dt, $t, O, {});
  }
}
function St(t) {
  let e, n, i, r;
  return n = new Ft({}), {
    c() {
      e = b("a"), z(n.$$.fragment), i = V(`
	Download`), this.h();
    },
    l(s) {
      e = y(s, "A", { href: !0, download: !0, class: !0 });
      var l = v(e);
      Y(n.$$.fragment, l), i = P(l, `
	Download`), l.forEach(g), this.h();
    },
    h() {
      f(e, "href", t[0]), f(e, "download", "result.json"), f(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, l) {
      x(s, e, l), k(n, e, null), m(e, i), r = !0;
    },
    p(s, [l]) {
      (!r || l & 1) && f(e, "href", s[0]);
    },
    i(s) {
      r || (F(n.$$.fragment, s), r = !0);
    },
    o(s) {
      j(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && g(e), L(n);
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
    super(), R(this, e, At, St, O, { download: 0 });
  }
}
function jt(t) {
  let e, n, i, r;
  return {
    c() {
      e = b("button"), n = V("Submit"), this.h();
    },
    l(s) {
      e = y(s, "BUTTON", { class: !0 });
      var l = v(e);
      n = P(l, "Submit"), l.forEach(g), this.h();
    },
    h() {
      f(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, l) {
      x(s, e, l), m(e, n), i || (r = J(e, "click", function() {
        de(t[0]) && t[0].apply(this, arguments);
      }), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: D,
    o: D,
    d(s) {
      s && g(e), i = !1, r();
    }
  };
}
function xt(t, e, n) {
  let { submit: i } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, i = r.submit);
  }, [i];
}
class kt extends U {
  constructor(e) {
    super(), R(this, e, xt, jt, O, { submit: 0 });
  }
}
function Lt(t) {
  let e, n, i, r, s;
  return n = new Ct({ props: { download: t[0] } }), r = new kt({ props: { submit: t[1] } }), {
    c() {
      e = b("div"), z(n.$$.fragment), i = A(), z(r.$$.fragment), this.h();
    },
    l(l) {
      e = y(l, "DIV", { class: !0 });
      var u = v(e);
      Y(n.$$.fragment, u), i = C(u), Y(r.$$.fragment, u), u.forEach(g), this.h();
    },
    h() {
      f(e, "class", "flex justify-between pt-4");
    },
    m(l, u) {
      x(l, e, u), k(n, e, null), m(e, i), k(r, e, null), s = !0;
    },
    p(l, [u]) {
      const a = {};
      u & 1 && (a.download = l[0]), n.$set(a);
      const o = {};
      u & 2 && (o.submit = l[1]), r.$set(o);
    },
    i(l) {
      s || (F(n.$$.fragment, l), F(r.$$.fragment, l), s = !0);
    },
    o(l) {
      j(n.$$.fragment, l), j(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && g(e), L(n), L(r);
    }
  };
}
function Ot(t, e, n) {
  let { download: i = "" } = e, { submit: r } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, i = s.download), "submit" in s && n(1, r = s.submit);
  }, [i, r];
}
class zt extends U {
  constructor(e) {
    super(), R(this, e, Ot, Lt, O, { download: 0, submit: 1 });
  }
}
const K = [];
function Se(t, e = D) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (O(t, u) && (t = u, n)) {
      const a = !K.length;
      for (const o of i)
        o[1](), K.push(o, t);
      if (a) {
        for (let o = 0; o < K.length; o += 2)
          K[o][0](K[o + 1]);
        K.length = 0;
      }
    }
  }
  function s(u) {
    r(u(t));
  }
  function l(u, a = D) {
    const o = [u, a];
    return i.add(o), i.size === 1 && (n = e(r) || D), u(t), () => {
      i.delete(o), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: l };
}
function Yt(t) {
  let e, n, i;
  return {
    c() {
      e = b("input"), this.h();
    },
    l(r) {
      e = y(r, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      f(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(e, "type", "text");
    },
    m(r, s) {
      x(r, e, s), $e(e, t[0]), n || (i = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(r, [s]) {
      s & 1 && e.value !== r[0] && $e(e, r[0]);
    },
    i: D,
    o: D,
    d(r) {
      r && g(e), n = !1, ee(i);
    }
  };
}
function Rt(t, e, n) {
  let { value: i } = e, { onFocus: r } = e;
  function s() {
    i = this.value, n(0, i);
  }
  const l = (u) => r(u.currentTarget);
  return t.$$set = (u) => {
    "value" in u && n(0, i = u.value), "onFocus" in u && n(1, r = u.onFocus);
  }, [i, r, s, l];
}
class Ae extends U {
  constructor(e) {
    super(), R(this, e, Rt, Yt, O, { value: 0, onFocus: 1 });
  }
}
function Ut(t) {
  let e, n, i, r, s, l, u, a, o, d, c, E, h, p, I, _, w, $;
  function Q(T) {
    t[7](T);
  }
  let M = { onFocus: t[6] };
  t[1] !== void 0 && (M.value = t[1]), u = new Ae({ props: M }), ce.push(() => Fe(u, "value", Q));
  function N(T) {
    t[9](T);
  }
  let B = { onFocus: t[8] };
  return t[2] !== void 0 && (B.value = t[2]), d = new Ae({ props: B }), ce.push(() => Fe(d, "value", N)), {
    c() {
      e = b("div"), n = b("div"), i = b("h1"), r = V("Add a new merge field"), s = A(), l = b("div"), z(u.$$.fragment), o = A(), z(d.$$.fragment), E = A(), h = b("div"), p = b("button"), I = V("Add"), this.h();
    },
    l(T) {
      e = y(T, "DIV", {});
      var S = v(e);
      n = y(S, "DIV", {});
      var H = v(n);
      i = y(H, "H1", { class: !0 });
      var q = v(i);
      r = P(q, "Add a new merge field"), q.forEach(g), s = C(H), l = y(H, "DIV", { class: !0 });
      var X = v(l);
      Y(u.$$.fragment, X), o = C(X), Y(d.$$.fragment, X), E = C(X), h = y(X, "DIV", { class: !0 });
      var Ee = v(h);
      p = y(Ee, "BUTTON", { class: !0 });
      var Me = v(p);
      I = P(Me, "Add"), Me.forEach(g), Ee.forEach(g), X.forEach(g), H.forEach(g), S.forEach(g), this.h();
    },
    h() {
      f(i, "class", "text-teal-400 px-1"), f(p, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), f(h, "class", "flex flex-row-reverse"), f(l, "class", "border p-4 mb-6");
    },
    m(T, S) {
      x(T, e, S), m(e, n), m(n, i), m(i, r), m(n, s), m(n, l), k(u, l, null), m(l, o), k(d, l, null), m(l, E), m(l, h), m(h, p), m(p, I), _ = !0, w || ($ = J(p, "click", ye(t[10])), w = !0);
    },
    p(T, [S]) {
      const H = {};
      !a && S & 2 && (a = !0, H.value = T[1], De(() => a = !1)), u.$set(H);
      const q = {};
      !c && S & 4 && (c = !0, q.value = T[2], De(() => c = !1)), d.$set(q);
    },
    i(T) {
      _ || (F(u.$$.fragment, T), F(d.$$.fragment, T), _ = !0);
    },
    o(T) {
      j(u.$$.fragment, T), j(d.$$.fragment, T), _ = !1;
    },
    d(T) {
      T && g(e), L(u), L(d), w = !1, $();
    }
  };
}
function Bt(t, e, n) {
  let i, r, s = Se("find");
  Te(t, s, (p) => n(1, i = p));
  let l = Se("replace");
  Te(t, l, (p) => n(2, r = p));
  let u = (p) => p.set(""), { addField: a } = e;
  const o = () => u(s);
  function d(p) {
    i = p, s.set(i);
  }
  const c = () => u(l);
  function E(p) {
    r = p, l.set(r);
  }
  const h = () => a({ find: i, replace: r });
  return t.$$set = (p) => {
    "addField" in p && n(0, a = p.addField);
  }, [
    a,
    i,
    r,
    s,
    l,
    u,
    o,
    d,
    c,
    E,
    h
  ];
}
class Vt extends U {
  constructor(e) {
    super(), R(this, e, Bt, Ut, O, { addField: 0 });
  }
}
function Pt(t) {
  let e, n;
  return {
    c() {
      e = re("svg"), n = re("path"), this.h();
    },
    l(i) {
      e = oe(i, "svg", { xmlns: !0, viewBox: !0 });
      var r = v(e);
      n = oe(r, "path", { fill: !0, d: !0 }), v(n).forEach(g), r.forEach(g), this.h();
    },
    h() {
      f(n, "fill", "white"), f(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "viewBox", "0 0 16 16");
    },
    m(i, r) {
      x(i, e, r), m(e, n);
    },
    p: D,
    i: D,
    o: D,
    d(i) {
      i && g(e);
    }
  };
}
function Ht(t) {
  return [];
}
class Qt extends U {
  constructor(e) {
    super(), R(this, e, Ht, Pt, O, {});
  }
}
function Jt(t) {
  let e, n, i, r, s;
  return n = new Qt({}), {
    c() {
      e = b("button"), z(n.$$.fragment), this.h();
    },
    l(l) {
      e = y(l, "BUTTON", { class: !0 });
      var u = v(e);
      Y(n.$$.fragment, u), u.forEach(g), this.h();
    },
    h() {
      f(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(l, u) {
      x(l, e, u), k(n, e, null), i = !0, r || (s = J(e, "click", ye(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(l, [u]) {
      t = l;
    },
    i(l) {
      i || (F(n.$$.fragment, l), i = !0);
    },
    o(l) {
      j(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && g(e), L(n), r = !1, s();
    }
  };
}
function Gt(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class qt extends U {
  constructor(e) {
    super(), R(this, e, Gt, Jt, O, { onClick: 0 });
  }
}
function Zt(t) {
  let e, n;
  return {
    c() {
      e = b("label"), n = V(t[0]), this.h();
    },
    l(i) {
      e = y(i, "LABEL", { for: !0, class: !0 });
      var r = v(e);
      n = P(r, t[0]), r.forEach(g), this.h();
    },
    h() {
      f(e, "for", t[0]), f(e, "class", "block mb-2 monospace");
    },
    m(i, r) {
      x(i, e, r), m(e, n);
    },
    p(i, [r]) {
      r & 1 && we(n, i[0]), r & 1 && f(e, "for", i[0]);
    },
    i: D,
    o: D,
    d(i) {
      i && g(e);
    }
  };
}
function Wt(t, e, n) {
  let { find: i } = e;
  return t.$$set = (r) => {
    "find" in r && n(0, i = r.find);
  }, [i];
}
class Xt extends U {
  constructor(e) {
    super(), R(this, e, Wt, Zt, O, { find: 0 });
  }
}
function Kt(t) {
  let e, n, i;
  return {
    c() {
      e = b("input"), this.h();
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
      f(e, "role", "textbox"), f(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(e, "type", "text"), e.value = t[2], f(e, "label", t[1]);
    },
    m(r, s) {
      x(r, e, s), n || (i = J(e, "input", t[4]), n = !0);
    },
    p(r, [s]) {
      s & 4 && e.value !== r[2] && (e.value = r[2]), s & 2 && f(e, "label", r[1]);
    },
    i: D,
    o: D,
    d(r) {
      r && g(e), n = !1, i();
    }
  };
}
function en(t, e, n) {
  let { field: i } = e, { find: r } = e, { replace: s } = e, { handleFormInput: l } = e;
  const u = (a) => l({ find: r, replace: a.currentTarget.value }, i);
  return t.$$set = (a) => {
    "field" in a && n(0, i = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, s = a.replace), "handleFormInput" in a && n(3, l = a.handleFormInput);
  }, [i, r, s, l, u];
}
class tn extends U {
  constructor(e) {
    super(), R(this, e, en, Kt, O, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function nn(t) {
  let e, n, i, r, s;
  return n = new Xt({ props: { find: t[0].find } }), r = new tn({
    props: {
      find: t[0].find,
      replace: t[0].replace,
      field: t[0],
      handleFormInput: t[1]
    }
  }), {
    c() {
      e = b("div"), z(n.$$.fragment), i = A(), z(r.$$.fragment), this.h();
    },
    l(l) {
      e = y(l, "DIV", { "data-cy": !0 });
      var u = v(e);
      Y(n.$$.fragment, u), i = C(u), Y(r.$$.fragment, u), u.forEach(g), this.h();
    },
    h() {
      f(e, "data-cy", "label-input");
    },
    m(l, u) {
      x(l, e, u), k(n, e, null), m(e, i), k(r, e, null), s = !0;
    },
    p(l, [u]) {
      const a = {};
      u & 1 && (a.find = l[0].find), n.$set(a);
      const o = {};
      u & 1 && (o.find = l[0].find), u & 1 && (o.replace = l[0].replace), u & 1 && (o.field = l[0]), u & 2 && (o.handleFormInput = l[1]), r.$set(o);
    },
    i(l) {
      s || (F(n.$$.fragment, l), F(r.$$.fragment, l), s = !0);
    },
    o(l) {
      j(n.$$.fragment, l), j(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && g(e), L(n), L(r);
    }
  };
}
function rn(t, e, n) {
  let { field: i } = e, { handleFormInput: r } = e;
  return t.$$set = (s) => {
    "field" in s && n(0, i = s.field), "handleFormInput" in s && n(1, r = s.handleFormInput);
  }, [i, r];
}
class Pe extends U {
  constructor(e) {
    super(), R(this, e, rn, nn, O, { field: 0, handleFormInput: 1 });
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
  function u() {
    return t[5](t[6]);
  }
  return r = new qt({ props: { onClick: u } }), {
    c() {
      e = b("div"), z(n.$$.fragment), i = A(), z(r.$$.fragment), s = A(), this.h();
    },
    l(a) {
      e = y(a, "DIV", { class: !0 });
      var o = v(e);
      Y(n.$$.fragment, o), i = C(o), Y(r.$$.fragment, o), s = C(o), o.forEach(g), this.h();
    },
    h() {
      f(e, "class", "relative");
    },
    m(a, o) {
      x(a, e, o), k(n, e, null), m(e, i), k(r, e, null), m(e, s), l = !0;
    },
    p(a, o) {
      t = a;
      const d = {};
      o & 2 && (d.field = t[6]), o & 4 && (d.handleFormInput = t[2]), n.$set(d);
      const c = {};
      o & 18 && (c.onClick = u), r.$set(c);
    },
    i(a) {
      l || (F(n.$$.fragment, a), F(r.$$.fragment, a), l = !0);
    },
    o(a) {
      j(n.$$.fragment, a), j(r.$$.fragment, a), l = !1;
    },
    d(a) {
      a && g(e), L(n), L(r);
    }
  };
}
function ln(t) {
  let e, n, i, r, s, l, u, a, o, d = t[1], c = [];
  for (let h = 0; h < d.length; h += 1)
    c[h] = je(Ce(t, d, h));
  const E = (h) => j(c[h], 1, 1, () => {
    c[h] = null;
  });
  return a = new Vt({ props: { addField: t[3] } }), {
    c() {
      e = b("div"), n = b("div"), i = b("h1"), r = V("Modify Merge Values"), s = A(), l = b("div");
      for (let h = 0; h < c.length; h += 1)
        c[h].c();
      u = A(), z(a.$$.fragment), this.h();
    },
    l(h) {
      e = y(h, "DIV", {});
      var p = v(e);
      n = y(p, "DIV", { "data-cy": !0 });
      var I = v(n);
      i = y(I, "H1", { class: !0 });
      var _ = v(i);
      r = P(_, "Modify Merge Values"), _.forEach(g), s = C(I), l = y(I, "DIV", { class: !0 });
      var w = v(l);
      for (let $ = 0; $ < c.length; $ += 1)
        c[$].l(w);
      w.forEach(g), I.forEach(g), u = C(p), Y(a.$$.fragment, p), p.forEach(g), this.h();
    },
    h() {
      f(i, "class", "text-teal-400 px-1"), f(l, "class", "border p-4 mb-6"), f(n, "data-cy", "merge-fields-input-section"), ae(e, "hidden", t[0]);
    },
    m(h, p) {
      x(h, e, p), m(e, n), m(n, i), m(i, r), m(n, s), m(n, l);
      for (let I = 0; I < c.length; I += 1)
        c[I].m(l, null);
      m(e, u), k(a, e, null), o = !0;
    },
    p(h, [p]) {
      if (p & 22) {
        d = h[1];
        let _;
        for (_ = 0; _ < d.length; _ += 1) {
          const w = Ce(h, d, _);
          c[_] ? (c[_].p(w, p), F(c[_], 1)) : (c[_] = je(w), c[_].c(), F(c[_], 1), c[_].m(l, null));
        }
        for (Ye(), _ = d.length; _ < c.length; _ += 1)
          E(_);
        Re();
      }
      const I = {};
      p & 8 && (I.addField = h[3]), a.$set(I), (!o || p & 1) && ae(e, "hidden", h[0]);
    },
    i(h) {
      if (!o) {
        for (let p = 0; p < d.length; p += 1)
          F(c[p]);
        F(a.$$.fragment, h), o = !0;
      }
    },
    o(h) {
      c = c.filter(Boolean);
      for (let p = 0; p < c.length; p += 1)
        j(c[p]);
      j(a.$$.fragment, h), o = !1;
    },
    d(h) {
      h && g(e), tt(c, h), L(a);
    }
  };
}
function sn(t, e, n) {
  let { error: i } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: l } = e, { removeField: u } = e;
  const a = (o) => u(o);
  return t.$$set = (o) => {
    "error" in o && n(0, i = o.error), "fields" in o && n(1, r = o.fields), "handleFormInput" in o && n(2, s = o.handleFormInput), "addField" in o && n(3, l = o.addField), "removeField" in o && n(4, u = o.removeField);
  }, [i, r, s, l, u, a];
}
class un extends U {
  constructor(e) {
    super(), R(this, e, sn, ln, O, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function on(t) {
  let e, n, i, r;
  return {
    c() {
      e = b("button"), n = V("Reset"), this.h();
    },
    l(s) {
      e = y(s, "BUTTON", { class: !0 });
      var l = v(e);
      n = P(l, "Reset"), l.forEach(g), this.h();
    },
    h() {
      f(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(s, l) {
      x(s, e, l), m(e, n), i || (r = J(e, "click", ye(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), i = !0);
    },
    p(s, [l]) {
      t = s;
    },
    i: D,
    o: D,
    d(s) {
      s && g(e), i = !1, r();
    }
  };
}
function an(t, e, n) {
  let { onClick: i } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, i = r.onClick);
  }, [i];
}
class cn extends U {
  constructor(e) {
    super(), R(this, e, an, on, O, { onClick: 0 });
  }
}
function fn(t) {
  let e, n, i, r, s, l, u, a;
  return u = new cn({ props: { onClick: t[0] } }), {
    c() {
      e = b("div"), n = b("p"), i = b("span"), r = V(t[2]), s = A(), l = b("div"), z(u.$$.fragment), this.h();
    },
    l(o) {
      e = y(o, "DIV", {});
      var d = v(e);
      n = y(d, "P", { "data-cy": !0, class: !0 });
      var c = v(n);
      i = y(c, "SPAN", { class: !0 });
      var E = v(i);
      r = P(E, t[2]), E.forEach(g), c.forEach(g), s = C(d), l = y(d, "DIV", { class: !0 });
      var h = v(l);
      Y(u.$$.fragment, h), h.forEach(g), d.forEach(g), this.h();
    },
    h() {
      f(i, "class", "monospace text-orange-900"), f(n, "data-cy", "template-input-error"), f(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), f(l, "class", "flex flex-row-reverse "), ae(e, "hidden", !t[1]);
    },
    m(o, d) {
      x(o, e, d), m(e, n), m(n, i), m(i, r), m(e, s), m(e, l), k(u, l, null), a = !0;
    },
    p(o, [d]) {
      (!a || d & 4) && we(r, o[2]);
      const c = {};
      d & 1 && (c.onClick = o[0]), u.$set(c), (!a || d & 2) && ae(e, "hidden", !o[1]);
    },
    i(o) {
      a || (F(u.$$.fragment, o), a = !0);
    },
    o(o) {
      j(u.$$.fragment, o), a = !1;
    },
    d(o) {
      o && g(e), L(u);
    }
  };
}
function dn(t, e, n) {
  let i, { onClick: r } = e, { error: s } = e;
  return t.$$set = (l) => {
    "onClick" in l && n(0, r = l.onClick), "error" in l && n(1, s = l.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, i = s && s.message || "");
  }, [r, s, i];
}
class hn extends U {
  constructor(e) {
    super(), R(this, e, dn, fn, O, { onClick: 0, error: 1 });
  }
}
function mn(t) {
  let e, n, i, r, s, l, u, a, o;
  return {
    c() {
      e = b("div"), n = b("label"), i = V("Upload src"), r = A(), s = b("input"), l = A(), u = b("input"), this.h();
    },
    l(d) {
      e = y(d, "DIV", { "data-cy": !0 });
      var c = v(e);
      n = y(c, "LABEL", { class: !0, for: !0 });
      var E = v(n);
      i = P(E, "Upload src"), E.forEach(g), r = C(c), s = y(c, "INPUT", { class: !0, type: !0 }), l = C(c), u = y(c, "INPUT", { class: !0, type: !0 }), c.forEach(g), this.h();
    },
    h() {
      f(n, "class", "block mb-2 monospace"), f(n, "for", "input"), f(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(s, "type", "text"), s.value = t[0], s.disabled = !0, f(u, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), f(u, "type", "file"), f(e, "data-cy", "source-input");
    },
    m(d, c) {
      x(d, e, c), m(e, n), m(n, i), m(e, r), m(e, s), m(e, l), m(e, u), a || (o = J(u, "change", t[2]), a = !0);
    },
    p(d, [c]) {
      c & 1 && s.value !== d[0] && (s.value = d[0]);
    },
    i: D,
    o: D,
    d(d) {
      d && g(e), a = !1, o();
    }
  };
}
function gn(t, e, n) {
  let i = "";
  function r(l) {
    var u;
    !l || n(0, i = ((u = l.item(0)) == null ? void 0 : u.name) || "");
  }
  return [i, r, (l) => r(l.currentTarget.files)];
}
class He extends U {
  constructor(e) {
    super(), R(this, e, gn, mn, O, {});
  }
}
function xe(t) {
  let e, n, i, r, s, l, u, a, o, d = fe(t[0]) + "", c, E, h, p, I, _;
  return h = new zt({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = b("div"), n = b("h1"), i = V("Result"), r = A(), s = b("abbr"), l = b("img"), a = A(), o = b("p"), c = V(d), E = A(), z(h.$$.fragment), this.h();
    },
    l(w) {
      e = y(w, "DIV", { "data-cy": !0, class: !0 });
      var $ = v(e);
      n = y($, "H1", { class: !0 });
      var Q = v(n);
      i = P(Q, "Result"), Q.forEach(g), r = C($), s = y($, "ABBR", { title: !0, class: !0 });
      var M = v(s);
      l = y(M, "IMG", { src: !0, alt: !0, class: !0 }), M.forEach(g), a = C($), o = y($, "P", { "data-cy": !0, class: !0 });
      var N = v(o);
      c = P(N, d), N.forEach(g), E = C($), Y(h.$$.fragment, $), $.forEach(g), this.h();
    },
    h() {
      f(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), Ge(l.src, u = ut) || f(l, "src", u), f(l, "alt", "copy-button"), f(l, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), f(s, "title", "Copy to clipboard"), f(s, "class", "svelte-r93edu"), f(o, "data-cy", "result"), f(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), f(e, "data-cy", "result-section"), f(e, "class", "svelte-r93edu");
    },
    m(w, $) {
      x(w, e, $), m(e, n), m(n, i), m(e, r), m(e, s), m(s, l), m(e, a), m(e, o), m(o, c), m(e, E), k(h, e, null), p = !0, I || (_ = J(l, "click", t[6]), I = !0);
    },
    p(w, $) {
      (!p || $ & 1) && d !== (d = fe(w[0]) + "") && we(c, d);
      const Q = {};
      $ & 8 && (Q.download = w[3]), h.$set(Q);
    },
    i(w) {
      p || (F(h.$$.fragment, w), p = !0);
    },
    o(w) {
      j(h.$$.fragment, w), p = !1;
    },
    d(w) {
      w && g(e), L(h), I = !1, _();
    }
  };
}
function pn(t) {
  let e, n, i, r, s, l, u, a, o, d, c, E, h, p, I, _, w, $, Q;
  c = new hn({
    props: {
      error: t[2],
      onClick: t[10]
    }
  }), h = new un({
    props: {
      fields: t[0].merge,
      handleFormInput: t[5],
      addField: t[8],
      removeField: t[9],
      error: t[2]
    }
  }), I = new He({});
  let M = !t[2] && xe(t);
  return {
    c() {
      e = b("div"), n = b("section"), i = b("form"), r = b("div"), s = b("label"), l = V("Paste template"), u = A(), a = b("textarea"), d = A(), z(c.$$.fragment), E = A(), z(h.$$.fragment), p = A(), z(I.$$.fragment), _ = A(), M && M.c(), this.h();
    },
    l(N) {
      e = y(N, "DIV", { class: !0 });
      var B = v(e);
      n = y(B, "SECTION", { "data-cy": !0, class: !0 });
      var T = v(n);
      i = y(T, "FORM", { class: !0 });
      var S = v(i);
      r = y(S, "DIV", { "data-cy": !0, class: !0 });
      var H = v(r);
      s = y(H, "LABEL", { for: !0, class: !0 });
      var q = v(s);
      l = P(q, "Paste template"), q.forEach(g), u = C(H), a = y(H, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), v(a).forEach(g), H.forEach(g), d = C(S), Y(c.$$.fragment, S), E = C(S), Y(h.$$.fragment, S), p = C(S), Y(I.$$.fragment, S), S.forEach(g), _ = C(T), M && M.l(T), T.forEach(g), B.forEach(g), this.h();
    },
    h() {
      f(s, "for", "json-input"), f(s, "class", "text-teal-400 px-1 svelte-r93edu"), f(a, "data-cy", "template-input"), f(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), f(a, "id", "json-input"), a.value = o = fe(t[1]), f(r, "data-cy", "template-input-section"), f(r, "class", "mb-6 svelte-r93edu"), f(i, "class", "svelte-r93edu"), f(n, "data-cy", "form-container"), f(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), f(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(N, B) {
      x(N, e, B), m(e, n), m(n, i), m(i, r), m(r, s), m(s, l), m(r, u), m(r, a), m(i, d), k(c, i, null), m(i, E), k(h, i, null), m(i, p), k(I, i, null), m(n, _), M && M.m(n, null), w = !0, $ || (Q = J(a, "input", t[12]), $ = !0);
    },
    p(N, [B]) {
      (!w || B & 2 && o !== (o = fe(N[1]))) && (a.value = o);
      const T = {};
      B & 4 && (T.error = N[2]), c.$set(T);
      const S = {};
      B & 1 && (S.fields = N[0].merge), B & 4 && (S.error = N[2]), h.$set(S), N[2] ? M && (Ye(), j(M, 1, 1, () => {
        M = null;
      }), Re()) : M ? (M.p(N, B), B & 4 && F(M, 1)) : (M = xe(N), M.c(), F(M, 1), M.m(n, null));
    },
    i(N) {
      w || (F(c.$$.fragment, N), F(h.$$.fragment, N), F(I.$$.fragment, N), F(M), w = !0);
    },
    o(N) {
      j(c.$$.fragment, N), j(h.$$.fragment, N), j(I.$$.fragment, N), j(M), w = !1;
    },
    d(N) {
      N && g(e), L(c), L(h), L(I), M && M.d(), $ = !1, Q();
    }
  };
}
function fe(t) {
  return JSON.stringify(t, null, 2);
}
function _n(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function bn(t, e, n) {
  let i, { editTemplateService: r = new Ve(Tt) } = e, s = r.template, l = r.result, u = null;
  function a(_) {
    r.setTemplateSource(_), n(1, s = r.template), n(0, l = r.result), n(2, u = r.error);
  }
  function o(_, w) {
    r.updateResultMergeFields(_, w), n(0, l = r.result);
  }
  function d() {
    navigator.clipboard.writeText(JSON.stringify(l)), alert("JSON copied to clipboard!");
  }
  function c() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function E(_) {
    r.addMergeField(_), n(1, s = r.template), n(0, l = r.result), n(2, u = r.error);
  }
  function h(_) {
    const w = r.getMergeFieldItem(_);
    r.removeMergeField(w), n(1, s = r.template), n(0, l = r.result), n(2, u = r.error);
  }
  function p() {
    r.setTemplateSource(r.result), n(1, s = r.template), n(0, l = r.result), n(2, u = r.error);
  }
  const I = (_) => a(_.currentTarget.value);
  return t.$$set = (_) => {
    "editTemplateService" in _ && n(11, r = _.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, i = _n(l) || "");
  }, [
    l,
    s,
    u,
    i,
    a,
    o,
    d,
    c,
    E,
    h,
    p,
    r,
    I
  ];
}
class vn extends U {
  constructor(e) {
    super(), R(this, e, bn, pn, O, { editTemplateService: 11 });
  }
}
class wn {
  constructor(e) {
    Z(this, "templateService");
    Z(this, "container");
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
    this.container = e, new vn({
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
  getInputSource() {
    const e = document.createElement("div");
    return new He({
      target: e
    }), e.children;
  }
}
export {
  wn as default
};
