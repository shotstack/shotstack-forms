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
function we(e) {
  if (e.hydrate_init)
    return;
  e.hydrate_init = !0;
  let t = e.childNodes;
  if (e.nodeName === "HEAD") {
    const s = [];
    for (let c = 0; c < t.length; c++) {
      const u = t[c];
      u.claim_order !== void 0 && s.push(u);
    }
    t = s;
  }
  const r = new Int32Array(t.length + 1), n = new Int32Array(t.length);
  r[0] = -1;
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const c = t[s].claim_order, u = (l > 0 && t[r[l]].claim_order <= c ? l + 1 : Ee(1, l, (_) => t[r[_]].claim_order, c)) - 1;
    n[s] = r[u] + 1;
    const p = u + 1;
    r[p] = s, l = Math.max(p, l);
  }
  const o = [], i = [];
  let a = t.length - 1;
  for (let s = r[l] + 1; s != 0; s = n[s - 1]) {
    for (o.push(t[s - 1]); a >= s; a--)
      i.push(t[a]);
    a--;
  }
  for (; a >= 0; a--)
    i.push(t[a]);
  o.reverse(), i.sort((s, c) => s.claim_order - c.claim_order);
  for (let s = 0, c = 0; s < i.length; s++) {
    for (; c < o.length && i[s].claim_order >= o[c].claim_order; )
      c++;
    const u = c < o.length ? o[c] : null;
    e.insertBefore(i[s], u);
  }
}
function h(e, t) {
  if (j) {
    for (we(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0; )
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
function Ne(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function E(e) {
  return document.createElement(e);
}
function x(e) {
  return document.createTextNode(e);
}
function O() {
  return x(" ");
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
      const a = e[i];
      if (t(a)) {
        const s = r(a);
        return s === void 0 ? e.splice(i, 1) : e[i] = s, l || (e.claim_info.last_index = i), a;
      }
    }
    for (let i = e.claim_info.last_index - 1; i >= 0; i--) {
      const a = e[i];
      if (t(a)) {
        const s = r(a);
        return s === void 0 ? e.splice(i, 1) : e[i] = s, l ? s === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = i, a;
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
      const a = l.attributes[i];
      r[a.name] || o.push(a.name);
    }
    o.forEach((i) => l.removeAttribute(i));
  }, () => n(t));
}
function w(e, t, r) {
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
    () => x(t),
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
const R = [], ee = [], q = [], te = [], ke = Promise.resolve();
let U = !1;
function Ae() {
  U || (U = !0, ke.then(de));
}
function Y(e) {
  q.push(e);
}
const H = /* @__PURE__ */ new Set();
let F = 0;
function de() {
  const e = X;
  do {
    for (; F < R.length; ) {
      const t = R[F];
      F++, D(t), Oe(t.$$);
    }
    for (D(null), R.length = 0, F = 0; ee.length; )
      ee.pop()();
    for (let t = 0; t < q.length; t += 1) {
      const r = q[t];
      H.has(r) || (H.add(r), r());
    }
    q.length = 0;
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
  const { fragment: l, on_mount: o, on_destroy: i, after_update: a } = e.$$;
  l && l.m(t, r), n || Y(() => {
    const s = o.map(ue).filter(_e);
    i ? i.push(...s) : V(s), e.$$.on_mount = [];
  }), a.forEach(Y);
}
function Ie(e, t) {
  const r = e.$$;
  r.fragment !== null && (V(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Pe(e, t) {
  e.$$.dirty[0] === -1 && (R.push(e), Ae(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Re(e, t, r, n, l, o, i, a = [-1]) {
  const s = X;
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
    context: new Map(t.context || (s ? s.$$.context : [])),
    callbacks: Z(),
    dirty: a,
    skip_bound: !1,
    root: t.target || s.$$.root
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
  D(s);
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
const Ce = "A 'merge' property is required", Je = "Property 'merge' must be an array", Fe = "Property 'merge' must contain at least one element", qe = "A 'find' property is required on every element inside 'merge'", Le = "Every 'find' property inside 'merge' must be of type string", Ve = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", je = "A 'replace' property is required on every element inside 'merge'";
class $ extends Error {
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
      throw new $(Ce);
    if (Be("merge", t))
      throw new $(Je);
    if (Ue("merge", t))
      throw new $(Fe);
    const r = ze(t.merge);
    return { ...t, merge: r };
  } catch (t) {
    throw t instanceof $ || t.message ? t : new $("There was a problem parsing the template json");
  }
}
function ze(e) {
  return e.map((r) => {
    if (z("find", r))
      throw new $(qe);
    if (z("replace", r))
      throw new $(je);
    if (Ge("find", r))
      throw new $(Le);
    if (He("find", r))
      throw new $(Ve);
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
      t = E("p"), r = E("span"), n = x(e[2]), this.h();
    },
    l(l) {
      t = w(l, "P", { "data-cy": !0, class: !0 });
      var o = T(t);
      r = w(o, "SPAN", { class: !0 });
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
  let t, r, n, l, o, i = e[0].merge, a = [];
  for (let s = 0; s < i.length; s += 1)
    a[s] = ie(re(e, i, s));
  return {
    c() {
      t = E("div"), r = E("h1"), n = x("Modify Merge Values"), l = O(), o = E("div");
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      this.h();
    },
    l(s) {
      t = w(s, "DIV", { "data-cy": !0, class: !0 });
      var c = T(t);
      r = w(c, "H1", { class: !0 });
      var u = T(r);
      n = I(u, "Modify Merge Values"), u.forEach(m), l = M(c), o = w(c, "DIV", { class: !0 });
      var p = T(o);
      for (let _ = 0; _ < a.length; _ += 1)
        a[_].l(p);
      p.forEach(m), c.forEach(m), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 svelte-u6rap9"), d(o, "class", "border p-4 mb-6 svelte-u6rap9"), d(t, "data-cy", "merge-fields-input-section"), d(t, "class", "svelte-u6rap9");
    },
    m(s, c) {
      P(s, t, c), h(t, r), h(r, n), h(t, l), h(t, o);
      for (let u = 0; u < a.length; u += 1)
        a[u].m(o, null);
    },
    p(s, c) {
      if (c & 33) {
        i = s[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const p = re(s, i, u);
          a[u] ? a[u].p(p, c) : (a[u] = ie(p), a[u].c(), a[u].m(o, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = i.length;
      }
    },
    d(s) {
      s && m(t), Ne(a, s);
    }
  };
}
function ie(e) {
  let t, r, n = "{{ " + e[9] + " }} ", l, o, i, a, s, c, u, p, _;
  function y(...g) {
    return e[7](e[9], ...g);
  }
  return {
    c() {
      t = E("div"), r = E("label"), l = x(n), i = O(), a = E("input"), u = O(), this.h();
    },
    l(g) {
      t = w(g, "DIV", { "data-cy": !0, class: !0 });
      var f = T(t);
      r = w(f, "LABEL", { for: !0, class: !0 });
      var v = T(r);
      l = I(v, n), v.forEach(m), i = M(f), a = w(f, "INPUT", { class: !0, id: !0, type: !0 }), u = M(f), f.forEach(m), this.h();
    },
    h() {
      d(r, "for", o = e[9]), d(r, "class", "block mb-2 monospace svelte-u6rap9"), d(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), d(a, "id", s = e[9]), d(a, "type", "text"), a.value = c = oe(e[10]), d(t, "data-cy", "label-input"), d(t, "class", "svelte-u6rap9");
    },
    m(g, f) {
      P(g, t, f), h(t, r), h(r, l), h(t, i), h(t, a), h(t, u), p || (_ = W(a, "input", y), p = !0);
    },
    p(g, f) {
      e = g, f & 1 && n !== (n = "{{ " + e[9] + " }} ") && B(l, n), f & 1 && o !== (o = e[9]) && d(r, "for", o), f & 1 && s !== (s = e[9]) && d(a, "id", s), f & 1 && c !== (c = oe(e[10])) && a.value !== c && (a.value = c);
    },
    d(g) {
      g && m(t), p = !1, _();
    }
  };
}
function se(e) {
  let t, r, n;
  return {
    c() {
      t = E("p"), r = E("span"), n = x(e[3]), this.h();
    },
    l(l) {
      t = w(l, "P", { "data-cy": !0, class: !0 });
      var o = T(t);
      r = w(o, "SPAN", { class: !0 });
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
function ae(e) {
  let t, r, n, l, o, i, a, s, c, u = JSON.stringify(e[1], null, 2) + "", p, _, y;
  return {
    c() {
      t = E("div"), r = E("h1"), n = x("Result"), l = O(), o = E("abbr"), i = E("img"), s = O(), c = E("p"), p = x(u), this.h();
    },
    l(g) {
      t = w(g, "DIV", { "data-cy": !0, class: !0 });
      var f = T(t);
      r = w(f, "H1", { class: !0 });
      var v = T(r);
      n = I(v, "Result"), v.forEach(m), l = M(f), o = w(f, "ABBR", { title: !0, class: !0 });
      var N = T(o);
      i = w(N, "IMG", { src: !0, alt: !0, class: !0 }), N.forEach(m), s = M(f), c = w(f, "P", { "data-cy": !0, class: !0 });
      var S = T(c);
      p = I(S, u), S.forEach(m), f.forEach(m), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ge(i.src, a = "img/copy-regular.svg") || d(i, "src", a), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), d(o, "title", "Copy to clipboard"), d(o, "class", "svelte-u6rap9"), d(c, "data-cy", "result"), d(c, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), d(t, "data-cy", "result-section"), d(t, "class", "svelte-u6rap9");
    },
    m(g, f) {
      P(g, t, f), h(t, r), h(r, n), h(t, l), h(t, o), h(o, i), h(t, s), h(t, c), h(c, p), _ || (y = W(i, "click", e[6]), _ = !0);
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
  let t, r, n, l, o, i, a, s, c, u, p, _, y, g, f = e[2] && ne(e), v = ((K = e[0].merge) == null ? void 0 : K.length) && !e[2] && le(e), N = e[3] && se(e), S = !e[3] && !e[2] && ae(e);
  return {
    c() {
      t = E("section"), r = E("form"), n = E("div"), l = E("label"), o = x("Paste template"), i = O(), a = E("textarea"), c = O(), f && f.c(), u = O(), v && v.c(), p = O(), N && N.c(), _ = O(), S && S.c(), this.h();
    },
    l(b) {
      t = w(b, "SECTION", { "data-cy": !0, class: !0 });
      var k = T(t);
      r = w(k, "FORM", { class: !0 });
      var A = T(r);
      n = w(A, "DIV", { "data-cy": !0, class: !0 });
      var C = T(n);
      l = w(C, "LABEL", { for: !0, class: !0 });
      var Q = T(l);
      o = I(Q, "Paste template"), Q.forEach(m), i = M(C), a = w(C, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), T(a).forEach(m), C.forEach(m), c = M(A), f && f.l(A), u = M(A), v && v.l(A), p = M(A), N && N.l(A), A.forEach(m), _ = M(k), S && S.l(k), k.forEach(m), this.h();
    },
    h() {
      d(l, "for", "json-input"), d(l, "class", "text-teal-400 px-1 svelte-u6rap9"), d(a, "data-cy", "template-input"), d(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), d(a, "id", "json-input"), a.value = s = JSON.stringify(e[0], null, 2), d(n, "data-cy", "template-input-section"), d(n, "class", "mb-6 svelte-u6rap9"), d(r, "class", "svelte-u6rap9"), d(t, "data-cy", "form-container"), d(t, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(b, k) {
      P(b, t, k), h(t, r), h(r, n), h(n, l), h(l, o), h(n, i), h(n, a), h(r, c), f && f.m(r, null), h(r, u), v && v.m(r, null), h(r, p), N && N.m(r, null), h(t, _), S && S.m(t, null), y || (g = W(a, "input", e[4]), y = !0);
    },
    p(b, [k]) {
      var A;
      k & 1 && s !== (s = JSON.stringify(b[0], null, 2)) && (a.value = s), b[2] ? f ? f.p(b, k) : (f = ne(b), f.c(), f.m(r, u)) : f && (f.d(1), f = null), ((A = b[0].merge) == null ? void 0 : A.length) && !b[2] ? v ? v.p(b, k) : (v = le(b), v.c(), v.m(r, p)) : v && (v.d(1), v = null), b[3] ? N ? N.p(b, k) : (N = se(b), N.c(), N.m(r, null)) : N && (N.d(1), N = null), !b[3] && !b[2] ? S ? S.p(b, k) : (S = ae(b), S.c(), S.m(t, null)) : S && (S.d(1), S = null);
    },
    i: L,
    o: L,
    d(b) {
      b && m(t), f && f.d(), v && v.d(), N && N.d(), S && S.d(), y = !1, g();
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
  let l = n.template, o = n.result, i, a;
  function s(_) {
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
      r(1, o = { ...o, merge: y }), r(3, a = "");
    } catch (y) {
      r(3, a = y.message);
    }
  }
  function u() {
    navigator.clipboard.writeText(JSON.stringify(o)), alert("JSON copied to clipboard!");
  }
  return [
    l,
    o,
    i,
    a,
    s,
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
