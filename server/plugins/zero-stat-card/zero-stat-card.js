var Ue = Object.defineProperty;
var je = (r, t, e) => t in r ? Ue(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Bt = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e);
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var e = typeof globalThis == "object" ? globalThis : typeof Ft == "object" ? Ft : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, E) {
      return function(w, m) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: m }), E && E(w, m);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !g && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return mt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return mt({ __proto__: null });
      } : function() {
        return mt({});
      },
      has: E ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: E ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, m = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), N = typeof WeakMap == "function" ? WeakMap : De(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, Y = Me(), lt = Oe(Y);
    function yt(i, a, o, u) {
      if (_(o)) {
        if (!It(i))
          throw new TypeError();
        if (!Ut(a))
          throw new TypeError();
        return $e(i, a);
      } else {
        if (!It(i))
          throw new TypeError();
        if (!S(a))
          throw new TypeError();
        if (!S(u) && !_(u) && !Z(u))
          throw new TypeError();
        return Z(u) && (u = void 0), o = I(o), be(i, a, o, u);
      }
    }
    t("decorate", yt);
    function de(i, a) {
      function o(u, v) {
        if (!S(u))
          throw new TypeError();
        if (!_(v) && !Se(v))
          throw new TypeError();
        Tt(i, a, u, v);
      }
      return o;
    }
    t("metadata", de);
    function fe(i, a, o, u) {
      if (!S(o))
        throw new TypeError();
      return _(u) || (u = I(u)), Tt(i, a, o, u);
    }
    t("defineMetadata", fe);
    function pe(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return _(o) || (o = I(o)), Pt(i, a, o);
    }
    t("hasMetadata", pe);
    function ye(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return _(o) || (o = I(o)), vt(i, a, o);
    }
    t("hasOwnMetadata", ye);
    function ve(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return _(o) || (o = I(o)), Mt(i, a, o);
    }
    t("getMetadata", ve);
    function ge(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return _(o) || (o = I(o)), Ot(i, a, o);
    }
    t("getOwnMetadata", ge);
    function _e(i, a) {
      if (!S(i))
        throw new TypeError();
      return _(a) || (a = I(a)), Rt(i, a);
    }
    t("getMetadataKeys", _e);
    function me(i, a) {
      if (!S(i))
        throw new TypeError();
      return _(a) || (a = I(a)), kt(i, a);
    }
    t("getOwnMetadataKeys", me);
    function we(i, a, o) {
      if (!S(a))
        throw new TypeError();
      if (_(o) || (o = I(o)), !S(a))
        throw new TypeError();
      _(o) || (o = I(o));
      var u = K(
        a,
        o,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", we);
    function $e(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o], v = u(a);
        if (!_(v) && !Z(v)) {
          if (!Ut(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function be(i, a, o, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], P = O(a, o, u);
        if (!_(P) && !Z(P)) {
          if (!S(P))
            throw new TypeError();
          u = P;
        }
      }
      return u;
    }
    function Pt(i, a, o) {
      var u = vt(i, a, o);
      if (u)
        return !0;
      var v = _t(a);
      return Z(v) ? !1 : Pt(i, v, o);
    }
    function vt(i, a, o) {
      var u = K(
        a,
        o,
        /*Create*/
        !1
      );
      return _(u) ? !1 : Nt(u.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Mt(i, a, o) {
      var u = vt(i, a, o);
      if (u)
        return Ot(i, a, o);
      var v = _t(a);
      if (!Z(v))
        return Mt(i, v, o);
    }
    function Ot(i, a, o) {
      var u = K(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Tt(i, a, o, u) {
      var v = K(
        o,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, u);
    }
    function Rt(i, a) {
      var o = kt(i, a), u = _t(i);
      if (u === null)
        return o;
      var v = Rt(u, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var O = new k(), P = [], $ = 0, h = o; $ < h.length; $++) {
        var d = h[$], f = O.has(d);
        f || (O.add(d), P.push(d));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var d = b[y], f = O.has(d);
        f || (O.add(d), P.push(d));
      }
      return P;
    }
    function kt(i, a) {
      var o = K(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Dt(i) {
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
    function _(i) {
      return i === void 0;
    }
    function Z(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, a) {
      switch (Dt(i)) {
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
      var o = "string", u = jt(i, l);
      if (u !== void 0) {
        var v = u.call(i, o);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return Ce(i);
    }
    function Ce(i, a) {
      var o, u;
      {
        var v = i.toString;
        if (ct(v)) {
          var u = v.call(i);
          if (!S(u))
            return u;
        }
        var o = i.valueOf;
        if (ct(o)) {
          var u = o.call(i);
          if (!S(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Nt(i) {
      return !!i;
    }
    function xe(i) {
      return "" + i;
    }
    function I(i) {
      var a = Ae(i);
      return Ee(a) ? a : xe(a);
    }
    function It(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ct(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      return typeof i == "function";
    }
    function Se(i) {
      switch (Dt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function gt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function jt(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ct(o))
          throw new TypeError();
        return o;
      }
    }
    function Ht(i) {
      var a = jt(i, c);
      if (!ct(a))
        throw new TypeError();
      var o = a.call(i);
      if (!S(o))
        throw new TypeError();
      return o;
    }
    function Lt(i) {
      return i.value;
    }
    function zt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Vt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function _t(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === m || a !== m)
        return a;
      var o = i.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return a;
      var v = u.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Pe() {
      var i;
      !_(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var a, o, u, v = new N(), O = {
        registerProvider: P,
        getProvider: h,
        setProvider: f
      };
      return O;
      function P(y) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            u === void 0 && (u = new k()), u.add(y);
            break;
        }
      }
      function $(y, b) {
        if (!_(a)) {
          if (a.isProviderFor(y, b))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(y, b))
              return a;
            if (!_(u))
              for (var A = Ht(u); ; ) {
                var x = zt(A);
                if (!x)
                  return;
                var D = Lt(x);
                if (D.isProviderFor(y, b))
                  return Vt(A), D;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, b))
          return i;
      }
      function h(y, b) {
        var A = v.get(y), x;
        return _(A) || (x = A.get(b)), _(x) && (x = $(y, b), _(x) || (_(A) && (A = new C(), v.set(y, A)), A.set(b, x))), x;
      }
      function d(y) {
        if (_(y))
          throw new TypeError();
        return a === y || o === y || !_(u) && u.has(y);
      }
      function f(y, b, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var x = h(y, b);
        if (x !== A) {
          if (!_(x))
            return !1;
          var D = v.get(y);
          _(D) && (D = new C(), v.set(y, D)), D.set(b, A);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !_(H) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), _(i) && (i = Pe()), !_(H) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Oe(i) {
      var a = new N(), o = {
        isProviderFor: function(d, f) {
          var y = a.get(d);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: h
      };
      return Y.registerProvider(o), o;
      function u(d, f, y) {
        var b = a.get(d), A = !1;
        if (_(b)) {
          if (!y)
            return;
          b = new C(), a.set(d, b), A = !0;
        }
        var x = b.get(f);
        if (_(x)) {
          if (!y)
            return;
          if (x = new C(), b.set(f, x), !i.setProvider(d, f, o))
            throw b.delete(f), A && a.delete(d), new Error("Wrong provider for target.");
        }
        return x;
      }
      function v(d, f, y) {
        var b = u(
          f,
          y,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Nt(b.has(d));
      }
      function O(d, f, y) {
        var b = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(d);
      }
      function P(d, f, y, b) {
        var A = u(
          y,
          b,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function $(d, f) {
        var y = [], b = u(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return y;
        for (var A = b.keys(), x = Ht(A), D = 0; ; ) {
          var Wt = zt(x);
          if (!Wt)
            return y.length = D, y;
          var Ne = Lt(Wt);
          try {
            y[D] = Ne;
          } catch (Ie) {
            try {
              Vt(x);
            } finally {
              throw Ie;
            }
          }
          D++;
        }
      }
      function h(d, f, y) {
        var b = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(d))
          return !1;
        if (b.size === 0) {
          var A = a.get(f);
          _(A) || (A.delete(y), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Te(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, P = new N(), $ = {
        isProviderFor: function(h, d) {
          var f = P.get(h);
          return !_(f) && f.has(d) ? !0 : v(h, d).length ? (_(f) && (f = new k(), P.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return $;
    }
    function K(i, a, o) {
      var u = Y.getProvider(i, a);
      if (!_(u))
        return u;
      if (o) {
        if (Y.setProvider(i, a, lt))
          return lt;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function $(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[c] = function() {
            return this;
          }, $.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), h;
          }, $.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: h, done: !0 };
          }, $;
        }()
      ), u = (
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
          }), $.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, $.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, $.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, gt(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, P);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[c] = function() {
            return this.entries();
          }, $.prototype._find = function(h, d) {
            if (!gt(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (gt(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return u;
      function v($, h) {
        return $;
      }
      function O($, h) {
        return h;
      }
      function P($, h) {
        return [$, h];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new C();
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
          }, a.prototype[c] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function De() {
      var i = 16, a = w.create(), o = u();
      return (
        /** @class */
        function() {
          function h() {
            this._key = u();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var y = v(
              d,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = u();
          }, h;
        }()
      );
      function u() {
        var h;
        do
          h = "@@WeakMap@@" + $();
        while (w.has(a, h));
        return a[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, o)) {
          if (!d)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function O(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function P(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : O(d, h), d;
        }
        return O(new Array(h), h);
      }
      function $() {
        var h = P(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function mt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Le(r) {
  return function(t) {
    if (He(r)) {
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
function ze(r) {
  return Le(r);
}
function Ve(r) {
  return function(t) {
    class e extends t {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), m = (E = l.sheet) == null ? void 0 : E.cssRules;
          m && (Array.from(m).forEach((C) => w.insertRule(C.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        c.forEach((w) => {
          const m = w.cloneNode(!0);
          p.appendChild(m);
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
function V(r) {
  return Be(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(U || (U = {}));
var j;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(j || (j = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = globalThis, At = ht.ShadowRoot && (ht.ShadyCSS === void 0 || ht.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ct = Symbol(), qt = /* @__PURE__ */ new WeakMap();
let ae = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Ct) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (At && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = qt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && qt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new ae(typeof r == "string" ? r : r + "", void 0, Ct), Ge = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ae(e, r, Ct);
}, qe = (r, t) => {
  if (At) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = ht.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Yt = At ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: Ze, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, z = globalThis, Zt = z.trustedTypes, tr = Zt ? Zt.emptyScript : "", wt = z.reactiveElementPolyfillSupport, et = (r, t) => r, dt = { toAttribute(r, t) {
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
} }, xt = (r, t) => !Ye(r, t), Xt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: xt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ze(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Xe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(c) {
      this[e] = c;
    } };
    return { get: s, set(c) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, c), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(et("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(et("properties"))) {
      const e = this.properties, n = [...Je(e), ...Qe(e)];
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
      for (const s of n) e.unshift(Yt(s));
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
    var l;
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : dt).toAttribute(e, n.type);
      this._$Em = t, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, c;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), p = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : dt;
      this._$Em = s;
      const E = p.fromAttribute(e, g.type);
      this[s] = E ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var c;
    if (t !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? xt)(l, e) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, c ?? e ?? this[t]), l !== !0 || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, c] of s) {
        const { wrapped: g } = c, p = this[l];
        g !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, c, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[et("elementProperties")] = /* @__PURE__ */ new Map(), X[et("finalized")] = /* @__PURE__ */ new Map(), wt == null || wt({ ReactiveElement: X }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, Jt = (r) => r, ft = rt.trustedTypes, Qt = ft ? ft.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, oe = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + L, er = `<${le}>`, q = document, it = () => q.createComment(""), st = (r) => r === null || typeof r != "object" && typeof r != "function", St = Array.isArray, rr = (r) => St(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", $t = `[ 	
\f\r]`, tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Kt = /-->/g, te = />/g, B = RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ee = /'/g, re = /"/g, ce = /^(?:script|style|textarea|title)$/i, ue = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ne = ue(1), ut = ue(2), J = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), ie = /* @__PURE__ */ new WeakMap(), F = q.createTreeWalker(q, 129);
function he(r, t) {
  if (!St(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qt !== void 0 ? Qt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = tt;
  for (let g = 0; g < e; g++) {
    const p = r[g];
    let E, w, m = -1, C = 0;
    for (; C < p.length && (c.lastIndex = C, w = c.exec(p), w !== null); ) C = c.lastIndex, c === tt ? w[1] === "!--" ? c = Kt : w[1] !== void 0 ? c = te : w[2] !== void 0 ? (ce.test(w[2]) && (s = RegExp("</" + w[2], "g")), c = B) : w[3] !== void 0 && (c = B) : c === B ? w[0] === ">" ? (c = s ?? tt, m = -1) : w[1] === void 0 ? m = -2 : (m = c.lastIndex - w[2].length, E = w[1], c = w[3] === void 0 ? B : w[3] === '"' ? re : ee) : c === re || c === ee ? c = B : c === Kt || c === te ? c = tt : (c = B, s = void 0);
    const k = c === B && r[g + 1].startsWith("/>") ? " " : "";
    l += c === tt ? p + er : m >= 0 ? (n.push(E), p.slice(0, m) + oe + p.slice(m) + L + k) : p + L + (m === -2 ? g : k);
  }
  return [he(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class at {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const g = t.length - 1, p = this.parts, [E, w] = nr(t, e);
    if (this.el = at.createElement(E, n), F.currentNode = this.el.content, e === 2 || e === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (s = F.nextNode()) !== null && p.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const m of s.getAttributeNames()) if (m.endsWith(oe)) {
          const C = w[c++], k = s.getAttribute(m).split(L), N = /([.?@])?(.*)/.exec(C);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? sr : N[1] === "?" ? ar : N[1] === "@" ? or : pt }), s.removeAttribute(m);
        } else m.startsWith(L) && (p.push({ type: 6, index: l }), s.removeAttribute(m));
        if (ce.test(s.tagName)) {
          const m = s.textContent.split(L), C = m.length - 1;
          if (C > 0) {
            s.textContent = ft ? ft.emptyScript : "";
            for (let k = 0; k < C; k++) s.append(m[k], it()), F.nextNode(), p.push({ type: 2, index: ++l });
            s.append(m[C], it());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) p.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = s.data.indexOf(L, m + 1)) !== -1; ) p.push({ type: 7, index: l }), m += L.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = q.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Q(r, t, e = r, n) {
  var c, g;
  if (t === J) return t;
  let s = n !== void 0 ? (c = e._$Co) == null ? void 0 : c[n] : e._$Cl;
  const l = st(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Q(r, s._$AS(r, t.values), s, n)), t;
}
class ir {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    F.currentNode = s;
    let l = F.nextNode(), c = 0, g = 0, p = n[0];
    for (; p !== void 0; ) {
      if (c === p.index) {
        let E;
        p.type === 2 ? E = new ot(l, l.nextSibling, this, t) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (E = new lr(l, this, t)), this._$AV.push(E), p = n[++g];
      }
      c !== (p == null ? void 0 : p.index) && (l = F.nextNode(), c++);
    }
    return F.currentNode = q, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ot {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Q(this, t, e), st(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== T && st(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = at.createElement(he(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const c = new ir(s, this), g = c.u(this.options);
      c.p(e), this.T(g), this._$AH = c;
    }
  }
  _$AC(t) {
    let e = ie.get(t.strings);
    return e === void 0 && ie.set(t.strings, e = new at(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ot(this.O(it()), this.O(it()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Jt(t).nextSibling;
      Jt(t).remove(), t = s;
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
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) t = Q(this, t, e, 0), c = !st(t) || t !== this._$AH && t !== J, c && (this._$AH = t);
    else {
      const g = t;
      let p, E;
      for (t = l[0], p = 0; p < l.length - 1; p++) E = Q(this, g[n + p], e, p), E === J && (E = this._$AH[p]), c || (c = !st(E) || E !== this._$AH[p]), E === T ? t = T : t !== T && (t += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    c && !s && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends pt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class ar extends pt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class or extends pt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Q(this, t, e, 0) ?? T) === J) return;
    const n = this._$AH, s = t === T && n !== T || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== T && (n === T || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Q(this, t);
  }
}
const bt = rt.litHtmlPolyfillSupport;
bt == null || bt(at, ot), (rt.litHtmlVersions ?? (rt.litHtmlVersions = [])).push("3.3.3");
const cr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ot(t.insertBefore(it(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class nt extends X {
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
    return J;
  }
}
var se;
nt._$litElement$ = !0, nt.finalized = !0, (se = G.litElementHydrateSupport) == null || se.call(G, { LitElement: nt });
const Et = G.litElementPolyfillSupport;
Et == null || Et({ LitElement: nt });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: xt }, hr = (r = ur, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: c } = e;
    return { set(g) {
      const p = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(c, p, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(c, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: c } = e;
    return function(g) {
      const p = this[c];
      t.call(this, g), this.requestUpdate(c, p, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function W(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = (n ? c(t, e, s) : c(s)) || s);
  return n && s && dr(t, e, s), s;
};
let M = class extends nt {
  constructor() {
    super(...arguments), this.title = "Total Revenue", this.value = "$3,020", this.icon = "💰", this.changePercent = "30.6%", this.changeDirection = "up", this.chartData = "4,8,6,10,7,12,9", this.chartColor = "#4680ff", this.chartType = "bar";
  }
  static getStudioTemplate(r) {
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:10px;padding:18px 20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;'>",
        "<div style='display:flex;align-items:center;justify-content:space-between;'>",
        "<div style='display:flex;align-items:center;gap:8px;'>",
        "<span style='font-size:18px;line-height:1;'>&#128176;</span>",
        "<span style='font-size:13px;color:var(--uiv-text-color-secondary,#8996a4);'>{{display:title}}</span>",
        "</div>",
        "<span style='color:#8996a4;font-weight:700;'>&#8942;</span>",
        "</div>",
        "<div style='font-size:24px;font-weight:700;color:var(--uiv-text-primary,var(--uiv-text-color,#1d2630));margin:10px 0 8px;'>$3,020</div>",
        "<svg viewBox='0 0 120 40' width='100%' height='40' preserveAspectRatio='none'>",
        "<rect x='2' y='20' width='12' height='18' rx='1.5' fill='#4680ff'/>",
        "<rect x='19' y='8' width='12' height='30' rx='1.5' fill='#4680ff'/>",
        "<rect x='36' y='14' width='12' height='24' rx='1.5' fill='#4680ff'/>",
        "<rect x='53' y='4' width='12' height='34' rx='1.5' fill='#4680ff'/>",
        "<rect x='70' y='16' width='12' height='22' rx='1.5' fill='#4680ff'/>",
        "<rect x='87' y='2' width='12' height='36' rx='1.5' fill='#4680ff'/>",
        "<rect x='104' y='12' width='12' height='26' rx='1.5' fill='#4680ff'/>",
        "</svg>",
        "<div style='color:#12b76a;font-size:12px;font-weight:600;margin-top:8px;'>&#9650; 30.6%</div>",
        "</div>"
      ].join(""),
      badges: ["Stat Card"],
      titleProp: "title",
      emptyText: ""
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = r;
  }
  get iconConfig() {
    return this.icon;
  }
  set iconConfig(r) {
    this.icon = r;
  }
  get changePercentConfig() {
    return this.changePercent;
  }
  set changePercentConfig(r) {
    this.changePercent = r;
  }
  get changeDirectionConfig() {
    return this.changeDirection;
  }
  set changeDirectionConfig(r) {
    this.changeDirection = r || "up";
  }
  get chartDataConfig() {
    return this.chartData;
  }
  set chartDataConfig(r) {
    this.chartData = r;
  }
  get chartColorConfig() {
    return this.chartColor;
  }
  set chartColorConfig(r) {
    this.chartColor = r || "#4680ff";
  }
  get chartTypeConfig() {
    return this.chartType;
  }
  set chartTypeConfig(r) {
    this.chartType = r || "bar";
  }
  parseData() {
    return String(this.chartData || "").split(",").map((r) => Number(r.trim())).filter((r) => !Number.isNaN(r));
  }
  renderChart() {
    const r = this.parseData();
    if (!r.length) return ut``;
    const t = 120, e = 40, n = 2, s = this.chartColor || "#4680ff";
    if (this.chartType === "line") {
      const E = Math.max(...r), w = Math.min(...r), m = E - w || 1, C = r.length, k = C > 1 ? (t - n * 2) / (C - 1) : 0, N = r.map((H, Y) => {
        const lt = n + Y * k, yt = e - n - (H - w) / m * (e - n * 2);
        return `${lt.toFixed(1)},${yt.toFixed(1)}`;
      }).join(" ");
      return ut`<polyline points=${N} fill="none" stroke=${s} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`;
    }
    const l = Math.max(...r, 0) || 1, c = r.length, g = 3, p = Math.max(1, (t - n * 2 - g * (c - 1)) / c);
    return ut`${r.map((E, w) => {
      const m = Math.max(2, Math.max(0, E) / l * (e - n * 2)), C = n + w * (p + g), k = e - n - m;
      return ut`<rect x=${C.toFixed(1)} y=${k.toFixed(1)} width=${p.toFixed(1)} height=${m.toFixed(1)} rx="1.5" fill=${s}></rect>`;
    })}`;
  }
  render() {
    const r = this.changeDirection === "down" ? "down" : "up", t = r === "down" ? "▼" : "▲";
    return ne`
      <div class="stat-card">
        <div class="top-row">
          <div class="title-group">
            <span class="icon">${this.icon}</span>
            <span class="title">${this.title}</span>
          </div>
          <span class="menu">⋮</span>
        </div>
        <div class="value">${this.value}</div>
        <svg class="chart" viewBox="0 0 120 40" width="100%" height="40" preserveAspectRatio="none">
          ${this.renderChart()}
        </svg>
        ${this.changePercent ? ne`<div class="change ${r}">${t} ${this.changePercent}</div>` : ""}
      </div>
    `;
  }
};
M.styles = Ge`
    :host {
      display: block;
      --sc-bg: var(--uiv-surface-color, #ffffff);
      --sc-text: var(--uiv-text-primary, var(--uiv-text-color, #1d2630));
      --sc-muted: var(--uiv-text-color-secondary, #8996a4);
      --sc-border: var(--uiv-border-color, #e5e9ef);
      --sc-primary: var(--uiv-primary-color, #4680ff);
    }
    .stat-card {
      background: var(--sc-bg);
      border: 1px solid var(--sc-border);
      border-radius: 10px;
      padding: 18px 20px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
      font-family: inherit;
    }
    .top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .title-group {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }
    .icon {
      font-size: 18px;
      line-height: 1;
    }
    .title {
      font-size: 13px;
      color: var(--sc-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .menu {
      color: var(--sc-muted);
      font-weight: 700;
      cursor: pointer;
      line-height: 1;
    }
    .value {
      font-size: 24px;
      font-weight: 700;
      /* Explicit dark fallback so the primary value never fades to an
         inherited low-contrast color when the theme token chain is empty. */
      color: var(--sc-text, #1d2630);
      margin: 10px 0 8px;
    }
    .chart {
      display: block;
      width: 100%;
      height: 40px;
    }
    .change {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
    }
    .change.up { color: #12b76a; }
    .change.down { color: #f04438; }
  `;
R([
  W({ type: String })
], M.prototype, "title", 2);
R([
  W({ type: String })
], M.prototype, "value", 2);
R([
  W({ type: String })
], M.prototype, "icon", 2);
R([
  W({ type: String, attribute: "change-percent" })
], M.prototype, "changePercent", 2);
R([
  W({ type: String, attribute: "change-direction" })
], M.prototype, "changeDirection", 2);
R([
  W({ type: String, attribute: "chart-data" })
], M.prototype, "chartData", 2);
R([
  W({ type: String, attribute: "chart-color" })
], M.prototype, "chartColor", 2);
R([
  W({ type: String, attribute: "chart-type" })
], M.prototype, "chartType", 2);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Total Revenue"
  })
], M.prototype, "titleConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value",
    initialValue: "$3,020"
  })
], M.prototype, "valueConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Icon (emoji / char)",
    fieldMappings: "icon",
    initialValue: "💰"
  })
], M.prototype, "iconConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Change Percent",
    fieldMappings: "changePercent",
    initialValue: "30.6%"
  })
], M.prototype, "changePercentConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Change Direction",
    fieldMappings: "changeDirection",
    initialValue: "up",
    optionItems: [
      { label: "Up", value: "up" },
      { label: "Down", value: "down" }
    ]
  })
], M.prototype, "changeDirectionConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Chart Data (comma separated)",
    fieldMappings: "chartData",
    initialValue: "4,8,6,10,7,12,9"
  })
], M.prototype, "chartDataConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.COLOR_PICKER,
    displayLabel: "Chart Color",
    fieldMappings: "chartColor",
    initialValue: "#4680ff"
  })
], M.prototype, "chartColorConfig", 1);
R([
  V({
    attributeType: j.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Chart Type",
    fieldMappings: "chartType",
    initialValue: "bar",
    optionItems: [
      { label: "Bar", value: "bar" },
      { label: "Line", value: "line" }
    ]
  })
], M.prototype, "chartTypeConfig", 1);
M = R([
  ze({
    name: "zero-stat-card",
    version: "1.0.0",
    title: "Stat Card",
    elementSelector: "zero-stat-card",
    group: "Dashboard",
    iconName: "stat-card-icon.png",
    layoutKind: "leaf"
  }),
  Ve()
], M);
export {
  M as ZeroStatCard
};
