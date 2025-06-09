var kt = Object.defineProperty;
var Nt = (n, e, t) => e in n ? kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Be = (n, e, t) => Nt(n, typeof e != "symbol" ? e + "" : e, t);
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
var Ge;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : w(), i = o(n);
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
        return ve(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
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
    }, b = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : St(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ot(), j = typeof WeakMap == "function" ? WeakMap : xt(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ct(), Ce = Tt(ae);
    function at(r, s, a, h) {
      if (m(a)) {
        if (!Ne(r))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return mt(r, s);
      } else {
        if (!Ne(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(h) && !m(h) && !F(h))
          throw new TypeError();
        return F(h) && (h = void 0), a = z(a), gt(r, s, a, h);
      }
    }
    e("decorate", at);
    function lt(r, s) {
      function a(h, v) {
        if (!M(h))
          throw new TypeError();
        if (!m(v) && !Et(v))
          throw new TypeError();
        Oe(r, s, h, v);
      }
      return a;
    }
    e("metadata", lt);
    function ut(r, s, a, h) {
      if (!M(a))
        throw new TypeError();
      return m(h) || (h = z(h)), Oe(r, s, a, h);
    }
    e("defineMetadata", ut);
    function ht(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = z(a)), Te(r, s, a);
    }
    e("hasMetadata", ht);
    function ct(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = z(a)), fe(r, s, a);
    }
    e("hasOwnMetadata", ct);
    function dt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = z(a)), Me(r, s, a);
    }
    e("getMetadata", dt);
    function ft(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = z(a)), Se(r, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, s) {
      if (!M(r))
        throw new TypeError();
      return m(s) || (s = z(s)), xe(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!M(r))
        throw new TypeError();
      return m(s) || (s = z(s)), Pe(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (m(a) || (a = z(a)), !M(s))
        throw new TypeError();
      m(a) || (a = z(a));
      var h = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function mt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], v = h(s);
        if (!m(v) && !F(v)) {
          if (!Ue(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function gt(r, s, a, h) {
      for (var v = r.length - 1; v >= 0; --v) {
        var C = r[v], S = C(s, a, h);
        if (!m(S) && !F(S)) {
          if (!M(S))
            throw new TypeError();
          h = S;
        }
      }
      return h;
    }
    function Te(r, s, a) {
      var h = fe(r, s, a);
      if (h)
        return !0;
      var v = ye(s);
      return F(v) ? !1 : Te(r, v, a);
    }
    function fe(r, s, a) {
      var h = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : ke(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Me(r, s, a) {
      var h = fe(r, s, a);
      if (h)
        return Se(r, s, a);
      var v = ye(s);
      if (!F(v))
        return Me(r, v, a);
    }
    function Se(r, s, a) {
      var h = J(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Oe(r, s, a, h) {
      var v = J(
        a,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function xe(r, s) {
      var a = Pe(r, s), h = ye(r);
      if (h === null)
        return a;
      var v = xe(h, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new I(), S = [], g = 0, c = a; g < c.length; g++) {
        var d = c[g], f = C.has(d);
        f || (C.add(d), S.push(d));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var d = _[p], f = C.has(d);
        f || (C.add(d), S.push(d));
      }
      return S;
    }
    function Pe(r, s) {
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
    function m(r) {
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
      var a = "string", h = Ie(r, u);
      if (h !== void 0) {
        var v = h.call(r, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return bt(r);
    }
    function bt(r, s) {
      var a, h, v;
      {
        var C = r.toString;
        if (le(C)) {
          var h = C.call(r);
          if (!M(h))
            return h;
        }
        var a = r.valueOf;
        if (le(a)) {
          var h = a.call(r);
          if (!M(h))
            return h;
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
    function z(r) {
      var s = wt(r);
      return _t(s) ? s : $t(s);
    }
    function Ne(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function le(r) {
      return typeof r == "function";
    }
    function Ue(r) {
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
    function pe(r, s) {
      return r === s || r !== r && s !== s;
    }
    function Ie(r, s) {
      var a = r[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function He(r) {
      var s = Ie(r, l);
      if (!le(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Le(r) {
      return r.value;
    }
    function ze(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function je(r) {
      var s = r.return;
      s && s.call(r);
    }
    function ye(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === b || s !== b)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var v = h.constructor;
      return typeof v != "function" || v === r ? s : v;
    }
    function At() {
      var r;
      !m(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var s, a, h, v = new j(), C = {
        registerProvider: S,
        getProvider: c,
        setProvider: f
      };
      return C;
      function S(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case m(s):
            s = p;
            break;
          case s === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            h === void 0 && (h = new I()), h.add(p);
            break;
        }
      }
      function g(p, _) {
        if (!m(s)) {
          if (s.isProviderFor(p, _))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(p, _))
              return s;
            if (!m(h))
              for (var A = He(h); ; ) {
                var T = ze(A);
                if (!T)
                  return;
                var L = Le(T);
                if (L.isProviderFor(p, _))
                  return je(A), L;
              }
          }
        }
        if (!m(r) && r.isProviderFor(p, _))
          return r;
      }
      function c(p, _) {
        var A = v.get(p), T;
        return m(A) || (T = A.get(_)), m(T) && (T = g(p, _), m(T) || (m(A) && (A = new R(), v.set(p, A)), A.set(_, T))), T;
      }
      function d(p) {
        if (m(p))
          throw new TypeError();
        return s === p || a === p || !m(h) && h.has(p);
      }
      function f(p, _, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var T = c(p, _);
        if (T !== A) {
          if (!m(T))
            return !1;
          var L = v.get(p);
          m(L) && (L = new R(), v.set(p, L)), L.set(_, A);
        }
        return !0;
      }
    }
    function Ct() {
      var r;
      return !m(q) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[q]), m(r) && (r = At()), !m(q) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Tt(r) {
      var s = new j(), a = {
        isProviderFor: function(d, f) {
          var p = s.get(d);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function h(d, f, p) {
        var _ = s.get(d), A = !1;
        if (m(_)) {
          if (!p)
            return;
          _ = new R(), s.set(d, _), A = !0;
        }
        var T = _.get(f);
        if (m(T)) {
          if (!p)
            return;
          if (T = new R(), _.set(f, T), !r.setProvider(d, f, a))
            throw _.delete(f), A && s.delete(d), new Error("Wrong provider for target.");
        }
        return T;
      }
      function v(d, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        return m(_) ? !1 : ke(_.has(d));
      }
      function C(d, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(d);
      }
      function S(d, f, p, _) {
        var A = h(
          p,
          _,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function g(d, f) {
        var p = [], _ = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (m(_))
          return p;
        for (var A = _.keys(), T = He(A), L = 0; ; ) {
          var De = ze(T);
          if (!De)
            return p.length = L, p;
          var Pt = Le(De);
          try {
            p[L] = Pt;
          } catch (Rt) {
            try {
              je(T);
            } finally {
              throw Rt;
            }
          }
          L++;
        }
      }
      function c(d, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(_) || !_.delete(d))
          return !1;
        if (_.size === 0) {
          var A = s.get(f);
          m(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Mt(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, v = r.getOwnMetadataKeys, C = r.deleteMetadata, S = new j(), g = {
        isProviderFor: function(c, d) {
          var f = S.get(c);
          return !m(f) && f.has(d) ? !0 : v(c, d).length ? (m(f) && (f = new I(), S.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function J(r, s, a) {
      var h = ae.getProvider(r, s);
      if (!m(h))
        return h;
      if (a) {
        if (ae.setProvider(r, s, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function St() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
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
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, g.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, g.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pe(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, S);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, d) {
            if (!pe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return h;
      function v(g, c) {
        return g;
      }
      function C(g, c) {
        return c;
      }
      function S(g, c) {
        return [g, c];
      }
    }
    function Ot() {
      var r = (
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
      return r;
    }
    function xt() {
      var r = 16, s = E.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var p = v(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + g();
        while (E.has(s, c));
        return s[c] = !0, c;
      }
      function v(c, d) {
        if (!i.call(c, a)) {
          if (!d)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function C(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function S(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : C(d, c), d;
        }
        return C(new Array(c), c);
      }
      function g() {
        var c = S(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ve(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ge || (Ge = {}));
function Ut(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function It(n) {
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
function Ht(n) {
  return It(n);
}
function Lt(n) {
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
function zt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function jt(n) {
  return function(e, t) {
    try {
      zt(n);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (n.fieldMappings = n.fieldMappings ?? t), i.push(n), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function U(n) {
  return jt(n);
}
var N;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(N || (N = {}));
var P;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(P || (P = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, be = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
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
      i && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dt = (n) => new rt(typeof n == "string" ? n : n + "", void 0, $e), Bt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, o, u) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[u + 1], n[0]);
  return new rt(t, n, $e);
}, Wt = (n, e) => {
  if (be) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, n.appendChild(i);
  }
}, qe = be ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Dt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Vt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Ft, getOwnPropertySymbols: Yt, getPrototypeOf: Xt } = Object, B = globalThis, Fe = B.trustedTypes, Zt = Fe ? Fe.emptyScript : "", me = B.reactiveElementPolyfillSupport, ee = (n, e) => n, he = { toAttribute(n, e) {
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
} }, Ee = (n, e) => !Gt(n, e), Ye = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Y extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && Vt(this.prototype, e, o);
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
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Xt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, i = [...Ft(t), ...Yt(t)];
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
    return Wt(e, this.constructor.elementStyles), e;
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
      const l = (((u = i.converter) == null ? void 0 : u.toAttribute) !== void 0 ? i.converter : he).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : he;
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[ee("elementProperties")] = /* @__PURE__ */ new Map(), Y[ee("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: Y }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, ce = te.trustedTypes, Xe = ce ? ce.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, nt = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + D, Jt = `<${it}>`, V = document, ne = () => V.createComment(""), ie = (n) => n === null || typeof n != "object" && typeof n != "function", Ae = Array.isArray, Qt = (n) => Ae(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, W = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), K = Kt(1), X = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), G = V.createTreeWalker(V, 129);
function ot(n, e) {
  if (!Ae(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const er = (n, e) => {
  const t = n.length - 1, i = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let w = 0; w < t; w++) {
    const y = n[w];
    let $, E, b = -1, R = 0;
    for (; R < y.length && (l.lastIndex = R, E = l.exec(y), E !== null); ) R = l.lastIndex, l === Q ? E[1] === "!--" ? l = Ze : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (st.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = W) : E[3] !== void 0 && (l = W) : l === W ? E[0] === ">" ? (l = o ?? Q, b = -1) : E[1] === void 0 ? b = -2 : (b = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? W : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = W : l === Ze || l === Je ? l = Q : (l = W, o = void 0);
    const I = l === W && n[w + 1].startsWith("/>") ? " " : "";
    u += l === Q ? y + Jt : b >= 0 ? (i.push($), y.slice(0, b) + nt + y.slice(b) + D + I) : y + D + (b === -2 ? w : I);
  }
  return [ot(n, u + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class se {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = e.length - 1, y = this.parts, [$, E] = er(e, t);
    if (this.el = se.createElement($, i), G.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = G.nextNode()) !== null && y.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(nt)) {
          const R = E[l++], I = o.getAttribute(b).split(D), j = /([.?@])?(.*)/.exec(R);
          y.push({ type: 1, index: u, name: j[2], strings: I, ctor: j[1] === "." ? rr : j[1] === "?" ? nr : j[1] === "@" ? ir : de }), o.removeAttribute(b);
        } else b.startsWith(D) && (y.push({ type: 6, index: u }), o.removeAttribute(b));
        if (st.test(o.tagName)) {
          const b = o.textContent.split(D), R = b.length - 1;
          if (R > 0) {
            o.textContent = ce ? ce.emptyScript : "";
            for (let I = 0; I < R; I++) o.append(b[I], ne()), G.nextNode(), y.push({ type: 2, index: ++u });
            o.append(b[R], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) y.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(D, b + 1)) !== -1; ) y.push({ type: 7, index: u }), b += D.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const i = V.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Z(n, e, t = n, i) {
  var l, w;
  if (e === X) return e;
  let o = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    G.currentNode = o;
    let u = G.nextNode(), l = 0, w = 0, y = i[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let $;
        y.type === 2 ? $ = new oe(u, u.nextSibling, this, e) : y.type === 1 ? $ = new y.ctor(u, y.name, y.strings, this, e) : y.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), y = i[++w];
      }
      l !== (y == null ? void 0 : y.index) && (u = G.nextNode(), l++);
    }
    return G.currentNode = V, o;
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
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Z(this, e, t), ie(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = se.createElement(ot(i.h, i.h[0]), this.options)), i);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), w = l.u(this.options);
      l.p(t), this.T(w), this._$AH = l;
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
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, u) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = O;
  }
  _$AI(e, t = this, i, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = Z(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== X, l && (this._$AH = e);
    else {
      const w = e;
      let y, $;
      for (e = u[0], y = 0; y < u.length - 1; y++) $ = Z(this, w[i + y], t, y), $ === X && ($ = this._$AH[y]), l || (l = !ie($) || $ !== this._$AH[y]), $ === O ? e = O : e !== O && (e += ($ ?? "") + u[y + 1]), this._$AH[y] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class nr extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class ir extends de {
  constructor(e, t, i, o, u) {
    super(e, t, i, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? O) === X) return;
    const i = this._$AH, o = e === O && i !== O || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, u = e !== O && (i === O || o);
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
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.2.0");
const or = (n, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new oe(e.insertBefore(ne(), u), u, void 0, t ?? {});
  }
  return o._$AI(n), o;
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
    return X;
  }
}
var tt;
re._$litElement$ = !0, re.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: re });
const we = globalThis.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ee }, lr = (n = ar, e, t) => {
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
function H(n) {
  return (e, t) => typeof t == "object" ? lr(n, e, t) : ((i, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(n, e, t);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, k = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? hr(e, t) : e, u = n.length - 1, l; u >= 0; u--)
    (l = n[u]) && (o = (i ? l(e, t, o) : l(o)) || o);
  return i && o && ur(e, t, o), o;
};
let x = class extends re {
  constructor() {
    super(...arguments), this.value = "", this.label = "Textarea", this.placeholder = "Enter your text here...", this.rows = 4, this.maxLength = 0, this.required = !1, this.disabled = !1, this.autoResize = !1, this.showCharacterCount = !0, this.showWordCount = !1, this.errorMessage = "", this.showError = !1;
  }
  getCharacterCountClass() {
    if (!this.maxLength) return "";
    const e = this.value.length / this.maxLength * 100;
    return e >= 100 ? "over-limit" : e >= 80 ? "near-limit" : "";
  }
  getWordCount() {
    return this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
  }
  autoResizeTextarea(n) {
    this.autoResize && (n.style.height = "auto", n.style.height = n.scrollHeight + "px");
  }
  handleInput(n) {
    const e = n.target;
    this.value = e.value, this.autoResizeTextarea(e), this.dispatchEvent(new CustomEvent("input", {
      detail: {
        value: this.value,
        characterCount: this.value.length,
        wordCount: this.getWordCount()
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(n) {
    const e = n.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        characterCount: this.value.length,
        wordCount: this.getWordCount()
      },
      bubbles: !0,
      composed: !0
    }));
  }
  updated(n) {
    var e;
    if (super.updated(n), n.has("value") && this.autoResize) {
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("textarea");
      t && this.autoResizeTextarea(t);
    }
  }
  render() {
    const n = this.getCharacterCountClass(), e = this.getWordCount();
    return K`
            <div class="form-field">
                <label for="textarea-input">${this.label}</label>
                <textarea 
                    id="textarea-input"
                    class="mat-mdc-input-element ${this.autoResize ? "auto-resize" : ""} ${this.showError ? "error" : ""}"
                    .value="${this.value}" 
                    placeholder="${this.placeholder}"
                    rows="${this.rows}"
                    maxlength="${this.maxLength > 0 ? this.maxLength : ""}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                    @change="${this.handleChange}"
                ></textarea>
                
                ${this.showCharacterCount || this.showWordCount ? K`
                    <div class="textarea-footer">
                        <div class="error-message ${this.showError ? "show" : ""}">
                            ${this.errorMessage}
                        </div>
                        <div>
                            ${this.showCharacterCount ? K`
                                <span class="character-count ${n}">
                                    ${this.value.length}${this.maxLength ? `/${this.maxLength}` : ""} characters
                                </span>
                            ` : ""}
                            ${this.showWordCount ? K`
                                <span class="word-count">
                                    ${e} words
                                </span>
                            ` : ""}
                        </div>
                    </div>
                ` : K`
                    <div class="error-message ${this.showError ? "show" : ""}">
                        ${this.errorMessage}
                    </div>
                `}
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

        textarea.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: 80px;
            resize: vertical;
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
            line-height: 1.5;
        }

        textarea.mat-mdc-input-element.auto-resize {
            resize: none;
            overflow: hidden;
        }

        textarea.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        textarea.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        textarea.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        textarea.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
            resize: none;
        }

        .textarea-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: var(--spacing-xs, 4px);
            font-size: var(--font-size-sm, 12px);
        }

        .character-count {
            color: var(--text-secondary, #666);
        }

        .character-count.near-limit {
            color: var(--warning-color, #ff9800);
        }

        .character-count.over-limit {
            color: var(--error-color, #f44336);
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        textarea.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        textarea.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        .word-count {
            color: var(--text-secondary, #666);
            margin-left: var(--spacing-sm, 8px);
        }
    `;
k([
  H({ type: String }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.TEXTAREA,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], x.prototype, "value", 2);
k([
  H({ type: String }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
k([
  H({ type: String }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], x.prototype, "placeholder", 2);
k([
  H({ type: Number }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Rows",
    fieldMappings: "rows"
  })
], x.prototype, "rows", 2);
k([
  H({ type: Number }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Max Length",
    fieldMappings: "maxLength"
  })
], x.prototype, "maxLength", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], x.prototype, "required", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], x.prototype, "disabled", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Auto Resize",
    fieldMappings: "autoResize"
  })
], x.prototype, "autoResize", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Character Count",
    fieldMappings: "showCharacterCount"
  })
], x.prototype, "showCharacterCount", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Word Count",
    fieldMappings: "showWordCount"
  })
], x.prototype, "showWordCount", 2);
k([
  H({ type: String }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], x.prototype, "errorMessage", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: P.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], x.prototype, "showError", 2);
k([
  U({
    attributeType: P.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], x.prototype, "handleInput", 1);
k([
  U({
    attributeType: P.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], x.prototype, "handleChange", 1);
x = k([
  Ht({
    name: "zero-textarea",
    version: "1.0.0",
    title: "Textarea",
    elementSelector: "zero-textarea",
    group: "Form Controls",
    iconName: "textarea-icon.png"
  }),
  Lt()
], x);
export {
  x as ZeroTextarea
};
