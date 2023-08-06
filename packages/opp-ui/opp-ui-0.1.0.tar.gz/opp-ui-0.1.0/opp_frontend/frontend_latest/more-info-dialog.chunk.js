(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog"],{

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

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "opp:bookmark";
/** Panel to show when no panel is picked. */

const DEFAULT_PANEL = "devcon";
/** Domains that have a state card. */

const DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

const DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "counter", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "person", "script", "sun", "timer", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

const DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

const DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Devcon. */

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

/***/ }),

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: computeDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDomain", function() { return computeDomain; });
const computeDomain = entityId => {
  return entityId.substr(0, entityId.indexOf("."));
};

/***/ }),

/***/ "./src/common/navigate.ts":
/*!********************************!*\
  !*** ./src/common/navigate.ts ***!
  \********************************/
/*! exports provided: navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/fire_event */ "./src/common/dom/fire_event.ts");

const navigate = (_node, path, replace = false) => {
  if (false) {} else {
    if (replace) {
      history.replaceState(null, "", path);
    } else {
      history.pushState(null, "", path);
    }
  }

  Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(window, "location-changed", {
    replace
  });
};

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (opp, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = opp.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (opp, entityId, updates) => opp.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (opp, entityId) => opp.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/dialogs/more-info/more-info-controls.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-controls.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_op_state_history_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/op-state-history-data */ "./src/data/op-state-history-data.js");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _controls_more_info_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _panels_config_entities_show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../panels/config/entities/show-dialog-entity-registry-detail */ "./src/panels/config/entities/show-dialog-entity-registry-detail.ts");






















const DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
const EDITABLE_DOMAINS_WITH_ID = ["scene", "automation"];
const EDITABLE_DOMAINS = ["script"];
/*
 * @appliesMixin EventsMixin
 */

