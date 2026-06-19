/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = globalThis, Ce = ye.ShadowRoot && (ye.ShadyCSS === void 0 || ye.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Me = Symbol(), Je = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ce && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Je.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Je.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ht = (i) => new ct(typeof i == "string" ? i : i + "", void 0, Me), ht = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, n, d) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[d + 1], i[0]);
  return new ct(t, i, Me);
}, Ut = (i, e) => {
  if (Ce) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), n = ye.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, i.appendChild(r);
  }
}, Qe = Ce ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ht(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Bt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Wt, getOwnPropertySymbols: Gt, getPrototypeOf: Ft } = Object, W = globalThis, Ke = W.trustedTypes, qt = Ke ? Ke.emptyScript : "", Te = W.reactiveElementPolyfillSupport, ne = (i, e) => i, ve = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? qt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, ze = (i, e) => !Vt(i, e), et = { attribute: !0, type: String, converter: ve, reflect: !1, useDefault: !1, hasChanged: ze };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = et) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(e, r, t);
      n !== void 0 && Bt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: n, set: d } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: n, set(l) {
      const g = n == null ? void 0 : n.call(this);
      d == null || d.call(this, l), this.requestUpdate(e, g, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? et;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = Ft(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, r = [...Wt(t), ...Gt(t)];
      for (const n of r) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, n] of t) this.elementProperties.set(r, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const n = this._$Eu(t, r);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const n of r) t.unshift(Qe(n));
    } else e !== void 0 && t.push(Qe(e));
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
    return Ut(e, this.constructor.elementStyles), e;
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
    var d;
    const r = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, r);
    if (n !== void 0 && r.reflect === !0) {
      const l = (((d = r.converter) == null ? void 0 : d.toAttribute) !== void 0 ? r.converter : ve).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(n) : this.setAttribute(n, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d, l;
    const r = this.constructor, n = r._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const g = r.getPropertyOptions(n), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((d = g.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? g.converter : ve;
      this._$Em = n;
      const P = y.fromAttribute(t, g.type);
      this[n] = P ?? ((l = this._$Ej) == null ? void 0 : l.get(n)) ?? P, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, n = !1, d) {
    var l;
    if (e !== void 0) {
      const g = this.constructor;
      if (n === !1 && (d = this[e]), r ?? (r = g.getPropertyOptions(e)), !((r.hasChanged ?? ze)(d, t) || r.useDefault && r.reflect && d === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(g._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: n, wrapped: d }, l) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), d !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [d, l] of this._$Ep) this[d] = l;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [d, l] of n) {
        const { wrapped: g } = l, y = this[d];
        g !== !0 || this._$AL.has(d) || y === void 0 || this.C(d, void 0, l, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((n) => {
        var d;
        return (d = n.hostUpdate) == null ? void 0 : d.call(n);
      }), this.update(t)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostUpdated) == null ? void 0 : n.call(r);
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
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[ne("elementProperties")] = /* @__PURE__ */ new Map(), Q[ne("finalized")] = /* @__PURE__ */ new Map(), Te == null || Te({ ReactiveElement: Q }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, tt = (i) => i, ge = ae.trustedTypes, rt = ge ? ge.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ft = "$lit$", Y = `lit$${Math.random().toFixed(9).slice(2)}$`, yt = "?" + Y, Xt = `<${yt}>`, X = document, se = () => X.createComment(""), le = (i) => i === null || typeof i != "object" && typeof i != "function", ke = Array.isArray, Zt = (i) => ke(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", Re = `[ 	
\f\r]`, ie = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, it = /-->/g, nt = />/g, G = RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, ot = /"/g, vt = /^(?:script|style|textarea|title)$/i, Jt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), B = Jt(1), K = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), F = X.createTreeWalker(X, 129);
function gt(i, e) {
  if (!ke(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return rt !== void 0 ? rt.createHTML(e) : e;
}
const Qt = (i, e) => {
  const t = i.length - 1, r = [];
  let n, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = ie;
  for (let g = 0; g < t; g++) {
    const y = i[g];
    let P, T, _ = -1, L = 0;
    for (; L < y.length && (l.lastIndex = L, T = l.exec(y), T !== null); ) L = l.lastIndex, l === ie ? T[1] === "!--" ? l = it : T[1] !== void 0 ? l = nt : T[2] !== void 0 ? (vt.test(T[2]) && (n = RegExp("</" + T[2], "g")), l = G) : T[3] !== void 0 && (l = G) : l === G ? T[0] === ">" ? (l = n ?? ie, _ = -1) : T[1] === void 0 ? _ = -2 : (_ = l.lastIndex - T[2].length, P = T[1], l = T[3] === void 0 ? G : T[3] === '"' ? ot : at) : l === ot || l === at ? l = G : l === it || l === nt ? l = ie : (l = G, n = void 0);
    const N = l === G && i[g + 1].startsWith("/>") ? " " : "";
    d += l === ie ? y + Xt : _ >= 0 ? (r.push(P), y.slice(0, _) + ft + y.slice(_) + Y + N) : y + Y + (_ === -2 ? g : N);
  }
  return [gt(i, d + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class de {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let d = 0, l = 0;
    const g = e.length - 1, y = this.parts, [P, T] = Qt(e, t);
    if (this.el = de.createElement(P, r), F.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (n = F.nextNode()) !== null && y.length < g; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const _ of n.getAttributeNames()) if (_.endsWith(ft)) {
          const L = T[l++], N = n.getAttribute(_).split(Y), j = /([.?@])?(.*)/.exec(L);
          y.push({ type: 1, index: d, name: j[2], strings: N, ctor: j[1] === "." ? er : j[1] === "?" ? tr : j[1] === "@" ? rr : _e }), n.removeAttribute(_);
        } else _.startsWith(Y) && (y.push({ type: 6, index: d }), n.removeAttribute(_));
        if (vt.test(n.tagName)) {
          const _ = n.textContent.split(Y), L = _.length - 1;
          if (L > 0) {
            n.textContent = ge ? ge.emptyScript : "";
            for (let N = 0; N < L; N++) n.append(_[N], se()), F.nextNode(), y.push({ type: 2, index: ++d });
            n.append(_[L], se());
          }
        }
      } else if (n.nodeType === 8) if (n.data === yt) y.push({ type: 2, index: d });
      else {
        let _ = -1;
        for (; (_ = n.data.indexOf(Y, _ + 1)) !== -1; ) y.push({ type: 7, index: d }), _ += Y.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const r = X.createElement("template");
    return r.innerHTML = e, r;
  }
}
function ee(i, e, t = i, r) {
  var l, g;
  if (e === K) return e;
  let n = r !== void 0 ? (l = t._$Co) == null ? void 0 : l[r] : t._$Cl;
  const d = le(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== d && ((g = n == null ? void 0 : n._$AO) == null || g.call(n, !1), d === void 0 ? n = void 0 : (n = new d(i), n._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = n : t._$Cl = n), n !== void 0 && (e = ee(i, n._$AS(i, e.values), n, r)), e;
}
class Kt {
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
    const { el: { content: t }, parts: r } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? X).importNode(t, !0);
    F.currentNode = n;
    let d = F.nextNode(), l = 0, g = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let P;
        y.type === 2 ? P = new pe(d, d.nextSibling, this, e) : y.type === 1 ? P = new y.ctor(d, y.name, y.strings, this, e) : y.type === 6 && (P = new ir(d, this, e)), this._$AV.push(P), y = r[++g];
      }
      l !== (y == null ? void 0 : y.index) && (d = F.nextNode(), l++);
    }
    return F.currentNode = X, n;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class pe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, n) {
    this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = ee(this, e, t), le(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== K && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Zt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== I && le(this._$AH) ? this._$AA.nextSibling.data = e : this.T(X.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = de.createElement(gt(r.h, r.h[0]), this.options)), r);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === n) this._$AH.p(t);
    else {
      const l = new Kt(n, this), g = l.u(this.options);
      l.p(t), this.T(g), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = st.get(e.strings);
    return t === void 0 && st.set(e.strings, t = new de(e)), t;
  }
  k(e) {
    ke(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const d of e) n === t.length ? t.push(r = new pe(this.O(se()), this.O(se()), this, this.options)) : r = t[n], r._$AI(d), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const n = tt(e).nextSibling;
      tt(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class _e {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, n, d) {
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = d, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = I;
  }
  _$AI(e, t = this, r, n) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = ee(this, e, t, 0), l = !le(e) || e !== this._$AH && e !== K, l && (this._$AH = e);
    else {
      const g = e;
      let y, P;
      for (e = d[0], y = 0; y < d.length - 1; y++) P = ee(this, g[r + y], t, y), P === K && (P = this._$AH[y]), l || (l = !le(P) || P !== this._$AH[y]), P === I ? e = I : e !== I && (e += (P ?? "") + d[y + 1]), this._$AH[y] = P;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class er extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class tr extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class rr extends _e {
  constructor(e, t, r, n, d) {
    super(e, t, r, n, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ee(this, e, t, 0) ?? I) === K) return;
    const r = this._$AH, n = e === I && r !== I || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, d = e !== I && (r === I || n);
    n && this.element.removeEventListener(this.name, this, r), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ir {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ee(this, e);
  }
}
const Ae = ae.litHtmlPolyfillSupport;
Ae == null || Ae(de, pe), (ae.litHtmlVersions ?? (ae.litHtmlVersions = [])).push("3.3.3");
const nr = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = r._$litPart$;
  if (n === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = n = new pe(e.insertBefore(se(), d), d, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class oe extends Q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = nr(t, this.renderRoot, this.renderOptions);
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
    return K;
  }
}
var ut;
oe._$litElement$ = !0, oe.finalized = !0, (ut = q.litElementHydrateSupport) == null || ut.call(q, { LitElement: oe });
const Se = q.litElementPolyfillSupport;
Se == null || Se({ LitElement: oe });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: ze }, sr = (i = or, e, t) => {
  const { kind: r, metadata: n } = t;
  let d = globalThis.litPropertyMetadata.get(n);
  if (d === void 0 && globalThis.litPropertyMetadata.set(n, d = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), d.set(t.name, i), r === "accessor") {
    const { name: l } = t;
    return { set(g) {
      const y = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(l, y, i, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(l, void 0, i, g), g;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(g) {
      const y = this[l];
      e.call(this, g), this.requestUpdate(l, y, i, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function S(i) {
  return (e, t) => typeof t == "object" ? sr(i, e, t) : ((r, n, d) => {
    const l = n.hasOwnProperty(d);
    return n.constructor.createProperty(d, r), l ? Object.getOwnPropertyDescriptor(n, d) : void 0;
  })(i, e, t);
}
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var dt;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof lt == "object" ? lt : typeof self == "object" ? self : typeof this == "object" ? this : g(), r = n(i);
    typeof t.Reflect < "u" && (r = n(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function n(y, P) {
      return function(T, _) {
        Object.defineProperty(y, T, { configurable: !0, writable: !0, value: _ }), P && P(T, _);
      };
    }
    function d() {
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
    function g() {
      return d() || l();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", d = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, P = !g && !y, T = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return Oe(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return Oe({ __proto__: null });
      } : function() {
        return Oe({});
      },
      has: P ? function(a, o) {
        return r.call(a, o);
      } : function(a, o) {
        return o in a;
      },
      get: P ? function(a, o) {
        return r.call(a, o) ? a[o] : void 0;
      } : function(a, o) {
        return a[o];
      }
    }, _ = Object.getPrototypeOf(Function), L = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : It(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Lt(), j = typeof WeakMap == "function" ? WeakMap : Nt(), U = n ? Symbol.for("@reflect-metadata:registry") : void 0, Z = Mt(), ue = zt(Z);
    function ce(a, o, s, p) {
      if (b(s)) {
        if (!Be(a))
          throw new TypeError();
        if (!Ye(o))
          throw new TypeError();
        return Pt(a, o);
      } else {
        if (!Be(a))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(p) && !b(p) && !J(p))
          throw new TypeError();
        return J(p) && (p = void 0), s = H(s), xt(a, o, s, p);
      }
    }
    e("decorate", ce);
    function te(a, o) {
      function s(p, v) {
        if (!M(p))
          throw new TypeError();
        if (!b(v) && !St(v))
          throw new TypeError();
        je(a, o, p, v);
      }
      return s;
    }
    e("metadata", te);
    function we(a, o, s, p) {
      if (!M(s))
        throw new TypeError();
      return b(p) || (p = H(p)), je(a, o, s, p);
    }
    e("defineMetadata", we);
    function $e(a, o, s) {
      if (!M(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Ie(a, o, s);
    }
    e("hasMetadata", $e);
    function he(a, o, s) {
      if (!M(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Ee(a, o, s);
    }
    e("hasOwnMetadata", he);
    function mt(a, o, s) {
      if (!M(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Le(a, o, s);
    }
    e("getMetadata", mt);
    function _t(a, o, s) {
      if (!M(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Ne(a, o, s);
    }
    e("getOwnMetadata", _t);
    function wt(a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = H(o)), De(a, o);
    }
    e("getMetadataKeys", wt);
    function $t(a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = H(o)), He(a, o);
    }
    e("getOwnMetadataKeys", $t);
    function Et(a, o, s) {
      if (!M(o))
        throw new TypeError();
      if (b(s) || (s = H(s)), !M(o))
        throw new TypeError();
      b(s) || (s = H(s));
      var p = re(
        o,
        s,
        /*Create*/
        !1
      );
      return b(p) ? !1 : p.OrdinaryDeleteMetadata(a, o, s);
    }
    e("deleteMetadata", Et);
    function Pt(a, o) {
      for (var s = a.length - 1; s >= 0; --s) {
        var p = a[s], v = p(o);
        if (!b(v) && !J(v)) {
          if (!Ye(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function xt(a, o, s, p) {
      for (var v = a.length - 1; v >= 0; --v) {
        var k = a[v], z = k(o, s, p);
        if (!b(z) && !J(z)) {
          if (!M(z))
            throw new TypeError();
          p = z;
        }
      }
      return p;
    }
    function Ie(a, o, s) {
      var p = Ee(a, o, s);
      if (p)
        return !0;
      var v = xe(o);
      return J(v) ? !1 : Ie(a, v, s);
    }
    function Ee(a, o, s) {
      var p = re(
        o,
        s,
        /*Create*/
        !1
      );
      return b(p) ? !1 : Ve(p.OrdinaryHasOwnMetadata(a, o, s));
    }
    function Le(a, o, s) {
      var p = Ee(a, o, s);
      if (p)
        return Ne(a, o, s);
      var v = xe(o);
      if (!J(v))
        return Le(a, v, s);
    }
    function Ne(a, o, s) {
      var p = re(
        o,
        s,
        /*Create*/
        !1
      );
      if (!b(p))
        return p.OrdinaryGetOwnMetadata(a, o, s);
    }
    function je(a, o, s, p) {
      var v = re(
        s,
        p,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(a, o, s, p);
    }
    function De(a, o) {
      var s = He(a, o), p = xe(a);
      if (p === null)
        return s;
      var v = De(p, o);
      if (v.length <= 0)
        return s;
      if (s.length <= 0)
        return v;
      for (var k = new N(), z = [], m = 0, u = s; m < u.length; m++) {
        var c = u[m], h = k.has(c);
        h || (k.add(c), z.push(c));
      }
      for (var f = 0, w = v; f < w.length; f++) {
        var c = w[f], h = k.has(c);
        h || (k.add(c), z.push(c));
      }
      return z;
    }
    function He(a, o) {
      var s = re(
        a,
        o,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(a, o) : [];
    }
    function Ue(a) {
      if (a === null)
        return 1;
      switch (typeof a) {
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
          return a === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function b(a) {
      return a === void 0;
    }
    function J(a) {
      return a === null;
    }
    function Ot(a) {
      return typeof a == "symbol";
    }
    function M(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function Tt(a, o) {
      switch (Ue(a)) {
        case 0:
          return a;
        case 1:
          return a;
        case 2:
          return a;
        case 3:
          return a;
        case 4:
          return a;
        case 5:
          return a;
      }
      var s = "string", p = We(a, d);
      if (p !== void 0) {
        var v = p.call(a, s);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Rt(a);
    }
    function Rt(a, o) {
      var s, p;
      {
        var v = a.toString;
        if (fe(v)) {
          var p = v.call(a);
          if (!M(p))
            return p;
        }
        var s = a.valueOf;
        if (fe(s)) {
          var p = s.call(a);
          if (!M(p))
            return p;
        }
      }
      throw new TypeError();
    }
    function Ve(a) {
      return !!a;
    }
    function At(a) {
      return "" + a;
    }
    function H(a) {
      var o = Tt(a);
      return Ot(o) ? o : At(o);
    }
    function Be(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function fe(a) {
      return typeof a == "function";
    }
    function Ye(a) {
      return typeof a == "function";
    }
    function St(a) {
      switch (Ue(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Pe(a, o) {
      return a === o || a !== a && o !== o;
    }
    function We(a, o) {
      var s = a[o];
      if (s != null) {
        if (!fe(s))
          throw new TypeError();
        return s;
      }
    }
    function Ge(a) {
      var o = We(a, l);
      if (!fe(o))
        throw new TypeError();
      var s = o.call(a);
      if (!M(s))
        throw new TypeError();
      return s;
    }
    function Fe(a) {
      return a.value;
    }
    function qe(a) {
      var o = a.next();
      return o.done ? !1 : o;
    }
    function Xe(a) {
      var o = a.return;
      o && o.call(a);
    }
    function xe(a) {
      var o = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === _ || o !== _)
        return o;
      var s = a.prototype, p = s && Object.getPrototypeOf(s);
      if (p == null || p === Object.prototype)
        return o;
      var v = p.constructor;
      return typeof v != "function" || v === a ? o : v;
    }
    function Ct() {
      var a;
      !b(U) && typeof t.Reflect < "u" && !(U in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (a = kt(t.Reflect));
      var o, s, p, v = new j(), k = {
        registerProvider: z,
        getProvider: u,
        setProvider: h
      };
      return k;
      function z(f) {
        if (!Object.isExtensible(k))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === f:
            break;
          case b(o):
            o = f;
            break;
          case o === f:
            break;
          case b(s):
            s = f;
            break;
          case s === f:
            break;
          default:
            p === void 0 && (p = new N()), p.add(f);
            break;
        }
      }
      function m(f, w) {
        if (!b(o)) {
          if (o.isProviderFor(f, w))
            return o;
          if (!b(s)) {
            if (s.isProviderFor(f, w))
              return o;
            if (!b(p))
              for (var R = Ge(p); ; ) {
                var C = qe(R);
                if (!C)
                  return;
                var D = Fe(C);
                if (D.isProviderFor(f, w))
                  return Xe(R), D;
              }
          }
        }
        if (!b(a) && a.isProviderFor(f, w))
          return a;
      }
      function u(f, w) {
        var R = v.get(f), C;
        return b(R) || (C = R.get(w)), b(C) && (C = m(f, w), b(C) || (b(R) && (R = new L(), v.set(f, R)), R.set(w, C))), C;
      }
      function c(f) {
        if (b(f))
          throw new TypeError();
        return o === f || s === f || !b(p) && p.has(f);
      }
      function h(f, w, R) {
        if (!c(R))
          throw new Error("Metadata provider not registered.");
        var C = u(f, w);
        if (C !== R) {
          if (!b(C))
            return !1;
          var D = v.get(f);
          b(D) && (D = new L(), v.set(f, D)), D.set(w, R);
        }
        return !0;
      }
    }
    function Mt() {
      var a;
      return !b(U) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (a = t.Reflect[U]), b(a) && (a = Ct()), !b(U) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function zt(a) {
      var o = new j(), s = {
        isProviderFor: function(c, h) {
          var f = o.get(c);
          return b(f) ? !1 : f.has(h);
        },
        OrdinaryDefineOwnMetadata: z,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: k,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: u
      };
      return Z.registerProvider(s), s;
      function p(c, h, f) {
        var w = o.get(c), R = !1;
        if (b(w)) {
          if (!f)
            return;
          w = new L(), o.set(c, w), R = !0;
        }
        var C = w.get(h);
        if (b(C)) {
          if (!f)
            return;
          if (C = new L(), w.set(h, C), !a.setProvider(c, h, s))
            throw w.delete(h), R && o.delete(c), new Error("Wrong provider for target.");
        }
        return C;
      }
      function v(c, h, f) {
        var w = p(
          h,
          f,
          /*Create*/
          !1
        );
        return b(w) ? !1 : Ve(w.has(c));
      }
      function k(c, h, f) {
        var w = p(
          h,
          f,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(c);
      }
      function z(c, h, f, w) {
        var R = p(
          f,
          w,
          /*Create*/
          !0
        );
        R.set(c, h);
      }
      function m(c, h) {
        var f = [], w = p(
          c,
          h,
          /*Create*/
          !1
        );
        if (b(w))
          return f;
        for (var R = w.keys(), C = Ge(R), D = 0; ; ) {
          var Ze = qe(C);
          if (!Ze)
            return f.length = D, f;
          var jt = Fe(Ze);
          try {
            f[D] = jt;
          } catch (Dt) {
            try {
              Xe(C);
            } finally {
              throw Dt;
            }
          }
          D++;
        }
      }
      function u(c, h, f) {
        var w = p(
          h,
          f,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(c))
          return !1;
        if (w.size === 0) {
          var R = o.get(h);
          b(R) || (R.delete(f), R.size === 0 && o.delete(R));
        }
        return !0;
      }
    }
    function kt(a) {
      var o = a.defineMetadata, s = a.hasOwnMetadata, p = a.getOwnMetadata, v = a.getOwnMetadataKeys, k = a.deleteMetadata, z = new j(), m = {
        isProviderFor: function(u, c) {
          var h = z.get(u);
          return !b(h) && h.has(c) ? !0 : v(u, c).length ? (b(h) && (h = new N(), z.set(u, h)), h.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: p,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: k
      };
      return m;
    }
    function re(a, o, s) {
      var p = Z.getProvider(a, o);
      if (!b(p))
        return p;
      if (s) {
        if (Z.setProvider(a, o, ue))
          return ue;
        throw new Error("Illegal state.");
      }
    }
    function It() {
      var a = {}, o = [], s = (
        /** @class */
        function() {
          function m(u, c, h) {
            this._index = 0, this._keys = u, this._values = c, this._selector = h;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var c = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), u;
          }, m.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: u, done: !0 };
          }, m;
        }()
      ), p = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(u) {
            var c = this._find(
              u,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, m.prototype.set = function(u, c) {
            var h = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[h] = c, this;
          }, m.prototype.delete = function(u) {
            var c = this._find(
              u,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var h = this._keys.length, f = c + 1; f < h; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, Pe(u, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new s(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new s(this._keys, this._values, k);
          }, m.prototype.entries = function() {
            return new s(this._keys, this._values, z);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(u, c) {
            if (!Pe(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (Pe(this._keys[h], u)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return p;
      function v(m, u) {
        return m;
      }
      function k(m, u) {
        return u;
      }
      function z(m, u) {
        return [m, u];
      }
    }
    function Lt() {
      var a = (
        /** @class */
        function() {
          function o() {
            this._map = new L();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(s) {
            return this._map.has(s);
          }, o.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, o.prototype.delete = function(s) {
            return this._map.delete(s);
          }, o.prototype.clear = function() {
            this._map.clear();
          }, o.prototype.keys = function() {
            return this._map.keys();
          }, o.prototype.values = function() {
            return this._map.keys();
          }, o.prototype.entries = function() {
            return this._map.entries();
          }, o.prototype["@@iterator"] = function() {
            return this.keys();
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return a;
    }
    function Nt() {
      var a = 16, o = T.create(), s = p();
      return (
        /** @class */
        function() {
          function u() {
            this._key = p();
          }
          return u.prototype.has = function(c) {
            var h = v(
              c,
              /*create*/
              !1
            );
            return h !== void 0 ? T.has(h, this._key) : !1;
          }, u.prototype.get = function(c) {
            var h = v(
              c,
              /*create*/
              !1
            );
            return h !== void 0 ? T.get(h, this._key) : void 0;
          }, u.prototype.set = function(c, h) {
            var f = v(
              c,
              /*create*/
              !0
            );
            return f[this._key] = h, this;
          }, u.prototype.delete = function(c) {
            var h = v(
              c,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = p();
          }, u;
        }()
      );
      function p() {
        var u;
        do
          u = "@@WeakMap@@" + m();
        while (T.has(o, u));
        return o[u] = !0, u;
      }
      function v(u, c) {
        if (!r.call(u, s)) {
          if (!c)
            return;
          Object.defineProperty(u, s, { value: T.create() });
        }
        return u[s];
      }
      function k(u, c) {
        for (var h = 0; h < c; ++h)
          u[h] = Math.random() * 255 | 0;
        return u;
      }
      function z(u) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : k(c, u), c;
        }
        return k(new Array(u), u);
      }
      function m() {
        var u = z(a);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var c = "", h = 0; h < a; ++h) {
          var f = u[h];
          (h === 4 || h === 6 || h === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function Oe(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(dt || (dt = {}));
function lr(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function dr(i) {
  return function(e) {
    if (lr(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${i.elementSelector}-${i.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (d) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, d);
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
function pr(i) {
  return dr(i);
}
function ur(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function cr(i) {
  return function(e, t) {
    try {
      ur(i);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let n = !0;
      if (typeof t == "string") {
        try {
          n = typeof e[t] != "function";
        } catch {
          n = !0;
        }
        n && (i.fieldMappings = i.fieldMappings ?? t);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function x(i) {
  return cr(i);
}
var A;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker";
})(A || (A = {}));
var E;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(E || (E = {}));
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, O = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? fr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && hr(e, t, n), n;
};
const me = class me extends oe {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.enableHeader = !1, this.label = "Panel Header", this.icon = "📄", this.expandable = !0, this.expanded = !0, this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  get onExpand() {
    return "expand";
  }
  get onCollapse() {
    return "collapse";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
  }
  expand() {
    this.expandable && (this.expanded = !0, this.dispatchEvent(new CustomEvent("expand")));
  }
  collapse() {
    this.expandable && (this.expanded = !1, this.dispatchEvent(new CustomEvent("collapse")));
  }
  toggleExpanded() {
    this.expanded ? this.collapse() : this.expand();
  }
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return B``;
    const e = this.overridePrefix, t = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, r = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let n = "";
    return Object.entries(t).forEach(([d, l]) => {
      const g = this.responsiveProps[d];
      if (!g) return;
      let y = "";
      Object.entries(g).forEach(([P, T]) => {
        const _ = r[P];
        _ && (y += `--${e}-${_}-override: ${T};
`);
      }), y && (n += `${l} {
  :host {
    ${y}  }
}
`);
    }), n ? B`<style>${n}</style>` : B``;
  }
  // --- Visual Logic ---
  get overridePrefix() {
    return "zero-panel";
  }
  computeBaseStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-width: var(--${e}-width-override, ${this.width})`,
      `--zero-height: var(--${e}-height-override, ${this.height})`,
      `--zero-margin: var(--${e}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${e}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${e}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? "auto" : "none"}`,
      `display: ${this.visible ? "block" : "none"}`
    ].join(";");
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${e}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${e}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${e}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${e}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${e}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${e}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${e}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${e}-direction-override, ${this.direction})`
    ].join(";");
  }
  computeColumnBasis() {
    const e = this.overridePrefix, t = `var(--${e}-gap-override, ${this.gap || "0px"})`, r = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${r}) - ((${t} * (${r} - 1)) / ${r}))`;
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!window.parent) return;
    const t = e.currentTarget.getBoundingClientRect(), r = (e.clientX - t.left) / t.width, n = (e.clientY - t.top) / t.height;
    this.direction === "row" ? r < 0.3 ? this.activeEdge = "left" : r > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : n < 0.3 ? this.activeEdge = "top" : n > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.activeEdge = "none";
  }
  renderDropIndicators() {
    return B`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    `;
  }
  renderHeader() {
    return this.enableHeader ? B`
      <div class="zero-layout-header" @click=${this.toggleExpanded}>
        <span class="icon">${this.icon}</span>
        <span class="label">${this.label}</span>
        ${this.expandable ? B`<span class="chevron">▼</span>` : ""}
      </div>
    ` : B``;
  }
};
me.slots = [], me.styles = ht`
    :host {
      display: block;
      box-sizing: border-box;
      width: var(--zero-width, 100%);
      height: var(--zero-height, auto);
      margin: var(--zero-margin, 0);
      opacity: var(--zero-opacity, 1);
      z-index: var(--zero-z-index, auto);
      pointer-events: var(--zero-pointer-events, auto);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      padding: var(--zero-p-padding, 0px);
      background: var(--zero-p-bg, transparent);
      border: var(--zero-p-border-width, 0px) solid var(--zero-p-border-color, transparent);
      border-radius: var(--zero-p-border-radius, 0px);
      box-shadow: var(--zero-p-shadow, none);
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      overflow: var(--zero-p-overflow, visible);
      flex-direction: var(--zero-p-direction, row);
    }

    .zero-internal-container[data-direction="column"] {
      flex-direction: column;
    }

    /* Header & Expansion */
    .zero-layout-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      background: rgba(0,0,0,0.02);
    }

    .zero-layout-header .label { flex: 1; font-weight: 600; font-size: 0.95rem; }
    .zero-layout-header .icon { font-size: 1.1rem; }
    .zero-layout-header .chevron { transition: transform 0.3s ease; font-size: 0.8rem; opacity: 0.5; }
    
    :host([expanded]) .zero-layout-header .chevron { transform: rotate(180deg); }

    .zero-layout-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    :host([expanded]) .zero-layout-body {
      grid-template-rows: 1fr;
    }

    .zero-layout-content {
      min-height: 0;
    }

    /* Spatial Drop Indicators (30/70 Rule) */
    .drop-indicator {
      position: absolute;
      pointer-events: none;
      background: var(--zs-primary, #0ea5e9);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
      display: block;
    }

    .drop-indicator.active { opacity: 0.3; }

    .drop-indicator.left { left: 0; top: 0; width: 30%; height: 100%; border-right: 3px solid var(--zs-primary); }
    .drop-indicator.right { right: 0; top: 0; width: 30%; height: 100%; border-left: 3px solid var(--zs-primary); }
    .drop-indicator.top { top: 0; left: 0; width: 100%; height: 30%; border-bottom: 3px solid var(--zs-primary); }
    .drop-indicator.bottom { bottom: 0; left: 0; width: 100%; height: 30%; border-top: 3px solid var(--zs-primary); }
  `;
