function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-etapes-etapes-module~modules-projet-projet-module"], {
  /***/
  "./node_modules/ng2-date-picker/fesm2015/ng2-date-picker.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ng2-date-picker/fesm2015/ng2-date-picker.js ***!
    \******************************************************************/

  /*! exports provided: DatePickerComponent, DatePickerDirective, DayCalendarComponent, DayTimeCalendarComponent, DpDatePickerModule, ECalendarMode, ECalendarValue, MonthCalendarComponent, SelectEvent, TimeSelectComponent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi */

  /***/
  function node_modulesNg2DatePickerFesm2015Ng2DatePickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
      return DatePickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerDirective", function () {
      return DatePickerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayCalendarComponent", function () {
      return DayCalendarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayTimeCalendarComponent", function () {
      return DayTimeCalendarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DpDatePickerModule", function () {
      return DpDatePickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ECalendarMode", function () {
      return ECalendarMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ECalendarValue", function () {
      return ECalendarValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthCalendarComponent", function () {
      return MonthCalendarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectEvent", function () {
      return SelectEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeSelectComponent", function () {
      return TimeSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DatePickerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return UtilsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return TimeSelectService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DayTimeCalendarService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return DayCalendarService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return DomHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return DatePickerDirectiveService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return MonthCalendarService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return CalendarNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var ECalendarMode;

    (function (ECalendarMode) {
      ECalendarMode[ECalendarMode["Day"] = 0] = "Day";
      ECalendarMode[ECalendarMode["DayTime"] = 1] = "DayTime";
      ECalendarMode[ECalendarMode["Month"] = 2] = "Month";
      ECalendarMode[ECalendarMode["Time"] = 3] = "Time";
    })(ECalendarMode || (ECalendarMode = {}));

    var ECalendarValue;

    (function (ECalendarValue) {
      ECalendarValue[ECalendarValue["Moment"] = 1] = "Moment";
      ECalendarValue[ECalendarValue["MomentArr"] = 2] = "MomentArr";
      ECalendarValue[ECalendarValue["String"] = 3] = "String";
      ECalendarValue[ECalendarValue["StringArr"] = 4] = "StringArr";
    })(ECalendarValue || (ECalendarValue = {}));

    var SelectEvent;

    (function (SelectEvent) {
      SelectEvent["INPUT"] = "input";
      SelectEvent["SELECTION"] = "selection";
    })(SelectEvent || (SelectEvent = {}));

    var DomHelper_1;

    var DomHelper = DomHelper_1 =
    /*#__PURE__*/
    function () {
      function DomHelper() {
        _classCallCheck(this, DomHelper);
      }

      _createClass(DomHelper, [{
        key: "appendElementToPosition",
        value: function appendElementToPosition(config) {
          var _this = this;

          var container = config.container,
              element = config.element;

          if (!container.style.position || container.style.position === 'static') {
            container.style.position = 'relative';
          }

          if (element.style.position !== 'absolute') {
            element.style.position = 'absolute';
          }

          element.style.visibility = 'hidden';
          setTimeout(function () {
            _this.setElementPosition(config);

            element.style.visibility = 'visible';
          });
        }
      }, {
        key: "setElementPosition",
        value: function setElementPosition(_ref) {
          var element = _ref.element,
              container = _ref.container,
              anchor = _ref.anchor,
              dimElem = _ref.dimElem,
              drops = _ref.drops,
              opens = _ref.opens;
          DomHelper_1.setYAxisPosition(element, container, anchor, 'down');
          DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, 'right');

          if (drops !== 'down' && drops !== 'up') {
            if (DomHelper_1.isBottomInView(dimElem)) {
              DomHelper_1.setYAxisPosition(element, container, anchor, 'down');
            } else if (DomHelper_1.isTopInView(dimElem)) {
              DomHelper_1.setYAxisPosition(element, container, anchor, 'up');
            }
          } else {
            DomHelper_1.setYAxisPosition(element, container, anchor, drops);
          }

          if (opens !== 'left' && opens !== 'right') {
            if (DomHelper_1.isRightInView(dimElem)) {
              DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, 'right');
            } else if (DomHelper_1.isLeftInView(dimElem)) {
              DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, 'left');
            }
          } else {
            DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, opens);
          }
        }
      }], [{
        key: "setYAxisPosition",
        value: function setYAxisPosition(element, container, anchor, drops) {
          var anchorRect = anchor.getBoundingClientRect();
          var containerRect = container.getBoundingClientRect();
          var bottom = anchorRect.bottom - containerRect.top;
          var top = anchorRect.top - containerRect.top;

          if (drops === 'down') {
            element.style.top = bottom + 1 + 'px';
          } else {
            element.style.top = top - 1 - element.scrollHeight + 'px';
          }
        }
      }, {
        key: "setXAxisPosition",
        value: function setXAxisPosition(element, container, anchor, dimElem, opens) {
          var anchorRect = anchor.getBoundingClientRect();
          var containerRect = container.getBoundingClientRect();
          var left = anchorRect.left - containerRect.left;

          if (opens === 'right') {
            element.style.left = left + 'px';
          } else {
            element.style.left = left - dimElem.offsetWidth + anchor.offsetWidth + 'px';
          }
        }
      }, {
        key: "isTopInView",
        value: function isTopInView(el) {
          var _el$getBoundingClient = el.getBoundingClientRect(),
              top = _el$getBoundingClient.top;

          return top >= 0;
        }
      }, {
        key: "isBottomInView",
        value: function isBottomInView(el) {
          var _el$getBoundingClient2 = el.getBoundingClientRect(),
              bottom = _el$getBoundingClient2.bottom;

          return bottom <= window.innerHeight;
        }
      }, {
        key: "isLeftInView",
        value: function isLeftInView(el) {
          var _el$getBoundingClient3 = el.getBoundingClientRect(),
              left = _el$getBoundingClient3.left;

          return left >= 0;
        }
      }, {
        key: "isRightInView",
        value: function isRightInView(el) {
          var _el$getBoundingClient4 = el.getBoundingClientRect(),
              right = _el$getBoundingClient4.right;

          return right <= window.innerWidth;
        }
      }]);

      return DomHelper;
    }();

    DomHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function DomHelper_Factory() {
        return new DomHelper();
      },
      token: DomHelper,
      providedIn: "root"
    });
    DomHelper = DomHelper_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DomHelper);
    var moment = moment__WEBPACK_IMPORTED_MODULE_4__;

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "createArray",
        value: function createArray(size) {
          return new Array(size).fill(1);
        }
      }, {
        key: "convertToMoment",
        value: function convertToMoment(date, format) {
          if (!date) {
            return null;
          } else if (typeof date === 'string') {
            return moment(date, format);
          } else {
            return date.clone();
          }
        }
      }, {
        key: "isDateValid",
        value: function isDateValid(date, format) {
          if (date === '') {
            return true;
          }

          return moment(date, format, true).isValid();
        } // todo:: add unit test

      }, {
        key: "getDefaultDisplayDate",
        value: function getDefaultDisplayDate(current, selected, allowMultiSelect, minDate) {
          if (current) {
            return current.clone();
          } else if (minDate && minDate.isAfter(moment())) {
            return minDate.clone();
          } else if (allowMultiSelect) {
            if (selected && selected[selected.length]) {
              return selected[selected.length].clone();
            }
          } else if (selected && selected[0]) {
            return selected[0].clone();
          }

          return moment();
        } // todo:: add unit test

      }, {
        key: "getInputType",
        value: function getInputType(value, allowMultiSelect) {
          if (Array.isArray(value)) {
            if (!value.length) {
              return ECalendarValue.MomentArr;
            } else if (typeof value[0] === 'string') {
              return ECalendarValue.StringArr;
            } else if (moment.isMoment(value[0])) {
              return ECalendarValue.MomentArr;
            }
          } else {
            if (typeof value === 'string') {
              return ECalendarValue.String;
            } else if (moment.isMoment(value)) {
              return ECalendarValue.Moment;
            }
          }

          return allowMultiSelect ? ECalendarValue.MomentArr : ECalendarValue.Moment;
        } // todo:: add unit test

      }, {
        key: "convertToMomentArray",
        value: function convertToMomentArray(value, config) {
          var retVal;

          switch (this.getInputType(value, config.allowMultiSelect)) {
            case ECalendarValue.String:
              retVal = value ? [moment(value, config.format, true)] : [];
              break;

            case ECalendarValue.StringArr:
              retVal = value.map(function (v) {
                return v ? moment(v, config.format, true) : null;
              }).filter(Boolean);
              break;

            case ECalendarValue.Moment:
              retVal = value ? [value.clone()] : [];
              break;

            case ECalendarValue.MomentArr:
              retVal = (value || []).map(function (v) {
                return v.clone();
              });
              break;

            default:
              retVal = [];
          }

          return retVal;
        } // todo:: add unit test

      }, {
        key: "convertFromMomentArray",
        value: function convertFromMomentArray(format, value, convertTo) {
          switch (convertTo) {
            case ECalendarValue.String:
              return value[0] && value[0].format(format);

            case ECalendarValue.StringArr:
              return value.filter(Boolean).map(function (v) {
                return v.format(format);
              });

            case ECalendarValue.Moment:
              return value[0] ? value[0].clone() : value[0];

            case ECalendarValue.MomentArr:
              return value ? value.map(function (v) {
                return v.clone();
              }) : value;

            default:
              return value;
          }
        }
      }, {
        key: "convertToString",
        value: function convertToString(value, format) {
          var _this2 = this;

          var tmpVal;

          if (typeof value === 'string') {
            tmpVal = [value];
          } else if (Array.isArray(value)) {
            if (value.length) {
              tmpVal = value.map(function (v) {
                return _this2.convertToMoment(v, format).format(format);
              });
            } else {
              tmpVal = value;
            }
          } else if (moment.isMoment(value)) {
            tmpVal = [value.format(format)];
          } else {
            return '';
          }

          return tmpVal.filter(Boolean).join(' | ');
        } // todo:: add unit test

      }, {
        key: "clearUndefined",
        value: function clearUndefined(obj) {
          if (!obj) {
            return obj;
          }

          Object.keys(obj).forEach(function (key) {
            return obj[key] === undefined && delete obj[key];
          });
          return obj;
        }
      }, {
        key: "updateSelected",
        value: function updateSelected(isMultiple, currentlySelected, date) {
          var granularity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';

          if (isMultiple) {
            return !date.selected ? currentlySelected.concat([date.date]) : currentlySelected.filter(function (d) {
              return !d.isSame(date.date, granularity);
            });
          } else {
            return !date.selected ? [date.date] : [];
          }
        }
      }, {
        key: "closestParent",
        value: function closestParent(element, selector) {
          if (!element) {
            return undefined;
          }

          var match = element.querySelector(selector);
          return match || this.closestParent(element.parentElement, selector);
        }
      }, {
        key: "onlyTime",
        value: function onlyTime(m) {
          return m && moment.isMoment(m) && moment(m.format('HH:mm:ss'), 'HH:mm:ss');
        }
      }, {
        key: "granularityFromType",
        value: function granularityFromType(calendarType) {
          switch (calendarType) {
            case 'time':
              return 'second';

            case 'daytime':
              return 'second';

            default:
              return calendarType;
          }
        }
      }, {
        key: "createValidator",
        value: function createValidator(_ref2, format, calendarType) {
          var _this3 = this;

          var minDate = _ref2.minDate,
              maxDate = _ref2.maxDate,
              minTime = _ref2.minTime,
              maxTime = _ref2.maxTime;

          var _isValid2;

          var value;
          var validators = [];
          var granularity = this.granularityFromType(calendarType);

          if (minDate) {
            var md = this.convertToMoment(minDate, format);
            validators.push({
              key: 'minDate',
              isValid: function isValid() {
                var _isValid = value.every(function (val) {
                  return val.isSameOrAfter(md, granularity);
                });

                _isValid2 = _isValid2 ? _isValid : false;
                return _isValid;
              }
            });
          }

          if (maxDate) {
            var _md = this.convertToMoment(maxDate, format);

            validators.push({
              key: 'maxDate',
              isValid: function isValid() {
                var _isValid = value.every(function (val) {
                  return val.isSameOrBefore(_md, granularity);
                });

                _isValid2 = _isValid2 ? _isValid : false;
                return _isValid;
              }
            });
          }

          if (minTime) {
            var _md2 = this.onlyTime(this.convertToMoment(minTime, format));

            validators.push({
              key: 'minTime',
              isValid: function isValid() {
                var _isValid = value.every(function (val) {
                  return _this3.onlyTime(val).isSameOrAfter(_md2);
                });

                _isValid2 = _isValid2 ? _isValid : false;
                return _isValid;
              }
            });
          }

          if (maxTime) {
            var _md3 = this.onlyTime(this.convertToMoment(maxTime, format));

            validators.push({
              key: 'maxTime',
              isValid: function isValid() {
                var _isValid = value.every(function (val) {
                  return _this3.onlyTime(val).isSameOrBefore(_md3);
                });

                _isValid2 = _isValid2 ? _isValid : false;
                return _isValid;
              }
            });
          }

          return function (inputVal) {
            _isValid2 = true;
            value = _this3.convertToMomentArray(inputVal, {
              format: format,
              allowMultiSelect: true
            }).filter(Boolean);

            if (!value.every(function (val) {
              return val.isValid();
            })) {
              return {
                format: {
                  given: inputVal
                }
              };
            }

            var errors = validators.reduce(function (map, err) {
              if (!err.isValid()) {
                map[err.key] = {
                  given: value
                };
              }

              return map;
            }, {});
            return !_isValid2 ? errors : null;
          };
        }
      }, {
        key: "datesStringToStringArray",
        value: function datesStringToStringArray(value) {
          return (value || '').split('|').map(function (m) {
            return m.trim();
          }).filter(Boolean);
        }
      }, {
        key: "getValidMomentArray",
        value: function getValidMomentArray(value, format) {
          var _this4 = this;

          return this.datesStringToStringArray(value).filter(function (d) {
            return _this4.isDateValid(d, format);
          }).map(function (d) {
            return moment(d, format);
          });
        }
      }, {
        key: "shouldShowCurrent",
        value: function shouldShowCurrent(showGoToCurrent, mode, min, max) {
          return showGoToCurrent && mode !== 'time' && this.isDateInRange(moment(), min, max);
        }
      }, {
        key: "isDateInRange",
        value: function isDateInRange(date, from, to) {
          return date.isBetween(from, to, 'day', '[]');
        }
      }, {
        key: "convertPropsToMoment",
        value: function convertPropsToMoment(obj, format, props) {
          var _this5 = this;

          props.forEach(function (prop) {
            if (obj.hasOwnProperty(prop)) {
              obj[prop] = _this5.convertToMoment(obj[prop], format);
            }
          });
        }
      }, {
        key: "shouldResetCurrentView",
        value: function shouldResetCurrentView(prevConf, currentConf) {
          if (prevConf && currentConf) {
            if (!prevConf.min && currentConf.min) {
              return true;
            } else if (prevConf.min && currentConf.min && !prevConf.min.isSame(currentConf.min, 'd')) {
              return true;
            } else if (!prevConf.max && currentConf.max) {
              return true;
            } else if (prevConf.max && currentConf.max && !prevConf.max.isSame(currentConf.max, 'd')) {
              return true;
            }

            return false;
          }

          return false;
        }
      }, {
        key: "getNativeElement",
        value: function getNativeElement(elem) {
          if (!elem) {
            return null;
          } else if (typeof elem === 'string') {
            return document.querySelector(elem);
          } else {
            return elem;
          }
        }
      }], [{
        key: "debounce",
        value: function debounce(func, wait) {
          var timeout;
          return function () {
            var context = this,
                args = arguments;
            timeout = clearTimeout(timeout);
            setTimeout(function () {
              func.apply(context, args);
            }, wait);
          };
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UtilsService_Factory() {
        return new UtilsService();
      },
      token: UtilsService,
      providedIn: "root"
    });
    UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilsService);
    var moment$1 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var DayCalendarService =
    /*#__PURE__*/
    function () {
      function DayCalendarService(utilsService) {
        _classCallCheck(this, DayCalendarService);

        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
          showNearMonthDays: true,
          showWeekNumbers: false,
          firstDayOfWeek: 'su',
          weekDayFormat: 'ddd',
          format: 'DD-MM-YYYY',
          allowMultiSelect: false,
          monthFormat: 'MMM, YYYY',
          enableMonthSelector: true,
          locale: moment$1.locale(),
          dayBtnFormat: 'DD',
          unSelectOnClick: true
        };
        this.DAYS = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
      }

      _createClass(DayCalendarService, [{
        key: "getConfig",
        value: function getConfig(config) {
          var _config = Object.assign({}, this.DEFAULT_CONFIG, this.utilsService.clearUndefined(config));

          this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
          moment$1.locale(_config.locale);
          return _config;
        }
      }, {
        key: "generateDaysMap",
        value: function generateDaysMap(firstDayOfWeek) {
          var firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
          var daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
          return daysArr.reduce(function (map, day, index) {
            map[day] = index;
            return map;
          }, {});
        }
      }, {
        key: "generateMonthArray",
        value: function generateMonthArray(config, month, selected) {
          var _this6 = this;

          var monthArray = [];
          var firstDayOfWeekIndex = this.DAYS.indexOf(config.firstDayOfWeek);
          var firstDayOfBoard = month.clone().startOf('month');

          while (firstDayOfBoard.day() !== firstDayOfWeekIndex) {
            firstDayOfBoard.subtract(1, 'day');
          }

          var current = firstDayOfBoard.clone();
          var prevMonth = month.clone().subtract(1, 'month');
          var nextMonth = month.clone().add(1, 'month');
          var today = moment$1();
          var daysOfCalendar = this.utilsService.createArray(42).reduce(function (array) {
            array.push({
              date: current.clone(),
              selected: !!selected.find(function (selectedDay) {
                return current.isSame(selectedDay, 'day');
              }),
              currentMonth: current.isSame(month, 'month'),
              prevMonth: current.isSame(prevMonth, 'month'),
              nextMonth: current.isSame(nextMonth, 'month'),
              currentDay: current.isSame(today, 'day'),
              disabled: _this6.isDateDisabled(current, config)
            });
            current.add(1, 'day');
            return array;
          }, []);
          daysOfCalendar.forEach(function (day, index) {
            var weekIndex = Math.floor(index / 7);

            if (!monthArray[weekIndex]) {
              monthArray.push([]);
            }

            monthArray[weekIndex].push(day);
          });

          if (!config.showNearMonthDays) {
            monthArray = this.removeNearMonthWeeks(month, monthArray);
          }

          return monthArray;
        }
      }, {
        key: "generateWeekdays",
        value: function generateWeekdays(firstDayOfWeek) {
          var weekdayNames = {
            su: moment$1().day(0),
            mo: moment$1().day(1),
            tu: moment$1().day(2),
            we: moment$1().day(3),
            th: moment$1().day(4),
            fr: moment$1().day(5),
            sa: moment$1().day(6)
          };
          var weekdays = [];
          var daysMap = this.generateDaysMap(firstDayOfWeek);

          for (var dayKey in daysMap) {
            if (daysMap.hasOwnProperty(dayKey)) {
              weekdays[daysMap[dayKey]] = weekdayNames[dayKey];
            }
          }

          return weekdays;
        }
      }, {
        key: "isDateDisabled",
        value: function isDateDisabled(date, config) {
          if (config.isDayDisabledCallback) {
            return config.isDayDisabledCallback(date);
          }

          if (config.min && date.isBefore(config.min, 'day')) {
            return true;
          }

          return !!(config.max && date.isAfter(config.max, 'day'));
        } // todo:: add unit tests

      }, {
        key: "getHeaderLabel",
        value: function getHeaderLabel(config, month) {
          if (config.monthFormatter) {
            return config.monthFormatter(month);
          }

          return month.format(config.monthFormat);
        } // todo:: add unit tests

      }, {
        key: "shouldShowLeft",
        value: function shouldShowLeft(min, currentMonthView) {
          return min ? min.isBefore(currentMonthView, 'month') : true;
        } // todo:: add unit tests

      }, {
        key: "shouldShowRight",
        value: function shouldShowRight(max, currentMonthView) {
          return max ? max.isAfter(currentMonthView, 'month') : true;
        }
      }, {
        key: "generateDaysIndexMap",
        value: function generateDaysIndexMap(firstDayOfWeek) {
          var firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
          var daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
          return daysArr.reduce(function (map, day, index) {
            map[index] = day;
            return map;
          }, {});
        }
      }, {
        key: "getMonthCalendarConfig",
        value: function getMonthCalendarConfig(componentConfig) {
          return this.utilsService.clearUndefined({
            min: componentConfig.min,
            max: componentConfig.max,
            format: componentConfig.format,
            isNavHeaderBtnClickable: true,
            allowMultiSelect: false,
            locale: componentConfig.locale,
            yearFormat: componentConfig.yearFormat,
            yearFormatter: componentConfig.yearFormatter,
            monthBtnFormat: componentConfig.monthBtnFormat,
            monthBtnFormatter: componentConfig.monthBtnFormatter,
            monthBtnCssClassCallback: componentConfig.monthBtnCssClassCallback,
            multipleYearsNavigateBy: componentConfig.multipleYearsNavigateBy,
            showMultipleYearsNavigation: componentConfig.showMultipleYearsNavigation,
            showGoToCurrent: componentConfig.showGoToCurrent
          });
        }
      }, {
        key: "getDayBtnText",
        value: function getDayBtnText(config, day) {
          if (config.dayBtnFormatter) {
            return config.dayBtnFormatter(day);
          }

          return day.format(config.dayBtnFormat);
        }
      }, {
        key: "getDayBtnCssClass",
        value: function getDayBtnCssClass(config, day) {
          if (config.dayBtnCssClassCallback) {
            return config.dayBtnCssClassCallback(day);
          }

          return '';
        }
      }, {
        key: "removeNearMonthWeeks",
        value: function removeNearMonthWeeks(currentMonth, monthArray) {
          if (monthArray[monthArray.length - 1].find(function (day) {
            return day.date.isSame(currentMonth, 'month');
          })) {
            return monthArray;
          } else {
            return monthArray.slice(0, -1);
          }
        }
      }]);

      return DayCalendarService;
    }();

    DayCalendarService.ctorParameters = function () {
      return [{
        type: UtilsService
      }];
    };

    DayCalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DayCalendarService);
    var moment$2 = moment__WEBPACK_IMPORTED_MODULE_4__;
    var FIRST_PM_HOUR = 12;

    var TimeSelectService =
    /*#__PURE__*/
    function () {
      function TimeSelectService(utilsService) {
        _classCallCheck(this, TimeSelectService);

        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
          hours12Format: 'hh',
          hours24Format: 'HH',
          meridiemFormat: 'A',
          minutesFormat: 'mm',
          minutesInterval: 1,
          secondsFormat: 'ss',
          secondsInterval: 1,
          showSeconds: false,
          showTwentyFourHours: false,
          timeSeparator: ':',
          locale: moment$2.locale()
        };
      }

      _createClass(TimeSelectService, [{
        key: "getConfig",
        value: function getConfig(config) {
          var timeConfigs = {
            maxTime: this.utilsService.onlyTime(config && config.maxTime),
            minTime: this.utilsService.onlyTime(config && config.minTime)
          };

          var _config = Object.assign({}, this.DEFAULT_CONFIG, this.utilsService.clearUndefined(config), timeConfigs);

          moment$2.locale(_config.locale);
          return _config;
        }
      }, {
        key: "getTimeFormat",
        value: function getTimeFormat(config) {
          return (config.showTwentyFourHours ? config.hours24Format : config.hours12Format) + config.timeSeparator + config.minutesFormat + (config.showSeconds ? config.timeSeparator + config.secondsFormat : '') + (config.showTwentyFourHours ? '' : ' ' + config.meridiemFormat);
        }
      }, {
        key: "getHours",
        value: function getHours(config, t) {
          var time = t || moment$2();
          return time && time.format(config.showTwentyFourHours ? config.hours24Format : config.hours12Format);
        }
      }, {
        key: "getMinutes",
        value: function getMinutes(config, t) {
          var time = t || moment$2();
          return time && time.format(config.minutesFormat);
        }
      }, {
        key: "getSeconds",
        value: function getSeconds(config, t) {
          var time = t || moment$2();
          return time && time.format(config.secondsFormat);
        }
      }, {
        key: "getMeridiem",
        value: function getMeridiem(config, time) {
          return time && time.format(config.meridiemFormat);
        }
      }, {
        key: "decrease",
        value: function decrease(config, time, unit) {
          var amount = 1;

          switch (unit) {
            case 'minute':
              amount = config.minutesInterval;
              break;

            case 'second':
              amount = config.secondsInterval;
              break;
          }

          return time.clone().subtract(amount, unit);
        }
      }, {
        key: "increase",
        value: function increase(config, time, unit) {
          var amount = 1;

          switch (unit) {
            case 'minute':
              amount = config.minutesInterval;
              break;

            case 'second':
              amount = config.secondsInterval;
              break;
          }

          return time.clone().add(amount, unit);
        }
      }, {
        key: "toggleMeridiem",
        value: function toggleMeridiem(time) {
          if (time.hours() < FIRST_PM_HOUR) {
            return time.clone().add(12, 'hour');
          } else {
            return time.clone().subtract(12, 'hour');
          }
        }
      }, {
        key: "shouldShowDecrease",
        value: function shouldShowDecrease(config, time, unit) {
          if (!config.min && !config.minTime) {
            return true;
          }

          var newTime = this.decrease(config, time, unit);
          return (!config.min || config.min.isSameOrBefore(newTime)) && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
        }
      }, {
        key: "shouldShowIncrease",
        value: function shouldShowIncrease(config, time, unit) {
          if (!config.max && !config.maxTime) {
            return true;
          }

          var newTime = this.increase(config, time, unit);
          return (!config.max || config.max.isSameOrAfter(newTime)) && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)));
        }
      }, {
        key: "shouldShowToggleMeridiem",
        value: function shouldShowToggleMeridiem(config, time) {
          if (!config.min && !config.max && !config.minTime && !config.maxTime) {
            return true;
          }

          var newTime = this.toggleMeridiem(time);
          return (!config.max || config.max.isSameOrAfter(newTime)) && (!config.min || config.min.isSameOrBefore(newTime)) && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime))) && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
        }
      }]);

      return TimeSelectService;
    }();

    TimeSelectService.ctorParameters = function () {
      return [{
        type: UtilsService
      }];
    };

    TimeSelectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TimeSelectService);
    var moment$3 = moment__WEBPACK_IMPORTED_MODULE_4__;
    var DAY_FORMAT = 'YYYYMMDD';
    var TIME_FORMAT = 'HH:mm:ss';
    var COMBINED_FORMAT = DAY_FORMAT + TIME_FORMAT;

    var DayTimeCalendarService =
    /*#__PURE__*/
    function () {
      function DayTimeCalendarService(utilsService, dayCalendarService, timeSelectService) {
        _classCallCheck(this, DayTimeCalendarService);

        this.utilsService = utilsService;
        this.dayCalendarService = dayCalendarService;
        this.timeSelectService = timeSelectService;
        this.DEFAULT_CONFIG = {
          locale: moment$3.locale()
        };
      }

      _createClass(DayTimeCalendarService, [{
        key: "getConfig",
        value: function getConfig(config) {
          var _config = Object.assign({}, this.DEFAULT_CONFIG, this.timeSelectService.getConfig(config), this.dayCalendarService.getConfig(config));

          moment$3.locale(config.locale);
          return _config;
        }
      }, {
        key: "updateDay",
        value: function updateDay(current, day, config) {
          var time = current ? current : moment$3();
          var updated = moment$3(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);

          if (config.min) {
            var min = config.min;
            updated = min.isAfter(updated) ? min : updated;
          }

          if (config.max) {
            var max = config.max;
            updated = max.isBefore(updated) ? max : updated;
          }

          return updated;
        }
      }, {
        key: "updateTime",
        value: function updateTime(current, time) {
          var day = current ? current : moment$3();
          return moment$3(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
        }
      }]);

      return DayTimeCalendarService;
    }();

    DayTimeCalendarService.ctorParameters = function () {
      return [{
        type: UtilsService
      }, {
        type: DayCalendarService
      }, {
        type: TimeSelectService
      }];
    };

    DayTimeCalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DayTimeCalendarService);
    var moment$4 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var DatePickerService =
    /*#__PURE__*/
    function () {
      function DatePickerService(utilsService, timeSelectService, daytimeCalendarService) {
        _classCallCheck(this, DatePickerService);

        this.utilsService = utilsService;
        this.timeSelectService = timeSelectService;
        this.daytimeCalendarService = daytimeCalendarService;
        this.onPickerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultConfig = {
          closeOnSelect: true,
          closeOnSelectDelay: 100,
          format: 'DD-MM-YYYY',
          openOnFocus: true,
          openOnClick: true,
          onOpenDelay: 0,
          disableKeypress: false,
          showNearMonthDays: true,
          showWeekNumbers: false,
          enableMonthSelector: true,
          showGoToCurrent: true,
          locale: moment$4.locale(),
          hideOnOutsideClick: true
        };
      } // todo:: add unit tests


      _createClass(DatePickerService, [{
        key: "getConfig",
        value: function getConfig(config) {
          var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'daytime';

          var _config = Object.assign({}, this.defaultConfig, {
            format: this.getDefaultFormatByMode(mode)
          }, this.utilsService.clearUndefined(config));

          this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);

          if (config && config.allowMultiSelect && config.closeOnSelect === undefined) {
            _config.closeOnSelect = false;
          }

          moment$4.locale(_config.locale);
          return _config;
        }
      }, {
        key: "getDayConfigService",
        value: function getDayConfigService(pickerConfig) {
          return {
            min: pickerConfig.min,
            max: pickerConfig.max,
            isDayDisabledCallback: pickerConfig.isDayDisabledCallback,
            weekDayFormat: pickerConfig.weekDayFormat,
            weekDayFormatter: pickerConfig.weekDayFormatter,
            showNearMonthDays: pickerConfig.showNearMonthDays,
            showWeekNumbers: pickerConfig.showWeekNumbers,
            firstDayOfWeek: pickerConfig.firstDayOfWeek,
            format: pickerConfig.format,
            allowMultiSelect: pickerConfig.allowMultiSelect,
            monthFormat: pickerConfig.monthFormat,
            monthFormatter: pickerConfig.monthFormatter,
            enableMonthSelector: pickerConfig.enableMonthSelector,
            yearFormat: pickerConfig.yearFormat,
            yearFormatter: pickerConfig.yearFormatter,
            dayBtnFormat: pickerConfig.dayBtnFormat,
            dayBtnFormatter: pickerConfig.dayBtnFormatter,
            dayBtnCssClassCallback: pickerConfig.dayBtnCssClassCallback,
            monthBtnFormat: pickerConfig.monthBtnFormat,
            monthBtnFormatter: pickerConfig.monthBtnFormatter,
            monthBtnCssClassCallback: pickerConfig.monthBtnCssClassCallback,
            multipleYearsNavigateBy: pickerConfig.multipleYearsNavigateBy,
            showMultipleYearsNavigation: pickerConfig.showMultipleYearsNavigation,
            locale: pickerConfig.locale,
            returnedValueType: pickerConfig.returnedValueType,
            showGoToCurrent: pickerConfig.showGoToCurrent,
            unSelectOnClick: pickerConfig.unSelectOnClick
          };
        }
      }, {
        key: "getDayTimeConfigService",
        value: function getDayTimeConfigService(pickerConfig) {
          return this.daytimeCalendarService.getConfig(pickerConfig);
        }
      }, {
        key: "getTimeConfigService",
        value: function getTimeConfigService(pickerConfig) {
          return this.timeSelectService.getConfig(pickerConfig);
        }
      }, {
        key: "pickerClosed",
        value: function pickerClosed() {
          this.onPickerClosed.emit();
        } // todo:: add unit tests

      }, {
        key: "isValidInputDateValue",
        value: function isValidInputDateValue(value, config) {
          var _this7 = this;

          value = value ? value : '';
          var datesStrArr = this.utilsService.datesStringToStringArray(value);
          return datesStrArr.every(function (date) {
            return _this7.utilsService.isDateValid(date, config.format);
          });
        } // todo:: add unit tests

      }, {
        key: "convertInputValueToMomentArray",
        value: function convertInputValueToMomentArray(value, config) {
          value = value ? value : '';
          var datesStrArr = this.utilsService.datesStringToStringArray(value);
          return this.utilsService.convertToMomentArray(datesStrArr, config);
        }
      }, {
        key: "getDefaultFormatByMode",
        value: function getDefaultFormatByMode(mode) {
          switch (mode) {
            case 'day':
              return 'DD-MM-YYYY';

            case 'daytime':
              return 'DD-MM-YYYY HH:mm:ss';

            case 'time':
              return 'HH:mm:ss';

            case 'month':
              return 'MMM, YYYY';
          }
        }
      }]);

      return DatePickerService;
    }();

    DatePickerService.ctorParameters = function () {
      return [{
        type: UtilsService
      }, {
        type: TimeSelectService
      }, {
        type: DayTimeCalendarService
      }];
    };

    DatePickerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DatePickerService);
    var DatePickerComponent_1;

    var DatePickerComponent = DatePickerComponent_1 =
    /*#__PURE__*/
    function () {
      function DatePickerComponent(dayPickerService, domHelper, elemRef, renderer, utilsService, cd) {
        _classCallCheck(this, DatePickerComponent);

        this.dayPickerService = dayPickerService;
        this.domHelper = domHelper;
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.utilsService = utilsService;
        this.cd = cd;
        this.isInitialized = false;
        this.mode = 'day';
        this.placeholder = '';
        this.disabled = false;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideStateHelper = false;
        this.isFocusedTrigger = false;
        this.handleInnerElementClickUnlisteners = [];
        this.globalListenersUnlisteners = [];
        this.api = {
          open: this.showCalendars.bind(this),
          close: this.hideCalendar.bind(this),
          moveCalendarTo: this.moveCalendarTo.bind(this)
        };
        this.selectEvent = SelectEvent;
        this._areCalendarsShown = false;
        this._selected = [];
      }

      _createClass(DatePickerComponent, [{
        key: "onClick",
        value: function onClick() {
          if (!this.openOnClick) {
            return;
          }

          if (!this.isFocusedTrigger && !this.disabled) {
            this.hideStateHelper = true;

            if (!this.areCalendarsShown) {
              this.showCalendars();
            }
          }
        }
      }, {
        key: "onBodyClick",
        value: function onBodyClick() {
          if (this.componentConfig.hideOnOutsideClick) {
            if (!this.hideStateHelper && this.areCalendarsShown) {
              this.hideCalendar();
            }

            this.hideStateHelper = false;
          }
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          if (this.areCalendarsShown) {
            this.domHelper.setElementPosition({
              container: this.appendToElement,
              element: this.calendarWrapper,
              anchor: this.inputElementContainer,
              dimElem: this.popupElem,
              drops: this.componentConfig.drops,
              opens: this.componentConfig.opens
            });
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.inputValue = value;

          if (value || value === '') {
            this.selected = this.utilsService.convertToMomentArray(value, this.componentConfig);
            this.init();
          } else {
            this.selected = [];
          }

          this.cd.markForCheck();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "onChangeCallback",
        value: function onChangeCallback(_, changedByInput) {}
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "onTouchedCallback",
        value: function onTouchedCallback() {}
      }, {
        key: "validate",
        value: function validate(formControl) {
          return this.validateFn(formControl.value);
        }
      }, {
        key: "processOnChangeCallback",
        value: function processOnChangeCallback(selected) {
          if (typeof selected === 'string') {
            return selected;
          } else {
            return this.utilsService.convertFromMomentArray(this.componentConfig.format, selected, this.componentConfig.returnedValueType || this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect));
          }
        }
      }, {
        key: "initValidators",
        value: function initValidators() {
          this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate,
            minTime: this.minTime,
            maxTime: this.maxTime
          }, this.componentConfig.format, this.mode);
          this.onChangeCallback(this.processOnChangeCallback(this.selected), false);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isInitialized = true;
          this.init();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.isInitialized) {
            this.init();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.setElementPositionInDom();
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
          this.cd.markForCheck();
        }
      }, {
        key: "setElementPositionInDom",
        value: function setElementPositionInDom() {
          this.calendarWrapper = this.calendarContainer.nativeElement;
          this.setInputElementContainer();
          this.popupElem = this.elemRef.nativeElement.querySelector('.dp-popup');
          this.handleInnerElementClick(this.popupElem);
          var appendTo = this.componentConfig.appendTo;

          if (appendTo) {
            if (typeof appendTo === 'string') {
              this.appendToElement = document.querySelector(appendTo);
            } else {
              this.appendToElement = appendTo;
            }
          } else {
            this.appendToElement = this.elemRef.nativeElement;
          }

          this.appendToElement.appendChild(this.calendarWrapper);
        }
      }, {
        key: "setInputElementContainer",
        value: function setInputElementContainer() {
          this.inputElementContainer = this.utilsService.getNativeElement(this.componentConfig.inputElementContainer) || this.elemRef.nativeElement.querySelector('.dp-input-container') || document.body;
        }
      }, {
        key: "handleInnerElementClick",
        value: function handleInnerElementClick(element) {
          var _this8 = this;

          this.handleInnerElementClickUnlisteners.push(this.renderer.listen(element, 'click', function () {
            _this8.hideStateHelper = true;
          }));
        }
      }, {
        key: "init",
        value: function init() {
          this.componentConfig = this.dayPickerService.getConfig(this.config, this.mode);
          this.currentDateView = this.displayDate ? this.utilsService.convertToMoment(this.displayDate, this.componentConfig.format).clone() : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
          this.dayCalendarConfig = this.dayPickerService.getDayConfigService(this.componentConfig);
          this.dayTimeCalendarConfig = this.dayPickerService.getDayTimeConfigService(this.componentConfig);
          this.timeSelectConfig = this.dayPickerService.getTimeConfigService(this.componentConfig);
          this.initValidators();
        }
      }, {
        key: "inputFocused",
        value: function inputFocused() {
          var _this9 = this;

          if (!this.openOnFocus) {
            return;
          }

          this.isFocusedTrigger = true;
          setTimeout(function () {
            if (!_this9.areCalendarsShown) {
              _this9.showCalendars();
            }

            _this9.hideStateHelper = false;
            _this9.isFocusedTrigger = false;

            _this9.cd.markForCheck();
          }, this.componentConfig.onOpenDelay);
        }
      }, {
        key: "inputBlurred",
        value: function inputBlurred() {
          this.onTouchedCallback();
        }
      }, {
        key: "showCalendars",
        value: function showCalendars() {
          this.hideStateHelper = true;
          this.areCalendarsShown = true;

          if (this.timeSelectRef) {
            this.timeSelectRef.api.triggerChange();
          }

          this.open.emit();
          this.cd.markForCheck();
        }
      }, {
        key: "hideCalendar",
        value: function hideCalendar() {
          this.areCalendarsShown = false;

          if (this.dayCalendarRef) {
            this.dayCalendarRef.api.toggleCalendarMode(ECalendarMode.Day);
          }

          this.close.emit();
          this.cd.markForCheck();
        }
      }, {
        key: "onViewDateChange",
        value: function onViewDateChange(value) {
          var strVal = value ? this.utilsService.convertToString(value, this.componentConfig.format) : '';

          if (this.dayPickerService.isValidInputDateValue(strVal, this.componentConfig)) {
            this.selected = this.dayPickerService.convertInputValueToMomentArray(strVal, this.componentConfig);
            this.currentDateView = this.selected.length ? this.utilsService.getDefaultDisplayDate(null, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min) : this.currentDateView;
            this.onSelect.emit({
              date: strVal,
              type: SelectEvent.INPUT,
              granularity: null
            });
          } else {
            this._selected = this.utilsService.getValidMomentArray(strVal, this.componentConfig.format);
            this.onChangeCallback(this.processOnChangeCallback(strVal), true);
          }
        }
      }, {
        key: "dateSelected",
        value: function dateSelected(date, granularity, type, ignoreClose) {
          this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, date, granularity);

          if (!ignoreClose) {
            this.onDateClick();
          }

          this.onSelect.emit({
            date: date.date,
            granularity: granularity,
            type: type
          });
        }
      }, {
        key: "onDateClick",
        value: function onDateClick() {
          if (this.componentConfig.closeOnSelect) {
            setTimeout(this.hideCalendar.bind(this), this.componentConfig.closeOnSelectDelay);
          }
        }
      }, {
        key: "onKeyPress",
        value: function onKeyPress(event) {
          switch (event.keyCode) {
            case 9:
            case 27:
              this.hideCalendar();
              break;
          }
        }
      }, {
        key: "moveCalendarTo",
        value: function moveCalendarTo(date) {
          var momentDate = this.utilsService.convertToMoment(date, this.componentConfig.format);
          this.currentDateView = momentDate;
        }
      }, {
        key: "onLeftNavClick",
        value: function onLeftNavClick(change) {
          this.onLeftNav.emit(change);
        }
      }, {
        key: "onRightNavClick",
        value: function onRightNavClick(change) {
          this.onRightNav.emit(change);
        }
      }, {
        key: "startGlobalListeners",
        value: function startGlobalListeners() {
          var _this10 = this;

          this.globalListenersUnlisteners.push(this.renderer.listen(document, 'keydown', function (e) {
            _this10.onKeyPress(e);
          }), this.renderer.listen(document, 'scroll', function () {
            _this10.onScroll();
          }), this.renderer.listen(document, 'click', function () {
            _this10.onBodyClick();
          }));
        }
      }, {
        key: "stopGlobalListeners",
        value: function stopGlobalListeners() {
          this.globalListenersUnlisteners.forEach(function (ul) {
            return ul();
          });
          this.globalListenersUnlisteners = [];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.handleInnerElementClickUnlisteners.forEach(function (ul) {
            return ul();
          });

          if (this.appendToElement) {
            this.appendToElement.removeChild(this.calendarWrapper);
          }
        }
      }, {
        key: "openOnFocus",
        get: function get() {
          return this.componentConfig.openOnFocus;
        }
      }, {
        key: "openOnClick",
        get: function get() {
          return this.componentConfig.openOnClick;
        }
      }, {
        key: "areCalendarsShown",
        get: function get() {
          return this._areCalendarsShown;
        },
        set: function set(value) {
          if (value) {
            this.startGlobalListeners();
            this.domHelper.appendElementToPosition({
              container: this.appendToElement,
              element: this.calendarWrapper,
              anchor: this.inputElementContainer,
              dimElem: this.popupElem,
              drops: this.componentConfig.drops,
              opens: this.componentConfig.opens
            });
          } else {
            this.stopGlobalListeners();
            this.dayPickerService.pickerClosed();
          }

          this._areCalendarsShown = value;
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(selected) {
          this._selected = selected;
          this.inputElementValue = this.utilsService.convertFromMomentArray(this.componentConfig.format, selected, ECalendarValue.StringArr).join(' | ');
          var val = this.processOnChangeCallback(selected);
          this.onChangeCallback(val, false);
          this.onChange.emit(val);
        }
      }, {
        key: "currentDateView",
        get: function get() {
          return this._currentDateView;
        },
        set: function set(date) {
          this._currentDateView = date;

          if (this.dayCalendarRef) {
            this.dayCalendarRef.moveCalendarTo(date);
          }

          if (this.monthCalendarRef) {
            this.monthCalendarRef.moveCalendarTo(date);
          }

          if (this.dayTimeCalendarRef) {
            this.dayTimeCalendarRef.moveCalendarTo(date);
          }
        }
      }]);

      return DatePickerComponent;
    }();

    DatePickerComponent.ctorParameters = function () {
      return [{
        type: DatePickerService
      }, {
        type: DomHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: UtilsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "mode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "displayDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "open", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "close", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "onGoToCurrent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "onLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "onRightNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', {
      static: false
    })], DatePickerComponent.prototype, "calendarContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayCalendar', {
      static: false
    })], DatePickerComponent.prototype, "dayCalendarRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthCalendar', {
      static: false
    })], DatePickerComponent.prototype, "monthCalendarRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daytimeCalendar', {
      static: false
    })], DatePickerComponent.prototype, "dayTimeCalendarRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSelect', {
      static: false
    })], DatePickerComponent.prototype, "timeSelectRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], DatePickerComponent.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')], DatePickerComponent.prototype, "onScroll", null);
    DatePickerComponent = DatePickerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dp-date-picker',
      template: "<div [ngClass]=\"{'dp-open': areCalendarsShown}\">\n  <div [attr.data-hidden]=\"componentConfig.hideInputContainer\"\n       [hidden]=\"componentConfig.hideInputContainer\"\n       class=\"dp-input-container\">\n    <input (blur)=\"inputBlurred()\"\n           (focus)=\"inputFocused()\"\n           (ngModelChange)=\"onViewDateChange($event)\"\n           [disabled]=\"disabled\"\n           [ngModel]=\"inputElementValue\"\n           [placeholder]=\"placeholder\"\n           [readonly]=\"componentConfig.disableKeypress\"\n           class=\"dp-picker-input\"\n           type=\"text\"/>\n  </div>\n  <div #container>\n    <div [attr.data-hidden]=\"!_areCalendarsShown\"\n         [hidden]=\"!_areCalendarsShown\"\n         [ngSwitch]=\"mode\"\n         class=\"dp-popup {{theme}}\">\n      <dp-day-calendar #dayCalendar\n                       (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                       (onLeftNav)=\"onLeftNavClick($event)\"\n                       (onRightNav)=\"onRightNavClick($event)\"\n                       (onSelect)=\"dateSelected($event, 'day', selectEvent.SELECTION, false)\"\n                       *ngSwitchCase=\"'day'\"\n                       [config]=\"dayCalendarConfig\"\n                       [displayDate]=\"displayDate\"\n                       [ngModel]=\"_selected\"\n                       [theme]=\"theme\">\n      </dp-day-calendar>\n\n      <dp-month-calendar #monthCalendar\n                         (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                         (onLeftNav)=\"onLeftNavClick($event)\"\n                         (onRightNav)=\"onRightNavClick($event)\"\n                         (onSelect)=\"dateSelected($event, 'month', selectEvent.SELECTION, false)\"\n                         *ngSwitchCase=\"'month'\"\n                         [config]=\"dayCalendarConfig\"\n                         [displayDate]=\"displayDate\"\n                         [ngModel]=\"_selected\"\n                         [theme]=\"theme\">\n      </dp-month-calendar>\n\n      <dp-time-select #timeSelect\n                      (onChange)=\"dateSelected($event, 'second', selectEvent.SELECTION, true)\"\n                      *ngSwitchCase=\"'time'\"\n                      [config]=\"timeSelectConfig\"\n                      [ngModel]=\"_selected && _selected[0]\"\n                      [theme]=\"theme\">\n      </dp-time-select>\n\n      <dp-day-time-calendar #daytimeCalendar\n                            (onChange)=\"dateSelected($event, 'second', selectEvent.SELECTION, true)\"\n                            (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                            (onLeftNav)=\"onLeftNavClick($event)\"\n                            (onRightNav)=\"onRightNavClick($event)\"\n                            *ngSwitchCase=\"'daytime'\"\n                            [config]=\"dayTimeCalendarConfig\"\n                            [displayDate]=\"displayDate\"\n                            [ngModel]=\"_selected && _selected[0]\"\n                            [theme]=\"theme\">\n      </dp-day-time-calendar>\n    </div>\n  </div>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [DatePickerService, DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DatePickerComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DatePickerComponent_1;
        }),
        multi: true
      }],
      styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:0}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106cc8;color:#fff}.dp-popup{position:relative;background:#fff;box-shadow:1px 1px 5px 0 rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);z-index:9999;white-space:nowrap}"]
    })], DatePickerComponent);

    var DatePickerDirectiveService =
    /*#__PURE__*/
    function () {
      function DatePickerDirectiveService(utilsService) {
        _classCallCheck(this, DatePickerDirectiveService);

        this.utilsService = utilsService;
      }

      _createClass(DatePickerDirectiveService, [{
        key: "convertToHTMLElement",
        value: function convertToHTMLElement(attachTo, baseElement) {
          if (typeof attachTo === 'string') {
            return this.utilsService.closestParent(baseElement, attachTo);
          } else if (attachTo) {
            return attachTo.nativeElement;
          }

          return undefined;
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var baseElement = arguments.length > 1 ? arguments[1] : undefined;
          var attachTo = arguments.length > 2 ? arguments[2] : undefined;

          var _config = Object.assign({}, config);

          _config.hideInputContainer = true;
          var native;

          if (config.inputElementContainer) {
            native = this.utilsService.getNativeElement(config.inputElementContainer);
          } else {
            native = baseElement ? baseElement.nativeElement : null;
          }

          if (native) {
            _config.inputElementContainer = attachTo ? this.convertToHTMLElement(attachTo, native) : native;
          }

          return _config;
        }
      }]);

      return DatePickerDirectiveService;
    }();

    DatePickerDirectiveService.ctorParameters = function () {
      return [{
        type: UtilsService
      }];
    };

    DatePickerDirectiveService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DatePickerDirectiveService);

    var DatePickerDirective =
    /*#__PURE__*/
    function () {
      function DatePickerDirective(viewContainerRef, elemRef, componentFactoryResolver, service, formControl, utilsService) {
        _classCallCheck(this, DatePickerDirective);

        this.viewContainerRef = viewContainerRef;
        this.elemRef = elemRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.service = service;
        this.formControl = formControl;
        this.utilsService = utilsService;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._mode = 'day';
      }

      _createClass(DatePickerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datePicker = this.createDatePicker();
          this.api = this.datePicker.api;
          this.updateDatepickerConfig();
          this.attachModelToDatePicker();
          this.datePicker.theme = this.theme;
        }
      }, {
        key: "createDatePicker",
        value: function createDatePicker() {
          var factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerComponent);
          return this.viewContainerRef.createComponent(factory).instance;
        }
      }, {
        key: "attachModelToDatePicker",
        value: function attachModelToDatePicker() {
          var _this11 = this;

          if (!this.formControl) {
            return;
          }

          this.datePicker.onViewDateChange(this.formControl.value);
          this.formControl.valueChanges.subscribe(function (value) {
            if (value !== _this11.datePicker.inputElementValue) {
              var strVal = _this11.utilsService.convertToString(value, _this11.datePicker.componentConfig.format);

              _this11.datePicker.onViewDateChange(strVal);
            }
          });
          var setup = true;
          this.datePicker.registerOnChange(function (value, changedByInput) {
            if (value) {
              var isMultiselectEmpty = setup && Array.isArray(value) && !value.length;

              if (!isMultiselectEmpty && !changedByInput) {
                _this11.formControl.control.setValue(_this11.datePicker.inputElementValue);
              }
            }

            var errors = _this11.datePicker.validateFn(value);

            if (!setup) {
              _this11.formControl.control.markAsDirty({
                onlySelf: true
              });
            } else {
              setup = false;
            }

            if (errors) {
              if (errors.hasOwnProperty('format')) {
                var given = errors['format'].given;
                _this11.datePicker.inputElementValue = given;

                if (!changedByInput) {
                  _this11.formControl.control.setValue(given);
                }
              }

              _this11.formControl.control.setErrors(errors);
            }
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.datePicker.onClick();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.datePicker.inputFocused();
        }
      }, {
        key: "markForCheck",
        value: function markForCheck() {
          if (this.datePicker) {
            this.datePicker.cd.markForCheck();
          }
        }
      }, {
        key: "updateDatepickerConfig",
        value: function updateDatepickerConfig() {
          if (this.datePicker) {
            this.datePicker.minDate = this.minDate;
            this.datePicker.maxDate = this.maxDate;
            this.datePicker.minTime = this.minTime;
            this.datePicker.maxTime = this.maxTime;
            this.datePicker.mode = this.mode || 'day';
            this.datePicker.displayDate = this.displayDate;
            this.datePicker.config = this.config;
            this.datePicker.open = this.open;
            this.datePicker.close = this.close;
            this.datePicker.onChange = this.onChange;
            this.datePicker.onGoToCurrent = this.onGoToCurrent;
            this.datePicker.onLeftNav = this.onLeftNav;
            this.datePicker.onRightNav = this.onRightNav;
            this.datePicker.onSelect = this.onSelect;
            this.datePicker.init();

            if (this.datePicker.componentConfig.disableKeypress) {
              this.elemRef.nativeElement.setAttribute('readonly', true);
            } else {
              this.elemRef.nativeElement.removeAttribute('readonly');
            }
          }
        }
      }, {
        key: "config",
        get: function get() {
          return this._config;
        },
        set: function set(config) {
          this._config = this.service.getConfig(config, this.viewContainerRef.element, this.attachTo);
          this.updateDatepickerConfig();
          this.markForCheck();
        }
      }, {
        key: "attachTo",
        get: function get() {
          return this._attachTo;
        },
        set: function set(attachTo) {
          this._attachTo = attachTo;
          this._config = this.service.getConfig(this.config, this.viewContainerRef.element, this.attachTo);
          this.updateDatepickerConfig();
          this.markForCheck();
        }
      }, {
        key: "theme",
        get: function get() {
          return this._theme;
        },
        set: function set(theme) {
          this._theme = theme;

          if (this.datePicker) {
            this.datePicker.theme = theme;
          }

          this.markForCheck();
        }
      }, {
        key: "mode",
        get: function get() {
          return this._mode;
        },
        set: function set(mode) {
          this._mode = mode;

          if (this.datePicker) {
            this.datePicker.mode = mode;
          }

          this.markForCheck();
        }
      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        },
        set: function set(minDate) {
          this._minDate = minDate;

          if (this.datePicker) {
            this.datePicker.minDate = minDate;
            this.datePicker.ngOnInit();
          }

          this.markForCheck();
        }
      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        },
        set: function set(maxDate) {
          this._maxDate = maxDate;

          if (this.datePicker) {
            this.datePicker.maxDate = maxDate;
            this.datePicker.ngOnInit();
          }

          this.markForCheck();
        }
      }, {
        key: "minTime",
        get: function get() {
          return this._minTime;
        },
        set: function set(minTime) {
          this._minTime = minTime;

          if (this.datePicker) {
            this.datePicker.minTime = minTime;
            this.datePicker.ngOnInit();
          }

          this.markForCheck();
        }
      }, {
        key: "maxTime",
        get: function get() {
          return this._maxTime;
        },
        set: function set(maxTime) {
          this._maxTime = maxTime;

          if (this.datePicker) {
            this.datePicker.maxTime = maxTime;
            this.datePicker.ngOnInit();
          }

          this.markForCheck();
        }
      }, {
        key: "displayDate",
        get: function get() {
          return this._displayDate;
        },
        set: function set(displayDate) {
          this._displayDate = displayDate;
          this.updateDatepickerConfig();
          this.markForCheck();
        }
      }]);

      return DatePickerDirective;
    }();

    DatePickerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: DatePickerDirectiveService
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: UtilsService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dpDayPicker')], DatePickerDirective.prototype, "config", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "attachTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "theme", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "mode", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "minDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "maxDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "minTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "maxTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatePickerDirective.prototype, "displayDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "open", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "close", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "onGoToCurrent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "onLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "onRightNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerDirective.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], DatePickerDirective.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')], DatePickerDirective.prototype, "onFocus", null);
    DatePickerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      exportAs: 'dpDayPicker',
      providers: [DatePickerDirectiveService],
      selector: '[dpDayPicker]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], DatePickerDirective);
    var DayCalendarComponent_1;
    var moment$5 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var DayCalendarComponent = DayCalendarComponent_1 =
    /*#__PURE__*/
    function () {
      function DayCalendarComponent(dayCalendarService, utilsService, cd) {
        _classCallCheck(this, DayCalendarComponent);

        this.dayCalendarService = dayCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMonthSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CalendarMode = ECalendarMode;
        this.isInited = false;
        this.currentCalendarMode = ECalendarMode.Day;
        this._shouldShowCurrent = true;
        this.api = {
          moveCalendarsBy: this.moveCalendarsBy.bind(this),
          moveCalendarTo: this.moveCalendarTo.bind(this),
          toggleCalendarMode: this.toggleCalendarMode.bind(this)
        };
      }

      _createClass(DayCalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isInited = true;
          this.init();
          this.initValidators();
        }
      }, {
        key: "init",
        value: function init() {
          this.componentConfig = this.dayCalendarService.getConfig(this.config);
          this.selected = this.selected || [];
          this.currentDateView = this.displayDate ? this.utilsService.convertToMoment(this.displayDate, this.componentConfig.format).clone() : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
          this.weekdays = this.dayCalendarService.generateWeekdays(this.componentConfig.firstDayOfWeek);
          this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
          this.monthCalendarConfig = this.dayCalendarService.getMonthCalendarConfig(this.componentConfig);
          this._shouldShowCurrent = this.shouldShowCurrent();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.isInited) {
            var minDate = changes.minDate,
                maxDate = changes.maxDate,
                config = changes.config;
            this.handleConfigChange(config);
            this.init();

            if (minDate || maxDate) {
              this.initValidators();
            }
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.inputValue = value;

          if (value) {
            this.selected = this.utilsService.convertToMomentArray(value, this.componentConfig);
            this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
          } else {
            this.selected = [];
          }

          this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
          this.cd.markForCheck();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "onChangeCallback",
        value: function onChangeCallback(_) {}
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "validate",
        value: function validate(formControl) {
          if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
          } else {
            return function () {
              return null;
            };
          }
        }
      }, {
        key: "processOnChangeCallback",
        value: function processOnChangeCallback(value) {
          return this.utilsService.convertFromMomentArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
        }
      }, {
        key: "initValidators",
        value: function initValidators() {
          this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate
          }, this.componentConfig.format, 'day');
          this.onChangeCallback(this.processOnChangeCallback(this.selected));
        }
      }, {
        key: "dayClicked",
        value: function dayClicked(day) {
          if (day.selected && !this.componentConfig.unSelectOnClick) {
            return;
          }

          this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, day);
          this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
          this.onSelect.emit(day);
        }
      }, {
        key: "getDayBtnText",
        value: function getDayBtnText(day) {
          return this.dayCalendarService.getDayBtnText(this.componentConfig, day.date);
        }
      }, {
        key: "getDayBtnCssClass",
        value: function getDayBtnCssClass(day) {
          var cssClasses = {
            'dp-selected': day.selected,
            'dp-current-month': day.currentMonth,
            'dp-prev-month': day.prevMonth,
            'dp-next-month': day.nextMonth,
            'dp-current-day': day.currentDay
          };
          var customCssClass = this.dayCalendarService.getDayBtnCssClass(this.componentConfig, day.date);

          if (customCssClass) {
            cssClasses[customCssClass] = true;
          }

          return cssClasses;
        }
      }, {
        key: "onLeftNavClick",
        value: function onLeftNavClick() {
          var from = this.currentDateView.clone();
          this.moveCalendarsBy(this.currentDateView, -1, 'month');
          var to = this.currentDateView.clone();
          this.onLeftNav.emit({
            from: from,
            to: to
          });
        }
      }, {
        key: "onRightNavClick",
        value: function onRightNavClick() {
          var from = this.currentDateView.clone();
          this.moveCalendarsBy(this.currentDateView, 1, 'month');
          var to = this.currentDateView.clone();
          this.onRightNav.emit({
            from: from,
            to: to
          });
        }
      }, {
        key: "onMonthCalendarLeftClick",
        value: function onMonthCalendarLeftClick(change) {
          this.onLeftNav.emit(change);
        }
      }, {
        key: "onMonthCalendarRightClick",
        value: function onMonthCalendarRightClick(change) {
          this.onRightNav.emit(change);
        }
      }, {
        key: "onMonthCalendarSecondaryLeftClick",
        value: function onMonthCalendarSecondaryLeftClick(change) {
          this.onRightNav.emit(change);
        }
      }, {
        key: "onMonthCalendarSecondaryRightClick",
        value: function onMonthCalendarSecondaryRightClick(change) {
          this.onLeftNav.emit(change);
        }
      }, {
        key: "getWeekdayName",
        value: function getWeekdayName(weekday) {
          if (this.componentConfig.weekDayFormatter) {
            return this.componentConfig.weekDayFormatter(weekday.day());
          }

          return weekday.format(this.componentConfig.weekDayFormat);
        }
      }, {
        key: "toggleCalendarMode",
        value: function toggleCalendarMode(mode) {
          if (this.currentCalendarMode !== mode) {
            this.currentCalendarMode = mode;
            this.onNavHeaderBtnClick.emit(mode);
          }

          this.cd.markForCheck();
        }
      }, {
        key: "monthSelected",
        value: function monthSelected(month) {
          this.currentDateView = month.date.clone();
          this.currentCalendarMode = ECalendarMode.Day;
          this.onMonthSelect.emit(month);
        }
      }, {
        key: "moveCalendarsBy",
        value: function moveCalendarsBy(current, amount) {
          var granularity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'month';
          this.currentDateView = current.clone().add(amount, granularity);
          this.cd.markForCheck();
        }
      }, {
        key: "moveCalendarTo",
        value: function moveCalendarTo(to) {
          if (to) {
            this.currentDateView = this.utilsService.convertToMoment(to, this.componentConfig.format);
          }

          this.cd.markForCheck();
        }
      }, {
        key: "shouldShowCurrent",
        value: function shouldShowCurrent() {
          return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, 'day', this.componentConfig.min, this.componentConfig.max);
        }
      }, {
        key: "goToCurrent",
        value: function goToCurrent() {
          this.currentDateView = moment$5();
          this.onGoToCurrent.emit();
        }
      }, {
        key: "handleConfigChange",
        value: function handleConfigChange(config) {
          if (config) {
            var prevConf = this.dayCalendarService.getConfig(config.previousValue);
            var currentConf = this.dayCalendarService.getConfig(config.currentValue);

            if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
              this._currentDateView = null;
            }

            if (prevConf.locale !== currentConf.locale) {
              if (this.currentDateView) {
                this.currentDateView.locale(currentConf.locale);
              }

              this.selected.forEach(function (m) {
                return m.locale(currentConf.locale);
              });
            }
          }
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(selected) {
          this._selected = selected;
          this.onChangeCallback(this.processOnChangeCallback(selected));
        }
      }, {
        key: "currentDateView",
        get: function get() {
          return this._currentDateView;
        },
        set: function set(current) {
          this._currentDateView = current.clone();
          this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this._currentDateView, this.selected);
          this.navLabel = this.dayCalendarService.getHeaderLabel(this.componentConfig, this._currentDateView);
          this.showLeftNav = this.dayCalendarService.shouldShowLeft(this.componentConfig.min, this.currentDateView);
          this.showRightNav = this.dayCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
        }
      }]);

      return DayCalendarComponent;
    }();

    DayCalendarComponent.ctorParameters = function () {
      return [{
        type: DayCalendarService
      }, {
        type: UtilsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayCalendarComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayCalendarComponent.prototype, "displayDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayCalendarComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayCalendarComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayCalendarComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayCalendarComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayCalendarComponent.prototype, "onMonthSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayCalendarComponent.prototype, "onNavHeaderBtnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayCalendarComponent.prototype, "onGoToCurrent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayCalendarComponent.prototype, "onLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayCalendarComponent.prototype, "onRightNav", void 0);
    DayCalendarComponent = DayCalendarComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dp-day-calendar',
      template: "<div *ngIf=\"currentCalendarMode ===  CalendarMode.Day\" class=\"dp-day-calendar-container\">\n  <dp-calendar-nav\n      (onGoToCurrent)=\"goToCurrent()\"\n      (onLabelClick)=\"toggleCalendarMode(CalendarMode.Month)\"\n      (onLeftNav)=\"onLeftNavClick()\"\n      (onRightNav)=\"onRightNavClick()\"\n      [isLabelClickable]=\"componentConfig.enableMonthSelector\"\n      [label]=\"navLabel\"\n      [showGoToCurrent]=\"_shouldShowCurrent\"\n      [showLeftNav]=\"showLeftNav\"\n      [showRightNav]=\"showRightNav\"\n      [theme]=\"theme\">\n  </dp-calendar-nav>\n\n  <div [ngClass]=\"{'dp-hide-near-month': !componentConfig.showNearMonthDays}\"\n       class=\"dp-calendar-wrapper\">\n    <div class=\"dp-weekdays\">\n      <span *ngFor=\"let weekday of weekdays\"\n            [innerText]=\"getWeekdayName(weekday)\"\n            class=\"dp-calendar-weekday\">\n      </span>\n    </div>\n    <div *ngFor=\"let week of weeks\" class=\"dp-calendar-week\">\n      <span *ngIf=\"componentConfig.showWeekNumbers\"\n            [innerText]=\"week[0].date.isoWeek()\"\n            class=\"dp-week-number\">\n      </span>\n      <button (click)=\"dayClicked(day)\"\n              *ngFor=\"let day of week\"\n              [attr.data-date]=\"day.date.format(componentConfig.format)\"\n              [disabled]=\"day.disabled\"\n              [innerText]=\"getDayBtnText(day)\"\n              [ngClass]=\"getDayBtnCssClass(day)\"\n              class=\"dp-calendar-day\"\n              type=\"button\">\n      </button>\n    </div>\n  </div>\n</div>\n\n<dp-month-calendar\n    (onLeftNav)=\"onMonthCalendarLeftClick($event)\"\n    (onLeftSecondaryNav)=\"onMonthCalendarSecondaryLeftClick($event)\"\n    (onNavHeaderBtnClick)=\"toggleCalendarMode(CalendarMode.Day)\"\n    (onRightNav)=\"onMonthCalendarRightClick($event)\"\n    (onRightSecondaryNav)=\"onMonthCalendarSecondaryRightClick($event)\"\n    (onSelect)=\"monthSelected($event)\"\n    *ngIf=\"currentCalendarMode ===  CalendarMode.Month\"\n    [config]=\"monthCalendarConfig\"\n    [displayDate]=\"_currentDateView\"\n    [ngModel]=\"_selected\"\n    [theme]=\"theme\">\n</dp-month-calendar>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [DayCalendarService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DayCalendarComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DayCalendarComponent_1;
        }),
        multi: true
      }],
      styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#fff}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000;border-bottom:1px solid #000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106cc8;color:#fff}dp-day-calendar .dp-next-month,dp-day-calendar .dp-prev-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-next-month,dp-day-calendar .dp-hide-near-month .dp-prev-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-day-calendar.dp-material .dp-calendar-day,dp-day-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-day-calendar.dp-material .dp-calendar-day:hover,dp-day-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-day-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106cc8}"]
    })], DayCalendarComponent);
    var moment$6 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var MonthCalendarService =
    /*#__PURE__*/
    function () {
      function MonthCalendarService(utilsService) {
        _classCallCheck(this, MonthCalendarService);

        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
          allowMultiSelect: false,
          yearFormat: 'YYYY',
          format: 'MM-YYYY',
          isNavHeaderBtnClickable: false,
          monthBtnFormat: 'MMM',
          locale: moment$6.locale(),
          multipleYearsNavigateBy: 10,
          showMultipleYearsNavigation: false,
          unSelectOnClick: true
        };
      }

      _createClass(MonthCalendarService, [{
        key: "getConfig",
        value: function getConfig(config) {
          var _config = Object.assign({}, this.DEFAULT_CONFIG, this.utilsService.clearUndefined(config));

          this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
          moment$6.locale(_config.locale);
          return _config;
        }
      }, {
        key: "generateYear",
        value: function generateYear(config, year) {
          var _this12 = this;

          var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var index = year.clone().startOf('year');
          return this.utilsService.createArray(3).map(function () {
            return _this12.utilsService.createArray(4).map(function () {
              var date = index.clone();
              var month = {
                date: date,
                selected: !!selected.find(function (s) {
                  return index.isSame(s, 'month');
                }),
                currentMonth: index.isSame(moment$6(), 'month'),
                disabled: _this12.isMonthDisabled(date, config),
                text: _this12.getMonthBtnText(config, date)
              };
              index.add(1, 'month');
              return month;
            });
          });
        }
      }, {
        key: "isMonthDisabled",
        value: function isMonthDisabled(date, config) {
          if (config.min && date.isBefore(config.min, 'month')) {
            return true;
          }

          return !!(config.max && date.isAfter(config.max, 'month'));
        }
      }, {
        key: "shouldShowLeft",
        value: function shouldShowLeft(min, currentMonthView) {
          return min ? min.isBefore(currentMonthView, 'year') : true;
        }
      }, {
        key: "shouldShowRight",
        value: function shouldShowRight(max, currentMonthView) {
          return max ? max.isAfter(currentMonthView, 'year') : true;
        }
      }, {
        key: "getHeaderLabel",
        value: function getHeaderLabel(config, year) {
          if (config.yearFormatter) {
            return config.yearFormatter(year);
          }

          return year.format(config.yearFormat);
        }
      }, {
        key: "getMonthBtnText",
        value: function getMonthBtnText(config, month) {
          if (config.monthBtnFormatter) {
            return config.monthBtnFormatter(month);
          }

          return month.format(config.monthBtnFormat);
        }
      }, {
        key: "getMonthBtnCssClass",
        value: function getMonthBtnCssClass(config, month) {
          if (config.monthBtnCssClassCallback) {
            return config.monthBtnCssClassCallback(month);
          }

          return '';
        }
      }]);

      return MonthCalendarService;
    }();

    MonthCalendarService.ctorParameters = function () {
      return [{
        type: UtilsService
      }];
    };

    MonthCalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MonthCalendarService);
    var MonthCalendarComponent_1;
    var moment$7 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var MonthCalendarComponent = MonthCalendarComponent_1 =
    /*#__PURE__*/
    function () {
      function MonthCalendarComponent(monthCalendarService, utilsService, cd) {
        _classCallCheck(this, MonthCalendarComponent);

        this.monthCalendarService = monthCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInited = false;
        this._shouldShowCurrent = true;
        this.api = {
          toggleCalendar: this.toggleCalendarMode.bind(this),
          moveCalendarTo: this.moveCalendarTo.bind(this)
        };
      }

      _createClass(MonthCalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isInited = true;
          this.init();
          this.initValidators();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.isInited) {
            var minDate = changes.minDate,
                maxDate = changes.maxDate,
                config = changes.config;
            this.handleConfigChange(config);
            this.init();

            if (minDate || maxDate) {
              this.initValidators();
            }
          }
        }
      }, {
        key: "init",
        value: function init() {
          this.componentConfig = this.monthCalendarService.getConfig(this.config);
          this.selected = this.selected || [];
          this.currentDateView = this.displayDate ? this.displayDate : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
          this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
          this._shouldShowCurrent = this.shouldShowCurrent();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.inputValue = value;

          if (value) {
            this.selected = this.utilsService.convertToMomentArray(value, this.componentConfig);
            this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
            this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
          } else {
            this.selected = [];
            this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
          }

          this.cd.markForCheck();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "onChangeCallback",
        value: function onChangeCallback(_) {}
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "validate",
        value: function validate(formControl) {
          if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
          } else {
            return function () {
              return null;
            };
          }
        }
      }, {
        key: "processOnChangeCallback",
        value: function processOnChangeCallback(value) {
          return this.utilsService.convertFromMomentArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
        }
      }, {
        key: "initValidators",
        value: function initValidators() {
          this.validateFn = this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate
          }, this.componentConfig.format, 'month');
          this.onChangeCallback(this.processOnChangeCallback(this.selected));
        }
      }, {
        key: "monthClicked",
        value: function monthClicked(month) {
          if (month.selected && !this.componentConfig.unSelectOnClick) {
            return;
          }

          this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, month, 'month');
          this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
          this.onSelect.emit(month);
        }
      }, {
        key: "onLeftNavClick",
        value: function onLeftNavClick() {
          var from = this.currentDateView.clone();
          this.currentDateView = this.currentDateView.clone().subtract(1, 'year');
          var to = this.currentDateView.clone();
          this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
          this.onLeftNav.emit({
            from: from,
            to: to
          });
        }
      }, {
        key: "onLeftSecondaryNavClick",
        value: function onLeftSecondaryNavClick() {
          var navigateBy = this.componentConfig.multipleYearsNavigateBy;
          var isOutsideRange = this.componentConfig.min && this.currentDateView.year() - this.componentConfig.min.year() < navigateBy;

          if (isOutsideRange) {
            navigateBy = this.currentDateView.year() - this.componentConfig.min.year();
          }

          var from = this.currentDateView.clone();
          this.currentDateView = this.currentDateView.clone().subtract(navigateBy, 'year');
          var to = this.currentDateView.clone();
          this.onLeftSecondaryNav.emit({
            from: from,
            to: to
          });
        }
      }, {
        key: "onRightNavClick",
        value: function onRightNavClick() {
          var from = this.currentDateView.clone();
          this.currentDateView = this.currentDateView.clone().add(1, 'year');
          var to = this.currentDateView.clone();
          this.onRightNav.emit({
            from: from,
            to: to
          });
        }
      }, {
        key: "onRightSecondaryNavClick",
        value: function onRightSecondaryNavClick() {
          var navigateBy = this.componentConfig.multipleYearsNavigateBy;
          var isOutsideRange = this.componentConfig.max && this.componentConfig.max.year() - this.currentDateView.year() < navigateBy;

          if (isOutsideRange) {
            navigateBy = this.componentConfig.max.year() - this.currentDateView.year();
          }

          var from = this.currentDateView.clone();
          this.currentDateView = this.currentDateView.clone().add(navigateBy, 'year');
          var to = this.currentDateView.clone();
          this.onRightSecondaryNav.emit({
            from: from,
            to: to
          });
        }
      }, {
        key: "toggleCalendarMode",
        value: function toggleCalendarMode() {
          this.onNavHeaderBtnClick.emit();
        }
      }, {
        key: "getMonthBtnCssClass",
        value: function getMonthBtnCssClass(month) {
          var cssClass = {
            'dp-selected': month.selected,
            'dp-current-month': month.currentMonth
          };
          var customCssClass = this.monthCalendarService.getMonthBtnCssClass(this.componentConfig, month.date);

          if (customCssClass) {
            cssClass[customCssClass] = true;
          }

          return cssClass;
        }
      }, {
        key: "shouldShowCurrent",
        value: function shouldShowCurrent() {
          return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, 'month', this.componentConfig.min, this.componentConfig.max);
        }
      }, {
        key: "goToCurrent",
        value: function goToCurrent() {
          this.currentDateView = moment$7();
          this.onGoToCurrent.emit();
        }
      }, {
        key: "moveCalendarTo",
        value: function moveCalendarTo(to) {
          if (to) {
            this.currentDateView = this.utilsService.convertToMoment(to, this.componentConfig.format);
            this.cd.markForCheck();
          }
        }
      }, {
        key: "handleConfigChange",
        value: function handleConfigChange(config) {
          if (config) {
            var prevConf = this.monthCalendarService.getConfig(config.previousValue);
            var currentConf = this.monthCalendarService.getConfig(config.currentValue);

            if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
              this._currentDateView = null;
            }

            if (prevConf.locale !== currentConf.locale) {
              if (this.currentDateView) {
                this.currentDateView.locale(currentConf.locale);
              }

              (this.selected || []).forEach(function (m) {
                return m.locale(currentConf.locale);
              });
            }
          }
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(selected) {
          this._selected = selected;
          this.onChangeCallback(this.processOnChangeCallback(selected));
        }
      }, {
        key: "currentDateView",
        get: function get() {
          return this._currentDateView;
        },
        set: function set(current) {
          this._currentDateView = current.clone();
          this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this._currentDateView, this.selected);
          this.navLabel = this.monthCalendarService.getHeaderLabel(this.componentConfig, this.currentDateView);
          this.showLeftNav = this.monthCalendarService.shouldShowLeft(this.componentConfig.min, this._currentDateView);
          this.showRightNav = this.monthCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
          this.showSecondaryLeftNav = this.componentConfig.showMultipleYearsNavigation && this.showLeftNav;
          this.showSecondaryRightNav = this.componentConfig.showMultipleYearsNavigation && this.showRightNav;
        }
      }]);

      return MonthCalendarComponent;
    }();

    MonthCalendarComponent.ctorParameters = function () {
      return [{
        type: MonthCalendarService
      }, {
        type: UtilsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthCalendarComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthCalendarComponent.prototype, "displayDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthCalendarComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthCalendarComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonthCalendarComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onNavHeaderBtnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onGoToCurrent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onRightNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onLeftSecondaryNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MonthCalendarComponent.prototype, "onRightSecondaryNav", void 0);
    MonthCalendarComponent = MonthCalendarComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dp-month-calendar',
      template: "<div class=\"dp-month-calendar-container\">\n  <dp-calendar-nav\n      (onGoToCurrent)=\"goToCurrent()\"\n      (onLabelClick)=\"toggleCalendarMode()\"\n      (onLeftNav)=\"onLeftNavClick()\"\n      (onLeftSecondaryNav)=\"onLeftSecondaryNavClick()\"\n      (onRightNav)=\"onRightNavClick()\"\n      (onRightSecondaryNav)=\"onRightSecondaryNavClick()\"\n      [isLabelClickable]=\"componentConfig.isNavHeaderBtnClickable\"\n      [label]=\"navLabel\"\n      [showGoToCurrent]=\"shouldShowCurrent()\"\n      [showLeftNav]=\"showLeftNav\"\n      [showLeftSecondaryNav]=\"showSecondaryLeftNav\"\n      [showRightNav]=\"showRightNav\"\n      [showRightSecondaryNav]=\"showSecondaryRightNav\"\n      [theme]=\"theme\">\n  </dp-calendar-nav>\n\n  <div class=\"dp-calendar-wrapper\">\n    <div *ngFor=\"let monthRow of yearMonths\" class=\"dp-months-row\">\n      <button (click)=\"monthClicked(month)\"\n              *ngFor=\"let month of monthRow\"\n              [attr.data-date]=\"month.date.format(componentConfig.format)\"\n              [disabled]=\"month.disabled\"\n              [innerText]=\"month.text\"\n              [ngClass]=\"getMonthBtnCssClass(month)\"\n              class=\"dp-calendar-month\"\n              type=\"button\">\n      </button>\n    </div>\n  </div>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [MonthCalendarService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MonthCalendarComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MonthCalendarComponent_1;
        }),
        multi: true
      }],
      styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#fff}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#e0e0e0;border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-month-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106cc8}"]
    })], MonthCalendarComponent);
    var TimeSelectComponent_1;
    var moment$8 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var TimeSelectComponent = TimeSelectComponent_1 =
    /*#__PURE__*/
    function () {
      function TimeSelectComponent(timeSelectService, utilsService, cd) {
        _classCallCheck(this, TimeSelectComponent);

        this.timeSelectService = timeSelectService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInited = false;
        this.api = {
          triggerChange: this.emitChange.bind(this)
        };
      }

      _createClass(TimeSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isInited = true;
          this.init();
          this.initValidators();
        }
      }, {
        key: "init",
        value: function init() {
          this.componentConfig = this.timeSelectService.getConfig(this.config);
          this.selected = this.selected || moment$8();
          this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.isInited) {
            var minDate = changes.minDate,
                maxDate = changes.maxDate,
                minTime = changes.minTime,
                maxTime = changes.maxTime;
            this.init();

            if (minDate || maxDate || minTime || maxTime) {
              this.initValidators();
            }

            this.handleConfigChange(changes.config);
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.inputValue = value;

          if (value) {
            var momentValue = this.utilsService.convertToMomentArray(value, {
              allowMultiSelect: false,
              format: this.timeSelectService.getTimeFormat(this.componentConfig)
            })[0];

            if (momentValue.isValid()) {
              this.selected = momentValue;
              this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
            }
          }

          this.cd.markForCheck();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "onChangeCallback",
        value: function onChangeCallback(_) {}
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "validate",
        value: function validate(formControl) {
          if (this.minDate || this.maxDate || this.minTime || this.maxTime) {
            return this.validateFn(formControl.value);
          } else {
            return function () {
              return null;
            };
          }
        }
      }, {
        key: "processOnChangeCallback",
        value: function processOnChangeCallback(value) {
          return this.utilsService.convertFromMomentArray(this.timeSelectService.getTimeFormat(this.componentConfig), [value], this.componentConfig.returnedValueType || this.inputValueType);
        }
      }, {
        key: "initValidators",
        value: function initValidators() {
          this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate,
            minTime: this.minTime,
            maxTime: this.maxTime
          }, undefined, 'day');
          this.onChangeCallback(this.processOnChangeCallback(this.selected));
        }
      }, {
        key: "decrease",
        value: function decrease(unit) {
          this.selected = this.timeSelectService.decrease(this.componentConfig, this.selected, unit);
          this.emitChange();
        }
      }, {
        key: "increase",
        value: function increase(unit) {
          this.selected = this.timeSelectService.increase(this.componentConfig, this.selected, unit);
          this.emitChange();
        }
      }, {
        key: "toggleMeridiem",
        value: function toggleMeridiem() {
          this.selected = this.timeSelectService.toggleMeridiem(this.selected);
          this.emitChange();
        }
      }, {
        key: "emitChange",
        value: function emitChange() {
          this.onChange.emit({
            date: this.selected,
            selected: false
          });
          this.cd.markForCheck();
        }
      }, {
        key: "calculateTimeParts",
        value: function calculateTimeParts(time) {
          this.hours = this.timeSelectService.getHours(this.componentConfig, time);
          this.minutes = this.timeSelectService.getMinutes(this.componentConfig, time);
          this.seconds = this.timeSelectService.getSeconds(this.componentConfig, time);
          this.meridiem = this.timeSelectService.getMeridiem(this.componentConfig, time);
        }
      }, {
        key: "handleConfigChange",
        value: function handleConfigChange(config) {
          if (config) {
            var prevConf = this.timeSelectService.getConfig(config.previousValue);
            var currentConf = this.timeSelectService.getConfig(config.currentValue);

            if (prevConf.locale !== currentConf.locale) {
              this.selected = this.selected.clone().locale(currentConf.locale);
            }
          }
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(selected) {
          this._selected = selected;
          this.calculateTimeParts(this.selected);
          this.showDecHour = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'hour');
          this.showDecMinute = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'minute');
          this.showDecSecond = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'second');
          this.showIncHour = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'hour');
          this.showIncMinute = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'minute');
          this.showIncSecond = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'second');
          this.showToggleMeridiem = this.timeSelectService.shouldShowToggleMeridiem(this.componentConfig, this._selected);
          this.onChangeCallback(this.processOnChangeCallback(selected));
        }
      }]);

      return TimeSelectComponent;
    }();

    TimeSelectComponent.ctorParameters = function () {
      return [{
        type: TimeSelectService
      }, {
        type: UtilsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "displayDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TimeSelectComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TimeSelectComponent.prototype, "onChange", void 0);
    TimeSelectComponent = TimeSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dp-time-select',
      template: "<ul class=\"dp-time-select-controls\">\n  <li class=\"dp-time-select-control dp-time-select-control-hours\">\n    <button (click)=\"increase('hour')\"\n            [disabled]=\"!showIncHour\"\n            class=\"dp-time-select-control-up\"\n            type=\"button\">\n    </button>\n    <span [innerText]=\"hours\"\n          class=\"dp-time-select-display-hours\">\n    </span>\n    <button (click)=\"decrease('hour')\"\n            [disabled]=\"!showDecHour\"\n            class=\"dp-time-select-control-down\"\n            type=\"button\">\n    </button>\n  </li>\n  <li [innerText]=\"componentConfig.timeSeparator\"\n      class=\"dp-time-select-control dp-time-select-separator\">\n  </li>\n  <li class=\"dp-time-select-control dp-time-select-control-minutes\">\n    <button (click)=\"increase('minute')\"\n            [disabled]=\"!showIncMinute\"\n            class=\"dp-time-select-control-up\"\n            type=\"button\"></button>\n    <span [innerText]=\"minutes\"\n          class=\"dp-time-select-display-minutes\">\n    </span>\n    <button (click)=\"decrease('minute')\"\n            [disabled]=\"!showDecMinute\" class=\"dp-time-select-control-down\"\n            type=\"button\">\n    </button>\n  </li>\n  <ng-container *ngIf=\"componentConfig.showSeconds\">\n    <li [innerText]=\"componentConfig.timeSeparator\"\n        class=\"dp-time-select-control dp-time-select-separator\">\n    </li>\n    <li class=\"dp-time-select-control dp-time-select-control-seconds\">\n      <button (click)=\"increase('second')\"\n              [disabled]=\"!showIncSecond\"\n              class=\"dp-time-select-control-up\"\n              type=\"button\"></button>\n      <span [innerText]=\"seconds\"\n            class=\"dp-time-select-display-seconds\">\n      </span>\n      <button (click)=\"decrease('second')\"\n              [disabled]=\"!showDecSecond\"\n              class=\"dp-time-select-control-down\"\n              type=\"button\">\n      </button>\n    </li>\n  </ng-container>\n  <li *ngIf=\"!componentConfig.showTwentyFourHours\" class=\"dp-time-select-control dp-time-select-control-meridiem\">\n    <button (click)=\"toggleMeridiem()\"\n            [disabled]=\"!showToggleMeridiem\"\n            class=\"dp-time-select-control-up\"\n            type=\"button\">\n    </button>\n    <span [innerText]=\"meridiem\"\n          class=\"dp-time-select-display-meridiem\">\n    </span>\n    <button (click)=\"toggleMeridiem()\"\n            [disabled]=\"!showToggleMeridiem\"\n            class=\"dp-time-select-control-down\"\n            type=\"button\">\n    </button>\n  </li>\n</ul>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [TimeSelectService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return TimeSelectComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return TimeSelectComponent_1;
        }),
        multi: true
      }],
      styles: ["dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#fff}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-down,dp-time-select .dp-time-select-control-up{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-down::before,dp-time-select .dp-time-select-control-up::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0}dp-time-select .dp-time-select-control-up::before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down::before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-down,dp-time-select.dp-material .dp-time-select-control-up{box-sizing:border-box;background:0 0;border:none;outline:0;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-down::before,dp-time-select.dp-material .dp-time-select-control-up::before{left:0}dp-time-select.dp-material .dp-time-select-control-down:hover,dp-time-select.dp-material .dp-time-select-control-up:hover{background:#e0e0e0}"]
    })], TimeSelectComponent);

    var CalendarNavComponent =
    /*#__PURE__*/
    function () {
      function CalendarNavComponent() {
        _classCallCheck(this, CalendarNavComponent);

        this.isLabelClickable = false;
        this.showLeftNav = true;
        this.showLeftSecondaryNav = false;
        this.showRightNav = true;
        this.showRightSecondaryNav = false;
        this.leftNavDisabled = false;
        this.leftSecondaryNavDisabled = false;
        this.rightNavDisabled = false;
        this.rightSecondaryNavDisabled = false;
        this.showGoToCurrent = true;
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CalendarNavComponent, [{
        key: "leftNavClicked",
        value: function leftNavClicked() {
          this.onLeftNav.emit();
        }
      }, {
        key: "leftSecondaryNavClicked",
        value: function leftSecondaryNavClicked() {
          this.onLeftSecondaryNav.emit();
        }
      }, {
        key: "rightNavClicked",
        value: function rightNavClicked() {
          this.onRightNav.emit();
        }
      }, {
        key: "rightSecondaryNavClicked",
        value: function rightSecondaryNavClicked() {
          this.onRightSecondaryNav.emit();
        }
      }, {
        key: "labelClicked",
        value: function labelClicked() {
          this.onLabelClick.emit();
        }
      }]);

      return CalendarNavComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "isLabelClickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "showLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "showLeftSecondaryNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "showRightNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "showRightSecondaryNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "leftNavDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "leftSecondaryNavDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "rightNavDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "rightSecondaryNavDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "showGoToCurrent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarNavComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarNavComponent.prototype, "onLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarNavComponent.prototype, "onLeftSecondaryNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarNavComponent.prototype, "onRightNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarNavComponent.prototype, "onRightSecondaryNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarNavComponent.prototype, "onLabelClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarNavComponent.prototype, "onGoToCurrent", void 0);
    CalendarNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dp-calendar-nav',
      template: "<div class=\"dp-calendar-nav-container\">\n  <div class=\"dp-nav-header\">\n    <span [attr.data-hidden]=\"isLabelClickable\"\n          [hidden]=\"isLabelClickable\"\n          [innerText]=\"label\">\n    </span>\n    <button (click)=\"labelClicked()\"\n            [attr.data-hidden]=\"!isLabelClickable\"\n            [hidden]=\"!isLabelClickable\"\n            [innerText]=\"label\"\n            class=\"dp-nav-header-btn\"\n            type=\"button\">\n    </button>\n  </div>\n\n  <div class=\"dp-nav-btns-container\">\n    <div class=\"dp-calendar-nav-container-left\">\n      <button (click)=\"leftSecondaryNavClicked()\"\n              *ngIf=\"showLeftSecondaryNav\"\n              [disabled]=\"leftSecondaryNavDisabled\"\n              class=\"dp-calendar-secondary-nav-left\"\n              type=\"button\">\n      </button>\n      <button (click)=\"leftNavClicked()\"\n              [attr.data-hidden]=\"!showLeftNav\"\n              [disabled]=\"leftNavDisabled\"\n              [hidden]=\"!showLeftNav\"\n              class=\"dp-calendar-nav-left\"\n              type=\"button\">\n      </button>\n    </div>\n    <button (click)=\"onGoToCurrent.emit()\"\n            *ngIf=\"showGoToCurrent\"\n            class=\"dp-current-location-btn\"\n            type=\"button\">\n    </button>\n    <div class=\"dp-calendar-nav-container-right\">\n      <button (click)=\"rightNavClicked()\"\n              [attr.data-hidden]=\"!showRightNav\"\n              [disabled]=\"rightNavDisabled\"\n              [hidden]=\"!showRightNav\"\n              class=\"dp-calendar-nav-right\"\n              type=\"button\">\n      </button>\n      <button (click)=\"rightSecondaryNavClicked()\"\n              *ngIf=\"showRightSecondaryNav\"\n              [disabled]=\"rightSecondaryNavDisabled\"\n              class=\"dp-calendar-secondary-nav-right\"\n              type=\"button\">\n      </button>\n    </div>\n  </div>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: ["dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::after,dp-calendar-nav .dp-calendar-secondary-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:rgba(0,0,0,.6);border:1px solid rgba(0,0,0,.6);outline:0;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #e0e0e0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#fff;outline:0;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#fff;outline:0}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:rgba(0,0,0,.05)}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:rgba(0,0,0,.1)}"]
    })], CalendarNavComponent);
    var DayTimeCalendarComponent_1;

    var DayTimeCalendarComponent = DayTimeCalendarComponent_1 =
    /*#__PURE__*/
    function () {
      function DayTimeCalendarComponent(dayTimeCalendarService, utilsService, cd) {
        _classCallCheck(this, DayTimeCalendarComponent);

        this.dayTimeCalendarService = dayTimeCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInited = false;
        this.api = {
          moveCalendarTo: this.moveCalendarTo.bind(this)
        };
      }

      _createClass(DayTimeCalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isInited = true;
          this.init();
          this.initValidators();
        }
      }, {
        key: "init",
        value: function init() {
          this.componentConfig = this.dayTimeCalendarService.getConfig(this.config);
          this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.isInited) {
            var minDate = changes.minDate,
                maxDate = changes.maxDate;
            this.init();

            if (minDate || maxDate) {
              this.initValidators();
            }
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.inputValue = value;

          if (value) {
            this.selected = this.utilsService.convertToMomentArray(value, {
              format: this.componentConfig.format,
              allowMultiSelect: false
            })[0];
            this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
          } else {
            this.selected = null;
          }

          this.cd.markForCheck();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "onChangeCallback",
        value: function onChangeCallback(_) {}
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "validate",
        value: function validate(formControl) {
          if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
          } else {
            return function () {
              return null;
            };
          }
        }
      }, {
        key: "processOnChangeCallback",
        value: function processOnChangeCallback(value) {
          return this.utilsService.convertFromMomentArray(this.componentConfig.format, [value], this.componentConfig.returnedValueType || this.inputValueType);
        }
      }, {
        key: "initValidators",
        value: function initValidators() {
          this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate
          }, undefined, 'daytime');
          this.onChangeCallback(this.processOnChangeCallback(this.selected));
        }
      }, {
        key: "dateSelected",
        value: function dateSelected(day) {
          this.selected = this.dayTimeCalendarService.updateDay(this.selected, day.date, this.config);
          this.emitChange();
        }
      }, {
        key: "timeChange",
        value: function timeChange(time) {
          this.selected = this.dayTimeCalendarService.updateTime(this.selected, time.date);
          this.emitChange();
        }
      }, {
        key: "emitChange",
        value: function emitChange() {
          this.onChange.emit({
            date: this.selected,
            selected: false
          });
        }
      }, {
        key: "moveCalendarTo",
        value: function moveCalendarTo(to) {
          if (to) {
            this.dayCalendarRef.moveCalendarTo(to);
          }
        }
      }, {
        key: "onLeftNavClick",
        value: function onLeftNavClick(change) {
          this.onLeftNav.emit(change);
        }
      }, {
        key: "onRightNavClick",
        value: function onRightNavClick(change) {
          this.onRightNav.emit(change);
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(selected) {
          this._selected = selected;
          this.onChangeCallback(this.processOnChangeCallback(selected));
        }
      }]);

      return DayTimeCalendarComponent;
    }();

    DayTimeCalendarComponent.ctorParameters = function () {
      return [{
        type: DayTimeCalendarService
      }, {
        type: UtilsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayTimeCalendarComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayTimeCalendarComponent.prototype, "displayDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayTimeCalendarComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayTimeCalendarComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayTimeCalendarComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayTimeCalendarComponent.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayTimeCalendarComponent.prototype, "onGoToCurrent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayTimeCalendarComponent.prototype, "onLeftNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DayTimeCalendarComponent.prototype, "onRightNav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayCalendar', {
      static: false
    })], DayTimeCalendarComponent.prototype, "dayCalendarRef", void 0);
    DayTimeCalendarComponent = DayTimeCalendarComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dp-day-time-calendar',
      template: "<dp-day-calendar #dayCalendar\n                 (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                 (onLeftNav)=\"onLeftNavClick($event)\"\n                 (onRightNav)=\"onRightNavClick($event)\"\n                 (onSelect)=\"dateSelected($event)\"\n                 [config]=\"componentConfig\"\n                 [displayDate]=\"displayDate\"\n                 [ngModel]=\"_selected\"\n                 [theme]=\"theme\">\n</dp-day-calendar>\n<dp-time-select #timeSelect\n                (onChange)=\"timeChange($event)\"\n                [config]=\"componentConfig\"\n                [ngModel]=\"_selected\"\n                [theme]=\"theme\">\n</dp-time-select>\n",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      providers: [DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DayTimeCalendarComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DayTimeCalendarComponent_1;
        }),
        multi: true
      }],
      styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #e0e0e0;border-top:0}"]
    })], DayTimeCalendarComponent);

    var DpDatePickerModule = function DpDatePickerModule() {
      _classCallCheck(this, DpDatePickerModule);
    };

    DpDatePickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [DatePickerComponent, DatePickerDirective, DayCalendarComponent, MonthCalendarComponent, CalendarNavComponent, TimeSelectComponent, DayTimeCalendarComponent],
      entryComponents: [DatePickerComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
      exports: [DatePickerComponent, DatePickerDirective, MonthCalendarComponent, DayCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent]
    })], DpDatePickerModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-date-picker.js.map

    /***/
  },

  /***/
  "./src/app/modules/etapes/etapes.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/etapes/etapes.service.ts ***!
    \**************************************************/

  /*! exports provided: EtapeService */

  /***/
  function srcAppModulesEtapesEtapesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EtapeService", function () {
      return EtapeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var headers = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var EtapeService =
    /*#__PURE__*/
    function () {
      function EtapeService(http) {
        _classCallCheck(this, EtapeService);

        this.http = http;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.resourceUrl = this.env.baseUrl + 'etape';
      }

      _createClass(EtapeService, [{
        key: "create",
        value: function create(etape) {
          return this.http.post(this.resourceUrl, etape, headers);
        }
      }, {
        key: "createForSpecificProject",
        value: function createForSpecificProject(etape) {
          return this.http.post(this.resourceUrl + '/specific', etape, headers);
        }
      }, {
        key: "update",
        value: function update(etape) {
          return this.http.put(this.resourceUrl, etape, headers);
        }
      }, {
        key: "find",
        value: function find(slug) {
          return this.http.get(this.resourceUrl + '/show?slug=' + slug, headers);
        }
      }, {
        key: "query",
        value: function query(page) {
          return this.http.get(this.resourceUrl + '?page=' + page, headers);
        }
      }, {
        key: "fetchNoPagination",
        value: function fetchNoPagination() {
          return this.http.get(this.resourceUrl + '/no-pagination', headers);
        }
      }, {
        key: "delete",
        value: function _delete(slug) {
          return this.http.get("".concat(this.resourceUrl) + '/delete?slug=' + slug, headers);
        }
      }, {
        key: "getByGroup",
        value: function getByGroup(page, slug) {
          return this.http.get(this.resourceUrl + '/select-by-project?page=' + page + '&slug=' + slug, headers);
        }
      }]);

      return EtapeService;
    }();

    EtapeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EtapeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EtapeService);
    /***/
  },

  /***/
  "./src/app/modules/etapes/etapes.ts":
  /*!******************************************!*\
    !*** ./src/app/modules/etapes/etapes.ts ***!
    \******************************************/

  /*! exports provided: Etape */

  /***/
  function srcAppModulesEtapesEtapesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Etape", function () {
      return Etape;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Etape = // tslint:disable-next-line: max-line-length
    function Etape(id, nom, slug, description, dateDebut, dateFin, cout, groupeTravail) {
      _classCallCheck(this, Etape);

      this.id = id;
      this.nom = nom;
      this.slug = slug;
      this.description = description;
      this.dateDebut = dateDebut;
      this.dateFin = dateFin;
      this.cout = cout;
      this.groupeTravail = groupeTravail;
    };
    /***/

  },

  /***/
  "./src/app/modules/projet/projet.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/projet/projet.service.ts ***!
    \**************************************************/

  /*! exports provided: ProjetService */

  /***/
  function srcAppModulesProjetProjetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetService", function () {
      return ProjetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var headers = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ProjetService =
    /*#__PURE__*/
    function () {
      function ProjetService(http) {
        _classCallCheck(this, ProjetService);

        this.http = http;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.resourceUrl = this.env.baseUrl + 'projet';
      }

      _createClass(ProjetService, [{
        key: "create",
        value: function create(employe) {
          return this.http.post(this.resourceUrl, employe, headers);
        }
      }, {
        key: "createMyProject",
        value: function createMyProject(employe) {
          return this.http.post(this.resourceUrl + '/create/own-projet', employe, headers);
        }
      }, {
        key: "update",
        value: function update(employe) {
          return this.http.put(this.resourceUrl, employe, headers);
        }
      }, {
        key: "find",
        value: function find(slug) {
          return this.http.get(this.resourceUrl + '/show?slug=' + slug, headers);
        }
      }, {
        key: "query",
        value: function query(page) {
          return this.http.get(this.resourceUrl + '?page=' + page, headers);
        }
      }, {
        key: "fetchNoPagination",
        value: function fetchNoPagination() {
          return this.http.get(this.resourceUrl + '/no-pagination', headers);
        }
      }, {
        key: "fetchAvailbleGroupe",
        value: function fetchAvailbleGroupe() {
          return this.http.get(this.resourceUrl + '/groupes', headers);
        }
      }, {
        key: "delete",
        value: function _delete(slug) {
          return this.http.put("".concat(this.resourceUrl) + '/delete', slug, headers);
        }
      }, {
        key: "select",
        value: function select(slug, page) {
          return this.http.get(this.resourceUrl + '/select?slug=' + slug + '&page=' + page, headers);
        }
      }, {
        key: "addMaitreDeouvre",
        value: function addMaitreDeouvre(maitreDeouvre) {
          return this.http.post(this.resourceUrl + '/create/own-projet', maitreDeouvre, headers);
        }
      }]);

      return ProjetService;
    }();

    ProjetService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjetService);
    /***/
  }
}]);
//# sourceMappingURL=default~modules-etapes-etapes-module~modules-projet-projet-module-es5.js.map