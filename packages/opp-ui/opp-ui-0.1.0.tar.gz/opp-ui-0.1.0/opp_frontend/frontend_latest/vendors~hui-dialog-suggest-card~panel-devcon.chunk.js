(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-dialog-suggest-card~panel-devcon"],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./node_modules/@thomasloven/round-slider/src/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@thomasloven/round-slider/src/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


class RoundSlider extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      value: {
        type: Number
      },
      high: {
        type: Number
      },
      low: {
        type: Number
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number
      },
      startAngle: {
        type: Number
      },
      arcLength: {
        type: Number
      },
      handleSize: {
        type: Number
      },
      handleZoom: {
        type: Number
      },
      disabled: {
        type: Boolean
      },
      dragging: {
        type: Boolean,
        reflect: true
      },
      rtl: {
        type: Boolean
      },
      _scale: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.startAngle = 135;
    this.arcLength = 270;
    this.handleSize = 6;
    this.handleZoom = 1.5;
    this.disabled = false;
    this.dragging = false;
    this.rtl = false;
    this._scale = 1;
  }

  get _start() {
    return this.startAngle * Math.PI / 180;
  }

  get _len() {
    // Things get weird if length is more than a complete turn
    return Math.min(this.arcLength * Math.PI / 180, 2 * Math.PI - 0.01);
  }

  get _end() {
    return this._start + this._len;
  }

  get _enabled() {
    // If handle is disabled
    if (this.disabled) return false;
    if (this.value == null && (this.high == null || this.low == null)) return false;
    if (this.value != null && (this.value > this.max || this.value < this.min)) return false;
    if (this.high != null && (this.high > this.max || this.high < this.min)) return false;
    if (this.low != null && (this.low > this.max || this.low < this.min)) return false;
    return true;
  }

  _angleInside(angle) {
    // Check if an angle is on the arc
    let a = (this.startAngle + this.arcLength / 2 - angle + 180 + 360) % 360 - 180;
    return a < this.arcLength / 2 && a > -this.arcLength / 2;
  }

  _angle2xy(angle) {
    if (this.rtl) return {
      x: -Math.cos(angle),
      y: Math.sin(angle)
    };
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
  }

  _xy2angle(x, y) {
    if (this.rtl) x = -x;
    return (Math.atan2(y, x) - this._start + 2 * Math.PI) % (2 * Math.PI);
  }

  _value2angle(value) {
    const fraction = (value - this.min) / (this.max - this.min);
    return this._start + fraction * this._len;
  }

  _angle2value(angle) {
    return Math.round((angle / this._len * (this.max - this.min) + this.min) / this.step) * this.step;
  }

  get _boundaries() {
    // Get the maximum extents of the bar arc
    const start = this._angle2xy(this._start);

    const end = this._angle2xy(this._end);

    let up = 1;
    if (!this._angleInside(270)) up = Math.max(-start.y, -end.y);
    let down = 1;
    if (!this._angleInside(90)) down = Math.max(start.y, end.y);
    let left = 1;
    if (!this._angleInside(180)) left = Math.max(-start.x, -end.x);
    let right = 1;
    if (!this._angleInside(0)) right = Math.max(start.x, end.x);
    return {
      up,
      down,
      left,
      right,
      height: up + down,
      width: left + right
    };
  }

  dragStart(ev) {
    let handle = ev.target; // Avoid double events mouseDown->focus

    if (this._rotation && this._rotation.type !== "focus") return; // If an invisible handle was clicked, switch to the visible counterpart

    if (handle.classList.contains("overflow")) handle = handle.nextElementSibling;
    if (!handle.classList.contains("handle")) return;
    handle.setAttribute('stroke-width', 2 * this.handleSize * this.handleZoom * this._scale);
    const min = handle.id === "high" ? this.low : this.min;
    const max = handle.id === "low" ? this.high : this.max;
    this._rotation = {
      handle,
      min,
      max,
      start: this[handle.id],
      type: ev.type
    };
    this.dragging = true;
  }

  dragEnd(ev) {
    if (!this._rotation) return;
    const handle = this._rotation.handle;
    handle.setAttribute('stroke-width', 2 * this.handleSize * this._scale);
    this._rotation = false;
    this.dragging = false;
    handle.blur();
    let event = new CustomEvent('value-changed', {
      detail: {
        [handle.id]: this[handle.id]
      }
    });
    this.dispatchEvent(event); // This makes the low handle render over the high handle if they both are
    // close to the top end.  Otherwise if would be unclickable, and the high
    // handle locked by the low.  Calcualtion is done in the dragEnd handler to
    // avoid "z fighting" while dragging.

    if (this.low && this.low >= 0.99 * this.max) this._reverseOrder = true;else this._reverseOrder = false;
  }

  drag(ev) {
    if (!this._rotation) return;
    if (this._rotation.type === "focus") return;
    ev.preventDefault();
    const mouseX = ev.type === "touchmove" ? ev.touches[0].clientX : ev.clientX;
    const mouseY = ev.type === "touchmove" ? ev.touches[0].clientY : ev.clientY;
    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const boundaries = this._boundaries;
    const x = mouseX - (rect.left + boundaries.left * rect.width / boundaries.width);
    const y = mouseY - (rect.top + boundaries.up * rect.height / boundaries.height);

    const angle = this._xy2angle(x, y);

    const pos = this._angle2value(angle);

    this._dragpos(pos);
  }

  _dragpos(pos) {
    if (pos < this._rotation.min || pos > this._rotation.max) return;
    const handle = this._rotation.handle;
    this[handle.id] = pos;
    let event = new CustomEvent('value-changing', {
      detail: {
        [handle.id]: pos
      }
    });
    this.dispatchEvent(event);
  }

  _keyStep(ev) {
    if (!this._rotation) return;
    const handle = this._rotation.handle;
    if (ev.key === "ArrowLeft") if (this.rtl) this._dragpos(this[handle.id] + this.step);else this._dragpos(this[handle.id] - this.step);
    if (ev.key === "ArrowRight") if (this.rtl) this._dragpos(this[handle.id] - this.step);else this._dragpos(this[handle.id] + this.step);
  }

  firstUpdated() {
    document.addEventListener('mouseup', this.dragEnd.bind(this));
    document.addEventListener('touchend', this.dragEnd.bind(this), {
      passive: false
    });
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('touchmove', this.drag.bind(this), {
      passive: false
    });
    document.addEventListener('keydown', this._keyStep.bind(this));
  }

  updated(changedProperties) {
    // Workaround for vector-effect not working in IE and pre-Chromium Edge
    // That's also why the _scale property exists
    if (this.shadowRoot.querySelector("svg") && this.shadowRoot.querySelector("svg").style.vectorEffect !== undefined) return;

    if (changedProperties.has("_scale") && this._scale != 1) {
      this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(e => {
        if (e.getAttribute('stroke-width')) return;
        const orig = parseFloat(getComputedStyle(e).getPropertyValue('stroke-width'));
        e.style.strokeWidth = `${orig * this._scale}px`;
      });
    }

    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const scale = Math.max(rect.width, rect.height);
    this._scale = 2 / scale;
  }

  _renderArc(start, end) {
    const diff = end - start;
    start = this._angle2xy(start);
    end = this._angle2xy(end + 0.001); // Safari doesn't like arcs with no length

    return `
      M ${start.x} ${start.y}
      A 1 1,
        0,
        ${diff > Math.PI ? "1" : "0"} ${this.rtl ? "0" : "1"},
        ${end.x} ${end.y}
    `;
  }

  _renderHandle(id) {
    const theta = this._value2angle(this[id]);

    const pos = this._angle2xy(theta); // Two handles are drawn. One visible, and one invisible that's twice as
    // big. Makes it easier to click.


    return lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
      <g class="${id} handle">
        <path
          id=${id}
          class="overflow"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x + 0.001} ${pos.y + 0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4 * this.handleSize * this._scale}"
          />
        <path
          id=${id}
          class="handle"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x + 0.001} ${pos.y + 0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2 * this.handleSize * this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          />
        </g>
      `;
  }

  render() {
    const view = this._boundaries;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-view.left} ${-view.up} ${view.width} ${view.height}"
        style="margin: ${this.handleSize * this.handleZoom}px;"
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start, this._end)}
            vector-effect="non-scaling-stroke"
          />
          ${this._enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
              <path
                class="bar"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(this.low != null ? this.low : this.min), this._value2angle(this.high != null ? this.high : this.value))}
              />` : ``}
        </g>

        <g class="handles">
        ${this._enabled ? this.low != null ? this._reverseOrder ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("high")} ${this._renderHandle("low")}` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("low")} ${this._renderHandle("high")}` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("value")}` : ``}
        </g>
      </svg>
    `;
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      g.handles {
        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
        stroke-linecap: round;
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      .handle:focus {
        outline: unset;
      }
    `;
  }

}

customElements.define('round-slider', RoundSlider);

/***/ }),

/***/ "./node_modules/deep-freeze/index.js":
/*!*******************************************!*\
  !*** ./node_modules/deep-freeze/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
};

/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
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
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */

const styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

const styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(styleInfo => part => {
  if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
    throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
  }

  const {
    committer
  } = part;
  const {
    style
  } = committer.element; // Handle static styles the first time we see a Part

  if (!styleMapCache.has(part)) {
    style.cssText = committer.strings.join(' ');
  } // Remove old properties that no longer exist in styleInfo


  const oldInfo = styleMapCache.get(part);

  for (const name in oldInfo) {
    if (!(name in styleInfo)) {
      if (name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[name] = null;
      } else {
        style.removeProperty(name);
      }
    }
  } // Add or update properties


  for (const name in styleInfo) {
    if (name.indexOf('-') === -1) {
      // tslint:disable-next-line:no-any
      style[name] = styleInfo[name];
    } else {
      style.setProperty(name, styleInfo[name]);
    }
  }

  styleMapCache.set(part, styleInfo);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5wYW5lbC1kZXZjb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGhvbWFzbG92ZW4vcm91bmQtc2xpZGVyL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwLWZyZWV6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIHN2Zyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIFJvdW5kU2xpZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoaWdoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGxvdzoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtaW46IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWF4OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN0ZXA6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3RhcnRBbmdsZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBhcmNMZW5ndGg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaGFuZGxlU2l6ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoYW5kbGVab29tOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGRpc2FibGVkOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBkcmFnZ2luZzoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9LFxuICAgICAgcnRsOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBfc2NhbGU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5taW4gPSAwO1xuICAgIHRoaXMubWF4ID0gMTAwO1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgdGhpcy5zdGFydEFuZ2xlID0gMTM1O1xuICAgIHRoaXMuYXJjTGVuZ3RoID0gMjcwO1xuICAgIHRoaXMuaGFuZGxlU2l6ZSA9IDY7XG4gICAgdGhpcy5oYW5kbGVab29tID0gMS41O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ydGwgPSBmYWxzZTtcbiAgICB0aGlzLl9zY2FsZSA9IDE7XG4gIH1cblxuICBnZXQgX3N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0QW5nbGUqTWF0aC5QSS8xODA7XG4gIH1cbiAgZ2V0IF9sZW4oKSB7XG4gICAgLy8gVGhpbmdzIGdldCB3ZWlyZCBpZiBsZW5ndGggaXMgbW9yZSB0aGFuIGEgY29tcGxldGUgdHVyblxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmFyY0xlbmd0aCpNYXRoLlBJLzE4MCwgMipNYXRoLlBJLTAuMDEpO1xuICB9XG4gIGdldCBfZW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIHRoaXMuX2xlbjtcbiAgfVxuXG4gIGdldCBfZW5hYmxlZCgpIHtcbiAgICAvLyBJZiBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICBpZih0aGlzLmRpc2FibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PSBudWxsICYmICh0aGlzLmhpZ2ggPT0gbnVsbCB8fCB0aGlzLmxvdyA9PSBudWxsKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYodGhpcy52YWx1ZSAhPSBudWxsICYmICh0aGlzLnZhbHVlID4gdGhpcy5tYXggfHwgdGhpcy52YWx1ZSA8IHRoaXMubWluKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMuaGlnaCAhPSBudWxsICYmICh0aGlzLmhpZ2ggPiB0aGlzLm1heCB8fCB0aGlzLmhpZ2ggPCB0aGlzLm1pbikpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLmxvdyAhPSBudWxsICYmICh0aGlzLmxvdyA+IHRoaXMubWF4IHx8IHRoaXMubG93IDwgdGhpcy5taW4pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfYW5nbGVJbnNpZGUoYW5nbGUpIHtcbiAgICAvLyBDaGVjayBpZiBhbiBhbmdsZSBpcyBvbiB0aGUgYXJjXG4gICAgbGV0IGEgPSAodGhpcy5zdGFydEFuZ2xlICsgdGhpcy5hcmNMZW5ndGgvMiAtIGFuZ2xlICsgMTgwICsgMzYwKSAlIDM2MCAtIDE4MDtcbiAgICByZXR1cm4gKGEgPCB0aGlzLmFyY0xlbmd0aC8yICYmIGEgPiAtdGhpcy5hcmNMZW5ndGgvMik7XG4gIH1cbiAgX2FuZ2xlMnh5KGFuZ2xlKSB7XG4gICAgaWYodGhpcy5ydGwpXG4gICAgICByZXR1cm4ge3g6IC1NYXRoLmNvcyhhbmdsZSksIHk6IE1hdGguc2luKGFuZ2xlKX1cbiAgICByZXR1cm4ge3g6IE1hdGguY29zKGFuZ2xlKSwgeTogTWF0aC5zaW4oYW5nbGUpfVxuICB9XG4gIF94eTJhbmdsZSh4LHkpIHtcbiAgICBpZih0aGlzLnJ0bClcbiAgICAgIHggPSAteDtcbiAgICByZXR1cm4gKE1hdGguYXRhbjIoeSx4KSAtIHRoaXMuX3N0YXJ0ICsgMipNYXRoLlBJKSAlICgyKk1hdGguUEkpO1xuICB9XG5cbiAgX3ZhbHVlMmFuZ2xlKHZhbHVlKSB7XG4gICAgY29uc3QgZnJhY3Rpb24gPSAodmFsdWUgLSB0aGlzLm1pbikvKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIGZyYWN0aW9uICogdGhpcy5fbGVuO1xuICB9XG4gIF9hbmdsZTJ2YWx1ZShhbmdsZSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChhbmdsZS90aGlzLl9sZW4qKHRoaXMubWF4IC0gdGhpcy5taW4pICsgdGhpcy5taW4pL3RoaXMuc3RlcCkqdGhpcy5zdGVwO1xuICB9XG5cblxuICBnZXQgX2JvdW5kYXJpZXMoKSB7XG4gICAgLy8gR2V0IHRoZSBtYXhpbXVtIGV4dGVudHMgb2YgdGhlIGJhciBhcmNcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FuZ2xlMnh5KHRoaXMuX3N0YXJ0KTtcbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hbmdsZTJ4eSh0aGlzLl9lbmQpO1xuXG4gICAgbGV0IHVwID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMjcwKSlcbiAgICAgIHVwID0gIE1hdGgubWF4KC1zdGFydC55LCAtZW5kLnkpO1xuXG4gICAgbGV0IGRvd24gPSAxO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSg5MCkpXG4gICAgICBkb3duID0gTWF0aC5tYXgoc3RhcnQueSwgZW5kLnkpO1xuXG4gICAgbGV0IGxlZnQgPSAxO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSgxODApKVxuICAgICAgbGVmdCA9IE1hdGgubWF4KC1zdGFydC54LCAtZW5kLngpO1xuXG4gICAgbGV0IHJpZ2h0ID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMCkpXG4gICAgICByaWdodCA9IE1hdGgubWF4KHN0YXJ0LngsIGVuZC54KTtcblxuICAgIHJldHVybiB7XG4gICAgICB1cCwgZG93biwgbGVmdCwgcmlnaHQsXG4gICAgICBoZWlnaHQ6IHVwK2Rvd24sXG4gICAgICB3aWR0aDogbGVmdCtyaWdodCxcbiAgICB9O1xuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2KSB7XG4gICAgbGV0IGhhbmRsZSA9IGV2LnRhcmdldDtcblxuICAgIC8vIEF2b2lkIGRvdWJsZSBldmVudHMgbW91c2VEb3duLT5mb2N1c1xuICAgIGlmKHRoaXMuX3JvdGF0aW9uICYmIHRoaXMuX3JvdGF0aW9uLnR5cGUgIT09IFwiZm9jdXNcIikgcmV0dXJuO1xuXG4gICAgLy8gSWYgYW4gaW52aXNpYmxlIGhhbmRsZSB3YXMgY2xpY2tlZCwgc3dpdGNoIHRvIHRoZSB2aXNpYmxlIGNvdW50ZXJwYXJ0XG4gICAgaWYoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJmbG93XCIpKVxuICAgICAgaGFuZGxlID0gaGFuZGxlLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgaWYoIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW5kbGVcIikpIHJldHVybjtcbiAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAyKnRoaXMuaGFuZGxlU2l6ZSp0aGlzLmhhbmRsZVpvb20qdGhpcy5fc2NhbGUpO1xuXG4gICAgY29uc3QgbWluID0gaGFuZGxlLmlkID09PSBcImhpZ2hcIiA/IHRoaXMubG93IDogdGhpcy5taW47XG4gICAgY29uc3QgbWF4ID0gaGFuZGxlLmlkID09PSBcImxvd1wiID8gdGhpcy5oaWdoIDogdGhpcy5tYXg7XG4gICAgdGhpcy5fcm90YXRpb24gPSB7IGhhbmRsZSwgbWluLCBtYXgsIHN0YXJ0OiB0aGlzW2hhbmRsZS5pZF0sIHR5cGU6IGV2LnR5cGV9O1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0VuZChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy5fcm90YXRpb24uaGFuZGxlO1xuICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDIqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlKTtcblxuICAgIHRoaXMuX3JvdGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgaGFuZGxlLmJsdXIoKTtcblxuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndmFsdWUtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBbaGFuZGxlLmlkXSA6IHRoaXNbaGFuZGxlLmlkXSxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgLy8gVGhpcyBtYWtlcyB0aGUgbG93IGhhbmRsZSByZW5kZXIgb3ZlciB0aGUgaGlnaCBoYW5kbGUgaWYgdGhleSBib3RoIGFyZVxuICAgIC8vIGNsb3NlIHRvIHRoZSB0b3AgZW5kLiAgT3RoZXJ3aXNlIGlmIHdvdWxkIGJlIHVuY2xpY2thYmxlLCBhbmQgdGhlIGhpZ2hcbiAgICAvLyBoYW5kbGUgbG9ja2VkIGJ5IHRoZSBsb3cuICBDYWxjdWFsdGlvbiBpcyBkb25lIGluIHRoZSBkcmFnRW5kIGhhbmRsZXIgdG9cbiAgICAvLyBhdm9pZCBcInogZmlnaHRpbmdcIiB3aGlsZSBkcmFnZ2luZy5cbiAgICBpZih0aGlzLmxvdyAmJiB0aGlzLmxvdyA+PSAwLjk5KnRoaXMubWF4KVxuICAgICAgdGhpcy5fcmV2ZXJzZU9yZGVyID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9yZXZlcnNlT3JkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGRyYWcoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcbiAgICBpZih0aGlzLl9yb3RhdGlvbi50eXBlID09PSBcImZvY3VzXCIpIHJldHVybjtcblxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtb3VzZVggPSAoZXYudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikgPyBldi50b3VjaGVzWzBdLmNsaWVudFggOiBldi5jbGllbnRYO1xuICAgIGNvbnN0IG1vdXNlWSA9IChldi50eXBlID09PSBcInRvdWNobW92ZVwiKSA/IGV2LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2LmNsaWVudFk7XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm91bmRhcmllcyA9IHRoaXMuX2JvdW5kYXJpZXM7XG4gICAgY29uc3QgeCA9IG1vdXNlWCAtIChyZWN0LmxlZnQgKyBib3VuZGFyaWVzLmxlZnQqcmVjdC53aWR0aC9ib3VuZGFyaWVzLndpZHRoKTtcbiAgICBjb25zdCB5ID0gbW91c2VZIC0gKHJlY3QudG9wICsgYm91bmRhcmllcy51cCpyZWN0LmhlaWdodC9ib3VuZGFyaWVzLmhlaWdodCk7XG5cbiAgICBjb25zdCBhbmdsZSA9IHRoaXMuX3h5MmFuZ2xlKHgseSk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fYW5nbGUydmFsdWUoYW5nbGUpO1xuICAgIHRoaXMuX2RyYWdwb3MocG9zKTtcbiAgfVxuXG4gIF9kcmFncG9zKHBvcykge1xuICAgIGlmKHBvcyA8IHRoaXMuX3JvdGF0aW9uLm1pbiB8fCBwb3MgPiB0aGlzLl9yb3RhdGlvbi5tYXgpIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICB0aGlzW2hhbmRsZS5pZF0gPSBwb3M7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5naW5nJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIFtoYW5kbGUuaWRdIDogcG9zLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBfa2V5U3RlcChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICBpZihldi5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpXG4gICAgICBpZih0aGlzLnJ0bClcbiAgICAgICAgdGhpcy5fZHJhZ3Bvcyh0aGlzW2hhbmRsZS5pZF0gKyB0aGlzLnN0ZXApO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSAtIHRoaXMuc3RlcCk7XG4gICAgaWYoZXYua2V5ID09PSBcIkFycm93UmlnaHRcIilcbiAgICAgIGlmKHRoaXMucnRsKVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSAtIHRoaXMuc3RlcCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuX2RyYWdwb3ModGhpc1toYW5kbGUuaWRdICsgdGhpcy5zdGVwKTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnRW5kLmJpbmQodGhpcyksIHtwYXNzaXZlOiBmYWxzZX0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZy5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSwge3Bhc3NpdmU6IGZhbHNlfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleVN0ZXAuYmluZCh0aGlzKSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciB2ZWN0b3ItZWZmZWN0IG5vdCB3b3JraW5nIGluIElFIGFuZCBwcmUtQ2hyb21pdW0gRWRnZVxuICAgIC8vIFRoYXQncyBhbHNvIHdoeSB0aGUgX3NjYWxlIHByb3BlcnR5IGV4aXN0c1xuICAgIGlmKHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpXG4gICAgJiYgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUudmVjdG9yRWZmZWN0ICE9PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiX3NjYWxlXCIpICYmIHRoaXMuX3NjYWxlICE9IDEpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwYXRoXCIpLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG9yaWcgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZSkuZ2V0UHJvcGVydHlWYWx1ZSgnc3Ryb2tlLXdpZHRoJykpO1xuICAgICAgICBlLnN0eWxlLnN0cm9rZVdpZHRoID0gYCR7b3JpZyp0aGlzLl9zY2FsZX1weGA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIHRoaXMuX3NjYWxlID0gMi9zY2FsZTtcbiAgfVxuXG5cblxuICBfcmVuZGVyQXJjKHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBkaWZmID0gZW5kLXN0YXJ0O1xuICAgIHN0YXJ0ID0gdGhpcy5fYW5nbGUyeHkoc3RhcnQpO1xuICAgIGVuZCA9IHRoaXMuX2FuZ2xlMnh5KGVuZCswLjAwMSk7IC8vIFNhZmFyaSBkb2Vzbid0IGxpa2UgYXJjcyB3aXRoIG5vIGxlbmd0aFxuICAgIHJldHVybiBgXG4gICAgICBNICR7c3RhcnQueH0gJHtzdGFydC55fVxuICAgICAgQSAxIDEsXG4gICAgICAgIDAsXG4gICAgICAgICR7KGRpZmYpID4gTWF0aC5QSSA/IFwiMVwiIDogXCIwXCJ9ICR7dGhpcy5ydGwgPyBcIjBcIiA6IFwiMVwifSxcbiAgICAgICAgJHtlbmQueH0gJHtlbmQueX1cbiAgICBgO1xuICB9XG5cbiAgX3JlbmRlckhhbmRsZShpZCkge1xuICAgIGNvbnN0IHRoZXRhID0gdGhpcy5fdmFsdWUyYW5nbGUodGhpc1tpZF0pO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2FuZ2xlMnh5KHRoZXRhKTtcblxuICAgIC8vIFR3byBoYW5kbGVzIGFyZSBkcmF3bi4gT25lIHZpc2libGUsIGFuZCBvbmUgaW52aXNpYmxlIHRoYXQncyB0d2ljZSBhc1xuICAgIC8vIGJpZy4gTWFrZXMgaXQgZWFzaWVyIHRvIGNsaWNrLlxuICAgIHJldHVybiBzdmdgXG4gICAgICA8ZyBjbGFzcz1cIiR7aWR9IGhhbmRsZVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPSR7aWR9XG4gICAgICAgICAgY2xhc3M9XCJvdmVyZmxvd1wiXG4gICAgICAgICAgZD1cIlxuICAgICAgICAgIE0gJHtwb3MueH0gJHtwb3MueX1cbiAgICAgICAgICBMICR7cG9zLngrMC4wMDF9ICR7cG9zLnkrMC4wMDF9XG4gICAgICAgICAgXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICBzdHJva2U9XCJyZ2JhKDAsMCwwLDApXCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIkezQqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD0ke2lkfVxuICAgICAgICAgIGNsYXNzPVwiaGFuZGxlXCJcbiAgICAgICAgICBkPVwiXG4gICAgICAgICAgTSAke3Bvcy54fSAke3Bvcy55fVxuICAgICAgICAgIEwgJHtwb3MueCswLjAwMX0gJHtwb3MueSswLjAwMX1cbiAgICAgICAgICBcIlxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIiR7Mip0aGlzLmhhbmRsZVNpemUqdGhpcy5fc2NhbGV9XCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIEBmb2N1cz0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICAgIEBibHVyPSR7dGhpcy5kcmFnRW5kfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIGBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuX2JvdW5kYXJpZXM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdmdcbiAgICAgICAgQG1vdXNlZG93bj0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICBAdG91Y2hzdGFydD0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICB4bWxuPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB2aWV3Qm94PVwiJHstdmlldy5sZWZ0fSAkey12aWV3LnVwfSAke3ZpZXcud2lkdGh9ICR7dmlldy5oZWlnaHR9XCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW46ICR7dGhpcy5oYW5kbGVTaXplKnRoaXMuaGFuZGxlWm9vbX1weDtcIlxuICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICA+XG4gICAgICAgIDxnIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzPVwicGF0aFwiXG4gICAgICAgICAgICBkPSR7dGhpcy5fcmVuZGVyQXJjKHRoaXMuX3N0YXJ0LCB0aGlzLl9lbmQpfVxuICAgICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICAkeyB0aGlzLl9lbmFibGVkXG4gICAgICAgICAgICA/IHN2Z2BcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJhclwiXG4gICAgICAgICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgICAgZD0ke3RoaXMuX3JlbmRlckFyYyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXMubG93ICE9IG51bGwgPyB0aGlzLmxvdyA6IHRoaXMubWluKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXMuaGlnaCAhPSBudWxsID8gdGhpcy5oaWdoIDogdGhpcy52YWx1ZSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPmBcbiAgICAgICAgICAgIDogYGBcbiAgICAgICAgICB9XG4gICAgICAgIDwvZz5cblxuICAgICAgICA8ZyBjbGFzcz1cImhhbmRsZXNcIj5cbiAgICAgICAgJHsgdGhpcy5fZW5hYmxlZFxuICAgICAgICAgID8gdGhpcy5sb3cgIT0gbnVsbFxuICAgICAgICAgICAgICA/IHRoaXMuX3JldmVyc2VPcmRlclxuICAgICAgICAgICAgICAgID8gaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcImhpZ2hcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwibG93XCIpfWBcbiAgICAgICAgICAgICAgICA6IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJsb3dcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwiaGlnaFwiKX1gXG4gICAgICAgICAgICAgIDogaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcInZhbHVlXCIpfWBcbiAgICAgICAgICA6IGBgXG4gICAgICAgIH1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBzdmcge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIH1cbiAgICAgIC5zbGlkZXIge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLXJvdW5kLXNsaWRlci1wYXRoLXdpZHRoLCAzKTtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHZhcigtLXJvdW5kLXNsaWRlci1saW5lY2FwLCByb3VuZCk7XG4gICAgICB9XG4gICAgICAucGF0aCB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLXBhdGgtY29sb3IsIGxpZ2h0Z3JheSk7XG4gICAgICB9XG4gICAgICAuYmFyIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1yb3VuZC1zbGlkZXItYmFyLWNvbG9yLCBkZWVwc2t5Ymx1ZSk7XG4gICAgICB9XG4gICAgICBnLmhhbmRsZXMge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1oYW5kbGUtY29sb3IsIHZhcigtLXJvdW5kLXNsaWRlci1iYXItY29sb3IsIGRlZXBza3libHVlKSk7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgIH1cbiAgICAgIGcubG93LmhhbmRsZSB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWxvdy1oYW5kbGUtY29sb3IpO1xuICAgICAgfVxuICAgICAgZy5oaWdoLmhhbmRsZSB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWhpZ2gtaGFuZGxlLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5oYW5kbGU6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiB1bnNldDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncm91bmQtc2xpZGVyJywgUm91bmRTbGlkZXIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWVwRnJlZXplIChvKSB7XG4gIE9iamVjdC5mcmVlemUobyk7XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmIChvLmhhc093blByb3BlcnR5KHByb3ApXG4gICAgJiYgb1twcm9wXSAhPT0gbnVsbFxuICAgICYmICh0eXBlb2Ygb1twcm9wXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICYmICFPYmplY3QuaXNGcm96ZW4ob1twcm9wXSkpIHtcbiAgICAgIGRlZXBGcmVlemUob1twcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBvO1xufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnQsIFByb3BlcnR5UGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlSW5mbyB7XG4gIHJlYWRvbmx5IFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSBTdHlsZUluZm8gb2JqZWN0IGFwcGxpZWQgdG8gYSBnaXZlbiBBdHRyaWJ1dGVQYXJ0LlxuICogVXNlZCB0byB1bnNldCBleGlzdGluZyB2YWx1ZXMgd2hlbiBhIG5ldyBTdHlsZUluZm8gb2JqZWN0IGlzIGFwcGxpZWQuXG4gKi9cbmNvbnN0IHN0eWxlTWFwQ2FjaGUgPSBuZXcgV2Vha01hcDxBdHRyaWJ1dGVQYXJ0LCBTdHlsZUluZm8+KCk7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhcHBsaWVzIENTUyBwcm9wZXJ0aWVzIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogYHN0eWxlTWFwYCBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSBhbmQgbXVzdCBiZSB0aGUgb25seVxuICogZXhwcmVzc2lvbiBpbiB0aGUgYXR0cmlidXRlLiBJdCB0YWtlcyB0aGUgcHJvcGVydHkgbmFtZXMgaW4gdGhlIGBzdHlsZUluZm9gXG4gKiBvYmplY3QgYW5kIGFkZHMgdGhlIHByb3BlcnR5IHZhbHVlcyBhcyBDU1MgcHJvcGVydGVzLiBQcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBkYXNoZXMgKGAtYCkgYXJlIGFzc3VtZWQgdG8gYmUgdmFsaWQgQ1NTIHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlXG4gKiBlbGVtZW50J3Mgc3R5bGUgb2JqZWN0IHVzaW5nIGBzZXRQcm9wZXJ0eSgpYC4gTmFtZXMgd2l0aG91dCBkYXNoZXMgYXJlXG4gKiBhc3N1bWVkIHRvIGJlIGNhbWVsQ2FzZWQgSmF2YVNjcmlwdCBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZSBlbGVtZW50J3NcbiAqIHN0eWxlIG9iamVjdCB1c2luZyBwcm9wZXJ0eSBhc3NpZ25tZW50LCBhbGxvd2luZyB0aGUgc3R5bGUgb2JqZWN0IHRvXG4gKiB0cmFuc2xhdGUgSmF2YVNjcmlwdC1zdHlsZSBuYW1lcyB0byBDU1MgcHJvcGVydHkgbmFtZXMuXG4gKlxuICogRm9yIGV4YW1wbGUgYHN0eWxlTWFwKHtiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCAnYm9yZGVyLXRvcCc6ICc1cHgnLCAnLS1zaXplJzpcbiAqICcwJ30pYCBzZXRzIHRoZSBgYmFja2dyb3VuZC1jb2xvcmAsIGBib3JkZXItdG9wYCBhbmQgYC0tc2l6ZWAgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0gc3R5bGVJbmZvIHtTdHlsZUluZm99XG4gKi9cbmV4cG9ydCBjb25zdCBzdHlsZU1hcCA9IGRpcmVjdGl2ZSgoc3R5bGVJbmZvOiBTdHlsZUluZm8pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICghKHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB8fCAocGFydCBpbnN0YW5jZW9mIFByb3BlcnR5UGFydCkgfHxcbiAgICAgIHBhcnQuY29tbWl0dGVyLm5hbWUgIT09ICdzdHlsZScgfHwgcGFydC5jb21taXR0ZXIucGFydHMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBgc3R5bGVNYXBgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gdGhlIHN0eWxlIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgfVxuXG4gIGNvbnN0IHtjb21taXR0ZXJ9ID0gcGFydDtcbiAgY29uc3Qge3N0eWxlfSA9IGNvbW1pdHRlci5lbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gIC8vIEhhbmRsZSBzdGF0aWMgc3R5bGVzIHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBhIFBhcnRcbiAgaWYgKCFzdHlsZU1hcENhY2hlLmhhcyhwYXJ0KSkge1xuICAgIHN0eWxlLmNzc1RleHQgPSBjb21taXR0ZXIuc3RyaW5ncy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gIGNvbnN0IG9sZEluZm8gPSBzdHlsZU1hcENhY2hlLmdldChwYXJ0KTtcbiAgZm9yIChjb25zdCBuYW1lIGluIG9sZEluZm8pIHtcbiAgICBpZiAoIShuYW1lIGluIHN0eWxlSW5mbykpIHtcbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgb3IgdXBkYXRlIHByb3BlcnRpZXNcbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gc3R5bGVJbmZvW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBzdHlsZUluZm9bbmFtZV0pO1xuICAgIH1cbiAgfVxuICBzdHlsZU1hcENhY2hlLnNldChwYXJ0LCBzdHlsZUluZm8pO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQXhCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7OztBQUdBOzs7O0FBS0E7QUFMQTs7OztBQWVBOzs7QUE5QkE7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQ0E7QUFDQTtBQTdXQTtBQUNBO0FBOFdBOzs7Ozs7Ozs7OztBQ3RYQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFNQTs7Ozs7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=