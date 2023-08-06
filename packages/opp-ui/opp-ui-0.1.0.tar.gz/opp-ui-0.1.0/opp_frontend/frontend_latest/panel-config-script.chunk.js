(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-script"],{

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

/***/ }),

/***/ "./src/components/op-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/op-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: OpPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPaperDropdownClass", function() { return OpPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

class OpPaperDropdownClass extends paperDropdownClass {
  ready() {
    super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      if (window.getComputedStyle(this).direction === "rtl") {
        this.style.textAlign = "right";
      }
    }, 100);
  }

}
customElements.define("op-paper-dropdown-menu", OpPaperDropdownClass);

/***/ }),

/***/ "./src/data/script.ts":
/*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
/*! exports provided: triggerScript, deleteScript, showScriptEditor, getScriptEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerScript", function() { return triggerScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScript", function() { return deleteScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScriptEditor", function() { return showScriptEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptEditorInitData", function() { return getScriptEditorInitData; });
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");


const triggerScript = (opp, entityId, variables) => opp.callService("script", Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(entityId), variables);
const deleteScript = (opp, objectId) => opp.callApi("DELETE", `config/script/config/${objectId}`);
let inititialScriptEditorData;
const showScriptEditor = (el, data) => {
  inititialScriptEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(el, "/config/script/new");
};
const getScriptEditorInitData = () => {
  const data = inititialScriptEditorData;
  inititialScriptEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from opp object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      opp: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(opp.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/config/script/op-config-script.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/op-config-script.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _op_script_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-script-editor */ "./src/panels/config/script/op-script-editor.ts");
/* harmony import */ var _op_script_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./op-script-picker */ "./src/panels/config/script/op-script-picker.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");








class OpConfigScript extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        op-script-picker,
        op-script-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:script"
        data="{{_routeData}}"
        active="{{_edittingScript}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <op-script-picker
          opp="[[opp]]"
          scripts="[[scripts]]"
          is-wide="[[isWide]]"
          narrow="[[narrow]]"
          route="[[route]]"
        ></op-script-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <op-script-editor
          opp="[[opp]]"
          script="[[script]]"
          is-wide="[[isWide]]"
          narrow="[[narrow]]"
          route="[[route]]"
          creating-new="[[_creatingNew]]"
        ></op-script-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      route: Object,
      isWide: Boolean,
      narrow: Boolean,
      _routeData: Object,
      _routeMatches: Boolean,
      _creatingNew: Boolean,
      _edittingScript: Boolean,
      scripts: {
        type: Array,
        computed: "computeScripts(opp)"
      },
      script: {
        type: Object,
        computed: "computeScript(scripts, _edittingScript, _routeData)"
      },
      showEditor: {
        type: Boolean,
        computed: "computeShowEditor(_edittingScript, _creatingNew)"
      }
    };
  }

  computeScript(scripts, edittingAddon, routeData) {
    if (!scripts || !edittingAddon) {
      return null;
    }

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].entity_id === routeData.script) {
        return scripts[i];
      }
    }

    return null;
  }

  computeScripts(opp) {
    var scripts = [];
    Object.keys(opp.states).forEach(function (key) {
      var entity = opp.states[key];

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(entity) === "script") {
        scripts.push(entity);
      }
    });
    return scripts.sort(function entitySortBy(entityA, entityB) {
      var nameA = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entityA);
      var nameB = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entityB);

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  computeShowEditor(_edittingScript, _creatingNew) {
    return _creatingNew || _edittingScript;
  }

}

customElements.define("op-config-script", OpConfigScript);

/***/ }),

/***/ "./src/panels/config/script/op-script-editor.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/op-script-editor.ts ***!
  \******************************************************/
/*! exports provided: OpScriptEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpScriptEditor", function() { return OpScriptEditor; });
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _components_op_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/op-paper-icon-button-arrow-prev */ "./src/components/op-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_op_app_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/op-app-layout */ "./src/layouts/op-app-layout.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _automation_action_op_automation_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../automation/action/op-automation-action */ "./src/panels/config/automation/action/op-automation-action.ts");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
/* harmony import */ var _automation_action_types_op_automation_action_device_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../automation/action/types/op-automation-action-device_id */ "./src/panels/config/automation/action/types/op-automation-action-device_id.ts");
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


















