var he = Object.defineProperty;
var me = (t, e, r) => e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Y = (t, e, r) => (me(t, typeof e != "symbol" ? e + "" : e, r), r);
function F() {
}
function ue(t) {
  return t();
}
function K() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(ue);
}
function _e(t) {
  return typeof t == "function";
}
function ge(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let R;
function ye(t, e) {
  return R || (R = document.createElement("a")), R.href = e, t === R.href;
}
function Ne(t) {
  return Object.keys(t).length === 0;
}
let U = !1;
function ve() {
  U = !0;
}
function be() {
  U = !1;
}
function Me(t, e, r, n) {
  for (; t < e; ) {
    const l = t + (e - t >> 1);
    r(l) <= n ? t = l + 1 : e = l;
  }
  return t;
}
function Ee(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const u = e[o];
      u.claim_order !== void 0 && a.push(u);
    }
    e = a;
  }
  const r = new Int32Array(e.length + 1), n = new Int32Array(e.length);
  r[0] = -1;
  let l = 0;
  for (let a = 0; a < e.length; a++) {
    const o = e[a].claim_order, u = (l > 0 && e[r[l]].claim_order <= o ? l + 1 : Me(1, l, (m) => e[r[m]].claim_order, o)) - 1;
    n[a] = r[u] + 1;
    const p = u + 1;
    r[p] = a, l = Math.max(p, l);
  }
  const c = [], i = [];
  let s = e.length - 1;
  for (let a = r[l] + 1; a != 0; a = n[a - 1]) {
    for (c.push(e[a - 1]); s >= a; s--)
      i.push(e[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(e[s]);
  c.reverse(), i.sort((a, o) => a.claim_order - o.claim_order);
  for (let a = 0, o = 0; a < i.length; a++) {
    for (; o < c.length && i[a].claim_order >= c[o].claim_order; )
      o++;
    const u = o < c.length ? c[o] : null;
    t.insertBefore(i[a], u);
  }
}
function h(t, e) {
  if (U) {
    for (Ee(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function O(t, e, r) {
  U && !r ? h(t, e) : (e.parentNode !== t || e.nextSibling != r) && t.insertBefore(e, r || null);
}
function _(t) {
  t.parentNode.removeChild(t);
}
function Te(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function b(t) {
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
function Ie(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function fe(t, e, r, n, l = !1) {
  Ie(t);
  const c = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const s = t[i];
      if (e(s)) {
        const a = r(s);
        return a === void 0 ? t.splice(i, 1) : t[i] = a, l || (t.claim_info.last_index = i), s;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const s = t[i];
      if (e(s)) {
        const a = r(s);
        return a === void 0 ? t.splice(i, 1) : t[i] = a, l ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, s;
      }
    }
    return n();
  })();
  return c.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, c;
}
function Ae(t, e, r, n) {
  return fe(t, (l) => l.nodeName === e, (l) => {
    const c = [];
    for (let i = 0; i < l.attributes.length; i++) {
      const s = l.attributes[i];
      r[s.name] || c.push(s.name);
    }
    c.forEach((i) => l.removeAttribute(i));
  }, () => n(e));
}
function M(t, e, r) {
  return Ae(t, e, r, b);
}
function L(t, e) {
  return fe(
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
function D(t) {
  return L(t, " ");
}
function Z(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let $;
function x(t) {
  $ = t;
}
const C = [], ee = [], J = [], te = [], Se = Promise.resolve();
let H = !1;
function we() {
  H || (H = !0, Se.then(de));
}
function V(t) {
  J.push(t);
}
const G = /* @__PURE__ */ new Set();
let P = 0;
function de() {
  const t = $;
  do {
    for (; P < C.length; ) {
      const e = C[P];
      P++, x(e), De(e.$$);
    }
    for (x(null), C.length = 0, P = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < J.length; e += 1) {
      const r = J[e];
      G.has(r) || (G.add(r), r());
    }
    J.length = 0;
  } while (C.length);
  for (; te.length; )
    te.pop()();
  H = !1, G.clear(), x(t);
}
function De(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(V);
  }
}
const je = /* @__PURE__ */ new Set();
function ke(t, e) {
  t && t.i && (je.delete(t), t.i(e));
}
function Le(t, e, r, n) {
  const { fragment: l, on_mount: c, on_destroy: i, after_update: s } = t.$$;
  l && l.m(e, r), n || V(() => {
    const a = c.map(ue).filter(_e);
    i ? i.push(...a) : B(a), t.$$.on_mount = [];
  }), s.forEach(V);
}
function Oe(t, e) {
  const r = t.$$;
  r.fragment !== null && (B(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ce(t, e) {
  t.$$.dirty[0] === -1 && (C.push(t), we(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(t, e, r, n, l, c, i, s = [-1]) {
  const a = $;
  x(t);
  const o = t.$$ = {
    fragment: null,
    ctx: null,
    props: c,
    update: F,
    not_equal: l,
    bound: K(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: K(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(o.root);
  let u = !1;
  if (o.ctx = r ? r(t, e.props || {}, (p, m, ...y) => {
    const g = y.length ? y[0] : m;
    return o.ctx && l(o.ctx[p], o.ctx[p] = g) && (!o.skip_bound && o.bound[p] && o.bound[p](g), u && Ce(t, p)), m;
  }) : [], o.update(), u = !0, B(o.before_update), o.fragment = n ? n(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      ve();
      const p = I(e.target);
      o.fragment && o.fragment.l(p), p.forEach(_);
    } else
      o.fragment && o.fragment.c();
    e.intro && ke(t.$$.fragment), Le(t, e.target, e.anchor, e.customElement), be(), de();
  }
  x(a);
}
class ze {
  $destroy() {
    Oe(this, 1), this.$destroy = F;
  }
  $on(e, r) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const l = n.indexOf(r);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !Ne(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ye = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==", Re = "A 'merge' property is required", Pe = "Property 'merge' must be an array", Je = "Property 'merge' must contain at least one element", Fe = "A 'find' property is required on every element inside 'merge'", Be = "Every 'find' property inside 'merge' must be of type string", Ue = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", Ze = "A 'replace' property is required on every element inside 'merge'";
class k extends Error {
  constructor(e) {
    super(e);
  }
}
function Q(t, e) {
  return !(t in e);
}
function Ge(t, e) {
  return !(e[t] instanceof Array);
}
function He(t, e) {
  return typeof e[t] != "string";
}
function Ve(t, e) {
  return !(typeof e[t] == "string" && e[t].length > 0);
}
function Qe(t, e) {
  return !(e[t] instanceof Array && e[t].length > 0);
}
function re(t) {
  try {
    const e = JSON.parse(t);
    if (Q("merge", e))
      throw new k(Re);
    if (Ge("merge", e))
      throw new k(Pe);
    if (Qe("merge", e))
      throw new k(Je);
    const r = We(e.merge);
    return { ...e, merge: r };
  } catch (e) {
    throw e instanceof Error ? e : new k("There was a problem parsing the template json");
  }
}
function We(t) {
  return t.map((r) => {
    if (Q("find", r))
      throw new k(Fe);
    if (Q("replace", r))
      throw new k(Ze);
    if (He("find", r))
      throw new k(Be);
    if (Ve("find", r))
      throw new k(Ue);
    return r;
  }).map(({ find: r, replace: n }) => ({
    find: r,
    replace: typeof n == "string" ? n : JSON.stringify(n)
  }));
}
class pe {
  constructor(e) {
    Y(this, "template");
    Y(this, "result");
    const r = this.parseInitialTemplate(e);
    this.template = r, this.result = r;
  }
  parseInitialTemplate(e) {
    const n = typeof e == "string" ? e : JSON.stringify(e);
    try {
      return re(n);
    } catch {
      return { merge: [] };
    }
  }
  setTemplateSource(e) {
    try {
      const r = re(e);
      return this.template = r, this.result = r, r;
    } catch (r) {
      throw r instanceof Error ? r : new Error("Error parsing JSON");
    }
  }
  updateResultMergeFields(e) {
    const { find: r, replace: n } = e, l = { find: r, replace: n }, c = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? l : i
    );
    return this.result = { ...this.result, merge: c }, c;
  }
}
const $e = [
  {
    find: "NAME",
    replace: "world"
  }
], qe = {
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
}, Xe = {
  format: "mp4",
  resolution: "hd"
}, Ke = {
  merge: $e,
  timeline: qe,
  output: Xe
};
function ne(t, e, r) {
  const n = t.slice();
  return n[9] = e[r].find, n[10] = e[r].replace, n;
}
function le(t) {
  let e, r, n;
  return {
    c() {
      e = b("p"), r = b("span"), n = j(t[2]), this.h();
    },
    l(l) {
      e = M(l, "P", { "data-cy": !0, class: !0 });
      var c = I(e);
      r = M(c, "SPAN", { class: !0 });
      var i = I(r);
      n = L(i, t[2]), i.forEach(_), c.forEach(_), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-u6rap9"), d(e, "data-cy", "template-input-error"), d(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(l, c) {
      O(l, e, c), h(e, r), h(r, n);
    },
    p(l, c) {
      c & 4 && Z(n, l[2]);
    },
    d(l) {
      l && _(e);
    }
  };
}
function ie(t) {
  let e, r, n, l, c, i = t[0].merge, s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = ae(ne(t, i, a));
  return {
    c() {
      e = b("div"), r = b("h1"), n = j("Modify Merge Values"), l = w(), c = b("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      this.h();
    },
    l(a) {
      e = M(a, "DIV", { "data-cy": !0, class: !0 });
      var o = I(e);
      r = M(o, "H1", { class: !0 });
      var u = I(r);
      n = L(u, "Modify Merge Values"), u.forEach(_), l = D(o), c = M(o, "DIV", { class: !0 });
      var p = I(c);
      for (let m = 0; m < s.length; m += 1)
        s[m].l(p);
      p.forEach(_), o.forEach(_), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 svelte-u6rap9"), d(c, "class", "border p-4 mb-6 svelte-u6rap9"), d(e, "data-cy", "merge-fields-input-section"), d(e, "class", "svelte-u6rap9");
    },
    m(a, o) {
      O(a, e, o), h(e, r), h(r, n), h(e, l), h(e, c);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(c, null);
    },
    p(a, o) {
      if (o & 33) {
        i = a[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const p = ne(a, i, u);
          s[u] ? s[u].p(p, o) : (s[u] = ae(p), s[u].c(), s[u].m(c, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(a) {
      a && _(e), Te(s, a);
    }
  };
}
function ae(t) {
  let e, r, n = "{{ " + t[9] + " }} ", l, c, i, s, a, o, u, p, m;
  function y(...g) {
    return t[8](t[9], ...g);
  }
  return {
    c() {
      e = b("div"), r = b("label"), l = j(n), i = w(), s = b("input"), u = w(), this.h();
    },
    l(g) {
      e = M(g, "DIV", { "data-cy": !0, class: !0 });
      var f = I(e);
      r = M(f, "LABEL", { for: !0, class: !0 });
      var N = I(r);
      l = L(N, n), N.forEach(_), i = D(f), s = M(f, "INPUT", { class: !0, id: !0, type: !0 }), u = D(f), f.forEach(_), this.h();
    },
    h() {
      d(r, "for", c = t[9]), d(r, "class", "block mb-2 monospace svelte-u6rap9"), d(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), d(s, "id", a = t[9]), d(s, "type", "text"), s.value = o = oe(t[10]), d(e, "data-cy", "label-input"), d(e, "class", "svelte-u6rap9");
    },
    m(g, f) {
      O(g, e, f), h(e, r), h(r, l), h(e, i), h(e, s), h(e, u), p || (m = W(s, "input", y), p = !0);
    },
    p(g, f) {
      t = g, f & 1 && n !== (n = "{{ " + t[9] + " }} ") && Z(l, n), f & 1 && c !== (c = t[9]) && d(r, "for", c), f & 1 && a !== (a = t[9]) && d(s, "id", a), f & 1 && o !== (o = oe(t[10])) && s.value !== o && (s.value = o);
    },
    d(g) {
      g && _(e), p = !1, m();
    }
  };
}
function se(t) {
  let e, r, n;
  return {
    c() {
      e = b("p"), r = b("span"), n = j(t[3]), this.h();
    },
    l(l) {
      e = M(l, "P", { "data-cy": !0, class: !0 });
      var c = I(e);
      r = M(c, "SPAN", { class: !0 });
      var i = I(r);
      n = L(i, t[3]), i.forEach(_), c.forEach(_), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-u6rap9"), d(e, "data-cy", "merge-fields-input-error"), d(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(l, c) {
      O(l, e, c), h(e, r), h(r, n);
    },
    p(l, c) {
      c & 8 && Z(n, l[3]);
    },
    d(l) {
      l && _(e);
    }
  };
}
function ce(t) {
  let e, r, n, l, c, i, s, a, o, u = JSON.stringify(t[1], null, 2) + "", p, m, y;
  return {
    c() {
      e = b("div"), r = b("h1"), n = j("Result"), l = w(), c = b("abbr"), i = b("img"), a = w(), o = b("p"), p = j(u), this.h();
    },
    l(g) {
      e = M(g, "DIV", { "data-cy": !0, class: !0 });
      var f = I(e);
      r = M(f, "H1", { class: !0 });
      var N = I(r);
      n = L(N, "Result"), N.forEach(_), l = D(f), c = M(f, "ABBR", { title: !0, class: !0 });
      var E = I(c);
      i = M(E, "IMG", { src: !0, alt: !0, class: !0 }), E.forEach(_), a = D(f), o = M(f, "P", { "data-cy": !0, class: !0 });
      var T = I(o);
      p = L(T, u), T.forEach(_), f.forEach(_), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ye(i.src, s = Ye) || d(i, "src", s), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), d(c, "title", "Copy to clipboard"), d(c, "class", "svelte-u6rap9"), d(o, "data-cy", "result"), d(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), d(e, "data-cy", "result-section"), d(e, "class", "svelte-u6rap9");
    },
    m(g, f) {
      O(g, e, f), h(e, r), h(r, n), h(e, l), h(e, c), h(c, i), h(e, a), h(e, o), h(o, p), m || (y = W(i, "click", t[6]), m = !0);
    },
    p(g, f) {
      f & 2 && u !== (u = JSON.stringify(g[1], null, 2) + "") && Z(p, u);
    },
    d(g) {
      g && _(e), m = !1, y();
    }
  };
}
function et(t) {
  var q;
  let e, r, n, l, c, i, s, a, o, u, p, m, y, g, f = t[2] && le(t), N = ((q = t[0].merge) == null ? void 0 : q.length) && !t[2] && ie(t), E = t[3] && se(t), T = !t[3] && !t[2] && ce(t);
  return {
    c() {
      e = b("section"), r = b("form"), n = b("div"), l = b("label"), c = j("Paste template"), i = w(), s = b("textarea"), o = w(), f && f.c(), u = w(), N && N.c(), p = w(), E && E.c(), m = w(), T && T.c(), this.h();
    },
    l(v) {
      e = M(v, "SECTION", { "data-cy": !0, class: !0 });
      var A = I(e);
      r = M(A, "FORM", { class: !0 });
      var S = I(r);
      n = M(S, "DIV", { "data-cy": !0, class: !0 });
      var z = I(n);
      l = M(z, "LABEL", { for: !0, class: !0 });
      var X = I(l);
      c = L(X, "Paste template"), X.forEach(_), i = D(z), s = M(z, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), I(s).forEach(_), z.forEach(_), o = D(S), f && f.l(S), u = D(S), N && N.l(S), p = D(S), E && E.l(S), S.forEach(_), m = D(A), T && T.l(A), A.forEach(_), this.h();
    },
    h() {
      d(l, "for", "json-input"), d(l, "class", "text-teal-400 px-1 svelte-u6rap9"), d(s, "data-cy", "template-input"), d(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), d(s, "id", "json-input"), s.value = a = JSON.stringify(t[0], null, 2), d(n, "data-cy", "template-input-section"), d(n, "class", "mb-6 svelte-u6rap9"), d(r, "class", "svelte-u6rap9"), d(e, "data-cy", "form-container"), d(e, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(v, A) {
      O(v, e, A), h(e, r), h(r, n), h(n, l), h(l, c), h(n, i), h(n, s), h(r, o), f && f.m(r, null), h(r, u), N && N.m(r, null), h(r, p), E && E.m(r, null), h(e, m), T && T.m(e, null), y || (g = W(s, "input", t[4]), y = !0);
    },
    p(v, [A]) {
      var S;
      A & 1 && a !== (a = JSON.stringify(v[0], null, 2)) && (s.value = a), v[2] ? f ? f.p(v, A) : (f = le(v), f.c(), f.m(r, u)) : f && (f.d(1), f = null), ((S = v[0].merge) == null ? void 0 : S.length) && !v[2] ? N ? N.p(v, A) : (N = ie(v), N.c(), N.m(r, p)) : N && (N.d(1), N = null), v[3] ? E ? E.p(v, A) : (E = se(v), E.c(), E.m(r, null)) : E && (E.d(1), E = null), !v[3] && !v[2] ? T ? T.p(v, A) : (T = ce(v), T.c(), T.m(e, null)) : T && (T.d(1), T = null);
    },
    i: F,
    o: F,
    d(v) {
      v && _(e), f && f.d(), N && N.d(), E && E.d(), T && T.d(), y = !1, g();
    }
  };
}
function oe(t) {
  if (typeof t == "string")
    return t;
  try {
    return JSON.stringify(t);
  } catch {
    return t;
  }
}
function tt(t, e, r) {
  let { editTemplateService: n = new pe(Ke) } = e, l = n.template, c = n.result, i, s;
  function a(m) {
    try {
      const y = n.setTemplateSource(m.target.value);
      r(0, l = y), r(1, c = y), r(2, i = "");
    } catch (y) {
      r(2, i = y.message);
    }
  }
  function o(m) {
    try {
      const y = n.updateResultMergeFields(m);
      r(1, c = { ...c, merge: y }), r(3, s = "");
    } catch (y) {
      r(3, s = y.message);
    }
  }
  function u() {
    navigator.clipboard.writeText(JSON.stringify(c)), alert("JSON copied to clipboard!");
  }
  const p = (m, y) => o({ find: m, replace: y.currentTarget.value });
  return t.$$set = (m) => {
    "editTemplateService" in m && r(7, n = m.editTemplateService);
  }, [
    l,
    c,
    i,
    s,
    a,
    o,
    u,
    n,
    p
  ];
}
class rt extends ze {
  constructor(e) {
    super(), xe(this, e, tt, et, ge, { editTemplateService: 7 });
  }
}
class lt {
  constructor(e, r = document.querySelector("#shotstack-form-field")) {
    Y(this, "templateService");
    this.container = r, this.templateService = new pe(e), this.initialize();
  }
  initialize() {
    this.container && this.render(this.container);
  }
  render(e) {
    new rt({
      target: e,
      props: {
        editTemplateService: this.templateService
      }
    });
  }
}
export {
  lt as default
};
