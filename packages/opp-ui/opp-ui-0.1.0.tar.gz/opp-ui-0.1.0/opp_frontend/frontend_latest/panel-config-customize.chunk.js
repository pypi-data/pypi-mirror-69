(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-customize"],{

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: sortStatesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortStatesByName", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");
/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statessortStatesByName);
 */

const sortStatesByName = (entityA, entityB) => {
  const nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityA);
  const nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityB);

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

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

/***/ "./src/panels/config/customize/op-config-customize.js":
/*!************************************************************!*\
  !*** ./src/panels/config/customize/op-config-customize.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _components_op_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-paper-icon-button-arrow-prev */ "./src/components/op-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _op_entity_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../op-entity-config */ "./src/panels/config/op-entity-config.js");
/* harmony import */ var _op_form_customize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./op-form-customize */ "./src/panels/config/customize/op-form-customize.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");














/*
 * @appliesMixin LocalizeMixin
 */

class OpConfigCustomize extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="op-style">
        op-paper-icon-button-arrow-prev[hide] {
          visibility: hidden;
        }
      </style>

      <opp-tabs-subpage
        opp="[[opp]]"
        narrow="[[narrow]]"
        route="[[route]]"
        back-path="/config"
        tabs="[[_computeTabs()]]"
        show-advanced="[[showAdvanced]]"
      >
        <div class$="[[computeClasses(isWide)]]">
          <op-config-section is-wide="[[isWide]]">
            <span slot="header">
              [[localize('ui.panel.config.customize.picker.header')]]
            </span>
            <span slot="introduction">
              [[localize('ui.panel.config.customize.picker.introduction')]]
            </span>
            <op-entity-config
              opp="[[opp]]"
              label="Entity"
              entities="[[entities]]"
              config="[[entityConfig]]"
            >
            </op-entity-config>
          </op-config-section>
        </div>
      </opp-tabs-subpage>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      isWide: Boolean,
      narrow: Boolean,
      route: Object,
      showAdvanced: Boolean,
      entities: {
        type: Array,
        computed: "computeEntities(opp)"
      },
      entityConfig: {
        type: Object,
        value: {
          component: "op-form-customize",
          computeSelectCaption: stateObj => Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(stateObj) + " (" + Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_10__["computeStateDomain"])(stateObj) + ")"
        }
      }
    };
  }

  computeClasses(isWide) {
    return isWide ? "content" : "content narrow";
  }

  _backTapped() {
    history.back();
  }

  _computeTabs() {
    return _op_panel_config__WEBPACK_IMPORTED_MODULE_13__["configSections"].general;
  }

  computeEntities(opp) {
    return Object.keys(opp.states).map(key => opp.states[key]).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_11__["sortStatesByName"]);
  }

}

customElements.define("op-config-customize", OpConfigCustomize);

/***/ }),

/***/ "./src/panels/config/customize/op-customize-attribute.js":
/*!***************************************************************!*\
  !*** ./src/panels/config/customize/op-customize-attribute.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/opp-attributes-util */ "./src/util/opp-attributes-util.js");
/* harmony import */ var _op_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../op-form-style */ "./src/panels/config/op-form-style.js");
/* harmony import */ var _op_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_op_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types_op_customize_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/op-customize-array */ "./src/panels/config/customize/types/op-customize-array.js");
/* harmony import */ var _types_op_customize_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/op-customize-boolean */ "./src/panels/config/customize/types/op-customize-boolean.js");
/* harmony import */ var _types_op_customize_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/op-customize-icon */ "./src/panels/config/customize/types/op-customize-icon.js");
/* harmony import */ var _types_op_customize_key_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/op-customize-key-value */ "./src/panels/config/customize/types/op-customize-key-value.js");
/* harmony import */ var _types_op_customize_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/op-customize-string */ "./src/panels/config/customize/types/op-customize-string.js");











class OpCustomizeAttribute extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="op-form-style">
        :host {
          display: block;
          position: relative;
          padding-right: 40px;
        }

        .button {
          position: absolute;
          margin-top: -20px;
          top: 50%;
          right: 0;
        }
      </style>
      <div id="wrapper" class="form-group"></div>
      <paper-icon-button
        class="button"
        icon="[[getIcon(item.secondary)]]"
        on-click="tapButton"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notify: true,
        observer: "itemObserver"
      }
    };
  }

  tapButton() {
    if (this.item.secondary) {
      this.item = Object.assign({}, this.item, {
        secondary: false
      });
    } else {
      this.item = Object.assign({}, this.item, {
        closed: true
      });
    }
  }

  getIcon(secondary) {
    return secondary ? "opp:pencil" : "opp:close";
  }

  itemObserver(item) {
    const wrapper = this.$.wrapper;
    const tag = _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TO_TAG[item.type].toUpperCase();
    let child;

    if (wrapper.lastChild && wrapper.lastChild.tagName === tag) {
      child = wrapper.lastChild;
    } else {
      if (wrapper.lastChild) {
        wrapper.removeChild(wrapper.lastChild);
      } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
      // become a defined Custom Element. Polymer does that in some later pass.


      this.$.child = child = document.createElement(tag.toLowerCase());
      child.className = "form-control";
      child.addEventListener("item-changed", () => {
        this.item = Object.assign({}, child.item);
      });
    }

    child.setProperties({
      item: this.item
    });

    if (child.parentNode === null) {
      wrapper.appendChild(child);
    }
  }

}

customElements.define("op-customize-attribute", OpCustomizeAttribute);

/***/ }),

/***/ "./src/panels/config/customize/op-form-customize-attributes.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/op-form-customize-attributes.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/mutable-data */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _op_customize_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-customize-attribute */ "./src/panels/config/customize/op-customize-attribute.js");





