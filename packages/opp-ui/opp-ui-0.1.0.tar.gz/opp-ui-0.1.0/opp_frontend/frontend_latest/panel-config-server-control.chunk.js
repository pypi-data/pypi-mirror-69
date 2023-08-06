(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-server-control"],{

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

/***/ "./src/panels/config/server_control/op-config-section-server-control.js":
/*!******************************************************************************!*\
  !*** ./src/panels/config/server_control/op-config-section-server-control.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_buttons_op_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/op-call-service-button */ "./src/components/buttons/op-call-service-button.js");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");










/*
 * @appliesMixin LocalizeMixin
 */

class OpConfigSectionServerControl extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex op-style">
        .validate-container {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 140px;
        }

        .validate-result {
          color: var(--google-green-500);
          font-weight: 500;
          margin-bottom: 1em;
        }

        .config-invalid {
          margin: 1em 0;
        }

        .config-invalid .text {
          color: var(--google-red-500);
          font-weight: 500;
        }

        .config-invalid mwc-button {
          float: right;
        }

        .validate-log {
          white-space: pre-wrap;
          direction: ltr;
        }
      </style>
      <op-config-section is-wide="[[isWide]]">
        <span slot="header"
          >[[localize('ui.panel.config.server_control.caption')]]</span
        >
        <span slot="introduction"
          >[[localize('ui.panel.config.server_control.description')]]</span
        >

        <template is="dom-if" if="[[showAdvanced]]">
          <op-card
            header="[[localize('ui.panel.config.server_control.section.validation.heading')]]"
          >
            <div class="card-content">
              [[localize('ui.panel.config.server_control.section.validation.introduction')]]
              <template is="dom-if" if="[[!validateLog]]">
                <div class="validate-container">
                  <template is="dom-if" if="[[!validating]]">
                    <template is="dom-if" if="[[isValid]]">
                      <div class="validate-result" id="result">
                        [[localize('ui.panel.config.server_control.section.validation.valid')]]
                      </div>
                    </template>
                    <mwc-button raised="" on-click="validateConfig">
                      [[localize('ui.panel.config.server_control.section.validation.check_config')]]
                    </mwc-button>
                  </template>
                  <template is="dom-if" if="[[validating]]">
                    <paper-spinner active=""></paper-spinner>
                  </template>
                </div>
              </template>
              <template is="dom-if" if="[[validateLog]]">
                <div class="config-invalid">
                  <span class="text">
                    [[localize('ui.panel.config.server_control.section.validation.invalid')]]
                  </span>
                  <mwc-button raised="" on-click="validateConfig">
                    [[localize('ui.panel.config.server_control.section.validation.check_config')]]
                  </mwc-button>
                </div>
                <div id="configLog" class="validate-log">[[validateLog]]</div>
              </template>
            </div>
          </op-card>

          <op-card
            header="[[localize('ui.panel.config.server_control.section.reloading.heading')]]"
          >
            <div class="card-content">
              [[localize('ui.panel.config.server_control.section.reloading.introduction')]]
            </div>
            <div class="card-actions">
              <op-call-service-button
                opp="[[opp]]"
                domain="openpeerpower"
                service="reload_core_config"
                >[[localize('ui.panel.config.server_control.section.reloading.core')]]
              </op-call-service-button>
            </div>
            <template is="dom-if" if="[[groupLoaded(opp)]]">
              <div class="card-actions">
                <op-call-service-button
                  opp="[[opp]]"
                  domain="group"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.group')]]
                </op-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[automationLoaded(opp)]]">
              <div class="card-actions">
                <op-call-service-button
                  opp="[[opp]]"
                  domain="automation"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.automation')]]
                </op-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[scriptLoaded(opp)]]">
              <div class="card-actions">
                <op-call-service-button
                  opp="[[opp]]"
                  domain="script"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.script')]]
                </op-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[sceneLoaded(opp)]]">
              <div class="card-actions">
                <op-call-service-button
                  opp="[[opp]]"
                  domain="scene"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.scene')]]
                </op-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[personLoaded(opp)]]">
              <div class="card-actions">
                <op-call-service-button
                  opp="[[opp]]"
                  domain="person"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.person')]]
                </op-call-service-button>
              </div>
            </template>
            <div class="card-actions">
              <op-call-service-button
                opp="[[opp]]"
                domain="zone"
                service="reload"
                >[[localize('ui.panel.config.server_control.section.reloading.zone')]]
              </op-call-service-button>
            </div>
          </op-card>
        </template>
        <op-card
          header="[[localize('ui.panel.config.server_control.section.server_management.heading')]]"
        >
          <div class="card-content">
            [[localize('ui.panel.config.server_control.section.server_management.introduction')]]
          </div>
          <div class="card-actions warning">
            <op-call-service-button
              class="warning"
              opp="[[opp]]"
              domain="openpeerpower"
              service="restart"
              confirmation="[[localize('ui.panel.config.server_control.section.server_management.confirm_restart')]]"
              >[[localize('ui.panel.config.server_control.section.server_management.restart')]]
            </op-call-service-button>
            <op-call-service-button
              class="warning"
              opp="[[opp]]"
              domain="openpeerpower"
              service="stop"
              confirmation="[[localize('ui.panel.config.server_control.section.server_management.confirm_stop')]]"
              >[[localize('ui.panel.config.server_control.section.server_management.stop')]]
            </op-call-service-button>
          </div>
        </op-card>
      </op-config-section>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      isWide: {
        type: Boolean,
        value: false
      },
      validating: {
        type: Boolean,
        value: false
      },
      isValid: {
        type: Boolean,
        value: null
      },
      validateLog: {
        type: String,
        value: ""
      },
      showAdvanced: Boolean
    };
  }

  groupLoaded(opp) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["isComponentLoaded"])(opp, "group");
  }

  automationLoaded(opp) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["isComponentLoaded"])(opp, "automation");
  }

  scriptLoaded(opp) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["isComponentLoaded"])(opp, "script");
  }

  sceneLoaded(opp) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["isComponentLoaded"])(opp, "scene");
  }

  personLoaded(opp) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["isComponentLoaded"])(opp, "person");
  }

  validateConfig() {
    this.validating = true;
    this.validateLog = "";
    this.isValid = null;
    this.opp.callApi("POST", "config/core/check_config").then(result => {
      this.validating = false;
      this.isValid = result.result === "valid";

      if (!this.isValid) {
        this.validateLog = result.errors;
      }
    });
  }

}

