var Ve = Object.defineProperty;
var Pe = (t, e, n) => e in t ? Ve(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var W = (t, e, n) => (Pe(t, typeof e != "symbol" ? e + "" : e, n), n);
function F() {
}
function Le(t) {
  return t();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function X(t) {
  t.forEach(Le);
}
function be(t) {
  return typeof t == "function";
}
function B(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let re;
function He(t, e) {
  return re || (re = document.createElement("a")), re.href = e, t === re.href;
}
function Qe(t) {
  return Object.keys(t).length === 0;
}
let ce = !1;
function Je() {
  ce = !0;
}
function Ge() {
  ce = !1;
}
function qe(t, e, n, r) {
  for (; t < e; ) {
    const l = t + (e - t >> 1);
    n(l) <= r ? t = l + 1 : e = l;
  }
  return t;
}
function Ze(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const p = e[a];
      p.claim_order !== void 0 && o.push(p);
    }
    e = o;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let l = 0;
  for (let o = 0; o < e.length; o++) {
    const a = e[o].claim_order, p = (l > 0 && e[n[l]].claim_order <= a ? l + 1 : qe(1, l, (N) => e[n[N]].claim_order, a)) - 1;
    r[o] = n[p] + 1;
    const f = p + 1;
    n[f] = o, l = Math.max(f, l);
  }
  const s = [], i = [];
  let u = e.length - 1;
  for (let o = n[l] + 1; o != 0; o = r[o - 1]) {
    for (s.push(e[o - 1]); u >= o; u--)
      i.push(e[u]);
    u--;
  }
  for (; u >= 0; u--)
    i.push(e[u]);
  s.reverse(), i.sort((o, a) => o.claim_order - a.claim_order);
  for (let o = 0, a = 0; o < i.length; o++) {
    for (; a < s.length && i[o].claim_order >= s[a].claim_order; )
      a++;
    const p = a < s.length ? s[a] : null;
    t.insertBefore(i[o], p);
  }
}
function m(t, e) {
  if (ce) {
    for (Ze(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function x(t, e, n) {
  ce && !n ? m(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode.removeChild(t);
}
function We(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function M(t) {
  return document.createElement(t);
}
function ne(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function C(t) {
  return document.createTextNode(t);
}
function A() {
  return C(" ");
}
function J(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Oe(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function E(t) {
  return Array.from(t.childNodes);
}
function Xe(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ke(t, e, n, r, l = !1) {
  Xe(t);
  const s = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const u = t[i];
      if (e(u)) {
        const o = n(u);
        return o === void 0 ? t.splice(i, 1) : t[i] = o, l || (t.claim_info.last_index = i), u;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const u = t[i];
      if (e(u)) {
        const o = n(u);
        return o === void 0 ? t.splice(i, 1) : t[i] = o, l ? o === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, u;
      }
    }
    return r();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function ze(t, e, n, r) {
  return ke(t, (l) => l.nodeName === e, (l) => {
    const s = [];
    for (let i = 0; i < l.attributes.length; i++) {
      const u = l.attributes[i];
      n[u.name] || s.push(u.name);
    }
    s.forEach((i) => l.removeAttribute(i));
  }, () => r(e));
}
function I(t, e, n) {
  return ze(t, e, n, M);
}
function ue(t, e, n) {
  return ze(t, e, n, ne);
}
function L(t, e) {
  return ke(
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
function S(t) {
  return L(t, " ");
}
function ye(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ne(t, e) {
  t.value = e == null ? "" : e;
}
let we;
function te(t) {
  we = t;
}
const ee = [], ae = [], ie = [], he = [], Ke = Promise.resolve();
let me = !1;
function et() {
  me || (me = !0, Ke.then(Ye));
}
function ge(t) {
  ie.push(t);
}
function Te(t) {
  he.push(t);
}
const de = /* @__PURE__ */ new Set();
let le = 0;
function Ye() {
  const t = we;
  do {
    for (; le < ee.length; ) {
      const e = ee[le];
      le++, te(e), tt(e.$$);
    }
    for (te(null), ee.length = 0, le = 0; ae.length; )
      ae.pop()();
    for (let e = 0; e < ie.length; e += 1) {
      const n = ie[e];
      de.has(n) || (de.add(n), n());
    }
    ie.length = 0;
  } while (ee.length);
  for (; he.length; )
    he.pop()();
  me = !1, de.clear(), te(t);
}
function tt(t) {
  if (t.fragment !== null) {
    t.update(), X(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ge);
  }
}
const se = /* @__PURE__ */ new Set();
let q;
function pe() {
  q = {
    r: 0,
    c: [],
    p: q
  };
}
function _e() {
  q.r || X(q.c), q = q.p;
}
function $(t, e) {
  t && t.i && (se.delete(t), t.i(e));
}
function j(t, e, n, r) {
  if (t && t.o) {
    if (se.has(t))
      return;
    se.add(t), q.c.push(() => {
      se.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function De(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function Y(t) {
  t && t.c();
}
function R(t, e) {
  t && t.l(e);
}
function O(t, e, n, r) {
  const { fragment: l, on_mount: s, on_destroy: i, after_update: u } = t.$$;
  l && l.m(e, n), r || ge(() => {
    const o = s.map(Le).filter(be);
    i ? i.push(...o) : X(o), t.$$.on_mount = [];
  }), u.forEach(ge);
}
function k(t, e) {
  const n = t.$$;
  n.fragment !== null && (X(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(t, e) {
  t.$$.dirty[0] === -1 && (ee.push(t), et(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function U(t, e, n, r, l, s, i, u = [-1]) {
  const o = we;
  te(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: F,
    not_equal: l,
    bound: Ie(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: Ie(),
    dirty: u,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  i && i(a.root);
  let p = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, N, ...c) => {
    const b = c.length ? c[0] : N;
    return a.ctx && l(a.ctx[f], a.ctx[f] = b) && (!a.skip_bound && a.bound[f] && a.bound[f](b), p && nt(t, f)), N;
  }) : [], a.update(), p = !0, X(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      Je();
      const f = E(e.target);
      a.fragment && a.fragment.l(f), f.forEach(v);
    } else
      a.fragment && a.fragment.c();
    e.intro && $(t.$$.fragment), O(t, e.target, e.anchor, e.customElement), Ge(), Ye();
  }
  te(o);
}
class V {
  $destroy() {
    k(this, 1), this.$destroy = F;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const l = r.indexOf(n);
      l !== -1 && r.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !Qe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const rt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", lt = "A 'merge' property is required", it = "Property 'merge' must be an array", st = "A 'find' property is required on every element inside 'merge'", ut = "Every 'find' property inside 'merge' must be of type string", at = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", ot = "A 'replace' property is required on every element inside 'merge'", ct = "Unexpected error while parsing template JSON", ft = "Every element inside the 'merge' should be an object";
class Q extends Error {
  constructor(e) {
    super(e);
  }
}
function dt(t) {
  return typeof t == "object";
}
function fe(t, e) {
  return t in e;
}
function ve(t, e) {
  return !fe(t, e);
}
function ht(t, e) {
  return fe(t, e) && !(e[t] instanceof Array);
}
function mt(t, e) {
  return fe(t, e) && typeof e[t] != "string";
}
function gt(t, e) {
  const n = fe(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function pt(t) {
  try {
    const e = JSON.parse(t);
    if (ve("merge", e))
      throw new Q(lt);
    if (ht("merge", e))
      throw new Q(it);
    const { merge: n } = e, r = _t(n);
    return { ...e, merge: r };
  } catch (e) {
    throw Re(e);
  }
}
function _t(t) {
  return t.map((n) => {
    if (!dt(n))
      throw new Q(ft);
    if (ve("find", n))
      throw new Q(st);
    if (ve("replace", n))
      throw new Q(ot);
    if (mt("find", n))
      throw new Q(ut);
    if (gt("find", n))
      throw new Q(at);
    return n;
  }).map(({ find: n, replace: r }) => ({
    find: n,
    replace: Be(r)
  }));
}
function vt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Re(t) {
  return t instanceof Error ? t : vt(t) ? new Q(t.message) : new Q(ct);
}
function Be(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Ue {
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
      const n = pt(Be(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const r = Re(n);
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
      let l;
      for (l in e)
        if (r[l] !== e[l])
          return !1;
      return !0;
    };
    return this.result.merge.find(n);
  }
}
const bt = [
  {
    find: "NAME",
    replace: "world"
  }
], yt = {
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
}, wt = {
  format: "mp4",
  resolution: "hd"
}, Et = {
  merge: bt,
  timeline: yt,
  output: wt
};
function Mt(t) {
  let e, n;
  return {
    c() {
      e = ne("svg"), n = ne("path"), this.h();
    },
    l(r) {
      e = ue(r, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var l = E(e);
      n = ue(l, "path", { d: !0 }), E(n).forEach(v), l.forEach(v), this.h();
    },
    h() {
      d(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), d(e, "class", "fill-current w-4 h-4 mr-2"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20");
    },
    m(r, l) {
      x(r, e, l), m(e, n);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && v(e);
    }
  };
}
function It(t) {
  return [];
}
class Nt extends V {
  constructor(e) {
    super(), U(this, e, It, Mt, B, {});
  }
}
function Tt(t) {
  let e, n, r, l;
  return n = new Nt({}), {
    c() {
      e = M("a"), Y(n.$$.fragment), r = C(`
	Download`), this.h();
    },
    l(s) {
      e = I(s, "A", { href: !0, download: !0, class: !0 });
      var i = E(e);
      R(n.$$.fragment, i), r = L(i, `
	Download`), i.forEach(v), this.h();
    },
    h() {
      d(e, "href", t[0]), d(e, "download", "result.json"), d(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, i) {
      x(s, e, i), O(n, e, null), m(e, r), l = !0;
    },
    p(s, [i]) {
      (!l || i & 1) && d(e, "href", s[0]);
    },
    i(s) {
      l || ($(n.$$.fragment, s), l = !0);
    },
    o(s) {
      j(n.$$.fragment, s), l = !1;
    },
    d(s) {
      s && v(e), k(n);
    }
  };
}
function Dt(t, e, n) {
  let { download: r = "" } = e;
  return t.$$set = (l) => {
    "download" in l && n(0, r = l.download);
  }, [r];
}
class $t extends V {
  constructor(e) {
    super(), U(this, e, Dt, Tt, B, { download: 0 });
  }
}
function At(t) {
  let e, n, r, l;
  return {
    c() {
      e = M("button"), n = C("Submit"), this.h();
    },
    l(s) {
      e = I(s, "BUTTON", { class: !0 });
      var i = E(e);
      n = L(i, "Submit"), i.forEach(v), this.h();
    },
    h() {
      d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, i) {
      x(s, e, i), m(e, n), r || (l = J(e, "click", function() {
        be(t[0]) && t[0].apply(this, arguments);
      }), r = !0);
    },
    p(s, [i]) {
      t = s;
    },
    i: F,
    o: F,
    d(s) {
      s && v(e), r = !1, l();
    }
  };
}
function St(t, e, n) {
  let { submit: r } = e;
  return t.$$set = (l) => {
    "submit" in l && n(0, r = l.submit);
  }, [r];
}
class jt extends V {
  constructor(e) {
    super(), U(this, e, St, At, B, { submit: 0 });
  }
}
function xt(t) {
  let e, n, r, l, s;
  return n = new $t({ props: { download: t[0] } }), l = new jt({ props: { submit: t[1] } }), {
    c() {
      e = M("div"), Y(n.$$.fragment), r = A(), Y(l.$$.fragment), this.h();
    },
    l(i) {
      e = I(i, "DIV", { class: !0 });
      var u = E(e);
      R(n.$$.fragment, u), r = S(u), R(l.$$.fragment, u), u.forEach(v), this.h();
    },
    h() {
      d(e, "class", "flex justify-between pt-4");
    },
    m(i, u) {
      x(i, e, u), O(n, e, null), m(e, r), O(l, e, null), s = !0;
    },
    p(i, [u]) {
      const o = {};
      u & 1 && (o.download = i[0]), n.$set(o);
      const a = {};
      u & 2 && (a.submit = i[1]), l.$set(a);
    },
    i(i) {
      s || ($(n.$$.fragment, i), $(l.$$.fragment, i), s = !0);
    },
    o(i) {
      j(n.$$.fragment, i), j(l.$$.fragment, i), s = !1;
    },
    d(i) {
      i && v(e), k(n), k(l);
    }
  };
}
function Ft(t, e, n) {
  let { download: r = "" } = e, { submit: l } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, r = s.download), "submit" in s && n(1, l = s.submit);
  }, [r, l];
}
class Ct extends V {
  constructor(e) {
    super(), U(this, e, Ft, xt, B, { download: 0, submit: 1 });
  }
}
function Lt(t) {
  let e, n, r;
  return {
    c() {
      e = M("input"), this.h();
    },
    l(l) {
      e = I(l, "INPUT", { class: !0, type: !0 }), this.h();
    },
    h() {
      d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text");
    },
    m(l, s) {
      x(l, e, s), Ne(e, t[0]), n || (r = [
        J(e, "input", t[2]),
        J(e, "focus", t[3], { once: !0 })
      ], n = !0);
    },
    p(l, [s]) {
      s & 1 && e.value !== l[0] && Ne(e, l[0]);
    },
    i: F,
    o: F,
    d(l) {
      l && v(e), n = !1, X(r);
    }
  };
}
function Ot(t, e, n) {
  let { value: r } = e, { onFocus: l } = e;
  function s() {
    r = this.value, n(0, r);
  }
  const i = (u) => l(u.currentTarget);
  return t.$$set = (u) => {
    "value" in u && n(0, r = u.value), "onFocus" in u && n(1, l = u.onFocus);
  }, [r, l, s, i];
}
class $e extends V {
  constructor(e) {
    super(), U(this, e, Ot, Lt, B, { value: 0, onFocus: 1 });
  }
}
function kt(t) {
  let e, n, r, l, s, i, u, o, a, p, f, N, c, b, w, g, _, h;
  function y(D) {
    t[3](D);
  }
  let T = { onFocus: Ae };
  t[1] !== void 0 && (T.value = t[1]), u = new $e({ props: T }), ae.push(() => De(u, "value", y));
  function P(D) {
    t[4](D);
  }
  let H = { onFocus: Ae };
  return t[2] !== void 0 && (H.value = t[2]), p = new $e({ props: H }), ae.push(() => De(p, "value", P)), {
    c() {
      e = M("div"), n = M("div"), r = M("h1"), l = C("Add a new merge field"), s = A(), i = M("div"), Y(u.$$.fragment), a = A(), Y(p.$$.fragment), N = A(), c = M("div"), b = M("button"), w = C("Add"), this.h();
    },
    l(D) {
      e = I(D, "DIV", {});
      var z = E(e);
      n = I(z, "DIV", {});
      var G = E(n);
      r = I(G, "H1", { class: !0 });
      var K = E(r);
      l = L(K, "Add a new merge field"), K.forEach(v), s = S(G), i = I(G, "DIV", { class: !0 });
      var Z = E(i);
      R(u.$$.fragment, Z), a = S(Z), R(p.$$.fragment, Z), N = S(Z), c = I(Z, "DIV", { class: !0 });
      var Ee = E(c);
      b = I(Ee, "BUTTON", { class: !0 });
      var Me = E(b);
      w = L(Me, "Add"), Me.forEach(v), Ee.forEach(v), Z.forEach(v), G.forEach(v), z.forEach(v), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1"), d(b, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), d(c, "class", "flex flex-row-reverse"), d(i, "class", "border p-4 mb-6");
    },
    m(D, z) {
      x(D, e, z), m(e, n), m(n, r), m(r, l), m(n, s), m(n, i), O(u, i, null), m(i, a), O(p, i, null), m(i, N), m(i, c), m(c, b), m(b, w), g = !0, _ || (h = J(b, "click", Oe(t[5])), _ = !0);
    },
    p(D, [z]) {
      const G = {};
      !o && z & 2 && (o = !0, G.value = D[1], Te(() => o = !1)), u.$set(G);
      const K = {};
      !f && z & 4 && (f = !0, K.value = D[2], Te(() => f = !1)), p.$set(K);
    },
    i(D) {
      g || ($(u.$$.fragment, D), $(p.$$.fragment, D), g = !0);
    },
    o(D) {
      j(u.$$.fragment, D), j(p.$$.fragment, D), g = !1;
    },
    d(D) {
      D && v(e), k(u), k(p), _ = !1, h();
    }
  };
}
function Ae(t) {
  t.value = "";
}
function zt(t, e, n) {
  let r = "find", l = "replace", { addField: s } = e;
  function i(a) {
    r = a, n(1, r);
  }
  function u(a) {
    l = a, n(2, l);
  }
  const o = () => s({ find: r, replace: l });
  return t.$$set = (a) => {
    "addField" in a && n(0, s = a.addField);
  }, [
    s,
    r,
    l,
    i,
    u,
    o
  ];
}
class Yt extends V {
  constructor(e) {
    super(), U(this, e, zt, kt, B, { addField: 0 });
  }
}
function Rt(t) {
  let e, n;
  return {
    c() {
      e = ne("svg"), n = ne("path"), this.h();
    },
    l(r) {
      e = ue(r, "svg", { xmlns: !0, viewBox: !0 });
      var l = E(e);
      n = ue(l, "path", { fill: !0, d: !0 }), E(n).forEach(v), l.forEach(v), this.h();
    },
    h() {
      d(n, "fill", "white"), d(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 16 16");
    },
    m(r, l) {
      x(r, e, l), m(e, n);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && v(e);
    }
  };
}
function Bt(t) {
  return [];
}
class Ut extends V {
  constructor(e) {
    super(), U(this, e, Bt, Rt, B, {});
  }
}
function Vt(t) {
  let e, n, r, l, s;
  return n = new Ut({}), {
    c() {
      e = M("button"), Y(n.$$.fragment), this.h();
    },
    l(i) {
      e = I(i, "BUTTON", { class: !0 });
      var u = E(e);
      R(n.$$.fragment, u), u.forEach(v), this.h();
    },
    h() {
      d(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1");
    },
    m(i, u) {
      x(i, e, u), O(n, e, null), r = !0, l || (s = J(e, "click", Oe(function() {
        be(t[0]) && t[0].apply(this, arguments);
      })), l = !0);
    },
    p(i, [u]) {
      t = i;
    },
    i(i) {
      r || ($(n.$$.fragment, i), r = !0);
    },
    o(i) {
      j(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && v(e), k(n), l = !1, s();
    }
  };
}
function Pt(t, e, n) {
  let { onClick: r } = e;
  return t.$$set = (l) => {
    "onClick" in l && n(0, r = l.onClick);
  }, [r];
}
class Ht extends V {
  constructor(e) {
    super(), U(this, e, Pt, Vt, B, { onClick: 0 });
  }
}
function Se(t, e, n) {
  const r = t.slice();
  return r[6] = e[n], r;
}
function je(t) {
  let e, n, r = t[6].find + "", l, s, i, u, o, a, p, f, N, c, b, w;
  function g(...h) {
    return t[4](t[6], ...h);
  }
  function _() {
    return t[5](t[6]);
  }
  return f = new Ht({ props: { onClick: _ } }), {
    c() {
      e = M("div"), n = M("label"), l = C(r), i = A(), u = M("input"), p = A(), Y(f.$$.fragment), N = A(), this.h();
    },
    l(h) {
      e = I(h, "DIV", { "data-cy": !0, class: !0 });
      var y = E(e);
      n = I(y, "LABEL", { for: !0, class: !0 });
      var T = E(n);
      l = L(T, r), T.forEach(v), i = S(y), u = I(y, "INPUT", { class: !0, id: !0, type: !0 }), p = S(y), R(f.$$.fragment, y), N = S(y), y.forEach(v), this.h();
    },
    h() {
      d(n, "for", s = t[6].find), d(n, "class", "block mb-2 monospace"), d(u, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(u, "id", o = t[6].find), d(u, "type", "text"), u.value = a = t[6].replace, d(e, "data-cy", "label-input"), d(e, "class", "relative");
    },
    m(h, y) {
      x(h, e, y), m(e, n), m(n, l), m(e, i), m(e, u), m(e, p), O(f, e, null), m(e, N), c = !0, b || (w = J(u, "input", g), b = !0);
    },
    p(h, y) {
      t = h, (!c || y & 1) && r !== (r = t[6].find + "") && ye(l, r), (!c || y & 1 && s !== (s = t[6].find)) && d(n, "for", s), (!c || y & 1 && o !== (o = t[6].find)) && d(u, "id", o), (!c || y & 1 && a !== (a = t[6].replace) && u.value !== a) && (u.value = a);
      const T = {};
      y & 9 && (T.onClick = _), f.$set(T);
    },
    i(h) {
      c || ($(f.$$.fragment, h), c = !0);
    },
    o(h) {
      j(f.$$.fragment, h), c = !1;
    },
    d(h) {
      h && v(e), k(f), b = !1, w();
    }
  };
}
function Qt(t) {
  let e, n, r, l, s, i, u, o, a, p = t[0], f = [];
  for (let c = 0; c < p.length; c += 1)
    f[c] = je(Se(t, p, c));
  const N = (c) => j(f[c], 1, 1, () => {
    f[c] = null;
  });
  return o = new Yt({ props: { addField: t[2] } }), {
    c() {
      e = M("div"), n = M("div"), r = M("h1"), l = C("Modify Merge Values"), s = A(), i = M("div");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      u = A(), Y(o.$$.fragment), this.h();
    },
    l(c) {
      e = I(c, "DIV", {});
      var b = E(e);
      n = I(b, "DIV", { "data-cy": !0 });
      var w = E(n);
      r = I(w, "H1", { class: !0 });
      var g = E(r);
      l = L(g, "Modify Merge Values"), g.forEach(v), s = S(w), i = I(w, "DIV", { class: !0 });
      var _ = E(i);
      for (let h = 0; h < f.length; h += 1)
        f[h].l(_);
      _.forEach(v), w.forEach(v), u = S(b), R(o.$$.fragment, b), b.forEach(v), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1"), d(i, "class", "border p-4 mb-6"), d(n, "data-cy", "merge-fields-input-section");
    },
    m(c, b) {
      x(c, e, b), m(e, n), m(n, r), m(r, l), m(n, s), m(n, i);
      for (let w = 0; w < f.length; w += 1)
        f[w].m(i, null);
      m(e, u), O(o, e, null), a = !0;
    },
    p(c, [b]) {
      if (b & 11) {
        p = c[0];
        let g;
        for (g = 0; g < p.length; g += 1) {
          const _ = Se(c, p, g);
          f[g] ? (f[g].p(_, b), $(f[g], 1)) : (f[g] = je(_), f[g].c(), $(f[g], 1), f[g].m(i, null));
        }
        for (pe(), g = p.length; g < f.length; g += 1)
          N(g);
        _e();
      }
      const w = {};
      b & 4 && (w.addField = c[2]), o.$set(w);
    },
    i(c) {
      if (!a) {
        for (let b = 0; b < p.length; b += 1)
          $(f[b]);
        $(o.$$.fragment, c), a = !0;
      }
    },
    o(c) {
      f = f.filter(Boolean);
      for (let b = 0; b < f.length; b += 1)
        j(f[b]);
      j(o.$$.fragment, c), a = !1;
    },
    d(c) {
      c && v(e), We(f, c), k(o);
    }
  };
}
function Jt(t, e, n) {
  let { fields: r = [] } = e, { handleFormInput: l } = e, { addField: s } = e, { removeField: i } = e;
  const u = (a, p) => l({
    find: a.find,
    replace: p.currentTarget.value
  }), o = (a) => i(a);
  return t.$$set = (a) => {
    "fields" in a && n(0, r = a.fields), "handleFormInput" in a && n(1, l = a.handleFormInput), "addField" in a && n(2, s = a.addField), "removeField" in a && n(3, i = a.removeField);
  }, [r, l, s, i, u, o];
}
class Gt extends V {
  constructor(e) {
    super(), U(this, e, Jt, Qt, B, {
      fields: 0,
      handleFormInput: 1,
      addField: 2,
      removeField: 3
    });
  }
}
function xe(t) {
  let e, n, r = t[2].message + "", l;
  return {
    c() {
      e = M("p"), n = M("span"), l = C(r), this.h();
    },
    l(s) {
      e = I(s, "P", { "data-cy": !0, class: !0 });
      var i = E(e);
      n = I(i, "SPAN", { class: !0 });
      var u = E(n);
      l = L(u, r), u.forEach(v), i.forEach(v), this.h();
    },
    h() {
      d(n, "class", "monospace text-orange-900 svelte-r93edu"), d(e, "data-cy", "template-input-error"), d(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-r93edu");
    },
    m(s, i) {
      x(s, e, i), m(e, n), m(n, l);
    },
    p(s, i) {
      i & 4 && r !== (r = s[2].message + "") && ye(l, r);
    },
    d(s) {
      s && v(e);
    }
  };
}
function Fe(t) {
  let e, n;
  return e = new Gt({
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
      R(e.$$.fragment, r);
    },
    m(r, l) {
      O(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      l & 2 && (s.fields = r[1].merge), e.$set(s);
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
function Ce(t) {
  let e, n, r, l, s, i, u, o, a, p = oe(t[0]) + "", f, N, c, b, w, g;
  return c = new Ct({
    props: {
      submit: t[7],
      download: t[3]
    }
  }), {
    c() {
      e = M("div"), n = M("h1"), r = C("Result"), l = A(), s = M("abbr"), i = M("img"), o = A(), a = M("p"), f = C(p), N = A(), Y(c.$$.fragment), this.h();
    },
    l(_) {
      e = I(_, "DIV", { "data-cy": !0, class: !0 });
      var h = E(e);
      n = I(h, "H1", { class: !0 });
      var y = E(n);
      r = L(y, "Result"), y.forEach(v), l = S(h), s = I(h, "ABBR", { title: !0, class: !0 });
      var T = E(s);
      i = I(T, "IMG", { src: !0, alt: !0, class: !0 }), T.forEach(v), o = S(h), a = I(h, "P", { "data-cy": !0, class: !0 });
      var P = E(a);
      f = L(P, p), P.forEach(v), N = S(h), R(c.$$.fragment, h), h.forEach(v), this.h();
    },
    h() {
      d(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), He(i.src, u = rt) || d(i, "src", u), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), d(s, "title", "Copy to clipboard"), d(s, "class", "svelte-r93edu"), d(a, "data-cy", "result"), d(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), d(e, "data-cy", "result-section"), d(e, "class", "svelte-r93edu");
    },
    m(_, h) {
      x(_, e, h), m(e, n), m(n, r), m(e, l), m(e, s), m(s, i), m(e, o), m(e, a), m(a, f), m(e, N), O(c, e, null), b = !0, w || (g = J(i, "click", t[6]), w = !0);
    },
    p(_, h) {
      (!b || h & 1) && p !== (p = oe(_[0]) + "") && ye(f, p);
      const y = {};
      h & 8 && (y.download = _[3]), c.$set(y);
    },
    i(_) {
      b || ($(c.$$.fragment, _), b = !0);
    },
    o(_) {
      j(c.$$.fragment, _), b = !1;
    },
    d(_) {
      _ && v(e), k(c), w = !1, g();
    }
  };
}
function qt(t) {
  let e, n, r, l, s, i, u, o, a, p, f, N, c, b, w, g = t[2] && xe(t), _ = !t[2] && Fe(t), h = !t[2] && Ce(t);
  return {
    c() {
      e = M("div"), n = M("section"), r = M("form"), l = M("div"), s = M("label"), i = C("Paste template"), u = A(), o = M("textarea"), p = A(), g && g.c(), f = A(), _ && _.c(), N = A(), h && h.c(), this.h();
    },
    l(y) {
      e = I(y, "DIV", { class: !0 });
      var T = E(e);
      n = I(T, "SECTION", { "data-cy": !0, class: !0 });
      var P = E(n);
      r = I(P, "FORM", { class: !0 });
      var H = E(r);
      l = I(H, "DIV", { "data-cy": !0, class: !0 });
      var D = E(l);
      s = I(D, "LABEL", { for: !0, class: !0 });
      var z = E(s);
      i = L(z, "Paste template"), z.forEach(v), u = S(D), o = I(D, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), E(o).forEach(v), D.forEach(v), p = S(H), g && g.l(H), f = S(H), _ && _.l(H), H.forEach(v), N = S(P), h && h.l(P), P.forEach(v), T.forEach(v), this.h();
    },
    h() {
      d(s, "for", "json-input"), d(s, "class", "text-teal-400 px-1 svelte-r93edu"), d(o, "data-cy", "template-input"), d(o, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), d(o, "id", "json-input"), o.value = a = oe(t[1]), d(l, "data-cy", "template-input-section"), d(l, "class", "mb-6 svelte-r93edu"), d(r, "class", "svelte-r93edu"), d(n, "data-cy", "form-container"), d(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), d(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(y, T) {
      x(y, e, T), m(e, n), m(n, r), m(r, l), m(l, s), m(s, i), m(l, u), m(l, o), m(r, p), g && g.m(r, null), m(r, f), _ && _.m(r, null), m(n, N), h && h.m(n, null), c = !0, b || (w = J(o, "input", t[11]), b = !0);
    },
    p(y, [T]) {
      (!c || T & 2 && a !== (a = oe(y[1]))) && (o.value = a), y[2] ? g ? g.p(y, T) : (g = xe(y), g.c(), g.m(r, f)) : g && (g.d(1), g = null), y[2] ? _ && (pe(), j(_, 1, 1, () => {
        _ = null;
      }), _e()) : _ ? (_.p(y, T), T & 4 && $(_, 1)) : (_ = Fe(y), _.c(), $(_, 1), _.m(r, null)), y[2] ? h && (pe(), j(h, 1, 1, () => {
        h = null;
      }), _e()) : h ? (h.p(y, T), T & 4 && $(h, 1)) : (h = Ce(y), h.c(), $(h, 1), h.m(n, null));
    },
    i(y) {
      c || ($(_), $(h), c = !0);
    },
    o(y) {
      j(_), j(h), c = !1;
    },
    d(y) {
      y && v(e), g && g.d(), _ && _.d(), h && h.d(), b = !1, w();
    }
  };
}
function oe(t) {
  return JSON.stringify(t, null, 2);
}
function Zt(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function Wt(t, e, n) {
  let r, { editTemplateService: l = new Ue(Et) } = e, s = l.template, i = l.result, u = null;
  function o(w) {
    l.setTemplateSource(w), n(1, s = l.template), n(0, i = l.result), n(2, u = l.error);
  }
  function a(w) {
    l.updateResultMergeFields(w), n(0, i = l.result);
  }
  function p() {
    navigator.clipboard.writeText(JSON.stringify(i)), alert("JSON copied to clipboard!");
  }
  function f() {
    l.submit(), window.alert("Form successfully submitted!");
  }
  function N(w) {
    l.addMergeField(w), n(1, s = l.template), n(0, i = l.result), n(2, u = l.error);
  }
  function c(w) {
    const g = l.getMergeFieldItem(w);
    l.removeMergeField(g), n(1, s = l.template), n(0, i = l.result), n(2, u = l.error);
  }
  const b = (w) => o(w.currentTarget.value);
  return t.$$set = (w) => {
    "editTemplateService" in w && n(10, l = w.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(3, r = Zt(i) || "");
  }, [
    i,
    s,
    u,
    r,
    o,
    a,
    p,
    f,
    N,
    c,
    l,
    b
  ];
}
class Xt extends V {
  constructor(e) {
    super(), U(this, e, Wt, qt, B, { editTemplateService: 10 });
  }
}
class en {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    W(this, "templateService");
    this.containerElement = n, this.templateService = new Ue(e), this.initialize();
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
    new Xt({
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
  en as default
};
