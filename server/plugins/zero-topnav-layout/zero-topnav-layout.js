var Dt = Object.defineProperty;
var Vt = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var at = (r, e, t) => Vt(r, typeof e != "symbol" ? e + "" : e, t);
var st = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var lt;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof st == "object" ? st : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(f, $) {
      return function(x, b) {
        Object.defineProperty(f, x, { configurable: !0, writable: !0, value: b }), $ && $(x, b);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function c() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function v() {
      return l() || c();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, $ = !v && !f, x = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return Pe(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Pe({ __proto__: null });
      } : function() {
        return Pe({});
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
    }, b = Object.getPrototypeOf(Function), k = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ht(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : It(), j = typeof WeakMap == "function" ? WeakMap : Ut(), W = o ? Symbol.for("@reflect-metadata:registry") : void 0, K = Nt(), de = Rt(K);
    function we(i, a, s, u) {
      if (m(s)) {
        if (!Ke(i))
          throw new TypeError();
        if (!Qe(a))
          throw new TypeError();
        return V(i, a);
      } else {
        if (!Ke(i))
          throw new TypeError();
        if (!P(a))
          throw new TypeError();
        if (!P(u) && !m(u) && !Q(u))
          throw new TypeError();
        return Q(u) && (u = void 0), s = D(s), Ce(i, a, s, u);
      }
    }
    e("decorate", we);
    function xe(i, a) {
      function s(u, g) {
        if (!P(u))
          throw new TypeError();
        if (!m(g) && !Ot(g))
          throw new TypeError();
        Ye(i, a, u, g);
      }
      return s;
    }
    e("metadata", xe);
    function $e(i, a, s, u) {
      if (!P(s))
        throw new TypeError();
      return m(u) || (u = D(u)), Ye(i, a, s, u);
    }
    e("defineMetadata", $e);
    function Te(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Se(i, a, s);
    }
    e("hasMetadata", Te);
    function Ee(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Me(i, a, s);
    }
    e("hasOwnMetadata", Ee);
    function Ae(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Ge(i, a, s);
    }
    e("getMetadata", Ae);
    function he(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Fe(i, a, s);
    }
    e("getOwnMetadata", he);
    function pe(i, a) {
      if (!P(i))
        throw new TypeError();
      return m(a) || (a = D(a)), Xe(i, a);
    }
    e("getMetadataKeys", pe);
    function fe(i, a) {
      if (!P(i))
        throw new TypeError();
      return m(a) || (a = D(a)), qe(i, a);
    }
    e("getOwnMetadataKeys", fe);
    function ye(i, a, s) {
      if (!P(a))
        throw new TypeError();
      if (m(s) || (s = D(s)), !P(a))
        throw new TypeError();
      m(s) || (s = D(s));
      var u = re(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(i, a, s);
    }
    e("deleteMetadata", ye);
    function V(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var u = i[s], g = u(a);
        if (!m(g) && !Q(g)) {
          if (!Qe(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function Ce(i, a, s, u) {
      for (var g = i.length - 1; g >= 0; --g) {
        var R = i[g], N = R(a, s, u);
        if (!m(N) && !Q(N)) {
          if (!P(N))
            throw new TypeError();
          u = N;
        }
      }
      return u;
    }
    function Se(i, a, s) {
      var u = Me(i, a, s);
      if (u)
        return !0;
      var g = Oe(a);
      return Q(g) ? !1 : Se(i, g, s);
    }
    function Me(i, a, s) {
      var u = re(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ze(u.OrdinaryHasOwnMetadata(i, a, s));
    }
    function Ge(i, a, s) {
      var u = Me(i, a, s);
      if (u)
        return Fe(i, a, s);
      var g = Oe(a);
      if (!Q(g))
        return Ge(i, g, s);
    }
    function Fe(i, a, s) {
      var u = re(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(i, a, s);
    }
    function Ye(i, a, s, u) {
      var g = re(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(i, a, s, u);
    }
    function Xe(i, a) {
      var s = qe(i, a), u = Oe(i);
      if (u === null)
        return s;
      var g = Xe(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var R = new I(), N = [], _ = 0, d = s; _ < d.length; _++) {
        var h = d[_], p = R.has(h);
        p || (R.add(h), N.push(h));
      }
      for (var y = 0, w = g; y < w.length; y++) {
        var h = w[y], p = R.has(h);
        p || (R.add(h), N.push(h));
      }
      return N;
    }
    function qe(i, a) {
      var s = re(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Je(i) {
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
    function Q(i) {
      return i === null;
    }
    function Ct(i) {
      return typeof i == "symbol";
    }
    function P(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, a) {
      switch (Je(i)) {
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
      var s = "string", u = et(i, l);
      if (u !== void 0) {
        var g = u.call(i, s);
        if (P(g))
          throw new TypeError();
        return g;
      }
      return Mt(i);
    }
    function Mt(i, a) {
      var s, u;
      {
        var g = i.toString;
        if (ge(g)) {
          var u = g.call(i);
          if (!P(u))
            return u;
        }
        var s = i.valueOf;
        if (ge(s)) {
          var u = s.call(i);
          if (!P(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ze(i) {
      return !!i;
    }
    function kt(i) {
      return "" + i;
    }
    function D(i) {
      var a = St(i);
      return Ct(a) ? a : kt(a);
    }
    function Ke(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ge(i) {
      return typeof i == "function";
    }
    function Qe(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Je(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ke(i, a) {
      return i === a || i !== i && a !== a;
    }
    function et(i, a) {
      var s = i[a];
      if (s != null) {
        if (!ge(s))
          throw new TypeError();
        return s;
      }
    }
    function tt(i) {
      var a = et(i, c);
      if (!ge(a))
        throw new TypeError();
      var s = a.call(i);
      if (!P(s))
        throw new TypeError();
      return s;
    }
    function rt(i) {
      return i.value;
    }
    function nt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function it(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Oe(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || a !== b)
        return a;
      var s = i.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === i ? a : g;
    }
    function Pt() {
      var i;
      !m(W) && typeof t.Reflect < "u" && !(W in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Lt(t.Reflect));
      var a, s, u, g = new j(), R = {
        registerProvider: N,
        getProvider: d,
        setProvider: p
      };
      return R;
      function N(y) {
        if (!Object.isExtensible(R))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          case m(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            u === void 0 && (u = new I()), u.add(y);
            break;
        }
      }
      function _(y, w) {
        if (!m(a)) {
          if (a.isProviderFor(y, w))
            return a;
          if (!m(s)) {
            if (s.isProviderFor(y, w))
              return a;
            if (!m(u))
              for (var E = tt(u); ; ) {
                var M = nt(E);
                if (!M)
                  return;
                var z = rt(M);
                if (z.isProviderFor(y, w))
                  return it(E), z;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, w))
          return i;
      }
      function d(y, w) {
        var E = g.get(y), M;
        return m(E) || (M = E.get(w)), m(M) && (M = _(y, w), m(M) || (m(E) && (E = new k(), g.set(y, E)), E.set(w, M))), M;
      }
      function h(y) {
        if (m(y))
          throw new TypeError();
        return a === y || s === y || !m(u) && u.has(y);
      }
      function p(y, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var M = d(y, w);
        if (M !== E) {
          if (!m(M))
            return !1;
          var z = g.get(y);
          m(z) && (z = new k(), g.set(y, z)), z.set(w, E);
        }
        return !0;
      }
    }
    function Nt() {
      var i;
      return !m(W) && P(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[W]), m(i) && (i = Pt()), !m(W) && P(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Rt(i) {
      var a = new j(), s = {
        isProviderFor: function(h, p) {
          var y = a.get(h);
          return m(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: N,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: R,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return K.registerProvider(s), s;
      function u(h, p, y) {
        var w = a.get(h), E = !1;
        if (m(w)) {
          if (!y)
            return;
          w = new k(), a.set(h, w), E = !0;
        }
        var M = w.get(p);
        if (m(M)) {
          if (!y)
            return;
          if (M = new k(), w.set(p, M), !i.setProvider(h, p, s))
            throw w.delete(p), E && a.delete(h), new Error("Wrong provider for target.");
        }
        return M;
      }
      function g(h, p, y) {
        var w = u(
          p,
          y,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ze(w.has(h));
      }
      function R(h, p, y) {
        var w = u(
          p,
          y,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(h);
      }
      function N(h, p, y, w) {
        var E = u(
          y,
          w,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function _(h, p) {
        var y = [], w = u(
          h,
          p,
          /*Create*/
          !1
        );
        if (m(w))
          return y;
        for (var E = w.keys(), M = tt(E), z = 0; ; ) {
          var ot = nt(M);
          if (!ot)
            return y.length = z, y;
          var zt = rt(ot);
          try {
            y[z] = zt;
          } catch (jt) {
            try {
              it(M);
            } finally {
              throw jt;
            }
          }
          z++;
        }
      }
      function d(h, p, y) {
        var w = u(
          p,
          y,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = a.get(p);
          m(E) || (E.delete(y), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Lt(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, u = i.getOwnMetadata, g = i.getOwnMetadataKeys, R = i.deleteMetadata, N = new j(), _ = {
        isProviderFor: function(d, h) {
          var p = N.get(d);
          return !m(p) && p.has(h) ? !0 : g(d, h).length ? (m(p) && (p = new I(), N.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: R
      };
      return _;
    }
    function re(i, a, s) {
      var u = K.getProvider(i, a);
      if (!m(u))
        return u;
      if (s) {
        if (K.setProvider(i, a, de))
          return de;
        throw new Error("Illegal state.");
      }
    }
    function Ht() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function _(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[c] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
          }, _;
        }()
      ), u = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(d, h) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, _.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, y = h + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ke(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, _.prototype.values = function() {
            return new s(this._keys, this._values, R);
          }, _.prototype.entries = function() {
            return new s(this._keys, this._values, N);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[c] = function() {
            return this.entries();
          }, _.prototype._find = function(d, h) {
            if (!ke(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ke(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function g(_, d) {
        return _;
      }
      function R(_, d) {
        return d;
      }
      function N(_, d) {
        return [_, d];
      }
    }
    function It() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new k();
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
          }, a.prototype[c] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Ut() {
      var i = 16, a = x.create(), s = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(h) {
            var p = g(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? x.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = g(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? x.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var y = g(
              h,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = g(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + _();
        while (x.has(a, d));
        return a[d] = !0, d;
      }
      function g(d, h) {
        if (!n.call(d, s)) {
          if (!h)
            return;
          Object.defineProperty(d, s, { value: x.create() });
        }
        return d[s];
      }
      function R(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function N(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : R(h, d), h;
        }
        return R(new Array(d), d);
      }
      function _() {
        var d = N(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var y = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(lt || (lt = {}));
function Bt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Wt(r) {
  return function(e) {
    if (Bt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Gt(r) {
  return Wt(r);
}
function Ft(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        at(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const x = new CSSStyleSheet(), b = ($ = l.sheet) == null ? void 0 : $.cssRules;
          b && (Array.from(b).forEach((k) => x.insertRule(k.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, x]);
        } else if (l) {
          const x = l.cloneNode(!0);
          f.appendChild(x);
        }
        c.forEach((x) => {
          const b = x.cloneNode(!0);
          f.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Yt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Xt(r) {
  return function(e, t) {
    try {
      Yt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function O(r) {
  return Xt(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var S;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(S || (S = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve = globalThis, je = ve.ShadowRoot && (ve.ShadyCSS === void 0 || ve.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, De = Symbol(), ct = /* @__PURE__ */ new WeakMap();
let xt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== De) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (je && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = ct.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ct.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new xt(typeof r == "string" ? r : r + "", void 0, De), Jt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new xt(t, r, De);
}, Zt = (r, e) => {
  if (je) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ve.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, ut = je ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Kt, defineProperty: Qt, getOwnPropertyDescriptor: er, getOwnPropertyNames: tr, getOwnPropertySymbols: rr, getPrototypeOf: nr } = Object, F = globalThis, dt = F.trustedTypes, ir = dt ? dt.emptyScript : "", Ne = F.reactiveElementPolyfillSupport, ie = (r, e) => r, me = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? ir : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ve = (r, e) => !Kt(r, e), ht = { attribute: !0, type: String, converter: me, reflect: !1, useDefault: !1, hasChanged: Ve };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), F.litPropertyMetadata ?? (F.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ee = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ht) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Qt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = er(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: o, set(c) {
      const v = o == null ? void 0 : o.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ht;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ie("elementProperties"))) return;
    const e = nr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ie("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ie("properties"))) {
      const t = this.properties, n = [...tr(t), ...rr(t)];
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
      for (const o of n) t.unshift(ut(o));
    } else e !== void 0 && t.push(ut(e));
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
    return Zt(e, this.constructor.elementStyles), e;
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
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : me).toAttribute(t, n.type);
      this._$Em = e, c == null ? this.removeAttribute(o) : this.setAttribute(o, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const v = n.getPropertyOptions(o), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : me;
      this._$Em = o;
      const $ = f.fromAttribute(t, v.type);
      this[o] = $ ?? ((c = this._$Ej) == null ? void 0 : c.get(o)) ?? $, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var c;
    if (e !== void 0) {
      const v = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = v.getPropertyOptions(e)), !((n.hasChanged ?? Ve)(l, t) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(v._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, c] of o) {
        const { wrapped: v } = c, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, c, f);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
ee.elementStyles = [], ee.shadowRootOptions = { mode: "open" }, ee[ie("elementProperties")] = /* @__PURE__ */ new Map(), ee[ie("finalized")] = /* @__PURE__ */ new Map(), Ne == null || Ne({ ReactiveElement: ee }), (F.reactiveElementVersions ?? (F.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, pt = (r) => r, be = oe.trustedTypes, ft = be ? be.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, $t = "$lit$", G = `lit$${Math.random().toFixed(9).slice(2)}$`, Tt = "?" + G, or = `<${Tt}>`, J = document, se = () => J.createComment(""), le = (r) => r === null || typeof r != "object" && typeof r != "function", Be = Array.isArray, ar = (r) => Be(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Re = `[ 	
\f\r]`, ne = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, yt = /-->/g, gt = />/g, Y = RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), vt = /'/g, mt = /"/g, Et = /^(?:script|style|textarea|title)$/i, sr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), U = sr(1), Z = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), bt = /* @__PURE__ */ new WeakMap(), X = J.createTreeWalker(J, 129);
function At(r, e) {
  if (!Be(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ft !== void 0 ? ft.createHTML(e) : e;
}
const lr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = ne;
  for (let v = 0; v < t; v++) {
    const f = r[v];
    let $, x, b = -1, k = 0;
    for (; k < f.length && (c.lastIndex = k, x = c.exec(f), x !== null); ) k = c.lastIndex, c === ne ? x[1] === "!--" ? c = yt : x[1] !== void 0 ? c = gt : x[2] !== void 0 ? (Et.test(x[2]) && (o = RegExp("</" + x[2], "g")), c = Y) : x[3] !== void 0 && (c = Y) : c === Y ? x[0] === ">" ? (c = o ?? ne, b = -1) : x[1] === void 0 ? b = -2 : (b = c.lastIndex - x[2].length, $ = x[1], c = x[3] === void 0 ? Y : x[3] === '"' ? mt : vt) : c === mt || c === vt ? c = Y : c === yt || c === gt ? c = ne : (c = Y, o = void 0);
    const I = c === Y && r[v + 1].startsWith("/>") ? " " : "";
    l += c === ne ? f + or : b >= 0 ? (n.push($), f.slice(0, b) + $t + f.slice(b) + G + I) : f + G + (b === -2 ? v : I);
  }
  return [At(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ce {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, c = 0;
    const v = e.length - 1, f = this.parts, [$, x] = lr(e, t);
    if (this.el = ce.createElement($, n), X.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = X.nextNode()) !== null && f.length < v; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith($t)) {
          const k = x[c++], I = o.getAttribute(b).split(G), j = /([.?@])?(.*)/.exec(k);
          f.push({ type: 1, index: l, name: j[2], strings: I, ctor: j[1] === "." ? ur : j[1] === "?" ? dr : j[1] === "@" ? hr : _e }), o.removeAttribute(b);
        } else b.startsWith(G) && (f.push({ type: 6, index: l }), o.removeAttribute(b));
        if (Et.test(o.tagName)) {
          const b = o.textContent.split(G), k = b.length - 1;
          if (k > 0) {
            o.textContent = be ? be.emptyScript : "";
            for (let I = 0; I < k; I++) o.append(b[I], se()), X.nextNode(), f.push({ type: 2, index: ++l });
            o.append(b[k], se());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Tt) f.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(G, b + 1)) !== -1; ) f.push({ type: 7, index: l }), b += G.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = J.createElement("template");
    return n.innerHTML = e, n;
  }
}
function te(r, e, t = r, n) {
  var c, v;
  if (e === Z) return e;
  let o = n !== void 0 ? (c = t._$Co) == null ? void 0 : c[n] : t._$Cl;
  const l = le(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((v = o == null ? void 0 : o._$AO) == null || v.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = te(r, o._$AS(r, e.values), o, n)), e;
}
class cr {
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? J).importNode(t, !0);
    X.currentNode = o;
    let l = X.nextNode(), c = 0, v = 0, f = n[0];
    for (; f !== void 0; ) {
      if (c === f.index) {
        let $;
        f.type === 2 ? $ = new ue(l, l.nextSibling, this, e) : f.type === 1 ? $ = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && ($ = new pr(l, this, e)), this._$AV.push($), f = n[++v];
      }
      c !== (f == null ? void 0 : f.index) && (l = X.nextNode(), c++);
    }
    return X.currentNode = J, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ue {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = te(this, e, t), le(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ar(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== A && le(this._$AH) ? this._$AA.nextSibling.data = e : this.T(J.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ce.createElement(At(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const c = new cr(o, this), v = c.u(this.options);
      c.p(t), this.T(v), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = bt.get(e.strings);
    return t === void 0 && bt.set(e.strings, t = new ce(e)), t;
  }
  k(e) {
    Be(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ue(this.O(se()), this.O(se()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = pt(e).nextSibling;
      pt(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class _e {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = A;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = te(this, e, t, 0), c = !le(e) || e !== this._$AH && e !== Z, c && (this._$AH = e);
    else {
      const v = e;
      let f, $;
      for (e = l[0], f = 0; f < l.length - 1; f++) $ = te(this, v[n + f], t, f), $ === Z && ($ = this._$AH[f]), c || (c = !le($) || $ !== this._$AH[f]), $ === A ? e = A : e !== A && (e += ($ ?? "") + l[f + 1]), this._$AH[f] = $;
    }
    c && !o && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ur extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
}
class dr extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== A);
  }
}
class hr extends _e {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = te(this, e, t, 0) ?? A) === Z) return;
    const n = this._$AH, o = e === A && n !== A || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== A && (n === A || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class pr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    te(this, e);
  }
}
const Le = oe.litHtmlPolyfillSupport;
Le == null || Le(ce, ue), (oe.litHtmlVersions ?? (oe.litHtmlVersions = [])).push("3.3.3");
const fr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ue(e.insertBefore(se(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
let ae = class extends ee {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = fr(t, this.renderRoot, this.renderOptions);
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
    return Z;
  }
};
var wt;
ae._$litElement$ = !0, ae.finalized = !0, (wt = q.litElementHydrateSupport) == null || wt.call(q, { LitElement: ae });
const He = q.litElementPolyfillSupport;
He == null || He({ LitElement: ae });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yr = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gr = { attribute: !0, type: String, converter: me, reflect: !1, hasChanged: Ve }, vr = (r = gr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: c } = t;
    return { set(v) {
      const f = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(c, f, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(c, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: c } = t;
    return function(v) {
      const f = this[c];
      e.call(this, v), this.requestUpdate(c, f, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function H(r) {
  return (e, t) => typeof t == "object" ? vr(r, e, t) : ((n, o, l) => {
    const c = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function mr(r) {
  return H({ ...r, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const br = { CHILD: 2 }, _r = (r) => (...e) => ({ _$litDirective$: r, values: e });
class wr {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ze extends wr {
  constructor(e) {
    if (super(e), this.it = A, e.type !== br.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === A || e == null) return this._t = void 0, this.it = e;
    if (e === Z) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const t = [e];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
ze.directiveName = "unsafeHTML", ze.resultType = 1;
const xr = _r(ze);
var $r = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, C = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? Tr(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (o = (n ? c(e, t, o) : c(o)) || o);
  return n && o && $r(e, t, o), o;
};
const We = [
  { label: "Dashboard", href: "/dashboard", icon: "🏠" },
  { label: "Reports", href: "/reports", icon: "📊" },
  { label: "Team", href: "/team", icon: "👥" },
  { label: "Settings", href: "/settings", icon: "⚙️" }
], Ie = JSON.stringify(We, null, 2);
function Ue(r) {
  if (Array.isArray(r)) return r;
  if (typeof r == "string")
    try {
      const e = JSON.parse(r);
      if (Array.isArray(e)) return e;
    } catch {
    }
  return We;
}
function _t(r) {
  return !!r && (r.startsWith("<") || r.startsWith("http") || r.startsWith("/") || r.includes("."));
}
function B(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Er = {
  kind: "panel",
  slots: [
    { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["zero-router-outlet", "page-root", "zero-section"] },
    { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
  ],
  templateHtml: "<div style='display:flex;flex-direction:column;width:100%;height:600px;border:1px solid #e5e9ef;border-radius:12px;overflow:hidden;font-family:system-ui,sans-serif;'><div style='display:flex;align-items:center;gap:16px;height:60px;padding:0 20px;background:#ffffff;border-bottom:1px solid #e5e9ef;'><strong style='color:#4680ff;'>My App</strong><span style='flex:1;'></span></div><div style='flex:1;padding:24px;background:#f4f7fa;'><zero-studio-slot name='outlet'></zero-studio-slot><zero-studio-slot name='main'></zero-studio-slot></div></div>",
  badges: ["Top Nav Layout"],
  emptyText: "Nested pages render in the outlet below the top bar"
};
let T = class extends ae {
  constructor() {
    super(...arguments), this.appName = "My App", this.appLogo = "🚀", this.navItems = Ie, this.showSearch = !0, this.showNotifications = !0, this.notificationCount = 3, this.showThemeToggle = !0, this.userName = "Jane Doe", this.userRole = "Administrator", this.avatarUrl = "", this.fixedHeader = !0, this.maxWidth = "1280px", this.accentColor = "#4680ff", this.activeItem = 0, this.themeMode = "light";
  }
  /**
   * Neutral, studio-ready default applied when the shell is first dropped onto a
   * page: a professional, brand-agnostic top-nav shell whose content area holds a
   * single `<zero-router-outlet>` so studio pages nest below the bar. No
   * domain-specific demo content is injected.
   */
  static getTransformOnDrop() {
    return {
      componentName: "zero-topnav-layout",
      props: {
        appName: "My App",
        appLogo: "🚀",
        navItems: Ie,
        showSearch: !0,
        showNotifications: !0,
        notificationCount: 3,
        showThemeToggle: !0,
        userName: "Jane Doe",
        userRole: "Administrator",
        avatarUrl: "",
        fixedHeader: !0,
        maxWidth: "1280px",
        accentColor: "#4680ff"
      },
      children: [
        {
          componentName: "zero-router-outlet",
          version: "1.0.0",
          slot: "outlet",
          props: {},
          children: []
        }
      ]
    };
  }
  /**
   * Plain settings schema the studio renders as a template-config form.
   * Returns only plain objects (no external imports). Because the topnav CONSUMES
   * flat props, each `name` here equals a same-named `@RendererAttribute` prop —
   * the studio's flat passthrough needs NO composition. Every field is defaulted.
   *
   * control ∈ "text" | "number" | "boolean" | "select" | "color" | "list"
   * (`list` edits an array of objects via typed `itemShape` sub-fields — no JSON).
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
        defaultValue: We,
        itemShape: [
          { name: "label", label: "Label", control: "text", defaultValue: "" },
          { name: "href", label: "Link (href)", control: "text", defaultValue: "" },
          { name: "icon", label: "Icon (emoji)", control: "text", defaultValue: "" }
        ]
      },
      // ── Header ──
      { name: "showSearch", label: "Show Search", control: "boolean", group: "Header", defaultValue: !0 },
      { name: "showNotifications", label: "Show Notifications", control: "boolean", group: "Header", defaultValue: !0 },
      { name: "notificationCount", label: "Notification Count", control: "number", group: "Header", defaultValue: 3 },
      { name: "showThemeToggle", label: "Show Theme Toggle", control: "boolean", group: "Header", defaultValue: !0 },
      { name: "userName", label: "User Name", control: "text", group: "Header", defaultValue: "Jane Doe" },
      { name: "userRole", label: "User Role", control: "text", group: "Header", defaultValue: "Administrator" },
      { name: "avatarUrl", label: "Avatar URL", control: "text", group: "Header", defaultValue: "" },
      // ── Layout ──
      { name: "fixedHeader", label: "Fixed Header", control: "boolean", group: "Layout", defaultValue: !0 },
      { name: "maxWidth", label: "Content Max Width (e.g. 1280px or 100%)", control: "text", group: "Layout", defaultValue: "1280px" },
      // ── Theme ──
      { name: "accentColor", label: "Accent Color", control: "color", group: "Theme", defaultValue: "#4680ff" }
    ];
  }
  get onNavChange() {
    return "navchange";
  }
  get onThemeChange() {
    return "themechange";
  }
  handleBellClick(r = this.notificationCount) {
    this.dispatchEvent(new CustomEvent("notification-click", {
      detail: { count: r },
      bubbles: !0,
      composed: !0
    }));
  }
  handleProfileClick(r = "header", e = { userName: this.userName, userRole: this.userRole }) {
    this.dispatchEvent(new CustomEvent("profile-click", {
      detail: { origin: r, ...e },
      bubbles: !0,
      composed: !0
    }));
  }
  handleHeaderAction(r = "search") {
    this.dispatchEvent(new CustomEvent("header-action", {
      detail: { action: r },
      bubbles: !0,
      composed: !0
    }));
  }
  toggleTheme() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark", this.setAttribute("data-theme", this.themeMode), this.dispatchEvent(new CustomEvent("themechange", { detail: { theme: this.themeMode }, bubbles: !0, composed: !0 }));
  }
  navigateTo(r) {
    const e = Ue(this.navItems)[r];
    this.activeItem = r, this.dispatchEvent(new CustomEvent("navchange", { detail: { activeItem: r, item: e }, bubbles: !0, composed: !0 }));
  }
  // ─── Internal handlers ─────────────────────────────────────────────────────
  handleNavClick(r, e, t) {
    t.preventDefault(), this.navigateTo(r);
    const n = e.href ?? "";
    n && (n.startsWith("/") ? this.dispatchEvent(new CustomEvent("route-change", { detail: { path: n }, bubbles: !0, composed: !0 })) : window.open(n, "_self"));
  }
  // ─── getStudioTemplate ───────────────────────────────────────────────────────
  static getStudioTemplate(r) {
    var he, pe, fe, ye;
    if (!r) return Er;
    const e = r.props ?? {}, t = String(e.appName ?? ((pe = (he = r.studio) == null ? void 0 : he.props) == null ? void 0 : pe.appName) ?? "My App"), n = String(e.appLogo ?? ((ye = (fe = r.studio) == null ? void 0 : fe.props) == null ? void 0 : ye.appLogo) ?? "🚀"), o = String(e.accentColor ?? "#4680ff"), l = String(e.maxWidth ?? "1280px"), c = e.showSearch !== !1, v = e.showNotifications !== !1, f = Number(e.notificationCount ?? 3), $ = e.showThemeToggle !== !1, x = String(e.userName ?? "Jane Doe"), b = String(e.userRole ?? "Administrator"), k = String(e.avatarUrl ?? ""), I = Number(e.activeItem ?? 0), j = Ue(e.navItems ?? Ie), W = _t(n) ? n.startsWith("<") ? n : `<img src="${B(n)}" style="width:26px;height:26px;object-fit:contain;border-radius:6px;" />` : `<span style="font-size:1.3rem;">${B(n)}</span>`, K = j.filter((V) => !!V.label).map((V, Ce) => `<span style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;font-size:0.9rem;font-weight:600;white-space:nowrap;${Ce === I ? `background:${o}22;color:${o};` : "color:#1d2630;"}">${V.icon ? `${B(V.icon)} ` : ""}${B(V.label ?? "")}</span>`).join(""), de = c ? '<div style="display:flex;align-items:center;gap:8px;height:38px;padding:0 12px;border-radius:10px;background:#f1f4f8;color:#8996a4;font-size:0.85rem;min-width:160px;">🔍 <span>Search</span></div>' : "", we = v ? `<div style="position:relative;width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;color:#1d2630;">🔔${f > 0 ? `<span style="position:absolute;top:2px;right:2px;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:${o};color:#fff;font-size:0.6rem;font-weight:700;line-height:16px;text-align:center;box-sizing:border-box;">${f}</span>` : ""}</div>` : "", xe = $ ? '<div style="width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;color:#1d2630;">🌗</div>' : "", $e = (x || "U").trim().split(/\s+/).map((V) => V[0]).slice(0, 2).join("").toUpperCase(), Te = k ? `<img src="${B(k)}" style="width:100%;height:100%;object-fit:cover;" />` : B($e), Ee = `<div style="display:flex;align-items:center;gap:10px;padding:4px 8px 4px 4px;border-radius:999px;">
        <span style="width:34px;height:34px;border-radius:50%;background:${o};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;overflow:hidden;">${Te}</span>
        <span style="display:flex;flex-direction:column;line-height:1.1;">
          <span style="font-size:0.82rem;font-weight:700;color:#1d2630;">${B(x)}</span>
          <span style="font-size:0.68rem;color:#8996a4;">${B(b)}</span>
        </span>
      </div>`, Ae = `
      <div style="display:flex;flex-direction:column;width:100%;height:600px;overflow:hidden;border:1px solid #e5e9ef;border-radius:12px;font-family:system-ui,sans-serif;background:#f4f7fa;">
        <div style="display:flex;align-items:center;gap:16px;height:60px;padding:0 20px;background:#ffffff;border-bottom:1px solid #e5e9ef;flex-shrink:0;box-sizing:border-box;">
          <div style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.2rem;color:${o};white-space:nowrap;flex-shrink:0;">${W}<span>${B(t)}</span></div>
          <div style="display:flex;align-items:center;gap:4px;flex:1;min-width:0;overflow:hidden;">${K}</div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">${de}${we}${xe}${Ee}</div>
        </div>
        <div style="flex:1;overflow-y:auto;display:flex;justify-content:center;">
          <div style="width:100%;max-width:${l};box-sizing:border-box;padding:24px;">
            <zero-studio-slot name="outlet"></zero-studio-slot>
            <zero-studio-slot name="main"></zero-studio-slot>
          </div>
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: [
        { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["zero-router-outlet", "page-root", "zero-section"] },
        { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
      ],
      templateHtml: Ae,
      badges: ["Top Nav Layout"],
      emptyText: "Nested pages render in the outlet below the top bar"
    };
  }
  // ─── Runtime render ──────────────────────────────────────────────────────────
  render() {
    const r = Ue(this.navItems).filter((n) => !!n.label), e = (this.userName || "U").trim().split(/\s+/).map((n) => n[0]).slice(0, 2).join("").toUpperCase(), t = _t(this.appLogo) ? this.appLogo.startsWith("<") ? U`${xr(this.appLogo)}` : U`<img src=${this.appLogo} alt="" />` : U`<span style="font-size:1.3rem;">${this.appLogo}</span>`;
    return U`
      <div class="tnl-shell" style="--tnl-accent: ${this.accentColor};">
        <header class="tnl-header ${this.fixedHeader ? "fixed" : ""}">
          <button
            class="tnl-brand"
            @click=${() => this.handleProfileClick("header")}
            title=${this.appName}
          >
            ${t}<span>${this.appName}</span>
          </button>

          <nav class="tnl-nav">
            ${r.map((n, o) => U`
              <a
                class="tnl-link ${o === this.activeItem ? "active" : ""}"
                href=${n.href ?? "#"}
                @click=${(l) => this.handleNavClick(o, n, l)}
              >
                ${n.icon ? U`<span>${n.icon}</span>` : A}
                <span>${n.label}</span>
              </a>
            `)}
          </nav>

          <div class="tnl-controls">
            ${this.showSearch ? U`
              <button
                class="tnl-icon-btn"
                title="Search"
                @click=${() => this.handleHeaderAction("search")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            ` : A}

            ${this.showNotifications ? U`
              <button
                class="tnl-icon-btn"
                title="Notifications"
                @click=${() => this.handleBellClick(this.notificationCount)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                ${this.notificationCount > 0 ? U`<span class="tnl-badge">${this.notificationCount}</span>` : A}
              </button>
            ` : A}

            ${this.showThemeToggle ? U`
              <button
                class="tnl-icon-btn"
                title="Toggle theme"
                @click=${() => this.toggleTheme()}
              >
                ${this.themeMode === "dark" ? U`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>` : U`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`}
              </button>
            ` : A}

            <button class="tnl-profile" @click=${() => this.handleProfileClick("header")}>
              <span class="tnl-avatar">
                ${this.avatarUrl ? U`<img src=${this.avatarUrl} alt="" />` : U`${e}`}
              </span>
              <span class="tnl-user">
                <span class="name">${this.userName}</span>
                <span class="role">${this.userRole}</span>
              </span>
            </button>
          </div>
        </header>

        <main class="tnl-main">
          <div class="tnl-content" style="max-width: ${this.maxWidth};">
            <slot name="outlet"></slot>
            <slot name="main"></slot>
            <slot></slot>
          </div>
        </main>
      </div>
    `;
  }
};
T.slots = [
  { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["zero-router-outlet", "page-root", "zero-section"] },
  { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
];
T.styles = Jt`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      --tnl-accent: var(--uiv-primary-color, #4680ff);
      --tnl-header-bg: var(--uiv-surface-color, #ffffff);
      --tnl-header-text: var(--uiv-text-color, #1d2630);
      --tnl-header-border: var(--uiv-border-color, #e5e9ef);
      --tnl-main-bg: var(--uiv-bg-color, #f4f7fa);
      --tnl-muted: var(--uiv-text-muted, #8996a4);
      --tnl-hover-bg: var(--uiv-hover-bg, rgba(0, 0, 0, 0.04));
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    }

    :host([data-theme="dark"]) {
      --tnl-header-bg: var(--uiv-surface-color, #1b2431);
      --tnl-header-text: var(--uiv-text-color, #e6ebf1);
      --tnl-header-border: var(--uiv-border-color, #2a3647);
      --tnl-main-bg: var(--uiv-bg-color, #131a24);
      --tnl-muted: var(--uiv-text-muted, #9aa7b5);
      --tnl-hover-bg: var(--uiv-hover-bg, rgba(255, 255, 255, 0.07));
    }

    .tnl-shell {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 480px;
      background: var(--tnl-main-bg);
      color: var(--tnl-header-text);
    }

    .tnl-header {
      display: flex;
      align-items: center;
      gap: 16px;
      height: 60px;
      padding: 0 20px;
      background: var(--tnl-header-bg);
      border-bottom: 1px solid var(--tnl-header-border);
      box-sizing: border-box;
      z-index: 10;
    }
    .tnl-header.fixed {
      position: sticky;
      top: 0;
    }

    .tnl-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      font-size: 1.2rem;
      color: var(--tnl-accent);
      white-space: nowrap;
      flex-shrink: 0;
      cursor: pointer;
      background: none;
      border: 0;
      font-family: inherit;
    }
    .tnl-brand img { width: 26px; height: 26px; object-fit: contain; border-radius: 6px; }

    .tnl-nav {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tnl-nav::-webkit-scrollbar { display: none; }

    .tnl-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 8px;
      color: var(--tnl-header-text);
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      background: none;
      border: 0;
      font-family: inherit;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .tnl-link:hover { background: var(--tnl-hover-bg); }
    .tnl-link.active { background: color-mix(in srgb, var(--tnl-accent) 14%, transparent); color: var(--tnl-accent); }

    .tnl-controls { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

    .tnl-icon-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      border: 0;
      background: transparent;
      color: var(--tnl-header-text);
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .tnl-icon-btn:hover { background: var(--tnl-hover-bg); }
    .tnl-icon-btn svg { width: 18px; height: 18px; display: block; }

    .tnl-badge {
      position: absolute;
      top: 4px;
      right: 4px;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      border-radius: 999px;
      background: var(--tnl-accent);
      color: #fff;
      font-size: 0.62rem;
      font-weight: 700;
      line-height: 16px;
      text-align: center;
      box-sizing: border-box;
    }

    .tnl-profile {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 8px 4px 4px;
      border-radius: 999px;
      border: 0;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s ease;
    }
    .tnl-profile:hover { background: var(--tnl-hover-bg); }
    .tnl-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: var(--tnl-accent);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      overflow: hidden;
      flex-shrink: 0;
    }
    .tnl-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .tnl-user { display: flex; flex-direction: column; line-height: 1.1; text-align: left; }
    .tnl-user .name { font-size: 0.82rem; font-weight: 700; color: var(--tnl-header-text); }
    .tnl-user .role { font-size: 0.68rem; color: var(--tnl-muted); }

    .tnl-main {
      flex: 1;
      display: flex;
      justify-content: center;
      overflow-y: auto;
      background: var(--tnl-main-bg);
    }
    .tnl-content {
      width: 100%;
      box-sizing: border-box;
      padding: 24px;
    }

    @media (max-width: 720px) {
      .tnl-user { display: none; }
      .tnl-nav { gap: 0; }
    }
  `;
C([
  H({ type: String }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "App / Brand Name", fieldMappings: "appName", categoryLabel: "Brand" })
], T.prototype, "appName", 2);
C([
  H({ type: String }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "Logo (emoji, image URL, or inline SVG)", fieldMappings: "appLogo", categoryLabel: "Brand" })
], T.prototype, "appLogo", 2);
C([
  H({ type: String, attribute: "nav-items" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "Nav Items (JSON)", fieldMappings: "navItems", categoryLabel: "Navigation" })
], T.prototype, "navItems", 2);
C([
  H({ type: Boolean, attribute: "show-search" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.CHECKBOX, displayLabel: "Show Search", fieldMappings: "showSearch", categoryLabel: "Header" })
], T.prototype, "showSearch", 2);
C([
  H({ type: Boolean, attribute: "show-notifications" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.CHECKBOX, displayLabel: "Show Notifications", fieldMappings: "showNotifications", categoryLabel: "Header" })
], T.prototype, "showNotifications", 2);
C([
  H({ type: Number, attribute: "notification-count" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.NUMBER_INPUT, displayLabel: "Notification Count", fieldMappings: "notificationCount", categoryLabel: "Header" })
], T.prototype, "notificationCount", 2);
C([
  H({ type: Boolean, attribute: "show-theme-toggle" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.CHECKBOX, displayLabel: "Show Theme Toggle", fieldMappings: "showThemeToggle", categoryLabel: "Header" })
], T.prototype, "showThemeToggle", 2);
C([
  H({ type: String, attribute: "user-name" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "User Name", fieldMappings: "userName", categoryLabel: "Header" })
], T.prototype, "userName", 2);
C([
  H({ type: String, attribute: "user-role" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "User Role", fieldMappings: "userRole", categoryLabel: "Header" })
], T.prototype, "userRole", 2);
C([
  H({ type: String, attribute: "avatar-url" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "Avatar URL", fieldMappings: "avatarUrl", categoryLabel: "Header" })
], T.prototype, "avatarUrl", 2);
C([
  H({ type: Boolean, attribute: "fixed-header" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.CHECKBOX, displayLabel: "Fixed Header", fieldMappings: "fixedHeader", categoryLabel: "Layout" })
], T.prototype, "fixedHeader", 2);
C([
  H({ type: String, attribute: "max-width" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.TEXT_INPUT, displayLabel: "Content Max Width (e.g. 1280px or 100%)", fieldMappings: "maxWidth", categoryLabel: "Layout" })
], T.prototype, "maxWidth", 2);
C([
  H({ type: String, attribute: "accent-color" }),
  O({ attributeType: S.PROPERTY, uiComponentType: L.COLOR_PICKER, displayLabel: "Accent Color", fieldMappings: "accentColor", categoryLabel: "Theme" })
], T.prototype, "accentColor", 2);
C([
  H({ type: Number, attribute: "active-item" })
], T.prototype, "activeItem", 2);
C([
  mr()
], T.prototype, "themeMode", 2);
C([
  O({ attributeType: S.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
], T.prototype, "onNavChange", 1);
C([
  O({ attributeType: S.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
], T.prototype, "onThemeChange", 1);
C([
  O({ attributeType: S.EVENT, displayLabel: "On Notification Click", eventTrigger: "notification-click", categoryLabel: "Triggers" })
], T.prototype, "handleBellClick", 1);
C([
  O({ attributeType: S.EVENT, displayLabel: "On Profile Click", eventTrigger: "profile-click", categoryLabel: "Triggers" })
], T.prototype, "handleProfileClick", 1);
C([
  O({ attributeType: S.EVENT, displayLabel: "On Header Action", eventTrigger: "header-action", categoryLabel: "Triggers" })
], T.prototype, "handleHeaderAction", 1);
C([
  O({ attributeType: S.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
], T.prototype, "toggleTheme", 1);
C([
  O({ attributeType: S.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
], T.prototype, "navigateTo", 1);
T = C([
  Gt({
    name: "zero-topnav-layout",
    version: "1.0.0",
    title: "Top Nav Layout",
    elementSelector: "zero-topnav-layout",
    group: "Layout",
    iconName: "topnav-layout-icon.png",
    layoutKind: "panel",
    environment: ["page"]
  }),
  yr("zero-topnav-layout"),
  Ft()
], T);
export {
  Ie as DEFAULT_NAV_ITEMS_JSON,
  We as DEFAULT_NAV_ITEMS_LIST,
  T as ZeroTopnavLayout,
  Er as studioTemplate
};
