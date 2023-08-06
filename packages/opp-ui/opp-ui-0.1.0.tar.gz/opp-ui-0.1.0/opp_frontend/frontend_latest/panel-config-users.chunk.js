(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-users"],{

/***/ "./node_modules/lit-html/directives/until.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/until.js ***!
  \***************************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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



const _state = new WeakMap(); // Effectively infinity, but a SMI.


const _infinity = 0x7fffffff;
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */

const until = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((...args) => part => {
  let state = _state.get(part);

  if (state === undefined) {
    state = {
      lastRenderedIndex: _infinity,
      values: []
    };

    _state.set(part, state);
  }

  const previousValues = state.values;
  let previousLength = previousValues.length;
  state.values = args;

  for (let i = 0; i < args.length; i++) {
    // If we've rendered a higher-priority value already, stop.
    if (i > state.lastRenderedIndex) {
      break;
    }

    const value = args[i]; // Render non-Promise values immediately

    if (Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) || typeof value.then !== 'function') {
      part.setValue(value);
      state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
      // synchronous value, we can stop processsing now.

      break;
    } // If this is a Promise we've already handled, skip it.


    if (i < previousLength && value === previousValues[i]) {
      continue;
    } // We have a Promise that we haven't seen before, so priorities may have
    // changed. Forget what we rendered before.


    state.lastRenderedIndex = _infinity;
    previousLength = 0;
    Promise.resolve(value).then(resolvedValue => {
      const index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
      // the value, so don't render it. Then, only render if the value is
      // higher-priority than what's already been rendered.

      if (index > -1 && index < state.lastRenderedIndex) {
        state.lastRenderedIndex = index;
        part.setValue(resolvedValue);
        part.commit();
      }
    });
  }
});

/***/ }),

/***/ "./src/components/op-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/op-icon-next.ts ***!
  \****************************************/
/*! exports provided: OpIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIconNext", function() { return OpIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./op-icon */ "./src/components/op-icon.ts");
 // Not duplicate, this is for typing.
// tslint:disable-next-line


class OpIconNext extends _op_icon__WEBPACK_IMPORTED_MODULE_1__["OpIcon"] {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "opp:chevron-right" : "opp:chevron-left";
    }, 100);
  }

}
customElements.define("op-icon-next", OpIconNext);

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

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
const SYSTEM_GROUP_ID_ADMIN = "system-admin";
const SYSTEM_GROUP_ID_USER = "system-users";
const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
const fetchUsers = async opp => opp.callWS({
  type: "config/auth/list"
});
const createUser = async (opp, name) => opp.callWS({
  type: "config/auth/create",
  name
});
const updateUser = async (opp, userId, params) => opp.callWS(Object.assign({}, params, {
  type: "config/auth/update",
  user_id: userId
}));
const deleteUser = async (opp, userId) => opp.callWS({
  type: "config/auth/delete",
  user_id: userId
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

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");


/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  navigate(...args) {
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
  }

}));

/***/ }),

/***/ "./src/panels/config/users/op-config-user-picker.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/users/op-config-user-picker.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _components_op_icon_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-icon-next */ "./src/components/op-icon-next.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");













let registeredDialog = false;
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 */

class OpVserPicker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
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
        op-fab[rtl] {
          right: auto;
          left: 16px;
        }
        op-fab[narrow] {
          bottom: 84px;
        }
        op-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        op-card {
          max-width: 600px;
          margin: 16px auto;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      </style>

      <opp-tabs-subpage
        opp="[[opp]]"
        narrow="[[narrow]]"
        route="[[route]]"
        back-path="/config"
        tabs="[[_computeTabs()]]"
      >
        <op-card>
          <template is="dom-repeat" items="[[users]]" as="user">
            <a href="[[_computeUrl(user)]]">
              <paper-item>
                <paper-item-body two-line>
                  <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
                  <div secondary="">
                    [[_computeGroup(localize, user)]]
                    <template is="dom-if" if="[[user.system_generated]]">
                      -
                      [[localize('ui.panel.config.users.picker.system_generated')]]
                    </template>
                  </div>
                </paper-item-body>
                <op-icon-next></op-icon-next>
              </paper-item>
            </a>
          </template>
        </op-card>

        <op-fab
          is-wide$="[[isWide]]"
          narrow$="[[narrow]]"
          icon="opp:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></op-fab>
      </opp-tabs-subpage>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      users: Array,
      isWide: Boolean,
      narrow: Boolean,
      route: Object,
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(opp)"
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-add-user",
        dialogTag: "op-dialog-add-user",
        dialogImport: () => Promise.all(/*! import() | op-dialog-add-user */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~op-dialog-add-user"), __webpack_require__.e("op-dialog-add-user")]).then(__webpack_require__.bind(null, /*! ./op-dialog-add-user */ "./src/panels/config/users/op-dialog-add-user.js"))
      });
    }
  }

  _withDefault(value, defaultValue) {
    return value || defaultValue;
  }

  _computeUrl(user) {
    return `/config/users/${user.id}`;
  }

  _computeGroup(localize, user) {
    return localize(`groups.${user.group_ids[0]}`);
  }

  _computeRTL(opp) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(opp);
  }

  _computeTabs() {
    return _op_panel_config__WEBPACK_IMPORTED_MODULE_12__["configSections"].persons;
  }

  _addUser() {
    this.fire("show-add-user", {
      opp: this.opp,
      dialogClosedCallback: async ({
        userId
      }) => {
        this.fire("reload-users");
        if (userId) this.navigate(`/config/users/${userId}`);
      }
    });
  }

}

