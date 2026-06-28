var He = Object.defineProperty;
var je = (n, t, e) => t in n ? He(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var zt = (n, t, e) => je(n, typeof t != "symbol" ? t + "" : t, e);
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Wt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = o(n);
    typeof e.Reflect < "u" && (r = o(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function o(y, E) {
      return function($, w) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !_ && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: E ? function(i, s) {
        return r.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: E ? function(i, s) {
        return r.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), N = typeof WeakMap == "function" ? WeakMap : Re(), z = o ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Ce(), St = Pe(ot);
    function ce(i, s, a, c) {
      if (m(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Ut(s))
          throw new TypeError();
        return be(i, s);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !m(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = R(a), we(i, s, a, c);
      }
    }
    t("decorate", ce);
    function de(i, s) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!m(v) && !Oe(v))
          throw new TypeError();
        Pt(i, s, c, v);
      }
      return a;
    }
    t("metadata", de);
    function he(i, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = R(c)), Pt(i, s, a, c);
    }
    t("defineMetadata", he);
    function fe(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), Ot(i, s, a);
    }
    t("hasMetadata", fe);
    function pe(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), ht(i, s, a);
    }
    t("hasOwnMetadata", pe);
    function ye(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), Mt(i, s, a);
    }
    t("getMetadata", ye);
    function ve(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), Ct(i, s, a);
    }
    t("getOwnMetadata", ve);
    function _e(i, s) {
      if (!O(i))
        throw new TypeError();
      return m(s) || (s = R(s)), xt(i, s);
    }
    t("getMetadataKeys", _e);
    function me(i, s) {
      if (!O(i))
        throw new TypeError();
      return m(s) || (s = R(s)), Tt(i, s);
    }
    t("getOwnMetadataKeys", me);
    function ge(i, s, a) {
      if (!O(s))
        throw new TypeError();
      if (m(a) || (a = R(a)), !O(s))
        throw new TypeError();
      m(a) || (a = R(a));
      var c = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", ge);
    function be(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!m(v) && !B(v)) {
          if (!Ut(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function we(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], M = C(s, a, c);
        if (!m(M) && !B(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Ot(i, s, a) {
      var c = ht(i, s, a);
      if (c)
        return !0;
      var v = pt(s);
      return B(v) ? !1 : Ot(i, v, a);
    }
    function ht(i, s, a) {
      var c = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Rt(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Mt(i, s, a) {
      var c = ht(i, s, a);
      if (c)
        return Ct(i, s, a);
      var v = pt(s);
      if (!B(v))
        return Mt(i, v, a);
    }
    function Ct(i, s, a) {
      var c = Z(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pt(i, s, a, c) {
      var v = Z(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function xt(i, s) {
      var a = Tt(i, s), c = pt(i);
      if (c === null)
        return a;
      var v = xt(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new T(), M = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      return M;
    }
    function Tt(i, s) {
      var a = Z(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function kt(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
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
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(i) {
      return i === void 0;
    }
    function B(i) {
      return i === null;
    }
    function $e(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, s) {
      switch (kt(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var a = "string", c = Ht(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (st(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (st(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function R(i) {
      var s = Ee(i);
      return $e(s) ? s : Se(s);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function st(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      return typeof i == "function";
    }
    function Oe(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ft(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ht(i, s) {
      var a = i[s];
      if (a != null) {
        if (!st(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(i) {
      var s = Ht(i, u);
      if (!st(s))
        throw new TypeError();
      var a = s.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Dt(i) {
      return i.value;
    }
    function It(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Lt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function pt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Me() {
      var i;
      !m(z) && typeof e.Reflect < "u" && !(z in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = xe(e.Reflect));
      var s, a, c, v = new N(), C = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return C;
      function M(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
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
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function g(p, b) {
        if (!m(s)) {
          if (s.isProviderFor(p, b))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(p, b))
              return s;
            if (!m(c))
              for (var A = jt(c); ; ) {
                var S = It(A);
                if (!S)
                  return;
                var k = Dt(S);
                if (k.isProviderFor(p, b))
                  return Lt(A), k;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, b))
          return i;
      }
      function d(p, b) {
        var A = v.get(p), S;
        return m(A) || (S = A.get(b)), m(S) && (S = g(p, b), m(S) || (m(A) && (A = new x(), v.set(p, A)), A.set(b, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return s === p || a === p || !m(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(p, b);
        if (S !== A) {
          if (!m(S))
            return !1;
          var k = v.get(p);
          m(k) && (k = new x(), v.set(p, k)), k.set(b, A);
        }
        return !0;
      }
    }
    function Ce() {
      var i;
      return !m(z) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[z]), m(i) && (i = Me()), !m(z) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var s = new N(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return ot.registerProvider(a), a;
      function c(h, f, p) {
        var b = s.get(h), A = !1;
        if (m(b)) {
          if (!p)
            return;
          b = new x(), s.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new x(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return m(b) ? !1 : Rt(b.has(h));
      }
      function C(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function M(h, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var p = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return p;
        for (var A = b.keys(), S = jt(A), k = 0; ; ) {
          var Gt = It(S);
          if (!Gt)
            return p.length = k, p;
          var Ne = Dt(Gt);
          try {
            p[k] = Ne;
          } catch (Ue) {
            try {
              Lt(S);
            } finally {
              throw Ue;
            }
          }
          k++;
        }
      }
      function d(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = s.get(f);
          m(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function xe(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new N(), g = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new T(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function Z(i, s, a) {
      var c = ot.getProvider(i, s);
      if (!m(c))
        return c;
      if (a) {
        if (ot.setProvider(i, s, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ft(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!ft(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ft(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, d) {
        return g;
      }
      function C(g, d) {
        return d;
      }
      function M(g, d) {
        return [g, d];
      }
    }
    function ke() {
      var i = (
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
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Re() {
      var i = 16, s = $.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + g();
        while ($.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function g() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function yt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Wt || (Wt = {}));
function De(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ie(n) {
  return function(t) {
    if (De(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
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
function Le(n) {
  return Ie(n);
}
function Ge(n) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        zt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((x) => $.insertRule(x.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return e;
  };
}
function ze(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(n) {
  return function(t, e) {
    try {
      ze(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let o = !0;
      if (typeof e == "string") {
        try {
          o = typeof t[e] != "function";
        } catch {
          o = !0;
        }
        o && (n.fieldMappings = n.fieldMappings ?? e);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function ct(n) {
  return Be(n);
}
var K;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(K || (K = {}));
var V;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(V || (V = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, bt = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (n) => new oe(typeof n == "string" ? n : n + "", void 0, wt), Ve = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, o, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[l + 1], n[0]);
  return new oe(e, n, wt);
}, Fe = (n, t) => {
  if (bt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = at.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, n.appendChild(r);
  }
}, Ft = bt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return We(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Ze, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Xe, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, H = globalThis, qt = H.trustedTypes, Ke = qt ? qt.emptyScript : "", vt = H.reactiveElementPolyfillSupport, X = (n, t) => n, lt = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Ke : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, $t = (n, t) => !qe(n, t), Zt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: $t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && Ze(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: l } = Ye(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: o, set(u) {
      const _ = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const e = this.properties, r = [...Xe(e), ...Je(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(Ft(o));
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
    return Fe(t, this.constructor.elementStyles), t;
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
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : lt).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const _ = r.getPropertyOptions(o), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : lt;
      this._$Em = o;
      const E = y.fromAttribute(e, _.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, o = !1, l) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (o === !1 && (l = this[t]), r ?? (r = _.getPropertyOptions(t)), !((r.hasChanged ?? $t)(l, e) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: _ } = u, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[X("elementProperties")] = /* @__PURE__ */ new Map(), W[X("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: W }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Yt = (n) => n, ut = J.trustedTypes, Xt = ut ? ut.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, se = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ae = "?" + U, tr = `<${ae}>`, L = document, tt = () => L.createComment(""), et = (n) => n === null || typeof n != "object" && typeof n != "function", Et = Array.isArray, er = (n) => Et(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, j = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, le = /^(?:script|style|textarea|title)$/i, rr = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), nr = rr(1), F = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ue(n, t) {
  if (!Et(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const ir = (n, t) => {
  const e = n.length - 1, r = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Y;
  for (let _ = 0; _ < e; _++) {
    const y = n[_];
    let E, $, w = -1, x = 0;
    for (; x < y.length && (u.lastIndex = x, $ = u.exec(y), $ !== null); ) x = u.lastIndex, u === Y ? $[1] === "!--" ? u = Jt : $[1] !== void 0 ? u = Qt : $[2] !== void 0 ? (le.test($[2]) && (o = RegExp("</" + $[2], "g")), u = j) : $[3] !== void 0 && (u = j) : u === j ? $[0] === ">" ? (u = o ?? Y, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? j : $[3] === '"' ? te : Kt) : u === te || u === Kt ? u = j : u === Jt || u === Qt ? u = Y : (u = j, o = void 0);
    const T = u === j && n[_ + 1].startsWith("/>") ? " " : "";
    l += u === Y ? y + tr : w >= 0 ? (r.push(E), y.slice(0, w) + se + y.slice(w) + U + T) : y + U + (w === -2 ? _ : T);
  }
  return [ue(n, l + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class rt {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const _ = t.length - 1, y = this.parts, [E, $] = ir(t, e);
    if (this.el = rt.createElement(E, r), D.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = D.nextNode()) !== null && y.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(se)) {
          const x = $[u++], T = o.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(x);
          y.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? sr : N[1] === "?" ? ar : N[1] === "@" ? lr : dt }), o.removeAttribute(w);
        } else w.startsWith(U) && (y.push({ type: 6, index: l }), o.removeAttribute(w));
        if (le.test(o.tagName)) {
          const w = o.textContent.split(U), x = w.length - 1;
          if (x > 0) {
            o.textContent = ut ? ut.emptyScript : "";
            for (let T = 0; T < x; T++) o.append(w[T], tt()), D.nextNode(), y.push({ type: 2, index: ++l });
            o.append(w[x], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ae) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(U, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = L.createElement("template");
    return r.innerHTML = t, r;
  }
}
function q(n, t, e = n, r) {
  var u, _;
  if (t === F) return t;
  let o = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const l = et(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), l === void 0 ? o = void 0 : (o = new l(n), o._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = o : e._$Cl = o), o !== void 0 && (t = q(n, o._$AS(n, t.values), o, r)), t;
}
class or {
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
    const { el: { content: e }, parts: r } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? L).importNode(e, !0);
    D.currentNode = o;
    let l = D.nextNode(), u = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new nt(l, l.nextSibling, this, t) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (E = new ur(l, this, t)), this._$AV.push(E), y = r[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = D.nextNode(), u++);
    }
    return D.currentNode = L, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class nt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = q(this, t, e), et(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(L.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = rt.createElement(ue(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new or(o, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const l of t) o === e.length ? e.push(r = new nt(this.O(tt()), this.O(tt()), this, this.options)) : r = e[o], r._$AI(l), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Yt(t).nextSibling;
      Yt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = P;
  }
  _$AI(t, e = this, r, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = q(this, t, e, 0), u = !et(t) || t !== this._$AH && t !== F, u && (this._$AH = t);
    else {
      const _ = t;
      let y, E;
      for (t = l[0], y = 0; y < l.length - 1; y++) E = q(this, _[r + y], e, y), E === F && (E = this._$AH[y]), u || (u = !et(E) || E !== this._$AH[y]), E === P ? t = P : t !== P && (t += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class lr extends dt {
  constructor(t, e, r, o, l) {
    super(t, e, r, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? P) === F) return;
    const r = this._$AH, o = t === P && r !== P || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== P && (r === P || o);
    o && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
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
const mt = J.litHtmlPolyfillSupport;
mt == null || mt(rt, nt), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const cr = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = o = new nt(t.insertBefore(tt(), l), l, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
class Q extends W {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = cr(e, this.renderRoot, this.renderOptions);
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
var ie;
Q._$litElement$ = !0, Q.finalized = !0, (ie = I.litElementHydrateSupport) == null || ie.call(I, { LitElement: Q });
const gt = I.litElementPolyfillSupport;
gt == null || gt({ LitElement: Q });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: $t }, hr = (n = dr, t, e) => {
  const { kind: r, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const y = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, y, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(_) {
      const y = this[u];
      t.call(this, _), this.requestUpdate(u, y, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function At(n) {
  return (t, e) => typeof e == "object" ? hr(n, t, e) : ((r, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(n, t, e);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, it = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? pr(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (o = (r ? u(t, e, o) : u(o)) || o);
  return r && o && fr(t, e, o), o;
};
const re = () => window.zeroThemeManager, ne = {
  kind: "button",
  templateHtml: [
    "<button style='position:relative;padding:10px 25px;color:var(--uiv-primary-color, #00d2ff);background:transparent;font-size:1.1rem;font-weight:bold;text-transform:uppercase;letter-spacing:4px;border:2px solid var(--uiv-primary-color, #00d2ff);border-radius:4px;cursor:pointer;outline:none;box-shadow:0 0 5px var(--uiv-primary-color, #00d2ff);'>",
    "{{display:label}}",
    "</button>"
  ].join(""),
  labelProp: "label",
  badges: ["Glow", "Effect"]
};
function yr(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let G = class extends Q {
  constructor() {
    super(...arguments), this.label = "GLOW", this.disabled = !1, this.glowColor = "", this.onClickEvent = "click";
  }
  static getStudioTemplate(n) {
    var o, l;
    if (!n) return ne;
    const t = yr(n.studio.display.label || "Glow Button"), e = ((o = n.props) == null ? void 0 : o.glowColor) ?? ((l = n.studio.props) == null ? void 0 : l.glowColor), r = e || "var(--uiv-primary-color, #00d2ff)";
    return {
      ...ne,
      templateHtml: [
        `<button style='position:relative;padding:10px 25px;color:${r};background:transparent;font-size:1.1rem;font-weight:bold;text-transform:uppercase;letter-spacing:4px;border:2px solid ${r};border-radius:4px;cursor:pointer;outline:none;box-shadow:0 0 5px ${r};'>`,
        t,
        "</button>"
      ].join("")
    };
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = re()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const n = (t = re()) == null ? void 0 : t.getActiveTheme();
    return nr`
            <style>
                ${n ? n.getGlobalStyles() : ""}
                :host {
                    ${this.glowColor ? `--uiv-primary-color: ${this.glowColor};` : ""}
                }
            </style>
            <button ?disabled="${this.disabled}" @click="${() => this.dispatchEvent(new CustomEvent("click"))}">
                ${this.label}
            </button>
        `;
  }
};
G.styles = Ve`
        :host {
            display: inline-block;
            --btn-p: var(--uiv-primary-color, #00d2ff);
            --btn-t: var(--uiv-text-color, #ffffff);
            --btn-bg: var(--uiv-bg-color, #000);
        }

        button {
            position: relative;
            padding: 10px 25px;
            color: var(--btn-p);
            background: transparent;
            font-size: 1.1rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 4px;
            border: 2px solid var(--btn-p);
            border-radius: 4px;
            cursor: pointer;
            overflow: hidden;
            transition: 0.5s;
            outline: none;
            box-shadow: 0 0 5px var(--btn-p);
        }

        button:hover {
            background: var(--btn-p);
            color: #050801;
            box-shadow: 0 0 5px var(--btn-p),
                        0 0 25px var(--btn-p),
                        0 0 50px var(--btn-p),
                        0 0 200px var(--btn-p);
        }

        button:active {
            transform: translateY(2px);
        }

        button:disabled {
            filter: grayscale(1);
            cursor: not-allowed;
            opacity: 0.5;
        }
    `;
it([
  At({ type: String }),
  ct({
    attributeType: V.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], G.prototype, "label", 2);
it([
  At({ type: Boolean }),
  ct({
    attributeType: V.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], G.prototype, "disabled", 2);
it([
  At({ type: String }),
  ct({
    attributeType: V.PROPERTY,
    uiComponentType: K.COLOR_PICKER,
    displayLabel: "Glow Color Overlay",
    fieldMappings: "glowColor"
  })
], G.prototype, "glowColor", 2);
it([
  ct({
    attributeType: V.EVENT,
    eventTrigger: "click",
    displayLabel: "On Click"
  })
], G.prototype, "onClickEvent", 2);
G = it([
  Le({
    name: "zero-uiv-button-glow",
    version: "1.0.0",
    title: "Radiant Glow Button",
    elementSelector: "zero-uiv-button-glow",
    group: "Uiverse Buttons",
    iconName: "button-icon.png"
  }),
  Ge()
], G);
export {
  G as ZeroUivButtonGlow,
  ne as glowTemplate
};
