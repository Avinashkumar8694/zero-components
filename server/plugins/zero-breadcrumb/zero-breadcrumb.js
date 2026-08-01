var Ut = Object.defineProperty;
var jt = (n, e, t) => e in n ? Ut(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Qe = (n, e, t) => jt(n, typeof e != "symbol" ? e + "" : e, t);
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var et;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ke == "object" ? Ke : typeof self == "object" ? self : typeof this == "object" ? this : m(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(d, A) {
      return function(w, g) {
        Object.defineProperty(d, w, { configurable: !0, writable: !0, value: g }), A && A(w, g);
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
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", d = { __proto__: [] } instanceof Array, A = !m && !d, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Ee(/* @__PURE__ */ Object.create(null));
      } : d ? function() {
        return Ee({ __proto__: null });
      } : function() {
        return Ee({});
      },
      has: A ? function(i, a) {
        return r.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: A ? function(i, a) {
        return r.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, g = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), k = typeof WeakMap == "function" ? WeakMap : It(), D = s ? Symbol.for("@reflect-metadata:registry") : void 0, z = xt(), Q = Tt(z);
    function K(i, a, o, c) {
      if (_(o)) {
        if (!We(i))
          throw new TypeError();
        if (!Ve(a))
          throw new TypeError();
        return wt(i, a);
      } else {
        if (!We(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(c) && !_(c) && !q(c))
          throw new TypeError();
        return q(c) && (c = void 0), o = N(o), At(i, a, o, c);
      }
    }
    e("decorate", K);
    function ge(i, a) {
      function o(c, y) {
        if (!M(c))
          throw new TypeError();
        if (!_(y) && !Ct(y))
          throw new TypeError();
        je(i, a, c, y);
      }
      return o;
    }
    e("metadata", ge);
    function H(i, a, o, c) {
      if (!M(o))
        throw new TypeError();
      return _(c) || (c = N(c)), je(i, a, o, c);
    }
    e("defineMetadata", H);
    function he(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), De(i, a, o);
    }
    e("hasMetadata", he);
    function ee(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), $e(i, a, o);
    }
    e("hasOwnMetadata", ee);
    function F(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), He(i, a, o);
    }
    e("getMetadata", F);
    function be(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Ue(i, a, o);
    }
    e("getOwnMetadata", be);
    function Ie(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = N(a)), Le(i, a);
    }
    e("getMetadataKeys", Ie);
    function bt(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = N(a)), ze(i, a);
    }
    e("getOwnMetadataKeys", bt);
    function $t(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (_(o) || (o = N(o)), !M(a))
        throw new TypeError();
      _(o) || (o = N(o));
      var c = te(
        a,
        o,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", $t);
    function wt(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], y = c(a);
        if (!_(y) && !q(y)) {
          if (!Ve(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function At(i, a, o, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], C = P(a, o, c);
        if (!_(C) && !q(C)) {
          if (!M(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function De(i, a, o) {
      var c = $e(i, a, o);
      if (c)
        return !0;
      var y = Ae(a);
      return q(y) ? !1 : De(i, y, o);
    }
    function $e(i, a, o) {
      var c = te(
        a,
        o,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ge(c.OrdinaryHasOwnMetadata(i, a, o));
    }
    function He(i, a, o) {
      var c = $e(i, a, o);
      if (c)
        return Ue(i, a, o);
      var y = Ae(a);
      if (!q(y))
        return He(i, y, o);
    }
    function Ue(i, a, o) {
      var c = te(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, a, o);
    }
    function je(i, a, o, c) {
      var y = te(
        o,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, a, o, c);
    }
    function Le(i, a) {
      var o = ze(i, a), c = Ae(i);
      if (c === null)
        return o;
      var y = Le(c, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var P = new T(), C = [], b = 0, h = o; b < h.length; b++) {
        var f = h[b], p = P.has(f);
        p || (P.add(f), C.push(f));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var f = $[v], p = P.has(f);
        p || (P.add(f), C.push(f));
      }
      return C;
    }
    function ze(i, a) {
      var o = te(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Be(i) {
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
    function Et(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, a) {
      switch (Be(i)) {
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
      var o = "string", c = Fe(i, l);
      if (c !== void 0) {
        var y = c.call(i, o);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return Ot(i);
    }
    function Ot(i, a) {
      var o, c;
      {
        var y = i.toString;
        if (fe(y)) {
          var c = y.call(i);
          if (!M(c))
            return c;
        }
        var o = i.valueOf;
        if (fe(o)) {
          var c = o.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ge(i) {
      return !!i;
    }
    function Mt(i) {
      return "" + i;
    }
    function N(i) {
      var a = St(i);
      return Et(a) ? a : Mt(a);
    }
    function We(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function fe(i) {
      return typeof i == "function";
    }
    function Ve(i) {
      return typeof i == "function";
    }
    function Ct(i) {
      switch (Be(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function we(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Fe(i, a) {
      var o = i[a];
      if (o != null) {
        if (!fe(o))
          throw new TypeError();
        return o;
      }
    }
    function qe(i) {
      var a = Fe(i, u);
      if (!fe(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function Ze(i) {
      return i.value;
    }
    function Xe(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ye(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Ae(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || a !== g)
        return a;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var y = c.constructor;
      return typeof y != "function" || y === i ? a : y;
    }
    function Pt() {
      var i;
      !_(D) && typeof t.Reflect < "u" && !(D in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = kt(t.Reflect));
      var a, o, c, y = new k(), P = {
        registerProvider: C,
        getProvider: h,
        setProvider: p
      };
      return P;
      function C(v) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case _(a):
            a = v;
            break;
          case a === v:
            break;
          case _(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            c === void 0 && (c = new T()), c.add(v);
            break;
        }
      }
      function b(v, $) {
        if (!_(a)) {
          if (a.isProviderFor(v, $))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(v, $))
              return a;
            if (!_(c))
              for (var E = qe(c); ; ) {
                var S = Xe(E);
                if (!S)
                  return;
                var R = Ze(S);
                if (R.isProviderFor(v, $))
                  return Ye(E), R;
              }
          }
        }
        if (!_(i) && i.isProviderFor(v, $))
          return i;
      }
      function h(v, $) {
        var E = y.get(v), S;
        return _(E) || (S = E.get($)), _(S) && (S = b(v, $), _(S) || (_(E) && (E = new O(), y.set(v, E)), E.set($, S))), S;
      }
      function f(v) {
        if (_(v))
          throw new TypeError();
        return a === v || o === v || !_(c) && c.has(v);
      }
      function p(v, $, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = h(v, $);
        if (S !== E) {
          if (!_(S))
            return !1;
          var R = y.get(v);
          _(R) && (R = new O(), y.set(v, R)), R.set($, E);
        }
        return !0;
      }
    }
    function xt() {
      var i;
      return !_(D) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[D]), _(i) && (i = Pt()), !_(D) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var a = new k(), o = {
        isProviderFor: function(f, p) {
          var v = a.get(f);
          return _(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return z.registerProvider(o), o;
      function c(f, p, v) {
        var $ = a.get(f), E = !1;
        if (_($)) {
          if (!v)
            return;
          $ = new O(), a.set(f, $), E = !0;
        }
        var S = $.get(p);
        if (_(S)) {
          if (!v)
            return;
          if (S = new O(), $.set(p, S), !i.setProvider(f, p, o))
            throw $.delete(p), E && a.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, p, v) {
        var $ = c(
          p,
          v,
          /*Create*/
          !1
        );
        return _($) ? !1 : Ge($.has(f));
      }
      function P(f, p, v) {
        var $ = c(
          p,
          v,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(f);
      }
      function C(f, p, v, $) {
        var E = c(
          v,
          $,
          /*Create*/
          !0
        );
        E.set(f, p);
      }
      function b(f, p) {
        var v = [], $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (_($))
          return v;
        for (var E = $.keys(), S = qe(E), R = 0; ; ) {
          var Je = Xe(S);
          if (!Je)
            return v.length = R, v;
          var Dt = Ze(Je);
          try {
            v[R] = Dt;
          } catch (Ht) {
            try {
              Ye(S);
            } finally {
              throw Ht;
            }
          }
          R++;
        }
      }
      function h(f, p, v) {
        var $ = c(
          p,
          v,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(f))
          return !1;
        if ($.size === 0) {
          var E = a.get(p);
          _(E) || (E.delete(v), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function kt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new k(), b = {
        isProviderFor: function(h, f) {
          var p = C.get(h);
          return !_(p) && p.has(f) ? !0 : y(h, f).length ? (_(p) && (p = new T(), C.set(h, p)), p.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function te(i, a, o) {
      var c = z.getProvider(i, a);
      if (!_(c))
        return c;
      if (o) {
        if (z.setProvider(i, a, Q))
          return Q;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function b(h, f, p) {
            this._index = 0, this._keys = h, this._values = f, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var f = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: h, done: !0 };
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
          }), b.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, b.prototype.set = function(h, f) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = f, this;
          }, b.prototype.delete = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var p = this._keys.length, v = f + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, we(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(h, f) {
            if (!we(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (we(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function y(b, h) {
        return b;
      }
      function P(b, h) {
        return h;
      }
      function C(b, h) {
        return [b, h];
      }
    }
    function Nt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new O();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
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
    function It() {
      var i = 16, a = w.create(), o = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(f) {
            var p = y(
              f,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, h.prototype.get = function(f) {
            var p = y(
              f,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, h.prototype.set = function(f, p) {
            var v = y(
              f,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, h.prototype.delete = function(f) {
            var p = y(
              f,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while (w.has(a, h));
        return a[h] = !0, h;
      }
      function y(h, f) {
        if (!r.call(h, o)) {
          if (!f)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function P(h, f) {
        for (var p = 0; p < f; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function C(h) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, h), f;
        }
        return P(new Array(h), h);
      }
      function b() {
        var h = C(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var f = "", p = 0; p < i; ++p) {
          var v = h[p];
          (p === 4 || p === 6 || p === 8) && (f += "-"), v < 16 && (f += "0"), f += v.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function Ee(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(et || (et = {}));
function Lt(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function zt(n) {
  return function(e) {
    if (Lt(n)) {
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
function Bt(n) {
  return zt(n);
}
function Gt(n) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Qe(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, d = this.shadowRoot;
        if (!d) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((O) => w.insertRule(O.cssText)), d.adoptedStyleSheets = [...d.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          d.appendChild(w);
        }
        u.forEach((w) => {
          const g = w.cloneNode(!0);
          d.appendChild(g);
        });
      }
    }
    return t;
  };
}
function Wt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(n) {
  return function(e, t) {
    try {
      Wt(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? t);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function me(n) {
  return Vt(n);
}
var ae;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(ae || (ae = {}));
var X;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(X || (X = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe = globalThis, xe = pe.ShadowRoot && (pe.ShadyCSS === void 0 || pe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Te = Symbol(), tt = /* @__PURE__ */ new WeakMap();
let vt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Te) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (xe && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = tt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && tt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (n) => new vt(typeof n == "string" ? n : n + "", void 0, Te), qt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new vt(t, n, Te);
}, Zt = (n, e) => {
  if (xe) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = pe.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, rt = xe ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ft(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, j = globalThis, nt = j.trustedTypes, tr = nt ? nt.emptyScript : "", Se = j.reactiveElementPolyfillSupport, ne = (n, e) => n, ve = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? tr : null;
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
} }, ke = (n, e) => !Xt(n, e), it = { attribute: !0, type: String, converter: ve, reflect: !1, useDefault: !1, hasChanged: ke };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = it) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? it;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, r = [...Qt(t), ...Kt(t)];
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
      for (const s of r) t.unshift(rt(s));
    } else e !== void 0 && t.push(rt(e));
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
    return Zt(e, this.constructor.elementStyles), e;
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
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ve).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = r.getPropertyOptions(s), d = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ve;
      this._$Em = s;
      const A = d.fromAttribute(t, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = m.getPropertyOptions(e)), !((r.hasChanged ?? ke)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, r)))) return;
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
        const { wrapped: m } = u, d = this[l];
        m !== !0 || this._$AL.has(l) || d === void 0 || this.C(l, void 0, u, d);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ne("elementProperties")] = /* @__PURE__ */ new Map(), Z[ne("finalized")] = /* @__PURE__ */ new Map(), Se == null || Se({ ReactiveElement: Z }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, st = (n) => n, ye = ie.trustedTypes, at = ye ? ye.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, yt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, mt = "?" + U, rr = `<${mt}>`, V = document, oe = () => V.createComment(""), le = (n) => n === null || typeof n != "object" && typeof n != "function", Re = Array.isArray, nr = (n) => Re(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", Oe = `[ 	
\f\r]`, re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ot = /-->/g, lt = />/g, B = RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ut = /'/g, ct = /"/g, _t = /^(?:script|style|textarea|title)$/i, ir = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), Me = ir(1), Y = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), ht = /* @__PURE__ */ new WeakMap(), G = V.createTreeWalker(V, 129);
function gt(n, e) {
  if (!Re(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return at !== void 0 ? at.createHTML(e) : e;
}
const sr = (n, e) => {
  const t = n.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = re;
  for (let m = 0; m < t; m++) {
    const d = n[m];
    let A, w, g = -1, O = 0;
    for (; O < d.length && (u.lastIndex = O, w = u.exec(d), w !== null); ) O = u.lastIndex, u === re ? w[1] === "!--" ? u = ot : w[1] !== void 0 ? u = lt : w[2] !== void 0 ? (_t.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = B) : w[3] !== void 0 && (u = B) : u === B ? w[0] === ">" ? (u = s ?? re, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? B : w[3] === '"' ? ct : ut) : u === ct || u === ut ? u = B : u === ot || u === lt ? u = re : (u = B, s = void 0);
    const T = u === B && n[m + 1].startsWith("/>") ? " " : "";
    l += u === re ? d + rr : g >= 0 ? (r.push(A), d.slice(0, g) + yt + d.slice(g) + U + T) : d + U + (g === -2 ? m : T);
  }
  return [gt(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ue {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, d = this.parts, [A, w] = sr(e, t);
    if (this.el = ue.createElement(A, r), G.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = G.nextNode()) !== null && d.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(yt)) {
          const O = w[u++], T = s.getAttribute(g).split(U), k = /([.?@])?(.*)/.exec(O);
          d.push({ type: 1, index: l, name: k[2], strings: T, ctor: k[1] === "." ? or : k[1] === "?" ? lr : k[1] === "@" ? ur : _e }), s.removeAttribute(g);
        } else g.startsWith(U) && (d.push({ type: 6, index: l }), s.removeAttribute(g));
        if (_t.test(s.tagName)) {
          const g = s.textContent.split(U), O = g.length - 1;
          if (O > 0) {
            s.textContent = ye ? ye.emptyScript : "";
            for (let T = 0; T < O; T++) s.append(g[T], oe()), G.nextNode(), d.push({ type: 2, index: ++l });
            s.append(g[O], oe());
          }
        }
      } else if (s.nodeType === 8) if (s.data === mt) d.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(U, g + 1)) !== -1; ) d.push({ type: 7, index: l }), g += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = V.createElement("template");
    return r.innerHTML = e, r;
  }
}
function J(n, e, t = n, r) {
  var u, m;
  if (e === Y) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = le(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = J(n, s._$AS(n, e.values), s, r)), e;
}
class ar {
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, m = 0, d = r[0];
    for (; d !== void 0; ) {
      if (u === d.index) {
        let A;
        d.type === 2 ? A = new ce(l, l.nextSibling, this, e) : d.type === 1 ? A = new d.ctor(l, d.name, d.strings, this, e) : d.type === 6 && (A = new cr(l, this, e)), this._$AV.push(A), d = r[++m];
      }
      u !== (d == null ? void 0 : d.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = V, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ce {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), le(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && le(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ue.createElement(gt(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ar(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = ht.get(e.strings);
    return t === void 0 && ht.set(e.strings, t = new ue(e)), t;
  }
  k(e) {
    Re(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new ce(this.O(oe()), this.O(oe()), this, this.options)) : r = t[s], r._$AI(l), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = st(e).nextSibling;
      st(e).remove(), e = s;
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
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = x;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !le(e) || e !== this._$AH && e !== Y, u && (this._$AH = e);
    else {
      const m = e;
      let d, A;
      for (e = l[0], d = 0; d < l.length - 1; d++) A = J(this, m[r + d], t, d), A === Y && (A = this._$AH[d]), u || (u = !le(A) || A !== this._$AH[d]), A === x ? e = x : e !== x && (e += (A ?? "") + l[d + 1]), this._$AH[d] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class lr extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class ur extends _e {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? x) === Y) return;
    const r = this._$AH, s = e === x && r !== x || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== x && (r === x || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const Ce = ie.litHtmlPolyfillSupport;
Ce == null || Ce(ue, ce), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const hr = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new ce(e.insertBefore(oe(), l), l, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class se extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(t, this.renderRoot, this.renderOptions);
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
    return Y;
  }
}
var pt;
se._$litElement$ = !0, se.finalized = !0, (pt = W.litElementHydrateSupport) == null || pt.call(W, { LitElement: se });
const Pe = W.litElementPolyfillSupport;
Pe == null || Pe({ LitElement: se });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: ke }, dr = (n = fr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const d = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, d, n, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, n, m), m;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(m) {
      const d = this[u];
      e.call(this, m), this.requestUpdate(u, d, n, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Ne(n) {
  return (e, t) => typeof t == "object" ? dr(n, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, L = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? vr(e, t) : e, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && pr(e, t, s), s;
};
const ft = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:8px;font-family:inherit;font-size:14px;box-sizing:border-box;'>",
    "<span style='color:#6b7280;'>Home</span>",
    "<span style='color:#9ca3af;'>/</span>",
    "<span style='color:#6b7280;'>Library</span>",
    "<span style='color:#9ca3af;'>/</span>",
    "<span style='color:#111827;font-weight:600;'>Data</span>",
    "</div>"
  ].join(""),
  labelProp: "separator",
  badges: ["Navigation"]
};
function de(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function dt(n, e) {
  if (!n) return e;
  try {
    const t = JSON.parse(n);
    return Array.isArray(t) ? t.map((r) => ({ label: String((r == null ? void 0 : r.label) ?? ""), href: r != null && r.href ? String(r.href) : void 0 })).filter((r) => r.label !== "") : e;
  } catch {
    return e;
  }
}
let I = class extends se {
  constructor() {
    super(...arguments), this.items = '[{"label":"Home","href":"#"},{"label":"Library","href":"#"},{"label":"Data"}]', this.separator = "/", this.variant = "default";
  }
  static getStudioTemplate(n) {
    var A, w, g, O, T, k, D, z, Q;
    if (!n) return ft;
    const e = de(((A = n.props) == null ? void 0 : A.separator) ?? ((g = (w = n.studio) == null ? void 0 : w.props) == null ? void 0 : g.separator) ?? "/"), t = (((O = n.props) == null ? void 0 : O.variant) ?? ((k = (T = n.studio) == null ? void 0 : T.props) == null ? void 0 : k.variant)) || "default", r = dt(((D = n.props) == null ? void 0 : D.items) ?? ((Q = (z = n.studio) == null ? void 0 : z.props) == null ? void 0 : Q.items), [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data" }
    ]), s = "var(--uiv-text-muted, #6b7280)", l = "var(--uiv-text-color, #111827)", u = "var(--uiv-primary-color, #6366f1)", m = "var(--uiv-bg-secondary, #f1f5f9)", d = [];
    return r.forEach((K, ge) => {
      const H = ge === r.length - 1, he = H ? l : s, ee = H ? "600" : "400";
      let F;
      t === "chips" ? F = `<span style='padding:4px 12px;border-radius:999px;background:${H ? u : m};color:${H ? "#ffffff" : s};font-weight:${ee};font-size:13px;'>${de(K.label)}</span>` : t === "underline" ? F = `<span style='color:${he};font-weight:${ee};text-decoration:${H ? "none" : "underline"};'>${de(K.label)}</span>` : F = `<span style='color:${he};font-weight:${ee};'>${de(K.label)}</span>`, d.push(F), !H && t !== "chips" ? d.push(`<span style='color:var(--uiv-text-tertiary, #9ca3af);'>${e}</span>`) : !H && t === "chips" && d.push(`<span style='color:var(--uiv-text-tertiary, #9ca3af);'>${e}</span>`);
    }), {
      ...ft,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:8px;font-family:inherit;font-size:14px;box-sizing:border-box;flex-wrap:wrap;'>",
        d.join(""),
        "</div>"
      ].join("")
    };
  }
  get itemsConfig() {
    return this.items;
  }
  set itemsConfig(n) {
    this.items = n;
  }
  get separatorConfig() {
    return this.separator;
  }
  set separatorConfig(n) {
    this.separator = n || "/";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(n) {
    this.variant = n || "default";
  }
  parseItems() {
    return dt(this.items, []);
  }
  handleItemClick(n, e, t) {
    t.preventDefault(), this.dispatchEvent(
      new CustomEvent("on-item-click", {
        detail: { label: n.label, href: n.href ?? "", index: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const n = this.parseItems();
    return Me`
      <nav class="variant-${this.variant}" aria-label="Breadcrumb">
        ${n.map((e, t) => {
      const r = t === n.length - 1;
      return Me`
            <button
              class="crumb ${r ? "current" : ""}"
              aria-current=${r ? "page" : "false"}
              @click=${(s) => r ? void 0 : this.handleItemClick(e, t, s)}
            >
              ${e.label}
            </button>
            ${r ? "" : Me`<span class="sep">${this.separator}</span>`}
          `;
    })}
      </nav>
    `;
  }
};
I.styles = qt`
    :host {
      display: block;
      --bc-p: var(--uiv-primary-color, #6366f1);
      --bc-muted: var(--uiv-text-muted, #6b7280);
      --bc-text: var(--uiv-text-color, #111827);
      --bc-sep: var(--uiv-text-tertiary, #9ca3af);
      --bc-track: var(--uiv-bg-secondary, #f1f5f9);
    }

    nav {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      font-family: inherit;
      font-size: 0.875rem;
      box-sizing: border-box;
    }

    .crumb {
      background: none;
      border: none;
      font-family: inherit;
      font-size: 0.875rem;
      color: var(--bc-muted);
      cursor: pointer;
      padding: 2px 0;
      transition: color 0.2s ease;
      text-decoration: none;
    }
    .crumb:hover:not(.current) {
      color: var(--bc-p);
    }
    .crumb.current {
      color: var(--bc-text);
      font-weight: 600;
      cursor: default;
    }

    .sep {
      color: var(--bc-sep);
      user-select: none;
    }

    /* Chips variant */
    .variant-chips .crumb {
      padding: 4px 12px;
      border-radius: 999px;
      background: var(--bc-track);
      color: var(--bc-muted);
      font-weight: 500;
    }
    .variant-chips .crumb:hover:not(.current) {
      background: var(--uiv-bg-tertiary, #e2e8f0);
      color: var(--bc-text);
    }
    .variant-chips .crumb.current {
      background: var(--bc-p);
      color: #ffffff;
    }

    /* Underline variant */
    .variant-underline .crumb:not(.current) {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  `;
L([
  Ne({ type: String })
], I.prototype, "items", 2);
L([
  Ne({ type: String })
], I.prototype, "separator", 2);
L([
  Ne({ type: String })
], I.prototype, "variant", 2);
L([
  me({
    attributeType: X.PROPERTY,
    uiComponentType: ae.TEXTAREA,
    displayLabel: "Items (JSON array of {label, href})",
    fieldMappings: "items"
  })
], I.prototype, "itemsConfig", 1);
L([
  me({
    attributeType: X.PROPERTY,
    uiComponentType: ae.TEXT_INPUT,
    displayLabel: "Separator",
    fieldMappings: "separator"
  })
], I.prototype, "separatorConfig", 1);
L([
  me({
    attributeType: X.PROPERTY,
    uiComponentType: ae.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Default", value: "default" },
      { label: "Chips", value: "chips" },
      { label: "Underline", value: "underline" }
    ]
  })
], I.prototype, "variantConfig", 1);
L([
  me({
    attributeType: X.EVENT,
    displayLabel: "On Item Click",
    eventTrigger: "on-item-click"
  })
], I.prototype, "handleItemClick", 1);
I = L([
  Bt({
    name: "zero-breadcrumb",
    version: "1.0.0",
    title: "Breadcrumb",
    elementSelector: "zero-breadcrumb",
    group: "Navigation",
    iconName: "breadcrumb-icon.png"
  }),
  Gt()
], I);
export {
  I as ZeroBreadcrumb,
  ft as studioTemplate
};
