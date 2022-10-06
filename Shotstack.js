var he = Object.defineProperty;
var me = (t, e, n) => e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var j = (t, e, n) => (me(t, typeof e != "symbol" ? e + "" : e, n), n);
function $() {
}
function ae(t) {
  return t();
}
function K() {
  return /* @__PURE__ */ Object.create(null);
}
function F(t) {
  t.forEach(ae);
}
function pe(t) {
  return typeof t == "function";
}
function _e(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let R;
function ge(t, e) {
  return R || (R = document.createElement("a")), R.href = e, t === R.href;
}
function ye(t) {
  return Object.keys(t).length === 0;
}
let J = !1;
function ve() {
  J = !0;
}
function Ne() {
  J = !1;
}
function Ee(t, e, n, r) {
  for (; t < e; ) {
    const c = t + (e - t >> 1);
    n(c) <= r ? t = c + 1 : e = c;
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
    for (let a = 0; a < e.length; a++) {
      const u = e[a];
      u.claim_order !== void 0 && l.push(u);
    }
    e = l;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let c = 0;
  for (let l = 0; l < e.length; l++) {
    const a = e[l].claim_order, u = (c > 0 && e[n[c]].claim_order <= a ? c + 1 : Ee(1, c, (p) => e[n[p]].claim_order, a)) - 1;
    r[l] = n[u] + 1;
    const m = u + 1;
    n[m] = l, c = Math.max(m, c);
  }
  const o = [], i = [];
  let s = e.length - 1;
  for (let l = n[c] + 1; l != 0; l = r[l - 1]) {
    for (o.push(e[l - 1]); s >= l; s--)
      i.push(e[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(e[s]);
  o.reverse(), i.sort((l, a) => l.claim_order - a.claim_order);
  for (let l = 0, a = 0; l < i.length; l++) {
    for (; a < o.length && i[l].claim_order >= o[a].claim_order; )
      a++;
    const u = a < o.length ? o[a] : null;
    t.insertBefore(i[l], u);
  }
}
function _(t, e) {
  if (J) {
    for (be(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function O(t, e, n) {
  J && !n ? _(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function Me(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function N(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createTextNode(t);
}
function w() {
  return S(" ");
}
function Q(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function b(t) {
  return Array.from(t.childNodes);
}
function Te(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ce(t, e, n, r, c = !1) {
  Te(t);
  const o = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const s = t[i];
      if (e(s)) {
        const l = n(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, c || (t.claim_info.last_index = i), s;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const s = t[i];
      if (e(s)) {
        const l = n(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, c ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, s;
      }
    }
    return r();
  })();
  return o.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, o;
}
function Ie(t, e, n, r) {
  return ce(t, (c) => c.nodeName === e, (c) => {
    const o = [];
    for (let i = 0; i < c.attributes.length; i++) {
      const s = c.attributes[i];
      n[s.name] || o.push(s.name);
    }
    o.forEach((i) => c.removeAttribute(i));
  }, () => r(e));
}
function E(t, e, n) {
  return Ie(t, e, n, N);
}
function x(t, e) {
  return ce(
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
    () => S(e),
    !0
  );
}
function D(t) {
  return x(t, " ");
}
function W(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let q;
function L(t) {
  q = t;
}
const k = [], ee = [], U = [], te = [], Ae = Promise.resolve();
let G = !1;
function we() {
  G || (G = !0, Ae.then(oe));
}
function H(t) {
  U.push(t);
}
const Z = /* @__PURE__ */ new Set();
let P = 0;
function oe() {
  const t = q;
  do {
    for (; P < k.length; ) {
      const e = k[P];
      P++, L(e), De(e.$$);
    }
    for (L(null), k.length = 0, P = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < U.length; e += 1) {
      const n = U[e];
      Z.has(n) || (Z.add(n), n());
    }
    U.length = 0;
  } while (k.length);
  for (; te.length; )
    te.pop()();
  G = !1, Z.clear(), L(t);
}
function De(t) {
  if (t.fragment !== null) {
    t.update(), F(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(H);
  }
}
const Se = /* @__PURE__ */ new Set();
function xe(t, e) {
  t && t.i && (Se.delete(t), t.i(e));
}
function je(t, e, n, r) {
  const { fragment: c, on_mount: o, on_destroy: i, after_update: s } = t.$$;
  c && c.m(e, n), r || H(() => {
    const l = o.map(ae).filter(pe);
    i ? i.push(...l) : F(l), t.$$.on_mount = [];
  }), s.forEach(H);
}
function Ce(t, e) {
  const n = t.$$;
  n.fragment !== null && (F(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ke(t, e) {
  t.$$.dirty[0] === -1 && (k.push(t), we(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Le(t, e, n, r, c, o, i, s = [-1]) {
  const l = q;
  L(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: $,
    not_equal: c,
    bound: K(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: K(),
    dirty: s,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  i && i(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (m, p, ...M) => {
    const d = M.length ? M[0] : p;
    return a.ctx && c(a.ctx[m], a.ctx[m] = d) && (!a.skip_bound && a.bound[m] && a.bound[m](d), u && ke(t, m)), p;
  }) : [], a.update(), u = !0, F(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      ve();
      const m = b(e.target);
      a.fragment && a.fragment.l(m), m.forEach(y);
    } else
      a.fragment && a.fragment.c();
    e.intro && xe(t.$$.fragment), je(t, e.target, e.anchor, e.customElement), Ne(), oe();
  }
  L(l);
}
class Oe {
  $destroy() {
    Ce(this, 1), this.$destroy = $;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !ye(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ze = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==", Ye = "A 'merge' property is required", Re = "Property 'merge' must be an array", Pe = "Property 'merge' must contain at least one element", Ue = "A 'find' property is required on every element inside 'merge'", $e = "Every 'find' property inside 'merge' must be of type string", Be = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", Fe = "A 'replace' property is required on every element inside 'merge'", Je = "Unexpected error while parsing template JSON", Ze = "Every element inside the 'merge' should be an object";
class I extends Error {
  constructor(e) {
    super(e);
  }
}
function Ge(t) {
  return typeof t == "object";
}
function z(t, e) {
  return t in e;
}
function V(t, e) {
  return !z(t, e);
}
function He(t, e) {
  return z(t, e) && !(e[t] instanceof Array);
}
function Ve(t, e) {
  return z(t, e) && typeof e[t] != "string";
}
function Qe(t, e) {
  const n = z(t, e) && e[t];
  return !(typeof n == "string" && n.length > 0);
}
function We(t, e) {
  const n = z(t, e) && e[t];
  return !(n instanceof Array && n.length > 0);
}
function qe(t) {
  try {
    const e = JSON.parse(t);
    if (V("merge", e))
      throw new I(Ye);
    if (He("merge", e))
      throw new I(Re);
    if (We("merge", e))
      throw new I(Pe);
    const { merge: n } = e, r = Xe(n);
    return { ...e, merge: r };
  } catch (e) {
    throw ue(e);
  }
}
function Xe(t) {
  return t.map((n) => {
    if (!Ge(n))
      throw new I(Ze);
    if (V("find", n))
      throw new I(Ue);
    if (V("replace", n))
      throw new I(Fe);
    if (Ve("find", n))
      throw new I($e);
    if (Qe("find", n))
      throw new I(Be);
    return n;
  }).map(({ find: n, replace: r }) => ({
    find: n,
    replace: fe(r)
  }));
}
function Ke(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function ue(t) {
  return t instanceof Error ? t : Ke(t) ? new I(t.message) : new I(Je);
}
function fe(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class de {
  constructor(e) {
    j(this, "template");
    j(this, "_result");
    j(this, "_error");
    j(this, "handlers");
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = { change: [], submit: [], error: [] }, this.setTemplateSource(e);
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
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const n = qe(fe(e));
      this.template = n, this.result = n, this.error = null;
    } catch (n) {
      const r = ue(n);
      this.error = r;
    }
  }
  updateResultMergeFields(e) {
    const { find: n, replace: r } = e, c = { find: n, replace: r }, o = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? c : i
    );
    return this.result = { ...this.result, merge: o }, o;
  }
}
const et = [
  {
    find: "NAME",
    replace: "world"
  }
], tt = {
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
}, nt = {
  format: "mp4",
  resolution: "hd"
}, rt = {
  merge: et,
  timeline: tt,
  output: nt
};
function ne(t, e, n) {
  const r = t.slice();
  return r[9] = e[n].find, r[10] = e[n].replace, r;
}
function re(t) {
  let e, n, r = t[2].message + "", c;
  return {
    c() {
      e = N("p"), n = N("span"), c = S(r), this.h();
    },
    l(o) {
      e = E(o, "P", { "data-cy": !0, class: !0 });
      var i = b(e);
      n = E(i, "SPAN", { class: !0 });
      var s = b(n);
      c = x(s, r), s.forEach(y), i.forEach(y), this.h();
    },
    h() {
      h(n, "class", "monospace text-orange-900 svelte-u6rap9"), h(e, "data-cy", "template-input-error"), h(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(o, i) {
      O(o, e, i), _(e, n), _(n, c);
    },
    p(o, i) {
      i & 4 && r !== (r = o[2].message + "") && W(c, r);
    },
    d(o) {
      o && y(e);
    }
  };
}
function le(t) {
  let e, n, r, c, o, i = t[0].merge, s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = ie(ne(t, i, l));
  return {
    c() {
      e = N("div"), n = N("h1"), r = S("Modify Merge Values"), c = w(), o = N("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      this.h();
    },
    l(l) {
      e = E(l, "DIV", { "data-cy": !0, class: !0 });
      var a = b(e);
      n = E(a, "H1", { class: !0 });
      var u = b(n);
      r = x(u, "Modify Merge Values"), u.forEach(y), c = D(a), o = E(a, "DIV", { class: !0 });
      var m = b(o);
      for (let p = 0; p < s.length; p += 1)
        s[p].l(m);
      m.forEach(y), a.forEach(y), this.h();
    },
    h() {
      h(n, "class", "text-teal-400 px-1 svelte-u6rap9"), h(o, "class", "border p-4 mb-6 svelte-u6rap9"), h(e, "data-cy", "merge-fields-input-section"), h(e, "class", "svelte-u6rap9");
    },
    m(l, a) {
      O(l, e, a), _(e, n), _(n, r), _(e, c), _(e, o);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(o, null);
    },
    p(l, a) {
      if (a & 17) {
        i = l[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const m = ne(l, i, u);
          s[u] ? s[u].p(m, a) : (s[u] = ie(m), s[u].c(), s[u].m(o, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(l) {
      l && y(e), Me(s, l);
    }
  };
}
function ie(t) {
  let e, n, r = "{{ " + t[9] + " }} ", c, o, i, s, l, a, u, m, p;
  function M(...d) {
    return t[8](t[9], ...d);
  }
  return {
    c() {
      e = N("div"), n = N("label"), c = S(r), i = w(), s = N("input"), u = w(), this.h();
    },
    l(d) {
      e = E(d, "DIV", { "data-cy": !0, class: !0 });
      var f = b(e);
      n = E(f, "LABEL", { for: !0, class: !0 });
      var g = b(n);
      c = x(g, r), g.forEach(y), i = D(f), s = E(f, "INPUT", { class: !0, id: !0, type: !0 }), u = D(f), f.forEach(y), this.h();
    },
    h() {
      h(n, "for", o = t[9]), h(n, "class", "block mb-2 monospace svelte-u6rap9"), h(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), h(s, "id", l = t[9]), h(s, "type", "text"), s.value = a = t[10], h(e, "data-cy", "label-input"), h(e, "class", "svelte-u6rap9");
    },
    m(d, f) {
      O(d, e, f), _(e, n), _(n, c), _(e, i), _(e, s), _(e, u), m || (p = Q(s, "input", M), m = !0);
    },
    p(d, f) {
      t = d, f & 1 && r !== (r = "{{ " + t[9] + " }} ") && W(c, r), f & 1 && o !== (o = t[9]) && h(n, "for", o), f & 1 && l !== (l = t[9]) && h(s, "id", l), f & 1 && a !== (a = t[10]) && s.value !== a && (s.value = a);
    },
    d(d) {
      d && y(e), m = !1, p();
    }
  };
}
function se(t) {
  let e, n, r, c, o, i, s, l, a, u = B(t[1]) + "", m, p, M;
  return {
    c() {
      e = N("div"), n = N("h1"), r = S("Result"), c = w(), o = N("abbr"), i = N("img"), l = w(), a = N("p"), m = S(u), this.h();
    },
    l(d) {
      e = E(d, "DIV", { "data-cy": !0, class: !0 });
      var f = b(e);
      n = E(f, "H1", { class: !0 });
      var g = b(n);
      r = x(g, "Result"), g.forEach(y), c = D(f), o = E(f, "ABBR", { title: !0, class: !0 });
      var C = b(o);
      i = E(C, "IMG", { src: !0, alt: !0, class: !0 }), C.forEach(y), l = D(f), a = E(f, "P", { "data-cy": !0, class: !0 });
      var v = b(a);
      m = x(v, u), v.forEach(y), f.forEach(y), this.h();
    },
    h() {
      h(n, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ge(i.src, s = ze) || h(i, "src", s), h(i, "alt", "copy-button"), h(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), h(o, "title", "Copy to clipboard"), h(o, "class", "svelte-u6rap9"), h(a, "data-cy", "result"), h(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), h(e, "data-cy", "result-section"), h(e, "class", "svelte-u6rap9");
    },
    m(d, f) {
      O(d, e, f), _(e, n), _(n, r), _(e, c), _(e, o), _(o, i), _(e, l), _(e, a), _(a, m), p || (M = Q(i, "click", t[5]), p = !0);
    },
    p(d, f) {
      f & 2 && u !== (u = B(d[1]) + "") && W(m, u);
    },
    d(d) {
      d && y(e), p = !1, M();
    }
  };
}
function lt(t) {
  var C;
  let e, n, r, c, o, i, s, l, a, u, m, p, M, d = t[2] && re(t), f = ((C = t[0].merge) == null ? void 0 : C.length) && !t[2] && le(t), g = !t[2] && se(t);
  return {
    c() {
      e = N("section"), n = N("form"), r = N("div"), c = N("label"), o = S("Paste template"), i = w(), s = N("textarea"), a = w(), d && d.c(), u = w(), f && f.c(), m = w(), g && g.c(), this.h();
    },
    l(v) {
      e = E(v, "SECTION", { "data-cy": !0, class: !0 });
      var T = b(e);
      n = E(T, "FORM", { class: !0 });
      var A = b(n);
      r = E(A, "DIV", { "data-cy": !0, class: !0 });
      var Y = b(r);
      c = E(Y, "LABEL", { for: !0, class: !0 });
      var X = b(c);
      o = x(X, "Paste template"), X.forEach(y), i = D(Y), s = E(Y, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), b(s).forEach(y), Y.forEach(y), a = D(A), d && d.l(A), u = D(A), f && f.l(A), A.forEach(y), m = D(T), g && g.l(T), T.forEach(y), this.h();
    },
    h() {
      h(c, "for", "json-input"), h(c, "class", "text-teal-400 px-1 svelte-u6rap9"), h(s, "data-cy", "template-input"), h(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), h(s, "id", "json-input"), s.value = l = B(t[0]), h(r, "data-cy", "template-input-section"), h(r, "class", "mb-6 svelte-u6rap9"), h(n, "class", "svelte-u6rap9"), h(e, "data-cy", "form-container"), h(e, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(v, T) {
      O(v, e, T), _(e, n), _(n, r), _(r, c), _(c, o), _(r, i), _(r, s), _(n, a), d && d.m(n, null), _(n, u), f && f.m(n, null), _(e, m), g && g.m(e, null), p || (M = Q(s, "input", t[7]), p = !0);
    },
    p(v, [T]) {
      var A;
      T & 1 && l !== (l = B(v[0])) && (s.value = l), v[2] ? d ? d.p(v, T) : (d = re(v), d.c(), d.m(n, u)) : d && (d.d(1), d = null), ((A = v[0].merge) == null ? void 0 : A.length) && !v[2] ? f ? f.p(v, T) : (f = le(v), f.c(), f.m(n, null)) : f && (f.d(1), f = null), v[2] ? g && (g.d(1), g = null) : g ? g.p(v, T) : (g = se(v), g.c(), g.m(e, null));
    },
    i: $,
    o: $,
    d(v) {
      v && y(e), d && d.d(), f && f.d(), g && g.d(), p = !1, M();
    }
  };
}
function B(t) {
  return JSON.stringify(t, null, 2);
}
function it(t, e, n) {
  let { editTemplateService: r = new de(rt) } = e, c = r.template, o = r.result, i = null;
  function s(p) {
    r.setTemplateSource(p), n(0, c = r.template), n(1, o = r.result), n(2, i = r.error);
  }
  function l(p) {
    r.updateResultMergeFields(p), n(1, o = r.result);
  }
  function a() {
    navigator.clipboard.writeText(JSON.stringify(o)), alert("JSON copied to clipboard!");
  }
  const u = (p) => s(p.currentTarget.value), m = (p, M) => l({ find: p, replace: M.currentTarget.value });
  return t.$$set = (p) => {
    "editTemplateService" in p && n(6, r = p.editTemplateService);
  }, [
    c,
    o,
    i,
    s,
    l,
    a,
    r,
    u,
    m
  ];
}
class st extends Oe {
  constructor(e) {
    super(), Le(this, e, it, lt, _e, { editTemplateService: 6 });
  }
}
class ct {
  constructor(e, n = document.querySelector("#shotstack-form-field")) {
    j(this, "templateService");
    this.containerElement = n, this.templateService = new de(e), this.initialize();
  }
  on(e, n) {
    this.templateService.on(e, n);
  }
  submit() {
    this.templateService.submit();
  }
  initialize() {
    !this.containerElement || this.containerElement && this.render(this.containerElement);
  }
  render(e) {
    new st({
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
  ct as default
};
