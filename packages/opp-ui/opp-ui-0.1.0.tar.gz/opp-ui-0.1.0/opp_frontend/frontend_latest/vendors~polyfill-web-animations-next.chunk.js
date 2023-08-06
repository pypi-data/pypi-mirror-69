(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~polyfill-web-animations-next"],{

/***/ "./node_modules/web-animations-js/web-animations-next-lite.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/web-animations-js/web-animations-next-lite.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
!function () {
  var a = {},
      b = {},
      c = {};
  !function (a, b) {
    function c(a) {
      if ("number" == typeof a) return a;
      var b = {};

      for (var c in a) b[c] = a[c];

      return b;
    }

    function d() {
      this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = x;
    }

    function e() {
      return a.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0);
    }

    function f(b, c, e) {
      var f = new d();
      return c && (f.fill = "both", f.duration = "auto"), "number" != typeof b || isNaN(b) ? void 0 !== b && Object.getOwnPropertyNames(b).forEach(function (c) {
        if ("auto" != b[c]) {
          if (("number" == typeof f[c] || "duration" == c) && ("number" != typeof b[c] || isNaN(b[c]))) return;
          if ("fill" == c && -1 == v.indexOf(b[c])) return;
          if ("direction" == c && -1 == w.indexOf(b[c])) return;
          if ("playbackRate" == c && 1 !== b[c] && a.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
          f[c] = b[c];
        }
      }) : f.duration = b, f;
    }

    function g(a) {
      return "number" == typeof a && (a = isNaN(a) ? {
        duration: 0
      } : {
        duration: a
      }), a;
    }

    function h(b, c) {
      return b = a.numericTimingToObject(b), f(b, c);
    }

    function i(a, b, c, d) {
      return a < 0 || a > 1 || c < 0 || c > 1 ? x : function (e) {
        function f(a, b, c) {
          return 3 * a * (1 - c) * (1 - c) * c + 3 * b * (1 - c) * c * c + c * c * c;
        }

        if (e <= 0) {
          var g = 0;
          return a > 0 ? g = b / a : !b && c > 0 && (g = d / c), g * e;
        }

        if (e >= 1) {
          var h = 0;
          return c < 1 ? h = (d - 1) / (c - 1) : 1 == c && a < 1 && (h = (b - 1) / (a - 1)), 1 + h * (e - 1);
        }

        for (var i = 0, j = 1; i < j;) {
          var k = (i + j) / 2,
              l = f(a, c, k);
          if (Math.abs(e - l) < 1e-5) return f(b, d, k);
          l < e ? i = k : j = k;
        }

        return f(b, d, k);
      };
    }

    function j(a, b) {
      return function (c) {
        if (c >= 1) return 1;
        var d = 1 / a;
        return (c += b * d) - c % d;
      };
    }

    function k(a) {
      C || (C = document.createElement("div").style), C.animationTimingFunction = "", C.animationTimingFunction = a;
      var b = C.animationTimingFunction;
      if ("" == b && e()) throw new TypeError(a + " is not a valid value for easing");
      return b;
    }

    function l(a) {
      if ("linear" == a) return x;
      var b = E.exec(a);
      if (b) return i.apply(this, b.slice(1).map(Number));
      var c = F.exec(a);
      if (c) return j(Number(c[1]), A);
      var d = G.exec(a);
      return d ? j(Number(d[1]), {
        start: y,
        middle: z,
        end: A
      }[d[2]]) : B[a] || x;
    }

    function m(a) {
      return Math.abs(n(a) / a.playbackRate);
    }

    function n(a) {
      return 0 === a.duration || 0 === a.iterations ? 0 : a.duration * a.iterations;
    }

    function o(a, b, c) {
      if (null == b) return H;
      var d = c.delay + a + c.endDelay;
      return b < Math.min(c.delay, d) ? I : b >= Math.min(c.delay + a, d) ? J : K;
    }

    function p(a, b, c, d, e) {
      switch (d) {
        case I:
          return "backwards" == b || "both" == b ? 0 : null;

        case K:
          return c - e;

        case J:
          return "forwards" == b || "both" == b ? a : null;

        case H:
          return null;
      }
    }

    function q(a, b, c, d, e) {
      var f = e;
      return 0 === a ? b !== I && (f += c) : f += d / a, f;
    }

    function r(a, b, c, d, e, f) {
      var g = a === 1 / 0 ? b % 1 : a % 1;
      return 0 !== g || c !== J || 0 === d || 0 === e && 0 !== f || (g = 1), g;
    }

    function s(a, b, c, d) {
      return a === J && b === 1 / 0 ? 1 / 0 : 1 === c ? Math.floor(d) - 1 : Math.floor(d);
    }

    function t(a, b, c) {
      var d = a;

      if ("normal" !== a && "reverse" !== a) {
        var e = b;
        "alternate-reverse" === a && (e += 1), d = "normal", e !== 1 / 0 && e % 2 != 0 && (d = "reverse");
      }

      return "normal" === d ? c : 1 - c;
    }

    function u(a, b, c) {
      var d = o(a, b, c),
          e = p(a, c.fill, b, d, c.delay);
      if (null === e) return null;
      var f = q(c.duration, d, c.iterations, e, c.iterationStart),
          g = r(f, c.iterationStart, d, c.iterations, e, c.duration),
          h = s(d, c.iterations, g, f),
          i = t(c.direction, h, g);
      return c._easingFunction(i);
    }

    var v = "backwards|forwards|both|none".split("|"),
        w = "reverse|alternate|alternate-reverse".split("|"),
        x = function (a) {
      return a;
    };

    d.prototype = {
      _setMember: function (b, c) {
        this["_" + b] = c, this._effect && (this._effect._timingInput[b] = c, this._effect._timing = a.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = a.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation());
      },

      get playbackRate() {
        return this._playbackRate;
      },

      set delay(a) {
        this._setMember("delay", a);
      },

      get delay() {
        return this._delay;
      },

      set endDelay(a) {
        this._setMember("endDelay", a);
      },

      get endDelay() {
        return this._endDelay;
      },

      set fill(a) {
        this._setMember("fill", a);
      },

      get fill() {
        return this._fill;
      },

      set iterationStart(a) {
        if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterationStart must be a non-negative number, received: " + a);

        this._setMember("iterationStart", a);
      },

      get iterationStart() {
        return this._iterationStart;
      },

      set duration(a) {
        if ("auto" != a && (isNaN(a) || a < 0) && e()) throw new TypeError("duration must be non-negative or auto, received: " + a);

        this._setMember("duration", a);
      },

      get duration() {
        return this._duration;
      },

      set direction(a) {
        this._setMember("direction", a);
      },

      get direction() {
        return this._direction;
      },

      set easing(a) {
        this._easingFunction = l(k(a)), this._setMember("easing", a);
      },

      get easing() {
        return this._easing;
      },

      set iterations(a) {
        if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterations must be non-negative, received: " + a);

        this._setMember("iterations", a);
      },

      get iterations() {
        return this._iterations;
      }

    };
    var y = 1,
        z = .5,
        A = 0,
        B = {
      ease: i(.25, .1, .25, 1),
      "ease-in": i(.42, 0, 1, 1),
      "ease-out": i(0, 0, .58, 1),
      "ease-in-out": i(.42, 0, .58, 1),
      "step-start": j(1, y),
      "step-middle": j(1, z),
      "step-end": j(1, A)
    },
        C = null,
        D = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
        E = new RegExp("cubic-bezier\\(" + D + "," + D + "," + D + "," + D + "\\)"),
        F = /steps\(\s*(\d+)\s*\)/,
        G = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
        H = 0,
        I = 1,
        J = 2,
        K = 3;
    a.cloneTimingInput = c, a.makeTiming = f, a.numericTimingToObject = g, a.normalizeTimingInput = h, a.calculateActiveDuration = m, a.calculateIterationProgress = u, a.calculatePhase = o, a.normalizeEasing = k, a.parseEasingFunction = l;
  }(a), function (a, b) {
    function c(a, b) {
      return a in k ? k[a][b] || b : b;
    }

    function d(a) {
      return "display" === a || 0 === a.lastIndexOf("animation", 0) || 0 === a.lastIndexOf("transition", 0);
    }

    function e(a, b, e) {
      if (!d(a)) {
        var f = h[a];

        if (f) {
          i.style[a] = b;

          for (var g in f) {
            var j = f[g],
                k = i.style[j];
            e[j] = c(j, k);
          }
        } else e[a] = c(a, b);
      }
    }

    function f(a) {
      var b = [];

      for (var c in a) if (!(c in ["easing", "offset", "composite"])) {
        var d = a[c];
        Array.isArray(d) || (d = [d]);

        for (var e, f = d.length, g = 0; g < f; g++) e = {}, e.offset = "offset" in a ? a.offset : 1 == f ? 1 : g / (f - 1), "easing" in a && (e.easing = a.easing), "composite" in a && (e.composite = a.composite), e[c] = d[g], b.push(e);
      }

      return b.sort(function (a, b) {
        return a.offset - b.offset;
      }), b;
    }

    function g(b) {
      function c() {
        var a = d.length;
        null == d[a - 1].offset && (d[a - 1].offset = 1), a > 1 && null == d[0].offset && (d[0].offset = 0);

        for (var b = 0, c = d[0].offset, e = 1; e < a; e++) {
          var f = d[e].offset;

          if (null != f) {
            for (var g = 1; g < e - b; g++) d[b + g].offset = c + (f - c) * g / (e - b);

            b = e, c = f;
          }
        }
      }

      if (null == b) return [];
      window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || (b = f(b));

      for (var d = b.map(function (b) {
        var c = {};

        for (var d in b) {
          var f = b[d];

          if ("offset" == d) {
            if (null != f) {
              if (f = Number(f), !isFinite(f)) throw new TypeError("Keyframe offsets must be numbers.");
              if (f < 0 || f > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.");
            }
          } else if ("composite" == d) {
            if ("add" == f || "accumulate" == f) throw {
              type: DOMException.NOT_SUPPORTED_ERR,
              name: "NotSupportedError",
              message: "add compositing is not supported"
            };
            if ("replace" != f) throw new TypeError("Invalid composite mode " + f + ".");
          } else f = "easing" == d ? a.normalizeEasing(f) : "" + f;

          e(d, f, c);
        }

        return void 0 == c.offset && (c.offset = null), void 0 == c.easing && (c.easing = "linear"), c;
      }), g = !0, h = -1 / 0, i = 0; i < d.length; i++) {
        var j = d[i].offset;

        if (null != j) {
          if (j < h) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
          h = j;
        } else g = !1;
      }

      return d = d.filter(function (a) {
        return a.offset >= 0 && a.offset <= 1;
      }), g || c(), d;
    }

    var h = {
      background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
      border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
      borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
      borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
      borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
      borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
      borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
      borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
      flex: ["flexGrow", "flexShrink", "flexBasis"],
      font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
      margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
    },
        i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        j = {
      thin: "1px",
      medium: "3px",
      thick: "5px"
    },
        k = {
      borderBottomWidth: j,
      borderLeftWidth: j,
      borderRightWidth: j,
      borderTopWidth: j,
      fontSize: {
        "xx-small": "60%",
        "x-small": "75%",
        small: "89%",
        medium: "100%",
        large: "120%",
        "x-large": "150%",
        "xx-large": "200%"
      },
      fontWeight: {
        normal: "400",
        bold: "700"
      },
      outlineWidth: j,
      textShadow: {
        none: "0px 0px 0px transparent"
      },
      boxShadow: {
        none: "0px 0px 0px 0px transparent"
      }
    };
    a.convertToArrayForm = f, a.normalizeKeyframes = g;
  }(a), function (a) {
    var b = {};
    a.isDeprecated = function (a, c, d, e) {
      var f = e ? "are" : "is",
          g = new Date(),
          h = new Date(c);
      return h.setMonth(h.getMonth() + 3), !(g < h && (a in b || console.warn("Web Animations: " + a + " " + f + " deprecated and will stop working on " + h.toDateString() + ". " + d), b[a] = !0, 1));
    }, a.deprecated = function (b, c, d, e) {
      var f = e ? "are" : "is";
      if (a.isDeprecated(b, c, d, e)) throw new Error(b + " " + f + " no longer supported. " + d);
    };
  }(a), function () {
    if (document.documentElement.animate) {
      var c = document.documentElement.animate([], 0),
          d = !0;
      if (c && (d = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (a) {
        void 0 === c[a] && (d = !0);
      })), !d) return;
    }

    !function (a, b, c) {
      function d(a) {
        for (var b = {}, c = 0; c < a.length; c++) for (var d in a[c]) if ("offset" != d && "easing" != d && "composite" != d) {
          var e = {
            offset: a[c].offset,
            easing: a[c].easing,
            value: a[c][d]
          };
          b[d] = b[d] || [], b[d].push(e);
        }

        for (var f in b) {
          var g = b[f];
          if (0 != g[0].offset || 1 != g[g.length - 1].offset) throw {
            type: DOMException.NOT_SUPPORTED_ERR,
            name: "NotSupportedError",
            message: "Partial keyframes are not supported"
          };
        }

        return b;
      }

      function e(c) {
        var d = [];

        for (var e in c) for (var f = c[e], g = 0; g < f.length - 1; g++) {
          var h = g,
              i = g + 1,
              j = f[h].offset,
              k = f[i].offset,
              l = j,
              m = k;
          0 == g && (l = -1 / 0, 0 == k && (i = h)), g == f.length - 2 && (m = 1 / 0, 1 == j && (h = i)), d.push({
            applyFrom: l,
            applyTo: m,
            startOffset: f[h].offset,
            endOffset: f[i].offset,
            easingFunction: a.parseEasingFunction(f[h].easing),
            property: e,
            interpolation: b.propertyInterpolation(e, f[h].value, f[i].value)
          });
        }

        return d.sort(function (a, b) {
          return a.startOffset - b.startOffset;
        }), d;
      }

      b.convertEffectInput = function (c) {
        var f = a.normalizeKeyframes(c),
            g = d(f),
            h = e(g);
        return function (a, c) {
          if (null != c) h.filter(function (a) {
            return c >= a.applyFrom && c < a.applyTo;
          }).forEach(function (d) {
            var e = c - d.startOffset,
                f = d.endOffset - d.startOffset,
                g = 0 == f ? 0 : d.easingFunction(e / f);
            b.apply(a, d.property, d.interpolation(g));
          });else for (var d in g) "offset" != d && "easing" != d && "composite" != d && b.clear(a, d);
        };
      };
    }(a, b), function (a, b, c) {
      function d(a) {
        return a.replace(/-(.)/g, function (a, b) {
          return b.toUpperCase();
        });
      }

      function e(a, b, c) {
        h[c] = h[c] || [], h[c].push([a, b]);
      }

      function f(a, b, c) {
        for (var f = 0; f < c.length; f++) {
          e(a, b, d(c[f]));
        }
      }

      function g(c, e, f) {
        var g = c;
        /-/.test(c) && !a.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (g = d(c)), "initial" != e && "initial" != f || ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));

        for (var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
          var l = j[k][0](e),
              m = j[k][0](f);

          if (void 0 !== l && void 0 !== m) {
            var n = j[k][1](l, m);

            if (n) {
              var o = b.Interpolation.apply(null, n);
              return function (a) {
                return 0 == a ? e : 1 == a ? f : o(a);
              };
            }
          }
        }

        return b.Interpolation(!1, !0, function (a) {
          return a ? f : e;
        });
      }

      var h = {};
      b.addPropertiesHandler = f;
      var i = {
        backgroundColor: "transparent",
        backgroundPosition: "0% 0%",
        borderBottomColor: "currentColor",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomWidth: "3px",
        borderLeftColor: "currentColor",
        borderLeftWidth: "3px",
        borderRightColor: "currentColor",
        borderRightWidth: "3px",
        borderSpacing: "2px",
        borderTopColor: "currentColor",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderTopWidth: "3px",
        bottom: "auto",
        clip: "rect(0px, 0px, 0px, 0px)",
        color: "black",
        fontSize: "100%",
        fontWeight: "400",
        height: "auto",
        left: "auto",
        letterSpacing: "normal",
        lineHeight: "120%",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "0px",
        maxHeight: "none",
        maxWidth: "none",
        minHeight: "0px",
        minWidth: "0px",
        opacity: "1.0",
        outlineColor: "invert",
        outlineOffset: "0px",
        outlineWidth: "3px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "0px",
        right: "auto",
        strokeDasharray: "none",
        strokeDashoffset: "0px",
        textIndent: "0px",
        textShadow: "0px 0px 0px transparent",
        top: "auto",
        transform: "",
        verticalAlign: "0px",
        visibility: "visible",
        width: "auto",
        wordSpacing: "normal",
        zIndex: "auto"
      };
      b.propertyInterpolation = g;
    }(a, b), function (a, b, c) {
      function d(b) {
        var c = a.calculateActiveDuration(b),
            d = function (d) {
          return a.calculateIterationProgress(c, d, b);
        };

        return d._totalDuration = b.delay + c + b.endDelay, d;
      }

      b.KeyframeEffect = function (c, e, f, g) {
        var h,
            i = d(a.normalizeTimingInput(f)),
            j = b.convertEffectInput(e),
            k = function () {
          j(c, h);
        };

        return k._update = function (a) {
          return null !== (h = i(a));
        }, k._clear = function () {
          j(c, null);
        }, k._hasSameTarget = function (a) {
          return c === a;
        }, k._target = c, k._totalDuration = i._totalDuration, k._id = g, k;
      };
    }(a, b), function (a, b) {
      a.apply = function (b, c, d) {
        b.style[a.propertyName(c)] = d;
      }, a.clear = function (b, c) {
        b.style[a.propertyName(c)] = "";
      };
    }(b), function (a) {
      window.Element.prototype.animate = function (b, c) {
        var d = "";
        return c && c.id && (d = c.id), a.timeline._play(a.KeyframeEffect(this, b, c, d));
      };
    }(b), function (a, b) {
      function c(a, b, d) {
        if ("number" == typeof a && "number" == typeof b) return a * (1 - d) + b * d;
        if ("boolean" == typeof a && "boolean" == typeof b) return d < .5 ? a : b;

        if (a.length == b.length) {
          for (var e = [], f = 0; f < a.length; f++) e.push(c(a[f], b[f], d));

          return e;
        }

        throw "Mismatched interpolation arguments " + a + ":" + b;
      }

      a.Interpolation = function (a, b, d) {
        return function (e) {
          return d(c(a, b, e));
        };
      };
    }(b), function (a, b, c) {
      a.sequenceNumber = 0;

      var d = function (a, b, c) {
        this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
      };

      b.Animation = function (b) {
        this.id = "", b && b._id && (this.id = b._id), this._sequenceNumber = a.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = b, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1;
      }, b.Animation.prototype = {
        _ensureAlive: function () {
          this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, b.timeline._animations.push(this));
        },
        _tickCurrentTime: function (a, b) {
          a != this._currentTime && (this._currentTime = a, this._isFinished && !b && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive());
        },

        get currentTime() {
          return this._idle || this._currentTimePending ? null : this._currentTime;
        },

        set currentTime(a) {
          a = +a, isNaN(a) || (b.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - a / this._playbackRate), this._currentTimePending = !1, this._currentTime != a && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(a, !0), b.applyDirtiedAnimation(this)));
        },

        get startTime() {
          return this._startTime;
        },

        set startTime(a) {
          a = +a, isNaN(a) || this._paused || this._idle || (this._startTime = a, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), b.applyDirtiedAnimation(this));
        },

        get playbackRate() {
          return this._playbackRate;
        },

        set playbackRate(a) {
          if (a != this._playbackRate) {
            var c = this.currentTime;
            this._playbackRate = a, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this)), null != c && (this.currentTime = c);
          }
        },

        get _isFinished() {
          return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0);
        },

        get _totalDuration() {
          return this._effect._totalDuration;
        },

        get playState() {
          return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running";
        },

        _rewind: function () {
          if (this._playbackRate >= 0) this._currentTime = 0;else {
            if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
            this._currentTime = this._totalDuration;
          }
        },
        play: function () {
          this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this);
        },
        pause: function () {
          this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0;
        },
        finish: function () {
          this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, b.applyDirtiedAnimation(this));
        },
        cancel: function () {
          this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), b.applyDirtiedAnimation(this));
        },
        reverse: function () {
          this.playbackRate *= -1, this.play();
        },
        addEventListener: function (a, b) {
          "function" == typeof b && "finish" == a && this._finishHandlers.push(b);
        },
        removeEventListener: function (a, b) {
          if ("finish" == a) {
            var c = this._finishHandlers.indexOf(b);

            c >= 0 && this._finishHandlers.splice(c, 1);
          }
        },
        _fireEvents: function (a) {
          if (this._isFinished) {
            if (!this._finishedFlag) {
              var b = new d(this, this._currentTime, a),
                  c = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);

              setTimeout(function () {
                c.forEach(function (a) {
                  a.call(b.target, b);
                });
              }, 0), this._finishedFlag = !0;
            }
          } else this._finishedFlag = !1;
        },
        _tick: function (a, b) {
          this._idle || this._paused || (null == this._startTime ? b && (this.startTime = a - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((a - this._startTime) * this.playbackRate)), b && (this._currentTimePending = !1, this._fireEvents(a));
        },

        get _needsTick() {
          return this.playState in {
            pending: 1,
            running: 1
          } || !this._finishedFlag;
        },

        _targetAnimations: function () {
          var a = this._effect._target;
          return a._activeAnimations || (a._activeAnimations = []), a._activeAnimations;
        },
        _markTarget: function () {
          var a = this._targetAnimations();

          -1 === a.indexOf(this) && a.push(this);
        },
        _unmarkTarget: function () {
          var a = this._targetAnimations(),
              b = a.indexOf(this);

          -1 !== b && a.splice(b, 1);
        }
      };
    }(a, b), function (a, b, c) {
      function d(a) {
        var b = j;
        j = [], a < q.currentTime && (a = q.currentTime), q._animations.sort(e), q._animations = h(a, !0, q._animations)[0], b.forEach(function (b) {
          b[1](a);
        }), g(), l = void 0;
      }

      function e(a, b) {
        return a._sequenceNumber - b._sequenceNumber;
      }

      function f() {
        this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0;
      }

      function g() {
        o.forEach(function (a) {
          a();
        }), o.length = 0;
      }

      function h(a, c, d) {
        p = !0, n = !1, b.timeline.currentTime = a, m = !1;
        var e = [],
            f = [],
            g = [],
            h = [];
        return d.forEach(function (b) {
          b._tick(a, c), b._inEffect ? (f.push(b._effect), b._markTarget()) : (e.push(b._effect), b._unmarkTarget()), b._needsTick && (m = !0);
          var d = b._inEffect || b._needsTick;
          b._inTimeline = d, d ? g.push(b) : h.push(b);
        }), o.push.apply(o, e), o.push.apply(o, f), m && requestAnimationFrame(function () {}), p = !1, [g, h];
      }

      var i = window.requestAnimationFrame,
          j = [],
          k = 0;
      window.requestAnimationFrame = function (a) {
        var b = k++;
        return 0 == j.length && i(d), j.push([b, a]), b;
      }, window.cancelAnimationFrame = function (a) {
        j.forEach(function (b) {
          b[0] == a && (b[1] = function () {});
        });
      }, f.prototype = {
        _play: function (c) {
          c._timing = a.normalizeTimingInput(c.timing);
          var d = new b.Animation(c);
          return d._idle = !1, d._timeline = this, this._animations.push(d), b.restart(), b.applyDirtiedAnimation(d), d;
        }
      };
      var l = void 0,
          m = !1,
          n = !1;
      b.restart = function () {
        return m || (m = !0, requestAnimationFrame(function () {}), n = !0), n;
      }, b.applyDirtiedAnimation = function (a) {
        if (!p) {
          a._markTarget();

          var c = a._targetAnimations();

          c.sort(e), h(b.timeline.currentTime, !1, c.slice())[1].forEach(function (a) {
            var b = q._animations.indexOf(a);

            -1 !== b && q._animations.splice(b, 1);
          }), g();
        }
      };
      var o = [],
          p = !1,
          q = new f();
      b.timeline = q;
    }(a, b), function (a) {
      function b(a, b) {
        var c = a.exec(b);
        if (c) return c = a.ignoreCase ? c[0].toLowerCase() : c[0], [c, b.substr(c.length)];
      }

      function c(a, b) {
        b = b.replace(/^\s*/, "");
        var c = a(b);
        if (c) return [c[0], c[1].replace(/^\s*/, "")];
      }

      function d(a, d, e) {
        a = c.bind(null, a);

        for (var f = [];;) {
          var g = a(e);
          if (!g) return [f, e];
          if (f.push(g[0]), e = g[1], !(g = b(d, e)) || "" == g[1]) return [f, e];
          e = g[1];
        }
      }

      function e(a, b) {
        for (var c = 0, d = 0; d < b.length && (!/\s|,/.test(b[d]) || 0 != c); d++) if ("(" == b[d]) c++;else if (")" == b[d] && (c--, 0 == c && d++, c <= 0)) break;

        var e = a(b.substr(0, d));
        return void 0 == e ? void 0 : [e, b.substr(d)];
      }

      function f(a, b) {
        for (var c = a, d = b; c && d;) c > d ? c %= d : d %= c;

        return c = a * b / (c + d);
      }

      function g(a) {
        return function (b) {
          var c = a(b);
          return c && (c[0] = void 0), c;
        };
      }

      function h(a, b) {
        return function (c) {
          return a(c) || [b, c];
        };
      }

      function i(b, c) {
        for (var d = [], e = 0; e < b.length; e++) {
          var f = a.consumeTrimmed(b[e], c);
          if (!f || "" == f[0]) return;
          void 0 !== f[0] && d.push(f[0]), c = f[1];
        }

        if ("" == c) return d;
      }

      function j(a, b, c, d, e) {
        for (var g = [], h = [], i = [], j = f(d.length, e.length), k = 0; k < j; k++) {
          var l = b(d[k % d.length], e[k % e.length]);
          if (!l) return;
          g.push(l[0]), h.push(l[1]), i.push(l[2]);
        }

        return [g, h, function (b) {
          var d = b.map(function (a, b) {
            return i[b](a);
          }).join(c);
          return a ? a(d) : d;
        }];
      }

      function k(a, b, c) {
        for (var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++) if ("function" == typeof c[h]) {
          var i = c[h](a[g], b[g++]);
          d.push(i[0]), e.push(i[1]), f.push(i[2]);
        } else !function (a) {
          d.push(!1), e.push(!1), f.push(function () {
            return c[a];
          });
        }(h);

        return [d, e, function (a) {
          for (var b = "", c = 0; c < a.length; c++) b += f[c](a[c]);

          return b;
        }];
      }

      a.consumeToken = b, a.consumeTrimmed = c, a.consumeRepeated = d, a.consumeParenthesised = e, a.ignore = g, a.optional = h, a.consumeList = i, a.mergeNestedRepeated = j.bind(null, null), a.mergeWrappedNestedRepeated = j, a.mergeList = k;
    }(b), function (a) {
      function b(b) {
        function c(b) {
          var c = a.consumeToken(/^inset/i, b);
          return c ? (d.inset = !0, c) : (c = a.consumeLengthOrPercent(b)) ? (d.lengths.push(c[0]), c) : (c = a.consumeColor(b), c ? (d.color = c[0], c) : void 0);
        }

        var d = {
          inset: !1,
          lengths: [],
          color: null
        },
            e = a.consumeRepeated(c, /^/, b);
        if (e && e[0].length) return [d, e[1]];
      }

      function c(c) {
        var d = a.consumeRepeated(b, /^,/, c);
        if (d && "" == d[1]) return d[0];
      }

      function d(b, c) {
        for (; b.lengths.length < Math.max(b.lengths.length, c.lengths.length);) b.lengths.push({
          px: 0
        });

        for (; c.lengths.length < Math.max(b.lengths.length, c.lengths.length);) c.lengths.push({
          px: 0
        });

        if (b.inset == c.inset && !!b.color == !!c.color) {
          for (var d, e = [], f = [[], 0], g = [[], 0], h = 0; h < b.lengths.length; h++) {
            var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);
            f[0].push(i[0]), g[0].push(i[1]), e.push(i[2]);
          }

          if (b.color && c.color) {
            var j = a.mergeColors(b.color, c.color);
            f[1] = j[0], g[1] = j[1], d = j[2];
          }

          return [f, g, function (a) {
            for (var c = b.inset ? "inset " : " ", f = 0; f < e.length; f++) c += e[f](a[0][f]) + " ";

            return d && (c += d(a[1])), c;
          }];
        }
      }

      function e(b, c, d, e) {
        function f(a) {
          return {
            inset: a,
            color: [0, 0, 0, 0],
            lengths: [{
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }]
          };
        }

        for (var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
          var j = d[i] || f(e[i].inset),
              k = e[i] || f(d[i].inset);
          g.push(j), h.push(k);
        }

        return a.mergeNestedRepeated(b, c, g, h);
      }

      var f = e.bind(null, d, ", ");
      a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"]);
    }(b), function (a, b) {
      function c(a) {
        return a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
      }

      function d(a, b, c) {
        return Math.min(b, Math.max(a, c));
      }

      function e(a) {
        if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)) return Number(a);
      }

      function f(a, b) {
        return [a, b, c];
      }

      function g(a, b) {
        if (0 != a) return i(0, 1 / 0)(a, b);
      }

      function h(a, b) {
        return [a, b, function (a) {
          return Math.round(d(1, 1 / 0, a));
        }];
      }

      function i(a, b) {
        return function (e, f) {
          return [e, f, function (e) {
            return c(d(a, b, e));
          }];
        };
      }

      function j(a) {
        var b = a.trim().split(/\s*[\s,]\s*/);

        if (0 !== b.length) {
          for (var c = [], d = 0; d < b.length; d++) {
            var f = e(b[d]);
            if (void 0 === f) return;
            c.push(f);
          }

          return c;
        }
      }

      function k(a, b) {
        if (a.length == b.length) return [a, b, function (a) {
          return a.map(c).join(" ");
        }];
      }

      function l(a, b) {
        return [a, b, Math.round];
      }

      a.clamp = d, a.addPropertiesHandler(j, k, ["stroke-dasharray"]), a.addPropertiesHandler(e, i(0, 1 / 0), ["border-image-width", "line-height"]), a.addPropertiesHandler(e, i(0, 1), ["opacity", "shape-image-threshold"]), a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]), a.addPropertiesHandler(e, h, ["orphans", "widows"]), a.addPropertiesHandler(e, l, ["z-index"]), a.parseNumber = e, a.parseNumberList = j, a.mergeNumbers = f, a.numberToString = c;
    }(b), function (a, b) {
      function c(a, b) {
        if ("visible" == a || "visible" == b) return [0, 1, function (c) {
          return c <= 0 ? a : c >= 1 ? b : "visible";
        }];
      }

      a.addPropertiesHandler(String, c, ["visibility"]);
    }(b), function (a, b) {
      function c(a) {
        a = a.trim(), f.fillStyle = "#000", f.fillStyle = a;
        var b = f.fillStyle;

        if (f.fillStyle = "#fff", f.fillStyle = a, b == f.fillStyle) {
          f.fillRect(0, 0, 1, 1);
          var c = f.getImageData(0, 0, 1, 1).data;
          f.clearRect(0, 0, 1, 1);
          var d = c[3] / 255;
          return [c[0] * d, c[1] * d, c[2] * d, d];
        }
      }

      function d(b, c) {
        return [b, c, function (b) {
          function c(a) {
            return Math.max(0, Math.min(255, a));
          }

          if (b[3]) for (var d = 0; d < 3; d++) b[d] = Math.round(c(b[d] / b[3]));
          return b[3] = a.numberToString(a.clamp(0, 1, b[3])), "rgba(" + b.join(",") + ")";
        }];
      }

      var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      e.width = e.height = 1;
      var f = e.getContext("2d");
      a.addPropertiesHandler(c, d, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), a.consumeColor = a.consumeParenthesised.bind(null, c), a.mergeColors = d;
    }(b), function (a, b) {
      function c(a) {
        function b() {
          var b = h.exec(a);
          g = b ? b[0] : void 0;
        }

        function c() {
          var a = Number(g);
          return b(), a;
        }

        function d() {
          if ("(" !== g) return c();
          b();
          var a = f();
          return ")" !== g ? NaN : (b(), a);
        }

        function e() {
          for (var a = d(); "*" === g || "/" === g;) {
            var c = g;
            b();
            var e = d();
            "*" === c ? a *= e : a /= e;
          }

          return a;
        }

        function f() {
          for (var a = e(); "+" === g || "-" === g;) {
            var c = g;
            b();
            var d = e();
            "+" === c ? a += d : a -= d;
          }

          return a;
        }

        var g,
            h = /([\+\-\w\.]+|[\(\)\*\/])/g;
        return b(), f();
      }

      function d(a, b) {
        if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0) return {
          px: 0
        };

        if (/^[^(]*$|^calc/.test(b)) {
          b = b.replace(/calc\(/g, "(");
          var d = {};
          b = b.replace(a, function (a) {
            return d[a] = null, "U" + a;
          });

          for (var e = "U(" + a.source + ")", f = b.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + e, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), g = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], h = 0; h < g.length;) g[h].test(f) ? (f = f.replace(g[h], "$1"), h = 0) : h++;

          if ("D" == f) {
            for (var i in d) {
              var j = c(b.replace(new RegExp("U" + i, "g"), "").replace(new RegExp(e, "g"), "*0"));
              if (!isFinite(j)) return;
              d[i] = j;
            }

            return d;
          }
        }
      }

      function e(a, b) {
        return f(a, b, !0);
      }

      function f(b, c, d) {
        var e,
            f = [];

        for (e in b) f.push(e);

        for (e in c) f.indexOf(e) < 0 && f.push(e);

        return b = f.map(function (a) {
          return b[a] || 0;
        }), c = f.map(function (a) {
          return c[a] || 0;
        }), [b, c, function (b) {
          var c = b.map(function (c, e) {
            return 1 == b.length && d && (c = Math.max(c, 0)), a.numberToString(c) + f[e];
          }).join(" + ");
          return b.length > 1 ? "calc(" + c + ")" : c;
        }];
      }

      var g = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
          h = d.bind(null, new RegExp(g, "g")),
          i = d.bind(null, new RegExp(g + "|%", "g")),
          j = d.bind(null, /deg|rad|grad|turn/g);
      a.parseLength = h, a.parseLengthOrPercent = i, a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, i), a.parseAngle = j, a.mergeDimensions = f;
      var k = a.consumeParenthesised.bind(null, h),
          l = a.consumeRepeated.bind(void 0, k, /^/),
          m = a.consumeRepeated.bind(void 0, l, /^,/);
      a.consumeSizePairList = m;

      var n = function (a) {
        var b = m(a);
        if (b && "" == b[1]) return b[0];
      },
          o = a.mergeNestedRepeated.bind(void 0, e, " "),
          p = a.mergeNestedRepeated.bind(void 0, o, ",");

      a.mergeNonNegativeSizePair = o, a.addPropertiesHandler(n, p, ["background-size"]), a.addPropertiesHandler(i, e, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), a.addPropertiesHandler(i, f, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"]);
    }(b), function (a, b) {
      function c(b) {
        return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b);
      }

      function d(b) {
        var d = a.consumeList([a.ignore(a.consumeToken.bind(null, /^rect/)), a.ignore(a.consumeToken.bind(null, /^\(/)), a.consumeRepeated.bind(null, c, /^,/), a.ignore(a.consumeToken.bind(null, /^\)/))], b);
        if (d && 4 == d[0].length) return d[0];
      }

      function e(b, c) {
        return "auto" == b || "auto" == c ? [!0, !1, function (d) {
          var e = d ? b : c;
          if ("auto" == e) return "auto";
          var f = a.mergeDimensions(e, e);
          return f[2](f[0]);
        }] : a.mergeDimensions(b, c);
      }

      function f(a) {
        return "rect(" + a + ")";
      }

      var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");
      a.parseBox = d, a.mergeBoxes = g, a.addPropertiesHandler(d, g, ["clip"]);
    }(b), function (a, b) {
      function c(a) {
        return function (b) {
          var c = 0;
          return a.map(function (a) {
            return a === k ? b[c++] : a;
          });
        };
      }

      function d(a) {
        return a;
      }

      function e(b) {
        if ("none" == (b = b.toLowerCase().trim())) return [];

        for (var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0; c = d.exec(b);) {
          if (c.index != f) return;
          f = c.index + c[0].length;
          var g = c[1],
              h = n[g];
          if (!h) return;
          var i = c[2].split(","),
              j = h[0];
          if (j.length < i.length) return;

          for (var k = [], o = 0; o < j.length; o++) {
            var p,
                q = i[o],
                r = j[o];
            if (void 0 === (p = q ? {
              A: function (b) {
                return "0" == b.trim() ? m : a.parseAngle(b);
              },
              N: a.parseNumber,
              T: a.parseLengthOrPercent,
              L: a.parseLength
            }[r.toUpperCase()](q) : {
              a: m,
              n: k[0],
              t: l
            }[r])) return;
            k.push(p);
          }

          if (e.push({
            t: g,
            d: k
          }), d.lastIndex == b.length) return e;
        }
      }

      function f(a) {
        return a.toFixed(6).replace(".000000", "");
      }

      function g(b, c) {
        if (b.decompositionPair !== c) {
          b.decompositionPair = c;
          var d = a.makeMatrixDecomposition(b);
        }

        if (c.decompositionPair !== b) {
          c.decompositionPair = b;
          var e = a.makeMatrixDecomposition(c);
        }

        return null == d[0] || null == e[0] ? [[!1], [!0], function (a) {
          return a ? c[0].d : b[0].d;
        }] : (d[0].push(0), e[0].push(1), [d, e, function (b) {
          var c = a.quat(d[0][3], e[0][3], b[5]);
          return a.composeMatrix(b[0], b[1], b[2], c, b[4]).map(f).join(",");
        }]);
      }

      function h(a) {
        return a.replace(/[xy]/, "");
      }

      function i(a) {
        return a.replace(/(x|y|z|3d)?$/, "3d");
      }

      function j(b, c) {
        var d = a.makeMatrixDecomposition && !0,
            e = !1;

        if (!b.length || !c.length) {
          b.length || (e = !0, b = c, c = []);

          for (var f = 0; f < b.length; f++) {
            var j = b[f].t,
                k = b[f].d,
                l = "scale" == j.substr(0, 5) ? 1 : 0;
            c.push({
              t: j,
              d: k.map(function (a) {
                if ("number" == typeof a) return l;
                var b = {};

                for (var c in a) b[c] = l;

                return b;
              })
            });
          }
        }

        var m = function (a, b) {
          return "perspective" == a && "perspective" == b || ("matrix" == a || "matrix3d" == a) && ("matrix" == b || "matrix3d" == b);
        },
            o = [],
            p = [],
            q = [];

        if (b.length != c.length) {
          if (!d) return;
          var r = g(b, c);
          o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
        } else for (var f = 0; f < b.length; f++) {
          var j,
              s = b[f].t,
              t = c[f].t,
              u = b[f].d,
              v = c[f].d,
              w = n[s],
              x = n[t];

          if (m(s, t)) {
            if (!d) return;
            var r = g([b[f]], [c[f]]);
            o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]]);
          } else {
            if (s == t) j = s;else if (w[2] && x[2] && h(s) == h(t)) j = h(s), u = w[2](u), v = x[2](v);else {
              if (!w[1] || !x[1] || i(s) != i(t)) {
                if (!d) return;
                var r = g(b, c);
                o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
                break;
              }

              j = i(s), u = w[1](u), v = x[1](v);
            }

            for (var y = [], z = [], A = [], B = 0; B < u.length; B++) {
              var C = "number" == typeof u[B] ? a.mergeNumbers : a.mergeDimensions,
                  r = C(u[B], v[B]);
              y[B] = r[0], z[B] = r[1], A.push(r[2]);
            }

            o.push(y), p.push(z), q.push([j, A]);
          }
        }

        if (e) {
          var D = o;
          o = p, p = D;
        }

        return [o, p, function (a) {
          return a.map(function (a, b) {
            var c = a.map(function (a, c) {
              return q[b][1][c](a);
            }).join(",");
            return "matrix" == q[b][0] && 16 == c.split(",").length && (q[b][0] = "matrix3d"), q[b][0] + "(" + c + ")";
          }).join(" ");
        }];
      }

      var k = null,
          l = {
        px: 0
      },
          m = {
        deg: 0
      },
          n = {
        matrix: ["NNNNNN", [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1], d],
        matrix3d: ["NNNNNNNNNNNNNNNN", d],
        rotate: ["A"],
        rotatex: ["A"],
        rotatey: ["A"],
        rotatez: ["A"],
        rotate3d: ["NNNA"],
        perspective: ["L"],
        scale: ["Nn", c([k, k, 1]), d],
        scalex: ["N", c([k, 1, 1]), c([k, 1])],
        scaley: ["N", c([1, k, 1]), c([1, k])],
        scalez: ["N", c([1, 1, k])],
        scale3d: ["NNN", d],
        skew: ["Aa", null, d],
        skewx: ["A", null, c([k, m])],
        skewy: ["A", null, c([m, k])],
        translate: ["Tt", c([k, k, l]), d],
        translatex: ["T", c([k, l, l]), c([k, l])],
        translatey: ["T", c([l, k, l]), c([l, k])],
        translatez: ["L", c([l, l, k])],
        translate3d: ["TTL", d]
      };
      a.addPropertiesHandler(e, j, ["transform"]), a.transformToSvgMatrix = function (b) {
        var c = a.transformListToMatrix(e(b));
        return "matrix(" + f(c[0]) + " " + f(c[1]) + " " + f(c[4]) + " " + f(c[5]) + " " + f(c[12]) + " " + f(c[13]) + ")";
      };
    }(b), function (a, b) {
      function c(a, b) {
        b.concat([a]).forEach(function (b) {
          b in document.documentElement.style && (d[a] = b), e[b] = a;
        });
      }

      var d = {},
          e = {};
      c("transform", ["webkitTransform", "msTransform"]), c("transformOrigin", ["webkitTransformOrigin"]), c("perspective", ["webkitPerspective"]), c("perspectiveOrigin", ["webkitPerspectiveOrigin"]), a.propertyName = function (a) {
        return d[a] || a;
      }, a.unprefixedPropertyName = function (a) {
        return e[a] || a;
      };
    }(b);
  }(), function () {
    if (void 0 === document.createElement("div").animate([]).oncancel) {
      var a;
      if (window.performance && performance.now) var a = function () {
        return performance.now();
      };else var a = function () {
        return Date.now();
      };

      var b = function (a, b, c) {
        this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
      },
          c = window.Element.prototype.animate;

      window.Element.prototype.animate = function (d, e) {
        var f = c.call(this, d, e);
        f._cancelHandlers = [], f.oncancel = null;
        var g = f.cancel;

        f.cancel = function () {
          g.call(this);

          var c = new b(this, null, a()),
              d = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);

          setTimeout(function () {
            d.forEach(function (a) {
              a.call(c.target, c);
            });
          }, 0);
        };

        var h = f.addEventListener;

        f.addEventListener = function (a, b) {
          "function" == typeof b && "cancel" == a ? this._cancelHandlers.push(b) : h.call(this, a, b);
        };

        var i = f.removeEventListener;
        return f.removeEventListener = function (a, b) {
          if ("cancel" == a) {
            var c = this._cancelHandlers.indexOf(b);

            c >= 0 && this._cancelHandlers.splice(c, 1);
          } else i.call(this, a, b);
        }, f;
      };
    }
  }(), function (a) {
    var b = document.documentElement,
        c = null,
        d = !1;

    try {
      var e = getComputedStyle(b).getPropertyValue("opacity"),
          f = "0" == e ? "1" : "0";
      c = b.animate({
        opacity: [f, f]
      }, {
        duration: 1
      }), c.currentTime = 0, d = getComputedStyle(b).getPropertyValue("opacity") == f;
    } catch (a) {} finally {
      c && c.cancel();
    }

    if (!d) {
      var g = window.Element.prototype.animate;

      window.Element.prototype.animate = function (b, c) {
        return window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)), g.call(this, b, c);
      };
    }
  }(a), function (a, b, c) {
    function d(a) {
      var c = b.timeline;
      c.currentTime = a, c._discardAnimations(), 0 == c._animations.length ? f = !1 : requestAnimationFrame(d);
    }

    var e = window.requestAnimationFrame;
    window.requestAnimationFrame = function (a) {
      return e(function (c) {
        b.timeline._updateAnimationsPromises(), a(c), b.timeline._updateAnimationsPromises();
      });
    }, b.AnimationTimeline = function () {
      this._animations = [], this.currentTime = void 0;
    }, b.AnimationTimeline.prototype = {
      getAnimations: function () {
        return this._discardAnimations(), this._animations.slice();
      },
      _updateAnimationsPromises: function () {
        b.animationsWithPromises = b.animationsWithPromises.filter(function (a) {
          return a._updatePromises();
        });
      },
      _discardAnimations: function () {
        this._updateAnimationsPromises(), this._animations = this._animations.filter(function (a) {
          return "finished" != a.playState && "idle" != a.playState;
        });
      },
      _play: function (a) {
        var c = new b.Animation(a, this);
        return this._animations.push(c), b.restartWebAnimationsNextTick(), c._updatePromises(), c._animation.play(), c._updatePromises(), c;
      },
      play: function (a) {
        return a && a.remove(), this._play(a);
      }
    };
    var f = !1;

    b.restartWebAnimationsNextTick = function () {
      f || (f = !0, requestAnimationFrame(d));
    };

    var g = new b.AnimationTimeline();
    b.timeline = g;

    try {
      Object.defineProperty(window.document, "timeline", {
        configurable: !0,
        get: function () {
          return g;
        }
      });
    } catch (a) {}

    try {
      window.document.timeline = g;
    } catch (a) {}
  }(0, c), function (a, b, c) {
    b.animationsWithPromises = [], b.Animation = function (b, c) {
      if (this.id = "", b && b._id && (this.id = b._id), this.effect = b, b && (b._animation = this), !c) throw new Error("Animation with null timeline is not supported");
      this._timeline = c, this._sequenceNumber = a.sequenceNumber++, this._holdTime = 0, this._paused = !1, this._isGroup = !1, this._animation = null, this._childAnimations = [], this._callback = null, this._oldPlayState = "idle", this._rebuildUnderlyingAnimation(), this._animation.cancel(), this._updatePromises();
    }, b.Animation.prototype = {
      _updatePromises: function () {
        var a = this._oldPlayState,
            b = this.playState;
        return this._readyPromise && b !== a && ("idle" == b ? (this._rejectReadyPromise(), this._readyPromise = void 0) : "pending" == a ? this._resolveReadyPromise() : "pending" == b && (this._readyPromise = void 0)), this._finishedPromise && b !== a && ("idle" == b ? (this._rejectFinishedPromise(), this._finishedPromise = void 0) : "finished" == b ? this._resolveFinishedPromise() : "finished" == a && (this._finishedPromise = void 0)), this._oldPlayState = this.playState, this._readyPromise || this._finishedPromise;
      },
      _rebuildUnderlyingAnimation: function () {
        this._updatePromises();

        var a,
            c,
            d,
            e,
            f = !!this._animation;
        f && (a = this.playbackRate, c = this._paused, d = this.startTime, e = this.currentTime, this._animation.cancel(), this._animation._wrapper = null, this._animation = null), (!this.effect || this.effect instanceof window.KeyframeEffect) && (this._animation = b.newUnderlyingAnimationForKeyframeEffect(this.effect), b.bindAnimationForKeyframeEffect(this)), (this.effect instanceof window.SequenceEffect || this.effect instanceof window.GroupEffect) && (this._animation = b.newUnderlyingAnimationForGroup(this.effect), b.bindAnimationForGroup(this)), this.effect && this.effect._onsample && b.bindAnimationForCustomEffect(this), f && (1 != a && (this.playbackRate = a), null !== d ? this.startTime = d : null !== e ? this.currentTime = e : null !== this._holdTime && (this.currentTime = this._holdTime), c && this.pause()), this._updatePromises();
      },
      _updateChildren: function () {
        if (this.effect && "idle" != this.playState) {
          var a = this.effect._timing.delay;

          this._childAnimations.forEach(function (c) {
            this._arrangeChildren(c, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c.effect));
          }.bind(this));
        }
      },
      _setExternalAnimation: function (a) {
        if (this.effect && this._isGroup) for (var b = 0; b < this.effect.children.length; b++) this.effect.children[b]._animation = a, this._childAnimations[b]._setExternalAnimation(a);
      },
      _constructChildAnimations: function () {
        if (this.effect && this._isGroup) {
          var a = this.effect._timing.delay;
          this._removeChildAnimations(), this.effect.children.forEach(function (c) {
            var d = b.timeline._play(c);

            this._childAnimations.push(d), d.playbackRate = this.playbackRate, this._paused && d.pause(), c._animation = this.effect._animation, this._arrangeChildren(d, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c));
          }.bind(this));
        }
      },
      _arrangeChildren: function (a, b) {
        null === this.startTime ? a.currentTime = this.currentTime - b / this.playbackRate : a.startTime !== this.startTime + b / this.playbackRate && (a.startTime = this.startTime + b / this.playbackRate);
      },

      get timeline() {
        return this._timeline;
      },

      get playState() {
        return this._animation ? this._animation.playState : "idle";
      },

      get finished() {
        return window.Promise ? (this._finishedPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._finishedPromise = new Promise(function (a, b) {
          this._resolveFinishedPromise = function () {
            a(this);
          }, this._rejectFinishedPromise = function () {
            b({
              type: DOMException.ABORT_ERR,
              name: "AbortError"
            });
          };
        }.bind(this)), "finished" == this.playState && this._resolveFinishedPromise()), this._finishedPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
      },

      get ready() {
        return window.Promise ? (this._readyPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._readyPromise = new Promise(function (a, b) {
          this._resolveReadyPromise = function () {
            a(this);
          }, this._rejectReadyPromise = function () {
            b({
              type: DOMException.ABORT_ERR,
              name: "AbortError"
            });
          };
        }.bind(this)), "pending" !== this.playState && this._resolveReadyPromise()), this._readyPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
      },

      get onfinish() {
        return this._animation.onfinish;
      },

      set onfinish(a) {
        this._animation.onfinish = "function" == typeof a ? function (b) {
          b.target = this, a.call(this, b);
        }.bind(this) : a;
      },

      get oncancel() {
        return this._animation.oncancel;
      },

      set oncancel(a) {
        this._animation.oncancel = "function" == typeof a ? function (b) {
          b.target = this, a.call(this, b);
        }.bind(this) : a;
      },

      get currentTime() {
        this._updatePromises();

        var a = this._animation.currentTime;
        return this._updatePromises(), a;
      },

      set currentTime(a) {
        this._updatePromises(), this._animation.currentTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
          b.currentTime = a - c;
        }), this._updatePromises();
      },

      get startTime() {
        return this._animation.startTime;
      },

      set startTime(a) {
        this._updatePromises(), this._animation.startTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
          b.startTime = a + c;
        }), this._updatePromises();
      },

      get playbackRate() {
        return this._animation.playbackRate;
      },

      set playbackRate(a) {
        this._updatePromises();

        var b = this.currentTime;
        this._animation.playbackRate = a, this._forEachChild(function (b) {
          b.playbackRate = a;
        }), null !== b && (this.currentTime = b), this._updatePromises();
      },

      play: function () {
        this._updatePromises(), this._paused = !1, this._animation.play(), -1 == this._timeline._animations.indexOf(this) && this._timeline._animations.push(this), this._register(), b.awaitStartTime(this), this._forEachChild(function (a) {
          var b = a.currentTime;
          a.play(), a.currentTime = b;
        }), this._updatePromises();
      },
      pause: function () {
        this._updatePromises(), this.currentTime && (this._holdTime = this.currentTime), this._animation.pause(), this._register(), this._forEachChild(function (a) {
          a.pause();
        }), this._paused = !0, this._updatePromises();
      },
      finish: function () {
        this._updatePromises(), this._animation.finish(), this._register(), this._updatePromises();
      },
      cancel: function () {
        this._updatePromises(), this._animation.cancel(), this._register(), this._removeChildAnimations(), this._updatePromises();
      },
      reverse: function () {
        this._updatePromises();

        var a = this.currentTime;
        this._animation.reverse(), this._forEachChild(function (a) {
          a.reverse();
        }), null !== a && (this.currentTime = a), this._updatePromises();
      },
      addEventListener: function (a, b) {
        var c = b;
        "function" == typeof b && (c = function (a) {
          a.target = this, b.call(this, a);
        }.bind(this), b._wrapper = c), this._animation.addEventListener(a, c);
      },
      removeEventListener: function (a, b) {
        this._animation.removeEventListener(a, b && b._wrapper || b);
      },
      _removeChildAnimations: function () {
        for (; this._childAnimations.length;) this._childAnimations.pop().cancel();
      },
      _forEachChild: function (b) {
        var c = 0;

        if (this.effect.children && this._childAnimations.length < this.effect.children.length && this._constructChildAnimations(), this._childAnimations.forEach(function (a) {
          b.call(this, a, c), this.effect instanceof window.SequenceEffect && (c += a.effect.activeDuration);
        }.bind(this)), "pending" != this.playState) {
          var d = this.effect._timing,
              e = this.currentTime;
          null !== e && (e = a.calculateIterationProgress(a.calculateActiveDuration(d), e, d)), (null == e || isNaN(e)) && this._removeChildAnimations();
        }
      }
    }, window.Animation = b.Animation;
  }(a, c), function (a, b, c) {
    function d(b) {
      this._frames = a.normalizeKeyframes(b);
    }

    function e() {
      for (var a = !1; i.length;) i.shift()._updateChildren(), a = !0;

      return a;
    }

    var f = function (a) {
      if (a._animation = void 0, a instanceof window.SequenceEffect || a instanceof window.GroupEffect) for (var b = 0; b < a.children.length; b++) f(a.children[b]);
    };

    b.removeMulti = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        d._parent ? (-1 == b.indexOf(d._parent) && b.push(d._parent), d._parent.children.splice(d._parent.children.indexOf(d), 1), d._parent = null, f(d)) : d._animation && d._animation.effect == d && (d._animation.cancel(), d._animation.effect = new KeyframeEffect(null, []), d._animation._callback && (d._animation._callback._animation = null), d._animation._rebuildUnderlyingAnimation(), f(d));
      }

      for (c = 0; c < b.length; c++) b[c]._rebuild();
    }, b.KeyframeEffect = function (b, c, e, f) {
      return this.target = b, this._parent = null, e = a.numericTimingToObject(e), this._timingInput = a.cloneTimingInput(e), this._timing = a.normalizeTimingInput(e), this.timing = a.makeTiming(e, !1, this), this.timing._effect = this, "function" == typeof c ? (a.deprecated("Custom KeyframeEffect", "2015-06-22", "Use KeyframeEffect.onsample instead."), this._normalizedKeyframes = c) : this._normalizedKeyframes = new d(c), this._keyframes = c, this.activeDuration = a.calculateActiveDuration(this._timing), this._id = f, this;
    }, b.KeyframeEffect.prototype = {
      getFrames: function () {
        return "function" == typeof this._normalizedKeyframes ? this._normalizedKeyframes : this._normalizedKeyframes._frames;
      },

      set onsample(a) {
        if ("function" == typeof this.getFrames()) throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");
        this._onsample = a, this._animation && this._animation._rebuildUnderlyingAnimation();
      },

      get parent() {
        return this._parent;
      },

      clone: function () {
        if ("function" == typeof this.getFrames()) throw new Error("Cloning custom effects is not supported.");
        var b = new KeyframeEffect(this.target, [], a.cloneTimingInput(this._timingInput), this._id);
        return b._normalizedKeyframes = this._normalizedKeyframes, b._keyframes = this._keyframes, b;
      },
      remove: function () {
        b.removeMulti([this]);
      }
    };
    var g = Element.prototype.animate;

    Element.prototype.animate = function (a, c) {
      var d = "";
      return c && c.id && (d = c.id), b.timeline._play(new b.KeyframeEffect(this, a, c, d));
    };

    var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    b.newUnderlyingAnimationForKeyframeEffect = function (a) {
      if (a) {
        var b = a.target || h,
            c = a._keyframes;
        "function" == typeof c && (c = []);
        var d = a._timingInput;
        d.id = a._id;
      } else var b = h,
          c = [],
          d = 0;

      return g.apply(b, [c, d]);
    }, b.bindAnimationForKeyframeEffect = function (a) {
      a.effect && "function" == typeof a.effect._normalizedKeyframes && b.bindAnimationForCustomEffect(a);
    };
    var i = [];

    b.awaitStartTime = function (a) {
      null === a.startTime && a._isGroup && (0 == i.length && requestAnimationFrame(e), i.push(a));
    };

    var j = window.getComputedStyle;
    Object.defineProperty(window, "getComputedStyle", {
      configurable: !0,
      enumerable: !0,
      value: function () {
        b.timeline._updateAnimationsPromises();

        var a = j.apply(this, arguments);
        return e() && (a = j.apply(this, arguments)), b.timeline._updateAnimationsPromises(), a;
      }
    }), window.KeyframeEffect = b.KeyframeEffect, window.Element.prototype.getAnimations = function () {
      return document.timeline.getAnimations().filter(function (a) {
        return null !== a.effect && a.effect.target == this;
      }.bind(this));
    };
  }(a, c), function (a, b, c) {
    function d(a) {
      a._registered || (a._registered = !0, g.push(a), h || (h = !0, requestAnimationFrame(e)));
    }

    function e(a) {
      var b = g;
      g = [], b.sort(function (a, b) {
        return a._sequenceNumber - b._sequenceNumber;
      }), b = b.filter(function (a) {
        a();
        var b = a._animation ? a._animation.playState : "idle";
        return "running" != b && "pending" != b && (a._registered = !1), a._registered;
      }), g.push.apply(g, b), g.length ? (h = !0, requestAnimationFrame(e)) : h = !1;
    }

    var f = (document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 0);

    b.bindAnimationForCustomEffect = function (b) {
      var c,
          e = b.effect.target,
          g = "function" == typeof b.effect.getFrames();
      c = g ? b.effect.getFrames() : b.effect._onsample;
      var h = b.effect.timing,
          i = null;
      h = a.normalizeTimingInput(h);

      var j = function () {
        var d = j._animation ? j._animation.currentTime : null;
        null !== d && (d = a.calculateIterationProgress(a.calculateActiveDuration(h), d, h), isNaN(d) && (d = null)), d !== i && (g ? c(d, e, b.effect) : c(d, b.effect, b.effect._animation)), i = d;
      };

      j._animation = b, j._registered = !1, j._sequenceNumber = f++, b._callback = j, d(j);
    };

    var g = [],
        h = !1;

    b.Animation.prototype._register = function () {
      this._callback && d(this._callback);
    };
  }(a, c), function (a, b, c) {
    function d(a) {
      return a._timing.delay + a.activeDuration + a._timing.endDelay;
    }

    function e(b, c, d) {
      this._id = d, this._parent = null, this.children = b || [], this._reparent(this.children), c = a.numericTimingToObject(c), this._timingInput = a.cloneTimingInput(c), this._timing = a.normalizeTimingInput(c, !0), this.timing = a.makeTiming(c, !0, this), this.timing._effect = this, "auto" === this._timing.duration && (this._timing.duration = this.activeDuration);
    }

    window.SequenceEffect = function () {
      e.apply(this, arguments);
    }, window.GroupEffect = function () {
      e.apply(this, arguments);
    }, e.prototype = {
      _isAncestor: function (a) {
        for (var b = this; null !== b;) {
          if (b == a) return !0;
          b = b._parent;
        }

        return !1;
      },
      _rebuild: function () {
        for (var a = this; a;) "auto" === a.timing.duration && (a._timing.duration = a.activeDuration), a = a._parent;

        this._animation && this._animation._rebuildUnderlyingAnimation();
      },
      _reparent: function (a) {
        b.removeMulti(a);

        for (var c = 0; c < a.length; c++) a[c]._parent = this;
      },
      _putChild: function (a, b) {
        for (var c = b ? "Cannot append an ancestor or self" : "Cannot prepend an ancestor or self", d = 0; d < a.length; d++) if (this._isAncestor(a[d])) throw {
          type: DOMException.HIERARCHY_REQUEST_ERR,
          name: "HierarchyRequestError",
          message: c
        };

        for (var d = 0; d < a.length; d++) b ? this.children.push(a[d]) : this.children.unshift(a[d]);

        this._reparent(a), this._rebuild();
      },
      append: function () {
        this._putChild(arguments, !0);
      },
      prepend: function () {
        this._putChild(arguments, !1);
      },

      get parent() {
        return this._parent;
      },

      get firstChild() {
        return this.children.length ? this.children[0] : null;
      },

      get lastChild() {
        return this.children.length ? this.children[this.children.length - 1] : null;
      },

      clone: function () {
        for (var b = a.cloneTimingInput(this._timingInput), c = [], d = 0; d < this.children.length; d++) c.push(this.children[d].clone());

        return this instanceof GroupEffect ? new GroupEffect(c, b) : new SequenceEffect(c, b);
      },
      remove: function () {
        b.removeMulti([this]);
      }
    }, window.SequenceEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.SequenceEffect.prototype, "activeDuration", {
      get: function () {
        var a = 0;
        return this.children.forEach(function (b) {
          a += d(b);
        }), Math.max(a, 0);
      }
    }), window.GroupEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
      get: function () {
        var a = 0;
        return this.children.forEach(function (b) {
          a = Math.max(a, d(b));
        }), a;
      }
    }), b.newUnderlyingAnimationForGroup = function (c) {
      var d,
          e = null,
          f = function (b) {
        var c = d._wrapper;
        if (c && "pending" != c.playState && c.effect) return null == b ? void c._removeChildAnimations() : 0 == b && c.playbackRate < 0 && (e || (e = a.normalizeTimingInput(c.effect.timing)), b = a.calculateIterationProgress(a.calculateActiveDuration(e), -1, e), isNaN(b) || null == b) ? (c._forEachChild(function (a) {
          a.currentTime = -1;
        }), void c._removeChildAnimations()) : void 0;
      },
          g = new KeyframeEffect(null, [], c._timing, c._id);

      return g.onsample = f, d = b.timeline._play(g);
    }, b.bindAnimationForGroup = function (a) {
      a._animation._wrapper = a, a._isGroup = !0, b.awaitStartTime(a), a._constructChildAnimations(), a._setExternalAnimation(a);
    }, b.groupChildDuration = d;
  }(a, c);
}();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wb2x5ZmlsbC13ZWItYW5pbWF0aW9ucy1uZXh0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3RpbWluZy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ub3JtYWxpemUta2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy9zcmMvZGVwcmVjYXRpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy93ZWItYW5pbWF0aW9ucy1ib251cy1jYW5jZWwtZXZlbnRzLmpzIiwid2VicGFjazovLy9zcmMvd2ViLWFuaW1hdGlvbnMtYm9udXMtb2JqZWN0LWZvcm0ta2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy9zcmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vL3NyYy93ZWItYW5pbWF0aW9ucy1uZXh0LWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2tleWZyYW1lLWVmZmVjdC1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vc3JjL2VmZmVjdC1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vc3JjL2dyb3VwLWNvbnN0cnVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxNCBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyAgICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyAgICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiFmdW5jdGlvbigpe3ZhciBhPXt9LGI9e30sYz17fTshZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBhKXJldHVybiBhO3ZhciBiPXt9O2Zvcih2YXIgYyBpbiBhKWJbY109YVtjXTtyZXR1cm4gYn1mdW5jdGlvbiBkKCl7dGhpcy5fZGVsYXk9MCx0aGlzLl9lbmREZWxheT0wLHRoaXMuX2ZpbGw9XCJub25lXCIsdGhpcy5faXRlcmF0aW9uU3RhcnQ9MCx0aGlzLl9pdGVyYXRpb25zPTEsdGhpcy5fZHVyYXRpb249MCx0aGlzLl9wbGF5YmFja1JhdGU9MSx0aGlzLl9kaXJlY3Rpb249XCJub3JtYWxcIix0aGlzLl9lYXNpbmc9XCJsaW5lYXJcIix0aGlzLl9lYXNpbmdGdW5jdGlvbj14fWZ1bmN0aW9uIGUoKXtyZXR1cm4gYS5pc0RlcHJlY2F0ZWQoXCJJbnZhbGlkIHRpbWluZyBpbnB1dHNcIixcIjIwMTYtMDMtMDJcIixcIlR5cGVFcnJvciBleGNlcHRpb25zIHdpbGwgYmUgdGhyb3duIGluc3RlYWQuXCIsITApfWZ1bmN0aW9uIGYoYixjLGUpe3ZhciBmPW5ldyBkO3JldHVybiBjJiYoZi5maWxsPVwiYm90aFwiLGYuZHVyYXRpb249XCJhdXRvXCIpLFwibnVtYmVyXCIhPXR5cGVvZiBifHxpc05hTihiKT92b2lkIDAhPT1iJiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe2lmKFwiYXV0b1wiIT1iW2NdKXtpZigoXCJudW1iZXJcIj09dHlwZW9mIGZbY118fFwiZHVyYXRpb25cIj09YykmJihcIm51bWJlclwiIT10eXBlb2YgYltjXXx8aXNOYU4oYltjXSkpKXJldHVybjtpZihcImZpbGxcIj09YyYmLTE9PXYuaW5kZXhPZihiW2NdKSlyZXR1cm47aWYoXCJkaXJlY3Rpb25cIj09YyYmLTE9PXcuaW5kZXhPZihiW2NdKSlyZXR1cm47aWYoXCJwbGF5YmFja1JhdGVcIj09YyYmMSE9PWJbY10mJmEuaXNEZXByZWNhdGVkKFwiQW5pbWF0aW9uRWZmZWN0VGltaW5nLnBsYXliYWNrUmF0ZVwiLFwiMjAxNC0xMS0yOFwiLFwiVXNlIEFuaW1hdGlvbi5wbGF5YmFja1JhdGUgaW5zdGVhZC5cIikpcmV0dXJuO2ZbY109YltjXX19KTpmLmR1cmF0aW9uPWIsZn1mdW5jdGlvbiBnKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYoYT1pc05hTihhKT97ZHVyYXRpb246MH06e2R1cmF0aW9uOmF9KSxhfWZ1bmN0aW9uIGgoYixjKXtyZXR1cm4gYj1hLm51bWVyaWNUaW1pbmdUb09iamVjdChiKSxmKGIsYyl9ZnVuY3Rpb24gaShhLGIsYyxkKXtyZXR1cm4gYTwwfHxhPjF8fGM8MHx8Yz4xP3g6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gZihhLGIsYyl7cmV0dXJuIDMqYSooMS1jKSooMS1jKSpjKzMqYiooMS1jKSpjKmMrYypjKmN9aWYoZTw9MCl7dmFyIGc9MDtyZXR1cm4gYT4wP2c9Yi9hOiFiJiZjPjAmJihnPWQvYyksZyplfWlmKGU+PTEpe3ZhciBoPTA7cmV0dXJuIGM8MT9oPShkLTEpLyhjLTEpOjE9PWMmJmE8MSYmKGg9KGItMSkvKGEtMSkpLDEraCooZS0xKX1mb3IodmFyIGk9MCxqPTE7aTxqOyl7dmFyIGs9KGkraikvMixsPWYoYSxjLGspO2lmKE1hdGguYWJzKGUtbCk8MWUtNSlyZXR1cm4gZihiLGQsayk7bDxlP2k9azpqPWt9cmV0dXJuIGYoYixkLGspfX1mdW5jdGlvbiBqKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKGM+PTEpcmV0dXJuIDE7dmFyIGQ9MS9hO3JldHVybihjKz1iKmQpLWMlZH19ZnVuY3Rpb24gayhhKXtDfHwoQz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlKSxDLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uPVwiXCIsQy5hbmltYXRpb25UaW1pbmdGdW5jdGlvbj1hO3ZhciBiPUMuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb247aWYoXCJcIj09YiYmZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoYStcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZWFzaW5nXCIpO3JldHVybiBifWZ1bmN0aW9uIGwoYSl7aWYoXCJsaW5lYXJcIj09YSlyZXR1cm4geDt2YXIgYj1FLmV4ZWMoYSk7aWYoYilyZXR1cm4gaS5hcHBseSh0aGlzLGIuc2xpY2UoMSkubWFwKE51bWJlcikpO3ZhciBjPUYuZXhlYyhhKTtpZihjKXJldHVybiBqKE51bWJlcihjWzFdKSxBKTt2YXIgZD1HLmV4ZWMoYSk7cmV0dXJuIGQ/aihOdW1iZXIoZFsxXSkse3N0YXJ0OnksbWlkZGxlOnosZW5kOkF9W2RbMl1dKTpCW2FdfHx4fWZ1bmN0aW9uIG0oYSl7cmV0dXJuIE1hdGguYWJzKG4oYSkvYS5wbGF5YmFja1JhdGUpfWZ1bmN0aW9uIG4oYSl7cmV0dXJuIDA9PT1hLmR1cmF0aW9ufHwwPT09YS5pdGVyYXRpb25zPzA6YS5kdXJhdGlvbiphLml0ZXJhdGlvbnN9ZnVuY3Rpb24gbyhhLGIsYyl7aWYobnVsbD09YilyZXR1cm4gSDt2YXIgZD1jLmRlbGF5K2ErYy5lbmREZWxheTtyZXR1cm4gYjxNYXRoLm1pbihjLmRlbGF5LGQpP0k6Yj49TWF0aC5taW4oYy5kZWxheSthLGQpP0o6S31mdW5jdGlvbiBwKGEsYixjLGQsZSl7c3dpdGNoKGQpe2Nhc2UgSTpyZXR1cm5cImJhY2t3YXJkc1wiPT1ifHxcImJvdGhcIj09Yj8wOm51bGw7Y2FzZSBLOnJldHVybiBjLWU7Y2FzZSBKOnJldHVyblwiZm9yd2FyZHNcIj09Ynx8XCJib3RoXCI9PWI/YTpudWxsO2Nhc2UgSDpyZXR1cm4gbnVsbH19ZnVuY3Rpb24gcShhLGIsYyxkLGUpe3ZhciBmPWU7cmV0dXJuIDA9PT1hP2IhPT1JJiYoZis9Yyk6Zis9ZC9hLGZ9ZnVuY3Rpb24gcihhLGIsYyxkLGUsZil7dmFyIGc9YT09PTEvMD9iJTE6YSUxO3JldHVybiAwIT09Z3x8YyE9PUp8fDA9PT1kfHwwPT09ZSYmMCE9PWZ8fChnPTEpLGd9ZnVuY3Rpb24gcyhhLGIsYyxkKXtyZXR1cm4gYT09PUomJmI9PT0xLzA/MS8wOjE9PT1jP01hdGguZmxvb3IoZCktMTpNYXRoLmZsb29yKGQpfWZ1bmN0aW9uIHQoYSxiLGMpe3ZhciBkPWE7aWYoXCJub3JtYWxcIiE9PWEmJlwicmV2ZXJzZVwiIT09YSl7dmFyIGU9YjtcImFsdGVybmF0ZS1yZXZlcnNlXCI9PT1hJiYoZSs9MSksZD1cIm5vcm1hbFwiLGUhPT0xLzAmJmUlMiE9MCYmKGQ9XCJyZXZlcnNlXCIpfXJldHVyblwibm9ybWFsXCI9PT1kP2M6MS1jfWZ1bmN0aW9uIHUoYSxiLGMpe3ZhciBkPW8oYSxiLGMpLGU9cChhLGMuZmlsbCxiLGQsYy5kZWxheSk7aWYobnVsbD09PWUpcmV0dXJuIG51bGw7dmFyIGY9cShjLmR1cmF0aW9uLGQsYy5pdGVyYXRpb25zLGUsYy5pdGVyYXRpb25TdGFydCksZz1yKGYsYy5pdGVyYXRpb25TdGFydCxkLGMuaXRlcmF0aW9ucyxlLGMuZHVyYXRpb24pLGg9cyhkLGMuaXRlcmF0aW9ucyxnLGYpLGk9dChjLmRpcmVjdGlvbixoLGcpO3JldHVybiBjLl9lYXNpbmdGdW5jdGlvbihpKX12YXIgdj1cImJhY2t3YXJkc3xmb3J3YXJkc3xib3RofG5vbmVcIi5zcGxpdChcInxcIiksdz1cInJldmVyc2V8YWx0ZXJuYXRlfGFsdGVybmF0ZS1yZXZlcnNlXCIuc3BsaXQoXCJ8XCIpLHg9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2QucHJvdG90eXBlPXtfc2V0TWVtYmVyOmZ1bmN0aW9uKGIsYyl7dGhpc1tcIl9cIitiXT1jLHRoaXMuX2VmZmVjdCYmKHRoaXMuX2VmZmVjdC5fdGltaW5nSW5wdXRbYl09Yyx0aGlzLl9lZmZlY3QuX3RpbWluZz1hLm5vcm1hbGl6ZVRpbWluZ0lucHV0KHRoaXMuX2VmZmVjdC5fdGltaW5nSW5wdXQpLHRoaXMuX2VmZmVjdC5hY3RpdmVEdXJhdGlvbj1hLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKHRoaXMuX2VmZmVjdC5fdGltaW5nKSx0aGlzLl9lZmZlY3QuX2FuaW1hdGlvbiYmdGhpcy5fZWZmZWN0Ll9hbmltYXRpb24uX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uKCkpfSxnZXQgcGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZX0sc2V0IGRlbGF5KGEpe3RoaXMuX3NldE1lbWJlcihcImRlbGF5XCIsYSl9LGdldCBkZWxheSgpe3JldHVybiB0aGlzLl9kZWxheX0sc2V0IGVuZERlbGF5KGEpe3RoaXMuX3NldE1lbWJlcihcImVuZERlbGF5XCIsYSl9LGdldCBlbmREZWxheSgpe3JldHVybiB0aGlzLl9lbmREZWxheX0sc2V0IGZpbGwoYSl7dGhpcy5fc2V0TWVtYmVyKFwiZmlsbFwiLGEpfSxnZXQgZmlsbCgpe3JldHVybiB0aGlzLl9maWxsfSxzZXQgaXRlcmF0aW9uU3RhcnQoYSl7aWYoKGlzTmFOKGEpfHxhPDApJiZlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIml0ZXJhdGlvblN0YXJ0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLCByZWNlaXZlZDogXCIrYSk7dGhpcy5fc2V0TWVtYmVyKFwiaXRlcmF0aW9uU3RhcnRcIixhKX0sZ2V0IGl0ZXJhdGlvblN0YXJ0KCl7cmV0dXJuIHRoaXMuX2l0ZXJhdGlvblN0YXJ0fSxzZXQgZHVyYXRpb24oYSl7aWYoXCJhdXRvXCIhPWEmJihpc05hTihhKXx8YTwwKSYmZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJkdXJhdGlvbiBtdXN0IGJlIG5vbi1uZWdhdGl2ZSBvciBhdXRvLCByZWNlaXZlZDogXCIrYSk7dGhpcy5fc2V0TWVtYmVyKFwiZHVyYXRpb25cIixhKX0sZ2V0IGR1cmF0aW9uKCl7cmV0dXJuIHRoaXMuX2R1cmF0aW9ufSxzZXQgZGlyZWN0aW9uKGEpe3RoaXMuX3NldE1lbWJlcihcImRpcmVjdGlvblwiLGEpfSxnZXQgZGlyZWN0aW9uKCl7cmV0dXJuIHRoaXMuX2RpcmVjdGlvbn0sc2V0IGVhc2luZyhhKXt0aGlzLl9lYXNpbmdGdW5jdGlvbj1sKGsoYSkpLHRoaXMuX3NldE1lbWJlcihcImVhc2luZ1wiLGEpfSxnZXQgZWFzaW5nKCl7cmV0dXJuIHRoaXMuX2Vhc2luZ30sc2V0IGl0ZXJhdGlvbnMoYSl7aWYoKGlzTmFOKGEpfHxhPDApJiZlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIml0ZXJhdGlvbnMgbXVzdCBiZSBub24tbmVnYXRpdmUsIHJlY2VpdmVkOiBcIithKTt0aGlzLl9zZXRNZW1iZXIoXCJpdGVyYXRpb25zXCIsYSl9LGdldCBpdGVyYXRpb25zKCl7cmV0dXJuIHRoaXMuX2l0ZXJhdGlvbnN9fTt2YXIgeT0xLHo9LjUsQT0wLEI9e2Vhc2U6aSguMjUsLjEsLjI1LDEpLFwiZWFzZS1pblwiOmkoLjQyLDAsMSwxKSxcImVhc2Utb3V0XCI6aSgwLDAsLjU4LDEpLFwiZWFzZS1pbi1vdXRcIjppKC40MiwwLC41OCwxKSxcInN0ZXAtc3RhcnRcIjpqKDEseSksXCJzdGVwLW1pZGRsZVwiOmooMSx6KSxcInN0ZXAtZW5kXCI6aigxLEEpfSxDPW51bGwsRD1cIlxcXFxzKigtP1xcXFxkK1xcXFwuP1xcXFxkKnwtP1xcXFwuXFxcXGQrKVxcXFxzKlwiLEU9bmV3IFJlZ0V4cChcImN1YmljLWJlemllclxcXFwoXCIrRCtcIixcIitEK1wiLFwiK0QrXCIsXCIrRCtcIlxcXFwpXCIpLEY9L3N0ZXBzXFwoXFxzKihcXGQrKVxccypcXCkvLEc9L3N0ZXBzXFwoXFxzKihcXGQrKVxccyosXFxzKihzdGFydHxtaWRkbGV8ZW5kKVxccypcXCkvLEg9MCxJPTEsSj0yLEs9MzthLmNsb25lVGltaW5nSW5wdXQ9YyxhLm1ha2VUaW1pbmc9ZixhLm51bWVyaWNUaW1pbmdUb09iamVjdD1nLGEubm9ybWFsaXplVGltaW5nSW5wdXQ9aCxhLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uPW0sYS5jYWxjdWxhdGVJdGVyYXRpb25Qcm9ncmVzcz11LGEuY2FsY3VsYXRlUGhhc2U9byxhLm5vcm1hbGl6ZUVhc2luZz1rLGEucGFyc2VFYXNpbmdGdW5jdGlvbj1sfShhKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiKXtyZXR1cm4gYSBpbiBrP2tbYV1bYl18fGI6Yn1mdW5jdGlvbiBkKGEpe3JldHVyblwiZGlzcGxheVwiPT09YXx8MD09PWEubGFzdEluZGV4T2YoXCJhbmltYXRpb25cIiwwKXx8MD09PWEubGFzdEluZGV4T2YoXCJ0cmFuc2l0aW9uXCIsMCl9ZnVuY3Rpb24gZShhLGIsZSl7aWYoIWQoYSkpe3ZhciBmPWhbYV07aWYoZil7aS5zdHlsZVthXT1iO2Zvcih2YXIgZyBpbiBmKXt2YXIgaj1mW2ddLGs9aS5zdHlsZVtqXTtlW2pdPWMoaixrKX19ZWxzZSBlW2FdPWMoYSxiKX19ZnVuY3Rpb24gZihhKXt2YXIgYj1bXTtmb3IodmFyIGMgaW4gYSlpZighKGMgaW5bXCJlYXNpbmdcIixcIm9mZnNldFwiLFwiY29tcG9zaXRlXCJdKSl7dmFyIGQ9YVtjXTtBcnJheS5pc0FycmF5KGQpfHwoZD1bZF0pO2Zvcih2YXIgZSxmPWQubGVuZ3RoLGc9MDtnPGY7ZysrKWU9e30sZS5vZmZzZXQ9XCJvZmZzZXRcImluIGE/YS5vZmZzZXQ6MT09Zj8xOmcvKGYtMSksXCJlYXNpbmdcImluIGEmJihlLmVhc2luZz1hLmVhc2luZyksXCJjb21wb3NpdGVcImluIGEmJihlLmNvbXBvc2l0ZT1hLmNvbXBvc2l0ZSksZVtjXT1kW2ddLGIucHVzaChlKX1yZXR1cm4gYi5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEub2Zmc2V0LWIub2Zmc2V0fSksYn1mdW5jdGlvbiBnKGIpe2Z1bmN0aW9uIGMoKXt2YXIgYT1kLmxlbmd0aDtudWxsPT1kW2EtMV0ub2Zmc2V0JiYoZFthLTFdLm9mZnNldD0xKSxhPjEmJm51bGw9PWRbMF0ub2Zmc2V0JiYoZFswXS5vZmZzZXQ9MCk7Zm9yKHZhciBiPTAsYz1kWzBdLm9mZnNldCxlPTE7ZTxhO2UrKyl7dmFyIGY9ZFtlXS5vZmZzZXQ7aWYobnVsbCE9Zil7Zm9yKHZhciBnPTE7ZzxlLWI7ZysrKWRbYitnXS5vZmZzZXQ9YysoZi1jKSpnLyhlLWIpO2I9ZSxjPWZ9fX1pZihudWxsPT1iKXJldHVybltdO3dpbmRvdy5TeW1ib2wmJlN5bWJvbC5pdGVyYXRvciYmQXJyYXkucHJvdG90eXBlLmZyb20mJmJbU3ltYm9sLml0ZXJhdG9yXSYmKGI9QXJyYXkuZnJvbShiKSksQXJyYXkuaXNBcnJheShiKXx8KGI9ZihiKSk7Zm9yKHZhciBkPWIubWFwKGZ1bmN0aW9uKGIpe3ZhciBjPXt9O2Zvcih2YXIgZCBpbiBiKXt2YXIgZj1iW2RdO2lmKFwib2Zmc2V0XCI9PWQpe2lmKG51bGwhPWYpe2lmKGY9TnVtYmVyKGYpLCFpc0Zpbml0ZShmKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiS2V5ZnJhbWUgb2Zmc2V0cyBtdXN0IGJlIG51bWJlcnMuXCIpO2lmKGY8MHx8Zj4xKXRocm93IG5ldyBUeXBlRXJyb3IoXCJLZXlmcmFtZSBvZmZzZXRzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLlwiKX19ZWxzZSBpZihcImNvbXBvc2l0ZVwiPT1kKXtpZihcImFkZFwiPT1mfHxcImFjY3VtdWxhdGVcIj09Zil0aHJvd3t0eXBlOkRPTUV4Y2VwdGlvbi5OT1RfU1VQUE9SVEVEX0VSUixuYW1lOlwiTm90U3VwcG9ydGVkRXJyb3JcIixtZXNzYWdlOlwiYWRkIGNvbXBvc2l0aW5nIGlzIG5vdCBzdXBwb3J0ZWRcIn07aWYoXCJyZXBsYWNlXCIhPWYpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY29tcG9zaXRlIG1vZGUgXCIrZitcIi5cIil9ZWxzZSBmPVwiZWFzaW5nXCI9PWQ/YS5ub3JtYWxpemVFYXNpbmcoZik6XCJcIitmO2UoZCxmLGMpfXJldHVybiB2b2lkIDA9PWMub2Zmc2V0JiYoYy5vZmZzZXQ9bnVsbCksdm9pZCAwPT1jLmVhc2luZyYmKGMuZWFzaW5nPVwibGluZWFyXCIpLGN9KSxnPSEwLGg9LTEvMCxpPTA7aTxkLmxlbmd0aDtpKyspe3ZhciBqPWRbaV0ub2Zmc2V0O2lmKG51bGwhPWope2lmKGo8aCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiS2V5ZnJhbWVzIGFyZSBub3QgbG9vc2VseSBzb3J0ZWQgYnkgb2Zmc2V0LiBTb3J0IG9yIHNwZWNpZnkgb2Zmc2V0cy5cIik7aD1qfWVsc2UgZz0hMX1yZXR1cm4gZD1kLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXQ+PTAmJmEub2Zmc2V0PD0xfSksZ3x8YygpLGR9dmFyIGg9e2JhY2tncm91bmQ6W1wiYmFja2dyb3VuZEltYWdlXCIsXCJiYWNrZ3JvdW5kUG9zaXRpb25cIixcImJhY2tncm91bmRTaXplXCIsXCJiYWNrZ3JvdW5kUmVwZWF0XCIsXCJiYWNrZ3JvdW5kQXR0YWNobWVudFwiLFwiYmFja2dyb3VuZE9yaWdpblwiLFwiYmFja2dyb3VuZENsaXBcIixcImJhY2tncm91bmRDb2xvclwiXSxib3JkZXI6W1wiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclRvcFN0eWxlXCIsXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyUmlnaHRDb2xvclwiLFwiYm9yZGVyUmlnaHRTdHlsZVwiLFwiYm9yZGVyUmlnaHRXaWR0aFwiLFwiYm9yZGVyQm90dG9tQ29sb3JcIixcImJvcmRlckJvdHRvbVN0eWxlXCIsXCJib3JkZXJCb3R0b21XaWR0aFwiLFwiYm9yZGVyTGVmdENvbG9yXCIsXCJib3JkZXJMZWZ0U3R5bGVcIixcImJvcmRlckxlZnRXaWR0aFwiXSxib3JkZXJCb3R0b206W1wiYm9yZGVyQm90dG9tV2lkdGhcIixcImJvcmRlckJvdHRvbVN0eWxlXCIsXCJib3JkZXJCb3R0b21Db2xvclwiXSxib3JkZXJDb2xvcjpbXCJib3JkZXJUb3BDb2xvclwiLFwiYm9yZGVyUmlnaHRDb2xvclwiLFwiYm9yZGVyQm90dG9tQ29sb3JcIixcImJvcmRlckxlZnRDb2xvclwiXSxib3JkZXJMZWZ0OltcImJvcmRlckxlZnRXaWR0aFwiLFwiYm9yZGVyTGVmdFN0eWxlXCIsXCJib3JkZXJMZWZ0Q29sb3JcIl0sYm9yZGVyUmFkaXVzOltcImJvcmRlclRvcExlZnRSYWRpdXNcIixcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiLFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiXSxib3JkZXJSaWdodDpbXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJSaWdodFN0eWxlXCIsXCJib3JkZXJSaWdodENvbG9yXCJdLGJvcmRlclRvcDpbXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyVG9wU3R5bGVcIixcImJvcmRlclRvcENvbG9yXCJdLGJvcmRlcldpZHRoOltcImJvcmRlclRvcFdpZHRoXCIsXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJCb3R0b21XaWR0aFwiLFwiYm9yZGVyTGVmdFdpZHRoXCJdLGZsZXg6W1wiZmxleEdyb3dcIixcImZsZXhTaHJpbmtcIixcImZsZXhCYXNpc1wiXSxmb250OltcImZvbnRGYW1pbHlcIixcImZvbnRTaXplXCIsXCJmb250U3R5bGVcIixcImZvbnRWYXJpYW50XCIsXCJmb250V2VpZ2h0XCIsXCJsaW5lSGVpZ2h0XCJdLG1hcmdpbjpbXCJtYXJnaW5Ub3BcIixcIm1hcmdpblJpZ2h0XCIsXCJtYXJnaW5Cb3R0b21cIixcIm1hcmdpbkxlZnRcIl0sb3V0bGluZTpbXCJvdXRsaW5lQ29sb3JcIixcIm91dGxpbmVTdHlsZVwiLFwib3V0bGluZVdpZHRoXCJdLHBhZGRpbmc6W1wicGFkZGluZ1RvcFwiLFwicGFkZGluZ1JpZ2h0XCIsXCJwYWRkaW5nQm90dG9tXCIsXCJwYWRkaW5nTGVmdFwiXX0saT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXCJkaXZcIiksaj17dGhpbjpcIjFweFwiLG1lZGl1bTpcIjNweFwiLHRoaWNrOlwiNXB4XCJ9LGs9e2JvcmRlckJvdHRvbVdpZHRoOmosYm9yZGVyTGVmdFdpZHRoOmosYm9yZGVyUmlnaHRXaWR0aDpqLGJvcmRlclRvcFdpZHRoOmosZm9udFNpemU6e1wieHgtc21hbGxcIjpcIjYwJVwiLFwieC1zbWFsbFwiOlwiNzUlXCIsc21hbGw6XCI4OSVcIixtZWRpdW06XCIxMDAlXCIsbGFyZ2U6XCIxMjAlXCIsXCJ4LWxhcmdlXCI6XCIxNTAlXCIsXCJ4eC1sYXJnZVwiOlwiMjAwJVwifSxmb250V2VpZ2h0Ontub3JtYWw6XCI0MDBcIixib2xkOlwiNzAwXCJ9LG91dGxpbmVXaWR0aDpqLHRleHRTaGFkb3c6e25vbmU6XCIwcHggMHB4IDBweCB0cmFuc3BhcmVudFwifSxib3hTaGFkb3c6e25vbmU6XCIwcHggMHB4IDBweCAwcHggdHJhbnNwYXJlbnRcIn19O2EuY29udmVydFRvQXJyYXlGb3JtPWYsYS5ub3JtYWxpemVLZXlmcmFtZXM9Z30oYSksZnVuY3Rpb24oYSl7dmFyIGI9e307YS5pc0RlcHJlY2F0ZWQ9ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGY9ZT9cImFyZVwiOlwiaXNcIixnPW5ldyBEYXRlLGg9bmV3IERhdGUoYyk7cmV0dXJuIGguc2V0TW9udGgoaC5nZXRNb250aCgpKzMpLCEoZzxoJiYoYSBpbiBifHxjb25zb2xlLndhcm4oXCJXZWIgQW5pbWF0aW9uczogXCIrYStcIiBcIitmK1wiIGRlcHJlY2F0ZWQgYW5kIHdpbGwgc3RvcCB3b3JraW5nIG9uIFwiK2gudG9EYXRlU3RyaW5nKCkrXCIuIFwiK2QpLGJbYV09ITAsMSkpfSxhLmRlcHJlY2F0ZWQ9ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGY9ZT9cImFyZVwiOlwiaXNcIjtpZihhLmlzRGVwcmVjYXRlZChiLGMsZCxlKSl0aHJvdyBuZXcgRXJyb3IoYitcIiBcIitmK1wiIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFwiK2QpfX0oYSksZnVuY3Rpb24oKXtpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYW5pbWF0ZSl7dmFyIGM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFuaW1hdGUoW10sMCksZD0hMDtpZihjJiYoZD0hMSxcInBsYXl8Y3VycmVudFRpbWV8cGF1c2V8cmV2ZXJzZXxwbGF5YmFja1JhdGV8Y2FuY2VsfGZpbmlzaHxzdGFydFRpbWV8cGxheVN0YXRlXCIuc3BsaXQoXCJ8XCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dm9pZCAwPT09Y1thXSYmKGQ9ITApfSkpLCFkKXJldHVybn0hZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7Zm9yKHZhciBiPXt9LGM9MDtjPGEubGVuZ3RoO2MrKylmb3IodmFyIGQgaW4gYVtjXSlpZihcIm9mZnNldFwiIT1kJiZcImVhc2luZ1wiIT1kJiZcImNvbXBvc2l0ZVwiIT1kKXt2YXIgZT17b2Zmc2V0OmFbY10ub2Zmc2V0LGVhc2luZzphW2NdLmVhc2luZyx2YWx1ZTphW2NdW2RdfTtiW2RdPWJbZF18fFtdLGJbZF0ucHVzaChlKX1mb3IodmFyIGYgaW4gYil7dmFyIGc9YltmXTtpZigwIT1nWzBdLm9mZnNldHx8MSE9Z1tnLmxlbmd0aC0xXS5vZmZzZXQpdGhyb3d7dHlwZTpET01FeGNlcHRpb24uTk9UX1NVUFBPUlRFRF9FUlIsbmFtZTpcIk5vdFN1cHBvcnRlZEVycm9yXCIsbWVzc2FnZTpcIlBhcnRpYWwga2V5ZnJhbWVzIGFyZSBub3Qgc3VwcG9ydGVkXCJ9fXJldHVybiBifWZ1bmN0aW9uIGUoYyl7dmFyIGQ9W107Zm9yKHZhciBlIGluIGMpZm9yKHZhciBmPWNbZV0sZz0wO2c8Zi5sZW5ndGgtMTtnKyspe3ZhciBoPWcsaT1nKzEsaj1mW2hdLm9mZnNldCxrPWZbaV0ub2Zmc2V0LGw9aixtPWs7MD09ZyYmKGw9LTEvMCwwPT1rJiYoaT1oKSksZz09Zi5sZW5ndGgtMiYmKG09MS8wLDE9PWomJihoPWkpKSxkLnB1c2goe2FwcGx5RnJvbTpsLGFwcGx5VG86bSxzdGFydE9mZnNldDpmW2hdLm9mZnNldCxlbmRPZmZzZXQ6ZltpXS5vZmZzZXQsZWFzaW5nRnVuY3Rpb246YS5wYXJzZUVhc2luZ0Z1bmN0aW9uKGZbaF0uZWFzaW5nKSxwcm9wZXJ0eTplLGludGVycG9sYXRpb246Yi5wcm9wZXJ0eUludGVycG9sYXRpb24oZSxmW2hdLnZhbHVlLGZbaV0udmFsdWUpfSl9cmV0dXJuIGQuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLnN0YXJ0T2Zmc2V0LWIuc3RhcnRPZmZzZXR9KSxkfWIuY29udmVydEVmZmVjdElucHV0PWZ1bmN0aW9uKGMpe3ZhciBmPWEubm9ybWFsaXplS2V5ZnJhbWVzKGMpLGc9ZChmKSxoPWUoZyk7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7aWYobnVsbCE9YyloLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYz49YS5hcHBseUZyb20mJmM8YS5hcHBseVRvfSkuZm9yRWFjaChmdW5jdGlvbihkKXt2YXIgZT1jLWQuc3RhcnRPZmZzZXQsZj1kLmVuZE9mZnNldC1kLnN0YXJ0T2Zmc2V0LGc9MD09Zj8wOmQuZWFzaW5nRnVuY3Rpb24oZS9mKTtiLmFwcGx5KGEsZC5wcm9wZXJ0eSxkLmludGVycG9sYXRpb24oZykpfSk7ZWxzZSBmb3IodmFyIGQgaW4gZylcIm9mZnNldFwiIT1kJiZcImVhc2luZ1wiIT1kJiZcImNvbXBvc2l0ZVwiIT1kJiZiLmNsZWFyKGEsZCl9fX0oYSxiKSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtyZXR1cm4gYS5yZXBsYWNlKC8tKC4pL2csZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSl9ZnVuY3Rpb24gZShhLGIsYyl7aFtjXT1oW2NdfHxbXSxoW2NdLnB1c2goW2EsYl0pfWZ1bmN0aW9uIGYoYSxiLGMpe2Zvcih2YXIgZj0wO2Y8Yy5sZW5ndGg7ZisrKXtlKGEsYixkKGNbZl0pKX19ZnVuY3Rpb24gZyhjLGUsZil7dmFyIGc9YzsvLS8udGVzdChjKSYmIWEuaXNEZXByZWNhdGVkKFwiSHlwaGVuYXRlZCBwcm9wZXJ0eSBuYW1lc1wiLFwiMjAxNi0wMy0yMlwiLFwiVXNlIGNhbWVsQ2FzZSBpbnN0ZWFkLlwiLCEwKSYmKGc9ZChjKSksXCJpbml0aWFsXCIhPWUmJlwiaW5pdGlhbFwiIT1mfHwoXCJpbml0aWFsXCI9PWUmJihlPWlbZ10pLFwiaW5pdGlhbFwiPT1mJiYoZj1pW2ddKSk7Zm9yKHZhciBqPWU9PWY/W106aFtnXSxrPTA7aiYmazxqLmxlbmd0aDtrKyspe3ZhciBsPWpba11bMF0oZSksbT1qW2tdWzBdKGYpO2lmKHZvaWQgMCE9PWwmJnZvaWQgMCE9PW0pe3ZhciBuPWpba11bMV0obCxtKTtpZihuKXt2YXIgbz1iLkludGVycG9sYXRpb24uYXBwbHkobnVsbCxuKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIDA9PWE/ZToxPT1hP2Y6byhhKX19fX1yZXR1cm4gYi5JbnRlcnBvbGF0aW9uKCExLCEwLGZ1bmN0aW9uKGEpe3JldHVybiBhP2Y6ZX0pfXZhciBoPXt9O2IuYWRkUHJvcGVydGllc0hhbmRsZXI9Zjt2YXIgaT17YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIixiYWNrZ3JvdW5kUG9zaXRpb246XCIwJSAwJVwiLGJvcmRlckJvdHRvbUNvbG9yOlwiY3VycmVudENvbG9yXCIsYm9yZGVyQm90dG9tTGVmdFJhZGl1czpcIjBweFwiLGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOlwiMHB4XCIsYm9yZGVyQm90dG9tV2lkdGg6XCIzcHhcIixib3JkZXJMZWZ0Q29sb3I6XCJjdXJyZW50Q29sb3JcIixib3JkZXJMZWZ0V2lkdGg6XCIzcHhcIixib3JkZXJSaWdodENvbG9yOlwiY3VycmVudENvbG9yXCIsYm9yZGVyUmlnaHRXaWR0aDpcIjNweFwiLGJvcmRlclNwYWNpbmc6XCIycHhcIixib3JkZXJUb3BDb2xvcjpcImN1cnJlbnRDb2xvclwiLGJvcmRlclRvcExlZnRSYWRpdXM6XCIwcHhcIixib3JkZXJUb3BSaWdodFJhZGl1czpcIjBweFwiLGJvcmRlclRvcFdpZHRoOlwiM3B4XCIsYm90dG9tOlwiYXV0b1wiLGNsaXA6XCJyZWN0KDBweCwgMHB4LCAwcHgsIDBweClcIixjb2xvcjpcImJsYWNrXCIsZm9udFNpemU6XCIxMDAlXCIsZm9udFdlaWdodDpcIjQwMFwiLGhlaWdodDpcImF1dG9cIixsZWZ0OlwiYXV0b1wiLGxldHRlclNwYWNpbmc6XCJub3JtYWxcIixsaW5lSGVpZ2h0OlwiMTIwJVwiLG1hcmdpbkJvdHRvbTpcIjBweFwiLG1hcmdpbkxlZnQ6XCIwcHhcIixtYXJnaW5SaWdodDpcIjBweFwiLG1hcmdpblRvcDpcIjBweFwiLG1heEhlaWdodDpcIm5vbmVcIixtYXhXaWR0aDpcIm5vbmVcIixtaW5IZWlnaHQ6XCIwcHhcIixtaW5XaWR0aDpcIjBweFwiLG9wYWNpdHk6XCIxLjBcIixvdXRsaW5lQ29sb3I6XCJpbnZlcnRcIixvdXRsaW5lT2Zmc2V0OlwiMHB4XCIsb3V0bGluZVdpZHRoOlwiM3B4XCIscGFkZGluZ0JvdHRvbTpcIjBweFwiLHBhZGRpbmdMZWZ0OlwiMHB4XCIscGFkZGluZ1JpZ2h0OlwiMHB4XCIscGFkZGluZ1RvcDpcIjBweFwiLHJpZ2h0OlwiYXV0b1wiLHN0cm9rZURhc2hhcnJheTpcIm5vbmVcIixzdHJva2VEYXNob2Zmc2V0OlwiMHB4XCIsdGV4dEluZGVudDpcIjBweFwiLHRleHRTaGFkb3c6XCIwcHggMHB4IDBweCB0cmFuc3BhcmVudFwiLHRvcDpcImF1dG9cIix0cmFuc2Zvcm06XCJcIix2ZXJ0aWNhbEFsaWduOlwiMHB4XCIsdmlzaWJpbGl0eTpcInZpc2libGVcIix3aWR0aDpcImF1dG9cIix3b3JkU3BhY2luZzpcIm5vcm1hbFwiLHpJbmRleDpcImF1dG9cIn07Yi5wcm9wZXJ0eUludGVycG9sYXRpb249Z30oYSxiKSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChiKXt2YXIgYz1hLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKGIpLGQ9ZnVuY3Rpb24oZCl7cmV0dXJuIGEuY2FsY3VsYXRlSXRlcmF0aW9uUHJvZ3Jlc3MoYyxkLGIpfTtyZXR1cm4gZC5fdG90YWxEdXJhdGlvbj1iLmRlbGF5K2MrYi5lbmREZWxheSxkfWIuS2V5ZnJhbWVFZmZlY3Q9ZnVuY3Rpb24oYyxlLGYsZyl7dmFyIGgsaT1kKGEubm9ybWFsaXplVGltaW5nSW5wdXQoZikpLGo9Yi5jb252ZXJ0RWZmZWN0SW5wdXQoZSksaz1mdW5jdGlvbigpe2ooYyxoKX07cmV0dXJuIGsuX3VwZGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PShoPWkoYSkpfSxrLl9jbGVhcj1mdW5jdGlvbigpe2ooYyxudWxsKX0say5faGFzU2FtZVRhcmdldD1mdW5jdGlvbihhKXtyZXR1cm4gYz09PWF9LGsuX3RhcmdldD1jLGsuX3RvdGFsRHVyYXRpb249aS5fdG90YWxEdXJhdGlvbixrLl9pZD1nLGt9fShhLGIpLGZ1bmN0aW9uKGEsYil7YS5hcHBseT1mdW5jdGlvbihiLGMsZCl7Yi5zdHlsZVthLnByb3BlcnR5TmFtZShjKV09ZH0sYS5jbGVhcj1mdW5jdGlvbihiLGMpe2Iuc3R5bGVbYS5wcm9wZXJ0eU5hbWUoYyldPVwiXCJ9fShiKSxmdW5jdGlvbihhKXt3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZT1mdW5jdGlvbihiLGMpe3ZhciBkPVwiXCI7cmV0dXJuIGMmJmMuaWQmJihkPWMuaWQpLGEudGltZWxpbmUuX3BsYXkoYS5LZXlmcmFtZUVmZmVjdCh0aGlzLGIsYyxkKSl9fShiKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiLGQpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBhJiZcIm51bWJlclwiPT10eXBlb2YgYilyZXR1cm4gYSooMS1kKStiKmQ7aWYoXCJib29sZWFuXCI9PXR5cGVvZiBhJiZcImJvb2xlYW5cIj09dHlwZW9mIGIpcmV0dXJuIGQ8LjU/YTpiO2lmKGEubGVuZ3RoPT1iLmxlbmd0aCl7Zm9yKHZhciBlPVtdLGY9MDtmPGEubGVuZ3RoO2YrKyllLnB1c2goYyhhW2ZdLGJbZl0sZCkpO3JldHVybiBlfXRocm93XCJNaXNtYXRjaGVkIGludGVycG9sYXRpb24gYXJndW1lbnRzIFwiK2ErXCI6XCIrYn1hLkludGVycG9sYXRpb249ZnVuY3Rpb24oYSxiLGQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZChjKGEsYixlKSl9fX0oYiksZnVuY3Rpb24oYSxiLGMpe2Euc2VxdWVuY2VOdW1iZXI9MDt2YXIgZD1mdW5jdGlvbihhLGIsYyl7dGhpcy50YXJnZXQ9YSx0aGlzLmN1cnJlbnRUaW1lPWIsdGhpcy50aW1lbGluZVRpbWU9Yyx0aGlzLnR5cGU9XCJmaW5pc2hcIix0aGlzLmJ1YmJsZXM9ITEsdGhpcy5jYW5jZWxhYmxlPSExLHRoaXMuY3VycmVudFRhcmdldD1hLHRoaXMuZGVmYXVsdFByZXZlbnRlZD0hMSx0aGlzLmV2ZW50UGhhc2U9RXZlbnQuQVRfVEFSR0VULHRoaXMudGltZVN0YW1wPURhdGUubm93KCl9O2IuQW5pbWF0aW9uPWZ1bmN0aW9uKGIpe3RoaXMuaWQ9XCJcIixiJiZiLl9pZCYmKHRoaXMuaWQ9Yi5faWQpLHRoaXMuX3NlcXVlbmNlTnVtYmVyPWEuc2VxdWVuY2VOdW1iZXIrKyx0aGlzLl9jdXJyZW50VGltZT0wLHRoaXMuX3N0YXJ0VGltZT1udWxsLHRoaXMuX3BhdXNlZD0hMSx0aGlzLl9wbGF5YmFja1JhdGU9MSx0aGlzLl9pblRpbWVsaW5lPSEwLHRoaXMuX2ZpbmlzaGVkRmxhZz0hMCx0aGlzLm9uZmluaXNoPW51bGwsdGhpcy5fZmluaXNoSGFuZGxlcnM9W10sdGhpcy5fZWZmZWN0PWIsdGhpcy5faW5FZmZlY3Q9dGhpcy5fZWZmZWN0Ll91cGRhdGUoMCksdGhpcy5faWRsZT0hMCx0aGlzLl9jdXJyZW50VGltZVBlbmRpbmc9ITF9LGIuQW5pbWF0aW9uLnByb3RvdHlwZT17X2Vuc3VyZUFsaXZlOmZ1bmN0aW9uKCl7dGhpcy5wbGF5YmFja1JhdGU8MCYmMD09PXRoaXMuY3VycmVudFRpbWU/dGhpcy5faW5FZmZlY3Q9dGhpcy5fZWZmZWN0Ll91cGRhdGUoLTEpOnRoaXMuX2luRWZmZWN0PXRoaXMuX2VmZmVjdC5fdXBkYXRlKHRoaXMuY3VycmVudFRpbWUpLHRoaXMuX2luVGltZWxpbmV8fCF0aGlzLl9pbkVmZmVjdCYmdGhpcy5fZmluaXNoZWRGbGFnfHwodGhpcy5faW5UaW1lbGluZT0hMCxiLnRpbWVsaW5lLl9hbmltYXRpb25zLnB1c2godGhpcykpfSxfdGlja0N1cnJlbnRUaW1lOmZ1bmN0aW9uKGEsYil7YSE9dGhpcy5fY3VycmVudFRpbWUmJih0aGlzLl9jdXJyZW50VGltZT1hLHRoaXMuX2lzRmluaXNoZWQmJiFiJiYodGhpcy5fY3VycmVudFRpbWU9dGhpcy5fcGxheWJhY2tSYXRlPjA/dGhpcy5fdG90YWxEdXJhdGlvbjowKSx0aGlzLl9lbnN1cmVBbGl2ZSgpKX0sZ2V0IGN1cnJlbnRUaW1lKCl7cmV0dXJuIHRoaXMuX2lkbGV8fHRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz9udWxsOnRoaXMuX2N1cnJlbnRUaW1lfSxzZXQgY3VycmVudFRpbWUoYSl7YT0rYSxpc05hTihhKXx8KGIucmVzdGFydCgpLHRoaXMuX3BhdXNlZHx8bnVsbD09dGhpcy5fc3RhcnRUaW1lfHwodGhpcy5fc3RhcnRUaW1lPXRoaXMuX3RpbWVsaW5lLmN1cnJlbnRUaW1lLWEvdGhpcy5fcGxheWJhY2tSYXRlKSx0aGlzLl9jdXJyZW50VGltZVBlbmRpbmc9ITEsdGhpcy5fY3VycmVudFRpbWUhPWEmJih0aGlzLl9pZGxlJiYodGhpcy5faWRsZT0hMSx0aGlzLl9wYXVzZWQ9ITApLHRoaXMuX3RpY2tDdXJyZW50VGltZShhLCEwKSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbih0aGlzKSkpfSxnZXQgc3RhcnRUaW1lKCl7cmV0dXJuIHRoaXMuX3N0YXJ0VGltZX0sc2V0IHN0YXJ0VGltZShhKXthPSthLGlzTmFOKGEpfHx0aGlzLl9wYXVzZWR8fHRoaXMuX2lkbGV8fCh0aGlzLl9zdGFydFRpbWU9YSx0aGlzLl90aWNrQ3VycmVudFRpbWUoKHRoaXMuX3RpbWVsaW5lLmN1cnJlbnRUaW1lLXRoaXMuX3N0YXJ0VGltZSkqdGhpcy5wbGF5YmFja1JhdGUpLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKHRoaXMpKX0sZ2V0IHBsYXliYWNrUmF0ZSgpe3JldHVybiB0aGlzLl9wbGF5YmFja1JhdGV9LHNldCBwbGF5YmFja1JhdGUoYSl7aWYoYSE9dGhpcy5fcGxheWJhY2tSYXRlKXt2YXIgYz10aGlzLmN1cnJlbnRUaW1lO3RoaXMuX3BsYXliYWNrUmF0ZT1hLHRoaXMuX3N0YXJ0VGltZT1udWxsLFwicGF1c2VkXCIhPXRoaXMucGxheVN0YXRlJiZcImlkbGVcIiE9dGhpcy5wbGF5U3RhdGUmJih0aGlzLl9maW5pc2hlZEZsYWc9ITEsdGhpcy5faWRsZT0hMSx0aGlzLl9lbnN1cmVBbGl2ZSgpLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKHRoaXMpKSxudWxsIT1jJiYodGhpcy5jdXJyZW50VGltZT1jKX19LGdldCBfaXNGaW5pc2hlZCgpe3JldHVybiF0aGlzLl9pZGxlJiYodGhpcy5fcGxheWJhY2tSYXRlPjAmJnRoaXMuX2N1cnJlbnRUaW1lPj10aGlzLl90b3RhbER1cmF0aW9ufHx0aGlzLl9wbGF5YmFja1JhdGU8MCYmdGhpcy5fY3VycmVudFRpbWU8PTApfSxnZXQgX3RvdGFsRHVyYXRpb24oKXtyZXR1cm4gdGhpcy5fZWZmZWN0Ll90b3RhbER1cmF0aW9ufSxnZXQgcGxheVN0YXRlKCl7cmV0dXJuIHRoaXMuX2lkbGU/XCJpZGxlXCI6bnVsbD09dGhpcy5fc3RhcnRUaW1lJiYhdGhpcy5fcGF1c2VkJiYwIT10aGlzLnBsYXliYWNrUmF0ZXx8dGhpcy5fY3VycmVudFRpbWVQZW5kaW5nP1wicGVuZGluZ1wiOnRoaXMuX3BhdXNlZD9cInBhdXNlZFwiOnRoaXMuX2lzRmluaXNoZWQ/XCJmaW5pc2hlZFwiOlwicnVubmluZ1wifSxfcmV3aW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5fcGxheWJhY2tSYXRlPj0wKXRoaXMuX2N1cnJlbnRUaW1lPTA7ZWxzZXtpZighKHRoaXMuX3RvdGFsRHVyYXRpb248MS8wKSl0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFwiVW5hYmxlIHRvIHJld2luZCBuZWdhdGl2ZSBwbGF5YmFjayByYXRlIGFuaW1hdGlvbiB3aXRoIGluZmluaXRlIGR1cmF0aW9uXCIsXCJJbnZhbGlkU3RhdGVFcnJvclwiKTt0aGlzLl9jdXJyZW50VGltZT10aGlzLl90b3RhbER1cmF0aW9ufX0scGxheTpmdW5jdGlvbigpe3RoaXMuX3BhdXNlZD0hMSwodGhpcy5faXNGaW5pc2hlZHx8dGhpcy5faWRsZSkmJih0aGlzLl9yZXdpbmQoKSx0aGlzLl9zdGFydFRpbWU9bnVsbCksdGhpcy5fZmluaXNoZWRGbGFnPSExLHRoaXMuX2lkbGU9ITEsdGhpcy5fZW5zdXJlQWxpdmUoKSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbih0aGlzKX0scGF1c2U6ZnVuY3Rpb24oKXt0aGlzLl9pc0ZpbmlzaGVkfHx0aGlzLl9wYXVzZWR8fHRoaXMuX2lkbGU/dGhpcy5faWRsZSYmKHRoaXMuX3Jld2luZCgpLHRoaXMuX2lkbGU9ITEpOnRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz0hMCx0aGlzLl9zdGFydFRpbWU9bnVsbCx0aGlzLl9wYXVzZWQ9ITB9LGZpbmlzaDpmdW5jdGlvbigpe3RoaXMuX2lkbGV8fCh0aGlzLmN1cnJlbnRUaW1lPXRoaXMuX3BsYXliYWNrUmF0ZT4wP3RoaXMuX3RvdGFsRHVyYXRpb246MCx0aGlzLl9zdGFydFRpbWU9dGhpcy5fdG90YWxEdXJhdGlvbi10aGlzLmN1cnJlbnRUaW1lLHRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz0hMSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbih0aGlzKSl9LGNhbmNlbDpmdW5jdGlvbigpe3RoaXMuX2luRWZmZWN0JiYodGhpcy5faW5FZmZlY3Q9ITEsdGhpcy5faWRsZT0hMCx0aGlzLl9wYXVzZWQ9ITEsdGhpcy5fZmluaXNoZWRGbGFnPSEwLHRoaXMuX2N1cnJlbnRUaW1lPTAsdGhpcy5fc3RhcnRUaW1lPW51bGwsdGhpcy5fZWZmZWN0Ll91cGRhdGUobnVsbCksYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcykpfSxyZXZlcnNlOmZ1bmN0aW9uKCl7dGhpcy5wbGF5YmFja1JhdGUqPS0xLHRoaXMucGxheSgpfSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmXCJmaW5pc2hcIj09YSYmdGhpcy5fZmluaXNoSGFuZGxlcnMucHVzaChiKX0scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIpe2lmKFwiZmluaXNoXCI9PWEpe3ZhciBjPXRoaXMuX2ZpbmlzaEhhbmRsZXJzLmluZGV4T2YoYik7Yz49MCYmdGhpcy5fZmluaXNoSGFuZGxlcnMuc3BsaWNlKGMsMSl9fSxfZmlyZUV2ZW50czpmdW5jdGlvbihhKXtpZih0aGlzLl9pc0ZpbmlzaGVkKXtpZighdGhpcy5fZmluaXNoZWRGbGFnKXt2YXIgYj1uZXcgZCh0aGlzLHRoaXMuX2N1cnJlbnRUaW1lLGEpLGM9dGhpcy5fZmluaXNoSGFuZGxlcnMuY29uY2F0KHRoaXMub25maW5pc2g/W3RoaXMub25maW5pc2hdOltdKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuY2FsbChiLnRhcmdldCxiKX0pfSwwKSx0aGlzLl9maW5pc2hlZEZsYWc9ITB9fWVsc2UgdGhpcy5fZmluaXNoZWRGbGFnPSExfSxfdGljazpmdW5jdGlvbihhLGIpe3RoaXMuX2lkbGV8fHRoaXMuX3BhdXNlZHx8KG51bGw9PXRoaXMuX3N0YXJ0VGltZT9iJiYodGhpcy5zdGFydFRpbWU9YS10aGlzLl9jdXJyZW50VGltZS90aGlzLnBsYXliYWNrUmF0ZSk6dGhpcy5faXNGaW5pc2hlZHx8dGhpcy5fdGlja0N1cnJlbnRUaW1lKChhLXRoaXMuX3N0YXJ0VGltZSkqdGhpcy5wbGF5YmFja1JhdGUpKSxiJiYodGhpcy5fY3VycmVudFRpbWVQZW5kaW5nPSExLHRoaXMuX2ZpcmVFdmVudHMoYSkpfSxnZXQgX25lZWRzVGljaygpe3JldHVybiB0aGlzLnBsYXlTdGF0ZSBpbntwZW5kaW5nOjEscnVubmluZzoxfXx8IXRoaXMuX2ZpbmlzaGVkRmxhZ30sX3RhcmdldEFuaW1hdGlvbnM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9lZmZlY3QuX3RhcmdldDtyZXR1cm4gYS5fYWN0aXZlQW5pbWF0aW9uc3x8KGEuX2FjdGl2ZUFuaW1hdGlvbnM9W10pLGEuX2FjdGl2ZUFuaW1hdGlvbnN9LF9tYXJrVGFyZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fdGFyZ2V0QW5pbWF0aW9ucygpOy0xPT09YS5pbmRleE9mKHRoaXMpJiZhLnB1c2godGhpcyl9LF91bm1hcmtUYXJnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl90YXJnZXRBbmltYXRpb25zKCksYj1hLmluZGV4T2YodGhpcyk7LTEhPT1iJiZhLnNwbGljZShiLDEpfX19KGEsYiksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGI9ajtqPVtdLGE8cS5jdXJyZW50VGltZSYmKGE9cS5jdXJyZW50VGltZSkscS5fYW5pbWF0aW9ucy5zb3J0KGUpLHEuX2FuaW1hdGlvbnM9aChhLCEwLHEuX2FuaW1hdGlvbnMpWzBdLGIuZm9yRWFjaChmdW5jdGlvbihiKXtiWzFdKGEpfSksZygpLGw9dm9pZCAwfWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gYS5fc2VxdWVuY2VOdW1iZXItYi5fc2VxdWVuY2VOdW1iZXJ9ZnVuY3Rpb24gZigpe3RoaXMuX2FuaW1hdGlvbnM9W10sdGhpcy5jdXJyZW50VGltZT13aW5kb3cucGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZS5ub3coKTowfWZ1bmN0aW9uIGcoKXtvLmZvckVhY2goZnVuY3Rpb24oYSl7YSgpfSksby5sZW5ndGg9MH1mdW5jdGlvbiBoKGEsYyxkKXtwPSEwLG49ITEsYi50aW1lbGluZS5jdXJyZW50VGltZT1hLG09ITE7dmFyIGU9W10sZj1bXSxnPVtdLGg9W107cmV0dXJuIGQuZm9yRWFjaChmdW5jdGlvbihiKXtiLl90aWNrKGEsYyksYi5faW5FZmZlY3Q/KGYucHVzaChiLl9lZmZlY3QpLGIuX21hcmtUYXJnZXQoKSk6KGUucHVzaChiLl9lZmZlY3QpLGIuX3VubWFya1RhcmdldCgpKSxiLl9uZWVkc1RpY2smJihtPSEwKTt2YXIgZD1iLl9pbkVmZmVjdHx8Yi5fbmVlZHNUaWNrO2IuX2luVGltZWxpbmU9ZCxkP2cucHVzaChiKTpoLnB1c2goYil9KSxvLnB1c2guYXBwbHkobyxlKSxvLnB1c2guYXBwbHkobyxmKSxtJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt9KSxwPSExLFtnLGhdfXZhciBpPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsaj1bXSxrPTA7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXt2YXIgYj1rKys7cmV0dXJuIDA9PWoubGVuZ3RoJiZpKGQpLGoucHVzaChbYixhXSksYn0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2ouZm9yRWFjaChmdW5jdGlvbihiKXtiWzBdPT1hJiYoYlsxXT1mdW5jdGlvbigpe30pfSl9LGYucHJvdG90eXBlPXtfcGxheTpmdW5jdGlvbihjKXtjLl90aW1pbmc9YS5ub3JtYWxpemVUaW1pbmdJbnB1dChjLnRpbWluZyk7dmFyIGQ9bmV3IGIuQW5pbWF0aW9uKGMpO3JldHVybiBkLl9pZGxlPSExLGQuX3RpbWVsaW5lPXRoaXMsdGhpcy5fYW5pbWF0aW9ucy5wdXNoKGQpLGIucmVzdGFydCgpLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKGQpLGR9fTt2YXIgbD12b2lkIDAsbT0hMSxuPSExO2IucmVzdGFydD1mdW5jdGlvbigpe3JldHVybiBtfHwobT0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt9KSxuPSEwKSxufSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbj1mdW5jdGlvbihhKXtpZighcCl7YS5fbWFya1RhcmdldCgpO3ZhciBjPWEuX3RhcmdldEFuaW1hdGlvbnMoKTtjLnNvcnQoZSksaChiLnRpbWVsaW5lLmN1cnJlbnRUaW1lLCExLGMuc2xpY2UoKSlbMV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1xLl9hbmltYXRpb25zLmluZGV4T2YoYSk7LTEhPT1iJiZxLl9hbmltYXRpb25zLnNwbGljZShiLDEpfSksZygpfX07dmFyIG89W10scD0hMSxxPW5ldyBmO2IudGltZWxpbmU9cX0oYSxiKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7dmFyIGM9YS5leGVjKGIpO2lmKGMpcmV0dXJuIGM9YS5pZ25vcmVDYXNlP2NbMF0udG9Mb3dlckNhc2UoKTpjWzBdLFtjLGIuc3Vic3RyKGMubGVuZ3RoKV19ZnVuY3Rpb24gYyhhLGIpe2I9Yi5yZXBsYWNlKC9eXFxzKi8sXCJcIik7dmFyIGM9YShiKTtpZihjKXJldHVybltjWzBdLGNbMV0ucmVwbGFjZSgvXlxccyovLFwiXCIpXX1mdW5jdGlvbiBkKGEsZCxlKXthPWMuYmluZChudWxsLGEpO2Zvcih2YXIgZj1bXTs7KXt2YXIgZz1hKGUpO2lmKCFnKXJldHVybltmLGVdO2lmKGYucHVzaChnWzBdKSxlPWdbMV0sIShnPWIoZCxlKSl8fFwiXCI9PWdbMV0pcmV0dXJuW2YsZV07ZT1nWzFdfX1mdW5jdGlvbiBlKGEsYil7Zm9yKHZhciBjPTAsZD0wO2Q8Yi5sZW5ndGgmJighL1xcc3wsLy50ZXN0KGJbZF0pfHwwIT1jKTtkKyspaWYoXCIoXCI9PWJbZF0pYysrO2Vsc2UgaWYoXCIpXCI9PWJbZF0mJihjLS0sMD09YyYmZCsrLGM8PTApKWJyZWFrO3ZhciBlPWEoYi5zdWJzdHIoMCxkKSk7cmV0dXJuIHZvaWQgMD09ZT92b2lkIDA6W2UsYi5zdWJzdHIoZCldfWZ1bmN0aW9uIGYoYSxiKXtmb3IodmFyIGM9YSxkPWI7YyYmZDspYz5kP2MlPWQ6ZCU9YztyZXR1cm4gYz1hKmIvKGMrZCl9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9YShiKTtyZXR1cm4gYyYmKGNbMF09dm9pZCAwKSxjfX1mdW5jdGlvbiBoKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMpe3JldHVybiBhKGMpfHxbYixjXX19ZnVuY3Rpb24gaShiLGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxiLmxlbmd0aDtlKyspe3ZhciBmPWEuY29uc3VtZVRyaW1tZWQoYltlXSxjKTtpZighZnx8XCJcIj09ZlswXSlyZXR1cm47dm9pZCAwIT09ZlswXSYmZC5wdXNoKGZbMF0pLGM9ZlsxXX1pZihcIlwiPT1jKXJldHVybiBkfWZ1bmN0aW9uIGooYSxiLGMsZCxlKXtmb3IodmFyIGc9W10saD1bXSxpPVtdLGo9ZihkLmxlbmd0aCxlLmxlbmd0aCksaz0wO2s8ajtrKyspe3ZhciBsPWIoZFtrJWQubGVuZ3RoXSxlW2slZS5sZW5ndGhdKTtpZighbClyZXR1cm47Zy5wdXNoKGxbMF0pLGgucHVzaChsWzFdKSxpLnB1c2gobFsyXSl9cmV0dXJuW2csaCxmdW5jdGlvbihiKXt2YXIgZD1iLm1hcChmdW5jdGlvbihhLGIpe3JldHVybiBpW2JdKGEpfSkuam9pbihjKTtyZXR1cm4gYT9hKGQpOmR9XX1mdW5jdGlvbiBrKGEsYixjKXtmb3IodmFyIGQ9W10sZT1bXSxmPVtdLGc9MCxoPTA7aDxjLmxlbmd0aDtoKyspaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgY1toXSl7dmFyIGk9Y1toXShhW2ddLGJbZysrXSk7ZC5wdXNoKGlbMF0pLGUucHVzaChpWzFdKSxmLnB1c2goaVsyXSl9ZWxzZSFmdW5jdGlvbihhKXtkLnB1c2goITEpLGUucHVzaCghMSksZi5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGNbYV19KX0oaCk7cmV0dXJuW2QsZSxmdW5jdGlvbihhKXtmb3IodmFyIGI9XCJcIixjPTA7YzxhLmxlbmd0aDtjKyspYis9ZltjXShhW2NdKTtyZXR1cm4gYn1dfWEuY29uc3VtZVRva2VuPWIsYS5jb25zdW1lVHJpbW1lZD1jLGEuY29uc3VtZVJlcGVhdGVkPWQsYS5jb25zdW1lUGFyZW50aGVzaXNlZD1lLGEuaWdub3JlPWcsYS5vcHRpb25hbD1oLGEuY29uc3VtZUxpc3Q9aSxhLm1lcmdlTmVzdGVkUmVwZWF0ZWQ9ai5iaW5kKG51bGwsbnVsbCksYS5tZXJnZVdyYXBwZWROZXN0ZWRSZXBlYXRlZD1qLGEubWVyZ2VMaXN0PWt9KGIpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYil7ZnVuY3Rpb24gYyhiKXt2YXIgYz1hLmNvbnN1bWVUb2tlbigvXmluc2V0L2ksYik7cmV0dXJuIGM/KGQuaW5zZXQ9ITAsYyk6KGM9YS5jb25zdW1lTGVuZ3RoT3JQZXJjZW50KGIpKT8oZC5sZW5ndGhzLnB1c2goY1swXSksYyk6KGM9YS5jb25zdW1lQ29sb3IoYiksYz8oZC5jb2xvcj1jWzBdLGMpOnZvaWQgMCl9dmFyIGQ9e2luc2V0OiExLGxlbmd0aHM6W10sY29sb3I6bnVsbH0sZT1hLmNvbnN1bWVSZXBlYXRlZChjLC9eLyxiKTtpZihlJiZlWzBdLmxlbmd0aClyZXR1cm5bZCxlWzFdXX1mdW5jdGlvbiBjKGMpe3ZhciBkPWEuY29uc3VtZVJlcGVhdGVkKGIsL14sLyxjKTtpZihkJiZcIlwiPT1kWzFdKXJldHVybiBkWzBdfWZ1bmN0aW9uIGQoYixjKXtmb3IoO2IubGVuZ3Rocy5sZW5ndGg8TWF0aC5tYXgoYi5sZW5ndGhzLmxlbmd0aCxjLmxlbmd0aHMubGVuZ3RoKTspYi5sZW5ndGhzLnB1c2goe3B4OjB9KTtmb3IoO2MubGVuZ3Rocy5sZW5ndGg8TWF0aC5tYXgoYi5sZW5ndGhzLmxlbmd0aCxjLmxlbmd0aHMubGVuZ3RoKTspYy5sZW5ndGhzLnB1c2goe3B4OjB9KTtpZihiLmluc2V0PT1jLmluc2V0JiYhIWIuY29sb3I9PSEhYy5jb2xvcil7Zm9yKHZhciBkLGU9W10sZj1bW10sMF0sZz1bW10sMF0saD0wO2g8Yi5sZW5ndGhzLmxlbmd0aDtoKyspe3ZhciBpPWEubWVyZ2VEaW1lbnNpb25zKGIubGVuZ3Roc1toXSxjLmxlbmd0aHNbaF0sMj09aCk7ZlswXS5wdXNoKGlbMF0pLGdbMF0ucHVzaChpWzFdKSxlLnB1c2goaVsyXSl9aWYoYi5jb2xvciYmYy5jb2xvcil7dmFyIGo9YS5tZXJnZUNvbG9ycyhiLmNvbG9yLGMuY29sb3IpO2ZbMV09alswXSxnWzFdPWpbMV0sZD1qWzJdfXJldHVybltmLGcsZnVuY3Rpb24oYSl7Zm9yKHZhciBjPWIuaW5zZXQ/XCJpbnNldCBcIjpcIiBcIixmPTA7ZjxlLmxlbmd0aDtmKyspYys9ZVtmXShhWzBdW2ZdKStcIiBcIjtyZXR1cm4gZCYmKGMrPWQoYVsxXSkpLGN9XX19ZnVuY3Rpb24gZShiLGMsZCxlKXtmdW5jdGlvbiBmKGEpe3JldHVybntpbnNldDphLGNvbG9yOlswLDAsMCwwXSxsZW5ndGhzOlt7cHg6MH0se3B4OjB9LHtweDowfSx7cHg6MH1dfX1mb3IodmFyIGc9W10saD1bXSxpPTA7aTxkLmxlbmd0aHx8aTxlLmxlbmd0aDtpKyspe3ZhciBqPWRbaV18fGYoZVtpXS5pbnNldCksaz1lW2ldfHxmKGRbaV0uaW5zZXQpO2cucHVzaChqKSxoLnB1c2goayl9cmV0dXJuIGEubWVyZ2VOZXN0ZWRSZXBlYXRlZChiLGMsZyxoKX12YXIgZj1lLmJpbmQobnVsbCxkLFwiLCBcIik7YS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihjLGYsW1wiYm94LXNoYWRvd1wiLFwidGV4dC1zaGFkb3dcIl0pfShiKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGEudG9GaXhlZCgzKS5yZXBsYWNlKC8wKyQvLFwiXCIpLnJlcGxhY2UoL1xcLiQvLFwiXCIpfWZ1bmN0aW9uIGQoYSxiLGMpe3JldHVybiBNYXRoLm1pbihiLE1hdGgubWF4KGEsYykpfWZ1bmN0aW9uIGUoYSl7aWYoL15cXHMqWy0rXT8oXFxkKlxcLik/XFxkK1xccyokLy50ZXN0KGEpKXJldHVybiBOdW1iZXIoYSl9ZnVuY3Rpb24gZihhLGIpe3JldHVyblthLGIsY119ZnVuY3Rpb24gZyhhLGIpe2lmKDAhPWEpcmV0dXJuIGkoMCwxLzApKGEsYil9ZnVuY3Rpb24gaChhLGIpe3JldHVyblthLGIsZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucm91bmQoZCgxLDEvMCxhKSl9XX1mdW5jdGlvbiBpKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGUsZil7cmV0dXJuW2UsZixmdW5jdGlvbihlKXtyZXR1cm4gYyhkKGEsYixlKSl9XX19ZnVuY3Rpb24gaihhKXt2YXIgYj1hLnRyaW0oKS5zcGxpdCgvXFxzKltcXHMsXVxccyovKTtpZigwIT09Yi5sZW5ndGgpe2Zvcih2YXIgYz1bXSxkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBmPWUoYltkXSk7aWYodm9pZCAwPT09ZilyZXR1cm47Yy5wdXNoKGYpfXJldHVybiBjfX1mdW5jdGlvbiBrKGEsYil7aWYoYS5sZW5ndGg9PWIubGVuZ3RoKXJldHVyblthLGIsZnVuY3Rpb24oYSl7cmV0dXJuIGEubWFwKGMpLmpvaW4oXCIgXCIpfV19ZnVuY3Rpb24gbChhLGIpe3JldHVyblthLGIsTWF0aC5yb3VuZF19YS5jbGFtcD1kLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoaixrLFtcInN0cm9rZS1kYXNoYXJyYXlcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoZSxpKDAsMS8wKSxbXCJib3JkZXItaW1hZ2Utd2lkdGhcIixcImxpbmUtaGVpZ2h0XCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGUsaSgwLDEpLFtcIm9wYWNpdHlcIixcInNoYXBlLWltYWdlLXRocmVzaG9sZFwiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihlLGcsW1wiZmxleC1ncm93XCIsXCJmbGV4LXNocmlua1wiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihlLGgsW1wib3JwaGFuc1wiLFwid2lkb3dzXCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGUsbCxbXCJ6LWluZGV4XCJdKSxhLnBhcnNlTnVtYmVyPWUsYS5wYXJzZU51bWJlckxpc3Q9aixhLm1lcmdlTnVtYmVycz1mLGEubnVtYmVyVG9TdHJpbmc9Y30oYiksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7aWYoXCJ2aXNpYmxlXCI9PWF8fFwidmlzaWJsZVwiPT1iKXJldHVyblswLDEsZnVuY3Rpb24oYyl7cmV0dXJuIGM8PTA/YTpjPj0xP2I6XCJ2aXNpYmxlXCJ9XX1hLmFkZFByb3BlcnRpZXNIYW5kbGVyKFN0cmluZyxjLFtcInZpc2liaWxpdHlcIl0pfShiKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7YT1hLnRyaW0oKSxmLmZpbGxTdHlsZT1cIiMwMDBcIixmLmZpbGxTdHlsZT1hO3ZhciBiPWYuZmlsbFN0eWxlO2lmKGYuZmlsbFN0eWxlPVwiI2ZmZlwiLGYuZmlsbFN0eWxlPWEsYj09Zi5maWxsU3R5bGUpe2YuZmlsbFJlY3QoMCwwLDEsMSk7dmFyIGM9Zi5nZXRJbWFnZURhdGEoMCwwLDEsMSkuZGF0YTtmLmNsZWFyUmVjdCgwLDAsMSwxKTt2YXIgZD1jWzNdLzI1NTtyZXR1cm5bY1swXSpkLGNbMV0qZCxjWzJdKmQsZF19fWZ1bmN0aW9uIGQoYixjKXtyZXR1cm5bYixjLGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIE1hdGgubWF4KDAsTWF0aC5taW4oMjU1LGEpKX1pZihiWzNdKWZvcih2YXIgZD0wO2Q8MztkKyspYltkXT1NYXRoLnJvdW5kKGMoYltkXS9iWzNdKSk7cmV0dXJuIGJbM109YS5udW1iZXJUb1N0cmluZyhhLmNsYW1wKDAsMSxiWzNdKSksXCJyZ2JhKFwiK2Iuam9pbihcIixcIikrXCIpXCJ9XX12YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXCJjYW52YXNcIik7ZS53aWR0aD1lLmhlaWdodD0xO3ZhciBmPWUuZ2V0Q29udGV4dChcIjJkXCIpO2EuYWRkUHJvcGVydGllc0hhbmRsZXIoYyxkLFtcImJhY2tncm91bmQtY29sb3JcIixcImJvcmRlci1ib3R0b20tY29sb3JcIixcImJvcmRlci1sZWZ0LWNvbG9yXCIsXCJib3JkZXItcmlnaHQtY29sb3JcIixcImJvcmRlci10b3AtY29sb3JcIixcImNvbG9yXCIsXCJmaWxsXCIsXCJmbG9vZC1jb2xvclwiLFwibGlnaHRpbmctY29sb3JcIixcIm91dGxpbmUtY29sb3JcIixcInN0b3AtY29sb3JcIixcInN0cm9rZVwiLFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCJdKSxhLmNvbnN1bWVDb2xvcj1hLmNvbnN1bWVQYXJlbnRoZXNpc2VkLmJpbmQobnVsbCxjKSxhLm1lcmdlQ29sb3JzPWR9KGIpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtmdW5jdGlvbiBiKCl7dmFyIGI9aC5leGVjKGEpO2c9Yj9iWzBdOnZvaWQgMH1mdW5jdGlvbiBjKCl7dmFyIGE9TnVtYmVyKGcpO3JldHVybiBiKCksYX1mdW5jdGlvbiBkKCl7aWYoXCIoXCIhPT1nKXJldHVybiBjKCk7YigpO3ZhciBhPWYoKTtyZXR1cm5cIilcIiE9PWc/TmFOOihiKCksYSl9ZnVuY3Rpb24gZSgpe2Zvcih2YXIgYT1kKCk7XCIqXCI9PT1nfHxcIi9cIj09PWc7KXt2YXIgYz1nO2IoKTt2YXIgZT1kKCk7XCIqXCI9PT1jP2EqPWU6YS89ZX1yZXR1cm4gYX1mdW5jdGlvbiBmKCl7Zm9yKHZhciBhPWUoKTtcIitcIj09PWd8fFwiLVwiPT09Zzspe3ZhciBjPWc7YigpO3ZhciBkPWUoKTtcIitcIj09PWM/YSs9ZDphLT1kfXJldHVybiBhfXZhciBnLGg9LyhbXFwrXFwtXFx3XFwuXSt8W1xcKFxcKVxcKlxcL10pL2c7cmV0dXJuIGIoKSxmKCl9ZnVuY3Rpb24gZChhLGIpe2lmKFwiMFwiPT0oYj1iLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSYmXCJweFwiLnNlYXJjaChhKT49MClyZXR1cm57cHg6MH07aWYoL15bXihdKiR8XmNhbGMvLnRlc3QoYikpe2I9Yi5yZXBsYWNlKC9jYWxjXFwoL2csXCIoXCIpO3ZhciBkPXt9O2I9Yi5yZXBsYWNlKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGRbYV09bnVsbCxcIlVcIithfSk7Zm9yKHZhciBlPVwiVShcIithLnNvdXJjZStcIilcIixmPWIucmVwbGFjZSgvWy0rXT8oXFxkKlxcLik/XFxkKyhbRWVdWy0rXT9cXGQrKT8vZyxcIk5cIikucmVwbGFjZShuZXcgUmVnRXhwKFwiTlwiK2UsXCJnXCIpLFwiRFwiKS5yZXBsYWNlKC9cXHNbKy1dXFxzL2csXCJPXCIpLnJlcGxhY2UoL1xccy9nLFwiXCIpLGc9Wy9OXFwqKEQpL2csLyhOfEQpWypcXC9dTi9nLC8oTnxEKU9cXDEvZywvXFwoKE58RClcXCkvZ10saD0wO2g8Zy5sZW5ndGg7KWdbaF0udGVzdChmKT8oZj1mLnJlcGxhY2UoZ1toXSxcIiQxXCIpLGg9MCk6aCsrO2lmKFwiRFwiPT1mKXtmb3IodmFyIGkgaW4gZCl7dmFyIGo9YyhiLnJlcGxhY2UobmV3IFJlZ0V4cChcIlVcIitpLFwiZ1wiKSxcIlwiKS5yZXBsYWNlKG5ldyBSZWdFeHAoZSxcImdcIiksXCIqMFwiKSk7aWYoIWlzRmluaXRlKGopKXJldHVybjtkW2ldPWp9cmV0dXJuIGR9fX1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGYoYSxiLCEwKX1mdW5jdGlvbiBmKGIsYyxkKXt2YXIgZSxmPVtdO2ZvcihlIGluIGIpZi5wdXNoKGUpO2ZvcihlIGluIGMpZi5pbmRleE9mKGUpPDAmJmYucHVzaChlKTtyZXR1cm4gYj1mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYlthXXx8MH0pLGM9Zi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGNbYV18fDB9KSxbYixjLGZ1bmN0aW9uKGIpe3ZhciBjPWIubWFwKGZ1bmN0aW9uKGMsZSl7cmV0dXJuIDE9PWIubGVuZ3RoJiZkJiYoYz1NYXRoLm1heChjLDApKSxhLm51bWJlclRvU3RyaW5nKGMpK2ZbZV19KS5qb2luKFwiICsgXCIpO3JldHVybiBiLmxlbmd0aD4xP1wiY2FsYyhcIitjK1wiKVwiOmN9XX12YXIgZz1cInB4fGVtfGV4fGNofHJlbXx2d3x2aHx2bWlufHZtYXh8Y218bW18aW58cHR8cGNcIixoPWQuYmluZChudWxsLG5ldyBSZWdFeHAoZyxcImdcIikpLGk9ZC5iaW5kKG51bGwsbmV3IFJlZ0V4cChnK1wifCVcIixcImdcIikpLGo9ZC5iaW5kKG51bGwsL2RlZ3xyYWR8Z3JhZHx0dXJuL2cpO2EucGFyc2VMZW5ndGg9aCxhLnBhcnNlTGVuZ3RoT3JQZXJjZW50PWksYS5jb25zdW1lTGVuZ3RoT3JQZXJjZW50PWEuY29uc3VtZVBhcmVudGhlc2lzZWQuYmluZChudWxsLGkpLGEucGFyc2VBbmdsZT1qLGEubWVyZ2VEaW1lbnNpb25zPWY7dmFyIGs9YS5jb25zdW1lUGFyZW50aGVzaXNlZC5iaW5kKG51bGwsaCksbD1hLmNvbnN1bWVSZXBlYXRlZC5iaW5kKHZvaWQgMCxrLC9eLyksbT1hLmNvbnN1bWVSZXBlYXRlZC5iaW5kKHZvaWQgMCxsLC9eLC8pO2EuY29uc3VtZVNpemVQYWlyTGlzdD1tO3ZhciBuPWZ1bmN0aW9uKGEpe3ZhciBiPW0oYSk7aWYoYiYmXCJcIj09YlsxXSlyZXR1cm4gYlswXX0sbz1hLm1lcmdlTmVzdGVkUmVwZWF0ZWQuYmluZCh2b2lkIDAsZSxcIiBcIikscD1hLm1lcmdlTmVzdGVkUmVwZWF0ZWQuYmluZCh2b2lkIDAsbyxcIixcIik7YS5tZXJnZU5vbk5lZ2F0aXZlU2l6ZVBhaXI9byxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKG4scCxbXCJiYWNrZ3JvdW5kLXNpemVcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoaSxlLFtcImJvcmRlci1ib3R0b20td2lkdGhcIixcImJvcmRlci1pbWFnZS13aWR0aFwiLFwiYm9yZGVyLWxlZnQtd2lkdGhcIixcImJvcmRlci1yaWdodC13aWR0aFwiLFwiYm9yZGVyLXRvcC13aWR0aFwiLFwiZmxleC1iYXNpc1wiLFwiZm9udC1zaXplXCIsXCJoZWlnaHRcIixcImxpbmUtaGVpZ2h0XCIsXCJtYXgtaGVpZ2h0XCIsXCJtYXgtd2lkdGhcIixcIm91dGxpbmUtd2lkdGhcIixcIndpZHRoXCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGksZixbXCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiLFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIixcImJvdHRvbVwiLFwibGVmdFwiLFwibGV0dGVyLXNwYWNpbmdcIixcIm1hcmdpbi1ib3R0b21cIixcIm1hcmdpbi1sZWZ0XCIsXCJtYXJnaW4tcmlnaHRcIixcIm1hcmdpbi10b3BcIixcIm1pbi1oZWlnaHRcIixcIm1pbi13aWR0aFwiLFwib3V0bGluZS1vZmZzZXRcIixcInBhZGRpbmctYm90dG9tXCIsXCJwYWRkaW5nLWxlZnRcIixcInBhZGRpbmctcmlnaHRcIixcInBhZGRpbmctdG9wXCIsXCJwZXJzcGVjdGl2ZVwiLFwicmlnaHRcIixcInNoYXBlLW1hcmdpblwiLFwic3Ryb2tlLWRhc2hvZmZzZXRcIixcInRleHQtaW5kZW50XCIsXCJ0b3BcIixcInZlcnRpY2FsLWFsaWduXCIsXCJ3b3JkLXNwYWNpbmdcIl0pfShiKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYil7cmV0dXJuIGEuY29uc3VtZUxlbmd0aE9yUGVyY2VudChiKXx8YS5jb25zdW1lVG9rZW4oL15hdXRvLyxiKX1mdW5jdGlvbiBkKGIpe3ZhciBkPWEuY29uc3VtZUxpc3QoW2EuaWdub3JlKGEuY29uc3VtZVRva2VuLmJpbmQobnVsbCwvXnJlY3QvKSksYS5pZ25vcmUoYS5jb25zdW1lVG9rZW4uYmluZChudWxsLC9eXFwoLykpLGEuY29uc3VtZVJlcGVhdGVkLmJpbmQobnVsbCxjLC9eLC8pLGEuaWdub3JlKGEuY29uc3VtZVRva2VuLmJpbmQobnVsbCwvXlxcKS8pKV0sYik7aWYoZCYmND09ZFswXS5sZW5ndGgpcmV0dXJuIGRbMF19ZnVuY3Rpb24gZShiLGMpe3JldHVyblwiYXV0b1wiPT1ifHxcImF1dG9cIj09Yz9bITAsITEsZnVuY3Rpb24oZCl7dmFyIGU9ZD9iOmM7aWYoXCJhdXRvXCI9PWUpcmV0dXJuXCJhdXRvXCI7dmFyIGY9YS5tZXJnZURpbWVuc2lvbnMoZSxlKTtyZXR1cm4gZlsyXShmWzBdKX1dOmEubWVyZ2VEaW1lbnNpb25zKGIsYyl9ZnVuY3Rpb24gZihhKXtyZXR1cm5cInJlY3QoXCIrYStcIilcIn12YXIgZz1hLm1lcmdlV3JhcHBlZE5lc3RlZFJlcGVhdGVkLmJpbmQobnVsbCxmLGUsXCIsIFwiKTthLnBhcnNlQm94PWQsYS5tZXJnZUJveGVzPWcsYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihkLGcsW1wiY2xpcFwiXSl9KGIpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9MDtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1rP2JbYysrXTphfSl9fWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGF9ZnVuY3Rpb24gZShiKXtpZihcIm5vbmVcIj09KGI9Yi50b0xvd2VyQ2FzZSgpLnRyaW0oKSkpcmV0dXJuW107Zm9yKHZhciBjLGQ9L1xccyooXFx3KylcXCgoW14pXSopXFwpL2csZT1bXSxmPTA7Yz1kLmV4ZWMoYik7KXtpZihjLmluZGV4IT1mKXJldHVybjtmPWMuaW5kZXgrY1swXS5sZW5ndGg7dmFyIGc9Y1sxXSxoPW5bZ107aWYoIWgpcmV0dXJuO3ZhciBpPWNbMl0uc3BsaXQoXCIsXCIpLGo9aFswXTtpZihqLmxlbmd0aDxpLmxlbmd0aClyZXR1cm47Zm9yKHZhciBrPVtdLG89MDtvPGoubGVuZ3RoO28rKyl7dmFyIHAscT1pW29dLHI9altvXTtpZih2b2lkIDA9PT0ocD1xP3tBOmZ1bmN0aW9uKGIpe3JldHVyblwiMFwiPT1iLnRyaW0oKT9tOmEucGFyc2VBbmdsZShiKX0sTjphLnBhcnNlTnVtYmVyLFQ6YS5wYXJzZUxlbmd0aE9yUGVyY2VudCxMOmEucGFyc2VMZW5ndGh9W3IudG9VcHBlckNhc2UoKV0ocSk6e2E6bSxuOmtbMF0sdDpsfVtyXSkpcmV0dXJuO2sucHVzaChwKX1pZihlLnB1c2goe3Q6ZyxkOmt9KSxkLmxhc3RJbmRleD09Yi5sZW5ndGgpcmV0dXJuIGV9fWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEudG9GaXhlZCg2KS5yZXBsYWNlKFwiLjAwMDAwMFwiLFwiXCIpfWZ1bmN0aW9uIGcoYixjKXtpZihiLmRlY29tcG9zaXRpb25QYWlyIT09Yyl7Yi5kZWNvbXBvc2l0aW9uUGFpcj1jO3ZhciBkPWEubWFrZU1hdHJpeERlY29tcG9zaXRpb24oYil9aWYoYy5kZWNvbXBvc2l0aW9uUGFpciE9PWIpe2MuZGVjb21wb3NpdGlvblBhaXI9Yjt2YXIgZT1hLm1ha2VNYXRyaXhEZWNvbXBvc2l0aW9uKGMpfXJldHVybiBudWxsPT1kWzBdfHxudWxsPT1lWzBdP1tbITFdLFshMF0sZnVuY3Rpb24oYSl7cmV0dXJuIGE/Y1swXS5kOmJbMF0uZH1dOihkWzBdLnB1c2goMCksZVswXS5wdXNoKDEpLFtkLGUsZnVuY3Rpb24oYil7dmFyIGM9YS5xdWF0KGRbMF1bM10sZVswXVszXSxiWzVdKTtyZXR1cm4gYS5jb21wb3NlTWF0cml4KGJbMF0sYlsxXSxiWzJdLGMsYls0XSkubWFwKGYpLmpvaW4oXCIsXCIpfV0pfWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGEucmVwbGFjZSgvW3h5XS8sXCJcIil9ZnVuY3Rpb24gaShhKXtyZXR1cm4gYS5yZXBsYWNlKC8oeHx5fHp8M2QpPyQvLFwiM2RcIil9ZnVuY3Rpb24gaihiLGMpe3ZhciBkPWEubWFrZU1hdHJpeERlY29tcG9zaXRpb24mJiEwLGU9ITE7aWYoIWIubGVuZ3RofHwhYy5sZW5ndGgpe2IubGVuZ3RofHwoZT0hMCxiPWMsYz1bXSk7Zm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBqPWJbZl0udCxrPWJbZl0uZCxsPVwic2NhbGVcIj09ai5zdWJzdHIoMCw1KT8xOjA7Yy5wdXNoKHt0OmosZDprLm1hcChmdW5jdGlvbihhKXtpZihcIm51bWJlclwiPT10eXBlb2YgYSlyZXR1cm4gbDt2YXIgYj17fTtmb3IodmFyIGMgaW4gYSliW2NdPWw7cmV0dXJuIGJ9KX0pfX12YXIgbT1mdW5jdGlvbihhLGIpe3JldHVyblwicGVyc3BlY3RpdmVcIj09YSYmXCJwZXJzcGVjdGl2ZVwiPT1ifHwoXCJtYXRyaXhcIj09YXx8XCJtYXRyaXgzZFwiPT1hKSYmKFwibWF0cml4XCI9PWJ8fFwibWF0cml4M2RcIj09Yil9LG89W10scD1bXSxxPVtdO2lmKGIubGVuZ3RoIT1jLmxlbmd0aCl7aWYoIWQpcmV0dXJuO3ZhciByPWcoYixjKTtvPVtyWzBdXSxwPVtyWzFdXSxxPVtbXCJtYXRyaXhcIixbclsyXV1dXX1lbHNlIGZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKXt2YXIgaixzPWJbZl0udCx0PWNbZl0udCx1PWJbZl0uZCx2PWNbZl0uZCx3PW5bc10seD1uW3RdO2lmKG0ocyx0KSl7aWYoIWQpcmV0dXJuO3ZhciByPWcoW2JbZl1dLFtjW2ZdXSk7by5wdXNoKHJbMF0pLHAucHVzaChyWzFdKSxxLnB1c2goW1wibWF0cml4XCIsW3JbMl1dXSl9ZWxzZXtpZihzPT10KWo9cztlbHNlIGlmKHdbMl0mJnhbMl0mJmgocyk9PWgodCkpaj1oKHMpLHU9d1syXSh1KSx2PXhbMl0odik7ZWxzZXtpZighd1sxXXx8IXhbMV18fGkocykhPWkodCkpe2lmKCFkKXJldHVybjt2YXIgcj1nKGIsYyk7bz1bclswXV0scD1bclsxXV0scT1bW1wibWF0cml4XCIsW3JbMl1dXV07YnJlYWt9aj1pKHMpLHU9d1sxXSh1KSx2PXhbMV0odil9Zm9yKHZhciB5PVtdLHo9W10sQT1bXSxCPTA7Qjx1Lmxlbmd0aDtCKyspe3ZhciBDPVwibnVtYmVyXCI9PXR5cGVvZiB1W0JdP2EubWVyZ2VOdW1iZXJzOmEubWVyZ2VEaW1lbnNpb25zLHI9Qyh1W0JdLHZbQl0pO3lbQl09clswXSx6W0JdPXJbMV0sQS5wdXNoKHJbMl0pfW8ucHVzaCh5KSxwLnB1c2goeikscS5wdXNoKFtqLEFdKX19aWYoZSl7dmFyIEQ9bztvPXAscD1EfXJldHVybltvLHAsZnVuY3Rpb24oYSl7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9YS5tYXAoZnVuY3Rpb24oYSxjKXtyZXR1cm4gcVtiXVsxXVtjXShhKX0pLmpvaW4oXCIsXCIpO3JldHVyblwibWF0cml4XCI9PXFbYl1bMF0mJjE2PT1jLnNwbGl0KFwiLFwiKS5sZW5ndGgmJihxW2JdWzBdPVwibWF0cml4M2RcIikscVtiXVswXStcIihcIitjK1wiKVwifSkuam9pbihcIiBcIil9XX12YXIgaz1udWxsLGw9e3B4OjB9LG09e2RlZzowfSxuPXttYXRyaXg6W1wiTk5OTk5OXCIsW2ssaywwLDAsayxrLDAsMCwwLDAsMSwwLGssaywwLDFdLGRdLG1hdHJpeDNkOltcIk5OTk5OTk5OTk5OTk5OTk5cIixkXSxyb3RhdGU6W1wiQVwiXSxyb3RhdGV4OltcIkFcIl0scm90YXRleTpbXCJBXCJdLHJvdGF0ZXo6W1wiQVwiXSxyb3RhdGUzZDpbXCJOTk5BXCJdLHBlcnNwZWN0aXZlOltcIkxcIl0sc2NhbGU6W1wiTm5cIixjKFtrLGssMV0pLGRdLHNjYWxleDpbXCJOXCIsYyhbaywxLDFdKSxjKFtrLDFdKV0sc2NhbGV5OltcIk5cIixjKFsxLGssMV0pLGMoWzEsa10pXSxzY2FsZXo6W1wiTlwiLGMoWzEsMSxrXSldLHNjYWxlM2Q6W1wiTk5OXCIsZF0sc2tldzpbXCJBYVwiLG51bGwsZF0sc2tld3g6W1wiQVwiLG51bGwsYyhbayxtXSldLHNrZXd5OltcIkFcIixudWxsLGMoW20sa10pXSx0cmFuc2xhdGU6W1wiVHRcIixjKFtrLGssbF0pLGRdLHRyYW5zbGF0ZXg6W1wiVFwiLGMoW2ssbCxsXSksYyhbayxsXSldLHRyYW5zbGF0ZXk6W1wiVFwiLGMoW2wsayxsXSksYyhbbCxrXSldLHRyYW5zbGF0ZXo6W1wiTFwiLGMoW2wsbCxrXSldLHRyYW5zbGF0ZTNkOltcIlRUTFwiLGRdfTthLmFkZFByb3BlcnRpZXNIYW5kbGVyKGUsaixbXCJ0cmFuc2Zvcm1cIl0pLGEudHJhbnNmb3JtVG9TdmdNYXRyaXg9ZnVuY3Rpb24oYil7dmFyIGM9YS50cmFuc2Zvcm1MaXN0VG9NYXRyaXgoZShiKSk7cmV0dXJuXCJtYXRyaXgoXCIrZihjWzBdKStcIiBcIitmKGNbMV0pK1wiIFwiK2YoY1s0XSkrXCIgXCIrZihjWzVdKStcIiBcIitmKGNbMTJdKStcIiBcIitmKGNbMTNdKStcIilcIn19KGIpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIpe2IuY29uY2F0KFthXSkuZm9yRWFjaChmdW5jdGlvbihiKXtiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSYmKGRbYV09YiksZVtiXT1hfSl9dmFyIGQ9e30sZT17fTtjKFwidHJhbnNmb3JtXCIsW1wid2Via2l0VHJhbnNmb3JtXCIsXCJtc1RyYW5zZm9ybVwiXSksYyhcInRyYW5zZm9ybU9yaWdpblwiLFtcIndlYmtpdFRyYW5zZm9ybU9yaWdpblwiXSksYyhcInBlcnNwZWN0aXZlXCIsW1wid2Via2l0UGVyc3BlY3RpdmVcIl0pLGMoXCJwZXJzcGVjdGl2ZU9yaWdpblwiLFtcIndlYmtpdFBlcnNwZWN0aXZlT3JpZ2luXCJdKSxhLnByb3BlcnR5TmFtZT1mdW5jdGlvbihhKXtyZXR1cm4gZFthXXx8YX0sYS51bnByZWZpeGVkUHJvcGVydHlOYW1lPWZ1bmN0aW9uKGEpe3JldHVybiBlW2FdfHxhfX0oYil9KCksZnVuY3Rpb24oKXtpZih2b2lkIDA9PT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLmFuaW1hdGUoW10pLm9uY2FuY2VsKXt2YXIgYTtpZih3aW5kb3cucGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdyl2YXIgYT1mdW5jdGlvbigpe3JldHVybiBwZXJmb3JtYW5jZS5ub3coKX07ZWxzZSB2YXIgYT1mdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpfTt2YXIgYj1mdW5jdGlvbihhLGIsYyl7dGhpcy50YXJnZXQ9YSx0aGlzLmN1cnJlbnRUaW1lPWIsdGhpcy50aW1lbGluZVRpbWU9Yyx0aGlzLnR5cGU9XCJjYW5jZWxcIix0aGlzLmJ1YmJsZXM9ITEsdGhpcy5jYW5jZWxhYmxlPSExLHRoaXMuY3VycmVudFRhcmdldD1hLHRoaXMuZGVmYXVsdFByZXZlbnRlZD0hMSx0aGlzLmV2ZW50UGhhc2U9RXZlbnQuQVRfVEFSR0VULHRoaXMudGltZVN0YW1wPURhdGUubm93KCl9LGM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU7d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oZCxlKXt2YXIgZj1jLmNhbGwodGhpcyxkLGUpO2YuX2NhbmNlbEhhbmRsZXJzPVtdLGYub25jYW5jZWw9bnVsbDt2YXIgZz1mLmNhbmNlbDtmLmNhbmNlbD1mdW5jdGlvbigpe2cuY2FsbCh0aGlzKTt2YXIgYz1uZXcgYih0aGlzLG51bGwsYSgpKSxkPXRoaXMuX2NhbmNlbEhhbmRsZXJzLmNvbmNhdCh0aGlzLm9uY2FuY2VsP1t0aGlzLm9uY2FuY2VsXTpbXSk7c2V0VGltZW91dChmdW5jdGlvbigpe2QuZm9yRWFjaChmdW5jdGlvbihhKXthLmNhbGwoYy50YXJnZXQsYyl9KX0sMCl9O3ZhciBoPWYuYWRkRXZlbnRMaXN0ZW5lcjtmLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiZcImNhbmNlbFwiPT1hP3RoaXMuX2NhbmNlbEhhbmRsZXJzLnB1c2goYik6aC5jYWxsKHRoaXMsYSxiKX07dmFyIGk9Zi5yZW1vdmVFdmVudExpc3RlbmVyO3JldHVybiBmLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiKXtpZihcImNhbmNlbFwiPT1hKXt2YXIgYz10aGlzLl9jYW5jZWxIYW5kbGVycy5pbmRleE9mKGIpO2M+PTAmJnRoaXMuX2NhbmNlbEhhbmRsZXJzLnNwbGljZShjLDEpfWVsc2UgaS5jYWxsKHRoaXMsYSxiKX0sZn19fSgpLGZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxjPW51bGwsZD0hMTt0cnl7dmFyIGU9Z2V0Q29tcHV0ZWRTdHlsZShiKS5nZXRQcm9wZXJ0eVZhbHVlKFwib3BhY2l0eVwiKSxmPVwiMFwiPT1lP1wiMVwiOlwiMFwiO2M9Yi5hbmltYXRlKHtvcGFjaXR5OltmLGZdfSx7ZHVyYXRpb246MX0pLGMuY3VycmVudFRpbWU9MCxkPWdldENvbXB1dGVkU3R5bGUoYikuZ2V0UHJvcGVydHlWYWx1ZShcIm9wYWNpdHlcIik9PWZ9Y2F0Y2goYSl7fWZpbmFsbHl7YyYmYy5jYW5jZWwoKX1pZighZCl7dmFyIGc9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU7d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oYixjKXtyZXR1cm4gd2luZG93LlN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZBcnJheS5wcm90b3R5cGUuZnJvbSYmYltTeW1ib2wuaXRlcmF0b3JdJiYoYj1BcnJheS5mcm9tKGIpKSxBcnJheS5pc0FycmF5KGIpfHxudWxsPT09Ynx8KGI9YS5jb252ZXJ0VG9BcnJheUZvcm0oYikpLGcuY2FsbCh0aGlzLGIsYyl9fX0oYSksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGM9Yi50aW1lbGluZTtjLmN1cnJlbnRUaW1lPWEsYy5fZGlzY2FyZEFuaW1hdGlvbnMoKSwwPT1jLl9hbmltYXRpb25zLmxlbmd0aD9mPSExOnJlcXVlc3RBbmltYXRpb25GcmFtZShkKX12YXIgZT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7cmV0dXJuIGUoZnVuY3Rpb24oYyl7Yi50aW1lbGluZS5fdXBkYXRlQW5pbWF0aW9uc1Byb21pc2VzKCksYShjKSxiLnRpbWVsaW5lLl91cGRhdGVBbmltYXRpb25zUHJvbWlzZXMoKX0pfSxiLkFuaW1hdGlvblRpbWVsaW5lPWZ1bmN0aW9uKCl7dGhpcy5fYW5pbWF0aW9ucz1bXSx0aGlzLmN1cnJlbnRUaW1lPXZvaWQgMH0sYi5BbmltYXRpb25UaW1lbGluZS5wcm90b3R5cGU9e2dldEFuaW1hdGlvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzY2FyZEFuaW1hdGlvbnMoKSx0aGlzLl9hbmltYXRpb25zLnNsaWNlKCl9LF91cGRhdGVBbmltYXRpb25zUHJvbWlzZXM6ZnVuY3Rpb24oKXtiLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXM9Yi5hbmltYXRpb25zV2l0aFByb21pc2VzLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYS5fdXBkYXRlUHJvbWlzZXMoKX0pfSxfZGlzY2FyZEFuaW1hdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVBbmltYXRpb25zUHJvbWlzZXMoKSx0aGlzLl9hbmltYXRpb25zPXRoaXMuX2FuaW1hdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVyblwiZmluaXNoZWRcIiE9YS5wbGF5U3RhdGUmJlwiaWRsZVwiIT1hLnBsYXlTdGF0ZX0pfSxfcGxheTpmdW5jdGlvbihhKXt2YXIgYz1uZXcgYi5BbmltYXRpb24oYSx0aGlzKTtyZXR1cm4gdGhpcy5fYW5pbWF0aW9ucy5wdXNoKGMpLGIucmVzdGFydFdlYkFuaW1hdGlvbnNOZXh0VGljaygpLGMuX3VwZGF0ZVByb21pc2VzKCksYy5fYW5pbWF0aW9uLnBsYXkoKSxjLl91cGRhdGVQcm9taXNlcygpLGN9LHBsYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEucmVtb3ZlKCksdGhpcy5fcGxheShhKX19O3ZhciBmPSExO2IucmVzdGFydFdlYkFuaW1hdGlvbnNOZXh0VGljaz1mdW5jdGlvbigpe2Z8fChmPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShkKSl9O3ZhciBnPW5ldyBiLkFuaW1hdGlvblRpbWVsaW5lO2IudGltZWxpbmU9Zzt0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5kb2N1bWVudCxcInRpbWVsaW5lXCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ319KX1jYXRjaChhKXt9dHJ5e3dpbmRvdy5kb2N1bWVudC50aW1lbGluZT1nfWNhdGNoKGEpe319KDAsYyksZnVuY3Rpb24oYSxiLGMpe2IuYW5pbWF0aW9uc1dpdGhQcm9taXNlcz1bXSxiLkFuaW1hdGlvbj1mdW5jdGlvbihiLGMpe2lmKHRoaXMuaWQ9XCJcIixiJiZiLl9pZCYmKHRoaXMuaWQ9Yi5faWQpLHRoaXMuZWZmZWN0PWIsYiYmKGIuX2FuaW1hdGlvbj10aGlzKSwhYyl0aHJvdyBuZXcgRXJyb3IoXCJBbmltYXRpb24gd2l0aCBudWxsIHRpbWVsaW5lIGlzIG5vdCBzdXBwb3J0ZWRcIik7dGhpcy5fdGltZWxpbmU9Yyx0aGlzLl9zZXF1ZW5jZU51bWJlcj1hLnNlcXVlbmNlTnVtYmVyKyssdGhpcy5faG9sZFRpbWU9MCx0aGlzLl9wYXVzZWQ9ITEsdGhpcy5faXNHcm91cD0hMSx0aGlzLl9hbmltYXRpb249bnVsbCx0aGlzLl9jaGlsZEFuaW1hdGlvbnM9W10sdGhpcy5fY2FsbGJhY2s9bnVsbCx0aGlzLl9vbGRQbGF5U3RhdGU9XCJpZGxlXCIsdGhpcy5fcmVidWlsZFVuZGVybHlpbmdBbmltYXRpb24oKSx0aGlzLl9hbmltYXRpb24uY2FuY2VsKCksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sYi5BbmltYXRpb24ucHJvdG90eXBlPXtfdXBkYXRlUHJvbWlzZXM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9vbGRQbGF5U3RhdGUsYj10aGlzLnBsYXlTdGF0ZTtyZXR1cm4gdGhpcy5fcmVhZHlQcm9taXNlJiZiIT09YSYmKFwiaWRsZVwiPT1iPyh0aGlzLl9yZWplY3RSZWFkeVByb21pc2UoKSx0aGlzLl9yZWFkeVByb21pc2U9dm9pZCAwKTpcInBlbmRpbmdcIj09YT90aGlzLl9yZXNvbHZlUmVhZHlQcm9taXNlKCk6XCJwZW5kaW5nXCI9PWImJih0aGlzLl9yZWFkeVByb21pc2U9dm9pZCAwKSksdGhpcy5fZmluaXNoZWRQcm9taXNlJiZiIT09YSYmKFwiaWRsZVwiPT1iPyh0aGlzLl9yZWplY3RGaW5pc2hlZFByb21pc2UoKSx0aGlzLl9maW5pc2hlZFByb21pc2U9dm9pZCAwKTpcImZpbmlzaGVkXCI9PWI/dGhpcy5fcmVzb2x2ZUZpbmlzaGVkUHJvbWlzZSgpOlwiZmluaXNoZWRcIj09YSYmKHRoaXMuX2ZpbmlzaGVkUHJvbWlzZT12b2lkIDApKSx0aGlzLl9vbGRQbGF5U3RhdGU9dGhpcy5wbGF5U3RhdGUsdGhpcy5fcmVhZHlQcm9taXNlfHx0aGlzLl9maW5pc2hlZFByb21pc2V9LF9yZWJ1aWxkVW5kZXJseWluZ0FuaW1hdGlvbjpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCk7dmFyIGEsYyxkLGUsZj0hIXRoaXMuX2FuaW1hdGlvbjtmJiYoYT10aGlzLnBsYXliYWNrUmF0ZSxjPXRoaXMuX3BhdXNlZCxkPXRoaXMuc3RhcnRUaW1lLGU9dGhpcy5jdXJyZW50VGltZSx0aGlzLl9hbmltYXRpb24uY2FuY2VsKCksdGhpcy5fYW5pbWF0aW9uLl93cmFwcGVyPW51bGwsdGhpcy5fYW5pbWF0aW9uPW51bGwpLCghdGhpcy5lZmZlY3R8fHRoaXMuZWZmZWN0IGluc3RhbmNlb2Ygd2luZG93LktleWZyYW1lRWZmZWN0KSYmKHRoaXMuX2FuaW1hdGlvbj1iLm5ld1VuZGVybHlpbmdBbmltYXRpb25Gb3JLZXlmcmFtZUVmZmVjdCh0aGlzLmVmZmVjdCksYi5iaW5kQW5pbWF0aW9uRm9yS2V5ZnJhbWVFZmZlY3QodGhpcykpLCh0aGlzLmVmZmVjdCBpbnN0YW5jZW9mIHdpbmRvdy5TZXF1ZW5jZUVmZmVjdHx8dGhpcy5lZmZlY3QgaW5zdGFuY2VvZiB3aW5kb3cuR3JvdXBFZmZlY3QpJiYodGhpcy5fYW5pbWF0aW9uPWIubmV3VW5kZXJseWluZ0FuaW1hdGlvbkZvckdyb3VwKHRoaXMuZWZmZWN0KSxiLmJpbmRBbmltYXRpb25Gb3JHcm91cCh0aGlzKSksdGhpcy5lZmZlY3QmJnRoaXMuZWZmZWN0Ll9vbnNhbXBsZSYmYi5iaW5kQW5pbWF0aW9uRm9yQ3VzdG9tRWZmZWN0KHRoaXMpLGYmJigxIT1hJiYodGhpcy5wbGF5YmFja1JhdGU9YSksbnVsbCE9PWQ/dGhpcy5zdGFydFRpbWU9ZDpudWxsIT09ZT90aGlzLmN1cnJlbnRUaW1lPWU6bnVsbCE9PXRoaXMuX2hvbGRUaW1lJiYodGhpcy5jdXJyZW50VGltZT10aGlzLl9ob2xkVGltZSksYyYmdGhpcy5wYXVzZSgpKSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxfdXBkYXRlQ2hpbGRyZW46ZnVuY3Rpb24oKXtpZih0aGlzLmVmZmVjdCYmXCJpZGxlXCIhPXRoaXMucGxheVN0YXRlKXt2YXIgYT10aGlzLmVmZmVjdC5fdGltaW5nLmRlbGF5O3RoaXMuX2NoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGMpe3RoaXMuX2FycmFuZ2VDaGlsZHJlbihjLGEpLHRoaXMuZWZmZWN0IGluc3RhbmNlb2Ygd2luZG93LlNlcXVlbmNlRWZmZWN0JiYoYSs9Yi5ncm91cENoaWxkRHVyYXRpb24oYy5lZmZlY3QpKX0uYmluZCh0aGlzKSl9fSxfc2V0RXh0ZXJuYWxBbmltYXRpb246ZnVuY3Rpb24oYSl7aWYodGhpcy5lZmZlY3QmJnRoaXMuX2lzR3JvdXApZm9yKHZhciBiPTA7Yjx0aGlzLmVmZmVjdC5jaGlsZHJlbi5sZW5ndGg7YisrKXRoaXMuZWZmZWN0LmNoaWxkcmVuW2JdLl9hbmltYXRpb249YSx0aGlzLl9jaGlsZEFuaW1hdGlvbnNbYl0uX3NldEV4dGVybmFsQW5pbWF0aW9uKGEpfSxfY29uc3RydWN0Q2hpbGRBbmltYXRpb25zOmZ1bmN0aW9uKCl7aWYodGhpcy5lZmZlY3QmJnRoaXMuX2lzR3JvdXApe3ZhciBhPXRoaXMuZWZmZWN0Ll90aW1pbmcuZGVsYXk7dGhpcy5fcmVtb3ZlQ2hpbGRBbmltYXRpb25zKCksdGhpcy5lZmZlY3QuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjKXt2YXIgZD1iLnRpbWVsaW5lLl9wbGF5KGMpO3RoaXMuX2NoaWxkQW5pbWF0aW9ucy5wdXNoKGQpLGQucGxheWJhY2tSYXRlPXRoaXMucGxheWJhY2tSYXRlLHRoaXMuX3BhdXNlZCYmZC5wYXVzZSgpLGMuX2FuaW1hdGlvbj10aGlzLmVmZmVjdC5fYW5pbWF0aW9uLHRoaXMuX2FycmFuZ2VDaGlsZHJlbihkLGEpLHRoaXMuZWZmZWN0IGluc3RhbmNlb2Ygd2luZG93LlNlcXVlbmNlRWZmZWN0JiYoYSs9Yi5ncm91cENoaWxkRHVyYXRpb24oYykpfS5iaW5kKHRoaXMpKX19LF9hcnJhbmdlQ2hpbGRyZW46ZnVuY3Rpb24oYSxiKXtudWxsPT09dGhpcy5zdGFydFRpbWU/YS5jdXJyZW50VGltZT10aGlzLmN1cnJlbnRUaW1lLWIvdGhpcy5wbGF5YmFja1JhdGU6YS5zdGFydFRpbWUhPT10aGlzLnN0YXJ0VGltZStiL3RoaXMucGxheWJhY2tSYXRlJiYoYS5zdGFydFRpbWU9dGhpcy5zdGFydFRpbWUrYi90aGlzLnBsYXliYWNrUmF0ZSl9LGdldCB0aW1lbGluZSgpe3JldHVybiB0aGlzLl90aW1lbGluZX0sZ2V0IHBsYXlTdGF0ZSgpe3JldHVybiB0aGlzLl9hbmltYXRpb24/dGhpcy5fYW5pbWF0aW9uLnBsYXlTdGF0ZTpcImlkbGVcIn0sZ2V0IGZpbmlzaGVkKCl7cmV0dXJuIHdpbmRvdy5Qcm9taXNlPyh0aGlzLl9maW5pc2hlZFByb21pc2V8fCgtMT09Yi5hbmltYXRpb25zV2l0aFByb21pc2VzLmluZGV4T2YodGhpcykmJmIuYW5pbWF0aW9uc1dpdGhQcm9taXNlcy5wdXNoKHRoaXMpLHRoaXMuX2ZpbmlzaGVkUHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe3RoaXMuX3Jlc29sdmVGaW5pc2hlZFByb21pc2U9ZnVuY3Rpb24oKXthKHRoaXMpfSx0aGlzLl9yZWplY3RGaW5pc2hlZFByb21pc2U9ZnVuY3Rpb24oKXtiKHt0eXBlOkRPTUV4Y2VwdGlvbi5BQk9SVF9FUlIsbmFtZTpcIkFib3J0RXJyb3JcIn0pfX0uYmluZCh0aGlzKSksXCJmaW5pc2hlZFwiPT10aGlzLnBsYXlTdGF0ZSYmdGhpcy5fcmVzb2x2ZUZpbmlzaGVkUHJvbWlzZSgpKSx0aGlzLl9maW5pc2hlZFByb21pc2UpOihjb25zb2xlLndhcm4oXCJBbmltYXRpb24gUHJvbWlzZXMgcmVxdWlyZSBKYXZhU2NyaXB0IFByb21pc2UgY29uc3RydWN0b3JcIiksbnVsbCl9LGdldCByZWFkeSgpe3JldHVybiB3aW5kb3cuUHJvbWlzZT8odGhpcy5fcmVhZHlQcm9taXNlfHwoLTE9PWIuYW5pbWF0aW9uc1dpdGhQcm9taXNlcy5pbmRleE9mKHRoaXMpJiZiLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXMucHVzaCh0aGlzKSx0aGlzLl9yZWFkeVByb21pc2U9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXt0aGlzLl9yZXNvbHZlUmVhZHlQcm9taXNlPWZ1bmN0aW9uKCl7YSh0aGlzKX0sdGhpcy5fcmVqZWN0UmVhZHlQcm9taXNlPWZ1bmN0aW9uKCl7Yih7dHlwZTpET01FeGNlcHRpb24uQUJPUlRfRVJSLG5hbWU6XCJBYm9ydEVycm9yXCJ9KX19LmJpbmQodGhpcykpLFwicGVuZGluZ1wiIT09dGhpcy5wbGF5U3RhdGUmJnRoaXMuX3Jlc29sdmVSZWFkeVByb21pc2UoKSksdGhpcy5fcmVhZHlQcm9taXNlKTooY29uc29sZS53YXJuKFwiQW5pbWF0aW9uIFByb21pc2VzIHJlcXVpcmUgSmF2YVNjcmlwdCBQcm9taXNlIGNvbnN0cnVjdG9yXCIpLG51bGwpfSxnZXQgb25maW5pc2goKXtyZXR1cm4gdGhpcy5fYW5pbWF0aW9uLm9uZmluaXNofSxzZXQgb25maW5pc2goYSl7dGhpcy5fYW5pbWF0aW9uLm9uZmluaXNoPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/ZnVuY3Rpb24oYil7Yi50YXJnZXQ9dGhpcyxhLmNhbGwodGhpcyxiKX0uYmluZCh0aGlzKTphfSxnZXQgb25jYW5jZWwoKXtyZXR1cm4gdGhpcy5fYW5pbWF0aW9uLm9uY2FuY2VsfSxzZXQgb25jYW5jZWwoYSl7dGhpcy5fYW5pbWF0aW9uLm9uY2FuY2VsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/ZnVuY3Rpb24oYil7Yi50YXJnZXQ9dGhpcyxhLmNhbGwodGhpcyxiKX0uYmluZCh0aGlzKTphfSxnZXQgY3VycmVudFRpbWUoKXt0aGlzLl91cGRhdGVQcm9taXNlcygpO3ZhciBhPXRoaXMuX2FuaW1hdGlvbi5jdXJyZW50VGltZTtyZXR1cm4gdGhpcy5fdXBkYXRlUHJvbWlzZXMoKSxhfSxzZXQgY3VycmVudFRpbWUoYSl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKSx0aGlzLl9hbmltYXRpb24uY3VycmVudFRpbWU9aXNGaW5pdGUoYSk/YTpNYXRoLnNpZ24oYSkqTnVtYmVyLk1BWF9WQUxVRSx0aGlzLl9yZWdpc3RlcigpLHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihiLGMpe2IuY3VycmVudFRpbWU9YS1jfSksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sZ2V0IHN0YXJ0VGltZSgpe3JldHVybiB0aGlzLl9hbmltYXRpb24uc3RhcnRUaW1lfSxzZXQgc3RhcnRUaW1lKGEpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCksdGhpcy5fYW5pbWF0aW9uLnN0YXJ0VGltZT1pc0Zpbml0ZShhKT9hOk1hdGguc2lnbihhKSpOdW1iZXIuTUFYX1ZBTFVFLHRoaXMuX3JlZ2lzdGVyKCksdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGIsYyl7Yi5zdGFydFRpbWU9YStjfSksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sZ2V0IHBsYXliYWNrUmF0ZSgpe3JldHVybiB0aGlzLl9hbmltYXRpb24ucGxheWJhY2tSYXRlfSxzZXQgcGxheWJhY2tSYXRlKGEpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCk7dmFyIGI9dGhpcy5jdXJyZW50VGltZTt0aGlzLl9hbmltYXRpb24ucGxheWJhY2tSYXRlPWEsdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGIpe2IucGxheWJhY2tSYXRlPWF9KSxudWxsIT09YiYmKHRoaXMuY3VycmVudFRpbWU9YiksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0scGxheTpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCksdGhpcy5fcGF1c2VkPSExLHRoaXMuX2FuaW1hdGlvbi5wbGF5KCksLTE9PXRoaXMuX3RpbWVsaW5lLl9hbmltYXRpb25zLmluZGV4T2YodGhpcykmJnRoaXMuX3RpbWVsaW5lLl9hbmltYXRpb25zLnB1c2godGhpcyksdGhpcy5fcmVnaXN0ZXIoKSxiLmF3YWl0U3RhcnRUaW1lKHRoaXMpLHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihhKXt2YXIgYj1hLmN1cnJlbnRUaW1lO2EucGxheSgpLGEuY3VycmVudFRpbWU9Yn0pLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LHBhdXNlOmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKSx0aGlzLmN1cnJlbnRUaW1lJiYodGhpcy5faG9sZFRpbWU9dGhpcy5jdXJyZW50VGltZSksdGhpcy5fYW5pbWF0aW9uLnBhdXNlKCksdGhpcy5fcmVnaXN0ZXIoKSx0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYSl7YS5wYXVzZSgpfSksdGhpcy5fcGF1c2VkPSEwLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LGZpbmlzaDpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCksdGhpcy5fYW5pbWF0aW9uLmZpbmlzaCgpLHRoaXMuX3JlZ2lzdGVyKCksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sY2FuY2VsOmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKSx0aGlzLl9hbmltYXRpb24uY2FuY2VsKCksdGhpcy5fcmVnaXN0ZXIoKSx0aGlzLl9yZW1vdmVDaGlsZEFuaW1hdGlvbnMoKSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxyZXZlcnNlOmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKTt2YXIgYT10aGlzLmN1cnJlbnRUaW1lO3RoaXMuX2FuaW1hdGlvbi5yZXZlcnNlKCksdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGEpe2EucmV2ZXJzZSgpfSksbnVsbCE9PWEmJih0aGlzLmN1cnJlbnRUaW1lPWEpLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LGFkZEV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iO1wiZnVuY3Rpb25cIj09dHlwZW9mIGImJihjPWZ1bmN0aW9uKGEpe2EudGFyZ2V0PXRoaXMsYi5jYWxsKHRoaXMsYSl9LmJpbmQodGhpcyksYi5fd3JhcHBlcj1jKSx0aGlzLl9hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihhLGMpfSxyZW1vdmVFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYil7dGhpcy5fYW5pbWF0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiJiZiLl93cmFwcGVyfHxiKX0sX3JlbW92ZUNoaWxkQW5pbWF0aW9uczpmdW5jdGlvbigpe2Zvcig7dGhpcy5fY2hpbGRBbmltYXRpb25zLmxlbmd0aDspdGhpcy5fY2hpbGRBbmltYXRpb25zLnBvcCgpLmNhbmNlbCgpfSxfZm9yRWFjaENoaWxkOmZ1bmN0aW9uKGIpe3ZhciBjPTA7aWYodGhpcy5lZmZlY3QuY2hpbGRyZW4mJnRoaXMuX2NoaWxkQW5pbWF0aW9ucy5sZW5ndGg8dGhpcy5lZmZlY3QuY2hpbGRyZW4ubGVuZ3RoJiZ0aGlzLl9jb25zdHJ1Y3RDaGlsZEFuaW1hdGlvbnMoKSx0aGlzLl9jaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhKXtiLmNhbGwodGhpcyxhLGMpLHRoaXMuZWZmZWN0IGluc3RhbmNlb2Ygd2luZG93LlNlcXVlbmNlRWZmZWN0JiYoYys9YS5lZmZlY3QuYWN0aXZlRHVyYXRpb24pfS5iaW5kKHRoaXMpKSxcInBlbmRpbmdcIiE9dGhpcy5wbGF5U3RhdGUpe3ZhciBkPXRoaXMuZWZmZWN0Ll90aW1pbmcsZT10aGlzLmN1cnJlbnRUaW1lO251bGwhPT1lJiYoZT1hLmNhbGN1bGF0ZUl0ZXJhdGlvblByb2dyZXNzKGEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb24oZCksZSxkKSksKG51bGw9PWV8fGlzTmFOKGUpKSYmdGhpcy5fcmVtb3ZlQ2hpbGRBbmltYXRpb25zKCl9fX0sd2luZG93LkFuaW1hdGlvbj1iLkFuaW1hdGlvbn0oYSxjKSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChiKXt0aGlzLl9mcmFtZXM9YS5ub3JtYWxpemVLZXlmcmFtZXMoYil9ZnVuY3Rpb24gZSgpe2Zvcih2YXIgYT0hMTtpLmxlbmd0aDspaS5zaGlmdCgpLl91cGRhdGVDaGlsZHJlbigpLGE9ITA7cmV0dXJuIGF9dmFyIGY9ZnVuY3Rpb24oYSl7aWYoYS5fYW5pbWF0aW9uPXZvaWQgMCxhIGluc3RhbmNlb2Ygd2luZG93LlNlcXVlbmNlRWZmZWN0fHxhIGluc3RhbmNlb2Ygd2luZG93Lkdyb3VwRWZmZWN0KWZvcih2YXIgYj0wO2I8YS5jaGlsZHJlbi5sZW5ndGg7YisrKWYoYS5jaGlsZHJlbltiXSl9O2IucmVtb3ZlTXVsdGk9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXTtkLl9wYXJlbnQ/KC0xPT1iLmluZGV4T2YoZC5fcGFyZW50KSYmYi5wdXNoKGQuX3BhcmVudCksZC5fcGFyZW50LmNoaWxkcmVuLnNwbGljZShkLl9wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihkKSwxKSxkLl9wYXJlbnQ9bnVsbCxmKGQpKTpkLl9hbmltYXRpb24mJmQuX2FuaW1hdGlvbi5lZmZlY3Q9PWQmJihkLl9hbmltYXRpb24uY2FuY2VsKCksZC5fYW5pbWF0aW9uLmVmZmVjdD1uZXcgS2V5ZnJhbWVFZmZlY3QobnVsbCxbXSksZC5fYW5pbWF0aW9uLl9jYWxsYmFjayYmKGQuX2FuaW1hdGlvbi5fY2FsbGJhY2suX2FuaW1hdGlvbj1udWxsKSxkLl9hbmltYXRpb24uX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uKCksZihkKSl9Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyliW2NdLl9yZWJ1aWxkKCl9LGIuS2V5ZnJhbWVFZmZlY3Q9ZnVuY3Rpb24oYixjLGUsZil7cmV0dXJuIHRoaXMudGFyZ2V0PWIsdGhpcy5fcGFyZW50PW51bGwsZT1hLm51bWVyaWNUaW1pbmdUb09iamVjdChlKSx0aGlzLl90aW1pbmdJbnB1dD1hLmNsb25lVGltaW5nSW5wdXQoZSksdGhpcy5fdGltaW5nPWEubm9ybWFsaXplVGltaW5nSW5wdXQoZSksdGhpcy50aW1pbmc9YS5tYWtlVGltaW5nKGUsITEsdGhpcyksdGhpcy50aW1pbmcuX2VmZmVjdD10aGlzLFwiZnVuY3Rpb25cIj09dHlwZW9mIGM/KGEuZGVwcmVjYXRlZChcIkN1c3RvbSBLZXlmcmFtZUVmZmVjdFwiLFwiMjAxNS0wNi0yMlwiLFwiVXNlIEtleWZyYW1lRWZmZWN0Lm9uc2FtcGxlIGluc3RlYWQuXCIpLHRoaXMuX25vcm1hbGl6ZWRLZXlmcmFtZXM9Yyk6dGhpcy5fbm9ybWFsaXplZEtleWZyYW1lcz1uZXcgZChjKSx0aGlzLl9rZXlmcmFtZXM9Yyx0aGlzLmFjdGl2ZUR1cmF0aW9uPWEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb24odGhpcy5fdGltaW5nKSx0aGlzLl9pZD1mLHRoaXN9LGIuS2V5ZnJhbWVFZmZlY3QucHJvdG90eXBlPXtnZXRGcmFtZXM6ZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl9ub3JtYWxpemVkS2V5ZnJhbWVzP3RoaXMuX25vcm1hbGl6ZWRLZXlmcmFtZXM6dGhpcy5fbm9ybWFsaXplZEtleWZyYW1lcy5fZnJhbWVzfSxzZXQgb25zYW1wbGUoYSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5nZXRGcmFtZXMoKSl0aHJvdyBuZXcgRXJyb3IoXCJTZXR0aW5nIG9uc2FtcGxlIG9uIGN1c3RvbSBlZmZlY3QgS2V5ZnJhbWVFZmZlY3QgaXMgbm90IHN1cHBvcnRlZC5cIik7dGhpcy5fb25zYW1wbGU9YSx0aGlzLl9hbmltYXRpb24mJnRoaXMuX2FuaW1hdGlvbi5fcmVidWlsZFVuZGVybHlpbmdBbmltYXRpb24oKX0sZ2V0IHBhcmVudCgpe3JldHVybiB0aGlzLl9wYXJlbnR9LGNsb25lOmZ1bmN0aW9uKCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5nZXRGcmFtZXMoKSl0aHJvdyBuZXcgRXJyb3IoXCJDbG9uaW5nIGN1c3RvbSBlZmZlY3RzIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3ZhciBiPW5ldyBLZXlmcmFtZUVmZmVjdCh0aGlzLnRhcmdldCxbXSxhLmNsb25lVGltaW5nSW5wdXQodGhpcy5fdGltaW5nSW5wdXQpLHRoaXMuX2lkKTtyZXR1cm4gYi5fbm9ybWFsaXplZEtleWZyYW1lcz10aGlzLl9ub3JtYWxpemVkS2V5ZnJhbWVzLGIuX2tleWZyYW1lcz10aGlzLl9rZXlmcmFtZXMsYn0scmVtb3ZlOmZ1bmN0aW9uKCl7Yi5yZW1vdmVNdWx0aShbdGhpc10pfX07dmFyIGc9RWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZTtFbGVtZW50LnByb3RvdHlwZS5hbmltYXRlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9XCJcIjtyZXR1cm4gYyYmYy5pZCYmKGQ9Yy5pZCksYi50aW1lbGluZS5fcGxheShuZXcgYi5LZXlmcmFtZUVmZmVjdCh0aGlzLGEsYyxkKSl9O3ZhciBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImRpdlwiKTtiLm5ld1VuZGVybHlpbmdBbmltYXRpb25Gb3JLZXlmcmFtZUVmZmVjdD1mdW5jdGlvbihhKXtpZihhKXt2YXIgYj1hLnRhcmdldHx8aCxjPWEuX2tleWZyYW1lcztcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiYoYz1bXSk7dmFyIGQ9YS5fdGltaW5nSW5wdXQ7ZC5pZD1hLl9pZH1lbHNlIHZhciBiPWgsYz1bXSxkPTA7cmV0dXJuIGcuYXBwbHkoYixbYyxkXSl9LGIuYmluZEFuaW1hdGlvbkZvcktleWZyYW1lRWZmZWN0PWZ1bmN0aW9uKGEpe2EuZWZmZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmVmZmVjdC5fbm9ybWFsaXplZEtleWZyYW1lcyYmYi5iaW5kQW5pbWF0aW9uRm9yQ3VzdG9tRWZmZWN0KGEpfTt2YXIgaT1bXTtiLmF3YWl0U3RhcnRUaW1lPWZ1bmN0aW9uKGEpe251bGw9PT1hLnN0YXJ0VGltZSYmYS5faXNHcm91cCYmKDA9PWkubGVuZ3RoJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSksaS5wdXNoKGEpKX07dmFyIGo9d2luZG93LmdldENvbXB1dGVkU3R5bGU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImdldENvbXB1dGVkU3R5bGVcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtiLnRpbWVsaW5lLl91cGRhdGVBbmltYXRpb25zUHJvbWlzZXMoKTt2YXIgYT1qLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gZSgpJiYoYT1qLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksYi50aW1lbGluZS5fdXBkYXRlQW5pbWF0aW9uc1Byb21pc2VzKCksYX19KSx3aW5kb3cuS2V5ZnJhbWVFZmZlY3Q9Yi5LZXlmcmFtZUVmZmVjdCx3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QW5pbWF0aW9ucz1mdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC50aW1lbGluZS5nZXRBbmltYXRpb25zKCkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YS5lZmZlY3QmJmEuZWZmZWN0LnRhcmdldD09dGhpc30uYmluZCh0aGlzKSl9fShhLGMpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe2EuX3JlZ2lzdGVyZWR8fChhLl9yZWdpc3RlcmVkPSEwLGcucHVzaChhKSxofHwoaD0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSkpKX1mdW5jdGlvbiBlKGEpe3ZhciBiPWc7Zz1bXSxiLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5fc2VxdWVuY2VOdW1iZXItYi5fc2VxdWVuY2VOdW1iZXJ9KSxiPWIuZmlsdGVyKGZ1bmN0aW9uKGEpe2EoKTt2YXIgYj1hLl9hbmltYXRpb24/YS5fYW5pbWF0aW9uLnBsYXlTdGF0ZTpcImlkbGVcIjtyZXR1cm5cInJ1bm5pbmdcIiE9YiYmXCJwZW5kaW5nXCIhPWImJihhLl9yZWdpc3RlcmVkPSExKSxhLl9yZWdpc3RlcmVkfSksZy5wdXNoLmFwcGx5KGcsYiksZy5sZW5ndGg/KGg9ITAscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpKTpoPSExfXZhciBmPShkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXCJkaXZcIiksMCk7Yi5iaW5kQW5pbWF0aW9uRm9yQ3VzdG9tRWZmZWN0PWZ1bmN0aW9uKGIpe3ZhciBjLGU9Yi5lZmZlY3QudGFyZ2V0LGc9XCJmdW5jdGlvblwiPT10eXBlb2YgYi5lZmZlY3QuZ2V0RnJhbWVzKCk7Yz1nP2IuZWZmZWN0LmdldEZyYW1lcygpOmIuZWZmZWN0Ll9vbnNhbXBsZTt2YXIgaD1iLmVmZmVjdC50aW1pbmcsaT1udWxsO2g9YS5ub3JtYWxpemVUaW1pbmdJbnB1dChoKTt2YXIgaj1mdW5jdGlvbigpe3ZhciBkPWouX2FuaW1hdGlvbj9qLl9hbmltYXRpb24uY3VycmVudFRpbWU6bnVsbDtudWxsIT09ZCYmKGQ9YS5jYWxjdWxhdGVJdGVyYXRpb25Qcm9ncmVzcyhhLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKGgpLGQsaCksaXNOYU4oZCkmJihkPW51bGwpKSxkIT09aSYmKGc/YyhkLGUsYi5lZmZlY3QpOmMoZCxiLmVmZmVjdCxiLmVmZmVjdC5fYW5pbWF0aW9uKSksaT1kfTtqLl9hbmltYXRpb249YixqLl9yZWdpc3RlcmVkPSExLGouX3NlcXVlbmNlTnVtYmVyPWYrKyxiLl9jYWxsYmFjaz1qLGQoail9O3ZhciBnPVtdLGg9ITE7Yi5BbmltYXRpb24ucHJvdG90eXBlLl9yZWdpc3Rlcj1mdW5jdGlvbigpe3RoaXMuX2NhbGxiYWNrJiZkKHRoaXMuX2NhbGxiYWNrKX19KGEsYyksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuIGEuX3RpbWluZy5kZWxheSthLmFjdGl2ZUR1cmF0aW9uK2EuX3RpbWluZy5lbmREZWxheX1mdW5jdGlvbiBlKGIsYyxkKXt0aGlzLl9pZD1kLHRoaXMuX3BhcmVudD1udWxsLHRoaXMuY2hpbGRyZW49Ynx8W10sdGhpcy5fcmVwYXJlbnQodGhpcy5jaGlsZHJlbiksYz1hLm51bWVyaWNUaW1pbmdUb09iamVjdChjKSx0aGlzLl90aW1pbmdJbnB1dD1hLmNsb25lVGltaW5nSW5wdXQoYyksdGhpcy5fdGltaW5nPWEubm9ybWFsaXplVGltaW5nSW5wdXQoYywhMCksdGhpcy50aW1pbmc9YS5tYWtlVGltaW5nKGMsITAsdGhpcyksdGhpcy50aW1pbmcuX2VmZmVjdD10aGlzLFwiYXV0b1wiPT09dGhpcy5fdGltaW5nLmR1cmF0aW9uJiYodGhpcy5fdGltaW5nLmR1cmF0aW9uPXRoaXMuYWN0aXZlRHVyYXRpb24pfXdpbmRvdy5TZXF1ZW5jZUVmZmVjdD1mdW5jdGlvbigpe2UuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx3aW5kb3cuR3JvdXBFZmZlY3Q9ZnVuY3Rpb24oKXtlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5wcm90b3R5cGU9e19pc0FuY2VzdG9yOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj10aGlzO251bGwhPT1iOyl7aWYoYj09YSlyZXR1cm4hMDtiPWIuX3BhcmVudH1yZXR1cm4hMX0sX3JlYnVpbGQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpczthOylcImF1dG9cIj09PWEudGltaW5nLmR1cmF0aW9uJiYoYS5fdGltaW5nLmR1cmF0aW9uPWEuYWN0aXZlRHVyYXRpb24pLGE9YS5fcGFyZW50O3RoaXMuX2FuaW1hdGlvbiYmdGhpcy5fYW5pbWF0aW9uLl9yZWJ1aWxkVW5kZXJseWluZ0FuaW1hdGlvbigpfSxfcmVwYXJlbnQ6ZnVuY3Rpb24oYSl7Yi5yZW1vdmVNdWx0aShhKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylhW2NdLl9wYXJlbnQ9dGhpc30sX3B1dENoaWxkOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWI/XCJDYW5ub3QgYXBwZW5kIGFuIGFuY2VzdG9yIG9yIHNlbGZcIjpcIkNhbm5vdCBwcmVwZW5kIGFuIGFuY2VzdG9yIG9yIHNlbGZcIixkPTA7ZDxhLmxlbmd0aDtkKyspaWYodGhpcy5faXNBbmNlc3RvcihhW2RdKSl0aHJvd3t0eXBlOkRPTUV4Y2VwdGlvbi5ISUVSQVJDSFlfUkVRVUVTVF9FUlIsbmFtZTpcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiLG1lc3NhZ2U6Y307Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKyspYj90aGlzLmNoaWxkcmVuLnB1c2goYVtkXSk6dGhpcy5jaGlsZHJlbi51bnNoaWZ0KGFbZF0pO3RoaXMuX3JlcGFyZW50KGEpLHRoaXMuX3JlYnVpbGQoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7dGhpcy5fcHV0Q2hpbGQoYXJndW1lbnRzLCEwKX0scHJlcGVuZDpmdW5jdGlvbigpe3RoaXMuX3B1dENoaWxkKGFyZ3VtZW50cywhMSl9LGdldCBwYXJlbnQoKXtyZXR1cm4gdGhpcy5fcGFyZW50fSxnZXQgZmlyc3RDaGlsZCgpe3JldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aD90aGlzLmNoaWxkcmVuWzBdOm51bGx9LGdldCBsYXN0Q2hpbGQoKXtyZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg/dGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aC0xXTpudWxsfSxjbG9uZTpmdW5jdGlvbigpe2Zvcih2YXIgYj1hLmNsb25lVGltaW5nSW5wdXQodGhpcy5fdGltaW5nSW5wdXQpLGM9W10sZD0wO2Q8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZCsrKWMucHVzaCh0aGlzLmNoaWxkcmVuW2RdLmNsb25lKCkpO3JldHVybiB0aGlzIGluc3RhbmNlb2YgR3JvdXBFZmZlY3Q/bmV3IEdyb3VwRWZmZWN0KGMsYik6bmV3IFNlcXVlbmNlRWZmZWN0KGMsYil9LHJlbW92ZTpmdW5jdGlvbigpe2IucmVtb3ZlTXVsdGkoW3RoaXNdKX19LHdpbmRvdy5TZXF1ZW5jZUVmZmVjdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5TZXF1ZW5jZUVmZmVjdC5wcm90b3R5cGUsXCJhY3RpdmVEdXJhdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYil7YSs9ZChiKX0pLE1hdGgubWF4KGEsMCl9fSksd2luZG93Lkdyb3VwRWZmZWN0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93Lkdyb3VwRWZmZWN0LnByb3RvdHlwZSxcImFjdGl2ZUR1cmF0aW9uXCIse2dldDpmdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihiKXthPU1hdGgubWF4KGEsZChiKSl9KSxhfX0pLGIubmV3VW5kZXJseWluZ0FuaW1hdGlvbkZvckdyb3VwPWZ1bmN0aW9uKGMpe3ZhciBkLGU9bnVsbCxmPWZ1bmN0aW9uKGIpe3ZhciBjPWQuX3dyYXBwZXI7aWYoYyYmXCJwZW5kaW5nXCIhPWMucGxheVN0YXRlJiZjLmVmZmVjdClyZXR1cm4gbnVsbD09Yj92b2lkIGMuX3JlbW92ZUNoaWxkQW5pbWF0aW9ucygpOjA9PWImJmMucGxheWJhY2tSYXRlPDAmJihlfHwoZT1hLm5vcm1hbGl6ZVRpbWluZ0lucHV0KGMuZWZmZWN0LnRpbWluZykpLGI9YS5jYWxjdWxhdGVJdGVyYXRpb25Qcm9ncmVzcyhhLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKGUpLC0xLGUpLGlzTmFOKGIpfHxudWxsPT1iKT8oYy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGEpe2EuY3VycmVudFRpbWU9LTF9KSx2b2lkIGMuX3JlbW92ZUNoaWxkQW5pbWF0aW9ucygpKTp2b2lkIDB9LGc9bmV3IEtleWZyYW1lRWZmZWN0KG51bGwsW10sYy5fdGltaW5nLGMuX2lkKTtyZXR1cm4gZy5vbnNhbXBsZT1mLGQ9Yi50aW1lbGluZS5fcGxheShnKX0sYi5iaW5kQW5pbWF0aW9uRm9yR3JvdXA9ZnVuY3Rpb24oYSl7YS5fYW5pbWF0aW9uLl93cmFwcGVyPWEsYS5faXNHcm91cD0hMCxiLmF3YWl0U3RhcnRUaW1lKGEpLGEuX2NvbnN0cnVjdENoaWxkQW5pbWF0aW9ucygpLGEuX3NldEV4dGVybmFsQW5pbWF0aW9uKGEpfSxiLmdyb3VwQ2hpbGREdXJhdGlvbj1kfShhLGMpfSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViLWFuaW1hdGlvbnMtbmV4dC1saXRlLm1pbi5qcy5tYXAiLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUNJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUE4RUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFRQTtBQUxBO0FBREE7QUFHQTtBQUZBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQXNCQTtBQUFBO0FBbEJBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFNQTtBQUNBO0FBREE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFvQkE7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQVdBO0FBQ0E7QUFEQTtBQUVBO0FBSUE7QUFDQTtBQVVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVpBO0FBZ0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBRUE7QUFTQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQS9YQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUE4QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBeEVBO0FBbUtBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErTEE7QUFRQTtBQ3pRQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBRUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBeUJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFuRkE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQStDQTtBQXRDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBOVFBO0FBQ0E7QUFEQTtBQUNBO0FBVUE7QUFjQTtBQUtBO0FBTUE7QUFLQTtBQU1BO0FBS0E7QUFLQTtBQU1BO0FBS0E7QUFRQTtBQU1BO0FBS0E7QUF2RkE7QUFBQTtBQUFBO0FBa0dBO0FBQ0E7QUFDQTtBQUhBO0FBakdBO0FBd0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQXRCQTtBQW1NQTtBQUNBO0FDMVNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFHQTtBQU1BO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQzlCQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQVVBO0FBWEE7QUFDQTtBQWNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FDaUJBO0FBQ0E7QUFDQTtBQS9EQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBR0E7QUFsQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FDbkZBO0FBV0E7QUFHQTtBQVlBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFxQkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFvQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQUNBO0FBb0JBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQUNBO0FBb0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBTEE7QUFFQTtBQUtBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUF4VUE7QUE0VUE7QUNyVUE7QUFDQTtBQW9HQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSUE7QUEvSUE7QUFDQTtBQURBO0FBRUE7QUFPQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQURBO0FBQ0E7QUFTQTtBQWtCQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQTVCQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFLQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBVEE7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FDekhBO0FBQ0E7QUFVQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUFBO0FBakVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQUE7QUM5RUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBZUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBekVBO0FBa0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQVBBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQVBBO0FBWUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQXlCQTtBQUFBO0FBRUE7QUEvQkE7QUFDQTtBQXFDQTtBQUNBO0FBS0E7QUFJQTtBQUdBO0FBRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==