(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["devcon-yaml-editor"],{

/***/ "./src/panels/devcon/common/structs/is-entity-id.ts":
/*!**********************************************************!*\
  !*** ./src/panels/devcon/common/structs/is-entity-id.ts ***!
  \**********************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
  if (typeof value !== "string") {
    return "entity id should be a string";
  }

  if (!value.includes(".")) {
    return "entity id should be in the format 'domain.entity'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/devcon/common/structs/is-icon.ts":
/*!*****************************************************!*\
  !*** ./src/panels/devcon/common/structs/is-icon.ts ***!
  \*****************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
  if (typeof value !== "string") {
    return "icon should be a string";
  }

  if (!value.includes(":")) {
    return "icon should be in the format 'mdi:icon'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/devcon/common/structs/struct.ts":
/*!****************************************************!*\
  !*** ./src/panels/devcon/common/structs/struct.ts ***!
  \****************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/devcon/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/devcon/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
  types: {
    "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
    icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"]
  }
});

/***/ }),

/***/ "./src/panels/devcon/hui-editor.ts":
/*!*****************************************!*\
  !*** ./src/panels/devcon/hui-editor.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_op_code_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/op-code-editor */ "./src/components/op-code-editor.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
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













 // This is not a duplicate import, one is for types, one is for element.
// tslint:disable-next-line



const devconStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].interface({
  title: "string?",
  views: ["object"],
  resources: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(["object"])
});

let DevconFullConfigEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-editor")], function (_initialize, _LitElement) {
  class DevconFullConfigEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DevconFullConfigEditor,
    d: [{
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
      key: "closeEditor",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_saving",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_changed",
      value: void 0
    }, {
      kind: "field",
      key: "_generation",

      value() {
        return 1;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <app-header-layout>
        <app-header>
          <app-toolbar>
            <paper-icon-button
              icon="opp:close"
              @click="${this._closeEditor}"
            ></paper-icon-button>
            <div main-title>
              ${this.opp.localize("ui.panel.devcon.editor.raw_editor.header")}
            </div>
            <div
              class="save-button
              ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          saved: this._saving === false || this._changed === true
        })}"
            >
              ${this._changed ? this.opp.localize("ui.panel.devcon.editor.raw_editor.unsaved_changes") : this.opp.localize("ui.panel.devcon.editor.raw_editor.saved")}
            </div>
            <mwc-button
              raised
              @click="${this._handleSave}"
              .disabled=${!this._changed}
              >${this.opp.localize("ui.panel.devcon.editor.raw_editor.save")}</mwc-button
            >
          </app-toolbar>
        </app-header>
        <div class="content">
          <op-code-editor
            mode="yaml"
            autofocus
            .rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__["computeRTL"])(this.opp)}
            .opp="${this.opp}"
            @value-changed="${this._yamlChanged}"
            @editor-save="${this._handleSave}"
          >
          </op-code-editor>
        </div>
      </app-header-layout>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.yamlEditor.value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeDump"])(this.devcon.config);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          --code-mirror-height: 100%;
        }

        app-header-layout {
          height: 100vh;
        }

        app-toolbar {
          background-color: var(--dark-background-color, #455a64);
          color: var(--dark-text-color);
        }

        mwc-button[disabled] {
          background-color: var(--mdc-theme-on-primary);
          border-radius: 4px;
        }

        .comments {
          font-size: 16px;
        }

        .content {
          height: calc(100vh - 68px);
        }

        hui-code-editor {
          height: 100%;
        }

        .save-button {
          opacity: 0;
          font-size: 14px;
          padding: 0px 10px;
        }

        .saved {
          opacity: 1;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_yamlChanged",
      value: function _yamlChanged() {
        this._changed = !this.yamlEditor.codemirror.getDoc().isClean(this._generation);

        if (this._changed && !window.onbeforeunload) {
          window.onbeforeunload = () => {
            return true;
          };
        } else if (!this._changed && window.onbeforeunload) {
          window.onbeforeunload = null;
        }
      }
    }, {
      kind: "method",
      key: "_closeEditor",
      value: function _closeEditor() {
        if (this._changed) {
          if (!confirm(this.opp.localize("ui.panel.devcon.editor.raw_editor.confirm_unsaved_changes"))) {
            return;
          }
        }

        window.onbeforeunload = null;

        if (this.closeEditor) {
          this.closeEditor();
        }
      }
    }, {
      kind: "method",
      key: "_removeConfig",
      value: async function _removeConfig() {
        try {
          await this.devcon.deleteConfig();
        } catch (err) {
          alert(this.opp.localize("ui.panel.devcon.editor.raw_editor.error_remove", "error", err));
        }

        window.onbeforeunload = null;

        if (this.closeEditor) {
          this.closeEditor();
        }
      }
    }, {
      kind: "method",
      key: "_handleSave",
      value: async function _handleSave() {
        this._saving = true;
        const value = this.yamlEditor.value;

        if (!value) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showConfirmationDialog"])(this, {
            title: this.opp.localize("ui.panel.devcon.editor.raw_editor.confirm_remove_config_title"),
            text: this.opp.localize("ui.panel.devcon.editor.raw_editor.confirm_remove_config_text"),
            confirmText: this.opp.localize("ui.common.yes"),
            dismissText: this.opp.localize("ui.common.no"),
            confirm: () => this._removeConfig()
          });
          return;
        }

        if (this.yamlEditor.hasComments) {
          if (!confirm(this.opp.localize("ui.panel.devcon.editor.raw_editor.confirm_unsaved_comments"))) {
            return;
          }
        }

        let config;

        try {
          config = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeLoad"])(value);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showAlertDialog"])(this, {
            text: this.opp.localize("ui.panel.devcon.editor.raw_editor.error_parse_yaml", "error", err)
          });
          this._saving = false;
          return;
        }

        try {
          config = devconStruct(config);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showAlertDialog"])(this, {
            text: this.opp.localize("ui.panel.devcon.editor.raw_editor.error_invalid_config", "error", err)
          });
          return;
        }

        try {
          await this.devcon.saveConfig(config);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showAlertDialog"])(this, {
            text: this.opp.localize("ui.panel.devcon.editor.raw_editor.error_save_yaml", "error", err)
          });
        }

        this._generation = this.yamlEditor.codemirror.getDoc().changeGeneration(true);
        window.onbeforeunload = null;
        this._saving = false;
        this._changed = false;
      }
    }, {
      kind: "get",
      key: "yamlEditor",
      value: function yamlEditor() {
        return this.shadowRoot.querySelector("op-code-editor");
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29uLXlhbWwtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvaXMtZW50aXR5LWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2h1aS1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRW50aXR5SWQodmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdkb21haW4uZW50aXR5J1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbih2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnbWRpOmljb24nXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBzdXBlcnN0cnVjdCB9IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgaXNFbnRpdHlJZCB9IGZyb20gXCIuL2lzLWVudGl0eS1pZFwiO1xuaW1wb3J0IHsgaXNJY29uIH0gZnJvbSBcIi4vaXMtaWNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gc3VwZXJzdHJ1Y3Qoe1xuICB0eXBlczoge1xuICAgIFwiZW50aXR5LWlkXCI6IGlzRW50aXR5SWQsXG4gICAgaWNvbjogaXNJY29uLFxuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBzYWZlRHVtcCwgc2FmZUxvYWQgfSBmcm9tIFwianMteWFtbFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQgeyBEZXZjb24gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWljb25cIjtcbmltcG9ydCB7IG9wU3R5bGUgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1jb2RlLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IE9wQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29wLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBEZXZjb25Db25maWcgfSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7XG4gIHNob3dBbGVydERpYWxvZyxcbiAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyxcbn0gZnJvbSBcIi4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcblxuY29uc3QgZGV2Y29uU3RydWN0ID0gc3RydWN0LmludGVyZmFjZSh7XG4gIHRpdGxlOiBcInN0cmluZz9cIixcbiAgdmlld3M6IFtcIm9iamVjdFwiXSxcbiAgcmVzb3VyY2VzOiBzdHJ1Y3Qub3B0aW9uYWwoW1wib2JqZWN0XCJdKSxcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lZGl0b3JcIilcbmNsYXNzIERldmNvbkZ1bGxDb25maWdFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZjb24/OiBEZXZjb247XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG9zZUVkaXRvcj86ICgpID0+IHZvaWQ7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NhdmluZz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NoYW5nZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2dlbmVyYXRpb24gPSAxO1xuXG4gIHB1YmxpYyByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dD5cbiAgICAgICAgPGFwcC1oZWFkZXI+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJvcHA6Y2xvc2VcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlRWRpdG9yfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLnJhd19lZGl0b3IuaGVhZGVyXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwic2F2ZS1idXR0b25cbiAgICAgICAgICAgICAgJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgc2F2ZWQ6IHRoaXMuX3NhdmluZyEgPT09IGZhbHNlIHx8IHRoaXMuX2NoYW5nZWQgPT09IHRydWUsXG4gICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5fY2hhbmdlZFxuICAgICAgICAgICAgICAgID8gdGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IucmF3X2VkaXRvci51bnNhdmVkX2NoYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5yYXdfZWRpdG9yLnNhdmVkXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVTYXZlfVwiXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0keyF0aGlzLl9jaGFuZ2VkfVxuICAgICAgICAgICAgICA+JHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZVwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxvcC1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAucnRsPSR7Y29tcHV0ZVJUTCh0aGlzLm9wcCl9XG4gICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3lhbWxDaGFuZ2VkfVwiXG4gICAgICAgICAgICBAZWRpdG9yLXNhdmU9XCIke3RoaXMuX2hhbmRsZVNhdmV9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9vcC1jb2RlLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMueWFtbEVkaXRvci52YWx1ZSA9IHNhZmVEdW1wKHRoaXMuZGV2Y29uIS5jb25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLS1jb2RlLW1pcnJvci1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtaGVhZGVyLWxheW91dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IsICM0NTVhNjQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbWVudHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2OHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh1aS1jb2RlLWVkaXRvciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmUtYnV0dG9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYXZlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfeWFtbENoYW5nZWQoKSB7XG4gICAgdGhpcy5fY2hhbmdlZCA9ICF0aGlzLnlhbWxFZGl0b3JcbiAgICAgIC5jb2RlbWlycm9yIS5nZXREb2MoKVxuICAgICAgLmlzQ2xlYW4odGhpcy5fZ2VuZXJhdGlvbik7XG4gICAgaWYgKHRoaXMuX2NoYW5nZWQgJiYgIXdpbmRvdy5vbmJlZm9yZXVubG9hZCkge1xuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlZCAmJiB3aW5kb3cub25iZWZvcmV1bmxvYWQpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VFZGl0b3IoKSB7XG4gICAgaWYgKHRoaXMuX2NoYW5nZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXG4gICAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IucmF3X2VkaXRvci5jb25maXJtX3Vuc2F2ZWRfY2hhbmdlc1wiXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIGlmICh0aGlzLmNsb3NlRWRpdG9yKSB7XG4gICAgICB0aGlzLmNsb3NlRWRpdG9yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVtb3ZlQ29uZmlnKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmRldmNvbiEuZGVsZXRlQ29uZmlnKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLnJhd19lZGl0b3IuZXJyb3JfcmVtb3ZlXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIGVyclxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIGlmICh0aGlzLmNsb3NlRWRpdG9yKSB7XG4gICAgICB0aGlzLmNsb3NlRWRpdG9yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlU2F2ZSgpIHtcbiAgICB0aGlzLl9zYXZpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnlhbWxFZGl0b3IudmFsdWU7XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGl0bGU6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5yYXdfZWRpdG9yLmNvbmZpcm1fcmVtb3ZlX2NvbmZpZ190aXRsZVwiXG4gICAgICAgICksXG4gICAgICAgIHRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5yYXdfZWRpdG9yLmNvbmZpcm1fcmVtb3ZlX2NvbmZpZ190ZXh0XCJcbiAgICAgICAgKSxcbiAgICAgICAgY29uZmlybVRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgICAgZGlzbWlzc1RleHQ6IHRoaXMub3BwLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgICBjb25maXJtOiAoKSA9PiB0aGlzLl9yZW1vdmVDb25maWcoKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnlhbWxFZGl0b3IuaGFzQ29tbWVudHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXG4gICAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IucmF3X2VkaXRvci5jb25maXJtX3Vuc2F2ZWRfY29tbWVudHNcIlxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29uZmlnOiBEZXZjb25Db25maWc7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZyA9IHNhZmVMb2FkKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5yYXdfZWRpdG9yLmVycm9yX3BhcnNlX3lhbWxcIixcbiAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgZXJyXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uZmlnID0gZGV2Y29uU3RydWN0KGNvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IucmF3X2VkaXRvci5lcnJvcl9pbnZhbGlkX2NvbmZpZ1wiLFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICBlcnJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5kZXZjb24hLnNhdmVDb25maWcoY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5yYXdfZWRpdG9yLmVycm9yX3NhdmVfeWFtbFwiLFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICBlcnJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9nZW5lcmF0aW9uID0gdGhpcy55YW1sRWRpdG9yXG4gICAgICAuY29kZW1pcnJvciEuZ2V0RG9jKClcbiAgICAgIC5jaGFuZ2VHZW5lcmF0aW9uKHRydWUpO1xuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgeWFtbEVkaXRvcigpOiBPcENvZGVFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJvcC1jb2RlLWVkaXRvclwiKSEgYXMgT3BDb2RlRWRpdG9yO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZWRpdG9yXCI6IERldmNvbkZ1bGxDb25maWdFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFEQTs7QUFJQTs7OztBQVFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUF4Q0E7QUE4Q0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNENBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7O0FBN09BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=