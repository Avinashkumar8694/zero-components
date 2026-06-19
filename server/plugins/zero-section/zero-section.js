/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ze = globalThis, He = ze.ShadowRoot && (ze.ShadyCSS === void 0 || ze.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Be = Symbol(), ut = /* @__PURE__ */ new WeakMap();
let Rt = class {
  constructor(t, r, o) {
    if (this._$cssResult$ = !0, o !== Be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (He && t === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (t = ut.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && ut.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ht = (e) => new Rt(typeof e == "string" ? e : e + "", void 0, Be), wt = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((o, i, p) => o + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[p + 1], e[0]);
  return new Rt(r, e, Be);
}, Bt = (e, t) => {
  if (He) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const o = document.createElement("style"), i = ze.litNonce;
    i !== void 0 && o.setAttribute("nonce", i), o.textContent = r.cssText, e.appendChild(o);
  }
}, ct = He ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const o of t.cssRules) r += o.cssText;
  return Ht(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Xt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, oe = globalThis, ht = oe.trustedTypes, er = ht ? ht.emptyScript : "", Ge = oe.reactiveElementPolyfillSupport, $e = (e, t) => e, De = { toAttribute(e, t) {
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
} }, Ve = (e, t) => !Vt(e, t), yt = { attribute: !0, type: String, converter: De, reflect: !1, useDefault: !1, hasChanged: Ve };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), oe.litPropertyMetadata ?? (oe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let be = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = yt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const o = Symbol(), i = this.getPropertyDescriptor(t, o, r);
      i !== void 0 && Xt(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, r, o) {
    const { get: i, set: p } = qt(this.prototype, t) ?? { get() {
      return this[r];
    }, set(n) {
      this[r] = n;
    } };
    return { get: i, set(n) {
      const $ = i == null ? void 0 : i.call(this);
      p == null || p.call(this, n), this.requestUpdate(t, $, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty($e("elementProperties"))) return;
    const t = Kt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty($e("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($e("properties"))) {
      const r = this.properties, o = [...Zt(r), ...Qt(r)];
      for (const i of o) this.createProperty(i, r[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [o, i] of r) this.elementProperties.set(o, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, o] of this.elementProperties) {
      const i = this._$Eu(r, o);
      i !== void 0 && this._$Eh.set(i, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const i of o) r.unshift(ct(i));
    } else t !== void 0 && r.push(ct(t));
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
    var p;
    const o = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, o);
    if (i !== void 0 && o.reflect === !0) {
      const n = (((p = o.converter) == null ? void 0 : p.toAttribute) !== void 0 ? o.converter : De).toAttribute(r, o.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var p, n;
    const o = this.constructor, i = o._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const $ = o.getPropertyOptions(i), f = typeof $.converter == "function" ? { fromAttribute: $.converter } : ((p = $.converter) == null ? void 0 : p.fromAttribute) !== void 0 ? $.converter : De;
      this._$Em = i;
      const R = f.fromAttribute(r, $.type);
      this[i] = R ?? ((n = this._$Ej) == null ? void 0 : n.get(i)) ?? R, this._$Em = null;
    }
  }
  requestUpdate(t, r, o, i = !1, p) {
    var n;
    if (t !== void 0) {
      const $ = this.constructor;
      if (i === !1 && (p = this[t]), o ?? (o = $.getPropertyOptions(t)), !((o.hasChanged ?? Ve)(p, r) || o.useDefault && o.reflect && p === ((n = this._$Ej) == null ? void 0 : n.get(t)) && !this.hasAttribute($._$Eu(t, o)))) return;
      this.C(t, r, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: o, reflect: i, wrapped: p }, n) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? r ?? this[t]), p !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (r = void 0), this._$AL.set(t, r)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [p, n] of this._$Ep) this[p] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [p, n] of i) {
        const { wrapped: $ } = n, f = this[p];
        $ !== !0 || this._$AL.has(p) || f === void 0 || this.C(p, void 0, n, f);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (o = this._$EO) == null || o.forEach((i) => {
        var p;
        return (p = i.hostUpdate) == null ? void 0 : p.call(i);
      }), this.update(r)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((o) => {
      var i;
      return (i = o.hostUpdated) == null ? void 0 : i.call(o);
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
be.elementStyles = [], be.shadowRootOptions = { mode: "open" }, be[$e("elementProperties")] = /* @__PURE__ */ new Map(), be[$e("finalized")] = /* @__PURE__ */ new Map(), Ge == null || Ge({ ReactiveElement: be }), (oe.reactiveElementVersions ?? (oe.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te = globalThis, bt = (e) => e, Ie = Te.trustedTypes, mt = Ie ? Ie.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, _t = "$lit$", re = `lit$${Math.random().toFixed(9).slice(2)}$`, Ot = "?" + re, tr = `<${Ot}>`, ce = document, Ee = () => ce.createComment(""), Pe = (e) => e === null || typeof e != "object" && typeof e != "function", Xe = Array.isArray, rr = (e) => Xe(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Fe = `[ 	
\f\r]`, xe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vt = /-->/g, ft = />/g, pe = RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), gt = /'/g, xt = /"/g, St = /^(?:script|style|textarea|title)$/i, or = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), Z = or(1), me = Symbol.for("lit-noChange"), G = Symbol.for("lit-nothing"), $t = /* @__PURE__ */ new WeakMap(), de = ce.createTreeWalker(ce, 129);
function Lt(e, t) {
  if (!Xe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return mt !== void 0 ? mt.createHTML(t) : t;
}
const ir = (e, t) => {
  const r = e.length - 1, o = [];
  let i, p = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = xe;
  for (let $ = 0; $ < r; $++) {
    const f = e[$];
    let R, w, E = -1, M = 0;
    for (; M < f.length && (n.lastIndex = M, w = n.exec(f), w !== null); ) M = n.lastIndex, n === xe ? w[1] === "!--" ? n = vt : w[1] !== void 0 ? n = ft : w[2] !== void 0 ? (St.test(w[2]) && (i = RegExp("</" + w[2], "g")), n = pe) : w[3] !== void 0 && (n = pe) : n === pe ? w[0] === ">" ? (n = i ?? xe, E = -1) : w[1] === void 0 ? E = -2 : (E = n.lastIndex - w[2].length, R = w[1], n = w[3] === void 0 ? pe : w[3] === '"' ? xt : gt) : n === xt || n === gt ? n = pe : n === vt || n === ft ? n = xe : (n = pe, i = void 0);
    const A = n === pe && e[$ + 1].startsWith("/>") ? " " : "";
    p += n === xe ? f + tr : E >= 0 ? (o.push(R), f.slice(0, E) + _t + f.slice(E) + re + A) : f + re + (E === -2 ? $ : A);
  }
  return [Lt(e, p + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
class Re {
  constructor({ strings: t, _$litType$: r }, o) {
    let i;
    this.parts = [];
    let p = 0, n = 0;
    const $ = t.length - 1, f = this.parts, [R, w] = ir(t, r);
    if (this.el = Re.createElement(R, o), de.currentNode = this.el.content, r === 2 || r === 3) {
      const E = this.el.content.firstChild;
      E.replaceWith(...E.childNodes);
    }
    for (; (i = de.nextNode()) !== null && f.length < $; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const E of i.getAttributeNames()) if (E.endsWith(_t)) {
          const M = w[n++], A = i.getAttribute(E).split(re), N = /([.?@])?(.*)/.exec(M);
          f.push({ type: 1, index: p, name: N[2], strings: A, ctor: N[1] === "." ? lr : N[1] === "?" ? sr : N[1] === "@" ? nr : Ne }), i.removeAttribute(E);
        } else E.startsWith(re) && (f.push({ type: 6, index: p }), i.removeAttribute(E));
        if (St.test(i.tagName)) {
          const E = i.textContent.split(re), M = E.length - 1;
          if (M > 0) {
            i.textContent = Ie ? Ie.emptyScript : "";
            for (let A = 0; A < M; A++) i.append(E[A], Ee()), de.nextNode(), f.push({ type: 2, index: ++p });
            i.append(E[M], Ee());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Ot) f.push({ type: 2, index: p });
      else {
        let E = -1;
        for (; (E = i.data.indexOf(re, E + 1)) !== -1; ) f.push({ type: 7, index: p }), E += re.length - 1;
      }
      p++;
    }
  }
  static createElement(t, r) {
    const o = ce.createElement("template");
    return o.innerHTML = t, o;
  }
}
function ve(e, t, r = e, o) {
  var n, $;
  if (t === me) return t;
  let i = o !== void 0 ? (n = r._$Co) == null ? void 0 : n[o] : r._$Cl;
  const p = Pe(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== p && (($ = i == null ? void 0 : i._$AO) == null || $.call(i, !1), p === void 0 ? i = void 0 : (i = new p(e), i._$AT(e, r, o)), o !== void 0 ? (r._$Co ?? (r._$Co = []))[o] = i : r._$Cl = i), i !== void 0 && (t = ve(e, i._$AS(e, t.values), i, o)), t;
}
class ar {
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
    const { el: { content: r }, parts: o } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? ce).importNode(r, !0);
    de.currentNode = i;
    let p = de.nextNode(), n = 0, $ = 0, f = o[0];
    for (; f !== void 0; ) {
      if (n === f.index) {
        let R;
        f.type === 2 ? R = new we(p, p.nextSibling, this, t) : f.type === 1 ? R = new f.ctor(p, f.name, f.strings, this, t) : f.type === 6 && (R = new pr(p, this, t)), this._$AV.push(R), f = o[++$];
      }
      n !== (f == null ? void 0 : f.index) && (p = de.nextNode(), n++);
    }
    return de.currentNode = ce, i;
  }
  p(t) {
    let r = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, r), r += o.strings.length - 2) : o._$AI(t[r])), r++;
  }
}
class we {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, o, i) {
    this.type = 2, this._$AH = G, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = o, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    t = ve(this, t, r), Pe(t) ? t === G || t == null || t === "" ? (this._$AH !== G && this._$AR(), this._$AH = G) : t !== this._$AH && t !== me && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== G && Pe(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ce.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var p;
    const { values: r, _$litType$: o } = t, i = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Re.createElement(Lt(o.h, o.h[0]), this.options)), o);
    if (((p = this._$AH) == null ? void 0 : p._$AD) === i) this._$AH.p(r);
    else {
      const n = new ar(i, this), $ = n.u(this.options);
      n.p(r), this.T($), this._$AH = n;
    }
  }
  _$AC(t) {
    let r = $t.get(t.strings);
    return r === void 0 && $t.set(t.strings, r = new Re(t)), r;
  }
  k(t) {
    Xe(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, i = 0;
    for (const p of t) i === r.length ? r.push(o = new we(this.O(Ee()), this.O(Ee()), this, this.options)) : o = r[i], o._$AI(p), i++;
    i < r.length && (this._$AR(o && o._$AB.nextSibling, i), r.length = i);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, r); t !== this._$AB; ) {
      const i = bt(t).nextSibling;
      bt(t).remove(), t = i;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class Ne {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, o, i, p) {
    this.type = 1, this._$AH = G, this._$AN = void 0, this.element = t, this.name = r, this._$AM = i, this.options = p, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = G;
  }
  _$AI(t, r = this, o, i) {
    const p = this.strings;
    let n = !1;
    if (p === void 0) t = ve(this, t, r, 0), n = !Pe(t) || t !== this._$AH && t !== me, n && (this._$AH = t);
    else {
      const $ = t;
      let f, R;
      for (t = p[0], f = 0; f < p.length - 1; f++) R = ve(this, $[o + f], r, f), R === me && (R = this._$AH[f]), n || (n = !Pe(R) || R !== this._$AH[f]), R === G ? t = G : t !== G && (t += (R ?? "") + p[f + 1]), this._$AH[f] = R;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === G ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends Ne {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === G ? void 0 : t;
  }
}
class sr extends Ne {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== G);
  }
}
class nr extends Ne {
  constructor(t, r, o, i, p) {
    super(t, r, o, i, p), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = ve(this, t, r, 0) ?? G) === me) return;
    const o = this._$AH, i = t === G && o !== G || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, p = t !== G && (o === G || i);
    i && this.element.removeEventListener(this.name, this, o), p && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    ve(this, t);
  }
}
const Je = Te.litHtmlPolyfillSupport;
Je == null || Je(Re, we), (Te.litHtmlVersions ?? (Te.litHtmlVersions = [])).push("3.3.3");
const dr = (e, t, r) => {
  const o = (r == null ? void 0 : r.renderBefore) ?? t;
  let i = o._$litPart$;
  if (i === void 0) {
    const p = (r == null ? void 0 : r.renderBefore) ?? null;
    o._$litPart$ = i = new we(t.insertBefore(Ee(), p), p, void 0, r ?? {});
  }
  return i._$AI(e), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis;
class Ce extends be {
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
    return me;
  }
}
var Pt;
Ce._$litElement$ = !0, Ce.finalized = !0, (Pt = ue.litElementHydrateSupport) == null || Pt.call(ue, { LitElement: Ce });
const We = ue.litElementPolyfillSupport;
We == null || We({ LitElement: Ce });
(ue.litElementVersions ?? (ue.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = (e) => (t, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: De, reflect: !1, hasChanged: Ve }, cr = (e = ur, t, r) => {
  const { kind: o, metadata: i } = r;
  let p = globalThis.litPropertyMetadata.get(i);
  if (p === void 0 && globalThis.litPropertyMetadata.set(i, p = /* @__PURE__ */ new Map()), o === "setter" && ((e = Object.create(e)).wrapped = !0), p.set(r.name, e), o === "accessor") {
    const { name: n } = r;
    return { set($) {
      const f = t.get.call(this);
      t.set.call(this, $), this.requestUpdate(n, f, e, !0, $);
    }, init($) {
      return $ !== void 0 && this.C(n, void 0, e, $), $;
    } };
  }
  if (o === "setter") {
    const { name: n } = r;
    return function($) {
      const f = this[n];
      t.call(this, $), this.requestUpdate(n, f, e, !0, $);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function y(e) {
  return (t, r) => typeof r == "object" ? cr(e, t, r) : ((o, i, p) => {
    const n = i.hasOwnProperty(p);
    return i.constructor.createProperty(p, o), n ? Object.getOwnPropertyDescriptor(i, p) : void 0;
  })(e, t, r);
}
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ct;
(function(e) {
  (function(t) {
    var r = typeof globalThis == "object" ? globalThis : typeof Tt == "object" ? Tt : typeof self == "object" ? self : typeof this == "object" ? this : $(), o = i(e);
    typeof r.Reflect < "u" && (o = i(r.Reflect, o)), t(o, r), typeof r.Reflect > "u" && (r.Reflect = e);
    function i(f, R) {
      return function(w, E) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: E }), R && R(w, E);
      };
    }
    function p() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function n() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function $() {
      return p() || n();
    }
  })(function(t, r) {
    var o = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", p = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", n = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", $ = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, R = !$ && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: $ ? function() {
        return Ye(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Ye({ __proto__: null });
      } : function() {
        return Ye({});
      },
      has: R ? function(a, l) {
        return o.call(a, l);
      } : function(a, l) {
        return l in a;
      },
      get: R ? function(a, l) {
        return o.call(a, l) ? a[l] : void 0;
      } : function(a, l) {
        return a[l];
      }
    }, E = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Yt(), A = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Gt(), N = typeof WeakMap == "function" ? WeakMap : Ft(), F = i ? Symbol.for("@reflect-metadata:registry") : void 0, W = Nt(), B = Ut(W);
    function H(a, l, s, b) {
      if (P(s)) {
        if (!ot(a))
          throw new TypeError();
        if (!it(l))
          throw new TypeError();
        return Le(a, l);
      } else {
        if (!ot(a))
          throw new TypeError();
        if (!U(l))
          throw new TypeError();
        if (!U(b) && !P(b) && !ye(b))
          throw new TypeError();
        return ye(b) && (b = void 0), s = ee(s), Me(a, l, s, b);
      }
    }
    t("decorate", H);
    function q(a, l) {
      function s(b, C) {
        if (!U(b))
          throw new TypeError();
        if (!P(C) && !It(C))
          throw new TypeError();
        Qe(a, l, b, C);
      }
      return s;
    }
    t("metadata", q);
    function V(a, l, s, b) {
      if (!U(s))
        throw new TypeError();
      return P(b) || (b = ee(b)), Qe(a, l, s, b);
    }
    t("defineMetadata", V);
    function X(a, l, s) {
      if (!U(l))
        throw new TypeError();
      return P(s) || (s = ee(s)), fe(a, l, s);
    }
    t("hasMetadata", X);
    function ie(a, l, s) {
      if (!U(l))
        throw new TypeError();
      return P(s) || (s = ee(s)), he(a, l, s);
    }
    t("hasOwnMetadata", ie);
    function ae(a, l, s) {
      if (!U(l))
        throw new TypeError();
      return P(s) || (s = ee(s)), qe(a, l, s);
    }
    t("getMetadata", ae);
    function le(a, l, s) {
      if (!U(l))
        throw new TypeError();
      return P(s) || (s = ee(s)), Ze(a, l, s);
    }
    t("getOwnMetadata", le);
    function se(a, l) {
      if (!U(a))
        throw new TypeError();
      return P(l) || (l = ee(l)), Ke(a, l);
    }
    t("getMetadataKeys", se);
    function ne(a, l) {
      if (!U(a))
        throw new TypeError();
      return P(l) || (l = ee(l)), et(a, l);
    }
    t("getOwnMetadataKeys", ne);
    function Se(a, l, s) {
      if (!U(l))
        throw new TypeError();
      if (P(s) || (s = ee(s)), !U(l))
        throw new TypeError();
      P(s) || (s = ee(s));
      var b = ge(
        l,
        s,
        /*Create*/
        !1
      );
      return P(b) ? !1 : b.OrdinaryDeleteMetadata(a, l, s);
    }
    t("deleteMetadata", Se);
    function Le(a, l) {
      for (var s = a.length - 1; s >= 0; --s) {
        var b = a[s], C = b(l);
        if (!P(C) && !ye(C)) {
          if (!it(C))
            throw new TypeError();
          l = C;
        }
      }
      return l;
    }
    function Me(a, l, s, b) {
      for (var C = a.length - 1; C >= 0; --C) {
        var Y = a[C], j = Y(l, s, b);
        if (!P(j) && !ye(j)) {
          if (!U(j))
            throw new TypeError();
          b = j;
        }
      }
      return b;
    }
    function fe(a, l, s) {
      var b = he(a, l, s);
      if (b)
        return !0;
      var C = je(l);
      return ye(C) ? !1 : fe(a, C, s);
    }
    function he(a, l, s) {
      var b = ge(
        l,
        s,
        /*Create*/
        !1
      );
      return P(b) ? !1 : rt(b.OrdinaryHasOwnMetadata(a, l, s));
    }
    function qe(a, l, s) {
      var b = he(a, l, s);
      if (b)
        return Ze(a, l, s);
      var C = je(l);
      if (!ye(C))
        return qe(a, C, s);
    }
    function Ze(a, l, s) {
      var b = ge(
        l,
        s,
        /*Create*/
        !1
      );
      if (!P(b))
        return b.OrdinaryGetOwnMetadata(a, l, s);
    }
    function Qe(a, l, s, b) {
      var C = ge(
        s,
        b,
        /*Create*/
        !0
      );
      C.OrdinaryDefineOwnMetadata(a, l, s, b);
    }
    function Ke(a, l) {
      var s = et(a, l), b = je(a);
      if (b === null)
        return s;
      var C = Ke(b, l);
      if (C.length <= 0)
        return s;
      if (s.length <= 0)
        return C;
      for (var Y = new A(), j = [], O = 0, v = s; O < v.length; O++) {
        var g = v[O], x = Y.has(g);
        x || (Y.add(g), j.push(g));
      }
      for (var T = 0, S = C; T < S.length; T++) {
        var g = S[T], x = Y.has(g);
        x || (Y.add(g), j.push(g));
      }
      return j;
    }
    function et(a, l) {
      var s = ge(
        a,
        l,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(a, l) : [];
    }
    function tt(a) {
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
    function P(a) {
      return a === void 0;
    }
    function ye(a) {
      return a === null;
    }
    function Mt(a) {
      return typeof a == "symbol";
    }
    function U(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function At(a, l) {
      switch (tt(a)) {
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
      var s = "string", b = at(a, p);
      if (b !== void 0) {
        var C = b.call(a, s);
        if (U(C))
          throw new TypeError();
        return C;
      }
      return zt(a);
    }
    function zt(a, l) {
      var s, b;
      {
        var C = a.toString;
        if (Ae(C)) {
          var b = C.call(a);
          if (!U(b))
            return b;
        }
        var s = a.valueOf;
        if (Ae(s)) {
          var b = s.call(a);
          if (!U(b))
            return b;
        }
      }
      throw new TypeError();
    }
    function rt(a) {
      return !!a;
    }
    function Dt(a) {
      return "" + a;
    }
    function ee(a) {
      var l = At(a);
      return Mt(l) ? l : Dt(l);
    }
    function ot(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function Ae(a) {
      return typeof a == "function";
    }
    function it(a) {
      return typeof a == "function";
    }
    function It(a) {
      switch (tt(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ue(a, l) {
      return a === l || a !== a && l !== l;
    }
    function at(a, l) {
      var s = a[l];
      if (s != null) {
        if (!Ae(s))
          throw new TypeError();
        return s;
      }
    }
    function lt(a) {
      var l = at(a, n);
      if (!Ae(l))
        throw new TypeError();
      var s = l.call(a);
      if (!U(s))
        throw new TypeError();
      return s;
    }
    function st(a) {
      return a.value;
    }
    function nt(a) {
      var l = a.next();
      return l.done ? !1 : l;
    }
    function pt(a) {
      var l = a.return;
      l && l.call(a);
    }
    function je(a) {
      var l = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === E || l !== E)
        return l;
      var s = a.prototype, b = s && Object.getPrototypeOf(s);
      if (b == null || b === Object.prototype)
        return l;
      var C = b.constructor;
      return typeof C != "function" || C === a ? l : C;
    }
    function kt() {
      var a;
      !P(F) && typeof r.Reflect < "u" && !(F in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = jt(r.Reflect));
      var l, s, b, C = new N(), Y = {
        registerProvider: j,
        getProvider: v,
        setProvider: x
      };
      return Y;
      function j(T) {
        if (!Object.isExtensible(Y))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === T:
            break;
          case P(l):
            l = T;
            break;
          case l === T:
            break;
          case P(s):
            s = T;
            break;
          case s === T:
            break;
          default:
            b === void 0 && (b = new A()), b.add(T);
            break;
        }
      }
      function O(T, S) {
        if (!P(l)) {
          if (l.isProviderFor(T, S))
            return l;
          if (!P(s)) {
            if (s.isProviderFor(T, S))
              return l;
            if (!P(b))
              for (var D = lt(b); ; ) {
                var I = nt(D);
                if (!I)
                  return;
                var Q = st(I);
                if (Q.isProviderFor(T, S))
                  return pt(D), Q;
              }
          }
        }
        if (!P(a) && a.isProviderFor(T, S))
          return a;
      }
      function v(T, S) {
        var D = C.get(T), I;
        return P(D) || (I = D.get(S)), P(I) && (I = O(T, S), P(I) || (P(D) && (D = new M(), C.set(T, D)), D.set(S, I))), I;
      }
      function g(T) {
        if (P(T))
          throw new TypeError();
        return l === T || s === T || !P(b) && b.has(T);
      }
      function x(T, S, D) {
        if (!g(D))
          throw new Error("Metadata provider not registered.");
        var I = v(T, S);
        if (I !== D) {
          if (!P(I))
            return !1;
          var Q = C.get(T);
          P(Q) && (Q = new M(), C.set(T, Q)), Q.set(S, D);
        }
        return !0;
      }
    }
    function Nt() {
      var a;
      return !P(F) && U(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[F]), P(a) && (a = kt()), !P(F) && U(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function Ut(a) {
      var l = new N(), s = {
        isProviderFor: function(g, x) {
          var T = l.get(g);
          return P(T) ? !1 : T.has(x);
        },
        OrdinaryDefineOwnMetadata: j,
        OrdinaryHasOwnMetadata: C,
        OrdinaryGetOwnMetadata: Y,
        OrdinaryOwnMetadataKeys: O,
        OrdinaryDeleteMetadata: v
      };
      return W.registerProvider(s), s;
      function b(g, x, T) {
        var S = l.get(g), D = !1;
        if (P(S)) {
          if (!T)
            return;
          S = new M(), l.set(g, S), D = !0;
        }
        var I = S.get(x);
        if (P(I)) {
          if (!T)
            return;
          if (I = new M(), S.set(x, I), !a.setProvider(g, x, s))
            throw S.delete(x), D && l.delete(g), new Error("Wrong provider for target.");
        }
        return I;
      }
      function C(g, x, T) {
        var S = b(
          x,
          T,
          /*Create*/
          !1
        );
        return P(S) ? !1 : rt(S.has(g));
      }
      function Y(g, x, T) {
        var S = b(
          x,
          T,
          /*Create*/
          !1
        );
        if (!P(S))
          return S.get(g);
      }
      function j(g, x, T, S) {
        var D = b(
          T,
          S,
          /*Create*/
          !0
        );
        D.set(g, x);
      }
      function O(g, x) {
        var T = [], S = b(
          g,
          x,
          /*Create*/
          !1
        );
        if (P(S))
          return T;
        for (var D = S.keys(), I = lt(D), Q = 0; ; ) {
          var dt = nt(I);
          if (!dt)
            return T.length = Q, T;
          var Jt = st(dt);
          try {
            T[Q] = Jt;
          } catch (Wt) {
            try {
              pt(I);
            } finally {
              throw Wt;
            }
          }
          Q++;
        }
      }
      function v(g, x, T) {
        var S = b(
          x,
          T,
          /*Create*/
          !1
        );
        if (P(S) || !S.delete(g))
          return !1;
        if (S.size === 0) {
          var D = l.get(x);
          P(D) || (D.delete(T), D.size === 0 && l.delete(D));
        }
        return !0;
      }
    }
    function jt(a) {
      var l = a.defineMetadata, s = a.hasOwnMetadata, b = a.getOwnMetadata, C = a.getOwnMetadataKeys, Y = a.deleteMetadata, j = new N(), O = {
        isProviderFor: function(v, g) {
          var x = j.get(v);
          return !P(x) && x.has(g) ? !0 : C(v, g).length ? (P(x) && (x = new A(), j.set(v, x)), x.add(g), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: l,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: b,
        OrdinaryOwnMetadataKeys: C,
        OrdinaryDeleteMetadata: Y
      };
      return O;
    }
    function ge(a, l, s) {
      var b = W.getProvider(a, l);
      if (!P(b))
        return b;
      if (s) {
        if (W.setProvider(a, l, B))
          return B;
        throw new Error("Illegal state.");
      }
    }
    function Yt() {
      var a = {}, l = [], s = (
        /** @class */
        function() {
          function O(v, g, x) {
            this._index = 0, this._keys = v, this._values = g, this._selector = x;
          }
          return O.prototype["@@iterator"] = function() {
            return this;
          }, O.prototype[n] = function() {
            return this;
          }, O.prototype.next = function() {
            var v = this._index;
            if (v >= 0 && v < this._keys.length) {
              var g = this._selector(this._keys[v], this._values[v]);
              return v + 1 >= this._keys.length ? (this._index = -1, this._keys = l, this._values = l) : this._index++, { value: g, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, O.prototype.throw = function(v) {
            throw this._index >= 0 && (this._index = -1, this._keys = l, this._values = l), v;
          }, O.prototype.return = function(v) {
            return this._index >= 0 && (this._index = -1, this._keys = l, this._values = l), { value: v, done: !0 };
          }, O;
        }()
      ), b = (
        /** @class */
        function() {
          function O() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(O.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), O.prototype.has = function(v) {
            return this._find(
              v,
              /*insert*/
              !1
            ) >= 0;
          }, O.prototype.get = function(v) {
            var g = this._find(
              v,
              /*insert*/
              !1
            );
            return g >= 0 ? this._values[g] : void 0;
          }, O.prototype.set = function(v, g) {
            var x = this._find(
              v,
              /*insert*/
              !0
            );
            return this._values[x] = g, this;
          }, O.prototype.delete = function(v) {
            var g = this._find(
              v,
              /*insert*/
              !1
            );
            if (g >= 0) {
              for (var x = this._keys.length, T = g + 1; T < x; T++)
                this._keys[T - 1] = this._keys[T], this._values[T - 1] = this._values[T];
              return this._keys.length--, this._values.length--, Ue(v, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, O.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, O.prototype.keys = function() {
            return new s(this._keys, this._values, C);
          }, O.prototype.values = function() {
            return new s(this._keys, this._values, Y);
          }, O.prototype.entries = function() {
            return new s(this._keys, this._values, j);
          }, O.prototype["@@iterator"] = function() {
            return this.entries();
          }, O.prototype[n] = function() {
            return this.entries();
          }, O.prototype._find = function(v, g) {
            if (!Ue(this._cacheKey, v)) {
              this._cacheIndex = -1;
              for (var x = 0; x < this._keys.length; x++)
                if (Ue(this._keys[x], v)) {
                  this._cacheIndex = x;
                  break;
                }
            }
            return this._cacheIndex < 0 && g && (this._cacheIndex = this._keys.length, this._keys.push(v), this._values.push(void 0)), this._cacheIndex;
          }, O;
        }()
      );
      return b;
      function C(O, v) {
        return O;
      }
      function Y(O, v) {
        return v;
      }
      function j(O, v) {
        return [O, v];
      }
    }
    function Gt() {
      var a = (
        /** @class */
        function() {
          function l() {
            this._map = new M();
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
          }, l.prototype[n] = function() {
            return this.keys();
          }, l;
        }()
      );
      return a;
    }
    function Ft() {
      var a = 16, l = w.create(), s = b();
      return (
        /** @class */
        function() {
          function v() {
            this._key = b();
          }
          return v.prototype.has = function(g) {
            var x = C(
              g,
              /*create*/
              !1
            );
            return x !== void 0 ? w.has(x, this._key) : !1;
          }, v.prototype.get = function(g) {
            var x = C(
              g,
              /*create*/
              !1
            );
            return x !== void 0 ? w.get(x, this._key) : void 0;
          }, v.prototype.set = function(g, x) {
            var T = C(
              g,
              /*create*/
              !0
            );
            return T[this._key] = x, this;
          }, v.prototype.delete = function(g) {
            var x = C(
              g,
              /*create*/
              !1
            );
            return x !== void 0 ? delete x[this._key] : !1;
          }, v.prototype.clear = function() {
            this._key = b();
          }, v;
        }()
      );
      function b() {
        var v;
        do
          v = "@@WeakMap@@" + O();
        while (w.has(l, v));
        return l[v] = !0, v;
      }
      function C(v, g) {
        if (!o.call(v, s)) {
          if (!g)
            return;
          Object.defineProperty(v, s, { value: w.create() });
        }
        return v[s];
      }
      function Y(v, g) {
        for (var x = 0; x < g; ++x)
          v[x] = Math.random() * 255 | 0;
        return v;
      }
      function j(v) {
        if (typeof Uint8Array == "function") {
          var g = new Uint8Array(v);
          return typeof crypto < "u" ? crypto.getRandomValues(g) : typeof msCrypto < "u" ? msCrypto.getRandomValues(g) : Y(g, v), g;
        }
        return Y(new Array(v), v);
      }
      function O() {
        var v = j(a);
        v[6] = v[6] & 79 | 64, v[8] = v[8] & 191 | 128;
        for (var g = "", x = 0; x < a; ++x) {
          var T = v[x];
          (x === 4 || x === 6 || x === 8) && (g += "-"), T < 16 && (g += "0"), g += T.toString(16).toLowerCase();
        }
        return g;
      }
    }
    function Ye(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(Ct || (Ct = {}));
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
            } catch (p) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${o}:`, p);
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
function Oe(e) {
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
      let i = !0;
      if (typeof r == "string") {
        try {
          i = typeof t[r] != "function";
        } catch {
          i = !0;
        }
        i && (e.fieldMappings = e.fieldMappings ?? r);
      }
      o.push(e), Reflect.defineMetadata("ZeroAttribute", o, t);
    } catch (o) {
      console.log(o);
    }
  };
}
function u(e) {
  return mr(e);
}
var h;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown", e.LAYOUT_PICKER = "layout-picker", e.RESPONSIVE_OVERRIDE = "responsive-override", e.IMAGE_PICKER = "image-picker";
})(h || (h = {}));
var d;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(d || (d = {}));
var vr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, L = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? fr(t, r) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (i = (o ? n(t, r, i) : n(i)) || i);
  return o && i && vr(t, r, i), i;
};
const ke = class ke extends Ce {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return Z``;
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
    let i = "";
    return Object.entries(r).forEach(([p, n]) => {
      const $ = this.responsiveProps[p];
      if (!$) return;
      let f = "";
      Object.entries($).forEach(([R, w]) => {
        const E = o[R];
        E && (f += `--${t}-${E}-override: ${w};
`);
      }), f && (i += `${n} {
  :host {
    ${f}  }
}
`);
    }), i ? Z`<style>${i}</style>` : Z``;
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
  // --- Interaction (Studio) ---
  handleMouseMove(t) {
    if (!window.parent) return;
    const r = t.currentTarget.getBoundingClientRect(), o = (t.clientX - r.left) / r.width, i = (t.clientY - r.top) / r.height;
    this.direction === "row" ? o < 0.3 ? this.activeEdge = "left" : o > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : i < 0.3 ? this.activeEdge = "top" : i > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.activeEdge = "none";
  }
  renderDropIndicators() {
    return Z`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    `;
  }
  renderHeader() {
    return this.enableHeader ? Z`
      <div class="zero-layout-header" @click=${this.toggleExpanded}>
        <span class="icon">${this.icon}</span>
        <span class="label">${this.label}</span>
        ${this.expandable ? Z`<span class="chevron">▼</span>` : ""}
      </div>
    ` : Z``;
  }
};
ke.slots = [], ke.styles = wt`
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
let _ = ke;
L([
  y({ type: Object, attribute: "responsive-props" }),
  u({
    attributeType: d.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], _.prototype, "responsiveProps", 2);
L([
  y({ type: String })
], _.prototype, "activeEdge", 2);
L([
  y({ type: Boolean, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], _.prototype, "visible", 2);
L([
  y({ type: Number, reflect: !0, attribute: "z-index" }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], _.prototype, "zIndex", 2);
L([
  y({ type: Number, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], _.prototype, "opacity", 2);
L([
  y({ type: String, attribute: "custom-class" }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], _.prototype, "customClass", 2);
L([
  y({ type: Boolean, reflect: !0, attribute: "enable-header" }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
], _.prototype, "enableHeader", 2);
L([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
], _.prototype, "label", 2);
L([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
], _.prototype, "icon", 2);
L([
  y({ type: Boolean, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
], _.prototype, "expandable", 2);
L([
  y({ type: Boolean, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
], _.prototype, "expanded", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], _.prototype, "width", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], _.prototype, "height", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], _.prototype, "margin", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], _.prototype, "padding", 2);
L([
  u({
    attributeType: d.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], _.prototype, "onClick", 1);
L([
  u({
    attributeType: d.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
], _.prototype, "onExpand", 1);
L([
  u({
    attributeType: d.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
], _.prototype, "onCollapse", 1);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], _.prototype, "direction", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
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
], _.prototype, "justify", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
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
], _.prototype, "align", 2);
L([
  y({ type: String, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], _.prototype, "gap", 2);
L([
  y({ type: Number, reflect: !0, attribute: "items-per-row" }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Items Per Row",
    fieldMappings: "itemsPerRow",
    categoryLabel: "Layout"
  })
], _.prototype, "itemsPerRow", 2);
L([
  y({ type: String, attribute: "background-color", reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], _.prototype, "backgroundColor", 2);
L([
  y({ type: String, attribute: "border-radius", reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], _.prototype, "borderRadius", 2);
L([
  y({ type: String, reflect: !0, attribute: "elevation" }),
  u({
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
], _.prototype, "elevation", 2);
L([
  u({
    attributeType: d.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], _.prototype, "show", 1);
L([
  u({
    attributeType: d.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], _.prototype, "hide", 1);
L([
  u({
    attributeType: d.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
], _.prototype, "expand", 1);
L([
  u({
    attributeType: d.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
], _.prototype, "collapse", 1);
L([
  u({
    attributeType: d.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
], _.prototype, "toggleExpanded", 1);
var gr = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, m = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? xr(t, r) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (i = (o ? n(t, r, i) : n(i)) || i);
  return o && i && gr(t, r, i), i;
};
const Et = {
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
let te = class extends _ {
  constructor() {
    super(...arguments), this.backgroundImage = "", this.backgroundVideo = "", this.parallax = !1, this.borderWidth = "0px", this.borderColor = "transparent";
  }
  get overridePrefix() {
    return "zero-section";
  }
  static getStudioTemplate(e) {
    var N;
    if (!e) return Et;
    c(e.studio.display.label || "Section Block");
    const t = c(e.props.justify || "center"), r = c(e.props.align || "center"), o = c(e.props.gap || "12px"), i = c(e.props.padding || "48px 24px"), p = c(e.props.backgroundColor || "transparent"), n = c(e.props.borderColor || "transparent"), $ = c(e.props.borderWidth || "0px"), f = c(e.props.borderRadius || "0px"), R = c(e.props.backgroundImage ? `url(${e.props.backgroundImage})` : "none"), w = e.props.responsiveProps || ((N = e.studio.props) == null ? void 0 : N.responsiveProps) || {};
    let E = "";
    const M = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, A = {
      padding: "padding",
      gap: "gap",
      justify: "justify",
      align: "align",
      borderWidth: "border-width",
      borderColor: "border-color",
      backgroundImage: "background-image"
    };
    return Object.entries(M).forEach(([F, W]) => {
      const B = w[F];
      if (!B) return;
      let H = "";
      Object.entries(B).forEach(([q, V]) => {
        const X = A[q];
        X && (q === "backgroundImage" && V ? H += `--zero-section-${X}-override: url(${V});
` : H += `--zero-section-${X}-override: ${V};
`);
      }), H && (E += `${W} { .studio-section-container { ${H} } }
`);
    }), {
      ...Et,
      templateHtml: [
        `<div class="studio-section-container" style="
          --zero-p-justify: var(--zero-section-justify-override, ${t});
          --zero-p-align: var(--zero-section-align-override, ${r});
          --zero-p-gap: var(--zero-section-gap-override, ${o});
          --zero-p-padding: var(--zero-section-padding-override, ${i});
          --zero-p-bg: ${p};
          --zero-section-border-c: var(--zero-section-border-color-override, ${n});
          --zero-section-border-w: var(--zero-section-border-width-override, ${$});
          --zero-section-bg-url: var(--zero-section-background-image-override, ${R});
          --zero-p-border-radius: ${f};

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
          ${E}
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
    const o = `var(--${e}-border-width-override, ${this.borderWidth})`, i = `var(--${e}-border-color-override, ${this.borderColor})`;
    return t += `; --zero-section-border-w: ${o}; --zero-section-border-c: ${i}`, t;
  }
  render() {
    return Z`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="section-inner">
            ${this.backgroundVideo ? Z`
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
te.slots = [
  { id: "default", label: "Section Content", dropzone: !0, anchor: "default", accepts: [] }
];
te.styles = [
  _.styles,
  wt`
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
      }

      :host([parallax]) .section-inner {
        background-attachment: fixed;
      }
    `
];
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Background Image",
    fieldMappings: "backgroundImage",
    categoryLabel: "Appearance"
  })
], te.prototype, "backgroundImage", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Background Video (URL)",
    fieldMappings: "backgroundVideo",
    categoryLabel: "Appearance"
  })
], te.prototype, "backgroundVideo", 2);
m([
  y({ type: Boolean, reflect: !0 }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.CHECKBOX,
    displayLabel: "Enable Parallax",
    fieldMappings: "parallax",
    categoryLabel: "Appearance"
  })
], te.prototype, "parallax", 2);
m([
  y({ type: String, attribute: "border-width" }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Width",
    fieldMappings: "borderWidth",
    categoryLabel: "Appearance"
  })
], te.prototype, "borderWidth", 2);
m([
  y({ type: String, attribute: "border-color" }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], te.prototype, "borderColor", 2);
te = m([
  Oe({
    name: "zero-section",
    version: "1.0.0",
    title: "Section Block",
    elementSelector: "zero-section",
    group: "Layout",
    iconName: "section-icon.png"
  }),
  _e("zero-section")
], te);
let K = class extends _ {
  constructor() {
    super(...arguments), this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Gap = "16px", this.col1Flex = "1", this.colsDesktop = 1, this.colsTablet = 1, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-1col";
  }
  static getStudioTemplate(e) {
    var t, r, o, i, p, n, $, f, R, w, E, M, A;
    return c(((t = e == null ? void 0 : e.props) == null ? void 0 : t.width) || "100%"), c(((r = e == null ? void 0 : e.props) == null ? void 0 : r.height) || "auto"), c(((o = e == null ? void 0 : e.props) == null ? void 0 : o.margin) || "0px"), c(((i = e == null ? void 0 : e.props) == null ? void 0 : i.padding) || "0px"), c(((p = e == null ? void 0 : e.props) == null ? void 0 : p.backgroundColor) || "transparent"), c(((n = e == null ? void 0 : e.props) == null ? void 0 : n.borderRadius) || "0px"), c((($ = e == null ? void 0 : e.props) == null ? void 0 : $.elevation) || "none"), c(((f = e == null ? void 0 : e.props) == null ? void 0 : f.gap) || "16px"), c(((R = e == null ? void 0 : e.props) == null ? void 0 : R.col1Direction) || "column"), c(((w = e == null ? void 0 : e.props) == null ? void 0 : w.col1Align) || "stretch"), c(((E = e == null ? void 0 : e.props) == null ? void 0 : E.col1Justify) || "flex-start"), c(((M = e == null ? void 0 : e.props) == null ? void 0 : M.col1Gap) || "16px"), c(((A = e == null ? void 0 : e.props) == null ? void 0 : A.col1Flex) || "1"), {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-\${config?.nodeId || 'default'} {
            width: \${width};
            height: \${height};
            margin: \${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-\${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: \${padding};
            background: \${backgroundColor};
            border-radius: \${borderRadius};
            box-shadow: \${elevation};
            box-sizing: border-box;
          }
        </style>
        <div class="studio-section-outer-\${config?.nodeId || 'default'}">
          <div class="studio-internal-container-\${config?.nodeId || 'default'}">
            <div style="display:flex; flex-direction: \${col1Dir}; align-items: \${col1Al}; justify-content: \${col1Just}; gap: \${col1G}; flex: \${col1F}; width: 100%; height: 100%; box-sizing: border-box;">
              <zero-studio-slot name="col1"></zero-studio-slot>
            </div>
          </div>
        </div>
      `
    };
  }
  render() {
    return Z`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
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
m([
  y({ type: String }),
  u({
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
], K.prototype, "col1Direction", 2);
m([
  y({ type: String }),
  u({
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
], K.prototype, "col1Align", 2);
m([
  y({ type: String }),
  u({
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
], K.prototype, "col1Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], K.prototype, "col1Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], K.prototype, "col1Flex", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], K.prototype, "colsDesktop", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], K.prototype, "colsTablet", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], K.prototype, "colsMobile", 2);
K = m([
  Oe({
    name: "zero-section-1col",
    version: "1.0.0",
    title: "1 Column Section",
    elementSelector: "zero-section-1col",
    group: "Layout",
    iconName: "section-1col.png"
  }),
  _e("zero-section-1col")
], K);
let J = class extends _ {
  constructor() {
    super(...arguments), this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Gap = "16px", this.col2Flex = "1", this.colsDesktop = 2, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-2col";
  }
  static getStudioTemplate(e) {
    var t, r, o, i, p, n, $, f, R, w, E, M, A, N, F, W, B, H, q, V, X;
    return c(((t = e == null ? void 0 : e.props) == null ? void 0 : t.width) || "100%"), c(((r = e == null ? void 0 : e.props) == null ? void 0 : r.height) || "auto"), c(((o = e == null ? void 0 : e.props) == null ? void 0 : o.margin) || "0px"), c(((i = e == null ? void 0 : e.props) == null ? void 0 : i.padding) || "0px"), c(((p = e == null ? void 0 : e.props) == null ? void 0 : p.backgroundColor) || "transparent"), c(((n = e == null ? void 0 : e.props) == null ? void 0 : n.borderRadius) || "0px"), c((($ = e == null ? void 0 : e.props) == null ? void 0 : $.elevation) || "none"), c(((f = e == null ? void 0 : e.props) == null ? void 0 : f.gap) || "16px"), (R = e == null ? void 0 : e.props) == null || R.colsDesktop, (w = e == null ? void 0 : e.props) == null || w.colsTablet, (E = e == null ? void 0 : e.props) == null || E.colsMobile, c(((M = e == null ? void 0 : e.props) == null ? void 0 : M.col1Direction) || "column"), c(((A = e == null ? void 0 : e.props) == null ? void 0 : A.col1Align) || "stretch"), c(((N = e == null ? void 0 : e.props) == null ? void 0 : N.col1Justify) || "flex-start"), c(((F = e == null ? void 0 : e.props) == null ? void 0 : F.col1Gap) || "16px"), c(((W = e == null ? void 0 : e.props) == null ? void 0 : W.col1Flex) || "1"), c(((B = e == null ? void 0 : e.props) == null ? void 0 : B.col2Direction) || "column"), c(((H = e == null ? void 0 : e.props) == null ? void 0 : H.col2Align) || "stretch"), c(((q = e == null ? void 0 : e.props) == null ? void 0 : q.col2Justify) || "flex-start"), c(((V = e == null ? void 0 : e.props) == null ? void 0 : V.col2Gap) || "16px"), c(((X = e == null ? void 0 : e.props) == null ? void 0 : X.col2Flex) || "1"), {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-\${config?.nodeId || 'default'} {
            width: \${width};
            height: \${height};
            margin: \${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-\${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: \${padding};
            background: \${backgroundColor};
            border-radius: \${borderRadius};
            box-shadow: \${elevation};
            box-sizing: border-box;
          }
          .studio-cols-grid-\${config?.nodeId || 'default'} {
            display: grid;
            gap: \${gap};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(\${colsDesktop}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-\${config?.nodeId || 'default'} {
              grid-template-columns: repeat(\${colsTablet}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-\${config?.nodeId || 'default'} {
              grid-template-columns: repeat(\${colsMobile}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-\${config?.nodeId || 'default'}">
          <div class="studio-internal-container-\${config?.nodeId || 'default'}">
            <div class="studio-cols-grid-\${config?.nodeId || 'default'}">
              <div style="display:flex; flex-direction: \${col1Dir}; align-items: \${col1Al}; justify-content: \${col1Just}; gap: \${col1G}; flex: \${col1F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: \${col2Dir}; align-items: \${col2Al}; justify-content: \${col2Just}; gap: \${col2G}; flex: \${col2F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
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
    return Z`
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
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; gap: ${this.col1Gap}; flex: ${this.col1Flex};">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; gap: ${this.col2Gap}; flex: ${this.col2Flex};">
              <slot name="col2"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
J.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] }
];
m([
  y({ type: String }),
  u({
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
], J.prototype, "col1Direction", 2);
m([
  y({ type: String }),
  u({
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
], J.prototype, "col1Align", 2);
m([
  y({ type: String }),
  u({
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
], J.prototype, "col1Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], J.prototype, "col1Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], J.prototype, "col1Flex", 2);
m([
  y({ type: String }),
  u({
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
], J.prototype, "col2Direction", 2);
m([
  y({ type: String }),
  u({
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
], J.prototype, "col2Align", 2);
m([
  y({ type: String }),
  u({
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
], J.prototype, "col2Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], J.prototype, "col2Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], J.prototype, "col2Flex", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], J.prototype, "colsDesktop", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], J.prototype, "colsTablet", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], J.prototype, "colsMobile", 2);
J = m([
  Oe({
    name: "zero-section-2col",
    version: "1.0.0",
    title: "2 Column Section",
    elementSelector: "zero-section-2col",
    group: "Layout",
    iconName: "section-2col.png"
  }),
  _e("zero-section-2col")
], J);
let k = class extends _ {
  constructor() {
    super(...arguments), this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Gap = "16px", this.col2Flex = "1", this.col3Direction = "column", this.col3Align = "stretch", this.col3Justify = "flex-start", this.col3Gap = "16px", this.col3Flex = "1", this.colsDesktop = 3, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-3col";
  }
  static getStudioTemplate(e) {
    var t, r, o, i, p, n, $, f, R, w, E, M, A, N, F, W, B, H, q, V, X, ie, ae, le, se, ne;
    return c(((t = e == null ? void 0 : e.props) == null ? void 0 : t.width) || "100%"), c(((r = e == null ? void 0 : e.props) == null ? void 0 : r.height) || "auto"), c(((o = e == null ? void 0 : e.props) == null ? void 0 : o.margin) || "0px"), c(((i = e == null ? void 0 : e.props) == null ? void 0 : i.padding) || "0px"), c(((p = e == null ? void 0 : e.props) == null ? void 0 : p.backgroundColor) || "transparent"), c(((n = e == null ? void 0 : e.props) == null ? void 0 : n.borderRadius) || "0px"), c((($ = e == null ? void 0 : e.props) == null ? void 0 : $.elevation) || "none"), c(((f = e == null ? void 0 : e.props) == null ? void 0 : f.gap) || "16px"), (R = e == null ? void 0 : e.props) == null || R.colsDesktop, (w = e == null ? void 0 : e.props) == null || w.colsTablet, (E = e == null ? void 0 : e.props) == null || E.colsMobile, c(((M = e == null ? void 0 : e.props) == null ? void 0 : M.col1Direction) || "column"), c(((A = e == null ? void 0 : e.props) == null ? void 0 : A.col1Align) || "stretch"), c(((N = e == null ? void 0 : e.props) == null ? void 0 : N.col1Justify) || "flex-start"), c(((F = e == null ? void 0 : e.props) == null ? void 0 : F.col1Gap) || "16px"), c(((W = e == null ? void 0 : e.props) == null ? void 0 : W.col1Flex) || "1"), c(((B = e == null ? void 0 : e.props) == null ? void 0 : B.col2Direction) || "column"), c(((H = e == null ? void 0 : e.props) == null ? void 0 : H.col2Align) || "stretch"), c(((q = e == null ? void 0 : e.props) == null ? void 0 : q.col2Justify) || "flex-start"), c(((V = e == null ? void 0 : e.props) == null ? void 0 : V.col2Gap) || "16px"), c(((X = e == null ? void 0 : e.props) == null ? void 0 : X.col2Flex) || "1"), c(((ie = e == null ? void 0 : e.props) == null ? void 0 : ie.col3Direction) || "column"), c(((ae = e == null ? void 0 : e.props) == null ? void 0 : ae.col3Align) || "stretch"), c(((le = e == null ? void 0 : e.props) == null ? void 0 : le.col3Justify) || "flex-start"), c(((se = e == null ? void 0 : e.props) == null ? void 0 : se.col3Gap) || "16px"), c(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.col3Flex) || "1"), {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
        { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-\${config?.nodeId || 'default'} {
            width: \${width};
            height: \${height};
            margin: \${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-\${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: \${padding};
            background: \${backgroundColor};
            border-radius: \${borderRadius};
            box-shadow: \${elevation};
            box-sizing: border-box;
          }
          .studio-cols-grid-\${config?.nodeId || 'default'} {
            display: grid;
            gap: \${gap};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(\${colsDesktop}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-\${config?.nodeId || 'default'} {
              grid-template-columns: repeat(\${colsTablet}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-\${config?.nodeId || 'default'} {
              grid-template-columns: repeat(\${colsMobile}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-\${config?.nodeId || 'default'}">
          <div class="studio-internal-container-\${config?.nodeId || 'default'}">
            <div class="studio-cols-grid-\${config?.nodeId || 'default'}">
              <div style="display:flex; flex-direction: \${col1Dir}; align-items: \${col1Al}; justify-content: \${col1Just}; gap: \${col1G}; flex: \${col1F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: \${col2Dir}; align-items: \${col2Al}; justify-content: \${col2Just}; gap: \${col2G}; flex: \${col2F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: \${col3Dir}; align-items: \${col3Al}; justify-content: \${col3Just}; gap: \${col3G}; flex: \${col3F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
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
    return Z`
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
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; gap: ${this.col1Gap}; flex: ${this.col1Flex};">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; gap: ${this.col2Gap}; flex: ${this.col2Flex};">
              <slot name="col2"></slot>
            </div>
            <div class="column col-3" style="display:flex; flex-direction: ${this.col3Direction}; align-items: ${this.col3Align}; justify-content: ${this.col3Justify}; gap: ${this.col3Gap}; flex: ${this.col3Flex};">
              <slot name="col3"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
k.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] }
];
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], k.prototype, "col1Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], k.prototype, "col1Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], k.prototype, "col1Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], k.prototype, "col1Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], k.prototype, "col1Flex", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], k.prototype, "col2Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], k.prototype, "col2Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], k.prototype, "col2Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], k.prototype, "col2Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], k.prototype, "col2Flex", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], k.prototype, "col3Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], k.prototype, "col3Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], k.prototype, "col3Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
], k.prototype, "col3Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
], k.prototype, "col3Flex", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], k.prototype, "colsDesktop", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], k.prototype, "colsTablet", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], k.prototype, "colsMobile", 2);
k = m([
  Oe({
    name: "zero-section-3col",
    version: "1.0.0",
    title: "3 Column Section",
    elementSelector: "zero-section-3col",
    group: "Layout",
    iconName: "section-3col.png"
  }),
  _e("zero-section-3col")
], k);
let z = class extends _ {
  constructor() {
    super(...arguments), this.col1Direction = "column", this.col1Align = "stretch", this.col1Justify = "flex-start", this.col1Gap = "16px", this.col1Flex = "1", this.col2Direction = "column", this.col2Align = "stretch", this.col2Justify = "flex-start", this.col2Gap = "16px", this.col2Flex = "1", this.col3Direction = "column", this.col3Align = "stretch", this.col3Justify = "flex-start", this.col3Gap = "16px", this.col3Flex = "1", this.col4Direction = "column", this.col4Align = "stretch", this.col4Justify = "flex-start", this.col4Gap = "16px", this.col4Flex = "1", this.colsDesktop = 4, this.colsTablet = 2, this.colsMobile = 1;
  }
  get overridePrefix() {
    return "zero-section-4col";
  }
  static getStudioTemplate(e) {
    var t, r, o, i, p, n, $, f, R, w, E, M, A, N, F, W, B, H, q, V, X, ie, ae, le, se, ne, Se, Le, Me, fe, he;
    return c(((t = e == null ? void 0 : e.props) == null ? void 0 : t.width) || "100%"), c(((r = e == null ? void 0 : e.props) == null ? void 0 : r.height) || "auto"), c(((o = e == null ? void 0 : e.props) == null ? void 0 : o.margin) || "0px"), c(((i = e == null ? void 0 : e.props) == null ? void 0 : i.padding) || "0px"), c(((p = e == null ? void 0 : e.props) == null ? void 0 : p.backgroundColor) || "transparent"), c(((n = e == null ? void 0 : e.props) == null ? void 0 : n.borderRadius) || "0px"), c((($ = e == null ? void 0 : e.props) == null ? void 0 : $.elevation) || "none"), c(((f = e == null ? void 0 : e.props) == null ? void 0 : f.gap) || "16px"), (R = e == null ? void 0 : e.props) == null || R.colsDesktop, (w = e == null ? void 0 : e.props) == null || w.colsTablet, (E = e == null ? void 0 : e.props) == null || E.colsMobile, c(((M = e == null ? void 0 : e.props) == null ? void 0 : M.col1Direction) || "column"), c(((A = e == null ? void 0 : e.props) == null ? void 0 : A.col1Align) || "stretch"), c(((N = e == null ? void 0 : e.props) == null ? void 0 : N.col1Justify) || "flex-start"), c(((F = e == null ? void 0 : e.props) == null ? void 0 : F.col1Gap) || "16px"), c(((W = e == null ? void 0 : e.props) == null ? void 0 : W.col1Flex) || "1"), c(((B = e == null ? void 0 : e.props) == null ? void 0 : B.col2Direction) || "column"), c(((H = e == null ? void 0 : e.props) == null ? void 0 : H.col2Align) || "stretch"), c(((q = e == null ? void 0 : e.props) == null ? void 0 : q.col2Justify) || "flex-start"), c(((V = e == null ? void 0 : e.props) == null ? void 0 : V.col2Gap) || "16px"), c(((X = e == null ? void 0 : e.props) == null ? void 0 : X.col2Flex) || "1"), c(((ie = e == null ? void 0 : e.props) == null ? void 0 : ie.col3Direction) || "column"), c(((ae = e == null ? void 0 : e.props) == null ? void 0 : ae.col3Align) || "stretch"), c(((le = e == null ? void 0 : e.props) == null ? void 0 : le.col3Justify) || "flex-start"), c(((se = e == null ? void 0 : e.props) == null ? void 0 : se.col3Gap) || "16px"), c(((ne = e == null ? void 0 : e.props) == null ? void 0 : ne.col3Flex) || "1"), c(((Se = e == null ? void 0 : e.props) == null ? void 0 : Se.col4Direction) || "column"), c(((Le = e == null ? void 0 : e.props) == null ? void 0 : Le.col4Align) || "stretch"), c(((Me = e == null ? void 0 : e.props) == null ? void 0 : Me.col4Justify) || "flex-start"), c(((fe = e == null ? void 0 : e.props) == null ? void 0 : fe.col4Gap) || "16px"), c(((he = e == null ? void 0 : e.props) == null ? void 0 : he.col4Flex) || "1"), {
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
          .studio-section-outer-\${config?.nodeId || 'default'} {
            width: \${width};
            height: \${height};
            margin: \${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-\${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: \${padding};
            background: \${backgroundColor};
            border-radius: \${borderRadius};
            box-shadow: \${elevation};
            box-sizing: border-box;
          }
          .studio-cols-grid-\${config?.nodeId || 'default'} {
            display: grid;
            gap: \${gap};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(\${colsDesktop}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-\${config?.nodeId || 'default'} {
              grid-template-columns: repeat(\${colsTablet}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-\${config?.nodeId || 'default'} {
              grid-template-columns: repeat(\${colsMobile}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-\${config?.nodeId || 'default'}">
          <div class="studio-internal-container-\${config?.nodeId || 'default'}">
            <div class="studio-cols-grid-\${config?.nodeId || 'default'}">
              <div style="display:flex; flex-direction: \${col1Dir}; align-items: \${col1Al}; justify-content: \${col1Just}; gap: \${col1G}; flex: \${col1F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: \${col2Dir}; align-items: \${col2Al}; justify-content: \${col2Just}; gap: \${col2G}; flex: \${col2F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: \${col3Dir}; align-items: \${col3Al}; justify-content: \${col3Just}; gap: \${col3G}; flex: \${col3F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: \${col4Dir}; align-items: \${col4Al}; justify-content: \${col4Just}; gap: \${col4G}; flex: \${col4F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col4"></zero-studio-slot></div>
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
    return Z`
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
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; gap: ${this.col1Gap}; flex: ${this.col1Flex};">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; gap: ${this.col2Gap}; flex: ${this.col2Flex};">
              <slot name="col2"></slot>
            </div>
            <div class="column col-3" style="display:flex; flex-direction: ${this.col3Direction}; align-items: ${this.col3Align}; justify-content: ${this.col3Justify}; gap: ${this.col3Gap}; flex: ${this.col3Flex};">
              <slot name="col3"></slot>
            </div>
            <div class="column col-4" style="display:flex; flex-direction: ${this.col4Direction}; align-items: ${this.col4Align}; justify-content: ${this.col4Justify}; gap: ${this.col4Gap}; flex: ${this.col4Flex};">
              <slot name="col4"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
z.slots = [
  { id: "col1", label: "Column 1", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col2", label: "Column 2", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col3", label: "Column 3", dropzone: !0, anchor: "columns", accepts: [] },
  { id: "col4", label: "Column 4", dropzone: !0, anchor: "columns", accepts: [] }
];
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], z.prototype, "col1Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], z.prototype, "col1Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], z.prototype, "col1Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
], z.prototype, "col1Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
], z.prototype, "col1Flex", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], z.prototype, "col2Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], z.prototype, "col2Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], z.prototype, "col2Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
], z.prototype, "col2Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
], z.prototype, "col2Flex", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], z.prototype, "col3Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], z.prototype, "col3Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], z.prototype, "col3Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
], z.prototype, "col3Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
], z.prototype, "col3Flex", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 4 Direction",
    fieldMappings: "col4Direction",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
], z.prototype, "col4Direction", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 4 Align",
    fieldMappings: "col4Align",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
], z.prototype, "col4Align", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.DROPDOWN,
    displayLabel: "Col 4 Justify",
    fieldMappings: "col4Justify",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
], z.prototype, "col4Justify", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 4 Gap",
    fieldMappings: "col4Gap",
    categoryLabel: "Column 4 Layout"
  })
], z.prototype, "col4Gap", 2);
m([
  y({ type: String }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.TEXT_INPUT,
    displayLabel: "Col 4 Flex Weight",
    fieldMappings: "col4Flex",
    categoryLabel: "Column 4 Layout"
  })
], z.prototype, "col4Flex", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
], z.prototype, "colsDesktop", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
], z.prototype, "colsTablet", 2);
m([
  y({ type: Number }),
  u({
    attributeType: d.PROPERTY,
    uiComponentType: h.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
], z.prototype, "colsMobile", 2);
z = m([
  Oe({
    name: "zero-section-4col",
    version: "1.0.0",
    title: "4 Column Section",
    elementSelector: "zero-section-4col",
    group: "Layout",
    iconName: "section-4col.png"
  }),
  _e("zero-section-4col")
], z);
function c(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  te as ZeroSection,
  K as ZeroSection1Col,
  J as ZeroSection2Col,
  k as ZeroSection3Col,
  z as ZeroSection4Col,
  Et as studioTemplate
};
