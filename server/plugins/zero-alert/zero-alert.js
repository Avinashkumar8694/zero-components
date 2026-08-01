var zt = Object.defineProperty;
var Lt = (r, e, t) => e in r ? zt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var rt = (r, e, t) => Lt(r, typeof e != "symbol" ? e + "" : e, t);
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var it;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof nt == "object" ? nt : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, E) {
      return function($, _) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: _ }), E && E($, _);
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
    function v() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !v && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return De(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return De({ __proto__: null });
      } : function() {
        return De({});
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
    }, _ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Nt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Dt(), I = typeof WeakMap == "function" ? WeakMap : Ht(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, Y = Rt(), pe = kt(Y);
    function ye(i, o, a, c) {
      if (m(a)) {
        if (!Ye(i))
          throw new TypeError();
        if (!Ze(o))
          throw new TypeError();
        return Se(i, o);
      } else {
        if (!Ye(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(c) && !m(c) && !X(c))
          throw new TypeError();
        return X(c) && (c = void 0), a = D(a), Oe(i, o, a, c);
      }
    }
    e("decorate", ye);
    function ve(i, o) {
      function a(c, g) {
        if (!x(c))
          throw new TypeError();
        if (!m(g) && !Pt(g))
          throw new TypeError();
        ne(i, o, c, g);
      }
      return a;
    }
    e("metadata", ve);
    function ge(i, o, a, c) {
      if (!x(a))
        throw new TypeError();
      return m(c) || (c = D(c)), ne(i, o, a, c);
    }
    e("defineMetadata", ge);
    function me(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = D(a)), ee(i, o, a);
    }
    e("hasMetadata", me);
    function _e(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = D(a)), Z(i, o, a);
    }
    e("hasOwnMetadata", _e);
    function be(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = D(a)), te(i, o, a);
    }
    e("getMetadata", be);
    function $e(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = D(a)), re(i, o, a);
    }
    e("getOwnMetadata", $e);
    function we(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = D(o)), ie(i, o);
    }
    e("getMetadataKeys", we);
    function Ee(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = D(o)), Ve(i, o);
    }
    e("getOwnMetadataKeys", Ee);
    function Ae(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (m(a) || (a = D(a)), !x(o))
        throw new TypeError();
      m(a) || (a = D(a));
      var c = se(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", Ae);
    function Se(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], g = c(o);
        if (!m(g) && !X(g)) {
          if (!Ze(g))
            throw new TypeError();
          o = g;
        }
      }
      return o;
    }
    function Oe(i, o, a, c) {
      for (var g = i.length - 1; g >= 0; --g) {
        var M = i[g], C = M(o, a, c);
        if (!m(C) && !X(C)) {
          if (!x(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function ee(i, o, a) {
      var c = Z(i, o, a);
      if (c)
        return !0;
      var g = Ne(o);
      return X(g) ? !1 : ee(i, g, a);
    }
    function Z(i, o, a) {
      var c = se(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : qe(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function te(i, o, a) {
      var c = Z(i, o, a);
      if (c)
        return re(i, o, a);
      var g = Ne(o);
      if (!X(g))
        return te(i, g, a);
    }
    function re(i, o, a) {
      var c = se(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function ne(i, o, a, c) {
      var g = se(
        a,
        c,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function ie(i, o) {
      var a = Ve(i, o), c = Ne(i);
      if (c === null)
        return a;
      var g = ie(c, o);
      if (g.length <= 0)
        return a;
      if (a.length <= 0)
        return g;
      for (var M = new R(), C = [], b = 0, d = a; b < d.length; b++) {
        var f = d[b], h = M.has(f);
        h || (M.add(f), C.push(f));
      }
      for (var y = 0, w = g; y < w.length; y++) {
        var f = w[y], h = M.has(f);
        h || (M.add(f), C.push(f));
      }
      return C;
    }
    function Ve(i, o) {
      var a = se(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Fe(i) {
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
    function X(i) {
      return i === null;
    }
    function Ot(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xt(i, o) {
      switch (Fe(i)) {
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
      var a = "string", c = Xe(i, l);
      if (c !== void 0) {
        var g = c.call(i, a);
        if (x(g))
          throw new TypeError();
        return g;
      }
      return Ct(i);
    }
    function Ct(i, o) {
      var a, c;
      {
        var g = i.toString;
        if (xe(g)) {
          var c = g.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (xe(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function qe(i) {
      return !!i;
    }
    function Mt(i) {
      return "" + i;
    }
    function D(i) {
      var o = xt(i);
      return Ot(o) ? o : Mt(o);
    }
    function Ye(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function xe(i) {
      return typeof i == "function";
    }
    function Ze(i) {
      return typeof i == "function";
    }
    function Pt(i) {
      switch (Fe(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ie(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Xe(i, o) {
      var a = i[o];
      if (a != null) {
        if (!xe(a))
          throw new TypeError();
        return a;
      }
    }
    function Je(i) {
      var o = Xe(i, u);
      if (!xe(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function Qe(i) {
      return i.value;
    }
    function Ke(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function et(i) {
      var o = i.return;
      o && o.call(i);
    }
    function Ne(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || o !== _)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var g = c.constructor;
      return typeof g != "function" || g === i ? o : g;
    }
    function Tt() {
      var i;
      !m(j) && typeof t.Reflect < "u" && !(j in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = It(t.Reflect));
      var o, a, c, g = new I(), M = {
        registerProvider: C,
        getProvider: d,
        setProvider: h
      };
      return M;
      function C(y) {
        if (!Object.isExtensible(M))
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
            c === void 0 && (c = new R()), c.add(y);
            break;
        }
      }
      function b(y, w) {
        if (!m(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!m(c))
              for (var A = Je(c); ; ) {
                var O = Ke(A);
                if (!O)
                  return;
                var N = Qe(O);
                if (N.isProviderFor(y, w))
                  return et(A), N;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, w))
          return i;
      }
      function d(y, w) {
        var A = g.get(y), O;
        return m(A) || (O = A.get(w)), m(O) && (O = b(y, w), m(O) || (m(A) && (A = new S(), g.set(y, A)), A.set(w, O))), O;
      }
      function f(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(c) && c.has(y);
      }
      function h(y, w, A) {
        if (!f(A))
          throw new Error("Metadata provider not registered.");
        var O = d(y, w);
        if (O !== A) {
          if (!m(O))
            return !1;
          var N = g.get(y);
          m(N) && (N = new S(), g.set(y, N)), N.set(w, A);
        }
        return !0;
      }
    }
    function Rt() {
      var i;
      return !m(j) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[j]), m(i) && (i = Tt()), !m(j) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function kt(i) {
      var o = new I(), a = {
        isProviderFor: function(f, h) {
          var y = o.get(f);
          return m(y) ? !1 : y.has(h);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return Y.registerProvider(a), a;
      function c(f, h, y) {
        var w = o.get(f), A = !1;
        if (m(w)) {
          if (!y)
            return;
          w = new S(), o.set(f, w), A = !0;
        }
        var O = w.get(h);
        if (m(O)) {
          if (!y)
            return;
          if (O = new S(), w.set(h, O), !i.setProvider(f, h, a))
            throw w.delete(h), A && o.delete(f), new Error("Wrong provider for target.");
        }
        return O;
      }
      function g(f, h, y) {
        var w = c(
          h,
          y,
          /*Create*/
          !1
        );
        return m(w) ? !1 : qe(w.has(f));
      }
      function M(f, h, y) {
        var w = c(
          h,
          y,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(f);
      }
      function C(f, h, y, w) {
        var A = c(
          y,
          w,
          /*Create*/
          !0
        );
        A.set(f, h);
      }
      function b(f, h) {
        var y = [], w = c(
          f,
          h,
          /*Create*/
          !1
        );
        if (m(w))
          return y;
        for (var A = w.keys(), O = Je(A), N = 0; ; ) {
          var tt = Ke(O);
          if (!tt)
            return y.length = N, y;
          var jt = Qe(tt);
          try {
            y[N] = jt;
          } catch (Ut) {
            try {
              et(O);
            } finally {
              throw Ut;
            }
          }
          N++;
        }
      }
      function d(f, h, y) {
        var w = c(
          h,
          y,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(f))
          return !1;
        if (w.size === 0) {
          var A = o.get(h);
          m(A) || (A.delete(y), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function It(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, g = i.getOwnMetadataKeys, M = i.deleteMetadata, C = new I(), b = {
        isProviderFor: function(d, f) {
          var h = C.get(d);
          return !m(h) && h.has(f) ? !0 : g(d, f).length ? (m(h) && (h = new R(), C.set(d, h)), h.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: M
      };
      return b;
    }
    function se(i, o, a) {
      var c = Y.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (Y.setProvider(i, o, pe))
          return pe;
        throw new Error("Illegal state.");
      }
    }
    function Nt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, f, h) {
            this._index = 0, this._keys = d, this._values = f, this._selector = h;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var f = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
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
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, b.prototype.set = function(d, f) {
            var h = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[h] = f, this;
          }, b.prototype.delete = function(d) {
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var h = this._keys.length, y = f + 1; y < h; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Ie(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, g);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, f) {
            if (!Ie(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (Ie(this._keys[h], d)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function g(b, d) {
        return b;
      }
      function M(b, d) {
        return d;
      }
      function C(b, d) {
        return [b, d];
      }
    }
    function Dt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new S();
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
    function Ht() {
      var i = 16, o = $.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(f) {
            var h = g(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? $.has(h, this._key) : !1;
          }, d.prototype.get = function(f) {
            var h = g(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? $.get(h, this._key) : void 0;
          }, d.prototype.set = function(f, h) {
            var y = g(
              f,
              /*create*/
              !0
            );
            return y[this._key] = h, this;
          }, d.prototype.delete = function(f) {
            var h = g(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + b();
        while ($.has(o, d));
        return o[d] = !0, d;
      }
      function g(d, f) {
        if (!n.call(d, a)) {
          if (!f)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function M(d, f) {
        for (var h = 0; h < f; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function C(d) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : M(f, d), f;
        }
        return M(new Array(d), d);
      }
      function b() {
        var d = C(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var f = "", h = 0; h < i; ++h) {
          var y = d[h];
          (h === 4 || h === 6 || h === 8) && (f += "-"), y < 16 && (f += "0"), f += y.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function De(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(it || (it = {}));
function Bt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Wt(r) {
  return function(e) {
    if (Bt(r)) {
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
function Gt(r) {
  return Wt(r);
}
function Vt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        rt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const $ = new CSSStyleSheet(), _ = (E = l.sheet) == null ? void 0 : E.cssRules;
          _ && (Array.from(_).forEach((S) => $.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const _ = $.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return t;
  };
}
function Ft(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(r) {
  return function(e, t) {
    try {
      Ft(r);
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
function F(r) {
  return qt(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = globalThis, Le = Pe.ShadowRoot && (Pe.ShadyCSS === void 0 || Pe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Be = Symbol(), st = /* @__PURE__ */ new WeakMap();
let $t = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Le && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = st.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && st.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Yt = (r) => new $t(typeof r == "string" ? r : r + "", void 0, Be), Zt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new $t(t, r, Be);
}, Xt = (r, e) => {
  if (Le) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = Pe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, ot = Le ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Yt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: Qt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: er, getOwnPropertySymbols: tr, getPrototypeOf: rr } = Object, z = globalThis, at = z.trustedTypes, nr = at ? at.emptyScript : "", He = z.reactiveElementPolyfillSupport, ae = (r, e) => r, Te = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? nr : null;
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
} }, We = (r, e) => !Jt(r, e), lt = { attribute: !0, type: String, converter: Te, reflect: !1, useDefault: !1, hasChanged: We };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = lt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Kt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const v = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ae("elementProperties"))) return;
    const e = rr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ae("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ae("properties"))) {
      const t = this.properties, n = [...er(t), ...tr(t)];
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
      for (const s of n) t.unshift(ot(s));
    } else e !== void 0 && t.push(ot(e));
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
    return Xt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Te).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const v = n.getPropertyOptions(s), p = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : Te;
      this._$Em = s;
      const E = p.fromAttribute(t, v.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const v = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = v.getPropertyOptions(e)), !((n.hasChanged ?? We)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(v._$Eu(e, n)))) return;
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
        const { wrapped: v } = u, p = this[l];
        v !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[ae("elementProperties")] = /* @__PURE__ */ new Map(), J[ae("finalized")] = /* @__PURE__ */ new Map(), He == null || He({ ReactiveElement: J }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = globalThis, ut = (r) => r, Re = le.trustedTypes, ct = Re ? Re.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, wt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, Et = "?" + U, ir = `<${Et}>`, V = document, ce = () => V.createComment(""), de = (r) => r === null || typeof r != "object" && typeof r != "function", Ge = Array.isArray, sr = (r) => Ge(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", je = `[ 	
\f\r]`, oe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, dt = /-->/g, ft = />/g, B = RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ht = /'/g, pt = /"/g, At = /^(?:script|style|textarea|title)$/i, or = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Ce = or(1), Q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), yt = /* @__PURE__ */ new WeakMap(), W = V.createTreeWalker(V, 129);
function St(r, e) {
  if (!Ge(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
const ar = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = oe;
  for (let v = 0; v < t; v++) {
    const p = r[v];
    let E, $, _ = -1, S = 0;
    for (; S < p.length && (u.lastIndex = S, $ = u.exec(p), $ !== null); ) S = u.lastIndex, u === oe ? $[1] === "!--" ? u = dt : $[1] !== void 0 ? u = ft : $[2] !== void 0 ? (At.test($[2]) && (s = RegExp("</" + $[2], "g")), u = B) : $[3] !== void 0 && (u = B) : u === B ? $[0] === ">" ? (u = s ?? oe, _ = -1) : $[1] === void 0 ? _ = -2 : (_ = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? B : $[3] === '"' ? pt : ht) : u === pt || u === ht ? u = B : u === dt || u === ft ? u = oe : (u = B, s = void 0);
    const R = u === B && r[v + 1].startsWith("/>") ? " " : "";
    l += u === oe ? p + ir : _ >= 0 ? (n.push(E), p.slice(0, _) + wt + p.slice(_) + U + R) : p + U + (_ === -2 ? v : R);
  }
  return [St(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class fe {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const v = e.length - 1, p = this.parts, [E, $] = ar(e, t);
    if (this.el = fe.createElement(E, n), W.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = W.nextNode()) !== null && p.length < v; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(wt)) {
          const S = $[u++], R = s.getAttribute(_).split(U), I = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: l, name: I[2], strings: R, ctor: I[1] === "." ? ur : I[1] === "?" ? cr : I[1] === "@" ? dr : ke }), s.removeAttribute(_);
        } else _.startsWith(U) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (At.test(s.tagName)) {
          const _ = s.textContent.split(U), S = _.length - 1;
          if (S > 0) {
            s.textContent = Re ? Re.emptyScript : "";
            for (let R = 0; R < S; R++) s.append(_[R], ce()), W.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[S], ce());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Et) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(U, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n;
  }
}
function K(r, e, t = r, n) {
  var u, v;
  if (e === Q) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = de(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((v = s == null ? void 0 : s._$AO) == null || v.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = K(r, s._$AS(r, e.values), s, n)), e;
}
class lr {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    W.currentNode = s;
    let l = W.nextNode(), u = 0, v = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new he(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new fr(l, this, e)), this._$AV.push(E), p = n[++v];
      }
      u !== (p == null ? void 0 : p.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = V, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class he {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = K(this, e, t), de(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : sr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && de(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = fe.createElement(St(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new lr(s, this), v = u.u(this.options);
      u.p(t), this.T(v), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = yt.get(e.strings);
    return t === void 0 && yt.set(e.strings, t = new fe(e)), t;
  }
  k(e) {
    Ge(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new he(this.O(ce()), this.O(ce()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = ut(e).nextSibling;
      ut(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ke {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = K(this, e, t, 0), u = !de(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const v = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = K(this, v[n + p], t, p), E === Q && (E = this._$AH[p]), u || (u = !de(E) || E !== this._$AH[p]), E === P ? e = P : e !== P && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ur extends ke {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class cr extends ke {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class dr extends ke {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? P) === Q) return;
    const n = this._$AH, s = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class fr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const Ue = le.litHtmlPolyfillSupport;
Ue == null || Ue(fe, he), (le.litHtmlVersions ?? (le.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new he(e.insertBefore(ce(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class ue extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(t, this.renderRoot, this.renderOptions);
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
    return Q;
  }
}
var bt;
ue._$litElement$ = !0, ue.finalized = !0, (bt = G.litElementHydrateSupport) == null || bt.call(G, { LitElement: ue });
const ze = G.litElementPolyfillSupport;
ze == null || ze({ LitElement: ue });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = { attribute: !0, type: String, converter: Te, reflect: !1, hasChanged: We }, yr = (r = pr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(v) {
      const p = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(u, p, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(v) {
      const p = this[u];
      e.call(this, v), this.requestUpdate(u, p, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function q(r) {
  return (e, t) => typeof t == "object" ? yr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var vr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, k = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? gr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && vr(e, t, s), s;
};
const Me = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "✕"
}, vt = {
  info: "var(--uiv-color-info, #0ea5e9)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)"
}, gt = {
  info: "rgba(14, 165, 233, 0.12)",
  success: "rgba(16, 185, 129, 0.12)",
  warning: "rgba(245, 158, 11, 0.14)",
  error: "rgba(239, 68, 68, 0.12)"
}, mt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:10px;background:rgba(14,165,233,0.12);border:1px solid rgba(14,165,233,0.3);font-family:inherit;box-sizing:border-box;'>",
    "<div style='flex:none;width:22px;height:22px;border-radius:50%;background:#0ea5e9;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>i</div>",
    "<div style='flex:1;'>",
    "<div style='font-weight:700;font-size:14px;color:#0c4a6e;margin-bottom:2px;'>{{display:title}}</div>",
    "<div style='font-size:13px;color:#0369a1;'>This is an informational alert message.</div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "title",
  badges: ["Feedback", "Alert"]
};
function _t(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends ue {
  constructor() {
    super(...arguments), this.message = "This is an alert message with helpful context.", this.title = "Heads up", this.type = "info", this.variant = "soft", this.dismissible = !1, this.showIcon = !0, this.hiddenState = !1;
  }
  static getStudioTemplate(r) {
    var ye, ve, ge, me, _e, be, $e, we, Ee, Ae, Se, Oe, ee, Z, te, re, ne, ie;
    if (!r) return mt;
    const e = (((ye = r.props) == null ? void 0 : ye.type) ?? ((ge = (ve = r.studio) == null ? void 0 : ve.props) == null ? void 0 : ge.type)) || "info", t = (((me = r.props) == null ? void 0 : me.variant) ?? ((be = (_e = r.studio) == null ? void 0 : _e.props) == null ? void 0 : be.variant)) || "soft", n = (($e = r.props) == null ? void 0 : $e.showIcon) ?? ((Ee = (we = r.studio) == null ? void 0 : we.props) == null ? void 0 : Ee.showIcon) ?? !0, s = ((Ae = r.props) == null ? void 0 : Ae.dismissible) ?? ((Oe = (Se = r.studio) == null ? void 0 : Se.props) == null ? void 0 : Oe.dismissible) ?? !1, l = _t(((ee = r.props) == null ? void 0 : ee.title) ?? ((te = (Z = r.studio) == null ? void 0 : Z.props) == null ? void 0 : te.title) ?? ""), u = _t(
      ((re = r.props) == null ? void 0 : re.message) ?? ((ie = (ne = r.studio) == null ? void 0 : ne.props) == null ? void 0 : ie.message) ?? "This is an alert message."
    ), v = vt[e] || vt.info, p = gt[e] || gt.info, E = Me[e] || Me.info;
    let $ = p, _ = `1px solid ${v}`, S = "var(--uiv-text-color, #1f2937)", R = v, I = "#ffffff";
    t === "solid" ? ($ = v, _ = `1px solid ${v}`, S = "#ffffff", R = "rgba(255,255,255,0.25)", I = "#ffffff") : t === "outline" && ($ = "var(--uiv-surface-color, #ffffff)", _ = `1px solid ${v}`, S = "var(--uiv-text-color, #1f2937)");
    const j = n ? `<div style='flex:none;width:22px;height:22px;border-radius:50%;background:${R};color:${I};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>${E}</div>` : "", Y = s ? `<div style='flex:none;color:${S};opacity:0.6;font-size:15px;font-weight:700;cursor:pointer;'>✕</div>` : "", pe = l ? `<div style='font-weight:700;font-size:14px;color:${S};margin-bottom:2px;'>${l}</div>` : "";
    return {
      ...mt,
      templateHtml: [
        `<div style='display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:10px;background:${$};border:${_};font-family:inherit;box-sizing:border-box;'>`,
        j,
        `<div style='flex:1;'>${pe}<div style='font-size:13px;color:${S};opacity:${t === "solid" ? "0.95" : "0.85"};'>${u}</div></div>`,
        Y,
        "</div>"
      ].join("")
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get messageConfig() {
    return this.message;
  }
  set messageConfig(r) {
    this.message = r;
  }
  get typeConfig() {
    return this.type;
  }
  set typeConfig(r) {
    this.type = r || "info";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "soft";
  }
  get dismissibleConfig() {
    return this.dismissible;
  }
  set dismissibleConfig(r) {
    this.dismissible = !!r;
  }
  get showIconConfig() {
    return this.showIcon;
  }
  set showIconConfig(r) {
    this.showIcon = !!r;
  }
  handleDismiss() {
    this.hiddenState = !0, this.dispatchEvent(
      new CustomEvent("on-dismiss", {
        detail: { type: this.type, title: this.title },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = Me[this.type] || Me.info;
    return Ce`
      <div class="alert type-${this.type} variant-${this.variant}" role="alert">
        ${this.showIcon ? Ce`<div class="icon">${r}</div>` : ""}
        <div class="body">
          ${this.title ? Ce`<div class="title">${this.title}</div>` : ""}
          <div class="message">${this.message}</div>
        </div>
        ${this.dismissible ? Ce`<button class="close" aria-label="Dismiss" @click=${this.handleDismiss}>&#10005;</button>` : ""}
      </div>
    `;
  }
};
T.styles = Zt`
    :host {
      display: block;
      width: 100%;
      --al-text: var(--uiv-text-color, #1f2937);
      --al-surface: var(--uiv-surface-color, #ffffff);
      --al-radius: var(--uiv-border-radius, 10px);
    }

    .alert {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: var(--al-radius);
      font-family: inherit;
      box-sizing: border-box;
      border: 1px solid transparent;
      transition: all 0.2s ease;
    }

    /* type accents */
    .type-info { --al-accent: var(--uiv-color-info, #0ea5e9); --al-tint: rgba(14, 165, 233, 0.12); }
    .type-success { --al-accent: var(--uiv-color-success, #10b981); --al-tint: rgba(16, 185, 129, 0.12); }
    .type-warning { --al-accent: var(--uiv-color-warning, #f59e0b); --al-tint: rgba(245, 158, 11, 0.14); }
    .type-error { --al-accent: var(--uiv-color-danger, #ef4444); --al-tint: rgba(239, 68, 68, 0.12); }

    /* variants */
    .variant-soft {
      background: var(--al-tint);
      border-color: color-mix(in srgb, var(--al-accent) 35%, transparent);
      color: var(--al-text);
    }
    .variant-outline {
      background: var(--al-surface);
      border-color: var(--al-accent);
      color: var(--al-text);
    }
    .variant-solid {
      background: var(--al-accent);
      border-color: var(--al-accent);
      color: #ffffff;
    }

    .icon {
      flex: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1;
    }
    .variant-soft .icon,
    .variant-outline .icon {
      background: var(--al-accent);
      color: #ffffff;
    }
    .variant-solid .icon {
      background: rgba(255, 255, 255, 0.25);
      color: #ffffff;
    }

    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-weight: 700;
      font-size: 0.875rem;
      margin-bottom: 2px;
    }
    .message {
      font-size: 0.82rem;
      line-height: 1.45;
      opacity: 0.9;
    }
    .variant-soft .title,
    .variant-outline .title { color: var(--al-accent); }

    .close {
      flex: none;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1;
      color: inherit;
      opacity: 0.6;
      padding: 2px;
      transition: opacity 0.2s ease;
    }
    .close:hover { opacity: 1; }

    :host([hidden-state]) { display: none; }
  `;
k([
  q({ type: String })
], T.prototype, "message", 2);
k([
  q({ type: String })
], T.prototype, "title", 2);
k([
  q({ type: String })
], T.prototype, "type", 2);
k([
  q({ type: String })
], T.prototype, "variant", 2);
k([
  q({ type: Boolean })
], T.prototype, "dismissible", 2);
k([
  q({ type: Boolean, attribute: "show-icon" })
], T.prototype, "showIcon", 2);
k([
  q({ type: Boolean, reflect: !0, attribute: "hidden-state" })
], T.prototype, "hiddenState", 2);
k([
  F({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
k([
  F({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXTAREA,
    displayLabel: "Message",
    fieldMappings: "message"
  })
], T.prototype, "messageConfig", 1);
k([
  F({
    attributeType: H.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Info", value: "info" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
], T.prototype, "typeConfig", 1);
k([
  F({
    attributeType: H.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Soft", value: "soft" },
      { label: "Solid", value: "solid" },
      { label: "Outline", value: "outline" }
    ]
  })
], T.prototype, "variantConfig", 1);
k([
  F({
    attributeType: H.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Dismissible",
    fieldMappings: "dismissible"
  })
], T.prototype, "dismissibleConfig", 1);
k([
  F({
    attributeType: H.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Show Icon",
    fieldMappings: "showIcon"
  })
], T.prototype, "showIconConfig", 1);
k([
  F({
    attributeType: H.EVENT,
    displayLabel: "On Dismiss",
    eventTrigger: "on-dismiss"
  })
], T.prototype, "handleDismiss", 1);
T = k([
  Gt({
    name: "zero-alert",
    version: "1.0.0",
    title: "Alert",
    elementSelector: "zero-alert",
    group: "Feedback",
    iconName: "alert-icon.png"
  }),
  Vt()
], T);
export {
  T as ZeroAlert,
  mt as studioTemplate
};
