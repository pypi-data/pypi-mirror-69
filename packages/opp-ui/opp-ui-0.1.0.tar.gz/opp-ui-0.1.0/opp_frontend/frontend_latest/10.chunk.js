(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-tooltip/paper-tooltip.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
Material design:
[Tooltips](https://www.google.com/design/spec/components/tooltips.html)
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't
exist, centered to the parent node containing it.
Example:
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>
    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
The tooltip can be positioned on the top|bottom|left|right of the anchor using
the `position` attribute. The default position is bottom.
    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-tooltip-background` | The background color of the tooltip | `#616161`
`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
`--paper-tooltip-text-color` | The text color of the tooltip | `white`
`--paper-tooltip` | Mixin applied to the tooltip | `{}`
`--paper-tooltip-delay-in` | Delay before tooltip starts to fade in | `500`
`--paper-tooltip-delay-out` | Delay before tooltip starts to fade out | `0`
`--paper-tooltip-duration-in` | Timing for animation when showing tooltip | `500`
`--paper-tooltip-duration-out` | Timing for animation when hiding tooltip | `0`
`--paper-tooltip-animation` | Mixin applied to the tooltip animation | `{}`
@group Paper Elements
@element paper-tooltip
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,
  is: 'paper-tooltip',
  hostAttributes: {
    role: 'tooltip',
    tabindex: -1
  },
  properties: {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip. If this property is not set,
     * then the tooltip will be centered to the parent node containing it.
     */
    for: {
      type: String,
      observer: '_findTarget'
    },

    /**
     * Set this to true if you want to manually control when the tooltip
     * is shown or hidden.
     */
    manualMode: {
      type: Boolean,
      value: false,
      observer: '_manualModeChanged'
    },

    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: {
      type: String,
      value: 'bottom'
    },

    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: {
      type: Boolean,
      value: false
    },

    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: {
      type: Number,
      value: 14
    },

    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: {
      type: Number,
      value: 14
    },

    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: {
      type: Number,
      value: 500,
      observer: '_delayChange'
    },

    /**
     * The animation that will be played on entry.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationEntry: {
      type: String,
      value: ''
    },

    /**
     * The animation that will be played on exit.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationExit: {
      type: String,
      value: ''
    },

    /**
     * This property is deprecated.  Use --paper-tooltip-animation to change the
     * animation. The entry and exit animations that will be played when showing
     * and hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     * @deprecated since version
     *
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: {
      type: Object,
      value: function () {
        return {
          'entry': [{
            name: 'fade-in-animation',
            node: this,
            timing: {
              delay: 0
            }
          }],
          'exit': [{
            name: 'fade-out-animation',
            node: this
          }]
        };
      }
    },
    _showing: {
      type: Boolean,
      value: false
    }
  },
  listeners: {
    'webkitAnimationEnd': '_onAnimationEnd'
  },

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, or the immediate parent
   * of the tooltip.
   *
   * @type {Node}
   */
  get target() {
    var parentNode = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).parentNode; // If the parentNode is a document fragment, then we need to use the host.

    var ownerRoot = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getOwnerRoot();
    var target;

    if (this.for) {
      target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(ownerRoot).querySelector('#' + this.for);
    } else {
      target = parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE ? ownerRoot.host : parentNode;
    }

    return target;
  },

  /**
   * @return {void}
   */
  attached: function () {
    this._findTarget();
  },

  /**
   * @return {void}
   */
  detached: function () {
    if (!this.manualMode) this._removeListeners();
  },

  /**
   * Replaces Neon-Animation playAnimation - just calls show and hide.
   * @deprecated Use show and hide instead.
   * @param {string} type Either `entry` or `exit`
   */
  playAnimation: function (type) {
    if (type === 'entry') {
      this.show();
    } else if (type === 'exit') {
      this.hide();
    }
  },

  /**
   * Cancels the animation and either fully shows or fully hides tooltip
   */
  cancelAnimation: function () {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.add('cancel-animation');
  },

  /**
   * Shows the tooltip programatically
   * @return {void}
   */
  show: function () {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing) return;

    if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).textContent.trim() === '') {
      // Check if effective children are also empty
      var allChildrenEmpty = true;
      var effectiveChildren = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getEffectiveChildNodes();

      for (var i = 0; i < effectiveChildren.length; i++) {
        if (effectiveChildren[i].textContent.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }

      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.$.tooltip.classList.remove('hidden');
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.updatePosition();
    this._animationPlaying = true;
    this.$.tooltip.classList.add(this._getAnimationType('entry'));
  },

  /**
   * Hides the tooltip programatically
   * @return {void}
   */
  hide: function () {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    } // If the entry animation is still playing, don't try to play the exit
    // animation since this will reset the opacity to 1. Just end the animation.


    if (this._animationPlaying) {
      this._showing = false;

      this._cancelAnimation();

      return;
    } else {
      // Play Exit Animation
      this._onAnimationFinish();
    }

    this._showing = false;
    this._animationPlaying = true;
  },

  /**
   * @return {void}
   */
  updatePosition: function () {
    if (!this._target || !this.offsetParent) return;
    var offset = this.offset; // If a marginTop has been provided by the user (pre 1.0.3), use it.

    if (this.marginTop != 14 && this.offset == 14) offset = this.marginTop;
    var parentRect = this.offsetParent.getBoundingClientRect();

    var targetRect = this._target.getBoundingClientRect();

    var thisRect = this.getBoundingClientRect();
    var horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    var verticalCenterOffset = (targetRect.height - thisRect.height) / 2;
    var targetLeft = targetRect.left - parentRect.left;
    var targetTop = targetRect.top - parentRect.top;
    var tooltipLeft, tooltipTop;

    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height - offset;
        break;

      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height + offset;
        break;

      case 'left':
        tooltipLeft = targetLeft - thisRect.width - offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;

      case 'right':
        tooltipLeft = targetLeft + targetRect.width + offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    } // TODO(noms): This should use IronFitBehavior if possible.


    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      } // Clip the top/bottom side.


      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = parentRect.height - targetTop + offset + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  },
  _addListeners: function () {
    if (this._target) {
      this.listen(this._target, 'mouseenter', 'show');
      this.listen(this._target, 'focus', 'show');
      this.listen(this._target, 'mouseleave', 'hide');
      this.listen(this._target, 'blur', 'hide');
      this.listen(this._target, 'tap', 'hide');
    }

    this.listen(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.listen(this, 'mouseenter', 'hide');
  },
  _findTarget: function () {
    if (!this.manualMode) this._removeListeners();
    this._target = this.target;
    if (!this.manualMode) this._addListeners();
  },
  _delayChange: function (newValue) {
    // Only Update delay if different value set
    if (newValue !== 500) {
      this.updateStyles({
        '--paper-tooltip-delay-in': newValue + 'ms'
      });
    }
  },
  _manualModeChanged: function () {
    if (this.manualMode) this._removeListeners();else this._addListeners();
  },
  _cancelAnimation: function () {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.remove(this._getAnimationType('entry'));
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.add('hidden');
  },
  _onAnimationFinish: function () {
    if (this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('entry'));
      this.$.tooltip.classList.remove('cancel-animation');
      this.$.tooltip.classList.add(this._getAnimationType('exit'));
    }
  },
  _onAnimationEnd: function () {
    // If no longer showing add class hidden to completely hide tooltip
    this._animationPlaying = false;

    if (!this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('exit'));
      this.$.tooltip.classList.add('hidden');
    }
  },
  _getAnimationType: function (type) {
    // These properties have priority over animationConfig values
    if (type === 'entry' && this.animationEntry !== '') {
      return this.animationEntry;
    }

    if (type === 'exit' && this.animationExit !== '') {
      return this.animationExit;
    } // If no results then return the legacy value from animationConfig


    if (this.animationConfig[type] && typeof this.animationConfig[type][0].name === 'string') {
      // Checking Timing and Update if necessary - Legacy for animationConfig
      if (this.animationConfig[type][0].timing && this.animationConfig[type][0].timing.delay && this.animationConfig[type][0].timing.delay !== 0) {
        var timingDelay = this.animationConfig[type][0].timing.delay; // Has Timing Change - Update CSS

        if (type === 'entry') {
          this.updateStyles({
            '--paper-tooltip-delay-in': timingDelay + 'ms'
          });
        } else if (type === 'exit') {
          this.updateStyles({
            '--paper-tooltip-delay-out': timingDelay + 'ms'
          });
        }
      }

      return this.animationConfig[type][0].name;
    }
  },
  _removeListeners: function () {
    if (this._target) {
      this.unlisten(this._target, 'mouseenter', 'show');
      this.unlisten(this._target, 'focus', 'show');
      this.unlisten(this._target, 'mouseleave', 'hide');
      this.unlisten(this._target, 'blur', 'hide');
      this.unlisten(this._target, 'tap', 'hide');
    }

    this.unlisten(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.unlisten(this, 'mouseenter', 'hide');
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltUb29sdGlwc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Rvb2x0aXBzLmh0bWwpXG5gPHBhcGVyLXRvb2x0aXA+YCBpcyBhIGxhYmVsIHRoYXQgYXBwZWFycyBvbiBob3ZlciBhbmQgZm9jdXMgd2hlbiB0aGUgdXNlclxuaG92ZXJzIG92ZXIgYW4gZWxlbWVudCB3aXRoIHRoZSBjdXJzb3Igb3Igd2l0aCB0aGUga2V5Ym9hcmQuIEl0IHdpbGwgYmUgY2VudGVyZWRcbnRvIGFuIGFuY2hvciBlbGVtZW50IHNwZWNpZmllZCBpbiB0aGUgYGZvcmAgYXR0cmlidXRlLCBvciwgaWYgdGhhdCBkb2Vzbid0XG5leGlzdCwgY2VudGVyZWQgdG8gdGhlIHBhcmVudCBub2RlIGNvbnRhaW5pbmcgaXQuXG5FeGFtcGxlOlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxuICAgICAgPGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj5cbiAgICAgIDxwYXBlci10b29sdGlwPlRvb2x0aXAgdGV4dDwvcGFwZXItdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBpZD1cImJ0blwiPkNsaWNrIG1lITwvYnV0dG9uPlxuICAgICAgPHBhcGVyLXRvb2x0aXAgZm9yPVwiYnRuXCI+VG9vbHRpcCB0ZXh0PC9wYXBlci10b29sdGlwPlxuICAgIDwvZGl2PlxuVGhlIHRvb2x0aXAgY2FuIGJlIHBvc2l0aW9uZWQgb24gdGhlIHRvcHxib3R0b218bGVmdHxyaWdodCBvZiB0aGUgYW5jaG9yIHVzaW5nXG50aGUgYHBvc2l0aW9uYCBhdHRyaWJ1dGUuIFRoZSBkZWZhdWx0IHBvc2l0aW9uIGlzIGJvdHRvbS5cbiAgICA8cGFwZXItdG9vbHRpcCBmb3I9XCJidG5cIiBwb3NpdGlvbj1cImxlZnRcIj5Ub29sdGlwIHRleHQ8L3BhcGVyLXRvb2x0aXA+XG4gICAgPHBhcGVyLXRvb2x0aXAgZm9yPVwiYnRuXCIgcG9zaXRpb249XCJ0b3BcIj5Ub29sdGlwIHRleHQ8L3BhcGVyLXRvb2x0aXA+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXRvb2x0aXAtYmFja2dyb3VuZGAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdG9vbHRpcCB8IGAjNjE2MTYxYFxuYC0tcGFwZXItdG9vbHRpcC1vcGFjaXR5YCB8IFRoZSBvcGFjaXR5IG9mIHRoZSB0b29sdGlwIHwgYDAuOWBcbmAtLXBhcGVyLXRvb2x0aXAtdGV4dC1jb2xvcmAgfCBUaGUgdGV4dCBjb2xvciBvZiB0aGUgdG9vbHRpcCB8IGB3aGl0ZWBcbmAtLXBhcGVyLXRvb2x0aXBgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdG9vbHRpcCB8IGB7fWBcbmAtLXBhcGVyLXRvb2x0aXAtZGVsYXktaW5gIHwgRGVsYXkgYmVmb3JlIHRvb2x0aXAgc3RhcnRzIHRvIGZhZGUgaW4gfCBgNTAwYFxuYC0tcGFwZXItdG9vbHRpcC1kZWxheS1vdXRgIHwgRGVsYXkgYmVmb3JlIHRvb2x0aXAgc3RhcnRzIHRvIGZhZGUgb3V0IHwgYDBgXG5gLS1wYXBlci10b29sdGlwLWR1cmF0aW9uLWluYCB8IFRpbWluZyBmb3IgYW5pbWF0aW9uIHdoZW4gc2hvd2luZyB0b29sdGlwIHwgYDUwMGBcbmAtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24tb3V0YCB8IFRpbWluZyBmb3IgYW5pbWF0aW9uIHdoZW4gaGlkaW5nIHRvb2x0aXAgfCBgMGBcbmAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRvb2x0aXAgYW5pbWF0aW9uIHwgYHt9YFxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci10b29sdGlwXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgei1pbmRleDogMTAwMjtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICAjdG9vbHRpcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b29sdGlwLWJhY2tncm91bmQsICM2MTYxNjEpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItdG9vbHRpcC10ZXh0LWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10b29sdGlwO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGtleUZyYW1lU2NhbGVVcCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMga2V5RnJhbWVTY2FsZURvd24ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGtleUZyYW1lRmFkZUluT3BhY2l0eSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLXBhcGVyLXRvb2x0aXAtb3BhY2l0eSwgMC45KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGtleUZyYW1lRmFkZU91dE9wYWNpdHkge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tcGFwZXItdG9vbHRpcC1vcGFjaXR5LCAwLjkpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBrZXlGcmFtZVNsaWRlRG93bkluIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBrZXlGcmFtZVNsaWRlRG93bk91dCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tcGFwZXItdG9vbHRpcC1vcGFjaXR5LCAwLjkpO1xuICAgICAgICB9XG4gICAgICAgIDEwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mYWRlLWluLWFuaW1hdGlvbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tcGFwZXItdG9vbHRpcC1kZWxheS1pbiwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5RnJhbWVGYWRlSW5PcGFjaXR5O1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24taW4sIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICAuZmFkZS1vdXQtYW5pbWF0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tcGFwZXItdG9vbHRpcC1vcGFjaXR5LCAwLjkpO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IHZhcigtLXBhcGVyLXRvb2x0aXAtZGVsYXktb3V0LCAwbXMpO1xuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5RnJhbWVGYWRlT3V0T3BhY2l0eTtcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci10b29sdGlwLWR1cmF0aW9uLW91dCwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdG9vbHRpcC1hbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIC5zY2FsZS11cC1hbmltYXRpb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tcGFwZXItdG9vbHRpcC1kZWxheS1pbiwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5RnJhbWVTY2FsZVVwO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24taW4sIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICAuc2NhbGUtZG93bi1hbmltYXRpb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tcGFwZXItdG9vbHRpcC1kZWxheS1vdXQsIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleUZyYW1lU2NhbGVEb3duO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24tb3V0LCA1MDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10b29sdGlwLWFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgLnNsaWRlLWRvd24tYW5pbWF0aW9uIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IHZhcigtLXBhcGVyLXRvb2x0aXAtZGVsYXktb3V0LCA1MDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXlGcmFtZVNsaWRlRG93bkluO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSk7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItdG9vbHRpcC1kdXJhdGlvbi1vdXQsIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICAuc2xpZGUtZG93bi1hbmltYXRpb24tb3V0IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tcGFwZXItdG9vbHRpcC1kZWxheS1vdXQsIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleUZyYW1lU2xpZGVEb3duT3V0O1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24tb3V0LCA1MDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10b29sdGlwLWFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgLmNhbmNlbC1hbmltYXRpb24ge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0zMHMgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLyogVGhhbmtzIElFIDEwLiAqL1xuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwidG9vbHRpcFwiIGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItdG9vbHRpcCcsXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ3Rvb2x0aXAnLCB0YWJpbmRleDogLTF9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB0aGUgdG9vbHRpcCBpcyBhbmNob3JlZCB0by4gVGhpcyBlbGVtZW50XG4gICAgICogbXVzdCBiZSBhIHNpYmxpbmcgb2YgdGhlIHRvb2x0aXAuIElmIHRoaXMgcHJvcGVydHkgaXMgbm90IHNldCxcbiAgICAgKiB0aGVuIHRoZSB0b29sdGlwIHdpbGwgYmUgY2VudGVyZWQgdG8gdGhlIHBhcmVudCBub2RlIGNvbnRhaW5pbmcgaXQuXG4gICAgICovXG4gICAgZm9yOiB7dHlwZTogU3RyaW5nLCBvYnNlcnZlcjogJ19maW5kVGFyZ2V0J30sXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBtYW51YWxseSBjb250cm9sIHdoZW4gdGhlIHRvb2x0aXBcbiAgICAgKiBpcyBzaG93biBvciBoaWRkZW4uXG4gICAgICovXG4gICAgbWFudWFsTW9kZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfbWFudWFsTW9kZUNoYW5nZWQnfSxcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIHRvb2x0aXAgdG8gdGhlIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCBvZiBpdHMgY29udGVudC5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdib3R0b20nfSxcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBubyBwYXJ0cyBvZiB0aGUgdG9vbHRpcCB3aWxsIGV2ZXIgYmUgc2hvd24gb2Zmc2NyZWVuLlxuICAgICAqL1xuICAgIGZpdFRvVmlzaWJsZUJvdW5kczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG4gICAgLyoqXG4gICAgICogVGhlIHNwYWNpbmcgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSB0b29sdGlwIGFuZCB0aGUgZWxlbWVudCBpdCBpc1xuICAgICAqIGFuY2hvcmVkIHRvLlxuICAgICAqL1xuICAgIG9mZnNldDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDE0fSxcbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIGJ1dCBsZWZ0IG92ZXIgc28gdGhhdCBpdCBkb2Vzbid0XG4gICAgICogYnJlYWsgZXhpdGluZyBjb2RlLiBQbGVhc2UgdXNlIGBvZmZzZXRgIGluc3RlYWQuIElmIGJvdGggYG9mZnNldGAgYW5kXG4gICAgICogYG1hcmdpblRvcGAgYXJlIHByb3ZpZGVkLCBgbWFyZ2luVG9wYCB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjAuM1xuICAgICAqL1xuICAgIG1hcmdpblRvcDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDE0fSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVsYXkgdGhhdCB3aWxsIGJlIGFwcGxpZWQgYmVmb3JlIHRoZSBgZW50cnlgIGFuaW1hdGlvbiBpc1xuICAgICAqIHBsYXllZCB3aGVuIHNob3dpbmcgdGhlIHRvb2x0aXAuXG4gICAgICovXG4gICAgYW5pbWF0aW9uRGVsYXk6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiA1MDAsIG9ic2VydmVyOiAnX2RlbGF5Q2hhbmdlJ30sXG4gICAgLyoqXG4gICAgICogVGhlIGFuaW1hdGlvbiB0aGF0IHdpbGwgYmUgcGxheWVkIG9uIGVudHJ5LiAgVGhpcyByZXBsYWNlcyB0aGVcbiAgICAgKiBkZXByZWNhdGVkIGFuaW1hdGlvbkNvbmZpZy4gIEVudHJpZXMgaGVyZSB3aWxsIG92ZXJyaWRlIHRoZVxuICAgICAqIGFuaW1hdGlvbkNvbmZpZyBzZXR0aW5ncy4gIFlvdSBjYW4gZW50ZXIgeW91ciBvd24gYW5pbWF0aW9uXG4gICAgICogYnkgc2V0dGluZyBpdCB0byB0aGUgY3NzIGNsYXNzIG5hbWUuXG4gICAgICovXG4gICAgYW5pbWF0aW9uRW50cnk6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG4gICAgLyoqXG4gICAgICogVGhlIGFuaW1hdGlvbiB0aGF0IHdpbGwgYmUgcGxheWVkIG9uIGV4aXQuICBUaGlzIHJlcGxhY2VzIHRoZVxuICAgICAqIGRlcHJlY2F0ZWQgYW5pbWF0aW9uQ29uZmlnLiAgRW50cmllcyBoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlXG4gICAgICogYW5pbWF0aW9uQ29uZmlnIHNldHRpbmdzLiAgWW91IGNhbiBlbnRlciB5b3VyIG93biBhbmltYXRpb25cbiAgICAgKiBieSBzZXR0aW5nIGl0IHRvIHRoZSBjc3MgY2xhc3MgbmFtZS5cbiAgICAgKi9cbiAgICBhbmltYXRpb25FeGl0OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gIFVzZSAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uIHRvIGNoYW5nZSB0aGVcbiAgICAgKiBhbmltYXRpb24uIFRoZSBlbnRyeSBhbmQgZXhpdCBhbmltYXRpb25zIHRoYXQgd2lsbCBiZSBwbGF5ZWQgd2hlbiBzaG93aW5nXG4gICAgICogYW5kIGhpZGluZyB0aGUgdG9vbHRpcC4gSWYgeW91IHdhbnQgdG8gb3ZlcnJpZGUgdGhpcywgeW91IG11c3QgZW5zdXJlXG4gICAgICogdGhhdCB5b3VyIGFuaW1hdGlvbkNvbmZpZyBoYXMgdGhlIGV4YWN0IGZvcm1hdCBiZWxvdy5cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBUaGUgZW50cnkgYW5kIGV4aXQgYW5pbWF0aW9ucyB0aGF0IHdpbGwgYmUgcGxheWVkIHdoZW4gc2hvd2luZyBhbmRcbiAgICAgKiBoaWRpbmcgdGhlIHRvb2x0aXAuIElmIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoaXMsIHlvdSBtdXN0IGVuc3VyZVxuICAgICAqIHRoYXQgeW91ciBhbmltYXRpb25Db25maWcgaGFzIHRoZSBleGFjdCBmb3JtYXQgYmVsb3cuXG4gICAgICovXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgJ2VudHJ5JzpcbiAgICAgICAgICAgICAgW3tuYW1lOiAnZmFkZS1pbi1hbmltYXRpb24nLCBub2RlOiB0aGlzLCB0aW1pbmc6IHtkZWxheTogMH19XSxcbiAgICAgICAgICAgICAgJ2V4aXQnOiBbe25hbWU6ICdmYWRlLW91dC1hbmltYXRpb24nLCBub2RlOiB0aGlzfV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgX3Nob3dpbmc6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ3dlYmtpdEFuaW1hdGlvbkVuZCc6ICdfb25BbmltYXRpb25FbmQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgdG9vbHRpcCBpcyBhbmNob3JlZCB0by4gSXQgaXNcbiAgICogZWl0aGVyIHRoZSBlbGVtZW50IGdpdmVuIGJ5IHRoZSBgZm9yYCBhdHRyaWJ1dGUsIG9yIHRoZSBpbW1lZGlhdGUgcGFyZW50XG4gICAqIG9mIHRoZSB0b29sdGlwLlxuICAgKlxuICAgKiBAdHlwZSB7Tm9kZX1cbiAgICovXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb20odGhpcykucGFyZW50Tm9kZTtcbiAgICAvLyBJZiB0aGUgcGFyZW50Tm9kZSBpcyBhIGRvY3VtZW50IGZyYWdtZW50LCB0aGVuIHdlIG5lZWQgdG8gdXNlIHRoZSBob3N0LlxuICAgIHZhciBvd25lclJvb3QgPSBkb20odGhpcykuZ2V0T3duZXJSb290KCk7XG4gICAgdmFyIHRhcmdldDtcbiAgICBpZiAodGhpcy5mb3IpIHtcbiAgICAgIHRhcmdldCA9IGRvbShvd25lclJvb3QpLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5mb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQgPSBwYXJlbnROb2RlLm5vZGVUeXBlID09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA/XG4gICAgICAgICAgb3duZXJSb290Lmhvc3QgOlxuICAgICAgICAgIHBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZmluZFRhcmdldCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5tYW51YWxNb2RlKVxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIE5lb24tQW5pbWF0aW9uIHBsYXlBbmltYXRpb24gLSBqdXN0IGNhbGxzIHNob3cgYW5kIGhpZGUuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaG93IGFuZCBoaWRlIGluc3RlYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEVpdGhlciBgZW50cnlgIG9yIGBleGl0YFxuICAgKi9cbiAgcGxheUFuaW1hdGlvbjogZnVuY3Rpb24odHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnZW50cnknKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdleGl0Jykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBhbmltYXRpb24gYW5kIGVpdGhlciBmdWxseSBzaG93cyBvciBmdWxseSBoaWRlcyB0b29sdGlwXG4gICAqL1xuICBjYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIC8vIFNob3J0LWN1dCBhbmQgY2FuY2VsIGFsbCBhbmltYXRpb25zIGFuZCBoaWRlXG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWFuaW1hdGlvbicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgdG9vbHRpcCBwcm9ncmFtYXRpY2FsbHlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHRoZSB0b29sdGlwIGlzIGFscmVhZHkgc2hvd2luZywgdGhlcmUncyBub3RoaW5nIHRvIGRvLlxuICAgIGlmICh0aGlzLl9zaG93aW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKGRvbSh0aGlzKS50ZXh0Q29udGVudC50cmltKCkgPT09ICcnKSB7XG4gICAgICAvLyBDaGVjayBpZiBlZmZlY3RpdmUgY2hpbGRyZW4gYXJlIGFsc28gZW1wdHlcbiAgICAgIHZhciBhbGxDaGlsZHJlbkVtcHR5ID0gdHJ1ZTtcbiAgICAgIHZhciBlZmZlY3RpdmVDaGlsZHJlbiA9IGRvbSh0aGlzKS5nZXRFZmZlY3RpdmVDaGlsZE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVmZmVjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlZmZlY3RpdmVDaGlsZHJlbltpXS50ZXh0Q29udGVudC50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgYWxsQ2hpbGRyZW5FbXB0eSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYWxsQ2hpbGRyZW5FbXB0eSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd2luZyA9IHRydWU7XG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgnY2FuY2VsLWFuaW1hdGlvbicpO1xuICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZ2V0QW5pbWF0aW9uVHlwZSgnZXhpdCcpKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uUGxheWluZyA9IHRydWU7XG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCh0aGlzLl9nZXRBbmltYXRpb25UeXBlKCdlbnRyeScpKTtcbiAgfSxcblxuICAvKipcbiAgICogSGlkZXMgdGhlIHRvb2x0aXAgcHJvZ3JhbWF0aWNhbGx5XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB0aGUgdG9vbHRpcCBpcyBhbHJlYWR5IGhpZGRlbiwgdGhlcmUncyBub3RoaW5nIHRvIGRvLlxuICAgIGlmICghdGhpcy5fc2hvd2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBlbnRyeSBhbmltYXRpb24gaXMgc3RpbGwgcGxheWluZywgZG9uJ3QgdHJ5IHRvIHBsYXkgdGhlIGV4aXRcbiAgICAvLyBhbmltYXRpb24gc2luY2UgdGhpcyB3aWxsIHJlc2V0IHRoZSBvcGFjaXR5IHRvIDEuIEp1c3QgZW5kIHRoZSBhbmltYXRpb24uXG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvblBsYXlpbmcpIHtcbiAgICAgIHRoaXMuX3Nob3dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhbmNlbEFuaW1hdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQbGF5IEV4aXQgQW5pbWF0aW9uXG4gICAgICB0aGlzLl9vbkFuaW1hdGlvbkZpbmlzaCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9hbmltYXRpb25QbGF5aW5nID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVwZGF0ZVBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX3RhcmdldCB8fCAhdGhpcy5vZmZzZXRQYXJlbnQpXG4gICAgICByZXR1cm47XG4gICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIC8vIElmIGEgbWFyZ2luVG9wIGhhcyBiZWVuIHByb3ZpZGVkIGJ5IHRoZSB1c2VyIChwcmUgMS4wLjMpLCB1c2UgaXQuXG4gICAgaWYgKHRoaXMubWFyZ2luVG9wICE9IDE0ICYmIHRoaXMub2Zmc2V0ID09IDE0KVxuICAgICAgb2Zmc2V0ID0gdGhpcy5tYXJnaW5Ub3A7XG4gICAgdmFyIHBhcmVudFJlY3QgPSB0aGlzLm9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgdGFyZ2V0UmVjdCA9IHRoaXMuX3RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgdGhpc1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBob3Jpem9udGFsQ2VudGVyT2Zmc2V0ID0gKHRhcmdldFJlY3Qud2lkdGggLSB0aGlzUmVjdC53aWR0aCkgLyAyO1xuICAgIHZhciB2ZXJ0aWNhbENlbnRlck9mZnNldCA9ICh0YXJnZXRSZWN0LmhlaWdodCAtIHRoaXNSZWN0LmhlaWdodCkgLyAyO1xuICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0O1xuICAgIHZhciB0YXJnZXRUb3AgPSB0YXJnZXRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wO1xuICAgIHZhciB0b29sdGlwTGVmdCwgdG9vbHRpcFRvcDtcbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRvb2x0aXBMZWZ0ID0gdGFyZ2V0TGVmdCArIGhvcml6b250YWxDZW50ZXJPZmZzZXQ7XG4gICAgICAgIHRvb2x0aXBUb3AgPSB0YXJnZXRUb3AgLSB0aGlzUmVjdC5oZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdG9vbHRpcExlZnQgPSB0YXJnZXRMZWZ0ICsgaG9yaXpvbnRhbENlbnRlck9mZnNldDtcbiAgICAgICAgdG9vbHRpcFRvcCA9IHRhcmdldFRvcCArIHRhcmdldFJlY3QuaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0b29sdGlwTGVmdCA9IHRhcmdldExlZnQgLSB0aGlzUmVjdC53aWR0aCAtIG9mZnNldDtcbiAgICAgICAgdG9vbHRpcFRvcCA9IHRhcmdldFRvcCArIHZlcnRpY2FsQ2VudGVyT2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdG9vbHRpcExlZnQgPSB0YXJnZXRMZWZ0ICsgdGFyZ2V0UmVjdC53aWR0aCArIG9mZnNldDtcbiAgICAgICAgdG9vbHRpcFRvcCA9IHRhcmdldFRvcCArIHZlcnRpY2FsQ2VudGVyT2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gVE9ETyhub21zKTogVGhpcyBzaG91bGQgdXNlIElyb25GaXRCZWhhdmlvciBpZiBwb3NzaWJsZS5cbiAgICBpZiAodGhpcy5maXRUb1Zpc2libGVCb3VuZHMpIHtcbiAgICAgIC8vIENsaXAgdGhlIGxlZnQvcmlnaHQgc2lkZVxuICAgICAgaWYgKHBhcmVudFJlY3QubGVmdCArIHRvb2x0aXBMZWZ0ICsgdGhpc1JlY3Qud2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IE1hdGgubWF4KDAsIHRvb2x0aXBMZWZ0KSArICdweCc7XG4gICAgICAgIHRoaXMuc3R5bGUucmlnaHQgPSAnYXV0byc7XG4gICAgICB9XG4gICAgICAvLyBDbGlwIHRoZSB0b3AvYm90dG9tIHNpZGUuXG4gICAgICBpZiAocGFyZW50UmVjdC50b3AgKyB0b29sdGlwVG9wICsgdGhpc1JlY3QuaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gKHBhcmVudFJlY3QuaGVpZ2h0IC0gdGFyZ2V0VG9wICsgb2Zmc2V0KSArICdweCc7XG4gICAgICAgIHRoaXMuc3R5bGUudG9wID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3AgPSBNYXRoLm1heCgtcGFyZW50UmVjdC50b3AsIHRvb2x0aXBUb3ApICsgJ3B4JztcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUubGVmdCA9IHRvb2x0aXBMZWZ0ICsgJ3B4JztcbiAgICAgIHRoaXMuc3R5bGUudG9wID0gdG9vbHRpcFRvcCArICdweCc7XG4gICAgfVxuICB9LFxuXG4gIF9hZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl90YXJnZXQpIHtcbiAgICAgIHRoaXMubGlzdGVuKHRoaXMuX3RhcmdldCwgJ21vdXNlZW50ZXInLCAnc2hvdycpO1xuICAgICAgdGhpcy5saXN0ZW4odGhpcy5fdGFyZ2V0LCAnZm9jdXMnLCAnc2hvdycpO1xuICAgICAgdGhpcy5saXN0ZW4odGhpcy5fdGFyZ2V0LCAnbW91c2VsZWF2ZScsICdoaWRlJyk7XG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLl90YXJnZXQsICdibHVyJywgJ2hpZGUnKTtcbiAgICAgIHRoaXMubGlzdGVuKHRoaXMuX3RhcmdldCwgJ3RhcCcsICdoaWRlJyk7XG4gICAgfVxuICAgIHRoaXMubGlzdGVuKHRoaXMuJC50b29sdGlwLCAnYW5pbWF0aW9uZW5kJywgJ19vbkFuaW1hdGlvbkVuZCcpO1xuICAgIHRoaXMubGlzdGVuKHRoaXMsICdtb3VzZWVudGVyJywgJ2hpZGUnKTtcbiAgfSxcblxuICBfZmluZFRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm1hbnVhbE1vZGUpXG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl90YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICBpZiAoIXRoaXMubWFudWFsTW9kZSlcbiAgICAgIHRoaXMuX2FkZExpc3RlbmVycygpO1xuICB9LFxuXG4gIF9kZWxheUNoYW5nZTogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAvLyBPbmx5IFVwZGF0ZSBkZWxheSBpZiBkaWZmZXJlbnQgdmFsdWUgc2V0XG4gICAgaWYgKG5ld1ZhbHVlICE9PSA1MDApIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHsnLS1wYXBlci10b29sdGlwLWRlbGF5LWluJzogbmV3VmFsdWUgKyAnbXMnfSk7XG4gICAgfVxuICB9LFxuXG4gIF9tYW51YWxNb2RlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubWFudWFsTW9kZSlcbiAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX2FkZExpc3RlbmVycygpO1xuICB9LFxuXG4gIF9jYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIC8vIFNob3J0LWN1dCBhbmQgY2FuY2VsIGFsbCBhbmltYXRpb25zIGFuZCBoaWRlXG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9nZXRBbmltYXRpb25UeXBlKCdlbnRyeScpKTtcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2dldEFuaW1hdGlvblR5cGUoJ2V4aXQnKSk7XG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgnY2FuY2VsLWFuaW1hdGlvbicpO1xuICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9LFxuXG4gIF9vbkFuaW1hdGlvbkZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3Nob3dpbmcpIHtcbiAgICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZ2V0QW5pbWF0aW9uVHlwZSgnZW50cnknKSk7XG4gICAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdjYW5jZWwtYW5pbWF0aW9uJyk7XG4gICAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QuYWRkKHRoaXMuX2dldEFuaW1hdGlvblR5cGUoJ2V4aXQnKSk7XG4gICAgfVxuICB9LFxuXG4gIF9vbkFuaW1hdGlvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgbm8gbG9uZ2VyIHNob3dpbmcgYWRkIGNsYXNzIGhpZGRlbiB0byBjb21wbGV0ZWx5IGhpZGUgdG9vbHRpcFxuICAgIHRoaXMuX2FuaW1hdGlvblBsYXlpbmcgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX3Nob3dpbmcpIHtcbiAgICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZ2V0QW5pbWF0aW9uVHlwZSgnZXhpdCcpKTtcbiAgICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0QW5pbWF0aW9uVHlwZTogZnVuY3Rpb24odHlwZSkge1xuICAgIC8vIFRoZXNlIHByb3BlcnRpZXMgaGF2ZSBwcmlvcml0eSBvdmVyIGFuaW1hdGlvbkNvbmZpZyB2YWx1ZXNcbiAgICBpZiAoKHR5cGUgPT09ICdlbnRyeScpICYmICh0aGlzLmFuaW1hdGlvbkVudHJ5ICE9PSAnJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkVudHJ5O1xuICAgIH1cbiAgICBpZiAoKHR5cGUgPT09ICdleGl0JykgJiYgKHRoaXMuYW5pbWF0aW9uRXhpdCAhPT0gJycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25FeGl0O1xuICAgIH1cbiAgICAvLyBJZiBubyByZXN1bHRzIHRoZW4gcmV0dXJuIHRoZSBsZWdhY3kgdmFsdWUgZnJvbSBhbmltYXRpb25Db25maWdcbiAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWdbdHlwZV0gJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdWzBdLm5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBDaGVja2luZyBUaW1pbmcgYW5kIFVwZGF0ZSBpZiBuZWNlc3NhcnkgLSBMZWdhY3kgZm9yIGFuaW1hdGlvbkNvbmZpZ1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdWzBdLnRpbWluZyAmJlxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdWzBdLnRpbWluZy5kZWxheSAmJlxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdWzBdLnRpbWluZy5kZWxheSAhPT0gMCkge1xuICAgICAgICB2YXIgdGltaW5nRGVsYXkgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXVswXS50aW1pbmcuZGVsYXk7XG4gICAgICAgIC8vIEhhcyBUaW1pbmcgQ2hhbmdlIC0gVXBkYXRlIENTU1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2VudHJ5Jykge1xuICAgICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHsnLS1wYXBlci10b29sdGlwLWRlbGF5LWluJzogdGltaW5nRGVsYXkgKyAnbXMnfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2V4aXQnKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoeyctLXBhcGVyLXRvb2x0aXAtZGVsYXktb3V0JzogdGltaW5nRGVsYXkgKyAnbXMnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXVswXS5uYW1lO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fdGFyZ2V0KSB7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMuX3RhcmdldCwgJ21vdXNlZW50ZXInLCAnc2hvdycpO1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLl90YXJnZXQsICdmb2N1cycsICdzaG93Jyk7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMuX3RhcmdldCwgJ21vdXNlbGVhdmUnLCAnaGlkZScpO1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLl90YXJnZXQsICdibHVyJywgJ2hpZGUnKTtcbiAgICAgIHRoaXMudW5saXN0ZW4odGhpcy5fdGFyZ2V0LCAndGFwJywgJ2hpZGUnKTtcbiAgICB9XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLiQudG9vbHRpcCwgJ2FuaW1hdGlvbmVuZCcsICdfb25BbmltYXRpb25FbmQnKTtcbiAgICB0aGlzLnVubGlzdGVuKHRoaXMsICdtb3VzZWVudGVyJywgJ2hpZGUnKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBa0xBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBeEVBO0FBMkVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFwaEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=