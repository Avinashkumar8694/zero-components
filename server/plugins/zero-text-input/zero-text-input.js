var Rt = Object.defineProperty;
var kt = (i, e, t) => e in i ? Rt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Be = (i, e, t) => kt(i, typeof e != "symbol" ? e + "" : e, t);
var ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof ze == "object" ? ze : typeof self == "object" ? self : typeof this == "object" ? this : b(), n = o(i);
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
        return ye(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
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
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ot(), j = typeof WeakMap == "function" ? WeakMap : Pt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, oe = At(), Ae = Tt(oe);
    function ot(r, s, a, h) {
      if (m(a)) {
        if (!ke(r))
          throw new TypeError();
        if (!Ne(s))
          throw new TypeError();
        return vt(r, s);
      } else {
        if (!ke(r))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(h) && !m(h) && !q(h))
          throw new TypeError();
        return q(h) && (h = void 0), a = H(a), mt(r, s, a, h);
      }
    }
    e("decorate", ot);
    function at(r, s) {
      function a(h, y) {
        if (!S(h))
          throw new TypeError();
        if (!m(y) && !$t(y))
          throw new TypeError();
        Oe(r, s, h, y);
      }
      return a;
    }
    e("metadata", at);
    function lt(r, s, a, h) {
      if (!S(a))
        throw new TypeError();
      return m(h) || (h = H(h)), Oe(r, s, a, h);
    }
    e("defineMetadata", lt);
    function ut(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = H(a)), Te(r, s, a);
    }
    e("hasMetadata", ut);
    function ht(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = H(a)), de(r, s, a);
    }
    e("hasOwnMetadata", ht);
    function ct(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = H(a)), Se(r, s, a);
    }
    e("getMetadata", ct);
    function dt(r, s, a) {
      if (!S(s))
        throw new TypeError();
      return m(a) || (a = H(a)), Me(r, s, a);
    }
    e("getOwnMetadata", dt);
    function ft(r, s) {
      if (!S(r))
        throw new TypeError();
      return m(s) || (s = H(s)), Pe(r, s);
    }
    e("getMetadataKeys", ft);
    function pt(r, s) {
      if (!S(r))
        throw new TypeError();
      return m(s) || (s = H(s)), xe(r, s);
    }
    e("getOwnMetadataKeys", pt);
    function yt(r, s, a) {
      if (!S(s))
        throw new TypeError();
      if (m(a) || (a = H(a)), !S(s))
        throw new TypeError();
      m(a) || (a = H(a));
      var h = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", yt);
    function vt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!m(y) && !q(y)) {
          if (!Ne(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function mt(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var O = r[y], M = O(s, a, h);
        if (!m(M) && !q(M)) {
          if (!S(M))
            throw new TypeError();
          h = M;
        }
      }
      return h;
    }
    function Te(r, s, a) {
      var h = de(r, s, a);
      if (h)
        return !0;
      var y = pe(s);
      return q(y) ? !1 : Te(r, y, a);
    }
    function de(r, s, a) {
      var h = J(
        s,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : Re(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Se(r, s, a) {
      var h = de(r, s, a);
      if (h)
        return Me(r, s, a);
      var y = pe(s);
      if (!q(y))
        return Se(r, y, a);
    }
    function Me(r, s, a) {
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
      var y = J(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Pe(r, s) {
      var a = xe(r, s), h = pe(r);
      if (h === null)
        return a;
      var y = Pe(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new N(), M = [], g = 0, c = a; g < c.length; g++) {
        var d = c[g], f = O.has(d);
        f || (O.add(d), M.push(d));
      }
      for (var p = 0, _ = y; p < _.length; p++) {
        var d = _[p], f = O.has(d);
        f || (O.add(d), M.push(d));
      }
      return M;
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
    function Ce(r) {
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
    function gt(r) {
      return typeof r == "symbol";
    }
    function S(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function _t(r, s) {
      switch (Ce(r)) {
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
      var a = "string", h = Ue(r, u);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return bt(r);
    }
    function bt(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (ae(y)) {
          var h = y.call(r);
          if (!S(h))
            return h;
        }
        var a = r.valueOf;
        if (ae(a)) {
          var h = a.call(r);
          if (!S(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Re(r) {
      return !!r;
    }
    function wt(r) {
      return "" + r;
    }
    function H(r) {
      var s = _t(r);
      return gt(s) ? s : wt(s);
    }
    function ke(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ae(r) {
      return typeof r == "function";
    }
    function Ne(r) {
      return typeof r == "function";
    }
    function $t(r) {
      switch (Ce(r)) {
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
    function Ue(r, s) {
      var a = r[s];
      if (a != null) {
        if (!ae(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(r) {
      var s = Ue(r, l);
      if (!ae(s))
        throw new TypeError();
      var a = s.call(r);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function He(r) {
      return r.value;
    }
    function Le(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function je(r) {
      var s = r.return;
      s && s.call(r);
    }
    function pe(r) {
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
      !m(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = St(t.Reflect));
      var s, a, h, y = new j(), O = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return O;
      function M(p) {
        if (!Object.isExtensible(O))
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
            h === void 0 && (h = new N()), h.add(p);
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
              for (var A = Ie(h); ; ) {
                var T = Le(A);
                if (!T)
                  return;
                var I = He(T);
                if (I.isProviderFor(p, _))
                  return je(A), I;
              }
          }
        }
        if (!m(r) && r.isProviderFor(p, _))
          return r;
      }
      function c(p, _) {
        var A = y.get(p), T;
        return m(A) || (T = A.get(_)), m(T) && (T = g(p, _), m(T) || (m(A) && (A = new x(), y.set(p, A)), A.set(_, T))), T;
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
          var I = y.get(p);
          m(I) && (I = new x(), y.set(p, I)), I.set(_, A);
        }
        return !0;
      }
    }
    function At() {
      var r;
      return !m(F) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[F]), m(r) && (r = Et()), !m(F) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
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
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return oe.registerProvider(a), a;
      function h(d, f, p) {
        var _ = s.get(d), A = !1;
        if (m(_)) {
          if (!p)
            return;
          _ = new x(), s.set(d, _), A = !0;
        }
        var T = _.get(f);
        if (m(T)) {
          if (!p)
            return;
          if (T = new x(), _.set(f, T), !r.setProvider(d, f, a))
            throw _.delete(f), A && s.delete(d), new Error("Wrong provider for target.");
        }
        return T;
      }
      function y(d, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        return m(_) ? !1 : Re(_.has(d));
      }
      function O(d, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(d);
      }
      function M(d, f, p, _) {
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
        for (var A = _.keys(), T = Ie(A), I = 0; ; ) {
          var De = Le(T);
          if (!De)
            return p.length = I, p;
          var xt = He(De);
          try {
            p[I] = xt;
          } catch (Ct) {
            try {
              je(T);
            } finally {
              throw Ct;
            }
          }
          I++;
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
    function St(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, O = r.deleteMetadata, M = new j(), g = {
        isProviderFor: function(c, d) {
          var f = M.get(c);
          return !m(f) && f.has(d) ? !0 : y(c, d).length ? (m(f) && (f = new N(), M.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return g;
    }
    function J(r, s, a) {
      var h = oe.getProvider(r, s);
      if (!m(h))
        return h;
      if (a) {
        if (oe.setProvider(r, s, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
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
              return this._keys.length--, this._values.length--, fe(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, d) {
            if (!fe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return h;
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
    function Ot() {
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
    function Pt() {
      var r = 16, s = E.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = y(
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
      function y(c, d) {
        if (!n.call(c, a)) {
          if (!d)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function O(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : O(d, c), d;
        }
        return O(new Array(c), c);
      }
      function g() {
        var c = M(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ye(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ge || (Ge = {}));
function Nt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ut(i) {
  return function(e) {
    if (Nt(i)) {
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
function Lt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function jt(i) {
  return function(e, t) {
    try {
      Lt(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function U(i) {
  return jt(i);
}
var L;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(L || (L = {}));
var R;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(R || (R = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = globalThis, be = le.ShadowRoot && (le.ShadyCSS === void 0 || le.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let tt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Dt = (i) => new tt(typeof i == "string" ? i : i + "", void 0, we), Bt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new tt(t, i, we);
}, zt = (i, e) => {
  if (be) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = le.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, We = be ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Dt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Vt, getOwnPropertyDescriptor: Wt, getOwnPropertyNames: Ft, getOwnPropertySymbols: qt, getPrototypeOf: Xt } = Object, B = globalThis, Fe = B.trustedTypes, Yt = Fe ? Fe.emptyScript : "", ve = B.reactiveElementPolyfillSupport, K = (i, e) => i, ue = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Yt : null;
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
} }, $e = (i, e) => !Gt(i, e), qe = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: $e };
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
      o !== void 0 && Vt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = Wt(this.prototype, e) ?? { get() {
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
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Xt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, n = [...Ft(t), ...qt(t)];
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
      for (const o of n) t.unshift(We(o));
    } else e !== void 0 && t.push(We(e));
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
    return zt(e, this.constructor.elementStyles), e;
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
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ue).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), b = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ue;
      this._$Em = o, this[o] = b.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? $e)(this[e], t)) return;
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[K("elementProperties")] = /* @__PURE__ */ new Map(), X[K("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, he = ee.trustedTypes, Xe = he ? he.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, rt = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + D, Zt = `<${nt}>`, W = document, re = () => W.createComment(""), ne = (i) => i === null || typeof i != "object" && typeof i != "function", Ee = Array.isArray, Jt = (i) => Ee(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Ze = />/g, G = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, it = /^(?:script|style|textarea|title)$/i, Qt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Kt = Qt(1), Y = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), V = W.createTreeWalker(W, 129);
function st(i, e) {
  if (!Ee(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let b = 0; b < t; b++) {
    const v = i[b];
    let $, E, w = -1, x = 0;
    for (; x < v.length && (l.lastIndex = x, E = l.exec(v), E !== null); ) x = l.lastIndex, l === Q ? E[1] === "!--" ? l = Ye : E[1] !== void 0 ? l = Ze : E[2] !== void 0 ? (it.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = G) : E[3] !== void 0 && (l = G) : l === G ? E[0] === ">" ? (l = o ?? Q, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? G : E[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = G : l === Ye || l === Ze ? l = Q : (l = G, o = void 0);
    const N = l === G && i[b + 1].startsWith("/>") ? " " : "";
    u += l === Q ? v + Zt : w >= 0 ? (n.push($), v.slice(0, w) + rt + v.slice(w) + D + N) : v + D + (w === -2 ? b : N);
  }
  return [st(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ie {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const b = e.length - 1, v = this.parts, [$, E] = er(e, t);
    if (this.el = ie.createElement($, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = V.nextNode()) !== null && v.length < b; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(rt)) {
          const x = E[l++], N = o.getAttribute(w).split(D), j = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: u, name: j[2], strings: N, ctor: j[1] === "." ? rr : j[1] === "?" ? nr : j[1] === "@" ? ir : ce }), o.removeAttribute(w);
        } else w.startsWith(D) && (v.push({ type: 6, index: u }), o.removeAttribute(w));
        if (it.test(o.tagName)) {
          const w = o.textContent.split(D), x = w.length - 1;
          if (x > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let N = 0; N < x; N++) o.append(w[N], re()), V.nextNode(), v.push({ type: 2, index: ++u });
            o.append(w[x], re());
          }
        }
      } else if (o.nodeType === 8) if (o.data === nt) v.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(D, w + 1)) !== -1; ) v.push({ type: 7, index: u }), w += D.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Z(i, e, t = i, n) {
  var l, b;
  if (e === Y) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ne(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((b = o == null ? void 0 : o._$AO) == null || b.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = Z(i, o._$AS(i, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    V.currentNode = o;
    let u = V.nextNode(), l = 0, b = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new se(u, u.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), v = n[++b];
      }
      l !== (v == null ? void 0 : v.index) && (u = V.nextNode(), l++);
    }
    return V.currentNode = W, o;
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
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Z(this, e, t), ne(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Jt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ie.createElement(st(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), b = l.u(this.options);
      l.p(t), this.T(b), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Ke.get(e.strings);
    return t === void 0 && Ke.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[o], n._$AI(u), o++;
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
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, u) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = Z(this, e, t, 0), l = !ne(e) || e !== this._$AH && e !== Y, l && (this._$AH = e);
    else {
      const b = e;
      let v, $;
      for (e = u[0], v = 0; v < u.length - 1; v++) $ = Z(this, b[n + v], t, v), $ === Y && ($ = this._$AH[v]), l || (l = !ne($) || $ !== this._$AH[v]), $ === P ? e = P : e !== P && (e += ($ ?? "") + u[v + 1]), this._$AH[v] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class nr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ir extends ce {
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? P) === Y) return;
    const n = this._$AH, o = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Z(this, e);
  }
}
const ge = ee.litHtmlPolyfillSupport;
ge == null || ge(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const or = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(re(), u), u, void 0, t ?? {});
  }
  return o._$AI(i), o;
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
var et;
te._$litElement$ = !0, te.finalized = !0, (et = globalThis.litElementHydrateSupport) == null || et.call(globalThis, { LitElement: te });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: $e }, lr = (i = ar, e, t) => {
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
function z(i) {
  return (e, t) => typeof t == "object" ? lr(i, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, k = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && ur(e, t, o), o;
};
let C = class extends te {
  constructor() {
    super(...arguments), this.value = "", this.label = "Text Input", this.placeholder = "", this.required = !1, this.disabled = !1, this.maxLength = 0, this.errorMessage = "", this.showError = !1;
  }
  handleInput(i) {
    const e = i.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(i) {
    const e = i.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleFocus(i) {
    this.dispatchEvent(new CustomEvent("focus", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleBlur(i) {
    this.dispatchEvent(new CustomEvent("blur", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Kt`
            <div class="form-field">
                <label for="text-input">${this.label}</label>
                <input 
                    id="text-input"
                    type="text" 
                    class="mat-mdc-input-element ${this.showError ? "error" : ""}"
                    .value="${this.value}" 
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    maxlength="${this.maxLength > 0 ? this.maxLength : ""}"
                    @input="${this.handleInput}"
                    @change="${this.handleChange}"
                    @focus="${this.handleFocus}"
                    @blur="${this.handleBlur}"
                />
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

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }        input.mat-mdc-input-element {
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
        }
    `;
k([
  z({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Value",
    placeholderText: "Enter text value",
    fieldMappings: "value"
  })
], C.prototype, "value", 2);
k([
  z({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], C.prototype, "label", 2);
k([
  z({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], C.prototype, "placeholder", 2);
k([
  z({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], C.prototype, "required", 2);
k([
  z({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], C.prototype, "disabled", 2);
k([
  z({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Max Length",
    fieldMappings: "maxLength"
  })
], C.prototype, "maxLength", 2);
k([
  z({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], C.prototype, "errorMessage", 2);
k([
  z({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], C.prototype, "showError", 2);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], C.prototype, "handleInput", 1);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], C.prototype, "handleChange", 1);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Focus",
    eventTrigger: "focus"
  })
], C.prototype, "handleFocus", 1);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Blur",
    eventTrigger: "blur"
  })
], C.prototype, "handleBlur", 1);
C = k([
  It({
    name: "zero-text-input",
    version: "1.0.0",
    title: "Text Input",
    elementSelector: "zero-text-input",
    group: "Form Controls",
    iconName: "text-input-icon.png"
  }),
  Ht()
], C);
export {
  C as ZeroTextInput
};
