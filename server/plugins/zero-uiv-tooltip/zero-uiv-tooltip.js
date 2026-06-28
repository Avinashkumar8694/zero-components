var Ie = Object.defineProperty;
var je = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e);
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Bt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(p, A) {
      return function($, w) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: w }), A && A($, w);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pt({ __proto__: null });
      } : function() {
        return pt({});
      },
      has: A ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, w = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), N = typeof WeakMap == "function" ? WeakMap : Ne(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, it = Pe(), St = Ce(it);
    function de(i, s, a, c) {
      if (m(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Ut(s))
          throw new TypeError();
        return $e(i, s);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(c) && !m(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = k(a), we(i, s, a, c);
      }
    }
    t("decorate", de);
    function he(i, s) {
      function a(c, y) {
        if (!M(c))
          throw new TypeError();
        if (!m(y) && !Oe(y))
          throw new TypeError();
        Pt(i, s, c, y);
      }
      return a;
    }
    t("metadata", he);
    function fe(i, s, a, c) {
      if (!M(a))
        throw new TypeError();
      return m(c) || (c = k(c)), Pt(i, s, a, c);
    }
    t("defineMetadata", fe);
    function pe(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), Mt(i, s, a);
    }
    t("hasMetadata", pe);
    function ve(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), dt(i, s, a);
    }
    t("hasOwnMetadata", ve);
    function ye(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), Ot(i, s, a);
    }
    t("getMetadata", ye);
    function _e(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), xt(i, s, a);
    }
    t("getOwnMetadata", _e);
    function me(i, s) {
      if (!M(i))
        throw new TypeError();
      return m(s) || (s = k(s)), Ct(i, s);
    }
    t("getMetadataKeys", me);
    function ge(i, s) {
      if (!M(i))
        throw new TypeError();
      return m(s) || (s = k(s)), Tt(i, s);
    }
    t("getOwnMetadataKeys", ge);
    function be(i, s, a) {
      if (!M(s))
        throw new TypeError();
      if (m(a) || (a = k(a)), !M(s))
        throw new TypeError();
      m(a) || (a = k(a));
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", be);
    function $e(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(s);
        if (!m(y) && !G(y)) {
          if (!Ut(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function we(i, s, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var x = i[y], O = x(s, a, c);
        if (!m(O) && !G(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Mt(i, s, a) {
      var c = dt(i, s, a);
      if (c)
        return !0;
      var y = ft(s);
      return G(y) ? !1 : Mt(i, y, a);
    }
    function dt(i, s, a) {
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : kt(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Ot(i, s, a) {
      var c = dt(i, s, a);
      if (c)
        return xt(i, s, a);
      var y = ft(s);
      if (!G(y))
        return Ot(i, y, a);
    }
    function xt(i, s, a) {
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pt(i, s, a, c) {
      var y = q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function Ct(i, s) {
      var a = Tt(i, s), c = ft(i);
      if (c === null)
        return a;
      var y = Ct(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var x = new T(), O = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = x.has(h);
        f || (x.add(h), O.push(h));
      }
      for (var v = 0, b = y; v < b.length; v++) {
        var h = b[v], f = x.has(h);
        f || (x.add(h), O.push(h));
      }
      return O;
    }
    function Tt(i, s) {
      var a = q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Rt(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
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
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(i) {
      return i === void 0;
    }
    function G(i) {
      return i === null;
    }
    function Ae(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, s) {
      switch (Rt(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var a = "string", c = Dt(i, u);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return Se(i);
    }
    function Se(i, s) {
      var a, c;
      {
        var y = i.toString;
        if (ot(y)) {
          var c = y.call(i);
          if (!M(c))
            return c;
        }
        var a = i.valueOf;
        if (ot(a)) {
          var c = a.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function kt(i) {
      return !!i;
    }
    function Me(i) {
      return "" + i;
    }
    function k(i) {
      var s = Ee(i);
      return Ae(s) ? s : Me(s);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ot(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      return typeof i == "function";
    }
    function Oe(i) {
      switch (Rt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ht(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Dt(i, s) {
      var a = i[s];
      if (a != null) {
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function It(i) {
      var s = Dt(i, l);
      if (!ot(s))
        throw new TypeError();
      var a = s.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function jt(i) {
      return i.value;
    }
    function Ht(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function zt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ft(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function xe() {
      var i;
      !m(L) && typeof e.Reflect < "u" && !(L in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var s, a, c, y = new N(), x = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return x;
      function O(v) {
        if (!Object.isExtensible(x))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case m(s):
            s = v;
            break;
          case s === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            c === void 0 && (c = new T()), c.add(v);
            break;
        }
      }
      function g(v, b) {
        if (!m(s)) {
          if (s.isProviderFor(v, b))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(v, b))
              return s;
            if (!m(c))
              for (var E = It(c); ; ) {
                var S = Ht(E);
                if (!S)
                  return;
                var R = jt(S);
                if (R.isProviderFor(v, b))
                  return zt(E), R;
              }
          }
        }
        if (!m(i) && i.isProviderFor(v, b))
          return i;
      }
      function d(v, b) {
        var E = y.get(v), S;
        return m(E) || (S = E.get(b)), m(S) && (S = g(v, b), m(S) || (m(E) && (E = new C(), y.set(v, E)), E.set(b, S))), S;
      }
      function h(v) {
        if (m(v))
          throw new TypeError();
        return s === v || a === v || !m(c) && c.has(v);
      }
      function f(v, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(v, b);
        if (S !== E) {
          if (!m(S))
            return !1;
          var R = y.get(v);
          m(R) && (R = new C(), y.set(v, R)), R.set(b, E);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !m(L) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[L]), m(i) && (i = xe()), !m(L) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var s = new N(), a = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return m(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: x,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return it.registerProvider(a), a;
      function c(h, f, v) {
        var b = s.get(h), E = !1;
        if (m(b)) {
          if (!v)
            return;
          b = new C(), s.set(h, b), E = !0;
        }
        var S = b.get(f);
        if (m(S)) {
          if (!v)
            return;
          if (S = new C(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        return m(b) ? !1 : kt(b.has(h));
      }
      function x(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function O(h, f, v, b) {
        var E = c(
          v,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var v = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return v;
        for (var E = b.keys(), S = It(E), R = 0; ; ) {
          var Lt = Ht(S);
          if (!Lt)
            return v.length = R, v;
          var Ue = jt(Lt);
          try {
            v[R] = Ue;
          } catch (De) {
            try {
              zt(S);
            } finally {
              throw De;
            }
          }
          R++;
        }
      }
      function d(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = s.get(f);
          m(E) || (E.delete(v), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Te(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, x = i.deleteMetadata, O = new N(), g = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !m(f) && f.has(h) ? !0 : y(d, h).length ? (m(f) && (f = new T(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: x
      };
      return g;
    }
    function q(i, s, a) {
      var c = it.getProvider(i, s);
      if (!m(c))
        return c;
      if (a) {
        if (it.setProvider(i, s, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ht(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, x);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!ht(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ht(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function y(g, d) {
        return g;
      }
      function x(g, d) {
        return d;
      }
      function O(g, d) {
        return [g, d];
      }
    }
    function ke() {
      var i = (
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
      return i;
    }
    function Ne() {
      var i = 16, s = $.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + g();
        while ($.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function x(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : x(h, d), h;
        }
        return x(new Array(d), d);
      }
      function g() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Bt || (Bt = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function ze(r) {
  return function(t) {
    if (He(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, u);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Le(r) {
  return ze(r);
}
function Ge(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Gt(this, "_stylesApplied", !1);
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
        var A;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const $ = new CSSStyleSheet(), w = (A = u.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((C) => $.insertRule(C.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (u) {
          const $ = u.cloneNode(!0);
          p.appendChild($);
        }
        l.forEach(($) => {
          const w = $.cloneNode(!0);
          p.appendChild(w);
        });
      }
    }
    return e;
  };
}
function We(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(r) {
  return function(t, e) {
    try {
      We(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let o = !0;
      if (typeof e == "string") {
        try {
          o = typeof t[e] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function gt(r) {
  return Be(r);
}
var Q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(Q || (Q = {}));
var K;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(K || (K = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, bt = st.ShadowRoot && (st.ShadyCSS === void 0 || st.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let se = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (r) => new se(typeof r == "string" ? r : r + "", void 0, $t), Fe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[u + 1], r[0]);
  return new se(e, r, $t);
}, qe = (r, t) => {
  if (bt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = st.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = bt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Ve(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Ye, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, D = globalThis, qt = D.trustedTypes, tr = qt ? qt.emptyScript : "", vt = D.reactiveElementPolyfillSupport, Y = (r, t) => r, at = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? tr : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, wt = (r, t) => !Xe(r, t), Xt = { attribute: !0, type: String, converter: at, reflect: !1, useDefault: !1, hasChanged: wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Ye(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: u } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get: o, set(l) {
      const _ = o == null ? void 0 : o.call(this);
      u == null || u.call(this, l), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const e = this.properties, n = [...Je(e), ...Qe(e)];
      for (const o of n) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, o] of e) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const o = this._$Eu(e, n);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const o of n) e.unshift(Ft(o));
    } else t !== void 0 && e.push(Ft(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    var u;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : at).toAttribute(e, n.type);
      this._$Em = t, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var u, l;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const _ = n.getPropertyOptions(o), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((u = _.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? _.converter : at;
      this._$Em = o;
      const A = p.fromAttribute(e, _.type);
      this[o] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, o = !1, u) {
    var l;
    if (t !== void 0) {
      const _ = this.constructor;
      if (o === !1 && (u = this[t]), n ?? (n = _.getPropertyOptions(t)), !((n.hasChanged ?? wt)(u, e) || n.useDefault && n.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(t)) && !this.hasAttribute(_._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: o, wrapped: u }, l) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, l ?? e ?? this[t]), u !== !0 || l !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
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
      if (o.size > 0) for (const [u, l] of o) {
        const { wrapped: _ } = l, p = this[u];
        _ !== !0 || this._$AL.has(u) || p === void 0 || this.C(u, void 0, l, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
        var u;
        return (u = o.hostUpdate) == null ? void 0 : u.call(o);
      }), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Y("elementProperties")] = /* @__PURE__ */ new Map(), W[Y("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: W }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, Yt = (r) => r, lt = Z.trustedTypes, Zt = lt ? lt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + U, er = `<${le}>`, z = document, tt = () => z.createComment(""), et = (r) => r === null || typeof r != "object" && typeof r != "function", At = Array.isArray, rr = (r) => At(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", yt = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, I = RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, ue = /^(?:script|style|textarea|title)$/i, nr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ee = nr(1), B = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), j = z.createTreeWalker(z, 129);
function ce(r, t) {
  if (!At(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const ir = (r, t) => {
  const e = r.length - 1, n = [];
  let o, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = X;
  for (let _ = 0; _ < e; _++) {
    const p = r[_];
    let A, $, w = -1, C = 0;
    for (; C < p.length && (l.lastIndex = C, $ = l.exec(p), $ !== null); ) C = l.lastIndex, l === X ? $[1] === "!--" ? l = Jt : $[1] !== void 0 ? l = Qt : $[2] !== void 0 ? (ue.test($[2]) && (o = RegExp("</" + $[2], "g")), l = I) : $[3] !== void 0 && (l = I) : l === I ? $[0] === ">" ? (l = o ?? X, w = -1) : $[1] === void 0 ? w = -2 : (w = l.lastIndex - $[2].length, A = $[1], l = $[3] === void 0 ? I : $[3] === '"' ? te : Kt) : l === te || l === Kt ? l = I : l === Jt || l === Qt ? l = X : (l = I, o = void 0);
    const T = l === I && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === X ? p + er : w >= 0 ? (n.push(A), p.slice(0, w) + ae + p.slice(w) + U + T) : p + U + (w === -2 ? _ : T);
  }
  return [ce(r, u + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class rt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const _ = t.length - 1, p = this.parts, [A, $] = ir(t, e);
    if (this.el = rt.createElement(A, n), j.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = j.nextNode()) !== null && p.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(ae)) {
          const C = $[l++], T = o.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(C);
          p.push({ type: 1, index: u, name: N[2], strings: T, ctor: N[1] === "." ? sr : N[1] === "?" ? ar : N[1] === "@" ? lr : ut }), o.removeAttribute(w);
        } else w.startsWith(U) && (p.push({ type: 6, index: u }), o.removeAttribute(w));
        if (ue.test(o.tagName)) {
          const w = o.textContent.split(U), C = w.length - 1;
          if (C > 0) {
            o.textContent = lt ? lt.emptyScript : "";
            for (let T = 0; T < C; T++) o.append(w[T], tt()), j.nextNode(), p.push({ type: 2, index: ++u });
            o.append(w[C], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === le) p.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(U, w + 1)) !== -1; ) p.push({ type: 7, index: u }), w += U.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const n = z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function V(r, t, e = r, n) {
  var l, _;
  if (t === B) return t;
  let o = n !== void 0 ? (l = e._$Co) == null ? void 0 : l[n] : e._$Cl;
  const u = et(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), u === void 0 ? o = void 0 : (o = new u(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = o : e._$Cl = o), o !== void 0 && (t = V(r, o._$AS(r, t.values), o, n)), t;
}
class or {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    j.currentNode = o;
    let u = j.nextNode(), l = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (l === p.index) {
        let A;
        p.type === 2 ? A = new nt(u, u.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(u, p.name, p.strings, this, t) : p.type === 6 && (A = new ur(u, this, t)), this._$AV.push(A), p = n[++_];
      }
      l !== (p == null ? void 0 : p.index) && (u = j.nextNode(), l++);
    }
    return j.currentNode = z, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class nt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = V(this, t, e), et(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== B && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = rt.createElement(ce(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(e);
    else {
      const l = new or(o, this), _ = l.u(this.options);
      l.p(e), this.T(_), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const u of t) o === e.length ? e.push(n = new nt(this.O(tt()), this.O(tt()), this, this.options)) : n = e[o], n._$AI(u), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Yt(t).nextSibling;
      Yt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ut {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, u) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = V(this, t, e, 0), l = !et(t) || t !== this._$AH && t !== B, l && (this._$AH = t);
    else {
      const _ = t;
      let p, A;
      for (t = u[0], p = 0; p < u.length - 1; p++) A = V(this, _[n + p], e, p), A === B && (A = this._$AH[p]), l || (l = !et(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + u[p + 1]), this._$AH[p] = A;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class lr extends ut {
  constructor(t, e, n, o, u) {
    super(t, e, n, o, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = V(this, t, e, 0) ?? P) === B) return;
    const n = this._$AH, o = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, u = t !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
}
const _t = Z.litHtmlPolyfillSupport;
_t == null || _t(rt, nt), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.3.3");
const cr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new nt(t.insertBefore(tt(), u), u, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends W {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = cr(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return B;
  }
}
var oe;
J._$litElement$ = !0, J.finalized = !0, (oe = H.litElementHydrateSupport) == null || oe.call(H, { LitElement: J });
const mt = H.litElementPolyfillSupport;
mt == null || mt({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: wt }, hr = (r = dr, t, e) => {
  const { kind: n, metadata: o } = e;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), u.set(e.name, r), n === "accessor") {
    const { name: l } = e;
    return { set(_) {
      const p = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(l, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(l, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: l } = e;
    return function(_) {
      const p = this[l];
      t.call(this, _), this.requestUpdate(l, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Et(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(r, t, e);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ct = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? pr(t, e) : t, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (o = (n ? l(t, e, o) : l(o)) || o);
  return n && o && fr(t, e, o), o;
};
const ne = () => window.zeroThemeManager, ie = {
  kind: "generic",
  slots: [
    { id: "default", label: "Tooltip Anchor Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='position:relative;display:inline-block;padding:16px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;background:rgba(255,255,255,0.5);'>",
    "<div style='position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--uiv-primary-color,#1e293b);color:#fff;padding:4px 8px;border-radius:4px;font-size:0.7rem;white-space:nowrap;z-index:10;'>{{display:text}}</div>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Tooltip", "Overlay"]
};
function vr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let F = class extends J {
  constructor() {
    super(...arguments), this.theme = "modern", this.text = "Tooltip text", this.position = "top";
  }
  static getStudioTemplate(r) {
    var _, p, A, $;
    if (!r) return ie;
    const t = vr(r.studio.display.text || "Tooltip text"), e = (((_ = r.props) == null ? void 0 : _.position) ?? ((p = r.studio.props) == null ? void 0 : p.position)) || "top", o = (((A = r.props) == null ? void 0 : A.theme) ?? (($ = r.studio.props) == null ? void 0 : $.theme)) === "glass" ? "rgba(0,0,0,0.8)" : "var(--uiv-surface-color, #1e293b)", u = "var(--uiv-text-color, #fff)";
    let l = "";
    return e === "top" ? l = "bottom:110%;left:50%;transform:translateX(-50%);" : e === "bottom" ? l = "top:110%;left:50%;transform:translateX(-50%);" : e === "left" ? l = "right:110%;top:50%;transform:translateY(-50%);" : e === "right" && (l = "left:110%;top:50%;transform:translateY(-50%);"), {
      ...ie,
      templateHtml: [
        "<div style='position:relative;display:inline-block;padding:20px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;'>",
        `<div style='position:absolute; ${l} background:${o}; color:${u}; padding:6px 12px; border-radius:8px; font-size:12px; white-space:nowrap; z-index:100; box-shadow:0 4px 12px rgba(0,0,0,0.2);'>${t}</div>`,
        "<div style='min-width:40px;min-height:40px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = ne()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = ne()) == null ? void 0 : t.getActiveTheme();
    return r ? ee`
            <style>
                ${r.getGlobalStyles()}
                ${r.getComponentStyles("tooltip")}
                :host {
                    --uiv-tooltip-bg: ${this.theme === "glass" ? "rgba(0,0,0,0.8)" : "#333"};
                }
            </style>
            <div class="tooltip-container uiv-${r.id}-theme">
                <slot></slot>
                <span class="tooltip-text uiv-${r.id}-card uiv-${r.id}-text ${this.position}">${this.text}</span>
            </div>
        ` : ee`<div class="tooltip-container"><slot></slot></div>`;
  }
};
F.styles = Fe`
        :host {
            display: inline-block;
            position: relative;
        }

        .tooltip-container {
            position: relative;
            display: inline-block;
        }

        .tooltip-text {
            visibility: hidden;
            width: 140px;
            background-color: var(--uiv-surface-color, #1e293b);
            color: var(--uiv-primary-color, #fff);
            text-align: center;
            border-radius: 10px;
            padding: 10px 14px;
            position: absolute;
            z-index: 1000;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid var(--uiv-border-color);
            box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.2));
            transform: translateX(-50%) translateY(10px);
        }

        .tooltip-container:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        /* Positions */
        .top { bottom: 130%; left: 50%; transform: translateX(-50%) translateY(0); }
        .bottom { top: 130%; left: 50%; transform: translateX(-50%) translateY(0); }
        .left { top: 50%; right: 115%; transform: translateY(-50%) translateX(0); }
        .right { top: 50%; left: 115%; transform: translateY(-50%) translateX(0); }

        .tooltip-text::after {
            content: "";
            position: absolute;
            border-width: 6px;
            border-style: solid;
        }

        .top::after { top: 100%; left: 50%; margin-left: -6px; border-color: var(--uiv-border-color) transparent transparent transparent; }
        .bottom::after { bottom: 100%; left: 50%; margin-left: -6px; border-color: transparent transparent var(--uiv-border-color) transparent; }
    `;
ct([
  Et({ type: String }),
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Glass", value: "glass" }
    ]
  })
], F.prototype, "theme", 2);
ct([
  Et({ type: String }),
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXT_INPUT,
    displayLabel: "Text",
    fieldMappings: "text"
  })
], F.prototype, "text", 2);
ct([
  Et({ type: String }),
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Position",
    fieldMappings: "position",
    optionItems: [
      { label: "Top", value: "top" },
      { label: "Bottom", value: "bottom" },
      { label: "Left", value: "left" },
      { label: "Right", value: "right" }
    ]
  })
], F.prototype, "position", 2);
F = ct([
  Le({
    name: "zero-uiv-tooltip",
    version: "1.0.0",
    title: "Unified Tooltip",
    elementSelector: "zero-uiv-tooltip",
    group: "Uiverse Tooltip",
    iconName: "tooltip-icon.png"
  }),
  Ge()
], F);
export {
  F as ZeroUivTooltip,
  ie as studioTemplate
};