let $ = me;
O([
  S({ type: Object, attribute: "responsive-props" }),
  x({
    attributeType: E.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], $.prototype, "responsiveProps", 2);
O([
  S({ type: String })
], $.prototype, "activeEdge", 2);
O([
  S({ type: Boolean, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], $.prototype, "visible", 2);
O([
  S({ type: Number, reflect: !0, attribute: "z-index" }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], $.prototype, "zIndex", 2);
O([
  S({ type: Number, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], $.prototype, "opacity", 2);
O([
  S({ type: String, attribute: "custom-class" }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], $.prototype, "customClass", 2);
O([
  S({ type: Boolean, reflect: !0, attribute: "enable-header" }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
], $.prototype, "enableHeader", 2);
O([
  S({ type: String }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
], $.prototype, "label", 2);
O([
  S({ type: String }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
], $.prototype, "icon", 2);
O([
  S({ type: Boolean, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
], $.prototype, "expandable", 2);
O([
  S({ type: Boolean, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
], $.prototype, "expanded", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], $.prototype, "width", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], $.prototype, "height", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], $.prototype, "margin", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], $.prototype, "padding", 2);
O([
  x({
    attributeType: E.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], $.prototype, "onClick", 1);
O([
  x({
    attributeType: E.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
], $.prototype, "onExpand", 1);
O([
  x({
    attributeType: E.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
], $.prototype, "onCollapse", 1);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], $.prototype, "direction", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" }
    ]
  })
], $.prototype, "justify", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Stretch", value: "stretch" }
    ]
  })
], $.prototype, "align", 2);
O([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], $.prototype, "gap", 2);
O([
  S({ type: Number, reflect: !0, attribute: "items-per-row" }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Items Per Row",
    fieldMappings: "itemsPerRow",
    categoryLabel: "Layout"
  })
], $.prototype, "itemsPerRow", 2);
O([
  S({ type: String, attribute: "background-color", reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], $.prototype, "backgroundColor", 2);
O([
  S({ type: String, attribute: "border-radius", reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], $.prototype, "borderRadius", 2);
O([
  S({ type: String, reflect: !0, attribute: "elevation" }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.DROPDOWN,
    displayLabel: "Elevation (Shadow)",
    fieldMappings: "elevation",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Low", value: "0 2px 4px rgba(0,0,0,0.1)" },
      { label: "Medium", value: "0 4px 12px rgba(0,0,0,0.12)" },
      { label: "High", value: "0 12px 24px rgba(0,0,0,0.16)" }
    ]
  })
], $.prototype, "elevation", 2);
O([
  x({
    attributeType: E.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], $.prototype, "show", 1);
O([
  x({
    attributeType: E.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], $.prototype, "hide", 1);
O([
  x({
    attributeType: E.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
], $.prototype, "expand", 1);
O([
  x({
    attributeType: E.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
], $.prototype, "collapse", 1);
O([
  x({
    attributeType: E.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
], $.prototype, "toggleExpanded", 1);
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, bt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? vr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && yr(e, t, n), n;
};
function V(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const pt = {
  kind: "section",
  slots: [
    { id: "default", label: "Stack Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='padding:16px;border:2px dashed rgba(56,189,248,0.2);border-radius:8px;background:rgba(240,249,255,0.4);min-height:60px;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;'>",
    "<span style='font-size:0.6rem;color:#0ea5e9;font-weight:700;text-transform:uppercase;'>{{display:label}}</span>",
    "<span style='font-size:0.55rem;color:var(--uiv-text-muted,#94a3b8);'>dir: {{display:direction}} · wrap: {{display:wrap}}</span>",
    "</div>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Stack", "Layout"],
  emptyText: "Drop content here to stack"
};
let be = class extends $ {
  constructor() {
    super(...arguments), this.wrap = "nowrap";
  }
  get overridePrefix() {
    return "zero-stack";
  }
  static getStudioTemplate(i) {
    var j, U;
    if (!i) return pt;
    V(i.studio.display.label || "Stack");
    const e = ((j = i.studio.props) == null ? void 0 : j.direction) || "column", t = V(i.props.wrap || "nowrap"), r = V(i.props.justify || "flex-start"), n = V(i.props.align || "stretch"), d = V(i.props.gap || "0px"), l = V(i.props.padding || "0px"), g = V(i.props.backgroundColor || "transparent"), y = V(i.props.borderColor || "transparent"), P = V(i.props.borderRadius || "0px"), T = i.props.responsiveProps || ((U = i.studio.props) == null ? void 0 : U.responsiveProps) || {};
    let _ = "";
    const L = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, N = {
      gap: "gap",
      padding: "padding",
      direction: "direction",
      justify: "justify",
      align: "align",
      wrap: "wrap"
    };
    return Object.entries(L).forEach(([Z, ue]) => {
      const ce = T[Z];
      if (!ce) return;
      let te = "";
      Object.entries(ce).forEach(([we, $e]) => {
        const he = N[we];
        he && (te += `--zero-stack-${he}-override: ${$e};
`);
      }), te && (_ += `${ue} { .studio-stack-container { ${te} } }
`);
    }), {
      ...pt,
      templateHtml: [
        `<div class="studio-stack-container" style="
          --zero-p-direction: var(--zero-stack-direction-override, ${e});
          --zero-p-wrap: var(--zero-stack-wrap-override, ${t});
          --zero-p-justify: var(--zero-stack-justify-override, ${r});
          --zero-p-align: var(--zero-stack-align-override, ${n});
          --zero-p-gap: var(--zero-stack-gap-override, ${d});
          --zero-p-padding: var(--zero-stack-padding-override, ${l});
          --zero-p-bg: ${g};
          --zero-p-border-color: ${y};
          --zero-p-border-radius: ${P};

          display: flex;
          flex-direction: var(--zero-p-direction);
          flex-wrap: var(--zero-p-wrap);
          justify-content: var(--zero-p-justify);
          align-items: var(--zero-p-align);
          gap: var(--zero-p-gap);
          padding: var(--zero-p-padding);
          background: var(--zero-p-bg);
          border: 1px solid var(--zero-p-border-color);
          border-radius: var(--zero-p-border-radius);
          box-sizing: border-box;
          min-height: 80px;
          width: 100%;
        ">`,
        `<style>
          .studio-stack-container zero-studio-slot[name='default'] { flex: 1; display:flex; min-height: 100%; }
          ${_}
        </style>`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  computeInternalStyles() {
    const i = this.overridePrefix;
    let e = super.computeInternalStyles();
    const t = `var(--${i}-wrap-override, ${this.wrap})`;
    return e += `; --zero-stack-w: ${t}`, e;
  }
  render() {
    return B`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="stack-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
be.styles = [
  $.styles,
  ht`
      .stack-content {
        display: flex;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        flex-direction: var(--zero-p-direction, column);
        flex-wrap: var(--zero-stack-w, nowrap);
      }
    `
];
bt([
  S({ type: String, reflect: !0 }),
  x({
    attributeType: E.PROPERTY,
    uiComponentType: A.RESPONSIVE_OVERRIDE,
    displayLabel: "Wrap",
    fieldMappings: "wrap",
    categoryLabel: "Layout",
    optionItems: [
      { label: "No Wrap", value: "nowrap" },
      { label: "Wrap", value: "wrap" }
    ]
  })
], be.prototype, "wrap", 2);
be = bt([
  pr({
    name: "zero-stack",
    version: "1.0.0",
    title: "Stack",
    elementSelector: "zero-stack",
    group: "Layout",
    iconName: "stack_icon.png"
  }),
  ar("zero-stack")
], be);
export {
  be as ZeroStack,
  pt as studioTemplate
};
