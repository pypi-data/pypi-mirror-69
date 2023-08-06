(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-zone"],{

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

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




class RippleBase extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.interactionNode = this;
  }

  connectedCallback() {
    if (this.interactionNode === this) {
      const parent = this.parentNode;

      if (parent instanceof HTMLElement) {
        this.interactionNode = parent;
      } else if (parent instanceof ShadowRoot && parent.host instanceof HTMLElement) {
        this.interactionNode = parent.host;
      }
    }

    super.connectedCallback();
  } // TODO(sorvell) #css: sizing.


  render() {
    const classes = {
      'mdc-ripple-surface--primary': this.primary,
      'mdc-ripple-surface--accent': this.accent
    };
    const {
      disabled,
      unbounded,
      active,
      interactionNode
    } = this;
    const rippleOptions = {
      disabled,
      unbounded,
      interactionNode
    };

    if (active !== undefined) {
      rippleOptions.active = active;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div .ripple="${Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions)}"
          class="mdc-ripple-surface ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}"></div>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
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

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");

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




let Ripple = class Ripple extends _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"] {};
Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/







/*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-listbox/paper-listbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-listbox/paper-listbox.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/





/**
Material design:
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-listbox',
  behaviors: [_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronMenuBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'listbox'
  }
});

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctem9uZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1iYXNlLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94LmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7aHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHl9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IHtyaXBwbGUsIFJpcHBsZU9wdGlvbnN9IGZyb20gJy4vcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHByaW1hcnkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBhY3RpdmU6IGJvb2xlYW58dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjY2VudCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHthdHRyaWJ1dGU6IGZhbHNlfSkgcHJvdGVjdGVkIGludGVyYWN0aW9uTm9kZTogSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uTm9kZSA9PT0gdGhpcykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgU2hhZG93Um9vdCB8IG51bGw7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSBwYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgcGFyZW50Lmhvc3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudC5ob3N0O1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLy8gVE9ETyhzb3J2ZWxsKSAjY3NzOiBzaXppbmcuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICB9O1xuICAgIGNvbnN0IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBhY3RpdmUsIGludGVyYWN0aW9uTm9kZX0gPSB0aGlzO1xuICAgIGNvbnN0IHJpcHBsZU9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgaW50ZXJhY3Rpb25Ob2RlfTtcbiAgICBpZiAoYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZU9wdGlvbnMuYWN0aXZlID0gYWN0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgLnJpcHBsZT1cIiR7cmlwcGxlKHJpcHBsZU9wdGlvbnMpfVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtcmlwcGxlLXN1cmZhY2UgJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L2Rpdj5gO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1yaXBwbGUtc3VyZmFjZXstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtcmlwcGxlLXN1cmZhY2U6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF17b3ZlcmZsb3c6dmlzaWJsZX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gNTAlKTtsZWZ0OmNhbGMoNTAlIC0gNTAlKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2MjAwZWU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2V7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7UmlwcGxlQmFzZX0gZnJvbSAnLi9td2MtcmlwcGxlLWJhc2UuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1yaXBwbGUnOiBSaXBwbGU7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ213Yy1yaXBwbGUnKVxuZXhwb3J0IGNsYXNzIFJpcHBsZSBleHRlbmRzIFJpcHBsZUJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gc3R5bGU7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge0lyb25NZW51QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bTWVudXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9tZW51cy5odG1sKVxuXG5gPHBhcGVyLWxpc3Rib3g+YCBpbXBsZW1lbnRzIGFuIGFjY2Vzc2libGUgbGlzdGJveCBjb250cm9sIHdpdGggTWF0ZXJpYWwgRGVzaWduXG5zdHlsaW5nLiBUaGUgZm9jdXNlZCBpdGVtIGlzIGhpZ2hsaWdodGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gaGFzIGJvbGRlZCB0ZXh0LlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG5BbiBpbml0aWFsIHNlbGVjdGlvbiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggdGhlIGBzZWxlY3RlZGAgYXR0cmlidXRlLlxuXG4gICAgPHBhcGVyLWxpc3Rib3ggc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG5NYWtlIGEgbXVsdGktc2VsZWN0IGxpc3Rib3ggd2l0aCB0aGUgYG11bHRpYCBhdHRyaWJ1dGUuIEl0ZW1zIGluIGEgbXVsdGktc2VsZWN0XG5saXN0Ym94IGNhbiBiZSBkZXNlbGVjdGVkLCBhbmQgbXVsdGlwbGUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQuXG5cbiAgICA8cGFwZXItbGlzdGJveCBtdWx0aT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1saXN0Ym94LWJhY2tncm91bmQtY29sb3JgICAgfCBNZW51IGJhY2tncm91bmQgY29sb3IgfFxuYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItbGlzdGJveC1jb2xvcmAgICAgICAgICAgICAgIHwgTWVudSBmb3JlZ3JvdW5kIGNvbG9yIHxcbmAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWxpc3Rib3hgICAgICAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxpc3Rib3ggfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmA8cGFwZXItbGlzdGJveD5gIGhhcyBgcm9sZT1cImxpc3Rib3hcImAgYnkgZGVmYXVsdC4gQSBtdWx0aS1zZWxlY3QgbGlzdGJveCB3aWxsXG5hbHNvIGhhdmUgYGFyaWEtbXVsdGlzZWxlY3RhYmxlYCBzZXQuIEl0IGltcGxlbWVudHMga2V5IGJpbmRpbmdzIHRvIG5hdmlnYXRlXG50aHJvdWdoIHRoZSBsaXN0Ym94IHdpdGggdGhlIHVwIGFuZCBkb3duIGFycm93IGtleXMsIGVzYyB0byBleGl0IHRoZSBsaXN0Ym94LFxuYW5kIGVudGVyIHRvIGFjdGl2YXRlIGEgbGlzdGJveCBpdGVtLiBUeXBpbmcgdGhlIGZpcnN0IGxldHRlciBvZiBhIGxpc3Rib3ggaXRlbVxud2lsbCBhbHNvIGZvY3VzIGl0LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWxpc3Rib3hcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItbGlzdGJveC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWxpc3Rib3gtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWxpc3Rib3g7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1saXN0Ym94JyxcbiAgYmVoYXZpb3JzOiBbSXJvbk1lbnVCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2xpc3Rib3gnfVxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB7XG4gICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQThCQTtBQUNBO0FBN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6Q0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFyQkE7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9