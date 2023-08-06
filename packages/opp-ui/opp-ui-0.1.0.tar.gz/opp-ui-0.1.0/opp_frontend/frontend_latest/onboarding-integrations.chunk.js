(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-integrations"],{

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function (src) {
    this._updateIcon();
  },
  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
const debounce = (func, wait, immediate = false) => {
  let timeout; // @ts-ignore

  return function (...args) {
    // tslint:disable:no-this-assignment
    // @ts-ignore
    const context = this;

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ "./src/components/op-icon.ts":
/*!***********************************!*\
  !*** ./src/components/op-icon.ts ***!
  \***********************************/
/*! exports provided: OpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIcon", function() { return OpIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class OpIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("op-icon", OpIcon);

/***/ }),

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: getConfigEntries, deleteConfigEntry, getConfigEntrySystemOptions, updateConfigEntrySystemOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigEntry", function() { return deleteConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntrySystemOptions", function() { return getConfigEntrySystemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntrySystemOptions", function() { return updateConfigEntrySystemOptions; });
const getConfigEntries = opp => opp.callApi("GET", "config/config_entries/entry");
const deleteConfigEntry = (opp, configEntryId) => opp.callApi("DELETE", `config/config_entries/entry/${configEntryId}`);
const getConfigEntrySystemOptions = (opp, configEntryId) => opp.callWS({
  type: "config_entries/system_options/list",
  entry_id: configEntryId
});
const updateConfigEntrySystemOptions = (opp, configEntryId, params) => opp.callWS(Object.assign({
  type: "config_entries/system_options/update",
  entry_id: configEntryId
}, params));

/***/ }),

/***/ "./src/data/config_flow.ts":
/*!*********************************!*\
  !*** ./src/data/config_flow.ts ***!
  \*********************************/
