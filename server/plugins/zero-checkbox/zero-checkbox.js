var Rt = Object.defineProperty;
var Ut = (n, e, t) => e in n ? Rt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Be = (n, e, t) => Ut(n, typeof e != "symbol" ? e + "" : e, t);
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : _(), i = s(n);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(v, $) {
      return function(E, w) {
        Object.defineProperty(v, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
      };
    }
    function c() {
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
    function _() {
      return c() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", c = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !_ && !v, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(r, o) {
        return i.call(r, o);
      } : function(r, o) {
        return o in r;
      },
      get: $ ? function(r, o) {
        return i.call(r, o) ? r[o] : void 0;
      } : function(r, o) {
        return r[o];
      }
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Mt(), z = typeof WeakMap == "function" ? WeakMap : Tt(), q = s ? Symbol.for("@reflect-metadata:registry") : void 0, se = kt(), ke = At(se);
    function at(r, o, a, h) {
      if (b(a)) {
        if (!Ue(r))
          throw new TypeError();
        if (!Ne(o))
          throw new TypeError();
        return bt(r, o);
      } else {
        if (!Ue(r))
          throw new TypeError();
        if (!A(o))
          throw new TypeError();
        if (!A(h) && !b(h) && !F(h))
          throw new TypeError();
        return F(h) && (h = void 0), a = j(a), mt(r, o, a, h);
      }
    }
    e("decorate", at);
    function lt(r, o) {
      function a(h, y) {
        if (!A(h))
          throw new TypeError();
        if (!b(y) && !Et(y))
          throw new TypeError();
        Me(r, o, h, y);
      }
      return a;
    }
    e("metadata", lt);
    function ct(r, o, a, h) {
      if (!A(a))
        throw new TypeError();
      return b(h) || (h = j(h)), Me(r, o, a, h);
    }
    e("defineMetadata", ct);
    function ht(r, o, a) {
      if (!A(o))
        throw new TypeError();
      return b(a) || (a = j(a)), Ae(r, o, a);
    }
    e("hasMetadata", ht);
    function ut(r, o, a) {
      if (!A(o))
        throw new TypeError();
      return b(a) || (a = j(a)), de(r, o, a);
    }
    e("hasOwnMetadata", ut);
    function dt(r, o, a) {
      if (!A(o))
        throw new TypeError();
      return b(a) || (a = j(a)), Se(r, o, a);
    }
    e("getMetadata", dt);
    function ft(r, o, a) {
      if (!A(o))
        throw new TypeError();
      return b(a) || (a = j(a)), Oe(r, o, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, o) {
      if (!A(r))
        throw new TypeError();
      return b(o) || (o = j(o)), Te(r, o);
    }
    e("getMetadataKeys", pt);
    function yt(r, o) {
      if (!A(r))
        throw new TypeError();
      return b(o) || (o = j(o)), Ce(r, o);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, o, a) {
      if (!A(o))
        throw new TypeError();
      if (b(a) || (a = j(a)), !A(o))
        throw new TypeError();
      b(a) || (a = j(a));
      var h = J(
        o,
        a,
        /*Create*/
        !1
      );
      return b(h) ? !1 : h.OrdinaryDeleteMetadata(r, o, a);
    }
    e("deleteMetadata", vt);
    function bt(r, o) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(o);
        if (!b(y) && !F(y)) {
          if (!Ne(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function mt(r, o, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var O = r[y], S = O(o, a, h);
        if (!b(S) && !F(S)) {
          if (!A(S))
            throw new TypeError();
          h = S;
        }
      }
      return h;
    }
    function Ae(r, o, a) {
      var h = de(r, o, a);
      if (h)
        return !0;
      var y = pe(o);
      return F(y) ? !1 : Ae(r, y, a);
    }
    function de(r, o, a) {
      var h = J(
        o,
        a,
        /*Create*/
        !1
      );
      return b(h) ? !1 : Re(h.OrdinaryHasOwnMetadata(r, o, a));
    }
    function Se(r, o, a) {
      var h = de(r, o, a);
      if (h)
        return Oe(r, o, a);
      var y = pe(o);
      if (!F(y))
        return Se(r, y, a);
    }
    function Oe(r, o, a) {
      var h = J(
        o,
        a,
        /*Create*/
        !1
      );
      if (!b(h))
        return h.OrdinaryGetOwnMetadata(r, o, a);
    }
    function Me(r, o, a, h) {
      var y = J(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, o, a, h);
    }
    function Te(r, o) {
      var a = Ce(r, o), h = pe(r);
      if (h === null)
        return a;
      var y = Te(h, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new R(), S = [], m = 0, u = a; m < u.length; m++) {
        var d = u[m], f = O.has(d);
        f || (O.add(d), S.push(d));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var d = g[p], f = O.has(d);
        f || (O.add(d), S.push(d));
      }
      return S;
    }
    function Ce(r, o) {
      var a = J(
        r,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, o) : [];
    }
    function Pe(r) {
      if (r === null)
        return 1;
      switch (typeof r) {
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
          return r === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function b(r) {
      return r === void 0;
    }
    function F(r) {
      return r === null;
    }
    function gt(r) {
      return typeof r == "symbol";
    }
    function A(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function _t(r, o) {
      switch (Pe(r)) {
        case 0:
          return r;
        case 1:
          return r;
        case 2:
          return r;
        case 3:
          return r;
        case 4:
          return r;
        case 5:
          return r;
      }
      var a = "string", h = Ie(r, c);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (A(y))
          throw new TypeError();
        return y;
      }
      return wt(r);
    }
    function wt(r, o) {
      var a, h;
      {
        var y = r.toString;
        if (ae(y)) {
          var h = y.call(r);
          if (!A(h))
            return h;
        }
        var a = r.valueOf;
        if (ae(a)) {
          var h = a.call(r);
          if (!A(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Re(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function j(r) {
      var o = _t(r);
      return gt(o) ? o : $t(o);
    }
    function Ue(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ae(r) {
      return typeof r == "function";
    }
    function Ne(r) {
      return typeof r == "function";
    }
    function Et(r) {
      switch (Pe(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(r, o) {
      return r === o || r !== r && o !== o;
    }
    function Ie(r, o) {
      var a = r[o];
      if (a != null) {
        if (!ae(a))
          throw new TypeError();
        return a;
      }
    }
    function He(r) {
      var o = Ie(r, l);
      if (!ae(o))
        throw new TypeError();
      var a = o.call(r);
      if (!A(a))
        throw new TypeError();
      return a;
    }
    function je(r) {
      return r.value;
    }
    function De(r) {
      var o = r.next();
      return o.done ? !1 : o;
    }
    function ze(r) {
      var o = r.return;
      o && o.call(r);
    }
    function pe(r) {
      var o = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === w || o !== w)
        return o;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var y = h.constructor;
      return typeof y != "function" || y === r ? o : y;
    }
    function xt() {
      var r;
      !b(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = St(t.Reflect));
      var o, a, h, y = new z(), O = {
        registerProvider: S,
        getProvider: u,
        setProvider: f
      };
      return O;
      function S(p) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case b(o):
            o = p;
            break;
          case o === p:
            break;
          case b(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            h === void 0 && (h = new R()), h.add(p);
            break;
        }
      }
      function m(p, g) {
        if (!b(o)) {
          if (o.isProviderFor(p, g))
            return o;
          if (!b(a)) {
            if (a.isProviderFor(p, g))
              return o;
            if (!b(h))
              for (var x = He(h); ; ) {
                var k = De(x);
                if (!k)
                  return;
                var I = je(k);
                if (I.isProviderFor(p, g))
                  return ze(x), I;
              }
          }
        }
        if (!b(r) && r.isProviderFor(p, g))
          return r;
      }
      function u(p, g) {
        var x = y.get(p), k;
        return b(x) || (k = x.get(g)), b(k) && (k = m(p, g), b(k) || (b(x) && (x = new T(), y.set(p, x)), x.set(g, k))), k;
      }
      function d(p) {
        if (b(p))
          throw new TypeError();
        return o === p || a === p || !b(h) && h.has(p);
      }
      function f(p, g, x) {
        if (!d(x))
          throw new Error("Metadata provider not registered.");
        var k = u(p, g);
        if (k !== x) {
          if (!b(k))
            return !1;
          var I = y.get(p);
          b(I) && (I = new T(), y.set(p, I)), I.set(g, x);
        }
        return !0;
      }
    }
    function kt() {
      var r;
      return !b(q) && A(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[q]), b(r) && (r = xt()), !b(q) && A(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function At(r) {
      var o = new z(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return b(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: u
      };
      return se.registerProvider(a), a;
      function h(d, f, p) {
        var g = o.get(d), x = !1;
        if (b(g)) {
          if (!p)
            return;
          g = new T(), o.set(d, g), x = !0;
        }
        var k = g.get(f);
        if (b(k)) {
          if (!p)
            return;
          if (k = new T(), g.set(f, k), !r.setProvider(d, f, a))
            throw g.delete(f), x && o.delete(d), new Error("Wrong provider for target.");
        }
        return k;
      }
      function y(d, f, p) {
        var g = h(
          f,
          p,
          /*Create*/
          !1
        );
        return b(g) ? !1 : Re(g.has(d));
      }
      function O(d, f, p) {
        var g = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!b(g))
          return g.get(d);
      }
      function S(d, f, p, g) {
        var x = h(
          p,
          g,
          /*Create*/
          !0
        );
        x.set(d, f);
      }
      function m(d, f) {
        var p = [], g = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (b(g))
          return p;
        for (var x = g.keys(), k = He(x), I = 0; ; ) {
          var Le = De(k);
          if (!Le)
            return p.length = I, p;
          var Ct = je(Le);
          try {
            p[I] = Ct;
          } catch (Pt) {
            try {
              ze(k);
            } finally {
              throw Pt;
            }
          }
          I++;
        }
      }
      function u(d, f, p) {
        var g = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (b(g) || !g.delete(d))
          return !1;
        if (g.size === 0) {
          var x = o.get(f);
          b(x) || (x.delete(p), x.size === 0 && o.delete(x));
        }
        return !0;
      }
    }
    function St(r) {
      var o = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, O = r.deleteMetadata, S = new z(), m = {
        isProviderFor: function(u, d) {
          var f = S.get(u);
          return !b(f) && f.has(d) ? !0 : y(u, d).length ? (b(f) && (f = new R(), S.set(u, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return m;
    }
    function J(r, o, a) {
      var h = se.getProvider(r, o);
      if (!b(h))
        return h;
      if (a) {
        if (se.setProvider(r, o, ke))
          return ke;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var r = {}, o = [], a = (
        /** @class */
        function() {
          function m(u, d, f) {
            this._index = 0, this._keys = u, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var d = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), u;
          }, m.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: u, done: !0 };
          }, m;
        }()
      ), h = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(u) {
            var d = this._find(
              u,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(u, d) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(u) {
            var d = this._find(
              u,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, fe(u, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(u, d) {
            if (!fe(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], u)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return h;
      function y(m, u) {
        return m;
      }
      function O(m, u) {
        return u;
      }
      function S(m, u) {
        return [m, u];
      }
    }
    function Mt() {
      var r = (
        /** @class */
        function() {
          function o() {
            this._map = new T();
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return r;
    }
    function Tt() {
      var r = 16, o = E.create(), a = h();
      return (
        /** @class */
        function() {
          function u() {
            this._key = h();
          }
          return u.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, u.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, u.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, u.prototype.delete = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = h();
          }, u;
        }()
      );
      function h() {
        var u;
        do
          u = "@@WeakMap@@" + m();
        while (E.has(o, u));
        return o[u] = !0, u;
      }
      function y(u, d) {
        if (!i.call(u, a)) {
          if (!d)
            return;
          Object.defineProperty(u, a, { value: E.create() });
        }
        return u[a];
      }
      function O(u, d) {
        for (var f = 0; f < d; ++f)
          u[f] = Math.random() * 255 | 0;
        return u;
      }
      function S(u) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : O(d, u), d;
        }
        return O(new Array(u), u);
      }
      function m() {
        var u = S(r);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = u[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ye(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(We || (We = {}));
function Nt(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function It(n) {
  return function(e) {
    if (Nt(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${n.elementSelector}-${n.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ht(n) {
  return It(n);
}
function jt(n) {
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
      update(c) {
        try {
          super.update(c);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const c = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (c && _) {
          const $ = new CSSStyleSheet(), E = (v = c.sheet) == null ? void 0 : v.cssRules;
          E && (Array.from(E).forEach((w) => $.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (c) {
          const $ = c.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const E = $.cloneNode(!0);
          this.shadowRoot.appendChild(E);
        });
      }
    }
    return t;
  };
}
function Dt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(n) {
  return function(e, t) {
    try {
      Dt(n);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (n.fieldMappings = n.fieldMappings ?? t), i.push(n), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function H(n) {
  return zt(n);
}
var U;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(U || (U = {}));
var P;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(P || (P = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = globalThis, we = le.ShadowRoot && (le.ShadyCSS === void 0 || le.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (n) => new rt(typeof n == "string" ? n : n + "", void 0, $e), Bt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, s, c) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[c + 1], n[0]);
  return new rt(t, n, $e);
}, Gt = (n, e) => {
  if (we) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = le.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, n.appendChild(i);
  }
}, qe = we ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Lt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Vt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Ft, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, B = globalThis, Fe = B.trustedTypes, Zt = Fe ? Fe.emptyScript : "", ve = B.reactiveElementPolyfillSupport, K = (n, e) => n, ce = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Zt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (n, e) => !Wt(n, e), Xe = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class X extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Vt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: c } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const _ = s == null ? void 0 : s.call(this);
      c.call(this, l), this.requestUpdate(e, _, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, i = [...Ft(t), ...Xt(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(qe(s));
    } else e !== void 0 && t.push(qe(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Gt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var c;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const l = (((c = i.converter) == null ? void 0 : c.toAttribute) !== void 0 ? i.converter : ce).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var c;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = i.getPropertyOptions(s), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((c = l.converter) == null ? void 0 : c.fromAttribute) !== void 0 ? l.converter : ce;
      this._$Em = s, this[s] = _.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? Ee)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [c, l] of this._$Ep) this[c] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [c, l] of s) l.wrapped !== !0 || this._$AL.has(c) || this[c] === void 0 || this.P(c, this[c], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
        var c;
        return (c = s.hostUpdate) == null ? void 0 : c.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[K("elementProperties")] = /* @__PURE__ */ new Map(), X[K("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, he = ee.trustedTypes, Ye = he ? he.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, nt = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + L, Jt = `<${it}>`, V = document, re = () => V.createComment(""), ne = (n) => n === null || typeof n != "object" && typeof n != "function", xe = Array.isArray, Qt = (n) => xe(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, G = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, ot = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), me = Kt(1), Y = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), W = V.createTreeWalker(V, 129);
function st(n, e) {
  if (!xe(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const er = (n, e) => {
  const t = n.length - 1, i = [];
  let s, c = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let _ = 0; _ < t; _++) {
    const v = n[_];
    let $, E, w = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, E = l.exec(v), E !== null); ) T = l.lastIndex, l === Q ? E[1] === "!--" ? l = Ze : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (ot.test(E[2]) && (s = RegExp("</" + E[2], "g")), l = G) : E[3] !== void 0 && (l = G) : l === G ? E[0] === ">" ? (l = s ?? Q, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? G : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = G : l === Ze || l === Je ? l = Q : (l = G, s = void 0);
    const R = l === G && n[_ + 1].startsWith("/>") ? " " : "";
    c += l === Q ? v + Jt : w >= 0 ? (i.push($), v.slice(0, w) + nt + v.slice(w) + L + R) : v + L + (w === -2 ? _ : R);
  }
  return [st(n, c + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ie {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let c = 0, l = 0;
    const _ = e.length - 1, v = this.parts, [$, E] = er(e, t);
    if (this.el = ie.createElement($, i), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = W.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(nt)) {
          const T = E[l++], R = s.getAttribute(w).split(L), z = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: c, name: z[2], strings: R, ctor: z[1] === "." ? rr : z[1] === "?" ? nr : z[1] === "@" ? ir : ue }), s.removeAttribute(w);
        } else w.startsWith(L) && (v.push({ type: 6, index: c }), s.removeAttribute(w));
        if (ot.test(s.tagName)) {
          const w = s.textContent.split(L), T = w.length - 1;
          if (T > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < T; R++) s.append(w[R], re()), W.nextNode(), v.push({ type: 2, index: ++c });
            s.append(w[T], re());
          }
        }
      } else if (s.nodeType === 8) if (s.data === it) v.push({ type: 2, index: c });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(L, w + 1)) !== -1; ) v.push({ type: 7, index: c }), w += L.length - 1;
      }
      c++;
    }
  }
  static createElement(e, t) {
    const i = V.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Z(n, e, t = n, i) {
  var l, _;
  if (e === Y) return e;
  let s = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const c = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== c && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), c === void 0 ? s = void 0 : (s = new c(n), s._$AT(n, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = s : t.l = s), s !== void 0 && (e = Z(n, s._$AS(n, e.values), s, i)), e;
}
class tr {
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    W.currentNode = s;
    let c = W.nextNode(), l = 0, _ = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new oe(c, c.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(c, v.name, v.strings, this, e) : v.type === 6 && ($ = new or(c, this, e)), this._$AV.push($), v = i[++_];
      }
      l !== (v == null ? void 0 : v.index) && (c = W.nextNode(), l++);
    }
    return W.currentNode = V, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Z(this, e, t), ne(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var c;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ie.createElement(st(i.h, i.h[0]), this.options)), i);
    if (((c = this._$AH) == null ? void 0 : c._$AD) === s) this._$AH.p(t);
    else {
      const l = new tr(s, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const c of e) s === t.length ? t.push(i = new oe(this.O(re()), this.O(re()), this, this.options)) : i = t[s], i._$AI(c), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ue {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, c) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = c, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = M;
  }
  _$AI(e, t = this, i, s) {
    const c = this.strings;
    let l = !1;
    if (c === void 0) e = Z(this, e, t, 0), l = !ne(e) || e !== this._$AH && e !== Y, l && (this._$AH = e);
    else {
      const _ = e;
      let v, $;
      for (e = c[0], v = 0; v < c.length - 1; v++) $ = Z(this, _[i + v], t, v), $ === Y && ($ = this._$AH[v]), l || (l = !ne($) || $ !== this._$AH[v]), $ === M ? e = M : e !== M && (e += ($ ?? "") + c[v + 1]), this._$AH[v] = $;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class nr extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class ir extends ue {
  constructor(e, t, i, s, c) {
    super(e, t, i, s, c), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? M) === Y) return;
    const i = this._$AH, s = e === M && i !== M || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, c = e !== M && (i === M || s);
    s && this.element.removeEventListener(this.name, this, i), c && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Z(this, e);
  }
}
const ge = ee.litHtmlPolyfillSupport;
ge == null || ge(ie, oe), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const sr = (n, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const c = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new oe(e.insertBefore(re(), c), c, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class te extends X {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = sr(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return Y;
  }
}
var tt;
te._$litElement$ = !0, te.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: te });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee }, lr = (n = ar, e, t) => {
  const { kind: i, metadata: s } = t;
  let c = globalThis.litPropertyMetadata.get(s);
  if (c === void 0 && globalThis.litPropertyMetadata.set(s, c = /* @__PURE__ */ new Map()), c.set(t.name, n), i === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, v, n);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, n), _;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(_) {
      const v = this[l];
      e.call(this, _), this.requestUpdate(l, v, n);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function D(n) {
  return (e, t) => typeof t == "object" ? lr(n, e, t) : ((i, s, c) => {
    const l = s.hasOwnProperty(c);
    return s.constructor.createProperty(c, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(s, c) : void 0;
  })(n, e, t);
}
var cr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, N = (n, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? hr(e, t) : e, c = n.length - 1, l; c >= 0; c--)
    (l = n[c]) && (s = (i ? l(e, t, s) : l(s)) || s);
  return i && s && cr(e, t, s), s;
};
let C = class extends te {
  constructor() {
    super(...arguments), this.checked = !1, this.label = "Checkbox Label", this.description = "", this.required = !1, this.disabled = !1, this.indeterminate = !1, this.checkboxStyle = "default", this.value = "", this.errorMessage = "", this.showError = !1;
  }
  getCheckboxClass() {
    let n = "checkbox-field";
    return this.disabled && (n += " disabled"), this.checkboxStyle === "custom" && (n += " custom-style"), this.checkboxStyle === "switch" && (n += " switch-style"), n;
  }
  handleCheckboxClick() {
    this.disabled || (this.indeterminate ? (this.indeterminate = !1, this.checked = !0) : this.checked = !this.checked, this.dispatchChangeEvent());
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        checked: this.checked,
        value: this.value,
        indeterminate: this.indeterminate
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(n) {
    const e = n.target;
    this.checked = e.checked, this.indeterminate = !1, this.dispatchChangeEvent();
  }
  updated(n) {
    var e;
    if (super.updated(n), n.has("indeterminate")) {
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector('input[type="checkbox"]');
      t && (t.indeterminate = this.indeterminate);
    }
  }
  render() {
    return me`
            <div class="form-field">
                ${this.label ? me`
                    <label class="main-label">Choose Option</label>
                ` : ""}
                
                <div class="${this.getCheckboxClass()}" @click="${this.handleCheckboxClick}">
                    <div class="checkbox-container">
                        <input 
                            type="checkbox"
                            .checked="${this.checked}"
                            .indeterminate="${this.indeterminate}"
                            ?required="${this.required}"
                            ?disabled="${this.disabled}"
                            value="${this.value}"
                            class="${this.showError ? "error" : ""}"
                            @change="${this.handleChange}"
                            @click="${(n) => n.stopPropagation()}"
                        />
                    </div>
                    <span class="checkbox-label">${this.label}</span>
                </div>
                
                ${this.description ? me`
                    <div class="description">${this.description}</div>
                ` : ""}
                
                <div class="error-message ${this.showError ? "show" : ""}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
C.styles = Bt`
        :host {
            display: block;
            width: 100%;
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label.main-label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }

        .checkbox-field {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
            cursor: pointer;
            padding: var(--spacing-xs, 4px);
            border-radius: var(--border-radius-sm, 4px);
            transition: background-color 0.2s;
        }        .checkbox-field:hover:not(.disabled) {
            background-color: var(--primary-background-hover, rgba(108, 99, 255, 0.05));
        }

        .checkbox-field.disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }

        .checkbox-container {
            position: relative;
            display: inline-block;
        }        input[type="checkbox"] {
            width: var(--icon-size-sm, 18px);
            height: var(--icon-size-sm, 18px);
            margin: 0;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            border: 2px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-xs, 3px);
            background-color: var(--background-primary, #fff);
            transition: all 0.2s;
            position: relative;
        }

        input[type="checkbox"]:hover:not(:disabled) {
            border-color: var(--primary-light, #6c63ff);
        }

        input[type="checkbox"]:checked {
            background-color: var(--primary-color, #6c63ff);
            border-color: var(--primary-color, #6c63ff);
        }

        input[type="checkbox"]:checked::after {
            content: '✓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);            color: white;
            font-size: var(--font-size-xs, 12px);
            font-weight: bold;
        }

        input[type="checkbox"]:indeterminate {
            background-color: var(--primary-color, #6c63ff);
            border-color: var(--primary-color, #6c63ff);
        }

        input[type="checkbox"]:indeterminate::after {
            content: '−';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);            color: white;
            font-size: var(--font-size-base, 14px);
            font-weight: bold;
        }

        input[type="checkbox"]:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        input[type="checkbox"]:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            border-color: var(--border-disabled, #ccc);
            cursor: not-allowed;
        }

        input[type="checkbox"]:disabled:checked {
            background-color: var(--background-disabled, #f5f5f5);
        }

        input[type="checkbox"]:disabled:checked::after {
            color: var(--text-disabled, #999);
        }

        .checkbox-label {
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            cursor: pointer;
            user-select: none;
            line-height: 1.4;
        }

        .checkbox-field.disabled .checkbox-label {
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .description {
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
            margin-top: var(--spacing-xs, 4px);
            margin-left: 26px; /* Align with checkbox label */
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            margin-top: var(--spacing-xs, 4px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        input[type="checkbox"].error {
            border-color: var(--error-color, #f44336);
        }

        input[type="checkbox"].error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        /* Custom checkbox styles */
        .checkbox-field.custom-style input[type="checkbox"] {
            border-radius: 50%;
        }

        .checkbox-field.switch-style {
            gap: var(--spacing-md, 12px);
        }        .checkbox-field.switch-style input[type="checkbox"] {
            width: var(--icon-size-xl, 36px);
            height: var(--icon-size-md, 20px);
            border-radius: var(--border-radius-xl, 10px);
            background-color: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            position: relative;
            transition: all 0.3s;
        }

        .checkbox-field.switch-style input[type="checkbox"]::after {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;            width: var(--icon-size-sm, 16px);
            height: var(--icon-size-sm, 16px);
            background-color: white;
            border-radius: 50%;
            transition: all 0.3s;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .checkbox-field.switch-style input[type="checkbox"]:checked::after {
            left: 17px;
        }
    `;
N([
  D({ type: Boolean }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], C.prototype, "checked", 2);
N([
  D({ type: String }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter checkbox label",
    fieldMappings: "label"
  })
], C.prototype, "label", 2);
N([
  D({ type: String }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Description",
    placeholderText: "Enter description text",
    fieldMappings: "description"
  })
], C.prototype, "description", 2);
N([
  D({ type: Boolean }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], C.prototype, "required", 2);
N([
  D({ type: Boolean }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], C.prototype, "disabled", 2);
N([
  D({ type: Boolean }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Indeterminate",
    fieldMappings: "indeterminate"
  })
], C.prototype, "indeterminate", 2);
N([
  D({ type: String }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Style",
    optionItems: [
      { value: "default", label: "Default" },
      { value: "custom", label: "Rounded" },
      { value: "switch", label: "Switch" }
    ],
    fieldMappings: "checkboxStyle"
  })
], C.prototype, "checkboxStyle", 2);
N([
  D({ type: String }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Value",
    placeholderText: "Enter checkbox value",
    fieldMappings: "value"
  })
], C.prototype, "value", 2);
N([
  D({ type: String }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], C.prototype, "errorMessage", 2);
N([
  D({ type: Boolean }),
  H({
    attributeType: P.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], C.prototype, "showError", 2);
N([
  H({
    attributeType: P.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], C.prototype, "handleChange", 1);
C = N([
  Ht({
    name: "zero-checkbox",
    version: "1.0.0",
    title: "Checkbox",
    elementSelector: "zero-checkbox",
    group: "Form Controls",
    iconName: "checkbox-icon.png"
  }),
  jt()
], C);
export {
  C as ZeroCheckbox
};
