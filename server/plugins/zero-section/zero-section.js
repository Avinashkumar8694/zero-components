/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = globalThis, xt = pt.ShadowRoot && (pt.ShadyCSS === void 0 || pt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ft = Symbol(), $t = /* @__PURE__ */ new WeakMap();
let kt = class {
  constructor(t, o, l) {
    if (this._$cssResult$ = !0, l !== ft) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = o;
  }
  get styleSheet() {
    let t = this.o;
    const o = this.t;
    if (xt && t === void 0) {
      const l = o !== void 0 && o.length === 1;
      l && (t = $t.get(o)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), l && $t.set(o, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (e) => new kt(typeof e == "string" ? e : e + "", void 0, ft), Ut = (e, ...t) => {
  const o = e.length === 1 ? e[0] : t.reduce((l, r, c) => l + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + e[c + 1], e[0]);
  return new kt(o, e, ft);
}, Bt = (e, t) => {
  if (xt) e.adoptedStyleSheets = t.map((o) => o instanceof CSSStyleSheet ? o : o.styleSheet);
  else for (const o of t) {
    const l = document.createElement("style"), r = pt.litNonce;
    r !== void 0 && l.setAttribute("nonce", r), l.textContent = o.cssText, e.appendChild(l);
  }
}, Pt = xt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let o = "";
  for (const l of t.cssRules) o += l.cssText;
  return Wt(o);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ht, defineProperty: Xt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, Ie = globalThis, wt = Ie.trustedTypes, eo = wt ? wt.emptyScript : "", ht = Ie.reactiveElementPolyfillSupport, He = (e, t) => e, ut = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? eo : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let o = e;
  switch (t) {
    case Boolean:
      o = e !== null;
      break;
    case Number:
      o = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        o = JSON.parse(e);
      } catch {
        o = null;
      }
  }
  return o;
} }, gt = (e, t) => !Ht(e, t), Rt = { attribute: !0, type: String, converter: ut, reflect: !1, useDefault: !1, hasChanged: gt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ie.litPropertyMetadata ?? (Ie.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Fe = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, o = Rt) {
    if (o.state && (o.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((o = Object.create(o)).wrapped = !0), this.elementProperties.set(t, o), !o.noAccessor) {
      const l = Symbol(), r = this.getPropertyDescriptor(t, l, o);
      r !== void 0 && Xt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, o, l) {
    const { get: r, set: c } = qt(this.prototype, t) ?? { get() {
      return this[o];
    }, set(u) {
      this[o] = u;
    } };
    return { get: r, set(u) {
      const C = r == null ? void 0 : r.call(this);
      c == null || c.call(this, u), this.requestUpdate(t, C, l);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(He("elementProperties"))) return;
    const t = Kt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(He("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(He("properties"))) {
      const o = this.properties, l = [...Zt(o), ...Qt(o)];
      for (const r of l) this.createProperty(r, o[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const o = litPropertyMetadata.get(t);
      if (o !== void 0) for (const [l, r] of o) this.elementProperties.set(l, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [o, l] of this.elementProperties) {
      const r = this._$Eu(o, l);
      r !== void 0 && this._$Eh.set(r, o);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const o = [];
    if (Array.isArray(t)) {
      const l = new Set(t.flat(1 / 0).reverse());
      for (const r of l) o.unshift(Pt(r));
    } else t !== void 0 && o.push(Pt(t));
    return o;
  }
  static _$Eu(t, o) {
    const l = o.attribute;
    return l === !1 ? void 0 : typeof l == "string" ? l : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((o) => this.enableUpdating = o), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((o) => o(this));
  }
  addController(t) {
    var o;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((o = t.hostConnected) == null || o.call(t));
  }
  removeController(t) {
    var o;
    (o = this._$EO) == null || o.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), o = this.constructor.elementProperties;
    for (const l of o.keys()) this.hasOwnProperty(l) && (t.set(l, this[l]), delete this[l]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Bt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((o) => {
      var l;
      return (l = o.hostConnected) == null ? void 0 : l.call(o);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((o) => {
      var l;
      return (l = o.hostDisconnected) == null ? void 0 : l.call(o);
    });
  }
  attributeChangedCallback(t, o, l) {
    this._$AK(t, l);
  }
  _$ET(t, o) {
    var c;
    const l = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, l);
    if (r !== void 0 && l.reflect === !0) {
      const u = (((c = l.converter) == null ? void 0 : c.toAttribute) !== void 0 ? l.converter : ut).toAttribute(o, l.type);
      this._$Em = t, u == null ? this.removeAttribute(r) : this.setAttribute(r, u), this._$Em = null;
    }
  }
  _$AK(t, o) {
    var c, u;
    const l = this.constructor, r = l._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const C = l.getPropertyOptions(r), x = typeof C.converter == "function" ? { fromAttribute: C.converter } : ((c = C.converter) == null ? void 0 : c.fromAttribute) !== void 0 ? C.converter : ut;
      this._$Em = r;
      const R = x.fromAttribute(o, C.type);
      this[r] = R ?? ((u = this._$Ej) == null ? void 0 : u.get(r)) ?? R, this._$Em = null;
    }
  }
  requestUpdate(t, o, l, r = !1, c) {
    var u;
    if (t !== void 0) {
      const C = this.constructor;
      if (r === !1 && (c = this[t]), l ?? (l = C.getPropertyOptions(t)), !((l.hasChanged ?? gt)(c, o) || l.useDefault && l.reflect && c === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(C._$Eu(t, l)))) return;
      this.C(t, o, l);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, o, { useDefault: l, reflect: r, wrapped: c }, u) {
    l && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? o ?? this[t]), c !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || l || (o = void 0), this._$AL.set(t, o)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (o) {
      Promise.reject(o);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var l;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [c, u] of this._$Ep) this[c] = u;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [c, u] of r) {
        const { wrapped: C } = u, x = this[c];
        C !== !0 || this._$AL.has(c) || x === void 0 || this.C(c, void 0, u, x);
      }
    }
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (l = this._$EO) == null || l.forEach((r) => {
        var c;
        return (c = r.hostUpdate) == null ? void 0 : c.call(r);
      }), this.update(o)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var o;
    (o = this._$EO) == null || o.forEach((l) => {
      var r;
      return (r = l.hostUpdated) == null ? void 0 : r.call(l);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((o) => this._$ET(o, this[o]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
Fe.elementStyles = [], Fe.shadowRootOptions = { mode: "open" }, Fe[He("elementProperties")] = /* @__PURE__ */ new Map(), Fe[He("finalized")] = /* @__PURE__ */ new Map(), ht == null || ht({ ReactiveElement: Fe }), (Ie.reactiveElementVersions ?? (Ie.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe = globalThis, Et = (e) => e, dt = Xe.trustedTypes, St = dt ? dt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, jt = "$lit$", De = `lit$${Math.random().toFixed(9).slice(2)}$`, Vt = "?" + De, to = `<${Vt}>`, Ge = document, Ze = () => Ge.createComment(""), Qe = (e) => e === null || typeof e != "object" && typeof e != "function", Tt = Array.isArray, oo = (e) => Tt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", bt = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _t = /-->/g, Ot = />/g, Ue = RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Lt = /'/g, zt = /"/g, Gt = /^(?:script|style|textarea|title)$/i, lo = (e) => (t, ...o) => ({ _$litType$: e, strings: t, values: o }), oe = lo(1), Je = Symbol.for("lit-noChange"), J = Symbol.for("lit-nothing"), Mt = /* @__PURE__ */ new WeakMap(), je = Ge.createTreeWalker(Ge, 129);
function Yt(e, t) {
  if (!Tt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return St !== void 0 ? St.createHTML(t) : t;
}
const ro = (e, t) => {
  const o = e.length - 1, l = [];
  let r, c = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Be;
  for (let C = 0; C < o; C++) {
    const x = e[C];
    let R, E, w = -1, M = 0;
    for (; M < x.length && (u.lastIndex = M, E = u.exec(x), E !== null); ) M = u.lastIndex, u === Be ? E[1] === "!--" ? u = _t : E[1] !== void 0 ? u = Ot : E[2] !== void 0 ? (Gt.test(E[2]) && (r = RegExp("</" + E[2], "g")), u = Ue) : E[3] !== void 0 && (u = Ue) : u === Ue ? E[0] === ">" ? (u = r ?? Be, w = -1) : E[1] === void 0 ? w = -2 : (w = u.lastIndex - E[2].length, R = E[1], u = E[3] === void 0 ? Ue : E[3] === '"' ? zt : Lt) : u === zt || u === Lt ? u = Ue : u === _t || u === Ot ? u = Be : (u = Ue, r = void 0);
    const I = u === Ue && e[C + 1].startsWith("/>") ? " " : "";
    c += u === Be ? x + to : w >= 0 ? (l.push(R), x.slice(0, w) + jt + x.slice(w) + De + I) : x + De + (w === -2 ? C : I);
  }
  return [Yt(e, c + (e[o] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), l];
};
class Ke {
  constructor({ strings: t, _$litType$: o }, l) {
    let r;
    this.parts = [];
    let c = 0, u = 0;
    const C = t.length - 1, x = this.parts, [R, E] = ro(t, o);
    if (this.el = Ke.createElement(R, l), je.currentNode = this.el.content, o === 2 || o === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (r = je.nextNode()) !== null && x.length < C; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const w of r.getAttributeNames()) if (w.endsWith(jt)) {
          const M = E[u++], I = r.getAttribute(w).split(De), U = /([.?@])?(.*)/.exec(M);
          x.push({ type: 1, index: c, name: U[2], strings: I, ctor: U[1] === "." ? io : U[1] === "?" ? so : U[1] === "@" ? no : yt }), r.removeAttribute(w);
        } else w.startsWith(De) && (x.push({ type: 6, index: c }), r.removeAttribute(w));
        if (Gt.test(r.tagName)) {
          const w = r.textContent.split(De), M = w.length - 1;
          if (M > 0) {
            r.textContent = dt ? dt.emptyScript : "";
            for (let I = 0; I < M; I++) r.append(w[I], Ze()), je.nextNode(), x.push({ type: 2, index: ++c });
            r.append(w[M], Ze());
          }
        }
      } else if (r.nodeType === 8) if (r.data === Vt) x.push({ type: 2, index: c });
      else {
        let w = -1;
        for (; (w = r.data.indexOf(De, w + 1)) !== -1; ) x.push({ type: 7, index: c }), w += De.length - 1;
      }
      c++;
    }
  }
  static createElement(t, o) {
    const l = Ge.createElement("template");
    return l.innerHTML = t, l;
  }
}
function We(e, t, o = e, l) {
  var u, C;
  if (t === Je) return t;
  let r = l !== void 0 ? (u = o._$Co) == null ? void 0 : u[l] : o._$Cl;
  const c = Qe(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== c && ((C = r == null ? void 0 : r._$AO) == null || C.call(r, !1), c === void 0 ? r = void 0 : (r = new c(e), r._$AT(e, o, l)), l !== void 0 ? (o._$Co ?? (o._$Co = []))[l] = r : o._$Cl = r), r !== void 0 && (t = We(e, r._$AS(e, t.values), r, l)), t;
}
class ao {
  constructor(t, o) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = o;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: o }, parts: l } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? Ge).importNode(o, !0);
    je.currentNode = r;
    let c = je.nextNode(), u = 0, C = 0, x = l[0];
    for (; x !== void 0; ) {
      if (u === x.index) {
        let R;
        x.type === 2 ? R = new et(c, c.nextSibling, this, t) : x.type === 1 ? R = new x.ctor(c, x.name, x.strings, this, t) : x.type === 6 && (R = new po(c, this, t)), this._$AV.push(R), x = l[++C];
      }
      u !== (x == null ? void 0 : x.index) && (c = je.nextNode(), u++);
    }
    return je.currentNode = Ge, r;
  }
  p(t) {
    let o = 0;
    for (const l of this._$AV) l !== void 0 && (l.strings !== void 0 ? (l._$AI(t, l, o), o += l.strings.length - 2) : l._$AI(t[o])), o++;
  }
}
class et {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, o, l, r) {
    this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = t, this._$AB = o, this._$AM = l, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const o = this._$AM;
    return o !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = o.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, o = this) {
    t = We(this, t, o), Qe(t) ? t === J || t == null || t === "" ? (this._$AH !== J && this._$AR(), this._$AH = J) : t !== this._$AH && t !== Je && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : oo(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== J && Qe(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Ge.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var c;
    const { values: o, _$litType$: l } = t, r = typeof l == "number" ? this._$AC(t) : (l.el === void 0 && (l.el = Ke.createElement(Yt(l.h, l.h[0]), this.options)), l);
    if (((c = this._$AH) == null ? void 0 : c._$AD) === r) this._$AH.p(o);
    else {
      const u = new ao(r, this), C = u.u(this.options);
      u.p(o), this.T(C), this._$AH = u;
    }
  }
  _$AC(t) {
    let o = Mt.get(t.strings);
    return o === void 0 && Mt.set(t.strings, o = new Ke(t)), o;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let l, r = 0;
    for (const c of t) r === o.length ? o.push(l = new et(this.O(Ze()), this.O(Ze()), this, this.options)) : l = o[r], l._$AI(c), r++;
    r < o.length && (this._$AR(l && l._$AB.nextSibling, r), o.length = r);
  }
  _$AR(t = this._$AA.nextSibling, o) {
    var l;
    for ((l = this._$AP) == null ? void 0 : l.call(this, !1, !0, o); t !== this._$AB; ) {
      const r = Et(t).nextSibling;
      Et(t).remove(), t = r;
    }
  }
  setConnected(t) {
    var o;
    this._$AM === void 0 && (this._$Cv = t, (o = this._$AP) == null || o.call(this, t));
  }
}
class yt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, o, l, r, c) {
    this.type = 1, this._$AH = J, this._$AN = void 0, this.element = t, this.name = o, this._$AM = r, this.options = c, l.length > 2 || l[0] !== "" || l[1] !== "" ? (this._$AH = Array(l.length - 1).fill(new String()), this.strings = l) : this._$AH = J;
  }
  _$AI(t, o = this, l, r) {
    const c = this.strings;
    let u = !1;
    if (c === void 0) t = We(this, t, o, 0), u = !Qe(t) || t !== this._$AH && t !== Je, u && (this._$AH = t);
    else {
      const C = t;
      let x, R;
      for (t = c[0], x = 0; x < c.length - 1; x++) R = We(this, C[l + x], o, x), R === Je && (R = this._$AH[x]), u || (u = !Qe(R) || R !== this._$AH[x]), R === J ? t = J : t !== J && (t += (R ?? "") + c[x + 1]), this._$AH[x] = R;
    }
    u && !r && this.j(t);
  }
  j(t) {
    t === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class io extends yt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === J ? void 0 : t;
  }
}
class so extends yt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== J);
  }
}
class no extends yt {
  constructor(t, o, l, r, c) {
    super(t, o, l, r, c), this.type = 5;
  }
  _$AI(t, o = this) {
    if ((t = We(this, t, o, 0) ?? J) === Je) return;
    const l = this._$AH, r = t === J && l !== J || t.capture !== l.capture || t.once !== l.once || t.passive !== l.passive, c = t !== J && (l === J || r);
    r && this.element.removeEventListener(this.name, this, l), c && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var o;
    typeof this._$AH == "function" ? this._$AH.call(((o = this.options) == null ? void 0 : o.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class po {
  constructor(t, o, l) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = l;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    We(this, t);
  }
}
const mt = Xe.litHtmlPolyfillSupport;
mt == null || mt(Ke, et), (Xe.litHtmlVersions ?? (Xe.litHtmlVersions = [])).push("3.3.3");
const uo = (e, t, o) => {
  const l = (o == null ? void 0 : o.renderBefore) ?? t;
  let r = l._$litPart$;
  if (r === void 0) {
    const c = (o == null ? void 0 : o.renderBefore) ?? null;
    l._$litPart$ = r = new et(t.insertBefore(Ze(), c), c, void 0, o ?? {});
  }
  return r._$AI(e), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ve = globalThis;
class qe extends Fe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var o;
    const t = super.createRenderRoot();
    return (o = this.renderOptions).renderBefore ?? (o.renderBefore = t.firstChild), t;
  }
  update(t) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = uo(o, this.renderRoot, this.renderOptions);
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
var Nt;
qe._$litElement$ = !0, qe.finalized = !0, (Nt = Ve.litElementHydrateSupport) == null || Nt.call(Ve, { LitElement: qe });
const vt = Ve.litElementPolyfillSupport;
vt == null || vt({ LitElement: qe });
(Ve.litElementVersions ?? (Ve.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (e) => (t, o) => {
  o !== void 0 ? o.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const co = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: gt }, yo = (e = co, t, o) => {
  const { kind: l, metadata: r } = o;
  let c = globalThis.litPropertyMetadata.get(r);
  if (c === void 0 && globalThis.litPropertyMetadata.set(r, c = /* @__PURE__ */ new Map()), l === "setter" && ((e = Object.create(e)).wrapped = !0), c.set(o.name, e), l === "accessor") {
    const { name: u } = o;
    return { set(C) {
      const x = t.get.call(this);
      t.set.call(this, C), this.requestUpdate(u, x, e, !0, C);
    }, init(C) {
      return C !== void 0 && this.C(u, void 0, e, C), C;
    } };
  }
  if (l === "setter") {
    const { name: u } = o;
    return function(C) {
      const x = this[u];
      t.call(this, C), this.requestUpdate(u, x, e, !0, C);
    };
  }
  throw Error("Unsupported decorator location: " + l);
};
function p(e) {
  return (t, o) => typeof o == "object" ? yo(e, t, o) : ((l, r, c) => {
    const u = r.hasOwnProperty(c);
    return r.constructor.createProperty(c, l), u ? Object.getOwnPropertyDescriptor(r, c) : void 0;
  })(e, t, o);
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
    var o = typeof globalThis == "object" ? globalThis : typeof At == "object" ? At : typeof self == "object" ? self : typeof this == "object" ? this : C(), l = r(e);
    typeof o.Reflect < "u" && (l = r(o.Reflect, l)), t(l, o), typeof o.Reflect > "u" && (o.Reflect = e);
    function r(x, R) {
      return function(E, w) {
        Object.defineProperty(x, E, { configurable: !0, writable: !0, value: w }), R && R(E, w);
      };
    }
    function c() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function u() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function C() {
      return c() || u();
    }
  })(function(t, o) {
    var l = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", c = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", C = typeof Object.create == "function", x = { __proto__: [] } instanceof Array, R = !C && !x, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: C ? function() {
        return Ye(/* @__PURE__ */ Object.create(null));
      } : x ? function() {
        return Ye({ __proto__: null });
      } : function() {
        return Ye({});
      },
      has: R ? function(a, i) {
        return l.call(a, i);
      } : function(a, i) {
        return i in a;
      },
      get: R ? function(a, i) {
        return l.call(a, i) ? a[i] : void 0;
      } : function(a, i) {
        return a[i];
      }
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : it(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : st(), U = typeof WeakMap == "function" ? WeakMap : nt(), Y = r ? Symbol.for("@reflect-metadata:registry") : void 0, W = lt(), Z = rt(W);
    function Q(a, i, s, m) {
      if ($(s)) {
        if (!Ee(a))
          throw new TypeError();
        if (!Se(i))
          throw new TypeError();
        return we(a, i);
      } else {
        if (!Ee(a))
          throw new TypeError();
        if (!z(i))
          throw new TypeError();
        if (!z(m) && !$(m) && !H(m))
          throw new TypeError();
        return H(m) && (m = void 0), s = j(s), Re(a, i, s, m);
      }
    }
    t("decorate", Q);
    function B(a, i) {
      function s(m, P) {
        if (!z(m))
          throw new TypeError();
        if (!$(P) && !Ne(P))
          throw new TypeError();
        me(a, i, m, P);
      }
      return s;
    }
    t("metadata", B);
    function K(a, i, s, m) {
      if (!z(s))
        throw new TypeError();
      return $(m) || (m = j(m)), me(a, i, s, m);
    }
    t("defineMetadata", K);
    function X(a, i, s) {
      if (!z(i))
        throw new TypeError();
      return $(s) || (s = j(s)), ye(a, i, s);
    }
    t("hasMetadata", X);
    function q(a, i, s) {
      if (!z(i))
        throw new TypeError();
      return $(s) || (s = j(s)), se(a, i, s);
    }
    t("hasOwnMetadata", q);
    function ce(a, i, s) {
      if (!z(i))
        throw new TypeError();
      return $(s) || (s = j(s)), he(a, i, s);
    }
    t("getMetadata", ce);
    function le(a, i, s) {
      if (!z(i))
        throw new TypeError();
      return $(s) || (s = j(s)), be(a, i, s);
    }
    t("getOwnMetadata", le);
    function re(a, i) {
      if (!z(a))
        throw new TypeError();
      return $(i) || (i = j(i)), ve(a, i);
    }
    t("getMetadataKeys", re);
    function ae(a, i) {
      if (!z(a))
        throw new TypeError();
      return $(i) || (i = j(i)), ne(a, i);
    }
    t("getOwnMetadataKeys", ae);
    function ie(a, i, s) {
      if (!z(i))
        throw new TypeError();
      if ($(s) || (s = j(s)), !z(i))
        throw new TypeError();
      $(s) || (s = j(s));
      var m = Ae(
        i,
        s,
        /*Create*/
        !1
      );
      return $(m) ? !1 : m.OrdinaryDeleteMetadata(a, i, s);
    }
    t("deleteMetadata", ie);
    function we(a, i) {
      for (var s = a.length - 1; s >= 0; --s) {
        var m = a[s], P = m(i);
        if (!$(P) && !H(P)) {
          if (!Se(P))
            throw new TypeError();
          i = P;
        }
      }
      return i;
    }
    function Re(a, i, s, m) {
      for (var P = a.length - 1; P >= 0; --P) {
        var F = a[P], V = F(i, s, m);
        if (!$(V) && !H(V)) {
          if (!z(V))
            throw new TypeError();
          m = V;
        }
      }
      return m;
    }
    function ye(a, i, s) {
      var m = se(a, i, s);
      if (m)
        return !0;
      var P = Pe(i);
      return H(P) ? !1 : ye(a, P, s);
    }
    function se(a, i, s) {
      var m = Ae(
        i,
        s,
        /*Create*/
        !1
      );
      return $(m) ? !1 : ue(m.OrdinaryHasOwnMetadata(a, i, s));
    }
    function he(a, i, s) {
      var m = se(a, i, s);
      if (m)
        return be(a, i, s);
      var P = Pe(i);
      if (!H(P))
        return he(a, P, s);
    }
    function be(a, i, s) {
      var m = Ae(
        i,
        s,
        /*Create*/
        !1
      );
      if (!$(m))
        return m.OrdinaryGetOwnMetadata(a, i, s);
    }
    function me(a, i, s, m) {
      var P = Ae(
        s,
        m,
        /*Create*/
        !0
      );
      P.OrdinaryDefineOwnMetadata(a, i, s, m);
    }
    function ve(a, i) {
      var s = ne(a, i), m = Pe(a);
      if (m === null)
        return s;
      var P = ve(m, i);
      if (P.length <= 0)
        return s;
      if (s.length <= 0)
        return P;
      for (var F = new I(), V = [], S = 0, v = s; S < v.length; S++) {
        var f = v[S], g = F.has(f);
        g || (F.add(f), V.push(f));
      }
      for (var T = 0, _ = P; T < _.length; T++) {
        var f = _[T], g = F.has(f);
        g || (F.add(f), V.push(f));
      }
      return V;
    }
    function ne(a, i) {
      var s = Ae(
        a,
        i,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(a, i) : [];
    }
    function pe(a) {
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
    function $(a) {
      return a === void 0;
    }
    function H(a) {
      return a === null;
    }
    function xe(a) {
      return typeof a == "symbol";
    }
    function z(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function fe(a, i) {
      switch (pe(a)) {
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
      var s = "string", m = _e(a, c);
      if (m !== void 0) {
        var P = m.call(a, s);
        if (z(P))
          throw new TypeError();
        return P;
      }
      return ge(a);
    }
    function ge(a, i) {
      var s, m;
      {
        var P = a.toString;
        if (Ce(P)) {
          var m = P.call(a);
          if (!z(m))
            return m;
        }
        var s = a.valueOf;
        if (Ce(s)) {
          var m = s.call(a);
          if (!z(m))
            return m;
        }
      }
      throw new TypeError();
    }
    function ue(a) {
      return !!a;
    }
    function Te(a) {
      return "" + a;
    }
    function j(a) {
      var i = fe(a);
      return xe(i) ? i : Te(i);
    }
    function Ee(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function Ce(a) {
      return typeof a == "function";
    }
    function Se(a) {
      return typeof a == "function";
    }
    function Ne(a) {
      switch (pe(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function $e(a, i) {
      return a === i || a !== a && i !== i;
    }
    function _e(a, i) {
      var s = a[i];
      if (s != null) {
        if (!Ce(s))
          throw new TypeError();
        return s;
      }
    }
    function Oe(a) {
      var i = _e(a, u);
      if (!Ce(i))
        throw new TypeError();
      var s = i.call(a);
      if (!z(s))
        throw new TypeError();
      return s;
    }
    function Le(a) {
      return a.value;
    }
    function ze(a) {
      var i = a.next();
      return i.done ? !1 : i;
    }
    function Me(a) {
      var i = a.return;
      i && i.call(a);
    }
    function Pe(a) {
      var i = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === w || i !== w)
        return i;
      var s = a.prototype, m = s && Object.getPrototypeOf(s);
      if (m == null || m === Object.prototype)
        return i;
      var P = m.constructor;
      return typeof P != "function" || P === a ? i : P;
    }
    function ke() {
      var a;
      !$(Y) && typeof o.Reflect < "u" && !(Y in o.Reflect) && typeof o.Reflect.defineMetadata == "function" && (a = at(o.Reflect));
      var i, s, m, P = new U(), F = {
        registerProvider: V,
        getProvider: v,
        setProvider: g
      };
      return F;
      function V(T) {
        if (!Object.isExtensible(F))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === T:
            break;
          case $(i):
            i = T;
            break;
          case i === T:
            break;
          case $(s):
            s = T;
            break;
          case s === T:
            break;
          default:
            m === void 0 && (m = new I()), m.add(T);
            break;
        }
      }
      function S(T, _) {
        if (!$(i)) {
          if (i.isProviderFor(T, _))
            return i;
          if (!$(s)) {
            if (s.isProviderFor(T, _))
              return i;
            if (!$(m))
              for (var A = Oe(m); ; ) {
                var N = ze(A);
                if (!N)
                  return;
                var de = Le(N);
                if (de.isProviderFor(T, _))
                  return Me(A), de;
              }
          }
        }
        if (!$(a) && a.isProviderFor(T, _))
          return a;
      }
      function v(T, _) {
        var A = P.get(T), N;
        return $(A) || (N = A.get(_)), $(N) && (N = S(T, _), $(N) || ($(A) && (A = new M(), P.set(T, A)), A.set(_, N))), N;
      }
      function f(T) {
        if ($(T))
          throw new TypeError();
        return i === T || s === T || !$(m) && m.has(T);
      }
      function g(T, _, A) {
        if (!f(A))
          throw new Error("Metadata provider not registered.");
        var N = v(T, _);
        if (N !== A) {
          if (!$(N))
            return !1;
          var de = P.get(T);
          $(de) && (de = new M(), P.set(T, de)), de.set(_, A);
        }
        return !0;
      }
    }
    function lt() {
      var a;
      return !$(Y) && z(o.Reflect) && Object.isExtensible(o.Reflect) && (a = o.Reflect[Y]), $(a) && (a = ke()), !$(Y) && z(o.Reflect) && Object.isExtensible(o.Reflect) && Object.defineProperty(o.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function rt(a) {
      var i = new U(), s = {
        isProviderFor: function(f, g) {
          var T = i.get(f);
          return $(T) ? !1 : T.has(g);
        },
        OrdinaryDefineOwnMetadata: V,
        OrdinaryHasOwnMetadata: P,
        OrdinaryGetOwnMetadata: F,
        OrdinaryOwnMetadataKeys: S,
        OrdinaryDeleteMetadata: v
      };
      return W.registerProvider(s), s;
      function m(f, g, T) {
        var _ = i.get(f), A = !1;
        if ($(_)) {
          if (!T)
            return;
          _ = new M(), i.set(f, _), A = !0;
        }
        var N = _.get(g);
        if ($(N)) {
          if (!T)
            return;
          if (N = new M(), _.set(g, N), !a.setProvider(f, g, s))
            throw _.delete(g), A && i.delete(f), new Error("Wrong provider for target.");
        }
        return N;
      }
      function P(f, g, T) {
        var _ = m(
          g,
          T,
          /*Create*/
          !1
        );
        return $(_) ? !1 : ue(_.has(f));
      }
      function F(f, g, T) {
        var _ = m(
          g,
          T,
          /*Create*/
          !1
        );
        if (!$(_))
          return _.get(f);
      }
      function V(f, g, T, _) {
        var A = m(
          T,
          _,
          /*Create*/
          !0
        );
        A.set(f, g);
      }
      function S(f, g) {
        var T = [], _ = m(
          f,
          g,
          /*Create*/
          !1
        );
        if ($(_))
          return T;
        for (var A = _.keys(), N = Oe(A), de = 0; ; ) {
          var Ct = ze(N);
          if (!Ct)
            return T.length = de, T;
          var Ft = Le(Ct);
          try {
            T[de] = Ft;
          } catch (Jt) {
            try {
              Me(N);
            } finally {
              throw Jt;
            }
          }
          de++;
        }
      }
      function v(f, g, T) {
        var _ = m(
          g,
          T,
          /*Create*/
          !1
        );
        if ($(_) || !_.delete(f))
          return !1;
        if (_.size === 0) {
          var A = i.get(g);
          $(A) || (A.delete(T), A.size === 0 && i.delete(A));
        }
        return !0;
      }
    }
    function at(a) {
      var i = a.defineMetadata, s = a.hasOwnMetadata, m = a.getOwnMetadata, P = a.getOwnMetadataKeys, F = a.deleteMetadata, V = new U(), S = {
        isProviderFor: function(v, f) {
          var g = V.get(v);
          return !$(g) && g.has(f) ? !0 : P(v, f).length ? ($(g) && (g = new I(), V.set(v, g)), g.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: i,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: m,
        OrdinaryOwnMetadataKeys: P,
        OrdinaryDeleteMetadata: F
      };
      return S;
    }
    function Ae(a, i, s) {
      var m = W.getProvider(a, i);
      if (!$(m))
        return m;
      if (s) {
        if (W.setProvider(a, i, Z))
          return Z;
        throw new Error("Illegal state.");
      }
    }
    function it() {
      var a = {}, i = [], s = (
        /** @class */
        function() {
          function S(v, f, g) {
            this._index = 0, this._keys = v, this._values = f, this._selector = g;
          }
          return S.prototype["@@iterator"] = function() {
            return this;
          }, S.prototype[u] = function() {
            return this;
          }, S.prototype.next = function() {
            var v = this._index;
            if (v >= 0 && v < this._keys.length) {
              var f = this._selector(this._keys[v], this._values[v]);
              return v + 1 >= this._keys.length ? (this._index = -1, this._keys = i, this._values = i) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, S.prototype.throw = function(v) {
            throw this._index >= 0 && (this._index = -1, this._keys = i, this._values = i), v;
          }, S.prototype.return = function(v) {
            return this._index >= 0 && (this._index = -1, this._keys = i, this._values = i), { value: v, done: !0 };
          }, S;
        }()
      ), m = (
        /** @class */
        function() {
          function S() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(S.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), S.prototype.has = function(v) {
            return this._find(
              v,
              /*insert*/
              !1
            ) >= 0;
          }, S.prototype.get = function(v) {
            var f = this._find(
              v,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, S.prototype.set = function(v, f) {
            var g = this._find(
              v,
              /*insert*/
              !0
            );
            return this._values[g] = f, this;
          }, S.prototype.delete = function(v) {
            var f = this._find(
              v,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var g = this._keys.length, T = f + 1; T < g; T++)
                this._keys[T - 1] = this._keys[T], this._values[T - 1] = this._values[T];
              return this._keys.length--, this._values.length--, $e(v, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, S.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, S.prototype.keys = function() {
            return new s(this._keys, this._values, P);
          }, S.prototype.values = function() {
            return new s(this._keys, this._values, F);
          }, S.prototype.entries = function() {
            return new s(this._keys, this._values, V);
          }, S.prototype["@@iterator"] = function() {
            return this.entries();
          }, S.prototype[u] = function() {
            return this.entries();
          }, S.prototype._find = function(v, f) {
            if (!$e(this._cacheKey, v)) {
              this._cacheIndex = -1;
              for (var g = 0; g < this._keys.length; g++)
                if ($e(this._keys[g], v)) {
                  this._cacheIndex = g;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(v), this._values.push(void 0)), this._cacheIndex;
          }, S;
        }()
      );
      return m;
      function P(S, v) {
        return S;
      }
      function F(S, v) {
        return v;
      }
      function V(S, v) {
        return [S, v];
      }
    }
    function st() {
      var a = (
        /** @class */
        function() {
          function i() {
            this._map = new M();
          }
          return Object.defineProperty(i.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.has = function(s) {
            return this._map.has(s);
          }, i.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, i.prototype.delete = function(s) {
            return this._map.delete(s);
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
          }, i.prototype[u] = function() {
            return this.keys();
          }, i;
        }()
      );
      return a;
    }
    function nt() {
      var a = 16, i = E.create(), s = m();
      return (
        /** @class */
        function() {
          function v() {
            this._key = m();
          }
          return v.prototype.has = function(f) {
            var g = P(
              f,
              /*create*/
              !1
            );
            return g !== void 0 ? E.has(g, this._key) : !1;
          }, v.prototype.get = function(f) {
            var g = P(
              f,
              /*create*/
              !1
            );
            return g !== void 0 ? E.get(g, this._key) : void 0;
          }, v.prototype.set = function(f, g) {
            var T = P(
              f,
              /*create*/
              !0
            );
            return T[this._key] = g, this;
          }, v.prototype.delete = function(f) {
            var g = P(
              f,
              /*create*/
              !1
            );
            return g !== void 0 ? delete g[this._key] : !1;
          }, v.prototype.clear = function() {
            this._key = m();
          }, v;
        }()
      );
      function m() {
        var v;
        do
          v = "@@WeakMap@@" + S();
        while (E.has(i, v));
        return i[v] = !0, v;
      }
      function P(v, f) {
        if (!l.call(v, s)) {
          if (!f)
            return;
          Object.defineProperty(v, s, { value: E.create() });
        }
        return v[s];
      }
      function F(v, f) {
        for (var g = 0; g < f; ++g)
          v[g] = Math.random() * 255 | 0;
        return v;
      }
      function V(v) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(v);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : F(f, v), f;
        }
        return F(new Array(v), v);
      }
      function S() {
        var v = V(a);
        v[6] = v[6] & 79 | 64, v[8] = v[8] & 191 | 128;
        for (var f = "", g = 0; g < a; ++g) {
          var T = v[g];
          (g === 4 || g === 6 || g === 8) && (f += "-"), T < 16 && (f += "0"), f += T.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function Ye(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(Dt || (Dt = {}));
function ho(e) {
  return typeof e.name == "string" && typeof e.version == "string" && typeof e.title == "string" && typeof e.elementSelector == "string" && typeof e.group == "string" && typeof e.iconName == "string";
}
function bo(e) {
  return function(t) {
    if (ho(e)) {
      const o = {
        version: e.version,
        name: e.name,
        title: e.title,
        selector: e.elementSelector,
        category: e.group,
        icon: e.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", o, t.prototype), globalThis.customElements) {
        const l = `${e.elementSelector}-${e.version}`;
        if (!customElements.get(l))
          try {
            customElements.define(l, t);
          } catch {
            try {
              customElements.define(l, class extends t {
              });
            } catch (c) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${l}:`, c);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: o
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function ot(e) {
  return bo(e);
}
function mo(e) {
  var o;
  if (((o = e == null ? void 0 : e.categoryLabel) == null ? void 0 : o.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function vo(e) {
  return function(t, o) {
    try {
      mo(e);
      const l = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let r = !0;
      if (typeof o == "string") {
        try {
          r = typeof t[o] != "function";
        } catch {
          r = !0;
        }
        r && (e.fieldMappings = e.fieldMappings ?? o);
      }
      l.push(e), Reflect.defineMetadata("ZeroAttribute", l, t);
    } catch (l) {
      console.log(l);
    }
  };
}
function y(e) {
  return vo(e);
}
var h;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown", e.LAYOUT_PICKER = "layout-picker", e.RESPONSIVE_OVERRIDE = "responsive-override", e.IMAGE_PICKER = "image-picker", e.CHIPS = "chips";
})(h || (h = {}));
var d;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(d || (d = {}));
var xo = Object.defineProperty, fo = Object.getOwnPropertyDescriptor, k = (e, t, o, l) => {
  for (var r = l > 1 ? void 0 : l ? fo(t, o) : t, c = e.length - 1, u; c >= 0; c--)
    (u = e[c]) && (r = (l ? u(t, o, r) : u(r)) || r);
  return l && r && xo(t, o, r), r;
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return oe``;
    const t = this.overridePrefix, o = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, l = {
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
    let r = "";
    return Object.entries(o).forEach(([c, u]) => {
      const C = this.responsiveProps[c];
      if (!C) return;
      let x = "";
      Object.entries(C).forEach(([R, E]) => {
        const w = l[R];
        w && (x += `--${t}-${w}-override: ${E};
`);
      }), x && (r += `${u} {
  :host {
    ${x}  }
}
`);
    }), r ? oe`<style>${r}</style>` : oe``;
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
    const t = this.overridePrefix, o = `var(--${t}-gap-override, ${this.gap || "0px"})`, l = `var(--${t}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${l}) - ((${o} * (${l} - 1)) / ${l}))`;
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
    const o = t.currentTarget.getBoundingClientRect(), l = (t.clientX - o.left) / o.width, r = (t.clientY - o.top) / o.height;
    this.direction === "row" ? l < 0.3 ? this.activeEdge = "left" : l > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : r < 0.3 ? this.activeEdge = "top" : r > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? oe`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : oe``;
  }
  renderHeader() {
    return oe``;
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
k([
  p({ type: Object, attribute: "responsive-props" })
], L.prototype, "responsiveProps", 2);
k([
  p({ type: String })
], L.prototype, "activeEdge", 2);
k([
  p({ type: Boolean, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], L.prototype, "visible", 2);
k([
  p({ type: Number, reflect: !0, attribute: "z-index" }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], L.prototype, "zIndex", 2);
k([
  p({ type: Number, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], L.prototype, "opacity", 2);
k([
  p({ type: String, attribute: "custom-class" }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], L.prototype, "customClass", 2);
k([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], L.prototype, "width", 2);
k([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], L.prototype, "height", 2);
k([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], L.prototype, "margin", 2);
k([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], L.prototype, "padding", 2);
k([
  y({
    attributeType: d.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], L.prototype, "onClick", 1);
k([
  p({ type: String, reflect: !0 })
], L.prototype, "direction", 2);
k([
  p({ type: String, reflect: !0 })
], L.prototype, "justify", 2);
k([
  p({ type: String, reflect: !0 })
], L.prototype, "align", 2);
k([
  p({ type: String, reflect: !0 })
], L.prototype, "gap", 2);
k([
  p({ type: Number, reflect: !0, attribute: "items-per-row" })
], L.prototype, "itemsPerRow", 2);
k([
  p({ type: String, attribute: "background-color", reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], L.prototype, "backgroundColor", 2);
k([
  p({ type: String, attribute: "border-radius", reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], L.prototype, "borderRadius", 2);
k([
  p({ type: String, reflect: !0, attribute: "elevation" }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
k([
  y({
    attributeType: d.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], L.prototype, "show", 1);
k([
  y({
    attributeType: d.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], L.prototype, "hide", 1);
var go = Object.defineProperty, To = Object.getOwnPropertyDescriptor, b = (e, t, o, l) => {
  for (var r = l > 1 ? void 0 : l ? To(t, o) : t, c = e.length - 1, u; c >= 0; c--)
    (u = e[c]) && (r = (l ? u(t, o, r) : u(r)) || r);
  return l && r && go(t, o, r), r;
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
let ee = class extends L {
  constructor() {
    super(...arguments), this.direction = "row", this.align = "stretch", this.justify = "flex-start", this.gap = "16px", this.backgroundImage = "", this.backgroundVideo = "", this.parallax = !1, this.borderWidth = "0px", this.borderColor = "transparent";
  }
  get overridePrefix() {
    return "zero-section";
  }
  static getStudioPresets() {
    return [
      {
        componentName: "zero-section-1col",
        title: "1 Column",
        version: "1.0.0",
        elementSelector: "zero-section-1col-1.0.0",
        jsEntry: "zero-section.ts",
        tags: ["layout", "section", "container", "1column"],
        category: "layout",
        group: "Content Block",
        properties: [
          { name: "col1Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col1Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col1Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col1Gap", type: "string", defaultValue: "16px" },
          { name: "col1Flex", type: "string", defaultValue: "1" },
          { name: "label", type: "string", defaultValue: "", label: "Studio Label" }
        ],
        studioTemplate: {
          kind: "section",
          templateHtml: "<div style='display:flex;width:100%;padding:12px;border-radius:16px;background:rgba(255,255,255,0.9);'><div style='flex:1;'><slot name='col1'></slot></div></div>",
          labelProp: "label",
          titleProp: "label",
          emptyText: "Drag and Drop Elements here",
          badges: [],
          slots: [
            { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] }
          ]
        },
        events: [],
        slots: ["col1"],
        lifecycleHooks: ["onInit", "onDestroy", "onChanges", "afterRender"],
        publishableAsNode: !0,
        allowBoxModel: !0,
        allowCustomClass: !0,
        allowCustomStyle: !0,
        transformOnDrop: {
          componentName: "zero-section",
          children: [
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
          ]
        }
      },
      {
        componentName: "zero-section-2col",
        title: "2 Column",
        version: "1.0.0",
        elementSelector: "zero-section-2col-1.0.0",
        jsEntry: "zero-section.ts",
        tags: ["layout", "section", "container", "2columns"],
        category: "layout",
        group: "Content Block",
        properties: [
          { name: "col1Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col1Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col1Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col1Gap", type: "string", defaultValue: "16px" },
          { name: "col1Flex", type: "string", defaultValue: "1" },
          { name: "col2Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col2Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col2Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col2Gap", type: "string", defaultValue: "16px" },
          { name: "col2Flex", type: "string", defaultValue: "1" },
          { name: "label", type: "string", defaultValue: "", label: "Studio Label" }
        ],
        studioTemplate: {
          kind: "section",
          templateHtml: "<div style='display:flex;width:100%;padding:12px;border-radius:16px;background:rgba(255,255,255,0.9);gap:16px;'><div style='flex:1;'><slot name='col1'></slot></div><div style='flex:1;'><slot name='col2'></slot></div></div>",
          labelProp: "label",
          titleProp: "label",
          emptyText: "Drag and Drop Elements here",
          badges: [],
          slots: [
            { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
            { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] }
          ]
        },
        events: [],
        slots: ["col1", "col2"],
        lifecycleHooks: ["onInit", "onDestroy", "onChanges", "afterRender"],
        publishableAsNode: !0,
        allowBoxModel: !0,
        allowCustomClass: !0,
        allowCustomStyle: !0,
        transformOnDrop: {
          componentName: "zero-section",
          children: [
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
          ]
        }
      },
      {
        componentName: "zero-section-3col",
        title: "3 Column",
        version: "1.0.0",
        elementSelector: "zero-section-3col-1.0.0",
        jsEntry: "zero-section.ts",
        tags: ["layout", "section", "container", "3columns"],
        category: "layout",
        group: "Content Block",
        properties: [
          { name: "col1Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col1Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col1Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col1Gap", type: "string", defaultValue: "16px" },
          { name: "col1Flex", type: "string", defaultValue: "1" },
          { name: "col2Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col2Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col2Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col2Gap", type: "string", defaultValue: "16px" },
          { name: "col2Flex", type: "string", defaultValue: "1" },
          { name: "col3Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col3Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col3Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col3Gap", type: "string", defaultValue: "16px" },
          { name: "col3Flex", type: "string", defaultValue: "1" },
          { name: "label", type: "string", defaultValue: "", label: "Studio Label" }
        ],
        studioTemplate: {
          kind: "section",
          templateHtml: "<div style='display:flex;width:100%;padding:12px;border-radius:16px;background:rgba(255,255,255,0.9);gap:16px;'><div style='flex:1;'><slot name='col1'></slot></div><div style='flex:1;'><slot name='col2'></slot></div><div style='flex:1;'><slot name='col3'></slot></div></div>",
          labelProp: "label",
          titleProp: "label",
          emptyText: "Drag and Drop Elements here",
          badges: [],
          slots: [
            { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
            { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
            { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] }
          ]
        },
        events: [],
        slots: ["col1", "col2", "col3"],
        lifecycleHooks: ["onInit", "onDestroy", "onChanges", "afterRender"],
        publishableAsNode: !0,
        allowBoxModel: !0,
        allowCustomClass: !0,
        allowCustomStyle: !0,
        transformOnDrop: {
          componentName: "zero-section",
          children: [
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
          ]
        }
      },
      {
        componentName: "zero-section-4col",
        title: "4 Column",
        version: "1.0.0",
        elementSelector: "zero-section-4col-1.0.0",
        jsEntry: "zero-section.ts",
        tags: ["layout", "section", "container", "4columns"],
        category: "layout",
        group: "Content Block",
        properties: [
          { name: "col1Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col1Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col1Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col1Gap", type: "string", defaultValue: "16px" },
          { name: "col1Flex", type: "string", defaultValue: "1" },
          { name: "col2Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col2Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col2Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col2Gap", type: "string", defaultValue: "16px" },
          { name: "col2Flex", type: "string", defaultValue: "1" },
          { name: "col3Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col3Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col3Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col3Gap", type: "string", defaultValue: "16px" },
          { name: "col3Flex", type: "string", defaultValue: "1" },
          { name: "col4Direction", type: "string", uiType: "select", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }], defaultValue: "column" },
          { name: "col4Align", type: "string", uiType: "select", options: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }], defaultValue: "stretch" },
          { name: "col4Justify", type: "string", uiType: "select", options: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }], defaultValue: "flex-start" },
          { name: "col4Gap", type: "string", defaultValue: "16px" },
          { name: "col4Flex", type: "string", defaultValue: "1" },
          { name: "label", type: "string", defaultValue: "", label: "Studio Label" }
        ],
        studioTemplate: {
          kind: "section",
          templateHtml: "<div style='display:flex;width:100%;padding:12px;border-radius:16px;background:rgba(255,255,255,0.9);gap:16px;'><div style='flex:1;'><slot name='col1'></slot></div><div style='flex:1;'><slot name='col2'></slot></div><div style='flex:1;'><slot name='col3'></slot></div><div style='flex:1;'><slot name='col4'></slot></div></div>",
          labelProp: "label",
          titleProp: "label",
          emptyText: "Drag and Drop Elements here",
          badges: [],
          slots: [
            { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
            { id: "col2", label: "Column-2", dropzone: !0, anchor: "columns", accepts: [] },
            { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] },
            { id: "col4", label: "Column 4", dropzone: !0, anchor: "columns", accepts: [] }
          ]
        },
        events: [],
        slots: ["col1", "col2", "col3", "col4"],
        lifecycleHooks: ["onInit", "onDestroy", "onChanges", "afterRender"],
        publishableAsNode: !0,
        allowBoxModel: !0,
        allowCustomClass: !0,
        allowCustomStyle: !0,
        transformOnDrop: {
          componentName: "zero-section",
          children: [
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
            { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
          ]
        }
      }
    ];
  }
  static getStudioTemplate(e) {
    var Y;
    if (!e) return It;
    n(e.studio.display.label || "Section Block");
    const t = n(e.props.justify || "flex-start"), o = n(e.props.align || "stretch"), l = n(e.props.direction || "row"), r = n(e.props.gap || "16px"), c = n(e.props.padding || "0px"), u = n(e.props.backgroundColor || "transparent"), C = n(e.props.borderColor || "transparent"), x = n(e.props.borderWidth || "0px"), R = n(e.props.borderRadius || "0px"), E = n(e.props.backgroundImage ? `url(${e.props.backgroundImage})` : "none"), w = e.props.responsiveProps || ((Y = e.studio.props) == null ? void 0 : Y.responsiveProps) || {};
    let M = "";
    const I = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, U = {
      padding: "padding",
      gap: "gap",
      justify: "justify",
      align: "align",
      direction: "direction",
      borderWidth: "border-width",
      borderColor: "border-color",
      backgroundImage: "background-image"
    };
    return Object.entries(I).forEach(([W, Z]) => {
      const Q = w[W];
      if (!Q) return;
      let B = "";
      Object.entries(Q).forEach(([K, X]) => {
        const q = U[K];
        q && (K === "backgroundImage" && X ? B += `--zero-section-${q}-override: url(${X});
` : B += `--zero-section-${q}-override: ${X};
`);
      }), B && (M += `${Z} { .studio-section-container { ${B} } }
`);
    }), {
      ...It,
      templateHtml: [
        `<div class="studio-section-container" style="
          --zero-p-justify: var(--zero-section-justify-override, ${t});
          --zero-p-align: var(--zero-section-align-override, ${o});
          --zero-p-gap: var(--zero-section-gap-override, ${r});
          --zero-p-padding: var(--zero-section-padding-override, ${c});
          --zero-p-bg: ${u};
          --zero-section-border-c: var(--zero-section-border-color-override, ${C});
          --zero-section-border-w: var(--zero-section-border-width-override, ${x});
          --zero-section-bg-url: var(--zero-section-background-image-override, ${E});
          --zero-p-border-radius: ${R};
          --zero-p-direction: var(--zero-section-direction-override, ${l});

          display: flex;
          flex-direction: var(--zero-p-direction);
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
          .studio-section-container zero-studio-slot[name='default'] { width: 100%; display: flex; flex-direction: var(--zero-p-direction); gap: var(--zero-p-gap); }
          ${M}
        </style>`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    let t = super.computeInternalStyles();
    const o = `var(--${e}-background-image-override, ${this.backgroundImage ? `url(${this.backgroundImage})` : "none"})`;
    t += `; --zero-section-bg-url: ${o}`;
    const l = `var(--${e}-border-width-override, ${this.borderWidth})`, r = `var(--${e}-border-color-override, ${this.borderColor})`;
    return t += `; --zero-section-border-w: ${l}; --zero-section-border-c: ${r}`, t;
  }
  render() {
    return oe`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="section-inner">
            ${this.backgroundVideo ? oe`
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
ee.slots = [
  { id: "default", label: "Section Content", dropzone: !0, anchor: "default", accepts: ["zero-column"] }
];
ee.styles = [
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
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Layout Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout Settings",
    initialValue: "row",
    optionItems: [
      { label: "Horizontal (Row)", value: "row" },
      { label: "Vertical (Column)", value: "column" }
    ]
  })
], ee.prototype, "direction", 2);
b([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Align Items",
    fieldMappings: "align",
    categoryLabel: "Layout Settings",
    initialValue: "stretch",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], ee.prototype, "align", 2);
b([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Justify Content",
    fieldMappings: "justify",
    categoryLabel: "Layout Settings",
    initialValue: "flex-start",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
], ee.prototype, "justify", 2);
b([
  p({ type: String, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout Settings",
    initialValue: "16px"
  })
], ee.prototype, "gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Background Image",
    fieldMappings: "backgroundImage",
    categoryLabel: "Appearance"
  })
], ee.prototype, "backgroundImage", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Background Video (URL)",
    fieldMappings: "backgroundVideo",
    categoryLabel: "Appearance"
  })
], ee.prototype, "backgroundVideo", 2);
b([
  p({ type: Boolean, reflect: !0 }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Enable Parallax",
    fieldMappings: "parallax",
    categoryLabel: "Appearance"
  })
], ee.prototype, "parallax", 2);
b([
  p({ type: String, attribute: "border-width" }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Width",
    fieldMappings: "borderWidth",
    categoryLabel: "Appearance"
  })
], ee.prototype, "borderWidth", 2);
b([
  p({ type: String, attribute: "border-color" }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], ee.prototype, "borderColor", 2);
ee = b([
  ot({
    name: "zero-section",
    version: "1.0.0",
    title: "Section Block",
    elementSelector: "zero-section",
    group: "Layout",
    iconName: "section-icon.png"
  }),
  tt("zero-section")
], ee);
let te = class extends L {
  constructor() {
    super(...arguments), this.activeColIndex = "section", this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Padding = "16px", this.col1Gap = "16px", this.col1Flex = "1", this.colsDesktop = 1, this.colsTablet = 1, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-1col";
  }
  static getTransformOnDrop() {
    return {
      componentName: "zero-section",
      children: [
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
      ]
    };
  }
  static getStudioTemplate(e) {
    var U, Y, W, Z, Q, B, K, X, q, ce, le, re, ae, ie;
    const t = n(((U = e == null ? void 0 : e.props) == null ? void 0 : U.width) || "100%"), o = n(((Y = e == null ? void 0 : e.props) == null ? void 0 : Y.height) || "auto"), l = n(((W = e == null ? void 0 : e.props) == null ? void 0 : W.margin) || "0px"), r = n(((Z = e == null ? void 0 : e.props) == null ? void 0 : Z.padding) || "0px"), c = n(((Q = e == null ? void 0 : e.props) == null ? void 0 : Q.backgroundColor) || "transparent"), u = n(((B = e == null ? void 0 : e.props) == null ? void 0 : B.borderRadius) || "0px"), C = n(((K = e == null ? void 0 : e.props) == null ? void 0 : K.elevation) || "none");
    n(((X = e == null ? void 0 : e.props) == null ? void 0 : X.gap) || "16px");
    const x = n(((q = e == null ? void 0 : e.props) == null ? void 0 : q.col1Direction) || "column"), R = n(((ce = e == null ? void 0 : e.props) == null ? void 0 : ce.col1Align) || "stretch"), E = n(((le = e == null ? void 0 : e.props) == null ? void 0 : le.col1Justify) || "flex-start"), w = n(((re = e == null ? void 0 : e.props) == null ? void 0 : re.col1Padding) || "16px"), M = n(((ae = e == null ? void 0 : e.props) == null ? void 0 : ae.col1Gap) || "16px"), I = n(((ie = e == null ? void 0 : e.props) == null ? void 0 : ie.col1Flex) || "1");
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
            height: ${o};
            margin: ${l};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${r};
            background: ${c};
            border-radius: ${u};
            box-shadow: ${C};
            box-sizing: border-box;
          }
        </style>
        <div class="studio-section-outer-${(e == null ? void 0 : e.nodeId) || "default"}">
          <div class="studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"}">
            <div style="display:flex; flex-direction: ${x}; align-items: ${R}; justify-content: ${E}; padding: ${w}; gap: ${M}; flex: ${I}; width: 100%; height: 100%; box-sizing: border-box;">
              <zero-studio-slot name="col1"></zero-studio-slot>
            </div>
          </div>
        </div>
      `
    };
  }
  render() {
    return oe`
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
te.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] }
];
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" }
    ]
  })
], te.prototype, "activeColIndex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], te.prototype, "col1Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
], te.prototype, "col1Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
], te.prototype, "col1Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], te.prototype, "col1Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], te.prototype, "col1Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], te.prototype, "col1Flex", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], te.prototype, "colsDesktop", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], te.prototype, "colsTablet", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], te.prototype, "colsMobile", 2);
te = b([
  ot({
    name: "zero-section-1col",
    version: "1.0.0",
    title: "1 Column Section",
    elementSelector: "zero-section-1col",
    group: "Layout",
    iconName: "section-1col.png"
  }),
  tt("zero-section-1col")
], te);
let G = class extends L {
  constructor() {
    super(...arguments), this.activeColIndex = "section", this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Padding = "16px", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Padding = "16px", this.col2Gap = "16px", this.col2Flex = "1", this.colsDesktop = 2, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-2col";
  }
  static getTransformOnDrop() {
    return {
      componentName: "zero-section",
      children: [
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
      ]
    };
  }
  static getStudioTemplate(e) {
    var le, re, ae, ie, we, Re, ye, se, he, be, me, ve, ne, pe, $, H, xe, z, fe, ge, ue, Te, j;
    const t = n(((le = e == null ? void 0 : e.props) == null ? void 0 : le.width) || "100%"), o = n(((re = e == null ? void 0 : e.props) == null ? void 0 : re.height) || "auto"), l = n(((ae = e == null ? void 0 : e.props) == null ? void 0 : ae.margin) || "0px"), r = n(((ie = e == null ? void 0 : e.props) == null ? void 0 : ie.padding) || "0px"), c = n(((we = e == null ? void 0 : e.props) == null ? void 0 : we.backgroundColor) || "transparent"), u = n(((Re = e == null ? void 0 : e.props) == null ? void 0 : Re.borderRadius) || "0px"), C = n(((ye = e == null ? void 0 : e.props) == null ? void 0 : ye.elevation) || "none"), x = n(((se = e == null ? void 0 : e.props) == null ? void 0 : se.gap) || "16px"), R = ((he = e == null ? void 0 : e.props) == null ? void 0 : he.colsDesktop) ?? 2, E = ((be = e == null ? void 0 : e.props) == null ? void 0 : be.colsTablet) ?? 2, w = ((me = e == null ? void 0 : e.props) == null ? void 0 : me.colsMobile) ?? 1, M = n(((ve = e == null ? void 0 : e.props) == null ? void 0 : ve.col1Direction) || "column"), I = n(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.col1Align) || "stretch"), U = n(((pe = e == null ? void 0 : e.props) == null ? void 0 : pe.col1Justify) || "flex-start"), Y = n((($ = e == null ? void 0 : e.props) == null ? void 0 : $.col1Padding) || "16px"), W = n(((H = e == null ? void 0 : e.props) == null ? void 0 : H.col1Gap) || "16px"), Z = n(((xe = e == null ? void 0 : e.props) == null ? void 0 : xe.col1Flex) || "1"), Q = n(((z = e == null ? void 0 : e.props) == null ? void 0 : z.col2Direction) || "column"), B = n(((fe = e == null ? void 0 : e.props) == null ? void 0 : fe.col2Align) || "stretch"), K = n(((ge = e == null ? void 0 : e.props) == null ? void 0 : ge.col2Justify) || "flex-start"), X = n(((ue = e == null ? void 0 : e.props) == null ? void 0 : ue.col2Padding) || "16px"), q = n(((Te = e == null ? void 0 : e.props) == null ? void 0 : Te.col2Gap) || "16px"), ce = n(((j = e == null ? void 0 : e.props) == null ? void 0 : j.col2Flex) || "1");
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
            height: ${o};
            margin: ${l};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${r};
            background: ${c};
            border-radius: ${u};
            box-shadow: ${C};
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
              <div style="display:flex; flex-direction: ${M}; align-items: ${I}; justify-content: ${U}; padding: ${Y}; gap: ${W}; flex: ${Z}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${Q}; align-items: ${B}; justify-content: ${K}; padding: ${X}; gap: ${q}; flex: ${ce}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
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
    return oe`
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], G.prototype, "col1Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], G.prototype, "col1Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], G.prototype, "col1Flex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
], G.prototype, "col2Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], G.prototype, "col2Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], G.prototype, "col2Flex", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], G.prototype, "colsDesktop", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], G.prototype, "colsTablet", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], G.prototype, "colsMobile", 2);
G = b([
  ot({
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
  static getTransformOnDrop() {
    return {
      componentName: "zero-section",
      children: [
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
      ]
    };
  }
  static getStudioTemplate(e) {
    var ye, se, he, be, me, ve, ne, pe, $, H, xe, z, fe, ge, ue, Te, j, Ee, Ce, Se, Ne, $e, _e, Oe, Le, ze, Me, Pe, ke;
    const t = n(((ye = e == null ? void 0 : e.props) == null ? void 0 : ye.width) || "100%"), o = n(((se = e == null ? void 0 : e.props) == null ? void 0 : se.height) || "auto"), l = n(((he = e == null ? void 0 : e.props) == null ? void 0 : he.margin) || "0px"), r = n(((be = e == null ? void 0 : e.props) == null ? void 0 : be.padding) || "0px"), c = n(((me = e == null ? void 0 : e.props) == null ? void 0 : me.backgroundColor) || "transparent"), u = n(((ve = e == null ? void 0 : e.props) == null ? void 0 : ve.borderRadius) || "0px"), C = n(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.elevation) || "none"), x = n(((pe = e == null ? void 0 : e.props) == null ? void 0 : pe.gap) || "16px"), R = (($ = e == null ? void 0 : e.props) == null ? void 0 : $.colsDesktop) ?? 3, E = ((H = e == null ? void 0 : e.props) == null ? void 0 : H.colsTablet) ?? 2, w = ((xe = e == null ? void 0 : e.props) == null ? void 0 : xe.colsMobile) ?? 1, M = n(((z = e == null ? void 0 : e.props) == null ? void 0 : z.col1Direction) || "column"), I = n(((fe = e == null ? void 0 : e.props) == null ? void 0 : fe.col1Align) || "stretch"), U = n(((ge = e == null ? void 0 : e.props) == null ? void 0 : ge.col1Justify) || "flex-start"), Y = n(((ue = e == null ? void 0 : e.props) == null ? void 0 : ue.col1Padding) || "16px"), W = n(((Te = e == null ? void 0 : e.props) == null ? void 0 : Te.col1Gap) || "16px"), Z = n(((j = e == null ? void 0 : e.props) == null ? void 0 : j.col1Flex) || "1"), Q = n(((Ee = e == null ? void 0 : e.props) == null ? void 0 : Ee.col2Direction) || "column"), B = n(((Ce = e == null ? void 0 : e.props) == null ? void 0 : Ce.col2Align) || "stretch"), K = n(((Se = e == null ? void 0 : e.props) == null ? void 0 : Se.col2Justify) || "flex-start"), X = n(((Ne = e == null ? void 0 : e.props) == null ? void 0 : Ne.col2Padding) || "16px"), q = n((($e = e == null ? void 0 : e.props) == null ? void 0 : $e.col2Gap) || "16px"), ce = n(((_e = e == null ? void 0 : e.props) == null ? void 0 : _e.col2Flex) || "1"), le = n(((Oe = e == null ? void 0 : e.props) == null ? void 0 : Oe.col3Direction) || "column"), re = n(((Le = e == null ? void 0 : e.props) == null ? void 0 : Le.col3Align) || "stretch"), ae = n(((ze = e == null ? void 0 : e.props) == null ? void 0 : ze.col3Justify) || "flex-start"), ie = n(((Me = e == null ? void 0 : e.props) == null ? void 0 : Me.col3Padding) || "16px"), we = n(((Pe = e == null ? void 0 : e.props) == null ? void 0 : Pe.col3Gap) || "16px"), Re = n(((ke = e == null ? void 0 : e.props) == null ? void 0 : ke.col3Flex) || "1");
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
            height: ${o};
            margin: ${l};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${r};
            background: ${c};
            border-radius: ${u};
            box-shadow: ${C};
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
              <div style="display:flex; flex-direction: ${M}; align-items: ${I}; justify-content: ${U}; padding: ${Y}; gap: ${W}; flex: ${Z}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${Q}; align-items: ${B}; justify-content: ${K}; padding: ${X}; gap: ${q}; flex: ${ce}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${le}; align-items: ${re}; justify-content: ${ae}; padding: ${ie}; gap: ${we}; flex: ${Re}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
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
    return oe`
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], D.prototype, "col1Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], D.prototype, "col1Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], D.prototype, "col1Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], D.prototype, "col1Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], D.prototype, "col1Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], D.prototype, "col1Flex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], D.prototype, "col2Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], D.prototype, "col2Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], D.prototype, "col2Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
], D.prototype, "col2Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], D.prototype, "col2Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], D.prototype, "col2Flex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], D.prototype, "col3Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], D.prototype, "col3Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], D.prototype, "col3Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Padding",
    fieldMappings: "col3Padding",
    categoryLabel: "Column 3 Layout"
  })
], D.prototype, "col3Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
], D.prototype, "col3Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
], D.prototype, "col3Flex", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], D.prototype, "colsDesktop", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], D.prototype, "colsTablet", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], D.prototype, "colsMobile", 2);
D = b([
  ot({
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
  static getTransformOnDrop() {
    return {
      componentName: "zero-section",
      children: [
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" },
        { componentName: "zero-column", props: { flex: "1" }, slot: "default" }
      ]
    };
  }
  static getStudioTemplate(e) {
    var ne, pe, $, H, xe, z, fe, ge, ue, Te, j, Ee, Ce, Se, Ne, $e, _e, Oe, Le, ze, Me, Pe, ke, lt, rt, at, Ae, it, st, nt, Ye, a, i, s, m;
    const t = n(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.width) || "100%"), o = n(((pe = e == null ? void 0 : e.props) == null ? void 0 : pe.height) || "auto"), l = n((($ = e == null ? void 0 : e.props) == null ? void 0 : $.margin) || "0px"), r = n(((H = e == null ? void 0 : e.props) == null ? void 0 : H.padding) || "0px"), c = n(((xe = e == null ? void 0 : e.props) == null ? void 0 : xe.backgroundColor) || "transparent"), u = n(((z = e == null ? void 0 : e.props) == null ? void 0 : z.borderRadius) || "0px"), C = n(((fe = e == null ? void 0 : e.props) == null ? void 0 : fe.elevation) || "none"), x = n(((ge = e == null ? void 0 : e.props) == null ? void 0 : ge.gap) || "16px"), R = ((ue = e == null ? void 0 : e.props) == null ? void 0 : ue.colsDesktop) ?? 4, E = ((Te = e == null ? void 0 : e.props) == null ? void 0 : Te.colsTablet) ?? 2, w = ((j = e == null ? void 0 : e.props) == null ? void 0 : j.colsMobile) ?? 1, M = n(((Ee = e == null ? void 0 : e.props) == null ? void 0 : Ee.col1Direction) || "column"), I = n(((Ce = e == null ? void 0 : e.props) == null ? void 0 : Ce.col1Align) || "stretch"), U = n(((Se = e == null ? void 0 : e.props) == null ? void 0 : Se.col1Justify) || "flex-start"), Y = n(((Ne = e == null ? void 0 : e.props) == null ? void 0 : Ne.col1Padding) || "16px"), W = n((($e = e == null ? void 0 : e.props) == null ? void 0 : $e.col1Gap) || "16px"), Z = n(((_e = e == null ? void 0 : e.props) == null ? void 0 : _e.col1Flex) || "1"), Q = n(((Oe = e == null ? void 0 : e.props) == null ? void 0 : Oe.col2Direction) || "column"), B = n(((Le = e == null ? void 0 : e.props) == null ? void 0 : Le.col2Align) || "stretch"), K = n(((ze = e == null ? void 0 : e.props) == null ? void 0 : ze.col2Justify) || "flex-start"), X = n(((Me = e == null ? void 0 : e.props) == null ? void 0 : Me.col2Padding) || "16px"), q = n(((Pe = e == null ? void 0 : e.props) == null ? void 0 : Pe.col2Gap) || "16px"), ce = n(((ke = e == null ? void 0 : e.props) == null ? void 0 : ke.col2Flex) || "1"), le = n(((lt = e == null ? void 0 : e.props) == null ? void 0 : lt.col3Direction) || "column"), re = n(((rt = e == null ? void 0 : e.props) == null ? void 0 : rt.col3Align) || "stretch"), ae = n(((at = e == null ? void 0 : e.props) == null ? void 0 : at.col3Justify) || "flex-start"), ie = n(((Ae = e == null ? void 0 : e.props) == null ? void 0 : Ae.col3Padding) || "16px"), we = n(((it = e == null ? void 0 : e.props) == null ? void 0 : it.col3Gap) || "16px"), Re = n(((st = e == null ? void 0 : e.props) == null ? void 0 : st.col3Flex) || "1"), ye = n(((nt = e == null ? void 0 : e.props) == null ? void 0 : nt.col4Direction) || "column"), se = n(((Ye = e == null ? void 0 : e.props) == null ? void 0 : Ye.col4Align) || "stretch"), he = n(((a = e == null ? void 0 : e.props) == null ? void 0 : a.col4Justify) || "flex-start"), be = n(((i = e == null ? void 0 : e.props) == null ? void 0 : i.col4Padding) || "16px"), me = n(((s = e == null ? void 0 : e.props) == null ? void 0 : s.col4Gap) || "16px"), ve = n(((m = e == null ? void 0 : e.props) == null ? void 0 : m.col4Flex) || "1");
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
            height: ${o};
            margin: ${l};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${(e == null ? void 0 : e.nodeId) || "default"} {
            width: 100%;
            height: 100%;
            padding: ${r};
            background: ${c};
            border-radius: ${u};
            box-shadow: ${C};
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
              <div style="display:flex; flex-direction: ${M}; align-items: ${I}; justify-content: ${U}; padding: ${Y}; gap: ${W}; flex: ${Z}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${Q}; align-items: ${B}; justify-content: ${K}; padding: ${X}; gap: ${q}; flex: ${ce}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${le}; align-items: ${re}; justify-content: ${ae}; padding: ${ie}; gap: ${we}; flex: ${Re}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${ye}; align-items: ${se}; justify-content: ${he}; padding: ${be}; gap: ${me}; flex: ${ve}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col4"></zero-studio-slot></div>
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
    return oe`
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
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
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col1Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col1Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col1Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
], O.prototype, "col1Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], O.prototype, "col1Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], O.prototype, "col1Flex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col2Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col2Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col2Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
], O.prototype, "col2Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], O.prototype, "col2Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], O.prototype, "col2Flex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col3Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col3Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col3Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Padding",
    fieldMappings: "col3Padding",
    categoryLabel: "Column 3 Layout"
  })
], O.prototype, "col3Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
], O.prototype, "col3Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
], O.prototype, "col3Flex", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 4 Direction",
    fieldMappings: "col4Direction",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], O.prototype, "col4Direction", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 4 Align",
    fieldMappings: "col4Align",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], O.prototype, "col4Align", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 4 Justify",
    fieldMappings: "col4Justify",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], O.prototype, "col4Justify", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 4 Padding",
    fieldMappings: "col4Padding",
    categoryLabel: "Column 4 Layout"
  })
], O.prototype, "col4Padding", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 4 Gap",
    fieldMappings: "col4Gap",
    categoryLabel: "Column 4 Layout"
  })
], O.prototype, "col4Gap", 2);
b([
  p({ type: String }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 4 Flex Weight",
    fieldMappings: "col4Flex",
    categoryLabel: "Column 4 Layout"
  })
], O.prototype, "col4Flex", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], O.prototype, "colsDesktop", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], O.prototype, "colsTablet", 2);
b([
  p({ type: Number }),
  y({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], O.prototype, "colsMobile", 2);
O = b([
  ot({
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
  ee as ZeroSection,
  te as ZeroSection1Col,
  G as ZeroSection2Col,
  D as ZeroSection3Col,
  O as ZeroSection4Col,
  It as studioTemplate
};
