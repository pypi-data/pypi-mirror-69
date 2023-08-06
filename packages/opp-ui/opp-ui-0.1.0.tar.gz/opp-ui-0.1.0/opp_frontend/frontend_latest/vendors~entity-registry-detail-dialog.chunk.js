(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~entity-registry-detail-dialog"],{

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

/***/ "./node_modules/lit-html/directives/cache.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/cache.js ***!
  \***************************************************/
/*! exports provided: cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


const templateCaches = new WeakMap();
/**
 * Enables fast switching between multiple templates by caching the DOM nodes
 * and TemplateInstances produced by the templates.
 *
 * Example:
 *
 * ```
 * let checked = false;
 *
 * html`
 *   ${cache(checked ? html`input is checked` : html`input is not checked`)}
 * `
 * ```
 */

const cache = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(value => part => {
  if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"])) {
    throw new Error('cache can only be used in text bindings');
  }

  let templateCache = templateCaches.get(part);

  if (templateCache === undefined) {
    templateCache = new WeakMap();
    templateCaches.set(part, templateCache);
  }

  const previousValue = part.value; // First, can we update the current TemplateInstance, or do we need to move
  // the current nodes into the cache?

  if (previousValue instanceof _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_0__["TemplateInstance"]) {
    if (value instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"] && previousValue.template === part.options.templateFactory(value)) {
      // Same Template, just trigger an update of the TemplateInstance
      part.setValue(value);
      return;
    } else {
      // Not the same Template, move the nodes from the DOM into the cache.
      let cachedTemplate = templateCache.get(previousValue.template);

      if (cachedTemplate === undefined) {
        cachedTemplate = {
          instance: previousValue,
          nodes: document.createDocumentFragment()
        };
        templateCache.set(previousValue.template, cachedTemplate);
      }

      Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["reparentNodes"])(cachedTemplate.nodes, part.startNode.nextSibling, part.endNode);
    }
  } // Next, can we reuse nodes from the cache?


  if (value instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]) {
    const template = part.options.templateFactory(value);
    const cachedTemplate = templateCache.get(template);

    if (cachedTemplate !== undefined) {
      // Move nodes out of cache
      part.setValue(cachedTemplate.nodes);
      part.commit(); // Set the Part value to the TemplateInstance so it'll update it.

      part.value = cachedTemplate.instance;
    }
  }

  part.setValue(value);
});

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
});

/***/ }),

/***/ "./node_modules/lit-html/directives/until.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/until.js ***!
  \***************************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



const _state = new WeakMap(); // Effectively infinity, but a SMI.


const _infinity = 0x7fffffff;
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */

