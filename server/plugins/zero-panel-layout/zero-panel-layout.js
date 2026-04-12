var kt = Object.defineProperty;
var Nt = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Be = (i, e, t) => Nt(i, typeof e != "symbol" ? e + "" : e, t);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : b(), n = o(i);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(v, $) {
      return function(E, w) {
        Object.defineProperty(v, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    function b() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !b && !v, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: $ ? function(r, s) {
        return n.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: $ ? function(r, s) {
        return n.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), D = typeof WeakMap == "function" ? WeakMap : Ct(), Y = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = St(), Se = Pt(ae);
    function at(r, s, a, d) {
      if (m(a)) {
        if (!Ne(r))
          throw new TypeError();
        if (!Ie(s))
          throw new TypeError();
        return mt(r, s);
      } else {
        if (!Ne(r))
          throw new TypeError();
        if (!P(s))
          throw new TypeError();
        if (!P(d) && !m(d) && !q(d))
          throw new TypeError();
        return q(d) && (d = void 0), a = H(a), gt(r, s, a, d);
      }
    }
    e("decorate", at);
    function lt(r, s) {
      function a(d, y) {
        if (!P(d))
          throw new TypeError();
        if (!m(y) && !Et(y))
          throw new TypeError();
        Te(r, s, d, y);
      }
      return a;
    }
    e("metadata", lt);
    function ut(r, s, a, d) {
      if (!P(a))
        throw new TypeError();
      return m(d) || (d = H(d)), Te(r, s, a, d);
    }
    e("defineMetadata", ut);
    function dt(r, s, a) {
      if (!P(s))
        throw new TypeError();
      return m(a) || (a = H(a)), Pe(r, s, a);
    }
    e("hasMetadata", dt);
    function ct(r, s, a) {
      if (!P(s))
        throw new TypeError();
      return m(a) || (a = H(a)), fe(r, s, a);
    }
    e("hasOwnMetadata", ct);
    function ht(r, s, a) {
      if (!P(s))
        throw new TypeError();
      return m(a) || (a = H(a)), Oe(r, s, a);
    }
    e("getMetadata", ht);
    function ft(r, s, a) {
      if (!P(s))
        throw new TypeError();
      return m(a) || (a = H(a)), Me(r, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, s) {
      if (!P(r))
        throw new TypeError();
      return m(s) || (s = H(s)), Ce(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!P(r))
        throw new TypeError();
      return m(s) || (s = H(s)), xe(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!P(s))
        throw new TypeError();
      if (m(a) || (a = H(a)), !P(s))
        throw new TypeError();
      m(a) || (a = H(a));
      var d = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function mt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var d = r[a], y = d(s);
        if (!m(y) && !q(y)) {
          if (!Ie(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function gt(r, s, a, d) {
      for (var y = r.length - 1; y >= 0; --y) {
        var M = r[y], O = M(s, a, d);
        if (!m(O) && !q(O)) {
          if (!P(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Pe(r, s, a) {
      var d = fe(r, s, a);
      if (d)
        return !0;
      var y = ye(s);
      return q(y) ? !1 : Pe(r, y, a);
    }
    function fe(r, s, a) {
      var d = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : ke(d.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Oe(r, s, a) {
      var d = fe(r, s, a);
      if (d)
        return Me(r, s, a);
      var y = ye(s);
      if (!q(y))
        return Oe(r, y, a);
    }
    function Me(r, s, a) {
      var d = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Te(r, s, a, d) {
      var y = Q(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, d);
    }
    function Ce(r, s) {
      var a = xe(r, s), d = ye(r);
      if (d === null)
        return a;
      var y = Ce(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var M = new N(), O = [], g = 0, c = a; g < c.length; g++) {
        var h = c[g], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var p = 0, _ = y; p < _.length; p++) {
        var h = _[p], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function xe(r, s) {
      var a = Q(
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
    function q(r) {
      return r === null;
    }
    function _t(r) {
      return typeof r == "symbol";
    }
    function P(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function bt(r, s) {
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
      var a = "string", d = Ue(r, u);
      if (d !== void 0) {
        var y = d.call(r, a);
        if (P(y))
          throw new TypeError();
        return y;
      }
      return wt(r);
    }
    function wt(r, s) {
      var a, d;
      {
        var y = r.toString;
        if (le(y)) {
          var d = y.call(r);
          if (!P(d))
            return d;
        }
        var a = r.valueOf;
        if (le(a)) {
          var d = a.call(r);
          if (!P(d))
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
    function H(r) {
      var s = bt(r);
      return _t(s) ? s : $t(s);
    }
    function Ne(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function le(r) {
      return typeof r == "function";
    }
    function Ie(r) {
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
    function Ue(r, s) {
      var a = r[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function ze(r) {
      var s = Ue(r, l);
      if (!le(s))
        throw new TypeError();
      var a = s.call(r);
      if (!P(a))
        throw new TypeError();
      return a;
    }
    function He(r) {
      return r.value;
    }
    function je(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function De(r) {
      var s = r.return;
      s && s.call(r);
    }
    function ye(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === w || s !== w)
        return s;
      var a = r.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function At() {
      var r;
      !m(Y) && typeof t.Reflect < "u" && !(Y in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Ot(t.Reflect));
      var s, a, d, y = new D(), M = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return M;
      function O(p) {
        if (!Object.isExtensible(M))
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
            d === void 0 && (d = new N()), d.add(p);
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
            if (!m(d))
              for (var A = ze(d); ; ) {
                var S = je(A);
                if (!S)
                  return;
                var U = He(S);
                if (U.isProviderFor(p, _))
                  return De(A), U;
              }
          }
        }
        if (!m(r) && r.isProviderFor(p, _))
          return r;
      }
      function c(p, _) {
        var A = y.get(p), S;
        return m(A) || (S = A.get(_)), m(S) && (S = g(p, _), m(S) || (m(A) && (A = new x(), y.set(p, A)), A.set(_, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return s === p || a === p || !m(d) && d.has(p);
      }
      function f(p, _, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = c(p, _);
        if (S !== A) {
          if (!m(S))
            return !1;
          var U = y.get(p);
          m(U) && (U = new x(), y.set(p, U)), U.set(_, A);
        }
        return !0;
      }
    }
    function St() {
      var r;
      return !m(Y) && P(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[Y]), m(r) && (r = At()), !m(Y) && P(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Pt(r) {
      var s = new D(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function d(h, f, p) {
        var _ = s.get(h), A = !1;
        if (m(_)) {
          if (!p)
            return;
          _ = new x(), s.set(h, _), A = !0;
        }
        var S = _.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new x(), _.set(f, S), !r.setProvider(h, f, a))
            throw _.delete(f), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        return m(_) ? !1 : ke(_.has(h));
      }
      function M(h, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(h);
      }
      function O(h, f, p, _) {
        var A = d(
          p,
          _,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var p = [], _ = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(_))
          return p;
        for (var A = _.keys(), S = ze(A), U = 0; ; ) {
          var Le = je(S);
          if (!Le)
            return p.length = U, p;
          var xt = He(Le);
          try {
            p[U] = xt;
          } catch (Rt) {
            try {
              De(S);
            } finally {
              throw Rt;
            }
          }
          U++;
        }
      }
      function c(h, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var A = s.get(f);
          m(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Ot(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, d = r.getOwnMetadata, y = r.getOwnMetadataKeys, M = r.deleteMetadata, O = new D(), g = {
        isProviderFor: function(c, h) {
          var f = O.get(c);
          return !m(f) && f.has(h) ? !0 : y(c, h).length ? (m(f) && (f = new N(), O.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: M
      };
      return g;
    }
    function Q(r, s, a) {
      var d = ae.getProvider(r, s);
      if (!m(d))
        return d;
      if (a) {
        if (ae.setProvider(r, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
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
              return this._keys.length--, this._values.length--, pe(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!pe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], c)) {
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
      function M(g, c) {
        return c;
      }
      function O(g, c) {
        return [g, c];
      }
    }
    function Tt() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new x();
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
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
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
        while (E.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function M(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, c), h;
        }
        return M(new Array(c), c);
      }
      function g() {
        var c = O(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ge || (Ge = {}));
function It(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ut(i) {
  return function(e) {
    if (It(i)) {
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
function zt(i) {
  return Ut(i);
}
function Ht(i) {
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
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && b) {
          const $ = new CSSStyleSheet(), E = (v = u.sheet) == null ? void 0 : v.cssRules;
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
function jt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Dt(i) {
  return function(e, t) {
    try {
      jt(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (i.fieldMappings = i.fieldMappings ?? t);
      }
      n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function j(i) {
  return Dt(i);
}
var z;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override";
})(z || (z = {}));
var I;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, $e), Bt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new rt(t, i, $e);
}, Vt = (i, e) => {
  if (we) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, Fe = we ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Lt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Yt, getOwnPropertySymbols: qt, getPrototypeOf: Xt } = Object, B = globalThis, Ye = B.trustedTypes, Zt = Ye ? Ye.emptyScript : "", me = B.reactiveElementPolyfillSupport, ee = (i, e) => i, de = { toAttribute(i, e) {
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
} }, Ee = (i, e) => !Gt(i, e), qe = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class X extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Wt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const b = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, b, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Xt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Yt(t), ...qt(t)];
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
    return Vt(e, this.constructor.elementStyles), e;
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
  _$EC(e, t) {
    var u;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), b = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : de;
      this._$Em = o, this[o] = b.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Ee)(this[e], t)) return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    var n;
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
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
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
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, ce = te.trustedTypes, Xe = ce ? ce.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + L, Jt = `<${it}>`, F = document, ne = () => F.createComment(""), ie = (i) => i === null || typeof i != "object" && typeof i != "function", Ae = Array.isArray, Qt = (i) => Ae(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Je = />/g, V = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, ot = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), G = Kt(1), Z = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function st(i, e) {
  if (!Ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = K;
  for (let b = 0; b < t; b++) {
    const v = i[b];
    let $, E, w = -1, x = 0;
    for (; x < v.length && (l.lastIndex = x, E = l.exec(v), E !== null); ) x = l.lastIndex, l === K ? E[1] === "!--" ? l = Ze : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (ot.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = V) : E[3] !== void 0 && (l = V) : l === V ? E[0] === ">" ? (l = o ?? K, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? V : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = V : l === Ze || l === Je ? l = K : (l = V, o = void 0);
    const N = l === V && i[b + 1].startsWith("/>") ? " " : "";
    u += l === K ? v + Jt : w >= 0 ? (n.push($), v.slice(0, w) + nt + v.slice(w) + L + N) : v + L + (w === -2 ? b : N);
  }
  return [st(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const b = e.length - 1, v = this.parts, [$, E] = er(e, t);
    if (this.el = oe.createElement($, n), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = W.nextNode()) !== null && v.length < b; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(nt)) {
          const x = E[l++], N = o.getAttribute(w).split(L), D = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: u, name: D[2], strings: N, ctor: D[1] === "." ? rr : D[1] === "?" ? nr : D[1] === "@" ? ir : he }), o.removeAttribute(w);
        } else w.startsWith(L) && (v.push({ type: 6, index: u }), o.removeAttribute(w));
        if (ot.test(o.tagName)) {
          const w = o.textContent.split(L), x = w.length - 1;
          if (x > 0) {
            o.textContent = ce ? ce.emptyScript : "";
            for (let N = 0; N < x; N++) o.append(w[N], ne()), W.nextNode(), v.push({ type: 2, index: ++u });
            o.append(w[x], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) v.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(L, w + 1)) !== -1; ) v.push({ type: 7, index: u }), w += L.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = F.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(i, e, t = i, n) {
  var l, b;
  if (e === Z) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((b = o == null ? void 0 : o._$AO) == null || b.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = J(i, o._$AS(i, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = o;
    let u = W.nextNode(), l = 0, b = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new se(u, u.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && ($ = new or(u, this, e)), this._$AV.push($), v = n[++b];
      }
      l !== (v == null ? void 0 : v.index) && (u = W.nextNode(), l++);
    }
    return W.currentNode = F, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(st(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), b = l.u(this.options);
      l.p(t), this.T(b), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new se(this.O(ne()), this.O(ne()), this, this.options)) : n = t[o], n._$AI(u), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
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
  constructor(e, t, n, o, u) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = J(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== Z, l && (this._$AH = e);
    else {
      const b = e;
      let v, $;
      for (e = u[0], v = 0; v < u.length - 1; v++) $ = J(this, b[n + v], t, v), $ === Z && ($ = this._$AH[v]), l || (l = !ie($) || $ !== this._$AH[v]), $ === T ? e = T : e !== T && (e += ($ ?? "") + u[v + 1]), this._$AH[v] = $;
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
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? T) === Z) return;
    const n = this._$AH, o = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== T && (n === T || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(oe, se), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.2.0");
const sr = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(ne(), u), u, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends X {
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
    return Z;
  }
}
var tt;
re._$litElement$ = !0, re.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: re });
const be = globalThis.litElementPolyfillSupport;
be == null || be({ LitElement: re });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, ur = (i = lr, e, t) => {
  const { kind: n, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, i), n === "accessor") {
    const { name: l } = t;
    return { set(b) {
      const v = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(l, v, i);
    }, init(b) {
      return b !== void 0 && this.P(l, void 0, i), b;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(b) {
      const v = this[l];
      e.call(this, b), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function k(i) {
  return (e, t) => typeof t == "object" ? ur(i, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var dr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, R = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && dr(e, t, o), o;
};
let C = class extends re {
  constructor() {
    super(...arguments), this.direction = "row", this.totalColumns = 2, this.itemsPerRow = 2, this.justify = "flex-start", this.align = "stretch", this.gap = 16, this.visible = !0, this.enableHeader = !1, this.expanded = !0, this.expandable = !0, this.label = "Panel Header", this.icon = "📄", this.iconPosition = "start";
  }
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { totalColumns: this.totalColumns },
        bubbles: !0,
        composed: !0
      })
    );
  }
  toggleExpanded() {
    this.expandable && (this.expanded = !this.expanded, this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } })));
  }
  renderIcon() {
    return this.icon ? G`<span class="icon">${this.icon}</span>` : G``;
  }
  render() {
    if (!this.visible) return G``;
    const i = Math.max(1, Math.min(12, Number(this.totalColumns) || 1));
    return G`
      <div class="panel-container">
        ${this.enableHeader ? G`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? G`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" style="--zero-items-per-row: ${this.itemsPerRow || 1}">
              ${Array.from({ length: i }).map(
      (e, t) => G`<slot name="col-${t + 1}" @slotchange=${t === 0 ? this.handleSlotChange : null}></slot>`
    )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
C.styles = Bt`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-border-soft, #e2e8f0);
      border-radius: 8px;
      overflow: hidden;
      background: var(--zero-surface, #ffffff);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      display: var(--zero-display, flex);
      flex-direction: var(--zero-direction, row);
      flex-wrap: wrap;
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
      gap: var(--zero-gap, 16px);
      width: 100%;
      box-sizing: border-box;
      padding: 16px;
      min-height: 120px;
    }

    slot {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* Calculate width based on items per row, minus the gap share */
      flex: 0 0 calc((100% / var(--zero-items-per-row, 1)) - ((var(--zero-gap, 16px) * (var(--zero-items-per-row, 1) - 1)) / var(--zero-items-per-row, 1)));
      min-height: 120px;
      pointer-events: auto;
      border: 1px dashed rgba(0,0,0,0.1);
      box-sizing: border-box;
      transition: flex var(--zero-panel-transition);
    }

    /* Force full width if specifically in column direction or single column row */
    .layout[style*="--zero-direction: column"] slot,
    .layout[style*="--zero-items-per-row: 1"] slot {
      flex: 0 0 100%;
    }
  `;
R([
  k({ type: String })
], C.prototype, "direction", 2);
R([
  k({ type: Number, attribute: "total-columns" }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns"
  })
], C.prototype, "totalColumns", 2);
R([
  k({ type: Number, attribute: "items-per-row" }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow"
  })
], C.prototype, "itemsPerRow", 2);
R([
  k({ type: String })
], C.prototype, "justify", 2);
R([
  k({ type: String })
], C.prototype, "align", 2);
R([
  k({ type: Number })
], C.prototype, "gap", 2);
R([
  k({ type: Boolean }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible"
  })
], C.prototype, "visible", 2);
R([
  k({ type: Boolean, attribute: "enable-header" }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader"
  })
], C.prototype, "enableHeader", 2);
R([
  k({ type: Boolean, reflect: !0 }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], C.prototype, "expanded", 2);
R([
  k({ type: Boolean }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable"
  })
], C.prototype, "expandable", 2);
R([
  k({ type: String }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label"
  })
], C.prototype, "label", 2);
R([
  k({ type: String }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon"
  })
], C.prototype, "icon", 2);
R([
  k({ type: String, attribute: "icon-position" }),
  j({
    attributeType: I.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" }
    ]
  })
], C.prototype, "iconPosition", 2);
R([
  j({
    attributeType: I.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], C.prototype, "handleSlotChange", 1);
C = R([
  zt({
    name: "zero-panel-layout",
    version: "1.0.0",
    title: "Panel Layout",
    elementSelector: "zero-panel-layout",
    group: "Layout",
    iconName: "panel-layout-icon.png"
  }),
  Ht(),
  ar("zero-panel-layout")
], C);
export {
  C as ZeroPanelLayout
};
