(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-devcon~panel-history"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDate = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleDateStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "longDate");

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: formatTime, formatTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeWithSeconds", function() { return formatTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
const formatTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumTime");

/***/ }),

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: computeStateDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDisplay", function() { return computeStateDisplay; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");




const computeStateDisplay = (localize, stateObj, language) => {
  let display;
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);

  if (domain === "binary_sensor") {
    // Try device class translation, then default binary sensor translation
    if (stateObj.attributes.device_class) {
      display = localize(`state.${domain}.${stateObj.attributes.device_class}.${stateObj.state}`);
    }

    if (!display) {
      display = localize(`state.${domain}.default.${stateObj.state}`);
    }
  } else if (stateObj.attributes.unit_of_measurement && !["unknown", "unavailable"].includes(stateObj.state)) {
    display = stateObj.state + " " + stateObj.attributes.unit_of_measurement;
  } else if (domain === "input_datetime") {
    let date;

    if (!stateObj.attributes.has_time) {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
      display = Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, language);
    } else if (!stateObj.attributes.has_date) {
      const now = new Date();
      date = new Date( // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
      // don't use artificial 1970 year.
      now.getFullYear(), now.getMonth(), now.getDay(), stateObj.attributes.hour, stateObj.attributes.minute);
      display = Object(_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["formatTime"])(date, language);
    } else {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day, stateObj.attributes.hour, stateObj.attributes.minute);
      display = Object(_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__["formatDateTime"])(date, language);
    }
  } else if (domain === "zwave") {
    if (["initializing", "dead"].includes(stateObj.state)) {
      display = localize(`state.zwave.query_stage.${stateObj.state}`, "query_stage", stateObj.attributes.query_stage);
    } else {
      display = localize(`state.zwave.default.${stateObj.state}`);
    }
  } else {
    display = localize(`state.${domain}.${stateObj.state}`);
  } // Fall back to default, component backend translation, or raw state if nothing else matches.


  if (!display) {
    display = localize(`state.default.${stateObj.state}`) || localize(`component.${domain}.state.${stateObj.state}`) || stateObj.state;
  }

  return display;
};

/***/ }),

/***/ "./src/components/entity/op-chart-base.js":
/*!************************************************!*\
  !*** ./src/components/entity/op-chart-base.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");







 // eslint-disable-next-line no-unused-vars

/* global Chart moment Color */

let scriptsLoaded = null;

class OpChartBase extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  get chart() {
    return this._chart;
  }

  static get properties() {
    return {
      data: Object,
      identifier: String,
      rendered: {
        type: Boolean,
        notify: true,
        value: false,
        readOnly: true
      },
      metas: {
        type: Array,
        value: () => []
      },
      tooltip: {
        type: Object,
        value: () => ({
          opacity: "0",
          left: "0",
          top: "0",
          xPadding: "5",
          yPadding: "3"
        })
      },
      unit: Object,
      rtl: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ["onPropsChange(data)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.onPropsChange();

    this._resizeListener = () => {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(10), () => {
        if (this._isAttached) {
          this.resizeChart();
        }
      });
    };

    if (typeof ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver(entries => {
        entries.forEach(() => {
          this._resizeListener();
        });
      });
      this.resizeObserver.observe(this.$.chartTarget);
    } else {
      this.addEventListener("iron-resize", this._resizeListener);
    }

    if (scriptsLoaded === null) {
      scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/op-chart-scripts.js */ "./src/resources/op-chart-scripts.js"));
    }

    scriptsLoaded.then(ChartModule => {
      this.ChartClass = ChartModule.default;
      this.onPropsChange();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._isAttached = false;

    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.$.chartTarget);
    }

    this.removeEventListener("iron-resize", this._resizeListener);

    if (this._resizeTimer !== undefined) {
      clearInterval(this._resizeTimer);
      this._resizeTimer = undefined;
    }
  }

  onPropsChange() {
    if (!this._isAttached || !this.ChartClass || !this.data) {
      return;
    }

    this.drawChart();
  }

  _customTooltips(tooltip) {
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      this.set(["tooltip", "opacity"], 0);
      return;
    } // Set caret Position


    if (tooltip.yAlign) {
      this.set(["tooltip", "yAlign"], tooltip.yAlign);
    } else {
      this.set(["tooltip", "yAlign"], "no-transform");
    }

    const title = tooltip.title ? tooltip.title[0] || "" : "";
    this.set(["tooltip", "title"], title);
    const bodyLines = tooltip.body.map(n => n.lines); // Set Text

    if (tooltip.body) {
      this.set(["tooltip", "lines"], bodyLines.map((body, i) => {
        const colors = tooltip.labelColors[i];
        return {
          color: colors.borderColor,
          bgColor: colors.backgroundColor,
          text: body.join("\n")
        };
      }));
    }

    const parentWidth = this.$.chartTarget.clientWidth;
    let positionX = tooltip.caretX;
    const positionY = this._chart.canvas.offsetTop + tooltip.caretY;

    if (tooltip.caretX + 100 > parentWidth) {
      positionX = parentWidth - 100;
    } else if (tooltip.caretX < 100) {
      positionX = 100;
    }

    positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

    this.tooltip = Object.assign({}, this.tooltip, {
      opacity: 1,
      left: `${positionX}px`,
      top: `${positionY}px`
    });
  }

  _legendClick(event) {
    event = event || window.event;
    event.stopPropagation();
    let target = event.target || event.srcElement;

    while (target.nodeName !== "LI") {
      // user clicked child, find parent LI
      target = target.parentElement;
    }

    const index = event.model.itemsIndex;

    const meta = this._chart.getDatasetMeta(index);

    meta.hidden = meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
    this.set(["metas", index, "hidden"], this._chart.isDatasetVisible(index) ? null : "hidden");

    this._chart.update();
  }

  _drawLegend() {
    const chart = this._chart; // New data for old graph. Keep metadata.

    const preserveVisibility = this._oldIdentifier && this.identifier === this._oldIdentifier;
    this._oldIdentifier = this.identifier;
    this.set("metas", this._chart.data.datasets.map((x, i) => ({
      label: x.label,
      color: x.color,
      bgColor: x.backgroundColor,
      hidden: preserveVisibility && i < this.metas.length ? this.metas[i].hidden : !chart.isDatasetVisible(i)
    })));
    let updateNeeded = false;

    if (preserveVisibility) {
      for (let i = 0; i < this.metas.length; i++) {
        const meta = chart.getDatasetMeta(i);
        if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
        meta.hidden = this.metas[i].hidden ? true : null;
      }
    }

    if (updateNeeded) {
      chart.update();
    }

    this.unit = this.data.unit;
  }

  _formatTickValue(value, index, values) {
    if (values.length === 0) {
      return value;
    }

    const date = new Date(values[index].value);
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["formatTime"])(date);
  }

  drawChart() {
    const data = this.data.data;
    const ctx = this.$.chartCanvas;

    if ((!data.datasets || !data.datasets.length) && !this._chart) {
      return;
    }

    if (this.data.type !== "timeline" && data.datasets.length > 0) {
      const cnt = data.datasets.length;
      const colors = this.constructor.getColorList(cnt);

      for (let loopI = 0; loopI < cnt; loopI++) {
        data.datasets[loopI].borderColor = colors[loopI].rgbString();
        data.datasets[loopI].backgroundColor = colors[loopI].alpha(0.6).rgbaString();
      }
    }

    if (this._chart) {
      this._customTooltips({
        opacity: 0
      });

      this._chart.data = data;

      this._chart.update({
        duration: 0
      });

      if (this.isTimeline) {
        this._chart.options.scales.yAxes[0].gridLines.display = data.length > 1;
      } else if (this.data.legend === true) {
        this._drawLegend();
      }

      this.resizeChart();
    } else {
      if (!data.datasets) {
        return;
      }

      this._customTooltips({
        opacity: 0
      });

      const plugins = [{
        afterRender: () => this._setRendered(true)
      }];
      let options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        hover: {
          animationDuration: 0
        },
        responsiveAnimationDuration: 0,
        tooltips: {
          enabled: false,
          custom: this._customTooltips.bind(this)
        },
        legend: {
          display: false
        },
        line: {
          spanGaps: true
        },
        elements: {
          font: "12px 'Roboto', 'sans-serif'"
        },
        ticks: {
          fontFamily: "'Roboto', 'sans-serif'"
        }
      };
      options = Chart.helpers.merge(options, this.data.options);
      options.scales.xAxes[0].ticks.callback = this._formatTickValue;

      if (this.data.type === "timeline") {
        this.set("isTimeline", true);

        if (this.data.colors !== undefined) {
          this._colorFunc = this.constructor.getColorGenerator(this.data.colors.staticColors, this.data.colors.staticColorIndex);
        }

        if (this._colorFunc !== undefined) {
          options.elements.colorFunction = this._colorFunc;
        }

        if (data.datasets.length === 1) {
          if (options.scales.yAxes[0].ticks) {
            options.scales.yAxes[0].ticks.display = false;
          } else {
            options.scales.yAxes[0].ticks = {
              display: false
            };
          }

          if (options.scales.yAxes[0].gridLines) {
            options.scales.yAxes[0].gridLines.display = false;
          } else {
            options.scales.yAxes[0].gridLines = {
              display: false
            };
          }
        }

        this.$.chartTarget.style.height = "50px";
      } else {
        this.$.chartTarget.style.height = "160px";
      }

      const chartData = {
        type: this.data.type,
        data: this.data.data,
        options: options,
        plugins: plugins
      }; // Async resize after dom update

      this._chart = new this.ChartClass(ctx, chartData);

      if (this.isTimeline !== true && this.data.legend === true) {
        this._drawLegend();
      }

      this.resizeChart();
    }
  }

  resizeChart() {
    if (!this._chart) return; // Chart not ready

    if (this._resizeTimer === undefined) {
      this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
      return;
    }

    clearInterval(this._resizeTimer);
    this._resizeTimer = undefined;

    this._resizeChart();
  }

  _resizeChart() {
    const chartTarget = this.$.chartTarget;
    const options = this.data;
    const data = options.data;

    if (data.datasets.length === 0) {
      return;
    }

    if (!this.isTimeline) {
      this._chart.resize();

      return;
    } // Recalculate chart height for Timeline chart


    const areaTop = this._chart.chartArea.top;
    const areaBot = this._chart.chartArea.bottom;
    const height1 = this._chart.canvas.clientHeight;

    if (areaBot > 0) {
      this._axisHeight = height1 - areaBot + areaTop;
    }

    if (!this._axisHeight) {
      chartTarget.style.height = "50px";

      this._chart.resize();

      this.resizeChart();
      return;
    }

    if (this._axisHeight) {
      const cnt = data.datasets.length;
      const targetHeight = 30 * cnt + this._axisHeight + "px";

      if (chartTarget.style.height !== targetHeight) {
        chartTarget.style.height = targetHeight;
      }

      this._chart.resize();
    }
  } // Get HSL distributed color list


  static getColorList(count) {
    let processL = false;

    if (count > 10) {
      processL = true;
      count = Math.ceil(count / 2);
    }

    const h1 = 360 / count;
    const result = [];

    for (let loopI = 0; loopI < count; loopI++) {
      result[loopI] = Color().hsl(h1 * loopI, 80, 38);

      if (processL) {
        result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
      }
    }

    return result;
  }

  static getColorGenerator(staticColors, startIndex) {
    // Known colors for static data,
    // should add for very common state string manually.
    // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
    const palette = ["ff0029", "66a61e", "377eb8", "984ea3", "00d2d5", "ff7f00", "af8d00", "7f80cd", "b3e900", "c42e60", "a65628", "f781bf", "8dd3c7", "bebada", "fb8072", "80b1d3", "fdb462", "fccde5", "bc80bd", "ffed6f", "c4eaff", "cf8c00", "1b9e77", "d95f02", "e7298a", "e6ab02", "a6761d", "0097ff", "00d067", "f43600", "4ba93b", "5779bb", "927acc", "97ee3f", "bf3947", "9f5b00", "f48758", "8caed6", "f2b94f", "eff26e", "e43872", "d9b100", "9d7a00", "698cff", "d9d9d9", "00d27e", "d06800", "009f82", "c49200", "cbe8ff", "fecddf", "c27eb6", "8cd2ce", "c4b8d9", "f883b0", "a49100", "f48800", "27d0df", "a04a9b"];

    function getColorIndex(idx) {
      // Reuse the color if index too large.
      return Color("#" + palette[idx % palette.length]);
    }

    const colorDict = {};
    let colorIndex = 0;
    if (startIndex > 0) colorIndex = startIndex;

    if (staticColors) {
      Object.keys(staticColors).forEach(c => {
        const c1 = staticColors[c];

        if (isFinite(c1)) {
          colorDict[c.toLowerCase()] = getColorIndex(c1);
        } else {
          colorDict[c.toLowerCase()] = Color(staticColors[c]);
        }
      });
    } // Custom color assign


    function getColor(__, data) {
      let ret;
      const name = data[3];
      if (name === null) return Color().hsl(0, 40, 38);
      if (name === undefined) return Color().hsl(120, 40, 38);
      const name1 = name.toLowerCase();

      if (ret === undefined) {
        ret = colorDict[name1];
      }

      if (ret === undefined) {
        ret = getColorIndex(colorIndex);
        colorIndex++;
        colorDict[name1] = ret;
      }

      return ret;
    }

    return getColor;
  }

}

customElements.define("op-chart-base", OpChartBase);

/***/ }),

/***/ "./src/components/state-history-chart-line.js":
/*!****************************************************!*\
  !*** ./src/components/state-history-chart-line.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _entity_op_chart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/op-chart-base */ "./src/components/entity/op-chart-base.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");







