/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, ge = ne.ShadowRoot && (ne.ShadyCSS === void 0 || ne.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Qe = Symbol(), He = /* @__PURE__ */ new WeakMap();
let Rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Qe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = He.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && He.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Tt = (o) => new Rt(typeof o == "string" ? o : o + "", void 0, Qe), kt = (o, e) => {
  if (ge) o.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), i = ne.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, o.appendChild(n);
  }
}, je = ge ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Tt(t);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: xt, defineProperty: Nt, getOwnPropertyDescriptor: It, getOwnPropertyNames: Ut, getOwnPropertySymbols: Dt, getPrototypeOf: Ht } = Object, U = globalThis, Le = U.trustedTypes, jt = Le ? Le.emptyScript : "", ce = U.reactiveElementPolyfillSupport, q = (o, e) => o, ie = { toAttribute(o, e) {
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
} }, me = (o, e) => !xt(o, e), ze = { attribute: !0, type: String, converter: ie, reflect: !1, useDefault: !1, hasChanged: me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Nt(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: i, set: u } = It(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: i, set(l) {
      const g = i == null ? void 0 : i.call(this);
      u == null || u.call(this, l), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const e = Ht(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const t = this.properties, n = [...Ut(t), ...Dt(t)];
      for (const i of n) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, i] of t) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const i = this._$Eu(t, n);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n) t.unshift(je(i));
    } else e !== void 0 && t.push(je(e));
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
    return kt(e, this.constructor.elementStyles), e;
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
    var u;
    const n = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, n);
    if (i !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ie).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(i) : this.setAttribute(i, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u, l;
    const n = this.constructor, i = n._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const g = n.getPropertyOptions(i), v = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((u = g.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? g.converter : ie;
      this._$Em = i;
      const A = v.fromAttribute(t, g.type);
      this[i] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(i)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, i = !1, u) {
    var l;
    if (e !== void 0) {
      const g = this.constructor;
      if (i === !1 && (u = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? me)(u, t) || n.useDefault && n.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: i, wrapped: u }, l) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), u !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [u, l] of i) {
        const { wrapped: g } = l, v = this[u];
        g !== !0 || this._$AL.has(u) || v === void 0 || this.C(u, void 0, l, v);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((i) => {
        var u;
        return (u = i.hostUpdate) == null ? void 0 : u.call(i);
      }), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var i;
      return (i = n.hostUpdated) == null ? void 0 : i.call(n);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[q("elementProperties")] = /* @__PURE__ */ new Map(), B[q("finalized")] = /* @__PURE__ */ new Map(), ce == null || ce({ ReactiveElement: B }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, We = (o) => o, se = X.trustedTypes, Be = se ? se.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Ke = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, et = "?" + I, Lt = `<${et}>`, L = document, J = () => L.createComment(""), Q = (o) => o === null || typeof o != "object" && typeof o != "function", $e = Array.isArray, zt = (o) => $e(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", fe = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ge = /-->/g, Ve = />/g, D = RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Fe = /'/g, Ze = /"/g, tt = /^(?:script|style|textarea|title)$/i, G = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), qe = /* @__PURE__ */ new WeakMap(), H = L.createTreeWalker(L, 129);
function rt(o, e) {
  if (!$e(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Be !== void 0 ? Be.createHTML(e) : e;
}
const Wt = (o, e) => {
  const t = o.length - 1, n = [];
  let i, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Z;
  for (let g = 0; g < t; g++) {
    const v = o[g];
    let A, b, w = -1, R = 0;
    for (; R < v.length && (l.lastIndex = R, b = l.exec(v), b !== null); ) R = l.lastIndex, l === Z ? b[1] === "!--" ? l = Ge : b[1] !== void 0 ? l = Ve : b[2] !== void 0 ? (tt.test(b[2]) && (i = RegExp("</" + b[2], "g")), l = D) : b[3] !== void 0 && (l = D) : l === D ? b[0] === ">" ? (l = i ?? Z, w = -1) : b[1] === void 0 ? w = -2 : (w = l.lastIndex - b[2].length, A = b[1], l = b[3] === void 0 ? D : b[3] === '"' ? Ze : Fe) : l === Ze || l === Fe ? l = D : l === Ge || l === Ve ? l = Z : (l = D, i = void 0);
    const T = l === D && o[g + 1].startsWith("/>") ? " " : "";
    u += l === Z ? v + Lt : w >= 0 ? (n.push(A), v.slice(0, w) + Ke + v.slice(w) + I + T) : v + I + (w === -2 ? g : T);
  }
  return [rt(o, u + (o[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class K {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let u = 0, l = 0;
    const g = e.length - 1, v = this.parts, [A, b] = Wt(e, t);
    if (this.el = K.createElement(A, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (i = H.nextNode()) !== null && v.length < g; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const w of i.getAttributeNames()) if (w.endsWith(Ke)) {
          const R = b[l++], T = i.getAttribute(w).split(I), N = /([.?@])?(.*)/.exec(R);
          v.push({ type: 1, index: u, name: N[2], strings: T, ctor: N[1] === "." ? Gt : N[1] === "?" ? Vt : N[1] === "@" ? Ft : oe }), i.removeAttribute(w);
        } else w.startsWith(I) && (v.push({ type: 6, index: u }), i.removeAttribute(w));
        if (tt.test(i.tagName)) {
          const w = i.textContent.split(I), R = w.length - 1;
          if (R > 0) {
            i.textContent = se ? se.emptyScript : "";
            for (let T = 0; T < R; T++) i.append(w[T], J()), H.nextNode(), v.push({ type: 2, index: ++u });
            i.append(w[R], J());
          }
        }
      } else if (i.nodeType === 8) if (i.data === et) v.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = i.data.indexOf(I, w + 1)) !== -1; ) v.push({ type: 7, index: u }), w += I.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = L.createElement("template");
    return n.innerHTML = e, n;
  }
}
function V(o, e, t = o, n) {
  var l, g;
  if (e === G) return e;
  let i = n !== void 0 ? (l = t._$Co) == null ? void 0 : l[n] : t._$Cl;
  const u = Q(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== u && ((g = i == null ? void 0 : i._$AO) == null || g.call(i, !1), u === void 0 ? i = void 0 : (i = new u(o), i._$AT(o, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = i : t._$Cl = i), i !== void 0 && (e = V(o, i._$AS(o, e.values), i, n)), e;
}
class Bt {
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
    const { el: { content: t }, parts: n } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    H.currentNode = i;
    let u = H.nextNode(), l = 0, g = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let A;
        v.type === 2 ? A = new ee(u, u.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (A = new Zt(u, this, e)), this._$AV.push(A), v = n[++g];
      }
      l !== (v == null ? void 0 : v.index) && (u = H.nextNode(), l++);
    }
    return H.currentNode = L, i;
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
  constructor(e, t, n, i) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    var u;
    const { values: t, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = K.createElement(rt(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === i) this._$AH.p(t);
    else {
      const l = new Bt(i, this), g = l.u(this.options);
      l.p(t), this.T(g), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = qe.get(e.strings);
    return t === void 0 && qe.set(e.strings, t = new K(e)), t;
  }
  k(e) {
    $e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const u of e) i === t.length ? t.push(n = new ee(this.O(J()), this.O(J()), this, this.options)) : n = t[i], n._$AI(u), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const i = We(e).nextSibling;
      We(e).remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class oe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, i, u) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, i) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = V(this, e, t, 0), l = !Q(e) || e !== this._$AH && e !== G, l && (this._$AH = e);
    else {
      const g = e;
      let v, A;
      for (e = u[0], v = 0; v < u.length - 1; v++) A = V(this, g[n + v], t, v), A === G && (A = this._$AH[v]), l || (l = !Q(A) || A !== this._$AH[v]), A === C ? e = C : e !== C && (e += (A ?? "") + u[v + 1]), this._$AH[v] = A;
    }
    l && !i && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Gt extends oe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class Vt extends oe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class Ft extends oe {
  constructor(e, t, n, i, u) {
    super(e, t, n, i, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? C) === G) return;
    const n = this._$AH, i = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== C && (n === C || i);
    i && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Zt {
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
const de = X.litHtmlPolyfillSupport;
de == null || de(K, ee), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.3.3");
const qt = (o, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = n._$litPart$;
  if (i === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = i = new ee(e.insertBefore(J(), u), u, void 0, t ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis;
class Y extends B {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = qt(t, this.renderRoot, this.renderOptions);
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
var Je;
Y._$litElement$ = !0, Y.finalized = !0, (Je = j.litElementHydrateSupport) == null || Je.call(j, { LitElement: Y });
const pe = j.litElementPolyfillSupport;
pe == null || pe({ LitElement: Y });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt = (o) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(o, e);
  }) : customElements.define(o, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt = { attribute: !0, type: String, converter: ie, reflect: !1, hasChanged: me }, Jt = (o = Yt, e, t) => {
  const { kind: n, metadata: i } = t;
  let u = globalThis.litPropertyMetadata.get(i);
  if (u === void 0 && globalThis.litPropertyMetadata.set(i, u = /* @__PURE__ */ new Map()), n === "setter" && ((o = Object.create(o)).wrapped = !0), u.set(t.name, o), n === "accessor") {
    const { name: l } = t;
    return { set(g) {
      const v = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(l, v, o, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(l, void 0, o, g), g;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(g) {
      const v = this[l];
      e.call(this, g), this.requestUpdate(l, v, o, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Qt(o) {
  return (e, t) => typeof t == "object" ? Jt(o, e, t) : ((n, i, u) => {
    const l = i.hasOwnProperty(u);
    return i.constructor.createProperty(u, n), l ? Object.getOwnPropertyDescriptor(i, u) : void 0;
  })(o, e, t);
}
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ye;
(function(o) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Xe == "object" ? Xe : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = i(o);
    typeof t.Reflect < "u" && (n = i(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = o);
    function i(v, A) {
      return function(b, w) {
        Object.defineProperty(v, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
      };
    }
    function u() {
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
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", u = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !g && !v, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return he(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return he({ __proto__: null });
      } : function() {
        return he({});
      },
      has: A ? function(r, s) {
        return n.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: A ? function(r, s) {
        return n.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ot(), N = typeof WeakMap == "function" ? WeakMap : Pt(), z = i ? Symbol.for("@reflect-metadata:registry") : void 0, te = At(), we = bt(te);
    function it(r, s, a, h) {
      if (_(a)) {
        if (!Re(r))
          throw new TypeError();
        if (!Te(s))
          throw new TypeError();
        return pt(r, s);
      } else {
        if (!Re(r))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(h) && !_(h) && !W(h))
          throw new TypeError();
        return W(h) && (h = void 0), a = x(a), vt(r, s, a, h);
      }
    }
    e("decorate", it);
    function st(r, s) {
      function a(h, y) {
        if (!O(h))
          throw new TypeError();
        if (!_(y) && !$t(y))
          throw new TypeError();
        Me(r, s, h, y);
      }
      return a;
    }
    e("metadata", st);
    function ot(r, s, a, h) {
      if (!O(a))
        throw new TypeError();
      return _(h) || (h = x(h)), Me(r, s, a, h);
    }
    e("defineMetadata", ot);
    function at(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ae(r, s, a);
    }
    e("hasMetadata", at);
    function ut(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), ae(r, s, a);
    }
    e("hasOwnMetadata", ut);
    function lt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), be(r, s, a);
    }
    e("getMetadata", lt);
    function ht(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ee(r, s, a);
    }
    e("getOwnMetadata", ht);
    function ct(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Oe(r, s);
    }
    e("getMetadataKeys", ct);
    function ft(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Pe(r, s);
    }
    e("getOwnMetadataKeys", ft);
    function dt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = x(a)), !O(s))
        throw new TypeError();
      _(a) || (a = x(a));
      var h = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", dt);
    function pt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!_(y) && !W(y)) {
          if (!Te(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function vt(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var S = r[y], P = S(s, a, h);
        if (!_(P) && !W(P)) {
          if (!O(P))
            throw new TypeError();
          h = P;
        }
      }
      return h;
    }
    function Ae(r, s, a) {
      var h = ae(r, s, a);
      if (h)
        return !0;
      var y = le(s);
      return W(y) ? !1 : Ae(r, y, a);
    }
    function ae(r, s, a) {
      var h = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Ce(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function be(r, s, a) {
      var h = ae(r, s, a);
      if (h)
        return Ee(r, s, a);
      var y = le(s);
      if (!W(y))
        return be(r, y, a);
    }
    function Ee(r, s, a) {
      var h = F(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Me(r, s, a, h) {
      var y = F(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Oe(r, s) {
      var a = Pe(r, s), h = le(r);
      if (h === null)
        return a;
      var y = Oe(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var S = new T(), P = [], m = 0, c = a; m < c.length; m++) {
        var f = c[m], d = S.has(f);
        d || (S.add(f), P.push(f));
      }
      for (var p = 0, $ = y; p < $.length; p++) {
        var f = $[p], d = S.has(f);
        d || (S.add(f), P.push(f));
      }
      return P;
    }
    function Pe(r, s) {
      var a = F(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Se(r) {
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
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function _t(r, s) {
      switch (Se(r)) {
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
      var a = "string", h = ke(r, u);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return gt(r);
    }
    function gt(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (re(y)) {
          var h = y.call(r);
          if (!O(h))
            return h;
        }
        var a = r.valueOf;
        if (re(a)) {
          var h = a.call(r);
          if (!O(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Ce(r) {
      return !!r;
    }
    function mt(r) {
      return "" + r;
    }
    function x(r) {
      var s = _t(r);
      return yt(s) ? s : mt(s);
    }
    function Re(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function re(r) {
      return typeof r == "function";
    }
    function Te(r) {
      return typeof r == "function";
    }
    function $t(r) {
      switch (Se(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ue(r, s) {
      return r === s || r !== r && s !== s;
    }
    function ke(r, s) {
      var a = r[s];
      if (a != null) {
        if (!re(a))
          throw new TypeError();
        return a;
      }
    }
    function xe(r) {
      var s = ke(r, l);
      if (!re(s))
        throw new TypeError();
      var a = s.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ne(r) {
      return r.value;
    }
    function Ie(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function Ue(r) {
      var s = r.return;
      s && s.call(r);
    }
    function le(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === w || s !== w)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function wt() {
      var r;
      !_(z) && typeof t.Reflect < "u" && !(z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Et(t.Reflect));
      var s, a, h, y = new N(), S = {
        registerProvider: P,
        getProvider: c,
        setProvider: d
      };
      return S;
      function P(p) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case _(s):
            s = p;
            break;
          case s === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            h === void 0 && (h = new T()), h.add(p);
            break;
        }
      }
      function m(p, $) {
        if (!_(s)) {
          if (s.isProviderFor(p, $))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, $))
              return s;
            if (!_(h))
              for (var E = xe(h); ; ) {
                var M = Ie(E);
                if (!M)
                  return;
                var k = Ne(M);
                if (k.isProviderFor(p, $))
                  return Ue(E), k;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, $))
          return r;
      }
      function c(p, $) {
        var E = y.get(p), M;
        return _(E) || (M = E.get($)), _(M) && (M = m(p, $), _(M) || (_(E) && (E = new R(), y.set(p, E)), E.set($, M))), M;
      }
      function f(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(h) && h.has(p);
      }
      function d(p, $, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var M = c(p, $);
        if (M !== E) {
          if (!_(M))
            return !1;
          var k = y.get(p);
          _(k) && (k = new R(), y.set(p, k)), k.set($, E);
        }
        return !0;
      }
    }
    function At() {
      var r;
      return !_(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[z]), _(r) && (r = wt()), !_(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function bt(r) {
      var s = new N(), a = {
        isProviderFor: function(f, d) {
          var p = s.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return te.registerProvider(a), a;
      function h(f, d, p) {
        var $ = s.get(f), E = !1;
        if (_($)) {
          if (!p)
            return;
          $ = new R(), s.set(f, $), E = !0;
        }
        var M = $.get(d);
        if (_(M)) {
          if (!p)
            return;
          if (M = new R(), $.set(d, M), !r.setProvider(f, d, a))
            throw $.delete(d), E && s.delete(f), new Error("Wrong provider for target.");
        }
        return M;
      }
      function y(f, d, p) {
        var $ = h(
          d,
          p,
          /*Create*/
          !1
        );
        return _($) ? !1 : Ce($.has(f));
      }
      function S(f, d, p) {
        var $ = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(f);
      }
      function P(f, d, p, $) {
        var E = h(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function m(f, d) {
        var p = [], $ = h(
          f,
          d,
          /*Create*/
          !1
        );
        if (_($))
          return p;
        for (var E = $.keys(), M = xe(E), k = 0; ; ) {
          var De = Ie(M);
          if (!De)
            return p.length = k, p;
          var St = Ne(De);
          try {
            p[k] = St;
          } catch (Ct) {
            try {
              Ue(M);
            } finally {
              throw Ct;
            }
          }
          k++;
        }
      }
      function c(f, d, p) {
        var $ = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(f))
          return !1;
        if ($.size === 0) {
          var E = s.get(d);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Et(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, S = r.deleteMetadata, P = new N(), m = {
        isProviderFor: function(c, f) {
          var d = P.get(c);
          return !_(d) && d.has(f) ? !0 : y(c, f).length ? (_(d) && (d = new T(), P.set(c, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: S
      };
      return m;
    }
    function F(r, s, a) {
      var h = te.getProvider(r, s);
      if (!_(h))
        return h;
      if (a) {
        if (te.setProvider(r, s, we))
          return we;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var r = {}, s = [], a = (
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
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, m;
        }()
      ), h = (
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
              return this._keys.length--, this._values.length--, ue(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(c, f) {
            if (!ue(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ue(this._keys[d], c)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return h;
      function y(m, c) {
        return m;
      }
      function S(m, c) {
        return c;
      }
      function P(m, c) {
        return [m, c];
      }
    }
    function Ot() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new R();
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
      return r;
    }
    function Pt() {
      var r = 16, s = b.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? b.has(d, this._key) : !1;
          }, c.prototype.get = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? b.get(d, this._key) : void 0;
          }, c.prototype.set = function(f, d) {
            var p = y(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, c.prototype.delete = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while (b.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, f) {
        if (!n.call(c, a)) {
          if (!f)
            return;
          Object.defineProperty(c, a, { value: b.create() });
        }
        return c[a];
      }
      function S(c, f) {
        for (var d = 0; d < f; ++d)
          c[d] = Math.random() * 255 | 0;
        return c;
      }
      function P(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : S(f, c), f;
        }
        return S(new Array(c), c);
      }
      function m() {
        var c = P(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", d = 0; d < r; ++d) {
          var p = c[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function he(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ye || (Ye = {}));
function Kt(o) {
  return typeof o.name == "string" && typeof o.version == "string" && typeof o.title == "string" && typeof o.elementSelector == "string" && typeof o.group == "string" && typeof o.iconName == "string";
}
function er(o) {
  return function(e) {
    if (Kt(o)) {
      const t = {
        version: o.version,
        name: o.name,
        title: o.title,
        selector: o.elementSelector,
        category: o.group,
        icon: o.iconName
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
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, u);
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
function tr(o) {
  return er(o);
}
function rr(o) {
  var t;
  if (((t = o == null ? void 0 : o.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function nr(o) {
  return function(e, t) {
    try {
      rr(o);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let i = !0;
      if (typeof t == "string") {
        try {
          i = typeof e[t] != "function";
        } catch {
          i = !0;
        }
        i && (o.fieldMappings = o.fieldMappings ?? t);
      }
      n.push(o), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ir(o) {
  return nr(o);
}
var ve;
(function(o) {
  o.TEXT_INPUT = "text-input", o.PASSWORD_INPUT = "password-input", o.DROPDOWN = "dropdown", o.CHECKBOX = "checkbox", o.RADIO_BUTTON = "radio-button", o.RANGE_SLIDER = "range-slider", o.FILE_INPUT = "file-input", o.DATE_PICKER = "date-picker", o.COLOR_PICKER = "color-picker", o.NUMBER_INPUT = "number-input", o.TEXTAREA = "textarea", o.MULTI_SELECT = "multi-select", o.POPUP_DROPDOWN = "popup-dropdown", o.LAYOUT_PICKER = "layout-picker", o.RESPONSIVE_OVERRIDE = "responsive-override", o.IMAGE_PICKER = "image-picker", o.CHIPS = "chips";
})(ve || (ve = {}));
var ye;
(function(o) {
  o.PROPERTY = "property", o.EVENT = "event", o.ACTION = "action";
})(ye || (ye = {}));
var sr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, nt = (o, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? or(e, t) : e, u = o.length - 1, l; u >= 0; u--)
    (l = o[u]) && (i = (n ? l(e, t, i) : l(i)) || i);
  return n && i && sr(e, t, i), i;
};
let _e = class extends Y {
  constructor() {
    super(...arguments), this.pageId = "";
  }
  static getStudioTemplate() {
    return {
      kind: "generic",
      emptyText: "Displays a nested page reference",
      slots: [],
      badges: ["Page Reference"]
    };
  }
};
nt([
  Qt({ type: String }),
  ir({
    attributeType: ye.PROPERTY,
    uiComponentType: ve.TEXT_INPUT,
    displayLabel: "Page Reference ID",
    fieldMappings: "pageId",
    categoryLabel: "Configuration"
  })
], _e.prototype, "pageId", 2);
_e = nt([
  tr({
    name: "zero-page-ref",
    version: "1.0.0",
    title: "Reuse Page",
    elementSelector: "zero-page-ref",
    group: "Content Block",
    iconName: "page-ref-icon.png"
  }),
  Xt("zero-page-ref")
], _e);
export {
  _e as ZeroPageRef
};
