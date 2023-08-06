(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["op-mfa-module-setup-flow"],{

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

/***/ "./src/panels/profile/op-mfa-module-setup-flow.js":
/*!********************************************************!*\
  !*** ./src/panels/profile/op-mfa-module-setup-flow.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _components_op_form_op_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/op-form/op-form */ "./src/components/op-form/op-form.ts");
/* harmony import */ var _components_op_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/op-markdown */ "./src/components/op-markdown.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");











let instance = 0;
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class OpMfaModuleSetupFlow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="op-style-dialog">
        .error {
          color: red;
        }
        op-paper-dialog {
          max-width: 500px;
        }
        op-markdown img:first-child:last-child,
        op-markdown svg:first-child:last-child {
          background-color: white;
          display: block;
          margin: 0 auto;
        }
        op-markdown a {
          color: var(--primary-color);
        }
        .init-spinner {
          padding: 10px 100px 34px;
          text-align: center;
        }
        .submit-spinner {
          margin-right: 16px;
        }
      </style>
      <op-paper-dialog
        id="dialog"
        with-backdrop=""
        opened="{{_opened}}"
        on-opened-changed="_openedChanged"
      >
        <h2>
          <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
            [[localize('ui.panel.profile.mfa_setup.title_aborted')]]
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
            [[localize('ui.panel.profile.mfa_setup.title_success')]]
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
            [[_computeStepTitle(localize, _step)]]
          </template>
        </h2>
        <paper-dialog-scrollable>
          <template is="dom-if" if="[[_errorMsg]]">
            <div class="error">[[_errorMsg]]</div>
          </template>
          <template is="dom-if" if="[[!_step]]">
            <div class="init-spinner">
              <paper-spinner active></paper-spinner>
            </div>
          </template>
          <template is="dom-if" if="[[_step]]">
            <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
              <op-markdown
                allowsvg
                content="[[_computeStepAbortedReason(localize, _step)]]"
              ></op-markdown>
            </template>

            <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
              <p>
                [[localize('ui.panel.profile.mfa_setup.step_done', 'step',
                _step.title)]]
              </p>
            </template>

            <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
              <template
                is="dom-if"
                if="[[_computeStepDescription(localize, _step)]]"
              >
                <op-markdown
                  allowsvg
                  content="[[_computeStepDescription(localize, _step)]]"
                ></op-markdown>
              </template>

              <op-form
                data="{{_stepData}}"
                schema="[[_step.data_schema]]"
                error="[[_step.errors]]"
                compute-label="[[_computeLabelCallback(localize, _step)]]"
                compute-error="[[_computeErrorCallback(localize, _step)]]"
              ></op-form>
            </template>
          </template>
        </paper-dialog-scrollable>
        <div class="buttons">
          <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
            <mwc-button on-click="_flowDone"
              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button
            >
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
            <mwc-button on-click="_flowDone"
              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button
            >
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
            <template is="dom-if" if="[[_loading]]">
              <div class="submit-spinner">
                <paper-spinner active></paper-spinner>
              </div>
            </template>
            <template is="dom-if" if="[[!_loading]]">
              <mwc-button on-click="_submitStep"
                >[[localize('ui.panel.profile.mfa_setup.submit')]]</mwc-button
              >
            </template>
          </template>
        </div>
      </op-paper-dialog>
    `;
  }

  static get properties() {
    return {
      _opp: Object,
      _dialogClosedCallback: Function,
      _instance: Number,
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
      _step: {
        type: Object,
        value: null
      },

      /*
       * Store user entered data.
       */
      _stepData: Object
    };
  }

  ready() {
    super.ready();
    this.addEventListener("keypress", ev => {
      if (ev.keyCode === 13) {
        this._submitStep();
      }
    });
  }

  showDialog({
    opp,
    continueFlowId,
    mfaModuleId,
    dialogClosedCallback
  }) {
    this.opp = opp;
    this._instance = instance++;
    this._dialogClosedCallback = dialogClosedCallback;
    this._createdFromHandler = !!mfaModuleId;
    this._loading = true;
    this._opened = true;
    const fetchStep = continueFlowId ? this.opp.callWS({
      type: "auth/setup_mfa",
      flow_id: continueFlowId
    }) : this.opp.callWS({
      type: "auth/setup_mfa",
      mfa_module_id: mfaModuleId
    });
    const curInstance = this._instance;
    fetchStep.then(step => {
      if (curInstance !== this._instance) return;

      this._processStep(step);

      this._loading = false; // When the flow changes, center the dialog.
      // Don't do it on each step or else the dialog keeps bouncing.

      setTimeout(() => this.$.dialog.center(), 0);
    });
  }

  _submitStep() {
    this._loading = true;
    this._errorMsg = null;
    const curInstance = this._instance;
    this.opp.callWS({
      type: "auth/setup_mfa",
      flow_id: this._step.flow_id,
      user_input: this._stepData
    }).then(step => {
      if (curInstance !== this._instance) return;

      this._processStep(step);

      this._loading = false;
    }, err => {
      this._errorMsg = err && err.body && err.body.message || "Unknown error occurred";
      this._loading = false;
    });
  }

  _processStep(step) {
    if (!step.errors) step.errors = {};
    this._step = step; // We got a new form if there are no errors.

    if (Object.keys(step.errors).length === 0) {
      this._stepData = {};
    }
  }

  _flowDone() {
    this._opened = false;
    const flowFinished = this._step && ["create_entry", "abort"].includes(this._step.type);

    if (this._step && !flowFinished && this._createdFromHandler) {// console.log('flow not finish');
    }

    this._dialogClosedCallback({
      flowFinished
    });

    this._errorMsg = null;
    this._step = null;
    this._stepData = {};
    this._dialogClosedCallback = null;
  }

  _equals(a, b) {
    return a === b;
  }

  _openedChanged(ev) {
    // Closed dialog by clicking on the overlay
    if (this._step && !ev.detail.value) {
      this._flowDone();
    }
  }

  _computeStepAbortedReason(localize, step) {
    return localize(`component.auth.mfa_setup.${step.handler}.abort.${step.reason}`);
  }

  _computeStepTitle(localize, step) {
    return localize(`component.auth.mfa_setup.${step.handler}.step.${step.step_id}.title`) || "Setup Multi-factor Authentication";
  }

  _computeStepDescription(localize, step) {
    const args = [`component.auth.mfa_setup.${step.handler}.step.${step.step_id}.description`];
    const placeholders = step.description_placeholders || {};
    Object.keys(placeholders).forEach(key => {
      args.push(key);
      args.push(placeholders[key]);
    });
    return localize(...args);
  }

  _computeLabelCallback(localize, step) {
    // Returns a callback for op-form to calculate labels per schema object
    return schema => localize(`component.auth.mfa_setup.${step.handler}.step.${step.step_id}.data.${schema.name}`) || schema.name;
  }

  _computeErrorCallback(localize, step) {
    // Returns a callback for op-form to calculate error messages
    return error => localize(`component.auth.mfa_setup.${step.handler}.error.${error}`) || error;
  }

}

customElements.define("op-mfa-module-setup-flow", OpMfaModuleSetupFlow);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3AtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvb3AtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XHJcbmltcG9ydCB7IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5cclxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcclxuXHJcbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXHJcbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xyXG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XHJcbiAgICByZXR1cm4gT3BJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxyXG4vLyBleHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZ1xyXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcclxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgXCJvcC1wYXBlci1kaWFsb2dcIjogT3BQYXBlckRpYWxvZztcclxuICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFwZXItZGlhbG9nXCIsIE9wUGFwZXJEaWFsb2cpO1xyXG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWZvcm0vb3AtZm9ybVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1tYXJrZG93blwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL29wLXN0eWxlXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxubGV0IGluc3RhbmNlID0gMDtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBPcE1mYU1vZHVsZVNldHVwRmxvdyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLXN0eWxlLWRpYWxvZ1wiPlxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLW1hcmtkb3duIGltZzpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkLFxuICAgICAgICBvcC1tYXJrZG93biBzdmc6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgb3AtbWFya2Rvd24gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5pbml0LXNwaW5uZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTAwcHggMzRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Ym1pdC1zcGlubmVyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8b3AtcGFwZXItZGlhbG9nXG4gICAgICAgIGlkPVwiZGlhbG9nXCJcbiAgICAgICAgd2l0aC1iYWNrZHJvcD1cIlwiXG4gICAgICAgIG9wZW5lZD1cInt7X29wZW5lZH19XCJcbiAgICAgICAgb24tb3BlbmVkLWNoYW5nZWQ9XCJfb3BlbmVkQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnYWJvcnQnKV1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYV9zZXR1cC50aXRsZV9hYm9ydGVkJyldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2NyZWF0ZV9lbnRyeScpXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLnRpdGxlX3N1Y2Nlc3MnKV1dXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgIFtbX2NvbXB1dGVTdGVwVGl0bGUobG9jYWxpemUsIF9zdGVwKV1dXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXJyb3JNc2ddXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+W1tfZXJyb3JNc2ddXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfc3RlcF1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc3RlcF1dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnYWJvcnQnKV1dXCI+XG4gICAgICAgICAgICAgIDxvcC1tYXJrZG93blxuICAgICAgICAgICAgICAgIGFsbG93c3ZnXG4gICAgICAgICAgICAgICAgY29udGVudD1cIltbX2NvbXB1dGVTdGVwQWJvcnRlZFJlYXNvbihsb2NhbGl6ZSwgX3N0ZXApXV1cIlxuICAgICAgICAgICAgICA+PC9vcC1tYXJrZG93bj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXF1YWxzKF9zdGVwLnR5cGUsICdjcmVhdGVfZW50cnknKV1dXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLnN0ZXBfZG9uZScsICdzdGVwJyxcbiAgICAgICAgICAgICAgICBfc3RlcC50aXRsZSldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVN0ZXBEZXNjcmlwdGlvbihsb2NhbGl6ZSwgX3N0ZXApXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wLW1hcmtkb3duXG4gICAgICAgICAgICAgICAgICBhbGxvd3N2Z1xuICAgICAgICAgICAgICAgICAgY29udGVudD1cIltbX2NvbXB1dGVTdGVwRGVzY3JpcHRpb24obG9jYWxpemUsIF9zdGVwKV1dXCJcbiAgICAgICAgICAgICAgICA+PC9vcC1tYXJrZG93bj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8b3AtZm9ybVxuICAgICAgICAgICAgICAgIGRhdGE9XCJ7e19zdGVwRGF0YX19XCJcbiAgICAgICAgICAgICAgICBzY2hlbWE9XCJbW19zdGVwLmRhdGFfc2NoZW1hXV1cIlxuICAgICAgICAgICAgICAgIGVycm9yPVwiW1tfc3RlcC5lcnJvcnNdXVwiXG4gICAgICAgICAgICAgICAgY29tcHV0ZS1sYWJlbD1cIltbX2NvbXB1dGVMYWJlbENhbGxiYWNrKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgICAgY29tcHV0ZS1lcnJvcj1cIltbX2NvbXB1dGVFcnJvckNhbGxiYWNrKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgID48L29wLWZvcm0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZmxvd0RvbmVcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuY2xvc2UnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnY3JlYXRlX2VudHJ5JyldXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZmxvd0RvbmVcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuY2xvc2UnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2xvYWRpbmddXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9zdWJtaXRTdGVwXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuc3VibWl0JyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX29wcDogT2JqZWN0LFxuICAgICAgX2RpYWxvZ0Nsb3NlZENhbGxiYWNrOiBGdW5jdGlvbixcbiAgICAgIF9pbnN0YW5jZTogTnVtYmVyLFxuXG4gICAgICBfbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvLyBFcnJvciBtZXNzYWdlIHdoZW4gY2FuJ3QgdGFsayB0byBzZXJ2ZXIgZXRjXG4gICAgICBfZXJyb3JNc2c6IFN0cmluZyxcblxuICAgICAgX29wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBfc3RlcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgLypcbiAgICAgICAqIFN0b3JlIHVzZXIgZW50ZXJlZCBkYXRhLlxuICAgICAgICovXG4gICAgICBfc3RlcERhdGE6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXYpID0+IHtcbiAgICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB0aGlzLl9zdWJtaXRTdGVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93RGlhbG9nKHsgb3BwLCBjb250aW51ZUZsb3dJZCwgbWZhTW9kdWxlSWQsIGRpYWxvZ0Nsb3NlZENhbGxiYWNrIH0pIHtcbiAgICB0aGlzLm9wcCA9IG9wcDtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlKys7XG4gICAgdGhpcy5fZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgPSBkaWFsb2dDbG9zZWRDYWxsYmFjaztcbiAgICB0aGlzLl9jcmVhdGVkRnJvbUhhbmRsZXIgPSAhIW1mYU1vZHVsZUlkO1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG5cbiAgICBjb25zdCBmZXRjaFN0ZXAgPSBjb250aW51ZUZsb3dJZFxuICAgICAgPyB0aGlzLm9wcC5jYWxsV1Moe1xuICAgICAgICAgIHR5cGU6IFwiYXV0aC9zZXR1cF9tZmFcIixcbiAgICAgICAgICBmbG93X2lkOiBjb250aW51ZUZsb3dJZCxcbiAgICAgICAgfSlcbiAgICAgIDogdGhpcy5vcHAuY2FsbFdTKHtcbiAgICAgICAgICB0eXBlOiBcImF1dGgvc2V0dXBfbWZhXCIsXG4gICAgICAgICAgbWZhX21vZHVsZV9pZDogbWZhTW9kdWxlSWQsXG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcblxuICAgIGZldGNoU3RlcC50aGVuKChzdGVwKSA9PiB7XG4gICAgICBpZiAoY3VySW5zdGFuY2UgIT09IHRoaXMuX2luc3RhbmNlKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gV2hlbiB0aGUgZmxvdyBjaGFuZ2VzLCBjZW50ZXIgdGhlIGRpYWxvZy5cbiAgICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuJC5kaWFsb2cuY2VudGVyKCksIDApO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1Ym1pdFN0ZXAoKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fZXJyb3JNc2cgPSBudWxsO1xuXG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcblxuICAgIHRoaXMub3BwXG4gICAgICAuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJhdXRoL3NldHVwX21mYVwiLFxuICAgICAgICBmbG93X2lkOiB0aGlzLl9zdGVwLmZsb3dfaWQsXG4gICAgICAgIHVzZXJfaW5wdXQ6IHRoaXMuX3N0ZXBEYXRhLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoc3RlcCkgPT4ge1xuICAgICAgICAgIGlmIChjdXJJbnN0YW5jZSAhPT0gdGhpcy5faW5zdGFuY2UpIHJldHVybjtcblxuICAgICAgICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuX2Vycm9yTXNnID1cbiAgICAgICAgICAgIChlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZSkgfHwgXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgX3Byb2Nlc3NTdGVwKHN0ZXApIHtcbiAgICBpZiAoIXN0ZXAuZXJyb3JzKSBzdGVwLmVycm9ycyA9IHt9O1xuICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICAgIC8vIFdlIGdvdCBhIG5ldyBmb3JtIGlmIHRoZXJlIGFyZSBubyBlcnJvcnMuXG4gICAgaWYgKE9iamVjdC5rZXlzKHN0ZXAuZXJyb3JzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX3N0ZXBEYXRhID0ge307XG4gICAgfVxuICB9XG5cbiAgX2Zsb3dEb25lKCkge1xuICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgIGNvbnN0IGZsb3dGaW5pc2hlZCA9XG4gICAgICB0aGlzLl9zdGVwICYmIFtcImNyZWF0ZV9lbnRyeVwiLCBcImFib3J0XCJdLmluY2x1ZGVzKHRoaXMuX3N0ZXAudHlwZSk7XG5cbiAgICBpZiAodGhpcy5fc3RlcCAmJiAhZmxvd0ZpbmlzaGVkICYmIHRoaXMuX2NyZWF0ZWRGcm9tSGFuZGxlcikge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Zsb3cgbm90IGZpbmlzaCcpO1xuICAgIH1cblxuICAgIHRoaXMuX2RpYWxvZ0Nsb3NlZENhbGxiYWNrKHtcbiAgICAgIGZsb3dGaW5pc2hlZCxcbiAgICB9KTtcblxuICAgIHRoaXMuX2Vycm9yTXNnID0gbnVsbDtcbiAgICB0aGlzLl9zdGVwID0gbnVsbDtcbiAgICB0aGlzLl9zdGVwRGF0YSA9IHt9O1xuICAgIHRoaXMuX2RpYWxvZ0Nsb3NlZENhbGxiYWNrID0gbnVsbDtcbiAgfVxuXG4gIF9lcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQoZXYpIHtcbiAgICAvLyBDbG9zZWQgZGlhbG9nIGJ5IGNsaWNraW5nIG9uIHRoZSBvdmVybGF5XG4gICAgaWYgKHRoaXMuX3N0ZXAgJiYgIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgdGhpcy5fZmxvd0RvbmUoKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVN0ZXBBYm9ydGVkUmVhc29uKGxvY2FsaXplLCBzdGVwKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uYWJvcnQuJHtzdGVwLnJlYXNvbn1gXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RlcFRpdGxlKGxvY2FsaXplLCBzdGVwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LmF1dGgubWZhX3NldHVwLiR7c3RlcC5oYW5kbGVyfS5zdGVwLiR7c3RlcC5zdGVwX2lkfS50aXRsZWBcbiAgICAgICkgfHwgXCJTZXR1cCBNdWx0aS1mYWN0b3IgQXV0aGVudGljYXRpb25cIlxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVN0ZXBEZXNjcmlwdGlvbihsb2NhbGl6ZSwgc3RlcCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICBgY29tcG9uZW50LmF1dGgubWZhX3NldHVwLiR7c3RlcC5oYW5kbGVyfS5zdGVwLiR7c3RlcC5zdGVwX2lkfS5kZXNjcmlwdGlvbmAsXG4gICAgXTtcbiAgICBjb25zdCBwbGFjZWhvbGRlcnMgPSBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVycyB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhwbGFjZWhvbGRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgYXJncy5wdXNoKGtleSk7XG4gICAgICBhcmdzLnB1c2gocGxhY2Vob2xkZXJzW2tleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbGl6ZSguLi5hcmdzKTtcbiAgfVxuXG4gIF9jb21wdXRlTGFiZWxDYWxsYmFjayhsb2NhbGl6ZSwgc3RlcCkge1xuICAgIC8vIFJldHVybnMgYSBjYWxsYmFjayBmb3Igb3AtZm9ybSB0byBjYWxjdWxhdGUgbGFiZWxzIHBlciBzY2hlbWEgb2JqZWN0XG4gICAgcmV0dXJuIChzY2hlbWEpID0+XG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGF0YS4ke3NjaGVtYS5uYW1lfWBcbiAgICAgICkgfHwgc2NoZW1hLm5hbWU7XG4gIH1cblxuICBfY29tcHV0ZUVycm9yQ2FsbGJhY2sobG9jYWxpemUsIHN0ZXApIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIG9wLWZvcm0gdG8gY2FsY3VsYXRlIGVycm9yIG1lc3NhZ2VzXG4gICAgcmV0dXJuIChlcnJvcikgPT5cbiAgICAgIGxvY2FsaXplKGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LmVycm9yLiR7ZXJyb3J9YCkgfHxcbiAgICAgIGVycm9yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLW1mYS1tb2R1bGUtc2V0dXAtZmxvd1wiLCBPcE1mYU1vZHVsZVNldHVwRmxvdyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBdFNBO0FBQ0E7QUF1U0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==