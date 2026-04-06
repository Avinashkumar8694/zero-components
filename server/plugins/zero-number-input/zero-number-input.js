var kt = Object.defineProperty;
var Nt = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Be = (i, e, t) => Nt(i, typeof e != "symbol" ? e + "" : e, t);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = o(i);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(v, $) {
      return function(E, w) {
        Object.defineProperty(v, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    function _() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !_ && !v, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(r, s) {
        return n.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: $ ? function(r, s) {
        return n.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), D = typeof WeakMap == "function" ? WeakMap : xt(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, oe = Mt(), Me = St(oe);
    function at(r, s, a, d) {
      if (m(a)) {
        if (!Ne(r))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return mt(r, s);
      } else {
        if (!Ne(r))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(d) && !m(d) && !F(d))
          throw new TypeError();
        return F(d) && (d = void 0), a = j(a), bt(r, s, a, d);
      }
    }
    e("decorate", at);
    function lt(r, s) {
      function a(d, y) {
        if (!S(d))
          throw new TypeError();
        if (!m(y) && !Et(y))
          throw new TypeError();
        Pe(r, s, d, y);
      }
      return a;
    }
    e("metadata", lt);
    function ut(r, s, a, d) {
      if (!S(a))
        throw new TypeError();
      return m(d) || (d = j(d)), Pe(r, s, a, d);
    }
    e("defineMetadata", ut);
    function dt(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = j(a)), Se(r, s, a);
    }
    e("hasMetadata", dt);
    function ht(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = j(a)), ce(r, s, a);
    }
    e("hasOwnMetadata", ht);
    function ct(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = j(a)), Te(r, s, a);
    }
    e("getMetadata", ct);
    function ft(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = j(a)), Oe(r, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, s) {
      if (!S(r))
        throw new TypeError();
      return m(s) || (s = j(s)), xe(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!S(r))
        throw new TypeError();
      return m(s) || (s = j(s)), Ce(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!S(s))
        throw new TypeError();
      if (m(a) || (a = j(a)), !S(s))
        throw new TypeError();
      m(a) || (a = j(a));
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function mt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var d = r[a], y = d(s);
        if (!m(y) && !F(y)) {
          if (!Ue(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function bt(r, s, a, d) {
      for (var y = r.length - 1; y >= 0; --y) {
        var O = r[y], T = O(s, a, d);
        if (!m(T) && !F(T)) {
          if (!S(T))
            throw new TypeError();
          d = T;
        }
      }
      return d;
    }
    function Se(r, s, a) {
      var d = ce(r, s, a);
      if (d)
        return !0;
      var y = pe(s);
      return F(y) ? !1 : Se(r, y, a);
    }
    function ce(r, s, a) {
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : ke(d.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Te(r, s, a) {
      var d = ce(r, s, a);
      if (d)
        return Oe(r, s, a);
      var y = pe(s);
      if (!F(y))
        return Te(r, y, a);
    }
    function Oe(r, s, a) {
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Pe(r, s, a, d) {
      var y = J(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, d);
    }
    function xe(r, s) {
      var a = Ce(r, s), d = pe(r);
      if (d === null)
        return a;
      var y = xe(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new I(), T = [], b = 0, h = a; b < h.length; b++) {
        var c = h[b], f = O.has(c);
        f || (O.add(c), T.push(c));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var c = g[p], f = O.has(c);
        f || (O.add(c), T.push(c));
      }
      return T;
    }
    function Ce(r, s) {
      var a = J(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Re(r) {
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
    function m(r) {
      return r === void 0;
    }
    function F(r) {
      return r === null;
    }
    function gt(r) {
      return typeof r == "symbol";
    }
    function S(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function _t(r, s) {
      switch (Re(r)) {
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
      var a = "string", d = Ie(r, u);
      if (d !== void 0) {
        var y = d.call(r, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return wt(r);
    }
    function wt(r, s) {
      var a, d;
      {
        var y = r.toString;
        if (ae(y)) {
          var d = y.call(r);
          if (!S(d))
            return d;
        }
        var a = r.valueOf;
        if (ae(a)) {
          var d = a.call(r);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function ke(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function j(r) {
      var s = _t(r);
      return gt(s) ? s : $t(s);
    }
    function Ne(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ae(r) {
      return typeof r == "function";
    }
    function Ue(r) {
      return typeof r == "function";
    }
    function Et(r) {
      switch (Re(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(r, s) {
      return r === s || r !== r && s !== s;
    }
    function Ie(r, s) {
      var a = r[s];
      if (a != null) {
        if (!ae(a))
          throw new TypeError();
        return a;
      }
    }
    function He(r) {
      var s = Ie(r, l);
      if (!ae(s))
        throw new TypeError();
      var a = s.call(r);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Le(r) {
      return r.value;
    }
    function je(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function De(r) {
      var s = r.return;
      s && s.call(r);
    }
    function pe(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === w || s !== w)
        return s;
      var a = r.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function At() {
      var r;
      !m(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Tt(t.Reflect));
      var s, a, d, y = new D(), O = {
        registerProvider: T,
        getProvider: h,
        setProvider: f
      };
      return O;
      function T(p) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case m(s):
            s = p;
            break;
          case s === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            d === void 0 && (d = new I()), d.add(p);
            break;
        }
      }
      function b(p, g) {
        if (!m(s)) {
          if (s.isProviderFor(p, g))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(p, g))
              return s;
            if (!m(d))
              for (var A = He(d); ; ) {
                var M = je(A);
                if (!M)
                  return;
                var L = Le(M);
                if (L.isProviderFor(p, g))
                  return De(A), L;
              }
          }
        }
        if (!m(r) && r.isProviderFor(p, g))
          return r;
      }
      function h(p, g) {
        var A = y.get(p), M;
        return m(A) || (M = A.get(g)), m(M) && (M = b(p, g), m(M) || (m(A) && (A = new R(), y.set(p, A)), A.set(g, M))), M;
      }
      function c(p) {
        if (m(p))
          throw new TypeError();
        return s === p || a === p || !m(d) && d.has(p);
      }
      function f(p, g, A) {
        if (!c(A))
          throw new Error("Metadata provider not registered.");
        var M = h(p, g);
        if (M !== A) {
          if (!m(M))
            return !1;
          var L = y.get(p);
          m(L) && (L = new R(), y.set(p, L)), L.set(g, A);
        }
        return !0;
      }
    }
    function Mt() {
      var r;
      return !m(q) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[q]), m(r) && (r = At()), !m(q) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function St(r) {
      var s = new D(), a = {
        isProviderFor: function(c, f) {
          var p = s.get(c);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: T,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return oe.registerProvider(a), a;
      function d(c, f, p) {
        var g = s.get(c), A = !1;
        if (m(g)) {
          if (!p)
            return;
          g = new R(), s.set(c, g), A = !0;
        }
        var M = g.get(f);
        if (m(M)) {
          if (!p)
            return;
          if (M = new R(), g.set(f, M), !r.setProvider(c, f, a))
            throw g.delete(f), A && s.delete(c), new Error("Wrong provider for target.");
        }
        return M;
      }
      function y(c, f, p) {
        var g = d(
          f,
          p,
          /*Create*/
          !1
        );
        return m(g) ? !1 : ke(g.has(c));
      }
      function O(c, f, p) {
        var g = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(g))
          return g.get(c);
      }
      function T(c, f, p, g) {
        var A = d(
          p,
          g,
          /*Create*/
          !0
        );
        A.set(c, f);
      }
      function b(c, f) {
        var p = [], g = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (m(g))
          return p;
        for (var A = g.keys(), M = He(A), L = 0; ; ) {
          var ze = je(M);
          if (!ze)
            return p.length = L, p;
          var Ct = Le(ze);
          try {
            p[L] = Ct;
          } catch (Rt) {
            try {
              De(M);
            } finally {
              throw Rt;
            }
          }
          L++;
        }
      }
      function h(c, f, p) {
        var g = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(g) || !g.delete(c))
          return !1;
        if (g.size === 0) {
          var A = s.get(f);
          m(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Tt(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, d = r.getOwnMetadata, y = r.getOwnMetadataKeys, O = r.deleteMetadata, T = new D(), b = {
        isProviderFor: function(h, c) {
          var f = T.get(h);
          return !m(f) && f.has(c) ? !0 : y(h, c).length ? (m(f) && (f = new I(), T.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function J(r, s, a) {
      var d = oe.getProvider(r, s);
      if (!m(d))
        return d;
      if (a) {
        if (oe.setProvider(r, s, Me))
          return Me;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function b(h, c, f) {
            this._index = 0, this._keys = h, this._values = c, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, b;
        }()
      ), d = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, b.prototype.set = function(h, c) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, b.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, p = c + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, fe(h, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, T);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(h, c) {
            if (!fe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return d;
      function y(b, h) {
        return b;
      }
      function O(b, h) {
        return h;
      }
      function T(b, h) {
        return [b, h];
      }
    }
    function Pt() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new R();
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
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return r;
    }
    function xt() {
      var r = 16, s = E.create(), a = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var f = y(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = y(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var p = y(
              c,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(c) {
            var f = y(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while (E.has(s, h));
        return s[h] = !0, h;
      }
      function y(h, c) {
        if (!n.call(h, a)) {
          if (!c)
            return;
          Object.defineProperty(h, a, { value: E.create() });
        }
        return h[a];
      }
      function O(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function T(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : O(c, h), c;
        }
        return O(new Array(h), h);
      }
      function b() {
        var h = T(r);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < r; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), p < 16 && (c += "0"), c += p.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ye(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ge || (Ge = {}));
function Ut(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function It(i) {
  return function(e) {
    if (Ut(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${i.elementSelector}-${i.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ht(i) {
  return It(i);
}
function Lt(i) {
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
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const $ = new CSSStyleSheet(), E = (v = u.sheet) == null ? void 0 : v.cssRules;
          E && (Array.from(E).forEach((w) => $.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (u) {
          const $ = u.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const E = $.cloneNode(!0);
          this.shadowRoot.appendChild(E);
        });
      }
    }
    return t;
  };
}
function jt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Dt(i) {
  return function(e, t) {
    try {
      jt(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function U(i) {
  return Dt(i);
}
var N;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(N || (N = {}));
var C;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(C || (C = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = globalThis, we = le.ShadowRoot && (le.ShadyCSS === void 0 || le.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, $e), Bt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new rt(t, i, $e);
}, Vt = (i, e) => {
  if (we) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = le.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, qe = we ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Ft, getOwnPropertySymbols: Yt, getPrototypeOf: Xt } = Object, B = globalThis, Fe = B.trustedTypes, Zt = Fe ? Fe.emptyScript : "", ve = B.reactiveElementPolyfillSupport, K = (i, e) => i, ue = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Zt : null;
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
} }, Ee = (i, e) => !Gt(i, e), Ye = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Y extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Wt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const _ = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Xt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, n = [...Ft(t), ...Yt(t)];
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
      for (const o of n) t.unshift(qe(o));
    } else e !== void 0 && t.push(qe(e));
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
    return Vt(e, this.constructor.elementStyles), e;
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
    var u;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ue).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ue;
      this._$Em = o, this[o] = _.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Ee)(this[e], t)) return;
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [u, l] of o) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var u;
        return (u = o.hostUpdate) == null ? void 0 : u.call(o);
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[K("elementProperties")] = /* @__PURE__ */ new Map(), Y[K("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: Y }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, de = ee.trustedTypes, Xe = de ? de.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + z, Jt = `<${it}>`, W = document, re = () => W.createComment(""), ne = (i) => i === null || typeof i != "object" && typeof i != "function", Ae = Array.isArray, Qt = (i) => Ae(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, V = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), be = Kt(1), X = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function ot(i, e) {
  if (!Ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let _ = 0; _ < t; _++) {
    const v = i[_];
    let $, E, w = -1, R = 0;
    for (; R < v.length && (l.lastIndex = R, E = l.exec(v), E !== null); ) R = l.lastIndex, l === Q ? E[1] === "!--" ? l = Ze : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (st.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = V) : E[3] !== void 0 && (l = V) : l === V ? E[0] === ">" ? (l = o ?? Q, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? V : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = V : l === Ze || l === Je ? l = Q : (l = V, o = void 0);
    const I = l === V && i[_ + 1].startsWith("/>") ? " " : "";
    u += l === Q ? v + Jt : w >= 0 ? (n.push($), v.slice(0, w) + nt + v.slice(w) + z + I) : v + z + (w === -2 ? _ : I);
  }
  return [ot(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ie {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, v = this.parts, [$, E] = er(e, t);
    if (this.el = ie.createElement($, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = G.nextNode()) !== null && v.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(nt)) {
          const R = E[l++], I = o.getAttribute(w).split(z), D = /([.?@])?(.*)/.exec(R);
          v.push({ type: 1, index: u, name: D[2], strings: I, ctor: D[1] === "." ? rr : D[1] === "?" ? nr : D[1] === "@" ? ir : he }), o.removeAttribute(w);
        } else w.startsWith(z) && (v.push({ type: 6, index: u }), o.removeAttribute(w));
        if (st.test(o.tagName)) {
          const w = o.textContent.split(z), R = w.length - 1;
          if (R > 0) {
            o.textContent = de ? de.emptyScript : "";
            for (let I = 0; I < R; I++) o.append(w[I], re()), G.nextNode(), v.push({ type: 2, index: ++u });
            o.append(w[R], re());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) v.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(z, w + 1)) !== -1; ) v.push({ type: 7, index: u }), w += z.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Z(i, e, t = i, n) {
  var l, _;
  if (e === X) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ne(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = Z(i, o._$AS(i, e.values), o, n)), e;
}
class tr {
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    G.currentNode = o;
    let u = G.nextNode(), l = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new se(u, u.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), v = n[++_];
      }
      l !== (v == null ? void 0 : v.index) && (u = G.nextNode(), l++);
    }
    return G.currentNode = W, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Z(this, e, t), ne(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ie.createElement(ot(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[o], n._$AI(u), o++;
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
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, u) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = Z(this, e, t, 0), l = !ne(e) || e !== this._$AH && e !== X, l && (this._$AH = e);
    else {
      const _ = e;
      let v, $;
      for (e = u[0], v = 0; v < u.length - 1; v++) $ = Z(this, _[n + v], t, v), $ === X && ($ = this._$AH[v]), l || (l = !ne($) || $ !== this._$AH[v]), $ === P ? e = P : e !== P && (e += ($ ?? "") + u[v + 1]), this._$AH[v] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class nr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ir extends he {
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? P) === X) return;
    const n = this._$AH, o = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Z(this, e);
  }
}
const ge = ee.litHtmlPolyfillSupport;
ge == null || ge(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const or = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(re(), u), u, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class te extends Y {
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
    return X;
  }
}
var tt;
te._$litElement$ = !0, te.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: te });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Ee }, lr = (i = ar, e, t) => {
  const { kind: n, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, i), n === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, v, i);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, i), _;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(_) {
      const v = this[l];
      e.call(this, _), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function H(i) {
  return (e, t) => typeof t == "object" ? lr(i, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, k = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? dr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && ur(e, t, o), o;
};
let x = class extends te {
  constructor() {
    super(...arguments), this.value = 0, this.label = "Number Input", this.placeholder = "Enter number", this.min = 0, this.max = 100, this.step = 1, this.required = !1, this.disabled = !1, this.showStepControls = !0, this.unitLabel = "", this.errorMessage = "", this.showError = !1;
  }
  increment() {
    const i = this.value + this.step;
    i <= this.max && (this.value = Math.round(i * 100) / 100, this.dispatchChangeEvent());
  }
  decrement() {
    const i = this.value - this.step;
    i >= this.min && (this.value = Math.round(i * 100) / 100, this.dispatchChangeEvent());
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleInput(i) {
    const e = i.target;
    this.value = Number(e.value) || 0, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(i) {
    const e = i.target;
    let t = Number(e.value) || 0;
    t = Math.max(this.min, Math.min(this.max, t)), this.value = t, e.value = String(t), this.dispatchChangeEvent();
  }
  render() {
    return be`
            <div class="form-field">
                <label for="number-input">${this.label}</label>
                <div class="number-container">
                    <input 
                        id="number-input"
                        type="number" 
                        class="mat-mdc-input-element ${this.showError ? "error" : ""}"
                        .value="${String(this.value)}" 
                        placeholder="${this.placeholder}"
                        min="${this.min}"
                        max="${this.max}"
                        step="${this.step}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                        @change="${this.handleChange}"
                    />
                    ${this.showStepControls ? be`
                        <div class="step-controls">
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${this.increment}"
                            >▲</button>
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${this.decrement}"
                            >▼</button>
                        </div>
                    ` : ""}
                </div>
                ${this.unitLabel ? be`
                    <div class="value-display">
                        Current: ${this.value} ${this.unitLabel}
                    </div>
                ` : ""}
                <div class="error-message ${this.showError ? "show" : ""}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
x.styles = Bt`
        :host {
            display: block;
            width: 100%;
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }

        .number-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        input.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .step-controls {
            display: flex;
            flex-direction: column;
            margin-left: var(--spacing-xs, 4px);
        }        .step-button {
            background: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            color: var(--text-primary, #333);
            cursor: pointer;
            font-size: var(--font-size-xs, 12px);
            padding: var(--spacing-xs, 2px) var(--spacing-xs, 6px);
            min-width: var(--icon-size-sm, 24px);
            height: var(--input-step-height, 18px);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-fast, background-color 0.2s, border-color 0.2s);
        }

        .step-button:first-child {
            border-radius: var(--border-radius-sm, 4px) var(--border-radius-sm, 4px) 0 0;
            border-bottom: 0;
        }

        .step-button:last-child {
            border-radius: 0 0 var(--border-radius-sm, 4px) var(--border-radius-sm, 4px);
        }

        .step-button:hover:not(:disabled) {
            background: var(--primary-light, #6c63ff);
            color: white;
            border-color: var(--primary-color, #6c63ff);
        }

        .step-button:disabled {
            background: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #ccc);
            cursor: not-allowed;
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            margin-top: var(--spacing-xs, 4px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        input.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        input.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        .value-display {
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
            margin-top: var(--spacing-xs, 4px);
        }
    `;
k([
  H({ type: Number }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], x.prototype, "value", 2);
k([
  H({ type: String }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
k([
  H({ type: String }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], x.prototype, "placeholder", 2);
k([
  H({ type: Number }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Minimum Value",
    fieldMappings: "min"
  })
], x.prototype, "min", 2);
k([
  H({ type: Number }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Maximum Value",
    fieldMappings: "max"
  })
], x.prototype, "max", 2);
k([
  H({ type: Number }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Step",
    fieldMappings: "step"
  })
], x.prototype, "step", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], x.prototype, "required", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], x.prototype, "disabled", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Step Controls",
    fieldMappings: "showStepControls"
  })
], x.prototype, "showStepControls", 2);
k([
  H({ type: String }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Unit Label",
    placeholderText: "e.g., kg, cm, %",
    fieldMappings: "unitLabel"
  })
], x.prototype, "unitLabel", 2);
k([
  H({ type: String }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], x.prototype, "errorMessage", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: C.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], x.prototype, "showError", 2);
k([
  U({
    attributeType: C.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], x.prototype, "handleInput", 1);
k([
  U({
    attributeType: C.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], x.prototype, "handleChange", 1);
x = k([
  Ht({
    name: "zero-number-input",
    version: "1.0.0",
    title: "Number Input",
    elementSelector: "zero-number-input",
    group: "Form Controls",
    iconName: "number-input-icon.png"
  }),
  Lt()
], x);
export {
  x as ZeroNumberInput
};
