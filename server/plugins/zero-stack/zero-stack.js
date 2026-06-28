/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge = globalThis, Te = ge.ShadowRoot && (ge.ShadyCSS === void 0 || ge.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ze = Symbol(), Qe = /* @__PURE__ */ new WeakMap();
let ht = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== ze) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Te && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Qe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Qe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ht = (i) => new ht(typeof i == "string" ? i : i + "", void 0, ze), ft = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, n, d) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[d + 1], i[0]);
  return new ht(t, i, ze);
}, Ut = (i, e) => {
  if (Te) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), n = ge.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, i.appendChild(r);
  }
}, Ke = Te ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ht(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Wt, getOwnPropertyDescriptor: Bt, getOwnPropertyNames: Gt, getOwnPropertySymbols: Yt, getPrototypeOf: Ft } = Object, B = globalThis, et = B.trustedTypes, qt = et ? et.emptyScript : "", Ae = B.reactiveElementPolyfillSupport, ae = (i, e) => i, me = { toAttribute(i, e) {
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
} }, ke = (i, e) => !Vt(i, e), tt = { attribute: !0, type: String, converter: me, reflect: !1, useDefault: !1, hasChanged: ke };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = tt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(e, r, t);
      n !== void 0 && Wt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: n, set: d } = Bt(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? tt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ae("elementProperties"))) return;
    const e = Ft(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ae("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ae("properties"))) {
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
      for (const n of r) t.unshift(Ke(n));
    } else e !== void 0 && t.push(Ke(e));
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
      const l = (((d = r.converter) == null ? void 0 : d.toAttribute) !== void 0 ? r.converter : me).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(n) : this.setAttribute(n, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d, l;
    const r = this.constructor, n = r._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const g = r.getPropertyOptions(n), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((d = g.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? g.converter : me;
      this._$Em = n;
      const $ = y.fromAttribute(t, g.type);
      this[n] = $ ?? ((l = this._$Ej) == null ? void 0 : l.get(n)) ?? $, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, n = !1, d) {
    var l;
    if (e !== void 0) {
      const g = this.constructor;
      if (n === !1 && (d = this[e]), r ?? (r = g.getPropertyOptions(e)), !((r.hasChanged ?? ke)(d, t) || r.useDefault && r.reflect && d === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(g._$Eu(e, r)))) return;
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[ae("elementProperties")] = /* @__PURE__ */ new Map(), K[ae("finalized")] = /* @__PURE__ */ new Map(), Ae == null || Ae({ ReactiveElement: K }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = globalThis, rt = (i) => i, be = se.trustedTypes, it = be ? be.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, yt = "$lit$", W = `lit$${Math.random().toFixed(9).slice(2)}$`, vt = "?" + W, Zt = `<${vt}>`, X = document, de = () => X.createComment(""), ue = (i) => i === null || typeof i != "object" && typeof i != "function", Ie = Array.isArray, Xt = (i) => Ie(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", Re = `[ 	
\f\r]`, oe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, nt = /-->/g, ot = />/g, Y = RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, st = /"/g, gt = /^(?:script|style|textarea|title)$/i, Jt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), F = Jt(1), ee = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), lt = /* @__PURE__ */ new WeakMap(), q = X.createTreeWalker(X, 129);
function mt(i, e) {
  if (!Ie(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return it !== void 0 ? it.createHTML(e) : e;
}
const Qt = (i, e) => {
  const t = i.length - 1, r = [];
  let n, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = oe;
  for (let g = 0; g < t; g++) {
    const y = i[g];
    let $, E, w = -1, j = 0;
    for (; j < y.length && (l.lastIndex = j, E = l.exec(y), E !== null); ) j = l.lastIndex, l === oe ? E[1] === "!--" ? l = nt : E[1] !== void 0 ? l = ot : E[2] !== void 0 ? (gt.test(E[2]) && (n = RegExp("</" + E[2], "g")), l = Y) : E[3] !== void 0 && (l = Y) : l === Y ? E[0] === ">" ? (l = n ?? oe, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? Y : E[3] === '"' ? st : at) : l === st || l === at ? l = Y : l === nt || l === ot ? l = oe : (l = Y, n = void 0);
    const N = l === Y && i[g + 1].startsWith("/>") ? " " : "";
    d += l === oe ? y + Zt : w >= 0 ? (r.push($), y.slice(0, w) + yt + y.slice(w) + W + N) : y + W + (w === -2 ? g : N);
  }
  return [mt(i, d + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ce {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let d = 0, l = 0;
    const g = e.length - 1, y = this.parts, [$, E] = Qt(e, t);
    if (this.el = ce.createElement($, r), q.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (n = q.nextNode()) !== null && y.length < g; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const w of n.getAttributeNames()) if (w.endsWith(yt)) {
          const j = E[l++], N = n.getAttribute(w).split(W), L = /([.?@])?(.*)/.exec(j);
          y.push({ type: 1, index: d, name: L[2], strings: N, ctor: L[1] === "." ? er : L[1] === "?" ? tr : L[1] === "@" ? rr : _e }), n.removeAttribute(w);
        } else w.startsWith(W) && (y.push({ type: 6, index: d }), n.removeAttribute(w));
        if (gt.test(n.tagName)) {
          const w = n.textContent.split(W), j = w.length - 1;
          if (j > 0) {
            n.textContent = be ? be.emptyScript : "";
            for (let N = 0; N < j; N++) n.append(w[N], de()), q.nextNode(), y.push({ type: 2, index: ++d });
            n.append(w[j], de());
          }
        }
      } else if (n.nodeType === 8) if (n.data === vt) y.push({ type: 2, index: d });
      else {
        let w = -1;
        for (; (w = n.data.indexOf(W, w + 1)) !== -1; ) y.push({ type: 7, index: d }), w += W.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const r = X.createElement("template");
    return r.innerHTML = e, r;
  }
}
function te(i, e, t = i, r) {
  var l, g;
  if (e === ee) return e;
  let n = r !== void 0 ? (l = t._$Co) == null ? void 0 : l[r] : t._$Cl;
  const d = ue(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== d && ((g = n == null ? void 0 : n._$AO) == null || g.call(n, !1), d === void 0 ? n = void 0 : (n = new d(i), n._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = n : t._$Cl = n), n !== void 0 && (e = te(i, n._$AS(i, e.values), n, r)), e;
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
    q.currentNode = n;
    let d = q.nextNode(), l = 0, g = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let $;
        y.type === 2 ? $ = new pe(d, d.nextSibling, this, e) : y.type === 1 ? $ = new y.ctor(d, y.name, y.strings, this, e) : y.type === 6 && ($ = new ir(d, this, e)), this._$AV.push($), y = r[++g];
      }
      l !== (y == null ? void 0 : y.index) && (d = q.nextNode(), l++);
    }
    return q.currentNode = X, n;
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
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = te(this, e, t), ue(e) ? e === k || e == null || e === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : e !== this._$AH && e !== ee && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Xt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== k && ue(this._$AH) ? this._$AA.nextSibling.data = e : this.T(X.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ce.createElement(mt(r.h, r.h[0]), this.options)), r);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === n) this._$AH.p(t);
    else {
      const l = new Kt(n, this), g = l.u(this.options);
      l.p(t), this.T(g), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = lt.get(e.strings);
    return t === void 0 && lt.set(e.strings, t = new ce(e)), t;
  }
  k(e) {
    Ie(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const d of e) n === t.length ? t.push(r = new pe(this.O(de()), this.O(de()), this, this.options)) : r = t[n], r._$AI(d), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const n = rt(e).nextSibling;
      rt(e).remove(), e = n;
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
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = d, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = k;
  }
  _$AI(e, t = this, r, n) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = te(this, e, t, 0), l = !ue(e) || e !== this._$AH && e !== ee, l && (this._$AH = e);
    else {
      const g = e;
      let y, $;
      for (e = d[0], y = 0; y < d.length - 1; y++) $ = te(this, g[r + y], t, y), $ === ee && ($ = this._$AH[y]), l || (l = !ue($) || $ !== this._$AH[y]), $ === k ? e = k : e !== k && (e += ($ ?? "") + d[y + 1]), this._$AH[y] = $;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class er extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === k ? void 0 : e;
  }
}
class tr extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== k);
  }
}
class rr extends _e {
  constructor(e, t, r, n, d) {
    super(e, t, r, n, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = te(this, e, t, 0) ?? k) === ee) return;
    const r = this._$AH, n = e === k && r !== k || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, d = e !== k && (r === k || n);
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
const Me = se.litHtmlPolyfillSupport;
Me == null || Me(ce, pe), (se.litHtmlVersions ?? (se.litHtmlVersions = [])).push("3.3.3");
const nr = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = r._$litPart$;
  if (n === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = n = new pe(e.insertBefore(de(), d), d, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis;
class le extends K {
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
var pt;
le._$litElement$ = !0, le.finalized = !0, (pt = Z.litElementHydrateSupport) == null || pt.call(Z, { LitElement: le });
const Ce = Z.litElementPolyfillSupport;
Ce == null || Ce({ LitElement: le });
(Z.litElementVersions ?? (Z.litElementVersions = [])).push("4.2.2");
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
const ar = { attribute: !0, type: String, converter: me, reflect: !1, hasChanged: ke }, sr = (i = ar, e, t) => {
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
function P(i) {
  return (e, t) => typeof t == "object" ? sr(i, e, t) : ((r, n, d) => {
    const l = n.hasOwnProperty(d);
    return n.constructor.createProperty(d, r), l ? Object.getOwnPropertyDescriptor(n, d) : void 0;
  })(i, e, t);
}
var dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ut;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof dt == "object" ? dt : typeof self == "object" ? self : typeof this == "object" ? this : g(), r = n(i);
    typeof t.Reflect < "u" && (r = n(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function n(y, $) {
      return function(E, w) {
        Object.defineProperty(y, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", d = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, $ = !g && !y, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return Oe(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return Oe({ __proto__: null });
      } : function() {
        return Oe({});
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
    }, w = Object.getPrototypeOf(Function), j = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : It(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : jt(), L = typeof WeakMap == "function" ? WeakMap : Nt(), U = n ? Symbol.for("@reflect-metadata:registry") : void 0, J = Tt(), he = zt(J);
    function fe(o, a, s, u) {
      if (m(s)) {
        if (!Be(o))
          throw new TypeError();
        if (!Ge(a))
          throw new TypeError();
        return St(o, a);
      } else {
        if (!Be(o))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(u) && !m(u) && !Q(u))
          throw new TypeError();
        return Q(u) && (u = void 0), s = H(s), xt(o, a, s, u);
      }
    }
    e("decorate", fe);
    function ie(o, a) {
      function s(u, v) {
        if (!M(u))
          throw new TypeError();
        if (!m(v) && !Mt(v))
          throw new TypeError();
        De(o, a, u, v);
      }
      return s;
    }
    e("metadata", ie);
    function $e(o, a, s, u) {
      if (!M(s))
        throw new TypeError();
      return m(u) || (u = H(u)), De(o, a, s, u);
    }
    e("defineMetadata", $e);
    function Ee(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = H(s)), je(o, a, s);
    }
    e("hasMetadata", Ee);
    function ye(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = H(s)), Se(o, a, s);
    }
    e("hasOwnMetadata", ye);
    function bt(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = H(s)), Ne(o, a, s);
    }
    e("getMetadata", bt);
    function wt(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = H(s)), Le(o, a, s);
    }
    e("getOwnMetadata", wt);
    function _t(o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = H(a)), He(o, a);
    }
    e("getMetadataKeys", _t);
    function $t(o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = H(a)), Ue(o, a);
    }
    e("getOwnMetadataKeys", $t);
    function Et(o, a, s) {
      if (!M(a))
        throw new TypeError();
      if (m(s) || (s = H(s)), !M(a))
        throw new TypeError();
      m(s) || (s = H(s));
      var u = ne(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(o, a, s);
    }
    e("deleteMetadata", Et);
    function St(o, a) {
      for (var s = o.length - 1; s >= 0; --s) {
        var u = o[s], v = u(a);
        if (!m(v) && !Q(v)) {
          if (!Ge(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function xt(o, a, s, u) {
      for (var v = o.length - 1; v >= 0; --v) {
        var z = o[v], C = z(a, s, u);
        if (!m(C) && !Q(C)) {
          if (!M(C))
            throw new TypeError();
          u = C;
        }
      }
      return u;
    }
    function je(o, a, s) {
      var u = Se(o, a, s);
      if (u)
        return !0;
      var v = Pe(a);
      return Q(v) ? !1 : je(o, v, s);
    }
    function Se(o, a, s) {
      var u = ne(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : We(u.OrdinaryHasOwnMetadata(o, a, s));
    }
    function Ne(o, a, s) {
      var u = Se(o, a, s);
      if (u)
        return Le(o, a, s);
      var v = Pe(a);
      if (!Q(v))
        return Ne(o, v, s);
    }
    function Le(o, a, s) {
      var u = ne(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(o, a, s);
    }
    function De(o, a, s, u) {
      var v = ne(
        s,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(o, a, s, u);
    }
    function He(o, a) {
      var s = Ue(o, a), u = Pe(o);
      if (u === null)
        return s;
      var v = He(u, a);
      if (v.length <= 0)
        return s;
      if (s.length <= 0)
        return v;
      for (var z = new N(), C = [], b = 0, c = s; b < c.length; b++) {
        var p = c[b], h = z.has(p);
        h || (z.add(p), C.push(p));
      }
      for (var f = 0, _ = v; f < _.length; f++) {
        var p = _[f], h = z.has(p);
        h || (z.add(p), C.push(p));
      }
      return C;
    }
    function Ue(o, a) {
      var s = ne(
        o,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(o, a) : [];
    }
    function Ve(o) {
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
    function M(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function Ot(o, a) {
      switch (Ve(o)) {
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
      var s = "string", u = Ye(o, d);
      if (u !== void 0) {
        var v = u.call(o, s);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return At(o);
    }
    function At(o, a) {
      var s, u;
      {
        var v = o.toString;
        if (ve(v)) {
          var u = v.call(o);
          if (!M(u))
            return u;
        }
        var s = o.valueOf;
        if (ve(s)) {
          var u = s.call(o);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function We(o) {
      return !!o;
    }
    function Rt(o) {
      return "" + o;
    }
    function H(o) {
      var a = Ot(o);
      return Pt(a) ? a : Rt(a);
    }
    function Be(o) {
      return Array.isArray ? Array.isArray(o) : o instanceof Object ? o instanceof Array : Object.prototype.toString.call(o) === "[object Array]";
    }
    function ve(o) {
      return typeof o == "function";
    }
    function Ge(o) {
      return typeof o == "function";
    }
    function Mt(o) {
      switch (Ve(o)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function xe(o, a) {
      return o === a || o !== o && a !== a;
    }
    function Ye(o, a) {
      var s = o[a];
      if (s != null) {
        if (!ve(s))
          throw new TypeError();
        return s;
      }
    }
    function Fe(o) {
      var a = Ye(o, l);
      if (!ve(a))
        throw new TypeError();
      var s = a.call(o);
      if (!M(s))
        throw new TypeError();
      return s;
    }
    function qe(o) {
      return o.value;
    }
    function Ze(o) {
      var a = o.next();
      return a.done ? !1 : a;
    }
    function Xe(o) {
      var a = o.return;
      a && a.call(o);
    }
    function Pe(o) {
      var a = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === w || a !== w)
        return a;
      var s = o.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var v = u.constructor;
      return typeof v != "function" || v === o ? a : v;
    }
    function Ct() {
      var o;
      !m(U) && typeof t.Reflect < "u" && !(U in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (o = kt(t.Reflect));
      var a, s, u, v = new L(), z = {
        registerProvider: C,
        getProvider: c,
        setProvider: h
      };
      return z;
      function C(f) {
        if (!Object.isExtensible(z))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case o === f:
            break;
          case m(a):
            a = f;
            break;
          case a === f:
            break;
          case m(s):
            s = f;
            break;
          case s === f:
            break;
          default:
            u === void 0 && (u = new N()), u.add(f);
            break;
        }
      }
      function b(f, _) {
        if (!m(a)) {
          if (a.isProviderFor(f, _))
            return a;
          if (!m(s)) {
            if (s.isProviderFor(f, _))
              return a;
            if (!m(u))
              for (var S = Fe(u); ; ) {
                var O = Ze(S);
                if (!O)
                  return;
                var D = qe(O);
                if (D.isProviderFor(f, _))
                  return Xe(S), D;
              }
          }
        }
        if (!m(o) && o.isProviderFor(f, _))
          return o;
      }
      function c(f, _) {
        var S = v.get(f), O;
        return m(S) || (O = S.get(_)), m(O) && (O = b(f, _), m(O) || (m(S) && (S = new j(), v.set(f, S)), S.set(_, O))), O;
      }
      function p(f) {
        if (m(f))
          throw new TypeError();
        return a === f || s === f || !m(u) && u.has(f);
      }
      function h(f, _, S) {
        if (!p(S))
          throw new Error("Metadata provider not registered.");
        var O = c(f, _);
        if (O !== S) {
          if (!m(O))
            return !1;
          var D = v.get(f);
          m(D) && (D = new j(), v.set(f, D)), D.set(_, S);
        }
        return !0;
      }
    }
    function Tt() {
      var o;
      return !m(U) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (o = t.Reflect[U]), m(o) && (o = Ct()), !m(U) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: o
      }), o;
    }
    function zt(o) {
      var a = new L(), s = {
        isProviderFor: function(p, h) {
          var f = a.get(p);
          return m(f) ? !1 : f.has(h);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: z,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return J.registerProvider(s), s;
      function u(p, h, f) {
        var _ = a.get(p), S = !1;
        if (m(_)) {
          if (!f)
            return;
          _ = new j(), a.set(p, _), S = !0;
        }
        var O = _.get(h);
        if (m(O)) {
          if (!f)
            return;
          if (O = new j(), _.set(h, O), !o.setProvider(p, h, s))
            throw _.delete(h), S && a.delete(p), new Error("Wrong provider for target.");
        }
        return O;
      }
      function v(p, h, f) {
        var _ = u(
          h,
          f,
          /*Create*/
          !1
        );
        return m(_) ? !1 : We(_.has(p));
      }
      function z(p, h, f) {
        var _ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(p);
      }
      function C(p, h, f, _) {
        var S = u(
          f,
          _,
          /*Create*/
          !0
        );
        S.set(p, h);
      }
      function b(p, h) {
        var f = [], _ = u(
          p,
          h,
          /*Create*/
          !1
        );
        if (m(_))
          return f;
        for (var S = _.keys(), O = Fe(S), D = 0; ; ) {
          var Je = Ze(O);
          if (!Je)
            return f.length = D, f;
          var Lt = qe(Je);
          try {
            f[D] = Lt;
          } catch (Dt) {
            try {
              Xe(O);
            } finally {
              throw Dt;
            }
          }
          D++;
        }
      }
      function c(p, h, f) {
        var _ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(_) || !_.delete(p))
          return !1;
        if (_.size === 0) {
          var S = a.get(h);
          m(S) || (S.delete(f), S.size === 0 && a.delete(S));
        }
        return !0;
      }
    }
    function kt(o) {
      var a = o.defineMetadata, s = o.hasOwnMetadata, u = o.getOwnMetadata, v = o.getOwnMetadataKeys, z = o.deleteMetadata, C = new L(), b = {
        isProviderFor: function(c, p) {
          var h = C.get(c);
          return !m(h) && h.has(p) ? !0 : v(c, p).length ? (m(h) && (h = new N(), C.set(c, h)), h.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: z
      };
      return b;
    }
    function ne(o, a, s) {
      var u = J.getProvider(o, a);
      if (!m(u))
        return u;
      if (s) {
        if (J.setProvider(o, a, he))
          return he;
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
              for (var h = this._keys.length, f = p + 1; f < h; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, xe(c, this._cacheKey) && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new s(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new s(this._keys, this._values, z);
          }, b.prototype.entries = function() {
            return new s(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(c, p) {
            if (!xe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (xe(this._keys[h], c)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function v(b, c) {
        return b;
      }
      function z(b, c) {
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
            var h = v(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? E.has(h, this._key) : !1;
          }, c.prototype.get = function(p) {
            var h = v(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? E.get(h, this._key) : void 0;
          }, c.prototype.set = function(p, h) {
            var f = v(
              p,
              /*create*/
              !0
            );
            return f[this._key] = h, this;
          }, c.prototype.delete = function(p) {
            var h = v(
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
      function v(c, p) {
        if (!r.call(c, s)) {
          if (!p)
            return;
          Object.defineProperty(c, s, { value: E.create() });
        }
        return c[s];
      }
      function z(c, p) {
        for (var h = 0; h < p; ++h)
          c[h] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : z(p, c), p;
        }
        return z(new Array(c), c);
      }
      function b() {
        var c = C(o);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var p = "", h = 0; h < o; ++h) {
          var f = c[h];
          (h === 4 || h === 6 || h === 8) && (p += "-"), f < 16 && (p += "0"), p += f.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function Oe(o) {
      return o.__ = void 0, delete o.__, o;
    }
  });
})(ut || (ut = {}));
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
function T(i) {
  return pr(i);
}
var I;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
})(I || (I = {}));
var A;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(A || (A = {}));
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, R = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? fr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && hr(e, t, n), n;
};
const we = class we extends le {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return F``;
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
      Object.entries(g).forEach(([$, E]) => {
        const w = r[$];
        w && (y += `--${e}-${w}-override: ${E};
`);
      }), y && (n += `${l} {
  :host {
    ${y}  }
}
`);
    }), n ? F`<style>${n}</style>` : F``;
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
    return this.isStudio ? F`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : F``;
  }
  renderHeader() {
    return F``;
  }
};
we.slots = [], we.styles = ft`
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
let x = we;
R([
  P({ type: Object, attribute: "responsive-props" })
], x.prototype, "responsiveProps", 2);
R([
  P({ type: String })
], x.prototype, "activeEdge", 2);
R([
  P({ type: Boolean, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], x.prototype, "visible", 2);
R([
  P({ type: Number, reflect: !0, attribute: "z-index" }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], x.prototype, "zIndex", 2);
R([
  P({ type: Number, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], x.prototype, "opacity", 2);
R([
  P({ type: String, attribute: "custom-class" }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], x.prototype, "customClass", 2);
R([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], x.prototype, "width", 2);
R([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], x.prototype, "height", 2);
R([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], x.prototype, "margin", 2);
R([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], x.prototype, "padding", 2);
R([
  T({
    attributeType: A.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], x.prototype, "onClick", 1);
R([
  P({ type: String, reflect: !0 })
], x.prototype, "direction", 2);
R([
  P({ type: String, reflect: !0 })
], x.prototype, "justify", 2);
R([
  P({ type: String, reflect: !0 })
], x.prototype, "align", 2);
R([
  P({ type: String, reflect: !0 })
], x.prototype, "gap", 2);
R([
  P({ type: Number, reflect: !0, attribute: "items-per-row" })
], x.prototype, "itemsPerRow", 2);
R([
  P({ type: String, attribute: "background-color", reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], x.prototype, "backgroundColor", 2);
R([
  P({ type: String, attribute: "border-radius", reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], x.prototype, "borderRadius", 2);
R([
  P({ type: String, reflect: !0, attribute: "elevation" }),
  T({
    attributeType: A.PROPERTY,
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
], x.prototype, "elevation", 2);
R([
  T({
    attributeType: A.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], x.prototype, "show", 1);
R([
  T({
    attributeType: A.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], x.prototype, "hide", 1);
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, re = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? vr(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (n = (r ? l(e, t, n) : l(n)) || n);
  return r && n && yr(e, t, n), n;
};
function V(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const ct = {
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
let G = class extends x {
  constructor() {
    super(...arguments), this.direction = "column", this.justify = "flex-start", this.align = "stretch", this.gap = "0px", this.wrap = "nowrap";
  }
  get overridePrefix() {
    return "zero-stack";
  }
  static getStudioTemplate(i) {
    var L, U;
    if (!i) return ct;
    V(i.studio.display.label || "Stack");
    const e = ((L = i.studio.props) == null ? void 0 : L.direction) || "column", t = V(i.props.wrap || "nowrap"), r = V(i.props.justify || "flex-start"), n = V(i.props.align || "stretch"), d = V(i.props.gap || "0px"), l = V(i.props.padding || "0px"), g = V(i.props.backgroundColor || "transparent"), y = V(i.props.borderColor || "transparent"), $ = V(i.props.borderRadius || "0px"), E = i.props.responsiveProps || ((U = i.studio.props) == null ? void 0 : U.responsiveProps) || {};
    let w = "";
    const j = {
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
    return Object.entries(j).forEach(([J, he]) => {
      const fe = E[J];
      if (!fe) return;
      let ie = "";
      Object.entries(fe).forEach(([$e, Ee]) => {
        const ye = N[$e];
        ye && (ie += `--zero-stack-${ye}-override: ${Ee};
`);
      }), ie && (w += `${he} { .studio-stack-container { ${ie} } }
`);
    }), {
      ...ct,
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
          --zero-p-border-radius: ${$};

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
          ${w}
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
    return F`
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
G.styles = [
  x.styles,
  ft`
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
re([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    initialValue: "column",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], G.prototype, "direction", 2);
re([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
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
], G.prototype, "justify", 2);
re([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
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
], G.prototype, "align", 2);
re([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], G.prototype, "gap", 2);
re([
  P({ type: String, reflect: !0 }),
  T({
    attributeType: A.PROPERTY,
    uiComponentType: I.RESPONSIVE_OVERRIDE,
    displayLabel: "Wrap",
    fieldMappings: "wrap",
    categoryLabel: "Layout",
    optionItems: [
      { label: "No Wrap", value: "nowrap" },
      { label: "Wrap", value: "wrap" }
    ]
  })
], G.prototype, "wrap", 2);
G = re([
  ur({
    name: "zero-stack",
    version: "1.0.0",
    title: "Stack",
    elementSelector: "zero-stack",
    group: "Layout",
    iconName: "stack_icon.png"
  }),
  or("zero-stack")
], G);
export {
  G as ZeroStack,
  ct as studioTemplate
};
