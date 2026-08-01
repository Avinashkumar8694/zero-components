var He = Object.defineProperty;
var Ie = (r, t, e) => t in r ? He(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ee = (r, t, e) => Ie(r, typeof t != "symbol" ? t + "" : t, e);
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
var ne;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(f, m) {
      return function(_, $) {
        Object.defineProperty(f, _, { configurable: !0, writable: !0, value: $ }), m && m(_, $);
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
    function v() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, m = !v && !f, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return Tt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Tt({ __proto__: null });
      } : function() {
        return Tt({});
      },
      has: m ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: m ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, $ = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), N = typeof WeakMap == "function" ? WeakMap : Ne(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, z = Se(), tt = Oe(z);
    function dt(i, a, o, h) {
      if (b(o)) {
        if (!qt(i))
          throw new TypeError();
        if (!Zt(a))
          throw new TypeError();
        return F(i, a);
      } else {
        if (!qt(i))
          throw new TypeError();
        if (!x(a))
          throw new TypeError();
        if (!x(h) && !b(h) && !Y(h))
          throw new TypeError();
        return Y(h) && (h = void 0), o = U(o), Z(i, a, o, h);
      }
    }
    t("decorate", dt);
    function ft(i, a) {
      function o(h, g) {
        if (!x(h))
          throw new TypeError();
        if (!b(g) && !xe(g))
          throw new TypeError();
        Ft(i, a, h, g);
      }
      return o;
    }
    t("metadata", ft);
    function pt(i, a, o, h) {
      if (!x(o))
        throw new TypeError();
      return b(h) || (h = U(h)), Ft(i, a, o, h);
    }
    t("defineMetadata", pt);
    function yt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return b(o) || (o = U(o)), wt(i, a, o);
    }
    t("hasMetadata", yt);
    function vt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return b(o) || (o = U(o)), Ct(i, a, o);
    }
    t("hasOwnMetadata", vt);
    function gt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return b(o) || (o = U(o)), Dt(i, a, o);
    }
    t("getMetadata", gt);
    function mt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return b(o) || (o = U(o)), zt(i, a, o);
    }
    t("getOwnMetadata", mt);
    function bt(i, a) {
      if (!x(i))
        throw new TypeError();
      return b(a) || (a = U(a)), Bt(i, a);
    }
    t("getMetadataKeys", bt);
    function _t(i, a) {
      if (!x(i))
        throw new TypeError();
      return b(a) || (a = U(a)), Gt(i, a);
    }
    t("getOwnMetadataKeys", _t);
    function $t(i, a, o) {
      if (!x(a))
        throw new TypeError();
      if (b(o) || (o = U(o)), !x(a))
        throw new TypeError();
      b(o) || (o = U(o));
      var h = et(
        a,
        o,
        /*Create*/
        !1
      );
      return b(h) ? !1 : h.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", $t);
    function F(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var h = i[o], g = h(a);
        if (!b(g) && !Y(g)) {
          if (!Zt(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function Z(i, a, o, h) {
      for (var g = i.length - 1; g >= 0; --g) {
        var S = i[g], C = S(a, o, h);
        if (!b(C) && !Y(C)) {
          if (!x(C))
            throw new TypeError();
          h = C;
        }
      }
      return h;
    }
    function wt(i, a, o) {
      var h = Ct(i, a, o);
      if (h)
        return !0;
      var g = Ot(a);
      return Y(g) ? !1 : wt(i, g, o);
    }
    function Ct(i, a, o) {
      var h = et(
        a,
        o,
        /*Create*/
        !1
      );
      return b(h) ? !1 : Vt(h.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Dt(i, a, o) {
      var h = Ct(i, a, o);
      if (h)
        return zt(i, a, o);
      var g = Ot(a);
      if (!Y(g))
        return Dt(i, g, o);
    }
    function zt(i, a, o) {
      var h = et(
        a,
        o,
        /*Create*/
        !1
      );
      if (!b(h))
        return h.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Ft(i, a, o, h) {
      var g = et(
        o,
        h,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(i, a, o, h);
    }
    function Bt(i, a) {
      var o = Gt(i, a), h = Ot(i);
      if (h === null)
        return o;
      var g = Bt(h, a);
      if (g.length <= 0)
        return o;
      if (o.length <= 0)
        return g;
      for (var S = new T(), C = [], w = 0, c = o; w < c.length; w++) {
        var d = c[w], p = S.has(d);
        p || (S.add(d), C.push(d));
      }
      for (var y = 0, E = g; y < E.length; y++) {
        var d = E[y], p = S.has(d);
        p || (S.add(d), C.push(d));
      }
      return C;
    }
    function Gt(i, a) {
      var o = et(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Wt(i) {
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
    function b(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Pe(i, a) {
      switch (Wt(i)) {
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
      var o = "string", h = Yt(i, l);
      if (h !== void 0) {
        var g = h.call(i, o);
        if (x(g))
          throw new TypeError();
        return g;
      }
      return Ae(i);
    }
    function Ae(i, a) {
      var o, h;
      {
        var g = i.toString;
        if (Et(g)) {
          var h = g.call(i);
          if (!x(h))
            return h;
        }
        var o = i.valueOf;
        if (Et(o)) {
          var h = o.call(i);
          if (!x(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Vt(i) {
      return !!i;
    }
    function Me(i) {
      return "" + i;
    }
    function U(i) {
      var a = Pe(i);
      return Ee(a) ? a : Me(a);
    }
    function qt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Et(i) {
      return typeof i == "function";
    }
    function Zt(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (Wt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function St(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Yt(i, a) {
      var o = i[a];
      if (o != null) {
        if (!Et(o))
          throw new TypeError();
        return o;
      }
    }
    function Xt(i) {
      var a = Yt(i, u);
      if (!Et(a))
        throw new TypeError();
      var o = a.call(i);
      if (!x(o))
        throw new TypeError();
      return o;
    }
    function Jt(i) {
      return i.value;
    }
    function Qt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Kt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Ot(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || a !== $)
        return a;
      var o = i.prototype, h = o && Object.getPrototypeOf(o);
      if (h == null || h === Object.prototype)
        return a;
      var g = h.constructor;
      return typeof g != "function" || g === i ? a : g;
    }
    function Ce() {
      var i;
      !b(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var a, o, h, g = new N(), S = {
        registerProvider: C,
        getProvider: c,
        setProvider: p
      };
      return S;
      function C(y) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case b(a):
            a = y;
            break;
          case a === y:
            break;
          case b(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            h === void 0 && (h = new T()), h.add(y);
            break;
        }
      }
      function w(y, E) {
        if (!b(a)) {
          if (a.isProviderFor(y, E))
            return a;
          if (!b(o)) {
            if (o.isProviderFor(y, E))
              return a;
            if (!b(h))
              for (var P = Xt(h); ; ) {
                var A = Qt(P);
                if (!A)
                  return;
                var j = Jt(A);
                if (j.isProviderFor(y, E))
                  return Kt(P), j;
              }
          }
        }
        if (!b(i) && i.isProviderFor(y, E))
          return i;
      }
      function c(y, E) {
        var P = g.get(y), A;
        return b(P) || (A = P.get(E)), b(A) && (A = w(y, E), b(A) || (b(P) && (P = new M(), g.set(y, P)), P.set(E, A))), A;
      }
      function d(y) {
        if (b(y))
          throw new TypeError();
        return a === y || o === y || !b(h) && h.has(y);
      }
      function p(y, E, P) {
        if (!d(P))
          throw new Error("Metadata provider not registered.");
        var A = c(y, E);
        if (A !== P) {
          if (!b(A))
            return !1;
          var j = g.get(y);
          b(j) && (j = new M(), g.set(y, j)), j.set(E, P);
        }
        return !0;
      }
    }
    function Se() {
      var i;
      return !b(H) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), b(i) && (i = Ce()), !b(H) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Oe(i) {
      var a = new N(), o = {
        isProviderFor: function(d, p) {
          var y = a.get(d);
          return b(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return z.registerProvider(o), o;
      function h(d, p, y) {
        var E = a.get(d), P = !1;
        if (b(E)) {
          if (!y)
            return;
          E = new M(), a.set(d, E), P = !0;
        }
        var A = E.get(p);
        if (b(A)) {
          if (!y)
            return;
          if (A = new M(), E.set(p, A), !i.setProvider(d, p, o))
            throw E.delete(p), P && a.delete(d), new Error("Wrong provider for target.");
        }
        return A;
      }
      function g(d, p, y) {
        var E = h(
          p,
          y,
          /*Create*/
          !1
        );
        return b(E) ? !1 : Vt(E.has(d));
      }
      function S(d, p, y) {
        var E = h(
          p,
          y,
          /*Create*/
          !1
        );
        if (!b(E))
          return E.get(d);
      }
      function C(d, p, y, E) {
        var P = h(
          y,
          E,
          /*Create*/
          !0
        );
        P.set(d, p);
      }
      function w(d, p) {
        var y = [], E = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (b(E))
          return y;
        for (var P = E.keys(), A = Xt(P), j = 0; ; ) {
          var te = Qt(A);
          if (!te)
            return y.length = j, y;
          var je = Jt(te);
          try {
            y[j] = je;
          } catch (Ue) {
            try {
              Kt(A);
            } finally {
              throw Ue;
            }
          }
          j++;
        }
      }
      function c(d, p, y) {
        var E = h(
          p,
          y,
          /*Create*/
          !1
        );
        if (b(E) || !E.delete(d))
          return !1;
        if (E.size === 0) {
          var P = a.get(p);
          b(P) || (P.delete(y), P.size === 0 && a.delete(P));
        }
        return !0;
      }
    }
    function Te(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, h = i.getOwnMetadata, g = i.getOwnMetadataKeys, S = i.deleteMetadata, C = new N(), w = {
        isProviderFor: function(c, d) {
          var p = C.get(c);
          return !b(p) && p.has(d) ? !0 : g(c, d).length ? (b(p) && (p = new T(), C.set(c, p)), p.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: S
      };
      return w;
    }
    function et(i, a, o) {
      var h = z.getProvider(i, a);
      if (!b(h))
        return h;
      if (o) {
        if (z.setProvider(i, a, tt))
          return tt;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function w(c, d, p) {
            this._index = 0, this._keys = c, this._values = d, this._selector = p;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[u] = function() {
            return this;
          }, w.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, w.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, w;
        }()
      ), h = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, w.prototype.set = function(c, d) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = d, this;
          }, w.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var p = this._keys.length, y = d + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, St(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new o(this._keys, this._values, g);
          }, w.prototype.values = function() {
            return new o(this._keys, this._values, S);
          }, w.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[u] = function() {
            return this.entries();
          }, w.prototype._find = function(c, d) {
            if (!St(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (St(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return h;
      function g(w, c) {
        return w;
      }
      function S(w, c) {
        return c;
      }
      function C(w, c) {
        return [w, c];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new M();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
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
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Ne() {
      var i = 16, a = _.create(), o = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var p = g(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? _.has(p, this._key) : !1;
          }, c.prototype.get = function(d) {
            var p = g(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? _.get(p, this._key) : void 0;
          }, c.prototype.set = function(d, p) {
            var y = g(
              d,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, c.prototype.delete = function(d) {
            var p = g(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + w();
        while (_.has(a, c));
        return a[c] = !0, c;
      }
      function g(c, d) {
        if (!n.call(c, o)) {
          if (!d)
            return;
          Object.defineProperty(c, o, { value: _.create() });
        }
        return c[o];
      }
      function S(c, d) {
        for (var p = 0; p < d; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : S(d, c), d;
        }
        return S(new Array(c), c);
      }
      function w() {
        var c = C(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", p = 0; p < i; ++p) {
          var y = c[p];
          (p === 4 || p === 6 || p === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function Tt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ne || (ne = {}));
function Le(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function De(r) {
  return function(t) {
    if (Le(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
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
function ze(r) {
  return De(r);
}
function Fe(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        ee(this, "_stylesApplied", !1);
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
        var m;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const _ = new CSSStyleSheet(), $ = (m = l.sheet) == null ? void 0 : m.cssRules;
          $ && (Array.from($).forEach((M) => _.insertRule(M.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          f.appendChild(_);
        }
        u.forEach((_) => {
          const $ = _.cloneNode(!0);
          f.appendChild($);
        });
      }
    }
    return e;
  };
}
function Be(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      Be(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function K(r) {
  return Ge(r);
}
var V;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(V || (V = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pt = globalThis, Ut = Pt.ShadowRoot && (Pt.ShadyCSS === void 0 || Pt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ht = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let me = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Ht) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Ut && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = ie.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ie.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new me(typeof r == "string" ? r : r + "", void 0, Ht), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new me(e, r, Ht);
}, qe = (r, t) => {
  if (Ut) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = Pt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, se = Ut ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Ye, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, L = globalThis, ae = L.trustedTypes, tr = ae ? ae.emptyScript : "", Rt = L.reactiveElementPolyfillSupport, it = (r, t) => r, At = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? tr : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, It = (r, t) => !Ze(r, t), oe = { attribute: !0, type: String, converter: At, reflect: !1, useDefault: !1, hasChanged: It };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = oe) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ye(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Xe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const v = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? oe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(it("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(it("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(it("properties"))) {
      const e = this.properties, n = [...Je(e), ...Qe(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(se(s));
    } else t !== void 0 && e.push(se(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    var l;
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : At).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const v = n.getPropertyOptions(s), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : At;
      this._$Em = s;
      const m = f.fromAttribute(e, v.type);
      this[s] = m ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? m, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const v = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = v.getPropertyOptions(t)), !((n.hasChanged ?? It)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(v._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: v } = u, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[it("elementProperties")] = /* @__PURE__ */ new Map(), X[it("finalized")] = /* @__PURE__ */ new Map(), Rt == null || Rt({ ReactiveElement: X }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, le = (r) => r, Mt = st.trustedTypes, ue = Mt ? Mt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, be = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, _e = "?" + I, er = `<${_e}>`, q = document, ot = () => q.createComment(""), lt = (r) => r === null || typeof r != "object" && typeof r != "function", Lt = Array.isArray, rr = (r) => Lt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", kt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, he = /-->/g, ce = />/g, B = RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), de = /'/g, fe = /"/g, $e = /^(?:script|style|textarea|title)$/i, nr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), nt = nr(1), J = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), pe = /* @__PURE__ */ new WeakMap(), G = q.createTreeWalker(q, 129);
function we(r, t) {
  if (!Lt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ue !== void 0 ? ue.createHTML(t) : t;
}
const ir = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = rt;
  for (let v = 0; v < e; v++) {
    const f = r[v];
    let m, _, $ = -1, M = 0;
    for (; M < f.length && (u.lastIndex = M, _ = u.exec(f), _ !== null); ) M = u.lastIndex, u === rt ? _[1] === "!--" ? u = he : _[1] !== void 0 ? u = ce : _[2] !== void 0 ? ($e.test(_[2]) && (s = RegExp("</" + _[2], "g")), u = B) : _[3] !== void 0 && (u = B) : u === B ? _[0] === ">" ? (u = s ?? rt, $ = -1) : _[1] === void 0 ? $ = -2 : ($ = u.lastIndex - _[2].length, m = _[1], u = _[3] === void 0 ? B : _[3] === '"' ? fe : de) : u === fe || u === de ? u = B : u === he || u === ce ? u = rt : (u = B, s = void 0);
    const T = u === B && r[v + 1].startsWith("/>") ? " " : "";
    l += u === rt ? f + er : $ >= 0 ? (n.push(m), f.slice(0, $) + be + f.slice($) + I + T) : f + I + ($ === -2 ? v : T);
  }
  return [we(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ut {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const v = t.length - 1, f = this.parts, [m, _] = ir(t, e);
    if (this.el = ut.createElement(m, n), G.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = G.nextNode()) !== null && f.length < v; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(be)) {
          const M = _[u++], T = s.getAttribute($).split(I), N = /([.?@])?(.*)/.exec(M);
          f.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? ar : N[1] === "?" ? or : N[1] === "@" ? lr : xt }), s.removeAttribute($);
        } else $.startsWith(I) && (f.push({ type: 6, index: l }), s.removeAttribute($));
        if ($e.test(s.tagName)) {
          const $ = s.textContent.split(I), M = $.length - 1;
          if (M > 0) {
            s.textContent = Mt ? Mt.emptyScript : "";
            for (let T = 0; T < M; T++) s.append($[T], ot()), G.nextNode(), f.push({ type: 2, index: ++l });
            s.append($[M], ot());
          }
        }
      } else if (s.nodeType === 8) if (s.data === _e) f.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(I, $ + 1)) !== -1; ) f.push({ type: 7, index: l }), $ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = q.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Q(r, t, e = r, n) {
  var u, v;
  if (t === J) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = lt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((v = s == null ? void 0 : s._$AO) == null || v.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Q(r, s._$AS(r, t.values), s, n)), t;
}
class sr {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, v = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let m;
        f.type === 2 ? m = new ht(l, l.nextSibling, this, t) : f.type === 1 ? m = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (m = new ur(l, this, t)), this._$AV.push(m), f = n[++v];
      }
      u !== (f == null ? void 0 : f.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = q, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ht {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Q(this, t, e), lt(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && lt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ut.createElement(we(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new sr(s, this), v = u.u(this.options);
      u.p(e), this.T(v), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = pe.get(t.strings);
    return e === void 0 && pe.set(t.strings, e = new ut(t)), e;
  }
  k(t) {
    Lt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ht(this.O(ot()), this.O(ot()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = le(t).nextSibling;
      le(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class xt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Q(this, t, e, 0), u = !lt(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const v = t;
      let f, m;
      for (t = l[0], f = 0; f < l.length - 1; f++) m = Q(this, v[n + f], e, f), m === J && (m = this._$AH[f]), u || (u = !lt(m) || m !== this._$AH[f]), m === O ? t = O : t !== O && (t += (m ?? "") + l[f + 1]), this._$AH[f] = m;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends xt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class or extends xt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class lr extends xt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Q(this, t, e, 0) ?? O) === J) return;
    const n = this._$AH, s = t === O && n !== O || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== O && (n === O || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Q(this, t);
  }
}
const Nt = st.litHtmlPolyfillSupport;
Nt == null || Nt(ut, ht), (st.litHtmlVersions ?? (st.litHtmlVersions = [])).push("3.3.3");
const hr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ht(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class at extends X {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = hr(e, this.renderRoot, this.renderOptions);
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
var ge;
at._$litElement$ = !0, at.finalized = !0, (ge = W.litElementHydrateSupport) == null || ge.call(W, { LitElement: at });
const jt = W.litElementPolyfillSupport;
jt == null || jt({ LitElement: at });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: At, reflect: !1, hasChanged: It }, dr = (r = cr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(v) {
      const f = t.get.call(this);
      t.set.call(this, v), this.requestUpdate(u, f, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(v) {
      const f = this[u];
      t.call(this, v), this.requestUpdate(u, f, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ct(r) {
  return (t, e) => typeof e == "object" ? dr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, k = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? pr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && fr(t, e, s), s;
};
const ye = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;align-items:center;gap:6px;font-family:inherit;box-sizing:border-box;'>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>‹</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:8px;background:#6366f1;color:#fff;font-size:13px;font-weight:600;'>1</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>2</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>3</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>›</span>",
    "</div>"
  ].join(""),
  labelProp: "currentPage",
  badges: ["Navigation", "Pagination"]
};
function ve(r, t, e) {
  const n = Math.max(1, Math.floor(r) || 1), s = Math.min(Math.max(1, Math.floor(t) || 1), n), l = Math.max(0, Math.floor(e) || 0), u = /* @__PURE__ */ new Set();
  u.add(1), u.add(n);
  for (let m = s - l; m <= s + l; m++)
    m >= 1 && m <= n && u.add(m);
  const v = [...u].sort((m, _) => m - _), f = [];
  for (let m = 0; m < v.length; m++)
    if (f.push(v[m]), m < v.length - 1) {
      const _ = v[m + 1] - v[m];
      _ === 2 ? f.push(v[m] + 1) : _ > 2 && f.push("ellipsis");
    }
  return f;
}
let R = class extends at {
  constructor() {
    super(...arguments), this.totalPages = 5, this.currentPage = 1, this.variant = "default", this.showFirstLast = !1, this.siblingCount = 1;
  }
  static getStudioTemplate(r) {
    var T, N, H, z, tt, dt, ft, pt, yt, vt, gt, mt, bt, _t, $t;
    if (!r) return ye;
    const t = Number(((T = r.props) == null ? void 0 : T.totalPages) ?? ((H = (N = r.studio) == null ? void 0 : N.props) == null ? void 0 : H.totalPages) ?? 5), e = Number(((z = r.props) == null ? void 0 : z.currentPage) ?? ((dt = (tt = r.studio) == null ? void 0 : tt.props) == null ? void 0 : dt.currentPage) ?? 1), n = (((ft = r.props) == null ? void 0 : ft.variant) ?? ((yt = (pt = r.studio) == null ? void 0 : pt.props) == null ? void 0 : yt.variant)) || "default", s = ((vt = r.props) == null ? void 0 : vt.showFirstLast) ?? ((mt = (gt = r.studio) == null ? void 0 : gt.props) == null ? void 0 : mt.showFirstLast) ?? !1, l = Number(((bt = r.props) == null ? void 0 : bt.siblingCount) ?? (($t = (_t = r.studio) == null ? void 0 : _t.props) == null ? void 0 : $t.siblingCount) ?? 1), u = n === "rounded" ? "999px" : "var(--uiv-border-radius, 8px)", v = n === "minimal" ? "1px solid transparent" : "1px solid var(--uiv-border-color, #e5e7eb)", f = ve(t, e, l), m = Math.min(Math.max(1, Math.floor(e) || 1), Math.max(1, Math.floor(t) || 1)), _ = (F, Z, wt = !1) => `<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:${u};border:${Z ? "1px solid transparent" : v};background:${Z ? "var(--uiv-primary-color, #6366f1)" : "transparent"};color:${Z ? "#ffffff" : wt ? "var(--uiv-text-tertiary, #9ca3af)" : "var(--uiv-text-muted, #4b5563)"};font-size:13px;font-weight:${Z ? "600" : "500"};box-sizing:border-box;'>${F}</span>`, $ = s ? _("«", !1) : "", M = f.map((F) => F === "ellipsis" ? _("…", !1, !0) : _(String(F), F === m)).join("");
    return {
      ...ye,
      templateHtml: [
        "<div style='display:inline-flex;align-items:center;gap:6px;font-family:inherit;box-sizing:border-box;'>",
        $,
        _("‹", !1),
        M,
        _("›", !1),
        s ? _("»", !1) : "",
        "</div>"
      ].join("")
    };
  }
  get totalPagesConfig() {
    return this.totalPages;
  }
  set totalPagesConfig(r) {
    this.totalPages = Math.max(1, Number(r) || 1);
  }
  get currentPageConfig() {
    return this.currentPage;
  }
  set currentPageConfig(r) {
    this.currentPage = Math.max(1, Number(r) || 1);
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "default";
  }
  get showFirstLastConfig() {
    return this.showFirstLast;
  }
  set showFirstLastConfig(r) {
    this.showFirstLast = !!r;
  }
  get siblingCountConfig() {
    return this.siblingCount;
  }
  set siblingCountConfig(r) {
    this.siblingCount = Math.max(0, Number(r) || 0);
  }
  handlePageChange(r) {
    const t = Math.max(1, Math.floor(this.totalPages) || 1), e = Math.min(Math.max(1, Math.floor(r)), t);
    e !== this.currentPage && (this.currentPage = e, this.dispatchEvent(
      new CustomEvent("on-page-change", {
        detail: { page: e, totalPages: t },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    const r = Math.max(1, Math.floor(this.totalPages) || 1), t = Math.min(Math.max(1, Math.floor(this.currentPage) || 1), r), e = ve(r, t, this.siblingCount);
    return nt`
      <div class="pagination" role="navigation" aria-label="Pagination">
        ${this.showFirstLast ? nt`<button
              ?disabled=${t <= 1}
              aria-label="First page"
              @click=${() => this.handlePageChange(1)}
            >«</button>` : ""}
        <button
          ?disabled=${t <= 1}
          aria-label="Previous page"
          @click=${() => this.handlePageChange(t - 1)}
        >‹</button>
        ${e.map(
      (n, s) => n === "ellipsis" ? nt`<span class="ellipsis" aria-hidden="true">…</span>` : nt`<button
                class=${n === t ? "active" : ""}
                aria-current=${n === t ? "page" : "false"}
                @click=${() => this.handlePageChange(n)}
              >${n}</button>`
    )}
        <button
          ?disabled=${t >= r}
          aria-label="Next page"
          @click=${() => this.handlePageChange(t + 1)}
        >›</button>
        ${this.showFirstLast ? nt`<button
              ?disabled=${t >= r}
              aria-label="Last page"
              @click=${() => this.handlePageChange(r)}
            >»</button>` : ""}
      </div>
    `;
  }
};
R.styles = Ve`
    :host {
      display: inline-block;
      --pg-primary: var(--uiv-primary-color, #6366f1);
      --pg-border: var(--uiv-border-color, #e5e7eb);
      --pg-text: var(--uiv-text-color, #1f2937);
      --pg-muted: var(--uiv-text-muted, #4b5563);
      --pg-tertiary: var(--uiv-text-tertiary, #9ca3af);
      --pg-radius: var(--uiv-border-radius, 8px);
    }

    .pagination {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      box-sizing: border-box;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 34px;
      height: 34px;
      padding: 0 8px;
      border: 1px solid var(--pg-border);
      background: transparent;
      color: var(--pg-muted);
      font-family: inherit;
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      border-radius: var(--pg-radius);
      box-sizing: border-box;
      transition: all 0.18s ease;
    }
    button:hover:not(:disabled):not(.active) {
      border-color: var(--pg-primary);
      color: var(--pg-primary);
      transform: translateY(-1px);
    }
    button:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    button.active {
      background: var(--pg-primary);
      color: #ffffff;
      border-color: transparent;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.28);
    }

    .ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 34px;
      height: 34px;
      color: var(--pg-tertiary);
      font-size: 0.8125rem;
      user-select: none;
    }

    /* variants */
    :host([variant="rounded"]) button { border-radius: 999px; }
    :host([variant="minimal"]) button { border-color: transparent; }
    :host([variant="minimal"]) button:hover:not(:disabled):not(.active) {
      background: rgba(99, 102, 241, 0.08);
      border-color: transparent;
    }
  `;
k([
  ct({ type: Number, attribute: "total-pages" })
], R.prototype, "totalPages", 2);
k([
  ct({ type: Number, attribute: "current-page" })
], R.prototype, "currentPage", 2);
k([
  ct({ type: String, reflect: !0 })
], R.prototype, "variant", 2);
k([
  ct({ type: Boolean, attribute: "show-first-last" })
], R.prototype, "showFirstLast", 2);
k([
  ct({ type: Number, attribute: "sibling-count" })
], R.prototype, "siblingCount", 2);
k([
  K({
    attributeType: D.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Total Pages",
    fieldMappings: "totalPages"
  })
], R.prototype, "totalPagesConfig", 1);
k([
  K({
    attributeType: D.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Current Page",
    fieldMappings: "currentPage"
  })
], R.prototype, "currentPageConfig", 1);
k([
  K({
    attributeType: D.PROPERTY,
    uiComponentType: V.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Default", value: "default" },
      { label: "Rounded", value: "rounded" },
      { label: "Minimal", value: "minimal" }
    ]
  })
], R.prototype, "variantConfig", 1);
k([
  K({
    attributeType: D.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Show First / Last",
    fieldMappings: "showFirstLast"
  })
], R.prototype, "showFirstLastConfig", 1);
k([
  K({
    attributeType: D.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Sibling Count",
    fieldMappings: "siblingCount"
  })
], R.prototype, "siblingCountConfig", 1);
k([
  K({
    attributeType: D.EVENT,
    displayLabel: "On Page Change",
    eventTrigger: "on-page-change"
  })
], R.prototype, "handlePageChange", 1);
R = k([
  ze({
    name: "zero-pagination",
    version: "1.0.0",
    title: "Pagination",
    elementSelector: "zero-pagination",
    group: "Navigation",
    iconName: "pagination-icon.png"
  }),
  Fe()
], R);
export {
  R as ZeroPagination,
  ye as studioTemplate
};
