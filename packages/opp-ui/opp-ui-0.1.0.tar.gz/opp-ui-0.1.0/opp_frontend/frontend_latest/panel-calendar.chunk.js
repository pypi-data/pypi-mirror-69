(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-calendar"],{

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

/***/ "./src/panels/calendar/op-big-calendar.js":
/*!************************************************!*\
  !*** ./src/panels/calendar/op-big-calendar.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");


/* eslint-disable */



/* eslint-enable */





react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"].setLocalizer(react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"].momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_4___default.a));
const DEFAULT_VIEW = "month";

class OpBigCalendar extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <link
        rel="stylesheet"
        href="/static/panels/calendar/react-big-calendar.css"
      />
      <style>
        div#root {
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="root"></div>
    `;
  }

  static get properties() {
    return {
      events: {
        type: Array,
        observer: "_update"
      }
    };
  }

  _update(events) {
    const allViews = react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"].Views.values;
    const BCElement = react_dom__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      events: events,
      views: allViews,
      popup: true,
      onNavigate: (date, viewName) => this.fire("navigate", {
        date,
        viewName
      }),
      onView: viewName => this.fire("view-changed", {
        viewName
      }),
      eventPropGetter: this._setEventStyle,
      defaultView: DEFAULT_VIEW,
      defaultDate: new Date()
    });
    Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(BCElement, this.$.root);
  }

  _setEventStyle(event) {
    // https://stackoverflow.com/questions/34587067/change-color-of-react-big-calendar-events
    const newStyle = {};

    if (event.color) {
      newStyle.backgroundColor = event.color;
    }

    return {
      style: newStyle
    };
  }

}

customElements.define("op-big-calendar", OpBigCalendar);

/***/ }),

/***/ "./src/panels/calendar/op-panel-calendar.js":
/*!**************************************************!*\
  !*** ./src/panels/calendar/op-panel-calendar.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-big-calendar/lib/utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js");
/* harmony import */ var react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _op_big_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./op-big-calendar */ "./src/panels/calendar/op-big-calendar.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");















const DEFAULT_VIEW = "month";
/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelCalendar extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex op-style">
        .content {
          padding: 16px;
          @apply --layout-horizontal;
        }

        op-big-calendar {
          min-height: 500px;
          min-width: 100%;
        }

        #calendars {
          padding-right: 16px;
          width: 15%;
          min-width: 170px;
        }

        paper-item {
          cursor: pointer;
        }

        div.all_calendars {
          ￼height: 20px;
          ￼text-align: center;
        }

        .iron-selected {
          background-color: #e5e5e5;
          font-weight: normal;
        }

        :host([narrow]) .content {
          flex-direction: column;
        }
        :host([narrow]) #calendars {
          margin-bottom: 24px;
          width: 100%;
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
            <div main-title>[[localize('panel.calendar')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div id="calendars" class="layout vertical wrap">
            <op-card header="Calendars">
              <paper-listbox
                id="calendar_list"
                multi
                on-selected-items-changed="_fetchData"
                selected-values="{{selectedCalendars}}"
                attr-for-selected="item-name"
              >
                <template is="dom-repeat" items="[[calendars]]">
                  <paper-item item-name="[[item.entity_id]]">
                    <span
                      class="calendar_color"
                      style$="background-color: [[item.color]]"
                    ></span>
                    <span class="calendar_color_spacer"></span> [[item.name]]
                  </paper-item>
                </template>
              </paper-listbox>
            </op-card>
          </div>
          <div class="flex layout horizontal wrap">
            <op-big-calendar
              default-date="[[currentDate]]"
              default-view="[[currentView]]"
              on-navigate="_handleNavigate"
              on-view="_handleViewChanged"
              events="[[events]]"
            >
            </op-big-calendar>
          </div>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      currentView: {
        type: String,
        value: DEFAULT_VIEW
      },
      currentDate: {
        type: Object,
        value: new Date()
      },
      events: {
        type: Array,
        value: []
      },
      calendars: {
        type: Array,
        value: []
      },
      selectedCalendars: {
        type: Array,
        value: []
      },
      narrow: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this._fetchCalendars();
  }

  _fetchCalendars() {
    this.opp.callApi("get", "calendars").then(result => {
      this.calendars = result;
      this.selectedCalendars = result.map(cal => cal.entity_id);
    });
  }

  _fetchData() {
    const start = react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default.a.firstVisibleDay(this.currentDate).toISOString();
    const end = react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default.a.lastVisibleDay(this.currentDate).toISOString();
    const params = encodeURI(`?start=${start}&end=${end}`);
    const calls = this.selectedCalendars.map(cal => this.opp.callApi("get", `calendars/${cal}${params}`));
    Promise.all(calls).then(results => {
      const tmpEvents = [];
      results.forEach(res => {
        res.forEach(ev => {
          ev.start = new Date(ev.start);

          if (ev.end) {
            ev.end = new Date(ev.end);
          } else {
            ev.end = null;
          }

          tmpEvents.push(ev);
        });
      });
      this.events = tmpEvents;
    });
  }

  _getDateRange() {
    let startDate;
    let endDate;

    if (this.currentView === "day") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
    } else if (this.currentView === "week") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("isoWeek");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("isoWeek");
    } else if (this.currentView === "month") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("month").subtract(7, "days");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("month").add(7, "days");
    } else if (this.currentView === "agenda") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("day").add(1, "month");
    }

    return [startDate.toISOString(), endDate.toISOString()];
  }

  _handleViewChanged(ev) {
    // Calendar view changed
    this.currentView = ev.detail.viewName;

    this._fetchData();
  }

  _handleNavigate(ev) {
    // Calendar date range changed
    this.currentDate = ev.detail.date;
    this.currentView = ev.detail.viewName;

    this._fetchData();
  }

}

customElements.define("op-panel-calendar", OpPanelCalendar);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY2FsZW5kYXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY2FsZW5kYXIvb3AtYmlnLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY2FsZW5kYXIvb3AtcGFuZWwtY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBvcHAgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHA6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShvcHAubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuaW1wb3J0IEJpZ0NhbGVuZGFyIGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcblxuQmlnQ2FsZW5kYXIuc2V0TG9jYWxpemVyKEJpZ0NhbGVuZGFyLm1vbWVudExvY2FsaXplcihtb21lbnQpKTtcblxuY29uc3QgREVGQVVMVF9WSUVXID0gXCJtb250aFwiO1xuXG5jbGFzcyBPcEJpZ0NhbGVuZGFyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiL3N0YXRpYy9wYW5lbHMvY2FsZW5kYXIvcmVhY3QtYmlnLWNhbGVuZGFyLmNzc1wiXG4gICAgICAvPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBkaXYjcm9vdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG9ic2VydmVyOiBcIl91cGRhdGVcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF91cGRhdGUoZXZlbnRzKSB7XG4gICAgY29uc3QgYWxsVmlld3MgPSBCaWdDYWxlbmRhci5WaWV3cy52YWx1ZXM7XG5cbiAgICBjb25zdCBCQ0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEJpZ0NhbGVuZGFyLCB7XG4gICAgICBldmVudHM6IGV2ZW50cyxcbiAgICAgIHZpZXdzOiBhbGxWaWV3cyxcbiAgICAgIHBvcHVwOiB0cnVlLFxuICAgICAgb25OYXZpZ2F0ZTogKGRhdGUsIHZpZXdOYW1lKSA9PiB0aGlzLmZpcmUoXCJuYXZpZ2F0ZVwiLCB7IGRhdGUsIHZpZXdOYW1lIH0pLFxuICAgICAgb25WaWV3OiAodmlld05hbWUpID0+IHRoaXMuZmlyZShcInZpZXctY2hhbmdlZFwiLCB7IHZpZXdOYW1lIH0pLFxuICAgICAgZXZlbnRQcm9wR2V0dGVyOiB0aGlzLl9zZXRFdmVudFN0eWxlLFxuICAgICAgZGVmYXVsdFZpZXc6IERFRkFVTFRfVklFVyxcbiAgICAgIGRlZmF1bHREYXRlOiBuZXcgRGF0ZSgpLFxuICAgIH0pO1xuICAgIHJlbmRlcihCQ0VsZW1lbnQsIHRoaXMuJC5yb290KTtcbiAgfVxuXG4gIF9zZXRFdmVudFN0eWxlKGV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQ1ODcwNjcvY2hhbmdlLWNvbG9yLW9mLXJlYWN0LWJpZy1jYWxlbmRhci1ldmVudHNcbiAgICBjb25zdCBuZXdTdHlsZSA9IHt9O1xuICAgIGlmIChldmVudC5jb2xvcikge1xuICAgICAgbmV3U3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXZlbnQuY29sb3I7XG4gICAgfVxuICAgIHJldHVybiB7IHN0eWxlOiBuZXdTdHlsZSB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWJpZy1jYWxlbmRhclwiLCBPcEJpZ0NhbGVuZGFyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkYXRlcyBmcm9tIFwicmVhY3QtYmlnLWNhbGVuZGFyL2xpYi91dGlscy9kYXRlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuaW1wb3J0IFwiLi9vcC1iaWctY2FsZW5kYXJcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBERUZBVUxUX1ZJRVcgPSBcIm1vbnRoXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BQYW5lbENhbGVuZGFyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggb3Atc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1iaWctY2FsZW5kYXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjYWxlbmRhcnMge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmFsbF9jYWxlbmRhcnMge1xuICAgICAgICAgIO+/vGhlaWdodDogMjBweDtcbiAgICAgICAgICDvv7x0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaXJvbi1zZWxlY3RlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW25hcnJvd10pIC5jb250ZW50IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSAjY2FsZW5kYXJzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8b3AtbWVudS1idXR0b24gb3BwPVwiW1tvcHBdXVwiIG5hcnJvdz1cIltbbmFycm93XV1cIj48L29wLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbbG9jYWxpemUoJ3BhbmVsLmNhbGVuZGFyJyldXTwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBpZD1cImNhbGVuZGFyc1wiIGNsYXNzPVwibGF5b3V0IHZlcnRpY2FsIHdyYXBcIj5cbiAgICAgICAgICAgIDxvcC1jYXJkIGhlYWRlcj1cIkNhbGVuZGFyc1wiPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIGlkPVwiY2FsZW5kYXJfbGlzdFwiXG4gICAgICAgICAgICAgICAgbXVsdGlcbiAgICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1pdGVtcy1jaGFuZ2VkPVwiX2ZldGNoRGF0YVwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQtdmFsdWVzPVwie3tzZWxlY3RlZENhbGVuZGFyc319XCJcbiAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2NhbGVuZGFyc11dXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9XCJbW2l0ZW0uZW50aXR5X2lkXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhbGVuZGFyX2NvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOiBbW2l0ZW0uY29sb3JdXVwiXG4gICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXJfY29sb3Jfc3BhY2VyXCI+PC9zcGFuPiBbW2l0ZW0ubmFtZV1dXG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxheW91dCBob3Jpem9udGFsIHdyYXBcIj5cbiAgICAgICAgICAgIDxvcC1iaWctY2FsZW5kYXJcbiAgICAgICAgICAgICAgZGVmYXVsdC1kYXRlPVwiW1tjdXJyZW50RGF0ZV1dXCJcbiAgICAgICAgICAgICAgZGVmYXVsdC12aWV3PVwiW1tjdXJyZW50Vmlld11dXCJcbiAgICAgICAgICAgICAgb24tbmF2aWdhdGU9XCJfaGFuZGxlTmF2aWdhdGVcIlxuICAgICAgICAgICAgICBvbi12aWV3PVwiX2hhbmRsZVZpZXdDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgZXZlbnRzPVwiW1tldmVudHNdXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L29wLWJpZy1jYWxlbmRhcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICBjdXJyZW50Vmlldzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBERUZBVUxUX1ZJRVcsXG4gICAgICB9LFxuXG4gICAgICBjdXJyZW50RGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcblxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuXG4gICAgICBjYWxlbmRhcnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkQ2FsZW5kYXJzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9mZXRjaENhbGVuZGFycygpO1xuICB9XG5cbiAgX2ZldGNoQ2FsZW5kYXJzKCkge1xuICAgIHRoaXMub3BwLmNhbGxBcGkoXCJnZXRcIiwgXCJjYWxlbmRhcnNcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLmNhbGVuZGFycyA9IHJlc3VsdDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYWxlbmRhcnMgPSByZXN1bHQubWFwKChjYWwpID0+IGNhbC5lbnRpdHlfaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBzdGFydCA9IGRhdGVzLmZpcnN0VmlzaWJsZURheSh0aGlzLmN1cnJlbnREYXRlKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IGVuZCA9IGRhdGVzLmxhc3RWaXNpYmxlRGF5KHRoaXMuY3VycmVudERhdGUpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3QgcGFyYW1zID0gZW5jb2RlVVJJKGA/c3RhcnQ9JHtzdGFydH0mZW5kPSR7ZW5kfWApO1xuICAgIGNvbnN0IGNhbGxzID0gdGhpcy5zZWxlY3RlZENhbGVuZGFycy5tYXAoKGNhbCkgPT5cbiAgICAgIHRoaXMub3BwLmNhbGxBcGkoXCJnZXRcIiwgYGNhbGVuZGFycy8ke2NhbH0ke3BhcmFtc31gKVxuICAgICk7XG4gICAgUHJvbWlzZS5hbGwoY2FsbHMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnN0IHRtcEV2ZW50cyA9IFtdO1xuXG4gICAgICByZXN1bHRzLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgICByZXMuZm9yRWFjaCgoZXYpID0+IHtcbiAgICAgICAgICBldi5zdGFydCA9IG5ldyBEYXRlKGV2LnN0YXJ0KTtcbiAgICAgICAgICBpZiAoZXYuZW5kKSB7XG4gICAgICAgICAgICBldi5lbmQgPSBuZXcgRGF0ZShldi5lbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldi5lbmQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0bXBFdmVudHMucHVzaChldik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV2ZW50cyA9IHRtcEV2ZW50cztcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXREYXRlUmFuZ2UoKSB7XG4gICAgbGV0IHN0YXJ0RGF0ZTtcbiAgICBsZXQgZW5kRGF0ZTtcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gXCJkYXlcIikge1xuICAgICAgc3RhcnREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLnN0YXJ0T2YoXCJkYXlcIik7XG4gICAgICBlbmREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLnN0YXJ0T2YoXCJkYXlcIik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBcIndlZWtcIikge1xuICAgICAgc3RhcnREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLnN0YXJ0T2YoXCJpc29XZWVrXCIpO1xuICAgICAgZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5lbmRPZihcImlzb1dlZWtcIik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKVxuICAgICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5zdWJ0cmFjdCg3LCBcImRheXNcIik7XG4gICAgICBlbmREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpXG4gICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5hZGQoNywgXCJkYXlzXCIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gXCJhZ2VuZGFcIikge1xuICAgICAgc3RhcnREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLnN0YXJ0T2YoXCJkYXlcIik7XG4gICAgICBlbmREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpXG4gICAgICAgIC5lbmRPZihcImRheVwiKVxuICAgICAgICAuYWRkKDEsIFwibW9udGhcIik7XG4gICAgfVxuICAgIHJldHVybiBbc3RhcnREYXRlLnRvSVNPU3RyaW5nKCksIGVuZERhdGUudG9JU09TdHJpbmcoKV07XG4gIH1cblxuICBfaGFuZGxlVmlld0NoYW5nZWQoZXYpIHtcbiAgICAvLyBDYWxlbmRhciB2aWV3IGNoYW5nZWRcbiAgICB0aGlzLmN1cnJlbnRWaWV3ID0gZXYuZGV0YWlsLnZpZXdOYW1lO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgX2hhbmRsZU5hdmlnYXRlKGV2KSB7XG4gICAgLy8gQ2FsZW5kYXIgZGF0ZSByYW5nZSBjaGFuZ2VkXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGV2LmRldGFpbC5kYXRlO1xuICAgIHRoaXMuY3VycmVudFZpZXcgPSBldi5kZXRhaWwudmlld05hbWU7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFuZWwtY2FsZW5kYXJcIiwgT3BQYW5lbENhbGVuZGFyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFsREE7QUFDQTtBQW1EQTs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQTVCQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF0TUE7QUFDQTtBQXVNQTs7OztBIiwic291cmNlUm9vdCI6IiJ9