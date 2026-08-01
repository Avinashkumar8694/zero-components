var Ue = Object.defineProperty;
var ze = (r, t, e) => t in r ? Ue(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var re = (r, t, e) => ze(r, typeof t != "symbol" ? t + "" : t, e);
var ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ie;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof ne == "object" ? ne : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
      return function(w, g) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: g }), A && A(w, g);
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
    function m() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Tt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Tt({ __proto__: null });
      } : function() {
        return Tt({});
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
    }, g = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ie(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), k = typeof WeakMap == "function" ? WeakMap : De(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, L = Te(), Q = Re(L);
    function dt(i, o, a, c) {
      if (_(a)) {
        if (!Zt(i))
          throw new TypeError();
        if (!Jt(o))
          throw new TypeError();
        return Ot(i, o);
      } else {
        if (!Zt(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !_(c) && !q(c))
          throw new TypeError();
        return q(c) && (c = void 0), a = N(a), Ee(i, o, a, c);
      }
    }
    t("decorate", dt);
    function ft(i, o) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!_(y) && !Ce(y))
          throw new TypeError();
        Gt(i, o, c, y);
      }
      return a;
    }
    t("metadata", ft);
    function ht(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = N(c)), Gt(i, o, a, c);
    }
    t("defineMetadata", ht);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), zt(i, o, a);
    }
    t("hasMetadata", pt);
    function j(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Mt(i, o, a);
    }
    t("hasOwnMetadata", j);
    function wt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Lt(i, o, a);
    }
    t("getMetadata", wt);
    function At(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Bt(i, o, a);
    }
    t("getOwnMetadata", At);
    function Et(i, o) {
      if (!O(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Wt(i, o);
    }
    t("getMetadataKeys", Et);
    function St(i, o) {
      if (!O(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Vt(i, o);
    }
    t("getOwnMetadataKeys", St);
    function xt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (_(a) || (a = N(a)), !O(o))
        throw new TypeError();
      _(a) || (a = N(a));
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", xt);
    function Ot(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(o);
        if (!_(y) && !q(y)) {
          if (!Jt(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function Ee(i, o, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var C = i[y], M = C(o, a, c);
        if (!_(M) && !q(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function zt(i, o, a) {
      var c = Mt(i, o, a);
      if (c)
        return !0;
      var y = Pt(o);
      return q(y) ? !1 : zt(i, y, a);
    }
    function Mt(i, o, a) {
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : qt(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Lt(i, o, a) {
      var c = Mt(i, o, a);
      if (c)
        return Bt(i, o, a);
      var y = Pt(o);
      if (!q(y))
        return Lt(i, y, a);
    }
    function Bt(i, o, a) {
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Gt(i, o, a, c) {
      var y = K(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Wt(i, o) {
      var a = Vt(i, o), c = Pt(i);
      if (c === null)
        return a;
      var y = Wt(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var C = new T(), M = [], b = 0, d = a; b < d.length; b++) {
        var f = d[b], h = C.has(f);
        h || (C.add(f), M.push(f));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var f = $[v], h = C.has(f);
        h || (C.add(f), M.push(f));
      }
      return M;
    }
    function Vt(i, o) {
      var a = K(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Ft(i) {
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
    function _(i) {
      return i === void 0;
    }
    function q(i) {
      return i === null;
    }
    function Se(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, o) {
      switch (Ft(i)) {
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
      var a = "string", c = Xt(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return Oe(i);
    }
    function Oe(i, o) {
      var a, c;
      {
        var y = i.toString;
        if (vt(y)) {
          var c = y.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (vt(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function qt(i) {
      return !!i;
    }
    function Me(i) {
      return "" + i;
    }
    function N(i) {
      var o = xe(i);
      return Se(o) ? o : Me(o);
    }
    function Zt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function vt(i) {
      return typeof i == "function";
    }
    function Jt(i) {
      return typeof i == "function";
    }
    function Ce(i) {
      switch (Ft(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ct(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Xt(i, o) {
      var a = i[o];
      if (a != null) {
        if (!vt(a))
          throw new TypeError();
        return a;
      }
    }
    function Yt(i) {
      var o = Xt(i, u);
      if (!vt(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Qt(i) {
      return i.value;
    }
    function Kt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function te(i) {
      var o = i.return;
      o && o.call(i);
    }
    function Pt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Pe() {
      var i;
      !_(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = ke(e.Reflect));
      var o, a, c, y = new k(), C = {
        registerProvider: M,
        getProvider: d,
        setProvider: h
      };
      return C;
      function M(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case _(o):
            o = v;
            break;
          case o === v:
            break;
          case _(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            c === void 0 && (c = new T()), c.add(v);
            break;
        }
      }
      function b(v, $) {
        if (!_(o)) {
          if (o.isProviderFor(v, $))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(v, $))
              return o;
            if (!_(c))
              for (var E = Yt(c); ; ) {
                var S = Kt(E);
                if (!S)
                  return;
                var I = Qt(S);
                if (I.isProviderFor(v, $))
                  return te(E), I;
              }
          }
        }
        if (!_(i) && i.isProviderFor(v, $))
          return i;
      }
      function d(v, $) {
        var E = y.get(v), S;
        return _(E) || (S = E.get($)), _(S) && (S = b(v, $), _(S) || (_(E) && (E = new x(), y.set(v, E)), E.set($, S))), S;
      }
      function f(v) {
        if (_(v))
          throw new TypeError();
        return o === v || a === v || !_(c) && c.has(v);
      }
      function h(v, $, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = d(v, $);
        if (S !== E) {
          if (!_(S))
            return !1;
          var I = y.get(v);
          _(I) && (I = new x(), y.set(v, I)), I.set($, E);
        }
        return !0;
      }
    }
    function Te() {
      var i;
      return !_(H) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), _(i) && (i = Pe()), !_(H) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Re(i) {
      var o = new k(), a = {
        isProviderFor: function(f, h) {
          var v = o.get(f);
          return _(v) ? !1 : v.has(h);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return L.registerProvider(a), a;
      function c(f, h, v) {
        var $ = o.get(f), E = !1;
        if (_($)) {
          if (!v)
            return;
          $ = new x(), o.set(f, $), E = !0;
        }
        var S = $.get(h);
        if (_(S)) {
          if (!v)
            return;
          if (S = new x(), $.set(h, S), !i.setProvider(f, h, a))
            throw $.delete(h), E && o.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, h, v) {
        var $ = c(
          h,
          v,
          /*Create*/
          !1
        );
        return _($) ? !1 : qt($.has(f));
      }
      function C(f, h, v) {
        var $ = c(
          h,
          v,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(f);
      }
      function M(f, h, v, $) {
        var E = c(
          v,
          $,
          /*Create*/
          !0
        );
        E.set(f, h);
      }
      function b(f, h) {
        var v = [], $ = c(
          f,
          h,
          /*Create*/
          !1
        );
        if (_($))
          return v;
        for (var E = $.keys(), S = Yt(E), I = 0; ; ) {
          var ee = Kt(S);
          if (!ee)
            return v.length = I, v;
          var He = Qt(ee);
          try {
            v[I] = He;
          } catch (je) {
            try {
              te(S);
            } finally {
              throw je;
            }
          }
          I++;
        }
      }
      function d(f, h, v) {
        var $ = c(
          h,
          v,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(f))
          return !1;
        if ($.size === 0) {
          var E = o.get(h);
          _(E) || (E.delete(v), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function ke(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new k(), b = {
        isProviderFor: function(d, f) {
          var h = M.get(d);
          return !_(h) && h.has(f) ? !0 : y(d, f).length ? (_(h) && (h = new T(), M.set(d, h)), h.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return b;
    }
    function K(i, o, a) {
      var c = L.getProvider(i, o);
      if (!_(c))
        return c;
      if (a) {
        if (L.setProvider(i, o, Q))
          return Q;
        throw new Error("Illegal state.");
      }
    }
    function Ie() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, f, h) {
            this._index = 0, this._keys = d, this._values = f, this._selector = h;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var f = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(d) {
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, b.prototype.set = function(d, f) {
            var h = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[h] = f, this;
          }, b.prototype.delete = function(d) {
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var h = this._keys.length, v = f + 1; v < h; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Ct(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, f) {
            if (!Ct(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (Ct(this._keys[h], d)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function y(b, d) {
        return b;
      }
      function C(b, d) {
        return d;
      }
      function M(b, d) {
        return [b, d];
      }
    }
    function Ne() {
      var i = (
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
      return i;
    }
    function De() {
      var i = 16, o = w.create(), a = c();
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
            var v = y(
              f,
              /*create*/
              !0
            );
            return v[this._key] = h, this;
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
          d = "@@WeakMap@@" + b();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, f) {
        if (!n.call(d, a)) {
          if (!f)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function C(d, f) {
        for (var h = 0; h < f; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : C(f, d), f;
        }
        return C(new Array(d), d);
      }
      function b() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var f = "", h = 0; h < i; ++h) {
          var v = d[h];
          (h === 4 || h === 6 || h === 8) && (f += "-"), v < 16 && (f += "0"), f += v.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function Tt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ie || (ie = {}));
function Le(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Be(r) {
  return function(t) {
    if (Le(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
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
function Ge(r) {
  return Be(r);
}
function We(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        re(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((x) => w.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const g = w.cloneNode(!0);
          p.appendChild(g);
        });
      }
    }
    return e;
  };
}
function Ve(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Fe(r) {
  return function(t, e) {
    try {
      Ve(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function ut(r) {
  return Fe(r);
}
var J;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(J || (J = {}));
var V;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(V || (V = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt = globalThis, Dt = mt.ShadowRoot && (mt.ShadyCSS === void 0 || mt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ht = Symbol(), se = /* @__PURE__ */ new WeakMap();
let ge = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Ht) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Dt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = se.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && se.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const qe = (r) => new ge(typeof r == "string" ? r : r + "", void 0, Ht), Ze = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ge(e, r, Ht);
}, Je = (r, t) => {
  if (Dt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = mt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, oe = Dt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return qe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Ye, getOwnPropertyDescriptor: Qe, getOwnPropertyNames: Ke, getOwnPropertySymbols: tr, getPrototypeOf: er } = Object, z = globalThis, ae = z.trustedTypes, rr = ae ? ae.emptyScript : "", Rt = z.reactiveElementPolyfillSupport, nt = (r, t) => r, _t = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? rr : null;
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
} }, jt = (r, t) => !Xe(r, t), le = { attribute: !0, type: String, converter: _t, reflect: !1, useDefault: !1, hasChanged: jt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = le) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ye(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? le;
  }
  static _$Ei() {
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = er(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
      const e = this.properties, n = [...Ke(e), ...tr(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(oe(s));
    } else t !== void 0 && e.push(oe(t));
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
    return Je(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : _t).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : _t;
      this._$Em = s;
      const A = p.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? jt)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
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
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[nt("elementProperties")] = /* @__PURE__ */ new Map(), Z[nt("finalized")] = /* @__PURE__ */ new Map(), Rt == null || Rt({ ReactiveElement: Z }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, ue = (r) => r, gt = it.trustedTypes, ce = gt ? gt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, be = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, $e = "?" + U, nr = `<${$e}>`, F = document, ot = () => F.createComment(""), at = (r) => r === null || typeof r != "object" && typeof r != "function", Ut = Array.isArray, ir = (r) => Ut(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", kt = `[ 	
\f\r]`, tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, de = /-->/g, fe = />/g, B = RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), he = /'/g, pe = /"/g, we = /^(?:script|style|textarea|title)$/i, sr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), et = sr(1), X = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ve = /* @__PURE__ */ new WeakMap(), G = F.createTreeWalker(F, 129);
function Ae(r, t) {
  if (!Ut(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ce !== void 0 ? ce.createHTML(t) : t;
}
const or = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = tt;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let A, w, g = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, w = u.exec(p), w !== null); ) x = u.lastIndex, u === tt ? w[1] === "!--" ? u = de : w[1] !== void 0 ? u = fe : w[2] !== void 0 ? (we.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = B) : w[3] !== void 0 && (u = B) : u === B ? w[0] === ">" ? (u = s ?? tt, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? B : w[3] === '"' ? pe : he) : u === pe || u === he ? u = B : u === de || u === fe ? u = tt : (u = B, s = void 0);
    const T = u === B && r[m + 1].startsWith("/>") ? " " : "";
    l += u === tt ? p + nr : g >= 0 ? (n.push(A), p.slice(0, g) + be + p.slice(g) + U + T) : p + U + (g === -2 ? m : T);
  }
  return [Ae(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class lt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [A, w] = or(t, e);
    if (this.el = lt.createElement(A, n), G.currentNode = this.el.content, e === 2 || e === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = G.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(be)) {
          const x = w[u++], T = s.getAttribute(g).split(U), k = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: k[2], strings: T, ctor: k[1] === "." ? lr : k[1] === "?" ? ur : k[1] === "@" ? cr : bt }), s.removeAttribute(g);
        } else g.startsWith(U) && (p.push({ type: 6, index: l }), s.removeAttribute(g));
        if (we.test(s.tagName)) {
          const g = s.textContent.split(U), x = g.length - 1;
          if (x > 0) {
            s.textContent = gt ? gt.emptyScript : "";
            for (let T = 0; T < x; T++) s.append(g[T], ot()), G.nextNode(), p.push({ type: 2, index: ++l });
            s.append(g[x], ot());
          }
        }
      } else if (s.nodeType === 8) if (s.data === $e) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(U, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = F.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Y(r, t, e = r, n) {
  var u, m;
  if (t === X) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = at(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Y(r, s._$AS(r, t.values), s, n)), t;
}
class ar {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? F).importNode(e, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ct(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new dr(l, this, t)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = F, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ct {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), at(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ir(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && at(this._$AH) ? this._$AA.nextSibling.data = t : this.T(F.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = lt.createElement(Ae(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ar(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ve.get(t.strings);
    return e === void 0 && ve.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Ut(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ct(this.O(ot()), this.O(ot()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = ue(t).nextSibling;
      ue(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class bt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Y(this, t, e, 0), u = !at(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const m = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = Y(this, m[n + p], e, p), A === X && (A = this._$AH[p]), u || (u = !at(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends bt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ur extends bt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class cr extends bt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? P) === X) return;
    const n = this._$AH, s = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Y(this, t);
  }
}
const It = it.litHtmlPolyfillSupport;
It == null || It(lt, ct), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const fr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ct(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class st extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = fr(e, this.renderRoot, this.renderOptions);
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
    return X;
  }
}
var _e;
st._$litElement$ = !0, st.finalized = !0, (_e = W.litElementHydrateSupport) == null || _e.call(W, { LitElement: st });
const Nt = W.litElementPolyfillSupport;
Nt == null || Nt({ LitElement: st });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: _t, reflect: !1, hasChanged: jt }, pr = (r = hr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const p = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(m) {
      const p = this[u];
      t.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function $t(r) {
  return (t, e) => typeof e == "object" ? pr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, D = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && vr(t, e, s), s;
};
const rt = [
  { title: "Inbox", subtitle: "12 new messages", icon: "✉", meta: "2m" },
  { title: "Drafts", subtitle: "3 unsent", icon: "✎", meta: "1h" },
  { title: "Archive", subtitle: "All caught up", icon: "🗂", meta: "3d" }
];
JSON.stringify(rt);
const ye = {
  kind: "generic",
  templateHtml: [
    "<div style='width:280px;font-family:inherit;box-sizing:border-box;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;'>",
    "<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid #f1f5f9;'><span style='font-size:18px;'>✉</span><div style='flex:1;'><div style='font-size:14px;font-weight:600;color:#1f2937;'>Inbox</div><div style='font-size:12px;color:#6b7280;'>12 new messages</div></div><span style='font-size:12px;color:#9ca3af;'>2m</span></div>",
    "<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid #f1f5f9;'><span style='font-size:18px;'>✎</span><div style='flex:1;'><div style='font-size:14px;font-weight:600;color:#1f2937;'>Drafts</div><div style='font-size:12px;color:#6b7280;'>3 unsent</div></div><span style='font-size:12px;color:#9ca3af;'>1h</span></div>",
    "<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;'><span style='font-size:18px;'>🗂</span><div style='flex:1;'><div style='font-size:14px;font-weight:600;color:#1f2937;'>Archive</div><div style='font-size:12px;color:#6b7280;'>All caught up</div></div><span style='font-size:12px;color:#9ca3af;'>3d</span></div>",
    "</div>"
  ].join(""),
  labelProp: "items",
  badges: ["Data Display", "List"]
};
function yt(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function me(r, t) {
  let e = r;
  if (typeof r == "string") {
    const s = r.trim();
    if (!s) return t;
    try {
      e = JSON.parse(s);
    } catch {
      return t;
    }
  }
  if (!Array.isArray(e))
    return t;
  const n = e.map((s) => {
    if (typeof s == "string") return { title: s };
    if (s && typeof s == "object") {
      const l = s, u = typeof l.title == "string" ? l.title : l.title != null ? String(l.title) : "";
      return u ? {
        title: u,
        subtitle: typeof l.subtitle == "string" ? l.subtitle : void 0,
        icon: typeof l.icon == "string" ? l.icon : void 0,
        meta: typeof l.meta == "string" ? l.meta : void 0
      } : null;
    }
    return null;
  }).filter(Boolean);
  return n.length ? n : t;
}
let R = class extends st {
  constructor() {
    super(...arguments), this.items = rt, this.variant = "default", this.showIcons = !0, this.interactive = !0;
  }
  static getStudioTemplate(r) {
    var T, k, H, L, Q, dt, ft, ht, pt;
    if (!r) return ye;
    const t = me(((T = r.props) == null ? void 0 : T.items) ?? ((H = (k = r.studio) == null ? void 0 : k.props) == null ? void 0 : H.items), rt), e = (((L = r.props) == null ? void 0 : L.variant) ?? ((dt = (Q = r.studio) == null ? void 0 : Q.props) == null ? void 0 : dt.variant)) || "default", n = ((ft = r.props) == null ? void 0 : ft.showIcons) ?? ((pt = (ht = r.studio) == null ? void 0 : ht.props) == null ? void 0 : pt.showIcons) ?? !0, s = "var(--uiv-surface-color, #ffffff)", l = "var(--uiv-border-color, #e5e7eb)", u = "var(--uiv-bg-secondary, #f1f5f9)", m = "var(--uiv-text-color, #1f2937)", p = "var(--uiv-text-muted, #6b7280)", A = "var(--uiv-text-tertiary, #9ca3af)", g = e === "bordered" ? `background:${s};border:1px solid ${l};border-radius:var(--uiv-border-radius, 10px);overflow:hidden;` : `background:${s};`, x = t.map((j, wt) => {
      const At = wt === t.length - 1, Et = e === "divided" || e === "bordered" ? At ? "" : `border-bottom:1px solid ${u};` : "", St = n && j.icon ? `<span style='font-size:18px;flex:none;line-height:1;'>${yt(j.icon)}</span>` : "", xt = j.subtitle ? `<div style='font-size:12px;color:${p};'>${yt(j.subtitle)}</div>` : "", Ot = j.meta ? `<span style='font-size:12px;color:${A};flex:none;'>${yt(j.meta)}</span>` : "";
      return `<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;${Et}'>${St}<div style='flex:1;min-width:0;'><div style='font-size:14px;font-weight:600;color:${m};'>${yt(j.title)}</div>${xt}</div>${Ot}</div>`;
    });
    return {
      ...ye,
      templateHtml: [
        `<div style='width:280px;font-family:inherit;box-sizing:border-box;${g}'>`,
        x.join(""),
        "</div>"
      ].join("")
    };
  }
  get itemsConfig() {
    return JSON.stringify(this.items);
  }
  // Tolerant setter: accepts BOTH an already-parsed array/object AND a JSON string.
  set itemsConfig(r) {
    this.items = me(r, rt);
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "default";
  }
  get showIconsConfig() {
    return this.showIcons;
  }
  set showIconsConfig(r) {
    this.showIcons = !!r;
  }
  get interactiveConfig() {
    return this.interactive;
  }
  set interactiveConfig(r) {
    this.interactive = !!r;
  }
  handleItemClick(r, t) {
    this.dispatchEvent(
      new CustomEvent("on-item-click", {
        detail: { index: r, item: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = Array.isArray(this.items) ? this.items : rt;
    return et`
      <ul class="list ${this.variant} ${this.interactive ? "interactive" : ""}" role="list">
        ${r.map(
      (t, e) => et`
            <li
              class="item"
              role="listitem"
              @click=${() => this.interactive && this.handleItemClick(e, t)}
            >
              ${this.showIcons && t.icon ? et`<span class="icon">${t.icon}</span>` : ""}
              <div class="body">
                <div class="title">${t.title}</div>
                ${t.subtitle ? et`<div class="subtitle">${t.subtitle}</div>` : ""}
              </div>
              ${t.meta ? et`<span class="meta">${t.meta}</span>` : ""}
            </li>
          `
    )}
      </ul>
    `;
  }
};
R.styles = Ze`
    :host {
      display: block;
      width: 100%;
      --ls-surface: var(--uiv-surface-color, #ffffff);
      --ls-border: var(--uiv-border-color, #e5e7eb);
      --ls-divider: var(--uiv-bg-secondary, #f1f5f9);
      --ls-text: var(--uiv-text-color, #1f2937);
      --ls-muted: var(--uiv-text-muted, #6b7280);
      --ls-tertiary: var(--uiv-text-tertiary, #9ca3af);
      --ls-hover: var(--uiv-bg-tertiary, rgba(99, 102, 241, 0.08));
      --ls-radius: var(--uiv-border-radius, 10px);
    }

    .list {
      font-family: inherit;
      box-sizing: border-box;
      background: var(--ls-surface);
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .list.bordered {
      border: 1px solid var(--ls-border);
      border-radius: var(--ls-radius);
      overflow: hidden;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      transition: background 0.15s ease;
    }
    .list.divided .item:not(:last-child),
    .list.bordered .item:not(:last-child) {
      border-bottom: 1px solid var(--ls-divider);
    }
    .list.interactive .item {
      cursor: pointer;
    }
    .list.interactive .item:hover {
      background: var(--ls-hover);
    }

    .icon {
      flex: none;
      font-size: 18px;
      line-height: 1;
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--ls-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subtitle {
      font-size: 0.75rem;
      color: var(--ls-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      flex: none;
      font-size: 0.75rem;
      color: var(--ls-tertiary);
    }
  `;
D([
  $t({ attribute: !1 })
], R.prototype, "items", 2);
D([
  $t({ type: String })
], R.prototype, "variant", 2);
D([
  $t({ type: Boolean, attribute: "show-icons" })
], R.prototype, "showIcons", 2);
D([
  $t({ type: Boolean })
], R.prototype, "interactive", 2);
D([
  ut({
    attributeType: V.PROPERTY,
    uiComponentType: J.TEXTAREA,
    displayLabel: "Items (JSON array of {title, subtitle, icon, meta})",
    fieldMappings: "items"
  })
], R.prototype, "itemsConfig", 1);
D([
  ut({
    attributeType: V.PROPERTY,
    uiComponentType: J.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Default", value: "default" },
      { label: "Bordered", value: "bordered" },
      { label: "Divided", value: "divided" }
    ]
  })
], R.prototype, "variantConfig", 1);
D([
  ut({
    attributeType: V.PROPERTY,
    uiComponentType: J.CHECKBOX,
    displayLabel: "Show Icons",
    fieldMappings: "showIcons"
  })
], R.prototype, "showIconsConfig", 1);
D([
  ut({
    attributeType: V.PROPERTY,
    uiComponentType: J.CHECKBOX,
    displayLabel: "Interactive (hover + pointer)",
    fieldMappings: "interactive"
  })
], R.prototype, "interactiveConfig", 1);
D([
  ut({
    attributeType: V.EVENT,
    displayLabel: "On Item Click",
    eventTrigger: "on-item-click"
  })
], R.prototype, "handleItemClick", 1);
R = D([
  Ge({
    name: "zero-list",
    version: "1.0.0",
    title: "List",
    elementSelector: "zero-list",
    group: "Data Display",
    iconName: "list-icon.png"
  }),
  We()
], R);
export {
  R as ZeroList,
  ye as studioTemplate
};
