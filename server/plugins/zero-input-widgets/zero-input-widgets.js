var It = Object.defineProperty;
var Ut = (t, e, r) => e in t ? It(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Fe = (t, e, r) => Ut(t, typeof e != "symbol" ? e + "" : e, r);
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
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : b(), i = s(t);
    typeof r.Reflect < "u" && (i = s(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function s(v, E) {
      return function(w, $) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
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
    function b() {
      return l() || u();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, E = !b && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return be(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return be({ __proto__: null });
      } : function() {
        return be({});
      },
      has: E ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: E ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), L = typeof WeakMap == "function" ? WeakMap : Dt(), Y = s ? Symbol.for("@reflect-metadata:registry") : void 0, oe = Ct(), Pe = xt(oe);
    function ct(n, a, o, c) {
      if (g(o)) {
        if (!Ne(n))
          throw new TypeError();
        if (!Ie(a))
          throw new TypeError();
        return _t(n, a);
      } else {
        if (!Ne(n))
          throw new TypeError();
        if (!P(a))
          throw new TypeError();
        if (!P(c) && !g(c) && !q(c))
          throw new TypeError();
        return q(c) && (c = void 0), o = H(o), $t(n, a, o, c);
      }
    }
    e("decorate", ct);
    function dt(n, a) {
      function o(c, y) {
        if (!P(c))
          throw new TypeError();
        if (!g(y) && !Pt(y))
          throw new TypeError();
        Te(n, a, c, y);
      }
      return o;
    }
    e("metadata", dt);
    function ft(n, a, o, c) {
      if (!P(o))
        throw new TypeError();
      return g(c) || (c = H(c)), Te(n, a, o, c);
    }
    e("defineMetadata", ft);
    function ht(n, a, o) {
      if (!P(a))
        throw new TypeError();
      return g(o) || (o = H(o)), Oe(n, a, o);
    }
    e("hasMetadata", ht);
    function pt(n, a, o) {
      if (!P(a))
        throw new TypeError();
      return g(o) || (o = H(o)), pe(n, a, o);
    }
    e("hasOwnMetadata", pt);
    function vt(n, a, o) {
      if (!P(a))
        throw new TypeError();
      return g(o) || (o = H(o)), Ce(n, a, o);
    }
    e("getMetadata", vt);
    function yt(n, a, o) {
      if (!P(a))
        throw new TypeError();
      return g(o) || (o = H(o)), xe(n, a, o);
    }
    e("getOwnMetadata", yt);
    function bt(n, a) {
      if (!P(n))
        throw new TypeError();
      return g(a) || (a = H(a)), Re(n, a);
    }
    e("getMetadataKeys", bt);
    function gt(n, a) {
      if (!P(n))
        throw new TypeError();
      return g(a) || (a = H(a)), ke(n, a);
    }
    e("getOwnMetadataKeys", gt);
    function mt(n, a, o) {
      if (!P(a))
        throw new TypeError();
      if (g(o) || (o = H(o)), !P(a))
        throw new TypeError();
      g(o) || (o = H(o));
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(n, a, o);
    }
    e("deleteMetadata", mt);
    function _t(n, a) {
      for (var o = n.length - 1; o >= 0; --o) {
        var c = n[o], y = c(a);
        if (!g(y) && !q(y)) {
          if (!Ie(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function $t(n, a, o, c) {
      for (var y = n.length - 1; y >= 0; --y) {
        var C = n[y], O = C(a, o, c);
        if (!g(O) && !q(O)) {
          if (!P(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Oe(n, a, o) {
      var c = pe(n, a, o);
      if (c)
        return !0;
      var y = ye(a);
      return q(y) ? !1 : Oe(n, y, o);
    }
    function pe(n, a, o) {
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Me(c.OrdinaryHasOwnMetadata(n, a, o));
    }
    function Ce(n, a, o) {
      var c = pe(n, a, o);
      if (c)
        return xe(n, a, o);
      var y = ye(a);
      if (!q(y))
        return Ce(n, y, o);
    }
    function xe(n, a, o) {
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(n, a, o);
    }
    function Te(n, a, o, c) {
      var y = Q(
        o,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, a, o, c);
    }
    function Re(n, a) {
      var o = ke(n, a), c = ye(n);
      if (c === null)
        return o;
      var y = Re(c, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var C = new N(), O = [], m = 0, d = o; m < d.length; m++) {
        var f = d[m], h = C.has(f);
        h || (C.add(f), O.push(f));
      }
      for (var p = 0, _ = y; p < _.length; p++) {
        var f = _[p], h = C.has(f);
        h || (C.add(f), O.push(f));
      }
      return O;
    }
    function ke(n, a) {
      var o = Q(
        n,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function De(n) {
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
    function q(n) {
      return n === null;
    }
    function wt(n) {
      return typeof n == "symbol";
    }
    function P(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Et(n, a) {
      switch (De(n)) {
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
      var o = "string", c = Ue(n, l);
      if (c !== void 0) {
        var y = c.call(n, o);
        if (P(y))
          throw new TypeError();
        return y;
      }
      return At(n);
    }
    function At(n, a) {
      var o, c;
      {
        var y = n.toString;
        if (le(y)) {
          var c = y.call(n);
          if (!P(c))
            return c;
        }
        var o = n.valueOf;
        if (le(o)) {
          var c = o.call(n);
          if (!P(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Me(n) {
      return !!n;
    }
    function St(n) {
      return "" + n;
    }
    function H(n) {
      var a = Et(n);
      return wt(a) ? a : St(a);
    }
    function Ne(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function le(n) {
      return typeof n == "function";
    }
    function Ie(n) {
      return typeof n == "function";
    }
    function Pt(n) {
      switch (De(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(n, a) {
      return n === a || n !== n && a !== a;
    }
    function Ue(n, a) {
      var o = n[a];
      if (o != null) {
        if (!le(o))
          throw new TypeError();
        return o;
      }
    }
    function je(n) {
      var a = Ue(n, u);
      if (!le(a))
        throw new TypeError();
      var o = a.call(n);
      if (!P(o))
        throw new TypeError();
      return o;
    }
    function He(n) {
      return n.value;
    }
    function Le(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function ze(n) {
      var a = n.return;
      a && a.call(n);
    }
    function ye(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || a !== $)
        return a;
      var o = n.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var y = c.constructor;
      return typeof y != "function" || y === n ? a : y;
    }
    function Ot() {
      var n;
      !g(Y) && typeof r.Reflect < "u" && !(Y in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (n = Tt(r.Reflect));
      var a, o, c, y = new L(), C = {
        registerProvider: O,
        getProvider: d,
        setProvider: h
      };
      return C;
      function O(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          default:
            c === void 0 && (c = new N()), c.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!g(a)) {
          if (a.isProviderFor(p, _))
            return a;
          if (!g(o)) {
            if (o.isProviderFor(p, _))
              return a;
            if (!g(c))
              for (var A = je(c); ; ) {
                var S = Le(A);
                if (!S)
                  return;
                var U = He(S);
                if (U.isProviderFor(p, _))
                  return ze(A), U;
              }
          }
        }
        if (!g(n) && n.isProviderFor(p, _))
          return n;
      }
      function d(p, _) {
        var A = y.get(p), S;
        return g(A) || (S = A.get(_)), g(S) && (S = m(p, _), g(S) || (g(A) && (A = new T(), y.set(p, A)), A.set(_, S))), S;
      }
      function f(p) {
        if (g(p))
          throw new TypeError();
        return a === p || o === p || !g(c) && c.has(p);
      }
      function h(p, _, A) {
        if (!f(A))
          throw new Error("Metadata provider not registered.");
        var S = d(p, _);
        if (S !== A) {
          if (!g(S))
            return !1;
          var U = y.get(p);
          g(U) && (U = new T(), y.set(p, U)), U.set(_, A);
        }
        return !0;
      }
    }
    function Ct() {
      var n;
      return !g(Y) && P(r.Reflect) && Object.isExtensible(r.Reflect) && (n = r.Reflect[Y]), g(n) && (n = Ot()), !g(Y) && P(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function xt(n) {
      var a = new L(), o = {
        isProviderFor: function(f, h) {
          var p = a.get(f);
          return g(p) ? !1 : p.has(h);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return oe.registerProvider(o), o;
      function c(f, h, p) {
        var _ = a.get(f), A = !1;
        if (g(_)) {
          if (!p)
            return;
          _ = new T(), a.set(f, _), A = !0;
        }
        var S = _.get(h);
        if (g(S)) {
          if (!p)
            return;
          if (S = new T(), _.set(h, S), !n.setProvider(f, h, o))
            throw _.delete(h), A && a.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, h, p) {
        var _ = c(
          h,
          p,
          /*Create*/
          !1
        );
        return g(_) ? !1 : Me(_.has(f));
      }
      function C(f, h, p) {
        var _ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (!g(_))
          return _.get(f);
      }
      function O(f, h, p, _) {
        var A = c(
          p,
          _,
          /*Create*/
          !0
        );
        A.set(f, h);
      }
      function m(f, h) {
        var p = [], _ = c(
          f,
          h,
          /*Create*/
          !1
        );
        if (g(_))
          return p;
        for (var A = _.keys(), S = je(A), U = 0; ; ) {
          var Be = Le(S);
          if (!Be)
            return p.length = U, p;
          var Mt = He(Be);
          try {
            p[U] = Mt;
          } catch (Nt) {
            try {
              ze(S);
            } finally {
              throw Nt;
            }
          }
          U++;
        }
      }
      function d(f, h, p) {
        var _ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(_) || !_.delete(f))
          return !1;
        if (_.size === 0) {
          var A = a.get(h);
          g(A) || (A.delete(p), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Tt(n) {
      var a = n.defineMetadata, o = n.hasOwnMetadata, c = n.getOwnMetadata, y = n.getOwnMetadataKeys, C = n.deleteMetadata, O = new L(), m = {
        isProviderFor: function(d, f) {
          var h = O.get(d);
          return !g(h) && h.has(f) ? !0 : y(d, f).length ? (g(h) && (h = new N(), O.set(d, h)), h.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function Q(n, a, o) {
      var c = oe.getProvider(n, a);
      if (!g(c))
        return c;
      if (o) {
        if (oe.setProvider(n, a, Pe))
          return Pe;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var n = {}, a = [], o = (
        /** @class */
        function() {
          function m(d, f, h) {
            this._index = 0, this._keys = d, this._values = f, this._selector = h;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var f = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
          }, m;
        }()
      ), c = (
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
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, m.prototype.set = function(d, f) {
            var h = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[h] = f, this;
          }, m.prototype.delete = function(d) {
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var h = this._keys.length, p = f + 1; p < h; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ve(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, f) {
            if (!ve(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (ve(this._keys[h], d)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function y(m, d) {
        return m;
      }
      function C(m, d) {
        return d;
      }
      function O(m, d) {
        return [m, d];
      }
    }
    function kt() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new T();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function Dt() {
      var n = 16, a = w.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(f) {
            var h = y(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? w.has(h, this._key) : !1;
          }, d.prototype.get = function(f) {
            var h = y(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? w.get(h, this._key) : void 0;
          }, d.prototype.set = function(f, h) {
            var p = y(
              f,
              /*create*/
              !0
            );
            return p[this._key] = h, this;
          }, d.prototype.delete = function(f) {
            var h = y(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while (w.has(a, d));
        return a[d] = !0, d;
      }
      function y(d, f) {
        if (!i.call(d, o)) {
          if (!f)
            return;
          Object.defineProperty(d, o, { value: w.create() });
        }
        return d[o];
      }
      function C(d, f) {
        for (var h = 0; h < f; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : C(f, d), f;
        }
        return C(new Array(d), d);
      }
      function m() {
        var d = O(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var f = "", h = 0; h < n; ++h) {
          var p = d[h];
          (h === 4 || h === 6 || h === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function be(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ve || (Ve = {}));
function jt(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function Ht(t) {
  return function(e) {
    if (jt(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, e.prototype), globalThis.customElements) {
        const i = `${t.elementSelector}-${t.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Lt(t) {
  return Ht(t);
}
function zt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        Fe(this, "_stylesApplied", !1);
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((T) => w.insertRule(T.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
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
    return r;
  };
}
function Bt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(t) {
  return function(e, r) {
    try {
      Bt(t);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof r == "string") {
        try {
          s = typeof e[r] != "function";
        } catch {
          s = !0;
        }
        s && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function I(t) {
  return Ft(t);
}
var D;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(D || (D = {}));
var k;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, we = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), We = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (we && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = We.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && We.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (t) => new st(typeof t == "string" ? t : t + "", void 0, Ee), Vt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + t[l + 1], t[0]);
  return new st(r, t, Ee);
}, Wt = (t, e) => {
  if (we) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = r.cssText, t.appendChild(i);
  }
}, Ye = we ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Gt(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yt, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, B = globalThis, qe = B.trustedTypes, Kt = qe ? qe.emptyScript : "", ge = B.reactiveElementPolyfillSupport, ee = (t, e) => t, de = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Kt : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, Ae = (t, e) => !Yt(t, e), Ze = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Ze) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, r);
      s !== void 0 && qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[r];
    }, set(u) {
      this[r] = u;
    } };
    return { get: s, set(u) {
      const b = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, b, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const r = this.properties, i = [...Xt(r), ...Jt(r)];
      for (const s of i) this.createProperty(s, r[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, s] of r) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const s = this._$Eu(r, i);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) r.unshift(Ye(s));
    } else e !== void 0 && r.push(Ye(e));
    return r;
  }
  static _$Eu(e, r) {
    const i = r.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const i of r.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostConnected) == null ? void 0 : i.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostDisconnected) == null ? void 0 : i.call(r);
    });
  }
  attributeChangedCallback(e, r, i) {
    this._$AK(e, i);
  }
  _$ET(e, r) {
    var l;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : de).toAttribute(r, i.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const b = i.getPropertyOptions(s), v = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : de;
      this._$Em = s;
      const E = v.fromAttribute(r, b.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, s = !1, l) {
    var u;
    if (e !== void 0) {
      const b = this.constructor;
      if (s === !1 && (l = this[e]), i ?? (i = b.getPropertyOptions(e)), !((i.hasChanged ?? Ae)(l, r) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(b._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: s, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? r ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: b } = u, v = this[l];
        b !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(r)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: Z }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Xe = (t) => t, fe = te.trustedTypes, Je = fe ? fe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, at = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + z, er = `<${ot}>`, W = document, ie = () => W.createComment(""), ne = (t) => t === null || typeof t != "object" && typeof t != "function", Se = Array.isArray, tr = (t) => Se(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, F = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), ue = rr(1), X = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function ut(t, e) {
  if (!Se(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const ir = (t, e) => {
  const r = t.length - 1, i = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let b = 0; b < r; b++) {
    const v = t[b];
    let E, w, $ = -1, T = 0;
    for (; T < v.length && (u.lastIndex = T, w = u.exec(v), w !== null); ) T = u.lastIndex, u === K ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (lt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = F) : w[3] !== void 0 && (u = F) : u === F ? w[0] === ">" ? (u = s ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? F : w[3] === '"' ? tt : et) : u === tt || u === et ? u = F : u === Qe || u === Ke ? u = K : (u = F, s = void 0);
    const N = u === F && t[b + 1].startsWith("/>") ? " " : "";
    l += u === K ? v + er : $ >= 0 ? (i.push(E), v.slice(0, $) + at + v.slice($) + z + N) : v + z + ($ === -2 ? b : N);
  }
  return [ut(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class se {
  constructor({ strings: e, _$litType$: r }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const b = e.length - 1, v = this.parts, [E, w] = ir(e, r);
    if (this.el = se.createElement(E, i), G.currentNode = this.el.content, r === 2 || r === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = G.nextNode()) !== null && v.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(at)) {
          const T = w[u++], N = s.getAttribute($).split(z), L = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: l, name: L[2], strings: N, ctor: L[1] === "." ? sr : L[1] === "?" ? ar : L[1] === "@" ? or : he }), s.removeAttribute($);
        } else $.startsWith(z) && (v.push({ type: 6, index: l }), s.removeAttribute($));
        if (lt.test(s.tagName)) {
          const $ = s.textContent.split(z), T = $.length - 1;
          if (T > 0) {
            s.textContent = fe ? fe.emptyScript : "";
            for (let N = 0; N < T; N++) s.append($[N], ie()), G.nextNode(), v.push({ type: 2, index: ++l });
            s.append($[T], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(z, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = W.createElement("template");
    return i.innerHTML = e, i;
  }
}
function J(t, e, r = t, i) {
  var u, b;
  if (e === X) return e;
  let s = i !== void 0 ? (u = r._$Co) == null ? void 0 : u[i] : r._$Cl;
  const l = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), l === void 0 ? s = void 0 : (s = new l(t), s._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = s : r._$Cl = s), s !== void 0 && (e = J(t, s._$AS(t, e.values), s, i)), e;
}
class nr {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(r, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, b = 0, v = i[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let E;
        v.type === 2 ? E = new ae(l, l.nextSibling, this, e) : v.type === 1 ? E = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (E = new lr(l, this, e)), this._$AV.push(E), v = i[++b];
      }
      u !== (v == null ? void 0 : v.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = W, s;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = J(this, e, r), ne(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = se.createElement(ut(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(r);
    else {
      const u = new nr(s, this), b = u.u(this.options);
      u.p(r), this.T(b), this._$AH = u;
    }
  }
  _$AC(e) {
    let r = rt.get(e.strings);
    return r === void 0 && rt.set(e.strings, r = new se(e)), r;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, s = 0;
    for (const l of e) s === r.length ? r.push(i = new ae(this.O(ie()), this.O(ie()), this, this.options)) : i = r[s], i._$AI(l), s++;
    s < r.length && (this._$AR(i && i._$AB.nextSibling, s), r.length = s);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = r, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = x;
  }
  _$AI(e, r = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, r, 0), u = !ne(e) || e !== this._$AH && e !== X, u && (this._$AH = e);
    else {
      const b = e;
      let v, E;
      for (e = l[0], v = 0; v < l.length - 1; v++) E = J(this, b[i + v], r, v), E === X && (E = this._$AH[v]), u || (u = !ne(E) || E !== this._$AH[v]), E === x ? e = x : e !== x && (e += (E ?? "") + l[v + 1]), this._$AH[v] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class or extends he {
  constructor(e, r, i, s, l) {
    super(e, r, i, s, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = J(this, e, r, 0) ?? x) === X) return;
    const i = this._$AH, s = e === x && i !== x || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== x && (i === x || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(se, ae), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const ur = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = s = new ae(e.insertBefore(ie(), l), l, void 0, r ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class re extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ur(r, this.renderRoot, this.renderOptions);
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
    return X;
  }
}
var nt;
re._$litElement$ = !0, re.finalized = !0, (nt = V.litElementHydrateSupport) == null || nt.call(V, { LitElement: re });
const $e = V.litElementPolyfillSupport;
$e == null || $e({ LitElement: re });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, dr = (t = cr, e, r) => {
  const { kind: i, metadata: s } = r;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: u } = r;
    return { set(b) {
      const v = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(u, v, t, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, t, b), b;
    } };
  }
  if (i === "setter") {
    const { name: u } = r;
    return function(b) {
      const v = this[u];
      e.call(this, b), this.requestUpdate(u, v, t, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function j(t) {
  return (e, r) => typeof r == "object" ? dr(t, e, r) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(t, e, r);
}
var fr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, M = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? hr(e, r) : e, l = t.length - 1, u; l >= 0; l--)
    (u = t[l]) && (s = (i ? u(e, r, s) : u(s)) || s);
  return i && s && fr(e, r, s), s;
};
const it = () => window.zeroThemeManager;
let R = class extends re {
  constructor() {
    super(...arguments), this.userRoleOptions = [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
      { value: "guest", label: "Guest" }
    ], this.username = "", this.password = "", this.userRole = "", this.termsAccepted = !1, this.age = 25, this.profilePicture = "", this.birthDate = "", this.favoriteColor = "#000000", this.height = 170, this.bio = "", this.newsletterSubscribed = !1;
  }
  handleSubmit(t) {
    t && t.preventDefault();
    const e = {
      username: this.username,
      password: this.password,
      userRole: this.userRole,
      termsAccepted: this.termsAccepted,
      age: this.age,
      profilePicture: this.profilePicture,
      birthDate: this.birthDate,
      favoriteColor: this.favoriteColor,
      height: this.height,
      bio: this.bio,
      newsletterSubscribed: this.newsletterSubscribed
    };
    this.dispatchEvent(new CustomEvent("onSubmit", {
      detail: { formData: e },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = it()) == null || t.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const t = (e = it()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return ue`
            <style>
                ${t ? t.getGlobalStyles() : ""}
                ${t ? t.getComponentStyles("input") : ""}
            </style>
            <div class="form-container uiv-${t == null ? void 0 : t.id}-theme">
                <!-- Text Input -->
                <div class="form-field">
                    <label for="username" class="uiv-${t == null ? void 0 : t.id}-text">User Name</label>
                    <input 
                        id="username" 
                        type="text" 
                        class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan"
                        .value="${this.username}" 
                        placeholder="Enter your username"
                        @input="${(r) => this.username = r.target.value}" 
                    />
                </div>

                <!-- Password Input -->
                <div class="form-field">
                    <label for="password" class="uiv-${t == null ? void 0 : t.id}-text">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan"
                        .value="${this.password}" 
                        placeholder="Enter your password"
                        @input="${(r) => this.password = r.target.value}" 
                    />
                </div>

                <!-- Dropdown -->
                <div class="form-field">
                    <label for="role" class="uiv-${t == null ? void 0 : t.id}-text">User Role</label>
                    <select 
                        id="role" 
                        class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan"
                        .value="${this.userRole}" 
                        @change="${(r) => this.userRole = r.target.value}"
                    >
                        <option value="">Select a role</option>
                        ${this.userRoleOptions.map((r) => ue`
                            <option value="${r.value}">${r.label}</option>
                        `)}
                    </select>
                </div>

                <!-- Checkbox -->
                <div class="form-field">
                    <label class="uiv-${t == null ? void 0 : t.id}-text">Accept Terms</label>
                    <div class="checkbox-field">
                        <input 
                            id="termsAccepted" 
                            type="checkbox" 
                            .checked="${this.termsAccepted}" 
                            @change="${(r) => this.termsAccepted = r.target.checked}" 
                        />
                        <span class="uiv-${t == null ? void 0 : t.id}-text" @click="${() => this.termsAccepted = !this.termsAccepted}">
                            I accept the terms and conditions
                        </span>
                    </div>
                </div>

                <!-- Range Slider -->
                <div class="form-field">
                    <label for="age" class="uiv-${t == null ? void 0 : t.id}-text">Age</label>
                    <div class="range-field">
                        <div class="range-display uiv-${t == null ? void 0 : t.id}-text">
                            <span>18 years</span>
                            <span class="range-value uiv-${t == null ? void 0 : t.id}-text">${this.age} years</span>
                            <span>100 years</span>
                        </div>
                        <input 
                            id="age" 
                            type="range" 
                            min="18" 
                            max="100" 
                            step="1" 
                            .value="${this.age}" 
                            @input="${(r) => this.age = Number(r.target.value)}" 
                        />
                    </div>
                </div>

                <!-- File Input -->
                <div class="form-field">
                    <label for="profilePicture" class="uiv-${t == null ? void 0 : t.id}-text">Profile Picture</label>
                    <input 
                        id="profilePicture" 
                        type="file" 
                        accept=".jpg,.png,.jpeg"
                        class="uiv-${t == null ? void 0 : t.id}-text"
                        @change="${(r) => {
      var i, s;
      return this.profilePicture = ((s = (i = r.target.files) == null ? void 0 : i[0]) == null ? void 0 : s.name) || "";
    }}" 
                    />
                </div>

                <!-- Date Input -->
                <div class="form-field">
                    <label for="birthDate" class="uiv-${t == null ? void 0 : t.id}-text">Birth Date</label>
                    <input 
                        id="birthDate" 
                        type="date" 
                        class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan"
                        .value="${this.birthDate}" 
                        @change="${(r) => this.birthDate = r.target.value}" 
                    />
                </div>

                <!-- Color Picker -->
                <div class="form-field">
                    <label for="favoriteColor" class="uiv-${t == null ? void 0 : t.id}-text">Favorite Color</label>
                    <input 
                        id="favoriteColor" 
                        type="color" 
                        class="uiv-${t == null ? void 0 : t.id}-bg"
                        .value="${this.favoriteColor}" 
                        @input="${(r) => this.favoriteColor = r.target.value}" 
                    />
                </div>

                <!-- Number Input -->
                <div class="form-field">
                    <label for="height" class="uiv-${t == null ? void 0 : t.id}-text">Height (cm)</label>
                    <input 
                        id="height" 
                        type="number" 
                        class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan"
                        min="50" 
                        max="250" 
                        step="1" 
                        .value="${this.height}" 
                        placeholder="Enter height in cm"
                        @input="${(r) => this.height = Number(r.target.value)}" 
                    />
                </div>

                <!-- Textarea -->
                <div class="form-field">
                    <label for="bio" class="uiv-${t == null ? void 0 : t.id}-text">Bio</label>
                    <textarea 
                        id="bio" 
                        class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan"
                        rows="4" 
                        .value="${this.bio}" 
                        placeholder="Tell us about yourself"
                        @input="${(r) => this.bio = r.target.value}"
                    ></textarea>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="form-field">
                    <label class="uiv-${t == null ? void 0 : t.id}-text">Newsletter Subscription</label>
                    <div class="checkbox-field">
                        <input 
                            id="newsletterSubscribed" 
                            type="checkbox" 
                            .checked="${this.newsletterSubscribed}" 
                            @change="${(r) => this.newsletterSubscribed = r.target.checked}" 
                        />
                        <span class="uiv-${t == null ? void 0 : t.id}-text" @click="${() => this.newsletterSubscribed = !this.newsletterSubscribed}">
                            Subscribe to our newsletter
                        </span>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="button" class="submit-button uiv-${t == null ? void 0 : t.id}-pulse" @click="${this.handleSubmit}">
                    <span>💾</span> Submit Form
                </button>

                <!-- Form Result Display -->
                ${this.getFormDataDisplay(t)}
            </div>
        `;
  }
  getFormDataDisplay(t) {
    const e = {
      username: this.username,
      userRole: this.userRole,
      termsAccepted: this.termsAccepted,
      age: this.age,
      profilePicture: this.profilePicture,
      birthDate: this.birthDate,
      favoriteColor: this.favoriteColor,
      height: this.height,
      bio: this.bio,
      newsletterSubscribed: this.newsletterSubscribed
    };
    return Object.values(e).some((r) => r !== "" && r !== !1 && r !== 0 && r !== 25) ? ue`
                <div class="form-result uiv-${t == null ? void 0 : t.id}-card">
                    <pre class="uiv-${t == null ? void 0 : t.id}-text">${JSON.stringify(e, null, 2)}</pre>
                </div>
            ` : ue``;
  }
};
R.styles = Vt`
        :host {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: var(--spacing-lg, 20px);
            font-family: var(--uiv-font-family, sans-serif);
        }

        .form-container {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg, 20px);
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--uiv-text-color, #333);
            font-weight: 500;
        }

        input.mat-mdc-input-element,
        textarea.mat-mdc-input-element,
        select.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--uiv-border-color, #ddd);
            border-radius: var(--uiv-border-radius, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--uiv-bg-surface, #fff);
            color: var(--uiv-text-color, #333);
            transition: all 0.2s;
            min-height: var(--input-height, 42px);
            box-sizing: border-box;
        }

        input.mat-mdc-input-element:focus,
        textarea.mat-mdc-input-element:focus,
        select.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary-color, #6c63ff);
            box-shadow: var(--uiv-shadow-depth);
        }

        .checkbox-field {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
        }

        .submit-button {
            padding: 12px 24px;
            background-color: var(--uiv-primary-color, #6c63ff);
            color: #fff;
            border: none;
            border-radius: var(--uiv-border-radius, 4px);
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .submit-button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }
    `;
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Username",
    placeholderText: "Enter your username",
    fieldMappings: "username"
  })
], R.prototype, "username", 2);
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.PASSWORD_INPUT,
    displayLabel: "Password",
    placeholderText: "Enter your password",
    fieldMappings: "password"
  })
], R.prototype, "password", 2);
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "User Role",
    optionItems: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
      { value: "guest", label: "Guest" }
    ],
    fieldMappings: "userRole"
  })
], R.prototype, "userRole", 2);
M([
  j({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Accept Terms",
    fieldMappings: "termsAccepted"
  })
], R.prototype, "termsAccepted", 2);
M([
  j({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.RANGE_SLIDER,
    displayLabel: "Age",
    optionItems: {
      minValue: 18,
      maxValue: 100,
      stepValue: 1,
      defaultValue: 25,
      displayTooltip: !0,
      unit: "years"
    },
    fieldMappings: "age"
  })
], R.prototype, "age", 2);
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.FILE_INPUT,
    displayLabel: "Profile Picture",
    optionItems: {
      accept: ".jpg,.png",
      multiple: !1,
      maxFileSize: 5e6
      // 5MB
    },
    fieldMappings: "profilePicture"
  })
], R.prototype, "profilePicture", 2);
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.DATE_PICKER,
    displayLabel: "Birth Date",
    optionItems: {
      minDate: "1900-01-01",
      maxDate: "2024-12-31"
    },
    fieldMappings: "birthDate"
  })
], R.prototype, "birthDate", 2);
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.COLOR_PICKER,
    displayLabel: "Favorite Color",
    fieldMappings: "favoriteColor"
  })
], R.prototype, "favoriteColor", 2);
M([
  j({ type: Number }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Height",
    optionItems: {
      min: 50,
      max: 250,
      step: 1,
      defaultValue: 170
    },
    fieldMappings: "height"
  })
], R.prototype, "height", 2);
M([
  j({ type: String }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.TEXTAREA,
    displayLabel: "Bio",
    placeholderText: "Tell us about yourself",
    optionItems: {
      rows: 5,
      cols: 50
    },
    fieldMappings: "bio"
  })
], R.prototype, "bio", 2);
M([
  j({ type: Boolean }),
  I({
    attributeType: k.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Newsletter Subscription",
    fieldMappings: "newsletterSubscribed"
  })
], R.prototype, "newsletterSubscribed", 2);
M([
  I({
    attributeType: k.EVENT,
    displayLabel: "On Submit",
    eventTrigger: "onSubmit"
  })
], R.prototype, "handleSubmit", 1);
R = M([
  Lt({
    name: "zero-input-widgets",
    version: "1.0.0",
    title: "Zero input widgets",
    elementSelector: "zero-zero-input-widgets",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  zt()
], R);
export {
  R as ZeroInputWidgets
};
