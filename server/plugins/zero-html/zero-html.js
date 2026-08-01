var Dt = Object.defineProperty;
var jt = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var We;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(y, A) {
      return function(b, w) {
        Object.defineProperty(y, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
      };
    }
    function l() {
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
    function _() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !_ && !y, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), H = typeof WeakMap == "function" ? WeakMap : Rt(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Ct(), Se = Pt(ie);
    function ct(i, o, a, c) {
      if (m(a)) {
        if (!He(i))
          throw new TypeError();
        if (!Ne(o))
          throw new TypeError();
        return $t(i, o);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !m(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), a = R(a), wt(i, o, a, c);
      }
    }
    e("decorate", ct);
    function ht(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!m(v) && !Mt(v))
          throw new TypeError();
        Pe(i, o, c, v);
      }
      return a;
    }
    e("metadata", ht);
    function dt(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = R(c)), Pe(i, o, a, c);
    }
    e("defineMetadata", dt);
    function ft(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Me(i, o, a);
    }
    e("hasMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), he(i, o, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Oe(i, o, a);
    }
    e("getMetadata", yt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Ce(i, o, a);
    }
    e("getOwnMetadata", vt);
    function _t(i, o) {
      if (!O(i))
        throw new TypeError();
      return m(o) || (o = R(o)), xe(i, o);
    }
    e("getMetadataKeys", _t);
    function mt(i, o) {
      if (!O(i))
        throw new TypeError();
      return m(o) || (o = R(o)), Te(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function gt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (m(a) || (a = R(a)), !O(o))
        throw new TypeError();
      m(a) || (a = R(a));
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", gt);
    function $t(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !W(v)) {
          if (!Ne(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function wt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], C = P(o, a, c);
        if (!m(C) && !W(C)) {
          if (!O(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function Me(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return !0;
      var v = fe(o);
      return W(v) ? !1 : Me(i, v, a);
    }
    function he(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return Ce(i, o, a);
      var v = fe(o);
      if (!W(v))
        return Oe(i, v, a);
    }
    function Ce(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pe(i, o, a, c) {
      var v = Z(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xe(i, o) {
      var a = Te(i, o), c = fe(i);
      if (c === null)
        return a;
      var v = xe(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), C = [], g = 0, h = a; g < h.length; g++) {
        var d = h[g], f = P.has(d);
        f || (P.add(d), C.push(d));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var d = $[p], f = P.has(d);
        f || (P.add(d), C.push(d));
      }
      return C;
    }
    function Te(i, o) {
      var a = Z(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function ke(i) {
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
    function m(i) {
      return i === void 0;
    }
    function W(i) {
      return i === null;
    }
    function bt(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
      switch (ke(i)) {
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
      var a = "string", c = De(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (se(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (se(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function R(i) {
      var o = At(i);
      return bt(o) ? o : St(o);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function se(i) {
      return typeof i == "function";
    }
    function Ne(i) {
      return typeof i == "function";
    }
    function Mt(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(i, o) {
      return i === o || i !== i && o !== o;
    }
    function De(i, o) {
      var a = i[o];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function je(i) {
      var o = De(i, u);
      if (!se(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ue(i) {
      return i.value;
    }
    function Ie(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function fe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ot() {
      var i;
      !m(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var o, a, c, v = new H(), P = {
        registerProvider: C,
        getProvider: h,
        setProvider: f
      };
      return P;
      function C(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function g(p, $) {
        if (!m(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!m(c))
              for (var E = je(c); ; ) {
                var S = Ie(E);
                if (!S)
                  return;
                var k = Ue(S);
                if (k.isProviderFor(p, $))
                  return Le(E), k;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, $))
          return i;
      }
      function h(p, $) {
        var E = v.get(p), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(p, $), m(S) || (m(E) && (E = new x(), v.set(p, E)), E.set($, S))), S;
      }
      function d(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var k = v.get(p);
          m(k) && (k = new x(), v.set(p, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !m(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), m(i) && (i = Ot()), !m(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new H(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return ie.registerProvider(a), a;
      function c(d, f, p) {
        var $ = o.get(d), E = !1;
        if (m($)) {
          if (!p)
            return;
          $ = new x(), o.set(d, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new x(), $.set(f, S), !i.setProvider(d, f, a))
            throw $.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return m($) ? !1 : Re($.has(d));
      }
      function P(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(d);
      }
      function C(d, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function g(d, f) {
        var p = [], $ = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return p;
        for (var E = $.keys(), S = je(E), k = 0; ; ) {
          var ze = Ie(S);
          if (!ze)
            return p.length = k, p;
          var Ht = Ue(ze);
          try {
            p[k] = Ht;
          } catch (Nt) {
            try {
              Le(S);
            } finally {
              throw Nt;
            }
          }
          k++;
        }
      }
      function h(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function xt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new H(), g = {
        isProviderFor: function(h, d) {
          var f = C.get(h);
          return !m(f) && f.has(d) ? !0 : v(h, d).length ? (m(f) && (f = new T(), C.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function Z(i, o, a) {
      var c = ie.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (ie.setProvider(i, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function g(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, g.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, g.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, de(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(h, d) {
            if (!de(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (de(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, h) {
        return g;
      }
      function P(g, h) {
        return h;
      }
      function C(g, h) {
        return [g, h];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new x();
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Rt() {
      var i = 16, o = b.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var p = v(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + g();
        while (b.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: b.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function C(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function g() {
        var h = C(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function It(r) {
  return function(e) {
    if (Ut(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
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
function Lt(r) {
  return It(r);
}
function zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Be(this, "_stylesApplied", !1);
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((x) => b.insertRule(x.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          y.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Bt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(r) {
  return function(e, t) {
    try {
      Bt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function $e(r) {
  return Gt(r);
}
var ae;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(ae || (ae = {}));
var K;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(K || (K = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, we = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, be = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new it(typeof r == "string" ? r : r + "", void 0, be), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new it(t, r, be);
}, Ft = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, D = globalThis, qe = D.trustedTypes, Kt = qe ? qe.emptyScript : "", ye = D.reactiveElementPolyfillSupport, Y = (r, e) => r, le = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Kt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ae = (r, e) => !qt(r, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Jt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
    var l;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : le).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = s;
      const A = y.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: _ } = u, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Y("elementProperties")] = /* @__PURE__ */ new Map(), V[Y("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: V }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xe = (r) => r, ue = J.trustedTypes, Ye = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + N, er = `<${ot}>`, z = document, ee = () => z.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, tr = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, U = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, at = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), nr = rr(1), B = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), I = z.createTreeWalker(z, 129);
function lt(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < t; _++) {
    const y = r[_];
    let A, b, w = -1, x = 0;
    for (; x < y.length && (u.lastIndex = x, b = u.exec(y), b !== null); ) x = u.lastIndex, u === X ? b[1] === "!--" ? u = Je : b[1] !== void 0 ? u = Qe : b[2] !== void 0 ? (at.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = U) : b[3] !== void 0 && (u = U) : u === U ? b[0] === ">" ? (u = s ?? X, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? U : b[3] === '"' ? et : Ke) : u === et || u === Ke ? u = U : u === Je || u === Qe ? u = X : (u = U, s = void 0);
    const T = u === U && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? y + er : w >= 0 ? (n.push(A), y.slice(0, w) + st + y.slice(w) + N + T) : y + N + (w === -2 ? _ : T);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, y = this.parts, [A, b] = ir(e, t);
    if (this.el = re.createElement(A, n), I.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = I.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(st)) {
          const x = b[u++], T = s.getAttribute(w).split(N), H = /([.?@])?(.*)/.exec(x);
          y.push({ type: 1, index: l, name: H[2], strings: T, ctor: H[1] === "." ? or : H[1] === "?" ? ar : H[1] === "@" ? lr : ce }), s.removeAttribute(w);
        } else w.startsWith(N) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (at.test(s.tagName)) {
          const w = s.textContent.split(N), x = w.length - 1;
          if (x > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let T = 0; T < x; T++) s.append(w[T], ee()), I.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[x], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(N, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += N.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(r, e, t = r, n) {
  var u, _;
  if (e === B) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = F(r, s._$AS(r, e.values), s, n)), e;
}
class sr {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    I.currentNode = s;
    let l = I.nextNode(), u = 0, _ = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new ne(l, l.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (A = new ur(l, this, e)), this._$AV.push(A), y = n[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = I.nextNode(), u++);
    }
    return I.currentNode = z, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ne {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = F(this, e, t), te(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new sr(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ne(this.O(ee()), this.O(ee()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = F(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== B, u && (this._$AH = e);
    else {
      const _ = e;
      let y, A;
      for (e = l[0], y = 0; y < l.length - 1; y++) A = F(this, _[n + y], t, y), A === B && (A = this._$AH[y]), u || (u = !te(A) || A !== this._$AH[y]), A === M ? e = M : e !== M && (e += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class ar extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class lr extends ce {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? M) === B) return;
    const n = this._$AH, s = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== M && (n === M || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    F(this, e);
  }
}
const _e = J.litHtmlPolyfillSupport;
_e == null || _e(re, ne), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
let Q = class extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = cr(t, this.renderRoot, this.renderOptions);
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
    return B;
  }
};
var nt;
Q._$litElement$ = !0, Q.finalized = !0, (nt = L.litElementHydrateSupport) == null || nt.call(L, { LitElement: Q });
const me = L.litElementPolyfillSupport;
me == null || me({ LitElement: Q });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: Ae }, dr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, y, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(_) {
      const y = this[u];
      e.call(this, _), this.requestUpdate(u, y, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ut(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { CHILD: 2 }, pr = (r) => (...e) => ({ _$litDirective$: r, values: e });
class yr {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ge extends yr {
  constructor(e) {
    if (super(e), this.it = M, e.type !== fr.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === M || e == null) return this._t = void 0, this.it = e;
    if (e === B) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const t = [e];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
ge.directiveName = "unsafeHTML", ge.resultType = 1;
const vr = pr(ge);
var _r = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, q = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? mr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && _r(e, t, s), s;
};
const gr = [
  '<div style="padding:16px;border:1px dashed #cbd5e1;border-radius:10px;font-family:system-ui,sans-serif;color:#334155;">',
  '  <h3 style="margin:0 0 8px;">Hello {{ $page.vars.name }}</h3>',
  '  <p style="margin:0 0 12px;">Write any HTML here — use {{ }} for variables.</p>',
  '  <ul style="margin:0 0 12px;padding-left:18px;">',
  '    <li data-repeat="{{ $page.vars.items }}">#{{ $index }} — {{ $repeat.item }}</li>',
  "  </ul>",
  '  <button data-action="save" style="padding:8px 16px;border:0;border-radius:8px;background:#6366f1;color:#fff;cursor:pointer;">Save</button>',
  "</div>"
].join(`
`), rt = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:12px;border:1px dashed #94a3b8;border-radius:10px;background:#f8fafc;color:#475569;font-family:system-ui,sans-serif;'>",
    "<div style='display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;color:#334155;'>",
    "<span style='display:inline-flex;width:22px;height:22px;align-items:center;justify-content:center;border-radius:6px;background:#6366f1;color:#fff;font-size:10px;font-weight:700;'>&lt;/&gt;</span>",
    "HTML",
    "</div>",
    "<div style='margin-top:8px;font-size:12px;line-height:1.5;'>Raw HTML with {{variables}}, loops &amp; actions</div>",
    "</div>"
  ].join(""),
  badges: ["Advanced", "Raw HTML"],
  dynamicHints: ["{{ }} bindings", "data-repeat loops", "data-action events"]
};
function $r(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function wr(r) {
  return r.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<script[\s\S]*?>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/javascript:/gi, "");
}
let j = class extends Q {
  constructor() {
    super(...arguments), this.html = gr, this.sanitize = !0, this.handleDelegatedClick = (r) => {
      for (const e of r.composedPath()) {
        if (e === this) break;
        if (e instanceof HTMLElement && e.hasAttribute("data-action")) {
          const t = e.getAttribute("data-action") || "", n = { ...e.dataset };
          this.emitAction({ action: t, dataset: n });
          return;
        }
      }
    };
  }
  static getStudioTemplate(r) {
    var n, s, l, u, _;
    if (!r) return rt;
    const e = String(((n = r.props) == null ? void 0 : n.html) ?? ((l = (s = r.studio) == null ? void 0 : s.props) == null ? void 0 : l.html) ?? ((_ = (u = r.studio) == null ? void 0 : u.value) == null ? void 0 : _.html) ?? ""), t = e.trim() ? $r(e.trim()).slice(0, 240) : "Raw HTML with {{variables}}, loops &amp; actions";
    return {
      ...rt,
      templateHtml: [
        "<div style='padding:12px;border:1px dashed #94a3b8;border-radius:10px;background:#f8fafc;color:#475569;font-family:system-ui,sans-serif;'>",
        "<div style='display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;color:#334155;'>",
        "<span style='display:inline-flex;width:22px;height:22px;align-items:center;justify-content:center;border-radius:6px;background:#6366f1;color:#fff;font-size:10px;font-weight:700;'>&lt;/&gt;</span>",
        "HTML",
        "</div>",
        `<pre style='margin:8px 0 0;white-space:pre-wrap;word-break:break-word;font-size:11px;line-height:1.5;color:#64748b;max-height:132px;overflow:hidden;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;'>${t}</pre>`,
        "</div>"
      ].join("")
    };
  }
  get htmlConfig() {
    return this.html;
  }
  set htmlConfig(r) {
    this.html = r ?? "";
  }
  get sanitizeConfig() {
    return this.sanitize;
  }
  set sanitizeConfig(r) {
    this.sanitize = !!r;
  }
  emitAction(r) {
    this.dispatchEvent(new CustomEvent("action", {
      detail: r,
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this.handleDelegatedClick);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.handleDelegatedClick), super.disconnectedCallback();
  }
  render() {
    const r = this.sanitize ? wr(this.html ?? "") : this.html ?? "";
    return nr`${vr(r)}`;
  }
};
j.styles = Vt`
    :host {
      display: block;
      width: 100%;
    }
  `;
q([
  ut({ type: String })
], j.prototype, "html", 2);
q([
  ut({ type: Boolean })
], j.prototype, "sanitize", 2);
q([
  $e({
    attributeType: K.PROPERTY,
    uiComponentType: ae.TEXTAREA,
    displayLabel: "HTML Source",
    placeholderText: "<div>Hello {{ $page.vars.name }}</div>",
    fieldMappings: "html",
    optionItems: { rows: 12, placeholderText: "<div>Hello {{ $page.vars.name }}</div>" }
  })
], j.prototype, "htmlConfig", 1);
q([
  $e({
    attributeType: K.PROPERTY,
    uiComponentType: ae.CHECKBOX,
    displayLabel: "Basic Sanitize (strip scripts / handlers)",
    fieldMappings: "sanitize"
  })
], j.prototype, "sanitizeConfig", 1);
q([
  $e({
    attributeType: K.EVENT,
    displayLabel: "On Action",
    eventTrigger: "action"
  })
], j.prototype, "emitAction", 1);
j = q([
  Lt({
    name: "zero-html",
    version: "1.0.0",
    title: "HTML",
    elementSelector: "zero-html",
    group: "Advanced",
    iconName: "profile-icon.png"
  }),
  zt()
], j);
export {
  j as ZeroHtml,
  rt as studioTemplate
};
