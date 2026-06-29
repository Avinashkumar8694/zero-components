var Ne = Object.defineProperty;
var De = (i, t, e) => t in i ? Ne(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Wt = (i, t, e) => De(i, typeof t != "symbol" ? t + "" : t, e);
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Bt;
(function(i) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Gt == "object" ? Gt : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(i);
    typeof e.Reflect < "u" && (r = s(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = i);
    function s(y, A) {
      return function(b, w) {
        Object.defineProperty(y, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
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
    function _() {
      return l() || u();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !_ && !y, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return pt({ __proto__: null });
      } : function() {
        return pt({});
      },
      has: A ? function(n, o) {
        return r.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: A ? function(n, o) {
        return r.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ce(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xe(), D = typeof WeakMap == "function" ? WeakMap : Te(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, st = Me(), St = Oe(st);
    function le(n, o, a, c) {
      if (m(a)) {
        if (!Nt(n))
          throw new TypeError();
        if (!Dt(o))
          throw new TypeError();
        return me(n, o);
      } else {
        if (!Nt(n))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !m(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = k(a), ge(n, o, a, c);
      }
    }
    t("decorate", le);
    function ue(n, o) {
      function a(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!m(v) && !Ee(v))
          throw new TypeError();
        Ct(n, o, c, v);
      }
      return a;
    }
    t("metadata", ue);
    function ce(n, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return m(c) || (c = k(c)), Ct(n, o, a, c);
    }
    t("defineMetadata", ce);
    function he(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Mt(n, o, a);
    }
    t("hasMetadata", he);
    function fe(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), ht(n, o, a);
    }
    t("hasOwnMetadata", fe);
    function de(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Ot(n, o, a);
    }
    t("getMetadata", de);
    function pe(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Pt(n, o, a);
    }
    t("getOwnMetadata", pe);
    function ye(n, o) {
      if (!M(n))
        throw new TypeError();
      return m(o) || (o = k(o)), xt(n, o);
    }
    t("getMetadataKeys", ye);
    function ve(n, o) {
      if (!M(n))
        throw new TypeError();
      return m(o) || (o = k(o)), Tt(n, o);
    }
    t("getOwnMetadataKeys", ve);
    function _e(n, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = k(a)), !M(o))
        throw new TypeError();
      m(a) || (a = k(a));
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(n, o, a);
    }
    t("deleteMetadata", _e);
    function me(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], v = c(o);
        if (!m(v) && !B(v)) {
          if (!Dt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function ge(n, o, a, c) {
      for (var v = n.length - 1; v >= 0; --v) {
        var P = n[v], O = P(o, a, c);
        if (!m(O) && !B(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Mt(n, o, a) {
      var c = ht(n, o, a);
      if (c)
        return !0;
      var v = dt(o);
      return B(v) ? !1 : Mt(n, v, a);
    }
    function ht(n, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : kt(c.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Ot(n, o, a) {
      var c = ht(n, o, a);
      if (c)
        return Pt(n, o, a);
      var v = dt(o);
      if (!B(v))
        return Ot(n, v, a);
    }
    function Pt(n, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Ct(n, o, a, c) {
      var v = Z(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, c);
    }
    function xt(n, o) {
      var a = Tt(n, o), c = dt(n);
      if (c === null)
        return a;
      var v = xt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), O = [], g = 0, h = a; g < h.length; g++) {
        var f = h[g], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var f = $[p], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      return O;
    }
    function Tt(n, o) {
      var a = Z(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Rt(n) {
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
    function B(n) {
      return n === null;
    }
    function $e(n) {
      return typeof n == "symbol";
    }
    function M(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function we(n, o) {
      switch (Rt(n)) {
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
      var a = "string", c = Ut(n, l);
      if (c !== void 0) {
        var v = c.call(n, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return be(n);
    }
    function be(n, o) {
      var a, c;
      {
        var v = n.toString;
        if (ot(v)) {
          var c = v.call(n);
          if (!M(c))
            return c;
        }
        var a = n.valueOf;
        if (ot(a)) {
          var c = a.call(n);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function kt(n) {
      return !!n;
    }
    function Ae(n) {
      return "" + n;
    }
    function k(n) {
      var o = we(n);
      return $e(o) ? o : Ae(o);
    }
    function Nt(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ot(n) {
      return typeof n == "function";
    }
    function Dt(n) {
      return typeof n == "function";
    }
    function Ee(n) {
      switch (Rt(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ft(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Ut(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function It(n) {
      var o = Ut(n, u);
      if (!ot(o))
        throw new TypeError();
      var a = o.call(n);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function jt(n) {
      return n.value;
    }
    function Ht(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Lt(n) {
      var o = n.return;
      o && o.call(n);
    }
    function dt(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || o !== w)
        return o;
      var a = n.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function Se() {
      var n;
      !m(G) && typeof e.Reflect < "u" && !(G in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (n = Pe(e.Reflect));
      var o, a, c, v = new D(), P = {
        registerProvider: O,
        getProvider: h,
        setProvider: d
      };
      return P;
      function O(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function g(p, $) {
        if (!m(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!m(c))
              for (var E = It(c); ; ) {
                var S = Ht(E);
                if (!S)
                  return;
                var R = jt(S);
                if (R.isProviderFor(p, $))
                  return Lt(E), R;
              }
          }
        }
        if (!m(n) && n.isProviderFor(p, $))
          return n;
      }
      function h(p, $) {
        var E = v.get(p), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(p, $), m(S) || (m(E) && (E = new x(), v.set(p, E)), E.set($, S))), S;
      }
      function f(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function d(p, $, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var R = v.get(p);
          m(R) && (R = new x(), v.set(p, R)), R.set($, E);
        }
        return !0;
      }
    }
    function Me() {
      var n;
      return !m(G) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (n = e.Reflect[G]), m(n) && (n = Se()), !m(G) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Oe(n) {
      var o = new D(), a = {
        isProviderFor: function(f, d) {
          var p = o.get(f);
          return m(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return st.registerProvider(a), a;
      function c(f, d, p) {
        var $ = o.get(f), E = !1;
        if (m($)) {
          if (!p)
            return;
          $ = new x(), o.set(f, $), E = !0;
        }
        var S = $.get(d);
        if (m(S)) {
          if (!p)
            return;
          if (S = new x(), $.set(d, S), !n.setProvider(f, d, a))
            throw $.delete(d), E && o.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(f, d, p) {
        var $ = c(
          d,
          p,
          /*Create*/
          !1
        );
        return m($) ? !1 : kt($.has(f));
      }
      function P(f, d, p) {
        var $ = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(f);
      }
      function O(f, d, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function g(f, d) {
        var p = [], $ = c(
          f,
          d,
          /*Create*/
          !1
        );
        if (m($))
          return p;
        for (var E = $.keys(), S = It(E), R = 0; ; ) {
          var zt = Ht(S);
          if (!zt)
            return p.length = R, p;
          var Re = jt(zt);
          try {
            p[R] = Re;
          } catch (ke) {
            try {
              Lt(S);
            } finally {
              throw ke;
            }
          }
          R++;
        }
      }
      function h(f, d, p) {
        var $ = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(f))
          return !1;
        if ($.size === 0) {
          var E = o.get(d);
          m(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pe(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, v = n.getOwnMetadataKeys, P = n.deleteMetadata, O = new D(), g = {
        isProviderFor: function(h, f) {
          var d = O.get(h);
          return !m(d) && d.has(f) ? !0 : v(h, f).length ? (m(d) && (d = new T(), O.set(h, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function Z(n, o, a) {
      var c = st.getProvider(n, o);
      if (!m(c))
        return c;
      if (a) {
        if (st.setProvider(n, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Ce() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function g(h, f, d) {
            this._index = 0, this._keys = h, this._values = f, this._selector = d;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var f = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, g;
        }()
      ), c = (
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
          }), g.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, g.prototype.set = function(h, f) {
            var d = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, g.prototype.delete = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ft(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(h, f) {
            if (!ft(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ft(this._keys[d], h)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, h) {
        return g;
      }
      function P(g, h) {
        return h;
      }
      function O(g, h) {
        return [g, h];
      }
    }
    function xe() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new x();
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Te() {
      var n = 16, o = b.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? b.has(d, this._key) : !1;
          }, h.prototype.get = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? b.get(d, this._key) : void 0;
          }, h.prototype.set = function(f, d) {
            var p = v(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, h.prototype.delete = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + g();
        while (b.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, f) {
        if (!r.call(h, a)) {
          if (!f)
            return;
          Object.defineProperty(h, a, { value: b.create() });
        }
        return h[a];
      }
      function P(h, f) {
        for (var d = 0; d < f; ++d)
          h[d] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, h), f;
        }
        return P(new Array(h), h);
      }
      function g() {
        var h = O(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var f = "", d = 0; d < n; ++d) {
          var p = h[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function pt(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Bt || (Bt = {}));
function Ue(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ie(i) {
  return function(t) {
    if (Ue(i)) {
      const e = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const r = `${i.elementSelector}-${i.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, t);
          } catch {
            try {
              customElements.define(r, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function je(i) {
  return Ie(i);
}
function He(i) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Wt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((x) => b.insertRule(x.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          y.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return e;
  };
}
function Le(i) {
  var e;
  if (((e = i == null ? void 0 : i.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function ze(i) {
  return function(t, e) {
    try {
      Le(i);
      const r = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (i.fieldMappings = i.fieldMappings ?? e);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function gt(i) {
  return ze(i);
}
var K;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
})(K || (K = {}));
var tt;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(tt || (tt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, $t = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ne = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($t && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (i) => new ne(typeof i == "string" ? i : i + "", void 0, wt), Ge = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[l + 1], i[0]);
  return new ne(e, i, wt);
}, Be = (i, t) => {
  if ($t) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = at.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, i.appendChild(r);
  }
}, Ft = $t ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return We(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Fe, getOwnPropertyDescriptor: qe, getOwnPropertyNames: Ze, getOwnPropertySymbols: Ye, getPrototypeOf: Xe } = Object, I = globalThis, qt = I.trustedTypes, Je = qt ? qt.emptyScript : "", yt = I.reactiveElementPolyfillSupport, X = (i, t) => i, lt = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Je : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, bt = (i, t) => !Ve(i, t), Zt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: bt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && Fe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: l } = qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const e = this.properties, r = [...Ze(e), ...Ye(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift(Ft(s));
    } else t !== void 0 && e.push(Ft(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Be(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var l;
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : lt).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : lt;
      this._$Em = s;
      const A = y.fromAttribute(e, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, l) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[t]), r ?? (r = _.getPropertyOptions(t)), !((r.hasChanged ?? bt)(l, e) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: _ } = u, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[X("elementProperties")] = /* @__PURE__ */ new Map(), V[X("finalized")] = /* @__PURE__ */ new Map(), yt == null || yt({ ReactiveElement: V }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Yt = (i) => i, ut = J.trustedTypes, Xt = ut ? ut.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ie = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + U, Qe = `<${se}>`, z = document, et = () => z.createComment(""), rt = (i) => i === null || typeof i != "object" && typeof i != "function", At = Array.isArray, Ke = (i) => At(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", vt = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, j = RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, oe = /^(?:script|style|textarea|title)$/i, tr = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), er = tr(1), F = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function ae(i, t) {
  if (!At(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const rr = (i, t) => {
  const e = i.length - 1, r = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Y;
  for (let _ = 0; _ < e; _++) {
    const y = i[_];
    let A, b, w = -1, x = 0;
    for (; x < y.length && (u.lastIndex = x, b = u.exec(y), b !== null); ) x = u.lastIndex, u === Y ? b[1] === "!--" ? u = Jt : b[1] !== void 0 ? u = Qt : b[2] !== void 0 ? (oe.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = j) : b[3] !== void 0 && (u = j) : u === j ? b[0] === ">" ? (u = s ?? Y, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? j : b[3] === '"' ? te : Kt) : u === te || u === Kt ? u = j : u === Jt || u === Qt ? u = Y : (u = j, s = void 0);
    const T = u === j && i[_ + 1].startsWith("/>") ? " " : "";
    l += u === Y ? y + Qe : w >= 0 ? (r.push(A), y.slice(0, w) + ie + y.slice(w) + U + T) : y + U + (w === -2 ? _ : T);
  }
  return [ae(i, l + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class nt {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = t.length - 1, y = this.parts, [A, b] = rr(t, e);
    if (this.el = nt.createElement(A, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = H.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(ie)) {
          const x = b[u++], T = s.getAttribute(w).split(U), D = /([.?@])?(.*)/.exec(x);
          y.push({ type: 1, index: l, name: D[2], strings: T, ctor: D[1] === "." ? ir : D[1] === "?" ? sr : D[1] === "@" ? or : ct }), s.removeAttribute(w);
        } else w.startsWith(U) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (oe.test(s.tagName)) {
          const w = s.textContent.split(U), x = w.length - 1;
          if (x > 0) {
            s.textContent = ut ? ut.emptyScript : "";
            for (let T = 0; T < x; T++) s.append(w[T], et()), H.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[x], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === se) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = z.createElement("template");
    return r.innerHTML = t, r;
  }
}
function q(i, t, e = i, r) {
  var u, _;
  if (t === F) return t;
  let s = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const l = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(i), s._$AT(i, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (t = q(i, s._$AS(i, t.values), s, r)), t;
}
class nr {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    H.currentNode = s;
    let l = H.nextNode(), u = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new it(l, l.nextSibling, this, t) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (A = new ar(l, this, t)), this._$AV.push(A), y = r[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = z, s;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class it {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = q(this, t, e), rt(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ke(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = nt.createElement(ae(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new nr(s, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const l of t) s === e.length ? e.push(r = new it(this.O(et()), this.O(et()), this, this.options)) : r = e[s], r._$AI(l), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Yt(t).nextSibling;
      Yt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ct {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(t, e = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = q(this, t, e, 0), u = !rt(t) || t !== this._$AH && t !== F, u && (this._$AH = t);
    else {
      const _ = t;
      let y, A;
      for (t = l[0], y = 0; y < l.length - 1; y++) A = q(this, _[r + y], e, y), A === F && (A = this._$AH[y]), u || (u = !rt(A) || A !== this._$AH[y]), A === C ? t = C : t !== C && (t += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ir extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class sr extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class or extends ct {
  constructor(t, e, r, s, l) {
    super(t, e, r, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? C) === F) return;
    const r = this._$AH, s = t === C && r !== C || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== C && (r === C || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ar {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    q(this, t);
  }
}
const _t = J.litHtmlPolyfillSupport;
_t == null || _t(nt, it), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const lr = (i, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = s = new it(t.insertBefore(et(), l), l, void 0, e ?? {});
  }
  return s._$AI(i), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class Q extends V {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = lr(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return F;
  }
}
var re;
Q._$litElement$ = !0, Q.finalized = !0, (re = L.litElementHydrateSupport) == null || re.call(L, { LitElement: Q });
const mt = L.litElementPolyfillSupport;
mt == null || mt({ LitElement: Q });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: bt }, cr = (i = ur, t, e) => {
  const { kind: r, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), l.set(e.name, i), r === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const y = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, y, i, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, i, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(_) {
      const y = this[u];
      t.call(this, _), this.requestUpdate(u, y, i, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Et(i) {
  return (t, e) => typeof e == "object" ? cr(i, t, e) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(i, t, e);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, W = (i, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? fr(t, e) : t, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (s = (r ? u(t, e, s) : u(s)) || s);
  return r && s && hr(t, e, s), s;
};
const dr = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;display:inline-block;padding:4px;'>",
    "<span style='font-size:13px;border-bottom:1px dashed #6366f1;color:#6366f1;cursor:help;'>Hover over me</span>",
    "</div>"
  ].join(""),
  labelProp: "content",
  badges: ["Utility", "Tooltip"]
};
let N = class extends Q {
  constructor() {
    super(...arguments), this.content = "Tooltip message", this.position = "top", this.variant = "standard";
  }
  static getStudioTemplate(i) {
    return dr;
  }
  get contentConfig() {
    return this.content;
  }
  set contentConfig(i) {
    this.content = i;
  }
  get positionConfig() {
    return this.position;
  }
  set positionConfig(i) {
    this.position = i || "top";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(i) {
    this.variant = i || "standard";
  }
  render() {
    const i = [
      "tooltip-box",
      `pos-${this.position}`,
      `variant-${this.variant}`
    ].join(" ");
    return er`
      <div class="tooltip-trigger">
        <slot></slot>
      </div>
      <div class=${i}>
        ${this.content}
      </div>
    `;
  }
};
N.styles = Ge`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip-trigger {
      display: inline-block;
      cursor: help;
    }

    .tooltip-box {
      position: absolute;
      z-index: 1000;
      padding: 6px 10px;
      font-size: 0.78rem;
      font-weight: 500;
      line-height: 1.4;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
    }

    .tooltip-trigger:hover + .tooltip-box,
    :host(:hover) .tooltip-box {
      opacity: 1;
      visibility: visible;
    }

    /* Positions & Transforms */
    .pos-top {
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, -6px);
    }
    :host(:hover) .pos-top {
      transform: translate(-50%, -10px);
    }

    .pos-bottom {
      top: 100%;
      left: 50%;
      transform: translate(-50%, 6px);
    }
    :host(:hover) .pos-bottom {
      transform: translate(-50%, 10px);
    }

    .pos-left {
      right: 100%;
      top: 50%;
      transform: translate(-6px, -50%);
    }
    :host(:hover) .pos-left {
      transform: translate(-10px, -50%);
    }

    .pos-right {
      left: 100%;
      top: 50%;
      transform: translate(6px, -50%);
    }
    :host(:hover) .pos-right {
      transform: translate(10px, -50%);
    }

    /* Variants */
    .variant-standard {
      background: #1f2937;
      color: #ffffff;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .variant-modern {
      background: #ffffff;
      color: #1f2937;
      border: 1px solid #e5e7eb;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
    }
  `;
W([
  Et({ type: String })
], N.prototype, "content", 2);
W([
  Et({ type: String })
], N.prototype, "position", 2);
W([
  Et({ type: String })
], N.prototype, "variant", 2);
W([
  gt({
    attributeType: tt.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Tooltip Message",
    fieldMappings: "content"
  })
], N.prototype, "contentConfig", 1);
W([
  gt({
    attributeType: tt.PROPERTY,
    uiComponentType: K.DROPDOWN,
    displayLabel: "Placement Position",
    fieldMappings: "position",
    optionItems: [
      { label: "Top", value: "top" },
      { label: "Bottom", value: "bottom" },
      { label: "Left", value: "left" },
      { label: "Right", value: "right" }
    ]
  })
], N.prototype, "positionConfig", 1);
W([
  gt({
    attributeType: tt.PROPERTY,
    uiComponentType: K.DROPDOWN,
    displayLabel: "Tooltip Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Dark", value: "standard" },
      { label: "Modern Light", value: "modern" }
    ]
  })
], N.prototype, "variantConfig", 1);
N = W([
  je({
    name: "zero-tooltip",
    version: "1.0.0",
    title: "Tooltip Wrapper",
    elementSelector: "zero-tooltip",
    group: "Utilities",
    iconName: "tooltip-icon.png"
  }),
  He()
], N);
export {
  N as ZeroTooltip,
  dr as studioTemplate
};
