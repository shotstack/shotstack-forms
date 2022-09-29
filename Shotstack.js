var pe = Object.defineProperty;
var he = (e, t, r) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var U = (e, t, r) => (he(e, typeof t != "symbol" ? t + "" : t, r), r);
function $() {
}
function ue(e) {
  return e();
}
function K() {
  return /* @__PURE__ */ Object.create(null);
}
function F(e) {
  e.forEach(ue);
}
function me(e) {
  return typeof e == "function";
}
function _e(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Y;
function ge(e, t) {
  return Y || (Y = document.createElement("a")), Y.href = t, e === Y.href;
}
function ye(e) {
  return Object.keys(e).length === 0;
}
let J = !1;
function Ne() {
  J = !0;
}
function ve() {
  J = !1;
}
function be(e, t, r, n) {
  for (; e < t; ) {
    const l = e + (t - e >> 1);
    r(l) <= n ? e = l + 1 : t = l;
  }
  return e;
}
function Me(e) {
  if (e.hydrate_init)
    return;
  e.hydrate_init = !0;
  let t = e.childNodes;
  if (e.nodeName === "HEAD") {
    const a = [];
    for (let o = 0; o < t.length; o++) {
      const u = t[o];
      u.claim_order !== void 0 && a.push(u);
    }
    t = a;
  }
  const r = new Int32Array(t.length + 1), n = new Int32Array(t.length);
  r[0] = -1;
  let l = 0;
  for (let a = 0; a < t.length; a++) {
    const o = t[a].claim_order, u = (l > 0 && t[r[l]].claim_order <= o ? l + 1 : be(1, l, (m) => t[r[m]].claim_order, o)) - 1;
    n[a] = r[u] + 1;
    const p = u + 1;
    r[p] = a, l = Math.max(p, l);
  }
  const c = [], i = [];
  let s = t.length - 1;
  for (let a = r[l] + 1; a != 0; a = n[a - 1]) {
    for (c.push(t[a - 1]); s >= a; s--)
      i.push(t[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(t[s]);
  c.reverse(), i.sort((a, o) => a.claim_order - o.claim_order);
  for (let a = 0, o = 0; a < i.length; a++) {
    for (; o < c.length && i[a].claim_order >= c[o].claim_order; )
      o++;
    const u = o < c.length ? c[o] : null;
    e.insertBefore(i[a], u);
  }
}
function h(e, t) {
  if (J) {
    for (Me(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0; )
      e.actual_end_child = e.actual_end_child.nextSibling;
    t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling;
  } else
    (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function C(e, t, r) {
  J && !r ? h(e, t) : (t.parentNode !== e || t.nextSibling != r) && e.insertBefore(t, r || null);
}
function _(e) {
  e.parentNode.removeChild(e);
}
function Ee(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function b(e) {
  return document.createElement(e);
}
function j(e) {
  return document.createTextNode(e);
}
function D() {
  return j(" ");
}
function Q(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function d(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function I(e) {
  return Array.from(e.childNodes);
}
function Te(e) {
  e.claim_info === void 0 && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function fe(e, t, r, n, l = !1) {
  Te(e);
  const c = (() => {
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
  return c.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, c;
}
function Ie(e, t, r, n) {
  return fe(e, (l) => l.nodeName === t, (l) => {
    const c = [];
    for (let i = 0; i < l.attributes.length; i++) {
      const s = l.attributes[i];
      r[s.name] || c.push(s.name);
    }
    c.forEach((i) => l.removeAttribute(i));
  }, () => n(t));
}
function M(e, t, r) {
  return Ie(e, t, r, b);
}
function L(e, t) {
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
    () => j(t),
    !0
  );
}
function S(e) {
  return L(e, " ");
}
function B(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
let W;
function x(e) {
  W = e;
}
const O = [], ee = [], P = [], te = [], Ae = Promise.resolve();
let G = !1;
function we() {
  G || (G = !0, Ae.then(de));
}
function H(e) {
  P.push(e);
}
const Z = /* @__PURE__ */ new Set();
let R = 0;
function de() {
  const e = W;
  do {
    for (; R < O.length; ) {
      const t = O[R];
      R++, x(t), De(t.$$);
    }
    for (x(null), O.length = 0, R = 0; ee.length; )
      ee.pop()();
    for (let t = 0; t < P.length; t += 1) {
      const r = P[t];
      Z.has(r) || (Z.add(r), r());
    }
    P.length = 0;
  } while (O.length);
  for (; te.length; )
    te.pop()();
  G = !1, Z.clear(), x(e);
}
function De(e) {
  if (e.fragment !== null) {
    e.update(), F(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(H);
  }
}
const Se = /* @__PURE__ */ new Set();
function je(e, t) {
  e && e.i && (Se.delete(e), e.i(t));
}
function ke(e, t, r, n) {
  const { fragment: l, on_mount: c, on_destroy: i, after_update: s } = e.$$;
  l && l.m(t, r), n || H(() => {
    const a = c.map(ue).filter(me);
    i ? i.push(...a) : F(a), e.$$.on_mount = [];
  }), s.forEach(H);
}
function Le(e, t) {
  const r = e.$$;
  r.fragment !== null && (F(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ce(e, t) {
  e.$$.dirty[0] === -1 && (O.push(e), we(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Oe(e, t, r, n, l, c, i, s = [-1]) {
  const a = W;
  x(e);
  const o = e.$$ = {
    fragment: null,
    ctx: null,
    props: c,
    update: $,
    not_equal: l,
    bound: K(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    callbacks: K(),
    dirty: s,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  i && i(o.root);
  let u = !1;
  if (o.ctx = r ? r(e, t.props || {}, (p, m, ...y) => {
    const g = y.length ? y[0] : m;
    return o.ctx && l(o.ctx[p], o.ctx[p] = g) && (!o.skip_bound && o.bound[p] && o.bound[p](g), u && Ce(e, p)), m;
  }) : [], o.update(), u = !0, F(o.before_update), o.fragment = n ? n(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      Ne();
      const p = I(t.target);
      o.fragment && o.fragment.l(p), p.forEach(_);
    } else
      o.fragment && o.fragment.c();
    t.intro && je(e.$$.fragment), ke(e, t.target, t.anchor, t.customElement), ve(), de();
  }
  x(a);
}
class xe {
  $destroy() {
    Le(this, 1), this.$destroy = $;
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
const ze = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==", Ye = "A 'merge' property is required", Re = "Property 'merge' must be an array", Pe = "Property 'merge' must contain at least one element", $e = "A 'find' property is required on every element inside 'merge'", Fe = "Every 'find' property inside 'merge' must be of type string", Je = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", Be = "A 'replace' property is required on every element inside 'merge'";
class k extends Error {
  constructor(t) {
    super(t);
  }
}
function V(e, t) {
  return !(e in t);
}
function Ue(e, t) {
  return !(t[e] instanceof Array);
}
function Ze(e, t) {
  return typeof t[e] != "string";
}
function Ge(e, t) {
  return !(typeof t[e] == "string" && t[e].length > 0);
}
function He(e, t) {
  return !(t[e] instanceof Array && t[e].length > 0);
}
function Ve(e) {
  try {
    const t = JSON.parse(e);
    if (V("merge", t))
      throw new k(Ye);
    if (Ue("merge", t))
      throw new k(Re);
    if (He("merge", t))
      throw new k(Pe);
    const r = Qe(t.merge);
    return { ...t, merge: r };
  } catch (t) {
    throw t instanceof Error ? t : new k("There was a problem parsing the template json");
  }
}
function Qe(e) {
  return e.map((r) => {
    if (V("find", r))
      throw new k($e);
    if (V("replace", r))
      throw new k(Be);
    if (Ze("find", r))
      throw new k(Fe);
    if (Ge("find", r))
      throw new k(Je);
    return r;
  }).map(({ find: r, replace: n }) => ({
    find: r,
    replace: typeof n == "string" ? n : JSON.stringify(n)
  }));
}
class We {
  constructor(t = { merge: [] }) {
    U(this, "template");
    U(this, "result");
    this.template = t, this.result = t;
  }
  setTemplateSource(t) {
    try {
      const r = Ve(t);
      return this.template = r, this.result = r, r;
    } catch (r) {
      throw r instanceof Error ? r : new Error("Error parsing JSON");
    }
  }
  updateResultMergeFields(t) {
    const { find: r, replace: n } = t, l = { find: r, replace: n }, c = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === t.find ? l : i
    );
    return this.result = { ...this.result, merge: c }, c;
  }
}
const qe = [
  {
    find: "NAME",
    replace: "world"
  }
], Xe = {
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
}, Ke = {
  format: "mp4",
  resolution: "hd"
}, et = {
  merge: qe,
  timeline: Xe,
  output: Ke
};
function re(e, t, r) {
  const n = e.slice();
  return n[9] = t[r].find, n[10] = t[r].replace, n;
}
function ne(e) {
  let t, r, n;
  return {
    c() {
      t = b("p"), r = b("span"), n = j(e[2]), this.h();
    },
    l(l) {
      t = M(l, "P", { "data-cy": !0, class: !0 });
      var c = I(t);
      r = M(c, "SPAN", { class: !0 });
      var i = I(r);
      n = L(i, e[2]), i.forEach(_), c.forEach(_), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-u6rap9"), d(t, "data-cy", "template-input-error"), d(t, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(l, c) {
      C(l, t, c), h(t, r), h(r, n);
    },
    p(l, c) {
      c & 4 && B(n, l[2]);
    },
    d(l) {
      l && _(t);
    }
  };
}
function le(e) {
  let t, r, n, l, c, i = e[0].merge, s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = ie(re(e, i, a));
  return {
    c() {
      t = b("div"), r = b("h1"), n = j("Modify Merge Values"), l = D(), c = b("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      this.h();
    },
    l(a) {
      t = M(a, "DIV", { "data-cy": !0, class: !0 });
      var o = I(t);
      r = M(o, "H1", { class: !0 });
      var u = I(r);
      n = L(u, "Modify Merge Values"), u.forEach(_), l = S(o), c = M(o, "DIV", { class: !0 });
      var p = I(c);
      for (let m = 0; m < s.length; m += 1)
        s[m].l(p);
      p.forEach(_), o.forEach(_), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 svelte-u6rap9"), d(c, "class", "border p-4 mb-6 svelte-u6rap9"), d(t, "data-cy", "merge-fields-input-section"), d(t, "class", "svelte-u6rap9");
    },
    m(a, o) {
      C(a, t, o), h(t, r), h(r, n), h(t, l), h(t, c);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(c, null);
    },
    p(a, o) {
      if (o & 33) {
        i = a[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const p = re(a, i, u);
          s[u] ? s[u].p(p, o) : (s[u] = ie(p), s[u].c(), s[u].m(c, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(a) {
      a && _(t), Ee(s, a);
    }
  };
}
function ie(e) {
  let t, r, n = "{{ " + e[9] + " }} ", l, c, i, s, a, o, u, p, m;
  function y(...g) {
    return e[7](e[9], ...g);
  }
  return {
    c() {
      t = b("div"), r = b("label"), l = j(n), i = D(), s = b("input"), u = D(), this.h();
    },
    l(g) {
      t = M(g, "DIV", { "data-cy": !0, class: !0 });
      var f = I(t);
      r = M(f, "LABEL", { for: !0, class: !0 });
      var N = I(r);
      l = L(N, n), N.forEach(_), i = S(f), s = M(f, "INPUT", { class: !0, id: !0, type: !0 }), u = S(f), f.forEach(_), this.h();
    },
    h() {
      d(r, "for", c = e[9]), d(r, "class", "block mb-2 monospace svelte-u6rap9"), d(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), d(s, "id", a = e[9]), d(s, "type", "text"), s.value = o = ce(e[10]), d(t, "data-cy", "label-input"), d(t, "class", "svelte-u6rap9");
    },
    m(g, f) {
      C(g, t, f), h(t, r), h(r, l), h(t, i), h(t, s), h(t, u), p || (m = Q(s, "input", y), p = !0);
    },
    p(g, f) {
      e = g, f & 1 && n !== (n = "{{ " + e[9] + " }} ") && B(l, n), f & 1 && c !== (c = e[9]) && d(r, "for", c), f & 1 && a !== (a = e[9]) && d(s, "id", a), f & 1 && o !== (o = ce(e[10])) && s.value !== o && (s.value = o);
    },
    d(g) {
      g && _(t), p = !1, m();
    }
  };
}
function ae(e) {
  let t, r, n;
  return {
    c() {
      t = b("p"), r = b("span"), n = j(e[3]), this.h();
    },
    l(l) {
      t = M(l, "P", { "data-cy": !0, class: !0 });
      var c = I(t);
      r = M(c, "SPAN", { class: !0 });
      var i = I(r);
      n = L(i, e[3]), i.forEach(_), c.forEach(_), this.h();
    },
    h() {
      d(r, "class", "monospace text-orange-900 svelte-u6rap9"), d(t, "data-cy", "merge-fields-input-error"), d(t, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(l, c) {
      C(l, t, c), h(t, r), h(r, n);
    },
    p(l, c) {
      c & 8 && B(n, l[3]);
    },
    d(l) {
      l && _(t);
    }
  };
}
function se(e) {
  let t, r, n, l, c, i, s, a, o, u = JSON.stringify(e[1], null, 2) + "", p, m, y;
  return {
    c() {
      t = b("div"), r = b("h1"), n = j("Result"), l = D(), c = b("abbr"), i = b("img"), a = D(), o = b("p"), p = j(u), this.h();
    },
    l(g) {
      t = M(g, "DIV", { "data-cy": !0, class: !0 });
      var f = I(t);
      r = M(f, "H1", { class: !0 });
      var N = I(r);
      n = L(N, "Result"), N.forEach(_), l = S(f), c = M(f, "ABBR", { title: !0, class: !0 });
      var E = I(c);
      i = M(E, "IMG", { src: !0, alt: !0, class: !0 }), E.forEach(_), a = S(f), o = M(f, "P", { "data-cy": !0, class: !0 });
      var T = I(o);
      p = L(T, u), T.forEach(_), f.forEach(_), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ge(i.src, s = ze) || d(i, "src", s), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), d(c, "title", "Copy to clipboard"), d(c, "class", "svelte-u6rap9"), d(o, "data-cy", "result"), d(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), d(t, "data-cy", "result-section"), d(t, "class", "svelte-u6rap9");
    },
    m(g, f) {
      C(g, t, f), h(t, r), h(r, n), h(t, l), h(t, c), h(c, i), h(t, a), h(t, o), h(o, p), m || (y = Q(i, "click", e[6]), m = !0);
    },
    p(g, f) {
      f & 2 && u !== (u = JSON.stringify(g[1], null, 2) + "") && B(p, u);
    },
    d(g) {
      g && _(t), m = !1, y();
    }
  };
}
function tt(e) {
  var q;
  let t, r, n, l, c, i, s, a, o, u, p, m, y, g, f = e[2] && ne(e), N = ((q = e[0].merge) == null ? void 0 : q.length) && !e[2] && le(e), E = e[3] && ae(e), T = !e[3] && !e[2] && se(e);
  return {
    c() {
      t = b("section"), r = b("form"), n = b("div"), l = b("label"), c = j("Paste template"), i = D(), s = b("textarea"), o = D(), f && f.c(), u = D(), N && N.c(), p = D(), E && E.c(), m = D(), T && T.c(), this.h();
    },
    l(v) {
      t = M(v, "SECTION", { "data-cy": !0, class: !0 });
      var A = I(t);
      r = M(A, "FORM", { class: !0 });
      var w = I(r);
      n = M(w, "DIV", { "data-cy": !0, class: !0 });
      var z = I(n);
      l = M(z, "LABEL", { for: !0, class: !0 });
      var X = I(l);
      c = L(X, "Paste template"), X.forEach(_), i = S(z), s = M(z, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), I(s).forEach(_), z.forEach(_), o = S(w), f && f.l(w), u = S(w), N && N.l(w), p = S(w), E && E.l(w), w.forEach(_), m = S(A), T && T.l(A), A.forEach(_), this.h();
    },
    h() {
      d(l, "for", "json-input"), d(l, "class", "text-teal-400 px-1 svelte-u6rap9"), d(s, "data-cy", "template-input"), d(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), d(s, "id", "json-input"), s.value = a = JSON.stringify(e[0], null, 2), d(n, "data-cy", "template-input-section"), d(n, "class", "mb-6 svelte-u6rap9"), d(r, "class", "svelte-u6rap9"), d(t, "data-cy", "form-container"), d(t, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(v, A) {
      C(v, t, A), h(t, r), h(r, n), h(n, l), h(l, c), h(n, i), h(n, s), h(r, o), f && f.m(r, null), h(r, u), N && N.m(r, null), h(r, p), E && E.m(r, null), h(t, m), T && T.m(t, null), y || (g = Q(s, "input", e[4]), y = !0);
    },
    p(v, [A]) {
      var w;
      A & 1 && a !== (a = JSON.stringify(v[0], null, 2)) && (s.value = a), v[2] ? f ? f.p(v, A) : (f = ne(v), f.c(), f.m(r, u)) : f && (f.d(1), f = null), ((w = v[0].merge) == null ? void 0 : w.length) && !v[2] ? N ? N.p(v, A) : (N = le(v), N.c(), N.m(r, p)) : N && (N.d(1), N = null), v[3] ? E ? E.p(v, A) : (E = ae(v), E.c(), E.m(r, null)) : E && (E.d(1), E = null), !v[3] && !v[2] ? T ? T.p(v, A) : (T = se(v), T.c(), T.m(t, null)) : T && (T.d(1), T = null);
    },
    i: $,
    o: $,
    d(v) {
      v && _(t), f && f.d(), N && N.d(), E && E.d(), T && T.d(), y = !1, g();
    }
  };
}
function ce(e) {
  if (typeof e == "string")
    return e;
  try {
    return JSON.stringify(e);
  } catch {
    return e;
  }
}
function rt(e, t, r) {
  const n = new We(et);
  let l = n.template, c = n.result, i, s;
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
  return [
    l,
    c,
    i,
    s,
    a,
    o,
    u,
    (m, y) => o({ find: m, replace: y.currentTarget.value })
  ];
}
class nt extends xe {
  constructor(t) {
    super(), Oe(this, t, rt, tt, _e, {});
  }
}
const lt = {
  render: (e) => new nt({ target: e })
}, oe = document.querySelector("#shotstack-form-field");
oe && lt.render(oe);
export {
  lt as default
};
