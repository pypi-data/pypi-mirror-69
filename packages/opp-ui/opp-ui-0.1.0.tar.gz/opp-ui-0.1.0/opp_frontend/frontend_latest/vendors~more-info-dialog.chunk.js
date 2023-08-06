(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~more-info-dialog"],{

/***/ "./node_modules/@material/mwc-base/base-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/base-element.js ***!
  \*********************************************************/
/*! exports provided: observer, addHasRemoveClass, BaseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return BaseElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer_js__WEBPACK_IMPORTED_MODULE_1__["observer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@material/mwc-base/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



class BaseElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    if (this.mdcFoundation !== undefined) {
      this.mdcFoundation.destroy();
    }

    this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
    this.mdcFoundation.init();
  }

  firstUpdated() {
    this.createFoundation();
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: observer, addHasRemoveClass, BaseElement, FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class FormElement extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: true
    });
  }

  click() {
    if (this.formElement) {
      this.formElement.focus();
      this.formElement.click();
    }
  }

  setAriaLabel(label) {
    if (this.formElement) {
      this.formElement.setAttribute('aria-label', label);
    }
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcRoot.addEventListener('change', e => {
      this.dispatchEvent(new Event('change', e));
    });
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-base/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
const observer = observer => // eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
  // if we haven't wrapped `updated` in this class, do so
  if (!proto.constructor._observers) {
    proto.constructor._observers = new Map();
    const userUpdated = proto.updated;

    proto.updated = function (changedProperties) {
      userUpdated.call(this, changedProperties);
      changedProperties.forEach((v, k) => {
        const observer = this.constructor._observers.get(k);

        if (observer !== undefined) {
          observer.call(this, this[k], v);
        }
      });
    }; // clone any existing observers (superclasses)

  } else if (!proto.constructor.hasOwnProperty('_observers')) {
    const observers = proto.constructor._observers;
    proto.constructor._observers = new Map();
    observers.forEach( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v, k) => proto.constructor._observers.set(k, v));
  } // set this method


  proto.constructor._observers.set(propName, observer);
};

/***/ }),

/***/ "./node_modules/@material/mwc-base/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/mwc-base/utils.js ***!
  \**************************************************/
/*! exports provided: isNodeElement, findAssignedElement, addHasRemoveClass, supportsPassiveEventListener, deepActiveElementPath, doesElementContainFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeElement", function() { return isNodeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAssignedElement", function() { return findAssignedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return addHasRemoveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListener", function() { return supportsPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepActiveElementPath", function() { return deepActiveElementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Return an element assigned to a given slot that matches the given selector
 */

/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */

const isNodeElement = node => {
  return node.nodeType === Node.ELEMENT_NODE;
};
function findAssignedElement(slot, selector) {
  for (const node of slot.assignedNodes({
    flatten: true
  })) {
    if (isNodeElement(node)) {
      const el = node;

      if (Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__["matches"])(el, selector)) {
        return el;
      }
    }
  }

  return null;
}
function addHasRemoveClass(element) {
  return {
    addClass: className => {
      element.classList.add(className);
    },
    removeClass: className => {
      element.classList.remove(className);
    },
    hasClass: className => element.classList.contains(className)
  };
}
let supportsPassive = false;

const fn = () => {};

const optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }

};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
/**
 * Do event listeners suport the `passive` option?
 */

const supportsPassiveEventListener = supportsPassive;
const deepActiveElementPath = (doc = window.document) => {
  let activeElement = doc.activeElement;
  const path = [];

  if (!activeElement) {
    return path;
  }

  while (activeElement) {
    path.push(activeElement);

    if (activeElement.shadowRoot) {
      activeElement = activeElement.shadowRoot.activeElement;
    } else {
      break;
    }
  }

  return path;
};
const doesElementContainFocus = element => {
  const activePath = deepActiveElementPath();

  if (!activePath.length) {
    return false;
  }

  const deepActiveElement = activePath[activePath.length - 1];
  const focusEv = new Event('check-if-focused', {
    bubbles: true,
    composed: true
  });
  let composedPath = [];

  const listener = ev => {
    composedPath = ev.composedPath();
  };

  document.body.addEventListener('check-if-focused', listener);
  deepActiveElement.dispatchEvent(focusEv);
  document.body.removeEventListener('check-if-focused', listener);
  return composedPath.indexOf(element) !== -1;
};

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
app-toolbar is a horizontal toolbar containing items that can be used for
label, navigation, search and actions.

### Example

Add a title to the toolbar.

```html
<app-toolbar>
  <div main-title>App name</div>
</app-toolbar>
```

Add a button to the left and right side of the toolbar.

```html
<app-toolbar>
  <paper-icon-button icon="menu"></paper-icon-button>
  <div main-title>App name</div>
  <paper-icon-button icon="search"></paper-icon-button>
</app-toolbar>
```

You can use the attributes `top-item` or `bottom-item` to completely fit an
element to the top or bottom of the toolbar respectively.

### Content attributes

Attribute            | Description
---------------------|---------------------------------------------------------
`main-title`         | The main title element.
`condensed-title`    | The title element if used inside a condensed app-header.
`spacer`             | Adds a left margin of `64px`.
`bottom-item`        | Sticks the element to the bottom of the toolbar.
`top-item`           | Sticks the element to the top of the toolbar.

### Styling

Custom property              | Description                  | Default
-----------------------------|------------------------------|-----------------------
`--app-toolbar-font-size`    | Toolbar font size            | 20px

@element app-toolbar
@demo app-toolbar/demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,
  is: 'app-toolbar'
});