class MoreInfoControls extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="op-style-dialog">
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);
        }

        app-toolbar [main-title] {
          @apply --op-more-info-app-toolbar-title;
        }

        state-card-content {
          display: block;
          padding: 16px;
        }

        state-history-charts {
          max-width: 100%;
          margin-bottom: 16px;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        mwc-button.warning {
          --mdc-theme-primary: var(--google-red-500);
        }

        :host([domain="camera"]) paper-dialog-scrollable {
          margin: 0 -24px -21px;
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      </style>

      <app-toolbar>
        <paper-icon-button
          aria-label$="[[localize('ui.dialogs.more_info_control.dismiss')]]"
          icon="opp:close"
          dialog-dismiss
        ></paper-icon-button>
        <div class="main-title" main-title="" on-click="enlarge">
          [[_computeStateName(stateObj)]]
        </div>
        <template is="dom-if" if="[[registryEntry]]">
          <paper-icon-button
            aria-label$="[[localize('ui.dialogs.more_info_control.settings')]]"
            icon="opp:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </template>
        <template is="dom-if" if="[[_computeEdit(opp, stateObj)]]">
          <paper-icon-button
            aria-label$="[[localize('ui.dialogs.more_info_control.edit')]]"
            icon="opp:pencil"
            on-click="_gotoEdit"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
        <state-card-content
          state-obj="[[stateObj]]"
          opp="[[opp]]"
          in-dialog=""
        ></state-card-content>
      </template>
      <paper-dialog-scrollable dialog-element="[[dialogElement]]">
        <template
          is="dom-if"
          if="[[_computeShowHistoryComponent(opp, stateObj)]]"
          restamp=""
        >
          <op-state-history-data
            opp="[[opp]]"
            filter-type="recent-entity"
            entity-id="[[stateObj.entity_id]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></op-state-history-data>
          <state-history-charts
            opp="[[opp]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            up-to-now
          ></state-history-charts>
        </template>
        <more-info-content
          state-obj="[[stateObj]]"
          opp="[[opp]]"
        ></more-info-content>
        <template
          is="dom-if"
          if="[[_computeShowRestored(stateObj)]]"
          restamp=""
        >
          [[localize('ui.dialogs.more_info_control.restored.not_provided')]] <br />
          [[localize('ui.dialogs.more_info_control.restored.remove_intro')]] <br />
          <mwc-button class="warning" on-click="_removeEntity">[[localize('ui.dialogs.more_info_control.restored.remove_action')]]</mwc-buttom>
        </template>
      </paper-dialog-scrollable>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      stateObj: {
        type: Object,
        observer: "_stateObjChanged"
      },
      dialogElement: Object,
      registryEntry: Object,
      domain: {
        type: String,
        reflectToAttribute: true,
        computed: "_computeDomain(stateObj)"
      },
      _stateHistory: Object,
      _stateHistoryLoading: Boolean,
      large: {
        type: Boolean,
        value: false,
        notify: true
      },
      _cacheConfig: {
        type: Object,
        value: {
          refresh: 60,
          cacheKey: null,
          hoursToShow: 24
        }
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(opp)"
      }
    };
  }

  enlarge() {
    this.large = !this.large;
  }

  _computeShowStateInfo(stateObj) {
    return !stateObj || !DOMAINS_NO_INFO.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_13__["computeStateDomain"])(stateObj));
  }

  _computeShowRestored(stateObj) {
    return stateObj && stateObj.attributes.restored;
  }

  _computeShowHistoryComponent(opp, stateObj) {
    return opp && stateObj && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_14__["isComponentLoaded"])(opp, "history") && !_common_const__WEBPACK_IMPORTED_MODULE_15__["DOMAINS_MORE_INFO_NO_HISTORY"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_13__["computeStateDomain"])(stateObj));
  }

  _computeDomain(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_13__["computeStateDomain"])(stateObj) : "";
  }

  _computeStateName(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__["computeStateName"])(stateObj) : "";
  }

  _computeEdit(opp, stateObj) {
    const domain = this._computeDomain(stateObj);

    return stateObj && opp.user.is_admin && (EDITABLE_DOMAINS_WITH_ID.includes(domain) && stateObj.attributes.id || EDITABLE_DOMAINS.includes(domain));
  }

  _stateObjChanged(newVal) {
    if (!newVal) {
      return;
    }

    if (this._cacheConfig.cacheKey !== `more_info.${newVal.entity_id}`) {
      this._cacheConfig = Object.assign({}, this._cacheConfig, {
        cacheKey: `more_info.${newVal.entity_id}`
      });
    }
  }

  _removeEntity() {
    Object(_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_20__["showConfirmationDialog"])(this, {
      title: this.localize("ui.dialogs.more_info_control.restored.confirm_remove_title"),
      text: this.localize("ui.dialogs.more_info_control.restored.confirm_remove_text"),
      confirmText: this.localize("ui.common.yes"),
      dismissText: this.localize("ui.common.no"),
      confirm: () => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_19__["removeEntityRegistryEntry"])(this.opp, this.stateObj.entity_id)
    });
  }

  _gotoSettings() {
    Object(_panels_config_entities_show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_21__["showEntityRegistryDetailDialog"])(this, {
      entry: this.registryEntry
    });
    this.fire("opp-more-info", {
      entityId: null
    });
  }

  _gotoEdit() {
    const domain = this._computeDomain(this.stateObj);

    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_11__["navigate"])(this, `/config/${domain}/edit/${EDITABLE_DOMAINS_WITH_ID.includes(domain) ? this.stateObj.attributes.id : this.stateObj.entity_id}`);
    this.fire("opp-more-info", {
      entityId: null
    });
  }

  _computeRTL(opp) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__["computeRTL"])(opp);
  }

}

customElements.define("more-info-controls", MoreInfoControls);

/***/ }),

/***/ "./src/dialogs/op-more-info-dialog.js":
/*!********************************************!*\
  !*** ./src/dialogs/op-more-info-dialog.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _more_info_more_info_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info/more-info-controls */ "./src/dialogs/more-info/more-info-controls.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js");









/*
 * @appliesMixin DialogMixin
 */

