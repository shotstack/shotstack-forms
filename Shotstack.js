var pe = Object.defineProperty;
var he = (e, t, r) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var G = (e, t, r) => (he(e, typeof t != "symbol" ? t + "" : t, r), r);
function L() {
}
function ue(e) {
  return e();
}
function Z() {
  return /* @__PURE__ */ Object.create(null);
}
function V(e) {
  e.forEach(ue);
}
function _e(e) {
  return typeof e == "function";
}
function me(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let J;
function ge(e, t) {
  return J || (J = document.createElement("a")), J.href = t, e === J.href;
}
function ye(e) {
  return Object.keys(e).length === 0;
}
let j = !1;
function ve() {
  j = !0;
}
function be() {
  j = !1;
}
function Ee(e, t, r, n) {
  for (; e < t; ) {
    const l = e + (t - e >> 1);
    r(l) <= n ? e = l + 1 : t = l;
  }
  return e;
}
function Ne(e) {
  if (e.hydrate_init)
    return;
  e.hydrate_init = !0;
  let t = e.childNodes;
  if (e.nodeName === "HEAD") {
    const a = [];
    for (let c = 0; c < t.length; c++) {
      const u = t[c];
      u.claim_order !== void 0 && a.push(u);
    }
    t = a;
  }
  const r = new Int32Array(t.length + 1), n = new Int32Array(t.length);
  r[0] = -1;
  let l = 0;
  for (let a = 0; a < t.length; a++) {
    const c = t[a].claim_order, u = (l > 0 && t[r[l]].claim_order <= c ? l + 1 : Ee(1, l, (_) => t[r[_]].claim_order, c)) - 1;
    n[a] = r[u] + 1;
    const p = u + 1;
    r[p] = a, l = Math.max(p, l);
  }
  const o = [], i = [];
  let s = t.length - 1;
  for (let a = r[l] + 1; a != 0; a = n[a - 1]) {
    for (o.push(t[a - 1]); s >= a; s--)
      i.push(t[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(t[s]);
  o.reverse(), i.sort((a, c) => a.claim_order - c.claim_order);
  for (let a = 0, c = 0; a < i.length; a++) {
    for (; c < o.length && i[a].claim_order >= o[c].claim_order; )
      c++;
    const u = c < o.length ? o[c] : null;
    e.insertBefore(i[a], u);
  }
}
function h(e, t) {
  if (j) {
    for (Ne(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0; )
      e.actual_end_child = e.actual_end_child.nextSibling;
    t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling;
  } else
    (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function P(e, t, r) {
  j && !r ? h(e, t) : (t.parentNode !== e || t.nextSibling != r) && e.insertBefore(t, r || null);
}
function m(e) {
  e.parentNode.removeChild(e);
}
function we(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function E(e) {
  return document.createElement(e);
}
function $(e) {
  return document.createTextNode(e);
}
function O() {
  return $(" ");
}
function W(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function d(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function T(e) {
  return Array.from(e.childNodes);
}
function Se(e) {
  e.claim_info === void 0 && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function fe(e, t, r, n, l = !1) {
  Se(e);
  const o = (() => {
    for (let i = e.claim_info.last_index; i < e.length; i++) {
      const s = e[i];
      if (t(s)) {
        const a = r(s);
        return a === void 0 ? e.splice(i, 1) : e[i] = a, l || (e.claim_info.last_index = i), s;
      }
    }
    for (let i = e.claim_info.last_index - 1; i >= 0; i--) {
      const s = e[i];
      if (t(s)) {
        const a = r(s);
        return a === void 0 ? e.splice(i, 1) : e[i] = a, l ? a === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = i, s;
      }
    }
    return n();
  })();
  return o.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, o;
}
function Te(e, t, r, n) {
  return fe(e, (l) => l.nodeName === t, (l) => {
    const o = [];
    for (let i = 0; i < l.attributes.length; i++) {
      const s = l.attributes[i];
      r[s.name] || o.push(s.name);
    }
    o.forEach((i) => l.removeAttribute(i));
  }, () => n(t));
}
function N(e, t, r) {
  return Te(e, t, r, E);
}
function I(e, t) {
  return fe(
    e,
    (r) => r.nodeType === 3,
    (r) => {
      const n = "" + t;
      if (r.data.startsWith(n)) {
        if (r.data.length !== n.length)
          return r.splitText(n.length);
      } else
        r.data = n;
    },
    () => $(t),
    !0
  );
}
function M(e) {
  return I(e, " ");
}
function B(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
let X;
function D(e) {
  X = e;
}
const R = [], ee = [], F = [], te = [], ke = Promise.resolve();
let U = !1;
function Ae() {
  U || (U = !0, ke.then(de));
}
function Y(e) {
  F.push(e);
}
const H = /* @__PURE__ */ new Set();
let q = 0;
function de() {
  const e = X;
  do {
    for (; q < R.length; ) {
      const t = R[q];
      q++, D(t), Oe(t.$$);
    }
    for (D(null), R.length = 0, q = 0; ee.length; )
      ee.pop()();
    for (let t = 0; t < F.length; t += 1) {
      const r = F[t];
      H.has(r) || (H.add(r), r());
    }
    F.length = 0;
  } while (R.length);
  for (; te.length; )
    te.pop()();
  U = !1, H.clear(), D(e);
}
function Oe(e) {
  if (e.fragment !== null) {
    e.update(), V(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Y);
  }
}
const Me = /* @__PURE__ */ new Set();
function $e(e, t) {
  e && e.i && (Me.delete(e), e.i(t));
}
function xe(e, t, r, n) {
  const { fragment: l, on_mount: o, on_destroy: i, after_update: s } = e.$$;
  l && l.m(t, r), n || Y(() => {
    const a = o.map(ue).filter(_e);
    i ? i.push(...a) : V(a), e.$$.on_mount = [];
  }), s.forEach(Y);
}
function Ie(e, t) {
  const r = e.$$;
  r.fragment !== null && (V(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Pe(e, t) {
  e.$$.dirty[0] === -1 && (R.push(e), Ae(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Re(e, t, r, n, l, o, i, s = [-1]) {
  const a = X;
  D(e);
  const c = e.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: L,
    not_equal: l,
    bound: Z(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    callbacks: Z(),
    dirty: s,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  i && i(c.root);
  let u = !1;
  if (c.ctx = r ? r(e, t.props || {}, (p, _, ...y) => {
    const g = y.length ? y[0] : _;
    return c.ctx && l(c.ctx[p], c.ctx[p] = g) && (!c.skip_bound && c.bound[p] && c.bound[p](g), u && Pe(e, p)), _;
  }) : [], c.update(), u = !0, V(c.before_update), c.fragment = n ? n(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      ve();
      const p = T(t.target);
      c.fragment && c.fragment.l(p), p.forEach(m);
    } else
      c.fragment && c.fragment.c();
    t.intro && $e(e.$$.fragment), xe(e, t.target, t.anchor, t.customElement), be(), de();
  }
  D(a);
}
class De {
  $destroy() {
    Ie(this, 1), this.$destroy = L;
  }
  $on(t, r) {
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const l = n.indexOf(r);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !ye(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ce = "A 'merge' property is required", Je = "Property 'merge' must be an array", qe = "Property 'merge' must contain at least one element", Fe = "A 'find' property is required on every element inside 'merge'", Le = "Every 'find' property inside 'merge' must be of type string", Ve = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", je = "A 'replace' property is required on every element inside 'merge'";
class x extends Error {
  constructor(t) {
    super(t);
  }
}
function z(e, t) {
  return !(e in t);
}
function Be(e, t) {
  return !(t[e] instanceof Array);
}
function Ge(e, t) {
  return typeof t[e] != "string";
}
function He(e, t) {
  return !(typeof t[e] == "string" && t[e].length > 0);
}
function Ue(e, t) {
  return !(t[e] instanceof Array && t[e].length > 0);
}
function Ye(e) {
  try {
    const t = JSON.parse(e);
    if (z("merge", t))
      throw new x(Ce);
    if (Be("merge", t))
      throw new x(Je);
    if (Ue("merge", t))
      throw new x(qe);
    const r = ze(t.merge);
    return { ...t, merge: r };
  } catch (t) {
    throw t instanceof Error ? t : new x("There was a problem parsing the template json");
  }
}
function ze(e) {
  return e.map((r) => {
    if (z("find", r))
      throw new x(Fe);
    if (z("replace", r))
      throw new x(je);
    if (Ge("find", r))
      throw new x(Le);
    if (He("find", r))
      throw new x(Ve);
    return r;
  }).map(({ find: r, replace: n }) => ({
    find: r,
    replace: typeof n == "string" ? n : JSON.stringify(n)
  }));
}
class We {
  constructor(t = { merge: [] }) {
    G(this, "template");
    G(this, "result");
    this.template = t, this.result = t;
  }
  setTemplateSource(t) {
    try {
      const r = Ye(t);
      return this.template = r, this.result = r, r;
    } catch (r) {
      throw r instanceof Error ? r : new Error("Error parsing JSON");
    }
  }
  updateResultMergeFields(t) {
    const { find: r, replace: n } = t, l = { find: r, replace: n }, o = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === t.find ? l : i
    );
    return this.result = { ...this.result, merge: o }, o;
  }
}
const Xe = [
  {
    find: "NAME",
    replace: "world"
  }
], Ke = {
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
}, Qe = {
  format: "mp4",
  resolution: "hd"
}, Ze = {
  merge: Xe,
  timeline: Ke,
  output: Qe
};
function re(e, t, r) {
  const n = e.slice();
  return n[9] = t[r].find, n[10] = t[r].replace, n;
}
function ne(e) {
  let t, r, n;
  return {
    c() {
      t = E("p"), r = E("span"), n = $(e[2]), this.h();
    },
    l(l) {
      t = N(l, "P", { "data-cy": !0, class: !0 });
      var o = T(t);
      r = N(o, "SPAN", { class: !0 });
      var i = T(r);
      n = I(i, e[2]), i.forEach(m), o.forEach(m), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-u6rap9"), d(t, "data-cy", "template-input-error"), d(t, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(l, o) {
      P(l, t, o), h(t, r), h(r, n);
    },
    p(l, o) {
      o & 4 && B(n, l[2]);
    },
    d(l) {
      l && m(t);
    }
  };
}
function le(e) {
  let t, r, n, l, o, i = e[0].merge, s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = ie(re(e, i, a));
  return {
    c() {
      t = E("div"), r = E("h1"), n = $("Modify Merge Values"), l = O(), o = E("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      this.h();
    },
    l(a) {
      t = N(a, "DIV", { "data-cy": !0, class: !0 });
      var c = T(t);
      r = N(c, "H1", { class: !0 });
      var u = T(r);
      n = I(u, "Modify Merge Values"), u.forEach(m), l = M(c), o = N(c, "DIV", { class: !0 });
      var p = T(o);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_].l(p);
      p.forEach(m), c.forEach(m), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 svelte-u6rap9"), d(o, "class", "border p-4 mb-6 svelte-u6rap9"), d(t, "data-cy", "merge-fields-input-section"), d(t, "class", "svelte-u6rap9");
    },
    m(a, c) {
      P(a, t, c), h(t, r), h(r, n), h(t, l), h(t, o);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(o, null);
    },
    p(a, c) {
      if (c & 33) {
        i = a[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const p = re(a, i, u);
          s[u] ? s[u].p(p, c) : (s[u] = ie(p), s[u].c(), s[u].m(o, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(a) {
      a && m(t), we(s, a);
    }
  };
}
function ie(e) {
  let t, r, n = "{{ " + e[9] + " }} ", l, o, i, s, a, c, u, p, _;
  function y(...g) {
    return e[7](e[9], ...g);
  }
  return {
    c() {
      t = E("div"), r = E("label"), l = $(n), i = O(), s = E("input"), u = O(), this.h();
    },
    l(g) {
      t = N(g, "DIV", { "data-cy": !0, class: !0 });
      var f = T(t);
      r = N(f, "LABEL", { for: !0, class: !0 });
      var v = T(r);
      l = I(v, n), v.forEach(m), i = M(f), s = N(f, "INPUT", { class: !0, id: !0, type: !0 }), u = M(f), f.forEach(m), this.h();
    },
    h() {
      d(r, "for", o = e[9]), d(r, "class", "block mb-2 monospace svelte-u6rap9"), d(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), d(s, "id", a = e[9]), d(s, "type", "text"), s.value = c = oe(e[10]), d(t, "data-cy", "label-input"), d(t, "class", "svelte-u6rap9");
    },
    m(g, f) {
      P(g, t, f), h(t, r), h(r, l), h(t, i), h(t, s), h(t, u), p || (_ = W(s, "input", y), p = !0);
    },
    p(g, f) {
      e = g, f & 1 && n !== (n = "{{ " + e[9] + " }} ") && B(l, n), f & 1 && o !== (o = e[9]) && d(r, "for", o), f & 1 && a !== (a = e[9]) && d(s, "id", a), f & 1 && c !== (c = oe(e[10])) && s.value !== c && (s.value = c);
    },
    d(g) {
      g && m(t), p = !1, _();
    }
  };
}
function ae(e) {
  let t, r, n;
  return {
    c() {
      t = E("p"), r = E("span"), n = $(e[3]), this.h();
    },
    l(l) {
      t = N(l, "P", { "data-cy": !0, class: !0 });
      var o = T(t);
      r = N(o, "SPAN", { class: !0 });
      var i = T(r);
      n = I(i, e[3]), i.forEach(m), o.forEach(m), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-u6rap9"), d(t, "data-cy", "merge-fields-input-error"), d(t, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(l, o) {
      P(l, t, o), h(t, r), h(r, n);
    },
    p(l, o) {
      o & 8 && B(n, l[3]);
    },
    d(l) {
      l && m(t);
    }
  };
}
function se(e) {
  let t, r, n, l, o, i, s, a, c, u = JSON.stringify(e[1], null, 2) + "", p, _, y;
  return {
    c() {
      t = E("div"), r = E("h1"), n = $("Result"), l = O(), o = E("abbr"), i = E("img"), a = O(), c = E("p"), p = $(u), this.h();
    },
    l(g) {
      t = N(g, "DIV", { "data-cy": !0, class: !0 });
      var f = T(t);
      r = N(f, "H1", { class: !0 });
      var v = T(r);
      n = I(v, "Result"), v.forEach(m), l = M(f), o = N(f, "ABBR", { title: !0, class: !0 });
      var w = T(o);
      i = N(w, "IMG", { src: !0, alt: !0, class: !0 }), w.forEach(m), a = M(f), c = N(f, "P", { "data-cy": !0, class: !0 });
      var S = T(c);
      p = I(S, u), S.forEach(m), f.forEach(m), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ge(i.src, s = "img/copy-regular.svg") || d(i, "src", s), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), d(o, "title", "Copy to clipboard"), d(o, "class", "svelte-u6rap9"), d(c, "data-cy", "result"), d(c, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), d(t, "data-cy", "result-section"), d(t, "class", "svelte-u6rap9");
    },
    m(g, f) {
      P(g, t, f), h(t, r), h(r, n), h(t, l), h(t, o), h(o, i), h(t, a), h(t, c), h(c, p), _ || (y = W(i, "click", e[6]), _ = !0);
    },
    p(g, f) {
      f & 2 && u !== (u = JSON.stringify(g[1], null, 2) + "") && B(p, u);
    },
    d(g) {
      g && m(t), _ = !1, y();
    }
  };
}
function et(e) {
  var K;
  let t, r, n, l, o, i, s, a, c, u, p, _, y, g, f = e[2] && ne(e), v = ((K = e[0].merge) == null ? void 0 : K.length) && !e[2] && le(e), w = e[3] && ae(e), S = !e[3] && !e[2] && se(e);
  return {
    c() {
      t = E("section"), r = E("form"), n = E("div"), l = E("label"), o = $("Paste template"), i = O(), s = E("textarea"), c = O(), f && f.c(), u = O(), v && v.c(), p = O(), w && w.c(), _ = O(), S && S.c(), this.h();
    },
    l(b) {
      t = N(b, "SECTION", { "data-cy": !0, class: !0 });
      var k = T(t);
      r = N(k, "FORM", { class: !0 });
      var A = T(r);
      n = N(A, "DIV", { "data-cy": !0, class: !0 });
      var C = T(n);
      l = N(C, "LABEL", { for: !0, class: !0 });
      var Q = T(l);
      o = I(Q, "Paste template"), Q.forEach(m), i = M(C), s = N(C, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), T(s).forEach(m), C.forEach(m), c = M(A), f && f.l(A), u = M(A), v && v.l(A), p = M(A), w && w.l(A), A.forEach(m), _ = M(k), S && S.l(k), k.forEach(m), this.h();
    },
    h() {
      d(l, "for", "json-input"), d(l, "class", "text-teal-400 px-1 svelte-u6rap9"), d(s, "data-cy", "template-input"), d(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), d(s, "id", "json-input"), s.value = a = JSON.stringify(e[0], null, 2), d(n, "data-cy", "template-input-section"), d(n, "class", "mb-6 svelte-u6rap9"), d(r, "class", "svelte-u6rap9"), d(t, "data-cy", "form-container"), d(t, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(b, k) {
      P(b, t, k), h(t, r), h(r, n), h(n, l), h(l, o), h(n, i), h(n, s), h(r, c), f && f.m(r, null), h(r, u), v && v.m(r, null), h(r, p), w && w.m(r, null), h(t, _), S && S.m(t, null), y || (g = W(s, "input", e[4]), y = !0);
    },
    p(b, [k]) {
      var A;
      k & 1 && a !== (a = JSON.stringify(b[0], null, 2)) && (s.value = a), b[2] ? f ? f.p(b, k) : (f = ne(b), f.c(), f.m(r, u)) : f && (f.d(1), f = null), ((A = b[0].merge) == null ? void 0 : A.length) && !b[2] ? v ? v.p(b, k) : (v = le(b), v.c(), v.m(r, p)) : v && (v.d(1), v = null), b[3] ? w ? w.p(b, k) : (w = ae(b), w.c(), w.m(r, null)) : w && (w.d(1), w = null), !b[3] && !b[2] ? S ? S.p(b, k) : (S = se(b), S.c(), S.m(t, null)) : S && (S.d(1), S = null);
    },
    i: L,
    o: L,
    d(b) {
      b && m(t), f && f.d(), v && v.d(), w && w.d(), S && S.d(), y = !1, g();
    }
  };
}
function oe(e) {
  if (typeof e == "string")
    return e;
  try {
    return JSON.stringify(e);
  } catch {
    return e;
  }
}
function tt(e, t, r) {
  const n = new We(Ze);
  let l = n.template, o = n.result, i, s;
  function a(_) {
    try {
      const y = n.setTemplateSource(_.target.value);
      r(0, l = y), r(1, o = y), r(2, i = "");
    } catch (y) {
      r(2, i = y.message);
    }
  }
  function c(_) {
    try {
      const y = n.updateResultMergeFields(_);
      r(1, o = { ...o, merge: y }), r(3, s = "");
    } catch (y) {
      r(3, s = y.message);
    }
  }
  function u() {
    navigator.clipboard.writeText(JSON.stringify(o)), alert("JSON copied to clipboard!");
  }
  return [
    l,
    o,
    i,
    s,
    a,
    c,
    u,
    (_, y) => c({ find: _, replace: y.currentTarget.value })
  ];
}
class rt extends De {
  constructor(t) {
    super(), Re(this, t, tt, et, me, {});
  }
}
const nt = {
  render: (e) => new rt({ target: e })
}, ce = document.querySelector("#shotstack-form-field");
ce && nt.render(ce);
export {
  nt as default
};