let OpScriptEditor = _decorate(null, function (_initialize, _LitElement) {
  class OpScriptEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpScriptEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "script",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "creatingNew",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_dirty",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_errors",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$_config;

        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        .route=${this.route}
        .backCallback=${() => this._backTapped()}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_15__["configSections"].automation}
      >
        ${this.creatingNew ? "" : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <paper-icon-button
                slot="toolbar-icon"
                title="${this.opp.localize("ui.panel.config.script.editor.delete_script")}"
                icon="opp:delete"
                @click=${this._deleteConfirm}
              ></paper-icon-button>
            `}
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <span slot="header">${(_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.alias}</span>
            ` : ""}
        <div class="content">
          ${this._errors ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div class="errors">${this._errors}</div>
              ` : ""}
          <div
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(this.opp)
        })}"
          >
            ${this._config ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <op-config-section .isWide=${this.isWide}>
                    ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                          <span slot="header">${this._config.alias}</span>
                        ` : ""}
                    <span slot="introduction">
                      ${this.opp.localize("ui.panel.config.script.editor.introduction")}
                    </span>
                    <op-card>
                      <div class="card-content">
                        <paper-input
                          .label=${this.opp.localize("ui.panel.config.script.editor.alias")}
                          name="alias"
                          .value=${this._config.alias}
                          @value-changed=${this._valueChanged}
                        >
                        </paper-input>
                      </div>
                    </op-card>
                  </op-config-section>

                  <op-config-section .isWide=${this.isWide}>
                    <span slot="header">
                      ${this.opp.localize("ui.panel.config.script.editor.sequence")}
                    </span>
                    <span slot="introduction">
                      <p>
                        ${this.opp.localize("ui.panel.config.script.editor.sequence_sentence")}
                      </p>
                      <a
                        href="https://open-peer-power.io/docs/scripts/"
                        target="_blank"
                      >
                        ${this.opp.localize("ui.panel.config.script.editor.link_available_actions")}
                      </a>
                    </span>
                    <op-automation-action
                      .actions=${this._config.sequence}
                      @value-changed=${this._sequenceChanged}
                      .opp=${this.opp}
                    ></op-automation-action>
                  </op-config-section>
                ` : ""}
          </div>
        </div>
        <op-fab
          ?is-wide=${this.isWide}
          ?narrow=${this.narrow}
          ?dirty=${this._dirty}
          icon="opp:content-save"
          .title="${this.opp.localize("ui.common.save")}"
          @click=${this._saveScript}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(this.opp)
        })}"
        ></op-fab>
      </opp-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpScriptEditor.prototype), "updated", this).call(this, changedProps);

        const oldScript = changedProps.get("script");

        if (changedProps.has("script") && this.script && this.opp && ( // Only refresh config if we picked a new script. If same ID, don't fetch it.
        !oldScript || oldScript.entity_id !== this.script.entity_id)) {
          this.opp.callApi("GET", `config/script/config/${Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_14__["computeObjectId"])(this.script.entity_id)}`).then(config => {
            // Normalize data: ensure sequence is a list
            // Happens when people copy paste their scripts into the config
            const value = config.sequence;

            if (value && !Array.isArray(value)) {
              config.sequence = [value];
            }

            this._dirty = false;
            this._config = config;
          }, resp => {
            alert(resp.status_code === 404 ? this.opp.localize("ui.panel.config.script.editor.load_error_not_editable") : this.opp.localize("ui.panel.config.script.editor.load_error_unknown", "err_no", resp.status_code));
            history.back();
          });
        }

        if (changedProps.has("creatingNew") && this.creatingNew && this.opp) {
          const initData = Object(_data_script__WEBPACK_IMPORTED_MODULE_9__["getScriptEditorInitData"])();
          this._dirty = initData ? true : false;
          this._config = Object.assign({
            alias: this.opp.localize("ui.panel.config.script.editor.default_name"),
            sequence: [Object.assign({}, _automation_action_types_op_automation_action_device_id__WEBPACK_IMPORTED_MODULE_16__["OpDeviceAction"].defaultConfig)]
          }, initData);
        }
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        var _ref;

        ev.stopPropagation();
        const name = (_ref = ev.target) === null || _ref === void 0 ? void 0 : _ref.name;

        if (!name) {
          return;
        }

        const newVal = ev.detail.value;

        if ((this._config[name] || "") === newVal) {
          return;
        }

        this._config = Object.assign({}, this._config, {
          [name]: newVal
        });
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_sequenceChanged",
      value: function _sequenceChanged(ev) {
        this._config = Object.assign({}, this._config, {
          sequence: ev.detail.value
        });
        this._errors = undefined;
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this._dirty) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showConfirmationDialog"])(this, {
            text: this.opp.localize("ui.panel.config.common.editor.confirm_unsaved"),
            confirmText: this.opp.localize("ui.common.yes"),
            dismissText: this.opp.localize("ui.common.no"),
            confirm: () => history.back()
          });
        } else {
          history.back();
        }
      }
    }, {
      kind: "method",
      key: "_deleteConfirm",
      value: async function _deleteConfirm() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showConfirmationDialog"])(this, {
          text: this.opp.localize("ui.panel.config.script.editor.delete_confirm"),
          confirmText: this.opp.localize("ui.common.yes"),
          dismissText: this.opp.localize("ui.common.no"),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        await Object(_data_script__WEBPACK_IMPORTED_MODULE_9__["deleteScript"])(this.opp, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_14__["computeObjectId"])(this.script.entity_id));
        history.back();
      }
    }, {
      kind: "method",
      key: "_saveScript",
      value: function _saveScript() {
        const id = this.creatingNew ? "" + Date.now() : Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_14__["computeObjectId"])(this.script.entity_id);
        this.opp.callApi("POST", "config/script/config/" + id, this._config).then(() => {
          this._dirty = false;

          if (this.creatingNew) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, `/config/script/edit/${id}`, true);
          }
        }, errors => {
          this._errors = errors.body.message;
          throw errors;
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        op-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        op-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        op-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        op-fab[narrow] {
          bottom: 84px;
          margin-bottom: -140px;
        }
        op-fab[dirty] {
          margin-bottom: 0;
        }

        op-fab.rtl {
          right: auto;
          left: 16px;
        }

        op-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);
customElements.define("op-script-editor", OpScriptEditor);

/***/ }),

/***/ "./src/panels/config/script/op-script-picker.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/op-script-picker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
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















let OpScriptPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-script-picker")], function (_initialize, _LitElement) {
  class OpScriptPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpScriptPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "scripts",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
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
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_12__["configSections"].automation}
      >
        <op-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.opp.localize("ui.panel.config.script.picker.header")}
          </div>
          <div slot="introduction">
            ${this.opp.localize("ui.panel.config.script.picker.introduction")}
            <p>
              <a
                href="https://open-peer-power.io/docs/scripts/editor/"
                target="_blank"
              >
                ${this.opp.localize("ui.panel.config.script.picker.learn_more")}
              </a>
            </p>
          </div>

          <op-card>
            ${this.scripts.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>
                      ${this.opp.localize("ui.panel.config.script.picker.no_scripts")}
                    </p>
                  </div>
                ` : this.scripts.map(script => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <div class="script">
                      <paper-icon-button
                        .script=${script}
                        icon="opp:play"
                        title="${this.opp.localize("ui.panel.config.script.picker.trigger_script")}"
                        @click=${this._runScript}
                      ></paper-icon-button>
                      <paper-item-body two-line>
                        <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(script)}</div>
                      </paper-item-body>
                      <div class="actions">
                        <a href=${`/config/script/edit/${script.entity_id}`}>
                          <paper-icon-button
                            icon="opp:pencil"
                            title="${this.opp.localize("ui.panel.config.script.picker.edit_script")}"
                          ></paper-icon-button>
                        </a>
                      </div>
                    </div>
                  `)}
          </op-card>
        </op-config-section>

        <a href="/config/script/new">
          <op-fab
            ?is-wide=${this.isWide}
            ?narrow=${this.narrow}
            icon="opp:plus"
            title="${this.opp.localize("ui.panel.config.script.picker.add_script")}"
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__["computeRTL"])(this.opp)}
          ></op-fab>
        </a>
      </opp-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_runScript",
      value: async function _runScript(ev) {
        const script = ev.currentTarget.script;
        await Object(_data_script__WEBPACK_IMPORTED_MODULE_10__["triggerScript"])(this.opp, script.entity_id);
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_11__["showToast"])(this, {
          message: this.opp.localize("ui.notification_toast.triggered", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(script))
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_9__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
        }

        op-card {
          margin-bottom: 56px;
        }

        .script {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .script > *:first-child {
          margin-right: 8px;
        }

        .script a[href],
        paper-icon-button {
          color: var(--primary-text-color);
        }

        .actions {
          display: flex;
        }

        op-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        op-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        op-fab[narrow] {
          bottom: 84px;
        }
        op-fab[rtl] {
          right: auto;
          left: 16px;
        }

        op-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1wYXBlci1kcm9wZG93bi1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3NjcmlwdC9vcC1jb25maWctc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3NjcmlwdC9vcC1zY3JpcHQtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3NjcmlwdC9vcC1zY3JpcHQtcGlja2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XHJcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IHBhcGVyRHJvcGRvd25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcclxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxyXG4pIGFzIENvbnN0cnVjdG9yPFBvbHltZXJFbGVtZW50PjtcclxuXHJcbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcclxuZXhwb3J0IGNsYXNzIE9wUGFwZXJEcm9wZG93bkNsYXNzIGV4dGVuZHMgcGFwZXJEcm9wZG93bkNsYXNzIHtcclxuICBwdWJsaWMgcmVhZHkoKSB7XHJcbiAgICBzdXBlci5yZWFkeSgpO1xyXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgIFwib3AtcGFwZXItZHJvcGRvd24tbWVudVwiOiBPcFBhcGVyRHJvcGRvd25DbGFzcztcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXBhcGVyLWRyb3Bkb3duLW1lbnVcIiwgT3BQYXBlckRyb3Bkb3duQ2xhc3MpO1xyXG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZFwiO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSBcIi4vYXV0b21hdGlvblwiO1xuaW1wb3J0IHsgT3BwRW50aXR5QmFzZSwgT3BwRW50aXR5QXR0cmlidXRlQmFzZSB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTY3JpcHRFbnRpdHkgZXh0ZW5kcyBPcHBFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogT3BwRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBsYXN0X3RyaWdnZXJlZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdENvbmZpZyB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHNlcXVlbmNlOiBBY3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEFjdGlvbiB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGV2ZW50X2RhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBldmVudF9kYXRhX3RlbXBsYXRlPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlQWN0aW9uIHtcbiAgc2VydmljZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUFjdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsYXlBY3Rpb24ge1xuICBkZWxheTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lQWN0aW9uIHtcbiAgc2NlbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWl0QWN0aW9uIHtcbiAgd2FpdF90ZW1wbGF0ZTogc3RyaW5nO1xuICB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb24gPVxuICB8IEV2ZW50QWN0aW9uXG4gIHwgRGV2aWNlQWN0aW9uXG4gIHwgU2VydmljZUFjdGlvblxuICB8IENvbmRpdGlvblxuICB8IERlbGF5QWN0aW9uXG4gIHwgU2NlbmVBY3Rpb25cbiAgfCBXYWl0QWN0aW9uO1xuXG5leHBvcnQgY29uc3QgdHJpZ2dlclNjcmlwdCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YXJpYWJsZXM/OiB7fVxuKSA9PiBvcHAuY2FsbFNlcnZpY2UoXCJzY3JpcHRcIiwgY29tcHV0ZU9iamVjdElkKGVudGl0eUlkKSwgdmFyaWFibGVzKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNjcmlwdCA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIG9iamVjdElkOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NyaXB0L2NvbmZpZy8ke29iamVjdElkfWApO1xuXG5sZXQgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YTogUGFydGlhbDxTY3JpcHRDb25maWc+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NjcmlwdEVkaXRvciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBkYXRhPzogUGFydGlhbDxTY3JpcHRDb25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YSA9IGRhdGE7XG4gIG5hdmlnYXRlKGVsLCBcIi9jb25maWcvc2NyaXB0L25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JpcHRFZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGE7XG4gIGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIG9wcCBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKG9wcC5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vb3Atc2NyaXB0LWVkaXRvclwiO1xuaW1wb3J0IFwiLi9vcC1zY3JpcHQtcGlja2VyXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmNsYXNzIE9wQ29uZmlnU2NyaXB0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBvcC1zY3JpcHQtcGlja2VyLFxuICAgICAgICBvcC1zY3JpcHQtZWRpdG9yIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi9lZGl0LzpzY3JpcHRcIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgICBhY3RpdmU9XCJ7e19lZGl0dGluZ1NjcmlwdH19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL25ld1wiXG4gICAgICAgIGFjdGl2ZT1cInt7X2NyZWF0aW5nTmV3fX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIXNob3dFZGl0b3JdXVwiPlxuICAgICAgICA8b3Atc2NyaXB0LXBpY2tlclxuICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgIHNjcmlwdHM9XCJbW3NjcmlwdHNdXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgPjwvb3Atc2NyaXB0LXBpY2tlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93RWRpdG9yXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxvcC1zY3JpcHQtZWRpdG9yXG4gICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgc2NyaXB0PVwiW1tzY3JpcHRdXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgICBjcmVhdGluZy1uZXc9XCJbW19jcmVhdGluZ05ld11dXCJcbiAgICAgICAgPjwvb3Atc2NyaXB0LWVkaXRvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3JvdXRlTWF0Y2hlczogQm9vbGVhbixcbiAgICAgIF9jcmVhdGluZ05ldzogQm9vbGVhbixcbiAgICAgIF9lZGl0dGluZ1NjcmlwdDogQm9vbGVhbixcblxuICAgICAgc2NyaXB0czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNjcmlwdHMob3BwKVwiLFxuICAgICAgfSxcblxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNjcmlwdChzY3JpcHRzLCBfZWRpdHRpbmdTY3JpcHQsIF9yb3V0ZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93RWRpdG9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ1NjcmlwdCwgX2NyZWF0aW5nTmV3KVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVNjcmlwdChzY3JpcHRzLCBlZGl0dGluZ0FkZG9uLCByb3V0ZURhdGEpIHtcbiAgICBpZiAoIXNjcmlwdHMgfHwgIWVkaXR0aW5nQWRkb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzY3JpcHRzW2ldLmVudGl0eV9pZCA9PT0gcm91dGVEYXRhLnNjcmlwdCkge1xuICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wdXRlU2NyaXB0cyhvcHApIHtcbiAgICB2YXIgc2NyaXB0cyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMob3BwLnN0YXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBlbnRpdHkgPSBvcHAuc3RhdGVzW2tleV07XG5cbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJzY3JpcHRcIikge1xuICAgICAgICBzY3JpcHRzLnB1c2goZW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY3JpcHRzLnNvcnQoZnVuY3Rpb24gZW50aXR5U29ydEJ5KGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgIHZhciBuYW1lQSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5QSk7XG4gICAgICB2YXIgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuXG4gICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFZGl0b3IoX2VkaXR0aW5nU2NyaXB0LCBfY3JlYXRpbmdOZXcpIHtcbiAgICByZXR1cm4gX2NyZWF0aW5nTmV3IHx8IF9lZGl0dGluZ1NjcmlwdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1jb25maWctc2NyaXB0XCIsIE9wQ29uZmlnU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBTY3JpcHRFbnRpdHksXG4gIFNjcmlwdENvbmZpZyxcbiAgZGVsZXRlU2NyaXB0LFxuICBnZXRTY3JpcHRFZGl0b3JJbml0RGF0YSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3AtYXBwLWxheW91dFwiO1xuaW1wb3J0IHsgb3BTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyLCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vYXV0b21hdGlvbi9hY3Rpb24vb3AtYXV0b21hdGlvbi1hY3Rpb25cIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9vcC1wYW5lbC1jb25maWdcIjtcbmltcG9ydCB7IE9wRGV2aWNlQWN0aW9uIH0gZnJvbSBcIi4uL2F1dG9tYXRpb24vYWN0aW9uL3R5cGVzL29wLWF1dG9tYXRpb24tYWN0aW9uLWRldmljZV9pZFwiO1xuXG5leHBvcnQgY2xhc3MgT3BTY3JpcHRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY3JpcHQhOiBTY3JpcHRFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjcmVhdGluZ05ldz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IFNjcmlwdENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlydHk/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcnM/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3BwLXRhYnMtc3VicGFnZVxuICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgLmJhY2tDYWxsYmFjaz0keygpID0+IHRoaXMuX2JhY2tUYXBwZWQoKX1cbiAgICAgICAgLnRhYnM9JHtjb25maWdTZWN0aW9ucy5hdXRvbWF0aW9ufVxuICAgICAgPlxuICAgICAgICAke3RoaXMuY3JlYXRpbmdOZXdcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5lZGl0b3IuZGVsZXRlX3NjcmlwdFwiXG4gICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgIGljb249XCJvcHA6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGVDb25maXJtfVxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICR7dGhpcy5uYXJyb3dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj4ke3RoaXMuX2NvbmZpZz8uYWxpYXN9PC9zcGFuPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuX2Vycm9yc1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj4ke3RoaXMuX2Vycm9yc308L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLm9wcCksXG4gICAgICAgICAgICB9KX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5fY29uZmlnXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxvcC1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7dGhpcy5fY29uZmlnLmFsaWFzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5lZGl0b3IuYWxpYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWxpYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jb25maWcuYWxpYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICAgICAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgPG9wLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLnNlcXVlbmNlX3NlbnRlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9vcGVuLXBlZXItcG93ZXIuaW8vZG9jcy9zY3JpcHRzL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5lZGl0b3IubGlua19hdmFpbGFibGVfYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8b3AtYXV0b21hdGlvbi1hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAuYWN0aW9ucz0ke3RoaXMuX2NvbmZpZy5zZXF1ZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3NlcXVlbmNlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAgID48L29wLWF1dG9tYXRpb24tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxvcC1mYWJcbiAgICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICAgID9uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICA/ZGlydHk9JHt0aGlzLl9kaXJ0eX1cbiAgICAgICAgICBpY29uPVwib3BwOmNvbnRlbnQtc2F2ZVwiXG4gICAgICAgICAgLnRpdGxlPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNvbW1vbi5zYXZlXCIpfVwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2F2ZVNjcmlwdH1cbiAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMub3BwKSxcbiAgICAgICAgICB9KX1cIlxuICAgICAgICA+PC9vcC1mYWI+XG4gICAgICA8L29wcC10YWJzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBjb25zdCBvbGRTY3JpcHQgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwic2NyaXB0XCIpIGFzIFNjcmlwdEVudGl0eTtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwic2NyaXB0XCIpICYmXG4gICAgICB0aGlzLnNjcmlwdCAmJlxuICAgICAgdGhpcy5vcHAgJiZcbiAgICAgIC8vIE9ubHkgcmVmcmVzaCBjb25maWcgaWYgd2UgcGlja2VkIGEgbmV3IHNjcmlwdC4gSWYgc2FtZSBJRCwgZG9uJ3QgZmV0Y2ggaXQuXG4gICAgICAoIW9sZFNjcmlwdCB8fCBvbGRTY3JpcHQuZW50aXR5X2lkICE9PSB0aGlzLnNjcmlwdC5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICB0aGlzLm9wcFxuICAgICAgICAuY2FsbEFwaTxTY3JpcHRDb25maWc+KFxuICAgICAgICAgIFwiR0VUXCIsXG4gICAgICAgICAgYGNvbmZpZy9zY3JpcHQvY29uZmlnLyR7Y29tcHV0ZU9iamVjdElkKHRoaXMuc2NyaXB0LmVudGl0eV9pZCl9YFxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChjb25maWcpID0+IHtcbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBkYXRhOiBlbnN1cmUgc2VxdWVuY2UgaXMgYSBsaXN0XG4gICAgICAgICAgICAvLyBIYXBwZW5zIHdoZW4gcGVvcGxlIGNvcHkgcGFzdGUgdGhlaXIgc2NyaXB0cyBpbnRvIHRoZSBjb25maWdcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnLnNlcXVlbmNlO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICBjb25maWcuc2VxdWVuY2UgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICB9LFxuICAgICAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgcmVzcC5zdGF0dXNfY29kZSA9PT0gNDA0XG4gICAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5sb2FkX2Vycm9yX25vdF9lZGl0YWJsZVwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5sb2FkX2Vycm9yX3Vua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcC5zdGF0dXNfY29kZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNyZWF0aW5nTmV3XCIpICYmIHRoaXMuY3JlYXRpbmdOZXcgJiYgdGhpcy5vcHApIHtcbiAgICAgIGNvbnN0IGluaXREYXRhID0gZ2V0U2NyaXB0RWRpdG9ySW5pdERhdGEoKTtcbiAgICAgIHRoaXMuX2RpcnR5ID0gaW5pdERhdGEgPyB0cnVlIDogZmFsc2U7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIGFsaWFzOiB0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmRlZmF1bHRfbmFtZVwiKSxcbiAgICAgICAgc2VxdWVuY2U6IFt7IC4uLk9wRGV2aWNlQWN0aW9uLmRlZmF1bHRDb25maWcgfV0sXG4gICAgICAgIC4uLmluaXREYXRhLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbmFtZSA9IChldi50YXJnZXQgYXMgYW55KT8ubmFtZTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCh0aGlzLl9jb25maWchW25hbWVdIHx8IFwiXCIpID09PSBuZXdWYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0geyAuLi50aGlzLl9jb25maWchLCBbbmFtZV06IG5ld1ZhbCB9O1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlcXVlbmNlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZyEsIHNlcXVlbmNlOiBldi5kZXRhaWwudmFsdWUgYXMgQWN0aW9uW10gfTtcbiAgICB0aGlzLl9lcnJvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29tbW9uLmVkaXRvci5jb25maXJtX3Vuc2F2ZWRcIlxuICAgICAgICApLFxuICAgICAgICBjb25maXJtVGV4dDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgICAgZGlzbWlzc1RleHQ6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgICAgY29uZmlybTogKCkgPT4gaGlzdG9yeS5iYWNrKCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlQ29uZmlybSgpIHtcbiAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgIHRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5lZGl0b3IuZGVsZXRlX2NvbmZpcm1cIiksXG4gICAgICBjb25maXJtVGV4dDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgIGRpc21pc3NUZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICBjb25maXJtOiAoKSA9PiB0aGlzLl9kZWxldGUoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZSgpIHtcbiAgICBhd2FpdCBkZWxldGVTY3JpcHQodGhpcy5vcHAsIGNvbXB1dGVPYmplY3RJZCh0aGlzLnNjcmlwdC5lbnRpdHlfaWQpKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdmVTY3JpcHQoKTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmNyZWF0aW5nTmV3XG4gICAgICA/IFwiXCIgKyBEYXRlLm5vdygpXG4gICAgICA6IGNvbXB1dGVPYmplY3RJZCh0aGlzLnNjcmlwdC5lbnRpdHlfaWQpO1xuICAgIHRoaXMub3BwIS5jYWxsQXBpKFwiUE9TVFwiLCBcImNvbmZpZy9zY3JpcHQvY29uZmlnL1wiICsgaWQsIHRoaXMuX2NvbmZpZykudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jcmVhdGluZ05ldykge1xuICAgICAgICAgIG5hdmlnYXRlKHRoaXMsIGAvY29uZmlnL3NjcmlwdC9lZGl0LyR7aWR9YCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3JzKSA9PiB7XG4gICAgICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycy5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9ycztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBvcC1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbltzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtODBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWJbbmFycm93XSB7XG4gICAgICAgICAgYm90dG9tOiA4NHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNDBweDtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWJbZGlydHldIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgb3AtZmFiLnJ0bCB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWZhYltpcy13aWRlXS5ydGwge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3Atc2NyaXB0LWVkaXRvclwiLCBPcFNjcmlwdEVkaXRvcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtZmFiXCI7XG5cbmltcG9ydCBcIi4uL29wLWNvbmZpZy1zZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IG9wU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRyaWdnZXJTY3JpcHQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9vcC1wYW5lbC1jb25maWdcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1zY3JpcHQtcGlja2VyXCIpXG5jbGFzcyBPcFNjcmlwdFBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjcmlwdHMhOiBPcHBFbnRpdHlbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcHAtdGFicy1zdWJwYWdlXG4gICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICBiYWNrLXBhdGg9XCIvY29uZmlnXCJcbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgLnRhYnM9JHtjb25maWdTZWN0aW9ucy5hdXRvbWF0aW9ufVxuICAgICAgPlxuICAgICAgICA8b3AtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LnBpY2tlci5oZWFkZXJcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vb3Blbi1wZWVyLXBvd2VyLmlvL2RvY3Mvc2NyaXB0cy9lZGl0b3IvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLmxlYXJuX21vcmVcIil9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxvcC1jYXJkPlxuICAgICAgICAgICAgJHt0aGlzLnNjcmlwdHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIubm9fc2NyaXB0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IHRoaXMuc2NyaXB0cy5tYXAoXG4gICAgICAgICAgICAgICAgICAoc2NyaXB0KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NyaXB0PSR7c2NyaXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LnBpY2tlci50cmlnZ2VyX3NjcmlwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9ydW5TY3JpcHR9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21wdXRlU3RhdGVOYW1lKHNjcmlwdCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JHtgL2NvbmZpZy9zY3JpcHQvZWRpdC8ke3NjcmlwdC5lbnRpdHlfaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLmVkaXRfc2NyaXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvb3AtY2FyZD5cbiAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9zY3JpcHQvbmV3XCI+XG4gICAgICAgICAgPG9wLWZhYlxuICAgICAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgICAgID9uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgIGljb249XCJvcHA6cGx1c1wiXG4gICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuYWRkX3NjcmlwdFwiXG4gICAgICAgICAgICApfVwiXG4gICAgICAgICAgICA/cnRsPSR7Y29tcHV0ZVJUTCh0aGlzLm9wcCl9XG4gICAgICAgICAgPjwvb3AtZmFiPlxuICAgICAgICA8L2E+XG4gICAgICA8L29wcC10YWJzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3J1blNjcmlwdChldikge1xuICAgIGNvbnN0IHNjcmlwdCA9IGV2LmN1cnJlbnRUYXJnZXQuc2NyaXB0IGFzIE9wcEVudGl0eTtcbiAgICBhd2FpdCB0cmlnZ2VyU2NyaXB0KHRoaXMub3BwLCBzY3JpcHQuZW50aXR5X2lkKTtcbiAgICBzaG93VG9hc3QodGhpcywge1xuICAgICAgbWVzc2FnZTogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgIFwidWkubm90aWZpY2F0aW9uX3RvYXN0LnRyaWdnZXJlZFwiLFxuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgY29tcHV0ZVN0YXRlTmFtZShzY3JpcHQpXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogaG9yaXpvbnRhbDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQgYVtocmVmXSxcbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWZhYltuYXJyb3ddIHtcbiAgICAgICAgICBib3R0b206IDg0cHg7XG4gICAgICAgIH1cbiAgICAgICAgb3AtZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3Atc2NyaXB0LXBpY2tlclwiOiBPcFNjcmlwdFBpY2tlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBa0JBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBcURBO0FBTUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXBCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoSEE7QUFDQTtBQWlIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFLQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFNQTtBQUVBO0FBRkE7O0FBTUE7QUFDQTtBQURBOztBQUlBO0FBRUE7QUFDQTtBQUVBO0FBRkE7O0FBTUE7Ozs7O0FBT0E7O0FBSUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOzs7O0FBTUE7Ozs7OztBQVFBOzs7O0FBTUE7QUFDQTtBQUNBOzs7QUFwREE7Ozs7QUE0REE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQXRHQTtBQTRHQTtBQXhIQTtBQUFBO0FBQUE7QUFBQTtBQTJIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBL0tBO0FBQUE7QUFBQTtBQUFBO0FBaUxBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUE5TEE7QUFBQTtBQUFBO0FBQUE7QUFpTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcE1BO0FBQUE7QUFBQTtBQUFBO0FBdU1BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFuTkE7QUFBQTtBQUFBO0FBQUE7QUFzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUE1TkE7QUFBQTtBQUFBO0FBQUE7QUErTkE7QUFDQTtBQUNBO0FBak9BO0FBQUE7QUFBQTtBQUFBO0FBb09BO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQXBQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrREE7QUF6U0E7QUFBQTtBQUFBO0FBNFNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1VBO0FBU0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7O0FBTUE7Ozs7OztBQU1BOzs7QUFJQTs7O0FBSkE7OztBQWNBOztBQUVBO0FBR0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7Ozs7O0FBbEJBOzs7Ozs7QUFnQ0E7QUFDQTs7QUFFQTtBQUdBOzs7O0FBekVBO0FBOEVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBT0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2REE7OztBQWxLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9