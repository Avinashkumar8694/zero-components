var Ut = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ze = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = s(r);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(f, E) {
      return function(w, b) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: b }), E && E(w, b);
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
    function y() {
      return u() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !y && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
      },
      has: E ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: E ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, b = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), H = typeof WeakMap == "function" ? WeakMap : Nt(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, X = Ot(), Ae = Ct(X);
    function ht(n, a, o, d) {
      if (m(o)) {
        if (!Ve(n))
          throw new TypeError();
        if (!Ie(a))
          throw new TypeError();
        return _t(n, a);
      } else {
        if (!Ve(n))
          throw new TypeError();
        if (!T(a))
          throw new TypeError();
        if (!T(d) && !m(d) && !q(d))
          throw new TypeError();
        return q(d) && (d = void 0), o = D(o), wt(n, a, o, d);
      }
    }
    e("decorate", ht);
    function ct(n, a) {
      function o(d, g) {
        if (!T(d))
          throw new TypeError();
        if (!m(g) && !Tt(g))
          throw new TypeError();
        Ce(n, a, d, g);
      }
      return o;
    }
    e("metadata", ct);
    function pt(n, a, o, d) {
      if (!T(o))
        throw new TypeError();
      return m(d) || (d = D(d)), Ce(n, a, o, d);
    }
    e("defineMetadata", pt);
    function ft(n, a, o) {
      if (!T(a))
        throw new TypeError();
      return m(o) || (o = D(o)), Te(n, a, o);
    }
    e("hasMetadata", ft);
    function vt(n, a, o) {
      if (!T(a))
        throw new TypeError();
      return m(o) || (o = D(o)), fe(n, a, o);
    }
    e("hasOwnMetadata", vt);
    function yt(n, a, o) {
      if (!T(a))
        throw new TypeError();
      return m(o) || (o = D(o)), Pe(n, a, o);
    }
    e("getMetadata", yt);
    function gt(n, a, o) {
      if (!T(a))
        throw new TypeError();
      return m(o) || (o = D(o)), Oe(n, a, o);
    }
    e("getOwnMetadata", gt);
    function mt(n, a) {
      if (!T(n))
        throw new TypeError();
      return m(a) || (a = D(a)), Me(n, a);
    }
    e("getMetadataKeys", mt);
    function bt(n, a) {
      if (!T(n))
        throw new TypeError();
      return m(a) || (a = D(a)), Re(n, a);
    }
    e("getOwnMetadataKeys", bt);
    function $t(n, a, o) {
      if (!T(a))
        throw new TypeError();
      if (m(o) || (o = D(o)), !T(a))
        throw new TypeError();
      m(o) || (o = D(o));
      var d = ee(
        a,
        o,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(n, a, o);
    }
    e("deleteMetadata", $t);
    function _t(n, a) {
      for (var o = n.length - 1; o >= 0; --o) {
        var d = n[o], g = d(a);
        if (!m(g) && !q(g)) {
          if (!Ie(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function wt(n, a, o, d) {
      for (var g = n.length - 1; g >= 0; --g) {
        var M = n[g], P = M(a, o, d);
        if (!m(P) && !q(P)) {
          if (!T(P))
            throw new TypeError();
          d = P;
        }
      }
      return d;
    }
    function Te(n, a, o) {
      var d = fe(n, a, o);
      if (d)
        return !0;
      var g = ye(a);
      return q(g) ? !1 : Te(n, g, o);
    }
    function fe(n, a, o) {
      var d = ee(
        a,
        o,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(n, a, o));
    }
    function Pe(n, a, o) {
      var d = fe(n, a, o);
      if (d)
        return Oe(n, a, o);
      var g = ye(a);
      if (!q(g))
        return Pe(n, g, o);
    }
    function Oe(n, a, o) {
      var d = ee(
        a,
        o,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(n, a, o);
    }
    function Ce(n, a, o, d) {
      var g = ee(
        o,
        d,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(n, a, o, d);
    }
    function Me(n, a) {
      var o = Re(n, a), d = ye(n);
      if (d === null)
        return o;
      var g = Me(d, a);
      if (g.length <= 0)
        return o;
      if (o.length <= 0)
        return g;
      for (var M = new C(), P = [], $ = 0, h = o; $ < h.length; $++) {
        var c = h[$], p = M.has(c);
        p || (M.add(c), P.push(c));
      }
      for (var v = 0, _ = g; v < _.length; v++) {
        var c = _[v], p = M.has(c);
        p || (M.add(c), P.push(c));
      }
      return P;
    }
    function Re(n, a) {
      var o = ee(
        n,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(n, a) : [];
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
    function m(n) {
      return n === void 0;
    }
    function q(n) {
      return n === null;
    }
    function Et(n) {
      return typeof n == "symbol";
    }
    function T(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function xt(n, a) {
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
      var o = "string", d = Ue(n, u);
      if (d !== void 0) {
        var g = d.call(n, o);
        if (T(g))
          throw new TypeError();
        return g;
      }
      return St(n);
    }
    function St(n, a) {
      var o, d;
      {
        var g = n.toString;
        if (ue(g)) {
          var d = g.call(n);
          if (!T(d))
            return d;
        }
        var o = n.valueOf;
        if (ue(o)) {
          var d = o.call(n);
          if (!T(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function At(n) {
      return "" + n;
    }
    function D(n) {
      var a = xt(n);
      return Et(a) ? a : At(a);
    }
    function Ve(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ue(n) {
      return typeof n == "function";
    }
    function Ie(n) {
      return typeof n == "function";
    }
    function Tt(n) {
      switch (ke(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(n, a) {
      return n === a || n !== n && a !== a;
    }
    function Ue(n, a) {
      var o = n[a];
      if (o != null) {
        if (!ue(o))
          throw new TypeError();
        return o;
      }
    }
    function He(n) {
      var a = Ue(n, l);
      if (!ue(a))
        throw new TypeError();
      var o = a.call(n);
      if (!T(o))
        throw new TypeError();
      return o;
    }
    function je(n) {
      return n.value;
    }
    function De(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function Le(n) {
      var a = n.return;
      a && a.call(n);
    }
    function ye(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === b || a !== b)
        return a;
      var o = n.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var g = d.constructor;
      return typeof g != "function" || g === n ? a : g;
    }
    function Pt() {
      var n;
      !m(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Mt(t.Reflect));
      var a, o, d, g = new H(), M = {
        registerProvider: P,
        getProvider: h,
        setProvider: p
      };
      return M;
      function P(v) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            d === void 0 && (d = new C()), d.add(v);
            break;
        }
      }
      function $(v, _) {
        if (!m(a)) {
          if (a.isProviderFor(v, _))
            return a;
          if (!m(o)) {
            if (o.isProviderFor(v, _))
              return a;
            if (!m(d))
              for (var x = He(d); ; ) {
                var A = De(x);
                if (!A)
                  return;
                var j = je(A);
                if (j.isProviderFor(v, _))
                  return Le(x), j;
              }
          }
        }
        if (!m(n) && n.isProviderFor(v, _))
          return n;
      }
      function h(v, _) {
        var x = g.get(v), A;
        return m(x) || (A = x.get(_)), m(A) && (A = $(v, _), m(A) || (m(x) && (x = new S(), g.set(v, x)), x.set(_, A))), A;
      }
      function c(v) {
        if (m(v))
          throw new TypeError();
        return a === v || o === v || !m(d) && d.has(v);
      }
      function p(v, _, x) {
        if (!c(x))
          throw new Error("Metadata provider not registered.");
        var A = h(v, _);
        if (A !== x) {
          if (!m(A))
            return !1;
          var j = g.get(v);
          m(j) && (j = new S(), g.set(v, j)), j.set(_, x);
        }
        return !0;
      }
    }
    function Ot() {
      var n;
      return !m(L) && T(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[L]), m(n) && (n = Pt()), !m(L) && T(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Ct(n) {
      var a = new H(), o = {
        isProviderFor: function(c, p) {
          var v = a.get(c);
          return m(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: h
      };
      return X.registerProvider(o), o;
      function d(c, p, v) {
        var _ = a.get(c), x = !1;
        if (m(_)) {
          if (!v)
            return;
          _ = new S(), a.set(c, _), x = !0;
        }
        var A = _.get(p);
        if (m(A)) {
          if (!v)
            return;
          if (A = new S(), _.set(p, A), !n.setProvider(c, p, o))
            throw _.delete(p), x && a.delete(c), new Error("Wrong provider for target.");
        }
        return A;
      }
      function g(c, p, v) {
        var _ = d(
          p,
          v,
          /*Create*/
          !1
        );
        return m(_) ? !1 : Ne(_.has(c));
      }
      function M(c, p, v) {
        var _ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(c);
      }
      function P(c, p, v, _) {
        var x = d(
          v,
          _,
          /*Create*/
          !0
        );
        x.set(c, p);
      }
      function $(c, p) {
        var v = [], _ = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (m(_))
          return v;
        for (var x = _.keys(), A = He(x), j = 0; ; ) {
          var Be = De(A);
          if (!Be)
            return v.length = j, v;
          var Vt = je(Be);
          try {
            v[j] = Vt;
          } catch (It) {
            try {
              Le(A);
            } finally {
              throw It;
            }
          }
          j++;
        }
      }
      function h(c, p, v) {
        var _ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (m(_) || !_.delete(c))
          return !1;
        if (_.size === 0) {
          var x = a.get(p);
          m(x) || (x.delete(v), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function Mt(n) {
      var a = n.defineMetadata, o = n.hasOwnMetadata, d = n.getOwnMetadata, g = n.getOwnMetadataKeys, M = n.deleteMetadata, P = new H(), $ = {
        isProviderFor: function(h, c) {
          var p = P.get(h);
          return !m(p) && p.has(c) ? !0 : g(h, c).length ? (m(p) && (p = new C(), P.set(h, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: M
      };
      return $;
    }
    function ee(n, a, o) {
      var d = X.getProvider(n, a);
      if (!m(d))
        return d;
      if (o) {
        if (X.setProvider(n, a, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var n = {}, a = [], o = (
        /** @class */
        function() {
          function $(h, c, p) {
            this._index = 0, this._keys = h, this._values = c, this._selector = p;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[l] = function() {
            return this;
          }, $.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), h;
          }, $.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: h, done: !0 };
          }, $;
        }()
      ), d = (
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
          }), $.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, $.prototype.set = function(h, c) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, $.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, v = c + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ve(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, g);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, M);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, P);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[l] = function() {
            return this.entries();
          }, $.prototype._find = function(h, c) {
            if (!ve(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ve(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function g($, h) {
        return $;
      }
      function M($, h) {
        return h;
      }
      function P($, h) {
        return [$, h];
      }
    }
    function kt() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new S();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
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
      return n;
    }
    function Nt() {
      var n = 16, a = w.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var p = g(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, h.prototype.get = function(c) {
            var p = g(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, h.prototype.set = function(c, p) {
            var v = g(
              c,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, h.prototype.delete = function(c) {
            var p = g(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + $();
        while (w.has(a, h));
        return a[h] = !0, h;
      }
      function g(h, c) {
        if (!i.call(h, o)) {
          if (!c)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function M(h, c) {
        for (var p = 0; p < c; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function P(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : M(c, h), c;
        }
        return M(new Array(h), h);
      }
      function $() {
        var h = P(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", p = 0; p < n; ++p) {
          var v = h[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), v < 16 && (c += "0"), c += v.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ge(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(We || (We = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Dt(r) {
  return function(e) {
    if (jt(r)) {
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
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, u);
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
function Lt(r) {
  return Dt(r);
}
function Bt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        ze(this, "_stylesApplied", !1);
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
        var E;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && y) {
          const w = new CSSStyleSheet(), b = (E = u.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((S) => w.insertRule(S.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (u) {
          const w = u.cloneNode(!0);
          f.appendChild(w);
        }
        l.forEach((w) => {
          const b = w.cloneNode(!0);
          f.appendChild(b);
        });
      }
    }
    return t;
  };
}
function zt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(r) {
  return function(e, t) {
    try {
      zt(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function I(r) {
  return Gt(r);
}
var V;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(V || (V = {}));
var k;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, we = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Wt = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ee), Yt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, u) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[u + 1], r[0]);
  return new at(t, r, Ee);
}, Ft = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = de.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, Fe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, z = globalThis, Xe = z.trustedTypes, er = Xe ? Xe.emptyScript : "", me = z.reactiveElementPolyfillSupport, re = (r, e) => r, he = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? er : null;
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
} }, xe = (r, e) => !Xt(r, e), qe = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: xe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: u } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: s, set(l) {
      const y = s == null ? void 0 : s.call(this);
      u == null || u.call(this, l), this.requestUpdate(e, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, i = [...Jt(t), ...Qt(t)];
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
      for (const s of i) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
    var u;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const l = (((u = i.converter) == null ? void 0 : u.toAttribute) !== void 0 ? i.converter : he).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u, l;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const y = i.getPropertyOptions(s), f = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((u = y.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? y.converter : he;
      this._$Em = s;
      const E = f.fromAttribute(t, y.type);
      this[s] = E ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, s = !1, u) {
    var l;
    if (e !== void 0) {
      const y = this.constructor;
      if (s === !1 && (u = this[e]), i ?? (i = y.getPropertyOptions(e)), !((i.hasChanged ?? xe)(u, t) || i.useDefault && i.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(y._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: u }, l) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), u !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) {
        const { wrapped: y } = l, f = this[u];
        y !== !0 || this._$AL.has(u) || f === void 0 || this.C(u, void 0, l, f);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[re("elementProperties")] = /* @__PURE__ */ new Map(), J[re("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: J }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Ze = (r) => r, ce = ie.trustedTypes, Je = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ot = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + B, tr = `<${lt}>`, F = document, se = () => F.createComment(""), ae = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, rr = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, G = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ut = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Z = ir(1), Q = Symbol.for("lit-noChange"), R = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function dt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, i = [];
  let s, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = te;
  for (let y = 0; y < t; y++) {
    const f = r[y];
    let E, w, b = -1, S = 0;
    for (; S < f.length && (l.lastIndex = S, w = l.exec(f), w !== null); ) S = l.lastIndex, l === te ? w[1] === "!--" ? l = Qe : w[1] !== void 0 ? l = Ke : w[2] !== void 0 ? (ut.test(w[2]) && (s = RegExp("</" + w[2], "g")), l = G) : w[3] !== void 0 && (l = G) : l === G ? w[0] === ">" ? (l = s ?? te, b = -1) : w[1] === void 0 ? b = -2 : (b = l.lastIndex - w[2].length, E = w[1], l = w[3] === void 0 ? G : w[3] === '"' ? tt : et) : l === tt || l === et ? l = G : l === Qe || l === Ke ? l = te : (l = G, s = void 0);
    const C = l === G && r[y + 1].startsWith("/>") ? " " : "";
    u += l === te ? f + tr : b >= 0 ? (i.push(E), f.slice(0, b) + ot + f.slice(b) + B + C) : f + B + (b === -2 ? y : C);
  }
  return [dt(r, u + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class oe {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const y = e.length - 1, f = this.parts, [E, w] = nr(e, t);
    if (this.el = oe.createElement(E, i), W.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = W.nextNode()) !== null && f.length < y; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(ot)) {
          const S = w[l++], C = s.getAttribute(b).split(B), H = /([.?@])?(.*)/.exec(S);
          f.push({ type: 1, index: u, name: H[2], strings: C, ctor: H[1] === "." ? ar : H[1] === "?" ? or : H[1] === "@" ? lr : pe }), s.removeAttribute(b);
        } else b.startsWith(B) && (f.push({ type: 6, index: u }), s.removeAttribute(b));
        if (ut.test(s.tagName)) {
          const b = s.textContent.split(B), S = b.length - 1;
          if (S > 0) {
            s.textContent = ce ? ce.emptyScript : "";
            for (let C = 0; C < S; C++) s.append(b[C], se()), W.nextNode(), f.push({ type: 2, index: ++u });
            s.append(b[S], se());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) f.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(B, b + 1)) !== -1; ) f.push({ type: 7, index: u }), b += B.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const i = F.createElement("template");
    return i.innerHTML = e, i;
  }
}
function K(r, e, t = r, i) {
  var l, y;
  if (e === Q) return e;
  let s = i !== void 0 ? (l = t._$Co) == null ? void 0 : l[i] : t._$Cl;
  const u = ae(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((y = s == null ? void 0 : s._$AO) == null || y.call(s, !1), u === void 0 ? s = void 0 : (s = new u(r), s._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = K(r, s._$AS(r, e.values), s, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = s;
    let u = W.nextNode(), l = 0, y = 0, f = i[0];
    for (; f !== void 0; ) {
      if (l === f.index) {
        let E;
        f.type === 2 ? E = new le(u, u.nextSibling, this, e) : f.type === 1 ? E = new f.ctor(u, f.name, f.strings, this, e) : f.type === 6 && (E = new ur(u, this, e)), this._$AV.push(E), f = i[++y];
      }
      l !== (f == null ? void 0 : f.index) && (u = W.nextNode(), l++);
    }
    return W.currentNode = F, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = R, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = K(this, e, t), ae(e) ? e === R || e == null || e === "" ? (this._$AH !== R && this._$AR(), this._$AH = R) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== R && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = oe.createElement(dt(i.h, i.h[0]), this.options)), i);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(t);
    else {
      const l = new sr(s, this), y = l.u(this.options);
      l.p(t), this.T(y), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const u of e) s === t.length ? t.push(i = new le(this.O(se()), this.O(se()), this, this.options)) : i = t[s], i._$AI(u), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ze(e).nextSibling;
      Ze(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, u) {
    this.type = 1, this._$AH = R, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = u, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = R;
  }
  _$AI(e, t = this, i, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = K(this, e, t, 0), l = !ae(e) || e !== this._$AH && e !== Q, l && (this._$AH = e);
    else {
      const y = e;
      let f, E;
      for (e = u[0], f = 0; f < u.length - 1; f++) E = K(this, y[i + f], t, f), E === Q && (E = this._$AH[f]), l || (l = !ae(E) || E !== this._$AH[f]), E === R ? e = R : e !== R && (e += (E ?? "") + u[f + 1]), this._$AH[f] = E;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === R ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === R ? void 0 : e;
  }
}
class or extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== R);
  }
}
class lr extends pe {
  constructor(e, t, i, s, u) {
    super(e, t, i, s, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? R) === Q) return;
    const i = this._$AH, s = e === R && i !== R || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, u = e !== R && (i === R || s);
    s && this.element.removeEventListener(this.name, this, i), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const $e = ie.litHtmlPolyfillSupport;
$e == null || $e(oe, le), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new le(e.insertBefore(se(), u), u, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = dr(t, this.renderRoot, this.renderOptions);
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
ne._$litElement$ = !0, ne.finalized = !0, (st = Y.litElementHydrateSupport) == null || st.call(Y, { LitElement: ne });
const _e = Y.litElementPolyfillSupport;
_e == null || _e({ LitElement: ne });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: xe }, cr = (r = hr, e, t) => {
  const { kind: i, metadata: s } = t;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), u.set(t.name, r), i === "accessor") {
    const { name: l } = t;
    return { set(y) {
      const f = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(l, f, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(l, void 0, r, y), y;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(y) {
      const f = this[l];
      e.call(this, y), this.requestUpdate(l, f, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function U(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((i, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, i), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, N = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? fr(e, t) : e, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (s = (i ? l(e, t, s) : l(s)) || s);
  return i && s && pr(e, t, s), s;
};
const it = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:6px;'>{{display:label}}</div>",
    "<div style='height:4px;border-radius:2px;background:rgba(148,163,184,0.2);position:relative;'>",
    "<div style='position:absolute;left:20%;right:40%;height:100%;background:var(--uiv-primary-color,#6c63ff);border-radius:2px;'></div>",
    "</div>",
    "<div style='display:flex;justify-content:space-between;margin-top:4px;font-size:0.6rem;color:#94a3b8;'>",
    "<span>{{display:min}}</span><span>{{display:max}}</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Slider"]
};
function vr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let O = class extends ne {
  constructor() {
    super(...arguments), this.value = 50, this.min = 0, this.max = 100, this.step = 1, this.label = "Range Slider", this.unit = "", this.dualRange = !1, this.secondValue = 75, this.showTooltip = !1, this.showValueInputs = !1, this.showStepControls = !1, this.disabled = !1, this.errorMessage = "", this.showError = !1, this.showTooltipState = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = vr(r.studio.display.label || "Range Slider"), t = "var(--uiv-primary-color, #6c63ff)", i = "var(--uiv-surface-color, #ffffff)", s = "var(--uiv-border-color, rgba(148,163,184,0.15))", u = "var(--uiv-text-muted, #94a3b8)", l = r.studio.props || {}, y = Number(l.min) || 0, f = Number(l.max) || 100, E = Number(l.value) || 50, w = Number(l.secondValue) || 75, b = !!l.dualRange, S = f - y;
    let C = 0, H = 0;
    if (b) {
      const L = Math.min(E, w), X = Math.max(E, w);
      C = (L - y) / S * 100, H = 100 - (X - y) / S * 100;
    } else
      C = 0, H = 100 - (E - y) / S * 100;
    return {
      ...nt,
      templateHtml: [
        `<div style='padding:12px;border-radius:8px;border:1px solid ${s};background:${i};box-shadow:var(--uiv-shadow-depth, 0 1px 3px rgba(0,0,0,0.05));'>`,
        `<div style='font-size:0.75rem;color:${u};font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;'>${e}</div>`,
        "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.15);position:relative;margin:12px 0;'>",
        `<div style='position:absolute;left:${C}%;right:${H}%;height:100%;background:${t};border-radius:3px;box-shadow:var(--uiv-border-glow);'></div>`,
        `<div style='position:absolute;left:${b ? C : C + (100 - H)}%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:#ffffff;border:3px solid ${t};box-shadow:0 3px 6px rgba(0,0,0,0.2);'></div>`,
        b ? `<div style='position:absolute;left:${100 - H}%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:#ffffff;border:3px solid ${t};box-shadow:0 3px 6px rgba(0,0,0,0.2);'></div>` : "",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  getProgressWidth() {
    if (this.dualRange) {
      const r = Math.min(this.value, this.secondValue), e = Math.max(this.value, this.secondValue), t = this.max - this.min;
      return `${(e - r) / t * 100}%`;
    }
    return `${(this.value - this.min) / (this.max - this.min) * 100}%`;
  }
  getProgressLeft() {
    if (this.dualRange) {
      const r = Math.min(this.value, this.secondValue), e = this.max - this.min;
      return `${(r - this.min) / e * 100}%`;
    }
    return "0%";
  }
  formatValue(r) {
    return `${r}${this.unit}`;
  }
  handleSliderInput(r, e = !1) {
    const t = r.target, i = Number(t.value);
    e ? this.secondValue = i : this.value = i, this.dispatchChangeEvent();
  }
  handleValueInput(r, e = !1) {
    const t = r.target;
    let i = Number(t.value);
    i = Math.max(this.min, Math.min(this.max, i)), e ? this.secondValue = i : this.value = i, t.value = String(i), this.dispatchChangeEvent();
  }
  stepValue(r, e = !1) {
    let i = (e ? this.secondValue : this.value) + r * this.step;
    i = Math.max(this.min, Math.min(this.max, i)), e ? this.secondValue = i : this.value = i, this.dispatchChangeEvent();
  }
  showTooltipHandler() {
    this.showTooltip && (this.showTooltipState = !0);
  }
  hideTooltipHandler() {
    this.showTooltipState = !1;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        secondValue: this.dualRange ? this.secondValue : void 0,
        min: this.value,
        max: this.dualRange ? Math.max(this.value, this.secondValue) : this.value,
        dualRange: this.dualRange
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    this.dispatchChangeEvent();
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = it()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var i;
    const r = (i = it()) == null ? void 0 : i.getActiveTheme("zero-standard-themes"), e = this.dualRange ? Math.min(this.value, this.secondValue) : this.value, t = this.dualRange ? Math.max(this.value, this.secondValue) : this.value;
    return Z`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("slider") : ""}
            </style>
            <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                <label class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</label>
                
                <div class="range-container">
                    <div class="range-display uiv-${r == null ? void 0 : r.id}-text">
                        <span>${this.formatValue(this.min)}</span>
                        <span class="range-value uiv-${r == null ? void 0 : r.id}-text">
                            ${this.dualRange ? `${this.formatValue(e)} - ${this.formatValue(t)}` : this.formatValue(this.value)}
                        </span>
                        <span>${this.formatValue(this.max)}</span>
                    </div>
                    
                    <div class="slider-track uiv-${r == null ? void 0 : r.id}-scan ${this.showError ? "error" : ""} ${this.dualRange ? "dual-slider" : ""}">
                        <div class="slider-progress uiv-${r == null ? void 0 : r.id}-card" 
                             style="left: ${this.getProgressLeft()}; width: ${this.getProgressWidth()}"></div>
                        
                        <input 
                            type="range"
                            min="${this.min}"
                            max="${this.max}"
                            step="${this.step}"
                            .value="${String(this.value)}"
                            ?disabled="${this.disabled}"
                            class="${this.showError ? "error" : ""}"
                            @input="${(s) => this.handleSliderInput(s, !1)}"
                            @mouseenter="${this.showTooltipHandler}"
                            @mouseleave="${this.hideTooltipHandler}"
                        />
                        
                        ${this.dualRange ? Z`
                            <input 
                                type="range"
                                min="${this.min}"
                                max="${this.max}"
                                step="${this.step}"
                                .value="${String(this.secondValue)}"
                                ?disabled="${this.disabled}"
                                class="${this.showError ? "error" : ""}"
                                @input="${(s) => this.handleSliderInput(s, !0)}"
                                @mouseenter="${this.showTooltipHandler}"
                                @mouseleave="${this.hideTooltipHandler}"
                            />
                        ` : ""}
                        
                        ${this.showTooltip && this.showTooltipState ? Z`
                            <div class="tooltip uiv-${r == null ? void 0 : r.id}-card show" style="left: ${this.getProgressLeft()}">
                                ${this.formatValue(this.value)}
                            </div>
                        ` : ""}
                    </div>
                    
                    ${this.showValueInputs ? Z`
                        <div class="current-values uiv-${r == null ? void 0 : r.id}-text">
                            <div class="value-input">
                                <span>Value:</span>
                                <input 
                                    type="number"
                                    class="uiv-${r == null ? void 0 : r.id}-card"
                                    min="${this.min}"
                                    max="${this.max}"
                                    step="${this.step}"
                                    .value="${String(this.value)}"
                                    ?disabled="${this.disabled}"
                                    @change="${(s) => this.handleValueInput(s, !1)}"
                                />
                            </div>
                            ${this.dualRange ? Z`
                                <div class="value-input">
                                    <span>Second:</span>
                                    <input 
                                        type="number"
                                        class="uiv-${r == null ? void 0 : r.id}-card"
                                        min="${this.min}"
                                        max="${this.max}"
                                        step="${this.step}"
                                        .value="${String(this.secondValue)}"
                                        ?disabled="${this.disabled}"
                                        @change="${(s) => this.handleValueInput(s, !0)}"
                                    />
                                </div>
                            ` : ""}
                        </div>
                    ` : ""}
                    
                    ${this.showStepControls ? Z`
                        <div class="step-controls">
                            <button 
                                type="button"
                                class="step-button uiv-${r == null ? void 0 : r.id}-card"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${() => this.stepValue(-1, !1)}"
                            >
                                -${this.step}
                            </button>
                            <span class="uiv-${r == null ? void 0 : r.id}-text">Step: ${this.step}</span>
                            <button 
                                type="button"
                                class="step-button uiv-${r == null ? void 0 : r.id}-card"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${() => this.stepValue(1, !1)}"
                            >
                                +${this.step}
                            </button>
                        </div>
                    ` : ""}
                </div>
                
                <div class="error-message uiv-${r == null ? void 0 : r.id}-text ${this.showError ? "show" : ""}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
O.styles = Yt`
        :host {
            display: block;
            width: 100%;
            --uiv-primary: var(--uiv-primary-color, #6c63ff);
            --uiv-bg: var(--uiv-surface-color, #fff);
            --uiv-text: var(--uiv-text-color, #333);
            --uiv-border: var(--uiv-border-color, #ddd);
        }

        .form-field {
            margin-bottom: 20px;
        }

        .form-field label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text);
            font-weight: 500;
        }

        .range-container {
            padding: 12px 0;
        }

        .range-display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            font-size: 12px;
            color: var(--uiv-text);
            opacity: 0.8;
        }

        .range-value {
            font-weight: 600;
            color: var(--uiv-primary);
            font-size: 14px;
        }

        .slider-track {
            position: relative;
            height: 6px;
            background: rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.1);
            border-radius: 3px;
            margin: 12px 0;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        }

        .slider-progress {
            position: absolute;
            height: 100%;
            background: var(--uiv-primary);
            border-radius: 3px;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: var(--uiv-border-glow);
        }

        input[type="range"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 6px;
            background: transparent;
            outline: none;
            cursor: pointer;
            pointer-events: none;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--uiv-primary);
            border: 3px solid var(--uiv-bg);
            box-shadow: 0 4px 12px rgba(0,0,0,0.25);
            cursor: pointer;
            pointer-events: all;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            transform: translateY(-2px) scale(1.2);
            box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        .dual-slider input[type="range"]:last-child {
            z-index: 2;
        }

        .tooltip {
            position: absolute;
            background: var(--uiv-primary);
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            transform: translateX(-50%);
            top: -40px;
            opacity: 0;
            transition: all 0.2s;
            pointer-events: none;
            z-index: 10;
            box-shadow: var(--uiv-border-glow);
        }

        .tooltip.show { opacity: 1; transform: translateX(-50%) translateY(-5px); }

        .step-button {
            background: var(--uiv-bg);
            border: 1px solid var(--uiv-border);
            color: var(--uiv-text);
            padding: 4px 12px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 12px;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        .step-button:hover:not(:disabled) {
            background: var(--uiv-primary);
            color: white;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }
    `;
N([
  U({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], O.prototype, "value", 2);
N([
  U({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Min Value",
    fieldMappings: "min"
  })
], O.prototype, "min", 2);
N([
  U({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Max Value",
    fieldMappings: "max"
  })
], O.prototype, "max", 2);
N([
  U({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Step",
    fieldMappings: "step"
  })
], O.prototype, "step", 2);
N([
  U({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], O.prototype, "label", 2);
N([
  U({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Unit",
    placeholderText: "e.g., px, %, $",
    fieldMappings: "unit"
  })
], O.prototype, "unit", 2);
N([
  U({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Dual Range",
    fieldMappings: "dualRange"
  })
], O.prototype, "dualRange", 2);
N([
  U({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Second Value",
    fieldMappings: "secondValue"
  })
], O.prototype, "secondValue", 2);
N([
  U({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Show Tooltip",
    fieldMappings: "showTooltip"
  })
], O.prototype, "showTooltip", 2);
N([
  U({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Show Value Inputs",
    fieldMappings: "showValueInputs"
  })
], O.prototype, "showValueInputs", 2);
N([
  U({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Show Step Controls",
    fieldMappings: "showStepControls"
  })
], O.prototype, "showStepControls", 2);
N([
  U({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], O.prototype, "disabled", 2);
N([
  U({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], O.prototype, "errorMessage", 2);
N([
  U({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], O.prototype, "showError", 2);
N([
  U({ type: Boolean })
], O.prototype, "showTooltipState", 2);
N([
  I({
    attributeType: k.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], O.prototype, "handleChange", 1);
O = N([
  Lt({
    name: "zero-range-slider",
    version: "1.0.0",
    title: "Range Slider",
    elementSelector: "zero-range-slider",
    group: "Form Controls",
    iconName: "range-slider-icon.png"
  }),
  Bt()
], O);
export {
  O as ZeroRangeSlider,
  nt as studioTemplate
};
