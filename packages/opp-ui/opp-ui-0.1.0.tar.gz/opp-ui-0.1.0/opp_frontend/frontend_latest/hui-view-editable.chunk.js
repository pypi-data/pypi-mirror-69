(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-view-editable"],{

/***/ "./src/panels/devcon/components/hui-card-options.ts":
/*!**********************************************************!*\
  !*** ./src/panels/devcon/components/hui-card-options.ts ***!
  \**********************************************************/
/*! exports provided: HuiCardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardOptions", function() { return HuiCardOptions; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/devcon/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/delete-card */ "./src/panels/devcon/editor/delete-card.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/config-util */ "./src/panels/devcon/editor/config-util.ts");
/* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/devcon/editor/card-editor/show-move-card-view-dialog.ts");
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










let HuiCardOptions = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-card-options")], function (_initialize, _LitElement) {
  class HuiCardOptions extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardOptions,
    d: [{
      kind: "field",
      key: "cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "path",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <slot></slot>
      <op-card>
        <div class="options">
          <div class="primary-actions">
            <mwc-button @click="${this._editCard}"
              >${this.opp.localize("ui.panel.devcon.editor.edit_card.edit")}</mwc-button
            >
          </div>
          <div class="secondary-actions">
            <paper-icon-button
              title="Move card down"
              class="move-arrow"
              icon="opp:arrow-down"
              @click="${this._cardDown}"
              ?disabled="${this.devcon.config.views[this.path[0]].cards.length === this.path[1] + 1}"
            ></paper-icon-button>
            <paper-icon-button
              title="Move card up"
              class="move-arrow"
              icon="opp:arrow-up"
              @click="${this._cardUp}"
              ?disabled="${this.path[1] === 0}"
            ></paper-icon-button>
            <paper-menu-button
              horizontal-align="right"
              vertical-align="bottom"
              vertical-offset="40"
              close-on-activate
            >
              <paper-icon-button
                icon="opp:dots-vertical"
                slot="dropdown-trigger"
                aria-label=${this.opp.localize("ui.panel.devcon.editor.edit_card.options")}
              ></paper-icon-button>
              <paper-listbox slot="dropdown-content">
                <paper-item @tap="${this._moveCard}">
                  ${this.opp.localize("ui.panel.devcon.editor.edit_card.move")}</paper-item
                >
                <paper-item .class="delete-item" @tap="${this._deleteCard}">
                  ${this.opp.localize("ui.panel.devcon.editor.edit_card.delete")}</paper-item
                >
              </paper-listbox>
            </paper-menu-button>
          </div>
        </div>
      </op-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      op-card {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
      }

      div.options {
        border-top: 1px solid #e8e8e8;
        padding: 5px 8px;
        display: flex;
        margin-top: -1px;
      }

      div.options .primary-actions {
        flex: 1;
        margin: auto;
      }

      div.options .secondary-actions {
        flex: 4;
        text-align: right;
      }

      paper-icon-button {
        color: var(--primary-text-color);
      }

      paper-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      paper-menu-button {
        color: var(--secondary-text-color);
        padding: 0;
      }

      paper-item.header {
        color: var(--primary-text-color);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
      }

      paper-item {
        cursor: pointer;
      }

      paper-item.delete-item {
        color: var(--google-red-500);
      }
    `;
      }
    }, {
      kind: "method",
      key: "_editCard",
      value: function _editCard() {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__["showEditCardDialog"])(this, {
          devconConfig: this.devcon.config,
          saveConfig: this.devcon.saveConfig,
          path: this.path
        });
      }
    }, {
      kind: "method",
      key: "_cardUp",
      value: function _cardUp() {
        const devcon = this.devcon;
        const path = this.path;
        devcon.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_7__["swapCard"])(devcon.config, path, [path[0], path[1] - 1]));
      }
    }, {
      kind: "method",
      key: "_cardDown",
      value: function _cardDown() {
        const devcon = this.devcon;
        const path = this.path;
        devcon.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_7__["swapCard"])(devcon.config, path, [path[0], path[1] + 1]));
      }
    }, {
      kind: "method",
      key: "_moveCard",
      value: function _moveCard() {
        Object(_editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__["showMoveCardViewDialog"])(this, {
          path: this.path,
          devcon: this.devcon
        });
      }
    }, {
      kind: "method",
      key: "_deleteCard",
      value: function _deleteCard() {
        Object(_editor_delete_card__WEBPACK_IMPORTED_MODULE_6__["confDeleteCard"])(this, this.opp, this.devcon, this.path);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/card-editor/show-move-card-view-dialog.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/show-move-card-view-dialog.ts ***!
  \****************************************************************************/
/*! exports provided: showMoveCardViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoveCardViewDialog", function() { return showMoveCardViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;

const registerEditCardDialog = element => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
  dialogShowEvent: "show-move-card-view",
  dialogTag: "hui-dialog-move-card-view",
  dialogImport: () => Promise.all(/*! import() | hui-dialog-move-card-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-move-card-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-move-card-view */ "./src/panels/devcon/editor/card-editor/hui-dialog-move-card-view.ts"))
});