class OpMoreInfoDialog extends Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="op-style-dialog paper-dialog-shared-styles">
        :host {
          font-size: 14px;
          width: 365px;
          border-radius: 2px;
        }

        more-info-controls {
          --more-info-header-background: var(--secondary-background-color);
          --more-info-header-color: var(--primary-text-color);
          --op-more-info-app-toolbar-title: {
            /* Design guideline states 24px, changed to 16 to align with state info */
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            /* webkit and blink still support simple multiline text-overflow */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }

        /* overrule the op-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          more-info-controls {
            --more-info-header-background: var(--primary-color);
            --more-info-header-color: var(--text-primary-color);
          }
          :host {
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          :host::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        :host([data-domain="camera"]) {
          width: auto;
        }

        :host([data-domain="history_graph"]),
        :host([large]) {
          width: 90%;
        }
      </style>

      <more-info-controls
        class="no-padding"
        opp="[[opp]]"
        state-obj="[[stateObj]]"
        dialog-element="[[_dialogElement()]]"
        registry-entry="[[_registryInfo]]"
        large="{{large}}"
      ></more-info-controls>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      stateObj: {
        type: Object,
        computed: "_computeStateObj(opp)",
        observer: "_stateObjChanged"
      },
      large: {
        type: Boolean,
        reflectToAttribute: true,
        observer: "_largeChanged"
      },
      _registryInfo: Object,
      dataDomain: {
        computed: "_computeDomain(stateObj)",
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ["_dialogOpenChanged(opened)"];
  }

  _dialogElement() {
    return this;
  }

  _computeDomain(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(stateObj) : "";
  }

  _computeStateObj(opp) {
    return opp.states[opp.moreInfoEntityId] || null;
  }

  async _stateObjChanged(newVal, oldVal) {
    if (!newVal) {
      this.setProperties({
        opened: false,
        _registryInfo: null,
        large: false
      });
      return;
    }

    requestAnimationFrame(() => requestAnimationFrame(() => {
      // allow dialog to render content before showing it so it will be
      // positioned correctly.
      this.opened = true;
    }));

    if (!Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_7__["isComponentLoaded"])(this.opp, "config") || oldVal && oldVal.entity_id === newVal.entity_id) {
      return;
    }

    if (this.opp.user.is_admin) {
      try {
        const info = await this.opp.callWS({
          type: "config/entity_registry/get",
          entity_id: newVal.entity_id
        });
        this._registryInfo = info;
      } catch (err) {
        this._registryInfo = null;
      }
    }
  }

  _dialogOpenChanged(newVal) {
    if (!newVal && this.stateObj) {
      this.fire("opp-more-info", {
        entityId: null
      });
    }
  }

  _equals(a, b) {
    return a === b;
  }

  _largeChanged() {
    this.notifyResize();
  }

}

customElements.define("op-more-info-dialog", OpMoreInfoDialog);

/***/ }),

/***/ "./src/mixins/dialog-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-mixin */ "./src/mixins/events-mixin.js");




