var he = Object.defineProperty;
var me = (t, e, r) => e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var j = (t, e, r) => (me(t, typeof e != "symbol" ? e + "" : e, r), r);
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
function Ee(t, e, r, n) {
  for (; t < e; ) {
    const o = t + (e - t >> 1);
    r(o) <= n ? t = o + 1 : e = o;
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
  const r = new Int32Array(e.length + 1), n = new Int32Array(e.length);
  r[0] = -1;
  let o = 0;
  for (let l = 0; l < e.length; l++) {
    const a = e[l].claim_order, u = (o > 0 && e[r[o]].claim_order <= a ? o + 1 : Ee(1, o, (p) => e[r[p]].claim_order, a)) - 1;
    n[l] = r[u] + 1;
    const m = u + 1;
    r[m] = l, o = Math.max(m, o);
  }
  const c = [], i = [];
  let s = e.length - 1;
  for (let l = r[o] + 1; l != 0; l = n[l - 1]) {
    for (c.push(e[l - 1]); s >= l; s--)
      i.push(e[s]);
    s--;
  }
  for (; s >= 0; s--)
    i.push(e[s]);
  c.reverse(), i.sort((l, a) => l.claim_order - a.claim_order);
  for (let l = 0, a = 0; l < i.length; l++) {
    for (; a < c.length && i[l].claim_order >= c[a].claim_order; )
      a++;
    const u = a < c.length ? c[a] : null;
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
function O(t, e, r) {
  J && !r ? _(t, e) : (e.parentNode !== t || e.nextSibling != r) && t.insertBefore(e, r || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function Me(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
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
function Q(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function h(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function b(t) {
  return Array.from(t.childNodes);
}
function Te(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function oe(t, e, r, n, o = !1) {
  Te(t);
  const c = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const s = t[i];
      if (e(s)) {
        const l = r(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, o || (t.claim_info.last_index = i), s;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const s = t[i];
      if (e(s)) {
        const l = r(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, o ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, s;
      }
    }
    return n();
  })();
  return c.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, c;
}
function Ie(t, e, r, n) {
  return oe(t, (o) => o.nodeName === e, (o) => {
    const c = [];
    for (let i = 0; i < o.attributes.length; i++) {
      const s = o.attributes[i];
      r[s.name] || c.push(s.name);
    }
    c.forEach((i) => o.removeAttribute(i));
  }, () => n(e));
}
function E(t, e, r) {
  return Ie(t, e, r, N);
}
function x(t, e) {
  return oe(
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
  G || (G = !0, Ae.then(ce));
}
function H(t) {
  U.push(t);
}
const Z = /* @__PURE__ */ new Set();
let P = 0;
function ce() {
  const t = q;
  do {
    for (; P < k.length; ) {
      const e = k[P];
      P++, L(e), De(e.$$);
    }
    for (L(null), k.length = 0, P = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < U.length; e += 1) {
      const r = U[e];
      Z.has(r) || (Z.add(r), r());
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
function je(t, e, r, n) {
  const { fragment: o, on_mount: c, on_destroy: i, after_update: s } = t.$$;
  o && o.m(e, r), n || H(() => {
    const l = c.map(ae).filter(pe);
    i ? i.push(...l) : F(l), t.$$.on_mount = [];
  }), s.forEach(H);
}
function Ce(t, e) {
  const r = t.$$;
  r.fragment !== null && (F(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function ke(t, e) {
  t.$$.dirty[0] === -1 && (k.push(t), we(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Le(t, e, r, n, o, c, i, s = [-1]) {
  const l = q;
  L(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: c,
    update: $,
    not_equal: o,
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
  if (a.ctx = r ? r(t, e.props || {}, (m, p, ...M) => {
    const d = M.length ? M[0] : p;
    return a.ctx && o(a.ctx[m], a.ctx[m] = d) && (!a.skip_bound && a.bound[m] && a.bound[m](d), u && ke(t, m)), p;
  }) : [], a.update(), u = !0, F(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      ve();
      const m = b(e.target);
      a.fragment && a.fragment.l(m), m.forEach(y);
    } else
      a.fragment && a.fragment.c();
    e.intro && xe(t.$$.fragment), je(t, e.target, e.anchor, e.customElement), Ne(), ce();
  }
  L(l);
}
class Oe {
  $destroy() {
    Ce(this, 1), this.$destroy = $;
  }
  $on(e, r) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
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
  const r = z(t, e) && e[t];
  return !(typeof r == "string" && r.length > 0);
}
function We(t, e) {
  const r = z(t, e) && e[t];
  return !(r instanceof Array && r.length > 0);
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
    const { merge: r } = e, n = Xe(r);
    return { ...e, merge: n };
  } catch (e) {
    throw ue(e);
  }
}
function Xe(t) {
  return t.map((r) => {
    if (!Ge(r))
      throw new I(Ze);
    if (V("find", r))
      throw new I(Ue);
    if (V("replace", r))
      throw new I(Fe);
    if (Ve("find", r))
      throw new I($e);
    if (Qe("find", r))
      throw new I(Be);
    return r;
  }).map(({ find: r, replace: n }) => ({
    find: r,
    replace: fe(n)
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
    this.handlers[e].filter((n) => n !== r);
  }
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const r = qe(fe(e));
      this.template = r, this.result = r, this.error = null;
    } catch (r) {
      const n = ue(r);
      this.error = n;
    }
  }
  updateResultMergeFields(e) {
    const { find: r, replace: n } = e, o = { find: r, replace: n }, c = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? o : i
    );
    return this.result = { ...this.result, merge: c }, c;
  }
  logger(e) {
    console.error(e);
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
}, rt = {
  format: "mp4",
  resolution: "hd"
}, nt = {
  merge: et,
  timeline: tt,
  output: rt
};
function re(t, e, r) {
  const n = t.slice();
  return n[9] = e[r].find, n[10] = e[r].replace, n;
}
function ne(t) {
  let e, r, n = t[2].message + "", o;
  return {
    c() {
      e = N("p"), r = N("span"), o = S(n), this.h();
    },
    l(c) {
      e = E(c, "P", { "data-cy": !0, class: !0 });
      var i = b(e);
      r = E(i, "SPAN", { class: !0 });
      var s = b(r);
      o = x(s, n), s.forEach(y), i.forEach(y), this.h();
    },
    h() {
      h(r, "class", "monospace text-orange-900 svelte-u6rap9"), h(e, "data-cy", "template-input-error"), h(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(c, i) {
      O(c, e, i), _(e, r), _(r, o);
    },
    p(c, i) {
      i & 4 && n !== (n = c[2].message + "") && W(o, n);
    },
    d(c) {
      c && y(e);
    }
  };
}
function le(t) {
  let e, r, n, o, c, i = t[0].merge, s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = ie(re(t, i, l));
  return {
    c() {
      e = N("div"), r = N("h1"), n = S("Modify Merge Values"), o = w(), c = N("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      this.h();
    },
    l(l) {
      e = E(l, "DIV", { "data-cy": !0, class: !0 });
      var a = b(e);
      r = E(a, "H1", { class: !0 });
      var u = b(r);
      n = x(u, "Modify Merge Values"), u.forEach(y), o = D(a), c = E(a, "DIV", { class: !0 });
      var m = b(c);
      for (let p = 0; p < s.length; p += 1)
        s[p].l(m);
      m.forEach(y), a.forEach(y), this.h();
    },
    h() {
      h(r, "class", "text-teal-400 px-1 svelte-u6rap9"), h(c, "class", "border p-4 mb-6 svelte-u6rap9"), h(e, "data-cy", "merge-fields-input-section"), h(e, "class", "svelte-u6rap9");
    },
    m(l, a) {
      O(l, e, a), _(e, r), _(r, n), _(e, o), _(e, c);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(c, null);
    },
    p(l, a) {
      if (a & 17) {
        i = l[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const m = re(l, i, u);
          s[u] ? s[u].p(m, a) : (s[u] = ie(m), s[u].c(), s[u].m(c, null));
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
  let e, r, n = "{{ " + t[9] + " }} ", o, c, i, s, l, a, u, m, p;
  function M(...d) {
    return t[8](t[9], ...d);
  }
  return {
    c() {
      e = N("div"), r = N("label"), o = S(n), i = w(), s = N("input"), u = w(), this.h();
    },
    l(d) {
      e = E(d, "DIV", { "data-cy": !0, class: !0 });
      var f = b(e);
      r = E(f, "LABEL", { for: !0, class: !0 });
      var g = b(r);
      o = x(g, n), g.forEach(y), i = D(f), s = E(f, "INPUT", { class: !0, id: !0, type: !0 }), u = D(f), f.forEach(y), this.h();
    },
    h() {
      h(r, "for", c = t[9]), h(r, "class", "block mb-2 monospace svelte-u6rap9"), h(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), h(s, "id", l = t[9]), h(s, "type", "text"), s.value = a = t[10], h(e, "data-cy", "label-input"), h(e, "class", "svelte-u6rap9");
    },
    m(d, f) {
      O(d, e, f), _(e, r), _(r, o), _(e, i), _(e, s), _(e, u), m || (p = Q(s, "input", M), m = !0);
    },
    p(d, f) {
      t = d, f & 1 && n !== (n = "{{ " + t[9] + " }} ") && W(o, n), f & 1 && c !== (c = t[9]) && h(r, "for", c), f & 1 && l !== (l = t[9]) && h(s, "id", l), f & 1 && a !== (a = t[10]) && s.value !== a && (s.value = a);
    },
    d(d) {
      d && y(e), m = !1, p();
    }
  };
}
function se(t) {
  let e, r, n, o, c, i, s, l, a, u = B(t[1]) + "", m, p, M;
  return {
    c() {
      e = N("div"), r = N("h1"), n = S("Result"), o = w(), c = N("abbr"), i = N("img"), l = w(), a = N("p"), m = S(u), this.h();
    },
    l(d) {
      e = E(d, "DIV", { "data-cy": !0, class: !0 });
      var f = b(e);
      r = E(f, "H1", { class: !0 });
      var g = b(r);
      n = x(g, "Result"), g.forEach(y), o = D(f), c = E(f, "ABBR", { title: !0, class: !0 });
      var C = b(c);
      i = E(C, "IMG", { src: !0, alt: !0, class: !0 }), C.forEach(y), l = D(f), a = E(f, "P", { "data-cy": !0, class: !0 });
      var v = b(a);
      m = x(v, u), v.forEach(y), f.forEach(y), this.h();
    },
    h() {
      h(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), ge(i.src, s = ze) || h(i, "src", s), h(i, "alt", "copy-button"), h(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), h(c, "title", "Copy to clipboard"), h(c, "class", "svelte-u6rap9"), h(a, "data-cy", "result"), h(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), h(e, "data-cy", "result-section"), h(e, "class", "svelte-u6rap9");
    },
    m(d, f) {
      O(d, e, f), _(e, r), _(r, n), _(e, o), _(e, c), _(c, i), _(e, l), _(e, a), _(a, m), p || (M = Q(i, "click", t[5]), p = !0);
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
  let e, r, n, o, c, i, s, l, a, u, m, p, M, d = t[2] && ne(t), f = ((C = t[0].merge) == null ? void 0 : C.length) && !t[2] && le(t), g = !t[2] && se(t);
  return {
    c() {
      e = N("section"), r = N("form"), n = N("div"), o = N("label"), c = S("Paste template"), i = w(), s = N("textarea"), a = w(), d && d.c(), u = w(), f && f.c(), m = w(), g && g.c(), this.h();
    },
    l(v) {
      e = E(v, "SECTION", { "data-cy": !0, class: !0 });
      var T = b(e);
      r = E(T, "FORM", { class: !0 });
      var A = b(r);
      n = E(A, "DIV", { "data-cy": !0, class: !0 });
      var Y = b(n);
      o = E(Y, "LABEL", { for: !0, class: !0 });
      var X = b(o);
      c = x(X, "Paste template"), X.forEach(y), i = D(Y), s = E(Y, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), b(s).forEach(y), Y.forEach(y), a = D(A), d && d.l(A), u = D(A), f && f.l(A), A.forEach(y), m = D(T), g && g.l(T), T.forEach(y), this.h();
    },
    h() {
      h(o, "for", "json-input"), h(o, "class", "text-teal-400 px-1 svelte-u6rap9"), h(s, "data-cy", "template-input"), h(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), h(s, "id", "json-input"), s.value = l = B(t[0]), h(n, "data-cy", "template-input-section"), h(n, "class", "mb-6 svelte-u6rap9"), h(r, "class", "svelte-u6rap9"), h(e, "data-cy", "form-container"), h(e, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(v, T) {
      O(v, e, T), _(e, r), _(r, n), _(n, o), _(o, c), _(n, i), _(n, s), _(r, a), d && d.m(r, null), _(r, u), f && f.m(r, null), _(e, m), g && g.m(e, null), p || (M = Q(s, "input", t[7]), p = !0);
    },
    p(v, [T]) {
      var A;
      T & 1 && l !== (l = B(v[0])) && (s.value = l), v[2] ? d ? d.p(v, T) : (d = ne(v), d.c(), d.m(r, u)) : d && (d.d(1), d = null), ((A = v[0].merge) == null ? void 0 : A.length) && !v[2] ? f ? f.p(v, T) : (f = le(v), f.c(), f.m(r, null)) : f && (f.d(1), f = null), v[2] ? g && (g.d(1), g = null) : g ? g.p(v, T) : (g = se(v), g.c(), g.m(e, null));
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
function it(t, e, r) {
  let { editTemplateService: n = new de(nt) } = e, o = n.template, c = n.result, i = null;
  function s(p) {
    n.setTemplateSource(p), r(0, o = n.template), r(1, c = n.result), r(2, i = n.error);
  }
  function l(p) {
    n.updateResultMergeFields(p), r(1, c = n.result);
  }
  function a() {
    navigator.clipboard.writeText(JSON.stringify(c)), alert("JSON copied to clipboard!");
  }
  const u = (p) => s(p.currentTarget.value), m = (p, M) => l({ find: p, replace: M.currentTarget.value });
  return t.$$set = (p) => {
    "editTemplateService" in p && r(6, n = p.editTemplateService);
  }, [
    o,
    c,
    i,
    s,
    l,
    a,
    n,
    u,
    m
  ];
}
class st extends Oe {
  constructor(e) {
    super(), Le(this, e, it, lt, _e, { editTemplateService: 6 });
  }
}
class ot {
  constructor(e, r = document.querySelector("#shotstack-form-field")) {
    j(this, "templateService");
    this.containerElement = r, this.templateService = new de(e), this.initialize();
  }
  on(e, r) {
    this.templateService.on(e, r);
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
  ot as default
};