class StateHistoryChartLine extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <op-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></op-chart-base>
    `;
  }

  static get properties() {
    return {
      chartData: Object,
      data: Object,
      names: Object,
      unit: String,
      identifier: String,
      isSingleDevice: {
        type: Boolean,
        value: false
      },
      endTime: Object,
      rendered: {
        type: Boolean,
        value: false,
        observer: "_onRenderedChanged"
      }
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, isSingleDevice)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  _onRenderedChanged(rendered) {
    if (rendered) this.animateHeight();
  }

  animateHeight() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.style.height = this.$.chart.scrollHeight + "px";
    }));
  }

  drawChart() {
    const unit = this.unit;
    const deviceStates = this.data;
    const datasets = [];
    let endTime;

    if (!this._isAttached) {
      return;
    }

    if (deviceStates.length === 0) {
      return;
    }

    function safeParseFloat(value) {
      const parsed = parseFloat(value);
      return isFinite(parsed) ? parsed : null;
    }

    endTime = this.endTime || // Get the highest date from the last date of each device
    new Date(Math.max.apply(null, deviceStates.map(devSts => new Date(devSts.states[devSts.states.length - 1].last_changed))));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const names = this.names || {};
    deviceStates.forEach(states => {
      const domain = states.domain;
      const name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

      let prevValues;
      const data = [];

      function pushData(timestamp, datavalues) {
        if (!datavalues) return;

        if (timestamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is "now" and client time is not in sync with server time.
          return;
        }

        data.forEach((d, i) => {
          d.data.push({
            x: timestamp,
            y: datavalues[i]
          });
        });
        prevValues = datavalues;
      }

      function addColumn(nameY, step, fill) {
        let dataFill = false;
        let dataStep = false;

        if (fill) {
          dataFill = "origin";
        }

        if (step) {
          dataStep = "before";
        }

        data.push({
          label: nameY,
          fill: dataFill,
          steppedLine: dataStep,
          pointRadius: 0,
          data: [],
          unitText: unit
        });
      }

      if (domain === "thermostat" || domain === "climate" || domain === "water_heater") {
        const hasHvacAction = states.states.some(state => state.attributes && state.attributes.hvac_action);
        const isHeating = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "heating" : state => state.state === "heat";
        const isCooling = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "cooling" : state => state.state === "cool";
        const hasHeat = states.states.some(isHeating);
        const hasCool = states.states.some(isCooling); // We differentiate between thermostats that have a target temperature
        // range versus ones that have just a target temperature
        // Using step chart by step-before so manually interpolation not needed.

        const hasTargetRange = states.states.some(state => state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low);
        addColumn(`${this.opp.localize("ui.card.climate.current_temperature", "name", name)}`, true);

        if (hasHeat) {
          addColumn(`${this.opp.localize("ui.card.climate.heating", "name", name)}`, true, true); // The "heating" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasCool) {
          addColumn(`${this.opp.localize("ui.card.climate.cooling", "name", name)}`, true, true); // The "cooling" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasTargetRange) {
          addColumn(`${this.opp.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.opp.localize("ui.card.climate.high"))}`, true);
          addColumn(`${this.opp.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.opp.localize("ui.card.climate.low"))}`, true);
        } else {
          addColumn(`${this.opp.localize("ui.card.climate.target_temperature_entity", "name", name)}`, true);
        }

        states.states.forEach(state => {
          if (!state.attributes) return;
          const curTemp = safeParseFloat(state.attributes.current_temperature);
          const series = [curTemp];

          if (hasHeat) {
            series.push(isHeating(state) ? curTemp : null);
          }

          if (hasCool) {
            series.push(isCooling(state) ? curTemp : null);
          }

          if (hasTargetRange) {
            const targetHigh = safeParseFloat(state.attributes.target_temp_high);
            const targetLow = safeParseFloat(state.attributes.target_temp_low);
            series.push(targetHigh, targetLow);
            pushData(new Date(state.last_changed), series);
          } else {
            const target = safeParseFloat(state.attributes.temperature);
            series.push(target);
            pushData(new Date(state.last_changed), series);
          }
        });
      } else {
        // Only disable interpolation for sensors
        const isStep = domain === "sensor";
        addColumn(name, isStep);
        let lastValue = null;
        let lastDate = null;
        let lastNullDate = null; // Process chart data.
        // When state is `unknown`, calculate the value and break the line.

        states.states.forEach(state => {
          const value = safeParseFloat(state.state);
          const date = new Date(state.last_changed);

          if (value !== null && lastNullDate !== null) {
            const dateTime = date.getTime();
            const lastNullDateTime = lastNullDate.getTime();
            const lastDateTime = lastDate.getTime();
            const tmpValue = (value - lastValue) * ((lastNullDateTime - lastDateTime) / (dateTime - lastDateTime)) + lastValue;
            pushData(lastNullDate, [tmpValue]);
            pushData(new Date(lastNullDateTime + 1), [null]);
            pushData(date, [value]);
            lastDate = date;
            lastValue = value;
            lastNullDate = null;
          } else if (value !== null && lastNullDate === null) {
            pushData(date, [value]);
            lastDate = date;
            lastValue = value;
          } else if (value === null && lastNullDate === null && lastValue !== null) {
            lastNullDate = date;
          }
        });
      } // Add an entry for final values


      pushData(endTime, prevValues, false); // Concat two arrays

      Array.prototype.push.apply(datasets, data);
    });

    const formatTooltipTitle = (items, data) => {
      const item = items[0];
      const date = data.datasets[item.datasetIndex].data[item.index].x;
      return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeWithSeconds"])(date, this.opp.language);
    };

    const chartOptions = {
      type: "line",
      unit: unit,
      legend: !this.isSingleDevice,
      options: {
        scales: {
          xAxes: [{
            type: "time",
            ticks: {
              major: {
                fontStyle: "bold"
              }
            }
          }],
          yAxes: [{
            ticks: {
              maxTicksLimit: 7
            }
          }]
        },
        tooltips: {
          mode: "neareach",
          callbacks: {
            title: formatTooltipTitle
          }
        },
        hover: {
          mode: "neareach"
        },
        layout: {
          padding: {
            top: 5
          }
        },
        elements: {
          line: {
            tension: 0.1,
            pointRadius: 0,
            borderWidth: 1.5
          },
          point: {
            hitRadius: 5
          }
        },
        plugins: {
          filler: {
            propagate: true
          }
        }
      },
      data: {
        labels: [],
        datasets: datasets
      }
    };
    this.chartData = chartOptions;
  }

}

customElements.define("state-history-chart-line", StateHistoryChartLine);

/***/ }),

/***/ "./src/components/state-history-chart-timeline.js":
/*!********************************************************!*\
  !*** ./src/components/state-history-chart-timeline.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _entity_op_chart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity/op-chart-base */ "./src/components/entity/op-chart-base.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");








class StateHistoryChartTimeline extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        op-chart-base {
          direction: ltr;
        }
      </style>
      <op-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></op-chart-base>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      chartData: Object,
      data: {
        type: Object,
        observer: "dataChanged"
      },
      names: Object,
      noSingle: Boolean,
      endTime: Date,
      rendered: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      rtl: {
        reflectToAttribute: true,
        computed: "_computeRTL(opp)"
      }
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, localize, language)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  drawChart() {
    const staticColors = {
      on: 1,
      off: 0,
      unavailable: "#a0a0a0",
      unknown: "#606060",
      idle: 2
    };
    let stateHistory = this.data;

    if (!this._isAttached) {
      return;
    }

    if (!stateHistory) {
      stateHistory = [];
    }

    const startTime = new Date(stateHistory.reduce((minTime, stateInfo) => Math.min(minTime, new Date(stateInfo.data[0].last_changed)), new Date())); // end time is Math.max(startTime, last_event)

    let endTime = this.endTime || new Date(stateHistory.reduce((maxTime, stateInfo) => Math.max(maxTime, new Date(stateInfo.data[stateInfo.data.length - 1].last_changed)), startTime));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const labels = [];
    const datasets = []; // stateHistory is a list of lists of sorted state objects

    const names = this.names || {};
    stateHistory.forEach(stateInfo => {
      let newLastChanged;
      let prevState = null;
      let locState = null;
      let prevLastChanged = startTime;
      const entityDisplay = names[stateInfo.entity_id] || stateInfo.name;
      const dataRow = [];
      stateInfo.data.forEach(state => {
        let newState = state.state;
        const timeStamp = new Date(state.last_changed);

        if (newState === undefined || newState === "") {
          newState = null;
        }

        if (timeStamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is 'now' and client time is not in sync with server time.
          return;
        }

        if (prevState !== null && newState !== prevState) {
          newLastChanged = new Date(state.last_changed);
          dataRow.push([prevLastChanged, newLastChanged, locState, prevState]);
          prevState = newState;
          locState = state.state_localize;
          prevLastChanged = newLastChanged;
        } else if (prevState === null) {
          prevState = newState;
          locState = state.state_localize;
          prevLastChanged = new Date(state.last_changed);
        }
      });

      if (prevState !== null) {
        dataRow.push([prevLastChanged, endTime, locState, prevState]);
      }

      datasets.push({
        data: dataRow
      });
      labels.push(entityDisplay);
    });

    const formatTooltipLabel = (item, data) => {
      const values = data.datasets[item.datasetIndex].data[item.index];
      const start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeWithSeconds"])(values[0], this.opp.language);
      const end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeWithSeconds"])(values[1], this.opp.language);
      const state = values[2];
      return [state, start, end];
    };

    const chartOptions = {
      type: "timeline",
      options: {
        tooltips: {
          callbacks: {
            label: formatTooltipLabel
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              major: {
                fontStyle: "bold"
              }
            }
          }],
          yAxes: [{
            afterSetDimensions: yaxe => {
              yaxe.maxWidth = yaxe.chart.width * 0.18;
            },
            position: this._computeRTL ? "right" : "left"
          }]
        }
      },
      data: {
        labels: labels,
        datasets: datasets
      },
      colors: {
        staticColors: staticColors,
        staticColorIndex: 3
      }
    };
    this.chartData = chartOptions;
  }

  _computeRTL(opp) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(opp);
  }

}

customElements.define("state-history-chart-timeline", StateHistoryChartTimeline);

/***/ }),

/***/ "./src/components/state-history-charts.js":
/*!************************************************!*\
  !*** ./src/components/state-history-charts.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_history_chart_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-history-chart-line */ "./src/components/state-history-chart-line.js");
/* harmony import */ var _state_history_chart_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-history-chart-timeline */ "./src/components/state-history-chart-timeline.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







class StateHistoryCharts extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          opp="[[opp]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          opp="[[opp]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      historyData: {
        type: Object,
        value: null
      },
      names: Object,
      isLoadingData: Boolean,
      endTime: {
        type: Object
      },
      upToNow: Boolean,
      noSingle: Boolean
    };
  }

  _computeIsSingleLineChart(data, noSingle) {
    return !noSingle && data && data.length === 1;
  }

  _computeIsEmpty(isLoadingData, historyData) {
    const historyDataEmpty = !historyData || !historyData.timeline || !historyData.line || historyData.timeline.length === 0 && historyData.line.length === 0;
    return !isLoadingData && historyDataEmpty;
  }

  _computeIsLoading(isLoading) {
    return isLoading && !this.historyData;
  }

  _computeEndTime(endTime, upToNow) {
    // We don't really care about the value of historyData, but if it change we want to update
    // endTime.
    return upToNow ? new Date() : endTime;
  }

}

customElements.define("state-history-charts", StateHistoryCharts);

/***/ }),

/***/ "./src/data/cached-history.ts":
/*!************************************!*\
  !*** ./src/data/cached-history.ts ***!
  \************************************/
/*! exports provided: getRecent, getRecentWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecent", function() { return getRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentWithCache", function() { return getRecentWithCache; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");

const RECENT_THRESHOLD = 60000; // 1 minute

const RECENT_CACHE = {};
const stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

const getRecent = (opp, entityId, startTime, endTime, localize, language) => {
  const cacheKey = entityId;
  const cache = RECENT_CACHE[cacheKey];

  if (cache && Date.now() - cache.created < RECENT_THRESHOLD && cache.language === language) {
    return cache.data;
  }

  const prom = Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(opp, entityId, startTime, endTime).then(stateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(opp, stateHistory, localize, language), err => {
    delete RECENT_CACHE[entityId];
    throw err;
  });
  RECENT_CACHE[cacheKey] = {
    created: Date.now(),
    language,
    data: prom
  };
  return prom;
}; // Cache type 2 functionality

function getEmptyCache(language, startTime, endTime) {
  return {
    prom: Promise.resolve({
      line: [],
      timeline: []
    }),
    language,
    startTime,
    endTime,
    data: {
      line: [],
      timeline: []
    }
  };
}

const getRecentWithCache = (opp, entityId, cacheConfig, localize, language) => {
  const cacheKey = cacheConfig.cacheKey;
  const endTime = new Date();
  const startTime = new Date(endTime);
  startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
  let toFetchStartTime = startTime;
  let appendingToCache = false;
  let cache = stateHistoryCache[cacheKey];

  if (cache && toFetchStartTime >= cache.startTime && toFetchStartTime <= cache.endTime && cache.language === language) {
    toFetchStartTime = cache.endTime;
    appendingToCache = true; // This pretty much never happens as endTime is usually set to now

    if (endTime <= cache.endTime) {
      return cache.prom;
    }
  } else {
    cache = stateHistoryCache[cacheKey] = getEmptyCache(language, startTime, endTime);
  }

  const curCacheProm = cache.prom;

  const genProm = async () => {
    let fetchedHistory;

    try {
      const results = await Promise.all([curCacheProm, Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(opp, entityId, toFetchStartTime, endTime, appendingToCache)]);
      fetchedHistory = results[1];
    } catch (err) {
      delete stateHistoryCache[cacheKey];
      throw err;
    }

    const stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(opp, fetchedHistory, localize, language);

    if (appendingToCache) {
      mergeLine(stateHistory.line, cache.data.line);
      mergeTimeline(stateHistory.timeline, cache.data.timeline);
      pruneStartTime(startTime, cache.data);
    } else {
      cache.data = stateHistory;
    }

    return cache.data;
  };

  cache.prom = genProm();
  cache.startTime = startTime;
  cache.endTime = endTime;
  return cache.prom;
};

const mergeLine = (historyLines, cacheLines) => {
  historyLines.forEach(line => {
    const unit = line.unit;
    const oldLine = cacheLines.find(cacheLine => cacheLine.unit === unit);

    if (oldLine) {
      line.data.forEach(entity => {
        const oldEntity = oldLine.data.find(cacheEntity => entity.entity_id === cacheEntity.entity_id);

        if (oldEntity) {
          oldEntity.states = oldEntity.states.concat(entity.states);
        } else {
          oldLine.data.push(entity);
        }
      });
    } else {
      cacheLines.push(line);
    }
  });
};

const mergeTimeline = (historyTimelines, cacheTimelines) => {
  historyTimelines.forEach(timeline => {
    const oldTimeline = cacheTimelines.find(cacheTimeline => cacheTimeline.entity_id === timeline.entity_id);

    if (oldTimeline) {
      oldTimeline.data = oldTimeline.data.concat(timeline.data);
    } else {
      cacheTimelines.push(timeline);
    }
  });
};

const pruneArray = (originalStartTime, arr) => {
  if (arr.length === 0) {
    return arr;
  }

  const changedAfterStartTime = arr.findIndex(state => new Date(state.last_changed) > originalStartTime);

  if (changedAfterStartTime === 0) {
    // If all changes happened after originalStartTime then we are done.
    return arr;
  } // If all changes happened at or before originalStartTime. Use last index.


  const updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
  arr[updateIndex].last_changed = originalStartTime;
  return arr.slice(updateIndex);
};

const pruneStartTime = (originalStartTime, cacheData) => {
  cacheData.line.forEach(line => {
    line.data.forEach(entity => {
      entity.states = pruneArray(originalStartTime, entity.states);
    });
  });
  cacheData.timeline.forEach(timeline => {
    timeline.data = pruneArray(originalStartTime, timeline.data);
  });
};

/***/ }),

/***/ "./src/data/history.ts":
/*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
/*! exports provided: fetchRecent, fetchDate, computeHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecent", function() { return fetchRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDate", function() { return fetchDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHistory", function() { return computeHistory; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");



const DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
const LINE_ATTRIBUTES_TO_KEEP = ["temperature", "current_temperature", "target_temp_low", "target_temp_high", "hvac_action"];
const fetchRecent = (opp, entityId, startTime, endTime, skipInitialState = false) => {
  let url = "history/period";

  if (startTime) {
    url += "/" + startTime.toISOString();
  }

  url += "?filter_entity_id=" + entityId;

  if (endTime) {
    url += "&end_time=" + endTime.toISOString();
  }

  if (skipInitialState) {
    url += "&skip_initial_state";
  }

  return opp.callApi("GET", url);
};
const fetchDate = (opp, startTime, endTime) => {
  return opp.callApi("GET", `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}`);
};

const equalState = (obj1, obj2) => obj1.state === obj2.state && ( // They either both have an attributes object or not
!obj1.attributes || LINE_ATTRIBUTES_TO_KEEP.every(attr => obj1.attributes[attr] === obj2.attributes[attr]));

const processTimelineEntity = (localize, language, states) => {
  const data = [];

  for (const state of states) {
    if (data.length > 0 && state.state === data[data.length - 1].state) {
      continue;
    }

    data.push({
      state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["computeStateDisplay"])(localize, state, language),
      state: state.state,
      last_changed: state.last_changed
    });
  }

  return {
    name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(states[0]),
    entity_id: states[0].entity_id,
    data
  };
};

const processLineChartEntities = (unit, entities) => {
  const data = [];

  for (const states of entities) {
    const last = states[states.length - 1];
    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(last);
    const processedStates = [];

    for (const state of states) {
      let processedState;

      if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
        processedState = {
          state: state.state,
          last_changed: state.last_updated,
          attributes: {}
        };

        for (const attr of LINE_ATTRIBUTES_TO_KEEP) {
          if (attr in state.attributes) {
            processedState.attributes[attr] = state.attributes[attr];
          }
        }
      } else {
        processedState = state;
      }

      if (processedStates.length > 1 && equalState(processedState, processedStates[processedStates.length - 1]) && equalState(processedState, processedStates[processedStates.length - 2])) {
        continue;
      }

      processedStates.push(processedState);
    }

    data.push({
      domain,
      name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(last),
      entity_id: last.entity_id,
      states: processedStates
    });
  }

  return {
    unit,
    identifier: entities.map(states => states[0].entity_id).join(""),
    data
  };
};

const computeHistory = (opp, stateHistory, localize, language) => {
  const lineChartDevices = {};
  const timelineDevices = [];

  if (!stateHistory) {
    return {
      line: [],
      timeline: []
    };
  }

  stateHistory.forEach(stateInfo => {
    if (stateInfo.length === 0) {
      return;
    }

    const stateWithUnit = stateInfo.find(state => "unit_of_measurement" in state.attributes);
    let unit;

    if (stateWithUnit) {
      unit = stateWithUnit.attributes.unit_of_measurement;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "climate") {
      unit = opp.config.unit_system.temperature;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "water_heater") {
      unit = opp.config.unit_system.temperature;
    }

    if (!unit) {
      timelineDevices.push(processTimelineEntity(localize, language, stateInfo));
    } else if (unit in lineChartDevices) {
      lineChartDevices[unit].push(stateInfo);
    } else {
      lineChartDevices[unit] = [stateInfo];
    }
  });
  const unitStates = Object.keys(lineChartDevices).map(unit => processLineChartEntities(unit, lineChartDevices[unit]));
  return {
    line: unitStates,
    timeline: timelineDevices
  };
};

/***/ }),

/***/ "./src/data/op-state-history-data.js":
/*!*******************************************!*\
  !*** ./src/data/op-state-history-data.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");
/* harmony import */ var _cached_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cached-history */ "./src/data/cached-history.ts");






/*
 * @appliesMixin LocalizeMixin
 */

class OpStateHistoryData extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get properties() {
    return {
      opp: {
        type: Object,
        observer: "oppChanged"
      },
      filterType: String,
      cacheConfig: Object,
      startTime: Date,
      endTime: Date,
      entityId: String,
      isLoading: {
        type: Boolean,
        value: true,
        readOnly: true,
        notify: true
      },
      data: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true
      }
    };
  }

  static get observers() {
    return ["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
  }

  disconnectedCallback() {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    super.disconnectedCallback();
  }

  oppChanged(newOpp, oldOpp) {
    if (!oldOpp && !this._madeFirstCall) {
      this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
    }
  }

  filterChangedDebouncer(...args) {
    this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debounceFilterChanged, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0), () => {
      this.filterChanged(...args);
    });
  }

  filterChanged(filterType, entityId, startTime, endTime, cacheConfig, localize) {
    if (!this.opp) {
      return;
    }

    if (cacheConfig && !cacheConfig.cacheKey) {
      return;
    }

    if (!localize) {
      return;
    }

    this._madeFirstCall = true;
    const language = this.opp.language;
    let data;

    if (filterType === "date") {
      if (!startTime || !endTime) return;
      data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(this.opp, startTime, endTime).then(dateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(this.opp, dateHistory, localize, language));
    } else if (filterType === "recent-entity") {
      if (!entityId) return;

      if (cacheConfig) {
        data = this.getRecentWithCacheRefresh(entityId, cacheConfig, localize, language);
      } else {
        data = Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecent"])(this.opp, entityId, startTime, endTime, localize, language);
      }
    } else {
      return;
    }

    this._setIsLoading(true);

    data.then(stateHistory => {
      this._setData(stateHistory);

      this._setIsLoading(false);
    });
  }

  getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    if (cacheConfig.refresh) {
      this._refreshTimeoutId = window.setInterval(() => {
        Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.opp, entityId, cacheConfig, localize, language).then(stateHistory => {
          this._setData(Object.assign({}, stateHistory));
        });
      }, cacheConfig.refresh * 1000);
    }

    return Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.opp, entityId, cacheConfig, localize, language);
  }

}

customElements.define("op-state-history-data", OpStateHistoryData);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2d+aHVpLWRpYWxvZy1zdWdnZXN0LWNhcmR+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1kZXZjb25+cGFuZWwtaGlzdG9yeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L29wLWNoYXJ0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY2FjaGVkLWhpc3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9vcC1zdGF0ZS1oaXN0b3J5LWRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImxvbmdEYXRlXCIpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIik7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lV2l0aFNlY29uZHMgPSB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bVRpbWVcIik7XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lIH0gZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURpc3BsYXkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIHN0YXRlT2JqOiBPcHBFbnRpdHksXG4gIGxhbmd1YWdlOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIGxldCBkaXNwbGF5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJiaW5hcnlfc2Vuc29yXCIpIHtcbiAgICAvLyBUcnkgZGV2aWNlIGNsYXNzIHRyYW5zbGF0aW9uLCB0aGVuIGRlZmF1bHQgYmluYXJ5IHNlbnNvciB0cmFuc2xhdGlvblxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKFxuICAgICAgICBgc3RhdGUuJHtkb21haW59LiR7c3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3N9LiR7c3RhdGVPYmouc3RhdGV9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc3BsYXkpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuJHtkb21haW59LmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50ICYmXG4gICAgIVtcInVua25vd25cIiwgXCJ1bmF2YWlsYWJsZVwiXS5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSlcbiAgKSB7XG4gICAgZGlzcGxheSA9IHN0YXRlT2JqLnN0YXRlICsgXCIgXCIgKyBzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSBcImlucHV0X2RhdGV0aW1lXCIpIHtcbiAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIC0gMSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG4gICAgICBkaXNwbGF5ID0gZm9ybWF0RGF0ZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfSBlbHNlIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgLy8gRHVlIHRvIGJ1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTc1NDhcbiAgICAgICAgLy8gZG9uJ3QgdXNlIGFydGlmaWNpYWwgMTk3MCB5ZWFyLlxuICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbm93LmdldE1vbnRoKCksXG4gICAgICAgIG5vdy5nZXREYXkoKSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXRUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXREYXRlVGltZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJ6d2F2ZVwiKSB7XG4gICAgaWYgKFtcImluaXRpYWxpemluZ1wiLCBcImRlYWRcIl0uaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoXG4gICAgICAgIGBzdGF0ZS56d2F2ZS5xdWVyeV9zdGFnZS4ke3N0YXRlT2JqLnN0YXRlfWAsXG4gICAgICAgIFwicXVlcnlfc3RhZ2VcIixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5xdWVyeV9zdGFnZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS56d2F2ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuJHtkb21haW59LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gIH1cblxuICAvLyBGYWxsIGJhY2sgdG8gZGVmYXVsdCwgY29tcG9uZW50IGJhY2tlbmQgdHJhbnNsYXRpb24sIG9yIHJhdyBzdGF0ZSBpZiBub3RoaW5nIGVsc2UgbWF0Y2hlcy5cbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBzdGF0ZU9iai5zdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBkaXNwbGF5O1xufTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3JcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKiBnbG9iYWwgQ2hhcnQgbW9tZW50IENvbG9yICovXG5cbmxldCBzY3JpcHRzTG9hZGVkID0gbnVsbDtcblxuY2xhc3MgT3BDaGFydEJhc2UgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhcbiAgW0lyb25SZXNpemFibGVCZWhhdmlvcl0sXG4gIFBvbHltZXJFbGVtZW50XG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciB7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2LmNoYXJ0VGl0bGUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgZmxleDogMCAwIDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2LmNoYXJ0TGVnZW5kIHtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MCwgODAsIDgwLCAwLjkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTJweCk7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcnRsXSkgLmNoYXJ0VG9vbHRpcCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIHVsLFxuICAgICAgICAuY2hhcnRUb29sdGlwIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAgLnRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ5JTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGk6bnRoLWNoaWxkKG9kZCk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAvKiBNYWtlIGxhc3QgaXRlbSB0YWtlIGZ1bGwgd2lkdGggaWYgaXQgaXMgb2RkLW51bWJlcmVkLiAqL1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGlbZGF0YS1oaWRkZW5dIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgZW0sXG4gICAgICAgIC5jaGFydFRvb2x0aXAgZW0ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuY2hhcnRUb29sdGlwIGVtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1t1bml0XV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0SGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0VGl0bGVcIj5bW3VuaXRdXTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydExlZ2VuZFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW21ldGFzXV1cIj5cbiAgICAgICAgICAgICAgICA8bGkgb24tY2xpY2s9XCJfbGVnZW5kQ2xpY2tcIiBkYXRhLWhpZGRlbiQ9XCJbW2l0ZW0uaGlkZGVuXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOltbaXRlbS5iZ0NvbG9yXV1cIj48L2VtPlxuICAgICAgICAgICAgICAgICAgW1tpdGVtLmxhYmVsXV1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBpZD1cImNoYXJ0VGFyZ2V0XCIgc3R5bGU9XCJoZWlnaHQ6NDBweDsgd2lkdGg6MTAwJVwiPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2hhcnRDYW52YXNcIj48L2NhbnZhcz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzJD1cImNoYXJ0VG9vbHRpcCBbW3Rvb2x0aXAueUFsaWduXV1cIlxuICAgICAgICAgIHN0eWxlJD1cIm9wYWNpdHk6W1t0b29sdGlwLm9wYWNpdHldXTsgdG9wOltbdG9vbHRpcC50b3BdXTsgbGVmdDpbW3Rvb2x0aXAubGVmdF1dOyBwYWRkaW5nOltbdG9vbHRpcC55UGFkZGluZ11dcHggW1t0b29sdGlwLnhQYWRkaW5nXV1weFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5bW3Rvb2x0aXAudGl0bGVdXTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdG9vbHRpcC5saW5lc11dXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGVtIHN0eWxlJD1cImJhY2tncm91bmQtY29sb3I6W1tpdGVtLmJnQ29sb3JdXVwiPjwvZW1cbiAgICAgICAgICAgICAgICAgID5bW2l0ZW0udGV4dF1dXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGdldCBjaGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IE9iamVjdCxcbiAgICAgIGlkZW50aWZpZXI6IFN0cmluZyxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBtZXRhczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHtcbiAgICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIHhQYWRkaW5nOiBcIjVcIixcbiAgICAgICAgICB5UGFkZGluZzogXCIzXCIsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICAgIHVuaXQ6IE9iamVjdCxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wib25Qcm9wc0NoYW5nZShkYXRhKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgdGhpcy5fcmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgICAgdGltZU91dC5hZnRlcigxMCksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiQuY2hhcnRUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJpcm9uLXJlc2l6ZVwiLCB0aGlzLl9yZXNpemVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgaWYgKHNjcmlwdHNMb2FkZWQgPT09IG51bGwpIHtcbiAgICAgIHNjcmlwdHNMb2FkZWQgPSBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9hZF9jaGFydFwiICovIFwiLi4vLi4vcmVzb3VyY2VzL29wLWNoYXJ0LXNjcmlwdHMuanNcIlxuICAgICAgKTtcbiAgICB9XG4gICAgc2NyaXB0c0xvYWRlZC50aGVuKChDaGFydE1vZHVsZSkgPT4ge1xuICAgICAgdGhpcy5DaGFydENsYXNzID0gQ2hhcnRNb2R1bGUuZGVmYXVsdDtcbiAgICAgIHRoaXMub25Qcm9wc0NoYW5nZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuJC5jaGFydFRhcmdldCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVzaXplVGltZXIpO1xuICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgb25Qcm9wc0NoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQgfHwgIXRoaXMuQ2hhcnRDbGFzcyB8fCAhdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBfY3VzdG9tVG9vbHRpcHModG9vbHRpcCkge1xuICAgIC8vIEhpZGUgaWYgbm8gdG9vbHRpcFxuICAgIGlmICh0b29sdGlwLm9wYWNpdHkgPT09IDApIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJvcGFjaXR5XCJdLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2V0IGNhcmV0IFBvc2l0aW9uXG4gICAgaWYgKHRvb2x0aXAueUFsaWduKSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwieUFsaWduXCJdLCB0b29sdGlwLnlBbGlnbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ5QWxpZ25cIl0sIFwibm8tdHJhbnNmb3JtXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gdG9vbHRpcC50aXRsZSA/IHRvb2x0aXAudGl0bGVbMF0gfHwgXCJcIiA6IFwiXCI7XG4gICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInRpdGxlXCJdLCB0aXRsZSk7XG5cbiAgICBjb25zdCBib2R5TGluZXMgPSB0b29sdGlwLmJvZHkubWFwKChuKSA9PiBuLmxpbmVzKTtcblxuICAgIC8vIFNldCBUZXh0XG4gICAgaWYgKHRvb2x0aXAuYm9keSkge1xuICAgICAgdGhpcy5zZXQoXG4gICAgICAgIFtcInRvb2x0aXBcIiwgXCJsaW5lc1wiXSxcbiAgICAgICAgYm9keUxpbmVzLm1hcCgoYm9keSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IHRvb2x0aXAubGFiZWxDb2xvcnNbaV07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMuYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBiZ0NvbG9yOiBjb2xvcnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgdGV4dDogYm9keS5qb2luKFwiXFxuXCIpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHRoaXMuJC5jaGFydFRhcmdldC5jbGllbnRXaWR0aDtcbiAgICBsZXQgcG9zaXRpb25YID0gdG9vbHRpcC5jYXJldFg7XG4gICAgY29uc3QgcG9zaXRpb25ZID0gdGhpcy5fY2hhcnQuY2FudmFzLm9mZnNldFRvcCArIHRvb2x0aXAuY2FyZXRZO1xuICAgIGlmICh0b29sdGlwLmNhcmV0WCArIDEwMCA+IHBhcmVudFdpZHRoKSB7XG4gICAgICBwb3NpdGlvblggPSBwYXJlbnRXaWR0aCAtIDEwMDtcbiAgICB9IGVsc2UgaWYgKHRvb2x0aXAuY2FyZXRYIDwgMTAwKSB7XG4gICAgICBwb3NpdGlvblggPSAxMDA7XG4gICAgfVxuICAgIHBvc2l0aW9uWCArPSB0aGlzLl9jaGFydC5jYW52YXMub2Zmc2V0TGVmdDtcbiAgICAvLyBEaXNwbGF5LCBwb3NpdGlvbiwgYW5kIHNldCBzdHlsZXMgZm9yIGZvbnRcbiAgICB0aGlzLnRvb2x0aXAgPSB7XG4gICAgICAuLi50aGlzLnRvb2x0aXAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgbGVmdDogYCR7cG9zaXRpb25YfXB4YCxcbiAgICAgIHRvcDogYCR7cG9zaXRpb25ZfXB4YCxcbiAgICB9O1xuICB9XG5cbiAgX2xlZ2VuZENsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXQubm9kZU5hbWUgIT09IFwiTElcIikge1xuICAgICAgLy8gdXNlciBjbGlja2VkIGNoaWxkLCBmaW5kIHBhcmVudCBMSVxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gZXZlbnQubW9kZWwuaXRlbXNJbmRleDtcblxuICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9jaGFydC5nZXREYXRhc2V0TWV0YShpbmRleCk7XG4gICAgbWV0YS5oaWRkZW4gPVxuICAgICAgbWV0YS5oaWRkZW4gPT09IG51bGwgPyAhdGhpcy5fY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uaGlkZGVuIDogbnVsbDtcbiAgICB0aGlzLnNldChcbiAgICAgIFtcIm1ldGFzXCIsIGluZGV4LCBcImhpZGRlblwiXSxcbiAgICAgIHRoaXMuX2NoYXJ0LmlzRGF0YXNldFZpc2libGUoaW5kZXgpID8gbnVsbCA6IFwiaGlkZGVuXCJcbiAgICApO1xuICAgIHRoaXMuX2NoYXJ0LnVwZGF0ZSgpO1xuICB9XG5cbiAgX2RyYXdMZWdlbmQoKSB7XG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLl9jaGFydDtcbiAgICAvLyBOZXcgZGF0YSBmb3Igb2xkIGdyYXBoLiBLZWVwIG1ldGFkYXRhLlxuICAgIGNvbnN0IHByZXNlcnZlVmlzaWJpbGl0eSA9XG4gICAgICB0aGlzLl9vbGRJZGVudGlmaWVyICYmIHRoaXMuaWRlbnRpZmllciA9PT0gdGhpcy5fb2xkSWRlbnRpZmllcjtcbiAgICB0aGlzLl9vbGRJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuICAgIHRoaXMuc2V0KFxuICAgICAgXCJtZXRhc1wiLFxuICAgICAgdGhpcy5fY2hhcnQuZGF0YS5kYXRhc2V0cy5tYXAoKHgsIGkpID0+ICh7XG4gICAgICAgIGxhYmVsOiB4LmxhYmVsLFxuICAgICAgICBjb2xvcjogeC5jb2xvcixcbiAgICAgICAgYmdDb2xvcjogeC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGhpZGRlbjpcbiAgICAgICAgICBwcmVzZXJ2ZVZpc2liaWxpdHkgJiYgaSA8IHRoaXMubWV0YXMubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMubWV0YXNbaV0uaGlkZGVuXG4gICAgICAgICAgICA6ICFjaGFydC5pc0RhdGFzZXRWaXNpYmxlKGkpLFxuICAgICAgfSkpXG4gICAgKTtcbiAgICBsZXQgdXBkYXRlTmVlZGVkID0gZmFsc2U7XG4gICAgaWYgKHByZXNlcnZlVmlzaWJpbGl0eSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1ldGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBjaGFydC5nZXREYXRhc2V0TWV0YShpKTtcbiAgICAgICAgaWYgKCEhbWV0YS5oaWRkZW4gIT09ICEhdGhpcy5tZXRhc1tpXS5oaWRkZW4pIHVwZGF0ZU5lZWRlZCA9IHRydWU7XG4gICAgICAgIG1ldGEuaGlkZGVuID0gdGhpcy5tZXRhc1tpXS5oaWRkZW4gPyB0cnVlIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVwZGF0ZU5lZWRlZCkge1xuICAgICAgY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICAgIHRoaXMudW5pdCA9IHRoaXMuZGF0YS51bml0O1xuICB9XG5cbiAgX2Zvcm1hdFRpY2tWYWx1ZSh2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZXNbaW5kZXhdLnZhbHVlKTtcbiAgICByZXR1cm4gZm9ybWF0VGltZShkYXRlKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmRhdGE7XG4gICAgY29uc3QgY3R4ID0gdGhpcy4kLmNoYXJ0Q2FudmFzO1xuXG4gICAgaWYgKCghZGF0YS5kYXRhc2V0cyB8fCAhZGF0YS5kYXRhc2V0cy5sZW5ndGgpICYmICF0aGlzLl9jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnR5cGUgIT09IFwidGltZWxpbmVcIiAmJiBkYXRhLmRhdGFzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNudCA9IGRhdGEuZGF0YXNldHMubGVuZ3RoO1xuICAgICAgY29uc3QgY29sb3JzID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRDb2xvckxpc3QoY250KTtcbiAgICAgIGZvciAobGV0IGxvb3BJID0gMDsgbG9vcEkgPCBjbnQ7IGxvb3BJKyspIHtcbiAgICAgICAgZGF0YS5kYXRhc2V0c1tsb29wSV0uYm9yZGVyQ29sb3IgPSBjb2xvcnNbbG9vcEldLnJnYlN0cmluZygpO1xuICAgICAgICBkYXRhLmRhdGFzZXRzW2xvb3BJXS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbbG9vcEldXG4gICAgICAgICAgLmFscGhhKDAuNilcbiAgICAgICAgICAucmdiYVN0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY3VzdG9tVG9vbHRpcHMoeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgdGhpcy5fY2hhcnQuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLl9jaGFydC51cGRhdGUoeyBkdXJhdGlvbjogMCB9KTtcbiAgICAgIGlmICh0aGlzLmlzVGltZWxpbmUpIHtcbiAgICAgICAgdGhpcy5fY2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzLmRpc3BsYXkgPSBkYXRhLmxlbmd0aCA+IDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5sZWdlbmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xlZ2VuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRhdGEuZGF0YXNldHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VzdG9tVG9vbHRpcHMoeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgY29uc3QgcGx1Z2lucyA9IFt7IGFmdGVyUmVuZGVyOiAoKSA9PiB0aGlzLl9zZXRSZW5kZXJlZCh0cnVlKSB9XTtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBjdXN0b206IHRoaXMuX2N1c3RvbVRvb2x0aXBzLmJpbmQodGhpcyksXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3BhbkdhcHM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgZm9udDogXCIxMnB4ICdSb2JvdG8nLCAnc2Fucy1zZXJpZidcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnc2Fucy1zZXJpZidcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZShvcHRpb25zLCB0aGlzLmRhdGEub3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5jYWxsYmFjayA9IHRoaXMuX2Zvcm1hdFRpY2tWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gXCJ0aW1lbGluZVwiKSB7XG4gICAgICAgIHRoaXMuc2V0KFwiaXNUaW1lbGluZVwiLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX2NvbG9yRnVuYyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sb3JHZW5lcmF0b3IoXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3JzLnN0YXRpY0NvbG9ycyxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb2xvcnMuc3RhdGljQ29sb3JJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50cy5jb2xvckZ1bmN0aW9uID0gdGhpcy5fY29sb3JGdW5jO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRhdGFzZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcyA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiQuY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQuY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIxNjBweFwiO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hhcnREYXRhID0ge1xuICAgICAgICB0eXBlOiB0aGlzLmRhdGEudHlwZSxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLmRhdGEsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICB9O1xuICAgICAgLy8gQXN5bmMgcmVzaXplIGFmdGVyIGRvbSB1cGRhdGVcbiAgICAgIHRoaXMuX2NoYXJ0ID0gbmV3IHRoaXMuQ2hhcnRDbGFzcyhjdHgsIGNoYXJ0RGF0YSk7XG4gICAgICBpZiAodGhpcy5pc1RpbWVsaW5lICE9PSB0cnVlICYmIHRoaXMuZGF0YS5sZWdlbmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xlZ2VuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUNoYXJ0KCkge1xuICAgIGlmICghdGhpcy5fY2hhcnQpIHJldHVybjtcbiAgICAvLyBDaGFydCBub3QgcmVhZHlcbiAgICBpZiAodGhpcy5fcmVzaXplVGltZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnJlc2l6ZUNoYXJ0LmJpbmQodGhpcyksIDEwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLl9yZXNpemVUaW1lciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuX3Jlc2l6ZUNoYXJ0KCk7XG4gIH1cblxuICBfcmVzaXplQ2hhcnQoKSB7XG4gICAgY29uc3QgY2hhcnRUYXJnZXQgPSB0aGlzLiQuY2hhcnRUYXJnZXQ7XG5cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICBpZiAoZGF0YS5kYXRhc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUaW1lbGluZSkge1xuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVjYWxjdWxhdGUgY2hhcnQgaGVpZ2h0IGZvciBUaW1lbGluZSBjaGFydFxuICAgIGNvbnN0IGFyZWFUb3AgPSB0aGlzLl9jaGFydC5jaGFydEFyZWEudG9wO1xuICAgIGNvbnN0IGFyZWFCb3QgPSB0aGlzLl9jaGFydC5jaGFydEFyZWEuYm90dG9tO1xuICAgIGNvbnN0IGhlaWdodDEgPSB0aGlzLl9jaGFydC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChhcmVhQm90ID4gMCkge1xuICAgICAgdGhpcy5fYXhpc0hlaWdodCA9IGhlaWdodDEgLSBhcmVhQm90ICsgYXJlYVRvcDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2F4aXNIZWlnaHQpIHtcbiAgICAgIGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9heGlzSGVpZ2h0KSB7XG4gICAgICBjb25zdCBjbnQgPSBkYXRhLmRhdGFzZXRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IDMwICogY250ICsgdGhpcy5fYXhpc0hlaWdodCArIFwicHhcIjtcbiAgICAgIGlmIChjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgIT09IHRhcmdldEhlaWdodCkge1xuICAgICAgICBjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXRIZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgSFNMIGRpc3RyaWJ1dGVkIGNvbG9yIGxpc3RcbiAgc3RhdGljIGdldENvbG9yTGlzdChjb3VudCkge1xuICAgIGxldCBwcm9jZXNzTCA9IGZhbHNlO1xuICAgIGlmIChjb3VudCA+IDEwKSB7XG4gICAgICBwcm9jZXNzTCA9IHRydWU7XG4gICAgICBjb3VudCA9IE1hdGguY2VpbChjb3VudCAvIDIpO1xuICAgIH1cbiAgICBjb25zdCBoMSA9IDM2MCAvIGNvdW50O1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGxvb3BJID0gMDsgbG9vcEkgPCBjb3VudDsgbG9vcEkrKykge1xuICAgICAgcmVzdWx0W2xvb3BJXSA9IENvbG9yKCkuaHNsKGgxICogbG9vcEksIDgwLCAzOCk7XG4gICAgICBpZiAocHJvY2Vzc0wpIHtcbiAgICAgICAgcmVzdWx0W2xvb3BJICsgY291bnRdID0gQ29sb3IoKS5oc2woaDEgKiBsb29wSSwgODAsIDYyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb2xvckdlbmVyYXRvcihzdGF0aWNDb2xvcnMsIHN0YXJ0SW5kZXgpIHtcbiAgICAvLyBLbm93biBjb2xvcnMgZm9yIHN0YXRpYyBkYXRhLFxuICAgIC8vIHNob3VsZCBhZGQgZm9yIHZlcnkgY29tbW9uIHN0YXRlIHN0cmluZyBtYW51YWxseS5cbiAgICAvLyBQYWxldHRlIG1vZGlmaWVkIGZyb20gaHR0cDovL2dvb2dsZS5naXRodWIuaW8vcGFsZXR0ZS5qcy8gbXBuNjUsIEFwYWNoZSAyLjBcbiAgICBjb25zdCBwYWxldHRlID0gW1xuICAgICAgXCJmZjAwMjlcIixcbiAgICAgIFwiNjZhNjFlXCIsXG4gICAgICBcIjM3N2ViOFwiLFxuICAgICAgXCI5ODRlYTNcIixcbiAgICAgIFwiMDBkMmQ1XCIsXG4gICAgICBcImZmN2YwMFwiLFxuICAgICAgXCJhZjhkMDBcIixcbiAgICAgIFwiN2Y4MGNkXCIsXG4gICAgICBcImIzZTkwMFwiLFxuICAgICAgXCJjNDJlNjBcIixcbiAgICAgIFwiYTY1NjI4XCIsXG4gICAgICBcImY3ODFiZlwiLFxuICAgICAgXCI4ZGQzYzdcIixcbiAgICAgIFwiYmViYWRhXCIsXG4gICAgICBcImZiODA3MlwiLFxuICAgICAgXCI4MGIxZDNcIixcbiAgICAgIFwiZmRiNDYyXCIsXG4gICAgICBcImZjY2RlNVwiLFxuICAgICAgXCJiYzgwYmRcIixcbiAgICAgIFwiZmZlZDZmXCIsXG4gICAgICBcImM0ZWFmZlwiLFxuICAgICAgXCJjZjhjMDBcIixcbiAgICAgIFwiMWI5ZTc3XCIsXG4gICAgICBcImQ5NWYwMlwiLFxuICAgICAgXCJlNzI5OGFcIixcbiAgICAgIFwiZTZhYjAyXCIsXG4gICAgICBcImE2NzYxZFwiLFxuICAgICAgXCIwMDk3ZmZcIixcbiAgICAgIFwiMDBkMDY3XCIsXG4gICAgICBcImY0MzYwMFwiLFxuICAgICAgXCI0YmE5M2JcIixcbiAgICAgIFwiNTc3OWJiXCIsXG4gICAgICBcIjkyN2FjY1wiLFxuICAgICAgXCI5N2VlM2ZcIixcbiAgICAgIFwiYmYzOTQ3XCIsXG4gICAgICBcIjlmNWIwMFwiLFxuICAgICAgXCJmNDg3NThcIixcbiAgICAgIFwiOGNhZWQ2XCIsXG4gICAgICBcImYyYjk0ZlwiLFxuICAgICAgXCJlZmYyNmVcIixcbiAgICAgIFwiZTQzODcyXCIsXG4gICAgICBcImQ5YjEwMFwiLFxuICAgICAgXCI5ZDdhMDBcIixcbiAgICAgIFwiNjk4Y2ZmXCIsXG4gICAgICBcImQ5ZDlkOVwiLFxuICAgICAgXCIwMGQyN2VcIixcbiAgICAgIFwiZDA2ODAwXCIsXG4gICAgICBcIjAwOWY4MlwiLFxuICAgICAgXCJjNDkyMDBcIixcbiAgICAgIFwiY2JlOGZmXCIsXG4gICAgICBcImZlY2RkZlwiLFxuICAgICAgXCJjMjdlYjZcIixcbiAgICAgIFwiOGNkMmNlXCIsXG4gICAgICBcImM0YjhkOVwiLFxuICAgICAgXCJmODgzYjBcIixcbiAgICAgIFwiYTQ5MTAwXCIsXG4gICAgICBcImY0ODgwMFwiLFxuICAgICAgXCIyN2QwZGZcIixcbiAgICAgIFwiYTA0YTliXCIsXG4gICAgXTtcbiAgICBmdW5jdGlvbiBnZXRDb2xvckluZGV4KGlkeCkge1xuICAgICAgLy8gUmV1c2UgdGhlIGNvbG9yIGlmIGluZGV4IHRvbyBsYXJnZS5cbiAgICAgIHJldHVybiBDb2xvcihcIiNcIiArIHBhbGV0dGVbaWR4ICUgcGFsZXR0ZS5sZW5ndGhdKTtcbiAgICB9XG4gICAgY29uc3QgY29sb3JEaWN0ID0ge307XG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xuICAgIGlmIChzdGFydEluZGV4ID4gMCkgY29sb3JJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgaWYgKHN0YXRpY0NvbG9ycykge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGljQ29sb3JzKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGMxID0gc3RhdGljQ29sb3JzW2NdO1xuICAgICAgICBpZiAoaXNGaW5pdGUoYzEpKSB7XG4gICAgICAgICAgY29sb3JEaWN0W2MudG9Mb3dlckNhc2UoKV0gPSBnZXRDb2xvckluZGV4KGMxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvckRpY3RbYy50b0xvd2VyQ2FzZSgpXSA9IENvbG9yKHN0YXRpY0NvbG9yc1tjXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDdXN0b20gY29sb3IgYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoX18sIGRhdGEpIHtcbiAgICAgIGxldCByZXQ7XG4gICAgICBjb25zdCBuYW1lID0gZGF0YVszXTtcbiAgICAgIGlmIChuYW1lID09PSBudWxsKSByZXR1cm4gQ29sb3IoKS5oc2woMCwgNDAsIDM4KTtcbiAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBDb2xvcigpLmhzbCgxMjAsIDQwLCAzOCk7XG4gICAgICBjb25zdCBuYW1lMSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBjb2xvckRpY3RbbmFtZTFdO1xuICAgICAgfVxuICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGdldENvbG9ySW5kZXgoY29sb3JJbmRleCk7XG4gICAgICAgIGNvbG9ySW5kZXgrKztcbiAgICAgICAgY29sb3JEaWN0W25hbWUxXSA9IHJldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHJldHVybiBnZXRDb2xvcjtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtY2hhcnQtYmFzZVwiLCBPcENoYXJ0QmFzZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9lbnRpdHkvb3AtY2hhcnQtYmFzZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzIH0gZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0TGluZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPG9wLWNoYXJ0LWJhc2VcbiAgICAgICAgaWQ9XCJjaGFydFwiXG4gICAgICAgIGRhdGE9XCJbW2NoYXJ0RGF0YV1dXCJcbiAgICAgICAgaWRlbnRpZmllcj1cIltbaWRlbnRpZmllcl1dXCJcbiAgICAgICAgcmVuZGVyZWQ9XCJ7e3JlbmRlcmVkfX1cIlxuICAgICAgPjwvb3AtY2hhcnQtYmFzZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFydERhdGE6IE9iamVjdCxcbiAgICAgIGRhdGE6IE9iamVjdCxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG4gICAgICB1bml0OiBTdHJpbmcsXG4gICAgICBpZGVudGlmaWVyOiBTdHJpbmcsXG5cbiAgICAgIGlzU2luZ2xlRGV2aWNlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGVuZFRpbWU6IE9iamVjdCxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29uUmVuZGVyZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiZGF0YUNoYW5nZWQoZGF0YSwgZW5kVGltZSwgaXNTaW5nbGVEZXZpY2UpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIF9vblJlbmRlcmVkQ2hhbmdlZChyZW5kZXJlZCkge1xuICAgIGlmIChyZW5kZXJlZCkgdGhpcy5hbmltYXRlSGVpZ2h0KCk7XG4gIH1cblxuICBhbmltYXRlSGVpZ2h0KCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSB0aGlzLiQuY2hhcnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLnVuaXQ7XG4gICAgY29uc3QgZGV2aWNlU3RhdGVzID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRhdGFzZXRzID0gW107XG4gICAgbGV0IGVuZFRpbWU7XG5cbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGV2aWNlU3RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhZmVQYXJzZUZsb2F0KHZhbHVlKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIHJldHVybiBpc0Zpbml0ZShwYXJzZWQpID8gcGFyc2VkIDogbnVsbDtcbiAgICB9XG5cbiAgICBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgLy8gR2V0IHRoZSBoaWdoZXN0IGRhdGUgZnJvbSB0aGUgbGFzdCBkYXRlIG9mIGVhY2ggZGV2aWNlXG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBkZXZpY2VTdGF0ZXMubWFwKFxuICAgICAgICAgICAgKGRldlN0cykgPT5cbiAgICAgICAgICAgICAgbmV3IERhdGUoZGV2U3RzLnN0YXRlc1tkZXZTdHMuc3RhdGVzLmxlbmd0aCAtIDFdLmxhc3RfY2hhbmdlZClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgZGV2aWNlU3RhdGVzLmZvckVhY2goKHN0YXRlcykgPT4ge1xuICAgICAgY29uc3QgZG9tYWluID0gc3RhdGVzLmRvbWFpbjtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tzdGF0ZXMuZW50aXR5X2lkXSB8fCBzdGF0ZXMubmFtZTtcbiAgICAgIC8vIGFycmF5IGNvbnRhaW5pbmcgW3ZhbHVlMSwgdmFsdWUyLCBldGNdXG4gICAgICBsZXQgcHJldlZhbHVlcztcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZnVuY3Rpb24gcHVzaERhdGEodGltZXN0YW1wLCBkYXRhdmFsdWVzKSB7XG4gICAgICAgIGlmICghZGF0YXZhbHVlcykgcmV0dXJuO1xuICAgICAgICBpZiAodGltZXN0YW1wID4gZW5kVGltZSkge1xuICAgICAgICAgIC8vIERyb3AgZGF0YXBvaW50cyB0aGF0IGFyZSBhZnRlciB0aGUgcmVxdWVzdGVkIGVuZFRpbWUuIFRoaXMgY291bGQgaGFwcGVuIGlmXG4gICAgICAgICAgLy8gZW5kVGltZSBpcyBcIm5vd1wiIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICBkLmRhdGEucHVzaCh7IHg6IHRpbWVzdGFtcCwgeTogZGF0YXZhbHVlc1tpXSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZWYWx1ZXMgPSBkYXRhdmFsdWVzO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRDb2x1bW4obmFtZVksIHN0ZXAsIGZpbGwpIHtcbiAgICAgICAgbGV0IGRhdGFGaWxsID0gZmFsc2U7XG4gICAgICAgIGxldCBkYXRhU3RlcCA9IGZhbHNlO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgIGRhdGFGaWxsID0gXCJvcmlnaW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgIGRhdGFTdGVwID0gXCJiZWZvcmVcIjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBuYW1lWSxcbiAgICAgICAgICBmaWxsOiBkYXRhRmlsbCxcbiAgICAgICAgICBzdGVwcGVkTGluZTogZGF0YVN0ZXAsXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgdW5pdFRleHQ6IHVuaXQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGRvbWFpbiA9PT0gXCJ0aGVybW9zdGF0XCIgfHxcbiAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiB8fFxuICAgICAgICBkb21haW4gPT09IFwid2F0ZXJfaGVhdGVyXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBoYXNIdmFjQWN0aW9uID0gc3RhdGVzLnN0YXRlcy5zb21lKFxuICAgICAgICAgIChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcyAmJiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXNIZWF0aW5nID1cbiAgICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiICYmIGhhc0h2YWNBY3Rpb25cbiAgICAgICAgICAgID8gKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uID09PSBcImhlYXRpbmdcIlxuICAgICAgICAgICAgOiAoc3RhdGUpID0+IHN0YXRlLnN0YXRlID09PSBcImhlYXRcIjtcbiAgICAgICAgY29uc3QgaXNDb29saW5nID1cbiAgICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiICYmIGhhc0h2YWNBY3Rpb25cbiAgICAgICAgICAgID8gKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uID09PSBcImNvb2xpbmdcIlxuICAgICAgICAgICAgOiAoc3RhdGUpID0+IHN0YXRlLnN0YXRlID09PSBcImNvb2xcIjtcblxuICAgICAgICBjb25zdCBoYXNIZWF0ID0gc3RhdGVzLnN0YXRlcy5zb21lKGlzSGVhdGluZyk7XG4gICAgICAgIGNvbnN0IGhhc0Nvb2wgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoaXNDb29saW5nKTtcbiAgICAgICAgLy8gV2UgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZXJtb3N0YXRzIHRoYXQgaGF2ZSBhIHRhcmdldCB0ZW1wZXJhdHVyZVxuICAgICAgICAvLyByYW5nZSB2ZXJzdXMgb25lcyB0aGF0IGhhdmUganVzdCBhIHRhcmdldCB0ZW1wZXJhdHVyZVxuXG4gICAgICAgIC8vIFVzaW5nIHN0ZXAgY2hhcnQgYnkgc3RlcC1iZWZvcmUgc28gbWFudWFsbHkgaW50ZXJwb2xhdGlvbiBub3QgbmVlZGVkLlxuICAgICAgICBjb25zdCBoYXNUYXJnZXRSYW5nZSA9IHN0YXRlcy5zdGF0ZXMuc29tZShcbiAgICAgICAgICAoc3RhdGUpID0+XG4gICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT09XG4gICAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93XG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgIGAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5jYXJkLmNsaW1hdGUuY3VycmVudF90ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgKX1gLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5oZWF0aW5nXCIsIFwibmFtZVwiLCBuYW1lKX1gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFRoZSBcImhlYXRpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ29vbCkge1xuICAgICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICAgIGAke3RoaXMub3BwLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmNvb2xpbmdcIiwgXCJuYW1lXCIsIG5hbWUpfWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gVGhlIFwiY29vbGluZ1wiIHNlcmllcyB1c2VzIHN0ZXBwZWRBcmVhIHRvIHNoYWRlIHRoZSBhcmVhIGJlbG93IHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gdGVtcGVyYXR1cmUgd2hlbiB0aGUgdGhlcm1vc3RhdCBpcyBjYWxsaW5nIGZvciBoZWF0LlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc1RhcmdldFJhbmdlKSB7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZV9tb2RlXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBcIm1vZGVcIixcbiAgICAgICAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuaGlnaFwiKVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZV9tb2RlXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBcIm1vZGVcIixcbiAgICAgICAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUubG93XCIpXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X3RlbXBlcmF0dXJlX2VudGl0eVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZXMuc3RhdGVzLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgY3VyVGVtcCA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZSk7XG4gICAgICAgICAgY29uc3Qgc2VyaWVzID0gW2N1clRlbXBdO1xuICAgICAgICAgIGlmIChoYXNIZWF0KSB7XG4gICAgICAgICAgICBzZXJpZXMucHVzaChpc0hlYXRpbmcoc3RhdGUpID8gY3VyVGVtcCA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzQ29vbCkge1xuICAgICAgICAgICAgc2VyaWVzLnB1c2goaXNDb29saW5nKHN0YXRlKSA/IGN1clRlbXAgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc1RhcmdldFJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRIaWdoID0gc2FmZVBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldExvdyA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93KTtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKHRhcmdldEhpZ2gsIHRhcmdldExvdyk7XG4gICAgICAgICAgICBwdXNoRGF0YShuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpLCBzZXJpZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlKTtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICBwdXNoRGF0YShuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpLCBzZXJpZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPbmx5IGRpc2FibGUgaW50ZXJwb2xhdGlvbiBmb3Igc2Vuc29yc1xuICAgICAgICBjb25zdCBpc1N0ZXAgPSBkb21haW4gPT09IFwic2Vuc29yXCI7XG4gICAgICAgIGFkZENvbHVtbihuYW1lLCBpc1N0ZXApO1xuXG4gICAgICAgIGxldCBsYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdERhdGUgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdE51bGxEYXRlID0gbnVsbDtcblxuICAgICAgICAvLyBQcm9jZXNzIGNoYXJ0IGRhdGEuXG4gICAgICAgIC8vIFdoZW4gc3RhdGUgaXMgYHVua25vd25gLCBjYWxjdWxhdGUgdGhlIHZhbHVlIGFuZCBicmVhayB0aGUgbGluZS5cbiAgICAgICAgc3RhdGVzLnN0YXRlcy5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuc3RhdGUpO1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBsYXN0TnVsbERhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0TnVsbERhdGVUaW1lID0gbGFzdE51bGxEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXRlVGltZSA9IGxhc3REYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRtcFZhbHVlID1cbiAgICAgICAgICAgICAgKHZhbHVlIC0gbGFzdFZhbHVlKSAqXG4gICAgICAgICAgICAgICAgKChsYXN0TnVsbERhdGVUaW1lIC0gbGFzdERhdGVUaW1lKSAvXG4gICAgICAgICAgICAgICAgICAoZGF0ZVRpbWUgLSBsYXN0RGF0ZVRpbWUpKSArXG4gICAgICAgICAgICAgIGxhc3RWYWx1ZTtcbiAgICAgICAgICAgIHB1c2hEYXRhKGxhc3ROdWxsRGF0ZSwgW3RtcFZhbHVlXSk7XG4gICAgICAgICAgICBwdXNoRGF0YShuZXcgRGF0ZShsYXN0TnVsbERhdGVUaW1lICsgMSksIFtudWxsXSk7XG4gICAgICAgICAgICBwdXNoRGF0YShkYXRlLCBbdmFsdWVdKTtcbiAgICAgICAgICAgIGxhc3REYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgbGFzdE51bGxEYXRlID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIGxhc3ROdWxsRGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHVzaERhdGEoZGF0ZSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICBsYXN0RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdmFsdWUgPT09IG51bGwgJiZcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgbGFzdFZhbHVlICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPSBkYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhbiBlbnRyeSBmb3IgZmluYWwgdmFsdWVzXG4gICAgICBwdXNoRGF0YShlbmRUaW1lLCBwcmV2VmFsdWVzLCBmYWxzZSk7XG5cbiAgICAgIC8vIENvbmNhdCB0d28gYXJyYXlzXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShkYXRhc2V0cywgZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtYXRUb29sdGlwVGl0bGUgPSAoaXRlbXMsIGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1swXTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRhLmRhdGFzZXRzW2l0ZW0uZGF0YXNldEluZGV4XS5kYXRhW2l0ZW0uaW5kZXhdLng7XG5cbiAgICAgIHJldHVybiBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzKGRhdGUsIHRoaXMub3BwLmxhbmd1YWdlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICB1bml0OiB1bml0LFxuICAgICAgbGVnZW5kOiAhdGhpcy5pc1NpbmdsZURldmljZSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZWFjaFwiLFxuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgdGl0bGU6IGZvcm1hdFRvb2x0aXBUaXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVhY2hcIixcbiAgICAgICAgfSxcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgdGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIGhpdFJhZGl1czogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgZmlsbGVyOiB7XG4gICAgICAgICAgICBwcm9wYWdhdGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW10sXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IGNoYXJ0T3B0aW9ucztcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXCIsIFN0YXRlSGlzdG9yeUNoYXJ0TGluZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2VudGl0eS9vcC1jaGFydC1iYXNlXCI7XG5cbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lV2l0aFNlY29uZHMgfSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRUaW1lbGluZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtyZW5kZXJlZF0pIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgb3AtY2hhcnQtYmFzZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8b3AtY2hhcnQtYmFzZVxuICAgICAgICBkYXRhPVwiW1tjaGFydERhdGFdXVwiXG4gICAgICAgIHJlbmRlcmVkPVwie3tyZW5kZXJlZH19XCJcbiAgICAgICAgcnRsPVwie3tydGx9fVwiXG4gICAgICA+PC9vcC1jaGFydC1iYXNlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgY2hhcnREYXRhOiBPYmplY3QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBuYW1lczogT2JqZWN0LFxuICAgICAgbm9TaW5nbGU6IEJvb2xlYW4sXG4gICAgICBlbmRUaW1lOiBEYXRlLFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwob3BwKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGxvY2FsaXplLCBsYW5ndWFnZSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHN0YXRpY0NvbG9ycyA9IHtcbiAgICAgIG9uOiAxLFxuICAgICAgb2ZmOiAwLFxuICAgICAgdW5hdmFpbGFibGU6IFwiI2EwYTBhMFwiLFxuICAgICAgdW5rbm93bjogXCIjNjA2MDYwXCIsXG4gICAgICBpZGxlOiAyLFxuICAgIH07XG4gICAgbGV0IHN0YXRlSGlzdG9yeSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgICBzdGF0ZUhpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgIChtaW5UaW1lLCBzdGF0ZUluZm8pID0+XG4gICAgICAgICAgTWF0aC5taW4obWluVGltZSwgbmV3IERhdGUoc3RhdGVJbmZvLmRhdGFbMF0ubGFzdF9jaGFuZ2VkKSksXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gZW5kIHRpbWUgaXMgTWF0aC5tYXgoc3RhcnRUaW1lLCBsYXN0X2V2ZW50KVxuICAgIGxldCBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgICAgKG1heFRpbWUsIHN0YXRlSW5mbykgPT5cbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICBtYXhUaW1lLFxuICAgICAgICAgICAgICBuZXcgRGF0ZShzdGF0ZUluZm8uZGF0YVtzdGF0ZUluZm8uZGF0YS5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHN0YXJ0VGltZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIC8vIHN0YXRlSGlzdG9yeSBpcyBhIGxpc3Qgb2YgbGlzdHMgb2Ygc29ydGVkIHN0YXRlIG9iamVjdHNcbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgICAgbGV0IG5ld0xhc3RDaGFuZ2VkO1xuICAgICAgbGV0IHByZXZTdGF0ZSA9IG51bGw7XG4gICAgICBsZXQgbG9jU3RhdGUgPSBudWxsO1xuICAgICAgbGV0IHByZXZMYXN0Q2hhbmdlZCA9IHN0YXJ0VGltZTtcbiAgICAgIGNvbnN0IGVudGl0eURpc3BsYXkgPSBuYW1lc1tzdGF0ZUluZm8uZW50aXR5X2lkXSB8fCBzdGF0ZUluZm8ubmFtZTtcblxuICAgICAgY29uc3QgZGF0YVJvdyA9IFtdO1xuICAgICAgc3RhdGVJbmZvLmRhdGEuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIGNvbnN0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1N0YXRlID09PSBcIlwiKSB7XG4gICAgICAgICAgbmV3U3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lU3RhbXAgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgLy8gRHJvcCBkYXRhcG9pbnRzIHRoYXQgYXJlIGFmdGVyIHRoZSByZXF1ZXN0ZWQgZW5kVGltZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWZcbiAgICAgICAgICAvLyBlbmRUaW1lIGlzICdub3cnIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlN0YXRlICE9PSBudWxsICYmIG5ld1N0YXRlICE9PSBwcmV2U3RhdGUpIHtcbiAgICAgICAgICBuZXdMYXN0Q2hhbmdlZCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG5cbiAgICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgbmV3TGFzdENoYW5nZWQsIGxvY1N0YXRlLCBwcmV2U3RhdGVdKTtcblxuICAgICAgICAgIHByZXZTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgIGxvY1N0YXRlID0gc3RhdGUuc3RhdGVfbG9jYWxpemU7XG4gICAgICAgICAgcHJldkxhc3RDaGFuZ2VkID0gbmV3TGFzdENoYW5nZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgcHJldlN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgbG9jU3RhdGUgPSBzdGF0ZS5zdGF0ZV9sb2NhbGl6ZTtcbiAgICAgICAgICBwcmV2TGFzdENoYW5nZWQgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgZW5kVGltZSwgbG9jU3RhdGUsIHByZXZTdGF0ZV0pO1xuICAgICAgfVxuICAgICAgZGF0YXNldHMucHVzaCh7IGRhdGE6IGRhdGFSb3cgfSk7XG4gICAgICBsYWJlbHMucHVzaChlbnRpdHlEaXNwbGF5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBMYWJlbCA9IChpdGVtLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhLmRhdGFzZXRzW2l0ZW0uZGF0YXNldEluZGV4XS5kYXRhW2l0ZW0uaW5kZXhdO1xuXG4gICAgICBjb25zdCBzdGFydCA9IGZvcm1hdERhdGVUaW1lV2l0aFNlY29uZHModmFsdWVzWzBdLCB0aGlzLm9wcC5sYW5ndWFnZSk7XG4gICAgICBjb25zdCBlbmQgPSBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzKHZhbHVlc1sxXSwgdGhpcy5vcHAubGFuZ3VhZ2UpO1xuICAgICAgY29uc3Qgc3RhdGUgPSB2YWx1ZXNbMl07XG5cbiAgICAgIHJldHVybiBbc3RhdGUsIHN0YXJ0LCBlbmRdO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcInRpbWVsaW5lXCIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBsYWJlbDogZm9ybWF0VG9vbHRpcExhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhZnRlclNldERpbWVuc2lvbnM6ICh5YXhlKSA9PiB7XG4gICAgICAgICAgICAgICAgeWF4ZS5tYXhXaWR0aCA9IHlheGUuY2hhcnQud2lkdGggKiAwLjE4O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fY29tcHV0ZVJUTCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgc3RhdGljQ29sb3JzOiBzdGF0aWNDb2xvcnMsXG4gICAgICAgIHN0YXRpY0NvbG9ySW5kZXg6IDMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cblxuICBfY29tcHV0ZVJUTChvcHApIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChvcHApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwic3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVwiLFxuICBTdGF0ZUhpc3RvcnlDaGFydFRpbWVsaW5lXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyogaGVpZ2h0IG9mIHNpbmdsZSB0aW1lbGluZSBjaGFydCA9IDU4cHggKi9cbiAgICAgICAgICBtaW4taGVpZ2h0OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGNsYXNzPVwiaW5mb1wiXG4gICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmdEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLmxvYWRpbmdfaGlzdG9yeScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBjbGFzcz1cImluZm9cIlxuICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLm5vX2hpc3RvcnlfZm91bmQnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aF1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXG4gICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgZGF0YT1cIltbaGlzdG9yeURhdGEudGltZWxpbmVdXVwiXG4gICAgICAgICAgZW5kLXRpbWU9XCJbW19jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93LCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICAgICAgbm8tc2luZ2xlPVwiW1tub1NpbmdsZV1dXCJcbiAgICAgICAgICBuYW1lcz1cIltbbmFtZXNdXVwiXG4gICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2hpc3RvcnlEYXRhLmxpbmVdXVwiPlxuICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXG4gICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgICAgdW5pdD1cIltbaXRlbS51bml0XV1cIlxuICAgICAgICAgIGRhdGE9XCJbW2l0ZW0uZGF0YV1dXCJcbiAgICAgICAgICBpZGVudGlmaWVyPVwiW1tpdGVtLmlkZW50aWZpZXJdXVwiXG4gICAgICAgICAgaXMtc2luZ2xlLWRldmljZT1cIltbX2NvbXB1dGVJc1NpbmdsZUxpbmVDaGFydChpdGVtLmRhdGEsIG5vU2luZ2xlKV1dXCJcbiAgICAgICAgICBlbmQtdGltZT1cIltbX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3csIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgICAgICBuYW1lcz1cIltbbmFtZXNdXVwiXG4gICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICBoaXN0b3J5RGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG5cbiAgICAgIGlzTG9hZGluZ0RhdGE6IEJvb2xlYW4sXG5cbiAgICAgIGVuZFRpbWU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgdXBUb05vdzogQm9vbGVhbixcbiAgICAgIG5vU2luZ2xlOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZUlzU2luZ2xlTGluZUNoYXJ0KGRhdGEsIG5vU2luZ2xlKSB7XG4gICAgcmV0dXJuICFub1NpbmdsZSAmJiBkYXRhICYmIGRhdGEubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKSB7XG4gICAgY29uc3QgaGlzdG9yeURhdGFFbXB0eSA9XG4gICAgICAhaGlzdG9yeURhdGEgfHxcbiAgICAgICFoaXN0b3J5RGF0YS50aW1lbGluZSB8fFxuICAgICAgIWhpc3RvcnlEYXRhLmxpbmUgfHxcbiAgICAgIChoaXN0b3J5RGF0YS50aW1lbGluZS5sZW5ndGggPT09IDAgJiYgaGlzdG9yeURhdGEubGluZS5sZW5ndGggPT09IDApO1xuICAgIHJldHVybiAhaXNMb2FkaW5nRGF0YSAmJiBoaXN0b3J5RGF0YUVtcHR5O1xuICB9XG5cbiAgX2NvbXB1dGVJc0xvYWRpbmcoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIGlzTG9hZGluZyAmJiAhdGhpcy5oaXN0b3J5RGF0YTtcbiAgfVxuXG4gIF9jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93KSB7XG4gICAgLy8gV2UgZG9uJ3QgcmVhbGx5IGNhcmUgYWJvdXQgdGhlIHZhbHVlIG9mIGhpc3RvcnlEYXRhLCBidXQgaWYgaXQgY2hhbmdlIHdlIHdhbnQgdG8gdXBkYXRlXG4gICAgLy8gZW5kVGltZS5cbiAgICByZXR1cm4gdXBUb05vdyA/IG5ldyBEYXRlKCkgOiBlbmRUaW1lO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0c1wiLCBTdGF0ZUhpc3RvcnlDaGFydHMpO1xuIiwiaW1wb3J0IHtcbiAgY29tcHV0ZUhpc3RvcnksXG4gIGZldGNoUmVjZW50LFxuICBIaXN0b3J5UmVzdWx0LFxuICBUaW1lbGluZUVudGl0eSxcbiAgTGluZUNoYXJ0VW5pdCxcbn0gZnJvbSBcIi4vaGlzdG9yeVwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVDb25maWcge1xuICByZWZyZXNoOiBudW1iZXI7XG4gIGNhY2hlS2V5OiBzdHJpbmc7XG4gIGhvdXJzVG9TaG93OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWNoZWRSZXN1bHRzIHtcbiAgcHJvbTogUHJvbWlzZTxIaXN0b3J5UmVzdWx0PjtcbiAgc3RhcnRUaW1lOiBEYXRlO1xuICBlbmRUaW1lOiBEYXRlO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBIaXN0b3J5UmVzdWx0O1xufVxuXG4vLyBUaGlzIGlzIGEgZGlmZmVyZW50IGludGVyZmFjZSwgYSBkaWZmZXJlbnQgY2FjaGUgOihcbmludGVyZmFjZSBSZWNlbnRDYWNoZVJlc3VsdHMge1xuICBjcmVhdGVkOiBudW1iZXI7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIGRhdGE6IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG59XG5cbmNvbnN0IFJFQ0VOVF9USFJFU0hPTEQgPSA2MDAwMDsgLy8gMSBtaW51dGVcbmNvbnN0IFJFQ0VOVF9DQUNIRTogeyBbY2FjaGVLZXk6IHN0cmluZ106IFJlY2VudENhY2hlUmVzdWx0cyB9ID0ge307XG5jb25zdCBzdGF0ZUhpc3RvcnlDYWNoZTogeyBbY2FjaGVLZXk6IHN0cmluZ106IENhY2hlZFJlc3VsdHMgfSA9IHt9O1xuXG4vLyBDYWNoZWQgdHlwZSAxIHVuY3Rpb24uIFdpdGhvdXQgY2FjaGUgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGdldFJlY2VudCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBjYWNoZUtleSA9IGVudGl0eUlkO1xuICBjb25zdCBjYWNoZSA9IFJFQ0VOVF9DQUNIRVtjYWNoZUtleV07XG5cbiAgaWYgKFxuICAgIGNhY2hlICYmXG4gICAgRGF0ZS5ub3coKSAtIGNhY2hlLmNyZWF0ZWQgPCBSRUNFTlRfVEhSRVNIT0xEICYmXG4gICAgY2FjaGUubGFuZ3VhZ2UgPT09IGxhbmd1YWdlXG4gICkge1xuICAgIHJldHVybiBjYWNoZS5kYXRhO1xuICB9XG5cbiAgY29uc3QgcHJvbSA9IGZldGNoUmVjZW50KG9wcCwgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbihcbiAgICAoc3RhdGVIaXN0b3J5KSA9PiBjb21wdXRlSGlzdG9yeShvcHAsIHN0YXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKSxcbiAgICAoZXJyKSA9PiB7XG4gICAgICBkZWxldGUgUkVDRU5UX0NBQ0hFW2VudGl0eUlkXTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICk7XG5cbiAgUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XSA9IHtcbiAgICBjcmVhdGVkOiBEYXRlLm5vdygpLFxuICAgIGxhbmd1YWdlLFxuICAgIGRhdGE6IHByb20sXG4gIH07XG4gIHJldHVybiBwcm9tO1xufTtcblxuLy8gQ2FjaGUgdHlwZSAyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGdldEVtcHR5Q2FjaGUoXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogQ2FjaGVkUmVzdWx0cyB7XG4gIHJldHVybiB7XG4gICAgcHJvbTogUHJvbWlzZS5yZXNvbHZlKHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9KSxcbiAgICBsYW5ndWFnZSxcbiAgICBzdGFydFRpbWUsXG4gICAgZW5kVGltZSxcbiAgICBkYXRhOiB7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudFdpdGhDYWNoZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBjYWNoZUNvbmZpZzogQ2FjaGVDb25maWcsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBjYWNoZUtleSA9IGNhY2hlQ29uZmlnLmNhY2hlS2V5O1xuICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoZW5kVGltZSk7XG4gIHN0YXJ0VGltZS5zZXRIb3VycyhzdGFydFRpbWUuZ2V0SG91cnMoKSAtIGNhY2hlQ29uZmlnLmhvdXJzVG9TaG93KTtcbiAgbGV0IHRvRmV0Y2hTdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gIGxldCBhcHBlbmRpbmdUb0NhY2hlID0gZmFsc2U7XG5cbiAgbGV0IGNhY2hlID0gc3RhdGVIaXN0b3J5Q2FjaGVbY2FjaGVLZXldO1xuICBpZiAoXG4gICAgY2FjaGUgJiZcbiAgICB0b0ZldGNoU3RhcnRUaW1lID49IGNhY2hlLnN0YXJ0VGltZSAmJlxuICAgIHRvRmV0Y2hTdGFydFRpbWUgPD0gY2FjaGUuZW5kVGltZSAmJlxuICAgIGNhY2hlLmxhbmd1YWdlID09PSBsYW5ndWFnZVxuICApIHtcbiAgICB0b0ZldGNoU3RhcnRUaW1lID0gY2FjaGUuZW5kVGltZTtcbiAgICBhcHBlbmRpbmdUb0NhY2hlID0gdHJ1ZTtcbiAgICAvLyBUaGlzIHByZXR0eSBtdWNoIG5ldmVyIGhhcHBlbnMgYXMgZW5kVGltZSBpcyB1c3VhbGx5IHNldCB0byBub3dcbiAgICBpZiAoZW5kVGltZSA8PSBjYWNoZS5lbmRUaW1lKSB7XG4gICAgICByZXR1cm4gY2FjaGUucHJvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUgPSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV0gPSBnZXRFbXB0eUNhY2hlKFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzdGFydFRpbWUsXG4gICAgICBlbmRUaW1lXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGN1ckNhY2hlUHJvbSA9IGNhY2hlLnByb207XG5cbiAgY29uc3QgZ2VuUHJvbSA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgZmV0Y2hlZEhpc3Rvcnk6IE9wcEVudGl0eVtdW107XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgY3VyQ2FjaGVQcm9tLFxuICAgICAgICBmZXRjaFJlY2VudChvcHAsIGVudGl0eUlkLCB0b0ZldGNoU3RhcnRUaW1lLCBlbmRUaW1lLCBhcHBlbmRpbmdUb0NhY2hlKSxcbiAgICAgIF0pO1xuICAgICAgZmV0Y2hlZEhpc3RvcnkgPSByZXN1bHRzWzFdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVsZXRlIHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVIaXN0b3J5ID0gY29tcHV0ZUhpc3RvcnkoXG4gICAgICBvcHAsXG4gICAgICBmZXRjaGVkSGlzdG9yeSxcbiAgICAgIGxvY2FsaXplLFxuICAgICAgbGFuZ3VhZ2VcbiAgICApO1xuICAgIGlmIChhcHBlbmRpbmdUb0NhY2hlKSB7XG4gICAgICBtZXJnZUxpbmUoc3RhdGVIaXN0b3J5LmxpbmUsIGNhY2hlLmRhdGEubGluZSk7XG4gICAgICBtZXJnZVRpbWVsaW5lKHN0YXRlSGlzdG9yeS50aW1lbGluZSwgY2FjaGUuZGF0YS50aW1lbGluZSk7XG4gICAgICBwcnVuZVN0YXJ0VGltZShzdGFydFRpbWUsIGNhY2hlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5kYXRhID0gc3RhdGVIaXN0b3J5O1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGUuZGF0YTtcbiAgfTtcblxuICBjYWNoZS5wcm9tID0gZ2VuUHJvbSgpO1xuICBjYWNoZS5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gIGNhY2hlLmVuZFRpbWUgPSBlbmRUaW1lO1xuICByZXR1cm4gY2FjaGUucHJvbTtcbn07XG5cbmNvbnN0IG1lcmdlTGluZSA9IChcbiAgaGlzdG9yeUxpbmVzOiBMaW5lQ2hhcnRVbml0W10sXG4gIGNhY2hlTGluZXM6IExpbmVDaGFydFVuaXRbXVxuKSA9PiB7XG4gIGhpc3RvcnlMaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IGxpbmUudW5pdDtcbiAgICBjb25zdCBvbGRMaW5lID0gY2FjaGVMaW5lcy5maW5kKChjYWNoZUxpbmUpID0+IGNhY2hlTGluZS51bml0ID09PSB1bml0KTtcbiAgICBpZiAob2xkTGluZSkge1xuICAgICAgbGluZS5kYXRhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRFbnRpdHkgPSBvbGRMaW5lLmRhdGEuZmluZChcbiAgICAgICAgICAoY2FjaGVFbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQgPT09IGNhY2hlRW50aXR5LmVudGl0eV9pZFxuICAgICAgICApO1xuICAgICAgICBpZiAob2xkRW50aXR5KSB7XG4gICAgICAgICAgb2xkRW50aXR5LnN0YXRlcyA9IG9sZEVudGl0eS5zdGF0ZXMuY29uY2F0KGVudGl0eS5zdGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmUuZGF0YS5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZUxpbmVzLnB1c2gobGluZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1lcmdlVGltZWxpbmUgPSAoXG4gIGhpc3RvcnlUaW1lbGluZXM6IFRpbWVsaW5lRW50aXR5W10sXG4gIGNhY2hlVGltZWxpbmVzOiBUaW1lbGluZUVudGl0eVtdXG4pID0+IHtcbiAgaGlzdG9yeVRpbWVsaW5lcy5mb3JFYWNoKCh0aW1lbGluZSkgPT4ge1xuICAgIGNvbnN0IG9sZFRpbWVsaW5lID0gY2FjaGVUaW1lbGluZXMuZmluZChcbiAgICAgIChjYWNoZVRpbWVsaW5lKSA9PiBjYWNoZVRpbWVsaW5lLmVudGl0eV9pZCA9PT0gdGltZWxpbmUuZW50aXR5X2lkXG4gICAgKTtcbiAgICBpZiAob2xkVGltZWxpbmUpIHtcbiAgICAgIG9sZFRpbWVsaW5lLmRhdGEgPSBvbGRUaW1lbGluZS5kYXRhLmNvbmNhdCh0aW1lbGluZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVUaW1lbGluZXMucHVzaCh0aW1lbGluZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHBydW5lQXJyYXkgPSAob3JpZ2luYWxTdGFydFRpbWU6IERhdGUsIGFycikgPT4ge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgY29uc3QgY2hhbmdlZEFmdGVyU3RhcnRUaW1lID0gYXJyLmZpbmRJbmRleChcbiAgICAoc3RhdGUpID0+IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCkgPiBvcmlnaW5hbFN0YXJ0VGltZVxuICApO1xuICBpZiAoY2hhbmdlZEFmdGVyU3RhcnRUaW1lID09PSAwKSB7XG4gICAgLy8gSWYgYWxsIGNoYW5nZXMgaGFwcGVuZWQgYWZ0ZXIgb3JpZ2luYWxTdGFydFRpbWUgdGhlbiB3ZSBhcmUgZG9uZS5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLy8gSWYgYWxsIGNoYW5nZXMgaGFwcGVuZWQgYXQgb3IgYmVmb3JlIG9yaWdpbmFsU3RhcnRUaW1lLiBVc2UgbGFzdCBpbmRleC5cbiAgY29uc3QgdXBkYXRlSW5kZXggPVxuICAgIGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9PT0gLTEgPyBhcnIubGVuZ3RoIC0gMSA6IGNoYW5nZWRBZnRlclN0YXJ0VGltZSAtIDE7XG4gIGFyclt1cGRhdGVJbmRleF0ubGFzdF9jaGFuZ2VkID0gb3JpZ2luYWxTdGFydFRpbWU7XG4gIHJldHVybiBhcnIuc2xpY2UodXBkYXRlSW5kZXgpO1xufTtcblxuY29uc3QgcHJ1bmVTdGFydFRpbWUgPSAob3JpZ2luYWxTdGFydFRpbWU6IERhdGUsIGNhY2hlRGF0YTogSGlzdG9yeVJlc3VsdCkgPT4ge1xuICBjYWNoZURhdGEubGluZS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgbGluZS5kYXRhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgZW50aXR5LnN0YXRlcyA9IHBydW5lQXJyYXkob3JpZ2luYWxTdGFydFRpbWUsIGVudGl0eS5zdGF0ZXMpO1xuICAgIH0pO1xuICB9KTtcblxuICBjYWNoZURhdGEudGltZWxpbmUuZm9yRWFjaCgodGltZWxpbmUpID0+IHtcbiAgICB0aW1lbGluZS5kYXRhID0gcHJ1bmVBcnJheShvcmlnaW5hbFN0YXJ0VGltZSwgdGltZWxpbmUuZGF0YSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURpc3BsYXkgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcblxuY29uc3QgRE9NQUlOU19VU0VfTEFTVF9VUERBVEVEID0gW1wiY2xpbWF0ZVwiLCBcIndhdGVyX2hlYXRlclwiXTtcbmNvbnN0IExJTkVfQVRUUklCVVRFU19UT19LRUVQID0gW1xuICBcInRlbXBlcmF0dXJlXCIsXG4gIFwiY3VycmVudF90ZW1wZXJhdHVyZVwiLFxuICBcInRhcmdldF90ZW1wX2xvd1wiLFxuICBcInRhcmdldF90ZW1wX2hpZ2hcIixcbiAgXCJodmFjX2FjdGlvblwiLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRTdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogc3RyaW5nO1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRFbnRpdHkge1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgc3RhdGVzOiBMaW5lQ2hhcnRTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFVuaXQge1xuICB1bml0OiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgZGF0YTogTGluZUNoYXJ0RW50aXR5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVTdGF0ZSB7XG4gIHN0YXRlX2xvY2FsaXplOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgZGF0YTogVGltZWxpbmVTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlSZXN1bHQge1xuICBsaW5lOiBMaW5lQ2hhcnRVbml0W107XG4gIHRpbWVsaW5lOiBUaW1lbGluZUVudGl0eVtdO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNlbnQgPSAoXG4gIG9wcCxcbiAgZW50aXR5SWQsXG4gIHN0YXJ0VGltZSxcbiAgZW5kVGltZSxcbiAgc2tpcEluaXRpYWxTdGF0ZSA9IGZhbHNlXG4pOiBQcm9taXNlPE9wcEVudGl0eVtdW10+ID0+IHtcbiAgbGV0IHVybCA9IFwiaGlzdG9yeS9wZXJpb2RcIjtcbiAgaWYgKHN0YXJ0VGltZSkge1xuICAgIHVybCArPSBcIi9cIiArIHN0YXJ0VGltZS50b0lTT1N0cmluZygpO1xuICB9XG4gIHVybCArPSBcIj9maWx0ZXJfZW50aXR5X2lkPVwiICsgZW50aXR5SWQ7XG4gIGlmIChlbmRUaW1lKSB7XG4gICAgdXJsICs9IFwiJmVuZF90aW1lPVwiICsgZW5kVGltZS50b0lTT1N0cmluZygpO1xuICB9XG4gIGlmIChza2lwSW5pdGlhbFN0YXRlKSB7XG4gICAgdXJsICs9IFwiJnNraXBfaW5pdGlhbF9zdGF0ZVwiO1xuICB9XG5cbiAgcmV0dXJuIG9wcC5jYWxsQXBpKFwiR0VUXCIsIHVybCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogUHJvbWlzZTxPcHBFbnRpdHlbXVtdPiA9PiB7XG4gIHJldHVybiBvcHAuY2FsbEFwaShcbiAgICBcIkdFVFwiLFxuICAgIGBoaXN0b3J5L3BlcmlvZC8ke3N0YXJ0VGltZS50b0lTT1N0cmluZygpfT9lbmRfdGltZT0ke2VuZFRpbWUudG9JU09TdHJpbmcoKX1gXG4gICk7XG59O1xuXG5jb25zdCBlcXVhbFN0YXRlID0gKG9iajE6IExpbmVDaGFydFN0YXRlLCBvYmoyOiBMaW5lQ2hhcnRTdGF0ZSkgPT5cbiAgb2JqMS5zdGF0ZSA9PT0gb2JqMi5zdGF0ZSAmJlxuICAvLyBUaGV5IGVpdGhlciBib3RoIGhhdmUgYW4gYXR0cmlidXRlcyBvYmplY3Qgb3Igbm90XG4gICghb2JqMS5hdHRyaWJ1dGVzIHx8XG4gICAgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAuZXZlcnkoXG4gICAgICAoYXR0cikgPT4gb2JqMS5hdHRyaWJ1dGVzIVthdHRyXSA9PT0gb2JqMi5hdHRyaWJ1dGVzIVthdHRyXVxuICAgICkpO1xuXG5jb25zdCBwcm9jZXNzVGltZWxpbmVFbnRpdHkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXRlczogT3BwRW50aXR5W11cbik6IFRpbWVsaW5lRW50aXR5ID0+IHtcbiAgY29uc3QgZGF0YTogVGltZWxpbmVTdGF0ZVtdID0gW107XG5cbiAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwICYmIHN0YXRlLnN0YXRlID09PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uc3RhdGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGRhdGEucHVzaCh7XG4gICAgICBzdGF0ZV9sb2NhbGl6ZTogY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGUsIGxhbmd1YWdlKSxcbiAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGUubGFzdF9jaGFuZ2VkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlc1swXSksXG4gICAgZW50aXR5X2lkOiBzdGF0ZXNbMF0uZW50aXR5X2lkLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCBwcm9jZXNzTGluZUNoYXJ0RW50aXRpZXMgPSAoXG4gIHVuaXQsXG4gIGVudGl0aWVzOiBPcHBFbnRpdHlbXVtdXG4pOiBMaW5lQ2hhcnRVbml0ID0+IHtcbiAgY29uc3QgZGF0YTogTGluZUNoYXJ0RW50aXR5W10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHN0YXRlcyBvZiBlbnRpdGllcykge1xuICAgIGNvbnN0IGxhc3Q6IE9wcEVudGl0eSA9IHN0YXRlc1tzdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKGxhc3QpO1xuICAgIGNvbnN0IHByb2Nlc3NlZFN0YXRlczogTGluZUNoYXJ0U3RhdGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGxldCBwcm9jZXNzZWRTdGF0ZTogTGluZUNoYXJ0U3RhdGU7XG5cbiAgICAgIGlmIChET01BSU5TX1VTRV9MQVNUX1VQREFURUQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZS5sYXN0X3VwZGF0ZWQsXG4gICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIExJTkVfQVRUUklCVVRFU19UT19LRUVQKSB7XG4gICAgICAgICAgaWYgKGF0dHIgaW4gc3RhdGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcHJvY2Vzc2VkU3RhdGUuYXR0cmlidXRlcyFbYXR0cl0gPSBzdGF0ZS5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzZWRTdGF0ZXMubGVuZ3RoID4gMSAmJlxuICAgICAgICBlcXVhbFN0YXRlKFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSAmJlxuICAgICAgICBlcXVhbFN0YXRlKHByb2Nlc3NlZFN0YXRlLCBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDJdKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzZWRTdGF0ZXMucHVzaChwcm9jZXNzZWRTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIGRvbWFpbixcbiAgICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUobGFzdCksXG4gICAgICBlbnRpdHlfaWQ6IGxhc3QuZW50aXR5X2lkLFxuICAgICAgc3RhdGVzOiBwcm9jZXNzZWRTdGF0ZXMsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVuaXQsXG4gICAgaWRlbnRpZmllcjogZW50aXRpZXMubWFwKChzdGF0ZXMpID0+IHN0YXRlc1swXS5lbnRpdHlfaWQpLmpvaW4oXCJcIiksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlSGlzdG9yeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBzdGF0ZUhpc3Rvcnk6IE9wcEVudGl0eVtdW10sXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbik6IEhpc3RvcnlSZXN1bHQgPT4ge1xuICBjb25zdCBsaW5lQ2hhcnREZXZpY2VzOiB7IFt1bml0OiBzdHJpbmddOiBPcHBFbnRpdHlbXVtdIH0gPSB7fTtcbiAgY29uc3QgdGltZWxpbmVEZXZpY2VzOiBUaW1lbGluZUVudGl0eVtdID0gW107XG4gIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgcmV0dXJuIHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9O1xuICB9XG5cbiAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgIGlmIChzdGF0ZUluZm8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVXaXRoVW5pdCA9IHN0YXRlSW5mby5maW5kKFxuICAgICAgKHN0YXRlKSA9PiBcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIiBpbiBzdGF0ZS5hdHRyaWJ1dGVzXG4gICAgKTtcblxuICAgIGxldCB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc3RhdGVXaXRoVW5pdCkge1xuICAgICAgdW5pdCA9IHN0YXRlV2l0aFVuaXQuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlSW5mb1swXSkgPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgICB1bml0ID0gb3BwLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZTtcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZUluZm9bMF0pID09PSBcIndhdGVyX2hlYXRlclwiKSB7XG4gICAgICB1bml0ID0gb3BwLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZTtcbiAgICB9XG5cbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRpbWVsaW5lRGV2aWNlcy5wdXNoKFxuICAgICAgICBwcm9jZXNzVGltZWxpbmVFbnRpdHkobG9jYWxpemUsIGxhbmd1YWdlLCBzdGF0ZUluZm8pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodW5pdCBpbiBsaW5lQ2hhcnREZXZpY2VzKSB7XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdLnB1c2goc3RhdGVJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZUNoYXJ0RGV2aWNlc1t1bml0XSA9IFtzdGF0ZUluZm9dO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdW5pdFN0YXRlcyA9IE9iamVjdC5rZXlzKGxpbmVDaGFydERldmljZXMpLm1hcCgodW5pdCkgPT5cbiAgICBwcm9jZXNzTGluZUNoYXJ0RW50aXRpZXModW5pdCwgbGluZUNoYXJ0RGV2aWNlc1t1bml0XSlcbiAgKTtcblxuICByZXR1cm4geyBsaW5lOiB1bml0U3RhdGVzLCB0aW1lbGluZTogdGltZWxpbmVEZXZpY2VzIH07XG59O1xuIiwiaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVIaXN0b3J5LCBmZXRjaERhdGUgfSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRSZWNlbnQsIGdldFJlY2VudFdpdGhDYWNoZSB9IGZyb20gXCIuL2NhY2hlZC1oaXN0b3J5XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BTdGF0ZUhpc3RvcnlEYXRhIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIm9wcENoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlclR5cGU6IFN0cmluZyxcblxuICAgICAgY2FjaGVDb25maWc6IE9iamVjdCxcblxuICAgICAgc3RhcnRUaW1lOiBEYXRlLFxuICAgICAgZW5kVGltZTogRGF0ZSxcblxuICAgICAgZW50aXR5SWQ6IFN0cmluZyxcblxuICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiZmlsdGVyQ2hhbmdlZERlYm91bmNlcihmaWx0ZXJUeXBlLCBlbnRpdHlJZCwgc3RhcnRUaW1lLCBlbmRUaW1lLCBjYWNoZUNvbmZpZywgbG9jYWxpemUpXCIsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2VkRGVib3VuY2VyKFxuICAgICAgdGhpcy5maWx0ZXJUeXBlLFxuICAgICAgdGhpcy5lbnRpdHlJZCxcbiAgICAgIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgdGhpcy5lbmRUaW1lLFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZyxcbiAgICAgIHRoaXMubG9jYWxpemVcbiAgICApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBvcHBDaGFuZ2VkKG5ld09wcCwgb2xkT3BwKSB7XG4gICAgaWYgKCFvbGRPcHAgJiYgIXRoaXMuX21hZGVGaXJzdENhbGwpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZERlYm91bmNlcihcbiAgICAgICAgdGhpcy5maWx0ZXJUeXBlLFxuICAgICAgICB0aGlzLmVudGl0eUlkLFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSxcbiAgICAgICAgdGhpcy5lbmRUaW1lLFxuICAgICAgICB0aGlzLmNhY2hlQ29uZmlnLFxuICAgICAgICB0aGlzLmxvY2FsaXplXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckNoYW5nZWREZWJvdW5jZXIoLi4uYXJncykge1xuICAgIHRoaXMuX2RlYm91bmNlRmlsdGVyQ2hhbmdlZCA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlRmlsdGVyQ2hhbmdlZCxcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMCksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZCguLi5hcmdzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZmlsdGVyQ2hhbmdlZChcbiAgICBmaWx0ZXJUeXBlLFxuICAgIGVudGl0eUlkLFxuICAgIHN0YXJ0VGltZSxcbiAgICBlbmRUaW1lLFxuICAgIGNhY2hlQ29uZmlnLFxuICAgIGxvY2FsaXplXG4gICkge1xuICAgIGlmICghdGhpcy5vcHApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnICYmICFjYWNoZUNvbmZpZy5jYWNoZUtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hZGVGaXJzdENhbGwgPSB0cnVlO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5vcHAubGFuZ3VhZ2U7XG4gICAgbGV0IGRhdGE7XG5cbiAgICBpZiAoZmlsdGVyVHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgIGlmICghc3RhcnRUaW1lIHx8ICFlbmRUaW1lKSByZXR1cm47XG5cbiAgICAgIGRhdGEgPSBmZXRjaERhdGUodGhpcy5vcHAsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbigoZGF0ZUhpc3RvcnkpID0+XG4gICAgICAgIGNvbXB1dGVIaXN0b3J5KHRoaXMub3BwLCBkYXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwicmVjZW50LWVudGl0eVwiKSB7XG4gICAgICBpZiAoIWVudGl0eUlkKSByZXR1cm47XG4gICAgICBpZiAoY2FjaGVDb25maWcpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IGdldFJlY2VudChcbiAgICAgICAgICB0aGlzLm9wcCxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGRhdGEudGhlbigoc3RhdGVIaXN0b3J5KSA9PiB7XG4gICAgICB0aGlzLl9zZXREYXRhKHN0YXRlSGlzdG9yeSk7XG4gICAgICB0aGlzLl9zZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChlbnRpdHlJZCwgY2FjaGVDb25maWcsIGxvY2FsaXplLCBsYW5ndWFnZSkge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9yZWZyZXNoVGltZW91dElkKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY2FjaGVDb25maWcucmVmcmVzaCkge1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGdldFJlY2VudFdpdGhDYWNoZShcbiAgICAgICAgICB0aGlzLm9wcCxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApLnRoZW4oKHN0YXRlSGlzdG9yeSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldERhdGEoeyAuLi5zdGF0ZUhpc3RvcnkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgY2FjaGVDb25maWcucmVmcmVzaCAqIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVjZW50V2l0aENhY2hlKFxuICAgICAgdGhpcy5vcHAsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXN0YXRlLWhpc3RvcnktZGF0YVwiLCBPcFN0YXRlSGlzdG9yeURhdGEpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBeEJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb1VBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUEzbUJBO0FBQ0E7QUEybUJBOzs7Ozs7Ozs7Ozs7QUM3bkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFJQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFPQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQVVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBU0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQVpBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUE1Q0E7QUFrREE7QUFDQTtBQUNBO0FBRkE7QUF0REE7QUEyREE7QUFDQTtBQUNBO0FBdFhBO0FBQ0E7QUFzWEE7Ozs7Ozs7Ozs7OztBQ2hZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBaENBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOU1BO0FBQ0E7QUE4TUE7Ozs7Ozs7Ozs7OztBQzFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJHQTtBQUNBO0FBcUdBOzs7Ozs7Ozs7Ozs7QUMvR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcE9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQTRDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBdEJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQXJLQTtBQUNBO0FBcUtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=