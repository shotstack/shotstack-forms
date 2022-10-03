var pe = Object.defineProperty;
var me = (t, e, r) => e in t ? pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var C = (t, e, r) => (me(t, typeof e != "symbol" ? e + "" : e, r), r);
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
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const u = e[o];
      u.claim_order !== void 0 && s.push(u);
    }
    e = s;
  }
  const r = new Int32Array(e.length + 1), n = new Int32Array(e.length);
  r[0] = -1;
  let l = 0;
  for (let s = 0; s < e.length; s++) {
    const o = e[s].claim_order, u = (l > 0 && e[r[l]].claim_order <= o ? l + 1 : Me(1, l, (m) => e[r[m]].claim_order, o)) - 1;
    n[s] = r[u] + 1;
    const h = u + 1;
    r[h] = s, l = Math.max(h, l);
  }
  const c = [], i = [];
  let a = e.length - 1;
  for (let s = r[l] + 1; s != 0; s = n[s - 1]) {
    for (c.push(e[s - 1]); a >= s; a--)
      i.push(e[a]);
    a--;
  }
  for (; a >= 0; a--)
    i.push(e[a]);
  c.reverse(), i.sort((s, o) => s.claim_order - o.claim_order);
  for (let s = 0, o = 0; s < i.length; s++) {
    for (; o < c.length && i[s].claim_order >= c[o].claim_order; )
      o++;
    const u = o < c.length ? c[o] : null;
    t.insertBefore(i[s], u);
  }
}
function p(t, e) {
  if (U) {
    for (Ee(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function O(t, e, r) {
  U && !r ? p(t, e) : (e.parentNode !== t || e.nextSibling != r) && t.insertBefore(e, r || null);
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
      const a = t[i];
      if (e(a)) {
        const s = r(a);
        return s === void 0 ? t.splice(i, 1) : t[i] = s, l || (t.claim_info.last_index = i), a;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const a = t[i];
      if (e(a)) {
        const s = r(a);
        return s === void 0 ? t.splice(i, 1) : t[i] = s, l ? s === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, a;
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
      const a = l.attributes[i];
      r[a.name] || c.push(a.name);
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
function z(t) {
  $ = t;
}
const x = [], ee = [], J = [], te = [], Se = Promise.resolve();
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
    for (; P < x.length; ) {
      const e = x[P];
      P++, z(e), De(e.$$);
    }
    for (z(null), x.length = 0, P = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < J.length; e += 1) {
      const r = J[e];
      G.has(r) || (G.add(r), r());
    }
    J.length = 0;
  } while (x.length);
  for (; te.length; )
    te.pop()();
  H = !1, G.clear(), z(t);
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
  const { fragment: l, on_mount: c, on_destroy: i, after_update: a } = t.$$;
  l && l.m(e, r), n || V(() => {
    const s = c.map(ue).filter(_e);
    i ? i.push(...s) : B(s), t.$$.on_mount = [];
  }), a.forEach(V);
}
function Oe(t, e) {
  const r = t.$$;
  r.fragment !== null && (B(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ce(t, e) {
  t.$$.dirty[0] === -1 && (x.push(t), we(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(t, e, r, n, l, c, i, a = [-1]) {
  const s = $;
  z(t);
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
    context: new Map(e.context || (s ? s.$$.context : [])),
    callbacks: K(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  i && i(o.root);
  let u = !1;
  if (o.ctx = r ? r(t, e.props || {}, (h, m, ...y) => {
    const g = y.length ? y[0] : m;
    return o.ctx && l(o.ctx[h], o.ctx[h] = g) && (!o.skip_bound && o.bound[h] && o.bound[h](g), u && Ce(t, h)), m;
  }) : [], o.update(), u = !0, B(o.before_update), o.fragment = n ? n(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      ve();
      const h = I(e.target);
      o.fragment && o.fragment.l(h), h.forEach(_);
    } else
      o.fragment && o.fragment.c();
    e.intro && ke(t.$$.fragment), Le(t, e.target, e.anchor, e.customElement), be(), de();
  }
  z(s);
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
class he {
  constructor(e) {
    C(this, "template");
    C(this, "result");
    C(this, "handlers");
    const r = this.parseInitialTemplate(e);
    this.template = r, this.result = r, this.handlers = { change: [], submit: [] };
  }
  on(e, r) {
    this.handlers[e].push(r);
  }
  submit() {
    this.handlers.submit.forEach((e) => e(this.result));
  }
  change() {
    this.handlers.change.forEach((e) => e(this.result));
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
      return this.template = r, this.result = r, this.change(), r;
    } catch (r) {
      throw r instanceof Error ? r : new Error("Error parsing JSON");
    }
  }
  updateResultMergeFields(e) {
    const { find: r, replace: n } = e, l = { find: r, replace: n }, c = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? l : i
    );
    return this.result = { ...this.result, merge: c }, this.change(), c;
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
      O(l, e, c), p(e, r), p(r, n);
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
  let e, r, n, l, c, i = t[0].merge, a = [];
  for (let s = 0; s < i.length; s += 1)
    a[s] = se(ne(t, i, s));
  return {
    c() {
      e = b("div"), r = b("h1"), n = j("Modify Merge Values"), l = w(), c = b("div");
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      this.h();
    },
    l(s) {
      e = M(s, "DIV", { "data-cy": !0, class: !0 });
      var o = I(e);
      r = M(o, "H1", { class: !0 });
      var u = I(r);
      n = L(u, "Modify Merge Values"), u.forEach(_), l = D(o), c = M(o, "DIV", { class: !0 });
      var h = I(c);
      for (let m = 0; m < a.length; m += 1)
        a[m].l(h);
      h.forEach(_), o.forEach(_), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 svelte-u6rap9"), d(c, "class", "border p-4 mb-6 svelte-u6rap9"), d(e, "data-cy", "merge-fields-input-section"), d(e, "class", "svelte-u6rap9");
    },
    m(s, o) {
      O(s, e, o), p(e, r), p(r, n), p(e, l), p(e, c);
      for (let u = 0; u < a.length; u += 1)
        a[u].m(c, null);
    },
    p(s, o) {
      if (o & 33) {
        i = s[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const h = ne(s, i, u);
          a[u] ? a[u].p(h, o) : (a[u] = se(h), a[u].c(), a[u].m(c, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = i.length;
      }
    },
    d(s) {
      s && _(e), Te(a, s);
    }
  };
}
function se(t) {
  let e, r, n = "{{ " + t[9] + " }} ", l, c, i, a, s, o, u, h, m;
  function y(...g) {
    return t[8](t[9], ...g);
  }
  return {
    c() {
      e = b("div"), r = b("label"), l = j(n), i = w(), a = b("input"), u = w(), this.h();
    },
    l(g) {
      e = M(g, "DIV", { "data-cy": !0, class: !0 });
      var f = I(e);
      r = M(f, "LABEL", { for: !0, class: !0 });
      var N = I(r);
      l = L(N, n), N.forEach(_), i = D(f), a = M(f, "INPUT", { class: !0, id: !0, type: !0 }), u = D(f), f.forEach(_), this.h();
    },
    h() {
      d(r, "for", c = t[9]), d(r, "class", "block mb-2 monospace svelte-u6rap9"), d(a, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), d(a, "id", s = t[9]), d(a, "type", "text"), a.value = o = oe(t[10]), d(e, "data-cy", "label-input"), d(e, "class", "svelte-u6rap9");
    },
    m(g, f) {
      O(g, e, f), p(e, r), p(r, l), p(e, i), p(e, a), p(e, u), h || (m = W(a, "input", y), h = !0);
    },
    p(g, f) {
      t = g, f & 1 && n !== (n = "{{ " + t[9] + " }} ") && Z(l, n), f & 1 && c !== (c = t[9]) && d(r, "for", c), f & 1 && s !== (s = t[9]) && d(a, "id", s), f & 1 && o !== (o = oe(t[10])) && a.value !== o && (a.value = o);
    },
    d(g) {
      g && _(e), h = !1, m();
    }
  };
}
function ae(t) {
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
      O(l, e, c), p(e, r), p(r, n);
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
  let e, r, n, l, c, i, a, s, o, u = JSON.stringify(t[1], null, 2) + "", h, m, y;
  return {
    c() {
      e = b("div"), r = b("h1"), n = j("Result"), l = w(), c = b("abbr"), i = b("img"), s = w(), o = b("p"), h = j(u), this.h();
    },
    l(g) {
      e = M(g, "DIV", { "data-cy": !0, class: !0 });
      var f = I(e);
      r = M(f, "H1", { class: !0 });
      var N = I(r);
      n = L(N, "Result"), N.forEach(_), l = D(f), c = M(f, "ABBR", { title: !0, class: !0 });
      var E = I(c);
      i = M(E, "IMG", { src: !0, alt: !0, class: !0 }), E.forEach(_), s = D(f), o = M(f, "P", { "data-cy": !0, class: !0 });
      var T = I(o);
      h = L(T, u), T.forEach(_), f.forEach(_), this.h();
    },
    h() {
      d(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ye(i.src, a = Ye) || d(i, "src", a), d(i, "alt", "copy-button"), d(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), d(c, "title", "Copy to clipboard"), d(c, "class", "svelte-u6rap9"), d(o, "data-cy", "result"), d(o, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), d(e, "data-cy", "result-section"), d(e, "class", "svelte-u6rap9");
    },
    m(g, f) {
      O(g, e, f), p(e, r), p(r, n), p(e, l), p(e, c), p(c, i), p(e, s), p(e, o), p(o, h), m || (y = W(i, "click", t[6]), m = !0);
    },
    p(g, f) {
      f & 2 && u !== (u = JSON.stringify(g[1], null, 2) + "") && Z(h, u);
    },
    d(g) {
      g && _(e), m = !1, y();
    }
  };
}
function et(t) {
  var q;
  let e, r, n, l, c, i, a, s, o, u, h, m, y, g, f = t[2] && le(t), N = ((q = t[0].merge) == null ? void 0 : q.length) && !t[2] && ie(t), E = t[3] && ae(t), T = !t[3] && !t[2] && ce(t);
  return {
    c() {
      e = b("section"), r = b("form"), n = b("div"), l = b("label"), c = j("Paste template"), i = w(), a = b("textarea"), o = w(), f && f.c(), u = w(), N && N.c(), h = w(), E && E.c(), m = w(), T && T.c(), this.h();
    },
    l(v) {
      e = M(v, "SECTION", { "data-cy": !0, class: !0 });
      var A = I(e);
      r = M(A, "FORM", { class: !0 });
      var S = I(r);
      n = M(S, "DIV", { "data-cy": !0, class: !0 });
      var Y = I(n);
      l = M(Y, "LABEL", { for: !0, class: !0 });
      var X = I(l);
      c = L(X, "Paste template"), X.forEach(_), i = D(Y), a = M(Y, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), I(a).forEach(_), Y.forEach(_), o = D(S), f && f.l(S), u = D(S), N && N.l(S), h = D(S), E && E.l(S), S.forEach(_), m = D(A), T && T.l(A), A.forEach(_), this.h();
    },
    h() {
      d(l, "for", "json-input"), d(l, "class", "text-teal-400 px-1 svelte-u6rap9"), d(a, "data-cy", "template-input"), d(a, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), d(a, "id", "json-input"), a.value = s = JSON.stringify(t[0], null, 2), d(n, "data-cy", "template-input-section"), d(n, "class", "mb-6 svelte-u6rap9"), d(r, "class", "svelte-u6rap9"), d(e, "data-cy", "form-container"), d(e, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(v, A) {
      O(v, e, A), p(e, r), p(r, n), p(n, l), p(l, c), p(n, i), p(n, a), p(r, o), f && f.m(r, null), p(r, u), N && N.m(r, null), p(r, h), E && E.m(r, null), p(e, m), T && T.m(e, null), y || (g = W(a, "input", t[4]), y = !0);
    },
    p(v, [A]) {
      var S;
      A & 1 && s !== (s = JSON.stringify(v[0], null, 2)) && (a.value = s), v[2] ? f ? f.p(v, A) : (f = le(v), f.c(), f.m(r, u)) : f && (f.d(1), f = null), ((S = v[0].merge) == null ? void 0 : S.length) && !v[2] ? N ? N.p(v, A) : (N = ie(v), N.c(), N.m(r, h)) : N && (N.d(1), N = null), v[3] ? E ? E.p(v, A) : (E = ae(v), E.c(), E.m(r, null)) : E && (E.d(1), E = null), !v[3] && !v[2] ? T ? T.p(v, A) : (T = ce(v), T.c(), T.m(e, null)) : T && (T.d(1), T = null);
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
  let { editTemplateService: n = new he(Ke) } = e, l = n.template, c = n.result, i, a;
  function s(m) {
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
      r(1, c = { ...c, merge: y }), r(3, a = "");
    } catch (y) {
      r(3, a = y.message);
    }
  }
  function u() {
    navigator.clipboard.writeText(JSON.stringify(c)), alert("JSON copied to clipboard!");
  }
  const h = (m, y) => o({ find: m, replace: y.currentTarget.value });
  return t.$$set = (m) => {
    "editTemplateService" in m && r(7, n = m.editTemplateService);
  }, [
    l,
    c,
    i,
    a,
    s,
    o,
    u,
    n,
    h
  ];
}
class rt extends ze {
  constructor(e) {
    super(), xe(this, e, tt, et, ge, { editTemplateService: 7 });
  }
}
class lt {
  constructor(e, r = document.querySelector("#shotstack-form-field")) {
    C(this, "templateService");
    this.container = r, this.templateService = new he(e), this.initialize();
  }
  on(e, r) {
    this.templateService.on(e, r);
  }
  submit() {
    this.templateService.submit();
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
