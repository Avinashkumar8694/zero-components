var jt = Object.defineProperty;
var Dt = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var We = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, E) {
      return function(w, b) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: b }), E && E(w, b);
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
    function m() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return _e(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return _e({ __proto__: null });
      } : function() {
        return _e({});
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
    }, b = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), k = typeof WeakMap == "function" ? WeakMap : Nt(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, Z = Pt(), K = Ct(Z);
    function pe(i, a, o, d) {
      if (_(o)) {
        if (!Ue(i))
          throw new TypeError();
        if (!Ie(a))
          throw new TypeError();
        return $t(i, a);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(d) && !_(d) && !Y(d))
          throw new TypeError();
        return Y(d) && (d = void 0), o = U(o), wt(i, a, o, d);
      }
    }
    e("decorate", pe);
    function ht(i, a) {
      function o(d, v) {
        if (!O(d))
          throw new TypeError();
        if (!_(v) && !Ot(v))
          throw new TypeError();
        Ce(i, a, d, v);
      }
      return o;
    }
    e("metadata", ht);
    function ft(i, a, o, d) {
      if (!O(o))
        throw new TypeError();
      return _(d) || (d = U(d)), Ce(i, a, o, d);
    }
    e("defineMetadata", ft);
    function pt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = U(o)), Oe(i, a, o);
    }
    e("hasMetadata", pt);
    function yt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = U(o)), ye(i, a, o);
    }
    e("hasOwnMetadata", yt);
    function vt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = U(o)), xe(i, a, o);
    }
    e("getMetadata", vt);
    function mt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = U(o)), Pe(i, a, o);
    }
    e("getOwnMetadata", mt);
    function _t(i, a) {
      if (!O(i))
        throw new TypeError();
      return _(a) || (a = U(a)), Te(i, a);
    }
    e("getMetadataKeys", _t);
    function bt(i, a) {
      if (!O(i))
        throw new TypeError();
      return _(a) || (a = U(a)), ke(i, a);
    }
    e("getOwnMetadataKeys", bt);
    function gt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      if (_(o) || (o = U(o)), !O(a))
        throw new TypeError();
      _(o) || (o = U(o));
      var d = ee(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", gt);
    function $t(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], v = d(a);
        if (!_(v) && !Y(v)) {
          if (!Ie(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function wt(i, a, o, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], x = P(a, o, d);
        if (!_(x) && !Y(x)) {
          if (!O(x))
            throw new TypeError();
          d = x;
        }
      }
      return d;
    }
    function Oe(i, a, o) {
      var d = ye(i, a, o);
      if (d)
        return !0;
      var v = me(a);
      return Y(v) ? !1 : Oe(i, v, o);
    }
    function ye(i, a, o) {
      var d = ee(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function xe(i, a, o) {
      var d = ye(i, a, o);
      if (d)
        return Pe(i, a, o);
      var v = me(a);
      if (!Y(v))
        return xe(i, v, o);
    }
    function Pe(i, a, o) {
      var d = ee(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Ce(i, a, o, d) {
      var v = ee(
        o,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function Te(i, a) {
      var o = ke(i, a), d = me(i);
      if (d === null)
        return o;
      var v = Te(d, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var P = new T(), x = [], g = 0, c = o; g < c.length; g++) {
        var h = c[g], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      return x;
    }
    function ke(i, a) {
      var o = ee(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Re(i) {
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
    function Y(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, a) {
      switch (Re(i)) {
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
      var o = "string", d = je(i, l);
      if (d !== void 0) {
        var v = d.call(i, o);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return St(i);
    }
    function St(i, a) {
      var o, d;
      {
        var v = i.toString;
        if (ue(v)) {
          var d = v.call(i);
          if (!O(d))
            return d;
        }
        var o = i.valueOf;
        if (ue(o)) {
          var d = o.call(i);
          if (!O(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Mt(i) {
      return "" + i;
    }
    function U(i) {
      var a = At(i);
      return Et(a) ? a : Mt(a);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ue(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(i, a) {
      return i === a || i !== i && a !== a;
    }
    function je(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ue(o))
          throw new TypeError();
        return o;
      }
    }
    function De(i) {
      var a = je(i, u);
      if (!ue(a))
        throw new TypeError();
      var o = a.call(i);
      if (!O(o))
        throw new TypeError();
      return o;
    }
    function He(i) {
      return i.value;
    }
    function Le(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function ze(i) {
      var a = i.return;
      a && a.call(i);
    }
    function me(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || a !== b)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var v = d.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function xt() {
      var i;
      !_(j) && typeof t.Reflect < "u" && !(j in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var a, o, d, v = new k(), P = {
        registerProvider: x,
        getProvider: c,
        setProvider: f
      };
      return P;
      function x(y) {
        if (!Object.isExtensible(P))
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
            d === void 0 && (d = new T()), d.add(y);
            break;
        }
      }
      function g(y, $) {
        if (!_(a)) {
          if (a.isProviderFor(y, $))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(y, $))
              return a;
            if (!_(d))
              for (var A = De(d); ; ) {
                var S = Le(A);
                if (!S)
                  return;
                var R = He(S);
                if (R.isProviderFor(y, $))
                  return ze(A), R;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, $))
          return i;
      }
      function c(y, $) {
        var A = v.get(y), S;
        return _(A) || (S = A.get($)), _(S) && (S = g(y, $), _(S) || (_(A) && (A = new M(), v.set(y, A)), A.set($, S))), S;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return a === y || o === y || !_(d) && d.has(y);
      }
      function f(y, $, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = c(y, $);
        if (S !== A) {
          if (!_(S))
            return !1;
          var R = v.get(y);
          _(R) && (R = new M(), v.set(y, R)), R.set($, A);
        }
        return !0;
      }
    }
    function Pt() {
      var i;
      return !_(j) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[j]), _(i) && (i = xt()), !_(j) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var a = new k(), o = {
        isProviderFor: function(h, f) {
          var y = a.get(h);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return Z.registerProvider(o), o;
      function d(h, f, y) {
        var $ = a.get(h), A = !1;
        if (_($)) {
          if (!y)
            return;
          $ = new M(), a.set(h, $), A = !0;
        }
        var S = $.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new M(), $.set(f, S), !i.setProvider(h, f, o))
            throw $.delete(f), A && a.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var $ = d(
          f,
          y,
          /*Create*/
          !1
        );
        return _($) ? !1 : Ne($.has(h));
      }
      function P(h, f, y) {
        var $ = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(h);
      }
      function x(h, f, y, $) {
        var A = d(
          y,
          $,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var y = [], $ = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (_($))
          return y;
        for (var A = $.keys(), S = De(A), R = 0; ; ) {
          var Ge = Le(S);
          if (!Ge)
            return y.length = R, y;
          var Ut = He(Ge);
          try {
            y[R] = Ut;
          } catch (It) {
            try {
              ze(S);
            } finally {
              throw It;
            }
          }
          R++;
        }
      }
      function c(h, f, y) {
        var $ = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var A = a.get(f);
          _(A) || (A.delete(y), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Tt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, x = new k(), g = {
        isProviderFor: function(c, h) {
          var f = x.get(c);
          return !_(f) && f.has(h) ? !0 : v(c, h).length ? (_(f) && (f = new T(), x.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function ee(i, a, o) {
      var d = Z.getProvider(i, a);
      if (!_(d))
        return d;
      if (o) {
        if (Z.setProvider(i, a, K))
          return K;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function g(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, g;
        }()
      ), d = (
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
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ve(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new o(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new o(this._keys, this._values, x);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!ve(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ve(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function v(g, c) {
        return g;
      }
      function P(g, c) {
        return c;
      }
      function x(g, c) {
        return [g, c];
      }
    }
    function Rt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new M();
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
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Nt() {
      var i = 16, a = w.create(), o = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + g();
        while (w.has(a, c));
        return a[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: w.create() });
        }
        return c[o];
      }
      function P(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function x(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, c), h;
        }
        return P(new Array(c), c);
      }
      function g() {
        var c = x(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function _e(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Ht(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
  return function(e) {
    if (Ht(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
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
function zt(r) {
  return Lt(r);
}
function Gt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        We(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((M) => w.insertRule(M.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const b = w.cloneNode(!0);
          p.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Wt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Bt(r) {
  return function(e, t) {
    try {
      Wt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function G(r) {
  return Bt(r);
}
var D;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(D || (D = {}));
var I;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, Ee = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ee && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Ae), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, Ae);
}, qt = (r, e) => {
  if (Ee) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = de.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = Ee ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Vt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Yt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, z = globalThis, Ze = z.trustedTypes, er = Ze ? Ze.emptyScript : "", be = z.reactiveElementPolyfillSupport, re = (r, e) => r, ce = { toAttribute(r, e) {
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
} }, Se = (r, e) => !Zt(r, e), Ye = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, n = [...Jt(t), ...Qt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(qe(s));
    } else e !== void 0 && t.push(qe(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ce;
      this._$Em = s;
      const E = p.fromAttribute(t, m.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Se)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
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
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[re("elementProperties")] = /* @__PURE__ */ new Map(), X[re("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: X }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, Xe = (r) => r, he = ne.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + L, tr = `<${ut}>`, F = document, se = () => F.createComment(""), ae = (r) => r === null || typeof r != "object" && typeof r != "function", Me = Array.isArray, rr = (r) => Me(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, W = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, dt = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ir = nr(1), J = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), B = F.createTreeWalker(F, 129);
function ct(r, e) {
  if (!Me(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = te;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let E, w, b = -1, M = 0;
    for (; M < p.length && (u.lastIndex = M, w = u.exec(p), w !== null); ) M = u.lastIndex, u === te ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (dt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = W) : w[3] !== void 0 && (u = W) : u === W ? w[0] === ">" ? (u = s ?? te, b = -1) : w[1] === void 0 ? b = -2 : (b = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? W : w[3] === '"' ? tt : et) : u === tt || u === et ? u = W : u === Qe || u === Ke ? u = te : (u = W, s = void 0);
    const T = u === W && r[m + 1].startsWith("/>") ? " " : "";
    l += u === te ? p + tr : b >= 0 ? (n.push(E), p.slice(0, b) + lt + p.slice(b) + L + T) : p + L + (b === -2 ? m : T);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [E, w] = sr(e, t);
    if (this.el = oe.createElement(E, n), B.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = B.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(lt)) {
          const M = w[u++], T = s.getAttribute(b).split(L), k = /([.?@])?(.*)/.exec(M);
          p.push({ type: 1, index: l, name: k[2], strings: T, ctor: k[1] === "." ? or : k[1] === "?" ? lr : k[1] === "@" ? ur : fe }), s.removeAttribute(b);
        } else b.startsWith(L) && (p.push({ type: 6, index: l }), s.removeAttribute(b));
        if (dt.test(s.tagName)) {
          const b = s.textContent.split(L), M = b.length - 1;
          if (M > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let T = 0; T < M; T++) s.append(b[T], se()), B.nextNode(), p.push({ type: 2, index: ++l });
            s.append(b[M], se());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) p.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(L, b + 1)) !== -1; ) p.push({ type: 7, index: l }), b += L.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = F.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Q(r, e, t = r, n) {
  var u, m;
  if (e === J) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ae(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = Q(r, s._$AS(r, e.values), s, n)), e;
}
class ar {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    B.currentNode = s;
    let l = B.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new le(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = F, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Q(this, e, t), ae(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ar(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new le(this.O(se()), this.O(se()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Q(this, e, t, 0), u = !ae(e) || e !== this._$AH && e !== J, u && (this._$AH = e);
    else {
      const m = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = Q(this, m[n + p], t, p), E === J && (E = this._$AH[p]), u || (u = !ae(E) || E !== this._$AH[p]), E === C ? e = C : e !== C && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class lr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ur extends fe {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Q(this, e, t, 0) ?? C) === J) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class dr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Q(this, e);
  }
}
const $e = ne.litHtmlPolyfillSupport;
$e == null || $e(oe, le), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new le(e.insertBefore(se(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class ie extends X {
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
    return J;
  }
}
var at;
ie._$litElement$ = !0, ie.finalized = !0, (at = V.litElementHydrateSupport) == null || at.call(V, { LitElement: ie });
const we = V.litElementPolyfillSupport;
we == null || we({ LitElement: ie });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Se }, fr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const p = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const p = this[u];
      e.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function q(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, H = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.95);border:1px solid rgba(148,163,184,0.15);'>",
    "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
    "<span>{{display:label}}</span>",
    "<span style='color:var(--uiv-primary-color,#6366f1);'>{{display:value}}</span>",
    "</div>",
    "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.2);position:relative;margin:8px 0;'>",
    "<div style='position:absolute;left:0;width:50%;height:100%;background:var(--uiv-primary-color,#6366f1);border-radius:3px;'></div>",
    "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#ffffff;border:2px solid var(--uiv-primary-color,#6366f1);box-shadow:0 2px 4px rgba(0,0,0,0.1);'></div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Slider", "Uiverse"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let N = class extends ie {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Slider", this.value = 50, this.min = 0, this.max = 100, this.step = 1, this.accentColor = "", this.onInputEvent = "input";
  }
  static getStudioTemplate(r) {
    var l, u, m, p, E, w, b, M, T, k, j;
    if (!r) return it;
    const e = st(r.studio.display.label || "Value"), t = st(r.studio.display.value || ((m = ((l = r.props) == null ? void 0 : l.value) ?? ((u = r.studio.props) == null ? void 0 : u.value)) == null ? void 0 : m.toString()) || "50"), n = (((p = r.props) == null ? void 0 : p.accentColor) ?? ((E = r.studio.props) == null ? void 0 : E.accentColor)) || "var(--uiv-primary-color,#6366f1)";
    let s = 50;
    if (r.studio.props) {
      const Z = Number(((w = r.props) == null ? void 0 : w.value) ?? ((b = r.studio.props) == null ? void 0 : b.value)) || 50, K = Number(((M = r.props) == null ? void 0 : M.min) ?? ((T = r.studio.props) == null ? void 0 : T.min)) || 0, pe = Number(((k = r.props) == null ? void 0 : k.max) ?? ((j = r.studio.props) == null ? void 0 : j.max)) || 100;
      s = Math.max(0, Math.min(100, (Z - K) / (pe - K) * 100));
    }
    return {
      ...it,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.95);border:1px solid rgba(148,163,184,0.15);'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
        `<span>${e}</span>`,
        `<span style='color:${n};'>${t}</span>`,
        "</div>",
        "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.2);position:relative;margin:8px 0;'>",
        `<div style='position:absolute;left:0;width:${s}%;height:100%;background:${n};border-radius:3px;'></div>`,
        `<div style='position:absolute;left:${s}%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#ffffff;border:2px solid ${n};box-shadow:0 2px 4px rgba(0,0,0,0.1);'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  handleInput(r) {
    const e = r.target;
    this.value = Number(e.value), this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = nt()) == null ? void 0 : t.getActiveTheme("zero-uiv-themes"), e = this.theme || (r == null ? void 0 : r.id) || "modern";
    return ir`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("slider") : ""}
                :host {
                    ${this.accentColor ? `--uiv-slider-primary: ${this.accentColor};` : ""}
                }
            </style>
            <div class="slider-wrapper uiv-${r == null ? void 0 : r.id}-theme ${e}">
                <label class="label uiv-${r == null ? void 0 : r.id}-text">${this.label}: ${this.value}</label>
                <input 
                    type="range" 
                    class="uiv-${r == null ? void 0 : r.id}-card"
                    .min="${this.min}" 
                    .max="${this.max}" 
                    .step="${this.step}" 
                    .value="${this.value}"
                    @input="${this.handleInput}"
                    aria-label="${this.label}"
                >
            </div>
        `;
  }
};
N.styles = Ft`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 25px;
            --sl-p: var(--uiv-primary-color, #6366f1);
            --sl-bg: var(--uiv-surface-color, #ffffff);
            --sl-border: var(--uiv-border-color, #e2e8f0);
            --sl-t: var(--uiv-text-color, #1e293b);
            --intensity: var(--uiv-glow-intensity, 1);
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
            cursor: pointer;
        }

        input[type="range"]:focus {
            outline: none;
        }

        .label {
            display: block;
            margin-bottom: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--sl-p);
            letter-spacing: 0.05em;
        }

        /* Webkit Thumb */
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: var(--sl-p);
            cursor: pointer;
            margin-top: -9px;
            box-shadow: 0 0 calc(10px * var(--intensity)) var(--sl-p);
            border: 2px solid #fff;
            transition: transform 0.2s ease;
        }

        input[type="range"]:active::-webkit-slider-thumb {
            transform: scale(1.2);
        }

        /* Webkit Track */
        input[type="range"]::-webkit-slider-runnable-track {
            width: 100%;
            height: 6px;
            cursor: pointer;
            background: var(--sl-border);
            border-radius: 3px;
        }

        /* Retro override */
        .retro input[type="range"]::-webkit-slider-thumb {
            border-radius: 0;
            border: 2px solid #000;
            box-shadow: 3px 3px 0px #000;
        }
        .retro input[type="range"]::-webkit-slider-runnable-track {
            border: 2px solid #000;
            background: #fff;
            height: 8px;
        }
    `;
H([
  q({ type: String }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.DROPDOWN,
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
], N.prototype, "theme", 2);
H([
  q({ type: String }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], N.prototype, "label", 2);
H([
  q({ type: Number }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], N.prototype, "value", 2);
H([
  q({ type: Number }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Min",
    fieldMappings: "min"
  })
], N.prototype, "min", 2);
H([
  q({ type: Number }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
], N.prototype, "max", 2);
H([
  q({ type: Number }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Step",
    fieldMappings: "step"
  })
], N.prototype, "step", 2);
H([
  q({ type: String }),
  G({
    attributeType: I.PROPERTY,
    uiComponentType: D.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], N.prototype, "accentColor", 2);
H([
  G({
    attributeType: I.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], N.prototype, "onInputEvent", 2);
N = H([
  zt({
    name: "zero-uiv-slider",
    version: "1.0.0",
    title: "Unified Slider",
    elementSelector: "zero-uiv-slider",
    group: "Uiverse Sliders",
    iconName: "slider-icon.png"
  }),
  Gt()
], N);
export {
  N as ZeroUivSlider,
  it as studioTemplate
};
