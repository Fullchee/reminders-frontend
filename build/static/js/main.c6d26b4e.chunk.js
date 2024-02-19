/*! For license information please see main.c6d26b4e.chunk.js.LICENSE.txt */
(this["webpackJsonpreminders-frontend"] =
  this["webpackJsonpreminders-frontend"] || []).push([
  [0],
  {
    116: function (e, t, r) {
      e.exports = r.p + "static/media/flag.9fcf6049.svg";
    },
    117: function (e, t, r) {
      e.exports = r.p + "static/media/renew.89760865.svg";
    },
    118: function (e, t, r) {
      e.exports = r.p + "static/media/overflow-menu--vertical.f1ad3b28.svg";
    },
    119: function (e, t, r) {
      e.exports = r.p + "static/media/trash-can.c4a9197b.svg";
    },
    120: function (e, t, r) {
      e.exports = r.p + "static/media/logout.2fce85e3.svg";
    },
    121: function (e, t, r) {
      e.exports = r.p + "static/media/add.b8be3259.svg";
    },
    122: function (e, t, r) {
      e.exports = r.p + "static/media/shuffle.5576ca98.svg";
    },
    124: function (e, t, r) {
      e.exports = r.p + "static/media/previous.e5693d95.svg";
    },
    127: function (e, t, r) {
      e.exports = r(225);
    },
    132: function (e, t, r) {},
    133: function (e, t, r) {},
    146: function (e, t, r) {},
    147: function (e, t, r) {},
    210: function (e, t, r) {},
    211: function (e, t, r) {},
    224: function (e, t, r) {},
    225: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r.n(n),
        o = r(10),
        i = r.n(o),
        c = (r(132), r(13)),
        u = r(8),
        l = (r(133), r(41)),
        s = r(7),
        f = r(15),
        h = r(49),
        d = r(5),
        m = r(73),
        p = r(96),
        v = (r(136), r(137), r(97)),
        g = Object(v.a)(),
        y = (r(138), r(98)),
        b = r.n(y);
      r(146);
      function E(e) {
        var t = e.speed,
          r = e.onChange;
        return a.a.createElement(
          "select",
          {
            className: "speed-controller",
            onChange: function (e) {
              r(parseFloat(e.target.value));
            },
            value: t,
          },
          a.a.createElement("option", { value: "0.5" }, "0.5x"),
          a.a.createElement("option", { value: "0.9" }, "0.9x"),
          a.a.createElement("option", { value: "1" }, "1x"),
          a.a.createElement("option", { value: "1.25" }, "1.25x"),
          a.a.createElement("option", { value: "1.5" }, "1.5x"),
          a.a.createElement("option", { value: "1.75" }, "1.75x"),
          a.a.createElement("option", { value: "2" }, "2x"),
          a.a.createElement("option", { value: "2.25" }, "2.25x"),
          a.a.createElement("option", { value: "2.5" }, "2.5x"),
          a.a.createElement("option", { value: "2.75" }, "2.75x"),
        );
      }
      r(147);
      var w = function (e) {
          var t = e.url,
            r = Object(n.useState)(1),
            o = Object(u.a)(r, 2),
            i = o[0],
            c = o[1],
            l = Object(n.useState)(!1),
            s = Object(u.a)(l, 2),
            f = s[0],
            h = s[1],
            d = Object(n.useRef)(null);
          function m() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { seconds: 10 },
              t = e.seconds;
            d.current.seekTo(d.current.getCurrentTime() + t), h(!0);
          }
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(b.a, {
              playing: f,
              ref: d,
              playbackRate: i,
              url: t,
              controls: !0,
            }),
            a.a.createElement(E, { onChange: c, speed: i }),
            a.a.createElement(
              "div",
              { className: "seek-buttons" },
              a.a.createElement(
                "button",
                {
                  onClick: function () {
                    return m({ seconds: -5 });
                  },
                },
                "<",
              ),
              a.a.createElement(
                "button",
                {
                  onClick: function () {
                    return m({ seconds: 10 });
                  },
                },
                ">",
              ),
            ),
          );
        },
        k = r(125);
      var x = function (e) {
        var t = e.url,
          r = e.startTime,
          o = Object(n.useState)(1),
          i = Object(u.a)(o, 2),
          c = i[0],
          l = i[1],
          s = Object(n.useRef)(null);
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(k.a, {
            ref: function (e) {
              return (s = e);
            },
            src: t,
            progressJumpSteps: { backward: 15e3, forward: 3e4 },
            onLoadedData: function (e) {
              e.target.currentTime = r || 0;
            },
          }),
          a.a.createElement(E, {
            onChange: function (e) {
              l(e), (s.audio.current.playbackRate = e);
            },
            speed: c,
          }),
        );
      };
      var O = function (e) {
          var t = e.url,
            r = e.startTime;
          return a.a.createElement(
            "div",
            { className: "media-player" },
            t
              ? t.includes("youtu")
                ? a.a.createElement(w, { url: t })
                : t.includes(".mp3")
                  ? a.a.createElement(x, { url: t, startTime: r })
                  : t.endsWith(".jpg") ||
                      t.endsWith(".png") ||
                      t.includes("imgur.com")
                    ? (t.includes("imgur.com") &&
                        !t.endsWith(".jpg") &&
                        (t += ".jpg"),
                      a.a.createElement("img", {
                        className: "media-image",
                        src: t,
                        alt: "",
                      }))
                    : a.a.createElement("h3", null, "No media")
              : a.a.createElement("h3", null, "No media"),
          );
        },
        L = r(30),
        j = r(29);
      r(94);
      var N = function () {
          var e = Object(n.useState)(""),
            t = Object(u.a)(e, 2),
            r = t[0],
            o = t[1],
            i = Object(s.f)(),
            c = function (e) {
              i.push("/search?q=" + e);
            };
          return a.a.createElement(
            "div",
            { className: "search-box" },
            a.a.createElement("input", {
              id: "query",
              type: "text",
              name: "query",
              value: r,
              className: "input--text",
              placeholder: "\ud83d\udd0d  Search",
              onChange: function (e) {
                return o(e.target.value);
              },
              onKeyUp: function (e) {
                (function (e) {
                  return "Enter" === e.key;
                })(e) && c(e.target.value);
              },
            }),
            a.a.createElement(
              "button",
              {
                onClick: function () {
                  return c(r);
                },
                className: "search-button",
              },
              a.a.createElement(
                "span",
                { role: "img", "aria-label": "Search" },
                "\ud83d\udd0d",
              ),
            ),
          );
        },
        _ = r(115),
        S = r.n(_),
        T = r(116),
        C = r.n(T),
        P = r(117),
        D = r.n(P),
        F = r(118),
        A = r.n(F),
        I = r(119),
        R = r.n(I),
        G = r(120),
        J = r.n(G);
      var U = function (e) {
          var t = e.onDelete,
            r = e.isFlagged,
            n = e.toggleFlag,
            o = e.hasLink,
            i = e.confirmLogout,
            c = S()(3),
            u = c.buttonProps,
            l = c.itemProps,
            s = c.isOpen,
            f = c.setIsOpen;
          return a.a.createElement(
            "div",
            { className: "more-menu-container" },
            a.a.createElement(
              j.Tooltip,
              { title: "More", touchHold: "true" },
              a.a.createElement(
                L.a,
                null,
                a.a.createElement(
                  "button",
                  Object.assign({ id: "overflow" }, u),
                  a.a.createElement("img", { src: A.a, alt: "Click for more" }),
                ),
              ),
            ),
            a.a.createElement(
              "div",
              {
                className: "".concat(s ? "visible" : "", " more-menu"),
                role: "menu",
              },
              a.a.createElement(
                "a",
                Object.assign(
                  {
                    className: "more-menu-item ".concat(r ? "is-flagged" : ""),
                  },
                  l[0],
                  {
                    onClick: function (e) {
                      f(!1), n(e);
                    },
                  },
                ),
                a.a.createElement("img", { src: C.a, alt: "" }),
                r ? "Unflag" : "Flag",
              ),
              a.a.createElement(
                "a",
                Object.assign({ className: "more-menu-item" }, l[1], {
                  onClick: function () {
                    window.location.reload();
                  },
                }),
                a.a.createElement("img", { src: D.a, alt: "" }),
                "Refresh",
              ),
              a.a.createElement(
                "a",
                Object.assign(
                  {
                    className: "more-menu-item delete ".concat(
                      o ? "" : "disable",
                    ),
                  },
                  l[2],
                  {
                    onClick: function (e) {
                      f(!1), t(e);
                    },
                  },
                ),
                a.a.createElement("img", { src: R.a, alt: "" }),
                "Delete",
              ),
              a.a.createElement(
                "a",
                Object.assign(
                  {
                    className: "more-menu-item delete ".concat(
                      o ? "" : "disable",
                    ),
                  },
                  l[3],
                  {
                    onClick: function (e) {
                      f(!1), i(e);
                    },
                  },
                ),
                a.a.createElement("img", { src: J.a, alt: "" }),
                "Log out",
              ),
            ),
          );
        },
        K = r(121),
        M = r.n(K),
        B = r(122),
        V = r.n(B);
      r(210);
      var W,
        Y = function (e) {
          var t = e.clearForm,
            r = e.confirmDelete,
            n = e.isFlagged,
            o = e.refresh,
            i = e.toggleFlag,
            c = e.hasLink,
            u = e.confirmLogout;
          return a.a.createElement(
            "nav",
            { className: "buttons home-nav" },
            a.a.createElement(N, null),
            a.a.createElement(
              "div",
              { className: "buttons__icons" },
              a.a.createElement(
                j.Tooltip,
                { title: "Random", touchHold: "true" },
                a.a.createElement(
                  L.a,
                  null,
                  a.a.createElement(
                    "button",
                    { id: "random", onClick: o },
                    a.a.createElement("img", { src: V.a, alt: "random" }),
                  ),
                ),
              ),
              a.a.createElement(
                j.Tooltip,
                { title: "Add", touchHold: "true" },
                a.a.createElement(
                  L.a,
                  null,
                  a.a.createElement(
                    "button",
                    { id: "add", onClick: t },
                    a.a.createElement("img", { src: M.a, alt: "add" }),
                  ),
                ),
              ),
              a.a.createElement(U, {
                isFlagged: n,
                onDelete: r,
                toggleFlag: i,
                hasLink: c,
                confirmLogout: u,
              }),
            ),
          );
        },
        q = function (e) {
          var t = new Date().getTime(),
            r = new Date(e).getTime();
          return Number.isNaN(r) || 0 === r
            ? "Never accessed before"
            : (function (e) {
                var t = Math.floor(e / 864e5);
                return t > 365
                  ? "".concat(Math.floor(t / 365), " year(s) ago")
                  : t > 60
                    ? "".concat(Math.round(t / 30), " months ago")
                    : 1 === t
                      ? "".concat(t, " day ago")
                      : 0 === t
                        ? "today"
                        : "".concat(t, " days ago");
              })(t - r);
        },
        H = function (e) {
          return e[0].toUpperCase() + e.slice(1);
        };
      function z() {
        z = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function u(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (_) {
          u = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = l;
        var f = {};
        function h() {}
        function d() {}
        function m() {}
        var p = {};
        u(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(j([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (m.prototype = h.prototype = Object.create(p));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var u = s(e[a], e, o);
                    if ("throw" !== u.type) {
                      var l = u.arg,
                        f = l.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (l.value = e), i(l);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return N();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = k(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = s(e, t, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = m),
          n(y, "constructor", { value: m, configurable: !0 }),
          n(m, "constructor", { value: d, configurable: !0 }),
          (d.displayName = u(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(E.prototype),
          u(E.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          u(y, c, "Generator"),
          u(y, o, function () {
            return this;
          }),
          u(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (c && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      !(function (e) {
        (e.IDLE = "idle"),
          (e.PENDING = "pending"),
          (e.RESOLVED = "resolved"),
          (e.REJECTED = "rejected");
      })(W || (W = {}));
      var $ = function (e) {
          var t;
          (null === e ||
          void 0 === e ||
          null === (t = e.keywords) ||
          void 0 === t
            ? void 0
            : t.length) || (e.keywords = []);
          var r = 0;
          return (
            (e.keywords = e.keywords.map(function (e) {
              return { id: r++, label: e, value: e };
            })),
            (e.lastAccessed = q(e.last_accessed)),
            (e.startTime = e.start_time),
            e
          );
        },
        Q = (function () {
          var e = Object(c.a)(
            z().mark(function e(t, r) {
              var n, a;
              return z().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(W.PENDING), (e.prev = 1), (e.next = 4), fetch(r)
                        );
                      case 4:
                        return (n = e.sent), (e.next = 7), n.json();
                      case 7:
                        return (
                          (a = e.sent), t(W.RESOLVED), e.abrupt("return", a)
                        );
                      case 12:
                        (e.prev = 12),
                          (e.t0 = e.catch(1)),
                          console.error(e.t0),
                          t(W.REJECTED),
                          "AbortError" === e.t0.name &&
                            console.error("AbortError");
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 12]],
              );
            }),
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        X = function (e) {
          return Object(c.a)(
            z().mark(function t() {
              var r;
              return z().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        Q(
                          e,
                          "https://fullchee-reminders.up.railway.app/random-link",
                        )
                      );
                    case 2:
                      if ((r = t.sent)) {
                        t.next = 6;
                        break;
                      }
                      return (
                        console.error("Couldn't find a link"),
                        t.abrupt("return")
                      );
                    case 6:
                      return (
                        g.push("/link/".concat(r.id)), t.abrupt("return", $(r))
                      );
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          );
        },
        Z = function (e) {
          return (function () {
            var t = Object(c.a)(
              z().mark(function t(r) {
                var n, a;
                return z().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e(W.PENDING),
                          (t.next = 3),
                          fetch(
                            "https://fullchee-reminders.up.railway.app/" +
                              "link/".concat(r),
                          )
                        );
                      case 3:
                        if (404 === (n = t.sent).status) {
                          t.next = 12;
                          break;
                        }
                        return (t.next = 7), n.json();
                      case 7:
                        return (
                          (a = t.sent), e(W.RESOLVED), t.abrupt("return", $(a))
                        );
                      case 12:
                        e(W.REJECTED);
                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ee = function (e) {
          return Object(c.a)(
            z().mark(function t() {
              var r, n, a;
              return z().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        Q(
                          e,
                          "https://fullchee-reminders.up.railway.app/keywords",
                        )
                      );
                    case 2:
                      if ((r = t.sent)) {
                        t.next = 6;
                        break;
                      }
                      return (
                        console.error("Couldn't find keywords"),
                        t.abrupt("return")
                      );
                    case 6:
                      return (
                        (n = 0),
                        (a = r.map(function (e) {
                          return { id: n++, label: e, value: e };
                        })),
                        t.abrupt("return", a)
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          );
        },
        te = function (e) {
          return (function () {
            var t = Object(c.a)(
              z().mark(function t(r, n) {
                var a, o, i, c;
                return z().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(Object(d.a)({}, r)),
                            }),
                            (o = n ? "update-link" : "add-link"),
                            (t.prev = 2),
                            e(W.PENDING),
                            (t.next = 6),
                            fetch(
                              ""
                                .concat(
                                  "https://fullchee-reminders.up.railway.app/",
                                )
                                .concat(o),
                              a,
                            )
                          );
                        case 6:
                          return (
                            (i = t.sent), e(W.RESOLVED), (t.next = 10), i.json()
                          );
                        case 10:
                          return (c = t.sent), t.abrupt("return", $(c));
                        case 14:
                          (t.prev = 14),
                            (t.t0 = t.catch(2)),
                            console.error(t.t0),
                            e(W.REJECTED);
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 14]],
                );
              }),
            );
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })();
        },
        re = function (e) {
          return (function () {
            var t = Object(c.a)(
              z().mark(function t(r) {
                var n, a;
                return z().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ id: r.id }),
                            }),
                            (t.prev = 1),
                            e(W.PENDING),
                            (t.next = 5),
                            fetch(
                              "https://fullchee-reminders.up.railway.app/delete-link",
                              n,
                            )
                          );
                        case 5:
                          return (a = t.sent), (t.next = 8), a.json();
                        case 8:
                          e(W.RESOLVED),
                            f.b.success("Deleted link: ".concat(r.title)),
                            (t.next = 17);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(1)),
                            console.error(t.t0),
                            e(W.REJECTED),
                            f.b.error("Couldn't delete the link");
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 12]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ne = {
          keywords: [{ id: 12, label: "Perspective", value: "Perspective" }],
          title: "Carl Sagan - Pale Blue Dot",
          url: "https://www.youtube.com/watch?v=wupToqz1e2g?t=10",
          notes:
            "Look again at that dot. That's here. That's home. That's us. <div>On it everyone you love, <br>everyone you know, <br>everyone you ever heard of, <br>every human being who ever was, lived out their lives.</div>",
          lastAccessed: "3 months ago",
          id: 0,
          flag: !1,
          views: 3,
          startTime: 10,
        };
      function ae() {
        !(function () {
          var e =
              window.location.hostname.search(/(?:^|.+\.)youtube\.com/) > -1 ||
              window.location.hostname.search(
                /(?:^|.+\.)youtube-nocookie\.com/,
              ) > -1,
            t = "m.youtube.com" === window.location.hostname,
            r = e && !t;
          (window.navigator.userAgent.indexOf("Android") > -1 || !r) &&
            document.wrappedJSObject &&
            Object.defineProperties(document.wrappedJSObject, {
              hidden: { value: !1 },
              visibilityState: { value: "visible" },
            });
          e &&
            (function e(t, r, n) {
              var a = ce(-n / 2, n / 2),
                o = Math.max(r + a, 0);
              window.setTimeout(function () {
                t(), e(t, r, n);
              }, o);
            })(oe, 6e4, 1e4);
        })(),
          window.addEventListener(
            "visibilitychange",
            function (e) {
              return e.stopImmediatePropagation();
            },
            !0,
          ),
          window.location.hostname.search(/(?:^|.+\.)vimeo\.com/) > -1 &&
            window.addEventListener(
              "fullscreenchange",
              function (e) {
                return e.stopImmediatePropagation();
              },
              !0,
            );
      }
      function oe() {
        var e = [18],
          t = e[ce(0, e.length)];
        ie("keydown", t), ie("keyup", t);
      }
      function ie(e, t) {
        document.dispatchEvent(
          new KeyboardEvent(e, {
            bubbles: !0,
            cancelable: !0,
            keyCode: t,
            which: t,
          }),
        );
      }
      function ce(e, t) {
        var r = Math.ceil(e),
          n = Math.floor(t);
        return Math.floor(Math.random() * (n - r)) + r;
      }
      r(211);
      var ue = r(123),
        le = r.n(ue),
        se = r(126);
      function fe(e) {
        var t = e.link,
          r = e.hasLink,
          n = e.handleUrlChange,
          o = e.toast,
          i = e.handleStartTimeChange,
          c = e.keywordOptions,
          u = e.keywordSelected,
          l = e.handleEditorChange,
          s = e.updateLink;
        return a.a.createElement(
          "form",
          { className: "form" },
          r &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement("label", { htmlFor: "id" }, "ID"),
              a.a.createElement("p", { id: "id" }, t.id),
            ),
          a.a.createElement("label", { htmlFor: "title" }, "Title"),
          a.a.createElement("input", {
            id: "title",
            type: "text",
            name: "title",
            className: "input input--text",
            value: t.title || "",
            onChange: n,
          }),
          a.a.createElement(
            "label",
            { htmlFor: "url" },
            a.a.createElement(
              "button",
              {
                onClick: function (e) {
                  e.preventDefault(),
                    navigator.clipboard.writeText(t.url),
                    o.info("Copied url to clipboard");
                },
                className: "button-link url-label",
              },
              a.a.createElement(
                "p",
                { style: { paddingRight: "4px" } },
                "URL ",
              ),
              a.a.createElement(
                "svg",
                {
                  className: "clipboard",
                  viewBox: "0 0 16 16",
                  version: "1.1",
                  width: "16",
                  height: "16",
                  "aria-hidden": "true",
                },
                a.a.createElement("path", {
                  fillRule: "evenodd",
                  d: "M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z",
                }),
              ),
            ),
          ),
          a.a.createElement("input", {
            id: "url",
            type: "url",
            name: "url",
            className: "input input--text",
            value: t.url || "",
            onChange: n,
          }),
          r &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "label",
                { htmlFor: "startTime" },
                "Start time",
              ),
              a.a.createElement("input", {
                id: "startTime",
                name: "startTime",
                type: "number",
                value: t.startTime,
                className: "input input--text",
                onChange: i,
              }),
            ),
          a.a.createElement("label", { htmlFor: "keywords" }, "Keywords"),
          a.a.createElement(
            "div",
            { id: "keywords", className: "keywords" },
            a.a.createElement(le.a, {
              values: t.keywords,
              multi: !0,
              options: c || [],
              onChange: u,
              create: !0,
            }),
          ),
          a.a.createElement(
            "label",
            { htmlFor: "lastAccessed" },
            "Last accessed",
          ),
          a.a.createElement("p", { id: "lastAccessed" }, t.lastAccessed),
          a.a.createElement("label", { htmlFor: "views" }, "Views"),
          a.a.createElement("p", { id: "views" }, t.views),
          a.a.createElement(
            "label",
            { htmlFor: "notes", style: { color: "white" } },
            "Notes",
          ),
          a.a.createElement(
            "div",
            { className: "text-editor" },
            a.a.createElement(se.a, {
              id: "tiny-mce-editor",
              apiKey: Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                REACT_APP_API_ROOT: "http://localhost:8000",
                REACT_APP_BACKEND_URL:
                  "https://fullchee-reminders.up.railway.app/",
              }).REACT_APP_TINY_MCE_API_KEY,
              init: {
                height: 400,
                menubar: !1,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic | bullist numlist outdent indent | removeformat | image | alignleft aligncenter alignright | help |",
              },
              textareaName: "notes",
              value: t.notes || "",
              onEditorChange: l,
            }),
          ),
          a.a.createElement(
            "button",
            {
              id: "submitButton",
              type: "submit",
              name: "submitButton",
              className: "submit-button",
              onClick: s,
            },
            r ? "Update" : "Add",
          ),
        );
      }
      function he() {
        he = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function u(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (_) {
          u = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = l;
        var f = {};
        function h() {}
        function d() {}
        function m() {}
        var p = {};
        u(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(j([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (m.prototype = h.prototype = Object.create(p));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var u = s(e[a], e, o);
                    if ("throw" !== u.type) {
                      var l = u.arg,
                        f = l.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (l.value = e), i(l);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return N();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = k(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = s(e, t, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = m),
          n(y, "constructor", { value: m, configurable: !0 }),
          n(m, "constructor", { value: d, configurable: !0 }),
          (d.displayName = u(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(E.prototype),
          u(E.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          u(y, c, "Generator"),
          u(y, o, function () {
            return this;
          }),
          u(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (c && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function de() {
        f.b.error("We couldn't connect to the backend!");
      }
      function me(e) {
        var t = e.id,
          r = e.handleLogout,
          o = Object(n.useState)([]),
          i = Object(u.a)(o, 2),
          l = i[0],
          s = i[1],
          v = Object(n.useState)(!1),
          y = Object(u.a)(v, 2),
          b = y[0],
          E = y[1],
          w = Object(n.useState)(ne),
          k = Object(u.a)(w, 2),
          x = k[0],
          L = k[1],
          j = Object(n.useState)(W.IDLE),
          N = Object(u.a)(j, 2),
          _ = (N[0], N[1]),
          S = (function (e, t) {
            return {
              getRandomLink: X(t),
              getLink: Z(t),
              getKeywords: ee(t),
              sendUpdate: te(t),
              deleteLink: re(t),
            };
          })(0, _),
          T = S.deleteLink,
          C = S.getKeywords,
          P = S.getLink,
          D = S.getRandomLink,
          F = S.sendUpdate,
          A = Object(n.useRef)(null),
          I = (function () {
            var e = Object(c.a)(
              he().mark(function e(t) {
                var r, n, a;
                return he().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (_(W.PENDING),
                          (null === A ||
                          void 0 === A ||
                          null === (r = A.current) ||
                          void 0 === r
                            ? void 0
                            : r.staticStart) && A.current.staticStart(),
                          Number.isNaN(parseInt("".concat(t))))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 5), P(parseInt("".concat(t)));
                      case 5:
                        a = e.sent;
                      case 6:
                        if (a) {
                          e.next = 13;
                          break;
                        }
                        return (e.next = 9), D();
                      case 9:
                        if ((a = e.sent)) {
                          e.next = 13;
                          break;
                        }
                        return de(), e.abrupt("return");
                      case 13:
                        L(a),
                          E(!0),
                          _(W.RESOLVED),
                          (null === A ||
                          void 0 === A ||
                          null === (n = A.current) ||
                          void 0 === n
                            ? void 0
                            : n.complete) && A.current.complete();
                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          R = (function () {
            var e = Object(c.a)(
              he().mark(function e(t) {
                var r, n;
                return he().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return t && t.preventDefault(), (e.next = 3), F(x, b);
                      case 3:
                        (r = e.sent),
                          (n = "Added/updated link: ".concat(r.title)),
                          b || (n += " with id: ".concat(r.id)),
                          f.b.success(n),
                          g.push("/link/".concat(r.id)),
                          L(
                            Object(d.a)(
                              Object(d.a)({}, r),
                              {},
                              { lastAccessed: q(r.last_accessed) },
                            ),
                          ),
                          E(!0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          G = function () {
            Object(m.confirmAlert)({
              title: 'Delete "'.concat(x.title, '"?'),
              message: "",
              buttons: [
                {
                  label: "Yes",
                  onClick: function () {
                    T(x);
                  },
                },
                { label: "No", onClick: function () {} },
              ],
            });
          },
          J = (function () {
            var e = Object(c.a)(
              he().mark(function e() {
                return he().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        L(function (e) {
                          return (
                            f.b.info(e.flag ? "Unflagged!" : "Flagged!"),
                            Object(d.a)(
                              Object(d.a)({}, e),
                              {},
                              { flag: !e.flag },
                            )
                          );
                        });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          U = function () {
            g.push("/");
            var e = b ? x.keywords : [];
            L({
              notes: "",
              title: "",
              url: "",
              keywords: e,
              lastAccessed: "",
              flag: !1,
              views: 0,
            }),
              E(!1);
          };
        return (
          Object(n.useEffect)(function () {
            C().then(function (e) {
              e ? s(e) : de();
            }),
              ae(),
              (function (e) {
                e.updateLink;
                var t = e.clearForm,
                  r = e.refresh,
                  n = e.confirmDelete,
                  a = e.toggleFlag,
                  o = function (e) {
                    if (e.ctrlKey) {
                      if (
                        ("a" === e.key && (e.preventDefault(), t()),
                        "s" === e.key)
                      )
                        e.preventDefault(),
                          document.querySelector("#submitButton").click();
                      "r" === e.key && (e.preventDefault(), r()),
                        "d" === e.key && (e.preventDefault(), n()),
                        "f" === e.key && (e.preventDefault(), a());
                    }
                  };
                document.addEventListener("keydown", o),
                  setTimeout(function () {
                    var e = document.querySelector(
                      "iframe#tiny-mce-editor_ifr",
                    );
                    (null === e || void 0 === e ? void 0 : e.contentDocument) &&
                      e.contentDocument.body.addEventListener("keydown", o);
                  }, 1e3);
              })({
                updateLink: R,
                clearForm: U,
                refresh: I,
                confirmDelete: G,
                toggleFlag: J,
              });
          }, []),
          Object(n.useEffect)(
            function () {
              t && t !== x.id && (I(t), E(!0));
            },
            [t],
          ),
          Object(n.useEffect)(
            function () {
              document.title = "".concat(x.title, " - Reminders");
            },
            [x.title],
          ),
          a.a.createElement(
            "div",
            { className: "app container" },
            a.a.createElement(p.a, { color: "#4158d0", ref: A }),
            a.a.createElement(
              "div",
              { className: "form-container" },
              a.a.createElement(Y, {
                hasLink: b,
                refresh: I,
                confirmDelete: G,
                clearForm: U,
                toggleFlag: J,
                isFlagged: x.flag,
                confirmLogout: function () {
                  Object(m.confirmAlert)({
                    title: "Logout?",
                    message: "",
                    buttons: [
                      {
                        label: "Yes",
                        onClick: function () {
                          r();
                        },
                      },
                      { label: "No", onClick: function () {} },
                    ],
                  });
                },
              }),
              a.a.createElement(O, {
                startTime: x.startTime || 0,
                url: x.url || "",
              }),
              a.a.createElement(fe, {
                link: x,
                hasLink: b,
                handleUrlChange: function (e) {
                  var t = e.target.name,
                    r = e.target.value;
                  L(Object(d.a)(Object(d.a)({}, x), {}, Object(h.a)({}, t, r)));
                },
                toast: f.b,
                handleStartTimeChange: function (e) {
                  L(
                    Object(d.a)(
                      Object(d.a)({}, x),
                      {},
                      { startTime: e.target.value, start_time: e.target.value },
                    ),
                  );
                },
                keywordOptions: l,
                keywordSelected: function (e) {
                  (e = e.sort(function (e, t) {
                    return e.label > t.label ? -1 : 1;
                  })),
                    (x.keywords = e.map(function (e) {
                      return e && "object" === typeof e
                        ? Object(d.a)(
                            Object(d.a)({}, e),
                            {},
                            { label: H(e.label), value: H(e.value) },
                          )
                        : { id: e, value: e, label: e };
                    })),
                    L(x);
                },
                handleEditorChange: function (e) {
                  L(Object(d.a)(Object(d.a)({}, x), {}, { notes: e }));
                },
                updateLink: R,
              }),
            ),
          )
        );
      }
      function pe(e) {
        var t = e.handleLogin,
          r = Object(n.useState)(""),
          o = Object(u.a)(r, 2),
          i = o[0],
          c = o[1],
          l = Object(n.useState)(""),
          s = Object(u.a)(l, 2),
          f = s[0],
          h = s[1],
          d = function (e) {
            var t = e.target.name,
              r = e.target.value;
            ("username" === t ? c : h)(r);
          };
        return a.a.createElement(
          "div",
          { className: "app container" },
          a.a.createElement(
            "div",
            { className: "form-container" },
            a.a.createElement(
              "form",
              {
                class: "form",
                onSubmit: function (e) {
                  return t(e, { username: i, password: f });
                },
              },
              a.a.createElement(
                "h4",
                { style: { textAlign: "start" } },
                "Log In",
              ),
              a.a.createElement("label", { htmlFor: "username" }, "Email"),
              a.a.createElement("input", {
                className: "input input--text",
                type: "text",
                name: "username",
                value: i,
                onChange: d,
              }),
              a.a.createElement("label", { htmlFor: "password" }, "Password"),
              a.a.createElement("input", {
                className: "input input--text",
                type: "password",
                name: "password",
                value: f,
                onChange: d,
              }),
              a.a.createElement(
                "button",
                { className: "submit-button", type: "submit" },
                "Login",
              ),
            ),
          ),
        );
      }
      var ve = r(124),
        ge = r.n(ve),
        ye = (r(224), []),
        be = function () {
          var e = window.location.search.slice(3),
            t = Object(n.useState)(ye),
            r = Object(u.a)(t, 2),
            o = r[0],
            i = r[1];
          Object(n.useEffect)(
            function () {
              fetch(
                "https://fullchee-reminders.up.railway.app/search?q=" + e,
              ).then(function (e) {
                e.json().then(function (e) {
                  i(e);
                });
              });
            },
            [e],
          );
          return a.a.createElement(
            "div",
            { className: "app container" },
            a.a.createElement(
              "div",
              { className: "form-container" },
              a.a.createElement(
                "nav",
                { className: "buttons" },
                a.a.createElement(
                  j.Tooltip,
                  { title: "Back", touchHold: "true" },
                  a.a.createElement(
                    L.a,
                    null,
                    a.a.createElement(
                      "button",
                      {
                        id: "back",
                        onClick: function () {
                          return (window.location.href = "/");
                        },
                      },
                      a.a.createElement("img", { src: ge.a, alt: "back" }),
                    ),
                  ),
                ),
                a.a.createElement(N, null),
              ),
              a.a.createElement(
                "div",
                { className: "search-results" },
                o.length
                  ? o.map(function (e) {
                      return a.a.createElement(
                        "div",
                        { className: "search-result-item", key: e.id },
                        a.a.createElement(
                          l.b,
                          {
                            className: "search-result-item-link",
                            to: "/link/".concat(e.id),
                          },
                          a.a.createElement(
                            "h3",
                            { className: "search-result-item__title" },
                            e.title,
                          ),
                          a.a.createElement(
                            "div",
                            { className: "search-result-item__keywords" },
                            e.keywords.map(function (e) {
                              return a.a.createElement(
                                "a",
                                {
                                  key: e,
                                  href: "/search?q=".concat(e),
                                  className: "search-result-keyword",
                                },
                                e,
                              );
                            }),
                          ),
                          a.a.createElement(
                            "p",
                            { className: "search-result-item__text" },
                            "Last accessed ",
                            q(e.last_accessed),
                          ),
                          a.a.createElement(
                            "p",
                            { className: "search-result-item__text" },
                            (function (e) {
                              switch (e) {
                                case 0:
                                  return "No views";
                                case 1:
                                  return "1 view";
                                default:
                                  return "".concat(e, " views");
                              }
                            })(e.views),
                          ),
                        ),
                      );
                    })
                  : a.a.createElement("p", null, "No results"),
              ),
            ),
          );
        };
      function Ee() {
        Ee = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function u(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (_) {
          u = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = l;
        var f = {};
        function h() {}
        function d() {}
        function m() {}
        var p = {};
        u(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(j([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (m.prototype = h.prototype = Object.create(p));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var u = s(e[a], e, o);
                    if ("throw" !== u.type) {
                      var l = u.arg,
                        f = l.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (l.value = e), i(l);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return N();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = k(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = s(e, t, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = m),
          n(y, "constructor", { value: m, configurable: !0 }),
          n(m, "constructor", { value: d, configurable: !0 }),
          (d.displayName = u(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(E.prototype),
          u(E.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          u(y, c, "Generator"),
          u(y, o, function () {
            return this;
          }),
          u(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (c && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var we = function () {
        var e = Object(n.useState)(function () {
            return localStorage.getItem("username");
          }),
          t = Object(u.a)(e, 2),
          r = t[0],
          o = t[1],
          i = (function () {
            var e = Object(c.a)(
              Ee().mark(function e(t, r) {
                var n, a;
                return Ee().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            fetch(
                              "".concat(
                                "https://fullchee-reminders.up.railway.app/",
                                "token-auth/",
                              ),
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(r),
                              },
                            )
                          );
                        case 4:
                          return (
                            (n = e.sent).ok ||
                              f.b.error("Incorrect username or password"),
                            (e.next = 8),
                            n.json()
                          );
                        case 8:
                          (a = e.sent),
                            localStorage.setItem("token", a.token),
                            localStorage.setItem("username", a.user.username),
                            o(a.user.username),
                            f.b.success(
                              "Welcome back ".concat(a.user.username, "!"),
                            ),
                            (e.next = 18);
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(1)),
                            console.error(e.t0);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 15]],
                );
              }),
            );
            return function (t, r) {
              return e.apply(this, arguments);
            };
          })(),
          h = function () {
            localStorage.removeItem("token"),
              localStorage.removeItem("username"),
              o("");
          },
          d = a.a.createElement(me, { handleLogout: h, username: r }),
          m = function (e) {
            return a.a.createElement(me, {
              handleLogout: h,
              username: r,
              id: e,
            });
          },
          p = a.a.createElement(pe, { handleLogin: i });
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            l.a,
            { history: g },
            a.a.createElement(
              s.c,
              null,
              a.a.createElement(s.a, {
                exact: !0,
                path: "/",
                render: function () {
                  return d;
                },
              }),
              a.a.createElement(s.a, {
                exact: !0,
                path: "/login",
                render: function () {
                  return r ? d : p;
                },
              }),
              a.a.createElement(s.a, {
                path: "/link/:id",
                render: function (e) {
                  var t = e.match;
                  return m(t.params.id);
                },
              }),
              a.a.createElement(s.a, { path: "/search", component: be }),
              a.a.createElement(s.a, {
                path: "/:id",
                render: function (e) {
                  var t = e.match;
                  return m(t.params.id);
                },
              }),
            ),
          ),
          a.a.createElement(f.a, {
            hideProgressBar: !0,
            pauseOnHover: !1,
            pauseOnFocusLoss: !1,
            draggable: !1,
            autoClose: 2e3,
          }),
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      i.a.render(
        a.a.createElement(a.a.StrictMode, null, a.a.createElement(we, null)),
        document.getElementById("root"),
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[127, 1, 2]],
]);
//# sourceMappingURL=main.c6d26b4e.chunk.js.map
