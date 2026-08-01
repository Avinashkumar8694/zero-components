var ze = Object.defineProperty;
var Ue = (r, t, e) => t in r ? ze(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ee = (r, t, e) => Ue(r, typeof t != "symbol" ? t + "" : t, e);
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
    var e = typeof globalThis == "object" ? globalThis : typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = i(r);
    typeof e.Reflect < "u" && (n = i(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function i(p, x) {
      return function($, _) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: _ }), x && x($, _);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function c() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function g() {
      return l() || c();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", l = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !g && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return Dt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Dt({ __proto__: null });
      } : function() {
        return Dt({});
      },
      has: x ? function(s, o) {
        return n.call(s, o);
      } : function(s, o) {
        return o in s;
      },
      get: x ? function(s, o) {
        return n.call(s, o) ? s[o] : void 0;
      } : function(s, o) {
        return s[o];
      }
    }, _ = Object.getPrototypeOf(Function), E = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), D = typeof WeakMap == "function" ? WeakMap : De(), H = i ? Symbol.for("@reflect-metadata:registry") : void 0, V = Pe(), it = ke(V);
    function yt(s, o, a, u) {
      if (m(a)) {
        if (!qt(s))
          throw new TypeError();
        if (!Zt(o))
          throw new TypeError();
        return R(s, o);
      } else {
        if (!qt(s))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(u) && !m(u) && !K(u))
          throw new TypeError();
        return K(u) && (u = void 0), a = U(a), T(s, o, a, u);
      }
    }
    t("decorate", yt);
    function gt(s, o) {
      function a(u, y) {
        if (!O(u))
          throw new TypeError();
        if (!m(y) && !Me(y))
          throw new TypeError();
        Q(s, o, u, y);
      }
      return a;
    }
    t("metadata", gt);
    function mt(s, o, a, u) {
      if (!O(a))
        throw new TypeError();
      return m(u) || (u = U(u)), Q(s, o, a, u);
    }
    t("defineMetadata", mt);
    function _t(s, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = U(a)), z(s, o, a);
    }
    t("hasMetadata", _t);
    function bt(s, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = U(a)), F(s, o, a);
    }
    t("hasOwnMetadata", bt);
    function $t(s, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = U(a)), L(s, o, a);
    }
    t("getMetadata", $t);
    function wt(s, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = U(a)), W(s, o, a);
    }
    t("getOwnMetadata", wt);
    function xt(s, o) {
      if (!O(s))
        throw new TypeError();
      return m(o) || (o = U(o)), st(s, o);
    }
    t("getMetadataKeys", xt);
    function At(s, o) {
      if (!O(s))
        throw new TypeError();
      return m(o) || (o = U(o)), Gt(s, o);
    }
    t("getOwnMetadataKeys", At);
    function St(s, o, a) {
      if (!O(o))
        throw new TypeError();
      if (m(a) || (a = U(a)), !O(o))
        throw new TypeError();
      m(a) || (a = U(a));
      var u = ot(
        o,
        a,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(s, o, a);
    }
    t("deleteMetadata", St);
    function R(s, o) {
      for (var a = s.length - 1; a >= 0; --a) {
        var u = s[a], y = u(o);
        if (!m(y) && !K(y)) {
          if (!Zt(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function T(s, o, a, u) {
      for (var y = s.length - 1; y >= 0; --y) {
        var C = s[y], M = C(o, a, u);
        if (!m(M) && !K(M)) {
          if (!O(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function z(s, o, a) {
      var u = F(s, o, a);
      if (u)
        return !0;
      var y = Nt(o);
      return K(y) ? !1 : z(s, y, a);
    }
    function F(s, o, a) {
      var u = ot(
        o,
        a,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ft(u.OrdinaryHasOwnMetadata(s, o, a));
    }
    function L(s, o, a) {
      var u = F(s, o, a);
      if (u)
        return W(s, o, a);
      var y = Nt(o);
      if (!K(y))
        return L(s, y, a);
    }
    function W(s, o, a) {
      var u = ot(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(s, o, a);
    }
    function Q(s, o, a, u) {
      var y = ot(
        a,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(s, o, a, u);
    }
    function st(s, o) {
      var a = Gt(s, o), u = Nt(s);
      if (u === null)
        return a;
      var y = st(u, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var C = new k(), M = [], b = 0, d = a; b < d.length; b++) {
        var h = d[b], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var h = w[v], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      return M;
    }
    function Gt(s, o) {
      var a = ot(
        s,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(s, o) : [];
    }
    function Vt(s) {
      if (s === null)
        return 1;
      switch (typeof s) {
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
          return s === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(s) {
      return s === void 0;
    }
    function K(s) {
      return s === null;
    }
    function Ae(s) {
      return typeof s == "symbol";
    }
    function O(s) {
      return typeof s == "object" ? s !== null : typeof s == "function";
    }
    function Se(s, o) {
      switch (Vt(s)) {
        case 0:
          return s;
        case 1:
          return s;
        case 2:
          return s;
        case 3:
          return s;
        case 4:
          return s;
        case 5:
          return s;
      }
      var a = "string", u = Yt(s, l);
      if (u !== void 0) {
        var y = u.call(s, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return Ee(s);
    }
    function Ee(s, o) {
      var a, u;
      {
        var y = s.toString;
        if (Et(y)) {
          var u = y.call(s);
          if (!O(u))
            return u;
        }
        var a = s.valueOf;
        if (Et(a)) {
          var u = a.call(s);
          if (!O(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ft(s) {
      return !!s;
    }
    function Oe(s) {
      return "" + s;
    }
    function U(s) {
      var o = Se(s);
      return Ae(o) ? o : Oe(o);
    }
    function qt(s) {
      return Array.isArray ? Array.isArray(s) : s instanceof Object ? s instanceof Array : Object.prototype.toString.call(s) === "[object Array]";
    }
    function Et(s) {
      return typeof s == "function";
    }
    function Zt(s) {
      return typeof s == "function";
    }
    function Me(s) {
      switch (Vt(s)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Rt(s, o) {
      return s === o || s !== s && o !== o;
    }
    function Yt(s, o) {
      var a = s[o];
      if (a != null) {
        if (!Et(a))
          throw new TypeError();
        return a;
      }
    }
    function Jt(s) {
      var o = Yt(s, c);
      if (!Et(o))
        throw new TypeError();
      var a = o.call(s);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Xt(s) {
      return s.value;
    }
    function Qt(s) {
      var o = s.next();
      return o.done ? !1 : o;
    }
    function Kt(s) {
      var o = s.return;
      o && o.call(s);
    }
    function Nt(s) {
      var o = Object.getPrototypeOf(s);
      if (typeof s != "function" || s === _ || o !== _)
        return o;
      var a = s.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var y = u.constructor;
      return typeof y != "function" || y === s ? o : y;
    }
    function Ce() {
      var s;
      !m(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (s = Te(e.Reflect));
      var o, a, u, y = new D(), C = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return C;
      function M(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case s === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            u === void 0 && (u = new k()), u.add(v);
            break;
        }
      }
      function b(v, w) {
        if (!m(o)) {
          if (o.isProviderFor(v, w))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(v, w))
              return o;
            if (!m(u))
              for (var A = Jt(u); ; ) {
                var S = Qt(A);
                if (!S)
                  return;
                var j = Xt(S);
                if (j.isProviderFor(v, w))
                  return Kt(A), j;
              }
          }
        }
        if (!m(s) && s.isProviderFor(v, w))
          return s;
      }
      function d(v, w) {
        var A = y.get(v), S;
        return m(A) || (S = A.get(w)), m(S) && (S = b(v, w), m(S) || (m(A) && (A = new E(), y.set(v, A)), A.set(w, S))), S;
      }
      function h(v) {
        if (m(v))
          throw new TypeError();
        return o === v || a === v || !m(u) && u.has(v);
      }
      function f(v, w, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(v, w);
        if (S !== A) {
          if (!m(S))
            return !1;
          var j = y.get(v);
          m(j) && (j = new E(), y.set(v, j)), j.set(w, A);
        }
        return !0;
      }
    }
    function Pe() {
      var s;
      return !m(H) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (s = e.Reflect[H]), m(s) && (s = Ce()), !m(H) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: s
      }), s;
    }
    function ke(s) {
      var o = new D(), a = {
        isProviderFor: function(h, f) {
          var v = o.get(h);
          return m(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return V.registerProvider(a), a;
      function u(h, f, v) {
        var w = o.get(h), A = !1;
        if (m(w)) {
          if (!v)
            return;
          w = new E(), o.set(h, w), A = !0;
        }
        var S = w.get(f);
        if (m(S)) {
          if (!v)
            return;
          if (S = new E(), w.set(f, S), !s.setProvider(h, f, a))
            throw w.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, v) {
        var w = u(
          f,
          v,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ft(w.has(h));
      }
      function C(h, f, v) {
        var w = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(h);
      }
      function M(h, f, v, w) {
        var A = u(
          v,
          w,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function b(h, f) {
        var v = [], w = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return v;
        for (var A = w.keys(), S = Jt(A), j = 0; ; ) {
          var te = Qt(S);
          if (!te)
            return v.length = j, v;
          var je = Xt(te);
          try {
            v[j] = je;
          } catch (He) {
            try {
              Kt(S);
            } finally {
              throw He;
            }
          }
          j++;
        }
      }
      function d(h, f, v) {
        var w = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var A = o.get(f);
          m(A) || (A.delete(v), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Te(s) {
      var o = s.defineMetadata, a = s.hasOwnMetadata, u = s.getOwnMetadata, y = s.getOwnMetadataKeys, C = s.deleteMetadata, M = new D(), b = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !m(f) && f.has(h) ? !0 : y(d, h).length ? (m(f) && (f = new k(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return b;
    }
    function ot(s, o, a) {
      var u = V.getProvider(s, o);
      if (!m(u))
        return u;
      if (a) {
        if (V.setProvider(s, o, it))
          return it;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var s = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[c] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, b;
        }()
      ), u = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = s, this._cacheIndex = -2;
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
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, b.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Rt(d, this._cacheKey) && (this._cacheKey = s, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = s, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[c] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!Rt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Rt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function y(b, d) {
        return b;
      }
      function C(b, d) {
        return d;
      }
      function M(b, d) {
        return [b, d];
      }
    }
    function Ne() {
      var s = (
        /** @class */
        function() {
          function o() {
            this._map = new E();
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
          }, o.prototype[c] = function() {
            return this.keys();
          }, o;
        }()
      );
      return s;
    }
    function De() {
      var s = 16, o = $.create(), a = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + b();
        while ($.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function b() {
        var d = M(s);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < s; ++f) {
          var v = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Dt(s) {
      return s.__ = void 0, delete s.__, s;
    }
  });
})(ne || (ne = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Le(r) {
  return function(t) {
    if (Ie(r)) {
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
function We(r) {
  return Le(r);
}
function Be(r) {
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const $ = new CSSStyleSheet(), _ = (x = l.sheet) == null ? void 0 : x.cssRules;
          _ && (Array.from(_).forEach((E) => $.insertRule(E.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        c.forEach(($) => {
          const _ = $.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return e;
  };
}
function Ge(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ve(r) {
  return function(t, e) {
    try {
      Ge(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let i = !0;
      if (typeof e == "string") {
        try {
          i = typeof t[e] != "function";
        } catch {
          i = !0;
        }
        i && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function pt(r) {
  return Ve(r);
}
var et;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(et || (et = {}));
var J;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(J || (J = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = globalThis, It = Mt.ShadowRoot && (Mt.ShadyCSS === void 0 || Mt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Lt = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let _e = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Lt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (It && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = ie.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ie.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new _e(typeof r == "string" ? r : r + "", void 0, Lt), qe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, i, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[l + 1], r[0]);
  return new _e(e, r, Lt);
}, Ze = (r, t) => {
  if (It) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), i = Mt.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = e.cssText, r.appendChild(n);
  }
}, se = It ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: Je, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Qe, getOwnPropertySymbols: Ke, getPrototypeOf: tr } = Object, G = globalThis, oe = G.trustedTypes, er = oe ? oe.emptyScript : "", jt = G.reactiveElementPolyfillSupport, lt = (r, t) => r, Ct = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? er : null;
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
} }, Wt = (r, t) => !Ye(r, t), ae = { attribute: !0, type: String, converter: Ct, reflect: !1, useDefault: !1, hasChanged: Wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), G.litPropertyMetadata ?? (G.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let tt = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = ae) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(t, n, e);
      i !== void 0 && Je(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: i, set: l } = Xe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(c) {
      this[e] = c;
    } };
    return { get: i, set(c) {
      const g = i == null ? void 0 : i.call(this);
      l == null || l.call(this, c), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? ae;
  }
  static _$Ei() {
    if (this.hasOwnProperty(lt("elementProperties"))) return;
    const t = tr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(lt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(lt("properties"))) {
      const e = this.properties, n = [...Qe(e), ...Ke(e)];
      for (const i of n) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, i] of e) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const i = this._$Eu(e, n);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const i of n) e.unshift(se(i));
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
    return Ze(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, n);
    if (i !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Ct).toAttribute(e, n.type);
      this._$Em = t, c == null ? this.removeAttribute(i) : this.setAttribute(i, c), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, c;
    const n = this.constructor, i = n._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const g = n.getPropertyOptions(i), p = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : Ct;
      this._$Em = i;
      const x = p.fromAttribute(e, g.type);
      this[i] = x ?? ((c = this._$Ej) == null ? void 0 : c.get(i)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, i = !1, l) {
    var c;
    if (t !== void 0) {
      const g = this.constructor;
      if (i === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? Wt)(l, e) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: i, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, c ?? e ?? this[t]), l !== !0 || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [l, c] of i) {
        const { wrapped: g } = c, p = this[l];
        g !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, c, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((i) => {
        var l;
        return (l = i.hostUpdate) == null ? void 0 : l.call(i);
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
    (e = this._$EO) == null || e.forEach((n) => {
      var i;
      return (i = n.hostUpdated) == null ? void 0 : i.call(n);
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
tt.elementStyles = [], tt.shadowRootOptions = { mode: "open" }, tt[lt("elementProperties")] = /* @__PURE__ */ new Map(), tt[lt("finalized")] = /* @__PURE__ */ new Map(), jt == null || jt({ ReactiveElement: tt }), (G.reactiveElementVersions ?? (G.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, le = (r) => r, Pt = ct.trustedTypes, ce = Pt ? Pt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, be = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, $e = "?" + B, rr = `<${$e}>`, X = document, dt = () => X.createComment(""), ht = (r) => r === null || typeof r != "object" && typeof r != "function", Bt = Array.isArray, nr = (r) => Bt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ht = `[ 	
\f\r]`, at = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, de = />/g, q = RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), he = /'/g, fe = /"/g, we = /^(?:script|style|textarea|title)$/i, ir = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Ot = ir(1), rt = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), pe = /* @__PURE__ */ new WeakMap(), Z = X.createTreeWalker(X, 129);
function xe(r, t) {
  if (!Bt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ce !== void 0 ? ce.createHTML(t) : t;
}
const sr = (r, t) => {
  const e = r.length - 1, n = [];
  let i, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = at;
  for (let g = 0; g < e; g++) {
    const p = r[g];
    let x, $, _ = -1, E = 0;
    for (; E < p.length && (c.lastIndex = E, $ = c.exec(p), $ !== null); ) E = c.lastIndex, c === at ? $[1] === "!--" ? c = ue : $[1] !== void 0 ? c = de : $[2] !== void 0 ? (we.test($[2]) && (i = RegExp("</" + $[2], "g")), c = q) : $[3] !== void 0 && (c = q) : c === q ? $[0] === ">" ? (c = i ?? at, _ = -1) : $[1] === void 0 ? _ = -2 : (_ = c.lastIndex - $[2].length, x = $[1], c = $[3] === void 0 ? q : $[3] === '"' ? fe : he) : c === fe || c === he ? c = q : c === ue || c === de ? c = at : (c = q, i = void 0);
    const k = c === q && r[g + 1].startsWith("/>") ? " " : "";
    l += c === at ? p + rr : _ >= 0 ? (n.push(x), p.slice(0, _) + be + p.slice(_) + B + k) : p + B + (_ === -2 ? g : k);
  }
  return [xe(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ft {
  constructor({ strings: t, _$litType$: e }, n) {
    let i;
    this.parts = [];
    let l = 0, c = 0;
    const g = t.length - 1, p = this.parts, [x, $] = sr(t, e);
    if (this.el = ft.createElement(x, n), Z.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (i = Z.nextNode()) !== null && p.length < g; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const _ of i.getAttributeNames()) if (_.endsWith(be)) {
          const E = $[c++], k = i.getAttribute(_).split(B), D = /([.?@])?(.*)/.exec(E);
          p.push({ type: 1, index: l, name: D[2], strings: k, ctor: D[1] === "." ? ar : D[1] === "?" ? lr : D[1] === "@" ? cr : kt }), i.removeAttribute(_);
        } else _.startsWith(B) && (p.push({ type: 6, index: l }), i.removeAttribute(_));
        if (we.test(i.tagName)) {
          const _ = i.textContent.split(B), E = _.length - 1;
          if (E > 0) {
            i.textContent = Pt ? Pt.emptyScript : "";
            for (let k = 0; k < E; k++) i.append(_[k], dt()), Z.nextNode(), p.push({ type: 2, index: ++l });
            i.append(_[E], dt());
          }
        }
      } else if (i.nodeType === 8) if (i.data === $e) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = i.data.indexOf(B, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += B.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = X.createElement("template");
    return n.innerHTML = t, n;
  }
}
function nt(r, t, e = r, n) {
  var c, g;
  if (t === rt) return t;
  let i = n !== void 0 ? (c = e._$Co) == null ? void 0 : c[n] : e._$Cl;
  const l = ht(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== l && ((g = i == null ? void 0 : i._$AO) == null || g.call(i, !1), l === void 0 ? i = void 0 : (i = new l(r), i._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = i : e._$Cl = i), i !== void 0 && (t = nt(r, i._$AS(r, t.values), i, n)), t;
}
class or {
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
    const { el: { content: e }, parts: n } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? X).importNode(e, !0);
    Z.currentNode = i;
    let l = Z.nextNode(), c = 0, g = 0, p = n[0];
    for (; p !== void 0; ) {
      if (c === p.index) {
        let x;
        p.type === 2 ? x = new vt(l, l.nextSibling, this, t) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (x = new ur(l, this, t)), this._$AV.push(x), p = n[++g];
      }
      c !== (p == null ? void 0 : p.index) && (l = Z.nextNode(), c++);
    }
    return Z.currentNode = X, i;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class vt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, i) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    t = nt(this, t, e), ht(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== rt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && ht(this._$AH) ? this._$AA.nextSibling.data = t : this.T(X.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, i = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ft.createElement(xe(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === i) this._$AH.p(e);
    else {
      const c = new or(i, this), g = c.u(this.options);
      c.p(e), this.T(g), this._$AH = c;
    }
  }
  _$AC(t) {
    let e = pe.get(t.strings);
    return e === void 0 && pe.set(t.strings, e = new ft(t)), e;
  }
  k(t) {
    Bt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, i = 0;
    for (const l of t) i === e.length ? e.push(n = new vt(this.O(dt()), this.O(dt()), this, this.options)) : n = e[i], n._$AI(l), i++;
    i < e.length && (this._$AR(n && n._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const i = le(t).nextSibling;
      le(t).remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class kt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, i, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, i) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) t = nt(this, t, e, 0), c = !ht(t) || t !== this._$AH && t !== rt, c && (this._$AH = t);
    else {
      const g = t;
      let p, x;
      for (t = l[0], p = 0; p < l.length - 1; p++) x = nt(this, g[n + p], e, p), x === rt && (x = this._$AH[p]), c || (c = !ht(x) || x !== this._$AH[p]), x === P ? t = P : t !== P && (t += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    c && !i && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends kt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class lr extends kt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class cr extends kt {
  constructor(t, e, n, i, l) {
    super(t, e, n, i, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = nt(this, t, e, 0) ?? P) === rt) return;
    const n = this._$AH, i = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || i);
    i && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    nt(this, t);
  }
}
const zt = ct.litHtmlPolyfillSupport;
zt == null || zt(ft, vt), (ct.litHtmlVersions ?? (ct.litHtmlVersions = [])).push("3.3.3");
const dr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = n._$litPart$;
  if (i === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = i = new vt(t.insertBefore(dt(), l), l, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class ut extends tt {
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
    return rt;
  }
}
var me;
ut._$litElement$ = !0, ut.finalized = !0, (me = Y.litElementHydrateSupport) == null || me.call(Y, { LitElement: ut });
const Ut = Y.litElementPolyfillSupport;
Ut == null || Ut({ LitElement: ut });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: Ct, reflect: !1, hasChanged: Wt }, fr = (r = hr, t, e) => {
  const { kind: n, metadata: i } = e;
  let l = globalThis.litPropertyMetadata.get(i);
  if (l === void 0 && globalThis.litPropertyMetadata.set(i, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: c } = e;
    return { set(g) {
      const p = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(c, p, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(c, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: c } = e;
    return function(g) {
      const p = this[c];
      t.call(this, g), this.requestUpdate(c, p, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Tt(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((n, i, l) => {
    const c = i.hasOwnProperty(l);
    return i.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(i, l) : void 0;
  })(r, t, e);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, I = (r, t, e, n) => {
  for (var i = n > 1 ? void 0 : n ? vr(t, e) : t, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(t, e, i) : c(i)) || i);
  return n && i && pr(t, e, i), i;
};
const ve = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:0;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;flex-direction:column;align-items:center;gap:6px;'>",
    "<div style='width:28px;height:28px;border-radius:50%;background:#6366f1;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;'>1</div>",
    "<span style='font-size:12px;color:#1f2937;font-weight:600;'>Account</span>",
    "</div>",
    "<div style='flex:1;height:2px;min-width:40px;background:#6366f1;margin-top:-18px;'></div>",
    "<div style='display:flex;flex-direction:column;align-items:center;gap:6px;'>",
    "<div style='width:28px;height:28px;border-radius:50%;background:rgba(99,102,241,0.14);color:#6366f1;border:2px solid #6366f1;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;'>2</div>",
    "<span style='font-size:12px;color:#1f2937;font-weight:600;'>Profile</span>",
    "</div>",
    "<div style='flex:1;height:2px;min-width:40px;background:#e5e7eb;margin-top:-18px;'></div>",
    "<div style='display:flex;flex-direction:column;align-items:center;gap:6px;'>",
    "<div style='width:28px;height:28px;border-radius:50%;background:#f3f4f6;color:#9ca3af;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;'>3</div>",
    "<span style='font-size:12px;color:#9ca3af;font-weight:500;'>Done</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "activeStep",
  badges: ["Navigation", "Steps"]
};
function ye(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function ge(r, t) {
  if (!r) return t;
  try {
    const e = JSON.parse(r);
    if (Array.isArray(e)) {
      const n = e.map(
        (i) => typeof i == "string" ? { label: i } : i && typeof i.label == "string" ? { label: i.label, description: typeof i.description == "string" ? i.description : void 0 } : null
      ).filter(Boolean);
      return n.length ? n : t;
    }
    return t;
  } catch {
    return t;
  }
}
let N = class extends ut {
  constructor() {
    super(...arguments), this.steps = '[{"label":"Account","description":"Sign up"},{"label":"Profile","description":"Add details"},{"label":"Done","description":"All set"}]', this.activeStep = 1, this.orientation = "horizontal", this.variant = "numbered";
  }
  static getStudioTemplate(r) {
    var V, it, yt, gt, mt, _t, bt, $t, wt, xt, At, St;
    if (!r) return ve;
    const t = Number(((V = r.props) == null ? void 0 : V.activeStep) ?? ((yt = (it = r.studio) == null ? void 0 : it.props) == null ? void 0 : yt.activeStep) ?? 1), e = (((gt = r.props) == null ? void 0 : gt.orientation) ?? ((_t = (mt = r.studio) == null ? void 0 : mt.props) == null ? void 0 : _t.orientation)) || "horizontal", n = (((bt = r.props) == null ? void 0 : bt.variant) ?? ((wt = ($t = r.studio) == null ? void 0 : $t.props) == null ? void 0 : wt.variant)) || "numbered", i = ge(((xt = r.props) == null ? void 0 : xt.steps) ?? ((St = (At = r.studio) == null ? void 0 : At.props) == null ? void 0 : St.steps), [
      { label: "Account" },
      { label: "Profile" },
      { label: "Done" }
    ]), l = "var(--uiv-primary-color, #6366f1)", c = "var(--uiv-bg-tertiary, rgba(99,102,241,0.14))", g = "var(--uiv-bg-secondary, #f3f4f6)", p = "var(--uiv-border-color, #e5e7eb)", x = "var(--uiv-text-color, #1f2937)", $ = "var(--uiv-text-tertiary, #9ca3af)", _ = e !== "vertical", E = (R, T) => {
      const z = n === "dotted", F = z ? 12 : 28;
      let L = g, W = $, Q = `2px solid ${p}`, st = z ? "" : String(R + 1);
      return T === "completed" ? (L = l, W = "#fff", Q = "2px solid transparent", st = z ? "" : "✓") : T === "active" && (L = z ? l : c, W = l, Q = `2px solid ${l}`), `<div style='width:${F}px;height:${F}px;border-radius:50%;background:${L};color:${W};border:${Q};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;box-sizing:border-box;flex:none;'>${st}</div>`;
    }, k = (R) => _ ? `<div style='flex:1;height:2px;min-width:32px;background:${R ? l : p};margin-top:-18px;'></div>` : `<div style='width:2px;flex:1;min-height:20px;background:${R ? l : p};margin-left:13px;'></div>`, D = i.map((R, T) => {
      const z = T < t ? "completed" : T === t ? "active" : "upcoming", L = `<span style='font-size:12px;color:${T <= t ? x : $};font-weight:${T === t ? "600" : "500"};'>${ye(R.label)}</span>`, W = R.description ? `<span style='font-size:11px;color:${$};'>${ye(R.description)}</span>` : "";
      return _ ? `<div style='display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;'>${E(T, z)}${L}${W}</div>` : `<div style='display:flex;align-items:flex-start;gap:12px;'>${E(T, z)}<div style='display:flex;flex-direction:column;gap:2px;padding-top:4px;'>${L}${W}</div></div>`;
    }), H = [];
    return D.forEach((R, T) => {
      H.push(R), T < D.length - 1 && H.push(k(T < t));
    }), {
      ...ve,
      templateHtml: [
        `<div style='display:flex;flex-direction:${_ ? "row" : "column"};align-items:${_ ? "flex-start" : "stretch"};gap:0;font-family:inherit;box-sizing:border-box;'>`,
        H.join(""),
        "</div>"
      ].join("")
    };
  }
  get stepsConfig() {
    return this.steps;
  }
  set stepsConfig(r) {
    this.steps = r;
  }
  get activeStepConfig() {
    return this.activeStep;
  }
  set activeStepConfig(r) {
    this.activeStep = Math.max(0, Number(r) || 0);
  }
  get orientationConfig() {
    return this.orientation;
  }
  set orientationConfig(r) {
    this.orientation = r || "horizontal";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "numbered";
  }
  parseSteps() {
    return ge(this.steps, []);
  }
  handleStepClick(r, t) {
    this.dispatchEvent(
      new CustomEvent("on-step-click", {
        detail: { index: r, label: t.label },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = this.parseSteps(), t = this.activeStep, e = this.orientation !== "vertical";
    return Ot`
      <div class="stepper ${e ? "horizontal" : "vertical"} ${this.variant}">
        ${r.map((n, i) => {
      const l = i < t ? "completed" : i === t ? "active" : "upcoming", c = this.variant === "dotted" ? "" : l === "completed" ? "✓" : String(i + 1);
      return Ot`
            <div class="step ${l}">
              <div
                class="marker"
                role="button"
                aria-current=${i === t ? "step" : "false"}
                @click=${() => this.handleStepClick(i, n)}
              >${c}</div>
              <div class="body">
                <span class="label" @click=${() => this.handleStepClick(i, n)}>${n.label}</span>
                ${n.description ? Ot`<span class="desc">${n.description}</span>` : ""}
              </div>
            </div>
            ${i < r.length - 1 ? Ot`<div class="connector ${i < t ? "done" : ""}"></div>` : ""}
          `;
    })}
      </div>
    `;
  }
};
N.styles = qe`
    :host {
      display: block;
      width: 100%;
      --st-primary: var(--uiv-primary-color, #6366f1);
      --st-tint: var(--uiv-bg-tertiary, rgba(99, 102, 241, 0.14));
      --st-upcoming: var(--uiv-bg-secondary, #f3f4f6);
      --st-border: var(--uiv-border-color, #e5e7eb);
      --st-text: var(--uiv-text-color, #1f2937);
      --st-muted: var(--uiv-text-tertiary, #9ca3af);
    }

    .stepper {
      display: flex;
      font-family: inherit;
      box-sizing: border-box;
    }
    .stepper.horizontal { flex-direction: row; align-items: flex-start; }
    .stepper.vertical { flex-direction: column; align-items: stretch; }

    .step {
      display: flex;
      gap: 6px;
    }
    .horizontal .step {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .vertical .step {
      flex-direction: row;
      align-items: flex-start;
      gap: 12px;
    }

    .marker {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid var(--st-border);
      background: var(--st-upcoming);
      color: var(--st-muted);
      font-size: 0.8125rem;
      font-weight: 600;
      box-sizing: border-box;
      flex: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .marker:hover { transform: translateY(-1px); }

    .dotted .marker { width: 12px; height: 12px; }

    .step.completed .marker {
      background: var(--st-primary);
      border-color: transparent;
      color: #ffffff;
    }
    .step.active .marker {
      border-color: var(--st-primary);
      color: var(--st-primary);
      background: var(--st-tint);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
    }
    .dotted .step.active .marker {
      background: var(--st-primary);
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .vertical .body { padding-top: 4px; }

    .label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--st-muted);
    }
    .step.completed .label,
    .step.active .label { color: var(--st-text); }
    .step.active .label { font-weight: 600; }

    .desc {
      font-size: 0.6875rem;
      color: var(--st-muted);
    }

    .connector {
      background: var(--st-border);
      transition: background 0.25s ease;
    }
    .connector.done { background: var(--st-primary); }
    .horizontal .connector {
      flex: 1;
      height: 2px;
      min-width: 32px;
      margin-top: 13px;
    }
    .vertical .connector {
      width: 2px;
      flex: 1;
      min-height: 20px;
      margin-left: 13px;
    }
  `;
I([
  Tt({ type: String })
], N.prototype, "steps", 2);
I([
  Tt({ type: Number, attribute: "active-step" })
], N.prototype, "activeStep", 2);
I([
  Tt({ type: String })
], N.prototype, "orientation", 2);
I([
  Tt({ type: String })
], N.prototype, "variant", 2);
I([
  pt({
    attributeType: J.PROPERTY,
    uiComponentType: et.TEXTAREA,
    displayLabel: "Steps (JSON array of {label, description})",
    fieldMappings: "steps"
  })
], N.prototype, "stepsConfig", 1);
I([
  pt({
    attributeType: J.PROPERTY,
    uiComponentType: et.NUMBER_INPUT,
    displayLabel: "Active Step (index)",
    fieldMappings: "activeStep"
  })
], N.prototype, "activeStepConfig", 1);
I([
  pt({
    attributeType: J.PROPERTY,
    uiComponentType: et.DROPDOWN,
    displayLabel: "Orientation",
    fieldMappings: "orientation",
    optionItems: [
      { label: "Horizontal", value: "horizontal" },
      { label: "Vertical", value: "vertical" }
    ]
  })
], N.prototype, "orientationConfig", 1);
I([
  pt({
    attributeType: J.PROPERTY,
    uiComponentType: et.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Numbered", value: "numbered" },
      { label: "Dotted", value: "dotted" }
    ]
  })
], N.prototype, "variantConfig", 1);
I([
  pt({
    attributeType: J.EVENT,
    displayLabel: "On Step Click",
    eventTrigger: "on-step-click"
  })
], N.prototype, "handleStepClick", 1);
N = I([
  We({
    name: "zero-stepper",
    version: "1.0.0",
    title: "Stepper",
    elementSelector: "zero-stepper",
    group: "Navigation",
    iconName: "stepper-icon.png"
  }),
  Be()
], N);
export {
  N as ZeroStepper,
  ve as studioTemplate
};