/***/ }),

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function (src) {
    this._updateIcon();
  },
  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-media-query/iron-media-query.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/iron-media-query/iron-media-query.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'iron-media-query',
  properties: {
    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {
      type: Boolean,
      value: false,
      readOnly: true,
      notify: true
    },

    /**
     * The CSS media query to evaluate.
     */
    query: {
      type: String,
      observer: 'queryChanged'
    },

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {
      type: Boolean,
      value: false
    },

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function () {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {
      value: null
    }
  },
  attached: function () {
    this.style.display = 'none';
    this.queryChanged();
  },
  detached: function () {
    this._remove();
  },
  _add: function () {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },
  _remove: function () {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }

    this._mq = null;
  },
  queryChanged: function () {
    this._remove();

    var query = this.query;

    if (!query) {
      return;
    }

    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }

    this._mq = window.matchMedia(query);

    this._add();

    this.queryHandler(this._mq);
  },
  queryHandler: function (mq) {
    this._setQueryMatches(mq.matches);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js ***!
  \******************************************************************************/
/*! exports provided: PaperDialogBehaviorImpl, PaperDialogBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehaviorImpl", function() { return PaperDialogBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehavior", function() { return PaperDialogBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
  Use `Polymer.PaperDialogBehavior` and `paper-dialog-shared-styles.html` to
  implement a Material Design dialog.

  For example, if `<paper-dialog-impl>` implements this behavior:

      <paper-dialog-impl>
          <h2>Header</h2>
          <div>Dialog body</div>
          <div class="buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm>Accept</paper-button>
          </div>
      </paper-dialog-impl>

  `paper-dialog-shared-styles.html` provide styles for a header, content area,
  and an action area for buttons. Use the `<h2>` tag for the header and the
  `buttons` class for the action area. You can use the `paper-dialog-scrollable`
  element (in its own repository) if you need a scrolling content area.

  Use the `dialog-dismiss` and `dialog-confirm` attributes on interactive
  controls to close the dialog. If the user dismisses the dialog with
  `dialog-confirm`, the `closingReason` will update to include `confirmed:
  true`.

  ### Accessibility

  This element has `role="dialog"` by default. Depending on the context, it may
  be more appropriate to override this attribute with `role="alertdialog"`.

  If `modal` is set, the element will prevent the focus from exiting the
  element. It will also ensure that focus remains in the dialog.

  @hero hero.svg
  @demo demo/index.html
  @polymerBehavior PaperDialogBehavior
 */

const PaperDialogBehaviorImpl = {
  hostAttributes: {
    'role': 'dialog',
    'tabindex': '-1'
  },
  properties: {
    /**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */
    modal: {
      type: Boolean,
      value: false
    },
    __readied: {
      type: Boolean,
      value: false
    }
  },
  observers: ['_modalChanged(modal, __readied)'],
  listeners: {
    'tap': '_onDialogClick'
  },

  /**
   * @return {void}
   */
  ready: function () {
    // Only now these properties can be read.
    this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
    this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
    this.__prevWithBackdrop = this.withBackdrop;
    this.__readied = true;
  },
  _modalChanged: function (modal, readied) {
    // modal implies noCancelOnOutsideClick, noCancelOnEscKey and withBackdrop.
    // We need to wait for the element to be ready before we can read the
    // properties values.
    if (!readied) {
      return;
    }

    if (modal) {
      this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
      this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
      this.__prevWithBackdrop = this.withBackdrop;
      this.noCancelOnOutsideClick = true;
      this.noCancelOnEscKey = true;
      this.withBackdrop = true;
    } else {
      // If the value was changed to false, let it false.
      this.noCancelOnOutsideClick = this.noCancelOnOutsideClick && this.__prevNoCancelOnOutsideClick;
      this.noCancelOnEscKey = this.noCancelOnEscKey && this.__prevNoCancelOnEscKey;
      this.withBackdrop = this.withBackdrop && this.__prevWithBackdrop;
    }
  },
  _updateClosingReasonConfirmed: function (confirmed) {
    this.closingReason = this.closingReason || {};
    this.closingReason.confirmed = confirmed;
  },

  /**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */
  _onDialogClick: function (event) {
    // Search for the element with dialog-confirm or dialog-dismiss,
    // from the root target until this (excluded).
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(event).path;

    for (var i = 0, l = path.indexOf(this); i < l; i++) {
      var target = path[i];

      if (target.hasAttribute && (target.hasAttribute('dialog-dismiss') || target.hasAttribute('dialog-confirm'))) {
        this._updateClosingReasonConfirmed(target.hasAttribute('dialog-confirm'));

        this.close();
        event.stopPropagation();
        break;
      }
    }
  }
};
/** @polymerBehavior */

const PaperDialogBehavior = [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"], PaperDialogBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
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
### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-background-color` | Dialog background color | `--primary-background-color`
`--paper-dialog-color` | Dialog foreground color | `--primary-text-color`
`--paper-dialog` | Mixin applied to the dialog | `{}`
`--paper-dialog-title` | Mixin applied to the title (`<h2>`) element | `{}`
`--paper-dialog-button-color` | Button area foreground color | `--default-primary-color`
*/





const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

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

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

/** @polymerBehavior PaperItemBehavior */

const PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};
/** @polymerBehavior */

const PaperItemBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
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

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;

    if (d.type !== 'RPC') {
      return;
    }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [],
          len = arguments.length;

      while (len--) params[len] = arguments[len];

      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: params
        });
      });
    };
  });
}

