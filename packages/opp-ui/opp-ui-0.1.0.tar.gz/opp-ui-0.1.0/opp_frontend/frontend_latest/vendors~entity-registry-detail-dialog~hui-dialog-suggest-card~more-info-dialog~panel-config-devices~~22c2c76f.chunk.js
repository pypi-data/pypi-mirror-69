(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~~22c2c76f"],{

/***/ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/***/ }),

/***/ "./node_modules/fecha/src/fecha.js":
/*!*****************************************!*\
  !*** ./node_modules/fecha/src/fecha.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;

var noop = function () {};

function regexEscape(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }

  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function (dateObj) {
    return dateObj.getDate();
  },
  DD: function (dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function (dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function (dateObj) {
    return dateObj.getDay();
  },
  dd: function (dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function (dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function (dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function (dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function (dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function (dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function (dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function (dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function (dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function (dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function (dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function (dateObj) {
    return dateObj.getHours();
  },
  HH: function (dateObj) {
    return pad(dateObj.getHours());
  },
  m: function (dateObj) {
    return dateObj.getMinutes();
  },
  mm: function (dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function (dateObj) {
    return dateObj.getSeconds();
  },
  ss: function (dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function (dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function (dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function (dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function (dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};
var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(),
        cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();

    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi),
        minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a; // Some common format strings

fecha.masks = {
  default: 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */

fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];
  var literals = []; // Make literals inactive by replacing them with ??

  mask = mask.replace(literal, function ($0, $1) {
    literals.push($1);
    return '@@@';
  }); // Apply formatting rules

  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  }); // Inline literal values back into the formatted value

  return mask.replace(/@@@/g, function () {
    return literals.shift();
  });
};
/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */


fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var literals = [];
  format = format.replace(literal, function ($0, $1) {
    literals.push($1);
    return '@@@';
  });
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  newFormat = newFormat.replace(/@@@/g, function () {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));

  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();

  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;

  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }

  return date;
};

