var kt = Object.defineProperty;
var Nt = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var De = (i, e, t) => Nt(i, typeof e != "symbol" ? e + "" : e, t);
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
var We;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = a(i);
    typeof t.Reflect < "u" && (r = a(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function a(y, $) {
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
    var r = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", u = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, $ = !_ && !y, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(n, s) {
        return r.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: $ ? function(n, s) {
        return r.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, w = Object.getPrototypeOf(Function), N = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), j = typeof WeakMap == "function" ? WeakMap : Ot(), Y = a ? Symbol.for("@reflect-metadata:registry") : void 0, oe = St(), Se = Tt(oe);
    function ot(n, s, o, h) {
      if (g(o)) {
        if (!Ne(n))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return gt(n, s);
      } else {
        if (!Ne(n))
          throw new TypeError();
        if (!T(s))
          throw new TypeError();
        if (!T(h) && !g(h) && !F(h))
          throw new TypeError();
        return F(h) && (h = void 0), o = z(o), mt(n, s, o, h);
      }
    }
    e("decorate", ot);
    function lt(n, s) {
      function o(h, v) {
        if (!T(h))
          throw new TypeError();
        if (!g(v) && !Et(v))
          throw new TypeError();
        Pe(n, s, h, v);
      }
      return o;
    }
    e("metadata", lt);
    function ut(n, s, o, h) {
      if (!T(o))
        throw new TypeError();
      return g(h) || (h = z(h)), Pe(n, s, o, h);
    }
    e("defineMetadata", ut);
    function ht(n, s, o) {
      if (!T(s))
        throw new TypeError();
      return g(o) || (o = z(o)), Te(n, s, o);
    }
    e("hasMetadata", ht);
    function dt(n, s, o) {
      if (!T(s))
        throw new TypeError();
      return g(o) || (o = z(o)), pe(n, s, o);
    }
    e("hasOwnMetadata", dt);
    function ct(n, s, o) {
      if (!T(s))
        throw new TypeError();
      return g(o) || (o = z(o)), Ae(n, s, o);
    }
    e("getMetadata", ct);
    function pt(n, s, o) {
      if (!T(s))
        throw new TypeError();
      return g(o) || (o = z(o)), Me(n, s, o);
    }
    e("getOwnMetadata", pt);
    function ft(n, s) {
      if (!T(n))
        throw new TypeError();
      return g(s) || (s = z(s)), Oe(n, s);
    }
    e("getMetadataKeys", ft);
    function vt(n, s) {
      if (!T(n))
        throw new TypeError();
      return g(s) || (s = z(s)), Re(n, s);
    }
    e("getOwnMetadataKeys", vt);
    function yt(n, s, o) {
      if (!T(s))
        throw new TypeError();
      if (g(o) || (o = z(o)), !T(s))
        throw new TypeError();
      g(o) || (o = z(o));
      var h = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return g(h) ? !1 : h.OrdinaryDeleteMetadata(n, s, o);
    }
    e("deleteMetadata", yt);
    function gt(n, s) {
      for (var o = n.length - 1; o >= 0; --o) {
        var h = n[o], v = h(s);
        if (!g(v) && !F(v)) {
          if (!Ue(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function mt(n, s, o, h) {
      for (var v = n.length - 1; v >= 0; --v) {
        var P = n[v], A = P(s, o, h);
        if (!g(A) && !F(A)) {
          if (!T(A))
            throw new TypeError();
          h = A;
        }
      }
      return h;
    }
    function Te(n, s, o) {
      var h = pe(n, s, o);
      if (h)
        return !0;
      var v = ve(s);
      return F(v) ? !1 : Te(n, v, o);
    }
    function pe(n, s, o) {
      var h = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return g(h) ? !1 : ke(h.OrdinaryHasOwnMetadata(n, s, o));
    }
    function Ae(n, s, o) {
      var h = pe(n, s, o);
      if (h)
        return Me(n, s, o);
      var v = ve(s);
      if (!F(v))
        return Ae(n, v, o);
    }
    function Me(n, s, o) {
      var h = Q(
        s,
        o,
        /*Create*/
        !1
      );
      if (!g(h))
        return h.OrdinaryGetOwnMetadata(n, s, o);
    }
    function Pe(n, s, o, h) {
      var v = Q(
        o,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, s, o, h);
    }
    function Oe(n, s) {
      var o = Re(n, s), h = ve(n);
      if (h === null)
        return o;
      var v = Oe(h, s);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var P = new I(), A = [], m = 0, d = o; m < d.length; m++) {
        var c = d[m], p = P.has(c);
        p || (P.add(c), A.push(c));
      }
      for (var f = 0, b = v; f < b.length; f++) {
        var c = b[f], p = P.has(c);
        p || (P.add(c), A.push(c));
      }
      return A;
    }
    function Re(n, s) {
      var o = Q(
        n,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function Ce(n) {
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
    function g(n) {
      return n === void 0;
    }
    function F(n) {
      return n === null;
    }
    function bt(n) {
      return typeof n == "symbol";
    }
    function T(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function _t(n, s) {
      switch (Ce(n)) {
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
      var o = "string", h = Ve(n, u);
      if (h !== void 0) {
        var v = h.call(n, o);
        if (T(v))
          throw new TypeError();
        return v;
      }
      return wt(n);
    }
    function wt(n, s) {
      var o, h;
      {
        var v = n.toString;
        if (le(v)) {
          var h = v.call(n);
          if (!T(h))
            return h;
        }
        var o = n.valueOf;
        if (le(o)) {
          var h = o.call(n);
          if (!T(h))
            return h;
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
    function z(n) {
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
      switch (Ce(n)) {
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
    function Ve(n, s) {
      var o = n[s];
      if (o != null) {
        if (!le(o))
          throw new TypeError();
        return o;
      }
    }
    function Ie(n) {
      var s = Ve(n, l);
      if (!le(s))
        throw new TypeError();
      var o = s.call(n);
      if (!T(o))
        throw new TypeError();
      return o;
    }
    function He(n) {
      return n.value;
    }
    function ze(n) {
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
      var o = n.prototype, h = o && Object.getPrototypeOf(o);
      if (h == null || h === Object.prototype)
        return s;
      var v = h.constructor;
      return typeof v != "function" || v === n ? s : v;
    }
    function xt() {
      var n;
      !g(Y) && typeof t.Reflect < "u" && !(Y in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = At(t.Reflect));
      var s, o, h, v = new j(), P = {
        registerProvider: A,
        getProvider: d,
        setProvider: p
      };
      return P;
      function A(f) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case g(s):
            s = f;
            break;
          case s === f:
            break;
          case g(o):
            o = f;
            break;
          case o === f:
            break;
          default:
            h === void 0 && (h = new I()), h.add(f);
            break;
        }
      }
      function m(f, b) {
        if (!g(s)) {
          if (s.isProviderFor(f, b))
            return s;
          if (!g(o)) {
            if (o.isProviderFor(f, b))
              return s;
            if (!g(h))
              for (var x = Ie(h); ; ) {
                var S = ze(x);
                if (!S)
                  return;
                var H = He(S);
                if (H.isProviderFor(f, b))
                  return je(x), H;
              }
          }
        }
        if (!g(n) && n.isProviderFor(f, b))
          return n;
      }
      function d(f, b) {
        var x = v.get(f), S;
        return g(x) || (S = x.get(b)), g(S) && (S = m(f, b), g(S) || (g(x) && (x = new N(), v.set(f, x)), x.set(b, S))), S;
      }
      function c(f) {
        if (g(f))
          throw new TypeError();
        return s === f || o === f || !g(h) && h.has(f);
      }
      function p(f, b, x) {
        if (!c(x))
          throw new Error("Metadata provider not registered.");
        var S = d(f, b);
        if (S !== x) {
          if (!g(S))
            return !1;
          var H = v.get(f);
          g(H) && (H = new N(), v.set(f, H)), H.set(b, x);
        }
        return !0;
      }
    }
    function St() {
      var n;
      return !g(Y) && T(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[Y]), g(n) && (n = xt()), !g(Y) && T(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Tt(n) {
      var s = new j(), o = {
        isProviderFor: function(c, p) {
          var f = s.get(c);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: A,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return oe.registerProvider(o), o;
      function h(c, p, f) {
        var b = s.get(c), x = !1;
        if (g(b)) {
          if (!f)
            return;
          b = new N(), s.set(c, b), x = !0;
        }
        var S = b.get(p);
        if (g(S)) {
          if (!f)
            return;
          if (S = new N(), b.set(p, S), !n.setProvider(c, p, o))
            throw b.delete(p), x && s.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(c, p, f) {
        var b = h(
          p,
          f,
          /*Create*/
          !1
        );
        return g(b) ? !1 : ke(b.has(c));
      }
      function P(c, p, f) {
        var b = h(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(c);
      }
      function A(c, p, f, b) {
        var x = h(
          f,
          b,
          /*Create*/
          !0
        );
        x.set(c, p);
      }
      function m(c, p) {
        var f = [], b = h(
          c,
          p,
          /*Create*/
          !1
        );
        if (g(b))
          return f;
        for (var x = b.keys(), S = Ie(x), H = 0; ; ) {
          var Le = ze(S);
          if (!Le)
            return f.length = H, f;
          var Rt = He(Le);
          try {
            f[H] = Rt;
          } catch (Ct) {
            try {
              je(S);
            } finally {
              throw Ct;
            }
          }
          H++;
        }
      }
      function d(c, p, f) {
        var b = h(
          p,
          f,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(c))
          return !1;
        if (b.size === 0) {
          var x = s.get(p);
          g(x) || (x.delete(f), x.size === 0 && s.delete(x));
        }
        return !0;
      }
    }
    function At(n) {
      var s = n.defineMetadata, o = n.hasOwnMetadata, h = n.getOwnMetadata, v = n.getOwnMetadataKeys, P = n.deleteMetadata, A = new j(), m = {
        isProviderFor: function(d, c) {
          var p = A.get(d);
          return !g(p) && p.has(c) ? !0 : v(d, c).length ? (g(p) && (p = new I(), A.set(d, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function Q(n, s, o) {
      var h = oe.getProvider(n, s);
      if (!g(h))
        return h;
      if (o) {
        if (oe.setProvider(n, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var n = {}, s = [], o = (
        /** @class */
        function() {
          function m(d, c, p) {
            this._index = 0, this._keys = d, this._values = c, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var c = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, m;
        }()
      ), h = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(d) {
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, m.prototype.set = function(d, c) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, m.prototype.delete = function(d) {
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, f = c + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, fe(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new o(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new o(this._keys, this._values, A);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(d, c) {
            if (!fe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (fe(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return h;
      function v(m, d) {
        return m;
      }
      function P(m, d) {
        return d;
      }
      function A(m, d) {
        return [m, d];
      }
    }
    function Pt() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new N();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
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
    function Ot() {
      var n = 16, s = E.create(), o = h();
      return (
        /** @class */
        function() {
          function d() {
            this._key = h();
          }
          return d.prototype.has = function(c) {
            var p = v(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? E.has(p, this._key) : !1;
          }, d.prototype.get = function(c) {
            var p = v(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? E.get(p, this._key) : void 0;
          }, d.prototype.set = function(c, p) {
            var f = v(
              c,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, d.prototype.delete = function(c) {
            var p = v(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = h();
          }, d;
        }()
      );
      function h() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while (E.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, c) {
        if (!r.call(d, o)) {
          if (!c)
            return;
          Object.defineProperty(d, o, { value: E.create() });
        }
        return d[o];
      }
      function P(d, c) {
        for (var p = 0; p < c; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function A(d) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : P(c, d), c;
        }
        return P(new Array(d), d);
      }
      function m() {
        var d = A(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var c = "", p = 0; p < n; ++p) {
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ye(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(We || (We = {}));
function Ut(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Vt(i) {
  return function(e) {
    if (Ut(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${i.elementSelector}-${i.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function It(i) {
  return Vt(i);
}
function Ht(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        De(this, "_stylesApplied", !1);
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
function zt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function jt(i) {
  return function(e, t) {
    try {
      zt(i);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function U(i) {
  return jt(i);
}
var k;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(k || (k = {}));
var R;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(R || (R = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, $e), Dt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, a, u) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + i[u + 1], i[0]);
  return new rt(t, i, $e);
}, Bt = (i, e) => {
  if (we) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), a = ue.litNonce;
    a !== void 0 && r.setAttribute("nonce", a), r.textContent = t.cssText, i.appendChild(r);
  }
}, Ye = we ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Lt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Gt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Ft, getOwnPropertySymbols: Xt, getPrototypeOf: qt } = Object, D = globalThis, Fe = D.trustedTypes, Zt = Fe ? Fe.emptyScript : "", ge = D.reactiveElementPolyfillSupport, ee = (i, e) => i, he = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Zt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (i, e) => !Wt(i, e), Xe = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class q extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), a = this.getPropertyDescriptor(e, r, t);
      a !== void 0 && Gt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: a, set: u } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return a == null ? void 0 : a.call(this);
    }, set(l) {
      const _ = a == null ? void 0 : a.call(this);
      u.call(this, l), this.requestUpdate(e, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, r = [...Ft(t), ...Xt(t)];
      for (const a of r) this.createProperty(a, t[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, a] of t) this.elementProperties.set(r, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const a = this._$Eu(t, r);
      a !== void 0 && this._$Eh.set(a, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const a of r) t.unshift(Ye(a));
    } else e !== void 0 && t.push(Ye(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Bt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$EC(e, t) {
    var u;
    const r = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, r);
    if (a !== void 0 && r.reflect === !0) {
      const l = (((u = r.converter) == null ? void 0 : u.toAttribute) !== void 0 ? r.converter : he).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(a) : this.setAttribute(a, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const r = this.constructor, a = r._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const l = r.getPropertyOptions(a), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : he;
      this._$Em = a, this[a] = _.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(e)), !(r.hasChanged ?? Ee)(this[e], t)) return;
      this.P(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, r) {
    this._$AL.has(e) || this._$AL.set(e, t), r.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [u, l] of a) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((a) => {
        var u;
        return (u = a.hostUpdate) == null ? void 0 : u.call(a);
      }), this.update(t)) : this._$EU();
    } catch (a) {
      throw e = !1, this._$EU(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var a;
      return (a = r.hostUpdated) == null ? void 0 : a.call(r);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[ee("elementProperties")] = /* @__PURE__ */ new Map(), q[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: q }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, de = te.trustedTypes, qe = de ? de.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + L, Jt = `<${it}>`, G = document, ne = () => G.createComment(""), ie = (i) => i === null || typeof i != "object" && typeof i != "function", xe = Array.isArray, Qt = (i) => xe(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, B = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), X = Kt(1), Z = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), W = G.createTreeWalker(G, 129);
function at(i, e) {
  if (!xe(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, r = [];
  let a, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = K;
  for (let _ = 0; _ < t; _++) {
    const y = i[_];
    let $, E, w = -1, N = 0;
    for (; N < y.length && (l.lastIndex = N, E = l.exec(y), E !== null); ) N = l.lastIndex, l === K ? E[1] === "!--" ? l = Ze : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (st.test(E[2]) && (a = RegExp("</" + E[2], "g")), l = B) : E[3] !== void 0 && (l = B) : l === B ? E[0] === ">" ? (l = a ?? K, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? B : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = B : l === Ze || l === Je ? l = K : (l = B, a = void 0);
    const I = l === B && i[_ + 1].startsWith("/>") ? " " : "";
    u += l === K ? y + Jt : w >= 0 ? (r.push($), y.slice(0, w) + nt + y.slice(w) + L + I) : y + L + (w === -2 ? _ : I);
  }
  return [at(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class se {
  constructor({ strings: e, _$litType$: t }, r) {
    let a;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, y = this.parts, [$, E] = er(e, t);
    if (this.el = se.createElement($, r), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (a = W.nextNode()) !== null && y.length < _; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const w of a.getAttributeNames()) if (w.endsWith(nt)) {
          const N = E[l++], I = a.getAttribute(w).split(L), j = /([.?@])?(.*)/.exec(N);
          y.push({ type: 1, index: u, name: j[2], strings: I, ctor: j[1] === "." ? rr : j[1] === "?" ? nr : j[1] === "@" ? ir : ce }), a.removeAttribute(w);
        } else w.startsWith(L) && (y.push({ type: 6, index: u }), a.removeAttribute(w));
        if (st.test(a.tagName)) {
          const w = a.textContent.split(L), N = w.length - 1;
          if (N > 0) {
            a.textContent = de ? de.emptyScript : "";
            for (let I = 0; I < N; I++) a.append(w[I], ne()), W.nextNode(), y.push({ type: 2, index: ++u });
            a.append(w[N], ne());
          }
        }
      } else if (a.nodeType === 8) if (a.data === it) y.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = a.data.indexOf(L, w + 1)) !== -1; ) y.push({ type: 7, index: u }), w += L.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const r = G.createElement("template");
    return r.innerHTML = e, r;
  }
}
function J(i, e, t = i, r) {
  var l, _;
  if (e === Z) return e;
  let a = r !== void 0 ? (l = t.o) == null ? void 0 : l[r] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== u && ((_ = a == null ? void 0 : a._$AO) == null || _.call(a, !1), u === void 0 ? a = void 0 : (a = new u(i), a._$AT(i, t, r)), r !== void 0 ? (t.o ?? (t.o = []))[r] = a : t.l = a), a !== void 0 && (e = J(i, a._$AS(i, e.values), a, r)), e;
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
    const { el: { content: t }, parts: r } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    W.currentNode = a;
    let u = W.nextNode(), l = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let $;
        y.type === 2 ? $ = new ae(u, u.nextSibling, this, e) : y.type === 1 ? $ = new y.ctor(u, y.name, y.strings, this, e) : y.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), y = r[++_];
      }
      l !== (y == null ? void 0 : y.index) && (u = W.nextNode(), l++);
    }
    return W.currentNode = G, a;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, r, a) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = a, this.v = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: r } = e, a = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = se.createElement(at(r.h, r.h[0]), this.options)), r);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === a) this._$AH.p(t);
    else {
      const l = new tr(a, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, a = 0;
    for (const u of e) a === t.length ? t.push(r = new ae(this.O(ne()), this.O(ne()), this, this.options)) : r = t[a], r._$AI(u), a++;
    a < t.length && (this._$AR(r && r._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const a = e.nextSibling;
      e.remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, a, u) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = u, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = O;
  }
  _$AI(e, t = this, r, a) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = J(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== Z, l && (this._$AH = e);
    else {
      const _ = e;
      let y, $;
      for (e = u[0], y = 0; y < u.length - 1; y++) $ = J(this, _[r + y], t, y), $ === Z && ($ = this._$AH[y]), l || (l = !ie($) || $ !== this._$AH[y]), $ === O ? e = O : e !== O && (e += ($ ?? "") + u[y + 1]), this._$AH[y] = $;
    }
    l && !a && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class nr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class ir extends ce {
  constructor(e, t, r, a, u) {
    super(e, t, r, a, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? O) === Z) return;
    const r = this._$AH, a = e === O && r !== O || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, u = e !== O && (r === O || a);
    a && this.element.removeEventListener(this.name, this, r), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const be = te.litHtmlPolyfillSupport;
be == null || be(se, ae), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.2.0");
const ar = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = r._$litPart$;
  if (a === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = a = new ae(e.insertBefore(ne(), u), u, void 0, t ?? {});
  }
  return a._$AI(i), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = ar(t, this.renderRoot, this.renderOptions);
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
    return Z;
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
const or = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ee }, lr = (i = or, e, t) => {
  const { kind: r, metadata: a } = t;
  let u = globalThis.litPropertyMetadata.get(a);
  if (u === void 0 && globalThis.litPropertyMetadata.set(a, u = /* @__PURE__ */ new Map()), u.set(t.name, i), r === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, y, i);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, i), _;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(_) {
      const y = this[l];
      e.call(this, _), this.requestUpdate(l, y, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function V(i) {
  return (e, t) => typeof t == "object" ? lr(i, e, t) : ((r, a, u) => {
    const l = a.hasOwnProperty(u);
    return a.constructor.createProperty(u, l ? { ...r, wrapped: !0 } : r), l ? Object.getOwnPropertyDescriptor(a, u) : void 0;
  })(i, e, t);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, C = (i, e, t, r) => {
  for (var a = r > 1 ? void 0 : r ? hr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (a = (r ? l(e, t, a) : l(a)) || a);
  return r && a && ur(e, t, a), a;
};
let M = class extends re {
  constructor() {
    super(...arguments), this.value = 50, this.min = 0, this.max = 100, this.step = 1, this.label = "Range Slider", this.unit = "", this.dualRange = !1, this.secondValue = 75, this.showTooltip = !1, this.showValueInputs = !1, this.showStepControls = !1, this.disabled = !1, this.errorMessage = "", this.showError = !1, this.showTooltipState = !1;
  }
  getProgressWidth() {
    if (this.dualRange) {
      const i = Math.min(this.value, this.secondValue), e = Math.max(this.value, this.secondValue), t = this.max - this.min;
      return `${(e - i) / t * 100}%`;
    }
    return `${(this.value - this.min) / (this.max - this.min) * 100}%`;
  }
  getProgressLeft() {
    if (this.dualRange) {
      const i = Math.min(this.value, this.secondValue), e = this.max - this.min;
      return `${(i - this.min) / e * 100}%`;
    }
    return "0%";
  }
  formatValue(i) {
    return `${i}${this.unit}`;
  }
  handleSliderInput(i, e = !1) {
    const t = i.target, r = Number(t.value);
    e ? this.secondValue = r : this.value = r, this.dispatchChangeEvent();
  }
  handleValueInput(i, e = !1) {
    const t = i.target;
    let r = Number(t.value);
    r = Math.max(this.min, Math.min(this.max, r)), e ? this.secondValue = r : this.value = r, t.value = String(r), this.dispatchChangeEvent();
  }
  stepValue(i, e = !1) {
    let r = (e ? this.secondValue : this.value) + i * this.step;
    r = Math.max(this.min, Math.min(this.max, r)), e ? this.secondValue = r : this.value = r, this.dispatchChangeEvent();
  }
  showTooltipHandler() {
    this.showTooltip && (this.showTooltipState = !0);
  }
  hideTooltipHandler() {
    this.showTooltipState = !1;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        secondValue: this.dualRange ? this.secondValue : void 0,
        min: this.value,
        max: this.dualRange ? Math.max(this.value, this.secondValue) : this.value,
        dualRange: this.dualRange
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(i) {
    this.dispatchChangeEvent();
  }
  render() {
    const i = this.dualRange ? Math.min(this.value, this.secondValue) : this.value, e = this.dualRange ? Math.max(this.value, this.secondValue) : this.value;
    return X`
            <div class="form-field">
                <label>${this.label}</label>
                
                <div class="range-container">
                    <div class="range-display">
                        <span>${this.formatValue(this.min)}</span>
                        <span class="range-value">
                            ${this.dualRange ? `${this.formatValue(i)} - ${this.formatValue(e)}` : this.formatValue(this.value)}
                        </span>
                        <span>${this.formatValue(this.max)}</span>
                    </div>
                    
                    <div class="slider-track ${this.showError ? "error" : ""} ${this.dualRange ? "dual-slider" : ""}">
                        <div class="slider-progress" 
                             style="left: ${this.getProgressLeft()}; width: ${this.getProgressWidth()}"></div>
                        
                        <input 
                            type="range"
                            min="${this.min}"
                            max="${this.max}"
                            step="${this.step}"
                            .value="${String(this.value)}"
                            ?disabled="${this.disabled}"
                            class="${this.showError ? "error" : ""}"
                            @input="${(t) => this.handleSliderInput(t, !1)}"
                            @mouseenter="${this.showTooltipHandler}"
                            @mouseleave="${this.hideTooltipHandler}"
                        />
                        
                        ${this.dualRange ? X`
                            <input 
                                type="range"
                                min="${this.min}"
                                max="${this.max}"
                                step="${this.step}"
                                .value="${String(this.secondValue)}"
                                ?disabled="${this.disabled}"
                                class="${this.showError ? "error" : ""}"
                                @input="${(t) => this.handleSliderInput(t, !0)}"
                                @mouseenter="${this.showTooltipHandler}"
                                @mouseleave="${this.hideTooltipHandler}"
                            />
                        ` : ""}
                        
                        ${this.showTooltip && this.showTooltipState ? X`
                            <div class="tooltip show" style="left: ${this.getProgressLeft()}">
                                ${this.formatValue(this.value)}
                            </div>
                        ` : ""}
                    </div>
                    
                    ${this.showValueInputs ? X`
                        <div class="current-values">
                            <div class="value-input">
                                <span>Value:</span>
                                <input 
                                    type="number"
                                    min="${this.min}"
                                    max="${this.max}"
                                    step="${this.step}"
                                    .value="${String(this.value)}"
                                    ?disabled="${this.disabled}"
                                    @change="${(t) => this.handleValueInput(t, !1)}"
                                />
                            </div>
                            ${this.dualRange ? X`
                                <div class="value-input">
                                    <span>Second:</span>
                                    <input 
                                        type="number"
                                        min="${this.min}"
                                        max="${this.max}"
                                        step="${this.step}"
                                        .value="${String(this.secondValue)}"
                                        ?disabled="${this.disabled}"
                                        @change="${(t) => this.handleValueInput(t, !0)}"
                                    />
                                </div>
                            ` : ""}
                        </div>
                    ` : ""}
                    
                    ${this.showStepControls ? X`
                        <div class="step-controls">
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${() => this.stepValue(-1, !1)}"
                            >
                                -${this.step}
                            </button>
                            <span>Step: ${this.step}</span>
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${() => this.stepValue(1, !1)}"
                            >
                                +${this.step}
                            </button>
                        </div>
                    ` : ""}
                </div>
                
                <div class="error-message ${this.showError ? "show" : ""}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
M.styles = Dt`
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
        }

        .range-container {
            padding: var(--spacing-md, 12px) 0;
        }

        .range-display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-sm, 8px);
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
        }

        .range-value {
            font-weight: 500;
            color: var(--primary-color, #6c63ff);
            font-size: var(--font-size-base, 14px);
        }

        .slider-track {
            position: relative;            height: 6px;
            background: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-xs, 3px);
            margin: var(--spacing-md, 12px) 0;
        }

        .slider-progress {
            position: absolute;
            height: 100%;            background: var(--primary-color, #6c63ff);
            border-radius: var(--border-radius-xs, 3px);
            transition: all 0.2s;
        }

        input[type="range"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 6px;
            background: transparent;
            outline: none;
            cursor: pointer;
            pointer-events: none;
        }        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: var(--icon-size-md, 20px);
            height: var(--icon-size-md, 20px);
            border-radius: 50%;
            background: var(--primary-color, #6c63ff);
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            cursor: pointer;
            pointer-events: all;
            transition: all 0.2s;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }        input[type="range"]::-moz-range-thumb {
            width: var(--icon-size-md, 20px);
            height: var(--icon-size-md, 20px);
            border-radius: 50%;
            background: var(--primary-color, #6c63ff);
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            cursor: pointer;
            pointer-events: all;
            transition: all 0.2s;
        }

        input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        input[type="range"]:disabled {
            cursor: not-allowed;
        }

        input[type="range"]:disabled::-webkit-slider-thumb {
            background: var(--background-disabled, #ccc);
            cursor: not-allowed;
        }

        input[type="range"]:disabled::-moz-range-thumb {
            background: var(--background-disabled, #ccc);
            cursor: not-allowed;
        }

        .dual-slider {
            position: relative;
        }

        .dual-slider input[type="range"] {
            position: absolute;
            top: 0;
        }

        .dual-slider input[type="range"]:first-child {
            z-index: 1;
        }

        .dual-slider input[type="range"]:last-child {
            z-index: 2;
        }

        .value-labels {
            display: flex;
            justify-content: space-between;
            margin-top: var(--spacing-sm, 8px);
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
        }

        .current-values {
            display: flex;
            justify-content: center;
            gap: var(--spacing-md, 12px);
            margin-top: var(--spacing-sm, 8px);
            font-size: var(--font-size-base, 14px);
            font-weight: 500;
        }

        .value-input {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs, 4px);
        }        .value-input input {
            width: 60px;
            padding: var(--spacing-xs, 2px) var(--spacing-xs, 6px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-xs, 3px);
            font-size: var(--font-size-sm, 12px);
            text-align: center;
        }

        .step-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: var(--spacing-sm, 8px);
        }        .step-button {
            background: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            color: var(--text-primary, #333);
            cursor: pointer;
            font-size: var(--font-size-sm, 12px);
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 3px);
            transition: var(--transition-fast, all 0.2s);
        }

        .step-button:hover:not(:disabled) {
            background: var(--primary-color, #6c63ff);
            color: white;
        }

        .step-button:disabled {
            background: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #ccc);
            cursor: not-allowed;
        }        .tooltip {
            position: absolute;
            background: var(--text-primary, #333);
            color: white;
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 3px);
            font-size: var(--font-size-sm, 12px);
            white-space: nowrap;
            transform: translateX(-50%);
            top: -35px;
            opacity: 0;
            transition: var(--transition-fast, opacity 0.2s);
            pointer-events: none;
            z-index: 10;
        }

        .tooltip.show {
            opacity: 1;
        }

        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-top-color: var(--text-primary, #333);
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

        .slider-track.error .slider-progress {
            background: var(--error-color, #f44336);
        }

        input[type="range"].error::-webkit-slider-thumb {
            background: var(--error-color, #f44336);
        }

        input[type="range"].error::-moz-range-thumb {
            background: var(--error-color, #f44336);
        }
    `;
C([
  V({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], M.prototype, "value", 2);
C([
  V({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.NUMBER_INPUT,
    displayLabel: "Min Value",
    fieldMappings: "min"
  })
], M.prototype, "min", 2);
C([
  V({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.NUMBER_INPUT,
    displayLabel: "Max Value",
    fieldMappings: "max"
  })
], M.prototype, "max", 2);
C([
  V({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.NUMBER_INPUT,
    displayLabel: "Step",
    fieldMappings: "step"
  })
], M.prototype, "step", 2);
C([
  V({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], M.prototype, "label", 2);
C([
  V({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.TEXT_INPUT,
    displayLabel: "Unit",
    placeholderText: "e.g., px, %, $",
    fieldMappings: "unit"
  })
], M.prototype, "unit", 2);
C([
  V({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Dual Range",
    fieldMappings: "dualRange"
  })
], M.prototype, "dualRange", 2);
C([
  V({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.NUMBER_INPUT,
    displayLabel: "Second Value",
    fieldMappings: "secondValue"
  })
], M.prototype, "secondValue", 2);
C([
  V({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Show Tooltip",
    fieldMappings: "showTooltip"
  })
], M.prototype, "showTooltip", 2);
C([
  V({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Show Value Inputs",
    fieldMappings: "showValueInputs"
  })
], M.prototype, "showValueInputs", 2);
C([
  V({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Show Step Controls",
    fieldMappings: "showStepControls"
  })
], M.prototype, "showStepControls", 2);
C([
  V({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], M.prototype, "disabled", 2);
C([
  V({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], M.prototype, "errorMessage", 2);
C([
  V({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], M.prototype, "showError", 2);
C([
  V({ type: Boolean })
], M.prototype, "showTooltipState", 2);
C([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], M.prototype, "handleChange", 1);
M = C([
  It({
    name: "zero-range-slider",
    version: "1.0.0",
    title: "Range Slider",
    elementSelector: "zero-range-slider",
    group: "Form Controls",
    iconName: "range-slider-icon.png"
  }),
  Ht()
], M);
export {
  M as ZeroRangeSlider
};
