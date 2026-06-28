var jt = Object.defineProperty;
var Dt = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, E) {
      return function(w, g) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: g }), E && E(w, g);
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
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, g = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), k = typeof WeakMap == "function" ? WeakMap : Nt(), U = s ? Symbol.for("@reflect-metadata:registry") : void 0, V = Pt(), J = Ct(V);
    function pe(i, o, a, c) {
      if (_(a)) {
        if (!Ue(i))
          throw new TypeError();
        if (!Ie(o))
          throw new TypeError();
        return $t(i, o);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !_(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), a = N(a), wt(i, o, a, c);
      }
    }
    e("decorate", pe);
    function ht(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!_(v) && !Ot(v))
          throw new TypeError();
        Ce(i, o, c, v);
      }
      return a;
    }
    e("metadata", ht);
    function ft(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = N(c)), Ce(i, o, a, c);
    }
    e("defineMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Oe(i, o, a);
    }
    e("hasMetadata", pt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), ye(i, o, a);
    }
    e("hasOwnMetadata", yt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), xe(i, o, a);
    }
    e("getMetadata", vt);
    function mt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Pe(i, o, a);
    }
    e("getOwnMetadata", mt);
    function _t(i, o) {
      if (!O(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Te(i, o);
    }
    e("getMetadataKeys", _t);
    function gt(i, o) {
      if (!O(i))
        throw new TypeError();
      return _(o) || (o = N(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", gt);
    function bt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (_(a) || (a = N(a)), !O(o))
        throw new TypeError();
      _(a) || (a = N(a));
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", bt);
    function $t(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!_(v) && !W(v)) {
          if (!Ie(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function wt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], x = P(o, a, c);
        if (!_(x) && !W(x)) {
          if (!O(x))
            throw new TypeError();
          c = x;
        }
      }
      return c;
    }
    function Oe(i, o, a) {
      var c = ye(i, o, a);
      if (c)
        return !0;
      var v = me(o);
      return W(v) ? !1 : Oe(i, v, a);
    }
    function ye(i, o, a) {
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function xe(i, o, a) {
      var c = ye(i, o, a);
      if (c)
        return Pe(i, o, a);
      var v = me(o);
      if (!W(v))
        return xe(i, v, a);
    }
    function Pe(i, o, a) {
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Te(i, o) {
      var a = ke(i, o), c = me(i);
      if (c === null)
        return a;
      var v = Te(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), x = [], b = 0, d = a; b < d.length; b++) {
        var h = d[b], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      return x;
    }
    function ke(i, o) {
      var a = Q(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function W(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
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
      var a = "string", c = je(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return St(i);
    }
    function St(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (le(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (le(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
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
    function N(i) {
      var o = At(i);
      return Et(o) ? o : Mt(o);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
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
    function ve(i, o) {
      return i === o || i !== i && o !== o;
    }
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var o = je(i, u);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function Le(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ze(i) {
      var o = i.return;
      o && o.call(i);
    }
    function me(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function xt() {
      var i;
      !_(U) && typeof t.Reflect < "u" && !(U in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var o, a, c, v = new k(), P = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return P;
      function x(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new T()), c.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!_(o)) {
          if (o.isProviderFor(y, $))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(y, $))
              return o;
            if (!_(c))
              for (var A = De(c); ; ) {
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
      function d(y, $) {
        var A = v.get(y), S;
        return _(A) || (S = A.get($)), _(S) && (S = b(y, $), _(S) || (_(A) && (A = new M(), v.set(y, A)), A.set($, S))), S;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return o === y || a === y || !_(c) && c.has(y);
      }
      function f(y, $, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(y, $);
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
      return !_(U) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[U]), _(i) && (i = xt()), !_(U) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new k(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return V.registerProvider(a), a;
      function c(h, f, y) {
        var $ = o.get(h), A = !1;
        if (_($)) {
          if (!y)
            return;
          $ = new M(), o.set(h, $), A = !0;
        }
        var S = $.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new M(), $.set(f, S), !i.setProvider(h, f, a))
            throw $.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        return _($) ? !1 : Ne($.has(h));
      }
      function P(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(h);
      }
      function x(h, f, y, $) {
        var A = c(
          y,
          $,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function b(h, f) {
        var y = [], $ = c(
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
      function d(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var A = o.get(f);
          _(A) || (A.delete(y), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Tt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, x = new k(), b = {
        isProviderFor: function(d, h) {
          var f = x.get(d);
          return !_(f) && f.has(h) ? !0 : v(d, h).length ? (_(f) && (f = new T(), x.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function Q(i, o, a) {
      var c = V.getProvider(i, o);
      if (!_(c))
        return c;
      if (a) {
        if (V.setProvider(i, o, J))
          return J;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, b.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ve(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!ve(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ve(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function v(b, d) {
        return b;
      }
      function P(b, d) {
        return d;
      }
      function x(b, d) {
        return [b, d];
      }
    }
    function Rt() {
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Nt() {
      var i = 16, o = w.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = v(
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
          d = "@@WeakMap@@" + b();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
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
      function b() {
        var d = x(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function _e(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
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
        Be(this, "_stylesApplied", !1);
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
          const w = new CSSStyleSheet(), g = (E = l.sheet) == null ? void 0 : E.cssRules;
          g && (Array.from(g).forEach((M) => w.insertRule(M.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const g = w.cloneNode(!0);
          p.appendChild(g);
        });
      }
    }
    return t;
  };
}
function Bt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(r) {
  return function(e, t) {
    try {
      Bt(r);
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
function oe(r) {
  return Vt(r);
}
var q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(q || (q = {}));
var G;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(G || (G = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, Ee = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let at = class {
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
const Wt = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ae), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new at(t, r, Ae);
}, qt = (r, e) => {
  if (Ee) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = Ee ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Yt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, j = globalThis, Ze = j.trustedTypes, er = Ze ? Ze.emptyScript : "", ge = j.reactiveElementPolyfillSupport, ee = (r, e) => r, ce = { toAttribute(r, e) {
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
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let F = class extends HTMLElement {
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
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
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
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[ee("elementProperties")] = /* @__PURE__ */ new Map(), F[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: F }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Xe = (r) => r, de = te.trustedTypes, Je = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + I, tr = `<${ut}>`, B = document, ne = () => B.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Me = Array.isArray, rr = (r) => Me(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, H = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ct = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ir = nr(1), Z = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), L = B.createTreeWalker(B, 129);
function dt(r, e) {
  if (!Me(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let E, w, g = -1, M = 0;
    for (; M < p.length && (u.lastIndex = M, w = u.exec(p), w !== null); ) M = u.lastIndex, u === K ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (ct.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = H) : w[3] !== void 0 && (u = H) : u === H ? w[0] === ">" ? (u = s ?? K, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? H : w[3] === '"' ? tt : et) : u === tt || u === et ? u = H : u === Qe || u === Ke ? u = K : (u = H, s = void 0);
    const T = u === H && r[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + tr : g >= 0 ? (n.push(E), p.slice(0, g) + lt + p.slice(g) + I + T) : p + I + (g === -2 ? m : T);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [E, w] = sr(e, t);
    if (this.el = se.createElement(E, n), L.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = L.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(lt)) {
          const M = w[u++], T = s.getAttribute(g).split(I), k = /([.?@])?(.*)/.exec(M);
          p.push({ type: 1, index: l, name: k[2], strings: T, ctor: k[1] === "." ? ar : k[1] === "?" ? lr : k[1] === "@" ? ur : he }), s.removeAttribute(g);
        } else g.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute(g));
        if (ct.test(s.tagName)) {
          const g = s.textContent.split(I), M = g.length - 1;
          if (M > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let T = 0; T < M; T++) s.append(g[T], ne()), L.nextNode(), p.push({ type: 2, index: ++l });
            s.append(g[M], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(I, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += I.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = B.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Y(r, e, t = r, n) {
  var u, m;
  if (e === Z) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = Y(r, s._$AS(r, e.values), s, n)), e;
}
class or {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? B).importNode(t, !0);
    L.currentNode = s;
    let l = L.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new ae(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = L.nextNode(), u++);
    }
    return L.currentNode = B, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ae {
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
    e = Y(this, e, t), ie(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(B.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ae(this.O(ne()), this.O(ne()), this, this.options)) : n = t[s], n._$AI(l), s++;
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
class he {
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
    if (l === void 0) e = Y(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const m = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = Y(this, m[n + p], t, p), E === Z && (E = this._$AH[p]), u || (u = !ie(E) || E !== this._$AH[p]), E === C ? e = C : e !== C && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class lr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ur extends he {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? C) === Z) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Y(this, e);
  }
}
const $e = te.litHtmlPolyfillSupport;
$e == null || $e(se, ae), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ae(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis;
class re extends F {
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
    return Z;
  }
}
var ot;
re._$litElement$ = !0, re.finalized = !0, (ot = z.litElementHydrateSupport) == null || ot.call(z, { LitElement: re });
const we = z.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
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
function fe(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, X = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;background:#111;border:1px solid #333;box-shadow:2px 2px 0 #f0f,-2px -2px 0 #0ff;'>",
    "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:700;color:#00ffff;font-family:monospace;letter-spacing:1px;'>",
    "<span>{{display:label}}</span>",
    "<span style='color:#0f0;'>{{display:value}}</span>",
    "</div>",
    "<div style='height:6px;background:#333;position:relative;margin:8px 0;'>",
    "<div style='position:absolute;left:0;width:50%;height:100%;background:#00ffff;'></div>",
    "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;background:#f0f;border:2px solid #111;'></div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glitch", "Cyberpunk"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let D = class extends re {
  constructor() {
    super(...arguments), this.value = 50, this.min = 0, this.max = 100, this.disabled = !1, this.onInputEvent = "input";
  }
  static getStudioTemplate(r) {
    var m, p, E, w, g, M, T, k, U;
    if (!r) return it;
    const e = st(r.studio.display.label || "Glitch Slider"), t = st(r.studio.display.value || ((E = ((m = r.props) == null ? void 0 : m.value) ?? ((p = r.studio.props) == null ? void 0 : p.value)) == null ? void 0 : E.toString()) || "50"), n = "var(--uiv-primary-color, #ff003c)", s = "var(--uiv-secondary-color, #00e6f6)", l = "var(--uiv-bg-color, #1a1a1a)";
    let u = 50;
    if (r.studio.props) {
      const V = Number(((w = r.props) == null ? void 0 : w.value) ?? ((g = r.studio.props) == null ? void 0 : g.value)) || 50, J = Number(((M = r.props) == null ? void 0 : M.min) ?? ((T = r.studio.props) == null ? void 0 : T.min)) || 0, pe = Number(((k = r.props) == null ? void 0 : k.max) ?? ((U = r.studio.props) == null ? void 0 : U.max)) || 100;
      u = Math.max(0, Math.min(100, (V - J) / (pe - J) * 100));
    }
    return {
      ...it,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;background:" + l + ";border:2px solid " + n + ";clip-path:polygon(0 0, 100% 0, 100% 70%, 98% 100%, 0 100%);'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:700;color:var(--uiv-text-color,#fff);font-family:monospace;letter-spacing:1px;text-transform:uppercase;'>",
        `<span>${e}</span>`,
        `<span style='color:${s};'>${t}</span>`,
        "</div>",
        "<div style='height:10px;background:rgba(0,0,0,0.3);position:relative;margin:8px 0;border:1px solid rgba(255,255,255,0.1);'>",
        `<div style='position:absolute;left:0;width:${u}%;height:100%;background:${s};box-shadow:-2px 0 0 ${n};'></div>`,
        `<div style='position:absolute;left:${u}%;top:50%;transform:translate(-50%,-50%);width:20px;height:25px;background:${s};clip-path:polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);box-shadow:-2px 0 0 ${n};'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  handleInput(r) {
    if (this.disabled) return;
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
    var e;
    const r = (e = nt()) == null ? void 0 : e.getActiveTheme();
    return ir`
            <style>
                ${r ? r.getGlobalStyles() : ""}
            </style>
            <div class="slider-wrapper">
                <div class="label">
                    <span>Range Selector</span>
                    <span>${this.value}</span>
                </div>
                <input 
                    type="range" 
                    .value="${this.value}" 
                    min="${this.min}" 
                    max="${this.max}"
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
            </div>
        `;
  }
};
D.styles = Ft`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            --sld-p: var(--uiv-primary-color, #ff003c);
            --sld-s: var(--uiv-secondary-color, #00e6f6);
            --sld-bg: var(--uiv-bg-color, #1a1a1a);
        }

        .slider-wrapper {
            position: relative;
            padding: 10px 0;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            background: var(--sld-bg);
            border: 2px solid var(--sld-p);
            outline: none;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 98% 100%, 0 100%);
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 25px;
            background: var(--sld-s);
            cursor: pointer;
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
            box-shadow: -2px 0 0 var(--sld-p);
        }

        input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 25px;
            background: var(--sld-s);
            cursor: pointer;
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
            border: none;
        }

        .label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 0.8rem;
            color: var(--uiv-text-color, #fff);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    `;
X([
  fe({ type: Number }),
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: q.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], D.prototype, "value", 2);
X([
  fe({ type: Number }),
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: q.NUMBER_INPUT,
    displayLabel: "Min",
    fieldMappings: "min"
  })
], D.prototype, "min", 2);
X([
  fe({ type: Number }),
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: q.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
], D.prototype, "max", 2);
X([
  fe({ type: Boolean }),
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: q.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], D.prototype, "disabled", 2);
X([
  oe({
    attributeType: G.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], D.prototype, "onInputEvent", 2);
D = X([
  zt({
    name: "zero-uiv-slider-glitch",
    version: "1.0.0",
    title: "Glitch Style Slider",
    elementSelector: "zero-uiv-slider-glitch",
    group: "Uiverse Sliders",
    iconName: "slider-icon.png"
  }),
  Gt()
], D);
export {
  D as ZeroUivSliderGlitch,
  it as glitchTemplate
};
