var kt = Object.defineProperty;
var Nt = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Le = (i, e, t) => Nt(i, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Be;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(v, $) {
      return function(A, b) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: b }), $ && $(A, b);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
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
    }, b = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), H = typeof WeakMap == "function" ? WeakMap : Tt(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, oe = St(), Ee = Mt(oe);
    function at(r, s, a, h) {
      if (_(a)) {
        if (!ke(r))
          throw new TypeError();
        if (!Ne(s))
          throw new TypeError();
        return _t(r, s);
      } else {
        if (!ke(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(h) && !_(h) && !V(h))
          throw new TypeError();
        return V(h) && (h = void 0), a = N(a), gt(r, s, a, h);
      }
    }
    e("decorate", at);
    function ut(r, s) {
      function a(h, y) {
        if (!M(h))
          throw new TypeError();
        if (!_(y) && !At(y))
          throw new TypeError();
        Pe(r, s, h, y);
      }
      return a;
    }
    e("metadata", ut);
    function lt(r, s, a, h) {
      if (!M(a))
        throw new TypeError();
      return _(h) || (h = N(h)), Pe(r, s, a, h);
    }
    e("defineMetadata", lt);
    function ht(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Se(r, s, a);
    }
    e("hasMetadata", ht);
    function ct(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), de(r, s, a);
    }
    e("hasOwnMetadata", ct);
    function dt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Me(r, s, a);
    }
    e("getMetadata", dt);
    function ft(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Oe(r, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = N(s)), Ce(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = N(s)), Te(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (_(a) || (a = N(a)), !M(s))
        throw new TypeError();
      _(a) || (a = N(a));
      var h = Y(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function _t(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!_(y) && !V(y)) {
          if (!Ne(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function gt(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], O = P(s, a, h);
        if (!_(O) && !V(O)) {
          if (!M(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Se(r, s, a) {
      var h = de(r, s, a);
      if (h)
        return !0;
      var y = pe(s);
      return V(y) ? !1 : Se(r, y, a);
    }
    function de(r, s, a) {
      var h = Y(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Re(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Me(r, s, a) {
      var h = de(r, s, a);
      if (h)
        return Oe(r, s, a);
      var y = pe(s);
      if (!V(y))
        return Me(r, y, a);
    }
    function Oe(r, s, a) {
      var h = Y(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Pe(r, s, a, h) {
      var y = Y(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Ce(r, s) {
      var a = Te(r, s), h = pe(r);
      if (h === null)
        return a;
      var y = Ce(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new x(), O = [], g = 0, c = a; g < c.length; g++) {
        var d = c[g], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      for (var p = 0, m = y; p < m.length; p++) {
        var d = m[p], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      return O;
    }
    function Te(r, s) {
      var a = Y(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function xe(r) {
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
    function V(r) {
      return r === null;
    }
    function mt(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function wt(r, s) {
      switch (xe(r)) {
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
      var a = "string", h = Ue(r, l);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return bt(r);
    }
    function bt(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (ae(y)) {
          var h = y.call(r);
          if (!M(h))
            return h;
        }
        var a = r.valueOf;
        if (ae(a)) {
          var h = a.call(r);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Re(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function N(r) {
      var s = wt(r);
      return mt(s) ? s : $t(s);
    }
    function ke(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ae(r) {
      return typeof r == "function";
    }
    function Ne(r) {
      return typeof r == "function";
    }
    function At(r) {
      switch (xe(r)) {
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
    function Ue(r, s) {
      var a = r[s];
      if (a != null) {
        if (!ae(a))
          throw new TypeError();
        return a;
      }
    }
    function He(r) {
      var s = Ue(r, u);
      if (!ae(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ie(r) {
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
      if (typeof r != "function" || r === b || s !== b)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function Et() {
      var r;
      !_(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Ot(t.Reflect));
      var s, a, h, y = new H(), P = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
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
            h === void 0 && (h = new x()), h.add(p);
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
            if (!_(h))
              for (var E = He(h); ; ) {
                var S = je(E);
                if (!S)
                  return;
                var R = Ie(S);
                if (R.isProviderFor(p, m))
                  return De(E), R;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, m))
          return r;
      }
      function c(p, m) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(m)), _(S) && (S = g(p, m), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(m, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(h) && h.has(p);
      }
      function f(p, m, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, m);
        if (S !== E) {
          if (!_(S))
            return !1;
          var R = y.get(p);
          _(R) && (R = new T(), y.set(p, R)), R.set(m, E);
        }
        return !0;
      }
    }
    function St() {
      var r;
      return !_(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[G]), _(r) && (r = Et()), !_(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Mt(r) {
      var s = new H(), a = {
        isProviderFor: function(d, f) {
          var p = s.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return oe.registerProvider(a), a;
      function h(d, f, p) {
        var m = s.get(d), E = !1;
        if (_(m)) {
          if (!p)
            return;
          m = new T(), s.set(d, m), E = !0;
        }
        var S = m.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), m.set(f, S), !r.setProvider(d, f, a))
            throw m.delete(f), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, f, p) {
        var m = h(
          f,
          p,
          /*Create*/
          !1
        );
        return _(m) ? !1 : Re(m.has(d));
      }
      function P(d, f, p) {
        var m = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(m))
          return m.get(d);
      }
      function O(d, f, p, m) {
        var E = h(
          p,
          m,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function g(d, f) {
        var p = [], m = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(m))
          return p;
        for (var E = m.keys(), S = He(E), R = 0; ; ) {
          var ze = je(S);
          if (!ze)
            return p.length = R, p;
          var xt = Ie(ze);
          try {
            p[R] = xt;
          } catch (Rt) {
            try {
              De(S);
            } finally {
              throw Rt;
            }
          }
          R++;
        }
      }
      function c(d, f, p) {
        var m = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(m) || !m.delete(d))
          return !1;
        if (m.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ot(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, O = new H(), g = {
        isProviderFor: function(c, d) {
          var f = O.get(c);
          return !_(f) && f.has(d) ? !0 : y(c, d).length ? (_(f) && (f = new x(), O.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function Y(r, s, a) {
      var h = oe.getProvider(r, s);
      if (!_(h))
        return h;
      if (a) {
        if (oe.setProvider(r, s, Ee))
          return Ee;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, g;
        }()
      ), h = (
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
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, g.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, g.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, fe(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(c, d) {
            if (!fe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return h;
      function y(g, c) {
        return g;
      }
      function P(g, c) {
        return c;
      }
      function O(g, c) {
        return [g, c];
      }
    }
    function Ct() {
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
    function Tt() {
      var r = 16, s = A.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? A.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? A.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = y(
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
          c = "@@WeakMap@@" + g();
        while (A.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, d) {
        if (!n.call(c, a)) {
          if (!d)
            return;
          Object.defineProperty(c, a, { value: A.create() });
        }
        return c[a];
      }
      function P(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, c), d;
        }
        return P(new Array(c), c);
      }
      function g() {
        var c = O(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ye(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Be || (Be = {}));
function Ut(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ht(i) {
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
function It(i) {
  return Ht(i);
}
function jt(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Le(this, "_stylesApplied", !1);
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
          const $ = new CSSStyleSheet(), A = (v = l.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach((b) => $.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        u.forEach(($) => {
          const A = $.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return t;
  };
}
function Dt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(i) {
  return function(e, t) {
    try {
      Dt(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ne(i) {
  return zt(i);
}
var L;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(L || (L = {}));
var W;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(W || (W = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, be = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, be), Wt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[l + 1], i[0]);
  return new rt(t, i, be);
}, Bt = (i, e) => {
  if (we) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, Ve = we ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Lt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Yt } = Object, j = globalThis, Fe = j.trustedTypes, Xt = Fe ? Fe.emptyScript : "", ve = j.reactiveElementPolyfillSupport, J = (i, e) => i, le = { toAttribute(i, e) {
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
} }, $e = (i, e) => !Gt(i, e), qe = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class F extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Vt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Ft(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const t = this.properties, n = [...qt(t), ...Zt(t)];
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
      for (const o of n) t.unshift(Ve(o));
    } else e !== void 0 && t.push(Ve(e));
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
    return Bt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : le).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const u = n.getPropertyOptions(o), w = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : le;
      this._$Em = o, this[o] = w.fromAttribute(t, u.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? $e)(this[e], t)) return;
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
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[J("elementProperties")] = /* @__PURE__ */ new Map(), F[J("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: F }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, he = Q.trustedTypes, Ze = he ? he.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + I, Jt = `<${it}>`, B = document, ee = () => B.createComment(""), te = (i) => i === null || typeof i != "object" && typeof i != "function", Ae = Array.isArray, Qt = (i) => Ae(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, D = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Ke = Kt(1), q = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), z = B.createTreeWalker(B, 129);
function ot(i, e) {
  if (!Ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let w = 0; w < t; w++) {
    const v = i[w];
    let $, A, b = -1, T = 0;
    for (; T < v.length && (u.lastIndex = T, A = u.exec(v), A !== null); ) T = u.lastIndex, u === X ? A[1] === "!--" ? u = Ye : A[1] !== void 0 ? u = Xe : A[2] !== void 0 ? (st.test(A[2]) && (o = RegExp("</" + A[2], "g")), u = D) : A[3] !== void 0 && (u = D) : u === D ? A[0] === ">" ? (u = o ?? X, b = -1) : A[1] === void 0 ? b = -2 : (b = u.lastIndex - A[2].length, $ = A[1], u = A[3] === void 0 ? D : A[3] === '"' ? Qe : Je) : u === Qe || u === Je ? u = D : u === Ye || u === Xe ? u = X : (u = D, o = void 0);
    const x = u === D && i[w + 1].startsWith("/>") ? " " : "";
    l += u === X ? v + Jt : b >= 0 ? (n.push($), v.slice(0, b) + nt + v.slice(b) + I + x) : v + I + (b === -2 ? w : x);
  }
  return [ot(i, l + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const w = e.length - 1, v = this.parts, [$, A] = er(e, t);
    if (this.el = re.createElement($, n), z.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = z.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(nt)) {
          const T = A[u++], x = o.getAttribute(b).split(I), H = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: l, name: H[2], strings: x, ctor: H[1] === "." ? rr : H[1] === "?" ? nr : H[1] === "@" ? ir : ce }), o.removeAttribute(b);
        } else b.startsWith(I) && (v.push({ type: 6, index: l }), o.removeAttribute(b));
        if (st.test(o.tagName)) {
          const b = o.textContent.split(I), T = b.length - 1;
          if (T > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let x = 0; x < T; x++) o.append(b[x], ee()), z.nextNode(), v.push({ type: 2, index: ++l });
            o.append(b[T], ee());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) v.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(I, b + 1)) !== -1; ) v.push({ type: 7, index: l }), b += I.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = B.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Z(i, e, t = i, n) {
  var u, w;
  if (e === q) return e;
  let o = n !== void 0 ? (u = t.o) == null ? void 0 : u[n] : t.l;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), l === void 0 ? o = void 0 : (o = new l(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = Z(i, o._$AS(i, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? B).importNode(t, !0);
    z.currentNode = o;
    let l = z.nextNode(), u = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let $;
        v.type === 2 ? $ = new ie(l, l.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && ($ = new sr(l, this, e)), this._$AV.push($), v = n[++w];
      }
      u !== (v == null ? void 0 : v.index) && (l = z.nextNode(), u++);
    }
    return z.currentNode = B, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ie {
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
    e = Z(this, e, t), te(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(B.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(ot(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new tr(o, this), w = u.u(this.options);
      u.p(t), this.T(w), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ie(this.O(ee()), this.O(ee()), this, this.options)) : n = t[o], n._$AI(l), o++;
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
class ce {
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
    if (l === void 0) e = Z(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== q, u && (this._$AH = e);
    else {
      const w = e;
      let v, $;
      for (e = l[0], v = 0; v < l.length - 1; v++) $ = Z(this, w[n + v], t, v), $ === q && ($ = this._$AH[v]), u || (u = !te($) || $ !== this._$AH[v]), $ === C ? e = C : e !== C && (e += ($ ?? "") + l[v + 1]), this._$AH[v] = $;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends ce {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? C) === q) return;
    const n = this._$AH, o = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
const ge = Q.litHtmlPolyfillSupport;
ge == null || ge(re, ie), (Q.litHtmlVersions ?? (Q.litHtmlVersions = [])).push("3.2.0");
const or = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ie(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class K extends F {
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
    return q;
  }
}
var tt;
K._$litElement$ = !0, K.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: K });
const me = globalThis.litElementPolyfillSupport;
me == null || me({ LitElement: K });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e }, ur = (i = ar, e, t) => {
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
function se(i) {
  return (e, t) => typeof t == "object" ? ur(i, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, u ? { ...n, wrapped: !0 } : n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(i, e, t);
}
var lr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, U = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && lr(e, t, o), o;
};
let k = class extends K {
  constructor() {
    super(...arguments), this.maxWidth = 1200, this.padding = 32, this.backgroundColor = "transparent", this.enableHeader = !1, this.label = "";
  }
  get maxWidthConfig() {
    return this.maxWidth;
  }
  set maxWidthConfig(i) {
    this.maxWidth = Number(i) || 1200;
  }
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(i) {
    this.padding = Number(i) || 32;
  }
  get backgroundConfig() {
    return this.backgroundColor;
  }
  set backgroundConfig(i) {
    this.backgroundColor = i || "transparent";
  }
  render() {
    const i = [
      `--zero-section-max-width:var(--zero-section-max-width-override, ${Math.max(280, Number(this.maxWidth) || 1200)}px)`,
      `--zero-section-padding:var(--zero-section-padding-override, ${Math.max(0, Number(this.padding) || 0)}px 20px)`,
      `--zero-section-bg:${this.backgroundColor || "transparent"}`
    ].join(";");
    return Ke`
      <section style=${i}>
        ${this.enableHeader && this.label ? Ke`<div class="section-header">${this.label}</div>` : ""}
        <div class="inner">
          <slot></slot>
        </div>
      </section>
    `;
  }
};
k.styles = Wt`
    :host {
      display: block;
      width: 100%;
      --zero-section-header-padding: 8px 20px;
    }

    section {
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-section-padding, 32px 20px);
      background: var(--zero-section-bg, transparent);
    }

    .section-header {
      max-width: var(--zero-section-max-width, 1200px);
      margin: 0 auto 12px;
      padding: var(--zero-section-header-padding);
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      font-weight: 700;
      color: var(--zero-text-muted, #64748b);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .inner {
      max-width: var(--zero-section-max-width, 1200px);
      margin: 0 auto;
    }
  `;
U([
  se({ type: Number, attribute: "max-width" })
], k.prototype, "maxWidth", 2);
U([
  se({ type: Number })
], k.prototype, "padding", 2);
U([
  se({ type: String, attribute: "background-color" })
], k.prototype, "backgroundColor", 2);
U([
  se({ type: Boolean, attribute: "enable-header" }),
  ne({
    attributeType: W.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Show Header",
    fieldMappings: "enableHeader"
  })
], k.prototype, "enableHeader", 2);
U([
  se({ type: String }),
  ne({
    attributeType: W.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Section Label",
    fieldMappings: "label"
  })
], k.prototype, "label", 2);
U([
  ne({
    attributeType: W.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Max Width",
    fieldMappings: "maxWidth"
  })
], k.prototype, "maxWidthConfig", 1);
U([
  ne({
    attributeType: W.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
], k.prototype, "paddingConfig", 1);
U([
  ne({
    attributeType: W.PROPERTY,
    uiComponentType: L.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
], k.prototype, "backgroundConfig", 1);
k = U([
  It({
    name: "zero-section",
    version: "1.0.0",
    title: "Section",
    elementSelector: "zero-section",
    group: "Layout",
    iconName: "section-icon.png"
  }),
  jt()
], k);
export {
  k as ZeroSection
};
