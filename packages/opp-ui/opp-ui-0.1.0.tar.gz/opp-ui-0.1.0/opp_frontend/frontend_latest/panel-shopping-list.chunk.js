(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-shopping-list"],{

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

/***/ "./src/dialogs/voice-command-dialog/show-op-voice-command-dialog.ts":
/*!**************************************************************************!*\
  !*** ./src/dialogs/voice-command-dialog/show-op-voice-command-dialog.ts ***!
  \**************************************************************************/
/*! exports provided: showVoiceCommandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showVoiceCommandDialog", function() { return showVoiceCommandDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const loadVoiceCommandDialog = () => Promise.all(/*! import() | op-voice-command-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("op-voice-command-dialog")]).then(__webpack_require__.bind(null, /*! ./op-voice-command-dialog */ "./src/dialogs/voice-command-dialog/op-voice-command-dialog.ts"));

const showVoiceCommandDialog = element => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "op-voice-command-dialog",
    dialogImport: loadVoiceCommandDialog,
    dialogParams: {}
  });
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

/***/ "./src/panels/shopping-list/op-panel-shopping-list.js":
/*!************************************************************!*\
  !*** ./src/panels/shopping-list/op-panel-shopping-list.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _dialogs_voice_command_dialog_show_op_voice_command_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dialogs/voice-command-dialog/show-op-voice-command-dialog */ "./src/dialogs/voice-command-dialog/show-op-voice-command-dialog.ts");


















