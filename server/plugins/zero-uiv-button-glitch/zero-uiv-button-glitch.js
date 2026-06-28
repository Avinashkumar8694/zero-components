var Ie = Object.defineProperty;
var De = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => De(r, typeof t != "symbol" ? t + "" : t, e);
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(y, E) {
      return function($, w) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !_ && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ke(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), N = typeof WeakMap == "function" ? WeakMap : Ne(), B = s ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Pe(), St = xe(ot);
    function he(i, o, a, c) {
      if (g(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Ut(o))
          throw new TypeError();
        return we(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !g(c) && !V(c))
          throw new TypeError();
        return V(c) && (c = void 0), a = R(a), $e(i, o, a, c);
      }
    }
    t("decorate", he);
    function de(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!g(v) && !Me(v))
          throw new TypeError();
        Pt(i, o, c, v);
      }
      return a;
    }
    t("metadata", de);
    function fe(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = R(c)), Pt(i, o, a, c);
    }
    t("defineMetadata", fe);
    function pe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Ot(i, o, a);
    }
    t("hasMetadata", pe);
    function ye(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), ft(i, o, a);
    }
    t("hasOwnMetadata", ye);
    function ve(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Mt(i, o, a);
    }
    t("getMetadata", ve);
    function _e(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Ct(i, o, a);
    }
    t("getOwnMetadata", _e);
    function ge(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = R(o)), xt(i, o);
    }
    t("getMetadataKeys", ge);
    function me(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = R(o)), Tt(i, o);
    }
    t("getOwnMetadataKeys", me);
    function be(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = R(a)), !O(o))
        throw new TypeError();
      g(a) || (a = R(a));
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", be);
    function we(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!g(v) && !V(v)) {
          if (!Ut(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $e(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], M = C(o, a, c);
        if (!g(M) && !V(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Ot(i, o, a) {
      var c = ft(i, o, a);
      if (c)
        return !0;
      var v = yt(o);
      return V(v) ? !1 : Ot(i, v, a);
    }
    function ft(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Rt(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Mt(i, o, a) {
      var c = ft(i, o, a);
      if (c)
        return Ct(i, o, a);
      var v = yt(o);
      if (!V(v))
        return Mt(i, v, a);
    }
    function Ct(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pt(i, o, a, c) {
      var v = Y(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xt(i, o) {
      var a = Tt(i, o), c = yt(i);
      if (c === null)
        return a;
      var v = xt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new T(), M = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = C.has(d);
        f || (C.add(d), M.push(d));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var d = b[p], f = C.has(d);
        f || (C.add(d), M.push(d));
      }
      return M;
    }
    function Tt(i, o) {
      var a = Y(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function kt(i) {
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
    function g(i) {
      return i === void 0;
    }
    function V(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, o) {
      switch (kt(i)) {
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
      var a = "string", c = Ht(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Se(i);
    }
    function Se(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (at(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (at(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function Oe(i) {
      return "" + i;
    }
    function R(i) {
      var o = Ae(i);
      return Ee(o) ? o : Oe(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function at(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      return typeof i == "function";
    }
    function Me(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ht(i, o) {
      var a = i[o];
      if (a != null) {
        if (!at(a))
          throw new TypeError();
        return a;
      }
    }
    function It(i) {
      var o = Ht(i, u);
      if (!at(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Dt(i) {
      return i.value;
    }
    function jt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Lt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function yt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ce() {
      var i;
      !g(B) && typeof e.Reflect < "u" && !(B in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var o, a, c, v = new N(), C = {
        registerProvider: M,
        getProvider: h,
        setProvider: f
      };
      return C;
      function M(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function m(p, b) {
        if (!g(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!g(c))
              for (var A = It(c); ; ) {
                var S = jt(A);
                if (!S)
                  return;
                var k = Dt(S);
                if (k.isProviderFor(p, b))
                  return Lt(A), k;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, b))
          return i;
      }
      function h(p, b) {
        var A = v.get(p), S;
        return g(A) || (S = A.get(b)), g(S) && (S = m(p, b), g(S) || (g(A) && (A = new x(), v.set(p, A)), A.set(b, S))), S;
      }
      function d(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(p, b);
        if (S !== A) {
          if (!g(S))
            return !1;
          var k = v.get(p);
          g(k) && (k = new x(), v.set(p, k)), k.set(b, A);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !g(B) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[B]), g(i) && (i = Ce()), !g(B) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xe(i) {
      var o = new N(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return ot.registerProvider(a), a;
      function c(d, f, p) {
        var b = o.get(d), A = !1;
        if (g(b)) {
          if (!p)
            return;
          b = new x(), o.set(d, b), A = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new x(), b.set(f, S), !i.setProvider(d, f, a))
            throw b.delete(f), A && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Rt(b.has(d));
      }
      function C(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(d);
      }
      function M(d, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function m(d, f) {
        var p = [], b = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return p;
        for (var A = b.keys(), S = It(A), k = 0; ; ) {
          var zt = jt(S);
          if (!zt)
            return p.length = k, p;
          var Ue = Dt(zt);
          try {
            p[k] = Ue;
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
      function h(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(d))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Te(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new N(), m = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !g(f) && f.has(d) ? !0 : v(h, d).length ? (g(f) && (f = new T(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function Y(i, o, a) {
      var c = ot.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (ot.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function ke() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function m(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, m;
        }()
      ), c = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pt(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!pt(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, h) {
        return m;
      }
      function C(m, h) {
        return h;
      }
      function M(m, h) {
        return [m, h];
      }
    }
    function Re() {
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
    function Ne() {
      var i = 16, o = $.create(), a = c();
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
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
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
          h = "@@WeakMap@@" + m();
        while ($.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: $.create() });
        }
        return h[a];
      }
      function C(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : C(d, h), d;
        }
        return C(new Array(h), h);
      }
      function m() {
        var h = M(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function je(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Le(r) {
  return function(t) {
    if (je(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
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
  return Le(r);
}
function Ge(r) {
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
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((x) => $.insertRule(x.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          y.appendChild(w);
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
function Ve(r) {
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
function it(r) {
  return Ve(r);
}
var F;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(F || (F = {}));
var z;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(z || (z = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = globalThis, wt = lt.ShadowRoot && (lt.ShadyCSS === void 0 || lt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Wt = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (wt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new oe(typeof r == "string" ? r : r + "", void 0, $t), Fe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new oe(e, r, $t);
}, qe = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = lt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Xe, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, H = globalThis, qt = H.trustedTypes, tr = qt ? qt.emptyScript : "", _t = H.reactiveElementPolyfillSupport, Q = (r, t) => r, ut = { toAttribute(r, t) {
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
} }, Et = (r, t) => !Ze(r, t), Zt = { attribute: !0, type: String, converter: ut, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Xe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Ye(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
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
      for (const s of n) e.unshift(Ft(s));
    } else t !== void 0 && e.push(Ft(t));
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ut).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ut;
      this._$Em = s;
      const E = y.fromAttribute(e, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = _.getPropertyOptions(t)), !((n.hasChanged ?? Et)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, n)))) return;
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
        const { wrapped: _ } = u, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Q("elementProperties")] = /* @__PURE__ */ new Map(), W[Q("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: W }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Xt = (r) => r, ct = K.trustedTypes, Yt = ct ? ct.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + U, er = `<${le}>`, G = document, et = () => G.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", At = Array.isArray, rr = (r) => At(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", gt = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, D = RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, ue = /^(?:script|style|textarea|title)$/i, nr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ir = nr(1), q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), j = G.createTreeWalker(G, 129);
function ce(r, t) {
  if (!At(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Yt !== void 0 ? Yt.createHTML(t) : t;
}
const sr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = J;
  for (let _ = 0; _ < e; _++) {
    const y = r[_];
    let E, $, w = -1, x = 0;
    for (; x < y.length && (u.lastIndex = x, $ = u.exec(y), $ !== null); ) x = u.lastIndex, u === J ? $[1] === "!--" ? u = Jt : $[1] !== void 0 ? u = Qt : $[2] !== void 0 ? (ue.test($[2]) && (s = RegExp("</" + $[2], "g")), u = D) : $[3] !== void 0 && (u = D) : u === D ? $[0] === ">" ? (u = s ?? J, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? D : $[3] === '"' ? te : Kt) : u === te || u === Kt ? u = D : u === Jt || u === Qt ? u = J : (u = D, s = void 0);
    const T = u === D && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === J ? y + er : w >= 0 ? (n.push(E), y.slice(0, w) + ae + y.slice(w) + U + T) : y + U + (w === -2 ? _ : T);
  }
  return [ce(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = t.length - 1, y = this.parts, [E, $] = sr(t, e);
    if (this.el = nt.createElement(E, n), j.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = j.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(ae)) {
          const x = $[u++], T = s.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(x);
          y.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? ar : N[1] === "?" ? lr : N[1] === "@" ? ur : ht }), s.removeAttribute(w);
        } else w.startsWith(U) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ue.test(s.tagName)) {
          const w = s.textContent.split(U), x = w.length - 1;
          if (x > 0) {
            s.textContent = ct ? ct.emptyScript : "";
            for (let T = 0; T < x; T++) s.append(w[T], et()), j.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[x], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = G.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Z(r, t, e = r, n) {
  var u, _;
  if (t === q) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Z(r, s._$AS(r, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? G).importNode(e, !0);
    j.currentNode = s;
    let l = j.nextNode(), u = 0, _ = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new st(l, l.nextSibling, this, t) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (E = new cr(l, this, t)), this._$AV.push(E), y = n[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = j.nextNode(), u++);
    }
    return j.currentNode = G, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class st {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Z(this, t, e), rt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(G.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(ce(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new or(s, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new st(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Xt(t).nextSibling;
      Xt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Z(this, t, e, 0), u = !rt(t) || t !== this._$AH && t !== q, u && (this._$AH = t);
    else {
      const _ = t;
      let y, E;
      for (t = l[0], y = 0; y < l.length - 1; y++) E = Z(this, _[n + y], e, y), E === q && (E = this._$AH[y]), u || (u = !rt(E) || E !== this._$AH[y]), E === P ? t = P : t !== P && (t += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class lr extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class ur extends ht {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Z(this, t, e, 0) ?? P) === q) return;
    const n = this._$AH, s = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class cr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Z(this, t);
  }
}
const mt = K.litHtmlPolyfillSupport;
mt == null || mt(nt, st), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
const hr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new st(t.insertBefore(et(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class tt extends W {
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
    return q;
  }
}
var se;
tt._$litElement$ = !0, tt.finalized = !0, (se = L.litElementHydrateSupport) == null || se.call(L, { LitElement: tt });
const bt = L.litElementPolyfillSupport;
bt == null || bt({ LitElement: tt });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: Et }, fr = (r = dr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const y = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, y, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(_) {
      const y = this[u];
      t.call(this, _), this.requestUpdate(u, y, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function dt(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, X = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && pr(t, e, s), s;
};
const re = () => window.zeroThemeManager, ne = {
  kind: "button",
  templateHtml: [
    "<div style='position:relative;display:inline-block;'>",
    "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #6366f1);color:#000;border:none;text-transform:uppercase;letter-spacing:2px;clip-path:polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);'>",
    "{{display:label}}",
    "</button>",
    "<span style='position:absolute;right:-10px;bottom:-5px;background:var(--uiv-accent-color, #ec4899);color:#fff;font-size:0.65rem;padding:2px 8px;font-weight:900;transform:skew(-15deg);box-shadow:2px 2px 0 rgba(0,0,0,0.2);'>{{display:tag}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glitch", "Cyberpunk"]
};
function ie(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let I = class extends tt {
  constructor() {
    super(...arguments), this.label = "GLITCH", this.tag = "V2.0", this.disabled = !1, this.glowColor = "", this.onClickEvent = "click";
  }
  static getStudioTemplate(r) {
    var l, u;
    if (!r) return ne;
    const t = ie(r.studio.display.label || "GLITCH"), e = ie(r.studio.display.tag || "V2.0"), n = ((l = r.props) == null ? void 0 : l.glowColor) ?? ((u = r.studio.props) == null ? void 0 : u.glowColor);
    return {
      ...ne,
      templateHtml: [
        "<div style='position:relative;display:inline-block;'>",
        "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #6366f1);color:#000;border:none;text-transform:uppercase;letter-spacing:2px;clip-path:polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);'>",
        t,
        "</button>",
        `<span style='position:absolute;right:-10px;bottom:-5px;background:${n || "var(--uiv-accent-color, #ec4899)"};color:#fff;font-size:0.65rem;padding:2px 8px;font-weight:900;transform:skew(-15deg);box-shadow:2px 2px 0 rgba(0,0,0,0.2);'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = re()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = re()) == null ? void 0 : t.getActiveTheme();
    return ir`
            <style>
                ${r ? r.getGlobalStyles() : ""}
            </style>
            <button 
                class="uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan"
                ?disabled="${this.disabled}" 
                @click="${() => this.dispatchEvent(new CustomEvent("click"))}"
            >
                <span class="glitch-layer"></span>
                <span class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</span>
                <span class="tag uiv-neon-accent-pulse">${this.tag}</span>
            </button>
        `;
  }
};
I.styles = Fe`
        :host {
            display: inline-block;
            --btn-p: var(--uiv-primary-color, #6366f1);
            --btn-s: var(--uiv-secondary-color, #8b5cf6);
            --btn-bg: var(--uiv-bg-color, #f8fafc);
            --btn-surface: var(--uiv-surface-color, #ffffff);
            --btn-t: var(--uiv-text-color, #1e293b);
            --btn-a: var(--uiv-accent-color, #ec4899);
            --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
        }

        button {
            position: relative;
            padding: 10px 30px;
            font-size: 1.2rem;
            font-weight: 800;
            cursor: pointer;
            background: var(--btn-p);
            color: #000;
            border: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            outline: none;
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
            transition: all 0.2s;
        }

        button:hover {
            filter: brightness(1.2);
            transform: scale(1.05);
        }

        button:active {
            transform: scale(0.95);
        }

        .glitch-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            background: var(--btn-s);
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        }

        button:hover .glitch-layer {
            display: block;
            animation: glitch 0.3s infinite;
        }

        @keyframes glitch {
            0% { transform: translate(2px, 2px); }
            20% { transform: translate(-2px, -2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(2px, 2px); }
            100% { transform: translate(0); }
        }

        .tag {
            position: absolute;
            right: -10px;
            bottom: -5px;
            background: var(--btn-a);
            color: #fff;
            font-size: 0.65rem;
            padding: 2px 8px;
            font-weight: 900;
            transform: skew(-15deg);
            box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
        }
    `;
X([
  dt({ type: String }),
  it({
    attributeType: z.PROPERTY,
    uiComponentType: F.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], I.prototype, "label", 2);
X([
  dt({ type: String }),
  it({
    attributeType: z.PROPERTY,
    uiComponentType: F.TEXT_INPUT,
    displayLabel: "Tag Text",
    fieldMappings: "tag"
  })
], I.prototype, "tag", 2);
X([
  dt({ type: Boolean }),
  it({
    attributeType: z.PROPERTY,
    uiComponentType: F.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], I.prototype, "disabled", 2);
X([
  dt({ type: String }),
  it({
    attributeType: z.PROPERTY,
    uiComponentType: F.COLOR_PICKER,
    displayLabel: "Glow Color Overlay",
    fieldMappings: "glowColor"
  })
], I.prototype, "glowColor", 2);
X([
  it({
    attributeType: z.EVENT,
    eventTrigger: "click",
    displayLabel: "On Click"
  })
], I.prototype, "onClickEvent", 2);
I = X([
  ze({
    name: "zero-uiv-button-glitch",
    version: "1.0.0",
    title: "Glitch Effect Button",
    elementSelector: "zero-uiv-button-glitch",
    group: "Uiverse Buttons",
    iconName: "button-icon.png"
  }),
  Ge()
], I);
export {
  I as ZeroUivButtonGlitch,
  ne as glitchTemplate
};
