var kt = Object.defineProperty;
var Ut = (n, e, t) => e in n ? kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
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
var Ve;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : w(), i = o(n);
    typeof t.Reflect < "u" && (i = o(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function o(y, $) {
      return function(E, b) {
        Object.defineProperty(y, E, { configurable: !0, writable: !0, value: b }), $ && $(E, b);
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
    function w() {
      return u() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, $ = !w && !y, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(r, s) {
        return i.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: $ ? function(r, s) {
        return i.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, b = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), U = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), L = typeof WeakMap == "function" ? WeakMap : Ct(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, oe = St(), Se = Pt(oe);
    function at(r, s, a, d) {
      if (g(a)) {
        if (!Ue(r))
          throw new TypeError();
        if (!Ne(s))
          throw new TypeError();
        return gt(r, s);
      } else {
        if (!Ue(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(d) && !g(d) && !F(d))
          throw new TypeError();
        return F(d) && (d = void 0), a = j(a), mt(r, s, a, d);
      }
    }
    e("decorate", at);
    function lt(r, s) {
      function a(d, v) {
        if (!M(d))
          throw new TypeError();
        if (!g(v) && !Et(v))
          throw new TypeError();
        Te(r, s, d, v);
      }
      return a;
    }
    e("metadata", lt);
    function ut(r, s, a, d) {
      if (!M(a))
        throw new TypeError();
      return g(d) || (d = j(d)), Te(r, s, a, d);
    }
    e("defineMetadata", ut);
    function dt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = j(a)), Pe(r, s, a);
    }
    e("hasMetadata", dt);
    function ht(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = j(a)), ce(r, s, a);
    }
    e("hasOwnMetadata", ht);
    function ct(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = j(a)), Me(r, s, a);
    }
    e("getMetadata", ct);
    function ft(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = j(a)), Oe(r, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, s) {
      if (!M(r))
        throw new TypeError();
      return g(s) || (s = j(s)), Ce(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!M(r))
        throw new TypeError();
      return g(s) || (s = j(s)), xe(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (g(a) || (a = j(a)), !M(s))
        throw new TypeError();
      g(a) || (a = j(a));
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function gt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var d = r[a], v = d(s);
        if (!g(v) && !F(v)) {
          if (!Ne(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function mt(r, s, a, d) {
      for (var v = r.length - 1; v >= 0; --v) {
        var S = r[v], O = S(s, a, d);
        if (!g(O) && !F(O)) {
          if (!M(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Pe(r, s, a) {
      var d = ce(r, s, a);
      if (d)
        return !0;
      var v = pe(s);
      return F(v) ? !1 : Pe(r, v, a);
    }
    function ce(r, s, a) {
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : ke(d.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Me(r, s, a) {
      var d = ce(r, s, a);
      if (d)
        return Oe(r, s, a);
      var v = pe(s);
      if (!F(v))
        return Me(r, v, a);
    }
    function Oe(r, s, a) {
      var d = J(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Te(r, s, a, d) {
      var v = J(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(r, s, a, d);
    }
    function Ce(r, s) {
      var a = xe(r, s), d = pe(r);
      if (d === null)
        return a;
      var v = Ce(d, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var S = new U(), O = [], m = 0, h = a; m < h.length; m++) {
        var c = h[m], f = S.has(c);
        f || (S.add(c), O.push(c));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var c = _[p], f = S.has(c);
        f || (S.add(c), O.push(c));
      }
      return O;
    }
    function xe(r, s) {
      var a = J(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Re(r) {
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
    function g(r) {
      return r === void 0;
    }
    function F(r) {
      return r === null;
    }
    function _t(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function wt(r, s) {
      switch (Re(r)) {
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
      var a = "string", d = Ie(r, u);
      if (d !== void 0) {
        var v = d.call(r, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return bt(r);
    }
    function bt(r, s) {
      var a, d, v;
      {
        var S = r.toString;
        if (ae(S)) {
          var d = S.call(r);
          if (!M(d))
            return d;
        }
        var a = r.valueOf;
        if (ae(a)) {
          var d = a.call(r);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function ke(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function j(r) {
      var s = wt(r);
      return _t(s) ? s : $t(s);
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
      switch (Re(r)) {
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
    function Ie(r, s) {
      var a = r[s];
      if (a != null) {
        if (!ae(a))
          throw new TypeError();
        return a;
      }
    }
    function He(r) {
      var s = Ie(r, l);
      if (!ae(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
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
    function pe(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === b || s !== b)
        return s;
      var a = r.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var v = d.constructor;
      return typeof v != "function" || v === r ? s : v;
    }
    function At() {
      var r;
      !g(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var s, a, d, v = new L(), S = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return S;
      function O(p) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case g(s):
            s = p;
            break;
          case s === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            d === void 0 && (d = new U()), d.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!g(s)) {
          if (s.isProviderFor(p, _))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, _))
              return s;
            if (!g(d))
              for (var A = He(d); ; ) {
                var P = De(A);
                if (!P)
                  return;
                var N = je(P);
                if (N.isProviderFor(p, _))
                  return Le(A), N;
              }
          }
        }
        if (!g(r) && r.isProviderFor(p, _))
          return r;
      }
      function h(p, _) {
        var A = v.get(p), P;
        return g(A) || (P = A.get(_)), g(P) && (P = m(p, _), g(P) || (g(A) && (A = new C(), v.set(p, A)), A.set(_, P))), P;
      }
      function c(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(d) && d.has(p);
      }
      function f(p, _, A) {
        if (!c(A))
          throw new Error("Metadata provider not registered.");
        var P = h(p, _);
        if (P !== A) {
          if (!g(P))
            return !1;
          var N = v.get(p);
          g(N) && (N = new C(), v.set(p, N)), N.set(_, A);
        }
        return !0;
      }
    }
    function St() {
      var r;
      return !g(q) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[q]), g(r) && (r = At()), !g(q) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Pt(r) {
      var s = new L(), a = {
        isProviderFor: function(c, f) {
          var p = s.get(c);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return oe.registerProvider(a), a;
      function d(c, f, p) {
        var _ = s.get(c), A = !1;
        if (g(_)) {
          if (!p)
            return;
          _ = new C(), s.set(c, _), A = !0;
        }
        var P = _.get(f);
        if (g(P)) {
          if (!p)
            return;
          if (P = new C(), _.set(f, P), !r.setProvider(c, f, a))
            throw _.delete(f), A && s.delete(c), new Error("Wrong provider for target.");
        }
        return P;
      }
      function v(c, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        return g(_) ? !1 : ke(_.has(c));
      }
      function S(c, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(_))
          return _.get(c);
      }
      function O(c, f, p, _) {
        var A = d(
          p,
          _,
          /*Create*/
          !0
        );
        A.set(c, f);
      }
      function m(c, f) {
        var p = [], _ = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (g(_))
          return p;
        for (var A = _.keys(), P = He(A), N = 0; ; ) {
          var ze = De(P);
          if (!ze)
            return p.length = N, p;
          var xt = je(ze);
          try {
            p[N] = xt;
          } catch (Rt) {
            try {
              Le(P);
            } finally {
              throw Rt;
            }
          }
          N++;
        }
      }
      function h(c, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(_) || !_.delete(c))
          return !1;
        if (_.size === 0) {
          var A = s.get(f);
          g(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Mt(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, d = r.getOwnMetadata, v = r.getOwnMetadataKeys, S = r.deleteMetadata, O = new L(), m = {
        isProviderFor: function(h, c) {
          var f = O.get(h);
          return !g(f) && f.has(c) ? !0 : v(h, c).length ? (g(f) && (f = new U(), O.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: S
      };
      return m;
    }
    function J(r, s, a) {
      var d = oe.getProvider(r, s);
      if (!g(d))
        return d;
      if (a) {
        if (oe.setProvider(r, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function m(h, c, f) {
            this._index = 0, this._keys = h, this._values = c, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, m;
        }()
      ), d = (
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
          }), m.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, m.prototype.set = function(h, c) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, m.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, p = c + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, fe(h, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(h, c) {
            if (!fe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return d;
      function v(m, h) {
        return m;
      }
      function S(m, h) {
        return h;
      }
      function O(m, h) {
        return [m, h];
      }
    }
    function Tt() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new C();
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
    function Ct() {
      var r = 16, s = E.create(), a = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var p = v(
              c,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + m();
        while (E.has(s, h));
        return s[h] = !0, h;
      }
      function v(h, c) {
        if (!i.call(h, a)) {
          if (!c)
            return;
          Object.defineProperty(h, a, { value: E.create() });
        }
        return h[a];
      }
      function S(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : S(c, h), c;
        }
        return S(new Array(h), h);
      }
      function m() {
        var h = O(r);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < r; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), p < 16 && (c += "0"), c += p.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ye(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ve || (Ve = {}));
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
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var y;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), w = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && w) {
          const $ = new CSSStyleSheet(), E = (y = u.sheet) == null ? void 0 : y.cssRules;
          E && (Array.from(E).forEach((b) => $.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
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
function H(n) {
  return Lt(n);
}
var I;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(I || (I = {}));
var R;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(R || (R = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = globalThis, be = le.ShadowRoot && (le.ShadyCSS === void 0 || le.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (n) => new rt(typeof n == "string" ? n : n + "", void 0, $e), Bt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, o, u) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[u + 1], n[0]);
  return new rt(t, n, $e);
}, Gt = (n, e) => {
  if (be) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = le.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, n.appendChild(i);
  }
}, qe = be ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return zt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Wt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Ft, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, B = globalThis, Fe = B.trustedTypes, Zt = Fe ? Fe.emptyScript : "", ve = B.reactiveElementPolyfillSupport, K = (n, e) => n, ue = { toAttribute(n, e) {
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
} }, Ee = (n, e) => !Vt(n, e), Xe = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Ee };
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
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && Wt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: u } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const w = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, w, i);
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
      for (const o of i) t.unshift(qe(o));
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
    var u;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((u = i.converter) == null ? void 0 : u.toAttribute) !== void 0 ? i.converter : ue).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ue;
      this._$Em = o, this[o] = w.fromAttribute(t, l.type), this._$Em = null;
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[K("elementProperties")] = /* @__PURE__ */ new Map(), X[K("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, de = ee.trustedTypes, Ye = de ? de.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, nt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + z, Jt = `<${it}>`, W = document, re = () => W.createComment(""), ne = (n) => n === null || typeof n != "object" && typeof n != "function", Ae = Array.isArray, Qt = (n) => Ae(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, G = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), me = Kt(1), Y = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), V = W.createTreeWalker(W, 129);
function ot(n, e) {
  if (!Ae(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const er = (n, e) => {
  const t = n.length - 1, i = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let w = 0; w < t; w++) {
    const y = n[w];
    let $, E, b = -1, C = 0;
    for (; C < y.length && (l.lastIndex = C, E = l.exec(y), E !== null); ) C = l.lastIndex, l === Q ? E[1] === "!--" ? l = Ze : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (st.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = G) : E[3] !== void 0 && (l = G) : l === G ? E[0] === ">" ? (l = o ?? Q, b = -1) : E[1] === void 0 ? b = -2 : (b = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? G : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = G : l === Ze || l === Je ? l = Q : (l = G, o = void 0);
    const U = l === G && n[w + 1].startsWith("/>") ? " " : "";
    u += l === Q ? y + Jt : b >= 0 ? (i.push($), y.slice(0, b) + nt + y.slice(b) + z + U) : y + z + (b === -2 ? w : U);
  }
  return [ot(n, u + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ie {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = e.length - 1, y = this.parts, [$, E] = er(e, t);
    if (this.el = ie.createElement($, i), V.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = V.nextNode()) !== null && y.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(nt)) {
          const C = E[l++], U = o.getAttribute(b).split(z), L = /([.?@])?(.*)/.exec(C);
          y.push({ type: 1, index: u, name: L[2], strings: U, ctor: L[1] === "." ? rr : L[1] === "?" ? nr : L[1] === "@" ? ir : he }), o.removeAttribute(b);
        } else b.startsWith(z) && (y.push({ type: 6, index: u }), o.removeAttribute(b));
        if (st.test(o.tagName)) {
          const b = o.textContent.split(z), C = b.length - 1;
          if (C > 0) {
            o.textContent = de ? de.emptyScript : "";
            for (let U = 0; U < C; U++) o.append(b[U], re()), V.nextNode(), y.push({ type: 2, index: ++u });
            o.append(b[C], re());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) y.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(z, b + 1)) !== -1; ) y.push({ type: 7, index: u }), b += z.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const i = W.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Z(n, e, t = n, i) {
  var l, w;
  if (e === Y) return e;
  let o = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const u = ne(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(n), o._$AT(n, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = o : t.l = o), o !== void 0 && (e = Z(n, o._$AS(n, e.values), o, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    V.currentNode = o;
    let u = V.nextNode(), l = 0, w = 0, y = i[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let $;
        y.type === 2 ? $ = new se(u, u.nextSibling, this, e) : y.type === 1 ? $ = new y.ctor(u, y.name, y.strings, this, e) : y.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), y = i[++w];
      }
      l !== (y == null ? void 0 : y.index) && (u = V.nextNode(), l++);
    }
    return V.currentNode = W, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Z(this, e, t), ne(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ie.createElement(ot(i.h, i.h[0]), this.options)), i);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), w = l.u(this.options);
      l.p(t), this.T(w), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const u of e) o === t.length ? t.push(i = new se(this.O(re()), this.O(re()), this, this.options)) : i = t[o], i._$AI(u), o++;
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
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = T;
  }
  _$AI(e, t = this, i, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = Z(this, e, t, 0), l = !ne(e) || e !== this._$AH && e !== Y, l && (this._$AH = e);
    else {
      const w = e;
      let y, $;
      for (e = u[0], y = 0; y < u.length - 1; y++) $ = Z(this, w[i + y], t, y), $ === Y && ($ = this._$AH[y]), l || (l = !ne($) || $ !== this._$AH[y]), $ === T ? e = T : e !== T && (e += ($ ?? "") + u[y + 1]), this._$AH[y] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class nr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class ir extends he {
  constructor(e, t, i, o, u) {
    super(e, t, i, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? T) === Y) return;
    const i = this._$AH, o = e === T && i !== T || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, u = e !== T && (i === T || o);
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
const _e = ee.litHtmlPolyfillSupport;
_e == null || _e(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const or = (n, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new se(e.insertBefore(re(), u), u, void 0, t ?? {});
  }
  return o._$AI(n), o;
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
    return Y;
  }
}
var tt;
te._$litElement$ = !0, te.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: te });
const we = globalThis.litElementPolyfillSupport;
we == null || we({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Ee }, lr = (n = ar, e, t) => {
  const { kind: i, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, n), i === "accessor") {
    const { name: l } = t;
    return { set(w) {
      const y = e.get.call(this);
      e.set.call(this, w), this.requestUpdate(l, y, n);
    }, init(w) {
      return w !== void 0 && this.P(l, void 0, n), w;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(w) {
      const y = this[l];
      e.call(this, w), this.requestUpdate(l, y, n);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function D(n) {
  return (e, t) => typeof t == "object" ? lr(n, e, t) : ((i, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(n, e, t);
}
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, k = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? dr(e, t) : e, u = n.length - 1, l; u >= 0; u--)
    (l = n[u]) && (o = (i ? l(e, t, o) : l(o)) || o);
  return i && o && ur(e, t, o), o;
};
let x = class extends te {
  constructor() {
    super(...arguments), this.value = "", this.label = "Password", this.placeholder = "Enter password", this.required = !1, this.disabled = !1, this.showToggle = !0, this.showStrengthMeter = !1, this.errorMessage = "", this.showError = !1, this.showPassword = !1;
  }
  getPasswordStrength() {
    const n = this.value;
    let e = 0;
    return n.length >= 8 && e++, /[a-z]/.test(n) && e++, /[A-Z]/.test(n) && e++, /[0-9]/.test(n) && e++, /[^A-Za-z0-9]/.test(n) && e++, e <= 2 ? { strength: "weak", width: 33 } : e <= 4 ? { strength: "medium", width: 66 } : { strength: "strong", width: 100 };
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  handleInput(n) {
    const e = n.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(n) {
    const e = n.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    const n = this.getPasswordStrength();
    return me`
            <div class="form-field">
                <label for="password-input">${this.label}</label>
                <div class="password-container">
                    <input 
                        id="password-input"
                        type="${this.showPassword ? "text" : "password"}" 
                        class="mat-mdc-input-element ${this.showError ? "error" : ""}"
                        .value="${this.value}" 
                        placeholder="${this.placeholder}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                        @change="${this.handleChange}"
                    />
                    ${this.showToggle ? me`
                        <button 
                            type="button"
                            class="toggle-button"
                            ?disabled="${this.disabled}"
                            @click="${this.togglePasswordVisibility}"
                        >
                            ${this.showPassword ? "🙈" : "👁️"}
                        </button>
                    ` : ""}
                </div>
                ${this.showStrengthMeter && this.value ? me`
                    <div class="strength-meter">
                        <div class="strength-bar strength-${n.strength}" 
                             style="width: ${n.width}%"></div>
                    </div>
                ` : ""}
                <div class="error-message ${this.showError ? "show" : ""}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
x.styles = Bt`
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

        .password-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            padding-right: 40px;
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        input.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .toggle-button {
            position: absolute;
            right: 8px;
            background: none;
            border: none;
            cursor: pointer;            color: var(--text-secondary, #666);
            font-size: var(--icon-size-sm, 16px);
            padding: var(--spacing-xs, 4px);
            border-radius: var(--border-radius-xs, 2px);
            transition: color 0.2s;
        }

        .toggle-button:hover {
            color: var(--primary-color, #6c63ff);
        }

        .toggle-button:disabled {
            cursor: not-allowed;
            color: var(--text-disabled, #ccc);
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

        input.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        input.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }        .strength-meter {
            margin-top: var(--spacing-xs, 4px);
            height: 4px;
            background-color: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-xs, 2px);
            overflow: hidden;
        }

        .strength-bar {
            height: 100%;
            transition: width 0.3s, background-color 0.3s;
            border-radius: var(--border-radius-xs, 2px);
        }

        .strength-weak { background-color: var(--error-color, #f44336); }
        .strength-medium { background-color: var(--warning-color, #ff9800); }
        .strength-strong { background-color: var(--success-color, #4caf50); }
    `;
k([
  D({ type: String }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.PASSWORD_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], x.prototype, "value", 2);
k([
  D({ type: String }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
k([
  D({ type: String }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], x.prototype, "placeholder", 2);
k([
  D({ type: Boolean }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], x.prototype, "required", 2);
k([
  D({ type: Boolean }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], x.prototype, "disabled", 2);
k([
  D({ type: Boolean }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Toggle Button",
    fieldMappings: "showToggle"
  })
], x.prototype, "showToggle", 2);
k([
  D({ type: Boolean }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Strength Meter",
    fieldMappings: "showStrengthMeter"
  })
], x.prototype, "showStrengthMeter", 2);
k([
  D({ type: String }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], x.prototype, "errorMessage", 2);
k([
  D({ type: Boolean }),
  H({
    attributeType: R.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], x.prototype, "showError", 2);
k([
  D({ type: Boolean })
], x.prototype, "showPassword", 2);
k([
  H({
    attributeType: R.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], x.prototype, "handleInput", 1);
k([
  H({
    attributeType: R.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], x.prototype, "handleChange", 1);
x = k([
  Ht({
    name: "zero-password-input",
    version: "1.0.0",
    title: "Password Input",
    elementSelector: "zero-password-input",
    group: "Form Controls",
    iconName: "password-input-icon.png"
  }),
  jt()
], x);
export {
  x as ZeroPasswordInput
};