customElements.define("op-config-section-server-control", OpConfigSectionServerControl);

/***/ }),

/***/ "./src/panels/config/server_control/op-config-server-control.js":
/*!**********************************************************************!*\
  !*** ./src/panels/config/server_control/op-config-server-control.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _op_config_section_server_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./op-config-section-server-control */ "./src/panels/config/server_control/op-config-section-server-control.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");










/*
 * @appliesMixin LocalizeMixin
 */

class OpConfigServerControl extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex op-style">
        .content {
          padding-bottom: 32px;
        }

        .border {
          margin: 32px auto 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          max-width: 1040px;
        }

        .narrow .border {
          max-width: 640px;
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
          <op-config-section-server-control
            is-wide="[[isWide]]"
            show-advanced="[[showAdvanced]]"
            opp="[[opp]]"
          ></op-config-section-server-control>
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
      showAdvanced: Boolean
    };
  }

  _computeTabs() {
    return _op_panel_config__WEBPACK_IMPORTED_MODULE_9__["configSections"].general;
  }

  computeClasses(isWide) {
    return isWide ? "content" : "content narrow";
  }

}

customElements.define("op-config-server-control", OpConfigServerControl);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNlcnZlci1jb250cm9sLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9vcC1jYWxsLXNlcnZpY2UtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvb3AtcHJvZ3Jlc3MtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2VydmVyX2NvbnRyb2wvb3AtY29uZmlnLXNlY3Rpb24tc2VydmVyLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2VydmVyX2NvbnRyb2wvb3AtY29uZmlnLXNlcnZlci1jb250cm9sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vb3AtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgT3BDYWxsU2VydmljZUJ1dHRvbiBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3AtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgIGlkPVwicHJvZ3Jlc3NcIlxuICAgICAgICBwcm9ncmVzcz1cIltbcHJvZ3Jlc3NdXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgPjxzbG90Pjwvc2xvdFxuICAgICAgPjwvb3AtcHJvZ3Jlc3MtYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjYWxsU2VydmljZSgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMub3BwXG4gICAgICAuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZSwgdGhpcy5zZXJ2aWNlRGF0YSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uU3VjY2VzcygpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvbkVycm9yKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsLmZpcmUoXCJvcHAtc2VydmljZS1jYWxsZWRcIiwgZXZlbnREYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYnV0dG9uVGFwcGVkKCkge1xuICAgIGlmICh0aGlzLmNvbmZpcm1hdGlvbikge1xuICAgICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuY29uZmlybWF0aW9uLFxuICAgICAgICBjb25maXJtOiAoKSA9PiB0aGlzLmNhbGxTZXJ2aWNlKCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWxsU2VydmljZSgpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1jYWxsLXNlcnZpY2UtYnV0dG9uXCIsIE9wQ2FsbFNlcnZpY2VCdXR0b24pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgT3BQcm9ncmVzc0J1dHRvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIG13Yy1idXR0b24ge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1ncmVlbi01MDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3IgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgaWQ9XCJidXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlRGlzYWJsZWQoZGlzYWJsZWQsIHByb2dyZXNzKV1dXCJcbiAgICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Byb2dyZXNzXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj48cGFwZXItc3Bpbm5lciBhY3RpdmU9XCJcIj48L3BhcGVyLXNwaW5uZXI+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcHJvZ3Jlc3MtYnV0dG9uXCIsIE9wUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgZGlzbWlzc1RleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xuICBjYW5jZWw/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU/OiBzdHJpbmc7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUGFyYW1zXG4gIGV4dGVuZHMgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zLFxuICAgIFByb21wdERpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xuICBjb25maXJtYXRpb24/OiBib29sZWFuO1xuICBwcm9tcHQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEdlbmVyaWNEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maXJtYXRpb25cIiAqLyBcIi4vZGlhbG9nLWJveFwiKTtcblxuY29uc3Qgc2hvd0RpYWxvZ0hlbHBlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogRGlhbG9nUGFyYW1zLFxuICBleHRyYT86IHtcbiAgICBjb25maXJtYXRpb24/OiBEaWFsb2dQYXJhbXNbXCJjb25maXJtYXRpb25cIl07XG4gICAgcHJvbXB0PzogRGlhbG9nUGFyYW1zW1wicHJvbXB0XCJdO1xuICB9XG4pID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ0NhbmNlbCA9IGRpYWxvZ1BhcmFtcy5jYW5jZWw7XG4gICAgY29uc3Qgb3JpZ0NvbmZpcm0gPSBkaWFsb2dQYXJhbXMuY29uZmlybTtcblxuICAgIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYm94XCIsXG4gICAgICBkaWFsb2dJbXBvcnQ6IGxvYWRHZW5lcmljRGlhbG9nLFxuICAgICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG51bGwgOiBmYWxzZSk7XG4gICAgICAgICAgaWYgKG9yaWdDYW5jZWwpIHtcbiAgICAgICAgICAgIG9yaWdDYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IChvdXQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBvdXQgOiB0cnVlKTtcbiAgICAgICAgICBpZiAob3JpZ0NvbmZpcm0pIHtcbiAgICAgICAgICAgIG9yaWdDb25maXJtKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93QWxlcnREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEFsZXJ0RGlhbG9nUGFyYW1zXG4pID0+IHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maXJtYXRpb25EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBjb25maXJtYXRpb246IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBib29sZWFuXG4gID47XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvbXB0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBQcm9tcHREaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgcHJvbXB0OiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgbnVsbCB8IHN0cmluZ1xuICA+O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBvcHAgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHA6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShvcHAubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL29wLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuLi9vcC1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBPcENvbmZpZ1NlY3Rpb25TZXJ2ZXJDb250cm9sIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggb3Atc3R5bGVcIj5cbiAgICAgICAgLnZhbGlkYXRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsaWRhdGUtcmVzdWx0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQge1xuICAgICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25maWctaW52YWxpZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsaWRhdGUtbG9nIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8b3AtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5jYXB0aW9uJyldXTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuZGVzY3JpcHRpb24nKV1dPC9zcGFuXG4gICAgICAgID5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0FkdmFuY2VkXV1cIj5cbiAgICAgICAgICA8b3AtY2FyZFxuICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi5oZWFkaW5nJyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi52YWxpZGF0aW9uLmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyF2YWxpZGF0ZUxvZ11dXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbGlkYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyF2YWxpZGF0aW5nXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2lzVmFsaWRdXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWxpZGF0ZS1yZXN1bHRcIiBpZD1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi52YWxpZCcpXV1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkPVwiXCIgb24tY2xpY2s9XCJ2YWxpZGF0ZUNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24uY2hlY2tfY29uZmlnJyldXVxuICAgICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3ZhbGlkYXRpbmddXVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU9XCJcIj48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbdmFsaWRhdGVMb2ddXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWctaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24uaW52YWxpZCcpXV1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cIlwiIG9uLWNsaWNrPVwidmFsaWRhdGVDb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi5jaGVja19jb25maWcnKV1dXG4gICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbmZpZ0xvZ1wiIGNsYXNzPVwidmFsaWRhdGUtbG9nXCI+W1t2YWxpZGF0ZUxvZ11dPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L29wLWNhcmQ+XG5cbiAgICAgICAgICA8b3AtY2FyZFxuICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLmhlYWRpbmcnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPG9wLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJvcGVucGVlcnBvd2VyXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkX2NvcmVfY29uZmlnXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLmNvcmUnKV1dXG4gICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2dyb3VwTG9hZGVkKG9wcCldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG9wLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlbG9hZFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLmdyb3VwJyldXVxuICAgICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2F1dG9tYXRpb25Mb2FkZWQob3BwKV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8b3AtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJhdXRvbWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWxvYWRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5hdXRvbWF0aW9uJyldXVxuICAgICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3NjcmlwdExvYWRlZChvcHApXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxvcC1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInNjcmlwdFwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcuc2NyaXB0JyldXVxuICAgICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3NjZW5lTG9hZGVkKG9wcCldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG9wLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwic2NlbmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlbG9hZFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLnNjZW5lJyldXVxuICAgICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3BlcnNvbkxvYWRlZChvcHApXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxvcC1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInBlcnNvblwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcucGVyc29uJyldXVxuICAgICAgICAgICAgICAgIDwvb3AtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8b3AtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInpvbmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWxvYWRcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcuem9uZScpXV1cbiAgICAgICAgICAgICAgPC9vcC1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8b3AtY2FyZFxuICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LmhlYWRpbmcnKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIHdhcm5pbmdcIj5cbiAgICAgICAgICAgIDxvcC1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgICBkb21haW49XCJvcGVucGVlcnBvd2VyXCJcbiAgICAgICAgICAgICAgc2VydmljZT1cInJlc3RhcnRcIlxuICAgICAgICAgICAgICBjb25maXJtYXRpb249XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5zZXJ2ZXJfbWFuYWdlbWVudC5jb25maXJtX3Jlc3RhcnQnKV1dXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LnJlc3RhcnQnKV1dXG4gICAgICAgICAgICA8L29wLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8b3AtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgICAgZG9tYWluPVwib3BlbnBlZXJwb3dlclwiXG4gICAgICAgICAgICAgIHNlcnZpY2U9XCJzdG9wXCJcbiAgICAgICAgICAgICAgY29uZmlybWF0aW9uPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24uc2VydmVyX21hbmFnZW1lbnQuY29uZmlybV9zdG9wJyldXVwiXG4gICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5zZXJ2ZXJfbWFuYWdlbWVudC5zdG9wJyldXVxuICAgICAgICAgICAgPC9vcC1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L29wLWNhcmQ+XG4gICAgICA8L29wLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgdmFsaWRhdGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBpc1ZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgdmFsaWRhdGVMb2c6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgZ3JvdXBMb2FkZWQob3BwKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKG9wcCwgXCJncm91cFwiKTtcbiAgfVxuXG4gIGF1dG9tYXRpb25Mb2FkZWQob3BwKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKG9wcCwgXCJhdXRvbWF0aW9uXCIpO1xuICB9XG5cbiAgc2NyaXB0TG9hZGVkKG9wcCkge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChvcHAsIFwic2NyaXB0XCIpO1xuICB9XG5cbiAgc2NlbmVMb2FkZWQob3BwKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKG9wcCwgXCJzY2VuZVwiKTtcbiAgfVxuXG4gIHBlcnNvbkxvYWRlZChvcHApIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQob3BwLCBcInBlcnNvblwiKTtcbiAgfVxuXG4gIHZhbGlkYXRlQ29uZmlnKCkge1xuICAgIHRoaXMudmFsaWRhdGluZyA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0ZUxvZyA9IFwiXCI7XG4gICAgdGhpcy5pc1ZhbGlkID0gbnVsbDtcblxuICAgIHRoaXMub3BwLmNhbGxBcGkoXCJQT1NUXCIsIFwiY29uZmlnL2NvcmUvY2hlY2tfY29uZmlnXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmlzVmFsaWQgPSByZXN1bHQucmVzdWx0ID09PSBcInZhbGlkXCI7XG5cbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVMb2cgPSByZXN1bHQuZXJyb3JzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJvcC1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbFwiLFxuICBPcENvbmZpZ1NlY3Rpb25TZXJ2ZXJDb250cm9sXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL29wLWNvbmZpZy1zZWN0aW9uLXNlcnZlci1jb250cm9sXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL29wLXBhbmVsLWNvbmZpZ1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE9wQ29uZmlnU2VydmVyQ29udHJvbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IG9wLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3JkZXIge1xuICAgICAgICAgIG1hcmdpbjogMzJweCBhdXRvIDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93IC5ib3JkZXIge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxvcHAtdGFicy1zdWJwYWdlXG4gICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBiYWNrLXBhdGg9XCIvY29uZmlnXCJcbiAgICAgICAgdGFicz1cIltbX2NvbXB1dGVUYWJzKCldXVwiXG4gICAgICAgIHNob3ctYWR2YW5jZWQ9XCJbW3Nob3dBZHZhbmNlZF1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxvcC1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbFxuICAgICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgICAgc2hvdy1hZHZhbmNlZD1cIltbc2hvd0FkdmFuY2VkXV1cIlxuICAgICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgPjwvb3AtY29uZmlnLXNlY3Rpb24tc2VydmVyLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcHAtdGFicy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgcm91dGU6IE9iamVjdCxcbiAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVUYWJzKCkge1xuICAgIHJldHVybiBjb25maWdTZWN0aW9ucy5nZW5lcmFsO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgcmV0dXJuIGlzV2lkZSA/IFwiY29udGVudFwiIDogXCJjb250ZW50IG5hcnJvd1wiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWNvbmZpZy1zZXJ2ZXItY29udHJvbFwiLCBPcENvbmZpZ1NlcnZlckNvbnRyb2wpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBdkJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakZBO0FBQ0E7QUFrRkE7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhHQTtBQUNBO0FBaUdBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQ0EscTFCQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUhBO0FBb0JBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFBQTtBQUlBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0UEE7QUFDQTtBQXVQQTs7Ozs7Ozs7Ozs7O0FDelFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkRBO0FBQ0E7QUF3REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==