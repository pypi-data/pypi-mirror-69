(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["op-voice-command-dialog"],{

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/**
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function () {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function () {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function () {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function () {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});

/***/ }),

/***/ "./src/common/dom/speech-recognition.ts":
/*!**********************************************!*\
  !*** ./src/common/dom/speech-recognition.ts ***!
  \**********************************************/
/*! exports provided: SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognition", function() { return SpeechRecognition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechGrammarList", function() { return SpeechGrammarList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionEvent", function() { return SpeechRecognitionEvent; });
/* tslint:disable */
// @ts-ignore
const SpeechRecognition = // @ts-ignore
window.SpeechRecognition || window.webkitSpeechRecognition; // @ts-ignore

const SpeechGrammarList = // @ts-ignore
window.SpeechGrammarList || window.webkitSpeechGrammarList; // @ts-ignore

const SpeechRecognitionEvent = // @ts-ignore
window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
/* tslint:enable */

/***/ }),

/***/ "./src/common/util/uid.ts":
/*!********************************!*\
  !*** ./src/common/util/uid.ts ***!
  \********************************/
/*! exports provided: uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function uid() {
  return s4() + s4() + s4() + s4() + s4();
}

/***/ }),

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

/***/ "./src/data/conversation.ts":
/*!**********************************!*\
  !*** ./src/data/conversation.ts ***!
  \**********************************/
/*! exports provided: processText, getAgentInfo, setConversationOnboarding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processText", function() { return processText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAgentInfo", function() { return getAgentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConversationOnboarding", function() { return setConversationOnboarding; });
const processText = (opp, text, conversation_id) => opp.callWS({
  type: "conversation/process",
  text,
  conversation_id
});
const getAgentInfo = opp => opp.callWS({
  type: "conversation/agent/info"
});
const setConversationOnboarding = (opp, value) => opp.callWS({
  type: "conversation/onboarding/set",
  shown: value
});

/***/ }),

/***/ "./src/dialogs/voice-command-dialog/op-voice-command-dialog.ts":
/*!*********************************************************************!*\
  !*** ./src/dialogs/voice-command-dialog/op-voice-command-dialog.ts ***!
  \*********************************************************************/
/*! exports provided: OpUoiceCommandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpUoiceCommandDialog", function() { return OpUoiceCommandDialog; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/speech-recognition */ "./src/common/dom/speech-recognition.ts");
/* harmony import */ var _data_conversation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/conversation */ "./src/data/conversation.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_util_uid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/util/uid */ "./src/common/util/uid.ts");
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










 // tslint:disable-next-line