customElements.define("op-config-user-picker", OpVserPicker);

/***/ }),

/***/ "./src/panels/config/users/op-config-users.js":
/*!****************************************************!*\
  !*** ./src/panels/config/users/op-config-users.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _op_config_user_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./op-config-user-picker */ "./src/panels/config/users/op-config-user-picker.js");
/* harmony import */ var _op_user_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./op-user-editor */ "./src/panels/config/users/op-user-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");










/*
 * @appliesMixin NavigateMixin
 */

class OpConfigUsers extends Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <app-route
        route="[[route]]"
        pattern="/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <op-config-user-picker
          opp="[[opp]]"
          users="[[_users]]"
          is-wide="[[isWide]]"
          narrow="[[narrow]]"
          route="[[route]]"
        ></op-config-user-picker>
      </template>
      <template
        is="dom-if"
        if='[[!_equals(_routeData.user, "picker")]]'
        restamp
      >
        <op-user-editor
          opp="[[opp]]"
          user="[[_computeUser(_users, _routeData.user)]]"
          narrow="[[narrow]]"
          route="[[route]]"
        ></op-user-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      isWide: Boolean,
      narrow: Boolean,
      route: {
        type: Object,
        observer: "_checkRoute"
      },
      _routeData: Object,
      _user: {
        type: Object,
        value: null
      },
      _users: {
        type: Array,
        value: null
      }
    };
  }

  ready() {
    super.ready();

    this._loadData();

    this.addEventListener("reload-users", () => this._loadData());
  }

  _handlePickUser(ev) {
    this._user = ev.detail.user;
  }

  _checkRoute(route) {
    // prevent list getting under toolbar
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "iron-resize");
    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(0), () => {
      if (route.path === "") {
        this.navigate(`${route.prefix}/picker`, true);
      }
    });
  }

  _computeUser(users, userId) {
    return users && users.filter(u => u.id === userId)[0];
  }

  _equals(a, b) {
    return a === b;
  }

  async _loadData() {
    this._users = await Object(_data_user__WEBPACK_IMPORTED_MODULE_9__["fetchUsers"])(this.opp);
  }

}

customElements.define("op-config-users", OpConfigUsers);

/***/ }),

/***/ "./src/panels/config/users/op-user-editor.ts":
/*!***************************************************!*\
  !*** ./src/panels/config/users/op-user-editor.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_until__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/until */ "./node_modules/lit-html/directives/until.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
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













const GROUPS = [_data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_USER"], _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_ADMIN"]];

let OpVserEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-user-editor")], function (_initialize, _LitElement) {
  class OpVserEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpVserEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "user",
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
        const opp = this.opp;
        const user = this.user;

        if (!opp || !user) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        .route=${this.route}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_11__["configSections"].persons}
      >
        <op-card .header=${this._name}>
          <table class="card-content">
            <tr>
              <td>${opp.localize("ui.panel.config.users.editor.id")}</td>
              <td>${user.id}</td>
            </tr>
            <tr>
              <td>${opp.localize("ui.panel.config.users.editor.owner")}</td>
              <td>${user.is_owner}</td>
            </tr>
            <tr>
              <td>${opp.localize("ui.panel.config.users.editor.group")}</td>
              <td>
                <select
                  @change=${this._handleGroupChange}
                  .value=${Object(lit_html_directives_until__WEBPACK_IMPORTED_MODULE_1__["until"])(this.updateComplete.then(() => user.group_ids[0]))}
                >
                  ${GROUPS.map(groupId => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <option value=${groupId}>
                        ${opp.localize(`groups.${groupId}`)}
                      </option>
                    `)}
                </select>
              </td>
            </tr>
            ${user.group_ids[0] === _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_USER"] ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <tr>
                    <td colspan="2" class="user-experiment">
                      The users group is a work in progress. The user will be
                      unable to administer the instance via the UI. We're still
                      auditing all management API endpoints to ensure that they
                      correctly limit access to administrators.
                    </td>
                  </tr>
                ` : ""}

            <tr>
              <td>${opp.localize("ui.panel.config.users.editor.active")}</td>
              <td>${user.is_active}</td>
            </tr>
            <tr>
              <td>
                ${opp.localize("ui.panel.config.users.editor.system_generated")}
              </td>
              <td>${user.system_generated}</td>
            </tr>
          </table>

          <div class="card-actions">
            <mwc-button @click=${this._handlePromptRenameUser}>
              ${opp.localize("ui.panel.config.users.editor.rename_user")}
            </mwc-button>
            <mwc-button
              class="warning"
              @click=${this._promptDeleteUser}
              .disabled=${user.system_generated}
            >
              ${opp.localize("ui.panel.config.users.editor.delete_user")}
            </mwc-button>
            ${user.system_generated ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  ${opp.localize("ui.panel.config.users.editor.system_generated_users_not_removable")}
                ` : ""}
          </div>
        </op-card>
      </opp-tabs-subpage>
    `;
      }
    }, {
      kind: "get",
      key: "_name",
      value: function _name() {
        return this.user && (this.user.name || this.opp.localize("ui.panel.config.users.editor.unnamed_user"));
      }
    }, {
      kind: "method",
      key: "_handleRenameUser",
      value: async function _handleRenameUser(newName) {
        if (newName === null || newName === this.user.name) {
          return;
        }

        try {
          await Object(_data_user__WEBPACK_IMPORTED_MODULE_8__["updateUser"])(this.opp, this.user.id, {
            name: newName
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "reload-users");
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showAlertDialog"])(this, {
            text: `${this.opp.localize("ui.panel.config.users.editor.user_rename_failed")} ${err.message}`
          });
        }
      }
    }, {
      kind: "method",
      key: "_handlePromptRenameUser",
      value: async function _handlePromptRenameUser(ev) {
        ev.currentTarget.blur();
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showPromptDialog"])(this, {
          title: this.opp.localize("ui.panel.config.users.editor.enter_new_name"),
          defaultValue: this.user.name,
          inputLabel: this.opp.localize("ui.panel.config.users.add_user.name"),
          confirm: text => this._handleRenameUser(text)
        });
      }
    }, {
      kind: "method",
      key: "_handleGroupChange",
      value: async function _handleGroupChange(ev) {
        const selectEl = ev.currentTarget;
        const newGroup = selectEl.value;

        try {
          await Object(_data_user__WEBPACK_IMPORTED_MODULE_8__["updateUser"])(this.opp, this.user.id, {
            group_ids: [newGroup]
          });
          Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_9__["showSaveSuccessToast"])(this, this.opp);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "reload-users");
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showAlertDialog"])(this, {
            text: `${this.opp.localize("ui.panel.config.users.editor.group_update_failed")} ${err.message}`
          });
          selectEl.value = this.user.group_ids[0];
        }
      }
    }, {
      kind: "method",
      key: "_deleteUser",
      value: async function _deleteUser() {
        try {
          await Object(_data_user__WEBPACK_IMPORTED_MODULE_8__["deleteUser"])(this.opp, this.user.id);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showAlertDialog"])(this, {
            text: err.code
          });
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "reload-users");
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])(this, "/config/users");
      }
    }, {
      kind: "method",
      key: "_promptDeleteUser",
      value: async function _promptDeleteUser(_ev) {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showConfirmationDialog"])(this, {
          text: this.opp.localize("ui.panel.config.users.editor.confirm_user_deletion", "name", this._name),
          confirm: () => this._deleteUser()
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_4__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        op-card {
          max-width: 600px;
          margin: 16px auto 16px;
        }
        opp-subpage op-card:first-of-type {
          direction: ltr;
        }
        table {
          width: 100%;
        }
        td {
          vertical-align: top;
        }
        .user-experiment {
          padding: 8px 0;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showSaveSuccessToast = (el, opp) => Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
  message: opp.localize("ui.common.successfully_saved")
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXVzZXJzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3VudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3VzZXJzL29wLWNvbmZpZy11c2VyLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9vcC1jb25maWctdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvdXNlcnMvb3AtdXNlci1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7aXNQcmltaXRpdmV9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5pbnRlcmZhY2UgQXN5bmNTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGUgbGFzdCByZW5kZXJlZCBpbmRleCBvZiBhIGNhbGwgdG8gdW50aWwoKS4gQSB2YWx1ZSBvbmx5IHJlbmRlcnMgaWYgaXRzXG4gICAqIGluZGV4IGlzIGxlc3MgdGhhbiB0aGUgYGxhc3RSZW5kZXJlZEluZGV4YC5cbiAgICovXG4gIGxhc3RSZW5kZXJlZEluZGV4OiBudW1iZXI7XG5cbiAgdmFsdWVzOiB1bmtub3duW107XG59XG5cbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwPFBhcnQsIEFzeW5jU3RhdGU+KCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcblxuLyoqXG4gKiBSZW5kZXJzIG9uZSBvZiBhIHNlcmllcyBvZiB2YWx1ZXMsIGluY2x1ZGluZyBQcm9taXNlcywgdG8gYSBQYXJ0LlxuICpcbiAqIFZhbHVlcyBhcmUgcmVuZGVyZWQgaW4gcHJpb3JpdHkgb3JkZXIsIHdpdGggdGhlIGZpcnN0IGFyZ3VtZW50IGhhdmluZyB0aGVcbiAqIGhpZ2hlc3QgcHJpb3JpdHkgYW5kIHRoZSBsYXN0IGFyZ3VtZW50IGhhdmluZyB0aGUgbG93ZXN0IHByaW9yaXR5LiBJZiBhXG4gKiB2YWx1ZSBpcyBhIFByb21pc2UsIGxvdy1wcmlvcml0eSB2YWx1ZXMgd2lsbCBiZSByZW5kZXJlZCB1bnRpbCBpdCByZXNvbHZlcy5cbiAqXG4gKiBUaGUgcHJpb3JpdHkgb2YgdmFsdWVzIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciBhc3luY1xuICogZGF0YS4gRm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB3aXRoIHBlbmRpbmcgY29udGVudCBjYW4gYmUgdGhlIGZpcnN0LFxuICogaGlnaGVzdC1wcmlvcml0eSwgYXJndW1lbnQsIGFuZCBhIG5vbl9wcm9taXNlIGxvYWRpbmcgaW5kaWNhdG9yIHRlbXBsYXRlIGNhblxuICogYmUgdXNlZCBhcyB0aGUgc2Vjb25kLCBsb3dlci1wcmlvcml0eSwgYXJndW1lbnQuIFRoZSBsb2FkaW5nIGluZGljYXRvciB3aWxsXG4gKiByZW5kZXIgaW1tZWRpYXRlbHksIGFuZCB0aGUgcHJpbWFyeSBjb250ZW50IHdpbGwgcmVuZGVyIHdoZW4gdGhlIFByb21pc2VcbiAqIHJlc29sdmVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IGNvbnRlbnQgPSBmZXRjaCgnLi9jb250ZW50LnR4dCcpLnRoZW4ociA9PiByLnRleHQoKSk7XG4gKiAgICAgaHRtbGAke3VudGlsKGNvbnRlbnQsIGh0bWxgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5gKX1gXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IGRpcmVjdGl2ZSgoLi4uYXJnczogdW5rbm93bltdKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBsZXQgc3RhdGUgPSBfc3RhdGUuZ2V0KHBhcnQpITtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICB2YWx1ZXM6IFtdLFxuICAgIH07XG4gICAgX3N0YXRlLnNldChwYXJ0LCBzdGF0ZSk7XG4gIH1cbiAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gIGxldCBwcmV2aW91c0xlbmd0aCA9IHByZXZpb3VzVmFsdWVzLmxlbmd0aDtcbiAgc3RhdGUudmFsdWVzID0gYXJncztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBJZiB3ZSd2ZSByZW5kZXJlZCBhIGhpZ2hlci1wcmlvcml0eSB2YWx1ZSBhbHJlYWR5LCBzdG9wLlxuICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcblxuICAgIC8vIFJlbmRlciBub24tUHJvbWlzZSB2YWx1ZXMgaW1tZWRpYXRlbHlcbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgIHR5cGVvZiAodmFsdWUgYXMge3RoZW4/OiB1bmtub3dufSkudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc3Npbmcgbm93LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAvLyBjaGFuZ2VkLiBGb3JnZXQgd2hhdCB3ZSByZW5kZXJlZCBiZWZvcmUuXG4gICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgcHJldmlvdXNMZW5ndGggPSAwO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKChyZXNvbHZlZFZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgIC8vIElmIHN0YXRlLnZhbHVlcyBkb2Vzbid0IGNvbnRhaW4gdGhlIHZhbHVlLCB3ZSd2ZSByZS1yZW5kZXJlZCB3aXRob3V0XG4gICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAvLyBoaWdoZXItcHJpb3JpdHkgdGhhbiB3aGF0J3MgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLlxuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGluZGV4O1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgT3BJY29uIH0gZnJvbSBcIi4vb3AtaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgT3BJY29uTmV4dCBleHRlbmRzIE9wSWNvbiB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyBcIm9wcDpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgICA6IFwib3BwOmNoZXZyb24tbGVmdFwiO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb24tbmV4dFwiOiBPcEljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb24tbmV4dFwiLCBPcEljb25OZXh0KTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBPcEljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uXCI6IE9wSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uXCIsIE9wSWNvbik7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX0FETUlOID0gXCJzeXN0ZW0tYWRtaW5cIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfVVNFUiA9IFwic3lzdGVtLXVzZXJzXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX1JFQURfT05MWSA9IFwic3lzdGVtLXJlYWQtb25seVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzX293bmVyOiBib29sZWFuO1xuICBpc19hY3RpdmU6IGJvb2xlYW47XG4gIHN5c3RlbV9nZW5lcmF0ZWQ6IGJvb2xlYW47XG4gIGdyb3VwX2lkczogc3RyaW5nW107XG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsW107XG59XG5cbmludGVyZmFjZSBVcGRhdGVVc2VyUGFyYW1zIHtcbiAgbmFtZT86IFVzZXJbXCJuYW1lXCJdO1xuICBncm91cF9pZHM/OiBVc2VyW1wiZ3JvdXBfaWRzXCJdO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jIChvcHA6IE9wZW5QZWVyUG93ZXIpID0+XG4gIG9wcC5jYWxsV1M8VXNlcltdPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChvcHA6IE9wZW5QZWVyUG93ZXIsIG5hbWU6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgbmFtZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHVzZXJJZDogc3RyaW5nLFxuICBwYXJhbXM6IFVwZGF0ZVVzZXJQYXJhbXNcbikgPT5cbiAgb3BwLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIC4uLnBhcmFtcyxcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL3VwZGF0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKG9wcDogT3BlblBlZXJQb3dlciwgdXNlcklkOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsV1M8dm9pZD4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvZGVsZXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW50ZXJmYWNlIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gb3BwIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb3BwOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUob3BwLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtaWNvbi1uZXh0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtZmFiXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vb3AtcGFuZWwtY29uZmlnXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBPcFZzZXJQaWNrZXIgZXh0ZW5kcyBFdmVudHNNaXhpbihcbiAgTmF2aWdhdGVNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSlcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBvcC1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWJbbmFycm93XSB7XG4gICAgICAgICAgYm90dG9tOiA4NHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxvcHAtdGFicy1zdWJwYWdlXG4gICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBiYWNrLXBhdGg9XCIvY29uZmlnXCJcbiAgICAgICAgdGFicz1cIltbX2NvbXB1dGVUYWJzKCldXVwiXG4gICAgICA+XG4gICAgICAgIDxvcC1jYXJkPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdXNlcnNdXVwiIGFzPVwidXNlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIltbX2NvbXB1dGVVcmwodXNlcildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgPGRpdj5bW193aXRoRGVmYXVsdCh1c2VyLm5hbWUsICdVbm5hbWVkIFVzZXInKV1dPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlR3JvdXAobG9jYWxpemUsIHVzZXIpXV1cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3VzZXIuc3lzdGVtX2dlbmVyYXRlZF1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5waWNrZXIuc3lzdGVtX2dlbmVyYXRlZCcpXV1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxvcC1pY29uLW5leHQ+PC9vcC1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L29wLWNhcmQ+XG5cbiAgICAgICAgPG9wLWZhYlxuICAgICAgICAgIGlzLXdpZGUkPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgbmFycm93JD1cIltbbmFycm93XV1cIlxuICAgICAgICAgIGljb249XCJvcHA6cGx1c1wiXG4gICAgICAgICAgdGl0bGU9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLmFkZF91c2VyJyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJfYWRkVXNlclwiXG4gICAgICAgICAgcnRsJD1cIltbcnRsXV1cIlxuICAgICAgICA+PC9vcC1mYWI+XG4gICAgICA8L29wcC10YWJzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICB1c2VyczogQXJyYXksXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwob3BwKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmZpcmUoXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgICAgICBkaWFsb2dTaG93RXZlbnQ6IFwic2hvdy1hZGQtdXNlclwiLFxuICAgICAgICBkaWFsb2dUYWc6IFwib3AtZGlhbG9nLWFkZC11c2VyXCIsXG4gICAgICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm9wLWRpYWxvZy1hZGQtdXNlclwiICovIFwiLi9vcC1kaWFsb2ctYWRkLXVzZXJcIlxuICAgICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfd2l0aERlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBfY29tcHV0ZVVybCh1c2VyKSB7XG4gICAgcmV0dXJuIGAvY29uZmlnL3VzZXJzLyR7dXNlci5pZH1gO1xuICB9XG5cbiAgX2NvbXB1dGVHcm91cChsb2NhbGl6ZSwgdXNlcikge1xuICAgIHJldHVybiBsb2NhbGl6ZShgZ3JvdXBzLiR7dXNlci5ncm91cF9pZHNbMF19YCk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChvcHApIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChvcHApO1xuICB9XG5cbiAgX2NvbXB1dGVUYWJzKCkge1xuICAgIHJldHVybiBjb25maWdTZWN0aW9ucy5wZXJzb25zO1xuICB9XG5cbiAgX2FkZFVzZXIoKSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1hZGQtdXNlclwiLCB7XG4gICAgICBvcHA6IHRoaXMub3BwLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcInJlbG9hZC11c2Vyc1wiKTtcbiAgICAgICAgaWYgKHVzZXJJZCkgdGhpcy5uYXZpZ2F0ZShgL2NvbmZpZy91c2Vycy8ke3VzZXJJZH1gKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtY29uZmlnLXVzZXItcGlja2VyXCIsIE9wVnNlclBpY2tlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9vcC1jb25maWctdXNlci1waWNrZXJcIjtcbmltcG9ydCBcIi4vb3AtdXNlci1lZGl0b3JcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgT3BDb25maWdVc2VycyBleHRlbmRzIE5hdmlnYXRlTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiLzp1c2VyXCJcbiAgICAgICAgZGF0YT1cInt7X3JvdXRlRGF0YX19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhfcm91dGVEYXRhLnVzZXIsIFwicGlja2VyXCIpXV0nPlxuICAgICAgICA8b3AtY29uZmlnLXVzZXItcGlja2VyXG4gICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgdXNlcnM9XCJbW191c2Vyc11dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICA+PC9vcC1jb25maWctdXNlci1waWNrZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgaWY9J1tbIV9lcXVhbHMoX3JvdXRlRGF0YS51c2VyLCBcInBpY2tlclwiKV1dJ1xuICAgICAgICByZXN0YW1wXG4gICAgICA+XG4gICAgICAgIDxvcC11c2VyLWVkaXRvclxuICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgIHVzZXI9XCJbW19jb21wdXRlVXNlcihfdXNlcnMsIF9yb3V0ZURhdGEudXNlcildXVwiXG4gICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICA+PC9vcC11c2VyLWVkaXRvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICByb3V0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9jaGVja1JvdXRlXCIsXG4gICAgICB9LFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3VzZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBfdXNlcnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInJlbG9hZC11c2Vyc1wiLCAoKSA9PiB0aGlzLl9sb2FkRGF0YSgpKTtcbiAgfVxuXG4gIF9oYW5kbGVQaWNrVXNlcihldikge1xuICAgIHRoaXMuX3VzZXIgPSBldi5kZXRhaWwudXNlcjtcbiAgfVxuXG4gIF9jaGVja1JvdXRlKHJvdXRlKSB7XG4gICAgLy8gcHJldmVudCBsaXN0IGdldHRpbmcgdW5kZXIgdG9vbGJhclxuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuXG4gICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgdGltZU91dC5hZnRlcigwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHJvdXRlLnBhdGggPT09IFwiXCIpIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlKGAke3JvdXRlLnByZWZpeH0vcGlja2VyYCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVVc2VyKHVzZXJzLCB1c2VySWQpIHtcbiAgICByZXR1cm4gdXNlcnMgJiYgdXNlcnMuZmlsdGVyKCh1KSA9PiB1LmlkID09PSB1c2VySWQpWzBdO1xuICB9XG5cbiAgX2VxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICBhc3luYyBfbG9hZERhdGEoKSB7XG4gICAgdGhpcy5fdXNlcnMgPSBhd2FpdCBmZXRjaFVzZXJzKHRoaXMub3BwKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1jb25maWctdXNlcnNcIiwgT3BDb25maWdVc2Vycyk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgdW50aWwgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy91bnRpbFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9vcHAtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgeyBvcFN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHtcbiAgVXNlcixcbiAgZGVsZXRlVXNlcixcbiAgdXBkYXRlVXNlcixcbiAgU1lTVEVNX0dST1VQX0lEX1VTRVIsXG4gIFNZU1RFTV9HUk9VUF9JRF9BRE1JTixcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdXNlclwiO1xuaW1wb3J0IHsgc2hvd1NhdmVTdWNjZXNzVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzXCI7XG5pbXBvcnQge1xuICBzaG93QWxlcnREaWFsb2csXG4gIHNob3dDb25maXJtYXRpb25EaWFsb2csXG4gIHNob3dQcm9tcHREaWFsb2csXG59IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9vcC1wYW5lbC1jb25maWdcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgT1BQRG9tRXZlbnRzIHtcbiAgICBcInJlbG9hZC11c2Vyc1wiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuY29uc3QgR1JPVVBTID0gW1NZU1RFTV9HUk9VUF9JRF9VU0VSLCBTWVNURU1fR1JPVVBfSURfQURNSU5dO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLXVzZXItZWRpdG9yXCIpXG5jbGFzcyBPcFZzZXJFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB1c2VyPzogVXNlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0IG9wcCA9IHRoaXMub3BwO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgaWYgKCFvcHAgfHwgIXVzZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3BwLXRhYnMtc3VicGFnZVxuICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgLnRhYnM9JHtjb25maWdTZWN0aW9ucy5wZXJzb25zfVxuICAgICAgPlxuICAgICAgICA8b3AtY2FyZCAuaGVhZGVyPSR7dGhpcy5fbmFtZX0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke29wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuaWRcIil9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5pZH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPiR7b3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5vd25lclwiKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmlzX293bmVyfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+JHtvcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLmdyb3VwXCIpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlR3JvdXBDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHt1bnRpbChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHVzZXIuZ3JvdXBfaWRzWzBdKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke0dST1VQUy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChncm91cElkKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JHtncm91cElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3BwLmxvY2FsaXplKGBncm91cHMuJHtncm91cElkfWApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICR7dXNlci5ncm91cF9pZHNbMF0gPT09IFNZU1RFTV9HUk9VUF9JRF9VU0VSXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJ1c2VyLWV4cGVyaW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBUaGUgdXNlcnMgZ3JvdXAgaXMgYSB3b3JrIGluIHByb2dyZXNzLiBUaGUgdXNlciB3aWxsIGJlXG4gICAgICAgICAgICAgICAgICAgICAgdW5hYmxlIHRvIGFkbWluaXN0ZXIgdGhlIGluc3RhbmNlIHZpYSB0aGUgVUkuIFdlJ3JlIHN0aWxsXG4gICAgICAgICAgICAgICAgICAgICAgYXVkaXRpbmcgYWxsIG1hbmFnZW1lbnQgQVBJIGVuZHBvaW50cyB0byBlbnN1cmUgdGhhdCB0aGV5XG4gICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGx5IGxpbWl0IGFjY2VzcyB0byBhZG1pbmlzdHJhdG9ycy5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPiR7b3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5hY3RpdmVcIil9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5pc19hY3RpdmV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAke29wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3Iuc3lzdGVtX2dlbmVyYXRlZFwiKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVQcm9tcHRSZW5hbWVVc2VyfT5cbiAgICAgICAgICAgICAgJHtvcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnJlbmFtZV91c2VyXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fcHJvbXB0RGVsZXRlVXNlcn1cbiAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke29wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuZGVsZXRlX3VzZXJcIil9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAke3VzZXIuc3lzdGVtX2dlbmVyYXRlZFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAke29wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnN5c3RlbV9nZW5lcmF0ZWRfdXNlcnNfbm90X3JlbW92YWJsZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L29wLWNhcmQ+XG4gICAgICA8L29wcC10YWJzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9uYW1lKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnVzZXIgJiZcbiAgICAgICh0aGlzLnVzZXIubmFtZSB8fFxuICAgICAgICB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnVubmFtZWRfdXNlclwiKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlUmVuYW1lVXNlcihuZXdOYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld05hbWUgPT09IG51bGwgfHwgbmV3TmFtZSA9PT0gdGhpcy51c2VyIS5uYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZVVzZXIodGhpcy5vcHAhLCB0aGlzLnVzZXIhLmlkLCB7XG4gICAgICAgIG5hbWU6IG5ld05hbWUsXG4gICAgICB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInJlbG9hZC11c2Vyc1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IGAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IudXNlcl9yZW5hbWVfZmFpbGVkXCJcbiAgICAgICAgKX0gJHtlcnIubWVzc2FnZX1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlUHJvbXB0UmVuYW1lVXNlcihldik6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgIHNob3dQcm9tcHREaWFsb2codGhpcywge1xuICAgICAgdGl0bGU6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuZW50ZXJfbmV3X25hbWVcIiksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMudXNlciEubmFtZSxcbiAgICAgIGlucHV0TGFiZWw6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5hZGRfdXNlci5uYW1lXCIpLFxuICAgICAgY29uZmlybTogKHRleHQpID0+IHRoaXMuX2hhbmRsZVJlbmFtZVVzZXIodGV4dCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVHcm91cENoYW5nZShldik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGVjdEVsID0gZXYuY3VycmVudFRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBjb25zdCBuZXdHcm91cCA9IHNlbGVjdEVsLnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVVc2VyKHRoaXMub3BwISwgdGhpcy51c2VyIS5pZCwge1xuICAgICAgICBncm91cF9pZHM6IFtuZXdHcm91cF0sXG4gICAgICB9KTtcbiAgICAgIHNob3dTYXZlU3VjY2Vzc1RvYXN0KHRoaXMsIHRoaXMub3BwISk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJyZWxvYWQtdXNlcnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiBgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLmdyb3VwX3VwZGF0ZV9mYWlsZWRcIlxuICAgICAgICApfSAke2Vyci5tZXNzYWdlfWAsXG4gICAgICB9KTtcbiAgICAgIHNlbGVjdEVsLnZhbHVlID0gdGhpcy51c2VyIS5ncm91cF9pZHNbMF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlVXNlcigpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlVXNlcih0aGlzLm9wcCEsIHRoaXMudXNlciEuaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2hvd0FsZXJ0RGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogZXJyLmNvZGUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwicmVsb2FkLXVzZXJzXCIpO1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy91c2Vyc1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3Byb21wdERlbGV0ZVVzZXIoX2V2KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0ZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5jb25maXJtX3VzZXJfZGVsZXRpb25cIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIHRoaXMuX25hbWVcbiAgICAgICksXG4gICAgICBjb25maXJtOiAoKSA9PiB0aGlzLl9kZWxldGVVc2VyKCksXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgb3AtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDE2cHggYXV0byAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG9wcC1zdWJwYWdlIG9wLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLWV4cGVyaW1lbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLXVzZXItZWRpdG9yXCI6IE9wVnNlckVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcclxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgb3BwOiBPcGVuUGVlclBvd2VyKSA9PlxyXG4gIHNob3dUb2FzdChlbCwge1xyXG4gICAgbWVzc2FnZTogb3BwIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zdWNjZXNzZnVsbHlfc2F2ZWRcIiksXHJcbiAgfSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWkE7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWlCQTtBQUVBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBT0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSxxMUJBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbWpCQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBeklBO0FBQ0E7QUEwSUE7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExRkE7QUFDQTtBQTJGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFLQTtBQVFBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBSUE7QUFFQTtBQUNBOztBQUhBOzs7O0FBVUE7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBYUE7QUFDQTs7OztBQUlBOztBQUVBOzs7OztBQUtBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBRUE7QUFGQTs7OztBQXhFQTtBQW1GQTs7OztBQUVBO0FBQ0E7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQVFBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTs7O0FBN01BOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==