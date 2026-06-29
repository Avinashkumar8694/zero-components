var Ht = Object.defineProperty;
var Dt = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ze = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : b(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(y, A) {
      return function($, w) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: w }), A && A($, w);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function d() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function b() {
      return l() || d();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !b && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return be(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return be({ __proto__: null });
      } : function() {
        return be({});
      },
      has: A ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), j = typeof WeakMap == "function" ? WeakMap : kt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ot(), Ce = Mt(ae);
    function dt(i, s, a, u) {
      if (g(a)) {
        if (!He(i))
          throw new TypeError();
        if (!De(s))
          throw new TypeError();
        return _t(i, s);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!C(s))
          throw new TypeError();
        if (!C(u) && !g(u) && !q(u))
          throw new TypeError();
        return q(u) && (u = void 0), a = H(a), mt(i, s, a, u);
      }
    }
    e("decorate", dt);
    function ut(i, s) {
      function a(u, v) {
        if (!C(u))
          throw new TypeError();
        if (!g(v) && !St(v))
          throw new TypeError();
        Pe(i, s, u, v);
      }
      return a;
    }
    e("metadata", ut);
    function ct(i, s, a, u) {
      if (!C(a))
        throw new TypeError();
      return g(u) || (u = H(u)), Pe(i, s, a, u);
    }
    e("defineMetadata", ct);
    function ht(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = H(a)), Oe(i, s, a);
    }
    e("hasMetadata", ht);
    function ft(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = H(a)), pe(i, s, a);
    }
    e("hasOwnMetadata", ft);
    function pt(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = H(a)), Me(i, s, a);
    }
    e("getMetadata", pt);
    function yt(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = H(a)), xe(i, s, a);
    }
    e("getOwnMetadata", yt);
    function vt(i, s) {
      if (!C(i))
        throw new TypeError();
      return g(s) || (s = H(s)), Te(i, s);
    }
    e("getMetadataKeys", vt);
    function bt(i, s) {
      if (!C(i))
        throw new TypeError();
      return g(s) || (s = H(s)), ke(i, s);
    }
    e("getOwnMetadataKeys", bt);
    function gt(i, s, a) {
      if (!C(s))
        throw new TypeError();
      if (g(a) || (a = H(a)), !C(s))
        throw new TypeError();
      g(a) || (a = H(a));
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", gt);
    function _t(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], v = u(s);
        if (!g(v) && !q(v)) {
          if (!De(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function mt(i, s, a, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(s, a, u);
        if (!g(O) && !q(O)) {
          if (!C(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function Oe(i, s, a) {
      var u = pe(i, s, a);
      if (u)
        return !0;
      var v = ve(s);
      return q(v) ? !1 : Oe(i, v, a);
    }
    function pe(i, s, a) {
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Me(i, s, a) {
      var u = pe(i, s, a);
      if (u)
        return xe(i, s, a);
      var v = ve(s);
      if (!q(v))
        return Me(i, v, a);
    }
    function xe(i, s, a) {
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pe(i, s, a, u) {
      var v = Q(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, u);
    }
    function Te(i, s) {
      var a = ke(i, s), u = ve(i);
      if (u === null)
        return a;
      var v = Te(u, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new R(), O = [], _ = 0, c = a; _ < c.length; _++) {
        var h = c[_], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var p = 0, m = v; p < m.length; p++) {
        var h = m[p], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function ke(i, s) {
      var a = Q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Re(i) {
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
    function q(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function $t(i, s) {
      switch (Re(i)) {
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
      var a = "string", u = je(i, l);
      if (u !== void 0) {
        var v = u.call(i, a);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, s) {
      var a, u;
      {
        var v = i.toString;
        if (le(v)) {
          var u = v.call(i);
          if (!C(u))
            return u;
        }
        var a = i.valueOf;
        if (le(a)) {
          var u = a.call(i);
          if (!C(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function H(i) {
      var s = $t(i);
      return wt(s) ? s : Et(s);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function De(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, s) {
      return i === s || i !== i && s !== s;
    }
    function je(i, s) {
      var a = i[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(i) {
      var s = je(i, d);
      if (!le(s))
        throw new TypeError();
      var a = s.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function Ue(i) {
      return i.value;
    }
    function Le(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Be(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ve(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return s;
      var v = u.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Ct() {
      var i;
      !g(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var s, a, u, v = new j(), M = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return M;
      function O(p) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
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
            u === void 0 && (u = new R()), u.add(p);
            break;
        }
      }
      function _(p, m) {
        if (!g(s)) {
          if (s.isProviderFor(p, m))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, m))
              return s;
            if (!g(u))
              for (var E = Ie(u); ; ) {
                var S = Le(E);
                if (!S)
                  return;
                var N = Ue(S);
                if (N.isProviderFor(p, m))
                  return Be(E), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, m))
          return i;
      }
      function c(p, m) {
        var E = v.get(p), S;
        return g(E) || (S = E.get(m)), g(S) && (S = _(p, m), g(S) || (g(E) && (E = new P(), v.set(p, E)), E.set(m, S))), S;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(u) && u.has(p);
      }
      function f(p, m, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, m);
        if (S !== E) {
          if (!g(S))
            return !1;
          var N = v.get(p);
          g(N) && (N = new P(), v.set(p, N)), N.set(m, E);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !g(F) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), g(i) && (i = Ct()), !g(F) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var s = new j(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function u(h, f, p) {
        var m = s.get(h), E = !1;
        if (g(m)) {
          if (!p)
            return;
          m = new P(), s.set(h, m), E = !0;
        }
        var S = m.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new P(), m.set(f, S), !i.setProvider(h, f, a))
            throw m.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var m = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g(m) ? !1 : Ne(m.has(h));
      }
      function M(h, f, p) {
        var m = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(m))
          return m.get(h);
      }
      function O(h, f, p, m) {
        var E = u(
          p,
          m,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function _(h, f) {
        var p = [], m = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(m))
          return p;
        for (var E = m.keys(), S = Ie(E), N = 0; ; ) {
          var Ge = Le(S);
          if (!Ge)
            return p.length = N, p;
          var Rt = Ue(Ge);
          try {
            p[N] = Rt;
          } catch (Nt) {
            try {
              Be(S);
            } finally {
              throw Nt;
            }
          }
          N++;
        }
      }
      function c(h, f, p) {
        var m = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(m) || !m.delete(h))
          return !1;
        if (m.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function xt(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new j(), _ = {
        isProviderFor: function(c, h) {
          var f = O.get(c);
          return !g(f) && f.has(h) ? !0 : v(c, h).length ? (g(f) && (f = new R(), O.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return _;
    }
    function Q(i, s, a) {
      var u = ae.getProvider(i, s);
      if (!g(u))
        return u;
      if (a) {
        if (ae.setProvider(i, s, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function _(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[d] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
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
          }), _.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ye(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[d] = function() {
            return this.entries();
          }, _.prototype._find = function(c, h) {
            if (!ye(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function v(_, c) {
        return _;
      }
      function M(_, c) {
        return c;
      }
      function O(_, c) {
        return [_, c];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new P();
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
          }, s.prototype[d] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function kt() {
      var i = 16, s = $.create(), a = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + _();
        while ($.has(s, c));
        return s[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: $.create() });
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
      function _() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function be(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function It(r) {
  return function(e) {
    if (jt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
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
function Ut(r) {
  return It(r);
}
function Lt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        ze(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const $ = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((P) => $.insertRule(P.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        d.forEach(($) => {
          const w = $.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Bt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(r) {
  return function(e, t) {
    try {
      Bt(r);
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
function V(r) {
  return Gt(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, $e = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new it(typeof r == "string" ? r : r + "", void 0, Ae), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new it(t, r, Ae);
}, Vt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Yt, getPrototypeOf: Jt } = Object, U = globalThis, Ze = U.trustedTypes, Qt = Ze ? Ze.emptyScript : "", ge = U.reactiveElementPolyfillSupport, ee = (r, e) => r, ce = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Qt : null;
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
} }, Ee = (r, e) => !Ft(r, e), Xe = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && qt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: o, set(d) {
      const b = o == null ? void 0 : o.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, b, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Jt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Xt(t), ...Yt(t)];
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
      for (const o of n) t.unshift(qe(o));
    } else e !== void 0 && t.push(qe(e));
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
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, d == null ? this.removeAttribute(o) : this.setAttribute(o, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const b = n.getPropertyOptions(o), y = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : ce;
      this._$Em = o;
      const A = y.fromAttribute(t, b.type);
      this[o] = A ?? ((d = this._$Ej) == null ? void 0 : d.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var d;
    if (e !== void 0) {
      const b = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = b.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(b._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, d) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? t ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, d] of o) {
        const { wrapped: b } = d, y = this[l];
        b !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, d, y);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: Z }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ye = (r) => r, he = te.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ot = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + I, Kt = `<${st}>`, W = document, ne = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, er = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, B = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, at = /^(?:script|style|textarea|title)$/i, tr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), de = tr(1), X = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function lt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = K;
  for (let b = 0; b < t; b++) {
    const y = r[b];
    let A, $, w = -1, P = 0;
    for (; P < y.length && (d.lastIndex = P, $ = d.exec(y), $ !== null); ) P = d.lastIndex, d === K ? $[1] === "!--" ? d = Qe : $[1] !== void 0 ? d = Ke : $[2] !== void 0 ? (at.test($[2]) && (o = RegExp("</" + $[2], "g")), d = B) : $[3] !== void 0 && (d = B) : d === B ? $[0] === ">" ? (d = o ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = d.lastIndex - $[2].length, A = $[1], d = $[3] === void 0 ? B : $[3] === '"' ? tt : et) : d === tt || d === et ? d = B : d === Qe || d === Ke ? d = K : (d = B, o = void 0);
    const R = d === B && r[b + 1].startsWith("/>") ? " " : "";
    l += d === K ? y + Kt : w >= 0 ? (n.push(A), y.slice(0, w) + ot + y.slice(w) + I + R) : y + I + (w === -2 ? b : R);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, d = 0;
    const b = e.length - 1, y = this.parts, [A, $] = rr(e, t);
    if (this.el = oe.createElement(A, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = G.nextNode()) !== null && y.length < b; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(ot)) {
          const P = $[d++], R = o.getAttribute(w).split(I), j = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: j[2], strings: R, ctor: j[1] === "." ? ir : j[1] === "?" ? or : j[1] === "@" ? sr : fe }), o.removeAttribute(w);
        } else w.startsWith(I) && (y.push({ type: 6, index: l }), o.removeAttribute(w));
        if (at.test(o.tagName)) {
          const w = o.textContent.split(I), P = w.length - 1;
          if (P > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < P; R++) o.append(w[R], ne()), G.nextNode(), y.push({ type: 2, index: ++l });
            o.append(w[P], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === st) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(I, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += I.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Y(r, e, t = r, n) {
  var d, b;
  if (e === X) return e;
  let o = n !== void 0 ? (d = t._$Co) == null ? void 0 : d[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((b = o == null ? void 0 : o._$AO) == null || b.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = Y(r, o._$AS(r, e.values), o, n)), e;
}
class nr {
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
    G.currentNode = o;
    let l = G.nextNode(), d = 0, b = 0, y = n[0];
    for (; y !== void 0; ) {
      if (d === y.index) {
        let A;
        y.type === 2 ? A = new se(l, l.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (A = new ar(l, this, e)), this._$AV.push(A), y = n[++b];
      }
      d !== (y == null ? void 0 : y.index) && (l = G.nextNode(), d++);
    }
    return G.currentNode = W, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Y(this, e, t), ie(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : er(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const d = new nr(o, this), b = d.u(this.options);
      d.p(t), this.T(b), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new se(this.O(ne()), this.O(ne()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ye(e).nextSibling;
      Ye(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = Y(this, e, t, 0), d = !ie(e) || e !== this._$AH && e !== X, d && (this._$AH = e);
    else {
      const b = e;
      let y, A;
      for (e = l[0], y = 0; y < l.length - 1; y++) A = Y(this, b[n + y], t, y), A === X && (A = this._$AH[y]), d || (d = !ie(A) || A !== this._$AH[y]), A === x ? e = x : e !== x && (e += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    d && !o && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class sr extends fe {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? x) === X) return;
    const n = this._$AH, o = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== x && (n === x || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ar {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Y(this, e);
  }
}
const me = te.litHtmlPolyfillSupport;
me == null || me(oe, se), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis;
class re extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = lr(t, this.renderRoot, this.renderOptions);
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
re._$litElement$ = !0, re.finalized = !0, (nt = z.litElementHydrateSupport) == null || nt.call(z, { LitElement: re });
const we = z.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee }, ur = (r = dr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: d } = t;
    return { set(b) {
      const y = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(d, y, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(d, void 0, r, b), b;
    } };
  }
  if (n === "setter") {
    const { name: d } = t;
    return function(b) {
      const y = this[d];
      e.call(this, b), this.requestUpdate(d, y, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function J(r) {
  return (e, t) => typeof t == "object" ? ur(r, e, t) : ((n, o, l) => {
    const d = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var cr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, k = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (o = (n ? d(e, t, o) : d(o)) || o);
  return n && o && cr(e, t, o), o;
};
const fr = {
  kind: "generic",
  templateHtml: [
    "<div style='overflow-x:auto;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<table style='width:100%;border-collapse:collapse;font-size:13px;text-align:left;'>",
    "<thead style='background:#f9fafb;border-bottom:1px solid #e5e7eb;color:#374151;'>",
    "<tr>",
    "<th style='padding:10px 12px;'>Header 1</th>",
    "<th style='padding:10px 12px;'>Header 2</th>",
    "</tr>",
    "</thead>",
    "<tbody>",
    "<tr style='border-bottom:1px solid #e5e7eb;'>",
    "<td style='padding:10px 12px;'>Data Row 1 Col 1</td>",
    "<td style='padding:10px 12px;'>Data Row 1 Col 2</td>",
    "</tr>",
    "</tbody>",
    "</table>",
    "</div>"
  ].join(""),
  labelProp: "variant",
  badges: ["Data", "Table"]
};
let T = class extends re {
  constructor() {
    super(...arguments), this.variant = "standard", this.headers = "Name, Position, Office, Age", this.rows = JSON.stringify([
      ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
      ["Garrett Winters", "Accountant", "Tokyo", "63"],
      ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
      ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"]
    ]), this.striped = !0, this.bordered = !1, this.hoverable = !0;
  }
  static getStudioTemplate(r) {
    return fr;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "standard";
  }
  get headersConfig() {
    return this.headers;
  }
  set headersConfig(r) {
    this.headers = r || "";
  }
  get rowsConfig() {
    return this.rows;
  }
  set rowsConfig(r) {
    this.rows = r || "[]";
  }
  get stripedConfig() {
    return this.striped;
  }
  set stripedConfig(r) {
    this.striped = !!r;
  }
  get borderedConfig() {
    return this.bordered;
  }
  set borderedConfig(r) {
    this.bordered = !!r;
  }
  get hoverableConfig() {
    return this.hoverable;
  }
  set hoverableConfig(r) {
    this.hoverable = !!r;
  }
  handleRowClick(r, e) {
    this.dispatchEvent(
      new CustomEvent("row-click", {
        detail: { index: r, data: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  parseHeaders() {
    return this.headers.split(",").map((r) => r.trim()).filter(Boolean);
  }
  parseRows() {
    try {
      const r = JSON.parse(this.rows);
      return Array.isArray(r) ? r.map((e) => Array.isArray(e) ? e : typeof e == "object" && e !== null ? Object.values(e) : [String(e)]) : [];
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseHeaders(), e = this.parseRows(), t = [
      "table-container",
      `variant-${this.variant}`,
      this.striped ? "striped" : "",
      this.bordered ? "bordered" : "",
      this.hoverable ? "hoverable" : ""
    ].join(" ");
    return de`
      <div class=${t}>
        <table>
          <thead>
            <tr>
              ${r.map(
      (n) => de`<th>${n}</th>`
    )}
            </tr>
          </thead>
          <tbody>
            ${e.map(
      (n, o) => de`
                <tr @click=${() => this.handleRowClick(o, n)}>
                  ${n.map(
        (l) => de`<td>${l}</td>`
      )}
                </tr>
              `
    )}
          </tbody>
        </table>
      </div>
    `;
  }
};
T.styles = Wt`
    :host {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      --tb-p: var(--uiv-primary-color, #6366f1);
      --tb-bg: var(--uiv-surface-color, #ffffff);
      --tb-text: var(--uiv-text-color, #1f2937);
      --tb-border: var(--uiv-border-color, #e5e7eb);
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      border-radius: 8px;
      transition: all 0.25s ease;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      color: var(--tb-text);
      text-align: left;
    }

    th {
      font-weight: 600;
      padding: 12px 16px;
      background: var(--uiv-surface-color-secondary, #f9fafb);
      border-bottom: 1px solid var(--tb-border);
      user-select: none;
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--tb-border);
      transition: background 0.15s ease;
    }

    /* Striped rows */
    .striped tbody tr:nth-child(even) {
      background: rgba(0, 0, 0, 0.02);
    }

    /* Hoverable rows */
    .hoverable tbody tr {
      cursor: pointer;
    }
    .hoverable tbody tr:hover {
      background: rgba(99, 102, 241, 0.04);
    }

    /* Bordered table */
    .bordered table,
    .bordered th,
    .bordered td {
      border: 1px solid var(--tb-border);
    }

    /* ─── VARIANTS ─── */

    /* 1. Standard */
    .variant-standard {
      border: 1px solid var(--tb-border);
      background: var(--tb-bg);
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    /* 2. Blocky (Retro) */
    .variant-blocky {
      border: 3px solid #000000;
      border-radius: 0px;
      box-shadow: 6px 6px 0px #000000;
      background: #ffffff;
    }
    .variant-blocky th {
      background: var(--tb-p);
      color: #000000;
      border-bottom: 3px solid #000000;
      font-weight: 700;
    }
    .variant-blocky td {
      border-bottom: 2px solid #000000;
    }
    .variant-blocky.bordered td,
    .variant-blocky.bordered th {
      border: 2px solid #000000;
    }
    .variant-blocky.hoverable tbody tr:hover {
      background: rgba(248, 240, 5, 0.15);
    }

    /* 3. Frosted */
    .variant-frosted {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .variant-frosted th {
      background: rgba(255, 255, 255, 0.06);
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }
    .variant-frosted td {
      border-bottom-color: rgba(255, 255, 255, 0.08);
    }
    .variant-frosted.bordered td,
    .variant-frosted.bordered th {
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    /* 4. Glitch (Cyberpunk) */
    .variant-glitch {
      border-radius: 0px;
      border: 2px solid var(--tb-p);
      background: #0d0e12;
      color: #00e6f6;
    }
    .variant-glitch th {
      background: #161a23;
      color: var(--tb-p);
      border-bottom: 2px solid var(--tb-p);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .variant-glitch td {
      border-bottom: 1px solid rgba(0, 230, 246, 0.2);
    }
    .variant-glitch.hoverable tbody tr:hover {
      background: rgba(0, 230, 246, 0.08);
    }
  `;
k([
  J({ type: String })
], T.prototype, "variant", 2);
k([
  J({ type: String })
], T.prototype, "headers", 2);
k([
  J({ type: String })
], T.prototype, "rows", 2);
k([
  J({ type: Boolean })
], T.prototype, "striped", 2);
k([
  J({ type: Boolean })
], T.prototype, "bordered", 2);
k([
  J({ type: Boolean })
], T.prototype, "hoverable", 2);
k([
  V({
    attributeType: D.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Table Theme Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard", value: "standard" },
      { label: "Retro Blocky", value: "blocky" },
      { label: "Frosted Glass", value: "frosted" },
      { label: "Cyberpunk Glitch", value: "glitch" }
    ]
  })
], T.prototype, "variantConfig", 1);
k([
  V({
    attributeType: D.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Table Headers (comma-separated)",
    fieldMappings: "headers"
  })
], T.prototype, "headersConfig", 1);
k([
  V({
    attributeType: D.PROPERTY,
    uiComponentType: L.TEXTAREA,
    displayLabel: "Table Rows (JSON Array)",
    fieldMappings: "rows"
  })
], T.prototype, "rowsConfig", 1);
k([
  V({
    attributeType: D.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Striped Rows",
    fieldMappings: "striped"
  })
], T.prototype, "stripedConfig", 1);
k([
  V({
    attributeType: D.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Show Grid Borders",
    fieldMappings: "bordered"
  })
], T.prototype, "borderedConfig", 1);
k([
  V({
    attributeType: D.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Row Hover Effects",
    fieldMappings: "hoverable"
  })
], T.prototype, "hoverableConfig", 1);
k([
  V({
    attributeType: D.EVENT,
    displayLabel: "On Row Click",
    eventTrigger: "row-click"
  })
], T.prototype, "handleRowClick", 1);
T = k([
  Ut({
    name: "zero-table",
    version: "1.0.0",
    title: "Data Table",
    elementSelector: "zero-table",
    group: "Data Display",
    iconName: "table-icon.png"
  }),
  Lt()
], T);
export {
  T as ZeroTable,
  fr as studioTemplate
};
