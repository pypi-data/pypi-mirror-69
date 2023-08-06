(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-dashboard"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
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
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function () {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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







/*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./src/components/op-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/op-icon-next.ts ***!
  \****************************************/
/*! exports provided: OpIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIconNext", function() { return OpIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./op-icon */ "./src/components/op-icon.ts");
 // Not duplicate, this is for typing.
// tslint:disable-next-line


class OpIconNext extends _op_icon__WEBPACK_IMPORTED_MODULE_1__["OpIcon"] {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "opp:chevron-right" : "opp:chevron-left";
    }, 100);
  }

}
customElements.define("op-icon-next", OpIconNext);

/***/ }),

/***/ "./src/components/op-icon.ts":
/*!***********************************!*\
  !*** ./src/components/op-icon.ts ***!
  \***********************************/
/*! exports provided: OpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIcon", function() { return OpIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class OpIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("op-icon", OpIcon);

/***/ }),

/***/ "./src/panels/config/dashboard/op-config-dashboard.ts":
/*!************************************************************!*\
  !*** ./src/panels/config/dashboard/op-config-dashboard.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_icon_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/op-icon-next */ "./src/components/op-icon-next.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _op_config_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./op-config-navigation */ "./src/panels/config/dashboard/op-config-navigation.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
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














let OpConfigDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-config-dashboard")], function (_initialize, _LitElement) {
  class OpConfigDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigDashboard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
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
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <app-header-layout has-scrolling-region>
        <app-header fixed slot="header">
          <app-toolbar>
            <op-menu-button
              .opp=${this.opp}
              .narrow=${this.narrow}
            ></op-menu-button>
          </app-toolbar>
        </app-header>

        <op-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.opp.localize("ui.panel.config.header")}
          </div>

          <div slot="introduction">
            ${this.opp.localize("ui.panel.config.introduction")}
          </div>

          ${this.cloudStatus && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_6__["isComponentLoaded"])(this.opp, "cloud") ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <op-card>
                  <op-config-navigation
                    .opp=${this.opp}
                    .showAdvanced=${this.showAdvanced}
                    .pages=${[{
          component: "cloud",
          path: "/config/cloud",
          translationKey: "ui.panel.config.cloud.caption",
          info: this.cloudStatus,
          icon: "opp:cloud-lock"
        }]}
                  ></op-config-navigation>
                </op-card>
              ` : ""}
          ${Object.values(_op_panel_config__WEBPACK_IMPORTED_MODULE_11__["configSections"]).map(section => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <op-card>
                <op-config-navigation
                  .opp=${this.opp}
                  .showAdvanced=${this.showAdvanced}
                  .pages=${section}
                ></op-config-navigation>
              </op-card>
            `)}
          ${!this.showAdvanced ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="promo-advanced">
                  ${this.opp.localize("ui.panel.config.advanced_mode.hint_enable")}
                  <a href="/profile"
                    >${this.opp.localize("ui.panel.config.advanced_mode.link_profile_page")}</a
                  >.
                </div>
              ` : ""}
        </op-config-section>
      </app-header-layout>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        app-header {
          --app-header-background-color: var(--primary-background-color);
        }
        op-card:last-child {
          margin-bottom: 24px;
        }
        op-config-section {
          margin-top: -20px;
        }
        op-card {
          overflow: hidden;
        }
        op-card a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
        .promo-advanced {
          text-align: center;
          color: var(--secondary-text-color);
          margin-bottom: 24px;
        }
        .promo-advanced a {
          color: var(--secondary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/dashboard/op-config-navigation.ts":
/*!*************************************************************!*\
  !*** ./src/panels/config/dashboard/op-config-navigation.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_icon_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-icon-next */ "./src/components/op-icon-next.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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









let OpConfigNavigation = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])("op-config-navigation")], function (_initialize, _LitElement) {
  class OpConfigNavigation extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigNavigation,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "pages",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      ${this.pages.map(page => (!page.component || page.core || Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__["isComponentLoaded"])(this.opp, page.component)) && (!page.exportOnly || this.showAdvanced) ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
              <a
                href=${`/config/${page.component}`}
                aria-role="option"
                tabindex="-1"
              >
                <paper-icon-item>
                  <op-icon .icon=${page.icon} slot="item-icon"></op-icon>
                  <paper-item-body two-line>
                    ${this.opp.localize(`ui.panel.config.${page.component}.caption`)}
                    ${page.component === "cloud" && page.info ? page.info.logged_in ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                            <div secondary>
                              ${this.opp.localize("ui.panel.config.cloud.description_login", "email", page.info.email)}
                            </div>
                          ` : lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                            <div secondary>
                              ${this.opp.localize("ui.panel.config.cloud.description_features")}
                            </div>
                          ` : lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                          <div secondary>
                            ${this.opp.localize(`ui.panel.config.${page.component}.description`)}
                          </div>
                        `}
                  </paper-item-body>
                  <op-icon-next></op-icon-next>
                </paper-icon-item>
              </a>
            ` : "")}
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      a {
        text-decoration: none;
        color: var(--primary-text-color);
        position: relative;
        display: block;
        outline: 0;
      }
      op-icon,
      op-icon-next {
        color: var(--secondary-text-color);
      }
      .iron-selected paper-item::before,
      a:not(.iron-selected):focus::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      a:not(.iron-selected):focus::before {
        background-color: currentColor;
        opacity: var(--dark-divider-opacity);
      }
      .iron-selected paper-item:focus::before,
      .iron-selected:focus paper-item::before {
        opacity: 0.2;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWRhc2hib2FyZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kYXNoYm9hcmQvb3AtY29uZmlnLWRhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kYXNoYm9hcmQvb3AtY29uZmlnLW5hdmlnYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7QXBwTGF5b3V0QmVoYXZpb3J9IGZyb20gJy4uL2FwcC1sYXlvdXQtYmVoYXZpb3IvYXBwLWxheW91dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuYXBwLWhlYWRlci1sYXlvdXQgaXMgYSB3cmFwcGVyIGVsZW1lbnQgdGhhdCBwb3NpdGlvbnMgYW4gYXBwLWhlYWRlciBhbmQgb3RoZXJcbmNvbnRlbnQuIFRoaXMgZWxlbWVudCB1c2VzIHRoZSBkb2N1bWVudCBzY3JvbGwgYnkgZGVmYXVsdCwgYnV0IGl0IGNhbiBhbHNvXG5kZWZpbmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuXG5Vc2luZyB0aGUgZG9jdW1lbnQgc2Nyb2xsOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQ+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cblVzaW5nIGFuIG93biBzY3JvbGxpbmcgcmVnaW9uOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24gc3R5bGU9XCJ3aWR0aDogMzAwcHg7IGhlaWdodDogNDAwcHg7XCI+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkFkZCB0aGUgYGZ1bGxibGVlZGAgYXR0cmlidXRlIHRvIGFwcC1oZWFkZXItbGF5b3V0IHRvIG1ha2UgaXQgZml0IHRoZSBzaXplIG9mXG5pdHMgY29udGFpbmVyOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgZnVsbGJsZWVkPlxuIC4uLlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5AZWxlbWVudCBhcHAtaGVhZGVyLWxheW91dFxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zaW1wbGUuaHRtbCBTaW1wbGUgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zY3JvbGxpbmctcmVnaW9uLmh0bWwgU2Nyb2xsaW5nIFJlZ2lvblxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9tdXNpYy5odG1sIE11c2ljIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vZm9vdGVyLmh0bWwgRm9vdGVyIERlbW9cbiovXG5Qb2x5bWVyKHtcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyLFxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdhcHAtaGVhZGVyLWxheW91dCcsXG4gIGJlaGF2aW9yczogW0FwcExheW91dEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGN1cnJlbnQgZWxlbWVudCB3aWxsIGhhdmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGRvY3VtZW50IHNjcm9sbCB0byBjb250cm9sIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaGFzU2Nyb2xsaW5nUmVnaW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ3Jlc2V0TGF5b3V0KGlzQXR0YWNoZWQsIGhhc1Njcm9sbGluZ1JlZ2lvbiknXSxcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFwcC1oZWFkZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGhlYWRlclxuICAgKi9cbiAgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMuJC5oZWFkZXJTbG90KS5nZXREaXN0cmlidXRlZE5vZGVzKClbMF07XG4gIH0sXG5cbiAgX3VwZGF0ZUxheW91dFN0YXRlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICFoZWFkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsaXppbmcgY2xhc3MsIHdoaWNoIHN0YXRpY2x5IHBvc2l0aW9ucyB0aGUgaGVhZGVyIGFuZFxuICAgIC8vIHRoZSBjb250ZW50IHVudGlsIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBjYW4gYmUgcmVhZC5cbiAgICB0aGlzLiQud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsaXppbmcnKTtcbiAgICAvLyBVcGRhdGUgc2Nyb2xsIHRhcmdldC5cbiAgICBoZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24gP1xuICAgICAgICB0aGlzLiQuY29udGVudENvbnRhaW5lciA6XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gR2V0IGhlYWRlciBoZWlnaHQgaGVyZSBzbyB0aGF0IHN0eWxlIHJlYWRzIGFyZSBiYXRjaGVkIHRvZ2V0aGVyIGJlZm9yZVxuICAgIC8vIHN0eWxlIHdyaXRlcyAoaS5lLiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBiZWxvdykuXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gVXBkYXRlIHRoZSBoZWFkZXIgcG9zaXRpb24uXG4gICAgaWYgKCF0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodE9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQ7XG4gICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gcmlnaHRPZmZzZXQgKyAncHgnO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgY29udGFpbmVyIHBvc2l0aW9uLlxuICAgIHZhciBjb250YWluZXJTdHlsZSA9IHRoaXMuJC5jb250ZW50Q29udGFpbmVyLnN0eWxlO1xuICAgIGlmIChoZWFkZXIuZml4ZWQgJiYgIWhlYWRlci5jb25kZW5zZXMgJiYgdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIC8vIElmIHRoZSBoZWFkZXIgc2l6ZSBkb2VzIG5vdCBjaGFuZ2UgYW5kIHdlJ3JlIHVzaW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbixcbiAgICAgIC8vIGV4Y2x1ZGUgdGhlIGhlYWRlciBhcmVhIGZyb20gdGhlIHNjcm9sbGluZyByZWdpb24gc28gdGhhdCB0aGUgaGVhZGVyXG4gICAgICAvLyBkb2Vzbid0IG92ZXJsYXAgdGhlIHNjcm9sbGJhci5cbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcEljb24gfSBmcm9tIFwiLi9vcC1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBPcEljb25OZXh0IGV4dGVuZHMgT3BJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IFwib3BwOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgIDogXCJvcHA6Y2hldnJvbi1sZWZ0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtaWNvbi1uZXh0XCI6IE9wSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtaWNvbi1uZXh0XCIsIE9wSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLW1lbnUtYnV0dG9uXCI7XG5cbmltcG9ydCB7IG9wU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1pY29uLW5leHRcIjtcblxuaW1wb3J0IFwiLi4vb3AtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4vb3AtY29uZmlnLW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL29wLXBhbmVsLWNvbmZpZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWNvbmZpZy1kYXNoYm9hcmRcIilcbmNsYXNzIE9wQ29uZmlnRGFzaGJvYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FkdmFuY2VkITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgZml4ZWQgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxvcC1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgID48L29wLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8b3AtY29uZmlnLXNlY3Rpb24gLm5hcnJvdz0ke3RoaXMubmFycm93fSAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHt0aGlzLmNsb3VkU3RhdHVzICYmIGlzQ29tcG9uZW50TG9hZGVkKHRoaXMub3BwLCBcImNsb3VkXCIpXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPG9wLWNhcmQ+XG4gICAgICAgICAgICAgICAgICA8b3AtY29uZmlnLW5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAuc2hvd0FkdmFuY2VkPSR7dGhpcy5zaG93QWR2YW5jZWR9XG4gICAgICAgICAgICAgICAgICAgIC5wYWdlcz0ke1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiY2xvdWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2NvbmZpZy9jbG91ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmNhcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IHRoaXMuY2xvdWRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIm9wcDpjbG91ZC1sb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgID48L29wLWNvbmZpZy1uYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDwvb3AtY2FyZD5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7T2JqZWN0LnZhbHVlcyhjb25maWdTZWN0aW9ucykubWFwKFxuICAgICAgICAgICAgKHNlY3Rpb24pID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxvcC1jYXJkPlxuICAgICAgICAgICAgICAgIDxvcC1jb25maWctbmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgLnNob3dBZHZhbmNlZD0ke3RoaXMuc2hvd0FkdmFuY2VkfVxuICAgICAgICAgICAgICAgICAgLnBhZ2VzPSR7c2VjdGlvbn1cbiAgICAgICAgICAgICAgICA+PC9vcC1jb25maWctbmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgICAgJHshdGhpcy5zaG93QWR2YW5jZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbW8tYWR2YW5jZWRcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFkdmFuY2VkX21vZGUuaGludF9lbmFibGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFkdmFuY2VkX21vZGUubGlua19wcm9maWxlX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICApfTwvYVxuICAgICAgICAgICAgICAgICAgPi5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L29wLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBhcHAtaGVhZGVyIHtcbiAgICAgICAgICAtLWFwcC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBvcC1jYXJkOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgb3AtY29uZmlnLXNlY3Rpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWNhcmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgb3AtY2FyZCBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnByb21vLWFkdmFuY2VkIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcm9tby1hZHZhbmNlZCBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWNvbmZpZy1kYXNoYm9hcmRcIjogT3BDb25maWdEYXNoYm9hcmQ7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuXG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLWljb24tbmV4dFwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1cywgQ2xvdWRTdGF0dXNMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2VcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1jb25maWctbmF2aWdhdGlvblwiKVxuY2xhc3MgT3BDb25maWdOYXZpZ2F0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FkdmFuY2VkITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHBhZ2VzITogUGFnZU5hdmlnYXRpb25bXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5wYWdlcy5tYXAoKHBhZ2UpID0+XG4gICAgICAgICghcGFnZS5jb21wb25lbnQgfHxcbiAgICAgICAgICBwYWdlLmNvcmUgfHxcbiAgICAgICAgICBpc0NvbXBvbmVudExvYWRlZCh0aGlzLm9wcCwgcGFnZS5jb21wb25lbnQpKSAmJlxuICAgICAgICAoIXBhZ2UuZXhwb3J0T25seSB8fCB0aGlzLnNob3dBZHZhbmNlZClcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0ke2AvY29uZmlnLyR7cGFnZS5jb21wb25lbnR9YH1cbiAgICAgICAgICAgICAgICBhcmlhLXJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICAgIDxvcC1pY29uIC5pY29uPSR7cGFnZS5pY29ufSBzbG90PVwiaXRlbS1pY29uXCI+PC9vcC1pY29uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLiR7cGFnZS5jb21wb25lbnR9LmNhcHRpb25gXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICR7cGFnZS5jb21wb25lbnQgPT09IFwiY2xvdWRcIiAmJiAocGFnZS5pbmZvIGFzIENsb3VkU3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgID8gcGFnZS5pbmZvLmxvZ2dlZF9pblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZGVzY3JpcHRpb25fbG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZS5pbmZvIGFzIENsb3VkU3RhdHVzTG9nZ2VkSW4pLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kZXNjcmlwdGlvbl9mZWF0dXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy4ke3BhZ2UuY29tcG9uZW50fS5kZXNjcmlwdGlvbmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgIDxvcC1pY29uLW5leHQ+PC9vcC1pY29uLW5leHQ+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJcbiAgICAgICl9XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgfVxuICAgICAgb3AtaWNvbixcbiAgICAgIG9wLWljb24tbmV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICAuaXJvbi1zZWxlY3RlZCBwYXBlci1pdGVtOjpiZWZvcmUsXG4gICAgICBhOm5vdCguaXJvbi1zZWxlY3RlZCk6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNW1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgICB9XG4gICAgICBhOm5vdCguaXJvbi1zZWxlY3RlZCk6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgfVxuICAgICAgLmlyb24tc2VsZWN0ZWQgcGFwZXItaXRlbTpmb2N1czo6YmVmb3JlLFxuICAgICAgLmlyb24tc2VsZWN0ZWQ6Zm9jdXMgcGFwZXItaXRlbTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWNvbmZpZy1uYXZpZ2F0aW9uXCI6IE9wQ29uZmlnTmF2aWdhdGlvbjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBaUZBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUlBOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFaQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7OztBQUtBOztBQUVBOzs7O0FBSUE7OztBQUdBOzs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7OztBQVBBO0FBbUJBOzs7QUFJQTtBQUNBO0FBQ0E7OztBQU5BO0FBV0E7O0FBR0E7O0FBSUE7OztBQVBBOzs7QUFsREE7QUFtRUE7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBOzs7QUEzR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQU9BOzs7OztBQUtBOztBQUVBO0FBR0E7O0FBSUE7O0FBSEE7O0FBWUE7O0FBYkE7O0FBb0JBOztBQUlBOzs7OztBQXhDQTtBQUZBO0FBbURBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQ0E7OztBQTdGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9