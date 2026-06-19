var Le = Object.defineProperty;
var je = (e, t, r) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var zt = (e, t, r) => je(e, typeof t != "symbol" ? t + "" : t, r);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, xt = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ct = Symbol(), qt = /* @__PURE__ */ new WeakMap();
let le = class {
  constructor(t, r, i) {
    if (this._$cssResult$ = !0, i !== Ct) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (xt && t === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (t = qt.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && qt.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (e) => new le(typeof e == "string" ? e : e + "", void 0, Ct), Ve = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((i, n, l) => i + ((h) => {
    if (h._$cssResult$ === !0) return h.cssText;
    if (typeof h == "number") return h;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + h + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + e[l + 1], e[0]);
  return new le(r, e, Ct);
}, Be = (e, t) => {
  if (xt) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const i = document.createElement("style"), n = ct.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = r.cssText, e.appendChild(i);
  }
}, Gt = xt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const i of t.cssRules) r += i.cssText;
  return Fe(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ze, defineProperty: qe, getOwnPropertyDescriptor: Ge, getOwnPropertyNames: We, getOwnPropertySymbols: Xe, getPrototypeOf: Ye } = Object, B = globalThis, Wt = B.trustedTypes, Ze = Wt ? Wt.emptyScript : "", mt = B.reactiveElementPolyfillSupport, rt = (e, t) => e, dt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Ze : null;
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
} }, Et = (e, t) => !ze(e, t), Xt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Xt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(t, i, r);
      n !== void 0 && qe(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, r, i) {
    const { get: n, set: l } = Ge(this.prototype, t) ?? { get() {
      return this[r];
    }, set(h) {
      this[r] = h;
    } };
    return { get: n, set(h) {
      const y = n == null ? void 0 : n.call(this);
      l == null || l.call(this, h), this.requestUpdate(t, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(rt("elementProperties"))) return;
    const t = Ye(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(rt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(rt("properties"))) {
      const r = this.properties, i = [...We(r), ...Xe(r)];
      for (const n of i) this.createProperty(n, r[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [i, n] of r) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const n = this._$Eu(r, i);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const n of i) r.unshift(Gt(n));
    } else t !== void 0 && r.push(Gt(t));
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
    return Be(t, this.constructor.elementStyles), t;
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
  _$ET(t, r) {
    var l;
    const i = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, i);
    if (n !== void 0 && i.reflect === !0) {
      const h = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : dt).toAttribute(r, i.type);
      this._$Em = t, h == null ? this.removeAttribute(n) : this.setAttribute(n, h), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var l, h;
    const i = this.constructor, n = i._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const y = i.getPropertyOptions(n), c = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : dt;
      this._$Em = n;
      const x = c.fromAttribute(r, y.type);
      this[n] = x ?? ((h = this._$Ej) == null ? void 0 : h.get(n)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, r, i, n = !1, l) {
    var h;
    if (t !== void 0) {
      const y = this.constructor;
      if (n === !1 && (l = this[t]), i ?? (i = y.getPropertyOptions(t)), !((i.hasChanged ?? Et)(l, r) || i.useDefault && i.reflect && l === ((h = this._$Ej) == null ? void 0 : h.get(t)) && !this.hasAttribute(y._$Eu(t, i)))) return;
      this.C(t, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: i, reflect: n, wrapped: l }, h) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, h ?? r ?? this[t]), l !== !0 || h !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (r = void 0), this._$AL.set(t, r)), n === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
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
        for (const [l, h] of this._$Ep) this[l] = h;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [l, h] of n) {
        const { wrapped: y } = h, c = this[l];
        y !== !0 || this._$AL.has(l) || c === void 0 || this.C(l, void 0, h, c);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((n) => {
        var l;
        return (l = n.hostUpdate) == null ? void 0 : l.call(n);
      }), this.update(r)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var n;
      return (n = i.hostUpdated) == null ? void 0 : n.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[rt("elementProperties")] = /* @__PURE__ */ new Map(), Z[rt("finalized")] = /* @__PURE__ */ new Map(), mt == null || mt({ ReactiveElement: Z }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, Yt = (e) => e, pt = it.trustedTypes, Zt = pt ? pt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, he = "$lit$", V = `lit$${Math.random().toFixed(9).slice(2)}$`, ue = "?" + V, Je = `<${ue}>`, W = document, st = () => W.createComment(""), ot = (e) => e === null || typeof e != "object" && typeof e != "function", Tt = Array.isArray, Ke = (e) => Tt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", $t = `[ 	
\f\r]`, et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Kt = />/g, z = RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qt = /'/g, te = /"/g, ce = /^(?:script|style|textarea|title)$/i, Qe = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), N = Qe(1), J = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), q = W.createTreeWalker(W, 129);
function de(e, t) {
  if (!Tt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const tr = (e, t) => {
  const r = e.length - 1, i = [];
  let n, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", h = et;
  for (let y = 0; y < r; y++) {
    const c = e[y];
    let x, _, w = -1, H = 0;
    for (; H < c.length && (h.lastIndex = H, _ = h.exec(c), _ !== null); ) H = h.lastIndex, h === et ? _[1] === "!--" ? h = Jt : _[1] !== void 0 ? h = Kt : _[2] !== void 0 ? (ce.test(_[2]) && (n = RegExp("</" + _[2], "g")), h = z) : _[3] !== void 0 && (h = z) : h === z ? _[0] === ">" ? (h = n ?? et, w = -1) : _[1] === void 0 ? w = -2 : (w = h.lastIndex - _[2].length, x = _[1], h = _[3] === void 0 ? z : _[3] === '"' ? te : Qt) : h === te || h === Qt ? h = z : h === Jt || h === Kt ? h = et : (h = z, n = void 0);
    const U = h === z && e[y + 1].startsWith("/>") ? " " : "";
    l += h === et ? c + Je : w >= 0 ? (i.push(x), c.slice(0, w) + he + c.slice(w) + V + U) : c + V + (w === -2 ? y : U);
  }
  return [de(e, l + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class at {
  constructor({ strings: t, _$litType$: r }, i) {
    let n;
    this.parts = [];
    let l = 0, h = 0;
    const y = t.length - 1, c = this.parts, [x, _] = tr(t, r);
    if (this.el = at.createElement(x, i), q.currentNode = this.el.content, r === 2 || r === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (n = q.nextNode()) !== null && c.length < y; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const w of n.getAttributeNames()) if (w.endsWith(he)) {
          const H = _[h++], U = n.getAttribute(w).split(V), F = /([.?@])?(.*)/.exec(H);
          c.push({ type: 1, index: l, name: F[2], strings: U, ctor: F[1] === "." ? rr : F[1] === "?" ? ir : F[1] === "@" ? nr : ft }), n.removeAttribute(w);
        } else w.startsWith(V) && (c.push({ type: 6, index: l }), n.removeAttribute(w));
        if (ce.test(n.tagName)) {
          const w = n.textContent.split(V), H = w.length - 1;
          if (H > 0) {
            n.textContent = pt ? pt.emptyScript : "";
            for (let U = 0; U < H; U++) n.append(w[U], st()), q.nextNode(), c.push({ type: 2, index: ++l });
            n.append(w[H], st());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ue) c.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = n.data.indexOf(V, w + 1)) !== -1; ) c.push({ type: 7, index: l }), w += V.length - 1;
      }
      l++;
    }
  }
  static createElement(t, r) {
    const i = W.createElement("template");
    return i.innerHTML = t, i;
  }
}
function K(e, t, r = e, i) {
  var h, y;
  if (t === J) return t;
  let n = i !== void 0 ? (h = r._$Co) == null ? void 0 : h[i] : r._$Cl;
  const l = ot(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((y = n == null ? void 0 : n._$AO) == null || y.call(n, !1), l === void 0 ? n = void 0 : (n = new l(e), n._$AT(e, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = n : r._$Cl = n), n !== void 0 && (t = K(e, n._$AS(e, t.values), n, i)), t;
}
class er {
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
    const { el: { content: r }, parts: i } = this._$AD, n = ((t == null ? void 0 : t.creationScope) ?? W).importNode(r, !0);
    q.currentNode = n;
    let l = q.nextNode(), h = 0, y = 0, c = i[0];
    for (; c !== void 0; ) {
      if (h === c.index) {
        let x;
        c.type === 2 ? x = new lt(l, l.nextSibling, this, t) : c.type === 1 ? x = new c.ctor(l, c.name, c.strings, this, t) : c.type === 6 && (x = new sr(l, this, t)), this._$AV.push(x), c = i[++y];
      }
      h !== (c == null ? void 0 : c.index) && (l = q.nextNode(), h++);
    }
    return q.currentNode = W, n;
  }
  p(t) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, r), r += i.strings.length - 2) : i._$AI(t[r])), r++;
  }
}
class lt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, i, n) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = i, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    t = K(this, t, r), ot(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ke(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(W.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: r, _$litType$: i } = t, n = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = at.createElement(de(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === n) this._$AH.p(r);
    else {
      const h = new er(n, this), y = h.u(this.options);
      h.p(r), this.T(y), this._$AH = h;
    }
  }
  _$AC(t) {
    let r = ee.get(t.strings);
    return r === void 0 && ee.set(t.strings, r = new at(t)), r;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, n = 0;
    for (const l of t) n === r.length ? r.push(i = new lt(this.O(st()), this.O(st()), this, this.options)) : i = r[n], i._$AI(l), n++;
    n < r.length && (this._$AR(i && i._$AB.nextSibling, n), r.length = n);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); t !== this._$AB; ) {
      const n = Yt(t).nextSibling;
      Yt(t).remove(), t = n;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class ft {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, i, n, l) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = r, this._$AM = n, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = k;
  }
  _$AI(t, r = this, i, n) {
    const l = this.strings;
    let h = !1;
    if (l === void 0) t = K(this, t, r, 0), h = !ot(t) || t !== this._$AH && t !== J, h && (this._$AH = t);
    else {
      const y = t;
      let c, x;
      for (t = l[0], c = 0; c < l.length - 1; c++) x = K(this, y[i + c], r, c), x === J && (x = this._$AH[c]), h || (h = !ot(x) || x !== this._$AH[c]), x === k ? t = k : t !== k && (t += (x ?? "") + l[c + 1]), this._$AH[c] = x;
    }
    h && !n && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends ft {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class ir extends ft {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class nr extends ft {
  constructor(t, r, i, n, l) {
    super(t, r, i, n, l), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = K(this, t, r, 0) ?? k) === J) return;
    const i = this._$AH, n = t === k && i !== k || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, l = t !== k && (i === k || n);
    n && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class sr {
  constructor(t, r, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const wt = it.litHtmlPolyfillSupport;
wt == null || wt(at, lt), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const or = (e, t, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? t;
  let n = i._$litPart$;
  if (n === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = n = new lt(t.insertBefore(st(), l), l, void 0, r ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class nt extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = or(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return J;
  }
}
var ae;
nt._$litElement$ = !0, nt.finalized = !0, (ae = G.litElementHydrateSupport) == null || ae.call(G, { LitElement: nt });
const _t = G.litElementPolyfillSupport;
_t == null || _t({ LitElement: nt });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = (e) => (t, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: Et }, hr = (e = lr, t, r) => {
  const { kind: i, metadata: n } = r;
  let l = globalThis.litPropertyMetadata.get(n);
  if (l === void 0 && globalThis.litPropertyMetadata.set(n, l = /* @__PURE__ */ new Map()), i === "setter" && ((e = Object.create(e)).wrapped = !0), l.set(r.name, e), i === "accessor") {
    const { name: h } = r;
    return { set(y) {
      const c = t.get.call(this);
      t.set.call(this, y), this.requestUpdate(h, c, e, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(h, void 0, e, y), y;
    } };
  }
  if (i === "setter") {
    const { name: h } = r;
    return function(y) {
      const c = this[h];
      t.call(this, y), this.requestUpdate(h, c, e, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function P(e) {
  return (t, r) => typeof r == "object" ? hr(e, t, r) : ((i, n, l) => {
    const h = n.hasOwnProperty(l);
    return n.constructor.createProperty(l, i), h ? Object.getOwnPropertyDescriptor(n, l) : void 0;
  })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Q(e) {
  return P({ ...e, state: !0, attribute: !1 });
}
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ie;
(function(e) {
  (function(t) {
    var r = typeof globalThis == "object" ? globalThis : typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = n(e);
    typeof r.Reflect < "u" && (i = n(r.Reflect, i)), t(i, r), typeof r.Reflect > "u" && (r.Reflect = e);
    function n(c, x) {
      return function(_, w) {
        Object.defineProperty(c, _, { configurable: !0, writable: !0, value: w }), x && x(_, w);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function h() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function y() {
      return l() || h();
    }
  })(function(t, r) {
    var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", l = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", h = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, x = !y && !c, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return bt(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return bt({ __proto__: null });
      } : function() {
        return bt({});
      },
      has: x ? function(s, o) {
        return i.call(s, o);
      } : function(s, o) {
        return o in s;
      },
      get: x ? function(s, o) {
        return i.call(s, o) ? s[o] : void 0;
      } : function(s, o) {
        return s[o];
      }
    }, w = Object.getPrototypeOf(Function), H = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : He(), U = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ie(), F = typeof WeakMap == "function" ? WeakMap : De(), X = n ? Symbol.for("@reflect-metadata:registry") : void 0, ht = Oe(), At = ke(ht);
    function pe(s, o, a, u) {
      if (b(a)) {
        if (!Dt(s))
          throw new TypeError();
        if (!Nt(o))
          throw new TypeError();
        return xe(s, o);
      } else {
        if (!Dt(s))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(u) && !b(u) && !Y(u))
          throw new TypeError();
        return Y(u) && (u = void 0), a = j(a), Ce(s, o, a, u);
      }
    }
    t("decorate", pe);
    function fe(s, o) {
      function a(u, g) {
        if (!S(u))
          throw new TypeError();
        if (!b(g) && !Me(g))
          throw new TypeError();
        Ot(s, o, u, g);
      }
      return a;
    }
    t("metadata", fe);
    function ve(s, o, a, u) {
      if (!S(a))
        throw new TypeError();
      return b(u) || (u = j(u)), Ot(s, o, a, u);
    }
    t("defineMetadata", ve);
    function ye(s, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = j(a)), St(s, o, a);
    }
    t("hasMetadata", ye);
    function ge(s, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = j(a)), vt(s, o, a);
    }
    t("hasOwnMetadata", ge);
    function be(s, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = j(a)), Mt(s, o, a);
    }
    t("getMetadata", be);
    function me(s, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = j(a)), Pt(s, o, a);
    }
    t("getOwnMetadata", me);
    function $e(s, o) {
      if (!S(s))
        throw new TypeError();
      return b(o) || (o = j(o)), kt(s, o);
    }
    t("getMetadataKeys", $e);
    function we(s, o) {
      if (!S(s))
        throw new TypeError();
      return b(o) || (o = j(o)), Rt(s, o);
    }
    t("getOwnMetadataKeys", we);
    function _e(s, o, a) {
      if (!S(o))
        throw new TypeError();
      if (b(a) || (a = j(a)), !S(o))
        throw new TypeError();
      b(a) || (a = j(a));
      var u = tt(
        o,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : u.OrdinaryDeleteMetadata(s, o, a);
    }
    t("deleteMetadata", _e);
    function xe(s, o) {
      for (var a = s.length - 1; a >= 0; --a) {
        var u = s[a], g = u(o);
        if (!b(g) && !Y(g)) {
          if (!Nt(g))
            throw new TypeError();
          o = g;
        }
      }
      return o;
    }
    function Ce(s, o, a, u) {
      for (var g = s.length - 1; g >= 0; --g) {
        var O = s[g], M = O(o, a, u);
        if (!b(M) && !Y(M)) {
          if (!S(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function St(s, o, a) {
      var u = vt(s, o, a);
      if (u)
        return !0;
      var g = gt(o);
      return Y(g) ? !1 : St(s, g, a);
    }
    function vt(s, o, a) {
      var u = tt(
        o,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : It(u.OrdinaryHasOwnMetadata(s, o, a));
    }
    function Mt(s, o, a) {
      var u = vt(s, o, a);
      if (u)
        return Pt(s, o, a);
      var g = gt(o);
      if (!Y(g))
        return Mt(s, g, a);
    }
    function Pt(s, o, a) {
      var u = tt(
        o,
        a,
        /*Create*/
        !1
      );
      if (!b(u))
        return u.OrdinaryGetOwnMetadata(s, o, a);
    }
    function Ot(s, o, a, u) {
      var g = tt(
        a,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(s, o, a, u);
    }
    function kt(s, o) {
      var a = Rt(s, o), u = gt(s);
      if (u === null)
        return a;
      var g = kt(u, o);
      if (g.length <= 0)
        return a;
      if (a.length <= 0)
        return g;
      for (var O = new U(), M = [], m = 0, d = a; m < d.length; m++) {
        var p = d[m], f = O.has(p);
        f || (O.add(p), M.push(p));
      }
      for (var v = 0, $ = g; v < $.length; v++) {
        var p = $[v], f = O.has(p);
        f || (O.add(p), M.push(p));
      }
      return M;
    }
    function Rt(s, o) {
      var a = tt(
        s,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(s, o) : [];
    }
    function Ht(s) {
      if (s === null)
        return 1;
      switch (typeof s) {
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
          return s === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function b(s) {
      return s === void 0;
    }
    function Y(s) {
      return s === null;
    }
    function Ee(s) {
      return typeof s == "symbol";
    }
    function S(s) {
      return typeof s == "object" ? s !== null : typeof s == "function";
    }
    function Te(s, o) {
      switch (Ht(s)) {
        case 0:
          return s;
        case 1:
          return s;
        case 2:
          return s;
        case 3:
          return s;
        case 4:
          return s;
        case 5:
          return s;
      }
      var a = "string", u = Ut(s, l);
      if (u !== void 0) {
        var g = u.call(s, a);
        if (S(g))
          throw new TypeError();
        return g;
      }
      return Ae(s);
    }
    function Ae(s, o) {
      var a, u;
      {
        var g = s.toString;
        if (ut(g)) {
          var u = g.call(s);
          if (!S(u))
            return u;
        }
        var a = s.valueOf;
        if (ut(a)) {
          var u = a.call(s);
          if (!S(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function It(s) {
      return !!s;
    }
    function Se(s) {
      return "" + s;
    }
    function j(s) {
      var o = Te(s);
      return Ee(o) ? o : Se(o);
    }
    function Dt(s) {
      return Array.isArray ? Array.isArray(s) : s instanceof Object ? s instanceof Array : Object.prototype.toString.call(s) === "[object Array]";
    }
    function ut(s) {
      return typeof s == "function";
    }
    function Nt(s) {
      return typeof s == "function";
    }
    function Me(s) {
      switch (Ht(s)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function yt(s, o) {
      return s === o || s !== s && o !== o;
    }
    function Ut(s, o) {
      var a = s[o];
      if (a != null) {
        if (!ut(a))
          throw new TypeError();
        return a;
      }
    }
    function Lt(s) {
      var o = Ut(s, h);
      if (!ut(o))
        throw new TypeError();
      var a = o.call(s);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function jt(s) {
      return s.value;
    }
    function Ft(s) {
      var o = s.next();
      return o.done ? !1 : o;
    }
    function Vt(s) {
      var o = s.return;
      o && o.call(s);
    }
    function gt(s) {
      var o = Object.getPrototypeOf(s);
      if (typeof s != "function" || s === w || o !== w)
        return o;
      var a = s.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var g = u.constructor;
      return typeof g != "function" || g === s ? o : g;
    }
    function Pe() {
      var s;
      !b(X) && typeof r.Reflect < "u" && !(X in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (s = Re(r.Reflect));
      var o, a, u, g = new F(), O = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return O;
      function M(v) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case s === v:
            break;
          case b(o):
            o = v;
            break;
          case o === v:
            break;
          case b(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            u === void 0 && (u = new U()), u.add(v);
            break;
        }
      }
      function m(v, $) {
        if (!b(o)) {
          if (o.isProviderFor(v, $))
            return o;
          if (!b(a)) {
            if (a.isProviderFor(v, $))
              return o;
            if (!b(u))
              for (var T = Lt(u); ; ) {
                var A = Ft(T);
                if (!A)
                  return;
                var L = jt(A);
                if (L.isProviderFor(v, $))
                  return Vt(T), L;
              }
          }
        }
        if (!b(s) && s.isProviderFor(v, $))
          return s;
      }
      function d(v, $) {
        var T = g.get(v), A;
        return b(T) || (A = T.get($)), b(A) && (A = m(v, $), b(A) || (b(T) && (T = new H(), g.set(v, T)), T.set($, A))), A;
      }
      function p(v) {
        if (b(v))
          throw new TypeError();
        return o === v || a === v || !b(u) && u.has(v);
      }
      function f(v, $, T) {
        if (!p(T))
          throw new Error("Metadata provider not registered.");
        var A = d(v, $);
        if (A !== T) {
          if (!b(A))
            return !1;
          var L = g.get(v);
          b(L) && (L = new H(), g.set(v, L)), L.set($, T);
        }
        return !0;
      }
    }
    function Oe() {
      var s;
      return !b(X) && S(r.Reflect) && Object.isExtensible(r.Reflect) && (s = r.Reflect[X]), b(s) && (s = Pe()), !b(X) && S(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, X, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: s
      }), s;
    }
    function ke(s) {
      var o = new F(), a = {
        isProviderFor: function(p, f) {
          var v = o.get(p);
          return b(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return ht.registerProvider(a), a;
      function u(p, f, v) {
        var $ = o.get(p), T = !1;
        if (b($)) {
          if (!v)
            return;
          $ = new H(), o.set(p, $), T = !0;
        }
        var A = $.get(f);
        if (b(A)) {
          if (!v)
            return;
          if (A = new H(), $.set(f, A), !s.setProvider(p, f, a))
            throw $.delete(f), T && o.delete(p), new Error("Wrong provider for target.");
        }
        return A;
      }
      function g(p, f, v) {
        var $ = u(
          f,
          v,
          /*Create*/
          !1
        );
        return b($) ? !1 : It($.has(p));
      }
      function O(p, f, v) {
        var $ = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (!b($))
          return $.get(p);
      }
      function M(p, f, v, $) {
        var T = u(
          v,
          $,
          /*Create*/
          !0
        );
        T.set(p, f);
      }
      function m(p, f) {
        var v = [], $ = u(
          p,
          f,
          /*Create*/
          !1
        );
        if (b($))
          return v;
        for (var T = $.keys(), A = Lt(T), L = 0; ; ) {
          var Bt = Ft(A);
          if (!Bt)
            return v.length = L, v;
          var Ne = jt(Bt);
          try {
            v[L] = Ne;
          } catch (Ue) {
            try {
              Vt(A);
            } finally {
              throw Ue;
            }
          }
          L++;
        }
      }
      function d(p, f, v) {
        var $ = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (b($) || !$.delete(p))
          return !1;
        if ($.size === 0) {
          var T = o.get(f);
          b(T) || (T.delete(v), T.size === 0 && o.delete(T));
        }
        return !0;
      }
    }
    function Re(s) {
      var o = s.defineMetadata, a = s.hasOwnMetadata, u = s.getOwnMetadata, g = s.getOwnMetadataKeys, O = s.deleteMetadata, M = new F(), m = {
        isProviderFor: function(d, p) {
          var f = M.get(d);
          return !b(f) && f.has(p) ? !0 : g(d, p).length ? (b(f) && (f = new U(), M.set(d, f)), f.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: O
      };
      return m;
    }
    function tt(s, o, a) {
      var u = ht.getProvider(s, o);
      if (!b(u))
        return u;
      if (a) {
        if (ht.setProvider(s, o, At))
          return At;
        throw new Error("Illegal state.");
      }
    }
    function He() {
      var s = {}, o = [], a = (
        /** @class */
        function() {
          function m(d, p, f) {
            this._index = 0, this._keys = d, this._values = p, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[h] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var p = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, m;
        }()
      ), u = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = s, this._cacheIndex = -2;
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
              for (var f = this._keys.length, v = p + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, yt(d, this._cacheKey) && (this._cacheKey = s, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = s, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, g);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[h] = function() {
            return this.entries();
          }, m.prototype._find = function(d, p) {
            if (!yt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (yt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function g(m, d) {
        return m;
      }
      function O(m, d) {
        return d;
      }
      function M(m, d) {
        return [m, d];
      }
    }
    function Ie() {
      var s = (
        /** @class */
        function() {
          function o() {
            this._map = new H();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(a) {
            return this._map.has(a);
          }, o.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, o.prototype.delete = function(a) {
            return this._map.delete(a);
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
          }, o.prototype[h] = function() {
            return this.keys();
          }, o;
        }()
      );
      return s;
    }
    function De() {
      var s = 16, o = _.create(), a = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(p) {
            var f = g(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? _.has(f, this._key) : !1;
          }, d.prototype.get = function(p) {
            var f = g(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? _.get(f, this._key) : void 0;
          }, d.prototype.set = function(p, f) {
            var v = g(
              p,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, d.prototype.delete = function(p) {
            var f = g(
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
        while (_.has(o, d));
        return o[d] = !0, d;
      }
      function g(d, p) {
        if (!i.call(d, a)) {
          if (!p)
            return;
          Object.defineProperty(d, a, { value: _.create() });
        }
        return d[a];
      }
      function O(d, p) {
        for (var f = 0; f < p; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : O(p, d), p;
        }
        return O(new Array(d), d);
      }
      function m() {
        var d = M(s);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var p = "", f = 0; f < s; ++f) {
          var v = d[f];
          (f === 4 || f === 6 || f === 8) && (p += "-"), v < 16 && (p += "0"), p += v.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function bt(s) {
      return s.__ = void 0, delete s.__, s;
    }
  });
})(ie || (ie = {}));
function ur(e) {
  return typeof e.name == "string" && typeof e.version == "string" && typeof e.title == "string" && typeof e.elementSelector == "string" && typeof e.group == "string" && typeof e.iconName == "string";
}
function cr(e) {
  return function(t) {
    if (ur(e)) {
      const r = {
        version: e.version,
        name: e.name,
        title: e.title,
        selector: e.elementSelector,
        category: e.group,
        icon: e.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, t.prototype), globalThis.customElements) {
        const i = `${e.elementSelector}-${e.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, t);
          } catch {
            try {
              customElements.define(i, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function dr(e) {
  return cr(e);
}
function pr(e) {
  return function(t) {
    class r extends t {
      constructor() {
        super(...arguments);
        zt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), h = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, c = this.shadowRoot;
        if (!c) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const _ = new CSSStyleSheet(), w = (x = l.sheet) == null ? void 0 : x.cssRules;
          w && (Array.from(w).forEach((H) => _.insertRule(H.cssText)), c.adoptedStyleSheets = [...c.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          c.appendChild(_);
        }
        h.forEach((_) => {
          const w = _.cloneNode(!0);
          c.appendChild(w);
        });
      }
    }
    return r;
  };
}
function fr(e) {
  var r;
  if (((r = e == null ? void 0 : e.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function vr(e) {
  return function(t, r) {
    try {
      fr(e);
      const i = Reflect.getMetadata("ZeroAttribute", t) || [];
      let n = !0;
      if (typeof r == "string") {
        try {
          n = typeof t[r] != "function";
        } catch {
          n = !0;
        }
        n && (e.fieldMappings = e.fieldMappings ?? r);
      }
      i.push(e), Reflect.defineMetadata("ZeroAttribute", i, t);
    } catch (i) {
      console.log(i);
    }
  };
}
function D(e) {
  return vr(e);
}
var I;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown", e.LAYOUT_PICKER = "layout-picker", e.RESPONSIVE_OVERRIDE = "responsive-override", e.IMAGE_PICKER = "image-picker";
})(I || (I = {}));
var R;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(R || (R = {}));
var yr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, E = (e, t, r, i) => {
  for (var n = i > 1 ? void 0 : i ? gr(t, r) : t, l = e.length - 1, h; l >= 0; l--)
    (h = e[l]) && (n = (i ? h(t, r, n) : h(n)) || n);
  return i && n && yr(t, r, n), n;
};
const ne = () => window.zeroThemeManager, se = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;align-items:center;gap:10px;'>",
    "<div style='width:24px;height:24px;border-radius:6px;background:var(--uiv-primary-color,#6c63ff);border:1px solid rgba(0,0,0,0.1);'></div>",
    "<div>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;'>{{display:label}}</div>",
    "<div style='font-size:0.75rem;color:var(--uiv-text-color,#1e293b);font-family:monospace;'>{{display:value}}</div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Color"]
};
function oe(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let C = class extends nt {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Select color", this.helpText = "", this.errorMessage = "", this.value = "#000000", this.required = !1, this.disabled = !1, this.readonly = !1, this.showAlpha = !1, this.showPresets = !0, this.showInputFields = !0, this.showEyeDropper = !0, this.format = "hex", this.presetColors = "#f44336,#e91e63,#9c27b0,#673ab7,#3f51b5,#2196f3,#03a9f4,#00bcd4,#009688,#4caf50,#8bc34a,#cddc39,#ffeb3b,#ffc107,#ff9800,#ff5722", this.width = "100%", this.height = "36px", this.pickerWidth = "280px", this.pickerHeight = "200px", this.isOpen = !1, this.currentColor = {
      hex: "#000000",
      rgb: { r: 0, g: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 },
      hsv: { h: 0, s: 0, v: 0 }
    }, this.alpha = 1, this.hasError = !1, this.inputValue = "#000000", this.activeTab = "picker", this.isDragging = !1, this.dragTarget = null;
  }
  static getStudioTemplate(e) {
    if (!e) return se;
    const t = oe(e.studio.display.label || "Color Picker"), r = oe(e.studio.display.value || "#000000"), i = "var(--uiv-text-color, #333)", n = "var(--uiv-border-color, #e0e0e0)";
    return {
      ...se,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:${i};'>${t}</label>`,
        "<div style='position:relative;display:flex;align-items:center;'>",
        `<div style='width:100%;height:36px;padding:0 12px;border:1px solid ${n};border-radius:8px;font-size:14px;background:var(--uiv-surface-color, #fff);color:${i};display:flex;align-items:center;'>${r}</div>`,
        `<div style='position:absolute;right:8px;width:28px;height:20px;border-radius:4px;border:1px solid ${n};background:${r};'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = ne()) == null || e.addEventListener("theme-changed", () => this.requestUpdate());
  }
  firstUpdated() {
    this.value && (this.currentColor = this.hexToColorFormat(this.value), this.inputValue = this.value), document.addEventListener("mousemove", (e) => {
      this.isDragging && (this.dragTarget === "saturation" ? this.updateSaturationFromEvent(e) : this.dragTarget === "hue" ? this.updateHueFromEvent(e) : this.dragTarget === "alpha" && this.updateAlphaFromEvent(e));
    }), document.addEventListener("mouseup", () => {
      this.isDragging = !1, this.dragTarget = null;
    }), document.addEventListener("click", (e) => {
      this.contains(e.target) || (this.isOpen = !1);
    });
  }
  render() {
    var t;
    const e = (t = ne()) == null ? void 0 : t.getActiveTheme("zero-standard-themes");
    return N`
      <style>
        ${e ? e.getGlobalStyles() : ""}
        ${e ? e.getComponentStyles("color-picker") : ""}
      </style>
      <div class="form-field uiv-${e == null ? void 0 : e.id}-theme" style="width: ${this.width}">
        ${this.label ? N`
          <label class="form-field-label uiv-${e == null ? void 0 : e.id}-text ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}
        
        <div 
          class="input-container"
          style="
            --picker-width: ${this.pickerWidth};
            --picker-height: ${this.pickerHeight};
            --hue: ${this.currentColor.hsl.h};
            --current-color: ${this.currentColor.hex};
          "
        >
          <input
            class="mat-mdc-input-element uiv-${e == null ? void 0 : e.id}-card ${this.hasError ? "error" : ""}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @click=${this.handleInputClick}
            @input=${this.handleInputChange}
            @blur=${this.handleInputBlur}
          />
          <div class="color-preview uiv-${e == null ? void 0 : e.id}-card" @click=${this.handlePreviewClick}>
            <div 
              class="color-swatch" 
              style="background: ${this.showAlpha ? this.rgbaToString() : this.currentColor.hex}"
            ></div>
          </div>
        </div>

        ${this.isOpen ? N`
          <div class="dropdown uiv-${e == null ? void 0 : e.id}-theme uiv-${e == null ? void 0 : e.id}-card">
            <div class="picker-tabs" style="display: flex; border-bottom: 1px solid var(--uiv-border)">
              <button 
                type="button" 
                class="tab-button ${this.activeTab === "picker" ? "active" : ""}"
                @click=${() => this.activeTab = "picker"}
              >
                Picker
              </button>
              ${this.showPresets ? N`
                <button 
                  type="button" 
                  class="tab-button ${this.activeTab === "presets" ? "active" : ""}"
                  @click=${() => this.activeTab = "presets"}
                >
                  Presets
                </button>
              ` : ""}
              ${this.showInputFields ? N`
                <button 
                  type="button" 
                  class="tab-button ${this.activeTab === "inputs" ? "active" : ""}"
                  @click=${() => this.activeTab = "inputs"}
                >
                  Values
                </button>
              ` : ""}
            </div>

            <div class="picker-content" style="padding: 20px; background: transparent">
              ${this.activeTab === "picker" ? this.renderColorPicker() : ""}
              ${this.activeTab === "presets" ? this.renderPresets() : ""}
              ${this.activeTab === "inputs" ? this.renderInputs() : ""}
            </div>            
            ${this.showEyeDropper || this.showAlpha ? N`
              <div class="picker-actions" style="padding: 12px; border-top: 1px solid var(--uiv-border); display: flex; gap: 8px">
                ${this.showEyeDropper && "EyeDropper" in window ? N`
                  <button type="button" class="action-button uiv-${e == null ? void 0 : e.id}-card" style="background: var(--uiv-primary); color: white; border: none" @click=${this.openEyeDropper}>
                    Pick
                  </button>
                ` : ""}
                <button type="button" class="action-button uiv-${e == null ? void 0 : e.id}-card" style="background: transparent; border: 1px solid var(--uiv-error-color, #f44336); color: var(--uiv-error-color, #f44336)" @click=${this.clearColor}>
                  Clear
                </button>
              </div>
            ` : ""}
          </div>
        ` : ""}

        ${this.helpText && !this.hasError ? N`
          <div class="form-field-hint uiv-${e == null ? void 0 : e.id}-text" style="opacity: 0.7">${this.helpText}</div>
        ` : ""}
        
        ${this.errorMessage && this.hasError ? N`
          <div class="form-field-error uiv-${e == null ? void 0 : e.id}-text" style="color: var(--uiv-error-color, #f44336)">${this.errorMessage}</div>
        ` : ""}
      </div>
    `;
  }
  renderColorPicker() {
    return N`
      <div 
        class="color-picker-area"
        @mousedown=${this.handleSaturationMouseDown}
      >
        <div 
          class="saturation-cursor"
          style="left: ${this.currentColor.hsv.s * 100}%; top: ${(1 - this.currentColor.hsv.v) * 100}%"
        ></div>
      </div>

      <div 
        class="hue-slider"
        @mousedown=${this.handleHueMouseDown}
      >
        <div 
          class="slider-handle"
          style="left: ${this.currentColor.hsl.h / 360 * 100}%"
        ></div>
      </div>

      ${this.showAlpha ? N`
        <div 
          class="alpha-slider"
          @mousedown=${this.handleAlphaMouseDown}
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
    return N`
      <div class="presets-grid">
        ${e.map((t) => N`
          <div 
            class="preset-color"
            style="background-color: ${t}; border-color: ${t === this.currentColor.hex ? "var(--uiv-primary)" : "transparent"}"
            @click=${() => this.selectPresetColor(t)}
          ></div>
        `)}
      </div>
    `;
  }
  renderInputs() {
    return N`
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
            @input=${(e) => this.handleRgbInput(e, "r")}
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
            @input=${(e) => this.handleRgbInput(e, "g")}
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
            @input=${(e) => this.handleRgbInput(e, "b")}
          />
        </div>

        ${this.showAlpha ? N`
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
  handleHueMouseDown(e) {
    this.isDragging = !0, this.dragTarget = "hue", this.updateHueFromEvent(e);
  }
  handleAlphaMouseDown(e) {
    this.isDragging = !0, this.dragTarget = "alpha", this.updateAlphaFromEvent(e);
  }
  updateSaturationFromEvent(e) {
    var l;
    const t = (l = this.shadowRoot) == null ? void 0 : l.querySelector(".color-picker-area");
    if (!t) return;
    const r = t.getBoundingClientRect(), i = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), n = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    this.currentColor = {
      ...this.currentColor,
      hsv: { ...this.currentColor.hsv, s: i, v: 1 - n }
    }, this.updateColorFromHsv();
  }
  updateHueFromEvent(e) {
    var l;
    const t = (l = this.shadowRoot) == null ? void 0 : l.querySelector(".hue-slider");
    if (!t) return;
    const r = t.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * 360;
    this.currentColor = {
      ...this.currentColor,
      hsl: { ...this.currentColor.hsl, h: n },
      hsv: { ...this.currentColor.hsv, h: n }
    }, this.updateColorFromHsv();
  }
  updateAlphaFromEvent(e) {
    var n;
    const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".alpha-slider");
    if (!t) return;
    const r = t.getBoundingClientRect(), i = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    this.alpha = i, this.updateValue();
  }
  handleHexInput(e) {
    const t = e.target;
    this.isValidColor(t.value) && (this.currentColor = this.hexToColorFormat(t.value), this.updateValue());
  }
  handleRgbInput(e, t) {
    const r = e.target, i = Math.max(0, Math.min(255, parseInt(r.value) || 0));
    this.currentColor = {
      ...this.currentColor,
      rgb: { ...this.currentColor.rgb, [t]: i }
    }, this.updateColorFromRgb();
  }
  handleAlphaInput(e) {
    const t = e.target;
    this.alpha = Math.max(0, Math.min(1, parseFloat(t.value) || 0)), this.updateValue();
  }
  selectPresetColor(e) {
    this.currentColor = this.hexToColorFormat(e), this.updateValue();
  }
  async openEyeDropper() {
    if ("EyeDropper" in window)
      try {
        const t = await new window.EyeDropper().open();
        this.currentColor = this.hexToColorFormat(t.sRGBHex), this.updateValue();
      } catch {
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
    const i = Math.max(e, t, r), n = Math.min(e, t, r);
    let l = 0, h = 0, y = (i + n) / 2;
    if (i !== n) {
      const c = i - n;
      switch (h = y > 0.5 ? c / (2 - i - n) : c / (i + n), i) {
        case e:
          l = (t - r) / c + (t < r ? 6 : 0);
          break;
        case t:
          l = (r - e) / c + 2;
          break;
        case r:
          l = (e - t) / c + 4;
          break;
      }
      l /= 6;
    }
    return { h: l * 360, s: h * 100, l: y * 100 };
  }
  rgbToHsv({ r: e, g: t, b: r }) {
    e /= 255, t /= 255, r /= 255;
    const i = Math.max(e, t, r), n = Math.min(e, t, r);
    let l = 0, h = i === 0 ? 0 : (i - n) / i, y = i;
    if (i !== n) {
      const c = i - n;
      switch (i) {
        case e:
          l = (t - r) / c + (t < r ? 6 : 0);
          break;
        case t:
          l = (r - e) / c + 2;
          break;
        case r:
          l = (e - t) / c + 4;
          break;
      }
      l /= 6;
    }
    return { h: l * 360, s: h, v: y };
  }
  hsvToRgb({ h: e, s: t, v: r }) {
    const i = r * t, n = i * (1 - Math.abs(e / 60 % 2 - 1)), l = r - i;
    let h = 0, y = 0, c = 0;
    return e < 60 ? (h = i, y = n) : e < 120 ? (h = n, y = i) : e < 180 ? (y = i, c = n) : e < 240 ? (y = n, c = i) : e < 300 ? (h = n, c = i) : (h = i, c = n), { r: Math.round((h + l) * 255), g: Math.round((y + l) * 255), b: Math.round((c + l) * 255) };
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
    const e = { value: this.value, currentColor: this.currentColor, alpha: this.alpha };
    this.dispatchEvent(new CustomEvent("change", { detail: e, bubbles: !0, composed: !0 })), this.dispatchEvent(new CustomEvent("color-change", { detail: e, bubbles: !0, composed: !0 }));
  }
  handleChange(e) {
    this.dispatchChangeEvent();
  }
  handleColorChange(e) {
    this.dispatchChangeEvent();
  }
};
C.styles = Ve`
    :host {
      display: block;
      font-family: var(--uiv-font-family, inherit);
      position: relative;
      --uiv-primary: var(--uiv-primary-color, #1976d2);
      --uiv-bg: var(--uiv-surface-color, #ffffff);
      --uiv-text: var(--uiv-text-color, #333);
      --uiv-border: var(--uiv-border-color, #e0e0e0);
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }

    .form-field-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--uiv-text);
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--uiv-error-color, #f44336);
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .mat-mdc-input-element {
      width: 100%;
      height: var(--input-height, 36px);
      padding: 0 44px 0 12px;
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      font-size: 14px;
      background: var(--uiv-bg);
      color: var(--uiv-text);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      box-shadow: var(--uiv-shadow-depth, none);
    }

    .mat-mdc-input-element:hover {
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
    }

    .color-preview {
      position: absolute;
      right: 8px;
      width: 28px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid var(--uiv-border);
      cursor: pointer;
      overflow: hidden;
    }

    .color-swatch {
      width: 100%;
      height: 100%;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background: var(--uiv-bg);
      border: 1px solid var(--uiv-border);
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
      z-index: 1000;
      margin-top: 8px;
      width: var(--picker-width, 280px);
      overflow: hidden;
      backdrop-filter: blur(20px);
    }

    .tab-button {
      flex: 1;
      padding: 12px;
      border: none;
      background: transparent;
      cursor: pointer;
      color: var(--uiv-text);
      opacity: 0.6;
      font-weight: 600;
      transition: all 0.2s;
    }

    .tab-button.active {
      opacity: 1;
      color: var(--uiv-primary);
      background: rgba(var(--uiv-primary-rgb, 25, 118, 210), 0.1);
    }

    .color-picker-area {
      height: 180px;
      border-radius: 8px;
      margin-bottom: 16px;
      position: relative;
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
    }

    .hue-slider, .alpha-slider {
      height: 12px;
      border-radius: 6px;
      margin-bottom: 12px;
      position: relative;
      cursor: pointer;
    }

    .hue-slider {
      background: linear-gradient(to right, 
        hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%),
        hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%)
      );
    }

    .alpha-slider {
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect width="10" height="10" fill="%23f0f0f0"/><rect x="10" y="10" width="10" height="10" fill="%23f0f0f0"/><rect x="10" width="10" height="10" fill="white"/><rect y="10" width="10" height="10" fill="white"/></svg>');
    }

    .alpha-gradient {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background: linear-gradient(to right, transparent, var(--current-color, #000));
    }

    .slider-handle {
      width: 16px;
      height: 16px;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .color-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
    }

    .color-inputs.with-alpha {
      grid-template-columns: repeat(4, 1fr);
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    .input-label {
      font-size: 11px;
      color: var(--uiv-text);
      opacity: 0.6;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    .color-input {
      padding: 6px;
      border: 1px solid var(--uiv-border);
      border-radius: 4px;
      font-size: 13px;
      background: var(--uiv-bg);
      color: var(--uiv-text);
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
      transition: all 0.2s;
    }

    .preset-color:hover {
      transform: scale(1.1);
      border-color: var(--uiv-primary);
    }

    .picker-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    .action-button {
      padding: 6px 16px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 13px;
    }

    .form-field-hint {
      font-size: 12px;
      color: var(--uiv-text);
      opacity: 0.7;
      margin-top: 4px;
    }

    .form-field-error {
      font-size: 12px;
      color: var(--uiv-error-color, #f44336);
      margin-top: 4px;
    }
  `;
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], C.prototype, "label", 2);
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], C.prototype, "placeholder", 2);
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], C.prototype, "helpText", 2);
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], C.prototype, "errorMessage", 2);
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.COLOR_PICKER,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], C.prototype, "value", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], C.prototype, "required", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], C.prototype, "disabled", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Readonly",
    fieldMappings: "readonly"
  })
], C.prototype, "readonly", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Alpha",
    fieldMappings: "showAlpha"
  })
], C.prototype, "showAlpha", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Presets",
    fieldMappings: "showPresets"
  })
], C.prototype, "showPresets", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Input Fields",
    fieldMappings: "showInputFields"
  })
], C.prototype, "showInputFields", 2);
E([
  P({ type: Boolean }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Eye Dropper",
    fieldMappings: "showEyeDropper"
  })
], C.prototype, "showEyeDropper", 2);
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Output Format",
    fieldMappings: "format"
  })
], C.prototype, "format", 2);
E([
  P({ type: String }),
  D({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Preset Colors",
    fieldMappings: "presetColors"
  })
], C.prototype, "presetColors", 2);
E([
  P({ type: String })
], C.prototype, "width", 2);
E([
  P({ type: String })
], C.prototype, "height", 2);
E([
  P({ type: String })
], C.prototype, "pickerWidth", 2);
E([
  P({ type: String })
], C.prototype, "pickerHeight", 2);
E([
  Q()
], C.prototype, "isOpen", 2);
E([
  Q()
], C.prototype, "currentColor", 2);
E([
  Q()
], C.prototype, "alpha", 2);
E([
  Q()
], C.prototype, "hasError", 2);
E([
  Q()
], C.prototype, "inputValue", 2);
E([
  Q()
], C.prototype, "activeTab", 2);
E([
  D({
    attributeType: R.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], C.prototype, "handleChange", 1);
E([
  D({
    attributeType: R.EVENT,
    displayLabel: "On Color Change",
    eventTrigger: "color-change"
  })
], C.prototype, "handleColorChange", 1);
C = E([
  dr({
    name: "zero-color-picker",
    version: "1.0.0",
    title: "Color Picker",
    elementSelector: "zero-color-picker",
    group: "Form Controls",
    iconName: "color-picker-icon.png"
  }),
  pr(),
  ar("zero-color-picker")
], C);
export {
  C as ZeroColorPicker,
  se as studioTemplate
};
