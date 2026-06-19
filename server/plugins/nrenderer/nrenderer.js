var Ht = Object.defineProperty;
var Ut = (i, e, t) => e in i ? Ht(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ge = (i, e, t) => Ut(i, typeof e != "symbol" ? e + "" : e, t);
var qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Fe;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : v(), r = o(i);
    typeof t.Reflect < "u" && (r = o(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(h, x) {
      return function(_, m) {
        Object.defineProperty(h, _, { configurable: !0, writable: !0, value: m }), x && x(_, m);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function d() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function v() {
      return l() || d();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, x = !v && !h, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : h ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: x ? function(n, a) {
        return r.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: x ? function(n, a) {
        return r.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, m = Object.getPrototypeOf(Function), L = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : It(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Lt(), U = typeof WeakMap == "function" ? WeakMap : Nt(), X = o ? Symbol.for("@reflect-metadata:registry") : void 0, de = Mt(), Te = zt(de);
    function ft(n, a, s, u) {
      if (b(s)) {
        if (!je(n))
          throw new TypeError();
        if (!De(a))
          throw new TypeError();
        return xt(n, a);
      } else {
        if (!je(n))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(u) && !b(u) && !Z(u))
          throw new TypeError();
        return Z(u) && (u = void 0), s = D(s), Pt(n, a, s, u);
      }
    }
    e("decorate", ft);
    function yt(n, a) {
      function s(u, g) {
        if (!M(u))
          throw new TypeError();
        if (!b(g) && !Rt(g))
          throw new TypeError();
        ze(n, a, u, g);
      }
      return s;
    }
    e("metadata", yt);
    function vt(n, a, s, u) {
      if (!M(s))
        throw new TypeError();
      return b(u) || (u = D(u)), ze(n, a, s, u);
    }
    e("defineMetadata", vt);
    function gt(n, a, s) {
      if (!M(a))
        throw new TypeError();
      return b(s) || (s = D(s)), Re(n, a, s);
    }
    e("hasMetadata", gt);
    function bt(n, a, s) {
      if (!M(a))
        throw new TypeError();
      return b(s) || (s = D(s)), ve(n, a, s);
    }
    e("hasOwnMetadata", bt);
    function mt(n, a, s) {
      if (!M(a))
        throw new TypeError();
      return b(s) || (s = D(s)), Ce(n, a, s);
    }
    e("getMetadata", mt);
    function _t(n, a, s) {
      if (!M(a))
        throw new TypeError();
      return b(s) || (s = D(s)), Me(n, a, s);
    }
    e("getOwnMetadata", _t);
    function $t(n, a) {
      if (!M(n))
        throw new TypeError();
      return b(a) || (a = D(a)), ke(n, a);
    }
    e("getMetadataKeys", $t);
    function wt(n, a) {
      if (!M(n))
        throw new TypeError();
      return b(a) || (a = D(a)), Ie(n, a);
    }
    e("getOwnMetadataKeys", wt);
    function Et(n, a, s) {
      if (!M(a))
        throw new TypeError();
      if (b(s) || (s = D(s)), !M(a))
        throw new TypeError();
      b(s) || (s = D(s));
      var u = ee(
        a,
        s,
        /*Create*/
        !1
      );
      return b(u) ? !1 : u.OrdinaryDeleteMetadata(n, a, s);
    }
    e("deleteMetadata", Et);
    function xt(n, a) {
      for (var s = n.length - 1; s >= 0; --s) {
        var u = n[s], g = u(a);
        if (!b(g) && !Z(g)) {
          if (!De(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function Pt(n, a, s, u) {
      for (var g = n.length - 1; g >= 0; --g) {
        var k = n[g], z = k(a, s, u);
        if (!b(z) && !Z(z)) {
          if (!M(z))
            throw new TypeError();
          u = z;
        }
      }
      return u;
    }
    function Re(n, a, s) {
      var u = ve(n, a, s);
      if (u)
        return !0;
      var g = be(a);
      return Z(g) ? !1 : Re(n, g, s);
    }
    function ve(n, a, s) {
      var u = ee(
        a,
        s,
        /*Create*/
        !1
      );
      return b(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(n, a, s));
    }
    function Ce(n, a, s) {
      var u = ve(n, a, s);
      if (u)
        return Me(n, a, s);
      var g = be(a);
      if (!Z(g))
        return Ce(n, g, s);
    }
    function Me(n, a, s) {
      var u = ee(
        a,
        s,
        /*Create*/
        !1
      );
      if (!b(u))
        return u.OrdinaryGetOwnMetadata(n, a, s);
    }
    function ze(n, a, s, u) {
      var g = ee(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(n, a, s, u);
    }
    function ke(n, a) {
      var s = Ie(n, a), u = be(n);
      if (u === null)
        return s;
      var g = ke(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var k = new N(), z = [], $ = 0, p = s; $ < p.length; $++) {
        var c = p[$], f = k.has(c);
        f || (k.add(c), z.push(c));
      }
      for (var y = 0, w = g; y < w.length; y++) {
        var c = w[y], f = k.has(c);
        f || (k.add(c), z.push(c));
      }
      return z;
    }
    function Ie(n, a) {
      var s = ee(
        n,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function Le(n) {
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
    function b(n) {
      return n === void 0;
    }
    function Z(n) {
      return n === null;
    }
    function Ot(n) {
      return typeof n == "symbol";
    }
    function M(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function St(n, a) {
      switch (Le(n)) {
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
      var s = "string", u = He(n, l);
      if (u !== void 0) {
        var g = u.call(n, s);
        if (M(g))
          throw new TypeError();
        return g;
      }
      return At(n);
    }
    function At(n, a) {
      var s, u;
      {
        var g = n.toString;
        if (ue(g)) {
          var u = g.call(n);
          if (!M(u))
            return u;
        }
        var s = n.valueOf;
        if (ue(s)) {
          var u = s.call(n);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function Tt(n) {
      return "" + n;
    }
    function D(n) {
      var a = St(n);
      return Ot(a) ? a : Tt(a);
    }
    function je(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ue(n) {
      return typeof n == "function";
    }
    function De(n) {
      return typeof n == "function";
    }
    function Rt(n) {
      switch (Le(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ge(n, a) {
      return n === a || n !== n && a !== a;
    }
    function He(n, a) {
      var s = n[a];
      if (s != null) {
        if (!ue(s))
          throw new TypeError();
        return s;
      }
    }
    function Ue(n) {
      var a = He(n, d);
      if (!ue(a))
        throw new TypeError();
      var s = a.call(n);
      if (!M(s))
        throw new TypeError();
      return s;
    }
    function Ve(n) {
      return n.value;
    }
    function Be(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function Ye(n) {
      var a = n.return;
      a && a.call(n);
    }
    function be(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === m || a !== m)
        return a;
      var s = n.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === n ? a : g;
    }
    function Ct() {
      var n;
      !b(X) && typeof t.Reflect < "u" && !(X in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = kt(t.Reflect));
      var a, s, u, g = new U(), k = {
        registerProvider: z,
        getProvider: p,
        setProvider: f
      };
      return k;
      function z(y) {
        if (!Object.isExtensible(k))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === y:
            break;
          case b(a):
            a = y;
            break;
          case a === y:
            break;
          case b(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            u === void 0 && (u = new N()), u.add(y);
            break;
        }
      }
      function $(y, w) {
        if (!b(a)) {
          if (a.isProviderFor(y, w))
            return a;
          if (!b(s)) {
            if (s.isProviderFor(y, w))
              return a;
            if (!b(u))
              for (var A = Ue(u); ; ) {
                var C = Be(A);
                if (!C)
                  return;
                var j = Ve(C);
                if (j.isProviderFor(y, w))
                  return Ye(A), j;
              }
          }
        }
        if (!b(n) && n.isProviderFor(y, w))
          return n;
      }
      function p(y, w) {
        var A = g.get(y), C;
        return b(A) || (C = A.get(w)), b(C) && (C = $(y, w), b(C) || (b(A) && (A = new L(), g.set(y, A)), A.set(w, C))), C;
      }
      function c(y) {
        if (b(y))
          throw new TypeError();
        return a === y || s === y || !b(u) && u.has(y);
      }
      function f(y, w, A) {
        if (!c(A))
          throw new Error("Metadata provider not registered.");
        var C = p(y, w);
        if (C !== A) {
          if (!b(C))
            return !1;
          var j = g.get(y);
          b(j) && (j = new L(), g.set(y, j)), j.set(w, A);
        }
        return !0;
      }
    }
    function Mt() {
      var n;
      return !b(X) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[X]), b(n) && (n = Ct()), !b(X) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, X, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function zt(n) {
      var a = new U(), s = {
        isProviderFor: function(c, f) {
          var y = a.get(c);
          return b(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: z,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: k,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: p
      };
      return de.registerProvider(s), s;
      function u(c, f, y) {
        var w = a.get(c), A = !1;
        if (b(w)) {
          if (!y)
            return;
          w = new L(), a.set(c, w), A = !0;
        }
        var C = w.get(f);
        if (b(C)) {
          if (!y)
            return;
          if (C = new L(), w.set(f, C), !n.setProvider(c, f, s))
            throw w.delete(f), A && a.delete(c), new Error("Wrong provider for target.");
        }
        return C;
      }
      function g(c, f, y) {
        var w = u(
          f,
          y,
          /*Create*/
          !1
        );
        return b(w) ? !1 : Ne(w.has(c));
      }
      function k(c, f, y) {
        var w = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(c);
      }
      function z(c, f, y, w) {
        var A = u(
          y,
          w,
          /*Create*/
          !0
        );
        A.set(c, f);
      }
      function $(c, f) {
        var y = [], w = u(
          c,
          f,
          /*Create*/
          !1
        );
        if (b(w))
          return y;
        for (var A = w.keys(), C = Ue(A), j = 0; ; ) {
          var We = Be(C);
          if (!We)
            return y.length = j, y;
          var jt = Ve(We);
          try {
            y[j] = jt;
          } catch (Dt) {
            try {
              Ye(C);
            } finally {
              throw Dt;
            }
          }
          j++;
        }
      }
      function p(c, f, y) {
        var w = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(c))
          return !1;
        if (w.size === 0) {
          var A = a.get(f);
          b(A) || (A.delete(y), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function kt(n) {
      var a = n.defineMetadata, s = n.hasOwnMetadata, u = n.getOwnMetadata, g = n.getOwnMetadataKeys, k = n.deleteMetadata, z = new U(), $ = {
        isProviderFor: function(p, c) {
          var f = z.get(p);
          return !b(f) && f.has(c) ? !0 : g(p, c).length ? (b(f) && (f = new N(), z.set(p, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: k
      };
      return $;
    }
    function ee(n, a, s) {
      var u = de.getProvider(n, a);
      if (!b(u))
        return u;
      if (s) {
        if (de.setProvider(n, a, Te))
          return Te;
        throw new Error("Illegal state.");
      }
    }
    function It() {
      var n = {}, a = [], s = (
        /** @class */
        function() {
          function $(p, c, f) {
            this._index = 0, this._keys = p, this._values = c, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[d] = function() {
            return this;
          }, $.prototype.next = function() {
            var p = this._index;
            if (p >= 0 && p < this._keys.length) {
              var c = this._selector(this._keys[p], this._values[p]);
              return p + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(p) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), p;
          }, $.prototype.return = function(p) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: p, done: !0 };
          }, $;
        }()
      ), u = (
        /** @class */
        function() {
          function $() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty($.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), $.prototype.has = function(p) {
            return this._find(
              p,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(p) {
            var c = this._find(
              p,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, $.prototype.set = function(p, c) {
            var f = this._find(
              p,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, $.prototype.delete = function(p) {
            var c = this._find(
              p,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, y = c + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ge(p, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, $.prototype.values = function() {
            return new s(this._keys, this._values, k);
          }, $.prototype.entries = function() {
            return new s(this._keys, this._values, z);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[d] = function() {
            return this.entries();
          }, $.prototype._find = function(p, c) {
            if (!ge(this._cacheKey, p)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ge(this._keys[f], p)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(p), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return u;
      function g($, p) {
        return $;
      }
      function k($, p) {
        return p;
      }
      function z($, p) {
        return [$, p];
      }
    }
    function Lt() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new L();
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
          }, a.prototype[d] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function Nt() {
      var n = 16, a = _.create(), s = u();
      return (
        /** @class */
        function() {
          function p() {
            this._key = u();
          }
          return p.prototype.has = function(c) {
            var f = g(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? _.has(f, this._key) : !1;
          }, p.prototype.get = function(c) {
            var f = g(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? _.get(f, this._key) : void 0;
          }, p.prototype.set = function(c, f) {
            var y = g(
              c,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, p.prototype.delete = function(c) {
            var f = g(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, p.prototype.clear = function() {
            this._key = u();
          }, p;
        }()
      );
      function u() {
        var p;
        do
          p = "@@WeakMap@@" + $();
        while (_.has(a, p));
        return a[p] = !0, p;
      }
      function g(p, c) {
        if (!r.call(p, s)) {
          if (!c)
            return;
          Object.defineProperty(p, s, { value: _.create() });
        }
        return p[s];
      }
      function k(p, c) {
        for (var f = 0; f < c; ++f)
          p[f] = Math.random() * 255 | 0;
        return p;
      }
      function z(p) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(p);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : k(c, p), c;
        }
        return k(new Array(p), p);
      }
      function $() {
        var p = z(n);
        p[6] = p[6] & 79 | 64, p[8] = p[8] & 191 | 128;
        for (var c = "", f = 0; f < n; ++f) {
          var y = p[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function me(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Fe || (Fe = {}));
function Vt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Bt(i) {
  return function(e) {
    if (Vt(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${i.elementSelector}-${i.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function Yt(i) {
  return Bt(i);
}
function Wt(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ge(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, h = this.shadowRoot;
        if (!h) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const _ = new CSSStyleSheet(), m = (x = l.sheet) == null ? void 0 : x.cssRules;
          m && (Array.from(m).forEach((L) => _.insertRule(L.cssText)), h.adoptedStyleSheets = [...h.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          h.appendChild(_);
        }
        d.forEach((_) => {
          const m = _.cloneNode(!0);
          h.appendChild(m);
        });
      }
    }
    return t;
  };
}
function Gt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(i) {
  return function(e, t) {
    try {
      Gt(i);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (i.fieldMappings = i.fieldMappings ?? t);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function S(i) {
  return qt(i);
}
var T;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker";
})(T || (T = {}));
var P;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(P || (P = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe = globalThis, Pe = pe.ShadowRoot && (pe.ShadyCSS === void 0 || pe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Oe = Symbol(), Xe = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Pe && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Xe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Xe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (i) => new lt(typeof i == "string" ? i : i + "", void 0, Oe), dt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, o, l) => r + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[l + 1], i[0]);
  return new lt(t, i, Oe);
}, Xt = (i, e) => {
  if (Pe) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), o = pe.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = t.cssText, i.appendChild(r);
  }
}, Ze = Pe ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ft(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Jt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Kt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, Y = globalThis, Je = Y.trustedTypes, rr = Je ? Je.emptyScript : "", _e = Y.reactiveElementPolyfillSupport, re = (i, e) => i, ce = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? rr : null;
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
} }, Se = (i, e) => !Zt(i, e), Qe = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Y.litPropertyMetadata ?? (Y.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(e, r, t);
      o !== void 0 && Jt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: o, set: l } = Qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: o, set(d) {
      const v = o == null ? void 0 : o.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, v, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, r = [...Kt(t), ...er(t)];
      for (const o of r) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, o] of t) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const o = this._$Eu(t, r);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const o of r) t.unshift(Ze(o));
    } else e !== void 0 && t.push(Ze(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Xt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var l;
    const r = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const d = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ce).toAttribute(t, r.type);
      this._$Em = e, d == null ? this.removeAttribute(o) : this.setAttribute(o, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const r = this.constructor, o = r._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const v = r.getPropertyOptions(o), h = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : ce;
      this._$Em = o;
      const x = h.fromAttribute(t, v.type);
      this[o] = x ?? ((d = this._$Ej) == null ? void 0 : d.get(o)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, o = !1, l) {
    var d;
    if (e !== void 0) {
      const v = this.constructor;
      if (o === !1 && (l = this[e]), r ?? (r = v.getPropertyOptions(e)), !((r.hasChanged ?? Se)(l, t) || r.useDefault && r.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(v._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: o, wrapped: l }, d) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? t ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, d] of o) {
        const { wrapped: v } = d, h = this[l];
        v !== !0 || this._$AL.has(l) || h === void 0 || this.C(l, void 0, d, h);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((o) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[re("elementProperties")] = /* @__PURE__ */ new Map(), J[re("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: J }), (Y.reactiveElementVersions ?? (Y.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Ke = (i) => i, he = ie.trustedTypes, et = he ? he.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ut = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, pt = "?" + B, ir = `<${pt}>`, F = document, oe = () => F.createComment(""), ae = (i) => i === null || typeof i != "object" && typeof i != "function", Ae = Array.isArray, nr = (i) => Ae(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", $e = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, rt = />/g, W = RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), it = /'/g, nt = /"/g, ct = /^(?:script|style|textarea|title)$/i, or = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), V = or(1), Q = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), ot = /* @__PURE__ */ new WeakMap(), G = F.createTreeWalker(F, 129);
function ht(i, e) {
  if (!Ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(e) : e;
}
const ar = (i, e) => {
  const t = i.length - 1, r = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = te;
  for (let v = 0; v < t; v++) {
    const h = i[v];
    let x, _, m = -1, L = 0;
    for (; L < h.length && (d.lastIndex = L, _ = d.exec(h), _ !== null); ) L = d.lastIndex, d === te ? _[1] === "!--" ? d = tt : _[1] !== void 0 ? d = rt : _[2] !== void 0 ? (ct.test(_[2]) && (o = RegExp("</" + _[2], "g")), d = W) : _[3] !== void 0 && (d = W) : d === W ? _[0] === ">" ? (d = o ?? te, m = -1) : _[1] === void 0 ? m = -2 : (m = d.lastIndex - _[2].length, x = _[1], d = _[3] === void 0 ? W : _[3] === '"' ? nt : it) : d === nt || d === it ? d = W : d === tt || d === rt ? d = te : (d = W, o = void 0);
    const N = d === W && i[v + 1].startsWith("/>") ? " " : "";
    l += d === te ? h + ir : m >= 0 ? (r.push(x), h.slice(0, m) + ut + h.slice(m) + B + N) : h + B + (m === -2 ? v : N);
  }
  return [ht(i, l + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class se {
  constructor({ strings: e, _$litType$: t }, r) {
    let o;
    this.parts = [];
    let l = 0, d = 0;
    const v = e.length - 1, h = this.parts, [x, _] = ar(e, t);
    if (this.el = se.createElement(x, r), G.currentNode = this.el.content, t === 2 || t === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (o = G.nextNode()) !== null && h.length < v; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const m of o.getAttributeNames()) if (m.endsWith(ut)) {
          const L = _[d++], N = o.getAttribute(m).split(B), U = /([.?@])?(.*)/.exec(L);
          h.push({ type: 1, index: l, name: U[2], strings: N, ctor: U[1] === "." ? lr : U[1] === "?" ? dr : U[1] === "@" ? ur : ye }), o.removeAttribute(m);
        } else m.startsWith(B) && (h.push({ type: 6, index: l }), o.removeAttribute(m));
        if (ct.test(o.tagName)) {
          const m = o.textContent.split(B), L = m.length - 1;
          if (L > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let N = 0; N < L; N++) o.append(m[N], oe()), G.nextNode(), h.push({ type: 2, index: ++l });
            o.append(m[L], oe());
          }
        }
      } else if (o.nodeType === 8) if (o.data === pt) h.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = o.data.indexOf(B, m + 1)) !== -1; ) h.push({ type: 7, index: l }), m += B.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = F.createElement("template");
    return r.innerHTML = e, r;
  }
}
function K(i, e, t = i, r) {
  var d, v;
  if (e === Q) return e;
  let o = r !== void 0 ? (d = t._$Co) == null ? void 0 : d[r] : t._$Cl;
  const l = ae(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((v = o == null ? void 0 : o._$AO) == null || v.call(o, !1), l === void 0 ? o = void 0 : (o = new l(i), o._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = o : t._$Cl = o), o !== void 0 && (e = K(i, o._$AS(i, e.values), o, r)), e;
}
class sr {
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
    const { el: { content: t }, parts: r } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    G.currentNode = o;
    let l = G.nextNode(), d = 0, v = 0, h = r[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let x;
        h.type === 2 ? x = new le(l, l.nextSibling, this, e) : h.type === 1 ? x = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (x = new pr(l, this, e)), this._$AV.push(x), h = r[++v];
      }
      d !== (h == null ? void 0 : h.index) && (l = G.nextNode(), d++);
    }
    return G.currentNode = F, o;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, o) {
    this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = K(this, e, t), ae(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== I && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, o = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = se.createElement(ht(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const d = new sr(o, this), v = d.u(this.options);
      d.p(t), this.T(v), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = ot.get(e.strings);
    return t === void 0 && ot.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, o = 0;
    for (const l of e) o === t.length ? t.push(r = new le(this.O(oe()), this.O(oe()), this, this.options)) : r = t[o], r._$AI(l), o++;
    o < t.length && (this._$AR(r && r._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ke(e).nextSibling;
      Ke(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ye {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, o, l) {
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = I;
  }
  _$AI(e, t = this, r, o) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = K(this, e, t, 0), d = !ae(e) || e !== this._$AH && e !== Q, d && (this._$AH = e);
    else {
      const v = e;
      let h, x;
      for (e = l[0], h = 0; h < l.length - 1; h++) x = K(this, v[r + h], t, h), x === Q && (x = this._$AH[h]), d || (d = !ae(x) || x !== this._$AH[h]), x === I ? e = I : e !== I && (e += (x ?? "") + l[h + 1]), this._$AH[h] = x;
    }
    d && !o && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends ye {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class dr extends ye {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class ur extends ye {
  constructor(e, t, r, o, l) {
    super(e, t, r, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? I) === Q) return;
    const r = this._$AH, o = e === I && r !== I || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== I && (r === I || o);
    o && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class pr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const we = ie.litHtmlPolyfillSupport;
we == null || we(se, le), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const cr = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = r._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = o = new le(e.insertBefore(oe(), l), l, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class ne extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = cr(t, this.renderRoot, this.renderOptions);
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
    return Q;
  }
}
var st;
ne._$litElement$ = !0, ne.finalized = !0, (st = q.litElementHydrateSupport) == null || st.call(q, { LitElement: ne });
const Ee = q.litElementPolyfillSupport;
Ee == null || Ee({ LitElement: ne });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Se }, yr = (i = fr, e, t) => {
  const { kind: r, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), l.set(t.name, i), r === "accessor") {
    const { name: d } = t;
    return { set(v) {
      const h = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(d, h, i, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(d, void 0, i, v), v;
    } };
  }
  if (r === "setter") {
    const { name: d } = t;
    return function(v) {
      const h = this[d];
      e.call(this, v), this.requestUpdate(d, h, i, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function R(i) {
  return (e, t) => typeof t == "object" ? yr(i, e, t) : ((r, o, l) => {
    const d = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, r), d ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(i, e, t);
}
var vr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, O = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? gr(e, t) : e, l = i.length - 1, d; l >= 0; l--)
    (d = i[l]) && (o = (r ? d(e, t, o) : d(o)) || o);
  return r && o && vr(e, t, o), o;
};
const fe = class fe extends ne {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.enableHeader = !1, this.label = "Panel Header", this.icon = "📄", this.expandable = !0, this.expanded = !0, this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  get onExpand() {
    return "expand";
  }
  get onCollapse() {
    return "collapse";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
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
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return V``;
    const e = this.overridePrefix, t = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, r = {
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
    let o = "";
    return Object.entries(t).forEach(([l, d]) => {
      const v = this.responsiveProps[l];
      if (!v) return;
      let h = "";
      Object.entries(v).forEach(([x, _]) => {
        const m = r[x];
        m && (h += `--${e}-${m}-override: ${_};
`);
      }), h && (o += `${d} {
  :host {
    ${h}  }
}
`);
    }), o ? V`<style>${o}</style>` : V``;
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
    const e = this.overridePrefix, t = `var(--${e}-gap-override, ${this.gap || "0px"})`, r = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${r}) - ((${t} * (${r} - 1)) / ${r}))`;
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!window.parent) return;
    const t = e.currentTarget.getBoundingClientRect(), r = (e.clientX - t.left) / t.width, o = (e.clientY - t.top) / t.height;
    this.direction === "row" ? r < 0.3 ? this.activeEdge = "left" : r > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : o < 0.3 ? this.activeEdge = "top" : o > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.activeEdge = "none";
  }
  renderDropIndicators() {
    return V`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    `;
  }
  renderHeader() {
    return this.enableHeader ? V`
      <div class="zero-layout-header" @click=${this.toggleExpanded}>
        <span class="icon">${this.icon}</span>
        <span class="label">${this.label}</span>
        ${this.expandable ? V`<span class="chevron">▼</span>` : ""}
      </div>
    ` : V``;
  }
};
fe.slots = [], fe.styles = dt`
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

    .zero-layout-content {
      min-height: 0;
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
let E = fe;
O([
  R({ type: Object, attribute: "responsive-props" }),
  S({
    attributeType: P.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], E.prototype, "responsiveProps", 2);
O([
  R({ type: String })
], E.prototype, "activeEdge", 2);
O([
  R({ type: Boolean, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], E.prototype, "visible", 2);
O([
  R({ type: Number, reflect: !0, attribute: "z-index" }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], E.prototype, "zIndex", 2);
O([
  R({ type: Number, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], E.prototype, "opacity", 2);
O([
  R({ type: String, attribute: "custom-class" }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], E.prototype, "customClass", 2);
O([
  R({ type: Boolean, reflect: !0, attribute: "enable-header" }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
], E.prototype, "enableHeader", 2);
O([
  R({ type: String }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
], E.prototype, "label", 2);
O([
  R({ type: String }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
], E.prototype, "icon", 2);
O([
  R({ type: Boolean, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
], E.prototype, "expandable", 2);
O([
  R({ type: Boolean, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
], E.prototype, "expanded", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], E.prototype, "width", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], E.prototype, "height", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], E.prototype, "margin", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], E.prototype, "padding", 2);
O([
  S({
    attributeType: P.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], E.prototype, "onClick", 1);
O([
  S({
    attributeType: P.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
], E.prototype, "onExpand", 1);
O([
  S({
    attributeType: P.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
], E.prototype, "onCollapse", 1);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], E.prototype, "direction", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" }
    ]
  })
], E.prototype, "justify", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Stretch", value: "stretch" }
    ]
  })
], E.prototype, "align", 2);
O([
  R({ type: String, reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], E.prototype, "gap", 2);
O([
  R({ type: Number, reflect: !0, attribute: "items-per-row" }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Items Per Row",
    fieldMappings: "itemsPerRow",
    categoryLabel: "Layout"
  })
], E.prototype, "itemsPerRow", 2);
O([
  R({ type: String, attribute: "background-color", reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], E.prototype, "backgroundColor", 2);
O([
  R({ type: String, attribute: "border-radius", reflect: !0 }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], E.prototype, "borderRadius", 2);
O([
  R({ type: String, reflect: !0, attribute: "elevation" }),
  S({
    attributeType: P.PROPERTY,
    uiComponentType: T.DROPDOWN,
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
], E.prototype, "elevation", 2);
O([
  S({
    attributeType: P.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], E.prototype, "show", 1);
O([
  S({
    attributeType: P.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], E.prototype, "hide", 1);
O([
  S({
    attributeType: P.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
], E.prototype, "expand", 1);
O([
  S({
    attributeType: P.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
], E.prototype, "collapse", 1);
O([
  S({
    attributeType: P.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
], E.prototype, "toggleExpanded", 1);
var br = Object.getOwnPropertyDescriptor, mr = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? br(e, t) : e, l = i.length - 1, d; l >= 0; l--)
    (d = i[l]) && (o = d(o) || o);
  return o;
};
const at = {
  kind: "section",
  slots: [
    { id: "default", label: "Renderer Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='padding:24px;border:2px dashed rgba(16, 185, 129, 0.25);border-radius:12px;background:rgba(240, 253, 244, 0.45);min-height:160px;display:flex;flex-direction:column;gap:12px;width:100%;box-sizing:border-box;'>",
    "<span style='font-size:0.65rem;color:#10b981;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;'>{{display:label}}</span>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Renderer", "Layout"],
  emptyText: "Drop components here to render"
};
let xe = class extends E {
  get overridePrefix() {
    return "zero-nrenderer";
  }
  static getStudioTemplate(i) {
    var _;
    if (!i) return at;
    H(i.studio.display.label || "Nrenderer");
    const e = ((_ = i.studio.props) == null ? void 0 : _.direction) || "column", t = H(i.props.justify || "flex-start"), r = H(i.props.align || "stretch"), o = H(i.props.gap || "16px"), l = H(i.props.padding || "16px"), d = H(i.props.backgroundColor || "transparent"), v = H(i.props.borderColor || "transparent"), h = H(i.props.borderWidth || "0px"), x = H(i.props.borderRadius || "0px");
    return {
      ...at,
      templateHtml: [
        `<div class="studio-nrenderer-container" style="
          --zero-nrenderer-justify: ${t};
          --zero-nrenderer-align: ${r};
          --zero-nrenderer-gap: ${o};
          --zero-nrenderer-padding: ${l};
          --zero-nrenderer-bg: ${d};
          --zero-nrenderer-border-color: ${v};
          --zero-nrenderer-border-width: ${h};
          --zero-nrenderer-radius: ${x};

          display: flex;
          flex-direction: ${e};
          justify-content: var(--zero-nrenderer-justify);
          align-items: var(--zero-nrenderer-align);
          gap: var(--zero-nrenderer-gap);
          padding: var(--zero-nrenderer-padding);
          background-color: var(--zero-nrenderer-bg);
          border: var(--zero-nrenderer-border-width) solid var(--zero-nrenderer-border-color);
          border-radius: var(--zero-nrenderer-radius);
          box-sizing: border-box;
          min-height: 160px;
          width: 100%;
        ">`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  render() {
    return V`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content">
              <div class="nrenderer-content">
                <slot name="default"></slot>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
xe.styles = [
  E.styles,
  dt`
      .nrenderer-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: var(--zero-p-direction, column);
      }
    `
];
xe = mr([
  Yt({
    name: "nrenderer",
    version: "1.0.0",
    title: "Nrenderer",
    elementSelector: "zero-nrenderer",
    group: "Layout",
    iconName: "profile-icon.png"
  }),
  Wt(),
  hr("zero-nrenderer")
], xe);
function H(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  xe as Nrenderer,
  at as studioTemplate
};
