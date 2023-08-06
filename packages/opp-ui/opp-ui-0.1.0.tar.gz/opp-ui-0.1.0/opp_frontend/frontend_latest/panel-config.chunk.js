(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config"],{

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

/** @polymerBehavior PaperItemBehavior */

const PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};
/** @polymerBehavior */

const PaperItemBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-item-body'
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: isComponentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentLoaded", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
const isComponentLoaded = (opp, component) => opp && opp.config.components.indexOf(component) !== -1;

/***/ }),

/***/ "./src/common/dom/media_query.ts":
/*!***************************************!*\
  !*** ./src/common/dom/media_query.ts ***!
  \***************************************/
/*! exports provided: listenMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenMediaQuery", function() { return listenMediaQuery; });
/**
 * Attach a media query. Listener is called right away and when it matches.
 * @param mediaQuery media query to match.
 * @param listener listener to call when media query changes between match/unmatch
 * @returns function to remove the listener.
 */
const listenMediaQuery = (mediaQuery, matchesChanged) => {
  const mql = matchMedia(mediaQuery);

  const listener = e => matchesChanged(e.matches);

  mql.addListener(listener);
  matchesChanged(mql.matches);
  return () => mql.removeListener(listener);
};

/***/ }),

/***/ "./src/data/cloud.ts":
/*!***************************!*\
  !*** ./src/data/cloud.ts ***!
  \***************************/
/*! exports provided: fetchCloudStatus, createCloudhook, deleteCloudhook, connectCloudRemote, disconnectCloudRemote, fetchCloudSubscriptionInfo, convertThingTalk, updateCloudPref, updateCloudGoogleEntityConfig, cloudSyncGoogleAssistant, updateCloudAlexaEntityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudStatus", function() { return fetchCloudStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudhook", function() { return createCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCloudhook", function() { return deleteCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectCloudRemote", function() { return connectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectCloudRemote", function() { return disconnectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudSubscriptionInfo", function() { return fetchCloudSubscriptionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertThingTalk", function() { return convertThingTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudPref", function() { return updateCloudPref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudGoogleEntityConfig", function() { return updateCloudGoogleEntityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudSyncGoogleAssistant", function() { return cloudSyncGoogleAssistant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudAlexaEntityConfig", function() { return updateCloudAlexaEntityConfig; });
const fetchCloudStatus = opp => opp.callWS({
  type: "cloud/status"
});
const createCloudhook = (opp, webhookId) => opp.callWS({
  type: "cloud/cloudhook/create",
  webhook_id: webhookId
});
const deleteCloudhook = (opp, webhookId) => opp.callWS({
  type: "cloud/cloudhook/delete",
  webhook_id: webhookId
});
const connectCloudRemote = opp => opp.callWS({
  type: "cloud/remote/connect"
});
const disconnectCloudRemote = opp => opp.callWS({
  type: "cloud/remote/disconnect"
});
const fetchCloudSubscriptionInfo = opp => opp.callWS({
  type: "cloud/subscription"
});
const convertThingTalk = (opp, query) => opp.callWS({
  type: "cloud/thingtalk/convert",
  query
});
const updateCloudPref = (opp, prefs) => opp.callWS(Object.assign({
  type: "cloud/update_prefs"
}, prefs));
const updateCloudGoogleEntityConfig = (opp, entityId, values) => opp.callWS(Object.assign({
  type: "cloud/google_assistant/entities/update",
  entity_id: entityId
}, values));
const cloudSyncGoogleAssistant = opp => opp.callApi("POST", "cloud/google_actions/sync");
const updateCloudAlexaEntityConfig = (opp, entityId, values) => opp.callWS(Object.assign({
  type: "cloud/alexa/entities/update",
  entity_id: entityId
}, values));

/***/ }),

/***/ "./src/panels/config/op-panel-config.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/op-panel-config.ts ***!
  \**********************************************/
/*! exports provided: configSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configSections", function() { return configSections; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _layouts_opp_loading_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/opp-loading-screen */ "./src/layouts/opp-loading-screen.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/media_query */ "./src/common/dom/media_query.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");
/* harmony import */ var _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/opp-router-page */ "./src/layouts/opp-router-page.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