/* harmony default export */ __webpack_exports__["default"] = (fecha);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35lbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZ35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWNvbmZpZy1kZXZpY2Vzfn4yMmMyYzc2Zi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmVjaGEvc3JjL2ZlY2hhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuQSBzZXQgb2YgbGF5b3V0IGNsYXNzZXMgdGhhdCBsZXQgeW91IHNwZWNpZnkgbGF5b3V0IHByb3BlcnRpZXMgZGlyZWN0bHkgaW5cbm1hcmt1cC4gWW91IG11c3QgaW5jbHVkZSB0aGlzIGZpbGUgaW4gZXZlcnkgZWxlbWVudCB0aGF0IG5lZWRzIHRvIHVzZSB0aGVtLlxuXG5TYW1wbGUgdXNlOlxuXG4gICAgaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlcy5qcyc7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAudGVzdCB7IHdpZHRoOiAxMDBweDsgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBjZW50ZXItY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0XCI+aG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyIGFsaWdubWVudDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG5UaGUgZm9sbG93aW5nIGltcG9ydHMgYXJlIGF2YWlsYWJsZTpcbiAtIGlyb24tZmxleFxuIC0gaXJvbi1mbGV4LXJldmVyc2VcbiAtIGlyb24tZmxleC1hbGlnbm1lbnRcbiAtIGlyb24tZmxleC1mYWN0b3JzXG4gLSBpcm9uLXBvc2l0aW9uaW5nXG4qL1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4vKiBNb3N0IGNvbW1vbiB1c2VkIGZsZXggc3R5bGVzKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAubGF5b3V0Lmhvcml6b250YWwsXG4gICAgICAubGF5b3V0LnZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmhvcml6b250YWwge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LnZlcnRpY2FsIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC53cmFwIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5uby13cmFwIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXIsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWp1c3RpZmllZCxcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4IHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtYXV0byB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LW5vbmUge1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBCYXNpYyBmbGV4Ym94IHJldmVyc2Ugc3R5bGVzICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1yZXZlcnNlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAubGF5b3V0Lmhvcml6b250YWwtcmV2ZXJzZSxcbiAgICAgIC5sYXlvdXQudmVydGljYWwtcmV2ZXJzZSB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC52ZXJ0aWNhbC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC53cmFwLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBGbGV4Ym94IGFsaWdubWVudCAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtYWxpZ25tZW50XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAvKipcbiAgICAgICAqIEFsaWdubWVudCBpbiBjcm9zcyBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0IHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXIsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5iYXNlbGluZSB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbm1lbnQgaW4gbWFpbiBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0LWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1qdXN0aWZpZWQsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5hcm91bmQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZWxmIGFsaWdubWVudC5cbiAgICAgICAqL1xuICAgICAgLnNlbGYtc3RhcnQge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1jZW50ZXIge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1lbmQge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1zdHJldGNoIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtYmFzZWxpbmUge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIG11bHRpLWxpbmUgYWxpZ25tZW50IGluIG1haW4gYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdGFydDsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZW5kOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYmV0d2Vlbi1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5OyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmFyb3VuZC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBkaXN0cmlidXRlOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBOb24tZmxleGJveCBwb3NpdGlvbmluZyBoZWxwZXIgc3R5bGVzICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1mYWN0b3JzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuZmxleCxcbiAgICAgIC5mbGV4LTEge1xuICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC0yIHtcbiAgICAgICAgLW1zLWZsZXg6IDI7XG4gICAgICAgIC13ZWJraXQtZmxleDogMjtcbiAgICAgICAgZmxleDogMjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMyB7XG4gICAgICAgIC1tcy1mbGV4OiAzO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDM7XG4gICAgICAgIGZsZXg6IDM7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTQge1xuICAgICAgICAtbXMtZmxleDogNDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA0O1xuICAgICAgICBmbGV4OiA0O1xuICAgICAgfVxuXG4gICAgICAuZmxleC01IHtcbiAgICAgICAgLW1zLWZsZXg6IDU7XG4gICAgICAgIC13ZWJraXQtZmxleDogNTtcbiAgICAgICAgZmxleDogNTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNiB7XG4gICAgICAgIC1tcy1mbGV4OiA2O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDY7XG4gICAgICAgIGZsZXg6IDY7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTcge1xuICAgICAgICAtbXMtZmxleDogNztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA3O1xuICAgICAgICBmbGV4OiA3O1xuICAgICAgfVxuXG4gICAgICAuZmxleC04IHtcbiAgICAgICAgLW1zLWZsZXg6IDg7XG4gICAgICAgIC13ZWJraXQtZmxleDogODtcbiAgICAgICAgZmxleDogODtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtOSB7XG4gICAgICAgIC1tcy1mbGV4OiA5O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDk7XG4gICAgICAgIGZsZXg6IDk7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTEwIHtcbiAgICAgICAgLW1zLWZsZXg6IDEwO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEwO1xuICAgICAgICBmbGV4OiAxMDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTEge1xuICAgICAgICAtbXMtZmxleDogMTE7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTE7XG4gICAgICAgIGZsZXg6IDExO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMiB7XG4gICAgICAgIC1tcy1mbGV4OiAxMjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMjtcbiAgICAgICAgZmxleDogMTI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1wb3NpdGlvbmluZ1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW52aXNpYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5yZWxhdGl2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBib2R5LmZ1bGxibGVlZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbCB7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC8qIGZpeGVkIHBvc2l0aW9uICovXG4gICAgICAuZml4ZWQtYm90dG9tLFxuICAgICAgLmZpeGVkLWxlZnQsXG4gICAgICAuZml4ZWQtcmlnaHQsXG4gICAgICAuZml4ZWQtdG9wIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLXJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtYm90dG9tIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLWxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iLCIvKipcbiAqIFBhcnNlIG9yIGZvcm1hdCBkYXRlc1xuICogQGNsYXNzIGZlY2hhXG4gKi9cbnZhciBmZWNoYSA9IHt9O1xudmFyIHRva2VuID0gL2R7MSw0fXxNezEsNH18WVkoPzpZWSk/fFN7MSwzfXxEb3xaWnwoW0hoTXNEbV0pXFwxP3xbYUFdfFwiW15cIl0qXCJ8J1teJ10qJy9nO1xudmFyIHR3b0RpZ2l0cyA9ICdcXFxcZFxcXFxkPyc7XG52YXIgdGhyZWVEaWdpdHMgPSAnXFxcXGR7M30nO1xudmFyIGZvdXJEaWdpdHMgPSAnXFxcXGR7NH0nO1xudmFyIHdvcmQgPSAnW15cXFxcc10rJztcbnZhciBsaXRlcmFsID0gL1xcWyhbXl0qPylcXF0vZ207XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC9bfFxcXFx7KClbXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBzaG9ydGVuKGFyciwgc0xlbikge1xuICB2YXIgbmV3QXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBuZXdBcnIucHVzaChhcnJbaV0uc3Vic3RyKDAsIHNMZW4pKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBtb250aFVwZGF0ZShhcnJOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciBpbmRleCA9IGkxOG5bYXJyTmFtZV0uaW5kZXhPZih2LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdi5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKH5pbmRleCkge1xuICAgICAgZC5tb250aCA9IGluZGV4O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gIHZhbCA9IFN0cmluZyh2YWwpO1xuICBsZW4gPSBsZW4gfHwgMjtcbiAgd2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHtcbiAgICB2YWwgPSAnMCcgKyB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xudmFyIG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbnZhciBtb250aE5hbWVzU2hvcnQgPSBzaG9ydGVuKG1vbnRoTmFtZXMsIDMpO1xudmFyIGRheU5hbWVzU2hvcnQgPSBzaG9ydGVuKGRheU5hbWVzLCAzKTtcbmZlY2hhLmkxOG4gPSB7XG4gIGRheU5hbWVzU2hvcnQ6IGRheU5hbWVzU2hvcnQsXG4gIGRheU5hbWVzOiBkYXlOYW1lcyxcbiAgbW9udGhOYW1lc1Nob3J0OiBtb250aE5hbWVzU2hvcnQsXG4gIG1vbnRoTmFtZXM6IG1vbnRoTmFtZXMsXG4gIGFtUG06IFsnYW0nLCAncG0nXSxcbiAgRG9GbjogZnVuY3Rpb24gRG9GbihEKSB7XG4gICAgcmV0dXJuIEQgKyBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bRCAlIDEwID4gMyA/IDAgOiAoRCAtIEQgJSAxMCAhPT0gMTApICogRCAlIDEwXTtcbiAgfVxufTtcblxudmFyIGZvcm1hdEZsYWdzID0ge1xuICBEOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF0ZSgpO1xuICB9LFxuICBERDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBEbzogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLkRvRm4oZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF5KCk7XG4gIH0sXG4gIGRkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldERheSgpKTtcbiAgfSxcbiAgZGRkOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4uZGF5TmFtZXNTaG9ydFtkYXRlT2JqLmdldERheSgpXTtcbiAgfSxcbiAgZGRkZDogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLmRheU5hbWVzW2RhdGVPYmouZ2V0RGF5KCldO1xuICB9LFxuICBNOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0TW9udGgoKSArIDE7XG4gIH0sXG4gIE1NOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1vbnRoKCkgKyAxKTtcbiAgfSxcbiAgTU1NOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4ubW9udGhOYW1lc1Nob3J0W2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIE1NTU06IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5tb250aE5hbWVzW2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIFlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChTdHJpbmcoZGF0ZU9iai5nZXRGdWxsWWVhcigpKSwgNCkuc3Vic3RyKDIpO1xuICB9LFxuICBZWVlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEZ1bGxZZWFyKCksIDQpO1xuICB9LFxuICBoOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyIHx8IDEyO1xuICB9LFxuICBoaDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRIb3VycygpICUgMTIgfHwgMTIpO1xuICB9LFxuICBIOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKTtcbiAgfSxcbiAgSEg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0SG91cnMoKSk7XG4gIH0sXG4gIG06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRNaW51dGVzKCk7XG4gIH0sXG4gIG1tOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1pbnV0ZXMoKSk7XG4gIH0sXG4gIHM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRTZWNvbmRzKCk7XG4gIH0sXG4gIHNzOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldFNlY29uZHMoKSk7XG4gIH0sXG4gIFM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRlT2JqLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKTtcbiAgfSxcbiAgU1M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKE1hdGgucm91bmQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSwgMik7XG4gIH0sXG4gIFNTUzogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSwgMyk7XG4gIH0sXG4gIGE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0gOiBpMThuLmFtUG1bMV07XG4gIH0sXG4gIEE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0udG9VcHBlckNhc2UoKSA6IGkxOG4uYW1QbVsxXS50b1VwcGVyQ2FzZSgpO1xuICB9LFxuICBaWjogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHZhciBvID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiAobyA+IDAgPyAnLScgOiAnKycpICsgcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMobykgLyA2MCkgKiAxMDAgKyBNYXRoLmFicyhvKSAlIDYwLCA0KTtcbiAgfVxufTtcblxudmFyIHBhcnNlRmxhZ3MgPSB7XG4gIEQ6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5kYXkgPSB2O1xuICB9XSxcbiAgRG86IFt0d29EaWdpdHMgKyB3b3JkLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuZGF5ID0gcGFyc2VJbnQodiwgMTApO1xuICB9XSxcbiAgTTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1vbnRoID0gdiAtIDE7XG4gIH1dLFxuICBZWTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgZGEgPSBuZXcgRGF0ZSgpLCBjZW50ID0gKygnJyArIGRhLmdldEZ1bGxZZWFyKCkpLnN1YnN0cigwLCAyKTtcbiAgICBkLnllYXIgPSAnJyArICh2ID4gNjggPyBjZW50IC0gMSA6IGNlbnQpICsgdjtcbiAgfV0sXG4gIGg6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5ob3VyID0gdjtcbiAgfV0sXG4gIG06IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taW51dGUgPSB2O1xuICB9XSxcbiAgczogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnNlY29uZCA9IHY7XG4gIH1dLFxuICBZWVlZOiBbZm91ckRpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnllYXIgPSB2O1xuICB9XSxcbiAgUzogWydcXFxcZCcsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDA7XG4gIH1dLFxuICBTUzogWydcXFxcZHsyfScsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDtcbiAgfV0sXG4gIFNTUzogW3RocmVlRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2O1xuICB9XSxcbiAgZDogW3R3b0RpZ2l0cywgbm9vcF0sXG4gIGRkZDogW3dvcmQsIG5vb3BdLFxuICBNTU06IFt3b3JkLCBtb250aFVwZGF0ZSgnbW9udGhOYW1lc1Nob3J0JyldLFxuICBNTU1NOiBbd29yZCwgbW9udGhVcGRhdGUoJ21vbnRoTmFtZXMnKV0sXG4gIGE6IFt3b3JkLCBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciB2YWwgPSB2LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzBdKSB7XG4gICAgICBkLmlzUG0gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzFdKSB7XG4gICAgICBkLmlzUG0gPSB0cnVlO1xuICAgIH1cbiAgfV0sXG4gIFpaOiBbJ1teXFxcXHNdKj9bXFxcXCtcXFxcLV1cXFxcZFxcXFxkOj9cXFxcZFxcXFxkfFteXFxcXHNdKj9aJywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgcGFydHMgPSAodiArICcnKS5tYXRjaCgvKFsrLV18XFxkXFxkKS9naSksIG1pbnV0ZXM7XG5cbiAgICBpZiAocGFydHMpIHtcbiAgICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcbiAgICAgIGQudGltZXpvbmVPZmZzZXQgPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cbiAgfV1cbn07XG5wYXJzZUZsYWdzLmRkID0gcGFyc2VGbGFncy5kO1xucGFyc2VGbGFncy5kZGRkID0gcGFyc2VGbGFncy5kZGQ7XG5wYXJzZUZsYWdzLkREID0gcGFyc2VGbGFncy5EO1xucGFyc2VGbGFncy5tbSA9IHBhcnNlRmxhZ3MubTtcbnBhcnNlRmxhZ3MuaGggPSBwYXJzZUZsYWdzLkggPSBwYXJzZUZsYWdzLkhIID0gcGFyc2VGbGFncy5oO1xucGFyc2VGbGFncy5NTSA9IHBhcnNlRmxhZ3MuTTtcbnBhcnNlRmxhZ3Muc3MgPSBwYXJzZUZsYWdzLnM7XG5wYXJzZUZsYWdzLkEgPSBwYXJzZUZsYWdzLmE7XG5cblxuLy8gU29tZSBjb21tb24gZm9ybWF0IHN0cmluZ3NcbmZlY2hhLm1hc2tzID0ge1xuICBkZWZhdWx0OiAnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzJyxcbiAgc2hvcnREYXRlOiAnTS9EL1lZJyxcbiAgbWVkaXVtRGF0ZTogJ01NTSBELCBZWVlZJyxcbiAgbG9uZ0RhdGU6ICdNTU1NIEQsIFlZWVknLFxuICBmdWxsRGF0ZTogJ2RkZGQsIE1NTU0gRCwgWVlZWScsXG4gIHNob3J0VGltZTogJ0hIOm1tJyxcbiAgbWVkaXVtVGltZTogJ0hIOm1tOnNzJyxcbiAgbG9uZ1RpbWU6ICdISDptbTpzcy5TU1MnXG59O1xuXG4vKioqXG4gKiBGb3JtYXQgYSBkYXRlXG4gKiBAbWV0aG9kIGZvcm1hdFxuICogQHBhcmFtIHtEYXRlfG51bWJlcn0gZGF0ZU9ialxuICogQHBhcmFtIHtzdHJpbmd9IG1hc2sgRm9ybWF0IG9mIHRoZSBkYXRlLCBpLmUuICdtbS1kZC15eScgb3IgJ3Nob3J0RGF0ZSdcbiAqL1xuZmVjaGEuZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGVPYmosIG1hc2ssIGkxOG5TZXR0aW5ncykge1xuICB2YXIgaTE4biA9IGkxOG5TZXR0aW5ncyB8fCBmZWNoYS5pMThuO1xuXG4gIGlmICh0eXBlb2YgZGF0ZU9iaiA9PT0gJ251bWJlcicpIHtcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZU9iaik7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGVPYmopICE9PSAnW29iamVjdCBEYXRlXScgfHwgaXNOYU4oZGF0ZU9iai5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIERhdGUgaW4gZmVjaGEuZm9ybWF0Jyk7XG4gIH1cblxuICBtYXNrID0gZmVjaGEubWFza3NbbWFza10gfHwgbWFzayB8fCBmZWNoYS5tYXNrc1snZGVmYXVsdCddO1xuXG4gIHZhciBsaXRlcmFscyA9IFtdO1xuXG4gIC8vIE1ha2UgbGl0ZXJhbHMgaW5hY3RpdmUgYnkgcmVwbGFjaW5nIHRoZW0gd2l0aCA/P1xuICBtYXNrID0gbWFzay5yZXBsYWNlKGxpdGVyYWwsIGZ1bmN0aW9uKCQwLCAkMSkge1xuICAgIGxpdGVyYWxzLnB1c2goJDEpO1xuICAgIHJldHVybiAnQEBAJztcbiAgfSk7XG4gIC8vIEFwcGx5IGZvcm1hdHRpbmcgcnVsZXNcbiAgbWFzayA9IG1hc2sucmVwbGFjZSh0b2tlbiwgZnVuY3Rpb24gKCQwKSB7XG4gICAgcmV0dXJuICQwIGluIGZvcm1hdEZsYWdzID8gZm9ybWF0RmxhZ3NbJDBdKGRhdGVPYmosIGkxOG4pIDogJDAuc2xpY2UoMSwgJDAubGVuZ3RoIC0gMSk7XG4gIH0pO1xuICAvLyBJbmxpbmUgbGl0ZXJhbCB2YWx1ZXMgYmFjayBpbnRvIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgcmV0dXJuIG1hc2sucmVwbGFjZSgvQEBAL2csIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsaXRlcmFscy5zaGlmdCgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUGFyc2UgYSBkYXRlIHN0cmluZyBpbnRvIGFuIG9iamVjdCwgY2hhbmdlcyAtIGludG8gL1xuICogQG1ldGhvZCBwYXJzZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHIgRGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgRGF0ZSBwYXJzZSBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfGJvb2xlYW59XG4gKi9cbmZlY2hhLnBhcnNlID0gZnVuY3Rpb24gKGRhdGVTdHIsIGZvcm1hdCwgaTE4blNldHRpbmdzKSB7XG4gIHZhciBpMThuID0gaTE4blNldHRpbmdzIHx8IGZlY2hhLmkxOG47XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGZvcm1hdCBpbiBmZWNoYS5wYXJzZScpO1xuICB9XG5cbiAgZm9ybWF0ID0gZmVjaGEubWFza3NbZm9ybWF0XSB8fCBmb3JtYXQ7XG5cbiAgLy8gQXZvaWQgcmVndWxhciBleHByZXNzaW9uIGRlbmlhbCBvZiBzZXJ2aWNlLCBmYWlsIGVhcmx5IGZvciByZWFsbHkgbG9uZyBzdHJpbmdzXG4gIC8vIGh0dHBzOi8vd3d3Lm93YXNwLm9yZy9pbmRleC5waHAvUmVndWxhcl9leHByZXNzaW9uX0RlbmlhbF9vZl9TZXJ2aWNlXy1fUmVEb1NcbiAgaWYgKGRhdGVTdHIubGVuZ3RoID4gMTAwMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGVJbmZvID0ge307XG4gIHZhciBwYXJzZUluZm8gPSBbXTtcbiAgdmFyIGxpdGVyYWxzID0gW107XG4gIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxpdGVyYWwsIGZ1bmN0aW9uKCQwLCAkMSkge1xuICAgIGxpdGVyYWxzLnB1c2goJDEpO1xuICAgIHJldHVybiAnQEBAJztcbiAgfSk7XG4gIHZhciBuZXdGb3JtYXQgPSByZWdleEVzY2FwZShmb3JtYXQpLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uICgkMCkge1xuICAgIGlmIChwYXJzZUZsYWdzWyQwXSkge1xuICAgICAgdmFyIGluZm8gPSBwYXJzZUZsYWdzWyQwXTtcbiAgICAgIHBhcnNlSW5mby5wdXNoKGluZm9bMV0pO1xuICAgICAgcmV0dXJuICcoJyArIGluZm9bMF0gKyAnKSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICQwO1xuICB9KTtcbiAgbmV3Rm9ybWF0ID0gbmV3Rm9ybWF0LnJlcGxhY2UoL0BAQC9nLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGl0ZXJhbHMuc2hpZnQoKTtcbiAgfSk7XG4gIHZhciBtYXRjaGVzID0gZGF0ZVN0ci5tYXRjaChuZXcgUmVnRXhwKG5ld0Zvcm1hdCwgJ2knKSk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFyc2VJbmZvW2kgLSAxXShkYXRlSW5mbywgbWF0Y2hlc1tpXSwgaTE4bik7XG4gIH1cblxuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gdHJ1ZSAmJiBkYXRlSW5mby5ob3VyICE9IG51bGwgJiYgK2RhdGVJbmZvLmhvdXIgIT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9ICtkYXRlSW5mby5ob3VyICsgMTI7XG4gIH0gZWxzZSBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gZmFsc2UgJiYgK2RhdGVJbmZvLmhvdXIgPT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9IDA7XG4gIH1cblxuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVJbmZvLnRpbWV6b25lT2Zmc2V0ICE9IG51bGwpIHtcbiAgICBkYXRlSW5mby5taW51dGUgPSArKGRhdGVJbmZvLm1pbnV0ZSB8fCAwKSAtICtkYXRlSW5mby50aW1lem9uZU9mZnNldDtcbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZUluZm8ueWVhciB8fCB0b2RheS5nZXRGdWxsWWVhcigpLCBkYXRlSW5mby5tb250aCB8fCAwLCBkYXRlSW5mby5kYXkgfHwgMSxcbiAgICAgIGRhdGVJbmZvLmhvdXIgfHwgMCwgZGF0ZUluZm8ubWludXRlIHx8IDAsIGRhdGVJbmZvLnNlY29uZCB8fCAwLCBkYXRlSW5mby5taWxsaXNlY29uZCB8fCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbmZvLnllYXIgfHwgdG9kYXkuZ2V0RnVsbFllYXIoKSwgZGF0ZUluZm8ubW9udGggfHwgMCwgZGF0ZUluZm8uZGF5IHx8IDEsXG4gICAgICBkYXRlSW5mby5ob3VyIHx8IDAsIGRhdGVJbmZvLm1pbnV0ZSB8fCAwLCBkYXRlSW5mby5zZWNvbmQgfHwgMCwgZGF0ZUluZm8ubWlsbGlzZWNvbmQgfHwgMCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZWNoYTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlaQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxYkE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEZBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==