var Nt = Object.defineProperty;
var kt = (r, e, t) => e in r ? Nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Qe = (r, e, t) => kt(r, typeof e != "symbol" ? e + "" : e, t);
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var et;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ke == "object" ? Ke : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = a(r);
    typeof t.Reflect < "u" && (n = a(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(p, A) {
      return function(E, w) {
        Object.defineProperty(p, E, { configurable: !0, writable: !0, value: w }), A && A(E, w);
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
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Re(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Re({ __proto__: null });
      } : function() {
        return Re({});
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
    }, w = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), U = typeof WeakMap == "function" ? WeakMap : Tt(), H = a ? Symbol.for("@reflect-metadata:registry") : void 0, K = St(), ce = Ct(K);
    function $e(i, s, o, d) {
      if (_(o)) {
        if (!Ge(i))
          throw new TypeError();
        if (!Be(s))
          throw new TypeError();
        return te(i, s);
      } else {
        if (!Ge(i))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(d) && !_(d) && !oe(d))
          throw new TypeError();
        return oe(d) && (d = void 0), o = j(o), J(i, s, o, d);
      }
    }
    e("decorate", $e);
    function W(i, s) {
      function o(d, y) {
        if (!M(d))
          throw new TypeError();
        if (!_(y) && !Et(y))
          throw new TypeError();
        T(i, s, d, y);
      }
      return o;
    }
    e("metadata", W);
    function z(i, s, o, d) {
      if (!M(o))
        throw new TypeError();
      return _(d) || (d = j(d)), T(i, s, o, d);
    }
    e("defineMetadata", z);
    function F(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), V(i, s, o);
    }
    e("hasMetadata", F);
    function q(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), G(i, s, o);
    }
    e("hasOwnMetadata", q);
    function Ee(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), B(i, s, o);
    }
    e("getMetadata", Ee);
    function ee(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), g(i, s, o);
    }
    e("getOwnMetadata", ee);
    function Z(i, s) {
      if (!M(i))
        throw new TypeError();
      return _(s) || (s = j(s)), I(i, s);
    }
    e("getMetadataKeys", Z);
    function L(i, s) {
      if (!M(i))
        throw new TypeError();
      return _(s) || (s = j(s)), re(i, s);
    }
    e("getOwnMetadataKeys", L);
    function X(i, s, o) {
      if (!M(s))
        throw new TypeError();
      if (_(o) || (o = j(o)), !M(s))
        throw new TypeError();
      _(o) || (o = j(o));
      var d = fe(
        s,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, o);
    }
    e("deleteMetadata", X);
    function te(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], y = d(s);
        if (!_(y) && !oe(y)) {
          if (!Be(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function J(i, s, o, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var x = i[y], P = x(s, o, d);
        if (!_(P) && !oe(P)) {
          if (!M(P))
            throw new TypeError();
          d = P;
        }
      }
      return d;
    }
    function V(i, s, o) {
      var d = G(i, s, o);
      if (d)
        return !0;
      var y = xe(s);
      return oe(y) ? !1 : V(i, y, o);
    }
    function G(i, s, o) {
      var d = fe(
        s,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Ve(d.OrdinaryHasOwnMetadata(i, s, o));
    }
    function B(i, s, o) {
      var d = G(i, s, o);
      if (d)
        return g(i, s, o);
      var y = xe(s);
      if (!oe(y))
        return B(i, y, o);
    }
    function g(i, s, o) {
      var d = fe(
        s,
        o,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, s, o);
    }
    function T(i, s, o, d) {
      var y = fe(
        o,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, o, d);
    }
    function I(i, s) {
      var o = re(i, s), d = xe(i);
      if (d === null)
        return o;
      var y = I(d, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var x = new k(), P = [], b = 0, c = o; b < c.length; b++) {
        var h = c[b], f = x.has(h);
        f || (x.add(h), P.push(h));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var h = $[v], f = x.has(h);
        f || (x.add(h), P.push(h));
      }
      return P;
    }
    function re(i, s) {
      var o = fe(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function he(i) {
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
    function oe(i) {
      return i === null;
    }
    function gt(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function wt(i, s) {
      switch (he(i)) {
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
      var o = "string", d = Fe(i, l);
      if (d !== void 0) {
        var y = d.call(i, o);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return bt(i);
    }
    function bt(i, s) {
      var o, d;
      {
        var y = i.toString;
        if (Ae(y)) {
          var d = y.call(i);
          if (!M(d))
            return d;
        }
        var o = i.valueOf;
        if (Ae(o)) {
          var d = o.call(i);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ve(i) {
      return !!i;
    }
    function $t(i) {
      return "" + i;
    }
    function j(i) {
      var s = wt(i);
      return gt(s) ? s : $t(s);
    }
    function Ge(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Ae(i) {
      return typeof i == "function";
    }
    function Be(i) {
      return typeof i == "function";
    }
    function Et(i) {
      switch (he(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Te(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Fe(i, s) {
      var o = i[s];
      if (o != null) {
        if (!Ae(o))
          throw new TypeError();
        return o;
      }
    }
    function qe(i) {
      var s = Fe(i, u);
      if (!Ae(s))
        throw new TypeError();
      var o = s.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function Ze(i) {
      return i.value;
    }
    function Xe(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Je(i) {
      var s = i.return;
      s && s.call(i);
    }
    function xe(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function At() {
      var i;
      !_(H) && typeof t.Reflect < "u" && !(H in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ot(t.Reflect));
      var s, o, d, y = new U(), x = {
        registerProvider: P,
        getProvider: c,
        setProvider: f
      };
      return x;
      function P(v) {
        if (!Object.isExtensible(x))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case _(s):
            s = v;
            break;
          case s === v:
            break;
          case _(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            d === void 0 && (d = new k()), d.add(v);
            break;
        }
      }
      function b(v, $) {
        if (!_(s)) {
          if (s.isProviderFor(v, $))
            return s;
          if (!_(o)) {
            if (o.isProviderFor(v, $))
              return s;
            if (!_(d))
              for (var S = qe(d); ; ) {
                var C = Xe(S);
                if (!C)
                  return;
                var D = Ze(C);
                if (D.isProviderFor(v, $))
                  return Je(S), D;
              }
          }
        }
        if (!_(i) && i.isProviderFor(v, $))
          return i;
      }
      function c(v, $) {
        var S = y.get(v), C;
        return _(S) || (C = S.get($)), _(C) && (C = b(v, $), _(C) || (_(S) && (S = new O(), y.set(v, S)), S.set($, C))), C;
      }
      function h(v) {
        if (_(v))
          throw new TypeError();
        return s === v || o === v || !_(d) && d.has(v);
      }
      function f(v, $, S) {
        if (!h(S))
          throw new Error("Metadata provider not registered.");
        var C = c(v, $);
        if (C !== S) {
          if (!_(C))
            return !1;
          var D = y.get(v);
          _(D) && (D = new O(), y.set(v, D)), D.set($, S);
        }
        return !0;
      }
    }
    function St() {
      var i;
      return !_(H) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[H]), _(i) && (i = At()), !_(H) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var s = new U(), o = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return _(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: x,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return K.registerProvider(o), o;
      function d(h, f, v) {
        var $ = s.get(h), S = !1;
        if (_($)) {
          if (!v)
            return;
          $ = new O(), s.set(h, $), S = !0;
        }
        var C = $.get(f);
        if (_(C)) {
          if (!v)
            return;
          if (C = new O(), $.set(f, C), !i.setProvider(h, f, o))
            throw $.delete(f), S && s.delete(h), new Error("Wrong provider for target.");
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
        return _($) ? !1 : Ve($.has(h));
      }
      function x(h, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(h);
      }
      function P(h, f, v, $) {
        var S = d(
          v,
          $,
          /*Create*/
          !0
        );
        S.set(h, f);
      }
      function b(h, f) {
        var v = [], $ = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (_($))
          return v;
        for (var S = $.keys(), C = qe(S), D = 0; ; ) {
          var Ye = Xe(C);
          if (!Ye)
            return v.length = D, v;
          var xt = Ze(Ye);
          try {
            v[D] = xt;
          } catch (Rt) {
            try {
              Je(C);
            } finally {
              throw Rt;
            }
          }
          D++;
        }
      }
      function c(h, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var S = s.get(f);
          _(S) || (S.delete(v), S.size === 0 && s.delete(S));
        }
        return !0;
      }
    }
    function Ot(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, x = i.deleteMetadata, P = new U(), b = {
        isProviderFor: function(c, h) {
          var f = P.get(c);
          return !_(f) && f.has(h) ? !0 : y(c, h).length ? (_(f) && (f = new k(), P.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: x
      };
      return b;
    }
    function fe(i, s, o) {
      var d = K.getProvider(i, s);
      if (!_(d))
        return d;
      if (o) {
        if (K.setProvider(i, s, ce))
          return ce;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function b(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, b.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, b;
        }()
      ), d = (
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
          }), b.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, b.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Te(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, x);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, P);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(c, h) {
            if (!Te(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Te(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return d;
      function y(b, c) {
        return b;
      }
      function x(b, c) {
        return c;
      }
      function P(b, c) {
        return [b, c];
      }
    }
    function Pt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new O();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
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
    function Tt() {
      var i = 16, s = E.create(), o = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = y(
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
          c = "@@WeakMap@@" + b();
        while (E.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: E.create() });
        }
        return c[o];
      }
      function x(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function P(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : x(h, c), h;
        }
        return x(new Array(c), c);
      }
      function b() {
        var c = P(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Re(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(et || (et = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ut(r) {
  return function(e) {
    if (It(r)) {
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
function Dt(r) {
  return Ut(r);
}
function Lt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Qe(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const E = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((O) => E.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, E]);
        } else if (l) {
          const E = l.cloneNode(!0);
          p.appendChild(E);
        }
        u.forEach((E) => {
          const w = E.cloneNode(!0);
          p.appendChild(w);
        });
      }
    }
    return t;
  };
}
function jt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ht(r) {
  return function(e, t) {
    try {
      jt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let a = !0;
      if (typeof t == "string") {
        try {
          a = typeof e[t] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function Wt(r) {
  return Ht(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(N || (N = {}));
var Le;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(Le || (Le = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Se = globalThis, je = Se.ShadowRoot && (Se.ShadyCSS === void 0 || Se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, He = Symbol(), tt = /* @__PURE__ */ new WeakMap();
let ft = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== He) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (je && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = tt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && tt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new ft(typeof r == "string" ? r : r + "", void 0, He), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new ft(t, r, He);
}, Gt = (r, e) => {
  if (je) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), a = Se.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = t.cssText, r.appendChild(n);
  }
}, rt = je ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Bt, defineProperty: Ft, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Xt, getPrototypeOf: Jt } = Object, Q = globalThis, nt = Q.trustedTypes, Yt = nt ? nt.emptyScript : "", Ne = Q.reactiveElementPolyfillSupport, ve = (r, e) => r, Ce = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Yt : null;
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
} }, We = (r, e) => !Bt(r, e), it = { attribute: !0, type: String, converter: Ce, reflect: !1, useDefault: !1, hasChanged: We };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Q.litPropertyMetadata ?? (Q.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let le = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = it) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, t);
      a !== void 0 && Ft(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: a, set: l } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: a, set(u) {
      const m = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? it;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ve("elementProperties"))) return;
    const e = Jt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ve("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ve("properties"))) {
      const t = this.properties, n = [...Zt(t), ...Xt(t)];
      for (const a of n) this.createProperty(a, t[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, a] of t) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const a = this._$Eu(t, n);
      a !== void 0 && this._$Eh.set(a, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const a of n) t.unshift(rt(a));
    } else e !== void 0 && t.push(rt(e));
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
    return Gt(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, n);
    if (a !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Ce).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const m = n.getPropertyOptions(a), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : Ce;
      this._$Em = a;
      const A = p.fromAttribute(t, m.type);
      this[a] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, a = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (a === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? We)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: a, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), a === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, u] of a) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(t)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
le.elementStyles = [], le.shadowRootOptions = { mode: "open" }, le[ve("elementProperties")] = /* @__PURE__ */ new Map(), le[ve("finalized")] = /* @__PURE__ */ new Map(), Ne == null || Ne({ ReactiveElement: le }), (Q.reactiveElementVersions ?? (Q.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = globalThis, at = (r) => r, Oe = ye.trustedTypes, st = Oe ? Oe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, pt = "$lit$", Y = `lit$${Math.random().toFixed(9).slice(2)}$`, vt = "?" + Y, Qt = `<${vt}>`, se = document, _e = () => se.createComment(""), ge = (r) => r === null || typeof r != "object" && typeof r != "function", ze = Array.isArray, Kt = (r) => ze(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ke = `[ 	
\f\r]`, pe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ot = /-->/g, lt = />/g, ne = RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ut = /'/g, dt = /"/g, yt = /^(?:script|style|textarea|title)$/i, er = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tr = er(1), ue = Symbol.for("lit-noChange"), R = Symbol.for("lit-nothing"), ct = /* @__PURE__ */ new WeakMap(), ie = se.createTreeWalker(se, 129);
function mt(r, e) {
  if (!ze(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return st !== void 0 ? st.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let a, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = pe;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let A, E, w = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, E = u.exec(p), E !== null); ) O = u.lastIndex, u === pe ? E[1] === "!--" ? u = ot : E[1] !== void 0 ? u = lt : E[2] !== void 0 ? (yt.test(E[2]) && (a = RegExp("</" + E[2], "g")), u = ne) : E[3] !== void 0 && (u = ne) : u === ne ? E[0] === ">" ? (u = a ?? pe, w = -1) : E[1] === void 0 ? w = -2 : (w = u.lastIndex - E[2].length, A = E[1], u = E[3] === void 0 ? ne : E[3] === '"' ? dt : ut) : u === dt || u === ut ? u = ne : u === ot || u === lt ? u = pe : (u = ne, a = void 0);
    const k = u === ne && r[m + 1].startsWith("/>") ? " " : "";
    l += u === pe ? p + Qt : w >= 0 ? (n.push(A), p.slice(0, w) + pt + p.slice(w) + Y + k) : p + Y + (w === -2 ? m : k);
  }
  return [mt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class we {
  constructor({ strings: e, _$litType$: t }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [A, E] = rr(e, t);
    if (this.el = we.createElement(A, n), ie.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (a = ie.nextNode()) !== null && p.length < m; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const w of a.getAttributeNames()) if (w.endsWith(pt)) {
          const O = E[u++], k = a.getAttribute(w).split(Y), U = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: U[2], strings: k, ctor: U[1] === "." ? ir : U[1] === "?" ? ar : U[1] === "@" ? sr : Pe }), a.removeAttribute(w);
        } else w.startsWith(Y) && (p.push({ type: 6, index: l }), a.removeAttribute(w));
        if (yt.test(a.tagName)) {
          const w = a.textContent.split(Y), O = w.length - 1;
          if (O > 0) {
            a.textContent = Oe ? Oe.emptyScript : "";
            for (let k = 0; k < O; k++) a.append(w[k], _e()), ie.nextNode(), p.push({ type: 2, index: ++l });
            a.append(w[O], _e());
          }
        }
      } else if (a.nodeType === 8) if (a.data === vt) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = a.data.indexOf(Y, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += Y.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = se.createElement("template");
    return n.innerHTML = e, n;
  }
}
function de(r, e, t = r, n) {
  var u, m;
  if (e === ue) return e;
  let a = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ge(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((m = a == null ? void 0 : a._$AO) == null || m.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = a : t._$Cl = a), a !== void 0 && (e = de(r, a._$AS(r, e.values), a, n)), e;
}
class nr {
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
    const { el: { content: t }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? se).importNode(t, !0);
    ie.currentNode = a;
    let l = ie.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new be(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new or(l, this, e)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = ie.nextNode(), u++);
    }
    return ie.currentNode = se, a;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class be {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, a) {
    this.type = 2, this._$AH = R, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = de(this, e, t), ge(e) ? e === R || e == null || e === "" ? (this._$AH !== R && this._$AR(), this._$AH = R) : e !== this._$AH && e !== ue && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Kt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== R && ge(this._$AH) ? this._$AA.nextSibling.data = e : this.T(se.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = we.createElement(mt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(t);
    else {
      const u = new nr(a, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = ct.get(e.strings);
    return t === void 0 && ct.set(e.strings, t = new we(e)), t;
  }
  k(e) {
    ze(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, a = 0;
    for (const l of e) a === t.length ? t.push(n = new be(this.O(_e()), this.O(_e()), this, this.options)) : n = t[a], n._$AI(l), a++;
    a < t.length && (this._$AR(n && n._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const a = at(e).nextSibling;
      at(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, a, l) {
    this.type = 1, this._$AH = R, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = R;
  }
  _$AI(e, t = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = de(this, e, t, 0), u = !ge(e) || e !== this._$AH && e !== ue, u && (this._$AH = e);
    else {
      const m = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = de(this, m[n + p], t, p), A === ue && (A = this._$AH[p]), u || (u = !ge(A) || A !== this._$AH[p]), A === R ? e = R : e !== R && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !a && this.j(e);
  }
  j(e) {
    e === R ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends Pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === R ? void 0 : e;
  }
}
class ar extends Pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== R);
  }
}
class sr extends Pe {
  constructor(e, t, n, a, l) {
    super(e, t, n, a, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = de(this, e, t, 0) ?? R) === ue) return;
    const n = this._$AH, a = e === R && n !== R || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== R && (n === R || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    de(this, e);
  }
}
const Ie = ye.litHtmlPolyfillSupport;
Ie == null || Ie(we, be), (ye.litHtmlVersions ?? (ye.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = a = new be(e.insertBefore(_e(), l), l, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis;
class me extends le {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = lr(t, this.renderRoot, this.renderOptions);
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
    return ue;
  }
}
var ht;
me._$litElement$ = !0, me.finalized = !0, (ht = ae.litElementHydrateSupport) == null || ht.call(ae, { LitElement: me });
const Ue = ae.litElementPolyfillSupport;
Ue == null || Ue({ LitElement: me });
(ae.litElementVersions ?? (ae.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: Ce, reflect: !1, hasChanged: We }, dr = (r = ur, e, t) => {
  const { kind: n, metadata: a } = t;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
function cr(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, e, t);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, _t = (r, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(e, t, a) : u(a)) || a);
  return n && a && hr(e, t, a), a;
};
const De = () => window.zeroThemeManager;
let Me = class extends me {
  constructor() {
    super(...arguments), this.attr = [];
  }
  set AttributeWindowAttributes(r) {
    const e = typeof r == "string" ? JSON.parse(r) : r;
    this.attr = Array.isArray(e) ? e : [], this.firstUpdated();
  }
  get AttributeWindowAttributes() {
    return this.attr;
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = De()) == null || r.addEventListener("theme-changed", () => {
      this.requestUpdate(), this.prepareAttributeWindow("attribute-window");
    });
  }
  render() {
    var e;
    const r = (e = De()) == null ? void 0 : e.getActiveTheme();
    return tr`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getCoreComponentStyles() : ""}
                ${r ? r.getComponentStyles("input") : ""}
            </style>
            <div class="attribute-window-container">
                <div id="attributewindow-list">
                    <!-- Dynamic attribute window elements will be injected here -->
                </div>
            </div>
        `;
  }
  firstUpdated() {
    const r = "zero-attribute-window";
    globalThis.zeroComponents = globalThis.zeroComponents || {}, globalThis.zeroComponents[r] ? globalThis.zeroComponents[r].includes(this) || globalThis.zeroComponents[r].push(this) : globalThis.zeroComponents[r] = [this], this.prepareAttributeWindow(r);
  }
  prepareAttributeWindow(r) {
    var n;
    const e = (n = this.shadowRoot) == null ? void 0 : n.getElementById("attributewindow-list"), t = {
      inputs: this.AttributeWindowAttributes.reduce((a, { fieldMappings: l, ...u }) => (a[l] = { ...u }, a), {}),
      outputs: {
        events: this.AttributeWindowAttributes.filter((a) => a.eventTrigger).map((a) => a.eventTrigger)
      }
    };
    e && t ? (e.innerHTML = "", Object.entries(t.inputs).forEach(([a, l]) => {
      const u = this.createInputElement(a, l, globalThis.zeroComponents[r][0]);
      e.appendChild(u);
    })) : console.error("attributewindow-list element not found or componentConfig not found");
  }
  createInputElement(r, e, t) {
    var l, u, m, p, A, E, w, O, k, U, H, K, ce, $e;
    (l = De()) == null || l.getActiveTheme();
    const n = document.createElement("div");
    n.className = "dynamic-input-container";
    const a = document.createElement("label");
    switch (a.className = "uiv-label", a.textContent = e.displayLabel || r, a.htmlFor = r, n.appendChild(a), e.uiComponentType) {
      case N.TEXT_INPUT:
        const W = document.createElement("input");
        W.className = "uiv-input", W.type = ((u = e == null ? void 0 : e.optionItems) == null ? void 0 : u.type) || "text", W.id = r, W.value = ((m = e.initialValue) == null ? void 0 : m.toString()) || "", W.placeholder = e.placeholderText || "", W.addEventListener("input", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(W);
        break;
      case N.PASSWORD_INPUT:
        const z = document.createElement("input");
        z.className = "uiv-input", z.type = "password", z.id = r, z.value = ((p = e.initialValue) == null ? void 0 : p.toString()) || "", z.placeholder = e.placeholderText || "", z.addEventListener("input", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(z);
        break;
      case N.TEXTAREA:
        const F = document.createElement("textarea");
        F.className = "uiv-textarea", F.id = r, F.value = ((A = e.initialValue) == null ? void 0 : A.toString()) || "", F.placeholder = e.placeholderText || "", F.addEventListener("change", (g) => {
          var I;
          let T = ((I = e == null ? void 0 : e.optionItems) == null ? void 0 : I.type) == "Object" ? JSON.parse(g.target.value) : g.target.value;
          t[r] = T;
        }), n.appendChild(F);
        break;
      case N.CHECKBOX:
        const q = document.createElement("input");
        q.className = "uiv-input", q.type = "checkbox", q.id = r, q.checked = !!e.initialValue, q.addEventListener("change", (g) => {
          t[r] = g.target.checked;
        }), n.appendChild(q);
        break;
      case N.RADIO_BUTTON:
        const Ee = document.createElement("div");
        e.optionItems.forEach((g) => {
          var he;
          const T = document.createElement("div"), I = document.createElement("input");
          I.className = "uiv-input", I.type = "radio", I.name = r, I.id = `${r}_${g.value}`, I.value = g.value.toString(), I.checked = g.value.toString() === ((he = e.initialValue) == null ? void 0 : he.toString()), I.addEventListener("change", (_) => {
            t[r] = _.target.value;
          });
          const re = document.createElement("label");
          re.className = "uiv-label", re.htmlFor = I.id, re.textContent = g.label.toString(), T.appendChild(I), T.appendChild(re), Ee.appendChild(T);
        }), n.appendChild(Ee);
        break;
      case N.DROPDOWN:
        const ee = document.createElement("select");
        ee.className = "uiv-select", ee.id = r, (E = e.optionItems) == null || E.forEach((g) => {
          const T = document.createElement("option");
          T.value = g.value.toString(), T.textContent = g.label.toString(), ee.appendChild(T);
        }), ee.addEventListener("change", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(ee);
        break;
      case N.MULTI_SELECT:
        const Z = document.createElement("select");
        Z.className = "uiv-select", Z.id = r, Z.multiple = !0, (w = e.optionItems) == null || w.forEach((g) => {
          const T = document.createElement("option");
          T.value = g.value.toString(), T.textContent = g.label.toString(), Z.appendChild(T);
        }), Z.addEventListener("change", (g) => {
          t[r] = Array.from(g.target.selectedOptions).map((T) => T.value);
        }), n.appendChild(Z);
        break;
      case N.RANGE_SLIDER:
        const L = document.createElement("input");
        L.className = "uiv-input", L.type = "range", L.id = r, L.min = ((O = e.optionItems.min) == null ? void 0 : O.toString()) || "0", L.max = ((k = e.optionItems.max) == null ? void 0 : k.toString()) || "100", L.value = ((U = e.initialValue) == null ? void 0 : U.toString()) || "0", L.addEventListener("input", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(L);
        break;
      case N.COLOR_PICKER:
        const X = document.createElement("input");
        X.className = "uiv-input", X.type = "color", X.id = r, X.value = ((H = e.initialValue) == null ? void 0 : H.toString()) || "#ffffff", X.addEventListener("input", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(X);
        break;
      case N.FILE_INPUT:
        const te = document.createElement("input");
        te.className = "uiv-input", te.type = "file", te.id = r, te.addEventListener("change", (g) => {
          t[r] = g.target.files;
        }), n.appendChild(te);
        break;
      case N.DATE_PICKER:
        const J = document.createElement("input");
        J.className = "uiv-input", J.type = "date", J.id = r, J.value = ((K = e.initialValue) == null ? void 0 : K.toString()) || "", J.addEventListener("change", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(J);
        break;
      case N.NUMBER_INPUT:
        const V = document.createElement("input");
        V.className = "uiv-input", V.type = "number", V.id = r, V.value = ((ce = e.initialValue) == null ? void 0 : ce.toString()) || "0", V.addEventListener("input", (g) => {
          t[r] = Number(g.target.value);
        }), n.appendChild(V);
        break;
      case N.POPUP_DROPDOWN:
        const G = document.createElement("zero-popup-dropdown-1.0.0");
        G.id = r, G.selectedOption = e.initialValue, G.OptionConfig = e.optionItems, G.addEventListener("change", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(G);
        break;
      default:
        const B = document.createElement("input");
        B.type = "text", B.id = r, B.value = (($e = e.initialValue) == null ? void 0 : $e.toString()) || "", B.placeholder = e.placeholderText || "", B.addEventListener("input", (g) => {
          t[r] = g.target.value;
        }), n.appendChild(B);
        break;
    }
    return n;
  }
};
Me.styles = Vt`
        :host {
            display: block;
            width: 100%;
            font-family: var(--uiv-font-family, 'Roboto', sans-serif);
        }

        .attribute-window-container {
            padding: var(--spacing-lg, 20px);
            background-color: var(--uiv-bg-surface, #121212);
            color: var(--uiv-text-color, #E0E0E0);
            min-height: 100%;
        }

        .header {
            background-color: var(--uiv-bg-overlay, #333);
            color: var(--uiv-text-color);
            text-align: center;
            padding: var(--spacing-sm, 10px);
            height: 50px;
            line-height: 50px;
            position: relative;
            box-shadow: var(--uiv-shadow-depth);
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text-color);
            font-weight: 500;
        }

        .dynamic-input-container {
            margin: 10px 0;
            padding: 12px;
            border-radius: var(--uiv-border-radius, 8px);
            background-color: var(--uiv-bg-surface);
            border: 1px solid var(--uiv-border-color);
            transition: all 0.3s ease;
        }

        .dynamic-input-container:hover {
            border-color: var(--uiv-primary-color);
            box-shadow: var(--uiv-shadow-depth);
        }
    `;
_t([
  cr({ type: Array }),
  Wt({
    attributeType: Le.PROPERTY,
    uiComponentType: N.TEXTAREA,
    displayLabel: "",
    placeholderText: "",
    fieldMappings: "AttributeWindowAttributes"
  })
], Me.prototype, "AttributeWindowAttributes", 1);
Me = _t([
  Dt({
    name: "attribute-window",
    version: "1.0.0",
    title: "Attribute window",
    elementSelector: "zero-attribute-window",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Lt()
], Me);
export {
  Me as AttributeWindow
};
