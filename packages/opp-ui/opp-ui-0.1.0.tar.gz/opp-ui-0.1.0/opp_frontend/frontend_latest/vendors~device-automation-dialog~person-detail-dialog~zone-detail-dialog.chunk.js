(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~device-automation-dialog~person-detail-dialog~zone-detail-dialog"],{

/***/ "./node_modules/@material/dialog/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
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
  CLOSING: 'mdc-dialog--closing',
  OPEN: 'mdc-dialog--open',
  OPENING: 'mdc-dialog--opening',
  SCROLLABLE: 'mdc-dialog--scrollable',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  STACKED: 'mdc-dialog--stacked'
};
var strings = {
  ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
  BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
  BUTTON_SELECTOR: '.mdc-dialog__button',
  CLOSED_EVENT: 'MDCDialog:closed',
  CLOSE_ACTION: 'close',
  CLOSING_EVENT: 'MDCDialog:closing',
  CONTAINER_SELECTOR: '.mdc-dialog__container',
  CONTENT_SELECTOR: '.mdc-dialog__content',
  DESTROY_ACTION: 'destroy',
  INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
  OPENED_EVENT: 'MDCDialog:opened',
  OPENING_EVENT: 'MDCDialog:opening',
  SCRIM_SELECTOR: '.mdc-dialog__scrim',
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
  SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var numbers = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};

/***/ }),

/***/ "./node_modules/@material/dialog/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCDialogFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return MDCDialogFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var MDCDialogFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialogFoundation, _super);

  function MDCDialogFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.layoutFrame_ = 0;
    _this.escapeKeyAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.scrimClickAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.autoStackButtons_ = true;
    _this.areButtonsStacked_ = false;
    return _this;
  }

  Object.defineProperty(MDCDialogFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
    get: function () {
      return {
        addBodyClass: function () {
          return undefined;
        },
        addClass: function () {
          return undefined;
        },
        areButtonsStacked: function () {
          return false;
        },
        clickDefaultButton: function () {
          return undefined;
        },
        eventTargetMatches: function () {
          return false;
        },
        getActionFromEvent: function () {
          return '';
        },
        getInitialFocusEl: function () {
          return null;
        },
        hasClass: function () {
          return false;
        },
        isContentScrollable: function () {
          return false;
        },
        notifyClosed: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        },
        notifyOpened: function () {
          return undefined;
        },
        notifyOpening: function () {
          return undefined;
        },
        releaseFocus: function () {
          return undefined;
        },
        removeBodyClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        reverseButtons: function () {
          return undefined;
        },
        trapFocus: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCDialogFoundation.prototype.init = function () {
    if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED)) {
      this.setAutoStackButtons(false);
    }
  };

  MDCDialogFoundation.prototype.destroy = function () {
    if (this.isOpen_) {
      this.close(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].DESTROY_ACTION);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
      this.handleAnimationTimerEnd_();
    }

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
      this.layoutFrame_ = 0;
    }
  };

  MDCDialogFoundation.prototype.open = function () {
    var _this = this;

    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);

      _this.adapter_.addBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);

      _this.layout();

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.trapFocus(_this.adapter_.getInitialFocusEl());

        _this.adapter_.notifyOpened();
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  };

  MDCDialogFoundation.prototype.close = function (action) {
    var _this = this;

    if (action === void 0) {
      action = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
      return;
    }

    this.isOpen_ = false;
    this.adapter_.notifyClosing(action);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    this.adapter_.removeBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.adapter_.releaseFocus();

      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(action);
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_CLOSE_TIME_MS);
  };

  MDCDialogFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
    return this.escapeKeyAction_;
  };

  MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
    this.escapeKeyAction_ = action;
  };

  MDCDialogFoundation.prototype.getScrimClickAction = function () {
    return this.scrimClickAction_;
  };

  MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
    this.scrimClickAction_ = action;
  };

  MDCDialogFoundation.prototype.getAutoStackButtons = function () {
    return this.autoStackButtons_;
  };

  MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
    this.autoStackButtons_ = autoStack;
  };

  MDCDialogFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };
  /** Handles click on the dialog root element. */


  MDCDialogFoundation.prototype.handleClick = function (evt) {
    var isScrim = this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SCRIM_SELECTOR); // Check for scrim click first since it doesn't require querying ancestors.

    if (isScrim && this.scrimClickAction_ !== '') {
      this.close(this.scrimClickAction_);
    } else {
      var action = this.adapter_.getActionFromEvent(evt);

      if (action) {
        this.close(action);
      }
    }
  };
  /** Handles keydown on the dialog root element. */


  MDCDialogFoundation.prototype.handleKeydown = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

    if (!isEnter) {
      return;
    }

    var action = this.adapter_.getActionFromEvent(evt);

    if (action) {
      // Action button callback is handled in `handleClick`,
      // since space/enter keydowns on buttons trigger click events.
      return;
    }

    var isDefault = !this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SUPPRESS_DEFAULT_PRESS_SELECTOR);

    if (isEnter && isDefault) {
      this.adapter_.clickDefaultButton();
    }
  };
  /** Handles keydown on the document. */


  MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscape && this.escapeKeyAction_ !== '') {
      this.close(this.escapeKeyAction_);
    }
  };

  MDCDialogFoundation.prototype.layoutInternal_ = function () {
    if (this.autoStackButtons_) {
      this.detectStackedButtons_();
    }

    this.detectScrollableContent_();
  };

  MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
    // Remove the class first to let us measure the buttons' natural positions.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    var areButtonsStacked = this.adapter_.areButtonsStacked();

    if (areButtonsStacked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    }

    if (areButtonsStacked !== this.areButtonsStacked_) {
      this.adapter_.reverseButtons();
      this.areButtonsStacked_ = areButtonsStacked;
    }
  };

  MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
    // Remove the class first to let us measure the natural height of the content.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);

    if (this.adapter_.isContentScrollable()) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);
    }
  };

  return MDCDialogFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCDialogFoundation);

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog-base.js ***!
  \**************************************************************/
/*! exports provided: DialogBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return DialogBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var blocking_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blocking-elements */ "./node_modules/blocking-elements/dist/blocking-elements.js");
/* harmony import */ var blocking_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blocking_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wicg_inert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wicg-inert */ "./node_modules/wicg-inert/src/inert.js");
/* harmony import */ var wicg_inert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wicg_inert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_dialog_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dialog/constants.js */ "./node_modules/@material/dialog/constants.js");
/* harmony import */ var _material_dialog_foundation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dialog/foundation.js */ "./node_modules/@material/dialog/foundation.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

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










const blockingElements = document.$blockingElements;
class DialogBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["BaseElement"] {
  constructor() {
    super(...arguments);
    this.hideActions = false;
    this.stacked = false;
    this.heading = '';
    this.scrimClickAction = 'close';
    this.escapeKeyAction = 'close';
    this.open = false;
    this.defaultAction = 'close';
    this.actionAttribute = 'dialogAction';
    this.initialFocusAttribute = 'dialogInitialFocus';
    this.mdcFoundationClass = _material_dialog_foundation_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.boundLayout = null;
    this.boundHandleClick = null;
    this.boundHandleKeydown = null;
    this.boundHandleDocumentKeydown = null;
  }

  get primaryButton() {
    let assignedNodes = this.primarySlot.assignedNodes();
    assignedNodes = assignedNodes.filter(node => node instanceof HTMLElement);
    const button = assignedNodes[0];
    return button ? button : null;
  }

  emitNotification(name, action) {
    const init = {
      detail: action ? {
        action
      } : {}
    };
    const ev = new CustomEvent(name, init);
    this.dispatchEvent(ev);
  }

  getInitialFocusEl() {
    const initFocusSelector = `[${this.initialFocusAttribute}]`; // only search light DOM. This typically handles all the cases

    const lightDomQs = this.querySelector(initFocusSelector);

    if (lightDomQs) {
      return lightDomQs;
    } // if not in light dom, search each flattened distributed node.


    const primarySlot = this.primarySlot;
    const primaryNodes = primarySlot.assignedNodes({
      flatten: true
    });
    const primaryFocusElement = this.searchNodeTreesForAttribute(primaryNodes, this.initialFocusAttribute);

    if (primaryFocusElement) {
      return primaryFocusElement;
    }

    const secondarySlot = this.secondarySlot;
    const secondaryNodes = secondarySlot.assignedNodes({
      flatten: true
    });
    const secondaryFocusElement = this.searchNodeTreesForAttribute(secondaryNodes, this.initialFocusAttribute);

    if (secondaryFocusElement) {
      return secondaryFocusElement;
    }

    const contentSlot = this.contentSlot;
    const contentNodes = contentSlot.assignedNodes({
      flatten: true
    });
    const initFocusElement = this.searchNodeTreesForAttribute(contentNodes, this.initialFocusAttribute);
    return initFocusElement;
  }

