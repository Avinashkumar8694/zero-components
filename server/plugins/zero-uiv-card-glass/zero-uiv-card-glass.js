var Lt = Object.defineProperty;
var Gt = (r, e, t) => e in r ? Lt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Gt(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(v, A) {
      return function(w, $) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: $ }), A && A(w, $);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !m && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
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
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Dt(), z = typeof WeakMap == "function" ? WeakMap : jt(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Rt(), Se = zt(ie);
    function vt(i, s, a, d) {
      if (_(a)) {
        if (!ze(i))
          throw new TypeError();
        if (!Ne(s))
          throw new TypeError();
        return St(i, s);
      } else {
        if (!ze(i))
          throw new TypeError();
        if (!x(s))
          throw new TypeError();
        if (!x(d) && !_(d) && !W(d))
          throw new TypeError();
        return W(d) && (d = void 0), a = R(a), xt(i, s, a, d);
      }
    }
    e("decorate", vt);
    function yt(i, s) {
      function a(d, y) {
        if (!x(d))
          throw new TypeError();
        if (!_(y) && !Tt(y))
          throw new TypeError();
        Ce(i, s, d, y);
      }
      return a;
    }
    e("metadata", yt);
    function mt(i, s, a, d) {
      if (!x(a))
        throw new TypeError();
      return _(d) || (d = R(d)), Ce(i, s, a, d);
    }
    e("defineMetadata", mt);
    function _t(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return _(a) || (a = R(a)), xe(i, s, a);
    }
    e("hasMetadata", _t);
    function gt(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return _(a) || (a = R(a)), ce(i, s, a);
    }
    e("hasOwnMetadata", gt);
    function bt(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Me(i, s, a);
    }
    e("getMetadata", bt);
    function $t(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Oe(i, s, a);
    }
    e("getOwnMetadata", $t);
    function wt(i, s) {
      if (!x(i))
        throw new TypeError();
      return _(s) || (s = R(s)), Pe(i, s);
    }
    e("getMetadataKeys", wt);
    function At(i, s) {
      if (!x(i))
        throw new TypeError();
      return _(s) || (s = R(s)), Te(i, s);
    }
    e("getOwnMetadataKeys", At);
    function Et(i, s, a) {
      if (!x(s))
        throw new TypeError();
      if (_(a) || (a = R(a)), !x(s))
        throw new TypeError();
      _(a) || (a = R(a));
      var d = q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", Et);
    function St(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], y = d(s);
        if (!_(y) && !W(y)) {
          if (!Ne(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function xt(i, s, a, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var O = i[y], M = O(s, a, d);
        if (!_(M) && !W(M)) {
          if (!x(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function xe(i, s, a) {
      var d = ce(i, s, a);
      if (d)
        return !0;
      var y = fe(s);
      return W(y) ? !1 : xe(i, y, a);
    }
    function ce(i, s, a) {
      var d = q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Re(d.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Me(i, s, a) {
      var d = ce(i, s, a);
      if (d)
        return Oe(i, s, a);
      var y = fe(s);
      if (!W(y))
        return Me(i, y, a);
    }
    function Oe(i, s, a) {
      var d = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Ce(i, s, a, d) {
      var y = q(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, d);
    }
    function Pe(i, s) {
      var a = Te(i, s), d = fe(i);
      if (d === null)
        return a;
      var y = Pe(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new T(), M = [], g = 0, c = a; g < c.length; g++) {
        var h = c[g], f = O.has(h);
        f || (O.add(h), M.push(h));
      }
      for (var p = 0, b = y; p < b.length; p++) {
        var h = b[p], f = O.has(h);
        f || (O.add(h), M.push(h));
      }
      return M;
    }
    function Te(i, s) {
      var a = q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function ke(i) {
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
    function Mt(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ot(i, s) {
      switch (ke(i)) {
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
      var a = "string", d = Ue(i, l);
      if (d !== void 0) {
        var y = d.call(i, a);
        if (x(y))
          throw new TypeError();
        return y;
      }
      return Ct(i);
    }
    function Ct(i, s) {
      var a, d;
      {
        var y = i.toString;
        if (oe(y)) {
          var d = y.call(i);
          if (!x(d))
            return d;
        }
        var a = i.valueOf;
        if (oe(a)) {
          var d = a.call(i);
          if (!x(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function Pt(i) {
      return "" + i;
    }
    function R(i) {
      var s = Ot(i);
      return Mt(s) ? s : Pt(s);
    }
    function ze(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function Ne(i) {
      return typeof i == "function";
    }
    function Tt(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function he(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ue(i, s) {
      var a = i[s];
      if (a != null) {
        if (!oe(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var s = Ue(i, u);
      if (!oe(s))
        throw new TypeError();
      var a = s.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function je(i) {
      return i.value;
    }
    function He(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ie(i) {
      var s = i.return;
      s && s.call(i);
    }
    function fe(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function kt() {
      var i;
      !_(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Nt(t.Reflect));
      var s, a, d, y = new z(), O = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return O;
      function M(p) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case _(s):
            s = p;
            break;
          case s === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            d === void 0 && (d = new T()), d.add(p);
            break;
        }
      }
      function g(p, b) {
        if (!_(s)) {
          if (s.isProviderFor(p, b))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, b))
              return s;
            if (!_(d))
              for (var E = De(d); ; ) {
                var S = He(E);
                if (!S)
                  return;
                var k = je(S);
                if (k.isProviderFor(p, b))
                  return Ie(E), k;
              }
          }
        }
        if (!_(i) && i.isProviderFor(p, b))
          return i;
      }
      function c(p, b) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(b)), _(S) && (S = g(p, b), _(S) || (_(E) && (E = new P(), y.set(p, E)), E.set(b, S))), S;
      }
      function h(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(d) && d.has(p);
      }
      function f(p, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, b);
        if (S !== E) {
          if (!_(S))
            return !1;
          var k = y.get(p);
          _(k) && (k = new P(), y.set(p, k)), k.set(b, E);
        }
        return !0;
      }
    }
    function Rt() {
      var i;
      return !_(G) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), _(i) && (i = kt()), !_(G) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function zt(i) {
      var s = new z(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return ie.registerProvider(a), a;
      function d(h, f, p) {
        var b = s.get(h), E = !1;
        if (_(b)) {
          if (!p)
            return;
          b = new P(), s.set(h, b), E = !0;
        }
        var S = b.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new P(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var b = d(
          f,
          p,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Re(b.has(h));
      }
      function O(h, f, p) {
        var b = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(h);
      }
      function M(h, f, p, b) {
        var E = d(
          p,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var p = [], b = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return p;
        for (var E = b.keys(), S = De(E), k = 0; ; ) {
          var Le = He(S);
          if (!Le)
            return p.length = k, p;
          var Ht = je(Le);
          try {
            p[k] = Ht;
          } catch (It) {
            try {
              Ie(S);
            } finally {
              throw It;
            }
          }
          k++;
        }
      }
      function c(h, f, p) {
        var b = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Nt(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, O = i.deleteMetadata, M = new z(), g = {
        isProviderFor: function(c, h) {
          var f = M.get(c);
          return !_(f) && f.has(h) ? !0 : y(c, h).length ? (_(f) && (f = new T(), M.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return g;
    }
    function q(i, s, a) {
      var d = ie.getProvider(i, s);
      if (!_(d))
        return d;
      if (a) {
        if (ie.setProvider(i, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var i = {}, s = [], a = (
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
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
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
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, he(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!he(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (he(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function y(g, c) {
        return g;
      }
      function O(g, c) {
        return c;
      }
      function M(g, c) {
        return [g, c];
      }
    }
    function Dt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new P();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
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
    function jt() {
      var i = 16, s = w.create(), a = d();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
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
          c = "@@WeakMap@@" + g();
        while (w.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: w.create() });
        }
        return c[a];
      }
      function O(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function g() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
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
function Wt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Bt(r) {
  return function(e) {
    if (Wt(r)) {
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
function lt(r) {
  return Bt(r);
}
function ut(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), $ = (A = l.sheet) == null ? void 0 : A.cssRules;
          $ && (Array.from($).forEach((P) => w.insertRule(P.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          v.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          v.appendChild($);
        });
      }
    }
    return t;
  };
}
function Vt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(r) {
  return function(e, t) {
    try {
      Vt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ge(r) {
  return Ft(r);
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
const se = globalThis, be = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let dt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new dt(typeof r == "string" ? r : r + "", void 0, $e), Zt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new dt(t, r, $e);
}, Xt = (r, e) => {
  if (be) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = se.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = be ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yt, defineProperty: Jt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Kt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, U = globalThis, qe = U.trustedTypes, rr = qe ? qe.emptyScript : "", ve = U.reactiveElementPolyfillSupport, X = (r, e) => r, ae = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? rr : null;
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
} }, we = (r, e) => !Yt(r, e), Ze = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: we };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Jt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const m = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, n = [...Kt(t), ...er(t)];
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(Fe(o));
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const m = n.getPropertyOptions(o), v = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ae;
      this._$Em = o;
      const A = v.fromAttribute(t, m.type);
      this[o] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? we)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: m } = u, v = this[l];
        m !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[X("elementProperties")] = /* @__PURE__ */ new Map(), B[X("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: B }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, Xe = (r) => r, le = Y.trustedTypes, Ye = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ct = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + N, nr = `<${ht}>`, I = document, ee = () => I.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, ir = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, D = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ft = /^(?:script|style|textarea|title)$/i, or = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = or(1), V = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), j = I.createTreeWalker(I, 129);
function pt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Z;
  for (let m = 0; m < t; m++) {
    const v = r[m];
    let A, w, $ = -1, P = 0;
    for (; P < v.length && (u.lastIndex = P, w = u.exec(v), w !== null); ) P = u.lastIndex, u === Z ? w[1] === "!--" ? u = Je : w[1] !== void 0 ? u = Qe : w[2] !== void 0 ? (ft.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = D) : w[3] !== void 0 && (u = D) : u === D ? w[0] === ">" ? (u = o ?? Z, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? D : w[3] === '"' ? et : Ke) : u === et || u === Ke ? u = D : u === Je || u === Qe ? u = Z : (u = D, o = void 0);
    const T = u === D && r[m + 1].startsWith("/>") ? " " : "";
    l += u === Z ? v + nr : $ >= 0 ? (n.push(A), v.slice(0, $) + ct + v.slice($) + N + T) : v + N + ($ === -2 ? m : T);
  }
  return [pt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, v = this.parts, [A, w] = sr(e, t);
    if (this.el = re.createElement(A, n), j.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = j.nextNode()) !== null && v.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(ct)) {
          const P = w[u++], T = o.getAttribute($).split(N), z = /([.?@])?(.*)/.exec(P);
          v.push({ type: 1, index: l, name: z[2], strings: T, ctor: z[1] === "." ? lr : z[1] === "?" ? ur : z[1] === "@" ? dr : ue }), o.removeAttribute($);
        } else $.startsWith(N) && (v.push({ type: 6, index: l }), o.removeAttribute($));
        if (ft.test(o.tagName)) {
          const $ = o.textContent.split(N), P = $.length - 1;
          if (P > 0) {
            o.textContent = le ? le.emptyScript : "";
            for (let T = 0; T < P; T++) o.append($[T], ee()), j.nextNode(), v.push({ type: 2, index: ++l });
            o.append($[P], ee());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ht) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(N, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += N.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = I.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(r, e, t = r, n) {
  var u, m;
  if (e === V) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = F(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? I).importNode(t, !0);
    j.currentNode = o;
    let l = j.nextNode(), u = 0, m = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let A;
        v.type === 2 ? A = new ne(l, l.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (A = new cr(l, this, e)), this._$AV.push(A), v = n[++m];
      }
      u !== (v == null ? void 0 : v.index) && (l = j.nextNode(), u++);
    }
    return j.currentNode = I, o;
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
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = F(this, e, t), te(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== V && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ir(e) ? this.k(e) : this._(e);
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
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(pt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new ar(o, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ne(this.O(ee()), this.O(ee()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Xe(e).nextSibling;
      Xe(e).remove(), e = o;
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
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = F(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== V, u && (this._$AH = e);
    else {
      const m = e;
      let v, A;
      for (e = l[0], v = 0; v < l.length - 1; v++) A = F(this, m[n + v], t, v), A === V && (A = this._$AH[v]), u || (u = !te(A) || A !== this._$AH[v]), A === C ? e = C : e !== C && (e += (A ?? "") + l[v + 1]), this._$AH[v] = A;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class ur extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class dr extends ue {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? C) === V) return;
    const n = this._$AH, o = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    F(this, e);
  }
}
const me = Y.litHtmlPolyfillSupport;
me == null || me(re, ne), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends B {
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
    return V;
  }
}
var at;
J._$litElement$ = !0, J.finalized = !0, (at = H.litElementHydrateSupport) == null || at.call(H, { LitElement: J });
const _e = H.litElementPolyfillSupport;
_e == null || _e({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: we }, pr = (r = fr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const v = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, v, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const v = this[u];
      e.call(this, m), this.requestUpdate(u, v, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ee(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, de = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && vr(e, t, o), o;
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
function ot(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let L = class extends J {
  constructor() {
    super(...arguments), this.theme = "modern", this.title = "Card Title", this.content = "";
  }
  static getStudioTemplate(r) {
    if (!r) return it;
    const e = ot(r.studio.display.title || "Card Title"), t = ot(r.studio.display.content || "");
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
L.styles = Zt`
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
de([
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
], L.prototype, "theme", 2);
de([
  Ee({ type: String }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], L.prototype, "title", 2);
de([
  Ee({ type: String }),
  ge({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXTAREA,
    displayLabel: "Content",
    fieldMappings: "content"
  })
], L.prototype, "content", 2);
L = de([
  lt({
    name: "zero-uiv-card",
    version: "1.0.0",
    title: "Unified Card",
    elementSelector: "zero-uiv-card",
    group: "Uiverse Cards",
    iconName: "card-icon.png"
  }),
  ut()
], L);
var mr = Object.getOwnPropertyDescriptor, _r = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? mr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = u(o) || o);
  return o;
};
const gr = {
  kind: "generic",
  slots: [
    { id: "header", label: "Card Header", dropzone: !0, accepts: [] },
    { id: "default", label: "Card Body", dropzone: !0, accepts: [] },
    { id: "footer", label: "Card Footer", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='width:320px;min-height:220px;padding:32px;border-radius:16px;display:flex;flex-direction:column;gap:20px;background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255, 255, 255, 0.1);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.3);box-sizing:border-box;'>",
    "<zero-studio-slot name='header'></zero-studio-slot>",
    "<h3 style='font-size:1.5rem;font-weight:800;margin:0;color:var(--uiv-primary-color,#6366f1);letter-spacing:-0.02em;'>{{display:title}}</h3>",
    "<div style='font-size:1rem;line-height:1.7;color:var(--uiv-text-color,#1e293b);opacity:0.9;'>",
    "{{display:content}}",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>",
    "<zero-studio-slot name='footer'></zero-studio-slot>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glass", "Card"]
};
let st = class extends L {
  static getStudioTemplate(r) {
    return gr;
  }
  constructor() {
    super(), this.theme = "glass";
  }
};
st = _r([
  lt({
    name: "zero-uiv-card-glass",
    version: "1.0.0",
    title: "Glassmorphism Card (Legacy)",
    elementSelector: "zero-uiv-card-glass",
    group: "Uiverse Cards",
    iconName: "card-icon.png"
  }),
  ut()
], st);
export {
  st as ZeroUivCardGlass,
  gr as glassTemplate
};
