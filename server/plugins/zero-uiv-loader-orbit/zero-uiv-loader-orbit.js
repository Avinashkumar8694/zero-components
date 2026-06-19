var Ut = Object.defineProperty;
var jt = (i, e, t) => e in i ? Ut(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var ze = (i, e, t) => jt(i, typeof e != "symbol" ? e + "" : e, t);
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ge;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Le == "object" ? Le : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(i);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function s(v, A) {
      return function(b, w) {
        Object.defineProperty(v, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return fe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return fe({ __proto__: null });
      } : function() {
        return fe({});
      },
      has: A ? function(n, o) {
        return r.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: A ? function(n, o) {
        return r.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), N = typeof WeakMap == "function" ? WeakMap : Tt(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, re = Mt(), Ae = Pt(re);
    function ut(n, o, a, c) {
      if (m(a)) {
        if (!Te(n))
          throw new TypeError();
        if (!ke(o))
          throw new TypeError();
        return gt(n, o);
      } else {
        if (!Te(n))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !m(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = k(a), $t(n, o, a, c);
      }
    }
    e("decorate", ut);
    function ct(n, o) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!m(y) && !St(y))
          throw new TypeError();
        Me(n, o, c, y);
      }
      return a;
    }
    e("metadata", ct);
    function dt(n, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = k(c)), Me(n, o, a, c);
    }
    e("defineMetadata", dt);
    function ht(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Ee(n, o, a);
    }
    e("hasMetadata", ht);
    function ft(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = k(a)), ce(n, o, a);
    }
    e("hasOwnMetadata", ft);
    function pt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Se(n, o, a);
    }
    e("getMetadata", pt);
    function vt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Oe(n, o, a);
    }
    e("getOwnMetadata", vt);
    function yt(n, o) {
      if (!O(n))
        throw new TypeError();
      return m(o) || (o = k(o)), Pe(n, o);
    }
    e("getMetadataKeys", yt);
    function _t(n, o) {
      if (!O(n))
        throw new TypeError();
      return m(o) || (o = k(o)), Ce(n, o);
    }
    e("getOwnMetadataKeys", _t);
    function mt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      if (m(a) || (a = k(a)), !O(o))
        throw new TypeError();
      m(a) || (a = k(a));
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", mt);
    function gt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], y = c(o);
        if (!m(y) && !G(y)) {
          if (!ke(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function $t(n, o, a, c) {
      for (var y = n.length - 1; y >= 0; --y) {
        var P = n[y], M = P(o, a, c);
        if (!m(M) && !G(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Ee(n, o, a) {
      var c = ce(n, o, a);
      if (c)
        return !0;
      var y = he(o);
      return G(y) ? !1 : Ee(n, y, a);
    }
    function ce(n, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Se(n, o, a) {
      var c = ce(n, o, a);
      if (c)
        return Oe(n, o, a);
      var y = he(o);
      if (!G(y))
        return Se(n, y, a);
    }
    function Oe(n, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Me(n, o, a, c) {
      var y = F(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, o, a, c);
    }
    function Pe(n, o) {
      var a = Ce(n, o), c = he(n);
      if (c === null)
        return a;
      var y = Pe(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), M = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      for (var p = 0, $ = y; p < $.length; p++) {
        var h = $[p], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      return M;
    }
    function Ce(n, o) {
      var a = F(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function xe(n) {
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
    function m(n) {
      return n === void 0;
    }
    function G(n) {
      return n === null;
    }
    function wt(n) {
      return typeof n == "symbol";
    }
    function O(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function bt(n, o) {
      switch (xe(n)) {
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
      var a = "string", c = Ne(n, l);
      if (c !== void 0) {
        var y = c.call(n, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return At(n);
    }
    function At(n, o) {
      var a, c;
      {
        var y = n.toString;
        if (ne(y)) {
          var c = y.call(n);
          if (!O(c))
            return c;
        }
        var a = n.valueOf;
        if (ne(a)) {
          var c = a.call(n);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(n) {
      return !!n;
    }
    function Et(n) {
      return "" + n;
    }
    function k(n) {
      var o = bt(n);
      return wt(o) ? o : Et(o);
    }
    function Te(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ne(n) {
      return typeof n == "function";
    }
    function ke(n) {
      return typeof n == "function";
    }
    function St(n) {
      switch (xe(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Ne(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ne(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(n) {
      var o = Ne(n, u);
      if (!ne(o))
        throw new TypeError();
      var a = o.call(n);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function je(n) {
      return n.value;
    }
    function Ie(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function He(n) {
      var o = n.return;
      o && o.call(n);
    }
    function he(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || o !== w)
        return o;
      var a = n.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === n ? o : y;
    }
    function Ot() {
      var n;
      !m(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Ct(t.Reflect));
      var o, a, c, y = new N(), P = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
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
            c === void 0 && (c = new R()), c.add(p);
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
              for (var E = Ue(c); ; ) {
                var S = Ie(E);
                if (!S)
                  return;
                var T = je(S);
                if (T.isProviderFor(p, $))
                  return He(E), T;
              }
          }
        }
        if (!m(n) && n.isProviderFor(p, $))
          return n;
      }
      function d(p, $) {
        var E = y.get(p), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(p, $), m(S) || (m(E) && (E = new x(), y.set(p, E)), E.set($, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(p, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var T = y.get(p);
          m(T) && (T = new x(), y.set(p, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Mt() {
      var n;
      return !m(L) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[L]), m(n) && (n = Ot()), !m(L) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Pt(n) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return re.registerProvider(a), a;
      function c(h, f, p) {
        var $ = o.get(h), E = !1;
        if (m($)) {
          if (!p)
            return;
          $ = new x(), o.set(h, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new x(), $.set(f, S), !n.setProvider(h, f, a))
            throw $.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return m($) ? !1 : Re($.has(h));
      }
      function P(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(h);
      }
      function M(h, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var p = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return p;
        for (var E = $.keys(), S = Ue(E), T = 0; ; ) {
          var De = Ie(S);
          if (!De)
            return p.length = T, p;
          var kt = je(De);
          try {
            p[T] = kt;
          } catch (Nt) {
            try {
              He(S);
            } finally {
              throw Nt;
            }
          }
          T++;
        }
      }
      function d(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Ct(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, y = n.getOwnMetadataKeys, P = n.deleteMetadata, M = new N(), g = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !m(f) && f.has(h) ? !0 : y(d, h).length ? (m(f) && (f = new R(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function F(n, o, a) {
      var c = re.getProvider(n, o);
      if (!m(c))
        return c;
      if (a) {
        if (re.setProvider(n, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, de(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!de(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (de(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function y(g, d) {
        return g;
      }
      function P(g, d) {
        return d;
      }
      function M(g, d) {
        return [g, d];
      }
    }
    function Rt() {
      var n = (
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
      return n;
    }
    function Tt() {
      var n = 16, o = b.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + g();
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: b.create() });
        }
        return d[a];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function g() {
        var d = M(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function fe(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function It(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ht(i) {
  return function(e) {
    if (It(i)) {
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
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function Dt(i) {
  return Ht(i);
}
function zt(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        ze(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((x) => b.insertRule(x.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          v.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          v.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Lt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(i) {
  return function(e, t) {
    try {
      Lt(i);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (i.fieldMappings = i.fieldMappings ?? t);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function rt(i) {
  return Gt(i);
}
var se;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker";
})(se || (se = {}));
var oe;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(oe || (oe = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, me = ie.ShadowRoot && (ie.ShadyCSS === void 0 || ie.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ge = Symbol(), We = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== ge) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (me && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (i) => new nt(typeof i == "string" ? i : i + "", void 0, ge), Bt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[l + 1], i[0]);
  return new nt(t, i, ge);
}, Vt = (i, e) => {
  if (me) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ie.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, i.appendChild(r);
  }
}, Be = me ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Wt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Xt, getPrototypeOf: Jt } = Object, j = globalThis, Ve = j.trustedTypes, Qt = Ve ? Ve.emptyScript : "", pe = j.reactiveElementPolyfillSupport, Z = (i, e) => i, ae = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Qt : null;
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
} }, $e = (i, e) => !Ft(i, e), Fe = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Fe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Fe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const e = Jt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const t = this.properties, r = [...Yt(t), ...Xt(t)];
      for (const s of r) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, s] of t) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r) t.unshift(Be(s));
    } else e !== void 0 && t.push(Be(e));
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
    return Vt(e, this.constructor.elementStyles), e;
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
    var l;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ae).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ae;
      this._$Em = s;
      const A = v.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? $e)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: _ } = u, v = this[l];
        _ !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Z("elementProperties")] = /* @__PURE__ */ new Map(), W[Z("finalized")] = /* @__PURE__ */ new Map(), pe == null || pe({ ReactiveElement: W }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, qe = (i) => i, le = Y.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, it = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + U, Kt = `<${st}>`, z = document, J = () => z.createComment(""), Q = (i) => i === null || typeof i != "object" && typeof i != "function", we = Array.isArray, er = (i) => we(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, I = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, ot = /^(?:script|style|textarea|title)$/i, tr = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), rr = tr(1), B = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function at(i, e) {
  if (!we(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const nr = (i, e) => {
  const t = i.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = q;
  for (let _ = 0; _ < t; _++) {
    const v = i[_];
    let A, b, w = -1, x = 0;
    for (; x < v.length && (u.lastIndex = x, b = u.exec(v), b !== null); ) x = u.lastIndex, u === q ? b[1] === "!--" ? u = Ye : b[1] !== void 0 ? u = Xe : b[2] !== void 0 ? (ot.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = I) : b[3] !== void 0 && (u = I) : u === I ? b[0] === ">" ? (u = s ?? q, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? I : b[3] === '"' ? Qe : Je) : u === Qe || u === Je ? u = I : u === Ye || u === Xe ? u = q : (u = I, s = void 0);
    const R = u === I && i[_ + 1].startsWith("/>") ? " " : "";
    l += u === q ? v + Kt : w >= 0 ? (r.push(A), v.slice(0, w) + it + v.slice(w) + U + R) : v + U + (w === -2 ? _ : R);
  }
  return [at(i, l + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class K {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, v = this.parts, [A, b] = nr(e, t);
    if (this.el = K.createElement(A, r), H.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = H.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(it)) {
          const x = b[u++], R = s.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: l, name: N[2], strings: R, ctor: N[1] === "." ? sr : N[1] === "?" ? or : N[1] === "@" ? ar : ue }), s.removeAttribute(w);
        } else w.startsWith(U) && (v.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ot.test(s.tagName)) {
          const w = s.textContent.split(U), x = w.length - 1;
          if (x > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let R = 0; R < x; R++) s.append(w[R], J()), H.nextNode(), v.push({ type: 2, index: ++l });
            s.append(w[x], J());
          }
        }
      } else if (s.nodeType === 8) if (s.data === st) v.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) v.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = z.createElement("template");
    return r.innerHTML = e, r;
  }
}
function V(i, e, t = i, r) {
  var u, _;
  if (e === B) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = Q(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(i), s._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = V(i, s._$AS(i, e.values), s, r)), e;
}
class ir {
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    H.currentNode = s;
    let l = H.nextNode(), u = 0, _ = 0, v = r[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let A;
        v.type === 2 ? A = new te(l, l.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), v = r[++_];
      }
      u !== (v == null ? void 0 : v.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = z, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = V(this, e, t), Q(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : er(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = K.createElement(at(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = Ke.get(e.strings);
    return t === void 0 && Ke.set(e.strings, t = new K(e)), t;
  }
  k(e) {
    we(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new te(this.O(J()), this.O(J()), this, this.options)) : r = t[s], r._$AI(l), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = qe(e).nextSibling;
      qe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ue {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = V(this, e, t, 0), u = !Q(e) || e !== this._$AH && e !== B, u && (this._$AH = e);
    else {
      const _ = e;
      let v, A;
      for (e = l[0], v = 0; v < l.length - 1; v++) A = V(this, _[r + v], t, v), A === B && (A = this._$AH[v]), u || (u = !Q(A) || A !== this._$AH[v]), A === C ? e = C : e !== C && (e += (A ?? "") + l[v + 1]), this._$AH[v] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class or extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ar extends ue {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? C) === B) return;
    const r = this._$AH, s = e === C && r !== C || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== C && (r === C || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    V(this, e);
  }
}
const ye = Y.litHtmlPolyfillSupport;
ye == null || ye(K, te), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const ur = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new te(e.insertBefore(J(), l), l, void 0, t ?? {});
  }
  return s._$AI(i), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis;
class X extends W {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ur(t, this.renderRoot, this.renderOptions);
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
}
var tt;
X._$litElement$ = !0, X.finalized = !0, (tt = D.litElementHydrateSupport) == null || tt.call(D, { LitElement: X });
const _e = D.litElementPolyfillSupport;
_e == null || _e({ LitElement: X });
(D.litElementVersions ?? (D.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: $e }, dr = (i = cr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), l.set(t.name, i), r === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, v, i, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, i, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(_) {
      const v = this[u];
      e.call(this, _), this.requestUpdate(u, v, i, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function lt(i) {
  return (e, t) => typeof t == "object" ? dr(i, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(i, e, t);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, be = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? fr(e, t) : e, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && hr(e, t, s), s;
};
const et = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;justify-content:center;padding:24px;'>",
    "<div style='width:30px;height:30px;border:4px solid #e2e8f0;border-top-color:#3b82f6;border-radius:50%;'></div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Loader", "Orbit"]
};
let ee = class extends X {
  constructor() {
    super(...arguments), this.loaderColor = "#6c63ff", this.size = 50;
  }
  static getStudioTemplate(i) {
    var s, l;
    if (!i) return et;
    const e = (((s = i.props) == null ? void 0 : s.size) ?? ((l = i.studio.props) == null ? void 0 : l.size)) || 50, t = "var(--uiv-primary-color, #6366f1)", r = "var(--uiv-secondary-color, #8b5cf6)";
    return {
      ...et,
      templateHtml: [
        `<div style='width:${e}px;height:${e}px;position:relative;display:flex;justify-content:center;align-items:center;'>`,
        `<div style='width:${e * 0.3}px;height:${e * 0.3}px;background:${t};border-radius:50%;box-shadow:0 0 15px ${t};'></div>`,
        "<div style='position:absolute;width:100%;height:100%;border:2px solid rgba(255,255,255,0.05);border-radius:50%;'>",
        `<div style='position:absolute;top:0;left:50%;width:${e * 0.2}px;height:${e * 0.2}px;background:${r};border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 10px ${r};'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  render() {
    return rr`
            <style>
                :host {
                    --uiv-loader-color: ${this.loaderColor};
                    --uiv-size: ${this.size}px;
                }
            </style>
            <div class="orbit-container" role="status" aria-busy="true" aria-label="Loading">
                <div class="center"></div>
                <div class="orbit">
                    <div class="planet"></div>
                </div>
            </div>
        `;
  }
};
ee.styles = Bt`
        :host {
            --uiv-loader-color: var(--uiv-primary-color, #6366f1);
            --uiv-loader-accent: var(--uiv-secondary-color, #8b5cf6);
            --uiv-size: 50px;
            --intensity: var(--uiv-glow-intensity, 1);
            display: inline-block;
        }

        .orbit-container {
            width: var(--uiv-size);
            height: var(--uiv-size);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .center {
            width: calc(var(--uiv-size) * 0.3);
            height: calc(var(--uiv-size) * 0.3);
            background: var(--uiv-loader-color);
            border-radius: 50%;
            box-shadow: 0 0 calc(15px * var(--intensity)) var(--uiv-loader-color);
        }

        .orbit {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            animation: spin 2s linear infinite;
        }

        .planet {
            position: absolute;
            top: 0;
            left: 50%;
            width: calc(var(--uiv-size) * 0.2);
            height: calc(var(--uiv-size) * 0.2);
            background: var(--uiv-loader-accent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px var(--uiv-loader-accent);
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
be([
  lt({ type: String }),
  rt({
    attributeType: oe.PROPERTY,
    uiComponentType: se.COLOR_PICKER,
    displayLabel: "Loader Color",
    fieldMappings: "loaderColor"
  })
], ee.prototype, "loaderColor", 2);
be([
  lt({ type: Number }),
  rt({
    attributeType: oe.PROPERTY,
    uiComponentType: se.NUMBER_INPUT,
    displayLabel: "Size",
    fieldMappings: "size"
  })
], ee.prototype, "size", 2);
ee = be([
  Dt({
    name: "zero-uiv-loader-orbit",
    version: "1.0.0",
    title: "Orbit Loader",
    elementSelector: "zero-uiv-loader-orbit",
    group: "Uiverse Loaders",
    iconName: "loader-icon.png"
  }),
  zt()
], ee);
export {
  ee as ZeroUivLoaderOrbit,
  et as orbitTemplate
};
