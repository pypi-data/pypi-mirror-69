(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"],{

/***/ "./node_modules/@material/animation/util.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/animation/util.js ***!
  \**************************************************/
/*! exports provided: getCorrectPropertyName, getCorrectEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function() { return getCorrectPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectEventName", function() { return getCorrectEventName; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};
var jsEventTypeMap = {
  animationend: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationEnd',
    standard: 'animationend'
  },
  animationiteration: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationIteration',
    standard: 'animationiteration'
  },
  animationstart: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationStart',
    standard: 'animationstart'
  },
  transitionend: {
    cssProperty: 'transition',
    prefixed: 'webkitTransitionEnd',
    standard: 'transitionend'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = (standard in el.style);
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
  if (isWindow(windowObj) && eventType in jsEventTypeMap) {
    var el = windowObj.document.createElement('div');
    var _a = jsEventTypeMap[eventType],
        standard = _a.standard,
        prefixed = _a.prefixed,
        cssProperty = _a.cssProperty;
    var isStandard = (cssProperty in el.style);
    return isStandard ? standard : prefixed;
  }

  return eventType;
}

/***/ }),

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);

/***/ }),

/***/ "./node_modules/@material/checkbox/component.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/component.js ***!
  \******************************************************/
/*! exports provided: MDCCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return MDCCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/animation/util */ "./node_modules/@material/animation/util.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/checkbox/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckbox =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckbox, _super);

  function MDCCheckbox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCCheckbox.attachTo = function (root) {
    return new MDCCheckbox(root);
  };

  Object.defineProperty(MDCCheckbox.prototype, "ripple", {
    get: function () {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "checked", {
    get: function () {
      return this.nativeControl_.checked;
    },
    set: function (checked) {
      this.nativeControl_.checked = checked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
    get: function () {
      return this.nativeControl_.indeterminate;
    },
    set: function (indeterminate) {
      this.nativeControl_.indeterminate = indeterminate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "disabled", {
    get: function () {
      return this.nativeControl_.disabled;
    },
    set: function (disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "value", {
    get: function () {
      return this.nativeControl_.value;
    },
    set: function (value) {
      this.nativeControl_.value = value;
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckbox.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange();
    };

    this.handleAnimationEnd_ = function () {
      return _this.foundation_.handleAnimationEnd();
    };

    this.nativeControl_.addEventListener('change', this.handleChange_);
    this.listen(Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
    this.installPropertyChangeHooks_();
  };

  MDCCheckbox.prototype.destroy = function () {
    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.handleChange_);
    this.unlisten(Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
    this.uninstallPropertyChangeHooks_();

    _super.prototype.destroy.call(this);
  };

  MDCCheckbox.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      forceLayout: function () {
        return _this.root_.offsetWidth;
      },
      hasNativeControl: function () {
        return !!_this.nativeControl_;
      },
      isAttachedToDOM: function () {
        return Boolean(_this.root_.parentNode);
      },
      isChecked: function () {
        return _this.checked;
      },
      isIndeterminate: function () {
        return _this.indeterminate;
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      removeNativeControlAttr: function (attr) {
        return _this.nativeControl_.removeAttribute(attr);
      },
      setNativeControlAttr: function (attr, value) {
        return _this.nativeControl_.setAttribute(attr, value);
      },
      setNativeControlDisabled: function (disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_7__["MDCCheckboxFoundation"](adapter);
  };

  MDCCheckbox.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCRipple"].createAdapter(this), {
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.nativeControl_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_3__["applyPassive"])());
      },
      isSurfaceActive: function () {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__["matches"])(_this.nativeControl_, ':active');
      },
      isUnbounded: function () {
        return true;
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.nativeControl_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_3__["applyPassive"])());
      }
    });

    return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCRipple"](this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCRippleFoundation"](adapter));
  };

  MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
    var _this = this;

    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739

      if (!validDescriptor(desc)) {
        return;
      } // Type cast is needed for compatibility with Closure Compiler.


      var nativeGetter = desc.get;
      var nativeCbDesc = {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        get: nativeGetter,
        set: function (state) {
          desc.set.call(nativeCb, state);

          _this.foundation_.handleChange();
        }
      };
      Object.defineProperty(nativeCb, controlState, nativeCbDesc);
    });
  };

  MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);

      if (!validDescriptor(desc)) {
        return;
      }

      Object.defineProperty(nativeCb, controlState, desc);
    });
  };

  Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
    get: function () {
      var NATIVE_CONTROL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_7__["MDCCheckboxFoundation"].strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);

      if (!el) {
        throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }

      return el;
    },
    enumerable: true,
    configurable: true
  });
  return MDCCheckbox;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__["MDCComponent"]);



function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),

/***/ "./node_modules/@material/checkbox/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  BACKGROUND: 'mdc-checkbox__background',
  CHECKED: 'mdc-checkbox--checked',
  CHECKMARK: 'mdc-checkbox__checkmark',
  CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
  DISABLED: 'mdc-checkbox--disabled',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  MIXEDMARK: 'mdc-checkbox__mixedmark',
  NATIVE_CONTROL: 'mdc-checkbox__native-control',
  ROOT: 'mdc-checkbox',
  SELECTED: 'mdc-checkbox--selected',
  UPGRADED: 'mdc-checkbox--upgraded'
};
var strings = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
  NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_UNCHECKED: 'unchecked'
};
var numbers = {
  ANIM_END_LATCH_MS: 250
};

/***/ }),

