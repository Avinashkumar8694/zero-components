var Ut = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ze = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Le == "object" ? Le : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), N = typeof WeakMap == "function" ? WeakMap : Nt(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Ct(), Ae = Pt(ne);
    function dt(i, o, a, c) {
      if (m(a)) {
        if (!ke(i))
          throw new TypeError();
        if (!Re(o))
          throw new TypeError();
        return wt(i, o);
      } else {
        if (!ke(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(c) && !m(c) && !J(c))
          throw new TypeError();
        return J(c) && (c = void 0), a = R(a), bt(i, o, a, c);
      }
    }
    e("decorate", dt);
    function ht(i, o) {
      function a(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!m(v) && !Ot(v))
          throw new TypeError();
        Oe(i, o, c, v);
      }
      return a;
    }
    e("metadata", ht);
    function ft(i, o, a, c) {
      if (!x(a))
        throw new TypeError();
      return m(c) || (c = R(c)), Oe(i, o, a, c);
    }
    e("defineMetadata", ft);
    function pt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Ee(i, o, a);
    }
    e("hasMetadata", pt);
    function yt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), de(i, o, a);
    }
    e("hasOwnMetadata", yt);
    function vt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Se(i, o, a);
    }
    e("getMetadata", vt);
    function _t(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), xe(i, o, a);
    }
    e("getOwnMetadata", _t);
    function mt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = R(o)), Me(i, o);
    }
    e("getMetadataKeys", mt);
    function gt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = R(o)), Ce(i, o);
    }
    e("getOwnMetadataKeys", gt);
    function $t(i, o, a) {
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
    e("deleteMetadata", $t);
    function wt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !J(v)) {
          if (!Re(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function bt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(o, a, c);
        if (!m(O) && !J(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ee(i, o, a) {
      var c = de(i, o, a);
      if (c)
        return !0;
      var v = fe(o);
      return J(v) ? !1 : Ee(i, v, a);
    }
    function de(i, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Te(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Se(i, o, a) {
      var c = de(i, o, a);
      if (c)
        return xe(i, o, a);
      var v = fe(o);
      if (!J(v))
        return Se(i, v, a);
    }
    function xe(i, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Oe(i, o, a, c) {
      var v = F(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Me(i, o) {
      var a = Ce(i, o), c = fe(i);
      if (c === null)
        return a;
      var v = Me(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new T(), O = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function Ce(i, o) {
      var a = F(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Pe(i) {
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
    function J(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, o) {
      switch (Pe(i)) {
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
      var a = "string", c = Ne(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return St(i);
    }
    function St(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (ie(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (ie(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Te(i) {
      return !!i;
    }
    function xt(i) {
      return "" + i;
    }
    function R(i) {
      var o = Et(i);
      return At(o) ? o : xt(o);
    }
    function ke(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ie(i) {
      return typeof i == "function";
    }
    function Re(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Pe(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function he(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ne(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ie(a))
          throw new TypeError();
        return a;
      }
    }
    function je(i) {
      var o = Ne(i, u);
      if (!ie(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function Ue(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function He(i) {
      var o = i.return;
      o && o.call(i);
    }
    function fe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Mt() {
      var i;
      !m(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
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
            c === void 0 && (c = new T()), c.add(y);
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
              for (var E = je(c); ; ) {
                var S = Ue(E);
                if (!S)
                  return;
                var k = De(S);
                if (k.isProviderFor(y, $))
                  return He(E), k;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, $))
          return i;
      }
      function d(y, $) {
        var E = v.get(y), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(y, $), m(S) || (m(E) && (E = new P(), v.set(y, E)), E.set($, S))), S;
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
          var k = v.get(y);
          m(k) && (k = new P(), v.set(y, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !m(G) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), m(i) && (i = Mt()), !m(G) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
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
      return ne.registerProvider(a), a;
      function c(h, f, y) {
        var $ = o.get(h), E = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new P(), o.set(h, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new P(), $.set(f, S), !i.setProvider(h, f, a))
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
        return m($) ? !1 : Te($.has(h));
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
        for (var E = $.keys(), S = je(E), k = 0; ; ) {
          var Ie = Ue(S);
          if (!Ie)
            return y.length = k, y;
          var jt = De(Ie);
          try {
            y[k] = jt;
          } catch (Dt) {
            try {
              He(S);
            } finally {
              throw Dt;
            }
          }
          k++;
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
    function Tt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new N(), g = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new T(), O.set(d, f)), f.add(h), !0) : !1;
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
      var c = ne.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (ne.setProvider(i, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
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
              return this._keys.length--, this._values.length--, he(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
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
            if (!he(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (he(this._keys[f], d)) {
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
    function Rt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new P();
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
    function Nt() {
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
        if (!n.call(d, a)) {
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
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ge || (Ge = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
  return function(e) {
    if (It(r)) {
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
function Lt(r) {
  return zt(r);
}
function Gt(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((P) => b.insertRule(P.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
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
function Jt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(r) {
  return function(e, t) {
    try {
      Jt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function nt(r) {
  return Vt(r);
}
var oe;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(oe || (oe = {}));
var ae;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(ae || (ae = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = globalThis, ge = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Je = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Je.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Je.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new it(typeof r == "string" ? r : r + "", void 0, $e), Bt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new it(t, r, $e);
}, Ft = (r, e) => {
  if (ge) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = se.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Ve = ge ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, D = globalThis, We = D.trustedTypes, er = We ? We.emptyScript : "", ye = D.reactiveElementPolyfillSupport, Z = (r, e) => r, le = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? er : null;
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
} }, we = (r, e) => !qt(r, e), Be = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: we };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Be) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Be;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Qt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(Ve(s));
    } else e !== void 0 && t.push(Ve(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : le).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = s;
      const A = p.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? we)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Z("elementProperties")] = /* @__PURE__ */ new Map(), V[Z("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: V }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, Fe = (r) => r, ue = X.trustedTypes, qe = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + j, tr = `<${ot}>`, z = document, Q = () => z.createComment(""), K = (r) => r === null || typeof r != "object" && typeof r != "function", be = Array.isArray, rr = (r) => be(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Xe = />/g, U = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ye = /'/g, Qe = /"/g, at = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Ke = nr(1), W = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function lt(r, e) {
  if (!be(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = q;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let A, b, w = -1, P = 0;
    for (; P < p.length && (u.lastIndex = P, b = u.exec(p), b !== null); ) P = u.lastIndex, u === q ? b[1] === "!--" ? u = Ze : b[1] !== void 0 ? u = Xe : b[2] !== void 0 ? (at.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = U) : b[3] !== void 0 && (u = U) : u === U ? b[0] === ">" ? (u = s ?? q, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? U : b[3] === '"' ? Qe : Ye) : u === Qe || u === Ye ? u = U : u === Ze || u === Xe ? u = q : (u = U, s = void 0);
    const T = u === U && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === q ? p + tr : w >= 0 ? (n.push(A), p.slice(0, w) + st + p.slice(w) + j + T) : p + j + (w === -2 ? _ : T);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ee {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [A, b] = ir(e, t);
    if (this.el = ee.createElement(A, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = H.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(st)) {
          const P = b[u++], T = s.getAttribute(w).split(j), N = /([.?@])?(.*)/.exec(P);
          p.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? or : N[1] === "?" ? ar : N[1] === "@" ? lr : ce }), s.removeAttribute(w);
        } else w.startsWith(j) && (p.push({ type: 6, index: l }), s.removeAttribute(w));
        if (at.test(s.tagName)) {
          const w = s.textContent.split(j), P = w.length - 1;
          if (P > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let T = 0; T < P; T++) s.append(w[T], Q()), H.nextNode(), p.push({ type: 2, index: ++l });
            s.append(w[P], Q());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(j, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function B(r, e, t = r, n) {
  var u, _;
  if (e === W) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = K(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = B(r, s._$AS(r, e.values), s, n)), e;
}
class sr {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    H.currentNode = s;
    let l = H.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new te(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new ur(l, this, e)), this._$AV.push(A), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = z, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = B(this, e, t), K(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && K(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ee.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new sr(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ee(e)), t;
  }
  k(e) {
    be(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new te(this.O(Q()), this.O(Q()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Fe(e).nextSibling;
      Fe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = B(this, e, t, 0), u = !K(e) || e !== this._$AH && e !== W, u && (this._$AH = e);
    else {
      const _ = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = B(this, _[n + p], t, p), A === W && (A = this._$AH[p]), u || (u = !K(A) || A !== this._$AH[p]), A === C ? e = C : e !== C && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class ar extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class lr extends ce {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = B(this, e, t, 0) ?? C) === W) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    B(this, e);
  }
}
const _e = X.litHtmlPolyfillSupport;
_e == null || _e(ee, te), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new te(e.insertBefore(Q(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
class Y extends V {
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
    return W;
  }
}
var rt;
Y._$litElement$ = !0, Y.finalized = !0, (rt = I.litElementHydrateSupport) == null || rt.call(I, { LitElement: Y });
const me = I.litElementPolyfillSupport;
me == null || me({ LitElement: Y });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: we }, hr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const p = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(_) {
      const p = this[u];
      e.call(this, _), this.requestUpdate(u, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ut(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, re = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? pr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && fr(e, t, s), s;
};
const ct = JSON.stringify([
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
function tt(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let L = class extends Y {
  constructor() {
    super(...arguments), this.title = "Notes", this.notesJson = ct;
  }
  static getStudioTemplate(r) {
    var n, s, l, u, _, p;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-notes-card-1.0.0></zero-notes-card-1.0.0>"
      };
    const e = tt(((n = r == null ? void 0 : r.props) == null ? void 0 : n.title) ?? ((l = (s = r == null ? void 0 : r.studio) == null ? void 0 : s.props) == null ? void 0 : l.title) ?? "Notes"), t = tt(((u = r == null ? void 0 : r.props) == null ? void 0 : u.notesJson) ?? ((p = (_ = r == null ? void 0 : r.studio) == null ? void 0 : _.props) == null ? void 0 : p.notesJson) ?? "[]");
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
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get notesJsonConfig() {
    return this.notesJson;
  }
  set notesJsonConfig(r) {
    this.notesJson = r;
  }
  render() {
    let r = [];
    try {
      r = JSON.parse(this.notesJson);
    } catch {
      r = [];
    }
    const e = r.find((n) => n.active) || r[0] || { text: "", author: "" }, t = r.filter((n) => n !== e);
    return Ke`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">See all</span>
        </div>
        <div class="textarea-box">
          <textarea class="textarea" rows="3" .value=${e.text} @input=${(n) => {
      e.text = n.target.value, this.notesJson = JSON.stringify(r);
    }}></textarea>
          <div class="meta">
            <div class="meta-left">
              <span class="author">👤 ${e.author}</span>
            </div>
            <button class="btn">save note</button>
          </div>
        </div>
        
        ${t.map((n) => Ke`
          <div class="secondary-note">
            <div class="secondary-text">${n.text}</div>
            <div class="secondary-meta">
              <span class="secondary-author">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                ${n.author}
              </span>
              <span class="secondary-date">${n.date}</span>
            </div>
          </div>
        `)}
      </div>
    `;
  }
};
L.styles = Bt`
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
re([
  ut({ type: String })
], L.prototype, "title", 2);
re([
  ut({ type: String, attribute: "notes-json" })
], L.prototype, "notesJson", 2);
re([
  nt({
    attributeType: ae.PROPERTY,
    uiComponentType: oe.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    categoryLabel: "Content",
    initialValue: "Notes"
  })
], L.prototype, "titleConfig", 1);
re([
  nt({
    attributeType: ae.PROPERTY,
    uiComponentType: oe.TEXTAREA,
    displayLabel: "Notes (JSON array of { text, author, date, active })",
    fieldMappings: "notesJson",
    categoryLabel: "Content",
    initialValue: ct
  })
], L.prototype, "notesJsonConfig", 1);
L = re([
  Lt({
    name: "zero-notes-card",
    version: "1.0.0",
    title: "Notes Card",
    elementSelector: "zero-notes-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  Gt()
], L);
export {
  L as ZeroNotesCard
};
