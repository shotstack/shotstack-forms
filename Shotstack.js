var qe = Object.defineProperty;
var Ze = (t, e, n) => e in t ? qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Z = (t, e, n) => (Ze(t, typeof e != "symbol" ? e + "" : e, n), n);
function D() {
}
function Re(t) {
  return t();
}
function Fe() {
  return /* @__PURE__ */ Object.create(null);
}
function te(t) {
  t.forEach(Re);
}
function de(t) {
  return typeof t == "function";
}
function $(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ie;
function We(t, e) {
  return ie || (ie = document.createElement("a")), ie.href = e, t === ie.href;
}
function Xe(t) {
  return Object.keys(t).length === 0;
}
function Ke(t, ...e) {
  if (t == null)
    return D;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function De(t, e, n) {
  t.$$.on_destroy.push(Ke(e, n));
}
let he = !1;
function et() {
  he = !0;
}
function tt() {
  he = !1;
}
function nt(t, e, n, l) {
  for (; t < e; ) {
    const r = t + (e - t >> 1);
    n(r) <= l ? t = r + 1 : e = r;
  }
  return t;
}
function rt(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const f = e[o];
      f.claim_order !== void 0 && a.push(f);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1), l = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let a = 0; a < e.length; a++) {
    const o = e[a].claim_order, f = (r > 0 && e[n[r]].claim_order <= o ? r + 1 : nt(1, r, (g) => e[n[g]].claim_order, o)) - 1;
    l[a] = n[f] + 1;
    const c = f + 1;
    n[c] = a, r = Math.max(c, r);
  }
  const s = [], i = [];
  let u = e.length - 1;
  for (let a = n[r] + 1; a != 0; a = l[a - 1]) {
    for (s.push(e[a - 1]); u >= a; u--)
      i.push(e[u]);
    u--;
  }
  for (; u >= 0; u--)
    i.push(e[u]);
  s.reverse(), i.sort((a, o) => a.claim_order - o.claim_order);
  for (let a = 0, o = 0; a < i.length; a++) {
    for (; o < s.length && i[a].claim_order >= s[o].claim_order; )
      o++;
    const f = o < s.length ? s[o] : null;
    t.insertBefore(i[a], f);
  }
}
function m(t, e) {
  if (he) {
    for (rt(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function L(t, e, n) {
  he && !n ? m(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function p(t) {
  t.parentNode.removeChild(t);
}
function Ye(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function b(t) {
  return document.createElement(t);
}
function le(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function H(t) {
  return document.createTextNode(t);
}
function A() {
  return H(" ");
}
function J(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function Ie(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function v(t) {
  return Array.from(t.childNodes);
}
function lt(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Be(t, e, n, l, r = !1) {
  lt(t);
  const s = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const u = t[i];
      if (e(u)) {
        const a = n(u);
        return a === void 0 ? t.splice(i, 1) : t[i] = a, r || (t.claim_info.last_index = i), u;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const u = t[i];
      if (e(u)) {
        const a = n(u);
        return a === void 0 ? t.splice(i, 1) : t[i] = a, r ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, u;
      }
    }
    return l();
  })();
  return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s;
}
function Ve(t, e, n, l) {
  return Be(t, (r) => r.nodeName === e, (r) => {
    const s = [];
    for (let i = 0; i < r.attributes.length; i++) {
      const u = r.attributes[i];
      n[u.name] || s.push(u.name);
    }
    s.forEach((i) => r.removeAttribute(i));
  }, () => l(e));
}
function w(t, e, n) {
  return Ve(t, e, n, b);
}
function oe(t, e, n) {
  return Ve(t, e, n, le);
}
function Q(t, e) {
  return Be(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const l = "" + e;
      if (n.data.startsWith(l)) {
        if (n.data.length !== l.length)
          return n.splitText(l.length);
      } else
        n.data = l;
    },
    () => H(e),
    !0
  );
}
function j(t) {
  return Q(t, " ");
}
function me(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ce(t, e) {
  t.value = e == null ? "" : e;
}
function ee(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Ee;
function re(t) {
  Ee = t;
}
const ne = [], ce = [], ae = [], _e = [], it = Promise.resolve();
let be = !1;
function st() {
  be || (be = !0, it.then(Pe));
}
function ve(t) {
  ae.push(t);
}
function Ae(t) {
  _e.push(t);
}
const pe = /* @__PURE__ */ new Set();
let se = 0;
function Pe() {
  const t = Ee;
  do {
    for (; se < ne.length; ) {
      const e = ne[se];
      se++, re(e), at(e.$$);
    }
    for (re(null), ne.length = 0, se = 0; ce.length; )
      ce.pop()();
    for (let e = 0; e < ae.length; e += 1) {
      const n = ae[e];
      pe.has(n) || (pe.add(n), n());
    }
    ae.length = 0;
  } while (ne.length);
  for (; _e.length; )
    _e.pop()();
  be = !1, pe.clear(), re(t);
}
function at(t) {
  if (t.fragment !== null) {
    t.update(), te(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ve);
  }
}
const ue = /* @__PURE__ */ new Set();
let W;
function Me() {
  W = {
    r: 0,
    c: [],
    p: W
  };
}
function Ne() {
  W.r || te(W.c), W = W.p;
}
function T(t, e) {
  t && t.i && (ue.delete(t), t.i(e));
}
function C(t, e, n, l) {
  if (t && t.o) {
    if (ue.has(t))
      return;
    ue.add(t), W.c.push(() => {
      ue.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function je(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function z(t) {
  t && t.c();
}
function U(t, e) {
  t && t.l(e);
}
function O(t, e, n, l) {
  const { fragment: r, on_mount: s, on_destroy: i, after_update: u } = t.$$;
  r && r.m(e, n), l || ve(() => {
    const a = s.map(Re).filter(de);
    i ? i.push(...a) : te(a), t.$$.on_mount = [];
  }), u.forEach(ve);
}
function x(t, e) {
  const n = t.$$;
  n.fragment !== null && (te(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ut(t, e) {
  t.$$.dirty[0] === -1 && (ne.push(t), st(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(t, e, n, l, r, s, i, u = [-1]) {
  const a = Ee;
  re(t);
  const o = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: D,
    not_equal: r,
    bound: Fe(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Fe(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(o.root);
  let f = !1;
  if (o.ctx = n ? n(t, e.props || {}, (c, g, ...h) => {
    const _ = h.length ? h[0] : g;
    return o.ctx && r(o.ctx[c], o.ctx[c] = _) && (!o.skip_bound && o.bound[c] && o.bound[c](_), f && ut(t, c)), g;
  }) : [], o.update(), f = !0, te(o.before_update), o.fragment = l ? l(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      et();
      const c = v(e.target);
      o.fragment && o.fragment.l(c), c.forEach(p);
    } else
      o.fragment && o.fragment.c();
    e.intro && T(t.$$.fragment), O(t, e.target, e.anchor, e.customElement), tt(), Pe();
  }
  re(a);
}
class Y {
  $destroy() {
    x(this, 1), this.$destroy = D;
  }
  $on(e, n) {
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Xe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ot = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", ct = "A 'merge' property is required", ft = "Property 'merge' must be an array", dt = "A 'find' property is required on every element inside 'merge'", ht = "Every 'find' property inside 'merge' must be of type string", mt = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", gt = "A 'replace' property is required on every element inside 'merge'", pt = "Unexpected error while parsing template JSON", _t = "Every element inside the 'merge' should be an object";
class G extends Error {
  constructor(e) {
    super(e);
  }
}
function bt(t) {
  return typeof t == "object";
}
function ge(t, e) {
  return t in e;
}
function we(t, e) {
  return !ge(t, e);
}
function vt(t, e) {
  return ge(t, e) && !(e[t] instanceof Array);
}
function wt(t, e) {
  return ge(t, e) && typeof e[t] != "string";
}
function yt(t, e) {
  const n = ge(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function It(t) {
  try {
    const e = JSON.parse(t);
    if (we("merge", e))
      throw new G(ct);
    if (vt("merge", e))
      throw new G(ft);
    const { merge: n } = e, l = Et(n);
    return { ...e, merge: l };
  } catch (e) {
    throw He(e);
  }
}
function Et(t) {
  return t.map((n) => {
    if (!bt(n))
      throw new G(_t);
    if (we("find", n))
      throw new G(dt);
    if (we("replace", n))
      throw new G(gt);
    if (wt("find", n))
      throw new G(ht);
    if (yt("find", n))
      throw new G(mt);
    return n;
  }).map(({ find: n, replace: l }) => ({
    find: n,
    replace: Qe(l)
  }));
}
function Mt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function He(t) {
  return t instanceof Error ? t : Mt(t) ? new G(t.message) : new G(pt);
}
function Qe(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class Je {
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
    this.handlers = {
      ...this.handlers,
      [e]: this.handlers[e].filter((l) => l !== n)
    };
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const n = It(Qe(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const l = He(n);
      this.error = l;
    }
  }
  updateResultMergeFields(e, n) {
    const l = n || this.getMergeFieldItem({ find: e.find });
    return this.result.merge.forEach((r) => {
      r === l && (r.find = e.find, r.replace = e.replace);
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
        const s = {
          placeholder: e[l].clips[r].asset.src,
          asset: e[l].clips[r].asset
        };
        s.placeholder !== void 0 && s.placeholder.charAt(0) === "{" && n.push(s);
      }
    return n;
  }
  async updateSrc(e, n) {
    let l = n.src;
    for (let r = 0; r < this.handlers.upload.length; r++) {
      const s = this.handlers.upload[r];
      l = await s(e);
    }
    n.src = l, this.handlers.change.forEach((r) => r(this.result));
  }
}
const Nt = [
  {
    find: "NAME",
    replace: "world"
  }
], Tt = {
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
}, St = {
  format: "mp4",
  resolution: "hd"
}, Ft = {
  merge: Nt,
  timeline: Tt,
  output: St
};
function Dt(t) {
  let e, n;
  return {
    c() {
      e = le("svg"), n = le("path"), this.h();
    },
    l(l) {
      e = oe(l, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var r = v(e);
      n = oe(r, "path", { d: !0 }), v(n).forEach(p), r.forEach(p), this.h();
    },
    h() {
      d(n, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"), d(e, "class", "fill-current w-4 h-4 mr-2"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20");
    },
    m(l, r) {
      L(l, e, r), m(e, n);
    },
    p: D,
    i: D,
    o: D,
    d(l) {
      l && p(e);
    }
  };
}
function Ct(t) {
  return [];
}
class At extends Y {
  constructor(e) {
    super(), R(this, e, Ct, Dt, $, {});
  }
}
function jt(t) {
  let e, n, l, r;
  return n = new At({}), {
    c() {
      e = b("a"), z(n.$$.fragment), l = H(`
	Download`), this.h();
    },
    l(s) {
      e = w(s, "A", { href: !0, download: !0, class: !0 });
      var i = v(e);
      U(n.$$.fragment, i), l = Q(i, `
	Download`), i.forEach(p), this.h();
    },
    h() {
      d(e, "href", t[0]), d(e, "download", "result.json"), d(e, "class", "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center");
    },
    m(s, i) {
      L(s, e, i), O(n, e, null), m(e, l), r = !0;
    },
    p(s, [i]) {
      (!r || i & 1) && d(e, "href", s[0]);
    },
    i(s) {
      r || (T(n.$$.fragment, s), r = !0);
    },
    o(s) {
      C(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && p(e), x(n);
    }
  };
}
function kt(t, e, n) {
  let { download: l = "" } = e;
  return t.$$set = (r) => {
    "download" in r && n(0, l = r.download);
  }, [l];
}
class Lt extends Y {
  constructor(e) {
    super(), R(this, e, kt, jt, $, { download: 0 });
  }
}
function Ot(t) {
  let e, n, l, r;
  return {
    c() {
      e = b("button"), n = H("Submit"), this.h();
    },
    l(s) {
      e = w(s, "BUTTON", { class: !0 });
      var i = v(e);
      n = Q(i, "Submit"), i.forEach(p), this.h();
    },
    h() {
      d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40");
    },
    m(s, i) {
      L(s, e, i), m(e, n), l || (r = J(e, "click", function() {
        de(t[0]) && t[0].apply(this, arguments);
      }), l = !0);
    },
    p(s, [i]) {
      t = s;
    },
    i: D,
    o: D,
    d(s) {
      s && p(e), l = !1, r();
    }
  };
}
function xt(t, e, n) {
  let { submit: l } = e;
  return t.$$set = (r) => {
    "submit" in r && n(0, l = r.submit);
  }, [l];
}
class $t extends Y {
  constructor(e) {
    super(), R(this, e, xt, Ot, $, { submit: 0 });
  }
}
function zt(t) {
  let e, n, l, r, s;
  return n = new Lt({ props: { download: t[0] } }), r = new $t({ props: { submit: t[1] } }), {
    c() {
      e = b("div"), z(n.$$.fragment), l = A(), z(r.$$.fragment), this.h();
    },
    l(i) {
      e = w(i, "DIV", { class: !0 });
      var u = v(e);
      U(n.$$.fragment, u), l = j(u), U(r.$$.fragment, u), u.forEach(p), this.h();
    },
    h() {
      d(e, "class", "flex justify-between pt-4");
    },
    m(i, u) {
      L(i, e, u), O(n, e, null), m(e, l), O(r, e, null), s = !0;
    },
    p(i, [u]) {
      const a = {};
      u & 1 && (a.download = i[0]), n.$set(a);
      const o = {};
      u & 2 && (o.submit = i[1]), r.$set(o);
    },
    i(i) {
      s || (T(n.$$.fragment, i), T(r.$$.fragment, i), s = !0);
    },
    o(i) {
      C(n.$$.fragment, i), C(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && p(e), x(n), x(r);
    }
  };
}
function Ut(t, e, n) {
  let { download: l = "" } = e, { submit: r } = e;
  return t.$$set = (s) => {
    "download" in s && n(0, l = s.download), "submit" in s && n(1, r = s.submit);
  }, [l, r];
}
class Rt extends Y {
  constructor(e) {
    super(), R(this, e, Ut, zt, $, { download: 0, submit: 1 });
  }
}
const K = [];
function ke(t, e = D) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(u) {
    if ($(t, u) && (t = u, n)) {
      const a = !K.length;
      for (const o of l)
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
  function i(u, a = D) {
    const o = [u, a];
    return l.add(o), l.size === 1 && (n = e(r) || D), u(t), () => {
      l.delete(o), l.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: i };
}
function Yt(t) {
  let e, n, l;
  return {
    c() {
      e = b("input"), this.h();
    },
    l(r) {
      e = w(r, "INPUT", {
        class: !0,
        type: !0,
        role: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      d(e, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(e, "type", "text"), d(e, "role", "textbox"), d(e, "aria-label", t[1]);
    },
    m(r, s) {
      L(r, e, s), Ce(e, t[0]), n || (l = [
        J(e, "input", t[3]),
        J(e, "focus", t[4], { once: !0 })
      ], n = !0);
    },
    p(r, [s]) {
      s & 2 && d(e, "aria-label", r[1]), s & 1 && e.value !== r[0] && Ce(e, r[0]);
    },
    i: D,
    o: D,
    d(r) {
      r && p(e), n = !1, te(l);
    }
  };
}
function Bt(t, e, n) {
  let { value: l } = e, { label: r } = e, { onFocus: s } = e;
  function i() {
    l = this.value, n(0, l);
  }
  const u = (a) => s(a.currentTarget);
  return t.$$set = (a) => {
    "value" in a && n(0, l = a.value), "label" in a && n(1, r = a.label), "onFocus" in a && n(2, s = a.onFocus);
  }, [l, r, s, i, u];
}
class Le extends Y {
  constructor(e) {
    super(), R(this, e, Bt, Yt, $, { value: 0, label: 1, onFocus: 2 });
  }
}
function Vt(t) {
  let e, n, l, r, s, i, u, a, o, f, c, g, h, _, E, I, M, y;
  function B(F) {
    t[7](F);
  }
  let S = {
    label: "MergeField.find",
    onFocus: t[6]
  };
  t[1] !== void 0 && (S.value = t[1]), u = new Le({ props: S }), ce.push(() => je(u, "value", B));
  function N(F) {
    t[9](F);
  }
  let V = {
    label: "MergeField.replace",
    onFocus: t[8]
  };
  return t[2] !== void 0 && (V.value = t[2]), f = new Le({ props: V }), ce.push(() => je(f, "value", N)), {
    c() {
      e = b("div"), n = b("div"), l = b("h1"), r = H("Add a new merge field"), s = A(), i = b("div"), z(u.$$.fragment), o = A(), z(f.$$.fragment), g = A(), h = b("div"), _ = b("button"), E = H("Add"), this.h();
    },
    l(F) {
      e = w(F, "DIV", { "data-cy": !0 });
      var k = v(e);
      n = w(k, "DIV", {});
      var P = v(n);
      l = w(P, "H1", { class: !0 });
      var q = v(l);
      r = Q(q, "Add a new merge field"), q.forEach(p), s = j(P), i = w(P, "DIV", { class: !0 });
      var X = v(i);
      U(u.$$.fragment, X), o = j(X), U(f.$$.fragment, X), g = j(X), h = w(X, "DIV", { class: !0 });
      var Te = v(h);
      _ = w(Te, "BUTTON", { "aria-label": !0, class: !0 });
      var Se = v(_);
      E = Q(Se, "Add"), Se.forEach(p), Te.forEach(p), X.forEach(p), P.forEach(p), k.forEach(p), this.h();
    },
    h() {
      d(l, "class", "text-teal-400 px-1"), d(_, "aria-label", "Add field"), d(_, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"), d(h, "class", "flex flex-row-reverse"), d(i, "class", "border p-4 mb-6"), d(e, "data-cy", "add-merge-field-section");
    },
    m(F, k) {
      L(F, e, k), m(e, n), m(n, l), m(l, r), m(n, s), m(n, i), O(u, i, null), m(i, o), O(f, i, null), m(i, g), m(i, h), m(h, _), m(_, E), I = !0, M || (y = J(_, "click", Ie(t[10])), M = !0);
    },
    p(F, [k]) {
      const P = {};
      !a && k & 2 && (a = !0, P.value = F[1], Ae(() => a = !1)), u.$set(P);
      const q = {};
      !c && k & 4 && (c = !0, q.value = F[2], Ae(() => c = !1)), f.$set(q);
    },
    i(F) {
      I || (T(u.$$.fragment, F), T(f.$$.fragment, F), I = !0);
    },
    o(F) {
      C(u.$$.fragment, F), C(f.$$.fragment, F), I = !1;
    },
    d(F) {
      F && p(e), x(u), x(f), M = !1, y();
    }
  };
}
function Pt(t, e, n) {
  let l, r, s = ke("find");
  De(t, s, (_) => n(1, l = _));
  let i = ke("replace");
  De(t, i, (_) => n(2, r = _));
  let u = (_) => _.set(""), { addField: a } = e;
  const o = () => u(s);
  function f(_) {
    l = _, s.set(l);
  }
  const c = () => u(i);
  function g(_) {
    r = _, i.set(r);
  }
  const h = () => a({ find: l, replace: r });
  return t.$$set = (_) => {
    "addField" in _ && n(0, a = _.addField);
  }, [
    a,
    l,
    r,
    s,
    i,
    u,
    o,
    f,
    c,
    g,
    h
  ];
}
class Ht extends Y {
  constructor(e) {
    super(), R(this, e, Pt, Vt, $, { addField: 0 });
  }
}
function Qt(t) {
  let e, n;
  return {
    c() {
      e = le("svg"), n = le("path"), this.h();
    },
    l(l) {
      e = oe(l, "svg", { xmlns: !0, viewBox: !0 });
      var r = v(e);
      n = oe(r, "path", { fill: !0, d: !0 }), v(n).forEach(p), r.forEach(p), this.h();
    },
    h() {
      d(n, "fill", "white"), d(n, "d", "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 16 16");
    },
    m(l, r) {
      L(l, e, r), m(e, n);
    },
    p: D,
    i: D,
    o: D,
    d(l) {
      l && p(e);
    }
  };
}
function Jt(t) {
  return [];
}
class Gt extends Y {
  constructor(e) {
    super(), R(this, e, Jt, Qt, $, {});
  }
}
function qt(t) {
  let e, n, l, r, s;
  return n = new Gt({}), {
    c() {
      e = b("button"), z(n.$$.fragment), this.h();
    },
    l(i) {
      e = w(i, "BUTTON", { class: !0, "aria-label": !0 });
      var u = v(e);
      U(n.$$.fragment, u), u.forEach(p), this.h();
    },
    h() {
      d(e, "class", "bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"), d(e, "aria-label", "Remove field");
    },
    m(i, u) {
      L(i, e, u), O(n, e, null), l = !0, r || (s = J(e, "click", Ie(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), r = !0);
    },
    p(i, [u]) {
      t = i;
    },
    i(i) {
      l || (T(n.$$.fragment, i), l = !0);
    },
    o(i) {
      C(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && p(e), x(n), r = !1, s();
    }
  };
}
function Zt(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class Wt extends Y {
  constructor(e) {
    super(), R(this, e, Zt, qt, $, { onClick: 0 });
  }
}
function Xt(t) {
  let e, n;
  return {
    c() {
      e = b("label"), n = H(t[0]), this.h();
    },
    l(l) {
      e = w(l, "LABEL", { for: !0, class: !0 });
      var r = v(e);
      n = Q(r, t[0]), r.forEach(p), this.h();
    },
    h() {
      d(e, "for", t[0]), d(e, "class", "block mb-2 monospace");
    },
    m(l, r) {
      L(l, e, r), m(e, n);
    },
    p(l, [r]) {
      r & 1 && me(n, l[0]), r & 1 && d(e, "for", l[0]);
    },
    i: D,
    o: D,
    d(l) {
      l && p(e);
    }
  };
}
function Kt(t, e, n) {
  let { find: l } = e;
  return t.$$set = (r) => {
    "find" in r && n(0, l = r.find);
  }, [l];
}
class en extends Y {
  constructor(e) {
    super(), R(this, e, Kt, Xt, $, { find: 0 });
  }
}
function tn(t) {
  let e, n, l;
  return {
    c() {
      e = b("input"), this.h();
    },
    l(r) {
      e = w(r, "INPUT", {
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
      L(r, e, s), n || (l = J(e, "input", t[4]), n = !0);
    },
    p(r, [s]) {
      s & 4 && e.value !== r[2] && (e.value = r[2]), s & 2 && d(e, "label", r[1]);
    },
    i: D,
    o: D,
    d(r) {
      r && p(e), n = !1, l();
    }
  };
}
function nn(t, e, n) {
  let { field: l } = e, { find: r } = e, { replace: s } = e, { handleFormInput: i } = e;
  const u = (a) => i({ find: r, replace: a.currentTarget.value }, l);
  return t.$$set = (a) => {
    "field" in a && n(0, l = a.field), "find" in a && n(1, r = a.find), "replace" in a && n(2, s = a.replace), "handleFormInput" in a && n(3, i = a.handleFormInput);
  }, [l, r, s, i, u];
}
class rn extends Y {
  constructor(e) {
    super(), R(this, e, nn, tn, $, {
      field: 0,
      find: 1,
      replace: 2,
      handleFormInput: 3
    });
  }
}
function ln(t) {
  let e, n, l, r, s;
  return n = new en({ props: { find: t[0].find } }), r = new rn({
    props: {
      find: t[0].find,
      replace: t[0].replace,
      field: t[0],
      handleFormInput: t[1]
    }
  }), {
    c() {
      e = b("div"), z(n.$$.fragment), l = A(), z(r.$$.fragment), this.h();
    },
    l(i) {
      e = w(i, "DIV", { "data-cy": !0 });
      var u = v(e);
      U(n.$$.fragment, u), l = j(u), U(r.$$.fragment, u), u.forEach(p), this.h();
    },
    h() {
      d(e, "data-cy", "label-input");
    },
    m(i, u) {
      L(i, e, u), O(n, e, null), m(e, l), O(r, e, null), s = !0;
    },
    p(i, [u]) {
      const a = {};
      u & 1 && (a.find = i[0].find), n.$set(a);
      const o = {};
      u & 1 && (o.find = i[0].find), u & 1 && (o.replace = i[0].replace), u & 1 && (o.field = i[0]), u & 2 && (o.handleFormInput = i[1]), r.$set(o);
    },
    i(i) {
      s || (T(n.$$.fragment, i), T(r.$$.fragment, i), s = !0);
    },
    o(i) {
      C(n.$$.fragment, i), C(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && p(e), x(n), x(r);
    }
  };
}
function sn(t, e, n) {
  let { field: l } = e, { handleFormInput: r } = e;
  return t.$$set = (s) => {
    "field" in s && n(0, l = s.field), "handleFormInput" in s && n(1, r = s.handleFormInput);
  }, [l, r];
}
class Ge extends Y {
  constructor(e) {
    super(), R(this, e, sn, ln, $, { field: 0, handleFormInput: 1 });
  }
}
function Oe(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l;
}
function xe(t) {
  let e, n, l, r, s, i;
  n = new Ge({
    props: {
      field: t[6],
      handleFormInput: t[2]
    }
  });
  function u() {
    return t[5](t[6]);
  }
  return r = new Wt({ props: { onClick: u } }), {
    c() {
      e = b("div"), z(n.$$.fragment), l = A(), z(r.$$.fragment), s = A(), this.h();
    },
    l(a) {
      e = w(a, "DIV", { class: !0 });
      var o = v(e);
      U(n.$$.fragment, o), l = j(o), U(r.$$.fragment, o), s = j(o), o.forEach(p), this.h();
    },
    h() {
      d(e, "class", "relative");
    },
    m(a, o) {
      L(a, e, o), O(n, e, null), m(e, l), O(r, e, null), m(e, s), i = !0;
    },
    p(a, o) {
      t = a;
      const f = {};
      o & 2 && (f.field = t[6]), o & 4 && (f.handleFormInput = t[2]), n.$set(f);
      const c = {};
      o & 18 && (c.onClick = u), r.$set(c);
    },
    i(a) {
      i || (T(n.$$.fragment, a), T(r.$$.fragment, a), i = !0);
    },
    o(a) {
      C(n.$$.fragment, a), C(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && p(e), x(n), x(r);
    }
  };
}
function an(t) {
  let e, n, l, r, s, i, u, a, o, f = t[1], c = [];
  for (let h = 0; h < f.length; h += 1)
    c[h] = xe(Oe(t, f, h));
  const g = (h) => C(c[h], 1, 1, () => {
    c[h] = null;
  });
  return a = new Ht({ props: { addField: t[3] } }), {
    c() {
      e = b("div"), n = b("div"), l = b("h1"), r = H("Modify Merge Values"), s = A(), i = b("div");
      for (let h = 0; h < c.length; h += 1)
        c[h].c();
      u = A(), z(a.$$.fragment), this.h();
    },
    l(h) {
      e = w(h, "DIV", {});
      var _ = v(e);
      n = w(_, "DIV", { "data-cy": !0 });
      var E = v(n);
      l = w(E, "H1", { class: !0 });
      var I = v(l);
      r = Q(I, "Modify Merge Values"), I.forEach(p), s = j(E), i = w(E, "DIV", { class: !0 });
      var M = v(i);
      for (let y = 0; y < c.length; y += 1)
        c[y].l(M);
      M.forEach(p), E.forEach(p), u = j(_), U(a.$$.fragment, _), _.forEach(p), this.h();
    },
    h() {
      d(l, "class", "text-teal-400 px-1"), d(i, "class", "border p-4 mb-6"), d(n, "data-cy", "merge-fields-input-section"), ee(e, "hidden", t[0]);
    },
    m(h, _) {
      L(h, e, _), m(e, n), m(n, l), m(l, r), m(n, s), m(n, i);
      for (let E = 0; E < c.length; E += 1)
        c[E].m(i, null);
      m(e, u), O(a, e, null), o = !0;
    },
    p(h, [_]) {
      if (_ & 22) {
        f = h[1];
        let I;
        for (I = 0; I < f.length; I += 1) {
          const M = Oe(h, f, I);
          c[I] ? (c[I].p(M, _), T(c[I], 1)) : (c[I] = xe(M), c[I].c(), T(c[I], 1), c[I].m(i, null));
        }
        for (Me(), I = f.length; I < c.length; I += 1)
          g(I);
        Ne();
      }
      const E = {};
      _ & 8 && (E.addField = h[3]), a.$set(E), (!o || _ & 1) && ee(e, "hidden", h[0]);
    },
    i(h) {
      if (!o) {
        for (let _ = 0; _ < f.length; _ += 1)
          T(c[_]);
        T(a.$$.fragment, h), o = !0;
      }
    },
    o(h) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        C(c[_]);
      C(a.$$.fragment, h), o = !1;
    },
    d(h) {
      h && p(e), Ye(c, h), x(a);
    }
  };
}
function un(t, e, n) {
  let { error: l } = e, { fields: r = [] } = e, { handleFormInput: s } = e, { addField: i } = e, { removeField: u } = e;
  const a = (o) => u(o);
  return t.$$set = (o) => {
    "error" in o && n(0, l = o.error), "fields" in o && n(1, r = o.fields), "handleFormInput" in o && n(2, s = o.handleFormInput), "addField" in o && n(3, i = o.addField), "removeField" in o && n(4, u = o.removeField);
  }, [l, r, s, i, u, a];
}
class on extends Y {
  constructor(e) {
    super(), R(this, e, un, an, $, {
      error: 0,
      fields: 1,
      handleFormInput: 2,
      addField: 3,
      removeField: 4
    });
  }
}
function cn(t) {
  let e, n, l, r;
  return {
    c() {
      e = b("button"), n = H("Reset"), this.h();
    },
    l(s) {
      e = w(s, "BUTTON", { class: !0 });
      var i = v(e);
      n = Q(i, "Reset"), i.forEach(p), this.h();
    },
    h() {
      d(e, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end");
    },
    m(s, i) {
      L(s, e, i), m(e, n), l || (r = J(e, "click", Ie(function() {
        de(t[0]) && t[0].apply(this, arguments);
      })), l = !0);
    },
    p(s, [i]) {
      t = s;
    },
    i: D,
    o: D,
    d(s) {
      s && p(e), l = !1, r();
    }
  };
}
function fn(t, e, n) {
  let { onClick: l } = e;
  return t.$$set = (r) => {
    "onClick" in r && n(0, l = r.onClick);
  }, [l];
}
class dn extends Y {
  constructor(e) {
    super(), R(this, e, fn, cn, $, { onClick: 0 });
  }
}
function hn(t) {
  let e, n, l, r, s, i, u, a;
  return u = new dn({ props: { onClick: t[0] } }), {
    c() {
      e = b("div"), n = b("p"), l = b("span"), r = H(t[2]), s = A(), i = b("div"), z(u.$$.fragment), this.h();
    },
    l(o) {
      e = w(o, "DIV", {});
      var f = v(e);
      n = w(f, "P", { "data-cy": !0, class: !0 });
      var c = v(n);
      l = w(c, "SPAN", { class: !0 });
      var g = v(l);
      r = Q(g, t[2]), g.forEach(p), c.forEach(p), s = j(f), i = w(f, "DIV", { class: !0 });
      var h = v(i);
      U(u.$$.fragment, h), h.forEach(p), f.forEach(p), this.h();
    },
    h() {
      d(l, "class", "monospace text-orange-900"), d(n, "data-cy", "template-input-error"), d(n, "class", "bg-rose-200 rounded py-2 my-4 px-4"), d(i, "class", "flex flex-row-reverse "), ee(e, "hidden", !t[1]);
    },
    m(o, f) {
      L(o, e, f), m(e, n), m(n, l), m(l, r), m(e, s), m(e, i), O(u, i, null), a = !0;
    },
    p(o, [f]) {
      (!a || f & 4) && me(r, o[2]);
      const c = {};
      f & 1 && (c.onClick = o[0]), u.$set(c), (!a || f & 2) && ee(e, "hidden", !o[1]);
    },
    i(o) {
      a || (T(u.$$.fragment, o), a = !0);
    },
    o(o) {
      C(u.$$.fragment, o), a = !1;
    },
    d(o) {
      o && p(e), x(u);
    }
  };
}
function mn(t, e, n) {
  let l, { onClick: r } = e, { error: s } = e;
  return t.$$set = (i) => {
    "onClick" in i && n(0, r = i.onClick), "error" in i && n(1, s = i.error);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && n(2, l = s && s.message || "");
  }, [r, s, l];
}
class gn extends Y {
  constructor(e) {
    super(), R(this, e, mn, hn, $, { onClick: 0, error: 1 });
  }
}
function pn(t) {
  let e, n, l = t[1].slice(2, -2).trim() + "", r, s, i, u, a, o, f;
  return {
    c() {
      e = b("div"), n = b("label"), r = H(l), s = A(), i = b("input"), u = A(), a = b("input"), this.h();
    },
    l(c) {
      e = w(c, "DIV", { "data-cy": !0 });
      var g = v(e);
      n = w(g, "LABEL", { class: !0, for: !0 });
      var h = v(n);
      r = Q(h, l), h.forEach(p), s = j(g), i = w(g, "INPUT", { class: !0, type: !0 }), u = j(g), a = w(g, "INPUT", { class: !0, type: !0 }), g.forEach(p), this.h();
    },
    h() {
      d(n, "class", "block mb-2 monospace"), d(n, "for", "input"), d(i, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(i, "type", "text"), i.value = t[0], i.disabled = !0, a.disabled = t[2], d(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500"), d(a, "type", "file"), d(e, "data-cy", "source-input");
    },
    m(c, g) {
      L(c, e, g), m(e, n), m(n, r), m(e, s), m(e, i), m(e, u), m(e, a), o || (f = J(a, "change", t[7]), o = !0);
    },
    p(c, [g]) {
      g & 2 && l !== (l = c[1].slice(2, -2).trim() + "") && me(r, l), g & 1 && i.value !== c[0] && (i.value = c[0]), g & 4 && (a.disabled = c[2]);
    },
    i: D,
    o: D,
    d(c) {
      c && p(e), o = !1, f();
    }
  };
}
function _n(t, e, n) {
  let l, { asset: r } = e, { value: s } = e, { label: i } = e, { handleChange: u } = e, a = !1, o = async (c) => {
    n(6, a = !0), await u(c), n(0, s = r.src), n(6, a = !1);
  };
  const f = (c) => o(c.currentTarget.files);
  return t.$$set = (c) => {
    "asset" in c && n(4, r = c.asset), "value" in c && n(0, s = c.value), "label" in c && n(1, i = c.label), "handleChange" in c && n(5, u = c.handleChange);
  }, t.$$.update = () => {
    t.$$.dirty & 64 && n(2, l = a);
  }, [s, i, l, o, r, u, a, f];
}
class ye extends Y {
  constructor(e) {
    super(), R(this, e, _n, pn, $, {
      asset: 4,
      value: 0,
      label: 1,
      handleChange: 5
    });
  }
}
function $e(t, e, n) {
  const l = t.slice();
  return l[3] = e[n], l;
}
function ze(t) {
  let e, n;
  return e = new ye({
    props: {
      label: t[3].placeholder,
      handleChange: t[1](t[3].asset),
      value: t[3].asset.src,
      asset: t[3].asset
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    l(l) {
      U(e.$$.fragment, l);
    },
    m(l, r) {
      O(e, l, r), n = !0;
    },
    p(l, r) {
      const s = {};
      r & 1 && (s.label = l[3].placeholder), r & 1 && (s.handleChange = l[1](l[3].asset)), r & 1 && (s.value = l[3].asset.src), r & 1 && (s.asset = l[3].asset), e.$set(s);
    },
    i(l) {
      n || (T(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function bn(t) {
  let e, n, l, r, s, i, u = t[0], a = [];
  for (let f = 0; f < u.length; f += 1)
    a[f] = ze($e(t, u, f));
  const o = (f) => C(a[f], 1, 1, () => {
    a[f] = null;
  });
  return {
    c() {
      e = b("div"), n = b("h1"), l = H("Update sources"), r = A(), s = b("div");
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      this.h();
    },
    l(f) {
      e = w(f, "DIV", { "data-cy": !0 });
      var c = v(e);
      n = w(c, "H1", { class: !0 });
      var g = v(n);
      l = Q(g, "Update sources"), g.forEach(p), r = j(c), s = w(c, "DIV", { class: !0 });
      var h = v(s);
      for (let _ = 0; _ < a.length; _ += 1)
        a[_].l(h);
      h.forEach(p), c.forEach(p), this.h();
    },
    h() {
      d(n, "class", "text-teal-400 px-1"), d(s, "class", "border p-4 mb-6"), d(e, "data-cy", "source-container"), ee(e, "hidden", t[0].length < 1);
    },
    m(f, c) {
      L(f, e, c), m(e, n), m(n, l), m(e, r), m(e, s);
      for (let g = 0; g < a.length; g += 1)
        a[g].m(s, null);
      i = !0;
    },
    p(f, [c]) {
      if (c & 3) {
        u = f[0];
        let g;
        for (g = 0; g < u.length; g += 1) {
          const h = $e(f, u, g);
          a[g] ? (a[g].p(h, c), T(a[g], 1)) : (a[g] = ze(h), a[g].c(), T(a[g], 1), a[g].m(s, null));
        }
        for (Me(), g = u.length; g < a.length; g += 1)
          o(g);
        Ne();
      }
      (!i || c & 1) && ee(e, "hidden", f[0].length < 1);
    },
    i(f) {
      if (!i) {
        for (let c = 0; c < u.length; c += 1)
          T(a[c]);
        i = !0;
      }
    },
    o(f) {
      a = a.filter(Boolean);
      for (let c = 0; c < a.length; c += 1)
        C(a[c]);
      i = !1;
    },
    d(f) {
      f && p(e), Ye(a, f);
    }
  };
}
function vn(t, e, n) {
  let { sources: l } = e, { handleSourceFieldUpdate: r } = e;
  const s = (i) => async (u) => await r(u, i);
  return t.$$set = (i) => {
    "sources" in i && n(0, l = i.sources), "handleSourceFieldUpdate" in i && n(2, r = i.handleSourceFieldUpdate);
  }, [l, s, r];
}
class wn extends Y {
  constructor(e) {
    super(), R(this, e, vn, bn, $, { sources: 0, handleSourceFieldUpdate: 2 });
  }
}
function Ue(t) {
  let e, n, l, r, s, i, u, a, o, f = fe(t[0]) + "", c, g, h, _, E, I;
  return h = new Rt({
    props: {
      submit: t[8],
      download: t[4]
    }
  }), {
    c() {
      e = b("div"), n = b("h1"), l = H("Result"), r = A(), s = b("abbr"), i = b("img"), a = A(), o = b("p"), c = H(f), g = A(), z(h.$$.fragment), this.h();
    },
    l(M) {
      e = w(M, "DIV", { "data-cy": !0, class: !0 });
      var y = v(e);
      n = w(y, "H1", { class: !0 });
      var B = v(n);
      l = Q(B, "Result"), B.forEach(p), r = j(y), s = w(y, "ABBR", { title: !0, class: !0 });
      var S = v(s);
      i = w(S, "IMG", { src: !0, alt: !0, class: !0 }), S.forEach(p), a = j(y), o = w(y, "P", { "data-cy": !0, class: !0 });
      var N = v(o);
      c = Q(N, f), N.forEach(p), g = j(y), U(h.$$.fragment, y), y.forEach(p), this.h();
    },
    h() {
      d(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), We(i.src, u = ot) || d(i, "src", u), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), d(s, "title", "Copy to clipboard"), d(s, "class", "svelte-r93edu"), d(o, "data-cy", "result"), d(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), d(e, "data-cy", "result-section"), d(e, "class", "svelte-r93edu");
    },
    m(M, y) {
      L(M, e, y), m(e, n), m(n, l), m(e, r), m(e, s), m(s, i), m(e, a), m(e, o), m(o, c), m(e, g), O(h, e, null), _ = !0, E || (I = J(i, "click", t[7]), E = !0);
    },
    p(M, y) {
      (!_ || y & 1) && f !== (f = fe(M[0]) + "") && me(c, f);
      const B = {};
      y & 16 && (B.download = M[4]), h.$set(B);
    },
    i(M) {
      _ || (T(h.$$.fragment, M), _ = !0);
    },
    o(M) {
      C(h.$$.fragment, M), _ = !1;
    },
    d(M) {
      M && p(e), x(h), E = !1, I();
    }
  };
}
function yn(t) {
  let e, n, l, r, s, i, u, a, o, f, c, g, h, _, E, I, M, y, B;
  c = new gn({
    props: {
      error: t[2],
      onClick: t[11]
    }
  }), h = new on({
    props: {
      fields: t[0].merge,
      handleFormInput: t[6],
      addField: t[9],
      removeField: t[10],
      error: t[2]
    }
  }), E = new wn({
    props: {
      sources: t[3],
      handleSourceFieldUpdate: t[12]
    }
  });
  let S = !t[2] && Ue(t);
  return {
    c() {
      e = b("div"), n = b("section"), l = b("form"), r = b("div"), s = b("label"), i = H("Paste template"), u = A(), a = b("textarea"), f = A(), z(c.$$.fragment), g = A(), z(h.$$.fragment), _ = A(), z(E.$$.fragment), I = A(), S && S.c(), this.h();
    },
    l(N) {
      e = w(N, "DIV", { class: !0 });
      var V = v(e);
      n = w(V, "SECTION", { "data-cy": !0, class: !0 });
      var F = v(n);
      l = w(F, "FORM", { class: !0 });
      var k = v(l);
      r = w(k, "DIV", { "data-cy": !0, class: !0 });
      var P = v(r);
      s = w(P, "LABEL", { for: !0, class: !0 });
      var q = v(s);
      i = Q(q, "Paste template"), q.forEach(p), u = j(P), a = w(P, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), v(a).forEach(p), P.forEach(p), f = j(k), U(c.$$.fragment, k), g = j(k), U(h.$$.fragment, k), _ = j(k), U(E.$$.fragment, k), k.forEach(p), I = j(F), S && S.l(F), F.forEach(p), V.forEach(p), this.h();
    },
    h() {
      d(s, "for", "json-input"), d(s, "class", "text-teal-400 px-1 svelte-r93edu"), d(a, "data-cy", "template-input"), d(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), d(a, "id", "json-input"), a.value = o = fe(t[1]), d(r, "data-cy", "template-input-section"), d(r, "class", "mb-6 svelte-r93edu"), d(l, "class", "svelte-r93edu"), d(n, "data-cy", "form-container"), d(n, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), d(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(N, V) {
      L(N, e, V), m(e, n), m(n, l), m(l, r), m(r, s), m(s, i), m(r, u), m(r, a), m(l, f), O(c, l, null), m(l, g), O(h, l, null), m(l, _), O(E, l, null), m(n, I), S && S.m(n, null), M = !0, y || (B = J(a, "input", t[14]), y = !0);
    },
    p(N, [V]) {
      (!M || V & 2 && o !== (o = fe(N[1]))) && (a.value = o);
      const F = {};
      V & 4 && (F.error = N[2]), c.$set(F);
      const k = {};
      V & 1 && (k.fields = N[0].merge), V & 4 && (k.error = N[2]), h.$set(k);
      const P = {};
      V & 8 && (P.sources = N[3]), E.$set(P), N[2] ? S && (Me(), C(S, 1, 1, () => {
        S = null;
      }), Ne()) : S ? (S.p(N, V), V & 4 && T(S, 1)) : (S = Ue(N), S.c(), T(S, 1), S.m(n, null));
    },
    i(N) {
      M || (T(c.$$.fragment, N), T(h.$$.fragment, N), T(E.$$.fragment, N), T(S), M = !0);
    },
    o(N) {
      C(c.$$.fragment, N), C(h.$$.fragment, N), C(E.$$.fragment, N), C(S), M = !1;
    },
    d(N) {
      N && p(e), x(c), x(h), x(E), S && S.d(), y = !1, B();
    }
  };
}
function fe(t) {
  return JSON.stringify(t, null, 2);
}
function In(t) {
  if (typeof window < "u") {
    const e = new Blob([JSON.stringify(t, null, 2)], { type: "text/plain" });
    return URL.createObjectURL(e);
  } else
    return null;
}
function En(t, e, n) {
  let l, { editTemplateService: r = new Je(Ft) } = e, s = r.template, i = r.result, u = null, a = r.getSrcPlaceholders();
  function o(y) {
    r.setTemplateSource(y), n(1, s = r.template), n(0, i = r.result), n(2, u = r.error), n(3, a = r.getSrcPlaceholders());
  }
  function f(y, B) {
    r.updateResultMergeFields(y, B), n(0, i = r.result);
  }
  function c() {
    navigator.clipboard.writeText(JSON.stringify(i)), alert("JSON copied to clipboard!");
  }
  function g() {
    r.submit(), window.alert("Form successfully submitted!");
  }
  function h(y) {
    r.addMergeField(y), n(1, s = r.template), n(0, i = r.result), n(2, u = r.error);
  }
  function _(y) {
    const B = r.getMergeFieldItem(y);
    r.removeMergeField(B), n(1, s = r.template), n(0, i = r.result), n(2, u = r.error);
  }
  function E() {
    r.setTemplateSource(r.result), n(1, s = r.template), n(0, i = r.result), n(2, u = r.error);
  }
  async function I(y, B) {
    await r.updateSrc(y, B), n(1, s = r.template), n(0, i = r.result);
  }
  const M = (y) => o(y.currentTarget.value);
  return t.$$set = (y) => {
    "editTemplateService" in y && n(13, r = y.editTemplateService);
  }, t.$$.update = () => {
    t.$$.dirty & 1 && n(4, l = In(i) || "");
  }, [
    i,
    s,
    u,
    a,
    l,
    o,
    f,
    c,
    g,
    h,
    _,
    E,
    I,
    r,
    M
  ];
}
class Mn extends Y {
  constructor(e) {
    super(), R(this, e, En, yn, $, { editTemplateService: 13 });
  }
}
class Tn {
  constructor(e) {
    Z(this, "templateService");
    Z(this, "container");
    this.templateService = new Je(e), this.container = void 0;
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
    this.container = e, new Mn({
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
    return this.templateService.template.merge.forEach(
      (n) => new Ge({
        target: e,
        props: {
          field: n,
          handleFormInput: (l) => {
            this.templateService.updateResultMergeFields(l, n);
          }
        }
      })
    ), this.templateService.getSrcPlaceholders().forEach(
      (n) => new ye({
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
    ), e.children;
  }
  getInputSource() {
    const e = document.createElement("div");
    return new ye({
      target: e
    }), e.children;
  }
}
export {
  Tn as default
};
