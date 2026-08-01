var Ut = Object.defineProperty;
var It = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var tt;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof et == "object" ? et : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
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
    function u() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function _() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !_ && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return Oe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Oe({ __proto__: null });
      } : function() {
        return Oe({});
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
    }, m = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), N = typeof WeakMap == "function" ? WeakMap : Rt(), I = s ? Symbol.for("@reflect-metadata:registry") : void 0, W = Ct(), K = Pt(W);
    function ue(i, o, a, c) {
      if (g(a)) {
        if (!Ve(i))
          throw new TypeError();
        if (!Fe(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!Ve(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !g(c) && !Z(c))
          throw new TypeError();
        return Z(c) && (c = void 0), a = U(a), $t(i, o, a, c);
      }
    }
    e("decorate", ue);
    function ce(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!g(v) && !Mt(v))
          throw new TypeError();
        Le(i, o, c, v);
      }
      return a;
    }
    e("metadata", ce);
    function he(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = U(c)), Le(i, o, a, c);
    }
    e("defineMetadata", he);
    function de(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = U(a)), Ie(i, o, a);
    }
    e("hasMetadata", de);
    function fe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = U(a)), Ae(i, o, a);
    }
    e("hasOwnMetadata", fe);
    function pe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = U(a)), He(i, o, a);
    }
    e("getMetadata", pe);
    function ye(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = U(a)), je(i, o, a);
    }
    e("getOwnMetadata", ye);
    function ve(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = U(o)), ze(i, o);
    }
    e("getMetadataKeys", ve);
    function _e(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = U(o)), We(i, o);
    }
    e("getOwnMetadataKeys", _e);
    function ge(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = U(a)), !O(o))
        throw new TypeError();
      g(a) || (a = U(a));
      var c = ee(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", ge);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!g(v) && !Z(v)) {
          if (!Fe(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], C = P(o, a, c);
        if (!g(C) && !Z(C)) {
          if (!O(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function Ie(i, o, a) {
      var c = Ae(i, o, a);
      if (c)
        return !0;
      var v = Me(o);
      return Z(v) ? !1 : Ie(i, v, a);
    }
    function Ae(i, o, a) {
      var c = ee(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Be(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function He(i, o, a) {
      var c = Ae(i, o, a);
      if (c)
        return je(i, o, a);
      var v = Me(o);
      if (!Z(v))
        return He(i, v, a);
    }
    function je(i, o, a) {
      var c = ee(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Le(i, o, a, c) {
      var v = ee(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function ze(i, o) {
      var a = We(i, o), c = Me(i);
      if (c === null)
        return a;
      var v = ze(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), C = [], b = 0, h = a; b < h.length; b++) {
        var d = h[b], f = P.has(d);
        f || (P.add(d), C.push(d));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var d = $[y], f = P.has(d);
        f || (P.add(d), C.push(d));
      }
      return C;
    }
    function We(i, o) {
      var a = ee(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function g(i) {
      return i === void 0;
    }
    function Z(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, o) {
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
      var a = "string", c = qe(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (me(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (me(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Be(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function U(i) {
      var o = Et(i);
      return wt(o) ? o : St(o);
    }
    function Ve(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function me(i) {
      return typeof i == "function";
    }
    function Fe(i) {
      return typeof i == "function";
    }
    function Mt(i) {
      switch (Ge(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Se(i, o) {
      return i === o || i !== i && o !== o;
    }
    function qe(i, o) {
      var a = i[o];
      if (a != null) {
        if (!me(a))
          throw new TypeError();
        return a;
      }
    }
    function Ze(i) {
      var o = qe(i, u);
      if (!me(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ye(i) {
      return i.value;
    }
    function Xe(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Je(i) {
      var o = i.return;
      o && o.call(i);
    }
    function Me(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === m || o !== m)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ot() {
      var i;
      !g(I) && typeof t.Reflect < "u" && !(I in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var o, a, c, v = new N(), P = {
        registerProvider: C,
        getProvider: h,
        setProvider: f
      };
      return P;
      function C(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case g(o):
            o = y;
            break;
          case o === y:
            break;
          case g(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!g(o)) {
          if (o.isProviderFor(y, $))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(y, $))
              return o;
            if (!g(c))
              for (var A = Ze(c); ; ) {
                var S = Xe(A);
                if (!S)
                  return;
                var D = Ye(S);
                if (D.isProviderFor(y, $))
                  return Je(A), D;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, $))
          return i;
      }
      function h(y, $) {
        var A = v.get(y), S;
        return g(A) || (S = A.get($)), g(S) && (S = b(y, $), g(S) || (g(A) && (A = new M(), v.set(y, A)), A.set($, S))), S;
      }
      function d(y) {
        if (g(y))
          throw new TypeError();
        return o === y || a === y || !g(c) && c.has(y);
      }
      function f(y, $, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(y, $);
        if (S !== A) {
          if (!g(S))
            return !1;
          var D = v.get(y);
          g(D) && (D = new M(), v.set(y, D)), D.set($, A);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !g(I) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[I]), g(i) && (i = Ot()), !g(I) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new N(), a = {
        isProviderFor: function(d, f) {
          var y = o.get(d);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return W.registerProvider(a), a;
      function c(d, f, y) {
        var $ = o.get(d), A = !1;
        if (g($)) {
          if (!y)
            return;
          $ = new M(), o.set(d, $), A = !0;
        }
        var S = $.get(f);
        if (g(S)) {
          if (!y)
            return;
          if (S = new M(), $.set(f, S), !i.setProvider(d, f, a))
            throw $.delete(f), A && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        return g($) ? !1 : Be($.has(d));
      }
      function P(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(d);
      }
      function C(d, f, y, $) {
        var A = c(
          y,
          $,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function b(d, f) {
        var y = [], $ = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return y;
        for (var A = $.keys(), S = Ze(A), D = 0; ; ) {
          var Qe = Xe(S);
          if (!Qe)
            return y.length = D, y;
          var Nt = Ye(Qe);
          try {
            y[D] = Nt;
          } catch (Dt) {
            try {
              Je(S);
            } finally {
              throw Dt;
            }
          }
          D++;
        }
      }
      function h(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(y), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function xt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new N(), b = {
        isProviderFor: function(h, d) {
          var f = C.get(h);
          return !g(f) && f.has(d) ? !0 : v(h, d).length ? (g(f) && (f = new k(), C.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function ee(i, o, a) {
      var c = W.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (W.setProvider(i, o, K))
          return K;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
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
          }), b.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, b.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, b.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Se(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(h, d) {
            if (!Se(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Se(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function v(b, h) {
        return b;
      }
      function P(b, h) {
        return h;
      }
      function C(b, h) {
        return [b, h];
      }
    }
    function kt() {
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
    function Rt() {
      var i = 16, o = w.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
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
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function C(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function b() {
        var h = C(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function Oe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(tt || (tt = {}));
function Ht(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
  return function(e) {
    if (Ht(r)) {
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
function Lt(r) {
  return jt(r);
}
function zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ke(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const w = new CSSStyleSheet(), m = (E = l.sheet) == null ? void 0 : E.cssRules;
          m && (Array.from(m).forEach((M) => w.insertRule(M.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const m = w.cloneNode(!0);
          p.appendChild(m);
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
function Gt(r) {
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
function q(r) {
  return Gt(r);
}
var z;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(z || (z = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const be = globalThis, Re = be.ShadowRoot && (be.ShadyCSS === void 0 || be.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ne = Symbol(), rt = /* @__PURE__ */ new WeakMap();
let yt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ne) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Re && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = rt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && rt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Bt = (r) => new yt(typeof r == "string" ? r : r + "", void 0, Ne), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new yt(t, r, Ne);
}, Ft = (r, e) => {
  if (Re) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = be.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, nt = Re ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Bt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, L = globalThis, it = L.trustedTypes, Kt = it ? it.emptyScript : "", Ce = L.reactiveElementPolyfillSupport, re = (r, e) => r, $e = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Kt : null;
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
} }, De = (r, e) => !qt(r, e), st = { attribute: !0, type: String, converter: $e, reflect: !1, useDefault: !1, hasChanged: De };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = st) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? st;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, n = [...Xt(t), ...Jt(t)];
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
      for (const s of n) t.unshift(nt(s));
    } else e !== void 0 && t.push(nt(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : $e).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : $e;
      this._$Em = s;
      const E = p.fromAttribute(t, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? De)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
        const { wrapped: _ } = u, p = this[l];
        _ !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[re("elementProperties")] = /* @__PURE__ */ new Map(), Y[re("finalized")] = /* @__PURE__ */ new Map(), Ce == null || Ce({ ReactiveElement: Y }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, ot = (r) => r, we = ne.trustedTypes, at = we ? we.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, vt = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, _t = "?" + j, er = `<${_t}>`, F = document, se = () => F.createComment(""), oe = (r) => r === null || typeof r != "object" && typeof r != "function", Ue = Array.isArray, tr = (r) => Ue(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Pe = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, lt = /-->/g, ut = />/g, G = RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, ht = /"/g, gt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), dt = rr(1), X = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), ft = /* @__PURE__ */ new WeakMap(), B = F.createTreeWalker(F, 129);
function mt(r, e) {
  if (!Ue(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return at !== void 0 ? at.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = te;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let E, w, m = -1, M = 0;
    for (; M < p.length && (u.lastIndex = M, w = u.exec(p), w !== null); ) M = u.lastIndex, u === te ? w[1] === "!--" ? u = lt : w[1] !== void 0 ? u = ut : w[2] !== void 0 ? (gt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = G) : w[3] !== void 0 && (u = G) : u === G ? w[0] === ">" ? (u = s ?? te, m = -1) : w[1] === void 0 ? m = -2 : (m = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? G : w[3] === '"' ? ht : ct) : u === ht || u === ct ? u = G : u === lt || u === ut ? u = te : (u = G, s = void 0);
    const k = u === G && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === te ? p + er : m >= 0 ? (n.push(E), p.slice(0, m) + vt + p.slice(m) + j + k) : p + j + (m === -2 ? _ : k);
  }
  return [mt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [E, w] = nr(e, t);
    if (this.el = ae.createElement(E, n), B.currentNode = this.el.content, t === 2 || t === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (s = B.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const m of s.getAttributeNames()) if (m.endsWith(vt)) {
          const M = w[u++], k = s.getAttribute(m).split(j), N = /([.?@])?(.*)/.exec(M);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? sr : N[1] === "?" ? or : N[1] === "@" ? ar : Ee }), s.removeAttribute(m);
        } else m.startsWith(j) && (p.push({ type: 6, index: l }), s.removeAttribute(m));
        if (gt.test(s.tagName)) {
          const m = s.textContent.split(j), M = m.length - 1;
          if (M > 0) {
            s.textContent = we ? we.emptyScript : "";
            for (let k = 0; k < M; k++) s.append(m[k], se()), B.nextNode(), p.push({ type: 2, index: ++l });
            s.append(m[M], se());
          }
        }
      } else if (s.nodeType === 8) if (s.data === _t) p.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = s.data.indexOf(j, m + 1)) !== -1; ) p.push({ type: 7, index: l }), m += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = F.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var u, _;
  if (e === X) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = oe(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
}
class ir {
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
    let l = B.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new le(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new lr(l, this, e)), this._$AV.push(E), p = n[++_];
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
    e = J(this, e, t), oe(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
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
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(mt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = ft.get(e.strings);
    return t === void 0 && ft.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    Ue(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new le(this.O(se()), this.O(se()), this, this.options)) : n = t[s], n._$AI(l), s++;
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
class Ee {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !oe(e) || e !== this._$AH && e !== X, u && (this._$AH = e);
    else {
      const _ = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = J(this, _[n + p], t, p), E === X && (E = this._$AH[p]), u || (u = !oe(E) || E !== this._$AH[p]), E === x ? e = x : e !== x && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends Ee {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class or extends Ee {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class ar extends Ee {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? x) === X) return;
    const n = this._$AH, s = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== x && (n === x || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
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
const xe = ne.litHtmlPolyfillSupport;
xe == null || xe(ae, le), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
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
class ie extends Y {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ur(t, this.renderRoot, this.renderOptions);
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
var pt;
ie._$litElement$ = !0, ie.finalized = !0, (pt = V.litElementHydrateSupport) == null || pt.call(V, { LitElement: ie });
const Te = V.litElementPolyfillSupport;
Te == null || Te({ LitElement: ie });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: $e, reflect: !1, hasChanged: De }, hr = (r = cr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const p = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(_) {
      const p = this[u];
      e.call(this, _), this.requestUpdate(u, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Q(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && dr(e, t, s), s;
};
const ke = {
  kind: "generic",
  templateHtml: [
    "<div style='width:280px;display:flex;align-items:center;gap:12px;margin:16px 0;font-family:inherit;box-sizing:border-box;'>",
    "<div style='flex:1;border-top:1px solid #e5e7eb;'></div>",
    "<span style='font-size:12px;font-weight:600;color:#6b7280;white-space:nowrap;'>OR</span>",
    "<div style='flex:1;border-top:1px solid #e5e7eb;'></div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Layout", "Divider"]
};
function pr(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends ie {
  constructor() {
    super(...arguments), this.orientation = "horizontal", this.label = "", this.lineStyle = "solid", this.thickness = 1, this.spacing = 16, this.color = "";
  }
  static getStudioTemplate(r) {
    var w, m, M, k, N, I, W, K, ue, ce, he, de, fe, pe, ye, ve, _e, ge;
    if (!r) return ke;
    const e = (((w = r.props) == null ? void 0 : w.orientation) ?? ((M = (m = r.studio) == null ? void 0 : m.props) == null ? void 0 : M.orientation)) || "horizontal", t = pr(((k = r.props) == null ? void 0 : k.label) ?? ((I = (N = r.studio) == null ? void 0 : N.props) == null ? void 0 : I.label) ?? ""), n = (((W = r.props) == null ? void 0 : W.lineStyle) ?? ((ue = (K = r.studio) == null ? void 0 : K.props) == null ? void 0 : ue.lineStyle)) || "solid", s = Math.max(1, Number(((ce = r.props) == null ? void 0 : ce.thickness) ?? ((de = (he = r.studio) == null ? void 0 : he.props) == null ? void 0 : de.thickness) ?? 1)), l = Math.max(0, Number(((fe = r.props) == null ? void 0 : fe.spacing) ?? ((ye = (pe = r.studio) == null ? void 0 : pe.props) == null ? void 0 : ye.spacing) ?? 16)), u = (((ve = r.props) == null ? void 0 : ve.color) ?? ((ge = (_e = r.studio) == null ? void 0 : _e.props) == null ? void 0 : ge.color)) || "var(--uiv-border-color, #e5e7eb)", _ = "var(--uiv-text-muted, #6b7280)";
    if (e === "vertical")
      return {
        ...ke,
        templateHtml: [
          `<div style='display:inline-flex;align-items:stretch;height:48px;margin:0 ${l}px;font-family:inherit;box-sizing:border-box;'>`,
          `<div style='border-left:${s}px ${n} ${u};'></div>`,
          "</div>"
        ].join("")
      };
    const p = `<div style='flex:1;border-top:${s}px ${n} ${u};'></div>`, E = t ? `<span style='font-size:12px;font-weight:600;color:${_};white-space:nowrap;'>${t}</span>` : "";
    return {
      ...ke,
      templateHtml: [
        `<div style='width:280px;display:flex;align-items:center;gap:12px;margin:${l}px 0;font-family:inherit;box-sizing:border-box;'>`,
        p,
        E,
        t ? p : "",
        "</div>"
      ].join("")
    };
  }
  get orientationConfig() {
    return this.orientation;
  }
  set orientationConfig(r) {
    this.orientation = r || "horizontal";
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get lineStyleConfig() {
    return this.lineStyle;
  }
  set lineStyleConfig(r) {
    this.lineStyle = r || "solid";
  }
  get thicknessConfig() {
    return this.thickness;
  }
  set thicknessConfig(r) {
    this.thickness = Math.max(1, Number(r) || 1);
  }
  get spacingConfig() {
    return this.spacing;
  }
  set spacingConfig(r) {
    this.spacing = Math.max(0, Number(r) || 0);
  }
  get colorConfig() {
    return this.color;
  }
  set colorConfig(r) {
    this.color = r;
  }
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { orientation: this.orientation, label: this.label },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = this.color || "var(--uiv-border-color, #e5e7eb)", e = this.orientation === "vertical", t = e ? `0 ${this.spacing}px` : `${this.spacing}px 0`;
    return dt`
      <div
        class="divider ${e ? "vertical" : "horizontal"} clickable"
        role="separator"
        aria-orientation=${e ? "vertical" : "horizontal"}
        style="margin:${t};--dv-color:${r};--dv-style:${this.lineStyle};--dv-thickness:${this.thickness}px;"
        @click=${this.handleClick}
      >
        <div class="line"></div>
        ${!e && this.label ? dt`<span class="label">${this.label}</span><div class="line"></div>` : ""}
      </div>
    `;
  }
};
T.styles = Vt`
    :host {
      display: block;
      --dv-color: var(--uiv-border-color, #e5e7eb);
      --dv-muted: var(--uiv-text-muted, #6b7280);
    }

    :host([orientation="vertical"]) {
      display: inline-flex;
      align-self: stretch;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: inherit;
      box-sizing: border-box;
    }
    .divider.horizontal {
      width: 100%;
      flex-direction: row;
    }
    .divider.vertical {
      display: inline-flex;
      align-items: stretch;
      height: 100%;
      min-height: 24px;
    }

    .line {
      flex: 1;
      border-top-style: var(--dv-style, solid);
      border-top-width: var(--dv-thickness, 1px);
      border-top-color: var(--dv-color);
    }
    .divider.vertical .line {
      flex: 1;
      border-top: none;
      border-left-style: var(--dv-style, solid);
      border-left-width: var(--dv-thickness, 1px);
      border-left-color: var(--dv-color);
      align-self: stretch;
    }

    .label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--dv-muted);
      white-space: nowrap;
      line-height: 1;
    }

    .clickable {
      cursor: pointer;
    }
  `;
R([
  Q({ type: String, reflect: !0 })
], T.prototype, "orientation", 2);
R([
  Q({ type: String })
], T.prototype, "label", 2);
R([
  Q({ type: String, attribute: "line-style" })
], T.prototype, "lineStyle", 2);
R([
  Q({ type: Number })
], T.prototype, "thickness", 2);
R([
  Q({ type: Number })
], T.prototype, "spacing", 2);
R([
  Q({ type: String })
], T.prototype, "color", 2);
R([
  q({
    attributeType: H.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Orientation",
    fieldMappings: "orientation",
    optionItems: [
      { label: "Horizontal", value: "horizontal" },
      { label: "Vertical", value: "vertical" }
    ]
  })
], T.prototype, "orientationConfig", 1);
R([
  q({
    attributeType: H.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Label (optional, centered)",
    fieldMappings: "label"
  })
], T.prototype, "labelConfig", 1);
R([
  q({
    attributeType: H.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Line Style",
    fieldMappings: "lineStyle",
    optionItems: [
      { label: "Solid", value: "solid" },
      { label: "Dashed", value: "dashed" },
      { label: "Dotted", value: "dotted" }
    ]
  })
], T.prototype, "lineStyleConfig", 1);
R([
  q({
    attributeType: H.PROPERTY,
    uiComponentType: z.NUMBER_INPUT,
    displayLabel: "Thickness (px)",
    fieldMappings: "thickness"
  })
], T.prototype, "thicknessConfig", 1);
R([
  q({
    attributeType: H.PROPERTY,
    uiComponentType: z.NUMBER_INPUT,
    displayLabel: "Spacing / Margin (px)",
    fieldMappings: "spacing"
  })
], T.prototype, "spacingConfig", 1);
R([
  q({
    attributeType: H.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Color",
    fieldMappings: "color"
  })
], T.prototype, "colorConfig", 1);
R([
  q({
    attributeType: H.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
], T.prototype, "handleClick", 1);
T = R([
  Lt({
    name: "zero-divider",
    version: "1.0.0",
    title: "Divider",
    elementSelector: "zero-divider",
    group: "Layout",
    iconName: "divider-icon.png"
  }),
  zt()
], T);
export {
  T as ZeroDivider,
  ke as studioTemplate
};
