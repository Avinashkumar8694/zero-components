var kt = Object.defineProperty;
var Nt = (r, e, t) => e in r ? kt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => Nt(r, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ge;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : _(), i = o(r);
    typeof t.Reflect < "u" && (i = o(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(y, $) {
      return function(E, w) {
        Object.defineProperty(y, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    function _() {
      return u() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, $ = !_ && !y, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(n, s) {
        return i.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: $ ? function(n, s) {
        return i.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Mt(), z = typeof WeakMap == "function" ? WeakMap : Pt(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ot(), Oe = St(ae);
    function at(n, s, a, d) {
      if (m(a)) {
        if (!Ne(n))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return mt(n, s);
      } else {
        if (!Ne(n))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(d) && !m(d) && !X(d))
          throw new TypeError();
        return X(d) && (d = void 0), a = L(a), gt(n, s, a, d);
      }
    }
    e("decorate", at);
    function lt(n, s) {
      function a(d, v) {
        if (!S(d))
          throw new TypeError();
        if (!m(v) && !Et(v))
          throw new TypeError();
        Me(n, s, d, v);
      }
      return a;
    }
    e("metadata", lt);
    function ut(n, s, a, d) {
      if (!S(a))
        throw new TypeError();
      return m(d) || (d = L(d)), Me(n, s, a, d);
    }
    e("defineMetadata", ut);
    function dt(n, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = L(a)), Se(n, s, a);
    }
    e("hasMetadata", dt);
    function ct(n, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = L(a)), pe(n, s, a);
    }
    e("hasOwnMetadata", ct);
    function ht(n, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = L(a)), xe(n, s, a);
    }
    e("getMetadata", ht);
    function pt(n, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = L(a)), Te(n, s, a);
    }
    e("getOwnMetadata", pt);
    function ft(n, s) {
      if (!S(n))
        throw new TypeError();
      return m(s) || (s = L(s)), Pe(n, s);
    }
    e("getMetadataKeys", ft);
    function vt(n, s) {
      if (!S(n))
        throw new TypeError();
      return m(s) || (s = L(s)), Ce(n, s);
    }
    e("getOwnMetadataKeys", vt);
    function yt(n, s, a) {
      if (!S(s))
        throw new TypeError();
      if (m(a) || (a = L(a)), !S(s))
        throw new TypeError();
      m(a) || (a = L(a));
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(n, s, a);
    }
    e("deleteMetadata", yt);
    function mt(n, s) {
      for (var a = n.length - 1; a >= 0; --a) {
        var d = n[a], v = d(s);
        if (!m(v) && !X(v)) {
          if (!Ue(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function gt(n, s, a, d) {
      for (var v = n.length - 1; v >= 0; --v) {
        var T = n[v], x = T(s, a, d);
        if (!m(x) && !X(x)) {
          if (!S(x))
            throw new TypeError();
          d = x;
        }
      }
      return d;
    }
    function Se(n, s, a) {
      var d = pe(n, s, a);
      if (d)
        return !0;
      var v = ve(s);
      return X(v) ? !1 : Se(n, v, a);
    }
    function pe(n, s, a) {
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : ke(d.OrdinaryHasOwnMetadata(n, s, a));
    }
    function xe(n, s, a) {
      var d = pe(n, s, a);
      if (d)
        return Te(n, s, a);
      var v = ve(s);
      if (!X(v))
        return xe(n, v, a);
    }
    function Te(n, s, a) {
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(n, s, a);
    }
    function Me(n, s, a, d) {
      var v = J(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, s, a, d);
    }
    function Pe(n, s) {
      var a = Ce(n, s), d = ve(n);
      if (d === null)
        return a;
      var v = Pe(d, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var T = new I(), x = [], g = 0, c = a; g < c.length; g++) {
        var h = c[g], p = T.has(h);
        p || (T.add(h), x.push(h));
      }
      for (var f = 0, b = v; f < b.length; f++) {
        var h = b[f], p = T.has(h);
        p || (T.add(h), x.push(h));
      }
      return x;
    }
    function Ce(n, s) {
      var a = J(
        n,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function Re(n) {
      if (n === null)
        return 1;
      switch (typeof n) {
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
          return n === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(n) {
      return n === void 0;
    }
    function X(n) {
      return n === null;
    }
    function bt(n) {
      return typeof n == "symbol";
    }
    function S(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function _t(n, s) {
      switch (Re(n)) {
        case 0:
          return n;
        case 1:
          return n;
        case 2:
          return n;
        case 3:
          return n;
        case 4:
          return n;
        case 5:
          return n;
      }
      var a = "string", d = He(n, u);
      if (d !== void 0) {
        var v = d.call(n, a);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return wt(n);
    }
    function wt(n, s) {
      var a, d;
      {
        var v = n.toString;
        if (le(v)) {
          var d = v.call(n);
          if (!S(d))
            return d;
        }
        var a = n.valueOf;
        if (le(a)) {
          var d = a.call(n);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function ke(n) {
      return !!n;
    }
    function $t(n) {
      return "" + n;
    }
    function L(n) {
      var s = _t(n);
      return bt(s) ? s : $t(s);
    }
    function Ne(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function le(n) {
      return typeof n == "function";
    }
    function Ue(n) {
      return typeof n == "function";
    }
    function Et(n) {
      switch (Re(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(n, s) {
      return n === s || n !== n && s !== s;
    }
    function He(n, s) {
      var a = n[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(n) {
      var s = He(n, l);
      if (!le(s))
        throw new TypeError();
      var a = s.call(n);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function De(n) {
      return n.value;
    }
    function Le(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function je(n) {
      var s = n.return;
      s && s.call(n);
    }
    function ve(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || s !== w)
        return s;
      var a = n.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var v = d.constructor;
      return typeof v != "function" || v === n ? s : v;
    }
    function At() {
      var n;
      !m(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = xt(t.Reflect));
      var s, a, d, v = new z(), T = {
        registerProvider: x,
        getProvider: c,
        setProvider: p
      };
      return T;
      function x(f) {
        if (!Object.isExtensible(T))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case m(s):
            s = f;
            break;
          case s === f:
            break;
          case m(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            d === void 0 && (d = new I()), d.add(f);
            break;
        }
      }
      function g(f, b) {
        if (!m(s)) {
          if (s.isProviderFor(f, b))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(f, b))
              return s;
            if (!m(d))
              for (var A = Ie(d); ; ) {
                var O = Le(A);
                if (!O)
                  return;
                var D = De(O);
                if (D.isProviderFor(f, b))
                  return je(A), D;
              }
          }
        }
        if (!m(n) && n.isProviderFor(f, b))
          return n;
      }
      function c(f, b) {
        var A = v.get(f), O;
        return m(A) || (O = A.get(b)), m(O) && (O = g(f, b), m(O) || (m(A) && (A = new R(), v.set(f, A)), A.set(b, O))), O;
      }
      function h(f) {
        if (m(f))
          throw new TypeError();
        return s === f || a === f || !m(d) && d.has(f);
      }
      function p(f, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var O = c(f, b);
        if (O !== A) {
          if (!m(O))
            return !1;
          var D = v.get(f);
          m(D) && (D = new R(), v.set(f, D)), D.set(b, A);
        }
        return !0;
      }
    }
    function Ot() {
      var n;
      return !m(q) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[q]), m(n) && (n = At()), !m(q) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function St(n) {
      var s = new z(), a = {
        isProviderFor: function(h, p) {
          var f = s.get(h);
          return m(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function d(h, p, f) {
        var b = s.get(h), A = !1;
        if (m(b)) {
          if (!f)
            return;
          b = new R(), s.set(h, b), A = !0;
        }
        var O = b.get(p);
        if (m(O)) {
          if (!f)
            return;
          if (O = new R(), b.set(p, O), !n.setProvider(h, p, a))
            throw b.delete(p), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return O;
      }
      function v(h, p, f) {
        var b = d(
          p,
          f,
          /*Create*/
          !1
        );
        return m(b) ? !1 : ke(b.has(h));
      }
      function T(h, p, f) {
        var b = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function x(h, p, f, b) {
        var A = d(
          f,
          b,
          /*Create*/
          !0
        );
        A.set(h, p);
      }
      function g(h, p) {
        var f = [], b = d(
          h,
          p,
          /*Create*/
          !1
        );
        if (m(b))
          return f;
        for (var A = b.keys(), O = Ie(A), D = 0; ; ) {
          var ze = Le(O);
          if (!ze)
            return f.length = D, f;
          var Ct = De(ze);
          try {
            f[D] = Ct;
          } catch (Rt) {
            try {
              je(O);
            } finally {
              throw Rt;
            }
          }
          D++;
        }
      }
      function c(h, p, f) {
        var b = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = s.get(p);
          m(A) || (A.delete(f), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function xt(n) {
      var s = n.defineMetadata, a = n.hasOwnMetadata, d = n.getOwnMetadata, v = n.getOwnMetadataKeys, T = n.deleteMetadata, x = new z(), g = {
        isProviderFor: function(c, h) {
          var p = x.get(c);
          return !m(p) && p.has(h) ? !0 : v(c, h).length ? (m(p) && (p = new I(), x.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: T
      };
      return g;
    }
    function J(n, s, a) {
      var d = ae.getProvider(n, s);
      if (!m(d))
        return d;
      if (a) {
        if (ae.setProvider(n, s, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var n = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
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
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
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
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, g.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, fe(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, T);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!fe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (fe(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function v(g, c) {
        return g;
      }
      function T(g, c) {
        return c;
      }
      function x(g, c) {
        return [g, c];
      }
    }
    function Mt() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new R();
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
      return n;
    }
    function Pt() {
      var n = 16, s = E.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? E.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? E.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var f = v(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, c.prototype.delete = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + g();
        while (E.has(s, c));
        return s[c] = !0, c;
      }
      function v(c, h) {
        if (!i.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function T(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function x(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : T(h, c), h;
        }
        return T(new Array(c), c);
      }
      function g() {
        var c = x(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < n; ++p) {
          var f = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ye(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (Ut(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function It(r) {
  return Ht(r);
}
function Dt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ve(this, "_stylesApplied", !1);
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
        var y;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const $ = new CSSStyleSheet(), E = (y = u.sheet) == null ? void 0 : y.cssRules;
          E && (Array.from(E).forEach((w) => $.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (u) {
          const $ = u.cloneNode(!0);
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
function Lt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function jt(r) {
  return function(e, t) {
    try {
      Lt(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function H(r) {
  return jt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(N || (N = {}));
var k;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
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
      i && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new rt(typeof r == "string" ? r : r + "", void 0, $e), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, o, u) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[u + 1], r[0]);
  return new rt(t, r, $e);
}, Bt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, Fe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, B = globalThis, qe = B.trustedTypes, Qt = qe ? qe.emptyScript : "", me = B.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Qt : null;
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
} }, Ee = (r, e) => !Gt(r, e), Xe = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Y extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && Wt(this.prototype, e, o);
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
      const _ = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, _, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, i = [...qt(t), ...Xt(t)];
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
    return Bt(e, this.constructor.elementStyles), e;
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
      const l = (((u = i.converter) == null ? void 0 : u.toAttribute) !== void 0 ? i.converter : de).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : de;
      this._$Em = o, this[o] = _.fromAttribute(t, l.type), this._$Em = null;
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[ee("elementProperties")] = /* @__PURE__ */ new Map(), Y[ee("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: Y }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, ce = te.trustedTypes, Ye = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, nt = "$lit$", V = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + V, Zt = `<${it}>`, F = document, ne = () => F.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, Jt = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ze = />/g, G = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), j = Kt(1), Q = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function ot(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, i = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = K;
  for (let _ = 0; _ < t; _++) {
    const y = r[_];
    let $, E, w = -1, R = 0;
    for (; R < y.length && (l.lastIndex = R, E = l.exec(y), E !== null); ) R = l.lastIndex, l === K ? E[1] === "!--" ? l = Qe : E[1] !== void 0 ? l = Ze : E[2] !== void 0 ? (st.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = G) : E[3] !== void 0 && (l = G) : l === G ? E[0] === ">" ? (l = o ?? K, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? G : E[3] === '"' ? Ke : Je) : l === Ke || l === Je ? l = G : l === Qe || l === Ze ? l = K : (l = G, o = void 0);
    const I = l === G && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === K ? y + Zt : w >= 0 ? (i.push($), y.slice(0, w) + nt + y.slice(w) + V + I) : y + V + (w === -2 ? _ : I);
  }
  return [ot(r, u + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class se {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, y = this.parts, [$, E] = er(e, t);
    if (this.el = se.createElement($, i), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = W.nextNode()) !== null && y.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(nt)) {
          const R = E[l++], I = o.getAttribute(w).split(V), z = /([.?@])?(.*)/.exec(R);
          y.push({ type: 1, index: u, name: z[2], strings: I, ctor: z[1] === "." ? rr : z[1] === "?" ? nr : z[1] === "@" ? ir : he }), o.removeAttribute(w);
        } else w.startsWith(V) && (y.push({ type: 6, index: u }), o.removeAttribute(w));
        if (st.test(o.tagName)) {
          const w = o.textContent.split(V), R = w.length - 1;
          if (R > 0) {
            o.textContent = ce ? ce.emptyScript : "";
            for (let I = 0; I < R; I++) o.append(w[I], ne()), W.nextNode(), y.push({ type: 2, index: ++u });
            o.append(w[R], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) y.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(V, w + 1)) !== -1; ) y.push({ type: 7, index: u }), w += V.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const i = F.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Z(r, e, t = r, i) {
  var l, _;
  if (e === Q) return e;
  let o = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), u === void 0 ? o = void 0 : (o = new u(r), o._$AT(r, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = o : t.l = o), o !== void 0 && (e = Z(r, o._$AS(r, e.values), o, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = o;
    let u = W.nextNode(), l = 0, _ = 0, y = i[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let $;
        y.type === 2 ? $ = new oe(u, u.nextSibling, this, e) : y.type === 1 ? $ = new y.ctor(u, y.name, y.strings, this, e) : y.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), y = i[++_];
      }
      l !== (y == null ? void 0 : y.index) && (u = W.nextNode(), l++);
    }
    return W.currentNode = F, o;
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
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Z(this, e, t), ie(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Jt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = se.createElement(ot(i.h, i.h[0]), this.options)), i);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const u of e) o === t.length ? t.push(i = new oe(this.O(ne()), this.O(ne()), this, this.options)) : i = t[o], i._$AI(u), o++;
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
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = M;
  }
  _$AI(e, t = this, i, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = Z(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== Q, l && (this._$AH = e);
    else {
      const _ = e;
      let y, $;
      for (e = u[0], y = 0; y < u.length - 1; y++) $ = Z(this, _[i + y], t, y), $ === Q && ($ = this._$AH[y]), l || (l = !ie($) || $ !== this._$AH[y]), $ === M ? e = M : e !== M && (e += ($ ?? "") + u[y + 1]), this._$AH[y] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class nr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class ir extends he {
  constructor(e, t, i, o, u) {
    super(e, t, i, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? M) === Q) return;
    const i = this._$AH, o = e === M && i !== M || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, u = e !== M && (i === M || o);
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
    Z(this, e);
  }
}
const be = te.litHtmlPolyfillSupport;
be == null || be(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.2.0");
const or = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new oe(e.insertBefore(ne(), u), u, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends Y {
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
    return Q;
  }
}
var tt;
re._$litElement$ = !0, re.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: re });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: re });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, lr = (r = ar, e, t) => {
  const { kind: i, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, r), i === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, y, r);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, r), _;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(_) {
      const y = this[l];
      e.call(this, _), this.requestUpdate(l, y, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function U(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((i, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, C = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? dr(e, t) : e, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (o = (i ? l(e, t, o) : l(o)) || o);
  return i && o && ur(e, t, o), o;
};
let P = class extends re {
  constructor() {
    super(...arguments), this.value = "", this.selectedValues = [], this.label = "Dropdown", this.placeholder = "Select an option...", this.options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" }
    ], this.required = !1, this.disabled = !1, this.multiple = !1, this.searchable = !1, this.customStyle = !1, this.errorMessage = "", this.showError = !1, this.isOpen = !1, this.searchQuery = "";
  }
  getFilteredOptions() {
    return this.searchQuery ? this.options.filter(
      (r) => r.label.toLowerCase().includes(this.searchQuery.toLowerCase()) || r.value.toLowerCase().includes(this.searchQuery.toLowerCase())
    ) : this.options;
  }
  getSelectedLabel() {
    if (this.multiple)
      return this.selectedValues.length > 0 ? `${this.selectedValues.length} selected` : this.placeholder;
    const r = this.options.find((e) => e.value === this.value);
    return r ? r.label : this.placeholder;
  }
  toggleDropdown() {
    this.disabled || (this.isOpen = !this.isOpen, this.searchQuery = "");
  }
  selectOption(r) {
    this.multiple ? this.selectedValues.indexOf(r.value) > -1 ? this.selectedValues = this.selectedValues.filter((t) => t !== r.value) : this.selectedValues = [...this.selectedValues, r.value] : (this.value = r.value, this.isOpen = !1), this.dispatchChangeEvent();
  }
  removeTag(r) {
    this.selectedValues = this.selectedValues.filter((e) => e !== r), this.dispatchChangeEvent();
  }
  handleSearch(r) {
    const e = r.target;
    this.searchQuery = e.value;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        selectedValues: this.selectedValues,
        multiple: this.multiple
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    const e = r.target;
    this.multiple ? this.selectedValues = Array.from(e.selectedOptions).map((t) => t.value) : this.value = e.value, this.dispatchChangeEvent();
  }
  render() {
    if (this.customStyle || this.searchable) {
      const r = this.getFilteredOptions();
      return j`
                <div class="form-field">
                    <label for="dropdown">${this.label}</label>
                    <div class="custom-dropdown">
                        <button 
                            type="button"
                            class="dropdown-button ${this.showError ? "error" : ""}"
                            ?disabled="${this.disabled}"
                            @click="${this.toggleDropdown}"
                        >
                            <span>${this.getSelectedLabel()}</span>
                            <span class="dropdown-arrow ${this.isOpen ? "open" : ""}">▼</span>
                        </button>
                        
                        ${this.isOpen ? j`
                            <div class="dropdown-options">
                                ${this.searchable ? j`
                                    <input 
                                        type="text"
                                        class="search-input"
                                        placeholder="Search options..."
                                        .value="${this.searchQuery}"
                                        @input="${this.handleSearch}"
                                        @click="${(e) => e.stopPropagation()}"
                                    />
                                ` : ""}
                                
                                ${r.length > 0 ? r.map((e) => j`
                                    <div 
                                        class="option-item ${this.multiple ? this.selectedValues.includes(e.value) ? "selected" : "" : this.value === e.value ? "selected" : ""}"
                                        @click="${() => this.selectOption(e)}"
                                    >
                                        ${e.label}
                                    </div>
                                `) : j`
                                    <div class="no-options">No options found</div>
                                `}
                            </div>
                        ` : ""}
                    </div>
                    
                    ${this.multiple && this.selectedValues.length > 0 ? j`
                        <div class="multi-select-tags">
                            ${this.selectedValues.map((e) => {
        const t = this.options.find((i) => i.value === e);
        return j`
                                    <span class="tag">
                                        ${(t == null ? void 0 : t.label) || e}
                                        <span class="tag-remove" @click="${() => this.removeTag(e)}">×</span>
                                    </span>
                                `;
      })}
                        </div>
                    ` : ""}
                    
                    <div class="error-message ${this.showError ? "show" : ""}">
                        ${this.errorMessage}
                    </div>
                </div>
            `;
    }
    return j`
            <div class="form-field">
                <label for="select-input">${this.label}</label>
                <select 
                    id="select-input"
                    class="mat-mdc-input-element ${this.showError ? "error" : ""}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?multiple="${this.multiple}"
                    @change="${this.handleChange}"
                >
                    ${this.multiple ? "" : j`<option value="">${this.placeholder}</option>`}
                    ${this.options.map((r) => j`
                        <option 
                            value="${r.value}"
                            ?selected="${this.multiple ? this.selectedValues.includes(r.value) : this.value === r.value}"
                        >
                            ${r.label}
                        </option>
                    `)}
                </select>
                <div class="error-message ${this.showError ? "show" : ""}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
P.styles = Vt`
        :host {
            display: block;
            width: 100%;
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }        select.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
            cursor: pointer;
        }select.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        select.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        select.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .custom-dropdown {
            position: relative;
        }

        .dropdown-button {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }        .dropdown-button:hover:not(:disabled) {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        .dropdown-button:focus {
            outline: none;
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        .dropdown-button:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }        .dropdown-arrow {
            font-size: var(--font-size-xs, 12px);
            transition: transform 0.2s;
        }

        .dropdown-arrow.open {
            transform: rotate(180deg);
        }

        .dropdown-options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--background-primary, #fff);
            border: 1px solid var(--border-color, #ddd);
            border-top: none;
            border-radius: 0 0 var(--border-radius-sm, 4px) var(--border-radius-sm, 4px);
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .search-input {
            width: 100%;
            padding: var(--spacing-sm, 8px);
            border: none;
            border-bottom: 1px solid var(--border-color, #ddd);
            font-size: var(--font-size-base, 14px);
            box-sizing: border-box;
        }

        .search-input:focus {
            outline: none;
            border-bottom-color: var(--primary-color, #6c63ff);
        }

        .option-item {
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: 1px solid var(--border-light, #f0f0f0);
        }

        .option-item:last-child {
            border-bottom: none;
        }

        .option-item:hover {
            background-color: var(--background-hover, #f5f5f5);
        }

        .option-item.selected {
            background-color: var(--primary-color, #6c63ff);
            color: white;
        }

        .option-item.highlighted {
            background-color: var(--primary-light, rgba(108, 99, 255, 0.1));
        }

        .no-options {
            padding: var(--spacing-md, 12px);
            text-align: center;
            color: var(--text-secondary, #666);
            font-style: italic;
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

        select.mat-mdc-input-element.error,
        .dropdown-button.error {
            border-color: var(--error-color, #f44336);
        }

        select.mat-mdc-input-element.error:focus,
        .dropdown-button.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        .multi-select-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-xs, 4px);
            margin-top: var(--spacing-xs, 4px);
        }        .tag {
            background: var(--primary-color, #6c63ff);
            color: white;
            padding: var(--spacing-xs, 2px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 3px);
            font-size: var(--font-size-sm, 12px);
            display: flex;
            align-items: center;
            gap: var(--spacing-xs, 4px);
        }

        .tag-remove {
            cursor: pointer;
            font-weight: bold;
        }
    `;
C([
  U({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Selected Value",
    fieldMappings: "value"
  })
], P.prototype, "value", 2);
C([
  U({ type: Array }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Selected Values (Multi)",
    fieldMappings: "selectedValues"
  })
], P.prototype, "selectedValues", 2);
C([
  U({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], P.prototype, "label", 2);
C([
  U({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], P.prototype, "placeholder", 2);
C([
  U({ type: Array }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.DROPDOWN,
    displayLabel: "Options",
    optionItems: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" }
    ],
    fieldMappings: "options"
  })
], P.prototype, "options", 2);
C([
  U({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], P.prototype, "required", 2);
C([
  U({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], P.prototype, "disabled", 2);
C([
  U({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Multiple Selection",
    fieldMappings: "multiple"
  })
], P.prototype, "multiple", 2);
C([
  U({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Searchable",
    fieldMappings: "searchable"
  })
], P.prototype, "searchable", 2);
C([
  U({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Custom Style",
    fieldMappings: "customStyle"
  })
], P.prototype, "customStyle", 2);
C([
  U({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], P.prototype, "errorMessage", 2);
C([
  U({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], P.prototype, "showError", 2);
C([
  U({ type: Boolean })
], P.prototype, "isOpen", 2);
C([
  U({ type: String })
], P.prototype, "searchQuery", 2);
C([
  H({
    attributeType: k.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], P.prototype, "handleChange", 1);
P = C([
  It({
    name: "zero-dropdown",
    version: "1.0.0",
    title: "Dropdown",
    elementSelector: "zero-dropdown",
    group: "Form Controls",
    iconName: "dropdown-icon.png"
  }),
  Dt()
], P);
export {
  P as ZeroDropdown
};
