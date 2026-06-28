var ze = Object.defineProperty;
var Be = (r, t, e) => t in r ? ze(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Wt = (r, t, e) => Be(r, typeof t != "symbol" ? t + "" : t, e);
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var qt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Vt == "object" ? Vt : typeof self == "object" ? self : typeof this == "object" ? this : b(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(v, x) {
      return function(w, $) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: $ }), x && x(w, $);
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
    function b() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, x = !b && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return bt(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return bt({ __proto__: null });
      } : function() {
        return bt({});
      },
      has: x ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: x ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ue(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : je(), H = typeof WeakMap == "function" ? WeakMap : He(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, at = ke(), Ot = Ne(at);
    function ve(i, s, a, c) {
      if (g(a)) {
        if (!Ut(i))
          throw new TypeError();
        if (!jt(s))
          throw new TypeError();
        return Ae(i, s);
      } else {
        if (!Ut(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(c) && !g(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), a = N(a), Se(i, s, a, c);
      }
    }
    t("decorate", ve);
    function ye(i, s) {
      function a(c, y) {
        if (!S(c))
          throw new TypeError();
        if (!g(y) && !Te(y))
          throw new TypeError();
        Tt(i, s, c, y);
      }
      return a;
    }
    t("metadata", ye);
    function be(i, s, a, c) {
      if (!S(a))
        throw new TypeError();
      return g(c) || (c = N(c)), Tt(i, s, a, c);
    }
    t("defineMetadata", be);
    function ge(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = N(a)), Ct(i, s, a);
    }
    t("hasMetadata", ge);
    function me(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = N(a)), ft(i, s, a);
    }
    t("hasOwnMetadata", me);
    function _e(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = N(a)), Mt(i, s, a);
    }
    t("getMetadata", _e);
    function $e(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = N(a)), Pt(i, s, a);
    }
    t("getOwnMetadata", $e);
    function we(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = N(s)), Rt(i, s);
    }
    t("getMetadataKeys", we);
    function xe(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = N(s)), kt(i, s);
    }
    t("getOwnMetadataKeys", xe);
    function Ee(i, s, a) {
      if (!S(s))
        throw new TypeError();
      if (g(a) || (a = N(a)), !S(s))
        throw new TypeError();
      g(a) || (a = N(a));
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", Ee);
    function Ae(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(s);
        if (!g(y) && !Y(y)) {
          if (!jt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function Se(i, s, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var C = i[y], O = C(s, a, c);
        if (!g(O) && !Y(O)) {
          if (!S(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ct(i, s, a) {
      var c = ft(i, s, a);
      if (c)
        return !0;
      var y = yt(s);
      return Y(y) ? !1 : Ct(i, y, a);
    }
    function ft(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Dt(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Mt(i, s, a) {
      var c = ft(i, s, a);
      if (c)
        return Pt(i, s, a);
      var y = yt(s);
      if (!Y(y))
        return Mt(i, y, a);
    }
    function Pt(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Tt(i, s, a, c) {
      var y = Q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function Rt(i, s) {
      var a = kt(i, s), c = yt(i);
      if (c === null)
        return a;
      var y = Rt(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var C = new T(), O = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], p = C.has(h);
        p || (C.add(h), O.push(h));
      }
      for (var f = 0, _ = y; f < _.length; f++) {
        var h = _[f], p = C.has(h);
        p || (C.add(h), O.push(h));
      }
      return O;
    }
    function kt(i, s) {
      var a = Q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Nt(i) {
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
    function g(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function Oe(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ce(i, s) {
      switch (Nt(i)) {
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
      var a = "string", c = Ht(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return Me(i);
    }
    function Me(i, s) {
      var a, c;
      {
        var y = i.toString;
        if (lt(y)) {
          var c = y.call(i);
          if (!S(c))
            return c;
        }
        var a = i.valueOf;
        if (lt(a)) {
          var c = a.call(i);
          if (!S(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Dt(i) {
      return !!i;
    }
    function Pe(i) {
      return "" + i;
    }
    function N(i) {
      var s = Ce(i);
      return Oe(s) ? s : Pe(s);
    }
    function Ut(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function lt(i) {
      return typeof i == "function";
    }
    function jt(i) {
      return typeof i == "function";
    }
    function Te(i) {
      switch (Nt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function vt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ht(i, s) {
      var a = i[s];
      if (a != null) {
        if (!lt(a))
          throw new TypeError();
        return a;
      }
    }
    function It(i) {
      var s = Ht(i, u);
      if (!lt(s))
        throw new TypeError();
      var a = s.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Lt(i) {
      return i.value;
    }
    function zt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Bt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function yt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Re() {
      var i;
      !g(F) && typeof e.Reflect < "u" && !(F in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = De(e.Reflect));
      var s, a, c, y = new H(), C = {
        registerProvider: O,
        getProvider: d,
        setProvider: p
      };
      return C;
      function O(f) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case g(s):
            s = f;
            break;
          case s === f:
            break;
          case g(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            c === void 0 && (c = new T()), c.add(f);
            break;
        }
      }
      function m(f, _) {
        if (!g(s)) {
          if (s.isProviderFor(f, _))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(f, _))
              return s;
            if (!g(c))
              for (var E = It(c); ; ) {
                var A = zt(E);
                if (!A)
                  return;
                var k = Lt(A);
                if (k.isProviderFor(f, _))
                  return Bt(E), k;
              }
          }
        }
        if (!g(i) && i.isProviderFor(f, _))
          return i;
      }
      function d(f, _) {
        var E = y.get(f), A;
        return g(E) || (A = E.get(_)), g(A) && (A = m(f, _), g(A) || (g(E) && (E = new P(), y.set(f, E)), E.set(_, A))), A;
      }
      function h(f) {
        if (g(f))
          throw new TypeError();
        return s === f || a === f || !g(c) && c.has(f);
      }
      function p(f, _, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = d(f, _);
        if (A !== E) {
          if (!g(A))
            return !1;
          var k = y.get(f);
          g(k) && (k = new P(), y.set(f, k)), k.set(_, E);
        }
        return !0;
      }
    }
    function ke() {
      var i;
      return !g(F) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[F]), g(i) && (i = Re()), !g(F) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ne(i) {
      var s = new H(), a = {
        isProviderFor: function(h, p) {
          var f = s.get(h);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return at.registerProvider(a), a;
      function c(h, p, f) {
        var _ = s.get(h), E = !1;
        if (g(_)) {
          if (!f)
            return;
          _ = new P(), s.set(h, _), E = !0;
        }
        var A = _.get(p);
        if (g(A)) {
          if (!f)
            return;
          if (A = new P(), _.set(p, A), !i.setProvider(h, p, a))
            throw _.delete(p), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function y(h, p, f) {
        var _ = c(
          p,
          f,
          /*Create*/
          !1
        );
        return g(_) ? !1 : Dt(_.has(h));
      }
      function C(h, p, f) {
        var _ = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g(_))
          return _.get(h);
      }
      function O(h, p, f, _) {
        var E = c(
          f,
          _,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function m(h, p) {
        var f = [], _ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(_))
          return f;
        for (var E = _.keys(), A = It(E), k = 0; ; ) {
          var Gt = zt(A);
          if (!Gt)
            return f.length = k, f;
          var Ie = Lt(Gt);
          try {
            f[k] = Ie;
          } catch (Le) {
            try {
              Bt(A);
            } finally {
              throw Le;
            }
          }
          k++;
        }
      }
      function d(h, p, f) {
        var _ = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (g(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var E = s.get(p);
          g(E) || (E.delete(f), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function De(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new H(), m = {
        isProviderFor: function(d, h) {
          var p = O.get(d);
          return !g(p) && p.has(h) ? !0 : y(d, h).length ? (g(p) && (p = new T(), O.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function Q(i, s, a) {
      var c = at.getProvider(i, s);
      if (!g(c))
        return c;
      if (a) {
        if (at.setProvider(i, s, Ot))
          return Ot;
        throw new Error("Illegal state.");
      }
    }
    function Ue() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function m(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, m;
        }()
      ), c = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(d, h) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, m.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, vt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!vt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (vt(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function y(m, d) {
        return m;
      }
      function C(m, d) {
        return d;
      }
      function O(m, d) {
        return [m, d];
      }
    }
    function je() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new P();
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
      return i;
    }
    function He() {
      var i = 16, s = w.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var f = y(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while (w.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function m() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function bt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qt || (qt = {}));
function Ge(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function We(r) {
  return function(t) {
    if (Ge(r)) {
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
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
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
function le(r) {
  return We(r);
}
function ue(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Wt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const w = new CSSStyleSheet(), $ = (x = l.sheet) == null ? void 0 : x.cssRules;
          $ && (Array.from($).forEach((P) => w.insertRule(P.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          v.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          v.appendChild($);
        });
      }
    }
    return e;
  };
}
function Ve(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qe(r) {
  return function(t, e) {
    try {
      Ve(r);
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
function z(r) {
  return qe(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(U || (U = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, xt = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Et = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let ce = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (xt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Ft.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ft.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new ce(typeof r == "string" ? r : r + "", void 0, Et), Ye = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ce(e, r, Et);
}, Ze = (r, t) => {
  if (xt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = ct.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Yt = xt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Je, getOwnPropertyDescriptor: Qe, getOwnPropertyNames: Ke, getOwnPropertySymbols: tr, getPrototypeOf: er } = Object, L = globalThis, Zt = L.trustedTypes, rr = Zt ? Zt.emptyScript : "", gt = L.reactiveElementPolyfillSupport, tt = (r, t) => r, dt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? rr : null;
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
} }, At = (r, t) => !Xe(r, t), Xt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Je(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: l } = Qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: o, set(u) {
      const b = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, b, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties"))) return;
    const t = er(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
      const e = this.properties, n = [...Ke(e), ...tr(e)];
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
      for (const o of n) e.unshift(Yt(o));
    } else t !== void 0 && e.push(Yt(t));
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
    return Ze(t, this.constructor.elementStyles), t;
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
    var l;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : dt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const b = n.getPropertyOptions(o), v = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : dt;
      this._$Em = o;
      const x = v.fromAttribute(e, b.type);
      this[o] = x ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, o = !1, l) {
    var u;
    if (t !== void 0) {
      const b = this.constructor;
      if (o === !1 && (l = this[t]), n ?? (n = b.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(b._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: b } = u, v = this[l];
        b !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[tt("elementProperties")] = /* @__PURE__ */ new Map(), Z[tt("finalized")] = /* @__PURE__ */ new Map(), gt == null || gt({ ReactiveElement: Z }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = globalThis, Jt = (r) => r, ht = et.trustedTypes, Qt = ht ? ht.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, de = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + I, nr = `<${he}>`, V = document, nt = () => V.createComment(""), it = (r) => r === null || typeof r != "object" && typeof r != "function", St = Array.isArray, ir = (r) => St(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", mt = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Kt = /-->/g, te = />/g, B = RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ee = /'/g, re = /"/g, pe = /^(?:script|style|textarea|title)$/i, or = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ut = or(1), X = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), ne = /* @__PURE__ */ new WeakMap(), G = V.createTreeWalker(V, 129);
function fe(r, t) {
  if (!St(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qt !== void 0 ? Qt.createHTML(t) : t;
}
const sr = (r, t) => {
  const e = r.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = K;
  for (let b = 0; b < e; b++) {
    const v = r[b];
    let x, w, $ = -1, P = 0;
    for (; P < v.length && (u.lastIndex = P, w = u.exec(v), w !== null); ) P = u.lastIndex, u === K ? w[1] === "!--" ? u = Kt : w[1] !== void 0 ? u = te : w[2] !== void 0 ? (pe.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = B) : w[3] !== void 0 && (u = B) : u === B ? w[0] === ">" ? (u = o ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, x = w[1], u = w[3] === void 0 ? B : w[3] === '"' ? re : ee) : u === re || u === ee ? u = B : u === Kt || u === te ? u = K : (u = B, o = void 0);
    const T = u === B && r[b + 1].startsWith("/>") ? " " : "";
    l += u === K ? v + nr : $ >= 0 ? (n.push(x), v.slice(0, $) + de + v.slice($) + I + T) : v + I + ($ === -2 ? b : T);
  }
  return [fe(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ot {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const b = t.length - 1, v = this.parts, [x, w] = sr(t, e);
    if (this.el = ot.createElement(x, n), G.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = G.nextNode()) !== null && v.length < b; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(de)) {
          const P = w[u++], T = o.getAttribute($).split(I), H = /([.?@])?(.*)/.exec(P);
          v.push({ type: 1, index: l, name: H[2], strings: T, ctor: H[1] === "." ? lr : H[1] === "?" ? ur : H[1] === "@" ? cr : pt }), o.removeAttribute($);
        } else $.startsWith(I) && (v.push({ type: 6, index: l }), o.removeAttribute($));
        if (pe.test(o.tagName)) {
          const $ = o.textContent.split(I), P = $.length - 1;
          if (P > 0) {
            o.textContent = ht ? ht.emptyScript : "";
            for (let T = 0; T < P; T++) o.append($[T], nt()), G.nextNode(), v.push({ type: 2, index: ++l });
            o.append($[P], nt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === he) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(I, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = V.createElement("template");
    return n.innerHTML = t, n;
  }
}
function J(r, t, e = r, n) {
  var u, b;
  if (t === X) return t;
  let o = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = it(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((b = o == null ? void 0 : o._$AO) == null || b.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = o : e._$Cl = o), o !== void 0 && (t = J(r, o._$AS(r, t.values), o, n)), t;
}
class ar {
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? V).importNode(e, !0);
    G.currentNode = o;
    let l = G.nextNode(), u = 0, b = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let x;
        v.type === 2 ? x = new st(l, l.nextSibling, this, t) : v.type === 1 ? x = new v.ctor(l, v.name, v.strings, this, t) : v.type === 6 && (x = new dr(l, this, t)), this._$AV.push(x), v = n[++b];
      }
      u !== (v == null ? void 0 : v.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = V, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class st {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = J(this, t, e), it(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ir(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && it(this._$AH) ? this._$AA.nextSibling.data = t : this.T(V.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ot.createElement(fe(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new ar(o, this), b = u.u(this.options);
      u.p(e), this.T(b), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ne.get(t.strings);
    return e === void 0 && ne.set(t.strings, e = new ot(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const l of t) o === e.length ? e.push(n = new st(this.O(nt()), this.O(nt()), this, this.options)) : n = e[o], n._$AI(l), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Jt(t).nextSibling;
      Jt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class pt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(t, e = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = J(this, t, e, 0), u = !it(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const b = t;
      let v, x;
      for (t = l[0], v = 0; v < l.length - 1; v++) x = J(this, b[n + v], e, v), x === X && (x = this._$AH[v]), u || (u = !it(x) || x !== this._$AH[v]), x === M ? t = M : t !== M && (t += (x ?? "") + l[v + 1]), this._$AH[v] = x;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends pt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class ur extends pt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== M);
  }
}
class cr extends pt {
  constructor(t, e, n, o, l) {
    super(t, e, n, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = J(this, t, e, 0) ?? M) === X) return;
    const n = this._$AH, o = t === M && n !== M || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== M && (n === M || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    J(this, t);
  }
}
const _t = et.litHtmlPolyfillSupport;
_t == null || _t(ot, st), (et.litHtmlVersions ?? (et.litHtmlVersions = [])).push("3.3.3");
const hr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new st(t.insertBefore(nt(), l), l, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class rt extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = hr(e, this.renderRoot, this.renderOptions);
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
    return X;
  }
}
var ae;
rt._$litElement$ = !0, rt.finalized = !0, (ae = W.litElementHydrateSupport) == null || ae.call(W, { LitElement: rt });
const $t = W.litElementPolyfillSupport;
$t == null || $t({ LitElement: rt });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: At }, fr = (r = pr, t, e) => {
  const { kind: n, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(b) {
      const v = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(u, v, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, r, b), b;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(b) {
      const v = this[u];
      t.call(this, b), this.requestUpdate(u, v, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function q(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, t, e);
}
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, j = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? yr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(t, e, o) : u(o)) || o);
  return n && o && vr(t, e, o), o;
};
const wt = () => window.zeroThemeManager, ie = {
  kind: "button",
  templateHtml: [
    "<div style='display:inline-flex;'>",
    "<button style='position:relative;padding:12px 24px;border-radius:8px;background:var(--uiv-primary-color,#6366f1);color:#fff;font-weight:600;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);cursor:pointer;border:none;'>",
    "{{display:label}}",
    "</button>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Button", "Interactive"]
};
function br(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let R = class extends rt {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Button", this.variant = "primary", this.disabled = !1, this.loading = !1, this.tag = "R25", this.accentColor = "", this.onClickEvent = "click";
  }
  static getStudioTemplate(r) {
    var n, o;
    if (!r) return ie;
    const t = br(r.studio.display.label || "Button"), e = (((n = r.props) == null ? void 0 : n.themeColor) ?? ((o = r.studio.props) == null ? void 0 : o.themeColor)) || "var(--uiv-primary-color,#6366f1)";
    return {
      ...ie,
      templateHtml: [
        "<div style='display:inline-flex;'>",
        `<button style='position:relative;padding:12px 24px;border-radius:8px;background:${e};color:#fff;font-weight:600;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);cursor:pointer;border:none;'>`,
        `${t}`,
        "</button>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = wt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = wt()) == null ? void 0 : e.getActiveTheme("zero-uiv-themes"), t = this.theme || (r == null ? void 0 : r.id) || "modern";
    return ut`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("button") : ""}
                :host {
                    ${this.accentColor ? `--uiv-primary-color: ${this.accentColor};` : ""}
                }
            </style>
            ${this.renderThemeTemplate(t)}
        `;
  }
  renderThemeTemplate(r) {
    var o;
    const t = r, e = this.disabled || this.loading, n = (o = wt()) == null ? void 0 : o.getActiveTheme("zero-uiv-themes");
    return ut`
            <button class="${t} uiv-${n == null ? void 0 : n.id}-theme uiv-${n == null ? void 0 : n.id}-card" ?disabled="${e}" data-label="${this.label}">
                <div class="btn-content uiv-${n == null ? void 0 : n.id}-text">
                    ${this.loading ? ut`<span class="spinner"></span>` : ""}
                    <slot name="prefix"></slot>
                    <span>${this.label}</span>
                    <slot name="suffix"></slot>
                </div>
                ${r === "cyber" ? ut`<span class="tag uiv-cyber-accent">${this.tag}</span>` : ""}
            </button>
        `;
  }
};
R.styles = Ye`
        :host {
            display: inline-block;
            cursor: pointer;
            --btn-p: var(--uiv-primary-color, #6366f1);
            --btn-s: var(--uiv-secondary-color, #8b5cf6);
            --btn-bg: var(--uiv-surface-color, #ffffff);
            --btn-t: var(--uiv-text-color, #fff);
            --btn-glow: var(--uiv-border-glow, 0 0 15px rgba(99, 102, 241, 0.3));
            --intensity: var(--uiv-glow-intensity, 1);
        }

        button {
            cursor: inherit;
            outline: none;
            border: none;
            background: none;
            font-family: inherit;
            position: relative;
            transition: all 0.3s ease;
        }

        .btn-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Cyber Styles */
        button.cyber {
            --slice-0: inset(50% 50% 50% 50%);
            --slice-1: inset(80% -6px 0 0);
            --slice-2: inset(50% -6px 30% 0);
            --slice-3: inset(10% -6px 85% 0);
            --slice-4: inset(40% -6px 43% 0);
            --slice-5: inset(80% -6px 5% 0);
            text-transform: uppercase;
            letter-spacing: 3px;
            padding: 10px 20px;
            background: linear-gradient(45deg, transparent 5%, var(--btn-p) 5%);
            color: var(--btn-t);
            min-width: 150px;
        }

        button.cyber::after {
            content: attr(data-label);
            display: block;
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(45deg, transparent 3%, var(--uiv-button-shadow, #00e6f6) 3%, var(--uiv-button-shadow, #00e6f6) 5%, var(--btn-p) 5%);
            text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px var(--uiv-button-shadow, #00e6f6);
            clip-path: var(--slice-0);
        }

        button.cyber:hover::after {
            animation: 1s glitch steps(2, end);
        }

        .tag {
            position: absolute;
            right: -8px;
            bottom: -8px;
            background: var(--uiv-button-accent, #f8f005);
            color: #000;
            padding: 0 4px;
            font-size: 0.65rem;
            font-weight: bold;
        }

        /* Neon Styles */
        button.neon {
            border: 2px solid var(--btn-p);
            color: var(--btn-p);
            padding: 10px 25px;
            border-radius: 5px;
            background: transparent;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 0 0 10px var(--btn-p), inset 0 0 10px var(--btn-p);
        }

        button.neon:hover {
            background: var(--btn-p);
            color: #000;
            box-shadow: 0 0 30px var(--btn-p), inset 0 0 10px var(--btn-p);
        }

        /* Glass Styles */
        button.glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 12px 28px;
            border-radius: 12px;
        }

        button.glass:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Retro Styles */
        button.retro {
            background: var(--btn-p);
            border: 3px solid #000;
            color: #000;
            padding: 10px 25px;
            font-weight: bold;
            box-shadow: 5px 5px 0px #000;
        }

        button.retro:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px #000;
        }

        /* Modern Styles */
        button.modern {
            background: var(--btn-p);
            color: var(--btn-t);
            padding: 12px 28px;
            border-radius: 8px;
            font-weight: 600;
            box-shadow: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        button.modern:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        button.modern:active {
            transform: translateY(0);
        }

        @keyframes glitch {
            0% { clip-path: var(--slice-1); transform: translate(-10px, -5px); }
            10% { clip-path: var(--slice-3); transform: translate(10px, 5px); }
            20% { clip-path: var(--slice-1); transform: translate(-5px, 5px); }
            30% { clip-path: var(--slice-3); transform: translate(0px, 2px); }
            40% { clip-path: var(--slice-2); transform: translate(-2px, 0px); }
            50% { clip-path: var(--slice-3); transform: translate(2px, 0px); }
            60% { clip-path: var(--slice-4); transform: translate(2px, 5px); }
            70% { clip-path: var(--slice-2); transform: translate(-5px, 5px); }
            80% { clip-path: var(--slice-5); transform: translate(10px, -5px); }
            90% { clip-path: var(--slice-1); transform: translate(-5px, 0px); }
            100% { clip-path: var(--slice-1); transform: translate(0); }
        }
    `;
j([
  q({ type: String }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Cyber", value: "cyber" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" },
      { label: "Neon", value: "neon" }
    ]
  })
], R.prototype, "theme", 2);
j([
  q({ type: String }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], R.prototype, "label", 2);
j([
  q({ type: String }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Danger", value: "danger" }
    ]
  })
], R.prototype, "variant", 2);
j([
  q({ type: Boolean }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], R.prototype, "disabled", 2);
j([
  q({ type: Boolean }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Loading",
    fieldMappings: "loading"
  })
], R.prototype, "loading", 2);
j([
  q({ type: String }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Tag (Cyber-only)",
    fieldMappings: "tag"
  })
], R.prototype, "tag", 2);
j([
  q({ type: String }),
  z({
    attributeType: D.PROPERTY,
    uiComponentType: U.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], R.prototype, "accentColor", 2);
j([
  z({
    attributeType: D.EVENT,
    eventTrigger: "click",
    displayLabel: "On Click"
  })
], R.prototype, "onClickEvent", 2);
R = j([
  le({
    name: "zero-uiv-button",
    version: "1.0.0",
    title: "Unified Button",
    elementSelector: "zero-uiv-button",
    group: "Uiverse Buttons",
    iconName: "button-icon.png"
  }),
  ue()
], R);
var gr = Object.getOwnPropertyDescriptor, mr = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? gr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = u(o) || o);
  return o;
};
const oe = {
  kind: "button",
  templateHtml: [
    "<div style='position:relative;display:inline-block;'>",
    "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #f59e0b);color:#000;border:3px solid #000;text-transform:uppercase;letter-spacing:2px;box-shadow:6px 6px 0 #000;'>",
    "{{display:label}}",
    "</button>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Retro", "Nostalgia"]
};
function _r(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let se = class extends R {
  static getStudioTemplate(r) {
    if (!r) return oe;
    const t = _r(r.studio.display.label || "RETRO");
    return {
      ...oe,
      templateHtml: [
        "<div style='position:relative;display:inline-block;'>",
        "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #f59e0b);color:#000;border:3px solid #000;text-transform:uppercase;letter-spacing:2px;box-shadow:6px 6px 0 #000;'>",
        t,
        "</button>",
        "</div>"
      ].join("")
    };
  }
  constructor() {
    super(), this.theme = "retro";
  }
};
se = mr([
  le({
    name: "zero-uiv-button-retro",
    version: "1.0.0",
    title: "Retro Button (Legacy)",
    elementSelector: "zero-uiv-button-retro",
    group: "Uiverse Buttons",
    iconName: "button-icon.png"
  }),
  ue()
], se);
export {
  se as ZeroUivButtonRetro,
  oe as retroTemplate
};
