/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Pe = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Oe = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Pe && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ut = (i) => new lt(typeof i == "string" ? i : i + "", void 0, Oe), dt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, n, d) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[d + 1], i[0]);
  return new lt(t, i, Oe);
}, Ht = (i, e) => {
  if (Pe) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), n = he.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, i.appendChild(r);
  }
}, qe = Pe ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ut(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Bt, getOwnPropertyDescriptor: Wt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Gt, getPrototypeOf: Ft } = Object, Y = globalThis, Xe = Y.trustedTypes, qt = Xe ? Xe.emptyScript : "", $e = Y.reactiveElementPolyfillSupport, ne = (i, e) => i, fe = { toAttribute(i, e) {
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
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Y.litPropertyMetadata ?? (Y.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
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
      const v = n == null ? void 0 : n.call(this);
      d == null || d.call(this, l), this.requestUpdate(e, v, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = Ft(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, r = [...Yt(t), ...Gt(t)];
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
      const v = r.getPropertyOptions(n), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((d = v.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? v.converter : fe;
      this._$Em = n;
      const _ = f.fromAttribute(t, v.type);
      this[n] = _ ?? ((l = this._$Ej) == null ? void 0 : l.get(n)) ?? _, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, n = !1, d) {
    var l;
    if (e !== void 0) {
      const v = this.constructor;
      if (n === !1 && (d = this[e]), r ?? (r = v.getPropertyOptions(e)), !((r.hasChanged ?? Ae)(d, t) || r.useDefault && r.reflect && d === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(v._$Eu(e, r)))) return;
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
        const { wrapped: v } = l, f = this[d];
        v !== !0 || this._$AL.has(d) || f === void 0 || this.C(d, void 0, l, f);
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[ne("elementProperties")] = /* @__PURE__ */ new Map(), K[ne("finalized")] = /* @__PURE__ */ new Map(), $e == null || $e({ ReactiveElement: K }), (Y.reactiveElementVersions ?? (Y.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, Je = (i) => i, ye = oe.trustedTypes, Qe = ye ? ye.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ut = "$lit$", W = `lit$${Math.random().toFixed(9).slice(2)}$`, ct = "?" + W, Xt = `<${ct}>`, Z = document, se = () => Z.createComment(""), le = (i) => i === null || typeof i != "object" && typeof i != "function", Re = Array.isArray, Zt = (i) => Re(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", Ee = `[ 	
\f\r]`, ie = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ke = /-->/g, et = />/g, F = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, rt = /"/g, pt = /^(?:script|style|textarea|title)$/i, Jt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), H = Jt(1), ee = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), q = Z.createTreeWalker(Z, 129);
function ht(i, e) {
  if (!Re(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qe !== void 0 ? Qe.createHTML(e) : e;
}
const Qt = (i, e) => {
  const t = i.length - 1, r = [];
  let n, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = ie;
  for (let v = 0; v < t; v++) {
    const f = i[v];
    let _, E, $ = -1, j = 0;
    for (; j < f.length && (l.lastIndex = j, E = l.exec(f), E !== null); ) j = l.lastIndex, l === ie ? E[1] === "!--" ? l = Ke : E[1] !== void 0 ? l = et : E[2] !== void 0 ? (pt.test(E[2]) && (n = RegExp("</" + E[2], "g")), l = F) : E[3] !== void 0 && (l = F) : l === F ? E[0] === ">" ? (l = n ?? ie, $ = -1) : E[1] === void 0 ? $ = -2 : ($ = l.lastIndex - E[2].length, _ = E[1], l = E[3] === void 0 ? F : E[3] === '"' ? rt : tt) : l === rt || l === tt ? l = F : l === Ke || l === et ? l = ie : (l = F, n = void 0);
    const L = l === F && i[v + 1].startsWith("/>") ? " " : "";
    d += l === ie ? f + Xt : $ >= 0 ? (r.push(_), f.slice(0, $) + ut + f.slice($) + W + L) : f + W + ($ === -2 ? v : L);
  }
  return [ht(i, d + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class de {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let d = 0, l = 0;
    const v = e.length - 1, f = this.parts, [_, E] = Qt(e, t);
    if (this.el = de.createElement(_, r), q.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (n = q.nextNode()) !== null && f.length < v; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const $ of n.getAttributeNames()) if ($.endsWith(ut)) {
          const j = E[l++], L = n.getAttribute($).split(W), B = /([.?@])?(.*)/.exec(j);
          f.push({ type: 1, index: d, name: B[2], strings: L, ctor: B[1] === "." ? er : B[1] === "?" ? tr : B[1] === "@" ? rr : ge }), n.removeAttribute($);
        } else $.startsWith(W) && (f.push({ type: 6, index: d }), n.removeAttribute($));
        if (pt.test(n.tagName)) {
          const $ = n.textContent.split(W), j = $.length - 1;
          if (j > 0) {
            n.textContent = ye ? ye.emptyScript : "";
            for (let L = 0; L < j; L++) n.append($[L], se()), q.nextNode(), f.push({ type: 2, index: ++d });
            n.append($[j], se());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ct) f.push({ type: 2, index: d });
      else {
        let $ = -1;
        for (; ($ = n.data.indexOf(W, $ + 1)) !== -1; ) f.push({ type: 7, index: d }), $ += W.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const r = Z.createElement("template");
    return r.innerHTML = e, r;
  }
}
function te(i, e, t = i, r) {
  var l, v;
  if (e === ee) return e;
  let n = r !== void 0 ? (l = t._$Co) == null ? void 0 : l[r] : t._$Cl;
  const d = le(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== d && ((v = n == null ? void 0 : n._$AO) == null || v.call(n, !1), d === void 0 ? n = void 0 : (n = new d(i), n._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = n : t._$Cl = n), n !== void 0 && (e = te(i, n._$AS(i, e.values), n, r)), e;
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
    const { el: { content: t }, parts: r } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? Z).importNode(t, !0);
    q.currentNode = n;
    let d = q.nextNode(), l = 0, v = 0, f = r[0];
    for (; f !== void 0; ) {
      if (l === f.index) {
        let _;
        f.type === 2 ? _ = new ue(d, d.nextSibling, this, e) : f.type === 1 ? _ = new f.ctor(d, f.name, f.strings, this, e) : f.type === 6 && (_ = new ir(d, this, e)), this._$AV.push(_), f = r[++v];
      }
      l !== (f == null ? void 0 : f.index) && (d = q.nextNode(), l++);
    }
    return q.currentNode = Z, n;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ue {
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
    e = te(this, e, t), le(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== ee && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Zt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== I && le(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = de.createElement(ht(r.h, r.h[0]), this.options)), r);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === n) this._$AH.p(t);
    else {
      const l = new Kt(n, this), v = l.u(this.options);
      l.p(t), this.T(v), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = it.get(e.strings);
    return t === void 0 && it.set(e.strings, t = new de(e)), t;
  }
  k(e) {
    Re(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const d of e) n === t.length ? t.push(r = new ue(this.O(se()), this.O(se()), this, this.options)) : r = t[n], r._$AI(d), n++;
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
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = d, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = I;
  }
  _$AI(e, t = this, r, n) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = te(this, e, t, 0), l = !le(e) || e !== this._$AH && e !== ee, l && (this._$AH = e);
    else {
      const v = e;
      let f, _;
      for (e = d[0], f = 0; f < d.length - 1; f++) _ = te(this, v[r + f], t, f), _ === ee && (_ = this._$AH[f]), l || (l = !le(_) || _ !== this._$AH[f]), _ === I ? e = I : e !== I && (e += (_ ?? "") + d[f + 1]), this._$AH[f] = _;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class er extends ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class tr extends ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class rr extends ge {
  constructor(e, t, r, n, d) {
    super(e, t, r, n, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = te(this, e, t, 0) ?? I) === ee) return;
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
    te(this, e);
  }
}
const xe = oe.litHtmlPolyfillSupport;
xe == null || xe(de, ue), (oe.litHtmlVersions ?? (oe.litHtmlVersions = [])).push("3.3.3");
const nr = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = r._$litPart$;
  if (n === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = n = new ue(e.insertBefore(se(), d), d, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis;
class ae extends K {
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
    return ee;
  }
}
var st;
ae._$litElement$ = !0, ae.finalized = !0, (st = X.litElementHydrateSupport) == null || st.call(X, { LitElement: ae });
const Se = X.litElementPolyfillSupport;
Se == null || Se({ LitElement: ae });
(X.litElementVersions ?? (X.litElementVersions = [])).push("4.2.2");
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
    return { set(v) {
      const f = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(l, f, i, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(l, void 0, i, v), v;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(v) {
      const f = this[l];
      e.call(this, v), this.requestUpdate(l, f, i, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function P(i) {
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
    var t = typeof globalThis == "object" ? globalThis : typeof nt == "object" ? nt : typeof self == "object" ? self : typeof this == "object" ? this : v(), r = n(i);
    typeof t.Reflect < "u" && (r = n(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function n(f, _) {
      return function(E, $) {
        Object.defineProperty(f, E, { configurable: !0, writable: !0, value: $ }), _ && _(E, $);
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
    function v() {
      return d() || l();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", d = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, _ = !v && !f, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return _e(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return _e({ __proto__: null });
      } : function() {
        return _e({});
      },
      has: _ ? function(o, a) {
        return r.call(o, a);
      } : function(o, a) {
        return a in o;
      },
      get: _ ? function(o, a) {
        return r.call(o, a) ? o[a] : void 0;
      } : function(o, a) {
        return o[a];
      }
    }, $ = Object.getPrototypeOf(Function), j = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : It(), L = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : jt(), B = typeof WeakMap == "function" ? WeakMap : Lt(), J = n ? Symbol.for("@reflect-metadata:registry") : void 0, ce = Ct(), Me = zt(ce);
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
        if (!C(a))
          throw new TypeError();
        if (!C(u) && !m(u) && !Q(u))
          throw new TypeError();
        return Q(u) && (u = void 0), s = U(s), St(o, a, s, u);
      }
    }
    e("decorate", ft);
    function yt(o, a) {
      function s(u, g) {
        if (!C(u))
          throw new TypeError();
        if (!m(g) && !Mt(g))
          throw new TypeError();
        ke(o, a, u, g);
      }
      return s;
    }
    e("metadata", yt);
    function vt(o, a, s, u) {
      if (!C(s))
        throw new TypeError();
      return m(u) || (u = U(u)), ke(o, a, s, u);
    }
    e("defineMetadata", vt);
    function gt(o, a, s) {
      if (!C(a))
        throw new TypeError();
      return m(s) || (s = U(s)), Te(o, a, s);
    }
    e("hasMetadata", gt);
    function mt(o, a, s) {
      if (!C(a))
        throw new TypeError();
      return m(s) || (s = U(s)), me(o, a, s);
    }
    e("hasOwnMetadata", mt);
    function bt(o, a, s) {
      if (!C(a))
        throw new TypeError();
      return m(s) || (s = U(s)), Ce(o, a, s);
    }
    e("getMetadata", bt);
    function wt(o, a, s) {
      if (!C(a))
        throw new TypeError();
      return m(s) || (s = U(s)), ze(o, a, s);
    }
    e("getOwnMetadata", wt);
    function _t(o, a) {
      if (!C(o))
        throw new TypeError();
      return m(a) || (a = U(a)), Ie(o, a);
    }
    e("getMetadataKeys", _t);
    function $t(o, a) {
      if (!C(o))
        throw new TypeError();
      return m(a) || (a = U(a)), je(o, a);
    }
    e("getOwnMetadataKeys", $t);
    function Et(o, a, s) {
      if (!C(a))
        throw new TypeError();
      if (m(s) || (s = U(s)), !C(a))
        throw new TypeError();
      m(s) || (s = U(s));
      var u = re(
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
        if (!m(g) && !Q(g)) {
          if (!Ue(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function St(o, a, s, u) {
      for (var g = o.length - 1; g >= 0; --g) {
        var k = o[g], z = k(a, s, u);
        if (!m(z) && !Q(z)) {
          if (!C(z))
            throw new TypeError();
          u = z;
        }
      }
      return u;
    }
    function Te(o, a, s) {
      var u = me(o, a, s);
      if (u)
        return !0;
      var g = we(a);
      return Q(g) ? !1 : Te(o, g, s);
    }
    function me(o, a, s) {
      var u = re(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(o, a, s));
    }
    function Ce(o, a, s) {
      var u = me(o, a, s);
      if (u)
        return ze(o, a, s);
      var g = we(a);
      if (!Q(g))
        return Ce(o, g, s);
    }
    function ze(o, a, s) {
      var u = re(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(o, a, s);
    }
    function ke(o, a, s, u) {
      var g = re(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(o, a, s, u);
    }
    function Ie(o, a) {
      var s = je(o, a), u = we(o);
      if (u === null)
        return s;
      var g = Ie(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var k = new L(), z = [], b = 0, c = s; b < c.length; b++) {
        var p = c[b], h = k.has(p);
        h || (k.add(p), z.push(p));
      }
      for (var y = 0, w = g; y < w.length; y++) {
        var p = w[y], h = k.has(p);
        h || (k.add(p), z.push(p));
      }
      return z;
    }
    function je(o, a) {
      var s = re(
        o,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(o, a) : [];
    }
    function Le(o) {
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
    function Q(o) {
      return o === null;
    }
    function Pt(o) {
      return typeof o == "symbol";
    }
    function C(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function Ot(o, a) {
      switch (Le(o)) {
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
        if (C(g))
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
          if (!C(u))
            return u;
        }
        var s = o.valueOf;
        if (pe(s)) {
          var u = s.call(o);
          if (!C(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(o) {
      return !!o;
    }
    function Rt(o) {
      return "" + o;
    }
    function U(o) {
      var a = Ot(o);
      return Pt(a) ? a : Rt(a);
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
    function Mt(o) {
      switch (Le(o)) {
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
      if (!C(s))
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
    function Ye(o) {
      var a = o.return;
      a && a.call(o);
    }
    function we(o) {
      var a = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === $ || a !== $)
        return a;
      var s = o.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === o ? a : g;
    }
    function Tt() {
      var o;
      !m(J) && typeof t.Reflect < "u" && !(J in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (o = kt(t.Reflect));
      var a, s, u, g = new B(), k = {
        registerProvider: z,
        getProvider: c,
        setProvider: h
      };
      return k;
      function z(y) {
        if (!Object.isExtensible(k))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case o === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          case m(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            u === void 0 && (u = new L()), u.add(y);
            break;
        }
      }
      function b(y, w) {
        if (!m(a)) {
          if (a.isProviderFor(y, w))
            return a;
          if (!m(s)) {
            if (s.isProviderFor(y, w))
              return a;
            if (!m(u))
              for (var x = Ve(u); ; ) {
                var A = We(x);
                if (!A)
                  return;
                var N = Be(A);
                if (N.isProviderFor(y, w))
                  return Ye(x), N;
              }
          }
        }
        if (!m(o) && o.isProviderFor(y, w))
          return o;
      }
      function c(y, w) {
        var x = g.get(y), A;
        return m(x) || (A = x.get(w)), m(A) && (A = b(y, w), m(A) || (m(x) && (x = new j(), g.set(y, x)), x.set(w, A))), A;
      }
      function p(y) {
        if (m(y))
          throw new TypeError();
        return a === y || s === y || !m(u) && u.has(y);
      }
      function h(y, w, x) {
        if (!p(x))
          throw new Error("Metadata provider not registered.");
        var A = c(y, w);
        if (A !== x) {
          if (!m(A))
            return !1;
          var N = g.get(y);
          m(N) && (N = new j(), g.set(y, N)), N.set(w, x);
        }
        return !0;
      }
    }
    function Ct() {
      var o;
      return !m(J) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (o = t.Reflect[J]), m(o) && (o = Tt()), !m(J) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, J, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: o
      }), o;
    }
    function zt(o) {
      var a = new B(), s = {
        isProviderFor: function(p, h) {
          var y = a.get(p);
          return m(y) ? !1 : y.has(h);
        },
        OrdinaryDefineOwnMetadata: z,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: k,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return ce.registerProvider(s), s;
      function u(p, h, y) {
        var w = a.get(p), x = !1;
        if (m(w)) {
          if (!y)
            return;
          w = new j(), a.set(p, w), x = !0;
        }
        var A = w.get(h);
        if (m(A)) {
          if (!y)
            return;
          if (A = new j(), w.set(h, A), !o.setProvider(p, h, s))
            throw w.delete(h), x && a.delete(p), new Error("Wrong provider for target.");
        }
        return A;
      }
      function g(p, h, y) {
        var w = u(
          h,
          y,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ne(w.has(p));
      }
      function k(p, h, y) {
        var w = u(
          h,
          y,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(p);
      }
      function z(p, h, y, w) {
        var x = u(
          y,
          w,
          /*Create*/
          !0
        );
        x.set(p, h);
      }
      function b(p, h) {
        var y = [], w = u(
          p,
          h,
          /*Create*/
          !1
        );
        if (m(w))
          return y;
        for (var x = w.keys(), A = Ve(x), N = 0; ; ) {
          var Ge = We(A);
          if (!Ge)
            return y.length = N, y;
          var Nt = Be(Ge);
          try {
            y[N] = Nt;
          } catch (Dt) {
            try {
              Ye(A);
            } finally {
              throw Dt;
            }
          }
          N++;
        }
      }
      function c(p, h, y) {
        var w = u(
          h,
          y,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(p))
          return !1;
        if (w.size === 0) {
          var x = a.get(h);
          m(x) || (x.delete(y), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function kt(o) {
      var a = o.defineMetadata, s = o.hasOwnMetadata, u = o.getOwnMetadata, g = o.getOwnMetadataKeys, k = o.deleteMetadata, z = new B(), b = {
        isProviderFor: function(c, p) {
          var h = z.get(c);
          return !m(h) && h.has(p) ? !0 : g(c, p).length ? (m(h) && (h = new L(), z.set(c, h)), h.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: k
      };
      return b;
    }
    function re(o, a, s) {
      var u = ce.getProvider(o, a);
      if (!m(u))
        return u;
      if (s) {
        if (ce.setProvider(o, a, Me))
          return Me;
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
              for (var h = this._keys.length, y = p + 1; y < h; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, be(c, this._cacheKey) && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, b.prototype.values = function() {
            return new s(this._keys, this._values, k);
          }, b.prototype.entries = function() {
            return new s(this._keys, this._values, z);
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
      function k(b, c) {
        return c;
      }
      function z(b, c) {
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
    function Lt() {
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
            var y = g(
              p,
              /*create*/
              !0
            );
            return y[this._key] = h, this;
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
      function k(c, p) {
        for (var h = 0; h < p; ++h)
          c[h] = Math.random() * 255 | 0;
        return c;
      }
      function z(c) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : k(p, c), p;
        }
        return k(new Array(c), c);
      }
      function b() {
        var c = z(o);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var p = "", h = 0; h < o; ++h) {
          var y = c[h];
          (h === 4 || h === 6 || h === 8) && (p += "-"), y < 16 && (p += "0"), p += y.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function _e(o) {
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
        icon: i.iconName,
        layoutKind: i.layoutKind,
        environment: i.environment
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
function R(i) {
  return pr(i);
}
var T;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
})(T || (T = {}));
var O;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(O || (O = {}));
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, M = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? fr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && hr(e, t, n), n;
};
const ve = class ve extends ae {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return H``;
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
      const v = this.responsiveProps[d];
      if (!v) return;
      let f = "";
      Object.entries(v).forEach(([_, E]) => {
        const $ = r[_];
        $ && (f += `--${e}-${$}-override: ${E};
`);
      }), f && (n += `${l} {
  :host {
    ${f}  }
}
`);
    }), n ? H`<style>${n}</style>` : H``;
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
    return this.isStudio ? H`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : H``;
  }
  renderHeader() {
    return H``;
  }
  willUpdate(e) {
    super.willUpdate(e), this.updateHostStyles();
  }
  updateHostStyles() {
    const t = this.computeBaseStyles().split(";").map((r) => r.trim()).filter(Boolean);
    for (const r of t) {
      const n = r.indexOf(":");
      if (n === -1) continue;
      const d = r.slice(0, n).trim(), l = r.slice(n + 1).trim();
      d.startsWith("--") ? this.style.setProperty(d, l) : this.style[d] = l;
    }
  }
};
ve.slots = [], ve.styles = dt`
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

    :host > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      flex: 1;
      min-height: 0;
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
let S = ve;
M([
  P({ type: Object, attribute: "responsive-props" })
], S.prototype, "responsiveProps", 2);
M([
  P({ type: String })
], S.prototype, "activeEdge", 2);
M([
  P({ type: Boolean, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], S.prototype, "visible", 2);
M([
  P({ type: Number, reflect: !0, attribute: "z-index" }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], S.prototype, "zIndex", 2);
M([
  P({ type: Number, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], S.prototype, "opacity", 2);
M([
  P({ type: String, attribute: "custom-class" }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], S.prototype, "customClass", 2);
M([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], S.prototype, "width", 2);
M([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], S.prototype, "height", 2);
M([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], S.prototype, "margin", 2);
M([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], S.prototype, "padding", 2);
M([
  R({
    attributeType: O.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], S.prototype, "onClick", 1);
M([
  P({ type: String, reflect: !0 })
], S.prototype, "direction", 2);
M([
  P({ type: String, reflect: !0 })
], S.prototype, "justify", 2);
M([
  P({ type: String, reflect: !0 })
], S.prototype, "align", 2);
M([
  P({ type: String, reflect: !0 })
], S.prototype, "gap", 2);
M([
  P({ type: Number, reflect: !0, attribute: "items-per-row" })
], S.prototype, "itemsPerRow", 2);
M([
  P({ type: String, attribute: "background-color", reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], S.prototype, "backgroundColor", 2);
M([
  P({ type: String, attribute: "border-radius", reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], S.prototype, "borderRadius", 2);
M([
  P({ type: String, reflect: !0, attribute: "elevation" }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.DROPDOWN,
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
], S.prototype, "elevation", 2);
M([
  R({
    attributeType: O.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], S.prototype, "show", 1);
M([
  R({
    attributeType: O.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], S.prototype, "hide", 1);
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, G = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? vr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && yr(e, t, n), n;
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
let D = class extends S {
  constructor() {
    super(...arguments), this.flex = "1", this.width = "auto", this.direction = "column", this.padding = "16px", this.gap = "16px", this.align = "stretch", this.justify = "flex-start";
  }
  get overridePrefix() {
    return "zero-column";
  }
  static getStudioTemplate(i) {
    if (!i) return at;
    const e = V(i.props.flex || "1"), t = V(i.props.direction || "column"), r = V(i.props.justify || "flex-start"), n = V(i.props.align || "stretch"), d = V(i.props.gap || "16px"), l = V(i.props.padding || "16px"), v = V(i.props.backgroundColor || "transparent"), f = V(i.props.borderRadius || "0px"), _ = V(i.props.elevation || "none");
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
          --zero-column-bg: ${v};
          --zero-column-border-radius: ${f};
          --zero-column-shadow: ${_};

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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return H``;
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
      let v = "";
      Object.entries(l).forEach(([f, _]) => {
        const E = t[f];
        E && (v += `--${i}-${E}-override: ${_};
`, f === "flex" && (v += `flex: ${_};
`));
      }), v && (r += `${d} {
  :host {
    ${v}  }
}
`);
    }), r ? H`<style>${r}</style>` : H``;
  }
  render() {
    return H`
      ${this.renderResponsiveStyles()}
      <div>
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
D.slots = [
  { id: "default", label: "Column Content", dropzone: !0, anchor: "default", accepts: [] }
];
D.styles = [
  S.styles,
  dt`
      :host {
        /* When width is explicitly set, respect it with flex-basis */
        flex: var(--zero-column-flex-override, var(--zero-column-flex, 1 1 0%));
        min-width: 0;
        width: var(--zero-width, auto);
        /* If a fixed width is set, prevent flex from stretching/shrinking */
        flex-shrink: var(--zero-column-shrink, 1);
        flex-grow: var(--zero-column-grow, 1);
        box-sizing: border-box;
        align-self: stretch;
      }
      
      :host([width]) {
        /* When a width attribute is present, lock to that width */
        flex: 0 0 var(--zero-width, auto);
        width: var(--zero-width, auto);
        max-width: var(--zero-width, none);
      }
      
      @media (max-width: 768px) {
        :host {
          --zero-column-flex: 1 1 100%;
          --zero-width: 100%;
        }
        :host([width]) {
          flex: var(--zero-column-flex-override, 1 1 100%);
          width: var(--zero-column-width-override, 100%);
          max-width: var(--zero-column-width-override, 100%);
        }
      }
      
      .column-inner {
        position: relative;
        width: 100%;
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
      }
    `
];
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Flex Weight",
    fieldMappings: "flex",
    categoryLabel: "Layout"
  })
], D.prototype, "flex", 2);
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Layout"
  })
], D.prototype, "width", 2);
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], D.prototype, "direction", 2);
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], D.prototype, "padding", 2);
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], D.prototype, "gap", 2);
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Align Items",
    fieldMappings: "align",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], D.prototype, "align", 2);
G([
  P({ type: String, reflect: !0 }),
  R({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify Content",
    fieldMappings: "justify",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
], D.prototype, "justify", 2);
D = G([
  ur({
    name: "zero-column",
    version: "1.0.0",
    title: "Column Block",
    elementSelector: "zero-column",
    group: "Layout",
    iconName: "column-icon.png"
  }),
  or("zero-column")
], D);
function V(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  D as ZeroColumn,
  at as studioTemplate
};
