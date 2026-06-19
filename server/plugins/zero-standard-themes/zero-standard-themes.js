/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, q = R.ShadowRoot && (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Z = Symbol(), J = /* @__PURE__ */ new WeakMap();
let pe = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Z) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (q && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = J.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && J.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const w = (a) => new pe(typeof a == "string" ? a : a + "", void 0, Z), T = (a, ...e) => {
  const t = a.length === 1 ? a[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + a[o + 1], a[0]);
  return new pe(t, a, Z);
}, be = (a, e) => {
  if (q) a.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), i = R.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, a.appendChild(r);
  }
}, K = q ? (a) => a : (a) => a instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return w(t);
})(a) : a;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ge, defineProperty: me, getOwnPropertyDescriptor: xe, getOwnPropertyNames: $e, getOwnPropertySymbols: ye, getPrototypeOf: _e } = Object, m = globalThis, Y = m.trustedTypes, Ae = Y ? Y.emptyScript : "", D = m.reactiveElementPolyfillSupport, P = (a, e) => a, V = { toAttribute(a, e) {
  switch (e) {
    case Boolean:
      a = a ? Ae : null;
      break;
    case Object:
    case Array:
      a = a == null ? a : JSON.stringify(a);
  }
  return a;
}, fromAttribute(a, e) {
  let t = a;
  switch (e) {
    case Boolean:
      t = a !== null;
      break;
    case Number:
      t = a === null ? null : Number(a);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(a);
      } catch {
        t = null;
      }
  }
  return t;
} }, ue = (a, e) => !ge(a, e), F = { attribute: !0, type: String, converter: V, reflect: !1, useDefault: !1, hasChanged: ue };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let A = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = F) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(e, r, t);
      i !== void 0 && me(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: i, set: o } = xe(this.prototype, e) ?? { get() {
      return this[t];
    }, set(s) {
      this[t] = s;
    } };
    return { get: i, set(s) {
      const p = i == null ? void 0 : i.call(this);
      o == null || o.call(this, s), this.requestUpdate(e, p, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? F;
  }
  static _$Ei() {
    if (this.hasOwnProperty(P("elementProperties"))) return;
    const e = _e(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(P("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(P("properties"))) {
      const t = this.properties, r = [...$e(t), ...ye(t)];
      for (const i of r) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, i] of t) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const i = this._$Eu(t, r);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r) t.unshift(K(i));
    } else e !== void 0 && t.push(K(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return be(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var o;
    const r = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, r);
    if (i !== void 0 && r.reflect === !0) {
      const s = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : V).toAttribute(t, r.type);
      this._$Em = e, s == null ? this.removeAttribute(i) : this.setAttribute(i, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var o, s;
    const r = this.constructor, i = r._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const p = r.getPropertyOptions(i), n = typeof p.converter == "function" ? { fromAttribute: p.converter } : ((o = p.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? p.converter : V;
      this._$Em = i;
      const c = n.fromAttribute(t, p.type);
      this[i] = c ?? ((s = this._$Ej) == null ? void 0 : s.get(i)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, i = !1, o) {
    var s;
    if (e !== void 0) {
      const p = this.constructor;
      if (i === !1 && (o = this[e]), r ?? (r = p.getPropertyOptions(e)), !((r.hasChanged ?? ue)(o, t) || r.useDefault && r.reflect && o === ((s = this._$Ej) == null ? void 0 : s.get(e)) && !this.hasAttribute(p._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: i, wrapped: o }, s) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, s ?? t ?? this[e]), o !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, s] of this._$Ep) this[o] = s;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, s] of i) {
        const { wrapped: p } = s, n = this[o];
        p !== !0 || this._$AL.has(o) || n === void 0 || this.C(o, void 0, s, n);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[P("elementProperties")] = /* @__PURE__ */ new Map(), A[P("finalized")] = /* @__PURE__ */ new Map(), D == null || D({ ReactiveElement: A }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, Q = (a) => a, j = k.trustedTypes, X = j ? j.createPolicy("lit-html", { createHTML: (a) => a }) : void 0, ce = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + g, we = `<${le}>`, _ = document, U = () => _.createComment(""), O = (a) => a === null || typeof a != "object" && typeof a != "function", G = Array.isArray, Se = (a) => G(a) || typeof (a == null ? void 0 : a[Symbol.iterator]) == "function", B = `[ 	
\f\r]`, C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ee = /-->/g, te = />/g, x = RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), re = /'/g, ie = /"/g, de = /^(?:script|style|textarea|title)$/i, S = Symbol.for("lit-noChange"), l = Symbol.for("lit-nothing"), ae = /* @__PURE__ */ new WeakMap(), $ = _.createTreeWalker(_, 129);
function fe(a, e) {
  if (!G(a) || !a.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(e) : e;
}
const Ee = (a, e) => {
  const t = a.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = C;
  for (let p = 0; p < t; p++) {
    const n = a[p];
    let c, d, u = -1, v = 0;
    for (; v < n.length && (s.lastIndex = v, d = s.exec(n), d !== null); ) v = s.lastIndex, s === C ? d[1] === "!--" ? s = ee : d[1] !== void 0 ? s = te : d[2] !== void 0 ? (de.test(d[2]) && (i = RegExp("</" + d[2], "g")), s = x) : d[3] !== void 0 && (s = x) : s === x ? d[0] === ">" ? (s = i ?? C, u = -1) : d[1] === void 0 ? u = -2 : (u = s.lastIndex - d[2].length, c = d[1], s = d[3] === void 0 ? x : d[3] === '"' ? ie : re) : s === ie || s === re ? s = x : s === ee || s === te ? s = C : (s = x, i = void 0);
    const b = s === x && a[p + 1].startsWith("/>") ? " " : "";
    o += s === C ? n + we : u >= 0 ? (r.push(c), n.slice(0, u) + ce + n.slice(u) + g + b) : n + g + (u === -2 ? p : b);
  }
  return [fe(a, o + (a[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class M {
  constructor({ strings: e, _$litType$: t }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const p = e.length - 1, n = this.parts, [c, d] = Ee(e, t);
    if (this.el = M.createElement(c, r), $.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = $.nextNode()) !== null && n.length < p; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(ce)) {
          const v = d[s++], b = i.getAttribute(u).split(g), N = /([.?@])?(.*)/.exec(v);
          n.push({ type: 1, index: o, name: N[2], strings: b, ctor: N[1] === "." ? Te : N[1] === "?" ? Pe : N[1] === "@" ? ke : L }), i.removeAttribute(u);
        } else u.startsWith(g) && (n.push({ type: 6, index: o }), i.removeAttribute(u));
        if (de.test(i.tagName)) {
          const u = i.textContent.split(g), v = u.length - 1;
          if (v > 0) {
            i.textContent = j ? j.emptyScript : "";
            for (let b = 0; b < v; b++) i.append(u[b], U()), $.nextNode(), n.push({ type: 2, index: ++o });
            i.append(u[v], U());
          }
        }
      } else if (i.nodeType === 8) if (i.data === le) n.push({ type: 2, index: o });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(g, u + 1)) !== -1; ) n.push({ type: 7, index: o }), u += g.length - 1;
      }
      o++;
    }
  }
  static createElement(e, t) {
    const r = _.createElement("template");
    return r.innerHTML = e, r;
  }
}
function E(a, e, t = a, r) {
  var s, p;
  if (e === S) return e;
  let i = r !== void 0 ? (s = t._$Co) == null ? void 0 : s[r] : t._$Cl;
  const o = O(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((p = i == null ? void 0 : i._$AO) == null || p.call(i, !1), o === void 0 ? i = void 0 : (i = new o(a), i._$AT(a, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = i : t._$Cl = i), i !== void 0 && (e = E(a, i._$AS(a, e.values), i, r)), e;
}
class Ce {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: r } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? _).importNode(t, !0);
    $.currentNode = i;
    let o = $.nextNode(), s = 0, p = 0, n = r[0];
    for (; n !== void 0; ) {
      if (s === n.index) {
        let c;
        n.type === 2 ? c = new H(o, o.nextSibling, this, e) : n.type === 1 ? c = new n.ctor(o, n.name, n.strings, this, e) : n.type === 6 && (c = new Ue(o, this, e)), this._$AV.push(c), n = r[++p];
      }
      s !== (n == null ? void 0 : n.index) && (o = $.nextNode(), s++);
    }
    return $.currentNode = _, i;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class H {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, i) {
    this.type = 2, this._$AH = l, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = E(this, e, t), O(e) ? e === l || e == null || e === "" ? (this._$AH !== l && this._$AR(), this._$AH = l) : e !== this._$AH && e !== S && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Se(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== l && O(this._$AH) ? this._$AA.nextSibling.data = e : this.T(_.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var o;
    const { values: t, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = M.createElement(fe(r.h, r.h[0]), this.options)), r);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(t);
    else {
      const s = new Ce(i, this), p = s.u(this.options);
      s.p(t), this.T(p), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = ae.get(e.strings);
    return t === void 0 && ae.set(e.strings, t = new M(e)), t;
  }
  k(e) {
    G(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, i = 0;
    for (const o of e) i === t.length ? t.push(r = new H(this.O(U()), this.O(U()), this, this.options)) : r = t[i], r._$AI(o), i++;
    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const i = Q(e).nextSibling;
      Q(e).remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class L {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, i, o) {
    this.type = 1, this._$AH = l, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = l;
  }
  _$AI(e, t = this, r, i) {
    const o = this.strings;
    let s = !1;
    if (o === void 0) e = E(this, e, t, 0), s = !O(e) || e !== this._$AH && e !== S, s && (this._$AH = e);
    else {
      const p = e;
      let n, c;
      for (e = o[0], n = 0; n < o.length - 1; n++) c = E(this, p[r + n], t, n), c === S && (c = this._$AH[n]), s || (s = !O(c) || c !== this._$AH[n]), c === l ? e = l : e !== l && (e += (c ?? "") + o[n + 1]), this._$AH[n] = c;
    }
    s && !i && this.j(e);
  }
  j(e) {
    e === l ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Te extends L {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === l ? void 0 : e;
  }
}
class Pe extends L {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== l);
  }
}
class ke extends L {
  constructor(e, t, r, i, o) {
    super(e, t, r, i, o), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = E(this, e, t, 0) ?? l) === S) return;
    const r = this._$AH, i = e === l && r !== l || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, o = e !== l && (r === l || i);
    i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ue {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    E(this, e);
  }
}
const I = k.litHtmlPolyfillSupport;
I == null || I(M, H), (k.litHtmlVersions ?? (k.litHtmlVersions = [])).push("3.3.3");
const Oe = (a, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = r._$litPart$;
  if (i === void 0) {
    const o = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = i = new H(e.insertBefore(U(), o), o, void 0, t ?? {});
  }
  return i._$AI(a), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = globalThis;
class z extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Oe(t, this.renderRoot, this.renderOptions);
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
    return S;
  }
}
var ne;
z._$litElement$ = !0, z.finalized = !0, (ne = y.litElementHydrateSupport) == null || ne.call(y, { LitElement: z });
const W = y.litElementPolyfillSupport;
W == null || W({ LitElement: z });
(y.litElementVersions ?? (y.litElementVersions = [])).push("4.2.2");
function se(a) {
  const e = Object.entries(a).map(([t, r]) => `${t}: ${r};`).join(`
`);
  return w(e);
}
class Me {
  constructor(e, t, r) {
    this.id = e, this.name = t, this.globalTokens = r, this.componentTokens = {}, this.baseStyles = T``;
  }
  getGlobalStyles() {
    return T`
            :host {
                ${se(this.globalTokens)}
                --uiv-status-primary: var(--uiv-primary-color, var(--uiv-color-primary, #3b82f6));
                --uiv-status-secondary: var(--uiv-secondary-color, var(--uiv-color-secondary, #64748b));
                --uiv-status-success: var(--uiv-color-success, #16a34a);
                --uiv-status-warning: var(--uiv-color-warning, #f59e0b);
                --uiv-status-danger: var(--uiv-color-danger, #dc2626);
                --uiv-status-info: var(--uiv-color-info, #0ea5e9);
            }

            /* Semantic Utility Classes */
            .uiv-text-primary { color: var(--uiv-status-primary) !important; }
            .uiv-text-secondary { color: var(--uiv-status-secondary) !important; }
            .uiv-text-success { color: var(--uiv-status-success) !important; }
            .uiv-text-warning { color: var(--uiv-status-warning) !important; }
            .uiv-text-danger { color: var(--uiv-status-danger) !important; }
            .uiv-text-info { color: var(--uiv-status-info) !important; }
            
            .uiv-bg-primary { background: var(--uiv-status-primary) !important; color: #ffffff !important; }
            .uiv-bg-secondary { background: var(--uiv-status-secondary) !important; color: #ffffff !important; }
            .uiv-bg-success { background: var(--uiv-status-success) !important; color: #ffffff !important; }
            .uiv-bg-warning { background: var(--uiv-status-warning) !important; color: #ffffff !important; }
            .uiv-bg-danger { background: var(--uiv-status-danger) !important; color: #ffffff !important; }
            .uiv-bg-info { background: var(--uiv-status-info) !important; color: #ffffff !important; }

            ${this.baseStyles}
            ${this.getBaseStyles()}
        `;
  }
  getComponentStyles(e) {
    const t = this.getComponentTokens(e);
    return T`
            :host {
                ${se(t)}
            }
        `;
  }
  getComponentTokens(e) {
    return this.componentTokens[e] || {};
  }
  getCoreComponentStyles() {
    return T`
            .uiv-input, .uiv-select, .uiv-textarea {
                background-color: var(--uiv-input-bg, var(--uiv-app-input-bg, #ffffff));
                color: var(--uiv-text-primary, var(--uiv-app-text-color, #1a1a1a));
                border: 1px solid var(--uiv-input-border, var(--uiv-app-border-color, #cbd5e1));
                border-radius: var(--uiv-border-radius, 8px);
                padding: 10px 14px;
                font-family: inherit;
                font-size: 14px;
                width: 100%;
                box-sizing: border-box;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: block;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }

            .uiv-input:hover, .uiv-select:hover, .uiv-textarea:hover {
                border-color: var(--uiv-color-primary, #3b82f6);
            }

            .uiv-input[type="checkbox"], .uiv-input[type="radio"] {
                width: auto;
                cursor: pointer;
                display: inline-block;
                box-shadow: none;
            }

            .uiv-input:focus, .uiv-select:focus, .uiv-textarea:focus {
                outline: none;
                border-color: var(--uiv-color-primary, #3b82f6);
                box-shadow: 0 0 0 3px var(--uiv-app-accent-transparent, rgba(59, 130, 246, 0.2));
            }

            .uiv-button {
                background-color: var(--uiv-btn-bg, var(--uiv-color-primary, #3b82f6));
                color: var(--uiv-btn-text, var(--uiv-text-inverse, #ffffff));
                border: none;
                border-radius: var(--uiv-border-radius, 8px);
                padding: 12px 24px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .uiv-button:hover {
                filter: brightness(1.1);
                transform: translateY(-1px);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
class f extends Me {
  getBaseStyles() {
    return T`
            :host {
                --uiv-transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .uiv-${w(this.id)}-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: var(--uiv-border-radius);
                box-shadow: var(--uiv-shadow-depth);
                backdrop-filter: var(--uiv-glass-blur, none);
                transition: var(--uiv-transition-smooth);
            }
            .uiv-${w(this.id)}-glass {
                backdrop-filter: blur(12px) saturate(180%);
                background: var(--uiv-glass-bg, rgba(255, 255, 255, 0.1));
                border: 1px solid var(--uiv-glass-border, rgba(255, 255, 255, 0.2));
            }
            .uiv-${w(this.id)}-gradient-text {
                background: var(--uiv-primary-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 700;
            }
            .uiv-${w(this.id)}-glow {
                box-shadow: 0 0 20px var(--uiv-primary-color);
            }
        `;
  }
}
const h = {
  "--uiv-font-family": "'Outfit', 'Inter', sans-serif",
  "--uiv-border-radius": "12px"
}, He = new f("cyber", "Standard Cyber", {
  ...h,
  "--uiv-primary-color": "#ff007c",
  "--uiv-primary-gradient": "linear-gradient(135deg, #ff007c 0%, #00ffcc 100%)",
  "--uiv-bg-surface": "rgba(10, 10, 12, 0.8)",
  "--uiv-text-color": "#ffffff",
  "--uiv-border-color": "rgba(255, 0, 124, 0.4)",
  "--uiv-shadow-depth": "0 0 30px rgba(255, 0, 124, 0.25)",
  "--uiv-glass-blur": "blur(12px)",
  "--uiv-app-bg": "#0a0a0c",
  "--uiv-bg-primary": "#0a0a0c",
  "--uiv-app-sidebar-bg": "#121216",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-header-bg": "#121216",
  "--uiv-app-card-bg": "rgba(26, 26, 30, 0.7)",
  "--uiv-app-accent-color": "#ff007c",
  "--uiv-app-accent-transparent": "rgba(255, 0, 124, 0.15)",
  "--uiv-app-text-color": "#ffffff",
  "--uiv-app-border-color": "rgba(255, 0, 124, 0.2)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #ff007c",
  "--uiv-app-glass-blur": "blur(12px)"
}), Ne = new f("glass", "Standard Glass", {
  ...h,
  "--uiv-primary-color": "#e0f2fe",
  "--uiv-primary-gradient": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
  "--uiv-bg-surface": "rgba(255, 255, 255, 0.02)",
  "--uiv-text-color": "#ffffff",
  "--uiv-border-color": "rgba(255, 255, 255, 0.1)",
  "--uiv-shadow-depth": "0 25px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255,255,255,0.02)",
  "--uiv-glass-blur": "blur(40px) saturate(200%)",
  "--uiv-app-bg": "#02041a",
  "--uiv-bg-primary": "#02041a",
  "--uiv-app-sidebar-bg": "rgba(2, 4, 32, 0.4)",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-header-bg": "rgba(2, 4, 32, 0.4)",
  "--uiv-app-card-bg": "rgba(255, 255, 255, 0.01)",
  "--uiv-app-accent-color": "#38bdf8",
  "--uiv-app-accent-transparent": "rgba(56, 189, 248, 0.15)",
  "--uiv-app-text-color": "#ffffff",
  "--uiv-app-border-color": "rgba(255, 255, 255, 0.08)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #38bdf8",
  "--uiv-app-glass-blur": "blur(40px) saturate(200%)"
}), he = new f("modern", "Standard Modern", {
  ...h,
  "--uiv-primary-color": "#6366f1",
  "--uiv-primary-gradient": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
  "--uiv-bg-surface": "rgba(30, 41, 59, 0.7)",
  "--uiv-text-color": "#f8fafc",
  "--uiv-border-color": "rgba(99, 102, 241, 0.3)",
  "--uiv-shadow-depth": "0 25px 50px rgba(0, 0, 0, 0.5)",
  "--uiv-app-bg": "#020617",
  "--uiv-bg-primary": "#020617",
  "--uiv-app-sidebar-bg": "rgba(15, 23, 42, 0.9)",
  "--uiv-app-sidebar-text": "#f8fafc",
  "--uiv-app-header-bg": "#0f172a",
  "--uiv-app-card-bg": "rgba(30, 41, 59, 0.6)",
  "--uiv-app-accent-color": "#6366f1",
  "--uiv-app-accent-transparent": "rgba(99, 102, 241, 0.15)",
  "--uiv-app-text-color": "#f8fafc",
  "--uiv-app-border-color": "rgba(255, 255, 255, 0.05)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #818cf8",
  "--uiv-app-glass-blur": "blur(12px)"
}), Re = new f("wealth", "Standard Wealth", {
  ...h,
  "--uiv-primary-color": "#d4af37",
  "--uiv-primary-gradient": "linear-gradient(135deg, #d4af37 0%, #f1d27b 50%, #d4af37 100%)",
  "--uiv-bg-surface": "rgba(30, 41, 59, 0.4)",
  "--uiv-text-color": "#f8fafc",
  "--uiv-border-color": "rgba(212, 175, 55, 0.4)",
  "--uiv-shadow-depth": "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 15px rgba(212, 175, 55, 0.1)",
  "--uiv-glass-blur": "blur(10px)",
  "--uiv-app-bg": "#020617",
  "--uiv-bg-primary": "#020617",
  "--uiv-app-sidebar-bg": "#070a1a",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-header-bg": "#070a1a",
  "--uiv-app-card-bg": "rgba(15, 23, 42, 0.6)",
  "--uiv-app-input-bg": "rgba(15, 23, 42, 0.4)",
  "--uiv-app-accent-color": "#d4af37",
  "--uiv-app-accent-transparent": "rgba(212, 175, 55, 0.15)",
  "--uiv-app-text-color": "#f8fafc",
  "--uiv-app-text-muted": "#d4af37",
  "--uiv-app-border-color": "rgba(212, 175, 55, 0.2)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(212, 175, 55, 0.2), 0 0 20px rgba(212, 175, 55, 0.1)",
  "--uiv-app-glass-blur": "blur(10px)"
}), ze = new f("nature", "Standard Nature", {
  ...h,
  "--uiv-primary-color": "#10b981",
  "--uiv-primary-gradient": "linear-gradient(135deg, #022c22 0%, #064e3b 100%)",
  "--uiv-bg-surface": "rgba(6, 78, 59, 0.4)",
  "--uiv-text-color": "#ecfdf5",
  "--uiv-border-color": "rgba(16, 185, 129, 0.4)",
  "--uiv-shadow-depth": "0 25px 50px rgba(0, 0, 0, 0.6)",
  "--uiv-glass-blur": "blur(16px)",
  "--uiv-app-bg": "#021a11",
  "--uiv-bg-primary": "#021a11",
  "--uiv-app-sidebar-bg": "#022c22",
  "--uiv-app-sidebar-text": "#ecfdf5",
  "--uiv-app-header-bg": "#022c22",
  "--uiv-app-card-bg": "rgba(6, 78, 59, 0.6)",
  "--uiv-app-input-bg": "rgba(2, 44, 34, 0.4)",
  "--uiv-app-accent-color": "#10b981",
  "--uiv-app-accent-transparent": "rgba(16, 185, 129, 0.15)",
  "--uiv-app-text-color": "#ecfdf5",
  "--uiv-app-text-muted": "#6ee7b7",
  "--uiv-app-border-color": "rgba(16, 185, 129, 0.25)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #10b981",
  "--uiv-app-glass-blur": "blur(16px)",
  // Status Overrides
  "--uiv-color-primary": "#10b981",
  "--uiv-color-success": "#059669"
}), je = new f("corporate", "Standard Corporate", {
  ...h,
  // Backgrounds & Surfaces
  "--uiv-bg-primary": "#f4f6f9",
  "--uiv-bg-secondary": "#e6ebf1",
  "--uiv-bg-tertiary": "#d1d9e6",
  "--uiv-bg-inverse": "#1f2937",
  "--uiv-surface-primary": "#ffffff",
  "--uiv-surface-secondary": "#f9fafb",
  "--uiv-surface-elevated": "#ffffff",
  "--uiv-bg-surface": "#ffffff",
  // Text
  "--uiv-text-primary": "#1f2937",
  "--uiv-text-secondary": "#4b5563",
  "--uiv-text-tertiary": "#6b7280",
  "--uiv-text-inverse": "#ffffff",
  "--uiv-text-disabled": "#9ca3af",
  "--uiv-text-color": "#1f2937",
  // Branding & States
  "--uiv-color-primary": "#0047ab",
  "--uiv-color-primary-hover": "#003a8c",
  "--uiv-color-primary-active": "#002f6c",
  "--uiv-color-secondary": "#6b7280",
  "--uiv-color-success": "#2e7d32",
  "--uiv-color-warning": "#ed6c02",
  "--uiv-color-danger": "#d32f2f",
  "--uiv-color-info": "#0288d1",
  "--uiv-primary-color": "#0047ab",
  // Component Tokens
  "--uiv-border-color": "#d1d5db",
  "--uiv-input-bg": "#ffffff",
  "--uiv-input-border": "#9ca3af",
  "--uiv-btn-bg": "var(--uiv-color-primary)",
  "--uiv-btn-text": "#ffffff",
  "--uiv-shadow-depth": "0 4px 8px rgba(0,0,0,0.08)",
  // App Dashboard Tokens
  "--uiv-app-bg": "#f4f6f9",
  "--uiv-app-header-bg": "#e6ebf1",
  "--uiv-app-sidebar-bg": "#1f2937",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-card-bg": "#ffffff",
  "--uiv-app-input-bg": "#ffffff",
  "--uiv-app-accent-color": "#0047ab",
  "--uiv-app-accent-transparent": "rgba(0, 71, 171, 0.15)",
  "--uiv-app-text-color": "#1f2937",
  "--uiv-app-text-muted": "#6b7280",
  "--uiv-app-border-color": "#d1d5db",
  "--uiv-app-hover-shadow": "0 20px 40px -10px rgba(0, 47, 171, 0.25)",
  "--uiv-app-glass-blur": "blur(0px)"
}), Le = new f("retro", "Standard Retro", {
  ...h,
  "--uiv-primary-color": "#00ff00",
  "--uiv-primary-gradient": "linear-gradient(0deg, #0a0a0a 0%, #1a1a1a 100%)",
  "--uiv-bg-surface": "#111111",
  "--uiv-text-color": "#00ff00",
  "--uiv-border-color": "#00ff00",
  "--uiv-shadow-depth": "0 0 20px rgba(0, 255, 0, 0.2), inset 0 0 10px rgba(0, 255, 0, 0.1)",
  "--uiv-app-bg": "#000000",
  "--uiv-bg-primary": "#000000",
  "--uiv-app-sidebar-bg": "#0a0a0a",
  "--uiv-app-sidebar-text": "#00ff00",
  "--uiv-app-header-bg": "#0a0a0a",
  "--uiv-app-card-bg": "#111111",
  "--uiv-app-accent-color": "#00ff00",
  "--uiv-app-accent-transparent": "rgba(0, 255, 0, 0.15)",
  "--uiv-app-text-color": "#00ff00",
  "--uiv-app-border-color": "#333333",
  "--uiv-app-hover-shadow": "10px 10px 0px #000, 0 0 20px rgba(0, 255, 0, 0.4)",
  "--uiv-app-glass-blur": "blur(0px)"
}), De = new f("neon", "Standard Neon", {
  ...h,
  "--uiv-primary-color": "#f0abfc",
  "--uiv-primary-gradient": "linear-gradient(135deg, #f0abfc 0%, #a855f7 100%)",
  "--uiv-bg-surface": "rgba(13, 10, 24, 0.9)",
  "--uiv-text-color": "#ffffff",
  "--uiv-border-color": "rgba(240, 171, 252, 0.4)",
  "--uiv-shadow-depth": "0 0 40px rgba(168, 85, 247, 0.3)",
  "--uiv-app-bg": "#0d0a18",
  "--uiv-bg-primary": "#0d0a18",
  "--uiv-app-sidebar-bg": "#1a162e",
  "--uiv-app-sidebar-text": "#ffffff",
  "--uiv-app-header-bg": "#1a162e",
  "--uiv-app-card-bg": "rgba(26, 22, 46, 0.7)",
  "--uiv-app-accent-color": "#f0abfc",
  "--uiv-app-accent-transparent": "rgba(240, 171, 252, 0.15)",
  "--uiv-app-text-color": "#ffffff",
  "--uiv-app-border-color": "rgba(240, 171, 252, 0.2)",
  "--uiv-app-hover-shadow": "0 30px 60px -12px rgba(168, 85, 247, 0.3), 0 0 20px rgba(168, 85, 247, 0.2)",
  "--uiv-app-glass-blur": "blur(10px)"
}), Be = new f("light", "Standard Light", {
  ...h,
  // Backgrounds & Surfaces
  "--uiv-bg-primary": "#f8fafc",
  "--uiv-bg-secondary": "#f1f5f9",
  "--uiv-bg-tertiary": "#e2e8f0",
  "--uiv-bg-inverse": "#1e293b",
  "--uiv-surface-primary": "#ffffff",
  "--uiv-surface-secondary": "#f9fafb",
  "--uiv-surface-elevated": "#ffffff",
  "--uiv-bg-surface": "#ffffff",
  // Text
  "--uiv-text-primary": "#1e293b",
  "--uiv-text-secondary": "#64748b",
  "--uiv-text-tertiary": "#94a3b8",
  "--uiv-text-inverse": "#ffffff",
  "--uiv-text-disabled": "#cbd5e1",
  "--uiv-text-color": "#1e293b",
  // Branding & States
  "--uiv-color-primary": "#8b5cf6",
  "--uiv-color-primary-hover": "#7c3aed",
  "--uiv-color-primary-active": "#6d28d9",
  "--uiv-color-secondary": "#64748b",
  "--uiv-color-success": "#10b981",
  "--uiv-color-warning": "#f59e0b",
  "--uiv-color-danger": "#ef4444",
  "--uiv-color-info": "#0ea5e9",
  "--uiv-primary-color": "#8b5cf6",
  // Component Tokens
  "--uiv-border-color": "#e2e8f0",
  "--uiv-input-bg": "#ffffff",
  "--uiv-input-border": "#e2e8f0",
  "--uiv-btn-bg": "var(--uiv-color-primary)",
  "--uiv-btn-text": "#ffffff",
  "--uiv-shadow-depth": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  // App Dashboard Tokens
  "--uiv-app-bg": "#f8fafc",
  "--uiv-app-header-bg": "rgba(255, 255, 255, 0.8)",
  "--uiv-app-sidebar-bg": "#f1f5f9",
  "--uiv-app-sidebar-text": "#1e293b",
  "--uiv-app-card-bg": "#ffffff",
  "--uiv-app-input-bg": "#ffffff",
  "--uiv-app-accent-color": "#8b5cf6",
  "--uiv-app-accent-transparent": "rgba(139, 92, 246, 0.08)",
  "--uiv-app-text-color": "#1e293b",
  "--uiv-app-text-muted": "#64748b",
  "--uiv-app-border-color": "rgba(226, 232, 240, 0.8)",
  "--uiv-app-hover-shadow": "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 8px 10px -6px rgba(139, 92, 246, 0.1)",
  "--uiv-app-glass-blur": "blur(12px)"
}), Ie = new f("dark", "Standard Obsidian", {
  ...h,
  // Backgrounds & Surfaces
  "--uiv-bg-primary": "#0f172a",
  "--uiv-bg-secondary": "#1e293b",
  "--uiv-bg-tertiary": "#334155",
  "--uiv-bg-inverse": "#ffffff",
  "--uiv-surface-primary": "#1e293b",
  "--uiv-surface-secondary": "#0f172a",
  "--uiv-surface-elevated": "#1e293b",
  "--uiv-bg-surface": "#1e293b",
  // Text
  "--uiv-text-primary": "#f1f5f9",
  "--uiv-text-secondary": "#cbd5e1",
  "--uiv-text-tertiary": "#94a3b8",
  "--uiv-text-inverse": "#0f172a",
  "--uiv-text-disabled": "#64748b",
  "--uiv-text-color": "#f8fafc",
  // Branding & States
  "--uiv-color-primary": "#3b82f6",
  "--uiv-color-primary-hover": "#2563eb",
  "--uiv-color-primary-active": "#1d4ed8",
  "--uiv-color-secondary": "#94a3b8",
  "--uiv-color-success": "#22c55e",
  "--uiv-color-warning": "#fbbf24",
  "--uiv-color-danger": "#ef4444",
  "--uiv-color-info": "#38bdf8",
  "--uiv-primary-color": "#3b82f6",
  // Component Tokens
  "--uiv-border-color": "#334155",
  "--uiv-input-bg": "#0f172a",
  "--uiv-input-border": "#475569",
  "--uiv-btn-bg": "var(--uiv-color-primary)",
  "--uiv-btn-text": "#ffffff",
  "--uiv-shadow-depth": "0 25px 50px rgba(0, 0, 0, 0.6)",
  // App Dashboard Tokens
  "--uiv-app-bg": "#020617",
  "--uiv-app-header-bg": "#0f172a",
  "--uiv-app-sidebar-bg": "rgba(15, 23, 42, 0.9)",
  "--uiv-app-sidebar-text": "#f8fafc",
  "--uiv-app-card-bg": "rgba(30, 41, 59, 0.6)",
  "--uiv-app-accent-color": "#3b82f6",
  "--uiv-app-accent-transparent": "rgba(59, 130, 246, 0.15)",
  "--uiv-app-text-color": "#f8fafc",
  "--uiv-app-text-muted": "#cbd5e1",
  "--uiv-app-border-color": "rgba(255, 255, 255, 0.08)",
  "--uiv-app-hover-shadow": "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px rgba(58, 130, 246, 0.3)",
  "--uiv-app-glass-blur": "blur(12px)"
}), oe = {
  cyber: He,
  glass: Ne,
  modern: he,
  retro: Le,
  neon: De,
  corporate: je,
  wealth: Re,
  nature: ze,
  light: Be,
  dark: Ie
};
class ve {
  constructor() {
    this.id = "zero-standard-themes", this.name = "Zero Standard Themes Provider";
  }
  getThemeNames() {
    return Object.keys(oe);
  }
  getTheme(e) {
    return oe[e] || he;
  }
}
window.zeroThemeManager && window.zeroThemeManager.registerProvider(new ve());
window.addEventListener("zero-orchestrator-ready", () => {
  var a;
  (a = window.zeroThemeManager) == null || a.registerProvider(new ve());
});
export {
  f as StandardTheme,
  ve as ZeroStandardThemeProvider,
  je as corporateTheme,
  He as cyberTheme,
  Ie as darkTheme,
  Ne as glassTheme,
  Be as lightTheme,
  he as modernTheme,
  ze as natureTheme,
  De as neonTheme,
  Le as retroTheme,
  oe as standardThemeRegistry,
  Re as wealthTheme
};