const configSections = {
  integrations: [{
    component: "integrations",
    path: "/config/integrations",
    translationKey: "ui.panel.config.integrations.caption",
    icon: "opp:puzzle",
    core: true
  }, {
    component: "devices",
    path: "/config/devices",
    translationKey: "ui.panel.config.devices.caption",
    icon: "opp:devices",
    core: true
  }, {
    component: "entities",
    path: "/config/entities",
    translationKey: "ui.panel.config.entities.caption",
    icon: "opp:shape",
    core: true
  }, {
    component: "areas",
    path: "/config/areas",
    translationKey: "ui.panel.config.areas.caption",
    icon: "opp:sofa",
    core: true
  }],
  automation: [{
    component: "automation",
    path: "/config/automation",
    translationKey: "ui.panel.config.automation.caption",
    icon: "opp:robot"
  }, {
    component: "scene",
    path: "/config/scene",
    translationKey: "ui.panel.config.scene.caption",
    icon: "opp:palette"
  }, {
    component: "script",
    path: "/config/script",
    translationKey: "ui.panel.config.script.caption",
    icon: "opp:script-text"
  }],
  persons: [{
    component: "person",
    path: "/config/person",
    translationKey: "ui.panel.config.person.caption",
    icon: "opp:account"
  }, {
    component: "zone",
    path: "/config/zone",
    translationKey: "ui.panel.config.zone.caption",
    icon: "opp:map-marker-radius"
  }, {
    component: "users",
    path: "/config/users",
    translationKey: "ui.panel.config.users.caption",
    icon: "opp:account-badge-horizontal",
    core: true
  }],
  general: [{
    component: "core",
    path: "/config/core",
    translationKey: "ui.panel.config.core.caption",
    icon: "opp:open-peer-power",
    core: true
  }, {
    component: "server_control",
    path: "/config/server_control",
    translationKey: "ui.panel.config.server_control.caption",
    icon: "opp:server",
    core: true
  }, {
    component: "customize",
    path: "/config/customize",
    translationKey: "ui.panel.config.customize.caption",
    icon: "opp:pencil",
    core: true,
    exportOnly: true
  }],
  other: [{
    component: "zha",
    path: "/config/zha",
    translationKey: "ui.panel.config.zha.caption",
    icon: "opp:zigbee"
  }, {
    component: "zwave",
    path: "/config/zwave",
    translationKey: "ui.panel.config.zwave.caption",
    icon: "opp:z-wave"
  }]
};

let OpPanelConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-panel-config")], function (_initialize, _OppRouterPage) {
  class OpPanelConfig extends _OppRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpPanelConfig,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          cacheAll: true,
          preloadAll: true,
          routes: {
            areas: {
              tag: "op-config-areas",
              load: () => Promise.all(/*! import() | panel-config-areas */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("panel-config-areas")]).then(__webpack_require__.bind(null, /*! ./areas/op-config-areas */ "./src/panels/config/areas/op-config-areas.ts"))
            },
            automation: {
              tag: "op-config-automation",
              load: () => Promise.all(/*! import() | panel-config-automation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e(4), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e(7), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-edit-card~hui-dialog-suggest-card~hui-markdown-card-editor~b03e5084"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e(9), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e(10), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"), __webpack_require__.e("vendors~panel-config-automation~panel-config-scene~panel-config-script~panel-config-zwave~panel-devcon"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation"), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e(8), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel~63a769ba"), __webpack_require__.e("dialog-config-flow~op-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation")]).then(__webpack_require__.bind(null, /*! ./automation/op-config-automation */ "./src/panels/config/automation/op-config-automation.js"))
            },
            cloud: {
              tag: "op-config-cloud",
              load: () => Promise.all(/*! import() | panel-config-cloud */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~panel-config-cloud"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("panel-config-cloud")]).then(__webpack_require__.bind(null, /*! ./cloud/op-config-cloud */ "./src/panels/config/cloud/op-config-cloud.ts"))
            },
            core: {
              tag: "op-config-core",
              load: () => Promise.all(/*! import() | panel-config-core */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-core"), __webpack_require__.e("vendors~panel-config-core"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("onboarding-core-config~panel-config-core~zone-detail-dialog"), __webpack_require__.e("panel-config-core")]).then(__webpack_require__.bind(null, /*! ./core/op-config-core */ "./src/panels/config/core/op-config-core.js"))
            },
            devices: {
              tag: "op-config-devices",
              load: () => Promise.all(/*! import() | panel-config-devices */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e(9), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e(10), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~~22c2c76f"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entities"), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel~63a769ba"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~panel-devcon"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-devices~panel-devcon"), __webpack_require__.e("more-info-dialog~panel-config-devices~panel-config-entities"), __webpack_require__.e("panel-config-devices~panel-config-entities"), __webpack_require__.e("panel-config-devices")]).then(__webpack_require__.bind(null, /*! ./devices/op-config-devices */ "./src/panels/config/devices/op-config-devices.ts"))
            },
            server_control: {
              tag: "op-config-server-control",
              load: () => Promise.all(/*! import() | panel-config-server-control */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e("vendors~panel-config-server-control"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("panel-config-server-control")]).then(__webpack_require__.bind(null, /*! ./server_control/op-config-server-control */ "./src/panels/config/server_control/op-config-server-control.js"))
            },
            customize: {
              tag: "op-config-customize",
              load: () => Promise.all(/*! import() | panel-config-customize */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e(7), __webpack_require__.e("vendors~panel-config-customize"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("panel-config-customize")]).then(__webpack_require__.bind(null, /*! ./customize/op-config-customize */ "./src/panels/config/customize/op-config-customize.js"))
            },
            dashboard: {
              tag: "op-config-dashboard",
              load: () => Promise.all(/*! import() | panel-config-dashboard */[__webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./dashboard/op-config-dashboard */ "./src/panels/config/dashboard/op-config-dashboard.ts"))
            },
            entities: {
              tag: "op-config-entities",
              load: () => Promise.all(/*! import() | panel-config-entities */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e(7), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e(10), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entities"), __webpack_require__.e("vendors~panel-config-entities"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e("more-info-dialog~panel-config-devices~panel-config-entities"), __webpack_require__.e("panel-config-devices~panel-config-entities"), __webpack_require__.e("panel-config-entities")]).then(__webpack_require__.bind(null, /*! ./entities/op-config-entities */ "./src/panels/config/entities/op-config-entities.ts"))
            },
            integrations: {
              tag: "op-config-integrations",
              load: () => Promise.all(/*! import() | panel-config-integrations */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e(10), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"), __webpack_require__.e("vendors~panel-config-integrations"), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("panel-config-integrations~zha-add-group-page~zha-devices-page~zha-group-page~zha-groups-dashboard"), __webpack_require__.e("panel-config-integrations")]).then(__webpack_require__.bind(null, /*! ./integrations/op-config-integrations */ "./src/panels/config/integrations/op-config-integrations.ts"))
            },
            person: {
              tag: "op-config-person",
              load: () => Promise.all(/*! import() | panel-config-person */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("panel-config-person")]).then(__webpack_require__.bind(null, /*! ./person/op-config-person */ "./src/panels/config/person/op-config-person.ts"))
            },
            script: {
              tag: "op-config-script",
              load: () => Promise.all(/*! import() | panel-config-script */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e(4), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e(7), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-edit-card~hui-dialog-suggest-card~hui-markdown-card-editor~b03e5084"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e(9), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"), __webpack_require__.e("vendors~panel-config-automation~panel-config-scene~panel-config-script~panel-config-zwave~panel-devcon"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e(8), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e("dialog-config-flow~op-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-script")]).then(__webpack_require__.bind(null, /*! ./script/op-config-script */ "./src/panels/config/script/op-config-script.js"))
            },
            scene: {
              tag: "op-config-scene",
              load: () => Promise.all(/*! import() | panel-config-scene */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e(10), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"), __webpack_require__.e("vendors~panel-config-automation~panel-config-scene~panel-config-script~panel-config-zwave~panel-devcon"), __webpack_require__.e("vendors~panel-config-scene"), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-scene~person-detail-dialog"), __webpack_require__.e("panel-config-scene")]).then(__webpack_require__.bind(null, /*! ./scene/op-config-scene */ "./src/panels/config/scene/op-config-scene.ts"))
            },
            users: {
              tag: "op-config-users",
              load: () => Promise.all(/*! import() | panel-config-users */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("panel-config-users")]).then(__webpack_require__.bind(null, /*! ./users/op-config-users */ "./src/panels/config/users/op-config-users.js"))
            },
            zone: {
              tag: "op-config-zone",
              load: () => Promise.all(/*! import() | panel-config-zone */[__webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~8ce0e6d8"), __webpack_require__.e(10), __webpack_require__.e("vendors~panel-config-zone"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-integr~cab94fff"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e("panel-config-zone")]).then(__webpack_require__.bind(null, /*! ./zone/op-config-zone */ "./src/panels/config/zone/op-config-zone.ts"))
            },
            zha: {
              tag: "zha-config-dashboard-router",
              load: () => __webpack_require__.e(/*! import() | panel-config-zha */ "panel-config-zha").then(__webpack_require__.bind(null, /*! ./zha/zha-config-dashboard-router */ "./src/panels/config/zha/zha-config-dashboard-router.ts"))
            },
            zwave: {
              tag: "op-config-zwave",
              load: () => Promise.all(/*! import() | panel-config-zwave */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~5bc5a551"), __webpack_require__.e(7), __webpack_require__.e("vendors~panel-config-automation~panel-config-scene~panel-config-script~panel-config-zwave~panel-devcon"), __webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("panel-config-zwave")]).then(__webpack_require__.bind(null, /*! ./zwave/op-config-zwave */ "./src/panels/config/zwave/op-config-zwave.js"))
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_wideSidebar",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_wide",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_coreUserData",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_showAdvanced",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cloudStatus",
      value: void 0
    }, {
      kind: "field",
      key: "_listeners",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OpPanelConfig.prototype), "connectedCallback", this).call(this);

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_6__["listenMediaQuery"])("(min-width: 1040px)", matches => {
          this._wide = matches;
        }));

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_6__["listenMediaQuery"])("(min-width: 1296px)", matches => {
          this._wideSidebar = matches;
        }));

        this._listeners.push(Object(_data_frontend__WEBPACK_IMPORTED_MODULE_7__["getOptimisticFrontendUserDataCollection"])(this.opp.connection, "core").subscribe(coreUserData => {
          this._coreUserData = coreUserData || {};
          this._showAdvanced = !!(this._coreUserData && this._coreUserData.showAdvanced);
        }));
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OpPanelConfig.prototype), "disconnectedCallback", this).call(this);

        while (this._listeners.length) {
          this._listeners.pop()();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpPanelConfig.prototype), "firstUpdated", this).call(this, changedProps);

        if (Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(this.opp, "cloud")) {
          this._updateCloudStatus();
        }

        this.addEventListener("op-refresh-cloud-status", () => this._updateCloudStatus());
        this.style.setProperty("--app-header-background-color", "var(--sidebar-background-color)");
        this.style.setProperty("--app-header-text-color", "var(--sidebar-text-color)");
        this.style.setProperty("--app-header-border-bottom", "1px solid var(--divider-color)");
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        const isWide = this.opp.dockedSidebar === "docked" ? this._wideSidebar : this._wide;

        if ("setProperties" in el) {
          // As long as we have Polymer panels
          el.setProperties({
            route: this.routeTail,
            opp: this.opp,
            showAdvanced: this._showAdvanced,
            isWide,
            narrow: this.narrow,
            cloudStatus: this._cloudStatus
          });
        } else {
          el.route = this.routeTail;
          el.opp = this.opp;
          el.showAdvanced = this._showAdvanced;
          el.isWide = isWide;
          el.narrow = this.narrow;
          el.cloudStatus = this._cloudStatus;
        }
      }
    }, {
      kind: "method",
      key: "_updateCloudStatus",
      value: async function _updateCloudStatus() {
        this._cloudStatus = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_5__["fetchCloudStatus"])(this.opp);

        if (this._cloudStatus.cloud === "connecting") {
          setTimeout(() => this._updateCloudStatus(), 5000);
        }
      }
    }]
  };
}, _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_8__["OppRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9tZWRpYV9xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9vcC1wYW5lbC1jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LCAucGFwZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucGFwZXItaXRlbSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLCAucGFwZXItaXRlbVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXJvbi1zZWxlY3RlZCksIC5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsIGJvbGQpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLCAucGFwZXItaXRlbVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyksIC5wYXBlci1pdGVtOmZvY3VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKTpiZWZvcmUsIC5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGNvbnN0IGlzQ29tcG9uZW50TG9hZGVkID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGNvbXBvbmVudDogc3RyaW5nXG4pOiBib29sZWFuID0+IG9wcCAmJiBvcHAuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbiIsIi8qKlxuICogQXR0YWNoIGEgbWVkaWEgcXVlcnkuIExpc3RlbmVyIGlzIGNhbGxlZCByaWdodCBhd2F5IGFuZCB3aGVuIGl0IG1hdGNoZXMuXG4gKiBAcGFyYW0gbWVkaWFRdWVyeSBtZWRpYSBxdWVyeSB0byBtYXRjaC5cbiAqIEBwYXJhbSBsaXN0ZW5lciBsaXN0ZW5lciB0byBjYWxsIHdoZW4gbWVkaWEgcXVlcnkgY2hhbmdlcyBiZXR3ZWVuIG1hdGNoL3VubWF0Y2hcbiAqIEByZXR1cm5zIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ZW5NZWRpYVF1ZXJ5ID0gKFxuICBtZWRpYVF1ZXJ5OiBzdHJpbmcsXG4gIG1hdGNoZXNDaGFuZ2VkOiAobWF0Y2hlczogYm9vbGVhbikgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IG1xbCA9IG1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGUpID0+IG1hdGNoZXNDaGFuZ2VkKGUubWF0Y2hlcyk7XG4gIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIG1hdGNoZXNDaGFuZ2VkKG1xbC5tYXRjaGVzKTtcbiAgcmV0dXJuICgpID0+IG1xbC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG59O1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRW50aXR5RmlsdGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlclwiO1xuaW1wb3J0IHsgQXV0b21hdGlvbkNvbmZpZyB9IGZyb20gXCIuL2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IFBsYWNlaG9sZGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL3BhbmVscy9jb25maWcvYXV0b21hdGlvbi90aGluZ3RhbGsvZGlhbG9nLXRoaW5ndGFsa1wiO1xuXG5pbnRlcmZhY2UgQ2xvdWRTdGF0dXNCYXNlIHtcbiAgbG9nZ2VkX2luOiBib29sZWFuO1xuICBjbG91ZDogXCJkaXNjb25uZWN0ZWRcIiB8IFwiY29ubmVjdGluZ1wiIHwgXCJjb25uZWN0ZWRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbiAgb3ZlcnJpZGVfbmFtZT86IHN0cmluZztcbiAgYWxpYXNlcz86IHN0cmluZ1tdO1xuICBkaXNhYmxlXzJmYT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxleGFFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uIHtcbiAgY29tbW9uX25hbWU6IHN0cmluZztcbiAgZXhwaXJlX2RhdGU6IHN0cmluZztcbiAgZmluZ2VycHJpbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZFByZWZlcmVuY2VzIHtcbiAgZ29vZ2xlX2VuYWJsZWQ6IGJvb2xlYW47XG4gIGFsZXhhX2VuYWJsZWQ6IGJvb2xlYW47XG4gIHJlbW90ZV9lbmFibGVkOiBib29sZWFuO1xuICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNsb3VkaG9va3M6IHsgW3dlYmhvb2tJZDogc3RyaW5nXTogQ2xvdWRXZWJob29rIH07XG4gIGdvb2dsZV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogR29vZ2xlRW50aXR5Q29uZmlnO1xuICB9O1xuICBhbGV4YV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogQWxleGFFbnRpdHlDb25maWc7XG4gIH07XG4gIGFsZXhhX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbiAgZ29vZ2xlX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXNMb2dnZWRJbiA9IENsb3VkU3RhdHVzQmFzZSAmIHtcbiAgZW1haWw6IHN0cmluZztcbiAgZ29vZ2xlX2VudGl0aWVzOiBFbnRpdHlGaWx0ZXI7XG4gIGdvb2dsZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgYWxleGFfZW50aXRpZXM6IEVudGl0eUZpbHRlcjtcbiAgcHJlZnM6IENsb3VkUHJlZmVyZW5jZXM7XG4gIHJlbW90ZV9kb21haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVtb3RlX2Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgcmVtb3RlX2NlcnRpZmljYXRlOiB1bmRlZmluZWQgfCBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXMgPSBDbG91ZFN0YXR1c0Jhc2UgfCBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkluZm8ge1xuICBodW1hbl9kZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkV2ViaG9vayB7XG4gIHdlYmhvb2tfaWQ6IHN0cmluZztcbiAgY2xvdWRob29rX2lkOiBzdHJpbmc7XG4gIGNsb3VkaG9va191cmw6IHN0cmluZztcbiAgbWFuYWdlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhpbmdUYWxrQ29udmVyc2lvbiB7XG4gIGNvbmZpZzogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPjtcbiAgcGxhY2Vob2xkZXJzOiBQbGFjZWhvbGRlckNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQ2xvdWRTdGF0dXMgPSAob3BwOiBPcGVuUGVlclBvd2VyKSA9PlxuICBvcHAuY2FsbFdTPENsb3VkU3RhdHVzPih7IHR5cGU6IFwiY2xvdWQvc3RhdHVzXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbG91ZGhvb2sgPSAob3BwOiBPcGVuUGVlclBvd2VyLCB3ZWJob29rSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUzxDbG91ZFdlYmhvb2s+KHtcbiAgICB0eXBlOiBcImNsb3VkL2Nsb3VkaG9vay9jcmVhdGVcIixcbiAgICB3ZWJob29rX2lkOiB3ZWJob29rSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ2xvdWRob29rID0gKG9wcDogT3BlblBlZXJQb3dlciwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY2xvdWQvY2xvdWRob29rL2RlbGV0ZVwiLFxuICAgIHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0Q2xvdWRSZW1vdGUgPSAob3BwOiBPcGVuUGVlclBvd2VyKSA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9jb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGlzY29ubmVjdENsb3VkUmVtb3RlID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjbG91ZC9yZW1vdGUvZGlzY29ubmVjdFwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2xvdWRTdWJzY3JpcHRpb25JbmZvID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxXUzxTdWJzY3JpcHRpb25JbmZvPih7IHR5cGU6IFwiY2xvdWQvc3Vic2NyaXB0aW9uXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0VGhpbmdUYWxrID0gKG9wcDogT3BlblBlZXJQb3dlciwgcXVlcnk6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUzxUaGluZ1RhbGtDb252ZXJzaW9uPih7IHR5cGU6IFwiY2xvdWQvdGhpbmd0YWxrL2NvbnZlcnRcIiwgcXVlcnkgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDbG91ZFByZWYgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgcHJlZnM6IHtcbiAgICBnb29nbGVfZW5hYmxlZD86IENsb3VkUHJlZmVyZW5jZXNbXCJnb29nbGVfZW5hYmxlZFwiXTtcbiAgICBhbGV4YV9lbmFibGVkPzogQ2xvdWRQcmVmZXJlbmNlc1tcImFsZXhhX2VuYWJsZWRcIl07XG4gICAgYWxleGFfcmVwb3J0X3N0YXRlPzogQ2xvdWRQcmVmZXJlbmNlc1tcImFsZXhhX3JlcG9ydF9zdGF0ZVwiXTtcbiAgICBnb29nbGVfcmVwb3J0X3N0YXRlPzogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9yZXBvcnRfc3RhdGVcIl07XG4gICAgZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3Bpbj86IENsb3VkUHJlZmVyZW5jZXNbXCJnb29nbGVfc2VjdXJlX2RldmljZXNfcGluXCJdO1xuICB9XG4pID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY2xvdWQvdXBkYXRlX3ByZWZzXCIsXG4gICAgLi4ucHJlZnMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xvdWRHb29nbGVFbnRpdHlDb25maWcgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFsdWVzOiBHb29nbGVFbnRpdHlDb25maWdcbikgPT5cbiAgb3BwLmNhbGxXUzxHb29nbGVFbnRpdHlDb25maWc+KHtcbiAgICB0eXBlOiBcImNsb3VkL2dvb2dsZV9hc3Npc3RhbnQvZW50aXRpZXMvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50ID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxBcGkoXCJQT1NUXCIsIFwiY2xvdWQvZ29vZ2xlX2FjdGlvbnMvc3luY1wiKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFsdWVzOiBBbGV4YUVudGl0eUNvbmZpZ1xuKSA9PlxuICBvcHAuY2FsbFdTPEFsZXhhRW50aXR5Q29uZmlnPih7XG4gICAgdHlwZTogXCJjbG91ZC9hbGV4YS9lbnRpdGllcy91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBwcm9wZXJ0eSwgUHJvcGVydHlWYWx1ZXMsIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIi4uLy4uL2xheW91dHMvb3BwLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIsIFJvdXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1cywgZmV0Y2hDbG91ZFN0YXR1cyB9IGZyb20gXCIuLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBsaXN0ZW5NZWRpYVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vbWVkaWFfcXVlcnlcIjtcbmltcG9ydCB7XG4gIGdldE9wdGltaXN0aWNGcm9udGVuZFVzZXJEYXRhQ29sbGVjdGlvbixcbiAgQ29yZUZyb250ZW5kVXNlckRhdGEsXG59IGZyb20gXCIuLi8uLi9kYXRhL2Zyb250ZW5kXCI7XG5pbXBvcnQgeyBPcHBSb3V0ZXJQYWdlLCBSb3V0ZXJPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2xheW91dHMvb3BwLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbiB9IGZyb20gXCIuLi8uLi9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2VcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgT1BQRG9tRXZlbnRzIHtcbiAgICBcIm9wLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnU2VjdGlvbnM6IHsgW25hbWU6IHN0cmluZ106IFBhZ2VOYXZpZ2F0aW9uW10gfSA9IHtcbiAgaW50ZWdyYXRpb25zOiBbXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcImludGVncmF0aW9uc1wiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL2ludGVncmF0aW9uc1wiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcIm9wcDpwdXp6bGVcIixcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiZGV2aWNlc1wiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL2RldmljZXNcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOmRldmljZXNcIixcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiZW50aXRpZXNcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9lbnRpdGllc1wiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOnNoYXBlXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcImFyZWFzXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvYXJlYXNcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5hcmVhcy5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcIm9wcDpzb2ZhXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGF1dG9tYXRpb246IFtcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiYXV0b21hdGlvblwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL2F1dG9tYXRpb25cIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOnJvYm90XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwic2NlbmVcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9zY2VuZVwiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOnBhbGV0dGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJzY3JpcHRcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9zY3JpcHRcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuY2FwdGlvblwiLFxuICAgICAgaWNvbjogXCJvcHA6c2NyaXB0LXRleHRcIixcbiAgICB9LFxuICBdLFxuICBwZXJzb25zOiBbXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcInBlcnNvblwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL3BlcnNvblwiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcIm9wcDphY2NvdW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiem9uZVwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL3pvbmVcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy56b25lLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOm1hcC1tYXJrZXItcmFkaXVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwidXNlcnNcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy91c2Vyc1wiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOmFjY291bnQtYmFkZ2UtaG9yaXpvbnRhbFwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBnZW5lcmFsOiBbXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcImNvcmVcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9jb3JlXCIsXG4gICAgICB0cmFuc2xhdGlvbktleTogXCJ1aS5wYW5lbC5jb25maWcuY29yZS5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcIm9wcDpvcGVuLXBlZXItcG93ZXJcIixcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwic2VydmVyX2NvbnRyb2xcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9zZXJ2ZXJfY29udHJvbFwiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOnNlcnZlclwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJjdXN0b21pemVcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9jdXN0b21pemVcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuY2FwdGlvblwiLFxuICAgICAgaWNvbjogXCJvcHA6cGVuY2lsXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgZXhwb3J0T25seTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBvdGhlcjogW1xuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJ6aGFcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy96aGFcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy56aGEuY2FwdGlvblwiLFxuICAgICAgaWNvbjogXCJvcHA6emlnYmVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiendhdmVcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy96d2F2ZVwiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNhcHRpb25cIixcbiAgICAgIGljb246IFwib3BwOnotd2F2ZVwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLXBhbmVsLWNvbmZpZ1wiKVxuY2xhc3MgT3BQYW5lbENvbmZpZyBleHRlbmRzIE9wcFJvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIGNhY2hlQWxsOiB0cnVlLFxuICAgIHByZWxvYWRBbGw6IHRydWUsXG4gICAgcm91dGVzOiB7XG4gICAgICBhcmVhczoge1xuICAgICAgICB0YWc6IFwib3AtY29uZmlnLWFyZWFzXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctYXJlYXNcIiAqLyBcIi4vYXJlYXMvb3AtY29uZmlnLWFyZWFzXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGF1dG9tYXRpb246IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy1hdXRvbWF0aW9uXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctYXV0b21hdGlvblwiICovIFwiLi9hdXRvbWF0aW9uL29wLWNvbmZpZy1hdXRvbWF0aW9uXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGNsb3VkOiB7XG4gICAgICAgIHRhZzogXCJvcC1jb25maWctY2xvdWRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1jbG91ZFwiICovIFwiLi9jbG91ZC9vcC1jb25maWctY2xvdWRcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgY29yZToge1xuICAgICAgICB0YWc6IFwib3AtY29uZmlnLWNvcmVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1jb3JlXCIgKi8gXCIuL2NvcmUvb3AtY29uZmlnLWNvcmVcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgZGV2aWNlczoge1xuICAgICAgICB0YWc6IFwib3AtY29uZmlnLWRldmljZXNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1kZXZpY2VzXCIgKi8gXCIuL2RldmljZXMvb3AtY29uZmlnLWRldmljZXNcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgc2VydmVyX2NvbnRyb2w6IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy1zZXJ2ZXItY29udHJvbFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXNlcnZlci1jb250cm9sXCIgKi8gXCIuL3NlcnZlcl9jb250cm9sL29wLWNvbmZpZy1zZXJ2ZXItY29udHJvbFwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBjdXN0b21pemU6IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy1jdXN0b21pemVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1jdXN0b21pemVcIiAqLyBcIi4vY3VzdG9taXplL29wLWNvbmZpZy1jdXN0b21pemVcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIHRhZzogXCJvcC1jb25maWctZGFzaGJvYXJkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctZGFzaGJvYXJkXCIgKi8gXCIuL2Rhc2hib2FyZC9vcC1jb25maWctZGFzaGJvYXJkXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIHRhZzogXCJvcC1jb25maWctZW50aXRpZXNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1lbnRpdGllc1wiICovIFwiLi9lbnRpdGllcy9vcC1jb25maWctZW50aXRpZXNcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgaW50ZWdyYXRpb25zOiB7XG4gICAgICAgIHRhZzogXCJvcC1jb25maWctaW50ZWdyYXRpb25zXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctaW50ZWdyYXRpb25zXCIgKi8gXCIuL2ludGVncmF0aW9ucy9vcC1jb25maWctaW50ZWdyYXRpb25zXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB0YWc6IFwib3AtY29uZmlnLXBlcnNvblwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXBlcnNvblwiICovIFwiLi9wZXJzb24vb3AtY29uZmlnLXBlcnNvblwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzY3JpcHQ6IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy1zY3JpcHRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1zY3JpcHRcIiAqLyBcIi4vc2NyaXB0L29wLWNvbmZpZy1zY3JpcHRcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgc2NlbmU6IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy1zY2VuZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXNjZW5lXCIgKi8gXCIuL3NjZW5lL29wLWNvbmZpZy1zY2VuZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB1c2Vyczoge1xuICAgICAgICB0YWc6IFwib3AtY29uZmlnLXVzZXJzXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctdXNlcnNcIiAqLyBcIi4vdXNlcnMvb3AtY29uZmlnLXVzZXJzXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHpvbmU6IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy16b25lXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctem9uZVwiICovIFwiLi96b25lL29wLWNvbmZpZy16b25lXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHpoYToge1xuICAgICAgICB0YWc6IFwiemhhLWNvbmZpZy1kYXNoYm9hcmQtcm91dGVyXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctemhhXCIgKi8gXCIuL3poYS96aGEtY29uZmlnLWRhc2hib2FyZC1yb3V0ZXJcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgendhdmU6IHtcbiAgICAgICAgdGFnOiBcIm9wLWNvbmZpZy16d2F2ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXp3YXZlXCIgKi8gXCIuL3p3YXZlL29wLWNvbmZpZy16d2F2ZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF93aWRlU2lkZWJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF93aWRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvcmVVc2VyRGF0YT86IENvcmVGcm9udGVuZFVzZXJEYXRhO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93QWR2YW5jZWQgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1cztcblxuICBwcml2YXRlIF9saXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICBsaXN0ZW5NZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTA0MHB4KVwiLCAobWF0Y2hlcykgPT4ge1xuICAgICAgICB0aGlzLl93aWRlID0gbWF0Y2hlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGxpc3Rlbk1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxMjk2cHgpXCIsIChtYXRjaGVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3dpZGVTaWRlYmFyID0gbWF0Y2hlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGdldE9wdGltaXN0aWNGcm9udGVuZFVzZXJEYXRhQ29sbGVjdGlvbihcbiAgICAgICAgdGhpcy5vcHAuY29ubmVjdGlvbixcbiAgICAgICAgXCJjb3JlXCJcbiAgICAgICkuc3Vic2NyaWJlKChjb3JlVXNlckRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5fY29yZVVzZXJEYXRhID0gY29yZVVzZXJEYXRhIHx8IHt9O1xuICAgICAgICB0aGlzLl9zaG93QWR2YW5jZWQgPSAhIShcbiAgICAgICAgICB0aGlzLl9jb3JlVXNlckRhdGEgJiYgdGhpcy5fY29yZVVzZXJEYXRhLnNob3dBZHZhbmNlZFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2hpbGUgKHRoaXMuX2xpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wb3AoKSEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoaXNDb21wb25lbnRMb2FkZWQodGhpcy5vcHAsIFwiY2xvdWRcIikpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsb3VkU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm9wLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIsICgpID0+XG4gICAgICB0aGlzLl91cGRhdGVDbG91ZFN0YXR1cygpXG4gICAgKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLWFwcC1oZWFkZXItYmFja2dyb3VuZC1jb2xvclwiLFxuICAgICAgXCJ2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpXCJcbiAgICApO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tYXBwLWhlYWRlci10ZXh0LWNvbG9yXCIsXG4gICAgICBcInZhcigtLXNpZGViYXItdGV4dC1jb2xvcilcIlxuICAgICk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1hcHAtaGVhZGVyLWJvcmRlci1ib3R0b21cIixcbiAgICAgIFwiMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpXCJcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChlbCkge1xuICAgIGNvbnN0IGlzV2lkZSA9XG4gICAgICB0aGlzLm9wcC5kb2NrZWRTaWRlYmFyID09PSBcImRvY2tlZFwiID8gdGhpcy5fd2lkZVNpZGViYXIgOiB0aGlzLl93aWRlO1xuXG4gICAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIGVsKSB7XG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGhhdmUgUG9seW1lciBwYW5lbHNcbiAgICAgIChlbCBhcyBQb2x5bWVyRWxlbWVudCkuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIHJvdXRlOiB0aGlzLnJvdXRlVGFpbCxcbiAgICAgICAgb3BwOiB0aGlzLm9wcCxcbiAgICAgICAgc2hvd0FkdmFuY2VkOiB0aGlzLl9zaG93QWR2YW5jZWQsXG4gICAgICAgIGlzV2lkZSxcbiAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgICAgY2xvdWRTdGF0dXM6IHRoaXMuX2Nsb3VkU3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJvdXRlID0gdGhpcy5yb3V0ZVRhaWw7XG4gICAgICBlbC5vcHAgPSB0aGlzLm9wcDtcbiAgICAgIGVsLnNob3dBZHZhbmNlZCA9IHRoaXMuX3Nob3dBZHZhbmNlZDtcbiAgICAgIGVsLmlzV2lkZSA9IGlzV2lkZTtcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgICAgZWwuY2xvdWRTdGF0dXMgPSB0aGlzLl9jbG91ZFN0YXR1cztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDbG91ZFN0YXR1cygpIHtcbiAgICB0aGlzLl9jbG91ZFN0YXR1cyA9IGF3YWl0IGZldGNoQ2xvdWRTdGF0dXModGhpcy5vcHApO1xuXG4gICAgaWYgKHRoaXMuX2Nsb3VkU3RhdHVzLmNsb3VkID09PSBcImNvbm5lY3RpbmdcIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl91cGRhdGVDbG91ZFN0YXR1cygpLCA1MDAwKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLXBhbmVsLWNvbmZpZ1wiOiBPcFBhbmVsQ29uZmlnO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFvQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdEQTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUE7QUFDQTs7Ozs7Ozs7Ozs7QUFEQTtBQWNBO0FBQ0E7QUFmQTs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7Ozs7OztBQU1BO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBREE7QUFJQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBV0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFHQTtBQU1BO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF2R0E7QUFDQTtBQWdIQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzeUJBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSwwMEdBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSx1d0JBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxncUNBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxvOUZBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxzMEJBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxxdENBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw4aUJBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSx1OURBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxpNkRBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw0eUJBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxxMEZBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw4MERBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxzeUJBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSwrbkNBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw4T0FFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLHF3Q0FFQTtBQUpBO0FBakhBO0FBSkE7Ozs7O0FBK0hBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7OztBQUFBOzs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBSUE7QUFJQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaE9BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=