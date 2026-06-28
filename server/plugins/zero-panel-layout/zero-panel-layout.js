var Wt = Object.defineProperty;
var Xt = (r, e, t) => e in r ? Wt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var nt = (r, e, t) => Xt(r, typeof e != "symbol" ? e + "" : e, t);
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var at;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof ot == "object" ? ot : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = n(r);
    typeof t.Reflect < "u" && (i = n(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function n(c, P) {
      return function(E, $) {
        Object.defineProperty(c, E, { configurable: !0, writable: !0, value: $ }), P && P(E, $);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function p() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function y() {
      return l() || p();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", l = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", p = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, P = !y && !c, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return ze(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return ze({ __proto__: null });
      } : function() {
        return ze({});
      },
      has: P ? function(o, a) {
        return i.call(o, a);
      } : function(o, a) {
        return a in o;
      },
      get: P ? function(o, a) {
        return i.call(o, a) ? o[a] : void 0;
      } : function(o, a) {
        return o[a];
      }
    }, $ = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), M = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Bt(), B = typeof WeakMap == "function" ? WeakMap : Vt(), Y = n ? Symbol.for("@reflect-metadata:registry") : void 0, G = Nt(), W = Ht(G);
    function Q(o, a, s, d) {
      if (x(s)) {
        if (!Ze(o))
          throw new TypeError();
        if (!Ke(a))
          throw new TypeError();
        return St(o, a);
      } else {
        if (!Ze(o))
          throw new TypeError();
        if (!N(a))
          throw new TypeError();
        if (!N(d) && !x(d) && !ae(d))
          throw new TypeError();
        return ae(d) && (d = void 0), s = q(s), zt(o, a, s, d);
      }
    }
    e("decorate", Q);
    function ne(o, a) {
      function s(d, g) {
        if (!N(d))
          throw new TypeError();
        if (!x(g) && !Lt(g))
          throw new TypeError();
        Ge(o, a, d, g);
      }
      return s;
    }
    e("metadata", ne);
    function oe(o, a, s, d) {
      if (!N(s))
        throw new TypeError();
      return x(d) || (d = q(d)), Ge(o, a, s, d);
    }
    e("defineMetadata", oe);
    function Te(o, a, s) {
      if (!N(a))
        throw new TypeError();
      return x(s) || (s = q(s)), Be(o, a, s);
    }
    e("hasMetadata", Te);
    function Ce(o, a, s) {
      if (!N(a))
        throw new TypeError();
      return x(s) || (s = q(s)), Re(o, a, s);
    }
    e("hasOwnMetadata", Ce);
    function me(o, a, s) {
      if (!N(a))
        throw new TypeError();
      return x(s) || (s = q(s)), Ve(o, a, s);
    }
    e("getMetadata", me);
    function Tt(o, a, s) {
      if (!N(a))
        throw new TypeError();
      return x(s) || (s = q(s)), Ye(o, a, s);
    }
    e("getOwnMetadata", Tt);
    function Ct(o, a) {
      if (!N(o))
        throw new TypeError();
      return x(a) || (a = q(a)), We(o, a);
    }
    e("getMetadataKeys", Ct);
    function Rt(o, a) {
      if (!N(o))
        throw new TypeError();
      return x(a) || (a = q(a)), Xe(o, a);
    }
    e("getOwnMetadataKeys", Rt);
    function Ot(o, a, s) {
      if (!N(a))
        throw new TypeError();
      if (x(s) || (s = q(s)), !N(a))
        throw new TypeError();
      x(s) || (s = q(s));
      var d = ue(
        a,
        s,
        /*Create*/
        !1
      );
      return x(d) ? !1 : d.OrdinaryDeleteMetadata(o, a, s);
    }
    e("deleteMetadata", Ot);
    function St(o, a) {
      for (var s = o.length - 1; s >= 0; --s) {
        var d = o[s], g = d(a);
        if (!x(g) && !ae(g)) {
          if (!Ke(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function zt(o, a, s, d) {
      for (var g = o.length - 1; g >= 0; --g) {
        var D = o[g], H = D(a, s, d);
        if (!x(H) && !ae(H)) {
          if (!N(H))
            throw new TypeError();
          d = H;
        }
      }
      return d;
    }
    function Be(o, a, s) {
      var d = Re(o, a, s);
      if (d)
        return !0;
      var g = Se(a);
      return ae(g) ? !1 : Be(o, g, s);
    }
    function Re(o, a, s) {
      var d = ue(
        a,
        s,
        /*Create*/
        !1
      );
      return x(d) ? !1 : qe(d.OrdinaryHasOwnMetadata(o, a, s));
    }
    function Ve(o, a, s) {
      var d = Re(o, a, s);
      if (d)
        return Ye(o, a, s);
      var g = Se(a);
      if (!ae(g))
        return Ve(o, g, s);
    }
    function Ye(o, a, s) {
      var d = ue(
        a,
        s,
        /*Create*/
        !1
      );
      if (!x(d))
        return d.OrdinaryGetOwnMetadata(o, a, s);
    }
    function Ge(o, a, s, d) {
      var g = ue(
        s,
        d,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(o, a, s, d);
    }
    function We(o, a) {
      var s = Xe(o, a), d = Se(o);
      if (d === null)
        return s;
      var g = We(d, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var D = new M(), H = [], T = 0, u = s; T < u.length; T++) {
        var h = u[T], f = D.has(h);
        f || (D.add(h), H.push(h));
      }
      for (var b = 0, C = g; b < C.length; b++) {
        var h = C[b], f = D.has(h);
        f || (D.add(h), H.push(h));
      }
      return H;
    }
    function Xe(o, a) {
      var s = ue(
        o,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(o, a) : [];
    }
    function Fe(o) {
      if (o === null)
        return 1;
      switch (typeof o) {
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
          return o === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function x(o) {
      return o === void 0;
    }
    function ae(o) {
      return o === null;
    }
    function At(o) {
      return typeof o == "symbol";
    }
    function N(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function Mt(o, a) {
      switch (Fe(o)) {
        case 0:
          return o;
        case 1:
          return o;
        case 2:
          return o;
        case 3:
          return o;
        case 4:
          return o;
        case 5:
          return o;
      }
      var s = "string", d = Je(o, l);
      if (d !== void 0) {
        var g = d.call(o, s);
        if (N(g))
          throw new TypeError();
        return g;
      }
      return kt(o);
    }
    function kt(o, a) {
      var s, d;
      {
        var g = o.toString;
        if (we(g)) {
          var d = g.call(o);
          if (!N(d))
            return d;
        }
        var s = o.valueOf;
        if (we(s)) {
          var d = s.call(o);
          if (!N(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function qe(o) {
      return !!o;
    }
    function It(o) {
      return "" + o;
    }
    function q(o) {
      var a = Mt(o);
      return At(a) ? a : It(a);
    }
    function Ze(o) {
      return Array.isArray ? Array.isArray(o) : o instanceof Object ? o instanceof Array : Object.prototype.toString.call(o) === "[object Array]";
    }
    function we(o) {
      return typeof o == "function";
    }
    function Ke(o) {
      return typeof o == "function";
    }
    function Lt(o) {
      switch (Fe(o)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Oe(o, a) {
      return o === a || o !== o && a !== a;
    }
    function Je(o, a) {
      var s = o[a];
      if (s != null) {
        if (!we(s))
          throw new TypeError();
        return s;
      }
    }
    function Qe(o) {
      var a = Je(o, p);
      if (!we(a))
        throw new TypeError();
      var s = a.call(o);
      if (!N(s))
        throw new TypeError();
      return s;
    }
    function et(o) {
      return o.value;
    }
    function tt(o) {
      var a = o.next();
      return a.done ? !1 : a;
    }
    function rt(o) {
      var a = o.return;
      a && a.call(o);
    }
    function Se(o) {
      var a = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === $ || a !== $)
        return a;
      var s = o.prototype, d = s && Object.getPrototypeOf(s);
      if (d == null || d === Object.prototype)
        return a;
      var g = d.constructor;
      return typeof g != "function" || g === o ? a : g;
    }
    function jt() {
      var o;
      !x(Y) && typeof t.Reflect < "u" && !(Y in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (o = Dt(t.Reflect));
      var a, s, d, g = new B(), D = {
        registerProvider: H,
        getProvider: u,
        setProvider: f
      };
      return D;
      function H(b) {
        if (!Object.isExtensible(D))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case o === b:
            break;
          case x(a):
            a = b;
            break;
          case a === b:
            break;
          case x(s):
            s = b;
            break;
          case s === b:
            break;
          default:
            d === void 0 && (d = new M()), d.add(b);
            break;
        }
      }
      function T(b, C) {
        if (!x(a)) {
          if (a.isProviderFor(b, C))
            return a;
          if (!x(s)) {
            if (s.isProviderFor(b, C))
              return a;
            if (!x(d))
              for (var O = Qe(d); ; ) {
                var k = tt(O);
                if (!k)
                  return;
                var F = et(k);
                if (F.isProviderFor(b, C))
                  return rt(O), F;
              }
          }
        }
        if (!x(o) && o.isProviderFor(b, C))
          return o;
      }
      function u(b, C) {
        var O = g.get(b), k;
        return x(O) || (k = O.get(C)), x(k) && (k = T(b, C), x(k) || (x(O) && (O = new R(), g.set(b, O)), O.set(C, k))), k;
      }
      function h(b) {
        if (x(b))
          throw new TypeError();
        return a === b || s === b || !x(d) && d.has(b);
      }
      function f(b, C, O) {
        if (!h(O))
          throw new Error("Metadata provider not registered.");
        var k = u(b, C);
        if (k !== O) {
          if (!x(k))
            return !1;
          var F = g.get(b);
          x(F) && (F = new R(), g.set(b, F)), F.set(C, O);
        }
        return !0;
      }
    }
    function Nt() {
      var o;
      return !x(Y) && N(t.Reflect) && Object.isExtensible(t.Reflect) && (o = t.Reflect[Y]), x(o) && (o = jt()), !x(Y) && N(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: o
      }), o;
    }
    function Ht(o) {
      var a = new B(), s = {
        isProviderFor: function(h, f) {
          var b = a.get(h);
          return x(b) ? !1 : b.has(f);
        },
        OrdinaryDefineOwnMetadata: H,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: D,
        OrdinaryOwnMetadataKeys: T,
        OrdinaryDeleteMetadata: u
      };
      return G.registerProvider(s), s;
      function d(h, f, b) {
        var C = a.get(h), O = !1;
        if (x(C)) {
          if (!b)
            return;
          C = new R(), a.set(h, C), O = !0;
        }
        var k = C.get(f);
        if (x(k)) {
          if (!b)
            return;
          if (k = new R(), C.set(f, k), !o.setProvider(h, f, s))
            throw C.delete(f), O && a.delete(h), new Error("Wrong provider for target.");
        }
        return k;
      }
      function g(h, f, b) {
        var C = d(
          f,
          b,
          /*Create*/
          !1
        );
        return x(C) ? !1 : qe(C.has(h));
      }
      function D(h, f, b) {
        var C = d(
          f,
          b,
          /*Create*/
          !1
        );
        if (!x(C))
          return C.get(h);
      }
      function H(h, f, b, C) {
        var O = d(
          b,
          C,
          /*Create*/
          !0
        );
        O.set(h, f);
      }
      function T(h, f) {
        var b = [], C = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (x(C))
          return b;
        for (var O = C.keys(), k = Qe(O), F = 0; ; ) {
          var it = tt(k);
          if (!it)
            return b.length = F, b;
          var Yt = et(it);
          try {
            b[F] = Yt;
          } catch (Gt) {
            try {
              rt(k);
            } finally {
              throw Gt;
            }
          }
          F++;
        }
      }
      function u(h, f, b) {
        var C = d(
          f,
          b,
          /*Create*/
          !1
        );
        if (x(C) || !C.delete(h))
          return !1;
        if (C.size === 0) {
          var O = a.get(f);
          x(O) || (O.delete(b), O.size === 0 && a.delete(O));
        }
        return !0;
      }
    }
    function Dt(o) {
      var a = o.defineMetadata, s = o.hasOwnMetadata, d = o.getOwnMetadata, g = o.getOwnMetadataKeys, D = o.deleteMetadata, H = new B(), T = {
        isProviderFor: function(u, h) {
          var f = H.get(u);
          return !x(f) && f.has(h) ? !0 : g(u, h).length ? (x(f) && (f = new M(), H.set(u, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: D
      };
      return T;
    }
    function ue(o, a, s) {
      var d = G.getProvider(o, a);
      if (!x(d))
        return d;
      if (s) {
        if (G.setProvider(o, a, W))
          return W;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var o = {}, a = [], s = (
        /** @class */
        function() {
          function T(u, h, f) {
            this._index = 0, this._keys = u, this._values = h, this._selector = f;
          }
          return T.prototype["@@iterator"] = function() {
            return this;
          }, T.prototype[p] = function() {
            return this;
          }, T.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var h = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, T.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), u;
          }, T.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: u, done: !0 };
          }, T;
        }()
      ), d = (
        /** @class */
        function() {
          function T() {
            this._keys = [], this._values = [], this._cacheKey = o, this._cacheIndex = -2;
          }
          return Object.defineProperty(T.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), T.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, T.prototype.get = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, T.prototype.set = function(u, h) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, T.prototype.delete = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, b = h + 1; b < f; b++)
                this._keys[b - 1] = this._keys[b], this._values[b - 1] = this._values[b];
              return this._keys.length--, this._values.length--, Oe(u, this._cacheKey) && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, T.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, T.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, T.prototype.values = function() {
            return new s(this._keys, this._values, D);
          }, T.prototype.entries = function() {
            return new s(this._keys, this._values, H);
          }, T.prototype["@@iterator"] = function() {
            return this.entries();
          }, T.prototype[p] = function() {
            return this.entries();
          }, T.prototype._find = function(u, h) {
            if (!Oe(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Oe(this._keys[f], u)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, T;
        }()
      );
      return d;
      function g(T, u) {
        return T;
      }
      function D(T, u) {
        return u;
      }
      function H(T, u) {
        return [T, u];
      }
    }
    function Bt() {
      var o = (
        /** @class */
        function() {
          function a() {
            this._map = new R();
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
          }, a.prototype[p] = function() {
            return this.keys();
          }, a;
        }()
      );
      return o;
    }
    function Vt() {
      var o = 16, a = E.create(), s = d();
      return (
        /** @class */
        function() {
          function u() {
            this._key = d();
          }
          return u.prototype.has = function(h) {
            var f = g(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, u.prototype.get = function(h) {
            var f = g(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, u.prototype.set = function(h, f) {
            var b = g(
              h,
              /*create*/
              !0
            );
            return b[this._key] = f, this;
          }, u.prototype.delete = function(h) {
            var f = g(
              h,
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
          u = "@@WeakMap@@" + T();
        while (E.has(a, u));
        return a[u] = !0, u;
      }
      function g(u, h) {
        if (!i.call(u, s)) {
          if (!h)
            return;
          Object.defineProperty(u, s, { value: E.create() });
        }
        return u[s];
      }
      function D(u, h) {
        for (var f = 0; f < h; ++f)
          u[f] = Math.random() * 255 | 0;
        return u;
      }
      function H(u) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : D(h, u), h;
        }
        return D(new Array(u), u);
      }
      function T() {
        var u = H(o);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var h = "", f = 0; f < o; ++f) {
          var b = u[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), b < 16 && (h += "0"), h += b.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ze(o) {
      return o.__ = void 0, delete o.__, o;
    }
  });
})(at || (at = {}));
function Ft(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function qt(r) {
  return function(e) {
    if (Ft(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
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
function Le(r) {
  return qt(r);
}
function Zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        nt(this, "_stylesApplied", !1);
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
        var P;
        const l = document.querySelector('style.global-style[type="text/css"]'), p = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, c = this.shadowRoot;
        if (!c) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const E = new CSSStyleSheet(), $ = (P = l.sheet) == null ? void 0 : P.cssRules;
          $ && (Array.from($).forEach((R) => E.insertRule(R.cssText)), c.adoptedStyleSheets = [...c.adoptedStyleSheets, E]);
        } else if (l) {
          const E = l.cloneNode(!0);
          c.appendChild(E);
        }
        p.forEach((E) => {
          const $ = E.cloneNode(!0);
          c.appendChild($);
        });
      }
    }
    return t;
  };
}
function Kt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Jt(r) {
  return function(e, t) {
    try {
      Kt(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      let n = !0;
      if (typeof t == "string") {
        try {
          n = typeof e[t] != "function";
        } catch {
          n = !0;
        }
        n && (r.fieldMappings = r.fieldMappings ?? t);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function m(r) {
  return Jt(r);
}
var _;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(_ || (_ = {}));
var v;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(v || (v = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e = globalThis, je = $e.ShadowRoot && ($e.ShadyCSS === void 0 || $e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ne = Symbol(), st = /* @__PURE__ */ new WeakMap();
let wt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Ne) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (je && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = st.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && st.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Qt = (r) => new wt(typeof r == "string" ? r : r + "", void 0, Ne), $t = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, n, l) => i + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + r[l + 1], r[0]);
  return new wt(t, r, Ne);
}, er = (r, e) => {
  if (je) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), n = $e.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = t.cssText, r.appendChild(i);
  }
}, lt = je ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: tr, defineProperty: rr, getOwnPropertyDescriptor: ir, getOwnPropertyNames: nr, getOwnPropertySymbols: or, getPrototypeOf: ar } = Object, K = globalThis, pt = K.trustedTypes, sr = pt ? pt.emptyScript : "", Ae = K.reactiveElementPolyfillSupport, he = (r, e) => r, xe = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? sr : null;
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
} }, He = (r, e) => !tr(r, e), dt = { attribute: !0, type: String, converter: xe, reflect: !1, useDefault: !1, hasChanged: He };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), K.litPropertyMetadata ?? (K.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let se = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = dt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(e, i, t);
      n !== void 0 && rr(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: n, set: l } = ir(this.prototype, e) ?? { get() {
      return this[t];
    }, set(p) {
      this[t] = p;
    } };
    return { get: n, set(p) {
      const y = n == null ? void 0 : n.call(this);
      l == null || l.call(this, p), this.requestUpdate(e, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? dt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(he("elementProperties"))) return;
    const e = ar(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(he("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(he("properties"))) {
      const t = this.properties, i = [...nr(t), ...or(t)];
      for (const n of i) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, n] of t) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const n = this._$Eu(t, i);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) t.unshift(lt(n));
    } else e !== void 0 && t.push(lt(e));
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
    return er(e, this.constructor.elementStyles), e;
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
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const p = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : xe).toAttribute(t, i.type);
      this._$Em = e, p == null ? this.removeAttribute(n) : this.setAttribute(n, p), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, p;
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const y = i.getPropertyOptions(n), c = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : xe;
      this._$Em = n;
      const P = c.fromAttribute(t, y.type);
      this[n] = P ?? ((p = this._$Ej) == null ? void 0 : p.get(n)) ?? P, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, n = !1, l) {
    var p;
    if (e !== void 0) {
      const y = this.constructor;
      if (n === !1 && (l = this[e]), i ?? (i = y.getPropertyOptions(e)), !((i.hasChanged ?? He)(l, t) || i.useDefault && i.reflect && l === ((p = this._$Ej) == null ? void 0 : p.get(e)) && !this.hasAttribute(y._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: n, wrapped: l }, p) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, p ?? t ?? this[e]), l !== !0 || p !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, p] of this._$Ep) this[l] = p;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [l, p] of n) {
        const { wrapped: y } = p, c = this[l];
        y !== !0 || this._$AL.has(l) || c === void 0 || this.C(l, void 0, p, c);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((n) => {
        var l;
        return (l = n.hostUpdate) == null ? void 0 : l.call(n);
      }), this.update(t)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var n;
      return (n = i.hostUpdated) == null ? void 0 : n.call(i);
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
se.elementStyles = [], se.shadowRootOptions = { mode: "open" }, se[he("elementProperties")] = /* @__PURE__ */ new Map(), se[he("finalized")] = /* @__PURE__ */ new Map(), Ae == null || Ae({ ReactiveElement: se }), (K.reactiveElementVersions ?? (K.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe = globalThis, ut = (r) => r, Ee = fe.trustedTypes, ct = Ee ? Ee.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, xt = "$lit$", Z = `lit$${Math.random().toFixed(9).slice(2)}$`, Et = "?" + Z, lr = `<${Et}>`, ie = document, ye = () => ie.createComment(""), be = (r) => r === null || typeof r != "object" && typeof r != "function", De = Array.isArray, pr = (r) => De(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Me = `[ 	
\f\r]`, ce = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ht = /-->/g, ft = />/g, ee = RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), yt = /'/g, bt = /"/g, _t = /^(?:script|style|textarea|title)$/i, dr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), z = dr(1), pe = Symbol.for("lit-noChange"), U = Symbol.for("lit-nothing"), vt = /* @__PURE__ */ new WeakMap(), te = ie.createTreeWalker(ie, 129);
function Pt(r, e) {
  if (!De(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
const ur = (r, e) => {
  const t = r.length - 1, i = [];
  let n, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", p = ce;
  for (let y = 0; y < t; y++) {
    const c = r[y];
    let P, E, $ = -1, R = 0;
    for (; R < c.length && (p.lastIndex = R, E = p.exec(c), E !== null); ) R = p.lastIndex, p === ce ? E[1] === "!--" ? p = ht : E[1] !== void 0 ? p = ft : E[2] !== void 0 ? (_t.test(E[2]) && (n = RegExp("</" + E[2], "g")), p = ee) : E[3] !== void 0 && (p = ee) : p === ee ? E[0] === ">" ? (p = n ?? ce, $ = -1) : E[1] === void 0 ? $ = -2 : ($ = p.lastIndex - E[2].length, P = E[1], p = E[3] === void 0 ? ee : E[3] === '"' ? bt : yt) : p === bt || p === yt ? p = ee : p === ht || p === ft ? p = ce : (p = ee, n = void 0);
    const M = p === ee && r[y + 1].startsWith("/>") ? " " : "";
    l += p === ce ? c + lr : $ >= 0 ? (i.push(P), c.slice(0, $) + xt + c.slice($) + Z + M) : c + Z + ($ === -2 ? y : M);
  }
  return [Pt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ve {
  constructor({ strings: e, _$litType$: t }, i) {
    let n;
    this.parts = [];
    let l = 0, p = 0;
    const y = e.length - 1, c = this.parts, [P, E] = ur(e, t);
    if (this.el = ve.createElement(P, i), te.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (n = te.nextNode()) !== null && c.length < y; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const $ of n.getAttributeNames()) if ($.endsWith(xt)) {
          const R = E[p++], M = n.getAttribute($).split(Z), B = /([.?@])?(.*)/.exec(R);
          c.push({ type: 1, index: l, name: B[2], strings: M, ctor: B[1] === "." ? hr : B[1] === "?" ? fr : B[1] === "@" ? yr : Pe }), n.removeAttribute($);
        } else $.startsWith(Z) && (c.push({ type: 6, index: l }), n.removeAttribute($));
        if (_t.test(n.tagName)) {
          const $ = n.textContent.split(Z), R = $.length - 1;
          if (R > 0) {
            n.textContent = Ee ? Ee.emptyScript : "";
            for (let M = 0; M < R; M++) n.append($[M], ye()), te.nextNode(), c.push({ type: 2, index: ++l });
            n.append($[R], ye());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Et) c.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = n.data.indexOf(Z, $ + 1)) !== -1; ) c.push({ type: 7, index: l }), $ += Z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = ie.createElement("template");
    return i.innerHTML = e, i;
  }
}
function de(r, e, t = r, i) {
  var p, y;
  if (e === pe) return e;
  let n = i !== void 0 ? (p = t._$Co) == null ? void 0 : p[i] : t._$Cl;
  const l = be(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((y = n == null ? void 0 : n._$AO) == null || y.call(n, !1), l === void 0 ? n = void 0 : (n = new l(r), n._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = n : t._$Cl = n), n !== void 0 && (e = de(r, n._$AS(r, e.values), n, i)), e;
}
class cr {
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
    const { el: { content: t }, parts: i } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? ie).importNode(t, !0);
    te.currentNode = n;
    let l = te.nextNode(), p = 0, y = 0, c = i[0];
    for (; c !== void 0; ) {
      if (p === c.index) {
        let P;
        c.type === 2 ? P = new ge(l, l.nextSibling, this, e) : c.type === 1 ? P = new c.ctor(l, c.name, c.strings, this, e) : c.type === 6 && (P = new br(l, this, e)), this._$AV.push(P), c = i[++y];
      }
      p !== (c == null ? void 0 : c.index) && (l = te.nextNode(), p++);
    }
    return te.currentNode = ie, n;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ge {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, n) {
    this.type = 2, this._$AH = U, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = de(this, e, t), be(e) ? e === U || e == null || e === "" ? (this._$AH !== U && this._$AR(), this._$AH = U) : e !== this._$AH && e !== pe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : pr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== U && be(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ie.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, n = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ve.createElement(Pt(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === n) this._$AH.p(t);
    else {
      const p = new cr(n, this), y = p.u(this.options);
      p.p(t), this.T(y), this._$AH = p;
    }
  }
  _$AC(e) {
    let t = vt.get(e.strings);
    return t === void 0 && vt.set(e.strings, t = new ve(e)), t;
  }
  k(e) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, n = 0;
    for (const l of e) n === t.length ? t.push(i = new ge(this.O(ye()), this.O(ye()), this, this.options)) : i = t[n], i._$AI(l), n++;
    n < t.length && (this._$AR(i && i._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const n = ut(e).nextSibling;
      ut(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, n, l) {
    this.type = 1, this._$AH = U, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = U;
  }
  _$AI(e, t = this, i, n) {
    const l = this.strings;
    let p = !1;
    if (l === void 0) e = de(this, e, t, 0), p = !be(e) || e !== this._$AH && e !== pe, p && (this._$AH = e);
    else {
      const y = e;
      let c, P;
      for (e = l[0], c = 0; c < l.length - 1; c++) P = de(this, y[i + c], t, c), P === pe && (P = this._$AH[c]), p || (p = !be(P) || P !== this._$AH[c]), P === U ? e = U : e !== U && (e += (P ?? "") + l[c + 1]), this._$AH[c] = P;
    }
    p && !n && this.j(e);
  }
  j(e) {
    e === U ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class hr extends Pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === U ? void 0 : e;
  }
}
class fr extends Pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== U);
  }
}
class yr extends Pe {
  constructor(e, t, i, n, l) {
    super(e, t, i, n, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = de(this, e, t, 0) ?? U) === pe) return;
    const i = this._$AH, n = e === U && i !== U || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== U && (i === U || n);
    n && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class br {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    de(this, e);
  }
}
const ke = fe.litHtmlPolyfillSupport;
ke == null || ke(ve, ge), (fe.litHtmlVersions ?? (fe.litHtmlVersions = [])).push("3.3.3");
const vr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = i._$litPart$;
  if (n === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = n = new ge(e.insertBefore(ye(), l), l, void 0, t ?? {});
  }
  return n._$AI(r), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis;
class le extends se {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = vr(t, this.renderRoot, this.renderOptions);
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
    return pe;
  }
}
var mt;
le._$litElement$ = !0, le.finalized = !0, (mt = re.litElementHydrateSupport) == null || mt.call(re, { LitElement: le });
const Ie = re.litElementPolyfillSupport;
Ie == null || Ie({ LitElement: le });
(re.litElementVersions ?? (re.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ue = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gr = { attribute: !0, type: String, converter: xe, reflect: !1, hasChanged: He }, mr = (r = gr, e, t) => {
  const { kind: i, metadata: n } = t;
  let l = globalThis.litPropertyMetadata.get(n);
  if (l === void 0 && globalThis.litPropertyMetadata.set(n, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: p } = t;
    return { set(y) {
      const c = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(p, c, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(p, void 0, r, y), y;
    } };
  }
  if (i === "setter") {
    const { name: p } = t;
    return function(y) {
      const c = this[p];
      e.call(this, y), this.requestUpdate(p, c, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function w(r) {
  return (e, t) => typeof t == "object" ? mr(r, e, t) : ((i, n, l) => {
    const p = n.hasOwnProperty(l);
    return n.constructor.createProperty(l, i), p ? Object.getOwnPropertyDescriptor(n, l) : void 0;
  })(r, e, t);
}
var wr = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, I = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? $r(e, t) : e, l = r.length - 1, p; l >= 0; l--)
    (p = r[l]) && (n = (i ? p(e, t, n) : p(n)) || n);
  return i && n && wr(e, t, n), n;
};
const _e = class _e extends le {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
  }
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return z``;
    const e = this.overridePrefix, t = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, i = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let n = "";
    return Object.entries(t).forEach(([l, p]) => {
      const y = this.responsiveProps[l];
      if (!y) return;
      let c = "";
      Object.entries(y).forEach(([P, E]) => {
        const $ = i[P];
        $ && (c += `--${e}-${$}-override: ${E};
`);
      }), c && (n += `${p} {
  :host {
    ${c}  }
}
`);
    }), n ? z`<style>${n}</style>` : z``;
  }
  // --- Visual Logic ---
  get overridePrefix() {
    return "zero-panel";
  }
  computeBaseStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-width: var(--${e}-width-override, ${this.width})`,
      `--zero-height: var(--${e}-height-override, ${this.height})`,
      `--zero-margin: var(--${e}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${e}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${e}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? "auto" : "none"}`,
      `display: ${this.visible ? "block" : "none"}`
    ].join(";");
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${e}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${e}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${e}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${e}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${e}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${e}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${e}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${e}-direction-override, ${this.direction})`
    ].join(";");
  }
  computeColumnBasis() {
    const e = this.overridePrefix, t = `var(--${e}-gap-override, ${this.gap || "0px"})`, i = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${i}) - ((${t} * (${i} - 1)) / ${i}))`;
  }
  get isStudio() {
    if (typeof window > "u") return !1;
    const e = window.location.search || "";
    if (e.includes("mode=preview") || e.includes("mode=live"))
      return !1;
    try {
      if (window.parent && window.parent.zeroThemeManager && !e.includes("mode=preview"))
        return !0;
    } catch {
    }
    return !!(window.zeroThemeManager && !e.includes("mode=preview"));
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!this.isStudio) return;
    const t = e.currentTarget.getBoundingClientRect(), i = (e.clientX - t.left) / t.width, n = (e.clientY - t.top) / t.height;
    this.direction === "row" ? i < 0.3 ? this.activeEdge = "left" : i > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : n < 0.3 ? this.activeEdge = "top" : n > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? z`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : z``;
  }
  renderHeader() {
    return z``;
  }
};
_e.slots = [], _e.styles = $t`
    :host {
      display: block;
      box-sizing: border-box;
      width: var(--zero-width, 100%);
      height: var(--zero-height, auto);
      margin: var(--zero-margin, 0);
      opacity: var(--zero-opacity, 1);
      z-index: var(--zero-z-index, auto);
      pointer-events: var(--zero-pointer-events, auto);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      padding: var(--zero-p-padding, 0px);
      background: var(--zero-p-bg, transparent);
      border: var(--zero-p-border-width, 0px) solid var(--zero-p-border-color, transparent);
      border-radius: var(--zero-p-border-radius, 0px);
      box-shadow: var(--zero-p-shadow, none);
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      overflow: var(--zero-p-overflow, visible);
      flex-direction: var(--zero-p-direction, row);
    }

    .zero-internal-container[data-direction="column"] {
      flex-direction: column;
    }

    /* Header & Expansion */
    .zero-layout-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      background: rgba(0,0,0,0.02);
    }

    .zero-layout-header .label { flex: 1; font-weight: 600; font-size: 0.95rem; }
    .zero-layout-header .icon { font-size: 1.1rem; }
    .zero-layout-header .chevron { transition: transform 0.3s ease; font-size: 0.8rem; opacity: 0.5; }
    
    :host([expanded]) .zero-layout-header .chevron { transform: rotate(180deg); }

    .zero-layout-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    :host([expanded]) .zero-layout-body {
      grid-template-rows: 1fr;
    }

    .zero-layout-content,
    .tab-pane {
      min-height: 0;
      display: flex;
      flex-direction: var(--zero-p-direction, row);
      flex-wrap: wrap;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      width: 100%;
      box-sizing: border-box;
    }

    /* Spatial Drop Indicators (30/70 Rule) */
    .drop-indicator {
      position: absolute;
      pointer-events: none;
      background: var(--zs-primary, #0ea5e9);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
      display: block;
    }

    .drop-indicator.active { opacity: 0.3; }

    .drop-indicator.left { left: 0; top: 0; width: 30%; height: 100%; border-right: 3px solid var(--zs-primary); }
    .drop-indicator.right { right: 0; top: 0; width: 30%; height: 100%; border-left: 3px solid var(--zs-primary); }
    .drop-indicator.top { top: 0; left: 0; width: 100%; height: 30%; border-bottom: 3px solid var(--zs-primary); }
    .drop-indicator.bottom { bottom: 0; left: 0; width: 100%; height: 30%; border-top: 3px solid var(--zs-primary); }
  `;
let S = _e;
I([
  w({ type: Object, attribute: "responsive-props" })
], S.prototype, "responsiveProps", 2);
I([
  w({ type: String })
], S.prototype, "activeEdge", 2);
I([
  w({ type: Boolean, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], S.prototype, "visible", 2);
I([
  w({ type: Number, reflect: !0, attribute: "z-index" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], S.prototype, "zIndex", 2);
I([
  w({ type: Number, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], S.prototype, "opacity", 2);
I([
  w({ type: String, attribute: "custom-class" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], S.prototype, "customClass", 2);
I([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], S.prototype, "width", 2);
I([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], S.prototype, "height", 2);
I([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], S.prototype, "margin", 2);
I([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], S.prototype, "padding", 2);
I([
  m({
    attributeType: v.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], S.prototype, "onClick", 1);
I([
  w({ type: String, reflect: !0 })
], S.prototype, "direction", 2);
I([
  w({ type: String, reflect: !0 })
], S.prototype, "justify", 2);
I([
  w({ type: String, reflect: !0 })
], S.prototype, "align", 2);
I([
  w({ type: String, reflect: !0 })
], S.prototype, "gap", 2);
I([
  w({ type: Number, reflect: !0, attribute: "items-per-row" })
], S.prototype, "itemsPerRow", 2);
I([
  w({ type: String, attribute: "background-color", reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], S.prototype, "backgroundColor", 2);
I([
  w({ type: String, attribute: "border-radius", reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], S.prototype, "borderRadius", 2);
I([
  w({ type: String, reflect: !0, attribute: "elevation" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.DROPDOWN,
    displayLabel: "Elevation (Shadow)",
    fieldMappings: "elevation",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Low", value: "0 2px 4px rgba(0,0,0,0.1)" },
      { label: "Medium", value: "0 4px 12px rgba(0,0,0,0.12)" },
      { label: "High", value: "0 12px 24px rgba(0,0,0,0.16)" }
    ]
  })
], S.prototype, "elevation", 2);
I([
  m({
    attributeType: v.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], S.prototype, "show", 1);
I([
  m({
    attributeType: v.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], S.prototype, "hide", 1);
var xr = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, L = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Er(e, t) : e, l = r.length - 1, p; l >= 0; l--)
    (p = r[l]) && (n = (i ? p(e, t, n) : p(n)) || n);
  return i && n && xr(e, t, n), n;
};
let V = class extends S {
  constructor() {
    super(), this.headerBg = "#f8fafc", this.headerColor = "#1e293b", this.borderColor = "#e2e8f0", this.enableHeader = !0, this.label = "Panel Header", this.icon = "📄", this.expandable = !0, this.expanded = !0, this.label = "Expansion Panel", this.icon = "⚡", this.expanded = !0, this.expandable = !0, this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-expansion-panel";
  }
  get onExpand() {
    return "expand";
  }
  get onCollapse() {
    return "collapse";
  }
  expand() {
    this.expandable && (this.expanded = !0, this.dispatchEvent(new CustomEvent("expand")));
  }
  collapse() {
    this.expandable && (this.expanded = !1, this.dispatchEvent(new CustomEvent("collapse")));
  }
  toggleExpanded() {
    this.expanded ? this.collapse() : this.expand();
  }
  static getStudioTemplate(r) {
    var P, E, $, R, M, B, Y;
    const e = ((P = r == null ? void 0 : r.props) == null ? void 0 : P.label) || "Expansion Panel", t = ((E = r == null ? void 0 : r.props) == null ? void 0 : E.icon) || "⚡", i = (($ = r == null ? void 0 : r.props) == null ? void 0 : $.headerBg) || "#f8fafc", n = ((R = r == null ? void 0 : r.props) == null ? void 0 : R.headerColor) || "#1e293b", l = ((M = r == null ? void 0 : r.props) == null ? void 0 : M.borderColor) || "#e2e8f0", p = ((B = r == null ? void 0 : r.props) == null ? void 0 : B.borderRadius) || "12px", y = ((Y = r == null ? void 0 : r.props) == null ? void 0 : Y.padding) || "16px", c = `
      <div style="border: 1px solid ${l}; border-radius: ${p}; background: #fff; overflow: hidden; width: 100%;">
        <div style="background: ${i}; color: ${n}; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; font-weight: 700; border-bottom: 1px solid ${l};">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${t}</span>
            <span>${e}</span>
          </div>
          <span>▼</span>
        </div>
        <div style="padding: ${y}; min-height: 80px;">
          <zero-studio-slot name="default"></zero-studio-slot>
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: [
        { id: "default", label: "Panel Content", dropzone: !0, anchor: "content", accepts: ["zero-section"] }
      ],
      templateHtml: c,
      badges: ["Expansion"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  render() {
    return z`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div
          class="zero-internal-container"
          style="
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 0;
            gap: 0;
            border: 1px solid ${this.borderColor};
            border-radius: ${this.borderRadius};
            overflow: hidden;
            background: ${this.backgroundColor};
            box-shadow: var(--zero-expansion-panel-elevation-override, ${this.elevation});
            ${this.computeInternalStyles()}
          "
        >
          <div
            class="zero-layout-header"
            style="
              width: 100%;
              box-sizing: border-box;
              background: ${this.headerBg};
              color: ${this.headerColor};
              border-bottom: 1px solid ${this.borderColor};
            "
            @click=${this.toggleExpanded}
          >
            ${this.icon ? z`<span class="icon">${this.icon}</span>` : ""}
            <span class="label">${this.label}</span>
            ${this.expandable ? z`<span class="chevron">▼</span>` : ""}
          </div>
          <div class="zero-layout-body" style="width: 100%;">
            <div class="zero-layout-content" style="padding: ${this.padding}; min-height: ${this.expanded ? "80px" : "0px"};">
              <slot name="default"></slot>
              <slot></slot>
            </div>
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
};
V.slots = [
  { id: "default", label: "Panel Content", dropzone: !0, anchor: "content", accepts: ["zero-section"] }
];
L([
  w({ type: String, attribute: "header-bg" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], V.prototype, "headerBg", 2);
L([
  w({ type: String, attribute: "header-color" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerColor",
    categoryLabel: "Appearance"
  })
], V.prototype, "headerColor", 2);
L([
  w({ type: String, attribute: "border-color" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], V.prototype, "borderColor", 2);
L([
  w({ type: Boolean, reflect: !0, attribute: "enable-header" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
], V.prototype, "enableHeader", 2);
L([
  w({ type: String }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
], V.prototype, "label", 2);
L([
  w({ type: String }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
], V.prototype, "icon", 2);
L([
  w({ type: Boolean, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
], V.prototype, "expandable", 2);
L([
  w({ type: Boolean, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
], V.prototype, "expanded", 2);
L([
  m({
    attributeType: v.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
], V.prototype, "onExpand", 1);
L([
  m({
    attributeType: v.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
], V.prototype, "onCollapse", 1);
L([
  m({
    attributeType: v.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
], V.prototype, "expand", 1);
L([
  m({
    attributeType: v.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
], V.prototype, "collapse", 1);
L([
  m({
    attributeType: v.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
], V.prototype, "toggleExpanded", 1);
V = L([
  Le({
    name: "zero-expansion-panel",
    version: "1.0.0",
    title: "Expansion Panel",
    elementSelector: "zero-expansion-panel",
    group: "Layout",
    iconName: "expansion-panel-icon.png"
  }),
  Ue("zero-expansion-panel")
], V);
let J = class extends S {
  constructor() {
    super(), this.tabs = "Tab 1, Tab 2", this.activeIndex = 0, this.headerBg = "#f8fafc", this.activeTabColor = "#0e5aed", this.borderColor = "#e2e8f0", this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-tab-panel";
  }
  getTabList() {
    return this.tabs.split(",").map((r) => r.trim()).filter(Boolean);
  }
  selectTab(r) {
    this.activeIndex = r, this.dispatchEvent(new CustomEvent("tabchange", { detail: { activeIndex: r } }));
  }
  static getStudioTemplate(r) {
    var E, $, R, M, B, Y;
    const e = ((E = r == null ? void 0 : r.props) == null ? void 0 : E.tabs) || "Tab 1, Tab 2", t = Number((($ = r == null ? void 0 : r.props) == null ? void 0 : $.activeIndex) ?? 0), i = e.split(",").map((G) => G.trim()).filter(Boolean), n = i.map((G, W) => ({
      id: `tab-${W + 1}`,
      label: G,
      dropzone: !0,
      accepts: ["zero-section"]
    })), l = ((R = r == null ? void 0 : r.props) == null ? void 0 : R.headerBg) || "#f8fafc", p = ((M = r == null ? void 0 : r.props) == null ? void 0 : M.borderColor) || "#e2e8f0", y = ((B = r == null ? void 0 : r.props) == null ? void 0 : B.activeTabColor) || "#0e5aed", c = ((Y = r == null ? void 0 : r.props) == null ? void 0 : Y.padding) || "16px", P = `
      <div style="border:1px solid ${p}; border-radius:12px; background:#fff; overflow:hidden; width:100%;">
        <div style="background:${l}; display:flex; border-bottom:1px solid ${p}; width:100%; overflow-x:auto;">
          ${i.map((G, W) => {
      const Q = t === W;
      return `
              <div data-tab-index="${W}" style="padding:12px 20px; font-weight:600; font-size:0.85rem; border-bottom:3px solid ${Q ? y : "transparent"}; color:${Q ? y : "#64748b"}; cursor:pointer;">
                ${G}
              </div>
            `;
    }).join("")}
        </div>
        <div style="padding:${c}; min-height:100px;">
          ${i.map((G, W) => `
              <div style="display:${t === W ? "block" : "none"};">
                <zero-studio-slot name="tab-${W + 1}"></zero-studio-slot>
              </div>
            `).join("")}
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: n,
      templateHtml: P,
      badges: ["Tab Panel"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  render() {
    const r = this.getTabList();
    return z`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="tabs-header-bar" style="background: ${this.headerBg}; display: flex; border-bottom: 1px solid ${this.borderColor || "rgba(0,0,0,0.08)"}; width: 100%; box-sizing: border-box; overflow-x: auto;">
            ${r.map((e, t) => {
      const i = this.activeIndex === t;
      return z`
                <button 
                  class="tab-btn" 
                  style="padding: 12px 20px; font-weight: 600; font-size: 0.85rem; border: none; background: transparent; cursor: pointer; transition: all 0.2s ease; border-bottom: 3px solid ${i ? this.activeTabColor : "transparent"}; color: ${i ? this.activeTabColor : "#64748b"};"
                  @click=${() => this.selectTab(t)}>
                  ${e}
                </button>
              `;
    })}
          </div>
          <div class="tabs-content-area" style="padding: ${this.padding}; width: 100%; box-sizing: border-box; min-height: 100px;">
            ${r.map((e, t) => {
      const i = this.activeIndex === t;
      return z`
                <div class="tab-pane" style="display: ${i ? "flex" : "none"}; width: 100%;">
                  <slot name="tab-${t + 1}"></slot>
                </div>
              `;
    })}
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
};
J.slots = [];
L([
  w({ type: String }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Tabs (Comma Separated)",
    fieldMappings: "tabs",
    categoryLabel: "Tabs Config"
  })
], J.prototype, "tabs", 2);
L([
  w({ type: Number, reflect: !0, attribute: "active-index" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.NUMBER_INPUT,
    displayLabel: "Active Tab Index",
    fieldMappings: "activeIndex",
    categoryLabel: "Tabs Config"
  })
], J.prototype, "activeIndex", 2);
L([
  w({ type: String, attribute: "header-bg" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], J.prototype, "headerBg", 2);
L([
  w({ type: String, attribute: "active-tab-color" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Active Tab Underline Color",
    fieldMappings: "activeTabColor",
    categoryLabel: "Appearance"
  })
], J.prototype, "activeTabColor", 2);
L([
  w({ type: String, attribute: "border-color" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], J.prototype, "borderColor", 2);
J = L([
  Le({
    name: "zero-tab-panel",
    version: "1.0.0",
    title: "Tab Panel",
    elementSelector: "zero-tab-panel",
    group: "Layout",
    iconName: "tab-panel-icon.png"
  }),
  Ue("zero-tab-panel")
], J);
var _r = Object.defineProperty, Pr = Object.getOwnPropertyDescriptor, j = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Pr(e, t) : e, l = r.length - 1, p; l >= 0; l--)
    (p = r[l]) && (n = (i ? p(e, t, n) : p(n)) || n);
  return i && n && _r(e, t, n), n;
};
const gt = {
  kind: "panel",
  generatedSlots: [
    {
      pattern: "col-{index}",
      anchor: "columns",
      countProp: "columns",
      labelPrefix: "Column",
      min: 1,
      dropzone: !0,
      accepts: ["zero-section"],
      direction: "row"
    }
  ],
  templateHtml: [
    "<div style='display:grid;gap:10px;padding:12px;border-radius:18px;border:1px solid rgba(14,165,233,0.22);background:linear-gradient(180deg,rgba(240,249,255,0.96),rgba(255,255,255,0.96));'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:8px;'>",
    "<strong style='font-size:0.92rem;color:var(--zs-text);'>{{display:label}}</strong>",
    "<span style='font-size:0.78rem;color:var(--zs-text-muted);'>{{totalColumns}} areas · {{itemsPerRow}} cols</span>",
    "</div>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>label: {{mode:label}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(240,253,250,0.9);color:#0f766e;font-size:0.72rem;font-weight:700;'>justify: {{display:justify}}</span>",
    "</div>",
    "<zero-studio-slot-group name='columns'></zero-studio-slot-group>",
    "</div>"
  ].join(""),
  labelProp: "label",
  columnsProp: "totalColumns",
  emptyText: "Drag and Drop Elements here",
  dynamicHints: ["$.label", "$.section_title"],
  badges: ["Layout", "Columns"],
  metrics: [
    { label: "Flow", value: "$.panel.layout" },
    { label: "Items", value: "{{section.count}}" }
  ]
};
let A = class extends le {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.totalColumns = 2, this.itemsPerRow = 2, this.direction = "column", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.padding = "16px", this.backgroundColor = "#ffffff", this.borderColor = "#e2e8f0", this.borderRadius = "16px", this.visible = !0, this.enableHeader = !1, this.expanded = !0, this.expandable = !0, this.label = "Panel Header", this.icon = "📄", this.iconPosition = "start";
  }
  static getStudioTemplate(r) {
    var G;
    if (!r)
      return gt;
    const e = X(r.studio.display.label || "Panel");
    X(r.studio.mode.label || "static");
    const t = X(r.studio.display.direction || "row");
    X(r.studio.display.justify || "start");
    const i = X(r.studio.display.itemsPerRow || "2"), n = r.props.responsiveProps || ((G = r.studio.props) == null ? void 0 : G.responsiveProps) || {}, l = X(r.props.gap || "16px"), p = X(r.props.padding || "16px"), y = X(r.props.justify || "flex-start"), c = X(r.props.align || "stretch"), P = X(r.props.backgroundColor || "var(--uiv-surface-color, #ffffff)"), E = X(r.props.borderColor || "var(--uiv-border-color, #e2e8f0)"), $ = X(r.props.borderRadius || "8px"), R = String(r.props.enableHeader) === "true";
    let M = "";
    const B = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, Y = {
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      columns: "items-per-row"
    };
    return Object.entries(B).forEach(([W, Q]) => {
      const ne = n[W];
      if (!ne) return;
      let oe = "";
      Object.entries(ne).forEach(([Te, Ce]) => {
        const me = Y[Te];
        me && (oe += `--zero-panel-${me}-override: ${Ce};
`);
      }), ne.columns && (oe += `zero-studio-slot-group[name='columns'] { grid-template-columns: repeat(${ne.columns}, 1fr) !important; flex-direction: unset !important; }
`), oe && (M += `${Q} { .studio-panel-container { ${oe} } }
`);
    }), {
      ...gt,
      generatedSlots: [
        {
          pattern: "col-{index}",
          anchor: "columns",
          countProp: "totalColumns",
          labelPrefix: t === "column" ? "Row" : "Column",
          min: 1,
          dropzone: !0,
          accepts: ["zero-section", "zero-stack", "zero-text", "zero-heading", "zero-image", "zero-button"],
          direction: "row"
          // Force default direction
        }
      ],
      templateHtml: [
        `<div class="studio-panel-container" style="
          --zero-items-per-row: var(--zero-panel-items-per-row-override, ${i});
          --zero-gap: var(--zero-panel-gap-override, ${l});
          --zero-panel-padding: var(--zero-panel-padding-override, ${p});
          --zero-justify: var(--zero-panel-justify-override, ${y});
          --zero-align: var(--zero-panel-align-override, ${c});
          --zero-panel-bg: ${P};
          --zero-panel-border-color: ${E};
          --zero-panel-radius: ${$};
          
          border: 1px solid var(--zero-panel-border-color);
          border-radius: var(--zero-panel-radius);
          background: var(--zero-panel-bg);
          overflow: hidden;
          width: 100%;
        ">`,
        R ? `<div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid var(--zero-panel-border-color);"><span style="flex:1;font-weight:600;font-size:0.94rem;color:var(--zero-text,#1e293b);">${e}</span></div>` : "",
        `<div style="padding: var(--zero-panel-padding); min-height: 120px;">
          <style>
            .studio-panel-container zero-studio-slot-group[name='columns'] {
              display: grid !important;
              grid-template-columns: repeat(var(--zero-items-per-row), 1fr) !important;
              gap: var(--zero-gap) !important;
              justify-content: var(--zero-justify) !important;
              align-items: var(--zero-align) !important;
            }
            ${M}
          </style>
          <zero-studio-slot-group name='columns'></zero-studio-slot-group>
        </div>`,
        "</div>"
      ].join("")
    };
  }
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { columns: this.totalColumns },
        bubbles: !0,
        composed: !0
      })
    );
  }
  toggleExpanded() {
    this.expandable && (this.expanded = !this.expanded, this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } })));
  }
  renderIcon() {
    return this.icon ? z`<span class="icon">${this.icon}</span>` : z``;
  }
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return z``;
    const r = "zero-panel", e = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, t = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let i = "";
    return Object.entries(e).forEach(([n, l]) => {
      const p = this.responsiveProps[n];
      if (!p) return;
      let y = "";
      Object.entries(p).forEach(([c, P]) => {
        const E = t[c];
        E && (y += `--${r}-${E}-override: ${P};
`);
      }), y && (i += `${l} {
  :host {
    ${y}  }
}
`);
    }), i ? z`<style>${i}</style>` : z``;
  }
  render() {
    if (!this.visible) return z``;
    const r = Math.max(1, Math.min(12, Number(this.totalColumns) || 1)), e = [
      `--zero-items-per-row:var(--zero-panel-items-per-row-override, ${this.itemsPerRow || 1})`,
      `--zero-gap:var(--zero-panel-gap-override, ${this.gap || "16px"})`,
      `--zero-panel-padding:var(--zero-panel-padding-override, ${this.padding || "16px"})`,
      `--zero-justify:var(--zero-panel-justify-override, ${this.justify || "flex-start"})`,
      `--zero-align:var(--zero-panel-align-override, ${this.align || "stretch"})`,
      `--zero-panel-bg:${this.backgroundColor || "#ffffff"}`,
      `--zero-panel-border-color:${this.borderColor || "#e2e8f0"}`,
      `--zero-panel-radius:${this.borderRadius || "16px"}`
    ].join(";");
    return z`
      ${this.renderResponsiveStyles()}
      <div class="panel-container">
        ${this.enableHeader ? z`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? z`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" data-direction=${this.direction || "row"} style=${e}>
              <style>
                .layout {
                  flex-direction: var(--zero-panel-direction-override, ${this.direction || "row"});
                }
              </style>
              ${Array.from({ length: r }).map(
      (t, i) => z`
                  <div class="column">
                    <slot name="col-${i + 1}" @slotchange=${i === 0 ? this.handleSlotChange : null}></slot>
                  </div>
                `
    )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
A.styles = $t`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-panel-border-color, var(--zero-border-soft, #e2e8f0));
      border-radius: var(--zero-panel-radius, 8px);
      overflow: hidden;
      background: var(--zero-panel-bg, var(--zero-surface, #ffffff));
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      display: flex;
      flex-wrap: wrap;
      gap: var(--zero-gap, 16px);
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-panel-padding, 16px);
      min-height: 120px;
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
    }

    .layout[data-direction="column"] {
      flex-direction: column;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* Calculate width based on items per row, minus the gap share */
      flex: 0 0 calc((100% / var(--zero-items-per-row, 1)) - ((var(--zero-gap, 16px) * (var(--zero-items-per-row, 1) - 1)) / var(--zero-items-per-row, 1)));
      min-height: 120px;
      min-width: 0;
      border: 1px solid transparent;
      border-radius: calc(var(--zero-panel-radius, 8px) - 2px);
      background: linear-gradient(180deg, rgba(248, 250, 252, 0.75), rgba(255, 255, 255, 0.92));
      box-sizing: border-box;
      transition: flex var(--zero-panel-transition), border-color var(--zero-panel-transition), background var(--zero-panel-transition);
    }

    .layout[data-direction="column"] .column {
      flex: 0 0 100%;
    }

    .column > slot {
      display: block;
      min-height: 120px;
  `;
j([
  w({ type: Object, attribute: "responsive-props" }),
  m({
    attributeType: v.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], A.prototype, "responsiveProps", 2);
j([
  w({ type: Number, reflect: !0, attribute: "total-columns" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns"
  })
], A.prototype, "totalColumns", 2);
j([
  w({ type: Number, reflect: !0, attribute: "items-per-row" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow"
  })
], A.prototype, "itemsPerRow", 2);
j([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    initialValue: "column",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], A.prototype, "direction", 2);
j([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" },
      { label: "Space Evenly", value: "space-evenly" }
    ]
  })
], A.prototype, "justify", 2);
j([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], A.prototype, "align", 2);
j([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap"
  })
], A.prototype, "gap", 2);
j([
  w({ type: String, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
], A.prototype, "padding", 2);
j([
  w({ type: String, attribute: "background-color", reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
], A.prototype, "backgroundColor", 2);
j([
  w({ type: String, attribute: "border-color", reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor"
  })
], A.prototype, "borderColor", 2);
j([
  w({ type: String, attribute: "border-radius", reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Radius",
    fieldMappings: "borderRadius"
  })
], A.prototype, "borderRadius", 2);
j([
  w({ type: Boolean }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible"
  })
], A.prototype, "visible", 2);
j([
  w({ type: Boolean, attribute: "enable-header" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader"
  })
], A.prototype, "enableHeader", 2);
j([
  w({ type: Boolean, reflect: !0 }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], A.prototype, "expanded", 2);
j([
  w({ type: Boolean }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable"
  })
], A.prototype, "expandable", 2);
j([
  w({ type: String }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label"
  })
], A.prototype, "label", 2);
j([
  w({ type: String }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon"
  })
], A.prototype, "icon", 2);
j([
  w({ type: String, attribute: "icon-position" }),
  m({
    attributeType: v.PROPERTY,
    uiComponentType: _.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" }
    ]
  })
], A.prototype, "iconPosition", 2);
j([
  m({
    attributeType: v.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], A.prototype, "handleSlotChange", 1);
A = j([
  Le({
    name: "zero-panel-layout",
    version: "1.0.0",
    title: "Panel Layout",
    elementSelector: "zero-panel-layout",
    group: "Layout",
    iconName: "panel-layout-icon.png"
  }),
  Zt(),
  Ue("zero-panel-layout")
], A);
function X(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  A as ZeroPanelLayout,
  gt as studioTemplate
};
