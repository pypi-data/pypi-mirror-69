(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"],{

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

/***/ "./src/components/buttons/op-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/op-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _op_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-progress-button */ "./src/components/buttons/op-progress-button.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");





/*
 * @appliesMixin EventsMixin
 */

class OpCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></op-progress-button>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      domain: {
        type: String
      },
      service: {
        type: String
      },
      serviceData: {
        type: Object,
        value: {}
      },
      confirmation: {
        type: String
      }
    };
  }

  callService() {
    this.progress = true;
    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData
    };
    this.opp.callService(this.domain, this.service, this.serviceData).then(function () {
      el.progress = false;
      el.$.progress.actionSuccess();
      eventData.success = true;
    }, function () {
      el.progress = false;
      el.$.progress.actionError();
      eventData.success = false;
    }).then(function () {
      el.fire("opp-service-called", eventData);
    });
  }

  buttonTapped() {
    if (this.confirmation) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_4__["showConfirmationDialog"])(this, {
        text: this.confirmation,
        confirm: () => this.callService()
      });
    } else {
      this.callService();
    }
  }

}

customElements.define("op-call-service-button", OpCallServiceButton);

/***/ }),

/***/ "./src/components/buttons/op-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/op-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");





class OpProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("op-progress-button", OpProgressButton);

/***/ }),

/***/ "./src/components/op-service-description.js":
/*!**************************************************!*\
  !*** ./src/components/op-service-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



class OpServiceDescription extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      [[_getDescription(opp, domain, service)]]
    `;
  }

  static get properties() {
    return {
      opp: Object,
      domain: String,
      service: String
    };
  }

  _getDescription(opp, domain, service) {
    var domainServices = opp.services[domain];
    if (!domainServices) return "";
    var serviceObject = domainServices[service];
    if (!serviceObject) return "";
    return serviceObject.description;
  }

}

customElements.define("op-service-description", OpServiceDescription);

/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (opp, values) => opp.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (opp, areaId, updates) => opp.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (opp, areaId) => opp.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/devcon.ts":
/*!****************************!*\
  !*** ./src/data/devcon.ts ***!
  \****************************/
/*! exports provided: fetchConfig, saveConfig, deleteConfig, subscribeDevconUpdates, getDevconCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfig", function() { return deleteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDevconUpdates", function() { return subscribeDevconUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevconCollection", function() { return getDevconCollection; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");

const fetchConfig = (conn, force) => conn.sendMessagePromise({
  type: "devcon/config",
  force
});
const saveConfig = (opp, config) => opp.callWS({
  type: "devcon/config/save",
  config
});
const deleteConfig = opp => opp.callWS({
  type: "devcon/config/delete"
});
const subscribeDevconUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "devcon_updated");
const getDevconCollection = conn => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_devcon", conn2 => fetchConfig(conn2, false), (_conn, store) => subscribeDevconUpdates(conn, () => fetchConfig(conn, false).then(config => store.setState(config, true))));

/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: computeDeviceName, fallbackDeviceName, updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDeviceName", function() { return computeDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDeviceName", function() { return fallbackDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");



const computeDeviceName = (device, opp, entities) => {
  return device.name_by_user || device.name || entities && fallbackDeviceName(opp, entities) || opp.localize("ui.panel.config.devices.unnamed_device");
};
const fallbackDeviceName = (opp, entities) => {
  for (const entity of entities || []) {
    const entityId = typeof entity === "string" ? entity : entity.entity_id;
    const stateObj = opp.states[entityId];

    if (stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
    }
  }

  return undefined;
};
const updateDeviceRegistryEntry = (opp, deviceId, updates) => opp.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/zha.ts":
/*!*************************!*\
  !*** ./src/data/zha.ts ***!
  \*************************/
/*! exports provided: reconfigureNode, fetchAttributesForCluster, fetchDevices, fetchZHADevice, fetchBindableDevices, bindDevices, unbindDevices, bindDeviceToGroup, unbindDeviceFromGroup, readAttributeValue, fetchCommandsForCluster, fetchClustersForZhaNode, fetchGroups, removeGroups, fetchGroup, fetchGroupableDevices, addMembersToGroup, removeMembersFromGroup, addGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconfigureNode", function() { return reconfigureNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAttributesForCluster", function() { return fetchAttributesForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDevices", function() { return fetchDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZHADevice", function() { return fetchZHADevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBindableDevices", function() { return fetchBindableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDevices", function() { return bindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDevices", function() { return unbindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDeviceToGroup", function() { return bindDeviceToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDeviceFromGroup", function() { return unbindDeviceFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAttributeValue", function() { return readAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCommandsForCluster", function() { return fetchCommandsForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClustersForZhaNode", function() { return fetchClustersForZhaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroups", function() { return removeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupableDevices", function() { return fetchGroupableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMembersToGroup", function() { return addMembersToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMembersFromGroup", function() { return removeMembersFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
const reconfigureNode = (opp, ieeeAddress) => opp.callWS({
  type: "zha/devices/reconfigure",
  ieee: ieeeAddress
});
const fetchAttributesForCluster = (opp, ieeeAddress, endpointId, clusterId, clusterType) => opp.callWS({
  type: "zha/devices/clusters/attributes",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchDevices = opp => opp.callWS({
  type: "zha/devices"
});
const fetchZHADevice = (opp, ieeeAddress) => opp.callWS({
  type: "zha/device",
  ieee: ieeeAddress
});
const fetchBindableDevices = (opp, ieeeAddress) => opp.callWS({
  type: "zha/devices/bindable",
  ieee: ieeeAddress
});
const bindDevices = (opp, sourceIEEE, targetIEEE) => opp.callWS({
  type: "zha/devices/bind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const unbindDevices = (opp, sourceIEEE, targetIEEE) => opp.callWS({
  type: "zha/devices/unbind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const bindDeviceToGroup = (opp, deviceIEEE, groupId, clusters) => opp.callWS({
  type: "zha/groups/bind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const unbindDeviceFromGroup = (opp, deviceIEEE, groupId, clusters) => opp.callWS({
  type: "zha/groups/unbind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const readAttributeValue = (opp, data) => {
  return opp.callWS(Object.assign({}, data, {
    type: "zha/devices/clusters/attributes/value"
  }));
};
const fetchCommandsForCluster = (opp, ieeeAddress, endpointId, clusterId, clusterType) => opp.callWS({
  type: "zha/devices/clusters/commands",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchClustersForZhaNode = (opp, ieeeAddress) => opp.callWS({
  type: "zha/devices/clusters",
  ieee: ieeeAddress
});
const fetchGroups = opp => opp.callWS({
  type: "zha/groups"
});
const removeGroups = (opp, groupIdsToRemove) => opp.callWS({
  type: "zha/group/remove",
  group_ids: groupIdsToRemove
});
const fetchGroup = (opp, groupId) => opp.callWS({
  type: "zha/group",
  group_id: groupId
});
const fetchGroupableDevices = opp => opp.callWS({
  type: "zha/devices/groupable"
});
const addMembersToGroup = (opp, groupId, membersToAdd) => opp.callWS({
  type: "zha/group/members/add",
  group_id: groupId,
  members: membersToAdd
});
const removeMembersFromGroup = (opp, groupId, membersToRemove) => opp.callWS({
  type: "zha/group/members/remove",
  group_id: groupId,
  members: membersToRemove
});
const addGroup = (opp, groupName, membersToAdd) => opp.callWS({
  type: "zha/group/add",
  group_name: groupName,
  members: membersToAdd
});

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

/***/ "./src/panels/config/zha/functions.ts":
/*!********************************************!*\
  !*** ./src/panels/config/zha/functions.ts ***!
  \********************************************/
