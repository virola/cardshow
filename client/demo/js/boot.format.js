define("util/mix", ["require", "exports", "module"], function(e, t, n) {
    var r = document.querySelector("head"), i = document.createElement("dummy").style, s = "Webkit Moz O ms Khtml".split(" "), o = {}, u = /%$/i, a = function() {
    }, f = function() {
        var e = "";
        return s.forEach(function(t) {
            if (i[t + "Transform"] !== undefined)
                return e = t, !1
        }), e
    }(), l = f.toLocaleLowerCase(), c = "-" + l + "-", h = function(e) {
        return l + e.charAt(0).toUpperCase() + e.substr(1)
    }, p = function(e) {
        return l + e.toLocaleLowerCase()
    }, d = function(e) {
        return c + e
    }, v = function(e) {
        if (typeof o[e] == "undefined") {
            var t = e.charAt(0).toUpperCase() + e.substr(1), n = (e + " " + f + t + " " + t).split(" ");
            o[e] = null;
            for (var r in n)
                if (i[n[r]] !== undefined) {
                    o[e] = n[r];
                    break
                }
        }
        return o[e]
    }, m = "", g = "";
    document.hidden != undefined ? (m = "hidden", g = "visibilitychange") : document[h("hidden")] != undefined && (m = h("hidden"), g = p("visibilitychange")), n.exports = {fixedTransformKey: v("transform"),fixedTransformOriginKey: v("transformOrigin"),fixedTransitionKey: v("transition"),fixedBoxSizingKey: v("transformOrigin"),fixedTransformOriginKey: v("transformOrigin"),fixedAnimationKey: v("animation"),fixedTransformStrikeKey: d("transform"),fixedTransformOriginStrikeKey: d("transform-origin"),hiddenProp: m,visibilityEvent: g,loaderSrc: "data:image/gif;base64,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",noop: a,h5PropPrefix: h,h5EventPrefix: p,css3Prefix: v,css3PrefixStrike: d,bindContext: function(e, t) {
            return function() {
                e.apply(t, arguments)
            }
        },clone: function(e) {
            if (Object.create)
                return Object.create(e);
            var t = function() {
            };
            return t.prototype = e, t.prototype.constructor = t, new t
        },round: function(e, t) {
            var n;
            return t != null || (t = 0), n = Math.pow(10, t), Math.round(e * n) / n
        },valueIsFraction: function(e) {
            return typeof e == "number" ? !1 : u.test(e)
        },decimalToFraction: function(e) {
            return u.test(e) ? e : (parseFloat(e) || 0) * 100 + "%"
        },fractionToDecimal: function(e) {
            return u.test(e) ? (parseFloat(e) || 0) / 100 : e
        },writeCssText: function(e) {
            if (!e)
                return;
            var t = document.createElement("style");
            t.type = "text/css", t.innerHTML = e, r.appendChild(t)
        },parsePosition: function(e, t) {
            return e == undefined ? !1 : typeof e == "number" || (e = parseInt(e)) || e === 0 ? e : !1
        },getExtName: function(e) {
            return e.substr(e.lastIndexOf(".") + 1)
        }}
}), define("util/CSSCMDBuilder", ["require", "exports", "module", "util/mix"], function(e, t, n) {
    var r = e("util/mix").decimalToFraction, i = "all", s = function(e, t, n) {
        return "translate3d(" + [e + "px", t + "px", n + "px"].join(",") + ")"
    }, o = function(e, t, n) {
        return ["rotateX(" + e + "deg)", "rotateY(" + t + "deg)", "rotateZ(" + n + "deg)"].join(" ")
    }, u = function(e, t) {
        return "scale(" + [e, t].join(",") + ")"
    }, a = function(e, t) {
        return "skew(" + [e + "deg", t + "deg"].join(",") + ")"
    }, f = function(e, t, n, r) {
        r = r.length ? r : [i];
        var s = " " + [e + "s", t, n + "s"].join(" ");
        return r.join(s + ",") + s
    }, l = function(e, t, n) {
        var i = [];
        return e != undefined && i.push(r(e)), t != undefined && i.push(r(t)), n != undefined && i.push(n + "px"), i.join(" ")
    }, c = function(e, t, n, r) {
        var i = [];
        return e && i.push(e), n && i.push(n), r && i.push(r), t && i.push(t), i.join(" ").trim()
    };
    n.exports = {buildTranslateCMD: s,buildRotateCMD: o,buildScaleCMD: u,buildSkewCMD: a,buildTransformCMD: c,buildTransformOriginCMD: l,buildTransitionCMD: f}
}), define("lang/Class", ["require", "exports", "module"], function(e, t, n) {
    var r = n.exports = function() {
    }, i = !0, s = /abc/.test(function() {
        abc
    }) ? /\b_super\b/ : /.*/;
    r.extend = function(e) {
        function t() {
            i && this.init && this.init.apply(this, arguments)
        }
        var n = this, r = n.prototype;
        i = !1, t.prototype = new n, t.prototype.constructor = t, t.extend = arguments.callee, i = !0;
        var o = null;
        for (name in e) {
            if (!e.hasOwnProperty(name))
                continue;
            o = e[name];
            if (typeof o != "function" || typeof r[name] != "function" || !s.test(o)) {
                t.prototype[name] = o;
                continue
            }
            t.prototype[name] = function(e, t) {
                return function() {
                    var n = this._super, i;
                    return this._super = r[e] || function() {
                    }, i = t.apply(this, arguments), this._super = n, i
                }
            }(name, o)
        }
        return t
    }
}), define("lang/Observer", ["require", "exports", "module", "lang/Class"], function(e, t, n) {
    var r = e("lang/Class"), i = Array.prototype.slice;
    n.exports = r.extend({_callbacks: null,bind: function(e, t) {
            var n = this._callbacks || (this._callbacks = {}), r = e.split(" ");
            for (var i = 0, s = r.length; i < s; i++) {
                var o = r[i];
                n[o] || (n[o] = []), n[o].push(t)
            }
            return this
        },trigger: function() {
            var e = arguments.length ? i.call(arguments, 0) : null;
            if (!e)
                return;
            var t = e.shift(), n = this._callbacks ? this._callbacks[t] : null;
            if (!n)
                return;
            for (var r = 0, s = n.length; r < s; r++) {
                var o = n[r];
                if (o.apply(this, e) === !1)
                    break
            }
            return !0
        },unbind: function(e, t) {
            if (arguments.length === 0)
                return this._callbacks = {}, this;
            if (!e || !this._callbacks)
                return this;
            var n = e.split(" ");
            for (var r = 0, i = n.length; r < i; r++) {
                var s = n[r], o = this._callbacks[s] || null;
                if (!o)
                    continue;
                if (!t) {
                    delete this._callbacks[s];
                    continue
                }
                for (var u = 0, a = o.length; u < a; u++) {
                    if (o[u] !== t)
                        continue;
                    o.splice(u, 1), a--;
                    break
                }
            }
            return this
        }})
}), define("core/Entity", ["require", "exports", "module", "lang/Observer"], function(e, t, n) {
    var r = e("lang/Observer"), i = n.exports = r.extend({_id: "",_width: 0,_height: 0,_oX: .5,_oY: .5,_oZ: 0,_pX: "50%",_pY: "50%",_pZ: 0,_sX: 1,_sY: 1,_sZ: 1,_rX: 0,_rY: 0,_rZ: 0,_kX: 0,_kY: 0,_opacity: 1,_bgColor: "none",_zOrder: 0,_customData: null,_sizeChanged: !1,_originChanged: !1,_positionChanged: !1,_rotateChanged: !1,_skewChanged: !1,_opacityChanged: !1,_bgChanged: !1,_zOrderChanged: !1,_scaleRuleChanged: !1,_customDataChanged: !1,_changeWhileSeted: !1,reset: function(e) {
            if (!e)
                return;
            var t = e.target, n = e.size, r = e.origin, i = e.position, s = e.rotate, o = e.scale, u = e.transition, a = e.opacity, f = e.skew, l = e.bgColor, c = e.zOrder, h = e.customData;
            t && this.target(t), n && this.setSize.apply(this, n), r && this.setOrigin.apply(this, r), i && this.setPosition.apply(this, i), s && this.setRotate.apply(this, s), o && this.setScale.apply(this, o), f && this.setSkew.apply(this, f), u && this.setTransition.apply(this, u), l && this.setBgColor(l), h && this.setCustomData(h), c != undefined && this.setZOrder(c), a != undefined && this.setOpacity(a)
        },clone: function() {
            var e = new this.constructor;
            return e._width = this._width, e._height = this._height, e._oX = this._oX, e._oY = this._oY, e._oZ = this._oZ, e._pX = this._pX, e._pY = this._pY, e._pZ = this._pZ, e._sX = this._sX, e._sY = this._sY, e._sZ = this._sZ, e._rX = this._rX, e._rY = this._rY, e._rZ = this._rZ, e._kX = this._kX, e._kY = this._kY, e._opacity = this._opacity, e._bgColor = this._bgColor, e._zOrder = this._zOrder, e._customData = this._customData, e._sizeChanged = this._sizeChanged, e._originChanged = this._originChanged, e._positionChanged = this._positionChanged, e._scaleChanged = this._scaleChanged, e._rotateChanged = this._rotateChanged, e._skewChanged = this._skewChanged, e._opacityChanged = this._opacityChanged, e._bgChanged = this._bgChanged, e._zOrderChanged = this._zOrderChanged, e._scaleRuleChanged = this._scaleRuleChanged, e._customDataChanged = this._customDataChanged, e
        },setSize: function(e, t) {
            var n = !1;
            this._width != e && (this._width = e, n = !0), this._height != t && (this._height = t, n = !0);
            if (n || this._changeWhileSeted && !this._sizeChanged)
                this._sizeChanged = !0
        },setOrigin: function(e, t, n) {
            var r = !1;
            n = n || 0, this._oX != e && (this._oX = e, r = !0), this._oY != t && (this._oY = t, r = !0), this._oZ != n && (this._oZ = n, r = !0);
            if (r || this._changeWhileSeted && !this._originChanged)
                this._originChanged = !0
        },setPosition: function(e, t, n) {
            var r = !1;
            n = parseFloat(n) || 0, this._pX != e && (this._pX = e, r = !0), this._pY != t && (this._pY = t, r = !0), this._pZ != n && (this._pZ = n, r = !0);
            if (r || this._changeWhileSeted && !this._positionChanged)
                this._positionChanged = !0
        },setScale: function(e, t, n) {
            var r = !1;
            n = n || 1, this._sX != e && (this._sX = e, r = !0), this._sY != t && (this._sY = t, r = !0), this._sZ != n && (this._sZ = n, r = !0);
            if (r || this._changeWhileSeted && !this._scaleChanged)
                this._scaleChanged = !0
        },setRotate: function(e, t, n) {
            var r = !1;
            n = n || 0, this._rX != e && (this._rX = e, r = !0), this._rY != t && (this._rY = t, r = !0), this._rZ != n && (this._rZ = n, r = !0);
            if (r || this._changeWhileSeted && !this._rotateChanged)
                this._rotateChanged = !0
        },setSkew: function(e, t) {
            var n = !1;
            this._kX != e && (this._kX = e, n = !0), this._kY != t && (this._kY = t, n = !0);
            if (n || this._changeWhileSeted && !this._skewChanged)
                this._skewChanged = !0
        },setOpacity: function(e) {
            var t = !1;
            this._opacity != e && (this._opacity = e, t = !0);
            if (t || this._changeWhileSeted && !this._opacityChanged)
                this._opacityChanged = !0
        },setBgColor: function(e) {
            var t = !1;
            this._bgColor != e && (this._bgColor = e, t = !0);
            if (t || this._changeWhileSeted && !this._bgChanged)
                this._bgChanged = !0
        },setZOrder: function(e) {
            if (e == undefined)
                return;
            var t = !1;
            this._zOrder != e && (this._zOrder = e, t = !0);
            if (t || this._changeWhileSeted && !this._zOrderChanged)
                this._zOrderChanged = !0
        },setCustomData: function(e) {
            var t = !1;
            this._customData != e && (this._customData = e, t = !0);
            if (t || this._changeWhileSeted && !this._customData)
                this._customDataChanged = !0
        }})
}), define("util/Log", ["require", "exports", "module"], function(e, t, n) {
    var r = function() {
    }, i = window.console || {log: r,info: r,warn: r,error: r}, s = "%cErquan Log(%c%o%c)", o = "font-size:14px;font-weight:bold", u = "color:red;" + o, a = "color:#424242;" + o, f = function(e, t) {
        try {
            i[e](s, u, a, t, u)
        } catch (n) {
            throw n
        }
    }, l = function(e) {
        f("log", e)
    }, c = function(e) {
        f("info", e)
    }, h = function(e) {
        f("warn", e)
    }, p = function(e, t) {
        f("error", e);
        if (t)
            throw "get detail info from ↑"
    };
    n.exports = {log: l,info: c,warn: h,error: p}
}), define("core/Node", ["require", "exports", "module", "core/Entity", "util/Log", "util/mix"], function(e, t, n) {
    var r = e("core/Entity"), i = e("util/Log"), s = e("util/mix"), o = [], u = [], a = n.exports = r.extend({_isRoot: !1,_meta: {index: 0},_nodeClass: "erquan_node",_lastUpdateTime: 0,init: function(e, t, n, r, i) {
            a.addNode(this), this._id = this._nodeClass + "_" + this._meta.index++;
            if (e == undefined)
                return;
            e = e || 0, t = t || 0, this.setSize(e, t);
            if (n == undefined)
                return;
            n = n || 0, r = r || 0, this.setPosition(n, r), i && this.setBgColor(i)
        },type: function() {
            return this._nodeClass
        },parent: function(e) {
            return e && e.removeChild && (this._parent = e), this._parent
        },id: function() {
            return this._id
        },hide: s.noop,show: s.noop,getWidth: function() {
            return this._width
        },getHeight: function() {
            return this._height
        },getSize: function() {
            return [this._width, this._height]
        },getOrigin: function() {
            return [this._oX, this._oY, this._oZ]
        },remove: function(e) {
            this._parent ? this._parent.removeChild(this, e) : e || a.removeNode(this)
        },runAction: function(e) {
            e.target() == this ? this._currentAction = e : this._currentAction = e.clone(!1, !0).target(this), this._currentAction.start()
        },stopAction: function(e) {
            this._currentAction && (this._currentAction.stop(e), this._currentAction = null)
        },render: function(e) {
            return e && (this._lastUpdateTime = Date.now()), !1
        }});
    a._getNodeList = function(e) {
        var t = null;
        return e == "media" || e == "erquan_video" || e == "erquan_audio" ? t = u : t = o, t
    }, a.getNodeList = function(e) {
        var t = null;
        return e ? t = a._getNodeList(e) : t = [].concat(o).concat(u), [].concat(t)
    }, a.getNode = function(e) {
        var t = null;
        return a.getNodeList().forEach(function(n) {
            if (n.id() == e)
                return t = n, !1
        }), t
    }, a.addNode = function(e) {
        return a._getNodeList(e.type()).push(e), !0
    }, a.removeNode = function(e) {
        typeof e == "string" && (e = a.getNode(e));
        if (!e)
            return !1;
        var t = a._getNodeList(e.type()), n = t.indexOf(e);
        if (n === -1)
            return !1;
        t.splice(n, 1)
    }
}), define("core/ContainerNode", ["require", "exports", "module", "core/Node", "util/Log"], function(e, t, n) {
    var r = e("core/Node"), i = e("util/Log"), s = n.exports = r.extend({_children: null,init: function(e, t, n, r, i) {
            this._super.apply(this, arguments), this._children = []
        },getChildren: function() {
            return this._children
        },getChild: function(e) {
            var t = null;
            return this._children.forEach(function(n) {
                if (e == n.id())
                    return t = n, !1
            }), t
        },addChild: function(e) {
            var t = null;
            if (t = e.parent()) {
                if (t == this)
                    return i.warn("current node has contain this child"), !1;
                e.remove(!0)
            }
            return this._children.push(e), e.parent(this), !0
        },removeChild: function(e, t) {
            var n = -1;
            return ~(n = this._children.indexOf(e)) ? (this._children.splice(n, 1), !t && r.removeNode(e), !0) : !1
        },remove: function(e) {
            if (!e) {
                var t = this._children, n = 0, r = t.length, i = null;
                for (; n < r; n++)
                    i = t[n], i.remove(e)
            }
            this._super(e)
        },renderChildren: function(e) {
            var t = this._children;
            for (var n = 0, r = t.length; n < r; n++)
                t[n].render(e)
        }})
}), define("core/Scale", ["require", "exports", "module", "lang/Class"], function(e, t, n) {
    var r = e("lang/Class"), i = 1, s = 2, o = 3, u = n.exports = r.extend({_designWidth: 0,_designHeight: 0,_canvasWidth: 0,_canvasHeight: 0,_scaleX: 1,_scaleY: 1,_scaleRule: i,_canvasSizeChanged: !1,_designSizeChanged: !1,_scaleRulesChanged: !1,setDesignSize: function(e, t) {
            this._designWidth != e && (this._designWidth = e, this._designSizeChanged = !0), this._designHeight != t && (this._designHeight = t, this._designSizeChanged = !0)
        },setCanvasSize: function(e, t) {
            this._canvasWidth != e && (this._canvasWidth = e, this._canvasSizeChanged = !0), this._canvasHeight != t && (this._canvasHeight = t, this._canvasSizeChanged = !0)
        },setScaleRule: function(e) {
            e = e || i, this._scaleRule != e && (this._scaleRule = e, this._scaleRulesChanged = !0)
        },getViewBorderScale: function() {
            return this._scaleRules = u.scaleRules.VIEW_BORDER, this.getScale()
        },getViewOverScale: function() {
            return this._scaleRules = u.scaleRules.VIEW_OVERFLOW, this.getScale()
        },getViewFullScreenScale: function() {
            return this._scaleRules = o, this.getScale()
        },getScale: function(e) {
            if (this._scaleRulesChanged || this._designSizeChanged || this._canvasSizeChanged) {
                var t = this._scaleRule, n = this._canvasWidth / this._designWidth, r = this._canvasHeight / this._designHeight;
                switch (t) {
                    case i:
                        this._scaleX = this._scaleY = Math.min(n, r);
                        break;
                    case s:
                        this._scaleX = this._scaleY = Math.max(n, r);
                        break;
                    case o:
                        this._scaleX = n, this._scaleY = r;
                        break;
                    default:
                }
                this._scaleRulesChanged = !1, this._designSizeChanged = !1, this._canvasSizeChanged = !1
            }
            return {x: this._scaleX,y: this._scaleY}
        }});
    u.RULE_VIEW_BORDER = i, u.RULE_VIEW_OVERFLOW = s, u.RULE_VIEW_FULL = o, u.getInstance = function() {
        return this._instance || (this._instance = new u), this._instance
    }
}), define("DOMNode/DOMNode", ["require", "exports", "module", "core/Node", "core/Scale", "util/Log", "util/mix", "util/CSSCMDBuilder"], function(e, t, n) {
    var r = e("core/Node"), i = e("core/Scale"), s = e("util/Log"), o = e("util/mix"), u = o.bindContext, a = e("util/CSSCMDBuilder"), f = a.buildTranslateCMD, l = a.buildRotateCMD, c = a.buildScaleCMD, h = a.buildSkewCMD, p = a.buildTransformOriginCMD, d = a.buildTransformCMD, v = null, m = n.exports = r.extend(v = {_idHasSeted: !1,init: function(e, t, n, r, i, s) {
            this._super(e, t, n, r, i), s = this._dom = s || document.createElement("div"), s.className = this._nodeClass, s.style[o.fixedBoxSizingKey] = "border-box", s.style.position = "absolute", s.style.left = "0px", s.style.top = "0px";
            if (s.id) {
                this._id = s.id;
                return
            }
            s.id = this._id
        },_getContentScaleRatio: function() {
            if (this._scaleRule == 0)
                return null;
            var e = i.getInstance().getScale(), t = e.x, n = e.y;
            switch (Number(scaleRule)) {
                case i.RULE_VIEW_BORDER:
                    t = n = Math.min(t, n);
                    break;
                case i.RULE_VIEW_OVERFLOW:
                    t = n = Math.max(t, n);
                    break;
                case i.RULE_VIEW_FULL:
                default:
            }
            return [t, n]
        },id: function(e) {
            return e && !this._idHasSeted ? (this._idHasSeted = !0, this._id = this._dom.id = e, e) : this._id
        },hide: function() {
            this._dom.style.display = "none"
        },show: function() {
            this._dom.style.display = "block"
        },remove: function(e) {
            this._super(e);
            try {
                this._parent ? this._parent._dom.removeChild(this._dom) : !e && this._dom.parentNode && this._dom.parentNode.removeChild(this._dom)
            } catch (t) {
                s.warn(t)
            }
        },getDom: function() {
            return this._dom
        },addDOMEvent: function(e, t) {
            this._dom.addEventListener(e, u(t, this), !1)
        },render: function(e) {
            var t = this._super(e), n = this._dom, r = i.getInstance().getScale(), s = r.x, u = r.y;
            this._changedProperties = [];
            if (e || this._sizeChanged)
                n.style.width = this._width * s + "px", n.style.height = this._height * u + "px", this._sizeChanged = !1, this._positionChanged = !0, t = !0;
            this._opacityChanged && (n.style.opacity = this._opacity, this._opacity == 0 ? n.style.visibility = "hidden" : (n.style[o.fixedTransitionKey] += ",visibility 0s linear 0s", n.style.visibility = "visible"), this._opacityChanged = !1, t = !0), this._bgChanged && (n.style.backgroundColor = this._bgColor, this._bgChanged = !1, t = !0), this._zOrderChanged && (n.style.zIndex = this._zOrder, this._zOrderChanged = !1, t = !0), this._originChanged && (n.style[o.fixedTransformOriginKey] = p(this._oX, this._oY, this._oZ), this._originChanged = !1, this._positionChanged = !0, t = !0);
            if (!this._isRoot && (e || this._positionChanged || this._scaleChanged || this._rotateChanged || this._skewChanged || this._originChanged)) {
                var a = "", v = "", m = "", g = "", y = "", b = this._pX, w = this._pY;
                o.valueIsFraction(b) && (b = o.fractionToDecimal(b) * this.parent().getWidth()), o.valueIsFraction(w) && (w = o.fractionToDecimal(w) * this.parent().getHeight()), b = (b - this._width * this._oX) * s, w = (w - this._height * this._oY) * u, a = f(b, w, this._pZ || this._zOrder), v = l(this._rX, this._rY, this._rZ), m = c(this._sX, this._sY, this._sZ), g = h(this._kX, this._kY), y = d(a, v, m, g), n.style[o.fixedTransformKey] = y, this._positionChanged = !1, this._scaleChanged = !1, this._rotateChanged = !1, this._skewChanged = !1, t = !0
            }
            return t
        }});
    m.protoOjbect = v
}), define("DOMNode/DOMContainerNode", ["require", "exports", "module", "core/ContainerNode", "DOMNode/DOMNode"], function(e, t, n) {
    var r = e("core/ContainerNode"), i = e("DOMNode/DOMNode"), s = n.exports = r.extend(i.protoOjbect).extend({addChild: function(e) {
            return this._super(e) ? (this._dom.appendChild(e._dom), !0) : !1
        },removeChild: function(e, t) {
            if (this._super(e, t))
                try {
                    this._dom.removeChild(e._dom)
                } catch (n) {
                    Log.warn(n)
                }
        },getMediaList: function() {
            var e = [];
            return this.getChildren().forEach(function(t) {
                if (t.getMediaList) {
                    e = e.concat(t.getMediaList());
                    return
                }
                var n = t.type();
                (n == "erquan_video" || n == "erquan_audio") && e.push(t)
            }), e
        },render: function(e) {
            var t = e || this._sizeChanged, n = this._super(e);
            return t && this.renderChildren(!0), n
        }})
}), define("DOMNode/StepAbleNode", ["require", "exports", "module", "DOMNode/DOMContainerNode", "util/mix"], function(e, t, n) {
    var r = e("DOMNode/DOMContainerNode"), i = e("util/mix"), s = n.exports = r.extend({nextStep: i.noop,prevStep: i.noop,play: i.noop,pause: i.noop,stop: i.noop})
}), define("lang/List", ["require", "exports", "module", "lang/Observer"], function(e, t, n) {
    var r = e("lang/Observer"), i = n.exports = r.extend({_index: -1,_loop: !0,_list: null,init: function(e) {
            this._list = [], this.loop(e)
        },add: function(e) {
            this._list.push(e)
        },setList: function(e) {
            e && (this._list = e)
        },len: function() {
            return this._list.length
        },loop: function(e) {
            return e != undefined ? (this._loop = !!e, this) : this._loop
        },index: function(e) {
            return e != undefined && this.len() && (e = Number(e), e < 0 ? e == 0 : e >= this._list.length && (e = this._list.length - 1), this._index = e), this._index
        },prevIndex: function() {
            var e = this._index - 1;
            return e = e >= 0 ? e : this._loop ? this._list.length - 1 : 0, e
        },nextIndex: function() {
            var e = this._index + 1;
            return e = e < this._list.length ? e : this._loop ? 0 : this._list.length - 1, e
        },current: function() {
            return this._list[this._index]
        },prev: function() {
            var e = this.prevIndex();
            return this._index = e, this._index == e && this.trigger(i.EVENT_LIST_ENDED), this._list[e]
        },next: function() {
            var e = this.nextIndex();
            return this._index == e && this.trigger(i.EVENT_LIST_ENDED, !0), this._index = e, this._list[e]
        }});
    i.EVENT_LIST_ENDED = "event_list_ended"
}), define("DOMNode/DOMContentNode", ["require", "exports", "module", "DOMNode/DOMNode", "core/Scale", "util/mix"], function(e, t, n) {
    var r = e("DOMNode/DOMNode"), i = e("core/Scale"), s = e("util/mix"), o = n.exports = r.extend({_contentDom: null,_scaleRule: i.RULE_VIEW_BORDER,_scaleRuleChanged: !1,init: function() {
            this._super.apply(this, arguments), this._dom.style.overflow = "hidden"
        },setContentDom: function(e, t) {
            this._contentDom && (this._dom.removeChild(this._contentDom), this._contentDom = null), t || (e.style.position = "absolute", e.style.top = "50%", e.style.left = "50%", e.style[s.fixedTransformKey] = "translate(-50%,-50%)", e.style[s.fixedTransitionKey] = "inherit"), this._dom.appendChild(this._contentDom = e)
        },resetContentDomSize: function() {
            var e = this.getContentScaleRatio(), t = e[0], n = e[1];
            this._contentDom.style.width = t * this._width + "px", this._contentDom.style.height = n * this._height + "px", this._scaleRuleChanged = !1
        },getContentScaleRatio: function(e, t) {
            if (!e || !t) {
                var n = i.getInstance().getScale();
                e = e || n.x, t = t || n.y
            }
            switch (Number(this._scaleRule)) {
                case i.RULE_VIEW_BORDER:
                    e = t = Math.min(e, t);
                    break;
                case i.RULE_VIEW_OVERFLOW:
                    e = t = Math.max(e, t);
                    break;
                case i.RULE_VIEW_FULL:
                default:
            }
            return [e, t]
        },setScaleRule: function(e) {
            if (!e)
                return;
            this._scaleRule != e && (this._scaleRule = e, this._scaleRuleChanged = !0)
        },setCustomData: function(e) {
            this._super(e);
            if (!this._customDataChanged || !this._customData || !this._customData.scaleRule)
                return;
            this.setScaleRule(this._customData.scaleRule)
        }})
}), define("DOMNode/Media", ["require", "exports", "module", "DOMNode/DOMContentNode", "util/mix"], function(e, t, n) {
    var r = e("DOMNode/DOMContentNode"), i = e("util/mix"), s = n.exports = r.extend({_nodeClass: "erquan_media",_meta: {index: 0},_type: 1,_player: null,_sources: null,_auto: !1,_loop: !0,_controls: !0,_preload: !0,_playing: !1,_playStatus: 3,_resourceLoaded: !1,init: function(e, t, n, r, i, o) {
            this._super(n, r, i, o), this._sources = [], e && this.mediaType(e), this._type == s.TYPE_AUDIO ? this._player = document.createElement("audio") : this._player = document.createElement("video"), this.auto(this._auto), this.loop(this._loop), this.controls(this._controls), this.preload(this._preload), this._player.style.width = "100%", this._player.style.height = "100%", this.setContentDom(this._player, !0);
            var u = this._onPlay.bind(this), a = this._onPause.bind(this);
            this._player.addEventListener("pause", a, !1), this._player.addEventListener("ended", a, !1), this._player.addEventListener("play", u, !1);
            if (!t)
                return;
            t.forEach || (t = [t]);
            var f = this;
            t.forEach(function(e) {
                f.addSource(e)
            })
        },_onPlay: function() {
            this._playing = !0, this._customDataChanged = !0, this._playStatus = s.STATUS_PLAY, this.trigger(s.EVENT_PLAYING)
        },_onPause: function() {
            this._playing = !1, this._customDataChanged = !0, this._playStatus = s.STATUS_PAUSE, this.trigger(s.EVENT_PAUSED)
        },_setPlayStatus: function(e) {
            if (!this._sources.length || !this._resourceLoaded || e == this._playStatus)
                return;
            this._playStatus = e, this._playStatus == s.STATUS_PLAY ? this.play() : this._playStatus == s.STATUS_PAUSE ? this.pause() : this._playStatus == s.STATUS_STOP && this.stop()
        },auto: function(e) {
            return e != undefined && (this._auto = !!e, this._player.auto = this._auto ? "autoplay" : ""), this._auto
        },loop: function(e) {
            return e != undefined && (this._loop = !!e, this._player.loop = this._loop ? "loop" : ""), this.loop
        },controls: function(e) {
            return e != undefined && (this._controls = !!e, this._player.controls = this._controls ? "controls" : ""), this._controls
        },preload: function(e) {
            return e != undefined && (this._preload = !!e, this._player.preload = this._preload ? "auto" : "none"), this._preload
        },loadResource: function(e) {
            if (this._resourceLoaded || this._preload || !this._sources.length) {
                this._resourceLoaded = !0, e && e();
                return
            }
            var t = this, n = this._player, r = null, i = function(s) {
                n.removeEventListener("abort", i, !1), n.removeEventListener("error", i, !1), n.removeEventListener("canplay", i, !1), r && (clearTimeout(r), r = null), t._resourceLoaded = !0, e && e()
            };
            this._resourceLoaded = !1, r = setTimeout(i, 15e3), n.addEventListener("canplay", i, !1), n.addEventListener("error", i, !1), n.addEventListener("abort", i, !1), n.load()
        },resourceLoaded: function() {
            return this._resourceLoaded
        },mediaType: function(e) {
            return e && this._type != e && (e == s.TYPE_AUDIO || e == s.TYPE_VIDEO) && (this._type = e), this._type
        },addSource: function(e) {
            if (this._sources.indexOf(e) != -1)
                return;
            this._sources.push(e);
            var t = document.createElement("source");
            t.src = e, this._player.appendChild(t)
        },playing: function() {
            return this._playing
        },play: function() {
            this._player.play()
        },pause: function() {
            this._player.pause()
        },stop: function() {
            this._player.pause(), this._playStatus = s.STATUS_STOP, this._player.duration && (this._player.currentTime = this._player.duration)
        },render: function(e) {
            var t = this._sizeChanged, n = e || t || this._customDataChanged, r = this._super(e);
            if (!n)
                return r;
            r = !0, this._customDataChanged = !1, this._setPlayStatus(this._customData.playStatus || s.STATUS_STOP);
            if (!e) {
                if (e || t || this._scaleRuleChanged)
                    r = !0;
                return r
            }
            return r = !0, r
        }});
    s.TYPE_AUDIO = 1, s.TYPE_VIDEO = 2, s.STATUS_PLAY = 1, s.STATUS_PAUSE = 2, s.STATUS_STOP = 3, s.EVENT_PLAYING = "event_playing", s.EVENT_PAUSED = "event_paused"
}), define("DOMNode/Audio", ["require", "exports", "module", "DOMNode/Media", "lang/Observer"], function(e, t, n) {
    var r = e("DOMNode/Media"), i = e("lang/Observer"), s = null, o = new i, u = function() {
        this == s && o.trigger(f.EVENT_BG_MUSIC_PLAYING)
    }, a = function() {
        this == s && o.trigger(f.EVENT_BG_MUSIC_PAUSED)
    }, f = n.exports = r.extend({_nodeClass: "erquan_audio",_meta: {index: 0},_type: r.TYPE_AUDIO,_isBackground: !1,isBackground: function(e) {
            return e != undefined && (this._isBackground = !!e, this._isBackground && (f.bootBackground(this), this.bind(r.EVENT_PLAYING, u), this.bind(r.EVENT_PAUSED, a))), this._isBackground
        },play: function() {
            if (!this._isBackground) {
                this._player.play();
                return
            }
            if (s && s.playing()) {
                if (this == s)
                    return;
                s.stop()
            }
            s = this, this._player.play()
        }});
    f.backgroundEventBind = function() {
        o.bind.apply(o, arguments)
    }, f.backgroundEventUnbind = function() {
        o.unbind.apply(o, arguments)
    }, f.getBackground = function() {
        return s
    }, f.bootBackground = function(e) {
        e && (!s || !s.playing()) && (s = e)
    }, f.resumeBackground = function() {
        s && s.play()
    }, f.pauseBackground = function() {
        s && s.pause()
    }, f.stopBackground = function() {
        s && s.stop()
    }, f.EVENT_BG_MUSIC_PLAYING = "event_bg_music_playing", f.EVENT_BG_MUSIC_PAUSED = "event_bg_music_paused"
}), define("util/CSSEaseCMDBuilder", ["require", "exports", "module", "util/Log"], function(e, t, n) {
    var r = e("util/Log"), i = {none: "none",linear: "linear",ease: "ease",easeIn: "ease-in",easeOut: "ease-out",easeInOut: "ease-in-out",easeInCubic: "cubic-bezier(.55,.055,.675,.19)",easeOutCubic: "cubic-bezier(.215,.61,.355,1)",easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",easeInCirc: "cubic-bezier(.6,.04,.98,.335)",easeOutCirc: "cubic-bezier(.075,.82,.165,1)",easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",easeInExpo: "cubic-bezier(.95,.05,.795,.035)",easeOutExpo: "cubic-bezier(.19,1,.22,1)",easeInOutExpo: "cubic-bezier(1,0,0,1)",easeInQuad: "cubic-bezier(.55,.085,.68,.53)",easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",easeInQuart: "cubic-bezier(.895,.03,.685,.22)",easeOutQuart: "cubic-bezier(.165,.84,.44,1)",easeInOutQuart: "cubic-bezier(.77,0,.175,1)",easeInQuint: "cubic-bezier(.755,.05,.855,.06)",easeOutQuint: "cubic-bezier(.23,1,.32,1)",easeInOutQuint: "cubic-bezier(.86,0,.07,1)",easeInSine: "cubic-bezier(.47,0,.745,.715)",easeOutSine: "cubic-bezier(.39,.575,.565,1)",easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",easeInBack: "cubic-bezier(.6,-.28,.735,.045)",easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"};
    n.exports = {build: function(e) {
            return e ? i[e] ? i[e] : (r.warn("unkwon easing function: " + e), e) : i.ease
        }}
}), define("core/Action", ["require", "exports", "module", "core/Entity", "util/CSSCMDBuilder", "util/CSSEaseCMDBuilder", "util/mix"], function(e, t, n) {
    var r = e("core/Entity"), i = e("util/CSSCMDBuilder").buildTransitionCMD, s = e("util/CSSEaseCMDBuilder").build, o = e("util/mix"), u = s("ease"), a = 0, f = 0, l = 0, c = 1e3, h = 20, p = n.exports = r.extend({_changeWhileSeted: !0,_target: null,_playTime: a,_easing: u,_delayTime: f,_playTimeFormal: a,_easingFormal: u,_delayTimeFormal: f,_startTimestamp: null,_transitionIsTmp: !1,_playing: !1,_duration: 0,_position: 0,_timer: null,_idleTimer: null,_waitingNextAnimTimer: null,_transitionChanged: !1,_waitTransitionEnd: !0,_animHasCleared: !0,_locked: !1,init: function(e) {
            r.prototype.reset.call(this, e)
        },_bootAnim: function() {
            this._animHasCleared = !1
        },clearAnim: function(e) {
            this._animHasCleared = !0, !e && this.trigger(p.EVENT_ANIM_END)
        },_switchToTmpTransition: function(e, t, n) {
            if (!e && !t && !n)
                return;
            this._transitionIsTmp = !0, this._playTimeFormal = this._playTime, this._easingFormal = this._easing, this._delayTimeFormal = this._delayTime, this.setTransition(e, t, n)
        },_restoreToFormalTransition: function() {
            this._transitionIsTmp && (this.setTransition(this._playTimeFormal, this._easingFormal, this._delayTimeFormal), this._transitionIsTmp = !1)
        },_onComplete: function() {
            this._timer = null, this._startTimestamp = null, this.trigger(p.EVENT_COMPLETED)
        },clone: function(e, t) {
            var n = this._super();
            return n._locked = this._locked, e && (n._target = this._target), t && (n._playTime = this._playTime, n._delayTime = this._delayTime, n._easing = this._easing, n._playTimeFormal = this._playTimeFormal, n._easingFormal = this._easingFormal, n._delayTimeFormal = this._delayTimeFormal, n._transitionIsTmp = this._transitionIsTmp, n._duration = this._duration, n._transitionChanged = this._transitionChanged), n
        },target: function(e) {
            return e ? (this._target = e, this) : this._target
        },waitTransitionEnd: function(e) {
            return e != undefined && (this._waitTransitionEnd = e), this._waitTransitionEnd
        },setTransition: function(e, t, n) {
            e = e || a, t = t || u, n = n || f, this._playTime != e && (this._playTime = e, this._transitionChanged = !0), this._easing != t && (this._easing = s(t), this._transitionChanged = !0), this._delayTime != n && (this._delayTime = n, this._transitionChanged = !0);
            if (!this._transitionChanged)
                return;
            var r = n + e;
            if (!r) {
                this._duration = 0;
                return
            }
            this._duration = r * c + l
        },getTransition: function() {
            return [this._playTime, this._easing, this._delayTime]
        },lock: function(e) {
            return e != undefined && (this._locked = !!e), this._locked
        },start: function(e, t, n, r) {
            var i = this;
            if (this._locked)
                return this._timer = setTimeout(function() {
                    i._onComplete()
                }, 0), !0;
            var s = this._target;
            if (!s)
                return !1;
            this.stop(!1, !0), this._sizeChanged && s.setSize(this._width, this._height), this._positionChanged && s.setPosition(this._pX, this._pY, this._pZ), this._scaleChanged && s.setScale(this._sX, this._sY, this._xZ), this._rotateChanged && s.setRotate(this._rX, this._rY, this._rZ), this._skewChanged && s.setSkew(this._kX, this._kY), this._originChanged && s.setOrigin(this._oX, this._oY, this._oZ), this._opacityChanged && s.setOpacity(this._opacity), this._bgChanged && s.setBgColor(this._bgColor), this._zOrderChanged && s.setZOrder(this._zOrder), this._customDataChanged && s.setCustomData(this._customData), this._restoreToFormalTransition(), this._switchToTmpTransition(e, t, n);
            var o = this._duration;
            return this._bootAnim(), this.trigger(p.EVENT_START), r = r == undefined ? this._waitTransitionEnd : r, !s.render() && !r && (o = 0), this._startTimestamp = Date.now(), !r || !o ? (!o && i.clearAnim(!0), this._timer = setTimeout(function() {
                i._onComplete()
            }, 0), !0) : (this._timer = setTimeout(function() {
                i.clearAnim(!1), i._onComplete()
            }, o), !0)
        },stop: function(e, t) {
            if (!this._target)
                return;
            var n = this._target;
            t && n._waitingNextAnimTimer && (clearTimeout(n._waitingNextAnimTimer), n._waitingNextAnimTimer = null);
            if (!this._timer)
                return;
            var r = this._startTimestamp;
            clearTimeout(this._timer), this._onComplete();
            if (t)
                return;
            var i = this, s = h;
            e || (s = this._duration - (Date.now() - r), s <= 0 && (s = h)), n._waitingNextAnimTimer = setTimeout(function() {
                i.clearAnim(!1), n._waitingNextAnimTimer = null
            }, s)
        }});
    p.EVENT_START = "event_start", p.EVENT_COMPLETED = "event_completed", p.EVENT_ANIM_END = "event_anim_end"
}), define("action/DOMCSSAction", ["require", "exports", "module", "core/Action", "util/mix", "util/CSSCMDBuilder"], function(e, t, n) {
    var r = e("core/Action"), i = e("util/mix"), s = e("util/CSSCMDBuilder").buildTransitionCMD, o = "none", u = n.exports = r.extend({_bootAnim: function() {
            this._super();
            if (this._easing == o)
                return this.clearAnim(!0);
            var e = this._target, t = [];
            e._sizeChanged && (t.push("width"), t.push("height")), e._opacityChanged && (t.push("opacity"), e._opacity == 0 && t.push("visibility")), e._bgChanged && t.push("background"), e._zOrderChanged && t.push("z-index"), e.setText && (t.push("font"), t.push("text-align")), t.push(i.fixedTransformOriginStrikeKey), t.push(i.fixedTransformStrikeKey);
            var n = s(this._playTime, this._easing, this._delayTime, t);
            this._setTargetTransition(n)
        },_setTargetTransition: function(e) {
            this._target.getDom().offsetWidth, this._target.getDom().style[i.fixedTransitionKey] = e
        },clearAnim: function(e) {
            this._animHasCleared || (this._setTargetTransition(o), this._super(e))
        }})
}), define("action/DOMCSSActionNoTransition", ["require", "exports", "module", "action/DOMCSSAction"], function(e, t, n) {
    var r = e("action/DOMCSSAction"), i = n.exports = r.extend({_bootAnim: function() {
            this._speedTime = 0, this.clearAnim(!0)
        }})
}), define("action/OneVisibleInOutAction", ["require", "exports", "module", "core/Action", "action/DOMCSSAction", "action/DOMCSSActionNoTransition", "util/mix"], function(e, t, n) {
    var r = e("core/Action"), i = e("action/DOMCSSAction"), s = e("action/DOMCSSActionNoTransition"), o = e("util/mix").clone, u = {position: [0, 0, 0],transition: [1, "ease", 0],opacity: 1}, a = [1, "ease", 0], f = u, l = {position: [0, -1, 0],transition: a}, c = {position: [0, 1, 0],transition: a}, h = {position: [-1, 0, 0],transition: a}, p = {position: [1, 0, 0],transition: a}, d = {opacity: 0,transition: a}, v = function(e, t) {
        e = o(e);
        if (e.position) {
            var n = t.parent().getSize(), r = n[0], i = n[1], s = t.getOrigin(), u = s[0], a = s[1], f = e.position, l = (f[0] + u) * r, c = (f[1] + a) * i;
            e.position = [l, c, f[2]]
        }
        return e
    }, m = function(e, t, n) {
        if (!e)
            return t.show();
        e = v(e, t), t.runAction((new s(e)).target(t)), t.show();
        var o = v(u, t), a = new i(o);
        n && a.bind(r.EVENT_COMPLETED, function() {
            n()
        }), t.runAction(a.target(t))
    }, g = function(e, t, n) {
        if (!e)
            return t.hide();
        e = v(e, t);
        var s = new i(e);
        s.bind(r.EVENT_COMPLETED, function() {
            t.hide(), n && n()
        }), t.runAction(s.target(t))
    };
    n.exports = {ACTION_TYPE_VISIBLE: f,ACTION_TYPE_POS_TOP: l,ACTION_TYPE_POS_BOTTOM: c,ACTION_TYPE_POS_RIGHT: p,ACTION_TYPE_POS_LEFT: h,ACTION_TYPE_FADE_IN: d,startIn: m,startOut: g}
}), define("control/Step", ["require", "exports", "module", "lang/Observer", "core/Action"], function(e, t, n) {
    var r = e("lang/Observer"), i = e("core/Action"), s = 1, o = 17, u = n.exports = r.extend({_hasCompletedCount: 0,_actionCollection: null,_ignoreComplete: !1,_playEndPaused: !1,_type: s,_delayDuration: 0,_duration: 0,_durationAction: null,init: function(e) {
            this._actionCollection = [], this._playEndPaused = e == undefined ? !0 : !!e
        },_complete: function() {
            !this._ignoreComplete && this.trigger(u.EVENT_COMPLETED)
        },_updateTime: function(e) {
            var t = e.getTransition(), n = t[0], r = t[2];
            r > this._delayDuration && (this._delayDuration = r);
            var i = n + r;
            if (i > this._duration) {
                this._duration = i, this._durationAction && this._durationAction.waitTransitionEnd(!1), (this._durationAction = e).waitTransitionEnd(!0);
                return
            }
            e.waitTransitionEnd(!1)
        },_clearAnim: function() {
            var e = 0, t = this._actionCollection.length;
            for (; e < t; e++)
                this._actionCollection[e].clearAnim(!0)
        },getDuration: function() {
            return this._duration
        },getDelayDuration: function() {
            return this._delayDuration
        },getPlayEndPaused: function() {
            return this._playEndPaused
        },type: function(e) {
            return e != undefined && (this._type = e), this._type
        },addAction: function(e) {
            var t = this;
            this._updateTime(e), this._actionCollection.push(e), e.bind(i.EVENT_COMPLETED, function() {
                t._hasCompletedCount += 1, t._hasCompletedCount >= t._actionCollection.length && (t._hasCompletedCount = 0, t._complete())
            }), e.bind(i.EVENT_ANIM_END, function() {
                t._clearAnim()
            })
        },getActions: function() {
            return this._actionCollection
        },getActionByTarget: function(e) {
            var t = null;
            return this._actionCollection.forEach(function(n) {
                if (e == n.target())
                    return t = n, !1
            }), t
        },start: function() {
            var e = 0, t = this._actionCollection.length;
            if (!t) {
                this._complete();
                return
            }
            for (; e < t; e++)
                this._actionCollection[e].start();
            this.trigger(u.EVENT_START)
        },stop: function(e) {
            this._ignoreComplete = !0;
            var t = 0, n = this._actionCollection.length;
            if (!n) {
                this._complete();
                return
            }
            for (; t < n; t++)
                this._actionCollection[t].stop(e);
            this._hasCompletedCount = 0, this._ignoreComplete = !1
        }});
    u.EVENT_START = "event_start", u.EVENT_COMPLETED = "event_completed", u.TYPE_NORMAL = s, u.TYPE_INIT = o
}), define("control/StepList", ["require", "exports", "module", "lang/List", "control/Step"], function(e, t, n) {
    var r = e("lang/List"), i = e("control/Step"), s = n.exports = r.extend({_busy: !1,_index: 0,_order: 1,_id: "",resumeInNextLoop: !1,init: function(e) {
            var t = !0;
            e && (t = e.loop), this.id(e.id), this._super(t)
        },_setOrder: function(e) {
            if (e == undefined || this._order == e || e != s.ORDER_ASC && e != s.ORDER_DESC)
                return;
            this._order = e
        },_complete: function() {
            this._playing = !1, this.trigger(s.EVENT_STEP_LIST_COMPLETED, !!this._order)
        },_start: function(e, t) {
            if (!this._list.length || !this._loop && this._index == e) {
                !t && this._complete();
                return
            }
            if (t && this._list[this._index].getPlayEndPaused())
                return;
            this.play(e)
        },id: function(e) {
            return e && (this._id = e), this._id
        },playing: function() {
            return this._busy
        },order: function(e) {
            return e != undefined && (this._order = e), this._order
        },addStep: function(e) {
            this.add(e);
            var t = this;
            e.bind(i.EVENT_COMPLETED, function() {
                t._busy = !1, t.trigger(s.EVENT_STEP_END, t._index, t._list[t._index]);
                if (t._list[t._index].getPlayEndPaused())
                    return;
                t._order == s.ORDER_ASC ? t.next() : t.prev()
            })
        },prev: function(e) {
            var t = this._index - 1;
            t = t >= 0 ? t : this._loop ? this._list.length - 1 : 0, this._order = s.ORDER_DESC, this._start(t, e)
        },next: function(e) {
            var t = this._index + 1;
            t = t < this._list.length ? t : this._loop ? 0 : this._list.length - 1, this._order = s.ORDER_ASC, this._start(t, e)
        },pause: function(e) {
            if (!this._list.length)
                return;
            this._busy && (this._list[this._index].stop(e), this._busy = !1)
        },stop: function() {
            this.play(0), this.pause(!0), this._order = s.ORDER_ASC, this.resumeInNextLoop = !1
        },play: function(e, t) {
            if (!this._list.length)
                return this._complete();
            e = parseInt(e), e = !e && e != 0 ? this._index : e;
            var n = this._list[e];
            n && (t != undefined && this._setOrder(parseInt(t)), this.pause(), this._index = e, this._busy = !0, n.start(!!this._order), this.trigger(s.EVENT_STEP_START, e, n))
        }});
    s.EVENT_STEP_START = "event_step_start", s.EVENT_STEP_END = "event_step_end", s.EVENT_STEP_LIST_COMPLETED = "event_step_list_completed", s.ORDER_DESC = 0, s.ORDER_ASC = 1
}), define("DOMNode/OneVisibleNode", ["require", "exports", "module", "core/Node", "DOMNode/StepAbleNode", "DOMNode/Audio", "action/OneVisibleInOutAction", "control/StepList", "util/Log"], function(e, t, n) {
    var r = e("core/Node"), i = e("DOMNode/StepAbleNode"), s = e("DOMNode/Audio"), o = e("action/OneVisibleInOutAction"), u = e("control/StepList"), a = e("util/Log"), f = o.startIn, l = o.startOut, c = function(e, t, n) {
        return function() {
            e.play(n), t && t(), e.trigger(p.EVENT_SWITCH_IN_END)
        }
    }, h = function(e, t) {
        return function() {
            e.pause(!0), t && t(), e.trigger(p.EVENT_SWITCH_OUT_END)
        }
    }, p = n.exports = i.extend({_sysStepList: null,_stepLists: null,_playControl: !0,_orderOutActionData: o.ACTION_TYPE_POS_TOP,_orderInActionData: o.ACTION_TYPE_POS_BOTTOM,_reverseOutActionData: o.ACTION_TYPE_POS_BOTTOM,_reverseInActionData: o.ACTION_TYPE_POS_TOP,_mainInActionData: o.ACTION_TYPE_FADE_IN,init: function(e, t, n, r, i, s) {
            this._super(e, t, n, r, i), this._dom.style.overflow = "hidden", this._stepLists = []
        },setOrderOutActionData: function(e) {
            return e && (this._orderOutActionData = e), this
        },setOrderInActionData: function(e) {
            return e && (this._orderInActionData = e), this
        },setReverseOutActionData: function(e) {
            return e && (this._reverseOutActionData = e), this
        },setReverseInActionData: function(e) {
            return e && (this._reverseInActionData = e), this
        },setMainInActionData: function(e) {
            return e && (this._mainInActionData = e), this
        },addStepList: function(e) {
            if (!e || ~this._stepLists.indexOf(e))
                return !1;
            this._stepLists.push(e);
            if (this._sysStepList)
                return;
            this._sysStepList = e, this._sysStepList.cleanStep();
            var t = this;
            e.bind(u.EVENT_STEP_LIST_COMPLETED, function(e) {
                t.trigger(p.EVENT_STEP_LIST_COMPLETED, e)
            })
        },getStepLists: function() {
            return this._stepLists
        },getSysStepList: function() {
            return this._sysStepList
        },runMainInAction: function(e) {
            f(this._mainInActionData, this, c(this, e, u.ORDER_ASC)), this.trigger(p.EVENT_SWITCH_IN_START)
        },runOrderInAction: function(e) {
            f(this._orderInActionData, this, c(this, e, u.ORDER_ASC)), this.trigger(p.EVENT_SWITCH_IN_START)
        },runOrderOutAction: function(e) {
            l(this._orderOutActionData, this, h(this, e)), this.trigger(p.EVENT_SWITCH_OUT_START)
        },runReverseInAction: function(e) {
            f(this._reverseInActionData, this, c(this, e, u.ORDER_DESC)), this.trigger(p.EVENT_SWITCH_IN_START)
        },runReverseOutAction: function(e) {
            l(this._reverseOutActionData, this, h(this, e)), this.trigger(p.EVENT_SWITCH_OUT_START)
        },playControl: function(e) {
            return e != undefined && (this._playControl = !!e), this._playControl
        },moveToStep: function(e) {
            this._sysStepList && this._sysStepList.play(e)
        },nextStep: function() {
            this._sysStepList && this._sysStepList.next()
        },prevStep: function() {
            this._sysStepList && this._sysStepList.prev()
        },play: function(e) {
            this._stepLists && this._stepLists.forEach(function(e, t) {
                if (t == 0 || !e.resumeInNextLoop || !e.len() || e.playing())
                    return;
                delete e.resumeInNextLoop, e.play()
            });
            var t = !1;
            this.getMediaList().forEach(function(e) {
                e.resumeInNextLoop ? (delete e.resumeInNextLoop, e.play()) : !t && e.isBackground && e.isBackground() && (s.bootBackground(e), t = !0)
            });
            if (this._sysStepList.playing())
                return;
            this._sysStepList.play(), this._sysStepList.pause(!0), e == undefined && (e = this._sysStepList.order()), e ? this._sysStepList.next(!0) : this._sysStepList.prev(!0)
        },pause: function(e) {
            this._stepLists && this._stepLists.forEach(function(t, n) {
                if (n == 0 || !t.playing())
                    return;
                t.pause(e), t.resumeInNextLoop = !0
            }), this.getMediaList().forEach(function(e) {
                e.playing() && (!e.isBackground || !e.isBackground()) && (e.pause(), e.resumeInNextLoop = !0)
            }), this._sysStepList.pause(e)
        },stop: function() {
            this._stepLists && this._stepLists.forEach(function(e, t) {
                t != 0 && e.stop()
            }), this.getMediaList().forEach(function(e) {
                e.playing() && (!e.isBackground || !e.isBackground()) && e.stop()
            }), this._sysStepList.stop()
        }});
    p.EVENT_SWITCH_IN_START = "event_switch_in_start", p.EVENT_SWITCH_IN_END = "event_switch_in_end", p.EVENT_SWITCH_OUT_START = "event_switch_out_start", p.EVENT_SWITCH_OUT_END = "event_switch_out_end", p.EVENT_STEP_LIST_COMPLETED = "event_step_list_completed"
}), define("DOMNode/OneVisibleNodeList", ["require", "exports", "module", "DOMNode/StepAbleNode", "lang/List", "DOMNode/OneVisibleNode", "control/StepList"], function(e, t, n) {
    var r = e("DOMNode/StepAbleNode"), i = e("lang/List"), s = e("DOMNode/OneVisibleNode"), o = e("control/StepList"), u = n.exports = r.extend({_inChild: null,_outChild: null,_list: null,_activeStepList: null,_idle: !0,_loop: !0,init: function(e, t, n, r, s, o) {
            this._super(e, t, n, r, s, o), this._dom.style.overflow = "hidden", this._list = new i(this._loop), this._list.setList(this._children)
        },_runSwitchStep: function(e, t, n) {
            if (!t)
                return;
            var r = this, i = e == t, s = !1;
            if (i && (this._children.length > 1 || !this._list.loop())) {
                this._activeStepList = t.getSysStepList();
                return
            }
            var o = function() {
                r._idle = !0, r._activeStepList = t.getSysStepList(), r.trigger(u.EVENT_CHILD_SWITCH_END, r._inChild, r._outChild)
            };
            this._idle = !1, this._inChild || (s = !0, i = !1), this._inChild = t, this._outChild = e, this.renderChildren(!0);
            var a = "", f = "";
            this.trigger(u.EVENT_CHILD_SWITCH_START, this._inChild, this._outChild), s ? a = "runMainInAction" : n ? (a = "runOrderInAction", f = "runOrderOutAction") : (a = "runReverseInAction", f = "runReverseOutAction");
            if (i) {
                this._outChild[f](function() {
                    r._inChild[a](function() {
                        o()
                    })
                });
                return
            }
            this._outChild && this._outChild[f](), this._inChild[a](function() {
                o()
            })
        },getCurrent: function() {
            return this._inChild
        },getIndex: function() {
            return this._list.index()
        },addChild: function(e) {
            var t = this;
            if (this._super(e)) {
                e.hide(), e.bind(s.EVENT_STEP_LIST_COMPLETED, function(e) {
                    e ? t.next() : t.prev()
                });
                var n = e.getSysStepList();
                if (!n)
                    return;
                n.bind(o.EVENT_STEP_START, function(e) {
                    t.trigger(u.EVENT_STEP_START, e)
                }), n.bind(o.EVENT_STEP_END, function(e) {
                    t.trigger(u.EVENT_STEP_END, e)
                })
            }
        },removeChild: function(e) {
            this._super(e), e.unbind(s.EVENT_STEP_LIST_COMPLETED)
        },loop: function(e) {
            this._list.loop(e)
        },nextStep: function() {
            if (!this._idle)
                return;
            if (!this._activeStepList) {
                this._runSwitchStep(this._inChild, this._list.next(), !0);
                return
            }
            this._inChild.nextStep()
        },prevStep: function() {
            if (!this._idle)
                return;
            if (!this._activeStepList) {
                this._runSwitchStep(this._inChild, this._list.prev(), !1);
                return
            }
            this._inChild.prevStep()
        },next: function() {
            this._activeStepList = null, this.nextStep()
        },prev: function() {
            this._activeStepList = null, this.prevStep()
        },play: function(e) {
            var t = this._list.index();
            if (this._list.index(e) == t && this._inChild) {
                this._inChild.play();
                return
            }
            e = this._list.index();
            var n = t - e > 0 ? !1 : !0;
            this._activeStepList = null, this._runSwitchStep(this._inChild, this._list.current(), n)
        },pause: function(e) {
            this._inChild && (this._inChild.stopAction(e), this._inChild.pause(e)), this._outChild && (this._outChild.stopAction(e), this._outChild.pause(e))
        },stop: function() {
            this._children.forEach(function(e) {
                e.stop()
            }), this.play(0), this._inChild && (this._inChild.stopAction(!0), this._inChild.stop()), this._outChild && (this._outChild.stopAction(!0), this._outChild.stop())
        },renderChildren: function(e) {
            if (!this._inChild)
                return this.play(0);
            e && this._lastUpdateTime > this._inChild._lastUpdateTime && this._inChild.render(e)
        }});
    u.EVENT_STEP_START = "event_step_start", u.EVENT_STEP_END = "event_step_end", u.EVENT_CHILD_SWITCH_START = "event_child_switch_start", u.EVENT_CHILD_SWITCH_END = "event_child_switch_end"
}), define("DOMNode/Viewport", ["require", "exports", "module", "DOMNode/OneVisibleNodeList", "core/Scale", "DOMNode/Audio", "util/mix"], function(e, t, n) {
    var r = e("DOMNode/OneVisibleNodeList"), i = e("core/Scale"), s = e("DOMNode/Audio"), o = e("util/mix"), u = n.exports = r.extend({_wrap: null,_nodeClass: "erquan_viewport",_meta: {index: 0},_isRoot: !0,_resourceReady: !1,_requestSender: null,_bgMusicResumeInNextLoop: !1,setPosition: o.noop,setRotate: o.noop,setSkew: o.noop,setScale: o.noop,setOrigin: o.noop,init: function() {
            this._super.apply(this, arguments), this._dom.style.top = "50%", this._dom.style.left = "50%", this._dom.style[o.fixedTransformKey] = "translate3d(-50%,-50%,0px)"
        },_linkTo: function(e, t) {
            if (!e) {
                Log.warn("has no url" + t);
                return
            }
            t = t || "_blank", t == "_blank" ? window.open(e) : window.location.href = e
        },openWindow: function(e) {
            this._linkTo(e, "_blank")
        },replaceWindow: function(e) {
            this._linkTo(e, "_self")
        },invoke: function(e) {
            try {
                window[e]()
            } catch (t) {
                Log.error(t)
            }
        },exec: function(e) {
            try {
                window.eval(e)
            } catch (t) {
                Log.error(t)
            }
        },requestURL: function(e) {
            if (!this._requestSender) {
                var t = this._requestSender = document.createElement("iframe");
                t.scrolling = "no", t.frameBorder = "no", t.style.visibility = "hidden", t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-10px", t.style.left = "-10px", document.body.appendChild(t)
            }
            this._requestSender.src = e
        },share: function() {
            this.requestURL("share://")
        },resumeBackgroundMusic: function() {
            s.resumeBackground()
        },pauseBackgroundMusic: function() {
            s.pauseBackground()
        },stopBackgroundMusic: function() {
            s.stopBackground()
        },play: function(e) {
            this._bgMusicResumeInNextLoop && (this.resumeBackgroundMusic(), this._bgMusicResumeInNextLoop = !1), this._super(e)
        },pause: function(e) {
            var t = s.getBackground();
            t && t.playing() && (this.pauseBackgroundMusic(), this._bgMusicResumeInNextLoop = !0), this._super(e)
        },stop: function() {
            this.stopBackgroundMusic(), this._super()
        },setWrap: function(e) {
            var e = e || document.body;
            if (e == this._wrap)
                return;
            e.style.overflow = "hidden", e.style.position = "relative", e.appendChild(this._dom), this._wrap = e;
            var t = this, n = function() {
                t.trigger(u.EVENT_ACTIVED)
            }, r = function() {
                t.trigger(u.EVENT_BACKGROUND)
            };
            o.hiddenProp ? document.addEventListener(o.visibilityEvent, function() {
                document[o.hiddenProp] ? r() : n()
            }, !1) : (window.addEventListener("focus", n, !1), window.addEventListener("blur", r, !1)), window.addEventListener("pageshow", n, !1), window.addEventListener("pagehide", r, !1)
        },setSize: function(e, t, n, r) {
            this._super(e, t);
            if (!this._sizeChanged)
                return;
            var s = i.getInstance();
            s.setDesignSize(e, t), n && s.setScaleRule(n), r && this.render(!0)
        },setCanvasSize: function(e, t, n) {
            i.getInstance().setCanvasSize(e, t), !n && this.render(!0)
        },setDesignSize: function(e, t, n) {
            this.setSize(e, t, n)
        },isReady: function() {
            return this._resourceReady
        },loadResource: function() {
            if (this._resourceReady)
                return;
            var e = this._list, t = this._children, n = e.index(), r = e.prevIndex(), i = e.nextIndex(), s = t[n], o = t[r], u = t[i], a = n == r ? !0 : !1, f = n == i ? !0 : !1, l = function() {
                if (!a || !f)
                    return;
                t.forEach(function(e, t) {
                    e.loadResource()
                })
            }, c = this;
            s.loadResource(function() {
                c._resourceReady = !0, setTimeout(function() {
                    a || o.loadResource(function() {
                        a = !0, l()
                    }), f || u.loadResource(function() {
                        f = !0, l()
                    }), l()
                }, 150)
            })
        },render: function(e) {
            this._super(e), this._wrap || (this.setWrap(), this.loadResource(), this.trigger(u.EVENT_LAUNCHED))
        }});
    u.getInstance = function() {
        return this._instance || (this._instance = new u), this._instance
    }, u.EVENT_LAUNCHED = "event_launched", u.EVENT_ACTIVED = "event_actived", u.EVENT_BACKGROUND = "event_background"
}), define("DOMNode/Loader", ["require", "exports", "module", "DOMNode/DOMNode", "core/Action", "action/DOMCSSAction", "util/mix"], function(e, t, n) {
    var r = e("DOMNode/DOMNode"), i = e("core/Action"), s = e("action/DOMCSSAction"), o = e("util/mix"), u = o.css3Prefix("borderRadius");
    o.writeCssText(["@keyframes pulsate{0%{transform:scale(0.1,0.1);opacity:0.0;}50%{opacity:1.0;}100%{transform:scale(1.2,1.2);opacity:0.0;}}", "@-webkit-keyframes pulsate{0%{-webkit-transform:scale(0.1,0.1);opacity:0.0;}50%{opacity:1.0;}100%{-webkit-transform:scale(1.2,1.2);opacity:0.0;}}", "@-ms-keyframes pulsate{0%{-ms-transform:scale(0.1,0.1);opacity:0.0;}50%{opacity:1.0;}100%{-ms-transform:scale(1.2,1.2);opacity:0.0;}}", "@-moz-keyframes pulsate{0%{-moz-transform:scale(0.1,0.1);opacity:0.0;}50%{opacity:1.0;}100%{-moz-transform:scale(1.2,1.2);opacity:0.0;}}", "@-0-keyframes pulsate{0%{-o-transform:scale(0.1,0.1);opacity:0.0;}50%{opacity:1.0;}100%{-o-transform:scale(1.2,1.2);opacity:0.0;}}"].join(""));
    var a = [1, "ease", 0], f = new s({opacity: 1,transition: a}), l = new s({opacity: 0,transition: a}), c = n.exports = r.extend({_nodeClass: "erquan_loader",_meta: {index: 0},_fadeInAction: null,_fadeOutAction: null,init: function() {
            var e = this;
            this._fadeInAction = f.clone(!1, !0).target(this), this._fadeOutAction = l.clone(!1, !0).target(this), this._fadeOutAction.bind(i.EVENT_ANIM_END, function() {
                e.hide()
            }), this.setOpacity(1), this._super.apply(this, arguments), this._dom.style.width = "100%", this._dom.style.height = "100%", this._dom.style.zIndex = "9999999999", !this._bgChanged && this.setBgColor();
            var t = document.createElement("div");
            t.style.position = "absolute", t.style.left = "50%", t.style.top = "50%", t.style.marginLeft = "-15px", t.style.marginTop = "-15px", t.style.height = "30px", t.style.width = "30px", t.style.border = "3px solid #999", t.style[u] = "30px", t.style[o.fixedAnimationKey] = "pulsate 1s infinite ease-out", this._dom.appendChild(t), this.render(!0)
        },setBgColor: function(e) {
            e = !e || e == "none" ? "#fff" : e, this._super(e), this._bgChanged && (this._dom.style.background = this._bgColor)
        },fadeIn: function() {
            this.runAction(this._fadeInAction)
        },fadeOut: function() {
            this.runAction(this._fadeOutAction)
        },render: function() {
            return this._opacityChanged && (this._dom.style.opacity = this._opacity), !0
        }})
}), define("DOMNode/Scene", ["require", "exports", "module", "DOMNode/OneVisibleNode", "DOMNode/Audio", "DOMNode/Loader"], function(e, t, n) {
    var r = e("DOMNode/OneVisibleNode"), i = e("DOMNode/Audio"), s = e("DOMNode/Loader"), o = n.exports = r.extend({_nodeClass: "erquan_scene",_meta: {index: 0},_loader: null,_resourceLoaded: !1,_resourceLoading: !1,_playCalledOrderWhenLoading: null,init: function() {
            this._super.apply(this, arguments), this._loader = new s, this.addChild(this._loader);
            var e = this;
            i.backgroundEventBind(i.EVENT_BG_MUSIC_PLAYING, function() {
                e.trigger(o.EVENT_BG_MUSIC_PLAYING)
            }), i.backgroundEventBind(i.EVENT_BG_MUSIC_PAUSED, function() {
                e.trigger(o.EVENT_BG_MUSIC_PAUSED)
            })
        },_onResLoadStart: function() {
            this._resourceLoading = !0, this._resourceLoaded = !1, this._loader.show(), this.trigger(o.EVENT_RES_LOAD_START)
        },_onResLoadComplete: function() {
            this._resourceLoading = !1, this._resourceLoaded = !0, r.prototype.renderChildren.call(this, !0), this._playCalledOrderWhenLoading !== null && (this.play(this._playCalledOrderWhenLoading), this._playCalledOrderWhenLoading = null), this._loader.fadeOut(), this.trigger(o.EVENT_RES_LOAD_COMPLETE)
        },_genResourceNodeList: function(e, t) {
            t || (t = []);
            if (e._children) {
                var n = this;
                return e._children.forEach(function(e) {
                    n._genResourceNodeList(e, t)
                }), t
            }
            return e.loadResource && !e.resourceLoaded() && t.push(e), t
        },resourceLoaded: function() {
            return this._resourceLoaded
        },loadResource: function(e) {
            if (this._resourceLoaded) {
                e && e();
                return
            }
            if (this._resourceLoading) {
                e && this.bind(o.EVENT_RES_LOAD_COMPLETE, function() {
                    e()
                });
                return
            }
            var t = this, n = function() {
                e && e(), t._onResLoadComplete()
            }, r = this._genResourceNodeList(this), i = r.length;
            if (!i) {
                n();
                return
            }
            var s = function() {
                --i || n()
            };
            this._onResLoadStart(), r.forEach(function(e) {
                e.loadResource(s)
            })
        },nextStep: function() {
            if (this._resourceLoading)
                return;
            this._super()
        },prevStep: function() {
            if (this._resourceLoading)
                return;
            this._super()
        },moveToStep: function(e) {
            if (this._resourceLoading)
                return;
            this._super(e)
        },play: function(e) {
            if (this._resourceLoading) {
                this._playCalledOrderWhenLoading = e, this.pause(!0);
                return
            }
            this._super(e)
        },renderChildren: function(e) {
            this._super(e), this.loadResource(null, e)
        }});
    o.EVENT_RES_LOAD_START = "event_res_load_start", o.EVENT_RES_LOAD_COMPLETE = "event_res_load_complete", o.EVENT_BG_MUSIC_PLAYING = "event_bg_music_playing", o.EVENT_BG_MUSIC_PAUSED = "event_bg_music_paused"
}), define("DOMNode/Image", ["require", "exports", "module", "DOMNode/DOMContentNode", "core/Scale", "util/mix"], function(e, t, n) {
    var r = e("DOMNode/DOMContentNode"), i = e("core/Scale"), s = e("util/mix"), o = n.exports = r.extend({_nodeClass: "erquan_image",_meta: {index: 0},_loaderSrc: s.loaderSrc,_currentSrc: "",_loaderImage: null,_currentImage: null,_imageWidth: 0,_imageHeight: 0,_srcChanged: !1,_resourceLoaded: !1,init: function(e, t, n, r, i, s) {
            this._super(n, r, i, s), this._loaderSrc = t || this._loaderSrc, this.setSrc(e)
        },_initLoader: function() {
            var e = this, t = document.createElement("img");
            t.onload = t.oncomplete = function() {
                if (e._currentImage) {
                    e._loaderImage = null;
                    return
                }
                e.setContentDom(t), e._loaderImage = t
            }, t.src = this._loaderSrc
        },loadResource: function(e) {
            var t = this, n = document.createElement("img"), r = null, i = function() {
                n.onload = n.oncomplete = n.onerror = null, r && (clearTimeout(r), r = null), t._resourceLoaded = !0, t._imageWidth = n.width, t._imageHeight = n.height, t._loaderImage = null, t._currentImage = n, t.resetContentDomSize(), t.setContentDom(n), e && e()
            };
            this._resourceLoaded = !1, r = setTimeout(i, 4e4), n.onload = n.oncomplete = n.onerror = i, n.src = this._currentSrc, this._srcChanged = !1
        },resourceLoaded: function() {
            return this._resourceLoaded
        },setSrc: function(e) {
            if (!e)
                return;
            e != this._currentSrc && (this._currentSrc = e, this._srcChanged = !0)
        },resetContentDomSize: function() {
            var e = i.getInstance().getScale(), t = e.x, n = e.y, r = this._width * t, s = this._height * n, o = this._imageWidth, u = this._imageHeight, a = r / o, f = s / u, l = this.getContentScaleRatio(a, f);
            this._currentImage.width = o * l[0], this._currentImage.height = u * l[1], this._scaleRuleChanged = !1
        },render: function(e) {
            var t = this._sizeChanged, n = this._super(e);
            return !e || !this._srcChanged ? (this._currentImage && (e || t || this._scaleRuleChanged) && (this.resetContentDomSize(), n = !0), n) : (this.loadResource(), n)
        }})
}), define("DOMNode/Text", ["require", "exports", "module", "DOMNode/DOMContentNode", "core/Scale", "util/mix", "util/CSSCMDBuilder"], function(e, t, n) {
    var r = e("DOMNode/DOMContentNode"), i = e("core/Scale"), s = e("util/mix"), o = s.css3Prefix("transitionProperty"), u = e("util/CSSCMDBuilder"), a = u.buildScaleCMD, f = u.buildTranslateCMD, l = n.exports = r.extend({_nodeClass: "erquan_text",_meta: {index: 0},_fontSize: 12,_fontFamily: "",_bold: "",_color: "",_lineHeight: "normal",_textAlign: "left",_padding: [0, 0, 0, 0],_text: "",_innerContent: null,init: function() {
            this._super.apply(this, arguments), this._dom.style.overflow = "visible", this.setContentDom(document.createElement("div"));
            var e = this._innerContent = document.createElement("div");
            e.style.display = "block", e.style[s.fixedTransitionKey] = "inherit", e.style[o] = "font", e.style.position = "absolute", e.style.top = "50%", e.style.left = "50%", e.style.whiteSpace = "nowrap", e.style[s.fixedTransformKey] = "translate(-50%,-50%)", this._contentDom.appendChild(e)
        },setContentDom: function(e) {
            this._contentDom && (this._dom.removeChild(this._contentDom), this._contentDom = null), e.style[s.fixedTransitionKey] = "inherit", e.style.position = "absolute", e.style[s.fixedTransformOriginKey] = "0% 0% 0px", e.style.textAlign = "center", this._dom.appendChild(this._contentDom = e)
        },setFont: function(e, t, n, r, i) {
            this._fontSize = e || this._fontSize, this._fontFamily = t || this._fontFamily, this._color = n || this._color, this._bold = r || this._bold, this._lineHeight = i || this._lineHeight, this._innerContent.style.fontSize = this._fontSize + "px", this._innerContent.style.fontFamily = this._fontFamily, this._innerContent.style.color = this._color, this._innerContent.style.bold = this._bold, this._innerContent.style.lineHeight = this._lineHeight
        },setTextAlign: function(e) {
            this._textAlign = e || this._textAlign, this._innerContent.style.textAlign = this._textAlign
        },setPadding: function(e, t, n, r) {
            var i = this._padding;
            i[0] = e || i[0], i[1] = t || i[1], i[2] = n || i[2], i[3] = r || i[3], this._innerContent.style.padding = [e + "px", t + "px", n + "px", r + "px"].join(" ")
        },setText: function(e) {
            if (this._text == e)
                return;
            this._text = e, this._innerContent.innerHTML = this._text
        },render: function(e) {
            var t = this._sizeChanged, n = e || t || this._customDataChanged, r = this._super(e);
            if (!n)
                return r;
            r = !0, this._customDataChanged = !1;
            var o = this._customData, a = o.text, f = o.font, l = o.align, c = o.padding, h = o.scaleRule || i.RULE_VIEW_BORDER;
            a != undefined && this.setText(a), f && this.setFont.apply(this, f), c && this.setPadding.apply(this, c), l && this.setTextAlign(l);
            if (!e && !t && !this._scaleRuleChanged)
                return r;
            this._scaleRuleChanged = !1;
            var p = i.getInstance().getScale(), d = p.x, v = p.y, m = this.getContentScaleRatio();
            d = m[0], v = m[1];
            var g = this._height * (p.y - v) / 2, y = this._width * (p.x - d) / 2, b = u.buildTranslateCMD(y, g, 0), w = u.buildScaleCMD(d, v, 1), E = this._contentDom;
            return E.style.width = this._width + "px", E.style.height = this._height + "px", E.style[s.fixedTransformKey] = u.buildTransformCMD(b, "", w), r
        }})
}), define("DOMNode/Video", ["require", "exports", "module", "DOMNode/Media"], function(e, t, n) {
    var r = e("DOMNode/Media"), i = n.exports = r.extend({_nodeClass: "erquan_video",_meta: {index: 0},_type: r.TYPE_VIDEO,_loop: !1,_preload: !0})
}), define("DOMNode/WebPage", ["require", "exports", "module", "DOMNode/DOMContentNode"], function(e, t, n) {
    var r = e("DOMNode/DOMContentNode"), i = n.exports = r.extend({_nodeClass: "erquan_web_page",_meta: {index: 0},_src: null,_webPage: null,_srcChanged: !1,_resourceLoaded: !1,init: function(e, t, n, r, i, s) {
            this._super(t, n, r, i, s);
            var o = this._webPage = document.createElement("iframe");
            o.scrolling = "no", o.frameBorder = "no", o.style.width = "100%", o.style.height = "100%", this.setContentDom(o, !0), this.setSrc(e)
        },loadResource: function(e) {
            var t = this, n = this._webPage, r = null, i = function() {
                n.onload = n.oncomplete = n.onerror = null, r && (clearTimeout(r), r = null), t._resourceLoaded = !0, e && e()
            };
            this._resourceLoaded = !1, r = setTimeout(i, 15e3), n.onload = n.oncomplete = n.onerror = i, n.src = this._src, this._srcChanged = !1
        },resourceLoaded: function() {
            return this._resourceLoaded
        },setSrc: function(e) {
            if (!e)
                return;
            this._src != e && (this._src = e, this._srcChanged = !0)
        },render: function(e) {
            var t = this._sizeChanged, n = this._super(e);
            if (!e || !this._srcChanged) {
                if (e || t || this._scaleRuleChanged)
                    n = !0;
                return n
            }
            return n = !0, this.loadResource(), n
        }})
}), define("action/SequenceAction", ["require", "exports", "module", "lang/Observer", "core/Action"], function(e, t, n) {
    var r = e("lang/Observer"), i = e("core/Action"), s = n.exports = r.extend({_index: 0,_len: 0,_current: null,_list: null,_idle: !0,_forcedStop: !1,init: function(e, t) {
            e && this.setList(e), this._addCompleteEvent(t)
        },_addCompleteEvent: function(e) {
            typeof e == "function" && this.bind(i.EVENT_COMPLETED, function() {
                e()
            })
        },_linkAction: function(e, t, n) {
            var r = this;
            e.bind(i.EVENT_COMPLETED, function() {
                if (r._forcedStop)
                    return;
                r._current = t, r._index = n, r._idle = !1, t.start()
            })
        },setList: function(e) {
            if (!e)
                return !1;
            var t = j = 0, n = e.length, r = next = null;
            this._len = n, this._current = e[0], this._list = e;
            for (; t < n - 1; t++)
                j = t + 1, r = e[t], next = e[j], this._linkAction(r, next, j);
            var s = this;
            return next.bind(i.EVENT_COMPLETED, function() {
                s.trigger(i.EVENT_COMPLETED), s._idle = !0
            }), !0
        },start: function(e) {
            if (!this._current)
                return;
            this._idle || this.stop(), this._idle = !1, this._addCompleteEvent(e), this._current.start()
        },stop: function() {
            if (this._idle)
                return;
            this._forcedStop = !0, this._current.stop(), this._forcedStop = !1, this._index != this._len - 1 && this.trigger(i.EVENT_COMPLETED)
        }})
}), define("action/HookAction", ["require", "exports", "module", "lang/Class", "util/Log"], function(e, t, n) {
    var r = e("lang/Class"), i = e("util/Log"), s = n.exports = r.extend({_target: null,_method: null,init: function(e, t) {
            this._target = t, this._method = e
        },start: function() {
            if (!this._target || !this._method)
                return;
            try {
                var e = this._target[this._method];
                e.apply(this._target, arguments)
            } catch (t) {
                i.error(t)
            }
        }})
}), define("action/CycleAction", ["require", "exports", "module", "core/Action", "action/SequenceAction"], function(e, t, n) {
    var r = e("core/Action"), i = e("action/SequenceAction"), s = n.exports = i.extend({setList: function(e) {
            if (!this._super(e))
                return;
            var t = e[e.length - 1], n = e[0];
            this._linkAction(t, n, 0)
        }})
}), define("control/TimelineStep", ["require", "exports", "module", "control/Step", "util/Log"], function(e, t, n) {
    var r = e("control/Step"), i = e("util/Log"), s = n.exports = r.extend({_revsrseDurationAction: null,_reverseDuration: 0,setReverseTransitionForAction: function(e, t) {
            var n = this.getActionByTarget(e);
            if (!n) {
                i.warn("unkown action for the target: " + e.id());
                return
            }
            n.reverseTransition = t;
            var r = t[0] + t[2];
            if (r > this._reverseDuration) {
                this._revsrseDurationAction && (this._revsrseDurationAction.reverseWTE = !1), (this._revsrseDurationAction = n).reverseWTE = !0, this._reverseDuration = r;
                return
            }
            n.reverseWTE = !1
        },start: function(e) {
            var t = 0, n = this._actionCollection.length;
            if (!n) {
                this._complete(!0);
                return
            }
            for (; t < n; t++) {
                var i = this._actionCollection[t];
                if (e) {
                    i.start();
                    continue
                }
                if (!i.reverseTransition) {
                    i.start(0, "none", 0, !1);
                    continue
                }
                i.start.apply(i, i.reverseTransition.concat(i.reverseWTE))
            }
            this.trigger(r.EVENT_START), e ? this.trigger(s.EVENT_START_ASC) : this.trigger(s.EVENT_START_DESC)
        }});
    s.EVENT_START_ASC = "event_start_asc", s.EVENT_START_DESC = "event_start_desc"
}), define("control/TimelineStepList", ["require", "exports", "module", "control/Step", "control/TimelineStep", "control/StepList", "util/Log"], function(e, t, n) {
    var r = e("control/Step"), i = e("control/TimelineStep"), s = e("control/StepList"), o = e("util/Log"), u = n.exports = s.extend({_initStep: null,_initStepAdded: !1,_initStepListDone: !1,_normalizeRevserTransition: function(e, t) {
            var n = e.getDelayDuration();
            e.getActions().forEach(function(e) {
                var r = e.getTransition();
                r[2] = n - r[2], t.setReverseTransitionForAction(e.target(), r)
            })
        },_normalizeStep: function(e) {
            var t = this._list, n = t[e];
            if (n.normalizeStepDone) {
                o.warn("step be normalized repeat!");
                return
            }
            var r = this;
            this._initStep.getActions().forEach(function(r) {
                var i = r.target();
                if (!i) {
                    o.error("init step's action must has a target before the steplist started!");
                    return
                }
                if (e == 0) {
                    t.length < 2 && (r.onlyHasInitStep = !0);
                    return
                }
                if (r.onlyHasInitStep)
                    return;
                if (n.getActionByTarget(i))
                    return;
                var s = e, u = null;
                while (--s > 0)
                    if (u = t[s].getActionByTarget(i))
                        break;
                if (!u) {
                    if (e == t.length - 1) {
                        r.onlyHasInitStep = !0;
                        return
                    }
                    u = r
                }
                u = u.clone();
                while (++s <= e)
                    t[s].addAction(u.clone().target(i))
            });
            var i = t[e + 1];
            i && i.normalizeStepDone && this._normalizeRevserTransition(i, n);
            var s = t[e - 1];
            s && s.normalizeStepDone && this._normalizeRevserTransition(n, s), n.normalizeStepDone = !0
        },_chainRLReverseAction: function() {
            var e = this._list.length;
            if (e < 2)
                return;
            var t = this._list[0], n = this._list[e - 1];
            this._normalizeRevserTransition(t, n)
        },add: function(e) {
            if (!this._initStepAdded && e.type() == r.TYPE_INIT)
                return this._initStepAdded = !0, this._list.unshift(this._initStep = e);
            this._list.push(e)
        },addStep: function(e) {
            this._super(e), this._initStepListDone && (this._normalizeStep(this.len() - 1), this._chainRLReverseAction())
        },cleanStep: function() {
            this._initStep && this._initStep.getActions().forEach(function(e) {
                e.onlyHasInitStep && e.lock(!0), delete e.onlyHasInitStep
            })
        },ready: function() {
            if (!this._initStepAdded) {
                this._list.length && o.error("there has not inited step in this steplist!", !0);
                return
            }
            if (!this._initStepListDone) {
                this._initStepListDone = !0, this.play(0), this.pause(!0);
                for (len = this.len() - 1; len >= 0; len--)
                    this._normalizeStep(len);
                this._chainRLReverseAction()
            }
        },play: function(e, t) {
            this._initStepListDone || this.ready(), this._super(e, t)
        },stop: function(e) {
            var t = this._initStep.getActions(), n = [];
            t.forEach(function(e) {
                var t = e.lock();
                if (!t)
                    return;
                n.push(e), e.lock(!1)
            }), this.play(0), n.forEach(function(e) {
                e.lock(!0)
            }), this.pause(!0), this._order = s.ORDER_ASC, this.resumeInNextLoop = !1
        }})
}), define("core/Parser", ["require", "exports", "module", "util/Log", "core/Node", "DOMNode/DOMNode", "DOMNode/Viewport", "DOMNode/Scene", "DOMNode/Image", "DOMNode/Text", "DOMNode/Video", "DOMNode/Audio", "DOMNode/WebPage", "action/DOMCSSAction", "action/DOMCSSActionNoTransition", "action/SequenceAction", "action/HookAction", "action/CycleAction", "control/Step", "control/TimelineStep", "control/StepList", "control/TimelineStepList"], function(e, t, n) {
    var r = e("util/Log"), i = e("core/Node"), s = e("DOMNode/DOMNode"), o = e("DOMNode/Viewport"), u = e("DOMNode/Scene"), a = e("DOMNode/Image"), f = e("DOMNode/Text"), l = e("DOMNode/Video"), c = e("DOMNode/Audio"), h = e("DOMNode/WebPage"), p = e("action/DOMCSSAction"), d = e("action/DOMCSSActionNoTransition"), v = e("action/SequenceAction"), m = e("action/HookAction"), g = e("action/CycleAction"), y = e("control/Step"), b = e("control/TimelineStep"), w = e("control/StepList"), E = e("control/TimelineStepList"), S = [], x = function(e, t) {
        var n = e.type || "normal";
        if (e.target) {
            var r = i.getNode(e.target);
            if (!r)
                return;
            e.target = r
        } else
            e.target = t;
        if (n == "normal")
            action = new p(e);
        else if (n == "no_transition")
            action = new d(e);
        else if (n == "hook")
            action = new m(e.name, e.target);
        else {
            if (!e.actions)
                return;
            var s = [];
            e.actions.forEach(function(t, n) {
                var r = x(t, e.target);
                r && s.push(r)
            }), n == "sequence" ? action = new v(s) : n == "cycle" && (action = new g(s))
        }
        return action
    }, T = function(e, t) {
        if (!e || !e.steps || !e.steps.length)
            return;
        var n = new E(e);
        return e.steps.forEach(function(e, r) {
            if (!e || !e.actions || !e.actions.length)
                return;
            var i = new b(e.playEndPaused);
            r == 0 && i.type(y.TYPE_INIT), n.addStep(i), e.listeners && C(e.listeners, i), e.actions.forEach(function(e, n) {
                var r = x(e, t);
                r && i.addAction(r)
            })
        }), n
    }, N = function(e, t) {
        if (!e)
            return;
        var n = e.type, i = null;
        switch (n) {
            case "viewport":
                i = o.getInstance(), !e.designSize && !(e.designSize = e.size) ? r.info("viewport has no designSize") : i.setDesignSize.apply(i, e.designSize), (e.canvasSize || (e.canvasSize = e.designSize)) && i.setCanvasSize(e.canvasSize[0], e.canvasSize[1], !0), i.loop(!!e.loop);
                break;
            case "scene":
                i = new u, i.playControl(e.playControl);
                break;
            case "layer":
                i = new s;
                break;
            case "image":
                i = new a(e.src, e.lSrc), e.scaleRule && i.setScaleRule(e.scaleRule);
                break;
            case "webPage":
                i = new h(e.src);
                break;
            case "video":
                i = new l(undefined, e.src), i.loop(e.playLoop);
                break;
            case "audio":
                i = new c(undefined, e.src), i.loop(e.playLoop), i.isBackground(e.playBackground);
                break;
            case "text":
                i = new f, e.text && i.setText(e.text), e.font && i.setFont.apply(i, e.font), e.padding && i.setPadding.apply(i, e.padding), e.align && i.setAlign(e.align);
                break;
            default:
                i = new s
        }
        e.id && i.id(e.id), e.zOrder && i.setZOrder(e.zOrder), e.size && i.setSize.apply(i, e.size), e.position && i.setPosition.apply(i, e.position), e.bgColor && i.setBgcolor(e.bgColor), e.listeners && C(e.listeners, i), e.children && e.children.forEach(function(e) {
            if (!e)
                return;
            var t = N(e, i);
            t && i.addChild(t)
        });
        var p = [];
        n == "scene" && e.stepLists && i.addStepList && e.stepLists.forEach(function(e, t) {
            e = T(e, i), t > 0 && e.len() && e.ready(), p.unshift(e)
        });
        var d = p.pop();
        return d && (d.len() && d.ready(), i.addStepList(d)), p.forEach(function(e) {
            i.addStepList(e)
        }), n != "scene" ? i : (Object.keys(S).forEach(function(e) {
            var n = S[e];
            if (!n.length)
                return;
            var r = n[0].listener.targetType;
            if (r == "viewport") {
                k(n, t);
                return
            }
            if (r == "scene") {
                k(n, i);
                return
            }
            if (r == "component") {
                var s = i.getChild(e);
                s && k(n, s)
            }
            r == "stepList" && i.getStepLists().forEach(function(t) {
                t.id() == e && k(n, t)
            })
        }), S = [], i)
    }, C = function(e, t) {
        Object.keys(e).forEach(function(n) {
            e[n].forEach(function(e) {
                var r = e.targetId, i = S[r] || (S[r] = []), s = {host: t,listener: e,evt: n};
                i.push(s)
            })
        })
    }, k = function(e, t) {
        e.forEach(function(e) {
            var n = e.evt, r = e.host, i = e.listener, s = i.method, o = i.param, u = null;
            o ? (o = o.split(","), u = function() {
                t[s].apply(t, o)
            }) : u = function() {
                t[s]()
            };
            if (n != "UIEvent")
                return r.bind(n, u);
            r.getDom().style.cursor = "pointer", r.getDom().addEventListener(i.event, function(e) {
                u(), e.propagation || e.stopPropagation()
            }, !1)
        })
    };
    n.exports = {parse: N}
}), define("util/sdl", ["require", "exports", "module"], function(e, t, n) {
    var r = raccoon = n.exports = function(e) {
        return new r.prototype.init(e)
    };
    r.createEvent = function(e) {
        if (r.event_type === undefined)
            try {
                new CustomEvent, r.event_type = 1
            } catch (t) {
                r.event_type = 2
            }
        if (r.event_type === 1)
            return new CustomEvent(e);
        var n = document.createEvent("CustomEvent");
        return n.initEvent(e, !0, !0), n
    }, r.prototype.init = function(e) {
        return this._dom = e, this
    }, r.prototype.getDom = function() {
        return this._dom
    }, r.prototype.bind = function(e, t) {
        var n = this, r = e.split(/\s+/);
        return r.forEach(function(e) {
            n._dom.addEventListener(e, function(e) {
                t(e) === !1 && (e.stopPropagation(), e.preventDefault())
            }, !1)
        }), this
    }, r.prototype.trigger = function(e) {
        var t = this, n = e.split(" ");
        return n.forEach(function(e) {
            t._dom.dispatchEvent(r.createEvent(e))
        }), this
    }, r.prototype.css = function(e) {
        var t = this, n = Object.keys(e);
        return n.forEach(function(n) {
            t._dom.style[n] = e[n]
        }), this
    }, r.prototype.style = function(e, t) {
        this._dom.style[e] = t
    }, r.prototype.width = function() {
        return this._dom == window || this._dom == document ? window.innerWidth : this._dom.clientWidth
    }, r.prototype.height = function() {
        return this._dom == window || this._dom == document ? window.innerHeight : this._dom.clientHeight
    }, r.prototype.init.prototype = r.prototype
}), define("erquan", ["require", "exports", "module", "util/mix", "util/CSSCMDBuilder", "DOMNode/OneVisibleNodeList", "DOMNode/Viewport", "core/Parser", "util/Log", "util/sdl"], function(e, t, n) {
    var r = e("util/mix").css3Prefix, i = e("util/CSSCMDBuilder").buildScaleCMD, s = e("DOMNode/OneVisibleNodeList"), o = e("DOMNode/Viewport"), u = e("core/Parser"), a = e("util/Log"), f = e("util/sdl"), l = f(window), c = !0, h = /scene-(\d+)/i, p = o.getInstance(), d = p.getDom(), v = !1, m = function(e, t) {
        p.setCanvasSize(e, t, null, !0)
    }, g = function(e) {
        var t = p.getCurrent();
        if (!t || !t.playControl())
            return;
        try {
            p[e]()
        } catch (n) {
            a.error(n)
        }
    }, y = function() {
        f(document.body).bind("keydown", function(e) {
            if (!c)
                return;
            var t = e.keyCode;
            switch (t) {
                case 39:
                    g("next");
                    break;
                case 13:
                case 32:
                case 40:
                    g("nextStep");
                    break;
                case 38:
                    g("prevStep");
                    break;
                case 37:
                    g("prev");
                    break;
                default:
            }
        })
    }, b = function() {
        var e = 0, t = 0;
        f(document).bind("touchstart", function(n) {
            if (!c)
                return !1;
            e = t = n.touches[0].pageY
        }), f(document).bind("touchmove", function(e) {
            return t = e.touches[0].pageY, !1
        }), f(document).bind("touchend", function(n) {
            if (!c)
                return !1;
            t - e > 0 ? g("prevStep") : t - e < 0 && g("nextStep")
        })
    }, w = function() {
        f(document).bind("mousewheel DOMMouseScroll", function(e) {
            if (!c)
                return;
            var t = e.wheelDelta || -e.detail * 50;
            t < -100 ? g("nextStep") : t > 100 && g("prevStep")
        })
    }, E = function() {
        l.bind("hashchange", function() {
            var e = h.exec(location.hash);
            if (e) {
                var t = e[1] - 1;
                t != p.getIndex() && p.play(t)
            }
        })
    }, S = function() {
        p.bind(s.EVENT_CHILD_SWITCH_START, function() {
            c = !1
        }), p.bind(s.EVENT_CHILD_SWITCH_END, function() {
            c = !0;
            var e = p.getIndex() + 1, t = "!/scene-" + e;
            location.hash = t
        })
    }, x = function() {
        f(document).bind("touchmove", function(e) {
            return !1
        })
    }, T = function(e) {
        x(), e.playControl !== !1 && (y(), b(), w()), E(), S();
        var t = [0, 0];
        e.scale ? (t[0] = l.width(), t[1] = l.height()) : (t[0] = e.node.designSize[0], t[1] = e.node.designSize[1]), e.node.canvasSize = t, u.parse(e.node), l.trigger("hashchange");
        if (e.scale) {
            l.bind("resize", function() {
                m(l.width(), l.height())
            }), l.trigger("resize"), v = !0;
            return
        }
        var n = f(p.getDom()), s = p._width, o = p._height;
        n.css({top: "0px",left: "0px",position: "relative",margin: "30px auto","box-shadow": "0px 0px 2px 2px #ddd"}), n.style(r("transformOrigin"), "top"), l.bind("resize", function() {
            var e = l.height() - 60, t = e / o;
            n.style(r("transform"), i(t, t))
        }), m(s, o), l.trigger("resize"), v = !0
    };
    n.exports = T
}), define("main", ["require", "exports", "module", "erquan"], function(e, t, n) {
    var r = window["erquan-preview-config"];
    if (!r || !r.node)
        throw "erquan preview config is invalide";
    e("erquan")(r)
}), require(["main"]), define("boot", function() {
});