  searchNodeTreesForAttribute(nodes, attribute) {
    for (const node of nodes) {
      if (!(node instanceof HTMLElement)) {
        continue;
      }

      if (node.hasAttribute(attribute)) {
        return node;
      } else {
        const selection = node.querySelector(`[${attribute}]`);

        if (selection) {
          return selection;
        }
      }
    }

    return null;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["addHasRemoveClass"])(this.mdcRoot)), {
      addBodyClass: () => document.body.style.overflow = 'hidden',
      removeBodyClass: () => document.body.style.overflow = '',
      areButtonsStacked: () => this.stacked,
      clickDefaultButton: () => {
        const primary = this.primaryButton;

        if (primary) {
          primary.click();
        }
      },
      eventTargetMatches: (target, selector) => target ? Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__["matches"])(target, selector) : false,
      getActionFromEvent: e => {
        if (!e.target) {
          return '';
        }

        const element = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__["closest"])(e.target, `[${this.actionAttribute}]`);
        const action = element && element.getAttribute(this.actionAttribute);
        return action;
      },
      getInitialFocusEl: () => {
        return this.getInitialFocusEl();
      },
      isContentScrollable: () => {
        const el = this.contentElement;
        return el ? el.scrollHeight > el.offsetHeight : false;
      },
      notifyClosed: action => this.emitNotification('closed', action),
      notifyClosing: action => {
        if (!this.closingDueToDisconnect) {
          // Don't set our open state to closed just because we were
          // disconnected. That way if we get reconnected, we'll know to
          // re-open.
          this.open = false;
        }

        this.emitNotification('closing', action);
      },
      notifyOpened: () => this.emitNotification('opened'),
      notifyOpening: () => {
        this.open = true;
        this.emitNotification('opening');
      },
      reverseButtons: () => {},
      releaseFocus: () => {
        blockingElements.remove(this);
      },
      trapFocus: el => {
        blockingElements.push(this);

        if (el) {
          el.focus();
        }
      }
    });
  }

  render() {
    const classes = {
      [_material_dialog_constants_js__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].STACKED]: this.stacked
    };
    let heading = lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]``;

    if (this.heading) {
      heading = lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
        <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
    }

    const actionsClasses = {
      'mdc-dialog__actions': !this.hideActions
    };
    return lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
    <div class="mdc-dialog ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__["classMap"])(classes)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${heading}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__["classMap"])(actionsClasses)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcFoundation.setAutoStackButtons(true);
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.open && this.mdcFoundation && !this.mdcFoundation.isOpen()) {
      // We probably got disconnected while we were still open. Re-open,
      // matching the behavior of native <dialog>.
      this.setEventListeners();
      this.mdcFoundation.open();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.open && this.mdcFoundation) {
      // If this dialog is opened and then disconnected, we want to close
      // the foundation, so that 1) any pending timers are cancelled
      // (in particular for trapFocus), and 2) if we reconnect, we can open
      // the foundation again to retrigger animations and focus.
      this.removeEventListeners();
      this.closingDueToDisconnect = true;
      this.mdcFoundation.close(this.currentAction || this.defaultAction);
      this.closingDueToDisconnect = false;
      this.currentAction = undefined; // When we close normally, the releaseFocus callback handles removing
      // ourselves from the blocking elements stack. However, that callback
      // happens on a delay, and when we are closing due to a disconnect we
      // need to remove ourselves before the blocking element polyfill's
      // mutation observer notices and logs a warning, since it's not valid to
      // be in the blocking elements stack while disconnected.

      blockingElements.remove(this);
    }
  }

  forceLayout() {
    this.mdcFoundation.layout();
  }

  focus() {
    const initialFocusEl = this.getInitialFocusEl();
    initialFocusEl && initialFocusEl.focus();
  }

  blur() {
    if (!this.shadowRoot) {
      return;
    }

    const activeEl = this.shadowRoot.activeElement;

    if (activeEl) {
      if (activeEl instanceof HTMLElement) {
        activeEl.blur();
      }
    } else {
      const root = this.getRootNode();
      const activeEl = root instanceof Document ? root.activeElement : null;

      if (activeEl instanceof HTMLElement) {
        activeEl.blur();
      }
    }
  }

  setEventListeners() {
    this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation);

    this.boundLayout = () => {
      if (this.open) {
        this.mdcFoundation.layout.bind(this.mdcFoundation);
      }
    };

    this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation);
    this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
    this.mdcRoot.addEventListener('click', this.boundHandleClick);
    window.addEventListener('resize', this.boundLayout, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    window.addEventListener('orientationchange', this.boundLayout, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    this.mdcRoot.addEventListener('keydown', this.boundHandleKeydown, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    document.addEventListener('keydown', this.boundHandleDocumentKeydown, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
  }

  removeEventListeners() {
    if (this.boundHandleClick) {
      this.mdcRoot.removeEventListener('click', this.boundHandleClick);
    }

    if (this.boundLayout) {
      window.removeEventListener('resize', this.boundLayout);
      window.removeEventListener('orientationchange', this.boundLayout);
    }

    if (this.boundHandleKeydown) {
      this.mdcRoot.removeEventListener('keydown', this.boundHandleKeydown);
    }

    if (this.boundHandleDocumentKeydown) {
      this.mdcRoot.removeEventListener('keydown', this.boundHandleDocumentKeydown);
    }
  }

  close() {
    this.open = false;
  }

  show() {
    this.open = true;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-dialog')], DialogBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('slot[name="primaryAction"]')], DialogBase.prototype, "primarySlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('slot[name="secondaryAction"]')], DialogBase.prototype, "secondarySlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('#contentSlot')], DialogBase.prototype, "contentSlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-dialog__content')], DialogBase.prototype, "contentElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-container')], DialogBase.prototype, "conatinerElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean
})], DialogBase.prototype, "hideActions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function () {
  this.forceLayout();
})], DialogBase.prototype, "stacked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
})], DialogBase.prototype, "heading", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (newAction) {
  this.mdcFoundation.setScrimClickAction(newAction);
})], DialogBase.prototype, "scrimClickAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (newAction) {
  this.mdcFoundation.setEscapeKeyAction(newAction);
})], DialogBase.prototype, "escapeKeyAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean,
  reflect: true
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (isOpen) {
  // Check isConnected because we could have been disconnected before first
  // update. If we're now closed, then we shouldn't start the MDC foundation
  // opening animation. If we're now closed, then we've already closed the
  // foundation in disconnectedCallback.
  if (this.mdcFoundation && this.isConnected) {
    if (isOpen) {
      this.setEventListeners();
      this.mdcFoundation.open();
    } else {
      this.removeEventListeners();
      this.mdcFoundation.close(this.currentAction || this.defaultAction);
      this.currentAction = undefined;
    }
  }
})], DialogBase.prototype, "open", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "defaultAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "actionAttribute", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "initialFocusAttribute", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog-css.js ***!
  \*************************************************************/
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

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:20px 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:scale(1)}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px));border-radius:4px;border-radius:var(--mdc-dialog-shape-radius, 4px)}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog.js ***!
  \*********************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_dialog_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-dialog-base.js */ "./node_modules/@material/mwc-dialog/mwc-dialog-base.js");
/* harmony import */ var _mwc_dialog_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-dialog-css.js */ "./node_modules/@material/mwc-dialog/mwc-dialog-css.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

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




let Dialog = class Dialog extends _mwc_dialog_base_js__WEBPACK_IMPORTED_MODULE_2__["DialogBase"] {};
Dialog.styles = _mwc_dialog_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Dialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-dialog')], Dialog);


/***/ }),

