var ue = Object.defineProperty;
var fe = (t, e, n) => e in t ? ue(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (fe(t, typeof e != "symbol" ? e + "" : e, n), n);
function J() {
}
function se(t) {
  return t();
}
function q() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(se);
}
function de(t) {
  return typeof t == "function";
}
function he(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Y;
function pe(t, e) {
  return Y || (Y = document.createElement("a")), Y.href = e, t === Y.href;
}
function me(t) {
  return Object.keys(t).length === 0;
}
let P = !1;
function _e() {
  P = !0;
}
function ge() {
  P = !1;
}
function ye(t, e, n, r) {
  for (; t < e; ) {
    const a = t + (e - t >> 1);
    n(a) <= r ? t = a + 1 : e = a;
  }
  return t;
}
function Ne(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let c = 0; c < e.length; c++) {
      const u = e[c];
      u.claim_order !== void 0 && l.push(u);
    }
    e = l;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let a = 0;
  for (let l = 0; l < e.length; l++) {
    const c = e[l].claim_order, u = (a > 0 && e[n[a]].claim_order <= c ? a + 1 : ye(1, a, (m) => e[n[m]].claim_order, c)) - 1;
    r[l] = n[u] + 1;
    const d = u + 1;
    n[d] = l, a = Math.max(d, a);
  }
  const o = [], i = [];
  let s = e.length - 1;
  for (let l = n[a] + 1; l != 0; l = r[l - 1]) {
    for (o.push(e[l - 1]); s >= l; s--)
      i.push(e[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(e[s]);
  o.reverse(), i.sort((l, c) => l.claim_order - c.claim_order);
  for (let l = 0, c = 0; l < i.length; l++) {
    for (; c < o.length && i[l].claim_order >= o[c].claim_order; )
      c++;
    const u = c < o.length ? o[c] : null;
    t.insertBefore(i[l], u);
  }
}
function _(t, e) {
  if (P) {
    for (Ne(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function k(t, e, n) {
  P && !n ? _(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function ve(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function D(t) {
  return document.createTextNode(t);
}
function A() {
  return D(" ");
}
function V(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function M(t) {
  return Array.from(t.childNodes);
}
function be(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ae(t, e, n, r, a = !1) {
  be(t);
  const o = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const s = t[i];
      if (e(s)) {
        const l = n(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, a || (t.claim_info.last_index = i), s;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const s = t[i];
      if (e(s)) {
        const l = n(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, a ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, s;
      }
    }
    return r();
  })();
  return o.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, o;
}
function Me(t, e, n, r) {
  return ae(t, (a) => a.nodeName === e, (a) => {
    const o = [];
    for (let i = 0; i < a.attributes.length; i++) {
      const s = a.attributes[i];
      n[s.name] || o.push(s.name);
    }
    o.forEach((i) => a.removeAttribute(i));
  }, () => r(e));
}
function b(t, e, n) {
  return Me(t, e, n, v);
}
function x(t, e) {
  return ae(
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
    () => D(e),
    !0
  );
}
function S(t) {
  return x(t, " ");
}
function Q(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let W;
function O(t) {
  W = t;
}
const C = [], X = [], F = [], K = [], Ee = Promise.resolve();
let Z = !1;
function Te() {
  Z || (Z = !0, Ee.then(ce));
}
function G(t) {
  F.push(t);
}
const U = /* @__PURE__ */ new Set();
let R = 0;
function ce() {
  const t = W;
  do {
    for (; R < C.length; ) {
      const e = C[R];
      R++, O(e), Ie(e.$$);
    }
    for (O(null), C.length = 0, R = 0; X.length; )
      X.pop()();
    for (let e = 0; e < F.length; e += 1) {
      const n = F[e];
      U.has(n) || (U.add(n), n());
    }
    F.length = 0;
  } while (C.length);
  for (; K.length; )
    K.pop()();
  Z = !1, U.clear(), O(t);
}
function Ie(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(G);
  }
}
const Ae = /* @__PURE__ */ new Set();
function Se(t, e) {
  t && t.i && (Ae.delete(t), t.i(e));
}
function we(t, e, n, r) {
  const { fragment: a, on_mount: o, on_destroy: i, after_update: s } = t.$$;
  a && a.m(e, n), r || G(() => {
    const l = o.map(se).filter(de);
    i ? i.push(...l) : B(l), t.$$.on_mount = [];
  }), s.forEach(G);
}
function De(t, e) {
  const n = t.$$;
  n.fragment !== null && (B(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function xe(t, e) {
  t.$$.dirty[0] === -1 && (C.push(t), Te(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function je(t, e, n, r, a, o, i, s = [-1]) {
  const l = W;
  O(t);
  const c = t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: J,
    not_equal: a,
    bound: q(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: q(),
    dirty: s,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  i && i(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (d, m, ...T) => {
    const h = T.length ? T[0] : m;
    return c.ctx && a(c.ctx[d], c.ctx[d] = h) && (!c.skip_bound && c.bound[d] && c.bound[d](h), u && xe(t, d)), m;
  }) : [], c.update(), u = !0, B(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      _e();
      const d = M(e.target);
      c.fragment && c.fragment.l(d), d.forEach(y);
    } else
      c.fragment && c.fragment.c();
    e.intro && Se(t.$$.fragment), we(t, e.target, e.anchor, e.customElement), ge(), ce();
  }
  O(l);
}
class Le {
  $destroy() {
    De(this, 1), this.$destroy = J;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const a = r.indexOf(n);
      a !== -1 && r.splice(a, 1);
    };
  }
  $set(e) {
    this.$$set && !me(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ce = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==", Oe = "A 'merge' property is required", ke = "Property 'merge' must be an array", ze = "Property 'merge' must contain at least one element", Ye = "A 'find' property is required on every element inside 'merge'", Re = "Every 'find' property inside 'merge' must be of type string", Fe = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", Je = "A 'replace' property is required on every element inside 'merge'";
class w extends Error {
  constructor(e) {
    super(e);
  }
}
function H(t, e) {
  return !(t in e);
}
function Be(t, e) {
  return !(e[t] instanceof Array);
}
function Pe(t, e) {
  return typeof e[t] != "string";
}
function Ue(t, e) {
  return !(typeof e[t] == "string" && e[t].length > 0);
}
function Ze(t, e) {
  return !(e[t] instanceof Array && e[t].length > 0);
}
function ee(t) {
  try {
    const e = JSON.parse(t);
    if (H("merge", e))
      throw new w(Oe);
    if (Be("merge", e))
      throw new w(ke);
    if (Ze("merge", e))
      throw new w(ze);
    const n = Ge(e.merge);
    return { ...e, merge: n };
  } catch (e) {
    throw e instanceof Error ? e : new w("There was a problem parsing the template json");
  }
}
function Ge(t) {
  return t.map((n) => {
    if (H("find", n))
      throw new w(Ye);
    if (H("replace", n))
      throw new w(Je);
    if (Pe("find", n))
      throw new w(Re);
    if (Ue("find", n))
      throw new w(Fe);
    return n;
  }).map(({ find: n, replace: r }) => ({
    find: n,
    replace: typeof r == "string" ? r : JSON.stringify(r)
  }));
}
class oe {
  constructor(e) {
    L(this, "template");
    L(this, "_result");
    L(this, "handlers");
    const n = this.parseInitialTemplate(e);
    this.template = n, this._result = n, this.handlers = { change: [], submit: [] };
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
  submit() {
    this.handlers.submit.forEach((e) => e(this.result));
  }
  parseInitialTemplate(e) {
    const r = typeof e == "string" ? e : JSON.stringify(e);
    try {
      return ee(r);
    } catch {
      return { merge: [] };
    }
  }
  setTemplateSource(e) {
    try {
      const n = ee(e);
      return this.template = n, this.result = n, n;
    } catch (n) {
      throw n instanceof Error ? n : new Error("Error parsing JSON");
    }
  }
  updateResultMergeFields(e) {
    const { find: n, replace: r } = e, a = { find: n, replace: r }, o = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? a : i
    );
    return this.result = { ...this.result, merge: o }, o;
  }
}
const He = [
  {
    find: "NAME",
    replace: "world"
  }
], Ve = {
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
}, We = {
  merge: He,
  timeline: Ve,
  output: Qe
};
function te(t, e, n) {
  const r = t.slice();
  return r[8] = e[n].find, r[9] = e[n].replace, r;
}
function ne(t) {
  let e, n, r;
  return {
    c() {
      e = v("p"), n = v("span"), r = D(t[2]), this.h();
    },
    l(a) {
      e = b(a, "P", { "data-cy": !0, class: !0 });
      var o = M(e);
      n = b(o, "SPAN", { class: !0 });
      var i = M(n);
      r = x(i, t[2]), i.forEach(y), o.forEach(y), this.h();
    },
    h() {
      p(n, "class", "monospace text-orange-900 svelte-u6rap9"), p(e, "data-cy", "template-input-error"), p(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(a, o) {
      k(a, e, o), _(e, n), _(n, r);
    },
    p(a, o) {
      o & 4 && Q(r, a[2]);
    },
    d(a) {
      a && y(e);
    }
  };
}
function re(t) {
  let e, n, r, a, o, i = t[0].merge, s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = le(te(t, i, l));
  return {
    c() {
      e = v("div"), n = v("h1"), r = D("Modify Merge Values"), a = A(), o = v("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      this.h();
    },
    l(l) {
      e = b(l, "DIV", { "data-cy": !0, class: !0 });
      var c = M(e);
      n = b(c, "H1", { class: !0 });
      var u = M(n);
      r = x(u, "Modify Merge Values"), u.forEach(y), a = S(c), o = b(c, "DIV", { class: !0 });
      var d = M(o);
      for (let m = 0; m < s.length; m += 1)
        s[m].l(d);
      d.forEach(y), c.forEach(y), this.h();
    },
    h() {
      p(n, "class", "text-teal-400 px-1 svelte-u6rap9"), p(o, "class", "border p-4 mb-6 svelte-u6rap9"), p(e, "data-cy", "merge-fields-input-section"), p(e, "class", "svelte-u6rap9");
    },
    m(l, c) {
      k(l, e, c), _(e, n), _(n, r), _(e, a), _(e, o);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(o, null);
    },
    p(l, c) {
      if (c & 17) {
        i = l[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const d = te(l, i, u);
          s[u] ? s[u].p(d, c) : (s[u] = le(d), s[u].c(), s[u].m(o, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(l) {
      l && y(e), ve(s, l);
    }
  };
}
function le(t) {
  let e, n, r = "{{ " + t[8] + " }} ", a, o, i, s, l, c, u, d, m;
  function T(...h) {
    return t[7](t[8], ...h);
  }
  return {
    c() {
      e = v("div"), n = v("label"), a = D(r), i = A(), s = v("input"), u = A(), this.h();
    },
    l(h) {
      e = b(h, "DIV", { "data-cy": !0, class: !0 });
      var f = M(e);
      n = b(f, "LABEL", { for: !0, class: !0 });
      var g = M(n);
      a = x(g, r), g.forEach(y), i = S(f), s = b(f, "INPUT", { class: !0, id: !0, type: !0 }), u = S(f), f.forEach(y), this.h();
    },
    h() {
      p(n, "for", o = t[8]), p(n, "class", "block mb-2 monospace svelte-u6rap9"), p(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), p(s, "id", l = t[8]), p(s, "type", "text"), s.value = c = t[9], p(e, "data-cy", "label-input"), p(e, "class", "svelte-u6rap9");
    },
    m(h, f) {
      k(h, e, f), _(e, n), _(n, a), _(e, i), _(e, s), _(e, u), d || (m = V(s, "input", T), d = !0);
    },
    p(h, f) {
      t = h, f & 1 && r !== (r = "{{ " + t[8] + " }} ") && Q(a, r), f & 1 && o !== (o = t[8]) && p(n, "for", o), f & 1 && l !== (l = t[8]) && p(s, "id", l), f & 1 && c !== (c = t[9]) && s.value !== c && (s.value = c);
    },
    d(h) {
      h && y(e), d = !1, m();
    }
  };
}
function ie(t) {
  let e, n, r, a, o, i, s, l, c, u = JSON.stringify(t[1], null, 2) + "", d, m, T;
  return {
    c() {
      e = v("div"), n = v("h1"), r = D("Result"), a = A(), o = v("abbr"), i = v("img"), l = A(), c = v("p"), d = D(u), this.h();
    },
    l(h) {
      e = b(h, "DIV", { "data-cy": !0, class: !0 });
      var f = M(e);
      n = b(f, "H1", { class: !0 });
      var g = M(n);
      r = x(g, "Result"), g.forEach(y), a = S(f), o = b(f, "ABBR", { title: !0, class: !0 });
      var j = M(o);
      i = b(j, "IMG", { src: !0, alt: !0, class: !0 }), j.forEach(y), l = S(f), c = b(f, "P", { "data-cy": !0, class: !0 });
      var N = M(c);
      d = x(N, u), N.forEach(y), f.forEach(y), this.h();
    },
    h() {
      p(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), pe(i.src, s = Ce) || p(i, "src", s), p(i, "alt", "copy-button"), p(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), p(o, "title", "Copy to clipboard"), p(o, "class", "svelte-u6rap9"), p(c, "data-cy", "result"), p(c, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), p(e, "data-cy", "result-section"), p(e, "class", "svelte-u6rap9");
    },
    m(h, f) {
      k(h, e, f), _(e, n), _(n, r), _(e, a), _(e, o), _(o, i), _(e, l), _(e, c), _(c, d), m || (T = V(i, "click", t[5]), m = !0);
    },
    p(h, f) {
      f & 2 && u !== (u = JSON.stringify(h[1], null, 2) + "") && Q(d, u);
    },
    d(h) {
      h && y(e), m = !1, T();
    }
  };
}
function $e(t) {
  var j;
  let e, n, r, a, o, i, s, l, c, u, d, m, T, h = t[2] && ne(t), f = ((j = t[0].merge) == null ? void 0 : j.length) && !t[2] && re(t), g = !t[2] && ie(t);
  return {
    c() {
      e = v("section"), n = v("form"), r = v("div"), a = v("label"), o = D("Paste template"), i = A(), s = v("textarea"), c = A(), h && h.c(), u = A(), f && f.c(), d = A(), g && g.c(), this.h();
    },
    l(N) {
      e = b(N, "SECTION", { "data-cy": !0, class: !0 });
      var E = M(e);
      n = b(E, "FORM", { class: !0 });
      var I = M(n);
      r = b(I, "DIV", { "data-cy": !0, class: !0 });
      var z = M(r);
      a = b(z, "LABEL", { for: !0, class: !0 });
      var $ = M(a);
      o = x($, "Paste template"), $.forEach(y), i = S(z), s = b(z, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), M(s).forEach(y), z.forEach(y), c = S(I), h && h.l(I), u = S(I), f && f.l(I), I.forEach(y), d = S(E), g && g.l(E), E.forEach(y), this.h();
    },
    h() {
      p(a, "for", "json-input"), p(a, "class", "text-teal-400 px-1 svelte-u6rap9"), p(s, "data-cy", "template-input"), p(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), p(s, "id", "json-input"), s.value = l = JSON.stringify(t[0], null, 2), p(r, "data-cy", "template-input-section"), p(r, "class", "mb-6 svelte-u6rap9"), p(n, "class", "svelte-u6rap9"), p(e, "data-cy", "form-container"), p(e, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(N, E) {
      k(N, e, E), _(e, n), _(n, r), _(r, a), _(a, o), _(r, i), _(r, s), _(n, c), h && h.m(n, null), _(n, u), f && f.m(n, null), _(e, d), g && g.m(e, null), m || (T = V(s, "input", t[3]), m = !0);
    },
    p(N, [E]) {
      var I;
      E & 1 && l !== (l = JSON.stringify(N[0], null, 2)) && (s.value = l), N[2] ? h ? h.p(N, E) : (h = ne(N), h.c(), h.m(n, u)) : h && (h.d(1), h = null), ((I = N[0].merge) == null ? void 0 : I.length) && !N[2] ? f ? f.p(N, E) : (f = re(N), f.c(), f.m(n, null)) : f && (f.d(1), f = null), N[2] ? g && (g.d(1), g = null) : g ? g.p(N, E) : (g = ie(N), g.c(), g.m(e, null));
    },
    i: J,
    o: J,
    d(N) {
      N && y(e), h && h.d(), f && f.d(), g && g.d(), m = !1, T();
    }
  };
}
function qe(t, e, n) {
  let { editTemplateService: r = new oe(We) } = e, a = r.template, o = r.result, i = null;
  function s(d) {
    try {
      const m = r.setTemplateSource(d.target.value);
      n(0, a = m), n(1, o = m), n(2, i = null);
    } catch (m) {
      n(2, i = m.message);
    }
  }
  function l(d) {
    try {
      const m = r.updateResultMergeFields(d);
      n(1, o = { ...o, merge: m }), n(2, i = null);
    } catch (m) {
      n(2, i = m.message);
    }
  }
  function c() {
    navigator.clipboard.writeText(JSON.stringify(o)), alert("JSON copied to clipboard!");
  }
  const u = (d, m) => l({ find: d, replace: m.currentTarget.value });
  return t.$$set = (d) => {
    "editTemplateService" in d && n(6, r = d.editTemplateService);
  }, [
    a,
    o,
    i,
    s,
    l,
    c,
    r,
    u
  ];
}
class Xe extends Le {
  constructor(e) {
    super(), je(this, e, qe, $e, he, { editTemplateService: 6 });
  }
}
class et {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    L(this, "templateService");
    this.container = n, this.templateService = new oe(e), this.initialize();
  }
  on(e, n) {
    this.templateService.on(e, n);
  }
  submit() {
    this.templateService.submit();
  }
  initialize() {
    this.container && this.render(this.container);
  }
  render(e) {
    new Xe({
      target: e,
      props: {
        editTemplateService: this.templateService
      }
    });
  }
}
export {
  et as default
};
