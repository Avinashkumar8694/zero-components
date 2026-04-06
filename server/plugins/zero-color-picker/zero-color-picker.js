var Ie = Object.defineProperty;
var He = (e, t, r) => t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Bt = (e, t, r) => He(e, typeof t != "symbol" ? t + "" : t, r);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, _t = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, r, i) {
    if (this._$cssResult$ = !0, i !== xt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (_t && t === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (t = Vt.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Vt.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Le = (e) => new ie(typeof e == "string" ? e : e + "", void 0, xt), Ue = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((i, o, h) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + e[h + 1], e[0]);
  return new ie(r, e, xt);
}, De = (e, t) => {
  if (_t) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const i = document.createElement("style"), o = ut.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = r.cssText, e.appendChild(i);
  }
}, Wt = _t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const i of t.cssRules) r += i.cssText;
  return Le(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ne, defineProperty: Fe, getOwnPropertyDescriptor: ze, getOwnPropertyNames: je, getOwnPropertySymbols: Be, getPrototypeOf: Ve } = Object, B = globalThis, Yt = B.trustedTypes, We = Yt ? Yt.emptyScript : "", bt = B.reactiveElementPolyfillSupport, et = (e, t) => e, dt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? We : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, Ct = (e, t) => !Ne(e, t), Xt = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: Ct };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class q extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Xt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(t, r), !r.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(t, i, r);
      o !== void 0 && Fe(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, r, i) {
    const { get: o, set: h } = ze(this.prototype, t) ?? { get() {
      return this[r];
    }, set(l) {
      this[r] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const y = o == null ? void 0 : o.call(this);
      h.call(this, l), this.requestUpdate(t, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(et("elementProperties"))) return;
    const t = Ve(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(et("properties"))) {
      const r = this.properties, i = [...je(r), ...Be(r)];
      for (const o of i) this.createProperty(o, r[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [i, o] of r) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const o = this._$Eu(r, i);
      o !== void 0 && this._$Eh.set(o, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i) r.unshift(Wt(o));
    } else t !== void 0 && r.push(Wt(t));
    return r;
  }
  static _$Eu(t, r) {
    const i = r.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const i of r.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return De(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var i;
      return (i = r.hostConnected) == null ? void 0 : i.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var i;
      return (i = r.hostDisconnected) == null ? void 0 : i.call(r);
    });
  }
  attributeChangedCallback(t, r, i) {
    this._$AK(t, i);
  }
  _$EC(t, r) {
    var h;
    const i = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((h = i.converter) == null ? void 0 : h.toAttribute) !== void 0 ? i.converter : dt).toAttribute(r, i.type);
      this._$Em = t, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var h;
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), y = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((h = l.converter) == null ? void 0 : h.fromAttribute) !== void 0 ? l.converter : dt;
      this._$Em = o, this[o] = y.fromAttribute(r, l.type), this._$Em = null;
    }
  }
  requestUpdate(t, r, i) {
    if (t !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(t)), !(i.hasChanged ?? Ct)(this[t], r)) return;
      this.P(t, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, r, i) {
    this._$AL.has(t) || this._$AL.set(t, r), i.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [h, l] of this._$Ep) this[h] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [h, l] of o) l.wrapped !== !0 || this._$AL.has(h) || this[h] === void 0 || this.P(h, this[h], l);
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((o) => {
        var h;
        return (h = o.hostUpdate) == null ? void 0 : h.call(o);
      }), this.update(r)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EC(r, this[r]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[et("elementProperties")] = /* @__PURE__ */ new Map(), q[et("finalized")] = /* @__PURE__ */ new Map(), bt == null || bt({ ReactiveElement: q }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, ct = rt.trustedTypes, Gt = ct ? ct.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ne = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + j, Ye = `<${oe}>`, Y = document, nt = () => Y.createComment(""), ot = (e) => e === null || typeof e != "object" && typeof e != "function", Tt = Array.isArray, Xe = (e) => Tt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", mt = `[ 	
\f\r]`, tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qt = /-->/g, Zt = />/g, V = RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Kt = /"/g, se = /^(?:script|style|textarea|title)$/i, Ge = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), U = Ge(1), Z = Symbol.for("lit-noChange"), H = Symbol.for("lit-nothing"), Qt = /* @__PURE__ */ new WeakMap(), W = Y.createTreeWalker(Y, 129);
function ae(e, t) {
  if (!Tt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Gt !== void 0 ? Gt.createHTML(t) : t;
}
const qe = (e, t) => {
  const r = e.length - 1, i = [];
  let o, h = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = tt;
  for (let y = 0; y < r; y++) {
    const c = e[y];
    let x, T, _ = -1, L = 0;
    for (; L < c.length && (l.lastIndex = L, T = l.exec(c), T !== null); ) L = l.lastIndex, l === tt ? T[1] === "!--" ? l = qt : T[1] !== void 0 ? l = Zt : T[2] !== void 0 ? (se.test(T[2]) && (o = RegExp("</" + T[2], "g")), l = V) : T[3] !== void 0 && (l = V) : l === V ? T[0] === ">" ? (l = o ?? tt, _ = -1) : T[1] === void 0 ? _ = -2 : (_ = l.lastIndex - T[2].length, x = T[1], l = T[3] === void 0 ? V : T[3] === '"' ? Kt : Jt) : l === Kt || l === Jt ? l = V : l === qt || l === Zt ? l = tt : (l = V, o = void 0);
    const D = l === V && e[y + 1].startsWith("/>") ? " " : "";
    h += l === tt ? c + Ye : _ >= 0 ? (i.push(x), c.slice(0, _) + ne + c.slice(_) + j + D) : c + j + (_ === -2 ? y : D);
  }
  return [ae(e, h + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class st {
  constructor({ strings: t, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let h = 0, l = 0;
    const y = t.length - 1, c = this.parts, [x, T] = qe(t, r);
    if (this.el = st.createElement(x, i), W.currentNode = this.el.content, r === 2 || r === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (o = W.nextNode()) !== null && c.length < y; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const _ of o.getAttributeNames()) if (_.endsWith(ne)) {
          const L = T[l++], D = o.getAttribute(_).split(j), z = /([.?@])?(.*)/.exec(L);
          c.push({ type: 1, index: h, name: z[2], strings: D, ctor: z[1] === "." ? Je : z[1] === "?" ? Ke : z[1] === "@" ? Qe : pt }), o.removeAttribute(_);
        } else _.startsWith(j) && (c.push({ type: 6, index: h }), o.removeAttribute(_));
        if (se.test(o.tagName)) {
          const _ = o.textContent.split(j), L = _.length - 1;
          if (L > 0) {
            o.textContent = ct ? ct.emptyScript : "";
            for (let D = 0; D < L; D++) o.append(_[D], nt()), W.nextNode(), c.push({ type: 2, index: ++h });
            o.append(_[L], nt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === oe) c.push({ type: 2, index: h });
      else {
        let _ = -1;
        for (; (_ = o.data.indexOf(j, _ + 1)) !== -1; ) c.push({ type: 7, index: h }), _ += j.length - 1;
      }
      h++;
    }
  }
  static createElement(t, r) {
    const i = Y.createElement("template");
    return i.innerHTML = t, i;
  }
}
function J(e, t, r = e, i) {
  var l, y;
  if (t === Z) return t;
  let o = i !== void 0 ? (l = r.o) == null ? void 0 : l[i] : r.l;
  const h = ot(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== h && ((y = o == null ? void 0 : o._$AO) == null || y.call(o, !1), h === void 0 ? o = void 0 : (o = new h(e), o._$AT(e, r, i)), i !== void 0 ? (r.o ?? (r.o = []))[i] = o : r.l = o), o !== void 0 && (t = J(e, o._$AS(e, t.values), o, i)), t;
}
class Ze {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: i } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? Y).importNode(r, !0);
    W.currentNode = o;
    let h = W.nextNode(), l = 0, y = 0, c = i[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let x;
        c.type === 2 ? x = new at(h, h.nextSibling, this, t) : c.type === 1 ? x = new c.ctor(h, c.name, c.strings, this, t) : c.type === 6 && (x = new tr(h, this, t)), this._$AV.push(x), c = i[++y];
      }
      l !== (c == null ? void 0 : c.index) && (h = W.nextNode(), l++);
    }
    return W.currentNode = Y, o;
  }
  p(t) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, r), r += i.strings.length - 2) : i._$AI(t[r])), r++;
  }
}
class at {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, r, i, o) {
    this.type = 2, this._$AH = H, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = i, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = J(this, t, r), ot(t) ? t === H || t == null || t === "" ? (this._$AH !== H && this._$AR(), this._$AH = H) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Xe(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== H && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var h;
    const { values: r, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = st.createElement(ae(i.h, i.h[0]), this.options)), i);
    if (((h = this._$AH) == null ? void 0 : h._$AD) === o) this._$AH.p(r);
    else {
      const l = new Ze(o, this), y = l.u(this.options);
      l.p(r), this.T(y), this._$AH = l;
    }
  }
  _$AC(t) {
    let r = Qt.get(t.strings);
    return r === void 0 && Qt.set(t.strings, r = new st(t)), r;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const h of t) o === r.length ? r.push(i = new at(this.O(nt()), this.O(nt()), this, this.options)) : i = r[o], i._$AI(h), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this.v = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class pt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, i, o, h) {
    this.type = 1, this._$AH = H, this._$AN = void 0, this.element = t, this.name = r, this._$AM = o, this.options = h, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = H;
  }
  _$AI(t, r = this, i, o) {
    const h = this.strings;
    let l = !1;
    if (h === void 0) t = J(this, t, r, 0), l = !ot(t) || t !== this._$AH && t !== Z, l && (this._$AH = t);
    else {
      const y = t;
      let c, x;
      for (t = h[0], c = 0; c < h.length - 1; c++) x = J(this, y[i + c], r, c), x === Z && (x = this._$AH[c]), l || (l = !ot(x) || x !== this._$AH[c]), x === H ? t = H : t !== H && (t += (x ?? "") + h[c + 1]), this._$AH[c] = x;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === H ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Je extends pt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === H ? void 0 : t;
  }
}
class Ke extends pt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== H);
  }
}
class Qe extends pt {
  constructor(t, r, i, o, h) {
    super(t, r, i, o, h), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = J(this, t, r, 0) ?? H) === Z) return;
    const i = this._$AH, o = t === H && i !== H || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, h = t !== H && (i === H || o);
    o && this.element.removeEventListener(this.name, this, i), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class tr {
  constructor(t, r, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    J(this, t);
  }
}
const wt = rt.litHtmlPolyfillSupport;
wt == null || wt(st, at), (rt.litHtmlVersions ?? (rt.litHtmlVersions = [])).push("3.2.0");
const er = (e, t, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? t;
  let o = i._$litPart$;
  if (o === void 0) {
    const h = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new at(t.insertBefore(nt(), h), h, void 0, r ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends q {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = er(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this.o) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.o) == null || t.setConnected(!1);
  }
  render() {
    return Z;
  }
}
var re;
it._$litElement$ = !0, it.finalized = !0, (re = globalThis.litElementHydrateSupport) == null || re.call(globalThis, { LitElement: it });
const $t = globalThis.litElementPolyfillSupport;
$t == null || $t({ LitElement: it });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rr = (e) => (t, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ir = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: Ct }, nr = (e = ir, t, r) => {
  const { kind: i, metadata: o } = r;
  let h = globalThis.litPropertyMetadata.get(o);
  if (h === void 0 && globalThis.litPropertyMetadata.set(o, h = /* @__PURE__ */ new Map()), h.set(r.name, e), i === "accessor") {
    const { name: l } = r;
    return { set(y) {
      const c = t.get.call(this);
      t.set.call(this, y), this.requestUpdate(l, c, e);
    }, init(y) {
      return y !== void 0 && this.P(l, void 0, e), y;
    } };
  }
  if (i === "setter") {
    const { name: l } = r;
    return function(y) {
      const c = this[l];
      t.call(this, y), this.requestUpdate(l, c, e);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function S(e) {
  return (t, r) => typeof r == "object" ? nr(e, t, r) : ((i, o, h) => {
    const l = o.hasOwnProperty(h);
    return o.constructor.createProperty(h, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(o, h) : void 0;
  })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function K(e) {
  return S({ ...e, state: !0, attribute: !1 });
}
var te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ee;
(function(e) {
  (function(t) {
    var r = typeof globalThis == "object" ? globalThis : typeof te == "object" ? te : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = o(e);
    typeof r.Reflect < "u" && (i = o(r.Reflect, i)), t(i, r), typeof r.Reflect > "u" && (r.Reflect = e);
    function o(c, x) {
      return function(T, _) {
        Object.defineProperty(c, T, { configurable: !0, writable: !0, value: _ }), x && x(T, _);
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
    function y() {
      return h() || l();
    }
  })(function(t, r) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", h = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, x = !y && !c, T = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: x ? function(n, s) {
        return i.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: x ? function(n, s) {
        return i.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, _ = Object.getPrototypeOf(Function), L = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), D = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Se(), z = typeof WeakMap == "function" ? WeakMap : ke(), X = o ? Symbol.for("@reflect-metadata:registry") : void 0, lt = Ee(), Et = Me(lt);
    function le(n, s, a, u) {
      if (b(a)) {
        if (!Ht(n))
          throw new TypeError();
        if (!Lt(s))
          throw new TypeError();
        return be(n, s);
      } else {
        if (!Ht(n))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(u) && !b(u) && !G(u))
          throw new TypeError();
        return G(u) && (u = void 0), a = F(a), me(n, s, a, u);
      }
    }
    t("decorate", le);
    function he(n, s) {
      function a(u, v) {
        if (!O(u))
          throw new TypeError();
        if (!b(v) && !Ce(v))
          throw new TypeError();
        St(n, s, u, v);
      }
      return a;
    }
    t("metadata", he);
    function ue(n, s, a, u) {
      if (!O(a))
        throw new TypeError();
      return b(u) || (u = F(u)), St(n, s, a, u);
    }
    t("defineMetadata", ue);
    function de(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return b(a) || (a = F(a)), Mt(n, s, a);
    }
    t("hasMetadata", de);
    function ce(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return b(a) || (a = F(a)), ft(n, s, a);
    }
    t("hasOwnMetadata", ce);
    function pe(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return b(a) || (a = F(a)), At(n, s, a);
    }
    t("getMetadata", pe);
    function fe(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return b(a) || (a = F(a)), Pt(n, s, a);
    }
    t("getOwnMetadata", fe);
    function ge(n, s) {
      if (!O(n))
        throw new TypeError();
      return b(s) || (s = F(s)), kt(n, s);
    }
    t("getMetadataKeys", ge);
    function ve(n, s) {
      if (!O(n))
        throw new TypeError();
      return b(s) || (s = F(s)), Ot(n, s);
    }
    t("getOwnMetadataKeys", ve);
    function ye(n, s, a) {
      if (!O(s))
        throw new TypeError();
      if (b(a) || (a = F(a)), !O(s))
        throw new TypeError();
      b(a) || (a = F(a));
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : u.OrdinaryDeleteMetadata(n, s, a);
    }
    t("deleteMetadata", ye);
    function be(n, s) {
      for (var a = n.length - 1; a >= 0; --a) {
        var u = n[a], v = u(s);
        if (!b(v) && !G(v)) {
          if (!Lt(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function me(n, s, a, u) {
      for (var v = n.length - 1; v >= 0; --v) {
        var I = n[v], R = I(s, a, u);
        if (!b(R) && !G(R)) {
          if (!O(R))
            throw new TypeError();
          u = R;
        }
      }
      return u;
    }
    function Mt(n, s, a) {
      var u = ft(n, s, a);
      if (u)
        return !0;
      var v = vt(s);
      return G(v) ? !1 : Mt(n, v, a);
    }
    function ft(n, s, a) {
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : It(u.OrdinaryHasOwnMetadata(n, s, a));
    }
    function At(n, s, a) {
      var u = ft(n, s, a);
      if (u)
        return Pt(n, s, a);
      var v = vt(s);
      if (!G(v))
        return At(n, v, a);
    }
    function Pt(n, s, a) {
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!b(u))
        return u.OrdinaryGetOwnMetadata(n, s, a);
    }
    function St(n, s, a, u) {
      var v = Q(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, s, a, u);
    }
    function kt(n, s) {
      var a = Ot(n, s), u = vt(n);
      if (u === null)
        return a;
      var v = kt(u, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var I = new D(), R = [], m = 0, d = a; m < d.length; m++) {
        var p = d[m], f = I.has(p);
        f || (I.add(p), R.push(p));
      }
      for (var g = 0, w = v; g < w.length; g++) {
        var p = w[g], f = I.has(p);
        f || (I.add(p), R.push(p));
      }
      return R;
    }
    function Ot(n, s) {
      var a = Q(
        n,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function Rt(n) {
      if (n === null)
        return 1;
      switch (typeof n) {
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
          return n === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function b(n) {
      return n === void 0;
    }
    function G(n) {
      return n === null;
    }
    function we(n) {
      return typeof n == "symbol";
    }
    function O(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function $e(n, s) {
      switch (Rt(n)) {
        case 0:
          return n;
        case 1:
          return n;
        case 2:
          return n;
        case 3:
          return n;
        case 4:
          return n;
        case 5:
          return n;
      }
      var a = "string", u = Ut(n, h);
      if (u !== void 0) {
        var v = u.call(n, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return _e(n);
    }
    function _e(n, s) {
      var a, u;
      {
        var v = n.toString;
        if (ht(v)) {
          var u = v.call(n);
          if (!O(u))
            return u;
        }
        var a = n.valueOf;
        if (ht(a)) {
          var u = a.call(n);
          if (!O(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function It(n) {
      return !!n;
    }
    function xe(n) {
      return "" + n;
    }
    function F(n) {
      var s = $e(n);
      return we(s) ? s : xe(s);
    }
    function Ht(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ht(n) {
      return typeof n == "function";
    }
    function Lt(n) {
      return typeof n == "function";
    }
    function Ce(n) {
      switch (Rt(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function gt(n, s) {
      return n === s || n !== n && s !== s;
    }
    function Ut(n, s) {
      var a = n[s];
      if (a != null) {
        if (!ht(a))
          throw new TypeError();
        return a;
      }
    }
    function Dt(n) {
      var s = Ut(n, l);
      if (!ht(s))
        throw new TypeError();
      var a = s.call(n);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Nt(n) {
      return n.value;
    }
    function Ft(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function zt(n) {
      var s = n.return;
      s && s.call(n);
    }
    function vt(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === _ || s !== _)
        return s;
      var a = n.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return s;
      var v = u.constructor;
      return typeof v != "function" || v === n ? s : v;
    }
    function Te() {
      var n;
      !b(X) && typeof r.Reflect < "u" && !(X in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (n = Ae(r.Reflect));
      var s, a, u, v = new z(), I = {
        registerProvider: R,
        getProvider: d,
        setProvider: f
      };
      return I;
      function R(g) {
        if (!Object.isExtensible(I))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === g:
            break;
          case b(s):
            s = g;
            break;
          case s === g:
            break;
          case b(a):
            a = g;
            break;
          case a === g:
            break;
          default:
            u === void 0 && (u = new D()), u.add(g);
            break;
        }
      }
      function m(g, w) {
        if (!b(s)) {
          if (s.isProviderFor(g, w))
            return s;
          if (!b(a)) {
            if (a.isProviderFor(g, w))
              return s;
            if (!b(u))
              for (var M = Dt(u); ; ) {
                var k = Ft(M);
                if (!k)
                  return;
                var N = Nt(k);
                if (N.isProviderFor(g, w))
                  return zt(M), N;
              }
          }
        }
        if (!b(n) && n.isProviderFor(g, w))
          return n;
      }
      function d(g, w) {
        var M = v.get(g), k;
        return b(M) || (k = M.get(w)), b(k) && (k = m(g, w), b(k) || (b(M) && (M = new L(), v.set(g, M)), M.set(w, k))), k;
      }
      function p(g) {
        if (b(g))
          throw new TypeError();
        return s === g || a === g || !b(u) && u.has(g);
      }
      function f(g, w, M) {
        if (!p(M))
          throw new Error("Metadata provider not registered.");
        var k = d(g, w);
        if (k !== M) {
          if (!b(k))
            return !1;
          var N = v.get(g);
          b(N) && (N = new L(), v.set(g, N)), N.set(w, M);
        }
        return !0;
      }
    }
    function Ee() {
      var n;
      return !b(X) && O(r.Reflect) && Object.isExtensible(r.Reflect) && (n = r.Reflect[X]), b(n) && (n = Te()), !b(X) && O(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, X, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Me(n) {
      var s = new z(), a = {
        isProviderFor: function(p, f) {
          var g = s.get(p);
          return b(g) ? !1 : g.has(f);
        },
        OrdinaryDefineOwnMetadata: R,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: I,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return lt.registerProvider(a), a;
      function u(p, f, g) {
        var w = s.get(p), M = !1;
        if (b(w)) {
          if (!g)
            return;
          w = new L(), s.set(p, w), M = !0;
        }
        var k = w.get(f);
        if (b(k)) {
          if (!g)
            return;
          if (k = new L(), w.set(f, k), !n.setProvider(p, f, a))
            throw w.delete(f), M && s.delete(p), new Error("Wrong provider for target.");
        }
        return k;
      }
      function v(p, f, g) {
        var w = u(
          f,
          g,
          /*Create*/
          !1
        );
        return b(w) ? !1 : It(w.has(p));
      }
      function I(p, f, g) {
        var w = u(
          f,
          g,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(p);
      }
      function R(p, f, g, w) {
        var M = u(
          g,
          w,
          /*Create*/
          !0
        );
        M.set(p, f);
      }
      function m(p, f) {
        var g = [], w = u(
          p,
          f,
          /*Create*/
          !1
        );
        if (b(w))
          return g;
        for (var M = w.keys(), k = Dt(M), N = 0; ; ) {
          var jt = Ft(k);
          if (!jt)
            return g.length = N, g;
          var Oe = Nt(jt);
          try {
            g[N] = Oe;
          } catch (Re) {
            try {
              zt(k);
            } finally {
              throw Re;
            }
          }
          N++;
        }
      }
      function d(p, f, g) {
        var w = u(
          f,
          g,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(p))
          return !1;
        if (w.size === 0) {
          var M = s.get(f);
          b(M) || (M.delete(g), M.size === 0 && s.delete(M));
        }
        return !0;
      }
    }
    function Ae(n) {
      var s = n.defineMetadata, a = n.hasOwnMetadata, u = n.getOwnMetadata, v = n.getOwnMetadataKeys, I = n.deleteMetadata, R = new z(), m = {
        isProviderFor: function(d, p) {
          var f = R.get(d);
          return !b(f) && f.has(p) ? !0 : v(d, p).length ? (b(f) && (f = new D(), R.set(d, f)), f.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: I
      };
      return m;
    }
    function Q(n, s, a) {
      var u = lt.getProvider(n, s);
      if (!b(u))
        return u;
      if (a) {
        if (lt.setProvider(n, s, Et))
          return Et;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var n = {}, s = [], a = (
        /** @class */
        function() {
          function m(d, p, f) {
            this._index = 0, this._keys = d, this._values = p, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var p = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, m;
        }()
      ), u = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(d) {
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, m.prototype.set = function(d, p) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = p, this;
          }, m.prototype.delete = function(d) {
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var f = this._keys.length, g = p + 1; g < f; g++)
                this._keys[g - 1] = this._keys[g], this._values[g - 1] = this._values[g];
              return this._keys.length--, this._values.length--, gt(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, I);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, R);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(d, p) {
            if (!gt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (gt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function v(m, d) {
        return m;
      }
      function I(m, d) {
        return d;
      }
      function R(m, d) {
        return [m, d];
      }
    }
    function Se() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new L();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
          }, s.prototype.clear = function() {
            this._map.clear();
          }, s.prototype.keys = function() {
            return this._map.keys();
          }, s.prototype.values = function() {
            return this._map.keys();
          }, s.prototype.entries = function() {
            return this._map.entries();
          }, s.prototype["@@iterator"] = function() {
            return this.keys();
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return n;
    }
    function ke() {
      var n = 16, s = T.create(), a = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(p) {
            var f = v(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? T.has(f, this._key) : !1;
          }, d.prototype.get = function(p) {
            var f = v(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? T.get(f, this._key) : void 0;
          }, d.prototype.set = function(p, f) {
            var g = v(
              p,
              /*create*/
              !0
            );
            return g[this._key] = f, this;
          }, d.prototype.delete = function(p) {
            var f = v(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while (T.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, p) {
        if (!i.call(d, a)) {
          if (!p)
            return;
          Object.defineProperty(d, a, { value: T.create() });
        }
        return d[a];
      }
      function I(d, p) {
        for (var f = 0; f < p; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function R(d) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : I(p, d), p;
        }
        return I(new Array(d), d);
      }
      function m() {
        var d = R(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var p = "", f = 0; f < n; ++f) {
          var g = d[f];
          (f === 4 || f === 6 || f === 8) && (p += "-"), g < 16 && (p += "0"), p += g.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function yt(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(ee || (ee = {}));
function or(e) {
  return typeof e.name == "string" && typeof e.version == "string" && typeof e.title == "string" && typeof e.elementSelector == "string" && typeof e.group == "string" && typeof e.iconName == "string";
}
function sr(e) {
  return function(t) {
    if (or(e)) {
      const r = {
        version: e.version,
        name: e.name,
        title: e.title,
        selector: e.elementSelector,
        category: e.group,
        icon: e.iconName
      };
      Reflect.defineMetadata("ZeroComponent", r, t.prototype), globalThis.customElements ? customElements.define(`${e.elementSelector}-${e.version}`, t) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function ar(e) {
  return sr(e);
}
function lr(e) {
  return function(t) {
    class r extends t {
      constructor() {
        super(...arguments);
        Bt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(h) {
        try {
          super.update(h);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var c;
        const h = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (h && y) {
          const x = new CSSStyleSheet(), T = (c = h.sheet) == null ? void 0 : c.cssRules;
          T && (Array.from(T).forEach((_) => x.insertRule(_.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, x]);
        } else if (h) {
          const x = h.cloneNode(!0);
          this.shadowRoot.appendChild(x);
        }
        l.forEach((x) => {
          const T = x.cloneNode(!0);
          this.shadowRoot.appendChild(T);
        });
      }
    }
    return r;
  };
}
function hr(e) {
  var r;
  if (((r = e == null ? void 0 : e.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function ur(e) {
  return function(t, r) {
    try {
      hr(e);
      const i = Reflect.getMetadata("ZeroAttribute", t) || [];
      typeof r == "string" && typeof t[r] != "function" && (e.fieldMappings = e.fieldMappings ?? r), i.push(e), Reflect.defineMetadata("ZeroAttribute", i, t);
    } catch (i) {
      console.log(i);
    }
  };
}
function P(e) {
  return ur(e);
}
var A;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown";
})(A || (A = {}));
var E;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(E || (E = {}));
var dr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, C = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? cr(t, r) : t, h = e.length - 1, l; h >= 0; h--)
    (l = e[h]) && (o = (i ? l(t, r, o) : l(o)) || o);
  return i && o && dr(t, r, o), o;
};
let $ = class extends it {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Select color", this.helpText = "", this.errorMessage = "", this.value = "#000000", this.required = !1, this.disabled = !1, this.readonly = !1, this.showAlpha = !1, this.showPresets = !0, this.showInputFields = !0, this.showEyeDropper = !0, this.format = "hex", this.presetColors = "#f44336,#e91e63,#9c27b0,#673ab7,#3f51b5,#2196f3,#03a9f4,#00bcd4,#009688,#4caf50,#8bc34a,#cddc39,#ffeb3b,#ffc107,#ff9800,#ff5722", this.width = "100%", this.height = "36px", this.pickerWidth = "280px", this.pickerHeight = "200px", this.borderRadius = "4px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.backgroundColor = "#ffffff", this.isOpen = !1, this.currentColor = this.hexToColorFormat("#000000"), this.alpha = 1, this.hasError = !1, this.inputValue = "#000000", this.activeTab = "picker", this.isDragging = !1, this.dragTarget = null;
  }
  render() {
    return U`
      <div class="form-field" style="width: ${this.width}">
        ${this.label ? U`
          <label class="form-field-label ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}
        
        <div 
          class="input-container"
          style="
            --primary-color: ${this.primaryColor};
            --error-color: ${this.errorColor};
            --background-color: ${this.backgroundColor};
            --border-radius: ${this.borderRadius};
            --picker-width: ${this.pickerWidth};
            --picker-height: ${this.pickerHeight};
            --hue: ${this.currentColor.hsl.h};
            --current-color: ${this.currentColor.hex};
          "
        >
          <input
            class="mat-mdc-input-element ${this.hasError ? "error" : ""}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            style="height: ${this.height}"
            @click=${this.handleInputClick}
            @input=${this.handleInputChange}
            @blur=${this.handleInputBlur}
          />
          <div class="color-preview" @click=${this.handlePreviewClick}>
            <div 
              class="color-swatch" 
              style="background: ${this.showAlpha ? this.rgbaToString() : this.currentColor.hex}"
            ></div>
          </div>
        </div>

        ${this.isOpen ? U`
          <div class="dropdown">
            <div class="picker-tabs">
              <button 
                type="button" 
                class="tab-button ${this.activeTab === "picker" ? "active" : ""}"
                @click=${() => this.activeTab = "picker"}
              >
                Picker
              </button>
              ${this.showPresets ? U`
                <button 
                  type="button" 
                  class="tab-button ${this.activeTab === "presets" ? "active" : ""}"
                  @click=${() => this.activeTab = "presets"}
                >
                  Presets
                </button>
              ` : ""}
              ${this.showInputFields ? U`
                <button 
                  type="button" 
                  class="tab-button ${this.activeTab === "inputs" ? "active" : ""}"
                  @click=${() => this.activeTab = "inputs"}
                >
                  Values
                </button>
              ` : ""}
            </div>

            <div class="picker-content">
              ${this.activeTab === "picker" ? this.renderColorPicker() : ""}
              ${this.activeTab === "presets" ? this.renderPresets() : ""}
              ${this.activeTab === "inputs" ? this.renderInputs() : ""}
            </div>            ${this.showEyeDropper || this.showAlpha ? U`
              <div class="picker-actions">
                ${this.showEyeDropper && "EyeDropper" in window ? U`
                  <button type="button" class="action-button eyedropper-button" @click=${this.openEyeDropper}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63M14.41,6.84L8.98,12.27L11.73,15L17.16,9.57L14.41,6.84M8.27,13L8.98,13.27L10.73,15L11,15.73L8.27,13M7.96,14.44L6.8,17.2L9.56,16.04L7.96,14.44Z" />
                    </svg>
                    Pick
                  </button>
                ` : ""}
                <button type="button" class="action-button clear-button" @click=${this.clearColor}>
                  Clear
                </button>
              </div>
            ` : ""}
          </div>
        ` : ""}

        ${this.helpText && !this.hasError ? U`
          <div class="form-field-hint">${this.helpText}</div>
        ` : ""}
        
        ${this.errorMessage && this.hasError ? U`
          <div class="form-field-error">${this.errorMessage}</div>
        ` : ""}
      </div>
    `;
  }
  renderColorPicker() {
    return U`
      <div 
        class="color-picker-area"
        @mousedown=${this.handleSaturationMouseDown}
        @mousemove=${this.handleSaturationMouseMove}
        @mouseup=${this.handleMouseUp}
      >
        <div 
          class="saturation-cursor"
          style="left: ${this.currentColor.hsv.s * 100}%; top: ${(1 - this.currentColor.hsv.v) * 100}%"
        ></div>
      </div>

      <div 
        class="hue-slider"
        @mousedown=${this.handleHueMouseDown}
        @mousemove=${this.handleHueMouseMove}
        @mouseup=${this.handleMouseUp}
      >
        <div 
          class="slider-handle"
          style="left: ${this.currentColor.hsl.h / 360 * 100}%"
        ></div>
      </div>

      ${this.showAlpha ? U`
        <div 
          class="alpha-slider"
          @mousedown=${this.handleAlphaMouseDown}
          @mousemove=${this.handleAlphaMouseMove}
          @mouseup=${this.handleMouseUp}
        >
          <div class="alpha-gradient"></div>
          <div 
            class="slider-handle"
            style="left: ${this.alpha * 100}%"
          ></div>
        </div>
      ` : ""}
    `;
  }
  renderPresets() {
    const e = this.presetColors.split(",").map((t) => t.trim());
    return U`
      <div class="presets-grid">
        ${e.map((t) => U`
          <div 
            class="preset-color ${t === this.currentColor.hex ? "selected" : ""}"
            style="background-color: ${t}"
            @click=${() => this.selectPresetColor(t)}
          ></div>
        `)}
      </div>
    `;
  }
  renderInputs() {
    return U`
      <div class="color-inputs ${this.showAlpha ? "with-alpha" : ""}">
        <div class="input-group hex-input">
          <label class="input-label">HEX</label>
          <input 
            class="color-input" 
            type="text" 
            .value=${this.currentColor.hex}
            @input=${this.handleHexInput}
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">R</label>
          <input 
            class="color-input" 
            type="number" 
            min="0" 
            max="255" 
            .value=${String(this.currentColor.rgb.r)}
            @input=${this.handleRgbInput}
            data-channel="r"
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">G</label>
          <input 
            class="color-input" 
            type="number" 
            min="0" 
            max="255" 
            .value=${String(this.currentColor.rgb.g)}
            @input=${this.handleRgbInput}
            data-channel="g"
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">B</label>
          <input 
            class="color-input" 
            type="number" 
            min="0" 
            max="255" 
            .value=${String(this.currentColor.rgb.b)}
            @input=${this.handleRgbInput}
            data-channel="b"
          />
        </div>

        ${this.showAlpha ? U`
          <div class="input-group">
            <label class="input-label">A</label>
            <input 
              class="color-input" 
              type="number" 
              min="0" 
              max="1" 
              step="0.01"
              .value=${String(this.alpha)}
              @input=${this.handleAlphaInput}
            />
          </div>
        ` : ""}
      </div>
    `;
  }
  handleInputClick() {
    !this.disabled && !this.readonly && (this.isOpen = !this.isOpen);
  }
  handlePreviewClick() {
    this.handleInputClick();
  }
  handleInputChange(e) {
    const t = e.target;
    this.inputValue = t.value, this.isValidColor(t.value) && (this.currentColor = this.hexToColorFormat(t.value), this.updateValue());
  }
  handleInputBlur() {
    setTimeout(() => {
      var e;
      (e = this.shadowRoot) != null && e.querySelector(".dropdown:hover") || (this.isOpen = !1);
    }, 150);
  }
  handleSaturationMouseDown(e) {
    this.isDragging = !0, this.dragTarget = "saturation", this.updateSaturationFromEvent(e);
  }
  handleSaturationMouseMove(e) {
    this.isDragging && this.dragTarget === "saturation" && this.updateSaturationFromEvent(e);
  }
  handleHueMouseDown(e) {
    this.isDragging = !0, this.dragTarget = "hue", this.updateHueFromEvent(e);
  }
  handleHueMouseMove(e) {
    this.isDragging && this.dragTarget === "hue" && this.updateHueFromEvent(e);
  }
  handleAlphaMouseDown(e) {
    this.isDragging = !0, this.dragTarget = "alpha", this.updateAlphaFromEvent(e);
  }
  handleAlphaMouseMove(e) {
    this.isDragging && this.dragTarget === "alpha" && this.updateAlphaFromEvent(e);
  }
  handleMouseUp() {
    this.isDragging = !1, this.dragTarget = null;
  }
  updateSaturationFromEvent(e) {
    const t = e.currentTarget.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    this.currentColor = {
      ...this.currentColor,
      hsv: { ...this.currentColor.hsv, s: r, v: 1 - i }
    }, this.updateColorFromHsv();
  }
  updateHueFromEvent(e) {
    const t = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)) * 360;
    this.currentColor = {
      ...this.currentColor,
      hsl: { ...this.currentColor.hsl, h: i },
      hsv: { ...this.currentColor.hsv, h: i }
    }, this.updateColorFromHsv();
  }
  updateAlphaFromEvent(e) {
    const t = e.currentTarget.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
    this.alpha = r, this.updateValue();
  }
  handleHexInput(e) {
    const t = e.target;
    this.isValidColor(t.value) && (this.currentColor = this.hexToColorFormat(t.value), this.updateValue());
  }
  handleRgbInput(e) {
    const t = e.target, r = t.dataset.channel, i = Math.max(0, Math.min(255, parseInt(t.value) || 0));
    this.currentColor = {
      ...this.currentColor,
      rgb: { ...this.currentColor.rgb, [r]: i }
    }, this.updateColorFromRgb();
  }
  handleAlphaInput(e) {
    const t = e.target;
    this.alpha = Math.max(0, Math.min(1, parseFloat(t.value) || 0)), this.updateValue();
  }
  selectPresetColor(e) {
    this.currentColor = this.hexToColorFormat(e), this.updateValue(), this.isOpen = !1;
  }
  async openEyeDropper() {
    if ("EyeDropper" in window)
      try {
        const t = await new window.EyeDropper().open();
        this.currentColor = this.hexToColorFormat(t.sRGBHex), this.updateValue();
      } catch {
        console.warn("Eye dropper was cancelled");
      }
  }
  clearColor() {
    this.currentColor = this.hexToColorFormat("#000000"), this.alpha = 1, this.updateValue(), this.isOpen = !1;
  }
  updateColorFromHsv() {
    const e = this.hsvToRgb(this.currentColor.hsv), t = this.rgbToHex(e), r = this.rgbToHsl(e);
    this.currentColor = { hex: t, rgb: e, hsl: r, hsv: this.currentColor.hsv }, this.updateValue();
  }
  updateColorFromRgb() {
    const e = this.rgbToHex(this.currentColor.rgb), t = this.rgbToHsl(this.currentColor.rgb), r = this.rgbToHsv(this.currentColor.rgb);
    this.currentColor = { hex: e, rgb: this.currentColor.rgb, hsl: t, hsv: r }, this.updateValue();
  }
  updateValue() {
    let e;
    switch (this.format) {
      case "rgb":
        e = this.showAlpha ? this.rgbaToString() : this.rgbToString();
        break;
      case "hsl":
        e = this.showAlpha ? this.hslaToString() : this.hslToString();
        break;
      case "hsv":
        e = this.hsvToString();
        break;
      default:
        e = this.currentColor.hex;
    }
    this.value = e, this.inputValue = e, this.dispatchChangeEvent();
  }
  hexToColorFormat(e) {
    const t = this.hexToRgb(e), r = this.rgbToHsl(t), i = this.rgbToHsv(t);
    return { hex: e, rgb: t, hsl: r, hsv: i };
  }
  hexToRgb(e) {
    const t = e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return t ? {
      r: parseInt(t[1], 16),
      g: parseInt(t[2], 16),
      b: parseInt(t[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }
  rgbToHex({ r: e, g: t, b: r }) {
    return `#${((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1)}`;
  }
  rgbToHsl({ r: e, g: t, b: r }) {
    e /= 255, t /= 255, r /= 255;
    const i = Math.max(e, t, r), o = Math.min(e, t, r);
    let h = 0, l = 0;
    const y = (i + o) / 2;
    if (i !== o) {
      const c = i - o;
      switch (l = y > 0.5 ? c / (2 - i - o) : c / (i + o), i) {
        case e:
          h = (t - r) / c + (t < r ? 6 : 0);
          break;
        case t:
          h = (r - e) / c + 2;
          break;
        case r:
          h = (e - t) / c + 4;
          break;
      }
      h /= 6;
    }
    return { h: h * 360, s: l * 100, l: y * 100 };
  }
  rgbToHsv({ r: e, g: t, b: r }) {
    e /= 255, t /= 255, r /= 255;
    const i = Math.max(e, t, r), o = Math.min(e, t, r);
    let h = 0;
    const l = i === 0 ? 0 : (i - o) / i, y = i;
    if (i !== o) {
      const c = i - o;
      switch (i) {
        case e:
          h = (t - r) / c + (t < r ? 6 : 0);
          break;
        case t:
          h = (r - e) / c + 2;
          break;
        case r:
          h = (e - t) / c + 4;
          break;
      }
      h /= 6;
    }
    return { h: h * 360, s: l, v: y };
  }
  hsvToRgb({ h: e, s: t, v: r }) {
    const i = r * t, o = i * (1 - Math.abs(e / 60 % 2 - 1)), h = r - i;
    let l = 0, y = 0, c = 0;
    return e >= 0 && e < 60 ? (l = i, y = o, c = 0) : e >= 60 && e < 120 ? (l = o, y = i, c = 0) : e >= 120 && e < 180 ? (l = 0, y = i, c = o) : e >= 180 && e < 240 ? (l = 0, y = o, c = i) : e >= 240 && e < 300 ? (l = o, y = 0, c = i) : e >= 300 && e < 360 && (l = i, y = 0, c = o), {
      r: Math.round((l + h) * 255),
      g: Math.round((y + h) * 255),
      b: Math.round((c + h) * 255)
    };
  }
  rgbToString() {
    return `rgb(${this.currentColor.rgb.r}, ${this.currentColor.rgb.g}, ${this.currentColor.rgb.b})`;
  }
  rgbaToString() {
    return `rgba(${this.currentColor.rgb.r}, ${this.currentColor.rgb.g}, ${this.currentColor.rgb.b}, ${this.alpha})`;
  }
  hslToString() {
    return `hsl(${Math.round(this.currentColor.hsl.h)}, ${Math.round(this.currentColor.hsl.s)}%, ${Math.round(this.currentColor.hsl.l)}%)`;
  }
  hslaToString() {
    return `hsla(${Math.round(this.currentColor.hsl.h)}, ${Math.round(this.currentColor.hsl.s)}%, ${Math.round(this.currentColor.hsl.l)}%, ${this.alpha})`;
  }
  hsvToString() {
    return `hsv(${Math.round(this.currentColor.hsv.h)}, ${Math.round(this.currentColor.hsv.s * 100)}%, ${Math.round(this.currentColor.hsv.v * 100)}%)`;
  }
  isValidColor(e) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e);
  }
  dispatchChangeEvent() {
    const e = {
      value: this.value,
      hex: this.currentColor.hex,
      rgb: this.currentColor.rgb,
      hsl: this.currentColor.hsl,
      hsv: this.currentColor.hsv,
      alpha: this.alpha
    };
    this.dispatchEvent(new CustomEvent("change", {
      detail: e,
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("color-change", {
      detail: e,
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(e) {
    this.dispatchChangeEvent();
  }
  handleColorChange(e) {
    this.dispatchChangeEvent();
  }
  // Public API
  setColor(e) {
    this.currentColor = this.hexToColorFormat(e), this.updateValue();
  }
  getColor() {
    return this.currentColor;
  }
  setAlpha(e) {
    this.alpha = Math.max(0, Math.min(1, e)), this.updateValue();
  }
  getAlpha() {
    return this.alpha;
  }
  open() {
    !this.disabled && !this.readonly && (this.isOpen = !0);
  }
  close() {
    this.isOpen = !1;
  }
  setError(e) {
    this.hasError = !0, this.errorMessage = e;
  }
  clearError() {
    this.hasError = !1, this.errorMessage = "";
  }
  firstUpdated() {
    this.value && (this.currentColor = this.hexToColorFormat(this.value), this.inputValue = this.value), document.addEventListener("mousemove", (e) => {
      var t;
      this.isDragging && ((t = this.shadowRoot) != null && t.querySelector(
        this.dragTarget === "saturation" ? ".color-picker-area" : this.dragTarget === "hue" ? ".hue-slider" : this.dragTarget === "alpha" ? ".alpha-slider" : ""
      )) && (this.dragTarget === "saturation" ? this.updateSaturationFromEvent(e) : this.dragTarget === "hue" ? this.updateHueFromEvent(e) : this.dragTarget === "alpha" && this.updateAlphaFromEvent(e));
    }), document.addEventListener("mouseup", () => {
      this.handleMouseUp();
    }), document.addEventListener("click", (e) => {
      this.contains(e.target) || (this.isOpen = !1);
    });
  }
};
$.styles = Ue`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: relative;
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }    .form-field-label {
      display: block;
      font-size: var(--font-size-base, 14px);
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--error-color, #f44336);
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

  .mat-mdc-input-element {
      width: 100%;
      height: var(--input-height, 36px);
      min-height: var(--input-height, 36px);
      padding: 0 40px 0 12px;
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius, 4px);
      font-size: var(--font-size-lg, 16px);
      line-height: 1.5;
      background: var(--background-color, #ffffff);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      transition: all 0.2s ease;
      cursor: pointer;
      box-sizing: border-box;
    }

    .mat-mdc-input-element:hover {
      border-color: var(--primary-color, #1976d2);
    }

    .mat-mdc-input-element:focus {
      outline: none;
      border-color: var(--primary-color, #1976d2);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color, #1976d2) 20%, transparent);
    }

    .mat-mdc-input-element:disabled {
      background: #f5f5f5;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
    }

    .mat-mdc-input-element.error {
      border-color: var(--error-color, #f44336);
    }    .color-preview {
      position: absolute;
      right: 8px;
      width: var(--icon-size-xl, 32px);
      height: var(--icon-size-lg, 24px);
      border-radius: 4px;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="white"/><rect y="5" width="5" height="5" fill="white"/></svg>');
    }

    .color-swatch {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius, 4px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      z-index: 1000;
      margin-top: 4px;
      width: var(--picker-width, 280px);
      max-height: 400px;
      overflow: hidden;
    }

    .picker-tabs {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
    }    .tab-button {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: none;
      cursor: pointer;
      font-size: var(--font-size-base, 14px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      transition: all 0.2s ease;
      font-weight: 500;
      position: relative;
    }

    .tab-button:hover {
      color: var(--primary-color, #1976d2);
      background: color-mix(in srgb, var(--primary-color, #1976d2) 5%, transparent);
    }

    .tab-button.active {
      color: var(--primary-color, #1976d2);
      background: color-mix(in srgb, var(--primary-color, #1976d2) 8%, transparent);
    }

    .tab-button.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary-color, #1976d2);
    }    .picker-content {
      padding: 20px;
      background: #fafafa;
    }

    .color-picker-area {
      position: relative;
      width: 100%;
      height: var(--picker-height, 200px);
      border-radius: 4px;
      margin-bottom: 16px;
      cursor: crosshair;
      background: linear-gradient(to right, white, transparent),
                  linear-gradient(to bottom, transparent, black),
                  hsl(var(--hue, 0), 100%, 50%);
    }

    .saturation-cursor {
      position: absolute;
      width: 12px;
      height: 12px;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }    .hue-slider {
      position: relative;
      width: 100%;
      height: var(--icon-size-sm, 16px);
      border-radius: 8px;
      margin-bottom: 16px;
      background: linear-gradient(to right, 
        hsl(0, 100%, 50%),
        hsl(60, 100%, 50%),
        hsl(120, 100%, 50%),
        hsl(180, 100%, 50%),
        hsl(240, 100%, 50%),
        hsl(300, 100%, 50%),
        hsl(360, 100%, 50%)
      );
      cursor: pointer;
    }

    .alpha-slider {
      position: relative;      width: 100%;
      height: var(--icon-size-sm, 16px);
      border-radius: 8px;
      margin-bottom: 16px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect width="10" height="10" fill="%23f0f0f0"/><rect x="10" y="10" width="10" height="10" fill="%23f0f0f0"/><rect x="10" width="10" height="10" fill="white"/><rect y="10" width="10" height="10" fill="white"/></svg>');
      cursor: pointer;
    }

    .alpha-gradient {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: linear-gradient(to right, transparent, var(--current-color, #000));
    }

    .slider-handle {
      position: absolute;
      top: 50%;      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .color-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      margin-bottom: 16px;
    }

    .color-inputs.with-alpha {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }    .input-label {
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      margin-bottom: 4px;
    }

    .color-input {
      padding: 6px 8px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      font-size: var(--font-size-base, 14px);
      text-align: center;
    }

    .hex-input {
      grid-column: 1 / -1;
      margin-bottom: 8px;
    }

    .presets-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 8px;
    }

    .preset-color {
      aspect-ratio: 1;
      border-radius: 4px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="white"/><rect y="5" width="5" height="5" fill="white"/></svg>');
    }

    .preset-color:hover {
      border-color: var(--primary-color, #1976d2);
    }

    .preset-color.selected {
      border-color: var(--primary-color, #1976d2);
    }    .picker-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-top: 1px solid #e0e0e0;
      background: #fafafa;
      gap: 12px;
    }

    .action-button {
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      font-size: var(--font-size-sm, 13px);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-width: 80px;
      height: 32px;
      white-space: nowrap;
    }    .eyedropper-button {
      background: #f5f5f5;
      color: var(--primary-color, #1976d2);
      border: 1px solid transparent;
    }

    .eyedropper-button:hover {
      background: var(--primary-color, #1976d2);
      color: white;
      border-color: var(--primary-color, #1976d2);
    }

    .clear-button {
      background: #ffffff;
      color: var(--error-color, #f44336);
      border: 1px solid #e0e0e0;
    }

    .clear-button:hover {
      background: var(--error-color, #f44336);
      color: white;
      border-color: var(--error-color, #f44336);
    }

    .form-field-hint {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 4px;
    }    .form-field-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }    @media (max-width: 768px) {
      .dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        max-width: 90vw;
        max-height: 80vh;
        z-index: 10000;
      }

      .picker-content {
        max-height: 60vh;
        overflow-y: auto;
      }

      .picker-actions {
        padding: 12px;
        gap: 8px;
      }

      .action-button {
        flex: 1;
        min-width: auto;
      }
    }
  `;
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], $.prototype, "label", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], $.prototype, "placeholder", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], $.prototype, "helpText", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], $.prototype, "errorMessage", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], $.prototype, "value", 2);
C([
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], $.prototype, "required", 2);
C([
  S({ type: Boolean }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], $.prototype, "disabled", 2);
C([
  S({ type: Boolean }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Readonly",
    fieldMappings: "readonly"
  })
], $.prototype, "readonly", 2);
C([
  S({ type: Boolean }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Alpha",
    fieldMappings: "showAlpha"
  })
], $.prototype, "showAlpha", 2);
C([
  S({ type: Boolean }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Presets",
    fieldMappings: "showPresets"
  })
], $.prototype, "showPresets", 2);
C([
  S({ type: Boolean }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Input Fields",
    fieldMappings: "showInputFields"
  })
], $.prototype, "showInputFields", 2);
C([
  S({ type: Boolean }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Eye Dropper",
    fieldMappings: "showEyeDropper"
  })
], $.prototype, "showEyeDropper", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.DROPDOWN,
    displayLabel: "Output Format",
    fieldMappings: "format"
    // options: ['hex', 'rgb', 'hsl', 'hsv']
  })
], $.prototype, "format", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Preset Colors (comma-separated)",
    placeholderText: "Enter preset colors separated by commas",
    fieldMappings: "presetColors"
  })
], $.prototype, "presetColors", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width (e.g., 100%, 300px)",
    fieldMappings: "width"
  })
], $.prototype, "width", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height (e.g., 36px)",
    fieldMappings: "height"
  })
], $.prototype, "height", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Picker Width",
    placeholderText: "Enter picker width (e.g., 280px)",
    fieldMappings: "pickerWidth"
  })
], $.prototype, "pickerWidth", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Picker Height",
    placeholderText: "Enter picker height (e.g., 200px)",
    fieldMappings: "pickerHeight"
  })
], $.prototype, "pickerHeight", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius (e.g., 4px)",
    fieldMappings: "borderRadius"
  })
], $.prototype, "borderRadius", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Primary Color",
    fieldMappings: "primaryColor"
  })
], $.prototype, "primaryColor", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Error Color",
    fieldMappings: "errorColor"
  })
], $.prototype, "errorColor", 2);
C([
  S({ type: String }),
  P({
    attributeType: E.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor"
  })
], $.prototype, "backgroundColor", 2);
C([
  K()
], $.prototype, "isOpen", 2);
C([
  K()
], $.prototype, "currentColor", 2);
C([
  K()
], $.prototype, "alpha", 2);
C([
  K()
], $.prototype, "hasError", 2);
C([
  K()
], $.prototype, "inputValue", 2);
C([
  K()
], $.prototype, "activeTab", 2);
C([
  P({
    attributeType: E.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], $.prototype, "handleChange", 1);
C([
  P({
    attributeType: E.EVENT,
    displayLabel: "On Color Change",
    eventTrigger: "color-change"
  })
], $.prototype, "handleColorChange", 1);
$ = C([
  ar({
    name: "zero-color-picker",
    version: "1.0.0",
    title: "Color Picker",
    elementSelector: "zero-color-picker",
    group: "Form Controls",
    iconName: "color-picker-icon.png"
  }),
  lr(),
  rr("zero-color-picker")
], $);
export {
  $ as ZeroColorPicker
};
