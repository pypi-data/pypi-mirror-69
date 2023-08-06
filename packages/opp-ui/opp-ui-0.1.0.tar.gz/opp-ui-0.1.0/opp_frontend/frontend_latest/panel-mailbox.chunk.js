(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-mailbox"],{

/***/ "./src/common/datetime/check_options_support.ts":
/*!******************************************************!*\
  !*** ./src/common/datetime/check_options_support.ts ***!
  \******************************************************/
/*! exports provided: toLocaleDateStringSupportsOptions, toLocaleTimeStringSupportsOptions, toLocaleStringSupportsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateStringSupportsOptions", function() { return toLocaleDateStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeStringSupportsOptions", function() { return toLocaleTimeStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleStringSupportsOptions", function() { return toLocaleStringSupportsOptions; });
// Check for support of native locale string options
function checkToLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

const toLocaleDateStringSupportsOptions = checkToLocaleDateStringSupportsOptions();
const toLocaleTimeStringSupportsOptions = checkToLocaleTimeStringSupportsOptions();
const toLocaleStringSupportsOptions = checkToLocaleStringSupportsOptions();

/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: formatDateTime, formatDateTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTime", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTimeWithSeconds", function() { return formatDateTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDateTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.shortTime}`);
const formatDateTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.mediumTime}`);

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

/***/ "./src/panels/mailbox/op-panel-mailbox.js":
/*!************************************************!*\
  !*** ./src/panels/mailbox/op-panel-mailbox.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");

















let registeredDialog = false;
/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelMailbox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_10__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_9__["html"]`
      <style include="op-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        op-card {
          overflow: hidden;
        }

        paper-item {
          cursor: pointer;
        }

        .empty {
          text-align: center;
          color: var(--secondary-text-color);
        }

        .header {
          @apply --paper-font-title;
        }

        .row {
          display: flex;
          justify-content: space-between;
        }

        @media all and (max-width: 450px) {
          .content {
            width: auto;
            padding: 0;
          }
        }

        .tip {
          color: var(--secondary-text-color);
          font-size: 14px;
        }
        .date {
          color: var(--primary-text-color);
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
            <div main-title>[[localize('panel.mailbox')]]</div>
          </app-toolbar>
          <div sticky hidden$="[[areTabsHidden(platforms)]]">
            <paper-tabs
              scrollable
              selected="[[_currentPlatform]]"
              on-iron-activate="handlePlatformSelected"
            >
              <template is="dom-repeat" items="[[platforms]]">
                <paper-tab data-entity="[[item]]">
                  [[getPlatformName(item)]]
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>
        <div class="content">
          <op-card>
            <template is="dom-if" if="[[!_messages.length]]">
              <div class="card-content empty">
                [[localize('ui.panel.mailbox.empty')]]
              </div>
            </template>
            <template is="dom-repeat" items="[[_messages]]">
              <paper-item on-click="openMP3Dialog">
                <paper-item-body style="width:100%" two-line>
                  <div class="row">
                    <div>[[item.caller]]</div>
                    <div class="tip">
                      [[localize('ui.duration.second', 'count', item.duration)]]
                    </div>
                  </div>
                  <div secondary>
                    <span class="date">[[item.timestamp]]</span> -
                    [[item.message]]
                  </div>
                </paper-item-body>
              </paper-item>
            </template>
          </op-card>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      narrow: Boolean,
      platforms: {
        type: Array
      },
      _messages: {
        type: Array
      },
      _currentPlatform: {
        type: Number,
        value: 0
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-audio-message-dialog",
        dialogTag: "op-dialog-show-audio-message",
        dialogImport: () => Promise.all(/*! import() | op-dialog-show-audio-message */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~op-dialog-show-audio-message"), __webpack_require__.e("op-dialog-show-audio-message")]).then(__webpack_require__.bind(null, /*! ./op-dialog-show-audio-message */ "./src/panels/mailbox/op-dialog-show-audio-message.js"))
      });
    }

    this.oppChanged = this.oppChanged.bind(this);
    this.opp.connection.subscribeEvents(this.oppChanged, "mailbox_updated").then(function (unsub) {
      this._unsubEvents = unsub;
    }.bind(this));
    this.computePlatforms().then(function (platforms) {
      this.platforms = platforms;
      this.oppChanged();
    }.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubEvents) this._unsubEvents();
  }

  oppChanged() {
    if (!this._messages) {
      this._messages = [];
    }

    this.getMessages().then(function (items) {
      this._messages = items;
    }.bind(this));
  }

  openMP3Dialog(event) {
    this.fire("show-audio-message-dialog", {
      opp: this.opp,
      message: event.model.item
    });
  }

  getMessages() {
    const platform = this.platforms[this._currentPlatform];
    return this.opp.callApi("GET", `mailbox/messages/${platform.name}`).then(values => {
      const platformItems = [];
      const arrayLength = values.length;

      for (let i = 0; i < arrayLength; i++) {
        const datetime = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__["formatDateTime"])(new Date(values[i].info.origtime * 1000), this.opp.language);
        platformItems.push({
          timestamp: datetime,
          caller: values[i].info.callerid,
          message: values[i].text,
          sha: values[i].sha,
          duration: values[i].info.duration,
          platform: platform
        });
      }

      return platformItems.sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
    });
  }

  computePlatforms() {
    return this.opp.callApi("GET", "mailbox/platforms");
  }

  handlePlatformSelected(ev) {
    const newPlatform = ev.detail.selected;

    if (newPlatform !== this._currentPlatform) {
      this._currentPlatform = newPlatform;
      this.oppChanged();
    }
  }

  areTabsHidden(platforms) {
    return !platforms || platforms.length < 2;
  }

  getPlatformName(item) {
    const entity = `mailbox.${item.name}`;
    const stateObj = this.opp.states[entity.toLowerCase()];
    return stateObj.attributes.friendly_name;
  }

}

