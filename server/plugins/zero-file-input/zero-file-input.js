var zt = Object.defineProperty;
var Ut = (r, e, t) => e in r ? zt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => Ut(r, typeof e != "symbol" ? e + "" : e, t);
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
var We;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : _(), i = s(r);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(v, $) {
      return function(E, w) {
        Object.defineProperty(v, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    function _() {
      return h() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", h = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !_ && !v, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
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
    }, w = Object.getPrototypeOf(Function), N = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ct(), D = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : St(), I = typeof WeakMap == "function" ? WeakMap : Ot(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Pt(), Pe = Mt(ae);
    function lt(n, o, a, d) {
      if (g(a)) {
        if (!Ue(n))
          throw new TypeError();
        if (!Ne(o))
          throw new TypeError();
        return mt(n, o);
      } else {
        if (!Ue(n))
          throw new TypeError();
        if (!R(o))
          throw new TypeError();
        if (!R(d) && !g(d) && !q(d))
          throw new TypeError();
        return q(d) && (d = void 0), a = L(a), bt(n, o, a, d);
      }
    }
    e("decorate", lt);
    function ht(n, o) {
      function a(d, y) {
        if (!R(d))
          throw new TypeError();
        if (!g(y) && !xt(y))
          throw new TypeError();
        Se(n, o, d, y);
      }
      return a;
    }
    e("metadata", ht);
    function dt(n, o, a, d) {
      if (!R(a))
        throw new TypeError();
      return g(d) || (d = L(d)), Se(n, o, a, d);
    }
    e("defineMetadata", dt);
    function ut(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return g(a) || (a = L(a)), Me(n, o, a);
    }
    e("hasMetadata", ut);
    function ct(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return g(a) || (a = L(a)), pe(n, o, a);
    }
    e("hasOwnMetadata", ct);
    function pt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return g(a) || (a = L(a)), Ae(n, o, a);
    }
    e("getMetadata", pt);
    function ft(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return g(a) || (a = L(a)), Ce(n, o, a);
    }
    e("getOwnMetadata", ft);
    function yt(n, o) {
      if (!R(n))
        throw new TypeError();
      return g(o) || (o = L(o)), Oe(n, o);
    }
    e("getMetadataKeys", yt);
    function vt(n, o) {
      if (!R(n))
        throw new TypeError();
      return g(o) || (o = L(o)), Re(n, o);
    }
    e("getOwnMetadataKeys", vt);
    function gt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      if (g(a) || (a = L(a)), !R(o))
        throw new TypeError();
      g(a) || (a = L(a));
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", gt);
    function mt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var d = n[a], y = d(o);
        if (!g(y) && !q(y)) {
          if (!Ne(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function bt(n, o, a, d) {
      for (var y = n.length - 1; y >= 0; --y) {
        var z = n[y], k = z(o, a, d);
        if (!g(k) && !q(k)) {
          if (!R(k))
            throw new TypeError();
          d = k;
        }
      }
      return d;
    }
    function Me(n, o, a) {
      var d = pe(n, o, a);
      if (d)
        return !0;
      var y = ye(o);
      return q(y) ? !1 : Me(n, y, a);
    }
    function pe(n, o, a) {
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : ze(d.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Ae(n, o, a) {
      var d = pe(n, o, a);
      if (d)
        return Ce(n, o, a);
      var y = ye(o);
      if (!q(y))
        return Ae(n, y, a);
    }
    function Ce(n, o, a) {
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Se(n, o, a, d) {
      var y = K(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, o, a, d);
    }
    function Oe(n, o) {
      var a = Re(n, o), d = ye(n);
      if (d === null)
        return a;
      var y = Oe(d, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var z = new D(), k = [], m = 0, u = a; m < u.length; m++) {
        var c = u[m], p = z.has(c);
        p || (z.add(c), k.push(c));
      }
      for (var f = 0, b = y; f < b.length; f++) {
        var c = b[f], p = z.has(c);
        p || (z.add(c), k.push(c));
      }
      return k;
    }
    function Re(n, o) {
      var a = K(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function ke(n) {
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
    function q(n) {
      return n === null;
    }
    function _t(n) {
      return typeof n == "symbol";
    }
    function R(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function wt(n, o) {
      switch (ke(n)) {
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
      var a = "string", d = De(n, h);
      if (d !== void 0) {
        var y = d.call(n, a);
        if (R(y))
          throw new TypeError();
        return y;
      }
      return $t(n);
    }
    function $t(n, o) {
      var a, d;
      {
        var y = n.toString;
        if (le(y)) {
          var d = y.call(n);
          if (!R(d))
            return d;
        }
        var a = n.valueOf;
        if (le(a)) {
          var d = a.call(n);
          if (!R(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function ze(n) {
      return !!n;
    }
    function Et(n) {
      return "" + n;
    }
    function L(n) {
      var o = wt(n);
      return _t(o) ? o : Et(o);
    }
    function Ue(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function le(n) {
      return typeof n == "function";
    }
    function Ne(n) {
      return typeof n == "function";
    }
    function xt(n) {
      switch (ke(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(n, o) {
      return n === o || n !== n && o !== o;
    }
    function De(n, o) {
      var a = n[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Fe(n) {
      var o = De(n, l);
      if (!le(o))
        throw new TypeError();
      var a = o.call(n);
      if (!R(a))
        throw new TypeError();
      return a;
    }
    function He(n) {
      return n.value;
    }
    function Le(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Ie(n) {
      var o = n.return;
      o && o.call(n);
    }
    function ye(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || o !== w)
        return o;
      var a = n.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var y = d.constructor;
      return typeof y != "function" || y === n ? o : y;
    }
    function Tt() {
      var n;
      !g(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = At(t.Reflect));
      var o, a, d, y = new I(), z = {
        registerProvider: k,
        getProvider: u,
        setProvider: p
      };
      return z;
      function k(f) {
        if (!Object.isExtensible(z))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case g(o):
            o = f;
            break;
          case o === f:
            break;
          case g(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            d === void 0 && (d = new D()), d.add(f);
            break;
        }
      }
      function m(f, b) {
        if (!g(o)) {
          if (o.isProviderFor(f, b))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(f, b))
              return o;
            if (!g(d))
              for (var P = Fe(d); ; ) {
                var S = Le(P);
                if (!S)
                  return;
                var F = He(S);
                if (F.isProviderFor(f, b))
                  return Ie(P), F;
              }
          }
        }
        if (!g(n) && n.isProviderFor(f, b))
          return n;
      }
      function u(f, b) {
        var P = y.get(f), S;
        return g(P) || (S = P.get(b)), g(S) && (S = m(f, b), g(S) || (g(P) && (P = new N(), y.set(f, P)), P.set(b, S))), S;
      }
      function c(f) {
        if (g(f))
          throw new TypeError();
        return o === f || a === f || !g(d) && d.has(f);
      }
      function p(f, b, P) {
        if (!c(P))
          throw new Error("Metadata provider not registered.");
        var S = u(f, b);
        if (S !== P) {
          if (!g(S))
            return !1;
          var F = y.get(f);
          g(F) && (F = new N(), y.set(f, F)), F.set(b, P);
        }
        return !0;
      }
    }
    function Pt() {
      var n;
      return !g(G) && R(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[G]), g(n) && (n = Tt()), !g(G) && R(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var o = new I(), a = {
        isProviderFor: function(c, p) {
          var f = o.get(c);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: k,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: z,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: u
      };
      return ae.registerProvider(a), a;
      function d(c, p, f) {
        var b = o.get(c), P = !1;
        if (g(b)) {
          if (!f)
            return;
          b = new N(), o.set(c, b), P = !0;
        }
        var S = b.get(p);
        if (g(S)) {
          if (!f)
            return;
          if (S = new N(), b.set(p, S), !n.setProvider(c, p, a))
            throw b.delete(p), P && o.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(c, p, f) {
        var b = d(
          p,
          f,
          /*Create*/
          !1
        );
        return g(b) ? !1 : ze(b.has(c));
      }
      function z(c, p, f) {
        var b = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(c);
      }
      function k(c, p, f, b) {
        var P = d(
          f,
          b,
          /*Create*/
          !0
        );
        P.set(c, p);
      }
      function m(c, p) {
        var f = [], b = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (g(b))
          return f;
        for (var P = b.keys(), S = Fe(P), F = 0; ; ) {
          var je = Le(S);
          if (!je)
            return f.length = F, f;
          var Rt = He(je);
          try {
            f[F] = Rt;
          } catch (kt) {
            try {
              Ie(S);
            } finally {
              throw kt;
            }
          }
          F++;
        }
      }
      function u(c, p, f) {
        var b = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(c))
          return !1;
        if (b.size === 0) {
          var P = o.get(p);
          g(P) || (P.delete(f), P.size === 0 && o.delete(P));
        }
        return !0;
      }
    }
    function At(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, d = n.getOwnMetadata, y = n.getOwnMetadataKeys, z = n.deleteMetadata, k = new I(), m = {
        isProviderFor: function(u, c) {
          var p = k.get(u);
          return !g(p) && p.has(c) ? !0 : y(u, c).length ? (g(p) && (p = new D(), k.set(u, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: z
      };
      return m;
    }
    function K(n, o, a) {
      var d = ae.getProvider(n, o);
      if (!g(d))
        return d;
      if (a) {
        if (ae.setProvider(n, o, Pe))
          return Pe;
        throw new Error("Illegal state.");
      }
    }
    function Ct() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function m(u, c, p) {
            this._index = 0, this._keys = u, this._values = c, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var c = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), u;
          }, m.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: u, done: !0 };
          }, m;
        }()
      ), d = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(u) {
            var c = this._find(
              u,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, m.prototype.set = function(u, c) {
            var p = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, m.prototype.delete = function(u) {
            var c = this._find(
              u,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, f = c + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, fe(u, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, z);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, k);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(u, c) {
            if (!fe(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (fe(this._keys[p], u)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return d;
      function y(m, u) {
        return m;
      }
      function z(m, u) {
        return u;
      }
      function k(m, u) {
        return [m, u];
      }
    }
    function St() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new N();
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Ot() {
      var n = 16, o = E.create(), a = d();
      return (
        /** @class */
        function() {
          function u() {
            this._key = d();
          }
          return u.prototype.has = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? E.has(p, this._key) : !1;
          }, u.prototype.get = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? E.get(p, this._key) : void 0;
          }, u.prototype.set = function(c, p) {
            var f = y(
              c,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, u.prototype.delete = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = d();
          }, u;
        }()
      );
      function d() {
        var u;
        do
          u = "@@WeakMap@@" + m();
        while (E.has(o, u));
        return o[u] = !0, u;
      }
      function y(u, c) {
        if (!i.call(u, a)) {
          if (!c)
            return;
          Object.defineProperty(u, a, { value: E.create() });
        }
        return u[a];
      }
      function z(u, c) {
        for (var p = 0; p < c; ++p)
          u[p] = Math.random() * 255 | 0;
        return u;
      }
      function k(u) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : z(c, u), c;
        }
        return z(new Array(u), u);
      }
      function m() {
        var u = k(n);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var c = "", p = 0; p < n; ++p) {
          var f = u[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ve(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(We || (We = {}));
function Nt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Dt(r) {
  return function(e) {
    if (Nt(r)) {
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
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ft(r) {
  return Dt(r);
}
function Ht(r) {
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
      update(h) {
        try {
          super.update(h);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const h = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (h && _) {
          const $ = new CSSStyleSheet(), E = (v = h.sheet) == null ? void 0 : v.cssRules;
          E && (Array.from(E).forEach((w) => $.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (h) {
          const $ = h.cloneNode(!0);
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
function Lt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function It(r) {
  return function(e, t) {
    try {
      Lt(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function C(r) {
  return It(r);
}
var A;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(A || (A = {}));
var M;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(M || (M = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, we = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ye.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ye.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const jt = (r) => new it(typeof r == "string" ? r : r + "", void 0, $e), Bt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, h) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[h + 1], r[0]);
  return new it(t, r, $e);
}, Vt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = he.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, Ge = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return jt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Yt, getOwnPropertyDescriptor: Gt, getOwnPropertyNames: qt, getOwnPropertySymbols: Xt, getPrototypeOf: Zt } = Object, B = globalThis, qe = B.trustedTypes, Jt = qe ? qe.emptyScript : "", ge = B.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Jt : null;
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
} }, Ee = (r, e) => !Wt(r, e), Xe = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class X extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: h } = Gt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const _ = s == null ? void 0 : s.call(this);
      h.call(this, l), this.requestUpdate(e, _, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, i = [...qt(t), ...Xt(t)];
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
      for (const s of i) t.unshift(Ge(s));
    } else e !== void 0 && t.push(Ge(e));
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
    return Vt(e, this.constructor.elementStyles), e;
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
      const l = (((h = i.converter) == null ? void 0 : h.toAttribute) !== void 0 ? i.converter : de).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var h;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = i.getPropertyOptions(s), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((h = l.converter) == null ? void 0 : h.fromAttribute) !== void 0 ? l.converter : de;
      this._$Em = s, this[s] = _.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? Ee)(this[e], t)) return;
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, ue = te.trustedTypes, Ze = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, nt = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + j, Kt = `<${st}>`, Y = document, ie = () => Y.createComment(""), ne = (r) => r === null || typeof r != "object" && typeof r != "function", xe = Array.isArray, Qt = (r) => xe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Ke = />/g, V = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, et = /"/g, ot = /^(?:script|style|textarea|title)$/i, er = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), H = er(1), Z = Symbol.for("lit-noChange"), U = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), W = Y.createTreeWalker(Y, 129);
function at(r, e) {
  if (!xe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const tr = (r, e) => {
  const t = r.length - 1, i = [];
  let s, h = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let $, E, w = -1, N = 0;
    for (; N < v.length && (l.lastIndex = N, E = l.exec(v), E !== null); ) N = l.lastIndex, l === Q ? E[1] === "!--" ? l = Je : E[1] !== void 0 ? l = Ke : E[2] !== void 0 ? (ot.test(E[2]) && (s = RegExp("</" + E[2], "g")), l = V) : E[3] !== void 0 && (l = V) : l === V ? E[0] === ">" ? (l = s ?? Q, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? V : E[3] === '"' ? et : Qe) : l === et || l === Qe ? l = V : l === Je || l === Ke ? l = Q : (l = V, s = void 0);
    const D = l === V && r[_ + 1].startsWith("/>") ? " " : "";
    h += l === Q ? v + Kt : w >= 0 ? (i.push($), v.slice(0, w) + nt + v.slice(w) + j + D) : v + j + (w === -2 ? _ : D);
  }
  return [at(r, h + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class se {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let h = 0, l = 0;
    const _ = e.length - 1, v = this.parts, [$, E] = tr(e, t);
    if (this.el = se.createElement($, i), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = W.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(nt)) {
          const N = E[l++], D = s.getAttribute(w).split(j), I = /([.?@])?(.*)/.exec(N);
          v.push({ type: 1, index: h, name: I[2], strings: D, ctor: I[1] === "." ? ir : I[1] === "?" ? nr : I[1] === "@" ? sr : ce }), s.removeAttribute(w);
        } else w.startsWith(j) && (v.push({ type: 6, index: h }), s.removeAttribute(w));
        if (ot.test(s.tagName)) {
          const w = s.textContent.split(j), N = w.length - 1;
          if (N > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let D = 0; D < N; D++) s.append(w[D], ie()), W.nextNode(), v.push({ type: 2, index: ++h });
            s.append(w[N], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === st) v.push({ type: 2, index: h });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(j, w + 1)) !== -1; ) v.push({ type: 7, index: h }), w += j.length - 1;
      }
      h++;
    }
  }
  static createElement(e, t) {
    const i = Y.createElement("template");
    return i.innerHTML = e, i;
  }
}
function J(r, e, t = r, i) {
  var l, _;
  if (e === Z) return e;
  let s = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const h = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== h && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), h === void 0 ? s = void 0 : (s = new h(r), s._$AT(r, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = s : t.l = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, i)), e;
}
class rr {
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Y).importNode(t, !0);
    W.currentNode = s;
    let h = W.nextNode(), l = 0, _ = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new oe(h, h.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(h, v.name, v.strings, this, e) : v.type === 6 && ($ = new or(h, this, e)), this._$AV.push($), v = i[++_];
      }
      l !== (v == null ? void 0 : v.index) && (h = W.nextNode(), l++);
    }
    return W.currentNode = Y, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = U, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), ne(e) ? e === U || e == null || e === "" ? (this._$AH !== U && this._$AR(), this._$AH = U) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== U && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Y.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var h;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = se.createElement(at(i.h, i.h[0]), this.options)), i);
    if (((h = this._$AH) == null ? void 0 : h._$AD) === s) this._$AH.p(t);
    else {
      const l = new rr(s, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const h of e) s === t.length ? t.push(i = new oe(this.O(ie()), this.O(ie()), this, this.options)) : i = t[s], i._$AI(h), s++;
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
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, h) {
    this.type = 1, this._$AH = U, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = h, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = U;
  }
  _$AI(e, t = this, i, s) {
    const h = this.strings;
    let l = !1;
    if (h === void 0) e = J(this, e, t, 0), l = !ne(e) || e !== this._$AH && e !== Z, l && (this._$AH = e);
    else {
      const _ = e;
      let v, $;
      for (e = h[0], v = 0; v < h.length - 1; v++) $ = J(this, _[i + v], t, v), $ === Z && ($ = this._$AH[v]), l || (l = !ne($) || $ !== this._$AH[v]), $ === U ? e = U : e !== U && (e += ($ ?? "") + h[v + 1]), this._$AH[v] = $;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === U ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === U ? void 0 : e;
  }
}
class nr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== U);
  }
}
class sr extends ce {
  constructor(e, t, i, s, h) {
    super(e, t, i, s, h), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? U) === Z) return;
    const i = this._$AH, s = e === U && i !== U || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, h = e !== U && (i === U || s);
    s && this.element.removeEventListener(this.name, this, i), h && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const be = te.litHtmlPolyfillSupport;
be == null || be(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.2.0");
const ar = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const h = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new oe(e.insertBefore(ie(), h), h, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends X {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = ar(t, this.renderRoot, this.renderOptions);
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
    return Z;
  }
}
var rt;
re._$litElement$ = !0, re.finalized = !0, (rt = globalThis.litElementHydrateSupport) == null || rt.call(globalThis, { LitElement: re });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: re });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, dr = (r = hr, e, t) => {
  const { kind: i, metadata: s } = t;
  let h = globalThis.litPropertyMetadata.get(s);
  if (h === void 0 && globalThis.litPropertyMetadata.set(s, h = /* @__PURE__ */ new Map()), h.set(t.name, r), i === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, v, r);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, r), _;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(_) {
      const v = this[l];
      e.call(this, _), this.requestUpdate(l, v, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function O(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((i, s, h) => {
    const l = s.hasOwnProperty(h);
    return s.constructor.createProperty(h, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(s, h) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Te(r) {
  return O({ ...r, state: !0, attribute: !1 });
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, T = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? cr(e, t) : e, h = r.length - 1, l; h >= 0; h--)
    (l = r[h]) && (s = (i ? l(e, t, s) : l(s)) || s);
  return i && s && ur(e, t, s), s;
};
let x = class extends re {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Choose files or drag and drop", this.helpText = "", this.errorMessage = "", this.required = !1, this.disabled = !1, this.multiple = !1, this.showPreview = !0, this.showProgress = !1, this.dragDrop = !0, this.accept = "", this.maxFileSize = 10, this.maxFiles = 10, this.width = "100%", this.height = "auto", this.dropZoneHeight = "120px", this.borderRadius = "4px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.successColor = "#4caf50", this.files = [], this.isDragOver = !1, this.hasError = !1;
  }
  render() {
    return H`
      <div class="form-field" style="width: ${this.width}; height: ${this.height}">
        ${this.label ? H`
          <label class="form-field-label ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}        <div 
          class="file-input-container ${this.isDragOver ? "drag-over" : ""} ${this.disabled ? "disabled" : ""} ${this.hasError ? "error" : ""}"
          @dragover=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
          @click=${this.handleClick}
          style="
            --primary-color: ${this.primaryColor};
            --error-color: ${this.errorColor};
            --success-color: ${this.successColor};
            --border-radius: ${this.borderRadius};
            --drop-zone-height: ${this.dropZoneHeight};
          "
        >
          <input
            class="file-input"
            type="file"
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            accept=${this.accept}
            @change=${this.handleFileSelect}
            @click=${this.handleInputStopPropagation}
          />
          
          <div class="drop-zone">
            <svg class="upload-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <div class="upload-text">${this.placeholder}</div>
            <div class="upload-subtext">
              ${this.accept ? `Supported: ${this.accept}` : "All file types supported"} 
              ${this.maxFileSize ? `• Max ${this.maxFileSize}MB` : ""}
            </div>
            ${this.dragDrop ? "" : H`
              <button type="button" class="browse-button" @click=${this.handleBrowseClick}>
                Browse Files
              </button>
            `}
          </div>
        </div>

        ${this.files.length > 0 && this.showPreview ? H`
          <div class="file-list">
            ${this.files.map((r) => H`
              <div class="file-item">
                <div class="file-preview">
                  ${this.isImageFile(r.file) ? H`
                    <img src=${URL.createObjectURL(r.file)} alt=${r.file.name} />
                  ` : H`
                    ${this.getFileExtension(r.file.name)}
                  `}
                </div>
                <div class="file-info">
                  <div class="file-name">${r.file.name}</div>
                  <div class="file-size">${this.formatFileSize(r.file.size)}</div>
                  ${this.showProgress && r.progress !== void 0 ? H`
                    <div class="file-progress">
                      <div class="file-progress-bar" style="width: ${r.progress}%"></div>
                    </div>
                  ` : ""}
                  ${r.error ? H`
                    <div class="file-error">${r.error}</div>
                  ` : ""}
                </div>
                <div class="file-actions">
                  <button 
                    type="button" 
                    class="file-action-btn remove-btn"
                    @click=${() => this.removeFile(r.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.helpText && !this.hasError ? H`
          <div class="form-field-hint">${this.helpText}</div>
        ` : ""}
        
        ${this.errorMessage && this.hasError ? H`
          <div class="form-field-error">${this.errorMessage}</div>
        ` : ""}
      </div>
    `;
  }
  handleDragOver(r) {
    this.disabled || !this.dragDrop || (r.preventDefault(), r.stopPropagation(), this.isDragOver = !0);
  }
  handleDragLeave(r) {
    this.disabled || !this.dragDrop || (r.preventDefault(), r.stopPropagation(), this.isDragOver = !1);
  }
  handleDrop(r) {
    var t;
    if (this.disabled || !this.dragDrop) return;
    r.preventDefault(), r.stopPropagation(), this.isDragOver = !1;
    const e = Array.from(((t = r.dataTransfer) == null ? void 0 : t.files) || []);
    this.processFiles(e);
  }
  handleClick(r) {
    var t;
    if (this.disabled) return;
    r.preventDefault(), r.stopPropagation();
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".file-input");
    e && e.click();
  }
  handleBrowseClick(r) {
    r.preventDefault(), r.stopPropagation(), this.handleClick(r);
  }
  handleInputStopPropagation(r) {
    r.stopPropagation();
  }
  handleFileSelect(r) {
    r.preventDefault(), r.stopPropagation();
    const e = r.target, t = Array.from(e.files || []);
    this.processFiles(t), e.value = "";
  }
  processFiles(r) {
    let e = r.filter((i) => this.validateFile(i));
    this.multiple || (e = e.slice(0, 1), this.files = []), this.maxFiles && this.files.length + e.length > this.maxFiles && (e = e.slice(0, this.maxFiles - this.files.length), this.hasError = !0, this.errorMessage = `Maximum ${this.maxFiles} files allowed`);
    const t = e.map((i) => ({
      file: i,
      id: this.generateId(),
      progress: this.showProgress ? 0 : void 0
    }));
    this.files = [...this.files, ...t], this.showProgress && t.forEach((i) => {
      this.simulateUpload(i);
    }), this.dispatchChangeEvent();
  }
  validateFile(r) {
    var e;
    if (this.maxFileSize && r.size > this.maxFileSize * 1024 * 1024)
      return this.hasError = !0, this.errorMessage = `File size must be less than ${this.maxFileSize}MB`, !1;
    if (this.accept) {
      const t = this.accept.split(",").map((l) => l.trim().toLowerCase()), i = r.type.toLowerCase(), s = "." + ((e = r.name.split(".").pop()) == null ? void 0 : e.toLowerCase());
      if (!t.some((l) => l.startsWith(".") ? l === s : i.match(l.replace("*", ".*"))))
        return this.hasError = !0, this.errorMessage = `File type not supported. Accepted: ${this.accept}`, !1;
    }
    return this.hasError = !1, this.errorMessage = "", !0;
  }
  removeFile(r) {
    this.files = this.files.filter((e) => e.id !== r), this.dispatchChangeEvent(), this.files.length === 0 && (this.hasError = !1, this.errorMessage = "");
  }
  simulateUpload(r) {
    const e = setInterval(() => {
      r.progress !== void 0 && r.progress < 100 && (r.progress += Math.random() * 20, r.progress >= 100 && (r.progress = 100, clearInterval(e)), this.requestUpdate());
    }, 200);
  }
  isImageFile(r) {
    return r.type.startsWith("image/");
  }
  getFileExtension(r) {
    var t;
    return ((t = r.split(".").pop()) == null ? void 0 : t.toLowerCase()) || "file";
  }
  formatFileSize(r) {
    if (r === 0) return "0 Bytes";
    const e = 1024, t = ["Bytes", "KB", "MB", "GB"], i = Math.floor(Math.log(r) / Math.log(e));
    return parseFloat((r / Math.pow(e, i)).toFixed(2)) + " " + t[i];
  }
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  dispatchChangeEvent() {
    const r = this.files.map((e) => e.file);
    this.dispatchEvent(new CustomEvent("change", {
      detail: { files: r, value: r },
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("file-change", {
      detail: {
        files: r,
        fileItems: this.files,
        count: r.length
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    this.dispatchChangeEvent();
  }
  handleFileChange(r) {
    this.dispatchChangeEvent();
  }
  // Public API
  clearFiles() {
    this.files = [], this.hasError = !1, this.errorMessage = "", this.dispatchChangeEvent();
  }
  getFiles() {
    return this.files.map((r) => r.file);
  }
  setError(r) {
    this.hasError = !0, this.errorMessage = r;
  }
  clearError() {
    this.hasError = !1, this.errorMessage = "";
  }
};
x.styles = Bt`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }    .form-field-label {
      display: block;
      font-size: var(--font-size-base, 14px);
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--error-color, #f44336);
    }    .file-input-container {
      position: relative;
      border: 2px dashed var(--border-color, #e0e0e0);
      border-radius: var(--border-radius, 4px);
      background: var(--background-color, #ffffff);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .file-input-container:hover {
      border-color: var(--primary-color, #1976d2);
      background: var(--hover-background, #f8f9fa);
    }    .file-input-container.drag-over {
      border-color: var(--primary-color, #1976d2);
      background: color-mix(in srgb, var(--primary-color, #1976d2) 5%, #ffffff);
      border-style: solid;
    }

    .file-input-container.disabled {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    }

    .file-input-container.error {
      border-color: var(--error-color, #f44336);
    }

    .drop-zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;      padding: var(--spacing-lg, 24px);
      min-height: var(--drop-zone-height, 120px);
      text-align: center;
    }    .file-input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      pointer-events: none;
    }.upload-icon {
      width: var(--icon-size-xl, 32px);
      height: var(--icon-size-xl, 32px);
      margin-bottom: 12px;
      opacity: 0.6;
    }.upload-text {
      font-size: var(--font-size-lg, 16px);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      margin-bottom: 4px;
    }

    .upload-subtext {
      font-size: var(--font-size-base, 14px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
    }

    .file-list {
      margin-top: 16px;
    }    .file-item {
      display: flex;
      align-items: center;
      padding: var(--spacing-md, 12px);
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius-sm, 4px);
      margin-bottom: 8px;
      background: white;
    }    .file-preview {
      width: var(--icon-size-xl, 40px);
      height: var(--icon-size-xl, 40px);
      border-radius: var(--border-radius-sm, 4px);
      margin-right: 12px;
      object-fit: cover;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, #666);
      text-transform: uppercase;
      font-weight: bold;
      border: 1px solid #e0e0e0;
      overflow: hidden;
    }

    .file-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .file-info {
      flex: 1;
    }    .file-name {
      font-size: var(--font-size-base, 14px);
      font-weight: 500;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      margin-bottom: 2px;
    }

    .file-size {
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
    }

    .file-progress {
      width: 100%;
      height: 4px;      background: var(--background-secondary, #e0e0e0);
      border-radius: var(--border-radius-xs, 2px);
      margin-top: 4px;
      overflow: hidden;
    }

    .file-progress-bar {
      height: 100%;
      background: var(--success-color, #4caf50);
      transition: width 0.3s ease;
    }    .file-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 2px;
    }.file-actions {
      display: flex;
      gap: var(--spacing-sm, 8px);
    }

    .file-action-btn {
      padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
      border: none;
      border-radius: var(--border-radius-sm, 4px);
      font-size: var(--font-size-xs, 12px);
      cursor: pointer;
      transition: var(--transition-fast, background 0.2s ease);
    }

    .remove-btn {
      background: #ffebee;
      color: var(--error-color, #f44336);
    }

    .remove-btn:hover {
      background: #ffcdd2;
    }    .form-field-hint {
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      margin-top: 4px;
    }

    .form-field-error {      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }    .browse-button {
      display: inline-flex;
      align-items: center;
      padding: var(--spacing-sm, 8px) var(--spacing-lg, 16px);
      background: var(--primary-color, #1976d2);
      color: white;
      border: none;
      border-radius: var(--border-radius-sm, 4px);
      font-size: var(--font-size-base, 14px);
      cursor: pointer;
      transition: var(--transition-fast, background 0.2s ease);
      margin-top: var(--spacing-md, 12px);
    }

    .browse-button:hover {
      background: color-mix(in srgb, var(--primary-color, #1976d2) 90%, black);
    }

    @media (max-width: 768px) {
      .drop-zone {
        padding: 16px;
        min-height: 80px;
      }
        .upload-text {
        font-size: var(--font-size-base, 14px);
      }
    }
  `;
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], x.prototype, "placeholder", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], x.prototype, "helpText", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], x.prototype, "errorMessage", 2);
T([
  O({ type: Boolean }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], x.prototype, "required", 2);
T([
  O({ type: Boolean }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], x.prototype, "disabled", 2);
T([
  O({ type: Boolean }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Multiple Files",
    fieldMappings: "multiple"
  })
], x.prototype, "multiple", 2);
T([
  O({ type: Boolean }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Preview",
    fieldMappings: "showPreview"
  })
], x.prototype, "showPreview", 2);
T([
  O({ type: Boolean }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Progress",
    fieldMappings: "showProgress"
  })
], x.prototype, "showProgress", 2);
T([
  O({ type: Boolean }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Drag and Drop",
    fieldMappings: "dragDrop"
  })
], x.prototype, "dragDrop", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Accept Types",
    placeholderText: "Enter file types (e.g., .pdf,.jpg,.png)",
    fieldMappings: "accept"
  })
], x.prototype, "accept", 2);
T([
  O({ type: Number }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Max File Size (MB)",
    fieldMappings: "maxFileSize"
  })
], x.prototype, "maxFileSize", 2);
T([
  O({ type: Number }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Max Files",
    fieldMappings: "maxFiles"
  })
], x.prototype, "maxFiles", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width (e.g., 100%, 300px)",
    fieldMappings: "width"
  })
], x.prototype, "width", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height (e.g., auto, 200px)",
    fieldMappings: "height"
  })
], x.prototype, "height", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Drop Zone Height",
    placeholderText: "Enter drop zone height (e.g., 120px)",
    fieldMappings: "dropZoneHeight"
  })
], x.prototype, "dropZoneHeight", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius (e.g., 4px)",
    fieldMappings: "borderRadius"
  })
], x.prototype, "borderRadius", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Primary Color",
    fieldMappings: "primaryColor"
  })
], x.prototype, "primaryColor", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Error Color",
    fieldMappings: "errorColor"
  })
], x.prototype, "errorColor", 2);
T([
  O({ type: String }),
  C({
    attributeType: M.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Success Color",
    fieldMappings: "successColor"
  })
], x.prototype, "successColor", 2);
T([
  Te()
], x.prototype, "files", 2);
T([
  Te()
], x.prototype, "isDragOver", 2);
T([
  Te()
], x.prototype, "hasError", 2);
T([
  C({
    attributeType: M.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], x.prototype, "handleChange", 1);
T([
  C({
    attributeType: M.EVENT,
    displayLabel: "On File Change",
    eventTrigger: "file-change"
  })
], x.prototype, "handleFileChange", 1);
x = T([
  Ft({
    name: "zero-file-input",
    version: "1.0.0",
    title: "File Input",
    elementSelector: "zero-file-input",
    group: "Form Controls",
    iconName: "file-input-icon.png"
  }),
  Ht(),
  lr("zero-file-input")
], x);
export {
  x as ZeroFileInput
};
