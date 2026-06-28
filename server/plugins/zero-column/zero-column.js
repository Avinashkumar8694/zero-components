/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Oe = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Se = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Se) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Oe && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ut = (i) => new lt(typeof i == "string" ? i : i + "", void 0, Se), dt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, n, d) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[d + 1], i[0]);
  return new lt(t, i, Se);
}, Ht = (i, e) => {
  if (Oe) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), n = he.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, i.appendChild(r);
  }
}, qe = Oe ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ut(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Bt, getOwnPropertyDescriptor: Wt, getOwnPropertyNames: Gt, getOwnPropertySymbols: Yt, getPrototypeOf: Ft } = Object, W = globalThis, Xe = W.trustedTypes, qt = Xe ? Xe.emptyScript : "", we = W.reactiveElementPolyfillSupport, ie = (i, e) => i, fe = { toAttribute(i, e) {
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
} }, Ae = (i, e) => !Vt(i, e), Ze = { attribute: !0, type: String, converter: fe, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(e, r, t);
      n !== void 0 && Bt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: n, set: d } = Wt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: n, set(l) {
      const y = n == null ? void 0 : n.call(this);
      d == null || d.call(this, l), this.requestUpdate(e, y, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ie("elementProperties"))) return;
    const e = Ft(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ie("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ie("properties"))) {
      const t = this.properties, r = [...Gt(t), ...Yt(t)];
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
      for (const n of r) t.unshift(qe(n));
    } else e !== void 0 && t.push(qe(e));
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
    return Ht(e, this.constructor.elementStyles), e;
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
      const l = (((d = r.converter) == null ? void 0 : d.toAttribute) !== void 0 ? r.converter : fe).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(n) : this.setAttribute(n, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d, l;
    const r = this.constructor, n = r._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const y = r.getPropertyOptions(n), f = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((d = y.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? y.converter : fe;
      this._$Em = n;
      const $ = f.fromAttribute(t, y.type);
      this[n] = $ ?? ((l = this._$Ej) == null ? void 0 : l.get(n)) ?? $, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, n = !1, d) {
    var l;
    if (e !== void 0) {
      const y = this.constructor;
      if (n === !1 && (d = this[e]), r ?? (r = y.getPropertyOptions(e)), !((r.hasChanged ?? Ae)(d, t) || r.useDefault && r.reflect && d === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(y._$Eu(e, r)))) return;
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
        const { wrapped: y } = l, f = this[d];
        y !== !0 || this._$AL.has(d) || f === void 0 || this.C(d, void 0, l, f);
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
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[ie("elementProperties")] = /* @__PURE__ */ new Map(), Q[ie("finalized")] = /* @__PURE__ */ new Map(), we == null || we({ ReactiveElement: Q }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, Je = (i) => i, ve = ne.trustedTypes, Qe = ve ? ve.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ut = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, ct = "?" + B, Xt = `<${ct}>`, X = document, ae = () => X.createComment(""), se = (i) => i === null || typeof i != "object" && typeof i != "function", Me = Array.isArray, Zt = (i) => Me(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", Ee = `[ 	
\f\r]`, re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ke = /-->/g, et = />/g, Y = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, rt = /"/g, pt = /^(?:script|style|textarea|title)$/i, Jt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), U = Jt(1), K = Symbol.for("lit-noChange"), z = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), F = X.createTreeWalker(X, 129);
function ht(i, e) {
  if (!Me(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qe !== void 0 ? Qe.createHTML(e) : e;
}
const Qt = (i, e) => {
  const t = i.length - 1, r = [];
  let n, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = re;
  for (let y = 0; y < t; y++) {
    const f = i[y];
    let $, E, w = -1, j = 0;
    for (; j < f.length && (l.lastIndex = j, E = l.exec(f), E !== null); ) j = l.lastIndex, l === re ? E[1] === "!--" ? l = Ke : E[1] !== void 0 ? l = et : E[2] !== void 0 ? (pt.test(E[2]) && (n = RegExp("</" + E[2], "g")), l = Y) : E[3] !== void 0 && (l = Y) : l === Y ? E[0] === ">" ? (l = n ?? re, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? Y : E[3] === '"' ? rt : tt) : l === rt || l === tt ? l = Y : l === Ke || l === et ? l = re : (l = Y, n = void 0);
    const N = l === Y && i[y + 1].startsWith("/>") ? " " : "";
    d += l === re ? f + Xt : w >= 0 ? (r.push($), f.slice(0, w) + ut + f.slice(w) + B + N) : f + B + (w === -2 ? y : N);
  }
  return [ht(i, d + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class le {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let d = 0, l = 0;
    const y = e.length - 1, f = this.parts, [$, E] = Qt(e, t);
    if (this.el = le.createElement($, r), F.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (n = F.nextNode()) !== null && f.length < y; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const w of n.getAttributeNames()) if (w.endsWith(ut)) {
          const j = E[l++], N = n.getAttribute(w).split(B), V = /([.?@])?(.*)/.exec(j);
          f.push({ type: 1, index: d, name: V[2], strings: N, ctor: V[1] === "." ? er : V[1] === "?" ? tr : V[1] === "@" ? rr : ge }), n.removeAttribute(w);
        } else w.startsWith(B) && (f.push({ type: 6, index: d }), n.removeAttribute(w));
        if (pt.test(n.tagName)) {
          const w = n.textContent.split(B), j = w.length - 1;
          if (j > 0) {
            n.textContent = ve ? ve.emptyScript : "";
            for (let N = 0; N < j; N++) n.append(w[N], ae()), F.nextNode(), f.push({ type: 2, index: ++d });
            n.append(w[j], ae());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ct) f.push({ type: 2, index: d });
      else {
        let w = -1;
        for (; (w = n.data.indexOf(B, w + 1)) !== -1; ) f.push({ type: 7, index: d }), w += B.length - 1;
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
  var l, y;
  if (e === K) return e;
  let n = r !== void 0 ? (l = t._$Co) == null ? void 0 : l[r] : t._$Cl;
  const d = se(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== d && ((y = n == null ? void 0 : n._$AO) == null || y.call(n, !1), d === void 0 ? n = void 0 : (n = new d(i), n._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = n : t._$Cl = n), n !== void 0 && (e = ee(i, n._$AS(i, e.values), n, r)), e;
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
    let d = F.nextNode(), l = 0, y = 0, f = r[0];
    for (; f !== void 0; ) {
      if (l === f.index) {
        let $;
        f.type === 2 ? $ = new de(d, d.nextSibling, this, e) : f.type === 1 ? $ = new f.ctor(d, f.name, f.strings, this, e) : f.type === 6 && ($ = new ir(d, this, e)), this._$AV.push($), f = r[++y];
      }
      l !== (f == null ? void 0 : f.index) && (d = F.nextNode(), l++);
    }
    return F.currentNode = X, n;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class de {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, n) {
    this.type = 2, this._$AH = z, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = ee(this, e, t), se(e) ? e === z || e == null || e === "" ? (this._$AH !== z && this._$AR(), this._$AH = z) : e !== this._$AH && e !== K && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Zt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== z && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(X.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = le.createElement(ht(r.h, r.h[0]), this.options)), r);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === n) this._$AH.p(t);
    else {
      const l = new Kt(n, this), y = l.u(this.options);
      l.p(t), this.T(y), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = it.get(e.strings);
    return t === void 0 && it.set(e.strings, t = new le(e)), t;
  }
  k(e) {
    Me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const d of e) n === t.length ? t.push(r = new de(this.O(ae()), this.O(ae()), this, this.options)) : r = t[n], r._$AI(d), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const n = Je(e).nextSibling;
      Je(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ge {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, n, d) {
    this.type = 1, this._$AH = z, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = d, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = z;
  }
  _$AI(e, t = this, r, n) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = ee(this, e, t, 0), l = !se(e) || e !== this._$AH && e !== K, l && (this._$AH = e);
    else {
      const y = e;
      let f, $;
      for (e = d[0], f = 0; f < d.length - 1; f++) $ = ee(this, y[r + f], t, f), $ === K && ($ = this._$AH[f]), l || (l = !se($) || $ !== this._$AH[f]), $ === z ? e = z : e !== z && (e += ($ ?? "") + d[f + 1]), this._$AH[f] = $;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class er extends ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === z ? void 0 : e;
  }
}
class tr extends ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== z);
  }
}
class rr extends ge {
  constructor(e, t, r, n, d) {
    super(e, t, r, n, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ee(this, e, t, 0) ?? z) === K) return;
    const r = this._$AH, n = e === z && r !== z || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, d = e !== z && (r === z || n);
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
const xe = ne.litHtmlPolyfillSupport;
xe == null || xe(le, de), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const nr = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = r._$litPart$;
  if (n === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = n = new de(e.insertBefore(ae(), d), d, void 0, t ?? {});
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
var st;
oe._$litElement$ = !0, oe.finalized = !0, (st = q.litElementHydrateSupport) == null || st.call(q, { LitElement: oe });
const Pe = q.litElementPolyfillSupport;
Pe == null || Pe({ LitElement: oe });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: fe, reflect: !1, hasChanged: Ae }, sr = (i = ar, e, t) => {
  const { kind: r, metadata: n } = t;
  let d = globalThis.litPropertyMetadata.get(n);
  if (d === void 0 && globalThis.litPropertyMetadata.set(n, d = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), d.set(t.name, i), r === "accessor") {
    const { name: l } = t;
    return { set(y) {
      const f = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(l, f, i, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(l, void 0, i, y), y;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(y) {
      const f = this[l];
      e.call(this, y), this.requestUpdate(l, f, i, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function O(i) {
  return (e, t) => typeof t == "object" ? sr(i, e, t) : ((r, n, d) => {
    const l = n.hasOwnProperty(d);
    return n.constructor.createProperty(d, r), l ? Object.getOwnPropertyDescriptor(n, d) : void 0;
  })(i, e, t);
}
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ot;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof nt == "object" ? nt : typeof self == "object" ? self : typeof this == "object" ? this : y(), r = n(i);
    typeof t.Reflect < "u" && (r = n(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function n(f, $) {
      return function(E, w) {
        Object.defineProperty(f, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    function y() {
      return d() || l();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", d = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, $ = !y && !f, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return $e(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return $e({ __proto__: null });
      } : function() {
        return $e({});
      },
      has: $ ? function(o, a) {
        return r.call(o, a);
      } : function(o, a) {
        return a in o;
      },
      get: $ ? function(o, a) {
        return r.call(o, a) ? o[a] : void 0;
      } : function(o, a) {
        return o[a];
      }
    }, w = Object.getPrototypeOf(Function), j = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : It(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : jt(), V = typeof WeakMap == "function" ? WeakMap : Nt(), Z = n ? Symbol.for("@reflect-metadata:registry") : void 0, ce = Tt(), Re = zt(ce);
    function ft(o, a, s, u) {
      if (m(s)) {
        if (!De(o))
          throw new TypeError();
        if (!Ue(a))
          throw new TypeError();
        return xt(o, a);
      } else {
        if (!De(o))
          throw new TypeError();
        if (!R(a))
          throw new TypeError();
        if (!R(u) && !m(u) && !J(u))
          throw new TypeError();
        return J(u) && (u = void 0), s = D(s), Pt(o, a, s, u);
      }
    }
    e("decorate", ft);
    function vt(o, a) {
      function s(u, g) {
        if (!R(u))
          throw new TypeError();
        if (!m(g) && !Rt(g))
          throw new TypeError();
        ke(o, a, u, g);
      }
      return s;
    }
    e("metadata", vt);
    function yt(o, a, s, u) {
      if (!R(s))
        throw new TypeError();
      return m(u) || (u = D(u)), ke(o, a, s, u);
    }
    e("defineMetadata", yt);
    function gt(o, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Ce(o, a, s);
    }
    e("hasMetadata", gt);
    function mt(o, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = D(s)), me(o, a, s);
    }
    e("hasOwnMetadata", mt);
    function bt(o, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Te(o, a, s);
    }
    e("getMetadata", bt);
    function _t(o, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = D(s)), ze(o, a, s);
    }
    e("getOwnMetadata", _t);
    function $t(o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = D(a)), Ie(o, a);
    }
    e("getMetadataKeys", $t);
    function wt(o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = D(a)), je(o, a);
    }
    e("getOwnMetadataKeys", wt);
    function Et(o, a, s) {
      if (!R(a))
        throw new TypeError();
      if (m(s) || (s = D(s)), !R(a))
        throw new TypeError();
      m(s) || (s = D(s));
      var u = te(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(o, a, s);
    }
    e("deleteMetadata", Et);
    function xt(o, a) {
      for (var s = o.length - 1; s >= 0; --s) {
        var u = o[s], g = u(a);
        if (!m(g) && !J(g)) {
          if (!Ue(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function Pt(o, a, s, u) {
      for (var g = o.length - 1; g >= 0; --g) {
        var T = o[g], C = T(a, s, u);
        if (!m(C) && !J(C)) {
          if (!R(C))
            throw new TypeError();
          u = C;
        }
      }
      return u;
    }
    function Ce(o, a, s) {
      var u = me(o, a, s);
      if (u)
        return !0;
      var g = _e(a);
      return J(g) ? !1 : Ce(o, g, s);
    }
    function me(o, a, s) {
      var u = te(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Le(u.OrdinaryHasOwnMetadata(o, a, s));
    }
    function Te(o, a, s) {
      var u = me(o, a, s);
      if (u)
        return ze(o, a, s);
      var g = _e(a);
      if (!J(g))
        return Te(o, g, s);
    }
    function ze(o, a, s) {
      var u = te(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(o, a, s);
    }
    function ke(o, a, s, u) {
      var g = te(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(o, a, s, u);
    }
    function Ie(o, a) {
      var s = je(o, a), u = _e(o);
      if (u === null)
        return s;
      var g = Ie(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var T = new N(), C = [], b = 0, c = s; b < c.length; b++) {
        var p = c[b], h = T.has(p);
        h || (T.add(p), C.push(p));
      }
      for (var v = 0, _ = g; v < _.length; v++) {
        var p = _[v], h = T.has(p);
        h || (T.add(p), C.push(p));
      }
      return C;
    }
    function je(o, a) {
      var s = te(
        o,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(o, a) : [];
    }
    function Ne(o) {
      if (o === null)
        return 1;
      switch (typeof o) {
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
          return o === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(o) {
      return o === void 0;
    }
    function J(o) {
      return o === null;
    }
    function Ot(o) {
      return typeof o == "symbol";
    }
    function R(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function St(o, a) {
      switch (Ne(o)) {
        case 0:
          return o;
        case 1:
          return o;
        case 2:
          return o;
        case 3:
          return o;
        case 4:
          return o;
        case 5:
          return o;
      }
      var s = "string", u = He(o, d);
      if (u !== void 0) {
        var g = u.call(o, s);
        if (R(g))
          throw new TypeError();
        return g;
      }
      return At(o);
    }
    function At(o, a) {
      var s, u;
      {
        var g = o.toString;
        if (pe(g)) {
          var u = g.call(o);
          if (!R(u))
            return u;
        }
        var s = o.valueOf;
        if (pe(s)) {
          var u = s.call(o);
          if (!R(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Le(o) {
      return !!o;
    }
    function Mt(o) {
      return "" + o;
    }
    function D(o) {
      var a = St(o);
      return Ot(a) ? a : Mt(a);
    }
    function De(o) {
      return Array.isArray ? Array.isArray(o) : o instanceof Object ? o instanceof Array : Object.prototype.toString.call(o) === "[object Array]";
    }
    function pe(o) {
      return typeof o == "function";
    }
    function Ue(o) {
      return typeof o == "function";
    }
    function Rt(o) {
      switch (Ne(o)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function be(o, a) {
      return o === a || o !== o && a !== a;
    }
    function He(o, a) {
      var s = o[a];
      if (s != null) {
        if (!pe(s))
          throw new TypeError();
        return s;
      }
    }
    function Ve(o) {
      var a = He(o, l);
      if (!pe(a))
        throw new TypeError();
      var s = a.call(o);
      if (!R(s))
        throw new TypeError();
      return s;
    }
    function Be(o) {
      return o.value;
    }
    function We(o) {
      var a = o.next();
      return a.done ? !1 : a;
    }
    function Ge(o) {
      var a = o.return;
      a && a.call(o);
    }
    function _e(o) {
      var a = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === w || a !== w)
        return a;
      var s = o.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === o ? a : g;
    }
    function Ct() {
      var o;
      !m(Z) && typeof t.Reflect < "u" && !(Z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (o = kt(t.Reflect));
      var a, s, u, g = new V(), T = {
        registerProvider: C,
        getProvider: c,
        setProvider: h
      };
      return T;
      function C(v) {
        if (!Object.isExtensible(T))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case o === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          case m(s):
            s = v;
            break;
          case s === v:
            break;
          default:
            u === void 0 && (u = new N()), u.add(v);
            break;
        }
      }
      function b(v, _) {
        if (!m(a)) {
          if (a.isProviderFor(v, _))
            return a;
          if (!m(s)) {
            if (s.isProviderFor(v, _))
              return a;
            if (!m(u))
              for (var x = Ve(u); ; ) {
                var S = We(x);
                if (!S)
                  return;
                var L = Be(S);
                if (L.isProviderFor(v, _))
                  return Ge(x), L;
              }
          }
        }
        if (!m(o) && o.isProviderFor(v, _))
          return o;
      }
      function c(v, _) {
        var x = g.get(v), S;
        return m(x) || (S = x.get(_)), m(S) && (S = b(v, _), m(S) || (m(x) && (x = new j(), g.set(v, x)), x.set(_, S))), S;
      }
      function p(v) {
        if (m(v))
          throw new TypeError();
        return a === v || s === v || !m(u) && u.has(v);
      }
      function h(v, _, x) {
        if (!p(x))
          throw new Error("Metadata provider not registered.");
        var S = c(v, _);
        if (S !== x) {
          if (!m(S))
            return !1;
          var L = g.get(v);
          m(L) && (L = new j(), g.set(v, L)), L.set(_, x);
        }
        return !0;
      }
    }
    function Tt() {
      var o;
      return !m(Z) && R(t.Reflect) && Object.isExtensible(t.Reflect) && (o = t.Reflect[Z]), m(o) && (o = Ct()), !m(Z) && R(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: o
      }), o;
    }
    function zt(o) {
      var a = new V(), s = {
        isProviderFor: function(p, h) {
          var v = a.get(p);
          return m(v) ? !1 : v.has(h);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return ce.registerProvider(s), s;
      function u(p, h, v) {
        var _ = a.get(p), x = !1;
        if (m(_)) {
          if (!v)
            return;
          _ = new j(), a.set(p, _), x = !0;
        }
        var S = _.get(h);
        if (m(S)) {
          if (!v)
            return;
          if (S = new j(), _.set(h, S), !o.setProvider(p, h, s))
            throw _.delete(h), x && a.delete(p), new Error("Wrong provider for target.");
        }
        return S;
      }
      function g(p, h, v) {
        var _ = u(
          h,
          v,
          /*Create*/
          !1
        );
        return m(_) ? !1 : Le(_.has(p));
      }
      function T(p, h, v) {
        var _ = u(
          h,
          v,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(p);
      }
      function C(p, h, v, _) {
        var x = u(
          v,
          _,
          /*Create*/
          !0
        );
        x.set(p, h);
      }
      function b(p, h) {
        var v = [], _ = u(
          p,
          h,
          /*Create*/
          !1
        );
        if (m(_))
          return v;
        for (var x = _.keys(), S = Ve(x), L = 0; ; ) {
          var Ye = We(S);
          if (!Ye)
            return v.length = L, v;
          var Lt = Be(Ye);
          try {
            v[L] = Lt;
          } catch (Dt) {
            try {
              Ge(S);
            } finally {
              throw Dt;
            }
          }
          L++;
        }
      }
      function c(p, h, v) {
        var _ = u(
          h,
          v,
          /*Create*/
          !1
        );
        if (m(_) || !_.delete(p))
          return !1;
        if (_.size === 0) {
          var x = a.get(h);
          m(x) || (x.delete(v), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function kt(o) {
      var a = o.defineMetadata, s = o.hasOwnMetadata, u = o.getOwnMetadata, g = o.getOwnMetadataKeys, T = o.deleteMetadata, C = new V(), b = {
        isProviderFor: function(c, p) {
          var h = C.get(c);
          return !m(h) && h.has(p) ? !0 : g(c, p).length ? (m(h) && (h = new N(), C.set(c, h)), h.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: T
      };
      return b;
    }
    function te(o, a, s) {
      var u = ce.getProvider(o, a);
      if (!m(u))
        return u;
      if (s) {
        if (ce.setProvider(o, a, Re))
          return Re;
        throw new Error("Illegal state.");
      }
    }
    function It() {
      var o = {}, a = [], s = (
        /** @class */
        function() {
          function b(c, p, h) {
            this._index = 0, this._keys = c, this._values = p, this._selector = h;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var p = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, b.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, b;
        }()
      ), u = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = o, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(c) {
            var p = this._find(
              c,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, b.prototype.set = function(c, p) {
            var h = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[h] = p, this;
          }, b.prototype.delete = function(c) {
            var p = this._find(
              c,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var h = this._keys.length, v = p + 1; v < h; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, be(c, this._cacheKey) && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, b.prototype.values = function() {
            return new s(this._keys, this._values, T);
          }, b.prototype.entries = function() {
            return new s(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(c, p) {
            if (!be(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (be(this._keys[h], c)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function g(b, c) {
        return b;
      }
      function T(b, c) {
        return c;
      }
      function C(b, c) {
        return [b, c];
      }
    }
    function jt() {
      var o = (
        /** @class */
        function() {
          function a() {
            this._map = new j();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[l] = function() {
            return this.keys();
          }, a;
        }()
      );
      return o;
    }
    function Nt() {
      var o = 16, a = E.create(), s = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(p) {
            var h = g(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? E.has(h, this._key) : !1;
          }, c.prototype.get = function(p) {
            var h = g(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? E.get(h, this._key) : void 0;
          }, c.prototype.set = function(p, h) {
            var v = g(
              p,
              /*create*/
              !0
            );
            return v[this._key] = h, this;
          }, c.prototype.delete = function(p) {
            var h = g(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + b();
        while (E.has(a, c));
        return a[c] = !0, c;
      }
      function g(c, p) {
        if (!r.call(c, s)) {
          if (!p)
            return;
          Object.defineProperty(c, s, { value: E.create() });
        }
        return c[s];
      }
      function T(c, p) {
        for (var h = 0; h < p; ++h)
          c[h] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : T(p, c), p;
        }
        return T(new Array(c), c);
      }
      function b() {
        var c = C(o);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var p = "", h = 0; h < o; ++h) {
          var v = c[h];
          (h === 4 || h === 6 || h === 8) && (p += "-"), v < 16 && (p += "0"), p += v.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function $e(o) {
      return o.__ = void 0, delete o.__, o;
    }
  });
})(ot || (ot = {}));
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
function ur(i) {
  return dr(i);
}
function cr(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function pr(i) {
  return function(e, t) {
    try {
      cr(i);
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
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
function k(i) {
  return pr(i);
}
var I;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
})(I || (I = {}));
var M;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(M || (M = {}));
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, A = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? fr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && hr(e, t, n), n;
};
const ye = class ye extends oe {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
  }
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return U``;
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
      const y = this.responsiveProps[d];
      if (!y) return;
      let f = "";
      Object.entries(y).forEach(([$, E]) => {
        const w = r[$];
        w && (f += `--${e}-${w}-override: ${E};
`);
      }), f && (n += `${l} {
  :host {
    ${f}  }
}
`);
    }), n ? U`<style>${n}</style>` : U``;
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
  get isStudio() {
    if (typeof window > "u") return !1;
    const e = window.location.search || "";
    if (e.includes("mode=preview") || e.includes("mode=live"))
      return !1;
    try {
      if (window.parent && window.parent.zeroThemeManager && !e.includes("mode=preview"))
        return !0;
    } catch {
    }
    return !!(window.zeroThemeManager && !e.includes("mode=preview"));
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!this.isStudio) return;
    const t = e.currentTarget.getBoundingClientRect(), r = (e.clientX - t.left) / t.width, n = (e.clientY - t.top) / t.height;
    this.direction === "row" ? r < 0.3 ? this.activeEdge = "left" : r > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : n < 0.3 ? this.activeEdge = "top" : n > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? U`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : U``;
  }
  renderHeader() {
    return U``;
  }
};
ye.slots = [], ye.styles = dt`
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

    .zero-layout-content,
    .tab-pane {
      min-height: 0;
      display: flex;
      flex-direction: var(--zero-p-direction, row);
      flex-wrap: wrap;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      width: 100%;
      box-sizing: border-box;
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
let P = ye;
A([
  O({ type: Object, attribute: "responsive-props" })
], P.prototype, "responsiveProps", 2);
A([
  O({ type: String })
], P.prototype, "activeEdge", 2);
A([
  O({ type: Boolean, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], P.prototype, "visible", 2);
A([
  O({ type: Number, reflect: !0, attribute: "z-index" }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], P.prototype, "zIndex", 2);
A([
  O({ type: Number, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], P.prototype, "opacity", 2);
A([
  O({ type: String, attribute: "custom-class" }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], P.prototype, "customClass", 2);
A([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], P.prototype, "width", 2);
A([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], P.prototype, "height", 2);
A([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], P.prototype, "margin", 2);
A([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], P.prototype, "padding", 2);
A([
  k({
    attributeType: M.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], P.prototype, "onClick", 1);
A([
  O({ type: String, reflect: !0 })
], P.prototype, "direction", 2);
A([
  O({ type: String, reflect: !0 })
], P.prototype, "justify", 2);
A([
  O({ type: String, reflect: !0 })
], P.prototype, "align", 2);
A([
  O({ type: String, reflect: !0 })
], P.prototype, "gap", 2);
A([
  O({ type: Number, reflect: !0, attribute: "items-per-row" })
], P.prototype, "itemsPerRow", 2);
A([
  O({ type: String, attribute: "background-color", reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], P.prototype, "backgroundColor", 2);
A([
  O({ type: String, attribute: "border-radius", reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], P.prototype, "borderRadius", 2);
A([
  O({ type: String, reflect: !0, attribute: "elevation" }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.DROPDOWN,
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
], P.prototype, "elevation", 2);
A([
  k({
    attributeType: M.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], P.prototype, "show", 1);
A([
  k({
    attributeType: M.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], P.prototype, "hide", 1);
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, ue = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? yr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && vr(e, t, n), n;
};
const at = {
  kind: "column",
  slots: [
    { id: "default", label: "Column Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='flex:var(--zero-column-flex, 1);min-height:80px;display:flex;flex-direction:column;gap:8px;padding:16px;box-sizing:border-box;'>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Column"],
  emptyText: "Drag elements here"
};
let G = class extends P {
  constructor() {
    super(...arguments), this.flex = "1", this.direction = "column", this.padding = "16px", this.gap = "16px";
  }
  get overridePrefix() {
    return "zero-column";
  }
  static getStudioTemplate(i) {
    if (!i) return at;
    const e = H(i.props.flex || "1"), t = H(i.props.direction || "column"), r = H(i.props.justify || "flex-start"), n = H(i.props.align || "stretch"), d = H(i.props.gap || "16px"), l = H(i.props.padding || "16px"), y = H(i.props.backgroundColor || "transparent"), f = H(i.props.borderRadius || "0px"), $ = H(i.props.elevation || "none");
    return {
      ...at,
      templateHtml: [
        `<div class="studio-column-container" style="
          --zero-column-flex: ${e};
          --zero-column-direction: ${t};
          --zero-column-justify: ${r};
          --zero-column-align: ${n};
          --zero-column-gap: ${d};
          --zero-column-padding: ${l};
          --zero-column-bg: ${y};
          --zero-column-border-radius: ${f};
          --zero-column-shadow: ${$};

          flex: var(--zero-column-flex);
          display: flex;
          flex-direction: var(--zero-column-direction);
          justify-content: var(--zero-column-justify);
          align-items: var(--zero-column-align);
          gap: var(--zero-column-gap);
          padding: var(--zero-column-padding);
          background-color: var(--zero-column-bg);
          border-radius: var(--zero-column-border-radius);
          box-shadow: var(--zero-column-shadow);
          box-sizing: border-box;
          min-height: 80px;
          min-width: 0;
          position: relative;
        ">`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  computeBaseStyles() {
    let i = super.computeBaseStyles();
    const e = `var(--zero-column-flex-override, ${this.flex})`;
    return i += `; flex: ${e}; min-width: 0`, i;
  }
  computeInternalStyles() {
    let i = super.computeInternalStyles();
    const e = this.overridePrefix;
    return i += `; --zero-p-direction: var(--${e}-direction-override, ${this.direction})`, i;
  }
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return U``;
    const i = this.overridePrefix, e = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, t = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap",
      flex: "flex-override"
    };
    let r = "";
    return Object.entries(e).forEach(([n, d]) => {
      const l = this.responsiveProps[n];
      if (!l) return;
      let y = "";
      Object.entries(l).forEach(([f, $]) => {
        const E = t[f];
        E && (y += `--${i}-${E}-override: ${$};
`, f === "flex" && (y += `flex: ${$};
`));
      }), y && (r += `${d} {
  :host {
    ${y}  }
}
`);
    }), r ? U`<style>${r}</style>` : U``;
  }
  render() {
    return U`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <slot name="default"></slot>
          <slot></slot>
        </div>
      </div>
    `;
  }
};
G.slots = [
  { id: "default", label: "Column Content", dropzone: !0, anchor: "default", accepts: [] }
];
G.styles = [
  P.styles,
  dt`
      :host {
        /* Align using flex properties inherited from flex parent */
        flex: var(--zero-column-flex-override, var(--zero-column-flex, 1 1 0%));
        min-width: 0;
      }
      
      .column-inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    `
];
ue([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Flex Weight",
    fieldMappings: "flex",
    categoryLabel: "Layout"
  })
], G.prototype, "flex", 2);
ue([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], G.prototype, "direction", 2);
ue([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], G.prototype, "padding", 2);
ue([
  O({ type: String, reflect: !0 }),
  k({
    attributeType: M.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], G.prototype, "gap", 2);
G = ue([
  ur({
    name: "zero-column",
    version: "1.0.0",
    title: "Column Block",
    elementSelector: "zero-column",
    group: "Layout",
    iconName: "column-icon.png"
  }),
  or("zero-column")
], G);
function H(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  G as ZeroColumn,
  at as studioTemplate
};