/*! exports provided: DISCOVERY_SOURCES, createConfigFlow, fetchConfigFlow, handleConfigFlowStep, ignoreConfigFlow, deleteConfigFlow, getConfigFlowHandlers, getConfigFlowInProgressCollection, subscribeConfigFlowInProgress, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOVERY_SOURCES", function() { return DISCOVERY_SOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreConfigFlow", function() { return ignoreConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowInProgressCollection", function() { return getConfigFlowInProgressCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");


const DISCOVERY_SOURCES = ["unignore", "homekit", "ssdp", "zeroconf"];
const createConfigFlow = (opp, handler) => opp.callApi("POST", "config/config_entries/flow", {
  handler
});
const fetchConfigFlow = (opp, flowId) => opp.callApi("GET", `config/config_entries/flow/${flowId}`);
const handleConfigFlowStep = (opp, flowId, data) => opp.callApi("POST", `config/config_entries/flow/${flowId}`, data);
const ignoreConfigFlow = (opp, flowId) => opp.callWS({
  type: "config_entries/ignore_flow",
  flow_id: flowId
});
const deleteConfigFlow = (opp, flowId) => opp.callApi("DELETE", `config/config_entries/flow/${flowId}`);
const getConfigFlowHandlers = opp => opp.callApi("GET", "config/config_entries/flow_handlers");

const fetchConfigFlowInProgress = conn => conn.sendMessagePromise({
  type: "config_entries/flow/progress"
});

const subscribeConfigFlowInProgressUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(() => fetchConfigFlowInProgress(conn).then(flows => store.setState(flows, true)), 500, true), "config_entry_discovered");

const getConfigFlowInProgressCollection = conn => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_1__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
const subscribeConfigFlowInProgress = (opp, onChange) => getConfigFlowInProgressCollection(opp.connection).subscribe(onChange);
const localizeConfigFlowTitle = (localize, flow) => {
  const placeholders = flow.context.title_placeholders || {};
  const placeholderKeys = Object.keys(placeholders);

  if (placeholderKeys.length === 0) {
    return localize(`component.${flow.handler}.config.title`);
  }

  const args = [];
  placeholderKeys.forEach(key => {
    args.push(key);
    args.push(placeholders[key]);
  });
  return localize(`component.${flow.handler}.config.flow_title`, ...args);
};

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
/*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigFlowDialog", function() { return loadConfigFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigFlowDialog", function() { return showConfigFlowDialog; });
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");





const loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["loadDataEntryFlowDialog"];
const showConfigFlowDialog = (element, dialogParams) => Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["showFlowDialog"])(element, dialogParams, {
  loadDevicesAndAreas: true,
  getFlowHandlers: opp => Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_0__["getConfigFlowHandlers"])(opp).then(handlers => handlers.sort((handlerA, handlerB) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["caseInsensitiveCompare"])(opp.localize(`component.${handlerA}.config.title`), opp.localize(`component.${handlerB}.config.title`)))),
  createFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["createConfigFlow"],
  fetchFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["fetchConfigFlow"],
  handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["handleConfigFlowStep"],
  deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["deleteConfigFlow"],

  renderAbortDescription(opp, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(opp.localize, `component.${step.handler}.config.abort.${step.reason}`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <op-markdown allowsvg .content=${description}></op-markdown>
          ` : "";
  },

  renderShowFormStepHeader(opp, step) {
    return opp.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderShowFormStepDescription(opp, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(opp.localize, `component.${step.handler}.config.step.${step.step_id}.description`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <op-markdown allowsvg .content=${description}></op-markdown>
          ` : "";
  },

  renderShowFormStepFieldLabel(opp, step, field) {
    return opp.localize(`component.${step.handler}.config.step.${step.step_id}.data.${field.name}`);
  },

  renderShowFormStepFieldError(opp, step, error) {
    return opp.localize(`component.${step.handler}.config.error.${error}`);
  },

  renderExternalStepHeader(opp, step) {
    return opp.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderExternalStepDescription(opp, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(opp.localize, `component.${step.handler}.config.${step.step_id}.description`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <p>
          ${opp.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <op-markdown allowsvg .content=${description}></op-markdown>
            ` : ""}
      `;
  },

  renderCreateEntryDescription(opp, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(opp.localize, `component.${step.handler}.config.create_entry.${step.description || "default"}`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <op-markdown allowsvg .content=${description}></op-markdown>
            ` : ""}
        <p>
          ${opp.localize("ui.panel.config.integrations.config_flow.created_config", "name", step.title)}
        </p>
      `;
  }

});

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts":
/*!****************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-data-entry-flow.ts ***!
  \****************************************************************/
/*! exports provided: loadDataEntryFlowDialog, showFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataEntryFlowDialog", function() { return loadDataEntryFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFlowDialog", function() { return showFlowDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDataEntryFlowDialog = () => Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e(3), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e(4), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e(7), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e(10), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~more-info-dialog~person-detail-dialog"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e(11), __webpack_require__.e("dialog-config-flow~op-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
const showFlowDialog = (element, dialogParams, flowConfig) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-data-entry-flow",
    dialogImport: loadDataEntryFlowDialog,
    dialogParams: Object.assign({}, dialogParams, {
      flowConfig
    })
  });
};

/***/ }),

/***/ "./src/onboarding/integration-badge.ts":
/*!*********************************************!*\
  !*** ./src/onboarding/integration-badge.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/op-icon */ "./src/components/op-icon.ts");
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




let IntegrationBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("integration-badge")], function (_initialize, _LitElement) {
  class IntegrationBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: IntegrationBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "title",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "badgeIcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "clickable",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="icon">
        <iron-icon .icon=${this.icon}></iron-icon>
        ${this.badgeIcon ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <op-icon class="badge" .icon=${this.badgeIcon}></op-icon>
            ` : ""}
      </div>
      <div class="title">${this.title}</div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }

      :host([clickable]) {
        color: var(--primary-text-color);
      }

      .icon {
        position: relative;
        margin: 0 auto 8px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host([clickable]) .icon {
        border-color: var(--primary-color);
        border-width: 2px;
      }

      .badge {
        position: absolute;
        color: var(--primary-color);
        bottom: -5px;
        right: -5px;
        background-color: white;
        border-radius: 50%;
        width: 18px;
        display: block;
        height: 18px;
      }

      .title {
        min-height: 2.3em;
        word-break: break-word;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/onboarding/onboarding-integrations.ts":
/*!***************************************************!*\
  !*** ./src/onboarding/onboarding-integrations.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _integration_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integration-badge */ "./src/onboarding/integration-badge.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/config_flow */ "./src/data/config_flow.ts");
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












let OnboardingIntegrations = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("onboarding-integrations")], function (_initialize, _LitElement) {
  class OnboardingIntegrations extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OnboardingIntegrations,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "onboardingLocalize",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_discovered",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubEvents",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "connectedCallback", this).call(this);

        this._unsubEvents = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["subscribeConfigFlowInProgress"])(this.opp, flows => {
          this._discovered = flows;
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubEvents) {
          this._unsubEvents();

          this._unsubEvents = undefined;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._entries || !this._discovered) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        } // Render discovered and existing entries together sorted by localized title.


        const entries = this._entries.map(entry => {
          const title = this.opp.localize(`component.${entry.domain}.config.title`);
          return [title, lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <integration-badge
              .title=${title}
              icon="opp:check"
            ></integration-badge>
          `];
        });

        const discovered = this._discovered.map(flow => {
          const title = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["localizeConfigFlowTitle"])(this.opp.localize, flow);
          return [title, lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <button .flowId=${flow.flow_id} @click=${this._continueFlow}>
              <integration-badge
                clickable
                .title=${title}
                icon="opp:plus"
              ></integration-badge>
            </button>
          `];
        });

        const content = [...entries, ...discovered].sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(a[0], b[0])).map(item => item[1]);
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.integration.intro")}
      </p>
      <div class="badges">
        ${content}
        <button @click=${this._createFlow}>
          <integration-badge
            clickable
            title=${this.onboardingLocalize("ui.panel.page-onboarding.integration.more_integrations")}
            icon="opp:dots-horizontal"
          ></integration-badge>
        </button>
      </div>
      <div class="footer">
        <mwc-button @click=${this._finish}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.integration.finish")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__["loadConfigFlowDialog"])();

        this._loadConfigEntries();
        /* polyfill for paper-dropdown */


        __webpack_require__.e(/*! import() | polyfill-web-animations-next */ "vendors~polyfill-web-animations-next").then(__webpack_require__.t.bind(null, /*! web-animations-js/web-animations-next-lite.min */ "./node_modules/web-animations-js/web-animations-next-lite.min.js", 7));
      }
    }, {
      kind: "method",
      key: "_createFlow",
      value: function _createFlow() {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__["showConfigFlowDialog"])(this, {
          dialogClosedCallback: () => {
            this._loadConfigEntries();

            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["getConfigFlowInProgressCollection"])(this.opp.connection).refresh();
          }
        });
      }
    }, {
      kind: "method",
      key: "_continueFlow",
      value: function _continueFlow(ev) {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__["showConfigFlowDialog"])(this, {
          continueFlowId: ev.currentTarget.flowId,
          dialogClosedCallback: () => {
            this._loadConfigEntries();

            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["getConfigFlowInProgressCollection"])(this.opp.connection).refresh();
          }
        });
      }
    }, {
      kind: "method",
      key: "_loadConfigEntries",
      value: async function _loadConfigEntries() {
        const entries = await Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_3__["getConfigEntries"])(this.opp); // We filter out the config entry for the local weather.
        // It is one that we create automatically and it will confuse the user
        // if it starts showing up during onboarding.

        this._entries = entries.filter(entry => entry.domain !== "met");
      }
    }, {
      kind: "method",
      key: "_finish",
      value: async function _finish() {
        const result = await Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_7__["onboardIntegrationStep"])(this.opp, {
          client_id: Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_8__["genClientId"])()
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "onboarding-step", {
          type: "integration",
          result
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .badges {
        margin-top: 24px;
      }
      .badges > * {
        width: 24%;
        min-width: 90px;
        margin-bottom: 24px;
      }
      button {
        display: inline-block;
        cursor: pointer;
        padding: 0;
        border: 0;
        background: 0;
        font: inherit;
      }
      .footer {
        text-align: right;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9pbnRlZ3JhdGlvbi1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWludGVncmF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBPcEljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uXCI6IE9wSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uXCIsIE9wSWNvbik7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5IHtcclxuICBlbnRyeV9pZDogc3RyaW5nO1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICBjb25uZWN0aW9uX2NsYXNzOiBzdHJpbmc7XHJcbiAgc3VwcG9ydHNfb3B0aW9uczogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMge1xyXG4gIGRpc2FibGVfbmV3X2VudGl0aWVzOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cmllcyA9IChvcHA6IE9wZW5QZWVyUG93ZXIpID0+XHJcbiAgb3BwLmNhbGxBcGk8Q29uZmlnRW50cnlbXT4oXCJHRVRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnlcIik7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRW50cnkgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBjb25maWdFbnRyeUlkOiBzdHJpbmcpID0+XHJcbiAgb3BwLmNhbGxBcGk8e1xyXG4gICAgcmVxdWlyZV9yZXN0YXJ0OiBib29sZWFuO1xyXG4gIH0+KFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnkvJHtjb25maWdFbnRyeUlkfWApO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucyA9IChcclxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXHJcbiAgY29uZmlnRW50cnlJZDogc3RyaW5nXHJcbikgPT5cclxuICBvcHAuY2FsbFdTPENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucz4oe1xyXG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy9saXN0XCIsXHJcbiAgICBlbnRyeV9pZDogY29uZmlnRW50cnlJZCxcclxuICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgPSAoXHJcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxyXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZyxcclxuICBwYXJhbXM6IFBhcnRpYWw8Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zPlxyXG4pID0+XHJcbiAgb3BwLmNhbGxXUyh7XHJcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL3VwZGF0ZVwiLFxyXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXHJcbiAgICAuLi5wYXJhbXMsXHJcbiAgfSk7XHJcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwLCBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBnZXRDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBjb25zdCBESVNDT1ZFUllfU09VUkNFUyA9IFtcInVuaWdub3JlXCIsIFwiaG9tZWtpdFwiLCBcInNzZHBcIiwgXCJ6ZXJvY29uZlwiXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbmZpZ0Zsb3cgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBoYW5kbGVyOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcIlBPU1RcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiLCB7XG4gICAgaGFuZGxlcixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZ0Zsb3cgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBmbG93SWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFwiR0VUXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNvbmZpZ0Zsb3dTdGVwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGZsb3dJZDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pID0+XG4gIG9wcC5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCxcbiAgICBkYXRhXG4gICk7XG5cbmV4cG9ydCBjb25zdCBpZ25vcmVDb25maWdGbG93ID0gKG9wcDogT3BlblBlZXJQb3dlciwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsV1MoeyB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL2lnbm9yZV9mbG93XCIsIGZsb3dfaWQ6IGZsb3dJZCB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0Zsb3cgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBmbG93SWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxBcGk8c3RyaW5nW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dfaGFuZGxlcnNcIik7XG5cbmNvbnN0IGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvZmxvdy9wcm9ncmVzc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MoY29ubikudGhlbigoZmxvd3MpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZmxvd3MsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImNvbmZpZ19lbnRyeV9kaXNjb3ZlcmVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uPERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdPihcbiAgICBjb25uLFxuICAgIFwiX2NvbmZpZ0Zsb3dQcm9ncmVzc1wiLFxuICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MsXG4gICAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBvbkNoYW5nZTogKGZsb3dzOiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXSkgPT4gdm9pZFxuKSA9PiBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24ob3BwLmNvbm5lY3Rpb24pLnN1YnNjcmliZShvbkNoYW5nZSk7XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSA9IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgZmxvdzogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzXG4pID0+IHtcbiAgY29uc3QgcGxhY2Vob2xkZXJzID0gZmxvdy5jb250ZXh0LnRpdGxlX3BsYWNlaG9sZGVycyB8fCB7fTtcbiAgY29uc3QgcGxhY2Vob2xkZXJLZXlzID0gT2JqZWN0LmtleXMocGxhY2Vob2xkZXJzKTtcbiAgaWYgKHBsYWNlaG9sZGVyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLnRpdGxlYCk7XG4gIH1cbiAgY29uc3QgYXJnczogc3RyaW5nW10gPSBbXTtcbiAgcGxhY2Vob2xkZXJLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGFyZ3MucHVzaChrZXkpO1xuICAgIGFyZ3MucHVzaChwbGFjZWhvbGRlcnNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLmZsb3dfdGl0bGVgLCAuLi5hcmdzKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRDb25maWdGbG93SGFuZGxlcnMsXG4gIGZldGNoQ29uZmlnRmxvdyxcbiAgaGFuZGxlQ29uZmlnRmxvd1N0ZXAsXG4gIGRlbGV0ZUNvbmZpZ0Zsb3csXG4gIGNyZWF0ZUNvbmZpZ0Zsb3csXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUtleSB9IGZyb20gXCIuLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQge1xuICBzaG93Rmxvd0RpYWxvZyxcbiAgRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcyxcbiAgbG9hZERhdGFFbnRyeUZsb3dEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuaW1wb3J0IHsgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb25maWdGbG93RGlhbG9nID0gbG9hZERhdGFFbnRyeUZsb3dEaWFsb2c7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlnRmxvd0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogT21pdDxEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLCBcImZsb3dDb25maWdcIj5cbik6IHZvaWQgPT5cbiAgc2hvd0Zsb3dEaWFsb2coZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7XG4gICAgbG9hZERldmljZXNBbmRBcmVhczogdHJ1ZSxcbiAgICBnZXRGbG93SGFuZGxlcnM6IChvcHApID0+XG4gICAgICBnZXRDb25maWdGbG93SGFuZGxlcnMob3BwKS50aGVuKChoYW5kbGVycykgPT5cbiAgICAgICAgaGFuZGxlcnMuc29ydCgoaGFuZGxlckEsIGhhbmRsZXJCKSA9PlxuICAgICAgICAgIGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUoXG4gICAgICAgICAgICBvcHAubG9jYWxpemUoYGNvbXBvbmVudC4ke2hhbmRsZXJBfS5jb25maWcudGl0bGVgKSxcbiAgICAgICAgICAgIG9wcC5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckJ9LmNvbmZpZy50aXRsZWApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgIGNyZWF0ZUZsb3c6IGNyZWF0ZUNvbmZpZ0Zsb3csXG4gICAgZmV0Y2hGbG93OiBmZXRjaENvbmZpZ0Zsb3csXG4gICAgaGFuZGxlRmxvd1N0ZXA6IGhhbmRsZUNvbmZpZ0Zsb3dTdGVwLFxuICAgIGRlbGV0ZUZsb3c6IGRlbGV0ZUNvbmZpZ0Zsb3csXG5cbiAgICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKG9wcCwgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgb3BwLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuYWJvcnQuJHtzdGVwLnJlYXNvbn1gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxvcC1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L29wLW1hcmtkb3duPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwiO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIob3BwLCBzdGVwKSB7XG4gICAgICByZXR1cm4gb3BwLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihvcHAsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIG9wcC5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRlc2NyaXB0aW9uYCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPG9wLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259Pjwvb3AtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkTGFiZWwob3BwLCBzdGVwLCBmaWVsZCkge1xuICAgICAgcmV0dXJuIG9wcC5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtmaWVsZC5uYW1lfWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3Iob3BwLCBzdGVwLCBlcnJvcikge1xuICAgICAgcmV0dXJuIG9wcC5sb2NhbGl6ZShgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuZXJyb3IuJHtlcnJvcn1gKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRXh0ZXJuYWxTdGVwSGVhZGVyKG9wcCwgc3RlcCkge1xuICAgICAgcmV0dXJuIG9wcC5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24ob3BwLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBvcHAubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwPlxuICAgICAgICAgICR7b3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmV4dGVybmFsX3N0ZXAuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgJHtkZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG9wLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259Pjwvb3AtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgYDtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbihvcHAsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIG9wcC5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmNyZWF0ZV9lbnRyeS4ke3N0ZXAuZGVzY3JpcHRpb24gfHxcbiAgICAgICAgICBcImRlZmF1bHRcIn1gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxvcC1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L29wLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHtvcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuY3JlYXRlZF9jb25maWdcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgc3RlcC50aXRsZVxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfSxcbiAgfSk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeSxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbCxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICBEYXRhRW50cnlGbG93U3RlcCxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydCxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBPcEZvcm1TY2hlbWEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBGbG93Q29uZmlnIHtcbiAgbG9hZERldmljZXNBbmRBcmVhczogYm9vbGVhbjtcblxuICBnZXRGbG93SGFuZGxlcnM/OiAob3BwOiBPcGVuUGVlclBvd2VyKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcblxuICBjcmVhdGVGbG93KG9wcDogT3BlblBlZXJQb3dlciwgaGFuZGxlcjogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgZmV0Y2hGbG93KG9wcDogT3BlblBlZXJQb3dlciwgZmxvd0lkOiBzdHJpbmcpOiBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPjtcblxuICBoYW5kbGVGbG93U3RlcChcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgZmxvd0lkOiBzdHJpbmcsXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICApOiBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPjtcblxuICBkZWxldGVGbG93KG9wcDogT3BlblBlZXJQb3dlciwgZmxvd0lkOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+O1xuXG4gIHJlbmRlckFib3J0RGVzY3JpcHRpb24oXG4gICAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwQWJvcnRcbiAgKTogVGVtcGxhdGVSZXN1bHQgfCBcIlwiO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcEhlYWRlcihcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IHN0cmluZztcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKFxuICAgIG9wcDogT3BlblBlZXJQb3dlcixcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gICAgZmllbGQ6IE9wRm9ybVNjaGVtYVxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICAgIGVycm9yOiBzdHJpbmdcbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlckV4dGVybmFsU3RlcEhlYWRlcihcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbFxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oXG4gICAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRXh0ZXJuYWxcbiAgKTogVGVtcGxhdGVSZXN1bHQgfCBcIlwiO1xuXG4gIHJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24oXG4gICAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwQ3JlYXRlRW50cnlcbiAgKTogVGVtcGxhdGVSZXN1bHQgfCBcIlwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMge1xuICBzdGFydEZsb3dIYW5kbGVyPzogc3RyaW5nO1xuICBjb250aW51ZUZsb3dJZD86IHN0cmluZztcbiAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s/OiAocGFyYW1zOiB7IGZsb3dGaW5pc2hlZDogYm9vbGVhbiB9KSA9PiB2b2lkO1xuICBmbG93Q29uZmlnOiBGbG93Q29uZmlnO1xuICBzaG93QWR2YW5jZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZERhdGFFbnRyeUZsb3dEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctY29uZmlnLWZsb3dcIiAqLyBcIi4vZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzaG93Rmxvd0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogT21pdDxEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLCBcImZsb3dDb25maWdcIj4sXG4gIGZsb3dDb25maWc6IEZsb3dDb25maWdcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREYXRhRW50cnlGbG93RGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgZmxvd0NvbmZpZyxcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvb3AtaWNvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcImludGVncmF0aW9uLWJhZGdlXCIpXG5jbGFzcyBJbnRlZ3JhdGlvbkJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpY29uITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdGl0bGUhOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBiYWRnZUljb24/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIGNsaWNrYWJsZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGlyb24taWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9pcm9uLWljb24+XG4gICAgICAgICR7dGhpcy5iYWRnZUljb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxvcC1pY29uIGNsYXNzPVwiYmFkZ2VcIiAuaWNvbj0ke3RoaXMuYmFkZ2VJY29ufT48L29wLWljb24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtjbGlja2FibGVdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gOHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtjbGlja2FibGVdKSAuaWNvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgfVxuXG4gICAgICAuYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuM2VtO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImludGVncmF0aW9uLWJhZGdlXCI6IEludGVncmF0aW9uQmFkZ2U7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uL213Yy1idXR0b25cIjtcbmltcG9ydCB7XG4gIGxvYWRDb25maWdGbG93RGlhbG9nLFxuICBzaG93Q29uZmlnRmxvd0RpYWxvZyxcbn0gZnJvbSBcIi4uL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3dcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldENvbmZpZ0VudHJpZXMsIENvbmZpZ0VudHJ5IH0gZnJvbSBcIi4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgXCIuL2ludGVncmF0aW9uLWJhZGdlXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgb25ib2FyZEludGVncmF0aW9uU3RlcCB9IGZyb20gXCIuLi9kYXRhL29uYm9hcmRpbmdcIjtcbmltcG9ydCB7IGdlbkNsaWVudElkIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dQcm9ncmVzcyB9IGZyb20gXCIuLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHtcbiAgbG9jYWxpemVDb25maWdGbG93VGl0bGUsXG4gIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzLFxuICBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24sXG59IGZyb20gXCIuLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5cbkBjdXN0b21FbGVtZW50KFwib25ib2FyZGluZy1pbnRlZ3JhdGlvbnNcIilcbmNsYXNzIE9uYm9hcmRpbmdJbnRlZ3JhdGlvbnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvbmJvYXJkaW5nTG9jYWxpemUhOiBMb2NhbGl6ZUZ1bmM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudHJpZXM/OiBDb25maWdFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXNjb3ZlcmVkPzogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW107XG4gIHByaXZhdGUgX3Vuc3ViRXZlbnRzPzogKCkgPT4gdm9pZDtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl91bnN1YkV2ZW50cyA9IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzKHRoaXMub3BwLCAoZmxvd3MpID0+IHtcbiAgICAgIHRoaXMuX2Rpc2NvdmVyZWQgPSBmbG93cztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkV2ZW50cykge1xuICAgICAgdGhpcy5fdW5zdWJFdmVudHMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fZW50cmllcyB8fCAhdGhpcy5fZGlzY292ZXJlZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGRpc2NvdmVyZWQgYW5kIGV4aXN0aW5nIGVudHJpZXMgdG9nZXRoZXIgc29ydGVkIGJ5IGxvY2FsaXplZCB0aXRsZS5cbiAgICBjb25zdCBlbnRyaWVzOiBBcnJheTxbc3RyaW5nLCBUZW1wbGF0ZVJlc3VsdF0+ID0gdGhpcy5fZW50cmllcy5tYXAoXG4gICAgICAoZW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICBgY29tcG9uZW50LiR7ZW50cnkuZG9tYWlufS5jb25maWcudGl0bGVgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgIDxpbnRlZ3JhdGlvbi1iYWRnZVxuICAgICAgICAgICAgICAudGl0bGU9JHt0aXRsZX1cbiAgICAgICAgICAgICAgaWNvbj1cIm9wcDpjaGVja1wiXG4gICAgICAgICAgICA+PC9pbnRlZ3JhdGlvbi1iYWRnZT5cbiAgICAgICAgICBgLFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgZGlzY292ZXJlZDogQXJyYXk8W3N0cmluZywgVGVtcGxhdGVSZXN1bHRdPiA9IHRoaXMuX2Rpc2NvdmVyZWQubWFwKFxuICAgICAgKGZsb3cpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSh0aGlzLm9wcC5sb2NhbGl6ZSwgZmxvdyk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgIDxidXR0b24gLmZsb3dJZD0ke2Zsb3cuZmxvd19pZH0gQGNsaWNrPSR7dGhpcy5fY29udGludWVGbG93fT5cbiAgICAgICAgICAgICAgPGludGVncmF0aW9uLWJhZGdlXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgLnRpdGxlPSR7dGl0bGV9XG4gICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpwbHVzXCJcbiAgICAgICAgICAgICAgPjwvaW50ZWdyYXRpb24tYmFkZ2U+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBgLFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY29udGVudCA9IFsuLi5lbnRyaWVzLCAuLi5kaXNjb3ZlcmVkXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYVswXSwgYlswXSkpXG4gICAgICAubWFwKChpdGVtKSA9PiBpdGVtWzFdKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHA+XG4gICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24uaW50cm9cIil9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2VzXCI+XG4gICAgICAgICR7Y29udGVudH1cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jcmVhdGVGbG93fT5cbiAgICAgICAgICA8aW50ZWdyYXRpb24tYmFkZ2VcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdGl0bGU9JHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24ubW9yZV9pbnRlZ3JhdGlvbnNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGljb249XCJvcHA6ZG90cy1ob3Jpem9udGFsXCJcbiAgICAgICAgICA+PC9pbnRlZ3JhdGlvbi1iYWRnZT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fZmluaXNofT5cbiAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24uZmluaXNoXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgbG9hZENvbmZpZ0Zsb3dEaWFsb2coKTtcbiAgICB0aGlzLl9sb2FkQ29uZmlnRW50cmllcygpO1xuICAgIC8qIHBvbHlmaWxsIGZvciBwYXBlci1kcm9wZG93biAqL1xuICAgIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicG9seWZpbGwtd2ViLWFuaW1hdGlvbnMtbmV4dFwiICovIFwid2ViLWFuaW1hdGlvbnMtanMvd2ViLWFuaW1hdGlvbnMtbmV4dC1saXRlLm1pblwiXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZsb3coKSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0VudHJpZXMoKTtcbiAgICAgICAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKHRoaXMub3BwIS5jb25uZWN0aW9uKS5yZWZyZXNoKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29udGludWVGbG93KGV2KSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgY29udGludWVGbG93SWQ6IGV2LmN1cnJlbnRUYXJnZXQuZmxvd0lkLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0VudHJpZXMoKTtcbiAgICAgICAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKHRoaXMub3BwIS5jb25uZWN0aW9uKS5yZWZyZXNoKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZENvbmZpZ0VudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGdldENvbmZpZ0VudHJpZXModGhpcy5vcHAhKTtcbiAgICAvLyBXZSBmaWx0ZXIgb3V0IHRoZSBjb25maWcgZW50cnkgZm9yIHRoZSBsb2NhbCB3ZWF0aGVyLlxuICAgIC8vIEl0IGlzIG9uZSB0aGF0IHdlIGNyZWF0ZSBhdXRvbWF0aWNhbGx5IGFuZCBpdCB3aWxsIGNvbmZ1c2UgdGhlIHVzZXJcbiAgICAvLyBpZiBpdCBzdGFydHMgc2hvd2luZyB1cCBkdXJpbmcgb25ib2FyZGluZy5cbiAgICB0aGlzLl9lbnRyaWVzID0gZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5kb21haW4gIT09IFwibWV0XCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmluaXNoKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uYm9hcmRJbnRlZ3JhdGlvblN0ZXAodGhpcy5vcHAsIHtcbiAgICAgIGNsaWVudF9pZDogZ2VuQ2xpZW50SWQoKSxcbiAgICB9KTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJvbmJvYXJkaW5nLXN0ZXBcIiwge1xuICAgICAgdHlwZTogXCJpbnRlZ3JhdGlvblwiLFxuICAgICAgcmVzdWx0LFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhZGdlcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG4gICAgICAuYmFkZ2VzID4gKiB7XG4gICAgICAgIHdpZHRoOiAyNCU7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IDA7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib25ib2FyZGluZy1pbnRlZ3JhdGlvbnNcIjogT25ib2FyZGluZ0ludGVncmF0aW9ucztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQXdCQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBNEJBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEvR0E7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFEQTtBQUlBO0FBR0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBUUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7QUFFQTs7QUFJQTtBQUVBO0FBRkE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBRkE7O0FBTUE7O0FBUEE7QUFjQTtBQUNBO0FBN0dBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStFQSxpckVBRUE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUhBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBU0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBOztBQU1BO0FBVEE7QUFXQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThDQTs7O0FBbkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFVQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBOztBQUlBOzs7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7Ozs7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUlBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTs7Ozs7O0FBUUE7QUFDQTs7O0FBbEJBO0FBd0JBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREEsd1JBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFNQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQTs7O0FBL0pBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=