const showMoveCardViewDialog = (element, moveCardViewDialogParams) => {
  if (!registeredDialog) {
    registeredDialog = true;
    registerEditCardDialog(element);
  }

  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-move-card-view", moveCardViewDialogParams);
};

/***/ }),

/***/ "./src/panels/devcon/editor/delete-card.ts":
/*!*************************************************!*\
  !*** ./src/panels/devcon/editor/delete-card.ts ***!
  \*************************************************/
/*! exports provided: confDeleteCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confDeleteCard", function() { return confDeleteCard; });
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-util */ "./src/panels/devcon/editor/config-util.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");


async function confDeleteCard(element, opp, devcon, path) {
  Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_1__["showConfirmationDialog"])(element, {
    text: opp.localize("ui.panel.devcon.cards.confirm_delete"),
    confirm: async () => {
      try {
        await devcon.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_0__["deleteCard"])(devcon.config, path));
      } catch (err) {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_1__["showAlertDialog"])(element, {
          text: `Deleting failed: ${err.message}`
        });
      }
    }
  });
}

/***/ }),

/***/ "./src/panels/devcon/views/hui-view-editable.ts":
/*!******************************************************!*\
  !*** ./src/panels/devcon/views/hui-view-editable.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hui-card-options */ "./src/panels/devcon/components/hui-card-options.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