customElements.define("op-panel-mailbox", OpPanelMailbox);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFpbGJveC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvY2hlY2tfb3B0aW9uc19zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFpbGJveC9vcC1wYW5lbC1tYWlsYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbmV4cG9ydCBjb25zdCB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgfSBmcm9tIFwiLi9jaGVja19vcHRpb25zX3N1cHBvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVUaW1lID0gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT5cbiAgICAgIGZlY2hhLmZvcm1hdChcbiAgICAgICAgZGF0ZU9iaixcbiAgICAgICAgYCR7ZmVjaGEubWFza3MubG9uZ0RhdGV9LCAke2ZlY2hhLm1hc2tzLnNob3J0VGltZX1gXG4gICAgICApO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVRpbWVXaXRoU2Vjb25kcyA9IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+XG4gICAgICBmZWNoYS5mb3JtYXQoXG4gICAgICAgIGRhdGVPYmosXG4gICAgICAgIGAke2ZlY2hhLm1hc2tzLmxvbmdEYXRlfSwgJHtmZWNoYS5tYXNrcy5tZWRpdW1UaW1lfWBcbiAgICAgICk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIG9wcCBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKG9wcC5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFiXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL29wLXN0eWxlXCI7XG5cbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BQYW5lbE1haWxib3ggZXh0ZW5kcyBFdmVudHNNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJvcC1zdHlsZVwiPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBvcC1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVtcHR5IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICAucm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aXAge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPG9wLW1lbnUtYnV0dG9uIG9wcD1cIltbb3BwXV1cIiBuYXJyb3c9XCJbW25hcnJvd11dXCI+PC9vcC1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5tYWlsYm94JyldXTwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgICAgPGRpdiBzdGlja3kgaGlkZGVuJD1cIltbYXJlVGFic0hpZGRlbihwbGF0Zm9ybXMpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJbW19jdXJyZW50UGxhdGZvcm1dXVwiXG4gICAgICAgICAgICAgIG9uLWlyb24tYWN0aXZhdGU9XCJoYW5kbGVQbGF0Zm9ybVNlbGVjdGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1twbGF0Zm9ybXNdXVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci10YWIgZGF0YS1lbnRpdHk9XCJbW2l0ZW1dXVwiPlxuICAgICAgICAgICAgICAgICAgW1tnZXRQbGF0Zm9ybU5hbWUoaXRlbSldXVxuICAgICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci10YWJzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPG9wLWNhcmQ+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9tZXNzYWdlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IGVtcHR5XCI+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwubWFpbGJveC5lbXB0eScpXV1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfbWVzc2FnZXNdXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvbi1jbGljaz1cIm9wZW5NUDNEaWFsb2dcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHN0eWxlPVwid2lkdGg6MTAwJVwiIHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PltbaXRlbS5jYWxsZXJdXTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uc2Vjb25kJywgJ2NvdW50JywgaXRlbS5kdXJhdGlvbildXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVwiPltbaXRlbS50aW1lc3RhbXBdXTwvc3Bhbj4gLVxuICAgICAgICAgICAgICAgICAgICBbW2l0ZW0ubWVzc2FnZV1dXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L29wLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcblxuICAgICAgcGxhdGZvcm1zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgfSxcblxuICAgICAgX21lc3NhZ2VzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgfSxcblxuICAgICAgX2N1cnJlbnRQbGF0Zm9ybToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctYXVkaW8tbWVzc2FnZS1kaWFsb2dcIixcbiAgICAgICAgZGlhbG9nVGFnOiBcIm9wLWRpYWxvZy1zaG93LWF1ZGlvLW1lc3NhZ2VcIixcbiAgICAgICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwib3AtZGlhbG9nLXNob3ctYXVkaW8tbWVzc2FnZVwiICovIFwiLi9vcC1kaWFsb2ctc2hvdy1hdWRpby1tZXNzYWdlXCJcbiAgICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub3BwQ2hhbmdlZCA9IHRoaXMub3BwQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BwLmNvbm5lY3Rpb25cbiAgICAgIC5zdWJzY3JpYmVFdmVudHModGhpcy5vcHBDaGFuZ2VkLCBcIm1haWxib3hfdXBkYXRlZFwiKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKHVuc3ViKSB7XG4gICAgICAgICAgdGhpcy5fdW5zdWJFdmVudHMgPSB1bnN1YjtcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIHRoaXMuY29tcHV0ZVBsYXRmb3JtcygpLnRoZW4oXG4gICAgICBmdW5jdGlvbihwbGF0Zm9ybXMpIHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSBwbGF0Zm9ybXM7XG4gICAgICAgIHRoaXMub3BwQ2hhbmdlZCgpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB0aGlzLl91bnN1YkV2ZW50cygpO1xuICB9XG5cbiAgb3BwQ2hhbmdlZCgpIHtcbiAgICBpZiAoIXRoaXMuX21lc3NhZ2VzKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmdldE1lc3NhZ2VzKCkudGhlbihcbiAgICAgIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VzID0gaXRlbXM7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgb3Blbk1QM0RpYWxvZyhldmVudCkge1xuICAgIHRoaXMuZmlyZShcInNob3ctYXVkaW8tbWVzc2FnZS1kaWFsb2dcIiwge1xuICAgICAgb3BwOiB0aGlzLm9wcCxcbiAgICAgIG1lc3NhZ2U6IGV2ZW50Lm1vZGVsLml0ZW0sXG4gICAgfSk7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICBjb25zdCBwbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1zW3RoaXMuX2N1cnJlbnRQbGF0Zm9ybV07XG4gICAgcmV0dXJuIHRoaXMub3BwXG4gICAgICAuY2FsbEFwaShcIkdFVFwiLCBgbWFpbGJveC9tZXNzYWdlcy8ke3BsYXRmb3JtLm5hbWV9YClcbiAgICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1JdGVtcyA9IFtdO1xuICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGRhdGV0aW1lID0gZm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgICBuZXcgRGF0ZSh2YWx1ZXNbaV0uaW5mby5vcmlndGltZSAqIDEwMDApLFxuICAgICAgICAgICAgdGhpcy5vcHAubGFuZ3VhZ2VcbiAgICAgICAgICApO1xuICAgICAgICAgIHBsYXRmb3JtSXRlbXMucHVzaCh7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IGRhdGV0aW1lLFxuICAgICAgICAgICAgY2FsbGVyOiB2YWx1ZXNbaV0uaW5mby5jYWxsZXJpZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHZhbHVlc1tpXS50ZXh0LFxuICAgICAgICAgICAgc2hhOiB2YWx1ZXNbaV0uc2hhLFxuICAgICAgICAgICAgZHVyYXRpb246IHZhbHVlc1tpXS5pbmZvLmR1cmF0aW9uLFxuICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGF0Zm9ybUl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLnRpbWVzdGFtcCkgLSBuZXcgRGF0ZShhLnRpbWVzdGFtcCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjb21wdXRlUGxhdGZvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLm9wcC5jYWxsQXBpKFwiR0VUXCIsIFwibWFpbGJveC9wbGF0Zm9ybXNcIik7XG4gIH1cblxuICBoYW5kbGVQbGF0Zm9ybVNlbGVjdGVkKGV2KSB7XG4gICAgY29uc3QgbmV3UGxhdGZvcm0gPSBldi5kZXRhaWwuc2VsZWN0ZWQ7XG4gICAgaWYgKG5ld1BsYXRmb3JtICE9PSB0aGlzLl9jdXJyZW50UGxhdGZvcm0pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRQbGF0Zm9ybSA9IG5ld1BsYXRmb3JtO1xuICAgICAgdGhpcy5vcHBDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgYXJlVGFic0hpZGRlbihwbGF0Zm9ybXMpIHtcbiAgICByZXR1cm4gIXBsYXRmb3JtcyB8fCBwbGF0Zm9ybXMubGVuZ3RoIDwgMjtcbiAgfVxuXG4gIGdldFBsYXRmb3JtTmFtZShpdGVtKSB7XG4gICAgY29uc3QgZW50aXR5ID0gYG1haWxib3guJHtpdGVtLm5hbWV9YDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMub3BwLnN0YXRlc1tlbnRpdHkudG9Mb3dlckNhc2UoKV07XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYW5lbC1tYWlsYm94XCIsIE9wUGFuZWxNYWlsYm94KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBYUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFaQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdtQkFFQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL05BO0FBQ0E7QUFnT0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==