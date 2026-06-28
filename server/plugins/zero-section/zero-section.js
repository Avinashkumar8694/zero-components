/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = globalThis, xt = pt.ShadowRoot && (pt.ShadyCSS === void 0 || pt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), ft = /* @__PURE__ */ new WeakMap();
let Nt = class {
  constructor(t, r, o) {
    if (this._$cssResult$ = !0, o !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (xt && t === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (t = ft.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && ft.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ht = (e) => new Nt(typeof e == "string" ? e : e + "", void 0, $t), Ut = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((o, a, d) => o + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + e[d + 1], e[0]);
  return new Nt(r, e, $t);
}, Bt = (e, t) => {
  if (xt) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const o = document.createElement("style"), a = pt.litNonce;
    a !== void 0 && o.setAttribute("nonce", a), o.textContent = r.cssText, e.appendChild(o);
  }
}, Ct = xt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const o of t.cssRules) r += o.cssText;
  return Ht(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Xt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, Ie = globalThis, wt = Ie.trustedTypes, er = wt ? wt.emptyScript : "", yt = Ie.reactiveElementPolyfillSupport, Ve = (e, t) => e, dt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? er : null;
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
} }, Tt = (e, t) => !Vt(e, t), Rt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: Tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ie.litPropertyMetadata ?? (Ie.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let We = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Rt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const o = Symbol(), a = this.getPropertyDescriptor(t, o, r);
      a !== void 0 && Xt(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, r, o) {
    const { get: a, set: d } = qt(this.prototype, t) ?? { get() {
      return this[r];
    }, set(p) {
      this[r] = p;
    } };
    return { get: a, set(p) {
      const g = a == null ? void 0 : a.call(this);
      d == null || d.call(this, p), this.requestUpdate(t, g, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ve("elementProperties"))) return;
    const t = Kt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ve("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ve("properties"))) {
      const r = this.properties, o = [...Zt(r), ...Qt(r)];
      for (const a of o) this.createProperty(a, r[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [o, a] of r) this.elementProperties.set(o, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, o] of this.elementProperties) {
      const a = this._$Eu(r, o);
      a !== void 0 && this._$Eh.set(a, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const a of o) r.unshift(Ct(a));
    } else t !== void 0 && r.push(Ct(t));
    return r;
  }
  static _$Eu(t, r) {
    const o = r.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const o of r.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Bt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostConnected) == null ? void 0 : o.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostDisconnected) == null ? void 0 : o.call(r);
    });
  }
  attributeChangedCallback(t, r, o) {
    this._$AK(t, o);
  }
  _$ET(t, r) {
    var d;
    const o = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, o);
    if (a !== void 0 && o.reflect === !0) {
      const p = (((d = o.converter) == null ? void 0 : d.toAttribute) !== void 0 ? o.converter : dt).toAttribute(r, o.type);
      this._$Em = t, p == null ? this.removeAttribute(a) : this.setAttribute(a, p), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var d, p;
    const o = this.constructor, a = o._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const g = o.getPropertyOptions(a), x = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((d = g.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? g.converter : dt;
      this._$Em = a;
      const R = x.fromAttribute(r, g.type);
      this[a] = R ?? ((p = this._$Ej) == null ? void 0 : p.get(a)) ?? R, this._$Em = null;
    }
  }
  requestUpdate(t, r, o, a = !1, d) {
    var p;
    if (t !== void 0) {
      const g = this.constructor;
      if (a === !1 && (d = this[t]), o ?? (o = g.getPropertyOptions(t)), !((o.hasChanged ?? Tt)(d, r) || o.useDefault && o.reflect && d === ((p = this._$Ej) == null ? void 0 : p.get(t)) && !this.hasAttribute(g._$Eu(t, o)))) return;
      this.C(t, r, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: o, reflect: a, wrapped: d }, p) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, p ?? r ?? this[t]), d !== !0 || p !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (r = void 0), this._$AL.set(t, r)), a === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var o;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [d, p] of this._$Ep) this[d] = p;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [d, p] of a) {
        const { wrapped: g } = p, x = this[d];
        g !== !0 || this._$AL.has(d) || x === void 0 || this.C(d, void 0, p, x);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (o = this._$EO) == null || o.forEach((a) => {
        var d;
        return (d = a.hostUpdate) == null ? void 0 : d.call(a);
      }), this.update(r)) : this._$EM();
    } catch (a) {
      throw t = !1, this._$EM(), a;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((o) => {
      var a;
      return (a = o.hostUpdated) == null ? void 0 : a.call(o);
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
We.elementStyles = [], We.shadowRootOptions = { mode: "open" }, We[Ve("elementProperties")] = /* @__PURE__ */ new Map(), We[Ve("finalized")] = /* @__PURE__ */ new Map(), yt == null || yt({ ReactiveElement: We }), (Ie.reactiveElementVersions ?? (Ie.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe = globalThis, Et = (e) => e, ut = Xe.trustedTypes, _t = ut ? ut.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, jt = "$lit$", De = `lit$${Math.random().toFixed(9).slice(2)}$`, Yt = "?" + De, tr = `<${Yt}>`, Ge = document, Ze = () => Ge.createComment(""), Qe = (e) => e === null || typeof e != "object" && typeof e != "function", Pt = Array.isArray, rr = (e) => Pt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", bt = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, St = /-->/g, Ot = />/g, Ue = RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Lt = /'/g, Mt = /"/g, Gt = /^(?:script|style|textarea|title)$/i, or = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), ee = or(1), Je = Symbol.for("lit-noChange"), W = Symbol.for("lit-nothing"), zt = /* @__PURE__ */ new WeakMap(), je = Ge.createTreeWalker(Ge, 129);
function Ft(e, t) {
  if (!Pt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return _t !== void 0 ? _t.createHTML(t) : t;
}
const ar = (e, t) => {
  const r = e.length - 1, o = [];
  let a, d = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", p = Be;
  for (let g = 0; g < r; g++) {
    const x = e[g];
    let R, E, w = -1, z = 0;
    for (; z < x.length && (p.lastIndex = z, E = p.exec(x), E !== null); ) z = p.lastIndex, p === Be ? E[1] === "!--" ? p = St : E[1] !== void 0 ? p = Ot : E[2] !== void 0 ? (Gt.test(E[2]) && (a = RegExp("</" + E[2], "g")), p = Ue) : E[3] !== void 0 && (p = Ue) : p === Ue ? E[0] === ">" ? (p = a ?? Be, w = -1) : E[1] === void 0 ? w = -2 : (w = p.lastIndex - E[2].length, R = E[1], p = E[3] === void 0 ? Ue : E[3] === '"' ? Mt : Lt) : p === Mt || p === Lt ? p = Ue : p === St || p === Ot ? p = Be : (p = Ue, a = void 0);
    const I = p === Ue && e[g + 1].startsWith("/>") ? " " : "";
    d += p === Be ? x + tr : w >= 0 ? (o.push(R), x.slice(0, w) + jt + x.slice(w) + De + I) : x + De + (w === -2 ? g : I);
  }
  return [Ft(e, d + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
class Ke {
  constructor({ strings: t, _$litType$: r }, o) {
    let a;
    this.parts = [];
    let d = 0, p = 0;
    const g = t.length - 1, x = this.parts, [R, E] = ar(t, r);
    if (this.el = Ke.createElement(R, o), je.currentNode = this.el.content, r === 2 || r === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (a = je.nextNode()) !== null && x.length < g; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const w of a.getAttributeNames()) if (w.endsWith(jt)) {
          const z = E[p++], I = a.getAttribute(w).split(De), U = /([.?@])?(.*)/.exec(z);
          x.push({ type: 1, index: d, name: U[2], strings: I, ctor: U[1] === "." ? lr : U[1] === "?" ? sr : U[1] === "@" ? nr : ht }), a.removeAttribute(w);
        } else w.startsWith(De) && (x.push({ type: 6, index: d }), a.removeAttribute(w));
        if (Gt.test(a.tagName)) {
          const w = a.textContent.split(De), z = w.length - 1;
          if (z > 0) {
            a.textContent = ut ? ut.emptyScript : "";
            for (let I = 0; I < z; I++) a.append(w[I], Ze()), je.nextNode(), x.push({ type: 2, index: ++d });
            a.append(w[z], Ze());
          }
        }
      } else if (a.nodeType === 8) if (a.data === Yt) x.push({ type: 2, index: d });
      else {
        let w = -1;
        for (; (w = a.data.indexOf(De, w + 1)) !== -1; ) x.push({ type: 7, index: d }), w += De.length - 1;
      }
      d++;
    }
  }
  static createElement(t, r) {
    const o = Ge.createElement("template");
    return o.innerHTML = t, o;
  }
}
function He(e, t, r = e, o) {
  var p, g;
  if (t === Je) return t;
  let a = o !== void 0 ? (p = r._$Co) == null ? void 0 : p[o] : r._$Cl;
  const d = Qe(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== d && ((g = a == null ? void 0 : a._$AO) == null || g.call(a, !1), d === void 0 ? a = void 0 : (a = new d(e), a._$AT(e, r, o)), o !== void 0 ? (r._$Co ?? (r._$Co = []))[o] = a : r._$Cl = a), a !== void 0 && (t = He(e, a._$AS(e, t.values), a, o)), t;
}
class ir {
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
    const { el: { content: r }, parts: o } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? Ge).importNode(r, !0);
    je.currentNode = a;
    let d = je.nextNode(), p = 0, g = 0, x = o[0];
    for (; x !== void 0; ) {
      if (p === x.index) {
        let R;
        x.type === 2 ? R = new et(d, d.nextSibling, this, t) : x.type === 1 ? R = new x.ctor(d, x.name, x.strings, this, t) : x.type === 6 && (R = new pr(d, this, t)), this._$AV.push(R), x = o[++g];
      }
      p !== (x == null ? void 0 : x.index) && (d = je.nextNode(), p++);
    }
    return je.currentNode = Ge, a;
  }
  p(t) {
    let r = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, r), r += o.strings.length - 2) : o._$AI(t[r])), r++;
  }
}
class et {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, o, a) {
    this.type = 2, this._$AH = W, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = o, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    t = He(this, t, r), Qe(t) ? t === W || t == null || t === "" ? (this._$AH !== W && this._$AR(), this._$AH = W) : t !== this._$AH && t !== Je && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== W && Qe(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Ge.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var d;
    const { values: r, _$litType$: o } = t, a = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Ke.createElement(Ft(o.h, o.h[0]), this.options)), o);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === a) this._$AH.p(r);
    else {
      const p = new ir(a, this), g = p.u(this.options);
      p.p(r), this.T(g), this._$AH = p;
    }
  }
  _$AC(t) {
    let r = zt.get(t.strings);
    return r === void 0 && zt.set(t.strings, r = new Ke(t)), r;
  }
  k(t) {
    Pt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, a = 0;
    for (const d of t) a === r.length ? r.push(o = new et(this.O(Ze()), this.O(Ze()), this, this.options)) : o = r[a], o._$AI(d), a++;
    a < r.length && (this._$AR(o && o._$AB.nextSibling, a), r.length = a);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, r); t !== this._$AB; ) {
      const a = Et(t).nextSibling;
      Et(t).remove(), t = a;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, o, a, d) {
    this.type = 1, this._$AH = W, this._$AN = void 0, this.element = t, this.name = r, this._$AM = a, this.options = d, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = W;
  }
  _$AI(t, r = this, o, a) {
    const d = this.strings;
    let p = !1;
    if (d === void 0) t = He(this, t, r, 0), p = !Qe(t) || t !== this._$AH && t !== Je, p && (this._$AH = t);
    else {
      const g = t;
      let x, R;
      for (t = d[0], x = 0; x < d.length - 1; x++) R = He(this, g[o + x], r, x), R === Je && (R = this._$AH[x]), p || (p = !Qe(R) || R !== this._$AH[x]), R === W ? t = W : t !== W && (t += (R ?? "") + d[x + 1]), this._$AH[x] = R;
    }
    p && !a && this.j(t);
  }
  j(t) {
    t === W ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === W ? void 0 : t;
  }
}
class sr extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== W);
  }
}
class nr extends ht {
  constructor(t, r, o, a, d) {
    super(t, r, o, a, d), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = He(this, t, r, 0) ?? W) === Je) return;
    const o = this._$AH, a = t === W && o !== W || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, d = t !== W && (o === W || a);
    a && this.element.removeEventListener(this.name, this, o), d && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class pr {
  constructor(t, r, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    He(this, t);
  }
}
const mt = Xe.litHtmlPolyfillSupport;
mt == null || mt(Ke, et), (Xe.litHtmlVersions ?? (Xe.litHtmlVersions = [])).push("3.3.3");
const dr = (e, t, r) => {
  const o = (r == null ? void 0 : r.renderBefore) ?? t;
  let a = o._$litPart$;
  if (a === void 0) {
    const d = (r == null ? void 0 : r.renderBefore) ?? null;
    o._$litPart$ = a = new et(t.insertBefore(Ze(), d), d, void 0, r ?? {});
  }
  return a._$AI(e), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = globalThis;
class qe extends We {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = dr(r, this.renderRoot, this.renderOptions);
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
    return Je;
  }
}
var kt;
qe._$litElement$ = !0, qe.finalized = !0, (kt = Ye.litElementHydrateSupport) == null || kt.call(Ye, { LitElement: qe });
const vt = Ye.litElementPolyfillSupport;
vt == null || vt({ LitElement: qe });
(Ye.litElementVersions ?? (Ye.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (e) => (t, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: Tt }, cr = (e = ur, t, r) => {
  const { kind: o, metadata: a } = r;
  let d = globalThis.litPropertyMetadata.get(a);
  if (d === void 0 && globalThis.litPropertyMetadata.set(a, d = /* @__PURE__ */ new Map()), o === "setter" && ((e = Object.create(e)).wrapped = !0), d.set(r.name, e), o === "accessor") {
    const { name: p } = r;
    return { set(g) {
      const x = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(p, x, e, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(p, void 0, e, g), g;
    } };
  }
  if (o === "setter") {
    const { name: p } = r;
    return function(g) {
      const x = this[p];
      t.call(this, g), this.requestUpdate(p, x, e, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function u(e) {
  return (t, r) => typeof r == "object" ? cr(e, t, r) : ((o, a, d) => {
    const p = a.hasOwnProperty(d);
    return a.constructor.createProperty(d, o), p ? Object.getOwnPropertyDescriptor(a, d) : void 0;
  })(e, t, r);
}
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Dt;
(function(e) {
  (function(t) {
    var r = typeof globalThis == "object" ? globalThis : typeof At == "object" ? At : typeof self == "object" ? self : typeof this == "object" ? this : g(), o = a(e);
    typeof r.Reflect < "u" && (o = a(r.Reflect, o)), t(o, r), typeof r.Reflect > "u" && (r.Reflect = e);
    function a(x, R) {
      return function(E, w) {
        Object.defineProperty(x, E, { configurable: !0, writable: !0, value: w }), R && R(E, w);
      };
    }
    function d() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function p() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function g() {
      return d() || p();
    }
  })(function(t, r) {
    var o = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", d = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", p = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", x = { __proto__: [] } instanceof Array, R = !g && !x, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return Fe(/* @__PURE__ */ Object.create(null));
      } : x ? function() {
        return Fe({ __proto__: null });
      } : function() {
        return Fe({});
      },
      has: R ? function(i, l) {
        return o.call(i, l);
      } : function(i, l) {
        return l in i;
      },
      get: R ? function(i, l) {
        return o.call(i, l) ? i[l] : void 0;
      } : function(i, l) {
        return i[l];
      }
    }, w = Object.getPrototypeOf(Function), z = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : lt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : st(), U = typeof WeakMap == "function" ? WeakMap : nt(), J = a ? Symbol.for("@reflect-metadata:registry") : void 0, H = ot(), X = at(H);
    function B(i, l, s, m) {
      if (f(s)) {
        if (!Ee(i))
          throw new TypeError();
        if (!_e(l))
          throw new TypeError();
        return we(i, l);
      } else {
        if (!Ee(i))
          throw new TypeError();
        if (!M(l))
          throw new TypeError();
        if (!M(m) && !f(m) && !V(m))
          throw new TypeError();
        return V(m) && (m = void 0), s = j(s), Re(i, l, s, m);
      }
    }
    t("decorate", B);
    function Q(i, l) {
      function s(m, C) {
        if (!M(m))
          throw new TypeError();
        if (!f(C) && !ke(C))
          throw new TypeError();
        be(i, l, m, C);
      }
      return s;
    }
    t("metadata", Q);
    function q(i, l, s, m) {
      if (!M(s))
        throw new TypeError();
      return f(m) || (m = j(m)), be(i, l, s, m);
    }
    t("defineMetadata", q);
    function Z(i, l, s) {
      if (!M(l))
        throw new TypeError();
      return f(s) || (s = j(s)), ce(i, l, s);
    }
    t("hasMetadata", Z);
    function de(i, l, s) {
      if (!M(l))
        throw new TypeError();
      return f(s) || (s = j(s)), ie(i, l, s);
    }
    t("hasOwnMetadata", de);
    function ue(i, l, s) {
      if (!M(l))
        throw new TypeError();
      return f(s) || (s = j(s)), he(i, l, s);
    }
    t("getMetadata", ue);
    function te(i, l, s) {
      if (!M(l))
        throw new TypeError();
      return f(s) || (s = j(s)), ye(i, l, s);
    }
    t("getOwnMetadata", te);
    function re(i, l) {
      if (!M(i))
        throw new TypeError();
      return f(l) || (l = j(l)), me(i, l);
    }
    t("getMetadataKeys", re);
    function oe(i, l) {
      if (!M(i))
        throw new TypeError();
      return f(l) || (l = j(l)), le(i, l);
    }
    t("getOwnMetadataKeys", oe);
    function ae(i, l, s) {
      if (!M(l))
        throw new TypeError();
      if (f(s) || (s = j(s)), !M(l))
        throw new TypeError();
      f(s) || (s = j(s));
      var m = Ae(
        l,
        s,
        /*Create*/
        !1
      );
      return f(m) ? !1 : m.OrdinaryDeleteMetadata(i, l, s);
    }
    t("deleteMetadata", ae);
    function we(i, l) {
      for (var s = i.length - 1; s >= 0; --s) {
        var m = i[s], C = m(l);
        if (!f(C) && !V(C)) {
          if (!_e(C))
            throw new TypeError();
          l = C;
        }
      }
      return l;
    }
    function Re(i, l, s, m) {
      for (var C = i.length - 1; C >= 0; --C) {
        var F = i[C], Y = F(l, s, m);
        if (!f(Y) && !V(Y)) {
          if (!M(Y))
            throw new TypeError();
          m = Y;
        }
      }
      return m;
    }
    function ce(i, l, s) {
      var m = ie(i, l, s);
      if (m)
        return !0;
      var C = fe(l);
      return V(C) ? !1 : ce(i, C, s);
    }
    function ie(i, l, s) {
      var m = Ae(
        l,
        s,
        /*Create*/
        !1
      );
      return f(m) ? !1 : ne(m.OrdinaryHasOwnMetadata(i, l, s));
    }
    function he(i, l, s) {
      var m = ie(i, l, s);
      if (m)
        return ye(i, l, s);
      var C = fe(l);
      if (!V(C))
        return he(i, C, s);
    }
    function ye(i, l, s) {
      var m = Ae(
        l,
        s,
        /*Create*/
        !1
      );
      if (!f(m))
        return m.OrdinaryGetOwnMetadata(i, l, s);
    }
    function be(i, l, s, m) {
      var C = Ae(
        s,
        m,
        /*Create*/
        !0
      );
      C.OrdinaryDefineOwnMetadata(i, l, s, m);
    }
    function me(i, l) {
      var s = le(i, l), m = fe(i);
      if (m === null)
        return s;
      var C = me(m, l);
      if (C.length <= 0)
        return s;
      if (s.length <= 0)
        return C;
      for (var F = new I(), Y = [], _ = 0, v = s; _ < v.length; _++) {
        var $ = v[_], T = F.has($);
        T || (F.add($), Y.push($));
      }
      for (var P = 0, S = C; P < S.length; P++) {
        var $ = S[P], T = F.has($);
        T || (F.add($), Y.push($));
      }
      return Y;
    }
    function le(i, l) {
      var s = Ae(
        i,
        l,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, l) : [];
    }
    function se(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
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
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function f(i) {
      return i === void 0;
    }
    function V(i) {
      return i === null;
    }
    function ve(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, l) {
      switch (se(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var s = "string", m = Se(i, d);
      if (m !== void 0) {
        var C = m.call(i, s);
        if (M(C))
          throw new TypeError();
        return C;
      }
      return $e(i);
    }
    function $e(i, l) {
      var s, m;
      {
        var C = i.toString;
        if (Pe(C)) {
          var m = C.call(i);
          if (!M(m))
            return m;
        }
        var s = i.valueOf;
        if (Pe(s)) {
          var m = s.call(i);
          if (!M(m))
            return m;
        }
      }
      throw new TypeError();
    }
    function ne(i) {
      return !!i;
    }
    function Te(i) {
      return "" + i;
    }
    function j(i) {
      var l = xe(i);
      return ve(l) ? l : Te(l);
    }
    function Ee(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Pe(i) {
      return typeof i == "function";
    }
    function _e(i) {
      return typeof i == "function";
    }
    function ke(i) {
      switch (se(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ge(i, l) {
      return i === l || i !== i && l !== l;
    }
    function Se(i, l) {
      var s = i[l];
      if (s != null) {
        if (!Pe(s))
          throw new TypeError();
        return s;
      }
    }
    function Oe(i) {
      var l = Se(i, p);
      if (!Pe(l))
        throw new TypeError();
      var s = l.call(i);
      if (!M(s))
        throw new TypeError();
      return s;
    }
    function Le(i) {
      return i.value;
    }
    function Me(i) {
      var l = i.next();
      return l.done ? !1 : l;
    }
    function ze(i) {
      var l = i.return;
      l && l.call(i);
    }
    function fe(i) {
      var l = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || l !== w)
        return l;
      var s = i.prototype, m = s && Object.getPrototypeOf(s);
      if (m == null || m === Object.prototype)
        return l;
      var C = m.constructor;
      return typeof C != "function" || C === i ? l : C;
    }
    function Ne() {
      var i;
      !f(J) && typeof r.Reflect < "u" && !(J in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (i = it(r.Reflect));
      var l, s, m, C = new U(), F = {
        registerProvider: Y,
        getProvider: v,
        setProvider: T
      };
      return F;
      function Y(P) {
        if (!Object.isExtensible(F))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === P:
            break;
          case f(l):
            l = P;
            break;
          case l === P:
            break;
          case f(s):
            s = P;
            break;
          case s === P:
            break;
          default:
            m === void 0 && (m = new I()), m.add(P);
            break;
        }
      }
      function _(P, S) {
        if (!f(l)) {
          if (l.isProviderFor(P, S))
            return l;
          if (!f(s)) {
            if (s.isProviderFor(P, S))
              return l;
            if (!f(m))
              for (var A = Oe(m); ; ) {
                var k = Me(A);
                if (!k)
                  return;
                var pe = Le(k);
                if (pe.isProviderFor(P, S))
                  return ze(A), pe;
              }
          }
        }
        if (!f(i) && i.isProviderFor(P, S))
          return i;
      }
      function v(P, S) {
        var A = C.get(P), k;
        return f(A) || (k = A.get(S)), f(k) && (k = _(P, S), f(k) || (f(A) && (A = new z(), C.set(P, A)), A.set(S, k))), k;
      }
      function $(P) {
        if (f(P))
          throw new TypeError();
        return l === P || s === P || !f(m) && m.has(P);
      }
      function T(P, S, A) {
        if (!$(A))
          throw new Error("Metadata provider not registered.");
        var k = v(P, S);
        if (k !== A) {
          if (!f(k))
            return !1;
          var pe = C.get(P);
          f(pe) && (pe = new z(), C.set(P, pe)), pe.set(S, A);
        }
        return !0;
      }
    }
    function ot() {
      var i;
      return !f(J) && M(r.Reflect) && Object.isExtensible(r.Reflect) && (i = r.Reflect[J]), f(i) && (i = Ne()), !f(J) && M(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, J, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function at(i) {
      var l = new U(), s = {
        isProviderFor: function($, T) {
          var P = l.get($);
          return f(P) ? !1 : P.has(T);
        },
        OrdinaryDefineOwnMetadata: Y,
        OrdinaryHasOwnMetadata: C,
        OrdinaryGetOwnMetadata: F,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: v
      };
      return H.registerProvider(s), s;
      function m($, T, P) {
        var S = l.get($), A = !1;
        if (f(S)) {
          if (!P)
            return;
          S = new z(), l.set($, S), A = !0;
        }
        var k = S.get(T);
        if (f(k)) {
          if (!P)
            return;
          if (k = new z(), S.set(T, k), !i.setProvider($, T, s))
            throw S.delete(T), A && l.delete($), new Error("Wrong provider for target.");
        }
        return k;
      }
      function C($, T, P) {
        var S = m(
          T,
          P,
          /*Create*/
          !1
        );
        return f(S) ? !1 : ne(S.has($));
      }
      function F($, T, P) {
        var S = m(
          T,
          P,
          /*Create*/
          !1
        );
        if (!f(S))
          return S.get($);
      }
      function Y($, T, P, S) {
        var A = m(
          P,
          S,
          /*Create*/
          !0
        );
        A.set($, T);
      }
      function _($, T) {
        var P = [], S = m(
          $,
          T,
          /*Create*/
          !1
        );
        if (f(S))
          return P;
        for (var A = S.keys(), k = Oe(A), pe = 0; ; ) {
          var gt = Me(k);
          if (!gt)
            return P.length = pe, P;
          var Wt = Le(gt);
          try {
            P[pe] = Wt;
          } catch (Jt) {
            try {
              ze(k);
            } finally {
              throw Jt;
            }
          }
          pe++;
        }
      }
      function v($, T, P) {
        var S = m(
          T,
          P,
          /*Create*/
          !1
        );
        if (f(S) || !S.delete($))
          return !1;
        if (S.size === 0) {
          var A = l.get(T);
          f(A) || (A.delete(P), A.size === 0 && l.delete(A));
        }
        return !0;
      }
    }
    function it(i) {
      var l = i.defineMetadata, s = i.hasOwnMetadata, m = i.getOwnMetadata, C = i.getOwnMetadataKeys, F = i.deleteMetadata, Y = new U(), _ = {
        isProviderFor: function(v, $) {
          var T = Y.get(v);
          return !f(T) && T.has($) ? !0 : C(v, $).length ? (f(T) && (T = new I(), Y.set(v, T)), T.add($), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: l,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: m,
        OrdinaryOwnMetadataKeys: C,
        OrdinaryDeleteMetadata: F
      };
      return _;
    }
    function Ae(i, l, s) {
      var m = H.getProvider(i, l);
      if (!f(m))
        return m;
      if (s) {
        if (H.setProvider(i, l, X))
          return X;
        throw new Error("Illegal state.");
      }
    }
    function lt() {
      var i = {}, l = [], s = (
        /** @class */
        function() {
          function _(v, $, T) {
            this._index = 0, this._keys = v, this._values = $, this._selector = T;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[p] = function() {
            return this;
          }, _.prototype.next = function() {
            var v = this._index;
            if (v >= 0 && v < this._keys.length) {
              var $ = this._selector(this._keys[v], this._values[v]);
              return v + 1 >= this._keys.length ? (this._index = -1, this._keys = l, this._values = l) : this._index++, { value: $, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(v) {
            throw this._index >= 0 && (this._index = -1, this._keys = l, this._values = l), v;
          }, _.prototype.return = function(v) {
            return this._index >= 0 && (this._index = -1, this._keys = l, this._values = l), { value: v, done: !0 };
          }, _;
        }()
      ), m = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(v) {
            return this._find(
              v,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(v) {
            var $ = this._find(
              v,
              /*insert*/
              !1
            );
            return $ >= 0 ? this._values[$] : void 0;
          }, _.prototype.set = function(v, $) {
            var T = this._find(
              v,
              /*insert*/
              !0
            );
            return this._values[T] = $, this;
          }, _.prototype.delete = function(v) {
            var $ = this._find(
              v,
              /*insert*/
              !1
            );
            if ($ >= 0) {
              for (var T = this._keys.length, P = $ + 1; P < T; P++)
                this._keys[P - 1] = this._keys[P], this._values[P - 1] = this._values[P];
              return this._keys.length--, this._values.length--, ge(v, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new s(this._keys, this._values, C);
          }, _.prototype.values = function() {
            return new s(this._keys, this._values, F);
          }, _.prototype.entries = function() {
            return new s(this._keys, this._values, Y);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[p] = function() {
            return this.entries();
          }, _.prototype._find = function(v, $) {
            if (!ge(this._cacheKey, v)) {
              this._cacheIndex = -1;
              for (var T = 0; T < this._keys.length; T++)
                if (ge(this._keys[T], v)) {
                  this._cacheIndex = T;
                  break;
                }
            }
            return this._cacheIndex < 0 && $ && (this._cacheIndex = this._keys.length, this._keys.push(v), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return m;
      function C(_, v) {
        return _;
      }
      function F(_, v) {
        return v;
      }
      function Y(_, v) {
        return [_, v];
      }
    }
    function st() {
      var i = (
        /** @class */
        function() {
          function l() {
            this._map = new z();
          }
          return Object.defineProperty(l.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), l.prototype.has = function(s) {
            return this._map.has(s);
          }, l.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, l.prototype.delete = function(s) {
            return this._map.delete(s);
          }, l.prototype.clear = function() {
            this._map.clear();
          }, l.prototype.keys = function() {
            return this._map.keys();
          }, l.prototype.values = function() {
            return this._map.keys();
          }, l.prototype.entries = function() {
            return this._map.entries();
          }, l.prototype["@@iterator"] = function() {
            return this.keys();
          }, l.prototype[p] = function() {
            return this.keys();
          }, l;
        }()
      );
      return i;
    }
    function nt() {
      var i = 16, l = E.create(), s = m();
      return (
        /** @class */
        function() {
          function v() {
            this._key = m();
          }
          return v.prototype.has = function($) {
            var T = C(
              $,
              /*create*/
              !1
            );
            return T !== void 0 ? E.has(T, this._key) : !1;
          }, v.prototype.get = function($) {
            var T = C(
              $,
              /*create*/
              !1
            );
            return T !== void 0 ? E.get(T, this._key) : void 0;
          }, v.prototype.set = function($, T) {
            var P = C(
              $,
              /*create*/
              !0
            );
            return P[this._key] = T, this;
          }, v.prototype.delete = function($) {
            var T = C(
              $,
              /*create*/
              !1
            );
            return T !== void 0 ? delete T[this._key] : !1;
          }, v.prototype.clear = function() {
            this._key = m();
          }, v;
        }()
      );
      function m() {
        var v;
        do
          v = "@@WeakMap@@" + _();
        while (E.has(l, v));
        return l[v] = !0, v;
      }
      function C(v, $) {
        if (!o.call(v, s)) {
          if (!$)
            return;
          Object.defineProperty(v, s, { value: E.create() });
        }
        return v[s];
      }
      function F(v, $) {
        for (var T = 0; T < $; ++T)
          v[T] = Math.random() * 255 | 0;
        return v;
      }
      function Y(v) {
        if (typeof Uint8Array == "function") {
          var $ = new Uint8Array(v);
          return typeof crypto < "u" ? crypto.getRandomValues($) : typeof msCrypto < "u" ? msCrypto.getRandomValues($) : F($, v), $;
        }
        return F(new Array(v), v);
      }
      function _() {
        var v = Y(i);
        v[6] = v[6] & 79 | 64, v[8] = v[8] & 191 | 128;
        for (var $ = "", T = 0; T < i; ++T) {
          var P = v[T];
          (T === 4 || T === 6 || T === 8) && ($ += "-"), P < 16 && ($ += "0"), $ += P.toString(16).toLowerCase();
        }
        return $;
      }
    }
    function Fe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Dt || (Dt = {}));
function hr(e) {
  return typeof e.name == "string" && typeof e.version == "string" && typeof e.title == "string" && typeof e.elementSelector == "string" && typeof e.group == "string" && typeof e.iconName == "string";
}
function yr(e) {
  return function(t) {
    if (hr(e)) {
      const r = {
        version: e.version,
        name: e.name,
        title: e.title,
        selector: e.elementSelector,
        category: e.group,
        icon: e.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, t.prototype), globalThis.customElements) {
        const o = `${e.elementSelector}-${e.version}`;
        if (!customElements.get(o))
          try {
            customElements.define(o, t);
          } catch {
            try {
              customElements.define(o, class extends t {
              });
            } catch (d) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${o}:`, d);
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
function rt(e) {
  return yr(e);
}
function br(e) {
  var r;
  if (((r = e == null ? void 0 : e.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function mr(e) {
  return function(t, r) {
    try {
      br(e);
      const o = Reflect.getMetadata("ZeroAttribute", t) || [];
      let a = !0;
      if (typeof r == "string") {
        try {
          a = typeof t[r] != "function";
        } catch {
          a = !0;
        }
        a && (e.fieldMappings = e.fieldMappings ?? r);
      }
      o.push(e), Reflect.defineMetadata("ZeroAttribute", o, t);
    } catch (o) {
      console.log(o);
    }
  };
}
function h(e) {
  return mr(e);
}
var y;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown", e.LAYOUT_PICKER = "layout-picker", e.RESPONSIVE_OVERRIDE = "responsive-override", e.IMAGE_PICKER = "image-picker";
})(y || (y = {}));
var c;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(c || (c = {}));
var vr = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, N = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? xr(t, r) : t, d = e.length - 1, p; d >= 0; d--)
    (p = e[d]) && (a = (o ? p(t, r, a) : p(a)) || a);
  return o && a && vr(t, r, a), a;
};
const ct = class ct extends qe {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return ee``;
    const t = this.overridePrefix, r = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, o = {
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
    let a = "";
    return Object.entries(r).forEach(([d, p]) => {
      const g = this.responsiveProps[d];
      if (!g) return;
      let x = "";
      Object.entries(g).forEach(([R, E]) => {
        const w = o[R];
        w && (x += `--${t}-${w}-override: ${E};
`);
      }), x && (a += `${p} {
  :host {
    ${x}  }
}
`);
    }), a ? ee`<style>${a}</style>` : ee``;
  }
  // --- Visual Logic ---
  get overridePrefix() {
    return "zero-panel";
  }
  computeBaseStyles() {
    const t = this.overridePrefix;
    return [
      `--zero-width: var(--${t}-width-override, ${this.width})`,
      `--zero-height: var(--${t}-height-override, ${this.height})`,
      `--zero-margin: var(--${t}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${t}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${t}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? "auto" : "none"}`,
      `display: ${this.visible ? "block" : "none"}`
    ].join(";");
  }
  computeInternalStyles() {
    const t = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${t}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${t}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${t}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${t}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${t}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${t}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${t}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${t}-direction-override, ${this.direction})`
    ].join(";");
  }
  computeColumnBasis() {
    const t = this.overridePrefix, r = `var(--${t}-gap-override, ${this.gap || "0px"})`, o = `var(--${t}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${o}) - ((${r} * (${o} - 1)) / ${o}))`;
  }
  get isStudio() {
    if (typeof window > "u") return !1;
    const t = window.location.search || "";
    if (t.includes("mode=preview") || t.includes("mode=live"))
      return !1;
    try {
      if (window.parent && window.parent.zeroThemeManager && !t.includes("mode=preview"))
        return !0;
    } catch {
    }
    return !!(window.zeroThemeManager && !t.includes("mode=preview"));
  }
  // --- Interaction (Studio) ---
  handleMouseMove(t) {
    if (!this.isStudio) return;
    const r = t.currentTarget.getBoundingClientRect(), o = (t.clientX - r.left) / r.width, a = (t.clientY - r.top) / r.height;
    this.direction === "row" ? o < 0.3 ? this.activeEdge = "left" : o > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : a < 0.3 ? this.activeEdge = "top" : a > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? ee`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : ee``;
  }
  renderHeader() {
    return ee``;
  }
};
ct.slots = [], ct.styles = Ut`
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
let L = ct;
N([
  u({ type: Object, attribute: "responsive-props" })
], L.prototype, "responsiveProps", 2);
N([
  u({ type: String })
], L.prototype, "activeEdge", 2);
N([
  u({ type: Boolean, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], L.prototype, "visible", 2);
N([
  u({ type: Number, reflect: !0, attribute: "z-index" }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], L.prototype, "zIndex", 2);
N([
  u({ type: Number, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], L.prototype, "opacity", 2);
N([
  u({ type: String, attribute: "custom-class" }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], L.prototype, "customClass", 2);
N([
  u({ type: String, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], L.prototype, "width", 2);
N([
  u({ type: String, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], L.prototype, "height", 2);
N([
  u({ type: String, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], L.prototype, "margin", 2);
N([
  u({ type: String, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], L.prototype, "padding", 2);
N([
  h({
    attributeType: c.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], L.prototype, "onClick", 1);
N([
  u({ type: String, reflect: !0 })
], L.prototype, "direction", 2);
N([
  u({ type: String, reflect: !0 })
], L.prototype, "justify", 2);
N([
  u({ type: String, reflect: !0 })
], L.prototype, "align", 2);
N([
  u({ type: String, reflect: !0 })
], L.prototype, "gap", 2);
N([
  u({ type: Number, reflect: !0, attribute: "items-per-row" })
], L.prototype, "itemsPerRow", 2);
N([
  u({ type: String, attribute: "background-color", reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], L.prototype, "backgroundColor", 2);
N([
  u({ type: String, attribute: "border-radius", reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], L.prototype, "borderRadius", 2);
N([
  u({ type: String, reflect: !0, attribute: "elevation" }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
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
], L.prototype, "elevation", 2);
N([
  h({
    attributeType: c.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], L.prototype, "show", 1);
N([
  h({
    attributeType: c.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], L.prototype, "hide", 1);
var $r = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, b = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? Tr(t, r) : t, d = e.length - 1, p; d >= 0; d--)
    (p = e[d]) && (a = (o ? p(t, r, a) : p(a)) || a);
  return o && a && $r(t, r, a), a;
};
const It = {
  kind: "section",
  slots: [
    { id: "default", label: "Section Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='padding:48px 24px;border:none;border-radius:12px;background:rgba(255,255,255,0.6);min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;margin:20px 0;'>",
    "<span style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:800;text-transform:uppercase;letter-spacing:0.05em;'>{{display:label}}</span>",
    "<div style='width:100%;display:flex;flex-direction:column;gap:8px;'>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Section", "Content"],
  emptyText: "Drag and Drop Elements here"
};
let Ce = class extends L {
  constructor() {
    super(...arguments), this.backgroundImage = "", this.backgroundVideo = "", this.parallax = !1, this.borderWidth = "0px", this.borderColor = "transparent";
  }
  get overridePrefix() {
    return "zero-section";
  }
  static getStudioTemplate(e) {
    var U;
    if (!e) return It;
    n(e.studio.display.label || "Section Block");
    const t = n(e.props.justify || "center"), r = n(e.props.align || "center"), o = n(e.props.gap || "12px"), a = n(e.props.padding || "48px 24px"), d = n(e.props.backgroundColor || "transparent"), p = n(e.props.borderColor || "transparent"), g = n(e.props.borderWidth || "0px"), x = n(e.props.borderRadius || "0px"), R = n(e.props.backgroundImage ? `url(${e.props.backgroundImage})` : "none"), E = e.props.responsiveProps || ((U = e.studio.props) == null ? void 0 : U.responsiveProps) || {};
    let w = "";
    const z = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, I = {
      padding: "padding",
      gap: "gap",
      justify: "justify",
      align: "align",
      borderWidth: "border-width",
      borderColor: "border-color",
      backgroundImage: "background-image"
    };
    return Object.entries(z).forEach(([J, H]) => {
      const X = E[J];
      if (!X) return;
      let B = "";
      Object.entries(X).forEach(([Q, q]) => {
        const Z = I[Q];
        Z && (Q === "backgroundImage" && q ? B += `--zero-section-${Z}-override: url(${q});
` : B += `--zero-section-${Z}-override: ${q};
`);
      }), B && (w += `${H} { .studio-section-container { ${B} } }
`);
    }), {
      ...It,
      templateHtml: [
        `<div class="studio-section-container" style="
          --zero-p-justify: var(--zero-section-justify-override, ${t});
          --zero-p-align: var(--zero-section-align-override, ${r});
          --zero-p-gap: var(--zero-section-gap-override, ${o});
          --zero-p-padding: var(--zero-section-padding-override, ${a});
          --zero-p-bg: ${d};
          --zero-section-border-c: var(--zero-section-border-color-override, ${p});
          --zero-section-border-w: var(--zero-section-border-width-override, ${g});
          --zero-section-bg-url: var(--zero-section-background-image-override, ${R});
          --zero-p-border-radius: ${x};

          display: flex;
          flex-direction: column;
          justify-content: var(--zero-p-justify);
          align-items: var(--zero-p-align);
          gap: var(--zero-p-gap);
          padding: var(--zero-p-padding);
          background-color: var(--zero-p-bg);
          background-image: var(--zero-section-bg-url);
          background-size: cover;
          background-position: center;
          border: var(--zero-section-border-w) solid var(--zero-section-border-c);
          border-radius: var(--zero-p-border-radius);
          box-sizing: border-box;
          min-height: 160px;
          width: 100%;
          position: relative;
        ">`,
        `<style>
          .studio-section-container zero-studio-slot[name='default'] { width: 100%; display: flex; flex-direction: column; gap: 8px; }
          ${w}
        </style>`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    let t = super.computeInternalStyles();
    const r = `var(--${e}-background-image-override, ${this.backgroundImage ? `url(${this.backgroundImage})` : "none"})`;
    t += `; --zero-section-bg-url: ${r}`;
    const o = `var(--${e}-border-width-override, ${this.borderWidth})`, a = `var(--${e}-border-color-override, ${this.borderColor})`;
    return t += `; --zero-section-border-w: ${o}; --zero-section-border-c: ${a}`, t;
  }
  render() {
    return ee`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="section-inner">
            ${this.backgroundVideo ? ee`
              <video class="background-video" autoplay muted loop playsinline>
                <source src=${this.backgroundVideo} type="video/mp4">
              </video>
            ` : ""}
            <div class="content-layer">
              <slot name="default"></slot>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
Ce.slots = [
  { id: "default", label: "Section Content", dropzone: !0, anchor: "default", accepts: ["zero-column"] }
];
Ce.styles = [
  L.styles,
  Ut`
      .section-inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: var(--zero-section-bg-url, none);
        border: var(--zero-section-border-w, 0px) solid var(--zero-section-border-c, transparent);
      }
      
      .background-video {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        object-fit: cover;
        z-index: 0;
      }

      .content-layer {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: var(--zero-p-direction, row);
        justify-content: var(--zero-p-justify, flex-start);
        align-items: var(--zero-p-align, stretch);
        gap: var(--zero-p-gap, 16px);
      }

      :host([parallax]) .section-inner {
        background-attachment: fixed;
      }
    `
];
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Background Image",
    fieldMappings: "backgroundImage",
    categoryLabel: "Appearance"
  })
], Ce.prototype, "backgroundImage", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Background Video (URL)",
    fieldMappings: "backgroundVideo",
    categoryLabel: "Appearance"
  })
], Ce.prototype, "backgroundVideo", 2);
b([
  u({ type: Boolean, reflect: !0 }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.CHECKBOX,
    displayLabel: "Enable Parallax",
    fieldMappings: "parallax",
    categoryLabel: "Appearance"
  })
], Ce.prototype, "parallax", 2);
b([
  u({ type: String, attribute: "border-width" }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Width",
    fieldMappings: "borderWidth",
    categoryLabel: "Appearance"
  })
], Ce.prototype, "borderWidth", 2);
b([
  u({ type: String, attribute: "border-color" }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], Ce.prototype, "borderColor", 2);
Ce = b([
  rt({
    name: "zero-section",
    version: "1.0.0",
    title: "Section Block",
    elementSelector: "zero-section",
    group: "Layout",
    iconName: "section-icon.png"
  }),
  tt("zero-section")
], Ce);
let K = class extends L {
  constructor() {
    super(...arguments), this.activeColIndex = "section", this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Padding = "16px", this.col1Gap = "16px", this.col1Flex = "1", this.colsDesktop = 1, this.colsTablet = 1, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-1col";
  }
  static getStudioTemplate(e) {
    var U, J, H, X, B, Q, q, Z, de, ue, te, re, oe, ae;
    const t = n(((U = e == null ? void 0 : e.props) == null ? void 0 : U.width) || "100%"), r = n(((J = e == null ? void 0 : e.props) == null ? void 0 : J.height) || "auto"), o = n(((H = e == null ? void 0 : e.props) == null ? void 0 : H.margin) || "0px"), a = n(((X = e == null ? void 0 : e.props) == null ? void 0 : X.padding) || "0px"), d = n(((B = e == null ? void 0 : e.props) == null ? void 0 : B.backgroundColor) || "transparent"), p = n(((Q = e == null ? void 0 : e.props) == null ? void 0 : Q.borderRadius) || "0px"), g = n(((q = e == null ? void 0 : e.props) == null ? void 0 : q.elevation) || "none");
    n(((Z = e == null ? void 0 : e.props) == null ? void 0 : Z.gap) || "16px");
    const x = n(((de = e == null ? void 0 : e.props) == null ? void 0 : de.col1Direction) || "column"), R = n(((ue = e == null ? void 0 : e.props) == null ? void 0 : ue.col1Align) || "stretch"), E = n(((te = e == null ? void 0 : e.props) == null ? void 0 : te.col1Justify) || "flex-start"), w = n(((re = e == null ? void 0 : e.props) == null ? void 0 : re.col1Padding) || "16px"), z = n(((oe = e == null ? void 0 : e.props) == null ? void 0 : oe.col1Gap) || "16px"), I = n(((ae = e == null ? void 0 : e.props) == null ? void 0 : ae.col1Flex) || "1");
    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: ${t};
            height: ${r};
            margin: ${o};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${a};
            background: ${d};
            border-radius: ${p};
            box-shadow: ${g};
            box-sizing: border-box;
          }
        </style>
        <div class="studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"}">
          <div class="studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"}">
            <div style="display:flex; flex-direction: ${x}; align-items: ${R}; justify-content: ${E}; padding: ${w}; gap: ${z}; flex: ${I}; width: 100%; height: 100%; box-sizing: border-box;">
              <zero-studio-slot name="col1"></zero-studio-slot>
            </div>
          </div>
        </div>
      `
    };
  }
  render() {
    return ee`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
            <slot name="col1"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
K.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] }
];
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" }
    ]
  })
], K.prototype, "activeColIndex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], K.prototype, "col1Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], K.prototype, "col1Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
], K.prototype, "col1Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], K.prototype, "col1Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], K.prototype, "col1Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], K.prototype, "col1Flex", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], K.prototype, "colsDesktop", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], K.prototype, "colsTablet", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], K.prototype, "colsMobile", 2);
K = b([
  rt({
    name: "zero-section-1col",
    version: "1.0.0",
    title: "1 Column Section",
    elementSelector: "zero-section-1col",
    group: "Layout",
    iconName: "section-1col.png"
  }),
  tt("zero-section-1col")
], K);
let G = class extends L {
  constructor() {
    super(...arguments), this.activeColIndex = "section", this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Padding = "16px", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Padding = "16px", this.col2Gap = "16px", this.col2Flex = "1", this.colsDesktop = 2, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-2col";
  }
  static getStudioTemplate(e) {
    var te, re, oe, ae, we, Re, ce, ie, he, ye, be, me, le, se, f, V, ve, M, xe, $e, ne, Te, j;
    const t = n(((te = e == null ? void 0 : e.props) == null ? void 0 : te.width) || "100%"), r = n(((re = e == null ? void 0 : e.props) == null ? void 0 : re.height) || "auto"), o = n(((oe = e == null ? void 0 : e.props) == null ? void 0 : oe.margin) || "0px"), a = n(((ae = e == null ? void 0 : e.props) == null ? void 0 : ae.padding) || "0px"), d = n(((we = e == null ? void 0 : e.props) == null ? void 0 : we.backgroundColor) || "transparent"), p = n(((Re = e == null ? void 0 : e.props) == null ? void 0 : Re.borderRadius) || "0px"), g = n(((ce = e == null ? void 0 : e.props) == null ? void 0 : ce.elevation) || "none"), x = n(((ie = e == null ? void 0 : e.props) == null ? void 0 : ie.gap) || "16px"), R = ((he = e == null ? void 0 : e.props) == null ? void 0 : he.colsDesktop) ?? 2, E = ((ye = e == null ? void 0 : e.props) == null ? void 0 : ye.colsTablet) ?? 2, w = ((be = e == null ? void 0 : e.props) == null ? void 0 : be.colsMobile) ?? 1, z = n(((me = e == null ? void 0 : e.props) == null ? void 0 : me.col1Direction) || "column"), I = n(((le = e == null ? void 0 : e.props) == null ? void 0 : le.col1Align) || "stretch"), U = n(((se = e == null ? void 0 : e.props) == null ? void 0 : se.col1Justify) || "flex-start"), J = n(((f = e == null ? void 0 : e.props) == null ? void 0 : f.col1Padding) || "16px"), H = n(((V = e == null ? void 0 : e.props) == null ? void 0 : V.col1Gap) || "16px"), X = n(((ve = e == null ? void 0 : e.props) == null ? void 0 : ve.col1Flex) || "1"), B = n(((M = e == null ? void 0 : e.props) == null ? void 0 : M.col2Direction) || "column"), Q = n(((xe = e == null ? void 0 : e.props) == null ? void 0 : xe.col2Align) || "stretch"), q = n((($e = e == null ? void 0 : e.props) == null ? void 0 : $e.col2Justify) || "flex-start"), Z = n(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.col2Padding) || "16px"), de = n(((Te = e == null ? void 0 : e.props) == null ? void 0 : Te.col2Gap) || "16px"), ue = n(((j = e == null ? void 0 : e.props) == null ? void 0 : j.col2Flex) || "1");
    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: ${t};
            height: ${r};
            margin: ${o};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${a};
            background: ${d};
            border-radius: ${p};
            box-shadow: ${g};
            box-sizing: border-box;
          }
          .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
            display: grid;
            gap: ${x};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(${R}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
              grid-template-columns: repeat(${E}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
              grid-template-columns: repeat(${w}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"}">
          <div class="studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"}">
            <div class="studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"}">
              <div style="display:flex; flex-direction: ${z}; align-items: ${I}; justify-content: ${U}; padding: ${J}; gap: ${H}; flex: ${X}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${B}; align-items: ${Q}; justify-content: ${q}; padding: ${Z}; gap: ${de}; flex: ${ue}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
            </div>
          </div>
        </div>
      `
    };
  }
  render() {
    const e = [
      `--zero-section-cols-desktop: ${this.colsDesktop || 2}`,
      `--zero-section-cols-tablet: ${this.colsTablet || 2}`,
      `--zero-section-cols-mobile: ${this.colsMobile || 1}`
    ].join(";");
    return ee`
      ${this.renderResponsiveStyles()}
      <style>
        .columns-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          grid-template-columns: repeat(var(--zero-section-cols-desktop, 2), minmax(0, 1fr));
        }
        @media (max-width: 1023px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-tablet, 2), minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-mobile, 1), minmax(0, 1fr));
          }
        }
      </style>
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="columns-grid" style=${e}>
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; padding: ${this.col2Padding}; gap: ${this.col2Gap}; flex: ${this.col2Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col2"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
G.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] }
];
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" },
      { label: "Column 2", value: "col2" }
    ]
  })
], G.prototype, "activeColIndex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], G.prototype, "col1Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], G.prototype, "col1Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
], G.prototype, "col1Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], G.prototype, "col1Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], G.prototype, "col1Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], G.prototype, "col1Flex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], G.prototype, "col2Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], G.prototype, "col2Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
], G.prototype, "col2Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
], G.prototype, "col2Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], G.prototype, "col2Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], G.prototype, "col2Flex", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], G.prototype, "colsDesktop", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], G.prototype, "colsTablet", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], G.prototype, "colsMobile", 2);
G = b([
  rt({
    name: "zero-section-2col",
    version: "1.0.0",
    title: "2 Column Section",
    elementSelector: "zero-section-2col",
    group: "Layout",
    iconName: "section-2col.png"
  }),
  tt("zero-section-2col")
], G);
let D = class extends L {
  constructor() {
    super(...arguments), this.activeColIndex = "section", this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Padding = "16px", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Padding = "16px", this.col2Gap = "16px", this.col2Flex = "1", this.col3Direction = "column", this.col3Align = "stretch", this.col3Justify = "flex-start", this.col3Padding = "16px", this.col3Gap = "16px", this.col3Flex = "1", this.colsDesktop = 3, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-3col";
  }
  static getStudioTemplate(e) {
    var ce, ie, he, ye, be, me, le, se, f, V, ve, M, xe, $e, ne, Te, j, Ee, Pe, _e, ke, ge, Se, Oe, Le, Me, ze, fe, Ne;
    const t = n(((ce = e == null ? void 0 : e.props) == null ? void 0 : ce.width) || "100%"), r = n(((ie = e == null ? void 0 : e.props) == null ? void 0 : ie.height) || "auto"), o = n(((he = e == null ? void 0 : e.props) == null ? void 0 : he.margin) || "0px"), a = n(((ye = e == null ? void 0 : e.props) == null ? void 0 : ye.padding) || "0px"), d = n(((be = e == null ? void 0 : e.props) == null ? void 0 : be.backgroundColor) || "transparent"), p = n(((me = e == null ? void 0 : e.props) == null ? void 0 : me.borderRadius) || "0px"), g = n(((le = e == null ? void 0 : e.props) == null ? void 0 : le.elevation) || "none"), x = n(((se = e == null ? void 0 : e.props) == null ? void 0 : se.gap) || "16px"), R = ((f = e == null ? void 0 : e.props) == null ? void 0 : f.colsDesktop) ?? 3, E = ((V = e == null ? void 0 : e.props) == null ? void 0 : V.colsTablet) ?? 2, w = ((ve = e == null ? void 0 : e.props) == null ? void 0 : ve.colsMobile) ?? 1, z = n(((M = e == null ? void 0 : e.props) == null ? void 0 : M.col1Direction) || "column"), I = n(((xe = e == null ? void 0 : e.props) == null ? void 0 : xe.col1Align) || "stretch"), U = n((($e = e == null ? void 0 : e.props) == null ? void 0 : $e.col1Justify) || "flex-start"), J = n(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.col1Padding) || "16px"), H = n(((Te = e == null ? void 0 : e.props) == null ? void 0 : Te.col1Gap) || "16px"), X = n(((j = e == null ? void 0 : e.props) == null ? void 0 : j.col1Flex) || "1"), B = n(((Ee = e == null ? void 0 : e.props) == null ? void 0 : Ee.col2Direction) || "column"), Q = n(((Pe = e == null ? void 0 : e.props) == null ? void 0 : Pe.col2Align) || "stretch"), q = n(((_e = e == null ? void 0 : e.props) == null ? void 0 : _e.col2Justify) || "flex-start"), Z = n(((ke = e == null ? void 0 : e.props) == null ? void 0 : ke.col2Padding) || "16px"), de = n(((ge = e == null ? void 0 : e.props) == null ? void 0 : ge.col2Gap) || "16px"), ue = n(((Se = e == null ? void 0 : e.props) == null ? void 0 : Se.col2Flex) || "1"), te = n(((Oe = e == null ? void 0 : e.props) == null ? void 0 : Oe.col3Direction) || "column"), re = n(((Le = e == null ? void 0 : e.props) == null ? void 0 : Le.col3Align) || "stretch"), oe = n(((Me = e == null ? void 0 : e.props) == null ? void 0 : Me.col3Justify) || "flex-start"), ae = n(((ze = e == null ? void 0 : e.props) == null ? void 0 : ze.col3Padding) || "16px"), we = n(((fe = e == null ? void 0 : e.props) == null ? void 0 : fe.col3Gap) || "16px"), Re = n(((Ne = e == null ? void 0 : e.props) == null ? void 0 : Ne.col3Flex) || "1");
    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: ${t};
            height: ${r};
            margin: ${o};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${a};
            background: ${d};
            border-radius: ${p};
            box-shadow: ${g};
            box-sizing: border-box;
          }
          .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
            display: grid;
            gap: ${x};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(${R}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
              grid-template-columns: repeat(${E}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
              grid-template-columns: repeat(${w}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"}">
          <div class="studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"}">
            <div class="studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"}">
              <div style="display:flex; flex-direction: ${z}; align-items: ${I}; justify-content: ${U}; padding: ${J}; gap: ${H}; flex: ${X}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${B}; align-items: ${Q}; justify-content: ${q}; padding: ${Z}; gap: ${de}; flex: ${ue}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${te}; align-items: ${re}; justify-content: ${oe}; padding: ${ae}; gap: ${we}; flex: ${Re}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
            </div>
          </div>
        </div>
      `
    };
  }
  render() {
    const e = [
      `--zero-section-cols-desktop: ${this.colsDesktop || 3}`,
      `--zero-section-cols-tablet: ${this.colsTablet || 2}`,
      `--zero-section-cols-mobile: ${this.colsMobile || 1}`
    ].join(";");
    return ee`
      ${this.renderResponsiveStyles()}
      <style>
        .columns-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          grid-template-columns: repeat(var(--zero-section-cols-desktop, 3), minmax(0, 1fr));
        }
        @media (max-width: 1023px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-tablet, 2), minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-mobile, 1), minmax(0, 1fr));
          }
        }
      </style>
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="columns-grid" style=${e}>
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; padding: ${this.col2Padding}; gap: ${this.col2Gap}; flex: ${this.col2Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col2"></slot>
            </div>
            <div class="column col-3" style="display:flex; flex-direction: ${this.col3Direction}; align-items: ${this.col3Align}; justify-content: ${this.col3Justify}; padding: ${this.col3Padding}; gap: ${this.col3Gap}; flex: ${this.col3Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col3"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
D.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] }
];
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" },
      { label: "Column 2", value: "col2" },
      { label: "Column 3", value: "col3" }
    ]
  })
], D.prototype, "activeColIndex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], D.prototype, "col1Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], D.prototype, "col1Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], D.prototype, "col1Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], D.prototype, "col1Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], D.prototype, "col1Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], D.prototype, "col1Flex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], D.prototype, "col2Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], D.prototype, "col2Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], D.prototype, "col2Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
], D.prototype, "col2Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], D.prototype, "col2Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], D.prototype, "col2Flex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], D.prototype, "col3Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], D.prototype, "col3Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], D.prototype, "col3Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 3 Padding",
    fieldMappings: "col3Padding",
    categoryLabel: "Column 3 Layout"
  })
], D.prototype, "col3Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
], D.prototype, "col3Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
], D.prototype, "col3Flex", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], D.prototype, "colsDesktop", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], D.prototype, "colsTablet", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], D.prototype, "colsMobile", 2);
D = b([
  rt({
    name: "zero-section-3col",
    version: "1.0.0",
    title: "3 Column Section",
    elementSelector: "zero-section-3col",
    group: "Layout",
    iconName: "section-3col.png"
  }),
  tt("zero-section-3col")
], D);
let O = class extends L {
  constructor() {
    super(...arguments), this.activeColIndex = "section", this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Padding = "16px", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Padding = "16px", this.col2Gap = "16px", this.col2Flex = "1", this.col3Direction = "column", this.col3Align = "stretch", this.col3Justify = "flex-start", this.col3Padding = "16px", this.col3Gap = "16px", this.col3Flex = "1", this.col4Direction = "column", this.col4Align = "stretch", this.col4Justify = "flex-start", this.col4Padding = "16px", this.col4Gap = "16px", this.col4Flex = "1", this.colsDesktop = 4, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-4col";
  }
  static getStudioTemplate(e) {
    var le, se, f, V, ve, M, xe, $e, ne, Te, j, Ee, Pe, _e, ke, ge, Se, Oe, Le, Me, ze, fe, Ne, ot, at, it, Ae, lt, st, nt, Fe, i, l, s, m;
    const t = n(((le = e == null ? void 0 : e.props) == null ? void 0 : le.width) || "100%"), r = n(((se = e == null ? void 0 : e.props) == null ? void 0 : se.height) || "auto"), o = n(((f = e == null ? void 0 : e.props) == null ? void 0 : f.margin) || "0px"), a = n(((V = e == null ? void 0 : e.props) == null ? void 0 : V.padding) || "0px"), d = n(((ve = e == null ? void 0 : e.props) == null ? void 0 : ve.backgroundColor) || "transparent"), p = n(((M = e == null ? void 0 : e.props) == null ? void 0 : M.borderRadius) || "0px"), g = n(((xe = e == null ? void 0 : e.props) == null ? void 0 : xe.elevation) || "none"), x = n((($e = e == null ? void 0 : e.props) == null ? void 0 : $e.gap) || "16px"), R = ((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.colsDesktop) ?? 4, E = ((Te = e == null ? void 0 : e.props) == null ? void 0 : Te.colsTablet) ?? 2, w = ((j = e == null ? void 0 : e.props) == null ? void 0 : j.colsMobile) ?? 1, z = n(((Ee = e == null ? void 0 : e.props) == null ? void 0 : Ee.col1Direction) || "column"), I = n(((Pe = e == null ? void 0 : e.props) == null ? void 0 : Pe.col1Align) || "stretch"), U = n(((_e = e == null ? void 0 : e.props) == null ? void 0 : _e.col1Justify) || "flex-start"), J = n(((ke = e == null ? void 0 : e.props) == null ? void 0 : ke.col1Padding) || "16px"), H = n(((ge = e == null ? void 0 : e.props) == null ? void 0 : ge.col1Gap) || "16px"), X = n(((Se = e == null ? void 0 : e.props) == null ? void 0 : Se.col1Flex) || "1"), B = n(((Oe = e == null ? void 0 : e.props) == null ? void 0 : Oe.col2Direction) || "column"), Q = n(((Le = e == null ? void 0 : e.props) == null ? void 0 : Le.col2Align) || "stretch"), q = n(((Me = e == null ? void 0 : e.props) == null ? void 0 : Me.col2Justify) || "flex-start"), Z = n(((ze = e == null ? void 0 : e.props) == null ? void 0 : ze.col2Padding) || "16px"), de = n(((fe = e == null ? void 0 : e.props) == null ? void 0 : fe.col2Gap) || "16px"), ue = n(((Ne = e == null ? void 0 : e.props) == null ? void 0 : Ne.col2Flex) || "1"), te = n(((ot = e == null ? void 0 : e.props) == null ? void 0 : ot.col3Direction) || "column"), re = n(((at = e == null ? void 0 : e.props) == null ? void 0 : at.col3Align) || "stretch"), oe = n(((it = e == null ? void 0 : e.props) == null ? void 0 : it.col3Justify) || "flex-start"), ae = n(((Ae = e == null ? void 0 : e.props) == null ? void 0 : Ae.col3Padding) || "16px"), we = n(((lt = e == null ? void 0 : e.props) == null ? void 0 : lt.col3Gap) || "16px"), Re = n(((st = e == null ? void 0 : e.props) == null ? void 0 : st.col3Flex) || "1"), ce = n(((nt = e == null ? void 0 : e.props) == null ? void 0 : nt.col4Direction) || "column"), ie = n(((Fe = e == null ? void 0 : e.props) == null ? void 0 : Fe.col4Align) || "stretch"), he = n(((i = e == null ? void 0 : e.props) == null ? void 0 : i.col4Justify) || "flex-start"), ye = n(((l = e == null ? void 0 : e.props) == null ? void 0 : l.col4Padding) || "16px"), be = n(((s = e == null ? void 0 : e.props) == null ? void 0 : s.col4Gap) || "16px"), me = n(((m = e == null ? void 0 : e.props) == null ? void 0 : m.col4Flex) || "1");
    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col4", label: "Column 4", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: ${t};
            height: ${r};
            margin: ${o};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${a};
            background: ${d};
            border-radius: ${p};
            box-shadow: ${g};
            box-sizing: border-box;
          }
          .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
            display: grid;
            gap: ${x};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(${R}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
              grid-template-columns: repeat(${E}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"} {
              grid-template-columns: repeat(${w}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"}">
          <div class="studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"}">
            <div class="studio-cols-grid-${(e == null ? void 0 : e.nodeId) || "default"}">
              <div style="display:flex; flex-direction: ${z}; align-items: ${I}; justify-content: ${U}; padding: ${J}; gap: ${H}; flex: ${X}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${B}; align-items: ${Q}; justify-content: ${q}; padding: ${Z}; gap: ${de}; flex: ${ue}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${te}; align-items: ${re}; justify-content: ${oe}; padding: ${ae}; gap: ${we}; flex: ${Re}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${ce}; align-items: ${ie}; justify-content: ${he}; padding: ${ye}; gap: ${be}; flex: ${me}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col4"></zero-studio-slot></div>
            </div>
          </div>
        </div>
      `
    };
  }
  render() {
    const e = [
      `--zero-section-cols-desktop: ${this.colsDesktop || 4}`,
      `--zero-section-cols-tablet: ${this.colsTablet || 2}`,
      `--zero-section-cols-mobile: ${this.colsMobile || 1}`
    ].join(";");
    return ee`
      ${this.renderResponsiveStyles()}
      <style>
        .columns-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          grid-template-columns: repeat(var(--zero-section-cols-desktop, 4), minmax(0, 1fr));
        }
        @media (max-width: 1023px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-tablet, 2), minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-mobile, 1), minmax(0, 1fr));
          }
        }
      </style>
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="columns-grid" style=${e}>
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; padding: ${this.col2Padding}; gap: ${this.col2Gap}; flex: ${this.col2Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col2"></slot>
            </div>
            <div class="column col-3" style="display:flex; flex-direction: ${this.col3Direction}; align-items: ${this.col3Align}; justify-content: ${this.col3Justify}; padding: ${this.col3Padding}; gap: ${this.col3Gap}; flex: ${this.col3Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col3"></slot>
            </div>
            <div class="column col-4" style="display:flex; flex-direction: ${this.col4Direction}; align-items: ${this.col4Align}; justify-content: ${this.col4Justify}; padding: ${this.col4Padding}; gap: ${this.col4Gap}; flex: ${this.col4Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col4"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
O.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col4", label: "Column 4", dropzone: !0, anchor: "columns", accepts: [] }
];
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" },
      { label: "Column 2", value: "col2" },
      { label: "Column 3", value: "col3" },
      { label: "Column 4", value: "col4" }
    ]
  })
], O.prototype, "activeColIndex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col1Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col1Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col1Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], O.prototype, "col1Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], O.prototype, "col1Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], O.prototype, "col1Flex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col2Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col2Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col2Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
], O.prototype, "col2Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], O.prototype, "col2Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], O.prototype, "col2Flex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col3Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col3Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col3Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 3 Padding",
    fieldMappings: "col3Padding",
    categoryLabel: "Column 3 Layout"
  })
], O.prototype, "col3Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
], O.prototype, "col3Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
], O.prototype, "col3Flex", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 4 Direction",
    fieldMappings: "col4Direction",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col4Direction", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 4 Align",
    fieldMappings: "col4Align",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col4Align", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.DROPDOWN,
    displayLabel: "Col 4 Justify",
    fieldMappings: "col4Justify",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col4Justify", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 4 Padding",
    fieldMappings: "col4Padding",
    categoryLabel: "Column 4 Layout"
  })
], O.prototype, "col4Padding", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 4 Gap",
    fieldMappings: "col4Gap",
    categoryLabel: "Column 4 Layout"
  })
], O.prototype, "col4Gap", 2);
b([
  u({ type: String }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.TEXT_INPUT,
    displayLabel: "Col 4 Flex Weight",
    fieldMappings: "col4Flex",
    categoryLabel: "Column 4 Layout"
  })
], O.prototype, "col4Flex", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], O.prototype, "colsDesktop", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], O.prototype, "colsTablet", 2);
b([
  u({ type: Number }),
  h({
    attributeType: c.PROPERTY,
    uiComponentType: y.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], O.prototype, "colsMobile", 2);
O = b([
  rt({
    name: "zero-section-4col",
    version: "1.0.0",
    title: "4 Column Section",
    elementSelector: "zero-section-4col",
    group: "Layout",
    iconName: "section-4col.png"
  }),
  tt("zero-section-4col")
], O);
function n(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  Ce as ZeroSection,
  K as ZeroSection1Col,
  G as ZeroSection2Col,
  D as ZeroSection3Col,
  O as ZeroSection4Col,
  It as studioTemplate
};
