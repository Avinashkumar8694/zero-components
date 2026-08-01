var Ut = Object.defineProperty;
var jt = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var et = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var rt;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof tt == "object" ? tt : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, w) {
      return function(E, _) {
        Object.defineProperty(p, E, { configurable: !0, writable: !0, value: _ }), w && w(E, _);
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
    function g() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, w = !g && !p, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return xe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return xe({ __proto__: null });
      } : function() {
        return xe({});
      },
      has: w ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: w ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, _ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), N = typeof WeakMap == "function" ? WeakMap : Dt(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, L = xt(), K = Tt(L);
    function ce(i, a, o, d) {
      if (b(o)) {
        if (!Fe(i))
          throw new TypeError();
        if (!qe(a))
          throw new TypeError();
        return $e(i, a);
      } else {
        if (!Fe(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(d) && !b(d) && !Y(d))
          throw new TypeError();
        return Y(d) && (d = void 0), o = I(o), we(i, a, o, d);
      }
    }
    e("decorate", ce);
    function he(i, a) {
      function o(d, v) {
        if (!M(d))
          throw new TypeError();
        if (!b(v) && !Ct(v))
          throw new TypeError();
        Le(i, a, d, v);
      }
      return o;
    }
    e("metadata", he);
    function fe(i, a, o, d) {
      if (!M(o))
        throw new TypeError();
      return b(d) || (d = I(d)), Le(i, a, o, d);
    }
    e("defineMetadata", fe);
    function pe(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = I(o)), ee(i, a, o);
    }
    e("hasMetadata", pe);
    function ye(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = I(o)), q(i, a, o);
    }
    e("hasOwnMetadata", ye);
    function ve(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = I(o)), je(i, a, o);
    }
    e("getMetadata", ve);
    function ge(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = I(o)), ze(i, a, o);
    }
    e("getOwnMetadata", ge);
    function be(i, a) {
      if (!M(i))
        throw new TypeError();
      return b(a) || (a = I(a)), Be(i, a);
    }
    e("getMetadataKeys", be);
    function _e(i, a) {
      if (!M(i))
        throw new TypeError();
      return b(a) || (a = I(a)), We(i, a);
    }
    e("getOwnMetadataKeys", _e);
    function me(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (b(o) || (o = I(o)), !M(a))
        throw new TypeError();
      b(o) || (o = I(o));
      var d = te(
        a,
        o,
        /*Create*/
        !1
      );
      return b(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", me);
    function $e(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], v = d(a);
        if (!b(v) && !Y(v)) {
          if (!qe(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function we(i, a, o, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], C = P(a, o, d);
        if (!b(C) && !Y(C)) {
          if (!M(C))
            throw new TypeError();
          d = C;
        }
      }
      return d;
    }
    function ee(i, a, o) {
      var d = q(i, a, o);
      if (d)
        return !0;
      var v = Pe(a);
      return Y(v) ? !1 : ee(i, v, o);
    }
    function q(i, a, o) {
      var d = te(
        a,
        o,
        /*Create*/
        !1
      );
      return b(d) ? !1 : Ve(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function je(i, a, o) {
      var d = q(i, a, o);
      if (d)
        return ze(i, a, o);
      var v = Pe(a);
      if (!Y(v))
        return je(i, v, o);
    }
    function ze(i, a, o) {
      var d = te(
        a,
        o,
        /*Create*/
        !1
      );
      if (!b(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Le(i, a, o, d) {
      var v = te(
        o,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function Be(i, a) {
      var o = We(i, a), d = Pe(i);
      if (d === null)
        return o;
      var v = Be(d, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var P = new T(), C = [], m = 0, c = o; m < c.length; m++) {
        var h = c[m], f = P.has(h);
        f || (P.add(h), C.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], f = P.has(h);
        f || (P.add(h), C.push(h));
      }
      return C;
    }
    function We(i, a) {
      var o = te(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Ge(i) {
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
    function Y(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, a) {
      switch (Ge(i)) {
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
      var o = "string", d = Ye(i, u);
      if (d !== void 0) {
        var v = d.call(i, o);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Ot(i);
    }
    function Ot(i, a) {
      var o, d;
      {
        var v = i.toString;
        if (Ee(v)) {
          var d = v.call(i);
          if (!M(d))
            return d;
        }
        var o = i.valueOf;
        if (Ee(o)) {
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
    function Mt(i) {
      return "" + i;
    }
    function I(i) {
      var a = St(i);
      return At(a) ? a : Mt(a);
    }
    function Fe(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Ee(i) {
      return typeof i == "function";
    }
    function qe(i) {
      return typeof i == "function";
    }
    function Ct(i) {
      switch (Ge(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ce(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ye(i, a) {
      var o = i[a];
      if (o != null) {
        if (!Ee(o))
          throw new TypeError();
        return o;
      }
    }
    function Ze(i) {
      var a = Ye(i, l);
      if (!Ee(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function Xe(i) {
      return i.value;
    }
    function Je(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Qe(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Pe(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var v = d.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Pt() {
      var i;
      !b(H) && typeof t.Reflect < "u" && !(H in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = kt(t.Reflect));
      var a, o, d, v = new N(), P = {
        registerProvider: C,
        getProvider: c,
        setProvider: f
      };
      return P;
      function C(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case b(a):
            a = y;
            break;
          case a === y:
            break;
          case b(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            d === void 0 && (d = new T()), d.add(y);
            break;
        }
      }
      function m(y, $) {
        if (!b(a)) {
          if (a.isProviderFor(y, $))
            return a;
          if (!b(o)) {
            if (o.isProviderFor(y, $))
              return a;
            if (!b(d))
              for (var A = Ze(d); ; ) {
                var O = Je(A);
                if (!O)
                  return;
                var D = Xe(O);
                if (D.isProviderFor(y, $))
                  return Qe(A), D;
              }
          }
        }
        if (!b(i) && i.isProviderFor(y, $))
          return i;
      }
      function c(y, $) {
        var A = v.get(y), O;
        return b(A) || (O = A.get($)), b(O) && (O = m(y, $), b(O) || (b(A) && (A = new S(), v.set(y, A)), A.set($, O))), O;
      }
      function h(y) {
        if (b(y))
          throw new TypeError();
        return a === y || o === y || !b(d) && d.has(y);
      }
      function f(y, $, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var O = c(y, $);
        if (O !== A) {
          if (!b(O))
            return !1;
          var D = v.get(y);
          b(D) && (D = new S(), v.set(y, D)), D.set($, A);
        }
        return !0;
      }
    }
    function xt() {
      var i;
      return !b(H) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[H]), b(i) && (i = Pt()), !b(H) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var a = new N(), o = {
        isProviderFor: function(h, f) {
          var y = a.get(h);
          return b(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return L.registerProvider(o), o;
      function d(h, f, y) {
        var $ = a.get(h), A = !1;
        if (b($)) {
          if (!y)
            return;
          $ = new S(), a.set(h, $), A = !0;
        }
        var O = $.get(f);
        if (b(O)) {
          if (!y)
            return;
          if (O = new S(), $.set(f, O), !i.setProvider(h, f, o))
            throw $.delete(f), A && a.delete(h), new Error("Wrong provider for target.");
        }
        return O;
      }
      function v(h, f, y) {
        var $ = d(
          f,
          y,
          /*Create*/
          !1
        );
        return b($) ? !1 : Ve($.has(h));
      }
      function P(h, f, y) {
        var $ = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (!b($))
          return $.get(h);
      }
      function C(h, f, y, $) {
        var A = d(
          y,
          $,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function m(h, f) {
        var y = [], $ = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (b($))
          return y;
        for (var A = $.keys(), O = Ze(A), D = 0; ; ) {
          var Ke = Je(O);
          if (!Ke)
            return y.length = D, y;
          var It = Xe(Ke);
          try {
            y[D] = It;
          } catch (Ht) {
            try {
              Qe(O);
            } finally {
              throw Ht;
            }
          }
          D++;
        }
      }
      function c(h, f, y) {
        var $ = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (b($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var A = a.get(f);
          b(A) || (A.delete(y), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function kt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new N(), m = {
        isProviderFor: function(c, h) {
          var f = C.get(c);
          return !b(f) && f.has(h) ? !0 : v(c, h).length ? (b(f) && (f = new T(), C.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function te(i, a, o) {
      var d = L.getProvider(i, a);
      if (!b(d))
        return d;
      if (o) {
        if (L.setProvider(i, a, K))
          return K;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function m(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, m;
        }()
      ), d = (
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
          }), m.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, m.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Ce(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new o(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(c, h) {
            if (!Ce(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Ce(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return d;
      function v(m, c) {
        return m;
      }
      function P(m, c) {
        return c;
      }
      function C(m, c) {
        return [m, c];
      }
    }
    function Nt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new S();
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
          }, a.prototype[l] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Dt() {
      var i = 16, a = E.create(), o = d();
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
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
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
          c = "@@WeakMap@@" + m();
        while (E.has(a, c));
        return a[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: E.create() });
        }
        return c[o];
      }
      function P(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, c), h;
        }
        return P(new Array(c), c);
      }
      function m() {
        var c = C(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function xe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(rt || (rt = {}));
function zt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
  return function(e) {
    if (zt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
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
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, u);
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
function Bt(r) {
  return Lt(r);
}
function Wt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        et(this, "_stylesApplied", !1);
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
        var w;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && g) {
          const E = new CSSStyleSheet(), _ = (w = u.sheet) == null ? void 0 : w.cssRules;
          _ && (Array.from(_).forEach((S) => E.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, E]);
        } else if (u) {
          const E = u.cloneNode(!0);
          p.appendChild(E);
        }
        l.forEach((E) => {
          const _ = E.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return t;
  };
}
function Gt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(r) {
  return function(e, t) {
    try {
      Gt(r);
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
function Q(r) {
  return Vt(r);
}
var V;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(V || (V = {}));
var z;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(z || (z = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ae = globalThis, De = Ae.ShadowRoot && (Ae.ShadyCSS === void 0 || Ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ie = Symbol(), nt = /* @__PURE__ */ new WeakMap();
let _t = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (De && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = nt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && nt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new _t(typeof r == "string" ? r : r + "", void 0, Ie), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[u + 1], r[0]);
  return new _t(t, r, Ie);
}, Yt = (r, e) => {
  if (De) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = Ae.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, it = De ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Xt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, j = globalThis, st = j.trustedTypes, tr = st ? st.emptyScript : "", Te = j.reactiveElementPolyfillSupport, ne = (r, e) => r, Se = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? tr : null;
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
} }, He = (r, e) => !Zt(r, e), at = { attribute: !0, type: String, converter: Se, reflect: !1, useDefault: !1, hasChanged: He };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = at) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Xt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: u } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: s, set(l) {
      const g = s == null ? void 0 : s.call(this);
      u == null || u.call(this, l), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? at;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, n = [...Qt(t), ...Kt(t)];
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
      for (const s of n) t.unshift(it(s));
    } else e !== void 0 && t.push(it(e));
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
    return Yt(e, this.constructor.elementStyles), e;
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
    var u;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : Se).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u, l;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), p = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((u = g.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? g.converter : Se;
      this._$Em = s;
      const w = p.fromAttribute(t, g.type);
      this[s] = w ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? w, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, u) {
    var l;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (u = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? He)(u, t) || n.useDefault && n.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: u }, l) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), u !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) {
        const { wrapped: g } = l, p = this[u];
        g !== !0 || this._$AL.has(u) || p === void 0 || this.C(u, void 0, l, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ne("elementProperties")] = /* @__PURE__ */ new Map(), Z[ne("finalized")] = /* @__PURE__ */ new Map(), Te == null || Te({ ReactiveElement: Z }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, ot = (r) => r, Oe = ie.trustedTypes, lt = Oe ? Oe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, mt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, $t = "?" + U, rr = `<${$t}>`, F = document, ae = () => F.createComment(""), oe = (r) => r === null || typeof r != "object" && typeof r != "function", Ue = Array.isArray, nr = (r) => Ue(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ke = `[ 	
\f\r]`, re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ut = /-->/g, dt = />/g, B = RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, ht = /"/g, wt = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ft = ir(1), X = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function Et(r, e) {
  if (!Ue(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return lt !== void 0 ? lt.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = re;
  for (let g = 0; g < t; g++) {
    const p = r[g];
    let w, E, _ = -1, S = 0;
    for (; S < p.length && (l.lastIndex = S, E = l.exec(p), E !== null); ) S = l.lastIndex, l === re ? E[1] === "!--" ? l = ut : E[1] !== void 0 ? l = dt : E[2] !== void 0 ? (wt.test(E[2]) && (s = RegExp("</" + E[2], "g")), l = B) : E[3] !== void 0 && (l = B) : l === B ? E[0] === ">" ? (l = s ?? re, _ = -1) : E[1] === void 0 ? _ = -2 : (_ = l.lastIndex - E[2].length, w = E[1], l = E[3] === void 0 ? B : E[3] === '"' ? ht : ct) : l === ht || l === ct ? l = B : l === ut || l === dt ? l = re : (l = B, s = void 0);
    const T = l === B && r[g + 1].startsWith("/>") ? " " : "";
    u += l === re ? p + rr : _ >= 0 ? (n.push(w), p.slice(0, _) + mt + p.slice(_) + U + T) : p + U + (_ === -2 ? g : T);
  }
  return [Et(r, u + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class le {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const g = e.length - 1, p = this.parts, [w, E] = sr(e, t);
    if (this.el = le.createElement(w, n), W.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = W.nextNode()) !== null && p.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(mt)) {
          const S = E[l++], T = s.getAttribute(_).split(U), N = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: u, name: N[2], strings: T, ctor: N[1] === "." ? or : N[1] === "?" ? lr : N[1] === "@" ? ur : Me }), s.removeAttribute(_);
        } else _.startsWith(U) && (p.push({ type: 6, index: u }), s.removeAttribute(_));
        if (wt.test(s.tagName)) {
          const _ = s.textContent.split(U), S = _.length - 1;
          if (S > 0) {
            s.textContent = Oe ? Oe.emptyScript : "";
            for (let T = 0; T < S; T++) s.append(_[T], ae()), W.nextNode(), p.push({ type: 2, index: ++u });
            s.append(_[S], ae());
          }
        }
      } else if (s.nodeType === 8) if (s.data === $t) p.push({ type: 2, index: u });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(U, _ + 1)) !== -1; ) p.push({ type: 7, index: u }), _ += U.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = F.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var l, g;
  if (e === X) return e;
  let s = n !== void 0 ? (l = t._$Co) == null ? void 0 : l[n] : t._$Cl;
  const u = oe(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), u === void 0 ? s = void 0 : (s = new u(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
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
    W.currentNode = s;
    let u = W.nextNode(), l = 0, g = 0, p = n[0];
    for (; p !== void 0; ) {
      if (l === p.index) {
        let w;
        p.type === 2 ? w = new ue(u, u.nextSibling, this, e) : p.type === 1 ? w = new p.ctor(u, p.name, p.strings, this, e) : p.type === 6 && (w = new dr(u, this, e)), this._$AV.push(w), p = n[++g];
      }
      l !== (p == null ? void 0 : p.index) && (u = W.nextNode(), l++);
    }
    return W.currentNode = F, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ue {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), oe(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && oe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = le.createElement(Et(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(t);
    else {
      const l = new ar(s, this), g = l.u(this.options);
      l.p(t), this.T(g), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = pt.get(e.strings);
    return t === void 0 && pt.set(e.strings, t = new le(e)), t;
  }
  k(e) {
    Ue(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const u of e) s === t.length ? t.push(n = new ue(this.O(ae()), this.O(ae()), this, this.options)) : n = t[s], n._$AI(u), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = ot(e).nextSibling;
      ot(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Me {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, u) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = J(this, e, t, 0), l = !oe(e) || e !== this._$AH && e !== X, l && (this._$AH = e);
    else {
      const g = e;
      let p, w;
      for (e = u[0], p = 0; p < u.length - 1; p++) w = J(this, g[n + p], t, p), w === X && (w = this._$AH[p]), l || (l = !oe(w) || w !== this._$AH[p]), w === x ? e = x : e !== x && (e += (w ?? "") + u[p + 1]), this._$AH[p] = w;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends Me {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class lr extends Me {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class ur extends Me {
  constructor(e, t, n, s, u) {
    super(e, t, n, s, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? x) === X) return;
    const n = this._$AH, s = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== x && (n === x || s);
    s && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    J(this, e);
  }
}
const Re = ie.litHtmlPolyfillSupport;
Re == null || Re(le, ue), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ue(e.insertBefore(ae(), u), u, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class se extends Z {
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
    return X;
  }
}
var bt;
se._$litElement$ = !0, se.finalized = !0, (bt = G.litElementHydrateSupport) == null || bt.call(G, { LitElement: se });
const Ne = G.litElementPolyfillSupport;
Ne == null || Ne({ LitElement: se });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: Se, reflect: !1, hasChanged: He }, fr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), u.set(t.name, r), n === "accessor") {
    const { name: l } = t;
    return { set(g) {
      const p = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(l, p, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(l, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(g) {
      const p = this[l];
      e.call(this, g), this.requestUpdate(l, p, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function de(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, n), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(e, t) : e, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (s = (n ? l(e, t, s) : l(s)) || s);
  return n && s && pr(e, t, s), s;
};
const yt = {
  neutral: "var(--uiv-secondary-color, #64748b)",
  primary: "var(--uiv-primary-color, #6366f1)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)"
}, vt = {
  neutral: "rgba(100, 116, 139, 0.14)",
  primary: "rgba(99, 102, 241, 0.14)",
  success: "rgba(16, 185, 129, 0.14)",
  warning: "rgba(245, 158, 11, 0.16)",
  error: "rgba(239, 68, 68, 0.14)"
}, gt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-block;'>",
    "<span style='display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;background:rgba(99,102,241,0.14);color:#4f46e5;font-family:inherit;font-size:12px;font-weight:600;line-height:1;box-sizing:border-box;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Feedback", "Status"]
};
function vr(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let k = class extends se {
  constructor() {
    super(...arguments), this.label = "Badge", this.type = "primary", this.variant = "soft", this.size = "medium", this.rounded = !1;
  }
  static getStudioTemplate(r) {
    var H, L, K, ce, he, fe, pe, ye, ve, ge, be, _e, me, $e, we, ee, q;
    if (!r) return gt;
    const e = vr(((H = r.props) == null ? void 0 : H.label) ?? ((K = (L = r.studio) == null ? void 0 : L.display) == null ? void 0 : K.label) ?? ((he = (ce = r.studio) == null ? void 0 : ce.props) == null ? void 0 : he.label) ?? "Badge"), t = (((fe = r.props) == null ? void 0 : fe.type) ?? ((ye = (pe = r.studio) == null ? void 0 : pe.props) == null ? void 0 : ye.type)) || "primary", n = (((ve = r.props) == null ? void 0 : ve.variant) ?? ((be = (ge = r.studio) == null ? void 0 : ge.props) == null ? void 0 : be.variant)) || "soft", s = (((_e = r.props) == null ? void 0 : _e.size) ?? (($e = (me = r.studio) == null ? void 0 : me.props) == null ? void 0 : $e.size)) || "medium", u = ((we = r.props) == null ? void 0 : we.rounded) ?? ((q = (ee = r.studio) == null ? void 0 : ee.props) == null ? void 0 : q.rounded) ?? !1, l = yt[t] || yt.primary, g = vt[t] || vt.primary;
    let p = "4px 10px", w = "12px";
    s === "small" ? (p = "2px 8px", w = "11px") : s === "large" && (p = "6px 14px", w = "13px");
    const E = u ? "999px" : "6px";
    let _ = g, S = l, T = "1px solid transparent", N = "";
    return n === "solid" ? (_ = l, S = "#ffffff") : n === "outline" ? (_ = "transparent", S = l, T = `1px solid ${l}`) : n === "dot" && (_ = "transparent", S = "var(--uiv-text-color, #1f2937)", N = `<span style='width:7px;height:7px;border-radius:50%;background:${l};display:inline-block;'></span>`), {
      ...gt,
      templateHtml: [
        "<div style='display:inline-block;'>",
        `<span style='display:inline-flex;align-items:center;gap:6px;padding:${p};border-radius:${E};background:${_};color:${S};border:${T};font-family:inherit;font-size:${w};font-weight:600;line-height:1;box-sizing:border-box;'>${N}${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get typeConfig() {
    return this.type;
  }
  set typeConfig(r) {
    this.type = r || "primary";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "soft";
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = r || "medium";
  }
  get roundedConfig() {
    return this.rounded;
  }
  set roundedConfig(r) {
    this.rounded = !!r;
  }
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { label: this.label, type: this.type },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return ft`
      <span
        class="badge type-${this.type} variant-${this.variant} size-${this.size} clickable"
        @click=${this.handleClick}
      >
        ${this.variant === "dot" ? ft`<span class="dot"></span>` : ""}
        <span>${this.label}</span>
      </span>
    `;
  }
};
k.styles = qt`
    :host {
      display: inline-block;
      --bd-text: var(--uiv-text-color, #1f2937);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      font-weight: 600;
      line-height: 1;
      white-space: nowrap;
      box-sizing: border-box;
      border: 1px solid transparent;
      cursor: default;
      transition: all 0.2s ease;
    }
    .badge.clickable { cursor: pointer; }
    .badge.clickable:hover { filter: brightness(1.05); transform: translateY(-1px); }

    /* type accents */
    .type-neutral { --bd-accent: var(--uiv-secondary-color, #64748b); --bd-tint: rgba(100, 116, 139, 0.14); }
    .type-primary { --bd-accent: var(--uiv-primary-color, #6366f1); --bd-tint: rgba(99, 102, 241, 0.14); }
    .type-success { --bd-accent: var(--uiv-color-success, #10b981); --bd-tint: rgba(16, 185, 129, 0.14); }
    .type-warning { --bd-accent: var(--uiv-color-warning, #f59e0b); --bd-tint: rgba(245, 158, 11, 0.16); }
    .type-error { --bd-accent: var(--uiv-color-danger, #ef4444); --bd-tint: rgba(239, 68, 68, 0.14); }

    /* sizes */
    .size-small { padding: 2px 8px; font-size: 0.6875rem; border-radius: 6px; }
    .size-medium { padding: 4px 10px; font-size: 0.75rem; border-radius: 6px; }
    .size-large { padding: 6px 14px; font-size: 0.8125rem; border-radius: 8px; }

    :host([rounded]) .badge { border-radius: 999px; }

    /* variants */
    .variant-soft { background: var(--bd-tint); color: var(--bd-accent); }
    .variant-solid { background: var(--bd-accent); color: #ffffff; }
    .variant-outline { background: transparent; color: var(--bd-accent); border-color: var(--bd-accent); }
    .variant-dot { background: transparent; color: var(--bd-text); padding-left: 4px; }

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--bd-accent);
      display: inline-block;
      flex: none;
    }
  `;
R([
  de({ type: String })
], k.prototype, "label", 2);
R([
  de({ type: String })
], k.prototype, "type", 2);
R([
  de({ type: String })
], k.prototype, "variant", 2);
R([
  de({ type: String })
], k.prototype, "size", 2);
R([
  de({ type: Boolean, reflect: !0 })
], k.prototype, "rounded", 2);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Label / Text",
    fieldMappings: "label"
  })
], k.prototype, "labelConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: V.DROPDOWN,
    displayLabel: "Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Neutral", value: "neutral" },
      { label: "Primary", value: "primary" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
], k.prototype, "typeConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: V.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Soft", value: "soft" },
      { label: "Solid", value: "solid" },
      { label: "Outline", value: "outline" },
      { label: "Dot", value: "dot" }
    ]
  })
], k.prototype, "variantConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: V.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" }
    ]
  })
], k.prototype, "sizeConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Rounded (pill shape)",
    fieldMappings: "rounded"
  })
], k.prototype, "roundedConfig", 1);
R([
  Q({
    attributeType: z.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
], k.prototype, "handleClick", 1);
k = R([
  Bt({
    name: "zero-badge",
    version: "1.0.0",
    title: "Badge",
    elementSelector: "zero-badge",
    group: "Feedback",
    iconName: "badge-icon.png"
  }),
  Wt()
], k);
export {
  k as ZeroBadge,
  gt as studioTemplate
};