/***/ "./node_modules/@material/checkbox/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/*! exports provided: MDCCheckboxFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return MDCCheckboxFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCCheckboxFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckboxFoundation, _super);

  function MDCCheckboxFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;

    _this.currentCheckState_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.enableAnimationEndHandler_ = false;
    return _this;
  }

  Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        forceLayout: function () {
          return undefined;
        },
        hasNativeControl: function () {
          return false;
        },
        isAttachedToDOM: function () {
          return false;
        },
        isChecked: function () {
          return false;
        },
        isIndeterminate: function () {
          return false;
        },
        removeClass: function () {
          return undefined;
        },
        removeNativeControlAttr: function () {
          return undefined;
        },
        setNativeControlAttr: function () {
          return undefined;
        },
        setNativeControlDisabled: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckboxFoundation.prototype.init = function () {
    this.currentCheckState_ = this.determineCheckState_();
    this.updateAriaChecked_();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].UPGRADED);
  };

  MDCCheckboxFoundation.prototype.destroy = function () {
    clearTimeout(this.animEndLatchTimer_);
  };

  MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    }
  };
  /**
   * Handles the animationend event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
    var _this = this;

    if (!this.enableAnimationEndHandler_) {
      return;
    }

    clearTimeout(this.animEndLatchTimer_);
    this.animEndLatchTimer_ = setTimeout(function () {
      _this.adapter_.removeClass(_this.currentAnimationClass_);

      _this.enableAnimationEndHandler_ = false;
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ANIM_END_LATCH_MS);
  };
  /**
   * Handles the change event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleChange = function () {
    this.transitionCheckState_();
  };

  MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
    if (!this.adapter_.hasNativeControl()) {
      return;
    }

    var oldState = this.currentCheckState_;
    var newState = this.determineCheckState_();

    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_();
    var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
    var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED;

    if (newState === TRANSITION_STATE_UNCHECKED) {
      this.adapter_.removeClass(SELECTED);
    } else {
      this.adapter_.addClass(SELECTED);
    } // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.


    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.

    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = true;
    }
  };

  MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
    var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;

    if (this.adapter_.isIndeterminate()) {
      return TRANSITION_STATE_INDETERMINATE;
    }

    return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
    var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
    var _a = MDCCheckboxFoundation.cssClasses,
        ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED,
        ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE,
        ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED,
        ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE,
        ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED,
        ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;

    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }

        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;

      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;

      default:
        // TRANSITION_STATE_INDETERMINATE
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };

  MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.adapter_.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      // The on/off state does not need to keep track of aria-checked, since
      // the screenreader uses the checked property on the checkbox element.
      this.adapter_.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR);
    }
  };

  return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCCheckboxFoundation);

/***/ }),

/***/ "./node_modules/@material/data-table/component.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/data-table/component.js ***!
  \********************************************************/
