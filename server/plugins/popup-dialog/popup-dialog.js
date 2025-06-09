var Re = Object.defineProperty;
var Ue = (n, t, e) => t in n ? Re(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var zt = (n, t, e) => Ue(n, typeof t != "symbol" ? t + "" : t, e);
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Bt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Lt == "object" ? Lt : typeof self == "object" ? self : typeof this == "object" ? this : w(), r = o(n);
    typeof e.Reflect < "u" && (r = o(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function o(y, b) {
      return function(A, $) {
        Object.defineProperty(y, A, { configurable: !0, writable: !0, value: $ }), b && b(A, $);
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
    function w() {
      return l() || u();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, b = !w && !y, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return ht(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ht({ __proto__: null });
      } : function() {
        return ht({});
      },
      has: b ? function(i, s) {
        return r.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: b ? function(i, s) {
        return r.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ce(), U = typeof WeakMap == "function" ? WeakMap : Te(), B = o ? Symbol.for("@reflect-metadata:registry") : void 0, rt = Se(), At = Me(rt);
    function ae(i, s, a, c) {
      if (_(a)) {
        if (!kt(i))
          throw new TypeError();
        if (!Rt(s))
          throw new TypeError();
        return _e(i, s);
      } else {
        if (!kt(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !_(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = R(a), me(i, s, a, c);
      }
    }
    t("decorate", ae);
    function ue(i, s) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!_(v) && !Ae(v))
          throw new TypeError();
        Ot(i, s, c, v);
      }
      return a;
    }
    t("metadata", ue);
    function le(i, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = R(c)), Ot(i, s, a, c);
    }
    t("defineMetadata", le);
    function ce(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Et(i, s, a);
    }
    t("hasMetadata", ce);
    function he(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), ut(i, s, a);
    }
    t("hasOwnMetadata", he);
    function de(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), St(i, s, a);
    }
    t("getMetadata", de);
    function pe(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Mt(i, s, a);
    }
    t("getOwnMetadata", pe);
    function fe(i, s) {
      if (!O(i))
        throw new TypeError();
      return _(s) || (s = R(s)), Pt(i, s);
    }
    t("getMetadataKeys", fe);
    function ye(i, s) {
      if (!O(i))
        throw new TypeError();
      return _(s) || (s = R(s)), Ct(i, s);
    }
    t("getOwnMetadataKeys", ye);
    function ve(i, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = R(a)), !O(s))
        throw new TypeError();
      _(a) || (a = R(a));
      var c = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", ve);
    function _e(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!_(v) && !G(v)) {
          if (!Rt(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function me(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var S = i[v], P = S(s, a, c);
        if (!_(P) && !G(P)) {
          if (!O(P))
            throw new TypeError();
          c = P;
        }
      }
      return c;
    }
    function Et(i, s, a) {
      var c = ut(i, s, a);
      if (c)
        return !0;
      var v = ct(s);
      return G(v) ? !1 : Et(i, v, a);
    }
    function ut(i, s, a) {
      var c = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : xt(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function St(i, s, a) {
      var c = ut(i, s, a);
      if (c)
        return Mt(i, s, a);
      var v = ct(s);
      if (!G(v))
        return St(i, v, a);
    }
    function Mt(i, s, a) {
      var c = F(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Ot(i, s, a, c) {
      var v = F(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function Pt(i, s) {
      var a = Ct(i, s), c = ct(i);
      if (c === null)
        return a;
      var v = Pt(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var S = new x(), P = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], p = S.has(d);
        p || (S.add(d), P.push(d));
      }
      for (var f = 0, g = v; f < g.length; f++) {
        var d = g[f], p = S.has(d);
        p || (S.add(d), P.push(d));
      }
      return P;
    }
    function Ct(i, s) {
      var a = F(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Tt(i) {
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
    function _(i) {
      return i === void 0;
    }
    function G(i) {
      return i === null;
    }
    function ge(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function we(i, s) {
      switch (Tt(i)) {
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
      var a = "string", c = Ut(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return $e(i);
    }
    function $e(i, s) {
      var a, c, v;
      {
        var S = i.toString;
        if (nt(S)) {
          var c = S.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (nt(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function xt(i) {
      return !!i;
    }
    function be(i) {
      return "" + i;
    }
    function R(i) {
      var s = we(i);
      return ge(s) ? s : be(s);
    }
    function kt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function nt(i) {
      return typeof i == "function";
    }
    function Rt(i) {
      return typeof i == "function";
    }
    function Ae(i) {
      switch (Tt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function lt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ut(i, s) {
      var a = i[s];
      if (a != null) {
        if (!nt(a))
          throw new TypeError();
        return a;
      }
    }
    function Nt(i) {
      var s = Ut(i, u);
      if (!nt(s))
        throw new TypeError();
      var a = s.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function jt(i) {
      return i.value;
    }
    function It(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ht(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ct(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Ee() {
      var i;
      !_(B) && typeof e.Reflect < "u" && !(B in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Oe(e.Reflect));
      var s, a, c, v = new U(), S = {
        registerProvider: P,
        getProvider: h,
        setProvider: p
      };
      return S;
      function P(f) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case _(s):
            s = f;
            break;
          case s === f:
            break;
          case _(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            c === void 0 && (c = new x()), c.add(f);
            break;
        }
      }
      function m(f, g) {
        if (!_(s)) {
          if (s.isProviderFor(f, g))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(f, g))
              return s;
            if (!_(c))
              for (var E = Nt(c); ; ) {
                var M = It(E);
                if (!M)
                  return;
                var k = jt(M);
                if (k.isProviderFor(f, g))
                  return Ht(E), k;
              }
          }
        }
        if (!_(i) && i.isProviderFor(f, g))
          return i;
      }
      function h(f, g) {
        var E = v.get(f), M;
        return _(E) || (M = E.get(g)), _(M) && (M = m(f, g), _(M) || (_(E) && (E = new T(), v.set(f, E)), E.set(g, M))), M;
      }
      function d(f) {
        if (_(f))
          throw new TypeError();
        return s === f || a === f || !_(c) && c.has(f);
      }
      function p(f, g, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var M = h(f, g);
        if (M !== E) {
          if (!_(M))
            return !1;
          var k = v.get(f);
          _(k) && (k = new T(), v.set(f, k)), k.set(g, E);
        }
        return !0;
      }
    }
    function Se() {
      var i;
      return !_(B) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[B]), _(i) && (i = Ee()), !_(B) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new U(), a = {
        isProviderFor: function(d, p) {
          var f = s.get(d);
          return _(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return rt.registerProvider(a), a;
      function c(d, p, f) {
        var g = s.get(d), E = !1;
        if (_(g)) {
          if (!f)
            return;
          g = new T(), s.set(d, g), E = !0;
        }
        var M = g.get(p);
        if (_(M)) {
          if (!f)
            return;
          if (M = new T(), g.set(p, M), !i.setProvider(d, p, a))
            throw g.delete(p), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return M;
      }
      function v(d, p, f) {
        var g = c(
          p,
          f,
          /*Create*/
          !1
        );
        return _(g) ? !1 : xt(g.has(d));
      }
      function S(d, p, f) {
        var g = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(d);
      }
      function P(d, p, f, g) {
        var E = c(
          f,
          g,
          /*Create*/
          !0
        );
        E.set(d, p);
      }
      function m(d, p) {
        var f = [], g = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (_(g))
          return f;
        for (var E = g.keys(), M = Nt(E), k = 0; ; ) {
          var Dt = It(M);
          if (!Dt)
            return f.length = k, f;
          var xe = jt(Dt);
          try {
            f[k] = xe;
          } catch (ke) {
            try {
              Ht(M);
            } finally {
              throw ke;
            }
          }
          k++;
        }
      }
      function h(d, p, f) {
        var g = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (_(g) || !g.delete(d))
          return !1;
        if (g.size === 0) {
          var E = s.get(p);
          _(E) || (E.delete(f), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Oe(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, S = i.deleteMetadata, P = new U(), m = {
        isProviderFor: function(h, d) {
          var p = P.get(h);
          return !_(p) && p.has(d) ? !0 : v(h, d).length ? (_(p) && (p = new x(), P.set(h, p)), p.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: S
      };
      return m;
    }
    function F(i, s, a) {
      var c = rt.getProvider(i, s);
      if (!_(c))
        return c;
      if (a) {
        if (rt.setProvider(i, s, At))
          return At;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function m(h, d, p) {
            this._index = 0, this._keys = h, this._values = d, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
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
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var p = this._keys.length, f = d + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, lt(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!lt(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (lt(this._keys[p], h)) {
                  this._cacheIndex = p;
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
      function S(m, h) {
        return h;
      }
      function P(m, h) {
        return [m, h];
      }
    }
    function Ce() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new T();
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
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Te() {
      var i = 16, s = A.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var p = v(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? A.has(p, this._key) : !1;
          }, h.prototype.get = function(d) {
            var p = v(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? A.get(p, this._key) : void 0;
          }, h.prototype.set = function(d, p) {
            var f = v(
              d,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, h.prototype.delete = function(d) {
            var p = v(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + m();
        while (A.has(s, h));
        return s[h] = !0, h;
      }
      function v(h, d) {
        if (!r.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: A.create() });
        }
        return h[a];
      }
      function S(h, d) {
        for (var p = 0; p < d; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function P(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : S(d, h), d;
        }
        return S(new Array(h), h);
      }
      function m() {
        var h = P(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", p = 0; p < i; ++p) {
          var f = h[p];
          (p === 4 || p === 6 || p === 8) && (d += "-"), f < 16 && (d += "0"), d += f.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ht(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Bt || (Bt = {}));
function Ne(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function je(n) {
  return function(t) {
    if (Ne(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements ? customElements.define(`${n.elementSelector}-${n.version}`, t) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ie(n) {
  return je(n);
}
function He(n) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        zt(this, "_stylesApplied", !1);
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
        var y;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), w = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && w) {
          const b = new CSSStyleSheet(), A = (y = l.sheet) == null ? void 0 : y.cssRules;
          A && (Array.from(A).forEach(($) => b.insertRule($.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          this.shadowRoot.appendChild(b);
        }
        u.forEach((b) => {
          const A = b.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return e;
  };
}
function De(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function ze(n) {
  return function(t, e) {
    try {
      De(n);
      const r = Reflect.getMetadata("ZeroAttribute", t) || [];
      typeof e == "string" && typeof t[e] != "function" && (n.fieldMappings = n.fieldMappings ?? e), r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function Le(n) {
  return ze(n);
}
var Gt;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(Gt || (Gt = {}));
var _t;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(_t || (_t = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, mt = it.ShadowRoot && (it.ShadyCSS === void 0 || it.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, gt = Symbol(), Wt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== gt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Be = (n) => new ee(typeof n == "string" ? n : n + "", void 0, gt), Ge = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, o, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[l + 1], n[0]);
  return new ee(e, n, gt);
}, We = (n, t) => {
  if (mt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = it.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, n.appendChild(r);
  }
}, Vt = mt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Be(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Fe, getOwnPropertyDescriptor: qe, getOwnPropertyNames: Ze, getOwnPropertySymbols: Ye, getPrototypeOf: Xe } = Object, j = globalThis, Ft = j.trustedTypes, Je = Ft ? Ft.emptyScript : "", dt = j.reactiveElementPolyfillSupport, Z = (n, t) => n, ot = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Je : null;
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
} }, wt = (n, t) => !Ve(n, t), qt = { attribute: !0, type: String, converter: ot, reflect: !1, hasChanged: wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class W extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = qt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && Fe(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: l } = qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(u) {
      const w = o == null ? void 0 : o.call(this);
      l.call(this, u), this.requestUpdate(t, w, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const e = this.properties, r = [...Ze(e), ...Ye(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(Vt(o));
    } else t !== void 0 && e.push(Vt(t));
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
    return We(t, this.constructor.elementStyles), t;
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
  _$EC(t, e) {
    var l;
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ot).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const u = r.getPropertyOptions(o), w = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : ot;
      this._$Em = o, this[o] = w.fromAttribute(e, u.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(t)), !(r.hasChanged ?? wt)(this[t], e)) return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) u.wrapped !== !0 || this._$AL.has(l) || this[l] === void 0 || this.P(l, this[l], u);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Z("elementProperties")] = /* @__PURE__ */ new Map(), W[Z("finalized")] = /* @__PURE__ */ new Map(), dt == null || dt({ ReactiveElement: W }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, st = Y.trustedTypes, Zt = st ? st.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, re = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + N, Qe = `<${ne}>`, D = document, J = () => D.createComment(""), Q = (n) => n === null || typeof n != "object" && typeof n != "function", $t = Array.isArray, Ke = (n) => $t(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", pt = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yt = /-->/g, Xt = />/g, I = RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Qt = /"/g, ie = /^(?:script|style|textarea|title)$/i, tr = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), ft = tr(1), z = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Kt = /* @__PURE__ */ new WeakMap(), H = D.createTreeWalker(D, 129);
function oe(n, t) {
  if (!$t(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const er = (n, t) => {
  const e = n.length - 1, r = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = q;
  for (let w = 0; w < e; w++) {
    const y = n[w];
    let b, A, $ = -1, T = 0;
    for (; T < y.length && (u.lastIndex = T, A = u.exec(y), A !== null); ) T = u.lastIndex, u === q ? A[1] === "!--" ? u = Yt : A[1] !== void 0 ? u = Xt : A[2] !== void 0 ? (ie.test(A[2]) && (o = RegExp("</" + A[2], "g")), u = I) : A[3] !== void 0 && (u = I) : u === I ? A[0] === ">" ? (u = o ?? q, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = u.lastIndex - A[2].length, b = A[1], u = A[3] === void 0 ? I : A[3] === '"' ? Qt : Jt) : u === Qt || u === Jt ? u = I : u === Yt || u === Xt ? u = q : (u = I, o = void 0);
    const x = u === I && n[w + 1].startsWith("/>") ? " " : "";
    l += u === q ? y + Qe : $ >= 0 ? (r.push(b), y.slice(0, $) + re + y.slice($) + N + x) : y + N + ($ === -2 ? w : x);
  }
  return [oe(n, l + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class K {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const w = t.length - 1, y = this.parts, [b, A] = er(t, e);
    if (this.el = K.createElement(b, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = H.nextNode()) !== null && y.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(re)) {
          const T = A[u++], x = o.getAttribute($).split(N), U = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: l, name: U[2], strings: x, ctor: U[1] === "." ? nr : U[1] === "?" ? ir : U[1] === "@" ? or : at }), o.removeAttribute($);
        } else $.startsWith(N) && (y.push({ type: 6, index: l }), o.removeAttribute($));
        if (ie.test(o.tagName)) {
          const $ = o.textContent.split(N), T = $.length - 1;
          if (T > 0) {
            o.textContent = st ? st.emptyScript : "";
            for (let x = 0; x < T; x++) o.append($[x], J()), H.nextNode(), y.push({ type: 2, index: ++l });
            o.append($[T], J());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ne) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(N, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += N.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = D.createElement("template");
    return r.innerHTML = t, r;
  }
}
function V(n, t, e = n, r) {
  var u, w;
  if (t === z) return t;
  let o = r !== void 0 ? (u = e.o) == null ? void 0 : u[r] : e.l;
  const l = Q(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), l === void 0 ? o = void 0 : (o = new l(n), o._$AT(n, e, r)), r !== void 0 ? (e.o ?? (e.o = []))[r] = o : e.l = o), o !== void 0 && (t = V(n, o._$AS(n, t.values), o, r)), t;
}
class rr {
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
    const { el: { content: e }, parts: r } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? D).importNode(e, !0);
    H.currentNode = o;
    let l = H.nextNode(), u = 0, w = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let b;
        y.type === 2 ? b = new tt(l, l.nextSibling, this, t) : y.type === 1 ? b = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (b = new sr(l, this, t)), this._$AV.push(b), y = r[++w];
      }
      u !== (y == null ? void 0 : y.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = D, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class tt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = V(this, t, e), Q(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ke(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && Q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(D.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = K.createElement(oe(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new rr(o, this), w = u.u(this.options);
      u.p(e), this.T(w), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = Kt.get(t.strings);
    return e === void 0 && Kt.set(t.strings, e = new K(t)), e;
  }
  k(t) {
    $t(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const l of t) o === e.length ? e.push(r = new tt(this.O(J()), this.O(J()), this, this.options)) : r = e[o], r._$AI(l), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this.v = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class at {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(t, e = this, r, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = V(this, t, e, 0), u = !Q(t) || t !== this._$AH && t !== z, u && (this._$AH = t);
    else {
      const w = t;
      let y, b;
      for (t = l[0], y = 0; y < l.length - 1; y++) b = V(this, w[r + y], e, y), b === z && (b = this._$AH[y]), u || (u = !Q(b) || b !== this._$AH[y]), b === C ? t = C : t !== C && (t += (b ?? "") + l[y + 1]), this._$AH[y] = b;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class nr extends at {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class ir extends at {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class or extends at {
  constructor(t, e, r, o, l) {
    super(t, e, r, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = V(this, t, e, 0) ?? C) === z) return;
    const r = this._$AH, o = t === C && r !== C || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== C && (r === C || o);
    o && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class sr {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
}
const yt = Y.litHtmlPolyfillSupport;
yt == null || yt(K, tt), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.2.0");
const ar = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = o = new tt(t.insertBefore(J(), l), l, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class X extends W {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = ar(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this.o) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.o) == null || t.setConnected(!1);
  }
  render() {
    return z;
  }
}
var te;
X._$litElement$ = !0, X.finalized = !0, (te = globalThis.litElementHydrateSupport) == null || te.call(globalThis, { LitElement: X });
const vt = globalThis.litElementPolyfillSupport;
vt == null || vt({ LitElement: X });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: ot, reflect: !1, hasChanged: wt }, lr = (n = ur, t, e) => {
  const { kind: r, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), l.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(w) {
      const y = t.get.call(this);
      t.set.call(this, w), this.requestUpdate(u, y, n);
    }, init(w) {
      return w !== void 0 && this.P(u, void 0, n), w;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(w) {
      const y = this[u];
      t.call(this, w), this.requestUpdate(u, y, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function bt(n) {
  return (t, e) => typeof e == "object" ? lr(n, t, e) : ((r, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, u ? { ...r, wrapped: !0 } : r), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { ATTRIBUTE: 1 }, hr = (n) => (...t) => ({ _$litDirective$: n, values: t });
class dr {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this.t = t, this._$AM = e, this.i = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = "important", pr = " !" + se, fr = hr(class extends dr {
  constructor(n) {
    var t;
    if (super(n), n.type !== cr.ATTRIBUTE || n.name !== "style" || ((t = n.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
      const o = t[r];
      if (o != null) {
        this.ft.add(r);
        const l = typeof o == "string" && o.endsWith(pr);
        r.includes("-") || l ? e.setProperty(r, l ? o.slice(0, -11) : o, l ? se : "") : e[r] = o;
      }
    }
    return z;
  }
});
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, et = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? vr(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (o = (r ? u(t, e, o) : u(o)) || o);
  return r && o && yr(t, e, o), o;
};
let L = class extends X {
  constructor() {
    super(...arguments), this.open = !1, this.hasBackdrop = !0, this.config = {
      webComponentSelector: "",
      inputs: {},
      outputs: {},
      position: "center"
    };
  }
  render() {
    const { webComponentSelector: n, inputs: t, outputs: e, position: r } = this.config, o = this._getPositionStyle(r);
    return ft`
        <div class="popup-backdrop ${this.hasBackdrop && this.open ? "open" : ""}" @click=${this._close}></div>
        <div class="popup-container ${this.open ? "open" : ""}" style=${fr(o)}>
          <div class="popup-header">
            <span>Popup Title</span>
            <span class="close-button" @click=${this._close}>✖</span>
          </div>
          <div class="popup-content">
            ${this.open && n ? ft`<${n} .inputs=${t} .outputs=${e}></${n}>` : ft`<p>No component provided.</p>`}
          </div>
          <div class="popup-arrow"></div>
          <div class="popup-arrow-outline"></div>
        </div>
      `;
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
L.styles = Ge`
      :host {
        display: block;
        font-family: Arial, sans-serif;
        --popup-bg-color: #fff;
        --popup-border-color: #ddd;
        --popup-hover-border-color: #ccc;
        --popup-font-color: #333;
        --popup-shadow-color: rgba(0, 0, 0, 0.1);
        --popup-border-radius: 6px;
        --popup-font-size: 12px;
        --popup-header-color: #666;
        --popup-icon-color: #666;
        --popup-option-hover-bg-color: #f0f0f0;
        --popup-width: 180px;
        --popup-padding: 8px;
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
et([
  bt({ type: Boolean })
], L.prototype, "open", 2);
et([
  bt({ type: Boolean })
], L.prototype, "hasBackdrop", 2);
et([
  bt({ type: Object })
], L.prototype, "config", 2);
et([
  Le({
    attributeType: _t.EVENT,
    displayLabel: "On Popup Closed",
    eventTrigger: "popup-closed"
  })
], L.prototype, "handlePopupClosed", 1);
L = et([
  Ie({
    name: "popup-dialog",
    version: "1.0.0",
    title: "Popup dialog",
    elementSelector: "zero-popup-dialog",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  He()
], L);
export {
  L as PopupDialog
};