/**
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]], superClass) {
  static get properties() {
    return {
      withBackdrop: {
        type: Boolean,
        value: true
      }
    };
  }

}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL25hdmlnYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vbW9yZS1pbmZvLWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL29wLW1vcmUtaW5mby1kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9kaWFsb2ctbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBjb25zdCBpc0NvbXBvbmVudExvYWRlZCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiA9PiBvcHAgJiYgb3BwLmNvbmZpZy5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPT0gLTE7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJvcHA6Ym9va21hcmtcIjtcblxuLyoqIFBhbmVsIHRvIHNob3cgd2hlbiBubyBwYW5lbCBpcyBwaWNrZWQuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQU5FTCA9IFwiZGV2Y29uXCI7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvdmVyXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInRpbWVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjbGltYXRlXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiY291bnRlclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJwZXJzb25cIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ0aW1lclwiLFxuICBcInVwZGF0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWF0aGVyXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3cgbm8gbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX0hJREVfTU9SRV9JTkZPID0gW1xuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJzY2VuZVwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gIFwiY2FtZXJhXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcInNjZW5lXCIsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1wiY2xvc2VkXCIsIFwibG9ja2VkXCIsIFwib2ZmXCJdO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gRGV2Y29uLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gIFwiZmFuXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImxpZ2h0XCIsXG4gIFwic3dpdGNoXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9IFwiwrBDXCI7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gXCLCsEZcIjtcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuIiwiZXhwb3J0IGNvbnN0IGNvbXB1dGVEb21haW4gPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZihcIi5cIikpO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuL2RvbS9maXJlX2V2ZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIE9QUERvbUV2ZW50cyB7XG4gICAgXCJsb2NhdGlvbi1jaGFuZ2VkXCI6IHtcbiAgICAgIHJlcGxhY2U6IGJvb2xlYW47XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbmF2aWdhdGUgPSAoXG4gIF9ub2RlOiBhbnksXG4gIHBhdGg6IHN0cmluZyxcbiAgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlXG4pID0+IHtcbiAgaWYgKF9fREVNT19fKSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGAke2xvY2F0aW9uLnBhdGhuYW1lfSMke3BhdGh9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCBwYXRoKTtcbiAgICB9XG4gIH1cbiAgZmlyZUV2ZW50KHdpbmRvdywgXCJsb2NhdGlvbi1jaGFuZ2VkXCIsIHtcbiAgICByZXBsYWNlLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gb3BwLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIG9wcC5jYWxsV1M8RW50aXR5UmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW50ZXJmYWNlIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uLy4uL2RhdGEvb3Atc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCBcIi4vY29udHJvbHMvbW9yZS1pbmZvLWNvbnRlbnRcIjtcblxuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyB9IGZyb20gXCIuLi9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IHsgc2hvd0VudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3BhbmVscy9jb25maWcvZW50aXRpZXMvc2hvdy1kaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiO1xuXG5jb25zdCBET01BSU5TX05PX0lORk8gPSBbXCJjYW1lcmFcIiwgXCJjb25maWd1cmF0b3JcIiwgXCJoaXN0b3J5X2dyYXBoXCJdO1xuY29uc3QgRURJVEFCTEVfRE9NQUlOU19XSVRIX0lEID0gW1wic2NlbmVcIiwgXCJhdXRvbWF0aW9uXCJdO1xuY29uc3QgRURJVEFCTEVfRE9NQUlOUyA9IFtcInNjcmlwdFwiXTtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9Db250cm9scyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLXN0eWxlLWRpYWxvZ1wiPlxuICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciBbbWFpbi10aXRsZV0ge1xuICAgICAgICAgIEBhcHBseSAtLW9wLW1vcmUtaW5mby1hcHAtdG9vbGJhci10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWhpc3RvcnktY2hhcnRzIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ1MXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSB7XG4gICAgICAgICAgLm1haW4tdGl0bGUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbi53YXJuaW5nIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZG9tYWluPVwiY2FtZXJhXCJdKSBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwIC0yNHB4IC0yMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsJD1cIltbbG9jYWxpemUoJ3VpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuZGlzbWlzcycpXV1cIlxuICAgICAgICAgIGljb249XCJvcHA6Y2xvc2VcIlxuICAgICAgICAgIGRpYWxvZy1kaXNtaXNzXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZVwiIG1haW4tdGl0bGU9XCJcIiBvbi1jbGljaz1cImVubGFyZ2VcIj5cbiAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcmVnaXN0cnlFbnRyeV1dXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsJD1cIltbbG9jYWxpemUoJ3VpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuc2V0dGluZ3MnKV1dXCJcbiAgICAgICAgICAgIGljb249XCJvcHA6c2V0dGluZ3NcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfZ290b1NldHRpbmdzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlRWRpdChvcHAsIHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsJD1cIltbbG9jYWxpemUoJ3VpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuZWRpdCcpXV1cIlxuICAgICAgICAgICAgaWNvbj1cIm9wcDpwZW5jaWxcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfZ290b0VkaXRcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlU2hvd1N0YXRlSW5mbyhzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgICAgPjwvc3RhdGUtY2FyZC1jb250ZW50PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSBkaWFsb2ctZWxlbWVudD1cIltbZGlhbG9nRWxlbWVudF1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj1cIltbX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChvcHAsIHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcC1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgZmlsdGVyLXR5cGU9XCJyZWNlbnQtZW50aXR5XCJcbiAgICAgICAgICAgIGVudGl0eS1pZD1cIltbc3RhdGVPYmouZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgZGF0YT1cInt7X3N0YXRlSGlzdG9yeX19XCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmc9XCJ7e19zdGF0ZUhpc3RvcnlMb2FkaW5nfX1cIlxuICAgICAgICAgICAgY2FjaGUtY29uZmlnPVwiW1tfY2FjaGVDb25maWddXVwiXG4gICAgICAgICAgPjwvb3Atc3RhdGUtaGlzdG9yeS1kYXRhPlxuICAgICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0c1xuICAgICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgICBoaXN0b3J5LWRhdGE9XCJbW19zdGF0ZUhpc3RvcnldXVwiXG4gICAgICAgICAgICBpcy1sb2FkaW5nLWRhdGE9XCJbW19zdGF0ZUhpc3RvcnlMb2FkaW5nXV1cIlxuICAgICAgICAgICAgdXAtdG8tbm93XG4gICAgICAgICAgPjwvc3RhdGUtaGlzdG9yeS1jaGFydHM+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxtb3JlLWluZm8tY29udGVudFxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgID48L21vcmUtaW5mby1jb250ZW50PlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9XCJbW19jb21wdXRlU2hvd1Jlc3RvcmVkKHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wucmVzdG9yZWQubm90X3Byb3ZpZGVkJyldXSA8YnIgLz5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnJlc3RvcmVkLnJlbW92ZV9pbnRybycpXV0gPGJyIC8+XG4gICAgICAgICAgPG13Yy1idXR0b24gY2xhc3M9XCJ3YXJuaW5nXCIgb24tY2xpY2s9XCJfcmVtb3ZlRW50aXR5XCI+W1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5yZXN0b3JlZC5yZW1vdmVfYWN0aW9uJyldXTwvbXdjLWJ1dHRvbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGlhbG9nRWxlbWVudDogT2JqZWN0LFxuICAgICAgcmVnaXN0cnlFbnRyeTogT2JqZWN0LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgX3N0YXRlSGlzdG9yeTogT2JqZWN0LFxuICAgICAgX3N0YXRlSGlzdG9yeUxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX2NhY2hlQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICByZWZyZXNoOiA2MCxcbiAgICAgICAgICBjYWNoZUtleTogbnVsbCxcbiAgICAgICAgICBob3Vyc1RvU2hvdzogMjQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwob3BwKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZW5sYXJnZSgpIHtcbiAgICB0aGlzLmxhcmdlID0gIXRoaXMubGFyZ2U7XG4gIH1cblxuICBfY29tcHV0ZVNob3dTdGF0ZUluZm8oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gIXN0YXRlT2JqIHx8ICFET01BSU5TX05PX0lORk8uaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSk7XG4gIH1cblxuICBfY29tcHV0ZVNob3dSZXN0b3JlZChzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlc3RvcmVkO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChvcHAsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG9wcCAmJlxuICAgICAgc3RhdGVPYmogJiZcbiAgICAgIGlzQ29tcG9uZW50TG9hZGVkKG9wcCwgXCJoaXN0b3J5XCIpICYmXG4gICAgICAhRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWS5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSA6IFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZUVkaXQob3BwLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGRvbWFpbiA9IHRoaXMuX2NvbXB1dGVEb21haW4oc3RhdGVPYmopO1xuICAgIHJldHVybiAoXG4gICAgICBzdGF0ZU9iaiAmJlxuICAgICAgb3BwLnVzZXIuaXNfYWRtaW4gJiZcbiAgICAgICgoRURJVEFCTEVfRE9NQUlOU19XSVRIX0lELmluY2x1ZGVzKGRvbWFpbikgJiYgc3RhdGVPYmouYXR0cmlidXRlcy5pZCkgfHxcbiAgICAgICAgRURJVEFCTEVfRE9NQUlOUy5pbmNsdWRlcyhkb21haW4pKVxuICAgICk7XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhY2hlQ29uZmlnLmNhY2hlS2V5ICE9PSBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gKSB7XG4gICAgICB0aGlzLl9jYWNoZUNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5fY2FjaGVDb25maWcsXG4gICAgICAgIGNhY2hlS2V5OiBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlRW50aXR5KCkge1xuICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgdGl0bGU6IHRoaXMubG9jYWxpemUoXG4gICAgICAgIFwidWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5yZXN0b3JlZC5jb25maXJtX3JlbW92ZV90aXRsZVwiXG4gICAgICApLFxuICAgICAgdGV4dDogdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnJlc3RvcmVkLmNvbmZpcm1fcmVtb3ZlX3RleHRcIlxuICAgICAgKSxcbiAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgIGRpc21pc3NUZXh0OiB0aGlzLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgY29uZmlybTogKCkgPT5cbiAgICAgICAgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLm9wcCwgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQpLFxuICAgIH0pO1xuICB9XG5cbiAgX2dvdG9TZXR0aW5ncygpIHtcbiAgICBzaG93RW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2codGhpcywgeyBlbnRyeTogdGhpcy5yZWdpc3RyeUVudHJ5IH0pO1xuICAgIHRoaXMuZmlyZShcIm9wcC1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogbnVsbCB9KTtcbiAgfVxuXG4gIF9nb3RvRWRpdCgpIHtcbiAgICBjb25zdCBkb21haW4gPSB0aGlzLl9jb21wdXRlRG9tYWluKHRoaXMuc3RhdGVPYmopO1xuICAgIG5hdmlnYXRlKFxuICAgICAgdGhpcyxcbiAgICAgIGAvY29uZmlnLyR7ZG9tYWlufS9lZGl0LyR7XG4gICAgICAgIEVESVRBQkxFX0RPTUFJTlNfV0lUSF9JRC5pbmNsdWRlcyhkb21haW4pXG4gICAgICAgICAgPyB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuaWRcbiAgICAgICAgICA6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkXG4gICAgICB9YFxuICAgICk7XG4gICAgdGhpcy5maXJlKFwib3BwLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBudWxsIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwob3BwKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwob3BwKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvbnRyb2xzXCIsIE1vcmVJbmZvQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vcmVzb3VyY2VzL29wLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4vbW9yZS1pbmZvL21vcmUtaW5mby1jb250cm9sc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5cbmltcG9ydCBEaWFsb2dNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2RpYWxvZy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBEaWFsb2dNaXhpblxuICovXG5jbGFzcyBPcE1vcmVJbmZvRGlhbG9nIGV4dGVuZHMgRGlhbG9nTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwib3Atc3R5bGUtZGlhbG9nIHBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgd2lkdGg6IDM2NXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vcmUtaW5mby1jb250cm9scyB7XG4gICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgLS1vcC1tb3JlLWluZm8tYXBwLXRvb2xiYXItdGl0bGU6IHtcbiAgICAgICAgICAgIC8qIERlc2lnbiBndWlkZWxpbmUgc3RhdGVzIDI0cHgsIGNoYW5nZWQgdG8gMTYgdG8gYWxpZ24gd2l0aCBzdGF0ZSBpbmZvICovXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIuNmVtO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC8qIHdlYmtpdCBhbmQgYmxpbmsgc3RpbGwgc3VwcG9ydCBzaW1wbGUgbXVsdGlsaW5lIHRleHQtb3ZlcmZsb3cgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIG92ZXJydWxlIHRoZSBvcC1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICBtb3JlLWluZm8tY29udHJvbHMge1xuICAgICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtkYXRhLWRvbWFpbj1cImNhbWVyYVwiXSkge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RhdGEtZG9tYWluPVwiaGlzdG9yeV9ncmFwaFwiXSksXG4gICAgICAgIDpob3N0KFtsYXJnZV0pIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8bW9yZS1pbmZvLWNvbnRyb2xzXG4gICAgICAgIGNsYXNzPVwibm8tcGFkZGluZ1wiXG4gICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBkaWFsb2ctZWxlbWVudD1cIltbX2RpYWxvZ0VsZW1lbnQoKV1dXCJcbiAgICAgICAgcmVnaXN0cnktZW50cnk9XCJbW19yZWdpc3RyeUluZm9dXVwiXG4gICAgICAgIGxhcmdlPVwie3tsYXJnZX19XCJcbiAgICAgID48L21vcmUtaW5mby1jb250cm9scz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVTdGF0ZU9iaihvcHApXCIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2xhcmdlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX3JlZ2lzdHJ5SW5mbzogT2JqZWN0LFxuXG4gICAgICBkYXRhRG9tYWluOiB7XG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKHN0YXRlT2JqKVwiLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX2RpYWxvZ09wZW5DaGFuZ2VkKG9wZW5lZClcIl07XG4gIH1cblxuICBfZGlhbG9nRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jb21wdXRlRG9tYWluKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqID8gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSA6IFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlT2JqKG9wcCkge1xuICAgIHJldHVybiBvcHAuc3RhdGVzW29wcC5tb3JlSW5mb0VudGl0eUlkXSB8fCBudWxsO1xuICB9XG5cbiAgYXN5bmMgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBfcmVnaXN0cnlJbmZvOiBudWxsLFxuICAgICAgICBsYXJnZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIGFsbG93IGRpYWxvZyB0byByZW5kZXIgY29udGVudCBiZWZvcmUgc2hvd2luZyBpdCBzbyBpdCB3aWxsIGJlXG4gICAgICAgIC8vIHBvc2l0aW9uZWQgY29ycmVjdGx5LlxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICAhaXNDb21wb25lbnRMb2FkZWQodGhpcy5vcHAsIFwiY29uZmlnXCIpIHx8XG4gICAgICAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BwLnVzZXIuaXNfYWRtaW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLm9wcC5jYWxsV1Moe1xuICAgICAgICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9nZXRcIixcbiAgICAgICAgICBlbnRpdHlfaWQ6IG5ld1ZhbC5lbnRpdHlfaWQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWdpc3RyeUluZm8gPSBpbmZvO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5SW5mbyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RpYWxvZ09wZW5DaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsICYmIHRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuZmlyZShcIm9wcC1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9sYXJnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtbW9yZS1pbmZvLWRpYWxvZ1wiLCBPcE1vcmVJbmZvRGlhbG9nKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcclxuaW1wb3J0IHsgUGFwZXJEaWFsb2dCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yXCI7XHJcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xyXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuL2V2ZW50cy1taXhpblwiO1xyXG4vKipcclxuICogQHBvbHltZXJNaXhpblxyXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXHJcbiAqIEBhcHBsaWVzTWl4aW4gUGFwZXJEaWFsb2dCZWhhdmlvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcclxuICAoc3VwZXJDbGFzcykgPT5cclxuICAgIGNsYXNzIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXHJcbiAgICAgIFtFdmVudHNNaXhpbiwgUGFwZXJEaWFsb2dCZWhhdmlvcl0sXHJcbiAgICAgIHN1cGVyQ2xhc3NcclxuICAgICkge1xyXG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHdpdGhCYWNrZHJvcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFpQkE7QUFDQTtBQUFBO0FBeUJBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUtBLGVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWlCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSxxMUJBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbENBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBelBBO0FBQ0E7QUF5UEE7Ozs7Ozs7Ozs7OztBQzNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5LQTtBQUNBO0FBbUtBOzs7Ozs7Ozs7Ozs7QUNyTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUtBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBVEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==