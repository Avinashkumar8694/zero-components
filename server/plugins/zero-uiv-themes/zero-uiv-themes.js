/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, Q = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ee = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let ge = class {
  constructor(e, r, t) {
    if (this._$cssResult$ = !0, t !== ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Q && e === void 0) {
      const t = r !== void 0 && r.length === 1;
      t && (e = ie.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && ie.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const _ = (o) => new ge(typeof o == "string" ? o : o + "", void 0, ee), d = (o, ...e) => {
  const r = o.length === 1 ? o[0] : e.reduce((t, i, s) => t + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[s + 1], o[0]);
  return new ge(r, o, ee);
}, _e = (o, e) => {
  if (Q) o.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const t = document.createElement("style"), i = D.litNonce;
    i !== void 0 && t.setAttribute("nonce", i), t.textContent = r.cssText, o.appendChild(t);
  }
}, oe = Q ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const t of e.cssRules) r += t.cssText;
  return _(r);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ae, defineProperty: ke, getOwnPropertyDescriptor: Se, getOwnPropertyNames: Te, getOwnPropertySymbols: Ee, getPrototypeOf: Ce } = Object, m = globalThis, ae = m.trustedTypes, Pe = ae ? ae.emptyScript : "", W = m.reactiveElementPolyfillSupport, E = (o, e) => o, K = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? Pe : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let r = o;
  switch (e) {
    case Boolean:
      r = o !== null;
      break;
    case Number:
      r = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(o);
      } catch {
        r = null;
      }
  }
  return r;
} }, me = (o, e) => !Ae(o, e), se = { attribute: !0, type: String, converter: K, reflect: !1, useDefault: !1, hasChanged: me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let A = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = se) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const t = Symbol(), i = this.getPropertyDescriptor(e, t, r);
      i !== void 0 && ke(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, r, t) {
    const { get: i, set: s } = Se(this.prototype, e) ?? { get() {
      return this[r];
    }, set(a) {
      this[r] = a;
    } };
    return { get: i, set(a) {
      const u = i == null ? void 0 : i.call(this);
      s == null || s.call(this, a), this.requestUpdate(e, u, t);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? se;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const e = Ce(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const r = this.properties, t = [...Te(r), ...Ee(r)];
      for (const i of t) this.createProperty(i, r[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [t, i] of r) this.elementProperties.set(t, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, t] of this.elementProperties) {
      const i = this._$Eu(r, t);
      i !== void 0 && this._$Eh.set(i, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const t = new Set(e.flat(1 / 0).reverse());
      for (const i of t) r.unshift(oe(i));
    } else e !== void 0 && r.push(oe(e));
    return r;
  }
  static _$Eu(e, r) {
    const t = r.attribute;
    return t === !1 ? void 0 : typeof t == "string" ? t : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const t of r.keys()) this.hasOwnProperty(t) && (e.set(t, this[t]), delete this[t]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return _e(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var t;
      return (t = r.hostConnected) == null ? void 0 : t.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var t;
      return (t = r.hostDisconnected) == null ? void 0 : t.call(r);
    });
  }
  attributeChangedCallback(e, r, t) {
    this._$AK(e, t);
  }
  _$ET(e, r) {
    var s;
    const t = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, t);
    if (i !== void 0 && t.reflect === !0) {
      const a = (((s = t.converter) == null ? void 0 : s.toAttribute) !== void 0 ? t.converter : K).toAttribute(r, t.type);
      this._$Em = e, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var s, a;
    const t = this.constructor, i = t._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const u = t.getPropertyOptions(i), n = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((s = u.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? u.converter : K;
      this._$Em = i;
      const v = n.fromAttribute(r, u.type);
      this[i] = v ?? ((a = this._$Ej) == null ? void 0 : a.get(i)) ?? v, this._$Em = null;
    }
  }
  requestUpdate(e, r, t, i = !1, s) {
    var a;
    if (e !== void 0) {
      const u = this.constructor;
      if (i === !1 && (s = this[e]), t ?? (t = u.getPropertyOptions(e)), !((t.hasChanged ?? me)(s, r) || t.useDefault && t.reflect && s === ((a = this._$Ej) == null ? void 0 : a.get(e)) && !this.hasAttribute(u._$Eu(e, t)))) return;
      this.C(e, r, t);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: t, reflect: i, wrapped: s }, a) {
    t && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? r ?? this[e]), s !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || t || (r = void 0), this._$AL.set(e, r)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, a] of this._$Ep) this[s] = a;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [s, a] of i) {
        const { wrapped: u } = a, n = this[s];
        u !== !0 || this._$AL.has(s) || n === void 0 || this.C(s, void 0, a, n);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (t = this._$EO) == null || t.forEach((i) => {
        var s;
        return (s = i.hostUpdate) == null ? void 0 : s.call(i);
      }), this.update(r)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((t) => {
      var i;
      return (i = t.hostUpdated) == null ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[E("elementProperties")] = /* @__PURE__ */ new Map(), A[E("finalized")] = /* @__PURE__ */ new Map(), W == null || W({ ReactiveElement: A }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C = globalThis, ne = (o) => o, L = C.trustedTypes, ue = L ? L.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, xe = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, ye = "?" + g, Ue = `<${ye}>`, w = document, P = () => w.createComment(""), U = (o) => o === null || typeof o != "object" && typeof o != "function", re = Array.isArray, Oe = (o) => re(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", G = `[ 	
\f\r]`, T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ce = /-->/g, ve = />/g, x = RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pe = /'/g, le = /"/g, $e = /^(?:script|style|textarea|title)$/i, k = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), de = /* @__PURE__ */ new WeakMap(), y = w.createTreeWalker(w, 129);
function we(o, e) {
  if (!re(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ue !== void 0 ? ue.createHTML(e) : e;
}
const Me = (o, e) => {
  const r = o.length - 1, t = [];
  let i, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = T;
  for (let u = 0; u < r; u++) {
    const n = o[u];
    let v, l, c = -1, b = 0;
    for (; b < n.length && (a.lastIndex = b, l = a.exec(n), l !== null); ) b = a.lastIndex, a === T ? l[1] === "!--" ? a = ce : l[1] !== void 0 ? a = ve : l[2] !== void 0 ? ($e.test(l[2]) && (i = RegExp("</" + l[2], "g")), a = x) : l[3] !== void 0 && (a = x) : a === x ? l[0] === ">" ? (a = i ?? T, c = -1) : l[1] === void 0 ? c = -2 : (c = a.lastIndex - l[2].length, v = l[1], a = l[3] === void 0 ? x : l[3] === '"' ? le : pe) : a === le || a === pe ? a = x : a === ce || a === ve ? a = T : (a = x, i = void 0);
    const h = a === x && o[u + 1].startsWith("/>") ? " " : "";
    s += a === T ? n + Ue : c >= 0 ? (t.push(v), n.slice(0, c) + xe + n.slice(c) + g + h) : n + g + (c === -2 ? u : h);
  }
  return [we(o, s + (o[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), t];
};
class O {
  constructor({ strings: e, _$litType$: r }, t) {
    let i;
    this.parts = [];
    let s = 0, a = 0;
    const u = e.length - 1, n = this.parts, [v, l] = Me(e, r);
    if (this.el = O.createElement(v, t), y.currentNode = this.el.content, r === 2 || r === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (i = y.nextNode()) !== null && n.length < u; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const c of i.getAttributeNames()) if (c.endsWith(xe)) {
          const b = l[a++], h = i.getAttribute(c).split(g), N = /([.?@])?(.*)/.exec(b);
          n.push({ type: 1, index: s, name: N[2], strings: h, ctor: N[1] === "." ? He : N[1] === "?" ? Re : N[1] === "@" ? ze : j }), i.removeAttribute(c);
        } else c.startsWith(g) && (n.push({ type: 6, index: s }), i.removeAttribute(c));
        if ($e.test(i.tagName)) {
          const c = i.textContent.split(g), b = c.length - 1;
          if (b > 0) {
            i.textContent = L ? L.emptyScript : "";
            for (let h = 0; h < b; h++) i.append(c[h], P()), y.nextNode(), n.push({ type: 2, index: ++s });
            i.append(c[b], P());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ye) n.push({ type: 2, index: s });
      else {
        let c = -1;
        for (; (c = i.data.indexOf(g, c + 1)) !== -1; ) n.push({ type: 7, index: s }), c += g.length - 1;
      }
      s++;
    }
  }
  static createElement(e, r) {
    const t = w.createElement("template");
    return t.innerHTML = e, t;
  }
}
function S(o, e, r = o, t) {
  var a, u;
  if (e === k) return e;
  let i = t !== void 0 ? (a = r._$Co) == null ? void 0 : a[t] : r._$Cl;
  const s = U(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== s && ((u = i == null ? void 0 : i._$AO) == null || u.call(i, !1), s === void 0 ? i = void 0 : (i = new s(o), i._$AT(o, r, t)), t !== void 0 ? (r._$Co ?? (r._$Co = []))[t] = i : r._$Cl = i), i !== void 0 && (e = S(o, i._$AS(o, e.values), i, t)), e;
}
class Ne {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: t } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? w).importNode(r, !0);
    y.currentNode = i;
    let s = y.nextNode(), a = 0, u = 0, n = t[0];
    for (; n !== void 0; ) {
      if (a === n.index) {
        let v;
        n.type === 2 ? v = new M(s, s.nextSibling, this, e) : n.type === 1 ? v = new n.ctor(s, n.name, n.strings, this, e) : n.type === 6 && (v = new Be(s, this, e)), this._$AV.push(v), n = t[++u];
      }
      a !== (n == null ? void 0 : n.index) && (s = y.nextNode(), a++);
    }
    return y.currentNode = w, i;
  }
  p(e) {
    let r = 0;
    for (const t of this._$AV) t !== void 0 && (t.strings !== void 0 ? (t._$AI(e, t, r), r += t.strings.length - 2) : t._$AI(e[r])), r++;
  }
}
class M {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, t, i) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = t, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = S(this, e, r), U(e) ? e === p || e == null || e === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : e !== this._$AH && e !== k && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Oe(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== p && U(this._$AH) ? this._$AA.nextSibling.data = e : this.T(w.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var s;
    const { values: r, _$litType$: t } = e, i = typeof t == "number" ? this._$AC(e) : (t.el === void 0 && (t.el = O.createElement(we(t.h, t.h[0]), this.options)), t);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === i) this._$AH.p(r);
    else {
      const a = new Ne(i, this), u = a.u(this.options);
      a.p(r), this.T(u), this._$AH = a;
    }
  }
  _$AC(e) {
    let r = de.get(e.strings);
    return r === void 0 && de.set(e.strings, r = new O(e)), r;
  }
  k(e) {
    re(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let t, i = 0;
    for (const s of e) i === r.length ? r.push(t = new M(this.O(P()), this.O(P()), this, this.options)) : t = r[i], t._$AI(s), i++;
    i < r.length && (this._$AR(t && t._$AB.nextSibling, i), r.length = i);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var t;
    for ((t = this._$AP) == null ? void 0 : t.call(this, !1, !0, r); e !== this._$AB; ) {
      const i = ne(e).nextSibling;
      ne(e).remove(), e = i;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, t, i, s) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = e, this.name = r, this._$AM = i, this.options = s, t.length > 2 || t[0] !== "" || t[1] !== "" ? (this._$AH = Array(t.length - 1).fill(new String()), this.strings = t) : this._$AH = p;
  }
  _$AI(e, r = this, t, i) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = S(this, e, r, 0), a = !U(e) || e !== this._$AH && e !== k, a && (this._$AH = e);
    else {
      const u = e;
      let n, v;
      for (e = s[0], n = 0; n < s.length - 1; n++) v = S(this, u[t + n], r, n), v === k && (v = this._$AH[n]), a || (a = !U(v) || v !== this._$AH[n]), v === p ? e = p : e !== p && (e += (v ?? "") + s[n + 1]), this._$AH[n] = v;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class He extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === p ? void 0 : e;
  }
}
class Re extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== p);
  }
}
class ze extends j {
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = S(this, e, r, 0) ?? p) === k) return;
    const t = this._$AH, i = e === p && t !== p || e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive, s = e !== p && (t === p || i);
    i && this.element.removeEventListener(this.name, this, t), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Be {
  constructor(e, r, t) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = t;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    S(this, e);
  }
}
const V = C.litHtmlPolyfillSupport;
V == null || V(O, M), (C.litHtmlVersions ?? (C.litHtmlVersions = [])).push("3.3.3");
const De = (o, e, r) => {
  const t = (r == null ? void 0 : r.renderBefore) ?? e;
  let i = t._$litPart$;
  if (i === void 0) {
    const s = (r == null ? void 0 : r.renderBefore) ?? null;
    t._$litPart$ = i = new M(e.insertBefore(P(), s), s, void 0, r ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $ = globalThis;
class I extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = De(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return k;
  }
}
var he;
I._$litElement$ = !0, I.finalized = !0, (he = $.litElementHydrateSupport) == null || he.call($, { LitElement: I });
const q = $.litElementPolyfillSupport;
q == null || q({ LitElement: I });
($.litElementVersions ?? ($.litElementVersions = [])).push("4.2.2");
function fe(o) {
  const e = Object.entries(o).map(([r, t]) => `${r}: ${t};`).join(`
`);
  return _(e);
}
class f {
  constructor(e, r, t) {
    this.id = e, this.name = r, this.globalTokens = t, this.componentTokens = {}, this.baseStyles = d``;
  }
  getGlobalStyles() {
    return d`
            :host {
                ${fe(this.globalTokens)}
                --uiv-status-primary: var(--uiv-primary-color, var(--uiv-color-primary, #3b82f6));
                --uiv-status-secondary: var(--uiv-secondary-color, var(--uiv-color-secondary, #64748b));
                --uiv-status-success: var(--uiv-color-success, #16a34a);
                --uiv-status-warning: var(--uiv-color-warning, #f59e0b);
                --uiv-status-danger: var(--uiv-color-danger, #dc2626);
                --uiv-status-info: var(--uiv-color-info, #0ea5e9);
                
                /* Semantic Text Fallbacks */
                --uiv-text-inverse: var(--uiv-text-inverse, #ffffff);
                --uiv-text-primary-themed: var(--uiv-text-primary, var(--uiv-text-color, #1a1a1a));
            }

            /* Semantic Utility Classes */
            .uiv-text-primary { color: var(--uiv-status-primary) !important; }
            .uiv-text-secondary { color: var(--uiv-status-secondary) !important; }
            .uiv-text-success { color: var(--uiv-status-success) !important; }
            .uiv-text-warning { color: var(--uiv-status-warning) !important; }
            .uiv-text-danger { color: var(--uiv-status-danger) !important; }
            .uiv-text-info { color: var(--uiv-status-info) !important; }
            
            .uiv-bg-primary { background: var(--uiv-status-primary) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-secondary { background: var(--uiv-status-secondary) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-success { background: var(--uiv-status-success) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-warning { background: var(--uiv-status-warning) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-danger { background: var(--uiv-status-danger) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-info { background: var(--uiv-status-info) !important; color: var(--uiv-text-inverse) !important; }

            ${this.baseStyles}
            ${this.getBaseStyles()}
        `;
  }
  getComponentStyles(e) {
    const r = this.getComponentTokens(e);
    return d`
            :host {
                ${fe(r)}
            }
        `;
  }
  getComponentTokens(e) {
    return this.componentTokens[e] || {};
  }
  /**
   * Returns actual CSS rules for common primitive elements.
   * Useful for components like AttributeWindow that use standard HTML tags.
   */
  getCoreComponentStyles() {
    return d`
            .uiv-input, .uiv-select, .uiv-textarea {
                background-color: var(--uiv-input-bg, var(--uiv-app-input-bg, var(--uiv-surface-color, #ffffff)));
                color: var(--uiv-text-primary-themed, var(--uiv-app-text-color, #1a1a1a));
                border: 1px solid var(--uiv-input-border, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
                border-radius: var(--uiv-border-radius, 8px);
                padding: 10px 14px;
                font-family: inherit;
                font-size: 14px;
                width: 100%;
                box-sizing: border-box;
                transition: var(--uiv-transition-smooth, all 0.3s cubic-bezier(0.4, 0, 0.2, 1));
                display: block;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }

            .uiv-input:hover, .uiv-select:hover, .uiv-textarea:hover {
                border-color: var(--uiv-status-primary);
            }

            .uiv-input[type="checkbox"], .uiv-input[type="radio"] {
                width: auto;
                cursor: pointer;
                display: inline-block;
                box-shadow: none;
            }

            .uiv-input:focus, .uiv-select:focus, .uiv-textarea:focus {
                outline: none;
                border-color: var(--uiv-status-primary);
                box-shadow: 0 0 0 3px var(--uiv-app-accent-transparent, rgba(59, 130, 246, 0.2));
            }

            .uiv-button {
                background-color: var(--uiv-btn-bg, var(--uiv-status-primary));
                color: var(--uiv-btn-text, var(--uiv-text-inverse));
                border: none;
                border-radius: var(--uiv-border-radius, 8px);
                padding: 12px 24px;
                font-weight: 600;
                cursor: pointer;
                transition: var(--uiv-transition-smooth, all 0.3s cubic-bezier(0.4, 0, 0.2, 1));
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .uiv-button:hover {
                filter: brightness(1.15);
                transform: translateY(-1px);
                box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
            }

            .uiv-button:active {
                transform: translateY(0);
                filter: brightness(0.95);
            }

            .uiv-label {
                color: inherit;
                font-weight: 600;
                margin-bottom: 8px;
                font-size: 0.85rem;
                letter-spacing: 0.025em;
                text-transform: uppercase;
                display: block;
                opacity: 0.8;
            }
        `;
  }
}
const Ie = {
  // Core Palette
  "--uiv-primary-color": "#ff007c",
  "--uiv-secondary-color": "#00ffcc",
  "--uiv-accent-color": "#bc00ff",
  "--uiv-bg-color": "#0a0a0c",
  "--uiv-surface-color": "#1a1a1e",
  "--uiv-text-color": "#ffffff",
  "--uiv-text-muted": "#66666e",
  "--uiv-border-color": "rgba(255, 0, 124, 0.4)",
  // Advanced Semantic Tokens
  "--uiv-bg-main": "#0a0a0c",
  "--uiv-bg-surface": "#1a1a1e",
  "--uiv-bg-overlay": "rgba(255, 0, 124, 0.05)",
  "--uiv-border-glow": "0 0 10px rgba(255, 0, 124, 0.5)",
  "--uiv-glow-intensity": "1",
  // App Dashboard Tokens
  "--uiv-app-bg": "#0a0a0c",
  "--uiv-bg-primary": "#0a0a0c",
  "--uiv-app-sidebar-bg": "#121216",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-header-bg": "#121216",
  "--uiv-app-card-bg": "rgba(26, 26, 30, 0.7)",
  "--uiv-app-input-bg": "rgba(26, 26, 30, 0.4)",
  "--uiv-app-accent-color": "#ff007c",
  "--uiv-app-accent-transparent": "rgba(255, 0, 124, 0.15)",
  "--uiv-app-text-color": "#ffffff",
  "--uiv-app-text-muted": "#66666e",
  "--uiv-app-border-color": "rgba(255, 0, 124, 0.25)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 25px rgba(255, 0, 124, 0.4)",
  "--uiv-app-glass-blur": "blur(0px)",
  // Extended Reference Tokens
  "--uiv-color-primary": "#ff007c",
  "--uiv-color-success": "#00ffcc",
  "--uiv-color-warning": "#f59e0b",
  "--uiv-color-danger": "#ef4444",
  "--uiv-color-info": "#bc00ff"
}, Le = {
  button: {
    "--uiv-button-primary": "var(--uiv-primary-color)",
    "--uiv-button-shadow": "var(--uiv-secondary-color)",
    "--uiv-button-accent": "var(--uiv-accent-color)"
  },
  input: {
    "--uiv-input-border": "var(--uiv-primary-color)",
    "--uiv-input-bg": "var(--uiv-bg-color)",
    "--uiv-input-text": "var(--uiv-text-color)"
  },
  radio: {
    "--uiv-radio-accent": "var(--uiv-primary-color)"
  },
  slider: {
    "--uiv-slider-primary": "var(--uiv-primary-color)",
    "--uiv-slider-secondary": "var(--uiv-secondary-color)"
  }
};
class je extends f {
  constructor() {
    super("cyber", "Cyberpunk", Ie), this.componentTokens = Le;
  }
  getBaseStyles() {
    return d`
            :host {
                font-family: 'Inter', system-ui, sans-serif;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }

            .uiv-cyber-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                position: relative;
                clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
                box-shadow: 0 0 20px rgba(255, 0, 124, 0.1);
                transition: all 0.3s ease;
            }

            .uiv-cyber-card:hover {
                box-shadow: 0 0 30px rgba(0, 255, 204, 0.2);
                border-color: var(--uiv-secondary-color);
            }

            .uiv-cyber-text {
                color: var(--uiv-primary-color);
                text-shadow: 0 0 10px var(--uiv-primary-color);
                font-weight: bold;
            }

            .uiv-cyber-text-secondary {
                color: var(--uiv-secondary-color);
                text-shadow: 0 0 5px var(--uiv-secondary-color);
            }

            @keyframes cyber-scan {
                0% { top: -100%; }
                100% { top: 100%; }
            }

            .uiv-cyber-scan::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: var(--uiv-secondary-color);
                opacity: 0.2;
                box-shadow: 0 0 10px var(--uiv-secondary-color);
                animation: cyber-scan 3s linear infinite;
                pointer-events: none;
            }
        `;
  }
}
const We = new je(), Ge = {
  // Core Palette
  "--uiv-primary-color": "#e0f2fe",
  "--uiv-secondary-color": "#0ea5e9",
  "--uiv-accent-color": "#38bdf8",
  "--uiv-bg-color": "#02041a",
  "--uiv-surface-color": "rgba(2, 4, 32, 0.6)",
  "--uiv-text-color": "#ffffff",
  "--uiv-text-muted": "rgba(255, 255, 255, 0.5)",
  "--uiv-border-color": "rgba(255, 255, 255, 0.15)",
  // Advanced Semantic Tokens
  "--uiv-bg-main": "#02041a",
  "--uiv-bg-surface": "rgba(255, 255, 255, 0.02)",
  "--uiv-bg-overlay": "rgba(255, 255, 255, 0.1)",
  "--uiv-glass-blur": "blur(40px) saturate(200%)",
  "--uiv-shimmer-intensity": "0.5",
  // App Dashboard Tokens
  "--uiv-app-bg": "#02041a",
  "--uiv-bg-primary": "#02041a",
  "--uiv-app-sidebar-bg": "rgba(2, 4, 32, 0.4)",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-header-bg": "rgba(2, 4, 32, 0.4)",
  "--uiv-app-card-bg": "rgba(255, 255, 255, 0.01)",
  "--uiv-app-text-color": "#ffffff",
  "--uiv-app-text-muted": "rgba(255, 255, 255, 0.6)",
  "--uiv-app-accent-color": "#38bdf8",
  "--uiv-app-accent-transparent": "rgba(56, 189, 248, 0.15)",
  "--uiv-app-border-color": "rgba(255, 255, 255, 0.08)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 25px rgba(56, 189, 248, 0.3)",
  "--uiv-app-glass-blur": "blur(40px) saturate(200%)"
}, Ve = {
  button: {
    "--uiv-button-primary": "var(--uiv-primary-color)",
    "--uiv-button-bg": "var(--uiv-bg-color)",
    "--uiv-button-text": "var(--uiv-text-color)",
    "--uiv-button-border": "var(--uiv-border-color)"
  },
  table: {
    "--uiv-table-bg": "rgba(255, 255, 255, 0.05)",
    "--uiv-table-border": "var(--uiv-border-color)",
    "--uiv-table-header-bg": "rgba(255, 255, 255, 0.1)",
    "--uiv-table-row-hover": "rgba(255, 255, 255, 0.15)"
  },
  expansion: {
    "--uiv-expansion-bg": "var(--uiv-bg-color)",
    "--uiv-expansion-blur": "var(--uiv-glass-blur)",
    "--uiv-expansion-border": "var(--uiv-border-color)"
  },
  radio: {
    "--uiv-radio-accent": "var(--uiv-primary-color)"
  }
};
class qe extends f {
  constructor() {
    super("glass", "Glassmorphism", Ge), this.componentTokens = Ve;
  }
  getBaseStyles() {
    return d`
            :host {
                font-family: 'Inter', system-ui, sans-serif;
                --glass-grad: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            }

            .uiv-glass-card {
                background: var(--uiv-surface-color);
                backdrop-filter: blur(var(--uiv-glass-blur));
                -webkit-backdrop-filter: blur(var(--uiv-glass-blur));
                border: 1px solid var(--uiv-border-color);
                border-radius: 16px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            }

            .uiv-glass-text {
                color: var(--uiv-text-color);
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            }

            .uiv-glass-text-secondary {
                color: var(--uiv-secondary-color);
            }

            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }

            .uiv-glass-shimmer::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
                animation: shimmer 3s infinite;
                pointer-events: none;
            }

            .uiv-glass-border-glow {
                box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.05), 0 0 10px rgba(14, 165, 233, 0.2);
            }
        `;
  }
}
const Ze = new qe(), Z = {
  id: "modern",
  name: "Modern Minimal",
  tokens: {
    // Core Palette
    "--uiv-primary-color": "#f59e0b",
    "--uiv-secondary-color": "#6366f1",
    "--uiv-accent-color": "#10b981",
    "--uiv-bg-color": "#000000",
    "--uiv-surface-color": "#121212",
    "--uiv-text-color": "#f8fafc",
    "--uiv-text-muted": "#64748b",
    "--uiv-border-color": "#262626",
    // Advanced Semantic Tokens
    "--uiv-bg-main": "#000000",
    "--uiv-bg-surface": "#111111",
    "--uiv-bg-overlay": "rgba(245, 158, 11, 0.05)",
    "--uiv-shadow-depth": "0 20px 50px rgba(0,0,0,0.5)",
    "--uiv-metallic-shine": "linear-gradient(110deg, #121212 45%, #1ed4d6 50%, #121212 55%)",
    // App Dashboard Tokens
    "--uiv-app-bg": "#000000",
    "--uiv-bg-primary": "#000000",
    "--uiv-app-sidebar-bg": "#0a0a0a",
    "--uiv-app-sidebar-text": "#f8fafc",
    "--uiv-app-header-bg": "#0f0f0f",
    "--uiv-app-card-bg": "#111111",
    "--uiv-app-input-bg": "rgba(255, 255, 255, 0.05)",
    "--uiv-app-text-color": "#f8fafc",
    "--uiv-app-text-muted": "rgba(255, 255, 255, 0.6)",
    "--uiv-app-accent-color": "#f59e0b",
    "--uiv-app-accent-transparent": "rgba(245, 158, 11, 0.15)",
    "--uiv-app-border-color": "#262626",
    "--uiv-app-hover-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 158, 11, 0.2)",
    "--uiv-app-glass-blur": "blur(0px)"
  }
}, Ye = {
  button: {
    "--uiv-button-bg": "var(--uiv-modern-primary)",
    "--uiv-button-text": "#ffffff"
  },
  input: {
    "--uiv-input-focus": "var(--uiv-modern-primary)",
    "--uiv-input-border": "var(--uiv-modern-border)",
    "--uiv-input-text": "var(--uiv-modern-text)",
    "--uiv-input-label": "var(--uiv-modern-label)"
  },
  slider: {
    "--uiv-slider-accent": "var(--uiv-modern-primary)",
    "--uiv-slider-track": "#eee"
  },
  expansion: {
    "--uiv-expansion-bg": "var(--uiv-modern-bg)",
    "--uiv-expansion-border": "var(--uiv-modern-border)",
    "--uiv-expansion-accent": "var(--uiv-modern-primary)"
  }
};
class Fe extends f {
  constructor() {
    super(Z.id, Z.name, Z.tokens), this.componentTokens = Ye;
  }
  getBaseStyles() {
    return d`
            :host {
                font-family: 'Outfit', 'Inter', system-ui, sans-serif;
                color: var(--uiv-text-color);
            }

            .uiv-modern-surface {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: 12px;
                box-shadow: var(--uiv-shadow-depth);
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .uiv-modern-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: 12px;
                box-shadow: var(--uiv-shadow-depth);
            }

            .uiv-modern-text {
                color: var(--uiv-primary-color);
                font-weight: 500;
            }

            .uiv-modern-text-secondary {
                color: var(--uiv-text-muted);
            }

            .uiv-modern-surface:hover {
                transform: translateY(-4px) scale(1.01);
                border-color: var(--uiv-primary-color);
            }
        `;
  }
}
const te = new Fe(), Y = {
  id: "retro",
  name: "Retro 3D",
  tokens: {
    // Core Palette
    "--uiv-primary-color": "#39ff14",
    "--uiv-secondary-color": "#003300",
    "--uiv-accent-color": "#ffb000",
    "--uiv-bg-color": "#001100",
    "--uiv-surface-color": "#002200",
    "--uiv-text-color": "#39ff14",
    "--uiv-text-muted": "#008800",
    "--uiv-border-color": "#39ff14",
    // Advanced Semantic Tokens
    "--uiv-bg-main": "#000800",
    "--uiv-bg-surface": "#001100",
    "--uiv-bg-overlay": "rgba(0, 255, 20, 0.1)",
    "--uiv-phosphor-glow": "0 0 8px rgba(57, 255, 20, 0.8)",
    // App Dashboard Tokens
    "--uiv-app-bg": "#000500",
    "--uiv-bg-primary": "#000500",
    "--uiv-app-sidebar-bg": "#001a00",
    "--uiv-app-sidebar-text": "#39ff14",
    "--uiv-app-header-bg": "#001a00",
    "--uiv-app-card-bg": "#001100",
    "--uiv-app-input-bg": "rgba(57, 255, 20, 0.1)",
    "--uiv-app-text-color": "#39ff14",
    "--uiv-app-text-muted": "#00ff00",
    "--uiv-app-accent-color": "#39ff14",
    "--uiv-app-accent-transparent": "rgba(57, 255, 20, 0.15)",
    "--uiv-app-border-color": "#003300",
    "--uiv-app-hover-shadow": "10px 10px 0px #000, 0 0 20px rgba(57, 255, 20, 0.4)",
    "--uiv-app-glass-blur": "blur(0px)"
  }
}, Je = {
  button: {
    "--uiv-button-primary": "var(--uiv-primary-color)",
    "--uiv-button-border": "var(--uiv-border-color)"
  },
  table: {
    "--uiv-table-border": "var(--uiv-border-color)",
    "--uiv-table-bg": "var(--uiv-bg-color)",
    "--uiv-table-accent": "var(--uiv-primary-color)",
    "--uiv-table-shadow": "4px 4px 0px #000"
  },
  expansion: {
    "--uiv-expansion-bg": "var(--uiv-bg-color)",
    "--uiv-expansion-border": "var(--uiv-border-color)",
    "--uiv-expansion-accent": "var(--uiv-primary-color)",
    "--uiv-expansion-shadow": "4px 4px 0px #000"
  },
  radio: {
    "--uiv-radio-accent": "var(--uiv-primary-color)"
  }
};
class Ke extends f {
  constructor() {
    super(Y.id, Y.name, Y.tokens), this.componentTokens = Je;
  }
  getBaseStyles() {
    return d`
            :host {
                font-family: 'Courier New', Courier, monospace;
                text-transform: uppercase;
                background: var(--uiv-bg-main);
                position: relative;
            }

            /* Screen Curvature & Scanlines Overlay */
            :host::before {
                content: " ";
                display: block;
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                z-index: 2;
                background-size: 100% 4px, 3px 100%;
                pointer-events: none;
                opacity: 0.3;
            }

            @keyframes flicker {
                0% { opacity: 0.97; }
                5% { opacity: 0.95; }
                10% { opacity: 0.9; }
                15% { opacity: 0.95; }
                30% { opacity: 0.98; }
                100% { opacity: 1; }
            }

            .uiv-retro-text {
                color: var(--uiv-primary-color);
                text-shadow: var(--uiv-phosphor-glow);
                animation: flicker 0.1s infinite;
            }

            .uiv-retro-text-secondary {
                color: var(--uiv-text-muted);
                text-shadow: 0 0 3px var(--uiv-text-muted);
            }

            /* Alias for blocky cards */
            .uiv-retro-card {
                background: var(--uiv-bg-surface);
                border: 2px solid var(--uiv-primary-color);
                box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.5), 5px 5px 0px #000;
            }

            .uiv-retro-border {
                border: 2px solid var(--uiv-primary-color);
                box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.5), 0 0 10px rgba(57, 255, 20, 0.5);
            }
        `;
  }
}
const Xe = new Ke(), F = {
  id: "neon",
  name: "Neon Glow",
  tokens: {
    // Core Palette
    "--uiv-primary-color": "#39ff14",
    "--uiv-secondary-color": "#fe019a",
    "--uiv-accent-color": "#00fbff",
    "--uiv-bg-color": "#050505",
    "--uiv-surface-color": "#0f0f0f",
    "--uiv-text-color": "#ffffff",
    "--uiv-text-muted": "#777777",
    "--uiv-border-color": "rgba(57, 255, 20, 0.4)",
    // Advanced Semantic Tokens
    "--uiv-bg-main": "#000000",
    "--uiv-bg-surface": "#080808",
    "--uiv-bg-overlay": "rgba(0, 251, 255, 0.05)",
    "--uiv-glow-intensity": "1.5",
    "--uiv-pulse-speed": "2s",
    // App Dashboard Tokens
    "--uiv-app-bg": "#000000",
    "--uiv-app-sidebar-bg": "#0a0a0a",
    "--uiv-app-sidebar-text": "#ffffff",
    "--uiv-app-header-bg": "#0f0f0f",
    "--uiv-app-card-bg": "#111111",
    "--uiv-app-input-bg": "rgba(255, 255, 255, 0.05)",
    "--uiv-app-text-color": "#f8fafc",
    "--uiv-app-text-muted": "rgba(255, 255, 255, 0.6)",
    "--uiv-app-accent-color": "#39ff14",
    "--uiv-app-accent-transparent": "rgba(57, 255, 20, 0.15)",
    "--uiv-app-border-color": "rgba(57, 255, 20, 0.3)",
    "--uiv-app-hover-shadow": "0 30px 60px -12px rgba(57, 255, 20, 0.3), 0 0 20px rgba(57, 255, 20, 0.2)",
    "--uiv-app-glass-blur": "blur(0px)",
    // Extended Reference Tokens
    "--uiv-bg-primary": "#000000",
    "--uiv-color-success": "#00ffcc",
    "--uiv-color-warning": "#f0abfc",
    "--uiv-color-danger": "#fe019a",
    "--uiv-color-info": "#00fbff"
  }
}, Qe = {
  button: {
    "--uiv-button-primary": "var(--uiv-primary-color)",
    "--uiv-button-glow": "rgba(0, 251, 255, 0.4)"
  },
  input: {
    "--uiv-input-primary": "var(--uiv-primary-color)",
    "--uiv-input-text": "var(--uiv-text-color)"
  },
  radio: {
    "--uiv-radio-accent": "var(--uiv-secondary-color)"
  },
  slider: {
    "--uiv-slider-primary": "var(--uiv-primary-color)",
    "--uiv-slider-track": "#333"
  }
};
class er extends f {
  constructor() {
    super(F.id, F.name, F.tokens), this.componentTokens = Qe;
  }
  getBaseStyles() {
    return d`
            :host {
                font-family: 'Inter', system-ui, sans-serif;
                --neon-glow: 0 0 calc(5px * var(--uiv-glow-intensity)) var(--uiv-primary-color),
                             0 0 calc(100% * var(--uiv-glow-intensity)) var(--uiv-primary-color);
            }

            @keyframes neon-pulse {
                0%, 100% { filter: brightness(1); box-shadow: 0 0 10px var(--uiv-primary-color); }
                50% { filter: brightness(1.3); box-shadow: 0 0 25px var(--uiv-primary-color); }
            }

            .uiv-neon-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                box-shadow: 0 0 15px rgba(57, 255, 20, 0.1);
                animation: neon-pulse var(--uiv-pulse-speed) ease-in-out infinite;
            }

            .uiv-neon-text {
                color: var(--uiv-primary-color);
                text-shadow: 0 0 10px var(--uiv-primary-color);
            }

            .uiv-neon-text-secondary {
                color: var(--uiv-secondary-color);
                text-shadow: 0 0 5px var(--uiv-secondary-color);
            }

            .uiv-neon-accent-pulse {
                animation: neon-pulse calc(var(--uiv-pulse-speed) * 0.8) ease-in-out infinite reverse;
                color: var(--uiv-secondary-color);
                text-shadow: 0 0 10px var(--uiv-secondary-color);
            }
        `;
  }
}
const rr = new er(), J = {
  id: "light",
  name: "Clean Light",
  tokens: {
    "--uiv-primary-color": "#8b5cf6",
    "--uiv-secondary-color": "#64748b",
    "--uiv-accent-color": "#d946ef",
    "--uiv-bg-color": "#f8fafc",
    "--uiv-surface-color": "#ffffff",
    "--uiv-bg-surface": "#ffffff",
    "--uiv-text-color": "#1e293b",
    "--uiv-text-muted": "#64748b",
    "--uiv-border-color": "#e2e8f0",
    "--uiv-glow-intensity": "0.15",
    "--uiv-border-glow": "0 0 15px rgba(139, 92, 246, 0.1)",
    "--uiv-shadow-depth": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    "--uiv-glass-blur": "blur(12px)",
    // Extended Reference Tokens
    "--uiv-bg-primary": "#f8fafc",
    "--uiv-bg-secondary": "#f1f5f9",
    "--uiv-bg-tertiary": "#e2e8f0",
    "--uiv-bg-inverse": "#1e293b",
    "--uiv-surface-primary": "#ffffff",
    "--uiv-surface-secondary": "#f9fafb",
    "--uiv-surface-elevated": "#ffffff",
    "--uiv-text-primary": "#1e293b",
    "--uiv-text-secondary": "#64748b",
    "--uiv-text-tertiary": "#94a3b8",
    "--uiv-text-inverse": "#ffffff",
    "--uiv-text-disabled": "#cbd5e1",
    "--uiv-color-primary": "#8b5cf6",
    "--uiv-color-primary-hover": "#7c3aed",
    "--uiv-color-primary-active": "#6d28d9",
    "--uiv-color-secondary": "#475569",
    "--uiv-color-success": "#10b981",
    "--uiv-color-warning": "#f59e0b",
    "--uiv-color-danger": "#ef4444",
    "--uiv-color-info": "#0ea5e9",
    "--uiv-btn-bg": "var(--uiv-color-primary)",
    "--uiv-btn-text": "#ffffff",
    "--uiv-input-bg": "#ffffff",
    "--uiv-input-border": "#e2e8f0",
    // App Tokens
    "--uiv-app-bg": "#f8fafc",
    "--uiv-app-sidebar-bg": "#f1f5f9",
    "--uiv-app-sidebar-text": "#1e293b",
    "--uiv-app-header-bg": "rgba(255, 255, 255, 0.8)",
    "--uiv-app-card-bg": "#ffffff",
    "--uiv-app-input-bg": "#ffffff",
    "--uiv-app-accent-color": "#8b5cf6",
    "--uiv-app-accent-transparent": "rgba(139, 92, 246, 0.08)",
    "--uiv-app-text-color": "#1e293b",
    "--uiv-app-text-muted": "#64748b",
    "--uiv-app-border-color": "rgba(226, 232, 240, 0.8)",
    "--uiv-app-hover-shadow": "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 8px 10px -6px rgba(139, 92, 246, 0.1)",
    "--uiv-app-glass-blur": "blur(12px)"
  }
};
class tr extends f {
  constructor() {
    super(J.id, J.name, J.tokens);
  }
  getBaseStyles() {
    return d`
            .uiv-light-theme {
                --uiv-primary-color: ${_(this.globalTokens["--uiv-primary-color"])};
            }

            .uiv-light-card {
                background: var(--uiv-surface-color);
                border: 1px solid var(--uiv-border-color);
                border-radius: 8px;
                box-shadow: var(--uiv-shadow-depth);
                transition: all 0.3s ease;
            }

            .uiv-light-card:hover {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }

            .uiv-light-text {
                color: var(--uiv-text-color);
            }

            .uiv-light-text-secondary {
                color: var(--uiv-text-muted);
            }
        `;
  }
}
const ir = new tr(), H = {
  id: "dark",
  name: "Obsidian Azure",
  tokens: {
    "--uiv-primary-color": "#3b82f6",
    "--uiv-secondary-color": "#94a3b8",
    "--uiv-accent-color": "#60a5fa",
    "--uiv-bg-color": "#0f172a",
    "--uiv-surface-color": "#1e293b",
    "--uiv-bg-surface": "#1e293b",
    "--uiv-text-color": "#f1f5f9",
    "--uiv-text-muted": "#cbd5e1",
    "--uiv-border-color": "#334155",
    "--uiv-glow-intensity": "0.3",
    "--uiv-border-glow": "0 0 20px rgba(59, 130, 246, 0.1)",
    "--uiv-shadow-depth": "0 10px 15px rgba(0,0,0,0.5)",
    "--uiv-glass-blur": "12px",
    // Extended Reference Tokens
    "--uiv-bg-primary": "#0f172a",
    "--uiv-bg-secondary": "#1e293b",
    "--uiv-bg-tertiary": "#334155",
    "--uiv-bg-inverse": "#ffffff",
    "--uiv-surface-primary": "#1e293b",
    "--uiv-surface-secondary": "#0f172a",
    "--uiv-surface-elevated": "#1e293b",
    "--uiv-text-primary": "#f1f5f9",
    "--uiv-text-secondary": "#cbd5f5",
    "--uiv-text-tertiary": "#94a3b8",
    "--uiv-text-inverse": "#0f172a",
    "--uiv-text-disabled": "#64748b",
    "--uiv-color-primary": "#3b82f6",
    "--uiv-color-primary-hover": "#2563eb",
    "--uiv-color-primary-active": "#1d4ed8",
    "--uiv-color-secondary": "#94a3b8",
    "--uiv-color-success": "#22c55e",
    "--uiv-color-warning": "#fbbf24",
    "--uiv-color-danger": "#ef4444",
    "--uiv-color-info": "#38bdf8",
    "--uiv-btn-bg": "var(--uiv-color-primary)",
    "--uiv-btn-text": "#ffffff",
    "--uiv-input-bg": "#0f172a",
    "--uiv-input-border": "#475569",
    // App Tokens
    "--uiv-app-bg": "#0f172a",
    "--uiv-app-sidebar-bg": "#1e293b",
    "--uiv-app-sidebar-text": "#f1f5f9",
    "--uiv-app-header-bg": "#0f172a",
    "--uiv-app-card-bg": "#1e293b",
    "--uiv-app-input-bg": "#0f172a",
    "--uiv-app-accent-color": "#3b82f6",
    "--uiv-app-accent-transparent": "rgba(59, 130, 246, 0.2)",
    "--uiv-app-text-color": "#f1f5f9",
    "--uiv-app-text-muted": "#94a3b8",
    "--uiv-app-border-color": "#334155",
    "--uiv-app-hover-shadow": "0 10px 15px rgba(0,0,0,0.6)",
    "--uiv-app-glass-blur": "blur(12px)"
  }
};
class or extends f {
  constructor() {
    super(H.id, H.name, H.tokens);
  }
  getBaseStyles() {
    return d`
            .uiv-dark-theme {
                --uiv-primary-color: ${_(H.tokens["--uiv-primary-color"])};
            }

            .uiv-dark-card {
                background: var(--uiv-surface-color);
                border: 1px solid var(--uiv-border-color);
                border-radius: 8px;
                box-shadow: var(--uiv-shadow-depth);
            }

            .uiv-dark-text {
                color: var(--uiv-text-color);
            }

            .uiv-dark-text-secondary {
                color: var(--uiv-text-muted);
            }
        `;
  }
}
const ar = new or(), R = {
  id: "corporate",
  name: "Corporate Pro",
  tokens: {
    "--uiv-primary-color": "#0047ab",
    "--uiv-secondary-color": "#6b7280",
    "--uiv-accent-color": "#0047ab",
    "--uiv-bg-color": "#f4f6f9",
    "--uiv-surface-color": "#ffffff",
    "--uiv-bg-surface": "#ffffff",
    "--uiv-text-color": "#1f2937",
    "--uiv-text-muted": "#4b5563",
    "--uiv-border-color": "#d1d5db",
    "--uiv-glow-intensity": "0.3",
    "--uiv-border-glow": "0 0 15px rgba(0, 71, 171, 0.2)",
    "--uiv-shadow-depth": "0 8px 16px rgba(0,0,0,0.1)",
    "--uiv-glass-blur": "0px",
    // Extended Reference Tokens
    "--uiv-bg-primary": "#f4f6f9",
    "--uiv-bg-secondary": "#e6ebf1",
    "--uiv-bg-tertiary": "#d1d9e6",
    "--uiv-bg-inverse": "#1a1a1a",
    "--uiv-surface-primary": "#ffffff",
    "--uiv-surface-secondary": "#f9fafb",
    "--uiv-surface-elevated": "#ffffff",
    "--uiv-text-primary": "#1a1a1a",
    "--uiv-text-secondary": "#4a5568",
    "--uiv-text-tertiary": "#718096",
    "--uiv-text-inverse": "#ffffff",
    "--uiv-text-disabled": "#a0aec0",
    "--uiv-color-primary": "#0047ab",
    "--uiv-color-primary-hover": "#003a8c",
    "--uiv-color-primary-active": "#002f6c",
    "--uiv-color-secondary": "#64748b",
    "--uiv-color-success": "#2e7d32",
    "--uiv-color-warning": "#ed6c02",
    "--uiv-color-danger": "#d32f2f",
    "--uiv-color-info": "#0288d1",
    "--uiv-btn-bg": "var(--uiv-color-primary)",
    "--uiv-btn-text": "#ffffff",
    "--uiv-input-bg": "#ffffff",
    "--uiv-input-border": "#9ca3af",
    // App Tokens
    "--uiv-app-bg": "#f4f6f9",
    "--uiv-app-sidebar-bg": "#1f2937",
    "--uiv-app-sidebar-text": "#ffffff",
    "--uiv-app-header-bg": "#ffffff",
    "--uiv-app-card-bg": "#ffffff",
    "--uiv-app-input-bg": "#ffffff",
    "--uiv-app-accent-color": "#0047ab",
    "--uiv-app-accent-transparent": "rgba(0, 71, 171, 0.15)",
    "--uiv-app-text-color": "#1a1a1a",
    "--uiv-app-text-muted": "#4a5568",
    "--uiv-app-border-color": "#d1d5db",
    "--uiv-app-hover-shadow": "0 20px 40px -10px rgba(0, 71, 171, 0.25)",
    "--uiv-app-glass-blur": "blur(0px)"
  }
};
class sr extends f {
  constructor() {
    super(R.id, R.name, R.tokens);
  }
  getBaseStyles() {
    return d`
            .uiv-corporate-theme {
                --uiv-primary-color: ${_(R.tokens["--uiv-primary-color"])};
                font-family: 'Inter', 'Segoe UI', sans-serif;
            }

            .uiv-corporate-card {
                background: #ffffff;
                border: 1px solid var(--uiv-border-color);
                border-radius: 4px;
                box-shadow: var(--uiv-shadow-depth);
            }

            .uiv-corporate-text {
                color: var(--uiv-text-color);
                font-weight: 500;
            }

            .uiv-corporate-text-secondary {
                color: var(--uiv-text-muted);
            }
        `;
  }
}
const nr = new sr(), z = {
  id: "wealth",
  name: "Wealth & Luxury",
  tokens: {
    "--uiv-primary-color": "#d4af37",
    // Gold
    "--uiv-secondary-color": "#1a3a32",
    // Deep Forest
    "--uiv-accent-color": "#ffffff",
    "--uiv-bg-color": "#0a0a0a",
    "--uiv-surface-color": "#111827",
    "--uiv-bg-surface": "#1f2937",
    "--uiv-text-color": "#ffffff",
    "--uiv-text-muted": "#9ca3af",
    "--uiv-border-color": "#d4af3733",
    "--uiv-glow-intensity": "0.5",
    "--uiv-border-glow": "0 0 20px rgba(212, 175, 55, 0.2)",
    "--uiv-shadow-depth": "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
    "--uiv-glass-blur": "10px",
    "--uiv-app-bg": "#020617",
    "--uiv-app-sidebar-bg": "#111827",
    "--uiv-app-sidebar-text": "#ffffff",
    "--uiv-app-header-bg": "#020617",
    "--uiv-app-card-bg": "rgba(15, 23, 42, 0.6)",
    "--uiv-app-input-bg": "rgba(15, 23, 42, 0.4)",
    "--uiv-app-accent-color": "#d4af37",
    "--uiv-app-accent-transparent": "rgba(212, 175, 55, 0.15)",
    "--uiv-app-text-color": "#ffffff",
    "--uiv-app-text-muted": "#d4af37",
    "--uiv-app-border-color": "rgba(212, 175, 55, 0.2)",
    "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(212, 175, 55, 0.2), 0 0 20px rgba(212, 175, 55, 0.1)",
    "--uiv-app-glass-blur": "blur(10px)"
  }
};
class ur extends f {
  constructor() {
    super(z.id, z.name, z.tokens);
  }
  getBaseStyles() {
    return d`
            .uiv-wealth-theme {
                --uiv-primary-color: ${_(z.tokens["--uiv-primary-color"])};
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            }

            .uiv-wealth-card {
                background: linear-gradient(145deg, #111827, #1f2937);
                border: 1px solid var(--uiv-primary-color);
                border-radius: 0px;
                box-shadow: var(--uiv-shadow-depth);
                position: relative;
            }

            .uiv-wealth-card::after {
                content: '';
                position: absolute;
                inset: 1px;
                border: 1px solid rgba(212, 175, 55, 0.1);
                pointer-events: none;
            }

            .uiv-wealth-text {
                color: var(--uiv-primary-color);
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
            }

            .uiv-wealth-text-secondary {
                color: #ffffff;
                opacity: 0.8;
            }
        `;
  }
}
const cr = new ur(), B = {
  id: "nature",
  name: "Eco Nature",
  tokens: {
    "--uiv-primary-color": "#166534",
    // Forest Green
    "--uiv-secondary-color": "#78350f",
    // Earth Brown
    "--uiv-accent-color": "#84cc16",
    // Lime
    "--uiv-bg-color": "#fefce8",
    // Beige
    "--uiv-surface-color": "#f0fdf4",
    "--uiv-bg-surface": "#dcfce7",
    "--uiv-text-color": "#064e3b",
    "--uiv-text-muted": "#374151",
    "--uiv-border-color": "#16653433",
    "--uiv-glow-intensity": "0.3",
    "--uiv-border-glow": "0 0 15px rgba(22, 101, 52, 0.1)",
    "--uiv-shadow-depth": "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
    "--uiv-glass-blur": "0px",
    "--uiv-app-bg": "#021a11",
    "--uiv-app-sidebar-bg": "#022c22",
    "--uiv-app-sidebar-text": "#ecfdf5",
    "--uiv-app-header-bg": "#021a11",
    "--uiv-app-card-bg": "rgba(6, 78, 59, 0.6)",
    "--uiv-app-input-bg": "rgba(2, 44, 34, 0.4)",
    "--uiv-app-accent-color": "#10b981",
    "--uiv-app-accent-transparent": "rgba(16, 185, 129, 0.15)",
    "--uiv-app-text-color": "#ecfdf5",
    "--uiv-app-text-muted": "#6ee7b7",
    "--uiv-app-border-color": "rgba(16, 185, 129, 0.25)",
    "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #10b981",
    "--uiv-app-glass-blur": "blur(0px)"
  }
};
class vr extends f {
  constructor() {
    super(B.id, B.name, B.tokens);
  }
  getBaseStyles() {
    return d`
            .uiv-nature-theme {
                --uiv-primary-color: ${_(B.tokens["--uiv-primary-color"])};
            }

            .uiv-nature-card {
                background: var(--uiv-surface-color);
                border: 2px solid var(--uiv-border-color);
                border-radius: 24px;
                box-shadow: var(--uiv-shadow-depth);
                transition: transform 0.3s ease;
            }

            .uiv-nature-card:hover {
                transform: scale(1.02);
            }

            .uiv-nature-text {
                color: var(--uiv-primary-color);
                font-family: 'Outfit', sans-serif;
            }

            .uiv-nature-text-secondary {
                color: var(--uiv-secondary-color);
            }
        `;
  }
}
const pr = new vr(), X = {
  cyber: We,
  glass: Ze,
  modern: te,
  retro: Xe,
  neon: rr,
  light: ir,
  dark: ar,
  corporate: nr,
  wealth: cr,
  nature: pr
};
class be {
  constructor() {
    this.id = "zero-uiv-themes", this.name = "Zero UIV Default Provider";
  }
  getThemeNames() {
    return Object.keys(X);
  }
  getTheme(e) {
    return X[e] || te;
  }
}
const lr = () => {
  window.zeroThemeManager && window.zeroThemeManager.registerProvider(new be()), window.addEventListener("zero-orchestrator-ready", () => {
    var o;
    console.log("[Theme] Orchestrator ready event received - Registering provider"), (o = window.zeroThemeManager) == null || o.registerProvider(new be());
  });
};
lr();
function br(o) {
  return X[o] || te;
}
export {
  f as BaseTheme,
  sr as CorporateTheme,
  je as CyberTheme,
  or as DarkTheme,
  qe as GlassTheme,
  tr as LightTheme,
  Fe as ModernTheme,
  vr as NatureTheme,
  er as NeonTheme,
  Ke as RetroTheme,
  ur as WealthTheme,
  be as ZeroUivThemeProvider,
  nr as corporateTheme,
  fe as createThemeStyles,
  We as cyberTheme,
  ar as darkTheme,
  br as getTheme,
  Ze as glassTheme,
  ir as lightTheme,
  Ye as modernComponentTokens,
  Z as modernGlobalTokens,
  te as modernTheme,
  pr as natureTheme,
  Qe as neonComponentTokens,
  F as neonGlobalTokens,
  rr as neonTheme,
  Je as retroComponentTokens,
  Y as retroGlobalTokens,
  Xe as retroTheme,
  X as themeRegistry,
  cr as wealthTheme
};
