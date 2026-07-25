var Ie = Object.defineProperty;
var Ue = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Bt = (r, t, e) => Ue(r, typeof t != "symbol" ? t + "" : t, e);
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var e = typeof globalThis == "object" ? globalThis : typeof Zt == "object" ? Zt : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
      return function(m, $) {
        Object.defineProperty(p, m, { configurable: !0, writable: !0, value: $ }), A && A(m, $);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !g && !p, m = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return $t(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return $t({ __proto__: null });
      } : function() {
        return $t({});
      },
      has: A ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: A ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, $ = Object.getPrototypeOf(Function), E = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ke(), S = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), k = typeof WeakMap == "function" ? WeakMap : Ne(), D = s ? Symbol.for("@reflect-metadata:registry") : void 0, U = Pe(), tt = Oe(U);
    function yt(i, a, o, u) {
      if (_(o)) {
        if (!Ut(i))
          throw new TypeError();
        if (!Lt(a))
          throw new TypeError();
        return we(i, a);
      } else {
        if (!Ut(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(u) && !_(u) && !q(u))
          throw new TypeError();
        return q(u) && (u = void 0), o = I(o), be(i, a, o, u);
      }
    }
    t("decorate", yt);
    function vt(i, a) {
      function o(u, v) {
        if (!M(u))
          throw new TypeError();
        if (!_(v) && !xe(v))
          throw new TypeError();
        Rt(i, a, u, v);
      }
      return o;
    }
    t("metadata", vt);
    function fe(i, a, o, u) {
      if (!M(o))
        throw new TypeError();
      return _(u) || (u = I(u)), Rt(i, a, o, u);
    }
    t("defineMetadata", fe);
    function pe(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = I(o)), Ot(i, a, o);
    }
    t("hasMetadata", pe);
    function ye(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = I(o)), gt(i, a, o);
    }
    t("hasOwnMetadata", ye);
    function ve(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = I(o)), Tt(i, a, o);
    }
    t("getMetadata", ve);
    function ge(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = I(o)), kt(i, a, o);
    }
    t("getOwnMetadata", ge);
    function _e(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = I(a)), Nt(i, a);
    }
    t("getMetadataKeys", _e);
    function me(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = I(a)), Dt(i, a);
    }
    t("getOwnMetadataKeys", me);
    function $e(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (_(o) || (o = I(o)), !M(a))
        throw new TypeError();
      _(o) || (o = I(o));
      var u = et(
        a,
        o,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", $e);
    function we(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o], v = u(a);
        if (!_(v) && !q(v)) {
          if (!Lt(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function be(i, a, o, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], P = O(a, o, u);
        if (!_(P) && !q(P)) {
          if (!M(P))
            throw new TypeError();
          u = P;
        }
      }
      return u;
    }
    function Ot(i, a, o) {
      var u = gt(i, a, o);
      if (u)
        return !0;
      var v = mt(a);
      return q(v) ? !1 : Ot(i, v, o);
    }
    function gt(i, a, o) {
      var u = et(
        a,
        o,
        /*Create*/
        !1
      );
      return _(u) ? !1 : It(u.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Tt(i, a, o) {
      var u = gt(i, a, o);
      if (u)
        return kt(i, a, o);
      var v = mt(a);
      if (!q(v))
        return Tt(i, v, o);
    }
    function kt(i, a, o) {
      var u = et(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Rt(i, a, o, u) {
      var v = et(
        o,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, u);
    }
    function Nt(i, a) {
      var o = Dt(i, a), u = mt(i);
      if (u === null)
        return o;
      var v = Nt(u, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var O = new S(), P = [], w = 0, h = o; w < h.length; w++) {
        var d = h[w], f = O.has(d);
        f || (O.add(d), P.push(d));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var d = b[y], f = O.has(d);
        f || (O.add(d), P.push(d));
      }
      return P;
    }
    function Dt(i, a) {
      var o = et(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function jt(i) {
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
    function q(i) {
      return i === null;
    }
    function Ae(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, a) {
      switch (jt(i)) {
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
      var o = "string", u = Ht(i, l);
      if (u !== void 0) {
        var v = u.call(i, o);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Ce(i);
    }
    function Ce(i, a) {
      var o, u;
      {
        var v = i.toString;
        if (ut(v)) {
          var u = v.call(i);
          if (!M(u))
            return u;
        }
        var o = i.valueOf;
        if (ut(o)) {
          var u = o.call(i);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function It(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function I(i) {
      var a = Ee(i);
      return Ae(a) ? a : Se(a);
    }
    function Ut(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ut(i) {
      return typeof i == "function";
    }
    function Lt(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (jt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function _t(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ht(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ut(o))
          throw new TypeError();
        return o;
      }
    }
    function zt(i) {
      var a = Ht(i, c);
      if (!ut(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function Ft(i) {
      return i.value;
    }
    function Vt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Gt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function mt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || a !== $)
        return a;
      var o = i.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return a;
      var v = u.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Me() {
      var i;
      !_(D) && typeof e.Reflect < "u" && !(D in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var a, o, u, v = new k(), O = {
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
            u === void 0 && (u = new S()), u.add(y);
            break;
        }
      }
      function w(y, b) {
        if (!_(a)) {
          if (a.isProviderFor(y, b))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(y, b))
              return a;
            if (!_(u))
              for (var C = zt(u); ; ) {
                var x = Vt(C);
                if (!x)
                  return;
                var j = Ft(x);
                if (j.isProviderFor(y, b))
                  return Gt(C), j;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, b))
          return i;
      }
      function h(y, b) {
        var C = v.get(y), x;
        return _(C) || (x = C.get(b)), _(x) && (x = w(y, b), _(x) || (_(C) && (C = new E(), v.set(y, C)), C.set(b, x))), x;
      }
      function d(y) {
        if (_(y))
          throw new TypeError();
        return a === y || o === y || !_(u) && u.has(y);
      }
      function f(y, b, C) {
        if (!d(C))
          throw new Error("Metadata provider not registered.");
        var x = h(y, b);
        if (x !== C) {
          if (!_(x))
            return !1;
          var j = v.get(y);
          _(j) && (j = new E(), v.set(y, j)), j.set(b, C);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !_(D) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[D]), _(i) && (i = Me()), !_(D) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Oe(i) {
      var a = new k(), o = {
        isProviderFor: function(d, f) {
          var y = a.get(d);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: h
      };
      return U.registerProvider(o), o;
      function u(d, f, y) {
        var b = a.get(d), C = !1;
        if (_(b)) {
          if (!y)
            return;
          b = new E(), a.set(d, b), C = !0;
        }
        var x = b.get(f);
        if (_(x)) {
          if (!y)
            return;
          if (x = new E(), b.set(f, x), !i.setProvider(d, f, o))
            throw b.delete(f), C && a.delete(d), new Error("Wrong provider for target.");
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
        return _(b) ? !1 : It(b.has(d));
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
        var C = u(
          y,
          b,
          /*Create*/
          !0
        );
        C.set(d, f);
      }
      function w(d, f) {
        var y = [], b = u(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return y;
        for (var C = b.keys(), x = zt(C), j = 0; ; ) {
          var Wt = Vt(x);
          if (!Wt)
            return y.length = j, y;
          var De = Ft(Wt);
          try {
            y[j] = De;
          } catch (je) {
            try {
              Gt(x);
            } finally {
              throw je;
            }
          }
          j++;
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
          var C = a.get(f);
          _(C) || (C.delete(y), C.size === 0 && a.delete(C));
        }
        return !0;
      }
    }
    function Te(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, P = new k(), w = {
        isProviderFor: function(h, d) {
          var f = P.get(h);
          return !_(f) && f.has(d) ? !0 : v(h, d).length ? (_(f) && (f = new S(), P.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return w;
    }
    function et(i, a, o) {
      var u = U.getProvider(i, a);
      if (!_(u))
        return u;
      if (o) {
        if (U.setProvider(i, a, tt))
          return tt;
        throw new Error("Illegal state.");
      }
    }
    function ke() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function w(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[c] = function() {
            return this;
          }, w.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), h;
          }, w.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: h, done: !0 };
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
          }), w.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, w.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, w.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, _t(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, w.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, w.prototype.entries = function() {
            return new o(this._keys, this._values, P);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[c] = function() {
            return this.entries();
          }, w.prototype._find = function(h, d) {
            if (!_t(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (_t(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return u;
      function v(w, h) {
        return w;
      }
      function O(w, h) {
        return h;
      }
      function P(w, h) {
        return [w, h];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new E();
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
    function Ne() {
      var i = 16, a = m.create(), o = u();
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
            return f !== void 0 ? m.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? m.get(f, this._key) : void 0;
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
          h = "@@WeakMap@@" + w();
        while (m.has(a, h));
        return a[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, o)) {
          if (!d)
            return;
          Object.defineProperty(h, o, { value: m.create() });
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
      function w() {
        var h = P(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function $t(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qt || (qt = {}));
function Le(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function He(r) {
  return function(t) {
    if (Le(r)) {
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
  return He(r);
}
function Fe(r) {
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const m = new CSSStyleSheet(), $ = (A = l.sheet) == null ? void 0 : A.cssRules;
          $ && (Array.from($).forEach((E) => m.insertRule(E.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, m]);
        } else if (l) {
          const m = l.cloneNode(!0);
          p.appendChild(m);
        }
        c.forEach((m) => {
          const $ = m.cloneNode(!0);
          p.appendChild($);
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
function Ge(r) {
  return function(t, e) {
    try {
      Ve(r);
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
function Q(r) {
  return Ge(r);
}
var z;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(z || (z = {}));
var F;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(F || (F = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = globalThis, St = ht.ShadowRoot && (ht.ShadyCSS === void 0 || ht.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xt = Symbol(), Yt = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== xt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (St && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Yt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Yt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new oe(typeof r == "string" ? r : r + "", void 0, xt), Be = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new oe(e, r, xt);
}, Ze = (r, t) => {
  if (St) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = ht.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Xt = St ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Ye, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, H = globalThis, Jt = H.trustedTypes, tr = Jt ? Jt.emptyScript : "", wt = H.reactiveElementPolyfillSupport, nt = (r, t) => r, dt = { toAttribute(r, t) {
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
} }, Mt = (r, t) => !qe(r, t), Qt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: Mt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Qt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ye(this.prototype, t, s);
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
    return this.elementProperties.get(t) ?? Qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
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
      for (const s of n) e.unshift(Xt(s));
    } else t !== void 0 && e.push(Xt(t));
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
      const A = p.fromAttribute(e, g.type);
      this[s] = A ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var c;
    if (t !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? Mt)(l, e) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[nt("elementProperties")] = /* @__PURE__ */ new Map(), Y[nt("finalized")] = /* @__PURE__ */ new Map(), wt == null || wt({ ReactiveElement: Y }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, Kt = (r) => r, ft = it.trustedTypes, te = ft ? ft.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, le = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, ce = "?" + L, er = `<${ce}>`, Z = document, at = () => Z.createComment(""), ot = (r) => r === null || typeof r != "object" && typeof r != "function", Pt = Array.isArray, rr = (r) => Pt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", bt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ee = /-->/g, re = />/g, V = RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ne = /'/g, ie = /"/g, ue = /^(?:script|style|textarea|title)$/i, he = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), At = he(1), G = he(2), X = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), se = /* @__PURE__ */ new WeakMap(), W = Z.createTreeWalker(Z, 129);
function de(r, t) {
  if (!Pt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return te !== void 0 ? te.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = rt;
  for (let g = 0; g < e; g++) {
    const p = r[g];
    let A, m, $ = -1, E = 0;
    for (; E < p.length && (c.lastIndex = E, m = c.exec(p), m !== null); ) E = c.lastIndex, c === rt ? m[1] === "!--" ? c = ee : m[1] !== void 0 ? c = re : m[2] !== void 0 ? (ue.test(m[2]) && (s = RegExp("</" + m[2], "g")), c = V) : m[3] !== void 0 && (c = V) : c === V ? m[0] === ">" ? (c = s ?? rt, $ = -1) : m[1] === void 0 ? $ = -2 : ($ = c.lastIndex - m[2].length, A = m[1], c = m[3] === void 0 ? V : m[3] === '"' ? ie : ne) : c === ie || c === ne ? c = V : c === ee || c === re ? c = rt : (c = V, s = void 0);
    const S = c === V && r[g + 1].startsWith("/>") ? " " : "";
    l += c === rt ? p + er : $ >= 0 ? (n.push(A), p.slice(0, $) + le + p.slice($) + L + S) : p + L + ($ === -2 ? g : S);
  }
  return [de(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class lt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const g = t.length - 1, p = this.parts, [A, m] = nr(t, e);
    if (this.el = lt.createElement(A, n), W.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = W.nextNode()) !== null && p.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(le)) {
          const E = m[c++], S = s.getAttribute($).split(L), k = /([.?@])?(.*)/.exec(E);
          p.push({ type: 1, index: l, name: k[2], strings: S, ctor: k[1] === "." ? sr : k[1] === "?" ? ar : k[1] === "@" ? or : pt }), s.removeAttribute($);
        } else $.startsWith(L) && (p.push({ type: 6, index: l }), s.removeAttribute($));
        if (ue.test(s.tagName)) {
          const $ = s.textContent.split(L), E = $.length - 1;
          if (E > 0) {
            s.textContent = ft ? ft.emptyScript : "";
            for (let S = 0; S < E; S++) s.append($[S], at()), W.nextNode(), p.push({ type: 2, index: ++l });
            s.append($[E], at());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ce) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(L, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += L.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = Z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function J(r, t, e = r, n) {
  var c, g;
  if (t === X) return t;
  let s = n !== void 0 ? (c = e._$Co) == null ? void 0 : c[n] : e._$Cl;
  const l = ot(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = J(r, s._$AS(r, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? Z).importNode(e, !0);
    W.currentNode = s;
    let l = W.nextNode(), c = 0, g = 0, p = n[0];
    for (; p !== void 0; ) {
      if (c === p.index) {
        let A;
        p.type === 2 ? A = new ct(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new lr(l, this, t)), this._$AV.push(A), p = n[++g];
      }
      c !== (p == null ? void 0 : p.index) && (l = W.nextNode(), c++);
    }
    return W.currentNode = Z, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ct {
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
    t = J(this, t, e), ot(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== T && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = lt.createElement(de(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const c = new ir(s, this), g = c.u(this.options);
      c.p(e), this.T(g), this._$AH = c;
    }
  }
  _$AC(t) {
    let e = se.get(t.strings);
    return e === void 0 && se.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ct(this.O(at()), this.O(at()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Kt(t).nextSibling;
      Kt(t).remove(), t = s;
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
    if (l === void 0) t = J(this, t, e, 0), c = !ot(t) || t !== this._$AH && t !== X, c && (this._$AH = t);
    else {
      const g = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = J(this, g[n + p], e, p), A === X && (A = this._$AH[p]), c || (c = !ot(A) || A !== this._$AH[p]), A === T ? t = T : t !== T && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
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
    if ((t = J(this, t, e, 0) ?? T) === X) return;
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
    J(this, t);
  }
}
const Et = it.litHtmlPolyfillSupport;
Et == null || Et(lt, ct), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const cr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ct(t.insertBefore(at(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis;
class st extends Y {
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
    return X;
  }
}
var ae;
st._$litElement$ = !0, st.finalized = !0, (ae = B.litElementHydrateSupport) == null || ae.call(B, { LitElement: st });
const Ct = B.litElementPolyfillSupport;
Ct == null || Ct({ LitElement: st });
(B.litElementVersions ?? (B.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: Mt }, hr = (r = ur, t, e) => {
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
function K(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, N = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = (n ? c(t, e, s) : c(s)) || s);
  return n && s && dr(t, e, s), s;
};
let R = class extends st {
  constructor() {
    super(...arguments), this.title = "Repeat customer rate", this.value = "$3,020", this.changePercent = "30.6%", this.chartData = "30,45,35,55,40,65,50,70,60,80", this.chartColor = "#4680ff", this.chartType = "area";
  }
  static getStudioTemplate(r) {
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:10px;padding:20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;'>",
        "<div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;'>",
        "<span style='font-size:15px;font-weight:600;color:var(--uiv-text-color,#1d2630);'>{{display:title}}</span>",
        "<span style='font-size:12px;font-weight:600;color:#12b76a;background:rgba(18,183,106,0.12);padding:3px 8px;border-radius:6px;'>30.6%</span>",
        "</div>",
        "<svg viewBox='0 0 320 120' width='100%' height='120' preserveAspectRatio='none'>",
        "<line x1='0' y1='30' x2='320' y2='30' stroke='#eef1f6' stroke-width='1'/>",
        "<line x1='0' y1='60' x2='320' y2='60' stroke='#eef1f6' stroke-width='1'/>",
        "<line x1='0' y1='90' x2='320' y2='90' stroke='#eef1f6' stroke-width='1'/>",
        "<path d='M0,120 L0,80 L40,60 L80,72 L120,40 L160,56 L200,28 L240,48 L280,24 L320,36 L320,120 Z' fill='rgba(70,128,255,0.15)'/>",
        "<polyline points='0,80 40,60 80,72 120,40 160,56 200,28 240,48 280,24 320,36' fill='none' stroke='#4680ff' stroke-width='2'/>",
        "</svg>",
        "</div>"
      ].join(""),
      badges: ["Chart Card"],
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
  get changePercentConfig() {
    return this.changePercent;
  }
  set changePercentConfig(r) {
    this.changePercent = r;
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
    this.chartType = r || "area";
  }
  parseData() {
    return String(this.chartData || "").split(",").map((r) => Number(r.trim())).filter((r) => !Number.isNaN(r));
  }
  renderGrid(r, t) {
    return G`${[0.25, 0.5, 0.75].map((n) => {
      const s = (t * n).toFixed(1);
      return G`<line class="grid-line" x1="0" y1=${s} x2=${r} y2=${s}></line>`;
    })}`;
  }
  renderSeries(r, t) {
    const e = this.parseData();
    if (!e.length) return G``;
    const n = this.chartColor || "#4680ff", s = 4, l = e.length, c = Math.max(...e), g = Math.min(...e), p = c - g || 1;
    if (this.chartType === "bar") {
      const E = Math.max(...e, 0) || 1, S = 6, k = Math.max(1, (r - S * (l - 1)) / l);
      return G`${e.map((D, U) => {
        const tt = Math.max(2, Math.max(0, D) / E * (t - s * 2)), yt = U * (k + S), vt = t - tt;
        return G`<rect x=${yt.toFixed(1)} y=${vt.toFixed(1)} width=${k.toFixed(1)} height=${tt.toFixed(1)} rx="2" fill=${n}></rect>`;
      })}`;
    }
    const A = l > 1 ? r / (l - 1) : 0, m = e.map((E, S) => {
      const k = S * A, D = s + (1 - (E - g) / p) * (t - s * 2);
      return [k, D];
    }), $ = m.map(([E, S]) => `${E.toFixed(1)},${S.toFixed(1)}`).join(" ");
    if (this.chartType === "area") {
      const E = m[0], S = m[m.length - 1], k = `M${E[0].toFixed(1)},${t} L${E[0].toFixed(1)},${E[1].toFixed(1)} ` + m.map(([D, U]) => `L${D.toFixed(1)},${U.toFixed(1)}`).join(" ") + ` L${S[0].toFixed(1)},${t} Z`;
      return G`
        <path d=${k} fill=${n} fill-opacity="0.15"></path>
        <polyline points=${$} fill="none" stroke=${n} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
      `;
    }
    return G`<polyline points=${$} fill="none" stroke=${n} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`;
  }
  render() {
    return At`
      <div class="chart-card">
        <div class="head">
          <div>
            <div class="title">${this.title}</div>
            ${this.value ? At`<div class="value">${this.value}</div>` : ""}
          </div>
          ${this.changePercent ? At`<span class="badge">${this.changePercent}</span>` : ""}
        </div>
        <svg class="chart" viewBox="0 0 ${320} ${120}" width="100%" height="120" preserveAspectRatio="none">
          ${this.renderGrid(320, 120)}
          ${this.renderSeries(320, 120)}
        </svg>
      </div>
    `;
  }
};
R.styles = Be`
    :host {
      display: block;
      --cc-bg: var(--uiv-surface-color, #ffffff);
      --cc-text: var(--uiv-text-color, #1d2630);
      --cc-muted: var(--uiv-text-color-secondary, #8996a4);
      --cc-border: var(--uiv-border-color, #e5e9ef);
      --cc-primary: var(--uiv-primary-color, #4680ff);
    }
    .chart-card {
      background: var(--cc-bg);
      border: 1px solid var(--cc-border);
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
      font-family: inherit;
    }
    .head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--cc-text);
    }
    .value {
      font-size: 20px;
      font-weight: 700;
      color: var(--cc-text);
      margin-top: 2px;
    }
    .badge {
      font-size: 12px;
      font-weight: 600;
      color: #12b76a;
      background: rgba(18, 183, 106, 0.12);
      padding: 3px 8px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .chart {
      display: block;
      width: 100%;
      height: 120px;
    }
    .grid-line { stroke: #eef1f6; stroke-width: 1; }
  `;
N([
  K({ type: String })
], R.prototype, "title", 2);
N([
  K({ type: String })
], R.prototype, "value", 2);
N([
  K({ type: String, attribute: "change-percent" })
], R.prototype, "changePercent", 2);
N([
  K({ type: String, attribute: "chart-data" })
], R.prototype, "chartData", 2);
N([
  K({ type: String, attribute: "chart-color" })
], R.prototype, "chartColor", 2);
N([
  K({ type: String, attribute: "chart-type" })
], R.prototype, "chartType", 2);
N([
  Q({
    attributeType: F.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Repeat customer rate"
  })
], R.prototype, "titleConfig", 1);
N([
  Q({
    attributeType: F.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value",
    initialValue: "$3,020"
  })
], R.prototype, "valueConfig", 1);
N([
  Q({
    attributeType: F.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Change Percent",
    fieldMappings: "changePercent",
    initialValue: "30.6%"
  })
], R.prototype, "changePercentConfig", 1);
N([
  Q({
    attributeType: F.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Chart Data (comma separated)",
    fieldMappings: "chartData",
    initialValue: "30,45,35,55,40,65,50,70,60,80"
  })
], R.prototype, "chartDataConfig", 1);
N([
  Q({
    attributeType: F.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Chart Color",
    fieldMappings: "chartColor",
    initialValue: "#4680ff"
  })
], R.prototype, "chartColorConfig", 1);
N([
  Q({
    attributeType: F.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Chart Type",
    fieldMappings: "chartType",
    initialValue: "area",
    optionItems: [
      { label: "Line", value: "line" },
      { label: "Area", value: "area" },
      { label: "Bar", value: "bar" }
    ]
  })
], R.prototype, "chartTypeConfig", 1);
R = N([
  ze({
    name: "zero-chart-card",
    version: "1.0.0",
    title: "Chart Card",
    elementSelector: "zero-chart-card",
    group: "Dashboard",
    iconName: "chart-card-icon.png",
    layoutKind: "leaf"
  }),
  Fe()
], R);
export {
  R as ZeroChartCard
};
