var Vt = Object.defineProperty;
var Bt = (r, e, t) => e in r ? Vt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => Bt(r, typeof e != "symbol" ? e + "" : e, t);
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof Ze == "object" ? Ze : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = o(r);
    typeof t.Reflect < "u" && (i = o(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(h, x) {
      return function($, v) {
        Object.defineProperty(h, $, { configurable: !0, writable: !0, value: v }), x && x($, v);
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
    function y() {
      return l() || c();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, x = !y && !h, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return Ae(/* @__PURE__ */ Object.create(null));
      } : h ? function() {
        return Ae({ __proto__: null });
      } : function() {
        return Ae({});
      },
      has: x ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: x ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, v = Object.getPrototypeOf(Function), k = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), j = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ft(), H = typeof WeakMap == "function" ? WeakMap : jt(), A = o ? Symbol.for("@reflect-metadata:registry") : void 0, L = Lt(), B = Dt(L);
    function $e(n, a, s, d) {
      if (m(s)) {
        if (!Ve(n))
          throw new TypeError();
        if (!Be(a))
          throw new TypeError();
        return Tt(n, a);
      } else {
        if (!Ve(n))
          throw new TypeError();
        if (!R(a))
          throw new TypeError();
        if (!R(d) && !m(d) && !K(d))
          throw new TypeError();
        return K(d) && (d = void 0), s = V(s), Ct(n, a, s, d);
      }
    }
    e("decorate", $e);
    function mt(n, a) {
      function s(d, b) {
        if (!R(d))
          throw new TypeError();
        if (!m(b) && !Rt(b))
          throw new TypeError();
        Ue(n, a, d, b);
      }
      return s;
    }
    e("metadata", mt);
    function vt(n, a, s, d) {
      if (!R(s))
        throw new TypeError();
      return m(d) || (d = V(d)), Ue(n, a, s, d);
    }
    e("defineMetadata", vt);
    function _t(n, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = V(s)), Le(n, a, s);
    }
    e("hasMetadata", _t);
    function wt(n, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = V(s)), xe(n, a, s);
    }
    e("hasOwnMetadata", wt);
    function $t(n, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = V(s)), De(n, a, s);
    }
    e("getMetadata", $t);
    function xt(n, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = V(s)), Ie(n, a, s);
    }
    e("getOwnMetadata", xt);
    function Et(n, a) {
      if (!R(n))
        throw new TypeError();
      return m(a) || (a = V(a)), Fe(n, a);
    }
    e("getMetadataKeys", Et);
    function St(n, a) {
      if (!R(n))
        throw new TypeError();
      return m(a) || (a = V(a)), je(n, a);
    }
    e("getOwnMetadataKeys", St);
    function At(n, a, s) {
      if (!R(a))
        throw new TypeError();
      if (m(s) || (s = V(s)), !R(a))
        throw new TypeError();
      m(s) || (s = V(s));
      var d = ie(
        a,
        s,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(n, a, s);
    }
    e("deleteMetadata", At);
    function Tt(n, a) {
      for (var s = n.length - 1; s >= 0; --s) {
        var d = n[s], b = d(a);
        if (!m(b) && !K(b)) {
          if (!Be(b))
            throw new TypeError();
          a = b;
        }
      }
      return a;
    }
    function Ct(n, a, s, d) {
      for (var b = n.length - 1; b >= 0; --b) {
        var D = n[b], N = D(a, s, d);
        if (!m(N) && !K(N)) {
          if (!R(N))
            throw new TypeError();
          d = N;
        }
      }
      return d;
    }
    function Le(n, a, s) {
      var d = xe(n, a, s);
      if (d)
        return !0;
      var b = Se(a);
      return K(b) ? !1 : Le(n, b, s);
    }
    function xe(n, a, s) {
      var d = ie(
        a,
        s,
        /*Create*/
        !1
      );
      return m(d) ? !1 : He(d.OrdinaryHasOwnMetadata(n, a, s));
    }
    function De(n, a, s) {
      var d = xe(n, a, s);
      if (d)
        return Ie(n, a, s);
      var b = Se(a);
      if (!K(b))
        return De(n, b, s);
    }
    function Ie(n, a, s) {
      var d = ie(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(n, a, s);
    }
    function Ue(n, a, s, d) {
      var b = ie(
        s,
        d,
        /*Create*/
        !0
      );
      b.OrdinaryDefineOwnMetadata(n, a, s, d);
    }
    function Fe(n, a) {
      var s = je(n, a), d = Se(n);
      if (d === null)
        return s;
      var b = Fe(d, a);
      if (b.length <= 0)
        return s;
      if (s.length <= 0)
        return b;
      for (var D = new j(), N = [], _ = 0, u = s; _ < u.length; _++) {
        var p = u[_], f = D.has(p);
        f || (D.add(p), N.push(p));
      }
      for (var g = 0, w = b; g < w.length; g++) {
        var p = w[g], f = D.has(p);
        f || (D.add(p), N.push(p));
      }
      return N;
    }
    function je(n, a) {
      var s = ie(
        n,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function ze(n) {
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
    function m(n) {
      return n === void 0;
    }
    function K(n) {
      return n === null;
    }
    function Pt(n) {
      return typeof n == "symbol";
    }
    function R(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Ot(n, a) {
      switch (ze(n)) {
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
      var s = "string", d = Je(n, l);
      if (d !== void 0) {
        var b = d.call(n, s);
        if (R(b))
          throw new TypeError();
        return b;
      }
      return Mt(n);
    }
    function Mt(n, a) {
      var s, d;
      {
        var b = n.toString;
        if (he(b)) {
          var d = b.call(n);
          if (!R(d))
            return d;
        }
        var s = n.valueOf;
        if (he(s)) {
          var d = s.call(n);
          if (!R(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function He(n) {
      return !!n;
    }
    function kt(n) {
      return "" + n;
    }
    function V(n) {
      var a = Ot(n);
      return Pt(a) ? a : kt(a);
    }
    function Ve(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function he(n) {
      return typeof n == "function";
    }
    function Be(n) {
      return typeof n == "function";
    }
    function Rt(n) {
      switch (ze(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ee(n, a) {
      return n === a || n !== n && a !== a;
    }
    function Je(n, a) {
      var s = n[a];
      if (s != null) {
        if (!he(s))
          throw new TypeError();
        return s;
      }
    }
    function Ge(n) {
      var a = Je(n, c);
      if (!he(a))
        throw new TypeError();
      var s = a.call(n);
      if (!R(s))
        throw new TypeError();
      return s;
    }
    function We(n) {
      return n.value;
    }
    function qe(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function Ye(n) {
      var a = n.return;
      a && a.call(n);
    }
    function Se(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === v || a !== v)
        return a;
      var s = n.prototype, d = s && Object.getPrototypeOf(s);
      if (d == null || d === Object.prototype)
        return a;
      var b = d.constructor;
      return typeof b != "function" || b === n ? a : b;
    }
    function Nt() {
      var n;
      !m(A) && typeof t.Reflect < "u" && !(A in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = It(t.Reflect));
      var a, s, d, b = new H(), D = {
        registerProvider: N,
        getProvider: u,
        setProvider: f
      };
      return D;
      function N(g) {
        if (!Object.isExtensible(D))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === g:
            break;
          case m(a):
            a = g;
            break;
          case a === g:
            break;
          case m(s):
            s = g;
            break;
          case s === g:
            break;
          default:
            d === void 0 && (d = new j()), d.add(g);
            break;
        }
      }
      function _(g, w) {
        if (!m(a)) {
          if (a.isProviderFor(g, w))
            return a;
          if (!m(s)) {
            if (s.isProviderFor(g, w))
              return a;
            if (!m(d))
              for (var T = Ge(d); ; ) {
                var O = qe(T);
                if (!O)
                  return;
                var z = We(O);
                if (z.isProviderFor(g, w))
                  return Ye(T), z;
              }
          }
        }
        if (!m(n) && n.isProviderFor(g, w))
          return n;
      }
      function u(g, w) {
        var T = b.get(g), O;
        return m(T) || (O = T.get(w)), m(O) && (O = _(g, w), m(O) || (m(T) && (T = new k(), b.set(g, T)), T.set(w, O))), O;
      }
      function p(g) {
        if (m(g))
          throw new TypeError();
        return a === g || s === g || !m(d) && d.has(g);
      }
      function f(g, w, T) {
        if (!p(T))
          throw new Error("Metadata provider not registered.");
        var O = u(g, w);
        if (O !== T) {
          if (!m(O))
            return !1;
          var z = b.get(g);
          m(z) && (z = new k(), b.set(g, z)), z.set(w, T);
        }
        return !0;
      }
    }
    function Lt() {
      var n;
      return !m(A) && R(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[A]), m(n) && (n = Nt()), !m(A) && R(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, A, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Dt(n) {
      var a = new H(), s = {
        isProviderFor: function(p, f) {
          var g = a.get(p);
          return m(g) ? !1 : g.has(f);
        },
        OrdinaryDefineOwnMetadata: N,
        OrdinaryHasOwnMetadata: b,
        OrdinaryGetOwnMetadata: D,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: u
      };
      return L.registerProvider(s), s;
      function d(p, f, g) {
        var w = a.get(p), T = !1;
        if (m(w)) {
          if (!g)
            return;
          w = new k(), a.set(p, w), T = !0;
        }
        var O = w.get(f);
        if (m(O)) {
          if (!g)
            return;
          if (O = new k(), w.set(f, O), !n.setProvider(p, f, s))
            throw w.delete(f), T && a.delete(p), new Error("Wrong provider for target.");
        }
        return O;
      }
      function b(p, f, g) {
        var w = d(
          f,
          g,
          /*Create*/
          !1
        );
        return m(w) ? !1 : He(w.has(p));
      }
      function D(p, f, g) {
        var w = d(
          f,
          g,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(p);
      }
      function N(p, f, g, w) {
        var T = d(
          g,
          w,
          /*Create*/
          !0
        );
        T.set(p, f);
      }
      function _(p, f) {
        var g = [], w = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return g;
        for (var T = w.keys(), O = Ge(T), z = 0; ; ) {
          var Xe = qe(O);
          if (!Xe)
            return g.length = z, g;
          var zt = We(Xe);
          try {
            g[z] = zt;
          } catch (Ht) {
            try {
              Ye(O);
            } finally {
              throw Ht;
            }
          }
          z++;
        }
      }
      function u(p, f, g) {
        var w = d(
          f,
          g,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(p))
          return !1;
        if (w.size === 0) {
          var T = a.get(f);
          m(T) || (T.delete(g), T.size === 0 && a.delete(T));
        }
        return !0;
      }
    }
    function It(n) {
      var a = n.defineMetadata, s = n.hasOwnMetadata, d = n.getOwnMetadata, b = n.getOwnMetadataKeys, D = n.deleteMetadata, N = new H(), _ = {
        isProviderFor: function(u, p) {
          var f = N.get(u);
          return !m(f) && f.has(p) ? !0 : b(u, p).length ? (m(f) && (f = new j(), N.set(u, f)), f.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: D
      };
      return _;
    }
    function ie(n, a, s) {
      var d = L.getProvider(n, a);
      if (!m(d))
        return d;
      if (s) {
        if (L.setProvider(n, a, B))
          return B;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var n = {}, a = [], s = (
        /** @class */
        function() {
          function _(u, p, f) {
            this._index = 0, this._keys = u, this._values = p, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[c] = function() {
            return this;
          }, _.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var p = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), u;
          }, _.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: u, done: !0 };
          }, _;
        }()
      ), d = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(u) {
            var p = this._find(
              u,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, _.prototype.set = function(u, p) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = p, this;
          }, _.prototype.delete = function(u) {
            var p = this._find(
              u,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var f = this._keys.length, g = p + 1; g < f; g++)
                this._keys[g - 1] = this._keys[g], this._values[g - 1] = this._values[g];
              return this._keys.length--, this._values.length--, Ee(u, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new s(this._keys, this._values, b);
          }, _.prototype.values = function() {
            return new s(this._keys, this._values, D);
          }, _.prototype.entries = function() {
            return new s(this._keys, this._values, N);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[c] = function() {
            return this.entries();
          }, _.prototype._find = function(u, p) {
            if (!Ee(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Ee(this._keys[f], u)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return d;
      function b(_, u) {
        return _;
      }
      function D(_, u) {
        return u;
      }
      function N(_, u) {
        return [_, u];
      }
    }
    function Ft() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new k();
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
          }, a.prototype[c] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function jt() {
      var n = 16, a = $.create(), s = d();
      return (
        /** @class */
        function() {
          function u() {
            this._key = d();
          }
          return u.prototype.has = function(p) {
            var f = b(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, u.prototype.get = function(p) {
            var f = b(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, u.prototype.set = function(p, f) {
            var g = b(
              p,
              /*create*/
              !0
            );
            return g[this._key] = f, this;
          }, u.prototype.delete = function(p) {
            var f = b(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = d();
          }, u;
        }()
      );
      function d() {
        var u;
        do
          u = "@@WeakMap@@" + _();
        while ($.has(a, u));
        return a[u] = !0, u;
      }
      function b(u, p) {
        if (!i.call(u, s)) {
          if (!p)
            return;
          Object.defineProperty(u, s, { value: $.create() });
        }
        return u[s];
      }
      function D(u, p) {
        for (var f = 0; f < p; ++f)
          u[f] = Math.random() * 255 | 0;
        return u;
      }
      function N(u) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : D(p, u), p;
        }
        return D(new Array(u), u);
      }
      function _() {
        var u = N(n);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var p = "", f = 0; f < n; ++f) {
          var g = u[f];
          (f === 4 || f === 6 || f === 8) && (p += "-"), g < 16 && (p += "0"), p += g.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function Ae(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Qe || (Qe = {}));
function Jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Gt(r) {
  return function(e) {
    if (Jt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const i = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Wt(r) {
  return Gt(r);
}
function qt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ke(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, h = this.shadowRoot;
        if (!h) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const $ = new CSSStyleSheet(), v = (x = l.sheet) == null ? void 0 : x.cssRules;
          v && (Array.from(v).forEach((k) => $.insertRule(k.cssText)), h.adoptedStyleSheets = [...h.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          h.appendChild($);
        }
        c.forEach(($) => {
          const v = $.cloneNode(!0);
          h.appendChild(v);
        });
      }
    }
    return t;
  };
}
function Yt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Xt(r) {
  return function(e, t) {
    try {
      Yt(r);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function P(r) {
  return Xt(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(U || (U = {}));
var C;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(C || (C = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe = globalThis, Me = fe.ShadowRoot && (fe.ShadyCSS === void 0 || fe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ke = Symbol(), et = /* @__PURE__ */ new WeakMap();
let ht = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== ke) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Me && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = et.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && et.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Kt = (r) => new ht(typeof r == "string" ? r : r + "", void 0, ke), Zt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, o, l) => i + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ht(t, r, ke);
}, Qt = (r, e) => {
  if (Me) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = fe.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, tt = Me ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Kt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: er, defineProperty: tr, getOwnPropertyDescriptor: rr, getOwnPropertyNames: ir, getOwnPropertySymbols: nr, getPrototypeOf: or } = Object, G = globalThis, rt = G.trustedTypes, ar = rt ? rt.emptyScript : "", Te = G.reactiveElementPolyfillSupport, oe = (r, e) => r, ge = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? ar : null;
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
} }, Re = (r, e) => !er(r, e), it = { attribute: !0, type: String, converter: ge, reflect: !1, useDefault: !1, hasChanged: Re };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), G.litPropertyMetadata ?? (G.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = it) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && tr(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: l } = rr(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: o, set(c) {
      const y = o == null ? void 0 : o.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? it;
  }
  static _$Ei() {
    if (this.hasOwnProperty(oe("elementProperties"))) return;
    const e = or(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(oe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(oe("properties"))) {
      const t = this.properties, i = [...ir(t), ...nr(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(tt(o));
    } else e !== void 0 && t.push(tt(e));
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
    return Qt(e, this.constructor.elementStyles), e;
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
  _$ET(e, t) {
    var l;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const c = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : ge).toAttribute(t, i.type);
      this._$Em = e, c == null ? this.removeAttribute(o) : this.setAttribute(o, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const y = i.getPropertyOptions(o), h = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : ge;
      this._$Em = o;
      const x = h.fromAttribute(t, y.type);
      this[o] = x ?? ((c = this._$Ej) == null ? void 0 : c.get(o)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, o = !1, l) {
    var c;
    if (e !== void 0) {
      const y = this.constructor;
      if (o === !1 && (l = this[e]), i ?? (i = y.getPropertyOptions(e)), !((i.hasChanged ?? Re)(l, t) || i.useDefault && i.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(y._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: l }, c) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, c] of o) {
        const { wrapped: y } = c, h = this[l];
        y !== !0 || this._$AL.has(l) || h === void 0 || this.C(l, void 0, c, h);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[oe("elementProperties")] = /* @__PURE__ */ new Map(), Q[oe("finalized")] = /* @__PURE__ */ new Map(), Te == null || Te({ ReactiveElement: Q }), (G.reactiveElementVersions ?? (G.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, nt = (r) => r, ye = ae.trustedTypes, ot = ye ? ye.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, pt = "$lit$", J = `lit$${Math.random().toFixed(9).slice(2)}$`, ft = "?" + J, sr = `<${ft}>`, X = document, le = () => X.createComment(""), ce = (r) => r === null || typeof r != "object" && typeof r != "function", Ne = Array.isArray, lr = (r) => Ne(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ce = `[ 	
\f\r]`, ne = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, at = /-->/g, st = />/g, W = RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), lt = /'/g, ct = /"/g, gt = /^(?:script|style|textarea|title)$/i, cr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), M = cr(1), ee = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), dt = /* @__PURE__ */ new WeakMap(), q = X.createTreeWalker(X, 129);
function yt(r, e) {
  if (!Ne(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ot !== void 0 ? ot.createHTML(e) : e;
}
const dr = (r, e) => {
  const t = r.length - 1, i = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = ne;
  for (let y = 0; y < t; y++) {
    const h = r[y];
    let x, $, v = -1, k = 0;
    for (; k < h.length && (c.lastIndex = k, $ = c.exec(h), $ !== null); ) k = c.lastIndex, c === ne ? $[1] === "!--" ? c = at : $[1] !== void 0 ? c = st : $[2] !== void 0 ? (gt.test($[2]) && (o = RegExp("</" + $[2], "g")), c = W) : $[3] !== void 0 && (c = W) : c === W ? $[0] === ">" ? (c = o ?? ne, v = -1) : $[1] === void 0 ? v = -2 : (v = c.lastIndex - $[2].length, x = $[1], c = $[3] === void 0 ? W : $[3] === '"' ? ct : lt) : c === ct || c === lt ? c = W : c === at || c === st ? c = ne : (c = W, o = void 0);
    const j = c === W && r[y + 1].startsWith("/>") ? " " : "";
    l += c === ne ? h + sr : v >= 0 ? (i.push(x), h.slice(0, v) + pt + h.slice(v) + J + j) : h + J + (v === -2 ? y : j);
  }
  return [yt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class de {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let l = 0, c = 0;
    const y = e.length - 1, h = this.parts, [x, $] = dr(e, t);
    if (this.el = de.createElement(x, i), q.currentNode = this.el.content, t === 2 || t === 3) {
      const v = this.el.content.firstChild;
      v.replaceWith(...v.childNodes);
    }
    for (; (o = q.nextNode()) !== null && h.length < y; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const v of o.getAttributeNames()) if (v.endsWith(pt)) {
          const k = $[c++], j = o.getAttribute(v).split(J), H = /([.?@])?(.*)/.exec(k);
          h.push({ type: 1, index: l, name: H[2], strings: j, ctor: H[1] === "." ? hr : H[1] === "?" ? pr : H[1] === "@" ? fr : we }), o.removeAttribute(v);
        } else v.startsWith(J) && (h.push({ type: 6, index: l }), o.removeAttribute(v));
        if (gt.test(o.tagName)) {
          const v = o.textContent.split(J), k = v.length - 1;
          if (k > 0) {
            o.textContent = ye ? ye.emptyScript : "";
            for (let j = 0; j < k; j++) o.append(v[j], le()), q.nextNode(), h.push({ type: 2, index: ++l });
            o.append(v[k], le());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ft) h.push({ type: 2, index: l });
      else {
        let v = -1;
        for (; (v = o.data.indexOf(J, v + 1)) !== -1; ) h.push({ type: 7, index: l }), v += J.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = X.createElement("template");
    return i.innerHTML = e, i;
  }
}
function te(r, e, t = r, i) {
  var c, y;
  if (e === ee) return e;
  let o = i !== void 0 ? (c = t._$Co) == null ? void 0 : c[i] : t._$Cl;
  const l = ce(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((y = o == null ? void 0 : o._$AO) == null || y.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = te(r, o._$AS(r, e.values), o, i)), e;
}
class ur {
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? X).importNode(t, !0);
    q.currentNode = o;
    let l = q.nextNode(), c = 0, y = 0, h = i[0];
    for (; h !== void 0; ) {
      if (c === h.index) {
        let x;
        h.type === 2 ? x = new ue(l, l.nextSibling, this, e) : h.type === 1 ? x = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (x = new gr(l, this, e)), this._$AV.push(x), h = i[++y];
      }
      c !== (h == null ? void 0 : h.index) && (l = q.nextNode(), c++);
    }
    return q.currentNode = X, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ue {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = te(this, e, t), ce(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== ee && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : lr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== I && ce(this._$AH) ? this._$AA.nextSibling.data = e : this.T(X.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = de.createElement(yt(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const c = new ur(o, this), y = c.u(this.options);
      c.p(t), this.T(y), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = dt.get(e.strings);
    return t === void 0 && dt.set(e.strings, t = new de(e)), t;
  }
  k(e) {
    Ne(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const l of e) o === t.length ? t.push(i = new ue(this.O(le()), this.O(le()), this, this.options)) : i = t[o], i._$AI(l), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = nt(e).nextSibling;
      nt(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class we {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, l) {
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = I;
  }
  _$AI(e, t = this, i, o) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = te(this, e, t, 0), c = !ce(e) || e !== this._$AH && e !== ee, c && (this._$AH = e);
    else {
      const y = e;
      let h, x;
      for (e = l[0], h = 0; h < l.length - 1; h++) x = te(this, y[i + h], t, h), x === ee && (x = this._$AH[h]), c || (c = !ce(x) || x !== this._$AH[h]), x === I ? e = I : e !== I && (e += (x ?? "") + l[h + 1]), this._$AH[h] = x;
    }
    c && !o && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class hr extends we {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class pr extends we {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class fr extends we {
  constructor(e, t, i, o, l) {
    super(e, t, i, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = te(this, e, t, 0) ?? I) === ee) return;
    const i = this._$AH, o = e === I && i !== I || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== I && (i === I || o);
    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class gr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    te(this, e);
  }
}
const Pe = ae.litHtmlPolyfillSupport;
Pe == null || Pe(de, ue), (ae.litHtmlVersions ?? (ae.litHtmlVersions = [])).push("3.3.3");
const yr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new ue(e.insertBefore(le(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class se extends Q {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = yr(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return ee;
  }
}
var ut;
se._$litElement$ = !0, se.finalized = !0, (ut = Y.litElementHydrateSupport) == null || ut.call(Y, { LitElement: se });
const Oe = Y.litElementPolyfillSupport;
Oe == null || Oe({ LitElement: se });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const br = { attribute: !0, type: String, converter: ge, reflect: !1, hasChanged: Re }, mr = (r = br, e, t) => {
  const { kind: i, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: c } = t;
    return { set(y) {
      const h = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(c, h, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(c, void 0, r, y), y;
    } };
  }
  if (i === "setter") {
    const { name: c } = t;
    return function(y) {
      const h = this[c];
      e.call(this, y), this.requestUpdate(c, h, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function F(r) {
  return (e, t) => typeof t == "object" ? mr(r, e, t) : ((i, o, l) => {
    const c = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, i), c ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function re(r) {
  return F({ ...r, state: !0, attribute: !1 });
}
var vr = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, S = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? _r(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (o = (i ? c(e, t, o) : c(o)) || o);
  return i && o && vr(e, t, o), o;
};
const bt = [
  { key: "name", label: "Name", sortable: !0 },
  { key: "created", label: "Created Date & Time" },
  { key: "status", label: "Status" }
], wr = [
  { name: "Payments API Key", created: "24 Jul 2026, 10:24 AM", status: "Completed" },
  { name: "Analytics Token", created: "22 Jul 2026, 04:10 PM", status: "In Progress" },
  { name: "Staging Sandbox", created: "19 Jul 2026, 09:02 AM", status: "Draft" },
  { name: "Legacy Webhook", created: "12 Jul 2026, 06:45 PM", status: "Failed" }
], $r = ["Draft", "In Progress", "Completed", "Failed"], xr = [{ label: "Edit" }, { label: "Delete", danger: !0 }], be = JSON.stringify(bt, null, 2), me = JSON.stringify(wr, null, 2), ve = JSON.stringify($r), _e = JSON.stringify(xr);
function pe(r, e) {
  if (Array.isArray(r)) return r;
  if (typeof r == "string") {
    const t = r.trim();
    if (!t) return e;
    try {
      const i = JSON.parse(t);
      return Array.isArray(i) ? i : e;
    } catch {
      return e;
    }
  }
  return r && typeof r == "object" ? [r] : e;
}
function Z(r) {
  if (r == null) return "";
  if (typeof r == "object")
    try {
      return JSON.stringify(r);
    } catch {
      return String(r);
    }
  return String(r);
}
function Er(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Sr = {
  completed: { bg: "#e6f7ef", fg: "#12855a" },
  active: { bg: "#e6f7ef", fg: "#12855a" },
  success: { bg: "#e6f7ef", fg: "#12855a" },
  "in progress": { bg: "#e8f0ff", fg: "#2f6bff" },
  processing: { bg: "#e8f0ff", fg: "#2f6bff" },
  pending: { bg: "#fff5e6", fg: "#b5720b" },
  draft: { bg: "#f0f2f5", fg: "#5b6572" },
  failed: { bg: "#fdecec", fg: "#d92d20" },
  error: { bg: "#fdecec", fg: "#d92d20" },
  revoked: { bg: "#fdecec", fg: "#d92d20" },
  inactive: { bg: "#f0f2f5", fg: "#5b6572" }
};
let E = class extends se {
  constructor() {
    super(...arguments), this.columns = be, this.rows = me, this.title = "All Tokens", this.searchable = !0, this.searchPlaceholder = "Search", this.filters = ve, this.showFilters = !0, this.addButtonText = "+ Add", this.showAddButton = !0, this.pageSize = 10, this.showPagination = !0, this.selectable = !1, this.rowActions = _e, this.emptyText = "No records found", this.emptyIcon = "📭", this._query = "", this._activeFilters = [], this._page = 1, this._sortKey = "", this._sortDir = "asc", this._selected = /* @__PURE__ */ new Set();
  }
  static getStudioTemplate(r) {
    var t, i;
    const e = Er(((i = (t = r == null ? void 0 : r.studio) == null ? void 0 : t.display) == null ? void 0 : i.title) || "All Tokens");
    return {
      kind: "generic",
      badges: ["Data Grid"],
      titleProp: "title",
      columnsProp: "columns",
      dataProp: "rows",
      emptyText: "",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:12px;padding:18px 20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;box-sizing:border-box;'>",
        // header row
        "<div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;'>",
        `<strong style='font-size:16px;color:var(--uiv-text-color,#1d2630);'>${e}</strong>`,
        "<span style='background:var(--uiv-primary-color,#4680ff);color:#ffffff;font-size:13px;font-weight:600;padding:8px 14px;border-radius:8px;'>+ Add</span>",
        "</div>",
        // toolbar
        "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;'>",
        "<span style='display:inline-flex;align-items:center;gap:8px;background:#f4f6f9;border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:8px;padding:8px 12px;color:#8996a4;font-size:13px;min-width:180px;'>&#128269; Search</span>",
        "<span style='color:#8996a4;font-size:12px;'>1-4 of 4</span>",
        "</div>",
        // table
        "<table style='width:100%;border-collapse:collapse;font-size:13px;text-align:left;'>",
        "<thead><tr style='border-bottom:1px solid var(--uiv-border-color,#e5e9ef);'>",
        "<th style='padding:10px 12px;color:#8996a4;font-weight:600;'>Name</th>",
        "<th style='padding:10px 12px;color:#8996a4;font-weight:600;'>Created Date &amp; Time</th>",
        "<th style='padding:10px 12px;color:#8996a4;font-weight:600;'>Status</th>",
        "</tr></thead>",
        "<tbody>",
        "<tr style='border-bottom:1px solid #f0f2f5;'>",
        "<td style='padding:12px;color:var(--uiv-text-color,#1d2630);'>Payments API Key</td>",
        "<td style='padding:12px;color:#5b6572;'>24 Jul 2026, 10:24 AM</td>",
        "<td style='padding:12px;'><span style='background:#e6f7ef;color:#12855a;padding:3px 10px;border-radius:12px;font-size:12px;'>Completed</span></td>",
        "</tr>",
        "<tr>",
        "<td style='padding:12px;color:var(--uiv-text-color,#1d2630);'>Analytics Token</td>",
        "<td style='padding:12px;color:#5b6572;'>22 Jul 2026, 04:10 PM</td>",
        "<td style='padding:12px;'><span style='background:#e8f0ff;color:#2f6bff;padding:3px 10px;border-radius:12px;font-size:12px;'>In Progress</span></td>",
        "</tr>",
        "</tbody>",
        "</table>",
        "</div>"
      ].join("")
    };
  }
  // Optional settings schema mirroring zero-stat-card style editors.
  static getSettingsSchema() {
    return [
      { name: "title", label: "Title", control: "text", group: "General", defaultValue: "All Tokens" },
      { name: "columns", label: "Columns (JSON)", control: "json", group: "Data", defaultValue: be },
      { name: "rows", label: "Rows (JSON)", control: "json", group: "Data", defaultValue: me },
      { name: "searchable", label: "Show Search", control: "boolean", group: "Toolbar", defaultValue: !0 },
      { name: "filters", label: "Filter Chips (JSON)", control: "json", group: "Toolbar", defaultValue: ve },
      { name: "showFilters", label: "Show Filter Chips", control: "boolean", group: "Toolbar", defaultValue: !0 },
      { name: "pageSize", label: "Rows Per Page", control: "number", group: "Pagination", defaultValue: 10 },
      { name: "selectable", label: "Selectable Rows", control: "boolean", group: "Rows", defaultValue: !1 },
      { name: "rowActions", label: "Row Actions (JSON)", control: "json", group: "Rows", defaultValue: _e },
      { name: "addButtonText", label: "Add Button Text", control: "text", group: "Toolbar", defaultValue: "+ Add" }
    ];
  }
  emitAdd() {
    this.dispatchEvent(new CustomEvent("add", { bubbles: !0, composed: !0 }));
  }
  emitRowAction(r, e) {
    this.dispatchEvent(new CustomEvent("rowaction", { detail: { action: r, row: e }, bubbles: !0, composed: !0 }));
  }
  emitRowClick(r) {
    this.dispatchEvent(new CustomEvent("rowclick", { detail: { row: r }, bubbles: !0, composed: !0 }));
  }
  emitSelectionChange() {
    this.dispatchEvent(new CustomEvent("selectionchange", { detail: { rows: [...this._selected] }, bubbles: !0, composed: !0 }));
  }
  emitSearch(r) {
    this.dispatchEvent(new CustomEvent("search", { detail: { query: r }, bubbles: !0, composed: !0 }));
  }
  emitFilterChange() {
    this.dispatchEvent(new CustomEvent("filterchange", { detail: { filters: [...this._activeFilters] }, bubbles: !0, composed: !0 }));
  }
  emitSortChange(r, e) {
    this.dispatchEvent(new CustomEvent("sortchange", { detail: { key: r, dir: e }, bubbles: !0, composed: !0 }));
  }
  emitPageChange(r) {
    this.dispatchEvent(new CustomEvent("pagechange", { detail: { page: r }, bubbles: !0, composed: !0 }));
  }
  // ─── Derived data ────────────────────────────────────────────────────────────
  getColumns() {
    return pe(this.columns, bt).filter((r) => r && typeof r.key == "string");
  }
  getAllRows() {
    return pe(this.rows, []);
  }
  getFilterLabels() {
    return pe(this.filters, []).map((r) => String(r));
  }
  getRowActions() {
    return pe(this.rowActions, []).filter((r) => r && typeof r.label == "string");
  }
  matchesSearch(r, e) {
    const t = this._query.trim().toLowerCase();
    return t ? e.some((i) => Z(r[i.key]).toLowerCase().includes(t)) : !0;
  }
  matchesFilters(r) {
    if (!this._activeFilters.length) return !0;
    const e = this._activeFilters.map((t) => t.toLowerCase());
    return Object.keys(r).some((t) => e.includes(Z(r[t]).toLowerCase()));
  }
  getFilteredRows() {
    const r = this.getColumns();
    let e = this.getAllRows().filter((t) => this.matchesSearch(t, r) && this.matchesFilters(t));
    if (this._sortKey) {
      const t = this._sortDir === "desc" ? -1 : 1;
      e = [...e].sort((i, o) => {
        const l = i[this._sortKey], c = o[this._sortKey], y = typeof l == "number" ? l : parseFloat(l), h = typeof c == "number" ? c : parseFloat(c);
        return !Number.isNaN(y) && !Number.isNaN(h) && String(l).trim() !== "" && String(c).trim() !== "" ? (y - h) * t : Z(l).localeCompare(Z(c)) * t;
      });
    }
    return e;
  }
  getPageSize() {
    const r = Number(this.pageSize);
    return Number.isFinite(r) && r > 0 ? Math.floor(r) : 10;
  }
  // ─── Handlers ────────────────────────────────────────────────────────────────
  onSearchInput(r) {
    this._query = r.target.value, this._page = 1, this.emitSearch(this._query);
  }
  toggleFilter(r) {
    const e = this._activeFilters.indexOf(r);
    this._activeFilters = e >= 0 ? this._activeFilters.filter((t) => t !== r) : [...this._activeFilters, r], this._page = 1, this.emitFilterChange();
  }
  toggleSort(r) {
    r.sortable && (this._sortKey === r.key ? this._sortDir = this._sortDir === "asc" ? "desc" : "asc" : (this._sortKey = r.key, this._sortDir = "asc"), this.emitSortChange(this._sortKey, this._sortDir));
  }
  goToPage(r, e) {
    const t = Math.min(Math.max(1, r), Math.max(1, e));
    t !== this._page && (this._page = t, this.emitPageChange(this._page));
  }
  toggleRowSelection(r, e) {
    e ? this._selected.add(r) : this._selected.delete(r), this._selected = new Set(this._selected), this.emitSelectionChange();
  }
  toggleSelectAll(r, e) {
    const t = new Set(this._selected);
    e ? r.forEach((i) => t.add(i)) : r.forEach((i) => t.delete(i)), this._selected = t, this.emitSelectionChange();
  }
  onRowClick(r, e) {
    e.composedPath().some((i) => i instanceof HTMLElement && (i.tagName === "BUTTON" || i.tagName === "INPUT")) || this.emitRowClick(r);
  }
  onActionClick(r, e, t) {
    t.stopPropagation(), this.emitRowAction(r, e);
  }
  onAddClick() {
    this.emitAdd();
  }
  // ─── Cell rendering ──────────────────────────────────────────────────────────
  renderCell(r, e) {
    const t = r[e.key];
    if (t == null || t === "") return M`<span class="cell-muted">-</span>`;
    if (e.key === "status") {
      const i = Sr[String(t).toLowerCase()], o = i ? `background:${i.bg};color:${i.fg};` : "";
      return M`<span class="status-pill" style=${o}>${Z(t)}</span>`;
    }
    return M`${Z(t)}`;
  }
  // ─── Render ──────────────────────────────────────────────────────────────────
  render() {
    const r = this.getColumns(), e = this.getRowActions(), t = this.getFilteredRows(), i = t.length, o = this.getPageSize(), l = this.showPagination ? Math.max(1, Math.ceil(i / o)) : 1, c = Math.min(this._page, l), y = i === 0 ? 0 : (c - 1) * o, h = this.showPagination ? t.slice(y, y + o) : t, x = i === 0 ? 0 : y + 1, $ = i === 0 ? 0 : y + h.length, v = this.getFilterLabels(), k = this.showFilters && v.length > 0, j = r.length + (this.selectable ? 1 : 0) + (e.length ? 1 : 0), H = h.length > 0 && h.every((A) => this._selected.has(A));
    return M`
      <div class="grid">
        <div class="grid-head">
          <h3 class="grid-title">${this.title}</h3>
          ${this.showAddButton ? M`<button class="add-btn" type="button" @click=${this.onAddClick}>${this.addButtonText}</button>` : ""}
        </div>

        <div class="toolbar">
          <div class="toolbar-left">
            ${this.searchable ? M`
                  <label class="search">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"></circle>
                      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                    </svg>
                    <input
                      type="text"
                      .value=${this._query}
                      placeholder=${this.searchPlaceholder}
                      @input=${this.onSearchInput}
                    />
                  </label>
                ` : ""}
            ${k ? M`<div class="chips">
                  ${v.map(
      (A) => M`<button
                      type="button"
                      class="chip ${this._activeFilters.includes(A) ? "active" : ""}"
                      @click=${() => this.toggleFilter(A)}
                    >${A}</button>`
    )}
                </div>` : ""}
          </div>

          ${this.showPagination ? M`<div class="toolbar-right">
                <span class="page-size">Show by ${o} Rows</span>
                <div class="pager">
                  <span class="range">${x}-${$} of ${i}</span>
                  <button
                    class="pg-btn"
                    type="button"
                    ?disabled=${c <= 1}
                    @click=${() => this.goToPage(c - 1, l)}
                    aria-label="Previous page"
                  >‹</button>
                  <button
                    class="pg-btn"
                    type="button"
                    ?disabled=${c >= l}
                    @click=${() => this.goToPage(c + 1, l)}
                    aria-label="Next page"
                  >›</button>
                </div>
              </div>` : ""}
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${this.selectable ? M`<th class="checkbox-cell">
                      <input
                        type="checkbox"
                        .checked=${H}
                        @change=${(A) => this.toggleSelectAll(h, A.target.checked)}
                        aria-label="Select all rows"
                      />
                    </th>` : ""}
                ${r.map((A) => {
      const L = this._sortKey === A.key, B = A.sortable ? L ? this._sortDir === "asc" ? "▲" : "▼" : "⇅" : "", $e = A.align ? `text-align:${A.align};` : "";
      return M`<th
                    class=${A.sortable ? "sortable" : ""}
                    style=${$e}
                    @click=${() => this.toggleSort(A)}
                  >${A.label ?? A.key}${B ? M`<span class="sort-ind">${B}</span>` : ""}</th>`;
    })}
                ${e.length ? M`<th class="actions-cell">Actions</th>` : ""}
              </tr>
            </thead>
            <tbody>
              ${h.length === 0 ? M`<tr>
                    <td colspan=${j}>
                      <div class="empty">
                        ${this.emptyIcon ? M`<div class="empty-icon">${this.emptyIcon}</div>` : ""}
                        <div class="empty-text">${this.emptyText}</div>
                      </div>
                    </td>
                  </tr>` : h.map(
      (A) => M`<tr class="clickable" @click=${(L) => this.onRowClick(A, L)}>
                      ${this.selectable ? M`<td class="checkbox-cell">
                            <input
                              type="checkbox"
                              .checked=${this._selected.has(A)}
                              @change=${(L) => this.toggleRowSelection(A, L.target.checked)}
                              aria-label="Select row"
                            />
                          </td>` : ""}
                      ${r.map((L) => {
        const B = L.align ? `text-align:${L.align};` : "";
        return M`<td style=${B}>${this.renderCell(A, L)}</td>`;
      })}
                      ${e.length ? M`<td class="actions-cell">
                            ${e.map(
        (L) => M`<button
                                type="button"
                                class="row-action ${L.danger ? "danger" : ""}"
                                @click=${(B) => this.onActionClick(L, A, B)}
                              >${L.label}</button>`
      )}
                          </td>` : ""}
                    </tr>`
    )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
};
E.styles = Zt`
    :host {
      display: block;
      width: 100%;
      --dg-bg: var(--uiv-surface-color, #ffffff);
      --dg-text: var(--uiv-text-color, #1d2630);
      --dg-muted: var(--uiv-text-color-secondary, #8996a4);
      --dg-border: var(--uiv-border-color, #e5e9ef);
      --dg-primary: var(--uiv-primary-color, #4680ff);
      --dg-row-border: #f0f2f5;
      --dg-field-bg: #f4f6f9;
      --dg-danger: #d92d20;
      font-family: inherit;
      color: var(--dg-text);
      box-sizing: border-box;
    }
    * { box-sizing: border-box; }

    .grid {
      background: var(--dg-bg);
      border: 1px solid var(--dg-border);
      border-radius: 12px;
      padding: 18px 20px;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
    }

    .grid-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }
    .grid-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--dg-text);
      margin: 0;
    }

    .add-btn {
      border: 0;
      background: var(--dg-primary);
      color: #ffffff;
      font: inherit;
      font-weight: 600;
      font-size: 13px;
      padding: 9px 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: filter 0.15s ease, transform 0.15s ease;
      white-space: nowrap;
    }
    .add-btn:hover { filter: brightness(1.06); transform: translateY(-1px); }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }
    .toolbar-left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      min-width: 0;
    }
    .toolbar-right {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
      color: var(--dg-muted);
      font-size: 12px;
    }

    .search {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--dg-field-bg);
      border: 1px solid var(--dg-border);
      border-radius: 8px;
      padding: 0 12px;
      height: 38px;
      min-width: 200px;
    }
    .search svg { flex: 0 0 auto; color: var(--dg-muted); }
    .search input {
      border: 0;
      outline: 0;
      background: transparent;
      font: inherit;
      font-size: 13px;
      color: var(--dg-text);
      width: 100%;
      padding: 0;
    }
    .search input::placeholder { color: var(--dg-muted); }

    .chips { display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .chip {
      border: 1px solid var(--dg-border);
      background: var(--dg-bg);
      color: var(--dg-muted);
      font: inherit;
      font-size: 12px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
    }
    .chip:hover { border-color: var(--dg-primary); color: var(--dg-primary); }
    .chip.active {
      background: var(--dg-primary);
      border-color: var(--dg-primary);
      color: #ffffff;
    }

    .page-size {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .pager { display: inline-flex; align-items: center; gap: 8px; }
    .pager .range { white-space: nowrap; }
    .pg-btn {
      border: 1px solid var(--dg-border);
      background: var(--dg-bg);
      color: var(--dg-text);
      width: 28px;
      height: 28px;
      border-radius: 7px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      line-height: 1;
      transition: all 0.15s ease;
    }
    .pg-btn:hover:not(:disabled) { border-color: var(--dg-primary); color: var(--dg-primary); }
    .pg-btn:disabled { opacity: 0.4; cursor: not-allowed; }

    .table-wrap { width: 100%; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }

    thead th {
      color: var(--dg-muted);
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.01em;
      text-transform: none;
      padding: 10px 12px;
      border-bottom: 1px solid var(--dg-border);
      white-space: nowrap;
      user-select: none;
    }
    th.sortable { cursor: pointer; }
    th.sortable:hover { color: var(--dg-text); }
    .sort-ind { font-size: 10px; margin-left: 4px; opacity: 0.85; }

    tbody td {
      padding: 12px;
      border-bottom: 1px solid var(--dg-row-border);
      color: var(--dg-text);
      vertical-align: middle;
    }
    tbody tr { transition: background 0.12s ease; }
    tbody tr.clickable { cursor: pointer; }
    tbody tr.clickable:hover { background: rgba(70, 128, 255, 0.04); }
    tbody tr:last-child td { border-bottom: 0; }

    .cell-muted { color: #5b6572; }

    .checkbox-cell { width: 40px; text-align: center; }
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: var(--dg-primary);
      cursor: pointer;
      margin: 0;
      vertical-align: middle;
    }

    .status-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      background: #f0f2f5;
      color: #5b6572;
      white-space: nowrap;
    }

    .actions-cell { white-space: nowrap; text-align: right; }
    .row-action {
      border: 0;
      background: transparent;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      color: var(--dg-primary);
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      transition: background 0.15s ease;
    }
    .row-action:hover { background: rgba(70, 128, 255, 0.08); }
    .row-action.danger { color: var(--dg-danger); }
    .row-action.danger:hover { background: rgba(217, 45, 32, 0.08); }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 48px 16px;
      text-align: center;
      color: var(--dg-muted);
    }
    .empty-icon { font-size: 40px; line-height: 1; }
    .empty-text { font-size: 14px; }
  `;
S([
  F({ attribute: "columns" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Columns (JSON)",
    fieldMappings: "columns",
    categoryLabel: "Data",
    placeholderText: be,
    initialValue: be
  })
], E.prototype, "columns", 2);
S([
  F({ attribute: "rows" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Rows (JSON Data)",
    fieldMappings: "rows",
    categoryLabel: "Data",
    placeholderText: me,
    initialValue: me
  })
], E.prototype, "rows", 2);
S([
  F({ type: String, attribute: "title" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    categoryLabel: "General",
    initialValue: "All Tokens"
  })
], E.prototype, "title", 2);
S([
  F({ type: Boolean, attribute: "searchable" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Search",
    fieldMappings: "searchable",
    categoryLabel: "Toolbar",
    initialValue: !0
  })
], E.prototype, "searchable", 2);
S([
  F({ type: String, attribute: "search-placeholder" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Search Placeholder",
    fieldMappings: "searchPlaceholder",
    categoryLabel: "Toolbar",
    initialValue: "Search"
  })
], E.prototype, "searchPlaceholder", 2);
S([
  F({ attribute: "filters" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Filter Chips (JSON)",
    fieldMappings: "filters",
    categoryLabel: "Toolbar",
    placeholderText: ve,
    initialValue: ve
  })
], E.prototype, "filters", 2);
S([
  F({ type: Boolean, attribute: "show-filters" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Filter Chips",
    fieldMappings: "showFilters",
    categoryLabel: "Toolbar",
    initialValue: !0
  })
], E.prototype, "showFilters", 2);
S([
  F({ type: String, attribute: "add-button-text" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Add Button Text",
    fieldMappings: "addButtonText",
    categoryLabel: "Toolbar",
    initialValue: "+ Add"
  })
], E.prototype, "addButtonText", 2);
S([
  F({ type: Boolean, attribute: "show-add-button" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Add Button",
    fieldMappings: "showAddButton",
    categoryLabel: "Toolbar",
    initialValue: !0
  })
], E.prototype, "showAddButton", 2);
S([
  F({ type: Number, attribute: "page-size" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.NUMBER_INPUT,
    displayLabel: "Rows Per Page",
    fieldMappings: "pageSize",
    categoryLabel: "Pagination",
    initialValue: 10
  })
], E.prototype, "pageSize", 2);
S([
  F({ type: Boolean, attribute: "show-pagination" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Pagination",
    fieldMappings: "showPagination",
    categoryLabel: "Pagination",
    initialValue: !0
  })
], E.prototype, "showPagination", 2);
S([
  F({ type: Boolean, attribute: "selectable" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Selectable Rows (checkbox column)",
    fieldMappings: "selectable",
    categoryLabel: "Rows",
    initialValue: !1
  })
], E.prototype, "selectable", 2);
S([
  F({ attribute: "row-actions" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Row Actions (JSON)",
    fieldMappings: "rowActions",
    categoryLabel: "Rows",
    placeholderText: _e,
    initialValue: _e
  })
], E.prototype, "rowActions", 2);
S([
  F({ type: String, attribute: "empty-text" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Empty State Text",
    fieldMappings: "emptyText",
    categoryLabel: "Empty State",
    initialValue: "No records found"
  })
], E.prototype, "emptyText", 2);
S([
  F({ type: String, attribute: "empty-icon" }),
  P({
    attributeType: C.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Empty State Icon (emoji)",
    fieldMappings: "emptyIcon",
    categoryLabel: "Empty State",
    initialValue: "📭"
  })
], E.prototype, "emptyIcon", 2);
S([
  re()
], E.prototype, "_query", 2);
S([
  re()
], E.prototype, "_activeFilters", 2);
S([
  re()
], E.prototype, "_page", 2);
S([
  re()
], E.prototype, "_sortKey", 2);
S([
  re()
], E.prototype, "_sortDir", 2);
S([
  re()
], E.prototype, "_selected", 2);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Add", eventTrigger: "add" })
], E.prototype, "emitAdd", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Row Action", eventTrigger: "rowaction" })
], E.prototype, "emitRowAction", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Row Click", eventTrigger: "rowclick" })
], E.prototype, "emitRowClick", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Selection Change", eventTrigger: "selectionchange" })
], E.prototype, "emitSelectionChange", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Search", eventTrigger: "search" })
], E.prototype, "emitSearch", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Filter Change", eventTrigger: "filterchange" })
], E.prototype, "emitFilterChange", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Sort Change", eventTrigger: "sortchange" })
], E.prototype, "emitSortChange", 1);
S([
  P({ attributeType: C.EVENT, displayLabel: "On Page Change", eventTrigger: "pagechange" })
], E.prototype, "emitPageChange", 1);
E = S([
  Wt({
    name: "zero-data-grid",
    version: "1.0.0",
    title: "Data Grid",
    elementSelector: "zero-data-grid",
    group: "Data Display",
    iconName: "data-grid-icon.png",
    layoutKind: "leaf"
  }),
  qt()
], E);
export {
  E as ZeroDataGrid
};
