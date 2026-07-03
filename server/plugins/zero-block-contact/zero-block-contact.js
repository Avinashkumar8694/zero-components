var De = Object.defineProperty;
var Ue = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ee = (r, t, e) => Ue(r, typeof t != "symbol" ? t + "" : t, e);
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ne;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = a(r);
    typeof e.Reflect < "u" && (n = a(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function a(f, x) {
      return function(w, g) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: g }), x && x(w, g);
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
    function m() {
      return l() || d();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, x = !m && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Ot(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Ot({ __proto__: null });
      } : function() {
        return Ot({});
      },
      has: x ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: x ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, g = Object.getPrototypeOf(Function), A = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), N = typeof WeakMap == "function" ? WeakMap : ke(), H = a ? Symbol.for("@reflect-metadata:registry") : void 0, G = Me(), tt = Oe(G);
    function ut(i, s, o, u) {
      if (_(o)) {
        if (!Ft(i))
          throw new TypeError();
        if (!Yt(s))
          throw new TypeError();
        return bt(i, s);
      } else {
        if (!Ft(i))
          throw new TypeError();
        if (!C(s))
          throw new TypeError();
        if (!C(u) && !_(u) && !X(u))
          throw new TypeError();
        return X(u) && (u = void 0), o = D(o), $e(i, s, o, u);
      }
    }
    t("decorate", ut);
    function ct(i, s) {
      function o(u, v) {
        if (!C(u))
          throw new TypeError();
        if (!_(v) && !Ae(v))
          throw new TypeError();
        qt(i, s, u, v);
      }
      return o;
    }
    t("metadata", ct);
    function ht(i, s, o, u) {
      if (!C(o))
        throw new TypeError();
      return _(u) || (u = D(u)), qt(i, s, o, u);
    }
    t("defineMetadata", ht);
    function pt(i, s, o) {
      if (!C(s))
        throw new TypeError();
      return _(o) || (o = D(o)), jt(i, s, o);
    }
    t("hasMetadata", pt);
    function ft(i, s, o) {
      if (!C(s))
        throw new TypeError();
      return _(o) || (o = D(o)), At(i, s, o);
    }
    t("hasOwnMetadata", ft);
    function yt(i, s, o) {
      if (!C(s))
        throw new TypeError();
      return _(o) || (o = D(o)), zt(i, s, o);
    }
    t("getMetadata", yt);
    function vt(i, s, o) {
      if (!C(s))
        throw new TypeError();
      return _(o) || (o = D(o)), Lt(i, s, o);
    }
    t("getOwnMetadata", vt);
    function mt(i, s) {
      if (!C(i))
        throw new TypeError();
      return _(s) || (s = D(s)), Gt(i, s);
    }
    t("getMetadataKeys", mt);
    function _t(i, s) {
      if (!C(i))
        throw new TypeError();
      return _(s) || (s = D(s)), Bt(i, s);
    }
    t("getOwnMetadataKeys", _t);
    function gt(i, s, o) {
      if (!C(s))
        throw new TypeError();
      if (_(o) || (o = D(o)), !C(s))
        throw new TypeError();
      _(o) || (o = D(o));
      var u = et(
        s,
        o,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(i, s, o);
    }
    t("deleteMetadata", gt);
    function bt(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o], v = u(s);
        if (!_(v) && !X(v)) {
          if (!Yt(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function $e(i, s, o, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], M = O(s, o, u);
        if (!_(M) && !X(M)) {
          if (!C(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function jt(i, s, o) {
      var u = At(i, s, o);
      if (u)
        return !0;
      var v = Mt(s);
      return X(v) ? !1 : jt(i, v, o);
    }
    function At(i, s, o) {
      var u = et(
        s,
        o,
        /*Create*/
        !1
      );
      return _(u) ? !1 : Vt(u.OrdinaryHasOwnMetadata(i, s, o));
    }
    function zt(i, s, o) {
      var u = At(i, s, o);
      if (u)
        return Lt(i, s, o);
      var v = Mt(s);
      if (!X(v))
        return zt(i, v, o);
    }
    function Lt(i, s, o) {
      var u = et(
        s,
        o,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(i, s, o);
    }
    function qt(i, s, o, u) {
      var v = et(
        o,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, o, u);
    }
    function Gt(i, s) {
      var o = Bt(i, s), u = Mt(i);
      if (u === null)
        return o;
      var v = Gt(u, s);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var O = new k(), M = [], b = 0, c = o; b < c.length; b++) {
        var h = c[b], p = O.has(h);
        p || (O.add(h), M.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], p = O.has(h);
        p || (O.add(h), M.push(h));
      }
      return M;
    }
    function Bt(i, s) {
      var o = et(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Wt(i) {
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
    function X(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, s) {
      switch (Wt(i)) {
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
      var o = "string", u = Zt(i, l);
      if (u !== void 0) {
        var v = u.call(i, o);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return Ee(i);
    }
    function Ee(i, s) {
      var o, u;
      {
        var v = i.toString;
        if ($t(v)) {
          var u = v.call(i);
          if (!C(u))
            return u;
        }
        var o = i.valueOf;
        if ($t(o)) {
          var u = o.call(i);
          if (!C(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Vt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function D(i) {
      var s = xe(i);
      return we(s) ? s : Se(s);
    }
    function Ft(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function $t(i) {
      return typeof i == "function";
    }
    function Yt(i) {
      return typeof i == "function";
    }
    function Ae(i) {
      switch (Wt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ct(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Zt(i, s) {
      var o = i[s];
      if (o != null) {
        if (!$t(o))
          throw new TypeError();
        return o;
      }
    }
    function Xt(i) {
      var s = Zt(i, d);
      if (!$t(s))
        throw new TypeError();
      var o = s.call(i);
      if (!C(o))
        throw new TypeError();
      return o;
    }
    function Jt(i) {
      return i.value;
    }
    function Qt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Kt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function Mt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || s !== g)
        return s;
      var o = i.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return s;
      var v = u.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Ce() {
      var i;
      !_(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var s, o, u, v = new N(), O = {
        registerProvider: M,
        getProvider: c,
        setProvider: p
      };
      return O;
      function M(y) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(s):
            s = y;
            break;
          case s === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            u === void 0 && (u = new k()), u.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!_(s)) {
          if (s.isProviderFor(y, $))
            return s;
          if (!_(o)) {
            if (o.isProviderFor(y, $))
              return s;
            if (!_(u))
              for (var E = Xt(u); ; ) {
                var S = Qt(E);
                if (!S)
                  return;
                var I = Jt(S);
                if (I.isProviderFor(y, $))
                  return Kt(E), I;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, $))
          return i;
      }
      function c(y, $) {
        var E = v.get(y), S;
        return _(E) || (S = E.get($)), _(S) && (S = b(y, $), _(S) || (_(E) && (E = new A(), v.set(y, E)), E.set($, S))), S;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return s === y || o === y || !_(u) && u.has(y);
      }
      function p(y, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(y, $);
        if (S !== E) {
          if (!_(S))
            return !1;
          var I = v.get(y);
          _(I) && (I = new A(), v.set(y, I)), I.set($, E);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !_(H) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), _(i) && (i = Ce()), !_(H) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Oe(i) {
      var s = new N(), o = {
        isProviderFor: function(h, p) {
          var y = s.get(h);
          return _(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return G.registerProvider(o), o;
      function u(h, p, y) {
        var $ = s.get(h), E = !1;
        if (_($)) {
          if (!y)
            return;
          $ = new A(), s.set(h, $), E = !0;
        }
        var S = $.get(p);
        if (_(S)) {
          if (!y)
            return;
          if (S = new A(), $.set(p, S), !i.setProvider(h, p, o))
            throw $.delete(p), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, p, y) {
        var $ = u(
          p,
          y,
          /*Create*/
          !1
        );
        return _($) ? !1 : Vt($.has(h));
      }
      function O(h, p, y) {
        var $ = u(
          p,
          y,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(h);
      }
      function M(h, p, y, $) {
        var E = u(
          y,
          $,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function b(h, p) {
        var y = [], $ = u(
          h,
          p,
          /*Create*/
          !1
        );
        if (_($))
          return y;
        for (var E = $.keys(), S = Xt(E), I = 0; ; ) {
          var te = Qt(S);
          if (!te)
            return y.length = I, y;
          var Ne = Jt(te);
          try {
            y[I] = Ne;
          } catch (Ie) {
            try {
              Kt(S);
            } finally {
              throw Ie;
            }
          }
          I++;
        }
      }
      function c(h, p, y) {
        var $ = u(
          p,
          y,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(p);
          _(E) || (E.delete(y), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Pe(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, M = new N(), b = {
        isProviderFor: function(c, h) {
          var p = M.get(c);
          return !_(p) && p.has(h) ? !0 : v(c, h).length ? (_(p) && (p = new k(), M.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function et(i, s, o) {
      var u = G.getProvider(i, s);
      if (!_(u))
        return u;
      if (o) {
        if (G.setProvider(i, s, tt))
          return tt;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function b(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[d] = function() {
            return this;
          }, b.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, b.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
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
          }), b.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(c, h) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, b.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, y = h + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Ct(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[d] = function() {
            return this.entries();
          }, b.prototype._find = function(c, h) {
            if (!Ct(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (Ct(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function v(b, c) {
        return b;
      }
      function O(b, c) {
        return c;
      }
      function M(b, c) {
        return [b, c];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new A();
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
          }, s.prototype[d] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function ke() {
      var i = 16, s = w.create(), o = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, c.prototype.delete = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + b();
        while (w.has(s, c));
        return s[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: w.create() });
        }
        return c[o];
      }
      function O(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function b() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var y = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Ot(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ne || (ne = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (He(r)) {
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
function ze(r) {
  return je(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        ee(this, "_stylesApplied", !1);
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), g = (x = l.sheet) == null ? void 0 : x.cssRules;
          g && (Array.from(g).forEach((A) => w.insertRule(A.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          f.appendChild(w);
        }
        d.forEach((w) => {
          const g = w.cloneNode(!0);
          f.appendChild(g);
        });
      }
    }
    return e;
  };
}
function qe(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      qe(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let a = !0;
      if (typeof e == "string") {
        try {
          a = typeof t[e] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function q(r) {
  return Ge(r);
}
var j;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(j || (j = {}));
var U;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(U || (U = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt = globalThis, It = wt.ShadowRoot && (wt.ShadyCSS === void 0 || wt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Dt = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let ve = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Dt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (It && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = ie.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ie.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Be = (r) => new ve(typeof r == "string" ? r : r + "", void 0, Dt), We = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, a, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new ve(e, r, Dt);
}, Ve = (r, t) => {
  if (It) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), a = wt.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = e.cssText, r.appendChild(n);
  }
}, ae = It ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Be(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Fe, defineProperty: Ye, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Xe, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, L = globalThis, se = L.trustedTypes, Ke = se ? se.emptyScript : "", Pt = L.reactiveElementPolyfillSupport, nt = (r, t) => r, xt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Ke : null;
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
} }, Ut = (r, t) => !Fe(r, t), oe = { attribute: !0, type: String, converter: xt, reflect: !1, useDefault: !1, hasChanged: Ut };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = oe) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, e);
      a !== void 0 && Ye(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: a, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(d) {
      this[e] = d;
    } };
    return { get: a, set(d) {
      const m = a == null ? void 0 : a.call(this);
      l == null || l.call(this, d), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? oe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
      const e = this.properties, n = [...Xe(e), ...Je(e)];
      for (const a of n) this.createProperty(a, e[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, a] of e) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const a = this._$Eu(e, n);
      a !== void 0 && this._$Eh.set(a, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const a of n) e.unshift(ae(a));
    } else t !== void 0 && e.push(ae(t));
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
    return Ve(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, n);
    if (a !== void 0 && n.reflect === !0) {
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : xt).toAttribute(e, n.type);
      this._$Em = t, d == null ? this.removeAttribute(a) : this.setAttribute(a, d), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, d;
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const m = n.getPropertyOptions(a), f = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : xt;
      this._$Em = a;
      const x = f.fromAttribute(e, m.type);
      this[a] = x ?? ((d = this._$Ej) == null ? void 0 : d.get(a)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, a = !1, l) {
    var d;
    if (t !== void 0) {
      const m = this.constructor;
      if (a === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? Ut)(l, e) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: a, wrapped: l }, d) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, d ?? e ?? this[t]), l !== !0 || d !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), a === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, d] of a) {
        const { wrapped: m } = d, f = this[l];
        m !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, d, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(e)) : this._$EM();
    } catch (a) {
      throw t = !1, this._$EM(), a;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[nt("elementProperties")] = /* @__PURE__ */ new Map(), J[nt("finalized")] = /* @__PURE__ */ new Map(), Pt == null || Pt({ ReactiveElement: J }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, le = (r) => r, Et = it.trustedTypes, de = Et ? Et.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, me = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, _e = "?" + z, tr = `<${_e}>`, Y = document, st = () => Y.createComment(""), ot = (r) => r === null || typeof r != "object" && typeof r != "function", Ht = Array.isArray, er = (r) => Ht(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Tt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, ce = />/g, B = RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), he = /'/g, pe = /"/g, ge = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Rt = rr(1), Q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), fe = /* @__PURE__ */ new WeakMap(), V = Y.createTreeWalker(Y, 129);
function be(r, t) {
  if (!Ht(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return de !== void 0 ? de.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let a, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", d = rt;
  for (let m = 0; m < e; m++) {
    const f = r[m];
    let x, w, g = -1, A = 0;
    for (; A < f.length && (d.lastIndex = A, w = d.exec(f), w !== null); ) A = d.lastIndex, d === rt ? w[1] === "!--" ? d = ue : w[1] !== void 0 ? d = ce : w[2] !== void 0 ? (ge.test(w[2]) && (a = RegExp("</" + w[2], "g")), d = B) : w[3] !== void 0 && (d = B) : d === B ? w[0] === ">" ? (d = a ?? rt, g = -1) : w[1] === void 0 ? g = -2 : (g = d.lastIndex - w[2].length, x = w[1], d = w[3] === void 0 ? B : w[3] === '"' ? pe : he) : d === pe || d === he ? d = B : d === ue || d === ce ? d = rt : (d = B, a = void 0);
    const k = d === B && r[m + 1].startsWith("/>") ? " " : "";
    l += d === rt ? f + tr : g >= 0 ? (n.push(x), f.slice(0, g) + me + f.slice(g) + z + k) : f + z + (g === -2 ? m : k);
  }
  return [be(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class lt {
  constructor({ strings: t, _$litType$: e }, n) {
    let a;
    this.parts = [];
    let l = 0, d = 0;
    const m = t.length - 1, f = this.parts, [x, w] = nr(t, e);
    if (this.el = lt.createElement(x, n), V.currentNode = this.el.content, e === 2 || e === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (a = V.nextNode()) !== null && f.length < m; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const g of a.getAttributeNames()) if (g.endsWith(me)) {
          const A = w[d++], k = a.getAttribute(g).split(z), N = /([.?@])?(.*)/.exec(A);
          f.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? ar : N[1] === "?" ? sr : N[1] === "@" ? or : St }), a.removeAttribute(g);
        } else g.startsWith(z) && (f.push({ type: 6, index: l }), a.removeAttribute(g));
        if (ge.test(a.tagName)) {
          const g = a.textContent.split(z), A = g.length - 1;
          if (A > 0) {
            a.textContent = Et ? Et.emptyScript : "";
            for (let k = 0; k < A; k++) a.append(g[k], st()), V.nextNode(), f.push({ type: 2, index: ++l });
            a.append(g[A], st());
          }
        }
      } else if (a.nodeType === 8) if (a.data === _e) f.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = a.data.indexOf(z, g + 1)) !== -1; ) f.push({ type: 7, index: l }), g += z.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = Y.createElement("template");
    return n.innerHTML = t, n;
  }
}
function K(r, t, e = r, n) {
  var d, m;
  if (t === Q) return t;
  let a = n !== void 0 ? (d = e._$Co) == null ? void 0 : d[n] : e._$Cl;
  const l = ot(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((m = a == null ? void 0 : a._$AO) == null || m.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = a : e._$Cl = a), a !== void 0 && (t = K(r, a._$AS(r, t.values), a, n)), t;
}
class ir {
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
    const { el: { content: e }, parts: n } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? Y).importNode(e, !0);
    V.currentNode = a;
    let l = V.nextNode(), d = 0, m = 0, f = n[0];
    for (; f !== void 0; ) {
      if (d === f.index) {
        let x;
        f.type === 2 ? x = new dt(l, l.nextSibling, this, t) : f.type === 1 ? x = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (x = new lr(l, this, t)), this._$AV.push(x), f = n[++m];
      }
      d !== (f == null ? void 0 : f.index) && (l = V.nextNode(), d++);
    }
    return V.currentNode = Y, a;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class dt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, a) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    t = K(this, t, e), ot(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== Q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = lt.createElement(be(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(e);
    else {
      const d = new ir(a, this), m = d.u(this.options);
      d.p(e), this.T(m), this._$AH = d;
    }
  }
  _$AC(t) {
    let e = fe.get(t.strings);
    return e === void 0 && fe.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Ht(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, a = 0;
    for (const l of t) a === e.length ? e.push(n = new dt(this.O(st()), this.O(st()), this, this.options)) : n = e[a], n._$AI(l), a++;
    a < e.length && (this._$AR(n && n._$AB.nextSibling, a), e.length = a);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const a = le(t).nextSibling;
      le(t).remove(), t = a;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class St {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, a, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, a) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) t = K(this, t, e, 0), d = !ot(t) || t !== this._$AH && t !== Q, d && (this._$AH = t);
    else {
      const m = t;
      let f, x;
      for (t = l[0], f = 0; f < l.length - 1; f++) x = K(this, m[n + f], e, f), x === Q && (x = this._$AH[f]), d || (d = !ot(x) || x !== this._$AH[f]), x === P ? t = P : t !== P && (t += (x ?? "") + l[f + 1]), this._$AH[f] = x;
    }
    d && !a && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends St {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class sr extends St {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class or extends St {
  constructor(t, e, n, a, l) {
    super(t, e, n, a, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = K(this, t, e, 0) ?? P) === Q) return;
    const n = this._$AH, a = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const kt = it.litHtmlPolyfillSupport;
kt == null || kt(lt, dt), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const dr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = a = new dt(t.insertBefore(st(), l), l, void 0, e ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class at extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = dr(e, this.renderRoot, this.renderOptions);
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
    return Q;
  }
}
var ye;
at._$litElement$ = !0, at.finalized = !0, (ye = F.litElementHydrateSupport) == null || ye.call(F, { LitElement: at });
const Nt = F.litElementPolyfillSupport;
Nt == null || Nt({ LitElement: at });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: xt, reflect: !1, hasChanged: Ut }, cr = (r = ur, t, e) => {
  const { kind: n, metadata: a } = e;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: d } = e;
    return { set(m) {
      const f = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(d, f, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(d, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: d } = e;
    return function(m) {
      const f = this[d];
      t.call(this, m), this.requestUpdate(d, f, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Z(r) {
  return (t, e) => typeof e == "object" ? cr(r, t, e) : ((n, a, l) => {
    const d = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, t, e);
}
var hr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var a = n > 1 ? void 0 : n ? pr(t, e) : t, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (a = (n ? d(t, e, a) : d(a)) || a);
  return n && a && hr(t, e, a), a;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;text-align:left;max-width:350px;'>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:8px;'>Contact Details</h3>",
    "<p style='font-size:13px;color:#4b5563;margin-bottom:4px;'>📧 {{props:email}}</p>",
    "<p style='font-size:13px;color:#4b5563;'>📞 {{props:phone}}</p>",
    "</div>",
    "<div style='flex:1.2;text-align:left;display:flex;flex-direction:column;gap:10px;'>",
    "<input type='text' placeholder='Your Name' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;' disabled>",
    "<input type='email' placeholder='Email Address' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;' disabled>",
    "<textarea placeholder='Message' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;height:60px;' disabled></textarea>",
    "<span style='align-self:flex-start;padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Send Message</span>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Contact"]
};
function W(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends at {
  constructor() {
    super(...arguments), this.title = "Get In Touch", this.lead = "Have questions? Fill out our quick inquiry form or reach us directly.", this.email = "contact@example.com", this.phone = "+1 (555) 019-2834", this.address = "100 Silicon Valley, California, USA", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var f, x, w, g, A, k, N, H, G, tt, ut, ct, ht, pt, ft, yt, vt, mt, _t, gt, bt;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-contact-1.0.0></zero-block-contact-1.0.0>"
      };
    const t = W(((f = r == null ? void 0 : r.props) == null ? void 0 : f.title) ?? ((w = (x = r == null ? void 0 : r.studio) == null ? void 0 : x.props) == null ? void 0 : w.title) ?? "Get In Touch"), e = W(((g = r == null ? void 0 : r.props) == null ? void 0 : g.lead) ?? ((k = (A = r == null ? void 0 : r.studio) == null ? void 0 : A.props) == null ? void 0 : k.lead) ?? "Have questions?"), n = W(((N = r == null ? void 0 : r.props) == null ? void 0 : N.email) ?? ((G = (H = r == null ? void 0 : r.studio) == null ? void 0 : H.props) == null ? void 0 : G.email) ?? "contact@example.com"), a = W(((tt = r == null ? void 0 : r.props) == null ? void 0 : tt.phone) ?? ((ct = (ut = r == null ? void 0 : r.studio) == null ? void 0 : ut.props) == null ? void 0 : ct.phone) ?? "+1 (555) 019-2834"), l = W(((ht = r == null ? void 0 : r.props) == null ? void 0 : ht.address) ?? ((ft = (pt = r == null ? void 0 : r.studio) == null ? void 0 : pt.props) == null ? void 0 : ft.address) ?? "100 Silicon Valley, California, USA"), d = W(((yt = r == null ? void 0 : r.props) == null ? void 0 : yt.layout) ?? ((mt = (vt = r == null ? void 0 : r.studio) == null ? void 0 : vt.props) == null ? void 0 : mt.layout) ?? "layout-1"), m = W(((_t = r == null ? void 0 : r.props) == null ? void 0 : _t.themeStyle) ?? ((bt = (gt = r == null ? void 0 : r.studio) == null ? void 0 : gt.props) == null ? void 0 : bt.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-contact-1.0.0
          title="${t}"
          lead="${e}"
          email="${n}"
          phone="${a}"
          address="${l}"
          layout="${d}"
          theme-style="${m}"
        ></zero-block-contact-1.0.0>
      `
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get leadConfig() {
    return this.lead;
  }
  set leadConfig(r) {
    this.lead = r;
  }
  get emailConfig() {
    return this.email;
  }
  set emailConfig(r) {
    this.email = r;
  }
  get phoneConfig() {
    return this.phone;
  }
  set phoneConfig(r) {
    this.phone = r;
  }
  get addressConfig() {
    return this.address;
  }
  set addressConfig(r) {
    this.address = r;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(r) {
    this.layout = r || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(r) {
    this.themeStyle = r || "light";
  }
  handleSubmit(r) {
    var a, l, d;
    r.preventDefault();
    const t = (a = this.shadowRoot) == null ? void 0 : a.querySelector('input[placeholder="Your Name"]'), e = (l = this.shadowRoot) == null ? void 0 : l.querySelector('input[placeholder="Email Address"]'), n = (d = this.shadowRoot) == null ? void 0 : d.querySelector("textarea");
    this.dispatchEvent(new CustomEvent("submit", {
      detail: {
        name: t ? t.value : "",
        email: e ? e.value : "",
        message: n ? n.value : ""
      },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Rt`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? Rt`
          <div class="split-layout">
            <div class="info-col">
              <h3>Inquiry Info</h3>
              <div class="detail-item">
                <span class="detail-label">Email Address</span>
                <span class="detail-val">${this.email}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Phone Hotline</span>
                <span class="detail-val">${this.phone}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Location</span>
                <span class="detail-val">${this.address}</span>
              </div>
            </div>
            <div class="form-col">
              <form @submit=${this.handleSubmit}>
                <div class="input-row">
                  <input type="text" placeholder="Your Name" required>
                  <input type="email" placeholder="Email Address" required>
                </div>
                <textarea placeholder="Your Message..." required></textarea>
                <button type="submit" class="btn-send">Send Message</button>
              </form>
            </div>
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? Rt`
          <div class="grid-details">
            <div class="detail-card">
              <div class="detail-label">Email Address</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.email}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Phone Hotline</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.phone}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Postal Location</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.address}</div>
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }
};
T.styles = We`
    :host {
      display: block;
      width: 100%;
      --contact-bg: var(--uiv-surface-color, #ffffff);
      --contact-text: var(--uiv-text-color, #111827);
      --contact-lead: #4b5563;
      --contact-card-bg: var(--uiv-surface-color, #ffffff);
      --contact-card-border: var(--uiv-border-color, #e5e7eb);
      --contact-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--contact-bg);
      color: var(--contact-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --contact-bg: #111827;
      --contact-text: #f9fafb;
      --contact-lead: #9ca3af;
      --contact-card-bg: #1f2937;
      --contact-card-border: #374151;
    }

    .header-area {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--contact-lead);
      margin: 0;
    }

    /* ─── Layout 1: Split Columns ─── */
    .split-layout {
      display: flex;
      gap: 50px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .info-col {
      flex: 1;
      text-align: left;
    }

    .form-col {
      flex: 1.3;
      text-align: left;
    }

    h3 {
      font-size: 1.45rem;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .detail-item {
      margin-bottom: 24px;
      font-size: 1rem;
      color: var(--contact-lead);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .detail-label {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--contact-accent);
    }

    .detail-val {
      font-weight: 500;
      color: inherit;
    }

    /* Inquiry Form */
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .input-row {
      display: flex;
      gap: 16px;
    }

    input[type="text"], input[type="email"], textarea {
      width: 100%;
      padding: 12px 16px;
      font-size: 0.95rem;
      border: 1px solid var(--contact-card-border);
      border-radius: 6px;
      outline: none;
      background: var(--contact-card-bg);
      color: inherit;
      box-sizing: border-box;
      transition: border-color 0.25s ease;
    }

    input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
      border-color: var(--contact-accent);
    }

    textarea {
      height: 120px;
      resize: vertical;
    }

    .btn-send {
      align-self: flex-start;
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--contact-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .btn-send:hover {
      opacity: 0.95;
    }

    /* ─── Layout 2: Centered Details Panel ─── */
    .grid-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .detail-card {
      padding: 30px;
      background: var(--contact-card-bg);
      border: 1px solid var(--contact-card-border);
      border-radius: 8px;
      text-align: center;
    }

    .detail-card .detail-label {
      margin-bottom: 8px;
    }

    @media (max-width: 768px) {
      .split-layout {
        flex-direction: column !important;
      }
      .input-row {
        flex-direction: column;
        gap: 16px;
      }
      .btn-send {
        width: 100%;
      }
    }
  `;
R([
  Z({ type: String })
], T.prototype, "title", 2);
R([
  Z({ type: String })
], T.prototype, "lead", 2);
R([
  Z({ type: String })
], T.prototype, "email", 2);
R([
  Z({ type: String })
], T.prototype, "phone", 2);
R([
  Z({ type: String })
], T.prototype, "address", 2);
R([
  Z({ type: String })
], T.prototype, "layout", 2);
R([
  Z({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Email Contact",
    fieldMappings: "email"
  })
], T.prototype, "emailConfig", 1);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Phone Contact",
    fieldMappings: "phone"
  })
], T.prototype, "phoneConfig", 1);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.TEXT_INPUT,
    displayLabel: "Address Location",
    fieldMappings: "address"
  })
], T.prototype, "addressConfig", 1);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Split Details & Inquiry Form", value: "layout-1" },
      { label: "Centered Details Panel", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
R([
  q({
    attributeType: U.PROPERTY,
    uiComponentType: j.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], T.prototype, "themeStyleConfig", 1);
R([
  q({
    attributeType: U.EVENT,
    displayLabel: "On Submit inquiry",
    eventTrigger: "submit"
  })
], T.prototype, "handleSubmit", 1);
T = R([
  ze({
    name: "zero-block-contact",
    version: "1.0.0",
    title: "Contact Block",
    elementSelector: "zero-block-contact",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Le()
], T);
export {
  T as ZeroBlockContact,
  mr as studioTemplate
};
