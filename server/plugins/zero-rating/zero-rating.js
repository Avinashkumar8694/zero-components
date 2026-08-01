var Ut = Object.defineProperty;
var zt = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var nt = (r, e, t) => zt(r, typeof e != "symbol" ? e + "" : e, t);
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var st;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof it == "object" ? it : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, E) {
      return function($, g) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: g }), E && E($, g);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !v && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return Te(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Te({ __proto__: null });
      } : function() {
        return Te({});
      },
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, g = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Nt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ht(), N = typeof WeakMap == "function" ? WeakMap : Dt(), I = s ? Symbol.for("@reflect-metadata:registry") : void 0, W = Rt(), te = Tt(W);
    function ce(i, o, a, h) {
      if (_(a)) {
        if (!Ye(i))
          throw new TypeError();
        if (!Xe(o))
          throw new TypeError();
        return be(i, o);
      } else {
        if (!Ye(i))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(h) && !_(h) && !J(h))
          throw new TypeError();
        return J(h) && (h = void 0), a = D(a), Y(i, o, a, h);
      }
    }
    e("decorate", ce);
    function fe(i, o) {
      function a(h, m) {
        if (!C(h))
          throw new TypeError();
        if (!_(m) && !Pt(m))
          throw new TypeError();
        Ge(i, o, h, m);
      }
      return a;
    }
    e("metadata", fe);
    function de(i, o, a, h) {
      if (!C(a))
        throw new TypeError();
      return _(h) || (h = D(h)), Ge(i, o, a, h);
    }
    e("defineMetadata", de);
    function pe(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = D(a)), X(i, o, a);
    }
    e("hasMetadata", pe);
    function ye(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = D(a)), Pe(i, o, a);
    }
    e("hasOwnMetadata", ye);
    function ve(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = D(a)), Be(i, o, a);
    }
    e("getMetadata", ve);
    function me(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = D(a)), We(i, o, a);
    }
    e("getOwnMetadata", me);
    function _e(i, o) {
      if (!C(i))
        throw new TypeError();
      return _(o) || (o = D(o)), Ve(i, o);
    }
    e("getMetadataKeys", _e);
    function ge(i, o) {
      if (!C(i))
        throw new TypeError();
      return _(o) || (o = D(o)), Fe(i, o);
    }
    e("getOwnMetadataKeys", ge);
    function $e(i, o, a) {
      if (!C(o))
        throw new TypeError();
      if (_(a) || (a = D(a)), !C(o))
        throw new TypeError();
      _(a) || (a = D(a));
      var h = re(
        o,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", $e);
    function be(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var h = i[a], m = h(o);
        if (!_(m) && !J(m)) {
          if (!Xe(m))
            throw new TypeError();
          o = m;
        }
      }
      return o;
    }
    function Y(i, o, a, h) {
      for (var m = i.length - 1; m >= 0; --m) {
        var P = i[m], O = P(o, a, h);
        if (!_(O) && !J(O)) {
          if (!C(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function X(i, o, a) {
      var h = Pe(i, o, a);
      if (h)
        return !0;
      var m = Re(o);
      return J(m) ? !1 : X(i, m, a);
    }
    function Pe(i, o, a) {
      var h = re(
        o,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Ze(h.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Be(i, o, a) {
      var h = Pe(i, o, a);
      if (h)
        return We(i, o, a);
      var m = Re(o);
      if (!J(m))
        return Be(i, m, a);
    }
    function We(i, o, a) {
      var h = re(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ge(i, o, a, h) {
      var m = re(
        a,
        h,
        /*Create*/
        !0
      );
      m.OrdinaryDefineOwnMetadata(i, o, a, h);
    }
    function Ve(i, o) {
      var a = Fe(i, o), h = Re(i);
      if (h === null)
        return a;
      var m = Ve(h, o);
      if (m.length <= 0)
        return a;
      if (a.length <= 0)
        return m;
      for (var P = new k(), O = [], b = 0, c = a; b < c.length; b++) {
        var f = c[b], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      for (var y = 0, w = m; y < w.length; y++) {
        var f = w[y], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      return O;
    }
    function Fe(i, o) {
      var a = re(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function qe(i) {
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
    function J(i) {
      return i === null;
    }
    function Mt(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, o) {
      switch (qe(i)) {
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
      var a = "string", h = Je(i, l);
      if (h !== void 0) {
        var m = h.call(i, a);
        if (C(m))
          throw new TypeError();
        return m;
      }
      return Ct(i);
    }
    function Ct(i, o) {
      var a, h;
      {
        var m = i.toString;
        if (we(m)) {
          var h = m.call(i);
          if (!C(h))
            return h;
        }
        var a = i.valueOf;
        if (we(a)) {
          var h = a.call(i);
          if (!C(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Ze(i) {
      return !!i;
    }
    function Ot(i) {
      return "" + i;
    }
    function D(i) {
      var o = St(i);
      return Mt(o) ? o : Ot(o);
    }
    function Ye(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function we(i) {
      return typeof i == "function";
    }
    function Xe(i) {
      return typeof i == "function";
    }
    function Pt(i) {
      switch (qe(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function xe(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!we(a))
          throw new TypeError();
        return a;
      }
    }
    function Qe(i) {
      var o = Je(i, u);
      if (!we(o))
        throw new TypeError();
      var a = o.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function Ke(i) {
      return i.value;
    }
    function et(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function tt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function Re(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var m = h.constructor;
      return typeof m != "function" || m === i ? o : m;
    }
    function xt() {
      var i;
      !_(I) && typeof t.Reflect < "u" && !(I in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = kt(t.Reflect));
      var o, a, h, m = new N(), P = {
        registerProvider: O,
        getProvider: c,
        setProvider: d
      };
      return P;
      function O(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            h === void 0 && (h = new k()), h.add(y);
            break;
        }
      }
      function b(y, w) {
        if (!_(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!_(h))
              for (var A = Qe(h); ; ) {
                var M = et(A);
                if (!M)
                  return;
                var H = Ke(M);
                if (H.isProviderFor(y, w))
                  return tt(A), H;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, w))
          return i;
      }
      function c(y, w) {
        var A = m.get(y), M;
        return _(A) || (M = A.get(w)), _(M) && (M = b(y, w), _(M) || (_(A) && (A = new S(), m.set(y, A)), A.set(w, M))), M;
      }
      function f(y) {
        if (_(y))
          throw new TypeError();
        return o === y || a === y || !_(h) && h.has(y);
      }
      function d(y, w, A) {
        if (!f(A))
          throw new Error("Metadata provider not registered.");
        var M = c(y, w);
        if (M !== A) {
          if (!_(M))
            return !1;
          var H = m.get(y);
          _(H) && (H = new S(), m.set(y, H)), H.set(w, A);
        }
        return !0;
      }
    }
    function Rt() {
      var i;
      return !_(I) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[I]), _(i) && (i = xt()), !_(I) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var o = new N(), a = {
        isProviderFor: function(f, d) {
          var y = o.get(f);
          return _(y) ? !1 : y.has(d);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: m,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return W.registerProvider(a), a;
      function h(f, d, y) {
        var w = o.get(f), A = !1;
        if (_(w)) {
          if (!y)
            return;
          w = new S(), o.set(f, w), A = !0;
        }
        var M = w.get(d);
        if (_(M)) {
          if (!y)
            return;
          if (M = new S(), w.set(d, M), !i.setProvider(f, d, a))
            throw w.delete(d), A && o.delete(f), new Error("Wrong provider for target.");
        }
        return M;
      }
      function m(f, d, y) {
        var w = h(
          d,
          y,
          /*Create*/
          !1
        );
        return _(w) ? !1 : Ze(w.has(f));
      }
      function P(f, d, y) {
        var w = h(
          d,
          y,
          /*Create*/
          !1
        );
        if (!_(w))
          return w.get(f);
      }
      function O(f, d, y, w) {
        var A = h(
          y,
          w,
          /*Create*/
          !0
        );
        A.set(f, d);
      }
      function b(f, d) {
        var y = [], w = h(
          f,
          d,
          /*Create*/
          !1
        );
        if (_(w))
          return y;
        for (var A = w.keys(), M = Qe(A), H = 0; ; ) {
          var rt = et(M);
          if (!rt)
            return y.length = H, y;
          var jt = Ke(rt);
          try {
            y[H] = jt;
          } catch (It) {
            try {
              tt(M);
            } finally {
              throw It;
            }
          }
          H++;
        }
      }
      function c(f, d, y) {
        var w = h(
          d,
          y,
          /*Create*/
          !1
        );
        if (_(w) || !w.delete(f))
          return !1;
        if (w.size === 0) {
          var A = o.get(d);
          _(A) || (A.delete(y), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function kt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, h = i.getOwnMetadata, m = i.getOwnMetadataKeys, P = i.deleteMetadata, O = new N(), b = {
        isProviderFor: function(c, f) {
          var d = O.get(c);
          return !_(d) && d.has(f) ? !0 : m(c, f).length ? (_(d) && (d = new k(), O.set(c, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function re(i, o, a) {
      var h = W.getProvider(i, o);
      if (!_(h))
        return h;
      if (a) {
        if (W.setProvider(i, o, te))
          return te;
        throw new Error("Illegal state.");
      }
    }
    function Nt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(c, f, d) {
            this._index = 0, this._keys = c, this._values = f, this._selector = d;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, b.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, b;
        }()
      ), h = (
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
          }), b.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, b.prototype.set = function(c, f) {
            var d = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, b.prototype.delete = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, y = f + 1; y < d; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, xe(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, m);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(c, f) {
            if (!xe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (xe(this._keys[d], c)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return h;
      function m(b, c) {
        return b;
      }
      function P(b, c) {
        return c;
      }
      function O(b, c) {
        return [b, c];
      }
    }
    function Ht() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new S();
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
    function Dt() {
      var i = 16, o = $.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(f) {
            var d = m(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? $.has(d, this._key) : !1;
          }, c.prototype.get = function(f) {
            var d = m(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? $.get(d, this._key) : void 0;
          }, c.prototype.set = function(f, d) {
            var y = m(
              f,
              /*create*/
              !0
            );
            return y[this._key] = d, this;
          }, c.prototype.delete = function(f) {
            var d = m(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + b();
        while ($.has(o, c));
        return o[c] = !0, c;
      }
      function m(c, f) {
        if (!n.call(c, a)) {
          if (!f)
            return;
          Object.defineProperty(c, a, { value: $.create() });
        }
        return c[a];
      }
      function P(c, f) {
        for (var d = 0; d < f; ++d)
          c[d] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, c), f;
        }
        return P(new Array(c), c);
      }
      function b() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", d = 0; d < i; ++d) {
          var y = c[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), y < 16 && (f += "0"), f += y.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function Te(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(st || (st = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Bt(r) {
  return function(e) {
    if (Lt(r)) {
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
function Wt(r) {
  return Bt(r);
}
function Gt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        nt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const $ = new CSSStyleSheet(), g = (E = l.sheet) == null ? void 0 : E.cssRules;
          g && (Array.from(g).forEach((S) => $.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const g = $.cloneNode(!0);
          p.appendChild(g);
        });
      }
    }
    return t;
  };
}
function Vt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(r) {
  return function(e, t) {
    try {
      Vt(r);
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
function B(r) {
  return Ft(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(U || (U = {}));
var j;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(j || (j = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = globalThis, Ie = Me.ShadowRoot && (Me.ShadyCSS === void 0 || Me.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ue = Symbol(), ot = /* @__PURE__ */ new WeakMap();
let $t = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ue) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ie && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = ot.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ot.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new $t(typeof r == "string" ? r : r + "", void 0, Ue), Zt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new $t(t, r, Ue);
}, Yt = (r, e) => {
  if (Ie) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = Me.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, at = Ie ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Jt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Kt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, L = globalThis, lt = L.trustedTypes, rr = lt ? lt.emptyScript : "", ke = L.reactiveElementPolyfillSupport, ie = (r, e) => r, Se = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? rr : null;
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
} }, ze = (r, e) => !Xt(r, e), ut = { attribute: !0, type: String, converter: Se, reflect: !1, useDefault: !1, hasChanged: ze };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ut) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Jt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const v = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ut;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ie("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ie("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ie("properties"))) {
      const t = this.properties, n = [...Kt(t), ...er(t)];
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
      for (const s of n) t.unshift(at(s));
    } else e !== void 0 && t.push(at(e));
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
    return Yt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Se).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const v = n.getPropertyOptions(s), p = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : Se;
      this._$Em = s;
      const E = p.fromAttribute(t, v.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const v = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = v.getPropertyOptions(e)), !((n.hasChanged ?? ze)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(v._$Eu(e, n)))) return;
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
        const { wrapped: v } = u, p = this[l];
        v !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[ie("elementProperties")] = /* @__PURE__ */ new Map(), Q[ie("finalized")] = /* @__PURE__ */ new Map(), ke == null || ke({ ReactiveElement: Q }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = globalThis, ht = (r) => r, Ce = se.trustedTypes, ct = Ce ? Ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, bt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, wt = "?" + z, nr = `<${wt}>`, q = document, ae = () => q.createComment(""), le = (r) => r === null || typeof r != "object" && typeof r != "function", Le = Array.isArray, ir = (r) => Le(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ne = `[ 	
\f\r]`, ne = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ft = /-->/g, dt = />/g, G = RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pt = /'/g, yt = /"/g, Et = /^(?:script|style|textarea|title)$/i, sr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), He = sr(1), K = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), vt = /* @__PURE__ */ new WeakMap(), V = q.createTreeWalker(q, 129);
function At(r, e) {
  if (!Le(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
const or = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ne;
  for (let v = 0; v < t; v++) {
    const p = r[v];
    let E, $, g = -1, S = 0;
    for (; S < p.length && (u.lastIndex = S, $ = u.exec(p), $ !== null); ) S = u.lastIndex, u === ne ? $[1] === "!--" ? u = ft : $[1] !== void 0 ? u = dt : $[2] !== void 0 ? (Et.test($[2]) && (s = RegExp("</" + $[2], "g")), u = G) : $[3] !== void 0 && (u = G) : u === G ? $[0] === ">" ? (u = s ?? ne, g = -1) : $[1] === void 0 ? g = -2 : (g = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? G : $[3] === '"' ? yt : pt) : u === yt || u === pt ? u = G : u === ft || u === dt ? u = ne : (u = G, s = void 0);
    const k = u === G && r[v + 1].startsWith("/>") ? " " : "";
    l += u === ne ? p + nr : g >= 0 ? (n.push(E), p.slice(0, g) + bt + p.slice(g) + z + k) : p + z + (g === -2 ? v : k);
  }
  return [At(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ue {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const v = e.length - 1, p = this.parts, [E, $] = or(e, t);
    if (this.el = ue.createElement(E, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = V.nextNode()) !== null && p.length < v; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(bt)) {
          const S = $[u++], k = s.getAttribute(g).split(z), N = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? lr : N[1] === "?" ? ur : N[1] === "@" ? hr : Oe }), s.removeAttribute(g);
        } else g.startsWith(z) && (p.push({ type: 6, index: l }), s.removeAttribute(g));
        if (Et.test(s.tagName)) {
          const g = s.textContent.split(z), S = g.length - 1;
          if (S > 0) {
            s.textContent = Ce ? Ce.emptyScript : "";
            for (let k = 0; k < S; k++) s.append(g[k], ae()), V.nextNode(), p.push({ type: 2, index: ++l });
            s.append(g[S], ae());
          }
        }
      } else if (s.nodeType === 8) if (s.data === wt) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(z, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = q.createElement("template");
    return n.innerHTML = e, n;
  }
}
function ee(r, e, t = r, n) {
  var u, v;
  if (e === K) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = le(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((v = s == null ? void 0 : s._$AO) == null || v.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = ee(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? q).importNode(t, !0);
    V.currentNode = s;
    let l = V.nextNode(), u = 0, v = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new he(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), p = n[++v];
      }
      u !== (p == null ? void 0 : p.index) && (l = V.nextNode(), u++);
    }
    return V.currentNode = q, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class he {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = ee(this, e, t), le(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== K && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ir(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && le(this._$AH) ? this._$AA.nextSibling.data = e : this.T(q.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ue.createElement(At(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ar(s, this), v = u.u(this.options);
      u.p(t), this.T(v), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = vt.get(e.strings);
    return t === void 0 && vt.set(e.strings, t = new ue(e)), t;
  }
  k(e) {
    Le(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new he(this.O(ae()), this.O(ae()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = ht(e).nextSibling;
      ht(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Oe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = ee(this, e, t, 0), u = !le(e) || e !== this._$AH && e !== K, u && (this._$AH = e);
    else {
      const v = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = ee(this, v[n + p], t, p), E === K && (E = this._$AH[p]), u || (u = !le(E) || E !== this._$AH[p]), E === x ? e = x : e !== x && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends Oe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class ur extends Oe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class hr extends Oe {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ee(this, e, t, 0) ?? x) === K) return;
    const n = this._$AH, s = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== x && (n === x || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ee(this, e);
  }
}
const De = se.litHtmlPolyfillSupport;
De == null || De(ue, he), (se.litHtmlVersions ?? (se.litHtmlVersions = [])).push("3.3.3");
const fr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new he(e.insertBefore(ae(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class oe extends Q {
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
    return K;
  }
}
var gt;
oe._$litElement$ = !0, oe.finalized = !0, (gt = F.litElementHydrateSupport) == null || gt.call(F, { LitElement: oe });
const je = F.litElementPolyfillSupport;
je == null || je({ LitElement: oe });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: Se, reflect: !1, hasChanged: ze }, pr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(v) {
      const p = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(u, p, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(v) {
      const p = this[u];
      e.call(this, v), this.requestUpdate(u, p, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Z(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, T = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && yr(e, t, s), s;
};
const Ee = {
  star: "★",
  heart: "♥",
  emoji: "●"
}, Ae = {
  small: 16,
  medium: 22,
  large: 30
}, mt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;align-items:center;gap:4px;font-family:inherit;box-sizing:border-box;'>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#e5e7eb;'>★</span>",
    "</div>"
  ].join(""),
  labelProp: "value",
  badges: ["Data Display", "Rating"]
};
function _t(r, e, t, n) {
  const s = Number(r);
  return Number.isFinite(s) ? Math.min(t, Math.max(e, s)) : n;
}
let R = class extends oe {
  constructor() {
    super(...arguments), this.value = 4, this.max = 5, this.variant = "star", this.size = "medium", this.color = "#fbbf24", this.readonly = !1, this.allowHalf = !1;
  }
  static getStudioTemplate(r) {
    var g, S, k, N, I, W, te, ce, fe, de, pe, ye, ve, me, _e, ge, $e, be;
    if (!r) return mt;
    const e = _t(((g = r.props) == null ? void 0 : g.max) ?? ((k = (S = r.studio) == null ? void 0 : S.props) == null ? void 0 : k.max), 1, 20, 5), t = _t(((N = r.props) == null ? void 0 : N.value) ?? ((W = (I = r.studio) == null ? void 0 : I.props) == null ? void 0 : W.value), 0, e, 4), n = (((te = r.props) == null ? void 0 : te.variant) ?? ((fe = (ce = r.studio) == null ? void 0 : ce.props) == null ? void 0 : fe.variant)) || "star", s = (((de = r.props) == null ? void 0 : de.size) ?? ((ye = (pe = r.studio) == null ? void 0 : pe.props) == null ? void 0 : ye.size)) || "medium", l = (((ve = r.props) == null ? void 0 : ve.color) ?? ((_e = (me = r.studio) == null ? void 0 : me.props) == null ? void 0 : _e.color)) || "#fbbf24", u = ((ge = r.props) == null ? void 0 : ge.allowHalf) ?? ((be = ($e = r.studio) == null ? void 0 : $e.props) == null ? void 0 : be.allowHalf) ?? !1, v = Ee[n] || Ee.star, p = Ae[s] || Ae.medium, E = "var(--uiv-border-color, #e5e7eb)", $ = [];
    for (let Y = 0; Y < e; Y++) {
      const X = u ? Math.min(1, Math.max(0, t - Y)) : t - Y >= 1 ? 1 : 0;
      X >= 1 ? $.push(`<span style='font-size:${p}px;line-height:1;color:${l};'>${v}</span>`) : X > 0 ? $.push(
        `<span style='position:relative;display:inline-block;font-size:${p}px;line-height:1;color:${E};'>${v}<span style='position:absolute;left:0;top:0;width:${Math.round(
          X * 100
        )}%;overflow:hidden;color:${l};'>${v}</span></span>`
      ) : $.push(`<span style='font-size:${p}px;line-height:1;color:${E};'>${v}</span>`);
    }
    return {
      ...mt,
      templateHtml: [
        "<div style='display:inline-flex;align-items:center;gap:4px;font-family:inherit;box-sizing:border-box;'>",
        $.join(""),
        "</div>"
      ].join("")
    };
  }
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = Math.max(0, Number(r) || 0);
  }
  get maxConfig() {
    return this.max;
  }
  set maxConfig(r) {
    this.max = Math.max(1, Number(r) || 5);
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "star";
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = r || "medium";
  }
  get colorConfig() {
    return this.color;
  }
  set colorConfig(r) {
    this.color = r || "#fbbf24";
  }
  get readonlyConfig() {
    return this.readonly;
  }
  set readonlyConfig(r) {
    this.readonly = !!r;
  }
  get allowHalfConfig() {
    return this.allowHalf;
  }
  set allowHalfConfig(r) {
    this.allowHalf = !!r;
  }
  handleChange(r) {
    this.value = r, this.dispatchEvent(
      new CustomEvent("on-change", {
        detail: { value: r, max: this.max },
        bubbles: !0,
        composed: !0
      })
    );
  }
  onSymbolClick(r, e) {
    if (this.readonly) return;
    let t = r + 1;
    if (this.allowHalf) {
      const s = e.currentTarget.getBoundingClientRect();
      t = e.clientX - s.left < s.width / 2 ? r + 0.5 : r + 1;
    }
    this.handleChange(t);
  }
  render() {
    const r = Ee[this.variant] || Ee.star, e = Ae[this.size] || Ae.medium, t = Math.max(1, Number(this.max) || 5), n = Math.min(t, Math.max(0, Number(this.value) || 0)), s = [];
    for (let l = 0; l < t; l++) {
      const u = this.allowHalf ? Math.min(1, Math.max(0, n - l)) : n - l >= 1 ? 1 : 0;
      s.push(He`
        <span
          class="symbol ${u >= 1 ? "full" : ""}"
          style="font-size:${e}px;color:${this.color};"
          role="button"
          aria-label="Rate ${l + 1}"
          @click=${(v) => this.onSymbolClick(l, v)}
        >
          <span style="color:${u >= 1 ? this.color : "var(--rt-empty)"};">${r}</span>
          ${u > 0 && u < 1 ? He`<span class="fill" style="width:${Math.round(u * 100)}%;color:${this.color};">${r}</span>` : ""}
        </span>
      `);
    }
    return He`
      <div
        class="rating ${this.readonly ? "readonly" : ""}"
        style="--rt-color:${this.color};"
        role="slider"
        aria-valuenow=${n}
        aria-valuemin="0"
        aria-valuemax=${t}
      >
        ${s}
      </div>
    `;
  }
};
R.styles = Zt`
    :host {
      display: inline-block;
      --rt-empty: var(--uiv-border-color, #e5e7eb);
      --rt-color: #fbbf24;
    }

    .rating {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: inherit;
      box-sizing: border-box;
    }

    .symbol {
      position: relative;
      display: inline-block;
      line-height: 1;
      color: var(--rt-empty);
      cursor: pointer;
      transition: transform 0.12s ease;
      user-select: none;
    }
    .rating.readonly .symbol { cursor: default; }
    .rating:not(.readonly) .symbol:hover { transform: scale(1.18); }

    .symbol .fill {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      white-space: nowrap;
      color: var(--rt-color);
    }
    .symbol.full { color: var(--rt-color); }
  `;
T([
  Z({ type: Number })
], R.prototype, "value", 2);
T([
  Z({ type: Number })
], R.prototype, "max", 2);
T([
  Z({ type: String })
], R.prototype, "variant", 2);
T([
  Z({ type: String })
], R.prototype, "size", 2);
T([
  Z({ type: String })
], R.prototype, "color", 2);
T([
  Z({ type: Boolean })
], R.prototype, "readonly", 2);
T([
  Z({ type: Boolean, attribute: "allow-half" })
], R.prototype, "allowHalf", 2);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], R.prototype, "valueConfig", 1);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
], R.prototype, "maxConfig", 1);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Star", value: "star" },
      { label: "Heart", value: "heart" },
      { label: "Emoji", value: "emoji" }
    ]
  })
], R.prototype, "variantConfig", 1);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" }
    ]
  })
], R.prototype, "sizeConfig", 1);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.COLOR_PICKER,
    displayLabel: "Color",
    fieldMappings: "color"
  })
], R.prototype, "colorConfig", 1);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Read Only",
    fieldMappings: "readonly"
  })
], R.prototype, "readonlyConfig", 1);
T([
  B({
    attributeType: j.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Allow Half",
    fieldMappings: "allowHalf"
  })
], R.prototype, "allowHalfConfig", 1);
T([
  B({
    attributeType: j.EVENT,
    displayLabel: "On Change",
    eventTrigger: "on-change"
  })
], R.prototype, "handleChange", 1);
R = T([
  Wt({
    name: "zero-rating",
    version: "1.0.0",
    title: "Rating",
    elementSelector: "zero-rating",
    group: "Data Display",
    iconName: "rating-icon.png"
  }),
  Gt()
], R);
export {
  R as ZeroRating,
  mt as studioTemplate
};