/***/ "./node_modules/blocking-elements/dist/blocking-elements.js":
/*!******************************************************************!*\
  !*** ./node_modules/blocking-elements/dist/blocking-elements.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  var _a, _b, _c;
  /* Symbols for private properties */


  const _blockingElements = Symbol();

  const _alreadyInertElements = Symbol();

  const _topElParents = Symbol();

  const _siblingsToRestore = Symbol();

  const _parentMO = Symbol();
  /* Symbols for private static methods */


  const _topChanged = Symbol();

  const _swapInertedSibling = Symbol();

  const _inertSiblings = Symbol();

  const _restoreInertedSiblings = Symbol();

  const _getParents = Symbol();

  const _getDistributedChildren = Symbol();

  const _isInertable = Symbol();

  const _handleMutations = Symbol();

  class BlockingElementsImpl {
    constructor() {
      /**
       * The blocking elements.
       */
      this[_a] = [];
      /**
       * Used to keep track of the parents of the top element, from the element
       * itself up to body. When top changes, the old top might have been removed
       * from the document, so we need to memoize the inerted parents' siblings
       * in order to restore their inerteness when top changes.
       */

      this[_b] = [];
      /**
       * Elements that are already inert before the first blocking element is
       * pushed.
       */

      this[_c] = new Set();
    }

    destructor() {
      // Restore original inertness.
      this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
      // since then we'd need non-null casts in many places. Calling a method on
      // a BlockingElements instance after calling destructor will result in an
      // exception.


      const nullable = this;
      nullable[_blockingElements] = null;
      nullable[_topElParents] = null;
      nullable[_alreadyInertElements] = null;
    }

    get top() {
      const elems = this[_blockingElements];
      return elems[elems.length - 1] || null;
    }

    push(element) {
      if (!element || element === this.top) {
        return;
      } // Remove it from the stack, we'll bring it to the top.


      this.remove(element);

      this[_topChanged](element);

      this[_blockingElements].push(element);
    }

    remove(element) {
      const i = this[_blockingElements].indexOf(element);

      if (i === -1) {
        return false;
      }

      this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


      if (i === this[_blockingElements].length) {
        this[_topChanged](this.top);
      }

      return true;
    }

    pop() {
      const top = this.top;
      top && this.remove(top);
      return top;
    }

    has(element) {
      return this[_blockingElements].indexOf(element) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */


    [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
      const toKeepInert = this[_alreadyInertElements];
      const oldParents = this[_topElParents]; // No new top, reset old top if any.

      if (!newTop) {
        this[_restoreInertedSiblings](oldParents);

        toKeepInert.clear();
        this[_topElParents] = [];
        return;
      }

      const newParents = this[_getParents](newTop); // New top is not contained in the main document!


      if (newParents[newParents.length - 1].parentNode !== document.body) {
        throw Error('Non-connected element cannot be a blocking element');
      } // Cast here because we know we'll call _inertSiblings on newParents
      // below.


      this[_topElParents] = newParents;

      const toSkip = this[_getDistributedChildren](newTop); // No previous top element.


      if (!oldParents.length) {
        this[_inertSiblings](newParents, toSkip, toKeepInert);

        return;
      }

      let i = oldParents.length - 1;
      let j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

      while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
        i--;
        j--;
      } // If up the parents tree there are 2 elements that are siblings, swap
      // the inerted sibling.


      if (oldParents[i] !== newParents[j]) {
        this[_swapInertedSibling](oldParents[i], newParents[j]);
      } // Restore old parents siblings inertness.


      i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

      j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_swapInertedSibling](oldInert, newInert) {
      const siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
      // if it's inertable and if already inert.

      if (this[_isInertable](oldInert) && !oldInert.inert) {
        oldInert.inert = true;
        siblingsToRestore.add(oldInert);
      } // If newInert was already between the siblings to restore, it means it is
      // inertable and must be restored.


      if (siblingsToRestore.has(newInert)) {
        newInert.inert = false;
        siblingsToRestore.delete(newInert);
      }

      newInert[_parentMO] = oldInert[_parentMO];
      newInert[_siblingsToRestore] = siblingsToRestore;
      oldInert[_parentMO] = undefined;
      oldInert[_siblingsToRestore] = undefined;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_restoreInertedSiblings](elements) {
      for (const element of elements) {
        const mo = element[_parentMO];
        mo.disconnect();
        element[_parentMO] = undefined;
        const siblings = element[_siblingsToRestore];

        for (const sibling of siblings) {
          sibling.inert = false;
        }

        element[_siblingsToRestore] = undefined;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_inertSiblings](elements, toSkip, toKeepInert) {
      for (const element of elements) {
        // Assume element is not a Document, so it must have a parentNode.
        const parent = element.parentNode;
        const children = parent.children;
        const inertedSiblings = new Set();

        for (let j = 0; j < children.length; j++) {
          const sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

          if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
            continue;
          } // Should be collected since already inerted.


          if (toKeepInert && sibling.inert) {
            toKeepInert.add(sibling);
          } else {
            sibling.inert = true;
            inertedSiblings.add(sibling);
          }
        } // Store the siblings that were inerted.


        element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

        const mo = new MutationObserver(this[_handleMutations].bind(this));
        element[_parentMO] = mo;
        let parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
        // shady root, which is an object that acts like a ShadowRoot, but isn't
        // actually a node in the real DOM. Observe the real DOM parent instead.

        const maybeShadyRoot = parentToObserve;

        if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
          parentToObserve = maybeShadyRoot.host;
        }

        mo.observe(parentToObserve, {
          childList: true
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */


    [_handleMutations](mutations) {
      const parents = this[_topElParents];
      const toKeepInert = this[_alreadyInertElements];

      for (const mutation of mutations) {
        // If the target is a shadowRoot, get its host as we skip shadowRoots when
        // computing _topElParents.
        const target = mutation.target.host || mutation.target;
        const idx = target === document.body ? parents.length : parents.indexOf(target);
        const inertedChild = parents[idx - 1];
        const inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

        for (let i = 0; i < mutation.removedNodes.length; i++) {
          const sibling = mutation.removedNodes[i];

          if (sibling === inertedChild) {
            console.info('Detected removal of the top Blocking Element.');
            this.pop();
            return;
          }

          if (inertedSiblings.has(sibling)) {
            sibling.inert = false;
            inertedSiblings.delete(sibling);
          }
        } // To inert.


        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const sibling = mutation.addedNodes[i];

          if (!this[_isInertable](sibling)) {
            continue;
          }

          if (toKeepInert && sibling.inert) {
            toKeepInert.add(sibling);
          } else {
            sibling.inert = true;
            inertedSiblings.add(sibling);
          }
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */


    [_isInertable](element) {
      return false === /^(style|template|script)$/.test(element.localName);
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */


    [_getParents](element) {
      const parents = [];
      let current = element; // Stop to body.

      while (current && current !== document.body) {
        // Skip shadow roots.
        if (current.nodeType === Node.ELEMENT_NODE) {
          parents.push(current);
        } // ShadowDom v1


        if (current.assignedSlot) {
          // Collect slots from deepest slot to top.
          while (current = current.assignedSlot) {
            parents.push(current);
          } // Continue the search on the top slot.


          current = parents.pop();
          continue;
        }

        current = current.parentNode || current.host;
      }

      return parents;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */


    [_getDistributedChildren](element) {
      const shadowRoot = element.shadowRoot;

      if (!shadowRoot) {
        return null;
      }

      const result = new Set();
      let i;
      let j;
      let nodes;
      const slots = shadowRoot.querySelectorAll('slot');

      if (slots.length && slots[0].assignedNodes) {
        for (i = 0; i < slots.length; i++) {
          nodes = slots[i].assignedNodes({
            flatten: true
          });

          for (j = 0; j < nodes.length; j++) {
            if (nodes[j].nodeType === Node.ELEMENT_NODE) {
              result.add(nodes[j]);
            }
          }
        } // No need to search for <content>.

      }

      return result;
    }

  }

  document.$blockingElements = new BlockingElementsImpl();
})();

/***/ }),

/***/ "./node_modules/wicg-inert/src/inert.js":
/*!**********************************************!*\
  !*** ./node_modules/wicg-inert/src/inert.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */
// Convenience function for converting NodeLists.

/** @type {typeof Array.prototype.slice} */
const slice = Array.prototype.slice;
/**
 * IE has a non-standard name for "matches".
 * @type {typeof Element.prototype.matches}
 */

const matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
/** @type {string} */

const _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
/**
 * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
 * attribute.
 *
 * Its main functions are:
 *
 * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
 *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
 *   each focusable node in the subtree with the singleton `InertManager` which manages all known
 *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
 *   instance exists for each focusable node which has at least one inert root as an ancestor.
 *
 * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
 *   attribute is removed from the root node). This is handled in the destructor, which calls the
 *   `deregister` method on `InertManager` for each managed inert node.
 */


class InertRoot {
  /**
   * @param {!Element} rootElement The Element at the root of the inert subtree.
   * @param {!InertManager} inertManager The global singleton InertManager object.
   */
  constructor(rootElement, inertManager) {
    /** @type {!InertManager} */
    this._inertManager = inertManager;
    /** @type {!Element} */

    this._rootElement = rootElement;
    /**
     * @type {!Set<!InertNode>}
     * All managed focusable nodes in this InertRoot's subtree.
     */

    this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

    if (this._rootElement.hasAttribute('aria-hidden')) {
      /** @type {?string} */
      this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
    } else {
      this._savedAriaHidden = null;
    }

    this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


    this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
    // - any additions in the subtree: make them unfocusable too
    // - any removals from the subtree: remove them from this inert root's managed nodes
    // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
    //   element, make that node a managed node.


    this._observer = new MutationObserver(this._onMutation.bind(this));

    this._observer.observe(this._rootElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  /**
   * Call this whenever this object is about to become obsolete.  This unwinds all of the state
   * stored in this object and updates the state of all of the managed nodes.
   */


  destructor() {
    this._observer.disconnect();

    if (this._rootElement) {
      if (this._savedAriaHidden !== null) {
        this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
      } else {
        this._rootElement.removeAttribute('aria-hidden');
      }
    }

    this._managedNodes.forEach(function (inertNode) {
      this._unmanageNode(inertNode.node);
    }, this); // Note we cast the nulls to the ANY type here because:
    // 1) We want the class properties to be declared as non-null, or else we
    //    need even more casts throughout this code. All bets are off if an
    //    instance has been destroyed and a method is called.
    // 2) We don't want to cast "this", because we want type-aware optimizations
    //    to know which properties we're setting.


    this._observer =
    /** @type {?} */
    null;
    this._rootElement =
    /** @type {?} */
    null;
    this._managedNodes =
    /** @type {?} */
    null;
    this._inertManager =
    /** @type {?} */
    null;
  }
  /**
   * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
   */


  get managedNodes() {
    return new Set(this._managedNodes);
  }
  /** @return {boolean} */


  get hasSavedAriaHidden() {
    return this._savedAriaHidden !== null;
  }
  /** @param {?string} ariaHidden */


  set savedAriaHidden(ariaHidden) {
    this._savedAriaHidden = ariaHidden;
  }
  /** @return {?string} */


  get savedAriaHidden() {
    return this._savedAriaHidden;
  }
  /**
   * @param {!Node} startNode
   */


  _makeSubtreeUnfocusable(startNode) {
    composedTreeWalk(startNode, node => this._visitNode(node));
    let activeElement = document.activeElement;

    if (!document.body.contains(startNode)) {
      // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
      let node = startNode;
      /** @type {!ShadowRoot|undefined} */

      let root = undefined;

      while (node) {
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          root =
          /** @type {!ShadowRoot} */
          node;
          break;
        }

        node = node.parentNode;
      }

      if (root) {
        activeElement = root.activeElement;
      }
    }

    if (startNode.contains(activeElement)) {
      activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
      // calling blur() will not actually move the focus.
      // To work around this we call focus() on the body instead.

      if (activeElement === document.activeElement) {
        document.body.focus();
      }
    }
  }
  /**
   * @param {!Node} node
   */


  _visitNode(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element =
    /** @type {!Element} */
    node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
    // this inert root, so all of its managed nodes need to be adopted by this InertRoot.

    if (element !== this._rootElement && element.hasAttribute('inert')) {
      this._adoptInertRoot(element);
    }

    if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
      this._manageNode(element);
    }
  }
  /**
   * Register the given node with this InertRoot and with InertManager.
   * @param {!Node} node
   */


  _manageNode(node) {
    const inertNode = this._inertManager.register(node, this);

    this._managedNodes.add(inertNode);
  }
  /**
   * Unregister the given node with this InertRoot and with InertManager.
   * @param {!Node} node
   */


  _unmanageNode(node) {
    const inertNode = this._inertManager.deregister(node, this);

    if (inertNode) {
      this._managedNodes.delete(inertNode);
    }
  }
  /**
   * Unregister the entire subtree starting at `startNode`.
   * @param {!Node} startNode
   */


  _unmanageSubtree(startNode) {
    composedTreeWalk(startNode, node => this._unmanageNode(node));
  }
  /**
   * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
   * @param {!Element} node
   */


  _adoptInertRoot(node) {
    let inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
    // so register it now if need be.


    if (!inertSubroot) {
      this._inertManager.setInert(node, true);

      inertSubroot = this._inertManager.getInertRoot(node);
    }

    inertSubroot.managedNodes.forEach(function (savedInertNode) {
      this._manageNode(savedInertNode.node);
    }, this);
  }
  /**
   * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
   * @param {!Array<!MutationRecord>} records
   * @param {!MutationObserver} self
   */


  _onMutation(records, self) {
    records.forEach(function (record) {
      const target =
      /** @type {!Element} */
      record.target;

      if (record.type === 'childList') {
        // Manage added nodes
        slice.call(record.addedNodes).forEach(function (node) {
          this._makeSubtreeUnfocusable(node);
        }, this); // Un-manage removed nodes

        slice.call(record.removedNodes).forEach(function (node) {
          this._unmanageSubtree(node);
        }, this);
      } else if (record.type === 'attributes') {
        if (record.attributeName === 'tabindex') {
          // Re-initialise inert node if tabindex changes
          this._manageNode(target);
        } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
          // If a new inert root is added, adopt its managed nodes and make sure it knows about the
          // already managed nodes from this inert subroot.
          this._adoptInertRoot(target);

          const inertSubroot = this._inertManager.getInertRoot(target);

          this._managedNodes.forEach(function (managedNode) {
            if (target.contains(managedNode.node)) {
              inertSubroot._manageNode(managedNode.node);
            }
          });
        }
      }
    }, this);
  }

}
/**
 * `InertNode` initialises and manages a single inert node.
 * A node is inert if it is a descendant of one or more inert root elements.
 *
 * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
 * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
 * is intrinsically focusable or not.
 *
 * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
 * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
 * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
 * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
 * or removes the `tabindex` attribute if the element is intrinsically focusable.
 */


class InertNode {
  /**
   * @param {!Node} node A focusable element to be made inert.
   * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
   */
  constructor(node, inertRoot) {
    /** @type {!Node} */
    this._node = node;
    /** @type {boolean} */

    this._overrodeFocusMethod = false;
    /**
     * @type {!Set<!InertRoot>} The set of descendant inert roots.
     *    If and only if this set becomes empty, this node is no longer inert.
     */

    this._inertRoots = new Set([inertRoot]);
    /** @type {?number} */

    this._savedTabIndex = null;
    /** @type {boolean} */

    this._destroyed = false; // Save any prior tabindex info and make this node untabbable

    this.ensureUntabbable();
  }
  /**
   * Call this whenever this object is about to become obsolete.
   * This makes the managed node focusable again and deletes all of the previously stored state.
   */


  destructor() {
    this._throwIfDestroyed();

    if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
      const element =
      /** @type {!Element} */
      this._node;

      if (this._savedTabIndex !== null) {
        element.setAttribute('tabindex', this._savedTabIndex);
      } else {
        element.removeAttribute('tabindex');
      } // Use `delete` to restore native focus method.


      if (this._overrodeFocusMethod) {
        delete element.focus;
      }
    } // See note in InertRoot.destructor for why we cast these nulls to ANY.


    this._node =
    /** @type {?} */
    null;
    this._inertRoots =
    /** @type {?} */
    null;
    this._destroyed = true;
  }
  /**
   * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
   * If the object has been destroyed, any attempt to access it will cause an exception.
   */


  get destroyed() {
    return (
      /** @type {!InertNode} */
      this._destroyed
    );
  }
  /**
   * Throw if user tries to access destroyed InertNode.
   */


  _throwIfDestroyed() {
    if (this.destroyed) {
      throw new Error('Trying to access destroyed InertNode');
    }
  }
  /** @return {boolean} */


  get hasSavedTabIndex() {
    return this._savedTabIndex !== null;
  }
  /** @return {!Node} */


  get node() {
    this._throwIfDestroyed();

    return this._node;
  }
  /** @param {?number} tabIndex */


  set savedTabIndex(tabIndex) {
    this._throwIfDestroyed();

    this._savedTabIndex = tabIndex;
  }
  /** @return {?number} */


  get savedTabIndex() {
    this._throwIfDestroyed();

    return this._savedTabIndex;
  }
  /** Save the existing tabindex value and make the node untabbable and unfocusable */


  ensureUntabbable() {
    if (this.node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element =
    /** @type {!Element} */
    this.node;

    if (matches.call(element, _focusableElementsString)) {
      if (
      /** @type {!HTMLElement} */
      element.tabIndex === -1 && this.hasSavedTabIndex) {
        return;
      }

      if (element.hasAttribute('tabindex')) {
        this._savedTabIndex =
        /** @type {!HTMLElement} */
        element.tabIndex;
      }

      element.setAttribute('tabindex', '-1');

      if (element.nodeType === Node.ELEMENT_NODE) {
        element.focus = function () {};

        this._overrodeFocusMethod = true;
      }
    } else if (element.hasAttribute('tabindex')) {
      this._savedTabIndex =
      /** @type {!HTMLElement} */
      element.tabIndex;
      element.removeAttribute('tabindex');
    }
  }
  /**
   * Add another inert root to this inert node's set of managing inert roots.
   * @param {!InertRoot} inertRoot
   */


  addInertRoot(inertRoot) {
    this._throwIfDestroyed();

    this._inertRoots.add(inertRoot);
  }
  /**
   * Remove the given inert root from this inert node's set of managing inert roots.
   * If the set of managing inert roots becomes empty, this node is no longer inert,
   * so the object should be destroyed.
   * @param {!InertRoot} inertRoot
   */


  removeInertRoot(inertRoot) {
    this._throwIfDestroyed();

    this._inertRoots.delete(inertRoot);

    if (this._inertRoots.size === 0) {
      this.destructor();
    }
  }

}
/**
 * InertManager is a per-document singleton object which manages all inert roots and nodes.
 *
 * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
 * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
 * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
 * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
 * is created for each such node, via the `_managedNodes` map.
 */


class InertManager {
  /**
   * @param {!Document} document
   */
  constructor(document) {
    if (!document) {
      throw new Error('Missing required argument; InertManager needs to wrap a document.');
    }
    /** @type {!Document} */


    this._document = document;
    /**
     * All managed nodes known to this InertManager. In a map to allow looking up by Node.
     * @type {!Map<!Node, !InertNode>}
     */

    this._managedNodes = new Map();
    /**
     * All inert roots known to this InertManager. In a map to allow looking up by Node.
     * @type {!Map<!Node, !InertRoot>}
     */

    this._inertRoots = new Map();
    /**
     * Observer for mutations on `document.body`.
     * @type {!MutationObserver}
     */

    this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

    addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
    } else {
      this._onDocumentLoaded();
    }
  }
  /**
   * Set whether the given element should be an inert root or not.
   * @param {!Element} root
   * @param {boolean} inert
   */


  setInert(root, inert) {
    if (inert) {
      if (this._inertRoots.has(root)) {
        // element is already inert
        return;
      }

      const inertRoot = new InertRoot(root, this);
      root.setAttribute('inert', '');

      this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
      // Ensure inert styles are added there.


      if (!this._document.body.contains(root)) {
        let parent = root.parentNode;

        while (parent) {
          if (parent.nodeType === 11) {
            addInertStyle(parent);
          }

          parent = parent.parentNode;
        }
      }
    } else {
      if (!this._inertRoots.has(root)) {
        // element is already non-inert
        return;
      }

      const inertRoot = this._inertRoots.get(root);

      inertRoot.destructor();

      this._inertRoots.delete(root);

      root.removeAttribute('inert');
    }
  }
  /**
   * Get the InertRoot object corresponding to the given inert root element, if any.
   * @param {!Node} element
   * @return {!InertRoot|undefined}
   */


  getInertRoot(element) {
    return this._inertRoots.get(element);
  }
  /**
   * Register the given InertRoot as managing the given node.
   * In the case where the node has a previously existing inert root, this inert root will
   * be added to its set of inert roots.
   * @param {!Node} node
   * @param {!InertRoot} inertRoot
   * @return {!InertNode} inertNode
   */


  register(node, inertRoot) {
    let inertNode = this._managedNodes.get(node);

    if (inertNode !== undefined) {
      // node was already in an inert subtree
      inertNode.addInertRoot(inertRoot);
    } else {
      inertNode = new InertNode(node, inertRoot);
    }

    this._managedNodes.set(node, inertNode);

    return inertNode;
  }
  /**
   * De-register the given InertRoot as managing the given inert node.
   * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
   * node from the InertManager's set of managed nodes if it is destroyed.
   * If the node is not currently managed, this is essentially a no-op.
   * @param {!Node} node
   * @param {!InertRoot} inertRoot
   * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
   */


  deregister(node, inertRoot) {
    const inertNode = this._managedNodes.get(node);

    if (!inertNode) {
      return null;
    }

    inertNode.removeInertRoot(inertRoot);

    if (inertNode.destroyed) {
      this._managedNodes.delete(node);
    }

    return inertNode;
  }
  /**
   * Callback used when document has finished loading.
   */


  _onDocumentLoaded() {
    // Find all inert roots in document and make them actually inert.
    const inertElements = slice.call(this._document.querySelectorAll('[inert]'));
    inertElements.forEach(function (inertElement) {
      this.setInert(inertElement, true);
    }, this); // Comment this out to use programmatic API only.

    this._observer.observe(this._document.body, {
      attributes: true,
      subtree: true,
      childList: true
    });
  }
  /**
   * Callback used when mutation observer detects attribute changes.
   * @param {!Array<!MutationRecord>} records
   * @param {!MutationObserver} self
   */


  _watchForInert(records, self) {
    const _this = this;

    records.forEach(function (record) {
      switch (record.type) {
        case 'childList':
          slice.call(record.addedNodes).forEach(function (node) {
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }

            const inertElements = slice.call(node.querySelectorAll('[inert]'));

            if (matches.call(node, '[inert]')) {
              inertElements.unshift(node);
            }

            inertElements.forEach(function (inertElement) {
              this.setInert(inertElement, true);
            }, _this);
          }, _this);
          break;

        case 'attributes':
          if (record.attributeName !== 'inert') {
            return;
          }

          const target =
          /** @type {!Element} */
          record.target;
          const inert = target.hasAttribute('inert');

          _this.setInert(target, inert);

          break;
      }
    }, this);
  }

}
/**
 * Recursively walk the composed tree from |node|.
 * @param {!Node} node
 * @param {(function (!Element))=} callback Callback to be called for each element traversed,
 *     before descending into child nodes.
 * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
 */


