var jt = Object.defineProperty;
var Dt = (n, e, t) => e in n ? jt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ze = (n, e, t) => Dt(n, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var We;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = o(n);
    typeof t.Reflect < "u" && (r = o(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
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
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !_ && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
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
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), N = typeof WeakMap == "function" ? WeakMap : Rt(), z = o ? Symbol.for("@reflect-metadata:registry") : void 0, oe = Ct(), Se = Pt(oe);
    function ct(i, s, a, c) {
      if (m(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return bt(i, s);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !m(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = R(a), wt(i, s, a, c);
      }
    }
    e("decorate", ct);
    function dt(i, s) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!m(v) && !Ot(v))
          throw new TypeError();
        Pe(i, s, c, v);
      }
      return a;
    }
    e("metadata", dt);
    function ht(i, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = R(c)), Pe(i, s, a, c);
    }
    e("defineMetadata", ht);
    function ft(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), Oe(i, s, a);
    }
    e("hasMetadata", ft);
    function pt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), he(i, s, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), Me(i, s, a);
    }
    e("getMetadata", yt);
    function vt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return m(a) || (a = R(a)), Ce(i, s, a);
    }
    e("getOwnMetadata", vt);
    function _t(i, s) {
      if (!O(i))
        throw new TypeError();
      return m(s) || (s = R(s)), xe(i, s);
    }
    e("getMetadataKeys", _t);
    function mt(i, s) {
      if (!O(i))
        throw new TypeError();
      return m(s) || (s = R(s)), Te(i, s);
    }
    e("getOwnMetadataKeys", mt);
    function gt(i, s, a) {
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
    e("deleteMetadata", gt);
    function bt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!m(v) && !B(v)) {
          if (!Ue(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function wt(i, s, a, c) {
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
    function Oe(i, s, a) {
      var c = he(i, s, a);
      if (c)
        return !0;
      var v = pe(s);
      return B(v) ? !1 : Oe(i, v, a);
    }
    function he(i, s, a) {
      var c = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Me(i, s, a) {
      var c = he(i, s, a);
      if (c)
        return Ce(i, s, a);
      var v = pe(s);
      if (!B(v))
        return Me(i, v, a);
    }
    function Ce(i, s, a) {
      var c = Z(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pe(i, s, a, c) {
      var v = Z(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function xe(i, s) {
      var a = Te(i, s), c = pe(i);
      if (c === null)
        return a;
      var v = xe(c, s);
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
    function Te(i, s) {
      var a = Z(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function ke(i) {
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
    function $t(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, s) {
      switch (ke(i)) {
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
      var a = "string", c = je(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (se(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (se(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function R(i) {
      var s = Et(i);
      return $t(s) ? s : St(s);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function se(i) {
      return typeof i == "function";
    }
    function Ue(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, s) {
      return i === s || i !== i && s !== s;
    }
    function je(i, s) {
      var a = i[s];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var s = je(i, u);
      if (!se(s))
        throw new TypeError();
      var a = s.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function Ie(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Le(i) {
      var s = i.return;
      s && s.call(i);
    }
    function pe(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Mt() {
      var i;
      !m(z) && typeof t.Reflect < "u" && !(z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
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
              for (var A = De(c); ; ) {
                var S = Ie(A);
                if (!S)
                  return;
                var k = He(S);
                if (k.isProviderFor(p, b))
                  return Le(A), k;
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
    function Ct() {
      var i;
      return !m(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[z]), m(i) && (i = Mt()), !m(z) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
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
      return oe.registerProvider(a), a;
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
        return m(b) ? !1 : Re(b.has(h));
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
        for (var A = b.keys(), S = De(A), k = 0; ; ) {
          var Ge = Ie(S);
          if (!Ge)
            return p.length = k, p;
          var Nt = He(Ge);
          try {
            p[k] = Nt;
          } catch (Ut) {
            try {
              Le(S);
            } finally {
              throw Ut;
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
    function xt(i) {
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
      var c = oe.getProvider(i, s);
      if (!m(c))
        return c;
      if (a) {
        if (oe.setProvider(i, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
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
              return this._keys.length--, this._values.length--, fe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
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
            if (!fe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], d)) {
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
    function kt() {
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
    function Rt() {
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
    function ye(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
function Ht(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function It(n) {
  return function(e) {
    if (Ht(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function Lt(n) {
  return It(n);
}
function Gt(n) {
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
    return t;
  };
}
function zt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Bt(n) {
  return function(e, t) {
    try {
      zt(n);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (n.fieldMappings = n.fieldMappings ?? t);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function ce(n) {
  return Bt(n);
}
var K;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker";
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
const ae = globalThis, be = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (n) => new ot(typeof n == "string" ? n : n + "", void 0, we), Vt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, o, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[l + 1], n[0]);
  return new ot(t, n, we);
}, Ft = (n, e) => {
  if (be) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), o = ae.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = t.cssText, n.appendChild(r);
  }
}, Fe = be ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Wt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, j = globalThis, qe = j.trustedTypes, Kt = qe ? qe.emptyScript : "", ve = j.reactiveElementPolyfillSupport, X = (n, e) => n, le = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Kt : null;
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
} }, $e = (n, e) => !qt(n, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(e, r, t);
      o !== void 0 && Zt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: o, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const _ = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, r = [...Xt(t), ...Jt(t)];
      for (const o of r) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, o] of t) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const o = this._$Eu(t, r);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const o of r) t.unshift(Fe(o));
    } else e !== void 0 && t.push(Fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ft(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var l;
    const r = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : le).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, o = r._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const _ = r.getPropertyOptions(o), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = o;
      const E = y.fromAttribute(t, _.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, o = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (o === !1 && (l = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? $e)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: o, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((o) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[X("elementProperties")] = /* @__PURE__ */ new Map(), W[X("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: W }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Ye = (n) => n, ue = J.trustedTypes, Xe = ue ? ue.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, st = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + U, er = `<${at}>`, L = document, ee = () => L.createComment(""), te = (n) => n === null || typeof n != "object" && typeof n != "function", Ee = Array.isArray, tr = (n) => Ee(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, D = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), nr = rr(1), F = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), H = L.createTreeWalker(L, 129);
function ut(n, e) {
  if (!Ee(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const ir = (n, e) => {
  const t = n.length - 1, r = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Y;
  for (let _ = 0; _ < t; _++) {
    const y = n[_];
    let E, $, w = -1, x = 0;
    for (; x < y.length && (u.lastIndex = x, $ = u.exec(y), $ !== null); ) x = u.lastIndex, u === Y ? $[1] === "!--" ? u = Je : $[1] !== void 0 ? u = Qe : $[2] !== void 0 ? (lt.test($[2]) && (o = RegExp("</" + $[2], "g")), u = D) : $[3] !== void 0 && (u = D) : u === D ? $[0] === ">" ? (u = o ?? Y, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? D : $[3] === '"' ? et : Ke) : u === et || u === Ke ? u = D : u === Je || u === Qe ? u = Y : (u = D, o = void 0);
    const T = u === D && n[_ + 1].startsWith("/>") ? " " : "";
    l += u === Y ? y + er : w >= 0 ? (r.push(E), y.slice(0, w) + st + y.slice(w) + U + T) : y + U + (w === -2 ? _ : T);
  }
  return [ut(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class re {
  constructor({ strings: e, _$litType$: t }, r) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, y = this.parts, [E, $] = ir(e, t);
    if (this.el = re.createElement(E, r), H.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = H.nextNode()) !== null && y.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(st)) {
          const x = $[u++], T = o.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(x);
          y.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? sr : N[1] === "?" ? ar : N[1] === "@" ? lr : de }), o.removeAttribute(w);
        } else w.startsWith(U) && (y.push({ type: 6, index: l }), o.removeAttribute(w));
        if (lt.test(o.tagName)) {
          const w = o.textContent.split(U), x = w.length - 1;
          if (x > 0) {
            o.textContent = ue ? ue.emptyScript : "";
            for (let T = 0; T < x; T++) o.append(w[T], ee()), H.nextNode(), y.push({ type: 2, index: ++l });
            o.append(w[x], ee());
          }
        }
      } else if (o.nodeType === 8) if (o.data === at) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(U, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = L.createElement("template");
    return r.innerHTML = e, r;
  }
}
function q(n, e, t = n, r) {
  var u, _;
  if (e === F) return e;
  let o = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), l === void 0 ? o = void 0 : (o = new l(n), o._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = o : t._$Cl = o), o !== void 0 && (e = q(n, o._$AS(n, e.values), o, r)), e;
}
class or {
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
    const { el: { content: t }, parts: r } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    H.currentNode = o;
    let l = H.nextNode(), u = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new ne(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new ur(l, this, e)), this._$AV.push(E), y = r[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = L, o;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ne {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = q(this, e, t), te(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, o = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = re.createElement(ut(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new or(o, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, o = 0;
    for (const l of e) o === t.length ? t.push(r = new ne(this.O(ee()), this.O(ee()), this, this.options)) : r = t[o], r._$AI(l), o++;
    o < t.length && (this._$AR(r && r._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ye(e).nextSibling;
      Ye(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, o, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = P;
  }
  _$AI(e, t = this, r, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== F, u && (this._$AH = e);
    else {
      const _ = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = q(this, _[r + y], t, y), E === F && (E = this._$AH[y]), u || (u = !te(E) || E !== this._$AH[y]), E === P ? e = P : e !== P && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class ar extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class lr extends de {
  constructor(e, t, r, o, l) {
    super(e, t, r, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? P) === F) return;
    const r = this._$AH, o = e === P && r !== P || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== P && (r === P || o);
    o && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const me = J.litHtmlPolyfillSupport;
me == null || me(re, ne), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const cr = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = r._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = o = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
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
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = cr(t, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var it;
Q._$litElement$ = !0, Q.finalized = !0, (it = I.litElementHydrateSupport) == null || it.call(I, { LitElement: Q });
const ge = I.litElementPolyfillSupport;
ge == null || ge({ LitElement: Q });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e }, hr = (n = dr, e, t) => {
  const { kind: r, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, y, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(_) {
      const y = this[u];
      e.call(this, _), this.requestUpdate(u, y, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Ae(n) {
  return (e, t) => typeof t == "object" ? hr(n, e, t) : ((r, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(n, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ie = (n, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? pr(e, t) : e, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (o = (r ? u(e, t, o) : u(o)) || o);
  return r && o && fr(e, t, o), o;
};
const rt = () => window.zeroThemeManager, nt = {
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
    if (!n) return nt;
    const e = yr(n.studio.display.label || "Glow Button"), t = ((o = n.props) == null ? void 0 : o.glowColor) ?? ((l = n.studio.props) == null ? void 0 : l.glowColor), r = t || "var(--uiv-primary-color, #00d2ff)";
    return {
      ...nt,
      templateHtml: [
        `<button style='position:relative;padding:10px 25px;color:${r};background:transparent;font-size:1.1rem;font-weight:bold;text-transform:uppercase;letter-spacing:4px;border:2px solid ${r};border-radius:4px;cursor:pointer;outline:none;box-shadow:0 0 5px ${r};'>`,
        e,
        "</button>"
      ].join("")
    };
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = rt()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const n = (e = rt()) == null ? void 0 : e.getActiveTheme();
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
G.styles = Vt`
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
ie([
  Ae({ type: String }),
  ce({
    attributeType: V.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], G.prototype, "label", 2);
ie([
  Ae({ type: Boolean }),
  ce({
    attributeType: V.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], G.prototype, "disabled", 2);
ie([
  Ae({ type: String }),
  ce({
    attributeType: V.PROPERTY,
    uiComponentType: K.COLOR_PICKER,
    displayLabel: "Glow Color Overlay",
    fieldMappings: "glowColor"
  })
], G.prototype, "glowColor", 2);
ie([
  ce({
    attributeType: V.EVENT,
    eventTrigger: "click",
    displayLabel: "On Click"
  })
], G.prototype, "onClickEvent", 2);
G = ie([
  Lt({
    name: "zero-uiv-button-glow",
    version: "1.0.0",
    title: "Radiant Glow Button",
    elementSelector: "zero-uiv-button-glow",
    group: "Uiverse Buttons",
    iconName: "button-icon.png"
  }),
  Gt()
], G);
export {
  G as ZeroUivButtonGlow,
  nt as glowTemplate
};