/*! exports provided: formatAsPaddedHex, sortZHADevices, sortZHAGroups, computeClusterKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAsPaddedHex", function() { return formatAsPaddedHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHADevices", function() { return sortZHADevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHAGroups", function() { return sortZHAGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeClusterKey", function() { return computeClusterKey; });
const formatAsPaddedHex = value => {
  let hex = value;

  if (typeof value === "string") {
    hex = parseInt(value, 16);
  }

  return "0x" + hex.toString(16).padStart(4, "0");
};
const sortZHADevices = (a, b) => {
  const nameA = a.user_given_name ? a.user_given_name : a.name;
  const nameb = b.user_given_name ? b.user_given_name : b.name;
  return nameA.localeCompare(nameb);
};
const sortZHAGroups = (a, b) => {
  const nameA = a.name;
  const nameb = b.name;
  return nameA.localeCompare(nameb);
};
const computeClusterKey = cluster => {
  return `${cluster.name} (Endpoint id: ${cluster.endpoint_id}, Id: ${formatAsPaddedHex(cluster.id)}, Type: ${cluster.type})`;
};

/***/ }),

/***/ "./src/panels/config/zha/zha-device-card.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zha/zha-device-card.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_buttons_op_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/buttons/op-call-service-button */ "./src/components/buttons/op-call-service-button.js");
/* harmony import */ var _components_op_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/op-service-description */ "./src/components/op-service-description.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _devcon_editor_add_entities_to_view__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../devcon/editor/add-entities-to-view */ "./src/panels/devcon/editor/add-entities-to-view.ts");
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























let ZHADeviceCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["customElement"])("zha-device-card")], function (_initialize, _LitElement) {
  class ZHADeviceCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHADeviceCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])()],
      key: "device",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "showHelp",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "showActions",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "showName",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "showEntityDetail",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "showModelInfo",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])({
        type: Boolean
      })],
      key: "showEditableInfo",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])()],
      key: "_serviceData",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])()],
      key: "_areas",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])()],
      key: "_selectedAreaIndex",

      value() {
        return -1;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["property"])()],
      key: "_userGivenName",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubAreas",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubEntities",
      value: void 0
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(ZHADeviceCard.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubAreas) {
          this._unsubAreas();
        }

        if (this._unsubEntities) {
          this._unsubEntities();
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHADeviceCard.prototype), "connectedCallback", this).call(this);

        this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_13__["subscribeAreaRegistry"])(this.opp.connection, areas => {
          this._areas = areas;

          if (this.device) {
            this._selectedAreaIndex = this._areas.findIndex(area => area.area_id === this.device.area_id) + 1; // account for the no area selected index
          }
        });
        this.opp.connection.subscribeEvents(event => {
          if (this.device) {
            this.device.entities.forEach(deviceEntity => {
              if (event.data.old_entity_id === deviceEntity.entity_id) {
                deviceEntity.entity_id = event.data.entity_id;
              }
            });
          }
        }, "entity_registry_updated").then(unsub => this._unsubEntities = unsub);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHADeviceCard.prototype), "firstUpdated", this).call(this, changedProperties);

        this.addEventListener("opp-service-called", ev => this.serviceCalled(ev));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has("device")) {
          if (!this._areas || !this.device || !this.device.area_id) {
            this._selectedAreaIndex = 0;
          } else {
            this._selectedAreaIndex = this._areas.findIndex(area => area.area_id === this.device.area_id) + 1;
          }

          this._userGivenName = this.device.user_given_name;
          this._serviceData = {
            ieee_address: this.device.ieee
          };
        }

        _get(_getPrototypeOf(ZHADeviceCard.prototype), "update", this).call(this, changedProperties);
      }
    }, {
      kind: "method",
      key: "serviceCalled",
      value: function serviceCalled(ev) {
        // Check if this is for us
        if (ev.detail.success && ev.detail.service === "remove") {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "zha-device-removed", {
            device: this.device
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
      <op-card header="${this.showName ? this.device.name : ""}">
        ${this.showModelInfo ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                <div class="info">
                  <div class="model">${this.device.model}</div>
                  <div class="manuf">
                    ${this.opp.localize("ui.dialogs.zha_device_info.manuf", "manufacturer", this.device.manufacturer)}
                  </div>
                </div>
              ` : ""}
        <div class="card-content">
          <dl>
            <dt>IEEE:</dt>
            <dd class="zha-info">${this.device.ieee}</dd>
            <dt>Nwk:</dt>
            <dd class="zha-info">${Object(_functions__WEBPACK_IMPORTED_MODULE_18__["formatAsPaddedHex"])(this.device.nwk)}</dd>
            <dt>Device Type:</dt>
            <dd class="zha-info">${this.device.device_type}</dd>
            <dt>LQI:</dt>
            <dd class="zha-info">${this.device.lqi || this.opp.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            <dt>RSSI:</dt>
            <dd class="zha-info">${this.device.rssi || this.opp.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            <dt>${this.opp.localize("ui.dialogs.zha_device_info.last_seen")}:</dt>
            <dd class="zha-info">${this.device.last_seen || this.opp.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            <dt>${this.opp.localize("ui.dialogs.zha_device_info.power_source")}:</dt>
            <dd class="zha-info">${this.device.power_source || this.opp.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            ${this.device.quirk_applied ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                    <dt>
                      ${this.opp.localize("ui.dialogs.zha_device_info.quirk")}:
                    </dt>
                    <dd class="zha-info">${this.device.quirk_class}</dd>
                  ` : ""}
          </dl>
        </div>

        <div class="device-entities">
          ${this.device.entities.map(entity => lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
              <paper-icon-item
                @click="${this._openMoreInfo}"
                .entity="${entity}"
              >
                <state-badge
                  .stateObj="${this.opp.states[entity.entity_id]}"
                  slot="item-icon"
                ></state-badge>
                ${this.showEntityDetail ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                      <paper-item-body>
                        <div class="name">
                          ${this._computeEntityName(entity)}
                        </div>
                        <div class="secondary entity-id">
                          ${entity.entity_id}
                        </div>
                      </paper-item-body>
                    ` : ""}
              </paper-icon-item>
            `)}
        </div>
        ${this.device.entities && this.device.entities.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                <div class="card-actions">
                  <mwc-button @click=${this._addToDevconView}>
                    ${this.opp.localize("ui.panel.config.devices.entities.add_entities_devcon")}
                  </mwc-button>
                </div>
              ` : ""}
        ${this.showEditableInfo ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                <div class="editable">
                  <paper-input
                    type="string"
                    @change="${this._saveCustomName}"
                    .value="${this._userGivenName || ""}"
                    .placeholder="${this.opp.localize("ui.dialogs.zha_device_info.zha_device_card.device_name_placeholder")}"
                  ></paper-input>
                </div>
                <div class="node-picker">
                  <paper-dropdown-menu
                    .label="${this.opp.localize("ui.dialogs.zha_device_info.zha_device_card.area_picker_label")}"
                    class="menu"
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      .selected="${this._selectedAreaIndex}"
                      @iron-select="${this._selectedAreaChanged}"
                    >
                      <paper-item>
                        ${this.opp.localize("ui.dialogs.zha_device_info.no_area")}
                      </paper-item>

                      ${this._areas.map(entry => lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                          <paper-item>${entry.name}</paper-item>
                        `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
              ` : ""}
        ${this.showActions ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                <div class="card-actions">
                  <mwc-button @click="${this._onReconfigureNodeClick}">
                    ${this.opp.localize("ui.dialogs.zha_device_info.buttons.reconfigure")}
                  </mwc-button>
                  ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                        <div class="help-text">
                          ${this.opp.localize("ui.dialogs.zha_device_info.services.reconfigure")}
                        </div>
                      ` : ""}

                  <op-call-service-button
                    .opp="${this.opp}"
                    domain="zha"
                    service="remove"
                    .confirmation=${this.opp.localize("ui.dialogs.zha_device_info.confirmations.remove")}
                    .serviceData="${this._serviceData}"
                  >
                    ${this.opp.localize("ui.dialogs.zha_device_info.buttons.remove")}
                  </op-call-service-button>
                  ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                        <div class="help-text">
                          ${this.opp.localize("ui.dialogs.zha_device_info.services.remove")}
                        </div>
                      ` : ""}
                  ${this.device.power_source === "Mains" && this.device.device_type === "Router" ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                        <mwc-button @click=${this._onAddDevicesClick}>
                          ${this.opp.localize("ui.panel.config.zha.common.add_devices")}
                        </mwc-button>
                        ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                              <op-service-description
                                .opp="${this.opp}"
                                domain="zha"
                                service="permit"
                                class="help-text2"
                              />
                            ` : ""}
                      ` : ""}
                </div>
              ` : ""}
        </div>
      </op-card>
    `;
      }
    }, {
      kind: "method",
      key: "_onReconfigureNodeClick",
      value: async function _onReconfigureNodeClick() {
        if (this.opp) {
          await Object(_data_zha__WEBPACK_IMPORTED_MODULE_15__["reconfigureNode"])(this.opp, this.device.ieee);
        }
      }
    }, {
      kind: "method",
      key: "_computeEntityName",
      value: function _computeEntityName(entity) {
        if (this.opp.states[entity.entity_id]) {
          return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_19__["computeStateName"])(this.opp.states[entity.entity_id]);
        }

        return entity.name;
      }
    }, {
      kind: "method",
      key: "_saveCustomName",
      value: async function _saveCustomName(event) {
        if (this.opp) {
          const values = {
            name_by_user: event.target.value,
            area_id: this.device.area_id ? this.device.area_id : undefined
          };
          await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_14__["updateDeviceRegistryEntry"])(this.opp, this.device.device_reg_id, values);
          this.device.user_given_name = event.target.value;
        }
      }
    }, {
      kind: "method",
      key: "_openMoreInfo",
      value: function _openMoreInfo(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "opp-more-info", {
          entityId: ev.currentTarget.entity.entity_id
        });
      }
    }, {
      kind: "method",
      key: "_selectedAreaChanged",
      value: async function _selectedAreaChanged(event) {
        if (!this.device || !this._areas) {
          return;
        }

        this._selectedAreaIndex = event.target.selected;
        const area = this._areas[this._selectedAreaIndex - 1]; // account for No Area

        if (!area && !this.device.area_id || area && area.area_id === this.device.area_id) {
          return;
        }

        const newAreaId = area ? area.area_id : undefined;
        await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_14__["updateDeviceRegistryEntry"])(this.opp, this.device.device_reg_id, {
          area_id: newAreaId,
          name_by_user: this.device.user_given_name
        });
        this.device.area_id = newAreaId;
      }
    }, {
      kind: "method",
      key: "_onAddDevicesClick",
      value: function _onAddDevicesClick() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_17__["navigate"])(this, "/config/zha/add/" + this.device.ieee);
      }
    }, {
      kind: "method",
      key: "_addToDevconView",
      value: function _addToDevconView() {
        Object(_devcon_editor_add_entities_to_view__WEBPACK_IMPORTED_MODULE_20__["addEntitiesToDevconView"])(this, this.opp, this.device.entities.map(entity => entity.entity_id));
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_16__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_11__["css"]`
        :host(:not([narrow])) .device-entities {
          max-height: 225px;
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: left;
        }
        op-card {
          flex: 1 0 100%;
          padding-bottom: 10px;
          min-width: 300px;
        }
        .device {
          width: 30%;
        }
        .device .name {
          font-weight: bold;
        }
        .device .manuf {
          color: var(--secondary-text-color);
          margin-bottom: 20px;
        }
        .extra-info {
          margin-top: 8px;
        }
        .manuf,
        .zha-info,
        .name {
          text-overflow: ellipsis;
        }
        .entity-id {
          text-overflow: ellipsis;
          color: var(--secondary-text-color);
        }
        .info {
          margin-left: 16px;
        }
        dl {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
        dl dt {
          display: inline-block;
          width: 30%;
          padding-left: 12px;
          float: left;
          text-align: left;
        }
        dl dd {
          width: 60%;
          overflow-wrap: break-word;
          margin-inline-start: 20px;
        }
        paper-icon-item {
          overflow-x: hidden;
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .editable {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }
        .help-text {
          color: grey;
          padding: 16px;
        }
        .menu {
          width: 100%;
        }
        .node-picker {
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_11__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/add-entities-to-view.ts":
/*!**********************************************************!*\
  !*** ./src/panels/devcon/editor/add-entities-to-view.ts ***!
  \**********************************************************/
/*! exports provided: addEntitiesToDevconView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntitiesToDevconView", function() { return addEntitiesToDevconView; });
/* harmony import */ var _data_devcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/devcon */ "./src/data/devcon.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-view/show-select-view-dialog */ "./src/panels/devcon/editor/select-view/show-select-view-dialog.ts");
/* harmony import */ var _card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-editor/show-suggest-card-dialog */ "./src/panels/devcon/editor/card-editor/show-suggest-card-dialog.ts");



const addEntitiesToDevconView = async (element, opp, entities, devconConfig, saveConfigFunc) => {
  var _ref, _panels$devcon;

  if (((_ref = (_panels$devcon = opp.panels.devcon) === null || _panels$devcon === void 0 ? void 0 : _panels$devcon.config) === null || _ref === void 0 ? void 0 : _ref.mode) === "yaml") {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showSuggestCardDialog"])(element, {
      entities
    });
    return;
  }

  if (!devconConfig) {
    try {
      devconConfig = await Object(_data_devcon__WEBPACK_IMPORTED_MODULE_0__["fetchConfig"])(opp.connection, false);
    } catch {
      alert(opp.localize("ui.panel.devcon.editor.add_entities.generated_unsupported"));
      return;
    }
  }

  if (!devconConfig.views.length) {
    alert("You don't have any Devcon views, first create a view in Devcon.");
    return;
  }

  if (!saveConfigFunc) {
    saveConfigFunc = async newConfig => {
      try {
        await Object(_data_devcon__WEBPACK_IMPORTED_MODULE_0__["saveConfig"])(opp, newConfig);
      } catch {
        alert(opp.localize("ui.panel.config.devices.add_entities.saving_failed"));
      }
    };
  }

  if (devconConfig.views.length === 1) {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showSuggestCardDialog"])(element, {
      devconConfig: devconConfig,
      saveConfig: saveConfigFunc,
      path: [0],
      entities
    });
    return;
  }

  Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_1__["showSelectViewDialog"])(element, {
    devconConfig,
    viewSelectedCallback: view => {
      Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showSuggestCardDialog"])(element, {
        devconConfig: devconConfig,
        saveConfig: saveConfigFunc,
        path: [view],
        entities
      });
    }
  });
};

/***/ }),

/***/ "./src/panels/devcon/editor/card-editor/show-suggest-card-dialog.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/show-suggest-card-dialog.ts ***!
  \**************************************************************************/
