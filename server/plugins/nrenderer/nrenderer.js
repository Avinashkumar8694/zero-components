var Ct = Object.defineProperty;
var Tt = (o, e, t) => e in o ? Ct(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var Ue = (o, e, t) => Tt(o, typeof e != "symbol" ? e + "" : e, t);
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ie;
(function(o) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof He == "object" ? He : typeof self == "object" ? self : typeof this == "object" ? this : b(), i = s(o);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = o);
    function s(v, g) {
      return function(A, $) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: $ }), g && g(A, $);
      };
    }
    function h() {
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
    function b() {
      return h() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", h = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, g = !b && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return ue(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ue({ __proto__: null });
      } : function() {
        return ue({});
      },
      has: g ? function(r, n) {
        return i.call(r, n);
      } : function(r, n) {
        return n in r;
      },
      get: g ? function(r, n) {
        return i.call(r, n) ? r[n] : void 0;
      } : function(r, n) {
        return r[n];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Et(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : St(), N = typeof WeakMap == "function" ? WeakMap : Ot(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, ee = gt(), me = At(ee);
    function nt(r, n, a, u) {
      if (_(a)) {
        if (!Me(r))
          throw new TypeError();
        if (!Pe(n))
          throw new TypeError();
        return ft(r, n);
      } else {
        if (!Me(r))
          throw new TypeError();
        if (!O(n))
          throw new TypeError();
        if (!O(u) && !_(u) && !z(u))
          throw new TypeError();
        return z(u) && (u = void 0), a = x(a), pt(r, n, a, u);
      }
    }
    e("decorate", nt);
    function it(r, n) {
      function a(u, y) {
        if (!O(u))
          throw new TypeError();
        if (!_(y) && !wt(y))
          throw new TypeError();
        Ae(r, n, u, y);
      }
      return a;
    }
    e("metadata", it);
    function st(r, n, a, u) {
      if (!O(a))
        throw new TypeError();
      return _(u) || (u = x(u)), Ae(r, n, a, u);
    }
    e("defineMetadata", st);
    function ot(r, n, a) {
      if (!O(n))
        throw new TypeError();
      return _(a) || (a = x(a)), we(r, n, a);
    }
    e("hasMetadata", ot);
    function at(r, n, a) {
      if (!O(n))
        throw new TypeError();
      return _(a) || (a = x(a)), se(r, n, a);
    }
    e("hasOwnMetadata", at);
    function ut(r, n, a) {
      if (!O(n))
        throw new TypeError();
      return _(a) || (a = x(a)), $e(r, n, a);
    }
    e("getMetadata", ut);
    function lt(r, n, a) {
      if (!O(n))
        throw new TypeError();
      return _(a) || (a = x(a)), ge(r, n, a);
    }
    e("getOwnMetadata", lt);
    function ht(r, n) {
      if (!O(r))
        throw new TypeError();
      return _(n) || (n = x(n)), be(r, n);
    }
    e("getMetadataKeys", ht);
    function ct(r, n) {
      if (!O(r))
        throw new TypeError();
      return _(n) || (n = x(n)), Ee(r, n);
    }
    e("getOwnMetadataKeys", ct);
    function dt(r, n, a) {
      if (!O(n))
        throw new TypeError();
      if (_(a) || (a = x(a)), !O(n))
        throw new TypeError();
      _(a) || (a = x(a));
      var u = V(
        n,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(r, n, a);
    }
    e("deleteMetadata", dt);
    function ft(r, n) {
      for (var a = r.length - 1; a >= 0; --a) {
        var u = r[a], y = u(n);
        if (!_(y) && !z(y)) {
          if (!Pe(y))
            throw new TypeError();
          n = y;
        }
      }
      return n;
    }
    function pt(r, n, a, u) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], M = P(n, a, u);
        if (!_(M) && !z(M)) {
          if (!O(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function we(r, n, a) {
      var u = se(r, n, a);
      if (u)
        return !0;
      var y = ae(n);
      return z(y) ? !1 : we(r, y, a);
    }
    function se(r, n, a) {
      var u = V(
        n,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : Oe(u.OrdinaryHasOwnMetadata(r, n, a));
    }
    function $e(r, n, a) {
      var u = se(r, n, a);
      if (u)
        return ge(r, n, a);
      var y = ae(n);
      if (!z(y))
        return $e(r, y, a);
    }
    function ge(r, n, a) {
      var u = V(
        n,
        a,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(r, n, a);
    }
    function Ae(r, n, a, u) {
      var y = V(
        a,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, n, a, u);
    }
    function be(r, n) {
      var a = Ee(r, n), u = ae(r);
      if (u === null)
        return a;
      var y = be(u, n);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new k(), M = [], m = 0, c = a; m < c.length; m++) {
        var d = c[m], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      for (var p = 0, w = y; p < w.length; p++) {
        var d = w[p], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      return M;
    }
    function Ee(r, n) {
      var a = V(
        r,
        n,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, n) : [];
    }
    function Se(r) {
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
    function yt(r) {
      return typeof r == "symbol";
    }
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function vt(r, n) {
      switch (Se(r)) {
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
      var a = "string", u = Ce(r, h);
      if (u !== void 0) {
        var y = u.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return _t(r);
    }
    function _t(r, n) {
      var a, u;
      {
        var y = r.toString;
        if (te(y)) {
          var u = y.call(r);
          if (!O(u))
            return u;
        }
        var a = r.valueOf;
        if (te(a)) {
          var u = a.call(r);
          if (!O(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Oe(r) {
      return !!r;
    }
    function mt(r) {
      return "" + r;
    }
    function x(r) {
      var n = vt(r);
      return yt(n) ? n : mt(n);
    }
    function Me(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function te(r) {
      return typeof r == "function";
    }
    function Pe(r) {
      return typeof r == "function";
    }
    function wt(r) {
      switch (Se(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function oe(r, n) {
      return r === n || r !== r && n !== n;
    }
    function Ce(r, n) {
      var a = r[n];
      if (a != null) {
        if (!te(a))
          throw new TypeError();
        return a;
      }
    }
    function Te(r) {
      var n = Ce(r, l);
      if (!te(n))
        throw new TypeError();
      var a = n.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function ke(r) {
      return r.value;
    }
    function Re(r) {
      var n = r.next();
      return n.done ? !1 : n;
    }
    function xe(r) {
      var n = r.return;
      n && n.call(r);
    }
    function ae(r) {
      var n = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || n !== $)
        return n;
      var a = r.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return n;
      var y = u.constructor;
      return typeof y != "function" || y === r ? n : y;
    }
    function $t() {
      var r;
      !_(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = bt(t.Reflect));
      var n, a, u, y = new N(), P = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case _(n):
            n = p;
            break;
          case n === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            u === void 0 && (u = new k()), u.add(p);
            break;
        }
      }
      function m(p, w) {
        if (!_(n)) {
          if (n.isProviderFor(p, w))
            return n;
          if (!_(a)) {
            if (a.isProviderFor(p, w))
              return n;
            if (!_(u))
              for (var E = Te(u); ; ) {
                var S = Re(E);
                if (!S)
                  return;
                var R = ke(S);
                if (R.isProviderFor(p, w))
                  return xe(E), R;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, w))
          return r;
      }
      function c(p, w) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(w)), _(S) && (S = m(p, w), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(w, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return n === p || a === p || !_(u) && u.has(p);
      }
      function f(p, w, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, w);
        if (S !== E) {
          if (!_(S))
            return !1;
          var R = y.get(p);
          _(R) && (R = new T(), y.set(p, R)), R.set(w, E);
        }
        return !0;
      }
    }
    function gt() {
      var r;
      return !_(L) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[L]), _(r) && (r = $t()), !_(L) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function At(r) {
      var n = new N(), a = {
        isProviderFor: function(d, f) {
          var p = n.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return ee.registerProvider(a), a;
      function u(d, f, p) {
        var w = n.get(d), E = !1;
        if (_(w)) {
          if (!p)
            return;
          w = new T(), n.set(d, w), E = !0;
        }
        var S = w.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), w.set(f, S), !r.setProvider(d, f, a))
            throw w.delete(f), E && n.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, f, p) {
        var w = u(
          f,
          p,
          /*Create*/
          !1
        );
        return _(w) ? !1 : Oe(w.has(d));
      }
      function P(d, f, p) {
        var w = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(w))
          return w.get(d);
      }
      function M(d, f, p, w) {
        var E = u(
          p,
          w,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function m(d, f) {
        var p = [], w = u(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(w))
          return p;
        for (var E = w.keys(), S = Te(E), R = 0; ; ) {
          var Ne = Re(S);
          if (!Ne)
            return p.length = R, p;
          var Mt = ke(Ne);
          try {
            p[R] = Mt;
          } catch (Pt) {
            try {
              xe(S);
            } finally {
              throw Pt;
            }
          }
          R++;
        }
      }
      function c(d, f, p) {
        var w = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(w) || !w.delete(d))
          return !1;
        if (w.size === 0) {
          var E = n.get(f);
          _(E) || (E.delete(p), E.size === 0 && n.delete(E));
        }
        return !0;
      }
    }
    function bt(r) {
      var n = r.defineMetadata, a = r.hasOwnMetadata, u = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, M = new N(), m = {
        isProviderFor: function(c, d) {
          var f = M.get(c);
          return !_(f) && f.has(d) ? !0 : y(c, d).length ? (_(f) && (f = new k(), M.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: n,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function V(r, n, a) {
      var u = ee.getProvider(r, n);
      if (!_(u))
        return u;
      if (a) {
        if (ee.setProvider(r, n, me))
          return me;
        throw new Error("Illegal state.");
      }
    }
    function Et() {
      var r = {}, n = [], a = (
        /** @class */
        function() {
          function m(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = n, this._values = n) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), { value: c, done: !0 };
          }, m;
        }()
      ), u = (
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
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, oe(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(c, d) {
            if (!oe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (oe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function y(m, c) {
        return m;
      }
      function P(m, c) {
        return c;
      }
      function M(m, c) {
        return [m, c];
      }
    }
    function St() {
      var r = (
        /** @class */
        function() {
          function n() {
            this._map = new T();
          }
          return Object.defineProperty(n.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), n.prototype.has = function(a) {
            return this._map.has(a);
          }, n.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, n.prototype.delete = function(a) {
            return this._map.delete(a);
          }, n.prototype.clear = function() {
            this._map.clear();
          }, n.prototype.keys = function() {
            return this._map.keys();
          }, n.prototype.values = function() {
            return this._map.keys();
          }, n.prototype.entries = function() {
            return this._map.entries();
          }, n.prototype["@@iterator"] = function() {
            return this.keys();
          }, n.prototype[l] = function() {
            return this.keys();
          }, n;
        }()
      );
      return r;
    }
    function Ot() {
      var r = 16, n = A.create(), a = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
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
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while (A.has(n, c));
        return n[c] = !0, c;
      }
      function y(c, d) {
        if (!i.call(c, a)) {
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
      function M(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, c), d;
        }
        return P(new Array(c), c);
      }
      function m() {
        var c = M(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ue(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ie || (Ie = {}));
function kt(o) {
  return typeof o.name == "string" && typeof o.version == "string" && typeof o.title == "string" && typeof o.elementSelector == "string" && typeof o.group == "string" && typeof o.iconName == "string";
}
function Rt(o) {
  return function(e) {
    if (kt(o)) {
      const t = {
        version: o.version,
        name: o.name,
        title: o.title,
        selector: o.elementSelector,
        category: o.group,
        icon: o.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${o.elementSelector}-${o.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function xt(o) {
  return Rt(o);
}
function Nt(o) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ue(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(h) {
        try {
          super.update(h);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const h = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (h && b) {
          const g = new CSSStyleSheet(), A = (v = h.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach(($) => g.insertRule($.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, g]);
        } else if (h) {
          const g = h.cloneNode(!0);
          this.shadowRoot.appendChild(g);
        }
        l.forEach((g) => {
          const A = g.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return t;
  };
}
var je;
(function(o) {
  o.TEXT_INPUT = "text-input", o.PASSWORD_INPUT = "password-input", o.DROPDOWN = "dropdown", o.CHECKBOX = "checkbox", o.RADIO_BUTTON = "radio-button", o.RANGE_SLIDER = "range-slider", o.FILE_INPUT = "file-input", o.DATE_PICKER = "date-picker", o.COLOR_PICKER = "color-picker", o.NUMBER_INPUT = "number-input", o.TEXTAREA = "textarea", o.MULTI_SELECT = "multi-select", o.POPUP_DROPDOWN = "popup-dropdown";
})(je || (je = {}));
var De;
(function(o) {
  o.PROPERTY = "property", o.EVENT = "event", o.ACTION = "action";
})(De || (De = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, ye = re.ShadowRoot && (re.ShadyCSS === void 0 || re.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ve = Symbol(), Le = /* @__PURE__ */ new WeakMap();
let Ye = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== ve) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ye && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Le.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Le.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ut = (o) => new Ye(typeof o == "string" ? o : o + "", void 0, ve), Ht = (o, ...e) => {
  const t = o.length === 1 ? o[0] : e.reduce((i, s, h) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[h + 1], o[0]);
  return new Ye(t, o, ve);
}, It = (o, e) => {
  if (ye) o.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = re.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, o.appendChild(i);
  }
}, ze = ye ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Ut(t);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: jt, defineProperty: Dt, getOwnPropertyDescriptor: Lt, getOwnPropertyNames: zt, getOwnPropertySymbols: Gt, getPrototypeOf: Wt } = Object, H = globalThis, Ge = H.trustedTypes, Bt = Ge ? Ge.emptyScript : "", le = H.reactiveElementPolyfillSupport, q = (o, e) => o, fe = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? Bt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let t = o;
  switch (e) {
    case Boolean:
      t = o !== null;
      break;
    case Number:
      t = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(o);
      } catch {
        t = null;
      }
  }
  return t;
} }, Qe = (o, e) => !jt(o, e), We = { attribute: !0, type: String, converter: fe, reflect: !1, hasChanged: Qe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class G extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = We) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Dt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: h } = Lt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const b = s == null ? void 0 : s.call(this);
      h.call(this, l), this.requestUpdate(e, b, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? We;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const e = Wt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const t = this.properties, i = [...zt(t), ...Gt(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(ze(s));
    } else e !== void 0 && t.push(ze(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return It(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var h;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const l = (((h = i.converter) == null ? void 0 : h.toAttribute) !== void 0 ? i.converter : fe).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var h;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = i.getPropertyOptions(s), b = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((h = l.converter) == null ? void 0 : h.fromAttribute) !== void 0 ? l.converter : fe;
      this._$Em = s, this[s] = b.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? Qe)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [h, l] of this._$Ep) this[h] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [h, l] of s) l.wrapped !== !0 || this._$AL.has(h) || this[h] === void 0 || this.P(h, this[h], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
        var h;
        return (h = s.hostUpdate) == null ? void 0 : h.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[q("elementProperties")] = /* @__PURE__ */ new Map(), G[q("finalized")] = /* @__PURE__ */ new Map(), le == null || le({ ReactiveElement: G }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, ne = Z.trustedTypes, Be = ne ? ne.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Ke = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, et = "?" + U, Vt = `<${et}>`, D = document, J = () => D.createComment(""), Y = (o) => o === null || typeof o != "object" && typeof o != "function", _e = Array.isArray, Ft = (o) => _e(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", he = `[ 	
\f\r]`, F = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ve = /-->/g, Fe = />/g, I = RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), qe = /'/g, Ze = /"/g, tt = /^(?:script|style|textarea|title)$/i, qt = (o) => (e, ...t) => ({ _$litType$: o, strings: e, values: t }), Zt = qt(1), W = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Xe = /* @__PURE__ */ new WeakMap(), j = D.createTreeWalker(D, 129);
function rt(o, e) {
  if (!_e(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Be !== void 0 ? Be.createHTML(e) : e;
}
const Xt = (o, e) => {
  const t = o.length - 1, i = [];
  let s, h = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = F;
  for (let b = 0; b < t; b++) {
    const v = o[b];
    let g, A, $ = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === F ? A[1] === "!--" ? l = Ve : A[1] !== void 0 ? l = Fe : A[2] !== void 0 ? (tt.test(A[2]) && (s = RegExp("</" + A[2], "g")), l = I) : A[3] !== void 0 && (l = I) : l === I ? A[0] === ">" ? (l = s ?? F, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = l.lastIndex - A[2].length, g = A[1], l = A[3] === void 0 ? I : A[3] === '"' ? Ze : qe) : l === Ze || l === qe ? l = I : l === Ve || l === Fe ? l = F : (l = I, s = void 0);
    const k = l === I && o[b + 1].startsWith("/>") ? " " : "";
    h += l === F ? v + Vt : $ >= 0 ? (i.push(g), v.slice(0, $) + Ke + v.slice($) + U + k) : v + U + ($ === -2 ? b : k);
  }
  return [rt(o, h + (o[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Q {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let h = 0, l = 0;
    const b = e.length - 1, v = this.parts, [g, A] = Xt(e, t);
    if (this.el = Q.createElement(g, i), j.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = j.nextNode()) !== null && v.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(Ke)) {
          const T = A[l++], k = s.getAttribute($).split(U), N = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: h, name: N[2], strings: k, ctor: N[1] === "." ? Yt : N[1] === "?" ? Qt : N[1] === "@" ? Kt : ie }), s.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: h }), s.removeAttribute($));
        if (tt.test(s.tagName)) {
          const $ = s.textContent.split(U), T = $.length - 1;
          if (T > 0) {
            s.textContent = ne ? ne.emptyScript : "";
            for (let k = 0; k < T; k++) s.append($[k], J()), j.nextNode(), v.push({ type: 2, index: ++h });
            s.append($[T], J());
          }
        }
      } else if (s.nodeType === 8) if (s.data === et) v.push({ type: 2, index: h });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: h }), $ += U.length - 1;
      }
      h++;
    }
  }
  static createElement(e, t) {
    const i = D.createElement("template");
    return i.innerHTML = e, i;
  }
}
function B(o, e, t = o, i) {
  var l, b;
  if (e === W) return e;
  let s = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const h = Y(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== h && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), h === void 0 ? s = void 0 : (s = new h(o), s._$AT(o, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = s : t.l = s), s !== void 0 && (e = B(o, s._$AS(o, e.values), s, i)), e;
}
class Jt {
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? D).importNode(t, !0);
    j.currentNode = s;
    let h = j.nextNode(), l = 0, b = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let g;
        v.type === 2 ? g = new K(h, h.nextSibling, this, e) : v.type === 1 ? g = new v.ctor(h, v.name, v.strings, this, e) : v.type === 6 && (g = new er(h, this, e)), this._$AV.push(g), v = i[++b];
      }
      l !== (v == null ? void 0 : v.index) && (h = j.nextNode(), l++);
    }
    return j.currentNode = D, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class K {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = B(this, e, t), Y(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ft(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Y(this._$AH) ? this._$AA.nextSibling.data = e : this.T(D.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var h;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Q.createElement(rt(i.h, i.h[0]), this.options)), i);
    if (((h = this._$AH) == null ? void 0 : h._$AD) === s) this._$AH.p(t);
    else {
      const l = new Jt(s, this), b = l.u(this.options);
      l.p(t), this.T(b), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Xe.get(e.strings);
    return t === void 0 && Xe.set(e.strings, t = new Q(e)), t;
  }
  k(e) {
    _e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const h of e) s === t.length ? t.push(i = new K(this.O(J()), this.O(J()), this, this.options)) : i = t[s], i._$AI(h), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ie {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, h) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = h, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(e, t = this, i, s) {
    const h = this.strings;
    let l = !1;
    if (h === void 0) e = B(this, e, t, 0), l = !Y(e) || e !== this._$AH && e !== W, l && (this._$AH = e);
    else {
      const b = e;
      let v, g;
      for (e = h[0], v = 0; v < h.length - 1; v++) g = B(this, b[i + v], t, v), g === W && (g = this._$AH[v]), l || (l = !Y(g) || g !== this._$AH[v]), g === C ? e = C : e !== C && (e += (g ?? "") + h[v + 1]), this._$AH[v] = g;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Yt extends ie {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class Qt extends ie {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class Kt extends ie {
  constructor(e, t, i, s, h) {
    super(e, t, i, s, h), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = B(this, e, t, 0) ?? C) === W) return;
    const i = this._$AH, s = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, h = e !== C && (i === C || s);
    s && this.element.removeEventListener(this.name, this, i), h && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class er {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    B(this, e);
  }
}
const ce = Z.litHtmlPolyfillSupport;
ce == null || ce(Q, K), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.2.0");
const tr = (o, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const h = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new K(e.insertBefore(J(), h), h, void 0, t ?? {});
  }
  return s._$AI(o), s;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = tr(t, this.renderRoot, this.renderOptions);
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
var Je;
X._$litElement$ = !0, X.finalized = !0, (Je = globalThis.litElementHydrateSupport) == null || Je.call(globalThis, { LitElement: X });
const de = globalThis.litElementPolyfillSupport;
de == null || de({ LitElement: X });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
var rr = Object.getOwnPropertyDescriptor, nr = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? rr(e, t) : e, h = o.length - 1, l; h >= 0; h--)
    (l = o[h]) && (s = l(s) || s);
  return s;
};
let pe = class extends X {
  render() {
    return Zt`
            <!-- Render form fields here -->

            <zero-popup-dropdown-directive-1.0.0 id="dropdown" enabled='true' config='[{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}]'>
                ttt
            </zero-popup-dropdown-directive-1.0.0>
        `;
  }
};
pe.styles = Ht`
        /* Add styles here */
        form{
            display: flex;
            flex-direction: column;
        }
    `;
pe = nr([
  xt({
    name: "nrenderer",
    version: "1.0.0",
    title: "Nrenderer",
    elementSelector: "zero-nrenderer",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Nt()
], pe);
export {
  pe as Nrenderer
};
