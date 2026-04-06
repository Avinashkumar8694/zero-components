var kt = Object.defineProperty;
var Nt = (n, e, t) => e in n ? kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var We = (n, e, t) => Nt(n, typeof e != "symbol" ? e + "" : e, t);
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
var Be;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : $(), i = o(n);
    typeof t.Reflect < "u" && (i = o(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function o(v, b) {
      return function(A, w) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: w }), b && b(A, w);
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
    function $() {
      return u() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", $ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !$ && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: $ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
      },
      has: b ? function(r, s) {
        return i.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: b ? function(r, s) {
        return i.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), U = typeof WeakMap == "function" ? WeakMap : Tt(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, se = St(), Se = Ot(se);
    function at(r, s, a, h) {
      if (_(a)) {
        if (!Ne(r))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return _t(r, s);
      } else {
        if (!Ne(r))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(h) && !_(h) && !B(h))
          throw new TypeError();
        return B(h) && (h = void 0), a = k(a), gt(r, s, a, h);
      }
    }
    e("decorate", at);
    function lt(r, s) {
      function a(h, y) {
        if (!O(h))
          throw new TypeError();
        if (!_(y) && !At(y))
          throw new TypeError();
        Ce(r, s, h, y);
      }
      return a;
    }
    e("metadata", lt);
    function ut(r, s, a, h) {
      if (!O(a))
        throw new TypeError();
      return _(h) || (h = k(h)), Ce(r, s, a, h);
    }
    e("defineMetadata", ut);
    function ht(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = k(a)), Oe(r, s, a);
    }
    e("hasMetadata", ht);
    function ct(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = k(a)), ce(r, s, a);
    }
    e("hasOwnMetadata", ct);
    function ft(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = k(a)), Me(r, s, a);
    }
    e("getMetadata", ft);
    function dt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = k(a)), Pe(r, s, a);
    }
    e("getOwnMetadata", dt);
    function pt(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = k(s)), Te(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = k(s)), Re(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = k(a)), !O(s))
        throw new TypeError();
      _(a) || (a = k(a));
      var h = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function _t(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!_(y) && !B(y)) {
          if (!Ue(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function gt(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], M = P(s, a, h);
        if (!_(M) && !B(M)) {
          if (!O(M))
            throw new TypeError();
          h = M;
        }
      }
      return h;
    }
    function Oe(r, s, a) {
      var h = ce(r, s, a);
      if (h)
        return !0;
      var y = de(s);
      return B(y) ? !1 : Oe(r, y, a);
    }
    function ce(r, s, a) {
      var h = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : ke(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Me(r, s, a) {
      var h = ce(r, s, a);
      if (h)
        return Pe(r, s, a);
      var y = de(s);
      if (!B(y))
        return Me(r, y, a);
    }
    function Pe(r, s, a) {
      var h = Z(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Ce(r, s, a, h) {
      var y = Z(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Te(r, s) {
      var a = Re(r, s), h = de(r);
      if (h === null)
        return a;
      var y = Te(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), M = [], g = 0, c = a; g < c.length; g++) {
        var f = c[g], d = P.has(f);
        d || (P.add(f), M.push(f));
      }
      for (var p = 0, m = y; p < m.length; p++) {
        var f = m[p], d = P.has(f);
        d || (P.add(f), M.push(f));
      }
      return M;
    }
    function Re(r, s) {
      var a = Z(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function xe(r) {
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
    function _(r) {
      return r === void 0;
    }
    function B(r) {
      return r === null;
    }
    function mt(r) {
      return typeof r == "symbol";
    }
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function $t(r, s) {
      switch (xe(r)) {
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
      var a = "string", h = He(r, u);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return wt(r);
    }
    function wt(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (oe(y)) {
          var h = y.call(r);
          if (!O(h))
            return h;
        }
        var a = r.valueOf;
        if (oe(a)) {
          var h = a.call(r);
          if (!O(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function ke(r) {
      return !!r;
    }
    function bt(r) {
      return "" + r;
    }
    function k(r) {
      var s = $t(r);
      return mt(s) ? s : bt(s);
    }
    function Ne(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function oe(r) {
      return typeof r == "function";
    }
    function Ue(r) {
      return typeof r == "function";
    }
    function At(r) {
      switch (xe(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(r, s) {
      return r === s || r !== r && s !== s;
    }
    function He(r, s) {
      var a = r[s];
      if (a != null) {
        if (!oe(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(r) {
      var s = He(r, l);
      if (!oe(s))
        throw new TypeError();
      var a = s.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function je(r) {
      return r.value;
    }
    function De(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function Le(r) {
      var s = r.return;
      s && s.call(r);
    }
    function de(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === w || s !== w)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function Et() {
      var r;
      !_(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var s, a, h, y = new U(), P = {
        registerProvider: M,
        getProvider: c,
        setProvider: d
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
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
            h === void 0 && (h = new R()), h.add(p);
            break;
        }
      }
      function g(p, m) {
        if (!_(s)) {
          if (s.isProviderFor(p, m))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, m))
              return s;
            if (!_(h))
              for (var E = Ie(h); ; ) {
                var S = De(E);
                if (!S)
                  return;
                var x = je(S);
                if (x.isProviderFor(p, m))
                  return Le(E), x;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, m))
          return r;
      }
      function c(p, m) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(m)), _(S) && (S = g(p, m), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(m, S))), S;
      }
      function f(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(h) && h.has(p);
      }
      function d(p, m, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, m);
        if (S !== E) {
          if (!_(S))
            return !1;
          var x = y.get(p);
          _(x) && (x = new T(), y.set(p, x)), x.set(m, E);
        }
        return !0;
      }
    }
    function St() {
      var r;
      return !_(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[G]), _(r) && (r = Et()), !_(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Ot(r) {
      var s = new U(), a = {
        isProviderFor: function(f, d) {
          var p = s.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return se.registerProvider(a), a;
      function h(f, d, p) {
        var m = s.get(f), E = !1;
        if (_(m)) {
          if (!p)
            return;
          m = new T(), s.set(f, m), E = !0;
        }
        var S = m.get(d);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), m.set(d, S), !r.setProvider(f, d, a))
            throw m.delete(d), E && s.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, d, p) {
        var m = h(
          d,
          p,
          /*Create*/
          !1
        );
        return _(m) ? !1 : ke(m.has(f));
      }
      function P(f, d, p) {
        var m = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (!_(m))
          return m.get(f);
      }
      function M(f, d, p, m) {
        var E = h(
          p,
          m,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function g(f, d) {
        var p = [], m = h(
          f,
          d,
          /*Create*/
          !1
        );
        if (_(m))
          return p;
        for (var E = m.keys(), S = Ie(E), x = 0; ; ) {
          var ze = De(S);
          if (!ze)
            return p.length = x, p;
          var Rt = je(ze);
          try {
            p[x] = Rt;
          } catch (xt) {
            try {
              Le(S);
            } finally {
              throw xt;
            }
          }
          x++;
        }
      }
      function c(f, d, p) {
        var m = h(
          d,
          p,
          /*Create*/
          !1
        );
        if (_(m) || !m.delete(f))
          return !1;
        if (m.size === 0) {
          var E = s.get(d);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Mt(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, M = new U(), g = {
        isProviderFor: function(c, f) {
          var d = M.get(c);
          return !_(d) && d.has(f) ? !0 : y(c, f).length ? (_(d) && (d = new R(), M.set(c, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function Z(r, s, a) {
      var h = se.getProvider(r, s);
      if (!_(h))
        return h;
      if (a) {
        if (se.setProvider(r, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, f, d) {
            this._index = 0, this._keys = c, this._values = f, this._selector = d;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, g;
        }()
      ), h = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
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
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, g.prototype.set = function(c, f) {
            var d = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, g.prototype.delete = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, fe(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, f) {
            if (!fe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (fe(this._keys[d], c)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return h;
      function y(g, c) {
        return g;
      }
      function P(g, c) {
        return c;
      }
      function M(g, c) {
        return [g, c];
      }
    }
    function Ct() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new T();
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
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return r;
    }
    function Tt() {
      var r = 16, s = A.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.has(d, this._key) : !1;
          }, c.prototype.get = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.get(d, this._key) : void 0;
          }, c.prototype.set = function(f, d) {
            var p = y(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, c.prototype.delete = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + g();
        while (A.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, f) {
        if (!i.call(c, a)) {
          if (!f)
            return;
          Object.defineProperty(c, a, { value: A.create() });
        }
        return c[a];
      }
      function P(c, f) {
        for (var d = 0; d < f; ++d)
          c[d] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, c), f;
        }
        return P(new Array(c), c);
      }
      function g() {
        var c = M(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", d = 0; d < r; ++d) {
          var p = c[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function pe(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Be || (Be = {}));
function Ut(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ht(n) {
  return function(e) {
    if (Ut(n)) {
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
function It(n) {
  return Ht(n);
}
function jt(n) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        We(this, "_stylesApplied", !1);
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
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), $ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && $) {
          const b = new CSSStyleSheet(), A = (v = u.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach((w) => b.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, b]);
        } else if (u) {
          const b = u.cloneNode(!0);
          this.shadowRoot.appendChild(b);
        }
        l.forEach((b) => {
          const A = b.cloneNode(!0);
          this.shadowRoot.appendChild(A);
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
function Lt(n) {
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
function me(n) {
  return Lt(n);
}
var K;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(K || (K = {}));
var ee;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(ee || (ee = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, $e = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (n) => new rt(typeof n == "string" ? n : n + "", void 0, we), Wt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, o, u) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[u + 1], n[0]);
  return new rt(t, n, we);
}, Gt = (n, e) => {
  if ($e) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = ae.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, n.appendChild(i);
  }
}, Fe = $e ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return zt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Bt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Yt } = Object, I = globalThis, qe = I.trustedTypes, Xt = qe ? qe.emptyScript : "", ye = I.reactiveElementPolyfillSupport, X = (n, e) => n, le = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Xt : null;
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
} }, be = (n, e) => !Bt(n, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class V extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && Vt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: u } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const $ = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, $, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, i = [...qt(t), ...Zt(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(Fe(o));
    } else e !== void 0 && t.push(Fe(e));
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
    var u;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((u = i.converter) == null ? void 0 : u.toAttribute) !== void 0 ? i.converter : le).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), $ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : le;
      this._$Em = o, this[o] = $.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? be)(this[e], t)) return;
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [u, l] of o) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
        var u;
        return (u = o.hostUpdate) == null ? void 0 : u.call(o);
      }), this.update(t)) : this._$EU();
    } catch (o) {
      throw e = !1, this._$EU(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[X("elementProperties")] = /* @__PURE__ */ new Map(), V[X("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: V }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, ue = J.trustedTypes, Ye = ue ? ue.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, nt = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + H, Jt = `<${it}>`, z = document, te = () => z.createComment(""), re = (n) => n === null || typeof n != "object" && typeof n != "function", Ae = Array.isArray, Qt = (n) => Ae(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Je = />/g, j = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), D = Kt(1), F = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), L = z.createTreeWalker(z, 129);
function ot(n, e) {
  if (!Ae(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const er = (n, e) => {
  const t = n.length - 1, i = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Y;
  for (let $ = 0; $ < t; $++) {
    const v = n[$];
    let b, A, w = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === Y ? A[1] === "!--" ? l = Xe : A[1] !== void 0 ? l = Je : A[2] !== void 0 ? (st.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = j) : A[3] !== void 0 && (l = j) : l === j ? A[0] === ">" ? (l = o ?? Y, w = -1) : A[1] === void 0 ? w = -2 : (w = l.lastIndex - A[2].length, b = A[1], l = A[3] === void 0 ? j : A[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = j : l === Xe || l === Je ? l = Y : (l = j, o = void 0);
    const R = l === j && n[$ + 1].startsWith("/>") ? " " : "";
    u += l === Y ? v + Jt : w >= 0 ? (i.push(b), v.slice(0, w) + nt + v.slice(w) + H + R) : v + H + (w === -2 ? $ : R);
  }
  return [ot(n, u + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ne {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const $ = e.length - 1, v = this.parts, [b, A] = er(e, t);
    if (this.el = ne.createElement(b, i), L.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = L.nextNode()) !== null && v.length < $; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(nt)) {
          const T = A[l++], R = o.getAttribute(w).split(H), U = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: u, name: U[2], strings: R, ctor: U[1] === "." ? rr : U[1] === "?" ? nr : U[1] === "@" ? ir : he }), o.removeAttribute(w);
        } else w.startsWith(H) && (v.push({ type: 6, index: u }), o.removeAttribute(w));
        if (st.test(o.tagName)) {
          const w = o.textContent.split(H), T = w.length - 1;
          if (T > 0) {
            o.textContent = ue ? ue.emptyScript : "";
            for (let R = 0; R < T; R++) o.append(w[R], te()), L.nextNode(), v.push({ type: 2, index: ++u });
            o.append(w[T], te());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) v.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(H, w + 1)) !== -1; ) v.push({ type: 7, index: u }), w += H.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const i = z.createElement("template");
    return i.innerHTML = e, i;
  }
}
function q(n, e, t = n, i) {
  var l, $;
  if (e === F) return e;
  let o = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const u = re(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && (($ = o == null ? void 0 : o._$AO) == null || $.call(o, !1), u === void 0 ? o = void 0 : (o = new u(n), o._$AT(n, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = o : t.l = o), o !== void 0 && (e = q(n, o._$AS(n, e.values), o, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    L.currentNode = o;
    let u = L.nextNode(), l = 0, $ = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let b;
        v.type === 2 ? b = new ie(u, u.nextSibling, this, e) : v.type === 1 ? b = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (b = new sr(u, this, e)), this._$AV.push(b), v = i[++$];
      }
      l !== (v == null ? void 0 : v.index) && (u = L.nextNode(), l++);
    }
    return L.currentNode = z, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ie {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = q(this, e, t), re(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ne.createElement(ot(i.h, i.h[0]), this.options)), i);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), $ = l.u(this.options);
      l.p(t), this.T($), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ne(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const u of e) o === t.length ? t.push(i = new ie(this.O(te()), this.O(te()), this, this.options)) : i = t[o], i._$AI(u), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, u) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(e, t = this, i, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = q(this, e, t, 0), l = !re(e) || e !== this._$AH && e !== F, l && (this._$AH = e);
    else {
      const $ = e;
      let v, b;
      for (e = u[0], v = 0; v < u.length - 1; v++) b = q(this, $[i + v], t, v), b === F && (b = this._$AH[v]), l || (l = !re(b) || b !== this._$AH[v]), b === C ? e = C : e !== C && (e += (b ?? "") + u[v + 1]), this._$AH[v] = b;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends he {
  constructor(e, t, i, o, u) {
    super(e, t, i, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? C) === F) return;
    const i = this._$AH, o = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, u = e !== C && (i === C || o);
    o && this.element.removeEventListener(this.name, this, i), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const _e = J.litHtmlPolyfillSupport;
_e == null || _e(ne, ie), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.2.0");
const or = (n, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new ie(e.insertBefore(te(), u), u, void 0, t ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Q extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = or(t, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var tt;
Q._$litElement$ = !0, Q.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: Q });
const ge = globalThis.litElementPolyfillSupport;
ge == null || ge({ LitElement: Q });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: be }, lr = (n = ar, e, t) => {
  const { kind: i, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, n), i === "accessor") {
    const { name: l } = t;
    return { set($) {
      const v = e.get.call(this);
      e.set.call(this, $), this.requestUpdate(l, v, n);
    }, init($) {
      return $ !== void 0 && this.P(l, void 0, n), $;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function($) {
      const v = this[l];
      e.call(this, $), this.requestUpdate(l, v, n);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function Ee(n) {
  return (e, t) => typeof t == "object" ? lr(n, e, t) : ((i, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(n, e, t);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, W = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? hr(e, t) : e, u = n.length - 1, l; u >= 0; u--)
    (l = n[u]) && (o = (i ? l(e, t, o) : l(o)) || o);
  return i && o && ur(e, t, o), o;
};
let N = class extends Q {
  constructor() {
    super(...arguments), this.text = "Heading", this.level = 2, this.align = "left";
  }
  renderHeading() {
    const n = "heading";
    switch (Math.min(6, Math.max(1, Number(this.level) || 2))) {
      case 1:
        return D`<h1 class=${n}>${this.text}</h1>`;
      case 2:
        return D`<h2 class=${n}>${this.text}</h2>`;
      case 3:
        return D`<h3 class=${n}>${this.text}</h3>`;
      case 4:
        return D`<h4 class=${n}>${this.text}</h4>`;
      case 5:
        return D`<h5 class=${n}>${this.text}</h5>`;
      default:
        return D`<h6 class=${n}>${this.text}</h6>`;
    }
  }
  get textConfig() {
    return this.text;
  }
  set textConfig(n) {
    this.text = n;
  }
  get levelConfig() {
    return this.level;
  }
  set levelConfig(n) {
    this.level = Number(n) || 2;
  }
  get alignConfig() {
    return this.align;
  }
  set alignConfig(n) {
    this.align = n || "left";
  }
  render() {
    return D`
      <div style=${`--zero-heading-align:${this.align || "left"}`}>
        ${this.renderHeading()}
      </div>
    `;
  }
};
N.styles = Wt`
    :host {
      display: block;
    }

    .heading {
      margin: 0;
      color: var(--zero-heading-color, #132238);
      text-align: var(--zero-heading-align, left);
      line-height: 1.1;
      font-weight: 700;
    }
  `;
W([
  Ee({ type: String })
], N.prototype, "text", 2);
W([
  Ee({ type: Number })
], N.prototype, "level", 2);
W([
  Ee({ type: String })
], N.prototype, "align", 2);
W([
  me({
    attributeType: ee.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Text",
    fieldMappings: "text"
  })
], N.prototype, "textConfig", 1);
W([
  me({
    attributeType: ee.PROPERTY,
    uiComponentType: K.DROPDOWN,
    displayLabel: "Level",
    fieldMappings: "level",
    optionItems: [
      { label: "H1", value: 1 },
      { label: "H2", value: 2 },
      { label: "H3", value: 3 },
      { label: "H4", value: 4 },
      { label: "H5", value: 5 },
      { label: "H6", value: 6 }
    ]
  })
], N.prototype, "levelConfig", 1);
W([
  me({
    attributeType: ee.PROPERTY,
    uiComponentType: K.DROPDOWN,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" }
    ]
  })
], N.prototype, "alignConfig", 1);
N = W([
  It({
    name: "zero-heading",
    version: "1.0.0",
    title: "Heading",
    elementSelector: "zero-heading",
    group: "Content",
    iconName: "heading-icon.png"
  }),
  jt()
], N);
export {
  N as ZeroHeading
};
