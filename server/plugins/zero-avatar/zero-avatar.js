var je = Object.defineProperty;
var He = (r, t, e) => t in r ? je(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var re = (r, t, e) => He(r, typeof t != "symbol" ? t + "" : t, e);
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var e = typeof globalThis == "object" ? globalThis : typeof ie == "object" ? ie : typeof self == "object" ? self : typeof this == "object" ? this : m(), i = s(r);
    typeof e.Reflect < "u" && (i = s(e.Reflect, i)), t(i, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, $) {
      return function(E, _) {
        Object.defineProperty(p, E, { configurable: !0, writable: !0, value: _ }), $ && $(E, _);
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
    function m() {
      return l() || u();
    }
  })(function(t, e) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, $ = !m && !p, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return zt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return zt({ __proto__: null });
      } : function() {
        return zt({});
      },
      has: $ ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: $ ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, _ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ne(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : De(), I = typeof WeakMap == "function" ? WeakMap : Ie(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, Z = Te(), vt = Re(Z);
    function gt(n, o, a, h) {
      if (g(a)) {
        if (!Yt(n))
          throw new TypeError();
        if (!Zt(o))
          throw new TypeError();
        return Ot(n, o);
      } else {
        if (!Yt(n))
          throw new TypeError();
        if (!A(o))
          throw new TypeError();
        if (!A(h) && !g(h) && !H(h))
          throw new TypeError();
        return H(h) && (h = void 0), a = U(a), xt(n, o, a, h);
      }
    }
    t("decorate", gt);
    function mt(n, o) {
      function a(h, v) {
        if (!A(h))
          throw new TypeError();
        if (!g(v) && !Me(v))
          throw new TypeError();
        it(n, o, h, v);
      }
      return a;
    }
    t("metadata", mt);
    function _t(n, o, a, h) {
      if (!A(a))
        throw new TypeError();
      return g(h) || (h = U(h)), it(n, o, a, h);
    }
    t("defineMetadata", _t);
    function bt(n, o, a) {
      if (!A(o))
        throw new TypeError();
      return g(a) || (a = U(a)), tt(n, o, a);
    }
    t("hasMetadata", bt);
    function wt(n, o, a) {
      if (!A(o))
        throw new TypeError();
      return g(a) || (a = U(a)), X(n, o, a);
    }
    t("hasOwnMetadata", wt);
    function $t(n, o, a) {
      if (!A(o))
        throw new TypeError();
      return g(a) || (a = U(a)), et(n, o, a);
    }
    t("getMetadata", $t);
    function Et(n, o, a) {
      if (!A(o))
        throw new TypeError();
      return g(a) || (a = U(a)), rt(n, o, a);
    }
    t("getOwnMetadata", Et);
    function St(n, o) {
      if (!A(n))
        throw new TypeError();
      return g(o) || (o = U(o)), nt(n, o);
    }
    t("getMetadataKeys", St);
    function At(n, o) {
      if (!A(n))
        throw new TypeError();
      return g(o) || (o = U(o)), st(n, o);
    }
    t("getOwnMetadataKeys", At);
    function Ct(n, o, a) {
      if (!A(o))
        throw new TypeError();
      if (g(a) || (a = U(a)), !A(o))
        throw new TypeError();
      g(a) || (a = U(a));
      var h = at(
        o,
        a,
        /*Create*/
        !1
      );
      return g(h) ? !1 : h.OrdinaryDeleteMetadata(n, o, a);
    }
    t("deleteMetadata", Ct);
    function Ot(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var h = n[a], v = h(o);
        if (!g(v) && !H(v)) {
          if (!Zt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function xt(n, o, a, h) {
      for (var v = n.length - 1; v >= 0; --v) {
        var P = n[v], M = P(o, a, h);
        if (!g(M) && !H(M)) {
          if (!A(M))
            throw new TypeError();
          h = M;
        }
      }
      return h;
    }
    function tt(n, o, a) {
      var h = X(n, o, a);
      if (h)
        return !0;
      var v = Ut(o);
      return H(v) ? !1 : tt(n, v, a);
    }
    function X(n, o, a) {
      var h = at(
        o,
        a,
        /*Create*/
        !1
      );
      return g(h) ? !1 : Ft(h.OrdinaryHasOwnMetadata(n, o, a));
    }
    function et(n, o, a) {
      var h = X(n, o, a);
      if (h)
        return rt(n, o, a);
      var v = Ut(o);
      if (!H(v))
        return et(n, v, a);
    }
    function rt(n, o, a) {
      var h = at(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(h))
        return h.OrdinaryGetOwnMetadata(n, o, a);
    }
    function it(n, o, a, h) {
      var v = at(
        a,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, h);
    }
    function nt(n, o) {
      var a = st(n, o), h = Ut(n);
      if (h === null)
        return a;
      var v = nt(h, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), M = [], b = 0, c = a; b < c.length; b++) {
        var d = c[b], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      for (var y = 0, w = v; y < w.length; y++) {
        var d = w[y], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      return M;
    }
    function st(n, o) {
      var a = at(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function ot(n) {
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
    function g(n) {
      return n === void 0;
    }
    function H(n) {
      return n === null;
    }
    function Mt(n) {
      return typeof n == "symbol";
    }
    function A(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Ce(n, o) {
      switch (ot(n)) {
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
      var a = "string", h = Xt(n, l);
      if (h !== void 0) {
        var v = h.call(n, a);
        if (A(v))
          throw new TypeError();
        return v;
      }
      return Oe(n);
    }
    function Oe(n, o) {
      var a, h;
      {
        var v = n.toString;
        if (Pt(v)) {
          var h = v.call(n);
          if (!A(h))
            return h;
        }
        var a = n.valueOf;
        if (Pt(a)) {
          var h = a.call(n);
          if (!A(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Ft(n) {
      return !!n;
    }
    function xe(n) {
      return "" + n;
    }
    function U(n) {
      var o = Ce(n);
      return Mt(o) ? o : xe(o);
    }
    function Yt(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function Pt(n) {
      return typeof n == "function";
    }
    function Zt(n) {
      return typeof n == "function";
    }
    function Me(n) {
      switch (ot(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function It(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Xt(n, o) {
      var a = n[o];
      if (a != null) {
        if (!Pt(a))
          throw new TypeError();
        return a;
      }
    }
    function Jt(n) {
      var o = Xt(n, u);
      if (!Pt(o))
        throw new TypeError();
      var a = o.call(n);
      if (!A(a))
        throw new TypeError();
      return a;
    }
    function Qt(n) {
      return n.value;
    }
    function Kt(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function te(n) {
      var o = n.return;
      o && o.call(n);
    }
    function Ut(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === _ || o !== _)
        return o;
      var a = n.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var v = h.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function Pe() {
      var n;
      !g(j) && typeof e.Reflect < "u" && !(j in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (n = ke(e.Reflect));
      var o, a, h, v = new I(), P = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return P;
      function M(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === y:
            break;
          case g(o):
            o = y;
            break;
          case o === y:
            break;
          case g(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            h === void 0 && (h = new k()), h.add(y);
            break;
        }
      }
      function b(y, w) {
        if (!g(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!g(h))
              for (var S = Jt(h); ; ) {
                var C = Kt(S);
                if (!C)
                  return;
                var N = Qt(C);
                if (N.isProviderFor(y, w))
                  return te(S), N;
              }
          }
        }
        if (!g(n) && n.isProviderFor(y, w))
          return n;
      }
      function c(y, w) {
        var S = v.get(y), C;
        return g(S) || (C = S.get(w)), g(C) && (C = b(y, w), g(C) || (g(S) && (S = new x(), v.set(y, S)), S.set(w, C))), C;
      }
      function d(y) {
        if (g(y))
          throw new TypeError();
        return o === y || a === y || !g(h) && h.has(y);
      }
      function f(y, w, S) {
        if (!d(S))
          throw new Error("Metadata provider not registered.");
        var C = c(y, w);
        if (C !== S) {
          if (!g(C))
            return !1;
          var N = v.get(y);
          g(N) && (N = new x(), v.set(y, N)), N.set(w, S);
        }
        return !0;
      }
    }
    function Te() {
      var n;
      return !g(j) && A(e.Reflect) && Object.isExtensible(e.Reflect) && (n = e.Reflect[j]), g(n) && (n = Pe()), !g(j) && A(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Re(n) {
      var o = new I(), a = {
        isProviderFor: function(d, f) {
          var y = o.get(d);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return Z.registerProvider(a), a;
      function h(d, f, y) {
        var w = o.get(d), S = !1;
        if (g(w)) {
          if (!y)
            return;
          w = new x(), o.set(d, w), S = !0;
        }
        var C = w.get(f);
        if (g(C)) {
          if (!y)
            return;
          if (C = new x(), w.set(f, C), !n.setProvider(d, f, a))
            throw w.delete(f), S && o.delete(d), new Error("Wrong provider for target.");
        }
        return C;
      }
      function v(d, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Ft(w.has(d));
      }
      function P(d, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(d);
      }
      function M(d, f, y, w) {
        var S = h(
          y,
          w,
          /*Create*/
          !0
        );
        S.set(d, f);
      }
      function b(d, f) {
        var y = [], w = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return y;
        for (var S = w.keys(), C = Jt(S), N = 0; ; ) {
          var ee = Kt(C);
          if (!ee)
            return y.length = N, y;
          var Ue = Qt(ee);
          try {
            y[N] = Ue;
          } catch (ze) {
            try {
              te(C);
            } finally {
              throw ze;
            }
          }
          N++;
        }
      }
      function c(d, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(d))
          return !1;
        if (w.size === 0) {
          var S = o.get(f);
          g(S) || (S.delete(y), S.size === 0 && o.delete(S));
        }
        return !0;
      }
    }
    function ke(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, h = n.getOwnMetadata, v = n.getOwnMetadataKeys, P = n.deleteMetadata, M = new I(), b = {
        isProviderFor: function(c, d) {
          var f = M.get(c);
          return !g(f) && f.has(d) ? !0 : v(c, d).length ? (g(f) && (f = new k(), M.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function at(n, o, a) {
      var h = Z.getProvider(n, o);
      if (!g(h))
        return h;
      if (a) {
        if (Z.setProvider(n, o, vt))
          return vt;
        throw new Error("Illegal state.");
      }
    }
    function Ne() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function b(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, b.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, b;
        }()
      ), h = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, b.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, b.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, It(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(c, d) {
            if (!It(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (It(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return h;
      function v(b, c) {
        return b;
      }
      function P(b, c) {
        return c;
      }
      function M(b, c) {
        return [b, c];
      }
    }
    function De() {
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
    function Ie() {
      var n = 16, o = E.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var y = v(
              d,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + b();
        while (E.has(o, c));
        return o[c] = !0, c;
      }
      function v(c, d) {
        if (!i.call(c, a)) {
          if (!d)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function P(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, c), d;
        }
        return P(new Array(c), c);
      }
      function b() {
        var c = M(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < n; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function zt(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(ne || (ne = {}));
function Le(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Be(r) {
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
        const i = `${r.elementSelector}-${r.version}`;
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
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function We(r) {
  return Be(r);
}
function Ge(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        re(this, "_stylesApplied", !1);
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
        var $;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const E = new CSSStyleSheet(), _ = ($ = l.sheet) == null ? void 0 : $.cssRules;
          _ && (Array.from(_).forEach((x) => E.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, E]);
        } else if (l) {
          const E = l.cloneNode(!0);
          p.appendChild(E);
        }
        u.forEach((E) => {
          const _ = E.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return e;
  };
}
function Ve(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qe(r) {
  return function(t, e) {
    try {
      Ve(r);
      const i = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, t);
    } catch (i) {
      console.log(i);
    }
  };
}
function L(r) {
  return qe(r);
}
var z;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(z || (z = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = globalThis, Wt = Rt.ShadowRoot && (Rt.ShadyCSS === void 0 || Rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Gt = Symbol(), se = /* @__PURE__ */ new WeakMap();
let we = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== Gt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Wt && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = se.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && se.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new we(typeof r == "string" ? r : r + "", void 0, Gt), Ye = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new we(e, r, Gt);
}, Ze = (r, t) => {
  if (Wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = Rt.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, oe = Wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Je, getOwnPropertyDescriptor: Qe, getOwnPropertyNames: Ke, getOwnPropertySymbols: tr, getPrototypeOf: er } = Object, W = globalThis, ae = W.trustedTypes, rr = ae ? ae.emptyScript : "", jt = W.reactiveElementPolyfillSupport, ut = (r, t) => r, kt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? rr : null;
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
} }, Vt = (r, t) => !Xe(r, t), le = { attribute: !0, type: String, converter: kt, reflect: !1, useDefault: !1, hasChanged: Vt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = le) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Je(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: l } = Qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? le;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ut("elementProperties"))) return;
    const t = er(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ut("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ut("properties"))) {
      const e = this.properties, i = [...Ke(e), ...tr(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(oe(s));
    } else t !== void 0 && e.push(oe(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ze(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    var l;
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : kt).toAttribute(e, i.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = i.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : kt;
      this._$Em = s;
      const $ = p.fromAttribute(e, m.type);
      this[s] = $ ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? $, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), i ?? (i = m.getPropertyOptions(t)), !((i.hasChanged ?? Vt)(l, e) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((s) => {
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
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[ut("elementProperties")] = /* @__PURE__ */ new Map(), J[ut("finalized")] = /* @__PURE__ */ new Map(), jt == null || jt({ ReactiveElement: J }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = globalThis, ue = (r) => r, Nt = ht.trustedTypes, he = Nt ? Nt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, $e = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, Ee = "?" + B, ir = `<${Ee}>`, Y = document, dt = () => Y.createComment(""), ft = (r) => r === null || typeof r != "object" && typeof r != "function", qt = Array.isArray, nr = (r) => qt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ht = `[ 	
\f\r]`, lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ce = /-->/g, de = />/g, V = RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), fe = /'/g, pe = /"/g, Se = /^(?:script|style|textarea|title)$/i, sr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Tt = sr(1), Q = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), ye = /* @__PURE__ */ new WeakMap(), q = Y.createTreeWalker(Y, 129);
function Ae(r, t) {
  if (!qt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return he !== void 0 ? he.createHTML(t) : t;
}
const or = (r, t) => {
  const e = r.length - 1, i = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = lt;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let $, E, _ = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, E = u.exec(p), E !== null); ) x = u.lastIndex, u === lt ? E[1] === "!--" ? u = ce : E[1] !== void 0 ? u = de : E[2] !== void 0 ? (Se.test(E[2]) && (s = RegExp("</" + E[2], "g")), u = V) : E[3] !== void 0 && (u = V) : u === V ? E[0] === ">" ? (u = s ?? lt, _ = -1) : E[1] === void 0 ? _ = -2 : (_ = u.lastIndex - E[2].length, $ = E[1], u = E[3] === void 0 ? V : E[3] === '"' ? pe : fe) : u === pe || u === fe ? u = V : u === ce || u === de ? u = lt : (u = V, s = void 0);
    const k = u === V && r[m + 1].startsWith("/>") ? " " : "";
    l += u === lt ? p + ir : _ >= 0 ? (i.push($), p.slice(0, _) + $e + p.slice(_) + B + k) : p + B + (_ === -2 ? m : k);
  }
  return [Ae(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class pt {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [$, E] = or(t, e);
    if (this.el = pt.createElement($, i), q.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = q.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith($e)) {
          const x = E[u++], k = s.getAttribute(_).split(B), I = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: I[2], strings: k, ctor: I[1] === "." ? lr : I[1] === "?" ? ur : I[1] === "@" ? hr : Dt }), s.removeAttribute(_);
        } else _.startsWith(B) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (Se.test(s.tagName)) {
          const _ = s.textContent.split(B), x = _.length - 1;
          if (x > 0) {
            s.textContent = Nt ? Nt.emptyScript : "";
            for (let k = 0; k < x; k++) s.append(_[k], dt()), q.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[x], dt());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Ee) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(B, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += B.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const i = Y.createElement("template");
    return i.innerHTML = t, i;
  }
}
function K(r, t, e = r, i) {
  var u, m;
  if (t === Q) return t;
  let s = i !== void 0 ? (u = e._$Co) == null ? void 0 : u[i] : e._$Cl;
  const l = ft(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = s : e._$Cl = s), s !== void 0 && (t = K(r, s._$AS(r, t.values), s, i)), t;
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
    const { el: { content: e }, parts: i } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? Y).importNode(e, !0);
    q.currentNode = s;
    let l = q.nextNode(), u = 0, m = 0, p = i[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let $;
        p.type === 2 ? $ = new yt(l, l.nextSibling, this, t) : p.type === 1 ? $ = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && ($ = new cr(l, this, t)), this._$AV.push($), p = i[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = Y, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class yt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = K(this, t, e), ft(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== Q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== T && ft(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = pt.createElement(Ae(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ar(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ye.get(t.strings);
    return e === void 0 && ye.set(t.strings, e = new pt(t)), e;
  }
  k(t) {
    qt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const l of t) s === e.length ? e.push(i = new yt(this.O(dt()), this.O(dt()), this, this.options)) : i = e[s], i._$AI(l), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = ue(t).nextSibling;
      ue(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = T;
  }
  _$AI(t, e = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = K(this, t, e, 0), u = !ft(t) || t !== this._$AH && t !== Q, u && (this._$AH = t);
    else {
      const m = t;
      let p, $;
      for (t = l[0], p = 0; p < l.length - 1; p++) $ = K(this, m[i + p], e, p), $ === Q && ($ = this._$AH[p]), u || (u = !ft($) || $ !== this._$AH[p]), $ === T ? t = T : t !== T && (t += ($ ?? "") + l[p + 1]), this._$AH[p] = $;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends Dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class ur extends Dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class hr extends Dt {
  constructor(t, e, i, s, l) {
    super(t, e, i, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = K(this, t, e, 0) ?? T) === Q) return;
    const i = this._$AH, s = t === T && i !== T || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, l = t !== T && (i === T || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class cr {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const Lt = ht.litHtmlPolyfillSupport;
Lt == null || Lt(pt, yt), (ht.litHtmlVersions ?? (ht.litHtmlVersions = [])).push("3.3.3");
const dr = (r, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = s = new yt(t.insertBefore(dt(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class ct extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = dr(e, this.renderRoot, this.renderOptions);
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
    return Q;
  }
}
var be;
ct._$litElement$ = !0, ct.finalized = !0, (be = F.litElementHydrateSupport) == null || be.call(F, { LitElement: ct });
const Bt = F.litElementPolyfillSupport;
Bt == null || Bt({ LitElement: ct });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: kt, reflect: !1, hasChanged: Vt }, pr = (r = fr, t, e) => {
  const { kind: i, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), i === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const p = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (i === "setter") {
    const { name: u } = e;
    return function(m) {
      const p = this[u];
      t.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function G(r) {
  return (t, e) => typeof e == "object" ? pr(r, t, e) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, R = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? vr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (i ? u(t, e, s) : u(s)) || s);
  return i && s && yr(t, e, s), s;
};
const ve = {
  online: "var(--uiv-color-success, #10b981)",
  away: "var(--uiv-color-warning, #f59e0b)",
  busy: "var(--uiv-color-danger, #ef4444)",
  offline: "var(--uiv-text-tertiary, #9ca3af)"
}, gr = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 }, ge = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;position:relative;box-sizing:border-box;'>",
    "<div style='width:40px;height:40px;border-radius:50%;background:rgba(99,102,241,0.14);color:#4f46e5;display:flex;align-items:center;justify-content:center;font-family:inherit;font-size:15px;font-weight:600;line-height:1;'>{{display:initials}}</div>",
    "</div>"
  ].join(""),
  labelProp: "name",
  badges: ["Data Display", "Identity"]
};
function me(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function _e(r, t) {
  const e = (t || "").trim();
  if (e) return e.slice(0, 2).toUpperCase();
  const i = (r || "").trim().split(/\s+/).filter(Boolean);
  return i.length === 0 ? "?" : i.length === 1 ? i[0].slice(0, 2).toUpperCase() : (i[0][0] + i[i.length - 1][0]).toUpperCase();
}
let O = class extends ct {
  constructor() {
    super(...arguments), this.src = "", this.name = "User", this.initials = "", this.size = "md", this.shape = "circle", this.status = "none", this.showStatus = !1, this.bgColor = "";
  }
  static getStudioTemplate(r) {
    var gt, mt, _t, bt, wt, $t, Et, St, At, Ct, Ot, xt, tt, X, et, rt, it, nt, st, ot, g, H, Mt, A;
    if (!r) return ge;
    const t = (((gt = r.props) == null ? void 0 : gt.src) ?? ((_t = (mt = r.studio) == null ? void 0 : mt.props) == null ? void 0 : _t.src)) || "", e = ((bt = r.props) == null ? void 0 : bt.name) ?? (($t = (wt = r.studio) == null ? void 0 : wt.props) == null ? void 0 : $t.name) ?? "User", i = ((Et = r.props) == null ? void 0 : Et.initials) ?? ((At = (St = r.studio) == null ? void 0 : St.props) == null ? void 0 : At.initials) ?? "", s = (((Ct = r.props) == null ? void 0 : Ct.size) ?? ((xt = (Ot = r.studio) == null ? void 0 : Ot.props) == null ? void 0 : xt.size)) || "md", l = (((tt = r.props) == null ? void 0 : tt.shape) ?? ((et = (X = r.studio) == null ? void 0 : X.props) == null ? void 0 : et.shape)) || "circle", u = (((rt = r.props) == null ? void 0 : rt.status) ?? ((nt = (it = r.studio) == null ? void 0 : it.props) == null ? void 0 : nt.status)) || "none", m = ((st = r.props) == null ? void 0 : st.showStatus) ?? ((g = (ot = r.studio) == null ? void 0 : ot.props) == null ? void 0 : g.showStatus) ?? !1, p = (((H = r.props) == null ? void 0 : H.bgColor) ?? ((A = (Mt = r.studio) == null ? void 0 : Mt.props) == null ? void 0 : A.bgColor)) || "", $ = gr[s] || 40, E = l === "circle" ? "50%" : l === "rounded" ? "var(--uiv-border-radius, 8px)" : "0px", _ = me(_e(String(e), String(i))), x = p || "rgba(99,102,241,0.14)", k = p ? "#ffffff" : "var(--uiv-primary-color, #4f46e5)", I = ve[u] || ve.offline, j = Math.max(8, Math.round($ * 0.28)), Z = t ? `<img src='${me(String(t))}' alt='${_}' style='width:100%;height:100%;object-fit:cover;display:block;'/>` : `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${x};color:${k};font-weight:600;font-size:${Math.round($ * 0.4)}px;line-height:1;'>${_}</div>`, vt = m && u !== "none" ? `<span style='position:absolute;bottom:0;right:0;width:${j}px;height:${j}px;border-radius:50%;background:${I};box-shadow:0 0 0 2px var(--uiv-surface-color, #ffffff);'></span>` : "";
    return {
      ...ge,
      templateHtml: [
        "<div style='display:inline-flex;position:relative;box-sizing:border-box;'>",
        `<div style='width:${$}px;height:${$}px;border-radius:${E};overflow:hidden;font-family:inherit;box-sizing:border-box;'>${Z}</div>`,
        vt,
        "</div>"
      ].join("")
    };
  }
  get srcConfig() {
    return this.src;
  }
  set srcConfig(r) {
    this.src = r;
  }
  get nameConfig() {
    return this.name;
  }
  set nameConfig(r) {
    this.name = r;
  }
  get initialsConfig() {
    return this.initials;
  }
  set initialsConfig(r) {
    this.initials = r;
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = r || "md";
  }
  get shapeConfig() {
    return this.shape;
  }
  set shapeConfig(r) {
    this.shape = r || "circle";
  }
  get statusConfig() {
    return this.status;
  }
  set statusConfig(r) {
    this.status = r || "none";
  }
  get showStatusConfig() {
    return this.showStatus;
  }
  set showStatusConfig(r) {
    this.showStatus = !!r;
  }
  get bgColorConfig() {
    return this.bgColor;
  }
  set bgColorConfig(r) {
    this.bgColor = r;
  }
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { name: this.name, status: this.status },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = _e(this.name, this.initials), t = this.showStatus && this.status !== "none", e = this.bgColor ? `background:${this.bgColor};` : "";
    return Tt`
      <div
        class="avatar size-${this.size} shape-${this.shape}"
        @click=${this.handleClick}
      >
        <div class="frame" style=${e}>
          ${this.src ? Tt`<img src=${this.src} alt=${this.name} />` : Tt`<span class="initials ${this.bgColor ? "filled" : ""}">${r}</span>`}
        </div>
        ${t ? Tt`<span class="status-dot status-${this.status} dot-${this.size}"></span>` : ""}
      </div>
    `;
  }
};
O.styles = Ye`
    :host {
      display: inline-block;
      --av-primary: var(--uiv-primary-color, #6366f1);
      --av-surface: var(--uiv-surface-color, #ffffff);
      --av-tint: rgba(99, 102, 241, 0.14);
      --av-text: var(--uiv-text-color, #1f2937);
    }

    .avatar {
      position: relative;
      display: inline-flex;
      box-sizing: border-box;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .avatar:hover {
      transform: translateY(-1px);
    }

    .frame {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--av-tint);
      box-sizing: border-box;
    }

    /* shapes */
    .shape-circle .frame { border-radius: 50%; }
    .shape-rounded .frame { border-radius: var(--uiv-border-radius, 8px); }
    .shape-square .frame { border-radius: 0; }

    /* sizes */
    .size-xs .frame { width: 24px; height: 24px; font-size: 0.6rem; }
    .size-sm .frame { width: 32px; height: 32px; font-size: 0.75rem; }
    .size-md .frame { width: 40px; height: 40px; font-size: 0.9rem; }
    .size-lg .frame { width: 56px; height: 56px; font-size: 1.25rem; }
    .size-xl .frame { width: 72px; height: 72px; font-size: 1.6rem; }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .initials {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--av-primary);
      font-weight: 600;
      line-height: 1;
      user-select: none;
    }
    .initials.filled { color: #ffffff; }

    .status-dot {
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--av-surface);
      box-sizing: border-box;
    }
    .status-online { background: var(--uiv-color-success, #10b981); }
    .status-away { background: var(--uiv-color-warning, #f59e0b); }
    .status-busy { background: var(--uiv-color-danger, #ef4444); }
    .status-offline { background: var(--uiv-text-tertiary, #9ca3af); }

    .dot-xs { width: 8px; height: 8px; }
    .dot-sm { width: 9px; height: 9px; }
    .dot-md { width: 11px; height: 11px; }
    .dot-lg { width: 15px; height: 15px; }
    .dot-xl { width: 18px; height: 18px; }
  `;
R([
  G({ type: String })
], O.prototype, "src", 2);
R([
  G({ type: String })
], O.prototype, "name", 2);
R([
  G({ type: String })
], O.prototype, "initials", 2);
R([
  G({ type: String })
], O.prototype, "size", 2);
R([
  G({ type: String })
], O.prototype, "shape", 2);
R([
  G({ type: String })
], O.prototype, "status", 2);
R([
  G({ type: Boolean, attribute: "show-status" })
], O.prototype, "showStatus", 2);
R([
  G({ type: String, attribute: "bg-color" })
], O.prototype, "bgColor", 2);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Image URL",
    fieldMappings: "src"
  })
], O.prototype, "srcConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Name (initials fallback)",
    fieldMappings: "name"
  })
], O.prototype, "nameConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Initials (override)",
    fieldMappings: "initials"
  })
], O.prototype, "initialsConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Extra Small", value: "xs" },
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "Extra Large", value: "xl" }
    ]
  })
], O.prototype, "sizeConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Shape",
    fieldMappings: "shape",
    optionItems: [
      { label: "Circle", value: "circle" },
      { label: "Rounded", value: "rounded" },
      { label: "Square", value: "square" }
    ]
  })
], O.prototype, "shapeConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Status",
    fieldMappings: "status",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Online", value: "online" },
      { label: "Away", value: "away" },
      { label: "Busy", value: "busy" },
      { label: "Offline", value: "offline" }
    ]
  })
], O.prototype, "statusConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Show Status Dot",
    fieldMappings: "showStatus"
  })
], O.prototype, "showStatusConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Background Tint Color",
    fieldMappings: "bgColor"
  })
], O.prototype, "bgColorConfig", 1);
R([
  L({
    attributeType: D.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
], O.prototype, "handleClick", 1);
O = R([
  We({
    name: "zero-avatar",
    version: "1.0.0",
    title: "Avatar",
    elementSelector: "zero-avatar",
    group: "Data Display",
    iconName: "avatar-icon.png"
  }),
  Ge()
], O);
export {
  O as ZeroAvatar,
  ge as studioTemplate
};
