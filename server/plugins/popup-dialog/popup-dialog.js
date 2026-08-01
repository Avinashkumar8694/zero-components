var Ie = Object.defineProperty;
var ze = (n, t, e) => t in n ? Ie(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Gt = (n, t, e) => ze(n, typeof t != "symbol" ? t + "" : t, e);
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Vt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = i(n);
    typeof e.Reflect < "u" && (r = i(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function i(f, m) {
      return function(A, $) {
        Object.defineProperty(f, A, { configurable: !0, writable: !0, value: $ }), m && m(A, $);
      };
    }
    function a() {
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
      return a() || u();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", a = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, m = !_ && !f, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: m ? function(o, s) {
        return r.call(o, s);
      } : function(o, s) {
        return s in o;
      },
      get: m ? function(o, s) {
        return r.call(o, s) ? o[s] : void 0;
      } : function(o, s) {
        return o[s];
      }
    }, $ = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : je(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), j = typeof WeakMap == "function" ? WeakMap : De(), G = i ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Te(), xt = ke(ot);
    function he(o, s, l, c) {
      if (g(l)) {
        if (!Nt(o))
          throw new TypeError();
        if (!Dt(s))
          throw new TypeError();
        return Ae(o, s);
      } else {
        if (!Nt(o))
          throw new TypeError();
        if (!x(s))
          throw new TypeError();
        if (!x(c) && !g(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), l = R(l), Ee(o, s, l, c);
      }
    }
    t("decorate", he);
    function fe(o, s) {
      function l(c, y) {
        if (!x(c))
          throw new TypeError();
        if (!g(y) && !Ce(y))
          throw new TypeError();
        Mt(o, s, c, y);
      }
      return l;
    }
    t("metadata", fe);
    function ve(o, s, l, c) {
      if (!x(l))
        throw new TypeError();
      return g(c) || (c = R(c)), Mt(o, s, l, c);
    }
    t("defineMetadata", ve);
    function ye(o, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), Ot(o, s, l);
    }
    t("hasMetadata", ye);
    function _e(o, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), pt(o, s, l);
    }
    t("hasOwnMetadata", _e);
    function ge(o, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), Pt(o, s, l);
    }
    t("getMetadata", ge);
    function me(o, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), Ct(o, s, l);
    }
    t("getOwnMetadata", me);
    function $e(o, s) {
      if (!x(o))
        throw new TypeError();
      return g(s) || (s = R(s)), Tt(o, s);
    }
    t("getMetadataKeys", $e);
    function be(o, s) {
      if (!x(o))
        throw new TypeError();
      return g(s) || (s = R(s)), kt(o, s);
    }
    t("getOwnMetadataKeys", be);
    function we(o, s, l) {
      if (!x(s))
        throw new TypeError();
      if (g(l) || (l = R(l)), !x(s))
        throw new TypeError();
      g(l) || (l = R(l));
      var c = Z(
        s,
        l,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(o, s, l);
    }
    t("deleteMetadata", we);
    function Ae(o, s) {
      for (var l = o.length - 1; l >= 0; --l) {
        var c = o[l], y = c(s);
        if (!g(y) && !W(y)) {
          if (!Dt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function Ee(o, s, l, c) {
      for (var y = o.length - 1; y >= 0; --y) {
        var P = o[y], O = P(s, l, c);
        if (!g(O) && !W(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ot(o, s, l) {
      var c = pt(o, s, l);
      if (c)
        return !0;
      var y = ft(s);
      return W(y) ? !1 : Ot(o, y, l);
    }
    function pt(o, s, l) {
      var c = Z(
        s,
        l,
        /*Create*/
        !1
      );
      return g(c) ? !1 : jt(c.OrdinaryHasOwnMetadata(o, s, l));
    }
    function Pt(o, s, l) {
      var c = pt(o, s, l);
      if (c)
        return Ct(o, s, l);
      var y = ft(s);
      if (!W(y))
        return Pt(o, y, l);
    }
    function Ct(o, s, l) {
      var c = Z(
        s,
        l,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(o, s, l);
    }
    function Mt(o, s, l, c) {
      var y = Z(
        l,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(o, s, l, c);
    }
    function Tt(o, s) {
      var l = kt(o, s), c = ft(o);
      if (c === null)
        return l;
      var y = Tt(c, s);
      if (y.length <= 0)
        return l;
      if (l.length <= 0)
        return y;
      for (var P = new T(), O = [], b = 0, d = l; b < d.length; b++) {
        var p = d[b], h = P.has(p);
        h || (P.add(p), O.push(p));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var p = w[v], h = P.has(p);
        h || (P.add(p), O.push(p));
      }
      return O;
    }
    function kt(o, s) {
      var l = Z(
        o,
        s,
        /*create*/
        !1
      );
      return l ? l.OrdinaryOwnMetadataKeys(o, s) : [];
    }
    function Rt(o) {
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
    function g(o) {
      return o === void 0;
    }
    function W(o) {
      return o === null;
    }
    function Se(o) {
      return typeof o == "symbol";
    }
    function x(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function xe(o, s) {
      switch (Rt(o)) {
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
      var l = "string", c = Ut(o, a);
      if (c !== void 0) {
        var y = c.call(o, l);
        if (x(y))
          throw new TypeError();
        return y;
      }
      return Oe(o);
    }
    function Oe(o, s) {
      var l, c;
      {
        var y = o.toString;
        if (st(y)) {
          var c = y.call(o);
          if (!x(c))
            return c;
        }
        var l = o.valueOf;
        if (st(l)) {
          var c = l.call(o);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function jt(o) {
      return !!o;
    }
    function Pe(o) {
      return "" + o;
    }
    function R(o) {
      var s = xe(o);
      return Se(s) ? s : Pe(s);
    }
    function Nt(o) {
      return Array.isArray ? Array.isArray(o) : o instanceof Object ? o instanceof Array : Object.prototype.toString.call(o) === "[object Array]";
    }
    function st(o) {
      return typeof o == "function";
    }
    function Dt(o) {
      return typeof o == "function";
    }
    function Ce(o) {
      switch (Rt(o)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ht(o, s) {
      return o === s || o !== o && s !== s;
    }
    function Ut(o, s) {
      var l = o[s];
      if (l != null) {
        if (!st(l))
          throw new TypeError();
        return l;
      }
    }
    function Ht(o) {
      var s = Ut(o, u);
      if (!st(s))
        throw new TypeError();
      var l = s.call(o);
      if (!x(l))
        throw new TypeError();
      return l;
    }
    function It(o) {
      return o.value;
    }
    function zt(o) {
      var s = o.next();
      return s.done ? !1 : s;
    }
    function Lt(o) {
      var s = o.return;
      s && s.call(o);
    }
    function ft(o) {
      var s = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === $ || s !== $)
        return s;
      var l = o.prototype, c = l && Object.getPrototypeOf(l);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === o ? s : y;
    }
    function Me() {
      var o;
      !g(G) && typeof e.Reflect < "u" && !(G in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (o = Re(e.Reflect));
      var s, l, c, y = new j(), P = {
        registerProvider: O,
        getProvider: d,
        setProvider: h
      };
      return P;
      function O(v) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case o === v:
            break;
          case g(s):
            s = v;
            break;
          case s === v:
            break;
          case g(l):
            l = v;
            break;
          case l === v:
            break;
          default:
            c === void 0 && (c = new T()), c.add(v);
            break;
        }
      }
      function b(v, w) {
        if (!g(s)) {
          if (s.isProviderFor(v, w))
            return s;
          if (!g(l)) {
            if (l.isProviderFor(v, w))
              return s;
            if (!g(c))
              for (var E = Ht(c); ; ) {
                var S = zt(E);
                if (!S)
                  return;
                var k = It(S);
                if (k.isProviderFor(v, w))
                  return Lt(E), k;
              }
          }
        }
        if (!g(o) && o.isProviderFor(v, w))
          return o;
      }
      function d(v, w) {
        var E = y.get(v), S;
        return g(E) || (S = E.get(w)), g(S) && (S = b(v, w), g(S) || (g(E) && (E = new M(), y.set(v, E)), E.set(w, S))), S;
      }
      function p(v) {
        if (g(v))
          throw new TypeError();
        return s === v || l === v || !g(c) && c.has(v);
      }
      function h(v, w, E) {
        if (!p(E))
          throw new Error("Metadata provider not registered.");
        var S = d(v, w);
        if (S !== E) {
          if (!g(S))
            return !1;
          var k = y.get(v);
          g(k) && (k = new M(), y.set(v, k)), k.set(w, E);
        }
        return !0;
      }
    }
    function Te() {
      var o;
      return !g(G) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (o = e.Reflect[G]), g(o) && (o = Me()), !g(G) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: o
      }), o;
    }
    function ke(o) {
      var s = new j(), l = {
        isProviderFor: function(p, h) {
          var v = s.get(p);
          return g(v) ? !1 : v.has(h);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return ot.registerProvider(l), l;
      function c(p, h, v) {
        var w = s.get(p), E = !1;
        if (g(w)) {
          if (!v)
            return;
          w = new M(), s.set(p, w), E = !0;
        }
        var S = w.get(h);
        if (g(S)) {
          if (!v)
            return;
          if (S = new M(), w.set(h, S), !o.setProvider(p, h, l))
            throw w.delete(h), E && s.delete(p), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(p, h, v) {
        var w = c(
          h,
          v,
          /*Create*/
          !1
        );
        return g(w) ? !1 : jt(w.has(p));
      }
      function P(p, h, v) {
        var w = c(
          h,
          v,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(p);
      }
      function O(p, h, v, w) {
        var E = c(
          v,
          w,
          /*Create*/
          !0
        );
        E.set(p, h);
      }
      function b(p, h) {
        var v = [], w = c(
          p,
          h,
          /*Create*/
          !1
        );
        if (g(w))
          return v;
        for (var E = w.keys(), S = Ht(E), k = 0; ; ) {
          var Bt = zt(S);
          if (!Bt)
            return v.length = k, v;
          var Ue = It(Bt);
          try {
            v[k] = Ue;
          } catch (He) {
            try {
              Lt(S);
            } finally {
              throw He;
            }
          }
          k++;
        }
      }
      function d(p, h, v) {
        var w = c(
          h,
          v,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(p))
          return !1;
        if (w.size === 0) {
          var E = s.get(h);
          g(E) || (E.delete(v), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Re(o) {
      var s = o.defineMetadata, l = o.hasOwnMetadata, c = o.getOwnMetadata, y = o.getOwnMetadataKeys, P = o.deleteMetadata, O = new j(), b = {
        isProviderFor: function(d, p) {
          var h = O.get(d);
          return !g(h) && h.has(p) ? !0 : y(d, p).length ? (g(h) && (h = new T(), O.set(d, h)), h.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: l,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function Z(o, s, l) {
      var c = ot.getProvider(o, s);
      if (!g(c))
        return c;
      if (l) {
        if (ot.setProvider(o, s, xt))
          return xt;
        throw new Error("Illegal state.");
      }
    }
    function je() {
      var o = {}, s = [], l = (
        /** @class */
        function() {
          function b(d, p, h) {
            this._index = 0, this._keys = d, this._values = p, this._selector = h;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var p = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, b;
        }()
      ), c = (
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
          }), b.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(d) {
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, b.prototype.set = function(d, p) {
            var h = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[h] = p, this;
          }, b.prototype.delete = function(d) {
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var h = this._keys.length, v = p + 1; v < h; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ht(d, this._cacheKey) && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new l(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new l(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new l(this._keys, this._values, O);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, p) {
            if (!ht(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (ht(this._keys[h], d)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function y(b, d) {
        return b;
      }
      function P(b, d) {
        return d;
      }
      function O(b, d) {
        return [b, d];
      }
    }
    function Ne() {
      var o = (
        /** @class */
        function() {
          function s() {
            this._map = new M();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(l) {
            return this._map.has(l);
          }, s.prototype.add = function(l) {
            return this._map.set(l, l), this;
          }, s.prototype.delete = function(l) {
            return this._map.delete(l);
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
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return o;
    }
    function De() {
      var o = 16, s = A.create(), l = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(p) {
            var h = y(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? A.has(h, this._key) : !1;
          }, d.prototype.get = function(p) {
            var h = y(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? A.get(h, this._key) : void 0;
          }, d.prototype.set = function(p, h) {
            var v = y(
              p,
              /*create*/
              !0
            );
            return v[this._key] = h, this;
          }, d.prototype.delete = function(p) {
            var h = y(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + b();
        while (A.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, p) {
        if (!r.call(d, l)) {
          if (!p)
            return;
          Object.defineProperty(d, l, { value: A.create() });
        }
        return d[l];
      }
      function P(d, p) {
        for (var h = 0; h < p; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : P(p, d), p;
        }
        return P(new Array(d), d);
      }
      function b() {
        var d = O(o);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var p = "", h = 0; h < o; ++h) {
          var v = d[h];
          (h === 4 || h === 6 || h === 8) && (p += "-"), v < 16 && (p += "0"), p += v.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function vt(o) {
      return o.__ = void 0, delete o.__, o;
    }
  });
})(Vt || (Vt = {}));
function Le(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Be(n) {
  return function(t) {
    if (Le(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName,
        layoutKind: n.layoutKind,
        environment: n.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, t);
          } catch {
            try {
              customElements.define(r, class extends t {
              });
            } catch (a) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, a);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ge(n) {
  return Be(n);
}
function We(n) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Gt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(a) {
        try {
          super.update(a);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var m;
        const a = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (a && _) {
          const A = new CSSStyleSheet(), $ = (m = a.sheet) == null ? void 0 : m.cssRules;
          $ && (Array.from($).forEach((M) => A.insertRule(M.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, A]);
        } else if (a) {
          const A = a.cloneNode(!0);
          f.appendChild(A);
        }
        u.forEach((A) => {
          const $ = A.cloneNode(!0);
          f.appendChild($);
        });
      }
    }
    return e;
  };
}
function Ve(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Fe(n) {
  return function(t, e) {
    try {
      Ve(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let i = !0;
      if (typeof e == "string") {
        try {
          i = typeof t[e] != "function";
        } catch {
          i = !0;
        }
        i && (n.fieldMappings = n.fieldMappings ?? e);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function ct(n) {
  return Fe(n);
}
var K;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(K || (K = {}));
var F;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(F || (F = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, bt = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let se = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Ft.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Ft.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const qe = (n) => new se(typeof n == "string" ? n : n + "", void 0, wt), Ze = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, i, a) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[a + 1], n[0]);
  return new se(e, n, wt);
}, Ye = (n, t) => {
  if (bt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), i = at.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = e.cssText, n.appendChild(r);
  }
}, qt = bt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return qe(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Je, getOwnPropertyDescriptor: Qe, getOwnPropertyNames: Ke, getOwnPropertySymbols: tr, getPrototypeOf: er } = Object, D = globalThis, Zt = D.trustedTypes, rr = Zt ? Zt.emptyScript : "", yt = D.reactiveElementPolyfillSupport, X = (n, t) => n, lt = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? rr : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, At = (n, t) => !Xe(n, t), Yt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Yt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(t, r, e);
      i !== void 0 && Je(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: i, set: a } = Qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: i, set(u) {
      const _ = i == null ? void 0 : i.call(this);
      a == null || a.call(this, u), this.requestUpdate(t, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = er(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const e = this.properties, r = [...Ke(e), ...tr(e)];
      for (const i of r) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, i] of e) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const i = this._$Eu(e, r);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) e.unshift(qt(i));
    } else t !== void 0 && e.push(qt(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ye(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var a;
    const r = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const u = (((a = r.converter) == null ? void 0 : a.toAttribute) !== void 0 ? r.converter : lt).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(i) : this.setAttribute(i, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var a, u;
    const r = this.constructor, i = r._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const _ = r.getPropertyOptions(i), f = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((a = _.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? _.converter : lt;
      this._$Em = i;
      const m = f.fromAttribute(e, _.type);
      this[i] = m ?? ((u = this._$Ej) == null ? void 0 : u.get(i)) ?? m, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, i = !1, a) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (i === !1 && (a = this[t]), r ?? (r = _.getPropertyOptions(t)), !((r.hasChanged ?? At)(a, e) || r.useDefault && r.reflect && a === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: i, wrapped: a }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), a !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, u] of this._$Ep) this[a] = u;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [a, u] of i) {
        const { wrapped: _ } = u, f = this[a];
        _ !== !0 || this._$AL.has(a) || f === void 0 || this.C(a, void 0, u, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((i) => {
        var a;
        return (a = i.hostUpdate) == null ? void 0 : a.call(i);
      }), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[X("elementProperties")] = /* @__PURE__ */ new Map(), V[X("finalized")] = /* @__PURE__ */ new Map(), yt == null || yt({ ReactiveElement: V }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xt = (n) => n, ut = J.trustedTypes, Jt = ut ? ut.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ae = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + N, nr = `<${le}>`, z = document, tt = () => z.createComment(""), et = (n) => n === null || typeof n != "object" && typeof n != "function", Et = Array.isArray, ir = (n) => Et(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, U = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, ue = /^(?:script|style|textarea|title)$/i, or = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), $t = or(1), L = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function ce(n, t) {
  if (!Et(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const sr = (n, t) => {
  const e = n.length - 1, r = [];
  let i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Y;
  for (let _ = 0; _ < e; _++) {
    const f = n[_];
    let m, A, $ = -1, M = 0;
    for (; M < f.length && (u.lastIndex = M, A = u.exec(f), A !== null); ) M = u.lastIndex, u === Y ? A[1] === "!--" ? u = Qt : A[1] !== void 0 ? u = Kt : A[2] !== void 0 ? (ue.test(A[2]) && (i = RegExp("</" + A[2], "g")), u = U) : A[3] !== void 0 && (u = U) : u === U ? A[0] === ">" ? (u = i ?? Y, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = u.lastIndex - A[2].length, m = A[1], u = A[3] === void 0 ? U : A[3] === '"' ? ee : te) : u === ee || u === te ? u = U : u === Qt || u === Kt ? u = Y : (u = U, i = void 0);
    const T = u === U && n[_ + 1].startsWith("/>") ? " " : "";
    a += u === Y ? f + nr : $ >= 0 ? (r.push(m), f.slice(0, $) + ae + f.slice($) + N + T) : f + N + ($ === -2 ? _ : T);
  }
  return [ce(n, a + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class rt {
  constructor({ strings: t, _$litType$: e }, r) {
    let i;
    this.parts = [];
    let a = 0, u = 0;
    const _ = t.length - 1, f = this.parts, [m, A] = sr(t, e);
    if (this.el = rt.createElement(m, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (i = H.nextNode()) !== null && f.length < _; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const $ of i.getAttributeNames()) if ($.endsWith(ae)) {
          const M = A[u++], T = i.getAttribute($).split(N), j = /([.?@])?(.*)/.exec(M);
          f.push({ type: 1, index: a, name: j[2], strings: T, ctor: j[1] === "." ? lr : j[1] === "?" ? ur : j[1] === "@" ? cr : dt }), i.removeAttribute($);
        } else $.startsWith(N) && (f.push({ type: 6, index: a }), i.removeAttribute($));
        if (ue.test(i.tagName)) {
          const $ = i.textContent.split(N), M = $.length - 1;
          if (M > 0) {
            i.textContent = ut ? ut.emptyScript : "";
            for (let T = 0; T < M; T++) i.append($[T], tt()), H.nextNode(), f.push({ type: 2, index: ++a });
            i.append($[M], tt());
          }
        }
      } else if (i.nodeType === 8) if (i.data === le) f.push({ type: 2, index: a });
      else {
        let $ = -1;
        for (; ($ = i.data.indexOf(N, $ + 1)) !== -1; ) f.push({ type: 7, index: a }), $ += N.length - 1;
      }
      a++;
    }
  }
  static createElement(t, e) {
    const r = z.createElement("template");
    return r.innerHTML = t, r;
  }
}
function q(n, t, e = n, r) {
  var u, _;
  if (t === L) return t;
  let i = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const a = et(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== a && ((_ = i == null ? void 0 : i._$AO) == null || _.call(i, !1), a === void 0 ? i = void 0 : (i = new a(n), i._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = i : e._$Cl = i), i !== void 0 && (t = q(n, i._$AS(n, t.values), i, r)), t;
}
class ar {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    H.currentNode = i;
    let a = H.nextNode(), u = 0, _ = 0, f = r[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let m;
        f.type === 2 ? m = new nt(a, a.nextSibling, this, t) : f.type === 1 ? m = new f.ctor(a, f.name, f.strings, this, t) : f.type === 6 && (m = new dr(a, this, t)), this._$AV.push(m), f = r[++_];
      }
      u !== (f == null ? void 0 : f.index) && (a = H.nextNode(), u++);
    }
    return H.currentNode = z, i;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class nt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, i) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = q(this, t, e), et(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== L && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ir(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var a;
    const { values: e, _$litType$: r } = t, i = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = rt.createElement(ce(r.h, r.h[0]), this.options)), r);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === i) this._$AH.p(e);
    else {
      const u = new ar(i, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, i = 0;
    for (const a of t) i === e.length ? e.push(r = new nt(this.O(tt()), this.O(tt()), this, this.options)) : r = e[i], r._$AI(a), i++;
    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const i = Xt(t).nextSibling;
      Xt(t).remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, i, a) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = a, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(t, e = this, r, i) {
    const a = this.strings;
    let u = !1;
    if (a === void 0) t = q(this, t, e, 0), u = !et(t) || t !== this._$AH && t !== L, u && (this._$AH = t);
    else {
      const _ = t;
      let f, m;
      for (t = a[0], f = 0; f < a.length - 1; f++) m = q(this, _[r + f], e, f), m === L && (m = this._$AH[f]), u || (u = !et(m) || m !== this._$AH[f]), m === C ? t = C : t !== C && (t += (m ?? "") + a[f + 1]), this._$AH[f] = m;
    }
    u && !i && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class ur extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class cr extends dt {
  constructor(t, e, r, i, a) {
    super(t, e, r, i, a), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? C) === L) return;
    const r = this._$AH, i = t === C && r !== C || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, a = t !== C && (r === C || i);
    i && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    q(this, t);
  }
}
const gt = J.litHtmlPolyfillSupport;
gt == null || gt(rt, nt), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const pr = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const a = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = i = new nt(t.insertBefore(tt(), a), a, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
let Q = class extends V {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = pr(e, this.renderRoot, this.renderOptions);
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
    return L;
  }
};
var oe;
Q._$litElement$ = !0, Q.finalized = !0, (oe = I.litElementHydrateSupport) == null || oe.call(I, { LitElement: Q });
const mt = I.litElementPolyfillSupport;
mt == null || mt({ LitElement: Q });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = Symbol.for(""), hr = (n) => {
  if ((n == null ? void 0 : n.r) === de) return n == null ? void 0 : n._$litStatic$;
}, fr = (n) => ({ _$litStatic$: n, r: de }), ne = /* @__PURE__ */ new Map(), vr = (n) => (t, ...e) => {
  const r = e.length;
  let i, a;
  const u = [], _ = [];
  let f, m = 0, A = !1;
  for (; m < r; ) {
    for (f = t[m]; m < r && (a = e[m], (i = hr(a)) !== void 0); ) f += i + t[++m], A = !0;
    m !== r && _.push(a), u.push(f), m++;
  }
  if (m === r && u.push(t[r]), A) {
    const $ = u.join("$$lit$$");
    (t = ne.get($)) === void 0 && (u.raw = u, ne.set($, t = u)), e = _;
  }
  return n(t, ...e);
}, yr = vr($t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _r = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: At }, gr = (n = _r, t, e) => {
  const { kind: r, metadata: i } = e;
  let a = globalThis.litPropertyMetadata.get(i);
  if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), a.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const f = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, f, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(_) {
      const f = this[u];
      t.call(this, _), this.requestUpdate(u, f, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function St(n) {
  return (t, e) => typeof e == "object" ? gr(n, t, e) : ((r, i, a) => {
    const u = i.hasOwnProperty(a);
    return i.constructor.createProperty(a, r), u ? Object.getOwnPropertyDescriptor(i, a) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mr = { ATTRIBUTE: 1 }, $r = (n) => (...t) => ({ _$litDirective$: n, values: t });
let br = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this._$Ct = t, this._$AM = e, this._$Ci = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe = "important", wr = " !" + pe, Ar = $r(class extends br {
  constructor(n) {
    var t;
    if (super(n), n.type !== mr.ATTRIBUTE || n.name !== "style" || ((t = n.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return Object.keys(n).reduce((t, e) => {
      const r = n[e];
      return r == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(n, [t]) {
    const { style: e } = n.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const r of this.ft) t[r] == null && (this.ft.delete(r), r.includes("-") ? e.removeProperty(r) : e[r] = null);
    for (const r in t) {
      const i = t[r];
      if (i != null) {
        this.ft.add(r);
        const a = typeof i == "string" && i.endsWith(wr);
        r.includes("-") || a ? e.setProperty(r, a ? i.slice(0, -11) : i, a ? pe : "") : e[r] = i;
      }
    }
    return L;
  }
});
var Er = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, it = (n, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? Sr(t, e) : t, a = n.length - 1, u; a >= 0; a--)
    (u = n[a]) && (i = (r ? u(t, e, i) : u(i)) || i);
  return r && i && Er(t, e, i), i;
};
const ie = () => window.zeroThemeManager, xr = {
  kind: "generic",
  templateHtml: [
    "<div style='border:1px solid rgba(0,0,0,0.1);border-radius:12px;background:#ffffff;box-shadow:0 10px 25px rgba(0,0,0,0.1);min-width:250px;overflow:hidden;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(0,0,0,0.05);background:#f8fafc;'>",
    "<span style='font-weight:600;color:#1e293b;font-size:0.9rem;'>Popup Dialog</span>",
    "<span style='color:#94a3b8;'>✖</span>",
    "</div>",
    "<div style='padding:20px;font-size:0.85rem;color:#64748b;display:flex;align-items:center;justify-content:center;min-height:80px;'>",
    "[ Dynamic Content Placeholder ]",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Popup", "Dialog"]
};
let B = class extends Q {
  constructor() {
    super(...arguments), this.open = !1, this.hasBackdrop = !0, this.config = {
      webComponentSelector: "",
      inputs: {},
      outputs: {},
      position: "center"
    };
  }
  static getStudioTemplate(n) {
    const t = "var(--uiv-surface-color, #fff)", e = "var(--uiv-border-color, #ddd)", r = "var(--uiv-text-color, #333)", i = "var(--uiv-text-muted, #666)";
    return {
      ...xr,
      templateHtml: [
        `<div style='border:1px solid ${e};border-radius:12px;background:${t};box-shadow:var(--uiv-shadow-depth, 0 4px 12px rgba(0, 0, 0, 0.1));min-width:250px;overflow:hidden;font-family:inherit;'>`,
        `<div style='display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid ${e};background:rgba(0,0,0,0.02);'>`,
        `<span style='font-weight:600;color:${r};font-size:14px;'>Popup Dialog</span>`,
        `<span style='color:${i};cursor:pointer;'>✖</span>`,
        "</div>",
        `<div style='padding:24px;font-size:14px;color:${i};display:flex;align-items:center;justify-content:center;min-height:100px;border:1px dashed rgba(0,0,0,0.05);margin:12px;border-radius:8px;'>`,
        "[ Dynamic Content Placeholder ]",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = ie()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var u;
    const { webComponentSelector: n, inputs: t, outputs: e, position: r } = this.config, i = this._getPositionStyle(r), a = (u = ie()) == null ? void 0 : u.getActiveTheme("zero-standard-themes");
    return $t`
        <style>
          ${a ? a.getGlobalStyles() : ""}
          ${a ? a.getComponentStyles("dialog") : ""}
        </style>
        <div class="uiv-${a == null ? void 0 : a.id}-theme">
          <div class="popup-backdrop ${this.hasBackdrop && this.open ? "open" : ""}" @click=${this._close}></div>
          <div class="popup-container ${this.open ? "open" : ""} uiv-${a == null ? void 0 : a.id}-card uiv-${a == null ? void 0 : a.id}-glass" style=${Ar(i)}>
            <div class="popup-header uiv-${a == null ? void 0 : a.id}-text">
              <span class="uiv-${a == null ? void 0 : a.id}-text">Popup Title</span>
              <span class="close-button uiv-${a == null ? void 0 : a.id}-text" @click=${this._close}>✖</span>
            </div>
            <div class="popup-content uiv-${a == null ? void 0 : a.id}-text">
              ${this.open && n ? this._renderDynamicComponent(n, t, e) : $t`<p>No component provided.</p>`}
            </div>
            <div class="popup-arrow"></div>
          </div>
        </div>
      `;
  }
  // Renders a runtime-provided custom element. Lit's `html` cannot
  // interpolate a tag name into the tag position, so we use the static-html
  // `unsafeStatic` helper (the same pattern used by renderer-core) to build a
  // template whose tag is resolved at runtime.
  _renderDynamicComponent(n, t, e) {
    const r = fr(n);
    return yr`<${r} .inputs=${t} .outputs=${e}></${r}>`;
  }
  _getPositionStyle(n) {
    switch (n) {
      case "center":
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
      case "top-left":
        return { top: "10px", left: "10px" };
      case "top-right":
        return { top: "10px", right: "10px" };
      case "bottom-left":
        return { bottom: "10px", left: "10px" };
      case "bottom-right":
        return { bottom: "10px", right: "10px" };
      default:
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    }
  }
  handlePopupClosed(n) {
    this._close();
  }
  _close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("popup-closed", { detail: { open: this.open } }));
  }
};
B.styles = Ze`
      :host {
        display: block;
        font-family: var(--uiv-font-family, Arial, sans-serif);
        --popup-bg-color: var(--uiv-surface-color, #fff);
        --popup-border-color: var(--uiv-border-color, #ddd);
        --popup-font-color: var(--uiv-text-color, #333);
        --popup-shadow-color: var(--uiv-shadow-depth, 0 4px 12px rgba(0, 0, 0, 0.1));
        --popup-border-radius: var(--uiv-border-radius, 12px);
        --popup-font-size: 14px;
        --popup-header-color: var(--uiv-text-muted, #666);
        --popup-icon-color: var(--uiv-primary-color, #666);
        --popup-padding: 16px;
        --popup-width: auto;
        min-width: 200px;
      }
  
      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 99;
      }
  
      .popup-backdrop.open {
        display: block;
      }
  
      .popup-container {
        position: absolute;
        background-color: var(--popup-bg-color);
        border: 1px solid var(--popup-border-color);
        border-radius: var(--popup-border-radius);
        box-shadow: 0 4px 12px var(--popup-shadow-color);
        padding: var(--popup-padding);
        font-size: var(--popup-font-size);
        z-index: 100;
        width: var(--popup-width);
        transition: opacity 0.2s ease, transform 0.2s ease;
        opacity: 0;
        transform: translateY(-10px);
      }
  
      .popup-container.open {
        opacity: 1;
        transform: translateY(0);
      }
  
      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: var(--popup-header-color);
        margin-bottom: 8px;
      }
  
      .popup-content {
        font-size: var(--popup-font-size);
        color: var(--popup-font-color);
      }
  
      .close-button {
        cursor: pointer;
        color: var(--popup-icon-color);
      }
  
      .popup-arrow {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-border-color) transparent;
      }
  
      .popup-arrow-outline {
        position: absolute;
        top: -9px;
        left: 50%;
        transform: translate(-50%, -30%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-bg-color) transparent;
        z-index: 101;
      }
    `;
it([
  St({ type: Boolean }),
  ct({
    attributeType: F.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Open",
    fieldMappings: "open"
  })
], B.prototype, "open", 2);
it([
  St({ type: Boolean }),
  ct({
    attributeType: F.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Show Backdrop",
    fieldMappings: "hasBackdrop"
  })
], B.prototype, "hasBackdrop", 2);
it([
  St({ type: Object }),
  ct({
    attributeType: F.PROPERTY,
    uiComponentType: K.TEXTAREA,
    displayLabel: "Config (JSON)",
    fieldMappings: "config"
  })
], B.prototype, "config", 2);
it([
  ct({
    attributeType: F.EVENT,
    displayLabel: "On Popup Closed",
    eventTrigger: "popup-closed"
  })
], B.prototype, "handlePopupClosed", 1);
B = it([
  Ge({
    name: "popup-dialog",
    version: "1.0.0",
    title: "Popup dialog",
    elementSelector: "zero-popup-dialog",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  We()
], B);
export {
  B as PopupDialog,
  xr as dialogTemplate
};
