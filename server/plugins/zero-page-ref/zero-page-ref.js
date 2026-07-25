/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, me = ne.ShadowRoot && (ne.ShadyCSS === void 0 || ne.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Qe = Symbol(), He = /* @__PURE__ */ new WeakMap();
let Rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Qe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (me && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = He.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && He.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Tt = (s) => new Rt(typeof s == "string" ? s : s + "", void 0, Qe), kt = (s, e) => {
  if (me) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), i = ne.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, s.appendChild(n);
  }
}, je = me ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Tt(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: xt, defineProperty: Nt, getOwnPropertyDescriptor: It, getOwnPropertyNames: Ut, getOwnPropertySymbols: Dt, getPrototypeOf: Ht } = Object, U = globalThis, Le = U.trustedTypes, jt = Le ? Le.emptyScript : "", ce = U.reactiveElementPolyfillSupport, q = (s, e) => s, ie = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? jt : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, ge = (s, e) => !xt(s, e), ze = { attribute: !0, type: String, converter: ie, reflect: !1, useDefault: !1, hasChanged: ge };
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
      const m = i == null ? void 0 : i.call(this);
      u == null || u.call(this, l), this.requestUpdate(e, m, n);
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
      const m = n.getPropertyOptions(i), v = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((u = m.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? m.converter : ie;
      this._$Em = i;
      const A = v.fromAttribute(t, m.type);
      this[i] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(i)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, i = !1, u) {
    var l;
    if (e !== void 0) {
      const m = this.constructor;
      if (i === !1 && (u = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? ge)(u, t) || n.useDefault && n.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
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
        const { wrapped: m } = l, v = this[u];
        m !== !0 || this._$AL.has(u) || v === void 0 || this.C(u, void 0, l, v);
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
const X = globalThis, We = (s) => s, se = X.trustedTypes, Be = se ? se.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, Ke = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, et = "?" + I, Lt = `<${et}>`, L = document, J = () => L.createComment(""), Q = (s) => s === null || typeof s != "object" && typeof s != "function", $e = Array.isArray, zt = (s) => $e(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", fe = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ge = /-->/g, Ve = />/g, D = RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Fe = /'/g, Ze = /"/g, tt = /^(?:script|style|textarea|title)$/i, G = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), qe = /* @__PURE__ */ new WeakMap(), H = L.createTreeWalker(L, 129);
function rt(s, e) {
  if (!$e(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Be !== void 0 ? Be.createHTML(e) : e;
}
const Wt = (s, e) => {
  const t = s.length - 1, n = [];
  let i, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Z;
  for (let m = 0; m < t; m++) {
    const v = s[m];
    let A, b, w = -1, R = 0;
    for (; R < v.length && (l.lastIndex = R, b = l.exec(v), b !== null); ) R = l.lastIndex, l === Z ? b[1] === "!--" ? l = Ge : b[1] !== void 0 ? l = Ve : b[2] !== void 0 ? (tt.test(b[2]) && (i = RegExp("</" + b[2], "g")), l = D) : b[3] !== void 0 && (l = D) : l === D ? b[0] === ">" ? (l = i ?? Z, w = -1) : b[1] === void 0 ? w = -2 : (w = l.lastIndex - b[2].length, A = b[1], l = b[3] === void 0 ? D : b[3] === '"' ? Ze : Fe) : l === Ze || l === Fe ? l = D : l === Ge || l === Ve ? l = Z : (l = D, i = void 0);
    const T = l === D && s[m + 1].startsWith("/>") ? " " : "";
    u += l === Z ? v + Lt : w >= 0 ? (n.push(A), v.slice(0, w) + Ke + v.slice(w) + I + T) : v + I + (w === -2 ? m : T);
  }
  return [rt(s, u + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class K {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let u = 0, l = 0;
    const m = e.length - 1, v = this.parts, [A, b] = Wt(e, t);
    if (this.el = K.createElement(A, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (i = H.nextNode()) !== null && v.length < m; ) {
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
function V(s, e, t = s, n) {
  var l, m;
  if (e === G) return e;
  let i = n !== void 0 ? (l = t._$Co) == null ? void 0 : l[n] : t._$Cl;
  const u = Q(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== u && ((m = i == null ? void 0 : i._$AO) == null || m.call(i, !1), u === void 0 ? i = void 0 : (i = new u(s), i._$AT(s, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = i : t._$Cl = i), i !== void 0 && (e = V(s, i._$AS(s, e.values), i, n)), e;
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
    let u = H.nextNode(), l = 0, m = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let A;
        v.type === 2 ? A = new ee(u, u.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (A = new Zt(u, this, e)), this._$AV.push(A), v = n[++m];
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
      const l = new Bt(i, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
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
      const m = e;
      let v, A;
      for (e = u[0], v = 0; v < u.length - 1; v++) A = V(this, m[n + v], t, v), A === G && (A = this._$AH[v]), l || (l = !Q(A) || A !== this._$AH[v]), A === C ? e = C : e !== C && (e += (A ?? "") + u[v + 1]), this._$AH[v] = A;
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
const qt = (s, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = n._$litPart$;
  if (i === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = i = new ee(e.insertBefore(J(), u), u, void 0, t ?? {});
  }
  return i._$AI(s), i;
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
const Xt = (s) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(s, e);
  }) : customElements.define(s, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt = { attribute: !0, type: String, converter: ie, reflect: !1, hasChanged: ge }, Jt = (s = Yt, e, t) => {
  const { kind: n, metadata: i } = t;
  let u = globalThis.litPropertyMetadata.get(i);
  if (u === void 0 && globalThis.litPropertyMetadata.set(i, u = /* @__PURE__ */ new Map()), n === "setter" && ((s = Object.create(s)).wrapped = !0), u.set(t.name, s), n === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const v = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, v, s, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(l, void 0, s, m), m;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(m) {
      const v = this[l];
      e.call(this, m), this.requestUpdate(l, v, s, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Qt(s) {
  return (e, t) => typeof t == "object" ? Jt(s, e, t) : ((n, i, u) => {
    const l = i.hasOwnProperty(u);
    return i.constructor.createProperty(u, n), l ? Object.getOwnPropertyDescriptor(i, u) : void 0;
  })(s, e, t);
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
(function(s) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Xe == "object" ? Xe : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = i(s);
    typeof t.Reflect < "u" && (n = i(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = s);
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
    function m() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", u = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !m && !v, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return he(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return he({ __proto__: null });
      } : function() {
        return he({});
      },
      has: A ? function(r, o) {
        return n.call(r, o);
      } : function(r, o) {
        return o in r;
      },
      get: A ? function(r, o) {
        return n.call(r, o) ? r[o] : void 0;
      } : function(r, o) {
        return r[o];
      }
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ot(), N = typeof WeakMap == "function" ? WeakMap : Pt(), z = i ? Symbol.for("@reflect-metadata:registry") : void 0, te = At(), we = bt(te);
    function it(r, o, a, h) {
      if (_(a)) {
        if (!Re(r))
          throw new TypeError();
        if (!Te(o))
          throw new TypeError();
        return pt(r, o);
      } else {
        if (!Re(r))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(h) && !_(h) && !W(h))
          throw new TypeError();
        return W(h) && (h = void 0), a = x(a), vt(r, o, a, h);
      }
    }
    e("decorate", it);
    function st(r, o) {
      function a(h, y) {
        if (!O(h))
          throw new TypeError();
        if (!_(y) && !$t(y))
          throw new TypeError();
        Me(r, o, h, y);
      }
      return a;
    }
    e("metadata", st);
    function ot(r, o, a, h) {
      if (!O(a))
        throw new TypeError();
      return _(h) || (h = x(h)), Me(r, o, a, h);
    }
    e("defineMetadata", ot);
    function at(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), Ae(r, o, a);
    }
    e("hasMetadata", at);
    function ut(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), ae(r, o, a);
    }
    e("hasOwnMetadata", ut);
    function lt(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), be(r, o, a);
    }
    e("getMetadata", lt);
    function ht(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), Ee(r, o, a);
    }
    e("getOwnMetadata", ht);
    function ct(r, o) {
      if (!O(r))
        throw new TypeError();
      return _(o) || (o = x(o)), Oe(r, o);
    }
    e("getMetadataKeys", ct);
    function ft(r, o) {
      if (!O(r))
        throw new TypeError();
      return _(o) || (o = x(o)), Pe(r, o);
    }
    e("getOwnMetadataKeys", ft);
    function dt(r, o, a) {
      if (!O(o))
        throw new TypeError();
      if (_(a) || (a = x(a)), !O(o))
        throw new TypeError();
      _(a) || (a = x(a));
      var h = F(
        o,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, o, a);
    }
    e("deleteMetadata", dt);
    function pt(r, o) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(o);
        if (!_(y) && !W(y)) {
          if (!Te(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function vt(r, o, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var S = r[y], P = S(o, a, h);
        if (!_(P) && !W(P)) {
          if (!O(P))
            throw new TypeError();
          h = P;
        }
      }
      return h;
    }
    function Ae(r, o, a) {
      var h = ae(r, o, a);
      if (h)
        return !0;
      var y = le(o);
      return W(y) ? !1 : Ae(r, y, a);
    }
    function ae(r, o, a) {
      var h = F(
        o,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Ce(h.OrdinaryHasOwnMetadata(r, o, a));
    }
    function be(r, o, a) {
      var h = ae(r, o, a);
      if (h)
        return Ee(r, o, a);
      var y = le(o);
      if (!W(y))
        return be(r, y, a);
    }
    function Ee(r, o, a) {
      var h = F(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, o, a);
    }
    function Me(r, o, a, h) {
      var y = F(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, o, a, h);
    }
    function Oe(r, o) {
      var a = Pe(r, o), h = le(r);
      if (h === null)
        return a;
      var y = Oe(h, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var S = new T(), P = [], g = 0, c = a; g < c.length; g++) {
        var f = c[g], d = S.has(f);
        d || (S.add(f), P.push(f));
      }
      for (var p = 0, $ = y; p < $.length; p++) {
        var f = $[p], d = S.has(f);
        d || (S.add(f), P.push(f));
      }
      return P;
    }
    function Pe(r, o) {
      var a = F(
        r,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, o) : [];
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
    function _t(r, o) {
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
      return mt(r);
    }
    function mt(r, o) {
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
    function gt(r) {
      return "" + r;
    }
    function x(r) {
      var o = _t(r);
      return yt(o) ? o : gt(o);
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
    function ue(r, o) {
      return r === o || r !== r && o !== o;
    }
    function ke(r, o) {
      var a = r[o];
      if (a != null) {
        if (!re(a))
          throw new TypeError();
        return a;
      }
    }
    function xe(r) {
      var o = ke(r, l);
      if (!re(o))
        throw new TypeError();
      var a = o.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ne(r) {
      return r.value;
    }
    function Ie(r) {
      var o = r.next();
      return o.done ? !1 : o;
    }
    function Ue(r) {
      var o = r.return;
      o && o.call(r);
    }
    function le(r) {
      var o = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === w || o !== w)
        return o;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var y = h.constructor;
      return typeof y != "function" || y === r ? o : y;
    }
    function wt() {
      var r;
      !_(z) && typeof t.Reflect < "u" && !(z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Et(t.Reflect));
      var o, a, h, y = new N(), S = {
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
          case _(o):
            o = p;
            break;
          case o === p:
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
      function g(p, $) {
        if (!_(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(p, $))
              return o;
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
        return _(E) || (M = E.get($)), _(M) && (M = g(p, $), _(M) || (_(E) && (E = new R(), y.set(p, E)), E.set($, M))), M;
      }
      function f(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(h) && h.has(p);
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
      var o = new N(), a = {
        isProviderFor: function(f, d) {
          var p = o.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return te.registerProvider(a), a;
      function h(f, d, p) {
        var $ = o.get(f), E = !1;
        if (_($)) {
          if (!p)
            return;
          $ = new R(), o.set(f, $), E = !0;
        }
        var M = $.get(d);
        if (_(M)) {
          if (!p)
            return;
          if (M = new R(), $.set(d, M), !r.setProvider(f, d, a))
            throw $.delete(d), E && o.delete(f), new Error("Wrong provider for target.");
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
      function g(f, d) {
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
          var E = o.get(d);
          _(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Et(r) {
      var o = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, S = r.deleteMetadata, P = new N(), g = {
        isProviderFor: function(c, f) {
          var d = P.get(c);
          return !_(d) && d.has(f) ? !0 : y(c, f).length ? (_(d) && (d = new T(), P.set(c, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: S
      };
      return g;
    }
    function F(r, o, a) {
      var h = te.getProvider(r, o);
      if (!_(h))
        return h;
      if (a) {
        if (te.setProvider(r, o, we))
          return we;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var r = {}, o = [], a = (
        /** @class */
        function() {
          function g(c, f, d) {
            this._index = 0, this._keys = c, this._values = f, this._selector = d;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, g;
        }()
      ), h = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, g.prototype.set = function(c, f) {
            var d = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, g.prototype.delete = function(c) {
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
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, S);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, f) {
            if (!ue(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ue(this._keys[d], c)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return h;
      function y(g, c) {
        return g;
      }
      function S(g, c) {
        return c;
      }
      function P(g, c) {
        return [g, c];
      }
    }
    function Ot() {
      var r = (
        /** @class */
        function() {
          function o() {
            this._map = new R();
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return r;
    }
    function Pt() {
      var r = 16, o = b.create(), a = h();
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
          c = "@@WeakMap@@" + g();
        while (b.has(o, c));
        return o[c] = !0, c;
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
      function g() {
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
function Kt(s) {
  return typeof s.name == "string" && typeof s.version == "string" && typeof s.title == "string" && typeof s.elementSelector == "string" && typeof s.group == "string" && typeof s.iconName == "string";
}
function er(s) {
  return function(e) {
    if (Kt(s)) {
      const t = {
        version: s.version,
        name: s.name,
        title: s.title,
        selector: s.elementSelector,
        category: s.group,
        icon: s.iconName,
        layoutKind: s.layoutKind,
        environment: s.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${s.elementSelector}-${s.version}`;
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
function tr(s) {
  return er(s);
}
function rr(s) {
  var t;
  if (((t = s == null ? void 0 : s.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function nr(s) {
  return function(e, t) {
    try {
      rr(s);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let i = !0;
      if (typeof t == "string") {
        try {
          i = typeof e[t] != "function";
        } catch {
          i = !0;
        }
        i && (s.fieldMappings = s.fieldMappings ?? t);
      }
      n.push(s), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ir(s) {
  return nr(s);
}
var ve;
(function(s) {
  s.TEXT_INPUT = "text-input", s.PASSWORD_INPUT = "password-input", s.DROPDOWN = "dropdown", s.CHECKBOX = "checkbox", s.RADIO_BUTTON = "radio-button", s.RANGE_SLIDER = "range-slider", s.FILE_INPUT = "file-input", s.DATE_PICKER = "date-picker", s.COLOR_PICKER = "color-picker", s.NUMBER_INPUT = "number-input", s.TEXTAREA = "textarea", s.MULTI_SELECT = "multi-select", s.POPUP_DROPDOWN = "popup-dropdown", s.LAYOUT_PICKER = "layout-picker", s.RESPONSIVE_OVERRIDE = "responsive-override", s.IMAGE_PICKER = "image-picker", s.CHIPS = "chips";
})(ve || (ve = {}));
var ye;
(function(s) {
  s.PROPERTY = "property", s.EVENT = "event", s.ACTION = "action";
})(ye || (ye = {}));
var sr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, nt = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? or(e, t) : e, u = s.length - 1, l; u >= 0; u--)
    (l = s[u]) && (i = (n ? l(e, t, i) : l(i)) || i);
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