let OpUoiceCommandDialog = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("op-voice-command-dialog")], function (_initialize, _LitElement) {
  class OpUoiceCommandDialog extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpUoiceCommandDialog,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "results",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_conversation",

      value() {
        return [{
          who: "opp",
          text: ""
        }];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_opened",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_agentInfo",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#messages")],
      key: "messages",
      value: void 0
    }, {
      kind: "field",
      key: "recognition",
      value: void 0
    }, {
      kind: "field",
      key: "_conversationId",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog() {
        this._opened = true;

        if (_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"]) {
          this._startListening();
        }

        this._agentInfo = await Object(_data_conversation__WEBPACK_IMPORTED_MODULE_7__["getAgentInfo"])(this.opp);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        // CSS custom property mixins only work in render https://github.com/Polymer/lit-element/issues/633
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        paper-dialog-scrollable {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: auto;
            max-height: 50vh !important;
          }
        }

        paper-dialog-scrollable.can-scroll {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: touch;
            max-height: 50vh !important;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          paper-dialog-scrollable {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: auto;
              max-height: calc(100vh - 175px) !important;
            }
          }

          paper-dialog-scrollable.can-scroll {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: touch;
              max-height: calc(100vh - 175px) !important;
            }
          }
        }
      </style>
      <op-paper-dialog
        with-backdrop
        .opened=${this._opened}
        @opened-changed=${this._openedChanged}
      >
        ${this._agentInfo && this._agentInfo.onboarding ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="onboarding">
                ${this._agentInfo.onboarding.text}
                <div class="side-by-side" @click=${this._completeOnboarding}>
                  <a
                    class="button"
                    href="${this._agentInfo.onboarding.url}"
                    target="_blank"
                    ><mwc-button unelevated>Yes!</mwc-button></a
                  >
                  <mwc-button outlined>No</mwc-button>
                </div>
              </div>
            ` : ""}
        <paper-dialog-scrollable
          id="messages"
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__["classMap"])({
          "top-border": Boolean(this._agentInfo && this._agentInfo.onboarding)
        })}
        >
          ${this._conversation.map(message => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="${this._computeMessageClasses(message)}">
                ${message.text}
              </div>
            `)}
          ${this.results ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <div class="message user">
                  <span
                    class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__["classMap"])({
          interimTranscript: !this.results.final
        })}
                    >${this.results.transcript}</span
                  >${!this.results.final ? "…" : ""}
                </div>
              ` : ""}
        </paper-dialog-scrollable>
        <div class="input">
          <paper-input
            @keyup=${this._handleKeyUp}
            label="${this.opp.localize(`ui.dialogs.voice_command.${_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"] ? "label_voice" : "label"}`)}"
            autofocus
          >
            ${_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"] ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <span suffix="" slot="suffix">
                    ${this.results ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                          <div class="bouncer">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                          </div>
                        ` : ""}
                    <paper-icon-button
                      .active=${Boolean(this.results)}
                      icon="opp:microphone"
                      @click=${this._toggleListening}
                    >
                    </paper-icon-button>
                  </span>
                ` : ""}
          </paper-input>
          ${this._agentInfo && this._agentInfo.attribution ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <a
                  href=${this._agentInfo.attribution.url}
                  class="attribution"
                  target="_blank"
                  >${this._agentInfo.attribution.name}</a
                >
              ` : ""}
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpUoiceCommandDialog.prototype), "updated", this).call(this, changedProps);

        this._conversationId = Object(_common_util_uid__WEBPACK_IMPORTED_MODULE_10__["uid"])();
        this._conversation = [{
          who: "opp",
          text: this.opp.localize("ui.dialogs.voice_command.how_can_i_help")
        }];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpUoiceCommandDialog.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("_conversation") || changedProps.has("results")) {
          this._scrollMessagesBottom();
        }
      }
    }, {
      kind: "method",
      key: "_addMessage",
      value: function _addMessage(message) {
        this._conversation = [...this._conversation, message];
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        const input = ev.target;

        if (ev.keyCode === 13 && input.value) {
          this._processText(input.value);

          input.value = "";
        }
      }
    }, {
      kind: "method",
      key: "_completeOnboarding",
      value: function _completeOnboarding() {
        Object(_data_conversation__WEBPACK_IMPORTED_MODULE_7__["setConversationOnboarding"])(this.opp, true);
        this._agentInfo = Object.assign({}, this._agentInfo, {
          onboarding: undefined
        });
      }
    }, {
      kind: "method",
      key: "_initRecognition",
      value: function _initRecognition() {
        this.recognition = new _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"]();
        this.recognition.interimResults = true;
        this.recognition.lang = "en-US";

        this.recognition.onstart = () => {
          this.results = {
            final: false,
            transcript: ""
          };
        };

        this.recognition.onerror = event => {
          this.recognition.abort();

          if (event.error !== "aborted") {
            const text = this.results && this.results.transcript ? this.results.transcript : `<${this.opp.localize("ui.dialogs.voice_command.did_not_hear")}>`;

            this._addMessage({
              who: "user",
              text,
              error: true
            });
          }

          this.results = null;
        };

        this.recognition.onend = () => {
          // Already handled by onerror
          if (this.results == null) {
            return;
          }

          const text = this.results.transcript;
          this.results = null;

          if (text) {
            this._processText(text);
          } else {
            this._addMessage({
              who: "user",
              text: `<${this.opp.localize("ui.dialogs.voice_command.did_not_hear")}>`,
              error: true
            });
          }
        };

        this.recognition.onresult = event => {
          const result = event.results[0];
          this.results = {
            transcript: result[0].transcript,
            final: result.isFinal
          };
        };
      }
    }, {
      kind: "method",
      key: "_processText",
      value: async function _processText(text) {
        if (this.recognition) {
          this.recognition.abort();
        }

        this._addMessage({
          who: "user",
          text
        });

        const message = {
          who: "opp",
          text: "…"
        }; // To make sure the answer is placed at the right user text, we add it before we process it

        this._addMessage(message);

        try {
          const response = await Object(_data_conversation__WEBPACK_IMPORTED_MODULE_7__["processText"])(this.opp, text, this._conversationId);
          const plain = response.speech.plain;
          message.text = plain.speech;
          this.requestUpdate("_conversation");
        } catch {
          message.text = this.opp.localize("ui.dialogs.voice_command.error");
          message.error = true;
          this.requestUpdate("_conversation");
        }
      }
    }, {
      kind: "method",
      key: "_toggleListening",
      value: function _toggleListening() {
        if (!this.results) {
          this._startListening();
        } else {
          this.recognition.stop();
        }
      }
    }, {
      kind: "method",
      key: "_startListening",
      value: function _startListening() {
        if (!this.recognition) {
          this._initRecognition();
        }

        if (this.results) {
          return;
        }

        this.results = {
          transcript: "",
          final: false
        };
        this.recognition.start();
      }
    }, {
      kind: "method",
      key: "_scrollMessagesBottom",
      value: function _scrollMessagesBottom() {
        this.messages.scrollTarget.scrollTop = this.messages.scrollTarget.scrollHeight;

        if (this.messages.scrollTarget.scrollTop === 0) {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this.messages, "iron-resize");
        }
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;

        if (!this._opened && this.recognition) {
          this.recognition.abort();
        }
      }
    }, {
      kind: "method",
      key: "_computeMessageClasses",
      value: function _computeMessageClasses(message) {
        return `message ${message.who} ${message.error ? " error" : ""}`;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_9__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
        :host {
          z-index: 103;
        }

        paper-icon-button {
          color: var(--secondary-text-color);
        }

        paper-icon-button[active] {
          color: var(--primary-color);
        }

        .input {
          margin: 0 0 16px 0;
        }

        op-paper-dialog {
          width: 450px;
        }
        a.button {
          text-decoration: none;
        }
        a.button > mwc-button {
          width: 100%;
        }
        .onboarding {
          padding: 0 24px;
        }
        paper-dialog-scrollable.top-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--divider-color);
        }
        .side-by-side {
          display: flex;
          margin: 8px 0;
        }
        .side-by-side > * {
          flex: 1 0;
          padding: 4px;
        }
        .attribution {
          color: var(--secondary-text-color);
        }
        .message {
          font-size: 18px;
          clear: both;
          margin: 8px 0;
          padding: 8px;
          border-radius: 15px;
        }

        .message.user {
          margin-left: 24px;
          float: right;
          text-align: right;
          border-bottom-right-radius: 0px;
          background-color: var(--light-primary-color);
          color: var(--primary-text-color);
        }

        .message.opp {
          margin-right: 24px;
          float: left;
          border-bottom-left-radius: 0px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
        }

        .message a {
          color: var(--text-primary-color);
        }

        .message img {
          width: 100%;
          border-radius: 10px;
        }

        .message.error {
          background-color: var(--google-red-500);
          color: var(--text-primary-color);
        }

        .interimTranscript {
          color: var(--secondary-text-color);
        }

        .bouncer {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
        }
        .double-bounce1,
        .double-bounce2 {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--primary-color);
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-bounce 2s infinite ease-in-out;
          animation: sk-bounce 2s infinite ease-in-out;
        }
        .double-bounce2 {
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
        }
        @-webkit-keyframes sk-bounce {
          0%,
          100% {
            -webkit-transform: scale(0);
          }
          50% {
            -webkit-transform: scale(1);
          }
        }
        @keyframes sk-bounce {
          0%,
          100% {
            transform: scale(0);
            -webkit-transform: scale(0);
          }
          50% {
            transform: scale(1);
            -webkit-transform: scale(1);
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          .message {
            font-size: 16px;
          }
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Atdm9pY2UtY29tbWFuZC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc3BlZWNoLXJlY29nbml0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC91aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvb3Atdm9pY2UtY29tbWFuZC1kaWFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJEaWFsb2dCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpbXBsZW1lbnRzIGEgc2Nyb2xsaW5nIGFyZWEgdXNlZCBpbiBhIE1hdGVyaWFsIERlc2lnblxuZGlhbG9nLiBJdCBzaG93cyBhIGRpdmlkZXIgYXQgdGhlIHRvcCBhbmQvb3IgYm90dG9tIGluZGljYXRpbmcgbW9yZSBjb250ZW50LFxuZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi4gVXNlIHRoaXMgdG9nZXRoZXIgd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuSXQgc2hvd3MgYSB0b3AgZGl2aWRlciBhZnRlciBzY3JvbGxpbmcgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBjaGlsZCBpbiBpdHNcbnBhcmVudCBjb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGFib3ZlLiBJdCBzaG93cyBhIGJvdHRvbVxuZGl2aWRlciBpZiBpdCBpcyBzY3JvbGxhYmxlIGFuZCBpdCBpcyBub3QgdGhlIGxhc3QgY2hpbGQgaW4gaXRzIHBhcmVudFxuY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBiZWxvdy4gVGhlIGJvdHRvbSBkaXZpZGVyIGlzIGhpZGRlblxuaWYgaXQgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbS5cblxuSWYgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGVsZW1lbnQgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCwgcmVtZW1iZXIgdG8gc2V0IHRoZSBgZGlhbG9nRWxlbWVudGA6XG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGwgaWQ9XCJteURpYWxvZ1wiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXktY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxoND5TdWItaGVhZGVyPC9oND5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgdmFyIHNjcm9sbGFibGUgPVxuUG9seW1lci5kb20obXlEaWFsb2cpLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyk7XG4gICAgICBzY3JvbGxhYmxlLmRpYWxvZ0VsZW1lbnQgPSBteURpYWxvZztcbiAgICA8L3NjcmlwdD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgfCBNaXhpbiBmb3IgdGhlIHNjcm9sbGFibGUgY29udGVudCB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXMtc2Nyb2xsZWQ6bm90KDpmaXJzdC1jaGlsZCkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jYW4tc2Nyb2xsOm5vdCguc2Nyb2xsZWQtdG8tYm90dG9tKTpub3QoOmxhc3QtY2hpbGQpKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zY3JvbGw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGFibGVcIiBjbGFzcz1cInNjcm9sbGFibGVcIiBvbi1zY3JvbGw9XCJ1cGRhdGVTY3JvbGxTdGF0ZVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlhbG9nIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgXG4gICAgICogY29udGFpbmluZyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgez9Ob2RlfVxuICAgICAqL1xuICAgIGRpYWxvZ0VsZW1lbnQ6IHt0eXBlOiBPYmplY3R9XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuc2Nyb2xsYWJsZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduby1wYWRkaW5nJyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbFN0YXRlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpcy1zY3JvbGxlZCcsIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA+IDApO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdjYW4tc2Nyb2xsJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnc2Nyb2xsZWQtdG8tYm90dG9tJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0ID49XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICB9LFxuXG4gIF9lbnN1cmVUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlYWQgcGFyZW50RWxlbWVudCBpbnN0ZWFkIG9mIHBhcmVudE5vZGUgaW4gb3JkZXIgdG8gc2tpcCBzaGFkb3dSb290cy5cbiAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQgfHwgdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIC8vIENoZWNrIGlmIGRpYWxvZyBpbXBsZW1lbnRzIHBhcGVyLWRpYWxvZy1iZWhhdmlvci4gSWYgbm90LCBmaXRcbiAgICAvLyBzY3JvbGxUYXJnZXQgdG8gaG9zdC5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMgJiZcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycy5pbmRleE9mKFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsKSA+PSAwKSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuc2l6aW5nVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZml0Jyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qIHRzbGludDpkaXNhYmxlICovXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNvbnN0IFNwZWVjaFJlY29nbml0aW9uID1cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgd2luZG93LlNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjtcclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgU3BlZWNoR3JhbW1hckxpc3QgPVxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICB3aW5kb3cuU3BlZWNoR3JhbW1hckxpc3QgfHwgd2luZG93LndlYmtpdFNwZWVjaEdyYW1tYXJMaXN0O1xyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbkV2ZW50ID1cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgd2luZG93LlNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnQ7XHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuIiwiZnVuY3Rpb24gczQoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgIC50b1N0cmluZygxNilcbiAgICAuc3Vic3RyaW5nKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWlkKCkge1xuICByZXR1cm4gczQoKSArIHM0KCkgKyBzNCgpICsgczQoKSArIHM0KCk7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBPcElyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xyXG5pbXBvcnQgeyBPcElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vb3AtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuXHJcbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XHJcblxyXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxyXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcclxuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xyXG4gICAgcmV0dXJuIE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcclxuICB9LFxyXG59O1xyXG5cclxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3JcclxuLy8gZXhwb3J0IGNsYXNzIE9wUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNsYXNzIE9wUGFwZXJEaWFsb2dcclxuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXHJcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgIFwib3AtcGFwZXItZGlhbG9nXCI6IE9wUGFwZXJEaWFsb2c7XHJcbiAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXBhcGVyLWRpYWxvZ1wiLCBPcFBhcGVyRGlhbG9nKTtcclxuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb2Nlc3NSZXN1bHRzIHtcclxuICBjYXJkOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfTtcclxuICBzcGVlY2g6IHtcclxuICAgIFtTcGVlY2hUeXBlIGluIFwicGxhaW5cIiB8IFwic3NtbFwiXTogeyBleHRyYV9kYXRhOiBhbnk7IHNwZWVjaDogc3RyaW5nIH07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZ2VudEluZm8ge1xyXG4gIGF0dHJpYnV0aW9uPzogeyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nIH07XHJcbiAgb25ib2FyZGluZz86IHsgdGV4dDogc3RyaW5nOyB1cmw6IHN0cmluZyB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvY2Vzc1RleHQgPSAoXHJcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxyXG4gIHRleHQ6IHN0cmluZyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBjb252ZXJzYXRpb25faWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPFByb2Nlc3NSZXN1bHRzPiA9PlxyXG4gIG9wcC5jYWxsV1Moe1xyXG4gICAgdHlwZTogXCJjb252ZXJzYXRpb24vcHJvY2Vzc1wiLFxyXG4gICAgdGV4dCxcclxuICAgIGNvbnZlcnNhdGlvbl9pZCxcclxuICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBZ2VudEluZm8gPSAob3BwOiBPcGVuUGVlclBvd2VyKTogUHJvbWlzZTxBZ2VudEluZm8+ID0+XHJcbiAgb3BwLmNhbGxXUyh7XHJcbiAgICB0eXBlOiBcImNvbnZlcnNhdGlvbi9hZ2VudC9pbmZvXCIsXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29udmVyc2F0aW9uT25ib2FyZGluZyA9IChcclxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXHJcbiAgdmFsdWU6IGJvb2xlYW5cclxuKTogUHJvbWlzZTxib29sZWFuPiA9PlxyXG4gIG9wcC5jYWxsV1Moe1xyXG4gICAgdHlwZTogXCJjb252ZXJzYXRpb24vb25ib2FyZGluZy9zZXRcIixcclxuICAgIHNob3duOiB2YWx1ZSxcclxuICB9KTtcclxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcblxuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBxdWVyeSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vc3BlZWNoLXJlY29nbml0aW9uXCI7XG5pbXBvcnQge1xuICBwcm9jZXNzVGV4dCxcbiAgZ2V0QWdlbnRJbmZvLFxuICBzZXRDb252ZXJzYXRpb25PbmJvYXJkaW5nLFxuICBBZ2VudEluZm8sXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbnZlcnNhdGlvblwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBvcFN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJEaWFsb2dTY3JvbGxhYmxlRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IHsgdWlkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL3VpZFwiO1xuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIHdobzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xuICBlcnJvcj86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBSZXN1bHRzIHtcbiAgdHJhbnNjcmlwdDogc3RyaW5nO1xuICBmaW5hbDogYm9vbGVhbjtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJvcC12b2ljZS1jb21tYW5kLWRpYWxvZ1wiKVxuZXhwb3J0IGNsYXNzIE9wVW9pY2VDb21tYW5kRGlhbG9nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcmVzdWx0czogUmVzdWx0cyB8IG51bGwgPSBudWxsO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb252ZXJzYXRpb246IE1lc3NhZ2VbXSA9IFtcbiAgICB7XG4gICAgICB3aG86IFwib3BwXCIsXG4gICAgICB0ZXh0OiBcIlwiLFxuICAgIH0sXG4gIF07XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hZ2VudEluZm8/OiBBZ2VudEluZm87XG4gIEBxdWVyeShcIiNtZXNzYWdlc1wiKSBwcml2YXRlIG1lc3NhZ2VzITogUGFwZXJEaWFsb2dTY3JvbGxhYmxlRWxlbWVudDtcbiAgcHJpdmF0ZSByZWNvZ25pdGlvbiE6IFNwZWVjaFJlY29nbml0aW9uO1xuICBwcml2YXRlIF9jb252ZXJzYXRpb25JZD86IHN0cmluZztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICAgIGlmIChTcGVlY2hSZWNvZ25pdGlvbikge1xuICAgICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICB9XG4gICAgdGhpcy5fYWdlbnRJbmZvID0gYXdhaXQgZ2V0QWdlbnRJbmZvKHRoaXMub3BwKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIC8vIENTUyBjdXN0b20gcHJvcGVydHkgbWl4aW5zIG9ubHkgd29yayBpbiByZW5kZXIgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvbGl0LWVsZW1lbnQvaXNzdWVzLzYzM1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZToge1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuY2FuLXNjcm9sbCB7XG4gICAgICAgICAgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZToge1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc1cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuY2FuLXNjcm9sbCB7XG4gICAgICAgICAgICAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE3NXB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxvcC1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICAub3BlbmVkPSR7dGhpcy5fb3BlbmVkfVxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICAke3RoaXMuX2FnZW50SW5mbyAmJiB0aGlzLl9hZ2VudEluZm8ub25ib2FyZGluZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmdcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2FnZW50SW5mby5vbmJvYXJkaW5nLnRleHR9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiIEBjbGljaz0ke3RoaXMuX2NvbXBsZXRlT25ib2FyZGluZ30+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3RoaXMuX2FnZW50SW5mby5vbmJvYXJkaW5nLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+PG13Yy1idXR0b24gdW5lbGV2YXRlZD5ZZXMhPC9td2MtYnV0dG9uPjwvYVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gb3V0bGluZWQ+Tm88L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG4gICAgICAgICAgaWQ9XCJtZXNzYWdlc1wiXG4gICAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgICBcInRvcC1ib3JkZXJcIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5fYWdlbnRJbmZvICYmIHRoaXMuX2FnZW50SW5mby5vbmJvYXJkaW5nXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLl9jb252ZXJzYXRpb24ubWFwKFxuICAgICAgICAgICAgKG1lc3NhZ2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuX2NvbXB1dGVNZXNzYWdlQ2xhc3NlcyhtZXNzYWdlKX1cIj5cbiAgICAgICAgICAgICAgICAke21lc3NhZ2UudGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgICAke3RoaXMucmVzdWx0c1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlIHVzZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgICAgICAgIGludGVyaW1UcmFuc2NyaXB0OiAhdGhpcy5yZXN1bHRzLmZpbmFsLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5yZXN1bHRzLnRyYW5zY3JpcHR9PC9zcGFuXG4gICAgICAgICAgICAgICAgICA+JHshdGhpcy5yZXN1bHRzLmZpbmFsID8gXCLigKZcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBAa2V5dXA9JHt0aGlzLl9oYW5kbGVLZXlVcH1cbiAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgIGB1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuJHtcbiAgICAgICAgICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbiA/IFwibGFiZWxfdm9pY2VcIiA6IFwibGFiZWxcIlxuICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHtTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdWZmaXg9XCJcIiBzbG90PVwic3VmZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmU9JHtCb29sZWFuKHRoaXMucmVzdWx0cyl9XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm9wcDptaWNyb3Bob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVMaXN0ZW5pbmd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICR7dGhpcy5fYWdlbnRJbmZvICYmIHRoaXMuX2FnZW50SW5mby5hdHRyaWJ1dGlvblxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPSR7dGhpcy5fYWdlbnRJbmZvLmF0dHJpYnV0aW9uLnVybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXR0cmlidXRpb25cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgID4ke3RoaXMuX2FnZW50SW5mby5hdHRyaWJ1dGlvbi5uYW1lfTwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fY29udmVyc2F0aW9uSWQgPSB1aWQoKTtcbiAgICB0aGlzLl9jb252ZXJzYXRpb24gPSBbXG4gICAgICB7XG4gICAgICAgIHdobzogXCJvcHBcIixcbiAgICAgICAgdGV4dDogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuaG93X2Nhbl9pX2hlbHBcIiksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbnZlcnNhdGlvblwiKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKFwicmVzdWx0c1wiKSkge1xuICAgICAgdGhpcy5fc2Nyb2xsTWVzc2FnZXNCb3R0b20oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLl9jb252ZXJzYXRpb24gPSBbLi4udGhpcy5fY29udmVyc2F0aW9uLCBtZXNzYWdlXTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUtleVVwKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzICYmIGlucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzVGV4dChpbnB1dC52YWx1ZSk7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGxldGVPbmJvYXJkaW5nKCkge1xuICAgIHNldENvbnZlcnNhdGlvbk9uYm9hcmRpbmcodGhpcy5vcHAsIHRydWUpO1xuICAgIHRoaXMuX2FnZW50SW5mbyEgPSB7IC4uLnRoaXMuX2FnZW50SW5mbywgb25ib2FyZGluZzogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwcml2YXRlIF9pbml0UmVjb2duaXRpb24oKSB7XG4gICAgdGhpcy5yZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuICAgIHRoaXMucmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlO1xuICAgIHRoaXMucmVjb2duaXRpb24ubGFuZyA9IFwiZW4tVVNcIjtcblxuICAgIHRoaXMucmVjb2duaXRpb24ub25zdGFydCA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0cyA9IHtcbiAgICAgICAgZmluYWw6IGZhbHNlLFxuICAgICAgICB0cmFuc2NyaXB0OiBcIlwiLFxuICAgICAgfTtcbiAgICB9O1xuICAgIHRoaXMucmVjb2duaXRpb24ub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbiEuYWJvcnQoKTtcbiAgICAgIGlmIChldmVudC5lcnJvciAhPT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgICAgdGhpcy5yZXN1bHRzICYmIHRoaXMucmVzdWx0cy50cmFuc2NyaXB0XG4gICAgICAgICAgICA/IHRoaXMucmVzdWx0cy50cmFuc2NyaXB0XG4gICAgICAgICAgICA6IGA8JHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmRpYWxvZ3Mudm9pY2VfY29tbWFuZC5kaWRfbm90X2hlYXJcIil9PmA7XG4gICAgICAgIHRoaXMuX2FkZE1lc3NhZ2UoeyB3aG86IFwidXNlclwiLCB0ZXh0LCBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uZW5kID0gKCkgPT4ge1xuICAgICAgLy8gQWxyZWFkeSBoYW5kbGVkIGJ5IG9uZXJyb3JcbiAgICAgIGlmICh0aGlzLnJlc3VsdHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5yZXN1bHRzLnRyYW5zY3JpcHQ7XG4gICAgICB0aGlzLnJlc3VsdHMgPSBudWxsO1xuICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc1RleHQodGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRNZXNzYWdlKHtcbiAgICAgICAgICB3aG86IFwidXNlclwiLFxuICAgICAgICAgIHRleHQ6IGA8JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy52b2ljZV9jb21tYW5kLmRpZF9ub3RfaGVhclwiXG4gICAgICAgICAgKX0+YCxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVjb2duaXRpb24ub25yZXN1bHQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGV2ZW50LnJlc3VsdHNbMF07XG4gICAgICB0aGlzLnJlc3VsdHMgPSB7XG4gICAgICAgIHRyYW5zY3JpcHQ6IHJlc3VsdFswXS50cmFuc2NyaXB0LFxuICAgICAgICBmaW5hbDogcmVzdWx0LmlzRmluYWwsXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9wcm9jZXNzVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5yZWNvZ25pdGlvbikge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5hYm9ydCgpO1xuICAgIH1cbiAgICB0aGlzLl9hZGRNZXNzYWdlKHsgd2hvOiBcInVzZXJcIiwgdGV4dCB9KTtcbiAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0ge1xuICAgICAgd2hvOiBcIm9wcFwiLFxuICAgICAgdGV4dDogXCLigKZcIixcbiAgICB9O1xuICAgIC8vIFRvIG1ha2Ugc3VyZSB0aGUgYW5zd2VyIGlzIHBsYWNlZCBhdCB0aGUgcmlnaHQgdXNlciB0ZXh0LCB3ZSBhZGQgaXQgYmVmb3JlIHdlIHByb2Nlc3MgaXRcbiAgICB0aGlzLl9hZGRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb2Nlc3NUZXh0KHRoaXMub3BwLCB0ZXh0LCB0aGlzLl9jb252ZXJzYXRpb25JZCEpO1xuICAgICAgY29uc3QgcGxhaW4gPSByZXNwb25zZS5zcGVlY2gucGxhaW47XG4gICAgICBtZXNzYWdlLnRleHQgPSBwbGFpbi5zcGVlY2g7XG5cbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9jb252ZXJzYXRpb25cIik7XG4gICAgfSBjYXRjaCB7XG4gICAgICBtZXNzYWdlLnRleHQgPSB0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmRpYWxvZ3Mudm9pY2VfY29tbWFuZC5lcnJvclwiKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IgPSB0cnVlO1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKFwiX2NvbnZlcnNhdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKCF0aGlzLnJlc3VsdHMpIHtcbiAgICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjb2duaXRpb24hLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGFydExpc3RlbmluZygpIHtcbiAgICBpZiAoIXRoaXMucmVjb2duaXRpb24pIHtcbiAgICAgIHRoaXMuX2luaXRSZWNvZ25pdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc3VsdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlc3VsdHMgPSB7XG4gICAgICB0cmFuc2NyaXB0OiBcIlwiLFxuICAgICAgZmluYWw6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5yZWNvZ25pdGlvbiEuc3RhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Njcm9sbE1lc3NhZ2VzQm90dG9tKCkge1xuICAgIHRoaXMubWVzc2FnZXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IHRoaXMubWVzc2FnZXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodDtcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICBmaXJlRXZlbnQodGhpcy5tZXNzYWdlcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIXRoaXMuX29wZW5lZCAmJiB0aGlzLnJlY29nbml0aW9uKSB7XG4gICAgICB0aGlzLnJlY29nbml0aW9uLmFib3J0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZU1lc3NhZ2VDbGFzc2VzKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYG1lc3NhZ2UgJHttZXNzYWdlLndob30gJHttZXNzYWdlLmVycm9yID8gXCIgZXJyb3JcIiA6IFwiXCJ9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHotaW5kZXg6IDEwMztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25bYWN0aXZlXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgfVxuICAgICAgICBhLmJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGEuYnV0dG9uID4gbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm9uYm9hcmRpbmcge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS50b3AtYm9yZGVyOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlLWJ5LXNpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZS1ieS1zaWRlID4gKiB7XG4gICAgICAgICAgZmxleDogMSAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UudXNlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS5vcHAge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlLmVycm9yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50ZXJpbVRyYW5zY3JpcHQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYm91bmNlciB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRvdWJsZS1ib3VuY2UxLFxuICAgICAgICAuZG91YmxlLWJvdW5jZTIge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5kb3VibGUtYm91bmNlMiB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgICAgICAgICAwJSxcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgICAgICAgIDAlLFxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3Atdm9pY2UtY29tbWFuZC1kaWFsb2dcIjogT3BVb2ljZUNvbW1hbmREaWFsb2c7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQThDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBY0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7OztBQUdBOzs7Ozs7O0FBUEE7OztBQWtCQTtBQUNBO0FBREE7O0FBTUE7QUFFQTtBQUNBOztBQUhBO0FBT0E7OztBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBUkE7Ozs7QUFlQTtBQUNBOzs7QUFPQTs7QUFHQTs7Ozs7QUFBQTs7QUFTQTs7QUFFQTs7OztBQWRBOztBQXFCQTs7QUFHQTs7O0FBR0E7O0FBTkE7OztBQWhIQTtBQTZIQTtBQXRKQTtBQUFBO0FBQUE7QUFBQTtBQXlKQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBaktBO0FBQUE7QUFBQTtBQUFBO0FBb0tBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXhLQTtBQUFBO0FBQUE7QUFBQTtBQTJLQTtBQUNBO0FBNUtBO0FBQUE7QUFBQTtBQUFBO0FBK0tBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFwTEE7QUFBQTtBQUFBO0FBQUE7QUF1TEE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXpMQTtBQUFBO0FBQUE7QUFBQTtBQTRMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVPQTtBQUFBO0FBQUE7QUFBQTtBQStPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwUUE7QUFBQTtBQUFBO0FBQUE7QUF1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNVFBO0FBQUE7QUFBQTtBQUFBO0FBK1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUE1UkE7QUFBQTtBQUFBO0FBQUE7QUErUkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBblNBO0FBQUE7QUFBQTtBQUFBO0FBc1NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTFTQTtBQUFBO0FBQUE7QUFBQTtBQTZTQTtBQUNBO0FBOVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpVEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUpBO0FBbGNBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9