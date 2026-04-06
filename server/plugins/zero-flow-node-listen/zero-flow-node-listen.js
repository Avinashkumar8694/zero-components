var Tt = Object.defineProperty;
var Rt = (i, e, t) => e in i ? Tt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var De = (i, e, t) => Rt(i, typeof e != "symbol" ? e + "" : e, t);
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
var ze;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Le == "object" ? Le : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(v, b) {
      return function(A, $) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: $ }), b && b(A, $);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return he(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return he({ __proto__: null });
      } : function() {
        return he({});
      },
      has: b ? function(r, s) {
        return n.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: b ? function(r, s) {
        return n.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : St(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Mt(), N = typeof WeakMap == "function" ? WeakMap : Ot(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, te = bt(), be = At(te);
    function it(r, s, a, h) {
      if (_(a)) {
        if (!Re(r))
          throw new TypeError();
        if (!ke(s))
          throw new TypeError();
        return pt(r, s);
      } else {
        if (!Re(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(h) && !_(h) && !z(h))
          throw new TypeError();
        return z(h) && (h = void 0), a = x(a), yt(r, s, a, h);
      }
    }
    e("decorate", it);
    function st(r, s) {
      function a(h, y) {
        if (!M(h))
          throw new TypeError();
        if (!_(y) && !wt(y))
          throw new TypeError();
        Me(r, s, h, y);
      }
      return a;
    }
    e("metadata", st);
    function ot(r, s, a, h) {
      if (!M(a))
        throw new TypeError();
      return _(h) || (h = x(h)), Me(r, s, a, h);
    }
    e("defineMetadata", ot);
    function at(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ae(r, s, a);
    }
    e("hasMetadata", at);
    function ut(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = x(a)), ae(r, s, a);
    }
    e("hasOwnMetadata", ut);
    function lt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ee(r, s, a);
    }
    e("getMetadata", lt);
    function ht(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Se(r, s, a);
    }
    e("getOwnMetadata", ht);
    function ct(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Oe(r, s);
    }
    e("getMetadataKeys", ct);
    function ft(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Pe(r, s);
    }
    e("getOwnMetadataKeys", ft);
    function dt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (_(a) || (a = x(a)), !M(s))
        throw new TypeError();
      _(a) || (a = x(a));
      var h = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", dt);
    function pt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!_(y) && !z(y)) {
          if (!ke(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function yt(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], O = P(s, a, h);
        if (!_(O) && !z(O)) {
          if (!M(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Ae(r, s, a) {
      var h = ae(r, s, a);
      if (h)
        return !0;
      var y = le(s);
      return z(y) ? !1 : Ae(r, y, a);
    }
    function ae(r, s, a) {
      var h = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Te(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Ee(r, s, a) {
      var h = ae(r, s, a);
      if (h)
        return Se(r, s, a);
      var y = le(s);
      if (!z(y))
        return Ee(r, y, a);
    }
    function Se(r, s, a) {
      var h = F(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Me(r, s, a, h) {
      var y = F(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Oe(r, s) {
      var a = Pe(r, s), h = le(r);
      if (h === null)
        return a;
      var y = Oe(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), O = [], m = 0, c = a; m < c.length; m++) {
        var f = c[m], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var f = g[p], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      return O;
    }
    function Pe(r, s) {
      var a = F(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Ce(r) {
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
    function _(r) {
      return r === void 0;
    }
    function z(r) {
      return r === null;
    }
    function vt(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function _t(r, s) {
      switch (Ce(r)) {
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
      var a = "string", h = xe(r, l);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return mt(r);
    }
    function mt(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (re(y)) {
          var h = y.call(r);
          if (!M(h))
            return h;
        }
        var a = r.valueOf;
        if (re(a)) {
          var h = a.call(r);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Te(r) {
      return !!r;
    }
    function gt(r) {
      return "" + r;
    }
    function x(r) {
      var s = _t(r);
      return vt(s) ? s : gt(s);
    }
    function Re(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function re(r) {
      return typeof r == "function";
    }
    function ke(r) {
      return typeof r == "function";
    }
    function wt(r) {
      switch (Ce(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ue(r, s) {
      return r === s || r !== r && s !== s;
    }
    function xe(r, s) {
      var a = r[s];
      if (a != null) {
        if (!re(a))
          throw new TypeError();
        return a;
      }
    }
    function Ne(r) {
      var s = xe(r, u);
      if (!re(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ue(r) {
      return r.value;
    }
    function Ie(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function je(r) {
      var s = r.return;
      s && s.call(r);
    }
    function le(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || s !== $)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function $t() {
      var r;
      !_(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Et(t.Reflect));
      var s, a, h, y = new N(), P = {
        registerProvider: O,
        getProvider: c,
        setProvider: d
      };
      return P;
      function O(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case _(s):
            s = p;
            break;
          case s === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            h === void 0 && (h = new R()), h.add(p);
            break;
        }
      }
      function m(p, g) {
        if (!_(s)) {
          if (s.isProviderFor(p, g))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, g))
              return s;
            if (!_(h))
              for (var E = Ne(h); ; ) {
                var S = Ie(E);
                if (!S)
                  return;
                var k = Ue(S);
                if (k.isProviderFor(p, g))
                  return je(E), k;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, g))
          return r;
      }
      function c(p, g) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(g)), _(S) && (S = m(p, g), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(g, S))), S;
      }
      function f(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(h) && h.has(p);
      }
      function d(p, g, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, g);
        if (S !== E) {
          if (!_(S))
            return !1;
          var k = y.get(p);
          _(k) && (k = new T(), y.set(p, k)), k.set(g, E);
        }
        return !0;
      }
    }
    function bt() {
      var r;
      return !_(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[L]), _(r) && (r = $t()), !_(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function At(r) {
      var s = new N(), a = {
        isProviderFor: function(f, d) {
          var p = s.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return te.registerProvider(a), a;
      function h(f, d, p) {
        var g = s.get(f), E = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new T(), s.set(f, g), E = !0;
        }
        var S = g.get(d);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(d, S), !r.setProvider(f, d, a))
            throw g.delete(d), E && s.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, d, p) {
        var g = h(
          d,
          p,
          /*Create*/
          !1
        );
        return _(g) ? !1 : Te(g.has(f));
      }
      function P(f, d, p) {
        var g = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(f);
      }
      function O(f, d, p, g) {
        var E = h(
          p,
          g,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function m(f, d) {
        var p = [], g = h(
          f,
          d,
          /*Create*/
          !1
        );
        if (_(g))
          return p;
        for (var E = g.keys(), S = Ne(E), k = 0; ; ) {
          var He = Ie(S);
          if (!He)
            return p.length = k, p;
          var Pt = Ue(He);
          try {
            p[k] = Pt;
          } catch (Ct) {
            try {
              je(S);
            } finally {
              throw Ct;
            }
          }
          k++;
        }
      }
      function c(f, d, p) {
        var g = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (_(g) || !g.delete(f))
          return !1;
        if (g.size === 0) {
          var E = s.get(d);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Et(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, O = new N(), m = {
        isProviderFor: function(c, f) {
          var d = O.get(c);
          return !_(d) && d.has(f) ? !0 : y(c, f).length ? (_(d) && (d = new R(), O.set(c, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function F(r, s, a) {
      var h = te.getProvider(r, s);
      if (!_(h))
        return h;
      if (a) {
        if (te.setProvider(r, s, be))
          return be;
        throw new Error("Illegal state.");
      }
    }
    function St() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function m(c, f, d) {
            this._index = 0, this._keys = c, this._values = f, this._selector = d;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, m;
        }()
      ), h = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, m.prototype.set = function(c, f) {
            var d = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, m.prototype.delete = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ue(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(c, f) {
            if (!ue(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ue(this._keys[d], c)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return h;
      function y(m, c) {
        return m;
      }
      function P(m, c) {
        return c;
      }
      function O(m, c) {
        return [m, c];
      }
    }
    function Mt() {
      var r = (
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
      return r;
    }
    function Ot() {
      var r = 16, s = A.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.has(d, this._key) : !1;
          }, c.prototype.get = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.get(d, this._key) : void 0;
          }, c.prototype.set = function(f, d) {
            var p = y(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, c.prototype.delete = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while (A.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, f) {
        if (!n.call(c, a)) {
          if (!f)
            return;
          Object.defineProperty(c, a, { value: A.create() });
        }
        return c[a];
      }
      function P(c, f) {
        for (var d = 0; d < f; ++d)
          c[d] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, c), f;
        }
        return P(new Array(c), c);
      }
      function m() {
        var c = O(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", d = 0; d < r; ++d) {
          var p = c[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function he(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(ze || (ze = {}));
function kt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function xt(i) {
  return function(e) {
    if (kt(i)) {
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
function Nt(i) {
  return xt(i);
}
function Ut(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        De(this, "_stylesApplied", !1);
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
        var v;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), w = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && w) {
          const b = new CSSStyleSheet(), A = (v = l.sheet) == null ? void 0 : v.cssRules;
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
    return t;
  };
}
function It(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function jt(i) {
  return function(e, t) {
    try {
      It(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function Ht(i) {
  return jt(i);
}
var ye;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(ye || (ye = {}));
var ve;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(ve || (ve = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, _e = ne.ShadowRoot && (ne.ShadyCSS === void 0 || ne.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let Ke = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (_e && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dt = (i) => new Ke(typeof i == "string" ? i : i + "", void 0, me), Lt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[l + 1], i[0]);
  return new Ke(t, i, me);
}, zt = (i, e) => {
  if (_e) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ne.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, We = _e ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Dt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: Bt, getOwnPropertyNames: Ft, getOwnPropertySymbols: Vt, getPrototypeOf: qt } = Object, I = globalThis, Be = I.trustedTypes, Zt = Be ? Be.emptyScript : "", ce = I.reactiveElementPolyfillSupport, q = (i, e) => i, ie = { toAttribute(i, e) {
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
} }, ge = (i, e) => !Gt(i, e), Fe = { attribute: !0, type: String, converter: ie, reflect: !1, hasChanged: ge };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class G extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Fe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Wt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Bt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(u) {
      const w = o == null ? void 0 : o.call(this);
      l.call(this, u), this.requestUpdate(e, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Fe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const e = qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const t = this.properties, n = [...Ft(t), ...Vt(t)];
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
      for (const o of n) t.unshift(We(o));
    } else e !== void 0 && t.push(We(e));
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
    var l;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ie).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const u = n.getPropertyOptions(o), w = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : ie;
      this._$Em = o, this[o] = w.fromAttribute(t, u.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? ge)(this[e], t)) return;
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) u.wrapped !== !0 || this._$AL.has(l) || this[l] === void 0 || this.P(l, this[l], u);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
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
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[q("elementProperties")] = /* @__PURE__ */ new Map(), G[q("finalized")] = /* @__PURE__ */ new Map(), ce == null || ce({ ReactiveElement: G }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, se = Z.trustedTypes, Ve = se ? se.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, et = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, tt = "?" + U, Xt = `<${tt}>`, D = document, Y = () => D.createComment(""), J = (i) => i === null || typeof i != "object" && typeof i != "function", we = Array.isArray, Yt = (i) => we(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", fe = `[ 	
\f\r]`, V = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qe = /-->/g, Ze = />/g, j = RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Xe = /'/g, Ye = /"/g, rt = /^(?:script|style|textarea|title)$/i, Jt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Qt = Jt(1), W = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Je = /* @__PURE__ */ new WeakMap(), H = D.createTreeWalker(D, 129);
function nt(i, e) {
  if (!we(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ve !== void 0 ? Ve.createHTML(e) : e;
}
const Kt = (i, e) => {
  const t = i.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = V;
  for (let w = 0; w < t; w++) {
    const v = i[w];
    let b, A, $ = -1, T = 0;
    for (; T < v.length && (u.lastIndex = T, A = u.exec(v), A !== null); ) T = u.lastIndex, u === V ? A[1] === "!--" ? u = qe : A[1] !== void 0 ? u = Ze : A[2] !== void 0 ? (rt.test(A[2]) && (o = RegExp("</" + A[2], "g")), u = j) : A[3] !== void 0 && (u = j) : u === j ? A[0] === ">" ? (u = o ?? V, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = u.lastIndex - A[2].length, b = A[1], u = A[3] === void 0 ? j : A[3] === '"' ? Ye : Xe) : u === Ye || u === Xe ? u = j : u === qe || u === Ze ? u = V : (u = j, o = void 0);
    const R = u === j && i[w + 1].startsWith("/>") ? " " : "";
    l += u === V ? v + Xt : $ >= 0 ? (n.push(b), v.slice(0, $) + et + v.slice($) + U + R) : v + U + ($ === -2 ? w : R);
  }
  return [nt(i, l + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class Q {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const w = e.length - 1, v = this.parts, [b, A] = Kt(e, t);
    if (this.el = Q.createElement(b, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = H.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(et)) {
          const T = A[u++], R = o.getAttribute($).split(U), N = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: l, name: N[2], strings: R, ctor: N[1] === "." ? tr : N[1] === "?" ? rr : N[1] === "@" ? nr : oe }), o.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: l }), o.removeAttribute($));
        if (rt.test(o.tagName)) {
          const $ = o.textContent.split(U), T = $.length - 1;
          if (T > 0) {
            o.textContent = se ? se.emptyScript : "";
            for (let R = 0; R < T; R++) o.append($[R], Y()), H.nextNode(), v.push({ type: 2, index: ++l });
            o.append($[T], Y());
          }
        }
      } else if (o.nodeType === 8) if (o.data === tt) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = D.createElement("template");
    return n.innerHTML = e, n;
  }
}
function B(i, e, t = i, n) {
  var u, w;
  if (e === W) return e;
  let o = n !== void 0 ? (u = t.o) == null ? void 0 : u[n] : t.l;
  const l = J(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), l === void 0 ? o = void 0 : (o = new l(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = B(i, o._$AS(i, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? D).importNode(t, !0);
    H.currentNode = o;
    let l = H.nextNode(), u = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let b;
        v.type === 2 ? b = new ee(l, l.nextSibling, this, e) : v.type === 1 ? b = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (b = new ir(l, this, e)), this._$AV.push(b), v = n[++w];
      }
      u !== (v == null ? void 0 : v.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = D, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ee {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = B(this, e, t), J(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Yt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && J(this._$AH) ? this._$AA.nextSibling.data = e : this.T(D.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Q.createElement(nt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new er(o, this), w = u.u(this.options);
      u.p(t), this.T(w), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = Je.get(e.strings);
    return t === void 0 && Je.set(e.strings, t = new Q(e)), t;
  }
  k(e) {
    we(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ee(this.O(Y()), this.O(Y()), this, this.options)) : n = t[o], n._$AI(l), o++;
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
class oe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = B(this, e, t, 0), u = !J(e) || e !== this._$AH && e !== W, u && (this._$AH = e);
    else {
      const w = e;
      let v, b;
      for (e = l[0], v = 0; v < l.length - 1; v++) b = B(this, w[n + v], t, v), b === W && (b = this._$AH[v]), u || (u = !J(b) || b !== this._$AH[v]), b === C ? e = C : e !== C && (e += (b ?? "") + l[v + 1]), this._$AH[v] = b;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class tr extends oe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class rr extends oe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class nr extends oe {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = B(this, e, t, 0) ?? C) === W) return;
    const n = this._$AH, o = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    B(this, e);
  }
}
const de = Z.litHtmlPolyfillSupport;
de == null || de(Q, ee), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.2.0");
const sr = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ee(e.insertBefore(Y(), l), l, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class X extends G {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = sr(t, this.renderRoot, this.renderOptions);
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
    return W;
  }
}
var Qe;
X._$litElement$ = !0, X.finalized = !0, (Qe = globalThis.litElementHydrateSupport) == null || Qe.call(globalThis, { LitElement: X });
const pe = globalThis.litElementPolyfillSupport;
pe == null || pe({ LitElement: X });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: ie, reflect: !1, hasChanged: ge }, ar = (i = or, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), l.set(t.name, i), n === "accessor") {
    const { name: u } = t;
    return { set(w) {
      const v = e.get.call(this);
      e.set.call(this, w), this.requestUpdate(u, v, i);
    }, init(w) {
      return w !== void 0 && this.P(u, void 0, i), w;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(w) {
      const v = this[u];
      e.call(this, w), this.requestUpdate(u, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ur(i) {
  return (e, t) => typeof t == "object" ? ar(i, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, u ? { ...n, wrapped: !0 } : n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(i, e, t);
}
var lr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, $e = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && lr(e, t, o), o;
};
let K = class extends X {
  constructor() {
    super(...arguments), this.channel = "events.user.updated";
  }
  get channelConfig() {
    return this.channel;
  }
  set channelConfig(i) {
    this.channel = i || "events.user.updated";
  }
  render() {
    return Qt`<div class="node"><div class="eyebrow">Listen</div><strong>${this.channel}</strong></div>`;
  }
};
K.styles = Lt`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(79,70,229,.18);background:#eef2ff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#4f46e5;font-weight:700}`;
$e([
  ur({ type: String })
], K.prototype, "channel", 2);
$e([
  Ht({ attributeType: ve.PROPERTY, uiComponentType: ye.TEXT_INPUT, displayLabel: "Channel", fieldMappings: "channel" })
], K.prototype, "channelConfig", 1);
K = $e([
  Nt({ name: "zero-flow-node-listen", version: "1.0.0", title: "Listen Node", elementSelector: "zero-flow-node-listen", group: "Flow Nodes", iconName: "flow-listen-node.png" }),
  Ut()
], K);
export {
  K as ZeroFlowNodeListen
};