/*! exports provided: MDCDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDataTable", function() { return MDCDataTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/checkbox/component */ "./node_modules/@material/checkbox/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/data-table/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/data-table/foundation.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCDataTable =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDataTable, _super);

  function MDCDataTable() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDataTable.attachTo = function (root) {
    return new MDCDataTable(root);
  };

  MDCDataTable.prototype.initialize = function (checkboxFactory) {
    if (checkboxFactory === void 0) {
      checkboxFactory = function (el) {
        return new _material_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["MDCCheckbox"](el);
      };
    }

    this.checkboxFactory_ = checkboxFactory;
  };

  MDCDataTable.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.headerRow_ = this.root_.querySelector("." + _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].HEADER_ROW);

    this.handleHeaderRowCheckboxChange_ = function () {
      return _this.foundation_.handleHeaderRowCheckboxChange();
    };

    this.headerRow_.addEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_ = this.root_.querySelector("." + _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].CONTENT);

    this.handleRowCheckboxChange_ = function (event) {
      return _this.foundation_.handleRowCheckboxChange(event);
    };

    this.content_.addEventListener('change', this.handleRowCheckboxChange_);
    this.layout();
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   */


  MDCDataTable.prototype.layout = function () {
    this.foundation_.layout();
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTable.prototype.getRows = function () {
    return this.foundation_.getRows();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTable.prototype.getSelectedRowIds = function () {
    return this.foundation_.getSelectedRowIds();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTable.prototype.setSelectedRowIds = function (rowIds) {
    this.foundation_.setSelectedRowIds(rowIds);
  };

  MDCDataTable.prototype.destroy = function () {
    this.headerRow_.removeEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_.removeEventListener('change', this.handleRowCheckboxChange_);
    this.headerRowCheckbox_.destroy();
    this.rowCheckboxList_.forEach(function (checkbox) {
      return checkbox.destroy();
    });
  };

  MDCDataTable.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassAtRowIndex: function (rowIndex, className) {
        return _this.getRows()[rowIndex].classList.add(className);
      },
      getRowCount: function () {
        return _this.getRows().length;
      },
      getRowElements: function () {
        return [].slice.call(_this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_SELECTOR));
      },
      getRowIdAtIndex: function (rowIndex) {
        return _this.getRows()[rowIndex].getAttribute(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].DATA_ROW_ID_ATTR);
      },
      getRowIndexByChildElement: function (el) {
        return _this.getRows().indexOf(Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["closest"])(el, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_SELECTOR));
      },
      getSelectedRowCount: function () {
        return _this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_SELECTED_SELECTOR).length;
      },
      isCheckboxAtRowIndexChecked: function (rowIndex) {
        return _this.rowCheckboxList_[rowIndex].checked;
      },
      isHeaderRowCheckboxChecked: function () {
        return _this.headerRowCheckbox_.checked;
      },
      isRowsSelectable: function () {
        return !!_this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_CHECKBOX_SELECTOR);
      },
      notifyRowSelectionChanged: function (data) {
        _this.emit(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].ROW_SELECTION_CHANGED, {
          row: _this.getRowByIndex_(data.rowIndex),
          rowId: _this.getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        },
        /** shouldBubble */
        true);
      },
      notifySelectedAll: function () {
        return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].SELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      notifyUnselectedAll: function () {
        return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].UNSELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      registerHeaderRowCheckbox: function () {
        if (_this.headerRowCheckbox_) {
          _this.headerRowCheckbox_.destroy();
        }

        var checkboxEl = _this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].HEADER_ROW_CHECKBOX_SELECTOR);

        _this.headerRowCheckbox_ = _this.checkboxFactory_(checkboxEl);
      },
      registerRowCheckboxes: function () {
        if (_this.rowCheckboxList_) {
          _this.rowCheckboxList_.forEach(function (checkbox) {
            return checkbox.destroy();
          });
        }

        _this.rowCheckboxList_ = [];

        _this.getRows().forEach(function (rowEl) {
          var checkbox = _this.checkboxFactory_(rowEl.querySelector(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_CHECKBOX_SELECTOR));

          _this.rowCheckboxList_.push(checkbox);
        });
      },
      removeClassAtRowIndex: function (rowIndex, className) {
        _this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: function (rowIndex, attr, value) {
        _this.getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: function (checked) {
        _this.headerRowCheckbox_.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: function (indeterminate) {
        _this.headerRowCheckbox_.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: function (rowIndex, checked) {
        _this.rowCheckboxList_[rowIndex].checked = checked;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDataTableFoundation"](adapter);
  };

  MDCDataTable.prototype.getRowByIndex_ = function (index) {
    return this.getRows()[index];
  };

  MDCDataTable.prototype.getRowIdByIndex_ = function (index) {
    return this.getRowByIndex_(index).getAttribute(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].DATA_ROW_ID_ATTR);
  };

  return MDCDataTable;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/data-table/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/data-table/constants.js ***!
  \********************************************************/
/*! exports provided: cssClasses, strings, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CELL: 'mdc-data-table__cell',
  CELL_NUMERIC: 'mdc-data-table__cell--numeric',
  CONTENT: 'mdc-data-table__content',
  HEADER_ROW: 'mdc-data-table__header-row',
  HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
  ROOT: 'mdc-data-table',
  ROW: 'mdc-data-table__row',
  ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
  ROW_SELECTED: 'mdc-data-table__row--selected'
};
var strings = {
  ARIA_SELECTED: 'aria-selected',
  DATA_ROW_ID_ATTR: 'data-row-id',
  HEADER_ROW_CHECKBOX_SELECTOR: "." + cssClasses.HEADER_ROW_CHECKBOX,
  ROW_CHECKBOX_SELECTOR: "." + cssClasses.ROW_CHECKBOX,
  ROW_SELECTED_SELECTOR: "." + cssClasses.ROW_SELECTED,
  ROW_SELECTOR: "." + cssClasses.ROW
};
var events = {
  ROW_SELECTION_CHANGED: 'MDCDataTable:rowSelectionChanged',
  SELECTED_ALL: 'MDCDataTable:selectedAll',
  UNSELECTED_ALL: 'MDCDataTable:unselectedAll'
};

/***/ }),

/***/ "./node_modules/@material/data-table/foundation.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/data-table/foundation.js ***!
  \*********************************************************/
/*! exports provided: MDCDataTableFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDataTableFoundation", function() { return MDCDataTableFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/data-table/constants.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDataTableFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDataTableFoundation, _super);

  function MDCDataTableFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDataTableFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClassAtRowIndex: function () {
          return undefined;
        },
        getRowCount: function () {
          return 0;
        },
        getRowElements: function () {
          return [];
        },
        getRowIdAtIndex: function () {
          return '';
        },
        getRowIndexByChildElement: function () {
          return 0;
        },
        getSelectedRowCount: function () {
          return 0;
        },
        isCheckboxAtRowIndexChecked: function () {
          return false;
        },
        isHeaderRowCheckboxChecked: function () {
          return false;
        },
        isRowsSelectable: function () {
          return false;
        },
        notifyRowSelectionChanged: function () {
          return undefined;
        },
        notifySelectedAll: function () {
          return undefined;
        },
        notifyUnselectedAll: function () {
          return undefined;
        },
        registerHeaderRowCheckbox: function () {
          return undefined;
        },
        registerRowCheckboxes: function () {
          return undefined;
        },
        removeClassAtRowIndex: function () {
          return undefined;
        },
        setAttributeAtRowIndex: function () {
          return undefined;
        },
        setHeaderRowCheckboxChecked: function () {
          return undefined;
        },
        setHeaderRowCheckboxIndeterminate: function () {
          return undefined;
        },
        setRowCheckboxCheckedAtIndex: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   * Use this if registering checkbox is synchronous.
   */

  MDCDataTableFoundation.prototype.layout = function () {
    if (this.adapter_.isRowsSelectable()) {
      this.adapter_.registerHeaderRowCheckbox();
      this.adapter_.registerRowCheckboxes();
      this.setHeaderRowCheckboxState_();
    }
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   * Use this if registering checkbox is asynchronous.
   */


  MDCDataTableFoundation.prototype.layoutAsync = function () {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.adapter_.isRowsSelectable()) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , this.adapter_.registerHeaderRowCheckbox()];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , this.adapter_.registerRowCheckboxes()];

          case 2:
            _a.sent();

            this.setHeaderRowCheckboxState_();
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTableFoundation.prototype.getRows = function () {
    return this.adapter_.getRowElements();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
      var isSelected = false;

      if (rowId && rowIds.indexOf(rowId) >= 0) {
        isSelected = true;
      }

      this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
      this.selectRowAtIndex_(rowIndex, isSelected);
    }

    this.setHeaderRowCheckboxState_();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
    var selectedRowIds = [];

    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      if (this.adapter_.isCheckboxAtRowIndexChecked(rowIndex)) {
        selectedRowIds.push(this.adapter_.getRowIdAtIndex(rowIndex));
      }
    }

    return selectedRowIds;
  };
  /**
   * Handles header row checkbox change event.
   */


  MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
    var isHeaderChecked = this.adapter_.isHeaderRowCheckboxChecked();

    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
      this.selectRowAtIndex_(rowIndex, isHeaderChecked);
    }

    if (isHeaderChecked) {
      this.adapter_.notifySelectedAll();
    } else {
      this.adapter_.notifyUnselectedAll();
    }
  };
  /**
   * Handles change event originated from row checkboxes.
   */


  MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
    var rowIndex = this.adapter_.getRowIndexByChildElement(event.target);

    if (rowIndex === -1) {
      return;
    }

    var selected = this.adapter_.isCheckboxAtRowIndexChecked(rowIndex);
    this.selectRowAtIndex_(rowIndex, selected);
    this.setHeaderRowCheckboxState_();
    var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
    this.adapter_.notifyRowSelectionChanged({
      rowId: rowId,
      rowIndex: rowIndex,
      selected: selected
    });
  };
  /**
   * Updates header row checkbox state based on number of rows selected.
   */


  MDCDataTableFoundation.prototype.setHeaderRowCheckboxState_ = function () {
    if (this.adapter_.getSelectedRowCount() === this.adapter_.getRowCount()) {
      this.adapter_.setHeaderRowCheckboxChecked(true);
      this.adapter_.setHeaderRowCheckboxIndeterminate(false);
    } else if (this.adapter_.getSelectedRowCount() === 0) {
      this.adapter_.setHeaderRowCheckboxIndeterminate(false);
      this.adapter_.setHeaderRowCheckboxChecked(false);
    } else {
      this.adapter_.setHeaderRowCheckboxIndeterminate(true);
      this.adapter_.setHeaderRowCheckboxChecked(false);
    }
  };
  /**
   * Sets the attributes of row element based on selection state.
   */


  MDCDataTableFoundation.prototype.selectRowAtIndex_ = function (rowIndex, selected) {
    if (selected) {
      this.adapter_.addClassAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ROW_SELECTED);
      this.adapter_.setAttributeAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'true');
    } else {
      this.adapter_.removeClassAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ROW_SELECTED);
      this.adapter_.setAttributeAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'false');
    }
  };

  return MDCDataTableFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);