function composedTreeWalk(node, callback, shadowRootAncestor) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    const element =
    /** @type {!Element} */
    node;

    if (callback) {
      callback(element);
    } // Descend into node:
    // If it has a ShadowRoot, ignore all child elements - these will be picked
    // up by the <content> or <shadow> elements. Descend straight into the
    // ShadowRoot.


    const shadowRoot =
    /** @type {!HTMLElement} */
    element.shadowRoot;

    if (shadowRoot) {
      composedTreeWalk(shadowRoot, callback, shadowRoot);
      return;
    } // If it is a <content> element, descend into distributed elements - these
    // are elements from outside the shadow root which are rendered inside the
    // shadow DOM.


    if (element.localName == 'content') {
      const content =
      /** @type {!HTMLContentElement} */
      element; // Verifies if ShadowDom v0 is supported.

      const distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

      for (let i = 0; i < distributedNodes.length; i++) {
        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
      }

      return;
    } // If it is a <slot> element, descend into assigned nodes - these
    // are elements from outside the shadow root which are rendered inside the
    // shadow DOM.


    if (element.localName == 'slot') {
      const slot =
      /** @type {!HTMLSlotElement} */
      element; // Verify if ShadowDom v1 is supported.

      const distributedNodes = slot.assignedNodes ? slot.assignedNodes({
        flatten: true
      }) : [];

      for (let i = 0; i < distributedNodes.length; i++) {
        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
      }

      return;
    }
  } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
  // element, nor a <shadow> element recurse normally.


  let child = node.firstChild;

  while (child != null) {
    composedTreeWalk(child, callback, shadowRootAncestor);
    child = child.nextSibling;
  }
}
/**
 * Adds a style element to the node containing the inert specific styles
 * @param {!Node} node
 */


