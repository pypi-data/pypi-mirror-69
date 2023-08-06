(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-group-page"],{

/***/ "./src/panels/config/zha/zha-group-page.ts":
/*!*************************************************!*\
  !*** ./src/panels/config/zha/zha-group-page.ts ***!
  \*************************************************/
/*! exports provided: ZHAGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAGroupPage", function() { return ZHAGroupPage; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _layouts_opp_error_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/opp-error-screen */ "./src/layouts/opp-error-screen.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts");
/* harmony import */ var _zha_devices_data_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zha-devices-data-table */ "./src/panels/config/zha/zha-devices-data-table.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
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














let ZHAGroupPage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("zha-group-page")], function (_initialize, _LitElement) {
  class ZHAGroupPage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAGroupPage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "group",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "groupId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_processingAdd",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_processingRemove",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_filteredDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_selectedDevicesToAdd",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_selectedDevicesToRemove",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_members",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(group => group.members);
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAGroupPage.prototype), "connectedCallback", this).call(this);

        if (this.opp && this._firstUpdatedCalled) {
          this._fetchData();
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(ZHAGroupPage.prototype), "disconnectedCallback", this).call(this);

        this._processingAdd = false;
        this._processingRemove = false;
        this._selectedDevicesToRemove = [];
        this._selectedDevicesToAdd = [];
        this.devices = [];
        this._filteredDevices = [];
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAGroupPage.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.opp) {
          this._fetchData();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.group) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <opp-error-screen
          error="${this.opp.localize("ui.panel.config.zha.groups.group_not_found")}"
        ></opp-error-screen>
      `;
        }

        const members = this._members(this.group);

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-subpage .header=${this.group.name}>
        <paper-icon-button
          slot="toolbar-icon"
          icon="opp:delete"
          @click=${this._deleteGroup}
        ></paper-icon-button>
        <op-config-section .isWide=${this.isWide}>
          <div class="header">
            ${this.opp.localize("ui.panel.config.zha.groups.group_info")}
          </div>

          <p slot="introduction">
            ${this.opp.localize("ui.panel.config.zha.groups.group_details")}
          </p>

          <p><b>Name:</b> ${this.group.name}</p>
          <p><b>Group Id:</b> ${Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatAsPaddedHex"])(this.group.group_id)}</p>

          <div class="header">
            ${this.opp.localize("ui.panel.config.zha.groups.members")}
          </div>

          ${members.length ? members.map(member => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <zha-device-card
                    class="card"
                    .opp=${this.opp}
                    .device=${member}
                    .narrow=${this.narrow}
                    .showActions=${false}
                    .showEditableInfo=${false}
                  ></zha-device-card>
                `) : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <p>
                  This group has no members
                </p>
              `}
          ${members.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="header">
                  ${this.opp.localize("ui.panel.config.zha.groups.remove_members")}
                </div>

                <zha-devices-data-table
                  .opp=${this.opp}
                  .devices=${members}
                  .narrow=${this.narrow}
                  selectable
                  @selection-changed=${this._handleRemoveSelectionChanged}
                  class="table"
                >
                </zha-devices-data-table>

                <div class="paper-dialog-buttons">
                  <mwc-button
                    .disabled="${!this._selectedDevicesToRemove.length || this._processingRemove}"
                    @click="${this._removeMembersFromGroup}"
                    class="button"
                  >
                    <paper-spinner
                      ?active="${this._processingRemove}"
                      alt=${this.opp.localize("ui.panel.config.zha.groups.removing_members")}
                    ></paper-spinner>
                    ${this.opp.localize("ui.panel.config.zha.groups.remove_members")}</mwc-button
                  >
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}

          <div class="header">
            ${this.opp.localize("ui.panel.config.zha.groups.add_members")}
          </div>

          <zha-devices-data-table
            .opp=${this.opp}
            .devices=${this._filteredDevices}
            .narrow=${this.narrow}
            selectable
            @selection-changed=${this._handleAddSelectionChanged}
            class="table"
          >
          </zha-devices-data-table>

          <div class="paper-dialog-buttons">
            <mwc-button
              .disabled="${!this._selectedDevicesToAdd.length || this._processingAdd}"
              @click="${this._addMembersToGroup}"
              class="button"
            >
              <paper-spinner
                ?active="${this._processingAdd}"
                alt=${this.opp.localize("ui.panel.config.zha.groups.adding_members")}
              ></paper-spinner>
              ${this.opp.localize("ui.panel.config.zha.groups.add_members")}</mwc-button
            >
          </div>
        </op-config-section>
      </opp-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        if (this.groupId !== null && this.groupId !== undefined) {
          this.group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["fetchGroup"])(this.opp, this.groupId);
        }

        this.devices = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["fetchGroupableDevices"])(this.opp); // filter the groupable devices so we only show devices that aren't already in the group

        this._filterDevices();
      }
    }, {
      kind: "method",
      key: "_filterDevices",
      value: function _filterDevices() {
        // filter the groupable devices so we only show devices that aren't already in the group
        this._filteredDevices = this.devices.filter(device => {
          return !this.group.members.some(member => member.ieee === device.ieee);
        });
      }
    }, {
      kind: "method",
      key: "_handleAddSelectionChanged",
      value: function _handleAddSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;

        if (changedSelection.selected && !this._selectedDevicesToAdd.includes(entity)) {
          this._selectedDevicesToAdd.push(entity);
        } else {
          const index = this._selectedDevicesToAdd.indexOf(entity);

          if (index !== -1) {
            this._selectedDevicesToAdd.splice(index, 1);
          }
        }

        this._selectedDevicesToAdd = [...this._selectedDevicesToAdd];
      }
    }, {
      kind: "method",
      key: "_handleRemoveSelectionChanged",
      value: function _handleRemoveSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;

        if (changedSelection.selected && !this._selectedDevicesToRemove.includes(entity)) {
          this._selectedDevicesToRemove.push(entity);
        } else {
          const index = this._selectedDevicesToRemove.indexOf(entity);

          if (index !== -1) {
            this._selectedDevicesToRemove.splice(index, 1);
          }
        }

        this._selectedDevicesToRemove = [...this._selectedDevicesToRemove];
      }
    }, {
      kind: "method",
      key: "_addMembersToGroup",
      value: async function _addMembersToGroup() {
        this._processingAdd = true;
        this.group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["addMembersToGroup"])(this.opp, this.groupId, this._selectedDevicesToAdd);

        this._filterDevices();

        this._selectedDevicesToAdd = [];
        this._processingAdd = false;
      }
    }, {
      kind: "method",
      key: "_removeMembersFromGroup",
      value: async function _removeMembersFromGroup() {
        this._processingRemove = true;
        this.group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["removeMembersFromGroup"])(this.opp, this.groupId, this._selectedDevicesToRemove);

        this._filterDevices();

        this._selectedDevicesToRemove = [];
        this._processingRemove = false;
      }
    }, {
      kind: "method",
      key: "_deleteGroup",
      value: async function _deleteGroup() {
        await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["removeGroups"])(this.opp, [this.groupId]);
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_9__["navigate"])(this, `/config/zha/groups`, true);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .header {
          font-family: var(--paper-font-display1_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-display1_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-display1_-_font-size);
          font-weight: var(--paper-font-display1_-_font-weight);
          letter-spacing: var(--paper-font-display1_-_letter-spacing);
          line-height: var(--paper-font-display1_-_line-height);
          opacity: var(--dark-primary-opacity);
        }

        op-config-section *:last-child {
          padding-bottom: 24px;
        }

        .button {
          float: right;
        }

        .table {
          height: 200px;
          overflow: auto;
        }

        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .paper-dialog-buttons {
          align-items: flex-end;
          padding: 8px;
        }
        .paper-dialog-buttons .warning {
          --mdc-theme-primary: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWdyb3VwLXBhZ2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWdyb3VwLXBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC1lcnJvci1zY3JlZW5cIjtcbmltcG9ydCBcIi4uL29wLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBaSEFEZXZpY2UsXG4gIFpIQUdyb3VwLFxuICBmZXRjaEdyb3VwLFxuICByZW1vdmVHcm91cHMsXG4gIGZldGNoR3JvdXBhYmxlRGV2aWNlcyxcbiAgYWRkTWVtYmVyc1RvR3JvdXAsXG4gIHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vemhhLWRldmljZS1jYXJkXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2VzLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IFNlbGVjdGlvbkNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1ncm91cC1wYWdlXCIpXG5leHBvcnQgY2xhc3MgWkhBR3JvdXBQYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZ3JvdXA/OiBaSEFHcm91cDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGdyb3VwSWQhOiBudW1iZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZXM6IFpIQURldmljZVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Byb2Nlc3NpbmdBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcHJvY2Vzc2luZ1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9maWx0ZXJlZERldmljZXM6IFpIQURldmljZVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkRGV2aWNlc1RvQWRkOiBzdHJpbmdbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZERldmljZXNUb1JlbW92ZTogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIF9maXJzdFVwZGF0ZWRDYWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9tZW1iZXJzID0gbWVtb2l6ZU9uZShcbiAgICAoZ3JvdXA6IFpIQUdyb3VwKTogWkhBRGV2aWNlW10gPT4gZ3JvdXAubWVtYmVyc1xuICApO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLm9wcCAmJiB0aGlzLl9maXJzdFVwZGF0ZWRDYWxsZWQpIHtcbiAgICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGQgPSBmYWxzZTtcbiAgICB0aGlzLl9wcm9jZXNzaW5nUmVtb3ZlID0gZmFsc2U7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmUgPSBbXTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZCA9IFtdO1xuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xuICAgIHRoaXMuX2ZpbHRlcmVkRGV2aWNlcyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIGlmICh0aGlzLm9wcCkge1xuICAgICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5ncm91cCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxvcHAtZXJyb3Itc2NyZWVuXG4gICAgICAgICAgZXJyb3I9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5ncm91cF9ub3RfZm91bmRcIlxuICAgICAgICAgICl9XCJcbiAgICAgICAgPjwvb3BwLWVycm9yLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgbWVtYmVycyA9IHRoaXMuX21lbWJlcnModGhpcy5ncm91cCk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcHAtc3VicGFnZSAuaGVhZGVyPSR7dGhpcy5ncm91cC5uYW1lfT5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgc2xvdD1cInRvb2xiYXItaWNvblwiXG4gICAgICAgICAgaWNvbj1cIm9wcDpkZWxldGVcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZUdyb3VwfVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPG9wLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX2luZm9cIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cCBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuZ3JvdXBfZGV0YWlsc1wiKX1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD48Yj5OYW1lOjwvYj4gJHt0aGlzLmdyb3VwLm5hbWV9PC9wPlxuICAgICAgICAgIDxwPjxiPkdyb3VwIElkOjwvYj4gJHtmb3JtYXRBc1BhZGRlZEhleCh0aGlzLmdyb3VwLmdyb3VwX2lkKX08L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMubWVtYmVyc1wiKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7bWVtYmVycy5sZW5ndGhcbiAgICAgICAgICAgID8gbWVtYmVycy5tYXAoXG4gICAgICAgICAgICAgICAgKG1lbWJlcikgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAuZGV2aWNlPSR7bWVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAgIC5zaG93QWN0aW9ucz0ke2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAuc2hvd0VkaXRhYmxlSW5mbz0ke2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgPjwvemhhLWRldmljZS1jYXJkPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgVGhpcyBncm91cCBoYXMgbm8gbWVtYmVyc1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAke21lbWJlcnMubGVuZ3RoXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5yZW1vdmVfbWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHpoYS1kZXZpY2VzLWRhdGEtdGFibGVcbiAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgIC5kZXZpY2VzPSR7bWVtYmVyc31cbiAgICAgICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgICAgICAgICAgIEBzZWxlY3Rpb24tY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVJlbW92ZVNlbGVjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRhYmxlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC96aGEtZGV2aWNlcy1kYXRhLXRhYmxlPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9XCIkeyF0aGlzLl9zZWxlY3RlZERldmljZXNUb1JlbW92ZS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nUmVtb3ZlfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fcmVtb3ZlTWVtYmVyc0Zyb21Hcm91cH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fcHJvY2Vzc2luZ1JlbW92ZX1cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5yZW1vdmluZ19tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLnJlbW92ZV9tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYGB9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuYWRkX21lbWJlcnNcIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8emhhLWRldmljZXMtZGF0YS10YWJsZVxuICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgLmRldmljZXM9JHt0aGlzLl9maWx0ZXJlZERldmljZXN9XG4gICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICBzZWxlY3RhYmxlXG4gICAgICAgICAgICBAc2VsZWN0aW9uLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVBZGRTZWxlY3Rpb25DaGFuZ2VkfVxuICAgICAgICAgICAgY2xhc3M9XCJ0YWJsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvemhhLWRldmljZXMtZGF0YS10YWJsZT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgLmRpc2FibGVkPVwiJHshdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9BZGQubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ0FkZH1cIlxuICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2FkZE1lbWJlcnNUb0dyb3VwfVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICA/YWN0aXZlPVwiJHt0aGlzLl9wcm9jZXNzaW5nQWRkfVwiXG4gICAgICAgICAgICAgICAgYWx0PSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmFkZGluZ19tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmFkZF9tZW1iZXJzXCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvb3BwLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICBpZiAodGhpcy5ncm91cElkICE9PSBudWxsICYmIHRoaXMuZ3JvdXBJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmdyb3VwID0gYXdhaXQgZmV0Y2hHcm91cCh0aGlzLm9wcCEsIHRoaXMuZ3JvdXBJZCk7XG4gICAgfVxuICAgIHRoaXMuZGV2aWNlcyA9IGF3YWl0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyh0aGlzLm9wcCEpO1xuICAgIC8vIGZpbHRlciB0aGUgZ3JvdXBhYmxlIGRldmljZXMgc28gd2Ugb25seSBzaG93IGRldmljZXMgdGhhdCBhcmVuJ3QgYWxyZWFkeSBpbiB0aGUgZ3JvdXBcbiAgICB0aGlzLl9maWx0ZXJEZXZpY2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEZXZpY2VzKCkge1xuICAgIC8vIGZpbHRlciB0aGUgZ3JvdXBhYmxlIGRldmljZXMgc28gd2Ugb25seSBzaG93IGRldmljZXMgdGhhdCBhcmVuJ3QgYWxyZWFkeSBpbiB0aGUgZ3JvdXBcbiAgICB0aGlzLl9maWx0ZXJlZERldmljZXMgPSB0aGlzLmRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgIHJldHVybiAhdGhpcy5ncm91cCEubWVtYmVycy5zb21lKChtZW1iZXIpID0+IG1lbWJlci5pZWVlID09PSBkZXZpY2UuaWVlZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBZGRTZWxlY3Rpb25DaGFuZ2VkKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZWRTZWxlY3Rpb24gPSBldi5kZXRhaWwgYXMgU2VsZWN0aW9uQ2hhbmdlZEV2ZW50O1xuICAgIGNvbnN0IGVudGl0eSA9IGNoYW5nZWRTZWxlY3Rpb24uaWQ7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFNlbGVjdGlvbi5zZWxlY3RlZCAmJlxuICAgICAgIXRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkLmluY2x1ZGVzKGVudGl0eSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkLnB1c2goZW50aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZC5pbmRleE9mKGVudGl0eSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkID0gWy4uLnRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkXTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlbW92ZVNlbGVjdGlvbkNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2hhbmdlZFNlbGVjdGlvbiA9IGV2LmRldGFpbCBhcyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gICAgY29uc3QgZW50aXR5ID0gY2hhbmdlZFNlbGVjdGlvbi5pZDtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkU2VsZWN0aW9uLnNlbGVjdGVkICYmXG4gICAgICAhdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmUuaW5jbHVkZXMoZW50aXR5KVxuICAgICkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmUucHVzaChlbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvUmVtb3ZlLmluZGV4T2YoZW50aXR5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmUgPSBbLi4udGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmVdO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWRkTWVtYmVyc1RvR3JvdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0FkZCA9IHRydWU7XG4gICAgdGhpcy5ncm91cCA9IGF3YWl0IGFkZE1lbWJlcnNUb0dyb3VwKFxuICAgICAgdGhpcy5vcHAsXG4gICAgICB0aGlzLmdyb3VwSWQsXG4gICAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZFxuICAgICk7XG4gICAgdGhpcy5fZmlsdGVyRGV2aWNlcygpO1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkID0gW107XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0FkZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVtb3ZlTWVtYmVyc0Zyb21Hcm91cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nUmVtb3ZlID0gdHJ1ZTtcbiAgICB0aGlzLmdyb3VwID0gYXdhaXQgcmVtb3ZlTWVtYmVyc0Zyb21Hcm91cChcbiAgICAgIHRoaXMub3BwLFxuICAgICAgdGhpcy5ncm91cElkLFxuICAgICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmVcbiAgICApO1xuICAgIHRoaXMuX2ZpbHRlckRldmljZXMoKTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb1JlbW92ZSA9IFtdO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdSZW1vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZUdyb3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHJlbW92ZUdyb3Vwcyh0aGlzLm9wcCwgW3RoaXMuZ3JvdXBJZF0pO1xuICAgIG5hdmlnYXRlKHRoaXMsIGAvY29uZmlnL3poYS9ncm91cHNgLCB0cnVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtZGlzcGxheTFfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtZGlzcGxheTFfLV9mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fZm9udC13ZWlnaHQpO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fbGluZS1oZWlnaHQpO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWNvbmZpZy1zZWN0aW9uICo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyW2FjdGl2ZV0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1kaWFsb2ctYnV0dG9ucyB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAucGFwZXItZGlhbG9nLWJ1dHRvbnMgLndhcm5pbmcge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQUFBO0FBQUE7QUFBQTtBQTZDQTtBQUNBOztBQUVBOztBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTs7OztBQWdCQTtBQUNBOztBQUdBOzs7O0FBTUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFFQTs7OztBQUlBO0FBQ0E7O0FBSUE7OztBQS9CQTtBQUNBOztBQXVDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUlBOzs7OztBQTNHQTtBQW1IQTtBQTVLQTtBQUFBO0FBQUE7QUFBQTtBQStLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckxBO0FBQUE7QUFBQTtBQUFBO0FBd0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1TEE7QUFBQTtBQUFBO0FBQUE7QUErTEE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBN01BO0FBQUE7QUFBQTtBQUFBO0FBZ05BO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTlOQTtBQUFBO0FBQUE7QUFBQTtBQWlPQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBMU9BO0FBQUE7QUFBQTtBQUFBO0FBNk9BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF0UEE7QUFBQTtBQUFBO0FBQUE7QUF5UEE7QUFDQTtBQUNBO0FBM1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4UEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErQ0E7QUE3U0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=