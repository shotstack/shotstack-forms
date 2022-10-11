var _e = Object.defineProperty;
var pe = (t, e, r) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var L = (t, e, r) => (pe(t, typeof e != "symbol" ? e + "" : e, r), r);
function F() {
}
function ce(t) {
  return t();
}
function te() {
  return /* @__PURE__ */ Object.create(null);
}
function V(t) {
  t.forEach(ce);
}
function ge(t) {
  return typeof t == "function";
}
function ye(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let $;
function ve(t, e) {
  return $ || ($ = document.createElement("a")), $.href = e, t === $.href;
}
function Ee(t) {
  return Object.keys(t).length === 0;
}
let B = !1;
function Me() {
  B = !0;
}
function Ie() {
  B = !1;
}
function Ne(t, e, r, n) {
  for (; t < e; ) {
    const a = t + (e - t >> 1);
    r(a) <= n ? t = a + 1 : e = a;
  }
  return t;
}
function be(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let o = 0; o < e.length; o++) {
      const u = e[o];
      u.claim_order !== void 0 && l.push(u);
    }
    e = l;
  }
  const r = new Int32Array(e.length + 1), n = new Int32Array(e.length);
  r[0] = -1;
  let a = 0;
  for (let l = 0; l < e.length; l++) {
    const o = e[l].claim_order, u = (a > 0 && e[r[a]].claim_order <= o ? a + 1 : Ne(1, a, (m) => e[r[m]].claim_order, o)) - 1;
    n[l] = r[u] + 1;
    const h = u + 1;
    r[h] = l, a = Math.max(h, a);
  }
  const c = [], i = [];
  let s = e.length - 1;
  for (let l = r[a] + 1; l != 0; l = n[l - 1]) {
    for (c.push(e[l - 1]); s >= l; s--)
      i.push(e[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(e[s]);
  c.reverse(), i.sort((l, o) => l.claim_order - o.claim_order);
  for (let l = 0, o = 0; l < i.length; l++) {
    for (; o < c.length && i[l].claim_order >= c[o].claim_order; )
      o++;
    const u = o < c.length ? c[o] : null;
    t.insertBefore(i[l], u);
  }
}
function _(t, e) {
  if (B) {
    for (be(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function z(t, e, r) {
  B && !r ? _(t, e) : (e.parentNode !== t || e.nextSibling != r) && t.insertBefore(e, r || null);
}
function g(t) {
  t.parentNode.removeChild(t);
}
function Te(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function v(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function w() {
  return j(" ");
}
function W(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function d(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function I(t) {
  return Array.from(t.childNodes);
}
function De(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ue(t, e, r, n, a = !1) {
  De(t);
  const c = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const s = t[i];
      if (e(s)) {
        const l = r(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, a || (t.claim_info.last_index = i), s;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const s = t[i];
      if (e(s)) {
        const l = r(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, a ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, s;
      }
    }
    return n();
  })();
  return c.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, c;
}
function we(t, e, r, n) {
  return ue(t, (a) => a.nodeName === e, (a) => {
    const c = [];
    for (let i = 0; i < a.attributes.length; i++) {
      const s = a.attributes[i];
      r[s.name] || c.push(s.name);
    }
    c.forEach((i) => a.removeAttribute(i));
  }, () => n(e));
}
function M(t, e, r) {
  return we(t, e, r, v);
}
function x(t, e) {
  return ue(
    t,
    (r) => r.nodeType === 3,
    (r) => {
      const n = "" + e;
      if (r.data.startsWith(n)) {
        if (r.data.length !== n.length)
          return r.splitText(n.length);
      } else
        r.data = n;
    },
    () => j(e),
    !0
  );
}
function A(t) {
  return x(t, " ");
}
function X(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let K;
function Y(t) {
  K = t;
}
const k = [], re = [], Q = [], ne = [], Ae = Promise.resolve();
let H = !1;
function je() {
  H || (H = !0, Ae.then(fe));
}
function q(t) {
  Q.push(t);
}
const G = /* @__PURE__ */ new Set();
let U = 0;
function fe() {
  const t = K;
  do {
    for (; U < k.length; ) {
      const e = k[U];
      U++, Y(e), Se(e.$$);
    }
    for (Y(null), k.length = 0, U = 0; re.length; )
      re.pop()();
    for (let e = 0; e < Q.length; e += 1) {
      const r = Q[e];
      G.has(r) || (G.add(r), r());
    }
    Q.length = 0;
  } while (k.length);
  for (; ne.length; )
    ne.pop()();
  H = !1, G.clear(), Y(t);
}
function Se(t) {
  if (t.fragment !== null) {
    t.update(), V(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(q);
  }
}
const xe = /* @__PURE__ */ new Set();
function Ce(t, e) {
  t && t.i && (xe.delete(t), t.i(e));
}
function Le(t, e, r, n) {
  const { fragment: a, on_mount: c, on_destroy: i, after_update: s } = t.$$;
  a && a.m(e, r), n || q(() => {
    const l = c.map(ce).filter(ge);
    i ? i.push(...l) : V(l), t.$$.on_mount = [];
  }), s.forEach(q);
}
function Oe(t, e) {
  const r = t.$$;
  r.fragment !== null && (V(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function ke(t, e) {
  t.$$.dirty[0] === -1 && (k.push(t), je(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ye(t, e, r, n, a, c, i, s = [-1]) {
  const l = K;
  Y(t);
  const o = t.$$ = {
    fragment: null,
    ctx: null,
    props: c,
    update: F,
    not_equal: a,
    bound: te(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: te(),
    dirty: s,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  i && i(o.root);
  let u = !1;
  if (o.ctx = r ? r(t, e.props || {}, (h, m, ...b) => {
    const p = b.length ? b[0] : m;
    return o.ctx && a(o.ctx[h], o.ctx[h] = p) && (!o.skip_bound && o.bound[h] && o.bound[h](p), u && ke(t, h)), m;
  }) : [], o.update(), u = !0, V(o.before_update), o.fragment = n ? n(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      Me();
      const h = I(e.target);
      o.fragment && o.fragment.l(h), h.forEach(g);
    } else
      o.fragment && o.fragment.c();
    e.intro && Ce(t.$$.fragment), Le(t, e.target, e.anchor, e.customElement), Ie(), fe();
  }
  Y(l);
}
class ze {
  $destroy() {
    Oe(this, 1), this.$destroy = F;
  }
  $on(e, r) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const a = n.indexOf(r);
      a !== -1 && n.splice(a, 1);
    };
  }
  $set(e) {
    this.$$set && !Ee(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Re = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS4yIDUxLjIiIHdpZHRoPSI1MS4yIiBoZWlnaHQ9IjUxLjIiID4KICAgIDxzdmcgd2lkdGg9IjUxLjIiIGhlaWdodD0iNTEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik01MDIuNiA3MC42M2wtNjEuMjUtNjEuMjVDNDM1LjQgMy4zNzEgNDI3LjIgMCA0MTguNyAwSDI1NS4xYy0zNS4zNSAwLTY0IDI4LjY2LTY0IDY0bC4wMTk1IDI1NkMxOTIgMzU1LjQgMjIwLjcgMzg0IDI1NiAzODRoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0VjkzLjI1QzUxMiA4NC43NyA1MDguNiA3Ni42MyA1MDIuNiA3MC42M3pNNDY0IDMyMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDI1NS4xYy04LjgzOCAwLTE2LTcuMTY0LTE2LTE2TDIzOS4xIDY0LjEzYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTI4TDM4NCA5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDQ3LjFWMzIwek0yNzIgNDQ4YzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjMuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkw0Ny45OCAxOTIuMWMwLTguODM2IDcuMTY0LTE2IDE2LTE2SDE2MFYxMjhINjMuOTljLTM1LjM1IDAtNjQgMjguNjUtNjQgNjRsLjAwOTggMjU2Qy4wMDIgNDgzLjMgMjguNjYgNTEyIDY0IDUxMmgxOTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTMyaC00Ny4xTDI3MiA0NDh6IiAvPgogICAgPC9zdmc+Cjwvc3ZnPg==", Pe = "A 'merge' property is required", $e = "Property 'merge' must be an array", Ue = "Property 'merge' must contain at least one element", Qe = "A 'find' property is required on every element inside 'merge'", Fe = "Every 'find' property inside 'merge' must be of type string", Je = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", Ve = "A 'replace' property is required on every element inside 'merge'", Be = "Unexpected error while parsing template JSON", Ge = "Every element inside the 'merge' should be an object";
class T extends Error {
  constructor(e) {
    super(e);
  }
}
function He(t) {
  return typeof t == "object";
}
function R(t, e) {
  return t in e;
}
function Z(t, e) {
  return !R(t, e);
}
function qe(t, e) {
  return R(t, e) && !(e[t] instanceof Array);
}
function Ze(t, e) {
  return R(t, e) && typeof e[t] != "string";
}
function We(t, e) {
  const r = R(t, e) && e[t];
  return !(typeof r == "string" && r.length > 0);
}
function Xe(t, e) {
  const r = R(t, e) && e[t];
  return !(r instanceof Array && r.length > 0);
}
function Ke(t) {
  try {
    const e = JSON.parse(t);
    if (Z("merge", e))
      throw new T(Pe);
    if (qe("merge", e))
      throw new T($e);
    if (Xe("merge", e))
      throw new T(Ue);
    const { merge: r } = e, n = et(r);
    return { ...e, merge: n };
  } catch (e) {
    throw de(e);
  }
}
function et(t) {
  return t.map((r) => {
    if (!He(r))
      throw new T(Ge);
    if (Z("find", r))
      throw new T(Qe);
    if (Z("replace", r))
      throw new T(Ve);
    if (Ze("find", r))
      throw new T(Fe);
    if (We("find", r))
      throw new T(Je);
    return r;
  }).map(({ find: r, replace: n }) => ({
    find: r,
    replace: he(n)
  }));
}
function tt(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function de(t) {
  return t instanceof Error ? t : tt(t) ? new T(t.message) : new T(Be);
}
function he(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class me {
  constructor(e) {
    L(this, "template");
    L(this, "_result");
    L(this, "_error");
    L(this, "handlers");
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = { change: [], submit: [], error: [this.logger] }, this.setTemplateSource(e);
  }
  set error(e) {
    const r = this._error && { ...this._error } || null;
    this._error = e, e !== null && this.handlers.error.forEach((n) => n(e, r));
  }
  get error() {
    return this._error;
  }
  set result(e) {
    const r = { ...this._result };
    this._result = e, this.handlers.change.forEach((n) => n(e, r));
  }
  get result() {
    return this._result;
  }
  on(e, r) {
    this.handlers[e].push(r);
  }
  off(e, r) {
    this.handlers = {
      ...this.handlers,
      [e]: this.handlers[e].filter((n) => n !== r)
    };
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const r = Ke(he(e));
      this.template = r, this.result = r, this.error = null;
    } catch (r) {
      const n = de(r);
      this.error = n;
    }
  }
  updateResultMergeFields(e) {
    const { find: r, replace: n } = e, a = { find: r, replace: n }, c = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? a : i
    );
    return this.result = { ...this.result, merge: c }, c;
  }
  logger(e) {
    console.error(e);
  }
}
const rt = [
  {
    find: "NAME",
    replace: "world"
  }
], nt = {
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
}, lt = {
  format: "mp4",
  resolution: "hd"
}, it = {
  merge: rt,
  timeline: nt,
  output: lt
};
function le(t, e, r) {
  const n = t.slice();
  return n[9] = e[r].find, n[10] = e[r].replace, n;
}
function ie(t) {
  let e, r, n = t[2].message + "", a;
  return {
    c() {
      e = v("p"), r = v("span"), a = j(n), this.h();
    },
    l(c) {
      e = M(c, "P", { "data-cy": !0, class: !0 });
      var i = I(e);
      r = M(i, "SPAN", { class: !0 });
      var s = I(r);
      a = x(s, n), s.forEach(g), i.forEach(g), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-r93edu"), d(e, "data-cy", "template-input-error"), d(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-r93edu");
    },
    m(c, i) {
      z(c, e, i), _(e, r), _(r, a);
    },
    p(c, i) {
      i & 4 && n !== (n = c[2].message + "") && X(a, n);
    },
    d(c) {
      c && g(e);
    }
  };
}
function se(t) {
  let e, r, n, a, c, i = t[0].merge, s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = ae(le(t, i, l));
  return {
    c() {
      e = v("div"), r = v("h1"), n = j("Modify Merge Values"), a = w(), c = v("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      this.h();
    },
    l(l) {
      e = M(l, "DIV", { "data-cy": !0, class: !0 });
      var o = I(e);
      r = M(o, "H1", { class: !0 });
      var u = I(r);
      n = x(u, "Modify Merge Values"), u.forEach(g), a = A(o), c = M(o, "DIV", { class: !0 });
      var h = I(c);
      for (let m = 0; m < s.length; m += 1)
        s[m].l(h);
      h.forEach(g), o.forEach(g), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 svelte-r93edu"), d(c, "class", "border p-4 mb-6 svelte-r93edu"), d(e, "data-cy", "merge-fields-input-section"), d(e, "class", "svelte-r93edu");
    },
    m(l, o) {
      z(l, e, o), _(e, r), _(r, n), _(e, a), _(e, c);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(c, null);
    },
    p(l, o) {
      if (o & 17) {
        i = l[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const h = le(l, i, u);
          s[u] ? s[u].p(h, o) : (s[u] = ae(h), s[u].c(), s[u].m(c, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(l) {
      l && g(e), Te(s, l);
    }
  };
}
function ae(t) {
  let e, r, n = "{{ " + t[9] + " }} ", a, c, i, s, l, o, u, h, m;
  function b(...p) {
    return t[8](t[9], ...p);
  }
  return {
    c() {
      e = v("div"), r = v("label"), a = j(n), i = w(), s = v("input"), u = w(), this.h();
    },
    l(p) {
      e = M(p, "DIV", { "data-cy": !0, class: !0 });
      var f = I(e);
      r = M(f, "LABEL", { for: !0, class: !0 });
      var y = I(r);
      a = x(y, n), y.forEach(g), i = A(f), s = M(f, "INPUT", { class: !0, id: !0, type: !0 }), u = A(f), f.forEach(g), this.h();
    },
    h() {
      d(r, "for", c = t[9]), d(r, "class", "block mb-2 monospace svelte-r93edu"), d(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-r93edu"), d(s, "id", l = t[9]), d(s, "type", "text"), s.value = o = t[10], d(e, "data-cy", "label-input"), d(e, "class", "svelte-r93edu");
    },
    m(p, f) {
      z(p, e, f), _(e, r), _(r, a), _(e, i), _(e, s), _(e, u), h || (m = W(s, "input", b), h = !0);
    },
    p(p, f) {
      t = p, f & 1 && n !== (n = "{{ " + t[9] + " }} ") && X(a, n), f & 1 && c !== (c = t[9]) && d(r, "for", c), f & 1 && l !== (l = t[9]) && d(s, "id", l), f & 1 && o !== (o = t[10]) && s.value !== o && (s.value = o);
    },
    d(p) {
      p && g(e), h = !1, m();
    }
  };
}
function oe(t) {
  let e, r, n, a, c, i, s, l, o, u = J(t[1]) + "", h, m, b;
  return {
    c() {
      e = v("div"), r = v("h1"), n = j("Result"), a = w(), c = v("abbr"), i = v("img"), l = w(), o = v("p"), h = j(u), this.h();
    },
    l(p) {
      e = M(p, "DIV", { "data-cy": !0, class: !0 });
      var f = I(e);
      r = M(f, "H1", { class: !0 });
      var y = I(r);
      n = x(y, "Result"), y.forEach(g), a = A(f), c = M(f, "ABBR", { title: !0, class: !0 });
      var E = I(c);
      i = M(E, "IMG", { src: !0, alt: !0, class: !0 }), E.forEach(g), l = A(f), o = M(f, "P", { "data-cy": !0, class: !0 });
      var O = I(o);
      h = x(O, u), O.forEach(g), f.forEach(g), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-r93edu"), ve(i.src, s = Re) || d(i, "src", s), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-r93edu"), d(c, "title", "Copy to clipboard"), d(c, "class", "svelte-r93edu"), d(o, "data-cy", "result"), d(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"), d(e, "data-cy", "result-section"), d(e, "class", "svelte-r93edu");
    },
    m(p, f) {
      z(p, e, f), _(e, r), _(r, n), _(e, a), _(e, c), _(c, i), _(e, l), _(e, o), _(o, h), m || (b = W(i, "click", t[5]), m = !0);
    },
    p(p, f) {
      f & 2 && u !== (u = J(p[1]) + "") && X(h, u);
    },
    d(p) {
      p && g(e), m = !1, b();
    }
  };
}
function st(t) {
  var O;
  let e, r, n, a, c, i, s, l, o, u, h, m, b, p, f = t[2] && ie(t), y = ((O = t[0].merge) == null ? void 0 : O.length) && !t[2] && se(t), E = !t[2] && oe(t);
  return {
    c() {
      e = v("div"), r = v("section"), n = v("form"), a = v("div"), c = v("label"), i = j("Paste template"), s = w(), l = v("textarea"), u = w(), f && f.c(), h = w(), y && y.c(), m = w(), E && E.c(), this.h();
    },
    l(N) {
      e = M(N, "DIV", { class: !0 });
      var D = I(e);
      r = M(D, "SECTION", { "data-cy": !0, class: !0 });
      var S = I(r);
      n = M(S, "FORM", { class: !0 });
      var C = I(n);
      a = M(C, "DIV", { "data-cy": !0, class: !0 });
      var P = I(a);
      c = M(P, "LABEL", { for: !0, class: !0 });
      var ee = I(c);
      i = x(ee, "Paste template"), ee.forEach(g), s = A(P), l = M(P, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), I(l).forEach(g), P.forEach(g), u = A(C), f && f.l(C), h = A(C), y && y.l(C), C.forEach(g), m = A(S), E && E.l(S), S.forEach(g), D.forEach(g), this.h();
    },
    h() {
      d(c, "for", "json-input"), d(c, "class", "text-teal-400 px-1 svelte-r93edu"), d(l, "data-cy", "template-input"), d(l, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"), d(l, "id", "json-input"), l.value = o = J(t[0]), d(a, "data-cy", "template-input-section"), d(a, "class", "mb-6 svelte-r93edu"), d(n, "class", "svelte-r93edu"), d(r, "data-cy", "form-container"), d(r, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"), d(e, "class", "shotstack-mergefield-form svelte-r93edu");
    },
    m(N, D) {
      z(N, e, D), _(e, r), _(r, n), _(n, a), _(a, c), _(c, i), _(a, s), _(a, l), _(n, u), f && f.m(n, null), _(n, h), y && y.m(n, null), _(r, m), E && E.m(r, null), b || (p = W(l, "input", t[7]), b = !0);
    },
    p(N, [D]) {
      var S;
      D & 1 && o !== (o = J(N[0])) && (l.value = o), N[2] ? f ? f.p(N, D) : (f = ie(N), f.c(), f.m(n, h)) : f && (f.d(1), f = null), ((S = N[0].merge) == null ? void 0 : S.length) && !N[2] ? y ? y.p(N, D) : (y = se(N), y.c(), y.m(n, null)) : y && (y.d(1), y = null), N[2] ? E && (E.d(1), E = null) : E ? E.p(N, D) : (E = oe(N), E.c(), E.m(r, null));
    },
    i: F,
    o: F,
    d(N) {
      N && g(e), f && f.d(), y && y.d(), E && E.d(), b = !1, p();
    }
  };
}
function J(t) {
  return JSON.stringify(t, null, 2);
}
function at(t, e, r) {
  let { editTemplateService: n = new me(it) } = e, a = n.template, c = n.result, i = null;
  function s(m) {
    n.setTemplateSource(m), r(0, a = n.template), r(1, c = n.result), r(2, i = n.error);
  }
  function l(m) {
    n.updateResultMergeFields(m), r(1, c = n.result);
  }
  function o() {
    navigator.clipboard.writeText(JSON.stringify(c)), alert("JSON copied to clipboard!");
  }
  const u = (m) => s(m.currentTarget.value), h = (m, b) => l({ find: m, replace: b.currentTarget.value });
  return t.$$set = (m) => {
    "editTemplateService" in m && r(6, n = m.editTemplateService);
  }, [
    a,
    c,
    i,
    s,
    l,
    o,
    n,
    u,
    h
  ];
}
class ot extends ze {
  constructor(e) {
    super(), Ye(this, e, at, st, ye, { editTemplateService: 6 });
  }
}
class ut {
  constructor(e, r = document.querySelector("#shotstack-form-field")) {
    L(this, "templateService");
    this.containerElement = r, this.templateService = new me(e), this.initialize();
  }
  on(e, r) {
    this.templateService.on(e, r);
  }
  off(e, r) {
    this.templateService.off(e, r);
  }
  submit() {
    this.templateService.submit();
  }
  initialize() {
    !this.containerElement || this.containerElement && this.render(this.containerElement);
  }
  render(e) {
    new ot({
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
}
export {
  ut as default
};
