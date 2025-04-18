var Pt = Object.defineProperty;
var Tt = (r, e, t) => e in r ? Pt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ye = (r, e, t) => Tt(r, typeof e != "symbol" ? e + "" : e, t);
var Je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Qe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Je == "object" ? Je : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(v, $) {
      return function(A, E) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: E }), $ && $(A, E);
      };
    }
    function d() {
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
      return d() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", d = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !m && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Oe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return Oe({ __proto__: null });
      } : function() {
        return Oe({});
      },
      has: $ ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: $ ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, E = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : St(), N = typeof WeakMap == "function" ? WeakMap : Ot(), U = o ? Symbol.for("@reflect-metadata:registry") : void 0, L = Et(), W = $t(L);
    function F(i, a, s, c) {
      if (g(s)) {
        if (!We(i))
          throw new TypeError();
        if (!Be(a))
          throw new TypeError();
        return _(i, a);
      } else {
        if (!We(i))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(c) && !g(c) && !ne(c))
          throw new TypeError();
        return ne(c) && (c = void 0), s = j(s), R(i, a, s, c);
      }
    }
    e("decorate", F);
    function ge(i, a) {
      function s(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!g(y) && !_t(y))
          throw new TypeError();
        Le(i, a, c, y);
      }
      return s;
    }
    e("metadata", ge);
    function te(i, a, s, c) {
      if (!O(s))
        throw new TypeError();
      return g(c) || (c = j(c)), Le(i, a, s, c);
    }
    e("defineMetadata", te);
    function q(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = j(s)), D(i, a, s);
    }
    e("hasMetadata", q);
    function z(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = j(s)), J(i, a, s);
    }
    e("hasOwnMetadata", z);
    function Z(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = j(s)), se(i, a, s);
    }
    e("getMetadata", Z);
    function re(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = j(s)), me(i, a, s);
    }
    e("getOwnMetadata", re);
    function X(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = j(a)), De(i, a);
    }
    e("getMetadataKeys", X);
    function Y(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = j(a)), He(i, a);
    }
    e("getOwnMetadataKeys", Y);
    function B(i, a, s) {
      if (!O(a))
        throw new TypeError();
      if (g(s) || (s = j(s)), !O(a))
        throw new TypeError();
      g(s) || (s = j(s));
      var c = le(
        a,
        s,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, s);
    }
    e("deleteMetadata", B);
    function _(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var c = i[s], y = c(a);
        if (!g(y) && !ne(y)) {
          if (!Be(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function R(i, a, s, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], C = P(a, s, c);
        if (!g(C) && !ne(C)) {
          if (!O(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function D(i, a, s) {
      var c = J(i, a, s);
      if (c)
        return !0;
      var y = Se(a);
      return ne(y) ? !1 : D(i, y, s);
    }
    function J(i, a, s) {
      var c = le(
        a,
        s,
        /*Create*/
        !1
      );
      return g(c) ? !1 : ze(c.OrdinaryHasOwnMetadata(i, a, s));
    }
    function se(i, a, s) {
      var c = J(i, a, s);
      if (c)
        return me(i, a, s);
      var y = Se(a);
      if (!ne(y))
        return se(i, y, s);
    }
    function me(i, a, s) {
      var c = le(
        a,
        s,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, a, s);
    }
    function Le(i, a, s, c) {
      var y = le(
        s,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, a, s, c);
    }
    function De(i, a) {
      var s = He(i, a), c = Se(i);
      if (c === null)
        return s;
      var y = De(c, a);
      if (y.length <= 0)
        return s;
      if (s.length <= 0)
        return y;
      for (var P = new k(), C = [], b = 0, u = s; b < u.length; b++) {
        var h = u[b], p = P.has(h);
        p || (P.add(h), C.push(h));
      }
      for (var f = 0, w = y; f < w.length; f++) {
        var h = w[f], p = P.has(h);
        p || (P.add(h), C.push(h));
      }
      return C;
    }
    function He(i, a) {
      var s = le(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function je(i) {
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
    function ne(i) {
      return i === null;
    }
    function yt(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function gt(i, a) {
      switch (je(i)) {
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
      var s = "string", c = Ve(i, d);
      if (c !== void 0) {
        var y = c.call(i, s);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return mt(i);
    }
    function mt(i, a) {
      var s, c;
      {
        var y = i.toString;
        if (be(y)) {
          var c = y.call(i);
          if (!O(c))
            return c;
        }
        var s = i.valueOf;
        if (be(s)) {
          var c = s.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ze(i) {
      return !!i;
    }
    function bt(i) {
      return "" + i;
    }
    function j(i) {
      var a = gt(i);
      return yt(a) ? a : bt(a);
    }
    function We(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function be(i) {
      return typeof i == "function";
    }
    function Be(i) {
      return typeof i == "function";
    }
    function _t(i) {
      switch (je(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function xe(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ve(i, a) {
      var s = i[a];
      if (s != null) {
        if (!be(s))
          throw new TypeError();
        return s;
      }
    }
    function Ge(i) {
      var a = Ve(i, l);
      if (!be(a))
        throw new TypeError();
      var s = a.call(i);
      if (!O(s))
        throw new TypeError();
      return s;
    }
    function Fe(i) {
      return i.value;
    }
    function qe(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ze(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Se(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === E || a !== E)
        return a;
      var s = i.prototype, c = s && Object.getPrototypeOf(s);
      if (c == null || c === Object.prototype)
        return a;
      var y = c.constructor;
      return typeof y != "function" || y === i ? a : y;
    }
    function wt() {
      var i;
      !g(U) && typeof t.Reflect < "u" && !(U in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = At(t.Reflect));
      var a, s, c, y = new N(), P = {
        registerProvider: C,
        getProvider: u,
        setProvider: p
      };
      return P;
      function C(f) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case g(a):
            a = f;
            break;
          case a === f:
            break;
          case g(s):
            s = f;
            break;
          case s === f:
            break;
          default:
            c === void 0 && (c = new k()), c.add(f);
            break;
        }
      }
      function b(f, w) {
        if (!g(a)) {
          if (a.isProviderFor(f, w))
            return a;
          if (!g(s)) {
            if (s.isProviderFor(f, w))
              return a;
            if (!g(c))
              for (var x = Ge(c); ; ) {
                var S = qe(x);
                if (!S)
                  return;
                var H = Fe(S);
                if (H.isProviderFor(f, w))
                  return Ze(x), H;
              }
          }
        }
        if (!g(i) && i.isProviderFor(f, w))
          return i;
      }
      function u(f, w) {
        var x = y.get(f), S;
        return g(x) || (S = x.get(w)), g(S) && (S = b(f, w), g(S) || (g(x) && (x = new M(), y.set(f, x)), x.set(w, S))), S;
      }
      function h(f) {
        if (g(f))
          throw new TypeError();
        return a === f || s === f || !g(c) && c.has(f);
      }
      function p(f, w, x) {
        if (!h(x))
          throw new Error("Metadata provider not registered.");
        var S = u(f, w);
        if (S !== x) {
          if (!g(S))
            return !1;
          var H = y.get(f);
          g(H) && (H = new M(), y.set(f, H)), H.set(w, x);
        }
        return !0;
      }
    }
    function Et() {
      var i;
      return !g(U) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[U]), g(i) && (i = wt()), !g(U) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function $t(i) {
      var a = new N(), s = {
        isProviderFor: function(h, p) {
          var f = a.get(h);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: u
      };
      return L.registerProvider(s), s;
      function c(h, p, f) {
        var w = a.get(h), x = !1;
        if (g(w)) {
          if (!f)
            return;
          w = new M(), a.set(h, w), x = !0;
        }
        var S = w.get(p);
        if (g(S)) {
          if (!f)
            return;
          if (S = new M(), w.set(p, S), !i.setProvider(h, p, s))
            throw w.delete(p), x && a.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, p, f) {
        var w = c(
          p,
          f,
          /*Create*/
          !1
        );
        return g(w) ? !1 : ze(w.has(h));
      }
      function P(h, p, f) {
        var w = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function C(h, p, f, w) {
        var x = c(
          f,
          w,
          /*Create*/
          !0
        );
        x.set(h, p);
      }
      function b(h, p) {
        var f = [], w = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(w))
          return f;
        for (var x = w.keys(), S = Ge(x), H = 0; ; ) {
          var Xe = qe(S);
          if (!Xe)
            return f.length = H, f;
          var Ct = Fe(Xe);
          try {
            f[H] = Ct;
          } catch (Mt) {
            try {
              Ze(S);
            } finally {
              throw Mt;
            }
          }
          H++;
        }
      }
      function u(h, p, f) {
        var w = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var x = a.get(p);
          g(x) || (x.delete(f), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function At(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new N(), b = {
        isProviderFor: function(u, h) {
          var p = C.get(u);
          return !g(p) && p.has(h) ? !0 : y(u, h).length ? (g(p) && (p = new k(), C.set(u, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function le(i, a, s) {
      var c = L.getProvider(i, a);
      if (!g(c))
        return c;
      if (s) {
        if (L.setProvider(i, a, W))
          return W;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function b(u, h, p) {
            this._index = 0, this._keys = u, this._values = h, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var h = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), u;
          }, b.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: u, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(u, h) {
            var p = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, b.prototype.delete = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, xe(u, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new s(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new s(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new s(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(u, h) {
            if (!xe(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (xe(this._keys[p], u)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function y(b, u) {
        return b;
      }
      function P(b, u) {
        return u;
      }
      function C(b, u) {
        return [b, u];
      }
    }
    function St() {
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
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
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
          }, a.prototype[l] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Ot() {
      var i = 16, a = A.create(), s = c();
      return (
        /** @class */
        function() {
          function u() {
            this._key = c();
          }
          return u.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? A.has(p, this._key) : !1;
          }, u.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? A.get(p, this._key) : void 0;
          }, u.prototype.set = function(h, p) {
            var f = y(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, u.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = c();
          }, u;
        }()
      );
      function c() {
        var u;
        do
          u = "@@WeakMap@@" + b();
        while (A.has(a, u));
        return a[u] = !0, u;
      }
      function y(u, h) {
        if (!n.call(u, s)) {
          if (!h)
            return;
          Object.defineProperty(u, s, { value: A.create() });
        }
        return u[s];
      }
      function P(u, h) {
        for (var p = 0; p < h; ++p)
          u[p] = Math.random() * 255 | 0;
        return u;
      }
      function C(u) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, u), h;
        }
        return P(new Array(u), u);
      }
      function b() {
        var u = C(i);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var f = u[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Oe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Qe || (Qe = {}));
function kt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Rt(r) {
  return function(e) {
    if (kt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: this
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function It(r) {
  return Rt(r);
}
function Ut(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ye(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(d) {
        try {
          super.update(d);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const d = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (d && m) {
          const $ = new CSSStyleSheet(), A = (v = d.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach((E) => $.insertRule(E.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (d) {
          const $ = d.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const A = $.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return t;
  };
}
function Nt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Lt(r) {
  return function(e, t) {
    try {
      Nt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function Dt(r) {
  return Lt(r);
}
var I;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select";
})(I || (I = {}));
var ke;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(ke || (ke = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = globalThis, Re = _e.ShadowRoot && (_e.ShadyCSS === void 0 || _e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ie = Symbol(), Ke = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Re && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ke.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ke.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ht = (r) => new ct(typeof r == "string" ? r : r + "", void 0, Ie), jt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, d) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[d + 1], r[0]);
  return new ct(t, r, Ie);
}, zt = (r, e) => {
  if (Re) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = _e.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, et = Re ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ht(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Bt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Gt, getOwnPropertySymbols: Ft, getPrototypeOf: qt } = Object, G = globalThis, tt = G.trustedTypes, Zt = tt ? tt.emptyScript : "", Ce = G.reactiveElementPolyfillSupport, ce = (r, e) => r, we = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Zt : null;
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
} }, Ue = (r, e) => !Wt(r, e), rt = { attribute: !0, type: String, converter: we, reflect: !1, hasChanged: Ue };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), G.litPropertyMetadata ?? (G.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class ie extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = rt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Bt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: d } = Vt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const m = o == null ? void 0 : o.call(this);
      d.call(this, l), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ce("elementProperties"))) return;
    const e = qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ce("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ce("properties"))) {
      const t = this.properties, n = [...Gt(t), ...Ft(t)];
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(et(o));
    } else e !== void 0 && t.push(et(e));
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
    return zt(e, this.constructor.elementStyles), e;
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
  _$EC(e, t) {
    var d;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((d = n.converter) == null ? void 0 : d.toAttribute) !== void 0 ? n.converter : we).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((d = l.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? l.converter : we;
      this._$Em = o, this[o] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Ue)(this[e], t)) return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
        for (const [d, l] of this._$Ep) this[d] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [d, l] of o) l.wrapped !== !0 || this._$AL.has(d) || this[d] === void 0 || this.P(d, this[d], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var d;
        return (d = o.hostUpdate) == null ? void 0 : d.call(o);
      }), this.update(t)) : this._$EU();
    } catch (o) {
      throw e = !1, this._$EU(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
ie.elementStyles = [], ie.shadowRootOptions = { mode: "open" }, ie[ce("elementProperties")] = /* @__PURE__ */ new Map(), ie[ce("finalized")] = /* @__PURE__ */ new Map(), Ce == null || Ce({ ReactiveElement: ie }), (G.reactiveElementVersions ?? (G.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, Ee = ue.trustedTypes, nt = Ee ? Ee.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ut = "$lit$", V = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + V, Xt = `<${ht}>`, ee = document, pe = () => ee.createComment(""), fe = (r) => r === null || typeof r != "object" && typeof r != "function", Ne = Array.isArray, Yt = (r) => Ne(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Me = `[ 	
\f\r]`, de = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, it = /-->/g, ot = />/g, Q = RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, st = /"/g, pt = /^(?:script|style|textarea|title)$/i, Jt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Qt = Jt(1), oe = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), lt = /* @__PURE__ */ new WeakMap(), K = ee.createTreeWalker(ee, 129);
function ft(r, e) {
  if (!Ne(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return nt !== void 0 ? nt.createHTML(e) : e;
}
const Kt = (r, e) => {
  const t = r.length - 1, n = [];
  let o, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = de;
  for (let m = 0; m < t; m++) {
    const v = r[m];
    let $, A, E = -1, M = 0;
    for (; M < v.length && (l.lastIndex = M, A = l.exec(v), A !== null); ) M = l.lastIndex, l === de ? A[1] === "!--" ? l = it : A[1] !== void 0 ? l = ot : A[2] !== void 0 ? (pt.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = Q) : A[3] !== void 0 && (l = Q) : l === Q ? A[0] === ">" ? (l = o ?? de, E = -1) : A[1] === void 0 ? E = -2 : (E = l.lastIndex - A[2].length, $ = A[1], l = A[3] === void 0 ? Q : A[3] === '"' ? st : at) : l === st || l === at ? l = Q : l === it || l === ot ? l = de : (l = Q, o = void 0);
    const k = l === Q && r[m + 1].startsWith("/>") ? " " : "";
    d += l === de ? v + Xt : E >= 0 ? (n.push($), v.slice(0, E) + ut + v.slice(E) + V + k) : v + V + (E === -2 ? m : k);
  }
  return [ft(r, d + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ve {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let d = 0, l = 0;
    const m = e.length - 1, v = this.parts, [$, A] = Kt(e, t);
    if (this.el = ve.createElement($, n), K.currentNode = this.el.content, t === 2 || t === 3) {
      const E = this.el.content.firstChild;
      E.replaceWith(...E.childNodes);
    }
    for (; (o = K.nextNode()) !== null && v.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const E of o.getAttributeNames()) if (E.endsWith(ut)) {
          const M = A[l++], k = o.getAttribute(E).split(V), N = /([.?@])?(.*)/.exec(M);
          v.push({ type: 1, index: d, name: N[2], strings: k, ctor: N[1] === "." ? tr : N[1] === "?" ? rr : N[1] === "@" ? nr : Ae }), o.removeAttribute(E);
        } else E.startsWith(V) && (v.push({ type: 6, index: d }), o.removeAttribute(E));
        if (pt.test(o.tagName)) {
          const E = o.textContent.split(V), M = E.length - 1;
          if (M > 0) {
            o.textContent = Ee ? Ee.emptyScript : "";
            for (let k = 0; k < M; k++) o.append(E[k], pe()), K.nextNode(), v.push({ type: 2, index: ++d });
            o.append(E[M], pe());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ht) v.push({ type: 2, index: d });
      else {
        let E = -1;
        for (; (E = o.data.indexOf(V, E + 1)) !== -1; ) v.push({ type: 7, index: d }), E += V.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const n = ee.createElement("template");
    return n.innerHTML = e, n;
  }
}
function ae(r, e, t = r, n) {
  var l, m;
  if (e === oe) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const d = fe(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== d && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), d === void 0 ? o = void 0 : (o = new d(r), o._$AT(r, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = ae(r, o._$AS(r, e.values), o, n)), e;
}
class er {
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ee).importNode(t, !0);
    K.currentNode = o;
    let d = K.nextNode(), l = 0, m = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new ye(d, d.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(d, v.name, v.strings, this, e) : v.type === 6 && ($ = new ir(d, this, e)), this._$AV.push($), v = n[++m];
      }
      l !== (v == null ? void 0 : v.index) && (d = K.nextNode(), l++);
    }
    return K.currentNode = ee, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ye {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = ae(this, e, t), fe(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== oe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Yt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && fe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ee.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ve.createElement(ft(n.h, n.h[0]), this.options)), n);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === o) this._$AH.p(t);
    else {
      const l = new er(o, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = lt.get(e.strings);
    return t === void 0 && lt.set(e.strings, t = new ve(e)), t;
  }
  k(e) {
    Ne(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const d of e) o === t.length ? t.push(n = new ye(this.O(pe()), this.O(pe()), this, this.options)) : n = t[o], n._$AI(d), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Ae {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, d) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = d, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, o) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = ae(this, e, t, 0), l = !fe(e) || e !== this._$AH && e !== oe, l && (this._$AH = e);
    else {
      const m = e;
      let v, $;
      for (e = d[0], v = 0; v < d.length - 1; v++) $ = ae(this, m[n + v], t, v), $ === oe && ($ = this._$AH[v]), l || (l = !fe($) || $ !== this._$AH[v]), $ === T ? e = T : e !== T && (e += ($ ?? "") + d[v + 1]), this._$AH[v] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class tr extends Ae {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class rr extends Ae {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class nr extends Ae {
  constructor(e, t, n, o, d) {
    super(e, t, n, o, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ae(this, e, t, 0) ?? T) === oe) return;
    const n = this._$AH, o = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, d = e !== T && (n === T || o);
    o && this.element.removeEventListener(this.name, this, n), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ir {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ae(this, e);
  }
}
const Pe = ue.litHtmlPolyfillSupport;
Pe == null || Pe(ve, ye), (ue.litHtmlVersions ?? (ue.litHtmlVersions = [])).push("3.2.0");
const or = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ye(e.insertBefore(pe(), d), d, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class he extends ie {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = or(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return oe;
  }
}
var dt;
he._$litElement$ = !0, he.finalized = !0, (dt = globalThis.litElementHydrateSupport) == null || dt.call(globalThis, { LitElement: he });
const Te = globalThis.litElementPolyfillSupport;
Te == null || Te({ LitElement: he });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: we, reflect: !1, hasChanged: Ue }, sr = (r = ar, e, t) => {
  const { kind: n, metadata: o } = t;
  let d = globalThis.litPropertyMetadata.get(o);
  if (d === void 0 && globalThis.litPropertyMetadata.set(o, d = /* @__PURE__ */ new Map()), d.set(t.name, r), n === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const v = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, v, r);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, r), m;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(m) {
      const v = this[l];
      e.call(this, m), this.requestUpdate(l, v, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function lr(r) {
  return (e, t) => typeof t == "object" ? sr(r, e, t) : ((n, o, d) => {
    const l = o.hasOwnProperty(d);
    return o.constructor.createProperty(d, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, d) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, vt = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(e, t) : e, d = r.length - 1, l; d >= 0; d--)
    (l = r[d]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && dr(e, t, o), o;
};
let $e = class extends he {
  constructor() {
    super(...arguments), this.attr = [];
  }
  set AttributeWindowAttributes(r) {
    const e = typeof r == "string" ? JSON.parse(r) : r;
    this.attr = Array.isArray(e) ? e : [], this.firstUpdated();
  }
  get AttributeWindowAttributes() {
    return this.attr;
  }
  render() {
    return Qt`
            <div id="attributewindow-list">
                <!-- Dynamic attribute window elements will be injected here -->
            </div>
        `;
  }
  firstUpdated() {
    const r = "attribute-window";
    globalThis.zeroComponents = {};
    const e = document.createElement(r);
    globalThis.zeroComponents[r] || (globalThis.zeroComponents[r] = []), globalThis.zeroComponents[r].push(e), this.prepareAttributeWindow(r);
  }
  prepareAttributeWindow(r) {
    var n;
    const e = (n = this.shadowRoot) == null ? void 0 : n.getElementById("attributewindow-list"), t = {
      inputs: this.AttributeWindowAttributes.reduce((o, { fieldMappings: d, ...l }) => (o[d] = { ...l }, o), {}),
      outputs: {
        events: this.AttributeWindowAttributes.filter((o) => o.eventTrigger).map((o) => o.eventTrigger)
      }
    };
    e && t ? (e.innerHTML = "", Object.entries(t.inputs).forEach(([o, d]) => {
      const l = this.createInputElement(o, d, globalThis.zeroComponents[r][0]);
      e.appendChild(l);
    })) : console.error("attributewindow-list element not found or componentConfig not found");
  }
  createInputElement(r, e, t) {
    var d, l, m, v, $, A, E, M, k, N;
    const n = document.createElement("div"), o = document.createElement("label");
    switch (o.textContent = e.displayLabel || r, o.htmlFor = r, n.appendChild(o), e.uiComponentType) {
      case I.TEXT_INPUT:
        const U = document.createElement("input");
        U.type = ((d = e == null ? void 0 : e.optionItems) == null ? void 0 : d.type) || "text", U.id = r, U.value = ((l = e.initialValue) == null ? void 0 : l.toString()) || "", U.placeholder = e.placeholderText || "", U.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(U);
        break;
      case I.PASSWORD_INPUT:
        const L = document.createElement("input");
        L.type = "password", L.id = r, L.value = ((m = e.initialValue) == null ? void 0 : m.toString()) || "", L.placeholder = e.placeholderText || "", L.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(L);
        break;
      case I.TEXTAREA:
        const W = document.createElement("textarea");
        W.id = r, W.value = ((v = e.initialValue) == null ? void 0 : v.toString()) || "", W.placeholder = e.placeholderText || "", W.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(W);
        break;
      case I.CHECKBOX:
        const F = document.createElement("input");
        F.type = "checkbox", F.id = r, F.checked = !!e.initialValue, F.addEventListener("change", (_) => {
          t[r] = _.target.checked;
        }), n.appendChild(F);
        break;
      case I.RADIO_BUTTON:
        const ge = document.createElement("div");
        e.optionItems.forEach((_) => {
          var se;
          const R = document.createElement("div"), D = document.createElement("input");
          D.type = "radio", D.name = r, D.id = `${r}_${_.value}`, D.value = _.value.toString(), D.checked = _.value.toString() === ((se = e.initialValue) == null ? void 0 : se.toString()), D.addEventListener("change", (me) => {
            t[r] = me.target.value;
          });
          const J = document.createElement("label");
          J.htmlFor = D.id, J.textContent = _.label.toString(), R.appendChild(D), R.appendChild(J), ge.appendChild(R);
        }), n.appendChild(ge);
        break;
      case I.DROPDOWN:
        const te = document.createElement("select");
        te.id = r, e.optionItems.forEach((_) => {
          const R = document.createElement("option");
          R.value = _.value.toString(), R.textContent = _.label.toString(), te.appendChild(R);
        }), te.addEventListener("change", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(te);
        break;
      case I.MULTI_SELECT:
        const q = document.createElement("select");
        q.id = r, q.multiple = !0, e.optionItems.forEach((_) => {
          const R = document.createElement("option");
          R.value = _.value.toString(), R.textContent = _.label.toString(), q.appendChild(R);
        }), q.addEventListener("change", (_) => {
          t[r] = Array.from(_.target.selectedOptions).map((R) => R.value);
        }), n.appendChild(q);
        break;
      case I.RANGE_SLIDER:
        const z = document.createElement("input");
        z.type = "range", z.id = r, z.min = (($ = e.optionItems.min) == null ? void 0 : $.toString()) || "0", z.max = ((A = e.optionItems.max) == null ? void 0 : A.toString()) || "100", z.value = ((E = e.initialValue) == null ? void 0 : E.toString()) || "0", z.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(z);
        break;
      case I.COLOR_PICKER:
        const Z = document.createElement("input");
        Z.type = "color", Z.id = r, Z.value = ((M = e.initialValue) == null ? void 0 : M.toString()) || "#ffffff", Z.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(Z);
        break;
      case I.FILE_INPUT:
        const re = document.createElement("input");
        re.type = "file", re.id = r, re.addEventListener("change", (_) => {
          t[r] = _.target.files;
        }), n.appendChild(re);
        break;
      case I.DATE_PICKER:
        const X = document.createElement("input");
        X.type = "date", X.id = r, X.value = ((k = e.initialValue) == null ? void 0 : k.toString()) || "", X.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(X);
        break;
      case I.POPUP_DROPDOWN:
        const Y = document.createElement("zero-popup-dropdown-1.0.0");
        Y.id = r, Y.selectedOption = e.initialValue, Y.OptionConfig = e.optionItems, Y.addEventListener("change", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(Y);
        break;
      default:
        const B = document.createElement("input");
        B.type = "text", B.id = r, B.value = ((N = e.initialValue) == null ? void 0 : N.toString()) || "", B.placeholder = e.placeholderText || "", B.addEventListener("input", (_) => {
          t[r] = _.target.value;
        }), n.appendChild(B);
        break;
    }
    return n;
  }
};
$e.styles = jt`
        /* Add styles here */
        :root {
            --primary-color: #333;     
            --secondary-color: #1C1C1C; 
            --text-color: #E0E0E0;     
            --header-height: 50px;     
            --sidenav-width: 250px;    
            --transition-speed: 0.3s;  
            --font-family: 'Roboto', sans-serif; 
            --background-color: #121212; 
            --hover-color: #444;      
        }

        body {
            margin: 0;
            font-family: var(--font-family);
            color: var(--text-color);
            background-color: var(--background-color);
        }

        .header {
            background-color: var(--primary-color);
            color: var(--text-color);
            text-align: center;
            padding: 10px;
            height: var(--header-height);
            line-height: var(--header-height);
            position: relative;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); 
        }

        .header .toggle-btn {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 22px;
            cursor: pointer;
            background: none;
            border: none;
            color: var(--text-color);
            transition: color var(--transition-speed);
        }

        .header .toggle-btn:hover {
            color: rgba(255, 255, 255, 0.8); 
        }

        .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: var(--secondary-color);
            overflow-x: hidden;
            transition: width var(--transition-speed);
            padding-top: var(--header-height);
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.7); 
        }

        .sidenav a {
            padding: 15px 20px;
            text-decoration: none;
            font-size: 18px;
            color: var(--text-color);
            display: block;
            transition: background-color var(--transition-speed), padding-left var(--transition-speed);
        }

        .sidenav a:hover {
            background-color: var(--hover-color);
            padding-left: 30px; 
        }

        .main {
            margin-left: 0;
            transition: margin-left var(--transition-speed);
            padding: 20px;
        }

        .main h2 {
            font-weight: 500;
            color: #E0E0E0;
        }

        .main ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .main li {
            padding: 10px;
            border-bottom: 1px solid #444;
            color: #B0B0B0;
        }

        .main li:hover {
            background-color: #333;
            cursor: pointer;
        }


        /* Basic container styling */
        div > div {
            margin: 10px 0;
            padding: 12px;
            border-radius: 8px;
            background-color: var(--background-color);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--secondary-color);
            transition: background-color 0.3s, border-color 0.3s;
            display: flex;
            flex-direction: column;
        }

        /* Hover effect for containers */
        div > div:hover {
            background-color: var(--secondary-color);
            border-color: var(--primary-color);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }

        /* Label styling */
        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--text-color);
            font-weight: 500;
        }

        /* General styles for input elements */
        input[type="text"],
        input[type="checkbox"],
        input[type="color"],
        input[type="range"],
        input[type="password"],
        input[type="file"],
        input[type="date"],
        textarea,
        select {
            background-color: var(--secondary-color); /* Dark background for inputs */
            color: var(--text-color); /* Light text for contrast */
            border: 1px solid var(--primary-color); /* Light border for inputs */
            border-radius: 4px;
            padding: 8px;
            margin: 4px 0;
            box-sizing: border-box;
            font-size: 14px;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        /* Styles for range sliders */
        input[type="range"] {
            width: calc(100% - 16px);
            -webkit-appearance: none;
            background: var(--secondary-color);
            border-radius: 4px;
            height: 6px;
            cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: var(--primary-color);
            border: 2px solid var(--hover-color);
            border-radius: 50%;
            height: 20px;
            width: 20px;
            cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
            background: var(--primary-color);
            border: 2px solid var(--hover-color);
            border-radius: 50%;
            height: 20px;
            width: 20px;
            cursor: pointer;
        }

        /* Styles for dropdowns */
        select {
            padding: 8px;
            border: 1px solid var(--primary-color); /* Dark border for dropdowns */
            border-radius: 4px;
            background-color: var(--secondary-color); /* Dark background for dropdowns */
            color: var(--text-color); /* Light text for contrast */
        }

        /* Styles for checkboxes */
        input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            appearance: none;
            background-color: var(--secondary-color); /* Dark background */
            border: 2px solid var(--primary-color); /* Light border */
            border-radius: 4px;
            transition: background-color 0.3s, border-color 0.3s;
        }

        input[type="checkbox"]:checked {
            background-color: var(--primary-color); /* Highlight when checked */
            border-color: var(--primary-color); /* Match border with background */
        }

        /* Styles for color pickers */
        input[type="color"] {
            border: none;
            width: 32px;
            height: 32px;
            padding: 0;
            cursor: pointer;
        }

        /* Focus styles for inputs */
        input:focus,
        select:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
        }
    `;
vt([
  lr({ type: Array }),
  Dt({
    attributeType: ke.PROPERTY,
    uiComponentType: I.TEXTAREA,
    displayLabel: "",
    placeholderText: "",
    fieldMappings: "AttributeWindowAttributes"
  })
], $e.prototype, "AttributeWindowAttributes", 1);
$e = vt([
  It({
    name: "attribute-window",
    version: "1.0.0",
    title: "Attribute window",
    elementSelector: "zero-attribute-window",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Ut()
], $e);
export {
  $e as AttributeWindow
};
