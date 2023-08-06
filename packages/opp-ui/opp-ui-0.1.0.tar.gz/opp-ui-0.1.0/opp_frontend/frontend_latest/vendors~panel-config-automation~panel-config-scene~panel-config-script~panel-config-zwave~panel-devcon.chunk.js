(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-automation~panel-config-scene~panel-config-script~panel-config-zwave~panel-devcon"],{

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

/***/ "./node_modules/@polymer/paper-input/paper-input.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_input_iron_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input.js */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _paper_input_char_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-input-char-counter.js */ "./node_modules/@polymer/paper-input/paper-input-char-counter.js");
/* harmony import */ var _paper_input_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-input-container.js */ "./node_modules/@polymer/paper-input/paper-input-container.js");
/* harmony import */ var _paper_input_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-error.js */ "./node_modules/@polymer/paper-input/paper-input-error.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paper-input-behavior.js */ "./node_modules/@polymer/paper-input/paper-input-behavior.js");
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
Material design: [Text
fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-input>` is a single-line text field with Material Design styling.

    <paper-input label="Input label"></paper-input>

It may include an optional error message or character counter.

    <paper-input error-message="Invalid input!" label="Input
    label"></paper-input> <paper-input char-counter label="Input
    label"></paper-input>

It can also include custom prefix or suffix elements, which are displayed
before or after the text input itself. In order for an element to be
considered as a prefix, it must have the `prefix` attribute (and similarly
for `suffix`).

    <paper-input label="total">
      <div prefix>$</div>
      <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
    </paper-input>

A `paper-input` can use the native `type=search` or `type=file` features.
However, since we can't control the native styling of the input (search icon,
file button, date placeholder, etc.), in these cases the label will be
automatically floated. The `placeholder` attribute can still be used for
additional informational text.

    <paper-input label="search!" type="search"
        placeholder="search for cats" autosave="test" results="5">
    </paper-input>

See `Polymer.PaperInputBehavior` for more API docs.

### Focus

To focus a paper-input, you can call the native `focus()` method as long as the
paper input has a tab index. Similarly, `blur()` will blur the element.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer reveal button (the eyeball) | {}

@element paper-input
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__["Polymer"])({
  is: 'paper-input',

  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"]`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,
  behaviors: [_paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__["PaperInputBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronFormElementBehavior"]],
  properties: {
    value: {
      // Required for the correct TypeScript type-generation
      type: String
    },
    inputRole: {
      type: String,
      value: undefined
    },
    inputAriaHaspopup: {
      type: String,
      value: undefined
    }
  },

  /**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement._inputElement;
  },

  // Note: This event is only available in the 1.0 version of this element.
  // In 2.0, the functionality of `_onIronInputReady` is done in
  // PaperInputBehavior::attached.
  listeners: {
    'iron-input-ready': '_onIronInputReady'
  },
  _onIronInputReady: function () {
    // Even though this is only used in the next line, save this for
    // backwards compatibility, since the native input had this ID until 2.0.5.
    if (!this.$.nativeInput) {
      this.$.nativeInput =
      /** @type {!Element} */
      this.$$('input');
    }

    if (this.inputElement && this._typesThatHaveText.indexOf(this.$.nativeInput.type) !== -1) {
      this.alwaysFloatLabel = true;
    } // Only validate when attached if the input already has a value.


    if (!!this.inputElement.bindValue) {
      this.$.container._handleValueAndAutoValidate(this.inputElement);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NlbmV+cGFuZWwtY29uZmlnLXNjcmlwdH5wYW5lbC1jb25maWctendhdmV+cGFuZWwtZGV2Y29uLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge0FwcExheW91dEJlaGF2aW9yfSBmcm9tICcuLi9hcHAtbGF5b3V0LWJlaGF2aW9yL2FwcC1sYXlvdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbmFwcC1oZWFkZXItbGF5b3V0IGlzIGEgd3JhcHBlciBlbGVtZW50IHRoYXQgcG9zaXRpb25zIGFuIGFwcC1oZWFkZXIgYW5kIG90aGVyXG5jb250ZW50LiBUaGlzIGVsZW1lbnQgdXNlcyB0aGUgZG9jdW1lbnQgc2Nyb2xsIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYWxzb1xuZGVmaW5lIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cblxuVXNpbmcgdGhlIGRvY3VtZW50IHNjcm9sbDpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0PlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5Vc2luZyBhbiBvd24gc2Nyb2xsaW5nIHJlZ2lvbjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uIHN0eWxlPVwid2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5BZGQgdGhlIGBmdWxsYmxlZWRgIGF0dHJpYnV0ZSB0byBhcHAtaGVhZGVyLWxheW91dCB0byBtYWtlIGl0IGZpdCB0aGUgc2l6ZSBvZlxuaXRzIGNvbnRhaW5lcjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGZ1bGxibGVlZD5cbiAuLi5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQGVsZW1lbnQgYXBwLWhlYWRlci1sYXlvdXRcbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2ltcGxlLmh0bWwgU2ltcGxlIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vbXVzaWMuaHRtbCBNdXNpYyBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL2Zvb3Rlci5odG1sIEZvb3RlciBEZW1vXG4qL1xuUG9seW1lcih7XG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlcixcbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnYXBwLWhlYWRlci1sYXlvdXQnLFxuICBiZWhhdmlvcnM6IFtBcHBMYXlvdXRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBjdXJyZW50IGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBkb2N1bWVudCBzY3JvbGwgdG8gY29udHJvbCB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIGhhc1Njcm9sbGluZ1JlZ2lvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydyZXNldExheW91dChpc0F0dGFjaGVkLCBoYXNTY3JvbGxpbmdSZWdpb24pJ10sXG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhcHAtaGVhZGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBoZWFkZXJcbiAgICovXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIGRvbSh0aGlzLiQuaGVhZGVyU2xvdCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpWzBdO1xuICB9LFxuXG4gIF91cGRhdGVMYXlvdXRTdGF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhaGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbGl6aW5nIGNsYXNzLCB3aGljaCBzdGF0aWNseSBwb3NpdGlvbnMgdGhlIGhlYWRlciBhbmRcbiAgICAvLyB0aGUgY29udGVudCB1bnRpbCB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy4kLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgLy8gVXBkYXRlIHNjcm9sbCB0YXJnZXQuXG4gICAgaGVhZGVyLnNjcm9sbFRhcmdldCA9IHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uID9cbiAgICAgICAgdGhpcy4kLmNvbnRlbnRDb250YWluZXIgOlxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vIEdldCBoZWFkZXIgaGVpZ2h0IGhlcmUgc28gdGhhdCBzdHlsZSByZWFkcyBhcmUgYmF0Y2hlZCB0b2dldGhlciBiZWZvcmVcbiAgICAvLyBzdHlsZSB3cml0ZXMgKGkuZS4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYmVsb3cpLlxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIFVwZGF0ZSB0aGUgaGVhZGVyIHBvc2l0aW9uLlxuICAgIGlmICghdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0O1xuICAgICAgICBoZWFkZXIuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArICdweCc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9IHJpZ2h0T2Zmc2V0ICsgJ3B4JztcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBjb250ZW50IGNvbnRhaW5lciBwb3NpdGlvbi5cbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0aGlzLiQuY29udGVudENvbnRhaW5lci5zdHlsZTtcbiAgICBpZiAoaGVhZGVyLmZpeGVkICYmICFoZWFkZXIuY29uZGVuc2VzICYmIHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICAvLyBJZiB0aGUgaGVhZGVyIHNpemUgZG9lcyBub3QgY2hhbmdlIGFuZCB3ZSdyZSB1c2luZyBhIHNjcm9sbGluZyByZWdpb24sXG4gICAgICAvLyBleGNsdWRlIHRoZSBoZWFkZXIgYXJlYSBmcm9tIHRoZSBzY3JvbGxpbmcgcmVnaW9uIHNvIHRoYXQgdGhlIGhlYWRlclxuICAgICAgLy8gZG9lc24ndCBvdmVybGFwIHRoZSBzY3JvbGxiYXIuXG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taW5wdXQvaXJvbi1pbnB1dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jb250YWluZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWVycm9yLmpzJztcblxuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtEb21Nb2R1bGV9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7UGFwZXJJbnB1dEJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlucHV0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtUZXh0XG5maWVsZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90ZXh0LWZpZWxkcy5odG1sKVxuXG5gPHBhcGVyLWlucHV0PmAgaXMgYSBzaW5nbGUtbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IG1heSBpbmNsdWRlIGFuIG9wdGlvbmFsIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyIGNvdW50ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgaW5wdXQhXCIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD4gPHBhcGVyLWlucHV0IGNoYXItY291bnRlciBsYWJlbD1cIklucHV0XG4gICAgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBjYW4gYWxzbyBpbmNsdWRlIGN1c3RvbSBwcmVmaXggb3Igc3VmZml4IGVsZW1lbnRzLCB3aGljaCBhcmUgZGlzcGxheWVkXG5iZWZvcmUgb3IgYWZ0ZXIgdGhlIHRleHQgaW5wdXQgaXRzZWxmLiBJbiBvcmRlciBmb3IgYW4gZWxlbWVudCB0byBiZVxuY29uc2lkZXJlZCBhcyBhIHByZWZpeCwgaXQgbXVzdCBoYXZlIHRoZSBgcHJlZml4YCBhdHRyaWJ1dGUgKGFuZCBzaW1pbGFybHlcbmZvciBgc3VmZml4YCkuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJ0b3RhbFwiPlxuICAgICAgPGRpdiBwcmVmaXg+JDwvZGl2PlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cbkEgYHBhcGVyLWlucHV0YCBjYW4gdXNlIHRoZSBuYXRpdmUgYHR5cGU9c2VhcmNoYCBvciBgdHlwZT1maWxlYCBmZWF0dXJlcy5cbkhvd2V2ZXIsIHNpbmNlIHdlIGNhbid0IGNvbnRyb2wgdGhlIG5hdGl2ZSBzdHlsaW5nIG9mIHRoZSBpbnB1dCAoc2VhcmNoIGljb24sXG5maWxlIGJ1dHRvbiwgZGF0ZSBwbGFjZWhvbGRlciwgZXRjLiksIGluIHRoZXNlIGNhc2VzIHRoZSBsYWJlbCB3aWxsIGJlXG5hdXRvbWF0aWNhbGx5IGZsb2F0ZWQuIFRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBjYW4gc3RpbGwgYmUgdXNlZCBmb3JcbmFkZGl0aW9uYWwgaW5mb3JtYXRpb25hbCB0ZXh0LlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwic2VhcmNoIVwiIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgY2F0c1wiIGF1dG9zYXZlPVwidGVzdFwiIHJlc3VsdHM9XCI1XCI+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgZm9yIG1vcmUgQVBJIGRvY3MuXG5cbiMjIyBGb2N1c1xuXG5UbyBmb2N1cyBhIHBhcGVyLWlucHV0LCB5b3UgY2FuIGNhbGwgdGhlIG5hdGl2ZSBgZm9jdXMoKWAgbWV0aG9kIGFzIGxvbmcgYXMgdGhlXG5wYXBlciBpbnB1dCBoYXMgYSB0YWIgaW5kZXguIFNpbWlsYXJseSwgYGJsdXIoKWAgd2lsbCBibHVyIHRoZSBlbGVtZW50LlxuXG4jIyMgU3R5bGluZ1xuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dENvbnRhaW5lcmAgZm9yIGEgbGlzdCBvZiBjdXN0b20gcHJvcGVydGllcyB1c2VkIHRvXG5zdHlsZSB0aGlzIGVsZW1lbnQuXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgcmV2ZWFsIGJ1dHRvbiAodGhlIGV5ZWJhbGwpIHwge31cblxuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBpczogJ3BhcGVyLWlucHV0JyxcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIEluIDEueCwgdGhlIDxpbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXMgaXQuXG4gICAgICBJbiAyLnggdGhlIDxpcm9uLWlucHV0PiBpcyBkaXN0cmlidXRlZCB0byBwYXBlci1pbnB1dC1jb250YWluZXIsIHdoaWNoIHN0eWxlc1xuICAgICAgaXQsIGJ1dCBpbiBvcmRlciBmb3IgdGhpcyB0byB3b3JrIGNvcnJlY3RseSwgd2UgbmVlZCB0byByZXNldCBzb21lXG4gICAgICBvZiB0aGUgbmF0aXZlIGlucHV0J3MgcHJvcGVydGllcyB0byBpbmhlcml0IChmcm9tIHRoZSBpcm9uLWlucHV0KSAqL1xuICAgICAgaXJvbi1pbnB1dCA+IGlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICB3b3JkLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1jbGVhciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1yZXZlYWwge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtcmV2ZWFsO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGlkPVwiY29udGFpbmVyXCIgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCIgYWx3YXlzLWZsb2F0LWxhYmVsPVwiW1tfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWwoYWx3YXlzRmxvYXRMYWJlbCxwbGFjZWhvbGRlcildXVwiIGF1dG8tdmFsaWRhdGUkPVwiW1thdXRvVmFsaWRhdGVdXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIGludmFsaWQ9XCJbW2ludmFsaWRdXVwiPlxuXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCIgc2xvdD1cInByZWZpeFwiPjwvc2xvdD5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9yJD1cIltbX2lucHV0SWRdXVwiIHNsb3Q9XCJsYWJlbFwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDwhLS0gTmVlZCB0byBiaW5kIG1heGxlbmd0aCBzbyB0aGF0IHRoZSBwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgd29ya3MgY29ycmVjdGx5IC0tPlxuICAgICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwiaW5wdXQtZWxlbWVudFwiIGlkJD1cIltbX2lucHV0SWRdXVwiIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCIgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCIgaW52YWxpZD1cInt7aW52YWxpZH19XCIgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiPlxuICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIiBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgdGl0bGUkPVwiW1t0aXRsZV1dXCIgdHlwZSQ9XCJbW3R5cGVdXVwiIHBhdHRlcm4kPVwiW1twYXR0ZXJuXV1cIiByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIiBhdXRvY29tcGxldGUkPVwiW1thdXRvY29tcGxldGVdXVwiIGF1dG9mb2N1cyQ9XCJbW2F1dG9mb2N1c11dXCIgaW5wdXRtb2RlJD1cIltbaW5wdXRtb2RlXV1cIiBtaW5sZW5ndGgkPVwiW1ttaW5sZW5ndGhdXVwiIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCIgbWluJD1cIltbbWluXV1cIiBtYXgkPVwiW1ttYXhdXVwiIHN0ZXAkPVwiW1tzdGVwXV1cIiBuYW1lJD1cIltbbmFtZV1dXCIgcGxhY2Vob2xkZXIkPVwiW1twbGFjZWhvbGRlcl1dXCIgcmVhZG9ubHkkPVwiW1tyZWFkb25seV1dXCIgbGlzdCQ9XCJbW2xpc3RdXVwiIHNpemUkPVwiW1tzaXplXV1cIiBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIiBhdXRvY29ycmVjdCQ9XCJbW2F1dG9jb3JyZWN0XV1cIiBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIiBhdXRvc2F2ZSQ9XCJbW2F1dG9zYXZlXV1cIiByZXN1bHRzJD1cIltbcmVzdWx0c11dXCIgYWNjZXB0JD1cIltbYWNjZXB0XV1cIiBtdWx0aXBsZSQ9XCJbW211bHRpcGxlXV1cIiByb2xlJD1cIltbaW5wdXRSb2xlXV1cIiBhcmlhLWhhc3BvcHVwJD1cIltbaW5wdXRBcmlhSGFzcG9wdXBdXVwiPlxuICAgICAgPC9pcm9uLWlucHV0PlxuXG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCIgc2xvdD1cInN1ZmZpeFwiPjwvc2xvdD5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yTWVzc2FnZV1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBzbG90PVwiYWRkLW9uXCI+W1tlcnJvck1lc3NhZ2VdXTwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2hhckNvdW50ZXJdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHNsb3Q9XCJhZGQtb25cIj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgYCxcblxuICBiZWhhdmlvcnM6IFtQYXBlcklucHV0QmVoYXZpb3IsIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIC8vIFJlcXVpcmVkIGZvciB0aGUgY29ycmVjdCBUeXBlU2NyaXB0IHR5cGUtZ2VuZXJhdGlvblxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcblxuICAgIGlucHV0Um9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICB9LFxuXG4gICAgaW5wdXRBcmlhSGFzcG9wdXA6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuIE92ZXJyaWRkZW4gZnJvbVxuICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gY29ycmVjdGx5IGZvY3VzIHRoZSBuYXRpdmUgaW5wdXQuXG4gICAqXG4gICAqIEByZXR1cm4geyFIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQuX2lucHV0RWxlbWVudDtcbiAgfSxcblxuICAvLyBOb3RlOiBUaGlzIGV2ZW50IGlzIG9ubHkgYXZhaWxhYmxlIGluIHRoZSAxLjAgdmVyc2lvbiBvZiB0aGlzIGVsZW1lbnQuXG4gIC8vIEluIDIuMCwgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYF9vbklyb25JbnB1dFJlYWR5YCBpcyBkb25lIGluXG4gIC8vIFBhcGVySW5wdXRCZWhhdmlvcjo6YXR0YWNoZWQuXG4gIGxpc3RlbmVyczogeydpcm9uLWlucHV0LXJlYWR5JzogJ19vbklyb25JbnB1dFJlYWR5J30sXG5cbiAgX29uSXJvbklucHV0UmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgaXMgb25seSB1c2VkIGluIHRoZSBuZXh0IGxpbmUsIHNhdmUgdGhpcyBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgc2luY2UgdGhlIG5hdGl2ZSBpbnB1dCBoYWQgdGhpcyBJRCB1bnRpbCAyLjAuNS5cbiAgICBpZiAoIXRoaXMuJC5uYXRpdmVJbnB1dCkge1xuICAgICAgdGhpcy4kLm5hdGl2ZUlucHV0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHRoaXMuJCQoJ2lucHV0JykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQuaW5kZXhPZih0aGlzLiQubmF0aXZlSW5wdXQudHlwZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdmFsaWRhdGUgd2hlbiBhdHRhY2hlZCBpZiB0aGUgaW5wdXQgYWxyZWFkeSBoYXMgYSB2YWx1ZS5cbiAgICBpZiAoISF0aGlzLmlucHV0RWxlbWVudC5iaW5kVmFsdWUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWlGQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlJQTs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUE2R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBQ0E7QUFnQkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=