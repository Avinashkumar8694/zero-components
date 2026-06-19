var Ne = Object.defineProperty;
var ze = (e, t, r) => t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Bt = (e, t, r) => ze(e, typeof t != "symbol" ? t + "" : t, r);
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
var Gt;
(function(e) {
  (function(t) {
    var r = typeof globalThis == "object" ? globalThis : typeof Vt == "object" ? Vt : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(e);
    typeof r.Reflect < "u" && (n = o(r.Reflect, n)), t(n, r), typeof r.Reflect > "u" && (r.Reflect = e);
    function o(p, x) {
      return function(_, m) {
        Object.defineProperty(p, _, { configurable: !0, writable: !0, value: m }), x && x(_, m);
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
    function g() {
      return l() || c();
    }
  })(function(t, r) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !g && !p, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return pt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pt({ __proto__: null });
      } : function() {
        return pt({});
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
    }, m = Object.getPrototypeOf(Function), A = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Oe(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), I = typeof WeakMap == "function" ? WeakMap : Te(), B = o ? Symbol.for("@reflect-metadata:registry") : void 0, it = Se(), At = Me(it);
    function ce(i, s, a, d) {
      if (b(a)) {
        if (!It(i))
          throw new TypeError();
        if (!Nt(s))
          throw new TypeError();
        return me(i, s);
      } else {
        if (!It(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(d) && !b(d) && !V(d))
          throw new TypeError();
        return V(d) && (d = void 0), a = k(a), _e(i, s, a, d);
      }
    }
    t("decorate", ce);
    function de(i, s) {
      function a(d, y) {
        if (!S(d))
          throw new TypeError();
        if (!b(y) && !Ae(y))
          throw new TypeError();
        Pt(i, s, d, y);
      }
      return a;
    }
    t("metadata", de);
    function ue(i, s, a, d) {
      if (!S(a))
        throw new TypeError();
      return b(d) || (d = k(d)), Pt(i, s, a, d);
    }
    t("defineMetadata", ue);
    function he(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return b(a) || (a = k(a)), Ct(i, s, a);
    }
    t("hasMetadata", he);
    function fe(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return b(a) || (a = k(a)), ut(i, s, a);
    }
    t("hasOwnMetadata", fe);
    function pe(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return b(a) || (a = k(a)), St(i, s, a);
    }
    t("getMetadata", pe);
    function ve(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return b(a) || (a = k(a)), Mt(i, s, a);
    }
    t("getOwnMetadata", ve);
    function ye(i, s) {
      if (!S(i))
        throw new TypeError();
      return b(s) || (s = k(s)), Ot(i, s);
    }
    t("getMetadataKeys", ye);
    function ge(i, s) {
      if (!S(i))
        throw new TypeError();
      return b(s) || (s = k(s)), Rt(i, s);
    }
    t("getOwnMetadataKeys", ge);
    function be(i, s, a) {
      if (!S(s))
        throw new TypeError();
      if (b(a) || (a = k(a)), !S(s))
        throw new TypeError();
      b(a) || (a = k(a));
      var d = q(
        s,
        a,
        /*Create*/
        !1
      );
      return b(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", be);
    function me(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], y = d(s);
        if (!b(y) && !V(y)) {
          if (!Nt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function _e(i, s, a, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], M = P(s, a, d);
        if (!b(M) && !V(M)) {
          if (!S(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function Ct(i, s, a) {
      var d = ut(i, s, a);
      if (d)
        return !0;
      var y = ft(s);
      return V(y) ? !1 : Ct(i, y, a);
    }
    function ut(i, s, a) {
      var d = q(
        s,
        a,
        /*Create*/
        !1
      );
      return b(d) ? !1 : kt(d.OrdinaryHasOwnMetadata(i, s, a));
    }
    function St(i, s, a) {
      var d = ut(i, s, a);
      if (d)
        return Mt(i, s, a);
      var y = ft(s);
      if (!V(y))
        return St(i, y, a);
    }
    function Mt(i, s, a) {
      var d = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!b(d))
        return d.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pt(i, s, a, d) {
      var y = q(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, d);
    }
    function Ot(i, s) {
      var a = Rt(i, s), d = ft(i);
      if (d === null)
        return a;
      var y = Ot(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), M = [], w = 0, u = a; w < u.length; w++) {
        var h = u[w], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var h = $[v], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      return M;
    }
    function Rt(i, s) {
      var a = q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Tt(i) {
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
    function b(i) {
      return i === void 0;
    }
    function V(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function $e(i, s) {
      switch (Tt(i)) {
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
      var a = "string", d = zt(i, l);
      if (d !== void 0) {
        var y = d.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return xe(i);
    }
    function xe(i, s) {
      var a, d;
      {
        var y = i.toString;
        if (ot(y)) {
          var d = y.call(i);
          if (!S(d))
            return d;
        }
        var a = i.valueOf;
        if (ot(a)) {
          var d = a.call(i);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function kt(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function k(i) {
      var s = $e(i);
      return we(s) ? s : Ee(s);
    }
    function It(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ot(i) {
      return typeof i == "function";
    }
    function Nt(i) {
      return typeof i == "function";
    }
    function Ae(i) {
      switch (Tt(i)) {
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
    function zt(i, s) {
      var a = i[s];
      if (a != null) {
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(i) {
      var s = zt(i, c);
      if (!ot(s))
        throw new TypeError();
      var a = s.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Dt(i) {
      return i.value;
    }
    function Ht(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ut(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ft(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === m || s !== m)
        return s;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Ce() {
      var i;
      !b(B) && typeof r.Reflect < "u" && !(B in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (i = Pe(r.Reflect));
      var s, a, d, y = new I(), P = {
        registerProvider: M,
        getProvider: u,
        setProvider: f
      };
      return P;
      function M(v) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case b(s):
            s = v;
            break;
          case s === v:
            break;
          case b(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            d === void 0 && (d = new R()), d.add(v);
            break;
        }
      }
      function w(v, $) {
        if (!b(s)) {
          if (s.isProviderFor(v, $))
            return s;
          if (!b(a)) {
            if (a.isProviderFor(v, $))
              return s;
            if (!b(d))
              for (var E = jt(d); ; ) {
                var C = Ht(E);
                if (!C)
                  return;
                var T = Dt(C);
                if (T.isProviderFor(v, $))
                  return Ut(E), T;
              }
          }
        }
        if (!b(i) && i.isProviderFor(v, $))
          return i;
      }
      function u(v, $) {
        var E = y.get(v), C;
        return b(E) || (C = E.get($)), b(C) && (C = w(v, $), b(C) || (b(E) && (E = new A(), y.set(v, E)), E.set($, C))), C;
      }
      function h(v) {
        if (b(v))
          throw new TypeError();
        return s === v || a === v || !b(d) && d.has(v);
      }
      function f(v, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var C = u(v, $);
        if (C !== E) {
          if (!b(C))
            return !1;
          var T = y.get(v);
          b(T) && (T = new A(), y.set(v, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Se() {
      var i;
      return !b(B) && S(r.Reflect) && Object.isExtensible(r.Reflect) && (i = r.Reflect[B]), b(i) && (i = Ce()), !b(B) && S(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new I(), a = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return b(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: u
      };
      return it.registerProvider(a), a;
      function d(h, f, v) {
        var $ = s.get(h), E = !1;
        if (b($)) {
          if (!v)
            return;
          $ = new A(), s.set(h, $), E = !0;
        }
        var C = $.get(f);
        if (b(C)) {
          if (!v)
            return;
          if (C = new A(), $.set(f, C), !i.setProvider(h, f, a))
            throw $.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return C;
      }
      function y(h, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        return b($) ? !1 : kt($.has(h));
      }
      function P(h, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!b($))
          return $.get(h);
      }
      function M(h, f, v, $) {
        var E = d(
          v,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var v = [], $ = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (b($))
          return v;
        for (var E = $.keys(), C = jt(E), T = 0; ; ) {
          var Lt = Ht(C);
          if (!Lt)
            return v.length = T, v;
          var ke = Dt(Lt);
          try {
            v[T] = ke;
          } catch (Ie) {
            try {
              Ut(C);
            } finally {
              throw Ie;
            }
          }
          T++;
        }
      }
      function u(h, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (b($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(f);
          b(E) || (E.delete(v), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Pe(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new I(), w = {
        isProviderFor: function(u, h) {
          var f = M.get(u);
          return !b(f) && f.has(h) ? !0 : y(u, h).length ? (b(f) && (f = new R(), M.set(u, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function q(i, s, a) {
      var d = it.getProvider(i, s);
      if (!b(d))
        return d;
      if (a) {
        if (it.setProvider(i, s, At))
          return At;
        throw new Error("Illegal state.");
      }
    }
    function Oe() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function w(u, h, f) {
            this._index = 0, this._keys = u, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[c] = function() {
            return this;
          }, w.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var h = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), u;
          }, w.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: u, done: !0 };
          }, w;
        }()
      ), d = (
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
          }), w.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(u, h) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ht(u, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[c] = function() {
            return this.entries();
          }, w.prototype._find = function(u, h) {
            if (!ht(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ht(this._keys[f], u)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return d;
      function y(w, u) {
        return w;
      }
      function P(w, u) {
        return u;
      }
      function M(w, u) {
        return [w, u];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new A();
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
          }, s.prototype[c] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Te() {
      var i = 16, s = _.create(), a = d();
      return (
        /** @class */
        function() {
          function u() {
            this._key = d();
          }
          return u.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? _.has(f, this._key) : !1;
          }, u.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? _.get(f, this._key) : void 0;
          }, u.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, u.prototype.delete = function(h) {
            var f = y(
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
          u = "@@WeakMap@@" + w();
        while (_.has(s, u));
        return s[u] = !0, u;
      }
      function y(u, h) {
        if (!n.call(u, a)) {
          if (!h)
            return;
          Object.defineProperty(u, a, { value: _.create() });
        }
        return u[a];
      }
      function P(u, h) {
        for (var f = 0; f < h; ++f)
          u[f] = Math.random() * 255 | 0;
        return u;
      }
      function M(u) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, u), h;
        }
        return P(new Array(u), u);
      }
      function w() {
        var u = M(i);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = u[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function je(e) {
  return typeof e.name == "string" && typeof e.version == "string" && typeof e.title == "string" && typeof e.elementSelector == "string" && typeof e.group == "string" && typeof e.iconName == "string";
}
function De(e) {
  return function(t) {
    if (je(e)) {
      const r = {
        version: e.version,
        name: e.name,
        title: e.title,
        selector: e.elementSelector,
        category: e.group,
        icon: e.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, t.prototype), globalThis.customElements) {
        const n = `${e.elementSelector}-${e.version}`;
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
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function He(e) {
  return De(e);
}
function Ue(e) {
  return function(t) {
    class r extends t {
      constructor() {
        super(...arguments);
        Bt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const _ = new CSSStyleSheet(), m = (x = l.sheet) == null ? void 0 : x.cssRules;
          m && (Array.from(m).forEach((A) => _.insertRule(A.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          p.appendChild(_);
        }
        c.forEach((_) => {
          const m = _.cloneNode(!0);
          p.appendChild(m);
        });
      }
    }
    return r;
  };
}
function Le(e) {
  var r;
  if (((r = e == null ? void 0 : e.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(e) {
  return function(t, r) {
    try {
      Le(e);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      let o = !0;
      if (typeof r == "string") {
        try {
          o = typeof t[r] != "function";
        } catch {
          o = !0;
        }
        o && (e.fieldMappings = e.fieldMappings ?? r);
      }
      n.push(e), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function mt(e) {
  return Be(e);
}
var at;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown", e.LAYOUT_PICKER = "layout-picker", e.RESPONSIVE_OVERRIDE = "responsive-override", e.IMAGE_PICKER = "image-picker";
})(at || (at = {}));
var Q;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(Q || (Q = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, _t = st.ShadowRoot && (st.ShadyCSS === void 0 || st.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, r, n) {
    if (this._$cssResult$ = !0, n !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (_t && t === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (t = Ft.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ft.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (e) => new ie(typeof e == "string" ? e : e + "", void 0, wt), Ge = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((n, o, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + e[l + 1], e[0]);
  return new ie(r, e, wt);
}, Fe = (e, t) => {
  if (_t) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const n = document.createElement("style"), o = st.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = r.cssText, e.appendChild(n);
  }
}, Wt = _t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const n of t.cssRules) r += n.cssText;
  return Ve(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: We, defineProperty: qe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Xe, getOwnPropertySymbols: Ye, getPrototypeOf: Je } = Object, z = globalThis, qt = z.trustedTypes, Qe = qt ? qt.emptyScript : "", vt = z.reactiveElementPolyfillSupport, X = (e, t) => e, lt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Qe : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, $t = (e, t) => !We(e, t), Zt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: $t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let G = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Zt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, r);
      o !== void 0 && qe(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, r, n) {
    const { get: o, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[r];
    }, set(c) {
      this[r] = c;
    } };
    return { get: o, set(c) {
      const g = o == null ? void 0 : o.call(this);
      l == null || l.call(this, c), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const r = this.properties, n = [...Xe(r), ...Ye(r)];
      for (const o of n) this.createProperty(o, r[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [n, o] of r) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const o = this._$Eu(r, n);
      o !== void 0 && this._$Eh.set(o, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const o of n) r.unshift(Wt(o));
    } else t !== void 0 && r.push(Wt(t));
    return r;
  }
  static _$Eu(t, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Fe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostConnected) == null ? void 0 : n.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
    });
  }
  attributeChangedCallback(t, r, n) {
    this._$AK(t, n);
  }
  _$ET(t, r) {
    var l;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : lt).toAttribute(r, n.type);
      this._$Em = t, c == null ? this.removeAttribute(o) : this.setAttribute(o, c), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var l, c;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), p = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : lt;
      this._$Em = o;
      const x = p.fromAttribute(r, g.type);
      this[o] = x ?? ((c = this._$Ej) == null ? void 0 : c.get(o)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, r, n, o = !1, l) {
    var c;
    if (t !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? $t)(l, r) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
      this.C(t, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: n, reflect: o, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, c ?? r ?? this[t]), l !== !0 || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (r = void 0), this._$AL.set(t, r)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, c] of o) {
        const { wrapped: g } = c, p = this[l];
        g !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, c, p);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(r)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((n) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[X("elementProperties")] = /* @__PURE__ */ new Map(), G[X("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: G }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, Xt = (e) => e, ct = Y.trustedTypes, Yt = ct ? ct.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, oe = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + N, Ke = `<${se}>`, U = document, K = () => U.createComment(""), tt = (e) => e === null || typeof e != "object" && typeof e != "function", xt = Array.isArray, tr = (e) => xt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", yt = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, j = RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, ae = /^(?:script|style|textarea|title)$/i, er = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), rr = er(1), F = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), D = U.createTreeWalker(U, 129);
function le(e, t) {
  if (!xt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Yt !== void 0 ? Yt.createHTML(t) : t;
}
const nr = (e, t) => {
  const r = e.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = Z;
  for (let g = 0; g < r; g++) {
    const p = e[g];
    let x, _, m = -1, A = 0;
    for (; A < p.length && (c.lastIndex = A, _ = c.exec(p), _ !== null); ) A = c.lastIndex, c === Z ? _[1] === "!--" ? c = Jt : _[1] !== void 0 ? c = Qt : _[2] !== void 0 ? (ae.test(_[2]) && (o = RegExp("</" + _[2], "g")), c = j) : _[3] !== void 0 && (c = j) : c === j ? _[0] === ">" ? (c = o ?? Z, m = -1) : _[1] === void 0 ? m = -2 : (m = c.lastIndex - _[2].length, x = _[1], c = _[3] === void 0 ? j : _[3] === '"' ? te : Kt) : c === te || c === Kt ? c = j : c === Jt || c === Qt ? c = Z : (c = j, o = void 0);
    const R = c === j && e[g + 1].startsWith("/>") ? " " : "";
    l += c === Z ? p + Ke : m >= 0 ? (n.push(x), p.slice(0, m) + oe + p.slice(m) + N + R) : p + N + (m === -2 ? g : R);
  }
  return [le(e, l + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class et {
  constructor({ strings: t, _$litType$: r }, n) {
    let o;
    this.parts = [];
    let l = 0, c = 0;
    const g = t.length - 1, p = this.parts, [x, _] = nr(t, r);
    if (this.el = et.createElement(x, n), D.currentNode = this.el.content, r === 2 || r === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (o = D.nextNode()) !== null && p.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const m of o.getAttributeNames()) if (m.endsWith(oe)) {
          const A = _[c++], R = o.getAttribute(m).split(N), I = /([.?@])?(.*)/.exec(A);
          p.push({ type: 1, index: l, name: I[2], strings: R, ctor: I[1] === "." ? or : I[1] === "?" ? sr : I[1] === "@" ? ar : dt }), o.removeAttribute(m);
        } else m.startsWith(N) && (p.push({ type: 6, index: l }), o.removeAttribute(m));
        if (ae.test(o.tagName)) {
          const m = o.textContent.split(N), A = m.length - 1;
          if (A > 0) {
            o.textContent = ct ? ct.emptyScript : "";
            for (let R = 0; R < A; R++) o.append(m[R], K()), D.nextNode(), p.push({ type: 2, index: ++l });
            o.append(m[A], K());
          }
        }
      } else if (o.nodeType === 8) if (o.data === se) p.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = o.data.indexOf(N, m + 1)) !== -1; ) p.push({ type: 7, index: l }), m += N.length - 1;
      }
      l++;
    }
  }
  static createElement(t, r) {
    const n = U.createElement("template");
    return n.innerHTML = t, n;
  }
}
function W(e, t, r = e, n) {
  var c, g;
  if (t === F) return t;
  let o = n !== void 0 ? (c = r._$Co) == null ? void 0 : c[n] : r._$Cl;
  const l = tt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(e), o._$AT(e, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = o : r._$Cl = o), o !== void 0 && (t = W(e, o._$AS(e, t.values), o, n)), t;
}
class ir {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? U).importNode(r, !0);
    D.currentNode = o;
    let l = D.nextNode(), c = 0, g = 0, p = n[0];
    for (; p !== void 0; ) {
      if (c === p.index) {
        let x;
        p.type === 2 ? x = new rt(l, l.nextSibling, this, t) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (x = new lr(l, this, t)), this._$AV.push(x), p = n[++g];
      }
      c !== (p == null ? void 0 : p.index) && (l = D.nextNode(), c++);
    }
    return D.currentNode = U, o;
  }
  p(t) {
    let r = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, r), r += n.strings.length - 2) : n._$AI(t[r])), r++;
  }
}
class rt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, n, o) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = W(this, t, r), tt(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && tt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(U.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: r, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = et.createElement(le(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(r);
    else {
      const c = new ir(o, this), g = c.u(this.options);
      c.p(r), this.T(g), this._$AH = c;
    }
  }
  _$AC(t) {
    let r = ee.get(t.strings);
    return r === void 0 && ee.set(t.strings, r = new et(t)), r;
  }
  k(t) {
    xt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, o = 0;
    for (const l of t) o === r.length ? r.push(n = new rt(this.O(K()), this.O(K()), this, this.options)) : n = r[o], n._$AI(l), o++;
    o < r.length && (this._$AR(n && n._$AB.nextSibling, o), r.length = o);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r); t !== this._$AB; ) {
      const o = Xt(t).nextSibling;
      Xt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, n, o, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = r, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(t, r = this, n, o) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) t = W(this, t, r, 0), c = !tt(t) || t !== this._$AH && t !== F, c && (this._$AH = t);
    else {
      const g = t;
      let p, x;
      for (t = l[0], p = 0; p < l.length - 1; p++) x = W(this, g[n + p], r, p), x === F && (x = this._$AH[p]), c || (c = !tt(x) || x !== this._$AH[p]), x === O ? t = O : t !== O && (t += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    c && !o && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class or extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class sr extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class ar extends dt {
  constructor(t, r, n, o, l) {
    super(t, r, n, o, l), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = W(this, t, r, 0) ?? O) === F) return;
    const n = this._$AH, o = t === O && n !== O || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== O && (n === O || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, r, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    W(this, t);
  }
}
const gt = Y.litHtmlPolyfillSupport;
gt == null || gt(et, rt), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const cr = (e, t, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = o = new rt(t.insertBefore(K(), l), l, void 0, r ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends G {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = cr(r, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var ne;
J._$litElement$ = !0, J.finalized = !0, (ne = H.litElementHydrateSupport) == null || ne.call(H, { LitElement: J });
const bt = H.litElementPolyfillSupport;
bt == null || bt({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: $t }, ur = (e = dr, t, r) => {
  const { kind: n, metadata: o } = r;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((e = Object.create(e)).wrapped = !0), l.set(r.name, e), n === "accessor") {
    const { name: c } = r;
    return { set(g) {
      const p = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(c, p, e, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(c, void 0, e, g), g;
    } };
  }
  if (n === "setter") {
    const { name: c } = r;
    return function(g) {
      const p = this[c];
      t.call(this, g), this.requestUpdate(c, p, e, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Et(e) {
  return (t, r) => typeof r == "object" ? ur(e, t, r) : ((n, o, l) => {
    const c = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(e, t, r);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, nt = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? fr(t, r) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (o = (n ? c(t, r, o) : c(o)) || o);
  return n && o && hr(t, r, o), o;
};
const re = () => window.zeroThemeManager, pr = {
  kind: "generic",
  templateHtml: [
    "<div style='border:1px solid #e2e8f0;border-radius:8px;background:#fff;padding:8px;box-shadow:0 1px 3px rgba(0,0,0,0.05);width:100%;'>",
    "<div style='display:flex;gap:6px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;margin-bottom:8px;'>",
    "<div style='width:24px;height:24px;border-radius:4px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;color:#333;'>B</div>",
    "<div style='width:24px;height:24px;border-radius:4px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-style:italic;font-size:12px;color:#333;'>I</div>",
    "<div style='width:24px;height:24px;border-radius:4px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;text-decoration:underline;font-size:12px;color:#333;'>U</div>",
    "</div>",
    "<div style='padding:8px;color:#64748b;font-size:0.85rem;min-height:50px;'>Write your rich text content here...</div>",
    "</div>"
  ].join(""),
  badges: ["Rich Text", "Editor"]
};
let L = class extends J {
  constructor() {
    super(...arguments), this.content = "", this.toolbarVisible = !1, this.editorMode = !0, this.isWrapped = !1, this.selectionRange = null;
  }
  static getStudioTemplate(e) {
    const t = "var(--uiv-surface-color, #fff)", r = "var(--uiv-border-color, #ddd)";
    return {
      ...pr,
      templateHtml: [
        `<div style='border:1px solid ${r};border-radius:8px;background:${t};overflow:hidden;width:100%;font-family:inherit;'>`,
        `<div style='display:flex;gap:8px;background:var(--uiv-bg-surface, #f5f5f5);padding:8px;border-bottom:1px solid ${r};'>`,
        "<div style='width:24px;height:24px;border:1px solid rgba(0,0,0,0.1);border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;'>B</div>",
        "<div style='width:24px;height:24px;border:1px solid rgba(0,0,0,0.1);border-radius:4px;display:flex;align-items:center;justify-content:center;font-style:italic;font-size:12px;'>I</div>",
        "<div style='width:24px;height:24px;border:1px solid rgba(0,0,0,0.1);border-radius:4px;display:flex;align-items:center;justify-content:center;text-decoration:underline;font-size:12px;'>U</div>",
        "</div>",
        "<div style='padding:16px;color:var(--uiv-text-color, #333);font-size:14px;min-height:80px;opacity:0.6;'>Write your rich text content here...</div>",
        "</div>"
      ].join("")
    };
  }
  set htmldata(e) {
    this.content = e, this.updateEditorContent();
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = re()) == null || e.addEventListener("theme-changed", () => this.requestUpdate());
  }
  firstUpdated() {
    this.updateEditorContent();
  }
  updated(e) {
    super.updated(e), e.has("content") && this.editorMode && this.restoreCursor(), this.updateContent();
  }
  storeCursor() {
    const e = window.getSelection();
    e && e.rangeCount > 0 && (this.selectionRange = e.getRangeAt(0).cloneRange());
  }
  restoreCursor() {
    var e;
    if (this.selectionRange) {
      const t = window.getSelection();
      t && ((e = this.selectionRange) != null && e.collapsed || t.removeAllRanges(), t.addRange(this.selectionRange), this.selectionRange.collapse(!1));
    }
  }
  toggleToolbar(e) {
    e.stopPropagation(), this.toolbarVisible = !this.toolbarVisible;
  }
  execCommand(e, t) {
    this.storeCursor(), document.execCommand(e, !0, t), this.updateContent();
  }
  updateContent() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    e && (this.content = e.innerHTML, this.dispatchEvent(new CustomEvent("content-changed", {
      detail: { content: this.content },
      bubbles: !0,
      composed: !0
    })), console.log(this.content));
  }
  updateEditorContent() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    e && (e.innerHTML = this.content || "", this.editorMode || e.querySelectorAll("img").forEach((r) => {
      this.unwrapImage(r);
    }));
  }
  onPaste() {
    setTimeout(() => {
      var t;
      const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
      this.editorMode && e.querySelectorAll("img").forEach((r) => {
        r.classList.contains("resize-icon") || (r.addEventListener("mouseenter", (n) => {
          this.editorMode && (n.stopPropagation(), this.wrapImage(r));
        }), r.addEventListener("mouseleave", (n) => {
          var l;
          if (!this.editorMode)
            return;
          n.stopPropagation();
          const o = n.relatedTarget;
          (!o || !((l = o == null ? void 0 : o.classList) != null && l.contains("resize-icon"))) && this.unwrapImage(r);
        }));
      });
    }, 400);
  }
  wrapImage(e) {
    var t;
    if (!e.hasAttribute("data-wrapped")) {
      const r = document.createElement("div");
      r.className = "image-container", (t = e.parentNode) == null || t.insertBefore(r, e), r.appendChild(e);
      const n = document.createElement("img");
      n.className = "resize-icon", n.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEwIDIwTDIwIDIwTDIwIDEwIiBzdHJva2U9IiMyMjIyMjIiLz4NCjxwYXRoIGQ9Ik0xMiAxN0wxNyAxN0wxNyAxMiIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8L3N2Zz4=", n.alt = "Resize Icon", r.appendChild(n), e.setAttribute("data-wrapped", "true"), this.addResizeFunctionality(r);
    }
  }
  unwrapImage(e) {
    var t;
    if (e.hasAttribute("data-wrapped")) {
      const r = e.parentNode;
      if (r.classList.contains("image-container")) {
        const n = r.querySelector(".resize-icon");
        n && n.remove(), (t = r.parentNode) == null || t.insertBefore(e, r), r.remove(), e.removeAttribute("data-wrapped");
      }
    }
  }
  addResizeFunctionality(e) {
    const t = e.querySelector("img"), r = e.querySelector(".resize-icon");
    let n, o, l, c;
    const g = (_) => {
      const m = l + (_.clientX - n), A = c + (_.clientY - o);
      t.style.width = `${m}px`, t.style.height = `${A}px`;
    }, p = () => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", p);
    }, x = (_) => {
      n = _.clientX, o = _.clientY, l = t.offsetWidth, c = t.offsetHeight, document.addEventListener("mousemove", g), document.addEventListener("mouseup", p);
    };
    r.addEventListener("mousedown", x), r.addEventListener("mouseleave", (_) => {
      var A;
      _.stopPropagation();
      const m = _.relatedTarget;
      m && ((A = m == null ? void 0 : m.classList) != null && A.contains("editor")) && this.unwrapImage(t);
    });
  }
  handleInput(e) {
    e.stopPropagation(), this.updateContent();
  }
  handleColorChange(e) {
    e.stopPropagation();
    const t = e.target;
    this.execCommand("foreColor", t.value);
  }
  handleBgColorChange(e) {
    e.stopPropagation();
    const t = e.target;
    this.execCommand("backColor", t.value);
  }
  handleFontSizeChange(e) {
    e.stopPropagation();
    const t = e.target;
    this.execCommand("fontSize", t.value);
  }
  handleAlignChange(e) {
    e.stopPropagation();
    const t = e.target;
    this.execCommand("justifyLeft", t.value === "left" ? "" : null), this.execCommand("justifyCenter", t.value === "center" ? "" : null), this.execCommand("justifyRight", t.value === "right" ? "" : null), this.execCommand("justifyFull", t.value === "justify" ? "" : null);
  }
  toggleEditorMode() {
    var t;
    this.editorMode = !this.editorMode;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    this.editorMode || e.querySelectorAll("img").forEach((r) => {
      this.unwrapImage(r);
    });
  }
  handleFontFamilyChange(e) {
    e.stopPropagation();
    const t = e.target;
    this.execCommand("fontName", t.value);
  }
  handleContentChanged(e) {
    this.updateContent();
  }
  render() {
    var t;
    const e = (t = re()) == null ? void 0 : t.getActiveTheme("zero-standard-themes");
    return rr`
      <style>
        ${e ? e.getGlobalStyles() : ""}
        ${e ? e.getComponentStyles("input") : ""}
      </style>
      <div class="uiv-${e == null ? void 0 : e.id}-theme">
        <div class="toolbar ${this.toolbarVisible ? "visible" : ""} uiv-${e == null ? void 0 : e.id}-card uiv-${e == null ? void 0 : e.id}-glass">
          <button @click="${() => this.execCommand("bold")}" title="Bold" class="uiv-${e == null ? void 0 : e.id}-text">B</button>
          <button @click="${() => this.execCommand("italic")}" title="Italic" class="uiv-${e == null ? void 0 : e.id}-text">I</button>
          <button @click="${() => this.execCommand("underline")}" title="Underline" class="uiv-${e == null ? void 0 : e.id}-text">U</button>
          <button @click="${() => this.execCommand("strikethrough")}" title="Strikethrough" class="uiv-${e == null ? void 0 : e.id}-text">S</button>
          <input type="color" @input="${this.handleColorChange}" title="Text Color" class="uiv-${e == null ? void 0 : e.id}-bg">
          <input type="color" @input="${this.handleBgColorChange}" title="Background Color" class="uiv-${e == null ? void 0 : e.id}-bg">
          <select @change="${this.handleFontFamilyChange}" title="Font Family" class="uiv-${e == null ? void 0 : e.id}-text uiv-${e == null ? void 0 : e.id}-bg">
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
          <select @change="${this.handleFontSizeChange}" class="uiv-${e == null ? void 0 : e.id}-text uiv-${e == null ? void 0 : e.id}-bg">
            <option value="1">Small</option>
            <option value="3">Normal</option>
            <option value="5">Large</option>
            <option value="7">Huge</option>
          </select>
          <select @change="${this.handleAlignChange}" class="uiv-${e == null ? void 0 : e.id}-text uiv-${e == null ? void 0 : e.id}-bg">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </div>
        <button class="toolbar-toggle uiv-${e == null ? void 0 : e.id}-text" @click="${this.toggleToolbar}" ?hidden="${!this.editorMode}" title="Toggle Toolbar">🛠️</button>
        <div class="editor uiv-${e == null ? void 0 : e.id}-text" contenteditable="${this.editorMode}" @input="${this.handleInput}" @paste="${this.onPaste}"></div>
      </div>
    `;
  }
};
L.styles = Ge`
    :host {
      display: block;
      width: 100%;
      margin: auto;
      border-radius: var(--uiv-border-radius, 8px);
      overflow: visible;
      position: relative;
      font-family: var(--uiv-font-family, sans-serif);
    }

    :host([editorMode]) .editor {
      position: relative;
    }
    :host([editorMode]) .editor:hover {
      border: 1px solid var(--uiv-primary-color, #ddd);
      box-sizing: border-box;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: var(--spacing-sm, 8px);
      color: var(--uiv-text-color, #5b5f61);
      background-color: var(--uiv-bg-surface, #f5f5f5);
      border-bottom: 1px solid var(--uiv-border-color, #ddd);
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      z-index: 10;
      box-shadow: var(--uiv-shadow-depth, 0 2px 5px rgba(0, 0, 0, 0.1));
      border-radius: var(--uiv-border-radius, 8px);
      transition: var(--transition-normal, opacity 0.3s ease, transform 0.3s ease);
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
    .toolbar.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }    .toolbar button, .toolbar select, .toolbar input[type="color"] {
      background: none;
      border: none;
      cursor: pointer;
      font-size: var(--font-size-md, 16px);
      padding: var(--spacing-xs, 6px);
      transition: var(--transition-fast, background-color 0.3s ease);
      position: relative;
    }
    .toolbar button:hover, .toolbar select:hover, .toolbar input[type="color"]:hover {
      background-color: var(--uiv-bg-overlay, #e0e0e0);
      border-radius: var(--border-radius-sm, 4px);
    }
    .toolbar button::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--uiv-bg-surface, #333);
      color: var(--uiv-text-color, #fff);
      padding: var(--spacing-xs, 4px);
      border-radius: var(--border-radius-sm, 4px);
      white-space: nowrap;
      font-size: var(--font-size-xs, 12px);
      opacity: 0;
      transition: var(--transition-fast, opacity 0.3s ease);
    }
    .toolbar button:hover::after {
      opacity: 1;
    }    .editor, .preview {
      height: 100%;
      padding: var(--spacing-sm, 10px);
      outline: none;
      position: relative;
      z-index: 1;
    }
    .toolbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: var(--spacing-sm, 10px);
      right: var(--spacing-sm, 10px);
      font-size: var(--font-size-lg, 18px);
      transition: var(--transition-fast, background-color 0.3s ease);
      z-index: 20;
    }
    .toolbar-toggle:hover {
      background-color: var(--uiv-bg-overlay, #e0e0e0);
      border-radius: 50%;
    }
    .toolbar input[type="color"] {
      width: var(--icon-size-sm, 24px);
      height: var(--icon-size-sm, 24px);
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
    .toolbar .strikethrough::before { content: 'S'; text-decoration: line-through; }    .toolbar select {
      font-size: var(--font-size-base, 14px);
    }
    .image-container {
      position: relative;
      display: inline-block;
      /* border: 1px solid var(--border-color, #ddd); */
    }
    .resize-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: var(--icon-size-sm, 24px);
      height: var(--icon-size-sm, 24px);
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
nt([
  Et({ type: String }),
  mt({
    attributeType: Q.PROPERTY,
    uiComponentType: at.TEXTAREA,
    displayLabel: "",
    placeholderText: "",
    fieldMappings: "htmldata"
  })
], L.prototype, "htmldata", 1);
nt([
  Et({ type: Boolean, reflect: !0 })
], L.prototype, "toolbarVisible", 2);
nt([
  Et({ type: Boolean, reflect: !0 }),
  mt({
    attributeType: Q.PROPERTY,
    uiComponentType: at.CHECKBOX,
    displayLabel: "",
    placeholderText: "",
    initialValue: !0,
    fieldMappings: "editorMode"
  })
], L.prototype, "editorMode", 2);
nt([
  mt({
    attributeType: Q.EVENT,
    displayLabel: "On Content Changed",
    eventTrigger: "content-changed"
  })
], L.prototype, "handleContentChanged", 1);
L = nt([
  He({
    name: "rich-text-editor",
    version: "1.0.0",
    title: "Rich text editor",
    elementSelector: "zero-rich-text-editor",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Ue()
], L);
export {
  L as RichTextEditor,
  pr as editorTemplate
};