const until = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((...args) => part => {
  let state = _state.get(part);

  if (state === undefined) {
    state = {
      lastRenderedIndex: _infinity,
      values: []
    };

    _state.set(part, state);
  }

  const previousValues = state.values;
  let previousLength = previousValues.length;
  state.values = args;

  for (let i = 0; i < args.length; i++) {
    // If we've rendered a higher-priority value already, stop.
    if (i > state.lastRenderedIndex) {
      break;
    }

    const value = args[i]; // Render non-Promise values immediately

    if (Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) || typeof value.then !== 'function') {
      part.setValue(value);
      state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
      // synchronous value, we can stop processsing now.

      break;
    } // If this is a Promise we've already handled, skip it.


    if (i < previousLength && value === previousValues[i]) {
      continue;
    } // We have a Promise that we haven't seen before, so priorities may have
    // changed. Forget what we rendered before.


    state.lastRenderedIndex = _infinity;
    previousLength = 0;
    Promise.resolve(value).then(resolvedValue => {
      const index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
      // the value, so don't render it. Then, only render if the value is
      // higher-priority than what's already been rendered.

      if (index > -1 && index < state.lastRenderedIndex) {
        state.lastRenderedIndex = index;
        part.setValue(resolvedValue);
        part.commit();
      }
    });
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35lbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL2lmLWRlZmluZWQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3VudGlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7VGVtcGxhdGV9IGZyb20gJy4uL2xpYi90ZW1wbGF0ZS5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgTm9kZVBhcnQsIFBhcnQsIHJlcGFyZW50Tm9kZXMsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbnR5cGUgQ2FjaGVkVGVtcGxhdGUgPSB7XG4gIHJlYWRvbmx5IGluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICByZWFkb25seSBub2RlczogRG9jdW1lbnRGcmFnbWVudFxufTtcbmNvbnN0IHRlbXBsYXRlQ2FjaGVzID1cbiAgICBuZXcgV2Vha01hcDxOb2RlUGFydCwgV2Vha01hcDxUZW1wbGF0ZSwgQ2FjaGVkVGVtcGxhdGU+PigpO1xuXG4vKipcbiAqIEVuYWJsZXMgZmFzdCBzd2l0Y2hpbmcgYmV0d2VlbiBtdWx0aXBsZSB0ZW1wbGF0ZXMgYnkgY2FjaGluZyB0aGUgRE9NIG5vZGVzXG4gKiBhbmQgVGVtcGxhdGVJbnN0YW5jZXMgcHJvZHVjZWQgYnkgdGhlIHRlbXBsYXRlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogbGV0IGNoZWNrZWQgPSBmYWxzZTtcbiAqXG4gKiBodG1sYFxuICogICAke2NhY2hlKGNoZWNrZWQgPyBodG1sYGlucHV0IGlzIGNoZWNrZWRgIDogaHRtbGBpbnB1dCBpcyBub3QgY2hlY2tlZGApfVxuICogYFxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBjYWNoZSA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhY2hlIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocGFydCk7XG5cbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICAgIHRlbXBsYXRlQ2FjaGVzLnNldChwYXJ0LCB0ZW1wbGF0ZUNhY2hlKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwYXJ0LnZhbHVlO1xuXG4gIC8vIEZpcnN0LCBjYW4gd2UgdXBkYXRlIHRoZSBjdXJyZW50IFRlbXBsYXRlSW5zdGFuY2UsIG9yIGRvIHdlIG5lZWQgdG8gbW92ZVxuICAvLyB0aGUgY3VycmVudCBub2RlcyBpbnRvIHRoZSBjYWNoZT9cbiAgaWYgKHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQgJiZcbiAgICAgICAgcHJldmlvdXNWYWx1ZS50ZW1wbGF0ZSA9PT0gcGFydC5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSkpIHtcbiAgICAgIC8vIFNhbWUgVGVtcGxhdGUsIGp1c3QgdHJpZ2dlciBhbiB1cGRhdGUgb2YgdGhlIFRlbXBsYXRlSW5zdGFuY2VcbiAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3QgdGhlIHNhbWUgVGVtcGxhdGUsIG1vdmUgdGhlIG5vZGVzIGZyb20gdGhlIERPTSBpbnRvIHRoZSBjYWNoZS5cbiAgICAgIGxldCBjYWNoZWRUZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHByZXZpb3VzVmFsdWUudGVtcGxhdGUpO1xuICAgICAgaWYgKGNhY2hlZFRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FjaGVkVGVtcGxhdGUgPSB7XG4gICAgICAgICAgaW5zdGFuY2U6IHByZXZpb3VzVmFsdWUsXG4gICAgICAgICAgbm9kZXM6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocHJldmlvdXNWYWx1ZS50ZW1wbGF0ZSwgY2FjaGVkVGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgcmVwYXJlbnROb2RlcyhcbiAgICAgICAgICBjYWNoZWRUZW1wbGF0ZS5ub2RlcywgcGFydC5zdGFydE5vZGUubmV4dFNpYmxpbmcsIHBhcnQuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTmV4dCwgY2FuIHdlIHJldXNlIG5vZGVzIGZyb20gdGhlIGNhY2hlP1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gcGFydC5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgY29uc3QgY2FjaGVkVGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldCh0ZW1wbGF0ZSk7XG4gICAgaWYgKGNhY2hlZFRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE1vdmUgbm9kZXMgb3V0IG9mIGNhY2hlXG4gICAgICBwYXJ0LnNldFZhbHVlKGNhY2hlZFRlbXBsYXRlLm5vZGVzKTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAvLyBTZXQgdGhlIFBhcnQgdmFsdWUgdG8gdGhlIFRlbXBsYXRlSW5zdGFuY2Ugc28gaXQnbGwgdXBkYXRlIGl0LlxuICAgICAgcGFydC52YWx1ZSA9IGNhY2hlZFRlbXBsYXRlLmluc3RhbmNlO1xuICAgIH1cbiAgfVxuICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2lzUHJpbWl0aXZlfSBmcm9tICcuLi9saWIvcGFydHMuanMnO1xuaW1wb3J0IHtkaXJlY3RpdmUsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuaW50ZXJmYWNlIEFzeW5jU3RhdGUge1xuICAvKipcbiAgICogVGhlIGxhc3QgcmVuZGVyZWQgaW5kZXggb2YgYSBjYWxsIHRvIHVudGlsKCkuIEEgdmFsdWUgb25seSByZW5kZXJzIGlmIGl0c1xuICAgKiBpbmRleCBpcyBsZXNzIHRoYW4gdGhlIGBsYXN0UmVuZGVyZWRJbmRleGAuXG4gICAqL1xuICBsYXN0UmVuZGVyZWRJbmRleDogbnVtYmVyO1xuXG4gIHZhbHVlczogdW5rbm93bltdO1xufVxuXG5jb25zdCBfc3RhdGUgPSBuZXcgV2Vha01hcDxQYXJ0LCBBc3luY1N0YXRlPigpO1xuLy8gRWZmZWN0aXZlbHkgaW5maW5pdHksIGJ1dCBhIFNNSS5cbmNvbnN0IF9pbmZpbml0eSA9IDB4N2ZmZmZmZmY7XG5cbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KSE7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBsYXN0UmVuZGVyZWRJbmRleDogX2luZmluaXR5LFxuICAgICAgdmFsdWVzOiBbXSxcbiAgICB9O1xuICAgIF9zdGF0ZS5zZXQocGFydCwgc3RhdGUpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICBsZXQgcHJldmlvdXNMZW5ndGggPSBwcmV2aW91c1ZhbHVlcy5sZW5ndGg7XG4gIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gSWYgd2UndmUgcmVuZGVyZWQgYSBoaWdoZXItcHJpb3JpdHkgdmFsdWUgYWxyZWFkeSwgc3RvcC5cbiAgICBpZiAoaSA+IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbaV07XG5cbiAgICAvLyBSZW5kZXIgbm9uLVByb21pc2UgdmFsdWVzIGltbWVkaWF0ZWx5XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICB0eXBlb2YgKHZhbHVlIGFzIHt0aGVuPzogdW5rbm93bn0pLnRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpO1xuICAgICAgLy8gU2luY2UgYSBsb3dlci1wcmlvcml0eSB2YWx1ZSB3aWxsIG5ldmVyIG92ZXJ3cml0ZSBhIGhpZ2hlci1wcmlvcml0eVxuICAgICAgLy8gc3luY2hyb25vdXMgdmFsdWUsIHdlIGNhbiBzdG9wIHByb2Nlc3NzaW5nIG5vdy5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBQcm9taXNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCwgc2tpcCBpdC5cbiAgICBpZiAoaSA8IHByZXZpb3VzTGVuZ3RoICYmIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlc1tpXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gV2UgaGF2ZSBhIFByb21pc2UgdGhhdCB3ZSBoYXZlbid0IHNlZW4gYmVmb3JlLCBzbyBwcmlvcml0aWVzIG1heSBoYXZlXG4gICAgLy8gY2hhbmdlZC4gRm9yZ2V0IHdoYXQgd2UgcmVuZGVyZWQgYmVmb3JlLlxuICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gX2luZmluaXR5O1xuICAgIHByZXZpb3VzTGVuZ3RoID0gMDtcblxuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbigocmVzb2x2ZWRWYWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAvLyBJZiBzdGF0ZS52YWx1ZXMgZG9lc24ndCBjb250YWluIHRoZSB2YWx1ZSwgd2UndmUgcmUtcmVuZGVyZWQgd2l0aG91dFxuICAgICAgLy8gdGhlIHZhbHVlLCBzbyBkb24ndCByZW5kZXIgaXQuIFRoZW4sIG9ubHkgcmVuZGVyIGlmIHRoZSB2YWx1ZSBpc1xuICAgICAgLy8gaGlnaGVyLXByaW9yaXR5IHRoYW4gd2hhdCdzIGFscmVhZHkgYmVlbiByZW5kZXJlZC5cbiAgICAgIGlmIChpbmRleCA+IC0xICYmIGluZGV4IDwgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgcGFydC5zZXRWYWx1ZShyZXNvbHZlZFZhbHVlKTtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE4Q0E7QUFFQTtBQUVBOzs7OztBQUtBO0FBQUE7QUFBQTtBQVBBO0FBQ0E7QUFVQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuR0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFFQTtBQU1BO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=