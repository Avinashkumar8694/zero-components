var Ie = Object.defineProperty;
var He = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Bt = (r, t, e) => He(r, typeof t != "symbol" ? t + "" : t, e);
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
var Vt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Gt == "object" ? Gt : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(f, $) {
      return function(_, m) {
        Object.defineProperty(f, _, { configurable: !0, writable: !0, value: m }), $ && $(_, m);
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
    function v() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, $ = !v && !f, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return gt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return gt({ __proto__: null });
      } : function() {
        return gt({});
      },
      has: $ ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: $ ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, m = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ke(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), N = typeof WeakMap == "function" ? WeakMap : Re(), U = o ? Symbol.for("@reflect-metadata:registry") : void 0, G = Oe(), K = Me(G);
    function de(i, a, s, d) {
      if (g(s)) {
        if (!Dt(i))
          throw new TypeError();
        if (!It(a))
          throw new TypeError();
        return _e(i, a);
      } else {
        if (!Dt(i))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(d) && !g(d) && !Z(d))
          throw new TypeError();
        return Z(d) && (d = void 0), s = H(s), $e(i, a, s, d);
      }
    }
    t("decorate", de);
    function ce(i, a) {
      function s(d, b) {
        if (!O(d))
          throw new TypeError();
        if (!g(b) && !Ce(b))
          throw new TypeError();
        Pt(i, a, d, b);
      }
      return s;
    }
    t("metadata", ce);
    function fe(i, a, s, d) {
      if (!O(s))
        throw new TypeError();
      return g(d) || (d = H(d)), Pt(i, a, s, d);
    }
    t("defineMetadata", fe);
    function he(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = H(s)), St(i, a, s);
    }
    t("hasMetadata", he);
    function pe(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = H(s)), yt(i, a, s);
    }
    t("hasOwnMetadata", pe);
    function ye(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = H(s)), Ot(i, a, s);
    }
    t("getMetadata", ye);
    function ve(i, a, s) {
      if (!O(a))
        throw new TypeError();
      return g(s) || (s = H(s)), Mt(i, a, s);
    }
    t("getOwnMetadata", ve);
    function be(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = H(a)), kt(i, a);
    }
    t("getMetadataKeys", be);
    function ge(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = H(a)), Tt(i, a);
    }
    t("getOwnMetadataKeys", ge);
    function me(i, a, s) {
      if (!O(a))
        throw new TypeError();
      if (g(s) || (s = H(s)), !O(a))
        throw new TypeError();
      g(s) || (s = H(s));
      var d = tt(
        a,
        s,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, s);
    }
    t("deleteMetadata", me);
    function _e(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var d = i[s], b = d(a);
        if (!g(b) && !Z(b)) {
          if (!It(b))
            throw new TypeError();
          a = b;
        }
      }
      return a;
    }
    function $e(i, a, s, d) {
      for (var b = i.length - 1; b >= 0; --b) {
        var P = i[b], M = P(a, s, d);
        if (!g(M) && !Z(M)) {
          if (!O(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function St(i, a, s) {
      var d = yt(i, a, s);
      if (d)
        return !0;
      var b = bt(a);
      return Z(b) ? !1 : St(i, b, s);
    }
    function yt(i, a, s) {
      var d = tt(
        a,
        s,
        /*Create*/
        !1
      );
      return g(d) ? !1 : Nt(d.OrdinaryHasOwnMetadata(i, a, s));
    }
    function Ot(i, a, s) {
      var d = yt(i, a, s);
      if (d)
        return Mt(i, a, s);
      var b = bt(a);
      if (!Z(b))
        return Ot(i, b, s);
    }
    function Mt(i, a, s) {
      var d = tt(
        a,
        s,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(i, a, s);
    }
    function Pt(i, a, s, d) {
      var b = tt(
        s,
        d,
        /*Create*/
        !0
      );
      b.OrdinaryDefineOwnMetadata(i, a, s, d);
    }
    function kt(i, a) {
      var s = Tt(i, a), d = bt(i);
      if (d === null)
        return s;
      var b = kt(d, a);
      if (b.length <= 0)
        return s;
      if (s.length <= 0)
        return b;
      for (var P = new R(), M = [], w = 0, c = s; w < c.length; w++) {
        var h = c[w], p = P.has(h);
        p || (P.add(h), M.push(h));
      }
      for (var y = 0, E = b; y < E.length; y++) {
        var h = E[y], p = P.has(h);
        p || (P.add(h), M.push(h));
      }
      return M;
    }
    function Tt(i, a) {
      var s = tt(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Rt(i) {
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
    function g(i) {
      return i === void 0;
    }
    function Z(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, a) {
      switch (Rt(i)) {
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
      var s = "string", d = Ht(i, l);
      if (d !== void 0) {
        var b = d.call(i, s);
        if (O(b))
          throw new TypeError();
        return b;
      }
      return xe(i);
    }
    function xe(i, a) {
      var s, d;
      {
        var b = i.toString;
        if (ut(b)) {
          var d = b.call(i);
          if (!O(d))
            return d;
        }
        var s = i.valueOf;
        if (ut(s)) {
          var d = s.call(i);
          if (!O(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Nt(i) {
      return !!i;
    }
    function Ae(i) {
      return "" + i;
    }
    function H(i) {
      var a = Ee(i);
      return we(a) ? a : Ae(a);
    }
    function Dt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ut(i) {
      return typeof i == "function";
    }
    function It(i) {
      return typeof i == "function";
    }
    function Ce(i) {
      switch (Rt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function vt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ht(i, a) {
      var s = i[a];
      if (s != null) {
        if (!ut(s))
          throw new TypeError();
        return s;
      }
    }
    function jt(i) {
      var a = Ht(i, u);
      if (!ut(a))
        throw new TypeError();
      var s = a.call(i);
      if (!O(s))
        throw new TypeError();
      return s;
    }
    function Ut(i) {
      return i.value;
    }
    function zt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Lt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function bt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === m || a !== m)
        return a;
      var s = i.prototype, d = s && Object.getPrototypeOf(s);
      if (d == null || d === Object.prototype)
        return a;
      var b = d.constructor;
      return typeof b != "function" || b === i ? a : b;
    }
    function Se() {
      var i;
      !g(U) && typeof e.Reflect < "u" && !(U in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var a, s, d, b = new N(), P = {
        registerProvider: M,
        getProvider: c,
        setProvider: p
      };
      return P;
      function M(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case g(a):
            a = y;
            break;
          case a === y:
            break;
          case g(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            d === void 0 && (d = new R()), d.add(y);
            break;
        }
      }
      function w(y, E) {
        if (!g(a)) {
          if (a.isProviderFor(y, E))
            return a;
          if (!g(s)) {
            if (s.isProviderFor(y, E))
              return a;
            if (!g(d))
              for (var x = jt(d); ; ) {
                var A = zt(x);
                if (!A)
                  return;
                var D = Ut(A);
                if (D.isProviderFor(y, E))
                  return Lt(x), D;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, E))
          return i;
      }
      function c(y, E) {
        var x = b.get(y), A;
        return g(x) || (A = x.get(E)), g(A) && (A = w(y, E), g(A) || (g(x) && (x = new C(), b.set(y, x)), x.set(E, A))), A;
      }
      function h(y) {
        if (g(y))
          throw new TypeError();
        return a === y || s === y || !g(d) && d.has(y);
      }
      function p(y, E, x) {
        if (!h(x))
          throw new Error("Metadata provider not registered.");
        var A = c(y, E);
        if (A !== x) {
          if (!g(A))
            return !1;
          var D = b.get(y);
          g(D) && (D = new C(), b.set(y, D)), D.set(E, x);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !g(U) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[U]), g(i) && (i = Se()), !g(U) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var a = new N(), s = {
        isProviderFor: function(h, p) {
          var y = a.get(h);
          return g(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: b,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return G.registerProvider(s), s;
      function d(h, p, y) {
        var E = a.get(h), x = !1;
        if (g(E)) {
          if (!y)
            return;
          E = new C(), a.set(h, E), x = !0;
        }
        var A = E.get(p);
        if (g(A)) {
          if (!y)
            return;
          if (A = new C(), E.set(p, A), !i.setProvider(h, p, s))
            throw E.delete(p), x && a.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function b(h, p, y) {
        var E = d(
          p,
          y,
          /*Create*/
          !1
        );
        return g(E) ? !1 : Nt(E.has(h));
      }
      function P(h, p, y) {
        var E = d(
          p,
          y,
          /*Create*/
          !1
        );
        if (!g(E))
          return E.get(h);
      }
      function M(h, p, y, E) {
        var x = d(
          y,
          E,
          /*Create*/
          !0
        );
        x.set(h, p);
      }
      function w(h, p) {
        var y = [], E = d(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(E))
          return y;
        for (var x = E.keys(), A = jt(x), D = 0; ; ) {
          var Wt = zt(A);
          if (!Wt)
            return y.length = D, y;
          var Ne = Ut(Wt);
          try {
            y[D] = Ne;
          } catch (De) {
            try {
              Lt(A);
            } finally {
              throw De;
            }
          }
          D++;
        }
      }
      function c(h, p, y) {
        var E = d(
          p,
          y,
          /*Create*/
          !1
        );
        if (g(E) || !E.delete(h))
          return !1;
        if (E.size === 0) {
          var x = a.get(p);
          g(x) || (x.delete(y), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function Pe(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, d = i.getOwnMetadata, b = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new N(), w = {
        isProviderFor: function(c, h) {
          var p = M.get(c);
          return !g(p) && p.has(h) ? !0 : b(c, h).length ? (g(p) && (p = new R(), M.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function tt(i, a, s) {
      var d = G.getProvider(i, a);
      if (!g(d))
        return d;
      if (s) {
        if (G.setProvider(i, a, K))
          return K;
        throw new Error("Illegal state.");
      }
    }
    function ke() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function w(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[u] = function() {
            return this;
          }, w.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, w.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, w;
        }()
      ), d = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(c, h) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, w.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, y = h + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, vt(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new s(this._keys, this._values, b);
          }, w.prototype.values = function() {
            return new s(this._keys, this._values, P);
          }, w.prototype.entries = function() {
            return new s(this._keys, this._values, M);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[u] = function() {
            return this.entries();
          }, w.prototype._find = function(c, h) {
            if (!vt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (vt(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return d;
      function b(w, c) {
        return w;
      }
      function P(w, c) {
        return c;
      }
      function M(w, c) {
        return [w, c];
      }
    }
    function Te() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new C();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
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
      return i;
    }
    function Re() {
      var i = 16, a = _.create(), s = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var p = b(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? _.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = b(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? _.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var y = b(
              h,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, c.prototype.delete = function(h) {
            var p = b(
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
          c = "@@WeakMap@@" + w();
        while (_.has(a, c));
        return a[c] = !0, c;
      }
      function b(c, h) {
        if (!n.call(c, s)) {
          if (!h)
            return;
          Object.defineProperty(c, s, { value: _.create() });
        }
        return c[s];
      }
      function P(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, c), h;
        }
        return P(new Array(c), c);
      }
      function w() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var y = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function gt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function je(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ue(r) {
  return function(t) {
    if (je(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
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
function ze(r) {
  return Ue(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Bt(this, "_stylesApplied", !1);
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
        var $;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const _ = new CSSStyleSheet(), m = ($ = l.sheet) == null ? void 0 : $.cssRules;
          m && (Array.from(m).forEach((C) => _.insertRule(C.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          f.appendChild(_);
        }
        u.forEach((_) => {
          const m = _.cloneNode(!0);
          f.appendChild(m);
        });
      }
    }
    return e;
  };
}
function We(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(r) {
  return function(t, e) {
    try {
      We(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let o = !0;
      if (typeof e == "string") {
        try {
          o = typeof t[e] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function z(r) {
  return Be(r);
}
var j;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(j || (j = {}));
var I;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, Et = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xt = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== xt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Et && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Ft.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ft.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ge = (r) => new oe(typeof r == "string" ? r : r + "", void 0, xt), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new oe(e, r, xt);
}, Fe = (r, t) => {
  if (Et) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = ct.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Yt = Et ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Ge(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: qe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Xe, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, W = globalThis, qt = W.trustedTypes, Ke = qt ? qt.emptyScript : "", mt = W.reactiveElementPolyfillSupport, rt = (r, t) => r, ft = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Ke : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, At = (r, t) => !Ye(r, t), Zt = { attribute: !0, type: String, converter: ft, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && qe(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: o, set(u) {
      const v = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(rt("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(rt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(rt("properties"))) {
      const e = this.properties, n = [...Xe(e), ...Je(e)];
      for (const o of n) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, o] of e) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const o = this._$Eu(e, n);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const o of n) e.unshift(Yt(o));
    } else t !== void 0 && e.push(Yt(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Fe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    var l;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ft).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const v = n.getPropertyOptions(o), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : ft;
      this._$Em = o;
      const $ = f.fromAttribute(e, v.type);
      this[o] = $ ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? $, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, o = !1, l) {
    var u;
    if (t !== void 0) {
      const v = this.constructor;
      if (o === !1 && (l = this[t]), n ?? (n = v.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(v._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: v } = u, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
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
    (e = this._$EO) == null || e.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[rt("elementProperties")] = /* @__PURE__ */ new Map(), X[rt("finalized")] = /* @__PURE__ */ new Map(), mt == null || mt({ ReactiveElement: X }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = globalThis, Xt = (r) => r, ht = nt.trustedTypes, Jt = ht ? ht.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + L, tr = `<${se}>`, q = document, ot = () => q.createComment(""), at = (r) => r === null || typeof r != "object" && typeof r != "function", Ct = Array.isArray, er = (r) => Ct(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, V = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, le = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), dt = rr(1), J = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), F = q.createTreeWalker(q, 129);
function ue(r, t) {
  if (!Ct(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = et;
  for (let v = 0; v < e; v++) {
    const f = r[v];
    let $, _, m = -1, C = 0;
    for (; C < f.length && (u.lastIndex = C, _ = u.exec(f), _ !== null); ) C = u.lastIndex, u === et ? _[1] === "!--" ? u = Qt : _[1] !== void 0 ? u = Kt : _[2] !== void 0 ? (le.test(_[2]) && (o = RegExp("</" + _[2], "g")), u = V) : _[3] !== void 0 && (u = V) : u === V ? _[0] === ">" ? (u = o ?? et, m = -1) : _[1] === void 0 ? m = -2 : (m = u.lastIndex - _[2].length, $ = _[1], u = _[3] === void 0 ? V : _[3] === '"' ? ee : te) : u === ee || u === te ? u = V : u === Qt || u === Kt ? u = et : (u = V, o = void 0);
    const R = u === V && r[v + 1].startsWith("/>") ? " " : "";
    l += u === et ? f + tr : m >= 0 ? (n.push($), f.slice(0, m) + ae + f.slice(m) + L + R) : f + L + (m === -2 ? v : R);
  }
  return [ue(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class st {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const v = t.length - 1, f = this.parts, [$, _] = nr(t, e);
    if (this.el = st.createElement($, n), F.currentNode = this.el.content, e === 2 || e === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (o = F.nextNode()) !== null && f.length < v; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const m of o.getAttributeNames()) if (m.endsWith(ae)) {
          const C = _[u++], R = o.getAttribute(m).split(L), N = /([.?@])?(.*)/.exec(C);
          f.push({ type: 1, index: l, name: N[2], strings: R, ctor: N[1] === "." ? or : N[1] === "?" ? ar : N[1] === "@" ? sr : pt }), o.removeAttribute(m);
        } else m.startsWith(L) && (f.push({ type: 6, index: l }), o.removeAttribute(m));
        if (le.test(o.tagName)) {
          const m = o.textContent.split(L), C = m.length - 1;
          if (C > 0) {
            o.textContent = ht ? ht.emptyScript : "";
            for (let R = 0; R < C; R++) o.append(m[R], ot()), F.nextNode(), f.push({ type: 2, index: ++l });
            o.append(m[C], ot());
          }
        }
      } else if (o.nodeType === 8) if (o.data === se) f.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = o.data.indexOf(L, m + 1)) !== -1; ) f.push({ type: 7, index: l }), m += L.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = q.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Q(r, t, e = r, n) {
  var u, v;
  if (t === J) return t;
  let o = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = at(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((v = o == null ? void 0 : o._$AO) == null || v.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = o : e._$Cl = o), o !== void 0 && (t = Q(r, o._$AS(r, t.values), o, n)), t;
}
class ir {
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    F.currentNode = o;
    let l = F.nextNode(), u = 0, v = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let $;
        f.type === 2 ? $ = new lt(l, l.nextSibling, this, t) : f.type === 1 ? $ = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && ($ = new lr(l, this, t)), this._$AV.push($), f = n[++v];
      }
      u !== (f == null ? void 0 : f.index) && (l = F.nextNode(), u++);
    }
    return F.currentNode = q, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class lt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = Q(this, t, e), at(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && at(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = st.createElement(ue(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new ir(o, this), v = u.u(this.options);
      u.p(e), this.T(v), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new st(t)), e;
  }
  k(t) {
    Ct(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const l of t) o === e.length ? e.push(n = new lt(this.O(ot()), this.O(ot()), this, this.options)) : n = e[o], n._$AI(l), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Xt(t).nextSibling;
      Xt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class pt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, l) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = k;
  }
  _$AI(t, e = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Q(this, t, e, 0), u = !at(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const v = t;
      let f, $;
      for (t = l[0], f = 0; f < l.length - 1; f++) $ = Q(this, v[n + f], e, f), $ === J && ($ = this._$AH[f]), u || (u = !at($) || $ !== this._$AH[f]), $ === k ? t = k : t !== k && (t += ($ ?? "") + l[f + 1]), this._$AH[f] = $;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class or extends pt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class ar extends pt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class sr extends pt {
  constructor(t, e, n, o, l) {
    super(t, e, n, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Q(this, t, e, 0) ?? k) === J) return;
    const n = this._$AH, o = t === k && n !== k || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== k && (n === k || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Q(this, t);
  }
}
const $t = nt.litHtmlPolyfillSupport;
$t == null || $t(st, lt), (nt.litHtmlVersions ?? (nt.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new lt(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class it extends X {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
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
    return J;
  }
}
var ie;
it._$litElement$ = !0, it.finalized = !0, (ie = Y.litElementHydrateSupport) == null || ie.call(Y, { LitElement: it });
const wt = Y.litElementPolyfillSupport;
wt == null || wt({ LitElement: it });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ft, reflect: !1, hasChanged: At }, cr = (r = dr, t, e) => {
  const { kind: n, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(v) {
      const f = t.get.call(this);
      t.set.call(this, v), this.requestUpdate(u, f, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(v) {
      const f = this[u];
      t.call(this, v), this.requestUpdate(u, f, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function B(r) {
  return (t, e) => typeof e == "object" ? cr(r, t, e) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, t, e);
}
var fr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, T = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(t, e, o) : u(o)) || o);
  return n && o && fr(t, e, o), o;
};
const ne = {
  kind: "button",
  templateHtml: [
    "<div style='display:inline-block;'>",
    "<button type='button' style='border:0;border-radius:8px;padding:12px 24px;background:#6366f1;color:#ffffff;font-weight:600;font-size:14px;cursor:pointer;'>{{display:label}}</button>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Action", "Interactive"]
};
function pr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let S = class extends it {
  constructor() {
    super(...arguments), this.label = "Button", this.variant = "primary", this.size = "medium", this.disabled = !1, this.loading = !1, this.fullWidth = !1, this.tag = "R25", this.accentColor = "";
  }
  static getStudioTemplate(r) {
    var C, R, N, U, G, K;
    if (!r) return ne;
    const t = pr(r.studio.display.label || "Button"), e = (((C = r.props) == null ? void 0 : C.variant) ?? ((R = r.studio.props) == null ? void 0 : R.variant)) || "primary", n = !!(((N = r.props) == null ? void 0 : N.fullWidth) ?? ((U = r.studio.props) == null ? void 0 : U.fullWidth)), o = (((G = r.props) == null ? void 0 : G.size) ?? ((K = r.studio.props) == null ? void 0 : K.size)) || "medium";
    let l = "10px 20px", u = "14px";
    o === "small" ? (l = "6px 12px", u = "12px") : o === "large" && (l = "14px 28px", u = "16px");
    let v = `padding: ${l}; font-size: ${u}; font-family: inherit; font-weight: 600; cursor: pointer; outline: none; border-radius: 8px; transition: all 0.2s ease; border: none;`, f = "var(--uiv-primary-color, #6366f1)", $ = "#ffffff", _ = "none", m = "0 2px 4px rgba(0,0,0,0.1)";
    return e === "secondary" ? (f = "var(--uiv-surface-color, #f3f4f6)", $ = "var(--uiv-text-color, #1f2937)", _ = "1px solid rgba(0, 0, 0, 0.12)", m = "none") : e === "ghost" ? (f = "transparent", $ = "var(--uiv-primary-color, #6366f1)", _ = "1px dashed var(--uiv-primary-color, #6366f1)", m = "none") : e === "glass" ? (f = "rgba(255, 255, 255, 0.15)", $ = "#ffffff", _ = "1px solid rgba(255, 255, 255, 0.25)", m = "0 4px 6px rgba(0,0,0,0.05)", v += " backdrop-filter: blur(8px);") : e === "glow" ? (f = "linear-gradient(135deg, var(--uiv-primary-color, #6366f1), var(--uiv-secondary-color, #a855f7))", $ = "#ffffff", m = "0 0 15px rgba(99, 102, 241, 0.5)") : e === "retro" ? (f = "var(--uiv-primary-color, #f8f005)", $ = "#000000", _ = "3px solid #000000", m = "5px 5px 0px #000000", v += " border-radius: 0px;") : e === "cyber" ? (f = "linear-gradient(45deg, transparent 5%, var(--uiv-primary-color, #6366f1) 5%)", $ = "#ffffff", v += " text-transform: uppercase; letter-spacing: 2px;") : e === "neon" && (f = "transparent", $ = "var(--uiv-primary-color, #00e6f6)", _ = "2px solid var(--uiv-primary-color, #00e6f6)", m = "0 0 10px var(--uiv-primary-color, #00e6f6)"), _ !== "none" && (v += ` border: ${_};`), v += ` background: ${f}; color: ${$}; box-shadow: ${m};`, {
      ...ne,
      templateHtml: [
        `<div style='display:${n ? "block" : "inline-block"}; ${n ? "width:100%;" : ""}'>`,
        `<button type='button' style='width:100%; ${v}'>${t}</button>`,
        "</div>"
      ].join("")
    };
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "primary";
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = r || "medium";
  }
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(r) {
    this.disabled = !!r;
  }
  get loadingConfig() {
    return this.loading;
  }
  set loadingConfig(r) {
    this.loading = !!r;
  }
  get fullWidthConfig() {
    return this.fullWidth;
  }
  set fullWidthConfig(r) {
    this.fullWidth = !!r;
  }
  get tagConfig() {
    return this.tag;
  }
  set tagConfig(r) {
    this.tag = r;
  }
  get accentColorConfig() {
    return this.accentColor;
  }
  set accentColorConfig(r) {
    this.accentColor = r;
  }
  handleClick(r) {
    if (this.disabled || this.loading) {
      r.preventDefault(), r.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("click", { bubbles: !0, composed: !0 }));
  }
  render() {
    const r = [
      `variant-${this.variant}`,
      `size-${this.size}`
    ].join(" "), t = this.accentColor ? `style="--btn-p: ${this.accentColor}; --btn-glow: 0 0 15px ${this.accentColor};"` : "";
    return dt`
      <button
        class=${r}
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleClick}
        ${dt`${t}`}
      >
        ${this.loading ? dt`<span class="spinner"></span>` : ""}
        <span>${this.label}</span>
        ${this.variant === "cyber" && this.tag ? dt`<span class="tag">${this.tag}</span>` : ""}
      </button>
    `;
  }
};
S.styles = Ve`
    :host {
      display: inline-block;
      --btn-p: var(--uiv-primary-color, #6366f1);
      --btn-s: var(--uiv-secondary-color, #a855f7);
      --btn-bg: var(--uiv-surface-color, #f3f4f6);
      --btn-text: var(--uiv-text-color, #1f2937);
      --btn-glow: var(--uiv-border-glow, 0 0 15px rgba(99, 102, 241, 0.4));
    }

    :host([full-width]) {
      display: block;
      width: 100%;
    }

    button {
      width: 100%;
      border: none;
      outline: none;
      font: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
      position: relative;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none !important;
      box-shadow: none !important;
    }

    /* Size Variations */
    .size-small {
      padding: 6px 14px;
      font-size: 0.75rem;
      border-radius: 6px;
    }
    .size-medium {
      padding: 10px 20px;
      font-size: 0.875rem;
      border-radius: 8px;
    }
    .size-large {
      padding: 14px 28px;
      font-size: 1rem;
      border-radius: 10px;
    }

    /* Variants styling */

    /* 1. Primary */
    .variant-primary {
      background: var(--btn-p);
      color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    }
    .variant-primary:hover:not(:disabled) {
      filter: brightness(1.1);
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
    }

    /* 2. Secondary */
    .variant-secondary {
      background: var(--btn-bg);
      color: var(--btn-text);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .variant-secondary:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.05);
      transform: translateY(-1px);
    }

    /* 3. Ghost */
    .variant-ghost {
      background: transparent;
      color: var(--btn-p);
      border: 1.5px dashed var(--btn-p);
    }
    .variant-ghost:hover:not(:disabled) {
      background: rgba(99, 102, 241, 0.05);
    }

    /* 4. Glass */
    .variant-glass {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
    }
    .variant-glass:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }

    /* 5. Glow */
    .variant-glow {
      background: linear-gradient(135deg, var(--btn-p), var(--btn-s));
      color: #ffffff;
      box-shadow: var(--btn-glow);
    }
    .variant-glow:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.7);
    }

    /* 6. Retro */
    .variant-retro {
      background: var(--btn-p);
      border: 3px solid #000000;
      color: #000000;
      font-weight: 700;
      box-shadow: 5px 5px 0px #000000;
      border-radius: 0px;
    }
    .variant-retro:hover:not(:disabled) {
      transform: translate(-2px, -2px);
      box-shadow: 7px 7px 0px #000000;
    }
    .variant-retro:active:not(:disabled) {
      transform: translate(3px, 3px);
      box-shadow: 2px 2px 0px #000000;
    }

    /* 7. Cyber / Glitch */
    .variant-cyber {
      background: linear-gradient(45deg, transparent 5%, var(--btn-p) 5%);
      color: #ffffff;
      letter-spacing: 2px;
      text-transform: uppercase;
      clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    }
    .variant-cyber:hover:not(:disabled) {
      filter: brightness(1.15);
      animation: glitch-anim 0.4s steps(2, end) infinite;
    }

    .tag {
      position: absolute;
      right: -6px;
      bottom: -6px;
      background: #f8f005;
      color: #000000;
      padding: 0 4px;
      font-size: 0.65rem;
      font-weight: bold;
    }

    /* 8. Neon */
    .variant-neon {
      background: transparent;
      color: var(--btn-p);
      border: 2px solid var(--btn-p);
      box-shadow: 0 0 8px var(--btn-p), inset 0 0 4px var(--btn-p);
    }
    .variant-neon:hover:not(:disabled) {
      background: var(--btn-p);
      color: #000000;
      box-shadow: 0 0 20px var(--btn-p), inset 0 0 8px var(--btn-p);
    }

    /* Loading Spinner */
    .spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.35);
      border-radius: 50%;
      border-top-color: currentColor;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes glitch-anim {
      0% { clip-path: inset(40% 0 61% 0); }
      20% { clip-path: inset(92% 0 1% 0); }
      40% { clip-path: inset(25% 0 58% 0); }
      60% { clip-path: inset(80% 0 5% 0); }
      80% { clip-path: inset(11% 0 85% 0); }
      100% { clip-path: inset(50% 0 30% 0); }
    }
  `;
T([
  B({ type: String })
], S.prototype, "label", 2);
T([
  B({ type: String })
], S.prototype, "variant", 2);
T([
  B({ type: String })
], S.prototype, "size", 2);
T([
  B({ type: Boolean })
], S.prototype, "disabled", 2);
T([
  B({ type: Boolean })
], S.prototype, "loading", 2);
T([
  B({ type: Boolean, attribute: "full-width" })
], S.prototype, "fullWidth", 2);
T([
  B({ type: String })
], S.prototype, "tag", 2);
T([
  B({ type: String, attribute: "accent-color" })
], S.prototype, "accentColor", 2);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], S.prototype, "labelConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" },
      { label: "Glassmorphism", value: "glass" },
      { label: "Glow Mode", value: "glow" },
      { label: "Retro Blocky", value: "retro" },
      { label: "Cyberpunk", value: "cyber" },
      { label: "Neon Border", value: "neon" }
    ]
  })
], S.prototype, "variantConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" }
    ]
  })
], S.prototype, "sizeConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], S.prototype, "disabledConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.CHECKBOX,
    displayLabel: "Show Spinner / Loading",
    fieldMappings: "loading"
  })
], S.prototype, "loadingConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.CHECKBOX,
    displayLabel: "Full Width",
    fieldMappings: "fullWidth"
  })
], S.prototype, "fullWidthConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Cyber Tag Label",
    fieldMappings: "tag"
  })
], S.prototype, "tagConfig", 1);
T([
  z({
    attributeType: I.PROPERTY,
    uiComponentType: j.COLOR_PICKER,
    displayLabel: "Custom Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], S.prototype, "accentColorConfig", 1);
T([
  z({
    attributeType: I.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click"
  })
], S.prototype, "handleClick", 1);
S = T([
  ze({
    name: "zero-button",
    version: "1.0.0",
    title: "Button",
    elementSelector: "zero-button",
    group: "Actions",
    iconName: "button-icon.png"
  }),
  Le()
], S);
export {
  S as ZeroButton,
  ne as studioTemplate
};