class OpFormCustomizeAttributes extends Object(_polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__["MutableData"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        [hidden] {
          display: none;
        }
      </style>
      <template is="dom-repeat" items="{{attributes}}" mutable-data="">
        <op-customize-attribute item="{{item}}" hidden$="[[item.closed]]">
        </op-customize-attribute>
      </template>
    `;
  }

  static get properties() {
    return {
      attributes: {
        type: Array,
        notify: true
      }
    };
  }

}

customElements.define("op-form-customize-attributes", OpFormCustomizeAttributes);

/***/ }),

/***/ "./src/panels/config/customize/op-form-customize.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/customize/op-form-customize.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/opp-attributes-util */ "./src/util/opp-attributes-util.js");
/* harmony import */ var _op_form_customize_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./op-form-customize-attributes */ "./src/panels/config/customize/op-form-customize-attributes.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");










class OpFormCustomize extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex op-style op-form-style">
        .warning {
          color: red;
        }

        .attributes-text {
          padding-left: 20px;
        }
      </style>
      <template
        is="dom-if"
        if="[[computeShowWarning(localConfig, globalConfig)]]"
      >
        <div class="warning">
          [[localize('ui.panel.config.customize.warning.include_sentence')]]
          <a
            href="https://www.open-peer-power.io/docs/configuration/customizing-devices/#customization-using-the-ui"
            target="_blank"
            >[[localize('ui.panel.config.customize.warning.include_link')]]</a
          >.<br />
          [[localize('ui.panel.config.customize.warning.not_applied')]]
        </div>
      </template>
      <template is="dom-if" if="[[hasLocalAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_customize')]]<br />
        </h4>
        <op-form-customize-attributes
          attributes="{{localAttributes}}"
        ></op-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasGlobalAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_outside')]]<br />
          [[localize('ui.panel.config.customize.different_include')]]
        </h4>
        <op-form-customize-attributes
          attributes="{{globalAttributes}}"
        ></op-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasExistingAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_set')]]<br />
          [[localize('ui.panel.config.customize.attributes_override')]]
        </h4>
        <op-form-customize-attributes
          attributes="{{existingAttributes}}"
        ></op-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasNewAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_not_set')]]
        </h4>
        <op-form-customize-attributes
          attributes="{{newAttributes}}"
        ></op-form-customize-attributes>
      </template>
      <div class="form-group">
        <paper-dropdown-menu
          label="[[localize('ui.panel.config.customize.pick_attribute')]]"
          class="flex"
          dynamic-align=""
        >
          <paper-listbox
            slot="dropdown-content"
            selected="{{selectedNewAttribute}}"
          >
            <template
              is="dom-repeat"
              items="[[newAttributesOptions]]"
              as="option"
            >
              <paper-item>[[option]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      entity: Object,
      localAttributes: {
        type: Array,
        computed: "computeLocalAttributes(localConfig)"
      },
      hasLocalAttributes: Boolean,
      globalAttributes: {
        type: Array,
        computed: "computeGlobalAttributes(localConfig, globalConfig)"
      },
      hasGlobalAttributes: Boolean,
      existingAttributes: {
        type: Array,
        computed: "computeExistingAttributes(localConfig, globalConfig, entity)"
      },
      hasExistingAttributes: Boolean,
      newAttributes: {
        type: Array,
        value: []
      },
      hasNewAttributes: Boolean,
      newAttributesOptions: Array,
      selectedNewAttribute: {
        type: Number,
        value: -1,
        observer: "selectedNewAttributeObserver"
      },
      localConfig: Object,
      globalConfig: Object
    };
  }

  static get observers() {
    return ["attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)"];
  }

  _initOpenObject(key, value, secondary, config) {
    return Object.assign({
      attribute: key,
      value: value,
      closed: false,
      domain: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(this.entity),
      secondary: secondary,
      description: key
    }, config);
  }

  loadEntity(entity) {
    this.entity = entity;
    return this.opp.callApi("GET", "config/customize/config/" + entity.entity_id).then(data => {
      this.localConfig = data.local;
      this.globalConfig = data.global;
      this.newAttributes = [];
    });
  }

  saveEntity() {
    const data = {};
    const attrs = this.localAttributes.concat(this.globalAttributes, this.existingAttributes, this.newAttributes);
    attrs.forEach(attr => {
      if (attr.closed || attr.secondary || !attr.attribute || !attr.value) return;
      const value = attr.type === "json" ? JSON.parse(attr.value) : attr.value;
      if (!value) return;
      data[attr.attribute] = value;
    });
    const objectId = this.entity.entity_id;
    return this.opp.callApi("POST", "config/customize/config/" + objectId, data);
  }

  _computeSingleAttribute(key, value, secondary) {
    const config = _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_6__["default"].LOGIC_STATE_ATTRIBUTES[key] || {
      type: _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_6__["default"].UNKNOWN_TYPE
    };
    return this._initOpenObject(key, config.type === "json" ? JSON.stringify(value) : value, secondary, config);
  }

  _computeAttributes(config, keys, secondary) {
    return keys.map(key => this._computeSingleAttribute(key, config[key], secondary));
  }

  computeLocalAttributes(localConfig) {
    if (!localConfig) return [];
    const localKeys = Object.keys(localConfig);

    const result = this._computeAttributes(localConfig, localKeys, false);

    return result;
  }

  computeGlobalAttributes(localConfig, globalConfig) {
    if (!localConfig || !globalConfig) return [];
    const localKeys = Object.keys(localConfig);
    const globalKeys = Object.keys(globalConfig).filter(key => !localKeys.includes(key));
    return this._computeAttributes(globalConfig, globalKeys, true);
  }

  computeExistingAttributes(localConfig, globalConfig, entity) {
    if (!localConfig || !globalConfig || !entity) return [];
    const localKeys = Object.keys(localConfig);
    const globalKeys = Object.keys(globalConfig);
    const entityKeys = Object.keys(entity.attributes).filter(key => !localKeys.includes(key) && !globalKeys.includes(key));
    return this._computeAttributes(entity.attributes, entityKeys, true);
  }

  computeShowWarning(localConfig, globalConfig) {
    if (!localConfig || !globalConfig) return false;
    return Object.keys(localConfig).some(key => JSON.stringify(globalConfig[key]) !== JSON.stringify(localConfig[key]));
  }

  filterFromAttributes(attributes) {
    return key => !attributes || attributes.every(attr => attr.attribute !== key || attr.closed);
  }

  getNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
    const knownKeys = Object.keys(_util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_6__["default"].LOGIC_STATE_ATTRIBUTES).filter(key => {
      const conf = _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_6__["default"].LOGIC_STATE_ATTRIBUTES[key];
      return conf && (!conf.domains || !this.entity || conf.domains.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(this.entity)));
    }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
    return knownKeys.sort().concat("Other");
  }

  selectedNewAttributeObserver(selected) {
    if (selected < 0) return;
    const option = this.newAttributesOptions[selected];

    if (selected === this.newAttributesOptions.length - 1) {
      // The "Other" option.
      const attr = this._initOpenObject("", "", false
      /* secondary */
      , {
        type: _util_opp_attributes_util__WEBPACK_IMPORTED_MODULE_6__["default"].ADD_TYPE
      });

      this.push("newAttributes", attr);
      this.selectedNewAttribute = -1;
      return;
    }

    let result = this.localAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("localAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    result = this.globalAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("globalAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    result = this.existingAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("existingAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    result = this.newAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("newAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    const attr = this._computeSingleAttribute(option, "", false
    /* secondary */
    );

    this.push("newAttributes", attr);
    this.selectedNewAttribute = -1;
  }

  attributesObserver() {
    this.hasLocalAttributes = this.localAttributes && this.localAttributes.some(attr => !attr.closed);
    this.hasGlobalAttributes = this.globalAttributes && this.globalAttributes.some(attr => !attr.closed);
    this.hasExistingAttributes = this.existingAttributes && this.existingAttributes.some(attr => !attr.closed);
    this.hasNewAttributes = this.newAttributes && this.newAttributes.some(attr => !attr.closed);
    this.newAttributesOptions = this.getNewAttributesOptions(this.localAttributes, this.globalAttributes, this.existingAttributes, this.newAttributes);
  }

}

customElements.define("op-form-customize", OpFormCustomize);

/***/ }),

/***/ "./src/panels/config/customize/types/op-customize-array.js":
/*!*****************************************************************!*\
  !*** ./src/panels/config/customize/types/op-customize-array.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");






/*
 * @appliesMixin EventsMixin
 */

class OpCustomizeArray extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-dropdown-menu {
          margin: -9px 0;
        }
      </style>
      <paper-dropdown-menu
        label="[[item.description]]"
        disabled="[[item.secondary]]"
        selected-item-label="{{item.value}}"
        dynamic-align=""
      >
        <paper-listbox
          slot="dropdown-content"
          selected="[[computeSelected(item)]]"
        >
          <template is="dom-repeat" items="[[getOptions(item)]]" as="option">
            <paper-item>[[option]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

  getOptions(item) {
    const domain = item.domain || "*";
    const options = item.options[domain] || item.options["*"];

    if (!options) {
      this.item.type = "string";
      this.fire("item-changed");
      return [];
    }

    return options.sort();
  }

  computeSelected(item) {
    const options = this.getOptions(item);
    return options.indexOf(item.value);
  }

}

customElements.define("op-customize-array", OpCustomizeArray);

/***/ }),

/***/ "./src/panels/config/customize/types/op-customize-boolean.js":
/*!*******************************************************************!*\
  !*** ./src/panels/config/customize/types/op-customize-boolean.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");




class OpCustomizeBoolean extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">
        [[item.description]]
      </paper-checkbox>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

}

customElements.define("op-customize-boolean", OpCustomizeBoolean);

/***/ }),

/***/ "./src/panels/config/customize/types/op-customize-icon.js":
/*!****************************************************************!*\
  !*** ./src/panels/config/customize/types/op-customize-icon.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");





class OpCustomizeIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        .icon-image {
          border: 1px solid grey;
          padding: 8px;
          margin-right: 20px;
          margin-top: 10px;
        }
      </style>
      <iron-icon class="icon-image" icon="[[item.value]]"></iron-icon>
      <paper-input
        disabled="[[item.secondary]]"
        label="icon"
        value="{{item.value}}"
      >
      </paper-input>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

}

customElements.define("op-customize-icon", OpCustomizeIcon);

/***/ }),

/***/ "./src/panels/config/customize/types/op-customize-key-value.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/types/op-customize-key-value.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");




class OpCustomizeKeyValue extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        paper-input {
          @apply --layout-flex;
        }
        .key {
          padding-right: 20px;
        }
      </style>
      <paper-input
        disabled="[[item.secondary]]"
        class="key"
        label="Attribute name"
        value="{{item.attribute}}"
      >
      </paper-input>
      <paper-input
        disabled="[[item.secondary]]"
        label="Attribute value"
        value="{{item.value}}"
      >
      </paper-input>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

}

customElements.define("op-customize-key-value", OpCustomizeKeyValue);

/***/ }),

/***/ "./src/panels/config/customize/types/op-customize-string.js":
/*!******************************************************************!*\
  !*** ./src/panels/config/customize/types/op-customize-string.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");




class OpCustomizeString extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-input
        disabled="[[item.secondary]]"
        label="[[getLabel(item)]]"
        value="{{item.value}}"
      >
      </paper-input>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

  getLabel(item) {
    return item.description + (item.type === "json" ? " (JSON formatted)" : "");
  }

}

customElements.define("op-customize-string", OpCustomizeString);

/***/ }),

/***/ "./src/panels/config/op-entity-config.js":
/*!***********************************************!*\
  !*** ./src/panels/config/op-entity-config.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");










class OpEntityConfig extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex op-style">
        op-card {
          direction: ltr;
        }

        .device-picker {
          @apply --layout-horizontal;
          padding-bottom: 24px;
        }

        .form-placeholder {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 96px;
        }

        [hidden]: {
          display: none;
        }

        .card-actions {
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
      </style>
      <op-card>
        <div class="card-content">
          <div class="device-picker">
            <paper-dropdown-menu
              label="[[label]]"
              class="flex"
              disabled="[[!entities.length]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{selectedEntity}}"
              >
                <template is="dom-repeat" items="[[entities]]" as="state">
                  <paper-item>[[computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="form-container">
            <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">
              <div class="form-placeholder">
                <template is="dom-if" if="[[computeShowNoDevices(formState)]]">
                  No entities found! :-(
                </template>

                <template is="dom-if" if="[[computeShowSpinner(formState)]]">
                  <paper-spinner active="" alt="[[formState]]"></paper-spinner>
                  [[formState]]
                </template>
              </div>
            </template>

            <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>
          </div>
        </div>
        <div class="card-actions">
          <mwc-button
            on-click="saveEntity"
            disabled="[[computeShowPlaceholder(formState)]]"
            >SAVE</mwc-button
          >
          <template is="dom-if" if="[[allowDelete]]">
            <mwc-button
              class="warning"
              on-click="deleteEntity"
              disabled="[[computeShowPlaceholder(formState)]]"
              >DELETE</mwc-button
            >
          </template>
        </div>
      </op-card>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object,
        observer: "oppChanged"
      },
      label: {
        type: String,
        value: "Device"
      },
      entities: {
        type: Array,
        observer: "entitiesChanged"
      },
      allowDelete: {
        type: Boolean,
        value: false
      },
      selectedEntity: {
        type: Number,
        value: -1,
        observer: "entityChanged"
      },
      formState: {
        type: String,
        // no-devices, loading, saving, editing
        value: "no-devices"
      },
      config: {
        type: Object
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.formEl = document.createElement(this.config.component);
    this.formEl.opp = this.opp;
    this.$.form.appendChild(this.formEl);
    this.entityChanged(this.selectedEntity);
  }

  computeSelectCaption(stateObj) {
    return this.config.computeSelectCaption ? this.config.computeSelectCaption(stateObj) : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
  }

  computeShowNoDevices(formState) {
    return formState === "no-devices";
  }

  computeShowSpinner(formState) {
    return formState === "loading" || formState === "saving";
  }

  computeShowPlaceholder(formState) {
    return formState !== "editing";
  }

  computeShowForm(formState) {
    return formState === "editing";
  }

  oppChanged(opp) {
    if (this.formEl) {
      this.formEl.opp = opp;
    }
  }

  entitiesChanged(entities, oldEntities) {
    if (entities.length === 0) {
      this.formState = "no-devices";
      return;
    }

    if (!oldEntities) {
      this.selectedEntity = 0;
      return;
    }

    var oldEntityId = oldEntities[this.selectedEntity].entity_id;
    var newIndex = entities.findIndex(function (ent) {
      return ent.entity_id === oldEntityId;
    });

    if (newIndex === -1) {
      this.selectedEntity = 0;
    } else if (newIndex !== this.selectedEntity) {
      // Entity moved index
      this.selectedEntity = newIndex;
    }
  }

  entityChanged(index) {
    if (!this.entities || !this.formEl) return;
    var entity = this.entities[index];
    if (!entity) return;
    this.formState = "loading";
    var el = this;
    this.formEl.loadEntity(entity).then(function () {
      el.formState = "editing";
    });
  }

  saveEntity() {
    this.formState = "saving";
    var el = this;
    this.formEl.saveEntity().then(function () {
      el.formState = "editing";
    });
  }

}

customElements.define("op-entity-config", OpEntityConfig);

/***/ }),

/***/ "./src/panels/config/op-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/op-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `<dom-module id="op-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild(documentContainer.content);

/***/ }),

