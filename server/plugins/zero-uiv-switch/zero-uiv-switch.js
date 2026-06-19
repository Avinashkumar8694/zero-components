var It = Object.defineProperty;
var jt = (r, e, t) => e in r ? It(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Be;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, A) {
      return function($, b) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: b }), A && A($, b);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
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
    }, b = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), N = typeof WeakMap == "function" ? WeakMap : Rt(), z = s ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Ct(), Se = Pt(ie);
    function ct(i, o, a, c) {
      if (m(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return wt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !m(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = R(a), bt(i, o, a, c);
      }
    }
    e("decorate", ct);
    function ht(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!m(v) && !Ot(v))
          throw new TypeError();
        Pe(i, o, c, v);
      }
      return a;
    }
    e("metadata", ht);
    function dt(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = R(c)), Pe(i, o, a, c);
    }
    e("defineMetadata", dt);
    function ft(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Oe(i, o, a);
    }
    e("hasMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), he(i, o, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Me(i, o, a);
    }
    e("getMetadata", yt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Ce(i, o, a);
    }
    e("getOwnMetadata", vt);
    function _t(i, o) {
      if (!O(i))
        throw new TypeError();
      return m(o) || (o = R(o)), xe(i, o);
    }
    e("getMetadataKeys", _t);
    function mt(i, o) {
      if (!O(i))
        throw new TypeError();
      return m(o) || (o = R(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function gt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (m(a) || (a = R(a)), !O(o))
        throw new TypeError();
      m(a) || (a = R(a));
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", gt);
    function wt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !G(v)) {
          if (!Ue(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function bt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], M = C(o, a, c);
        if (!m(M) && !G(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Oe(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return !0;
      var v = fe(o);
      return G(v) ? !1 : Oe(i, v, a);
    }
    function he(i, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Me(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return Ce(i, o, a);
      var v = fe(o);
      if (!G(v))
        return Me(i, v, a);
    }
    function Ce(i, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pe(i, o, a, c) {
      var v = q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xe(i, o) {
      var a = ke(i, o), c = fe(i);
      if (c === null)
        return a;
      var v = xe(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new k(), M = [], g = 0, h = a; g < h.length; g++) {
        var d = h[g], f = C.has(d);
        f || (C.add(d), M.push(d));
      }
      for (var y = 0, w = v; y < w.length; y++) {
        var d = w[y], f = C.has(d);
        f || (C.add(d), M.push(d));
      }
      return M;
    }
    function ke(i, o) {
      var a = q(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Te(i) {
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
    function G(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
      switch (Te(i)) {
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
      var a = "string", c = Ie(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (se(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (se(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function R(i) {
      var o = At(i);
      return $t(o) ? o : St(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function se(i) {
      return typeof i == "function";
    }
    function Ue(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Te(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ie(i, o) {
      var a = i[o];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function je(i) {
      var o = Ie(i, u);
      if (!se(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function He(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function fe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || o !== b)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Mt() {
      var i;
      !m(z) && typeof t.Reflect < "u" && !(z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var o, a, c, v = new N(), C = {
        registerProvider: M,
        getProvider: h,
        setProvider: f
      };
      return C;
      function M(y) {
        if (!Object.isExtensible(C))
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
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function g(y, w) {
        if (!m(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!m(c))
              for (var E = je(c); ; ) {
                var S = He(E);
                if (!S)
                  return;
                var T = De(S);
                if (T.isProviderFor(y, w))
                  return Le(E), T;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, w))
          return i;
      }
      function h(y, w) {
        var E = v.get(y), S;
        return m(E) || (S = E.get(w)), m(S) && (S = g(y, w), m(S) || (m(E) && (E = new x(), v.set(y, E)), E.set(w, S))), S;
      }
      function d(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(c) && c.has(y);
      }
      function f(y, w, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(y, w);
        if (S !== E) {
          if (!m(S))
            return !1;
          var T = v.get(y);
          m(T) && (T = new x(), v.set(y, T)), T.set(w, E);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !m(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[z]), m(i) && (i = Mt()), !m(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, z, {
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
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return ie.registerProvider(a), a;
      function c(d, f, y) {
        var w = o.get(d), E = !1;
        if (m(w)) {
          if (!y)
            return;
          w = new x(), o.set(d, w), E = !0;
        }
        var S = w.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new x(), w.set(f, S), !i.setProvider(d, f, a))
            throw w.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Re(w.has(d));
      }
      function C(d, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(d);
      }
      function M(d, f, y, w) {
        var E = c(
          y,
          w,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function g(d, f) {
        var y = [], w = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return y;
        for (var E = w.keys(), S = je(E), T = 0; ; ) {
          var ze = He(S);
          if (!ze)
            return y.length = T, y;
          var Nt = De(ze);
          try {
            y[T] = Nt;
          } catch (Ut) {
            try {
              Le(S);
            } finally {
              throw Ut;
            }
          }
          T++;
        }
      }
      function h(d, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(d))
          return !1;
        if (w.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function xt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new N(), g = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !m(f) && f.has(d) ? !0 : v(h, d).length ? (m(f) && (f = new k(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function q(i, o, a) {
      var c = ie.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (ie.setProvider(i, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function g(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, g;
        }()
      ), c = (
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
          }), g.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, g.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, g.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, de(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(h, d) {
            if (!de(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (de(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, h) {
        return g;
      }
      function C(g, h) {
        return h;
      }
      function M(g, h) {
        return [g, h];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new x();
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
      var i = 16, o = $.create(), a = c();
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
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
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
          h = "@@WeakMap@@" + g();
        while ($.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: $.create() });
        }
        return h[a];
      }
      function C(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : C(d, h), d;
        }
        return C(new Array(h), h);
      }
      function g() {
        var h = M(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Be || (Be = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (Dt(r)) {
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
function Lt(r) {
  return Ht(r);
}
function zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ge(this, "_stylesApplied", !1);
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
          const $ = new CSSStyleSheet(), b = (A = l.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((x) => $.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const b = $.cloneNode(!0);
          p.appendChild(b);
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
function Wt(r) {
  return function(e, t) {
    try {
      Gt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
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
function ge(r) {
  return Wt(r);
}
var Q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(Q || (Q = {}));
var K;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(K || (K = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, we = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, be = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Bt = (r) => new st(typeof r == "string" ? r : r + "", void 0, be), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new st(t, r, be);
}, Ft = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Bt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, I = globalThis, qe = I.trustedTypes, Kt = qe ? qe.emptyScript : "", ye = I.reactiveElementPolyfillSupport, X = (r, e) => r, ae = { toAttribute(r, e) {
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
} }, $e = (r, e) => !qt(r, e), Ze = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Xt(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Jt(t)];
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
      for (const s of n) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ae;
      this._$Em = s;
      const A = p.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? $e)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[X("elementProperties")] = /* @__PURE__ */ new Map(), W[X("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: W }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, Xe = (r) => r, le = Y.trustedTypes, Ye = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ot = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + U, er = `<${at}>`, L = document, ee = () => L.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, tr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, j = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = rr(1), B = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ut(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Z;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let A, $, b = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, $ = u.exec(p), $ !== null); ) x = u.lastIndex, u === Z ? $[1] === "!--" ? u = Je : $[1] !== void 0 ? u = Qe : $[2] !== void 0 ? (lt.test($[2]) && (s = RegExp("</" + $[2], "g")), u = j) : $[3] !== void 0 && (u = j) : u === j ? $[0] === ">" ? (u = s ?? Z, b = -1) : $[1] === void 0 ? b = -2 : (b = u.lastIndex - $[2].length, A = $[1], u = $[3] === void 0 ? j : $[3] === '"' ? et : Ke) : u === et || u === Ke ? u = j : u === Je || u === Qe ? u = Z : (u = j, s = void 0);
    const k = u === j && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === Z ? p + er : b >= 0 ? (n.push(A), p.slice(0, b) + ot + p.slice(b) + U + k) : p + U + (b === -2 ? _ : k);
  }
  return [ut(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [A, $] = nr(e, t);
    if (this.el = re.createElement(A, n), D.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = D.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(ot)) {
          const x = $[u++], k = s.getAttribute(b).split(U), N = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? sr : N[1] === "?" ? or : N[1] === "@" ? ar : ue }), s.removeAttribute(b);
        } else b.startsWith(U) && (p.push({ type: 6, index: l }), s.removeAttribute(b));
        if (lt.test(s.tagName)) {
          const b = s.textContent.split(U), x = b.length - 1;
          if (x > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let k = 0; k < x; k++) s.append(b[k], ee()), D.nextNode(), p.push({ type: 2, index: ++l });
            s.append(b[x], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === at) p.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(U, b + 1)) !== -1; ) p.push({ type: 7, index: l }), b += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = L.createElement("template");
    return n.innerHTML = e, n;
  }
}
function V(r, e, t = r, n) {
  var u, _;
  if (e === B) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = V(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    D.currentNode = s;
    let l = D.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ne(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = D.nextNode(), u++);
    }
    return D.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ne {
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
    e = V(this, e, t), te(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(ut(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ne(this.O(ee()), this.O(ee()), this, this.options)) : n = t[s], n._$AI(l), s++;
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
class ue {
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
    if (l === void 0) e = V(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== B, u && (this._$AH = e);
    else {
      const _ = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = V(this, _[n + p], t, p), A === B && (A = this._$AH[p]), u || (u = !te(A) || A !== this._$AH[p]), A === P ? e = P : e !== P && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class or extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ar extends ue {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? P) === B) return;
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
    V(this, e);
  }
}
const _e = Y.litHtmlPolyfillSupport;
_e == null || _e(re, ne), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends W {
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
    return B;
  }
}
var it;
J._$litElement$ = !0, J.finalized = !0, (it = H.litElementHydrateSupport) == null || it.call(H, { LitElement: J });
const me = H.litElementPolyfillSupport;
me == null || me({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: $e }, hr = (r = cr, e, t) => {
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
function Ee(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, ce = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && dr(e, t, s), s;
};
const pr = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
    "<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--uiv-border-color,#e2e8f0);border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>",
    "<div style='position:absolute;height:20px;width:20px;left:4px;bottom:4px;background-color:white;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,0.2);'></div>",
    "</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Switch", "Uiverse"]
};
let F = class extends J {
  constructor() {
    super(...arguments), this.theme = "ios", this.checked = !1, this.accentColor = "";
  }
  static getStudioTemplate(r) {
    var l, u, _, p;
    if (!r) return nt;
    const e = ((l = r.props) == null ? void 0 : l.checked) ?? ((u = r.studio.props) == null ? void 0 : u.checked), t = (((_ = r.props) == null ? void 0 : _.accentColor) ?? ((p = r.studio.props) == null ? void 0 : p.accentColor)) || "var(--uiv-primary-color,#6366f1)", n = e ? t : "var(--uiv-border-color,#e2e8f0)", s = e ? "translateX(22px)" : "none";
    return {
      ...nt,
      templateHtml: [
        "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
        `<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:${n};border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>`,
        `<div style='position:absolute;height:20px;width:20px;left:4px;bottom:4px;background-color:white;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,0.2);transform:${s};'></div>`,
        "</span>",
        "</div>"
      ].join("")
    };
  }
  handleChange(r) {
    const e = r.target;
    this.checked = e.checked, this.dispatchEvent(new CustomEvent("change", {
      detail: { checked: this.checked },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    var e;
    const r = (e = pr()) == null ? void 0 : e.getActiveTheme("zero-uiv-themes");
    return r ? tt`
            <style>
                ${r.getGlobalStyles()}
                ${r.getComponentStyles("switch")}
                :host {
                    --uiv-switch-accent: ${this.accentColor || (this.theme === "ios" ? "#4cd964" : "#6c63ff")};
                }
            </style>
            <label class="switch uiv-${r == null ? void 0 : r.id}-theme">
                <input type="checkbox" .checked="${this.checked}" @change="${this.handleChange}">
                <span class="slider uiv-${r == null ? void 0 : r.id}-card"></span>
            </label>
        ` : tt`<label class="switch"><input type="checkbox" .checked="${this.checked}"><span class="slider"></span></label>`;
  }
};
F.styles = Vt`
        :host {
            display: inline-block;
            --sw-p: var(--uiv-primary-color, #6366f1);
            --sw-s: var(--uiv-secondary-color, #8b5cf6);
            --sw-bg: var(--uiv-surface-color, #ffffff);
            --sw-border: var(--uiv-border-color, #e2e8f0);
            --sw-glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
            --sw-intensity: var(--uiv-glow-intensity, 1);
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 28px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--sw-border);
            transition: .4s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 34px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        input:checked + .slider {
            background-color: var(--sw-p);
            box-shadow: var(--sw-glow);
        }

        input:checked + .slider:before {
            transform: translateX(22px);
        }
    `;
ce([
  Ee({ type: String }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "IOS", value: "ios" },
      { label: "Modern", value: "modern" }
    ]
  })
], F.prototype, "theme", 2);
ce([
  Ee({ type: Boolean }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], F.prototype, "checked", 2);
ce([
  Ee({ type: String }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.COLOR_PICKER,
    displayLabel: "Accent Color",
    fieldMappings: "accentColor"
  })
], F.prototype, "accentColor", 2);
F = ce([
  Lt({
    name: "zero-uiv-switch",
    version: "1.0.0",
    title: "Unified Switch",
    elementSelector: "zero-uiv-switch",
    group: "Uiverse Switch",
    iconName: "switch-icon.png"
  }),
  zt()
], F);
export {
  F as ZeroUivSwitch,
  nt as studioTemplate
};