function addInertStyle(node) {
  if (node.querySelector('style#inert-style')) {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('id', 'inert-style');
  style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  user-select: none;\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '}\n';
  node.appendChild(style);
}
/** @type {!InertManager} */


const inertManager = new InertManager(document);

if (!Element.prototype.hasOwnProperty('inert')) {
  Object.defineProperty(Element.prototype, 'inert', {
    enumerable: true,

    /** @this {!Element} */
    get: function () {
      return this.hasAttribute('inert');
    },

    /** @this {!Element} */
    set: function (inert) {
      inertManager.setInert(this, inert);
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kZXZpY2UtYXV0b21hdGlvbi1kaWFsb2d+cGVyc29uLWRldGFpbC1kaWFsb2d+em9uZS1kZXRhaWwtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vZm91bmRhdGlvbi50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1kaWFsb2ctYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1kaWFsb2ctY3NzLnRzIiwid2VicGFjazovLy9zcmMvbXdjLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jsb2NraW5nLWVsZW1lbnRzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L3NyYy9pbmVydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TSU5HOiAnbWRjLWRpYWxvZy0tY2xvc2luZycsXG4gICAgT1BFTjogJ21kYy1kaWFsb2ctLW9wZW4nLFxuICAgIE9QRU5JTkc6ICdtZGMtZGlhbG9nLS1vcGVuaW5nJyxcbiAgICBTQ1JPTExBQkxFOiAnbWRjLWRpYWxvZy0tc2Nyb2xsYWJsZScsXG4gICAgU0NST0xMX0xPQ0s6ICdtZGMtZGlhbG9nLXNjcm9sbC1sb2NrJyxcbiAgICBTVEFDS0VEOiAnbWRjLWRpYWxvZy0tc3RhY2tlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFDVElPTl9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJyxcbiAgICBCVVRUT05fREVGQVVMVF9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYnV0dG9uLWRlZmF1bHQnLFxuICAgIEJVVFRPTl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19idXR0b24nLFxuICAgIENMT1NFRF9FVkVOVDogJ01EQ0RpYWxvZzpjbG9zZWQnLFxuICAgIENMT1NFX0FDVElPTjogJ2Nsb3NlJyxcbiAgICBDTE9TSU5HX0VWRU5UOiAnTURDRGlhbG9nOmNsb3NpbmcnLFxuICAgIENPTlRBSU5FUl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19jb250YWluZXInLFxuICAgIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGVudCcsXG4gICAgREVTVFJPWV9BQ1RJT046ICdkZXN0cm95JyxcbiAgICBJTklUSUFMX0ZPQ1VTX0FUVFJJQlVURTogJ2RhdGEtbWRjLWRpYWxvZy1pbml0aWFsLWZvY3VzJyxcbiAgICBPUEVORURfRVZFTlQ6ICdNRENEaWFsb2c6b3BlbmVkJyxcbiAgICBPUEVOSU5HX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5pbmcnLFxuICAgIFNDUklNX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3NjcmltJyxcbiAgICBTVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SOiBbXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICcubWRjLW1lbnUgLm1kYy1saXN0LWl0ZW0nLFxuICAgIF0uam9pbignLCAnKSxcbiAgICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3N1cmZhY2UnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxuICAgIERJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TOiAxNTAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDRGlhbG9nRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENEaWFsb2dGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0RpYWxvZ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENEaWFsb2dGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG4gICAgICAgIF90aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG4gICAgICAgIF90aGlzLmF1dG9TdGFja0J1dHRvbnNfID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYXJlQnV0dG9uc1N0YWNrZWRfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRGlhbG9nRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQm9keUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhcmVCdXR0b25zU3RhY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGdldEluaXRpYWxGb2N1c0VsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUJvZHlDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB0cmFwRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b1N0YWNrQnV0dG9ucyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbl8pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2Uoc3RyaW5ncy5ERVNUUk9ZX0FDVElPTik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0KCk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy50cmFwRm9jdXMoX3RoaXMuYWRhcHRlcl8uZ2V0SW5pdGlhbEZvY3VzRWwoKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmVkKCk7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkRJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gdm9pZCAwKSB7IGFjdGlvbiA9ICcnOyB9XG4gICAgICAgIGlmICghdGhpcy5pc09wZW5fKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCByZWR1bmRhbnQgY2xvc2UgY2FsbHMgKGFuZCBldmVudHMpLCBlLmcuIGZyb20ga2V5ZG93biBvbiBlbGVtZW50cyB0aGF0IGluaGVyZW50bHkgZW1pdCBjbGlja1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NpbmcoYWN0aW9uKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbGVhc2VGb2N1cygpO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZWQoYWN0aW9uKTtcbiAgICAgICAgfSwgbnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVMpO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5fO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RXNjYXBlS2V5QWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lc2NhcGVLZXlBY3Rpb25fO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RXNjYXBlS2V5QWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmVzY2FwZUtleUFjdGlvbl8gPSBhY3Rpb247XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTY3JpbUNsaWNrQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JpbUNsaWNrQWN0aW9uXztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNjcmltQ2xpY2tBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gPSBhY3Rpb247XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBdXRvU3RhY2tCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvU3RhY2tCdXR0b25zXztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldEF1dG9TdGFja0J1dHRvbnMgPSBmdW5jdGlvbiAoYXV0b1N0YWNrKSB7XG4gICAgICAgIHRoaXMuYXV0b1N0YWNrQnV0dG9uc18gPSBhdXRvU3RhY2s7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSGFuZGxlcyBjbGljayBvbiB0aGUgZGlhbG9nIHJvb3QgZWxlbWVudC4gKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzU2NyaW0gPSB0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0TWF0Y2hlcyhldnQudGFyZ2V0LCBzdHJpbmdzLlNDUklNX1NFTEVDVE9SKTtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNjcmltIGNsaWNrIGZpcnN0IHNpbmNlIGl0IGRvZXNuJ3QgcmVxdWlyZSBxdWVyeWluZyBhbmNlc3RvcnMuXG4gICAgICAgIGlmIChpc1NjcmltICYmIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRoaXMuc2NyaW1DbGlja0FjdGlvbl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWRhcHRlcl8uZ2V0QWN0aW9uRnJvbUV2ZW50KGV2dCk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZShhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlcyBrZXlkb3duIG9uIHRoZSBkaWFsb2cgcm9vdCBlbGVtZW50LiAqL1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIGlmICghaXNFbnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGlvbkZyb21FdmVudChldnQpO1xuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBBY3Rpb24gYnV0dG9uIGNhbGxiYWNrIGlzIGhhbmRsZWQgaW4gYGhhbmRsZUNsaWNrYCxcbiAgICAgICAgICAgIC8vIHNpbmNlIHNwYWNlL2VudGVyIGtleWRvd25zIG9uIGJ1dHRvbnMgdHJpZ2dlciBjbGljayBldmVudHMuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzRGVmYXVsdCA9ICF0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0TWF0Y2hlcyhldnQudGFyZ2V0LCBzdHJpbmdzLlNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1IpO1xuICAgICAgICBpZiAoaXNFbnRlciAmJiBpc0RlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uY2xpY2tEZWZhdWx0QnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBIYW5kbGVzIGtleWRvd24gb24gdGhlIGRvY3VtZW50LiAqL1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZURvY3VtZW50S2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzRXNjYXBlID0gZXZ0LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZ0LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBpZiAoaXNFc2NhcGUgJiYgdGhpcy5lc2NhcGVLZXlBY3Rpb25fICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSh0aGlzLmVzY2FwZUtleUFjdGlvbl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TdGFja0J1dHRvbnNfKSB7XG4gICAgICAgICAgICB0aGlzLmRldGVjdFN0YWNrZWRCdXR0b25zXygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfKCk7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgICAqL1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bk5leHRBbmltYXRpb25GcmFtZV8gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXRlY3RTdGFja2VkQnV0dG9uc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgZmlyc3QgdG8gbGV0IHVzIG1lYXN1cmUgdGhlIGJ1dHRvbnMnIG5hdHVyYWwgcG9zaXRpb25zLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCk7XG4gICAgICAgIHZhciBhcmVCdXR0b25zU3RhY2tlZCA9IHRoaXMuYWRhcHRlcl8uYXJlQnV0dG9uc1N0YWNrZWQoKTtcbiAgICAgICAgaWYgKGFyZUJ1dHRvbnNTdGFja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZUJ1dHRvbnNTdGFja2VkICE9PSB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXZlcnNlQnV0dG9ucygpO1xuICAgICAgICAgICAgdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8gPSBhcmVCdXR0b25zU3RhY2tlZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBuYXR1cmFsIGhlaWdodCBvZiB0aGUgY29udGVudC5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTEFCTEUpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0NvbnRlbnRTY3JvbGxhYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0RpYWxvZ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENEaWFsb2dGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgJ2Jsb2NraW5nLWVsZW1lbnRzJztcbmltcG9ydCAnd2ljZy1pbmVydCc7XG5cbmltcG9ydCB7TURDRGlhbG9nQWRhcHRlcn0gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy9hZGFwdGVyLmpzJztcbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy9jb25zdGFudHMuanMnO1xuaW1wb3J0IE1EQ0RpYWxvZ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy9mb3VuZGF0aW9uLmpzJztcbmltcG9ydCB7YXBwbHlQYXNzaXZlfSBmcm9tICdAbWF0ZXJpYWwvZG9tL2V2ZW50cyc7XG5pbXBvcnQge2Nsb3Nlc3QsIG1hdGNoZXN9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHthZGRIYXNSZW1vdmVDbGFzcywgQmFzZUVsZW1lbnQsIG9ic2VydmVyfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCB7RG9jdW1lbnRXaXRoQmxvY2tpbmdFbGVtZW50c30gZnJvbSAnYmxvY2tpbmctZWxlbWVudHMnO1xuaW1wb3J0IHtodG1sLCBwcm9wZXJ0eSwgcXVlcnl9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IHtNRENEaWFsb2dDbG9zZUV2ZW50RGV0YWlsfSBmcm9tICdAbWF0ZXJpYWwvZGlhbG9nL3R5cGVzJztcblxuY29uc3QgYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgKGRvY3VtZW50IGFzIERvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHMpLiRibG9ja2luZ0VsZW1lbnRzO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQmFzZSBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgQHF1ZXJ5KCcubWRjLWRpYWxvZycpIHByb3RlY3RlZCBtZGNSb290ITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgLy8gX2FjdGlvbkl0ZW1zU2xvdCBzaG91bGQgaGF2ZSB0eXBlIEhUTUxTbG90RWxlbWVudCwgYnV0IHdoZW4gVHlwZVNjcmlwdCdzXG4gIC8vIGVtaXREZWNvcmF0b3JNZXRhZGF0YSBpcyBlbmFibGVkLCB0aGUgSFRNTFNsb3RFbGVtZW50IGNvbnN0cnVjdG9yIHdpbGxcbiAgLy8gYmUgZW1pdHRlZCBpbnRvIHRoZSBydW50aW1lLCB3aGljaCB3aWxsIGNhdXNlIGFuIFwiSFRNTFNsb3RFbGVtZW50IGlzXG4gIC8vIHVuZGVmaW5lZFwiIGVycm9yIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgZGVmaW5lIGl0IChlLmcuIEVkZ2UgYW5kIElFMTEpLlxuICBAcXVlcnkoJ3Nsb3RbbmFtZT1cInByaW1hcnlBY3Rpb25cIl0nKSBwcm90ZWN0ZWQgcHJpbWFyeVNsb3QhOiBIVE1MRWxlbWVudDtcblxuICAvLyBfYWN0aW9uSXRlbXNTbG90IHNob3VsZCBoYXZlIHR5cGUgSFRNTFNsb3RFbGVtZW50LCBidXQgd2hlbiBUeXBlU2NyaXB0J3NcbiAgLy8gZW1pdERlY29yYXRvck1ldGFkYXRhIGlzIGVuYWJsZWQsIHRoZSBIVE1MU2xvdEVsZW1lbnQgY29uc3RydWN0b3Igd2lsbFxuICAvLyBiZSBlbWl0dGVkIGludG8gdGhlIHJ1bnRpbWUsIHdoaWNoIHdpbGwgY2F1c2UgYW4gXCJIVE1MU2xvdEVsZW1lbnQgaXNcbiAgLy8gdW5kZWZpbmVkXCIgZXJyb3IgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBkZWZpbmUgaXQgKGUuZy4gRWRnZSBhbmQgSUUxMSkuXG4gIEBxdWVyeSgnc2xvdFtuYW1lPVwic2Vjb25kYXJ5QWN0aW9uXCJdJykgcHJvdGVjdGVkIHNlY29uZGFyeVNsb3QhOiBIVE1MRWxlbWVudDtcblxuICBAcXVlcnkoJyNjb250ZW50U2xvdCcpIHByb3RlY3RlZCBjb250ZW50U2xvdCE6IEhUTUxFbGVtZW50O1xuXG4gIEBxdWVyeSgnLm1kYy1kaWFsb2dfX2NvbnRlbnQnKSBwcm90ZWN0ZWQgY29udGVudEVsZW1lbnQhOiBIVE1MRGl2RWxlbWVudDtcblxuICBAcXVlcnkoJy5tZGMtY29udGFpbmVyJykgcHJvdGVjdGVkIGNvbmF0aW5lckVsZW1lbnQhOiBIVE1MRGl2RWxlbWVudDtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBoaWRlQWN0aW9ucyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pXG4gIEBvYnNlcnZlcihmdW5jdGlvbih0aGlzOiBEaWFsb2dCYXNlKSB7XG4gICAgdGhpcy5mb3JjZUxheW91dCgpO1xuICB9KVxuICBzdGFja2VkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KSBoZWFkaW5nID0gJyc7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogRGlhbG9nQmFzZSwgbmV3QWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0U2NyaW1DbGlja0FjdGlvbihuZXdBY3Rpb24pO1xuICB9KVxuICBzY3JpbUNsaWNrQWN0aW9uID0gJ2Nsb3NlJztcblxuICBAcHJvcGVydHkoe3R5cGU6IFN0cmluZ30pXG4gIEBvYnNlcnZlcihmdW5jdGlvbih0aGlzOiBEaWFsb2dCYXNlLCBuZXdBY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5zZXRFc2NhcGVLZXlBY3Rpb24obmV3QWN0aW9uKTtcbiAgfSlcbiAgZXNjYXBlS2V5QWN0aW9uID0gJ2Nsb3NlJztcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogRGlhbG9nQmFzZSwgaXNPcGVuOiBib29sZWFuKSB7XG4gICAgLy8gQ2hlY2sgaXNDb25uZWN0ZWQgYmVjYXVzZSB3ZSBjb3VsZCBoYXZlIGJlZW4gZGlzY29ubmVjdGVkIGJlZm9yZSBmaXJzdFxuICAgIC8vIHVwZGF0ZS4gSWYgd2UncmUgbm93IGNsb3NlZCwgdGhlbiB3ZSBzaG91bGRuJ3Qgc3RhcnQgdGhlIE1EQyBmb3VuZGF0aW9uXG4gICAgLy8gb3BlbmluZyBhbmltYXRpb24uIElmIHdlJ3JlIG5vdyBjbG9zZWQsIHRoZW4gd2UndmUgYWxyZWFkeSBjbG9zZWQgdGhlXG4gICAgLy8gZm91bmRhdGlvbiBpbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAgICBpZiAodGhpcy5tZGNGb3VuZGF0aW9uICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24ub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uY2xvc2UodGhpcy5jdXJyZW50QWN0aW9uIHx8IHRoaXMuZGVmYXVsdEFjdGlvbik7XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIG9wZW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBkZWZhdWx0QWN0aW9uID0gJ2Nsb3NlJztcbiAgQHByb3BlcnR5KCkgYWN0aW9uQXR0cmlidXRlID0gJ2RpYWxvZ0FjdGlvbic7XG4gIEBwcm9wZXJ0eSgpIGluaXRpYWxGb2N1c0F0dHJpYnV0ZSA9ICdkaWFsb2dJbml0aWFsRm9jdXMnO1xuXG4gIHByaXZhdGUgY2xvc2luZ0R1ZVRvRGlzY29ubmVjdD86IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIGdldCBwcmltYXJ5QnV0dG9uKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgIGxldCBhc3NpZ25lZE5vZGVzID0gKHRoaXMucHJpbWFyeVNsb3QgYXMgSFRNTFNsb3RFbGVtZW50KS5hc3NpZ25lZE5vZGVzKCk7XG4gICAgYXNzaWduZWROb2RlcyA9IGFzc2lnbmVkTm9kZXMuZmlsdGVyKChub2RlKSA9PiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFzc2lnbmVkTm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGJ1dHRvbiA/IGJ1dHRvbiA6IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3VycmVudEFjdGlvbjogc3RyaW5nfHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIG1kY0ZvdW5kYXRpb25DbGFzcyA9IE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG4gIHByb3RlY3RlZCBtZGNGb3VuZGF0aW9uITogTURDRGlhbG9nRm91bmRhdGlvbjtcbiAgcHJvdGVjdGVkIGJvdW5kTGF5b3V0OiAoKCkgPT4gdm9pZCl8bnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBib3VuZEhhbmRsZUNsaWNrOiAoKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkKXxudWxsID0gbnVsbDtcbiAgcHJvdGVjdGVkIGJvdW5kSGFuZGxlS2V5ZG93bjogKChldjogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCl8bnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBib3VuZEhhbmRsZURvY3VtZW50S2V5ZG93bjpcbiAgICAgICgoZXY6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpfG51bGwgPSBudWxsO1xuXG4gIHByb3RlY3RlZCBlbWl0Tm90aWZpY2F0aW9uKG5hbWU6IHN0cmluZywgYWN0aW9uPzogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5pdDogQ3VzdG9tRXZlbnRJbml0ID0ge2RldGFpbDogYWN0aW9uID8ge2FjdGlvbn0gOiB7fX07XG4gICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwgaW5pdCk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJbml0aWFsRm9jdXNFbCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICBjb25zdCBpbml0Rm9jdXNTZWxlY3RvciA9IGBbJHt0aGlzLmluaXRpYWxGb2N1c0F0dHJpYnV0ZX1dYDtcblxuICAgIC8vIG9ubHkgc2VhcmNoIGxpZ2h0IERPTS4gVGhpcyB0eXBpY2FsbHkgaGFuZGxlcyBhbGwgdGhlIGNhc2VzXG4gICAgY29uc3QgbGlnaHREb21RcyA9IHRoaXMucXVlcnlTZWxlY3Rvcihpbml0Rm9jdXNTZWxlY3Rvcik7XG5cbiAgICBpZiAobGlnaHREb21Rcykge1xuICAgICAgcmV0dXJuIGxpZ2h0RG9tUXMgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaWYgbm90IGluIGxpZ2h0IGRvbSwgc2VhcmNoIGVhY2ggZmxhdHRlbmVkIGRpc3RyaWJ1dGVkIG5vZGUuXG4gICAgY29uc3QgcHJpbWFyeVNsb3QgPSB0aGlzLnByaW1hcnlTbG90IGFzIEhUTUxTbG90RWxlbWVudDtcbiAgICBjb25zdCBwcmltYXJ5Tm9kZXMgPSBwcmltYXJ5U2xvdC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSk7XG4gICAgY29uc3QgcHJpbWFyeUZvY3VzRWxlbWVudCA9IHRoaXMuc2VhcmNoTm9kZVRyZWVzRm9yQXR0cmlidXRlKFxuICAgICAgICBwcmltYXJ5Tm9kZXMsIHRoaXMuaW5pdGlhbEZvY3VzQXR0cmlidXRlKTtcbiAgICBpZiAocHJpbWFyeUZvY3VzRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHByaW1hcnlGb2N1c0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vjb25kYXJ5U2xvdCA9IHRoaXMuc2Vjb25kYXJ5U2xvdCBhcyBIVE1MU2xvdEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Vjb25kYXJ5Tm9kZXMgPSBzZWNvbmRhcnlTbG90LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KTtcbiAgICBjb25zdCBzZWNvbmRhcnlGb2N1c0VsZW1lbnQgPSB0aGlzLnNlYXJjaE5vZGVUcmVlc0ZvckF0dHJpYnV0ZShcbiAgICAgICAgc2Vjb25kYXJ5Tm9kZXMsIHRoaXMuaW5pdGlhbEZvY3VzQXR0cmlidXRlKTtcbiAgICBpZiAoc2Vjb25kYXJ5Rm9jdXNFbGVtZW50KSB7XG4gICAgICByZXR1cm4gc2Vjb25kYXJ5Rm9jdXNFbGVtZW50O1xuICAgIH1cblxuXG4gICAgY29uc3QgY29udGVudFNsb3QgPSB0aGlzLmNvbnRlbnRTbG90IGFzIEhUTUxTbG90RWxlbWVudDtcbiAgICBjb25zdCBjb250ZW50Tm9kZXMgPSBjb250ZW50U2xvdC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSk7XG4gICAgY29uc3QgaW5pdEZvY3VzRWxlbWVudCA9IHRoaXMuc2VhcmNoTm9kZVRyZWVzRm9yQXR0cmlidXRlKFxuICAgICAgICBjb250ZW50Tm9kZXMsIHRoaXMuaW5pdGlhbEZvY3VzQXR0cmlidXRlKTtcbiAgICByZXR1cm4gaW5pdEZvY3VzRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoTm9kZVRyZWVzRm9yQXR0cmlidXRlKG5vZGVzOiBOb2RlW10sIGF0dHJpYnV0ZTogc3RyaW5nKTpcbiAgICAgIEhUTUxFbGVtZW50fG51bGwge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoYFske2F0dHJpYnV0ZX1dYCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQWRhcHRlcigpOiBNRENEaWFsb2dBZGFwdGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWRkSGFzUmVtb3ZlQ2xhc3ModGhpcy5tZGNSb290KSxcbiAgICAgIGFkZEJvZHlDbGFzczogKCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nLFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiAoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJycsXG4gICAgICBhcmVCdXR0b25zU3RhY2tlZDogKCkgPT4gdGhpcy5zdGFja2VkLFxuICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW1hcnkgPSB0aGlzLnByaW1hcnlCdXR0b247XG4gICAgICAgIGlmIChwcmltYXJ5KSB7XG4gICAgICAgICAgcHJpbWFyeS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiAodGFyZ2V0LCBzZWxlY3RvcikgPT5cbiAgICAgICAgICB0YXJnZXQgPyBtYXRjaGVzKHRhcmdldCBhcyBFbGVtZW50LCBzZWxlY3RvcikgOiBmYWxzZSxcbiAgICAgIGdldEFjdGlvbkZyb21FdmVudDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID1cbiAgICAgICAgICAgIGNsb3Nlc3QoZS50YXJnZXQgYXMgRWxlbWVudCwgYFske3RoaXMuYWN0aW9uQXR0cmlidXRlfV1gKTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZWxlbWVudCAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLmFjdGlvbkF0dHJpYnV0ZSk7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgICB9LFxuICAgICAgZ2V0SW5pdGlhbEZvY3VzRWw6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbEZvY3VzRWwoKTtcbiAgICAgIH0sXG4gICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGVsID8gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwub2Zmc2V0SGVpZ2h0IDogZmFsc2U7XG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2VkOiAoYWN0aW9uKSA9PiB0aGlzLmVtaXROb3RpZmljYXRpb24oJ2Nsb3NlZCcsIGFjdGlvbiksXG4gICAgICBub3RpZnlDbG9zaW5nOiAoYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zaW5nRHVlVG9EaXNjb25uZWN0KSB7XG4gICAgICAgICAgLy8gRG9uJ3Qgc2V0IG91ciBvcGVuIHN0YXRlIHRvIGNsb3NlZCBqdXN0IGJlY2F1c2Ugd2Ugd2VyZVxuICAgICAgICAgIC8vIGRpc2Nvbm5lY3RlZC4gVGhhdCB3YXkgaWYgd2UgZ2V0IHJlY29ubmVjdGVkLCB3ZSdsbCBrbm93IHRvXG4gICAgICAgICAgLy8gcmUtb3Blbi5cbiAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXROb3RpZmljYXRpb24oJ2Nsb3NpbmcnLCBhY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW5lZDogKCkgPT4gdGhpcy5lbWl0Tm90aWZpY2F0aW9uKCdvcGVuZWQnKSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0Tm90aWZpY2F0aW9uKCdvcGVuaW5nJyk7XG4gICAgICB9LFxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6ICgpID0+IHsgLyogaGFuZGxlZCBieSByZW5kZXIgZm4gKi8gfSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4ge1xuICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnJlbW92ZSh0aGlzKTtcbiAgICAgIH0sXG4gICAgICB0cmFwRm9jdXM6IChlbCkgPT4ge1xuICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnB1c2godGhpcyk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtjc3NDbGFzc2VzLlNUQUNLRURdOiB0aGlzLnN0YWNrZWQsXG4gICAgfTtcblxuICAgIGxldCBoZWFkaW5nID0gaHRtbGBgO1xuXG4gICAgaWYgKHRoaXMuaGVhZGluZykge1xuICAgICAgaGVhZGluZyA9IGh0bWxgXG4gICAgICAgIDxoMiBpZD1cInRpdGxlXCIgY2xhc3M9XCJtZGMtZGlhbG9nX190aXRsZVwiPiR7dGhpcy5oZWFkaW5nfTwvaDI+YDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zQ2xhc3NlcyA9IHtcbiAgICAgICdtZGMtZGlhbG9nX19hY3Rpb25zJzogIXRoaXMuaGlkZUFjdGlvbnMsXG4gICAgfTtcblxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCJcbiAgICAgICAgcm9sZT1cImFsZXJ0ZGlhbG9nXCJcbiAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nX19zdXJmYWNlXCI+XG4gICAgICAgICAgJHtoZWFkaW5nfVxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJtZGMtZGlhbG9nX19jb250ZW50XCI+XG4gICAgICAgICAgICA8c2xvdCBpZD1cImNvbnRlbnRTbG90XCI+PC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmb290ZXJcbiAgICAgICAgICAgICAgaWQ9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKGFjdGlvbnNDbGFzc2VzKX1cIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwic2Vjb25kYXJ5QWN0aW9uXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgPHNsb3QgbmFtZT1cInByaW1hcnlBY3Rpb25cIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fc2NyaW1cIj48L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5zZXRBdXRvU3RhY2tCdXR0b25zKHRydWUpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5vcGVuICYmIHRoaXMubWRjRm91bmRhdGlvbiAmJiAhdGhpcy5tZGNGb3VuZGF0aW9uLmlzT3BlbigpKSB7XG4gICAgICAvLyBXZSBwcm9iYWJseSBnb3QgZGlzY29ubmVjdGVkIHdoaWxlIHdlIHdlcmUgc3RpbGwgb3Blbi4gUmUtb3BlbixcbiAgICAgIC8vIG1hdGNoaW5nIHRoZSBiZWhhdmlvciBvZiBuYXRpdmUgPGRpYWxvZz4uXG4gICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLm1kY0ZvdW5kYXRpb24ub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMub3BlbiAmJiB0aGlzLm1kY0ZvdW5kYXRpb24pIHtcbiAgICAgIC8vIElmIHRoaXMgZGlhbG9nIGlzIG9wZW5lZCBhbmQgdGhlbiBkaXNjb25uZWN0ZWQsIHdlIHdhbnQgdG8gY2xvc2VcbiAgICAgIC8vIHRoZSBmb3VuZGF0aW9uLCBzbyB0aGF0IDEpIGFueSBwZW5kaW5nIHRpbWVycyBhcmUgY2FuY2VsbGVkXG4gICAgICAvLyAoaW4gcGFydGljdWxhciBmb3IgdHJhcEZvY3VzKSwgYW5kIDIpIGlmIHdlIHJlY29ubmVjdCwgd2UgY2FuIG9wZW5cbiAgICAgIC8vIHRoZSBmb3VuZGF0aW9uIGFnYWluIHRvIHJldHJpZ2dlciBhbmltYXRpb25zIGFuZCBmb2N1cy5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY2xvc2luZ0R1ZVRvRGlzY29ubmVjdCA9IHRydWU7XG4gICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uY2xvc2UodGhpcy5jdXJyZW50QWN0aW9uIHx8IHRoaXMuZGVmYXVsdEFjdGlvbik7XG4gICAgICB0aGlzLmNsb3NpbmdEdWVUb0Rpc2Nvbm5lY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgICAgLy8gV2hlbiB3ZSBjbG9zZSBub3JtYWxseSwgdGhlIHJlbGVhc2VGb2N1cyBjYWxsYmFjayBoYW5kbGVzIHJlbW92aW5nXG4gICAgICAvLyBvdXJzZWx2ZXMgZnJvbSB0aGUgYmxvY2tpbmcgZWxlbWVudHMgc3RhY2suIEhvd2V2ZXIsIHRoYXQgY2FsbGJhY2tcbiAgICAgIC8vIGhhcHBlbnMgb24gYSBkZWxheSwgYW5kIHdoZW4gd2UgYXJlIGNsb3NpbmcgZHVlIHRvIGEgZGlzY29ubmVjdCB3ZVxuICAgICAgLy8gbmVlZCB0byByZW1vdmUgb3Vyc2VsdmVzIGJlZm9yZSB0aGUgYmxvY2tpbmcgZWxlbWVudCBwb2x5ZmlsbCdzXG4gICAgICAvLyBtdXRhdGlvbiBvYnNlcnZlciBub3RpY2VzIGFuZCBsb2dzIGEgd2FybmluZywgc2luY2UgaXQncyBub3QgdmFsaWQgdG9cbiAgICAgIC8vIGJlIGluIHRoZSBibG9ja2luZyBlbGVtZW50cyBzdGFjayB3aGlsZSBkaXNjb25uZWN0ZWQuXG4gICAgICBibG9ja2luZ0VsZW1lbnRzLnJlbW92ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZUxheW91dCgpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24ubGF5b3V0KCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBjb25zdCBpbml0aWFsRm9jdXNFbCA9IHRoaXMuZ2V0SW5pdGlhbEZvY3VzRWwoKTtcbiAgICBpbml0aWFsRm9jdXNFbCAmJiBpbml0aWFsRm9jdXNFbC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsID0gdGhpcy5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGFjdGl2ZUVsKSB7XG4gICAgICBpZiAoYWN0aXZlRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBhY3RpdmVFbC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3ROb2RlKCk7XG4gICAgICBjb25zdCBhY3RpdmVFbCA9IHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudCA/IHJvb3QuYWN0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgICBpZiAoYWN0aXZlRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBhY3RpdmVFbC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuYm91bmRIYW5kbGVDbGljayA9IHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVDbGljay5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24pIGFzIEV2ZW50TGlzdGVuZXI7XG4gICAgdGhpcy5ib3VuZExheW91dCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmxheW91dC5iaW5kKHRoaXMubWRjRm91bmRhdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmJvdW5kSGFuZGxlS2V5ZG93biA9IHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVLZXlkb3duLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uKSBhcyBFdmVudExpc3RlbmVyO1xuICAgIHRoaXMuYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd24gPVxuICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlRG9jdW1lbnRLZXlkb3duLmJpbmQodGhpcy5tZGNGb3VuZGF0aW9uKSBhc1xuICAgICAgICBFdmVudExpc3RlbmVyO1xuXG4gICAgdGhpcy5tZGNSb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZUNsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5ib3VuZExheW91dCwgYXBwbHlQYXNzaXZlKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLmJvdW5kTGF5b3V0LCBhcHBseVBhc3NpdmUoKSk7XG4gICAgdGhpcy5tZGNSb290LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdrZXlkb3duJywgdGhpcy5ib3VuZEhhbmRsZUtleWRvd24sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAna2V5ZG93bicsIHRoaXMuYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd24sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5ib3VuZEhhbmRsZUNsaWNrKSB7XG4gICAgICB0aGlzLm1kY1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kSGFuZGxlQ2xpY2spO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kTGF5b3V0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5ib3VuZExheW91dCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLmJvdW5kTGF5b3V0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZEhhbmRsZUtleWRvd24pIHtcbiAgICAgIHRoaXMubWRjUm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEhhbmRsZUtleWRvd24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kSGFuZGxlRG9jdW1lbnRLZXlkb3duKSB7XG4gICAgICB0aGlzLm1kY1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAna2V5ZG93bicsIHRoaXMuYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd24pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgLm1kYy1lbGV2YXRpb24tb3ZlcmxheXtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOmluaGVyaXQ7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tZGMtZGlhbG9nLC5tZGMtZGlhbG9nX19zY3JpbXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1kaWFsb2d7ZGlzcGxheTpub25lO3otaW5kZXg6N30ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc3VyZmFjZSwgI2ZmZil9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3Njcmlte2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzIpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX190aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX2NvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1kYy1kaWFsb2cubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fdGl0bGUsLm1kYy1kaWFsb2cubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fYWN0aW9uc3tib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21pbi13aWR0aDoyODBweH1AbWVkaWEobWF4LXdpZHRoOiA1OTJweCl7Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWF4LXdpZHRoOmNhbGMoMTAwdncgLSAzMnB4KX19QG1lZGlhKG1pbi13aWR0aDogNTkycHgpey5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC13aWR0aDo1NjBweH19Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAzMnB4KX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXtib3JkZXItcmFkaXVzOjRweH0ubWRjLWRpYWxvZ19fc2NyaW17b3BhY2l0eTowO3otaW5kZXg6LTF9Lm1kYy1kaWFsb2dfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTAwJTt0cmFuc2Zvcm06c2NhbGUoMC44KTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0ubWRjLWRpYWxvZ19fc3VyZmFjZXtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZ3JvdzowO2ZsZXgtc2hyaW5rOjA7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czphdXRvO292ZXJmbG93LXk6YXV0b30ubWRjLWRpYWxvZ19fc3VyZmFjZSAubWRjLWVsZXZhdGlvbi1vdmVybGF5e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dG9wOjA7bGVmdDowfS5tZGMtZGlhbG9nW2Rpcj1ydGxdIC5tZGMtZGlhbG9nX19zdXJmYWNlLFtkaXI9cnRsXSAubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXt0ZXh0LWFsaWduOnJpZ2h0fS5tZGMtZGlhbG9nX190aXRsZXtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MDtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6Um9ib3RvLCBzYW5zLXNlcmlmOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZToxLjI1cmVtO2xpbmUtaGVpZ2h0OjJyZW07Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wMTI1ZW07dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtc2hyaW5rOjA7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MCAyNHB4IDlweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB0cmFuc3BhcmVudH0ubWRjLWRpYWxvZ19fdGl0bGU6OmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDowO2hlaWdodDo0MHB4O2NvbnRlbnQ6XCJcIjt2ZXJ0aWNhbC1hbGlnbjowfS5tZGMtZGlhbG9nW2Rpcj1ydGxdIC5tZGMtZGlhbG9nX190aXRsZSxbZGlyPXJ0bF0gLm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3RpdGxle3RleHQtYWxpZ246cmlnaHR9Lm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX3RpdGxle3BhZGRpbmctYm90dG9tOjE1cHh9Lm1kYy1kaWFsb2dfX2NvbnRlbnR7Zm9udC1mYW1pbHk6Um9ib3RvLCBzYW5zLXNlcmlmOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZToxcmVtO2xpbmUtaGVpZ2h0OjEuNXJlbTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzMTI1ZW07dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDtmbGV4LWdyb3c6MTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjA7cGFkZGluZzoyMHB4IDI0cHg7b3ZlcmZsb3c6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0ubWRjLWRpYWxvZ19fY29udGVudD46Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDowfS5tZGMtZGlhbG9nX19jb250ZW50PjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0ubWRjLWRpYWxvZ19fdGl0bGUrLm1kYy1kaWFsb2dfX2NvbnRlbnR7cGFkZGluZy10b3A6MH0ubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fY29udGVudHtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tZGMtZGlhbG9nX19jb250ZW50IC5tZGMtbGlzdDpmaXJzdC1jaGlsZDpsYXN0LWNoaWxke3BhZGRpbmc6NnB4IDAgMH0ubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fY29udGVudCAubWRjLWxpc3Q6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZHtwYWRkaW5nOjB9Lm1kYy1kaWFsb2dfX2FjdGlvbnN7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtc2hyaW5rOjA7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWluLWhlaWdodDo1MnB4O21hcmdpbjowO3BhZGRpbmc6OHB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5tZGMtZGlhbG9nLS1zdGFja2VkIC5tZGMtZGlhbG9nX19hY3Rpb25ze2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LWVuZH0ubWRjLWRpYWxvZ19fYnV0dG9ue21hcmdpbi1sZWZ0OjhweDttYXJnaW4tcmlnaHQ6MDttYXgtd2lkdGg6MTAwJTt0ZXh0LWFsaWduOnJpZ2h0fVtkaXI9cnRsXSAubWRjLWRpYWxvZ19fYnV0dG9uLC5tZGMtZGlhbG9nX19idXR0b25bZGlyPXJ0bF17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6OHB4fS5tZGMtZGlhbG9nX19idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH1bZGlyPXJ0bF0gLm1kYy1kaWFsb2dfX2J1dHRvbjpmaXJzdC1jaGlsZCwubWRjLWRpYWxvZ19fYnV0dG9uOmZpcnN0LWNoaWxkW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjB9Lm1kYy1kaWFsb2dbZGlyPXJ0bF0gLm1kYy1kaWFsb2dfX2J1dHRvbixbZGlyPXJ0bF0gLm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX2J1dHRvbnt0ZXh0LWFsaWduOmxlZnR9Lm1kYy1kaWFsb2ctLXN0YWNrZWQgLm1kYy1kaWFsb2dfX2J1dHRvbjpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tdG9wOjEycHh9Lm1kYy1kaWFsb2ctLW9wZW4sLm1kYy1kaWFsb2ctLW9wZW5pbmcsLm1kYy1kaWFsb2ctLWNsb3Npbmd7ZGlzcGxheTpmbGV4fS5tZGMtZGlhbG9nLS1vcGVuaW5nIC5tZGMtZGlhbG9nX19zY3JpbXt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtZGlhbG9nLS1vcGVuaW5nIC5tZGMtZGlhbG9nX19jb250YWluZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDc1bXMgbGluZWFyLHRyYW5zZm9ybSAxNTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSl9Lm1kYy1kaWFsb2ctLWNsb3NpbmcgLm1kYy1kaWFsb2dfX3NjcmltLC5tZGMtZGlhbG9nLS1jbG9zaW5nIC5tZGMtZGlhbG9nX19jb250YWluZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDc1bXMgbGluZWFyfS5tZGMtZGlhbG9nLS1jbG9zaW5nIC5tZGMtZGlhbG9nX19jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpfS5tZGMtZGlhbG9nLS1vcGVuIC5tZGMtZGlhbG9nX19zY3JpbXtvcGFjaXR5OjF9Lm1kYy1kaWFsb2ctLW9wZW4gLm1kYy1kaWFsb2dfX2NvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfS5tZGMtZGlhbG9nLXNjcm9sbC1sb2Nre292ZXJmbG93OmhpZGRlbn0jYWN0aW9uczpub3QoLm1kYy1kaWFsb2dfX2FjdGlvbnMpe2Rpc3BsYXk6bm9uZX0ubWRjLWRpYWxvZ19fc3VyZmFjZXtib3gtc2hhZG93OnZhcigtLW1kYy1kaWFsb2ctYm94LXNoYWRvdywgMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpKX1AbWVkaWEobWluLXdpZHRoOiA1NjBweCl7Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWF4LXdpZHRoOjU2MHB4O21heC13aWR0aDp2YXIoLS1tZGMtZGlhbG9nLW1heC13aWR0aCwgNTYwcHgpfX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc2NyaW17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zMik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtZGlhbG9nLXNjcmltLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMzIpKX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2NvbG9yOnZhcigtLW1kYy1kaWFsb2ctaGVhZGluZy1pbmstY29sb3IsIHJnYmEoMCwgMCwgMCwgMC44NykpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjYpO2NvbG9yOnZhcigtLW1kYy1kaWFsb2ctY29udGVudC1pbmstY29sb3IsIHJnYmEoMCwgMCwgMCwgMC42KSl9Lm1kYy1kaWFsb2cubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fdGl0bGUsLm1kYy1kaWFsb2cubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fYWN0aW9uc3tib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpO2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtZGlhbG9nLXNjcm9sbC1kaXZpZGVyLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMTIpKX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXttaW4td2lkdGg6MjgwcHg7bWluLXdpZHRoOnZhcigtLW1kYy1kaWFsb2ctbWluLXdpZHRoLCAyODBweCl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWF4LWhlaWdodDp2YXIoLS1tZGMtZGlhbG9nLW1heC1oZWlnaHQsIGNhbGMoMTAwJSAtIDMycHgpKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXItcmFkaXVzOnZhcigtLW1kYy1kaWFsb2ctc2hhcGUtcmFkaXVzLCA0cHgpfSNhY3Rpb25zIDo6c2xvdHRlZCgqKXttYXJnaW4tbGVmdDo4cHg7bWFyZ2luLXJpZ2h0OjA7bWF4LXdpZHRoOjEwMCU7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gI2FjdGlvbnMgOjpzbG90dGVkKCopLCNhY3Rpb25zIDo6c2xvdHRlZCgqKVtkaXI9cnRsXXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDo4cHh9Lm1kYy1kaWFsb2dbZGlyPXJ0bF0gI2FjdGlvbnMgOjpzbG90dGVkKCopLFtkaXI9cnRsXSAubWRjLWRpYWxvZyAjYWN0aW9ucyA6OnNsb3R0ZWQoKil7dGV4dC1hbGlnbjpsZWZ0fS5tZGMtZGlhbG9nLS1zdGFja2VkICNhY3Rpb25ze2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlfS5tZGMtZGlhbG9nLS1zdGFja2VkICNhY3Rpb25zICo6bm90KDpsYXN0LWNoaWxkKSA6OnNsb3R0ZWQoKil7ZmxleC1iYXNpczoxZS05cHg7bWFyZ2luLXRvcDoxMnB4fWA7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtEaWFsb2dCYXNlfSBmcm9tICcuL213Yy1kaWFsb2ctYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1kaWFsb2ctY3NzLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXdjLWRpYWxvZyc6IERpYWxvZztcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLWRpYWxvZycpXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgRGlhbG9nQmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCIvKipcbiAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICovXG5cbi8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbi8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbmNvbnN0IHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vKipcbiAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAqL1xuY29uc3QgbWF0Y2hlcyA9XG4gICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuLyoqIEB0eXBlIHtzdHJpbmd9ICovXG5jb25zdCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmVhW2hyZWZdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZnJhbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbWJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4vKipcbiAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICogYXR0cmlidXRlLlxuICpcbiAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gKlxuICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gKlxuICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gKi9cbmNsYXNzIEluZXJ0Um9vdCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290RWxlbWVudCBUaGUgRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgKi9cbiAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgLy8gV2F0Y2ggZm9yOlxuICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHthdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAqL1xuICBkZXN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihpbmVydE5vZGUpIHtcbiAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovIChudWxsKTtcbiAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi8gKG51bGwpO1xuICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi8gKG51bGwpO1xuICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi8gKG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgKi9cbiAgZ2V0IG1hbmFnZWROb2RlcygpIHtcbiAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCBoYXNTYXZlZEFyaWFIaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cbiAgc2V0IHNhdmVkQXJpYUhpZGRlbihhcmlhSGlkZGVuKSB7XG4gICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICBnZXQgc2F2ZWRBcmlhSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAqL1xuICBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgKG5vZGUpID0+IHRoaXMuX3Zpc2l0Tm9kZShub2RlKSk7XG5cbiAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgbGV0IG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgIGxldCByb290ID0gdW5kZWZpbmVkO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqLyAobm9kZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICAgIGlmIChyb290KSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqL1xuICBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChub2RlKTtcblxuICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqL1xuICBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgY29uc3QgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqL1xuICBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZGVsZXRlKGluZXJ0Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICovXG4gIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIChub2RlKSA9PiB0aGlzLl91bm1hbmFnZU5vZGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAqL1xuICBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgIGxldCBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICB9XG5cbiAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAqL1xuICBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHJlY29yZC50YXJnZXQpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJlxuICAgICAgICAgICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgIGNvbnN0IGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG4vKipcbiAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gKlxuICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICpcbiAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gKi9cbmNsYXNzIEluZXJ0Tm9kZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgKi9cbiAgY29uc3RydWN0b3Iobm9kZSwgaW5lcnRSb290KSB7XG4gICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICovXG4gICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICovXG4gIGRlc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAodGhpcy5fbm9kZSk7XG4gICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqLyAobnVsbCk7XG4gICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi8gKG51bGwpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICovXG4gIGdldCBkZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi8gKHRoaXMpLl9kZXN0cm95ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICovXG4gIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IGhhc1NhdmVkVGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gIH1cblxuICAvKiogQHJldHVybiB7IU5vZGV9ICovXG4gIGdldCBub2RlKCkge1xuICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG4gIHNldCBzYXZlZFRhYkluZGV4KHRhYkluZGV4KSB7XG4gICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICBnZXQgc2F2ZWRUYWJJbmRleCgpIHtcbiAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gIH1cblxuICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHRoaXMubm9kZSk7XG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICBpZiAoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KS50YWJJbmRleCA9PT0gLTEgJiZcbiAgICAgICAgICB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAoZWxlbWVudCkudGFiSW5kZXg7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAoZWxlbWVudCkudGFiSW5kZXg7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAqL1xuICBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICovXG4gIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgdGhpcy5faW5lcnRSb290cy5kZWxldGUoaW5lcnRSb290KTtcbiAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gKlxuICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAqL1xuY2xhc3MgSW5lcnRNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgIC8qKlxuICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAqL1xuICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgKi9cbiAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAqL1xuICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAqL1xuICBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgIGlmIChpbmVydCkge1xuICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7IC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHsgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgIHRoaXMuX2luZXJ0Um9vdHMuZGVsZXRlKHJvb3QpO1xuICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICovXG4gIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICovXG4gIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgIGxldCBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkgeyAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgIH1cblxuICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgIHJldHVybiBpbmVydE5vZGU7XG4gIH1cblxuICAvKipcbiAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAqL1xuICBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgIGNvbnN0IGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmRlbGV0ZShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5lcnROb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICovXG4gIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgY29uc3QgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaW5lcnRFbGVtZW50KSB7XG4gICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5LCB7YXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgKi9cbiAgX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAocmVjb3JkLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChub2RlKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAvLyBTaGFkb3dSb290LlxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLnNoYWRvd1Jvb3Q7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAvLyBzaGFkb3cgRE9NLlxuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovIChlbGVtZW50KTtcbiAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICBjb25zdCBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID9cbiAgICAgICAgY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAvLyBzaGFkb3cgRE9NLlxuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovIChlbGVtZW50KTtcbiAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgY29uc3QgZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/XG4gICAgICAgIHNsb3QuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pIDogW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gIGxldCBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZScpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nK1xuICAgICAgICAgICAgICAgICAgICAgICdbaW5lcnRdIHtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJ31cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnfVxcbic7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG4vKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG5jb25zdCBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICB9LFxuICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgc2V0OiBmdW5jdGlvbihpbmVydCkge1xuICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICB9LFxuICB9KTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBbEJBO0FBcUJBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBNENBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQS9DQTtBQUFBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRkE7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFsQkE7QUFvQkE7QUFyQkE7O0FBQUE7QUFDQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFBQTs7QUFxQkE7QUFNQTtBQUVBO0FBTUE7QUFNQTtBQW1CQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE0UkE7QUFDQTtBQTFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7OztBQU9BOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7QUFkQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN1dBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFKQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFKQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBbUJBO0FBakJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBNERBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBcUJBO0FBQUE7QUFDQTs7O0FBR0E7QUFFQTs7Ozs7OztBQU1BO0FBRUE7Ozs7O0FBSUE7QUE2VEE7QUFDQTtBQTVUQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUEvVUE7QUFDQTtBQWdWQTtBQUVBOzs7Ozs7Ozs7OztBQ3JiQTs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhPQTtBQTBPQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0lBO0FBaUpBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTs7Ozs7QUFJQTtBQUVBOzs7OztBQUlBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBdEJBO0FBd0JBO0FBQ0E7QUFDQTtBQW5MQTtBQXFMQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7OztBIiwic291cmNlUm9vdCI6IiJ9