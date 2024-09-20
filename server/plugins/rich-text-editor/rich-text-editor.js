var Te = Object.defineProperty;
var ke = (n, t, e) => t in n ? Te(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Dt = (n, t, e) => ke(n, typeof t != "symbol" ? t + "" : t, e);
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Lt == "object" ? Lt : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = o(n);
    typeof e.Reflect < "u" && (r = o(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function o(y, A) {
      return function(m, b) {
        Object.defineProperty(y, m, { configurable: !0, writable: !0, value: b }), A && A(m, b);
      };
    }
    function c() {
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
      return c() || l();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", c = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !_ && !y, m = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ft(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ft({ __proto__: null });
      } : function() {
        return ft({});
      },
      has: A ? function(i, s) {
        return r.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return r.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, b = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ce(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xe(), I = typeof WeakMap == "function" ? WeakMap : Pe(), D = o ? Symbol.for("@reflect-metadata:registry") : void 0, et = Ee(), At = Me(et);
    function se(i, s, a, u) {
      if (g(a)) {
        if (!Tt(i))
          throw new TypeError();
        if (!kt(s))
          throw new TypeError();
        return ve(i, s);
      } else {
        if (!Tt(i))
          throw new TypeError();
        if (!C(s))
          throw new TypeError();
        if (!C(u) && !g(u) && !L(u))
          throw new TypeError();
        return L(u) && (u = void 0), a = k(a), ge(i, s, a, u);
      }
    }
    t("decorate", se);
    function ae(i, s) {
      function a(u, v) {
        if (!C(u))
          throw new TypeError();
        if (!g(v) && !$e(v))
          throw new TypeError();
        Ct(i, s, u, v);
      }
      return a;
    }
    t("metadata", ae);
    function le(i, s, a, u) {
      if (!C(a))
        throw new TypeError();
      return g(u) || (u = k(u)), Ct(i, s, a, u);
    }
    t("defineMetadata", le);
    function ce(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Et(i, s, a);
    }
    t("hasMetadata", ce);
    function ue(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), ut(i, s, a);
    }
    t("hasOwnMetadata", ue);
    function de(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Mt(i, s, a);
    }
    t("getMetadata", de);
    function he(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), St(i, s, a);
    }
    t("getOwnMetadata", he);
    function fe(i, s) {
      if (!C(i))
        throw new TypeError();
      return g(s) || (s = k(s)), xt(i, s);
    }
    t("getMetadataKeys", fe);
    function pe(i, s) {
      if (!C(i))
        throw new TypeError();
      return g(s) || (s = k(s)), Pt(i, s);
    }
    t("getOwnMetadataKeys", pe);
    function ye(i, s, a) {
      if (!C(s))
        throw new TypeError();
      if (g(a) || (a = k(a)), !C(s))
        throw new TypeError();
      g(a) || (a = k(a));
      var u = W(
        s,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", ye);
    function ve(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], v = u(s);
        if (!g(v) && !L(v)) {
          if (!kt(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function ge(i, s, a, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], x = P(s, a, u);
        if (!g(x) && !L(x)) {
          if (!C(x))
            throw new TypeError();
          u = x;
        }
      }
      return u;
    }
    function Et(i, s, a) {
      var u = ut(i, s, a);
      if (u)
        return !0;
      var v = ht(s);
      return L(v) ? !1 : Et(i, v, a);
    }
    function ut(i, s, a) {
      var u = W(
        s,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Rt(u.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Mt(i, s, a) {
      var u = ut(i, s, a);
      if (u)
        return St(i, s, a);
      var v = ht(s);
      if (!L(v))
        return Mt(i, v, a);
    }
    function St(i, s, a) {
      var u = W(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Ct(i, s, a, u) {
      var v = W(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, u);
    }
    function xt(i, s) {
      var a = Pt(i, s), u = ht(i);
      if (u === null)
        return a;
      var v = xt(u, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new R(), x = [], w = 0, d = a; w < d.length; w++) {
        var h = d[w], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var h = $[p], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      return x;
    }
    function Pt(i, s) {
      var a = W(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Ot(i) {
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
    function L(i) {
      return i === null;
    }
    function me(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function be(i, s) {
      switch (Ot(i)) {
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
      var a = "string", u = It(i, c);
      if (u !== void 0) {
        var v = u.call(i, a);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return _e(i);
    }
    function _e(i, s) {
      var a, u;
      {
        var v = i.toString;
        if (nt(v)) {
          var u = v.call(i);
          if (!C(u))
            return u;
        }
        var a = i.valueOf;
        if (nt(a)) {
          var u = a.call(i);
          if (!C(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function we(i) {
      return "" + i;
    }
    function k(i) {
      var s = be(i);
      return me(s) ? s : we(s);
    }
    function Tt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function nt(i) {
      return typeof i == "function";
    }
    function kt(i) {
      return typeof i == "function";
    }
    function $e(i) {
      switch (Ot(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function dt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function It(i, s) {
      var a = i[s];
      if (a != null) {
        if (!nt(a))
          throw new TypeError();
        return a;
      }
    }
    function Nt(i) {
      var s = It(i, l);
      if (!nt(s))
        throw new TypeError();
      var a = s.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function Ut(i) {
      return i.value;
    }
    function jt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ht(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ht(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return s;
      var v = u.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Ae() {
      var i;
      !g(D) && typeof e.Reflect < "u" && !(D in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Se(e.Reflect));
      var s, a, u, v = new I(), P = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return P;
      function x(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(s):
            s = p;
            break;
          case s === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            u === void 0 && (u = new R()), u.add(p);
            break;
        }
      }
      function w(p, $) {
        if (!g(s)) {
          if (s.isProviderFor(p, $))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, $))
              return s;
            if (!g(u))
              for (var E = Nt(u); ; ) {
                var M = jt(E);
                if (!M)
                  return;
                var T = Ut(M);
                if (T.isProviderFor(p, $))
                  return Ht(E), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, $))
          return i;
      }
      function d(p, $) {
        var E = v.get(p), M;
        return g(E) || (M = E.get($)), g(M) && (M = w(p, $), g(M) || (g(E) && (E = new S(), v.set(p, E)), E.set($, M))), M;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(u) && u.has(p);
      }
      function f(p, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var M = d(p, $);
        if (M !== E) {
          if (!g(M))
            return !1;
          var T = v.get(p);
          g(T) && (T = new S(), v.set(p, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Ee() {
      var i;
      return !g(D) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[D]), g(i) && (i = Ae()), !g(D) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new I(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: d
      };
      return et.registerProvider(a), a;
      function u(h, f, p) {
        var $ = s.get(h), E = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new S(), s.set(h, $), E = !0;
        }
        var M = $.get(f);
        if (g(M)) {
          if (!p)
            return;
          if (M = new S(), $.set(f, M), !i.setProvider(h, f, a))
            throw $.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return M;
      }
      function v(h, f, p) {
        var $ = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g($) ? !1 : Rt($.has(h));
      }
      function P(h, f, p) {
        var $ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(h);
      }
      function x(h, f, p, $) {
        var E = u(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var p = [], $ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return p;
        for (var E = $.keys(), M = Nt(E), T = 0; ; ) {
          var zt = jt(M);
          if (!zt)
            return p.length = T, p;
          var Oe = Ut(zt);
          try {
            p[T] = Oe;
          } catch (Re) {
            try {
              Ht(M);
            } finally {
              throw Re;
            }
          }
          T++;
        }
      }
      function d(h, f, p) {
        var $ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Se(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, x = new I(), w = {
        isProviderFor: function(d, h) {
          var f = x.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new R(), x.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function W(i, s, a) {
      var u = et.getProvider(i, s);
      if (!g(u))
        return u;
      if (a) {
        if (et.setProvider(i, s, At))
          return At;
        throw new Error("Illegal state.");
      }
    }
    function Ce() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function w(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[l] = function() {
            return this;
          }, w.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, w.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, w;
        }()
      ), u = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, dt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[l] = function() {
            return this.entries();
          }, w.prototype._find = function(d, h) {
            if (!dt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (dt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return u;
      function v(w, d) {
        return w;
      }
      function P(w, d) {
        return d;
      }
      function x(w, d) {
        return [w, d];
      }
    }
    function xe() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new S();
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
    function Pe() {
      var i = 16, s = m.create(), a = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? m.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? m.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + w();
        while (m.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: m.create() });
        }
        return d[a];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function x(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function w() {
        var d = x(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ft(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Bt || (Bt = {}));
function Ie(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ne(n) {
  return function(t) {
    if (Ie(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements ? customElements.define(`${n.elementSelector}-${n.version}`, t) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: this
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ue(n) {
  return Ne(n);
}
function je(n) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Dt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(c) {
        try {
          super.update(c);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var y;
        const c = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (c && _) {
          const A = new CSSStyleSheet(), m = (y = c.sheet) == null ? void 0 : y.cssRules;
          m && (Array.from(m).forEach((b) => A.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, A]);
        } else if (c) {
          const A = c.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        }
        l.forEach((A) => {
          const m = A.cloneNode(!0);
          this.shadowRoot.appendChild(m);
        });
      }
    }
    return e;
  };
}
function He(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function ze(n) {
  return function(t, e) {
    try {
      He(n);
      const r = Reflect.getMetadata("ZeroAttribute", t) || [];
      typeof e == "string" && typeof t[e] != "function" && (n.fieldMappings = n.fieldMappings ?? e), r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function te(n) {
  return ze(n);
}
var it;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select";
})(it || (it = {}));
var ot;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(ot || (ot = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, mt = rt.ShadowRoot && (rt.ShadyCSS === void 0 || rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, bt = Symbol(), Gt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== bt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const De = (n) => new ee(typeof n == "string" ? n : n + "", void 0, bt), Le = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, o, c) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[c + 1], n[0]);
  return new ee(e, n, bt);
}, Be = (n, t) => {
  if (mt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = rt.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, n.appendChild(r);
  }
}, Vt = mt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return De(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ge, defineProperty: Ve, getOwnPropertyDescriptor: Fe, getOwnPropertyNames: We, getOwnPropertySymbols: qe, getPrototypeOf: Ze } = Object, U = globalThis, Ft = U.trustedTypes, Xe = Ft ? Ft.emptyScript : "", pt = U.reactiveElementPolyfillSupport, Z = (n, t) => n, st = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Xe : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, _t = (n, t) => !Ge(n, t), Wt = { attribute: !0, type: String, converter: st, reflect: !1, hasChanged: _t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class B extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Wt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && Ve(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: c } = Fe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const _ = o == null ? void 0 : o.call(this);
      c.call(this, l), this.requestUpdate(t, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Wt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const e = this.properties, r = [...We(e), ...qe(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(Vt(o));
    } else t !== void 0 && e.push(Vt(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Be(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EC(t, e) {
    var c;
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const l = (((c = r.converter) == null ? void 0 : c.toAttribute) !== void 0 ? r.converter : st).toAttribute(e, r.type);
      this._$Em = t, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var c;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = r.getPropertyOptions(o), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((c = l.converter) == null ? void 0 : c.fromAttribute) !== void 0 ? l.converter : st;
      this._$Em = o, this[o] = _.fromAttribute(e, l.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(t)), !(r.hasChanged ?? _t)(this[t], e)) return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [c, l] of this._$Ep) this[c] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [c, l] of o) l.wrapped !== !0 || this._$AL.has(c) || this[c] === void 0 || this.P(c, this[c], l);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var c;
        return (c = o.hostUpdate) == null ? void 0 : c.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[Z("elementProperties")] = /* @__PURE__ */ new Map(), B[Z("finalized")] = /* @__PURE__ */ new Map(), pt == null || pt({ ReactiveElement: B }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, at = X.trustedTypes, qt = at ? at.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ne = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, re = "?" + N, Ye = `<${re}>`, z = document, J = () => z.createComment(""), Q = (n) => n === null || typeof n != "object" && typeof n != "function", wt = Array.isArray, Je = (n) => wt(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", yt = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Zt = /-->/g, Xt = />/g, j = RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Yt = /'/g, Jt = /"/g, ie = /^(?:script|style|textarea|title)$/i, Qe = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), Ke = Qe(1), G = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), Qt = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function oe(n, t) {
  if (!wt(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qt !== void 0 ? qt.createHTML(t) : t;
}
const tn = (n, t) => {
  const e = n.length - 1, r = [];
  let o, c = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = q;
  for (let _ = 0; _ < e; _++) {
    const y = n[_];
    let A, m, b = -1, S = 0;
    for (; S < y.length && (l.lastIndex = S, m = l.exec(y), m !== null); ) S = l.lastIndex, l === q ? m[1] === "!--" ? l = Zt : m[1] !== void 0 ? l = Xt : m[2] !== void 0 ? (ie.test(m[2]) && (o = RegExp("</" + m[2], "g")), l = j) : m[3] !== void 0 && (l = j) : l === j ? m[0] === ">" ? (l = o ?? q, b = -1) : m[1] === void 0 ? b = -2 : (b = l.lastIndex - m[2].length, A = m[1], l = m[3] === void 0 ? j : m[3] === '"' ? Jt : Yt) : l === Jt || l === Yt ? l = j : l === Zt || l === Xt ? l = q : (l = j, o = void 0);
    const R = l === j && n[_ + 1].startsWith("/>") ? " " : "";
    c += l === q ? y + Ye : b >= 0 ? (r.push(A), y.slice(0, b) + ne + y.slice(b) + N + R) : y + N + (b === -2 ? _ : R);
  }
  return [oe(n, c + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class K {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let c = 0, l = 0;
    const _ = t.length - 1, y = this.parts, [A, m] = tn(t, e);
    if (this.el = K.createElement(A, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = H.nextNode()) !== null && y.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(ne)) {
          const S = m[l++], R = o.getAttribute(b).split(N), I = /([.?@])?(.*)/.exec(S);
          y.push({ type: 1, index: c, name: I[2], strings: R, ctor: I[1] === "." ? nn : I[1] === "?" ? rn : I[1] === "@" ? on : lt }), o.removeAttribute(b);
        } else b.startsWith(N) && (y.push({ type: 6, index: c }), o.removeAttribute(b));
        if (ie.test(o.tagName)) {
          const b = o.textContent.split(N), S = b.length - 1;
          if (S > 0) {
            o.textContent = at ? at.emptyScript : "";
            for (let R = 0; R < S; R++) o.append(b[R], J()), H.nextNode(), y.push({ type: 2, index: ++c });
            o.append(b[S], J());
          }
        }
      } else if (o.nodeType === 8) if (o.data === re) y.push({ type: 2, index: c });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(N, b + 1)) !== -1; ) y.push({ type: 7, index: c }), b += N.length - 1;
      }
      c++;
    }
  }
  static createElement(t, e) {
    const r = z.createElement("template");
    return r.innerHTML = t, r;
  }
}
function V(n, t, e = n, r) {
  var l, _;
  if (t === G) return t;
  let o = r !== void 0 ? (l = e.o) == null ? void 0 : l[r] : e.l;
  const c = Q(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== c && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), c === void 0 ? o = void 0 : (o = new c(n), o._$AT(n, e, r)), r !== void 0 ? (e.o ?? (e.o = []))[r] = o : e.l = o), o !== void 0 && (t = V(n, o._$AS(n, t.values), o, r)), t;
}
class en {
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
    const { el: { content: e }, parts: r } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    H.currentNode = o;
    let c = H.nextNode(), l = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let A;
        y.type === 2 ? A = new tt(c, c.nextSibling, this, t) : y.type === 1 ? A = new y.ctor(c, y.name, y.strings, this, t) : y.type === 6 && (A = new sn(c, this, t)), this._$AV.push(A), y = r[++_];
      }
      l !== (y == null ? void 0 : y.index) && (c = H.nextNode(), l++);
    }
    return H.currentNode = z, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class tt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = V(this, t, e), Q(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== G && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Je(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && Q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var c;
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = K.createElement(oe(r.h, r.h[0]), this.options)), r);
    if (((c = this._$AH) == null ? void 0 : c._$AD) === o) this._$AH.p(e);
    else {
      const l = new en(o, this), _ = l.u(this.options);
      l.p(e), this.T(_), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = Qt.get(t.strings);
    return e === void 0 && Qt.set(t.strings, e = new K(t)), e;
  }
  k(t) {
    wt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const c of t) o === e.length ? e.push(r = new tt(this.O(J()), this.O(J()), this, this.options)) : r = e[o], r._$AI(c), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this.v = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class lt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, c) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = c, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = O;
  }
  _$AI(t, e = this, r, o) {
    const c = this.strings;
    let l = !1;
    if (c === void 0) t = V(this, t, e, 0), l = !Q(t) || t !== this._$AH && t !== G, l && (this._$AH = t);
    else {
      const _ = t;
      let y, A;
      for (t = c[0], y = 0; y < c.length - 1; y++) A = V(this, _[r + y], e, y), A === G && (A = this._$AH[y]), l || (l = !Q(A) || A !== this._$AH[y]), A === O ? t = O : t !== O && (t += (A ?? "") + c[y + 1]), this._$AH[y] = A;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class nn extends lt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class rn extends lt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class on extends lt {
  constructor(t, e, r, o, c) {
    super(t, e, r, o, c), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = V(this, t, e, 0) ?? O) === G) return;
    const r = this._$AH, o = t === O && r !== O || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, c = t !== O && (r === O || o);
    o && this.element.removeEventListener(this.name, this, r), c && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class sn {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
}
const vt = X.litHtmlPolyfillSupport;
vt == null || vt(K, tt), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
const an = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const c = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = o = new tt(t.insertBefore(J(), c), c, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Y extends B {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = an(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this.o) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.o) == null || t.setConnected(!1);
  }
  render() {
    return G;
  }
}
var Kt;
Y._$litElement$ = !0, Y.finalized = !0, (Kt = globalThis.litElementHydrateSupport) == null || Kt.call(globalThis, { LitElement: Y });
const gt = globalThis.litElementPolyfillSupport;
gt == null || gt({ LitElement: Y });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ln = { attribute: !0, type: String, converter: st, reflect: !1, hasChanged: _t }, cn = (n = ln, t, e) => {
  const { kind: r, metadata: o } = e;
  let c = globalThis.litPropertyMetadata.get(o);
  if (c === void 0 && globalThis.litPropertyMetadata.set(o, c = /* @__PURE__ */ new Map()), c.set(e.name, n), r === "accessor") {
    const { name: l } = e;
    return { set(_) {
      const y = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(l, y, n);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, n), _;
    } };
  }
  if (r === "setter") {
    const { name: l } = e;
    return function(_) {
      const y = this[l];
      t.call(this, _), this.requestUpdate(l, y, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function $t(n) {
  return (t, e) => typeof e == "object" ? cn(n, t, e) : ((r, o, c) => {
    const l = o.hasOwnProperty(c);
    return o.constructor.createProperty(c, l ? { ...r, wrapped: !0 } : r), l ? Object.getOwnPropertyDescriptor(o, c) : void 0;
  })(n, t, e);
}
var un = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, ct = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? dn(t, e) : t, c = n.length - 1, l; c >= 0; c--)
    (l = n[c]) && (o = (r ? l(t, e, o) : l(o)) || o);
  return r && o && un(t, e, o), o;
};
let F = class extends Y {
  constructor() {
    super(...arguments), this.content = "", this.toolbarVisible = !1, this.editorMode = !0, this.isWrapped = !1, this.selectionRange = null;
  }
  set htmldata(n) {
    this.content = n, this.updateEditorContent();
  }
  firstUpdated() {
    this.updateEditorContent();
  }
  updated(n) {
    super.updated(n), n.has("content") && this.editorMode && this.restoreCursor(), this.updateContent();
  }
  storeCursor() {
    const n = window.getSelection();
    n && n.rangeCount > 0 && (this.selectionRange = n.getRangeAt(0).cloneRange());
  }
  restoreCursor() {
    var n;
    if (this.selectionRange) {
      const t = window.getSelection();
      t && ((n = this.selectionRange) != null && n.collapsed || t.removeAllRanges(), t.addRange(this.selectionRange), this.selectionRange.collapse(!1));
    }
  }
  toggleToolbar(n) {
    n.stopPropagation(), this.toolbarVisible = !this.toolbarVisible;
  }
  execCommand(n, t) {
    this.storeCursor(), document.execCommand(n, !0, t), this.updateContent();
  }
  updateContent() {
    var t;
    const n = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    n && (this.content = n.innerHTML, this.dispatchEvent(new CustomEvent("content-changed", {
      detail: { content: this.content },
      bubbles: !0,
      composed: !0
    })), console.log(this.content));
  }
  updateEditorContent() {
    var t;
    const n = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    n && (n.innerHTML = this.content || "", this.editorMode || n.querySelectorAll("img").forEach((e) => {
      this.unwrapImage(e);
    }));
  }
  onPaste() {
    setTimeout(() => {
      var t;
      const n = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
      this.editorMode && n.querySelectorAll("img").forEach((e) => {
        e.classList.contains("resize-icon") || (e.addEventListener("mouseenter", (r) => {
          this.editorMode && (r.stopPropagation(), this.wrapImage(e));
        }), e.addEventListener("mouseleave", (r) => {
          var c;
          if (!this.editorMode)
            return;
          r.stopPropagation();
          const o = r.relatedTarget;
          (!o || !((c = o == null ? void 0 : o.classList) != null && c.contains("resize-icon"))) && this.unwrapImage(e);
        }));
      });
    }, 400);
  }
  wrapImage(n) {
    var t;
    if (!n.hasAttribute("data-wrapped")) {
      const e = document.createElement("div");
      e.className = "image-container", (t = n.parentNode) == null || t.insertBefore(e, n), e.appendChild(n);
      const r = document.createElement("img");
      r.className = "resize-icon", r.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEwIDIwTDIwIDIwTDIwIDEwIiBzdHJva2U9IiMyMjIyMjIiLz4NCjxwYXRoIGQ9Ik0xMiAxN0wxNyAxN0wxNyAxMiIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8L3N2Zz4=", r.alt = "Resize Icon", e.appendChild(r), n.setAttribute("data-wrapped", "true"), this.addResizeFunctionality(e);
    }
  }
  unwrapImage(n) {
    var t;
    if (n.hasAttribute("data-wrapped")) {
      const e = n.parentNode;
      if (e.classList.contains("image-container")) {
        const r = e.querySelector(".resize-icon");
        r && r.remove(), (t = e.parentNode) == null || t.insertBefore(n, e), e.remove(), n.removeAttribute("data-wrapped");
      }
    }
  }
  addResizeFunctionality(n) {
    const t = n.querySelector("img"), e = n.querySelector(".resize-icon");
    let r, o, c, l;
    const _ = (m) => {
      const b = c + (m.clientX - r), S = l + (m.clientY - o);
      t.style.width = `${b}px`, t.style.height = `${S}px`;
    }, y = () => {
      document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", y);
    }, A = (m) => {
      r = m.clientX, o = m.clientY, c = t.offsetWidth, l = t.offsetHeight, document.addEventListener("mousemove", _), document.addEventListener("mouseup", y);
    };
    e.addEventListener("mousedown", A), e.addEventListener("mouseleave", (m) => {
      var S;
      m.stopPropagation();
      const b = m.relatedTarget;
      b && ((S = b == null ? void 0 : b.classList) != null && S.contains("editor")) && this.unwrapImage(t);
    });
  }
  handleInput(n) {
    n.stopPropagation(), this.updateContent();
  }
  handleColorChange(n) {
    n.stopPropagation();
    const t = n.target;
    this.execCommand("foreColor", t.value);
  }
  handleBgColorChange(n) {
    n.stopPropagation();
    const t = n.target;
    this.execCommand("backColor", t.value);
  }
  handleFontSizeChange(n) {
    n.stopPropagation();
    const t = n.target;
    this.execCommand("fontSize", t.value);
  }
  handleAlignChange(n) {
    n.stopPropagation();
    const t = n.target;
    this.execCommand("justifyLeft", t.value === "left" ? "" : null), this.execCommand("justifyCenter", t.value === "center" ? "" : null), this.execCommand("justifyRight", t.value === "right" ? "" : null), this.execCommand("justifyFull", t.value === "justify" ? "" : null);
  }
  toggleEditorMode() {
    var t;
    this.editorMode = !this.editorMode;
    const n = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    this.editorMode || n.querySelectorAll("img").forEach((e) => {
      this.unwrapImage(e);
    });
  }
  handleFontFamilyChange(n) {
    n.stopPropagation();
    const t = n.target;
    this.execCommand("fontName", t.value);
  }
  render() {
    return Ke`
      <div class="toolbar ${this.toolbarVisible ? "visible" : ""}">
        <button @click="${() => this.execCommand("bold")}" title="Bold">B</button>
        <button @click="${() => this.execCommand("italic")}" title="Italic">I</button>
        <button @click="${() => this.execCommand("underline")}" title="Underline">U</button>
        <button @click="${() => this.execCommand("strikethrough")}" title="Strikethrough">S</button>
        <input type="color" @input="${this.handleColorChange}" title="Text Color">
        <input type="color" @input="${this.handleBgColorChange}" title="Background Color">
        <select @change="${this.handleFontFamilyChange}" title="Font Family">
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <select @change="${this.handleFontSizeChange}">
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>
        <select @change="${this.handleAlignChange}">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
        <!-- <button @click="${this.toggleEditorMode}" title="Toggle Mode">
          ${this.editorMode ? "Preview" : "Edit"}
        </button> -->
      </div>
      <button class="toolbar-toggle" @click="${this.toggleToolbar}" ?hidden="${!this.editorMode}" title="Toggle Toolbar">🛠️</button>
      <div class="editor" contenteditable="${this.editorMode}" @input="${this.handleInput}" @paste="${this.onPaste}"></div>
      <!-- <div class="preview" ?hidden="${this.editorMode}"></div> -->
    `;
  }
};
F.styles = Le`
    :host {
      display: block;
      width: 100%;
      margin: auto;
      /* border: 1px solid #ddd; */
      border-radius: 8px;
      overflow: visible;
      position: relative;
    }

    :host([editorMode]) .editor {
      position: relative;
    }
    :host([editorMode]) .editor:hover {
      border: 1px solid #ddd; /* Change this to your desired border color */
      box-sizing: border-box;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 8px;
      color: #5b5f61;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      z-index: 10;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
    .toolbar.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .toolbar button, .toolbar select, .toolbar input[type="color"] {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      padding: 6px;
      transition: background-color 0.3s ease;
      position: relative;
    }
    .toolbar button:hover, .toolbar select:hover, .toolbar input[type="color"]:hover {
      background-color: #e0e0e0;
      border-radius: 4px;
    }
    .toolbar button::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 4px;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .toolbar button:hover::after {
      opacity: 1;
    }
    .editor, .preview {
      height: 100%;
      padding: 10px;
      outline: none;
      position: relative;
      z-index: 1;
    }
    .toolbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 18px;
      transition: background-color 0.3s ease;
      z-index: 20;
    }
    .toolbar-toggle:hover {
      background-color: #e0e0e0;
      border-radius: 50%;
    }
    .toolbar input[type="color"] {
      width: 24px;
      height: 24px;
      padding: 0;
      border-radius: 50%;
    }
    .toolbar .align-left::before { content: '←'; }
    .toolbar .align-center::before { content: '↔'; }
    .toolbar .align-right::before { content: '→'; }
    .toolbar .align-justify::before { content: '≡'; }
    .toolbar .bold::before { content: 'B'; font-weight: bold; }
    .toolbar .italic::before { content: 'I'; font-style: italic; }
    .toolbar .underline::before { content: 'U'; text-decoration: underline; }
    .toolbar .strikethrough::before { content: 'S'; text-decoration: line-through; }
    .toolbar select {
      font-size: 14px;
    }
    .image-container {
      position: relative;
      display: inline-block;
      /* border: 1px solid #ddd; */
    }
    .resize-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
      /* background: url('resize-icon.png') no-repeat center center; */
      /* background-color: red; */
      background-size: contain;
      cursor: nwse-resize;
      visibility: visible
    }
    /* .image-container:hover .resize-icon {
      visibility: visible;
    } */
  `;
ct([
  $t({ type: String }),
  te({
    attributeType: ot.PROPERTY,
    uiComponentType: it.TEXTAREA,
    displayLabel: "",
    placeholderText: "",
    fieldMappings: "htmldata"
  })
], F.prototype, "htmldata", 1);
ct([
  $t({ type: Boolean, reflect: !0 })
], F.prototype, "toolbarVisible", 2);
ct([
  $t({ type: Boolean, reflect: !0 }),
  te({
    attributeType: ot.PROPERTY,
    uiComponentType: it.CHECKBOX,
    displayLabel: "",
    placeholderText: "",
    initialValue: !0,
    fieldMappings: "editorMode"
  })
], F.prototype, "editorMode", 2);
F = ct([
  Ue({
    name: "rich-text-editor",
    version: "1.0.0",
    title: "Rich text editor",
    elementSelector: "zero-rich-text-editor",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  je()
], F);
export {
  F as RichTextEditor
};
