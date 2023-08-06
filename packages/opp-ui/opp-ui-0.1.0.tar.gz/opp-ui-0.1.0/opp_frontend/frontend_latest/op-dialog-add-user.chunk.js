(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["op-dialog-add-user"],{

/***/ "./src/components/dialog/op-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/op-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: OpIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIronFocusablesHelper", function() { return OpIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const OpIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/op-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/op-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: OpPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPaperDialog", function() { return OpPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-iron-focusables-helper.js */ "./src/components/dialog/op-iron-focusables-helper.js");


 // tslint:disable-next-line

const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["OpIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class OpPaperDialog extends paperDialogClass {}
// @ts-ignore

class OpPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
customElements.define("op-paper-dialog", OpPaperDialog);

/***/ }),

/***/ "./src/panels/config/users/op-dialog-add-user.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/users/op-dialog-add-user.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







/*
 * @appliesMixin LocalizeMixin
 */

class OpDialogAddUser extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="op-style-dialog">
        .error {
          color: red;
        }
        op-paper-dialog {
          max-width: 500px;
        }
        .username {
          margin-top: -8px;
        }
      </style>
      <op-paper-dialog
        id="dialog"
        with-backdrop
        opened="{{_opened}}"
        on-opened-changed="_openedChanged"
      >
        <h2>[[localize('ui.panel.config.users.add_user.caption')]]</h2>
        <div>
          <template is="dom-if" if="[[_errorMsg]]">
            <div class="error">[[_errorMsg]]</div>
          </template>
          <paper-input
            class="name"
            label="[[localize('ui.panel.config.users.add_user.name')]]"
            value="{{_name}}"
            required
            auto-validate
            autocapitalize="on"
            error-message="Required"
            on-blur="_maybePopulateUsername"
          ></paper-input>
          <paper-input
            class="username"
            label="[[localize('ui.panel.config.users.add_user.username')]]"
            value="{{_username}}"
            required
            auto-validate
            autocapitalize="none"
            error-message="Required"
          ></paper-input>
          <paper-input
            label="[[localize('ui.panel.config.users.add_user.password')]]"
            type="password"
            value="{{_password}}"
            required
            auto-validate
            error-message="Required"
          ></paper-input>
        </div>
        <div class="buttons">
          <template is="dom-if" if="[[_loading]]">
            <div class="submit-spinner">
              <paper-spinner active></paper-spinner>
            </div>
          </template>
          <template is="dom-if" if="[[!_loading]]">
            <mwc-button on-click="_createUser"
              >[[localize('ui.panel.config.users.add_user.create')]]</mwc-button
            >
          </template>
        </div>
      </op-paper-dialog>
    `;
  }

  static get properties() {
    return {
      _opp: Object,
      _dialogClosedCallback: Function,
      _loading: {
        type: Boolean,
        value: false
      },
      // Error message when can't talk to server etc
      _errorMsg: String,
      _opened: {
        type: Boolean,
        value: false
      },
      _name: String,
      _username: String,
      _password: String
    };
  }

  ready() {
    super.ready();
    this.addEventListener("keypress", ev => {
      if (ev.keyCode === 13) {
        this._createUser(ev);
      }
    });
  }

  showDialog({
    opp,
    dialogClosedCallback
  }) {
    this.opp = opp;
    this._dialogClosedCallback = dialogClosedCallback;
    this._loading = false;
    this._opened = true;
    setTimeout(() => this.shadowRoot.querySelector("paper-input").focus(), 0);
  }

  _maybePopulateUsername() {
    if (this._username) return;

    const parts = this._name.split(" ");

    if (parts.length) {
      this._username = parts[0].toLowerCase();
    }
  }

  async _createUser(ev) {
    ev.preventDefault();
    if (!this._name || !this._username || !this._password) return;
    this._loading = true;
    this._errorMsg = null;
    let userId;

    try {
      const userResponse = await this.opp.callWS({
        type: "config/auth/create",
        name: this._name
      });
      userId = userResponse.user.id;
    } catch (err) {
      this._loading = false;
      this._errorMsg = err.code;
      return;
    }

    try {
      await this.opp.callWS({
        type: "config/auth_provider/openpeerpower/create",
        user_id: userId,
        username: this._username,
        password: this._password
      });
    } catch (err) {
      this._loading = false;
      this._errorMsg = err.code;
      await this.opp.callWS({
        type: "config/auth/delete",
        user_id: userId
      });
      return;
    }

    this._dialogDone(userId);
  }

  _dialogDone(userId) {
    this._dialogClosedCallback({
      userId
    });

    this.setProperties({
      _errorMsg: null,
      _username: "",
      _password: "",
      _dialogClosedCallback: null,
      _opened: false
    });
  }

  _equals(a, b) {
    return a === b;
  }

  _openedChanged(ev) {
    // Closed dialog by clicking on the overlay
    // Check against dialogClosedCallback to make sure we didn't change
    // programmatically
    if (this._dialogClosedCallback && !ev.detail.value) {
      this._dialogDone();
    }
  }

}

customElements.define("op-dialog-add-user", OpDialogAddUser);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3AtZGlhbG9nLWFkZC11c2VyLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9vcC1kaWFsb2ctYWRkLXVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL29wLXN0eWxlXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBPcERpYWxvZ0FkZFVzZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLXN0eWxlLWRpYWxvZ1wiPlxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC51c2VybmFtZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxvcC1wYXBlci1kaWFsb2dcbiAgICAgICAgaWQ9XCJkaWFsb2dcIlxuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZD1cInt7X29wZW5lZH19XCJcbiAgICAgICAgb24tb3BlbmVkLWNoYW5nZWQ9XCJfb3BlbmVkQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxoMj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMuYWRkX3VzZXIuY2FwdGlvbicpXV08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXJyb3JNc2ddXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+W1tfZXJyb3JNc2ddXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBjbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMuYWRkX3VzZXIubmFtZScpXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e19uYW1lfX1cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwib25cIlxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgIG9uLWJsdXI9XCJfbWF5YmVQb3B1bGF0ZVVzZXJuYW1lXCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGNsYXNzPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMuYWRkX3VzZXIudXNlcm5hbWUnKV1dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tfdXNlcm5hbWV9fVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgYXV0by12YWxpZGF0ZVxuICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5hZGRfdXNlci5wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tfcGFzc3dvcmR9fVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgYXV0by12YWxpZGF0ZVxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19sb2FkaW5nXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9sb2FkaW5nXV1cIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NyZWF0ZVVzZXJcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLmFkZF91c2VyLmNyZWF0ZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9vcHA6IE9iamVjdCxcbiAgICAgIF9kaWFsb2dDbG9zZWRDYWxsYmFjazogRnVuY3Rpb24sXG5cbiAgICAgIF9sb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIEVycm9yIG1lc3NhZ2Ugd2hlbiBjYW4ndCB0YWxrIHRvIHNlcnZlciBldGNcbiAgICAgIF9lcnJvck1zZzogU3RyaW5nLFxuXG4gICAgICBfb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIF9uYW1lOiBTdHJpbmcsXG4gICAgICBfdXNlcm5hbWU6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldikgPT4ge1xuICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVVzZXIoZXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0RpYWxvZyh7IG9wcCwgZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgfSkge1xuICAgIHRoaXMub3BwID0gb3BwO1xuICAgIHRoaXMuX2RpYWxvZ0Nsb3NlZENhbGxiYWNrID0gZGlhbG9nQ2xvc2VkQ2FsbGJhY2s7XG4gICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInBhcGVyLWlucHV0XCIpLmZvY3VzKCksIDApO1xuICB9XG5cbiAgX21heWJlUG9wdWxhdGVVc2VybmFtZSgpIHtcbiAgICBpZiAodGhpcy5fdXNlcm5hbWUpIHJldHVybjtcblxuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5fbmFtZS5zcGxpdChcIiBcIik7XG5cbiAgICBpZiAocGFydHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl91c2VybmFtZSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2NyZWF0ZVVzZXIoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5fbmFtZSB8fCAhdGhpcy5fdXNlcm5hbWUgfHwgIXRoaXMuX3Bhc3N3b3JkKSByZXR1cm47XG5cbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9lcnJvck1zZyA9IG51bGw7XG5cbiAgICBsZXQgdXNlcklkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMub3BwLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICB9KTtcbiAgICAgIHVzZXJJZCA9IHVzZXJSZXNwb25zZS51c2VyLmlkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXJyb3JNc2cgPSBlcnIuY29kZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5vcHAuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJjb25maWcvYXV0aF9wcm92aWRlci9vcGVucGVlcnBvd2VyL2NyZWF0ZVwiLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLl91c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IGVyci5jb2RlO1xuICAgICAgYXdhaXQgdGhpcy5vcHAuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJjb25maWcvYXV0aC9kZWxldGVcIixcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZGlhbG9nRG9uZSh1c2VySWQpO1xuICB9XG5cbiAgX2RpYWxvZ0RvbmUodXNlcklkKSB7XG4gICAgdGhpcy5fZGlhbG9nQ2xvc2VkQ2FsbGJhY2soeyB1c2VySWQgfSk7XG5cbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX2Vycm9yTXNnOiBudWxsLFxuICAgICAgX3VzZXJuYW1lOiBcIlwiLFxuICAgICAgX3Bhc3N3b3JkOiBcIlwiLFxuICAgICAgX2RpYWxvZ0Nsb3NlZENhbGxiYWNrOiBudWxsLFxuICAgICAgX29wZW5lZDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKGV2KSB7XG4gICAgLy8gQ2xvc2VkIGRpYWxvZyBieSBjbGlja2luZyBvbiB0aGUgb3ZlcmxheVxuICAgIC8vIENoZWNrIGFnYWluc3QgZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgdG8gbWFrZSBzdXJlIHdlIGRpZG4ndCBjaGFuZ2VcbiAgICAvLyBwcm9ncmFtbWF0aWNhbGx5XG4gICAgaWYgKHRoaXMuX2RpYWxvZ0Nsb3NlZENhbGxiYWNrICYmICFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ0RvbmUoKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtZGlhbG9nLWFkZC11c2VyXCIsIE9wRGlhbG9nQWRkVXNlcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6TEE7QUFDQTtBQTBMQTs7OztBIiwic291cmNlUm9vdCI6IiJ9