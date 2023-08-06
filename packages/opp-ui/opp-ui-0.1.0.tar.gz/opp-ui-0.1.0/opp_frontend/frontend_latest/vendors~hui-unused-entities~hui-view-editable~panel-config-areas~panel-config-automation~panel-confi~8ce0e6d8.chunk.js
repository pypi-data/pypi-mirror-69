(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"],{

/***/ "./node_modules/@material/mwc-fab/mwc-fab-base.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/mwc-fab/mwc-fab-base.js ***!
  \********************************************************/
/*! exports provided: FabBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabBase", function() { return FabBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");

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




class FabBase extends lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"] {
  constructor() {
    super(...arguments);
    this.mini = false;
    this.exited = false;
    this.disabled = false;
    this.extended = false;
    this.showIconAtEnd = false;
    this.icon = '';
    this.label = '';
  }

  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: true
    });
  }

  render() {
    const classes = {
      'mdc-fab--mini': this.mini,
      'mdc-fab--exited': this.exited,
      'mdc-fab--extended': this.extended
    };
    const showLabel = this.label !== '' && this.extended;
    let iconTemplate = '';

    if (this.icon) {
      iconTemplate = lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
        <span class="material-icons mdc-fab__icon">${this.icon}</span>`;
    }

    let label = lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;

    if (showLabel) {
      label = lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`<span class="mdc-fab__label">${this.label}</span>`;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <button
          class="mdc-fab ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])(classes)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_1__["ripple"])()}">
        <div class="mdc-fab__ripple"></div>
        ${this.showIconAtEnd ? label : ''}
        ${iconTemplate}
        ${!this.showIconAtEnd ? label : ''}
      </button>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], FabBase.prototype, "mini", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], FabBase.prototype, "exited", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], FabBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], FabBase.prototype, "extended", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], FabBase.prototype, "showIconAtEnd", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()], FabBase.prototype, "icon", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()], FabBase.prototype, "label", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-fab/mwc-fab-css.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/mwc-fab/mwc-fab-css.js ***!
  \*******************************************************/
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

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-fab{position:relative;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab .mdc-fab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation .mdc-fab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:hover .mdc-fab__ripple::before{opacity:.08}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__ripple::before,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded) .mdc-fab__ripple::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active .mdc-fab__ripple::after{transition-duration:75ms;opacity:.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-fab .mdc-fab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}:host{outline:none}.mdc-fab{box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}.mdc-fab:hover,.mdc-fab:focus{box-shadow:var(--mdc-fab-box-shadow-hover, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-fab:active{box-shadow:var(--mdc-fab-box-shadow-active, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}`;

/***/ }),

/***/ "./node_modules/@material/mwc-fab/mwc-fab.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/mwc-fab/mwc-fab.js ***!
  \***************************************************/
/*! exports provided: Fab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fab", function() { return Fab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_fab_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-fab-base.js */ "./node_modules/@material/mwc-fab/mwc-fab-base.js");
/* harmony import */ var _mwc_fab_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-fab-css.js */ "./node_modules/@material/mwc-fab/mwc-fab-css.js");

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




let Fab = class Fab extends _mwc_fab_base_js__WEBPACK_IMPORTED_MODULE_2__["FabBase"] {};
Fab.styles = _mwc_fab_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Fab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-fab')], Fab);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktdW51c2VkLWVudGl0aWVzfmh1aS12aWV3LWVkaXRhYmxlfnBhbmVsLWNvbmZpZy1hcmVhc35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maX44Y2UwZTZkOC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLWZhYi1iYXNlLnRzIiwid2VicGFjazovLy9zcmMvbXdjLWZhYi1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtZmFiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7cmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvbXdjLXJpcHBsZS9yaXBwbGUtZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7aHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHksIFRlbXBsYXRlUmVzdWx0fSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQge2NsYXNzTWFwfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBGYWJCYXNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIG1pbmkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBleGl0ZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGV4dGVuZGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgc2hvd0ljb25BdEVuZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIGljb24gPSAnJztcblxuICBAcHJvcGVydHkoKSBsYWJlbCA9ICcnO1xuXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZX0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ21kYy1mYWItLW1pbmknOiB0aGlzLm1pbmksXG4gICAgICAnbWRjLWZhYi0tZXhpdGVkJzogdGhpcy5leGl0ZWQsXG4gICAgICAnbWRjLWZhYi0tZXh0ZW5kZWQnOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gJycgJiYgdGhpcy5leHRlbmRlZDtcblxuICAgIGxldCBpY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVzdWx0fHN0cmluZyA9ICcnO1xuXG4gICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgaWNvblRlbXBsYXRlID0gaHRtbGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtZmFiX19pY29uXCI+JHt0aGlzLmljb259PC9zcGFuPmA7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gaHRtbGBgO1xuXG4gICAgaWYgKHNob3dMYWJlbCkge1xuICAgICAgbGFiZWwgPSBodG1sYDxzcGFuIGNsYXNzPVwibWRjLWZhYl9fbGFiZWxcIj4ke3RoaXMubGFiZWx9PC9zcGFuPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJtZGMtZmFiICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCJcbiAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiJHt0aGlzLmxhYmVsIHx8IHRoaXMuaWNvbn1cIlxuICAgICAgICAgIC5yaXBwbGU9XCIke3JpcHBsZSgpfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWZhYl9fcmlwcGxlXCI+PC9kaXY+XG4gICAgICAgICR7dGhpcy5zaG93SWNvbkF0RW5kID8gbGFiZWwgOiAnJ31cbiAgICAgICAgJHtpY29uVGVtcGxhdGV9XG4gICAgICAgICR7IXRoaXMuc2hvd0ljb25BdEVuZCA/IGxhYmVsIDogJyd9XG4gICAgICA8L2J1dHRvbj5gO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgLm1hdGVyaWFsLWljb25ze2ZvbnQtZmFtaWx5OnZhcigtLW1kYy1pY29uLWZvbnQsIFwiTWF0ZXJpYWwgSWNvbnNcIik7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZTp2YXIoLS1tZGMtaWNvbi1zaXplLCAyNHB4KTtsaW5lLWhlaWdodDoxO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3doaXRlLXNwYWNlOm5vd3JhcDt3b3JkLXdyYXA6bm9ybWFsO2RpcmVjdGlvbjpsdHI7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpcImxpZ2FcIn0ubWRjLXRvdWNoLXRhcmdldC13cmFwcGVye2Rpc3BsYXk6aW5saW5lfS5tZGMtZWxldmF0aW9uLW92ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czppbmhlcml0O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWRjLWZhYntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo1NnB4O2hlaWdodDo1NnB4O3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmaWxsOmN1cnJlbnRDb2xvcjt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lOy1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO292ZXJmbG93OnZpc2libGU7dHJhbnNpdGlvbjpib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksb3BhY2l0eSAxNW1zIGxpbmVhciAzMG1zLHRyYW5zZm9ybSAyNzBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7Y29sb3I6I2ZmZjtjb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKX0ubWRjLWZhYiAubWRjLWVsZXZhdGlvbi1vdmVybGF5e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dG9wOjA7bGVmdDowfS5tZGMtZmFiOm5vdCgubWRjLWZhYi0tZXh0ZW5kZWQpe2JvcmRlci1yYWRpdXM6NTAlfS5tZGMtZmFiOm5vdCgubWRjLWZhYi0tZXh0ZW5kZWQpIC5tZGMtZmFiX19yaXBwbGV7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kYy1mYWI6Oi1tb3otZm9jdXMtaW5uZXJ7cGFkZGluZzowO2JvcmRlcjowfS5tZGMtZmFiOmhvdmVyLC5tZGMtZmFiOmZvY3Vze2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZGMtZmFiOmFjdGl2ZXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kYy1mYWI6YWN0aXZlLC5tZGMtZmFiOmZvY3Vze291dGxpbmU6bm9uZX0ubWRjLWZhYjpob3ZlcntjdXJzb3I6cG9pbnRlcn0ubWRjLWZhYj5zdmd7d2lkdGg6MTAwJX0ubWRjLWZhYiAubWRjLWZhYl9faWNvbnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2ZvbnQtc2l6ZToyNHB4fS5tZGMtZmFiLS1taW5pe3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9Lm1kYy1mYWItLWV4dGVuZGVke2ZvbnQtZmFtaWx5OlJvYm90bywgc2Fucy1zZXJpZjstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6Ljg3NXJlbTtsaW5lLWhlaWdodDoyLjI1cmVtO2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzouMDg5Mjg1NzE0M2VtO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItcmFkaXVzOjI0cHg7cGFkZGluZzowIDIwcHg7d2lkdGg6YXV0bzttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDpub3JtYWx9Lm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19yaXBwbGV7Ym9yZGVyLXJhZGl1czoyNHB4fS5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9faWNvbnttYXJnaW4tbGVmdDotOHB4O21hcmdpbi1yaWdodDoxMnB4fVtkaXI9cnRsXSAubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2ljb24sLm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19pY29uW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjEycHg7bWFyZ2luLXJpZ2h0Oi04cHh9Lm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19sYWJlbCsubWRjLWZhYl9faWNvbnttYXJnaW4tbGVmdDoxMnB4O21hcmdpbi1yaWdodDotOHB4fVtkaXI9cnRsXSAubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2xhYmVsKy5tZGMtZmFiX19pY29uLC5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9fbGFiZWwrLm1kYy1mYWJfX2ljb25bZGlyPXJ0bF17bWFyZ2luLWxlZnQ6LThweDttYXJnaW4tcmlnaHQ6MTJweH0ubWRjLWZhYi0tdG91Y2h7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTo0cHg7bWFyZ2luLXJpZ2h0OjRweDttYXJnaW4tbGVmdDo0cHh9Lm1kYy1mYWItLXRvdWNoIC5tZGMtZmFiX190b3VjaHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7aGVpZ2h0OjQ4cHg7bGVmdDo1MCU7d2lkdGg6NDhweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpfS5tZGMtZmFiX19sYWJlbHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OnZpc2libGV9Lm1kYy1mYWJfX2ljb257dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTgwbXMgOTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtmaWxsOmN1cnJlbnRDb2xvcjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kYy1mYWIgLm1kYy1mYWJfX2ljb257ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWRjLWZhYi0tZXhpdGVke3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyIDE1MG1zLHRyYW5zZm9ybSAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSl9Lm1kYy1mYWItLWV4aXRlZCAubWRjLWZhYl9faWNvbnt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTM1bXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpfUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX10b3tvcGFjaXR5OjB9fS5tZGMtZmFiey0tbWRjLXJpcHBsZS1mZy1zaXplOiAwOy0tbWRjLXJpcHBsZS1sZWZ0OiAwOy0tbWRjLXJpcHBsZS10b3A6IDA7LS1tZGMtcmlwcGxlLWZnLXNjYWxlOiAxOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9Lm1kYy1mYWIgLm1kYy1mYWJfX3JpcHBsZTo6YmVmb3JlLC5tZGMtZmFiIC5tZGMtZmFiX19yaXBwbGU6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLWZhYiAubWRjLWZhYl9fcmlwcGxlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtZmFiLm1kYy1yaXBwbGUtdXBncmFkZWQgLm1kYy1mYWJfX3JpcHBsZTo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZCAubWRjLWZhYl9fcmlwcGxlOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQgLm1kYy1mYWJfX3JpcHBsZTo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uIC5tZGMtZmFiX19yaXBwbGU6OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbiAubWRjLWZhYl9fcmlwcGxlOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLWZhYiAubWRjLWZhYl9fcmlwcGxlOjpiZWZvcmUsLm1kYy1mYWIgLm1kYy1mYWJfX3JpcHBsZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZCAubWRjLWZhYl9fcmlwcGxlOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtZmFiIC5tZGMtZmFiX19yaXBwbGU6OmJlZm9yZSwubWRjLWZhYiAubWRjLWZhYl9fcmlwcGxlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKX0ubWRjLWZhYjpob3ZlciAubWRjLWZhYl9fcmlwcGxlOjpiZWZvcmV7b3BhY2l0eTouMDh9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkIC5tZGMtZmFiX19yaXBwbGU6OmJlZm9yZSwubWRjLWZhYjpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzIC5tZGMtZmFiX19yaXBwbGU6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMjR9Lm1kYy1mYWI6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKSAubWRjLWZhYl9fcmlwcGxlOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtZmFiOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlIC5tZGMtZmFiX19yaXBwbGU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4yNH0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjI0fS5tZGMtZmFiIC5tZGMtZmFiX19yaXBwbGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW59Omhvc3R7b3V0bGluZTpub25lfS5tZGMtZmFie2JveC1zaGFkb3c6dmFyKC0tbWRjLWZhYi1ib3gtc2hhZG93LCAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMikpfS5tZGMtZmFiOmhvdmVyLC5tZGMtZmFiOmZvY3Vze2JveC1zaGFkb3c6dmFyKC0tbWRjLWZhYi1ib3gtc2hhZG93LWhvdmVyLCAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMikpfS5tZGMtZmFiOmFjdGl2ZXtib3gtc2hhZG93OnZhcigtLW1kYy1mYWItYm94LXNoYWRvdy1hY3RpdmUsIDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMikpfWA7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtGYWJCYXNlfSBmcm9tICcuL213Yy1mYWItYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1mYWItY3NzLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXdjLWZhYic6IEZhYjtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLWZhYicpXG5leHBvcnQgY2xhc3MgRmFiIGV4dGVuZHMgRmFiQmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQXVDQTtBQUNBO0FBdENBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQXBEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==