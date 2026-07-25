var jt = Object.defineProperty;
var Dt = (n, e, t) => e in n ? jt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ue = (n, e, t) => Dt(n, typeof e != "symbol" ? e + "" : e, t);
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ze;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ie == "object" ? Ie : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(p, A) {
      return function(b, w) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return de(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return de({ __proto__: null });
      } : function() {
        return de({});
      },
      has: A ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ct(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), N = typeof WeakMap == "function" ? WeakMap : Tt(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, re = Ot(), we = Mt(re);
    function ut(i, o, a, c) {
      if (m(a)) {
        if (!Ce(i))
          throw new TypeError();
        if (!ke(o))
          throw new TypeError();
        return gt(i, o);
      } else {
        if (!Ce(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(c) && !m(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = R(a), $t(i, o, a, c);
      }
    }
    e("decorate", ut);
    function ct(i, o) {
      function a(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!m(v) && !St(v))
          throw new TypeError();
        Se(i, o, c, v);
      }
      return a;
    }
    e("metadata", ct);
    function dt(i, o, a, c) {
      if (!x(a))
        throw new TypeError();
      return m(c) || (c = R(c)), Se(i, o, a, c);
    }
    e("defineMetadata", dt);
    function ht(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), be(i, o, a);
    }
    e("hasMetadata", ht);
    function ft(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), le(i, o, a);
    }
    e("hasOwnMetadata", ft);
    function pt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Ae(i, o, a);
    }
    e("getMetadata", pt);
    function yt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Ee(i, o, a);
    }
    e("getOwnMetadata", yt);
    function vt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = R(o)), xe(i, o);
    }
    e("getMetadataKeys", vt);
    function _t(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = R(o)), Oe(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function mt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (m(a) || (a = R(a)), !x(o))
        throw new TypeError();
      m(a) || (a = R(a));
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", mt);
    function gt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !G(v)) {
          if (!ke(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(o, a, c);
        if (!m(O) && !G(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function be(i, o, a) {
      var c = le(i, o, a);
      if (c)
        return !0;
      var v = ce(o);
      return G(v) ? !1 : be(i, v, a);
    }
    function le(i, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Pe(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ae(i, o, a) {
      var c = le(i, o, a);
      if (c)
        return Ee(i, o, a);
      var v = ce(o);
      if (!G(v))
        return Ae(i, v, a);
    }
    function Ee(i, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Se(i, o, a, c) {
      var v = F(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xe(i, o) {
      var a = Oe(i, o), c = ce(i);
      if (c === null)
        return a;
      var v = xe(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new k(), O = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function Oe(i, o) {
      var a = F(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Me(i) {
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
    function G(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function bt(i, o) {
      switch (Me(i)) {
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
      var a = "string", c = Te(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (ne(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (ne(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Pe(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function R(i) {
      var o = bt(i);
      return wt(o) ? o : Et(o);
    }
    function Ce(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ne(i) {
      return typeof i == "function";
    }
    function ke(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Me(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ue(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Te(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ne(a))
          throw new TypeError();
        return a;
      }
    }
    function Re(i) {
      var o = Te(i, u);
      if (!ne(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function Ne(i) {
      return i.value;
    }
    function je(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function De(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ce(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function xt() {
      var i;
      !m(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, a, c, v = new N(), M = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return M;
      function O(y) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case m(o):
            o = y;
            break;
          case o === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function g(y, $) {
        if (!m(o)) {
          if (o.isProviderFor(y, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, $))
              return o;
            if (!m(c))
              for (var E = Re(c); ; ) {
                var S = je(E);
                if (!S)
                  return;
                var T = Ne(S);
                if (T.isProviderFor(y, $))
                  return De(E), T;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, $))
          return i;
      }
      function d(y, $) {
        var E = v.get(y), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(y, $), m(S) || (m(E) && (E = new C(), v.set(y, E)), E.set($, S))), S;
      }
      function h(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(c) && c.has(y);
      }
      function f(y, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var T = v.get(y);
          m(T) && (T = new C(), v.set(y, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !m(L) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[L]), m(i) && (i = xt()), !m(L) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return re.registerProvider(a), a;
      function c(h, f, y) {
        var $ = o.get(h), E = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new C(), o.set(h, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new C(), $.set(f, S), !i.setProvider(h, f, a))
            throw $.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        return m($) ? !1 : Pe($.has(h));
      }
      function M(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(h);
      }
      function O(h, f, y, $) {
        var E = c(
          y,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var y = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var E = $.keys(), S = Re(E), T = 0; ; ) {
          var He = je(S);
          if (!He)
            return y.length = T, y;
          var Rt = Ne(He);
          try {
            y[T] = Rt;
          } catch (Nt) {
            try {
              De(S);
            } finally {
              throw Nt;
            }
          }
          T++;
        }
      }
      function d(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new N(), g = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new k(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return g;
    }
    function F(i, o, a) {
      var c = re.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (re.setProvider(i, o, we))
          return we;
        throw new Error("Illegal state.");
      }
    }
    function Ct() {
      var i = {}, o = [], a = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
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
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ue(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!ue(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ue(this._keys[f], d)) {
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
      function M(g, d) {
        return d;
      }
      function O(g, d) {
        return [g, d];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new C();
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
      return i;
    }
    function Tt() {
      var i = 16, o = b.create(), a = c();
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
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
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
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: b.create() });
        }
        return d[a];
      }
      function M(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, d), h;
        }
        return M(new Array(d), d);
      }
      function g() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function de(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ze || (ze = {}));
function Ht(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ut(n) {
  return function(e) {
    if (Ht(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName,
        layoutKind: n.layoutKind,
        environment: n.environment
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
function It(n) {
  return Ut(n);
}
function zt(n) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ue(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((C) => b.insertRule(C.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          p.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          p.appendChild(w);
        });
      }
    }
    return t;
  };
}
var Le;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(Le || (Le = {}));
var Ge;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(Ge || (Ge = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, ve = ie.ShadowRoot && (ie.ShadyCSS === void 0 || ie.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== _e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ve && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (n) => new nt(typeof n == "string" ? n : n + "", void 0, _e), Gt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new nt(t, n, _e);
}, Wt = (n, e) => {
  if (ve) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ie.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, Be = ve ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Lt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Bt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Jt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, D = globalThis, Ve = D.trustedTypes, Xt = Ve ? Ve.emptyScript : "", he = D.reactiveElementPolyfillSupport, q = (n, e) => n, se = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Xt : null;
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
} }, me = (n, e) => !Bt(n, e), Fe = { attribute: !0, type: String, converter: se, reflect: !1, useDefault: !1, hasChanged: me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Fe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Vt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Fe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const t = this.properties, r = [...Jt(t), ...qt(t)];
      for (const s of r) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, s] of t) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r) t.unshift(Be(s));
    } else e !== void 0 && t.push(Be(e));
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
    return Wt(e, this.constructor.elementStyles), e;
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
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : se).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : se;
      this._$Em = s;
      const A = p.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? me)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: _ } = u, p = this[l];
        _ !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[q("elementProperties")] = /* @__PURE__ */ new Map(), W[q("finalized")] = /* @__PURE__ */ new Map(), he == null || he({ ReactiveElement: W }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, Je = (n) => n, oe = Z.trustedTypes, qe = oe ? oe.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, it = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + j, Yt = `<${st}>`, z = document, Y = () => z.createComment(""), Q = (n) => n === null || typeof n != "object" && typeof n != "function", ge = Array.isArray, Qt = (n) => ge(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", fe = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Xe = />/g, H = RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ye = /'/g, Qe = /"/g, ot = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), Ke = Kt(1), B = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), U = z.createTreeWalker(z, 129);
function at(n, e) {
  if (!ge(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(e) : e;
}
const er = (n, e) => {
  const t = n.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = J;
  for (let _ = 0; _ < t; _++) {
    const p = n[_];
    let A, b, w = -1, C = 0;
    for (; C < p.length && (u.lastIndex = C, b = u.exec(p), b !== null); ) C = u.lastIndex, u === J ? b[1] === "!--" ? u = Ze : b[1] !== void 0 ? u = Xe : b[2] !== void 0 ? (ot.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = H) : b[3] !== void 0 && (u = H) : u === H ? b[0] === ">" ? (u = s ?? J, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? H : b[3] === '"' ? Qe : Ye) : u === Qe || u === Ye ? u = H : u === Ze || u === Xe ? u = J : (u = H, s = void 0);
    const k = u === H && n[_ + 1].startsWith("/>") ? " " : "";
    l += u === J ? p + Yt : w >= 0 ? (r.push(A), p.slice(0, w) + it + p.slice(w) + j + k) : p + j + (w === -2 ? _ : k);
  }
  return [at(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class K {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [A, b] = er(e, t);
    if (this.el = K.createElement(A, r), U.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = U.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(it)) {
          const C = b[u++], k = s.getAttribute(w).split(j), N = /([.?@])?(.*)/.exec(C);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? rr : N[1] === "?" ? nr : N[1] === "@" ? ir : ae }), s.removeAttribute(w);
        } else w.startsWith(j) && (p.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ot.test(s.tagName)) {
          const w = s.textContent.split(j), C = w.length - 1;
          if (C > 0) {
            s.textContent = oe ? oe.emptyScript : "";
            for (let k = 0; k < C; k++) s.append(w[k], Y()), U.nextNode(), p.push({ type: 2, index: ++l });
            s.append(w[C], Y());
          }
        }
      } else if (s.nodeType === 8) if (s.data === st) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(j, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = z.createElement("template");
    return r.innerHTML = e, r;
  }
}
function V(n, e, t = n, r) {
  var u, _;
  if (e === B) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = Q(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = V(n, s._$AS(n, e.values), s, r)), e;
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    U.currentNode = s;
    let l = U.nextNode(), u = 0, _ = 0, p = r[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new te(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new sr(l, this, e)), this._$AV.push(A), p = r[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = U.nextNode(), u++);
    }
    return U.currentNode = z, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = V(this, e, t), Q(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = K.createElement(at(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new tr(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new K(e)), t;
  }
  k(e) {
    ge(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new te(this.O(Y()), this.O(Y()), this, this.options)) : r = t[s], r._$AI(l), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Je(e).nextSibling;
      Je(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ae {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = P;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = V(this, e, t, 0), u = !Q(e) || e !== this._$AH && e !== B, u && (this._$AH = e);
    else {
      const _ = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = V(this, _[r + p], t, p), A === B && (A = this._$AH[p]), u || (u = !Q(A) || A !== this._$AH[p]), A === P ? e = P : e !== P && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ae {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class nr extends ae {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ir extends ae {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? P) === B) return;
    const r = this._$AH, s = e === P && r !== P || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== P && (r === P || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    V(this, e);
  }
}
const pe = Z.litHtmlPolyfillSupport;
pe == null || pe(K, te), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.3.3");
const or = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new te(e.insertBefore(Y(), l), l, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
class X extends W {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = or(t, this.renderRoot, this.renderOptions);
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
    return B;
  }
}
var rt;
X._$litElement$ = !0, X.finalized = !0, (rt = I.litElementHydrateSupport) == null || rt.call(I, { LitElement: X });
const ye = I.litElementPolyfillSupport;
ye == null || ye({ LitElement: X });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: se, reflect: !1, hasChanged: me }, lr = (n = ar, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const p = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, p, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(_) {
      const p = this[u];
      e.call(this, _), this.requestUpdate(u, p, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function lt(n) {
  return (e, t) => typeof t == "object" ? lr(n, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, e, t);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, $e = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? cr(e, t) : e, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && ur(e, t, s), s;
};
const dr = JSON.stringify([
  {
    text: `- This patient is lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
- has allergic history with Cataflam`,
    author: "Drg. Mega Nanade",
    date: "20 Nov '19",
    active: !0
  },
  {
    text: "Lorem ipsum dolor sit amet",
    author: "Drg. Mega Nanade",
    date: "20 Nov '19",
    active: !1
  }
]);
function tt(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let ee = class extends X {
  constructor() {
    super(...arguments), this.title = "Notes", this.notesJson = dr;
  }
  static getStudioTemplate(n) {
    var r, s, l, u, _, p;
    if (!n)
      return {
        kind: "generic",
        templateHtml: "<zero-notes-card-1.0.0></zero-notes-card-1.0.0>"
      };
    const e = tt(((r = n == null ? void 0 : n.props) == null ? void 0 : r.title) ?? ((l = (s = n == null ? void 0 : n.studio) == null ? void 0 : s.props) == null ? void 0 : l.title) ?? "Notes"), t = tt(((u = n == null ? void 0 : n.props) == null ? void 0 : u.notesJson) ?? ((p = (_ = n == null ? void 0 : n.studio) == null ? void 0 : _.props) == null ? void 0 : p.notesJson) ?? "[]");
    return {
      kind: "generic",
      templateHtml: `
        <zero-notes-card-1.0.0
          title="${e}"
          notes-json="${t}"
        ></zero-notes-card-1.0.0>
      `
    };
  }
  render() {
    let n = [];
    try {
      n = JSON.parse(this.notesJson);
    } catch {
      n = [];
    }
    const e = n.find((r) => r.active) || n[0] || { text: "", author: "" }, t = n.filter((r) => r !== e);
    return Ke`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">See all</span>
        </div>
        <div class="textarea-box">
          <textarea class="textarea" rows="3" .value=${e.text} @input=${(r) => {
      e.text = r.target.value, this.notesJson = JSON.stringify(n);
    }}></textarea>
          <div class="meta">
            <div class="meta-left">
              <span class="author">👤 ${e.author}</span>
            </div>
            <button class="btn">save note</button>
          </div>
        </div>
        
        ${t.map((r) => Ke`
          <div class="secondary-note">
            <div class="secondary-text">${r.text}</div>
            <div class="secondary-meta">
              <span class="secondary-author">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                ${r.author}
              </span>
              <span class="secondary-date">${r.date}</span>
            </div>
          </div>
        `)}
      </div>
    `;
  }
};
ee.styles = Gt`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
      color: #1e293b;
    }
    .action {
      font-size: 0.82rem;
      color: #0ea5e9;
      font-weight: 600;
      cursor: pointer;
    }
    .action:hover {
      text-decoration: underline;
    }
    .textarea-box {
      background: #f8fafc;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      padding: 16px;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;
    }
    .textarea {
      width: 100%;
      border: none;
      background: transparent;
      resize: none;
      font-size: 0.82rem;
      color: #334155;
      line-height: 1.6;
      font-family: inherit;
      outline: none;
      padding: 0;
    }
    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
    }
    .meta-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .author {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 600;
    }
    .date {
      font-size: 0.72rem;
      color: #94a3b8;
    }
    .btn {
      padding: 6px 12px;
      border-radius: 6px;
      border: none;
      background: #0ea5e9;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.75rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #0284c7;
    }
    .secondary-note {
      border-top: 1.5px solid #f1f5f9;
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .secondary-text {
      font-size: 0.82rem;
      color: #475569;
      line-height: 1.5;
      font-weight: 500;
    }
    .secondary-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .secondary-author {
      font-size: 0.75rem;
      color: #0ea5e9;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .secondary-date {
      font-size: 0.72rem;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
        gap: 12px;
      }
      .title {
        font-size: 0.85rem;
      }
      .action {
        font-size: 0.75rem;
      }
      .textarea-box {
        padding: 12px;
        min-height: 100px;
      }
      .textarea {
        font-size: 0.78rem;
      }
      .secondary-text {
        font-size: 0.78rem;
      }
      .author, .secondary-author {
        font-size: 0.7rem;
      }
      .date, .secondary-date {
        font-size: 0.68rem;
      }
    }
  `;
$e([
  lt({ type: String })
], ee.prototype, "title", 2);
$e([
  lt({ type: String, attribute: "notes-json" })
], ee.prototype, "notesJson", 2);
ee = $e([
  It({
    name: "zero-notes-card",
    version: "1.0.0",
    title: "Notes Card",
    elementSelector: "zero-notes-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  zt()
], ee);
export {
  ee as ZeroNotesCard
};