/*! exports provided: showSuggestCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuggestCardDialog", function() { return showSuggestCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const importsuggestCardDialog = () => Promise.all(/*! import() | hui-dialog-suggest-card */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e(7), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-edit-card~hui-dialog-suggest-card~hui-markdown-card-editor~b03e5084"), __webpack_require__.e(9), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op-store-auth-card~pa~5053a3b8"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~~22c2c76f"), __webpack_require__.e("vendors~dialog-config-flow~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-devcon"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e(8), __webpack_require__.e(11), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel~63a769ba"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-devcon~panel-history"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~panel-devcon"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-devices~panel-devcon"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("hui-dialog-suggest-card~panel-devcon"), __webpack_require__.e("hui-dialog-edit-card~hui-dialog-suggest-card"), __webpack_require__.e("hui-dialog-suggest-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-suggest-card */ "./src/panels/devcon/editor/card-editor/hui-dialog-suggest-card.ts"));

const showSuggestCardDialog = (element, suggestCardDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-suggest-card",
    dialogImport: importsuggestCardDialog,
    dialogParams: suggestCardDialogParams
  });
};

/***/ }),

/***/ "./src/panels/devcon/editor/select-view/show-select-view-dialog.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/devcon/editor/select-view/show-select-view-dialog.ts ***!
  \*************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showSelectViewDialog = (element, selectViewDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-select-view",
    dialogImport: () => Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/devcon/editor/select-view/hui-dialog-select-view.ts")),
    dialogParams: selectViewDialogParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXpoYS1kZXZpY2UtaW5mb356aGEtYWRkLWRldmljZXMtcGFnZX56aGEtZGV2aWNlcy1wYWdlfnpoYS1ncm91cC1wYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9vcC1jYWxsLXNlcnZpY2UtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvb3AtcHJvZ3Jlc3MtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLXNlcnZpY2UtZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXJlYV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kZXZjb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3poYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtZGV2aWNlLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2FkZC1lbnRpdGllcy10by12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LXN1Z2dlc3QtY2FyZC1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL3NlbGVjdC12aWV3L3Nob3ctc2VsZWN0LXZpZXctZGlhbG9nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9vcC1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBPcENhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9vcC1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNhbGxTZXJ2aWNlKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGV2ZW50RGF0YSA9IHtcbiAgICAgIGRvbWFpbjogdGhpcy5kb21haW4sXG4gICAgICBzZXJ2aWNlOiB0aGlzLnNlcnZpY2UsXG4gICAgICBzZXJ2aWNlRGF0YTogdGhpcy5zZXJ2aWNlRGF0YSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcHBcbiAgICAgIC5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlLCB0aGlzLnNlcnZpY2VEYXRhKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuZmlyZShcIm9wcC1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uKSB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuY2FsbFNlcnZpY2UoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGxTZXJ2aWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWNhbGwtc2VydmljZS1idXR0b25cIiwgT3BDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBPcFByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzTGlzdCA9IHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLmJ1dHRvblRhcHBlZChldikpO1xuICB9XG5cbiAgYnV0dG9uVGFwcGVkKGV2KSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MpIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYWN0aW9uU3VjY2VzcygpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcInN1Y2Nlc3NcIik7XG4gIH1cblxuICBhY3Rpb25FcnJvcigpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcImVycm9yXCIpO1xuICB9XG5cbiAgY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBkaXNhYmxlZCB8fCBwcm9ncmVzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wcm9ncmVzcy1idXR0b25cIiwgT3BQcm9ncmVzc0J1dHRvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XHJcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBPcFNlcnZpY2VEZXNjcmlwdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcclxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgIFtbX2dldERlc2NyaXB0aW9uKG9wcCwgZG9tYWluLCBzZXJ2aWNlKV1dXHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BwOiBPYmplY3QsXHJcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxyXG4gICAgICBzZXJ2aWNlOiBTdHJpbmcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgX2dldERlc2NyaXB0aW9uKG9wcCwgZG9tYWluLCBzZXJ2aWNlKSB7XHJcbiAgICB2YXIgZG9tYWluU2VydmljZXMgPSBvcHAuc2VydmljZXNbZG9tYWluXTtcclxuICAgIGlmICghZG9tYWluU2VydmljZXMpIHJldHVybiBcIlwiO1xyXG4gICAgdmFyIHNlcnZpY2VPYmplY3QgPSBkb21haW5TZXJ2aWNlc1tzZXJ2aWNlXTtcclxuICAgIGlmICghc2VydmljZU9iamVjdCkgcmV0dXJuIFwiXCI7XHJcbiAgICByZXR1cm4gc2VydmljZU9iamVjdC5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXNlcnZpY2UtZGVzY3JpcHRpb25cIiwgT3BTZXJ2aWNlRGVzY3JpcHRpb24pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgb3BwLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBhcmVhSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiwgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBPUFBEb21FdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZjb25Db25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgdmlld3M6IERldmNvblZpZXdDb25maWdbXTtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgcmVzb3VyY2VzPzogQXJyYXk8eyB0eXBlOiBcImNzc1wiIHwgXCJqc1wiIHwgXCJtb2R1bGVcIiB8IFwiaHRtbFwiOyB1cmw6IHN0cmluZyB9Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZjb25WaWV3Q29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBiYWRnZXM/OiBBcnJheTxzdHJpbmcgfCBEZXZjb25CYWRnZUNvbmZpZz47XG4gIGNhcmRzPzogRGV2Y29uQ2FyZENvbmZpZ1tdO1xuICBwYXRoPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICB0aGVtZT86IHN0cmluZztcbiAgcGFuZWw/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IFNob3dWaWV3Q29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd1ZpZXdDb25maWcge1xuICB1c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmNvbkJhZGdlQ29uZmlnIHtcbiAgdHlwZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmNvbkNhcmRDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdmlld19pbmRleD86IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxsU2VydmljZUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCI7XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgc2VydmljZV9kYXRhPzoge1xuICAgIGVudGl0eV9pZD86IHN0cmluZyB8IFtzdHJpbmddO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibmF2aWdhdGVcIjtcbiAgbmF2aWdhdGlvbl9wYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJ1cmxcIjtcbiAgdXJsX3BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb3JlSW5mb0FjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibW9yZS1pbmZvXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9BY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcImZpcmUtZG9tLWV2ZW50XCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGNvbmZpcm1hdGlvbj86IENvbmZpcm1hdGlvblJlc3RyaWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvblJlc3RyaWN0aW9uQ29uZmlnIHtcbiAgdGV4dD86IHN0cmluZztcbiAgZXhlbXB0aW9ucz86IFJlc3RyaWN0aW9uQ29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdHJpY3Rpb25Db25maWcge1xuICB1c2VyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkNvbmZpZyA9XG4gIHwgVG9nZ2xlQWN0aW9uQ29uZmlnXG4gIHwgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWdcbiAgfCBOYXZpZ2F0ZUFjdGlvbkNvbmZpZ1xuICB8IFVybEFjdGlvbkNvbmZpZ1xuICB8IE1vcmVJbmZvQWN0aW9uQ29uZmlnXG4gIHwgTm9BY3Rpb25Db25maWdcbiAgfCBDdXN0b21BY3Rpb25Db25maWc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgZm9yY2U6IGJvb2xlYW5cbik6IFByb21pc2U8RGV2Y29uQ29uZmlnPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJkZXZjb24vY29uZmlnXCIsXG4gICAgZm9yY2UsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2F2ZUNvbmZpZyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBjb25maWc6IERldmNvbkNvbmZpZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcImRldmNvbi9jb25maWcvc2F2ZVwiLFxuICAgIGNvbmZpZyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maWcgPSAob3BwOiBPcGVuUGVlclBvd2VyKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcImRldmNvbi9jb25maWcvZGVsZXRlXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRGV2Y29uVXBkYXRlcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWRcbikgPT4gY29ubi5zdWJzY3JpYmVFdmVudHMob25DaGFuZ2UsIFwiZGV2Y29uX3VwZGF0ZWRcIik7XG5cbmV4cG9ydCBjb25zdCBnZXREZXZjb25Db2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oXG4gICAgY29ubixcbiAgICBcIl9kZXZjb25cIixcbiAgICAoY29ubjIpID0+IGZldGNoQ29uZmlnKGNvbm4yLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZURldmNvblVwZGF0ZXMoY29ubiwgKCkgPT5cbiAgICAgICAgZmV0Y2hDb25maWcoY29ubiwgZmFsc2UpLnRoZW4oKGNvbmZpZykgPT4gc3RvcmUuc2V0U3RhdGUoY29uZmlnLCB0cnVlKSlcbiAgICAgIClcbiAgKTtcblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dXaXRoRGV2Y29uUHJvbSBleHRlbmRzIFdpbmRvdyB7XG4gIGxsQ29uZlByb20/OiBQcm9taXNlPERldmNvbkNvbmZpZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSGFuZGxlck9wdGlvbnMge1xuICBoYXNIb2xkPzogYm9vbGVhbjtcbiAgaGFzRG91YmxlQ2xpY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkhhbmRsZXJEZXRhaWwge1xuICBhY3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uSGFuZGxlckV2ZW50ID0gT1BQRG9tRXZlbnQ8QWN0aW9uSGFuZGxlckRldGFpbD47XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4vZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VFbnRpdHlMb29rdXAge1xuICBbZGV2aWNlSWQ6IHN0cmluZ106IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZURldmljZU5hbWUgPSAoXG4gIGRldmljZTogRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSB8IHN0cmluZ1tdXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICBkZXZpY2UubmFtZV9ieV91c2VyIHx8XG4gICAgZGV2aWNlLm5hbWUgfHxcbiAgICAoZW50aXRpZXMgJiYgZmFsbGJhY2tEZXZpY2VOYW1lKG9wcCwgZW50aXRpZXMpKSB8fFxuICAgIG9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLnVubmFtZWRfZGV2aWNlXCIpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZmFsbGJhY2tEZXZpY2VOYW1lID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gfCBzdHJpbmdbXVxuKSA9PiB7XG4gIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzIHx8IFtdKSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSB0eXBlb2YgZW50aXR5ID09PSBcInN0cmluZ1wiID8gZW50aXR5IDogZW50aXR5LmVudGl0eV9pZDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IG9wcC5zdGF0ZXNbZW50aXR5SWRdO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpIQUVudGl0eVJlZmVyZW5jZSBleHRlbmRzIE9wcEVudGl0eSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFEZXZpY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIGllZWU6IHN0cmluZztcbiAgbndrOiBzdHJpbmc7XG4gIGxxaTogc3RyaW5nO1xuICByc3NpOiBzdHJpbmc7XG4gIGxhc3Rfc2Vlbjogc3RyaW5nO1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw6IHN0cmluZztcbiAgcXVpcmtfYXBwbGllZDogYm9vbGVhbjtcbiAgcXVpcmtfY2xhc3M6IHN0cmluZztcbiAgZW50aXRpZXM6IFpIQUVudGl0eVJlZmVyZW5jZVtdO1xuICBtYW51ZmFjdHVyZXJfY29kZTogbnVtYmVyO1xuICBkZXZpY2VfcmVnX2lkOiBzdHJpbmc7XG4gIHVzZXJfZ2l2ZW5fbmFtZT86IHN0cmluZztcbiAgcG93ZXJfc291cmNlPzogc3RyaW5nO1xuICBhcmVhX2lkPzogc3RyaW5nO1xuICBkZXZpY2VfdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSB7XG4gIGllZWU6IHN0cmluZztcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl9pZDogbnVtYmVyO1xuICBjbHVzdGVyX3R5cGU6IHN0cmluZztcbiAgYXR0cmlidXRlOiBudW1iZXI7XG4gIG1hbnVmYWN0dXJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgbWVtYmVyczogWkhBRGV2aWNlW107XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL3JlY29uZmlndXJlXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlciA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzL2F0dHJpYnV0ZXNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZXMgPSAob3BwOiBPcGVuUGVlclBvd2VyKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8WkhBRGV2aWNlPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJpbmRhYmxlRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2JpbmRhYmxlXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL3VuYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBzb3VyY2VJRUVFLFxuICAgIHRhcmdldF9pZWVlOiB0YXJnZXRJRUVFLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VUb0dyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVuYmluZERldmljZUZyb21Hcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBkZXZpY2VJRUVFOiBzdHJpbmcsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgY2x1c3RlcnM6IENsdXN0ZXJbXVxuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBkYXRhOiBSZWFkQXR0cmlidXRlU2VydmljZURhdGFcbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBvcHAuY2FsbFdTKHtcbiAgICAuLi5kYXRhLFxuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvYXR0cmlidXRlcy92YWx1ZVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbW1hbmRzRm9yQ2x1c3RlciA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9jb21tYW5kc1wiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICAgIGVuZHBvaW50X2lkOiBlbmRwb2ludElkLFxuICAgIGNsdXN0ZXJfaWQ6IGNsdXN0ZXJJZCxcbiAgICBjbHVzdGVyX3R5cGU6IGNsdXN0ZXJUeXBlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8Q2x1c3RlcltdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cHMgPSAob3BwOiBPcGVuUGVlclBvd2VyKTogUHJvbWlzZTxaSEFHcm91cFtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVHcm91cHMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBJZHNUb1JlbW92ZTogbnVtYmVyW11cbik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWRzOiBncm91cElkc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBJZDogbnVtYmVyXG4pOiBQcm9taXNlPFpIQUdyb3VwPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2dyb3VwYWJsZVwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1lbWJlcnNUb0dyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvQWRkOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvbWVtYmVycy9hZGRcIixcbiAgICBncm91cF9pZDogZ3JvdXBJZCxcbiAgICBtZW1iZXJzOiBtZW1iZXJzVG9BZGQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTWVtYmVyc0Zyb21Hcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBncm91cElkOiBudW1iZXIsXG4gIG1lbWJlcnNUb1JlbW92ZTogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZEdyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwTmFtZTogc3RyaW5nLFxuICBtZW1iZXJzVG9BZGQ/OiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvYWRkXCIsXG4gICAgZ3JvdXBfbmFtZTogZ3JvdXBOYW1lLFxuICAgIG1lbWJlcnM6IG1lbWJlcnNUb0FkZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmludGVyZmFjZSBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG4gIGNhbmNlbD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXNcbiAgZXh0ZW5kcyBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMsXG4gICAgUHJvbXB0RGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1hdGlvbj86IGJvb2xlYW47XG4gIHByb21wdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkR2VuZXJpY0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctYm94XCIpO1xuXG5jb25zdCBzaG93RGlhbG9nSGVscGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBEaWFsb2dQYXJhbXMsXG4gIGV4dHJhPzoge1xuICAgIGNvbmZpcm1hdGlvbj86IERpYWxvZ1BhcmFtc1tcImNvbmZpcm1hdGlvblwiXTtcbiAgICBwcm9tcHQ/OiBEaWFsb2dQYXJhbXNbXCJwcm9tcHRcIl07XG4gIH1cbikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBvcmlnQ2FuY2VsID0gZGlhbG9nUGFyYW1zLmNhbmNlbDtcbiAgICBjb25zdCBvcmlnQ29uZmlybSA9IGRpYWxvZ1BhcmFtcy5jb25maXJtO1xuXG4gICAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nVGFnOiBcImRpYWxvZy1ib3hcIixcbiAgICAgIGRpYWxvZ0ltcG9ydDogbG9hZEdlbmVyaWNEaWFsb2csXG4gICAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgICAuLi5leHRyYSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gbnVsbCA6IGZhbHNlKTtcbiAgICAgICAgICBpZiAob3JpZ0NhbmNlbCkge1xuICAgICAgICAgICAgb3JpZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybTogKG91dCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG91dCA6IHRydWUpO1xuICAgICAgICAgIGlmIChvcmlnQ29uZmlybSkge1xuICAgICAgICAgICAgb3JpZ0NvbmZpcm0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGVydERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWxlcnREaWFsb2dQYXJhbXNcbikgPT4gc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IGNvbmZpcm1hdGlvbjogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIGJvb2xlYW5cbiAgPjtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9tcHREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IFByb21wdERpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBwcm9tcHQ6IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBudWxsIHwgc3RyaW5nXG4gID47XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IFpIQURldmljZSwgWkhBR3JvdXAsIENsdXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFzUGFkZGVkSGV4ID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgaGV4ID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBoZXggPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICB9XG4gIHJldHVybiBcIjB4XCIgKyBoZXgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDQsIFwiMFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0WkhBRGV2aWNlcyA9IChhOiBaSEFEZXZpY2UsIGI6IFpIQURldmljZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG5hbWVBID0gYS51c2VyX2dpdmVuX25hbWUgPyBhLnVzZXJfZ2l2ZW5fbmFtZSA6IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLnVzZXJfZ2l2ZW5fbmFtZSA/IGIudXNlcl9naXZlbl9uYW1lIDogYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQUdyb3VwcyA9IChhOiBaSEFHcm91cCwgYjogWkhBR3JvdXApOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLm5hbWU7XG4gIHJldHVybiBuYW1lQS5sb2NhbGVDb21wYXJlKG5hbWViKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlQ2x1c3RlcktleSA9IChjbHVzdGVyOiBDbHVzdGVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2NsdXN0ZXIubmFtZX0gKEVuZHBvaW50IGlkOiAke1xuICAgIGNsdXN0ZXIuZW5kcG9pbnRfaWRcbiAgfSwgSWQ6ICR7Zm9ybWF0QXNQYWRkZWRIZXgoY2x1c3Rlci5pZCl9LCBUeXBlOiAke2NsdXN0ZXIudHlwZX0pYDtcbn07XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zLFxuICB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIHJlY29uZmlndXJlTm9kZSxcbiAgWkhBRGV2aWNlLFxuICBaSEFFbnRpdHlSZWZlcmVuY2UsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgb3BTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBJdGVtU2VsZWN0ZWRFdmVudCwgTm9kZVNlcnZpY2VEYXRhIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jLCBPcHBFdmVudCB9IGZyb20gXCIuLi8uLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBmb3JtYXRBc1BhZGRlZEhleCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgYWRkRW50aXRpZXNUb0RldmNvblZpZXcgfSBmcm9tIFwiLi4vLi4vZGV2Y29uL2VkaXRvci9hZGQtZW50aXRpZXMtdG8tdmlld1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwiemhhLWRldmljZS1yZW1vdmVkXCI6IHtcbiAgICAgIGRldmljZT86IFpIQURldmljZTtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWRldmljZS1jYXJkXCIpXG5jbGFzcyBaSEFEZXZpY2VDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlPzogWkhBRGV2aWNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBuYXJyb3c/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93SGVscD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0FjdGlvbnM/OiBib29sZWFuID0gdHJ1ZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd05hbWU/OiBib29sZWFuID0gdHJ1ZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0VudGl0eURldGFpbD86IGJvb2xlYW4gPSB0cnVlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93TW9kZWxJbmZvPzogYm9vbGVhbiA9IHRydWU7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNob3dFZGl0YWJsZUluZm8/OiBib29sZWFuID0gdHJ1ZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VydmljZURhdGE/OiBOb2RlU2VydmljZURhdGE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkQXJlYUluZGV4OiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdXNlckdpdmVuTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdW5zdWJBcmVhcz86IFVuc3Vic2NyaWJlRnVuYztcbiAgcHJpdmF0ZSBfdW5zdWJFbnRpdGllcz86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5zdWJFbnRpdGllcykge1xuICAgICAgdGhpcy5fdW5zdWJFbnRpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiwgKGFyZWFzKSA9PiB7XG4gICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgICAgaWYgKHRoaXMuZGV2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQXJlYUluZGV4ID1cbiAgICAgICAgICB0aGlzLl9hcmVhcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoYXJlYSkgPT4gYXJlYS5hcmVhX2lkID09PSB0aGlzLmRldmljZSEuYXJlYV9pZFxuICAgICAgICAgICkgKyAxOyAvLyBhY2NvdW50IGZvciB0aGUgbm8gYXJlYSBzZWxlY3RlZCBpbmRleFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BwLmNvbm5lY3Rpb25cbiAgICAgIC5zdWJzY3JpYmVFdmVudHMoKGV2ZW50OiBPcHBFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UpIHtcbiAgICAgICAgICB0aGlzLmRldmljZSEuZW50aXRpZXMuZm9yRWFjaCgoZGV2aWNlRW50aXR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5vbGRfZW50aXR5X2lkID09PSBkZXZpY2VFbnRpdHkuZW50aXR5X2lkKSB7XG4gICAgICAgICAgICAgIGRldmljZUVudGl0eS5lbnRpdHlfaWQgPSBldmVudC5kYXRhLmVudGl0eV9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiKVxuICAgICAgLnRoZW4oKHVuc3ViKSA9PiAodGhpcy5fdW5zdWJFbnRpdGllcyA9IHVuc3ViKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwib3BwLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT4gdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiZGV2aWNlXCIpKSB7XG4gICAgICBpZiAoIXRoaXMuX2FyZWFzIHx8ICF0aGlzLmRldmljZSB8fCAhdGhpcy5kZXZpY2UuYXJlYV9pZCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9XG4gICAgICAgICAgdGhpcy5fYXJlYXMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGFyZWEpID0+IGFyZWEuYXJlYV9pZCA9PT0gdGhpcy5kZXZpY2UhLmFyZWFfaWRcbiAgICAgICAgICApICsgMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VzZXJHaXZlbk5hbWUgPSB0aGlzLmRldmljZSEudXNlcl9naXZlbl9uYW1lO1xuICAgICAgdGhpcy5fc2VydmljZURhdGEgPSB7XG4gICAgICAgIGllZWVfYWRkcmVzczogdGhpcy5kZXZpY2UhLmllZWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlcnZpY2VDYWxsZWQoZXYpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGZvciB1c1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2VzcyAmJiBldi5kZXRhaWwuc2VydmljZSA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiemhhLWRldmljZS1yZW1vdmVkXCIsIHtcbiAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLWNhcmQgaGVhZGVyPVwiJHt0aGlzLnNob3dOYW1lID8gdGhpcy5kZXZpY2UhLm5hbWUgOiBcIlwifVwiPlxuICAgICAgICAke1xuICAgICAgICAgIHRoaXMuc2hvd01vZGVsSW5mb1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZWxcIj4ke3RoaXMuZGV2aWNlIS5tb2RlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW51ZlwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLm1hbnVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtYW51ZmFjdHVyZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZSEubWFudWZhY3R1cmVyXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgIDxkdD5JRUVFOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLmllZWV9PC9kZD5cbiAgICAgICAgICAgIDxkdD5Od2s6PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHtmb3JtYXRBc1BhZGRlZEhleCh0aGlzLmRldmljZSEubndrKX08L2RkPlxuICAgICAgICAgICAgPGR0PkRldmljZSBUeXBlOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLmRldmljZV90eXBlfTwvZGQ+XG4gICAgICAgICAgICA8ZHQ+TFFJOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLmxxaSB8fFxuICAgICAgICAgICAgICB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby51bmtub3duXCIpfTwvZGQ+XG4gICAgICAgICAgICA8ZHQ+UlNTSTo8L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzPVwiemhhLWluZm9cIj4ke3RoaXMuZGV2aWNlIS5yc3NpIHx8XG4gICAgICAgICAgICAgIHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnVua25vd25cIil9PC9kZD5cbiAgICAgICAgICAgIDxkdD4ke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5sYXN0X3NlZW5cIlxuICAgICAgICAgICAgKX06PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHt0aGlzLmRldmljZSEubGFzdF9zZWVuIHx8XG4gICAgICAgICAgICAgIHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnVua25vd25cIil9PC9kZD5cbiAgICAgICAgICAgIDxkdD4ke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5wb3dlcl9zb3VyY2VcIlxuICAgICAgICAgICAgKX06PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHt0aGlzLmRldmljZSEucG93ZXJfc291cmNlIHx8XG4gICAgICAgICAgICAgIHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnVua25vd25cIil9PC9kZD5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIHRoaXMuZGV2aWNlIS5xdWlya19hcHBsaWVkXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5xdWlya1wiKX06XG4gICAgICAgICAgICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHt0aGlzLmRldmljZSEucXVpcmtfY2xhc3N9PC9kZD5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2RsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLWVudGl0aWVzXCI+XG4gICAgICAgICAgJHt0aGlzLmRldmljZSEuZW50aXRpZXMubWFwKFxuICAgICAgICAgICAgKGVudGl0eSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbVxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb3Blbk1vcmVJbmZvfVwiXG4gICAgICAgICAgICAgICAgLmVudGl0eT1cIiR7ZW50aXR5fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj1cIiR7dGhpcy5vcHAhLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXX1cIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnNob3dFbnRpdHlEZXRhaWxcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9jb21wdXRlRW50aXR5TmFtZShlbnRpdHkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5IGVudGl0eS1pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtcbiAgICAgICAgICB0aGlzLmRldmljZSEuZW50aXRpZXMgJiYgdGhpcy5kZXZpY2UhLmVudGl0aWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9hZGRUb0RldmNvblZpZXd9PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmRldmljZXMuZW50aXRpZXMuYWRkX2VudGl0aWVzX2RldmNvblwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5zaG93RWRpdGFibGVJbmZvXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3NhdmVDdXN0b21OYW1lfVwiXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fdXNlckdpdmVuTmFtZSB8fCBcIlwifVwiXG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcj1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8uemhhX2RldmljZV9jYXJkLmRldmljZV9uYW1lX3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnpoYV9kZXZpY2VfY2FyZC5hcmVhX3BpY2tlcl9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZEFyZWFJbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD1cIiR7dGhpcy5fc2VsZWN0ZWRBcmVhQ2hhbmdlZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5ub19hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9hcmVhcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7ZW50cnkubmFtZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAke1xuICAgICAgICAgIHRoaXMuc2hvd0FjdGlvbnNcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX29uUmVjb25maWd1cmVOb2RlQ2xpY2t9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8uYnV0dG9ucy5yZWNvbmZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnNlcnZpY2VzLnJlY29uZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgICA8b3AtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6aGFcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmZpcm1hdGlvbj0ke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLmNvbmZpcm1hdGlvbnMucmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9zZXJ2aWNlRGF0YX1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLmJ1dHRvbnMucmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8uc2VydmljZXMucmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmRldmljZSEucG93ZXJfc291cmNlID09PSBcIk1haW5zXCIgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlIS5kZXZpY2VfdHlwZSA9PT0gXCJSb3V0ZXJcIlxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vbkFkZERldmljZXNDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jb21tb24uYWRkX2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dIZWxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcC1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJwZXJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtdGV4dDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L29wLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX29uUmVjb25maWd1cmVOb2RlQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMub3BwKSB7XG4gICAgICBhd2FpdCByZWNvbmZpZ3VyZU5vZGUodGhpcy5vcHAsIHRoaXMuZGV2aWNlIS5pZWVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlRW50aXR5TmFtZShlbnRpdHk6IFpIQUVudGl0eVJlZmVyZW5jZSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMub3BwLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUodGhpcy5vcHAuc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdKTtcbiAgICB9XG4gICAgcmV0dXJuIGVudGl0eS5uYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZUN1c3RvbU5hbWUoZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5vcHApIHtcbiAgICAgIGNvbnN0IHZhbHVlczogRGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMgPSB7XG4gICAgICAgIG5hbWVfYnlfdXNlcjogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBhcmVhX2lkOiB0aGlzLmRldmljZSEuYXJlYV9pZCA/IHRoaXMuZGV2aWNlIS5hcmVhX2lkIDogdW5kZWZpbmVkLFxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeShcbiAgICAgICAgdGhpcy5vcHAsXG4gICAgICAgIHRoaXMuZGV2aWNlIS5kZXZpY2VfcmVnX2lkLFxuICAgICAgICB2YWx1ZXNcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZGV2aWNlIS51c2VyX2dpdmVuX25hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3Blbk1vcmVJbmZvKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwib3BwLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHkuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2VsZWN0ZWRBcmVhQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZGV2aWNlIHx8ICF0aGlzLl9hcmVhcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9IGV2ZW50IS50YXJnZXQhLnNlbGVjdGVkO1xuICAgIGNvbnN0IGFyZWEgPSB0aGlzLl9hcmVhc1t0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCAtIDFdOyAvLyBhY2NvdW50IGZvciBObyBBcmVhXG4gICAgaWYgKFxuICAgICAgKCFhcmVhICYmICF0aGlzLmRldmljZS5hcmVhX2lkKSB8fFxuICAgICAgKGFyZWEgJiYgYXJlYS5hcmVhX2lkID09PSB0aGlzLmRldmljZS5hcmVhX2lkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZWFJZCA9IGFyZWEgPyBhcmVhLmFyZWFfaWQgOiB1bmRlZmluZWQ7XG4gICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSh0aGlzLm9wcCEsIHRoaXMuZGV2aWNlLmRldmljZV9yZWdfaWQsIHtcbiAgICAgIGFyZWFfaWQ6IG5ld0FyZWFJZCxcbiAgICAgIG5hbWVfYnlfdXNlcjogdGhpcy5kZXZpY2UhLnVzZXJfZ2l2ZW5fbmFtZSxcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZSEuYXJlYV9pZCA9IG5ld0FyZWFJZDtcbiAgfVxuXG4gIHByaXZhdGUgX29uQWRkRGV2aWNlc0NsaWNrKCkge1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy96aGEvYWRkL1wiICsgdGhpcy5kZXZpY2UhLmllZWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9EZXZjb25WaWV3KCk6IHZvaWQge1xuICAgIGFkZEVudGl0aWVzVG9EZXZjb25WaWV3KFxuICAgICAgdGhpcyxcbiAgICAgIHRoaXMub3BwLFxuICAgICAgdGhpcy5kZXZpY2UhLmVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiBlbnRpdHkuZW50aXR5X2lkKVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0KDpub3QoW25hcnJvd10pKSAuZGV2aWNlLWVudGl0aWVzIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMjVweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgb3AtY2FyZCB7XG4gICAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGV2aWNlIHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UgLm5hbWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UgLm1hbnVmIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dHJhLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAubWFudWYsXG4gICAgICAgIC56aGEtaW5mbyxcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICAgIC5lbnRpdHktaWQge1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGRsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkbCBkdCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGwgZGQge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRhYmxlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubm9kZS1waWNrZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWRldmljZS1jYXJkXCI6IFpIQURldmljZUNhcmQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZywgZmV0Y2hDb25maWcsIHNhdmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7IHNob3dTZWxlY3RWaWV3RGlhbG9nIH0gZnJvbSBcIi4vc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2dcIjtcbmltcG9ydCB7IHNob3dTdWdnZXN0Q2FyZERpYWxvZyB9IGZyb20gXCIuL2NhcmQtZWRpdG9yL3Nob3ctc3VnZ2VzdC1jYXJkLWRpYWxvZ1wiO1xuXG5leHBvcnQgY29uc3QgYWRkRW50aXRpZXNUb0RldmNvblZpZXcgPSBhc3luYyAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBzdHJpbmdbXSxcbiAgZGV2Y29uQ29uZmlnPzogRGV2Y29uQ29uZmlnLFxuICBzYXZlQ29uZmlnRnVuYz86IChuZXdDb25maWc6IERldmNvbkNvbmZpZykgPT4gdm9pZFxuKSA9PiB7XG4gIGlmICgob3BwIS5wYW5lbHMuZGV2Y29uPy5jb25maWcgYXMgYW55KT8ubW9kZSA9PT0gXCJ5YW1sXCIpIHtcbiAgICBzaG93U3VnZ2VzdENhcmREaWFsb2coZWxlbWVudCwge1xuICAgICAgZW50aXRpZXMsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghZGV2Y29uQ29uZmlnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGRldmNvbkNvbmZpZyA9IGF3YWl0IGZldGNoQ29uZmlnKG9wcC5jb25uZWN0aW9uLCBmYWxzZSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBhbGVydChcbiAgICAgICAgb3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5hZGRfZW50aXRpZXMuZ2VuZXJhdGVkX3Vuc3VwcG9ydGVkXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKCFkZXZjb25Db25maWcudmlld3MubGVuZ3RoKSB7XG4gICAgYWxlcnQoXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgRGV2Y29uIHZpZXdzLCBmaXJzdCBjcmVhdGUgYSB2aWV3IGluIERldmNvbi5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghc2F2ZUNvbmZpZ0Z1bmMpIHtcbiAgICBzYXZlQ29uZmlnRnVuYyA9IGFzeW5jIChuZXdDb25maWc6IERldmNvbkNvbmZpZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2F2ZUNvbmZpZyhvcHAhLCBuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIG9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmFkZF9lbnRpdGllcy5zYXZpbmdfZmFpbGVkXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBpZiAoZGV2Y29uQ29uZmlnLnZpZXdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHNob3dTdWdnZXN0Q2FyZERpYWxvZyhlbGVtZW50LCB7XG4gICAgICBkZXZjb25Db25maWc6IGRldmNvbkNvbmZpZyEsXG4gICAgICBzYXZlQ29uZmlnOiBzYXZlQ29uZmlnRnVuYyxcbiAgICAgIHBhdGg6IFswXSxcbiAgICAgIGVudGl0aWVzLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBzaG93U2VsZWN0Vmlld0RpYWxvZyhlbGVtZW50LCB7XG4gICAgZGV2Y29uQ29uZmlnLFxuICAgIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldykgPT4ge1xuICAgICAgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nKGVsZW1lbnQsIHtcbiAgICAgICAgZGV2Y29uQ29uZmlnOiBkZXZjb25Db25maWchLFxuICAgICAgICBzYXZlQ29uZmlnOiBzYXZlQ29uZmlnRnVuYyxcbiAgICAgICAgcGF0aDogW3ZpZXddLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZywgRGV2Y29uQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zIHtcbiAgZGV2Y29uQ29uZmlnPzogRGV2Y29uQ29uZmlnO1xuICBzYXZlQ29uZmlnPzogKGNvbmZpZzogRGV2Y29uQ29uZmlnKSA9PiB2b2lkO1xuICBwYXRoPzogW251bWJlcl07XG4gIGVudGl0aWVzOiBzdHJpbmdbXTsgLy8gV2UgY2FuIHBhc3MgZW50aXR5IGlkJ3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb25maWcgd2hlbiBhIGNhcmQgaXMgcGlja2VkXG4gIGNhcmRDb25maWc/OiBEZXZjb25DYXJkQ29uZmlnW107IC8vIFdlIGNhbiBwYXNzIGEgc3VnZ2VzdGVkIGNvbmZpZ1xufVxuXG5jb25zdCBpbXBvcnRzdWdnZXN0Q2FyZERpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCIgKi8gXCIuL2h1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dTdWdnZXN0Q2FyZERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zOiBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmRcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGltcG9ydHN1Z2dlc3RDYXJkRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3VnZ2VzdENhcmREaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFZpZXdEaWFsb2dQYXJhbXMge1xuICBkZXZjb25Db25maWc6IERldmNvbkNvbmZpZztcbiAgdmlld1NlbGVjdGVkQ2FsbGJhY2s6ICh2aWV3OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBzaG93U2VsZWN0Vmlld0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHNlbGVjdFZpZXdEaWFsb2dQYXJhbXM6IFNlbGVjdFZpZXdEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiICovIFwiLi9odWktZGlhbG9nLXNlbGVjdC12aWV3XCJcbiAgICAgICksXG4gICAgZGlhbG9nUGFyYW1zOiBzZWxlY3RWaWV3RGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpGQTtBQUNBO0FBa0ZBOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoR0E7QUFDQTtBQWlHQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdHQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQURBO0FBSUE7QUFLQTs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUF3QkE7QUFLQTtBQU1BO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUlBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUlBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ3RQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSxxMUJBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUlBO0FBSUE7QUFLQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTs7QUFFQTs7O0FBTEE7Ozs7QUFrQkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBR0E7QUFFQTtBQUdBO0FBRUE7QUFHQTtBQUdBOztBQUdBOztBQUVBO0FBTEE7Ozs7O0FBYUE7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBOzs7QUFJQTs7O0FBR0E7OztBQVBBOztBQVZBOztBQTJCQTs7QUFHQTtBQUNBOzs7QUFKQTtBQWFBOzs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQU9BOzs7OztBQU9BO0FBQ0E7OztBQUdBOzs7QUFLQTtBQUVBO0FBRkE7Ozs7QUE5QkE7QUEwQ0E7O0FBR0E7QUFDQTs7QUFJQTs7QUFHQTs7QUFIQTtBQUNBOztBQVVBOzs7QUFHQTtBQUdBOztBQUVBOztBQUlBOztBQUdBOztBQUhBO0FBU0E7QUFHQTtBQUNBOztBQUlBOztBQUdBOzs7OztBQUhBO0FBUkE7O0FBeENBOzs7QUExSUE7QUE2TUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFLQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0ZBOzs7QUE3YkE7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBVEE7QUFXQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQSxzeUVBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUlBO0FBQ0E7QUFDQSwwZEFFQTtBQUVBO0FBTkE7QUFRQTs7OztBIiwic291cmNlUm9vdCI6IiJ9