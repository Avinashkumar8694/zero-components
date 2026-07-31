var Ne = Object.defineProperty;
var Ue = (r, t, e) => t in r ? Ne(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Lt = (r, t, e) => Ue(r, typeof t != "symbol" ? t + "" : t, e);
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Gt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
      return function(b, g) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: g }), A && A(b, g);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, g = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ce(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pe(), I = typeof WeakMap == "function" ? WeakMap : Te(), V = s ? Symbol.for("@reflect-metadata:registry") : void 0, at = Me(), St = xe(at);
    function ue(i, o, a, h) {
      if (m(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Ut(o))
          throw new TypeError();
        return me(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(h) && !m(h) && !F(h))
          throw new TypeError();
        return F(h) && (h = void 0), a = U(a), ge(i, o, a, h);
      }
    }
    t("decorate", ue);
    function le(i, o) {
      function a(h, v) {
        if (!x(h))
          throw new TypeError();
        if (!m(v) && !Ee(v))
          throw new TypeError();
        Ct(i, o, h, v);
      }
      return a;
    }
    t("metadata", le);
    function he(i, o, a, h) {
      if (!x(a))
        throw new TypeError();
      return m(h) || (h = U(h)), Ct(i, o, a, h);
    }
    t("defineMetadata", he);
    function ce(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), Mt(i, o, a);
    }
    t("hasMetadata", ce);
    function de(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), ft(i, o, a);
    }
    t("hasOwnMetadata", de);
    function fe(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), xt(i, o, a);
    }
    t("getMetadata", fe);
    function pe(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), Ot(i, o, a);
    }
    t("getOwnMetadata", pe);
    function ye(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = U(o)), Pt(i, o);
    }
    t("getMetadataKeys", ye);
    function ve(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = U(o)), Tt(i, o);
    }
    t("getOwnMetadataKeys", ve);
    function _e(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (m(a) || (a = U(a)), !x(o))
        throw new TypeError();
      m(a) || (a = U(a));
      var h = X(
        o,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", _e);
    function me(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var h = i[a], v = h(o);
        if (!m(v) && !F(v)) {
          if (!Ut(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function ge(i, o, a, h) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], O = C(o, a, h);
        if (!m(O) && !F(O)) {
          if (!x(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Mt(i, o, a) {
      var h = ft(i, o, a);
      if (h)
        return !0;
      var v = yt(o);
      return F(v) ? !1 : Mt(i, v, a);
    }
    function ft(i, o, a) {
      var h = X(
        o,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : kt(h.OrdinaryHasOwnMetadata(i, o, a));
    }
    function xt(i, o, a) {
      var h = ft(i, o, a);
      if (h)
        return Ot(i, o, a);
      var v = yt(o);
      if (!F(v))
        return xt(i, v, a);
    }
    function Ot(i, o, a) {
      var h = X(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(h))
        return h.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ct(i, o, a, h) {
      var v = X(
        a,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, h);
    }
    function Pt(i, o) {
      var a = Tt(i, o), h = yt(i);
      if (h === null)
        return a;
      var v = Pt(h, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new T(), O = [], $ = 0, c = a; $ < c.length; $++) {
        var d = c[$], f = C.has(d);
        f || (C.add(d), O.push(d));
      }
      for (var y = 0, w = v; y < w.length; y++) {
        var d = w[y], f = C.has(d);
        f || (C.add(d), O.push(d));
      }
      return O;
    }
    function Tt(i, o) {
      var a = X(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function F(i) {
      return i === null;
    }
    function $e(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function we(i, o) {
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
      var a = "string", h = It(i, u);
      if (h !== void 0) {
        var v = h.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return be(i);
    }
    function be(i, o) {
      var a, h;
      {
        var v = i.toString;
        if (ut(v)) {
          var h = v.call(i);
          if (!x(h))
            return h;
        }
        var a = i.valueOf;
        if (ut(a)) {
          var h = a.call(i);
          if (!x(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function kt(i) {
      return !!i;
    }
    function Ae(i) {
      return "" + i;
    }
    function U(i) {
      var o = we(i);
      return $e(o) ? o : Ae(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ut(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      return typeof i == "function";
    }
    function Ee(i) {
      switch (Rt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function It(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ut(a))
          throw new TypeError();
        return a;
      }
    }
    function zt(i) {
      var o = It(i, l);
      if (!ut(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function Ht(i) {
      return i.value;
    }
    function jt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Dt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function yt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var v = h.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Se() {
      var i;
      !m(V) && typeof e.Reflect < "u" && !(V in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Oe(e.Reflect));
      var o, a, h, v = new I(), C = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return C;
      function O(y) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case m(o):
            o = y;
            break;
          case o === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            h === void 0 && (h = new T()), h.add(y);
            break;
        }
      }
      function $(y, w) {
        if (!m(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!m(h))
              for (var E = zt(h); ; ) {
                var S = jt(E);
                if (!S)
                  return;
                var k = Ht(S);
                if (k.isProviderFor(y, w))
                  return Dt(E), k;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, w))
          return i;
      }
      function c(y, w) {
        var E = v.get(y), S;
        return m(E) || (S = E.get(w)), m(S) && (S = $(y, w), m(S) || (m(E) && (E = new M(), v.set(y, E)), E.set(w, S))), S;
      }
      function d(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(h) && h.has(y);
      }
      function f(y, w, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = c(y, w);
        if (S !== E) {
          if (!m(S))
            return !1;
          var k = v.get(y);
          m(k) && (k = new M(), v.set(y, k)), k.set(w, E);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !m(V) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[V]), m(i) && (i = Se()), !m(V) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xe(i) {
      var o = new I(), a = {
        isProviderFor: function(d, f) {
          var y = o.get(d);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: c
      };
      return at.registerProvider(a), a;
      function h(d, f, y) {
        var w = o.get(d), E = !1;
        if (m(w)) {
          if (!y)
            return;
          w = new M(), o.set(d, w), E = !0;
        }
        var S = w.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new M(), w.set(f, S), !i.setProvider(d, f, a))
            throw w.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        return m(w) ? !1 : kt(w.has(d));
      }
      function C(d, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(d);
      }
      function O(d, f, y, w) {
        var E = h(
          y,
          w,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function $(d, f) {
        var y = [], w = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return y;
        for (var E = w.keys(), S = zt(E), k = 0; ; ) {
          var Wt = jt(S);
          if (!Wt)
            return y.length = k, y;
          var Re = Ht(Wt);
          try {
            y[k] = Re;
          } catch (ke) {
            try {
              Dt(S);
            } finally {
              throw ke;
            }
          }
          k++;
        }
      }
      function c(d, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(d))
          return !1;
        if (w.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Oe(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, h = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new I(), $ = {
        isProviderFor: function(c, d) {
          var f = O.get(c);
          return !m(f) && f.has(d) ? !0 : v(c, d).length ? (m(f) && (f = new T(), O.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return $;
    }
    function X(i, o, a) {
      var h = at.getProvider(i, o);
      if (!m(h))
        return h;
      if (a) {
        if (at.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Ce() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function $(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[l] = function() {
            return this;
          }, $.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, $.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, $;
        }()
      ), h = (
        /** @class */
        function() {
          function $() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty($.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), $.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, $.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, $.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, pt(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, $.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[l] = function() {
            return this.entries();
          }, $.prototype._find = function(c, d) {
            if (!pt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return h;
      function v($, c) {
        return $;
      }
      function C($, c) {
        return c;
      }
      function O($, c) {
        return [$, c];
      }
    }
    function Pe() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new M();
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
      return i;
    }
    function Te() {
      var i = 16, o = b.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var y = v(
              d,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = v(
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
          c = "@@WeakMap@@" + $();
        while (b.has(o, c));
        return o[c] = !0, c;
      }
      function v(c, d) {
        if (!n.call(c, a)) {
          if (!d)
            return;
          Object.defineProperty(c, a, { value: b.create() });
        }
        return c[a];
      }
      function C(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : C(d, c), d;
        }
        return C(new Array(c), c);
      }
      function $() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function ze(r) {
  return function(t) {
    if (Ie(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
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
function He(r) {
  return ze(r);
}
function je(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Lt(this, "_stylesApplied", !1);
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
          const b = new CSSStyleSheet(), g = (A = u.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((M) => b.insertRule(M.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (u) {
          const b = u.cloneNode(!0);
          p.appendChild(b);
        }
        l.forEach((b) => {
          const g = b.cloneNode(!0);
          p.appendChild(g);
        });
      }
    }
    return e;
  };
}
function De(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function We(r) {
  return function(t, e) {
    try {
      De(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function it(r) {
  return We(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var B;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(B || (B = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = globalThis, wt = lt.ShadowRoot && (lt.ShadyCSS === void 0 || lt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, bt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ne = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== bt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (wt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Le = (r) => new ne(typeof r == "string" ? r : r + "", void 0, bt), Be = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[u + 1], r[0]);
  return new ne(e, r, bt);
}, Ge = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = lt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Le(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Fe, getOwnPropertyDescriptor: qe, getOwnPropertyNames: Ze, getOwnPropertySymbols: Ye, getPrototypeOf: Xe } = Object, H = globalThis, qt = H.trustedTypes, Je = qt ? qt.emptyScript : "", _t = H.reactiveElementPolyfillSupport, Q = (r, t) => r, ht = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Je : null;
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
} }, At = (r, t) => !Ve(r, t), Zt = { attribute: !0, type: String, converter: ht, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Fe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: u } = qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get: s, set(l) {
      const _ = s == null ? void 0 : s.call(this);
      u == null || u.call(this, l), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const e = this.properties, n = [...Ze(e), ...Ye(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(Ft(s));
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
    return Ge(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ht).toAttribute(e, n.type);
      this._$Em = t, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var u, l;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((u = _.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? _.converter : ht;
      this._$Em = s;
      const A = p.fromAttribute(e, _.type);
      this[s] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, u) {
    var l;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (u = this[t]), n ?? (n = _.getPropertyOptions(t)), !((n.hasChanged ?? At)(u, e) || n.useDefault && n.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(t)) && !this.hasAttribute(_._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: u }, l) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, l ?? e ?? this[t]), u !== !0 || l !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) {
        const { wrapped: _ } = l, p = this[u];
        _ !== !0 || this._$AL.has(u) || p === void 0 || this.C(u, void 0, l, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[Q("elementProperties")] = /* @__PURE__ */ new Map(), q[Q("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: q }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Yt = (r) => r, ct = K.trustedTypes, Xt = ct ? ct.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ie = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + z, Qe = `<${se}>`, G = document, et = () => G.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", Et = Array.isArray, Ke = (r) => Et(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", mt = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, j = RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, oe = /^(?:script|style|textarea|title)$/i, tr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), er = tr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), D = G.createTreeWalker(G, 129);
function ae(r, t) {
  if (!Et(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const rr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = J;
  for (let _ = 0; _ < e; _++) {
    const p = r[_];
    let A, b, g = -1, M = 0;
    for (; M < p.length && (l.lastIndex = M, b = l.exec(p), b !== null); ) M = l.lastIndex, l === J ? b[1] === "!--" ? l = Jt : b[1] !== void 0 ? l = Qt : b[2] !== void 0 ? (oe.test(b[2]) && (s = RegExp("</" + b[2], "g")), l = j) : b[3] !== void 0 && (l = j) : l === j ? b[0] === ">" ? (l = s ?? J, g = -1) : b[1] === void 0 ? g = -2 : (g = l.lastIndex - b[2].length, A = b[1], l = b[3] === void 0 ? j : b[3] === '"' ? te : Kt) : l === te || l === Kt ? l = j : l === Jt || l === Qt ? l = J : (l = j, s = void 0);
    const T = l === j && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === J ? p + Qe : g >= 0 ? (n.push(A), p.slice(0, g) + ie + p.slice(g) + z + T) : p + z + (g === -2 ? _ : T);
  }
  return [ae(r, u + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const _ = t.length - 1, p = this.parts, [A, b] = rr(t, e);
    if (this.el = nt.createElement(A, n), D.currentNode = this.el.content, e === 2 || e === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = D.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(ie)) {
          const M = b[l++], T = s.getAttribute(g).split(z), I = /([.?@])?(.*)/.exec(M);
          p.push({ type: 1, index: u, name: I[2], strings: T, ctor: I[1] === "." ? ir : I[1] === "?" ? sr : I[1] === "@" ? or : dt }), s.removeAttribute(g);
        } else g.startsWith(z) && (p.push({ type: 6, index: u }), s.removeAttribute(g));
        if (oe.test(s.tagName)) {
          const g = s.textContent.split(z), M = g.length - 1;
          if (M > 0) {
            s.textContent = ct ? ct.emptyScript : "";
            for (let T = 0; T < M; T++) s.append(g[T], et()), D.nextNode(), p.push({ type: 2, index: ++u });
            s.append(g[M], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === se) p.push({ type: 2, index: u });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(z, g + 1)) !== -1; ) p.push({ type: 7, index: u }), g += z.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const n = G.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Y(r, t, e = r, n) {
  var l, _;
  if (t === Z) return t;
  let s = n !== void 0 ? (l = e._$Co) == null ? void 0 : l[n] : e._$Cl;
  const u = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), u === void 0 ? s = void 0 : (s = new u(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Y(r, s._$AS(r, t.values), s, n)), t;
}
class nr {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? G).importNode(e, !0);
    D.currentNode = s;
    let u = D.nextNode(), l = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (l === p.index) {
        let A;
        p.type === 2 ? A = new st(u, u.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(u, p.name, p.strings, this, t) : p.type === 6 && (A = new ar(u, this, t)), this._$AV.push(A), p = n[++_];
      }
      l !== (p == null ? void 0 : p.index) && (u = D.nextNode(), l++);
    }
    return D.currentNode = G, s;
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
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), rt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ke(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(G.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(ae(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(e);
    else {
      const l = new nr(s, this), _ = l.u(this.options);
      l.p(e), this.T(_), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const u of t) s === e.length ? e.push(n = new st(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(u), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Yt(t).nextSibling;
      Yt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, u) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = Y(this, t, e, 0), l = !rt(t) || t !== this._$AH && t !== Z, l && (this._$AH = t);
    else {
      const _ = t;
      let p, A;
      for (t = u[0], p = 0; p < u.length - 1; p++) A = Y(this, _[n + p], e, p), A === Z && (A = this._$AH[p]), l || (l = !rt(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + u[p + 1]), this._$AH[p] = A;
    }
    l && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ir extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class sr extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class or extends dt {
  constructor(t, e, n, s, u) {
    super(t, e, n, s, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? P) === Z) return;
    const n = this._$AH, s = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, u = t !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ar {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Y(this, t);
  }
}
const gt = K.litHtmlPolyfillSupport;
gt == null || gt(nt, st), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new st(t.insertBefore(et(), u), u, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class tt extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
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
    return Z;
  }
}
var re;
tt._$litElement$ = !0, tt.finalized = !0, (re = W.litElementHydrateSupport) == null || re.call(W, { LitElement: tt });
const $t = W.litElementPolyfillSupport;
$t == null || $t({ LitElement: tt });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: At }, hr = (r = lr, t, e) => {
  const { kind: n, metadata: s } = e;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), u.set(e.name, r), n === "accessor") {
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
function ot(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, n), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(r, t, e);
}
var cr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, N = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? dr(t, e) : t, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (s = (n ? l(t, e, s) : l(s)) || s);
  return n && s && cr(t, e, s), s;
};
function fr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let R = class extends tt {
  constructor() {
    super(...arguments), this.text = "Add descriptive text here.", this.size = 16, this.weight = 400, this.color = "#4b5563", this.maxWidth = 0;
  }
  static getStudioTemplate(r) {
    var l, _, p, A, b, g, M, T;
    if (!r) return {
      kind: "text",
      templateHtml: "<p style='margin:0;color:var(--uiv-text-color,#4b5563);font-size:16px;line-height:1.65;'>{{display:text}}</p>",
      textProp: "text",
      badges: ["Text"]
    };
    const t = fr(r.studio.display.text || "Add descriptive text here."), e = (((l = r.props) == null ? void 0 : l.size) ?? ((_ = r.studio.props) == null ? void 0 : _.size)) || 16, n = (((p = r.props) == null ? void 0 : p.weight) ?? ((A = r.studio.props) == null ? void 0 : A.weight)) || 400, s = (((b = r.props) == null ? void 0 : b.color) ?? ((g = r.studio.props) == null ? void 0 : g.color)) || "var(--uiv-text-color, #4b5563)", u = ((M = r.props) == null ? void 0 : M.maxWidth) ?? ((T = r.studio.props) == null ? void 0 : T.maxWidth);
    return {
      kind: "text",
      templateHtml: `<p style='margin:0;color:${s};font-size:${e}px;font-weight:${n};line-height:1.65; ${u ? "max-width:" + u + "px;" : ""}'>${t}</p>`,
      textProp: "text",
      badges: ["Text"]
    };
  }
  get textConfig() {
    return this.text;
  }
  set textConfig(r) {
    this.text = r;
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = Number(r) || 16;
  }
  get weightConfig() {
    return this.weight;
  }
  set weightConfig(r) {
    this.weight = Number(r) || 400;
  }
  get colorConfig() {
    return this.color;
  }
  set colorConfig(r) {
    this.color = r || "#4b5563";
  }
  get maxWidthConfig() {
    return this.maxWidth;
  }
  set maxWidthConfig(r) {
    this.maxWidth = Math.max(0, Number(r) || 0);
  }
  render() {
    const r = [
      `--zero-text-color:${this.color || "#4b5563"}`,
      `--zero-text-size:${Math.max(10, Number(this.size) || 16)}px`,
      `--zero-text-weight:${Math.max(100, Number(this.weight) || 400)}`,
      `--zero-text-width:${this.maxWidth > 0 ? `${this.maxWidth}px` : "none"}`
    ].join(";");
    return er`<p style=${r}>${this.text}</p>`;
  }
};
R.styles = Be`
    :host {
      display: block;
    }

    p {
      margin: 0;
      color: var(--zero-text-color, #4b5563);
      font-size: var(--zero-text-size, 16px);
      font-weight: var(--zero-text-weight, 400);
      line-height: 1.65;
      max-width: var(--zero-text-width, none);
      text-wrap: pretty;
    }
  `;
N([
  ot({ type: String })
], R.prototype, "text", 2);
N([
  ot({ type: Number })
], R.prototype, "size", 2);
N([
  ot({ type: Number })
], R.prototype, "weight", 2);
N([
  ot({ type: String })
], R.prototype, "color", 2);
N([
  ot({ type: Number, attribute: "max-width" })
], R.prototype, "maxWidth", 2);
N([
  it({
    attributeType: B.PROPERTY,
    uiComponentType: L.TEXTAREA,
    displayLabel: "Text",
    fieldMappings: "text"
  })
], R.prototype, "textConfig", 1);
N([
  it({
    attributeType: B.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Size",
    fieldMappings: "size"
  })
], R.prototype, "sizeConfig", 1);
N([
  it({
    attributeType: B.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Weight",
    fieldMappings: "weight"
  })
], R.prototype, "weightConfig", 1);
N([
  it({
    attributeType: B.PROPERTY,
    uiComponentType: L.COLOR_PICKER,
    displayLabel: "Color",
    fieldMappings: "color"
  })
], R.prototype, "colorConfig", 1);
N([
  it({
    attributeType: B.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Max Width (px, 0 = none)",
    fieldMappings: "maxWidth"
  })
], R.prototype, "maxWidthConfig", 1);
R = N([
  He({
    name: "zero-text",
    version: "1.0.0",
    title: "Text",
    elementSelector: "zero-text",
    group: "Content",
    iconName: "text-icon.png"
  }),
  je()
], R);
export {
  R as ZeroText
};