/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelShoppingList extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_12__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_11__["html"]`
      <style include="op-style">
        :host {
          height: 100%;
        }
        app-toolbar paper-listbox {
          width: 150px;
        }
        app-toolbar paper-item {
          cursor: pointer;
        }
        .content {
          padding-bottom: 32px;
          max-width: 600px;
          margin: 0 auto;
        }
        paper-icon-item {
          border-top: 1px solid var(--divider-color);
        }
        paper-icon-item:first-child {
          border-top: 0;
        }
        paper-checkbox {
          padding: 11px;
        }
        paper-input {
          --paper-input-container-underline: {
            display: none;
          }
          --paper-input-container-underline-focus: {
            display: none;
          }
          position: relative;
          top: 1px;
        }
        .tip {
          padding: 24px;
          text-align: center;
          color: var(--secondary-text-color);
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
            <div main-title>[[localize('panel.shopping_list')]]</div>

            <paper-icon-button
              hidden$="[[!conversation]]"
              aria-label="Start conversation"
              icon="opp:microphone"
              on-click="_showVoiceCommandDialog"
            ></paper-icon-button>

            <paper-menu-button
              horizontal-align="right"
              horizontal-offset="-5"
              vertical-offset="-5"
            >
              <paper-icon-button
                icon="opp:dots-vertical"
                slot="dropdown-trigger"
              ></paper-icon-button>
              <paper-listbox slot="dropdown-content">
                <paper-item on-click="_clearCompleted"
                  >[[localize('ui.panel.shopping-list.clear_completed')]]</paper-item
                >
              </paper-listbox>
            </paper-menu-button>
          </app-toolbar>
        </app-header>

        <div class="content">
          <op-card>
            <paper-icon-item on-focus="_focusRowInput">
              <paper-icon-button
                slot="item-icon"
                icon="opp:plus"
                on-click="_addItem"
              ></paper-icon-button>
              <paper-item-body>
                <paper-input
                  id="addBox"
                  placeholder="[[localize('ui.panel.shopping-list.add_item')]]"
                  on-keydown="_addKeyPress"
                  no-label-float
                ></paper-input>
              </paper-item-body>
            </paper-icon-item>

            <template is="dom-repeat" items="[[items]]">
              <paper-icon-item>
                <paper-checkbox
                  slot="item-icon"
                  checked="{{item.complete}}"
                  on-click="_itemCompleteTapped"
                  tabindex="0"
                ></paper-checkbox>
                <paper-item-body>
                  <paper-input
                    id="editBox"
                    no-label-float
                    value="[[item.name]]"
                    on-change="_saveEdit"
                  ></paper-input>
                </paper-item-body>
              </paper-icon-item>
            </template>
          </op-card>
          <div class="tip" hidden$="[[!conversation]]">
            [[localize('ui.panel.shopping-list.microphone_tip')]]
          </div>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      narrow: Boolean,
      conversation: {
        type: Boolean,
        computed: "_computeConversation(opp)"
      },
      items: {
        type: Array,
        value: []
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchData = this._fetchData.bind(this);
    this.opp.connection.subscribeEvents(this._fetchData, "shopping_list_updated").then(function (unsub) {
      this._unsubEvents = unsub;
    }.bind(this));

    this._fetchData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubEvents) this._unsubEvents();
  }

  _fetchData() {
    this.opp.callApi("get", "shopping_list").then(function (items) {
      items.reverse();
      this.items = items;
    }.bind(this));
  }

  _itemCompleteTapped(ev) {
    ev.stopPropagation();
    this.opp.callApi("post", "shopping_list/item/" + ev.model.item.id, {
      complete: ev.target.checked
    }).catch(() => this._fetchData());
  }

  _addItem(ev) {
    this.opp.callApi("post", "shopping_list/item", {
      name: this.$.addBox.value
    }).catch(() => this._fetchData());
    this.$.addBox.value = ""; // Presence of 'ev' means tap on "add" button.

    if (ev) {
      setTimeout(() => this.$.addBox.focus(), 10);
    }
  }

  _addKeyPress(ev) {
    if (ev.keyCode === 13) {
      this._addItem();
    }
  }

  _computeConversation(opp) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_16__["isComponentLoaded"])(opp, "conversation");
  }

  _showVoiceCommandDialog() {
    Object(_dialogs_voice_command_dialog_show_op_voice_command_dialog__WEBPACK_IMPORTED_MODULE_17__["showVoiceCommandDialog"])(this);
  }

  _saveEdit(ev) {
    const {
      index,
      item
    } = ev.model;
    const name = ev.target.value;

    if (name === item.name) {
      return;
    }

    this.set(["items", index, "name"], name);
    this.opp.callApi("post", "shopping_list/item/" + item.id, {
      name: name
    }).catch(() => this._fetchData());
  }

  _clearCompleted() {
    this.opp.callApi("POST", "shopping_list/clear_completed");
  }

}

customElements.define("op-panel-shopping-list", OpPanelShoppingList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc2hvcHBpbmctbGlzdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvc2hvdy1vcC12b2ljZS1jb21tYW5kLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvc2hvcHBpbmctbGlzdC9vcC1wYW5lbC1zaG9wcGluZy1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqIFJldHVybiBpZiBhIGNvbXBvbmVudCBpcyBsb2FkZWQuICovXG5leHBvcnQgY29uc3QgaXNDb21wb25lbnRMb2FkZWQgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgY29tcG9uZW50OiBzdHJpbmdcbik6IGJvb2xlYW4gPT4gb3BwICYmIG9wcC5jb25maWcuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT09IC0xO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xyXG5cclxuY29uc3QgbG9hZFZvaWNlQ29tbWFuZERpYWxvZyA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJvcC12b2ljZS1jb21tYW5kLWRpYWxvZ1wiICovIFwiLi9vcC12b2ljZS1jb21tYW5kLWRpYWxvZ1wiXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93Vm9pY2VDb21tYW5kRGlhbG9nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xyXG4gICAgZGlhbG9nVGFnOiBcIm9wLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIsXHJcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRWb2ljZUNvbW1hbmREaWFsb2csXHJcbiAgICBkaWFsb2dQYXJhbXM6IHt9LFxyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBvcHAgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHA6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShvcHAubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBzaG93Vm9pY2VDb21tYW5kRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvc2hvdy1vcC12b2ljZS1jb21tYW5kLWRpYWxvZ1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE9wUGFuZWxTaG9wcGluZ0xpc3QgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYXBwLXRvb2xiYXIgcGFwZXItbGlzdGJveCB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGFwcC10b29sYmFyIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICAgIHBhZGRpbmc6IDExcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZToge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpcCB7XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPG9wLW1lbnUtYnV0dG9uIG9wcD1cIltbb3BwXV1cIiBuYXJyb3c9XCJbW25hcnJvd11dXCI+PC9vcC1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5zaG9wcGluZ19saXN0JyldXTwvZGl2PlxuXG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIWNvbnZlcnNhdGlvbl1dXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXJ0IGNvbnZlcnNhdGlvblwiXG4gICAgICAgICAgICAgIGljb249XCJvcHA6bWljcm9waG9uZVwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiX3Nob3dWb2ljZUNvbW1hbmREaWFsb2dcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwib3BwOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb24tY2xpY2s9XCJfY2xlYXJDb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnNob3BwaW5nLWxpc3QuY2xlYXJfY29tcGxldGVkJyldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8b3AtY2FyZD5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gb24tZm9jdXM9XCJfZm9jdXNSb3dJbnB1dFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwib3BwOnBsdXNcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2FkZEl0ZW1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiYWRkQm94XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuc2hvcHBpbmctbGlzdC5hZGRfaXRlbScpXV1cIlxuICAgICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9hZGRLZXlQcmVzc1wiXG4gICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cInt7aXRlbS5jb21wbGV0ZX19XCJcbiAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2l0ZW1Db21wbGV0ZVRhcHBlZFwiXG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0Qm94XCJcbiAgICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJbW2l0ZW0ubmFtZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgb24tY2hhbmdlPVwiX3NhdmVFZGl0XCJcbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBcIiBoaWRkZW4kPVwiW1shY29udmVyc2F0aW9uXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnNob3BwaW5nLWxpc3QubWljcm9waG9uZV90aXAnKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIGNvbnZlcnNhdGlvbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUNvbnZlcnNhdGlvbihvcHApXCIsXG4gICAgICB9LFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhID0gdGhpcy5fZmV0Y2hEYXRhLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9wcC5jb25uZWN0aW9uXG4gICAgICAuc3Vic2NyaWJlRXZlbnRzKHRoaXMuX2ZldGNoRGF0YSwgXCJzaG9wcGluZ19saXN0X3VwZGF0ZWRcIilcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbih1bnN1Yikge1xuICAgICAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5zdWI7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB0aGlzLl91bnN1YkV2ZW50cygpO1xuICB9XG5cbiAgX2ZldGNoRGF0YSgpIHtcbiAgICB0aGlzLm9wcC5jYWxsQXBpKFwiZ2V0XCIsIFwic2hvcHBpbmdfbGlzdFwiKS50aGVuKFxuICAgICAgZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgaXRlbXMucmV2ZXJzZSgpO1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgX2l0ZW1Db21wbGV0ZVRhcHBlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3BwXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJzaG9wcGluZ19saXN0L2l0ZW0vXCIgKyBldi5tb2RlbC5pdGVtLmlkLCB7XG4gICAgICAgIGNvbXBsZXRlOiBldi50YXJnZXQuY2hlY2tlZCxcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5fZmV0Y2hEYXRhKCkpO1xuICB9XG5cbiAgX2FkZEl0ZW0oZXYpIHtcbiAgICB0aGlzLm9wcFxuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwic2hvcHBpbmdfbGlzdC9pdGVtXCIsIHtcbiAgICAgICAgbmFtZTogdGhpcy4kLmFkZEJveC52YWx1ZSxcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5fZmV0Y2hEYXRhKCkpO1xuICAgIHRoaXMuJC5hZGRCb3gudmFsdWUgPSBcIlwiO1xuICAgIC8vIFByZXNlbmNlIG9mICdldicgbWVhbnMgdGFwIG9uIFwiYWRkXCIgYnV0dG9uLlxuICAgIGlmIChldikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLiQuYWRkQm94LmZvY3VzKCksIDEwKTtcbiAgICB9XG4gIH1cblxuICBfYWRkS2V5UHJlc3MoZXYpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUNvbnZlcnNhdGlvbihvcHApIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQob3BwLCBcImNvbnZlcnNhdGlvblwiKTtcbiAgfVxuXG4gIF9zaG93Vm9pY2VDb21tYW5kRGlhbG9nKCkge1xuICAgIHNob3dWb2ljZUNvbW1hbmREaWFsb2codGhpcyk7XG4gIH1cblxuICBfc2F2ZUVkaXQoZXYpIHtcbiAgICBjb25zdCB7IGluZGV4LCBpdGVtIH0gPSBldi5tb2RlbDtcbiAgICBjb25zdCBuYW1lID0gZXYudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKG5hbWUgPT09IGl0ZW0ubmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0KFtcIml0ZW1zXCIsIGluZGV4LCBcIm5hbWVcIl0sIG5hbWUpO1xuICAgIHRoaXMub3BwXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJzaG9wcGluZ19saXN0L2l0ZW0vXCIgKyBpdGVtLmlkLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuX2ZldGNoRGF0YSgpKTtcbiAgfVxuXG4gIF9jbGVhckNvbXBsZXRlZCgpIHtcbiAgICB0aGlzLm9wcC5jYWxsQXBpKFwiUE9TVFwiLCBcInNob3BwaW5nX2xpc3QvY2xlYXJfY29tcGxldGVkXCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXBhbmVsLXNob3BwaW5nLWxpc3RcIiwgT3BQYW5lbFNob3BwaW5nTGlzdCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLDRaQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFOQTtBQUNBO0FBMk5BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=