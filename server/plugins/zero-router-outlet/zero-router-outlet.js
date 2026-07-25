/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, ye = ne.ShadowRoot && (ne.ShadyCSS === void 0 || ne.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _e = Symbol(), Ie = /* @__PURE__ */ new WeakMap();
let Qe = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== _e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ye && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ie.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ie.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const kt = (o) => new Qe(typeof o == "string" ? o : o + "", void 0, _e), Tt = (o, ...e) => {
  const t = o.length === 1 ? o[0] : e.reduce((n, s, h) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[h + 1], o[0]);
  return new Qe(t, o, _e);
}, Rt = (o, e) => {
  if (ye) o.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ne.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, o.appendChild(n);
  }
}, Ue = ye ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return kt(t);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: xt, defineProperty: Nt, getOwnPropertyDescriptor: Ht, getOwnPropertyNames: It, getOwnPropertySymbols: Ut, getPrototypeOf: Dt } = Object, I = globalThis, De = I.trustedTypes, jt = De ? De.emptyScript : "", he = I.reactiveElementPolyfillSupport, q = (o, e) => o, pe = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? jt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let t = o;
  switch (e) {
    case Boolean:
      t = o !== null;
      break;
    case Number:
      t = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(o);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ke = (o, e) => !xt(o, e), je = { attribute: !0, type: String, converter: pe, reflect: !1, useDefault: !1, hasChanged: Ke };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = je) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Nt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: h } = Ht(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: s, set(l) {
      const w = s == null ? void 0 : s.call(this);
      h == null || h.call(this, l), this.requestUpdate(e, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? je;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const e = Dt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const t = this.properties, n = [...It(t), ...Ut(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(Ue(s));
    } else e !== void 0 && t.push(Ue(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Rt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$ET(e, t) {
    var h;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const l = (((h = n.converter) == null ? void 0 : h.toAttribute) !== void 0 ? n.converter : pe).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var h, l;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const w = n.getPropertyOptions(s), y = typeof w.converter == "function" ? { fromAttribute: w.converter } : ((h = w.converter) == null ? void 0 : h.fromAttribute) !== void 0 ? w.converter : pe;
      this._$Em = s;
      const A = y.fromAttribute(t, w.type);
      this[s] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, h) {
    var l;
    if (e !== void 0) {
      const w = this.constructor;
      if (s === !1 && (h = this[e]), n ?? (n = w.getPropertyOptions(e)), !((n.hasChanged ?? Ke)(h, t) || n.useDefault && n.reflect && h === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(w._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: h }, l) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), h !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [h, l] of this._$Ep) this[h] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [h, l] of s) {
        const { wrapped: w } = l, y = this[h];
        w !== !0 || this._$AL.has(h) || y === void 0 || this.C(h, void 0, l, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var h;
        return (h = s.hostUpdate) == null ? void 0 : h.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[q("elementProperties")] = /* @__PURE__ */ new Map(), B[q("finalized")] = /* @__PURE__ */ new Map(), he == null || he({ ReactiveElement: B }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, Le = (o) => o, ie = X.trustedTypes, ze = ie ? ie.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, et = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, tt = "?" + H, Lt = `<${tt}>`, L = document, Y = () => L.createComment(""), Q = (o) => o === null || typeof o != "object" && typeof o != "function", me = Array.isArray, zt = (o) => me(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", ce = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, We = /-->/g, Be = />/g, U = RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ge = /'/g, Ve = /"/g, rt = /^(?:script|style|textarea|title)$/i, Wt = (o) => (e, ...t) => ({ _$litType$: o, strings: e, values: t }), Bt = Wt(1), G = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Fe = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function nt(o, e) {
  if (!me(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ze !== void 0 ? ze.createHTML(e) : e;
}
const Gt = (o, e) => {
  const t = o.length - 1, n = [];
  let s, h = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Z;
  for (let w = 0; w < t; w++) {
    const y = o[w];
    let A, E, g = -1, k = 0;
    for (; k < y.length && (l.lastIndex = k, E = l.exec(y), E !== null); ) k = l.lastIndex, l === Z ? E[1] === "!--" ? l = We : E[1] !== void 0 ? l = Be : E[2] !== void 0 ? (rt.test(E[2]) && (s = RegExp("</" + E[2], "g")), l = U) : E[3] !== void 0 && (l = U) : l === U ? E[0] === ">" ? (l = s ?? Z, g = -1) : E[1] === void 0 ? g = -2 : (g = l.lastIndex - E[2].length, A = E[1], l = E[3] === void 0 ? U : E[3] === '"' ? Ve : Ge) : l === Ve || l === Ge ? l = U : l === We || l === Be ? l = Z : (l = U, s = void 0);
    const T = l === U && o[w + 1].startsWith("/>") ? " " : "";
    h += l === Z ? y + Lt : g >= 0 ? (n.push(A), y.slice(0, g) + et + y.slice(g) + H + T) : y + H + (g === -2 ? w : T);
  }
  return [nt(o, h + (o[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class K {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let h = 0, l = 0;
    const w = e.length - 1, y = this.parts, [A, E] = Gt(e, t);
    if (this.el = K.createElement(A, n), D.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = D.nextNode()) !== null && y.length < w; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(et)) {
          const k = E[l++], T = s.getAttribute(g).split(H), N = /([.?@])?(.*)/.exec(k);
          y.push({ type: 1, index: h, name: N[2], strings: T, ctor: N[1] === "." ? Ft : N[1] === "?" ? Zt : N[1] === "@" ? qt : se }), s.removeAttribute(g);
        } else g.startsWith(H) && (y.push({ type: 6, index: h }), s.removeAttribute(g));
        if (rt.test(s.tagName)) {
          const g = s.textContent.split(H), k = g.length - 1;
          if (k > 0) {
            s.textContent = ie ? ie.emptyScript : "";
            for (let T = 0; T < k; T++) s.append(g[T], Y()), D.nextNode(), y.push({ type: 2, index: ++h });
            s.append(g[k], Y());
          }
        }
      } else if (s.nodeType === 8) if (s.data === tt) y.push({ type: 2, index: h });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(H, g + 1)) !== -1; ) y.push({ type: 7, index: h }), g += H.length - 1;
      }
      h++;
    }
  }
  static createElement(e, t) {
    const n = L.createElement("template");
    return n.innerHTML = e, n;
  }
}
function V(o, e, t = o, n) {
  var l, w;
  if (e === G) return e;
  let s = n !== void 0 ? (l = t._$Co) == null ? void 0 : l[n] : t._$Cl;
  const h = Q(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== h && ((w = s == null ? void 0 : s._$AO) == null || w.call(s, !1), h === void 0 ? s = void 0 : (s = new h(o), s._$AT(o, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = V(o, s._$AS(o, e.values), s, n)), e;
}
class Vt {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    D.currentNode = s;
    let h = D.nextNode(), l = 0, w = 0, y = n[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let A;
        y.type === 2 ? A = new ee(h, h.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(h, y.name, y.strings, this, e) : y.type === 6 && (A = new Xt(h, this, e)), this._$AV.push(A), y = n[++w];
      }
      l !== (y == null ? void 0 : y.index) && (h = D.nextNode(), l++);
    }
    return D.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ee {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = V(this, e, t), Q(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : zt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var h;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = K.createElement(nt(n.h, n.h[0]), this.options)), n);
    if (((h = this._$AH) == null ? void 0 : h._$AD) === s) this._$AH.p(t);
    else {
      const l = new Vt(s, this), w = l.u(this.options);
      l.p(t), this.T(w), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Fe.get(e.strings);
    return t === void 0 && Fe.set(e.strings, t = new K(e)), t;
  }
  k(e) {
    me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const h of e) s === t.length ? t.push(n = new ee(this.O(Y()), this.O(Y()), this, this.options)) : n = t[s], n._$AI(h), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Le(e).nextSibling;
      Le(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class se {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, h) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = h, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const h = this.strings;
    let l = !1;
    if (h === void 0) e = V(this, e, t, 0), l = !Q(e) || e !== this._$AH && e !== G, l && (this._$AH = e);
    else {
      const w = e;
      let y, A;
      for (e = h[0], y = 0; y < h.length - 1; y++) A = V(this, w[n + y], t, y), A === G && (A = this._$AH[y]), l || (l = !Q(A) || A !== this._$AH[y]), A === C ? e = C : e !== C && (e += (A ?? "") + h[y + 1]), this._$AH[y] = A;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ft extends se {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class Zt extends se {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class qt extends se {
  constructor(e, t, n, s, h) {
    super(e, t, n, s, h), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? C) === G) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, h = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), h && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Xt {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    V(this, e);
  }
}
const fe = X.litHtmlPolyfillSupport;
fe == null || fe(K, ee), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.3.3");
const Jt = (o, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const h = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ee(e.insertBefore(Y(), h), h, void 0, t ?? {});
  }
  return s._$AI(o), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis;
class J extends B {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Jt(t, this.renderRoot, this.renderOptions);
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
    return G;
  }
}
var Ye;
J._$litElement$ = !0, J.finalized = !0, (Ye = j.litElementHydrateSupport) == null || Ye.call(j, { LitElement: J });
const de = j.litElementPolyfillSupport;
de == null || de({ LitElement: J });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt = (o) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(o, e);
  }) : customElements.define(o, e);
};
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var qe;
(function(o) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ze == "object" ? Ze : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = s(o);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = o);
    function s(y, A) {
      return function(E, g) {
        Object.defineProperty(y, E, { configurable: !0, writable: !0, value: g }), A && A(E, g);
      };
    }
    function h() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function l() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function w() {
      return h() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", h = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !w && !y, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return le(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return le({ __proto__: null });
      } : function() {
        return le({});
      },
      has: A ? function(r, i) {
        return n.call(r, i);
      } : function(r, i) {
        return i in r;
      },
      get: A ? function(r, i) {
        return n.call(r, i) ? r[i] : void 0;
      } : function(r, i) {
        return r[i];
      }
    }, g = Object.getPrototypeOf(Function), k = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Mt(), N = typeof WeakMap == "function" ? WeakMap : St(), z = s ? Symbol.for("@reflect-metadata:registry") : void 0, te = At(), $e = Et(te);
    function it(r, i, a, u) {
      if (_(a)) {
        if (!Pe(r))
          throw new TypeError();
        if (!Ce(i))
          throw new TypeError();
        return pt(r, i);
      } else {
        if (!Pe(r))
          throw new TypeError();
        if (!M(i))
          throw new TypeError();
        if (!M(u) && !_(u) && !W(u))
          throw new TypeError();
        return W(u) && (u = void 0), a = x(a), vt(r, i, a, u);
      }
    }
    e("decorate", it);
    function st(r, i) {
      function a(u, v) {
        if (!M(u))
          throw new TypeError();
        if (!_(v) && !wt(v))
          throw new TypeError();
        Ee(r, i, u, v);
      }
      return a;
    }
    e("metadata", st);
    function ot(r, i, a, u) {
      if (!M(a))
        throw new TypeError();
      return _(u) || (u = x(u)), Ee(r, i, a, u);
    }
    e("defineMetadata", ot);
    function at(r, i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = x(a)), we(r, i, a);
    }
    e("hasMetadata", at);
    function ut(r, i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = x(a)), oe(r, i, a);
    }
    e("hasOwnMetadata", ut);
    function lt(r, i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = x(a)), ge(r, i, a);
    }
    e("getMetadata", lt);
    function ht(r, i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = x(a)), Ae(r, i, a);
    }
    e("getOwnMetadata", ht);
    function ct(r, i) {
      if (!M(r))
        throw new TypeError();
      return _(i) || (i = x(i)), be(r, i);
    }
    e("getMetadataKeys", ct);
    function ft(r, i) {
      if (!M(r))
        throw new TypeError();
      return _(i) || (i = x(i)), Oe(r, i);
    }
    e("getOwnMetadataKeys", ft);
    function dt(r, i, a) {
      if (!M(i))
        throw new TypeError();
      if (_(a) || (a = x(a)), !M(i))
        throw new TypeError();
      _(a) || (a = x(a));
      var u = F(
        i,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(r, i, a);
    }
    e("deleteMetadata", dt);
    function pt(r, i) {
      for (var a = r.length - 1; a >= 0; --a) {
        var u = r[a], v = u(i);
        if (!_(v) && !W(v)) {
          if (!Ce(v))
            throw new TypeError();
          i = v;
        }
      }
      return i;
    }
    function vt(r, i, a, u) {
      for (var v = r.length - 1; v >= 0; --v) {
        var P = r[v], S = P(i, a, u);
        if (!_(S) && !W(S)) {
          if (!M(S))
            throw new TypeError();
          u = S;
        }
      }
      return u;
    }
    function we(r, i, a) {
      var u = oe(r, i, a);
      if (u)
        return !0;
      var v = ue(i);
      return W(v) ? !1 : we(r, v, a);
    }
    function oe(r, i, a) {
      var u = F(
        i,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : Se(u.OrdinaryHasOwnMetadata(r, i, a));
    }
    function ge(r, i, a) {
      var u = oe(r, i, a);
      if (u)
        return Ae(r, i, a);
      var v = ue(i);
      if (!W(v))
        return ge(r, v, a);
    }
    function Ae(r, i, a) {
      var u = F(
        i,
        a,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(r, i, a);
    }
    function Ee(r, i, a, u) {
      var v = F(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(r, i, a, u);
    }
    function be(r, i) {
      var a = Oe(r, i), u = ue(r);
      if (u === null)
        return a;
      var v = be(u, i);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), S = [], m = 0, c = a; m < c.length; m++) {
        var f = c[m], d = P.has(f);
        d || (P.add(f), S.push(f));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var f = $[p], d = P.has(f);
        d || (P.add(f), S.push(f));
      }
      return S;
    }
    function Oe(r, i) {
      var a = F(
        r,
        i,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, i) : [];
    }
    function Me(r) {
      if (r === null)
        return 1;
      switch (typeof r) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return r === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function _(r) {
      return r === void 0;
    }
    function W(r) {
      return r === null;
    }
    function yt(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function _t(r, i) {
      switch (Me(r)) {
        case 0:
          return r;
        case 1:
          return r;
        case 2:
          return r;
        case 3:
          return r;
        case 4:
          return r;
        case 5:
          return r;
      }
      var a = "string", u = ke(r, h);
      if (u !== void 0) {
        var v = u.call(r, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return mt(r);
    }
    function mt(r, i) {
      var a, u;
      {
        var v = r.toString;
        if (re(v)) {
          var u = v.call(r);
          if (!M(u))
            return u;
        }
        var a = r.valueOf;
        if (re(a)) {
          var u = a.call(r);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Se(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function x(r) {
      var i = _t(r);
      return yt(i) ? i : $t(i);
    }
    function Pe(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function re(r) {
      return typeof r == "function";
    }
    function Ce(r) {
      return typeof r == "function";
    }
    function wt(r) {
      switch (Me(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ae(r, i) {
      return r === i || r !== r && i !== i;
    }
    function ke(r, i) {
      var a = r[i];
      if (a != null) {
        if (!re(a))
          throw new TypeError();
        return a;
      }
    }
    function Te(r) {
      var i = ke(r, l);
      if (!re(i))
        throw new TypeError();
      var a = i.call(r);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Re(r) {
      return r.value;
    }
    function xe(r) {
      var i = r.next();
      return i.done ? !1 : i;
    }
    function Ne(r) {
      var i = r.return;
      i && i.call(r);
    }
    function ue(r) {
      var i = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === g || i !== g)
        return i;
      var a = r.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return i;
      var v = u.constructor;
      return typeof v != "function" || v === r ? i : v;
    }
    function gt() {
      var r;
      !_(z) && typeof t.Reflect < "u" && !(z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = bt(t.Reflect));
      var i, a, u, v = new N(), P = {
        registerProvider: S,
        getProvider: c,
        setProvider: d
      };
      return P;
      function S(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case _(i):
            i = p;
            break;
          case i === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            u === void 0 && (u = new T()), u.add(p);
            break;
        }
      }
      function m(p, $) {
        if (!_(i)) {
          if (i.isProviderFor(p, $))
            return i;
          if (!_(a)) {
            if (a.isProviderFor(p, $))
              return i;
            if (!_(u))
              for (var b = Te(u); ; ) {
                var O = xe(b);
                if (!O)
                  return;
                var R = Re(O);
                if (R.isProviderFor(p, $))
                  return Ne(b), R;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, $))
          return r;
      }
      function c(p, $) {
        var b = v.get(p), O;
        return _(b) || (O = b.get($)), _(O) && (O = m(p, $), _(O) || (_(b) && (b = new k(), v.set(p, b)), b.set($, O))), O;
      }
      function f(p) {
        if (_(p))
          throw new TypeError();
        return i === p || a === p || !_(u) && u.has(p);
      }
      function d(p, $, b) {
        if (!f(b))
          throw new Error("Metadata provider not registered.");
        var O = c(p, $);
        if (O !== b) {
          if (!_(O))
            return !1;
          var R = v.get(p);
          _(R) && (R = new k(), v.set(p, R)), R.set($, b);
        }
        return !0;
      }
    }
    function At() {
      var r;
      return !_(z) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[z]), _(r) && (r = gt()), !_(z) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Et(r) {
      var i = new N(), a = {
        isProviderFor: function(f, d) {
          var p = i.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return te.registerProvider(a), a;
      function u(f, d, p) {
        var $ = i.get(f), b = !1;
        if (_($)) {
          if (!p)
            return;
          $ = new k(), i.set(f, $), b = !0;
        }
        var O = $.get(d);
        if (_(O)) {
          if (!p)
            return;
          if (O = new k(), $.set(d, O), !r.setProvider(f, d, a))
            throw $.delete(d), b && i.delete(f), new Error("Wrong provider for target.");
        }
        return O;
      }
      function v(f, d, p) {
        var $ = u(
          d,
          p,
          /*Create*/
          !1
        );
        return _($) ? !1 : Se($.has(f));
      }
      function P(f, d, p) {
        var $ = u(
          d,
          p,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(f);
      }
      function S(f, d, p, $) {
        var b = u(
          p,
          $,
          /*Create*/
          !0
        );
        b.set(f, d);
      }
      function m(f, d) {
        var p = [], $ = u(
          f,
          d,
          /*Create*/
          !1
        );
        if (_($))
          return p;
        for (var b = $.keys(), O = Te(b), R = 0; ; ) {
          var He = xe(O);
          if (!He)
            return p.length = R, p;
          var Pt = Re(He);
          try {
            p[R] = Pt;
          } catch (Ct) {
            try {
              Ne(O);
            } finally {
              throw Ct;
            }
          }
          R++;
        }
      }
      function c(f, d, p) {
        var $ = u(
          d,
          p,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(f))
          return !1;
        if ($.size === 0) {
          var b = i.get(d);
          _(b) || (b.delete(p), b.size === 0 && i.delete(b));
        }
        return !0;
      }
    }
    function bt(r) {
      var i = r.defineMetadata, a = r.hasOwnMetadata, u = r.getOwnMetadata, v = r.getOwnMetadataKeys, P = r.deleteMetadata, S = new N(), m = {
        isProviderFor: function(c, f) {
          var d = S.get(c);
          return !_(d) && d.has(f) ? !0 : v(c, f).length ? (_(d) && (d = new T(), S.set(c, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: i,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function F(r, i, a) {
      var u = te.getProvider(r, i);
      if (!_(u))
        return u;
      if (a) {
        if (te.setProvider(r, i, $e))
          return $e;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var r = {}, i = [], a = (
        /** @class */
        function() {
          function m(c, f, d) {
            this._index = 0, this._keys = c, this._values = f, this._selector = d;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = i, this._values = i) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = i, this._values = i), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = i, this._values = i), { value: c, done: !0 };
          }, m;
        }()
      ), u = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, m.prototype.set = function(c, f) {
            var d = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, m.prototype.delete = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ae(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(c, f) {
            if (!ae(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ae(this._keys[d], c)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function v(m, c) {
        return m;
      }
      function P(m, c) {
        return c;
      }
      function S(m, c) {
        return [m, c];
      }
    }
    function Mt() {
      var r = (
        /** @class */
        function() {
          function i() {
            this._map = new k();
          }
          return Object.defineProperty(i.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.has = function(a) {
            return this._map.has(a);
          }, i.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, i.prototype.delete = function(a) {
            return this._map.delete(a);
          }, i.prototype.clear = function() {
            this._map.clear();
          }, i.prototype.keys = function() {
            return this._map.keys();
          }, i.prototype.values = function() {
            return this._map.keys();
          }, i.prototype.entries = function() {
            return this._map.entries();
          }, i.prototype["@@iterator"] = function() {
            return this.keys();
          }, i.prototype[l] = function() {
            return this.keys();
          }, i;
        }()
      );
      return r;
    }
    function St() {
      var r = 16, i = E.create(), a = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? E.has(d, this._key) : !1;
          }, c.prototype.get = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? E.get(d, this._key) : void 0;
          }, c.prototype.set = function(f, d) {
            var p = v(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, c.prototype.delete = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while (E.has(i, c));
        return i[c] = !0, c;
      }
      function v(c, f) {
        if (!n.call(c, a)) {
          if (!f)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function P(c, f) {
        for (var d = 0; d < f; ++d)
          c[d] = Math.random() * 255 | 0;
        return c;
      }
      function S(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, c), f;
        }
        return P(new Array(c), c);
      }
      function m() {
        var c = S(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", d = 0; d < r; ++d) {
          var p = c[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function le(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(qe || (qe = {}));
function Qt(o) {
  return typeof o.name == "string" && typeof o.version == "string" && typeof o.title == "string" && typeof o.elementSelector == "string" && typeof o.group == "string" && typeof o.iconName == "string";
}
function Kt(o) {
  return function(e) {
    if (Qt(o)) {
      const t = {
        version: o.version,
        name: o.name,
        title: o.title,
        selector: o.elementSelector,
        category: o.group,
        icon: o.iconName,
        layoutKind: o.layoutKind,
        environment: o.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${o.elementSelector}-${o.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (h) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, h);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function er(o) {
  return Kt(o);
}
var Xe;
(function(o) {
  o.TEXT_INPUT = "text-input", o.PASSWORD_INPUT = "password-input", o.DROPDOWN = "dropdown", o.CHECKBOX = "checkbox", o.RADIO_BUTTON = "radio-button", o.RANGE_SLIDER = "range-slider", o.FILE_INPUT = "file-input", o.DATE_PICKER = "date-picker", o.COLOR_PICKER = "color-picker", o.NUMBER_INPUT = "number-input", o.TEXTAREA = "textarea", o.MULTI_SELECT = "multi-select", o.POPUP_DROPDOWN = "popup-dropdown", o.LAYOUT_PICKER = "layout-picker", o.RESPONSIVE_OVERRIDE = "responsive-override", o.IMAGE_PICKER = "image-picker", o.CHIPS = "chips";
})(Xe || (Xe = {}));
var Je;
(function(o) {
  o.PROPERTY = "property", o.EVENT = "event", o.ACTION = "action";
})(Je || (Je = {}));
var tr = Object.getOwnPropertyDescriptor, rr = (o, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? tr(e, t) : e, h = o.length - 1, l; h >= 0; h--)
    (l = o[h]) && (s = l(s) || s);
  return s;
};
let ve = class extends J {
  static getStudioTemplate() {
    return {
      kind: "generic",
      emptyText: "Nested pages display here dynamically based on the active path",
      slots: [],
      badges: ["Router Outlet"]
    };
  }
  render() {
    return Bt`<slot></slot>`;
  }
};
ve.styles = Tt`
    :host {
      display: block;
      width: 100%;
      min-height: 50px;
    }
  `;
ve = rr([
  er({
    name: "zero-router-outlet",
    version: "1.0.0",
    title: "Router Outlet",
    elementSelector: "zero-router-outlet",
    group: "Layout",
    iconName: "router-outlet-icon.png"
  }),
  Yt("zero-router-outlet")
], ve);
export {
  ve as ZeroRouterOutlet
};