/***/ "./src/util/opp-attributes-util.js":
/*!*****************************************!*\
  !*** ./src/util/opp-attributes-util.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const oppAttributeUtil = {};
oppAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength", "timestamp"],
  switch: ["switch", "outlet"]
};
oppAttributeUtil.UNKNOWN_TYPE = "json";
oppAttributeUtil.ADD_TYPE = "key-value";
oppAttributeUtil.TYPE_TO_TAG = {
  string: "op-customize-string",
  json: "op-customize-string",
  icon: "op-customize-icon",
  boolean: "op-customize-boolean",
  array: "op-customize-array",
  "key-value": "op-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

oppAttributeUtil.LOGIC_STATE_ATTRIBUTES = oppAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  supported_features: undefined,
  attribution: undefined,
  restored: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: oppAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (oppAttributeUtil);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWN1c3RvbWl6ZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL29wLWNvbmZpZy1jdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL29wLWN1c3RvbWl6ZS1hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL29wLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL29wLWZvcm0tY3VzdG9taXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9vcC1jdXN0b21pemUtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL29wLWN1c3RvbWl6ZS1ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9vcC1jdXN0b21pemUtaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvb3AtY3VzdG9taXplLWtleS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvb3AtY3VzdG9taXplLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9vcC1lbnRpdHktY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL29wLWZvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvb3BwLWF0dHJpYnV0ZXMtdXRpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlRG9tYWluID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpID0+IHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn07XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsIi8qKlxuICogU29ydCBmdW5jdGlvbiB0byBoZWxwIHNvcnQgc3RhdGVzIGJ5IG5hbWVcbiAqXG4gKiBVc2FnZTpcbiAqICAgY29uc3Qgc3RhdGVzID0gW3N0YXRlMSwgc3RhdGUyXVxuICogICBzdGF0ZXMuc29ydChzdGF0ZXNzb3J0U3RhdGVzQnlOYW1lKTtcbiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGNvbnN0IHNvcnRTdGF0ZXNCeU5hbWUgPSAoZW50aXR5QTogT3BwRW50aXR5LCBlbnRpdHlCOiBPcHBFbnRpdHkpID0+IHtcbiAgY29uc3QgbmFtZUEgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUEpO1xuICBjb25zdCBuYW1lQiA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5Qik7XG4gIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBvcHAgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHA6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShvcHAubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9vcHAtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuXG5pbXBvcnQgXCIuLi9vcC1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vb3AtZW50aXR5LWNvbmZpZ1wiO1xuaW1wb3J0IFwiLi9vcC1mb3JtLWN1c3RvbWl6ZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgc29ydFN0YXRlc0J5TmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N0YXRlc19zb3J0X2J5X25hbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vb3AtcGFuZWwtY29uZmlnXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BDb25maWdDdXN0b21pemUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLXN0eWxlXCI+XG4gICAgICAgIG9wLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZbaGlkZV0ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPG9wcC10YWJzLXN1YnBhZ2VcbiAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIGJhY2stcGF0aD1cIi9jb25maWdcIlxuICAgICAgICB0YWJzPVwiW1tfY29tcHV0ZVRhYnMoKV1dXCJcbiAgICAgICAgc2hvdy1hZHZhbmNlZD1cIltbc2hvd0FkdmFuY2VkXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPG9wLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUucGlja2VyLmhlYWRlcicpXV1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5waWNrZXIuaW50cm9kdWN0aW9uJyldXVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPG9wLWVudGl0eS1jb25maWdcbiAgICAgICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50aXR5XCJcbiAgICAgICAgICAgICAgZW50aXRpZXM9XCJbW2VudGl0aWVzXV1cIlxuICAgICAgICAgICAgICBjb25maWc9XCJbW2VudGl0eUNvbmZpZ11dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvb3AtZW50aXR5LWNvbmZpZz5cbiAgICAgICAgICA8L29wLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3BwLXRhYnMtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICBzaG93QWR2YW5jZWQ6IEJvb2xlYW4sXG4gICAgICBlbnRpdGllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0aWVzKG9wcClcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eUNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBcIm9wLWZvcm0tY3VzdG9taXplXCIsXG4gICAgICAgICAgY29tcHV0ZVNlbGVjdENhcHRpb246IChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopICtcbiAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICtcbiAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgcmV0dXJuIGlzV2lkZSA/IFwiY29udGVudFwiIDogXCJjb250ZW50IG5hcnJvd1wiO1xuICB9XG5cbiAgX2JhY2tUYXBwZWQoKSB7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBfY29tcHV0ZVRhYnMoKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1NlY3Rpb25zLmdlbmVyYWw7XG4gIH1cblxuICBjb21wdXRlRW50aXRpZXMob3BwKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wcC5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IG9wcC5zdGF0ZXNba2V5XSlcbiAgICAgIC5zb3J0KHNvcnRTdGF0ZXNCeU5hbWUpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1jb25maWctY3VzdG9taXplXCIsIE9wQ29uZmlnQ3VzdG9taXplKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgb3BwQXR0cmlidXRlVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC9vcHAtYXR0cmlidXRlcy11dGlsXCI7XG5pbXBvcnQgXCIuLi9vcC1mb3JtLXN0eWxlXCI7XG5pbXBvcnQgXCIuL3R5cGVzL29wLWN1c3RvbWl6ZS1hcnJheVwiO1xuaW1wb3J0IFwiLi90eXBlcy9vcC1jdXN0b21pemUtYm9vbGVhblwiO1xuaW1wb3J0IFwiLi90eXBlcy9vcC1jdXN0b21pemUtaWNvblwiO1xuaW1wb3J0IFwiLi90eXBlcy9vcC1jdXN0b21pemUta2V5LXZhbHVlXCI7XG5pbXBvcnQgXCIuL3R5cGVzL29wLWN1c3RvbWl6ZS1zdHJpbmdcIjtcblxuY2xhc3MgT3BDdXN0b21pemVBdHRyaWJ1dGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgIGljb249XCJbW2dldEljb24oaXRlbS5zZWNvbmRhcnkpXV1cIlxuICAgICAgICBvbi1jbGljaz1cInRhcEJ1dHRvblwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogXCJpdGVtT2JzZXJ2ZXJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRhcEJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5pdGVtLnNlY29uZGFyeSkge1xuICAgICAgdGhpcy5pdGVtID0geyAuLi50aGlzLml0ZW0sIHNlY29uZGFyeTogZmFsc2UgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtID0geyAuLi50aGlzLml0ZW0sIGNsb3NlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG4gIGdldEljb24oc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuIHNlY29uZGFyeSA/IFwib3BwOnBlbmNpbFwiIDogXCJvcHA6Y2xvc2VcIjtcbiAgfVxuXG4gIGl0ZW1PYnNlcnZlcihpdGVtKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJC53cmFwcGVyO1xuICAgIGNvbnN0IHRhZyA9IG9wcEF0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUdbaXRlbS50eXBlXS50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBjaGlsZDtcbiAgICBpZiAod3JhcHBlci5sYXN0Q2hpbGQgJiYgd3JhcHBlci5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gdGFnKSB7XG4gICAgICBjaGlsZCA9IHdyYXBwZXIubGFzdENoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAod3JhcHBlci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICAgIHRoaXMuJC5jaGlsZCA9IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcudG9Mb3dlckNhc2UoKSk7XG4gICAgICBjaGlsZC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcIml0ZW0tY2hhbmdlZFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbSA9IHsgLi4uY2hpbGQuaXRlbSB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoaWxkLnNldFByb3BlcnRpZXMoeyBpdGVtOiB0aGlzLml0ZW0gfSk7XG4gICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtY3VzdG9taXplLWF0dHJpYnV0ZVwiLCBPcEN1c3RvbWl6ZUF0dHJpYnV0ZSk7XG4iLCJpbXBvcnQgeyBNdXRhYmxlRGF0YSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvbXV0YWJsZS1kYXRhXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL29wLWN1c3RvbWl6ZS1hdHRyaWJ1dGVcIjtcblxuY2xhc3MgT3BGb3JtQ3VzdG9taXplQXR0cmlidXRlcyBleHRlbmRzIE11dGFibGVEYXRhKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwie3thdHRyaWJ1dGVzfX1cIiBtdXRhYmxlLWRhdGE9XCJcIj5cbiAgICAgICAgPG9wLWN1c3RvbWl6ZS1hdHRyaWJ1dGUgaXRlbT1cInt7aXRlbX19XCIgaGlkZGVuJD1cIltbaXRlbS5jbG9zZWRdXVwiPlxuICAgICAgICA8L29wLWN1c3RvbWl6ZS1hdHRyaWJ1dGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcIm9wLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcIixcbiAgT3BGb3JtQ3VzdG9taXplQXR0cmlidXRlc1xuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCBvcHBBdHRyaWJ1dGVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlsL29wcC1hdHRyaWJ1dGVzLXV0aWxcIjtcbmltcG9ydCBcIi4vb3AtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5jbGFzcyBPcEZvcm1DdXN0b21pemUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBvcC1zdHlsZSBvcC1mb3JtLXN0eWxlXCI+XG4gICAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgaWY9XCJbW2NvbXB1dGVTaG93V2FybmluZyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndhcm5pbmdcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLndhcm5pbmcuaW5jbHVkZV9zZW50ZW5jZScpXV1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW4tcGVlci1wb3dlci5pby9kb2NzL2NvbmZpZ3VyYXRpb24vY3VzdG9taXppbmctZGV2aWNlcy8jY3VzdG9taXphdGlvbi11c2luZy10aGUtdWlcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLndhcm5pbmcuaW5jbHVkZV9saW5rJyldXTwvYVxuICAgICAgICAgID4uPGJyIC8+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS53YXJuaW5nLm5vdF9hcHBsaWVkJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzTG9jYWxBdHRyaWJ1dGVzXV1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwiYXR0cmlidXRlcy10ZXh0XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5hdHRyaWJ1dGVzX2N1c3RvbWl6ZScpXV08YnIgLz5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPG9wLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRyaWJ1dGVzPVwie3tsb2NhbEF0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L29wLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc0dsb2JhbEF0dHJpYnV0ZXNdXVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJhdHRyaWJ1dGVzLXRleHRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLmF0dHJpYnV0ZXNfb3V0c2lkZScpXV08YnIgLz5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLmRpZmZlcmVudF9pbmNsdWRlJyldXVxuICAgICAgICA8L2g0PlxuICAgICAgICA8b3AtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2dsb2JhbEF0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L29wLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc0V4aXN0aW5nQXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuYXR0cmlidXRlc19zZXQnKV1dPGJyIC8+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5hdHRyaWJ1dGVzX292ZXJyaWRlJyldXVxuICAgICAgICA8L2g0PlxuICAgICAgICA8b3AtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2V4aXN0aW5nQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvb3AtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzTmV3QXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuYXR0cmlidXRlc19ub3Rfc2V0JyldXVxuICAgICAgICA8L2g0PlxuICAgICAgICA8b3AtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e25ld0F0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L29wLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUucGlja19hdHRyaWJ1dGUnKV1dXCJcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZE5ld0F0dHJpYnV0ZX19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgaXRlbXM9XCJbW25ld0F0dHJpYnV0ZXNPcHRpb25zXV1cIlxuICAgICAgICAgICAgICBhcz1cIm9wdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbb3B0aW9uXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eTogT2JqZWN0LFxuXG4gICAgICBsb2NhbEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVMb2NhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcpXCIsXG4gICAgICB9LFxuICAgICAgaGFzTG9jYWxBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBnbG9iYWxBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlR2xvYmFsQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKVwiLFxuICAgICAgfSxcbiAgICAgIGhhc0dsb2JhbEF0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIGV4aXN0aW5nQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6XG4gICAgICAgICAgXCJjb21wdXRlRXhpc3RpbmdBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcsIGVudGl0eSlcIixcbiAgICAgIH0sXG4gICAgICBoYXNFeGlzdGluZ0F0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIG5ld0F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG4gICAgICBoYXNOZXdBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBuZXdBdHRyaWJ1dGVzT3B0aW9uczogQXJyYXksXG4gICAgICBzZWxlY3RlZE5ld0F0dHJpYnV0ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWROZXdBdHRyaWJ1dGVPYnNlcnZlclwiLFxuICAgICAgfSxcblxuICAgICAgbG9jYWxDb25maWc6IE9iamVjdCxcbiAgICAgIGdsb2JhbENvbmZpZzogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJhdHRyaWJ1dGVzT2JzZXJ2ZXIobG9jYWxBdHRyaWJ1dGVzLiosIGdsb2JhbEF0dHJpYnV0ZXMuKiwgZXhpc3RpbmdBdHRyaWJ1dGVzLiosIG5ld0F0dHJpYnV0ZXMuKilcIixcbiAgICBdO1xuICB9XG5cbiAgX2luaXRPcGVuT2JqZWN0KGtleSwgdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dHJpYnV0ZToga2V5LFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY2xvc2VkOiBmYWxzZSxcbiAgICAgIGRvbWFpbjogY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSxcbiAgICAgIHNlY29uZGFyeTogc2Vjb25kYXJ5LFxuICAgICAgZGVzY3JpcHRpb246IGtleSxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuICB9XG5cbiAgbG9hZEVudGl0eShlbnRpdHkpIHtcbiAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICByZXR1cm4gdGhpcy5vcHBcbiAgICAgIC5jYWxsQXBpKFwiR0VUXCIsIFwiY29uZmlnL2N1c3RvbWl6ZS9jb25maWcvXCIgKyBlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbENvbmZpZyA9IGRhdGEubG9jYWw7XG4gICAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWw7XG4gICAgICAgIHRoaXMubmV3QXR0cmlidXRlcyA9IFtdO1xuICAgICAgfSk7XG4gIH1cblxuICBzYXZlRW50aXR5KCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMubG9jYWxBdHRyaWJ1dGVzLmNvbmNhdChcbiAgICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyxcbiAgICAgIHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzXG4gICAgKTtcbiAgICBhdHRycy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoYXR0ci5jbG9zZWQgfHwgYXR0ci5zZWNvbmRhcnkgfHwgIWF0dHIuYXR0cmlidXRlIHx8ICFhdHRyLnZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudHlwZSA9PT0gXCJqc29uXCIgPyBKU09OLnBhcnNlKGF0dHIudmFsdWUpIDogYXR0ci52YWx1ZTtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgIGRhdGFbYXR0ci5hdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvYmplY3RJZCA9IHRoaXMuZW50aXR5LmVudGl0eV9pZDtcbiAgICByZXR1cm4gdGhpcy5vcHAuY2FsbEFwaShcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgXCJjb25maWcvY3VzdG9taXplL2NvbmZpZy9cIiArIG9iamVjdElkLFxuICAgICAgZGF0YVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIHZhbHVlLCBzZWNvbmRhcnkpIHtcbiAgICBjb25zdCBjb25maWcgPSBvcHBBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XSB8fCB7XG4gICAgICB0eXBlOiBvcHBBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChcbiAgICAgIGtleSxcbiAgICAgIGNvbmZpZy50eXBlID09PSBcImpzb25cIiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLFxuICAgICAgc2Vjb25kYXJ5LFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlcyhjb25maWcsIGtleXMsIHNlY29uZGFyeSkge1xuICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PlxuICAgICAgdGhpcy5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIGNvbmZpZ1trZXldLCBzZWNvbmRhcnkpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVMb2NhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnKSByZXR1cm4gW107XG4gICAgY29uc3QgbG9jYWxLZXlzID0gT2JqZWN0LmtleXMobG9jYWxDb25maWcpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBsb2NhbEtleXMsIGZhbHNlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29tcHV0ZUdsb2JhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZykge1xuICAgIGlmICghbG9jYWxDb25maWcgfHwgIWdsb2JhbENvbmZpZykgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsQ29uZmlnKS5maWx0ZXIoXG4gICAgICAoa2V5KSA9PiAhbG9jYWxLZXlzLmluY2x1ZGVzKGtleSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlQXR0cmlidXRlcyhnbG9iYWxDb25maWcsIGdsb2JhbEtleXMsIHRydWUpO1xuICB9XG5cbiAgY29tcHV0ZUV4aXN0aW5nQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnLCBlbnRpdHkpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcgfHwgIWVudGl0eSkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsQ29uZmlnKTtcbiAgICBjb25zdCBlbnRpdHlLZXlzID0gT2JqZWN0LmtleXMoZW50aXR5LmF0dHJpYnV0ZXMpLmZpbHRlcihcbiAgICAgIChrZXkpID0+ICFsb2NhbEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhZ2xvYmFsS2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZXMoZW50aXR5LmF0dHJpYnV0ZXMsIGVudGl0eUtleXMsIHRydWUpO1xuICB9XG5cbiAgY29tcHV0ZVNob3dXYXJuaW5nKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxDb25maWcpLnNvbWUoXG4gICAgICAoa2V5KSA9PlxuICAgICAgICBKU09OLnN0cmluZ2lmeShnbG9iYWxDb25maWdba2V5XSkgIT09IEpTT04uc3RyaW5naWZ5KGxvY2FsQ29uZmlnW2tleV0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlckZyb21BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gKGtleSkgPT5cbiAgICAgICFhdHRyaWJ1dGVzIHx8XG4gICAgICBhdHRyaWJ1dGVzLmV2ZXJ5KChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSAhPT0ga2V5IHx8IGF0dHIuY2xvc2VkKTtcbiAgfVxuXG4gIGdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgIGxvY2FsQXR0cmlidXRlcyxcbiAgICBnbG9iYWxBdHRyaWJ1dGVzLFxuICAgIGV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICBuZXdBdHRyaWJ1dGVzXG4gICkge1xuICAgIGNvbnN0IGtub3duS2V5cyA9IE9iamVjdC5rZXlzKG9wcEF0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBjb25mID0gb3BwQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29uZiAmJlxuICAgICAgICAgICghY29uZi5kb21haW5zIHx8XG4gICAgICAgICAgICAhdGhpcy5lbnRpdHkgfHxcbiAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobG9jYWxBdHRyaWJ1dGVzKSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKG5ld0F0dHJpYnV0ZXMpKTtcbiAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoXCJPdGhlclwiKTtcbiAgfVxuXG4gIHNlbGVjdGVkTmV3QXR0cmlidXRlT2JzZXJ2ZXIoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQgPCAwKSByZXR1cm47XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5uZXdBdHRyaWJ1dGVzT3B0aW9uc1tzZWxlY3RlZF07XG4gICAgaWYgKHNlbGVjdGVkID09PSB0aGlzLm5ld0F0dHJpYnV0ZXNPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vIFRoZSBcIk90aGVyXCIgb3B0aW9uLlxuICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX2luaXRPcGVuT2JqZWN0KFwiXCIsIFwiXCIsIGZhbHNlIC8qIHNlY29uZGFyeSAqLywge1xuICAgICAgICB0eXBlOiBvcHBBdHRyaWJ1dGVVdGlsLkFERF9UWVBFLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnB1c2goXCJuZXdBdHRyaWJ1dGVzXCIsIGF0dHIpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5sb2NhbEF0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJsb2NhbEF0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJnbG9iYWxBdHRyaWJ1dGVzLlwiICsgcmVzdWx0ICsgXCIuY2xvc2VkXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0ID0gdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJleGlzdGluZ0F0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLm5ld0F0dHJpYnV0ZXMuZmluZEluZGV4KChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSA9PT0gb3B0aW9uKTtcbiAgICBpZiAocmVzdWx0ID49IDApIHtcbiAgICAgIHRoaXMuc2V0KFwibmV3QXR0cmlidXRlcy5cIiArIHJlc3VsdCArIFwiLmNsb3NlZFwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKFxuICAgICAgb3B0aW9uLFxuICAgICAgXCJcIixcbiAgICAgIGZhbHNlIC8qIHNlY29uZGFyeSAqL1xuICAgICk7XG4gICAgdGhpcy5wdXNoKFwibmV3QXR0cmlidXRlc1wiLCBhdHRyKTtcbiAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gIH1cblxuICBhdHRyaWJ1dGVzT2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5oYXNMb2NhbEF0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5sb2NhbEF0dHJpYnV0ZXMgJiYgdGhpcy5sb2NhbEF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc0dsb2JhbEF0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5nbG9iYWxBdHRyaWJ1dGVzICYmXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc0V4aXN0aW5nQXR0cmlidXRlcyA9XG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyAmJlxuICAgICAgdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc05ld0F0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzICYmIHRoaXMubmV3QXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiAhYXR0ci5jbG9zZWQpO1xuICAgIHRoaXMubmV3QXR0cmlidXRlc09wdGlvbnMgPSB0aGlzLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgICAgdGhpcy5sb2NhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICAgIHRoaXMubmV3QXR0cmlidXRlc1xuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWZvcm0tY3VzdG9taXplXCIsIE9wRm9ybUN1c3RvbWl6ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIE9wQ3VzdG9taXplQXJyYXkgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICBtYXJnaW46IC05cHggMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIGxhYmVsPVwiW1tpdGVtLmRlc2NyaXB0aW9uXV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIHNlbGVjdGVkLWl0ZW0tbGFiZWw9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICBzZWxlY3RlZD1cIltbY29tcHV0ZVNlbGVjdGVkKGl0ZW0pXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tnZXRPcHRpb25zKGl0ZW0pXV1cIiBhcz1cIm9wdGlvblwiPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tvcHRpb25dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0T3B0aW9ucyhpdGVtKSB7XG4gICAgY29uc3QgZG9tYWluID0gaXRlbS5kb21haW4gfHwgXCIqXCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGl0ZW0ub3B0aW9uc1tkb21haW5dIHx8IGl0ZW0ub3B0aW9uc1tcIipcIl07XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aGlzLml0ZW0udHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICB0aGlzLmZpcmUoXCJpdGVtLWNoYW5nZWRcIik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLnNvcnQoKTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RlZChpdGVtKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhpdGVtKTtcbiAgICByZXR1cm4gb3B0aW9ucy5pbmRleE9mKGl0ZW0udmFsdWUpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1jdXN0b21pemUtYXJyYXlcIiwgT3BDdXN0b21pemVBcnJheSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgT3BDdXN0b21pemVCb29sZWFuIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWNoZWNrYm94IGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCIgY2hlY2tlZD1cInt7aXRlbS52YWx1ZX19XCI+XG4gICAgICAgIFtbaXRlbS5kZXNjcmlwdGlvbl1dXG4gICAgICA8L3BhcGVyLWNoZWNrYm94PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtY3VzdG9taXplLWJvb2xlYW5cIiwgT3BDdXN0b21pemVCb29sZWFuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBPcEN1c3RvbWl6ZUljb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aXJvbi1pY29uIGNsYXNzPVwiaWNvbi1pbWFnZVwiIGljb249XCJbW2l0ZW0udmFsdWVdXVwiPjwvaXJvbi1pY29uPlxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgbGFiZWw9XCJpY29uXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtY3VzdG9taXplLWljb25cIiwgT3BDdXN0b21pemVJY29uKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBPcEN1c3RvbWl6ZUtleVZhbHVlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5rZXkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBjbGFzcz1cImtleVwiXG4gICAgICAgIGxhYmVsPVwiQXR0cmlidXRlIG5hbWVcIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS5hdHRyaWJ1dGV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgbGFiZWw9XCJBdHRyaWJ1dGUgdmFsdWVcIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcbiAgICAgID5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1jdXN0b21pemUta2V5LXZhbHVlXCIsIE9wQ3VzdG9taXplS2V5VmFsdWUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIE9wQ3VzdG9taXplU3RyaW5nIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgbGFiZWw9XCJbW2dldExhYmVsKGl0ZW0pXV1cIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcbiAgICAgID5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TGFiZWwoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmRlc2NyaXB0aW9uICsgKGl0ZW0udHlwZSA9PT0gXCJqc29uXCIgPyBcIiAoSlNPTiBmb3JtYXR0ZWQpXCIgOiBcIlwiKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtY3VzdG9taXplLXN0cmluZ1wiLCBPcEN1c3RvbWl6ZVN0cmluZyk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xyXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XHJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xyXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcclxuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xyXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWNhcmRcIjtcclxuXHJcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcclxuXHJcbmNsYXNzIE9wRW50aXR5Q29uZmlnIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xyXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggb3Atc3R5bGVcIj5cclxuICAgICAgICBvcC1jYXJkIHtcclxuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRldmljZS1waWNrZXIge1xyXG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcclxuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW2hpZGRlbl06IHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xyXG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWp1c3RpZmllZDtcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxvcC1jYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XHJcbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFlbnRpdGllcy5sZW5ndGhdXVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxyXG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkRW50aXR5fX1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZW50aXRpZXNdXVwiIGFzPVwic3RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxyXG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlU2hvd05vRGV2aWNlcyhmb3JtU3RhdGUpXV1cIj5cclxuICAgICAgICAgICAgICAgICAgTm8gZW50aXRpZXMgZm91bmQhIDotKFxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZVNob3dTcGlubmVyKGZvcm1TdGF0ZSldXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU9XCJcIiBhbHQ9XCJbW2Zvcm1TdGF0ZV1dXCI+PC9wYXBlci1zcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICBbW2Zvcm1TdGF0ZV1dXHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shY29tcHV0ZVNob3dGb3JtKGZvcm1TdGF0ZSldXVwiIGlkPVwiZm9ybVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPG13Yy1idXR0b25cclxuICAgICAgICAgICAgb24tY2xpY2s9XCJzYXZlRW50aXR5XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCJcclxuICAgICAgICAgICAgPlNBVkU8L213Yy1idXR0b25cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1thbGxvd0RlbGV0ZV1dXCI+XHJcbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICBvbi1jbGljaz1cImRlbGV0ZUVudGl0eVwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCJcclxuICAgICAgICAgICAgICA+REVMRVRFPC9td2MtYnV0dG9uXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvb3AtY2FyZD5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcHA6IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgb2JzZXJ2ZXI6IFwib3BwQ2hhbmdlZFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbGFiZWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IFwiRGV2aWNlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBlbnRpdGllczoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIG9ic2VydmVyOiBcImVudGl0aWVzQ2hhbmdlZFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgYWxsb3dEZWxldGU6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNlbGVjdGVkRW50aXR5OiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHZhbHVlOiAtMSxcclxuICAgICAgICBvYnNlcnZlcjogXCJlbnRpdHlDaGFuZ2VkXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb3JtU3RhdGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy8gbm8tZGV2aWNlcywgbG9hZGluZywgc2F2aW5nLCBlZGl0aW5nXHJcbiAgICAgICAgdmFsdWU6IFwibm8tZGV2aWNlc1wiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICAgIHRoaXMuZm9ybUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmNvbmZpZy5jb21wb25lbnQpO1xyXG4gICAgdGhpcy5mb3JtRWwub3BwID0gdGhpcy5vcHA7XHJcbiAgICB0aGlzLiQuZm9ybS5hcHBlbmRDaGlsZCh0aGlzLmZvcm1FbCk7XHJcbiAgICB0aGlzLmVudGl0eUNoYW5nZWQodGhpcy5zZWxlY3RlZEVudGl0eSk7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iaikge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbXB1dGVTZWxlY3RDYXB0aW9uXHJcbiAgICAgID8gdGhpcy5jb25maWcuY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopXHJcbiAgICAgIDogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlU2hvd05vRGV2aWNlcyhmb3JtU3RhdGUpIHtcclxuICAgIHJldHVybiBmb3JtU3RhdGUgPT09IFwibm8tZGV2aWNlc1wiO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZVNob3dTcGlubmVyKGZvcm1TdGF0ZSkge1xyXG4gICAgcmV0dXJuIGZvcm1TdGF0ZSA9PT0gXCJsb2FkaW5nXCIgfHwgZm9ybVN0YXRlID09PSBcInNhdmluZ1wiO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpIHtcclxuICAgIHJldHVybiBmb3JtU3RhdGUgIT09IFwiZWRpdGluZ1wiO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZVNob3dGb3JtKGZvcm1TdGF0ZSkge1xyXG4gICAgcmV0dXJuIGZvcm1TdGF0ZSA9PT0gXCJlZGl0aW5nXCI7XHJcbiAgfVxyXG5cclxuICBvcHBDaGFuZ2VkKG9wcCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybUVsKSB7XHJcbiAgICAgIHRoaXMuZm9ybUVsLm9wcCA9IG9wcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudGl0aWVzQ2hhbmdlZChlbnRpdGllcywgb2xkRW50aXRpZXMpIHtcclxuICAgIGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5mb3JtU3RhdGUgPSBcIm5vLWRldmljZXNcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFvbGRFbnRpdGllcykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gMDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvbGRFbnRpdHlJZCA9IG9sZEVudGl0aWVzW3RoaXMuc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZDtcclxuXHJcbiAgICB2YXIgbmV3SW5kZXggPSBlbnRpdGllcy5maW5kSW5kZXgoZnVuY3Rpb24oZW50KSB7XHJcbiAgICAgIHJldHVybiBlbnQuZW50aXR5X2lkID09PSBvbGRFbnRpdHlJZDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChuZXdJbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4ICE9PSB0aGlzLnNlbGVjdGVkRW50aXR5KSB7XHJcbiAgICAgIC8vIEVudGl0eSBtb3ZlZCBpbmRleFxyXG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbmV3SW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbnRpdHlDaGFuZ2VkKGluZGV4KSB7XHJcbiAgICBpZiAoIXRoaXMuZW50aXRpZXMgfHwgIXRoaXMuZm9ybUVsKSByZXR1cm47XHJcbiAgICB2YXIgZW50aXR5ID0gdGhpcy5lbnRpdGllc1tpbmRleF07XHJcbiAgICBpZiAoIWVudGl0eSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZm9ybVN0YXRlID0gXCJsb2FkaW5nXCI7XHJcbiAgICB2YXIgZWwgPSB0aGlzO1xyXG4gICAgdGhpcy5mb3JtRWwubG9hZEVudGl0eShlbnRpdHkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgIGVsLmZvcm1TdGF0ZSA9IFwiZWRpdGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlRW50aXR5KCkge1xyXG4gICAgdGhpcy5mb3JtU3RhdGUgPSBcInNhdmluZ1wiO1xyXG4gICAgdmFyIGVsID0gdGhpcztcclxuICAgIHRoaXMuZm9ybUVsLnNhdmVFbnRpdHkoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICBlbC5mb3JtU3RhdGUgPSBcImVkaXRpbmdcIjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtZW50aXR5LWNvbmZpZ1wiLCBPcEVudGl0eUNvbmZpZyk7XHJcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwib3AtZm9ybS1zdHlsZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtMjtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cC52ZXJ0aWNhbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LmZvcm0tY29udHJvbCB7XG4gICAgICAgIG1hcmdpbjogLTlweCAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImNvbnN0IG9wcEF0dHJpYnV0ZVV0aWwgPSB7fTtcblxub3BwQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcbiAgICBcImF3bmluZ1wiLFxuICAgIFwiYmxpbmRcIixcbiAgICBcImN1cnRhaW5cIixcbiAgICBcImRhbXBlclwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlXCIsXG4gICAgXCJzaGFkZVwiLFxuICAgIFwic2h1dHRlclwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIHNlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiaHVtaWRpdHlcIixcbiAgICBcImlsbHVtaW5hbmNlXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiLFxuICAgIFwicHJlc3N1cmVcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJzaWduYWxfc3RyZW5ndGhcIixcbiAgICBcInRpbWVzdGFtcFwiLFxuICBdLFxuICBzd2l0Y2g6IFtcInN3aXRjaFwiLCBcIm91dGxldFwiXSxcbn07XG5cbm9wcEF0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gXCJqc29uXCI7XG5vcHBBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gXCJrZXktdmFsdWVcIjtcblxub3BwQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiBcIm9wLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAganNvbjogXCJvcC1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGljb246IFwib3AtY3VzdG9taXplLWljb25cIixcbiAgYm9vbGVhbjogXCJvcC1jdXN0b21pemUtYm9vbGVhblwiLFxuICBhcnJheTogXCJvcC1jdXN0b21pemUtYXJyYXlcIixcbiAgXCJrZXktdmFsdWVcIjogXCJvcC1jdXN0b21pemUta2V5LXZhbHVlXCIsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5vcHBBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBvcHBBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICBmcmllbmRseV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlc2NyaXB0aW9uOiBcIk5hbWVcIiB9LFxuICBpY29uOiB7IHR5cGU6IFwiaWNvblwiIH0sXG4gIGVtdWxhdGVkX2h1ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgcmVzdG9yZWQ6IHVuZGVmaW5lZCxcbiAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgZGV2aWNlX2NsYXNzOiB7XG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIG9wdGlvbnM6IG9wcEF0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZpY2UgY2xhc3NcIixcbiAgICBkb21haW5zOiBbXCJiaW5hcnlfc2Vuc29yXCIsIFwiY292ZXJcIiwgXCJzZW5zb3JcIiwgXCJzd2l0Y2hcIl0sXG4gIH0sXG4gIGhpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiwgZGVzY3JpcHRpb246IFwiSGlkZSBmcm9tIFVJXCIgfSxcbiAgYXNzdW1lZF9zdGF0ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgIFwic3dpdGNoXCIsXG4gICAgICBcImxpZ2h0XCIsXG4gICAgICBcImNvdmVyXCIsXG4gICAgICBcImNsaW1hdGVcIixcbiAgICAgIFwiZmFuXCIsXG4gICAgICBcImdyb3VwXCIsXG4gICAgICBcIndhdGVyX2hlYXRlclwiLFxuICAgIF0sXG4gIH0sXG4gIGluaXRpYWxfc3RhdGU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImF1dG9tYXRpb25cIl0sXG4gIH0sXG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3BwQXR0cmlidXRlVXRpbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBWEE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBakZBO0FBQ0E7QUFpRkE7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZFQTtBQUNBO0FBdUVBOzs7Ozs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUF2QkE7QUFDQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQXhDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQU1BO0FBQ0E7QUExVUE7QUFDQTtBQTBVQTs7Ozs7Ozs7Ozs7O0FDdlZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFDQTtBQWtEQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFqQkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQWhDQTtBQUNBO0FBZ0NBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUF0Q0E7QUFDQTtBQXNDQTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBd0JBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBakNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMU1BO0FBQ0E7QUEyTUE7Ozs7Ozs7Ozs7O0FDdk5BO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBRUE7QUFDQTtBQXlCQTtBQVdBO0FBVUE7QUEvQ0E7QUFrREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBMUNBO0FBNkNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=