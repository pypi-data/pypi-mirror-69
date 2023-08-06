(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-card"],{

/***/ "./src/panels/devcon/editor/card-editor/hui-dialog-edit-card.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/hui-dialog-edit-card.ts ***!
  \**********************************************************************/
/*! exports provided: HuiDialogEditCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditCard", function() { return HuiDialogEditCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-freeze */ "./node_modules/deep-freeze/index.js");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hui_card_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-card-editor */ "./src/panels/devcon/editor/card-editor/hui-card-editor.ts");
/* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hui-card-preview */ "./src/panels/devcon/editor/card-editor/hui-card-preview.ts");
/* harmony import */ var _hui_card_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hui-card-picker */ "./src/panels/devcon/editor/card-editor/hui-card-picker.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-util */ "./src/panels/devcon/editor/config-util.ts");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
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



 // tslint:disable-next-line







let HuiDialogEditCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-edit-card")], function (_initialize, _LitElement) {
  class HuiDialogEditCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogEditCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_viewConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_saving",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        const [view, card] = params.path;
        this._viewConfig = params.devconConfig.views[view];
        this._cardConfig = card !== undefined ? this._viewConfig.cards[card] : undefined;

        if (this._cardConfig && !Object.isFrozen(this._cardConfig)) {
          this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_1___default()(this._cardConfig);
        }
      }
    }, {
      kind: "get",
      key: "_cardEditorEl",
      value: function _cardEditorEl() {
        return this.shadowRoot.querySelector("hui-card-editor");
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        let heading;

        if (this._cardConfig && this._cardConfig.type) {
          heading = `${this.opp.localize(`ui.panel.devcon.editor.card.${this._cardConfig.type}.name`)} ${this.opp.localize("ui.panel.devcon.editor.edit_card.header")}`;
        } else if (!this._cardConfig) {
          heading = this._viewConfig.title ? this.opp.localize("ui.panel.devcon.editor.edit_card.pick_card_view_title", "name", `"${this._viewConfig.title}"`) : this.opp.localize("ui.panel.devcon.editor.edit_card.pick_card");
        } else {
          heading = this.opp.localize("ui.panel.devcon.editor.edit_card.header");
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog with-backdrop opened modal @keyup=${this._handleKeyUp}>
        <h2>
          ${heading}
        </h2>
        <paper-dialog-scrollable>
          ${this._cardConfig === undefined ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <hui-card-picker
                  .opp="${this.opp}"
                  @config-changed="${this._handleCardPicked}"
                ></hui-card-picker>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="content">
                  <div class="element-editor">
                    <hui-card-editor
                      .opp="${this.opp}"
                      .value="${this._cardConfig}"
                      @config-changed="${this._handleConfigChanged}"
                    ></hui-card-editor>
                  </div>
                  <div class="element-preview">
                    <hui-card-preview
                      .opp="${this.opp}"
                      .config="${this._cardConfig}"
                      class=${this._error ? "blur" : ""}
                    ></hui-card-preview>
                    ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <paper-spinner
                            active
                            alt="Can't update card"
                          ></paper-spinner>
                        ` : ``}
                  </div>
                </div>
              `}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._close}">
            ${this.opp.localize("ui.common.cancel")}
          </mwc-button>
          ${this._cardConfig !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <mwc-button
                  ?disabled="${!this._canSave || this._saving}"
                  @click="${this._save}"
                >
                  ${this._saving ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                        <paper-spinner active alt="Saving"></paper-spinner>
                      ` : this.opp.localize("ui.common.save")}
                </mwc-button>
              ` : ``}
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          --code-mirror-max-height: calc(100vh - 176px);
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the op-style-dialog max-height on small screens */
          op-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 850px) {
          op-paper-dialog {
            width: 845px;
          }
        }

        op-paper-dialog {
          max-width: 845px;
        }

        .center {
          margin-left: auto;
          margin-right: auto;
        }

        .content {
          display: flex;
          flex-direction: column;
          margin: 0 -10px;
        }
        .content hui-card-preview {
          margin: 4px auto;
          max-width: 390px;
        }
        .content .element-editor {
          margin: 0 10px;
        }

        @media (min-width: 1200px) {
          op-paper-dialog {
            max-width: none;
            width: 1000px;
          }

          .content {
            flex-direction: row;
          }
          .content > * {
            flex-basis: 0;
            flex-grow: 1;
            flex-shrink: 1;
            min-width: 0;
          }
          .content hui-card-preview {
            padding: 8px 0;
            margin: auto 10px;
            max-width: 500px;
          }
        }

        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        .hidden {
          display: none;
        }
        .element-editor {
          margin-bottom: 8px;
        }
        .blur {
          filter: blur(2px) grayscale(100%);
        }
        .element-preview {
          position: relative;
        }
        .element-preview paper-spinner {
          top: 50%;
          left: 50%;
          position: absolute;
          z-index: 10;
        }
        hui-card-preview {
          padding-top: 8px;
          margin-bottom: 4px;
          display: block;
          width: 100%;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_handleCardPicked",
      value: function _handleCardPicked(ev) {
        const config = ev.detail.config;

        if (this._params.entities && this._params.entities.length > 0) {
          if (Object.keys(config).includes("entities")) {
            config.entities = this._params.entities;
          } else if (Object.keys(config).includes("entity")) {
            config.entity = this._params.entities[0];
          }
        }

        this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_1___default()(config);
        this._error = ev.detail.error;
      }
    }, {
      kind: "method",
      key: "_handleConfigChanged",
      value: function _handleConfigChanged(ev) {
        this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_1___default()(ev.detail.config);
        this._error = ev.detail.error;
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        if (ev.keyCode === 27) {
          this._close();
        }
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
        this._cardConfig = undefined;
        this._error = undefined;
      }
    }, {
      kind: "get",
      key: "_canSave",
      value: function _canSave() {
        if (this._saving) {
          return false;
        }

        if (this._cardConfig === undefined) {
          return false;
        }

        if (this._cardEditorEl && this._cardEditorEl.hasError) {
          return false;
        }

        return true;
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save() {
        this._saving = true;
        await this._params.saveConfig(this._params.path.length === 1 ? Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["addCard"])(this._params.devconConfig, this._params.path, this._cardConfig) : Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["replaceCard"])(this._params.devconConfig, this._params.path, this._cardConfig));
        this._saving = false;
        Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_8__["showSaveSuccessToast"])(this, this.opp);

        this._close();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvY2FyZC1lZGl0b3IvaHVpLWRpYWxvZy1lZGl0LWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3NzLFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IGRlZXBGcmVlemUgZnJvbSBcImRlZXAtZnJlZXplXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IE9QUERvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgRGV2Y29uQ2FyZENvbmZpZywgRGV2Y29uVmlld0NvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuaW1wb3J0IFwiLi9odWktY2FyZC1lZGl0b3JcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSHVpQ2FyZEVkaXRvciB9IGZyb20gXCIuL2h1aS1jYXJkLWVkaXRvclwiO1xuaW1wb3J0IFwiLi9odWktY2FyZC1wcmV2aWV3XCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLXBpY2tlclwiO1xuaW1wb3J0IHsgRWRpdENhcmREaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcbmltcG9ydCB7IGFkZENhcmQsIHJlcGxhY2VDYXJkIH0gZnJvbSBcIi4uL2NvbmZpZy11dGlsXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgb3BTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBzaG93U2F2ZVN1Y2Nlc3NUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3RvYXN0LXNhdmVkLXN1Y2Nlc3NcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgT1BQRG9tRXZlbnRzIHtcbiAgICBcInJlbG9hZC1kZXZjb25cIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwicmVsb2FkLWRldmNvblwiOiBPUFBEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dFZGl0Q2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgb3BwITogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wYXJhbXM/OiBFZGl0Q2FyZERpYWxvZ1BhcmFtcztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYXJkQ29uZmlnPzogRGV2Y29uQ2FyZENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdmlld0NvbmZpZyE6IERldmNvblZpZXdDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2F2aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogRWRpdENhcmREaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgY29uc3QgW3ZpZXcsIGNhcmRdID0gcGFyYW1zLnBhdGg7XG4gICAgdGhpcy5fdmlld0NvbmZpZyA9IHBhcmFtcy5kZXZjb25Db25maWcudmlld3Nbdmlld107XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9XG4gICAgICBjYXJkICE9PSB1bmRlZmluZWQgPyB0aGlzLl92aWV3Q29uZmlnLmNhcmRzIVtjYXJkXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5fY2FyZENvbmZpZyAmJiAhT2JqZWN0LmlzRnJvemVuKHRoaXMuX2NhcmRDb25maWcpKSB7XG4gICAgICB0aGlzLl9jYXJkQ29uZmlnID0gZGVlcEZyZWV6ZSh0aGlzLl9jYXJkQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfY2FyZEVkaXRvckVsKCk6IEh1aUNhcmRFZGl0b3IgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaHVpLWNhcmQtZWRpdG9yXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRpbmc6IHN0cmluZztcbiAgICBpZiAodGhpcy5fY2FyZENvbmZpZyAmJiB0aGlzLl9jYXJkQ29uZmlnLnR5cGUpIHtcbiAgICAgIGhlYWRpbmcgPSBgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgIGB1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuJHt0aGlzLl9jYXJkQ29uZmlnLnR5cGV9Lm5hbWVgXG4gICAgICApfSAke3RoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuZWRpdF9jYXJkLmhlYWRlclwiKX1gO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NhcmRDb25maWcpIHtcbiAgICAgIGhlYWRpbmcgPSB0aGlzLl92aWV3Q29uZmlnLnRpdGxlXG4gICAgICAgID8gdGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmVkaXRfY2FyZC5waWNrX2NhcmRfdmlld190aXRsZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBgXCIke3RoaXMuX3ZpZXdDb25maWcudGl0bGV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICA6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuZWRpdF9jYXJkLnBpY2tfY2FyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGluZyA9IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuZWRpdF9jYXJkLmhlYWRlclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2cgd2l0aC1iYWNrZHJvcCBvcGVuZWQgbW9kYWwgQGtleXVwPSR7dGhpcy5faGFuZGxlS2V5VXB9PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgJHtoZWFkaW5nfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgJHt0aGlzLl9jYXJkQ29uZmlnID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aHVpLWNhcmQtcGlja2VyXG4gICAgICAgICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgICAgICAgQGNvbmZpZy1jaGFuZ2VkPVwiJHt0aGlzLl9oYW5kbGVDYXJkUGlja2VkfVwiXG4gICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtcGlja2VyPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LWVkaXRvclwiPlxuICAgICAgICAgICAgICAgICAgICA8aHVpLWNhcmQtZWRpdG9yXG4gICAgICAgICAgICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2NhcmRDb25maWd9XCJcbiAgICAgICAgICAgICAgICAgICAgICBAY29uZmlnLWNoYW5nZWQ9XCIke3RoaXMuX2hhbmRsZUNvbmZpZ0NoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtZWRpdG9yPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxodWktY2FyZC1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9jYXJkQ29uZmlnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9JHt0aGlzLl9lcnJvciA/IFwiYmx1clwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYW4ndCB1cGRhdGUgY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBgYH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlfVwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAke3RoaXMuX2NhcmRDb25maWcgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIkeyF0aGlzLl9jYW5TYXZlIHx8IHRoaXMuX3NhdmluZ31cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9zYXZpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlIGFsdD1cIlNhdmluZ1wiPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLnNhdmVcIil9XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLWNvZGUtbWlycm9yLW1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzZweCk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIG9wLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xuICAgICAgICAgIG9wLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogODQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDg0NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDAgLTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgbWFyZ2luOiA0cHggYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IC5lbGVtZW50LWVkaXRvciB7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQgPiAqIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAxMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1lZGl0b3Ige1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuYmx1ciB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDJweCkgZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5lbGVtZW50LXByZXZpZXcge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1wcmV2aWV3IHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIH1cbiAgICAgICAgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNhcmRQaWNrZWQoZXYpIHtcbiAgICBjb25zdCBjb25maWcgPSBldi5kZXRhaWwuY29uZmlnO1xuICAgIGlmICh0aGlzLl9wYXJhbXMhLmVudGl0aWVzICYmIHRoaXMuX3BhcmFtcyEuZW50aXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZykuaW5jbHVkZXMoXCJlbnRpdGllc1wiKSkge1xuICAgICAgICBjb25maWcuZW50aXRpZXMgPSB0aGlzLl9wYXJhbXMhLmVudGl0aWVzO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhjb25maWcpLmluY2x1ZGVzKFwiZW50aXR5XCIpKSB7XG4gICAgICAgIGNvbmZpZy5lbnRpdHkgPSB0aGlzLl9wYXJhbXMhLmVudGl0aWVzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jYXJkQ29uZmlnID0gZGVlcEZyZWV6ZShjb25maWcpO1xuICAgIHRoaXMuX2Vycm9yID0gZXYuZGV0YWlsLmVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ29uZmlnQ2hhbmdlZChldikge1xuICAgIHRoaXMuX2NhcmRDb25maWcgPSBkZWVwRnJlZXplKGV2LmRldGFpbC5jb25maWcpO1xuICAgIHRoaXMuX2Vycm9yID0gZXYuZGV0YWlsLmVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlS2V5VXAoZXY6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NhcmRDb25maWcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfY2FuU2F2ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fc2F2aW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYXJkQ29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcmRFZGl0b3JFbCAmJiB0aGlzLl9jYXJkRWRpdG9yRWwuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy5fcGFyYW1zIS5zYXZlQ29uZmlnKFxuICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IGFkZENhcmQoXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMhLmRldmNvbkNvbmZpZyxcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcyEucGF0aCBhcyBbbnVtYmVyXSxcbiAgICAgICAgICAgIHRoaXMuX2NhcmRDb25maWchXG4gICAgICAgICAgKVxuICAgICAgICA6IHJlcGxhY2VDYXJkKFxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zIS5kZXZjb25Db25maWcsXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMhLnBhdGggYXMgW251bWJlciwgbnVtYmVyXSxcbiAgICAgICAgICAgIHRoaXMuX2NhcmRDb25maWchXG4gICAgICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgc2hvd1NhdmVTdWNjZXNzVG9hc3QodGhpcywgdGhpcy5vcHApO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctZWRpdC1jYXJkXCI6IEh1aURpYWxvZ0VkaXRDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFHQTtBQUNBOztBQUpBOzs7O0FBV0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFBQTs7O0FBVUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTs7QUFFQTs7QUFBQTs7QUFOQTs7O0FBNUNBO0FBNkRBO0FBN0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnR0E7QUFoTkE7QUFBQTtBQUFBO0FBQUE7QUFtTkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE3TkE7QUFBQTtBQUFBO0FBQUE7QUFnT0E7QUFDQTtBQUNBO0FBbE9BO0FBQUE7QUFBQTtBQUFBO0FBcU9BO0FBQ0E7QUFDQTtBQUNBO0FBeE9BO0FBQUE7QUFBQTtBQUFBO0FBMk9BO0FBQ0E7QUFDQTtBQUNBO0FBOU9BO0FBQUE7QUFBQTtBQUFBO0FBaVBBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzUEE7QUFBQTtBQUFBO0FBQUE7QUE4UEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEvUUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=