/***/ }),

/***/ "./node_modules/@material/data-table/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/data-table/index.js ***!
  \****************************************************/
/*! exports provided: MDCDataTable, MDCDataTableFoundation, cssClasses, strings, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/data-table/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDataTable", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCDataTable"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/data-table/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDataTableFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCDataTableFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/data-table/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["events"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js ***!
  \******************************************************************/
/*! exports provided: CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return CheckboxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_checkbox_foundation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/checkbox/foundation.js */ "./node_modules/@material/checkbox/foundation.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");





class CheckboxBase extends _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["FormElement"] {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.value = '';
    this.mdcFoundationClass = _material_checkbox_foundation_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  get ripple() {
    return this.mdcRoot.ripple;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"])(this.mdcRoot)), {
      forceLayout: () => {
        this.mdcRoot.offsetWidth;
      },
      isAttachedToDOM: () => this.isConnected,
      isIndeterminate: () => this.indeterminate,
      isChecked: () => this.checked,
      hasNativeControl: () => Boolean(this.formElement),
      setNativeControlDisabled: disabled => {
        this.formElement.disabled = disabled;
      },
      setNativeControlAttr: (attr, value) => {
        this.formElement.setAttribute(attr, value);
      },
      removeNativeControlAttr: attr => {
        this.formElement.removeAttribute(attr);
      }
    });
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div class="mdc-checkbox"
           @animationend="${this._animationEndHandler}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>`;
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcRoot.ripple = Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["rippleNode"])({
      surfaceNode: this.mdcRoot,
      interactionNode: this.formElement
    });
  }

  _changeHandler() {
    this.checked = this.formElement.checked;
    this.indeterminate = this.formElement.indeterminate;
    this.mdcFoundation.handleChange();
  }

  _animationEndHandler() {
    this.mdcFoundation.handleAnimationEnd();
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-checkbox')], CheckboxBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('input')], CheckboxBase.prototype, "formElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], CheckboxBase.prototype, "checked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], CheckboxBase.prototype, "indeterminate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (value) {
  this.mdcFoundation.setDisabled(value);
})], CheckboxBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: String
})], CheckboxBase.prototype, "value", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js ***!
  \*****************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.38);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.38)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}:host{outline:none;display:inline-block}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{background-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-colorsecondary00000000secondary{0%{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-colorsecondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-colorsecondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-colorsecondary00000000secondary}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-mark-color, #fff)}`;

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox.js ***!
  \*************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_checkbox_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-checkbox-base.js */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js");
/* harmony import */ var _mwc_checkbox_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-checkbox-css.js */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Checkbox = class Checkbox extends _mwc_checkbox_base_js__WEBPACK_IMPORTED_MODULE_2__["CheckboxBase"] {};
Checkbox.styles = _mwc_checkbox_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Checkbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-checkbox')], Checkbox);


/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window);
      },
      computeBoundingRect: function () {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.unbounded_);
    },
    set: function (unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/deep-clone-simple/index.js":
/*!*************************************************!*\
  !*** ./node_modules/deep-clone-simple/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepcopy; });
function deepcopy(value) {
  if (!(!!value && typeof value == 'object')) {
    return value;
  }

  if (Object.prototype.toString.call(value) == '[object Date]') {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.map(deepcopy);
  }

  var result = {};
  Object.keys(value).forEach(function (key) {
    result[key] = deepcopy(value[key]);
  });
  return result;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktdW51c2VkLWVudGl0aWVzfnBhbmVsLWNvbmZpZy1kZXZpY2VzfnBhbmVsLWNvbmZpZy1lbnRpdGllc35wYW5lbC1jb25maWctaW50ZWdyYXRpb25zfnpoYX5kNGE3ZTY4My5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy91dGlsLnRzIiwid2VicGFjazovLy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vZm91bmRhdGlvbi50cyIsIndlYnBhY2s6Ly8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtY2hlY2tib3gtYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1jaGVja2JveC1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtY2xvbmUtc2ltcGxlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc1Byb3BlcnR5TmFtZU1hcCA9IHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uJyxcbiAgICB9LFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNpdGlvbicsXG4gICAgfSxcbn07XG52YXIganNFdmVudFR5cGVNYXAgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgfSxcbiAgICBhbmltYXRpb25pdGVyYXRpb246IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ3RyYW5zaXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNXaW5kb3cod2luZG93T2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93T2JqLmRvY3VtZW50KSAmJiB0eXBlb2Ygd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3dPYmosIGNzc1Byb3BlcnR5KSB7XG4gICAgaWYgKGlzV2luZG93KHdpbmRvd09iaikgJiYgY3NzUHJvcGVydHkgaW4gY3NzUHJvcGVydHlOYW1lTWFwKSB7XG4gICAgICAgIHZhciBlbCA9IHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIF9hID0gY3NzUHJvcGVydHlOYW1lTWFwW2Nzc1Byb3BlcnR5XSwgc3RhbmRhcmQgPSBfYS5zdGFuZGFyZCwgcHJlZml4ZWQgPSBfYS5wcmVmaXhlZDtcbiAgICAgICAgdmFyIGlzU3RhbmRhcmQgPSBzdGFuZGFyZCBpbiBlbC5zdHlsZTtcbiAgICAgICAgcmV0dXJuIGlzU3RhbmRhcmQgPyBzdGFuZGFyZCA6IHByZWZpeGVkO1xuICAgIH1cbiAgICByZXR1cm4gY3NzUHJvcGVydHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGV2ZW50VHlwZSBpbiBqc0V2ZW50VHlwZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGpzRXZlbnRUeXBlTWFwW2V2ZW50VHlwZV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQsIGNzc1Byb3BlcnR5ID0gX2EuY3NzUHJvcGVydHk7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gY3NzUHJvcGVydHkgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0NvbXBvbmVudChyb290LCBmb3VuZGF0aW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgdHNsaWJfMS5fX3NwcmVhZChhcmdzKSk7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAgICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgICB9XG4gICAgTURDQ29tcG9uZW50LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgICAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAgICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgICAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbih7fSkpO1xuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG1ldGhvZCBwYXJhbSBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzOyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHVuaXQgdGVzdGVkICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIF9hcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAgICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAgICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAgICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAgICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAgICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSkge1xuICAgICAgICBpZiAoc2hvdWxkQnViYmxlID09PSB2b2lkIDApIHsgc2hvdWxkQnViYmxlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IE1EQ0NvbXBvbmVudCB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURTogJ21kYy1jaGVja2JveC0tYW5pbS1jaGVja2VkLWluZGV0ZXJtaW5hdGUnLFxuICAgIEFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC11bmNoZWNrZWQnLFxuICAgIEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtY2hlY2tlZCcsXG4gICAgQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLXVuY2hlY2tlZCcsXG4gICAgQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtY2hlY2tlZCcsXG4gICAgQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURTogJ21kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtaW5kZXRlcm1pbmF0ZScsXG4gICAgQkFDS0dST1VORDogJ21kYy1jaGVja2JveF9fYmFja2dyb3VuZCcsXG4gICAgQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tY2hlY2tlZCcsXG4gICAgQ0hFQ0tNQVJLOiAnbWRjLWNoZWNrYm94X19jaGVja21hcmsnLFxuICAgIENIRUNLTUFSS19QQVRIOiAnbWRjLWNoZWNrYm94X19jaGVja21hcmstcGF0aCcsXG4gICAgRElTQUJMRUQ6ICdtZGMtY2hlY2tib3gtLWRpc2FibGVkJyxcbiAgICBJTkRFVEVSTUlOQVRFOiAnbWRjLWNoZWNrYm94LS1pbmRldGVybWluYXRlJyxcbiAgICBNSVhFRE1BUks6ICdtZGMtY2hlY2tib3hfX21peGVkbWFyaycsXG4gICAgTkFUSVZFX0NPTlRST0w6ICdtZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sJyxcbiAgICBST09UOiAnbWRjLWNoZWNrYm94JyxcbiAgICBTRUxFQ1RFRDogJ21kYy1jaGVja2JveC0tc2VsZWN0ZWQnLFxuICAgIFVQR1JBREVEOiAnbWRjLWNoZWNrYm94LS11cGdyYWRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfQ0hFQ0tFRF9BVFRSOiAnYXJpYS1jaGVja2VkJyxcbiAgICBBUklBX0NIRUNLRURfSU5ERVRFUk1JTkFURV9WQUxVRTogJ21peGVkJyxcbiAgICBOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUjogJy5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sJyxcbiAgICBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQ6ICdjaGVja2VkJyxcbiAgICBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEU6ICdpbmRldGVybWluYXRlJyxcbiAgICBUUkFOU0lUSU9OX1NUQVRFX0lOSVQ6ICdpbml0JyxcbiAgICBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDogJ3VuY2hlY2tlZCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIEFOSU1fRU5EX0xBVENIX01TOiAyNTAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDQ2hlY2tib3hGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENDaGVja2JveEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENDaGVja2JveEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV8gPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfSU5JVDtcbiAgICAgICAgX3RoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyA9ICcnO1xuICAgICAgICBfdGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5lbmFibGVBbmltYXRpb25FbmRIYW5kbGVyXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveEZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb3JjZUxheW91dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc05hdGl2ZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzQXR0YWNoZWRUb0RPTTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0luZGV0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlTmF0aXZlQ29udHJvbEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXyA9IHRoaXMuZGV0ZXJtaW5lQ2hlY2tTdGF0ZV8oKTtcbiAgICAgICAgdGhpcy51cGRhdGVBcmlhQ2hlY2tlZF8oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlVQR1JBREVEKTtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbUVuZExhdGNoVGltZXJfKTtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sRGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBhbmltYXRpb25lbmQgZXZlbnQgZm9yIHRoZSBjaGVja2JveFxuICAgICAqL1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQW5pbWF0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8pO1xuICAgICAgICB0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoX3RoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyk7XG4gICAgICAgICAgICBfdGhpcy5lbmFibGVBbmltYXRpb25FbmRIYW5kbGVyXyA9IGZhbHNlO1xuICAgICAgICB9LCBudW1iZXJzLkFOSU1fRU5EX0xBVENIX01TKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGNoYW5nZSBldmVudCBmb3IgdGhlIGNoZWNrYm94XG4gICAgICovXG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNoZWNrU3RhdGVfKCk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLnRyYW5zaXRpb25DaGVja1N0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc05hdGl2ZUNvbnRyb2woKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvbGRTdGF0ZSA9IHRoaXMuY3VycmVudENoZWNrU3RhdGVfO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLmRldGVybWluZUNoZWNrU3RhdGVfKCk7XG4gICAgICAgIGlmIChvbGRTdGF0ZSA9PT0gbmV3U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUFyaWFDaGVja2VkXygpO1xuICAgICAgICB2YXIgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEO1xuICAgICAgICB2YXIgU0VMRUNURUQgPSBjc3NDbGFzc2VzLlNFTEVDVEVEO1xuICAgICAgICBpZiAobmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFNFTEVDVEVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoU0VMRUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHRvIGVuc3VyZSB0aGF0IHRoZXJlIGlzbid0IGEgcHJldmlvdXNseSBleGlzdGluZyBhbmltYXRpb24gY2xhc3MsIGluIGNhc2UgZm9yIGV4YW1wbGVcbiAgICAgICAgLy8gdGhlIHVzZXIgaW50ZXJhY3RlZCB3aXRoIHRoZSBjaGVja2JveCBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3YXMgZmluaXNoZWQuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbUVuZExhdGNoVGltZXJfKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9yY2VMYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3ModGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18gPSB0aGlzLmdldFRyYW5zaXRpb25BbmltYXRpb25DbGFzc18ob2xkU3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV8gPSBuZXdTdGF0ZTtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHBhcmVudE5vZGUgc28gdGhhdCBhbmltYXRpb25zIGFyZSBvbmx5IHJ1biB3aGVuIHRoZSBlbGVtZW50IGlzIGF0dGFjaGVkXG4gICAgICAgIC8vIHRvIHRoZSBET00uXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzQXR0YWNoZWRUb0RPTSgpICYmIHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyk7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXRlcm1pbmVDaGVja1N0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURSA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFLCBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCwgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0luZGV0ZXJtaW5hdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5pc0NoZWNrZWQoKSA/IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA6IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRUcmFuc2l0aW9uQW5pbWF0aW9uQ2xhc3NfID0gZnVuY3Rpb24gKG9sZFN0YXRlLCBuZXdTdGF0ZSkge1xuICAgICAgICB2YXIgVFJBTlNJVElPTl9TVEFURV9JTklUID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0lOSVQsIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9DSEVDS0VELCBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgICAgIHZhciBfYSA9IE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5jc3NDbGFzc2VzLCBBTklNX1VOQ0hFQ0tFRF9DSEVDS0VEID0gX2EuQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRCwgQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURSA9IF9hLkFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEUsIEFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQgPSBfYS5BTklNX0NIRUNLRURfVU5DSEVDS0VELCBBTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURSA9IF9hLkFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFLCBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCA9IF9hLkFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VELCBBTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEID0gX2EuQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgc3dpdGNoIChvbGRTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBUUkFOU0lUSU9OX1NUQVRFX0lOSVQ6XG4gICAgICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID8gQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQgOiBBTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEO1xuICAgICAgICAgICAgY2FzZSBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA/IEFOSU1fVU5DSEVDS0VEX0NIRUNLRUQgOiBBTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFO1xuICAgICAgICAgICAgY2FzZSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA/IEFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQgOiBBTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID8gQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQgOiBBTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFyaWFDaGVja2VkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRW5zdXJlIGFyaWEtY2hlY2tlZCBpcyBzZXQgdG8gbWl4ZWQgaWYgY2hlY2tib3ggaXMgaW4gaW5kZXRlcm1pbmF0ZSBzdGF0ZS5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNJbmRldGVybWluYXRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TmF0aXZlQ29udHJvbEF0dHIoc3RyaW5ncy5BUklBX0NIRUNLRURfQVRUUiwgc3RyaW5ncy5BUklBX0NIRUNLRURfSU5ERVRFUk1JTkFURV9WQUxVRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgb24vb2ZmIHN0YXRlIGRvZXMgbm90IG5lZWQgdG8ga2VlcCB0cmFjayBvZiBhcmlhLWNoZWNrZWQsIHNpbmNlXG4gICAgICAgICAgICAvLyB0aGUgc2NyZWVucmVhZGVyIHVzZXMgdGhlIGNoZWNrZWQgcHJvcGVydHkgb24gdGhlIGNoZWNrYm94IGVsZW1lbnQuXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZU5hdGl2ZUNvbnRyb2xBdHRyKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDQ2hlY2tib3hGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENDaGVja2JveEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDaGVja2JveEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7TURDQ2hlY2tib3hBZGFwdGVyfSBmcm9tICdAbWF0ZXJpYWwvY2hlY2tib3gvYWRhcHRlci5qcyc7XG5pbXBvcnQgTURDQ2hlY2tib3hGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9jaGVja2JveC9mb3VuZGF0aW9uLmpzJztcbmltcG9ydCB7YWRkSGFzUmVtb3ZlQ2xhc3MsIEZvcm1FbGVtZW50LCBIVE1MRWxlbWVudFdpdGhSaXBwbGUsIG9ic2VydmVyfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvZm9ybS1lbGVtZW50LmpzJztcbmltcG9ydCB7cmlwcGxlTm9kZX0gZnJvbSAnQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge2h0bWwsIHByb3BlcnR5LCBxdWVyeX0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hCYXNlIGV4dGVuZHMgRm9ybUVsZW1lbnQge1xuICBAcXVlcnkoJy5tZGMtY2hlY2tib3gnKSBwcm90ZWN0ZWQgbWRjUm9vdCE6IEhUTUxFbGVtZW50V2l0aFJpcHBsZTtcblxuICBAcXVlcnkoJ2lucHV0JykgcHJvdGVjdGVkIGZvcm1FbGVtZW50ITogSFRNTElucHV0RWxlbWVudDtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBjaGVja2VkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pXG4gIEBvYnNlcnZlcihmdW5jdGlvbih0aGlzOiBDaGVja2JveEJhc2UsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLnNldERpc2FibGVkKHZhbHVlKTtcbiAgfSlcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IFN0cmluZ30pIHZhbHVlID0gJyc7XG5cbiAgcHJvdGVjdGVkIG1kY0ZvdW5kYXRpb25DbGFzcyA9IE1EQ0NoZWNrYm94Rm91bmRhdGlvbjtcblxuICBwcm90ZWN0ZWQgbWRjRm91bmRhdGlvbiE6IE1EQ0NoZWNrYm94Rm91bmRhdGlvbjtcblxuICBnZXQgcmlwcGxlKCkge1xuICAgIHJldHVybiB0aGlzLm1kY1Jvb3QucmlwcGxlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUFkYXB0ZXIoKTogTURDQ2hlY2tib3hBZGFwdGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWRkSGFzUmVtb3ZlQ2xhc3ModGhpcy5tZGNSb290KSxcbiAgICAgIGZvcmNlTGF5b3V0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMubWRjUm9vdC5vZmZzZXRXaWR0aDtcbiAgICAgIH0sXG4gICAgICBpc0F0dGFjaGVkVG9ET006ICgpID0+IHRoaXMuaXNDb25uZWN0ZWQsXG4gICAgICBpc0luZGV0ZXJtaW5hdGU6ICgpID0+IHRoaXMuaW5kZXRlcm1pbmF0ZSxcbiAgICAgIGlzQ2hlY2tlZDogKCkgPT4gdGhpcy5jaGVja2VkLFxuICAgICAgaGFzTmF0aXZlQ29udHJvbDogKCkgPT4gQm9vbGVhbih0aGlzLmZvcm1FbGVtZW50KSxcbiAgICAgIHNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZDogKGRpc2FibGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIH0sXG4gICAgICBzZXROYXRpdmVDb250cm9sQXR0cjogKGF0dHI6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlTmF0aXZlQ29udHJvbEF0dHI6IChhdHRyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1jaGVja2JveFwiXG4gICAgICAgICAgIEBhbmltYXRpb25lbmQ9XCIke3RoaXMuX2FuaW1hdGlvbkVuZEhhbmRsZXJ9XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9jaGFuZ2VIYW5kbGVyfVwiXG4gICAgICAgICAgICAgIC5pbmRldGVybWluYXRlPVwiJHt0aGlzLmluZGV0ZXJtaW5hdGV9XCJcbiAgICAgICAgICAgICAgLmNoZWNrZWQ9XCIke3RoaXMuY2hlY2tlZH1cIlxuICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMudmFsdWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hfX2JhY2tncm91bmRcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwibWRjLWNoZWNrYm94X19jaGVja21hcmtcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBjbGFzcz1cIm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGhcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0xLjczLDEyLjkxIDguMSwxOS4yOCAyMi43OSw0LjU5XCI+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hfX21peGVkbWFya1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1jaGVja2JveF9fcmlwcGxlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMubWRjUm9vdC5yaXBwbGUgPSByaXBwbGVOb2RlKFxuICAgICAgICB7c3VyZmFjZU5vZGU6IHRoaXMubWRjUm9vdCwgaW50ZXJhY3Rpb25Ob2RlOiB0aGlzLmZvcm1FbGVtZW50fSk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZm9ybUVsZW1lbnQuY2hlY2tlZDtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0aGlzLmZvcm1FbGVtZW50LmluZGV0ZXJtaW5hdGU7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZUNoYW5nZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5pbWF0aW9uRW5kSGFuZGxlcigpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlQW5pbWF0aW9uRW5kKCk7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2AubWRjLXRvdWNoLXRhcmdldC13cmFwcGVye2Rpc3BsYXk6aW5saW5lfUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jaGVja2VkLWNoZWNrbWFyay1wYXRoezAlLDUwJXtzdHJva2UtZGFzaG9mZnNldDoyOS43ODMzMzg1fTUwJXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpfTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MH19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUtbWl4ZWRtYXJrezAlLDY4LjIle3RyYW5zZm9ybTpzY2FsZVgoMCl9NjguMiV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwgMCwgMCwgMSl9MTAwJXt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1jaGVja2VkLXVuY2hlY2tlZC1jaGVja21hcmstcGF0aHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7b3BhY2l0eToxO3N0cm9rZS1kYXNob2Zmc2V0OjB9dG97b3BhY2l0eTowO3N0cm9rZS1kYXNob2Zmc2V0Oi0yOS43ODMzMzg1fX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1jaGVja2VkLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJre2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtY2hlY2tlZC1jaGVja21hcmt7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjE0LCAwLCAwLCAxKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtY2hlY2tlZC1pbmRldGVybWluYXRlLW1peGVkbWFya3tmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bWRjLWFuaW1hdGlvbi1kZWNlbGVyYXRpb24tY3VydmUtdGltaW5nLWZ1bmN0aW9uO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9dG97dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtY2hlY2tlZC1taXhlZG1hcmt7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjE0LCAwLCAwLCAxKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLXVuY2hlY2tlZC1taXhlZG1hcmt7MCV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7dHJhbnNmb3JtOnNjYWxlWCgxKTtvcGFjaXR5OjF9MzIuOCUsMTAwJXt0cmFuc2Zvcm06c2NhbGVYKDApO29wYWNpdHk6MH19Lm1kYy1jaGVja2JveHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4OjAgMCAxOHB4O2JveC1zaXppbmc6Y29udGVudC1ib3g7d2lkdGg6MThweDtoZWlnaHQ6MThweDtsaW5lLWhlaWdodDowO3doaXRlLXNwYWNlOm5vd3JhcDtjdXJzb3I6cG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjpib3R0b207cGFkZGluZzoxMXB4fS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmUsLm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0ubWRjLWNoZWNrYm94Lm1kYy1jaGVja2JveC0tc2VsZWN0ZWQgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkOmhvdmVyIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXMgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLWNoZWNrYm94Lm1kYy1jaGVja2JveC0tc2VsZWN0ZWQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmUgLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkLm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQubWRjLWNoZWNrYm94LS1zZWxlY3RlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZSwubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke3RvcDoxMXB4O2xlZnQ6MTFweH0ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXt0b3A6LTEzcHg7bGVmdDotMTNweDt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2x7dG9wOjBweDtyaWdodDowcHg7bGVmdDowcHg7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkOm5vdCg6Y2hlY2tlZCk6bm90KDppbmRldGVybWluYXRlKX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtZmFkZS1pbi1iYWNrZ3JvdW5kLThBMDAwMDAwc2Vjb25kYXJ5MDAwMDAwMDBzZWNvbmRhcnl7MCV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fTUwJXtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWZhZGUtb3V0LWJhY2tncm91bmQtOEEwMDAwMDBzZWNvbmRhcnkwMDAwMDAwMHNlY29uZGFyeXswJSw4MCV7Ym9yZGVyLWNvbG9yOiMwMTg3ODY7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfTEwMCV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fX0ubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHthbmltYXRpb24tbmFtZTptZGMtY2hlY2tib3gtZmFkZS1pbi1iYWNrZ3JvdW5kLThBMDAwMDAwc2Vjb25kYXJ5MDAwMDAwMDBzZWNvbmRhcnl9Lm1kYy1jaGVja2JveC0tYW5pbS1jaGVja2VkLXVuY2hlY2tlZCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLXVuY2hlY2tlZCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7YW5pbWF0aW9uLW5hbWU6bWRjLWNoZWNrYm94LWZhZGUtb3V0LWJhY2tncm91bmQtOEEwMDAwMDBzZWNvbmRhcnkwMDAwMDAwMHNlY29uZGFyeX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbFtkaXNhYmxlZF06bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3tjb2xvcjojZmZmfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZGlzYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7Y29sb3I6I2ZmZn0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpkaXNhYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3tib3JkZXItY29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSl7Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOm5vdCg6Y2hlY2tlZCk6bm90KDppbmRldGVybWluYXRlKX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2JvcmRlci1jb2xvcjpHcmF5VGV4dDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6R3JheVRleHQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpkaXNhYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3tjb2xvcjpHcmF5VGV4dH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpkaXNhYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3tib3JkZXItY29sb3I6R3JheVRleHR9Lm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre21hcmdpbjowIDFweH19Lm1kYy1jaGVja2JveC0tZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246YWJzb2x1dGU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwb2ludGVyLWV2ZW50czpub25lO3dpbGwtY2hhbmdlOmJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpLGJvcmRlci1jb2xvciA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZDo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzAwMDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlLCAjMDAwKX0ubWRjLWNoZWNrYm94X19jaGVja21hcmt7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IDE4MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3tvcGFjaXR5OjF9Lm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGh7dHJhbnNpdGlvbjpzdHJva2UtZGFzaG9mZnNldCAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDozLjEycHg7c3Ryb2tlLWRhc2hvZmZzZXQ6MjkuNzgzMzM4NTtzdHJva2UtZGFzaGFycmF5OjI5Ljc4MzMzODV9Lm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre3dpZHRoOjEwMCU7aGVpZ2h0OjA7dHJhbnNmb3JtOnNjYWxlWCgwKSByb3RhdGUoMGRlZyk7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpLHRyYW5zZm9ybSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tdXBncmFkZWQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLC5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoLC5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3t0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudH0ubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtaW5kZXRlcm1pbmF0ZSAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7YW5pbWF0aW9uLWR1cmF0aW9uOjE4MG1zO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyfS5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWNoZWNrZWQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGh7YW5pbWF0aW9uOm1kYy1jaGVja2JveC11bmNoZWNrZWQtY2hlY2tlZC1jaGVja21hcmstcGF0aCAxODBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2FuaW1hdGlvbjptZGMtY2hlY2tib3gtdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUtbWl4ZWRtYXJrIDkwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoe2FuaW1hdGlvbjptZGMtY2hlY2tib3gtY2hlY2tlZC11bmNoZWNrZWQtY2hlY2ttYXJrLXBhdGggOTBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LWNoZWNrZWQtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmsgOTBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LWNoZWNrZWQtaW5kZXRlcm1pbmF0ZS1taXhlZG1hcmsgOTBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS1jaGVja2VkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtY2hlY2tlZC1jaGVja21hcmsgNTAwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtY2hlY2tlZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtbWl4ZWRtYXJrIDUwMG1zIGxpbmVhciAwczt0cmFuc2l0aW9uOm5vbmV9Lm1kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLXVuY2hlY2tlZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLXVuY2hlY2tlZC1taXhlZG1hcmsgMzAwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6aW5kZXRlcm1pbmF0ZX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIDkwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLGJhY2tncm91bmQtY29sb3IgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmstcGF0aHtzdHJva2UtZGFzaG9mZnNldDowfS5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06c2NhbGUoMCwgMCk7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwiO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtO3RyYW5zaXRpb246b3BhY2l0eSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpLHRyYW5zZm9ybSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmZvY3Vzfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eTouMTI7dHJhbnNpdGlvbjpvcGFjaXR5IDgwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLHRyYW5zZm9ybSA4MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbHtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46MDtwYWRkaW5nOjA7b3BhY2l0eTowO2N1cnNvcjppbmhlcml0fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kYy1jaGVja2JveC0tdG91Y2h7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTo0cHg7bWFyZ2luLXJpZ2h0OjRweDttYXJnaW4tbGVmdDo0cHh9Lm1kYy1jaGVja2JveC0tdG91Y2ggLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2x7dG9wOi00cHg7cmlnaHQ6LTRweDtsZWZ0Oi00cHg7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJre3RyYW5zaXRpb246b3BhY2l0eSAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSksdHJhbnNmb3JtIDE4MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtvcGFjaXR5OjF9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3t0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtNDVkZWcpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpLHRyYW5zZm9ybSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMGRlZyk7b3BhY2l0eToxfUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX10b3tvcGFjaXR5OjB9fS5tZGMtY2hlY2tib3h7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3JlLC5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQgLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbiAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZSwubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwO2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UsICMwMDApfS5tZGMtY2hlY2tib3g6aG92ZXIgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLWNoZWNrYm94Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCkgLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtY2hlY2tib3g6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmUgLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLWNoZWNrYm94X19yaXBwbGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZX0ubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtjb250ZW50Om5vbmV9Omhvc3R7b3V0bGluZTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Zm9jdXN+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZDo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjU0KSl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOm5vdCg6Y2hlY2tlZCk6bm90KDppbmRldGVybWluYXRlKX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtZGlzYWJsZWQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4zOCkpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbFtkaXNhYmxlZF06aW5kZXRlcm1pbmF0ZX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy1jaGVja2JveC1kaXNhYmxlZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjM4KSl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDpub3QoOmNoZWNrZWQpOm5vdCg6aW5kZXRlcm1pbmF0ZSl+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjU0KSk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtZmFkZS1pbi1iYWNrZ3JvdW5kLS0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcnNlY29uZGFyeTAwMDAwMDAwc2Vjb25kYXJ5ezAle2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNTQpKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fTUwJXtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWZhZGUtb3V0LWJhY2tncm91bmQtLS1tZGMtY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yc2Vjb25kYXJ5MDAwMDAwMDBzZWNvbmRhcnl7MCUsODAle2JvcmRlci1jb2xvcjojMDE4Nzg2O2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0xMDAle2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNTQpKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fX0ubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHthbmltYXRpb24tbmFtZTptZGMtY2hlY2tib3gtZmFkZS1pbi1iYWNrZ3JvdW5kLS0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcnNlY29uZGFyeTAwMDAwMDAwc2Vjb25kYXJ5fS5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2FuaW1hdGlvbi1uYW1lOm1kYy1jaGVja2JveC1mYWRlLW91dC1iYWNrZ3JvdW5kLS0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcnNlY29uZGFyeTAwMDAwMDAwc2Vjb25kYXJ5fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7Y29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LW1hcmstY29sb3IsICNmZmYpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy1jaGVja2JveC1tYXJrLWNvbG9yLCAjZmZmKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpkaXNhYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3tjb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtbWFyay1jb2xvciwgI2ZmZil9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZGlzYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy1jaGVja2JveC1tYXJrLWNvbG9yLCAjZmZmKX1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7Q2hlY2tib3hCYXNlfSBmcm9tICcuL213Yy1jaGVja2JveC1iYXNlLmpzJztcbmltcG9ydCB7c3R5bGV9IGZyb20gJy4vbXdjLWNoZWNrYm94LWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1jaGVja2JveCc6IENoZWNrYm94O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdtd2MtY2hlY2tib3gnKVxuZXhwb3J0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3hCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IHN0eWxlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcGNvcHkodmFsdWUpIHtcbiAgaWYgKCEoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoZGVlcGNvcHkpO1xuICB9XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goXG4gICAgZnVuY3Rpb24oa2V5KSB7IHJlc3VsdFtrZXldID0gZGVlcGNvcHkodmFsdWVba2V5XSk7IH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWhCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBWUE7QUFHQTtBQUNBO0FBREE7QUFBQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQTNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQU9BO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBMkNBOztBQXNHQTtBQUNBO0FBbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTkE7O0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU5BOztBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFOQTs7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTkE7O0FBQUE7QUFDQTtBQWNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7O0FBQUE7QUFRQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDak1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdDQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBbkNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVZBO0FBWUE7QUFiQTs7QUFBQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FGNU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQTBJQTtBQUNBO0FBMUlBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhEQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0tBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQW5CQTtBQXFCQTtBQXRCQTs7QUFBQTtBQTRCQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFLQTtBQUVBO0FBTUE7QUFFQTtBQUVBO0FBb0VBO0FBQ0E7QUFqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBTjVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFxQ0E7O0FBMkNBO0FBQ0E7QUFqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBcEJBO0FBc0JBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBT25IQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==