module.exports = addMethods;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9iYXNlLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy9mb3JtLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy9vYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW1lZGlhLXF1ZXJ5L2lyb24tbWVkaWEtcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL2lmLWRlZmluZWQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3VudGlsLnRzIiwid2VicGFjazovLy8uLi9zcmMvcnBjLXdyYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQge01EQ0ZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9iYXNlJztcbmltcG9ydCB7TGl0RWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge0NvbnN0cnVjdG9yfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJy4vb2JzZXJ2ZXIuanMnO1xuZXhwb3J0IHthZGRIYXNSZW1vdmVDbGFzc30gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgKiBmcm9tICdAbWF0ZXJpYWwvYmFzZS90eXBlcy5qcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvKipcbiAgICogUm9vdCBlbGVtZW50IGZvciBNREMgRm91bmRhdGlvbiB1c2FnZS5cbiAgICpcbiAgICogRGVmaW5lIGluIHlvdXIgY29tcG9uZW50IHdpdGggdGhlIGBAcXVlcnlgIGRlY29yYXRvclxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1kY1Jvb3Q6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgbWRjRm91bmRhdGlvbkNsYXNzOiBDb25zdHJ1Y3RvcjxNRENGb3VuZGF0aW9uPjtcblxuICAvKipcbiAgICogQW4gaW5zdGFuY2Ugb2YgdGhlIE1EQyBGb3VuZGF0aW9uIGNsYXNzIHRvIGF0dGFjaCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWRjRm91bmRhdGlvbjogTURDRm91bmRhdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBhZGFwdGVyIGZvciB0aGUgYG1kY0ZvdW5kYXRpb25gLlxuICAgKlxuICAgKiBPdmVycmlkZSBhbmQgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBBZGFwdGVyJ3MgZnVuY3Rpb25zIGltcGxlbWVudGVkOlxuICAgKlxuICAgKiAgICB7XG4gICAqICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgKiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICogICAgICAuLi5cbiAgICogICAgfVxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUFkYXB0ZXIoKToge31cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBhdHRhY2ggdGhlIE1EQyBGb3VuZGF0aW9uIHRvIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUZvdW5kYXRpb24oKSB7XG4gICAgaWYgKHRoaXMubWRjRm91bmRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24gPSBuZXcgdGhpcy5tZGNGb3VuZGF0aW9uQ2xhc3ModGhpcy5jcmVhdGVBZGFwdGVyKCkpO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5pbml0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlRm91bmRhdGlvbigpO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7TURDUmlwcGxlRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzJztcblxuaW1wb3J0IHtCYXNlRWxlbWVudH0gZnJvbSAnLi9iYXNlLWVsZW1lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTEVsZW1lbnRXaXRoUmlwcGxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICByaXBwbGU/OiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gIC8qKlxuICAgKiBGb3JtLWNhcGFibGUgZWxlbWVudCBpbiB0aGUgY29tcG9uZW50IFNoYWRvd1Jvb3QuXG4gICAqXG4gICAqIERlZmluZSBpbiB5b3VyIGNvbXBvbmVudCB3aXRoIHRoZSBgQHF1ZXJ5YCBkZWNvcmF0b3JcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb3JtRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3BlbicsIGRlbGVnYXRlc0ZvY3VzOiB0cnVlfSk7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50IHJpcHBsZSBnZXR0ZXIgZm9yIFJpcHBsZSBpbnRlZ3JhdGlvbiB3aXRoIG13Yy1mb3JtZmllbGRcbiAgICovXG4gIHJlYWRvbmx5IHJpcHBsZT86IE1EQ1JpcHBsZUZvdW5kYXRpb247XG5cbiAgY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZm9ybUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXRBcmlhTGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMubWRjUm9vdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgZSkpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge1Byb3BlcnR5VmFsdWVzfSBmcm9tICdsaXQtZWxlbWVudC9saWIvdXBkYXRpbmctZWxlbWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAodmFsdWU6IGFueSwgb2xkOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSAob2JzZXJ2ZXI6IE9ic2VydmVyKSA9PlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgKHByb3RvOiBhbnksIHByb3BOYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgICAgLy8gaWYgd2UgaGF2ZW4ndCB3cmFwcGVkIGB1cGRhdGVkYCBpbiB0aGlzIGNsYXNzLCBkbyBzb1xuICAgICAgaWYgKCFwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzKSB7XG4gICAgICAgIHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBPYnNlcnZlcj4oKTtcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZWQgPSBwcm90by51cGRhdGVkO1xuICAgICAgICBwcm90by51cGRhdGVkID0gZnVuY3Rpb24oY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgICAgICAgdXNlclVwZGF0ZWQuY2FsbCh0aGlzLCBjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuZ2V0KGspO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY2FsbCh0aGlzLCB0aGlzW2tdLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2xvbmUgYW55IGV4aXN0aW5nIG9ic2VydmVycyAoc3VwZXJjbGFzc2VzKVxuICAgICAgfSBlbHNlIGlmICghcHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoJ19vYnNlcnZlcnMnKSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlcnMgPSBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzO1xuICAgICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAodjogYW55LCBrOiBQcm9wZXJ0eUtleSkgPT4gcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycy5zZXQoaywgdikpO1xuICAgICAgfVxuICAgICAgLy8gc2V0IHRoaXMgbWV0aG9kXG4gICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLnNldChwcm9wTmFtZSwgb2JzZXJ2ZXIpO1xuICAgIH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi8qKlxuICogUmV0dXJuIGFuIGVsZW1lbnQgYXNzaWduZWQgdG8gYSBnaXZlbiBzbG90IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gc2VsZWN0b3JcbiAqL1xuXG5pbXBvcnQge21hdGNoZXN9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIG5vZGUgaXMgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vZGVFbGVtZW50ID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIEVsZW1lbnQgPT4ge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZEFzc2lnbmVkRWxlbWVudChzbG90OiBIVE1MU2xvdEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIHNsb3QuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pKSB7XG4gICAgaWYgKGlzTm9kZUVsZW1lbnQobm9kZSkpIHtcbiAgICAgIGNvbnN0IGVsID0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIYXNSZW1vdmVDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSxcbiAgICBoYXNDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICB9O1xufVxuXG5sZXQgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5jb25zdCBmbiA9ICgpID0+IHsgLyogZW1wdHkgbGlzdGVuZXIgKi8gfTtcbmNvbnN0IG9wdGlvbnNCbG9jazogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGdldCBwYXNzaXZlKCkge1xuICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigneCcsIGZuLCBvcHRpb25zQmxvY2spO1xuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigneCcsIGZuKTtcbi8qKlxuICogRG8gZXZlbnQgbGlzdGVuZXJzIHN1cG9ydCB0aGUgYHBhc3NpdmVgIG9wdGlvbj9cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXIgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbmV4cG9ydCBjb25zdCBkZWVwQWN0aXZlRWxlbWVudFBhdGggPSAoZG9jID0gd2luZG93LmRvY3VtZW50KTogRWxlbWVudFtdID0+IHtcbiAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgY29uc3QgcGF0aDogRWxlbWVudFtdID0gW107XG5cbiAgaWYgKCFhY3RpdmVFbGVtZW50KSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICB3aGlsZSAoYWN0aXZlRWxlbWVudCkge1xuICAgIHBhdGgucHVzaChhY3RpdmVFbGVtZW50KTtcbiAgICBpZiAoYWN0aXZlRWxlbWVudC5zaGFkb3dSb290KSB7XG4gICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGRvZXNFbGVtZW50Q29udGFpbkZvY3VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGFjdGl2ZVBhdGggPSBkZWVwQWN0aXZlRWxlbWVudFBhdGgoKTtcblxuICBpZiAoIWFjdGl2ZVBhdGgubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGVlcEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVQYXRoW2FjdGl2ZVBhdGgubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGZvY3VzRXYgPVxuICAgICAgbmV3IEV2ZW50KCdjaGVjay1pZi1mb2N1c2VkJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSk7XG4gIGxldCBjb21wb3NlZFBhdGg6IEV2ZW50VGFyZ2V0W10gPSBbXTtcbiAgY29uc3QgbGlzdGVuZXIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgY29tcG9zZWRQYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjaGVjay1pZi1mb2N1c2VkJywgbGlzdGVuZXIpO1xuICBkZWVwQWN0aXZlRWxlbWVudC5kaXNwYXRjaEV2ZW50KGZvY3VzRXYpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrLWlmLWZvY3VzZWQnLCBsaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGNvbXBvc2VkUGF0aC5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYXBwLXRvb2xiYXIgaXMgYSBob3Jpem9udGFsIHRvb2xiYXIgY29udGFpbmluZyBpdGVtcyB0aGF0IGNhbiBiZSB1c2VkIGZvclxubGFiZWwsIG5hdmlnYXRpb24sIHNlYXJjaCBhbmQgYWN0aW9ucy5cblxuIyMjIEV4YW1wbGVcblxuQWRkIGEgdGl0bGUgdG8gdGhlIHRvb2xiYXIuXG5cbmBgYGh0bWxcbjxhcHAtdG9vbGJhcj5cbiAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG48L2FwcC10b29sYmFyPlxuYGBgXG5cbkFkZCBhIGJ1dHRvbiB0byB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSBvZiB0aGUgdG9vbGJhci5cblxuYGBgaHRtbFxuPGFwcC10b29sYmFyPlxuICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cIm1lbnVcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJzZWFyY2hcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuPC9hcHAtdG9vbGJhcj5cbmBgYFxuXG5Zb3UgY2FuIHVzZSB0aGUgYXR0cmlidXRlcyBgdG9wLWl0ZW1gIG9yIGBib3R0b20taXRlbWAgdG8gY29tcGxldGVseSBmaXQgYW5cbmVsZW1lbnQgdG8gdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHRvb2xiYXIgcmVzcGVjdGl2ZWx5LlxuXG4jIyMgQ29udGVudCBhdHRyaWJ1dGVzXG5cbkF0dHJpYnV0ZSAgICAgICAgICAgIHwgRGVzY3JpcHRpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmBtYWluLXRpdGxlYCAgICAgICAgIHwgVGhlIG1haW4gdGl0bGUgZWxlbWVudC5cbmBjb25kZW5zZWQtdGl0bGVgICAgIHwgVGhlIHRpdGxlIGVsZW1lbnQgaWYgdXNlZCBpbnNpZGUgYSBjb25kZW5zZWQgYXBwLWhlYWRlci5cbmBzcGFjZXJgICAgICAgICAgICAgIHwgQWRkcyBhIGxlZnQgbWFyZ2luIG9mIGA2NHB4YC5cbmBib3R0b20taXRlbWAgICAgICAgIHwgU3RpY2tzIHRoZSBlbGVtZW50IHRvIHRoZSBib3R0b20gb2YgdGhlIHRvb2xiYXIuXG5gdG9wLWl0ZW1gICAgICAgICAgICB8IFN0aWNrcyB0aGUgZWxlbWVudCB0byB0aGUgdG9wIG9mIHRoZSB0b29sYmFyLlxuXG4jIyMgU3R5bGluZ1xuXG5DdXN0b20gcHJvcGVydHkgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYC0tYXBwLXRvb2xiYXItZm9udC1zaXplYCAgICB8IFRvb2xiYXIgZm9udCBzaXplICAgICAgICAgICAgfCAyMHB4XG5cbkBlbGVtZW50IGFwcC10b29sYmFyXG5AZGVtbyBhcHAtdG9vbGJhci9kZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1hcHAtdG9vbGJhci1mb250LXNpemUsIDIwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWljb24tYnV0dG9uKSB7XG4gICAgICAgIC8qIHBhcGVyLWljb24tYnV0dG9uL2lzc3Vlcy8zMyAqL1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbbWFpbi10aXRsZV0pLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtjb25kZW5zZWQtdGl0bGVdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtib3R0b20taXRlbV0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW3RvcC1pdGVtXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbc3BhY2VyXSkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjRweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ2FwcC10b29sYmFyJ1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5cbi8qKlxuYGlyb24tbWVkaWEtcXVlcnlgIGNhbiBiZSB1c2VkIHRvIGRhdGEgYmluZCB0byBhIENTUyBtZWRpYSBxdWVyeS5cblRoZSBgcXVlcnlgIHByb3BlcnR5IGlzIGEgYmFyZSBDU1MgbWVkaWEgcXVlcnkuXG5UaGUgYHF1ZXJ5LW1hdGNoZXNgIHByb3BlcnR5IGlzIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgd2hldGhlciB0aGUgcGFnZSBtYXRjaGVzXG50aGF0IG1lZGlhIHF1ZXJ5LlxuXG5FeGFtcGxlOlxuXG5gYGBodG1sXG48aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cIihtaW4td2lkdGg6IDYwMHB4KVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e3F1ZXJ5TWF0Y2hlc319XCI+XG48L2lyb24tbWVkaWEtcXVlcnk+XG5gYGBcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbkBlbGVtZW50IGlyb24tbWVkaWEtcXVlcnlcbiovXG5Qb2x5bWVyKHtcblxuICBpczogJ2lyb24tbWVkaWEtcXVlcnknLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCb29sZWFuIHJldHVybiB2YWx1ZSBvZiB0aGUgbWVkaWEgcXVlcnkuXG4gICAgICovXG4gICAgcXVlcnlNYXRjaGVzOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWFkT25seTogdHJ1ZSwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXG4gICAgICovXG4gICAgcXVlcnk6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAncXVlcnlDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgcXVlcnkgYXR0cmlidXRlIGlzIGFzc3VtZWQgdG8gYmUgYSBjb21wbGV0ZSBtZWRpYSBxdWVyeVxuICAgICAqIHN0cmluZyByYXRoZXIgdGhhbiBhIHNpbmdsZSBtZWRpYSBmZWF0dXJlLlxuICAgICAqL1xuICAgIGZ1bGw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKE1lZGlhUXVlcnlMaXN0KX1cbiAgICAgKi9cbiAgICBfYm91bmRNUUhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNZWRpYVF1ZXJ5TGlzdH1cbiAgICAgKi9cbiAgICBfbXE6IHt2YWx1ZTogbnVsbH1cbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMucXVlcnlDaGFuZ2VkKCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZSgpO1xuICB9LFxuXG4gIF9hZGQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9tcSkge1xuICAgICAgdGhpcy5fbXEuYWRkTGlzdGVuZXIodGhpcy5fYm91bmRNUUhhbmRsZXIpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbXEpIHtcbiAgICAgIHRoaXMuX21xLnJlbW92ZUxpc3RlbmVyKHRoaXMuX2JvdW5kTVFIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5fbXEgPSBudWxsO1xuICB9LFxuXG4gIHF1ZXJ5Q2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVtb3ZlKCk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5mdWxsICYmIHF1ZXJ5WzBdICE9PSAnKCcpIHtcbiAgICAgIHF1ZXJ5ID0gJygnICsgcXVlcnkgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMuX21xID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuICAgIHRoaXMuX2FkZCgpO1xuICAgIHRoaXMucXVlcnlIYW5kbGVyKHRoaXMuX21xKTtcbiAgfSxcblxuICBxdWVyeUhhbmRsZXI6IGZ1bmN0aW9uKG1xKSB7XG4gICAgdGhpcy5fc2V0UXVlcnlNYXRjaGVzKG1xLm1hdGNoZXMpO1xuICB9XG5cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25PdmVybGF5QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICBVc2UgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAgYW5kIGBwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5odG1sYCB0b1xuICBpbXBsZW1lbnQgYSBNYXRlcmlhbCBEZXNpZ24gZGlhbG9nLlxuXG4gIEZvciBleGFtcGxlLCBpZiBgPHBhcGVyLWRpYWxvZy1pbXBsPmAgaW1wbGVtZW50cyB0aGlzIGJlaGF2aW9yOlxuXG4gICAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICAgICAgPGRpdj5EaWFsb2cgYm9keTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1idXR0b24gZGlhbG9nLWRpc21pc3M+Q2FuY2VsPC9wYXBlci1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1idXR0b24gZGlhbG9nLWNvbmZpcm0+QWNjZXB0PC9wYXBlci1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gIGBwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5odG1sYCBwcm92aWRlIHN0eWxlcyBmb3IgYSBoZWFkZXIsIGNvbnRlbnQgYXJlYSxcbiAgYW5kIGFuIGFjdGlvbiBhcmVhIGZvciBidXR0b25zLiBVc2UgdGhlIGA8aDI+YCB0YWcgZm9yIHRoZSBoZWFkZXIgYW5kIHRoZVxuICBgYnV0dG9uc2AgY2xhc3MgZm9yIHRoZSBhY3Rpb24gYXJlYS4gWW91IGNhbiB1c2UgdGhlIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWBcbiAgZWxlbWVudCAoaW4gaXRzIG93biByZXBvc2l0b3J5KSBpZiB5b3UgbmVlZCBhIHNjcm9sbGluZyBjb250ZW50IGFyZWEuXG5cbiAgVXNlIHRoZSBgZGlhbG9nLWRpc21pc3NgIGFuZCBgZGlhbG9nLWNvbmZpcm1gIGF0dHJpYnV0ZXMgb24gaW50ZXJhY3RpdmVcbiAgY29udHJvbHMgdG8gY2xvc2UgdGhlIGRpYWxvZy4gSWYgdGhlIHVzZXIgZGlzbWlzc2VzIHRoZSBkaWFsb2cgd2l0aFxuICBgZGlhbG9nLWNvbmZpcm1gLCB0aGUgYGNsb3NpbmdSZWFzb25gIHdpbGwgdXBkYXRlIHRvIGluY2x1ZGUgYGNvbmZpcm1lZDpcbiAgdHJ1ZWAuXG5cbiAgIyMjIEFjY2Vzc2liaWxpdHlcblxuICBUaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwiZGlhbG9nXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB0aGUgY29udGV4dCwgaXQgbWF5XG4gIGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gb3ZlcnJpZGUgdGhpcyBhdHRyaWJ1dGUgd2l0aCBgcm9sZT1cImFsZXJ0ZGlhbG9nXCJgLlxuXG4gIElmIGBtb2RhbGAgaXMgc2V0LCB0aGUgZWxlbWVudCB3aWxsIHByZXZlbnQgdGhlIGZvY3VzIGZyb20gZXhpdGluZyB0aGVcbiAgZWxlbWVudC4gSXQgd2lsbCBhbHNvIGVuc3VyZSB0aGF0IGZvY3VzIHJlbWFpbnMgaW4gdGhlIGRpYWxvZy5cblxuICBAaGVybyBoZXJvLnN2Z1xuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgQHBvbHltZXJCZWhhdmlvciBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCA9IHtcblxuICBob3N0QXR0cmlidXRlczogeydyb2xlJzogJ2RpYWxvZycsICd0YWJpbmRleCc6ICctMSd9LFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIGBtb2RhbGAgaXMgdHJ1ZSwgdGhpcyBpbXBsaWVzIGBuby1jYW5jZWwtb24tb3V0c2lkZS1jbGlja2AsXG4gICAgICogYG5vLWNhbmNlbC1vbi1lc2Mta2V5YCBhbmQgYHdpdGgtYmFja2Ryb3BgLlxuICAgICAqL1xuICAgIG1vZGFsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIF9fcmVhZGllZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cblxuICB9LFxuXG4gIG9ic2VydmVyczogWydfbW9kYWxDaGFuZ2VkKG1vZGFsLCBfX3JlYWRpZWQpJ10sXG5cbiAgbGlzdGVuZXJzOiB7J3RhcCc6ICdfb25EaWFsb2dDbGljayd9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9ubHkgbm93IHRoZXNlIHByb3BlcnRpZXMgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleSA9IHRoaXMubm9DYW5jZWxPbkVzY0tleTtcbiAgICB0aGlzLl9fcHJldldpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wO1xuICAgIHRoaXMuX19yZWFkaWVkID0gdHJ1ZTtcbiAgfSxcblxuICBfbW9kYWxDaGFuZ2VkOiBmdW5jdGlvbihtb2RhbCwgcmVhZGllZCkge1xuICAgIC8vIG1vZGFsIGltcGxpZXMgbm9DYW5jZWxPbk91dHNpZGVDbGljaywgbm9DYW5jZWxPbkVzY0tleSBhbmQgd2l0aEJhY2tkcm9wLlxuICAgIC8vIFdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGVsZW1lbnQgdG8gYmUgcmVhZHkgYmVmb3JlIHdlIGNhbiByZWFkIHRoZVxuICAgIC8vIHByb3BlcnRpZXMgdmFsdWVzLlxuICAgIGlmICghcmVhZGllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uRXNjS2V5ID0gdGhpcy5ub0NhbmNlbE9uRXNjS2V5O1xuICAgICAgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcDtcbiAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgPSB0cnVlO1xuICAgICAgdGhpcy53aXRoQmFja2Ryb3AgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgd2FzIGNoYW5nZWQgdG8gZmFsc2UsIGxldCBpdCBmYWxzZS5cbiAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayA9XG4gICAgICAgICAgdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrICYmIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSA9XG4gICAgICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ICYmIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleTtcbiAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3AgJiYgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3A7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVDbG9zaW5nUmVhc29uQ29uZmlybWVkOiBmdW5jdGlvbihjb25maXJtZWQpIHtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24gPSB0aGlzLmNsb3NpbmdSZWFzb24gfHwge307XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uLmNvbmZpcm1lZCA9IGNvbmZpcm1lZDtcbiAgfSxcblxuICAvKipcbiAgICogV2lsbCBkaXNtaXNzIHRoZSBkaWFsb2cgaWYgdXNlciBjbGlja2VkIG9uIGFuIGVsZW1lbnQgd2l0aCBkaWFsb2ctZGlzbWlzc1xuICAgKiBvciBkaWFsb2ctY29uZmlybSBhdHRyaWJ1dGUuXG4gICAqL1xuICBfb25EaWFsb2dDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBTZWFyY2ggZm9yIHRoZSBlbGVtZW50IHdpdGggZGlhbG9nLWNvbmZpcm0gb3IgZGlhbG9nLWRpc21pc3MsXG4gICAgLy8gZnJvbSB0aGUgcm9vdCB0YXJnZXQgdW50aWwgdGhpcyAoZXhjbHVkZWQpLlxuICAgIHZhciBwYXRoID0gZG9tKGV2ZW50KS5wYXRoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5pbmRleE9mKHRoaXMpOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gcGF0aFtpXTtcbiAgICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlICYmXG4gICAgICAgICAgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1kaXNtaXNzJykgfHxcbiAgICAgICAgICAgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlhbG9nLWNvbmZpcm0nKSkpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xvc2luZ1JlYXNvbkNvbmZpcm1lZChcbiAgICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1jb25maXJtJykpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckRpYWxvZ0JlaGF2aW9yID1cbiAgICBbSXJvbk92ZXJsYXlCZWhhdmlvciwgUGFwZXJEaWFsb2dCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcuXG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yYCB8IERpYWxvZyBiYWNrZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItZGlhbG9nLWNvbG9yYCB8IERpYWxvZyBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItZGlhbG9nYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGRpYWxvZyB8IGB7fWBcbmAtLXBhcGVyLWRpYWxvZy10aXRsZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSAoYDxoMj5gKSBlbGVtZW50IHwgYHt9YFxuYC0tcGFwZXItZGlhbG9nLWJ1dHRvbi1jb2xvcmAgfCBCdXR0b24gYXJlYSBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yYFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvc2hhZG93LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMjRweCA0MHB4O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2c7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgubm8tcGFkZGluZykge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCo6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKjpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC8qIEluIDEueCwgdGhpcyBzZWxlY3RvciB3YXMgXFxgOmhvc3QgPiA6OmNvbnRlbnQgaDJcXGAuIEluIDIueCA8c2xvdD4gYWxsb3dzXG4gICAgICB0byBzZWxlY3QgZGlyZWN0IGNoaWxkcmVuIG9ubHksIHdoaWNoIGluY3JlYXNlcyB0aGUgd2VpZ2h0IG9mIHRoaXNcbiAgICAgIHNlbGVjdG9yLCBzbyB3ZSBoYXZlIHRvIHJlLWRlZmluZSBmaXJzdC1jaGlsZC9sYXN0LWNoaWxkIG1hcmdpbnMgYmVsb3cuICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMikge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXRpdGxlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFwcGx5IG1peGluIGFnYWluLCBpbiBjYXNlIGl0IHNldHMgbWFyZ2luLXRvcC4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy10aXRsZTtcbiAgICAgIH1cblxuICAgICAgLyogQXBwbHkgbWl4aW4gYWdhaW4sIGluIGNhc2UgaXQgc2V0cyBtYXJnaW4tYm90dG9tLiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDI6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKC5wYXBlci1kaWFsb2ctYnV0dG9ucyksXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCguYnV0dG9ucykge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDI0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWJ1dHRvbi1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZW5kLWp1c3RpZmllZDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taW5wdXQvaXJvbi1pbnB1dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jb250YWluZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWVycm9yLmpzJztcblxuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtEb21Nb2R1bGV9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7UGFwZXJJbnB1dEJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlucHV0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtUZXh0XG5maWVsZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90ZXh0LWZpZWxkcy5odG1sKVxuXG5gPHBhcGVyLWlucHV0PmAgaXMgYSBzaW5nbGUtbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IG1heSBpbmNsdWRlIGFuIG9wdGlvbmFsIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyIGNvdW50ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgaW5wdXQhXCIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD4gPHBhcGVyLWlucHV0IGNoYXItY291bnRlciBsYWJlbD1cIklucHV0XG4gICAgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBjYW4gYWxzbyBpbmNsdWRlIGN1c3RvbSBwcmVmaXggb3Igc3VmZml4IGVsZW1lbnRzLCB3aGljaCBhcmUgZGlzcGxheWVkXG5iZWZvcmUgb3IgYWZ0ZXIgdGhlIHRleHQgaW5wdXQgaXRzZWxmLiBJbiBvcmRlciBmb3IgYW4gZWxlbWVudCB0byBiZVxuY29uc2lkZXJlZCBhcyBhIHByZWZpeCwgaXQgbXVzdCBoYXZlIHRoZSBgcHJlZml4YCBhdHRyaWJ1dGUgKGFuZCBzaW1pbGFybHlcbmZvciBgc3VmZml4YCkuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJ0b3RhbFwiPlxuICAgICAgPGRpdiBwcmVmaXg+JDwvZGl2PlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cbkEgYHBhcGVyLWlucHV0YCBjYW4gdXNlIHRoZSBuYXRpdmUgYHR5cGU9c2VhcmNoYCBvciBgdHlwZT1maWxlYCBmZWF0dXJlcy5cbkhvd2V2ZXIsIHNpbmNlIHdlIGNhbid0IGNvbnRyb2wgdGhlIG5hdGl2ZSBzdHlsaW5nIG9mIHRoZSBpbnB1dCAoc2VhcmNoIGljb24sXG5maWxlIGJ1dHRvbiwgZGF0ZSBwbGFjZWhvbGRlciwgZXRjLiksIGluIHRoZXNlIGNhc2VzIHRoZSBsYWJlbCB3aWxsIGJlXG5hdXRvbWF0aWNhbGx5IGZsb2F0ZWQuIFRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBjYW4gc3RpbGwgYmUgdXNlZCBmb3JcbmFkZGl0aW9uYWwgaW5mb3JtYXRpb25hbCB0ZXh0LlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwic2VhcmNoIVwiIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgY2F0c1wiIGF1dG9zYXZlPVwidGVzdFwiIHJlc3VsdHM9XCI1XCI+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgZm9yIG1vcmUgQVBJIGRvY3MuXG5cbiMjIyBGb2N1c1xuXG5UbyBmb2N1cyBhIHBhcGVyLWlucHV0LCB5b3UgY2FuIGNhbGwgdGhlIG5hdGl2ZSBgZm9jdXMoKWAgbWV0aG9kIGFzIGxvbmcgYXMgdGhlXG5wYXBlciBpbnB1dCBoYXMgYSB0YWIgaW5kZXguIFNpbWlsYXJseSwgYGJsdXIoKWAgd2lsbCBibHVyIHRoZSBlbGVtZW50LlxuXG4jIyMgU3R5bGluZ1xuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dENvbnRhaW5lcmAgZm9yIGEgbGlzdCBvZiBjdXN0b20gcHJvcGVydGllcyB1c2VkIHRvXG5zdHlsZSB0aGlzIGVsZW1lbnQuXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgcmV2ZWFsIGJ1dHRvbiAodGhlIGV5ZWJhbGwpIHwge31cblxuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBpczogJ3BhcGVyLWlucHV0JyxcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIEluIDEueCwgdGhlIDxpbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXMgaXQuXG4gICAgICBJbiAyLnggdGhlIDxpcm9uLWlucHV0PiBpcyBkaXN0cmlidXRlZCB0byBwYXBlci1pbnB1dC1jb250YWluZXIsIHdoaWNoIHN0eWxlc1xuICAgICAgaXQsIGJ1dCBpbiBvcmRlciBmb3IgdGhpcyB0byB3b3JrIGNvcnJlY3RseSwgd2UgbmVlZCB0byByZXNldCBzb21lXG4gICAgICBvZiB0aGUgbmF0aXZlIGlucHV0J3MgcHJvcGVydGllcyB0byBpbmhlcml0IChmcm9tIHRoZSBpcm9uLWlucHV0KSAqL1xuICAgICAgaXJvbi1pbnB1dCA+IGlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICB3b3JkLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1jbGVhciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1yZXZlYWwge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtcmV2ZWFsO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGlkPVwiY29udGFpbmVyXCIgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCIgYWx3YXlzLWZsb2F0LWxhYmVsPVwiW1tfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWwoYWx3YXlzRmxvYXRMYWJlbCxwbGFjZWhvbGRlcildXVwiIGF1dG8tdmFsaWRhdGUkPVwiW1thdXRvVmFsaWRhdGVdXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIGludmFsaWQ9XCJbW2ludmFsaWRdXVwiPlxuXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCIgc2xvdD1cInByZWZpeFwiPjwvc2xvdD5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9yJD1cIltbX2lucHV0SWRdXVwiIHNsb3Q9XCJsYWJlbFwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDwhLS0gTmVlZCB0byBiaW5kIG1heGxlbmd0aCBzbyB0aGF0IHRoZSBwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgd29ya3MgY29ycmVjdGx5IC0tPlxuICAgICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwiaW5wdXQtZWxlbWVudFwiIGlkJD1cIltbX2lucHV0SWRdXVwiIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCIgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCIgaW52YWxpZD1cInt7aW52YWxpZH19XCIgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiPlxuICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIiBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgdGl0bGUkPVwiW1t0aXRsZV1dXCIgdHlwZSQ9XCJbW3R5cGVdXVwiIHBhdHRlcm4kPVwiW1twYXR0ZXJuXV1cIiByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIiBhdXRvY29tcGxldGUkPVwiW1thdXRvY29tcGxldGVdXVwiIGF1dG9mb2N1cyQ9XCJbW2F1dG9mb2N1c11dXCIgaW5wdXRtb2RlJD1cIltbaW5wdXRtb2RlXV1cIiBtaW5sZW5ndGgkPVwiW1ttaW5sZW5ndGhdXVwiIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCIgbWluJD1cIltbbWluXV1cIiBtYXgkPVwiW1ttYXhdXVwiIHN0ZXAkPVwiW1tzdGVwXV1cIiBuYW1lJD1cIltbbmFtZV1dXCIgcGxhY2Vob2xkZXIkPVwiW1twbGFjZWhvbGRlcl1dXCIgcmVhZG9ubHkkPVwiW1tyZWFkb25seV1dXCIgbGlzdCQ9XCJbW2xpc3RdXVwiIHNpemUkPVwiW1tzaXplXV1cIiBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIiBhdXRvY29ycmVjdCQ9XCJbW2F1dG9jb3JyZWN0XV1cIiBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIiBhdXRvc2F2ZSQ9XCJbW2F1dG9zYXZlXV1cIiByZXN1bHRzJD1cIltbcmVzdWx0c11dXCIgYWNjZXB0JD1cIltbYWNjZXB0XV1cIiBtdWx0aXBsZSQ9XCJbW211bHRpcGxlXV1cIiByb2xlJD1cIltbaW5wdXRSb2xlXV1cIiBhcmlhLWhhc3BvcHVwJD1cIltbaW5wdXRBcmlhSGFzcG9wdXBdXVwiPlxuICAgICAgPC9pcm9uLWlucHV0PlxuXG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCIgc2xvdD1cInN1ZmZpeFwiPjwvc2xvdD5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yTWVzc2FnZV1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBzbG90PVwiYWRkLW9uXCI+W1tlcnJvck1lc3NhZ2VdXTwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2hhckNvdW50ZXJdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHNsb3Q9XCJhZGQtb25cIj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgYCxcblxuICBiZWhhdmlvcnM6IFtQYXBlcklucHV0QmVoYXZpb3IsIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIC8vIFJlcXVpcmVkIGZvciB0aGUgY29ycmVjdCBUeXBlU2NyaXB0IHR5cGUtZ2VuZXJhdGlvblxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcblxuICAgIGlucHV0Um9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICB9LFxuXG4gICAgaW5wdXRBcmlhSGFzcG9wdXA6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuIE92ZXJyaWRkZW4gZnJvbVxuICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gY29ycmVjdGx5IGZvY3VzIHRoZSBuYXRpdmUgaW5wdXQuXG4gICAqXG4gICAqIEByZXR1cm4geyFIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQuX2lucHV0RWxlbWVudDtcbiAgfSxcblxuICAvLyBOb3RlOiBUaGlzIGV2ZW50IGlzIG9ubHkgYXZhaWxhYmxlIGluIHRoZSAxLjAgdmVyc2lvbiBvZiB0aGlzIGVsZW1lbnQuXG4gIC8vIEluIDIuMCwgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYF9vbklyb25JbnB1dFJlYWR5YCBpcyBkb25lIGluXG4gIC8vIFBhcGVySW5wdXRCZWhhdmlvcjo6YXR0YWNoZWQuXG4gIGxpc3RlbmVyczogeydpcm9uLWlucHV0LXJlYWR5JzogJ19vbklyb25JbnB1dFJlYWR5J30sXG5cbiAgX29uSXJvbklucHV0UmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgaXMgb25seSB1c2VkIGluIHRoZSBuZXh0IGxpbmUsIHNhdmUgdGhpcyBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgc2luY2UgdGhlIG5hdGl2ZSBpbnB1dCBoYWQgdGhpcyBJRCB1bnRpbCAyLjAuNS5cbiAgICBpZiAoIXRoaXMuJC5uYXRpdmVJbnB1dCkge1xuICAgICAgdGhpcy4kLm5hdGl2ZUlucHV0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHRoaXMuJCQoJ2lucHV0JykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQuaW5kZXhPZih0aGlzLiQubmF0aXZlSW5wdXQudHlwZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdmFsaWRhdGUgd2hlbiBhdHRhY2hlZCBpZiB0aGUgaW5wdXQgYWxyZWFkeSBoYXMgYSB2YWx1ZS5cbiAgICBpZiAoISF0aGlzLmlucHV0RWxlbWVudC5iaW5kVmFsdWUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH0sXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuLypcbmBQYXBlckl0ZW1CZWhhdmlvcmAgaXMgYSBjb252ZW5pZW5jZSBiZWhhdmlvciBzaGFyZWQgYnkgPHBhcGVyLWl0ZW0+IGFuZFxuPHBhcGVyLWljb24taXRlbT4gdGhhdCBtYW5hZ2VzIHRoZSBzaGFyZWQgY29udHJvbCBzdGF0ZXMgYW5kIGF0dHJpYnV0ZXMgb2ZcbnRoZSBpdGVtcy5cbiovXG4vKiogQHBvbHltZXJCZWhhdmlvciBQYXBlckl0ZW1CZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySXRlbUJlaGF2aW9ySW1wbCA9IHtcbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnb3B0aW9uJywgdGFiaW5kZXg6ICcwJ31cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3IgPVxuICAgIFtJcm9uQnV0dG9uU3RhdGUsIElyb25Db250cm9sU3RhdGUsIFBhcGVySXRlbUJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QsIC5wYXBlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5wYXBlci1pdGVtIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSksIC5wYXBlci1pdGVtW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcm9uLXNlbGVjdGVkKSwgLnBhcGVyLWl0ZW0uaXJvbi1zZWxlY3RlZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodCwgYm9sZCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1zZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSksIC5wYXBlci1pdGVtW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yLCB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKSwgLnBhcGVyLWl0ZW06Zm9jdXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpOmJlZm9yZSwgLnBhcGVyLWl0ZW06Zm9jdXM6YmVmb3JlIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpdmlkZXItb3BhY2l0eSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bTGlzdHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9saXN0cy5odG1sKVxuXG5gPHBhcGVyLWl0ZW0+YCBpcyBhbiBpbnRlcmFjdGl2ZSBsaXN0IGl0ZW0uIEJ5IGRlZmF1bHQsIGl0IGlzIGEgaG9yaXpvbnRhbFxuZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPkl0ZW08L3BhcGVyLWl0ZW0+XG5cblVzZSB0aGlzIGVsZW1lbnQgd2l0aCBgPHBhcGVyLWl0ZW0tYm9keT5gIHRvIG1ha2UgTWF0ZXJpYWwgRGVzaWduIHN0eWxlZFxudHdvLWxpbmUgYW5kIHRocmVlLWxpbmUgaXRlbXMuXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRvIHVzZSBgcGFwZXItaXRlbWAgYXMgYSBsaW5rLCB3cmFwIGl0IGluIGFuIGFuY2hvciB0YWcuIFNpbmNlIGBwYXBlci1pdGVtYCB3aWxsXG5hbHJlYWR5IHJlY2VpdmUgZm9jdXMsIHlvdSBtYXkgd2FudCB0byBwcmV2ZW50IHRoZSBhbmNob3IgdGFnIGZyb20gcmVjZWl2aW5nXG5mb2N1cyBhcyB3ZWxsIGJ5IHNldHRpbmcgaXRzIHRhYmluZGV4IHRvIC0xLlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgPHBhcGVyLWl0ZW0gcmFpc2VkPlBvbHltZXIgUHJvamVjdDwvcGFwZXItaXRlbT5cbiAgICA8L2E+XG5cbklmIHlvdSBhcmUgY29uY2VybmVkIGFib3V0IHBlcmZvcm1hbmNlIGFuZCB3YW50IHRvIHVzZSBgcGFwZXItaXRlbWAgaW4gYVxuYHBhcGVyLWxpc3Rib3hgIHdpdGggbWFueSBpdGVtcywgeW91IGNhbiBqdXN0IHVzZSBhIG5hdGl2ZSBgYnV0dG9uYCB3aXRoIHRoZVxuYHBhcGVyLWl0ZW1gIGNsYXNzIGFwcGxpZWQgKHByb3ZpZGVkIHlvdSBoYXZlIGNvcnJlY3RseSBpbmNsdWRlZCB0aGUgc2hhcmVkXG5zdHlsZXMpOlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPkluYm94PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TdGFycmVkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TZW50IG1haWw8L2J1dHRvbj5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgdGhlIGl0ZW0gfCBgNDhweGBcbmAtLXBhcGVyLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImxpc3RpdGVtXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB1c2FnZSwgaXQgbWF5IGJlXG5tb3JlIGFwcHJvcHJpYXRlIHRvIHNldCBgcm9sZT1cIm1lbnVpdGVtXCJgLCBgcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcImAgb3JcbmByb2xlPVwibWVudWl0ZW1yYWRpb1wiYC5cblxuICAgIDxwYXBlci1pdGVtIHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCI+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICBTaG93IHlvdXIgc3RhdHVzXG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxwYXBlci1jaGVja2JveD48L3BhcGVyLWNoZWNrYm94PlxuICAgIDwvcGFwZXItaXRlbT5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1pdGVtXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBGb3IgQXR0cmlidXRlUGFydHMsIHNldHMgdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBhbmQgcmVtb3Zlc1xuICogdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEZvciBvdGhlciBwYXJ0IHR5cGVzLCB0aGlzIGRpcmVjdGl2ZSBpcyBhIG5vLW9wLlxuICovXG5leHBvcnQgY29uc3QgaWZEZWZpbmVkID0gZGlyZWN0aXZlKCh2YWx1ZTogdW5rbm93bikgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgcGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHtcbiAgICBpZiAodmFsdWUgIT09IHBhcnQudmFsdWUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwYXJ0LmNvbW1pdHRlci5uYW1lO1xuICAgICAgcGFydC5jb21taXR0ZXIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICB9XG59KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtpc1ByaW1pdGl2ZX0gZnJvbSAnLi4vbGliL3BhcnRzLmpzJztcbmltcG9ydCB7ZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmludGVyZmFjZSBBc3luY1N0YXRlIHtcbiAgLyoqXG4gICAqIFRoZSBsYXN0IHJlbmRlcmVkIGluZGV4IG9mIGEgY2FsbCB0byB1bnRpbCgpLiBBIHZhbHVlIG9ubHkgcmVuZGVycyBpZiBpdHNcbiAgICogaW5kZXggaXMgbGVzcyB0aGFuIHRoZSBgbGFzdFJlbmRlcmVkSW5kZXhgLlxuICAgKi9cbiAgbGFzdFJlbmRlcmVkSW5kZXg6IG51bWJlcjtcblxuICB2YWx1ZXM6IHVua25vd25bXTtcbn1cblxuY29uc3QgX3N0YXRlID0gbmV3IFdlYWtNYXA8UGFydCwgQXN5bmNTdGF0ZT4oKTtcbi8vIEVmZmVjdGl2ZWx5IGluZmluaXR5LCBidXQgYSBTTUkuXG5jb25zdCBfaW5maW5pdHkgPSAweDdmZmZmZmZmO1xuXG4vKipcbiAqIFJlbmRlcnMgb25lIG9mIGEgc2VyaWVzIG9mIHZhbHVlcywgaW5jbHVkaW5nIFByb21pc2VzLCB0byBhIFBhcnQuXG4gKlxuICogVmFsdWVzIGFyZSByZW5kZXJlZCBpbiBwcmlvcml0eSBvcmRlciwgd2l0aCB0aGUgZmlyc3QgYXJndW1lbnQgaGF2aW5nIHRoZVxuICogaGlnaGVzdCBwcmlvcml0eSBhbmQgdGhlIGxhc3QgYXJndW1lbnQgaGF2aW5nIHRoZSBsb3dlc3QgcHJpb3JpdHkuIElmIGFcbiAqIHZhbHVlIGlzIGEgUHJvbWlzZSwgbG93LXByaW9yaXR5IHZhbHVlcyB3aWxsIGJlIHJlbmRlcmVkIHVudGlsIGl0IHJlc29sdmVzLlxuICpcbiAqIFRoZSBwcmlvcml0eSBvZiB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIGFzeW5jXG4gKiBkYXRhLiBGb3IgZXhhbXBsZSwgYSBQcm9taXNlIHdpdGggcGVuZGluZyBjb250ZW50IGNhbiBiZSB0aGUgZmlyc3QsXG4gKiBoaWdoZXN0LXByaW9yaXR5LCBhcmd1bWVudCwgYW5kIGEgbm9uX3Byb21pc2UgbG9hZGluZyBpbmRpY2F0b3IgdGVtcGxhdGUgY2FuXG4gKiBiZSB1c2VkIGFzIHRoZSBzZWNvbmQsIGxvd2VyLXByaW9yaXR5LCBhcmd1bWVudC4gVGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGxcbiAqIHJlbmRlciBpbW1lZGlhdGVseSwgYW5kIHRoZSBwcmltYXJ5IGNvbnRlbnQgd2lsbCByZW5kZXIgd2hlbiB0aGUgUHJvbWlzZVxuICogcmVzb2x2ZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgY29udGVudCA9IGZldGNoKCcuL2NvbnRlbnQudHh0JykudGhlbihyID0+IHIudGV4dCgpKTtcbiAqICAgICBodG1sYCR7dW50aWwoY29udGVudCwgaHRtbGA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPmApfWBcbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gZGlyZWN0aXZlKCguLi5hcmdzOiB1bmtub3duW10pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGxldCBzdGF0ZSA9IF9zdGF0ZS5nZXQocGFydCkhO1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXRlID0ge1xuICAgICAgbGFzdFJlbmRlcmVkSW5kZXg6IF9pbmZpbml0eSxcbiAgICAgIHZhbHVlczogW10sXG4gICAgfTtcbiAgICBfc3RhdGUuc2V0KHBhcnQsIHN0YXRlKTtcbiAgfVxuICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHN0YXRlLnZhbHVlcztcbiAgbGV0IHByZXZpb3VzTGVuZ3RoID0gcHJldmlvdXNWYWx1ZXMubGVuZ3RoO1xuICBzdGF0ZS52YWx1ZXMgPSBhcmdzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgaWYgKGkgPiBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBhcmdzW2ldO1xuXG4gICAgLy8gUmVuZGVyIG5vbi1Qcm9taXNlIHZhbHVlcyBpbW1lZGlhdGVseVxuICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgdHlwZW9mICh2YWx1ZSBhcyB7dGhlbj86IHVua25vd259KS50aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaTtcbiAgICAgIC8vIFNpbmNlIGEgbG93ZXItcHJpb3JpdHkgdmFsdWUgd2lsbCBuZXZlciBvdmVyd3JpdGUgYSBoaWdoZXItcHJpb3JpdHlcbiAgICAgIC8vIHN5bmNocm9ub3VzIHZhbHVlLCB3ZSBjYW4gc3RvcCBwcm9jZXNzc2luZyBub3cuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgUHJvbWlzZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQsIHNraXAgaXQuXG4gICAgaWYgKGkgPCBwcmV2aW91c0xlbmd0aCAmJiB2YWx1ZSA9PT0gcHJldmlvdXNWYWx1ZXNbaV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgYSBQcm9taXNlIHRoYXQgd2UgaGF2ZW4ndCBzZWVuIGJlZm9yZSwgc28gcHJpb3JpdGllcyBtYXkgaGF2ZVxuICAgIC8vIGNoYW5nZWQuIEZvcmdldCB3aGF0IHdlIHJlbmRlcmVkIGJlZm9yZS5cbiAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IF9pbmZpbml0eTtcbiAgICBwcmV2aW91c0xlbmd0aCA9IDA7XG5cbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oKHJlc29sdmVkVmFsdWU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgLy8gSWYgc3RhdGUudmFsdWVzIGRvZXNuJ3QgY29udGFpbiB0aGUgdmFsdWUsIHdlJ3ZlIHJlLXJlbmRlcmVkIHdpdGhvdXRcbiAgICAgIC8vIHRoZSB2YWx1ZSwgc28gZG9uJ3QgcmVuZGVyIGl0LiBUaGVuLCBvbmx5IHJlbmRlciBpZiB0aGUgdmFsdWUgaXNcbiAgICAgIC8vIGhpZ2hlci1wcmlvcml0eSB0aGFuIHdoYXQncyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQuXG4gICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHBhcnQuc2V0VmFsdWUocmVzb2x2ZWRWYWx1ZSk7XG4gICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWV0aG9kcyh3b3JrZXIsIG1ldGhvZHMpIHtcblx0bGV0IGMgPSAwO1xuXHRsZXQgY2FsbGJhY2tzID0ge307XG5cdHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcblx0XHRsZXQgZCA9IGUuZGF0YTtcblx0XHRpZiAoZC50eXBlIT09J1JQQycpIHJldHVybjtcblx0XHRpZiAoZC5pZCkge1xuXHRcdFx0bGV0IGYgPSBjYWxsYmFja3NbZC5pZF07XG5cdFx0XHRpZiAoZikge1xuXHRcdFx0XHRkZWxldGUgY2FsbGJhY2tzW2QuaWRdO1xuXHRcdFx0XHRpZiAoZC5lcnJvcikge1xuXHRcdFx0XHRcdGZbMV0oT2JqZWN0LmFzc2lnbihFcnJvcihkLmVycm9yLm1lc3NhZ2UpLCBkLmVycm9yKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZlswXShkLnJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0XHRldnQuaW5pdEV2ZW50KGQubWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0ZXZ0LmRhdGEgPSBkLnBhcmFtcztcblx0XHRcdHdvcmtlci5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cdFx0fVxuXHR9KTtcblx0bWV0aG9kcy5mb3JFYWNoKCBtZXRob2QgPT4ge1xuXHRcdHdvcmtlclttZXRob2RdID0gKC4uLnBhcmFtcykgPT4gbmV3IFByb21pc2UoIChhLCBiKSA9PiB7XG5cdFx0XHRsZXQgaWQgPSArK2M7XG5cdFx0XHRjYWxsYmFja3NbaWRdID0gW2EsIGJdO1xuXHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ1JQQycsIGlkLCBtZXRob2QsIHBhcmFtcyB9KTtcblx0XHR9KTtcblx0fSk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUdBO0FBQ0E7QUFHQTtBQStCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUVBO0FBTUE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7OztBQUlBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFvREE7QUFwREE7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBd0JBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUFBO0FBQUE7QUE5QkE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTNFQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBWUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpGQTtBQXFGQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdUVBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBOENBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBVUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQTZHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFDQTtBQWdCQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5SkE7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3REE7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBREE7QUFjQTtBQUNBO0FBZkE7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7OztBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7O0FBbkJBO0FBc0JBO0FBQ0E7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9