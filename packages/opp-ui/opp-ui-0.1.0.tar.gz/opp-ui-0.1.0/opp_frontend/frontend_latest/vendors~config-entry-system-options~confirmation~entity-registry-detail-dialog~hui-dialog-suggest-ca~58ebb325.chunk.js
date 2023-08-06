(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"],{

/***/ "./node_modules/@material/mwc-switch/mwc-switch-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch-base.js ***!
  \**************************************************************/
/*! exports provided: SwitchBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchBase", function() { return SwitchBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_switch_foundation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/switch/foundation.js */ "./node_modules/@material/switch/foundation.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

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





class SwitchBase extends _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["FormElement"] {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.disabled = false;
    this.mdcFoundationClass = _material_switch_foundation_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  _changeHandler(e) {
    this.mdcFoundation.handleChange(e); // catch "click" event and sync properties

    this.checked = this.formElement.checked;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["addHasRemoveClass"])(this.mdcRoot)), {
      setNativeControlChecked: checked => {
        this.formElement.checked = checked;
      },
      setNativeControlDisabled: disabled => {
        this.formElement.disabled = disabled;
      },
      setNativeControlAttr: (attr, value) => {
        this.formElement.setAttribute(attr, value);
      }
    });
  }

  get ripple() {
    return this.rippleNode.ripple;
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay" .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])({
      interactionNode: this
    })}">
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              @change="${this._changeHandler}">
          </div>
        </div>
      </div>
      <slot></slot>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
  this.mdcFoundation.setChecked(value);
})], SwitchBase.prototype, "checked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
  this.mdcFoundation.setDisabled(value);
})], SwitchBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-switch')], SwitchBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('input')], SwitchBase.prototype, "formElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-switch__thumb-underlay')], SwitchBase.prototype, "rippleNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-switch/mwc-switch-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch-css.js ***!
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

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-color:transparent}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}`;

/***/ }),

/***/ "./node_modules/@material/mwc-switch/mwc-switch.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch.js ***!
  \*********************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_switch_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-switch-base.js */ "./node_modules/@material/mwc-switch/mwc-switch-base.js");
/* harmony import */ var _mwc_switch_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-switch-css.js */ "./node_modules/@material/mwc-switch/mwc-switch-css.js");

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




let Switch = class Switch extends _mwc_switch_base_js__WEBPACK_IMPORTED_MODULE_2__["SwitchBase"] {};
Switch.styles = _mwc_switch_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Switch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-switch')], Switch);


/***/ }),

/***/ "./node_modules/@material/switch/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/switch/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
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

/** CSS classes used by the switch. */
var cssClasses = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: 'mdc-switch--checked',

  /** Class used for a switch that is disabled. */
  DISABLED: 'mdc-switch--disabled'
};
/** String constants used by the switch. */

var strings = {
  /** Aria attribute for checked or unchecked state of switch */
  ARIA_CHECKED_ATTR: 'aria-checked',

  /** A CSS selector used to locate the native HTML control for the switch.  */
  NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',

  /** A CSS selector used to locate the ripple surface element for the switch. */
  RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
};


/***/ }),

/***/ "./node_modules/@material/switch/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/switch/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCSwitchFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSwitchFoundation", function() { return MDCSwitchFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/switch/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
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




var MDCSwitchFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSwitchFoundation, _super);

  function MDCSwitchFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSwitchFoundation, "strings", {
    /** The string constants used by the switch. */
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
    /** The CSS classes used by the switch. */
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
    /** The default Adapter for the switch. */
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setNativeControlChecked: function () {
          return undefined;
        },
        setNativeControlDisabled: function () {
          return undefined;
        },
        setNativeControlAttr: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the checked state of the switch. */

  MDCSwitchFoundation.prototype.setChecked = function (checked) {
    this.adapter_.setNativeControlChecked(checked);
    this.updateAriaChecked_(checked);
    this.updateCheckedStyling_(checked);
  };
  /** Sets the disabled state of the switch. */


  MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    }
  };
  /** Handles the change event for the switch native control. */


  MDCSwitchFoundation.prototype.handleChange = function (evt) {
    var nativeControl = evt.target;
    this.updateAriaChecked_(nativeControl.checked);
    this.updateCheckedStyling_(nativeControl.checked);
  };
  /** Updates the styling of the switch based on its checked state. */


  MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
    if (checked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
    }
  };

  MDCSwitchFoundation.prototype.updateAriaChecked_ = function (checked) {
    this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, "" + !!checked);
  };

  return MDCSwitchFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSwitchFoundation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnN+Y29uZmlybWF0aW9ufmVudGl0eS1yZWdpc3RyeS1kZXRhaWwtZGlhbG9nfmh1aS1kaWFsb2ctc3VnZ2VzdC1jYX41OGViYjMyNS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLXN3aXRjaC1iYXNlLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXN3aXRjaC1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2Mtc3dpdGNoLnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHthZGRIYXNSZW1vdmVDbGFzcywgRm9ybUVsZW1lbnQsIEhUTUxFbGVtZW50V2l0aFJpcHBsZSwgb2JzZXJ2ZXJ9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9mb3JtLWVsZW1lbnQuanMnO1xuaW1wb3J0IHtyaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtNRENTd2l0Y2hBZGFwdGVyfSBmcm9tICdAbWF0ZXJpYWwvc3dpdGNoL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1N3aXRjaEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3N3aXRjaC9mb3VuZGF0aW9uLmpzJztcbmltcG9ydCB7aHRtbCwgcHJvcGVydHksIHF1ZXJ5fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hCYXNlIGV4dGVuZHMgRm9ybUVsZW1lbnQge1xuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogU3dpdGNoQmFzZSwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gIH0pXG4gIGNoZWNrZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogU3dpdGNoQmFzZSwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0RGlzYWJsZWQodmFsdWUpO1xuICB9KVxuICBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLm1kYy1zd2l0Y2gnKSBwcm90ZWN0ZWQgbWRjUm9vdCE6IEhUTUxFbGVtZW50O1xuXG4gIEBxdWVyeSgnaW5wdXQnKSBwcm90ZWN0ZWQgZm9ybUVsZW1lbnQhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBtZGNGb3VuZGF0aW9uITogTURDU3dpdGNoRm91bmRhdGlvbjtcblxuICBwcml2YXRlIF9jaGFuZ2VIYW5kbGVyKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZUNoYW5nZShlKTtcbiAgICAvLyBjYXRjaCBcImNsaWNrXCIgZXZlbnQgYW5kIHN5bmMgcHJvcGVydGllc1xuICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZm9ybUVsZW1lbnQuY2hlY2tlZDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBtZGNGb3VuZGF0aW9uQ2xhc3MgPSBNRENTd2l0Y2hGb3VuZGF0aW9uO1xuXG4gIHByb3RlY3RlZCBjcmVhdGVBZGFwdGVyKCk6IE1EQ1N3aXRjaEFkYXB0ZXIge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5hZGRIYXNSZW1vdmVDbGFzcyh0aGlzLm1kY1Jvb3QpLFxuICAgICAgc2V0TmF0aXZlQ29udHJvbENoZWNrZWQ6IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICB9LFxuICAgICAgc2V0TmF0aXZlQ29udHJvbERpc2FibGVkOiAoZGlzYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgfSxcbiAgICAgIHNldE5hdGl2ZUNvbnRyb2xBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHJpcHBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaXBwbGVOb2RlLnJpcHBsZTtcbiAgfVxuXG4gIEBxdWVyeSgnLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5JylcbiAgcHJvdGVjdGVkIHJpcHBsZU5vZGUhOiBIVE1MRWxlbWVudFdpdGhSaXBwbGU7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190cmFja1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXlcIiAucmlwcGxlPVwiJHtyaXBwbGUoe1xuICAgICAgaW50ZXJhY3Rpb25Ob2RlOiB0aGlzXG4gICAgfSl9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zd2l0Y2hfX3RodW1iXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1zd2l0Y2hcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX2NoYW5nZUhhbmRsZXJ9XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjc3N9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzYC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheXtsZWZ0Oi0xOHB4O3JpZ2h0OmluaXRpYWw7dG9wOi0xN3B4O3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9W2Rpcj1ydGxdIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXlbZGlyPXJ0bF17bGVmdDppbml0aWFsO3JpZ2h0Oi0xOHB4fS5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbHt3aWR0aDo2OHB4O2hlaWdodDo0OHB4fS5tZGMtc3dpdGNoe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5tZGMtc3dpdGNoLm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX3RyYWNre2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfS5tZGMtc3dpdGNoLm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX3RodW1ie2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO2JvcmRlci1jb2xvcjojMDE4Nzg2O2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0ubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190cmFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmfS5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbHtsZWZ0OjA7cmlnaHQ6aW5pdGlhbDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDttYXJnaW46MDtvcGFjaXR5OjA7Y3Vyc29yOnBvaW50ZXI7cG9pbnRlci1ldmVudHM6YXV0b31bZGlyPXJ0bF0gLm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sLC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbFtkaXI9cnRsXXtsZWZ0OmluaXRpYWw7cmlnaHQ6MH0ubWRjLXN3aXRjaF9fdHJhY2t7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjMycHg7aGVpZ2h0OjE0cHg7Ym9yZGVyOjFweCBzb2xpZDtib3JkZXItcmFkaXVzOjdweDtvcGFjaXR5Oi4zODt0cmFuc2l0aW9uOm9wYWNpdHkgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLGJhY2tncm91bmQtY29sb3IgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLGJvcmRlci1jb2xvciA5MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheXtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLGJhY2tncm91bmQtY29sb3IgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLGJvcmRlci1jb2xvciA5MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9Lm1kYy1zd2l0Y2hfX3RodW1ie2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsLjEyKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3JkZXI6MTBweCBzb2xpZDtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MX0ubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fdHJhY2t7b3BhY2l0eTouNTR9Lm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5e3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwcHgpfVtkaXI9cnRsXSAubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXksLm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5W2Rpcj1ydGxde3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KX0ubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2x7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpfVtkaXI9cnRsXSAubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2wsLm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sW2Rpcj1ydGxde3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwcHgpfS5tZGMtc3dpdGNoLS1kaXNhYmxlZHtvcGFjaXR5Oi4zODtwb2ludGVyLWV2ZW50czpub25lfS5tZGMtc3dpdGNoLS1kaXNhYmxlZCAubWRjLXN3aXRjaF9fdGh1bWJ7Ym9yZGVyLXdpZHRoOjFweH0ubWRjLXN3aXRjaC0tZGlzYWJsZWQgLm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9se2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojOWU5ZTllfS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDh9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4yNH0ubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMjR9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4yNH0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXl7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHN9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIGNhbGMoNTAlIC0gNTAlKSk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIGNhbGMoNTAlIC0gNTAlKSk7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn06aG9zdHtvdXRsaW5lOm5vbmV9YDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3VzdG9tRWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge1N3aXRjaEJhc2V9IGZyb20gJy4vbXdjLXN3aXRjaC1iYXNlLmpzJztcbmltcG9ydCB7c3R5bGV9IGZyb20gJy4vbXdjLXN3aXRjaC1jc3MuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtd2Mtc3dpdGNoJzogU3dpdGNoO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdtd2Mtc3dpdGNoJylcbmV4cG9ydCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBTd2l0Y2hCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKiogQ1NTIGNsYXNzZXMgdXNlZCBieSB0aGUgc3dpdGNoLiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLyoqIENsYXNzIHVzZWQgZm9yIGEgc3dpdGNoIHRoYXQgaXMgaW4gdGhlIFwiY2hlY2tlZFwiIChvbikgcG9zaXRpb24uICovXG4gICAgQ0hFQ0tFRDogJ21kYy1zd2l0Y2gtLWNoZWNrZWQnLFxuICAgIC8qKiBDbGFzcyB1c2VkIGZvciBhIHN3aXRjaCB0aGF0IGlzIGRpc2FibGVkLiAqL1xuICAgIERJU0FCTEVEOiAnbWRjLXN3aXRjaC0tZGlzYWJsZWQnLFxufTtcbi8qKiBTdHJpbmcgY29uc3RhbnRzIHVzZWQgYnkgdGhlIHN3aXRjaC4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIC8qKiBBcmlhIGF0dHJpYnV0ZSBmb3IgY2hlY2tlZCBvciB1bmNoZWNrZWQgc3RhdGUgb2Ygc3dpdGNoICovXG4gICAgQVJJQV9DSEVDS0VEX0FUVFI6ICdhcmlhLWNoZWNrZWQnLFxuICAgIC8qKiBBIENTUyBzZWxlY3RvciB1c2VkIHRvIGxvY2F0ZSB0aGUgbmF0aXZlIEhUTUwgY29udHJvbCBmb3IgdGhlIHN3aXRjaC4gICovXG4gICAgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I6ICcubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2wnLFxuICAgIC8qKiBBIENTUyBzZWxlY3RvciB1c2VkIHRvIGxvY2F0ZSB0aGUgcmlwcGxlIHN1cmZhY2UgZWxlbWVudCBmb3IgdGhlIHN3aXRjaC4gKi9cbiAgICBSSVBQTEVfU1VSRkFDRV9TRUxFQ1RPUjogJy5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheScsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDU3dpdGNoRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTd2l0Y2hGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1N3aXRjaEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDU3dpdGNoRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTd2l0Y2hGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICAvKiogVGhlIHN0cmluZyBjb25zdGFudHMgdXNlZCBieSB0aGUgc3dpdGNoLiAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU3dpdGNoRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgLyoqIFRoZSBDU1MgY2xhc3NlcyB1c2VkIGJ5IHRoZSBzd2l0Y2guICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTd2l0Y2hGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqIFRoZSBkZWZhdWx0IEFkYXB0ZXIgZm9yIHRoZSBzd2l0Y2guICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbENoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqIFNldHMgdGhlIGNoZWNrZWQgc3RhdGUgb2YgdGhlIHN3aXRjaC4gKi9cbiAgICBNRENTd2l0Y2hGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDaGVja2VkID0gZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sQ2hlY2tlZChjaGVja2VkKTtcbiAgICAgICAgdGhpcy51cGRhdGVBcmlhQ2hlY2tlZF8oY2hlY2tlZCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tlZFN0eWxpbmdfKGNoZWNrZWQpO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIG9mIHRoZSBzd2l0Y2guICovXG4gICAgTURDU3dpdGNoRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sRGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlcyB0aGUgY2hhbmdlIGV2ZW50IGZvciB0aGUgc3dpdGNoIG5hdGl2ZSBjb250cm9sLiAqL1xuICAgIE1EQ1N3aXRjaEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIG5hdGl2ZUNvbnRyb2wgPSBldnQudGFyZ2V0O1xuICAgICAgICB0aGlzLnVwZGF0ZUFyaWFDaGVja2VkXyhuYXRpdmVDb250cm9sLmNoZWNrZWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRTdHlsaW5nXyhuYXRpdmVDb250cm9sLmNoZWNrZWQpO1xuICAgIH07XG4gICAgLyoqIFVwZGF0ZXMgdGhlIHN0eWxpbmcgb2YgdGhlIHN3aXRjaCBiYXNlZCBvbiBpdHMgY2hlY2tlZCBzdGF0ZS4gKi9cbiAgICBNRENTd2l0Y2hGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVDaGVja2VkU3R5bGluZ18gPSBmdW5jdGlvbiAoY2hlY2tlZCkge1xuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNIRUNLRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNIRUNLRUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTd2l0Y2hGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVBcmlhQ2hlY2tlZF8gPSBmdW5jdGlvbiAoY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5hdGl2ZUNvbnRyb2xBdHRyKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIsIFwiXCIgKyAhIWNoZWNrZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1N3aXRjaEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1N3aXRjaEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTd2l0Y2hGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7O0FBS0E7QUFNQTtBQWNBO0FBMkNBO0FBQ0E7QUFsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQURBOzs7Ozs7O0FBU0E7Ozs7QUFaQTtBQWlCQTtBQUNBO0FBcEVBO0FBQ0E7QUFJQTtBQUpBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUpBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQStCQTs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBS0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBS0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBUkE7O0FBQUE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==