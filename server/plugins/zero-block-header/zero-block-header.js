var Ht = Object.defineProperty;
var jt = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var tt = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var nt;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof rt == "object" ? rt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, A) {
      return function(w, g) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: g }), A && A(w, g);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return Te(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Te({ __proto__: null });
      } : function() {
        return Te({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, g = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), U = typeof WeakMap == "function" ? WeakMap : Rt(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, B = Mt(), ee = Tt(B);
    function he(i, o, a, h) {
      if (m(a)) {
        if (!Je(i))
          throw new TypeError();
        if (!qe(o))
          throw new TypeError();
        return be(i, o);
      } else {
        if (!Je(i))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(h) && !m(h) && !Y(h))
          throw new TypeError();
        return Y(h) && (h = void 0), a = H(a), $t(i, o, a, h);
      }
    }
    e("decorate", he);
    function de(i, o) {
      function a(h, v) {
        if (!C(h))
          throw new TypeError();
        if (!m(v) && !Ot(v))
          throw new TypeError();
        Be(i, o, h, v);
      }
      return a;
    }
    e("metadata", de);
    function ce(i, o, a, h) {
      if (!C(a))
        throw new TypeError();
      return m(h) || (h = H(h)), Be(i, o, a, h);
    }
    e("defineMetadata", ce);
    function fe(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return m(a) || (a = H(a)), De(i, o, a);
    }
    e("hasMetadata", fe);
    function pe(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return m(a) || (a = H(a)), Oe(i, o, a);
    }
    e("hasOwnMetadata", pe);
    function ye(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return m(a) || (a = H(a)), Le(i, o, a);
    }
    e("getMetadata", ye);
    function ve(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return m(a) || (a = H(a)), ze(i, o, a);
    }
    e("getOwnMetadata", ve);
    function _e(i, o) {
      if (!C(i))
        throw new TypeError();
      return m(o) || (o = H(o)), Ge(i, o);
    }
    e("getMetadataKeys", _e);
    function me(i, o) {
      if (!C(i))
        throw new TypeError();
      return m(o) || (o = H(o)), We(i, o);
    }
    e("getOwnMetadataKeys", me);
    function ge(i, o, a) {
      if (!C(o))
        throw new TypeError();
      if (m(a) || (a = H(a)), !C(o))
        throw new TypeError();
      m(a) || (a = H(a));
      var h = te(
        o,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", ge);
    function be(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var h = i[a], v = h(o);
        if (!m(v) && !Y(v)) {
          if (!qe(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(i, o, a, h) {
      for (var v = i.length - 1; v >= 0; --v) {
        var T = i[v], M = T(o, a, h);
        if (!m(M) && !Y(M)) {
          if (!C(M))
            throw new TypeError();
          h = M;
        }
      }
      return h;
    }
    function De(i, o, a) {
      var h = Oe(i, o, a);
      if (h)
        return !0;
      var v = Me(o);
      return Y(v) ? !1 : De(i, v, a);
    }
    function Oe(i, o, a) {
      var h = te(
        o,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : Fe(h.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Le(i, o, a) {
      var h = Oe(i, o, a);
      if (h)
        return ze(i, o, a);
      var v = Me(o);
      if (!Y(v))
        return Le(i, v, a);
    }
    function ze(i, o, a) {
      var h = te(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(h))
        return h.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Be(i, o, a, h) {
      var v = te(
        a,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, h);
    }
    function Ge(i, o) {
      var a = We(i, o), h = Me(i);
      if (h === null)
        return a;
      var v = Ge(h, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var T = new k(), M = [], b = 0, d = a; b < d.length; b++) {
        var c = d[b], f = T.has(c);
        f || (T.add(c), M.push(c));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var c = $[y], f = T.has(c);
        f || (T.add(c), M.push(c));
      }
      return M;
    }
    function We(i, o) {
      var a = te(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Ve(i) {
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
    function Y(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
      switch (Ve(i)) {
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
      var a = "string", h = Ze(i, l);
      if (h !== void 0) {
        var v = h.call(i, a);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, o) {
      var a, h;
      {
        var v = i.toString;
        if ($e(v)) {
          var h = v.call(i);
          if (!C(h))
            return h;
        }
        var a = i.valueOf;
        if ($e(a)) {
          var h = a.call(i);
          if (!C(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Fe(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function H(i) {
      var o = At(i);
      return wt(o) ? o : St(o);
    }
    function Je(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function $e(i) {
      return typeof i == "function";
    }
    function qe(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Ve(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ce(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ze(i, o) {
      var a = i[o];
      if (a != null) {
        if (!$e(a))
          throw new TypeError();
        return a;
      }
    }
    function Ye(i) {
      var o = Ze(i, u);
      if (!$e(o))
        throw new TypeError();
      var a = o.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function Xe(i) {
      return i.value;
    }
    function Qe(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Ke(i) {
      var o = i.return;
      o && o.call(i);
    }
    function Me(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var v = h.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ct() {
      var i;
      !m(j) && typeof t.Reflect < "u" && !(j in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, a, h, v = new U(), T = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return T;
      function M(y) {
        if (!Object.isExtensible(T))
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
            h === void 0 && (h = new k()), h.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!m(o)) {
          if (o.isProviderFor(y, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, $))
              return o;
            if (!m(h))
              for (var E = Ye(h); ; ) {
                var S = Qe(E);
                if (!S)
                  return;
                var N = Xe(S);
                if (N.isProviderFor(y, $))
                  return Ke(E), N;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, $))
          return i;
      }
      function d(y, $) {
        var E = v.get(y), S;
        return m(E) || (S = E.get($)), m(S) && (S = b(y, $), m(S) || (m(E) && (E = new O(), v.set(y, E)), E.set($, S))), S;
      }
      function c(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(h) && h.has(y);
      }
      function f(y, $, E) {
        if (!c(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var N = v.get(y);
          m(N) && (N = new O(), v.set(y, N)), N.set($, E);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !m(j) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[j]), m(i) && (i = Ct()), !m(j) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var o = new U(), a = {
        isProviderFor: function(c, f) {
          var y = o.get(c);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return B.registerProvider(a), a;
      function h(c, f, y) {
        var $ = o.get(c), E = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new O(), o.set(c, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new O(), $.set(f, S), !i.setProvider(c, f, a))
            throw $.delete(f), E && o.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(c, f, y) {
        var $ = h(
          f,
          y,
          /*Create*/
          !1
        );
        return m($) ? !1 : Fe($.has(c));
      }
      function T(c, f, y) {
        var $ = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(c);
      }
      function M(c, f, y, $) {
        var E = h(
          y,
          $,
          /*Create*/
          !0
        );
        E.set(c, f);
      }
      function b(c, f) {
        var y = [], $ = h(
          c,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var E = $.keys(), S = Ye(E), N = 0; ; ) {
          var et = Qe(S);
          if (!et)
            return y.length = N, y;
          var Ut = Xe(et);
          try {
            y[N] = Ut;
          } catch (Nt) {
            try {
              Ke(S);
            } finally {
              throw Nt;
            }
          }
          N++;
        }
      }
      function d(c, f, y) {
        var $ = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(c))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, h = i.getOwnMetadata, v = i.getOwnMetadataKeys, T = i.deleteMetadata, M = new U(), b = {
        isProviderFor: function(d, c) {
          var f = M.get(d);
          return !m(f) && f.has(c) ? !0 : v(d, c).length ? (m(f) && (f = new k(), M.set(d, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: T
      };
      return b;
    }
    function te(i, o, a) {
      var h = B.getProvider(i, o);
      if (!m(h))
        return h;
      if (a) {
        if (B.setProvider(i, o, ee))
          return ee;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, c, f) {
            this._index = 0, this._keys = d, this._values = c, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var c = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, b;
        }()
      ), h = (
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
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, b.prototype.set = function(d, c) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, b.prototype.delete = function(d) {
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, y = c + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Ce(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, T);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, c) {
            if (!Ce(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Ce(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return h;
      function v(b, d) {
        return b;
      }
      function T(b, d) {
        return d;
      }
      function M(b, d) {
        return [b, d];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new O();
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
      var i = 16, o = w.create(), a = h();
      return (
        /** @class */
        function() {
          function d() {
            this._key = h();
          }
          return d.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, d.prototype.set = function(c, f) {
            var y = v(
              c,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = h();
          }, d;
        }()
      );
      function h() {
        var d;
        do
          d = "@@WeakMap@@" + b();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, c) {
        if (!n.call(d, a)) {
          if (!c)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function T(d, c) {
        for (var f = 0; f < c; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : T(c, d), c;
        }
        return T(new Array(d), d);
      }
      function b() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var c = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function Te(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(nt || (nt = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Dt(r) {
  return function(e) {
    if (It(r)) {
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
  return Dt(r);
}
function zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        tt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const w = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((O) => w.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
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
function Gt(r) {
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
function q(r) {
  return Gt(r);
}
var I;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(I || (I = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const we = globalThis, Ne = we.ShadowRoot && (we.ShadyCSS === void 0 || we.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, He = Symbol(), it = /* @__PURE__ */ new WeakMap();
let vt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== He) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ne && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = it.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && it.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new vt(typeof r == "string" ? r : r + "", void 0, He), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new vt(t, r, He);
}, Ft = (r, e) => {
  if (Ne) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = we.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, st = Ne ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Xt, getPrototypeOf: Qt } = Object, z = globalThis, ot = z.trustedTypes, Kt = ot ? ot.emptyScript : "", Pe = z.reactiveElementPolyfillSupport, ne = (r, e) => r, Ae = { toAttribute(r, e) {
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
} }, je = (r, e) => !Jt(r, e), at = { attribute: !0, type: String, converter: Ae, reflect: !1, useDefault: !1, hasChanged: je };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = at) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? at;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Xt(t)];
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
      for (const s of n) t.unshift(st(s));
    } else e !== void 0 && t.push(st(e));
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Ae).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : Ae;
      this._$Em = s;
      const A = p.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? je)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ne("elementProperties")] = /* @__PURE__ */ new Map(), X[ne("finalized")] = /* @__PURE__ */ new Map(), Pe == null || Pe({ ReactiveElement: X }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, lt = (r) => r, Ee = ie.trustedTypes, ut = Ee ? Ee.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, _t = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, mt = "?" + L, er = `<${mt}>`, J = document, oe = () => J.createComment(""), ae = (r) => r === null || typeof r != "object" && typeof r != "function", Ie = Array.isArray, tr = (r) => Ie(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", xe = `[ 	
\f\r]`, re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ht = /-->/g, dt = />/g, G = RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, ft = /"/g, gt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ke = rr(1), Q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), V = J.createTreeWalker(J, 129);
function bt(r, e) {
  if (!Ie(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ut !== void 0 ? ut.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = re;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let A, w, g = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, w = u.exec(p), w !== null); ) O = u.lastIndex, u === re ? w[1] === "!--" ? u = ht : w[1] !== void 0 ? u = dt : w[2] !== void 0 ? (gt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = G) : w[3] !== void 0 && (u = G) : u === G ? w[0] === ">" ? (u = s ?? re, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? G : w[3] === '"' ? ft : ct) : u === ft || u === ct ? u = G : u === ht || u === dt ? u = re : (u = G, s = void 0);
    const k = u === G && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === re ? p + er : g >= 0 ? (n.push(A), p.slice(0, g) + _t + p.slice(g) + L + k) : p + L + (g === -2 ? _ : k);
  }
  return [bt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class le {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [A, w] = nr(e, t);
    if (this.el = le.createElement(A, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = V.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(_t)) {
          const O = w[u++], k = s.getAttribute(g).split(L), U = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: U[2], strings: k, ctor: U[1] === "." ? sr : U[1] === "?" ? or : U[1] === "@" ? ar : Se }), s.removeAttribute(g);
        } else g.startsWith(L) && (p.push({ type: 6, index: l }), s.removeAttribute(g));
        if (gt.test(s.tagName)) {
          const g = s.textContent.split(L), O = g.length - 1;
          if (O > 0) {
            s.textContent = Ee ? Ee.emptyScript : "";
            for (let k = 0; k < O; k++) s.append(g[k], oe()), V.nextNode(), p.push({ type: 2, index: ++l });
            s.append(g[O], oe());
          }
        }
      } else if (s.nodeType === 8) if (s.data === mt) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(L, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += L.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = J.createElement("template");
    return n.innerHTML = e, n;
  }
}
function K(r, e, t = r, n) {
  var u, _;
  if (e === Q) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ae(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = K(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? J).importNode(t, !0);
    V.currentNode = s;
    let l = V.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ue(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = V.nextNode(), u++);
    }
    return V.currentNode = J, s;
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
    e = K(this, e, t), ae(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(J.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = le.createElement(bt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = pt.get(e.strings);
    return t === void 0 && pt.set(e.strings, t = new le(e)), t;
  }
  k(e) {
    Ie(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ue(this.O(oe()), this.O(oe()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = lt(e).nextSibling;
      lt(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Se {
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
    if (l === void 0) e = K(this, e, t, 0), u = !ae(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const _ = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = K(this, _[n + p], t, p), A === Q && (A = this._$AH[p]), u || (u = !ae(A) || A !== this._$AH[p]), A === P ? e = P : e !== P && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends Se {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class or extends Se {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ar extends Se {
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
class lr {
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
const Re = ie.litHtmlPolyfillSupport;
Re == null || Re(le, ue), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ue(e.insertBefore(oe(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class se extends X {
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
    return Q;
  }
}
var yt;
se._$litElement$ = !0, se.finalized = !0, (yt = F.litElementHydrateSupport) == null || yt.call(F, { LitElement: se });
const Ue = F.litElementPolyfillSupport;
Ue == null || Ue({ LitElement: se });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: Ae, reflect: !1, hasChanged: je }, dr = (r = hr, e, t) => {
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
function Z(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var cr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && cr(e, t, s), s;
};
const _r = {
  kind: "generic",
  templateHtml: [
    "<header style='display:flex;align-items:center;justify-content:between;padding:16px 24px;border-bottom:1px solid #e5e7eb;background:#ffffff;font-family:inherit;'>",
    "<div style='font-weight:bold;font-size:18px;'>{{props:logo}}</div>",
    "<div style='display:flex;gap:20px;font-size:14px;color:#4b5563;'>",
    "<span>Home</span><span>Features</span><span>Pricing</span>",
    "</div>",
    "<div style='padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Get Started</div>",
    "</header>"
  ].join(""),
  labelProp: "logo",
  badges: ["Block", "Navigation"]
};
function W(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let x = class extends se {
  constructor() {
    super(...arguments), this.logo = "BrandName", this.logoUrl = "", this.linksJson = '[{"label":"Home","href":"#"},{"label":"Features","href":"#"},{"label":"Pricing","href":"#"}]', this.ctaText = "Get Started", this.ctaUrl = "#", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var p, A, w, g, O, k, U, j, B, ee, he, de, ce, fe, pe, ye, ve, _e, me, ge, be;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-header-1.0.0></zero-block-header-1.0.0>"
      };
    const e = W(((p = r == null ? void 0 : r.props) == null ? void 0 : p.logo) ?? ((w = (A = r == null ? void 0 : r.studio) == null ? void 0 : A.props) == null ? void 0 : w.logo) ?? "BrandName"), t = W(((g = r == null ? void 0 : r.props) == null ? void 0 : g.logoUrl) ?? ((k = (O = r == null ? void 0 : r.studio) == null ? void 0 : O.props) == null ? void 0 : k.logoUrl) ?? ""), n = W(((U = r == null ? void 0 : r.props) == null ? void 0 : U.linksJson) ?? ((B = (j = r == null ? void 0 : r.studio) == null ? void 0 : j.props) == null ? void 0 : B.linksJson) ?? "[]"), s = W(((ee = r == null ? void 0 : r.props) == null ? void 0 : ee.ctaText) ?? ((de = (he = r == null ? void 0 : r.studio) == null ? void 0 : he.props) == null ? void 0 : de.ctaText) ?? "Get Started"), l = W(((ce = r == null ? void 0 : r.props) == null ? void 0 : ce.ctaUrl) ?? ((pe = (fe = r == null ? void 0 : r.studio) == null ? void 0 : fe.props) == null ? void 0 : pe.ctaUrl) ?? "#"), u = W(((ye = r == null ? void 0 : r.props) == null ? void 0 : ye.layout) ?? ((_e = (ve = r == null ? void 0 : r.studio) == null ? void 0 : ve.props) == null ? void 0 : _e.layout) ?? "layout-1"), _ = W(((me = r == null ? void 0 : r.props) == null ? void 0 : me.themeStyle) ?? ((be = (ge = r == null ? void 0 : r.studio) == null ? void 0 : ge.props) == null ? void 0 : be.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-header-1.0.0
          logo="${e}"
          logo-url="${t}"
          links-json="${n}"
          cta-text="${s}"
          cta-url="${l}"
          layout="${u}"
          theme-style="${_}"
        ></zero-block-header-1.0.0>
      `
    };
  }
  get logoConfig() {
    return this.logo;
  }
  set logoConfig(r) {
    this.logo = r;
  }
  get logoUrlConfig() {
    return this.logoUrl;
  }
  set logoUrlConfig(r) {
    this.logoUrl = r;
  }
  get linksJsonConfig() {
    return this.linksJson;
  }
  set linksJsonConfig(r) {
    this.linksJson = r;
  }
  get ctaTextConfig() {
    return this.ctaText;
  }
  set ctaTextConfig(r) {
    this.ctaText = r;
  }
  get ctaUrlConfig() {
    return this.ctaUrl;
  }
  set ctaUrlConfig(r) {
    this.ctaUrl = r;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(r) {
    this.layout = r || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(r) {
    this.themeStyle = r || "light";
  }
  parseLinks() {
    try {
      return JSON.parse(this.linksJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = [
      `theme-${this.themeStyle}`,
      `layout-${this.layout}`
    ].join(" "), e = this.parseLinks();
    return ke`
      <header class="${r}">
        <a href="#" class="brand">
          ${this.logoUrl ? ke`<img class="logo-img" src="${this.logoUrl}" alt="logo">` : ""}
          <span class="logo-text">${this.logo}</span>
        </a>

        <div class="nav-links">
          ${e.map((t) => ke`
            <a class="nav-link" href="${t.href}">${t.label}</a>
          `)}
        </div>

        <a class="action-btn" href="${this.ctaUrl}">${this.ctaText}</a>
      </header>
    `;
  }
};
x.styles = Vt`
    :host {
      display: block;
      width: 100%;
      --header-bg: var(--uiv-surface-color, #ffffff);
      --header-text: var(--uiv-text-color, #1f2937);
      --header-border: var(--uiv-border-color, #e5e7eb);
      --header-accent: var(--uiv-primary-color, #6366f1);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 5%;
      background: var(--header-bg);
      color: var(--header-text);
      border-bottom: 1px solid var(--header-border);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    /* Theme Variants */
    header.theme-dark {
      --header-bg: #111827;
      --header-text: #f9fafb;
      --header-border: #374151;
    }

    header.theme-transparent {
      background: transparent;
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: inherit;
    }

    .logo-img {
      max-height: 38px;
    }

    .logo-text {
      font-size: 1.45rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav-link {
      font-size: 0.94rem;
      font-weight: 500;
      color: inherit;
      opacity: 0.85;
      text-decoration: none;
      transition: opacity 0.2s ease, color 0.2s ease;
    }

    .nav-link:hover {
      opacity: 1;
      color: var(--header-accent);
    }

    .action-btn {
      padding: 9px 20px;
      font-size: 0.88rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--header-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .action-btn:hover {
      opacity: 0.9;
    }

    /* ─── Layouts ─── */
    header.layout-layout-2 .action-btn {
      display: none;
    }

    header.layout-layout-3 {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }

    header.layout-layout-3 .nav-links {
      justify-content: center;
      width: 100%;
    }
  `;
R([
  Z({ type: String })
], x.prototype, "logo", 2);
R([
  Z({ type: String, attribute: "logo-url" })
], x.prototype, "logoUrl", 2);
R([
  Z({ type: String, attribute: "links-json" })
], x.prototype, "linksJson", 2);
R([
  Z({ type: String, attribute: "cta-text" })
], x.prototype, "ctaText", 2);
R([
  Z({ type: String, attribute: "cta-url" })
], x.prototype, "ctaUrl", 2);
R([
  Z({ type: String })
], x.prototype, "layout", 2);
R([
  Z({ type: String, attribute: "theme-style" })
], x.prototype, "themeStyle", 2);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Logo Text",
    fieldMappings: "logo"
  })
], x.prototype, "logoConfig", 1);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Logo Image URL",
    fieldMappings: "logoUrl"
  })
], x.prototype, "logoUrlConfig", 1);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXTAREA,
    displayLabel: "Links JSON",
    fieldMappings: "linksJson"
  })
], x.prototype, "linksJsonConfig", 1);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "CTA Button Text",
    fieldMappings: "ctaText"
  })
], x.prototype, "ctaTextConfig", 1);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "CTA Redirect URL",
    fieldMappings: "ctaUrl"
  })
], x.prototype, "ctaUrlConfig", 1);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Navigation Layout",
    fieldMappings: "layout",
    optionItems: [
      { label: "Standard Navigation", value: "layout-1" },
      { label: "Minimalist Menu (No CTA)", value: "layout-2" },
      { label: "Centered Logo Column", value: "layout-3" }
    ]
  })
], x.prototype, "layoutConfig", 1);
R([
  q({
    attributeType: D.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Light Header", value: "light" },
      { label: "Dark Header", value: "dark" },
      { label: "Transparent Header", value: "transparent" }
    ]
  })
], x.prototype, "themeStyleConfig", 1);
x = R([
  Lt({
    name: "zero-block-header",
    version: "1.0.0",
    title: "Block Header",
    elementSelector: "zero-block-header",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  zt()
], x);
export {
  x as ZeroBlockHeader,
  _r as studioTemplate
};
