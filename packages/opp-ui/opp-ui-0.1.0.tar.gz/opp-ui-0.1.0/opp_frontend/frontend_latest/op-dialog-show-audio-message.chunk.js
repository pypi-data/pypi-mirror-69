(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["op-dialog-show-audio-message"],{

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

/***/ "./src/panels/mailbox/op-dialog-show-audio-message.js":
/*!************************************************************!*\
  !*** ./src/panels/mailbox/op-dialog-show-audio-message.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







/*
 * @appliesMixin LocalizeMixin
 */

class OpDialogShowAudioMessage extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="op-style-dialog">
        .error {
          color: red;
        }
        @media all and (max-width: 500px) {
          op-paper-dialog {
            margin: 0;
            width: 100%;
            max-height: calc(100% - 64px);

            position: fixed !important;
            bottom: 0px;
            left: 0px;
            right: 0px;
            overflow: scroll;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          }
        }

        op-paper-dialog {
          border-radius: 2px;
        }
        op-paper-dialog p {
          color: var(--secondary-text-color);
        }

        .icon {
          float: right;
        }
      </style>
      <op-paper-dialog
        id="mp3dialog"
        with-backdrop
        opened="{{_opened}}"
        on-opened-changed="_openedChanged"
      >
        <h2>
          [[localize('ui.panel.mailbox.playback_title')]]
          <div class="icon">
            <template is="dom-if" if="[[_loading]]">
              <paper-spinner active></paper-spinner>
            </template>
            <paper-icon-button
              id="delicon"
              on-click="openDeleteDialog"
              icon="opp:delete"
            ></paper-icon-button>
          </div>
        </h2>
        <div id="transcribe"></div>
        <div>
          <template is="dom-if" if="[[_errorMsg]]">
            <div class="error">[[_errorMsg]]</div>
          </template>
          <audio id="mp3" preload="none" controls>
            <source id="mp3src" src="" type="audio/mpeg" />
          </audio>
        </div>
      </op-paper-dialog>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      _currentMessage: Object,
      // Error message when can't talk to server etc
      _errorMsg: String,
      _loading: {
        type: Boolean,
        value: false
      },
      _opened: {
        type: Boolean,
        value: false
      }
    };
  }

  showDialog({
    opp,
    message
  }) {
    this.opp = opp;
    this._errorMsg = null;
    this._currentMessage = message;
    this._opened = true;
    this.$.transcribe.innerText = message.message;
    const platform = message.platform;
    const mp3 = this.$.mp3;

    if (platform.has_media) {
      mp3.style.display = "";

      this._showLoading(true);

      mp3.src = null;
      const url = `/api/mailbox/media/${platform.name}/${message.sha}`;
      this.opp.fetchWithAuth(url).then(response => {
        if (response.ok) {
          return response.blob();
        }

        return Promise.reject({
          status: response.status,
          statusText: response.statusText
        });
      }).then(blob => {
        this._showLoading(false);

        mp3.src = window.URL.createObjectURL(blob);
        mp3.play();
      }).catch(err => {
        this._showLoading(false);

        this._errorMsg = `Error loading audio: ${err.statusText}`;
      });
    } else {
      mp3.style.display = "none";

      this._showLoading(false);
    }
  }

  openDeleteDialog() {
    if (confirm(this.localize("ui.panel.mailbox.delete_prompt"))) {
      this.deleteSelected();
    }
  }

  deleteSelected() {
    const msg = this._currentMessage;
    this.opp.callApi("DELETE", `mailbox/delete/${msg.platform.name}/${msg.sha}`);

    this._dialogDone();
  }

  _dialogDone() {
    this.$.mp3.pause();
    this.setProperties({
      _currentMessage: null,
      _errorMsg: null,
      _loading: false,
      _opened: false
    });
  }

  _openedChanged(ev) {
    // Closed dialog by clicking on the overlay
    // Check against dialogClosedCallback to make sure we didn't change
    // programmatically
    if (!ev.detail.value) {
      this._dialogDone();
    }
  }

  _showLoading(displayed) {
    const delicon = this.$.delicon;

    if (displayed) {
      this._loading = true;
      delicon.style.display = "none";
    } else {
      const platform = this._currentMessage.platform;
      this._loading = false;
      delicon.style.display = platform.can_delete ? "" : "none";
    }
  }

}

