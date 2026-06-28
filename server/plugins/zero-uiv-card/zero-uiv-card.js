var jt = Object.defineProperty;
var zt = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => zt(r, typeof e != "symbol" ? e + "" : e, t);
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
    function s(v, A) {
      return function(b, w) {
        Object.defineProperty(v, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
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
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), N = typeof WeakMap == "function" ? WeakMap : Ut(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Pt(), Se = Tt(ie);
    function ht(i, o, a, c) {
      if (m(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !m(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = k(a), At(i, o, a, c);
      }
    }
    e("decorate", ht);
    function ft(i, o) {
      function a(c, y) {
        if (!M(c))
          throw new TypeError();
        if (!m(y) && !xt(y))
          throw new TypeError();
        Ce(i, o, c, y);
      }
      return a;
    }
    e("metadata", ft);
    function pt(i, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return m(c) || (c = k(c)), Ce(i, o, a, c);
    }
    e("defineMetadata", pt);
    function vt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Me(i, o, a);
    }
    e("hasMetadata", vt);
    function yt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), de(i, o, a);
    }
    e("hasOwnMetadata", yt);
    function _t(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Oe(i, o, a);
    }
    e("getMetadata", _t);
    function mt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), xe(i, o, a);
    }
    e("getOwnMetadata", mt);
    function gt(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = k(o)), Pe(i, o);
    }
    e("getMetadataKeys", gt);
    function $t(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = k(o)), Te(i, o);
    }
    e("getOwnMetadataKeys", $t);
    function wt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = k(a)), !M(o))
        throw new TypeError();
      m(a) || (a = k(a));
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", wt);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(o);
        if (!m(y) && !G(y)) {
          if (!Ue(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function At(i, o, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var x = i[y], O = x(o, a, c);
        if (!m(O) && !G(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Me(i, o, a) {
      var c = de(i, o, a);
      if (c)
        return !0;
      var y = fe(o);
      return G(y) ? !1 : Me(i, y, a);
    }
    function de(i, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : ke(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var c = de(i, o, a);
      if (c)
        return xe(i, o, a);
      var y = fe(o);
      if (!G(y))
        return Oe(i, y, a);
    }
    function xe(i, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, c) {
      var y = q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Pe(i, o) {
      var a = Te(i, o), c = fe(i);
      if (c === null)
        return a;
      var y = Pe(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var x = new T(), O = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = x.has(h);
        f || (x.add(h), O.push(h));
      }
      for (var p = 0, $ = y; p < $.length; p++) {
        var h = $[p], f = x.has(h);
        f || (x.add(h), O.push(h));
      }
      return O;
    }
    function Te(i, o) {
      var a = q(
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
    function m(i) {
      return i === void 0;
    }
    function G(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, o) {
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
      var a = "string", c = De(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return Mt(i);
    }
    function Mt(i, o) {
      var a, c;
      {
        var y = i.toString;
        if (se(y)) {
          var c = y.call(i);
          if (!M(c))
            return c;
        }
        var a = i.valueOf;
        if (se(a)) {
          var c = a.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ke(i) {
      return !!i;
    }
    function Ot(i) {
      return "" + i;
    }
    function k(i) {
      var o = St(i);
      return Et(o) ? o : Ot(o);
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
    function xt(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function he(i, o) {
      return i === o || i !== i && o !== o;
    }
    function De(i, o) {
      var a = i[o];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function He(i) {
      var o = De(i, u);
      if (!se(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function je(i) {
      return i.value;
    }
    function ze(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Ie(i) {
      var o = i.return;
      o && o.call(i);
    }
    function fe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Ct() {
      var i;
      !m(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Rt(t.Reflect));
      var o, a, c, y = new N(), x = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return x;
      function O(p) {
        if (!Object.isExtensible(x))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function g(p, $) {
        if (!m(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!m(c))
              for (var E = He(c); ; ) {
                var S = ze(E);
                if (!S)
                  return;
                var R = je(S);
                if (R.isProviderFor(p, $))
                  return Ie(E), R;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, $))
          return i;
      }
      function d(p, $) {
        var E = y.get(p), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(p, $), m(S) || (m(E) && (E = new P(), y.set(p, E)), E.set($, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(p, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var R = y.get(p);
          m(R) && (R = new P(), y.set(p, R)), R.set($, E);
        }
        return !0;
      }
    }
    function Pt() {
      var i;
      return !m(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[L]), m(i) && (i = Ct()), !m(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: x,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return ie.registerProvider(a), a;
      function c(h, f, p) {
        var $ = o.get(h), E = !1;
        if (m($)) {
          if (!p)
            return;
          $ = new P(), o.set(h, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new P(), $.set(f, S), !i.setProvider(h, f, a))
            throw $.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return m($) ? !1 : ke($.has(h));
      }
      function x(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(h);
      }
      function O(h, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var p = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return p;
        for (var E = $.keys(), S = He(E), R = 0; ; ) {
          var Le = ze(S);
          if (!Le)
            return p.length = R, p;
          var Dt = je(Le);
          try {
            p[R] = Dt;
          } catch (Ht) {
            try {
              Ie(S);
            } finally {
              throw Ht;
            }
          }
          R++;
        }
      }
      function d(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Rt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, x = i.deleteMetadata, O = new N(), g = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !m(f) && f.has(h) ? !0 : y(d, h).length ? (m(f) && (f = new T(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: x
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
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
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
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, he(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, x);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!he(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (he(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function y(g, d) {
        return g;
      }
      function x(g, d) {
        return d;
      }
      function O(g, d) {
        return [g, d];
      }
    }
    function Nt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new P();
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
    function Ut() {
      var i = 16, o = b.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = y(
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
          d = "@@WeakMap@@" + g();
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: b.create() });
        }
        return d[a];
      }
      function x(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : x(h, d), h;
        }
        return x(new Array(d), d);
      }
      function g() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Be || (Be = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
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
function Gt(r) {
  return Lt(r);
}
function Wt(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((P) => b.insertRule(P.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          v.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          v.appendChild(w);
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
function ge(r) {
  return Vt(r);
}
var Q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
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
const oe = globalThis, $e = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new at(typeof r == "string" ? r : r + "", void 0, we), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new at(t, r, we);
}, Zt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, D = globalThis, qe = D.trustedTypes, tr = qe ? qe.emptyScript : "", ve = D.reactiveElementPolyfillSupport, X = (r, e) => r, ae = { toAttribute(r, e) {
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
} }, be = (r, e) => !Xt(r, e), Ze = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
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
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
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
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
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
    return Zt(e, this.constructor.elementStyles), e;
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
      const _ = n.getPropertyOptions(s), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ae;
      this._$Em = s;
      const A = v.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? be)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
        const { wrapped: _ } = u, v = this[l];
        _ !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[X("elementProperties")] = /* @__PURE__ */ new Map(), W[X("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: W }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, Xe = (r) => r, le = Y.trustedTypes, Ye = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + U, rr = `<${ut}>`, I = document, ee = () => I.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, nr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, H = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ct = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = ir(1), B = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), j = I.createTreeWalker(I, 129);
function dt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Z;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let A, b, w = -1, P = 0;
    for (; P < v.length && (u.lastIndex = P, b = u.exec(v), b !== null); ) P = u.lastIndex, u === Z ? b[1] === "!--" ? u = Je : b[1] !== void 0 ? u = Qe : b[2] !== void 0 ? (ct.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = H) : b[3] !== void 0 && (u = H) : u === H ? b[0] === ">" ? (u = s ?? Z, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? H : b[3] === '"' ? et : Ke) : u === et || u === Ke ? u = H : u === Je || u === Qe ? u = Z : (u = H, s = void 0);
    const T = u === H && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === Z ? v + rr : w >= 0 ? (n.push(A), v.slice(0, w) + lt + v.slice(w) + U + T) : v + U + (w === -2 ? _ : T);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, v = this.parts, [A, b] = sr(e, t);
    if (this.el = re.createElement(A, n), j.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = j.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(lt)) {
          const P = b[u++], T = s.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(P);
          v.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? ar : N[1] === "?" ? lr : N[1] === "@" ? ur : ue }), s.removeAttribute(w);
        } else w.startsWith(U) && (v.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ct.test(s.tagName)) {
          const w = s.textContent.split(U), P = w.length - 1;
          if (P > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let T = 0; T < P; T++) s.append(w[T], ee()), j.nextNode(), v.push({ type: 2, index: ++l });
            s.append(w[P], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) v.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) v.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = I.createElement("template");
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? I).importNode(t, !0);
    j.currentNode = s;
    let l = j.nextNode(), u = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let A;
        v.type === 2 ? A = new ne(l, l.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (A = new cr(l, this, e)), this._$AV.push(A), v = n[++_];
      }
      u !== (v == null ? void 0 : v.index) && (l = j.nextNode(), u++);
    }
    return j.currentNode = I, s;
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
    e = V(this, e, t), te(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(I.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), _ = u.u(this.options);
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
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = V(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== B, u && (this._$AH = e);
    else {
      const _ = e;
      let v, A;
      for (e = l[0], v = 0; v < l.length - 1; v++) A = V(this, _[n + v], t, v), A === B && (A = this._$AH[v]), u || (u = !te(A) || A !== this._$AH[v]), A === C ? e = C : e !== C && (e += (A ?? "") + l[v + 1]), this._$AH[v] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class lr extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ur extends ue {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? C) === B) return;
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
    V(this, e);
  }
}
const _e = Y.litHtmlPolyfillSupport;
_e == null || _e(re, ne), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
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
const z = globalThis;
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
    return B;
  }
}
var ot;
J._$litElement$ = !0, J.finalized = !0, (ot = z.litElementHydrateSupport) == null || ot.call(z, { LitElement: J });
const me = z.litElementPolyfillSupport;
me == null || me({ LitElement: J });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: be }, fr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, v, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(_) {
      const v = this[u];
      e.call(this, _), this.requestUpdate(u, v, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ee(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, ce = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "card",
  slots: [
    { id: "header", label: "Card Header", dropzone: !0, accepts: [] },
    { id: "default", label: "Card Content", dropzone: !0, accepts: [] },
    { id: "footer", label: "Card Footer", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='width:320px;min-height:220px;padding:32px;border-radius:16px;display:flex;flex-direction:column;gap:20px;background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e2e8f0);box-shadow:var(--uiv-shadow-depth,0 4px 6px -1px rgba(0,0,0,0.1));box-sizing:border-box;'>",
    "<zero-studio-slot name='header'></zero-studio-slot>",
    "<h3 style='font-size:1.5rem;font-weight:800;margin:0;color:var(--uiv-primary-color,#6366f1);letter-spacing:-0.02em;'>{{display:title}}</h3>",
    "<div style='font-size:1rem;line-height:1.7;color:var(--uiv-text-color,#1e293b);opacity:0.9;'>",
    "{{display:content}}",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>",
    "<zero-studio-slot name='footer'></zero-studio-slot>",
    "</div>"
  ].join(""),
  titleProp: "title",
  badges: ["Card", "Container"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let F = class extends J {
  constructor() {
    super(...arguments), this.theme = "modern", this.title = "Card Title", this.content = "";
  }
  static getStudioTemplate(r) {
    if (!r) return it;
    const e = st(r.studio.display.title || "Card Title"), t = st(r.studio.display.content || "");
    return {
      ...it,
      templateHtml: [
        "<div style='width:320px;min-height:220px;padding:32px;border-radius:16px;display:flex;flex-direction:column;gap:20px;background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e2e8f0);box-shadow:var(--uiv-shadow-depth,0 4px 6px -1px rgba(0,0,0,0.1));box-sizing:border-box;'>",
        "<zero-studio-slot name='header'></zero-studio-slot>",
        `<h3 style='font-size:1.5rem;font-weight:800;margin:0;color:var(--uiv-primary-color,#6366f1);letter-spacing:-0.02em;'>${e}</h3>`,
        "<div style='font-size:1rem;line-height:1.7;color:var(--uiv-text-color,#1e293b);opacity:0.9;'>",
        t,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "<zero-studio-slot name='footer'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = nt()) == null ? void 0 : e.getActiveTheme("zero-uiv-themes");
    return r ? tt`
            <style>
                ${r.getGlobalStyles()}
                ${r.getComponentStyles("card")}
            </style>
            <div class="card uiv-${r.id}-theme uiv-${r.id}-card ${this.theme}" role="region" aria-label="${this.title}">
                <slot name="header"></slot>
                <h3 class="title uiv-${r.id}-text">${this.title}</h3>
                <div class="content uiv-${r.id}-text-secondary">
                    <slot>${this.content}</slot>
                </div>
                <slot name="footer"></slot>
            </div>
        ` : tt`<div class="card ${this.theme}"></div>`;
  }
};
F.styles = qt`
        :host {
            display: inline-block;
            perspective: 1000px;
        }

        .card {
            width: 320px;
            min-height: 220px;
            padding: 32px;
            border-radius: 16px;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: var(--uiv-surface-color, #fff);
            border: 1px solid var(--uiv-border-color, #e2e8f0);
            box-shadow: var(--uiv-shadow-depth);
        }

        .title {
            font-size: 1.5rem;
            font-weight: 800;
            margin: 0;
            color: var(--uiv-primary-color);
            letter-spacing: -0.02em;
        }

        .content {
            font-size: 1rem;
            line-height: 1.7;
            color: var(--uiv-text-color);
            opacity: 0.9;
        }

        /* theme specifics */
        .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        .cyber {
            background: #1a1a1a;
            border: 2px solid #ff003c;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
            box-shadow: 5px 5px 0 #00e6f6;
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
      { label: "Glass", value: "glass" },
      { label: "Modern", value: "modern" },
      { label: "Cyber", value: "cyber" }
    ]
  })
], F.prototype, "theme", 2);
ce([
  Ee({ type: String }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], F.prototype, "title", 2);
ce([
  Ee({ type: String }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXTAREA,
    displayLabel: "Content",
    fieldMappings: "content"
  })
], F.prototype, "content", 2);
F = ce([
  Gt({
    name: "zero-uiv-card",
    version: "1.0.0",
    title: "Unified Card",
    elementSelector: "zero-uiv-card",
    group: "Uiverse Cards",
    iconName: "card-icon.png"
  }),
  Wt()
], F);
export {
  F as ZeroUivCard,
  it as studioTemplate
};