// hui-view dependencies for when in edit mode.



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9jb21wb25lbnRzL2h1aS1jYXJkLW9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2NhcmQtZWRpdG9yL3Nob3ctbW92ZS1jYXJkLXZpZXctZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9kZWxldGUtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi92aWV3cy9odWktdmlldy1lZGl0YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgeyBzaG93RWRpdENhcmREaWFsb2cgfSBmcm9tIFwiLi4vZWRpdG9yL2NhcmQtZWRpdG9yL3Nob3ctZWRpdC1jYXJkLWRpYWxvZ1wiO1xuaW1wb3J0IHsgY29uZkRlbGV0ZUNhcmQgfSBmcm9tIFwiLi4vZWRpdG9yL2RlbGV0ZS1jYXJkXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEZXZjb25DYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBEZXZjb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN3YXBDYXJkIH0gZnJvbSBcIi4uL2VkaXRvci9jb25maWctdXRpbFwiO1xuaW1wb3J0IHsgc2hvd01vdmVDYXJkVmlld0RpYWxvZyB9IGZyb20gXCIuLi9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1tb3ZlLWNhcmQtdmlldy1kaWFsb2dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktY2FyZC1vcHRpb25zXCIpXG5leHBvcnQgY2xhc3MgSHVpQ2FyZE9wdGlvbnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGNhcmRDb25maWc/OiBEZXZjb25DYXJkQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZjb24/OiBEZXZjb247XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHBhdGg/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPG9wLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9lZGl0Q2FyZH1cIlxuICAgICAgICAgICAgICA+JHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmVkaXRfY2FyZC5lZGl0XCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5LWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICB0aXRsZT1cIk1vdmUgY2FyZCBkb3duXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtb3ZlLWFycm93XCJcbiAgICAgICAgICAgICAgaWNvbj1cIm9wcDphcnJvdy1kb3duXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jYXJkRG93bn1cIlxuICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGV2Y29uIS5jb25maWcudmlld3NbdGhpcy5wYXRoIVswXV0uY2FyZHMhXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgICAgICAgICB0aGlzLnBhdGghWzFdICsgMX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgdXBcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1vdmUtYXJyb3dcIlxuICAgICAgICAgICAgICBpY29uPVwib3BwOmFycm93LXVwXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jYXJkVXB9XCJcbiAgICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLnBhdGghWzFdID09PSAwfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsLW9mZnNldD1cIjQwXCJcbiAgICAgICAgICAgICAgY2xvc2Utb24tYWN0aXZhdGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5lZGl0X2NhcmQub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQHRhcD1cIiR7dGhpcy5fbW92ZUNhcmR9XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmVkaXRfY2FyZC5tb3ZlXCJcbiAgICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIC5jbGFzcz1cImRlbGV0ZS1pdGVtXCIgQHRhcD1cIiR7dGhpcy5fZGVsZXRlQ2FyZH1cIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuZWRpdF9jYXJkLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICApfTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L29wLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG9wLWNhcmQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAtNHB4LFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4O1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyAucHJpbWFyeS1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4OiA0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ubW92ZS1hcnJvd1tkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbS5oZWFkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLmRlbGV0ZS1pdGVtIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZWRpdENhcmQoKTogdm9pZCB7XG4gICAgc2hvd0VkaXRDYXJkRGlhbG9nKHRoaXMsIHtcbiAgICAgIGRldmNvbkNvbmZpZzogdGhpcy5kZXZjb24hLmNvbmZpZyxcbiAgICAgIHNhdmVDb25maWc6IHRoaXMuZGV2Y29uIS5zYXZlQ29uZmlnLFxuICAgICAgcGF0aDogdGhpcy5wYXRoISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmRVcCgpOiB2b2lkIHtcbiAgICBjb25zdCBkZXZjb24gPSB0aGlzLmRldmNvbiE7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aCE7XG4gICAgZGV2Y29uLnNhdmVDb25maWcoc3dhcENhcmQoZGV2Y29uLmNvbmZpZywgcGF0aCwgW3BhdGhbMF0sIHBhdGhbMV0gLSAxXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZERvd24oKTogdm9pZCB7XG4gICAgY29uc3QgZGV2Y29uID0gdGhpcy5kZXZjb24hO1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGghO1xuICAgIGRldmNvbi5zYXZlQ29uZmlnKHN3YXBDYXJkKGRldmNvbi5jb25maWcsIHBhdGgsIFtwYXRoWzBdLCBwYXRoWzFdICsgMV0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX21vdmVDYXJkKCk6IHZvaWQge1xuICAgIHNob3dNb3ZlQ2FyZFZpZXdEaWFsb2codGhpcywge1xuICAgICAgcGF0aDogdGhpcy5wYXRoISxcbiAgICAgIGRldmNvbjogdGhpcy5kZXZjb24hLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlQ2FyZCgpOiB2b2lkIHtcbiAgICBjb25mRGVsZXRlQ2FyZCh0aGlzLCB0aGlzLm9wcCEsIHRoaXMuZGV2Y29uISwgdGhpcy5wYXRoISk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLW9wdGlvbnNcIjogSHVpQ2FyZE9wdGlvbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IERldmNvbiB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiOiBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXM7XG4gIH1cbn1cblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXMge1xuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdO1xuICBkZXZjb246IERldmNvbjtcbn1cblxuY29uc3QgcmVnaXN0ZXJFZGl0Q2FyZERpYWxvZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEV2ZW50ID0+XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInJlZ2lzdGVyLWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctbW92ZS1jYXJkLXZpZXdcIixcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1tb3ZlLWNhcmQtdmlld1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIlxuICAgICAgKSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93TW92ZUNhcmRWaWV3RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgbW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zOiBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICByZWdpc3RlckVkaXRDYXJkRGlhbG9nKGVsZW1lbnQpO1xuICB9XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctbW92ZS1jYXJkLXZpZXdcIiwgbW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zKTtcbn07XG4iLCJpbXBvcnQgeyBEZXZjb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRlbGV0ZUNhcmQgfSBmcm9tIFwiLi9jb25maWctdXRpbFwiO1xuaW1wb3J0IHtcbiAgc2hvd0FsZXJ0RGlhbG9nLFxuICBzaG93Q29uZmlybWF0aW9uRGlhbG9nLFxufSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZkRlbGV0ZUNhcmQoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGRldmNvbjogRGV2Y29uLFxuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyhlbGVtZW50LCB7XG4gICAgdGV4dDogb3BwLmxvY2FsaXplKFwidWkucGFuZWwuZGV2Y29uLmNhcmRzLmNvbmZpcm1fZGVsZXRlXCIpLFxuICAgIGNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRldmNvbi5zYXZlQ29uZmlnKGRlbGV0ZUNhcmQoZGV2Y29uLmNvbmZpZywgcGF0aCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNob3dBbGVydERpYWxvZyhlbGVtZW50LCB7XG4gICAgICAgICAgdGV4dDogYERlbGV0aW5nIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn1cbiIsIi8vIGh1aS12aWV3IGRlcGVuZGVuY2llcyBmb3Igd2hlbiBpbiBlZGl0IG1vZGUuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS1jYXJkLW9wdGlvbnNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtZmFiXCI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBOzs7OztBQUtBO0FBQ0E7Ozs7Ozs7O0FBVUE7QUFDQTs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBS0E7QUFDQTs7QUFJQTtBQUNBOzs7Ozs7O0FBaERBO0FBMERBO0FBcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFzREE7QUE3SEE7QUFBQTtBQUFBO0FBQUE7QUFnSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBcklBO0FBQUE7QUFBQTtBQUFBO0FBd0lBO0FBQ0E7QUFDQTtBQUNBO0FBM0lBO0FBQUE7QUFBQTtBQUFBO0FBOElBO0FBQ0E7QUFDQTtBQUNBO0FBakpBO0FBQUE7QUFBQTtBQUFBO0FBb0pBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF4SkE7QUFBQTtBQUFBO0FBQUE7QUEySkE7QUFDQTtBQTVKQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQSxvZUFFQTtBQUxBO0FBQ0E7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBVkE7QUFZQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=