customElements.define("op-dialog-show-audio-message", OpDialogShowAudioMessage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3AtZGlhbG9nLXNob3ctYXVkaW8tbWVzc2FnZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9tYWlsYm94L29wLWRpYWxvZy1zaG93LWF1ZGlvLW1lc3NhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XHJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XHJcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XHJcblxyXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XHJcblxyXG4vKlxyXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cclxuICovXHJcbmNsYXNzIE9wRGlhbG9nU2hvd0F1ZGlvTWVzc2FnZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcclxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwib3Atc3R5bGUtZGlhbG9nXCI+XHJcbiAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcC1wYXBlci1kaWFsb2cgcCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPG9wLXBhcGVyLWRpYWxvZ1xyXG4gICAgICAgIGlkPVwibXAzZGlhbG9nXCJcclxuICAgICAgICB3aXRoLWJhY2tkcm9wXHJcbiAgICAgICAgb3BlbmVkPVwie3tfb3BlbmVkfX1cIlxyXG4gICAgICAgIG9uLW9wZW5lZC1jaGFuZ2VkPVwiX29wZW5lZENoYW5nZWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwubWFpbGJveC5wbGF5YmFja190aXRsZScpXV1cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XHJcbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxpY29uXCJcclxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9wZW5EZWxldGVEaWFsb2dcIlxyXG4gICAgICAgICAgICAgIGljb249XCJvcHA6ZGVsZXRlXCJcclxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0cmFuc2NyaWJlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXJyb3JNc2ddXVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW19lcnJvck1zZ11dPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPGF1ZGlvIGlkPVwibXAzXCIgcHJlbG9hZD1cIm5vbmVcIiBjb250cm9scz5cclxuICAgICAgICAgICAgPHNvdXJjZSBpZD1cIm1wM3NyY1wiIHNyYz1cIlwiIHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wcDogT2JqZWN0LFxyXG5cclxuICAgICAgX2N1cnJlbnRNZXNzYWdlOiBPYmplY3QsXHJcblxyXG4gICAgICAvLyBFcnJvciBtZXNzYWdlIHdoZW4gY2FuJ3QgdGFsayB0byBzZXJ2ZXIgZXRjXHJcbiAgICAgIF9lcnJvck1zZzogU3RyaW5nLFxyXG5cclxuICAgICAgX2xvYWRpbmc6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIF9vcGVuZWQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzaG93RGlhbG9nKHsgb3BwLCBtZXNzYWdlIH0pIHtcclxuICAgIHRoaXMub3BwID0gb3BwO1xyXG4gICAgdGhpcy5fZXJyb3JNc2cgPSBudWxsO1xyXG4gICAgdGhpcy5fY3VycmVudE1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcclxuICAgIHRoaXMuJC50cmFuc2NyaWJlLmlubmVyVGV4dCA9IG1lc3NhZ2UubWVzc2FnZTtcclxuICAgIGNvbnN0IHBsYXRmb3JtID0gbWVzc2FnZS5wbGF0Zm9ybTtcclxuICAgIGNvbnN0IG1wMyA9IHRoaXMuJC5tcDM7XHJcbiAgICBpZiAocGxhdGZvcm0uaGFzX21lZGlhKSB7XHJcbiAgICAgIG1wMy5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgdGhpcy5fc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIG1wMy5zcmMgPSBudWxsO1xyXG4gICAgICBjb25zdCB1cmwgPSBgL2FwaS9tYWlsYm94L21lZGlhLyR7cGxhdGZvcm0ubmFtZX0vJHttZXNzYWdlLnNoYX1gO1xyXG4gICAgICB0aGlzLm9wcFxyXG4gICAgICAgIC5mZXRjaFdpdGhBdXRoKHVybClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChibG9iKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBtcDMuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICBtcDMucGxheSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3Nob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuX2Vycm9yTXNnID0gYEVycm9yIGxvYWRpbmcgYXVkaW86ICR7ZXJyLnN0YXR1c1RleHR9YDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1wMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMuX3Nob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EZWxldGVEaWFsb2coKSB7XHJcbiAgICBpZiAoY29uZmlybSh0aGlzLmxvY2FsaXplKFwidWkucGFuZWwubWFpbGJveC5kZWxldGVfcHJvbXB0XCIpKSkge1xyXG4gICAgICB0aGlzLmRlbGV0ZVNlbGVjdGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVTZWxlY3RlZCgpIHtcclxuICAgIGNvbnN0IG1zZyA9IHRoaXMuX2N1cnJlbnRNZXNzYWdlO1xyXG4gICAgdGhpcy5vcHAuY2FsbEFwaShcclxuICAgICAgXCJERUxFVEVcIixcclxuICAgICAgYG1haWxib3gvZGVsZXRlLyR7bXNnLnBsYXRmb3JtLm5hbWV9LyR7bXNnLnNoYX1gXHJcbiAgICApO1xyXG4gICAgdGhpcy5fZGlhbG9nRG9uZSgpO1xyXG4gIH1cclxuXHJcbiAgX2RpYWxvZ0RvbmUoKSB7XHJcbiAgICB0aGlzLiQubXAzLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xyXG4gICAgICBfY3VycmVudE1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIF9lcnJvck1zZzogbnVsbCxcclxuICAgICAgX2xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBfb3BlbmVkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX29wZW5lZENoYW5nZWQoZXYpIHtcclxuICAgIC8vIENsb3NlZCBkaWFsb2cgYnkgY2xpY2tpbmcgb24gdGhlIG92ZXJsYXlcclxuICAgIC8vIENoZWNrIGFnYWluc3QgZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgdG8gbWFrZSBzdXJlIHdlIGRpZG4ndCBjaGFuZ2VcclxuICAgIC8vIHByb2dyYW1tYXRpY2FsbHlcclxuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ0RvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zaG93TG9hZGluZyhkaXNwbGF5ZWQpIHtcclxuICAgIGNvbnN0IGRlbGljb24gPSB0aGlzLiQuZGVsaWNvbjtcclxuICAgIGlmIChkaXNwbGF5ZWQpIHtcclxuICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRlbGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLl9jdXJyZW50TWVzc2FnZS5wbGF0Zm9ybTtcclxuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkZWxpY29uLnN0eWxlLmRpc3BsYXkgPSBwbGF0Zm9ybS5jYW5fZGVsZXRlID8gXCJcIiA6IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1kaWFsb2ctc2hvdy1hdWRpby1tZXNzYWdlXCIsIE9wRGlhbG9nU2hvd0F1ZGlvTWVzc2FnZSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0tBO0FBQ0E7QUEyS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==