var Rt = Object.defineProperty;
var Nt = (r, e, t) => e in r ? Rt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ze = (r, e, t) => Nt(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : m(), i = a(r);
    typeof t.Reflect < "u" && (i = a(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(y, T) {
      return function(S, $) {
        Object.defineProperty(y, S, { configurable: !0, writable: !0, value: $ }), T && T(S, $);
      };
    }
    function d() {
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
    function m() {
      return d() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", d = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, T = !m && !y, S = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: T ? function(n, s) {
        return i.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: T ? function(n, s) {
        return i.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, $ = Object.getPrototypeOf(Function), U = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), B = typeof WeakMap == "function" ? WeakMap : Ct(), G = a ? Symbol.for("@reflect-metadata:registry") : void 0, le = Dt(), De = Mt(le);
    function lt(n, s, o, h) {
      if (v(o)) {
        if (!Ne(n))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return vt(n, s);
      } else {
        if (!Ne(n))
          throw new TypeError();
        if (!A(s))
          throw new TypeError();
        if (!A(h) && !v(h) && !q(h))
          throw new TypeError();
        return q(h) && (h = void 0), o = j(o), bt(n, s, o, h);
      }
    }
    e("decorate", lt);
    function dt(n, s) {
      function o(h, g) {
        if (!A(h))
          throw new TypeError();
        if (!v(g) && !Tt(g))
          throw new TypeError();
        Pe(n, s, h, g);
      }
      return o;
    }
    e("metadata", dt);
    function ht(n, s, o, h) {
      if (!A(o))
        throw new TypeError();
      return v(h) || (h = j(h)), Pe(n, s, o, h);
    }
    e("defineMetadata", ht);
    function ut(n, s, o) {
      if (!A(s))
        throw new TypeError();
      return v(o) || (o = j(o)), Me(n, s, o);
    }
    e("hasMetadata", ut);
    function ct(n, s, o) {
      if (!A(s))
        throw new TypeError();
      return v(o) || (o = j(o)), fe(n, s, o);
    }
    e("hasOwnMetadata", ct);
    function pt(n, s, o) {
      if (!A(s))
        throw new TypeError();
      return v(o) || (o = j(o)), Oe(n, s, o);
    }
    e("getMetadata", pt);
    function ft(n, s, o) {
      if (!A(s))
        throw new TypeError();
      return v(o) || (o = j(o)), xe(n, s, o);
    }
    e("getOwnMetadata", ft);
    function yt(n, s) {
      if (!A(n))
        throw new TypeError();
      return v(s) || (s = j(s)), Ce(n, s);
    }
    e("getMetadataKeys", yt);
    function gt(n, s) {
      if (!A(n))
        throw new TypeError();
      return v(s) || (s = j(s)), Ae(n, s);
    }
    e("getOwnMetadataKeys", gt);
    function mt(n, s, o) {
      if (!A(s))
        throw new TypeError();
      if (v(o) || (o = j(o)), !A(s))
        throw new TypeError();
      v(o) || (o = j(o));
      var h = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return v(h) ? !1 : h.OrdinaryDeleteMetadata(n, s, o);
    }
    e("deleteMetadata", mt);
    function vt(n, s) {
      for (var o = n.length - 1; o >= 0; --o) {
        var h = n[o], g = h(s);
        if (!v(g) && !q(g)) {
          if (!Ue(g))
            throw new TypeError();
          s = g;
        }
      }
      return s;
    }
    function bt(n, s, o, h) {
      for (var g = n.length - 1; g >= 0; --g) {
        var R = n[g], k = R(s, o, h);
        if (!v(k) && !q(k)) {
          if (!A(k))
            throw new TypeError();
          h = k;
        }
      }
      return h;
    }
    function Me(n, s, o) {
      var h = fe(n, s, o);
      if (h)
        return !0;
      var g = ge(s);
      return q(g) ? !1 : Me(n, g, o);
    }
    function fe(n, s, o) {
      var h = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return v(h) ? !1 : Re(h.OrdinaryHasOwnMetadata(n, s, o));
    }
    function Oe(n, s, o) {
      var h = fe(n, s, o);
      if (h)
        return xe(n, s, o);
      var g = ge(s);
      if (!q(g))
        return Oe(n, g, o);
    }
    function xe(n, s, o) {
      var h = Q(
        s,
        o,
        /*Create*/
        !1
      );
      if (!v(h))
        return h.OrdinaryGetOwnMetadata(n, s, o);
    }
    function Pe(n, s, o, h) {
      var g = Q(
        o,
        h,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(n, s, o, h);
    }
    function Ce(n, s) {
      var o = Ae(n, s), h = ge(n);
      if (h === null)
        return o;
      var g = Ce(h, s);
      if (g.length <= 0)
        return o;
      if (o.length <= 0)
        return g;
      for (var R = new I(), k = [], b = 0, u = o; b < u.length; b++) {
        var c = u[b], p = R.has(c);
        p || (R.add(c), k.push(c));
      }
      for (var f = 0, _ = g; f < _.length; f++) {
        var c = _[f], p = R.has(c);
        p || (R.add(c), k.push(c));
      }
      return k;
    }
    function Ae(n, s) {
      var o = Q(
        n,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function ke(n) {
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
    function v(n) {
      return n === void 0;
    }
    function q(n) {
      return n === null;
    }
    function wt(n) {
      return typeof n == "symbol";
    }
    function A(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function _t(n, s) {
      switch (ke(n)) {
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
      var o = "string", h = Ie(n, d);
      if (h !== void 0) {
        var g = h.call(n, o);
        if (A(g))
          throw new TypeError();
        return g;
      }
      return Et(n);
    }
    function Et(n, s) {
      var o, h;
      {
        var g = n.toString;
        if (de(g)) {
          var h = g.call(n);
          if (!A(h))
            return h;
        }
        var o = n.valueOf;
        if (de(o)) {
          var h = o.call(n);
          if (!A(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Re(n) {
      return !!n;
    }
    function $t(n) {
      return "" + n;
    }
    function j(n) {
      var s = _t(n);
      return wt(s) ? s : $t(s);
    }
    function Ne(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function de(n) {
      return typeof n == "function";
    }
    function Ue(n) {
      return typeof n == "function";
    }
    function Tt(n) {
      switch (ke(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(n, s) {
      return n === s || n !== n && s !== s;
    }
    function Ie(n, s) {
      var o = n[s];
      if (o != null) {
        if (!de(o))
          throw new TypeError();
        return o;
      }
    }
    function Le(n) {
      var s = Ie(n, l);
      if (!de(s))
        throw new TypeError();
      var o = s.call(n);
      if (!A(o))
        throw new TypeError();
      return o;
    }
    function He(n) {
      return n.value;
    }
    function Be(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function je(n) {
      var s = n.return;
      s && s.call(n);
    }
    function ge(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || s !== $)
        return s;
      var o = n.prototype, h = o && Object.getPrototypeOf(o);
      if (h == null || h === Object.prototype)
        return s;
      var g = h.constructor;
      return typeof g != "function" || g === n ? s : g;
    }
    function St() {
      var n;
      !v(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Ot(t.Reflect));
      var s, o, h, g = new B(), R = {
        registerProvider: k,
        getProvider: u,
        setProvider: p
      };
      return R;
      function k(f) {
        if (!Object.isExtensible(R))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case v(s):
            s = f;
            break;
          case s === f:
            break;
          case v(o):
            o = f;
            break;
          case o === f:
            break;
          default:
            h === void 0 && (h = new I()), h.add(f);
            break;
        }
      }
      function b(f, _) {
        if (!v(s)) {
          if (s.isProviderFor(f, _))
            return s;
          if (!v(o)) {
            if (o.isProviderFor(f, _))
              return s;
            if (!v(h))
              for (var x = Le(h); ; ) {
                var C = Be(x);
                if (!C)
                  return;
                var H = He(C);
                if (H.isProviderFor(f, _))
                  return je(x), H;
              }
          }
        }
        if (!v(n) && n.isProviderFor(f, _))
          return n;
      }
      function u(f, _) {
        var x = g.get(f), C;
        return v(x) || (C = x.get(_)), v(C) && (C = b(f, _), v(C) || (v(x) && (x = new U(), g.set(f, x)), x.set(_, C))), C;
      }
      function c(f) {
        if (v(f))
          throw new TypeError();
        return s === f || o === f || !v(h) && h.has(f);
      }
      function p(f, _, x) {
        if (!c(x))
          throw new Error("Metadata provider not registered.");
        var C = u(f, _);
        if (C !== x) {
          if (!v(C))
            return !1;
          var H = g.get(f);
          v(H) && (H = new U(), g.set(f, H)), H.set(_, x);
        }
        return !0;
      }
    }
    function Dt() {
      var n;
      return !v(G) && A(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[G]), v(n) && (n = St()), !v(G) && A(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var s = new B(), o = {
        isProviderFor: function(c, p) {
          var f = s.get(c);
          return v(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: k,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: R,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: u
      };
      return le.registerProvider(o), o;
      function h(c, p, f) {
        var _ = s.get(c), x = !1;
        if (v(_)) {
          if (!f)
            return;
          _ = new U(), s.set(c, _), x = !0;
        }
        var C = _.get(p);
        if (v(C)) {
          if (!f)
            return;
          if (C = new U(), _.set(p, C), !n.setProvider(c, p, o))
            throw _.delete(p), x && s.delete(c), new Error("Wrong provider for target.");
        }
        return C;
      }
      function g(c, p, f) {
        var _ = h(
          p,
          f,
          /*Create*/
          !1
        );
        return v(_) ? !1 : Re(_.has(c));
      }
      function R(c, p, f) {
        var _ = h(
          p,
          f,
          /*Create*/
          !1
        );
        if (!v(_))
          return _.get(c);
      }
      function k(c, p, f, _) {
        var x = h(
          f,
          _,
          /*Create*/
          !0
        );
        x.set(c, p);
      }
      function b(c, p) {
        var f = [], _ = h(
          c,
          p,
          /*Create*/
          !1
        );
        if (v(_))
          return f;
        for (var x = _.keys(), C = Le(x), H = 0; ; ) {
          var Fe = Be(C);
          if (!Fe)
            return f.length = H, f;
          var At = He(Fe);
          try {
            f[H] = At;
          } catch (kt) {
            try {
              je(C);
            } finally {
              throw kt;
            }
          }
          H++;
        }
      }
      function u(c, p, f) {
        var _ = h(
          p,
          f,
          /*Create*/
          !1
        );
        if (v(_) || !_.delete(c))
          return !1;
        if (_.size === 0) {
          var x = s.get(p);
          v(x) || (x.delete(f), x.size === 0 && s.delete(x));
        }
        return !0;
      }
    }
    function Ot(n) {
      var s = n.defineMetadata, o = n.hasOwnMetadata, h = n.getOwnMetadata, g = n.getOwnMetadataKeys, R = n.deleteMetadata, k = new B(), b = {
        isProviderFor: function(u, c) {
          var p = k.get(u);
          return !v(p) && p.has(c) ? !0 : g(u, c).length ? (v(p) && (p = new I(), k.set(u, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: R
      };
      return b;
    }
    function Q(n, s, o) {
      var h = le.getProvider(n, s);
      if (!v(h))
        return h;
      if (o) {
        if (le.setProvider(n, s, De))
          return De;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var n = {}, s = [], o = (
        /** @class */
        function() {
          function b(u, c, p) {
            this._index = 0, this._keys = u, this._values = c, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var c = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), u;
          }, b.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: u, done: !0 };
          }, b;
        }()
      ), h = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(u) {
            var c = this._find(
              u,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, b.prototype.set = function(u, c) {
            var p = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, b.prototype.delete = function(u) {
            var c = this._find(
              u,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, f = c + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, ye(u, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, g);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, R);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, k);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(u, c) {
            if (!ye(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ye(this._keys[p], u)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return h;
      function g(b, u) {
        return b;
      }
      function R(b, u) {
        return u;
      }
      function k(b, u) {
        return [b, u];
      }
    }
    function Pt() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new U();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
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
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return n;
    }
    function Ct() {
      var n = 16, s = S.create(), o = h();
      return (
        /** @class */
        function() {
          function u() {
            this._key = h();
          }
          return u.prototype.has = function(c) {
            var p = g(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? S.has(p, this._key) : !1;
          }, u.prototype.get = function(c) {
            var p = g(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? S.get(p, this._key) : void 0;
          }, u.prototype.set = function(c, p) {
            var f = g(
              c,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, u.prototype.delete = function(c) {
            var p = g(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = h();
          }, u;
        }()
      );
      function h() {
        var u;
        do
          u = "@@WeakMap@@" + b();
        while (S.has(s, u));
        return s[u] = !0, u;
      }
      function g(u, c) {
        if (!i.call(u, o)) {
          if (!c)
            return;
          Object.defineProperty(u, o, { value: S.create() });
        }
        return u[o];
      }
      function R(u, c) {
        for (var p = 0; p < c; ++p)
          u[p] = Math.random() * 255 | 0;
        return u;
      }
      function k(u) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : R(c, u), c;
        }
        return R(new Array(u), u);
      }
      function b() {
        var u = k(n);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var c = "", p = 0; p < n; ++p) {
          var f = u[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function me(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ve || (Ve = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function It(r) {
  return function(e) {
    if (Ut(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Lt(r) {
  return It(r);
}
function Ht(r) {
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
      update(d) {
        try {
          super.update(d);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var y;
        const d = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (d && m) {
          const T = new CSSStyleSheet(), S = (y = d.sheet) == null ? void 0 : y.cssRules;
          S && (Array.from(S).forEach(($) => T.insertRule($.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, T]);
        } else if (d) {
          const T = d.cloneNode(!0);
          this.shadowRoot.appendChild(T);
        }
        l.forEach((T) => {
          const S = T.cloneNode(!0);
          this.shadowRoot.appendChild(S);
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
function jt(r) {
  return function(e, t) {
    try {
      Bt(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function O(r) {
  return jt(r);
}
var M;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(M || (M = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Ee = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ee && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ye.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ye.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new it(typeof r == "string" ? r : r + "", void 0, $e), zt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, a, d) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[d + 1], r[0]);
  return new it(t, r, $e);
}, Wt = (r, e) => {
  if (Ee) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), a = he.litNonce;
    a !== void 0 && i.setAttribute("nonce", a), i.textContent = t.cssText, r.appendChild(i);
  }
}, Xe = Ee ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Yt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Gt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, z = globalThis, Ge = z.trustedTypes, Jt = Ge ? Ge.emptyScript : "", ve = z.reactiveElementPolyfillSupport, te = (r, e) => r, ue = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Jt : null;
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
} }, Te = (r, e) => !Vt(r, e), qe = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Te };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Z extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), a = this.getPropertyDescriptor(e, i, t);
      a !== void 0 && Yt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: a, set: d } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return a == null ? void 0 : a.call(this);
    }, set(l) {
      const m = a == null ? void 0 : a.call(this);
      d.call(this, l), this.requestUpdate(e, m, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, i = [...Gt(t), ...qt(t)];
      for (const a of i) this.createProperty(a, t[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, a] of t) this.elementProperties.set(i, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const a = this._$Eu(t, i);
      a !== void 0 && this._$Eh.set(a, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const a of i) t.unshift(Xe(a));
    } else e !== void 0 && t.push(Xe(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var d;
    const i = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, i);
    if (a !== void 0 && i.reflect === !0) {
      const l = (((d = i.converter) == null ? void 0 : d.toAttribute) !== void 0 ? i.converter : ue).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(a) : this.setAttribute(a, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d;
    const i = this.constructor, a = i._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const l = i.getPropertyOptions(a), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((d = l.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? l.converter : ue;
      this._$Em = a, this[a] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? Te)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [d, l] of this._$Ep) this[d] = l;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [d, l] of a) l.wrapped !== !0 || this._$AL.has(d) || this[d] === void 0 || this.P(d, this[d], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((a) => {
        var d;
        return (d = a.hostUpdate) == null ? void 0 : d.call(a);
      }), this.update(t)) : this._$EU();
    } catch (a) {
      throw e = !1, this._$EU(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var a;
      return (a = i.hostUpdated) == null ? void 0 : a.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[te("elementProperties")] = /* @__PURE__ */ new Map(), Z[te("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: Z }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, ce = re.trustedTypes, Ze = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, nt = "$lit$", F = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + F, Kt = `<${at}>`, X = document, ne = () => X.createComment(""), ae = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, Qt = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Ke = />/g, V = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, et = /"/g, st = /^(?:script|style|textarea|title)$/i, er = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), L = er(1), J = Symbol.for("lit-noChange"), N = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), Y = X.createTreeWalker(X, 129);
function ot(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const tr = (r, e) => {
  const t = r.length - 1, i = [];
  let a, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = ee;
  for (let m = 0; m < t; m++) {
    const y = r[m];
    let T, S, $ = -1, U = 0;
    for (; U < y.length && (l.lastIndex = U, S = l.exec(y), S !== null); ) U = l.lastIndex, l === ee ? S[1] === "!--" ? l = Je : S[1] !== void 0 ? l = Ke : S[2] !== void 0 ? (st.test(S[2]) && (a = RegExp("</" + S[2], "g")), l = V) : S[3] !== void 0 && (l = V) : l === V ? S[0] === ">" ? (l = a ?? ee, $ = -1) : S[1] === void 0 ? $ = -2 : ($ = l.lastIndex - S[2].length, T = S[1], l = S[3] === void 0 ? V : S[3] === '"' ? et : Qe) : l === et || l === Qe ? l = V : l === Je || l === Ke ? l = ee : (l = V, a = void 0);
    const I = l === V && r[m + 1].startsWith("/>") ? " " : "";
    d += l === ee ? y + Kt : $ >= 0 ? (i.push(T), y.slice(0, $) + nt + y.slice($) + F + I) : y + F + ($ === -2 ? m : I);
  }
  return [ot(r, d + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class se {
  constructor({ strings: e, _$litType$: t }, i) {
    let a;
    this.parts = [];
    let d = 0, l = 0;
    const m = e.length - 1, y = this.parts, [T, S] = tr(e, t);
    if (this.el = se.createElement(T, i), Y.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (a = Y.nextNode()) !== null && y.length < m; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const $ of a.getAttributeNames()) if ($.endsWith(nt)) {
          const U = S[l++], I = a.getAttribute($).split(F), B = /([.?@])?(.*)/.exec(U);
          y.push({ type: 1, index: d, name: B[2], strings: I, ctor: B[1] === "." ? ir : B[1] === "?" ? nr : B[1] === "@" ? ar : pe }), a.removeAttribute($);
        } else $.startsWith(F) && (y.push({ type: 6, index: d }), a.removeAttribute($));
        if (st.test(a.tagName)) {
          const $ = a.textContent.split(F), U = $.length - 1;
          if (U > 0) {
            a.textContent = ce ? ce.emptyScript : "";
            for (let I = 0; I < U; I++) a.append($[I], ne()), Y.nextNode(), y.push({ type: 2, index: ++d });
            a.append($[U], ne());
          }
        }
      } else if (a.nodeType === 8) if (a.data === at) y.push({ type: 2, index: d });
      else {
        let $ = -1;
        for (; ($ = a.data.indexOf(F, $ + 1)) !== -1; ) y.push({ type: 7, index: d }), $ += F.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const i = X.createElement("template");
    return i.innerHTML = e, i;
  }
}
function K(r, e, t = r, i) {
  var l, m;
  if (e === J) return e;
  let a = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const d = ae(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== d && ((m = a == null ? void 0 : a._$AO) == null || m.call(a, !1), d === void 0 ? a = void 0 : (a = new d(r), a._$AT(r, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = a : t.l = a), a !== void 0 && (e = K(r, a._$AS(r, e.values), a, i)), e;
}
class rr {
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
    const { el: { content: t }, parts: i } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? X).importNode(t, !0);
    Y.currentNode = a;
    let d = Y.nextNode(), l = 0, m = 0, y = i[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let T;
        y.type === 2 ? T = new oe(d, d.nextSibling, this, e) : y.type === 1 ? T = new y.ctor(d, y.name, y.strings, this, e) : y.type === 6 && (T = new sr(d, this, e)), this._$AV.push(T), y = i[++m];
      }
      l !== (y == null ? void 0 : y.index) && (d = Y.nextNode(), l++);
    }
    return Y.currentNode = X, a;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, a) {
    this.type = 2, this._$AH = N, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = a, this.v = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = K(this, e, t), ae(e) ? e === N || e == null || e === "" ? (this._$AH !== N && this._$AR(), this._$AH = N) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== N && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(X.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: i } = e, a = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = se.createElement(ot(i.h, i.h[0]), this.options)), i);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === a) this._$AH.p(t);
    else {
      const l = new rr(a, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, a = 0;
    for (const d of e) a === t.length ? t.push(i = new oe(this.O(ne()), this.O(ne()), this, this.options)) : i = t[a], i._$AI(d), a++;
    a < t.length && (this._$AR(i && i._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const a = e.nextSibling;
      e.remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, a, d) {
    this.type = 1, this._$AH = N, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = d, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = N;
  }
  _$AI(e, t = this, i, a) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = K(this, e, t, 0), l = !ae(e) || e !== this._$AH && e !== J, l && (this._$AH = e);
    else {
      const m = e;
      let y, T;
      for (e = d[0], y = 0; y < d.length - 1; y++) T = K(this, m[i + y], t, y), T === J && (T = this._$AH[y]), l || (l = !ae(T) || T !== this._$AH[y]), T === N ? e = N : e !== N && (e += (T ?? "") + d[y + 1]), this._$AH[y] = T;
    }
    l && !a && this.j(e);
  }
  j(e) {
    e === N ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === N ? void 0 : e;
  }
}
class nr extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== N);
  }
}
class ar extends pe {
  constructor(e, t, i, a, d) {
    super(e, t, i, a, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? N) === J) return;
    const i = this._$AH, a = e === N && i !== N || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, d = e !== N && (i === N || a);
    a && this.element.removeEventListener(this.name, this, i), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const we = re.litHtmlPolyfillSupport;
we == null || we(se, oe), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.2.0");
const or = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = i._$litPart$;
  if (a === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = a = new oe(e.insertBefore(ne(), d), d, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ie extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = or(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return J;
  }
}
var rt;
ie._$litElement$ = !0, ie.finalized = !0, (rt = globalThis.litElementHydrateSupport) == null || rt.call(globalThis, { LitElement: ie });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: ie });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Te }, hr = (r = dr, e, t) => {
  const { kind: i, metadata: a } = t;
  let d = globalThis.litPropertyMetadata.get(a);
  if (d === void 0 && globalThis.litPropertyMetadata.set(a, d = /* @__PURE__ */ new Map()), d.set(t.name, r), i === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const y = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, y, r);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, r), m;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(m) {
      const y = this[l];
      e.call(this, m), this.requestUpdate(l, y, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function P(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((i, a, d) => {
    const l = a.hasOwnProperty(d);
    return a.constructor.createProperty(d, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(a, d) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function W(r) {
  return P({ ...r, state: !0, attribute: !1 });
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, E = (r, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? cr(e, t) : e, d = r.length - 1, l; d >= 0; d--)
    (l = r[d]) && (a = (i ? l(e, t, a) : l(a)) || a);
  return i && a && ur(e, t, a), a;
};
let w = class extends ie {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Select date", this.helpText = "", this.errorMessage = "", this.value = "", this.required = !1, this.disabled = !1, this.readonly = !1, this.showTodayButton = !0, this.showClearButton = !0, this.showWeekNumbers = !1, this.includeTime = !1, this.rangeSelection = !1, this.dateFormat = "yyyy-MM-dd", this.displayFormat = "MMM d, yyyy", this.minDate = "", this.maxDate = "", this.firstDayOfWeek = 0, this.width = "100%", this.height = "var(--input-height, 36px)", this.borderRadius = "4px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.backgroundColor = "#ffffff", this.isOpen = !1, this.currentDate = /* @__PURE__ */ new Date(), this.selectedDate = null, this.selectedStartDate = null, this.selectedEndDate = null, this.hoverDate = null, this.hasError = !1, this.inputValue = "", this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], this.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  render() {
    return L`
      <div class="form-field" style="width: ${this.width}">
        ${this.label ? L`
          <label class="form-field-label ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}
        
        <div 
          class="input-container"
          style="
            --primary-color: ${this.primaryColor};
            --error-color: ${this.errorColor};
            --background-color: ${this.backgroundColor};
            --border-radius: ${this.borderRadius};
          "
        >
          <input
            class="mat-mdc-input-element ${this.hasError ? "error" : ""}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            style="height: ${this.height}"
            @click=${this.handleInputClick}
            @keydown=${this.handleKeyDown}
            @blur=${this.handleInputBlur}
          />
          <svg class="calendar-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
          </svg>
        </div>

        ${this.isOpen ? L`
          <div class="dropdown">
            <div class="calendar-header">
              <button 
                type="button" 
                class="nav-button" 
                @click=${this.previousMonth}
                aria-label="Previous month"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41,7.41L14,6L8,12L14,18L15.41,16.59L10.83,12L15.41,7.41Z" />
                </svg>
              </button>
              
              <div class="month-year">
                ${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}
              </div>
              
              <button 
                type="button" 
                class="nav-button" 
                @click=${this.nextMonth}
                aria-label="Next month"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L10,18L16,12L10,6L8.59,7.41L13.17,12L8.59,16.58Z" />
                </svg>
              </button>
            </div>

            <div class="calendar-grid">
              <div class="weekdays ${this.showWeekNumbers ? "with-week-numbers" : ""}">
                ${this.showWeekNumbers ? L`<div class="week-number"></div>` : ""}
                ${this.getWeekdayNames().map((r) => L`
                  <div class="weekday">${r}</div>
                `)}
              </div>
              
              ${this.renderCalendarDays()}
            </div>

            ${this.showTodayButton || this.showClearButton ? L`
              <div class="calendar-footer">
                <div>
                  ${this.showTodayButton ? L`
                    <button type="button" class="action-button today-button" @click=${this.selectToday}>
                      Today
                    </button>
                  ` : ""}
                </div>
                <div>
                  ${this.showClearButton ? L`
                    <button type="button" class="action-button clear-button" @click=${this.clearSelection}>
                      Clear
                    </button>
                  ` : ""}
                </div>
              </div>
            ` : ""}
          </div>
        ` : ""}

        ${this.helpText && !this.hasError ? L`
          <div class="form-field-hint">${this.helpText}</div>
        ` : ""}
        
        ${this.errorMessage && this.hasError ? L`
          <div class="form-field-error">${this.errorMessage}</div>
        ` : ""}
      </div>
    `;
  }
  renderCalendarDays() {
    const r = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1), e = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0), t = new Date(r);
    t.setDate(t.getDate() - (r.getDay() - this.firstDayOfWeek + 7) % 7);
    const i = [];
    let a = new Date(t);
    for (; a <= e || a.getMonth() === this.currentDate.getMonth(); ) {
      const d = [];
      if (this.showWeekNumbers) {
        const l = this.getWeekNumber(a);
        d.push(L`<div class="week-number">${l}</div>`);
      }
      for (let l = 0; l < 7; l++) {
        const m = new Date(a);
        m.setDate(m.getDate() + l);
        const y = m.getMonth() === this.currentDate.getMonth(), T = this.isSameDay(m, /* @__PURE__ */ new Date()), S = this.isDateSelected(m), $ = this.isDateDisabled(m), U = this.isDateInRange(m), I = this.rangeSelection && this.selectedStartDate && this.isSameDay(m, this.selectedStartDate), B = this.rangeSelection && this.selectedEndDate && this.isSameDay(m, this.selectedEndDate);
        d.push(L`
          <div 
            class="day ${y ? "" : "other-month"} ${T ? "today" : ""} ${S ? "selected" : ""} ${$ ? "disabled" : ""} ${U ? "in-range" : ""} ${I ? "range-start" : ""} ${B ? "range-end" : ""}"
            @click=${() => this.selectDate(m)}
            @mouseenter=${() => this.hoverDate = m}
            @mouseleave=${() => this.hoverDate = null}
          >
            ${m.getDate()}
          </div>
        `);
      }
      i.push(L`
        <div class="days ${this.showWeekNumbers ? "with-week-numbers" : ""}">
          ${d}
        </div>
      `), a.setDate(a.getDate() + 7);
    }
    return L`${i}`;
  }
  handleInputClick() {
    !this.disabled && !this.readonly && (this.isOpen = !this.isOpen);
  }
  handleKeyDown(r) {
    r.key === "Escape" && this.isOpen ? this.isOpen = !1 : r.key === "Enter" && !this.isOpen && (this.isOpen = !0);
  }
  handleInputBlur() {
    setTimeout(() => {
      var r;
      (r = this.shadowRoot) != null && r.querySelector(".dropdown:hover") || (this.isOpen = !1);
    }, 150);
  }
  selectDate(r) {
    this.isDateDisabled(r) || (this.rangeSelection ? (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate ? (this.selectedStartDate = r, this.selectedEndDate = null) : (r < this.selectedStartDate ? (this.selectedEndDate = this.selectedStartDate, this.selectedStartDate = r) : this.selectedEndDate = r, this.isOpen = !1), this.updateRangeValue()) : (this.selectedDate = r, this.updateSingleValue(), this.isOpen = !1), this.dispatchChangeEvent());
  }
  selectToday() {
    this.selectDate(/* @__PURE__ */ new Date());
  }
  clearSelection() {
    this.rangeSelection ? (this.selectedStartDate = null, this.selectedEndDate = null) : this.selectedDate = null, this.inputValue = "", this.value = "", this.isOpen = !1, this.dispatchChangeEvent();
  }
  previousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }
  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }
  getWeekdayNames() {
    const r = [...this.dayNames];
    return [...r.slice(this.firstDayOfWeek), ...r.slice(0, this.firstDayOfWeek)];
  }
  getWeekNumber(r) {
    const e = new Date(r.getFullYear(), 0, 1), t = Math.floor((r.getTime() - e.getTime()) / (24 * 60 * 60 * 1e3)) + 1;
    return Math.ceil(t / 7);
  }
  isSameDay(r, e) {
    return r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth() && r.getDate() === e.getDate();
  }
  isDateSelected(r) {
    return this.rangeSelection ? this.selectedStartDate && this.isSameDay(r, this.selectedStartDate) || this.selectedEndDate && this.isSameDay(r, this.selectedEndDate) : this.selectedDate && this.isSameDay(r, this.selectedDate);
  }
  isDateDisabled(r) {
    return !!(this.minDate && r < new Date(this.minDate) || this.maxDate && r > new Date(this.maxDate));
  }
  isDateInRange(r) {
    if (!this.rangeSelection || !this.selectedStartDate) return !1;
    const e = this.selectedEndDate || this.hoverDate;
    if (!e) return !1;
    const t = this.selectedStartDate < e ? this.selectedStartDate : e, i = this.selectedStartDate < e ? e : this.selectedStartDate;
    return r > t && r < i;
  }
  updateSingleValue() {
    this.selectedDate && (this.value = this.formatDate(this.selectedDate, this.dateFormat), this.inputValue = this.formatDate(this.selectedDate, this.displayFormat));
  }
  updateRangeValue() {
    if (this.selectedStartDate && this.selectedEndDate) {
      const r = this.formatDate(this.selectedStartDate, this.dateFormat), e = this.formatDate(this.selectedEndDate, this.dateFormat);
      this.value = `${r} - ${e}`;
      const t = this.formatDate(this.selectedStartDate, this.displayFormat), i = this.formatDate(this.selectedEndDate, this.displayFormat);
      this.inputValue = `${t} - ${i}`;
    } else this.selectedStartDate && (this.value = this.formatDate(this.selectedStartDate, this.dateFormat), this.inputValue = this.formatDate(this.selectedStartDate, this.displayFormat));
  }
  formatDate(r, e) {
    const t = r.getFullYear(), i = String(r.getMonth() + 1).padStart(2, "0"), a = String(r.getDate()).padStart(2, "0"), l = this.monthNames[r.getMonth()].slice(0, 3);
    return e.replace(/yyyy/g, String(t)).replace(/MM/g, i).replace(/MMM/g, l).replace(/dd/g, a).replace(/d/g, String(r.getDate()));
  }
  dispatchChangeEvent() {
    const r = this.rangeSelection ? {
      value: this.value,
      startDate: this.selectedStartDate,
      endDate: this.selectedEndDate,
      isRange: !0
    } : {
      value: this.value,
      date: this.selectedDate,
      isRange: !1
    };
    this.dispatchEvent(new CustomEvent("change", {
      detail: r,
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("date-change", {
      detail: r,
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    this.dispatchChangeEvent();
  }
  handleDateChange(r) {
    this.dispatchChangeEvent();
  }
  // Public API
  getSelectedDate() {
    return this.selectedDate;
  }
  getSelectedDateRange() {
    return {
      start: this.selectedStartDate,
      end: this.selectedEndDate
    };
  }
  setDate(r) {
    const e = typeof r == "string" ? new Date(r) : r;
    this.rangeSelection ? (this.selectedStartDate = e, this.selectedEndDate = null, this.updateRangeValue()) : (this.selectedDate = e, this.updateSingleValue()), this.currentDate = new Date(e.getFullYear(), e.getMonth(), 1);
  }
  setDateRange(r, e) {
    this.rangeSelection && (this.selectedStartDate = typeof r == "string" ? new Date(r) : r, this.selectedEndDate = typeof e == "string" ? new Date(e) : e, this.updateRangeValue(), this.currentDate = new Date(this.selectedStartDate.getFullYear(), this.selectedStartDate.getMonth(), 1));
  }
  open() {
    !this.disabled && !this.readonly && (this.isOpen = !0);
  }
  close() {
    this.isOpen = !1;
  }
  setError(r) {
    this.hasError = !0, this.errorMessage = r;
  }
  clearError() {
    this.hasError = !1, this.errorMessage = "";
  }
  firstUpdated() {
    if (this.value)
      if (this.rangeSelection && this.value.includes(" - ")) {
        const [r, e] = this.value.split(" - ");
        this.setDateRange(r, e);
      } else
        this.setDate(this.value);
    document.addEventListener("click", (r) => {
      this.contains(r.target) || (this.isOpen = !1);
    });
  }
};
w.styles = zt`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: relative;
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }    .form-field-label {
      display: block;
      font-size: var(--font-size-base, 14px);
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--error-color, #f44336);
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }    .mat-mdc-input-element {
      width: 100%;
      min-height: var(--input-height, 36px);
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius, 4px);
      font-size: var(--font-size-lg, 16px);
      line-height: 1.5;
      background: var(--background-color, #ffffff);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .mat-mdc-input-element:hover {
      border-color: var(--primary-color, #1976d2);
    }

    .mat-mdc-input-element:focus {
      outline: none;
      border-color: var(--primary-color, #1976d2);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color, #1976d2) 20%, transparent);
    }

    .mat-mdc-input-element:disabled {
      background: #f5f5f5;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
    }

    .mat-mdc-input-element.error {
      border-color: var(--error-color, #f44336);
    }    .calendar-icon {
      position: absolute;
      right: 12px;
      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
      color: rgba(0, 0, 0, 0.6);
      pointer-events: none;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius, 4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      margin-top: 4px;
    }

    .calendar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
    }

    .nav-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      color: rgba(0, 0, 0, 0.6);
      transition: background 0.2s ease;
    }

    .nav-button:hover {
      background: #f5f5f5;
    }

    .month-year {      font-weight: 500;
      font-size: var(--font-size-lg, 16px);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .calendar-grid {
      padding: 16px;
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
      margin-bottom: 8px;
    }

    .weekdays.with-week-numbers {
      grid-template-columns: 30px repeat(7, 1fr);
    }

    .weekday {      text-align: center;
      font-size: var(--font-size-xs, 12px);
      font-weight: 500;
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      padding: 8px 4px;
    }

    .week-number {
      text-align: center;
      font-size: var(--font-size-xs, 12px);
      color: var(--text-muted, rgba(0, 0, 0, 0.4));
      padding: 8px 4px;
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }

    .days.with-week-numbers {
      grid-template-columns: 30px repeat(7, 1fr);
    }

    .day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;      font-size: var(--font-size-base, 14px);
      transition: all 0.2s ease;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .day:hover {
      background: #f5f5f5;
    }

    .day.other-month {
      color: rgba(0, 0, 0, 0.3);
    }

    .day.disabled {
      color: rgba(0, 0, 0, 0.3);
      cursor: not-allowed;
    }

    .day.disabled:hover {
      background: none;
    }

    .day.selected {
      background: var(--primary-color, #1976d2);
      color: white;
    }

    .day.today {
      border: 2px solid var(--primary-color, #1976d2);
    }

    .day.in-range {
      background: color-mix(in srgb, var(--primary-color, #1976d2) 20%, transparent);
      border-radius: 0;
    }

    .day.range-start {
      background: var(--primary-color, #1976d2);
      color: white;
      border-radius: 50% 0 0 50%;
    }

    .day.range-end {
      background: var(--primary-color, #1976d2);
      color: white;
      border-radius: 0 50% 50% 0;
    }

    .day.range-start.range-end {
      border-radius: 50%;
    }

    .calendar-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-top: 1px solid #e0e0e0;
    }

    .action-button {
      padding: 8px 16px;      border: none;
      border-radius: 4px;
      font-size: var(--font-size-base, 14px);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .today-button {
      background: #f5f5f5;
      color: var(--primary-color, #1976d2);
    }

    .today-button:hover {
      background: #e0e0e0;
    }

    .clear-button {
      background: #ffebee;
      color: var(--error-color, #f44336);
    }

    .clear-button:hover {
      background: #ffcdd2;
    }

    .form-field-hint {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 4px;
    }    .form-field-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }

    @media (max-width: 768px) {
      .dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        max-width: 90vw;
      }
    }
  `;
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], w.prototype, "label", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], w.prototype, "placeholder", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], w.prototype, "helpText", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], w.prototype, "errorMessage", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Value",
    placeholderText: "Enter date value",
    fieldMappings: "value"
  })
], w.prototype, "value", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], w.prototype, "required", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], w.prototype, "disabled", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Readonly",
    fieldMappings: "readonly"
  })
], w.prototype, "readonly", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Show Today Button",
    fieldMappings: "showTodayButton"
  })
], w.prototype, "showTodayButton", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Show Clear Button",
    fieldMappings: "showClearButton"
  })
], w.prototype, "showClearButton", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Show Week Numbers",
    fieldMappings: "showWeekNumbers"
  })
], w.prototype, "showWeekNumbers", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Allow Time Selection",
    fieldMappings: "includeTime"
  })
], w.prototype, "includeTime", 2);
E([
  P({ type: Boolean }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.CHECKBOX,
    displayLabel: "Range Selection",
    fieldMappings: "rangeSelection"
  })
], w.prototype, "rangeSelection", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Date Format",
    placeholderText: "Enter date format",
    fieldMappings: "dateFormat"
  })
], w.prototype, "dateFormat", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Display Format",
    placeholderText: "Enter display format",
    fieldMappings: "displayFormat"
  })
], w.prototype, "displayFormat", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Min Date",
    placeholderText: "Enter minimum date",
    fieldMappings: "minDate"
  })
], w.prototype, "minDate", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Max Date",
    placeholderText: "Enter maximum date",
    fieldMappings: "maxDate"
  })
], w.prototype, "maxDate", 2);
E([
  P({ type: Number }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.NUMBER_INPUT,
    displayLabel: "First Day of Week (0-6)",
    fieldMappings: "firstDayOfWeek"
  })
], w.prototype, "firstDayOfWeek", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width",
    fieldMappings: "width"
  })
], w.prototype, "width", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height",
    fieldMappings: "height"
  })
], w.prototype, "height", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius",
    fieldMappings: "borderRadius"
  })
], w.prototype, "borderRadius", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Primary Color",
    placeholderText: "Enter primary color",
    fieldMappings: "primaryColor"
  })
], w.prototype, "primaryColor", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Error Color",
    placeholderText: "Enter error color",
    fieldMappings: "errorColor"
  })
], w.prototype, "errorColor", 2);
E([
  P({ type: String }),
  O({
    attributeType: D.PROPERTY,
    uiComponentType: M.TEXT_INPUT,
    displayLabel: "Background Color",
    placeholderText: "Enter background color",
    fieldMappings: "backgroundColor"
  })
], w.prototype, "backgroundColor", 2);
E([
  W()
], w.prototype, "isOpen", 2);
E([
  W()
], w.prototype, "currentDate", 2);
E([
  W()
], w.prototype, "selectedDate", 2);
E([
  W()
], w.prototype, "selectedStartDate", 2);
E([
  W()
], w.prototype, "selectedEndDate", 2);
E([
  W()
], w.prototype, "hoverDate", 2);
E([
  W()
], w.prototype, "hasError", 2);
E([
  W()
], w.prototype, "inputValue", 2);
E([
  O({
    attributeType: D.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], w.prototype, "handleChange", 1);
E([
  O({
    attributeType: D.EVENT,
    displayLabel: "On Date Change",
    eventTrigger: "date-change"
  })
], w.prototype, "handleDateChange", 1);
w = E([
  Lt({
    name: "zero-date-picker",
    version: "1.0.0",
    title: "Date Picker",
    elementSelector: "zero-date-picker",
    group: "Form Controls",
    iconName: "date-picker-icon.png"
  }),
  Ht(),
  lr("zero-date-picker")
], w);
export {
  w as ZeroDatePicker
};
