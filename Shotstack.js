var de = Object.defineProperty;
var he = (t, e, r) => e in t ? de(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var j = (t, e, r) => (he(t, typeof e != "symbol" ? e + "" : e, r), r);
function $() {
}
function se(t) {
  return t();
}
function X() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(se);
}
function me(t) {
  return typeof t == "function";
}
function pe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Y;
function _e(t, e) {
  return Y || (Y = document.createElement("a")), Y.href = e, t === Y.href;
}
function ge(t) {
  return Object.keys(t).length === 0;
}
let F = !1;
function ye() {
  F = !0;
}
function ve() {
  F = !1;
}
function Ne(t, e, r, n) {
  for (; t < e; ) {
    const c = t + (e - t >> 1);
    r(c) <= n ? t = c + 1 : e = c;
  }
  return t;
}
function Ee(t) {
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
  let c = 0;
  for (let l = 0; l < e.length; l++) {
    const a = e[l].claim_order, u = (c > 0 && e[r[c]].claim_order <= a ? c + 1 : Ne(1, c, (p) => e[r[p]].claim_order, a)) - 1;
    n[l] = r[u] + 1;
    const m = u + 1;
    r[m] = l, c = Math.max(m, c);
  }
  const o = [], i = [];
  let s = e.length - 1;
  for (let l = r[c] + 1; l != 0; l = n[l - 1]) {
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
  if (F) {
    for (Ee(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function O(t, e, r) {
  F && !r ? _(t, e) : (e.parentNode !== t || e.nextSibling != r) && t.insertBefore(e, r || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function be(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function N(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createTextNode(t);
}
function A() {
  return S(" ");
}
function V(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function h(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function b(t) {
  return Array.from(t.childNodes);
}
function Me(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ae(t, e, r, n, c = !1) {
  Me(t);
  const o = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const s = t[i];
      if (e(s)) {
        const l = r(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, c || (t.claim_info.last_index = i), s;
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const s = t[i];
      if (e(s)) {
        const l = r(s);
        return l === void 0 ? t.splice(i, 1) : t[i] = l, c ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = i, s;
      }
    }
    return n();
  })();
  return o.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, o;
}
function Te(t, e, r, n) {
  return ae(t, (c) => c.nodeName === e, (c) => {
    const o = [];
    for (let i = 0; i < c.attributes.length; i++) {
      const s = c.attributes[i];
      r[s.name] || o.push(s.name);
    }
    o.forEach((i) => c.removeAttribute(i));
  }, () => n(e));
}
function E(t, e, r) {
  return Te(t, e, r, N);
}
function x(t, e) {
  return ae(
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
function Q(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let W;
function k(t) {
  W = t;
}
const L = [], K = [], U = [], ee = [], Ie = Promise.resolve();
let J = !1;
function Ae() {
  J || (J = !0, Ie.then(ce));
}
function G(t) {
  U.push(t);
}
const Z = /* @__PURE__ */ new Set();
let R = 0;
function ce() {
  const t = W;
  do {
    for (; R < L.length; ) {
      const e = L[R];
      R++, k(e), De(e.$$);
    }
    for (k(null), L.length = 0, R = 0; K.length; )
      K.pop()();
    for (let e = 0; e < U.length; e += 1) {
      const r = U[e];
      Z.has(r) || (Z.add(r), r());
    }
    U.length = 0;
  } while (L.length);
  for (; ee.length; )
    ee.pop()();
  J = !1, Z.clear(), k(t);
}
function De(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(G);
  }
}
const we = /* @__PURE__ */ new Set();
function Se(t, e) {
  t && t.i && (we.delete(t), t.i(e));
}
function xe(t, e, r, n) {
  const { fragment: c, on_mount: o, on_destroy: i, after_update: s } = t.$$;
  c && c.m(e, r), n || G(() => {
    const l = o.map(se).filter(me);
    i ? i.push(...l) : B(l), t.$$.on_mount = [];
  }), s.forEach(G);
}
function je(t, e) {
  const r = t.$$;
  r.fragment !== null && (B(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ce(t, e) {
  t.$$.dirty[0] === -1 && (L.push(t), Ae(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Le(t, e, r, n, c, o, i, s = [-1]) {
  const l = W;
  k(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: $,
    not_equal: c,
    bound: X(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: X(),
    dirty: s,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  i && i(a.root);
  let u = !1;
  if (a.ctx = r ? r(t, e.props || {}, (m, p, ...M) => {
    const d = M.length ? M[0] : p;
    return a.ctx && c(a.ctx[m], a.ctx[m] = d) && (!a.skip_bound && a.bound[m] && a.bound[m](d), u && Ce(t, m)), p;
  }) : [], a.update(), u = !0, B(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      ye();
      const m = b(e.target);
      a.fragment && a.fragment.l(m), m.forEach(y);
    } else
      a.fragment && a.fragment.c();
    e.intro && Se(t.$$.fragment), xe(t, e.target, e.anchor, e.customElement), ve(), ce();
  }
  k(l);
}
class ke {
  $destroy() {
    je(this, 1), this.$destroy = $;
  }
  $on(e, r) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const c = n.indexOf(r);
      c !== -1 && n.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !ge(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Oe = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==", ze = "A 'merge' property is required", Ye = "Property 'merge' must be an array", Re = "Property 'merge' must contain at least one element", Ue = "A 'find' property is required on every element inside 'merge'", $e = "Every 'find' property inside 'merge' must be of type string", Pe = "Every 'find' property inside 'merge' must be a string of length equal to or higher than one", Be = "A 'replace' property is required on every element inside 'merge'", Fe = "Unexpected error while parsing template JSON";
class w extends Error {
  constructor(e) {
    super(e);
  }
}
function H(t, e) {
  return !(t in e);
}
function Ze(t, e) {
  return !(e[t] instanceof Array);
}
function Je(t, e) {
  return typeof e[t] != "string";
}
function Ge(t, e) {
  return !(typeof e[t] == "string" && e[t].length > 0);
}
function He(t, e) {
  return !(e[t] instanceof Array && e[t].length > 0);
}
function Ve(t) {
  try {
    const e = JSON.parse(t);
    if (H("merge", e))
      throw new w(ze);
    if (Ze("merge", e))
      throw new w(Ye);
    if (He("merge", e))
      throw new w(Re);
    const r = Qe(e.merge);
    return { ...e, merge: r };
  } catch (e) {
    throw oe(e);
  }
}
function Qe(t) {
  return t.map((r) => {
    if (H("find", r))
      throw new w(Ue);
    if (H("replace", r))
      throw new w(Be);
    if (Je("find", r))
      throw new w($e);
    if (Ge("find", r))
      throw new w(Pe);
    return r;
  }).map(({ find: r, replace: n }) => ({
    find: r,
    replace: ue(n)
  }));
}
function We(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function oe(t) {
  return t instanceof Error ? t : We(t) ? new w(t.message) : new w(Fe);
}
function ue(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
class fe {
  constructor(e) {
    j(this, "template");
    j(this, "_result");
    j(this, "_error");
    j(this, "handlers");
    this._error = null, this.template = { merge: [] }, this._result = { merge: [] }, this.handlers = { change: [], submit: [], error: [] }, this.setTemplateSource(e);
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
  submit() {
    if (this.error)
      throw this.error;
    this.handlers.submit.forEach((e) => e(this.result));
  }
  setTemplateSource(e) {
    try {
      const r = Ve(ue(e));
      this.template = r, this.result = r, this.error = null;
    } catch (r) {
      const n = oe(r);
      this.error = n;
    }
  }
  updateResultMergeFields(e) {
    const { find: r, replace: n } = e, c = { find: r, replace: n }, o = this.result.merge.map(
      (i) => (i == null ? void 0 : i.find) === e.find ? c : i
    );
    return this.result = { ...this.result, merge: o }, o;
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
function te(t, e, r) {
  const n = t.slice();
  return n[9] = e[r].find, n[10] = e[r].replace, n;
}
function re(t) {
  let e, r, n = t[2].message + "", c;
  return {
    c() {
      e = N("p"), r = N("span"), c = S(n), this.h();
    },
    l(o) {
      e = E(o, "P", { "data-cy": !0, class: !0 });
      var i = b(e);
      r = E(i, "SPAN", { class: !0 });
      var s = b(r);
      c = x(s, n), s.forEach(y), i.forEach(y), this.h();
    },
    h() {
      h(r, "class", "monospace text-orange-900 svelte-u6rap9"), h(e, "data-cy", "template-input-error"), h(e, "class", "bg-rose-200 rounded py-2 px-4 svelte-u6rap9");
    },
    m(o, i) {
      O(o, e, i), _(e, r), _(r, c);
    },
    p(o, i) {
      i & 4 && n !== (n = o[2].message + "") && Q(c, n);
    },
    d(o) {
      o && y(e);
    }
  };
}
function ne(t) {
  let e, r, n, c, o, i = t[0].merge, s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = le(te(t, i, l));
  return {
    c() {
      e = N("div"), r = N("h1"), n = S("Modify Merge Values"), c = A(), o = N("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      this.h();
    },
    l(l) {
      e = E(l, "DIV", { "data-cy": !0, class: !0 });
      var a = b(e);
      r = E(a, "H1", { class: !0 });
      var u = b(r);
      n = x(u, "Modify Merge Values"), u.forEach(y), c = D(a), o = E(a, "DIV", { class: !0 });
      var m = b(o);
      for (let p = 0; p < s.length; p += 1)
        s[p].l(m);
      m.forEach(y), a.forEach(y), this.h();
    },
    h() {
      h(r, "class", "text-teal-400 px-1 svelte-u6rap9"), h(o, "class", "border p-4 mb-6 svelte-u6rap9"), h(e, "data-cy", "merge-fields-input-section"), h(e, "class", "svelte-u6rap9");
    },
    m(l, a) {
      O(l, e, a), _(e, r), _(r, n), _(e, c), _(e, o);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(o, null);
    },
    p(l, a) {
      if (a & 17) {
        i = l[0].merge;
        let u;
        for (u = 0; u < i.length; u += 1) {
          const m = te(l, i, u);
          s[u] ? s[u].p(m, a) : (s[u] = le(m), s[u].c(), s[u].m(o, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
    },
    d(l) {
      l && y(e), be(s, l);
    }
  };
}
function le(t) {
  let e, r, n = "{{ " + t[9] + " }} ", c, o, i, s, l, a, u, m, p;
  function M(...d) {
    return t[8](t[9], ...d);
  }
  return {
    c() {
      e = N("div"), r = N("label"), c = S(n), i = A(), s = N("input"), u = A(), this.h();
    },
    l(d) {
      e = E(d, "DIV", { "data-cy": !0, class: !0 });
      var f = b(e);
      r = E(f, "LABEL", { for: !0, class: !0 });
      var g = b(r);
      c = x(g, n), g.forEach(y), i = D(f), s = E(f, "INPUT", { class: !0, id: !0, type: !0 }), u = D(f), f.forEach(y), this.h();
    },
    h() {
      h(r, "for", o = t[9]), h(r, "class", "block mb-2 monospace svelte-u6rap9"), h(s, "class", "border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"), h(s, "id", l = t[9]), h(s, "type", "text"), s.value = a = t[10], h(e, "data-cy", "label-input"), h(e, "class", "svelte-u6rap9");
    },
    m(d, f) {
      O(d, e, f), _(e, r), _(r, c), _(e, i), _(e, s), _(e, u), m || (p = V(s, "input", M), m = !0);
    },
    p(d, f) {
      t = d, f & 1 && n !== (n = "{{ " + t[9] + " }} ") && Q(c, n), f & 1 && o !== (o = t[9]) && h(r, "for", o), f & 1 && l !== (l = t[9]) && h(s, "id", l), f & 1 && a !== (a = t[10]) && s.value !== a && (s.value = a);
    },
    d(d) {
      d && y(e), m = !1, p();
    }
  };
}
function ie(t) {
  let e, r, n, c, o, i, s, l, a, u = P(t[1]) + "", m, p, M;
  return {
    c() {
      e = N("div"), r = N("h1"), n = S("Result"), c = A(), o = N("abbr"), i = N("img"), l = A(), a = N("p"), m = S(u), this.h();
    },
    l(d) {
      e = E(d, "DIV", { "data-cy": !0, class: !0 });
      var f = b(e);
      r = E(f, "H1", { class: !0 });
      var g = b(r);
      n = x(g, "Result"), g.forEach(y), c = D(f), o = E(f, "ABBR", { title: !0, class: !0 });
      var C = b(o);
      i = E(C, "IMG", { src: !0, alt: !0, class: !0 }), C.forEach(y), l = D(f), a = E(f, "P", { "data-cy": !0, class: !0 });
      var v = b(a);
      m = x(v, u), v.forEach(y), f.forEach(y), this.h();
    },
    h() {
      h(r, "class", "text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"), _e(i.src, s = Oe) || h(i, "src", s), h(i, "alt", "copy-button"), h(i, "class", "h-4 cursor-pointer inline mb-1 svelte-u6rap9"), h(o, "title", "Copy to clipboard"), h(o, "class", "svelte-u6rap9"), h(a, "data-cy", "result"), h(a, "class", "h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"), h(e, "data-cy", "result-section"), h(e, "class", "svelte-u6rap9");
    },
    m(d, f) {
      O(d, e, f), _(e, r), _(r, n), _(e, c), _(e, o), _(o, i), _(e, l), _(e, a), _(a, m), p || (M = V(i, "click", t[5]), p = !0);
    },
    p(d, f) {
      f & 2 && u !== (u = P(d[1]) + "") && Q(m, u);
    },
    d(d) {
      d && y(e), p = !1, M();
    }
  };
}
function tt(t) {
  var C;
  let e, r, n, c, o, i, s, l, a, u, m, p, M, d = t[2] && re(t), f = ((C = t[0].merge) == null ? void 0 : C.length) && !t[2] && ne(t), g = !t[2] && ie(t);
  return {
    c() {
      e = N("section"), r = N("form"), n = N("div"), c = N("label"), o = S("Paste template"), i = A(), s = N("textarea"), a = A(), d && d.c(), u = A(), f && f.c(), m = A(), g && g.c(), this.h();
    },
    l(v) {
      e = E(v, "SECTION", { "data-cy": !0, class: !0 });
      var T = b(e);
      r = E(T, "FORM", { class: !0 });
      var I = b(r);
      n = E(I, "DIV", { "data-cy": !0, class: !0 });
      var z = b(n);
      c = E(z, "LABEL", { for: !0, class: !0 });
      var q = b(c);
      o = x(q, "Paste template"), q.forEach(y), i = D(z), s = E(z, "TEXTAREA", { "data-cy": !0, class: !0, id: !0 }), b(s).forEach(y), z.forEach(y), a = D(I), d && d.l(I), u = D(I), f && f.l(I), I.forEach(y), m = D(T), g && g.l(T), T.forEach(y), this.h();
    },
    h() {
      h(c, "for", "json-input"), h(c, "class", "text-teal-400 px-1 svelte-u6rap9"), h(s, "data-cy", "template-input"), h(s, "class", "w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"), h(s, "id", "json-input"), s.value = l = P(t[0]), h(n, "data-cy", "template-input-section"), h(n, "class", "mb-6 svelte-u6rap9"), h(r, "class", "svelte-u6rap9"), h(e, "data-cy", "form-container"), h(e, "class", "max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9");
    },
    m(v, T) {
      O(v, e, T), _(e, r), _(r, n), _(n, c), _(c, o), _(n, i), _(n, s), _(r, a), d && d.m(r, null), _(r, u), f && f.m(r, null), _(e, m), g && g.m(e, null), p || (M = V(s, "input", t[7]), p = !0);
    },
    p(v, [T]) {
      var I;
      T & 1 && l !== (l = P(v[0])) && (s.value = l), v[2] ? d ? d.p(v, T) : (d = re(v), d.c(), d.m(r, u)) : d && (d.d(1), d = null), ((I = v[0].merge) == null ? void 0 : I.length) && !v[2] ? f ? f.p(v, T) : (f = ne(v), f.c(), f.m(r, null)) : f && (f.d(1), f = null), v[2] ? g && (g.d(1), g = null) : g ? g.p(v, T) : (g = ie(v), g.c(), g.m(e, null));
    },
    i: $,
    o: $,
    d(v) {
      v && y(e), d && d.d(), f && f.d(), g && g.d(), p = !1, M();
    }
  };
}
function P(t) {
  return JSON.stringify(t, null, 2);
}
function rt(t, e, r) {
  let { editTemplateService: n = new fe(et) } = e, c = n.template, o = n.result, i = null;
  function s(p) {
    n.setTemplateSource(p), r(0, c = n.template), r(1, o = n.result), r(2, i = n.error);
  }
  function l(p) {
    n.updateResultMergeFields(p), r(1, o = n.result);
  }
  function a() {
    navigator.clipboard.writeText(JSON.stringify(o)), alert("JSON copied to clipboard!");
  }
  const u = (p) => s(p.currentTarget.value), m = (p, M) => l({ find: p, replace: M.currentTarget.value });
  return t.$$set = (p) => {
    "editTemplateService" in p && r(6, n = p.editTemplateService);
  }, [
    c,
    o,
    i,
    s,
    l,
    a,
    n,
    u,
    m
  ];
}
class nt extends ke {
  constructor(e) {
    super(), Le(this, e, rt, tt, pe, { editTemplateService: 6 });
  }
}
class it {
  constructor(e, r = document.querySelector("#shotstack-form-field")) {
    j(this, "templateService");
    this.containerElement = r, this.templateService = new fe(e), this.initialize();
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
    new nt({
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
  it as default
};
