var Lt = Object.defineProperty;
var zt = (r, e, t) => e in r ? Lt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => zt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Be;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : y(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(f, A) {
      return function($, w) {
        Object.defineProperty(f, $, { configurable: !0, writable: !0, value: w }), A && A($, w);
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
    function y() {
      return l() || c();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, A = !y && !f, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
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
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : jt(), N = typeof WeakMap == "function" ? WeakMap : It(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Tt(), Se = Rt(ie);
    function pt(i, o, a, u) {
      if (m(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return Et(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(u) && !m(u) && !W(u))
          throw new TypeError();
        return W(u) && (u = void 0), a = R(a), St(i, o, a, u);
      }
    }
    e("decorate", pt);
    function vt(i, o) {
      function a(u, _) {
        if (!x(u))
          throw new TypeError();
        if (!m(_) && !Pt(_))
          throw new TypeError();
        Ce(i, o, u, _);
      }
      return a;
    }
    e("metadata", vt);
    function yt(i, o, a, u) {
      if (!x(a))
        throw new TypeError();
      return m(u) || (u = R(u)), Ce(i, o, a, u);
    }
    e("defineMetadata", yt);
    function _t(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), xe(i, o, a);
    }
    e("hasMetadata", _t);
    function mt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), he(i, o, a);
    }
    e("hasOwnMetadata", mt);
    function bt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Oe(i, o, a);
    }
    e("getMetadata", bt);
    function gt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = R(a)), Me(i, o, a);
    }
    e("getOwnMetadata", gt);
    function wt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = R(o)), Pe(i, o);
    }
    e("getMetadataKeys", wt);
    function $t(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = R(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", $t);
    function At(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (m(a) || (a = R(a)), !x(o))
        throw new TypeError();
      m(a) || (a = R(a));
      var u = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", At);
    function Et(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], _ = u(o);
        if (!m(_) && !W(_)) {
          if (!Ue(_))
            throw new TypeError();
          o = _;
        }
      }
      return o;
    }
    function St(i, o, a, u) {
      for (var _ = i.length - 1; _ >= 0; --_) {
        var M = i[_], O = M(o, a, u);
        if (!m(O) && !W(O)) {
          if (!x(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function xe(i, o, a) {
      var u = he(i, o, a);
      if (u)
        return !0;
      var _ = fe(o);
      return W(_) ? !1 : xe(i, _, a);
    }
    function he(i, o, a) {
      var u = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Re(u.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var u = he(i, o, a);
      if (u)
        return Me(i, o, a);
      var _ = fe(o);
      if (!W(_))
        return Oe(i, _, a);
    }
    function Me(i, o, a) {
      var u = q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, u) {
      var _ = q(
        a,
        u,
        /*Create*/
        !0
      );
      _.OrdinaryDefineOwnMetadata(i, o, a, u);
    }
    function Pe(i, o) {
      var a = ke(i, o), u = fe(i);
      if (u === null)
        return a;
      var _ = Pe(u, o);
      if (_.length <= 0)
        return a;
      if (a.length <= 0)
        return _;
      for (var M = new k(), O = [], b = 0, h = a; b < h.length; b++) {
        var d = h[b], p = M.has(d);
        p || (M.add(d), O.push(d));
      }
      for (var v = 0, g = _; v < g.length; v++) {
        var d = g[v], p = M.has(d);
        p || (M.add(d), O.push(d));
      }
      return O;
    }
    function ke(i, o) {
      var a = q(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Te(i) {
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
    function W(i) {
      return i === null;
    }
    function xt(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ot(i, o) {
      switch (Te(i)) {
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
        var _ = u.call(i, a);
        if (x(_))
          throw new TypeError();
        return _;
      }
      return Mt(i);
    }
    function Mt(i, o) {
      var a, u;
      {
        var _ = i.toString;
        if (se(_)) {
          var u = _.call(i);
          if (!x(u))
            return u;
        }
        var a = i.valueOf;
        if (se(a)) {
          var u = a.call(i);
          if (!x(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function Ct(i) {
      return "" + i;
    }
    function R(i) {
      var o = Ot(i);
      return xt(o) ? o : Ct(o);
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
    function Pt(i) {
      switch (Te(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(i, o) {
      return i === o || i !== i && o !== o;
    }
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(i) {
      var o = je(i, c);
      if (!se(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function He(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function fe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var _ = u.constructor;
      return typeof _ != "function" || _ === i ? o : _;
    }
    function kt() {
      var i;
      !m(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Nt(t.Reflect));
      var o, a, u, _ = new N(), M = {
        registerProvider: O,
        getProvider: h,
        setProvider: p
      };
      return M;
      function O(v) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            u === void 0 && (u = new k()), u.add(v);
            break;
        }
      }
      function b(v, g) {
        if (!m(o)) {
          if (o.isProviderFor(v, g))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(v, g))
              return o;
            if (!m(u))
              for (var E = Ie(u); ; ) {
                var S = He(E);
                if (!S)
                  return;
                var T = De(S);
                if (T.isProviderFor(v, g))
                  return Le(E), T;
              }
          }
        }
        if (!m(i) && i.isProviderFor(v, g))
          return i;
      }
      function h(v, g) {
        var E = _.get(v), S;
        return m(E) || (S = E.get(g)), m(S) && (S = b(v, g), m(S) || (m(E) && (E = new P(), _.set(v, E)), E.set(g, S))), S;
      }
      function d(v) {
        if (m(v))
          throw new TypeError();
        return o === v || a === v || !m(u) && u.has(v);
      }
      function p(v, g, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(v, g);
        if (S !== E) {
          if (!m(S))
            return !1;
          var T = _.get(v);
          m(T) && (T = new P(), _.set(v, T)), T.set(g, E);
        }
        return !0;
      }
    }
    function Tt() {
      var i;
      return !m(G) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), m(i) && (i = kt()), !m(G) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Rt(i) {
      var o = new N(), a = {
        isProviderFor: function(d, p) {
          var v = o.get(d);
          return m(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: _,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return ie.registerProvider(a), a;
      function u(d, p, v) {
        var g = o.get(d), E = !1;
        if (m(g)) {
          if (!v)
            return;
          g = new P(), o.set(d, g), E = !0;
        }
        var S = g.get(p);
        if (m(S)) {
          if (!v)
            return;
          if (S = new P(), g.set(p, S), !i.setProvider(d, p, a))
            throw g.delete(p), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function _(d, p, v) {
        var g = u(
          p,
          v,
          /*Create*/
          !1
        );
        return m(g) ? !1 : Re(g.has(d));
      }
      function M(d, p, v) {
        var g = u(
          p,
          v,
          /*Create*/
          !1
        );
        if (!m(g))
          return g.get(d);
      }
      function O(d, p, v, g) {
        var E = u(
          v,
          g,
          /*Create*/
          !0
        );
        E.set(d, p);
      }
      function b(d, p) {
        var v = [], g = u(
          d,
          p,
          /*Create*/
          !1
        );
        if (m(g))
          return v;
        for (var E = g.keys(), S = Ie(E), T = 0; ; ) {
          var ze = He(S);
          if (!ze)
            return v.length = T, v;
          var Dt = De(ze);
          try {
            v[T] = Dt;
          } catch (Ht) {
            try {
              Le(S);
            } finally {
              throw Ht;
            }
          }
          T++;
        }
      }
      function h(d, p, v) {
        var g = u(
          p,
          v,
          /*Create*/
          !1
        );
        if (m(g) || !g.delete(d))
          return !1;
        if (g.size === 0) {
          var E = o.get(p);
          m(E) || (E.delete(v), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Nt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, _ = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new N(), b = {
        isProviderFor: function(h, d) {
          var p = O.get(h);
          return !m(p) && p.has(d) ? !0 : _(h, d).length ? (m(p) && (p = new k(), O.set(h, p)), p.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: M
      };
      return b;
    }
    function q(i, o, a) {
      var u = ie.getProvider(i, o);
      if (!m(u))
        return u;
      if (a) {
        if (ie.setProvider(i, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(h, d, p) {
            this._index = 0, this._keys = h, this._values = d, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[c] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, b;
        }()
      ), u = (
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
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, b.prototype.set = function(h, d) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = d, this;
          }, b.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var p = this._keys.length, v = d + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, de(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, _);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[c] = function() {
            return this.entries();
          }, b.prototype._find = function(h, d) {
            if (!de(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (de(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function _(b, h) {
        return b;
      }
      function M(b, h) {
        return h;
      }
      function O(b, h) {
        return [b, h];
      }
    }
    function jt() {
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
          }, o.prototype[c] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function It() {
      var i = 16, o = $.create(), a = u();
      return (
        /** @class */
        function() {
          function h() {
            this._key = u();
          }
          return h.prototype.has = function(d) {
            var p = _(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? $.has(p, this._key) : !1;
          }, h.prototype.get = function(d) {
            var p = _(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? $.get(p, this._key) : void 0;
          }, h.prototype.set = function(d, p) {
            var v = _(
              d,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, h.prototype.delete = function(d) {
            var p = _(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = u();
          }, h;
        }()
      );
      function u() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while ($.has(o, h));
        return o[h] = !0, h;
      }
      function _(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: $.create() });
        }
        return h[a];
      }
      function M(h, d) {
        for (var p = 0; p < d; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : M(d, h), d;
        }
        return M(new Array(h), h);
      }
      function b() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", p = 0; p < i; ++p) {
          var v = h[p];
          (p === 4 || p === 6 || p === 8) && (d += "-"), v < 16 && (d += "0"), d += v.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Be || (Be = {}));
function Gt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Wt(r) {
  return function(e) {
    if (Gt(r)) {
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
function at(r) {
  return Wt(r);
}
function lt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ge(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const $ = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((P) => $.insertRule(P.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          f.appendChild($);
        }
        c.forEach(($) => {
          const w = $.cloneNode(!0);
          f.appendChild(w);
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
function Vt(r) {
  return function(e, t) {
    try {
      Bt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
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
function be(r) {
  return Vt(r);
}
var Q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(Q || (Q = {}));
var K;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(K || (K = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, ge = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new ct(typeof r == "string" ? r : r + "", void 0, we), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ct(t, r, we);
}, Zt = (r, e) => {
  if (ge) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = ge ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, j = globalThis, qe = j.trustedTypes, tr = qe ? qe.emptyScript : "", ve = j.reactiveElementPolyfillSupport, X = (r, e) => r, ae = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? tr : null;
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
} }, $e = (r, e) => !Xt(r, e), Ze = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: s, set(c) {
      const y = s == null ? void 0 : s.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, y, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, n = [...Qt(t), ...Kt(t)];
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
      for (const s of n) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const y = n.getPropertyOptions(s), f = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : ae;
      this._$Em = s;
      const A = f.fromAttribute(t, y.type);
      this[s] = A ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var c;
    if (e !== void 0) {
      const y = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = y.getPropertyOptions(e)), !((n.hasChanged ?? $e)(l, t) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(y._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, c] of s) {
        const { wrapped: y } = c, f = this[l];
        y !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, c, f);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[X("elementProperties")] = /* @__PURE__ */ new Map(), B[X("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: B }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, Xe = (r) => r, le = Y.trustedTypes, Ye = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ut = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + U, rr = `<${ht}>`, L = document, ee = () => L.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, nr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, I = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, dt = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = ir(1), V = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ft(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = Z;
  for (let y = 0; y < t; y++) {
    const f = r[y];
    let A, $, w = -1, P = 0;
    for (; P < f.length && (c.lastIndex = P, $ = c.exec(f), $ !== null); ) P = c.lastIndex, c === Z ? $[1] === "!--" ? c = Je : $[1] !== void 0 ? c = Qe : $[2] !== void 0 ? (dt.test($[2]) && (s = RegExp("</" + $[2], "g")), c = I) : $[3] !== void 0 && (c = I) : c === I ? $[0] === ">" ? (c = s ?? Z, w = -1) : $[1] === void 0 ? w = -2 : (w = c.lastIndex - $[2].length, A = $[1], c = $[3] === void 0 ? I : $[3] === '"' ? et : Ke) : c === et || c === Ke ? c = I : c === Je || c === Qe ? c = Z : (c = I, s = void 0);
    const k = c === I && r[y + 1].startsWith("/>") ? " " : "";
    l += c === Z ? f + rr : w >= 0 ? (n.push(A), f.slice(0, w) + ut + f.slice(w) + U + k) : f + U + (w === -2 ? y : k);
  }
  return [ft(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const y = e.length - 1, f = this.parts, [A, $] = sr(e, t);
    if (this.el = re.createElement(A, n), D.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = D.nextNode()) !== null && f.length < y; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(ut)) {
          const P = $[c++], k = s.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(P);
          f.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? ar : N[1] === "?" ? lr : N[1] === "@" ? cr : ce }), s.removeAttribute(w);
        } else w.startsWith(U) && (f.push({ type: 6, index: l }), s.removeAttribute(w));
        if (dt.test(s.tagName)) {
          const w = s.textContent.split(U), P = w.length - 1;
          if (P > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let k = 0; k < P; k++) s.append(w[k], ee()), D.nextNode(), f.push({ type: 2, index: ++l });
            s.append(w[P], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ht) f.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) f.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = L.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(r, e, t = r, n) {
  var c, y;
  if (e === V) return e;
  let s = n !== void 0 ? (c = t._$Co) == null ? void 0 : c[n] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((y = s == null ? void 0 : s._$AO) == null || y.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = F(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    D.currentNode = s;
    let l = D.nextNode(), c = 0, y = 0, f = n[0];
    for (; f !== void 0; ) {
      if (c === f.index) {
        let A;
        f.type === 2 ? A = new ne(l, l.nextSibling, this, e) : f.type === 1 ? A = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (A = new ur(l, this, e)), this._$AV.push(A), f = n[++y];
      }
      c !== (f == null ? void 0 : f.index) && (l = D.nextNode(), c++);
    }
    return D.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ne {
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
    e = F(this, e, t), te(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== V && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(ft(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const c = new or(s, this), y = c.u(this.options);
      c.p(t), this.T(y), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ne(this.O(ee()), this.O(ee()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
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
    let c = !1;
    if (l === void 0) e = F(this, e, t, 0), c = !te(e) || e !== this._$AH && e !== V, c && (this._$AH = e);
    else {
      const y = e;
      let f, A;
      for (e = l[0], f = 0; f < l.length - 1; f++) A = F(this, y[n + f], t, f), A === V && (A = this._$AH[f]), c || (c = !te(A) || A !== this._$AH[f]), A === C ? e = C : e !== C && (e += (A ?? "") + l[f + 1]), this._$AH[f] = A;
    }
    c && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class lr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class cr extends ce {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? C) === V) return;
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
    F(this, e);
  }
}
const _e = Y.litHtmlPolyfillSupport;
_e == null || _e(re, ne), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends B {
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
    return V;
  }
}
var ot;
J._$litElement$ = !0, J.finalized = !0, (ot = H.litElementHydrateSupport) == null || ot.call(H, { LitElement: J });
const me = H.litElementPolyfillSupport;
me == null || me({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: $e }, fr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: c } = t;
    return { set(y) {
      const f = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(c, f, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(c, void 0, r, y), y;
    } };
  }
  if (n === "setter") {
    const { name: c } = t;
    return function(y) {
      const f = this[c];
      e.call(this, y), this.requestUpdate(c, f, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ee(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, ue = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = (n ? c(e, t, s) : c(s)) || s);
  return n && s && pr(e, t, s), s;
};
const yr = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
    "<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--uiv-border-color,#e2e8f0);border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>",
    "<div style='position:absolute;height:20px;width:20px;left:4px;bottom:4px;background-color:white;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,0.2);'></div>",
    "</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Switch", "Uiverse"]
};
let z = class extends J {
  constructor() {
    super(...arguments), this.theme = "ios", this.checked = !1, this.accentColor = "";
  }
  static getStudioTemplate(r) {
    var l, c, y, f;
    if (!r) return nt;
    const e = ((l = r.props) == null ? void 0 : l.checked) ?? ((c = r.studio.props) == null ? void 0 : c.checked), t = (((y = r.props) == null ? void 0 : y.accentColor) ?? ((f = r.studio.props) == null ? void 0 : f.accentColor)) || "var(--uiv-primary-color,#6366f1)", n = e ? t : "var(--uiv-border-color,#e2e8f0)", s = e ? "translateX(22px)" : "none";
    return {
      ...nt,
      templateHtml: [
        "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
        `<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:${n};border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>`,
        `<div style='position:absolute;height:20px;width:20px;left:4px;bottom:4px;background-color:white;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,0.2);transform:${s};'></div>`,
        "</span>",
        "</div>"
      ].join("")
    };
  }
  handleChange(r) {
    const e = r.target;
    this.checked = e.checked, this.dispatchEvent(new CustomEvent("change", {
      detail: { checked: this.checked },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    var e;
    const r = (e = yr()) == null ? void 0 : e.getActiveTheme("zero-uiv-themes");
    return r ? tt`
            <style>
                ${r.getGlobalStyles()}
                ${r.getComponentStyles("switch")}
                :host {
                    --uiv-switch-accent: ${this.accentColor || (this.theme === "ios" ? "#4cd964" : "#6c63ff")};
                }
            </style>
            <label class="switch uiv-${r == null ? void 0 : r.id}-theme">
                <input type="checkbox" .checked="${this.checked}" @change="${this.handleChange}">
                <span class="slider uiv-${r == null ? void 0 : r.id}-card"></span>
            </label>
        ` : tt`<label class="switch"><input type="checkbox" .checked="${this.checked}"><span class="slider"></span></label>`;
  }
};
z.styles = qt`
        :host {
            display: inline-block;
            --sw-p: var(--uiv-primary-color, #6366f1);
            --sw-s: var(--uiv-secondary-color, #8b5cf6);
            --sw-bg: var(--uiv-surface-color, #ffffff);
            --sw-border: var(--uiv-border-color, #e2e8f0);
            --sw-glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
            --sw-intensity: var(--uiv-glow-intensity, 1);
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 28px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--sw-border);
            transition: .4s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 34px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        input:checked + .slider {
            background-color: var(--sw-p);
            box-shadow: var(--sw-glow);
        }

        input:checked + .slider:before {
            transform: translateX(22px);
        }
    `;
ue([
  Ee({ type: String }),
  be({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "IOS", value: "ios" },
      { label: "Modern", value: "modern" }
    ]
  })
], z.prototype, "theme", 2);
ue([
  Ee({ type: Boolean }),
  be({
    attributeType: K.PROPERTY,
    uiComponentType: Q.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], z.prototype, "checked", 2);
ue([
  Ee({ type: String }),
  be({
    attributeType: K.PROPERTY,
    uiComponentType: Q.COLOR_PICKER,
    displayLabel: "Accent Color",
    fieldMappings: "accentColor"
  })
], z.prototype, "accentColor", 2);
z = ue([
  at({
    name: "zero-uiv-switch",
    version: "1.0.0",
    title: "Unified Switch",
    elementSelector: "zero-uiv-switch",
    group: "Uiverse Switch",
    iconName: "switch-icon.png"
  }),
  lt()
], z);
var _r = Object.getOwnPropertyDescriptor, mr = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? _r(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = c(s) || s);
  return s;
};
const it = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
    "<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:#e5e5ea;border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>",
    "<div style='position:absolute;height:24px;width:24px;left:2px;bottom:2px;background-color:white;border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,0.15);'></div>",
    "</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Switch", "iOS"]
};
let st = class extends z {
  static getStudioTemplate(r) {
    var l, c, y, f;
    if (!r) return it;
    const e = ((l = r.props) == null ? void 0 : l.checked) ?? ((c = r.studio.props) == null ? void 0 : c.checked), t = (((y = r.props) == null ? void 0 : y.accentColor) ?? ((f = r.studio.props) == null ? void 0 : f.accentColor)) || "#34c759", n = e ? t : "#e5e5ea", s = e ? "translateX(22px)" : "none";
    return {
      ...it,
      templateHtml: [
        "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
        `<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:${n};border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>`,
        `<div style='position:absolute;height:24px;width:24px;left:2px;bottom:2px;background-color:white;border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,0.15);transform:${s};'></div>`,
        "</span>",
        "</div>"
      ].join("")
    };
  }
  constructor() {
    super(), this.theme = "ios";
  }
};
st = mr([
  at({
    name: "zero-uiv-switch-ios",
    version: "1.0.0",
    title: "IOS Switch (Legacy)",
    elementSelector: "zero-uiv-switch-ios",
    group: "Uiverse Switch",
    iconName: "switch-icon.png"
  }),
  lt()
], st);
export {
  st as ZeroUivSwitchIOS,
  it as iosTemplate
};
