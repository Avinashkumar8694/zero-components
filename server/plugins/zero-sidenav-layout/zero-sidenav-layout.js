var $r = Object.defineProperty;
var Tr = (t, e, r) => e in t ? $r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Zt = (t, e, r) => Tr(t, typeof e != "symbol" ? e + "" : e, r);
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var er;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof Qt == "object" ? Qt : typeof self == "object" ? self : typeof this == "object" ? this : c(), i = o(t);
    typeof r.Reflect < "u" && (i = o(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function o(p, C) {
      return function(k, P) {
        Object.defineProperty(p, k, { configurable: !0, writable: !0, value: P }), C && C(k, P);
      };
    }
    function s() {
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
    function c() {
      return s() || l();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", s = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", c = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, C = !c && !p, k = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: c ? function() {
        return Je(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Je({ __proto__: null });
      } : function() {
        return Je({});
      },
      has: C ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: C ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, P = Object.getPrototypeOf(Function), N = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : mt(), B = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xt(), Y = typeof WeakMap == "function" ? WeakMap : wt(), K = o ? Symbol.for("@reflect-metadata:registry") : void 0, ee = gt(), Z = vt(ee);
    function ie(n, a, d, h) {
      if (S(d)) {
        if (!Se(n))
          throw new TypeError();
        if (!Fe(a))
          throw new TypeError();
        return te(n, a);
      } else {
        if (!Se(n))
          throw new TypeError();
        if (!H(a))
          throw new TypeError();
        if (!H(h) && !S(h) && !re(h))
          throw new TypeError();
        return re(h) && (h = void 0), d = q(d), W(n, a, d, h);
      }
    }
    e("decorate", ie);
    function A(n, a) {
      function d(h, _) {
        if (!H(h))
          throw new TypeError();
        if (!S(_) && !ut(_))
          throw new TypeError();
        De(n, a, h, _);
      }
      return d;
    }
    e("metadata", A);
    function L(n, a, d, h) {
      if (!H(d))
        throw new TypeError();
      return S(h) || (h = q(h)), De(n, a, d, h);
    }
    e("defineMetadata", L);
    function Q(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return S(d) || (d = q(d)), V(n, a, d);
    }
    e("hasMetadata", Q);
    function X(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return S(d) || (d = q(d)), Ee(n, a, d);
    }
    e("hasOwnMetadata", X);
    function G(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return S(d) || (d = q(d)), ne(n, a, d);
    }
    e("getMetadata", G);
    function me(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return S(d) || (d = q(d)), ae(n, a, d);
    }
    e("getOwnMetadata", me);
    function xe(n, a) {
      if (!H(n))
        throw new TypeError();
      return S(a) || (a = q(a)), pe(n, a);
    }
    e("getMetadataKeys", xe);
    function Ue(n, a) {
      if (!H(n))
        throw new TypeError();
      return S(a) || (a = q(a)), ke(n, a);
    }
    e("getOwnMetadataKeys", Ue);
    function de(n, a, d) {
      if (!H(a))
        throw new TypeError();
      if (S(d) || (d = q(d)), !H(a))
        throw new TypeError();
      S(d) || (d = q(d));
      var h = ce(
        a,
        d,
        /*Create*/
        !1
      );
      return S(h) ? !1 : h.OrdinaryDeleteMetadata(n, a, d);
    }
    e("deleteMetadata", de);
    function te(n, a) {
      for (var d = n.length - 1; d >= 0; --d) {
        var h = n[d], _ = h(a);
        if (!S(_) && !re(_)) {
          if (!Fe(_))
            throw new TypeError();
          a = _;
        }
      }
      return a;
    }
    function W(n, a, d, h) {
      for (var _ = n.length - 1; _ >= 0; --_) {
        var U = n[_], j = U(a, d, h);
        if (!S(j) && !re(j)) {
          if (!H(j))
            throw new TypeError();
          h = j;
        }
      }
      return h;
    }
    function V(n, a, d) {
      var h = Ee(n, a, d);
      if (h)
        return !0;
      var _ = Pe(a);
      return re(_) ? !1 : V(n, _, d);
    }
    function Ee(n, a, d) {
      var h = ce(
        a,
        d,
        /*Create*/
        !1
      );
      return S(h) ? !1 : Ve(h.OrdinaryHasOwnMetadata(n, a, d));
    }
    function ne(n, a, d) {
      var h = Ee(n, a, d);
      if (h)
        return ae(n, a, d);
      var _ = Pe(a);
      if (!re(_))
        return ne(n, _, d);
    }
    function ae(n, a, d) {
      var h = ce(
        a,
        d,
        /*Create*/
        !1
      );
      if (!S(h))
        return h.OrdinaryGetOwnMetadata(n, a, d);
    }
    function De(n, a, d, h) {
      var _ = ce(
        d,
        h,
        /*Create*/
        !0
      );
      _.OrdinaryDefineOwnMetadata(n, a, d, h);
    }
    function pe(n, a) {
      var d = ke(n, a), h = Pe(n);
      if (h === null)
        return d;
      var _ = pe(h, a);
      if (_.length <= 0)
        return d;
      if (d.length <= 0)
        return _;
      for (var U = new B(), j = [], O = 0, u = d; O < u.length; O++) {
        var b = u[O], y = U.has(b);
        y || (U.add(b), j.push(b));
      }
      for (var m = 0, R = _; m < R.length; m++) {
        var b = R[m], y = U.has(b);
        y || (U.add(b), j.push(b));
      }
      return j;
    }
    function ke(n, a) {
      var d = ce(
        n,
        a,
        /*create*/
        !1
      );
      return d ? d.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function We(n) {
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
    function S(n) {
      return n === void 0;
    }
    function re(n) {
      return n === null;
    }
    function he(n) {
      return typeof n == "symbol";
    }
    function H(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function pt(n, a) {
      switch (We(n)) {
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
      var d = "string", h = Ye(n, s);
      if (h !== void 0) {
        var _ = h.call(n, d);
        if (H(_))
          throw new TypeError();
        return _;
      }
      return ht(n);
    }
    function ht(n, a) {
      var d, h;
      {
        var _ = n.toString;
        if (we(_)) {
          var h = _.call(n);
          if (!H(h))
            return h;
        }
        var d = n.valueOf;
        if (we(d)) {
          var h = d.call(n);
          if (!H(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Ve(n) {
      return !!n;
    }
    function ct(n) {
      return "" + n;
    }
    function q(n) {
      var a = pt(n);
      return he(a) ? a : ct(a);
    }
    function Se(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function we(n) {
      return typeof n == "function";
    }
    function Fe(n) {
      return typeof n == "function";
    }
    function ut(n) {
      switch (We(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function $e(n, a) {
      return n === a || n !== n && a !== a;
    }
    function Ye(n, a) {
      var d = n[a];
      if (d != null) {
        if (!we(d))
          throw new TypeError();
        return d;
      }
    }
    function ft(n) {
      var a = Ye(n, l);
      if (!we(a))
        throw new TypeError();
      var d = a.call(n);
      if (!H(d))
        throw new TypeError();
      return d;
    }
    function Xe(n) {
      return n.value;
    }
    function qe(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function Ge(n) {
      var a = n.return;
      a && a.call(n);
    }
    function Pe(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === P || a !== P)
        return a;
      var d = n.prototype, h = d && Object.getPrototypeOf(d);
      if (h == null || h === Object.prototype)
        return a;
      var _ = h.constructor;
      return typeof _ != "function" || _ === n ? a : _;
    }
    function bt() {
      var n;
      !S(K) && typeof r.Reflect < "u" && !(K in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (n = yt(r.Reflect));
      var a, d, h, _ = new Y(), U = {
        registerProvider: j,
        getProvider: u,
        setProvider: y
      };
      return U;
      function j(m) {
        if (!Object.isExtensible(U))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === m:
            break;
          case S(a):
            a = m;
            break;
          case a === m:
            break;
          case S(d):
            d = m;
            break;
          case d === m:
            break;
          default:
            h === void 0 && (h = new B()), h.add(m);
            break;
        }
      }
      function O(m, R) {
        if (!S(a)) {
          if (a.isProviderFor(m, R))
            return a;
          if (!S(d)) {
            if (d.isProviderFor(m, R))
              return a;
            if (!S(h))
              for (var M = ft(h); ; ) {
                var I = qe(M);
                if (!I)
                  return;
                var J = Xe(I);
                if (J.isProviderFor(m, R))
                  return Ge(M), J;
              }
          }
        }
        if (!S(n) && n.isProviderFor(m, R))
          return n;
      }
      function u(m, R) {
        var M = _.get(m), I;
        return S(M) || (I = M.get(R)), S(I) && (I = O(m, R), S(I) || (S(M) && (M = new N(), _.set(m, M)), M.set(R, I))), I;
      }
      function b(m) {
        if (S(m))
          throw new TypeError();
        return a === m || d === m || !S(h) && h.has(m);
      }
      function y(m, R, M) {
        if (!b(M))
          throw new Error("Metadata provider not registered.");
        var I = u(m, R);
        if (I !== M) {
          if (!S(I))
            return !1;
          var J = _.get(m);
          S(J) && (J = new N(), _.set(m, J)), J.set(R, M);
        }
        return !0;
      }
    }
    function gt() {
      var n;
      return !S(K) && H(r.Reflect) && Object.isExtensible(r.Reflect) && (n = r.Reflect[K]), S(n) && (n = bt()), !S(K) && H(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, K, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function vt(n) {
      var a = new Y(), d = {
        isProviderFor: function(b, y) {
          var m = a.get(b);
          return S(m) ? !1 : m.has(y);
        },
        OrdinaryDefineOwnMetadata: j,
        OrdinaryHasOwnMetadata: _,
        OrdinaryGetOwnMetadata: U,
        OrdinaryOwnMetadataKeys: O,
        OrdinaryDeleteMetadata: u
      };
      return ee.registerProvider(d), d;
      function h(b, y, m) {
        var R = a.get(b), M = !1;
        if (S(R)) {
          if (!m)
            return;
          R = new N(), a.set(b, R), M = !0;
        }
        var I = R.get(y);
        if (S(I)) {
          if (!m)
            return;
          if (I = new N(), R.set(y, I), !n.setProvider(b, y, d))
            throw R.delete(y), M && a.delete(b), new Error("Wrong provider for target.");
        }
        return I;
      }
      function _(b, y, m) {
        var R = h(
          y,
          m,
          /*Create*/
          !1
        );
        return S(R) ? !1 : Ve(R.has(b));
      }
      function U(b, y, m) {
        var R = h(
          y,
          m,
          /*Create*/
          !1
        );
        if (!S(R))
          return R.get(b);
      }
      function j(b, y, m, R) {
        var M = h(
          m,
          R,
          /*Create*/
          !0
        );
        M.set(b, y);
      }
      function O(b, y) {
        var m = [], R = h(
          b,
          y,
          /*Create*/
          !1
        );
        if (S(R))
          return m;
        for (var M = R.keys(), I = ft(M), J = 0; ; ) {
          var Ae = qe(I);
          if (!Ae)
            return m.length = J, m;
          var Ke = Xe(Ae);
          try {
            m[J] = Ke;
          } catch (Ze) {
            try {
              Ge(I);
            } finally {
              throw Ze;
            }
          }
          J++;
        }
      }
      function u(b, y, m) {
        var R = h(
          y,
          m,
          /*Create*/
          !1
        );
        if (S(R) || !R.delete(b))
          return !1;
        if (R.size === 0) {
          var M = a.get(y);
          S(M) || (M.delete(m), M.size === 0 && a.delete(M));
        }
        return !0;
      }
    }
    function yt(n) {
      var a = n.defineMetadata, d = n.hasOwnMetadata, h = n.getOwnMetadata, _ = n.getOwnMetadataKeys, U = n.deleteMetadata, j = new Y(), O = {
        isProviderFor: function(u, b) {
          var y = j.get(u);
          return !S(y) && y.has(b) ? !0 : _(u, b).length ? (S(y) && (y = new B(), j.set(u, y)), y.add(b), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: d,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: U
      };
      return O;
    }
    function ce(n, a, d) {
      var h = ee.getProvider(n, a);
      if (!S(h))
        return h;
      if (d) {
        if (ee.setProvider(n, a, Z))
          return Z;
        throw new Error("Illegal state.");
      }
    }
    function mt() {
      var n = {}, a = [], d = (
        /** @class */
        function() {
          function O(u, b, y) {
            this._index = 0, this._keys = u, this._values = b, this._selector = y;
          }
          return O.prototype["@@iterator"] = function() {
            return this;
          }, O.prototype[l] = function() {
            return this;
          }, O.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var b = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: b, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, O.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), u;
          }, O.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: u, done: !0 };
          }, O;
        }()
      ), h = (
        /** @class */
        function() {
          function O() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(O.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), O.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, O.prototype.get = function(u) {
            var b = this._find(
              u,
              /*insert*/
              !1
            );
            return b >= 0 ? this._values[b] : void 0;
          }, O.prototype.set = function(u, b) {
            var y = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[y] = b, this;
          }, O.prototype.delete = function(u) {
            var b = this._find(
              u,
              /*insert*/
              !1
            );
            if (b >= 0) {
              for (var y = this._keys.length, m = b + 1; m < y; m++)
                this._keys[m - 1] = this._keys[m], this._values[m - 1] = this._values[m];
              return this._keys.length--, this._values.length--, $e(u, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, O.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, O.prototype.keys = function() {
            return new d(this._keys, this._values, _);
          }, O.prototype.values = function() {
            return new d(this._keys, this._values, U);
          }, O.prototype.entries = function() {
            return new d(this._keys, this._values, j);
          }, O.prototype["@@iterator"] = function() {
            return this.entries();
          }, O.prototype[l] = function() {
            return this.entries();
          }, O.prototype._find = function(u, b) {
            if (!$e(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var y = 0; y < this._keys.length; y++)
                if ($e(this._keys[y], u)) {
                  this._cacheIndex = y;
                  break;
                }
            }
            return this._cacheIndex < 0 && b && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, O;
        }()
      );
      return h;
      function _(O, u) {
        return O;
      }
      function U(O, u) {
        return u;
      }
      function j(O, u) {
        return [O, u];
      }
    }
    function xt() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new N();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(d) {
            return this._map.has(d);
          }, a.prototype.add = function(d) {
            return this._map.set(d, d), this;
          }, a.prototype.delete = function(d) {
            return this._map.delete(d);
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
          }, a.prototype[l] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function wt() {
      var n = 16, a = k.create(), d = h();
      return (
        /** @class */
        function() {
          function u() {
            this._key = h();
          }
          return u.prototype.has = function(b) {
            var y = _(
              b,
              /*create*/
              !1
            );
            return y !== void 0 ? k.has(y, this._key) : !1;
          }, u.prototype.get = function(b) {
            var y = _(
              b,
              /*create*/
              !1
            );
            return y !== void 0 ? k.get(y, this._key) : void 0;
          }, u.prototype.set = function(b, y) {
            var m = _(
              b,
              /*create*/
              !0
            );
            return m[this._key] = y, this;
          }, u.prototype.delete = function(b) {
            var y = _(
              b,
              /*create*/
              !1
            );
            return y !== void 0 ? delete y[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = h();
          }, u;
        }()
      );
      function h() {
        var u;
        do
          u = "@@WeakMap@@" + O();
        while (k.has(a, u));
        return a[u] = !0, u;
      }
      function _(u, b) {
        if (!i.call(u, d)) {
          if (!b)
            return;
          Object.defineProperty(u, d, { value: k.create() });
        }
        return u[d];
      }
      function U(u, b) {
        for (var y = 0; y < b; ++y)
          u[y] = Math.random() * 255 | 0;
        return u;
      }
      function j(u) {
        if (typeof Uint8Array == "function") {
          var b = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(b) : typeof msCrypto < "u" ? msCrypto.getRandomValues(b) : U(b, u), b;
        }
        return U(new Array(u), u);
      }
      function O() {
        var u = j(n);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var b = "", y = 0; y < n; ++y) {
          var m = u[y];
          (y === 4 || y === 6 || y === 8) && (b += "-"), m < 16 && (b += "0"), b += m.toString(16).toLowerCase();
        }
        return b;
      }
    }
    function Je(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(er || (er = {}));
function Cr(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function _r(t) {
  return function(e) {
    if (Cr(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName,
        layoutKind: t.layoutKind,
        environment: t.environment
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
            } catch (s) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, s);
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
function Er(t) {
  return _r(t);
}
function kr(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        Zt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(s) {
        try {
          super.update(s);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var C;
        const s = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), c = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (s && c) {
          const k = new CSSStyleSheet(), P = (C = s.sheet) == null ? void 0 : C.cssRules;
          P && (Array.from(P).forEach((N) => k.insertRule(N.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, k]);
        } else if (s) {
          const k = s.cloneNode(!0);
          p.appendChild(k);
        }
        l.forEach((k) => {
          const P = k.cloneNode(!0);
          p.appendChild(P);
        });
      }
    }
    return r;
  };
}
function Sr(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Pr(t) {
  return function(e, r) {
    try {
      Sr(t);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof r == "string") {
        try {
          o = typeof e[r] != "function";
        } catch {
          o = !0;
        }
        o && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function v(t) {
  return Pr(t);
}
var E;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(E || (E = {}));
var f;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(f || (f = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, Pt = rt.ShadowRoot && (rt.ShadyCSS === void 0 || rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), tr = /* @__PURE__ */ new WeakMap();
let gr = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Pt && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = tr.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && tr.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ar = (t) => new gr(typeof t == "string" ? t : t + "", void 0, At), vr = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, o, s) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[s + 1], t[0]);
  return new gr(r, t, At);
}, Or = (t, e) => {
  if (Pt) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), o = rt.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = r.cssText, t.appendChild(i);
  }
}, rr = Pt ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Ar(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Rr, defineProperty: Lr, getOwnPropertyDescriptor: Mr, getOwnPropertyNames: zr, getOwnPropertySymbols: Nr, getPrototypeOf: Br } = Object, le = globalThis, ir = le.trustedTypes, Ir = ir ? ir.emptyScript : "", Ct = le.reactiveElementPolyfillSupport, Me = (t, e) => t, it = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Ir : null;
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
} }, Ot = (t, e) => !Rr(t, e), or = { attribute: !0, type: String, converter: it, reflect: !1, useDefault: !1, hasChanged: Ot };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), le.litPropertyMetadata ?? (le.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Te = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = or) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, r);
      o !== void 0 && Lr(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: o, set: s } = Mr(this.prototype, e) ?? { get() {
      return this[r];
    }, set(l) {
      this[r] = l;
    } };
    return { get: o, set(l) {
      const c = o == null ? void 0 : o.call(this);
      s == null || s.call(this, l), this.requestUpdate(e, c, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? or;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Me("elementProperties"))) return;
    const e = Br(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Me("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Me("properties"))) {
      const r = this.properties, i = [...zr(r), ...Nr(r)];
      for (const o of i) this.createProperty(o, r[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, o] of r) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const o = this._$Eu(r, i);
      o !== void 0 && this._$Eh.set(o, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) r.unshift(rr(o));
    } else e !== void 0 && r.push(rr(e));
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
    return Or(e, this.constructor.elementStyles), e;
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
    var s;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((s = i.converter) == null ? void 0 : s.toAttribute) !== void 0 ? i.converter : it).toAttribute(r, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var s, l;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const c = i.getPropertyOptions(o), p = typeof c.converter == "function" ? { fromAttribute: c.converter } : ((s = c.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? c.converter : it;
      this._$Em = o;
      const C = p.fromAttribute(r, c.type);
      this[o] = C ?? ((l = this._$Ej) == null ? void 0 : l.get(o)) ?? C, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, o = !1, s) {
    var l;
    if (e !== void 0) {
      const c = this.constructor;
      if (o === !1 && (s = this[e]), i ?? (i = c.getPropertyOptions(e)), !((i.hasChanged ?? Ot)(s, r) || i.useDefault && i.reflect && s === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(c._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: o, wrapped: s }, l) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? r ?? this[e]), s !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [s, l] of this._$Ep) this[s] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [s, l] of o) {
        const { wrapped: c } = l, p = this[s];
        c !== !0 || this._$AL.has(s) || p === void 0 || this.C(s, void 0, l, p);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((o) => {
        var s;
        return (s = o.hostUpdate) == null ? void 0 : s.call(o);
      }), this.update(r)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
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
Te.elementStyles = [], Te.shadowRootOptions = { mode: "open" }, Te[Me("elementProperties")] = /* @__PURE__ */ new Map(), Te[Me("finalized")] = /* @__PURE__ */ new Map(), Ct == null || Ct({ ReactiveElement: Te }), (le.reactiveElementVersions ?? (le.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ze = globalThis, nr = (t) => t, ot = ze.trustedTypes, ar = ot ? ot.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, yr = "$lit$", se = `lit$${Math.random().toFixed(9).slice(2)}$`, mr = "?" + se, Hr = `<${mr}>`, ve = document, Be = () => ve.createComment(""), Ie = (t) => t === null || typeof t != "object" && typeof t != "function", Rt = Array.isArray, jr = (t) => Rt(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, Re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, sr = /-->/g, lr = />/g, ue = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), dr = /'/g, pr = /"/g, xr = /^(?:script|style|textarea|title)$/i, Ur = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), g = Ur(1), ye = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), hr = /* @__PURE__ */ new WeakMap(), fe = ve.createTreeWalker(ve, 129);
function wr(t, e) {
  if (!Rt(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ar !== void 0 ? ar.createHTML(e) : e;
}
const Dr = (t, e) => {
  const r = t.length - 1, i = [];
  let o, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Re;
  for (let c = 0; c < r; c++) {
    const p = t[c];
    let C, k, P = -1, N = 0;
    for (; N < p.length && (l.lastIndex = N, k = l.exec(p), k !== null); ) N = l.lastIndex, l === Re ? k[1] === "!--" ? l = sr : k[1] !== void 0 ? l = lr : k[2] !== void 0 ? (xr.test(k[2]) && (o = RegExp("</" + k[2], "g")), l = ue) : k[3] !== void 0 && (l = ue) : l === ue ? k[0] === ">" ? (l = o ?? Re, P = -1) : k[1] === void 0 ? P = -2 : (P = l.lastIndex - k[2].length, C = k[1], l = k[3] === void 0 ? ue : k[3] === '"' ? pr : dr) : l === pr || l === dr ? l = ue : l === sr || l === lr ? l = Re : (l = ue, o = void 0);
    const B = l === ue && t[c + 1].startsWith("/>") ? " " : "";
    s += l === Re ? p + Hr : P >= 0 ? (i.push(C), p.slice(0, P) + yr + p.slice(P) + se + B) : p + se + (P === -2 ? c : B);
  }
  return [wr(t, s + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class He {
  constructor({ strings: e, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let s = 0, l = 0;
    const c = e.length - 1, p = this.parts, [C, k] = Dr(e, r);
    if (this.el = He.createElement(C, i), fe.currentNode = this.el.content, r === 2 || r === 3) {
      const P = this.el.content.firstChild;
      P.replaceWith(...P.childNodes);
    }
    for (; (o = fe.nextNode()) !== null && p.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const P of o.getAttributeNames()) if (P.endsWith(yr)) {
          const N = k[l++], B = o.getAttribute(P).split(se), Y = /([.?@])?(.*)/.exec(N);
          p.push({ type: 1, index: s, name: Y[2], strings: B, ctor: Y[1] === "." ? Vr : Y[1] === "?" ? Fr : Y[1] === "@" ? Yr : dt }), o.removeAttribute(P);
        } else P.startsWith(se) && (p.push({ type: 6, index: s }), o.removeAttribute(P));
        if (xr.test(o.tagName)) {
          const P = o.textContent.split(se), N = P.length - 1;
          if (N > 0) {
            o.textContent = ot ? ot.emptyScript : "";
            for (let B = 0; B < N; B++) o.append(P[B], Be()), fe.nextNode(), p.push({ type: 2, index: ++s });
            o.append(P[N], Be());
          }
        }
      } else if (o.nodeType === 8) if (o.data === mr) p.push({ type: 2, index: s });
      else {
        let P = -1;
        for (; (P = o.data.indexOf(se, P + 1)) !== -1; ) p.push({ type: 7, index: s }), P += se.length - 1;
      }
      s++;
    }
  }
  static createElement(e, r) {
    const i = ve.createElement("template");
    return i.innerHTML = e, i;
  }
}
function _e(t, e, r = t, i) {
  var l, c;
  if (e === ye) return e;
  let o = i !== void 0 ? (l = r._$Co) == null ? void 0 : l[i] : r._$Cl;
  const s = Ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== s && ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1), s === void 0 ? o = void 0 : (o = new s(t), o._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = o : r._$Cl = o), o !== void 0 && (e = _e(t, o._$AS(t, e.values), o, i)), e;
}
class Wr {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ve).importNode(r, !0);
    fe.currentNode = o;
    let s = fe.nextNode(), l = 0, c = 0, p = i[0];
    for (; p !== void 0; ) {
      if (l === p.index) {
        let C;
        p.type === 2 ? C = new je(s, s.nextSibling, this, e) : p.type === 1 ? C = new p.ctor(s, p.name, p.strings, this, e) : p.type === 6 && (C = new Xr(s, this, e)), this._$AV.push(C), p = i[++c];
      }
      l !== (p == null ? void 0 : p.index) && (s = fe.nextNode(), l++);
    }
    return fe.currentNode = ve, o;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class je {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = _e(this, e, r), Ie(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== ye && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : jr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && Ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ve.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var s;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = He.createElement(wr(i.h, i.h[0]), this.options)), i);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === o) this._$AH.p(r);
    else {
      const l = new Wr(o, this), c = l.u(this.options);
      l.p(r), this.T(c), this._$AH = l;
    }
  }
  _$AC(e) {
    let r = hr.get(e.strings);
    return r === void 0 && hr.set(e.strings, r = new He(e)), r;
  }
  k(e) {
    Rt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const s of e) o === r.length ? r.push(i = new je(this.O(Be()), this.O(Be()), this, this.options)) : i = r[o], i._$AI(s), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const o = nr(e).nextSibling;
      nr(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, o, s) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = T;
  }
  _$AI(e, r = this, i, o) {
    const s = this.strings;
    let l = !1;
    if (s === void 0) e = _e(this, e, r, 0), l = !Ie(e) || e !== this._$AH && e !== ye, l && (this._$AH = e);
    else {
      const c = e;
      let p, C;
      for (e = s[0], p = 0; p < s.length - 1; p++) C = _e(this, c[i + p], r, p), C === ye && (C = this._$AH[p]), l || (l = !Ie(C) || C !== this._$AH[p]), C === T ? e = T : e !== T && (e += (C ?? "") + s[p + 1]), this._$AH[p] = C;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Vr extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class Fr extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class Yr extends dt {
  constructor(e, r, i, o, s) {
    super(e, r, i, o, s), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = _e(this, e, r, 0) ?? T) === ye) return;
    const i = this._$AH, o = e === T && i !== T || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== T && (i === T || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Xr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    _e(this, e);
  }
}
const Et = ze.litHtmlPolyfillSupport;
Et == null || Et(He, je), (ze.litHtmlVersions ?? (ze.litHtmlVersions = [])).push("3.3.3");
const qr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const s = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new je(e.insertBefore(Be(), s), s, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge = globalThis;
let Ne = class extends Te {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = qr(r, this.renderRoot, this.renderOptions);
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
    return ye;
  }
};
var br;
Ne._$litElement$ = !0, Ne.finalized = !0, (br = ge.litElementHydrateSupport) == null || br.call(ge, { LitElement: Ne });
const kt = ge.litElementPolyfillSupport;
kt == null || kt({ LitElement: Ne });
(ge.litElementVersions ?? (ge.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jr = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: Ot }, Kr = (t = Jr, e, r) => {
  const { kind: i, metadata: o } = r;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), i === "accessor") {
    const { name: l } = r;
    return { set(c) {
      const p = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(l, p, t, !0, c);
    }, init(c) {
      return c !== void 0 && this.C(l, void 0, t, c), c;
    } };
  }
  if (i === "setter") {
    const { name: l } = r;
    return function(c) {
      const p = this[l];
      e.call(this, c), this.requestUpdate(l, p, t, !0, c);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function w(t) {
  return (e, r) => typeof r == "object" ? Kr(t, e, r) : ((i, o, s) => {
    const l = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, i), l ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Zr(t) {
  return w({ ...t, state: !0, attribute: !1 });
}
var Qr = Object.defineProperty, ei = Object.getOwnPropertyDescriptor, D = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? ei(e, r) : e, s = t.length - 1, l; s >= 0; s--)
    (l = t[s]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && Qr(e, r, o), o;
};
const lt = class lt extends Ne {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
  }
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return g``;
    const e = this.overridePrefix, r = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, i = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let o = "";
    return Object.entries(r).forEach(([s, l]) => {
      const c = this.responsiveProps[s];
      if (!c) return;
      let p = "";
      Object.entries(c).forEach(([C, k]) => {
        const P = i[C];
        P && (p += `--${e}-${P}-override: ${k};
`);
      }), p && (o += `${l} {
  :host {
    ${p}  }
}
`);
    }), o ? g`<style>${o}</style>` : g``;
  }
  // --- Visual Logic ---
  get overridePrefix() {
    return "zero-panel";
  }
  computeBaseStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-width: var(--${e}-width-override, ${this.width})`,
      `--zero-height: var(--${e}-height-override, ${this.height})`,
      `--zero-margin: var(--${e}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${e}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${e}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? "auto" : "none"}`,
      `display: ${this.visible ? "block" : "none"}`
    ].join(";");
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${e}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${e}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${e}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${e}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${e}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${e}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${e}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${e}-direction-override, ${this.direction})`
    ].join(";");
  }
  computeColumnBasis() {
    const e = this.overridePrefix, r = `var(--${e}-gap-override, ${this.gap || "0px"})`, i = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${i}) - ((${r} * (${i} - 1)) / ${i}))`;
  }
  get isStudio() {
    if (typeof window > "u") return !1;
    const e = window.location.search || "";
    if (e.includes("mode=preview") || e.includes("mode=live"))
      return !1;
    try {
      if (window.parent && window.parent.zeroThemeManager && !e.includes("mode=preview"))
        return !0;
    } catch {
    }
    return !!(window.zeroThemeManager && !e.includes("mode=preview"));
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!this.isStudio) return;
    const r = e.currentTarget.getBoundingClientRect(), i = (e.clientX - r.left) / r.width, o = (e.clientY - r.top) / r.height;
    this.direction === "row" ? i < 0.3 ? this.activeEdge = "left" : i > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : o < 0.3 ? this.activeEdge = "top" : o > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? g`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : g``;
  }
  renderHeader() {
    return g``;
  }
  willUpdate(e) {
    super.willUpdate(e), this.updateHostStyles();
  }
  updateHostStyles() {
    const r = this.computeBaseStyles().split(";").map((i) => i.trim()).filter(Boolean);
    for (const i of r) {
      const o = i.indexOf(":");
      if (o === -1) continue;
      const s = i.slice(0, o).trim(), l = i.slice(o + 1).trim();
      s.startsWith("--") ? this.style.setProperty(s, l) : this.style[s] = l;
    }
  }
};
lt.slots = [], lt.styles = vr`
    :host {
      display: block;
      box-sizing: border-box;
      width: var(--zero-width, 100%);
      height: var(--zero-height, auto);
      margin: var(--zero-margin, 0);
      opacity: var(--zero-opacity, 1);
      z-index: var(--zero-z-index, auto);
      pointer-events: var(--zero-pointer-events, auto);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    :host > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      flex: 1;
      min-height: 0;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      padding: var(--zero-p-padding, 0px);
      background: var(--zero-p-bg, transparent);
      border: var(--zero-p-border-width, 0px) solid var(--zero-p-border-color, transparent);
      border-radius: var(--zero-p-border-radius, 0px);
      box-shadow: var(--zero-p-shadow, none);
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      overflow: var(--zero-p-overflow, visible);
      flex-direction: var(--zero-p-direction, row);
    }

    .zero-internal-container[data-direction="column"] {
      flex-direction: column;
    }

    /* Header & Expansion */
    .zero-layout-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      background: rgba(0,0,0,0.02);
    }

    .zero-layout-header .label { flex: 1; font-weight: 600; font-size: 0.95rem; }
    .zero-layout-header .icon { font-size: 1.1rem; }
    .zero-layout-header .chevron { transition: transform 0.3s ease; font-size: 0.8rem; opacity: 0.5; }
    
    :host([expanded]) .zero-layout-header .chevron { transform: rotate(180deg); }

    .zero-layout-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    :host([expanded]) .zero-layout-body {
      grid-template-rows: 1fr;
    }

    .zero-layout-content,
    .tab-pane {
      min-height: 0;
      display: flex;
      flex-direction: var(--zero-p-direction, row);
      flex-wrap: wrap;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      width: 100%;
      box-sizing: border-box;
    }

    /* Spatial Drop Indicators (30/70 Rule) */
    .drop-indicator {
      position: absolute;
      pointer-events: none;
      background: var(--zs-primary, #0ea5e9);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
      display: block;
    }

    .drop-indicator.active { opacity: 0.3; }

    .drop-indicator.left { left: 0; top: 0; width: 30%; height: 100%; border-right: 3px solid var(--zs-primary); }
    .drop-indicator.right { right: 0; top: 0; width: 30%; height: 100%; border-left: 3px solid var(--zs-primary); }
    .drop-indicator.top { top: 0; left: 0; width: 100%; height: 30%; border-bottom: 3px solid var(--zs-primary); }
    .drop-indicator.bottom { bottom: 0; left: 0; width: 100%; height: 30%; border-top: 3px solid var(--zs-primary); }
  `;
let z = lt;
D([
  w({ type: Object, attribute: "responsive-props" })
], z.prototype, "responsiveProps", 2);
D([
  w({ type: String })
], z.prototype, "activeEdge", 2);
D([
  w({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], z.prototype, "visible", 2);
D([
  w({ type: Number, reflect: !0, attribute: "z-index" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], z.prototype, "zIndex", 2);
D([
  w({ type: Number, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], z.prototype, "opacity", 2);
D([
  w({ type: String, attribute: "custom-class" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], z.prototype, "customClass", 2);
D([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], z.prototype, "width", 2);
D([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], z.prototype, "height", 2);
D([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], z.prototype, "margin", 2);
D([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], z.prototype, "padding", 2);
D([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], z.prototype, "onClick", 1);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "direction", 2);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "justify", 2);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "align", 2);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "gap", 2);
D([
  w({ type: Number, reflect: !0, attribute: "items-per-row" })
], z.prototype, "itemsPerRow", 2);
D([
  w({ type: String, attribute: "background-color", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], z.prototype, "backgroundColor", 2);
D([
  w({ type: String, attribute: "border-radius", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], z.prototype, "borderRadius", 2);
D([
  w({ type: String, reflect: !0, attribute: "elevation" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Elevation (Shadow)",
    fieldMappings: "elevation",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Low", value: "0 2px 4px rgba(0,0,0,0.1)" },
      { label: "Medium", value: "0 4px 12px rgba(0,0,0,0.12)" },
      { label: "High", value: "0 12px 24px rgba(0,0,0,0.16)" }
    ]
  })
], z.prototype, "elevation", 2);
D([
  v({
    attributeType: f.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], z.prototype, "show", 1);
D([
  v({
    attributeType: f.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], z.prototype, "hide", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ti = { CHILD: 2 }, ri = (t) => (...e) => ({ _$litDirective$: t, values: e });
class ii {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, i) {
    this._$Ct = e, this._$AM = r, this._$Ci = i;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class St extends ii {
  constructor(e) {
    if (super(e), this.it = T, e.type !== ti.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === T || e == null) return this._t = void 0, this.it = e;
    if (e === ye) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const r = [e];
    return r.raw = r, this._t = { _$litType$: this.constructor.resultType, strings: r, values: [] };
  }
}
St.directiveName = "unsafeHTML", St.resultType = 1;
const cr = ri(St);
var oi = Object.defineProperty, ni = Object.getOwnPropertyDescriptor, $ = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? ni(e, r) : e, s = t.length - 1, l; s >= 0; s--)
    (l = t[s]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && oi(e, r, o), o;
};
const Lt = [
  { icon: "🏠", label: "Home", id: "home" },
  { icon: "📊", label: "Dashboard", id: "dashboard" },
  { icon: "📁", label: "Projects", id: "projects" },
  { icon: "👥", label: "Team", id: "team" },
  { separator: !0 },
  { section: "System" },
  { icon: "⚙️", label: "Settings", id: "settings" }
], oe = {
  showSearch: !1,
  searchPlaceholder: "Search (Ctrl + K)",
  showNotificationBell: !1,
  notificationCount: 0,
  showUserAvatar: !1,
  userAvatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showBreadcrumb: !1,
  breadcrumbs: []
}, be = {
  show: !1,
  avatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showLogout: !1,
  showSettings: !1
}, nt = JSON.stringify(Lt, null, 2), at = JSON.stringify(oe, null, 2), st = JSON.stringify(be, null, 2), ai = Lt.filter((t) => !!t.label && !t.separator && !t.section).map((t) => ({ label: t.label ?? "", href: t.href ?? "", icon: t.icon ?? "" }));
function et(t) {
  try {
    const e = JSON.parse(t);
    if (Array.isArray(e)) return e;
  } catch {
  }
  return Lt;
}
function ur(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...oe, ...e };
  } catch {
  }
  return oe;
}
function fr(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...be, ...e };
  } catch {
  }
  return be;
}
function Ce(t = "") {
  return t.split(" ").map((e) => e[0] ?? "").join("").slice(0, 2).toUpperCase() || "U";
}
function tt(t, e, r = "60px", i = "#6366f1") {
  return `
    <div style="
      min-height:${r};
      border:2px dashed ${i}40;
      border-radius:8px;
      display:flex; align-items:center; justify-content:center;
      color:${i}; font-size:0.75rem; font-weight:600;
      background:${i}08; padding:8px;
    ">
      <zero-studio-slot name="${t}"></zero-studio-slot>
    </div>
  `;
}
function Le(t, e, r, i, o, s) {
  if (t === "hidden") return "";
  let l = "☰";
  const c = i === "over" ? !o : r;
  return e === "hamburger" ? l = `
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style="display:block;">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    ` : e === "dots" ? l = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:block;">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    ` : e === "chevron" ? c ? l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      ` : l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      ` : e === "arrow" && (c ? l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      ` : l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      `), t === "floating" ? `
      <div style="
        position:absolute; top:20px;
        left:calc(${i === "over" ? o ? "260px" : "0px" : r ? "64px" : "260px"} - 14px);
        z-index:35; width:28px; height:28px; border-radius:50%;
        background:#ffffff; border:1px solid rgba(0,0,0,0.1);
        display:flex; align-items:center; justify-content:center;
        cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.08);
        color:${s}; transition:left 0.25s;
      ">
        ${l}
      </div>
    ` : t === "header-left" || t === "header-right" ? `
      <div style="
        display:flex; align-items:center; justify-content:center;
        width:36px; height:36px; border-radius:8px; cursor:pointer;
        background:transparent; border:none; color:${s}; flex-shrink:0;
        margin-right: 8px;
      ">
        ${l}
      </div>
    ` : `
    <div style="
      display:flex; align-items:center; justify-content:center;
      padding:10px; margin:4px 8px 8px; border-radius:6px; cursor:pointer;
      background:transparent; border:none; color:${s}; flex-shrink:0;
    ">
      ${l}
    </div>
  `;
}
function si(t, e, r, i, o, s, l, c) {
  var Y;
  if (t.separator)
    return '<div style="height:1px; background:var(--snl-separator-color, #e5e9ef); margin:8px 12px;"></div>';
  if (t.section)
    return c ? "" : `
      <div style="padding:14px 12px 6px; font-size:0.68rem; font-weight:700;
        letter-spacing:0.06em; text-transform:uppercase;
        color:#8996a4; white-space:nowrap;">
        ${t.section}
      </div>
    `;
  const p = r === e, C = !!((Y = t.children) != null && Y.length), k = !c && t.badge ? `
    <span style="margin-left:auto; background:${t.badgeColor || l};
      color:#fff; font-size:0.65rem; font-weight:700; padding:1px 7px;
      border-radius:999px; flex-shrink:0;">
      ${t.badge}
    </span>
  ` : "", P = !c && C ? `
    <span style="margin-left:${t.badge ? "8px" : "auto"}; color:${p ? s : "#8996a4"}; display:flex; flex-shrink:0;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="${p ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
      </svg>
    </span>
  ` : "", N = `
    <div data-tab-index="${e}" style="
      display:flex; align-items:center; gap:10px;
      padding:9px 12px; border-radius:8px; margin-bottom:2px;
      border-left:3px solid ${p ? l : "transparent"};
      cursor:${t.disabled ? "not-allowed" : "pointer"};
      opacity:${t.disabled ? "0.4" : "1"};
      font-size:0.875rem; font-weight:${p ? "600" : "500"};
      color:${p ? s : i};
      background:${p ? o : "transparent"};
      transition:all 0.15s; user-select:none; overflow:hidden;
    ">
      <span style="font-size:1.05rem; flex-shrink:0; width:20px; text-align:center;">
        ${t.icon ?? "•"}
      </span>
      ${c ? "" : `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">
          ${t.label ?? ""}
        </span>
        ${k}${P}
      `}
    </div>
  `;
  let B = "";
  return C && p && !c && (B = '<div style="display:flex; flex-direction:column; margin:2px 0 6px;">' + t.children.map((K, ee) => {
    const Z = ee === 0, ie = Z ? l : i;
    return `
          <div style="display:flex; align-items:center; gap:12px; padding:6px 12px 6px 30px;
            border-radius:8px; font-size:0.83rem; font-weight:${Z ? "600" : "500"};
            color:${ie}; cursor:pointer;">
            <span style="width:6px; height:6px; border-radius:50%; background:${ie};
              opacity:${Z ? "1" : "0.45"}; flex-shrink:0;"></span>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${K.label ?? ""}</span>
          </div>
        `;
  }).join("") + "</div>"), N + B;
}
function li(t, e, r) {
  var o;
  const i = [];
  if (t.showBreadcrumb && ((o = t.breadcrumbs) != null && o.length)) {
    const s = t.breadcrumbs.map(
      (l, c) => c < t.breadcrumbs.length - 1 ? `<span style="color:${r}80;">${l}</span><span style="color:${r}40; margin:0 4px;">›</span>` : `<span style="color:${r}; font-weight:600;">${l}</span>`
    ).join("");
    i.push(`<div style="display:flex; align-items:center; font-size:0.8rem;">${s}</div>`);
  }
  if (t.showSearch && i.push(`
      <div style="flex:1; max-width:280px; display:flex; align-items:center; gap:8px;
        background:#f0f2f5; border-radius:10px; padding:8px 14px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span style="color:#8996a4; font-size:0.83rem;">${t.searchPlaceholder ?? "Search (Ctrl + K)"}</span>
      </div>
    `), i.push('<div style="flex:1;"></div>'), i.push(`
    <div style="cursor:pointer; padding:8px; border-radius:8px; color:${r}; display:flex; align-items:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  `), t.showNotificationBell) {
    const s = t.notificationCount ?? 0;
    i.push(`
      <div style="position:relative; cursor:pointer; padding:6px; border-radius:8px;">
        <span style="font-size:1.2rem; line-height:1;">🔔</span>
        ${s > 0 ? `
          <span style="position:absolute; top:2px; right:2px; background:${e};
            color:#fff; font-size:0.6rem; font-weight:700; min-width:16px; height:16px;
            border-radius:999px; display:flex; align-items:center; justify-content:center; padding:0 3px;">
            ${s}
          </span>` : ""}
      </div>
    `);
  }
  if (t.showUserAvatar) {
    const s = Ce(t.userName), l = t.userAvatarUrl ? `<img src="${t.userAvatarUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:32px; height:32px; border-radius:50%; background:${e}; color:#fff;
           display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; flex-shrink:0;">
           ${s}
         </div>`;
    i.push(`
      <div style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        ${l}
        <div style="display:flex; flex-direction:column; line-height:1.25;">
          <span style="font-size:0.8rem; font-weight:600; color:${r};">${t.userName ?? ""}</span>
          ${t.userRole ? `<span style="font-size:0.7rem; color:${r}60;">${t.userRole}</span>` : ""}
        </div>
        <span style="color:${r}40; font-size:0.75rem;">▾</span>
      </div>
    `);
  }
  return i.join("");
}
function di(t, e, r, i = "#1d2630", o = "#8996a4", s = "#e5e9ef") {
  if (!t.show) return "";
  const l = Ce(t.userName), c = t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:40px; height:40px; border-radius:50%; background:${r};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.85rem; font-weight:700; flex-shrink:0;">${l}</div>`;
  return `
    <div style="margin:14px 12px 6px; padding:${e ? "8px" : "10px 12px"};
      background:#ffffff; border:1px solid ${s}; border-radius:10px;
      display:flex; align-items:center; gap:12px; flex-shrink:0; cursor:pointer;
      ${e ? "justify-content:center;" : ""}">
      ${c}
      ${e ? "" : `
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.85rem; font-weight:700; color:${i};
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userName ?? ""}</div>
          ${t.userRole ? `<div style="font-size:0.72rem; color:${o};
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userRole}</div>` : ""}
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
          <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      `}
    </div>
  `;
}
function pi(t, e, r, i = "buttons", o = "#94a3b8") {
  if (!t.show) return "";
  const s = Ce(t.userName);
  return `
    <div style="padding:12px 14px; border-top:1px solid var(--snl-separator-color, #e5e9ef);
      display:flex; align-items:center; gap:10px; flex-shrink:0;">
      ${t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:34px; height:34px; border-radius:50%; background:${r};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.75rem; font-weight:700; flex-shrink:0;">${s}</div>`}
      ${e ? "" : `
        <div style="flex:1; overflow:hidden;">
          <div style="font-size:0.82rem; font-weight:600; color:var(--snl-footer-name-color, #fff);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userName ?? ""}</div>
          ${t.userRole ? `<div style="font-size:0.7rem; color:var(--snl-footer-role-color, #94a3b8);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userRole}</div>` : ""}
        </div>
        <div style="display:flex; gap:4px; align-items:center;">
          ${i === "buttons" && t.showSettings ? '<span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); font-size:0.9rem;" title="Settings">⚙️</span>' : ""}
          ${i === "buttons" && t.showLogout ? '<span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); font-size:0.9rem;" title="Logout">↪</span>' : ""}
          ${i === "dropdown" ? `
            <span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); display:flex; align-items:center;" title="Profile Actions">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ""}
        </div>
      `}
    </div>
  `;
}
let x = class extends z {
  constructor() {
    super(...arguments), this.height = "100vh", this.activePath = "", this._isMobile = !1, this._mql = null, this._handleUrlChange = () => {
      this._matchActiveItemWithUrl();
    }, this._handleMediaChange = (t) => {
      this._isMobile = t.matches;
    }, this.headerMode = "config", this.sidenavMode = "config", this.footerMode = "config", this.fixedHeader = !0, this.fixedFooter = !0, this.sidenavType = "side", this.opened = !0, this.hasBackdrop = !0, this.collapseBtnPosition = "sidebar-bottom", this.collapseBtnIcon = "chevron", this.navItems = nt, this.activeItem = 0, this.headerConfig = at, this.sidebarFooterConfig = st, this.appName = "My App", this.appSubtitle = "", this.appLogo = "🚀", this.headerTitle = "", this.headerLogo = "", this.collapsed = !1, this.sidebarWidth = "260px", this.headerHeight = "60px", this.collapsedWidth = "64px", this.showCollapseBtn = !0, this.showThemeToggle = !1, this.themeMode = "light", this.sidebarBg = "#ffffff", this.sidebarText = "#5b6b79", this.sidebarActiveBg = "#e6f0ff", this.sidebarActiveText = "#4680ff", this.accentColor = "#4680ff", this.headerBg = "#ffffff", this.headerText = "#1d2630", this.headerBorder = "#e5e9ef", this.mainBg = "#f4f7fa", this.mainPadding = "24px", this.footerActionType = "buttons", this.profilePosition = "top", this._expandedItems = /* @__PURE__ */ new Set();
  }
  get overridePrefix() {
    return "zero-sidenav-layout";
  }
  /**
   * Neutral, studio-ready default applied when the shell is first dropped onto a
   * page. Produces a professional, brand-agnostic app-shell (generic dashboard
   * chrome) with an EMPTY content area so studio pages can be nested inside the
   * `outlet` / `main` region. No domain-specific demo content is injected.
   */
  static getTransformOnDrop() {
    return {
      componentName: "zero-sidenav-layout",
      props: {
        appName: "Able Pro",
        appSubtitle: "v9.6.1",
        appLogo: "",
        accentColor: "#4680ff",
        sidebarBg: "#ffffff",
        sidebarText: "#5b6b79",
        sidebarActiveBg: "#e6f0ff",
        sidebarActiveText: "#4680ff",
        headerBg: "#ffffff",
        headerText: "#1d2630",
        headerBorder: "#e5e9ef",
        mainBg: "#f4f7fa",
        footerActionType: "buttons",
        profilePosition: "top",
        collapseBtnPosition: "header-left",
        collapseBtnIcon: "hamburger",
        showThemeToggle: !0,
        navItems: JSON.stringify([
          { section: "Navigation" },
          { icon: "🏠", label: "Dashboard", id: "dashboard", badge: "3", children: [
            { label: "Default", id: "default", href: "/dashboard/default" },
            { label: "Analytics", id: "analytics", href: "/dashboard/analytics" },
            { label: "Finance", id: "finance", href: "/dashboard/finance" }
          ] },
          { icon: "🧩", label: "Widgets", id: "widgets" },
          { section: "Widget" },
          { icon: "📈", label: "Statistics", id: "statistics" },
          { icon: "📊", label: "Data", id: "data" },
          { icon: "📉", label: "Chart", id: "chart" },
          { section: "Admin Panel" },
          { icon: "👥", label: "Users", id: "users" },
          { icon: "⚙️", label: "Settings", id: "settings" }
        ], null, 2),
        headerConfig: JSON.stringify({
          showSearch: !0,
          searchPlaceholder: "Search (Ctrl + K)",
          showNotificationBell: !0,
          notificationCount: 3,
          showUserAvatar: !0,
          userName: "Able Pro",
          userRole: "Administrator",
          showBreadcrumb: !1
        }),
        sidebarFooterConfig: JSON.stringify({
          show: !0,
          userName: "JWT User",
          userRole: "Administrator",
          showSettings: !0,
          showLogout: !0
        }),
        activeItem: 1,
        fixedHeader: !0,
        fixedFooter: !0
      },
      // Empty by design — the shell is a container. Studio pages drop into the
      // "outlet" / "main" region rather than a pre-baked domain demo.
      children: []
    };
  }
  /**
   * Plain settings schema the studio can render as a template-config form.
   * Returns only plain objects (no external imports). Each `name` maps to a flat
   * key on the studio-side settings object; `deriveShellProps` (studio) composes
   * these discrete fields back into the navItems / headerConfig / sidebarFooterConfig
   * props this element still consumes at runtime. Every field carries a default.
   *
   * control ∈ "text" | "number" | "boolean" | "select" | "color" | "list"
   * (`list` edits an array of objects via typed `itemShape` sub-fields — no JSON).
   *
   * NOTE: header and footer both expose a user name / role / avatar. Because the
   * settings object is flat, those keys are disambiguated (`headerUserName` vs
   * `profileName`, etc.); the human labels stay "User Name"/"User Role"/"Avatar URL".
   */
  static getSettingsSchema() {
    return [
      // ── Brand ──
      { name: "appName", label: "App / Brand Name", control: "text", group: "Brand", defaultValue: "My App" },
      { name: "appLogo", label: "Logo (emoji, image URL, or inline SVG)", control: "text", group: "Brand", defaultValue: "🚀" },
      // ── Navigation ──
      {
        name: "navItems",
        label: "Nav Items",
        control: "list",
        group: "Navigation",
        defaultValue: ai,
        itemShape: [
          { name: "label", label: "Label", control: "text", defaultValue: "" },
          { name: "href", label: "Link (href)", control: "text", defaultValue: "" },
          { name: "icon", label: "Icon (emoji)", control: "text", defaultValue: "" }
        ]
      },
      // ── Header ──
      { name: "showSearch", label: "Show Search", control: "boolean", group: "Header", defaultValue: oe.showSearch ?? !1 },
      { name: "showNotifications", label: "Show Notifications", control: "boolean", group: "Header", defaultValue: oe.showNotificationBell ?? !1 },
      { name: "notificationCount", label: "Notification Count", control: "number", group: "Header", defaultValue: oe.notificationCount ?? 0 },
      { name: "showThemeToggle", label: "Show Theme Toggle", control: "boolean", group: "Header", defaultValue: !0 },
      { name: "headerUserName", label: "User Name", control: "text", group: "Header", defaultValue: oe.userName ?? "" },
      { name: "headerUserRole", label: "User Role", control: "text", group: "Header", defaultValue: oe.userRole ?? "" },
      { name: "headerAvatarUrl", label: "Avatar URL", control: "text", group: "Header", defaultValue: oe.userAvatarUrl ?? "" },
      // ── Sidebar ──
      { name: "showProfile", label: "Show Profile Footer", control: "boolean", group: "Sidebar", defaultValue: be.show ?? !1 },
      { name: "profileName", label: "User Name", control: "text", group: "Sidebar", defaultValue: be.userName ?? "" },
      { name: "profileRole", label: "User Role", control: "text", group: "Sidebar", defaultValue: be.userRole ?? "" },
      { name: "profileAvatarUrl", label: "Avatar URL", control: "text", group: "Sidebar", defaultValue: be.avatarUrl ?? "" },
      // ── Layout ──
      { name: "collapsed", label: "Sidebar Collapsed", control: "boolean", group: "Layout", defaultValue: !1 },
      { name: "fixedHeader", label: "Fixed Header", control: "boolean", group: "Layout", defaultValue: !0 },
      {
        name: "sidenavType",
        label: "Sidenav Layout Mode",
        control: "select",
        group: "Layout",
        options: [
          { label: "Side (Standard)", value: "side" },
          { label: "Over (Overlay/Drawer)", value: "over" }
        ],
        defaultValue: "side"
      },
      { name: "sidebarWidth", label: "Sidebar Width (px)", control: "number", group: "Layout", defaultValue: 260 },
      // ── Theme ──
      { name: "accentColor", label: "Accent Color", control: "color", group: "Theme", defaultValue: "#4680ff" }
    ];
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("popstate", this._handleUrlChange), window.addEventListener("hashchange", this._handleUrlChange), window.addEventListener("route-change", this._handleUrlChange), this._setupResponsive(), this._matchActiveItemWithUrl();
  }
  disconnectedCallback() {
    window.removeEventListener("popstate", this._handleUrlChange), window.removeEventListener("hashchange", this._handleUrlChange), window.removeEventListener("route-change", this._handleUrlChange), this._teardownResponsive(), super.disconnectedCallback();
  }
  _setupResponsive() {
    typeof window > "u" || typeof window.matchMedia != "function" || (this._mql = window.matchMedia("(max-width: 768px)"), this._isMobile = this._mql.matches, this._mql.addEventListener ? this._mql.addEventListener("change", this._handleMediaChange) : this._mql.addListener(this._handleMediaChange));
  }
  _teardownResponsive() {
    this._mql && (this._mql.removeEventListener ? this._mql.removeEventListener("change", this._handleMediaChange) : this._mql.removeListener(this._handleMediaChange), this._mql = null);
  }
  willUpdate(t) {
    super.willUpdate(t), this._matchActiveItemWithUrl();
  }
  updated(t) {
    super.updated(t), this.style.setProperty("--zero-height", this.height);
  }
  /**
   * Resolve the host runtime-app / renderer by walking UP through shadow
   * boundaries. `closest()` cannot cross shadow roots, and the sidenav is
   * rendered inside the runtime app's shadow root, so a plain closest() misses
   * it and we'd fall back to a stale path source.
   */
  _resolveCurrentPath() {
    let t = this;
    for (let e = 0; t && e < 20; e++) {
      const i = t.getRootNode().host;
      if (!i) break;
      const o = i.tagName ? i.tagName.toLowerCase() : "";
      if (o.startsWith("zero-runtime-app"))
        return i.pathName || i.currentPath || "";
      if (o.startsWith("zero-renderer"))
        return i.path || i.pathName || "";
      t = i;
    }
    return "";
  }
  _matchActiveItemWithUrl() {
    if (typeof window > "u") return;
    let t = this._resolveCurrentPath();
    t || (t = window.location.hash.replace(/^#/, "") || window.location.pathname || "/");
    let e = t;
    if (e.startsWith("/")) {
      const r = e.split("/").filter(Boolean);
      r.length > 1 && r[0].startsWith("project-") && (e = "/" + r.slice(1).join("/"));
    }
    if (this.activePath = e, this.sidenavMode !== "slot") {
      const r = et(this.navItems), i = (c) => {
        let p = c;
        try {
          p = new URL(c, window.location.origin).pathname;
        } catch {
        }
        if (p.startsWith("/")) {
          const C = p.split("/").filter(Boolean);
          C.length > 1 && C[0].startsWith("project-") && (p = "/" + C.slice(1).join("/"));
        }
        return p = p.replace(/\/+$/, ""), p === "" ? "/" : p;
      }, o = i(e);
      let s = -1, l = -1;
      r.forEach((c, p) => {
        const C = c.path ?? c.href;
        if (!C) return;
        const k = i(C);
        (k === o || k !== "/" && o.startsWith(k + "/")) && k.length > l && (l = k.length, s = p);
      }), s !== -1 && s !== this.activeItem && (this.activeItem = s);
    }
  }
  get onOpenedChange() {
    return "openedchange";
  }
  get onNavChange() {
    return "navchange";
  }
  get onSidebarToggle() {
    return "sidebarToggle";
  }
  get onLogout() {
    return "logout";
  }
  get onProfileClick() {
    return "profileClick";
  }
  get onSettingsClick() {
    return "settingsClick";
  }
  get onSearch() {
    return "search";
  }
  get onThemeChange() {
    return "themechange";
  }
  get onNotificationClick() {
    return "notificationClick";
  }
  open() {
    this.opened = !0, this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: !0 }, bubbles: !0, composed: !0 }));
  }
  close() {
    this.opened = !1, this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: !1 }, bubbles: !0, composed: !0 }));
  }
  toggle() {
    this.opened = !this.opened, this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: this.opened }, bubbles: !0, composed: !0 }));
  }
  toggleSidebar() {
    this.collapsed = !this.collapsed, this.dispatchEvent(new CustomEvent("sidebarToggle", { detail: { collapsed: this.collapsed }, bubbles: !0, composed: !0 }));
  }
  expandSidebar() {
    this.collapsed = !1;
  }
  collapseSidebar() {
    this.collapsed = !0;
  }
  navigateTo(t) {
    const e = et(this.navItems)[t];
    this.activeItem = t, this.dispatchEvent(new CustomEvent("navchange", { detail: { activeItem: t, item: e }, bubbles: !0, composed: !0 }));
  }
  toggleTheme() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark", this.dispatchEvent(new CustomEvent("themechange", { detail: { theme: this.themeMode }, bubbles: !0, composed: !0 }));
  }
  // ─── Internal handlers ──────────────────────────────────────────────────────
  handleNavClick(t, e) {
    e.disabled || e.separator || e.section || (this.navigateTo(t), e.path ? this.dispatchEvent(new CustomEvent("route-change", { detail: { path: e.path }, bubbles: !0, composed: !0 })) : e.href && window.open(e.href, e.target ?? "_self"));
  }
  handleChildToggle(t) {
    this._expandedItems.has(t) ? this._expandedItems.delete(t) : this._expandedItems.add(t), this.requestUpdate();
  }
  /** Notification bell click → dispatch a wireable `notificationClick` event
   *  (bubbles + composed) so it can drive a shell-node trigger. */
  handleBellClick(t) {
    this.dispatchEvent(new CustomEvent("notificationClick", {
      detail: { count: t },
      bubbles: !0,
      composed: !0
    }));
  }
  // ─── Toggle Button Helper ──────────────────────────────────────────────────
  renderToggleButton(t) {
    const e = t === "floating", r = t === "header-left" || t === "header-right";
    let i = g`☰`;
    const o = this.collapseBtnIcon === "chevron", s = this.collapseBtnIcon === "arrow", l = this.collapseBtnIcon === "hamburger", c = this.collapseBtnIcon === "dots";
    l ? i = g`
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      ` : c ? i = g`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      ` : o ? (this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        ` : i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        ` : s && ((this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        ` : i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        `);
    const p = (C) => {
      C.stopPropagation(), this.sidenavType === "over" ? this.toggle() : this.toggleSidebar();
    };
    return e ? g`
        <button class="snl-floating-toggle" @click=${p} title="Toggle sidebar">
          ${i}
        </button>
      ` : r ? g`
        <button class="snl-header-btn" style="color: ${this.headerText};" @click=${p} title="Toggle sidebar">
          ${i}
        </button>
      ` : g`
      <button class="snl-collapse-btn" style="color: ${this.sidebarText};" @click=${p} title="Toggle sidebar">
        ${i}
      </button>
    `;
  }
  // ─── getStudioTemplate ─────────────────────────────────────────────────────
  static getStudioTemplate(t) {
    var a, d, h, _, U, j, O, u, b, y, m, R, M, I, J, Ae, Ke, Ze, Mt, zt, Nt, Bt, It, Ht, jt, Ut, Dt, Wt, Vt, Ft, Yt, Xt, qt, Gt, Jt, Kt;
    const e = ((a = t == null ? void 0 : t.props) == null ? void 0 : a.headerMode) || "config", r = ((d = t == null ? void 0 : t.props) == null ? void 0 : d.sidenavMode) || "config", i = ((h = t == null ? void 0 : t.props) == null ? void 0 : h.footerMode) || "config", o = ((_ = t == null ? void 0 : t.props) == null ? void 0 : _.navItems) || nt, s = ((U = t == null ? void 0 : t.props) == null ? void 0 : U.headerConfig) || at, l = ((j = t == null ? void 0 : t.props) == null ? void 0 : j.sidebarFooterConfig) || st, c = ((O = t == null ? void 0 : t.props) == null ? void 0 : O.appName) ?? "My App", p = ((u = t == null ? void 0 : t.props) == null ? void 0 : u.appSubtitle) ?? "", C = ((b = t == null ? void 0 : t.props) == null ? void 0 : b.appLogo) ?? "", k = ((y = t == null ? void 0 : t.props) == null ? void 0 : y.headerTitle) || "", P = ((m = t == null ? void 0 : t.props) == null ? void 0 : m.headerLogo) || "", N = Number(((R = t == null ? void 0 : t.props) == null ? void 0 : R.activeItem) ?? 0), B = !!((M = t == null ? void 0 : t.props) != null && M.collapsed), Y = ((I = t == null ? void 0 : t.props) == null ? void 0 : I.profilePosition) || "top", K = ((J = t == null ? void 0 : t.props) == null ? void 0 : J.sidebarWidth) || "260px", ee = ((Ae = t == null ? void 0 : t.props) == null ? void 0 : Ae.sidebarBg) || "#ffffff", Z = ((Ke = t == null ? void 0 : t.props) == null ? void 0 : Ke.sidebarText) || "#5b6b79", ie = ((Ze = t == null ? void 0 : t.props) == null ? void 0 : Ze.sidebarActiveBg) || "#e6f0ff", A = ((Mt = t == null ? void 0 : t.props) == null ? void 0 : Mt.sidebarActiveText) || "#4680ff", L = ((zt = t == null ? void 0 : t.props) == null ? void 0 : zt.accentColor) || "#4680ff", Q = ((Nt = t == null ? void 0 : t.props) == null ? void 0 : Nt.headerBg) || "#ffffff", X = ((Bt = t == null ? void 0 : t.props) == null ? void 0 : Bt.headerText) || "#1d2630", G = ((It = t == null ? void 0 : t.props) == null ? void 0 : It.headerBorder) || "#e5e9ef", me = ((Ht = t == null ? void 0 : t.props) == null ? void 0 : Ht.mainBg) || "#f4f7fa", xe = ((jt = t == null ? void 0 : t.props) == null ? void 0 : jt.mainPadding) || "24px", Ue = ((Ut = t == null ? void 0 : t.props) == null ? void 0 : Ut.headerHeight) || "60px", de = ((Dt = t == null ? void 0 : t.props) == null ? void 0 : Dt.collapsedWidth) || "64px", te = ((Wt = t == null ? void 0 : t.props) == null ? void 0 : Wt.showCollapseBtn) !== !1, W = ((Vt = t == null ? void 0 : t.props) == null ? void 0 : Vt.sidenavType) || "side", V = ((Ft = t == null ? void 0 : t.props) == null ? void 0 : Ft.opened) !== !1, Ee = ((Yt = t == null ? void 0 : t.props) == null ? void 0 : Yt.hasBackdrop) !== !1, ne = ((Xt = t == null ? void 0 : t.props) == null ? void 0 : Xt.collapseBtnPosition) || "sidebar-bottom", ae = ((qt = t == null ? void 0 : t.props) == null ? void 0 : qt.collapseBtnIcon) || "chevron", De = ((Gt = t == null ? void 0 : t.props) == null ? void 0 : Gt.footerActionType) || "buttons", pe = ((Jt = t == null ? void 0 : t.props) == null ? void 0 : Jt.fixedHeader) !== !1, ke = ((Kt = t == null ? void 0 : t.props) == null ? void 0 : Kt.fixedFooter) !== !1, We = et(o), S = ur(s), re = fr(l), he = W === "over" ? !V : B, H = he ? W === "over" ? "0px" : de : K, pt = k || c, ht = r !== "hidden", Ve = (F, $t) => {
      const Tt = (F || "").trim().split(/\s+/).filter(Boolean), Qe = Tt[0] || "", Oe = Tt.slice(1).join(" ");
      return `<span style="font-weight:800; font-size:1.35rem; line-height:1; color:${$t}; letter-spacing:-0.01em; white-space:nowrap;">${Qe}${Oe ? `<sup style="font-size:0.5em; font-weight:700; vertical-align:super; margin-left:1px;">${Oe}</sup>` : ""}</span>`;
    }, ct = (F) => !!F && (F.startsWith("<") || F.startsWith("http") || F.startsWith("/") || F.includes(".")), q = [
      { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["page-root", "zero-section"] },
      { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
    ];
    e === "slot" && q.push({ id: "header", label: "Header Drop Zone", dropzone: !0, accepts: ["zero-section"] }), r === "slot" ? q.push({ id: "sidebar", label: "Sidebar Nav Drop Zone", dropzone: !0, accepts: ["zero-section"] }) : r === "config" && q.push({ id: "sidebar-extra", label: "Sidebar Extra", dropzone: !0, accepts: ["zero-section"] }), i === "slot" && q.push({ id: "footer", label: "Sidebar Footer Drop Zone", dropzone: !0, accepts: ["zero-section"] });
    let Se = !1;
    const we = We.map((F, $t) => {
      const Qe = F.bottom === !0 && !Se;
      Qe && (Se = !0);
      const Oe = si(F, $t, N, Z, ie, A, L, he);
      return Qe ? `<div style="flex: 1; min-height: 20px;"></div>${Oe}` : Oe;
    }).join(""), Fe = ne === "header-left" && te ? Le("header-left", ae, B, W, V, X) : "", ut = ne === "header-right" && te ? Le("header-right", ae, B, W, V, X) : "", $e = e === "hidden" ? "" : `
      <div style="
        display:flex; align-items:center; gap:12px;
        height:${Ue}; padding:0 20px;
        background:${Q}; border-bottom:1px solid ${G};
        flex-shrink:0; box-sizing:border-box; z-index:10;
        width:100%;
      ">
        ${Fe}
        ${k || P ? `
          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${X}; white-space:nowrap; flex-shrink:0;">
            ${(() => {
      const F = P || C;
      return F.startsWith("<") ? F : F.startsWith("http") || F.startsWith("/") || F.includes(".") ? `<img src="${F}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.3rem;">${F}</span>`;
    })()}
            ${pt}
          </div>
        ` : ""}
        ${e === "config" ? li(S, L, X) : `<div style="flex:1; min-width:0;">${tt("header", "Drop Header Sections", "40px", L)}</div>`}
        ${ut}
      </div>
    `, Ye = r === "slot" ? tt("sidebar", "Drop Sidebar Sections", "200px", L) : `
        <nav style="display:flex; flex-direction:column; flex:1; padding:10px 8px; overflow-y:auto;">
          ${we}
        </nav>
        <div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
          ${tt("sidebar-extra", "Sidebar Extra", "40px", L)}
        </div>
      `, Xe = i === "config" && re.show && Y === "top" ? di(re, he, L, X, "#8996a4", G) : "", qe = i === "hidden" ? "" : i === "slot" ? `<div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
             ${tt("footer", "Drop Footer Sections", "50px", L)}
           </div>` : Y === "bottom" ? pi(re, he, L, De, Z) : "", Ge = ne === "sidebar-top" && te ? Le("sidebar-top", ae, B, W, V, "#fff") : "", Pe = ne === "sidebar-bottom" && te ? Le("sidebar-bottom", ae, B, W, V, Z) : "", bt = ke ? "" : "overflow-y: auto; scrollbar-width: thin;", gt = ke ? "" : "flex: none; overflow-y: visible;", vt = ht ? `
      <div style="
        width:${H}; background:${ee};
        display:flex; flex-direction:column; flex-shrink:0;
        overflow:hidden; transition:width 0.25s, transform 0.25s;
        border-right:${H === "0px" ? "none" : `1px solid ${G}`};
        ${W === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${V ? "none" : "translateX(-100%)"};` : ""}
        ${bt}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid ${G}; flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${ct(C) ? C.startsWith("<") ? C : `<img src="${C}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />` : ""}
            ${he ? "" : `
              <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                ${Ve(c, L)}
                ${p ? `<span style="font-size:0.6rem; font-weight:700; line-height:1; padding:3px 7px; border-radius:999px; background:#d5f5e3; color:#17a862; white-space:nowrap; flex-shrink:0;">${p}</span>` : ""}
              </div>
            `}
          </div>
          ${Ge}
        </div>
        ${Xe}
        <div style="display:flex; flex-direction:column; flex:1; overflow:hidden; ${gt}">
          ${Ye}
        </div>
        ${qe}
        ${Pe}
      </div>
    ` : "", yt = W === "over" && V && Ee ? `
      <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(2px); z-index:25; pointer-events:none;"></div>
    ` : "", ce = ne === "floating" && te ? Le("floating", ae, B, W, V, Z) : "", mt = pe ? $e : "", xt = pe ? "" : $e, wt = pe ? `padding: ${xe};` : "", n = `
      <div style="
        display:flex; flex-direction:column; width:100%; height:600px;
        overflow:hidden; border:1px solid ${G}; border-radius:12px;
        font-family:system-ui,sans-serif;
        --snl-accent: ${L};
        --snl-sidebar-width: ${K};
        --snl-collapsed-w: ${de};
        --snl-border: ${G};
        --snl-section-color: #8996a4;
        --snl-brand-text-color: ${X};
        --snl-separator-color: ${G};
        --snl-footer-name-color: ${X};
        --snl-footer-role-color: #8996a4;
        --snl-footer-btn-color: #8996a4;
        --snl-profile-name-color: ${X};
        --snl-profile-role-color: #8996a4;
        --snl-hover-bg: rgba(0,0,0,0.04);
      ">
        ${mt}
        <div style="display:flex; flex:1; overflow:hidden; position:relative;">
          ${yt}
          ${vt}
          ${ce}
          <div style="flex:1; overflow-y: auto; background:${me}; display:flex; flex-direction:column; min-width:0;">
            ${xt}
            ${pe ? `
              <div style="flex:1; ${wt} box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; padding:${xe}; box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: q,
      templateHtml: n,
      badges: ["Sidebar Layout"],
      emptyText: "Drop sections into main, or switch a region to 'slot' mode"
    };
  }
  // ─── Runtime Render ────────────────────────────────────────────────────────
  render() {
    var ie;
    const t = et(this.navItems), e = ur(this.headerConfig), r = fr(this.sidebarFooterConfig), i = this.sidenavMode !== "hidden", o = !!(this.headerTitle || this.headerLogo), s = (A) => !!A && (A.startsWith("<") || A.startsWith("http") || A.startsWith("/") || A.includes(".")), l = () => {
      const A = (this.appName || "").trim().split(/\s+/).filter(Boolean), L = A[0] || "", Q = A.slice(1).join(" ");
      return g`<span class="snl-brand-name">${L}${Q ? g`<sup class="snl-brand-name-sup">${Q}</sup>` : T}</span>`;
    }, c = this.showThemeToggle ? g`
      <button class="snl-header-btn snl-theme-toggle"
        style="color:${this.headerText}; margin-right:0;"
        @click=${(A) => {
      A.stopPropagation(), this.toggleTheme();
    }}
        title=${this.themeMode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        aria-label="Toggle theme">
        ${this.themeMode === "dark" ? g`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ` : g`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `}
      </button>
    ` : T, p = this.footerMode === "config" && r.show, C = g`
      <div class="snl-profile-card"
        @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: !0, composed: !0 }))}>
        ${r.avatarUrl ? g`<img class="snl-profile-avatar snl-profile-avatar-img" src=${r.avatarUrl} />` : g`<div class="snl-profile-avatar snl-profile-avatar-init">${Ce(r.userName)}</div>`}
        <div class="snl-profile-info">
          <div class="snl-profile-name">${r.userName ?? ""}</div>
          ${r.userRole ? g`<div class="snl-profile-role">${r.userRole}</div>` : T}
        </div>
        <span class="snl-profile-caret">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </span>
      </div>
    `, k = this.headerMode === "hidden" ? T : g`
      <header class="snl-header"
        style="
          height:${this.headerHeight}; background:var(--uiv-surface-color, ${this.headerBg});
          color:var(--uiv-text-color, ${this.headerText});
          border-bottom:1px solid var(--uiv-border-color, ${this.headerBorder});
        ">

        <button class="snl-header-toggle-mobile" @click=${(A) => {
      A.stopPropagation(), this.toggle();
    }} title="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : T}

        ${o ? g`
          <div class="snl-header-brand" style="color:${this.headerText};">
            ${(() => {
      const A = this.headerLogo || this.appLogo;
      return A && A.startsWith("<") ? g`${cr(A)}` : A && (A.startsWith("http") || A.startsWith("/") || A.includes(".")) ? g`<img src="${A}" style="width: 24px; height: 24px; object-fit: contain;" />` : A ? g`<span class="snl-brand-logo">${A}</span>` : T;
    })()}
            <span>${this.headerTitle || this.appName}</span>
          </div>
        ` : T}

        ${this.headerMode === "config" ? g`

          ${e.showBreadcrumb && ((ie = e.breadcrumbs) != null && ie.length) ? g`
            <nav class="snl-header-breadcrumb">
              ${e.breadcrumbs.map((A, L) => g`
                ${L > 0 ? g`<span style="opacity:0.3; margin:0 4px;">›</span>` : T}
                <span style="${L === e.breadcrumbs.length - 1 ? "font-weight:600;" : "opacity:0.6;"}">${A}</span>
              `)}
            </nav>
          ` : T}

          ${e.showSearch ? g`
            <div class="snl-header-search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                class="snl-header-search-input"
                type="search"
                placeholder=${e.searchPlaceholder ?? "Search (Ctrl + K)"}
                @input=${(A) => this.dispatchEvent(new CustomEvent("search", {
      detail: { query: A.target.value },
      bubbles: !0,
      composed: !0
    }))}
                @keydown=${(A) => {
      A.key === "Enter" && this.dispatchEvent(new CustomEvent("search", {
        detail: { query: A.target.value, submit: !0 },
        bubbles: !0,
        composed: !0
      }));
    }}
              />
            </div>
          ` : T}

          <div class="snl-header-spacer"></div>

          ${c}

          ${e.showNotificationBell ? g`
            <div class="snl-header-bell" role="button" tabindex="0" title="Notifications"
              aria-label="Notifications"
              @click=${(A) => {
      A.stopPropagation(), this.handleBellClick(e.notificationCount ?? 0);
    }}
              @keydown=${(A) => {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), this.handleBellClick(e.notificationCount ?? 0));
    }}>
              <span>🔔</span>
              ${(e.notificationCount ?? 0) > 0 ? g`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${e.notificationCount}
                </span>
              ` : T}
            </div>
          ` : T}

          ${e.showUserAvatar ? g`
            <div class="snl-header-user">
              ${e.userAvatarUrl ? g`
                <img class="snl-avatar snl-avatar-img" src=${e.userAvatarUrl} />
              ` : g`
                <div class="snl-avatar snl-avatar-init" style="background:${this.accentColor};">
                  ${Ce(e.userName)}
                </div>
              `}
              <div class="snl-user-info" style="display:flex; flex-direction:column; line-height:1.25;">
                <span style="font-size:0.8rem; font-weight:600; color:${this.headerText};">${e.userName ?? ""}</span>
                ${e.userRole ? g`<span style="font-size:0.7rem; opacity:0.5;">${e.userRole}</span>` : T}
              </div>
              <span style="opacity:0.3; font-size:0.75rem;">▾</span>
            </div>
          ` : T}

        ` : g`
          <div class="snl-header-slot-zone">
            <slot name="header"></slot>
          </div>
          ${c}
        `}

        ${this.collapseBtnPosition === "header-right" && this.showCollapseBtn ? this.renderToggleButton("header-right") : T}
      </header>
    `, P = this.fixedFooter ? "" : "overflow-y: auto; scrollbar-width: thin;", N = this.fixedFooter ? "" : "flex: none; overflow-y: visible;", B = i ? g`
      <aside class="snl-sidebar"
        style="width:${this.sidebarWidth}; background:var(--uiv-surface-color, ${this.sidebarBg});
          --snl-collapsed-w:${this.collapsedWidth};
          ${P}">

        <div class="snl-sidebar-brand" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <slot name="brand">
            <div class="snl-brand-wordmark" style="flex: 1;">
              ${s(this.appLogo) ? this.appLogo.startsWith("<") ? g`${cr(this.appLogo)}` : g`<img src="${this.appLogo}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />` : T}
              ${l()}
              ${this.appSubtitle ? g`<span class="snl-brand-pill">${this.appSubtitle}</span>` : T}
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : T}
        </div>

        <!-- Profile card at TOP (default) -->
        ${p && this.profilePosition === "top" ? C : T}

        <!-- Nav area: config mode or slot mode -->
        ${this.sidenavMode === "slot" ? g`
          <div class="snl-sidebar-slot" style="${N}">
            <slot name="sidebar"></slot>
          </div>
        ` : g`
          <nav class="snl-nav" style="${N}">
            ${(() => {
      let A = !1;
      return t.map((L, Q) => {
        var te;
        if (L.separator) return g`<div class="nav-separator"></div>`;
        if (L.section) return g`
                  <div class="snl-nav-section">${L.section}</div>
                `;
        const X = this.activeItem === Q, G = !!((te = L.children) != null && te.length), me = G && (this._expandedItems.has(Q) || X), xe = G ? (() => {
          const W = L.children.findIndex((V) => V.path && V.path === this.activePath || V.href && V.href === this.activePath);
          return W !== -1 ? W : X ? 0 : -1;
        })() : -1, de = L.bottom === !0 && !A;
        return de && (A = !0), g`
                  ${de ? g`<div style="flex: 1; min-height: 20px;"></div>` : T}
                  <button
                    class="nav-item ${X ? "is-active" : ""} ${L.disabled ? "is-disabled" : ""}"
                    style="
                      color:${X ? this.sidebarActiveText : this.sidebarText};
                      background:${X ? this.sidebarActiveBg : "transparent"};
                    "
                    @click=${() => G ? this.handleChildToggle(Q) : this.handleNavClick(Q, L)}
                  >
                    <span class="nav-icon">${L.icon ?? "•"}</span>
                    <span class="nav-label">${L.label ?? ""}</span>
                    ${L.badge ? g`
                      <span class="snl-nav-badge" style="background:${L.badgeColor || this.accentColor};">
                        ${L.badge}
                      </span>` : T}
                    ${G ? g`
                      <span class="nav-child-indicator" style="display:flex; margin-left:${L.badge ? "8px" : "auto"};">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="${me ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
                        </svg>
                      </span>` : T}
                  </button>
                  ${G && me ? g`
                    <div class="snl-sub-menu open">
                      ${L.children.map((W, V) => g`
                        <button
                          class="snl-sub-item ${V === xe ? "is-active" : ""} ${W.disabled ? "is-disabled" : ""}"
                          @click=${() => this.handleNavClick(Q, W)}
                        >
                          <span class="snl-sub-dot"></span>
                          <span class="nav-label">${W.label ?? ""}</span>
                        </button>
                      `)}
                    </div>
                  ` : T}
                `;
      });
    })()}
          </nav>

          <div class="snl-sidebar-extra">
            <slot name="sidebar-extra"></slot>
          </div>
        `}

        <!-- Footer area: config / slot / hidden -->
        ${this.footerMode === "hidden" ? T : this.footerMode === "slot" ? g`
            <div class="snl-footer-slot">
              <slot name="footer"></slot>
            </div>
          ` : r.show && this.profilePosition === "bottom" ? g`
            <div class="snl-sidebar-footer">
              ${r.avatarUrl ? g`
                <img class="snl-footer-avatar" src=${r.avatarUrl} />
              ` : g`
                <div class="snl-footer-initials">${Ce(r.userName)}</div>
              `}
              <div class="snl-footer-info">
                <div class="snl-footer-name">${r.userName ?? ""}</div>
                ${r.userRole ? g`<div class="snl-footer-role">${r.userRole}</div>` : T}
              </div>
              <div class="snl-footer-actions">
                ${this.footerActionType === "buttons" && r.showSettings ? g`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: !0, composed: !0 }))}
                    title="Settings">⚙️</button>
                ` : T}
                ${this.footerActionType === "buttons" && r.showLogout ? g`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("logout", { bubbles: !0, composed: !0 }))}
                    title="Logout">↪</button>
                ` : T}
                ${this.footerActionType === "dropdown" ? g`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: !0, composed: !0 }))}
                    title="Profile Actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ` : T}
              </div>
            </div>
          ` : T}

        ${this.collapseBtnPosition === "sidebar-bottom" && this.showCollapseBtn ? this.renderToggleButton("sidebar-bottom") : T}
      </aside>
    ` : T, Y = this.fixedHeader ? k : T, K = this.fixedHeader ? T : k, ee = this.fixedHeader ? `padding: ${this.mainPadding};` : "";
    return g`
      ${this.renderResponsiveStyles()}
      <div>
        <div class="snl-shell" style="
          --snl-accent: var(--uiv-primary-color, ${this.accentColor});
          --snl-sidebar-width: ${this.sidebarWidth};
          --snl-collapsed-w: ${this.collapsedWidth};
          --snl-sidebar-text: ${this.sidebarText};
          --snl-border: var(--uiv-border-color, ${this.headerBorder});
          --snl-section-color: var(--uiv-text-muted, #8996a4);
          --snl-brand-text-color: var(--uiv-text-color, ${this.headerText});
          --snl-separator-color: var(--uiv-border-color, ${this.headerBorder});
          --snl-profile-name-color: var(--uiv-text-color, ${this.headerText});
          --snl-profile-role-color: var(--uiv-text-muted, #8996a4);
          --snl-footer-name-color: var(--uiv-text-color, ${this.headerText});
          --snl-footer-role-color: var(--uiv-text-muted, #8996a4);
          --snl-footer-btn-color: var(--uiv-text-muted, #8996a4);
          --snl-hover-bg: var(--uiv-hover-bg, ${this.sidebarText === "#94a3b8" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)"});
          ${this.computeInternalStyles()}
        ">
          ${Y}
          <div class="snl-body">
            ${this.opened && (this.sidenavType === "over" || this._isMobile) && this.hasBackdrop ? g`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : T}
            ${B}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : T}
            <main class="snl-main" style="background:var(--uiv-bg-color, ${this.mainBg}); ${"overflow-y: auto;"} ${ee} display: flex; flex-direction: column;">
              ${K}
              ${this.fixedHeader ? g`
                <slot name="outlet"></slot>
                <slot name="main"></slot>
                <slot></slot>
              ` : g`
                <div style="flex: 1; padding:${this.mainPadding}; box-sizing: border-box;">
                  <slot name="outlet"></slot>
                  <slot name="main"></slot>
                  <slot></slot>
                </div>
              `}
              ${this.renderDropIndicators()}
            </main>
          </div>
        </div>
      </div>
    `;
  }
};
x.slots = [];
x.styles = [
  z.styles,
  vr`
      :host {
        display: block;
        width: 100%;
        height: var(--zero-height, 100%);
        min-height: var(--zero-height, 100vh);
        --snl-accent: var(--uiv-primary-color, #4680ff);
        --snl-border: var(--uiv-border-color, #e5e9ef);
        --snl-section-color: var(--uiv-text-muted, #8996a4);
        --snl-ease: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: var(--zero-theme-typography-fontFamily, var(--uiv-font-family, system-ui, -apple-system, sans-serif));
        font-size: var(--zero-theme-typography-bodySize, var(--uiv-font-size-base, 14px));
      }

      :host > div {
        height: var(--zero-height, 100%);
        width: 100%;
        display: block; /* override base class flex — snl-shell handles its own layout */
      }

      /* Dark mode — flips the shared --uiv-* tokens the shell reads from.
         Toggled via the header theme button (see showThemeToggle). */
      :host([data-theme="dark"]) {
        --uiv-surface-color: #1e293b;
        --uiv-bg-color: #0f172a;
        --uiv-text-color: #f1f5f9;
        --uiv-text-muted: #94a3b8;
        --uiv-border-color: #334155;
        --uiv-hover-bg: rgba(255, 255, 255, 0.07);
      }

      .snl-theme-toggle svg { display: block; }

      /* ── Shell ── */
      .snl-shell {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      /* ── Header ── */
      .snl-header {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 10;
        width: 100%;
      }

      .snl-header-brand {
        display: flex; align-items: center; gap: 10px;
        font-weight: 700; font-size: 0.95rem;
        white-space: nowrap; flex-shrink: 0;
      }

      .snl-header-breadcrumb {
        display: flex; align-items: center; gap: 4px; font-size: 0.8rem;
      }

      .snl-header-search {
        flex: 1; max-width: 280px;
        display: flex; align-items: center; gap: 8px;
        border-radius: 10px; padding: 8px 14px;
        background: var(--snl-search-bg, #f0f2f5);
      }

      .snl-header-search-input {
        flex: 1; min-width: 0;
        border: none; outline: none; background: transparent;
        color: inherit; font: inherit; font-size: 0.83rem;
        padding: 0; margin: 0;
      }
      .snl-header-search-input::placeholder { opacity: 0.5; }
      .snl-header-search-input::-webkit-search-cancel-button { cursor: pointer; }

      .snl-header-spacer { flex: 1; }

      .snl-header-bell {
        position: relative; cursor: pointer;
        padding: 6px; border-radius: 8px; font-size: 1.2rem;
        transition: background var(--snl-ease);
      }
      .snl-header-bell:hover { background: rgba(0,0,0,0.04); }

      .snl-bell-count {
        position: absolute; top: 2px; right: 2px;
        background: var(--snl-accent); color: #fff;
        font-size: 0.6rem; font-weight: 700;
        min-width: 16px; height: 16px;
        border-radius: 999px;
        display: flex; align-items: center; justify-content: center; padding: 0 3px;
      }

      .snl-header-user {
        display: flex; align-items: center; gap: 8px;
        cursor: pointer; border-radius: 8px; padding: 4px 8px;
        transition: background var(--snl-ease);
      }
      .snl-header-user:hover { background: rgba(0,0,0,0.04); }

      .snl-header-slot {
        display: flex; align-items: center;
        flex: 1; min-width: 0;
      }

      /* ── Body ── */
      .snl-body { display: flex; flex: 1; overflow: hidden; min-height: 0; position: relative; }

      /* ── Sidebar ── */
      .snl-sidebar {
        display: flex; flex-direction: column;
        flex-shrink: 0; overflow: hidden;
        transition: width var(--snl-ease), transform var(--snl-ease), left var(--snl-ease);
        border-right: 1px solid var(--snl-border, #e5e9ef);
      }

      :host([collapsed]) .snl-sidebar { width: var(--snl-collapsed-w, 64px) !important; }
      :host([collapsed]) .snl-brand-text,
      :host([collapsed]) .snl-brand-name,
      :host([collapsed]) .snl-brand-pill,
      :host([collapsed]) .nav-label,
      :host([collapsed]) .snl-nav-badge,
      :host([collapsed]) .snl-nav-section,
      :host([collapsed]) .snl-profile-info,
      :host([collapsed]) .snl-profile-caret,
      :host([collapsed]) .snl-footer-info,
      :host([collapsed]) .snl-footer-actions,
      :host([collapsed]) .snl-sidebar-extra { display: none; }

      .snl-sidebar-brand {
        display: flex; align-items: center; gap: 10px;
        padding: 18px 16px; flex-shrink: 0;
        border-bottom: 1px solid var(--snl-border, #e5e9ef);
      }

      .snl-brand-logo {
        font-size: 1.1rem; line-height: 1; flex-shrink: 0;
        width: 32px; height: 32px; border-radius: 8px;
        display: inline-flex; align-items: center; justify-content: center;
        background: var(--snl-logo-bg, var(--snl-accent));
      }
      .snl-brand-text {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--snl-brand-text-color, #1d2630);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Text wordmark brand (e.g. "Able" + superscript + version pill) */
      .snl-brand-wordmark {
        display: flex; align-items: center; gap: 8px; min-width: 0;
      }
      .snl-brand-name {
        font-weight: 800; font-size: 1.35rem; line-height: 1;
        color: var(--snl-accent); letter-spacing: -0.01em;
        white-space: nowrap;
      }
      .snl-brand-name-sup {
        font-size: 0.5em; font-weight: 700;
        vertical-align: super; margin-left: 1px;
      }
      .snl-brand-pill {
        font-size: 0.6rem; font-weight: 700; line-height: 1;
        padding: 3px 7px; border-radius: 999px;
        background: var(--snl-version-bg, #d5f5e3);
        color: var(--snl-version-color, #17a862);
        white-space: nowrap; flex-shrink: 0;
      }

      /* Top profile card (bordered, sits under brand / above nav) */
      .snl-profile-card {
        display: flex; align-items: center; gap: 12px;
        margin: 14px 12px 6px; padding: 10px 12px;
        background: var(--snl-profile-bg, #ffffff);
        border: 1px solid var(--snl-border, #e5e9ef);
        border-radius: 10px; flex-shrink: 0; cursor: pointer;
        transition: border-color var(--snl-ease), box-shadow var(--snl-ease);
      }
      .snl-profile-card:hover { box-shadow: 0 2px 8px rgba(70,128,255,0.12); }
      :host([collapsed]) .snl-profile-card { justify-content: center; padding: 8px; }
      .snl-profile-avatar {
        width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
      }
      .snl-profile-avatar-img { object-fit: cover; }
      .snl-profile-avatar-init {
        background: var(--snl-accent); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.85rem; font-weight: 700;
      }
      .snl-profile-info { flex: 1; min-width: 0; }
      .snl-profile-name {
        font-size: 0.85rem; font-weight: 700;
        color: var(--snl-profile-name-color, #1d2630);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-profile-role {
        font-size: 0.72rem;
        color: var(--snl-profile-role-color, #8996a4);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-profile-caret {
        color: var(--snl-profile-role-color, #8996a4);
        flex-shrink: 0; display: flex;
      }

      /* ── Nav ── */
      .snl-nav {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 10px 8px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .nav-separator {
        height: 1px;
        background: var(--snl-separator-color, rgba(255,255,255,0.08));
        margin: 6px 12px;
      }

      .snl-nav-section {
        padding: 14px 12px 6px; font-size: 0.68rem;
        font-weight: 700; letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--snl-section-color, #8996a4);
        white-space: nowrap; overflow: hidden;
      }

      .nav-item {
        display: flex; align-items: center; gap: 10px;
        padding: 9px 12px; border-radius: 8px; margin-bottom: 2px;
        font-size: 0.875rem; font-weight: 500;
        transition: background var(--snl-ease), color var(--snl-ease), border-color var(--snl-ease);
        user-select: none; border: none; width: 100%;
        text-align: left; box-sizing: border-box; cursor: pointer;
        background: transparent; overflow: hidden;
        border-left: 4px solid transparent;
      }

      .nav-item:hover:not(.is-disabled) {
        background: var(--snl-hover-bg, rgba(255,255,255,0.07));
      }
      .nav-item.is-active {
        font-weight: 600;
        border-left-color: var(--snl-accent);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .nav-item.is-disabled { cursor: not-allowed; opacity: 0.4; }

      .nav-icon { font-size: 1.05rem; line-height: 1; flex-shrink: 0; width: 20px; text-align: center; }
      .nav-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }

      .snl-nav-badge {
        margin-left: auto; font-size: 0.65rem; font-weight: 700;
        padding: 1px 7px; border-radius: 999px; color: #fff; flex-shrink: 0;
      }

      .nav-child-indicator { margin-left: auto; font-size: 0.8rem; opacity: 0.5; }

      /* ── Sub-menu (dotted sub-items) ── */
      .snl-sub-menu { display: flex; flex-direction: column; margin: 2px 0 6px; overflow: hidden; }
      .snl-sub-menu.open { display: flex; }
      .snl-sub-menu:not(.open) { display: none; }

      .snl-sub-item {
        display: flex; align-items: center; gap: 12px;
        padding: 6px 12px 6px 30px; margin-bottom: 1px;
        border: none; background: transparent; width: 100%;
        text-align: left; box-sizing: border-box; cursor: pointer;
        border-radius: 8px; font-size: 0.83rem; font-weight: 500;
        color: var(--snl-sidebar-text, #5b6b79);
        transition: background var(--snl-ease), color var(--snl-ease);
      }
      .snl-sub-item:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }
      .snl-sub-item.is-active { color: var(--snl-accent); font-weight: 600; }
      .snl-sub-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: currentColor; opacity: 0.45; flex-shrink: 0;
      }
      .snl-sub-item.is-active .snl-sub-dot { opacity: 1; background: var(--snl-accent); }

      /* ── Sidebar Extra (slot drop zone) ── */
      .snl-sidebar-extra { padding: 8px; border-top: 1px solid var(--snl-border, #e5e9ef); flex-shrink: 0; }

      /* ── Sidebar Slot (full nav area as drop zone) ── */
      .snl-sidebar-slot {
        flex: 1; padding: 8px;
        display: flex; flex-direction: column;
      }

      /* ── Sidebar Footer (config) ── */
      .snl-sidebar-footer {
        display: flex; align-items: center; gap: 10px;
        padding: 12px 14px; flex-shrink: 0;
        border-top: 1px solid var(--snl-border, #e5e9ef);
      }

      .snl-footer-avatar {
        width: 34px; height: 34px; border-radius: 50%;
        object-fit: cover; flex-shrink: 0;
      }

      .snl-footer-initials {
        width: 34px; height: 34px; border-radius: 50%;
        background: var(--snl-accent); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
      }

      .snl-footer-info { flex: 1; overflow: hidden; }
      .snl-footer-name {
        font-size: 0.82rem; font-weight: 600;
        color: var(--snl-footer-name-color, #1d2630);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-role {
        font-size: 0.7rem;
        color: var(--snl-footer-role-color, #8996a4);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-actions { display: flex; gap: 4px; }
      .snl-footer-btn {
        cursor: pointer;
        color: var(--snl-footer-btn-color, #8996a4);
        font-size: 0.9rem; padding: 4px; border-radius: 4px; border: none; background: transparent;
      }
      .snl-footer-btn:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }

      /* ── Sidebar Footer (slot) ── */
      .snl-footer-slot { padding: 8px; border-top: 1px solid var(--snl-border, #e5e9ef); flex-shrink: 0; }

      /* ── Header Slot drop zone ── */
      .snl-header-slot-zone { flex: 1; padding: 4px 0; display: flex; align-items: center; }

      /* ── Collapse button ── */
      .snl-collapse-btn {
        display: flex; align-items: center; justify-content: center;
        padding: 10px; margin: 4px 8px 8px;
        border-radius: 6px; cursor: pointer;
        background: transparent; border: none;
        font-size: 0.9rem;
        transition: background var(--snl-ease); flex-shrink: 0;
      }
      .snl-collapse-btn:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }

      /* ── Main ── */
      .snl-main {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        min-width: 0;
        display: flex;
        flex-direction: column;
      }

      /* Avatar shared styles */
      .snl-avatar {
        width: 32px; height: 32px; border-radius: 50%;
        flex-shrink: 0;
      }
      .snl-avatar-img { object-fit: cover; }
      .snl-avatar-init {
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; color: #fff;
        background: var(--snl-accent);
      }

      /* Drop-zone hint ring (shown in slot mode) */
      .snl-drop-hint {
        flex: 1; min-height: 60px;
        border: 2px dashed var(--snl-accent, #4680ff);
        border-radius: 8px; opacity: 0.5;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 600; color: var(--snl-accent);
        margin: 4px;
      }

      /* Sidenav Modes (Side vs Over) */
      :host([sidenav-type="over"]) .snl-sidebar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 30;
        height: 100%;
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
      }

      /* Closed states */
      :host([sidenav-type="side"]:not([opened])) .snl-sidebar {
        width: 0 !important;
        border-right: none !important;
      }

      :host([sidenav-type="over"]:not([opened])) .snl-sidebar {
        transform: translateX(-100%);
        border-right: none !important;
      }

      .snl-header-toggle-mobile {
        display: none;
      }

      @media (max-width: 768px) {
        .snl-header-toggle-mobile {
          display: flex !important;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.25rem;
          padding: 8px;
          color: inherit;
        }

        /* Force overlay mode on mobile */
        .snl-sidebar {
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          z-index: 30 !important;
          height: 100% !important;
          box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15) !important;
          transform: translateX(-100%) !important;
          transition: transform var(--snl-ease) !important;
          width: 260px !important;
        }

        :host([opened]) .snl-sidebar {
          transform: translateX(0) !important;
        }

        /* Ensure main content is not indented/pushed on mobile */
        .snl-main {
          margin-left: 0 !important;
        }

        /* Make header components fit on narrow screen */
        .snl-header-brand {
          font-size: 0.85rem !important;
          gap: 6px !important;
        }
        .snl-header-search {
          max-width: 140px !important;
          padding: 5px 8px !important;
        }
        .snl-header-user {
          padding: 2px 4px !important;
        }
        .snl-user-info {
          display: none !important;
        }
      }

      .snl-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(2px);
        z-index: 25;
        transition: opacity var(--snl-ease);
      }

      .snl-floating-toggle {
        position: absolute;
        top: 20px;
        left: calc(var(--snl-sidebar-width, 260px) - 14px);
        transition: left var(--snl-ease);
        z-index: 35;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        color: var(--snl-sidebar-text, #94a3b8);
      }
      :host([collapsed]) .snl-floating-toggle {
        left: calc(var(--snl-collapsed-w, 64px) - 14px);
      }
      :host(:not([opened])) .snl-floating-toggle {
        left: -14px;
      }
      :host([sidenav-type="over"]:not([opened])) .snl-floating-toggle {
        left: 10px;
      }

      .snl-header-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        background: transparent;
        border: none;
        transition: background var(--snl-ease);
        flex-shrink: 0;
        margin-right: 8px;
      }
      .snl-header-btn:hover {
        background: rgba(0, 0, 0, 0.05);
      }
      .snl-header-btn svg {
        display: block;
      }

      slot { display: contents; }
    `
];
$([
  w({ type: String, reflect: !0 })
], x.prototype, "height", 2);
$([
  w({ type: String, attribute: "active-path" })
], x.prototype, "activePath", 2);
$([
  Zr()
], x.prototype, "_isMobile", 2);
$([
  w({ type: String, attribute: "header-mode", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Header Mode",
    fieldMappings: "headerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "headerMode", 2);
$([
  w({ type: String, attribute: "sidenav-mode", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidebar Nav Mode",
    fieldMappings: "sidenavMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "sidenavMode", 2);
$([
  w({ type: String, attribute: "footer-mode", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidebar Footer Mode",
    fieldMappings: "footerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "footerMode", 2);
$([
  w({ type: Boolean, attribute: "fixed-header" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Fixed Header",
    fieldMappings: "fixedHeader",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "fixedHeader", 2);
$([
  w({ type: Boolean, attribute: "fixed-footer" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Fixed Sidebar Footer",
    fieldMappings: "fixedFooter",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "fixedFooter", 2);
$([
  w({ type: String, attribute: "sidenav-type", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidenav Layout Mode",
    fieldMappings: "sidenavType",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Side (Standard)", value: "side" },
      { label: "Over (Overlay/Drawer)", value: "over" }
    ]
  })
], x.prototype, "sidenavType", 2);
$([
  w({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidenav Opened",
    fieldMappings: "opened",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "opened", 2);
$([
  w({ type: Boolean, attribute: "has-backdrop", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Has Backdrop (Over mode)",
    fieldMappings: "hasBackdrop",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "hasBackdrop", 2);
$([
  w({ type: String, attribute: "collapse-btn-position", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Collapse Button Position",
    fieldMappings: "collapseBtnPosition",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Sidebar Bottom", value: "sidebar-bottom" },
      { label: "Sidebar Top", value: "sidebar-top" },
      { label: "Header Left (Hamburger)", value: "header-left" },
      { label: "Header Right (Hamburger)", value: "header-right" },
      { label: "Floating (Edge)", value: "floating" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "collapseBtnPosition", 2);
$([
  w({ type: String, attribute: "collapse-btn-icon", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Collapse Button Icon",
    fieldMappings: "collapseBtnIcon",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Hamburger (☰)", value: "hamburger" },
      { label: "Chevron (◀ / ▶)", value: "chevron" },
      { label: "Arrow (← / →)", value: "arrow" },
      { label: "Menu Dots (⋮)", value: "dots" }
    ]
  })
], x.prototype, "collapseBtnIcon", 2);
$([
  w({ type: String, attribute: "nav-items" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Nav Items (JSON)",
    fieldMappings: "navItems",
    categoryLabel: "Navigation",
    placeholderText: nt,
    initialValue: nt
  })
], x.prototype, "navItems", 2);
$([
  w({ type: Number, reflect: !0, attribute: "active-item" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Active Item Index",
    fieldMappings: "activeItem",
    categoryLabel: "Navigation",
    initialValue: 0
  })
], x.prototype, "activeItem", 2);
$([
  w({ type: String, attribute: "header-config" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Header Config (JSON)",
    fieldMappings: "headerConfig",
    categoryLabel: "Header",
    placeholderText: at,
    initialValue: at
  })
], x.prototype, "headerConfig", 2);
$([
  w({ type: String, attribute: "sidebar-footer-config" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Sidebar Footer Config (JSON)",
    fieldMappings: "sidebarFooterConfig",
    categoryLabel: "Sidebar Footer",
    placeholderText: st,
    initialValue: st
  })
], x.prototype, "sidebarFooterConfig", 2);
$([
  w({ type: String, attribute: "app-name" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App / Brand Name",
    fieldMappings: "appName",
    categoryLabel: "Branding"
  })
], x.prototype, "appName", 2);
$([
  w({ type: String, attribute: "app-subtitle" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App Subtitle",
    fieldMappings: "appSubtitle",
    categoryLabel: "Branding"
  })
], x.prototype, "appSubtitle", 2);
$([
  w({ type: String, attribute: "app-logo" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Logo Emoji / Character",
    fieldMappings: "appLogo",
    categoryLabel: "Branding"
  })
], x.prototype, "appLogo", 2);
$([
  w({ type: String, attribute: "header-title" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Title (overrides brand name in header bar)",
    fieldMappings: "headerTitle",
    categoryLabel: "Branding"
  })
], x.prototype, "headerTitle", 2);
$([
  w({ type: String, attribute: "header-logo" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Logo (overrides app logo in header bar)",
    fieldMappings: "headerLogo",
    categoryLabel: "Branding"
  })
], x.prototype, "headerLogo", 2);
$([
  w({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidebar Collapsed",
    fieldMappings: "collapsed",
    categoryLabel: "Layout"
  })
], x.prototype, "collapsed", 2);
$([
  w({ type: String, attribute: "sidebar-width" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Sidebar Width (e.g. 260px)",
    fieldMappings: "sidebarWidth",
    categoryLabel: "Layout"
  })
], x.prototype, "sidebarWidth", 2);
$([
  w({ type: String, attribute: "header-height" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Height (e.g. 60px)",
    fieldMappings: "headerHeight",
    categoryLabel: "Layout"
  })
], x.prototype, "headerHeight", 2);
$([
  w({ type: String, attribute: "collapsed-width" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Collapsed Sidebar Width (e.g. 64px)",
    fieldMappings: "collapsedWidth",
    categoryLabel: "Layout"
  })
], x.prototype, "collapsedWidth", 2);
$([
  w({ type: Boolean, attribute: "show-collapse-btn", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Collapse Button",
    fieldMappings: "showCollapseBtn",
    categoryLabel: "Layout"
  })
], x.prototype, "showCollapseBtn", 2);
$([
  w({ type: Boolean, attribute: "show-theme-toggle", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Theme Toggle (Dark/Light)",
    fieldMappings: "showThemeToggle",
    categoryLabel: "Header"
  })
], x.prototype, "showThemeToggle", 2);
$([
  w({ type: String, attribute: "data-theme", reflect: !0 })
], x.prototype, "themeMode", 2);
$([
  w({ type: String, attribute: "sidebar-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarBg", 2);
$([
  w({ type: String, attribute: "sidebar-text" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarText", 2);
$([
  w({ type: String, attribute: "sidebar-active-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarActiveBg", 2);
$([
  w({ type: String, attribute: "sidebar-active-text" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarActiveText", 2);
$([
  w({ type: String, attribute: "accent-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
], x.prototype, "accentColor", 2);
$([
  w({ type: String, attribute: "header-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerBg", 2);
$([
  w({ type: String, attribute: "header-text" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerText",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerText", 2);
$([
  w({ type: String, attribute: "header-border" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerBorder", 2);
$([
  w({ type: String, attribute: "main-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "mainBg", 2);
$([
  w({ type: String, attribute: "main-padding" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Main Area Padding (e.g. 24px)",
    fieldMappings: "mainPadding",
    categoryLabel: "Appearance"
  })
], x.prototype, "mainPadding", 2);
$([
  w({ type: String, attribute: "footer-action-type" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Footer Action Type",
    fieldMappings: "footerActionType",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "Settings/Logout Buttons", value: "buttons" },
      { label: "Chevron Dropdown", value: "dropdown" },
      { label: "None", value: "none" }
    ]
  })
], x.prototype, "footerActionType", 2);
$([
  w({ type: String, attribute: "profile-position", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Profile Card Position",
    fieldMappings: "profilePosition",
    categoryLabel: "Sidebar Footer",
    optionItems: [
      { label: "Top (below brand)", value: "top" },
      { label: "Bottom (footer)", value: "bottom" }
    ]
  })
], x.prototype, "profilePosition", 2);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
], x.prototype, "onOpenedChange", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
], x.prototype, "onNavChange", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
], x.prototype, "onSidebarToggle", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
], x.prototype, "onLogout", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Profile Click", eventTrigger: "profileClick", categoryLabel: "Triggers" })
], x.prototype, "onProfileClick", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
], x.prototype, "onSettingsClick", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Search", eventTrigger: "search", categoryLabel: "Triggers" })
], x.prototype, "onSearch", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
], x.prototype, "onThemeChange", 1);
$([
  v({ attributeType: f.EVENT, displayLabel: "On Notification Click", eventTrigger: "notificationClick", categoryLabel: "Triggers" })
], x.prototype, "onNotificationClick", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Open Sidenav", categoryLabel: "Actions" })
], x.prototype, "open", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Close Sidenav", categoryLabel: "Actions" })
], x.prototype, "close", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Toggle Sidenav Opened", categoryLabel: "Actions" })
], x.prototype, "toggle", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Toggle Sidebar Collapse", categoryLabel: "Actions" })
], x.prototype, "toggleSidebar", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Expand Sidebar", categoryLabel: "Actions" })
], x.prototype, "expandSidebar", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Collapse Sidebar", categoryLabel: "Actions" })
], x.prototype, "collapseSidebar", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
], x.prototype, "navigateTo", 1);
$([
  v({ attributeType: f.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
], x.prototype, "toggleTheme", 1);
x = $([
  Er({
    name: "zero-sidenav-layout",
    version: "1.1.0",
    title: "Sidebar Layout",
    elementSelector: "zero-sidenav-layout",
    group: "Layout",
    iconName: "sidenav-layout-icon.png",
    layoutKind: "panel",
    environment: ["page"]
  }),
  Gr("zero-sidenav-layout"),
  kr()
], x);
export {
  at as DEFAULT_HEADER_CONFIG_JSON,
  nt as DEFAULT_NAV_ITEMS_JSON,
  ai as DEFAULT_NAV_ITEMS_LIST,
  st as DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
  x as ZeroSidenavLayout
};
