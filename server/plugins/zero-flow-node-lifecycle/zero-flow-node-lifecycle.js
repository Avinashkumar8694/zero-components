var kt = Object.defineProperty;
var xt = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var De = (i, e, t) => xt(i, typeof e != "symbol" ? e + "" : e, t);
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
    function w() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return de(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return de({ __proto__: null });
      } : function() {
        return de({});
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
    }, $ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), N = typeof WeakMap == "function" ? WeakMap : Tt(), z = o ? Symbol.for("@reflect-metadata:registry") : void 0, re = Et(), be = St(re);
    function ot(r, s, a, c) {
      if (_(a)) {
        if (!Re(r))
          throw new TypeError();
        if (!ke(s))
          throw new TypeError();
        return vt(r, s);
      } else {
        if (!Re(r))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !_(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = x(a), _t(r, s, a, c);
      }
    }
    e("decorate", ot);
    function at(r, s) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!_(y) && !bt(y))
          throw new TypeError();
        Oe(r, s, c, y);
      }
      return a;
    }
    e("metadata", at);
    function lt(r, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = x(c)), Oe(r, s, a, c);
    }
    e("defineMetadata", lt);
    function ut(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ae(r, s, a);
    }
    e("hasMetadata", ut);
    function ct(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), ce(r, s, a);
    }
    e("hasOwnMetadata", ct);
    function ht(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ee(r, s, a);
    }
    e("getMetadata", ht);
    function ft(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Se(r, s, a);
    }
    e("getOwnMetadata", ft);
    function dt(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Me(r, s);
    }
    e("getMetadataKeys", dt);
    function pt(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Pe(r, s);
    }
    e("getOwnMetadataKeys", pt);
    function yt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = x(a)), !O(s))
        throw new TypeError();
      _(a) || (a = x(a));
      var c = V(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", yt);
    function vt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var c = r[a], y = c(s);
        if (!_(y) && !G(y)) {
          if (!ke(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function _t(r, s, a, c) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], M = P(s, a, c);
        if (!_(M) && !G(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Ae(r, s, a) {
      var c = ce(r, s, a);
      if (c)
        return !0;
      var y = fe(s);
      return G(y) ? !1 : Ae(r, y, a);
    }
    function ce(r, s, a) {
      var c = V(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ce(c.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Ee(r, s, a) {
      var c = ce(r, s, a);
      if (c)
        return Se(r, s, a);
      var y = fe(s);
      if (!G(y))
        return Ee(r, y, a);
    }
    function Se(r, s, a) {
      var c = V(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Oe(r, s, a, c) {
      var y = V(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, c);
    }
    function Me(r, s) {
      var a = Pe(r, s), c = fe(r);
      if (c === null)
        return a;
      var y = Me(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), M = [], g = 0, h = a; g < h.length; g++) {
        var f = h[g], d = P.has(f);
        d || (P.add(f), M.push(f));
      }
      for (var p = 0, m = y; p < m.length; p++) {
        var f = m[p], d = P.has(f);
        d || (P.add(f), M.push(f));
      }
      return M;
    }
    function Pe(r, s) {
      var a = V(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Te(r) {
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
    function G(r) {
      return r === null;
    }
    function gt(r) {
      return typeof r == "symbol";
    }
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function mt(r, s) {
      switch (Te(r)) {
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
      var a = "string", c = xe(r, u);
      if (c !== void 0) {
        var y = c.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return wt(r);
    }
    function wt(r, s) {
      var a, c;
      {
        var y = r.toString;
        if (ne(y)) {
          var c = y.call(r);
          if (!O(c))
            return c;
        }
        var a = r.valueOf;
        if (ne(a)) {
          var c = a.call(r);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ce(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function x(r) {
      var s = mt(r);
      return gt(s) ? s : $t(s);
    }
    function Re(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ne(r) {
      return typeof r == "function";
    }
    function ke(r) {
      return typeof r == "function";
    }
    function bt(r) {
      switch (Te(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function he(r, s) {
      return r === s || r !== r && s !== s;
    }
    function xe(r, s) {
      var a = r[s];
      if (a != null) {
        if (!ne(a))
          throw new TypeError();
        return a;
      }
    }
    function Ne(r) {
      var s = xe(r, l);
      if (!ne(s))
        throw new TypeError();
      var a = s.call(r);
      if (!O(a))
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
    function He(r) {
      var s = r.return;
      s && s.call(r);
    }
    function fe(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || s !== $)
        return s;
      var a = r.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function At() {
      var r;
      !_(z) && typeof t.Reflect < "u" && !(z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Ot(t.Reflect));
      var s, a, c, y = new N(), P = {
        registerProvider: M,
        getProvider: h,
        setProvider: d
      };
      return P;
      function M(p) {
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
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function g(p, m) {
        if (!_(s)) {
          if (s.isProviderFor(p, m))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, m))
              return s;
            if (!_(c))
              for (var E = Ne(c); ; ) {
                var S = Ie(E);
                if (!S)
                  return;
                var k = Ue(S);
                if (k.isProviderFor(p, m))
                  return He(E), k;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, m))
          return r;
      }
      function h(p, m) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(m)), _(S) && (S = g(p, m), _(S) || (_(E) && (E = new C(), y.set(p, E)), E.set(m, S))), S;
      }
      function f(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(c) && c.has(p);
      }
      function d(p, m, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, m);
        if (S !== E) {
          if (!_(S))
            return !1;
          var k = y.get(p);
          _(k) && (k = new C(), y.set(p, k)), k.set(m, E);
        }
        return !0;
      }
    }
    function Et() {
      var r;
      return !_(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[z]), _(r) && (r = At()), !_(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function St(r) {
      var s = new N(), a = {
        isProviderFor: function(f, d) {
          var p = s.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return re.registerProvider(a), a;
      function c(f, d, p) {
        var m = s.get(f), E = !1;
        if (_(m)) {
          if (!p)
            return;
          m = new C(), s.set(f, m), E = !0;
        }
        var S = m.get(d);
        if (_(S)) {
          if (!p)
            return;
          if (S = new C(), m.set(d, S), !r.setProvider(f, d, a))
            throw m.delete(d), E && s.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, d, p) {
        var m = c(
          d,
          p,
          /*Create*/
          !1
        );
        return _(m) ? !1 : Ce(m.has(f));
      }
      function P(f, d, p) {
        var m = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (!_(m))
          return m.get(f);
      }
      function M(f, d, p, m) {
        var E = c(
          p,
          m,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function g(f, d) {
        var p = [], m = c(
          f,
          d,
          /*Create*/
          !1
        );
        if (_(m))
          return p;
        for (var E = m.keys(), S = Ne(E), k = 0; ; ) {
          var je = Ie(S);
          if (!je)
            return p.length = k, p;
          var Ct = Ue(je);
          try {
            p[k] = Ct;
          } catch (Rt) {
            try {
              He(S);
            } finally {
              throw Rt;
            }
          }
          k++;
        }
      }
      function h(f, d, p) {
        var m = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (_(m) || !m.delete(f))
          return !1;
        if (m.size === 0) {
          var E = s.get(d);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ot(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, c = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, M = new N(), g = {
        isProviderFor: function(h, f) {
          var d = M.get(h);
          return !_(d) && d.has(f) ? !0 : y(h, f).length ? (_(d) && (d = new R(), M.set(h, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function V(r, s, a) {
      var c = re.getProvider(r, s);
      if (!_(c))
        return c;
      if (a) {
        if (re.setProvider(r, s, be))
          return be;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(h, f, d) {
            this._index = 0, this._keys = h, this._values = f, this._selector = d;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var f = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, g.prototype.set = function(h, f) {
            var d = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, g.prototype.delete = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, he(h, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(h, f) {
            if (!he(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (he(this._keys[d], h)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function y(g, h) {
        return g;
      }
      function P(g, h) {
        return h;
      }
      function M(g, h) {
        return [g, h];
      }
    }
    function Pt() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new C();
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
    function Tt() {
      var r = 16, s = A.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.has(d, this._key) : !1;
          }, h.prototype.get = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.get(d, this._key) : void 0;
          }, h.prototype.set = function(f, d) {
            var p = y(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, h.prototype.delete = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + g();
        while (A.has(s, h));
        return s[h] = !0, h;
      }
      function y(h, f) {
        if (!n.call(h, a)) {
          if (!f)
            return;
          Object.defineProperty(h, a, { value: A.create() });
        }
        return h[a];
      }
      function P(h, f) {
        for (var d = 0; d < f; ++d)
          h[d] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, h), f;
        }
        return P(new Array(h), h);
      }
      function g() {
        var h = M(r);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var f = "", d = 0; d < r; ++d) {
          var p = h[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function de(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(ze || (ze = {}));
function Nt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ut(i) {
  return function(e) {
    if (Nt(i)) {
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
function It(i) {
  return Ut(i);
}
function Ht(i) {
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
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), w = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && w) {
          const b = new CSSStyleSheet(), A = (v = u.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach(($) => b.insertRule($.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, b]);
        } else if (u) {
          const b = u.cloneNode(!0);
          this.shadowRoot.appendChild(b);
        }
        l.forEach((b) => {
          const A = b.cloneNode(!0);
          this.shadowRoot.appendChild(A);
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
function Ke(i) {
  return Dt(i);
}
var se;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
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
const ie = globalThis, ge = ie.ShadowRoot && (ie.ShadyCSS === void 0 || ie.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let et = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (i) => new et(typeof i == "string" ? i : i + "", void 0, me), zt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new et(t, i, me);
}, Gt = (i, e) => {
  if (ge) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ie.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, We = ge ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Lt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Bt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Vt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, I = globalThis, Be = I.trustedTypes, Xt = Be ? Be.emptyScript : "", pe = I.reactiveElementPolyfillSupport, Z = (i, e) => i, ae = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Xt : null;
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
} }, we = (i, e) => !Wt(i, e), Fe = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: we };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class W extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Fe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Bt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const w = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Fe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const t = this.properties, n = [...Vt(t), ...qt(t)];
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
    return Gt(e, this.constructor.elementStyles), e;
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
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ae;
      this._$Em = o, this[o] = w.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? we)(this[e], t)) return;
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Z("elementProperties")] = /* @__PURE__ */ new Map(), W[Z("finalized")] = /* @__PURE__ */ new Map(), pe == null || pe({ ReactiveElement: W }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, le = X.trustedTypes, Ve = le ? le.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, tt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, rt = "?" + U, Yt = `<${rt}>`, D = document, J = () => D.createComment(""), Q = (i) => i === null || typeof i != "object" && typeof i != "function", $e = Array.isArray, Jt = (i) => $e(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qe = /-->/g, Ze = />/g, H = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Xe = /'/g, Ye = /"/g, nt = /^(?:script|style|textarea|title)$/i, Qt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Kt = Qt(1), B = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), Je = /* @__PURE__ */ new WeakMap(), j = D.createTreeWalker(D, 129);
function it(i, e) {
  if (!$e(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ve !== void 0 ? Ve.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = q;
  for (let w = 0; w < t; w++) {
    const v = i[w];
    let b, A, $ = -1, C = 0;
    for (; C < v.length && (l.lastIndex = C, A = l.exec(v), A !== null); ) C = l.lastIndex, l === q ? A[1] === "!--" ? l = qe : A[1] !== void 0 ? l = Ze : A[2] !== void 0 ? (nt.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = H) : A[3] !== void 0 && (l = H) : l === H ? A[0] === ">" ? (l = o ?? q, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = l.lastIndex - A[2].length, b = A[1], l = A[3] === void 0 ? H : A[3] === '"' ? Ye : Xe) : l === Ye || l === Xe ? l = H : l === qe || l === Ze ? l = q : (l = H, o = void 0);
    const R = l === H && i[w + 1].startsWith("/>") ? " " : "";
    u += l === q ? v + Yt : $ >= 0 ? (n.push(b), v.slice(0, $) + tt + v.slice($) + U + R) : v + U + ($ === -2 ? w : R);
  }
  return [it(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class K {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = e.length - 1, v = this.parts, [b, A] = er(e, t);
    if (this.el = K.createElement(b, n), j.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = j.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(tt)) {
          const C = A[l++], R = o.getAttribute($).split(U), N = /([.?@])?(.*)/.exec(C);
          v.push({ type: 1, index: u, name: N[2], strings: R, ctor: N[1] === "." ? rr : N[1] === "?" ? nr : N[1] === "@" ? ir : ue }), o.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: u }), o.removeAttribute($));
        if (nt.test(o.tagName)) {
          const $ = o.textContent.split(U), C = $.length - 1;
          if (C > 0) {
            o.textContent = le ? le.emptyScript : "";
            for (let R = 0; R < C; R++) o.append($[R], J()), j.nextNode(), v.push({ type: 2, index: ++u });
            o.append($[C], J());
          }
        }
      } else if (o.nodeType === 8) if (o.data === rt) v.push({ type: 2, index: u });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: u }), $ += U.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = D.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(i, e, t = i, n) {
  var l, w;
  if (e === B) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = Q(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = F(i, o._$AS(i, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? D).importNode(t, !0);
    j.currentNode = o;
    let u = j.nextNode(), l = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let b;
        v.type === 2 ? b = new ee(u, u.nextSibling, this, e) : v.type === 1 ? b = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (b = new sr(u, this, e)), this._$AV.push(b), v = n[++w];
      }
      l !== (v == null ? void 0 : v.index) && (u = j.nextNode(), l++);
    }
    return j.currentNode = D, o;
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
    e = F(this, e, t), Q(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Jt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(D.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = K.createElement(it(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), w = l.u(this.options);
      l.p(t), this.T(w), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Je.get(e.strings);
    return t === void 0 && Je.set(e.strings, t = new K(e)), t;
  }
  k(e) {
    $e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new ee(this.O(J()), this.O(J()), this, this.options)) : n = t[o], n._$AI(u), o++;
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
class ue {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, u) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = F(this, e, t, 0), l = !Q(e) || e !== this._$AH && e !== B, l && (this._$AH = e);
    else {
      const w = e;
      let v, b;
      for (e = u[0], v = 0; v < u.length - 1; v++) b = F(this, w[n + v], t, v), b === B && (b = this._$AH[v]), l || (l = !Q(b) || b !== this._$AH[v]), b === T ? e = T : e !== T && (e += (b ?? "") + u[v + 1]), this._$AH[v] = b;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class nr extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class ir extends ue {
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? T) === B) return;
    const n = this._$AH, o = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== T && (n === T || o);
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
    F(this, e);
  }
}
const ve = X.litHtmlPolyfillSupport;
ve == null || ve(K, ee), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
const or = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ee(e.insertBefore(J(), u), u, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Y extends W {
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
    return B;
  }
}
var Qe;
Y._$litElement$ = !0, Y.finalized = !0, (Qe = globalThis.litElementHydrateSupport) == null || Qe.call(globalThis, { LitElement: Y });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: Y });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: we }, lr = (i = ar, e, t) => {
  const { kind: n, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, i), n === "accessor") {
    const { name: l } = t;
    return { set(w) {
      const v = e.get.call(this);
      e.set.call(this, w), this.requestUpdate(l, v, i);
    }, init(w) {
      return w !== void 0 && this.P(l, void 0, i), w;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(w) {
      const v = this[l];
      e.call(this, w), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function st(i) {
  return (e, t) => typeof t == "object" ? lr(i, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, te = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && ur(e, t, o), o;
};
let L = class extends Y {
  constructor() {
    super(...arguments), this.hookType = "onInit", this.description = "";
  }
  get hookTypeConfig() {
    return this.hookType;
  }
  set hookTypeConfig(i) {
    this.hookType = i || "onInit";
  }
  get descriptionConfig() {
    return this.description;
  }
  set descriptionConfig(i) {
    this.description = i || "";
  }
  render() {
    return Kt`<div class="node"><div class="eyebrow">Lifecycle</div><strong>${this.hookType}</strong><div style="font-size: 0.8em; margin-top: 4px; color: #64748b;">${this.description || "Triggers on page lifecycle events."}</div></div>`;
  }
};
L.styles = zt`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(139,92,246,.22);background:linear-gradient(135deg,#f5f3ff,#fff);color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#8b5cf6;font-weight:700}`;
te([
  st({ type: String })
], L.prototype, "hookType", 2);
te([
  st({ type: String })
], L.prototype, "description", 2);
te([
  Ke({
    attributeType: oe.PROPERTY,
    uiComponentType: se.DROPDOWN,
    displayLabel: "Lifecycle Hook",
    fieldMappings: "hookType",
    optionItems: [
      { value: "onInit", label: "onInit" },
      { value: "onDestroy", label: "onDestroy" },
      { value: "onChanges", label: "onChanges" },
      { value: "beforeRouteEnter", label: "beforeRouteEnter" },
      { value: "afterRender", label: "afterRender" }
    ]
  })
], L.prototype, "hookTypeConfig", 1);
te([
  Ke({ attributeType: oe.PROPERTY, uiComponentType: se.TEXTAREA, displayLabel: "Description", fieldMappings: "description" })
], L.prototype, "descriptionConfig", 1);
L = te([
  It({ name: "zero-flow-node-lifecycle", version: "1.0.0", title: "Lifecycle", elementSelector: "zero-flow-node-lifecycle", group: "Flow Nodes", iconName: "flow-start-node.png" }),
  Ht()
], L);
export {
  L as ZeroFlowNodeLifecycle
};
