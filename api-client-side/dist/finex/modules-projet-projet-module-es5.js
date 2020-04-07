function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-projet-projet-module"], {
  /***/
  "./node_modules/mydatepicker/dist/directives/my-date-picker.focus.directive.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/directives/my-date-picker.focus.directive.js ***!
    \*************************************************************************************/

  /*! exports provided: FocusDirective */

  /***/
  function node_modulesMydatepickerDistDirectivesMyDatePickerFocusDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusDirective", function () {
      return FocusDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FocusDirective = function () {
      function FocusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
      }

      FocusDirective.prototype.ngAfterViewInit = function () {
        if (this.value === "0") {
          return;
        }

        this.renderer.invokeElementMethod(this.el.nativeElement, "focus", []);
      };

      FocusDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[mydpfocus]"
        }]
      }];
      FocusDirective.ctorParameters = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]
      }];
      FocusDirective.propDecorators = {
        'value': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mydpfocus"]
        }]
      };
      return FocusDirective;
    }(); //# sourceMappingURL=my-date-picker.focus.directive.js.map

    /***/

  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-calendar-view-changed.interface.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-calendar-view-changed.interface.js ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyCalendarViewChangedInterfaceJs(module, exports) {//# sourceMappingURL=my-calendar-view-changed.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-date-model.interface.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-date-model.interface.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyDateModelInterfaceJs(module, exports) {//# sourceMappingURL=my-date-model.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-date-range.interface.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-date-range.interface.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyDateRangeInterfaceJs(module, exports) {//# sourceMappingURL=my-date-range.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-date.interface.js":
  /*!************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-date.interface.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyDateInterfaceJs(module, exports) {//# sourceMappingURL=my-date.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-day-labels.interface.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-day-labels.interface.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyDayLabelsInterfaceJs(module, exports) {//# sourceMappingURL=my-day-labels.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-default-month.interface.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-default-month.interface.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyDefaultMonthInterfaceJs(module, exports) {//# sourceMappingURL=my-default-month.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-input-field-changed.interface.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-input-field-changed.interface.js ***!
    \***************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyInputFieldChangedInterfaceJs(module, exports) {//# sourceMappingURL=my-input-field-changed.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-input-focus-blur.interface.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-input-focus-blur.interface.js ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyInputFocusBlurInterfaceJs(module, exports) {//# sourceMappingURL=my-input-focus-blur.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-marked-date.interface.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-marked-date.interface.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyMarkedDateInterfaceJs(module, exports) {//# sourceMappingURL=my-marked-date.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-marked-dates.interface.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-marked-dates.interface.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyMarkedDatesInterfaceJs(module, exports) {//# sourceMappingURL=my-marked-dates.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-month-labels.interface.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-month-labels.interface.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyMonthLabelsInterfaceJs(module, exports) {//# sourceMappingURL=my-month-labels.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-options.interface.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-options.interface.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyOptionsInterfaceJs(module, exports) {//# sourceMappingURL=my-options.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-selector.interface.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-selector.interface.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMySelectorInterfaceJs(module, exports) {//# sourceMappingURL=my-selector.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/interfaces/my-weekday.interface.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/interfaces/my-weekday.interface.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerDistInterfacesMyWeekdayInterfaceJs(module, exports) {//# sourceMappingURL=my-weekday.interface.js.map

    /***/
  },

  /***/
  "./node_modules/mydatepicker/dist/my-date-picker.component.js":
  /*!********************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/my-date-picker.component.js ***!
    \********************************************************************/

  /*! exports provided: MYDP_VALUE_ACCESSOR, MyDatePicker */

  /***/
  function node_modulesMydatepickerDistMyDatePickerComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MYDP_VALUE_ACCESSOR", function () {
      return MYDP_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDatePicker", function () {
      return MyDatePicker;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_my_date_picker_locale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/my-date-picker.locale.service */
    "./node_modules/mydatepicker/dist/services/my-date-picker.locale.service.js");
    /* harmony import */


    var _services_my_date_picker_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/my-date-picker.util.service */
    "./node_modules/mydatepicker/dist/services/my-date-picker.util.service.js");

    var MYDP_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return MyDatePicker;
      }),
      multi: true
    };
    var CalToggle;

    (function (CalToggle) {
      CalToggle[CalToggle["Open"] = 1] = "Open";
      CalToggle[CalToggle["CloseByDateSel"] = 2] = "CloseByDateSel";
      CalToggle[CalToggle["CloseByCalBtn"] = 3] = "CloseByCalBtn";
      CalToggle[CalToggle["CloseByOutClick"] = 4] = "CloseByOutClick";
      CalToggle[CalToggle["CloseByEsc"] = 5] = "CloseByEsc";
      CalToggle[CalToggle["CloseByApi"] = 6] = "CloseByApi";
    })(CalToggle || (CalToggle = {}));

    var Year;

    (function (Year) {
      Year[Year["min"] = 1000] = "min";
      Year[Year["max"] = 9999] = "max";
    })(Year || (Year = {}));

    var InputFocusBlur;

    (function (InputFocusBlur) {
      InputFocusBlur[InputFocusBlur["focus"] = 1] = "focus";
      InputFocusBlur[InputFocusBlur["blur"] = 2] = "blur";
    })(InputFocusBlur || (InputFocusBlur = {}));

    var KeyCode;

    (function (KeyCode) {
      KeyCode[KeyCode["enter"] = 13] = "enter";
      KeyCode[KeyCode["esc"] = 27] = "esc";
      KeyCode[KeyCode["space"] = 32] = "space";
    })(KeyCode || (KeyCode = {}));

    var MonthId;

    (function (MonthId) {
      MonthId[MonthId["prev"] = 1] = "prev";
      MonthId[MonthId["curr"] = 2] = "curr";
      MonthId[MonthId["next"] = 3] = "next";
    })(MonthId || (MonthId = {}));

    var MMM = "mmm";

    var MyDatePicker = function () {
      function MyDatePicker(elem, renderer, cdr, localeService, utilService) {
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.localeService = localeService;
        this.utilService = utilService;
        this.dateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputFieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.calendarViewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.calendarToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputFocusBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.onChangeCb = function () {};

        this.onTouchedCb = function () {};

        this.showSelector = false;
        this.visibleMonth = {
          monthTxt: "",
          monthNbr: 0,
          year: 0
        };
        this.selectedMonth = {
          monthTxt: "",
          monthNbr: 0,
          year: 0
        };
        this.selectedDate = {
          year: 0,
          month: 0,
          day: 0
        };
        this.weekDays = [];
        this.dates = [];
        this.months = [];
        this.years = [];
        this.selectionDayTxt = "";
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.selectMonth = false;
        this.selectYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevYearsDisabled = false;
        this.nextYearsDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.opts = {
          dayLabels: {},
          monthLabels: {},
          dateFormat: "",
          showTodayBtn: true,
          todayBtnTxt: "",
          firstDayOfWeek: "",
          satHighlight: false,
          sunHighlight: true,
          highlightDates: [],
          markCurrentDay: true,
          markCurrentMonth: true,
          markCurrentYear: true,
          disableUntil: {
            year: 0,
            month: 0,
            day: 0
          },
          disableSince: {
            year: 0,
            month: 0,
            day: 0
          },
          disableDays: [],
          enableDays: [],
          markDates: [],
          markWeekends: {},
          disableDateRanges: [],
          disableWeekends: false,
          disableWeekdays: [],
          showWeekNumbers: false,
          height: "34px",
          width: "100%",
          selectionTxtFontSize: "14px",
          selectorHeight: "232px",
          selectorWidth: "252px",
          allowDeselectDate: false,
          inline: false,
          showClearDateBtn: true,
          showDecreaseDateBtn: false,
          showIncreaseDateBtn: false,
          alignSelectorRight: false,
          openSelectorTopOfInput: false,
          indicateInvalidDate: true,
          editableDateField: true,
          monthSelector: true,
          yearSelector: true,
          disableHeaderButtons: true,
          minYear: Year.min,
          maxYear: Year.max,
          componentDisabled: false,
          showSelectorArrow: true,
          showInputField: true,
          openSelectorOnInputClick: false,
          allowSelectionOnlyInCurrentMonth: true,
          ariaLabelInputField: "Date input field",
          ariaLabelClearDate: "Clear Date",
          ariaLabelDecreaseDate: "Decrease Date",
          ariaLabelIncreaseDate: "Increase Date",
          ariaLabelOpenCalendar: "Open Calendar",
          ariaLabelPrevMonth: "Previous Month",
          ariaLabelNextMonth: "Next Month",
          ariaLabelPrevYear: "Previous Year",
          ariaLabelNextYear: "Next Year"
        };
        this.setLocaleOptions();
      }

      MyDatePicker.prototype.setLocaleOptions = function () {
        var _this = this;

        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
          _this.opts[k] = opts[k];
        });
      };

      MyDatePicker.prototype.setOptions = function () {
        var _this = this;

        if (this.options !== undefined) {
          Object.keys(this.options).forEach(function (k) {
            _this.opts[k] = _this.options[k];
          });
        }

        if (this.opts.minYear < Year.min) {
          this.opts.minYear = Year.min;
        }

        if (this.opts.maxYear > Year.max) {
          this.opts.maxYear = Year.max;
        }

        if (this.disabled !== undefined) {
          this.opts.componentDisabled = this.disabled;
        }
      };

      MyDatePicker.prototype.getSelectorTopPosition = function () {
        if (this.opts.openSelectorTopOfInput) {
          return this.elem.nativeElement.children[0].offsetHeight + "px";
        }
      };

      MyDatePicker.prototype.resetMonthYearSelect = function () {
        this.selectMonth = false;
        this.selectYear = false;
      };

      MyDatePicker.prototype.onSelectMonthClicked = function (event) {
        event.stopPropagation();
        this.selectMonth = !this.selectMonth;
        this.selectYear = false;
        this.cdr.detectChanges();

        if (this.selectMonth) {
          var today = this.getToday();
          this.months.length = 0;

          for (var i = 1; i <= 12; i += 3) {
            var row = [];

            for (var j = i; j < i + 3; j++) {
              var disabled = this.utilService.isMonthDisabledByDisableUntil({
                year: this.visibleMonth.year,
                month: j,
                day: this.daysInMonth(j, this.visibleMonth.year)
              }, this.opts.disableUntil) || this.utilService.isMonthDisabledByDisableSince({
                year: this.visibleMonth.year,
                month: j,
                day: 1
              }, this.opts.disableSince);
              row.push({
                nbr: j,
                name: this.opts.monthLabels[j],
                currMonth: j === today.month && this.visibleMonth.year === today.year,
                selected: j === this.visibleMonth.monthNbr,
                disabled: disabled
              });
            }

            this.months.push(row);
          }
        }
      };

      MyDatePicker.prototype.onMonthCellClicked = function (cell) {
        var mc = cell.nbr !== this.visibleMonth.monthNbr;
        this.visibleMonth = {
          monthTxt: this.monthText(cell.nbr),
          monthNbr: cell.nbr,
          year: this.visibleMonth.year
        };
        this.generateCalendar(cell.nbr, this.visibleMonth.year, mc);
        this.selectMonth = false;
        this.selectorEl.nativeElement.focus();
      };

      MyDatePicker.prototype.onMonthCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
          event.preventDefault();
          this.onMonthCellClicked(cell);
        }
      };

      MyDatePicker.prototype.onSelectYearClicked = function (event) {
        event.stopPropagation();
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.cdr.detectChanges();

        if (this.selectYear) {
          this.generateYears(Number(this.visibleMonth.year));
        }
      };

      MyDatePicker.prototype.onYearCellClicked = function (cell) {
        var yc = cell.year !== this.visibleMonth.year;
        this.visibleMonth = {
          monthTxt: this.visibleMonth.monthTxt,
          monthNbr: this.visibleMonth.monthNbr,
          year: cell.year
        };
        this.generateCalendar(this.visibleMonth.monthNbr, cell.year, yc);
        this.selectYear = false;
        this.selectorEl.nativeElement.focus();
      };

      MyDatePicker.prototype.onYearCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
          event.preventDefault();
          this.onYearCellClicked(cell);
        }
      };

      MyDatePicker.prototype.onPrevYears = function (event, year) {
        event.stopPropagation();
        this.generateYears(Number(year) - 25);
      };

      MyDatePicker.prototype.onNextYears = function (event, year) {
        event.stopPropagation();
        this.generateYears(Number(year) + 25);
      };

      MyDatePicker.prototype.generateYears = function (year) {
        this.years.length = 0;
        var today = this.getToday();

        for (var i = year; i <= 20 + year; i += 5) {
          var row = [];

          for (var j = i; j < i + 5; j++) {
            var disabled = this.utilService.isMonthDisabledByDisableUntil({
              year: j,
              month: this.visibleMonth.monthNbr,
              day: this.daysInMonth(this.visibleMonth.monthNbr, j)
            }, this.opts.disableUntil) || this.utilService.isMonthDisabledByDisableSince({
              year: j,
              month: this.visibleMonth.monthNbr,
              day: 1
            }, this.opts.disableSince);
            var minMax = j < this.opts.minYear || j > this.opts.maxYear;
            row.push({
              year: j,
              currYear: j === today.year,
              selected: j === this.visibleMonth.year,
              disabled: disabled || minMax
            });
          }

          this.years.push(row);
        }

        this.prevYearsDisabled = this.years[0][0].year <= this.opts.minYear || this.utilService.isMonthDisabledByDisableUntil({
          year: this.years[0][0].year - 1,
          month: this.visibleMonth.monthNbr,
          day: this.daysInMonth(this.visibleMonth.monthNbr, this.years[0][0].year - 1)
        }, this.opts.disableUntil);
        this.nextYearsDisabled = this.years[4][4].year >= this.opts.maxYear || this.utilService.isMonthDisabledByDisableSince({
          year: this.years[4][4].year + 1,
          month: this.visibleMonth.monthNbr,
          day: 1
        }, this.opts.disableSince);
      };

      MyDatePicker.prototype.onUserDateInput = function (value) {
        if (value.length === 0) {
          if (this.utilService.isInitializedDate(this.selectedDate)) {
            this.clearDate();
          } else {
            this.invalidInputFieldChanged(value);
          }
        } else {
          var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);

          if (this.utilService.isInitializedDate(date)) {
            if (!this.utilService.isSameDate(date, this.selectedDate)) {
              this.selectDate(date, CalToggle.CloseByDateSel);
            } else {
              this.updateDateValue(date);
            }
          } else {
            this.invalidInputFieldChanged(value);
          }
        }
      };

      MyDatePicker.prototype.onFocusInput = function (event) {
        this.inputFocusBlur.emit({
          reason: InputFocusBlur.focus,
          value: event.target.value
        });
      };

      MyDatePicker.prototype.onBlurInput = function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({
          reason: InputFocusBlur.blur,
          value: event.target.value
        });
      };

      MyDatePicker.prototype.onCloseSelector = function (event) {
        if (event.keyCode === KeyCode.esc && this.showSelector && !this.opts.inline) {
          this.calendarToggle.emit(CalToggle.CloseByEsc);
          this.showSelector = false;
        }
      };

      MyDatePicker.prototype.invalidInputFieldChanged = function (value) {
        this.invalidDate = value.length > 0;
        this.inputFieldChanged.emit({
          value: value,
          dateFormat: this.opts.dateFormat,
          valid: false
        });
        this.onChangeCb(null);
        this.onTouchedCb();
      };

      MyDatePicker.prototype.isTodayDisabled = function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
      };

      MyDatePicker.prototype.parseOptions = function () {
        if (this.locale) {
          this.setLocaleOptions();
        }

        this.setOptions();
        var weekDays = this.utilService.getWeekDays();
        this.isTodayDisabled();
        this.dayIdx = weekDays.indexOf(this.opts.firstDayOfWeek);

        if (this.dayIdx !== -1) {
          var idx = this.dayIdx;

          for (var i = 0; i < weekDays.length; i++) {
            this.weekDays.push(this.opts.dayLabels[weekDays[idx]]);
            idx = weekDays[idx] === "sa" ? 0 : idx + 1;
          }
        }
      };

      MyDatePicker.prototype.writeValue = function (value) {
        if (value && (value["date"] || value["jsdate"] || value["formatted"])) {
          this.selectedDate = value["date"] ? this.parseSelectedDate(value["date"]) : value["jsdate"] ? this.parseSelectedDate(this.jsDateToMyDate(value["jsdate"])) : this.parseSelectedDate(value["formatted"]);
          var cvc = this.visibleMonth.year !== this.selectedDate.year || this.visibleMonth.monthNbr !== this.selectedDate.month;

          if (cvc) {
            this.visibleMonth = {
              monthTxt: this.opts.monthLabels[this.selectedDate.month],
              monthNbr: this.selectedDate.month,
              year: this.selectedDate.year
            };
            this.generateCalendar(this.selectedDate.month, this.selectedDate.year, cvc);
          }

          this.selectionDayTxt = this.utilService.formatDate(this.selectedDate, this.opts.dateFormat, this.opts.monthLabels);
        } else if (value === null || value === "") {
          this.selectedDate = {
            year: 0,
            month: 0,
            day: 0
          };
          this.selectionDayTxt = "";
        }

        this.inputFieldChanged.emit({
          value: this.selectionDayTxt,
          dateFormat: this.opts.dateFormat,
          valid: this.selectionDayTxt.length > 0
        });
        this.invalidDate = false;
      };

      MyDatePicker.prototype.setDisabledState = function (disabled) {
        this.opts.componentDisabled = disabled;
      };

      MyDatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
      };

      MyDatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
      };

      MyDatePicker.prototype.ngOnChanges = function (changes) {
        var _this = this;

        if (changes.hasOwnProperty("selector")) {
          var s = changes["selector"].currentValue;

          if (typeof s === "object") {
            if (s.open) {
              this.showSelector = true;
              this.openSelector(CalToggle.Open);
            } else {
              this.showSelector = false;
              this.closeSelector(CalToggle.CloseByApi);
            }
          } else if (s > 0) {
            this.openBtnClicked();
          }
        }

        if (changes.hasOwnProperty("placeholder")) {
          this.placeholder = changes["placeholder"].currentValue;
        }

        if (changes.hasOwnProperty("locale")) {
          this.locale = changes["locale"].currentValue;
        }

        if (changes.hasOwnProperty("disabled")) {
          this.disabled = changes["disabled"].currentValue;
        }

        if (changes.hasOwnProperty("options")) {
          this.options = changes["options"].currentValue;
        }

        this.weekDays.length = 0;
        this.parseOptions();
        var dmChange = false;

        if (changes.hasOwnProperty("defaultMonth")) {
          var dm = changes["defaultMonth"].currentValue;

          if (typeof dm === "object") {
            dm = dm.defMonth;
          }

          if (dm !== null && dm !== undefined && dm !== "") {
            this.selectedMonth = this.parseSelectedMonth(dm);
          } else {
            this.selectedMonth = {
              monthTxt: "",
              monthNbr: 0,
              year: 0
            };
          }

          dmChange = true;
        }

        if (changes.hasOwnProperty("selDate")) {
          var sd = changes["selDate"];

          if (sd.currentValue !== null && sd.currentValue !== undefined && sd.currentValue !== "" && Object.keys(sd.currentValue).length !== 0) {
            this.selectedDate = this.parseSelectedDate(sd.currentValue);
            setTimeout(function () {
              _this.onChangeCb(_this.getDateModel(_this.selectedDate));
            });
          } else {
            if (!sd.isFirstChange()) {
              this.clearDate();
            }
          }
        }

        if (this.visibleMonth.year === 0 && this.visibleMonth.monthNbr === 0 || dmChange) {
          this.setVisibleMonth();
        } else {
          this.visibleMonth.monthTxt = this.opts.monthLabels[this.visibleMonth.monthNbr];
          this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
      };

      MyDatePicker.prototype.removeBtnClicked = function () {
        this.clearDate();

        if (this.showSelector) {
          this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }

        this.showSelector = false;
      };

      MyDatePicker.prototype.onDecreaseBtnClicked = function () {
        this.decreaseIncreaseDate(true);
      };

      MyDatePicker.prototype.onIncreaseBtnClicked = function () {
        this.decreaseIncreaseDate(false);
      };

      MyDatePicker.prototype.openBtnClicked = function () {
        this.showSelector = !this.showSelector;
        this.cdr.detectChanges();

        if (this.showSelector) {
          this.openSelector(CalToggle.Open);
        } else {
          this.closeSelector(CalToggle.CloseByCalBtn);
        }
      };

      MyDatePicker.prototype.openSelector = function (reason) {
        var _this = this;

        this.globalListener = this.globalListener || this.renderer.listenGlobal("document", "click", function (event) {
          if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
            _this.showSelector = false;

            _this.calendarToggle.emit(CalToggle.CloseByOutClick);
          }

          if (_this.opts.monthSelector || _this.opts.yearSelector) {
            _this.resetMonthYearSelect();
          }
        });
        this.setVisibleMonth();
        this.calendarToggle.emit(reason);
      };

      MyDatePicker.prototype.closeSelector = function (reason) {
        if (this.globalListener) {
          this.globalListener();
        }

        this.calendarToggle.emit(reason);
      };

      MyDatePicker.prototype.setVisibleMonth = function () {
        var y = 0,
            m = 0;

        if (!this.utilService.isInitializedDate(this.selectedDate)) {
          if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
            var today = this.getToday();
            y = today.year;
            m = today.month;
          } else {
            y = this.selectedMonth.year;
            m = this.selectedMonth.monthNbr;
          }
        } else {
          y = this.selectedDate.year;
          m = this.selectedDate.month;
        }

        this.visibleMonth = {
          monthTxt: this.opts.monthLabels[m],
          monthNbr: m,
          year: y
        };
        this.generateCalendar(m, y, true);
      };

      MyDatePicker.prototype.onPrevMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = {
          monthTxt: this.monthText(m),
          monthNbr: m,
          year: y
        };
        this.generateCalendar(m, y, true);
      };

      MyDatePicker.prototype.onNextMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = {
          monthTxt: this.monthText(m),
          monthNbr: m,
          year: y
        };
        this.generateCalendar(m, y, true);
      };

      MyDatePicker.prototype.onPrevYear = function () {
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
      };

      MyDatePicker.prototype.onNextYear = function () {
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
      };

      MyDatePicker.prototype.onTodayClicked = function () {
        var today = this.getToday();
        this.selectDate(today, CalToggle.CloseByDateSel);

        if (this.opts.inline && today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
          this.visibleMonth = {
            monthTxt: this.opts.monthLabels[today.month],
            monthNbr: today.month,
            year: today.year
          };
          this.generateCalendar(today.month, today.year, true);
        }
      };

      MyDatePicker.prototype.onCellClicked = function (cell) {
        if (cell.cmo === this.prevMonthId) {
          this.onPrevMonth();

          if (!this.opts.allowSelectionOnlyInCurrentMonth) {
            this.selectDate(cell.dateObj, CalToggle.CloseByDateSel);
          }
        } else if (cell.cmo === this.currMonthId) {
          if (this.opts.allowDeselectDate && this.utilService.isSameDate(cell.dateObj, this.selectedDate)) {
            this.clearDate();
          } else {
            this.selectDate(cell.dateObj, CalToggle.CloseByDateSel);
          }
        } else if (cell.cmo === this.nextMonthId) {
          this.onNextMonth();

          if (!this.opts.allowSelectionOnlyInCurrentMonth) {
            this.selectDate(cell.dateObj, CalToggle.CloseByDateSel);
          }
        }

        this.resetMonthYearSelect();
      };

      MyDatePicker.prototype.onCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
          event.preventDefault();
          this.onCellClicked(cell);
        }
      };

      MyDatePicker.prototype.clearDate = function () {
        this.updateDateValue({
          year: 0,
          month: 0,
          day: 0
        });
        this.setFocusToInputBox();
      };

      MyDatePicker.prototype.decreaseIncreaseDate = function (decrease) {
        var date = this.selectedDate;

        if (this.utilService.isInitializedDate(date)) {
          var d = this.getDate(date.year, date.month, date.day);
          d.setDate(decrease ? d.getDate() - 1 : d.getDate() + 1);
          date = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
          };
        } else {
          date = this.getToday();
        }

        this.selectDate(date, CalToggle.CloseByCalBtn);
      };

      MyDatePicker.prototype.selectDate = function (date, closeReason) {
        this.updateDateValue(date);

        if (this.showSelector) {
          this.calendarToggle.emit(closeReason);
        }

        this.showSelector = false;
        this.setFocusToInputBox();
      };

      MyDatePicker.prototype.setFocusToInputBox = function () {
        var _this = this;

        if (!this.opts.inline && this.opts.showInputField) {
          setTimeout(function () {
            _this.inputBoxEl.nativeElement.focus();
          }, 100);
        }
      };

      MyDatePicker.prototype.updateDateValue = function (date) {
        var clear = !this.utilService.isInitializedDate(date);
        this.selectedDate = date;
        this.emitDateChanged(date);

        if (!this.opts.inline) {
          this.selectionDayTxt = clear ? "" : this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels);
          this.inputFieldChanged.emit({
            value: this.selectionDayTxt,
            dateFormat: this.opts.dateFormat,
            valid: !clear
          });
          this.invalidDate = false;
        }
      };

      MyDatePicker.prototype.emitDateChanged = function (date) {
        if (this.utilService.isInitializedDate(date)) {
          var dateModel = this.getDateModel(date);
          this.dateChanged.emit(dateModel);
          this.onChangeCb(dateModel);
          this.onTouchedCb();
        } else {
          this.dateChanged.emit({
            date: date,
            jsdate: null,
            formatted: "",
            epoc: 0
          });
          this.onChangeCb(null);
          this.onTouchedCb();
        }
      };

      MyDatePicker.prototype.getDateModel = function (date) {
        return {
          date: date,
          jsdate: this.getDate(date.year, date.month, date.day),
          formatted: this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels),
          epoc: Math.round(this.getTimeInMilliseconds(date) / 1000.0)
        };
      };

      MyDatePicker.prototype.monthText = function (m) {
        return this.opts.monthLabels[m];
      };

      MyDatePicker.prototype.monthStartIdx = function (y, m) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
      };

      MyDatePicker.prototype.daysInMonth = function (m, y) {
        return new Date(y, m, 0).getDate();
      };

      MyDatePicker.prototype.daysInPrevMonth = function (m, y) {
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
      };

      MyDatePicker.prototype.isCurrDay = function (d, m, y, cmo, today) {
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
      };

      MyDatePicker.prototype.getToday = function () {
        var date = new Date();
        return {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        };
      };

      MyDatePicker.prototype.getTimeInMilliseconds = function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
      };

      MyDatePicker.prototype.getWeekday = function (date) {
        var weekDays = this.utilService.getWeekDays();
        return weekDays[this.utilService.getDayNumber(date)];
      };

      MyDatePicker.prototype.getDate = function (year, month, day) {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
      };

      MyDatePicker.prototype.sundayIdx = function () {
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
      };

      MyDatePicker.prototype.generateCalendar = function (m, y, notifyChange) {
        this.dates.length = 0;
        var today = this.getToday();
        var monthStart = this.monthStartIdx(y, m);
        var dInThisM = this.daysInMonth(m, y);
        var dInPrevM = this.daysInPrevMonth(m, y);
        var dayNbr = 1;
        var cmo = this.prevMonthId;

        for (var i = 1; i < 7; i++) {
          var week = [];

          if (i === 1) {
            var pm = dInPrevM - monthStart + 1;

            for (var j = pm; j <= dInPrevM; j++) {
              var date = {
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: j
              };
              week.push({
                dateObj: date,
                cmo: cmo,
                currDay: this.isCurrDay(j, m, y, cmo, today),
                disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)
              });
            }

            cmo = this.currMonthId;
            var daysLeft = 7 - week.length;

            for (var j = 0; j < daysLeft; j++) {
              var date = {
                year: y,
                month: m,
                day: dayNbr
              };
              week.push({
                dateObj: date,
                cmo: cmo,
                currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)
              });
              dayNbr++;
            }
          } else {
            for (var j = 1; j < 8; j++) {
              if (dayNbr > dInThisM) {
                dayNbr = 1;
                cmo = this.nextMonthId;
              }

              var date = {
                year: cmo === this.nextMonthId && m === 12 ? y + 1 : y,
                month: cmo === this.currMonthId ? m : cmo === this.nextMonthId && m < 12 ? m + 1 : 1,
                day: dayNbr
              };
              week.push({
                dateObj: date,
                cmo: cmo,
                currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)
              });
              dayNbr++;
            }
          }

          var weekNbr = this.opts.showWeekNumbers && this.opts.firstDayOfWeek === "mo" ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
          this.dates.push({
            week: week,
            weekNbr: weekNbr
          });
        }

        this.setHeaderBtnDisabledState(m, y);

        if (notifyChange) {
          this.calendarViewChanged.emit({
            year: y,
            month: m,
            first: {
              number: 1,
              weekday: this.getWeekday({
                year: y,
                month: m,
                day: 1
              })
            },
            last: {
              number: dInThisM,
              weekday: this.getWeekday({
                year: y,
                month: m,
                day: dInThisM
              })
            }
          });
        }
      };

      MyDatePicker.prototype.parseSelectedDate = function (selDate) {
        var date = {
          day: 0,
          month: 0,
          year: 0
        };

        if (typeof selDate === "string") {
          var sd = selDate;
          var df = this.opts.dateFormat;
          var delimeters = this.utilService.getDateFormatDelimeters(df);
          var dateValue = this.utilService.getDateValue(sd, df, delimeters);
          date.year = this.utilService.getNumberByValue(dateValue[0]);
          date.month = df.indexOf(MMM) !== -1 ? this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabels) : this.utilService.getNumberByValue(dateValue[1]);
          date.day = this.utilService.getNumberByValue(dateValue[2]);
        } else if (typeof selDate === "object") {
          date = selDate;
        }

        this.selectionDayTxt = this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels);
        return date;
      };

      MyDatePicker.prototype.jsDateToMyDate = function (date) {
        return {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        };
      };

      MyDatePicker.prototype.parseSelectedMonth = function (ms) {
        return this.utilService.parseDefaultMonth(ms);
      };

      MyDatePicker.prototype.setHeaderBtnDisabledState = function (m, y) {
        var dpm = false;
        var dpy = false;
        var dnm = false;
        var dny = false;

        if (this.opts.disableHeaderButtons) {
          dpm = this.utilService.isMonthDisabledByDisableUntil({
            year: m === 1 ? y - 1 : y,
            month: m === 1 ? 12 : m - 1,
            day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
          }, this.opts.disableUntil);
          dpy = this.utilService.isMonthDisabledByDisableUntil({
            year: y - 1,
            month: m,
            day: this.daysInMonth(m, y - 1)
          }, this.opts.disableUntil);
          dnm = this.utilService.isMonthDisabledByDisableSince({
            year: m === 12 ? y + 1 : y,
            month: m === 12 ? 1 : m + 1,
            day: 1
          }, this.opts.disableSince);
          dny = this.utilService.isMonthDisabledByDisableSince({
            year: y + 1,
            month: m,
            day: 1
          }, this.opts.disableSince);
        }

        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
      };

      MyDatePicker.prototype.ngOnDestroy = function () {
        if (this.globalListener) {
          this.globalListener();
        }
      };

      MyDatePicker.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "my-date-picker",
          exportAs: "mydatepicker",
          styles: [".mydp .headertodaybtn,.mydp .monthcell,.mydp .selection,.mydp .weekdaytitle{overflow:hidden;white-space:nowrap}.mydp{line-height:1.1;display:inline-block;position:relative}.mydp *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.mydp,.mydp .headertodaybtn,.mydp .selection,.mydp .selectiongroup,.mydp .selector{border-radius:4px}.mydp .header{border-radius:4px 4px 0 0}.mydp .caltable,.mydp .monthtable,.mydp .yeartable{border-radius:0 0 4px 4px}.mydp .caltable tbody tr:nth-child(6) td:first-child,.mydp .monthtable tbody tr:nth-child(4) td:first-child,.mydp .yeartable tbody tr:nth-child(7) td:first-child{border-bottom-left-radius:4px}.mydp .caltable tbody tr:nth-child(6) td:last-child,.mydp .monthtable tbody tr:nth-child(4) td:last-child,.mydp .yeartable tbody tr:nth-child(7) td:last-child{border-bottom-right-radius:4px}.mydp .btnpicker{border-radius:0 4px 4px 0}.mydp .btnleftborderradius{border-top-left-radius:4px;border-bottom-left-radius:4px}.mydp .selector{margin-top:2px;margin-left:-1px;position:absolute;padding:0;border:1px solid #CCC;z-index:100;animation:selectorfadein .1s}.mydp .selector:focus{border:1px solid #ADD8E6;outline:0}@keyframes selectorfadein{from{opacity:0}to{opacity:1}}.mydp .selectorarrow{background:#FAFAFA;margin-top:12px;padding:0}.mydp .selectorarrow:after,.mydp .selectorarrow:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute}.mydp .selectorarrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#FAFAFA;border-width:10px;margin-left:-10px}.mydp .selectorarrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#CCC;border-width:11px;margin-left:-11px}.mydp .selectorarrow:focus:before{border-bottom-color:#ADD8E6}.mydp .selectorarrowleft:after,.mydp .selectorarrowleft:before{left:24px}.mydp .selectorarrowright:after,.mydp .selectorarrowright:before{left:86%}.mydp .alignselectorright{right:-1px}.mydp .selectiongroup{position:relative;display:table;border:none;border-spacing:0;background-color:#FFF}.mydp .selection{width:100%;outline:0;background-color:#FFF;display:table-cell;position:absolute;text-overflow:ellipsis;padding-left:6px;border:none;color:#555}.mydp .invaliddate{background-color:#F1DEDE}.mydp ::-ms-clear{display:none}.mydp .headerbtncell,.mydp .selbtngroup{display:table-cell;vertical-align:middle}.mydp .selbtngroup{position:relative;white-space:nowrap;width:1%;font-size:0}.mydp .btnclear,.mydp .btndecrease,.mydp .btnincrease,.mydp .btnpicker{height:100%;width:26px;border:none;padding:0;outline:0;font:inherit;-moz-user-select:none}.mydp .btnleftborder{border-left:1px solid #CCC}.mydp .btnclearenabled,.mydp .btndecreaseenabled,.mydp .btnincreaseenabled,.mydp .btnpickerenabled,.mydp .headerbtnenabled,.mydp .headertodaybtnenabled,.mydp .yearchangebtnenabled{cursor:pointer}.mydp .btncleardisabled,.mydp .btndecreasedisabled,.mydp .btnincreasedisabled,.mydp .btnpickerdisabled,.mydp .headerbtndisabled,.mydp .headertodaybtndisabled,.mydp .selectiondisabled,.mydp .yearchangebtndisabled{cursor:not-allowed;opacity:.65}.mydp .selectiondisabled{background-color:#EEE}.mydp .btnclear,.mydp .btndecrease,.mydp .btnincrease,.mydp .btnpicker,.mydp .headertodaybtn{background:#FFF}.mydp .header{width:100%;height:30px;background-color:#FAFAFA}.mydp .header td{vertical-align:middle;border:none;line-height:0}.mydp .header td:nth-child(1){padding-left:4px}.mydp .header td:nth-child(2){text-align:center}.mydp .header td:nth-child(3){padding-right:4px}.mydp .caltable,.mydp .monthtable,.mydp .yeartable{table-layout:fixed;width:100%;height:calc(100% - 30px);background-color:#FFF;font-size:14px}.mydp .caltable,.mydp .daycell,.mydp .monthcell,.mydp .monthtable,.mydp .weekdaytitle,.mydp .yearcell,.mydp .yeartable{border-collapse:collapse;color:#036;line-height:1.1}.mydp .daycell,.mydp .monthcell,.mydp .weekdaytitle,.mydp .yearcell{padding:4px;text-align:center}.mydp .weekdaytitle{background-color:#DDD;font-size:11px;font-weight:400;vertical-align:middle;max-width:36px}.mydp .weekdaytitleweeknbr{width:20px;border-right:1px solid #BBB}.mydp .monthcell{background-color:#FAFAFA}.mydp .yearcell{background-color:#FAFAFA;width:20%}.mydp .daycell .datevalue{background-color:inherit;vertical-align:middle}.mydp .daycell .datevalue span{vertical-align:middle}.mydp .daycellweeknbr{font-size:10px;border-right:1px solid #CCC;cursor:default;color:#000}.mydp .inlinedp{position:relative;margin-top:-1px}.mydp .nextmonth,.mydp .prevmonth{color:#999}.mydp .disabled{cursor:default!important;color:#CCC;background:#FBEFEF}.mydp .highlight{color:#C30000}.mydp .dimday{opacity:.5}.mydp .currmonth{background-color:#F6F6F6;font-weight:400}.mydp .markdate{position:absolute;width:4px;height:4px;border-radius:4px}.mydp .markcurrday,.mydp .markcurrmonth,.mydp .markcurryear{text-decoration:underline}.mydp .selectedday .datevalue,.mydp .selectedmonth .monthvalue,.mydp .selectedyear .yearvalue{border:none;background-color:#8EBFFF;border-radius:2px}.mydp .headerbtncell{background-color:#FAFAFA}.mydp .yearchangebtncell{text-align:center;background-color:#FAFAFA}.mydp .headerbtn,.mydp .headerlabelbtn,.mydp .yearchangebtn{background:#FAFAFA;border:none;height:22px}.mydp .headerbtn{width:16px}.mydp .headerlabelbtn{font-size:14px;outline:0;cursor:default}.mydp,.mydp .headertodaybtn{border:1px solid #CCC}.mydp .btnclear,.mydp .btndecrease,.mydp .btnincrease,.mydp .btnpicker,.mydp .headerbtn,.mydp .headermonthtxt,.mydp .headertodaybtn,.mydp .headeryeartxt,.mydp .yearchangebtn{color:#000}.mydp .headertodaybtn{padding:0 4px;font-size:11px;height:22px;min-width:60px;max-width:84px}.mydp button::-moz-focus-inner{border:0}.mydp .headermonthtxt,.mydp .headeryeartxt{text-align:center;display:table-cell;vertical-align:middle;font-size:14px;height:26px;width:40px;max-width:40px;overflow:hidden;white-space:nowrap}.mydp .btnclear:focus,.mydp .btndecrease:focus,.mydp .btnincrease:focus,.mydp .btnpicker:focus,.mydp .headertodaybtn:focus{background:#ADD8E6}.mydp .headerbtn:focus,.mydp .monthlabel:focus,.mydp .yearchangebtn:focus,.mydp .yearlabel:focus{color:#ADD8E6;outline:0}.mydp .daycell:focus,.mydp .monthcell:focus,.mydp .yearcell:focus{outline:#CCC solid 1px}.mydp .icon-mydpcalendar,.mydp .icon-mydpremove{font-size:16px}.mydp .icon-mydpdown,.mydp .icon-mydpleft,.mydp .icon-mydpright,.mydp .icon-mydpup{color:#222;font-size:20px}.mydp .btndecrease .icon-mydpleft,.mydp .btnincrease .icon-mydpright{font-size:16px}.mydp .icon-mydptoday{color:#222;font-size:11px}.mydp table{display:table;border-spacing:0}.mydp table td{padding:0}.mydp table,.mydp td,.mydp th{border:none}.mydp .btnclearenabled:hover,.mydp .btndecreaseenabled:hover,.mydp .btnincreaseenabled:hover,.mydp .btnpickerenabled:hover,.mydp .headertodaybtnenabled:hover{background-color:#E6E6E6}.mydp .tablesingleday:hover,.mydp .tablesinglemonth:hover,.mydp .tablesingleyear:hover{background-color:#DDD}.mydp .daycell,.mydp .inputnoteditable,.mydp .monthcell,.mydp .monthlabel,.mydp .yearcell,.mydp .yearlabel{cursor:pointer}.mydp .headerbtnenabled:hover,.mydp .monthlabel:hover,.mydp .yearchangebtnenabled:hover,.mydp .yearlabel:hover{color:#777}@font-face{font-family:mydatepicker;src:url(data:application/octet-stream;base64,AAEAAAAPAIAAAwBwR1NVQiCMJXkAAAD8AAAAVE9TLzI+IEhNAAABUAAAAFZjbWFw6UKcfwAAAagAAAHEY3Z0IAbV/wQAAAz8AAAAIGZwZ22KkZBZAAANHAAAC3BnYXNwAAAAEAAADPQAAAAIZ2x5Zqbn7ycAAANsAAAFXGhlYWQNX0bLAAAIyAAAADZoaGVhBzwDWQAACQAAAAAkaG10eBXB//8AAAkkAAAAIGxvY2EGNATEAAAJRAAAABJtYXhwAXgMOgAACVgAAAAgbmFtZZKUFgMAAAl4AAAC/XBvc3R9NuZlAAAMeAAAAHpwcmVw5UErvAAAGIwAAACGAAEAAAAKADAAPgACbGF0bgAOREZMVAAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAECuAGQAAUAAAJ6ArwAAACMAnoCvAAAAeAAMQECAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQOgA6AYDUv9qAFoDUgCWAAAAAQAAAAAAAAAAAAUAAAADAAAALAAAAAQAAAFgAAEAAAAAAFoAAwABAAAALAADAAoAAAFgAAQALgAAAAQABAABAADoBv//AADoAP//AAAAAQAEAAAAAQACAAMABAAFAAYABwAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAZAAAAAAAAAAHAADoAAAA6AAAAAABAADoAQAA6AEAAAACAADoAgAA6AIAAAADAADoAwAA6AMAAAAEAADoBAAA6AQAAAAFAADoBQAA6AUAAAAGAADoBgAA6AYAAAAHAAEAAAAAAUECfQAOAAq3AAAAZhQBBRUrARQPAQYiJjURND4BHwEWAUEK+gscFhYcC/oKAV4OC/oLFg4B9A8UAgz6CgAAAQAAAAABZwJ8AA0AF0AUAAEAAQFHAAEAAW8AAABmFxMCBRYrAREUBiIvASY0PwE2MhYBZRQgCfoKCvoLHBgCWP4MDhYL+gscC/oLFgAAAAAFAAD/agOhA1IAFAAYACgAOABcALdAECoaAgoFMiICBgoNAQABA0dLsApQWEA/DgwCCgUGBgplAAIEAQQCAW0AAQAEAQBrAAADBAADawgBBgAEAgYEXwcBBQULWA0BCwsMSAADAwlYAAkJDQlJG0BADgwCCgUGBQoGbQACBAEEAgFtAAEABAEAawAAAwQAA2sIAQYABAIGBF8HAQUFC1gNAQsLDEgAAwMJWAAJCQ0JSVlAGFtZVlNQT0xJRkQ/PCYmJiQRFRQXEg8FHSsJAQYiLwEmND8BNjIfATc2Mh8BFhQBIREhNzU0JisBIgYdARQWOwEyNiU1NCYrASIGHQEUFjsBMjY3ERQGIyEiJjURNDY7ATU0NjsBMhYdATM1NDY7ATIWBxUzMhYC1/7iBQ4GoQUFGgUOBnv3Bg4GGQX9awMS/O7XCggkCAoKCCQICgGsCggjCAoKCCMICtcsHPzuHSoqHUg0JSQlNNY2JCMlNgFHHSoBOP7iBQWhBg4FGgUFe/gFBRoFDv5zAjxroQgKCgihCAoKCKEICgoIoQgKCiz9NR0qKh0Cyx0qNiU0NCU2NiU0NCU2KgAAAAAPAAD/agOhA1IAAwAHAAsADwATABcAGwAfACMAMwA3ADsAPwBPAHMAmECVQSUCHRJJLSQDEx0CRyEfAh0TCR1UGwETGRcNAwkIEwlfGBYMAwgVEQcDBQQIBV4UEAYDBA8LAwMBAAQBXhoBEhIeWCABHh4MSA4KAgMAABxYABwcDRxJcnBtamdmY2BdW1ZTTUxFRD8+PTw7Ojk4NzY1NDEvKScjIiEgHx4dHBsaGRgXFhUUExIRERERERERERAiBR0rFzM1IxczNSMnMzUjFzM1IyczNSMBMzUjJzM1IwEzNSMnMzUjAzU0JicjIgYHFRQWNzMyNgEzNSMnMzUjFzM1Izc1NCYnIyIGFxUUFjczMjY3ERQGIyEiJjURNDY7ATU0NjsBMhYdATM1NDY7ATIWBxUzMhZHoaHFsrLFoaHFsrLFoaEBm7Oz1rKyAayhodazs8QMBiQHCgEMBiQHCgGboaHWs7PWoaESCggjBwwBCggjCArXLBz87h0qKh1INCUkJTTWNiQjJTYBRx0qT6GhoSSysrIkof3Eofqh/cShJLIBMKEHCgEMBqEHDAEK/iayJKGhoWuhBwoBDAahBwwBCiz9NR0qKh0Cyx0qNiU0NCU2NiU0NCU2KgAAAAH//wAAAjsByQAOABFADgABAAFvAAAAZhUyAgUWKyUUBichIi4BPwE2Mh8BFgI7FA/+DA8UAgz6Ch4K+gqrDhYBFB4L+goK+gsAAAABAAAAAAI8Ae0ADgAXQBQAAQABAUcAAQABbwAAAGY1FAIFFisBFA8BBiIvASY0NjMhMhYCOwr6CxwL+gsWDgH0DhYByQ4L+gsL+gscFhYAAAEAAP/vAtQChgAkAB5AGyIZEAcEAAIBRwMBAgACbwEBAABmFBwUFAQFGCslFA8BBiIvAQcGIi8BJjQ/AScmND8BNjIfATc2Mh8BFhQPARcWAtQPTBAsEKSkECwQTBAQpKQQEEwQLBCkpBAsEEwPD6SkD3AWEEwPD6WlDw9MECwQpKQQLBBMEBCkpBAQTA8uD6SkDwABAAAAAQAAbdyczV8PPPUACwPoAAAAANUsgZUAAAAA1SyBlf///2oD6ANSAAAACAACAAAAAAAAAAEAAANS/2oAAAPo/////gPoAAEAAAAAAAAAAAAAAAAAAAAIA+gAAAFlAAABZQAAA+gAAAOgAAACO///AjsAAAMRAAAAAAAAACIASgEoAhYCPAJkAq4AAAABAAAACAB0AA8AAAAAAAIARABUAHMAAACpC3AAAAAAAAAAEgDeAAEAAAAAAAAANQAAAAEAAAAAAAEADAA1AAEAAAAAAAIABwBBAAEAAAAAAAMADABIAAEAAAAAAAQADABUAAEAAAAAAAUACwBgAAEAAAAAAAYADABrAAEAAAAAAAoAKwB3AAEAAAAAAAsAEwCiAAMAAQQJAAAAagC1AAMAAQQJAAEAGAEfAAMAAQQJAAIADgE3AAMAAQQJAAMAGAFFAAMAAQQJAAQAGAFdAAMAAQQJAAUAFgF1AAMAAQQJAAYAGAGLAAMAAQQJAAoAVgGjAAMAAQQJAAsAJgH5Q29weXJpZ2h0IChDKSAyMDE3IGJ5IG9yaWdpbmFsIGF1dGhvcnMgQCBmb250ZWxsby5jb21teWRhdGVwaWNrZXJSZWd1bGFybXlkYXRlcGlja2VybXlkYXRlcGlja2VyVmVyc2lvbiAxLjBteWRhdGVwaWNrZXJHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADEANwAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AbQB5AGQAYQB0AGUAcABpAGMAawBlAHIAUgBlAGcAdQBsAGEAcgBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAbQB5AGQAYQB0AGUAcABpAGMAawBlAHIARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAQMBBAEFAQYBBwEIAQkACW15ZHByaWdodAhteWRwbGVmdAlteWRwdG9kYXkMbXlkcGNhbGVuZGFyBm15ZHB1cAhteWRwZG93bgpteWRwcmVtb3ZlAAAAAAABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAYABgAGAAYA1L/agNS/2qwACwgsABVWEVZICBLuAAOUUuwBlNaWLA0G7AoWWBmIIpVWLACJWG5CAAIAGNjI2IbISGwAFmwAEMjRLIAAQBDYEItsAEssCBgZi2wAiwgZCCwwFCwBCZasigBCkNFY0VSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQpDRWNFYWSwKFBYIbEBCkNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ABK1lZI7AAUFhlWVktsAMsIEUgsAQlYWQgsAVDUFiwBSNCsAYjQhshIVmwAWAtsAQsIyEjISBksQViQiCwBiNCsQEKQ0VjsQEKQ7ABYEVjsAMqISCwBkMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZISCwQFNYsAErGyGwQFkjsABQWGVZLbAFLLAHQyuyAAIAQ2BCLbAGLLAHI0IjILAAI0JhsAJiZrABY7ABYLAFKi2wBywgIEUgsAtDY7gEAGIgsABQWLBAYFlmsAFjYESwAWAtsAgssgcLAENFQiohsgABAENgQi2wCSywAEMjRLIAAQBDYEItsAosICBFILABKyOwAEOwBCVgIEWKI2EgZCCwIFBYIbAAG7AwUFiwIBuwQFlZI7AAUFhlWbADJSNhRESwAWAtsAssICBFILABKyOwAEOwBCVgIEWKI2EgZLAkUFiwABuwQFkjsABQWGVZsAMlI2FERLABYC2wDCwgsAAjQrILCgNFWCEbIyFZKiEtsA0ssQICRbBkYUQtsA4ssAFgICCwDENKsABQWCCwDCNCWbANQ0qwAFJYILANI0JZLbAPLCCwEGJmsAFjILgEAGOKI2GwDkNgIIpgILAOI0IjLbAQLEtUWLEEZERZJLANZSN4LbARLEtRWEtTWLEEZERZGyFZJLATZSN4LbASLLEAD0NVWLEPD0OwAWFCsA8rWbAAQ7ACJUKxDAIlQrENAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAOKiEjsAFhIIojYbAOKiEbsQEAQ2CwAiVCsAIlYbAOKiFZsAxDR7ANQ0dgsAJiILAAUFiwQGBZZrABYyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsQAAEyNEsAFDsAA+sgEBAUNgQi2wEywAsQACRVRYsA8jQiBFsAsjQrAKI7ABYEIgYLABYbUQEAEADgBCQopgsRIGK7ByKxsiWS2wFCyxABMrLbAVLLEBEystsBYssQITKy2wFyyxAxMrLbAYLLEEEystsBkssQUTKy2wGiyxBhMrLbAbLLEHEystsBwssQgTKy2wHSyxCRMrLbAeLACwDSuxAAJFVFiwDyNCIEWwCyNCsAojsAFgQiBgsAFhtRAQAQAOAEJCimCxEgYrsHIrGyJZLbAfLLEAHistsCAssQEeKy2wISyxAh4rLbAiLLEDHistsCMssQQeKy2wJCyxBR4rLbAlLLEGHistsCYssQceKy2wJyyxCB4rLbAoLLEJHistsCksIDywAWAtsCosIGCwEGAgQyOwAWBDsAIlYbABYLApKiEtsCsssCorsCoqLbAsLCAgRyAgsAtDY7gEAGIgsABQWLBAYFlmsAFjYCNhOCMgilVYIEcgILALQ2O4BABiILAAUFiwQGBZZrABY2AjYTgbIVktsC0sALEAAkVUWLABFrAsKrABFTAbIlktsC4sALANK7EAAkVUWLABFrAsKrABFTAbIlktsC8sIDWwAWAtsDAsALABRWO4BABiILAAUFiwQGBZZrABY7ABK7ALQ2O4BABiILAAUFiwQGBZZrABY7ABK7AAFrQAAAAAAEQ+IzixLwEVKi2wMSwgPCBHILALQ2O4BABiILAAUFiwQGBZZrABY2CwAENhOC2wMiwuFzwtsDMsIDwgRyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsABDYbABQ2M4LbA0LLECABYlIC4gR7AAI0KwAiVJiopHI0cjYSBYYhshWbABI0KyMwEBFRQqLbA1LLAAFrAEJbAEJUcjRyNhsAlDK2WKLiMgIDyKOC2wNiywABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyCwCEMgiiNHI0cjYSNGYLAEQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwAmIgsABQWLBAYFlmsAFjYSMgILAEJiNGYTgbI7AIQ0awAiWwCENHI0cjYWAgsARDsAJiILAAUFiwQGBZZrABY2AjILABKyOwBENgsAErsAUlYbAFJbACYiCwAFBYsEBgWWawAWOwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbA3LLAAFiAgILAFJiAuRyNHI2EjPDgtsDgssAAWILAII0IgICBGI0ewASsjYTgtsDkssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbkIAAgAY2MjIFhiGyFZY7gEAGIgsABQWLBAYFlmsAFjYCMuIyAgPIo4IyFZLbA6LLAAFiCwCEMgLkcjRyNhIGCwIGBmsAJiILAAUFiwQGBZZrABYyMgIDyKOC2wOywjIC5GsAIlRlJYIDxZLrErARQrLbA8LCMgLkawAiVGUFggPFkusSsBFCstsD0sIyAuRrACJUZSWCA8WSMgLkawAiVGUFggPFkusSsBFCstsD4ssDUrIyAuRrACJUZSWCA8WS6xKwEUKy2wPyywNiuKICA8sAQjQoo4IyAuRrACJUZSWCA8WS6xKwEUK7AEQy6wKystsEAssAAWsAQlsAQmIC5HI0cjYbAJQysjIDwgLiM4sSsBFCstsEEssQgEJUKwABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyBHsARDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbACYiCwAFBYsEBgWWawAWNhsAIlRmE4IyA8IzgbISAgRiNHsAErI2E4IVmxKwEUKy2wQiywNSsusSsBFCstsEMssDYrISMgIDywBCNCIzixKwEUK7AEQy6wKystsEQssAAVIEewACNCsgABARUUEy6wMSotsEUssAAVIEewACNCsgABARUUEy6wMSotsEYssQABFBOwMiotsEcssDQqLbBILLAAFkUjIC4gRoojYTixKwEUKy2wSSywCCNCsEgrLbBKLLIAAEErLbBLLLIAAUErLbBMLLIBAEErLbBNLLIBAUErLbBOLLIAAEIrLbBPLLIAAUIrLbBQLLIBAEIrLbBRLLIBAUIrLbBSLLIAAD4rLbBTLLIAAT4rLbBULLIBAD4rLbBVLLIBAT4rLbBWLLIAAEArLbBXLLIAAUArLbBYLLIBAEArLbBZLLIBAUArLbBaLLIAAEMrLbBbLLIAAUMrLbBcLLIBAEMrLbBdLLIBAUMrLbBeLLIAAD8rLbBfLLIAAT8rLbBgLLIBAD8rLbBhLLIBAT8rLbBiLLA3Ky6xKwEUKy2wYyywNyuwOystsGQssDcrsDwrLbBlLLAAFrA3K7A9Ky2wZiywOCsusSsBFCstsGcssDgrsDsrLbBoLLA4K7A8Ky2waSywOCuwPSstsGossDkrLrErARQrLbBrLLA5K7A7Ky2wbCywOSuwPCstsG0ssDkrsD0rLbBuLLA6Ky6xKwEUKy2wbyywOiuwOystsHAssDorsDwrLbBxLLA6K7A9Ky2wciyzCQQCA0VYIRsjIVlCK7AIZbADJFB4sAEVMC0AS7gAyFJYsQEBjlmwAbkIAAgAY3CxAAVCsgABACqxAAVCswoCAQgqsQAFQrMOAAEIKrEABkK6AsAAAQAJKrEAB0K6AEAAAQAJKrEDAESxJAGIUViwQIhYsQNkRLEmAYhRWLoIgAABBECIY1RYsQMARFlZWVmzDAIBDCq4Af+FsASNsQIARAAA) format('truetype');font-weight:400;font-style:normal}.mydp .mydpicon{font-family:mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mydp .icon-mydpright:before{content:\"\\e800\"}.mydp .icon-mydpleft:before{content:\"\\e801\"}.mydp .icon-mydptoday:before{content:\"\\e802\"}.mydp .icon-mydpcalendar:before{content:\"\\e803\"}.mydp .icon-mydpup:before{content:\"\\e804\"}.mydp .icon-mydpdown:before{content:\"\\e805\"}.mydp .icon-mydpremove:before{content:\"\\e806\"}"],
          template: "<div class=\"mydp\" [ngStyle]=\"{'width': opts.showInputField ? opts.width : null, 'border': opts.inline ? 'none' : null}\"><div class=\"selectiongroup\" *ngIf=\"!opts.inline\"><input *ngIf=\"opts.showInputField\" #inputBoxEl ngtype=\"text\" class=\"selection\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"opts.openSelectorOnInputClick&&!opts.editableDateField&&openBtnClicked()\" [ngClass]=\"{'invaliddate': invalidDate&&opts.indicateInvalidDate, 'inputnoteditable': opts.openSelectorOnInputClick&&!opts.editableDateField, 'selectiondisabled': opts.componentDisabled}\" placeholder=\"{{placeholder}}\" [ngStyle]=\"{'height': opts.height, 'font-size': opts.selectionTxtFontSize}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\" (keyup)=\"onCloseSelector($event)\" (focus)=\"opts.editableDateField&&onFocusInput($event)\" (blur)=\"opts.editableDateField&&onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" [readonly]=\"!opts.editableDateField\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"off\"><div class=\"selbtngroup\" [style.height]=\"opts.height\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelDecreaseDate\" class=\"btndecrease\" *ngIf=\"opts.showDecreaseDateBtn\" (click)=\"onDecreaseBtnClicked()\" [ngClass]=\"{'btndecreaseenabled': !opts.componentDisabled, 'btndecreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpleft\"></span></button> <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelIncreaseDate\" class=\"btnincrease\" *ngIf=\"opts.showIncreaseDateBtn\" (click)=\"onIncreaseBtnClicked()\" [ngClass]=\"{'btnincreaseenabled': !opts.componentDisabled, 'btnincreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpright\"></span></button> <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelClearDate\" class=\"btnclear\" *ngIf=\"selectionDayTxt.length>0&&opts.showClearDateBtn\" (click)=\"removeBtnClicked()\" [ngClass]=\"{'btnclearenabled': !opts.componentDisabled, 'btncleardisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpremove\"></span></button> <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelOpenCalendar\" class=\"btnpicker\" (click)=\"openBtnClicked()\" [ngClass]=\"{'btnpickerenabled': !opts.componentDisabled, 'btnpickerdisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showClearDateBtn&&!opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField||selectionDayTxt.length===0&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpcalendar\"></span></button></div></div><div class=\"selector\" #selectorEl [ngStyle]=\"{'width': opts.selectorWidth, 'height' : opts.selectorHeight, 'bottom': getSelectorTopPosition()}\" *ngIf=\"showSelector||opts.inline\" [mydpfocus]=\"opts.inline?'0':'1'\" [ngClass]=\"{'inlinedp': opts.inline, 'alignselectorright': opts.alignSelectorRight, 'selectorarrow': opts.showSelectorArrow&&!opts.inline, 'selectorarrowleft': opts.showSelectorArrow&&!opts.alignSelectorRight&&!opts.inline, 'selectorarrowright': opts.showSelectorArrow&&opts.alignSelectorRight&&!opts.inline}\" (keyup)=\"onCloseSelector($event)\" tabindex=\"0\"><table class=\"header\"><tr><td><div style=\"float:left\"><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button></div><div class=\"headermonthtxt\"><button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'monthlabel': opts.monthSelector}\" (click)=\"opts.monthSelector&&onSelectMonthClicked($event)\" tabindex=\"{{opts.monthSelector?'0':'-1'}}\">{{visibleMonth.monthTxt}}</button></div><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button></div></div></td><td><button *ngIf=\"opts.showTodayBtn\" type=\"button\" class=\"headertodaybtn\" (click)=\"onTodayClicked()\" [disabled]=\"disableTodayBtn\" [ngClass]=\"{'headertodaybtnenabled': !disableTodayBtn, 'headertodaybtndisabled': disableTodayBtn}\"><span class=\"mydpicon icon-mydptoday\"></span> <span>{{opts.todayBtnTxt}}</span></button></td><td><div style=\"float:right\"><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevYear\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevYear()\" [disabled]=\"prevYearDisabled\" [ngClass]=\"{'headerbtnenabled': !prevYearDisabled, 'headerbtndisabled': prevYearDisabled}\"></button></div><div class=\"headeryeartxt\"><button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'yearlabel': opts.yearSelector}\" (click)=\"opts.yearSelector&&onSelectYearClicked($event)\" tabindex=\"{{opts.yearSelector?'0':'-1'}}\">{{visibleMonth.year}}</button></div><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextYear\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextYear()\" [disabled]=\"nextYearDisabled\" [ngClass]=\"{'headerbtnenabled': !nextYearDisabled, 'headerbtndisabled': nextYearDisabled}\"></button></div></div></td></tr></table><table class=\"caltable\" *ngIf=\"!selectMonth&&!selectYear\"><thead><tr><th class=\"weekdaytitle weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"weekdaytitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead><tbody><tr *ngFor=\"let w of dates\"><td class=\"daycell daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td><td class=\"daycell\" *ngFor=\"let d of w.week\" [ngClass]=\"{'currmonth':d.cmo===currMonthId&&!d.disabled, 'selectedday':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId, 'disabled': d.disabled, 'tablesingleday':(!opts.allowSelectionOnlyInCurrentMonth||d.cmo===currMonthId&&opts.allowSelectionOnlyInCurrentMonth)&&!d.disabled}\" (click)=\"!d.disabled&&onCellClicked(d);$event.stopPropagation()\" (keydown)=\"onCellKeyDown($event, d)\" tabindex=\"0\"><div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div><div class=\"datevalue\" [ngClass]=\"{'prevmonth':d.cmo===prevMonthId,'currmonth':d.cmo===currMonthId,'nextmonth':d.cmo===nextMonthId,'highlight':d.highlight}\"><span [ngClass]=\"{'markcurrday':d.currDay&&opts.markCurrentDay, 'dimday': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled)}\">{{d.dateObj.day}}</span></div></td></tr></tbody></table><table class=\"monthtable\" *ngIf=\"selectMonth\"><tbody><tr *ngFor=\"let mr of months\"><td class=\"monthcell tablesinglemonth\" [ngClass]=\"{'selectedmonth': m.selected, 'disabled': m.disabled}\" *ngFor=\"let m of mr\" (click)=\"!m.disabled&&onMonthCellClicked(m);$event.stopPropagation()\" (keydown)=\"onMonthCellKeyDown($event, m)\" tabindex=\"0\"><div class=\"monthvalue\" [ngClass]=\"{'markcurrmonth':m.currMonth&&opts.markCurrentMonth}\">{{m.name}}</div></td></tr></tbody></table><table class=\"yeartable\" *ngIf=\"selectYear\"><tbody><tr><td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\"><button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpup\" (click)=\"onPrevYears($event, years[0][0].year)\" [disabled]=\"prevYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !prevYearsDisabled, 'yearchangebtndisabled': prevYearsDisabled}\"></button></td></tr><tr *ngFor=\"let yr of years\"><td class=\"yearcell tablesingleyear\" [ngClass]=\"{'selectedyear': y.selected, 'disabled': y.disabled}\" *ngFor=\"let y of yr\" (click)=\"!y.disabled&&onYearCellClicked(y);$event.stopPropagation()\" (keydown)=\"onYearCellKeyDown($event, y)\" tabindex=\"0\"><div class=\"yearvalue\" [ngClass]=\"{'markcurryear':y.currYear&&opts.markCurrentYear}\">{{y.year}}</div></td></tr><tr><td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\"><button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpdown\" (click)=\"onNextYears($event, years[0][0].year)\" [disabled]=\"nextYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !nextYearsDisabled, 'yearchangebtndisabled': nextYearsDisabled}\"></button></td></tr></tbody></table></div></div>",
          providers: [_services_my_date_picker_locale_service__WEBPACK_IMPORTED_MODULE_2__["LocaleService"], _services_my_date_picker_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], MYDP_VALUE_ACCESSOR],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }];
      MyDatePicker.ctorParameters = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _services_my_date_picker_locale_service__WEBPACK_IMPORTED_MODULE_2__["LocaleService"]
      }, {
        type: _services_my_date_picker_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
      MyDatePicker.propDecorators = {
        'options': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'locale': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'defaultMonth': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'selDate': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'placeholder': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'selector': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'disabled': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'dateChanged': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'inputFieldChanged': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'calendarViewChanged': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'calendarToggle': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'inputFocusBlur': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'selectorEl': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["selectorEl"]
        }],
        'inputBoxEl': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["inputBoxEl"]
        }]
      };
      return MyDatePicker;
    }(); //# sourceMappingURL=my-date-picker.component.js.map

    /***/

  },

  /***/
  "./node_modules/mydatepicker/dist/my-date-picker.module.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/my-date-picker.module.js ***!
    \*****************************************************************/

  /*! exports provided: MyDatePickerModule */

  /***/
  function node_modulesMydatepickerDistMyDatePickerModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDatePickerModule", function () {
      return MyDatePickerModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _my_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-date-picker.component */
    "./node_modules/mydatepicker/dist/my-date-picker.component.js");
    /* harmony import */


    var _directives_my_date_picker_focus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directives/my-date-picker.focus.directive */
    "./node_modules/mydatepicker/dist/directives/my-date-picker.focus.directive.js");

    var MyDatePickerModule = function () {
      function MyDatePickerModule() {}

      MyDatePickerModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          declarations: [_my_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["MyDatePicker"], _directives_my_date_picker_focus_directive__WEBPACK_IMPORTED_MODULE_4__["FocusDirective"]],
          exports: [_my_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["MyDatePicker"], _directives_my_date_picker_focus_directive__WEBPACK_IMPORTED_MODULE_4__["FocusDirective"]]
        }]
      }];
      MyDatePickerModule.ctorParameters = [];
      return MyDatePickerModule;
    }(); //# sourceMappingURL=my-date-picker.module.js.map

    /***/

  },

  /***/
  "./node_modules/mydatepicker/dist/services/my-date-picker.locale.service.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/services/my-date-picker.locale.service.js ***!
    \**********************************************************************************/

  /*! exports provided: LocaleService */

  /***/
  function node_modulesMydatepickerDistServicesMyDatePickerLocaleServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
      return LocaleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocaleService = function () {
      function LocaleService() {
        this.locales = {
          "en": {
            dayLabels: {
              su: "Sun",
              mo: "Mon",
              tu: "Tue",
              we: "Wed",
              th: "Thu",
              fr: "Fri",
              sa: "Sat"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "May",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Oct",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "mm/dd/yyyy",
            todayBtnTxt: "Today",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "he": {
            dayLabels: {
              su: "רא",
              mo: "שנ",
              tu: "של",
              we: "רב",
              th: "חמ",
              fr: "שי",
              sa: "שב"
            },
            monthLabels: {
              1: "ינו",
              2: "פבר",
              3: "מרץ",
              4: "אפר",
              5: "מאי",
              6: "יונ",
              7: "יול",
              8: "אוג",
              9: "ספט",
              10: "אוק",
              11: "נוב",
              12: "דצמ"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "היום",
            firstDayOfWeek: "su",
            sunHighlight: false
          },
          "ja": {
            dayLabels: {
              su: "日",
              mo: "月",
              tu: "火",
              we: "水",
              th: "木",
              fr: "金",
              sa: "土"
            },
            monthLabels: {
              1: "１月",
              2: "２月",
              3: "３月",
              4: "４月",
              5: "５月",
              6: "６月",
              7: "７月",
              8: "８月",
              9: "９月",
              10: "１０月",
              11: "１１月",
              12: "１２月"
            },
            dateFormat: "yyyy.mm.dd",
            todayBtnTxt: "今日",
            sunHighlight: false
          },
          "fr": {
            dayLabels: {
              su: "Dim",
              mo: "Lun",
              tu: "Mar",
              we: "Mer",
              th: "Jeu",
              fr: "Ven",
              sa: "Sam"
            },
            monthLabels: {
              1: "Jan",
              2: "Fév",
              3: "Mar",
              4: "Avr",
              5: "Mai",
              6: "Juin",
              7: "Juil",
              8: "Aoû",
              9: "Sep",
              10: "Oct",
              11: "Nov",
              12: "Déc"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "Aujourd'hui",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "fr-ch": {
            dayLabels: {
              su: "Dim",
              mo: "Lun",
              tu: "Mar",
              we: "Mer",
              th: "Jeu",
              fr: "Ven",
              sa: "Sam"
            },
            monthLabels: {
              1: "Jan",
              2: "Fév",
              3: "Mar",
              4: "Avr",
              5: "Mai",
              6: "Juin",
              7: "Juil",
              8: "Aoû",
              9: "Sep",
              10: "Oct",
              11: "Nov",
              12: "Déc"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Aujourd'hui",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "fi": {
            dayLabels: {
              su: "Su",
              mo: "Ma",
              tu: "Ti",
              we: "Ke",
              th: "To",
              fr: "Pe",
              sa: "La"
            },
            monthLabels: {
              1: "Tam",
              2: "Hel",
              3: "Maa",
              4: "Huh",
              5: "Tou",
              6: "Kes",
              7: "Hei",
              8: "Elo",
              9: "Syy",
              10: "Lok",
              11: "Mar",
              12: "Jou"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Tänään",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "es": {
            dayLabels: {
              su: "Do",
              mo: "Lu",
              tu: "Ma",
              we: "Mi",
              th: "Ju",
              fr: "Vi",
              sa: "Sa"
            },
            monthLabels: {
              1: "Ene",
              2: "Feb",
              3: "Mar",
              4: "Abr",
              5: "May",
              6: "Jun",
              7: "Jul",
              8: "Ago",
              9: "Sep",
              10: "Oct",
              11: "Nov",
              12: "Dic"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Hoy",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "hu": {
            dayLabels: {
              su: "Vas",
              mo: "Hét",
              tu: "Kedd",
              we: "Sze",
              th: "Csü",
              fr: "Pén",
              sa: "Szo"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Már",
              4: "Ápr",
              5: "Máj",
              6: "Jún",
              7: "Júl",
              8: "Aug",
              9: "Szep",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "Ma",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "sv": {
            dayLabels: {
              su: "Sön",
              mo: "Mån",
              tu: "Tis",
              we: "Ons",
              th: "Tor",
              fr: "Fre",
              sa: "Lör"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Maj",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "Idag",
            firstDayOfWeek: "mo",
            sunHighlight: false
          },
          "nl": {
            dayLabels: {
              su: "Zon",
              mo: "Maa",
              tu: "Din",
              we: "Woe",
              th: "Don",
              fr: "Vri",
              sa: "Zat"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Mei",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "dd-mm-yyyy",
            todayBtnTxt: "Vandaag",
            firstDayOfWeek: "mo",
            sunHighlight: false
          },
          "ru": {
            dayLabels: {
              su: "Вс",
              mo: "Пн",
              tu: "Вт",
              we: "Ср",
              th: "Чт",
              fr: "Пт",
              sa: "Сб"
            },
            monthLabels: {
              1: "Янв",
              2: "Фев",
              3: "Март",
              4: "Апр",
              5: "Май",
              6: "Июнь",
              7: "Июль",
              8: "Авг",
              9: "Сент",
              10: "Окт",
              11: "Ноя",
              12: "Дек"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Сегодня",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "uk": {
            dayLabels: {
              su: "Нд",
              mo: "Пн",
              tu: "Вт",
              we: "Ср",
              th: "Чт",
              fr: "Пт",
              sa: "Сб"
            },
            monthLabels: {
              1: "Січ",
              2: "Лют",
              3: "Бер",
              4: "Кві",
              5: "Тра",
              6: "Чер",
              7: "Лип",
              8: "Сер",
              9: "Вер",
              10: "Жов",
              11: "Лис",
              12: "Гру"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Сьогодні",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "no": {
            dayLabels: {
              su: "Søn",
              mo: "Man",
              tu: "Tir",
              we: "Ons",
              th: "Tor",
              fr: "Fre",
              sa: "Lør"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Mai",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Des"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "I dag",
            firstDayOfWeek: "mo",
            sunHighlight: false
          },
          "tr": {
            dayLabels: {
              su: "Paz",
              mo: "Pzt",
              tu: "Sal",
              we: "Çar",
              th: "Per",
              fr: "Cum",
              sa: "Cmt"
            },
            monthLabels: {
              1: "Oca",
              2: "Şub",
              3: "Mar",
              4: "Nis",
              5: "May",
              6: "Haz",
              7: "Tem",
              8: "Ağu",
              9: "Eyl",
              10: "Eki",
              11: "Kas",
              12: "Ara"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Bugün",
            firstDayOfWeek: "mo",
            sunHighlight: false
          },
          "pt-br": {
            dayLabels: {
              su: "Dom",
              mo: "Seg",
              tu: "Ter",
              we: "Qua",
              th: "Qui",
              fr: "Sex",
              sa: "Sab"
            },
            monthLabels: {
              1: "Jan",
              2: "Fev",
              3: "Mar",
              4: "Abr",
              5: "Mai",
              6: "Jun",
              7: "Jul",
              8: "Ago",
              9: "Set",
              10: "Out",
              11: "Nov",
              12: "Dez"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "Hoje",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "de": {
            dayLabels: {
              su: "So",
              mo: "Mo",
              tu: "Di",
              we: "Mi",
              th: "Do",
              fr: "Fr",
              sa: "Sa"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mär",
              4: "Apr",
              5: "Mai",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dez"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Heute",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "de-ch": {
            dayLabels: {
              su: "So",
              mo: "Mo",
              tu: "Di",
              we: "Mi",
              th: "Do",
              fr: "Fr",
              sa: "Sa"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mär",
              4: "Apr",
              5: "Mai",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dez"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Heute",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "it": {
            dayLabels: {
              su: "Dom",
              mo: "Lun",
              tu: "Mar",
              we: "Mer",
              th: "Gio",
              fr: "Ven",
              sa: "Sab"
            },
            monthLabels: {
              1: "Gen",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Mag",
              6: "Giu",
              7: "Lug",
              8: "Ago",
              9: "Set",
              10: "Ott",
              11: "Nov",
              12: "Dic"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "Oggi",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "it-ch": {
            dayLabels: {
              su: "Dom",
              mo: "Lun",
              tu: "Mar",
              we: "Mer",
              th: "Gio",
              fr: "Ven",
              sa: "Sab"
            },
            monthLabels: {
              1: "Gen",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Mag",
              6: "Giu",
              7: "Lug",
              8: "Ago",
              9: "Set",
              10: "Ott",
              11: "Nov",
              12: "Dic"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Oggi",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "pl": {
            dayLabels: {
              su: "Nie",
              mo: "Pon",
              tu: "Wto",
              we: "Śro",
              th: "Czw",
              fr: "Pią",
              sa: "Sob"
            },
            monthLabels: {
              1: "Sty",
              2: "Lut",
              3: "Mar",
              4: "Kwi",
              5: "Maj",
              6: "Cze",
              7: "Lip",
              8: "Sie",
              9: "Wrz",
              10: "Paź",
              11: "Lis",
              12: "Gru"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "Dzisiaj",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "my": {
            dayLabels: {
              su: "တနင်္ဂနွေ",
              mo: "တနင်္လာ",
              tu: "အင်္ဂါ",
              we: "ဗုဒ္ဓဟူး",
              th: "ကြသပတေး",
              fr: "သောကြာ",
              sa: "စနေ"
            },
            monthLabels: {
              1: "ဇန်နဝါရီ",
              2: "ဖေဖော်ဝါရီ",
              3: "မတ်",
              4: "ဧပြီ",
              5: "မေ",
              6: "ဇွန်",
              7: "ဇူလိုင်",
              8: "ဩဂုတ်",
              9: "စက်တင်ဘာ",
              10: "အောက်တိုဘာ",
              11: "နိုဝင်ဘာ",
              12: "ဒီဇင်ဘာ"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "ယနေ့",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "sk": {
            dayLabels: {
              su: "Ne",
              mo: "Po",
              tu: "Ut",
              we: "St",
              th: "Št",
              fr: "Pi",
              sa: "So"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Máj",
              6: "Jún",
              7: "Júl",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Dnes",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "sl": {
            dayLabels: {
              su: "Ned",
              mo: "Pon",
              tu: "Tor",
              we: "Sre",
              th: "Čet",
              fr: "Pet",
              sa: "Sob"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Maj",
              6: "Jun",
              7: "Jul",
              8: "Avg",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "dd. mm. yyyy",
            todayBtnTxt: "Danes",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "zh-cn": {
            dayLabels: {
              su: "日",
              mo: "一",
              tu: "二",
              we: "三",
              th: "四",
              fr: "五",
              sa: "六"
            },
            monthLabels: {
              1: "1月",
              2: "2月",
              3: "3月",
              4: "4月",
              5: "5月",
              6: "6月",
              7: "7月",
              8: "8月",
              9: "9月",
              10: "10月",
              11: "11月",
              12: "12月"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "今天",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "ro": {
            dayLabels: {
              su: "du",
              mo: "lu",
              tu: "ma",
              we: "mi",
              th: "jo",
              fr: "vi",
              sa: "sa"
            },
            monthLabels: {
              1: "ian",
              2: "feb",
              3: "mart",
              4: "apr",
              5: "mai",
              6: "iun",
              7: "iul",
              8: "aug",
              9: "sept",
              10: "oct",
              11: "nov",
              12: "dec"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Astăzi",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "ca": {
            dayLabels: {
              su: "dg",
              mo: "dl",
              tu: "dt",
              we: "dc",
              th: "dj",
              fr: "dv",
              sa: "ds"
            },
            monthLabels: {
              1: "Gen",
              2: "Febr",
              3: "Març",
              4: "Abr",
              5: "Maig",
              6: "Juny",
              7: "Jul",
              8: "Ag",
              9: "Set",
              10: "Oct",
              11: "Nov",
              12: "Des"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Avui",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "id": {
            dayLabels: {
              su: "Min",
              mo: "Sen",
              tu: "Sel",
              we: "Rab",
              th: "Kam",
              fr: "Jum",
              sa: "Sab"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Mei",
              6: "Jun",
              7: "Jul",
              8: "Ags",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Des"
            },
            dateFormat: "dd-mm-yyyy",
            todayBtnTxt: "Hari ini",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "en-au": {
            dayLabels: {
              su: "Sun",
              mo: "Mon",
              tu: "Tue",
              we: "Wed",
              th: "Thu",
              fr: "Fri",
              sa: "Sat"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "May",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Oct",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "Today",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "am-et": {
            dayLabels: {
              su: "እሑድ",
              mo: "ሰኞ",
              tu: "ማክሰኞ",
              we: "ረቡዕ",
              th: "ሐሙስ",
              fr: "ዓርብ",
              sa: "ቅዳሜ"
            },
            monthLabels: {
              1: "ጃንዩ",
              2: "ፌብሩ",
              3: "ማርች",
              4: "ኤፕረ",
              5: "ሜይ",
              6: "ጁን",
              7: "ጁላይ",
              8: "ኦገስ",
              9: "ሴፕቴ",
              10: "ኦክተ",
              11: "ኖቬም",
              12: "ዲሴም"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "ዛሬ",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "cs": {
            dayLabels: {
              su: "Ne",
              mo: "Po",
              tu: "Út",
              we: "St",
              th: "Čt",
              fr: "Pá",
              sa: "So"
            },
            monthLabels: {
              1: "Led",
              2: "Úno",
              3: "Bře",
              4: "Dub",
              5: "Kvě",
              6: "Čvn",
              7: "Čvc",
              8: "Srp",
              9: "Zář",
              10: "Říj",
              11: "Lis",
              12: "Pro"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Dnes",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "el": {
            dayLabels: {
              su: "Κυρ",
              mo: "Δευ",
              tu: "Τρι",
              we: "Τετ",
              th: "Πεμ",
              fr: "Παρ",
              sa: "Σαβ"
            },
            monthLabels: {
              1: "Ιαν",
              2: "Φεβ",
              3: "Μαρ",
              4: "Απρ",
              5: "Μαι",
              6: "Ιουν",
              7: "Ιουλ",
              8: "Αυγ",
              9: "Σεπ",
              10: "Οκτ",
              11: "Νοε",
              12: "Δεκ"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "Σήμερα",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "kk": {
            dayLabels: {
              su: "Жк",
              mo: "Дс",
              tu: "Сс",
              we: "Ср",
              th: "Бс",
              fr: "Жм",
              sa: "Сб"
            },
            monthLabels: {
              1: "Қаң",
              2: "Ақп",
              3: "Нау",
              4: "Сәу",
              5: "Мам",
              6: "Мау",
              7: "Шіл",
              8: "Там",
              9: "Қырк",
              10: "Қаз",
              11: "Қар",
              12: "Желт"
            },
            dateFormat: "dd-mmm-yyyy",
            todayBtnTxt: "Бүгін",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "th": {
            dayLabels: {
              su: "อา",
              mo: "จ",
              tu: "อ",
              we: "พ",
              th: "พฤ",
              fr: "ศ",
              sa: "ส"
            },
            monthLabels: {
              1: "ม.ค",
              2: "ก.พ.",
              3: "มี.ค.",
              4: "เม.ย.",
              5: "พ.ค.",
              6: "มิ.ย.",
              7: "ก.ค.",
              8: "ส.ค.",
              9: "ก.ย.",
              10: "ต.ค.",
              11: "พ.ย.",
              12: "ธ.ค."
            },
            dateFormat: "dd-mm-yyyy",
            todayBtnTxt: "วันนี้",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "ko-kr": {
            dayLabels: {
              su: "일",
              mo: "월",
              tu: "화",
              we: "수",
              th: "목",
              fr: "금",
              sa: "토"
            },
            monthLabels: {
              1: "1월",
              2: "2월",
              3: "3월",
              4: "4월",
              5: "5월",
              6: "6월",
              7: "7월",
              8: "8월",
              9: "9월",
              10: "10월",
              11: "11월",
              12: "12월"
            },
            dateFormat: "yyyy mm dd",
            todayBtnTxt: "오늘",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "da": {
            dayLabels: {
              su: "Søn",
              mo: "Man",
              tu: "Tir",
              we: "Ons",
              th: "Tor",
              fr: "Fre",
              sa: "Lør"
            },
            monthLabels: {
              1: "Jan",
              2: "Feb",
              3: "Mar",
              4: "Apr",
              5: "Maj",
              6: "Jun",
              7: "Jul",
              8: "Aug",
              9: "Sep",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "dd-mm-yyyy",
            todayBtnTxt: "I dag",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "lt": {
            dayLabels: {
              su: "Sk",
              mo: "Pr",
              tu: "An",
              we: "Tr",
              th: "Kt",
              fr: "Pn",
              sa: "Št"
            },
            monthLabels: {
              1: "Saus.",
              2: "Vas.",
              3: "Kov.",
              4: "Bal.",
              5: "Geg.",
              6: "Birž.",
              7: "Liep.",
              8: "Rugp.",
              9: "Rugs.",
              10: "Sapl.",
              11: "Lapkr.",
              12: "Gruod."
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "Šianien",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "vi": {
            dayLabels: {
              su: "CN",
              mo: "T2",
              tu: "T3",
              we: "T4",
              th: "T5",
              fr: "T6",
              sa: "T7"
            },
            monthLabels: {
              1: "THG 1",
              2: "THG 2",
              3: "THG 3",
              4: "THG 4",
              5: "THG 5",
              6: "THG 6",
              7: "THG 7",
              8: "THG 8",
              9: "THG 9",
              10: "THG 10",
              11: "THG 11",
              12: "THG 12"
            },
            dateFormat: "dd/mm/yyyy",
            todayBtnTxt: "Hôm nay",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "bn": {
            dayLabels: {
              su: "রবি",
              mo: "সোম",
              tu: "মঙ্গল",
              we: "বুধ",
              th: "বৃহঃ",
              fr: "শুক্র",
              sa: "শনি"
            },
            monthLabels: {
              1: "জানু",
              2: "ফেব্রু",
              3: "মার্চ",
              4: "এপ্রিল",
              5: "মে",
              6: "জুন",
              7: "জুলাই",
              8: "আগস্ট",
              9: "সেপ্টে",
              10: "অক্টো",
              11: "নভে",
              12: "ডিসে"
            },
            dateFormat: "dd-mm-yyyy",
            todayBtnTxt: "আজ",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "bg": {
            dayLabels: {
              su: "нд",
              mo: "пн",
              tu: "вт",
              we: "ср",
              th: "чт",
              fr: "пт",
              sa: "сб"
            },
            monthLabels: {
              1: "яну.",
              2: "фев.",
              3: "март",
              4: "апр.",
              5: "май",
              6: "юни",
              7: "юли",
              8: "авг.",
              9: "сеп.",
              10: "окт.",
              11: "ное.",
              12: "дек."
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "днес",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "hr": {
            dayLabels: {
              su: "Ne",
              mo: "Po",
              tu: "Ul",
              we: "Sr",
              th: "Če",
              fr: "Pe",
              sa: "Su"
            },
            monthLabels: {
              1: "Sij",
              2: "Vel",
              3: "Ožu",
              4: "Tra",
              5: "Svi",
              6: "Lip",
              7: "Srp",
              8: "Kol",
              9: "Ruj",
              10: "Lis",
              11: "Stu",
              12: "Pro"
            },
            dateFormat: "dd.mm.yyyy.",
            todayBtnTxt: "danas",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "ar": {
            dayLabels: {
              su: "الأحد",
              mo: "الاثنين",
              tu: "الثلاثاء",
              we: "الاربعاء",
              th: "الخميس",
              fr: "الجمعة",
              sa: "السبت"
            },
            monthLabels: {
              1: "يناير",
              2: "فبراير",
              3: "مارس",
              4: "ابريل",
              5: "مايو",
              6: "يونيو",
              7: "يوليو",
              8: "أغسطس",
              9: "سبتمبر",
              10: "أكتوبر",
              11: "نوفمبر",
              12: "ديسمبر"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "اليوم",
            firstDayOfWeek: "sa",
            sunHighlight: true
          },
          "is": {
            dayLabels: {
              su: "sun",
              mo: "mán",
              tu: "þri",
              we: "mið",
              th: "fim",
              fr: "fös",
              sa: "lau"
            },
            monthLabels: {
              1: "jan",
              2: "feb",
              3: "mar",
              4: "apr",
              5: "maí",
              6: "jún",
              7: "júl",
              8: "ágú",
              9: "sep",
              10: "okt",
              11: "nóv",
              12: "des"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Í dag",
            firstDayOfWeek: "su",
            sunHighlight: true
          },
          "tw": {
            dayLabels: {
              su: "週日",
              mo: "週一",
              tu: "週二",
              we: "週三",
              th: "週四",
              fr: "週五",
              sa: "週六"
            },
            monthLabels: {
              1: "一月",
              2: "二月",
              3: "三月",
              4: "四月",
              5: "五月",
              6: "六月",
              7: "七月",
              8: "八月",
              9: "九月",
              10: "十月",
              11: "十一月",
              12: "十二月"
            },
            dateFormat: "yyyy-mm-dd",
            todayBtnTxt: "今天",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "lv": {
            dayLabels: {
              su: "S",
              mo: "P",
              tu: "O",
              we: "T",
              th: "C",
              fr: "P",
              sa: "S"
            },
            monthLabels: {
              1: "Janv",
              2: "Febr",
              3: "Marts",
              4: "Apr",
              5: "Maijs",
              6: "Jūn",
              7: "Jūl",
              8: "Aug",
              9: "Sept",
              10: "Okt",
              11: "Nov",
              12: "Dec"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Šodien",
            firstDayOfWeek: "mo",
            sunHighlight: true
          },
          "et": {
            dayLabels: {
              su: "P",
              mo: "E",
              tu: "T",
              we: "K",
              th: "N",
              fr: "R",
              sa: "L"
            },
            monthLabels: {
              1: "Jaan",
              2: "Veebr",
              3: "Märts",
              4: "Apr",
              5: "Mai",
              6: "Juuni",
              7: "Juuli",
              8: "Aug",
              9: "Sept",
              10: "Okt",
              11: "Nov",
              12: "Dets"
            },
            dateFormat: "dd.mm.yyyy",
            todayBtnTxt: "Täna",
            firstDayOfWeek: "mo",
            sunHighlight: true
          }
        };
      }

      LocaleService.prototype.getLocaleOptions = function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
          return this.locales[locale];
        }

        return this.locales["en"];
      };

      LocaleService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];
      LocaleService.ctorParameters = [];
      return LocaleService;
    }(); //# sourceMappingURL=my-date-picker.locale.service.js.map

    /***/

  },

  /***/
  "./node_modules/mydatepicker/dist/services/my-date-picker.util.service.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/mydatepicker/dist/services/my-date-picker.util.service.js ***!
    \********************************************************************************/

  /*! exports provided: UtilService */

  /***/
  function node_modulesMydatepickerDistServicesMyDatePickerUtilServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var M = "m";
    var MM = "mm";
    var MMM = "mmm";
    var D = "d";
    var DD = "dd";
    var YYYY = "yyyy";

    var UtilService = function () {
      function UtilService() {
        this.weekDays = ["su", "mo", "tu", "we", "th", "fr", "sa"];
      }

      UtilService.prototype.isDateValid = function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, monthLabels, enableDays) {
        var returnDate = {
          day: 0,
          month: 0,
          year: 0
        };
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var isMonthStr = dateFormat.indexOf(MMM) !== -1;
        var delimeters = this.getDateFormatDelimeters(dateFormat);
        var dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        var year = this.getNumberByValue(dateValue[0]);
        var month = isMonthStr ? this.getMonthNumberByMonthName(dateValue[1], monthLabels) : this.getNumberByValue(dateValue[1]);
        var day = this.getNumberByValue(dateValue[2]);

        if (month !== -1 && day !== -1 && year !== -1) {
          if (year < minYear || year > maxYear || month < 1 || month > 12) {
            return returnDate;
          }

          var date = {
            year: year,
            month: month,
            day: day
          };

          if (this.isDisabledDay(date, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, enableDays)) {
            return returnDate;
          }

          if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
            daysInMonth[1] = 29;
          }

          if (day < 1 || day > daysInMonth[month - 1]) {
            return returnDate;
          }

          return date;
        }

        return returnDate;
      };

      UtilService.prototype.getDateValue = function (dateStr, dateFormat, delimeters) {
        var del = delimeters[0];

        if (delimeters[0] !== delimeters[1]) {
          del = delimeters[0] + delimeters[1];
        }

        var re = new RegExp("[" + del + "]");
        var ds = dateStr.split(re);
        var df = dateFormat.split(re);
        var da = [];

        for (var i = 0; i < df.length; i++) {
          if (df[i].indexOf(YYYY) !== -1) {
            da[0] = {
              value: ds[i],
              format: df[i]
            };
          }

          if (df[i].indexOf(M) !== -1) {
            da[1] = {
              value: ds[i],
              format: df[i]
            };
          }

          if (df[i].indexOf(D) !== -1) {
            da[2] = {
              value: ds[i],
              format: df[i]
            };
          }
        }

        return da;
      };

      UtilService.prototype.getMonthNumberByMonthName = function (df, monthLabels) {
        if (df.value) {
          for (var key = 1; key <= 12; key++) {
            if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
              return key;
            }
          }
        }

        return -1;
      };

      UtilService.prototype.getNumberByValue = function (df) {
        if (!/^\d+$/.test(df.value)) {
          return -1;
        }

        var nbr = Number(df.value);

        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
          nbr = -1;
        } else if (df.format.length === 2 && df.value.length > 2) {
          nbr = -1;
        }

        return nbr;
      };

      UtilService.prototype.getDateFormatDelimeters = function (dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
      };

      UtilService.prototype.parseDefaultMonth = function (monthString) {
        var month = {
          monthTxt: "",
          monthNbr: 0,
          year: 0
        };

        if (monthString !== "") {
          var split = monthString.split(monthString.match(/[^0-9]/)[0]);
          month.monthNbr = split[0].length === 2 ? parseInt(split[0]) : parseInt(split[1]);
          month.year = split[0].length === 2 ? parseInt(split[1]) : parseInt(split[0]);
        }

        return month;
      };

      UtilService.prototype.formatDate = function (date, dateFormat, monthLabels) {
        var formatted = dateFormat.replace(YYYY, String(date.year));

        if (dateFormat.indexOf(MMM) !== -1) {
          formatted = formatted.replace(MMM, monthLabels[date.month]);
        } else if (dateFormat.indexOf(MM) !== -1) {
          formatted = formatted.replace(MM, this.preZero(date.month));
        } else {
          formatted = formatted.replace(M, String(date.month));
        }

        if (dateFormat.indexOf(DD) !== -1) {
          formatted = formatted.replace(DD, this.preZero(date.day));
        } else {
          formatted = formatted.replace(D, String(date.day));
        }

        return formatted;
      };

      UtilService.prototype.preZero = function (val) {
        return val < 10 ? "0" + val : String(val);
      };

      UtilService.prototype.isDisabledDay = function (date, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, enableDays) {
        for (var _i = 0, enableDays_1 = enableDays; _i < enableDays_1.length; _i++) {
          var e = enableDays_1[_i];

          if (e.year === date.year && e.month === date.month && e.day === date.day) {
            return false;
          }
        }

        var dn = this.getDayNumber(date);

        if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
          return true;
        }

        var dateMs = this.getTimeInMilliseconds(date);

        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
          return true;
        }

        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
          return true;
        }

        if (disableWeekends) {
          if (dn === 0 || dn === 6) {
            return true;
          }
        }

        if (disableWeekDays.length > 0) {
          for (var _a = 0, disableWeekDays_1 = disableWeekDays; _a < disableWeekDays_1.length; _a++) {
            var wd = disableWeekDays_1[_a];

            if (dn === this.getWeekdayIndex(wd)) {
              return true;
            }
          }
        }

        for (var _b = 0, disableDays_1 = disableDays; _b < disableDays_1.length; _b++) {
          var d = disableDays_1[_b];

          if (d.year === date.year && d.month === date.month && d.day === date.day) {
            return true;
          }
        }

        for (var _c = 0, disableDateRanges_1 = disableDateRanges; _c < disableDateRanges_1.length; _c++) {
          var d = disableDateRanges_1[_c];

          if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end) && dateMs >= this.getTimeInMilliseconds(d.begin) && dateMs <= this.getTimeInMilliseconds(d.end)) {
            return true;
          }
        }

        return false;
      };

      UtilService.prototype.isMarkedDate = function (date, markedDates, markWeekends) {
        for (var _i = 0, markedDates_1 = markedDates; _i < markedDates_1.length; _i++) {
          var md = markedDates_1[_i];

          for (var _a = 0, _b = md.dates; _a < _b.length; _a++) {
            var d = _b[_a];

            if (d.year === date.year && d.month === date.month && d.day === date.day) {
              return {
                marked: true,
                color: md.color
              };
            }
          }
        }

        if (markWeekends && markWeekends.marked) {
          var dayNbr = this.getDayNumber(date);

          if (dayNbr === 0 || dayNbr === 6) {
            return {
              marked: true,
              color: markWeekends.color
            };
          }
        }

        return {
          marked: false,
          color: ""
        };
      };

      UtilService.prototype.isHighlightedDate = function (date, sunHighlight, satHighlight, highlightDates) {
        var dayNbr = this.getDayNumber(date);

        if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
          return true;
        }

        for (var _i = 0, highlightDates_1 = highlightDates; _i < highlightDates_1.length; _i++) {
          var d = highlightDates_1[_i];

          if (d.year === date.year && d.month === date.month && d.day === date.day) {
            return true;
          }
        }

        return false;
      };

      UtilService.prototype.getWeekNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000 / 7) + 1;
      };

      UtilService.prototype.isMonthDisabledByDisableUntil = function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
      };

      UtilService.prototype.isMonthDisabledByDisableSince = function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
      };

      UtilService.prototype.isInitializedDate = function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
      };

      UtilService.prototype.isSameDate = function (d1, d2) {
        return d1.year === d2.year && d1.month === d2.month && d1.day === d2.day;
      };

      UtilService.prototype.getTimeInMilliseconds = function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
      };

      UtilService.prototype.getDayNumber = function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getDay();
      };

      UtilService.prototype.getWeekDays = function () {
        return this.weekDays;
      };

      UtilService.prototype.getWeekdayIndex = function (wd) {
        return this.weekDays.indexOf(wd);
      };

      UtilService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];
      UtilService.ctorParameters = [];
      return UtilService;
    }(); //# sourceMappingURL=my-date-picker.util.service.js.map

    /***/

  },

  /***/
  "./node_modules/mydatepicker/index.js":
  /*!********************************************!*\
    !*** ./node_modules/mydatepicker/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMydatepickerIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dist_my_date_picker_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dist/my-date-picker.module */
    "./node_modules/mydatepicker/dist/my-date-picker.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyDatePickerModule", function () {
      return _dist_my_date_picker_module__WEBPACK_IMPORTED_MODULE_0__["MyDatePickerModule"];
    });
    /* harmony import */


    var _dist_my_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dist/my-date-picker.component */
    "./node_modules/mydatepicker/dist/my-date-picker.component.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MYDP_VALUE_ACCESSOR", function () {
      return _dist_my_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["MYDP_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyDatePicker", function () {
      return _dist_my_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["MyDatePicker"];
    });
    /* harmony import */


    var _dist_interfaces_my_date_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dist/interfaces/my-date.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-date.interface.js");
    /* harmony import */


    var _dist_interfaces_my_date_interface__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_date_interface__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_date_interface__WEBPACK_IMPORTED_MODULE_2__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_date_interface__WEBPACK_IMPORTED_MODULE_2__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_date_model_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dist/interfaces/my-date-model.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-date-model.interface.js");
    /* harmony import */


    var _dist_interfaces_my_date_model_interface__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_date_model_interface__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_date_model_interface__WEBPACK_IMPORTED_MODULE_3__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_date_model_interface__WEBPACK_IMPORTED_MODULE_3__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_input_field_changed_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dist/interfaces/my-input-field-changed.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-input-field-changed.interface.js");
    /* harmony import */


    var _dist_interfaces_my_input_field_changed_interface__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_input_field_changed_interface__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_input_field_changed_interface__WEBPACK_IMPORTED_MODULE_4__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_input_field_changed_interface__WEBPACK_IMPORTED_MODULE_4__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_calendar_view_changed_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dist/interfaces/my-calendar-view-changed.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-calendar-view-changed.interface.js");
    /* harmony import */


    var _dist_interfaces_my_calendar_view_changed_interface__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_calendar_view_changed_interface__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_calendar_view_changed_interface__WEBPACK_IMPORTED_MODULE_5__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_calendar_view_changed_interface__WEBPACK_IMPORTED_MODULE_5__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_input_focus_blur_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dist/interfaces/my-input-focus-blur.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-input-focus-blur.interface.js");
    /* harmony import */


    var _dist_interfaces_my_input_focus_blur_interface__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_input_focus_blur_interface__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_input_focus_blur_interface__WEBPACK_IMPORTED_MODULE_6__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_input_focus_blur_interface__WEBPACK_IMPORTED_MODULE_6__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_date_range_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dist/interfaces/my-date-range.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-date-range.interface.js");
    /* harmony import */


    var _dist_interfaces_my_date_range_interface__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_date_range_interface__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_date_range_interface__WEBPACK_IMPORTED_MODULE_7__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_date_range_interface__WEBPACK_IMPORTED_MODULE_7__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_day_labels_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dist/interfaces/my-day-labels.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-day-labels.interface.js");
    /* harmony import */


    var _dist_interfaces_my_day_labels_interface__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_day_labels_interface__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_day_labels_interface__WEBPACK_IMPORTED_MODULE_8__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_day_labels_interface__WEBPACK_IMPORTED_MODULE_8__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_month_labels_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dist/interfaces/my-month-labels.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-month-labels.interface.js");
    /* harmony import */


    var _dist_interfaces_my_month_labels_interface__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_month_labels_interface__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_month_labels_interface__WEBPACK_IMPORTED_MODULE_9__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_month_labels_interface__WEBPACK_IMPORTED_MODULE_9__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_options_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dist/interfaces/my-options.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-options.interface.js");
    /* harmony import */


    var _dist_interfaces_my_options_interface__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_options_interface__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_options_interface__WEBPACK_IMPORTED_MODULE_10__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_options_interface__WEBPACK_IMPORTED_MODULE_10__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_weekday_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dist/interfaces/my-weekday.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-weekday.interface.js");
    /* harmony import */


    var _dist_interfaces_my_weekday_interface__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_weekday_interface__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_weekday_interface__WEBPACK_IMPORTED_MODULE_11__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_weekday_interface__WEBPACK_IMPORTED_MODULE_11__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_marked_date_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dist/interfaces/my-marked-date.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-marked-date.interface.js");
    /* harmony import */


    var _dist_interfaces_my_marked_date_interface__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_marked_date_interface__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_marked_date_interface__WEBPACK_IMPORTED_MODULE_12__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_marked_date_interface__WEBPACK_IMPORTED_MODULE_12__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_marked_dates_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dist/interfaces/my-marked-dates.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-marked-dates.interface.js");
    /* harmony import */


    var _dist_interfaces_my_marked_dates_interface__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_marked_dates_interface__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_marked_dates_interface__WEBPACK_IMPORTED_MODULE_13__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_marked_dates_interface__WEBPACK_IMPORTED_MODULE_13__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_default_month_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./dist/interfaces/my-default-month.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-default-month.interface.js");
    /* harmony import */


    var _dist_interfaces_my_default_month_interface__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_default_month_interface__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_default_month_interface__WEBPACK_IMPORTED_MODULE_14__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_default_month_interface__WEBPACK_IMPORTED_MODULE_14__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _dist_interfaces_my_selector_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dist/interfaces/my-selector.interface */
    "./node_modules/mydatepicker/dist/interfaces/my-selector.interface.js");
    /* harmony import */


    var _dist_interfaces_my_selector_interface__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(_dist_interfaces_my_selector_interface__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _dist_interfaces_my_selector_interface__WEBPACK_IMPORTED_MODULE_15__) {
      if (["MyDatePickerModule", "MYDP_VALUE_ACCESSOR", "MyDatePicker", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _dist_interfaces_my_selector_interface__WEBPACK_IMPORTED_MODULE_15__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/add-info-modal/add-info-modal.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/add-info-modal/add-info-modal.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetAddInfoModalAddInfoModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>add-info-modal works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/mes-partenaires/mes-partenaires.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/mes-partenaires/mes-partenaires.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetMesPartenairesMesPartenairesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n            <h2> # Bilan financier du projet :  {{ projet.nom }}  <a class=\"button pull-right\" routerLink='/projets/{{slug}}'><i class=\"fa fa-list\"></i> << Retour </a></h2>\n        </div>\n  \n    <div>\n            <div class=\"jumbotron\"> \n                    <table class=\"col-md-12\">\n                            <tbody>\n                                    \n                                <tr>\n                                    <td>\n                                        <div class=\"col-md-12\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-8\">\n                                                  <p>Nom du Projet : </p>\n                                              </div>  \n                                             \n                                              <div class=\"col-md-4\">\n                                                  <strong>{{ projet.nom }}</strong>\n                                              </div>\n                                            </div>\n                                        </div>\n                                      </td>\n                              </tr>\n\n\n                    \n                                <tr>\n                                    <td>\n                                        <div class=\"col-md-12\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-8\">\n                                                  <p>Numero du Projet : </p>\n                                              </div>  \n                                             \n                                              <div class=\"col-md-4\">\n                                                  <strong>{{ projet.numeroProjet }}</strong>\n                                              </div>\n                                            </div>\n                                        </div>\n                                      </td>\n                              </tr>\n\n                              \n\n                              <tr>\n                                <td>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"row\">\n                                          <div class=\"col-md-8\">\n                                              <p>Budget Prévisionnel :  </p>\n                                          </div>  \n                                         \n                                          <div class=\"col-md-4\">\n                                              <strong>{{projet.budgetPrevisionel}}</strong>\n                                          </div>\n                                        </div>\n                                    </div>\n                                  </td>\n                          </tr>\n\n\n    \n\n                          <tr>\n                            <td>\n                                <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-8\">\n                                          <p>Buget Réel : </p>\n                                      </div>  \n                                     \n                                      <div class=\"col-md-4\">\n                                          <strong>{{projet.budgetReel}}</strong>\n                                      </div>\n                                    </div>\n                                </div>\n                              </td>\n                      </tr>\n\n\n                      <tr>\n                        <td>\n                            <div class=\"col-md-12\">\n                                <div class=\"row\">\n                                  <div class=\"col-md-8\">\n                                      <p>Contrepartie : </p>\n                                  </div>  \n                                 \n                                  <div class=\"col-md-4\">\n                                      <strong></strong>\n                                  </div>\n                                </div>\n                            </div>\n                          </td>\n                  </tr>\n\n\n                  \n\n                  <br><br><br>\n\n\n\n                     <div *ngIf=\"projet.partenaires\">\n\n                      <div class=\"\">\n                       \n                       \n                       \n                        <table class=\"basic-table booking-table table-responsive\">\n                            <thead>\n                                    <tr>\n                                        <th>#</th>\n                                        <th>Partenaire</th>\n                                        <th>Type de Financement</th>\n                                        <th>Montant Encaissé</th>\n                                        <th>Montant restant</th>\n                                        <th>Device</th>\n                                        <th>Date de Signature</th>\n                                        <th>Action</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                      <tr *ngFor=\"let item of projet.partenaires\">\n                                         <td>{{ item.id }}</td>\n                                         <td>{{item.partenaires[0].nom}}</td>\n                                         <td>{{item.typeFinancement.libelle}}</td>\n                                         <td>{{item.montantTotal}}</td>\n                                         <td>{{item.montantEncaisse}}</td>\n                                         <td>{{item.device}}</td>\n                                         <td>{{item.dateSignature}}</td>\n                                         <td  class=\"btn-group\">\n                                            <button  (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i class=\"icon-feather-eye\"></i></button>&nbsp;\n                                           \n                                        </td>\n                                      </tr>\n                                    </tbody>\n                    </table>\n\n\n                       \n                       \n                       \n                        \n                        \n\n                        \n                        \n                        \n                              \n                        \n                        \n                        \n                      </div>\n                                                                                                 \n                                    \n                        \n                     </div>\n                      \n            \n                                 \n                                        <br>\n                                    \n                            </tbody>\n                        </table>\n                <div >\n                   \n                </div>\n            </div>\n        </div>\n    \n</div>\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetMesSoustraitrantsMesSoustraitrantsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mes-soustraitrants works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/my-projet-create/my-projet-create.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/my-projet-create/my-projet-create.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetMyProjetCreateMyProjetCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"headline\">\n    <h4><strong class=\"text-danger\"> Les champs marqués par un (*)\n        sont obligatoires !\n    </strong> <a class=\"button pull-right\" routerLink='/projets/my-project'>\n        <i class=\"icon-feather-list\"></i> Liste </a>\n    </h4>\n</div>\n\n<div class=\"dashboard-box margin-top-0\">\n    <div class=\"tabs\">\n        <div class=\"tabs-header\">\n            <ul>\n                <li class=\"active\"><a data-tab-id=\"1\" href=\"#tab-1\">Project</a></li>\n                <li><a data-tab-id=\"3\" href=\"#tab-3\">Caractéristique techniques</a></li>\n                <li><a data-tab-id=\"4\" href=\"#tab-4\">Résumé</a></li>\n\n            </ul>\n            <div class=\"tab-hover\" style=\"left: 0px; width: 330px;\"></div>\n            <nav class=\"tabs-nav\">\n                <span class=\"tab-prev\"><i class=\"icon-material-outline-keyboard-arrow-left\"></i></span>\n                <span class=\"tab-next\"><i class=\"icon-material-outline-keyboard-arrow-right\"></i></span>\n            </nav>\n        </div>\n        <!-- Tab Content -->\n        <div class=\"tabs-content\" style=\"height: 293px;\">\n\n            <div class=\"content with-padding padding-bottom-10\">\n                <form (ngSubmit)=\"submit()\" [formGroup]=\"fGroup\" enctype=\"multipart/form-data\">\n\n                    <div class=\"tab active\" data-tab-id=\"1\">\n                        <div class=\"add-listing-section\">\n\n                            <!-- Headline -->\n                            <div class=\"add-listing-headline\">\n                                <h3><i class=\"sl sl-icon-doc\"></i> Informations du Projet </h3>\n                            </div>\n\n                            <!-- Title -->\n                            <fieldset>\n                                <legend><b> Projet </b></legend>\n                                <div class=\"row submit-field\">\n                                    <div class=\"col-xl-12\">\n                                        <label>Nom <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input class=\"search-field\" formControlName=\"nom\" type=\"text\">\n\n                                        <div *ngIf=\"fGroup.controls['nom'].invalid && (fGroup.controls['nom'].dirty || fGroup.controls['nom'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['nom'].errors.required\">\n                                                <p class=\"text-danger\">Entrez le nom du projet !</p>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Numero du projet <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input class=\"search-field\" formControlName=\"numeroProjet\" type=\"text\">\n\n                                        <div *ngIf=\"fGroup.controls['numeroProjet'].invalid && (fGroup.controls['numeroProjet'].dirty || fGroup.controls['numeroProjet'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['numeroProjet'].errors.required\">\n                                                <p class=\"text-danger\">Entrez le numero du projet !</p>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n                                </div>\n\n\n                            </fieldset>\n\n                            <fieldset>\n                                <legend> Delai</legend>\n                                <div class=\"row submit-field\">\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Date De Debut <i\n                                                class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n\n                                        <input formControlName=\"dateDebut\" type=\"date\"/>\n\n                                        <div *ngIf=\"fGroup.controls['dateDebut'].invalid && (fGroup.controls['dateDebut'].dirty || fGroup.controls['dateDebut'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['dateDebut'].errors.required\">\n                                                <p class=\"text-danger\">Entrez la href=\"#\" date de debut du projet !</p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Date butoire <i\n                                                class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input formControlName=\"dateButoire\" type=\"date\"\n                                        />\n\n                                        <div *ngIf=\"fGroup.controls['dateButoire'].invalid && (fGroup.controls['dateButoire'].dirty || fGroup.controls['dateButoire'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['dateButoire'].errors.required\">\n                                                <p class=\"text-danger\">Entrez la href=\"#\" date butoire du projet !</p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend><b>Budget</b></legend>\n                                <div class=\"row submit-field\">\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Budget Prévisionnel <i\n                                                class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input class=\"search-field\" formControlName=\"budgetPrevisionel\" type=\"text\">\n\n\n                                        <div *ngIf=\"fGroup.controls['budgetPrevisionel'].invalid && (fGroup.controls['budgetPrevisionel'].dirty || fGroup.controls['budgetPrevisionel'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['budgetPrevisionel'].errors.required\">\n                                                <p class=\"text-danger\">Précisez le budget previsionel du projet !</p>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend><b>Detail</b></legend>\n\n                                <div class=\"row submit-field\">\n\n                                    <!-- City -->\n                                    <div class=\"col-xl-12\">\n                                        <label>Resposable du Projet</label>\n                                        <select class=\"chosen-select-no-single\" formControlName=\"employeResponsable\">\n                                            <option disabled>Selectioner un employé</option>\n                                            <option *ngFor=\"let item of employes\" value=\"{{item.slug}}\"> {{ item.nom }}\n                                                &nbsp; {{ item.prenom }} </option>\n                                        </select>\n\n                                        <div *ngIf=\"fGroup.controls['employeResponsable'].invalid && (fGroup.controls['employeResponsable'].dirty || fGroup.controls['employeResponsable'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['employeResponsable'].errors.required\">\n                                                <p class=\"text-danger\">Choissisez l'employé Responsble de suivi du\n                                                    projet\n                                                    !</p>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"row submit-field\">\n                                    <div class=\"col-xl-12\">\n                                        <label>Objectifs et contenu du projet </label>\n                                        <textarea class=\"WYSIWYG\" formControlName=\"description\"\n                                                  spellcheck=\"true\"></textarea>\n\n                                        <div *ngIf=\"fGroup.controls['description'].invalid && (fGroup.controls['description'].dirty || fGroup.controls['description'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['description'].errors.required\">\n                                                <p class=\"text-danger\">Entrez une description !</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </fieldset>\n\n\n                            <fieldset>\n                                <legend>Maitre d'oeuvres</legend>\n                                <label>Choississez les entreprises qui interviennent dans le projet</label>\n                                <select (change)=\"addSoumissionaire($event.target.value)\" formControlName=\"soumissionaire\"\n                                        multiple=\"multiple\">\n                                    <option *ngFor=\"let item of soumissionaires\"\n                                            value=\"{{item.nom}}\"> {{ item.nom }}</option>\n                                </select>\n\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Secteur du projet</legend>\n                                <label>Choississez le secteur du projet</label>\n                                <select formControlName=\"secteur\">\n                                    <option *ngFor=\"let item of secteurs\" value=\"{{item.slug}}\"> {{ item.nom }}</option>\n                                </select>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Controlleur</legend>\n                                <label>Choississez le controlleur du projet</label>\n                                <select formControlName=\"controlleur\">\n                                    <option *ngFor=\"let item of controlleurs\"\n                                            value=\"{{item.slug}}\"> {{ item.nom }}</option>\n                                </select>\n                            </fieldset>\n\n\n                            <br>\n                            <br>\n\n\n                        </div>\n\n\n                    </div>\n\n\n                    <div class=\"tab\" data-tab-id=\"3\">\n\n                        <div class=\"add-listing-section\">\n\n                            <!-- Headline -->\n                            <div class=\"add-listing-headline\">\n                                <h3><i class=\"sl sl-icon-doc\"></i> Caracteriques techniques </h3>\n                            </div>\n\n\n                            <div class=\"row \">\n\n\n                                <div class=\"col-xl-5\">\n                                    <label>Libéllé <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input class=\"search-field\" formControlName=\"libelle\" type=\"text\">\n                                </div>\n\n                                <div class=\"col-xl-2\">\n                                    <label>Nature <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <select class=\"chosen-select-no-single\" formControlName=\"nature\">\n                                        <option disabled>Selectioner une valeur</option>\n                                        <option *ngFor=\"let item of natures\" value=\"{{item}}\"> {{ item }}\n                                    </select>\n                                </div>\n\n                                <div *ngIf=\"isDate(fGroup.value.nature);\" class=\"col-xl-5\">\n                                    <label>Valeur <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input class=\"search-field\" formControlName=\"valeur\" type=\"date\">\n                                </div>\n                                <div *ngIf=\"!isDate(fGroup.value.nature);\" class=\"col-xl-5\">\n                                    <label>Valeur <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input class=\"search-field\" formControlName=\"valeur\" type=\"text\">\n                                </div>\n                            </div>\n\n                            <br>\n                            <button (click)=\"addCaracTechnique(fGroup.value.libelle,fGroup.value.valeur,fGroup.value.nature)\"\n                                    class=\"button\"\n                                    type=\"button\">Ajouter\n                            </button>\n                            <br>\n\n                            <div class=\"FixedHeightContainer scroll\">\n\n                                <table class=\"col-xl-12\">\n\n                                    <tbody class=\"table-hover\">\n                                    <div *ngFor=\"let item of caracteristiqueTechniques\" class=\"col-xl-12\">\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Libllé</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.libelle }}</strong></td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Nature</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.nature }}</strong></td>\n                                        </tr>\n\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Valeur</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.valeur }}</strong></td>\n                                        </tr>\n                                        <br>\n                                        <br>\n                                    </div>\n\n\n                                </table>\n\n\n                                <br>\n                            </div>\n                            <br>\n                            <br>\n                            <br>\n\n                        </div>\n                    </div>\n\n                    <div class=\"tab\" data-tab-id=\"4\">\n                        <h3>Résumé des Informations saisies</h3>\n\n                        <table class=\"col-xl-12\">\n\n                            <tbody class=\"table-hover\">\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Nom du Projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.nom }}</strong></td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Numero du Projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.numeroProjet }}</strong></td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Secteur du Projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.secteur }}</strong></td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Controlleur du Projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.controlleur }}</strong></td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Date De Debut</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.dateDebut }}</strong></td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Date butoire</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.dateButoire }}</strong>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Budget Prévisionnel</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.budgetPrevisionel }}</strong>\n                                </td>\n                            <tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Responsable du Projet</td>\n                                <td class=\"text-left col-xl-4\">\n                                    <strong>{{ fGroup.value.employeResponsable.nom }}</strong>\n                                </td>\n                            <tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Objet du projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.description }}</strong></td>\n                            </tr>\n\n\n                            <fieldset *ngIf=\"fGroup.value.partenaires\">\n                                <legend>Partenaires</legend>\n                                <div *ngFor=\"let item of fGroup.value.partenaires\" class=\"col-xl-12\">\n                                    <p class=\"text-success\"> {{item}}</p>\n                                </div>\n                            </fieldset>\n\n                            <br>\n                            <br>\n                            <fieldset *ngIf=\"fGroup.value.maitreoevrage\">\n                                <legend>Maitre d'oeuvrages</legend>\n                                <div *ngFor=\"let item of fGroup.value.maitreoevrage\" class=\"col-xl-12\">\n                                    <p class=\"text-success\"> {{item}}</p>\n                                </div>\n                            </fieldset>\n                            <br>\n                            <br>\n                            <fieldset *ngIf=\"fGroup.value.soumissionaire\">\n                                <legend>Soumissionaires</legend>\n                                <div *ngFor=\"let item of fGroup.value.soumissionaire\" class=\"col-xl-12\">\n                                    <p class=\"text-success\"> {{item}}</p>\n                                </div>\n                            </fieldset>\n\n\n                            <br>\n                            <br>\n\n                            <div class=\"FixedHeightContainer scroll\">\n                                <legend>Cataracteristiques techniques</legend>\n\n                                <table class=\"col-xl-12\">\n\n                                    <tbody class=\"table-hover\">\n                                    <div *ngFor=\"let item of caracteristiqueTechniques\" class=\"col-xl-12\">\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Libllé</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.libelle }}</strong></td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Nature</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.nature }}</strong></td>\n                                        </tr>\n\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Valeur</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.valeur }}</strong></td>\n                                        </tr>\n                                        <br>\n                                        <br>\n                                    </div>\n\n\n                                </table>\n\n\n                                <br>\n                            </div>\n\n                            <br>\n                            <br>\n\n\n                            </tbody>\n                            <tfoot>\n                            <br>\n\n                            <button class=\"button\" style=\"background: #259972;color: #fff\" type=\"submit\">Enregistrer <i\n                                    class=\"fa fa-save\"></i></button>\n                            </tfoot>\n                        </table>\n                    </div>\n\n\n                </form>\n            </div>\n        </div>\n\n\n    </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/my-projet/my-projet.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/my-projet/my-projet.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetMyProjetMyProjetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"dashboard-list-box\">\n        <div class=\"headline\"><i class=\"fa fa-list\"></i> Liste <a class=\"button pull-right\"\n                                                                  routerLink='/projets/my-project-create'><i\n                class=\"fa fa-plus\"></i> Ajouter </a></div>\n        <div class=\"table-responsive\">\n            <table class=\"basic-table booking-table\">\n                <thead>\n                <tr>\n                    <th width=\"10%\">#</th>\n                    <th width=\"20%\">Nom du Projet</th>\n                    <th width=\"5%\">Numéro</th>\n                    <th width=\"15%\">Responsable du projet</th>\n                    <th width=\"10%\">Budget Prévisionel</th>\n                    <th width=\"10%\">Budget Réel</th>\n                    <th width=\"10%\">Date de début</th>\n                    <th width=\"10%\">Date de fin</th>\n                    <th width=\"10%\">Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of projets\">\n                    <td>{{ item.id }}</td>\n                    <td>{{ item.nom }}</td>\n                    <td>{{ item.numeroProjet }}</td>\n                    <td>{{ item.responsable.nom }} {{ item.responsable.prenom }}</td>\n                    <td>{{ item.budgetPrevisionel }}</td>\n                    <td>{{ item.budgetReel }}</td>\n                    <td>{{item.dateDebut }}</td>\n                    <td>{{item.dateFin }}</td>\n\n\n                    <td class=\"btn-group\">\n                        <button (click)=\"onDetail(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                class=\"icon-feather-eye\"></i></button>&nbsp;\n                        <button (click)=\"edit(item.slug)\" class=\"btn btn-xs btn-warning\"><i\n                                class=\"icon-line-awesome-edit\"></i></button>&nbsp;\n                        <button (click)=\"onDelete(item.slug)\" class=\"btn btn-xs btn-danger\"><i\n                                class=\"icon-feather-trash\"></i></button>\n                    </td>\n\n                </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n    <div class=\"pagination-container\">\n        <nav class=\"pagination\">\n            <ul>\n\n                <li *ngIf=\"last\"><a (click)=\"previewPage()\"><i class=\"sl sl-icon-arrow-left\"></i></a></li>\n                <li><a>{{ pageNumber + 1}}</a></li>\n                <li *ngIf=\"numberOfElements < totalElements && !last\"><a (click)=\"nextPage()\">{{ pageNumber + 2}}</a>\n                </li>\n                <li *ngIf=\"!last\"><a (click)=\"nextPage()\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n            </ul>\n        </nav>\n        <button class=\"button preview pull-left\">{{numberOfElements}}/ {{totalElements}} Financements</button>\n        <button class=\"button  pull-right\">Imprimer</button>\n    </div>\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetBilanFinanceDetailProjetBilanFinanceDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2> # Bilan financier du projet :    <a class=\"button pull-right\"\n                                                                 routerLink='/projets/{{slug}}'><i\n                class=\"fa fa-list\"></i> << Retour </a></h2>\n    </div>\n\n    <div>\n        <div class=\"jumbotron\">\n            <table class=\"col-md-12\">\n                <tbody>\n\n              \n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Partenaire : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ financement.partenaires[0].nom}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Type de Partenaire : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ financement.partenaires[0].typePartenaire.libelle}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Contrepartie : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong></strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Montant Encaissé : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ financement.montantEncaisse}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Montant Restant : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ financement.montantRestant}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n             \n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Date de Signature : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ financement.dateSignature}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n\n                <br><br><br>\n\n\n                <div *ngIf=\"financement.encaissements\">\n\n                    <div class=\"\">\n\n\n                        <table class=\"basic-table booking-table table-responsive\">\n                            <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Montant</th>\n                                <th>Banque</th>\n                                <th>Date de Signature</th>\n                                <th>Action</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let item of financement.encaissements\">\n                                <td>{{ item.id }}</td>\n                                <td>{{item.montant}}</td>\n                                <td>{{item.banque}}</td>\n                                <td>{{item.dateSignature}}</td>\n                                <td class=\"btn-group\">\n                                    <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                            class=\"icon-feather-eye\"></i></button>&nbsp;\n\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n\n                    </div>\n\n\n                </div>\n\n\n                <br>\n\n                </tbody>\n            </table>\n            <div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetBilanFinancierProjetBilanFinancierComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2> # Bilan financier du projet :  {{ projet.nom }}  <a class=\"button pull-right\"\n                                                                 routerLink='/projets/{{slug}}'><i\n                class=\"fa fa-list\"></i> << Retour </a></h2>\n    </div>\n\n    <div>\n        <div class=\"jumbotron\">\n            <table class=\"col-md-12\">\n                <tbody>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Nom du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Numero du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.numeroProjet }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Budget Prévisionnel : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.budgetPrevisionel}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Buget Réel : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.budgetReel}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Contrepartie : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong></strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <br><br><br>\n\n\n                <div *ngIf=\"projet.financements\">\n\n                    <div class=\"\">\n\n\n                        <table class=\"basic-table booking-table table-responsive\">\n                            <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Partenaire</th>\n                                <th>Type de Financement</th>\n                                <th>Montant Encaissé</th>\n                                <th>Montant restant</th>\n                                <th>Device</th>\n                                <th>Date de Signature</th>\n                                <th>Action</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let item of projet.financements\">\n                                <td>{{ item.id }}</td>\n                                <td>{{item.partenaires[0].nom}}</td>\n                                <td>{{item.typeFinancement.libelle}}</td>\n                                <td>{{item.montantTotal}}</td>\n                                <td>{{item.montantEncaisse}}</td>\n                                <td>{{item.device}}</td>\n                                <td>{{item.dateSignature}}</td>\n                                <td class=\"btn-group\">\n                                    <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                            class=\"icon-feather-eye\"></i></button>&nbsp;\n\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n\n                    </div>\n\n\n                </div>\n\n\n                <br>\n\n                </tbody>\n            </table>\n            <div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetBilanRealisationProjetBilanRealisationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>projet-bilan-realisation works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetCreateMaitredoeuvreProjetCreateMaitredoeuvreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-box margin-top-0 \">\n    <div class=\"headline\">\n        <p class=\"text-danger\">Les champs marqués par un ( <i class=\"text-danger glyphicon glyphicon-asterisk\"></i>)\n            sont obligatoires !</p>\n\n        <div class=\"dashboard-headline\">\n            <h4 class=\"wither\"><i class=\"sl sl-icon-doc\"></i> <strong class=\"text-success\">Enregistrement partenaire du\n                projet : {{projet.nom}}</strong> <a class=\"button pull-right\" routerLink='/taches/list'><i\n                    class=\"fa fa-list\"></i> Liste </a></h4>\n\n        </div>\n    </div>\n    <!-- Nav tabs -->\n    <div>\n\n        <!-- Tab panes -->\n        <form (ngSubmit)=\"create()\" [formGroup]=\"fGroup\" enctype=\"multipart/form-data\">\n            <div class=\"content with-padding padding-bottom-10\">\n                <div class=\"jumbotron\">\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Nom <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                            <input class=\"search-field\" formControlName=\"nom\" placeholder=\"\" type=\"text\">\n\n                            <div *ngIf=\"fGroup.controls['nom'].invalid && (fGroup.controls['nom'].dirty || fGroup.controls['nom'].touched)\">\n                                <div *ngIf=\"fGroup.controls['nom'].errors.required\">\n                                    <p class=\"text-danger\">Entrez le nom de l'entreprise !</p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"col-md-12\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-6\">\n                                <label>N° ID Fiscal <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                <input\n                                        formControlName=\"numeroIdFiscal\"\n                                />\n\n                                <div *ngIf=\"fGroup.controls['numeroIdFiscal'].invalid && (fGroup.controls['numeroIdFiscal'].dirty || fGroup.controls['numeroIdFiscal'].touched)\">\n                                    <div *ngIf=\"fGroup.controls['numeroIdFiscal'].errors.required\">\n                                        <p class=\"text-danger\">Entrez le numero d'identification fiscale de l'entreprise\n                                            !</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <label>Raison Social <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                <input\n                                        formControlName=\"raisonSociale\"\n                                />\n                                <div *ngIf=\"fGroup.controls['raisonSociale'].invalid && (fGroup.controls['raisonSociale'].dirty || fGroup.controls['raisonSociale'].touched)\">\n                                    <div *ngIf=\"fGroup.controls['raisonSociale'].errors.required\">\n                                        <p class=\"text-danger\">Entrez la raison sociale de l'entreprise !</p>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Nom et Prénom du Responsable <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                            <input class=\"search-field\" formControlName=\"responsable\" placeholder=\"\" type=\"text\">\n                            <div *ngIf=\"fGroup.controls['responsable'].invalid && (fGroup.controls['responsable'].dirty || fGroup.controls['responsable'].touched)\">\n                                <div *ngIf=\"fGroup.controls['responsable'].errors.required\">\n                                    <p class=\"text-danger\">Entrez le Nom et le Prénom du Responsable de l'entreprise\n                                        !</p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <fieldset>\n                        <legend>Informations Banquaires</legend>\n\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6\">\n                                    <label>Nom de la Banque <i\n                                            class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input\n                                            formControlName=\"nomBanque\"\n                                    />\n\n                                    <div *ngIf=\"fGroup.controls['nomBanque'].invalid && (fGroup.controls['nomBanque'].dirty || fGroup.controls['nomBanque'].touched)\">\n                                        <div *ngIf=\"fGroup.controls['nomBanque'].errors.required\">\n                                            <p class=\"text-danger\">Entrez le Nom de la Banque de l'entreprise !</p>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>N° de Compte <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input\n                                            formControlName=\"numeroCompte\"\n                                    />\n\n                                    <div *ngIf=\"fGroup.controls['numeroCompte'].invalid && (fGroup.controls['numeroCompte'].dirty || fGroup.controls['numeroCompte'].touched)\">\n                                        <div *ngIf=\"fGroup.controls['numeroCompte'].errors.required\">\n                                            <p class=\"text-danger\">Entrez le N° de Compte de l'entreprise !</p>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-12\">\n                                    <label>Code Swift <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input\n                                            formControlName=\"codeSwift\"\n                                    />\n                                    <div *ngIf=\"fGroup.controls['codeSwift'].invalid && (fGroup.controls['codeSwift'].dirty || fGroup.controls['codeSwift'].touched)\">\n                                        <div *ngIf=\"fGroup.controls['codeSwift'].errors.required\">\n                                            <p class=\"text-danger\">Entrez le Code Swift de l'entreprise !</p>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6\">\n                                    <label>Adresse de la Banque</label>\n                                    <textarea class=\"WYSIWYG\" cols=\"40\" formControlName=\"adresse\" id=\"summary\" name=\"summary\"\n                                              rows=\"3\" spellcheck=\"true\"> </textarea>\n\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Information sur la banque</label>\n                                    <textarea class=\"WYSIWYG\" cols=\"40\" formControlName=\"information\" id=\"summary\" name=\"summary\"\n                                              rows=\"3\" spellcheck=\"true\"> </textarea>\n\n                                </div>\n\n\n                            </div>\n                        </div>\n\n\n                    </fieldset>\n\n\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Description de l'entreprise</label>\n                            <textarea class=\"WYSIWYG\" cols=\"40\" formControlName=\"description\" id=\"summary\" name=\"summary\" rows=\"3\"\n                                      spellcheck=\"true\"> </textarea>\n\n                        </div>\n\n\n                    </div>\n\n\n                    <div>\n\n                        <button class=\"button ripple-effect big margin-top-30\" style=\"background: #139469;color: #fff\"\n                                type=\"submit\">Enregistrer <i\n                                class=\"fa fa-save\"></i></button> &nbsp;\n\n                        <button class=\"button ripple-effect big margin-top-30\" href=\"#\"> Liste</button>\n\n\n                    </div>\n                </div>\n\n\n            </div>\n        </form>\n\n\n    </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-create/projet-create.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-create/projet-create.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetCreateProjetCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"headline\">\n    <h4><strong class=\"text-danger\"> Les champs marqués par un (*)\n        sont obligatoires !\n    </strong> <a class=\"button pull-right\" routerLink='/projets/list'>\n        <i class=\"icon-feather-list\"></i> Liste </a>\n    </h4>\n</div>\n\n<div class=\"dashboard-box margin-top-0\">\n\n\n    <div class=\"tabs\">\n        <div class=\"tabs-header\">\n            <ul>\n                <li class=\"active\"><a data-tab-id=\"1\" href=\"#tab-1\">Project</a></li>\n                <li><a data-tab-id=\"2\" href=\"#tab-2\">Partenaires</a></li>\n                <li><a data-tab-id=\"3\" href=\"#tab-3\">Caractéristique techniques</a></li>\n                <li><a data-tab-id=\"4\" href=\"#tab-4\">Résumé</a></li>\n\n            </ul>\n            <div class=\"tab-hover\" style=\"left: 0px; width: 330px;\"></div>\n            <nav class=\"tabs-nav\">\n                <span class=\"tab-prev\"><i class=\"icon-material-outline-keyboard-arrow-left\"></i></span>\n                <span class=\"tab-next\"><i class=\"icon-material-outline-keyboard-arrow-right\"></i></span>\n            </nav>\n        </div>\n        <!-- Tab Content -->\n        <div class=\"tabs-content\" style=\"height: 293px;\">\n\n            <div class=\"content with-padding padding-bottom-10\">\n                <form (ngSubmit)=\"submit()\" [formGroup]=\"fGroup\" enctype=\"multipart/form-data\">\n\n                    <div class=\"tab active\" data-tab-id=\"1\">\n                        <div class=\"add-listing-section\">\n\n                            <!-- Headline -->\n                            <div class=\"add-listing-headline\">\n                                <h3><i class=\"sl sl-icon-doc\"></i> Informations du Projet </h3>\n                            </div>\n\n                            <!-- Title -->\n                            <fieldset>\n                                <legend><b> Projet </b></legend>\n                                <div class=\"row submit-field\">\n                                    <div class=\"col-xl-12\">\n                                        <label>Nom <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input class=\"search-field\" formControlName=\"nom\" type=\"text\">\n\n                                        <div *ngIf=\"fGroup.controls['nom'].invalid && (fGroup.controls['nom'].dirty || fGroup.controls['nom'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['nom'].errors.required\">\n                                                <p class=\"text-danger\">Entrez le nom du projet !</p>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Numero du projet <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input class=\"search-field\" formControlName=\"numeroProjet\" type=\"text\">\n\n                                        <div *ngIf=\"fGroup.controls['numeroProjet'].invalid && (fGroup.controls['numeroProjet'].dirty || fGroup.controls['numeroProjet'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['numeroProjet'].errors.required\">\n                                                <p class=\"text-danger\">Entrez le numero du projet !</p>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n                                </div>\n\n\n                            </fieldset>\n\n                            <fieldset>\n                                <legend> Delai</legend>\n                                <div class=\"row submit-field\">\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Date De Debut <i\n                                                class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n\n                                        <input formControlName=\"dateDebut\" type=\"date\"/>\n\n                                        <div *ngIf=\"fGroup.controls['dateDebut'].invalid && (fGroup.controls['dateDebut'].dirty || fGroup.controls['dateDebut'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['dateDebut'].errors.required\">\n                                                <p class=\"text-danger\">Entrez la href=\"#\" date de debut du projet !</p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Date butoire <i\n                                                class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input formControlName=\"dateButoire\" type=\"date\"\n                                        />\n\n                                        <div *ngIf=\"fGroup.controls['dateButoire'].invalid && (fGroup.controls['dateButoire'].dirty || fGroup.controls['dateButoire'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['dateButoire'].errors.required\">\n                                                <p class=\"text-danger\">Entrez la href=\"#\" date butoire du projet !</p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend><b>Budget</b></legend>\n                                <div class=\"row submit-field\">\n\n                                    <div class=\"col-xl-12\">\n                                        <label>Budget Prévisionnel <i\n                                                class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                        <input class=\"search-field\" formControlName=\"budgetPrevisionel\" type=\"text\">\n\n\n                                        <div *ngIf=\"fGroup.controls['budgetPrevisionel'].invalid && (fGroup.controls['budgetPrevisionel'].dirty || fGroup.controls['budgetPrevisionel'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['budgetPrevisionel'].errors.required\">\n                                                <p class=\"text-danger\">Précisez le budget previsionel du projet !</p>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend><b>Detail</b></legend>\n\n                                <div class=\"row submit-field\">\n\n                                    <!-- City -->\n                                    <div class=\"col-xl-12\">\n                                        <label>Resposable du Projet</label>\n                                        <select class=\"chosen-select-no-single\" formControlName=\"employeResponsable\">\n                                            <option disabled>Selectioner un employé</option>\n                                            <option *ngFor=\"let item of employes\" value=\"{{item.slug}}\"> {{ item.nom }}\n                                                &nbsp; {{ item.prenom }} </option>\n                                        </select>\n\n                                        <div *ngIf=\"fGroup.controls['employeResponsable'].invalid && (fGroup.controls['employeResponsable'].dirty || fGroup.controls['employeResponsable'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['employeResponsable'].errors.required\">\n                                                <p class=\"text-danger\">Choissisez l'employé Responsble de suivi du\n                                                    projet\n                                                    !</p>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"row submit-field\">\n                                    <div class=\"col-xl-12\">\n                                        <label>Objectifs et contenu du projet </label>\n                                        <textarea class=\"WYSIWYG\" formControlName=\"description\"\n                                                  spellcheck=\"true\"></textarea>\n\n                                        <div *ngIf=\"fGroup.controls['description'].invalid && (fGroup.controls['description'].dirty || fGroup.controls['description'].touched)\">\n                                            <div *ngIf=\"fGroup.controls['description'].errors.required\">\n                                                <p class=\"text-danger\">Entrez une description !</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Maitre d'oeuvrage</legend>\n                                <label>Choississez un ou plusieurs beneficiares du projet</label>\n                                <select (change)=\"addMaitreOeuvrage($event.target.value)\" formControlName=\"maitreoevrage\"\n                                        multiple>\n                                    <option *ngFor=\"let item of maitreOeuvrages\"\n                                            value=\"{{item.nom}}\"> {{ item.nom }}</option>\n                                </select>\n\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Soumissionaires</legend>\n                                <label>Choississez les entreprises qui interviennet dans le projet</label>\n                                <select (change)=\"addSoumissionaire($event.target.value)\" formControlName=\"soumissionaire\"\n                                        multiple>\n                                    <option *ngFor=\"let item of soumissionaires\"\n                                            value=\"{{item.nom}}\"> {{ item.nom }}</option>\n                                </select>\n\n                            </fieldset>\n\n\n                        </div>\n\n\n                    </div>\n\n                    <div class=\"tab\" data-tab-id=\"2\">\n\n                        <h3>Partenaire</h3>\n\n                        <div class=\"add-listing-section\">\n\n                            <!-- Headline -->\n                            <div class=\"add-listing-headline\">\n                                <h3><i class=\"sl sl-icon-doc\"></i> Informations des Partenaires </h3>\n                            </div>\n\n\n                            <div class=\"row\">\n\n\n                                <div class=\"col-xl-12\">\n                                    <label>Partenaire</label>\n\n                                    <select (change)=\"addPartenaire($event.target.value)\" formControlName=\"partenaires\"\n                                            id=\"slim-select\" multiple>\n                                        <option *ngFor=\"let item of partenaires\" value=\"{{ item.nom }}\"\n                                        > {{ item.nom }} &nbsp;\n                                        </option>\n\n                                    </select>\n\n                                    <div *ngIf=\"fGroup.controls['partenaires'].invalid && (fGroup.controls['partenaires'].dirty || fGroup.controls['partenaires'].touched)\">\n                                        <div *ngIf=\"fGroup.controls['partenaires'].errors.required\">\n                                            <p class=\"text-danger\"> Selectionez les partenaires du projets !</p>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"tab\" data-tab-id=\"3\">\n\n                        <div class=\"add-listing-section\">\n\n                            <!-- Headline -->\n                            <div class=\"add-listing-headline\">\n                                <h3><i class=\"sl sl-icon-doc\"></i> Caracteriques techniques </h3>\n                            </div>\n\n\n                            <div class=\"row \">\n\n\n                                <div class=\"col-xl-5\">\n                                    <label>Libéllé <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input class=\"search-field\" formControlName=\"libelle\" type=\"text\">\n                                </div>\n\n                                <div class=\"col-xl-2\">\n                                    <label>Nature <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <select class=\"chosen-select-no-single\" formControlName=\"nature\">\n                                        <option disabled>Selectioner une valeur</option>\n                                        <option *ngFor=\"let item of natures\" value=\"{{item}}\"> {{ item }}\n                                    </select>\n                                </div>\n\n                                <div *ngIf=\"isDate(fGroup.value.nature);\" class=\"col-xl-5\">\n                                    <label>Valeur <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input class=\"search-field\" formControlName=\"valeur\" type=\"date\">\n                                </div>\n                                <div *ngIf=\"!isDate(fGroup.value.nature);\" class=\"col-xl-5\">\n                                    <label>Valeur <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                    <input class=\"search-field\" formControlName=\"valeur\" type=\"text\">\n                                </div>\n                            </div>\n\n                            <br>\n                            <button (click)=\"addCaracTechnique(fGroup.value.libelle,fGroup.value.valeur,fGroup.value.nature)\"\n                                    class=\"button\"\n                                    type=\"button\">Ajouter\n                            </button>\n                            <br>\n                            <div class=\"FixedHeightContainer scroll\">\n\n                                <table class=\"col-xl-12\">\n\n                                    <tbody class=\"table-hover\">\n                                    <div *ngFor=\"let item of caracteristiqueTechniques\" class=\"col-xl-12\">\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Libllé</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.libelle }}</strong></td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Nature</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.nature }}</strong></td>\n                                        </tr>\n\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Valeur</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.valeur }}</strong></td>\n                                        </tr>\n                                        <br>\n                                        <br>\n                                    </div>\n\n\n                                </table>\n\n\n                                <br>\n                            </div>\n\n\n                            <br>\n\n                        </div>\n                    </div>\n\n                    <div class=\"tab\" data-tab-id=\"4\">\n                        <h3>Résumé des Informations saisies</h3>\n\n                        <table class=\"col-xl-12\">\n\n                            <tbody class=\"table-hover\">\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Nom du Projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.nom }}</strong></td>\n                            </tr>\n\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Date De Debut</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.dateDebut }}</strong></td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Date butoire</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.dateButoire }}</strong>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Budget Prévisionnel</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.budgetPrevisionel }}</strong>\n                                </td>\n                            <tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Responsable du Projet</td>\n                                <td class=\"text-left col-xl-4\">\n                                    <strong>{{ fGroup.value.employeResponsable.nom }}</strong>\n                                </td>\n                            <tr>\n\n                            <tr>\n                                <td class=\"text-left col-xl-8\">Objet du projet</td>\n                                <td class=\"text-left col-xl-4\"><strong>{{ fGroup.value.description }}</strong></td>\n                            </tr>\n\n\n                            <fieldset *ngIf=\"fGroup.value.partenaires\">\n                                <legend>Partenaires</legend>\n                                <div *ngFor=\"let item of fGroup.value.partenaires\" class=\"col-xl-12\">\n                                    <p class=\"text-success\"> {{item}}</p>\n                                </div>\n                            </fieldset>\n\n                            <br>\n                            <br>\n                            <fieldset *ngIf=\"fGroup.value.maitreoevrage\">\n                                <legend>Maitre d'oeuvrages</legend>\n                                <div *ngFor=\"let item of fGroup.value.maitreoevrage\" class=\"col-xl-12\">\n                                    <p class=\"text-success\"> {{item}}</p>\n                                </div>\n                            </fieldset>\n                            <br>\n                            <br>\n                            <fieldset *ngIf=\"fGroup.value.soumissionaire\">\n                                <legend>Soumissionaires</legend>\n                                <div *ngFor=\"let item of fGroup.value.soumissionaire\" class=\"col-xl-12\">\n                                    <p class=\"text-success\"> {{item}}</p>\n                                </div>\n                            </fieldset>\n\n\n                            <br>\n                            <br>\n                            <div class=\"FixedHeightContainer scroll\">\n                                <legend>Cataracteristiques techniques</legend>\n\n                                <table class=\"col-xl-12\">\n\n                                    <tbody class=\"table-hover\">\n                                    <div *ngFor=\"let item of caracteristiqueTechniques\" class=\"col-xl-12\">\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Libllé</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.libelle }}</strong></td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Nature</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.nature }}</strong></td>\n                                        </tr>\n\n\n                                        <tr>\n                                            <td class=\"text-left col-xl-8\">Valeur</td>\n                                            <td class=\"text-left col-xl-4\"><strong>{{ item.valeur }}</strong></td>\n                                        </tr>\n                                        <br>\n                                        <br>\n                                    </div>\n\n\n                                </table>\n\n\n                                <br>\n                            </div>\n\n                            <br>\n                            <br>\n\n\n                            </tbody>\n                            <tfoot>\n                            <br>\n\n                            <button class=\"button\" style=\"background: #259972;color: #fff\" type=\"submit\">Enregistrer <i\n                                    class=\"fa fa-save\"></i></button>\n                            </tfoot>\n                        </table>\n                    </div>\n\n\n                </form>\n            </div>\n        </div>\n\n\n    </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-detail/projet-detail.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-detail/projet-detail.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetDetailProjetDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2># {{ projet.id}} : Detail du projet {{ projet.nom }}  <a class=\"button pull-right\"\n                                                                     routerLink='/projets/my-project'><i\n                class=\"fa fa-list\"></i> Liste </a></h2>\n    </div>\n\n    <div>\n        <div>\n            <table class=\"col-md-12\">\n                <tbody>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Nom du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>N° du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.numeroProjet }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Etat : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong class=\"text-success\">Approuvé</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Secteur du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.secteur.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Type de Marché : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.secteur.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Regions : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.secteur.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Date De Debut : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.dateDebut }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Date butoire : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.dateFin}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Budget Prévisionnel : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.budgetPrevisionel}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Buget Réel : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.budgetReel}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr *ngIf=\"projet.responsable\">\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p> Responsable du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong> {{projet.responsable.nom }} &nbsp; {{projet.responsable.prenom }} </strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p> Caracteristiques techniques : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <button class=\"button\" type=\"button\">Voir\n                                        ({{ projet.catarteristiqueTechniques.length }} )\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Maitre d'oeuvrage : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.maitreDouvrage[0].nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p> Controlleurs : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.projetControlleur.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p> Etapes : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <button (click)=\"goTOEtapes(projet.slug)\" class=\"button\" type=\"button\">Voir\n                                        ({{projet.etapes.length }} )\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p> Partenaires : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <button (click)=\"goTOPartenaire(projet.slug)\" class=\"button\" type=\"button\">Voir\n                                        ({{projet.partenaires.length }} )\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p> Entreprise chargé d'execution du projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <button (click)=\"goTOEnterprise(projet.slug)\" class=\"button\" type=\"button\">Voir\n                                        ({{projet.soumissionaires.length }} )\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr *ngIf=\"financements\">\n                    <td class=\"col-xl-12\"> Financements Disponible : &nbsp; {{financements.length }}</td>\n                    <td class=\"col-xl-4\">\n                        <button class=\"button\" type=\"button\">Voir</button>\n                    </td>\n                </tr>\n\n                <br>\n\n                </tbody>\n            </table>\n            <div>\n                <div class=\"form-title form-title-1\">\n                    <h2>Objet du Projet</h2>\n                </div>\n                <div class=\" scroll\">\n                    <p>\n                        {{projet.description}}\n                    </p>\n                </div>\n                <button (click)=\"gotToEdit(projet.slug)\" class=\"button button-sliding-icon ripple-effect  \">Mettre à\n                    jours\n                </button> &nbsp; &nbsp;\n                <button (click)=\"goTOFinance(projet.slug)\" class=\"button button-sliding-icon ripple-effect \">Bilan\n                    Financier\n                </button> &nbsp; &nbsp;\n                <button (click)=\"goToRealisation(projet.slug)\" class=\"button button-sliding-icon ripple-effect  \">\n                    Réalisations\n                </button> &nbsp; &nbsp;\n                <button (click)=\"goToStat(projet.slug)\" class=\"button button-sliding-icon ripple-effect  \">\n                    Statistiques\n                </button> &nbsp; &nbsp;\n\n            </div>\n        </div>\n    </div>\n\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-edit/projet-edit.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-edit/projet-edit.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetEditProjetEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>projet-edit works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etape-create/projet-etape-create.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etape-create/projet-etape-create.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetEtapeCreateProjetEtapeCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-box margin-top-0 \">\n    <div class=\"headline\">\n        <p class=\"text-danger\">Les champs marqués par un ( <i class=\"text-danger glyphicon glyphicon-asterisk\"></i>)\n            sont obligatoires !</p>\n\n        <div class=\"dashboard-headline\">\n            <h4 class=\"wither\"><i class=\"sl sl-icon-doc\"></i> Enregistrement d'une nouvelle phase : <strong class=\"text-success\">  {{projet.nom}}</strong> <a class=\"button pull-right\"\n                                                                                routerLink='/taches/list'><i\n                    class=\"fa fa-list\"></i> Liste </a></h4>\n\n        </div>\n    </div>\n    <!-- Nav tabs -->\n    <div>\n\n        <!-- Tab panes -->\n        <form (ngSubmit)=\"submit()\" [formGroup]=\"fGroup\" enctype=\"multipart/form-data\">\n            <div class=\"content with-padding padding-bottom-10\">\n                <div class=\"jumbotron\">\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Nom <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                            <input class=\"search-field\" formControlName=\"nom\" placeholder=\"ex : Achat des materiel\"\n                                   type=\"text\">\n\n                            <div *ngIf=\"fGroup.controls['nom'].invalid && (fGroup.controls['nom'].dirty || fGroup.controls['nom'].touched)\">\n                                <div *ngIf=\"fGroup.controls['nom'].errors.required\">\n                                    <p class=\"text-danger\">Entrez le nom de cette phase du projet !</p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"col-md-12\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-6\">\n                                <label>Date debut <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                <input (onChange)=\"date = $event\" [dpDayPicker]=\"datePickerConfig\"\n                                       [theme]=\"'dp-material'\"\n                                       formControlName=\"dateDebut\"/>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <label>Date Fin <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                <input (onChange)=\"date = $event\" [dpDayPicker]=\"datePickerConfig\"\n                                       [theme]=\"'dp-material'\"\n                                       formControlName=\"dateFin\"/>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Cout <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                            <input class=\"search-field\" formControlName=\"cout\" placeholder=\"ex : 2 000 000\" type=\"text\">\n\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Description</label>\n                            <textarea class=\"WYSIWYG\" cols=\"40\" formControlName=\"description\" id=\"summary\" name=\"summary\" rows=\"3\"\n                                      spellcheck=\"true\"> </textarea>\n\n                        </div>\n\n\n                    </div>\n\n\n               \n\n\n                    <div>\n\n                        <button class=\"button ripple-effect big margin-top-30\" style=\"background: #139469;color: #fff\"\n                                type=\"submit\">Enregistrer <i\n                                class=\"fa fa-save\"></i></button> &nbsp;\n\n                        <button class=\"button ripple-effect big margin-top-30\" href=\"#\"> Liste</button>\n\n\n                    </div>\n                </div>\n\n\n            </div>\n        </form>\n\n\n    </div>\n\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetEtapeDetailProjetEtapeDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2> # Etapes (phases) du projet :  {{ tache.nom }}  <a class=\"button pull-right\"\n                                                                 ><i\n                class=\"fa fa-list\"></i> << Retour </a></h2>\n    </div>\n\n    <div>\n        <div class=\"jumbotron\">\n            <table class=\"col-md-12\">\n                <tbody>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Libellé : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ etape.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Numero du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ etape.numeroProjet }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Date de debut : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{etape.dateDebut}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Date de fin : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{etape.dateFin}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Cout : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{etape.cout}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Description : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{etape.description}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n\n\n                <br><br>\n\n                <div ><button type=\"button\" (click)=\"create()\" class=\"button pull-right\" routerLink='/etapes/create'><i\n                    class=\"fa fa-plus\"></i> Ajouter </button></div>\n\n                <br><br><br>\n\n                <div class=\"container\">\n\n                    <div class=\"center\">\n\n\n\n                        <table *ngIf=\"etape.taches\" class=\"basic-table booking-table table-responsive col-md-12\">\n                            <thead>\n                            <tr>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Libéllé</th>\n                                    <th>Date de Creation</th>\n                                    <th>Date de debut</th>\n                                    <th>Date de fin</th>\n                                    <th>Priorité</th>\n                                    <th>Cout</th>\n                                    <th>Executant</th>\n                                    <th>Crée Par</th>\n                                    <th>Projet</th>\n                                    <th>Action</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let item of etape.taches\">\n                                <td>{{ item.id }}</td>\n                                <td>{{ item.createdAt }}</td>\n                                <td>{{ item.dateDebut }}</td>\n                                <td>{{ item.dateFin }}</td>\n                                <td>{{ item.priorite[0].libelle }}, ...</td>\n                                <td>{{item.cout}}</td>\n                                <td>{{ item.exceuteur[0].nom }} ,...</td>\n                                <td>{{ item.planificateur.nom }} {{ item.planificateur.prenom }}</td>\n                                \n                                <td>{{ item.description | slice:0:35 }}</td>\n\n                                <td class=\"btn-group\">\n                                    <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                            class=\"icon-feather-eye\"></i></button>&nbsp;\n                                    <button (click)=\"edit(item.slug)\" class=\"btn btn-xs btn-warning\"><i\n                                            class=\"icon-line-awesome-edit\"></i></button>&nbsp;\n                                    <button (click)=\"delete(item.slug)\" class=\"btn btn-xs btn-danger\"><i\n                                            class=\"icon-feather-trash\"></i></button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n\n                    </div>\n\n\n                </div>\n\n\n                <br>\n\n                </tbody>\n            </table>\n            <div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etapes/projet-etapes.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etapes/projet-etapes.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetEtapesProjetEtapesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2> # Etapes (phases) du projet :  {{ projet.nom }}  <a class=\"button pull-right\"\n                                                                 routerLink='/projets/{{slug}}'><i\n                class=\"fa fa-list\"></i> << Retour </a></h2>\n    </div>\n\n    <div>\n        <div class=\"jumbotron\">\n            <table class=\"col-md-12\">\n                <tbody>\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Nom du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Numero du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.numeroProjet }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Responsable du projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{projet.budgetPrevisionel}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                <br><br>\n\n                <div ><button type=\"button\" (click)=\"create()\" class=\"button pull-right\" routerLink='/etapes/create'><i\n                    class=\"fa fa-plus\"></i> Ajouter </button></div>\n\n                <br><br><br>\n\n                <div class=\"container\">\n\n                    <div class=\"center\">\n\n\n\n                        <table *ngIf=\"projet.etapes\" class=\"basic-table booking-table table-responsive col-md-12\">\n                            <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Nom</th>\n                                <th>Cout</th>\n                                <th>Date Debut</th>\n                                <th>Date Fin</th>\n                                <th>Controlleur</th>\n                                <th>Description</th>\n                                <th>Action</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let item of projet.etapes\">\n                                <td>{{ item.id }}</td>\n                                <td>{{ item.nom }}</td>\n                                <td>{{ item.cout }}</td>\n                                <td>{{ item.cout }}</td>\n                                <td>{{ item.dateDebut }}</td>\n                                <td>{{ item.dateFin }}</td>\n                                <td>{{ item.description | slice:0:35 }}</td>\n\n                                <td class=\"btn-group\">\n                                    <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                            class=\"icon-feather-eye\"></i></button>&nbsp;\n                                    <button (click)=\"edit(item.slug)\" class=\"btn btn-xs btn-warning\"><i\n                                            class=\"icon-line-awesome-edit\"></i></button>&nbsp;\n                                    <button (click)=\"delete(item.slug)\" class=\"btn btn-xs btn-danger\"><i\n                                            class=\"icon-feather-trash\"></i></button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n\n                    </div>\n\n\n                </div>\n\n\n                <br>\n\n                </tbody>\n            </table>\n            <div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-list/projet-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-list/projet-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetListProjetListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-box margin-top-0\">\n\n    <div class=\"headline\">\n        <h4>\n            <strong>\n                Liste des projets\n            </strong>\n            <a class=\"button pull-right\" routerLink='/projets/create'><i class=\"icon-feather-plus-circle\"></i> Ajouter\n            </a>\n        </h4>\n    </div>\n\n    <div *ngFor=\"let item of projets\" class=\"freelancer\">\n        <div class=\"freelancer-overview\">\n            <div class=\"confirmation-title\">\n                <div class=\"freelancer-name\">\n                    <h2><strong>{{item.id}} : </strong>\n                        <p class=\"text-sucess\"> {{ item.nom }}</p></h2>\n                </div>\n                <div class=\"freelancer-overview-inner\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"confirmation-details detail\">\n                                <table>\n                                    <tbody>\n                                    <tr>\n                                        <td class=\"title\">Responsable du projet</td>\n                                        <td class=\"b-id\">{{ item.responsable.nom }} {{ item.responsable.prenom }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"title\">Budget Prévisionel</td>\n                                        <td>{{ item.budgetPrevisionel }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"title\">Date de début</td>\n                                        <td>{{ parseDate(item.dateDebut) }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"title\">Date de fin</td>\n                                        <td>{{ parseDate(item.dateFin) }}</td>\n                                    </tr>\n\n\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"make-payment\">\n\n                <tr>\n                    <td>\n                        <button (click)=\"onDetail(item.slug)\" class=\"btn btn-xs btn-info\">Détail</button>&nbsp;\n                        <button class=\"btn btn-xs btn-warning\" href=\"#\">Edition</button>&nbsp;\n                        <button (click)=\"onDelete(item)\" class=\"btn btn-xs btn-danger\">Suppression</button> &nbsp;\n                        &nbsp;\n                    </td>\n                </tr>\n            </div>\n        </div>\n        <br>\n\n    </div>\n\n</div>\n\n\n<div class=\"clearfix\"></div>\n<div class=\"pagination-container margin-top-20 margin-bottom-20\">\n\n\n    <nav class=\"pagination\">\n        <ul>\n\n            <br>\n            <br>\n\n            <li *ngIf=\"last\"><a (click)=\"previewPage()\"><i class=\"sl sl-icon-arrow-left\"></i></a></li>\n            <li><a>{{ pageNumber + 1}}</a></li>\n            <li *ngIf=\"numberOfElements < totalElements && !last\"><a (click)=\"nextPage()\">{{ pageNumber + 2}}</a></li>\n            <li *ngIf=\"!last\"><a (click)=\"nextPage()\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n        </ul>\n    </nav>\n</div>\n<button class=\"button preview pull-left\">{{numberOfElements}}/ {{totalElements}} projets</button>\n<button class=\"button  pull-right\">Imprimer</button>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetMaitreDoeuvrageProjetMaitreDoeuvrageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-12 col-md-12 col-xs-12\">\n\n\n    <div>\n        <div class=\"dashboard-list-box\">\n            <div class=\"headline\"><i class=\"fa fa-list\"></i> <strong class=\"text-success\">Les Maitre d'oeuvres du projet\n                : {{projet.nom}}</strong> <a class=\"button pull-right\" routerLink='/etapes/create'><i\n                    class=\"fa fa-plus\"></i> Ajouter </a></div>\n            <div class=\"table-box\">\n                <table class=\"basic-table booking-table\">\n                    <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Nom</th>\n                        <th>Description</th>\n                        <th>Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let item of etapes\">\n                        <td>{{ item.id }}</td>\n                        <td>{{ item.nom }}</td>\n                        <td>{{ item.description | slice:0:35 }}</td>\n\n                        <td class=\"btn-group\">\n                            <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                    class=\"icon-feather-eye\"></i></button>&nbsp;\n                            <button (click)=\"edit(item.slug)\" class=\"btn btn-xs btn-warning\"><i\n                                    class=\"icon-line-awesome-edit\"></i></button>&nbsp;\n                            <button (click)=\"delete(item.slug)\" class=\"btn btn-xs btn-danger\"><i\n                                    class=\"icon-feather-trash\"></i></button>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetMaitreDoeuvreProjetMaitreDoeuvreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-12 col-md-12 col-xs-12\">\n\n\n    <div>\n        <div class=\"dashboard-list-box\">\n            <div class=\"headline\"><i class=\"fa fa-list\"></i> <strong class=\"text-success\"> Maitre d'oeuvres du projet\n                : {{projet.nom}}</strong>\n                <button (click)='goToAddMaitreDoeuvre()' class=\"button pull-right\"><i class=\"fa fa-plus\"></i> Ajouter\n                </button>\n            </div>\n            <div class=\"table-box\">\n                <table class=\"basic-table booking-table\">\n                    <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Nom</th>\n                        <th>Responsable</th>\n                        <th>Raison Sociale</th>\n                        <th>Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let item of projet.maitreDoeuvres\">\n                        <td>{{ item.id }}</td>\n                        <td>{{ item.nom }}</td>\n                        <td>{{ item.responsable }}</td>\n                        <td>{{ item.raisonSociale }}</td>\n\n                        <td class=\"btn-group\">\n                            <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i\n                                    class=\"icon-feather-eye\"></i></button>&nbsp;\n                            <button (click)=\"edit(item.slug)\" class=\"btn btn-xs btn-warning\"><i\n                                    class=\"icon-line-awesome-edit\"></i></button>&nbsp;\n                            <button (click)=\"delete(item.slug)\" class=\"btn btn-xs btn-danger\"><i\n                                    class=\"icon-feather-trash\"></i></button>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"pagination-container\">\n        <nav class=\"pagination\">\n            <ul>\n\n                <li *ngIf=\"last\"><a (click)=\"previewPage()\"><i class=\"sl sl-icon-arrow-left\"></i></a></li>\n                <li><a>{{ pageNumber + 1}}</a></li>\n                <li *ngIf=\"numberOfElements < totalElements && !last\"><a (click)=\"nextPage()\">{{ pageNumber + 2}}</a>\n                </li>\n                <li *ngIf=\"!last\"><a (click)=\"nextPage()\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n            </ul>\n        </nav>\n        <button class=\"button preview pull-left\">{{numberOfElements}}/ {{totalElements}} Maitres d'oeuvres</button>\n        <button class=\"button  pull-right\">Imprimer</button>\n    </div>\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-partenaire/projet-partenaire.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-partenaire/projet-partenaire.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetPartenaireProjetPartenaireComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>projet-partenaire works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-statistique/projet-statistique.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-statistique/projet-statistique.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetStatistiqueProjetStatistiqueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>projet-statistique works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjetProjetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-headline\">\n    <h3>Projets</h3>\n\n    <!-- Breadcrumbs -->\n    <nav class=\"dark\" id=\"breadcrumbs\">\n        <ul>\n            <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">Tableau de bord </a></li>\n            <li>Projets</li>\n        </ul>\n    </nav>\n</div>\n\n<div class=\"row\">\n\n    <!-- Dashboard Box -->\n    <div class=\"col-xl-12\">\n        <div class=\"dashboard-box margin-top-0\">\n\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/slim-select/dist/slimselect.min.js":
  /*!*********************************************************!*\
    !*** ./node_modules/slim-select/dist/slimselect.min.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSlimSelectDistSlimselectMinJs(module, exports, __webpack_require__) {
    !function (e, t) {
      true ? module.exports = t() : undefined;
    }(window, function () {
      return (s = {}, n.m = i = [function (e, t, i) {
        "use strict";

        function s(e, t) {
          t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        }

        var n;
        t.__esModule = !0, t.hasClassInTree = function (e, t) {
          function s(e, t) {
            return t && e && e.classList && e.classList.contains(t) ? e : null;
          }

          return s(e, t) || function e(t, i) {
            return t && t !== document ? s(t, i) ? t : e(t.parentNode, i) : null;
          }(e, t);
        }, t.ensureElementInView = function (e, t) {
          var i = e.scrollTop + e.offsetTop,
              s = i + e.clientHeight,
              n = t.offsetTop,
              a = n + t.clientHeight;
          n < i ? e.scrollTop -= i - n : s < a && (e.scrollTop += a - s);
        }, t.putContent = function (e, t, i) {
          var s = e.offsetHeight,
              n = e.getBoundingClientRect(),
              a = i ? n.top : n.top - s,
              l = i ? n.bottom : n.bottom + s;
          return a <= 0 ? "below" : l >= window.innerHeight ? "above" : i ? t : "below";
        }, t.debounce = function (n, a, l) {
          var o;
          return void 0 === a && (a = 100), void 0 === l && (l = !1), function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }

            var i = self,
                s = l && !o;
            clearTimeout(o), o = setTimeout(function () {
              o = null, l || n.apply(i, e);
            }, a), s && n.apply(i, e);
          };
        }, t.isValueInArrayOfObjects = function (e, t, i) {
          if (!Array.isArray(e)) return e[t] === i;

          for (var s = 0, n = e; s < n.length; s++) {
            var a = n[s];
            if (a && a[t] && a[t] === i) return !0;
          }

          return !1;
        }, t.highlight = function (e, t, i) {
          var s = e,
              n = new RegExp("(" + t.trim() + ")(?![^<]*>[^<>]*</)", "i");
          if (!e.match(n)) return e;
          var a = e.match(n).index,
              l = a + e.match(n)[0].toString().length,
              o = e.substring(a, l);
          return s = s.replace(n, '<mark class="' + i + '">' + o + "</mark>");
        }, "function" != typeof (n = window).CustomEvent && (s.prototype = n.Event.prototype, n.CustomEvent = s);
      }, function (e, t, i) {
        "use strict";

        t.__esModule = !0;
        var s = (n.prototype.newOption = function (e) {
          return {
            id: e.id ? e.id : String(Math.floor(1e8 * Math.random())),
            value: e.value ? e.value : "",
            text: e.text ? e.text : "",
            innerHTML: e.innerHTML ? e.innerHTML : "",
            selected: !!e.selected && e.selected,
            display: void 0 === e.display || e.display,
            disabled: !!e.disabled && e.disabled,
            placeholder: !!e.placeholder && e.placeholder,
            class: e.class ? e.class : void 0,
            data: e.data ? e.data : {}
          };
        }, n.prototype.add = function (e) {
          this.data.push({
            id: String(Math.floor(1e8 * Math.random())),
            value: e.value,
            text: e.text,
            innerHTML: "",
            selected: !1,
            display: !0,
            disabled: !1,
            placeholder: !1,
            class: void 0,
            data: {}
          });
        }, n.prototype.parseSelectData = function () {
          this.data = [];

          for (var e = 0, t = this.main.select.element.childNodes; e < t.length; e++) {
            var i = t[e];

            if ("OPTGROUP" === i.nodeName) {
              for (var s = {
                label: i.label,
                options: []
              }, n = 0, a = i.childNodes; n < a.length; n++) {
                var l = a[n];

                if ("OPTION" === l.nodeName) {
                  var o = this.pullOptionData(l);
                  s.options.push(o), o.placeholder && "" !== o.text.trim() && (this.main.config.placeholderText = o.text);
                }
              }

              this.data.push(s);
            } else "OPTION" === i.nodeName && (o = this.pullOptionData(i), this.data.push(o), o.placeholder && "" !== o.text.trim() && (this.main.config.placeholderText = o.text));
          }
        }, n.prototype.pullOptionData = function (e) {
          return {
            id: !!e.dataset && e.dataset.id || String(Math.floor(1e8 * Math.random())),
            value: e.value,
            text: e.text,
            innerHTML: e.innerHTML,
            selected: e.selected,
            disabled: e.disabled,
            placeholder: "true" === e.dataset.placeholder,
            class: e.className,
            style: e.style.cssText,
            data: e.dataset
          };
        }, n.prototype.setSelectedFromSelect = function () {
          if (this.main.config.isMultiple) {
            for (var e = [], t = 0, i = this.main.select.element.options; t < i.length; t++) {
              var s = i[t];

              if (s.selected) {
                var n = this.getObjectFromData(s.value, "value");
                n && n.id && e.push(n.id);
              }
            }

            this.setSelected(e, "id");
          } else {
            var a = this.main.select.element;

            if (-1 !== a.selectedIndex) {
              var l = a.options[a.selectedIndex].value;
              this.setSelected(l, "value");
            }
          }
        }, n.prototype.setSelected = function (e, t) {
          void 0 === t && (t = "id");

          for (var i = 0, s = this.data; i < s.length; i++) {
            var n = s[i];

            if (n.hasOwnProperty("label")) {
              if (n.hasOwnProperty("options")) {
                var a = n.options;
                if (a) for (var l = 0, o = a; l < o.length; l++) {
                  var r = o[l];
                  r.placeholder || (r.selected = this.shouldBeSelected(r, e, t));
                }
              }
            } else n.selected = this.shouldBeSelected(n, e, t);
          }
        }, n.prototype.shouldBeSelected = function (e, t, i) {
          if (void 0 === i && (i = "id"), Array.isArray(t)) for (var s = 0, n = t; s < n.length; s++) {
            var a = n[s];
            if (i in e && String(e[i]) === String(a)) return !0;
          } else if (i in e && String(e[i]) === String(t)) return !0;
          return !1;
        }, n.prototype.getSelected = function () {
          for (var e = {
            text: "",
            placeholder: this.main.config.placeholderText
          }, t = [], i = 0, s = this.data; i < s.length; i++) {
            var n = s[i];

            if (n.hasOwnProperty("label")) {
              if (n.hasOwnProperty("options")) {
                var a = n.options;
                if (a) for (var l = 0, o = a; l < o.length; l++) {
                  var r = o[l];
                  r.selected && (this.main.config.isMultiple ? t.push(r) : e = r);
                }
              }
            } else n.selected && (this.main.config.isMultiple ? t.push(n) : e = n);
          }

          return this.main.config.isMultiple ? t : e;
        }, n.prototype.addToSelected = function (e, t) {
          if (void 0 === t && (t = "id"), this.main.config.isMultiple) {
            var i = [],
                s = this.getSelected();
            if (Array.isArray(s)) for (var n = 0, a = s; n < a.length; n++) {
              var l = a[n];
              i.push(l[t]);
            }
            i.push(e), this.setSelected(i, t);
          }
        }, n.prototype.removeFromSelected = function (e, t) {
          if (void 0 === t && (t = "id"), this.main.config.isMultiple) {
            for (var i = [], s = 0, n = this.getSelected(); s < n.length; s++) {
              var a = n[s];
              String(a[t]) !== String(e) && i.push(a[t]);
            }

            this.setSelected(i, t);
          }
        }, n.prototype.onDataChange = function () {
          this.main.onChange && this.isOnChangeEnabled && this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())));
        }, n.prototype.getObjectFromData = function (e, t) {
          void 0 === t && (t = "id");

          for (var i = 0, s = this.data; i < s.length; i++) {
            var n = s[i];
            if (t in n && String(n[t]) === String(e)) return n;

            if (n.hasOwnProperty("options")) {
              var a = n;
              if (a.options) for (var l = 0, o = a.options; l < o.length; l++) {
                var r = o[l];
                if (String(r[t]) === String(e)) return r;
              }
            }
          }

          return null;
        }, n.prototype.search = function (n) {
          if ("" !== (this.searchValue = n).trim()) {
            var a = this.main.config.searchFilter,
                e = this.data.slice(0);
            n = n.trim();
            var t = e.map(function (e) {
              if (e.hasOwnProperty("options")) {
                var t = e,
                    i = [];

                if (t.options && (i = t.options.filter(function (e) {
                  return a(e, n);
                })), 0 !== i.length) {
                  var s = Object.assign({}, t);
                  return s.options = i, s;
                }
              }

              return e.hasOwnProperty("text") && a(e, n) ? e : null;
            });
            this.filtered = t.filter(function (e) {
              return e;
            });
          } else this.filtered = null;
        }, n);

        function n(e) {
          this.contentOpen = !1, this.contentPosition = "below", this.isOnChangeEnabled = !0, this.main = e.main, this.searchValue = "", this.data = [], this.filtered = null, this.parseSelectData(), this.setSelectedFromSelect();
        }

        function r(e) {
          return void 0 !== e.text || (console.error("Data object option must have at least have a text value. Check object: " + JSON.stringify(e)), !1);
        }

        t.Data = s, t.validateData = function (e) {
          if (!e) return console.error("Data must be an array of objects"), !1;

          for (var t = 0, i = 0, s = e; i < s.length; i++) {
            var n = s[i];

            if (n.hasOwnProperty("label")) {
              if (n.hasOwnProperty("options")) {
                var a = n.options;
                if (a) for (var l = 0, o = a; l < o.length; l++) {
                  r(o[l]) || t++;
                }
              }
            } else r(n) || t++;
          }

          return 0 === t;
        }, t.validateOption = r;
      }, function (e, t, i) {
        "use strict";

        t.__esModule = !0;
        var s = i(3),
            n = i(4),
            a = i(5),
            l = i(1),
            o = i(0),
            r = (c.prototype.validate = function (e) {
          var t = "string" == typeof e.select ? document.querySelector(e.select) : e.select;
          if (!t) throw new Error("Could not find select element");
          if ("SELECT" !== t.tagName) throw new Error("Element isnt of type select");
          return t;
        }, c.prototype.selected = function () {
          if (this.config.isMultiple) {
            for (var e = [], t = 0, i = n = this.data.getSelected(); t < i.length; t++) {
              var s = i[t];
              e.push(s.value);
            }

            return e;
          }

          var n;
          return (n = this.data.getSelected()) ? n.value : "";
        }, c.prototype.set = function (e, t, i, s) {
          void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === s && (s = !0), this.config.isMultiple && !Array.isArray(e) ? this.data.addToSelected(e, t) : this.data.setSelected(e, t), this.select.setValue(), this.data.onDataChange(), this.render(), i && this.close();
        }, c.prototype.setSelected = function (e, t, i, s) {
          void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === s && (s = !0), this.set(e, t, i, s);
        }, c.prototype.setData = function (e) {
          if (l.validateData(e)) {
            var t = JSON.parse(JSON.stringify(e)),
                i = this.data.getSelected();
            if (this.config.isAjax && i) if (this.config.isMultiple) for (var s = 0, n = i.reverse(); s < n.length; s++) {
              var a = n[s];
              t.unshift(a);
            } else t.unshift(this.data.getSelected()), t.unshift({
              text: "",
              placeholder: !0
            });
            this.select.create(t), this.data.parseSelectData(), this.data.setSelectedFromSelect();
          } else console.error("Validation problem on: #" + this.select.element.id);
        }, c.prototype.addData = function (e) {
          l.validateData([e]) ? (this.data.add(this.data.newOption(e)), this.select.create(this.data.data), this.data.parseSelectData(), this.data.setSelectedFromSelect(), this.render()) : console.error("Validation problem on: #" + this.select.element.id);
        }, c.prototype.open = function () {
          var e = this;

          if (this.config.isEnabled && !this.data.contentOpen) {
            if (this.beforeOpen && this.beforeOpen(), this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.plus.classList.add("ss-cross") : this.slim.singleSelected && (this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")), this.slim[this.config.isMultiple ? "multiSelected" : "singleSelected"].container.classList.add("above" === this.data.contentPosition ? this.config.openAbove : this.config.openBelow), this.slim.content.classList.add(this.config.open), "up" === this.config.showContent.toLowerCase() ? this.moveContentAbove() : "down" === this.config.showContent.toLowerCase() ? this.moveContentBelow() : "above" === o.putContent(this.slim.content, this.data.contentPosition, this.data.contentOpen) ? this.moveContentAbove() : this.moveContentBelow(), !this.config.isMultiple) {
              var t = this.data.getSelected();

              if (t) {
                var i = t.id,
                    s = this.slim.list.querySelector('[data-id="' + i + '"]');
                s && o.ensureElementInView(this.slim.list, s);
              }
            }

            setTimeout(function () {
              e.data.contentOpen = !0, e.config.searchFocus && e.slim.search.input.focus(), e.afterOpen && e.afterOpen();
            }, this.config.timeoutDelay);
          }
        }, c.prototype.close = function () {
          var e = this;
          this.data.contentOpen && (this.beforeClose && this.beforeClose(), this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.plus.classList.remove("ss-cross")) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")), this.slim.content.classList.remove(this.config.open), this.data.contentOpen = !1, this.search(""), setTimeout(function () {
            e.slim.content.removeAttribute("style"), e.data.contentPosition = "below", e.config.isMultiple && e.slim.multiSelected ? (e.slim.multiSelected.container.classList.remove(e.config.openAbove), e.slim.multiSelected.container.classList.remove(e.config.openBelow)) : e.slim.singleSelected && (e.slim.singleSelected.container.classList.remove(e.config.openAbove), e.slim.singleSelected.container.classList.remove(e.config.openBelow)), e.slim.search.input.blur(), e.afterClose && e.afterClose();
          }, this.config.timeoutDelay));
        }, c.prototype.moveContentAbove = function () {
          var e = 0;
          this.config.isMultiple && this.slim.multiSelected ? e = this.slim.multiSelected.container.offsetHeight : this.slim.singleSelected && (e = this.slim.singleSelected.container.offsetHeight);
          var t = e + this.slim.content.offsetHeight - 1;
          this.slim.content.style.margin = "-" + t + "px 0 0 0", this.slim.content.style.height = t - e + 1 + "px", this.slim.content.style.transformOrigin = "center bottom", this.data.contentPosition = "above", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.container.classList.add(this.config.openAbove)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.container.classList.add(this.config.openAbove));
        }, c.prototype.moveContentBelow = function () {
          this.slim.content.removeAttribute("style"), this.data.contentPosition = "below", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.add(this.config.openBelow)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.add(this.config.openBelow));
        }, c.prototype.enable = function () {
          this.config.isEnabled = !0, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.remove(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.remove(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !1, this.slim.search.input.disabled = !1, this.select.triggerMutationObserver = !0;
        }, c.prototype.disable = function () {
          this.config.isEnabled = !1, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.add(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.add(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !0, this.slim.search.input.disabled = !0, this.select.triggerMutationObserver = !0;
        }, c.prototype.search = function (t) {
          if (this.data.searchValue !== t) if (this.slim.search.input.value = t, this.config.isAjax) {
            var i = this;
            this.config.isSearching = !0, this.render(), this.ajax && this.ajax(t, function (e) {
              i.config.isSearching = !1, Array.isArray(e) ? (e.unshift({
                text: "",
                placeholder: !0
              }), i.setData(e), i.data.search(t), i.render()) : "string" == typeof e ? i.slim.options(e) : i.render();
            });
          } else this.data.search(t), this.render();
        }, c.prototype.setSearchText = function (e) {
          this.config.searchText = e;
        }, c.prototype.render = function () {
          this.config.isMultiple ? this.slim.values() : (this.slim.placeholder(), this.slim.deselect()), this.slim.options();
        }, c.prototype.destroy = function (e) {
          void 0 === e && (e = null);
          var t = e ? document.querySelector("." + e) : this.slim.container,
              i = e ? document.querySelector("[data-ssid=" + e + "]") : this.select.element;
          t && i && (i.style.display = null, delete i.dataset.ssid, i.slim = null, t.parentElement && t.parentElement.removeChild(t));
        }, c);

        function c(e) {
          var t = this;
          this.ajax = null, this.addable = null, this.beforeOnChange = null, this.onChange = null, this.beforeOpen = null, this.afterOpen = null, this.beforeClose = null, this.afterClose = null;
          var i = this.validate(e);
          i.dataset.ssid && this.destroy(i.dataset.ssid), e.ajax && (this.ajax = e.ajax), e.addable && (this.addable = e.addable), this.config = new s.Config({
            select: i,
            isAjax: !!e.ajax,
            showSearch: e.showSearch,
            searchPlaceholder: e.searchPlaceholder,
            searchText: e.searchText,
            searchingText: e.searchingText,
            searchFocus: e.searchFocus,
            searchHighlight: e.searchHighlight,
            searchFilter: e.searchFilter,
            closeOnSelect: e.closeOnSelect,
            showContent: e.showContent,
            placeholderText: e.placeholder,
            allowDeselect: e.allowDeselect,
            allowDeselectOption: e.allowDeselectOption,
            hideSelectedOption: e.hideSelectedOption,
            deselectLabel: e.deselectLabel,
            isEnabled: e.isEnabled,
            valuesUseText: e.valuesUseText,
            showOptionTooltips: e.showOptionTooltips,
            selectByGroup: e.selectByGroup,
            limit: e.limit,
            timeoutDelay: e.timeoutDelay
          }), this.select = new n.Select({
            select: i,
            main: this
          }), this.data = new l.Data({
            main: this
          }), this.slim = new a.Slim({
            main: this
          }), this.select.element.parentNode && this.select.element.parentNode.insertBefore(this.slim.container, this.select.element.nextSibling), e.data ? this.setData(e.data) : this.render(), document.addEventListener("click", function (e) {
            e.target && !o.hasClassInTree(e.target, t.config.id) && t.close();
          }), window.addEventListener("scroll", o.debounce(function (e) {
            t.data.contentOpen && "auto" === t.config.showContent && ("above" === o.putContent(t.slim.content, t.data.contentPosition, t.data.contentOpen) ? t.moveContentAbove() : t.moveContentBelow());
          }), !1), e.beforeOnChange && (this.beforeOnChange = e.beforeOnChange), e.onChange && (this.onChange = e.onChange), e.beforeOpen && (this.beforeOpen = e.beforeOpen), e.afterOpen && (this.afterOpen = e.afterOpen), e.beforeClose && (this.beforeClose = e.beforeClose), e.afterClose && (this.afterClose = e.afterClose), this.config.isEnabled || this.disable();
        }

        t.default = r;
      }, function (e, t, i) {
        "use strict";

        t.__esModule = !0;
        var s = (n.prototype.searchFilter = function (e, t) {
          return -1 !== e.text.toLowerCase().indexOf(t.toLowerCase());
        }, n);

        function n(e) {
          this.id = "", this.isMultiple = !1, this.isAjax = !1, this.isSearching = !1, this.showSearch = !0, this.searchFocus = !0, this.searchHighlight = !1, this.closeOnSelect = !0, this.showContent = "auto", this.searchPlaceholder = "Search", this.searchText = "No Results", this.searchingText = "Searching...", this.placeholderText = "Select Value", this.allowDeselect = !1, this.allowDeselectOption = !1, this.hideSelectedOption = !1, this.deselectLabel = "x", this.isEnabled = !0, this.valuesUseText = !1, this.showOptionTooltips = !1, this.selectByGroup = !1, this.limit = 0, this.timeoutDelay = 200, this.main = "ss-main", this.singleSelected = "ss-single-selected", this.arrow = "ss-arrow", this.multiSelected = "ss-multi-selected", this.add = "ss-add", this.plus = "ss-plus", this.values = "ss-values", this.value = "ss-value", this.valueText = "ss-value-text", this.valueDelete = "ss-value-delete", this.content = "ss-content", this.open = "ss-open", this.openAbove = "ss-open-above", this.openBelow = "ss-open-below", this.search = "ss-search", this.searchHighlighter = "ss-search-highlight", this.addable = "ss-addable", this.list = "ss-list", this.optgroup = "ss-optgroup", this.optgroupLabel = "ss-optgroup-label", this.optgroupLabelSelectable = "ss-optgroup-label-selectable", this.option = "ss-option", this.optionSelected = "ss-option-selected", this.highlighted = "ss-highlighted", this.disabled = "ss-disabled", this.hide = "ss-hide", this.id = "ss-" + Math.floor(1e5 * Math.random()), this.style = e.select.style.cssText, this.class = e.select.className.split(" "), this.isMultiple = e.select.multiple, this.isAjax = e.isAjax, this.showSearch = !1 !== e.showSearch, this.searchFocus = !1 !== e.searchFocus, this.searchHighlight = !0 === e.searchHighlight, this.closeOnSelect = !1 !== e.closeOnSelect, e.showContent && (this.showContent = e.showContent), this.isEnabled = !1 !== e.isEnabled, e.searchPlaceholder && (this.searchPlaceholder = e.searchPlaceholder), e.searchText && (this.searchText = e.searchText), e.searchingText && (this.searchingText = e.searchingText), e.placeholderText && (this.placeholderText = e.placeholderText), this.allowDeselect = !0 === e.allowDeselect, this.allowDeselectOption = !0 === e.allowDeselectOption, this.hideSelectedOption = !0 === e.hideSelectedOption, e.deselectLabel && (this.deselectLabel = e.deselectLabel), e.valuesUseText && (this.valuesUseText = e.valuesUseText), e.showOptionTooltips && (this.showOptionTooltips = e.showOptionTooltips), e.selectByGroup && (this.selectByGroup = e.selectByGroup), e.limit && (this.limit = e.limit), e.searchFilter && (this.searchFilter = e.searchFilter), null != e.timeoutDelay && (this.timeoutDelay = e.timeoutDelay);
        }

        t.Config = s;
      }, function (e, t, i) {
        "use strict";

        t.__esModule = !0;
        var s = (n.prototype.setValue = function () {
          if (this.main.data.getSelected()) {
            if (this.main.config.isMultiple) for (var e = this.main.data.getSelected(), t = 0, i = this.element.options; t < i.length; t++) {
              var s = i[t];
              s.selected = !1;

              for (var n = 0, a = e; n < a.length; n++) {
                a[n].value === s.value && (s.selected = !0);
              }
            } else e = this.main.data.getSelected(), this.element.value = e ? e.value : "";
            this.main.data.isOnChangeEnabled = !1, this.element.dispatchEvent(new CustomEvent("change", {
              bubbles: !0
            })), this.main.data.isOnChangeEnabled = !0;
          }
        }, n.prototype.addAttributes = function () {
          this.element.tabIndex = -1, this.element.style.display = "none", this.element.dataset.ssid = this.main.config.id;
        }, n.prototype.addEventListeners = function () {
          var t = this;
          this.element.addEventListener("change", function (e) {
            t.main.data.setSelectedFromSelect(), t.main.render();
          });
        }, n.prototype.addMutationObserver = function () {
          var t = this;
          this.main.config.isAjax || (this.mutationObserver = new MutationObserver(function (e) {
            t.triggerMutationObserver && (t.main.data.parseSelectData(), t.main.data.setSelectedFromSelect(), t.main.render(), e.forEach(function (e) {
              "class" === e.attributeName && t.main.slim.updateContainerDivClass(t.main.slim.container);
            }));
          }), this.observeMutationObserver());
        }, n.prototype.observeMutationObserver = function () {
          this.mutationObserver && this.mutationObserver.observe(this.element, {
            attributes: !0,
            childList: !0,
            characterData: !0
          });
        }, n.prototype.disconnectMutationObserver = function () {
          this.mutationObserver && this.mutationObserver.disconnect();
        }, n.prototype.create = function (e) {
          this.element.innerHTML = "";

          for (var t = 0, i = e; t < i.length; t++) {
            var s = i[t];

            if (s.hasOwnProperty("options")) {
              var n = s,
                  a = document.createElement("optgroup");
              if (a.label = n.label, n.options) for (var l = 0, o = n.options; l < o.length; l++) {
                var r = o[l];
                a.appendChild(this.createOption(r));
              }
              this.element.appendChild(a);
            } else this.element.appendChild(this.createOption(s));
          }
        }, n.prototype.createOption = function (t) {
          var i = document.createElement("option");
          return i.value = t.value || t.text, i.innerHTML = t.innerHTML || t.text, t.selected && (i.selected = t.selected), t.disabled && (i.disabled = !0), t.placeholder && i.setAttribute("data-placeholder", "true"), t.class && t.class.split(" ").forEach(function (e) {
            i.classList.add(e);
          }), t.data && "object" == typeof t.data && Object.keys(t.data).forEach(function (e) {
            i.setAttribute("data-" + e, t.data[e]);
          }), i;
        }, n);

        function n(e) {
          this.triggerMutationObserver = !0, this.element = e.select, this.main = e.main, this.element.disabled && (this.main.config.isEnabled = !1), this.addAttributes(), this.addEventListeners(), this.mutationObserver = null, this.addMutationObserver(), this.element.slim = e.main;
        }

        t.Select = s;
      }, function (e, t, i) {
        "use strict";

        t.__esModule = !0;
        var a = i(0),
            l = i(1),
            s = (n.prototype.containerDiv = function () {
          var e = document.createElement("div");
          return e.style.cssText = this.main.config.style, this.updateContainerDivClass(e), e;
        }, n.prototype.updateContainerDivClass = function (e) {
          this.main.config.class = this.main.select.element.className.split(" "), e.className = "", e.classList.add(this.main.config.id), e.classList.add(this.main.config.main);

          for (var t = 0, i = this.main.config.class; t < i.length; t++) {
            var s = i[t];
            "" !== s.trim() && e.classList.add(s);
          }
        }, n.prototype.singleSelectedDiv = function () {
          var t = this,
              e = document.createElement("div");
          e.classList.add(this.main.config.singleSelected);
          var i = document.createElement("span");
          i.classList.add("placeholder"), e.appendChild(i);
          var s = document.createElement("span");
          s.innerHTML = this.main.config.deselectLabel, s.classList.add("ss-deselect"), s.onclick = function (e) {
            e.stopPropagation(), t.main.config.isEnabled && t.main.set("");
          }, e.appendChild(s);
          var n = document.createElement("span");
          n.classList.add(this.main.config.arrow);
          var a = document.createElement("span");
          return a.classList.add("arrow-down"), n.appendChild(a), e.appendChild(n), e.onclick = function () {
            t.main.config.isEnabled && (t.main.data.contentOpen ? t.main.close() : t.main.open());
          }, {
            container: e,
            placeholder: i,
            deselect: s,
            arrowIcon: {
              container: n,
              arrow: a
            }
          };
        }, n.prototype.placeholder = function () {
          var e = this.main.data.getSelected();

          if (null === e || e && e.placeholder) {
            var t = document.createElement("span");
            t.classList.add(this.main.config.disabled), t.innerHTML = this.main.config.placeholderText, this.singleSelected && (this.singleSelected.placeholder.innerHTML = t.outerHTML);
          } else {
            var i = "";
            e && (i = e.innerHTML && !0 !== this.main.config.valuesUseText ? e.innerHTML : e.text), this.singleSelected && (this.singleSelected.placeholder.innerHTML = e ? i : "");
          }
        }, n.prototype.deselect = function () {
          if (this.singleSelected) {
            if (!this.main.config.allowDeselect) return void this.singleSelected.deselect.classList.add("ss-hide");
            "" === this.main.selected() ? this.singleSelected.deselect.classList.add("ss-hide") : this.singleSelected.deselect.classList.remove("ss-hide");
          }
        }, n.prototype.multiSelectedDiv = function () {
          var t = this,
              e = document.createElement("div");
          e.classList.add(this.main.config.multiSelected);
          var i = document.createElement("div");
          i.classList.add(this.main.config.values), e.appendChild(i);
          var s = document.createElement("div");
          s.classList.add(this.main.config.add);
          var n = document.createElement("span");
          return n.classList.add(this.main.config.plus), n.onclick = function (e) {
            t.main.data.contentOpen && (t.main.close(), e.stopPropagation());
          }, s.appendChild(n), e.appendChild(s), e.onclick = function (e) {
            t.main.config.isEnabled && (e.target.classList.contains(t.main.config.valueDelete) || (t.main.data.contentOpen ? t.main.close() : t.main.open()));
          }, {
            container: e,
            values: i,
            add: s,
            plus: n
          };
        }, n.prototype.values = function () {
          if (this.multiSelected) {
            for (var e, t = this.multiSelected.values.childNodes, i = this.main.data.getSelected(), s = [], n = 0, a = t; n < a.length; n++) {
              var l = a[n];
              e = !0;

              for (var o = 0, r = i; o < r.length; o++) {
                var c = r[o];
                String(c.id) === String(l.dataset.id) && (e = !1);
              }

              e && s.push(l);
            }

            for (var h = 0, d = s; h < d.length; h++) {
              var u = d[h];
              u.classList.add("ss-out"), this.multiSelected.values.removeChild(u);
            }

            for (t = this.multiSelected.values.childNodes, c = 0; c < i.length; c++) {
              e = !1;

              for (var p = 0, m = t; p < m.length; p++) {
                l = m[p], String(i[c].id) === String(l.dataset.id) && (e = !0);
              }

              e || (0 !== t.length && HTMLElement.prototype.insertAdjacentElement ? 0 === c ? this.multiSelected.values.insertBefore(this.valueDiv(i[c]), t[c]) : t[c - 1].insertAdjacentElement("afterend", this.valueDiv(i[c])) : this.multiSelected.values.appendChild(this.valueDiv(i[c])));
            }

            if (0 === i.length) {
              var f = document.createElement("span");
              f.classList.add(this.main.config.disabled), f.innerHTML = this.main.config.placeholderText, this.multiSelected.values.innerHTML = f.outerHTML;
            }
          }
        }, n.prototype.valueDiv = function (a) {
          var l = this,
              e = document.createElement("div");
          e.classList.add(this.main.config.value), e.dataset.id = a.id;
          var t = document.createElement("span");
          t.classList.add(this.main.config.valueText), t.innerHTML = a.innerHTML && !0 !== this.main.config.valuesUseText ? a.innerHTML : a.text, e.appendChild(t);
          var i = document.createElement("span");
          return i.classList.add(this.main.config.valueDelete), i.innerHTML = this.main.config.deselectLabel, i.onclick = function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = !1;

            if (l.main.config.isEnabled) {
              if (l.main.beforeOnChange || (t = !0), l.main.beforeOnChange) {
                for (var i = l.main.data.getSelected(), s = JSON.parse(JSON.stringify(i)), n = 0; n < s.length; n++) {
                  s[n].id === a.id && s.splice(n, 1);
                }

                !1 !== l.main.beforeOnChange(s) && (t = !0);
              }

              t && (l.main.data.removeFromSelected(a.id, "id"), l.main.render(), l.main.select.setValue(), l.main.data.onDataChange());
            }
          }, e.appendChild(i), e;
        }, n.prototype.contentDiv = function () {
          var e = document.createElement("div");
          return e.classList.add(this.main.config.content), e;
        }, n.prototype.searchDiv = function () {
          var n = this,
              e = document.createElement("div"),
              s = document.createElement("input"),
              a = document.createElement("div");
          e.classList.add(this.main.config.search);
          var t = {
            container: e,
            input: s
          };
          return this.main.config.showSearch || (e.classList.add(this.main.config.hide), s.readOnly = !0), s.type = "search", s.placeholder = this.main.config.searchPlaceholder, s.tabIndex = 0, s.setAttribute("aria-label", this.main.config.searchPlaceholder), s.onclick = function (e) {
            setTimeout(function () {
              "" === e.target.value && n.main.search("");
            }, 10);
          }, s.onkeydown = function (e) {
            "ArrowUp" === e.key ? (n.main.open(), n.highlightUp(), e.preventDefault()) : "ArrowDown" === e.key ? (n.main.open(), n.highlightDown(), e.preventDefault()) : "Tab" === e.key ? n.main.data.contentOpen ? n.main.close() : setTimeout(function () {
              n.main.close();
            }, n.main.config.timeoutDelay) : "Enter" === e.key && e.preventDefault();
          }, s.onkeyup = function (e) {
            var t = e.target;

            if ("Enter" === e.key) {
              if (n.main.addable && e.ctrlKey) return a.click(), e.preventDefault(), void e.stopPropagation();
              var i = n.list.querySelector("." + n.main.config.highlighted);
              i && i.click();
            } else "ArrowUp" === e.key || "ArrowDown" === e.key || ("Escape" === e.key ? n.main.close() : n.main.config.showSearch && n.main.data.contentOpen ? n.main.search(t.value) : s.value = "");

            e.preventDefault(), e.stopPropagation();
          }, s.onfocus = function () {
            n.main.open();
          }, e.appendChild(s), this.main.addable && (a.classList.add(this.main.config.addable), a.innerHTML = "+", a.onclick = function (e) {
            if (n.main.addable) {
              e.preventDefault(), e.stopPropagation();
              var t = n.search.input.value;
              if ("" === t.trim()) return void n.search.input.focus();
              var i = n.main.addable(t),
                  s = "";
              if (!i) return;
              "object" == typeof i ? l.validateOption(i) && (n.main.addData(i), s = i.value ? i.value : i.text) : (n.main.addData(n.main.data.newOption({
                text: i,
                value: i
              })), s = i), n.main.search(""), setTimeout(function () {
                n.main.set(s, "value", !1, !1);
              }, 100), n.main.config.closeOnSelect && setTimeout(function () {
                n.main.close();
              }, 100);
            }
          }, e.appendChild(a), t.addable = a), t;
        }, n.prototype.highlightUp = function () {
          var e = this.list.querySelector("." + this.main.config.highlighted),
              t = null;
          if (e) for (t = e.previousSibling; null !== t && t.classList.contains(this.main.config.disabled);) {
            t = t.previousSibling;
          } else {
            var i = this.list.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
            t = i[i.length - 1];
          }

          if (t && t.classList.contains(this.main.config.optgroupLabel) && (t = null), null === t) {
            var s = e.parentNode;

            if (s.classList.contains(this.main.config.optgroup) && s.previousSibling) {
              var n = s.previousSibling.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
              n.length && (t = n[n.length - 1]);
            }
          }

          t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), a.ensureElementInView(this.list, t));
        }, n.prototype.highlightDown = function () {
          var e = this.list.querySelector("." + this.main.config.highlighted),
              t = null;
          if (e) for (t = e.nextSibling; null !== t && t.classList.contains(this.main.config.disabled);) {
            t = t.nextSibling;
          } else t = this.list.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");

          if (null === t && null !== e) {
            var i = e.parentNode;
            i.classList.contains(this.main.config.optgroup) && i.nextSibling && (t = i.nextSibling.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")"));
          }

          t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), a.ensureElementInView(this.list, t));
        }, n.prototype.listDiv = function () {
          var e = document.createElement("div");
          return e.classList.add(this.main.config.list), e;
        }, n.prototype.options = function (e) {
          void 0 === e && (e = "");
          var t,
              i = this.main.data.filtered || this.main.data.data;
          if ((this.list.innerHTML = "") !== e) return (t = document.createElement("div")).classList.add(this.main.config.option), t.classList.add(this.main.config.disabled), t.innerHTML = e, void this.list.appendChild(t);
          if (this.main.config.isAjax && this.main.config.isSearching) return (t = document.createElement("div")).classList.add(this.main.config.option), t.classList.add(this.main.config.disabled), t.innerHTML = this.main.config.searchingText, void this.list.appendChild(t);

          if (0 === i.length) {
            var s = document.createElement("div");
            return s.classList.add(this.main.config.option), s.classList.add(this.main.config.disabled), s.innerHTML = this.main.config.searchText, void this.list.appendChild(s);
          }

          for (var n = function n(e) {
            if (e.hasOwnProperty("label")) {
              var t = e,
                  n = document.createElement("div");
              n.classList.add(c.main.config.optgroup);
              var i = document.createElement("div");
              i.classList.add(c.main.config.optgroupLabel), c.main.config.selectByGroup && c.main.config.isMultiple && i.classList.add(c.main.config.optgroupLabelSelectable), i.innerHTML = t.label, n.appendChild(i);
              var s = t.options;

              if (s) {
                for (var a = 0, l = s; a < l.length; a++) {
                  var o = l[a];
                  n.appendChild(c.option(o));
                }

                if (c.main.config.selectByGroup && c.main.config.isMultiple) {
                  var r = c;
                  i.addEventListener("click", function (e) {
                    e.preventDefault(), e.stopPropagation();

                    for (var t = 0, i = n.children; t < i.length; t++) {
                      var s = i[t];
                      -1 !== s.className.indexOf(r.main.config.option) && s.click();
                    }
                  });
                }
              }

              c.list.appendChild(n);
            } else c.list.appendChild(c.option(e));
          }, c = this, a = 0, l = i; a < l.length; a++) {
            n(l[a]);
          }
        }, n.prototype.option = function (r) {
          if (r.placeholder) {
            var e = document.createElement("div");
            return e.classList.add(this.main.config.option), e.classList.add(this.main.config.hide), e;
          }

          var t = document.createElement("div");
          t.classList.add(this.main.config.option), r.class && r.class.split(" ").forEach(function (e) {
            t.classList.add(e);
          }), r.style && (t.style.cssText = r.style);
          var c = this.main.data.getSelected();
          t.dataset.id = r.id, this.main.config.searchHighlight && this.main.slim && r.innerHTML && "" !== this.main.slim.search.input.value.trim() ? t.innerHTML = a.highlight(r.innerHTML, this.main.slim.search.input.value, this.main.config.searchHighlighter) : r.innerHTML && (t.innerHTML = r.innerHTML), this.main.config.showOptionTooltips && t.textContent && t.setAttribute("title", t.textContent);
          var h = this;
          t.addEventListener("click", function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = this.dataset.id;

            if (!0 === r.selected && h.main.config.allowDeselectOption) {
              var i = !1;

              if (h.main.beforeOnChange && h.main.config.isMultiple || (i = !0), h.main.beforeOnChange && h.main.config.isMultiple) {
                for (var s = h.main.data.getSelected(), n = JSON.parse(JSON.stringify(s)), a = 0; a < n.length; a++) {
                  n[a].id === t && n.splice(a, 1);
                }

                !1 !== h.main.beforeOnChange(n) && (i = !0);
              }

              i && (h.main.config.isMultiple ? (h.main.data.removeFromSelected(t, "id"), h.main.render(), h.main.select.setValue(), h.main.data.onDataChange()) : h.main.set(""));
            } else {
              if (r.disabled || r.selected) return;
              if (h.main.config.limit && Array.isArray(c) && h.main.config.limit <= c.length) return;

              if (h.main.beforeOnChange) {
                var l = void 0,
                    o = JSON.parse(JSON.stringify(h.main.data.getObjectFromData(t)));
                o.selected = !0, h.main.config.isMultiple ? (l = JSON.parse(JSON.stringify(c))).push(o) : l = JSON.parse(JSON.stringify(o)), !1 !== h.main.beforeOnChange(l) && h.main.set(t, "id", h.main.config.closeOnSelect);
              } else h.main.set(t, "id", h.main.config.closeOnSelect);
            }
          });
          var i = c && a.isValueInArrayOfObjects(c, "id", r.id);
          return (r.disabled || i) && (t.onclick = null, h.main.config.allowDeselectOption || t.classList.add(this.main.config.disabled), h.main.config.hideSelectedOption && t.classList.add(this.main.config.hide)), i ? t.classList.add(this.main.config.optionSelected) : t.classList.remove(this.main.config.optionSelected), t;
        }, n);

        function n(e) {
          this.main = e.main, this.container = this.containerDiv(), this.content = this.contentDiv(), this.search = this.searchDiv(), this.list = this.listDiv(), this.options(), this.singleSelected = null, this.multiSelected = null, this.main.config.isMultiple ? (this.multiSelected = this.multiSelectedDiv(), this.multiSelected && this.container.appendChild(this.multiSelected.container)) : (this.singleSelected = this.singleSelectedDiv(), this.container.appendChild(this.singleSelected.container)), this.container.appendChild(this.content), this.content.appendChild(this.search.container), this.content.appendChild(this.list);
        }

        t.Slim = s;
      }], n.c = s, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: i
        });
      }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var s in t) {
          n.d(i, s, function (e) {
            return t[e];
          }.bind(null, s));
        }
        return i;
      }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        return n.d(t, "a", t), t;
      }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, n.p = "", n(n.s = 2)).default;

      function n(e) {
        if (s[e]) return s[e].exports;
        var t = s[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return i[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
      }

      var i, s;
    });
    /***/
  },

  /***/
  "./src/app/modules/projet/add-info-modal/add-info-modal.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/projet/add-info-modal/add-info-modal.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetAddInfoModalAddInfoModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L2FkZC1pbmZvLW1vZGFsL2FkZC1pbmZvLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/add-info-modal/add-info-modal.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/projet/add-info-modal/add-info-modal.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AddInfoModalComponent */

  /***/
  function srcAppModulesProjetAddInfoModalAddInfoModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddInfoModalComponent", function () {
      return AddInfoModalComponent;
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


    var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/modules/projet/add-info-modal/modal.service.ts");

    var AddInfoModalComponent =
    /*#__PURE__*/
    function () {
      function AddInfoModalComponent(modalService, el) {
        _classCallCheck(this, AddInfoModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(AddInfoModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'app-add-info-modal') {
              _this2.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('app-add-info-modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('app-add-info-modal-open');
        }
      }]);

      return AddInfoModalComponent;
    }();

    AddInfoModalComponent.ctorParameters = function () {
      return [{
        type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddInfoModalComponent.prototype, "id", void 0);
    AddInfoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-info-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-info-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/add-info-modal/add-info-modal.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-info-modal.component.css */
      "./src/app/modules/projet/add-info-modal/add-info-modal.component.css")).default]
    })], AddInfoModalComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/add-info-modal/modal.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/projet/add-info-modal/modal.service.ts ***!
    \****************************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppModulesProjetAddInfoModalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalService =
    /*#__PURE__*/
    function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModalService);
    /***/
  },

  /***/
  "./src/app/modules/projet/mes-partenaires/mes-partenaires.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/projet/mes-partenaires/mes-partenaires.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetMesPartenairesMesPartenairesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "legend {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  width: 35%;\n  color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px 5px 5px 10px;\n  background-color: #1F497D;\n}\n\n.FixedHeightContainer {\n  float: right;\n  height: 250px;\n  width: 100%;\n  padding: 3px;\n}\n\n.scroll {\n  height: 224px;\n  overflow: auto;\n  background: #fff;\n}\n\nth {\n  color: #D5DDE5;\n  background: #1b1e24;\n  border-bottom: 4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size: 23px;\n  font-weight: 100;\n  padding: 24px;\n}\n\ntr:hover td {\n  background: #005294;\n  color: #FFFFFF;\n  border-top: 1px solid #22262e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaXF1ZS9Xb3Jrc3BhY2UvUFJPSkVDVCBGSU5FWCBET0NLRVIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9wcm9qZXQvbWVzLXBhcnRlbmFpcmVzL21lcy1wYXJ0ZW5haXJlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvbWVzLXBhcnRlbmFpcmVzL21lcy1wYXJ0ZW5haXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2pldC9tZXMtcGFydGVuYWlyZXMvbWVzLXBhcnRlbmFpcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY0OTdEO1xuICB9XG4gIFxuICAuRml4ZWRIZWlnaHRDb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuICBcbiAgLnNjcm9sbCB7XG4gICAgaGVpZ2h0OiAyMjRweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIFxuICB0aCB7XG4gICAgY29sb3I6ICNENURERTU7XG4gICAgYmFja2dyb3VuZDogIzFiMWUyNDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzllYTdhZjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgXG4gIHRyOmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1Mjk0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xuICB9IiwibGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB3aWR0aDogMzUlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY0OTdEO1xufVxuXG4uRml4ZWRIZWlnaHRDb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zY3JvbGwge1xuICBoZWlnaHQ6IDIyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxudGgge1xuICBjb2xvcjogI0Q1RERFNTtcbiAgYmFja2dyb3VuZDogIzFiMWUyNDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM5ZWE3YWY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDNhNDU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzogMjRweDtcbn1cblxudHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiAjMDA1Mjk0O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI2MmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/mes-partenaires/mes-partenaires.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/projet/mes-partenaires/mes-partenaires.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MesPartenairesComponent */

  /***/
  function srcAppModulesProjetMesPartenairesMesPartenairesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesPartenairesComponent", function () {
      return MesPartenairesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MesPartenairesComponent =
    /*#__PURE__*/
    function () {
      function MesPartenairesComponent() {
        _classCallCheck(this, MesPartenairesComponent);
      }

      _createClass(MesPartenairesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MesPartenairesComponent;
    }();

    MesPartenairesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mes-partenaires',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mes-partenaires.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/mes-partenaires/mes-partenaires.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mes-partenaires.component.scss */
      "./src/app/modules/projet/mes-partenaires/mes-partenaires.component.scss")).default]
    })], MesPartenairesComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetMesSoustraitrantsMesSoustraitrantsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L21lcy1zb3VzdHJhaXRyYW50cy9tZXMtc291c3RyYWl0cmFudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MesSoustraitrantsComponent */

  /***/
  function srcAppModulesProjetMesSoustraitrantsMesSoustraitrantsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesSoustraitrantsComponent", function () {
      return MesSoustraitrantsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MesSoustraitrantsComponent =
    /*#__PURE__*/
    function () {
      function MesSoustraitrantsComponent() {
        _classCallCheck(this, MesSoustraitrantsComponent);
      }

      _createClass(MesSoustraitrantsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MesSoustraitrantsComponent;
    }();

    MesSoustraitrantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mes-soustraitrants',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mes-soustraitrants.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mes-soustraitrants.component.scss */
      "./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.scss")).default]
    })], MesSoustraitrantsComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/my-projet-create/my-projet-create.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/projet/my-projet-create/my-projet-create.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetMyProjetCreateMyProjetCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*** Table Styles **/\nlegend {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  width: 35%;\n  color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px 5px 5px 10px;\n  background-color: #3a75c4;\n}\n.table-title h3 {\n  color: #fafafa;\n  font-size: 30px;\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Roboto\", helvetica, arial, sans-serif;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  text-transform: uppercase;\n}\n.table-fill {\n  background: white;\n  border-radius: 3px;\n  border-collapse: collapse;\n  height: 320px;\n  margin: auto;\n  max-width: 600px;\n  padding: 5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\nth {\n  color: #D5DDE5;\n  background: #1b1e24;\n  border-bottom: 4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size: 23px;\n  font-weight: 100;\n  padding: 24px;\n  text-align: left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align: middle;\n}\nth:first-child {\n  border-top-left-radius: 3px;\n}\nth:last-child {\n  border-top-right-radius: 3px;\n  border-right: none;\n}\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom-: 1px solid #C1C3D1;\n  font-size: 16px;\n  font-weight: normal;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\n}\ntr:hover td {\n  background: #3a75c4;\n  color: #FFFFFF;\n  border-top: 1px solid #22262e;\n}\ntr:first-child {\n  border-top: none;\n}\ntr:last-child {\n  border-bottom: none;\n}\ntr:last-child td:first-child {\n  border-bottom-left-radius: 3px;\n}\ntr:last-child td:last-child {\n  border-bottom-right-radius: 3px;\n}\ntd {\n  background: #FFFFFF;\n  padding: 20px;\n  text-align: left;\n  vertical-align: middle;\n  font-weight: 300;\n  font-size: 18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\ntd:last-child {\n  border-right: 0px;\n}\nth.text-left {\n  text-align: left;\n}\nth.text-center {\n  text-align: center;\n}\nth.text-right {\n  text-align: right;\n}\ntd.text-left {\n  text-align: left;\n}\ntd.text-center {\n  text-align: center;\n}\ntd.text-right {\n  text-align: right;\n}\n.FixedHeightContainer {\n  float: right;\n  height: 250px;\n  width: 100%;\n  padding: 3px;\n}\n.scroll {\n  height: 224px;\n  overflow: auto;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaXF1ZS9Xb3Jrc3BhY2UvUFJPSkVDVCBGSU5FWCBET0NLRVIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9wcm9qZXQvbXktcHJvamV0LWNyZWF0ZS9teS1wcm9qZXQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Byb2pldC9teS1wcm9qZXQtY3JlYXRlL215LXByb2pldC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0NGO0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDREY7QURJQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FDREY7QURHRTtFQUNFLDJCQUFBO0FDREo7QURJRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FDSEY7QURNSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDSk47QURRRTtFQUNFLGdCQUFBO0FDTko7QURTRTtFQUNFLG1CQUFBO0FDUEo7QURVTTtFQUNFLDhCQUFBO0FDUlI7QURXTTtFQUNFLCtCQUFBO0FDVFI7QURlQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLCtCQUFBO0FDWkY7QURjRTtFQUNFLGlCQUFBO0FDWko7QURnQkE7RUFDRSxnQkFBQTtBQ2JGO0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjtBRGdCQTtFQUNFLGlCQUFBO0FDYkY7QURnQkE7RUFDRSxnQkFBQTtBQ2JGO0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjtBRGdCQTtFQUNFLGlCQUFBO0FDYkY7QURnQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYkY7QURnQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2pldC9teS1wcm9qZXQtY3JlYXRlL215LXByb2pldC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIFRhYmxlIFN0eWxlcyAqKi9cbmxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgd2lkdGg6IDM1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzVjNDtcbn1cblxuLnRhYmxlLXRpdGxlIHtcbiAgaDMge1xuICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuXG4udGFibGUtZmlsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGhlaWdodDogMzIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogZmxvYXQgNXMgaW5maW5pdGU7XG59XG5cbnRoIHtcbiAgY29sb3I6ICNENURERTU7XG4gIGJhY2tncm91bmQ6ICMxYjFlMjQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjOWVhN2FmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn1cblxudHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MxQzNEMTtcbiAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xuXG4gICY6aG92ZXIge1xuICAgIHRkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMzYTc1YzQ7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG5cbiAgICB0ZCB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG50ZCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIH1cbn1cblxudGgudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudGQudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGQudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLkZpeGVkSGVpZ2h0Q29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iLCIvKioqIFRhYmxlIFN0eWxlcyAqKi9cbmxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgd2lkdGg6IDM1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzVjNDtcbn1cblxuLnRhYmxlLXRpdGxlIGgzIHtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGFibGUtZmlsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGhlaWdodDogMzIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogZmxvYXQgNXMgaW5maW5pdGU7XG59XG5cbnRoIHtcbiAgY29sb3I6ICNENURERTU7XG4gIGJhY2tncm91bmQ6ICMxYjFlMjQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjOWVhN2FmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxudGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG59XG50aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xuICBib3JkZXItYm90dG9tLTogMXB4IHNvbGlkICNDMUMzRDE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG50cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6ICMzYTc1YzQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjYyZTtcbn1cbnRyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbnRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxudHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cbnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG5cbnRkIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XG59XG50ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbnRoLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRoLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRkLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5GaXhlZEhlaWdodENvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnNjcm9sbCB7XG4gIGhlaWdodDogMjI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/my-projet-create/my-projet-create.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/projet/my-projet-create/my-projet-create.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MyProjetCreateComponent */

  /***/
  function srcAppModulesProjetMyProjetCreateMyProjetCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProjetCreateComponent", function () {
      return MyProjetCreateComponent;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _partenaire_partenaire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../partenaire/partenaire.service */
    "./src/app/modules/partenaire/partenaire.service.ts");
    /* harmony import */


    var _employe_employe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../employe/employe.service */
    "./src/app/modules/employe/employe.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var slim_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! slim-select */
    "./node_modules/slim-select/dist/slimselect.min.js");
    /* harmony import */


    var slim_select__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _projet_create_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../projet-create-request */
    "./src/app/modules/projet/projet-create-request.ts");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");
    /* harmony import */


    var _maitre_oeuvrages_maitre_oeuvrages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../maitre-oeuvrages/maitre-oeuvrages.service */
    "./src/app/modules/maitre-oeuvrages/maitre-oeuvrages.service.ts");
    /* harmony import */


    var _soumissionaires_soumissionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../soumissionaires/soumissionaire.service */
    "./src/app/modules/soumissionaires/soumissionaire.service.ts");
    /* harmony import */


    var _add_info_modal_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../add-info-modal/modal.service */
    "./src/app/modules/projet/add-info-modal/modal.service.ts");
    /* harmony import */


    var _secteur_secteur_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../secteur/secteur.service */
    "./src/app/modules/secteur/secteur.service.ts");
    /* harmony import */


    var _controlleur_controlleur_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../controlleur/controlleur.service */
    "./src/app/modules/controlleur/controlleur.service.ts");

    var MyProjetCreateComponent =
    /*#__PURE__*/
    function () {
      function MyProjetCreateComponent(router, fb, partenaireService, employeService, service, maitreOeuvrageService, soumissionaireService, secteurService, controlleurService, modalService) {
        _classCallCheck(this, MyProjetCreateComponent);

        this.router = router;
        this.fb = fb;
        this.partenaireService = partenaireService;
        this.employeService = employeService;
        this.service = service;
        this.maitreOeuvrageService = maitreOeuvrageService;
        this.soumissionaireService = soumissionaireService;
        this.secteurService = secteurService;
        this.controlleurService = controlleurService;
        this.modalService = modalService;
        this.myDatePickerOptions = {
          firstDayOfWeek: 'mo',
          sunHighlight: true,
          inline: false,
          dateFormat: 'dd.mm.yyyy'
        };
        this.natures = ['date', 'numerique', 'décimale', 'chaine de charactère'];
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"];
        this.caracteristiqueTechniques = [];
        this.model = {
          date: {
            year: 2018,
            month: 10,
            day: 9
          }
        };
        this.initForm(); // tslint:disable-next-line: triple-equals

        this.choisir == false;
        this.creer == false;
      }

      _createClass(MyProjetCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line: no-unused-expression
          this.fetchPartenaire();
          this.fetchEmploye();
          this.fetchMaitreOeuvrage();
          this.fetchSoumissionaire();
          this.fetchSecteur();
          this.fetchControlleur();
          $(document).ready(function () {
            $('#multiple-checkboxes').multiselect({
              includeSelectAllOption: true
            });
          });
          new slim_select__WEBPACK_IMPORTED_MODULE_8___default.a({
            select: '#slim-select'
          });
        }
      }, {
        key: "isDate",
        value: function isDate(first) {
          return first === 'date' ? true : false;
        }
      }, {
        key: "choisirMaitreOeuvrage",
        value: function choisirMaitreOeuvrage() {
          this.choisir = true;
          this.creer = false;
        }
      }, {
        key: "creerMaitreOeuvrage",
        value: function creerMaitreOeuvrage() {
          this.choisir = false;
          this.creer = true;
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.fGroup = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numeroProjet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateDebut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateButoire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            budgetPrevisionel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employeResponsable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partenaires: [''],
            valeur: [''],
            nature: [''],
            libelle: [''],
            maitreoevrage: [''],
            soumissionaire: [''],
            addToMaitreOeuvrade: [''],
            secteur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            controlleur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "addPartenaire",
        value: function addPartenaire(item) {
          this.fGroup.get('partenaires');
        }
      }, {
        key: "addMaitreOeuvrage",
        value: function addMaitreOeuvrage(item) {
          this.fGroup.get('maitreoevrage');
        }
      }, {
        key: "addSoumissionaire",
        value: function addSoumissionaire(item) {
          this.fGroup.get('soumissionaire');
        }
      }, {
        key: "addCaracTechnique",
        value: function addCaracTechnique(libelleD, valeurD, natureD) {
          var caracteristiqueTechniques = {
            libelle: libelleD,
            valeur: valeurD,
            nature: natureD
          };
          this.caracteristiqueTechniques.push(caracteristiqueTechniques);
        }
      }, {
        key: "getSelectedEmploye",
        value: function getSelectedEmploye(item) {
          var _this3 = this;

          var slug = item.toString();
          this.employeService.find(slug).subscribe(function (res) {
            _this3.employe = res._embeded.employe;
          });
        }
      }, {
        key: "fetchPartenaire",
        value: function fetchPartenaire() {
          var _this4 = this;

          this.partenaireService.fetchAll().subscribe(function (res) {
            _this4.partenaires = res._embeded.partenaires;
          });
        }
      }, {
        key: "fetchSecteur",
        value: function fetchSecteur() {
          var _this5 = this;

          this.secteurService.fetchNoPagination().subscribe(function (res) {
            _this5.secteurs = res._embeded.entitys;
          });
        }
      }, {
        key: "fetchControlleur",
        value: function fetchControlleur() {
          var _this6 = this;

          this.controlleurService.fetchNoPagination().subscribe(function (res) {
            _this6.controlleurs = res._embeded.entitys;
          });
        }
      }, {
        key: "fetchEmploye",
        value: function fetchEmploye() {
          var _this7 = this;

          this.employeService.query().subscribe(function (res) {
            _this7.employes = res._embeded.employes;
          });
        }
      }, {
        key: "fetchSoumissionaire",
        value: function fetchSoumissionaire() {
          var _this8 = this;

          this.soumissionaireService.noPagination().subscribe(function (res) {
            _this8.soumissionaires = res._embeded.entitys;
          });
        }
      }, {
        key: "fetchMaitreOeuvrage",
        value: function fetchMaitreOeuvrage() {
          var _this9 = this;

          this.maitreOeuvrageService.noPagination().subscribe(function (res) {
            _this9.maitreOeuvrages = res._embeded.entitys;
          });
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.modalService.open(id);
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }, {
        key: "getCurrentEmployeDetail",
        value: function getCurrentEmployeDetail(slug) {
          var _this10 = this;

          this.employeService.findByUser(slug).subscribe(function (res) {
            _this10.employe = res._embeded.employe;
            _this10.maitreOeuvrage = _this10.employe.direction.institution.slug;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var user = localStorage.getItem(this.env.CONNECTED_USER);
          var jsonInfo = JSON.parse(user);
          var slug = jsonInfo.slug;
          this.getCurrentEmployeDetail(slug);
          var nom = this.fGroup.value.nom;
          var numeroProjet = this.fGroup.value.numeroProjet;
          var description = this.fGroup.value.description;
          var dateDebut = this.fGroup.value.dateDebut;
          var dateFin = this.fGroup.value.dateButoire;
          var budget = this.fGroup.value.budgetPrevisionel;
          var responsable = this.fGroup.value.employeResponsable;
          var partenaires = this.fGroup.value.partenaires;
          var soumissionaire = this.fGroup.value.soumissionaire;
          var maitreDoeuvrage = this.maitreOeuvrage; //;

          var secteur = this.fGroup.value.secteur;
          var controlleur = this.fGroup.value.controlleur; // tslint:disable-next-line: one-variable-per-declaration
          // tslint:disable-next-line: variable-name

          var _data = new _projet_create_request__WEBPACK_IMPORTED_MODULE_9__["ProjetCreateRequest"](nom, numeroProjet, description, dateDebut, dateFin, budget, responsable, partenaires, soumissionaire, maitreDoeuvrage, this.caracteristiqueTechniques, secteur, controlleur);

          this.service.createMyProject(_data).subscribe(function (response) {
            if (response.status) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Succès', response.message, 'success');
            }
          });
        }
      }, {
        key: "form",
        get: function get() {
          return this.fGroup.controls;
        }
      }, {
        key: "p",
        get: function get() {
          return this.fGroup.controls.partenaires;
        }
      }]);

      return MyProjetCreateComponent;
    }();

    MyProjetCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _partenaire_partenaire_service__WEBPACK_IMPORTED_MODULE_5__["PartenaireService"]
      }, {
        type: _employe_employe_service__WEBPACK_IMPORTED_MODULE_6__["EmployeService"]
      }, {
        type: _projet_service__WEBPACK_IMPORTED_MODULE_10__["ProjetService"]
      }, {
        type: _maitre_oeuvrages_maitre_oeuvrages_service__WEBPACK_IMPORTED_MODULE_11__["MaitreOeuvrageService"]
      }, {
        type: _soumissionaires_soumissionaire_service__WEBPACK_IMPORTED_MODULE_12__["SoumissionaireService"]
      }, {
        type: _secteur_secteur_service__WEBPACK_IMPORTED_MODULE_14__["SecteurService"]
      }, {
        type: _controlleur_controlleur_service__WEBPACK_IMPORTED_MODULE_15__["ControlleurService"]
      }, {
        type: _add_info_modal_modal_service__WEBPACK_IMPORTED_MODULE_13__["ModalService"]
      }];
    };

    MyProjetCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-projet-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-projet-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/my-projet-create/my-projet-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-projet-create.component.scss */
      "./src/app/modules/projet/my-projet-create/my-projet-create.component.scss")).default]
    })], MyProjetCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/my-projet/my-projet.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/modules/projet/my-projet/my-projet.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetMyProjetMyProjetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L215LXByb2pldC9teS1wcm9qZXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/my-projet/my-projet.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/projet/my-projet/my-projet.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MyProjetComponent */

  /***/
  function srcAppModulesProjetMyProjetMyProjetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProjetComponent", function () {
      return MyProjetComponent;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _partenaire_partenaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../partenaire/partenaire.service */
    "./src/app/modules/partenaire/partenaire.service.ts");
    /* harmony import */


    var _employe_employe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../employe/employe.service */
    "./src/app/modules/employe/employe.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");
    /* harmony import */


    var _maitre_oeuvrages_maitre_oeuvrages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../maitre-oeuvrages/maitre-oeuvrages.service */
    "./src/app/modules/maitre-oeuvrages/maitre-oeuvrages.service.ts");
    /* harmony import */


    var _soumissionaires_soumissionaire_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../soumissionaires/soumissionaire.service */
    "./src/app/modules/soumissionaires/soumissionaire.service.ts");
    /* harmony import */


    var _secteur_secteur_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../secteur/secteur.service */
    "./src/app/modules/secteur/secteur.service.ts");
    /* harmony import */


    var _controlleur_controlleur_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../controlleur/controlleur.service */
    "./src/app/modules/controlleur/controlleur.service.ts");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng4-loading-spinner */
    "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__);

    var MyProjetComponent =
    /*#__PURE__*/
    function () {
      function MyProjetComponent(service, router, spinnerService, partenaireService, employeService, maitreOeuvrageService, soumissionaireService, secteurService, controlleurService) {
        _classCallCheck(this, MyProjetComponent);

        this.service = service;
        this.router = router;
        this.spinnerService = spinnerService;
        this.partenaireService = partenaireService;
        this.employeService = employeService;
        this.maitreOeuvrageService = maitreOeuvrageService;
        this.soumissionaireService = soumissionaireService;
        this.secteurService = secteurService;
        this.controlleurService = controlleurService;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
      }

      _createClass(MyProjetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          console.log(this.maitreOeuvrage);
          this.getPage(1);
          this.initDisplay(false, null);
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var parsedEmploye = JSON.parse(localStorage.getItem('employe'));
          this.maitreOeuvrage = parsedEmploye.direction.institution.slug;
        }
      }, {
        key: "getCurrentEmployeDetail",
        value: function getCurrentEmployeDetail(slug) {
          var _this11 = this;

          this.employeService.findByUser(slug).subscribe(function (res) {
            _this11.employe = res._embeded.employe;
            _this11.maitreOeuvrage = _this11.employe.direction.institution.slug;
            console.log(_this11.employe, _this11.maitreOeuvrage);
          });
        }
      }, {
        key: "getPage",
        value: function getPage(_page) {
          var _this12 = this;

          this.service.select(this.maitreOeuvrage, _page).subscribe(function (response) {
            _this12.projets = response._embeded.projets.content;
            console.log(_this12.projets);
            _this12.totalElements = response._embeded.projets.totalElements;
            _this12.totalPages = response._embeded.projets.totalPages;
            _this12.last = response._embeded.projets.last;
            _this12.first = response._embeded.projets.first;
            _this12.sort = response._embeded.projets.first;
            _this12.size = response._embeded.projets.size;
            _this12.number = response._embeded.projets.number;
            _this12.numberOfElements = response._embeded.projets.numberOfElements;
            _this12.empty = response._embeded.projets.empty;
            _this12.pageNumber = response._embeded.projets.pageable.pageNumber;
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          // tslint:disable-next-line: variable-name
          var _page = this.pageNumber + 2;

          this.getPage(_page);
        }
      }, {
        key: "show",
        value: function show() {
          var _this13 = this;

          this.spinnerService.show();
          setTimeout(function () {
            return _this13.spinnerService.hide();
          }, 3000);
        }
      }, {
        key: "previewPage",
        value: function previewPage() {
          var _page = this.pageNumber;
          this.getPage(_page);
        }
      }, {
        key: "onDetail",
        value: function onDetail(slug) {
          this.router.navigateByUrl('projets/' + slug);
        }
      }, {
        key: "onEdit",
        value: function onEdit(slug) {
          this.router.navigateByUrl('projets/edit' + slug);
        }
      }, {
        key: "onDelete",
        value: function onDelete(item) {
          var _this14 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le projet ansi que toutes les taches et espace de travail seront supprimer !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              swalWithBootstrapButtons.fire('Succès!', 'Item supprimé avec succès !.', 'success');

              _this14.service.delete(item.slug).subscribe(function (response) {
                var message = response.message;
                var display = true;

                _this14.initDisplay(true, message);

                _this14.getPage(_this14.pageNumber + 1);
              });
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
              swalWithBootstrapButtons.fire('Annuler', '', 'error');
            }
          });
        }
      }, {
        key: "initDisplay",
        value: function initDisplay(display, message) {
          this.display = display;
          this.message = message;
        } // tslint:disable-next-line: use-lifecycle-interface

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initDisplay(false, null);
        }
      }]);

      return MyProjetComponent;
    }();

    MyProjetComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_7__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__["Ng4LoadingSpinnerService"]
      }, {
        type: _partenaire_partenaire_service__WEBPACK_IMPORTED_MODULE_4__["PartenaireService"]
      }, {
        type: _employe_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"]
      }, {
        type: _maitre_oeuvrages_maitre_oeuvrages_service__WEBPACK_IMPORTED_MODULE_8__["MaitreOeuvrageService"]
      }, {
        type: _soumissionaires_soumissionaire_service__WEBPACK_IMPORTED_MODULE_9__["SoumissionaireService"]
      }, {
        type: _secteur_secteur_service__WEBPACK_IMPORTED_MODULE_10__["SecteurService"]
      }, {
        type: _controlleur_controlleur_service__WEBPACK_IMPORTED_MODULE_11__["ControlleurService"]
      }];
    };

    MyProjetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-projet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-projet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/my-projet/my-projet.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-projet.component.css */
      "./src/app/modules/projet/my-projet/my-projet.component.css")).default]
    })], MyProjetComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetBilanFinanceDetailProjetBilanFinanceDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1iaWxhbi1maW5hbmNlLWRldGFpbC9wcm9qZXQtYmlsYW4tZmluYW5jZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ProjetBilanFinanceDetailComponent */

  /***/
  function srcAppModulesProjetProjetBilanFinanceDetailProjetBilanFinanceDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetBilanFinanceDetailComponent", function () {
      return ProjetBilanFinanceDetailComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _financement_financement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../financement/financement.service */
    "./src/app/modules/financement/financement.service.ts");

    var ProjetBilanFinanceDetailComponent =
    /*#__PURE__*/
    function () {
      function ProjetBilanFinanceDetailComponent(service, router, route) {
        _classCallCheck(this, ProjetBilanFinanceDetailComponent);

        this.service = service;
        this.router = router;
        this.route = route;
        this.getSlug();
      }

      _createClass(ProjetBilanFinanceDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
          console.log(this.slug);
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this15 = this;

          this.route.params.subscribe(function (params) {
            _this15.routeParams = params;
            _this15.slug = _this15.routeParams.slug;
          });
        }
      }, {
        key: "getMontant",
        value: function getMontant(montantTotal, montantEncaisse) {
          var resultat = montantTotal - montantEncaisse;
          return resultat > 0 ? resultat : 'Montant à percevoire deja depassé';
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this16 = this;

          this.service.find(slug).subscribe(function (res) {
            _this16.financement = res._embeded.financement;
            console.log(_this16.financement);
          });
        }
      }]);

      return ProjetBilanFinanceDetailComponent;
    }();

    ProjetBilanFinanceDetailComponent.ctorParameters = function () {
      return [{
        type: _financement_financement_service__WEBPACK_IMPORTED_MODULE_3__["FinancementService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjetBilanFinanceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-bilan-finance-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-bilan-finance-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-bilan-finance-detail.component.scss */
      "./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.scss")).default]
    })], ProjetBilanFinanceDetailComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetBilanFinancierProjetBilanFinancierComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nlegend {\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 0px;\n    width: 35%;\n    color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px 5px 5px 10px;\n    background-color: #1F497D;\n}\n\n\n.FixedHeightContainer {\n    float: right;\n    height: 250px;\n    width: 100%;\n    padding: 3px;\n}\n\n\n.scroll {\n    height: 224px;\n    overflow: auto;\n    background: #fff;\n}\n\n\nth {\n    color: #D5DDE5;;\n    background: #1b1e24;\n    border-bottom: 4px solid #9ea7af;\n    border-right: 1px solid #343a45;\n    font-size: 23px;\n    font-weight: 100;\n    padding: 24px;\n}\n\n\ntr:hover td {\n    background: #005294;\n    color: #FFFFFF;\n    border-top: 1px solid #22262e;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWJpbGFuLWZpbmFuY2llci9wcm9qZXQtYmlsYW4tZmluYW5jaWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWJpbGFuLWZpbmFuY2llci9wcm9qZXQtYmlsYW4tZmluYW5jaWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxlZ2VuZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB3aWR0aDogMzUlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGNDk3RDtcbn1cblxuXG4uRml4ZWRIZWlnaHRDb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuXG4uc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDIyNHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbnRoIHtcbiAgICBjb2xvcjogI0Q1RERFNTs7XG4gICAgYmFja2dyb3VuZDogIzFiMWUyNDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzllYTdhZjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmc6IDI0cHg7XG59XG5cbnRyOmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1Mjk0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProjetBilanFinancierComponent */

  /***/
  function srcAppModulesProjetProjetBilanFinancierProjetBilanFinancierComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetBilanFinancierComponent", function () {
      return ProjetBilanFinancierComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");

    var ProjetBilanFinancierComponent =
    /*#__PURE__*/
    function () {
      function ProjetBilanFinancierComponent(projetService, router, route) {
        _classCallCheck(this, ProjetBilanFinancierComponent);

        this.projetService = projetService;
        this.router = router;
        this.route = route;
        this.getSlug();
      }

      _createClass(ProjetBilanFinancierComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this17 = this;

          this.route.params.subscribe(function (params) {
            _this17.routeParams = params;
            _this17.slug = _this17.routeParams.slug;
          });
        }
      }, {
        key: "getMontant",
        value: function getMontant(montantTotal, montantEncaisse) {
          var resultat = montantTotal - montantEncaisse;
          return resultat > 0 ? resultat : 'Montant à percevoire deja depassé';
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this18 = this;

          this.projetService.find(slug).subscribe(function (res) {
            _this18.projet = res._embeded.projet;
            console.log(_this18.projet);
          });
        }
      }, {
        key: "show",
        value: function show(slug) {
          this.router.navigate(['projets/finance/detail/', slug]);
        }
      }]);

      return ProjetBilanFinancierComponent;
    }();

    ProjetBilanFinancierComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjetBilanFinancierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-bilan-financier',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-bilan-financier.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-bilan-financier.component.css */
      "./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.css")).default]
    })], ProjetBilanFinancierComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetBilanRealisationProjetBilanRealisationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1iaWxhbi1yZWFsaXNhdGlvbi9wcm9qZXQtYmlsYW4tcmVhbGlzYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ProjetBilanRealisationComponent */

  /***/
  function srcAppModulesProjetProjetBilanRealisationProjetBilanRealisationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetBilanRealisationComponent", function () {
      return ProjetBilanRealisationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetBilanRealisationComponent =
    /*#__PURE__*/
    function () {
      function ProjetBilanRealisationComponent() {
        _classCallCheck(this, ProjetBilanRealisationComponent);
      }

      _createClass(ProjetBilanRealisationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetBilanRealisationComponent;
    }();

    ProjetBilanRealisationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-bilan-realisation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-bilan-realisation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-bilan-realisation.component.css */
      "./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.css")).default]
    })], ProjetBilanRealisationComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetCreateMaitredoeuvreProjetCreateMaitredoeuvreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1jcmVhdGUtbWFpdHJlZG9ldXZyZS9wcm9qZXQtY3JlYXRlLW1haXRyZWRvZXV2cmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ProjetCreateMaitredoeuvreComponent */

  /***/
  function srcAppModulesProjetProjetCreateMaitredoeuvreProjetCreateMaitredoeuvreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetCreateMaitredoeuvreComponent", function () {
      return ProjetCreateMaitredoeuvreComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProjetCreateMaitredoeuvreComponent =
    /*#__PURE__*/
    function () {
      function ProjetCreateMaitredoeuvreComponent(fb, projetService, router, route) {
        _classCallCheck(this, ProjetCreateMaitredoeuvreComponent);

        this.fb = fb;
        this.projetService = projetService;
        this.router = router;
        this.route = route;
        this.getSlug();
      }

      _createClass(ProjetCreateMaitredoeuvreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
          this.initForm();
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this19 = this;

          this.route.params.subscribe(function (params) {
            _this19.routeParams = params;
            _this19.slug = _this19.routeParams.slug;
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.fGroup = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            responsable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            raisonSociale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            numeroIdFiscal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nomBanque: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            numeroCompte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            codeSwift: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            adresse: [''],
            information: [''],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(15), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(1000)])]
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this20 = this;

          var nom = this.fGroup.value.nom;
          var description = this.fGroup.value.description;
          var responsable = this.fGroup.value.responsable;
          var raisonSociale = this.fGroup.value.raisonSociale;
          var numeroIdFiscal = this.fGroup.value.numeroIdFiscal;
          var nomBanque = this.fGroup.value.nomBanque;
          var numeroCompte = this.fGroup.value.numeroCompte;
          var codeSwift = this.fGroup.value.codeSwift;
          var adresse = this.fGroup.value.adresse;
          var information = this.fGroup.value.information;
          var maitreDoeuvre = {
            nom: nom,
            description: description,
            responsable: responsable,
            raisonSociale: raisonSociale,
            numeroIdFiscal: numeroIdFiscal,
            nomBanque: nomBanque,
            numeroCompte: numeroCompte,
            codeSwift: codeSwift,
            adresse: adresse,
            information: information,
            projetSlug: this.slug
          };
          this.projetService.addMaitreDeouvre(maitreDoeuvre).subscribe(function (res) {
            if (res.status) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Succès', res.message, 'success');

              _this20.router.navigateByUrl('soumissionaires/list');
            } else {}
          });
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this21 = this;

          this.projetService.find(slug).subscribe(function (res) {
            _this21.projet = res._embeded.projet;
            console.log(_this21.projet);
          });
        }
      }]);

      return ProjetCreateMaitredoeuvreComponent;
    }();

    ProjetCreateMaitredoeuvreComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjetCreateMaitredoeuvreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-create-maitredoeuvre',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-create-maitredoeuvre.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-create-maitredoeuvre.component.scss */
      "./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.scss")).default]
    })], ProjetCreateMaitredoeuvreComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-create-request.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/projet/projet-create-request.ts ***!
    \*********************************************************/

  /*! exports provided: ProjetCreateRequest */

  /***/
  function srcAppModulesProjetProjetCreateRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetCreateRequest", function () {
      return ProjetCreateRequest;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProjetCreateRequest = // tslint:disable-next-line: max-line-length
    function ProjetCreateRequest(nom, numeroProjet, description, dateDebut, dateFin, budget, responsable, partenaires, soumissionaire, maitreDoeuvrage, caracteristiqueTechniques, secteur, controllleur) {
      _classCallCheck(this, ProjetCreateRequest);

      this.nom = nom;
      this.numeroProjet = numeroProjet;
      this.description = description;
      this.dateDebut = dateDebut;
      this.dateFin = dateFin;
      this.budget = budget;
      this.responsable = responsable;
      this.partenaires = partenaires;
      this.soumissionaire = soumissionaire;
      this.maitreDoeuvrage = maitreDoeuvrage;
      this.caracteristiqueTechniques = caracteristiqueTechniques;
      this.secteur = secteur;
      this.controllleur = controllleur;
    };
    /***/

  },

  /***/
  "./src/app/modules/projet/projet-create/projet-create.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/projet/projet-create/projet-create.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetCreateProjetCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nlegend {\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 0px;\n    width: 35%;\n    color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px 5px 5px 10px;\n    background-color: #3a75c4;\n}\n\n\n.table-title h3 {\n    color: #fafafa;\n    font-size: 30px;\n    font-weight: 400;\n    font-style: normal;\n    font-family: \"Roboto\", helvetica, arial, sans-serif;\n    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n    text-transform: uppercase;\n}\n\n\n/*** Table Styles **/\n\n\n.table-fill {\n    background: white;\n    border-radius: 3px;\n    border-collapse: collapse;\n    height: 320px;\n    margin: auto;\n    max-width: 600px;\n    padding: 5px;\n    width: 100%;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    -webkit-animation: float 5s infinite;\n            animation: float 5s infinite;\n}\n\n\nth {\n    color: #D5DDE5;;\n    background: #1b1e24;\n    border-bottom: 4px solid #9ea7af;\n    border-right: 1px solid #343a45;\n    font-size: 23px;\n    font-weight: 100;\n    padding: 24px;\n    text-align: left;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    vertical-align: middle;\n}\n\n\nth:first-child {\n    border-top-left-radius: 3px;\n}\n\n\nth:last-child {\n    border-top-right-radius: 3px;\n    border-right: none;\n}\n\n\ntr {\n    border-top: 1px solid #C1C3D1;\n    border-bottom-: 1px solid #C1C3D1;\n    font-size: 16px;\n    font-weight: normal;\n    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\n}\n\n\ntr:hover td {\n    background: #3a75c4;\n    color: #FFFFFF;\n    border-top: 1px solid #22262e;\n}\n\n\ntr:first-child {\n    border-top: none;\n}\n\n\ntr:last-child {\n    border-bottom: none;\n}\n\n\ntr:nth-child(odd) td {\n}\n\n\ntr:nth-child(odd):hover td {\n}\n\n\ntr:last-child td:first-child {\n    border-bottom-left-radius: 3px;\n}\n\n\ntr:last-child td:last-child {\n    border-bottom-right-radius: 3px;\n}\n\n\ntd {\n    background: #FFFFFF;\n    padding: 20px;\n    text-align: left;\n    vertical-align: middle;\n    font-weight: 300;\n    font-size: 18px;\n    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n    border-right: 1px solid #C1C3D1;\n}\n\n\ntd:last-child {\n    border-right: 0px;\n}\n\n\nth.text-left {\n    text-align: left;\n}\n\n\nth.text-center {\n    text-align: center;\n}\n\n\nth.text-right {\n    text-align: right;\n}\n\n\ntd.text-left {\n    text-align: left;\n}\n\n\ntd.text-center {\n    text-align: center;\n}\n\n\ntd.text-right {\n    text-align: right;\n}\n\n\n.FixedHeightContainer {\n    float: right;\n    height: 250px;\n    width: 100%;\n    padding: 3px;\n}\n\n\n.scroll {\n    height: 224px;\n    overflow: auto;\n    background: #fff;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWNyZWF0ZS9wcm9qZXQtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCw2Q0FBNkM7SUFDN0MseUJBQXlCO0FBQzdCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwrQ0FBK0M7QUFDbkQ7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3QywrQkFBK0I7QUFDbkM7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2pldC9wcm9qZXQtY3JlYXRlL3Byb2pldC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubGVnZW5kIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E3NWM0O1xufVxuXG5cbi50YWJsZS10aXRsZSBoMyB7XG4gICAgY29sb3I6ICNmYWZhZmE7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qKiogVGFibGUgU3R5bGVzICoqL1xuXG4udGFibGUtZmlsbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYW5pbWF0aW9uOiBmbG9hdCA1cyBpbmZpbml0ZTtcbn1cblxudGgge1xuICAgIGNvbG9yOiAjRDVEREU1OztcbiAgICBiYWNrZ3JvdW5kOiAjMWIxZTI0O1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjOWVhN2FmO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDNhNDU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRoOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG59XG5cbnRoOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50ciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMUMzRDE7XG4gICAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xufVxuXG50cjpob3ZlciB0ZCB7XG4gICAgYmFja2dyb3VuZDogIzNhNzVjNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjYyZTtcbn1cblxudHI6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbnRyOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCk6aG92ZXIgdGQge1xufVxuXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG5cbnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbn1cblxudGQge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XG59XG5cbnRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG50aC50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRoLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG50ZC50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cbi5GaXhlZEhlaWdodENvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG5cbi5zY3JvbGwge1xuICAgIGhlaWdodDogMjI0cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-create/projet-create.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/projet/projet-create/projet-create.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjetCreateComponent */

  /***/
  function srcAppModulesProjetProjetCreateProjetCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetCreateComponent", function () {
      return ProjetCreateComponent;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _partenaire_partenaire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../partenaire/partenaire.service */
    "./src/app/modules/partenaire/partenaire.service.ts");
    /* harmony import */


    var _employe_employe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../employe/employe.service */
    "./src/app/modules/employe/employe.service.ts");
    /* harmony import */


    var slim_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! slim-select */
    "./node_modules/slim-select/dist/slimselect.min.js");
    /* harmony import */


    var slim_select__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _projet_create_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../projet-create-request */
    "./src/app/modules/projet/projet-create-request.ts");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");
    /* harmony import */


    var _maitre_oeuvrages_maitre_oeuvrages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../maitre-oeuvrages/maitre-oeuvrages.service */
    "./src/app/modules/maitre-oeuvrages/maitre-oeuvrages.service.ts");
    /* harmony import */


    var _soumissionaires_soumissionaire_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../soumissionaires/soumissionaire.service */
    "./src/app/modules/soumissionaires/soumissionaire.service.ts");
    /* harmony import */


    var _add_info_modal_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../add-info-modal/modal.service */
    "./src/app/modules/projet/add-info-modal/modal.service.ts");

    var ProjetCreateComponent =
    /*#__PURE__*/
    function () {
      function ProjetCreateComponent(router, fb, partenaireService, employeService, service, maitreOeuvrageService, soumissionaireService, modalService) {
        _classCallCheck(this, ProjetCreateComponent);

        this.router = router;
        this.fb = fb;
        this.partenaireService = partenaireService;
        this.employeService = employeService;
        this.service = service;
        this.maitreOeuvrageService = maitreOeuvrageService;
        this.soumissionaireService = soumissionaireService;
        this.modalService = modalService;
        this.myDatePickerOptions = {
          firstDayOfWeek: 'mo',
          sunHighlight: true,
          inline: false,
          dateFormat: 'dd.mm.yyyy'
        };
        this.natures = ['date', 'numerique', 'décimale', 'chaine de charactère'];
        this.caracteristiqueTechniques = [];
        this.model = {
          date: {
            year: 2018,
            month: 10,
            day: 9
          }
        };
        this.initForm(); // tslint:disable-next-line: triple-equals

        this.choisir == false;
        this.creer == false;
      }

      _createClass(ProjetCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line: no-unused-expression
          new slim_select__WEBPACK_IMPORTED_MODULE_7___default.a({
            select: '#slim-select'
          });
          this.fetchPartenaire();
          this.fetchEmploye();
          this.fetchMaitreOeuvrage();
          this.fetchSoumissionaire();
        }
      }, {
        key: "isDate",
        value: function isDate(first) {
          return first === 'date' ? true : false;
        }
      }, {
        key: "choisirMaitreOeuvrage",
        value: function choisirMaitreOeuvrage() {
          this.choisir = true;
          this.creer = false;
        }
      }, {
        key: "creerMaitreOeuvrage",
        value: function creerMaitreOeuvrage() {
          this.choisir = false;
          this.creer = true;
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.fGroup = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numeroProjet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateDebut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateButoire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            budgetPrevisionel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employeResponsable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partenaires: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valeur: [''],
            nature: [''],
            libelle: [''],
            maitreoevrage: [''],
            soumissionaire: [''],
            addToMaitreOeuvrade: ['']
          });
        }
      }, {
        key: "addPartenaire",
        value: function addPartenaire(item) {
          this.fGroup.get('partenaires');
        }
      }, {
        key: "addMaitreOeuvrage",
        value: function addMaitreOeuvrage(item) {
          this.fGroup.get('maitreoevrage');
        }
      }, {
        key: "addSoumissionaire",
        value: function addSoumissionaire(item) {
          this.fGroup.get('soumissionaire');
        }
      }, {
        key: "addCaracTechnique",
        value: function addCaracTechnique(libelleD, valeurD, natureD) {
          var caracteristiqueTechniques = {
            libelle: libelleD,
            valeur: valeurD,
            nature: natureD
          };
          this.caracteristiqueTechniques.push(caracteristiqueTechniques);
          console.log(this.caracteristiqueTechniques);
        }
      }, {
        key: "getSelectedEmploye",
        value: function getSelectedEmploye(item) {
          var _this22 = this;

          var slug = item.toString();
          this.employeService.find(slug).subscribe(function (res) {
            _this22.employe = res._embeded.employe;
            console.log(_this22.employe);
          });
        }
      }, {
        key: "fetchPartenaire",
        value: function fetchPartenaire() {
          var _this23 = this;

          this.partenaireService.fetchAll().subscribe(function (res) {
            _this23.partenaires = res._embeded.partenaires;
          });
        }
      }, {
        key: "fetchEmploye",
        value: function fetchEmploye() {
          var _this24 = this;

          this.employeService.query().subscribe(function (res) {
            _this24.employes = res._embeded.employes;
          });
        }
      }, {
        key: "fetchSoumissionaire",
        value: function fetchSoumissionaire() {
          var _this25 = this;

          this.soumissionaireService.noPagination().subscribe(function (res) {
            _this25.soumissionaires = res._embeded.entitys;
          });
        }
      }, {
        key: "fetchMaitreOeuvrage",
        value: function fetchMaitreOeuvrage() {
          var _this26 = this;

          this.maitreOeuvrageService.noPagination().subscribe(function (res) {
            _this26.maitreOeuvrages = res._embeded.entitys;
          });
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.modalService.open(id);
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }, {
        key: "submit",
        value: function submit() {
          var nom = this.fGroup.value.nom;
          var numeroProjet = this.fGroup.value.numeroProjet;
          var description = this.fGroup.value.description;
          var dateDebut = this.fGroup.value.dateDebut;
          var dateFin = this.fGroup.value.dateButoire;
          var budget = this.fGroup.value.budgetPrevisionel;
          var responsable = this.fGroup.value.employeResponsable;
          var partenaires = this.fGroup.value.partenaires;
          var soumissionaire = this.fGroup.value.soumissionaire;
          var maitreDoeuvrage = this.fGroup.value.maitreoevrage; // tslint:disable-next-line: one-variable-per-declaration
          // tslint:disable-next-line: variable-name

          var _data = new _projet_create_request__WEBPACK_IMPORTED_MODULE_8__["ProjetCreateRequest"](nom, numeroProjet, description, dateDebut, dateFin, budget, responsable, partenaires, soumissionaire, maitreDoeuvrage, this.caracteristiqueTechniques);

          console.log(_data);
          this.service.create(_data).subscribe(function (response) {
            if (response.status) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Succès', response.message, 'success');
            }
          });
        }
      }, {
        key: "form",
        get: function get() {
          return this.fGroup.controls;
        }
      }, {
        key: "p",
        get: function get() {
          return this.fGroup.controls.partenaires;
        }
      }]);

      return ProjetCreateComponent;
    }();

    ProjetCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _partenaire_partenaire_service__WEBPACK_IMPORTED_MODULE_5__["PartenaireService"]
      }, {
        type: _employe_employe_service__WEBPACK_IMPORTED_MODULE_6__["EmployeService"]
      }, {
        type: _projet_service__WEBPACK_IMPORTED_MODULE_9__["ProjetService"]
      }, {
        type: _maitre_oeuvrages_maitre_oeuvrages_service__WEBPACK_IMPORTED_MODULE_10__["MaitreOeuvrageService"]
      }, {
        type: _soumissionaires_soumissionaire_service__WEBPACK_IMPORTED_MODULE_11__["SoumissionaireService"]
      }, {
        type: _add_info_modal_modal_service__WEBPACK_IMPORTED_MODULE_12__["ModalService"]
      }];
    };

    ProjetCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-create/projet-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-create.component.css */
      "./src/app/modules/projet/projet-create/projet-create.component.css")).default]
    })], ProjetCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-detail/projet-detail.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/projet/projet-detail/projet-detail.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetDetailProjetDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.table-title h3 {\r\n    color: #fafafa;\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-family: \"Roboto\", helvetica, arial, sans-serif;\r\n    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n/*** Table Styles **/\r\n\r\n\r\n.table-fill {\r\n    background: white;\r\n    border-radius: 3px;\r\n    border-collapse: collapse;\r\n    height: 320px;\r\n    margin: auto;\r\n    max-width: 600px;\r\n    padding: 5px;\r\n    width: 100%;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n    -webkit-animation: float 5s infinite;\r\n            animation: float 5s infinite;\r\n}\r\n\r\n\r\nth {\r\n    color: #D5DDE5;;\r\n    background: #1b1e24;\r\n    border-bottom: 4px solid #9ea7af;\r\n    border-right: 1px solid #343a45;\r\n    font-size: 23px;\r\n    font-weight: 100;\r\n    padding: 24px;\r\n    text-align: left;\r\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\nth:first-child {\r\n    border-top-left-radius: 3px;\r\n}\r\n\r\n\r\nth:last-child {\r\n    border-top-right-radius: 3px;\r\n    border-right: none;\r\n}\r\n\r\n\r\ntr {\r\n    border-top: 1px solid #C1C3D1;\r\n    border-bottom-: 1px solid #C1C3D1;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\r\n\r\n\r\ntr:hover td {\r\n    background: #005294;\r\n    color: #FFFFFF;\r\n    border-top: 1px solid #22262e;\r\n}\r\n\r\n\r\ntr:first-child {\r\n    border-top: none;\r\n}\r\n\r\n\r\ntr:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n\r\ntr:nth-child(odd) td {\r\n}\r\n\r\n\r\ntr:nth-child(odd):hover td {\r\n}\r\n\r\n\r\ntr:last-child td:first-child {\r\n    border-bottom-left-radius: 3px;\r\n}\r\n\r\n\r\ntr:last-child td:last-child {\r\n    border-bottom-right-radius: 3px;\r\n}\r\n\r\n\r\ntd {\r\n    background: #FFFFFF;\r\n    padding: 20px;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    font-weight: 300;\r\n    font-size: 18px;\r\n    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n    border-right: 1px solid #C1C3D1;\r\n}\r\n\r\n\r\ntd:last-child {\r\n    border-right: 0px;\r\n}\r\n\r\n\r\nth.text-left {\r\n    text-align: left;\r\n}\r\n\r\n\r\nth.text-center {\r\n    text-align: center;\r\n}\r\n\r\n\r\nth.text-right {\r\n    text-align: right;\r\n}\r\n\r\n\r\ntd.text-left {\r\n    text-align: left;\r\n}\r\n\r\n\r\ntd.text-center {\r\n    text-align: center;\r\n}\r\n\r\n\r\ntd.text-right {\r\n    text-align: right;\r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n*:before,\r\n*:after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.c1 {\r\n    display: table-cell;\r\n    padding-right: 10px;\r\n}\r\n\r\n\r\n.c2 {\r\n    display: table-cell;\r\n    padding-left: 10px;\r\n    width: 1%\r\n}\r\n\r\n\r\nlegend {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 0px;\r\n    width: 35%;\r\n    color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    padding: 5px 5px 5px 10px;\r\n    background-color: #1F497D;\r\n}\r\n\r\n\r\n.table-title h3 {\r\n    color: #fafafa;\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-family: \"Roboto\", helvetica, arial, sans-serif;\r\n    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.FixedHeightContainer {\r\n    float: right;\r\n    height: 250px;\r\n    width: 100%;\r\n    padding: 3px;\r\n}\r\n\r\n\r\n.scroll {\r\n    height: 224px;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWRldGFpbC9wcm9qZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCw2Q0FBNkM7SUFDN0MseUJBQXlCO0FBQzdCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwrQ0FBK0M7QUFDbkQ7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3QywrQkFBK0I7QUFDbkM7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQjtBQUNKOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsNkNBQTZDO0lBQzdDLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWRldGFpbC9wcm9qZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLXRpdGxlIGgzIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcbi8qKiogVGFibGUgU3R5bGVzICoqL1xyXG5cclxuLnRhYmxlLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdCA1cyBpbmZpbml0ZTtcclxufVxyXG5cclxudGgge1xyXG4gICAgY29sb3I6ICNENURERTU7O1xyXG4gICAgYmFja2dyb3VuZDogIzFiMWUyNDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjOWVhN2FmO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxudGg6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG59XHJcblxyXG50aDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbnRyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gICAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xyXG59XHJcblxyXG50cjpob3ZlciB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA1Mjk0O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjYyZTtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChvZGQpOmhvdmVyIHRkIHtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbn1cclxuXHJcbnRkOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbnRoLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbnRkLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jMSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmMyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMSVcclxufVxyXG5cclxubGVnZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY0OTdEO1xyXG59XHJcblxyXG5cclxuLnRhYmxlLXRpdGxlIGgzIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLkZpeGVkSGVpZ2h0Q29udGFpbmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuXHJcbi5zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiAyMjRweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-detail/projet-detail.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/projet/projet-detail/projet-detail.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjetDetailComponent */

  /***/
  function srcAppModulesProjetProjetDetailProjetDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetDetailComponent", function () {
      return ProjetDetailComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");

    var ProjetDetailComponent =
    /*#__PURE__*/
    function () {
      function ProjetDetailComponent(projetService, router, route) {
        _classCallCheck(this, ProjetDetailComponent);

        this.projetService = projetService;
        this.router = router;
        this.route = route;
        this.getSlug();
      }

      _createClass(ProjetDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this27 = this;

          this.route.params.subscribe(function (params) {
            _this27.routeParams = params;
            _this27.slug = _this27.routeParams.slug;
          });
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this28 = this;

          this.projetService.find(slug).subscribe(function (res) {
            _this28.projet = res._embeded.projet;
          });
        }
      }, {
        key: "showPartenaires",
        value: function showPartenaires() {}
      }, {
        key: "showMaitreDoeuvrages",
        value: function showMaitreDoeuvrages() {}
      }, {
        key: "gotToEdit",
        value: function gotToEdit(slug) {
          this.router.navigate(['projets/edit', slug]);
        }
      }, {
        key: "goToStat",
        value: function goToStat(slug) {
          this.router.navigate(['projets/statistique/', slug]);
        }
      }, {
        key: "goToRealisation",
        value: function goToRealisation(slug) {
          this.router.navigate(['projets/realisation/', slug]);
        }
      }, {
        key: "goTOFinance",
        value: function goTOFinance(slug) {
          this.router.navigate(['projets/finance/', slug]);
        }
      }, {
        key: "goTOPartenaire",
        value: function goTOPartenaire(slug) {
          this.router.navigate(['projets/mes-partenaires/', slug]);
        }
      }, {
        key: "goTOEnterprise",
        value: function goTOEnterprise(slug) {
          this.router.navigate(['projets/maitredoeuvre/', slug]);
        }
      }, {
        key: "goTOEtapes",
        value: function goTOEtapes(slug) {
          this.router.navigate(['projets/etapes/', slug]);
        }
      }]);

      return ProjetDetailComponent;
    }();

    ProjetDetailComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-detail/projet-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-detail.component.css */
      "./src/app/modules/projet/projet-detail/projet-detail.component.css")).default]
    })], ProjetDetailComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-edit/projet-edit.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/projet/projet-edit/projet-edit.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetEditProjetEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1lZGl0L3Byb2pldC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-edit/projet-edit.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/projet/projet-edit/projet-edit.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProjetEditComponent */

  /***/
  function srcAppModulesProjetProjetEditProjetEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetEditComponent", function () {
      return ProjetEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetEditComponent =
    /*#__PURE__*/
    function () {
      function ProjetEditComponent() {
        _classCallCheck(this, ProjetEditComponent);
      }

      _createClass(ProjetEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetEditComponent;
    }();

    ProjetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-edit/projet-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-edit.component.scss */
      "./src/app/modules/projet/projet-edit/projet-edit.component.scss")).default]
    })], ProjetEditComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-etape-create/projet-etape-create.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-etape-create/projet-etape-create.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetEtapeCreateProjetEtapeCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1ldGFwZS1jcmVhdGUvcHJvamV0LWV0YXBlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-etape-create/projet-etape-create.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-etape-create/projet-etape-create.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProjetEtapeCreateComponent */

  /***/
  function srcAppModulesProjetProjetEtapeCreateProjetEtapeCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetEtapeCreateComponent", function () {
      return ProjetEtapeCreateComponent;
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


    var _projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _etapes_etapes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../etapes/etapes.service */
    "./src/app/modules/etapes/etapes.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _etapes_etapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../etapes/etapes */
    "./src/app/modules/etapes/etapes.ts");

    var ProjetEtapeCreateComponent =
    /*#__PURE__*/
    function () {
      function ProjetEtapeCreateComponent(projetService, router, route, service, fb) {
        _classCallCheck(this, ProjetEtapeCreateComponent);

        this.projetService = projetService;
        this.router = router;
        this.route = route;
        this.service = service;
        this.fb = fb;
        this.datePickerConfig = {};
        this.getSlug();
      }

      _createClass(ProjetEtapeCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
          this.datePickerConfig = {
            locale: 'fr',
            format: 'DD/MM/YYYY',
            monthFormat: 'MMMM, YYYY',
            firstDayOfWeek: 'mo'
          };
          this.initForm();
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this29 = this;

          this.route.params.subscribe(function (params) {
            _this29.routeParams = params;
            _this29.slug = _this29.routeParams.slug;
          });
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this30 = this;

          this.projetService.find(slug).subscribe(function (res) {
            _this30.projet = res._embeded.projet;
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.fGroup = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [''],
            dateDebut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateFin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            groupeSlug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var nom = this.fGroup.value.nom;
          var description = this.fGroup.value.description;
          var dateDebut = this.fGroup.value.dateDebut;
          var dateFin = this.fGroup.value.dateFin;
          var cout = this.fGroup.value.cout;
          var groupeSlug = this.fGroup.value.groupeSlug;
          var date = new Date(dateDebut);
          var request = new _etapes_etapes__WEBPACK_IMPORTED_MODULE_7__["Etape"](null, nom, null, description, dateDebut, dateFin, cout, groupeSlug);
          var data = {
            nom: nom,
            description: description,
            dateDebut: dateDebut,
            dateFin: dateFin,
            cout: cout,
            projetSlug: this.slug
          };
          this.service.createForSpecificProject(data).subscribe(function (response) {
            if (response.status) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Succès', response.message, 'success');
            }
          });
        }
      }]);

      return ProjetEtapeCreateComponent;
    }();

    ProjetEtapeCreateComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_2__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _etapes_etapes_service__WEBPACK_IMPORTED_MODULE_5__["EtapeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ProjetEtapeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-etape-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-etape-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etape-create/projet-etape-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-etape-create.component.scss */
      "./src/app/modules/projet/projet-etape-create/projet-etape-create.component.scss")).default]
    })], ProjetEtapeCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetEtapeDetailProjetEtapeDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "legend {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  width: 35%;\n  color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px 5px 5px 10px;\n  background-color: #1F497D;\n}\n\n.FixedHeightContainer {\n  float: right;\n  height: 250px;\n  width: 100%;\n  padding: 3px;\n}\n\n.scroll {\n  height: 224px;\n  overflow: auto;\n  background: #fff;\n}\n\nth {\n  color: #D5DDE5;\n  background: #1b1e24;\n  border-bottom: 4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size: 23px;\n  font-weight: 100;\n  padding: 24px;\n}\n\ntr:hover td {\n  background: #005294;\n  color: #FFFFFF;\n  border-top: 1px solid #22262e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaXF1ZS9Xb3Jrc3BhY2UvUFJPSkVDVCBGSU5FWCBET0NLRVIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWV0YXBlLWRldGFpbC9wcm9qZXQtZXRhcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Byb2pldC9wcm9qZXQtZXRhcGUtZGV0YWlsL3Byb2pldC1ldGFwZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWV0YXBlLWRldGFpbC9wcm9qZXQtZXRhcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY0OTdEO1xuICB9XG4gIFxuICAuRml4ZWRIZWlnaHRDb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuICBcbiAgLnNjcm9sbCB7XG4gICAgaGVpZ2h0OiAyMjRweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIFxuICB0aCB7XG4gICAgY29sb3I6ICNENURERTU7XG4gICAgYmFja2dyb3VuZDogIzFiMWUyNDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzllYTdhZjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgXG4gIHRyOmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1Mjk0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xuICB9XG4gICIsImxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgd2lkdGg6IDM1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGNDk3RDtcbn1cblxuLkZpeGVkSGVpZ2h0Q29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbnRoIHtcbiAgY29sb3I6ICNENURERTU7XG4gIGJhY2tncm91bmQ6ICMxYjFlMjQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjOWVhN2FmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbnRyOmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogIzAwNTI5NDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProjetEtapeDetailComponent */

  /***/
  function srcAppModulesProjetProjetEtapeDetailProjetEtapeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetEtapeDetailComponent", function () {
      return ProjetEtapeDetailComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _etapes_etapes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../etapes/etapes.service */
    "./src/app/modules/etapes/etapes.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var ProjetEtapeDetailComponent =
    /*#__PURE__*/
    function () {
      function ProjetEtapeDetailComponent(service, router, route) {
        _classCallCheck(this, ProjetEtapeDetailComponent);

        this.service = service;
        this.router = router;
        this.route = route;
      }

      _createClass(ProjetEtapeDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this31 = this;

          this.service.find(slug).subscribe(function (res) {
            _this31.etape = res._embeded.etape;
            console.log(_this31.etape);
          });
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this32 = this;

          this.route.params.subscribe(function (params) {
            _this32.routeParams = params;
            _this32.slug = _this32.routeParams.slug;
          });
        }
      }, {
        key: "show",
        value: function show(slug) {
          this.router.navigateByUrl('projets/etapes/detail/' + slug);
        }
      }, {
        key: "create",
        value: function create(slug) {
          this.router.navigateByUrl('projets/etapes/create/' + this.slug);
        }
      }, {
        key: "edit",
        value: function edit(slug) {
          this.router.navigateByUrl('etapes/edit/' + slug);
        }
      }, {
        key: "delete",
        value: function _delete(item) {
          var _this33 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le etapes ansi que toutes les taches  seront supprimés !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              swalWithBootstrapButtons.fire('Succès!', 'Item supprimé avec succès !.', 'success');

              _this33.service.delete(item).subscribe(function (response) {
                var message = response.message;
                var display = true;
              });
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
              swalWithBootstrapButtons.fire('Annuler', '', 'error');
            }
          });
        }
      }]);

      return ProjetEtapeDetailComponent;
    }();

    ProjetEtapeDetailComponent.ctorParameters = function () {
      return [{
        type: _etapes_etapes_service__WEBPACK_IMPORTED_MODULE_3__["EtapeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjetEtapeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-etape-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-etape-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-etape-detail.component.scss */
      "./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.scss")).default]
    })], ProjetEtapeDetailComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-etapes/projet-etapes.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/projet/projet-etapes/projet-etapes.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetEtapesProjetEtapesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "legend {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  width: 35%;\n  color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px 5px 5px 10px;\n  background-color: #1F497D;\n}\n\n.FixedHeightContainer {\n  float: right;\n  height: 250px;\n  width: 100%;\n  padding: 3px;\n}\n\n.scroll {\n  height: 224px;\n  overflow: auto;\n  background: #fff;\n}\n\nth {\n  color: #D5DDE5;\n  background: #1b1e24;\n  border-bottom: 4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size: 23px;\n  font-weight: 100;\n  padding: 24px;\n}\n\ntr:hover td {\n  background: #005294;\n  color: #FFFFFF;\n  border-top: 1px solid #22262e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaXF1ZS9Xb3Jrc3BhY2UvUFJPSkVDVCBGSU5FWCBET0NLRVIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWV0YXBlcy9wcm9qZXQtZXRhcGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Byb2pldC9wcm9qZXQtZXRhcGVzL3Byb2pldC1ldGFwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWV0YXBlcy9wcm9qZXQtZXRhcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB3aWR0aDogMzUlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY0OTdEO1xufVxuXG4uRml4ZWRIZWlnaHRDb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zY3JvbGwge1xuICBoZWlnaHQ6IDIyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxudGgge1xuICBjb2xvcjogI0Q1RERFNTtcbiAgYmFja2dyb3VuZDogIzFiMWUyNDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM5ZWE3YWY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDNhNDU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzogMjRweDtcbn1cblxudHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiAjMDA1Mjk0O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI2MmU7XG59XG4iLCJsZWdlbmQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjQ5N0Q7XG59XG5cbi5GaXhlZEhlaWdodENvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnNjcm9sbCB7XG4gIGhlaWdodDogMjI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG50aCB7XG4gIGNvbG9yOiAjRDVEREU1O1xuICBiYWNrZ3JvdW5kOiAjMWIxZTI0O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzllYTdhZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG50cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6ICMwMDUyOTQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjYyZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-etapes/projet-etapes.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/projet/projet-etapes/projet-etapes.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjetEtapesComponent */

  /***/
  function srcAppModulesProjetProjetEtapesProjetEtapesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetEtapesComponent", function () {
      return ProjetEtapesComponent;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _etapes_etapes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../etapes/etapes.service */
    "./src/app/modules/etapes/etapes.service.ts");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");

    var ProjetEtapesComponent =
    /*#__PURE__*/
    function () {
      function ProjetEtapesComponent(projetService, service, router, route) {
        _classCallCheck(this, ProjetEtapesComponent);

        this.projetService = projetService;
        this.service = service;
        this.router = router;
        this.route = route;
      }

      _createClass(ProjetEtapesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
          this.getPage(1, this.slug);
        }
      }, {
        key: "parseDate",
        value: function parseDate(date) {
          return date = moment__WEBPACK_IMPORTED_MODULE_4__().format('dd/MM/YYYY');
        }
      }, {
        key: "getPage",
        value: function getPage(_page, projetSlug) {
          var _this34 = this;

          this.service.getByGroup(_page, this.slug).subscribe(function (response) {
            console.log(response);
            _this34.etapes = response._embeded.etapes.content;
            _this34.totalElements = response._embeded.etapes.totalElements;
            _this34.totalPages = response._embeded.etapes.totalPages;
            _this34.last = response._embeded.etapes.last;
            _this34.first = response._embeded.etapes.first;
            _this34.sort = response._embeded.etapes.first;
            _this34.size = response._embeded.etapes.size;
            _this34.number = response._embeded.etapes.number;
            _this34.numberOfElements = response._embeded.etapes.numberOfElements;
            _this34.empty = response._embeded.etapes.empty;
            _this34.pageNumber = response._embeded.etapes.pageable.pageNumber;
          });
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this35 = this;

          this.projetService.find(slug).subscribe(function (res) {
            _this35.projet = res._embeded.projet;
            _this35.etapes = res._embeded.projet.etapes;
          });
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this36 = this;

          this.route.params.subscribe(function (params) {
            _this36.routeParams = params;
            _this36.slug = _this36.routeParams.slug;
          });
        }
      }, {
        key: "show",
        value: function show(slug) {
          this.router.navigateByUrl('projets/etapes/detail/' + slug);
        }
      }, {
        key: "create",
        value: function create(slug) {
          this.router.navigateByUrl('projets/etapes/create/' + this.slug);
        }
      }, {
        key: "edit",
        value: function edit(slug) {
          this.router.navigateByUrl('etapes/edit/' + slug);
        }
      }, {
        key: "delete",
        value: function _delete(item) {
          var _this37 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le etapes ansi que toutes les taches  seront supprimés !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              swalWithBootstrapButtons.fire('Succès!', 'Item supprimé avec succès !.', 'success');

              _this37.service.delete(item).subscribe(function (response) {
                var message = response.message;
                var display = true;

                _this37.initDisplay(true, message);

                _this37.getPage(_this37.pageNumber + 1, _this37.slug);
              });
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
              swalWithBootstrapButtons.fire('Annuler', '', 'error');
            }
          });
        }
      }, {
        key: "initDisplay",
        value: function initDisplay(display, message) {
          this.display = display;
          this.message = message;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initDisplay(false, null);
        }
      }]);

      return ProjetEtapesComponent;
    }();

    ProjetEtapesComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_6__["ProjetService"]
      }, {
        type: _etapes_etapes_service__WEBPACK_IMPORTED_MODULE_5__["EtapeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProjetEtapesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-etapes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-etapes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-etapes/projet-etapes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-etapes.component.scss */
      "./src/app/modules/projet/projet-etapes/projet-etapes.component.scss")).default]
    })], ProjetEtapesComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-list/projet-list.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/projet/projet-list/projet-list.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetListProjetListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.card-deck div.card {\r\n    display: table;\r\n    margin: 16px 1.66666%;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 1 330px;\r\n    background-color: #F5F5F5;\r\n    border-width: 0 0 0 6px;\r\n    border-radius: 6px;\r\n    color: #AAA;\r\n    font-size: 14px;\r\n    font-family: Arial, sans-serif;\r\n    line-height: 18px;\r\n}\r\n\r\ndiv.card-block {\r\n    width: 330px;\r\n    padding: 14px 14px 0 14px;\r\n}\r\n\r\ndiv.card-block > div,\r\n.card-section {\r\n    margin: 8px 0 0 0;\r\n}\r\n\r\n.card-block a:link, span a:link {\r\n    color: #FB8D00;\r\n}\r\n\r\n.card-title {\r\n    max-width: 70%;\r\n}\r\n\r\n.card.attribute {\r\n    border-color: #29D28B;\r\n}\r\n\r\n.card.metric {\r\n    border-color: #00B7FF;\r\n}\r\n\r\n.card-section:first-child {\r\n    margin-top: 0;\r\n}\r\n\r\n.card-section:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.card-block .card-title {\r\n    font-size: 18px;\r\n    color: #404040;\r\n    margin-top: 0;\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.card-heading {\r\n    font-size: 14px;\r\n    color: #8D8D8D;\r\n}\r\n\r\n.card-title,\r\n.card-heading {\r\n    font-weight: bold;\r\n}\r\n\r\n.card-description .card-text {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.card-section > .card-text {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.card-description .card-text ul {\r\n    margin: 0;\r\n}\r\n\r\n.card-description.fullHeight {\r\n    height: 100%;\r\n}\r\n\r\n.cardLink {\r\n    content: \"test\" !important;\r\n    font-family: serif;\r\n    position: absolute;\r\n    top: -12px;\r\n    right: 4px;\r\n    font-size: 34px;\r\n    -webkit-transition: color .25s ease;\r\n    transition: color .25s ease;\r\n}\r\n\r\n.trigger .type {\r\n    display: inline-block;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    padding: 0 6px;\r\n    border-radius: 10px;\r\n    line-height: 15px;\r\n}\r\n\r\n.attribute .trigger .type,\r\n.attributeTip {\r\n    background: #29D28B;\r\n}\r\n\r\n.metric .trigger .type,\r\n.metricTip {\r\n    background: #00B7FF;\r\n}\r\n\r\n.trigger .type {\r\n    color: #fff;\r\n}\r\n\r\n.trigger .type:before {\r\n    font-style: italic;\r\n}\r\n\r\n.attribute .trigger .type:before {\r\n    content: \"Attribute \";\r\n}\r\n\r\n.metric .trigger .type:before {\r\n    content: \"Metric \";\r\n}\r\n\r\n.qtips {\r\n    border-color: transparent;\r\n    font-family: Arial, sans-serif;\r\n    padding: 18px;\r\n    max-width: 338px;\r\n    max-width: 338px;\r\n}\r\n\r\n.qtips.attributeTip {\r\n    min-height: 202px;\r\n    max-height: 202px;\r\n}\r\n\r\nqtips.metricTip {\r\n    min-height: 240px;\r\n    max-height: 240px;\r\n}\r\n\r\n.qtip-content {\r\n    padding: 0;\r\n}\r\n\r\n.qtips h3 {\r\n    color: #404040;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.qtips p {\r\n    color: #fff;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    line-height: 14px;\r\n    margin: 4px 0;\r\n    padding: 0;\r\n}\r\n\r\n.linkTips {\r\n    min-width: 790px;\r\n    max-width: 790px;\r\n}\r\n\r\n.linkTips .qtip-titlebar {\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #404040;\r\n}\r\n\r\n.linkTips .qtip-title {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding: 8px;\r\n    background-color: none;\r\n    color: #404040;\r\n}\r\n\r\n.linkTips .qtip-content {\r\n    font-size: 14px;\r\n    text-align: center;\r\n    padding: 18px;\r\n    color: #aaaaaa;\r\n}\r\n\r\n.linkTips .qtip-content input {\r\n    min-width: 100%;\r\n    border-radius: 5px;\r\n    border: 1px solid #aaaaaa;\r\n    padding: 2px 4px;\r\n}\r\n\r\n.linkTips .qtip-close {\r\n    border: 0;\r\n    background: #fff;\r\n}\r\n\r\n.linkTips .qtip-close span {\r\n    font-size: 30px;\r\n    color: #aaaaaa;\r\n    margin-right: 8px;\r\n}\r\n\r\n.linkTips .qtip-content input:focus {\r\n    outline: none;\r\n}\r\n\r\n.trigger:after,\r\n.trigger .type:after {\r\n    content: \" \\f05a\";\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.trigger {\r\n    position: relative;\r\n    pointer-events: none;\r\n}\r\n\r\n.trigger:after {\r\n    color: #D9D9D9;\r\n    content: \"\\f0d7\";\r\n    font-size: 28px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: -2px;\r\n    pointer-events: all;\r\n    border: 4px solid transparent;\r\n    width: 1em;\r\n    height: 1em;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    line-height: 22px;\r\n    -webkit-transition: color .25s, -webkit-transform .5s ease-in-out;\r\n    transition: color .25s, -webkit-transform .5s ease-in-out;\r\n    transition: transform .5s ease-in-out, color .25s;\r\n    transition: transform .5s ease-in-out, color .25s, -webkit-transform .5s ease-in-out;\r\n}\r\n\r\n.trigger:hover:after,\r\n.cardLink:hover {\r\n    cursor: pointer;\r\n    color: #FB8D00;\r\n}\r\n\r\n.trigger.droppedDown::after {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n\r\n.shadows {\r\n    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .25);\r\n}\r\n\r\n.ellip {\r\n    display: block;\r\n    height: 100%;\r\n}\r\n\r\n.ellip-line {\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    max-width: 100%;\r\n}\r\n\r\n.ellip,\r\n.ellip-line {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\np.type {\r\n    pointer-events: all\r\n}\r\n\r\n.attributeTip {\r\n    border-color: #29D28B;\r\n}\r\n\r\n.attribute,\r\n.metric {\r\n    display: none;\r\n}\r\n\r\n/*!\r\n   * Bootstrap v4.0.0-alpha.3 (https://getbootstrap.com)\r\n   * Copyright 2011-2016 The Bootstrap Authors\r\n   * Copyright 2011-2016 Twitter, Inc.\r\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n   */\r\n\r\n/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */\r\n\r\nhtml {\r\n    font-family: sans-serif;\r\n    -ms-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%\r\n}\r\n\r\nbody {\r\n    margin: 0\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n    display: block\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n    display: inline-block\r\n}\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0\r\n}\r\n\r\nprogress {\r\n    vertical-align: baseline\r\n}\r\n\r\ntemplate,\r\n[hidden] {\r\n    display: none\r\n}\r\n\r\na {\r\n    background-color: transparent\r\n}\r\n\r\na:active,\r\na:hover {\r\n    outline-width: 0\r\n}\r\n\r\nabbr[title] {\r\n    border-bottom: none;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: underline dotted;\r\n            text-decoration: underline dotted\r\n}\r\n\r\nb,\r\nstrong {\r\n    font-weight: inherit\r\n}\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder\r\n}\r\n\r\ndfn {\r\n    font-style: italic\r\n}\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0\r\n}\r\n\r\nmark {\r\n    background-color: #ff0;\r\n    color: #000\r\n}\r\n\r\nsmall {\r\n    font-size: 80%\r\n}\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em\r\n}\r\n\r\nsup {\r\n    top: -0.5em\r\n}\r\n\r\nimg {\r\n    border-style: none\r\n}\r\n\r\nsvg:not(:root) {\r\n    overflow: hidden\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    font-size: 1em\r\n}\r\n\r\nfigure {\r\n    margin: 1em 40px\r\n}\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n    overflow: visible\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font: inherit\r\n}\r\n\r\noptgroup {\r\n    font-weight: bold\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect {\r\n    overflow: visible\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    margin: 0\r\n}\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none\r\n}\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n    cursor: pointer\r\n}\r\n\r\n[disabled] {\r\n    cursor: default\r\n}\r\n\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n    -webkit-appearance: button\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0\r\n}\r\n\r\nbutton:-moz-focusring,\r\ninput:-moz-focusring {\r\n    outline: 1px dotted ButtonText\r\n}\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em\r\n}\r\n\r\nlegend {\r\n    box-sizing: border-box;\r\n    color: inherit;\r\n    display: table;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    white-space: normal\r\n}\r\n\r\ntextarea {\r\n    overflow: auto\r\n}\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n    box-sizing: border-box;\r\n    padding: 0\r\n}\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto\r\n}\r\n\r\n[type=\"search\"] {\r\n    -webkit-appearance: textfield\r\n}\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none\r\n}\r\n\r\n@media print {\r\n    *,\r\n    *::before,\r\n    *::after,\r\n    *::first-letter,\r\n    *::first-line {\r\n        text-shadow: none !important;\r\n        box-shadow: none !important\r\n    }\r\n\r\n    a,\r\n    a:visited {\r\n        text-decoration: underline\r\n    }\r\n\r\n    abbr[title]::after {\r\n        content: \" (\" attr(title) \")\"\r\n    }\r\n\r\n    pre,\r\n    blockquote {\r\n        border: 1px solid #999;\r\n        page-break-inside: avoid\r\n    }\r\n\r\n    thead {\r\n        display: table-header-group\r\n    }\r\n\r\n    tr,\r\n    img {\r\n        page-break-inside: avoid\r\n    }\r\n\r\n    p,\r\n    h2,\r\n    h3 {\r\n        orphans: 3;\r\n        widows: 3\r\n    }\r\n\r\n    h2,\r\n    h3 {\r\n        page-break-after: avoid\r\n    }\r\n\r\n    .navbar {\r\n        display: none\r\n    }\r\n\r\n    .btn > .caret,\r\n    .dropup > .btn > .caret {\r\n        border-top-color: #000 !important\r\n    }\r\n\r\n    .tag {\r\n        border: 1px solid #000\r\n    }\r\n\r\n    .table {\r\n        border-collapse: collapse !important\r\n    }\r\n\r\n    .table td,\r\n    .table th {\r\n        background-color: #fff !important\r\n    }\r\n\r\n    .table-bordered th,\r\n    .table-bordered td {\r\n        border: 1px solid #ddd !important\r\n    }\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit\r\n}\r\n\r\n@-ms-viewport {\r\n    width: device-width\r\n}\r\n\r\nhtml {\r\n    font-size: 16px;\r\n    -ms-overflow-style: scrollbar;\r\n    -webkit-tap-highlight-color: transparent\r\n}\r\n\r\nbody {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #373a3c;\r\n    background-color: #fff\r\n}\r\n\r\n[tabindex=\"-1\"]:focus {\r\n    outline: none !important\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin-top: 0;\r\n    margin-bottom: .5rem\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem\r\n}\r\n\r\nabbr[title],\r\nabbr[data-original-title] {\r\n    cursor: help;\r\n    border-bottom: 1px dotted #818a91\r\n}\r\n\r\naddress {\r\n    margin-bottom: 1rem;\r\n    font-style: normal;\r\n    line-height: inherit\r\n}\r\n\r\nol,\r\nul,\r\ndl {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem\r\n}\r\n\r\nol ol,\r\nul ul,\r\nol ul,\r\nul ol {\r\n    margin-bottom: 0\r\n}\r\n\r\ndt {\r\n    font-weight: bold\r\n}\r\n\r\ndd {\r\n    margin-bottom: .5rem;\r\n    margin-left: 0\r\n}\r\n\r\nblockquote {\r\n    margin: 0 0 1rem\r\n}\r\n\r\na {\r\n    color: #FB8D00;\r\n    text-decoration: none\r\n}\r\n\r\na:focus,\r\na:hover {\r\n    color: #FB8D00;\r\n    text-decoration: underline\r\n}\r\n\r\na:focus {\r\n    outline: 5px auto -webkit-focus-ring-color;\r\n    outline-offset: -2px\r\n}\r\n\r\na:not([href]):not([tabindex]) {\r\n    color: inherit;\r\n    text-decoration: none\r\n}\r\n\r\na:not([href]):not([tabindex]):focus,\r\na:not([href]):not([tabindex]):hover {\r\n    color: inherit;\r\n    text-decoration: none\r\n}\r\n\r\na:not([href]):not([tabindex]):focus {\r\n    outline: none\r\n}\r\n\r\npre {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    overflow: auto\r\n}\r\n\r\nfigure {\r\n    margin: 0 0 1rem\r\n}\r\n\r\nimg {\r\n    vertical-align: middle\r\n}\r\n\r\n[role=\"button\"] {\r\n    cursor: pointer\r\n}\r\n\r\na,\r\narea,\r\nbutton,\r\n[role=\"button\"],\r\ninput,\r\nlabel,\r\nselect,\r\nsummary,\r\ntextarea {\r\n    touch-action: manipulation\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    background-color: transparent\r\n}\r\n\r\ncaption {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    color: #818a91;\r\n    text-align: left;\r\n    caption-side: bottom\r\n}\r\n\r\nth {\r\n    text-align: left\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    margin-bottom: .5rem\r\n}\r\n\r\nbutton:focus {\r\n    outline: 1px dotted;\r\n    outline: 5px auto -webkit-focus-ring-color\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\ntextarea {\r\n    margin: 0;\r\n    line-height: inherit;\r\n    border-radius: 0\r\n}\r\n\r\ninput[type=\"radio\"]:disabled,\r\ninput[type=\"checkbox\"]:disabled {\r\n    cursor: not-allowed\r\n}\r\n\r\ninput[type=\"date\"],\r\ninput[type=\"time\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"month\"] {\r\n    -webkit-appearance: listbox\r\n}\r\n\r\ntextarea {\r\n    resize: vertical\r\n}\r\n\r\nfieldset {\r\n    min-width: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0\r\n}\r\n\r\nlegend {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.5rem;\r\n    line-height: inherit\r\n}\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: none\r\n}\r\n\r\noutput {\r\n    display: inline-block\r\n}\r\n\r\n[hidden] {\r\n    display: none !important\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\n.h1,\r\n.h2,\r\n.h3,\r\n.h4,\r\n.h5,\r\n.h6 {\r\n    margin-bottom: .5rem;\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    line-height: 1.1;\r\n    color: inherit\r\n}\r\n\r\nh1,\r\n.h1 {\r\n    font-size: 2.5rem\r\n}\r\n\r\nh2,\r\n.h2 {\r\n    font-size: 2rem\r\n}\r\n\r\nh3,\r\n.h3 {\r\n    font-size: 1.75rem\r\n}\r\n\r\nh4,\r\n.h4 {\r\n    font-size: 1.5rem\r\n}\r\n\r\nh5,\r\n.h5 {\r\n    font-size: 1.25rem\r\n}\r\n\r\nh6,\r\n.h6 {\r\n    font-size: 1rem\r\n}\r\n\r\n.lead {\r\n    font-size: 1.25rem;\r\n    font-weight: 300\r\n}\r\n\r\n.display-1 {\r\n    font-size: 6rem;\r\n    font-weight: 300\r\n}\r\n\r\n.display-2 {\r\n    font-size: 5.5rem;\r\n    font-weight: 300\r\n}\r\n\r\n.display-3 {\r\n    font-size: 4.5rem;\r\n    font-weight: 300\r\n}\r\n\r\n.display-4 {\r\n    font-size: 3.5rem;\r\n    font-weight: 300\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1)\r\n}\r\n\r\nsmall,\r\n.small {\r\n    font-size: 80%;\r\n    font-weight: normal\r\n}\r\n\r\nmark,\r\n.mark {\r\n    padding: .2em;\r\n    background-color: #fcf8e3\r\n}\r\n\r\n.list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none\r\n}\r\n\r\n.list-inline {\r\n    padding-left: 0;\r\n    list-style: none\r\n}\r\n\r\n.list-inline-item {\r\n    display: inline-block\r\n}\r\n\r\n.list-inline-item:not(:last-child) {\r\n    margin-right: 5px\r\n}\r\n\r\n.initialism {\r\n    font-size: 90%;\r\n    text-transform: uppercase\r\n}\r\n\r\n.blockquote {\r\n    padding: .5rem 1rem;\r\n    margin-bottom: 1rem;\r\n    font-size: 1.25rem;\r\n    border-left: .25rem solid #eceeef\r\n}\r\n\r\n.blockquote-footer {\r\n    display: block;\r\n    font-size: 80%;\r\n    color: #818a91\r\n}\r\n\r\n.blockquote-footer::before {\r\n    content: \"\\2014 \\00A0\"\r\n}\r\n\r\n.blockquote-reverse {\r\n    padding-right: 1rem;\r\n    padding-left: 0;\r\n    text-align: right;\r\n    border-right: .25rem solid #eceeef;\r\n    border-left: 0\r\n}\r\n\r\n.blockquote-reverse .blockquote-footer::before {\r\n    content: \"\"\r\n}\r\n\r\n.blockquote-reverse .blockquote-footer::after {\r\n    content: \"\\00A0 \\2014\"\r\n}\r\n\r\n.img-fluid,\r\n.carousel-inner > .carousel-item > img,\r\n.carousel-inner > .carousel-item > a > img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto\r\n}\r\n\r\n.img-rounded {\r\n    border-radius: .3rem\r\n}\r\n\r\n.img-thumbnail {\r\n    padding: .25rem;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: .25rem;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: auto\r\n}\r\n\r\n.img-circle {\r\n    border-radius: 50%\r\n}\r\n\r\n.figure {\r\n    display: inline-block\r\n}\r\n\r\n.figure-img {\r\n    margin-bottom: .5rem;\r\n    line-height: 1\r\n}\r\n\r\n.figure-caption {\r\n    font-size: 90%;\r\n    color: #818a91\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\r\n}\r\n\r\ncode {\r\n    padding: .2rem .4rem;\r\n    font-size: 90%;\r\n    color: #bd4147;\r\n    background-color: #f7f7f9;\r\n    border-radius: .25rem\r\n}\r\n\r\nkbd {\r\n    padding: .2rem .4rem;\r\n    font-size: 90%;\r\n    color: #fff;\r\n    background-color: #333;\r\n    border-radius: .2rem\r\n}\r\n\r\nkbd kbd {\r\n    padding: 0;\r\n    font-size: 100%;\r\n    font-weight: bold\r\n}\r\n\r\npre {\r\n    display: block;\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    font-size: 90%;\r\n    color: #373a3c\r\n}\r\n\r\npre code {\r\n    padding: 0;\r\n    font-size: inherit;\r\n    color: inherit;\r\n    background-color: transparent;\r\n    border-radius: 0\r\n}\r\n\r\n.pre-scrollable {\r\n    max-height: 340px;\r\n    overflow-y: scroll\r\n}\r\n\r\n.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .container {\r\n        max-width: 576px\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container {\r\n        max-width: 720px\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container {\r\n        max-width: 940px\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1140px\r\n    }\r\n}\r\n\r\n.container-fluid {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px\r\n}\r\n\r\n.row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-left: -15px;\r\n    margin-right: -15px\r\n}\r\n\r\n.col-xs-1,\r\n.col-xs-2,\r\n.col-xs-3,\r\n.col-xs-4,\r\n.col-xs-5,\r\n.col-xs-6,\r\n.col-xs-7,\r\n.col-xs-8,\r\n.col-xs-9,\r\n.col-xs-10,\r\n.col-xs-11,\r\n.col-xs-12,\r\n.col-sm-1,\r\n.col-sm-2,\r\n.col-sm-3,\r\n.col-sm-4,\r\n.col-sm-5,\r\n.col-sm-6,\r\n.col-sm-7,\r\n.col-sm-8,\r\n.col-sm-9,\r\n.col-sm-10,\r\n.col-sm-11,\r\n.col-sm-12,\r\n.col-md-1,\r\n.col-md-2,\r\n.col-md-3,\r\n.col-md-4,\r\n.col-md-5,\r\n.col-md-6,\r\n.col-md-7,\r\n.col-md-8,\r\n.col-md-9,\r\n.col-md-10,\r\n.col-md-11,\r\n.col-md-12,\r\n.col-lg-1,\r\n.col-lg-2,\r\n.col-lg-3,\r\n.col-lg-4,\r\n.col-lg-5,\r\n.col-lg-6,\r\n.col-lg-7,\r\n.col-lg-8,\r\n.col-lg-9,\r\n.col-lg-10,\r\n.col-lg-11,\r\n.col-lg-12,\r\n.col-xl-1,\r\n.col-xl-2,\r\n.col-xl-3,\r\n.col-xl-4,\r\n.col-xl-5,\r\n.col-xl-6,\r\n.col-xl-7,\r\n.col-xl-8,\r\n.col-xl-9,\r\n.col-xl-10,\r\n.col-xl-11,\r\n.col-xl-12 {\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    width: 100%\r\n}\r\n\r\n.col-xs {\r\n    position: relative;\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    max-width: 100%;\r\n    min-height: 1px;\r\n    padding-right: 15px;\r\n    padding-left: 15px\r\n}\r\n\r\n.col-xs-1 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 8.33333%;\r\n    max-width: 8.33333%\r\n}\r\n\r\n.col-xs-2 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 16.66667%;\r\n    max-width: 16.66667%\r\n}\r\n\r\n.col-xs-3 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 25%;\r\n    max-width: 25%\r\n}\r\n\r\n.col-xs-4 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 33.33333%;\r\n    max-width: 33.33333%\r\n}\r\n\r\n.col-xs-5 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 41.66667%;\r\n    max-width: 41.66667%\r\n}\r\n\r\n.col-xs-6 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 50%;\r\n    max-width: 50%\r\n}\r\n\r\n.col-xs-7 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 58.33333%;\r\n    max-width: 58.33333%\r\n}\r\n\r\n.col-xs-8 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 66.66667%;\r\n    max-width: 66.66667%\r\n}\r\n\r\n.col-xs-9 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 75%;\r\n    max-width: 75%\r\n}\r\n\r\n.col-xs-10 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 83.33333%;\r\n    max-width: 83.33333%\r\n}\r\n\r\n.col-xs-11 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 91.66667%;\r\n    max-width: 91.66667%\r\n}\r\n\r\n.col-xs-12 {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n    max-width: 100%\r\n}\r\n\r\n.pull-xs-0 {\r\n    right: auto\r\n}\r\n\r\n.pull-xs-1 {\r\n    right: 8.33333%\r\n}\r\n\r\n.pull-xs-2 {\r\n    right: 16.66667%\r\n}\r\n\r\n.pull-xs-3 {\r\n    right: 25%\r\n}\r\n\r\n.pull-xs-4 {\r\n    right: 33.33333%\r\n}\r\n\r\n.pull-xs-5 {\r\n    right: 41.66667%\r\n}\r\n\r\n.pull-xs-6 {\r\n    right: 50%\r\n}\r\n\r\n.pull-xs-7 {\r\n    right: 58.33333%\r\n}\r\n\r\n.pull-xs-8 {\r\n    right: 66.66667%\r\n}\r\n\r\n.pull-xs-9 {\r\n    right: 75%\r\n}\r\n\r\n.pull-xs-10 {\r\n    right: 83.33333%\r\n}\r\n\r\n.pull-xs-11 {\r\n    right: 91.66667%\r\n}\r\n\r\n.pull-xs-12 {\r\n    right: 100%\r\n}\r\n\r\n.push-xs-0 {\r\n    left: auto\r\n}\r\n\r\n.push-xs-1 {\r\n    left: 8.33333%\r\n}\r\n\r\n.push-xs-2 {\r\n    left: 16.66667%\r\n}\r\n\r\n.push-xs-3 {\r\n    left: 25%\r\n}\r\n\r\n.push-xs-4 {\r\n    left: 33.33333%\r\n}\r\n\r\n.push-xs-5 {\r\n    left: 41.66667%\r\n}\r\n\r\n.push-xs-6 {\r\n    left: 50%\r\n}\r\n\r\n.push-xs-7 {\r\n    left: 58.33333%\r\n}\r\n\r\n.push-xs-8 {\r\n    left: 66.66667%\r\n}\r\n\r\n.push-xs-9 {\r\n    left: 75%\r\n}\r\n\r\n.push-xs-10 {\r\n    left: 83.33333%\r\n}\r\n\r\n.push-xs-11 {\r\n    left: 91.66667%\r\n}\r\n\r\n.push-xs-12 {\r\n    left: 100%\r\n}\r\n\r\n.offset-xs-1 {\r\n    margin-left: 8.33333%\r\n}\r\n\r\n.offset-xs-2 {\r\n    margin-left: 16.66667%\r\n}\r\n\r\n.offset-xs-3 {\r\n    margin-left: 25%\r\n}\r\n\r\n.offset-xs-4 {\r\n    margin-left: 33.33333%\r\n}\r\n\r\n.offset-xs-5 {\r\n    margin-left: 41.66667%\r\n}\r\n\r\n.offset-xs-6 {\r\n    margin-left: 50%\r\n}\r\n\r\n.offset-xs-7 {\r\n    margin-left: 58.33333%\r\n}\r\n\r\n.offset-xs-8 {\r\n    margin-left: 66.66667%\r\n}\r\n\r\n.offset-xs-9 {\r\n    margin-left: 75%\r\n}\r\n\r\n.offset-xs-10 {\r\n    margin-left: 83.33333%\r\n}\r\n\r\n.offset-xs-11 {\r\n    margin-left: 91.66667%\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .col-sm {\r\n        position: relative;\r\n        flex-basis: 0;\r\n        -webkit-box-flex: 1;\r\n                flex-grow: 1;\r\n        max-width: 100%;\r\n        min-height: 1px;\r\n        padding-right: 15px;\r\n        padding-left: 15px\r\n    }\r\n\r\n    .col-sm-1 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 8.33333%;\r\n        max-width: 8.33333%\r\n    }\r\n\r\n    .col-sm-2 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 16.66667%;\r\n        max-width: 16.66667%\r\n    }\r\n\r\n    .col-sm-3 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 25%;\r\n        max-width: 25%\r\n    }\r\n\r\n    .col-sm-4 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33.33333%;\r\n        max-width: 33.33333%\r\n    }\r\n\r\n    .col-sm-5 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 41.66667%;\r\n        max-width: 41.66667%\r\n    }\r\n\r\n    .col-sm-6 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 50%;\r\n        max-width: 50%\r\n    }\r\n\r\n    .col-sm-7 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 58.33333%;\r\n        max-width: 58.33333%\r\n    }\r\n\r\n    .col-sm-8 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 66.66667%;\r\n        max-width: 66.66667%\r\n    }\r\n\r\n    .col-sm-9 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 75%;\r\n        max-width: 75%\r\n    }\r\n\r\n    .col-sm-10 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 83.33333%;\r\n        max-width: 83.33333%\r\n    }\r\n\r\n    .col-sm-11 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 91.66667%;\r\n        max-width: 91.66667%\r\n    }\r\n\r\n    .col-sm-12 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 100%;\r\n        max-width: 100%\r\n    }\r\n\r\n    .pull-sm-0 {\r\n        right: auto\r\n    }\r\n\r\n    .pull-sm-1 {\r\n        right: 8.33333%\r\n    }\r\n\r\n    .pull-sm-2 {\r\n        right: 16.66667%\r\n    }\r\n\r\n    .pull-sm-3 {\r\n        right: 25%\r\n    }\r\n\r\n    .pull-sm-4 {\r\n        right: 33.33333%\r\n    }\r\n\r\n    .pull-sm-5 {\r\n        right: 41.66667%\r\n    }\r\n\r\n    .pull-sm-6 {\r\n        right: 50%\r\n    }\r\n\r\n    .pull-sm-7 {\r\n        right: 58.33333%\r\n    }\r\n\r\n    .pull-sm-8 {\r\n        right: 66.66667%\r\n    }\r\n\r\n    .pull-sm-9 {\r\n        right: 75%\r\n    }\r\n\r\n    .pull-sm-10 {\r\n        right: 83.33333%\r\n    }\r\n\r\n    .pull-sm-11 {\r\n        right: 91.66667%\r\n    }\r\n\r\n    .pull-sm-12 {\r\n        right: 100%\r\n    }\r\n\r\n    .push-sm-0 {\r\n        left: auto\r\n    }\r\n\r\n    .push-sm-1 {\r\n        left: 8.33333%\r\n    }\r\n\r\n    .push-sm-2 {\r\n        left: 16.66667%\r\n    }\r\n\r\n    .push-sm-3 {\r\n        left: 25%\r\n    }\r\n\r\n    .push-sm-4 {\r\n        left: 33.33333%\r\n    }\r\n\r\n    .push-sm-5 {\r\n        left: 41.66667%\r\n    }\r\n\r\n    .push-sm-6 {\r\n        left: 50%\r\n    }\r\n\r\n    .push-sm-7 {\r\n        left: 58.33333%\r\n    }\r\n\r\n    .push-sm-8 {\r\n        left: 66.66667%\r\n    }\r\n\r\n    .push-sm-9 {\r\n        left: 75%\r\n    }\r\n\r\n    .push-sm-10 {\r\n        left: 83.33333%\r\n    }\r\n\r\n    .push-sm-11 {\r\n        left: 91.66667%\r\n    }\r\n\r\n    .push-sm-12 {\r\n        left: 100%\r\n    }\r\n\r\n    .offset-sm-0 {\r\n        margin-left: 0%\r\n    }\r\n\r\n    .offset-sm-1 {\r\n        margin-left: 8.33333%\r\n    }\r\n\r\n    .offset-sm-2 {\r\n        margin-left: 16.66667%\r\n    }\r\n\r\n    .offset-sm-3 {\r\n        margin-left: 25%\r\n    }\r\n\r\n    .offset-sm-4 {\r\n        margin-left: 33.33333%\r\n    }\r\n\r\n    .offset-sm-5 {\r\n        margin-left: 41.66667%\r\n    }\r\n\r\n    .offset-sm-6 {\r\n        margin-left: 50%\r\n    }\r\n\r\n    .offset-sm-7 {\r\n        margin-left: 58.33333%\r\n    }\r\n\r\n    .offset-sm-8 {\r\n        margin-left: 66.66667%\r\n    }\r\n\r\n    .offset-sm-9 {\r\n        margin-left: 75%\r\n    }\r\n\r\n    .offset-sm-10 {\r\n        margin-left: 83.33333%\r\n    }\r\n\r\n    .offset-sm-11 {\r\n        margin-left: 91.66667%\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .col-md {\r\n        position: relative;\r\n        flex-basis: 0;\r\n        -webkit-box-flex: 1;\r\n                flex-grow: 1;\r\n        max-width: 100%;\r\n        min-height: 1px;\r\n        padding-right: 15px;\r\n        padding-left: 15px\r\n    }\r\n\r\n    .col-md-1 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 8.33333%;\r\n        max-width: 8.33333%\r\n    }\r\n\r\n    .col-md-2 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 16.66667%;\r\n        max-width: 16.66667%\r\n    }\r\n\r\n    .col-md-3 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 25%;\r\n        max-width: 25%\r\n    }\r\n\r\n    .col-md-4 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33.33333%;\r\n        max-width: 33.33333%\r\n    }\r\n\r\n    .col-md-5 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 41.66667%;\r\n        max-width: 41.66667%\r\n    }\r\n\r\n    .col-md-6 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 50%;\r\n        max-width: 50%\r\n    }\r\n\r\n    .col-md-7 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 58.33333%;\r\n        max-width: 58.33333%\r\n    }\r\n\r\n    .col-md-8 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 66.66667%;\r\n        max-width: 66.66667%\r\n    }\r\n\r\n    .col-md-9 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 75%;\r\n        max-width: 75%\r\n    }\r\n\r\n    .col-md-10 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 83.33333%;\r\n        max-width: 83.33333%\r\n    }\r\n\r\n    .col-md-11 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 91.66667%;\r\n        max-width: 91.66667%\r\n    }\r\n\r\n    .col-md-12 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 100%;\r\n        max-width: 100%\r\n    }\r\n\r\n    .pull-md-0 {\r\n        right: auto\r\n    }\r\n\r\n    .pull-md-1 {\r\n        right: 8.33333%\r\n    }\r\n\r\n    .pull-md-2 {\r\n        right: 16.66667%\r\n    }\r\n\r\n    .pull-md-3 {\r\n        right: 25%\r\n    }\r\n\r\n    .pull-md-4 {\r\n        right: 33.33333%\r\n    }\r\n\r\n    .pull-md-5 {\r\n        right: 41.66667%\r\n    }\r\n\r\n    .pull-md-6 {\r\n        right: 50%\r\n    }\r\n\r\n    .pull-md-7 {\r\n        right: 58.33333%\r\n    }\r\n\r\n    .pull-md-8 {\r\n        right: 66.66667%\r\n    }\r\n\r\n    .pull-md-9 {\r\n        right: 75%\r\n    }\r\n\r\n    .pull-md-10 {\r\n        right: 83.33333%\r\n    }\r\n\r\n    .pull-md-11 {\r\n        right: 91.66667%\r\n    }\r\n\r\n    .pull-md-12 {\r\n        right: 100%\r\n    }\r\n\r\n    .push-md-0 {\r\n        left: auto\r\n    }\r\n\r\n    .push-md-1 {\r\n        left: 8.33333%\r\n    }\r\n\r\n    .push-md-2 {\r\n        left: 16.66667%\r\n    }\r\n\r\n    .push-md-3 {\r\n        left: 25%\r\n    }\r\n\r\n    .push-md-4 {\r\n        left: 33.33333%\r\n    }\r\n\r\n    .push-md-5 {\r\n        left: 41.66667%\r\n    }\r\n\r\n    .push-md-6 {\r\n        left: 50%\r\n    }\r\n\r\n    .push-md-7 {\r\n        left: 58.33333%\r\n    }\r\n\r\n    .push-md-8 {\r\n        left: 66.66667%\r\n    }\r\n\r\n    .push-md-9 {\r\n        left: 75%\r\n    }\r\n\r\n    .push-md-10 {\r\n        left: 83.33333%\r\n    }\r\n\r\n    .push-md-11 {\r\n        left: 91.66667%\r\n    }\r\n\r\n    .push-md-12 {\r\n        left: 100%\r\n    }\r\n\r\n    .offset-md-0 {\r\n        margin-left: 0%\r\n    }\r\n\r\n    .offset-md-1 {\r\n        margin-left: 8.33333%\r\n    }\r\n\r\n    .offset-md-2 {\r\n        margin-left: 16.66667%\r\n    }\r\n\r\n    .offset-md-3 {\r\n        margin-left: 25%\r\n    }\r\n\r\n    .offset-md-4 {\r\n        margin-left: 33.33333%\r\n    }\r\n\r\n    .offset-md-5 {\r\n        margin-left: 41.66667%\r\n    }\r\n\r\n    .offset-md-6 {\r\n        margin-left: 50%\r\n    }\r\n\r\n    .offset-md-7 {\r\n        margin-left: 58.33333%\r\n    }\r\n\r\n    .offset-md-8 {\r\n        margin-left: 66.66667%\r\n    }\r\n\r\n    .offset-md-9 {\r\n        margin-left: 75%\r\n    }\r\n\r\n    .offset-md-10 {\r\n        margin-left: 83.33333%\r\n    }\r\n\r\n    .offset-md-11 {\r\n        margin-left: 91.66667%\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .col-lg {\r\n        position: relative;\r\n        flex-basis: 0;\r\n        -webkit-box-flex: 1;\r\n                flex-grow: 1;\r\n        max-width: 100%;\r\n        min-height: 1px;\r\n        padding-right: 15px;\r\n        padding-left: 15px\r\n    }\r\n\r\n    .col-lg-1 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 8.33333%;\r\n        max-width: 8.33333%\r\n    }\r\n\r\n    .col-lg-2 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 16.66667%;\r\n        max-width: 16.66667%\r\n    }\r\n\r\n    .col-lg-3 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 25%;\r\n        max-width: 25%\r\n    }\r\n\r\n    .col-lg-4 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33.33333%;\r\n        max-width: 33.33333%\r\n    }\r\n\r\n    .col-lg-5 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 41.66667%;\r\n        max-width: 41.66667%\r\n    }\r\n\r\n    .col-lg-6 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 50%;\r\n        max-width: 50%\r\n    }\r\n\r\n    .col-lg-7 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 58.33333%;\r\n        max-width: 58.33333%\r\n    }\r\n\r\n    .col-lg-8 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 66.66667%;\r\n        max-width: 66.66667%\r\n    }\r\n\r\n    .col-lg-9 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 75%;\r\n        max-width: 75%\r\n    }\r\n\r\n    .col-lg-10 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 83.33333%;\r\n        max-width: 83.33333%\r\n    }\r\n\r\n    .col-lg-11 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 91.66667%;\r\n        max-width: 91.66667%\r\n    }\r\n\r\n    .col-lg-12 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 100%;\r\n        max-width: 100%\r\n    }\r\n\r\n    .pull-lg-0 {\r\n        right: auto\r\n    }\r\n\r\n    .pull-lg-1 {\r\n        right: 8.33333%\r\n    }\r\n\r\n    .pull-lg-2 {\r\n        right: 16.66667%\r\n    }\r\n\r\n    .pull-lg-3 {\r\n        right: 25%\r\n    }\r\n\r\n    .pull-lg-4 {\r\n        right: 33.33333%\r\n    }\r\n\r\n    .pull-lg-5 {\r\n        right: 41.66667%\r\n    }\r\n\r\n    .pull-lg-6 {\r\n        right: 50%\r\n    }\r\n\r\n    .pull-lg-7 {\r\n        right: 58.33333%\r\n    }\r\n\r\n    .pull-lg-8 {\r\n        right: 66.66667%\r\n    }\r\n\r\n    .pull-lg-9 {\r\n        right: 75%\r\n    }\r\n\r\n    .pull-lg-10 {\r\n        right: 83.33333%\r\n    }\r\n\r\n    .pull-lg-11 {\r\n        right: 91.66667%\r\n    }\r\n\r\n    .pull-lg-12 {\r\n        right: 100%\r\n    }\r\n\r\n    .push-lg-0 {\r\n        left: auto\r\n    }\r\n\r\n    .push-lg-1 {\r\n        left: 8.33333%\r\n    }\r\n\r\n    .push-lg-2 {\r\n        left: 16.66667%\r\n    }\r\n\r\n    .push-lg-3 {\r\n        left: 25%\r\n    }\r\n\r\n    .push-lg-4 {\r\n        left: 33.33333%\r\n    }\r\n\r\n    .push-lg-5 {\r\n        left: 41.66667%\r\n    }\r\n\r\n    .push-lg-6 {\r\n        left: 50%\r\n    }\r\n\r\n    .push-lg-7 {\r\n        left: 58.33333%\r\n    }\r\n\r\n    .push-lg-8 {\r\n        left: 66.66667%\r\n    }\r\n\r\n    .push-lg-9 {\r\n        left: 75%\r\n    }\r\n\r\n    .push-lg-10 {\r\n        left: 83.33333%\r\n    }\r\n\r\n    .push-lg-11 {\r\n        left: 91.66667%\r\n    }\r\n\r\n    .push-lg-12 {\r\n        left: 100%\r\n    }\r\n\r\n    .offset-lg-0 {\r\n        margin-left: 0%\r\n    }\r\n\r\n    .offset-lg-1 {\r\n        margin-left: 8.33333%\r\n    }\r\n\r\n    .offset-lg-2 {\r\n        margin-left: 16.66667%\r\n    }\r\n\r\n    .offset-lg-3 {\r\n        margin-left: 25%\r\n    }\r\n\r\n    .offset-lg-4 {\r\n        margin-left: 33.33333%\r\n    }\r\n\r\n    .offset-lg-5 {\r\n        margin-left: 41.66667%\r\n    }\r\n\r\n    .offset-lg-6 {\r\n        margin-left: 50%\r\n    }\r\n\r\n    .offset-lg-7 {\r\n        margin-left: 58.33333%\r\n    }\r\n\r\n    .offset-lg-8 {\r\n        margin-left: 66.66667%\r\n    }\r\n\r\n    .offset-lg-9 {\r\n        margin-left: 75%\r\n    }\r\n\r\n    .offset-lg-10 {\r\n        margin-left: 83.33333%\r\n    }\r\n\r\n    .offset-lg-11 {\r\n        margin-left: 91.66667%\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .col-xl {\r\n        position: relative;\r\n        flex-basis: 0;\r\n        -webkit-box-flex: 1;\r\n                flex-grow: 1;\r\n        max-width: 100%;\r\n        min-height: 1px;\r\n        padding-right: 15px;\r\n        padding-left: 15px\r\n    }\r\n\r\n    .col-xl-1 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 8.33333%;\r\n        max-width: 8.33333%\r\n    }\r\n\r\n    .col-xl-2 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 16.66667%;\r\n        max-width: 16.66667%\r\n    }\r\n\r\n    .col-xl-3 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 25%;\r\n        max-width: 25%\r\n    }\r\n\r\n    .col-xl-4 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33.33333%;\r\n        max-width: 33.33333%\r\n    }\r\n\r\n    .col-xl-5 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 41.66667%;\r\n        max-width: 41.66667%\r\n    }\r\n\r\n    .col-xl-6 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 50%;\r\n        max-width: 50%\r\n    }\r\n\r\n    .col-xl-7 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 58.33333%;\r\n        max-width: 58.33333%\r\n    }\r\n\r\n    .col-xl-8 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 66.66667%;\r\n        max-width: 66.66667%\r\n    }\r\n\r\n    .col-xl-9 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 75%;\r\n        max-width: 75%\r\n    }\r\n\r\n    .col-xl-10 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 83.33333%;\r\n        max-width: 83.33333%\r\n    }\r\n\r\n    .col-xl-11 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 91.66667%;\r\n        max-width: 91.66667%\r\n    }\r\n\r\n    .col-xl-12 {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 100%;\r\n        max-width: 100%\r\n    }\r\n\r\n    .pull-xl-0 {\r\n        right: auto\r\n    }\r\n\r\n    .pull-xl-1 {\r\n        right: 8.33333%\r\n    }\r\n\r\n    .pull-xl-2 {\r\n        right: 16.66667%\r\n    }\r\n\r\n    .pull-xl-3 {\r\n        right: 25%\r\n    }\r\n\r\n    .pull-xl-4 {\r\n        right: 33.33333%\r\n    }\r\n\r\n    .pull-xl-5 {\r\n        right: 41.66667%\r\n    }\r\n\r\n    .pull-xl-6 {\r\n        right: 50%\r\n    }\r\n\r\n    .pull-xl-7 {\r\n        right: 58.33333%\r\n    }\r\n\r\n    .pull-xl-8 {\r\n        right: 66.66667%\r\n    }\r\n\r\n    .pull-xl-9 {\r\n        right: 75%\r\n    }\r\n\r\n    .pull-xl-10 {\r\n        right: 83.33333%\r\n    }\r\n\r\n    .pull-xl-11 {\r\n        right: 91.66667%\r\n    }\r\n\r\n    .pull-xl-12 {\r\n        right: 100%\r\n    }\r\n\r\n    .push-xl-0 {\r\n        left: auto\r\n    }\r\n\r\n    .push-xl-1 {\r\n        left: 8.33333%\r\n    }\r\n\r\n    .push-xl-2 {\r\n        left: 16.66667%\r\n    }\r\n\r\n    .push-xl-3 {\r\n        left: 25%\r\n    }\r\n\r\n    .push-xl-4 {\r\n        left: 33.33333%\r\n    }\r\n\r\n    .push-xl-5 {\r\n        left: 41.66667%\r\n    }\r\n\r\n    .push-xl-6 {\r\n        left: 50%\r\n    }\r\n\r\n    .push-xl-7 {\r\n        left: 58.33333%\r\n    }\r\n\r\n    .push-xl-8 {\r\n        left: 66.66667%\r\n    }\r\n\r\n    .push-xl-9 {\r\n        left: 75%\r\n    }\r\n\r\n    .push-xl-10 {\r\n        left: 83.33333%\r\n    }\r\n\r\n    .push-xl-11 {\r\n        left: 91.66667%\r\n    }\r\n\r\n    .push-xl-12 {\r\n        left: 100%\r\n    }\r\n\r\n    .offset-xl-0 {\r\n        margin-left: 0%\r\n    }\r\n\r\n    .offset-xl-1 {\r\n        margin-left: 8.33333%\r\n    }\r\n\r\n    .offset-xl-2 {\r\n        margin-left: 16.66667%\r\n    }\r\n\r\n    .offset-xl-3 {\r\n        margin-left: 25%\r\n    }\r\n\r\n    .offset-xl-4 {\r\n        margin-left: 33.33333%\r\n    }\r\n\r\n    .offset-xl-5 {\r\n        margin-left: 41.66667%\r\n    }\r\n\r\n    .offset-xl-6 {\r\n        margin-left: 50%\r\n    }\r\n\r\n    .offset-xl-7 {\r\n        margin-left: 58.33333%\r\n    }\r\n\r\n    .offset-xl-8 {\r\n        margin-left: 66.66667%\r\n    }\r\n\r\n    .offset-xl-9 {\r\n        margin-left: 75%\r\n    }\r\n\r\n    .offset-xl-10 {\r\n        margin-left: 83.33333%\r\n    }\r\n\r\n    .offset-xl-11 {\r\n        margin-left: 91.66667%\r\n    }\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.table th,\r\n.table td {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #eceeef\r\n}\r\n\r\n.table thead th {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #eceeef\r\n}\r\n\r\n.table tbody + tbody {\r\n    border-top: 2px solid #eceeef\r\n}\r\n\r\n.table .table {\r\n    background-color: #fff\r\n}\r\n\r\n.table-sm th,\r\n.table-sm td {\r\n    padding: .3rem\r\n}\r\n\r\n.table-bordered {\r\n    border: 1px solid #eceeef\r\n}\r\n\r\n.table-bordered th,\r\n.table-bordered td {\r\n    border: 1px solid #eceeef\r\n}\r\n\r\n.table-bordered thead th,\r\n.table-bordered thead td {\r\n    border-bottom-width: 2px\r\n}\r\n\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: rgba(0, 0, 0, 0.05)\r\n}\r\n\r\n.table-hover tbody tr:hover {\r\n    background-color: rgba(0, 0, 0, 0.075)\r\n}\r\n\r\n.table-active,\r\n.table-active > th,\r\n.table-active > td {\r\n    background-color: rgba(0, 0, 0, 0.075)\r\n}\r\n\r\n.table-hover .table-active:hover {\r\n    background-color: rgba(0, 0, 0, 0.075)\r\n}\r\n\r\n.table-hover .table-active:hover > td,\r\n.table-hover .table-active:hover > th {\r\n    background-color: rgba(0, 0, 0, 0.075)\r\n}\r\n\r\n.table-success,\r\n.table-success > th,\r\n.table-success > td {\r\n    background-color: #dff0d8\r\n}\r\n\r\n.table-hover .table-success:hover {\r\n    background-color: #d0e9c6\r\n}\r\n\r\n.table-hover .table-success:hover > td,\r\n.table-hover .table-success:hover > th {\r\n    background-color: #d0e9c6\r\n}\r\n\r\n.table-info,\r\n.table-info > th,\r\n.table-info > td {\r\n    background-color: #d9edf7\r\n}\r\n\r\n.table-hover .table-info:hover {\r\n    background-color: #c4e3f3\r\n}\r\n\r\n.table-hover .table-info:hover > td,\r\n.table-hover .table-info:hover > th {\r\n    background-color: #c4e3f3\r\n}\r\n\r\n.table-warning,\r\n.table-warning > th,\r\n.table-warning > td {\r\n    background-color: #fcf8e3\r\n}\r\n\r\n.table-hover .table-warning:hover {\r\n    background-color: #faf2cc\r\n}\r\n\r\n.table-hover .table-warning:hover > td,\r\n.table-hover .table-warning:hover > th {\r\n    background-color: #faf2cc\r\n}\r\n\r\n.table-danger,\r\n.table-danger > th,\r\n.table-danger > td {\r\n    background-color: #f2dede\r\n}\r\n\r\n.table-hover .table-danger:hover {\r\n    background-color: #ebcccc\r\n}\r\n\r\n.table-hover .table-danger:hover > td,\r\n.table-hover .table-danger:hover > th {\r\n    background-color: #ebcccc\r\n}\r\n\r\n.thead-inverse th {\r\n    color: #fff;\r\n    background-color: #373a3c\r\n}\r\n\r\n.thead-default th {\r\n    color: #55595c;\r\n    background-color: #eceeef\r\n}\r\n\r\n.table-inverse {\r\n    color: #eceeef;\r\n    background-color: #373a3c\r\n}\r\n\r\n.table-inverse th,\r\n.table-inverse td,\r\n.table-inverse thead th {\r\n    border-color: #55595c\r\n}\r\n\r\n.table-inverse.table-bordered {\r\n    border: 0\r\n}\r\n\r\n.table-responsive {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: .01%;\r\n    overflow-x: auto\r\n}\r\n\r\n.table-reflow thead {\r\n    float: left\r\n}\r\n\r\n.table-reflow tbody {\r\n    display: block;\r\n    white-space: nowrap\r\n}\r\n\r\n.table-reflow th,\r\n.table-reflow td {\r\n    border-top: 1px solid #eceeef;\r\n    border-left: 1px solid #eceeef\r\n}\r\n\r\n.table-reflow th:last-child,\r\n.table-reflow td:last-child {\r\n    border-right: 1px solid #eceeef\r\n}\r\n\r\n.table-reflow thead:last-child tr:last-child th,\r\n.table-reflow thead:last-child tr:last-child td,\r\n.table-reflow tbody:last-child tr:last-child th,\r\n.table-reflow tbody:last-child tr:last-child td,\r\n.table-reflow tfoot:last-child tr:last-child th,\r\n.table-reflow tfoot:last-child tr:last-child td {\r\n    border-bottom: 1px solid #eceeef\r\n}\r\n\r\n.table-reflow tr {\r\n    float: left\r\n}\r\n\r\n.table-reflow tr th,\r\n.table-reflow tr td {\r\n    display: block !important;\r\n    border: 1px solid #eceeef\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    padding: .5rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.25;\r\n    color: #55595c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: .25rem\r\n}\r\n\r\n.form-control::-ms-expand {\r\n    background-color: transparent;\r\n    border: 0\r\n}\r\n\r\n.form-control:focus {\r\n    color: #55595c;\r\n    background-color: #fff;\r\n    border-color: #66afe9;\r\n    outline: none\r\n}\r\n\r\n.form-control::-webkit-input-placeholder {\r\n    color: #999;\r\n    opacity: 1\r\n}\r\n\r\n.form-control::-moz-placeholder {\r\n    color: #999;\r\n    opacity: 1\r\n}\r\n\r\n.form-control::-ms-input-placeholder {\r\n    color: #999;\r\n    opacity: 1\r\n}\r\n\r\n.form-control::placeholder {\r\n    color: #999;\r\n    opacity: 1\r\n}\r\n\r\n.form-control:disabled,\r\n.form-control[readonly] {\r\n    background-color: #eceeef;\r\n    opacity: 1\r\n}\r\n\r\n.form-control:disabled {\r\n    cursor: not-allowed\r\n}\r\n\r\nselect.form-control:not([size]):not([multiple]) {\r\n    height: 2.5rem\r\n}\r\n\r\nselect.form-control:focus::-ms-value {\r\n    color: #55595c;\r\n    background-color: #fff\r\n}\r\n\r\n.form-control-file,\r\n.form-control-range {\r\n    display: block\r\n}\r\n\r\n.col-form-label {\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    margin-bottom: 0\r\n}\r\n\r\n.col-form-label-lg {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1.25rem\r\n}\r\n\r\n.col-form-label-sm {\r\n    padding-top: .25rem;\r\n    padding-bottom: .25rem;\r\n    font-size: .875rem\r\n}\r\n\r\n.col-form-legend {\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem\r\n}\r\n\r\n.form-control-static {\r\n    min-height: 2.5rem;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    margin-bottom: 0\r\n}\r\n\r\n.form-control-static.form-control-sm,\r\n.input-group-sm > .form-control-static.form-control,\r\n.input-group-sm > .form-control-static.input-group-addon,\r\n.input-group-sm > .input-group-btn > .form-control-static.btn,\r\n.form-control-static.form-control-lg,\r\n.input-group-lg > .form-control-static.form-control,\r\n.input-group-lg > .form-control-static.input-group-addon,\r\n.input-group-lg > .input-group-btn > .form-control-static.btn {\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n\r\n.form-control-sm,\r\n.input-group-sm > .form-control,\r\n.input-group-sm > .input-group-addon,\r\n.input-group-sm > .input-group-btn > .btn {\r\n    padding: .25rem .5rem;\r\n    font-size: .875rem;\r\n    border-radius: .2rem\r\n}\r\n\r\nselect.form-control-sm:not([size]):not([multiple]),\r\n.input-group-sm > select.form-control:not([size]):not([multiple]),\r\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\r\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\r\n    height: 1.8125rem\r\n}\r\n\r\n.form-control-lg,\r\n.input-group-lg > .form-control,\r\n.input-group-lg > .input-group-addon,\r\n.input-group-lg > .input-group-btn > .btn {\r\n    padding: .75rem 1.5rem;\r\n    font-size: 1.25rem;\r\n    border-radius: .3rem\r\n}\r\n\r\nselect.form-control-lg:not([size]):not([multiple]),\r\n.input-group-lg > select.form-control:not([size]):not([multiple]),\r\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\r\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\r\n    height: 3.16667rem\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.form-text {\r\n    display: block;\r\n    margin-top: .25rem\r\n}\r\n\r\n.form-check {\r\n    position: relative;\r\n    display: block;\r\n    margin-bottom: .75rem\r\n}\r\n\r\n.form-check + .form-check {\r\n    margin-top: -.25rem\r\n}\r\n\r\n.form-check.disabled .form-check-label {\r\n    color: #818a91;\r\n    cursor: not-allowed\r\n}\r\n\r\n.form-check-label {\r\n    padding-left: 1.25rem;\r\n    margin-bottom: 0;\r\n    cursor: pointer\r\n}\r\n\r\n.form-check-input {\r\n    position: absolute;\r\n    margin-top: .25rem;\r\n    margin-left: -1.25rem\r\n}\r\n\r\n.form-check-input:only-child {\r\n    position: static\r\n}\r\n\r\n.form-check-inline {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-left: 1.25rem;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n    cursor: pointer\r\n}\r\n\r\n.form-check-inline + .form-check-inline {\r\n    margin-left: .75rem\r\n}\r\n\r\n.form-check-inline.disabled {\r\n    cursor: not-allowed\r\n}\r\n\r\n.form-control-feedback {\r\n    margin-top: .25rem\r\n}\r\n\r\n.form-control-success,\r\n.form-control-warning,\r\n.form-control-danger {\r\n    padding-right: 2.25rem;\r\n    background-repeat: no-repeat;\r\n    background-position: center right .625rem;\r\n    background-size: 1.25rem 1.25rem\r\n}\r\n\r\n.has-success .form-control-feedback,\r\n.has-success .form-control-label,\r\n.has-success .radio,\r\n.has-success .checkbox,\r\n.has-success .radio-inline,\r\n.has-success .checkbox-inline,\r\n.has-success.radio label,\r\n.has-success.checkbox label,\r\n.has-success.radio-inline label,\r\n.has-success.checkbox-inline label,\r\n.has-success .custom-control {\r\n    color: #5cb85c\r\n}\r\n\r\n.has-success .form-control {\r\n    border-color: #5cb85c\r\n}\r\n\r\n.has-success .input-group-addon {\r\n    color: #5cb85c;\r\n    border-color: #5cb85c;\r\n    background-color: #eaf6ea\r\n}\r\n\r\n.has-success .form-control-feedback {\r\n    color: #5cb85c\r\n}\r\n\r\n.has-success .form-control-success {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")\r\n}\r\n\r\n.has-warning .form-control-feedback,\r\n.has-warning .form-control-label,\r\n.has-warning .radio,\r\n.has-warning .checkbox,\r\n.has-warning .radio-inline,\r\n.has-warning .checkbox-inline,\r\n.has-warning.radio label,\r\n.has-warning.checkbox label,\r\n.has-warning.radio-inline label,\r\n.has-warning.checkbox-inline label,\r\n.has-warning .custom-control {\r\n    color: #f0ad4e\r\n}\r\n\r\n.has-warning .form-control {\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.has-warning .input-group-addon {\r\n    color: #f0ad4e;\r\n    border-color: #f0ad4e;\r\n    background-color: #fff\r\n}\r\n\r\n.has-warning .form-control-feedback {\r\n    color: #f0ad4e\r\n}\r\n\r\n.has-warning .form-control-warning {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\")\r\n}\r\n\r\n.has-danger .form-control-feedback,\r\n.has-danger .form-control-label,\r\n.has-danger .radio,\r\n.has-danger .checkbox,\r\n.has-danger .radio-inline,\r\n.has-danger .checkbox-inline,\r\n.has-danger.radio label,\r\n.has-danger.checkbox label,\r\n.has-danger.radio-inline label,\r\n.has-danger.checkbox-inline label,\r\n.has-danger .custom-control {\r\n    color: #d9534f\r\n}\r\n\r\n.has-danger .form-control {\r\n    border-color: #d9534f\r\n}\r\n\r\n.has-danger .input-group-addon {\r\n    color: #d9534f;\r\n    border-color: #d9534f;\r\n    background-color: #fdf7f7\r\n}\r\n\r\n.has-danger .form-control-feedback {\r\n    color: #d9534f\r\n}\r\n\r\n.has-danger .form-control-danger {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\")\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .form-inline .form-group {\r\n        display: inline-block;\r\n        margin-bottom: 0;\r\n        vertical-align: middle\r\n    }\r\n\r\n    .form-inline .form-control {\r\n        display: inline-block;\r\n        width: auto;\r\n        vertical-align: middle\r\n    }\r\n\r\n    .form-inline .form-control-static {\r\n        display: inline-block\r\n    }\r\n\r\n    .form-inline .input-group {\r\n        display: inline-table;\r\n        vertical-align: middle\r\n    }\r\n\r\n    .form-inline .input-group .input-group-addon,\r\n    .form-inline .input-group .input-group-btn,\r\n    .form-inline .input-group .form-control {\r\n        width: auto\r\n    }\r\n\r\n    .form-inline .input-group > .form-control {\r\n        width: 100%\r\n    }\r\n\r\n    .form-inline .form-control-label {\r\n        margin-bottom: 0;\r\n        vertical-align: middle\r\n    }\r\n\r\n    .form-inline .form-check {\r\n        display: inline-block;\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        vertical-align: middle\r\n    }\r\n\r\n    .form-inline .form-check-label {\r\n        padding-left: 0\r\n    }\r\n\r\n    .form-inline .form-check-input {\r\n        position: relative;\r\n        margin-left: 0\r\n    }\r\n\r\n    .form-inline .has-feedback .form-control-feedback {\r\n        top: 0\r\n    }\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font-weight: normal;\r\n    line-height: 1.25;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border: 1px solid transparent;\r\n    padding: .5rem 1rem;\r\n    font-size: 1rem;\r\n    border-radius: .25rem\r\n}\r\n\r\n.btn:focus,\r\n.btn.focus,\r\n.btn:active:focus,\r\n.btn:active.focus,\r\n.btn.active:focus,\r\n.btn.active.focus {\r\n    outline: 5px auto -webkit-focus-ring-color;\r\n    outline-offset: -2px\r\n}\r\n\r\n.btn:focus,\r\n.btn:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.btn.focus {\r\n    text-decoration: none\r\n}\r\n\r\n.btn:active,\r\n.btn.active {\r\n    background-image: none;\r\n    outline: 0\r\n}\r\n\r\n.btn.disabled,\r\n.btn:disabled {\r\n    cursor: not-allowed;\r\n    opacity: .65\r\n}\r\n\r\na.btn.disabled,\r\nfieldset[disabled] a.btn {\r\n    pointer-events: none\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-primary:hover {\r\n    color: #fff;\r\n    background-color: #025aa5;\r\n    border-color: #01549b\r\n}\r\n\r\n.btn-primary:focus,\r\n.btn-primary.focus {\r\n    color: #fff;\r\n    background-color: #025aa5;\r\n    border-color: #01549b\r\n}\r\n\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open > .btn-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #025aa5;\r\n    border-color: #01549b;\r\n    background-image: none\r\n}\r\n\r\n.btn-primary:active:hover,\r\n.btn-primary:active:focus,\r\n.btn-primary:active.focus,\r\n.btn-primary.active:hover,\r\n.btn-primary.active:focus,\r\n.btn-primary.active.focus,\r\n.open > .btn-primary.dropdown-toggle:hover,\r\n.open > .btn-primary.dropdown-toggle:focus,\r\n.open > .btn-primary.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #014682;\r\n    border-color: #01315a\r\n}\r\n\r\n.btn-primary.disabled:focus,\r\n.btn-primary.disabled.focus,\r\n.btn-primary:disabled:focus,\r\n.btn-primary:disabled.focus {\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-primary.disabled:hover,\r\n.btn-primary:disabled:hover {\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-secondary {\r\n    color: #373a3c;\r\n    background-color: #fff;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-secondary:hover {\r\n    color: #373a3c;\r\n    background-color: #e6e6e6;\r\n    border-color: #adadad\r\n}\r\n\r\n.btn-secondary:focus,\r\n.btn-secondary.focus {\r\n    color: #373a3c;\r\n    background-color: #e6e6e6;\r\n    border-color: #adadad\r\n}\r\n\r\n.btn-secondary:active,\r\n.btn-secondary.active,\r\n.open > .btn-secondary.dropdown-toggle {\r\n    color: #373a3c;\r\n    background-color: #e6e6e6;\r\n    border-color: #adadad;\r\n    background-image: none\r\n}\r\n\r\n.btn-secondary:active:hover,\r\n.btn-secondary:active:focus,\r\n.btn-secondary:active.focus,\r\n.btn-secondary.active:hover,\r\n.btn-secondary.active:focus,\r\n.btn-secondary.active.focus,\r\n.open > .btn-secondary.dropdown-toggle:hover,\r\n.open > .btn-secondary.dropdown-toggle:focus,\r\n.open > .btn-secondary.dropdown-toggle.focus {\r\n    color: #373a3c;\r\n    background-color: #d4d4d4;\r\n    border-color: #8c8c8c\r\n}\r\n\r\n.btn-secondary.disabled:focus,\r\n.btn-secondary.disabled.focus,\r\n.btn-secondary:disabled:focus,\r\n.btn-secondary:disabled.focus {\r\n    background-color: #fff;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-secondary.disabled:hover,\r\n.btn-secondary:disabled:hover {\r\n    background-color: #fff;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-info {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-info:hover {\r\n    color: #fff;\r\n    background-color: #31b0d5;\r\n    border-color: #2aabd2\r\n}\r\n\r\n.btn-info:focus,\r\n.btn-info.focus {\r\n    color: #fff;\r\n    background-color: #31b0d5;\r\n    border-color: #2aabd2\r\n}\r\n\r\n.btn-info:active,\r\n.btn-info.active,\r\n.open > .btn-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #31b0d5;\r\n    border-color: #2aabd2;\r\n    background-image: none\r\n}\r\n\r\n.btn-info:active:hover,\r\n.btn-info:active:focus,\r\n.btn-info:active.focus,\r\n.btn-info.active:hover,\r\n.btn-info.active:focus,\r\n.btn-info.active.focus,\r\n.open > .btn-info.dropdown-toggle:hover,\r\n.open > .btn-info.dropdown-toggle:focus,\r\n.open > .btn-info.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #269abc;\r\n    border-color: #1f7e9a\r\n}\r\n\r\n.btn-info.disabled:focus,\r\n.btn-info.disabled.focus,\r\n.btn-info:disabled:focus,\r\n.btn-info:disabled.focus {\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-info.disabled:hover,\r\n.btn-info:disabled:hover {\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-success:hover {\r\n    color: #fff;\r\n    background-color: #449d44;\r\n    border-color: #419641\r\n}\r\n\r\n.btn-success:focus,\r\n.btn-success.focus {\r\n    color: #fff;\r\n    background-color: #449d44;\r\n    border-color: #419641\r\n}\r\n\r\n.btn-success:active,\r\n.btn-success.active,\r\n.open > .btn-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #449d44;\r\n    border-color: #419641;\r\n    background-image: none\r\n}\r\n\r\n.btn-success:active:hover,\r\n.btn-success:active:focus,\r\n.btn-success:active.focus,\r\n.btn-success.active:hover,\r\n.btn-success.active:focus,\r\n.btn-success.active.focus,\r\n.open > .btn-success.dropdown-toggle:hover,\r\n.open > .btn-success.dropdown-toggle:focus,\r\n.open > .btn-success.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #398439;\r\n    border-color: #2d672d\r\n}\r\n\r\n.btn-success.disabled:focus,\r\n.btn-success.disabled.focus,\r\n.btn-success:disabled:focus,\r\n.btn-success:disabled.focus {\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-success.disabled:hover,\r\n.btn-success:disabled:hover {\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-warning {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-warning:hover {\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316\r\n}\r\n\r\n.btn-warning:focus,\r\n.btn-warning.focus {\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316\r\n}\r\n\r\n.btn-warning:active,\r\n.btn-warning.active,\r\n.open > .btn-warning.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316;\r\n    background-image: none\r\n}\r\n\r\n.btn-warning:active:hover,\r\n.btn-warning:active:focus,\r\n.btn-warning:active.focus,\r\n.btn-warning.active:hover,\r\n.btn-warning.active:focus,\r\n.btn-warning.active.focus,\r\n.open > .btn-warning.dropdown-toggle:hover,\r\n.open > .btn-warning.dropdown-toggle:focus,\r\n.open > .btn-warning.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #d58512;\r\n    border-color: #b06d0f\r\n}\r\n\r\n.btn-warning.disabled:focus,\r\n.btn-warning.disabled.focus,\r\n.btn-warning:disabled:focus,\r\n.btn-warning:disabled.focus {\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-warning.disabled:hover,\r\n.btn-warning:disabled:hover {\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-danger {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-danger:hover {\r\n    color: #fff;\r\n    background-color: #c9302c;\r\n    border-color: #c12e2a\r\n}\r\n\r\n.btn-danger:focus,\r\n.btn-danger.focus {\r\n    color: #fff;\r\n    background-color: #c9302c;\r\n    border-color: #c12e2a\r\n}\r\n\r\n.btn-danger:active,\r\n.btn-danger.active,\r\n.open > .btn-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #c9302c;\r\n    border-color: #c12e2a;\r\n    background-image: none\r\n}\r\n\r\n.btn-danger:active:hover,\r\n.btn-danger:active:focus,\r\n.btn-danger:active.focus,\r\n.btn-danger.active:hover,\r\n.btn-danger.active:focus,\r\n.btn-danger.active.focus,\r\n.open > .btn-danger.dropdown-toggle:hover,\r\n.open > .btn-danger.dropdown-toggle:focus,\r\n.open > .btn-danger.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #ac2925;\r\n    border-color: #8b211e\r\n}\r\n\r\n.btn-danger.disabled:focus,\r\n.btn-danger.disabled.focus,\r\n.btn-danger:disabled:focus,\r\n.btn-danger:disabled.focus {\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-danger.disabled:hover,\r\n.btn-danger:disabled:hover {\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-outline-primary {\r\n    color: #0275d8;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    color: #fff;\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-outline-primary:focus,\r\n.btn-outline-primary.focus {\r\n    color: #fff;\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-outline-primary:active,\r\n.btn-outline-primary.active,\r\n.open > .btn-outline-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.btn-outline-primary:active:hover,\r\n.btn-outline-primary:active:focus,\r\n.btn-outline-primary:active.focus,\r\n.btn-outline-primary.active:hover,\r\n.btn-outline-primary.active:focus,\r\n.btn-outline-primary.active.focus,\r\n.open > .btn-outline-primary.dropdown-toggle:hover,\r\n.open > .btn-outline-primary.dropdown-toggle:focus,\r\n.open > .btn-outline-primary.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #014682;\r\n    border-color: #01315a\r\n}\r\n\r\n.btn-outline-primary.disabled:focus,\r\n.btn-outline-primary.disabled.focus,\r\n.btn-outline-primary:disabled:focus,\r\n.btn-outline-primary:disabled.focus {\r\n    border-color: #43a7fd\r\n}\r\n\r\n.btn-outline-primary.disabled:hover,\r\n.btn-outline-primary:disabled:hover {\r\n    border-color: #43a7fd\r\n}\r\n\r\n.btn-outline-secondary {\r\n    color: #ccc;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-outline-secondary:hover {\r\n    color: #fff;\r\n    background-color: #ccc;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-outline-secondary:focus,\r\n.btn-outline-secondary.focus {\r\n    color: #fff;\r\n    background-color: #ccc;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-outline-secondary:active,\r\n.btn-outline-secondary.active,\r\n.open > .btn-outline-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #ccc;\r\n    border-color: #ccc\r\n}\r\n\r\n.btn-outline-secondary:active:hover,\r\n.btn-outline-secondary:active:focus,\r\n.btn-outline-secondary:active.focus,\r\n.btn-outline-secondary.active:hover,\r\n.btn-outline-secondary.active:focus,\r\n.btn-outline-secondary.active.focus,\r\n.open > .btn-outline-secondary.dropdown-toggle:hover,\r\n.open > .btn-outline-secondary.dropdown-toggle:focus,\r\n.open > .btn-outline-secondary.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #a1a1a1;\r\n    border-color: #8c8c8c\r\n}\r\n\r\n.btn-outline-secondary.disabled:focus,\r\n.btn-outline-secondary.disabled.focus,\r\n.btn-outline-secondary:disabled:focus,\r\n.btn-outline-secondary:disabled.focus {\r\n    border-color: #fff\r\n}\r\n\r\n.btn-outline-secondary.disabled:hover,\r\n.btn-outline-secondary:disabled:hover {\r\n    border-color: #fff\r\n}\r\n\r\n.btn-outline-info {\r\n    color: #5bc0de;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-outline-info:hover {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-outline-info:focus,\r\n.btn-outline-info.focus {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-outline-info:active,\r\n.btn-outline-info.active,\r\n.open > .btn-outline-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.btn-outline-info:active:hover,\r\n.btn-outline-info:active:focus,\r\n.btn-outline-info:active.focus,\r\n.btn-outline-info.active:hover,\r\n.btn-outline-info.active:focus,\r\n.btn-outline-info.active.focus,\r\n.open > .btn-outline-info.dropdown-toggle:hover,\r\n.open > .btn-outline-info.dropdown-toggle:focus,\r\n.open > .btn-outline-info.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #269abc;\r\n    border-color: #1f7e9a\r\n}\r\n\r\n.btn-outline-info.disabled:focus,\r\n.btn-outline-info.disabled.focus,\r\n.btn-outline-info:disabled:focus,\r\n.btn-outline-info:disabled.focus {\r\n    border-color: #b0e1ef\r\n}\r\n\r\n.btn-outline-info.disabled:hover,\r\n.btn-outline-info:disabled:hover {\r\n    border-color: #b0e1ef\r\n}\r\n\r\n.btn-outline-success {\r\n    color: #5cb85c;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-outline-success:hover {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-outline-success:active,\r\n.btn-outline-success.active,\r\n.open > .btn-outline-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.btn-outline-success:active:hover,\r\n.btn-outline-success:active:focus,\r\n.btn-outline-success:active.focus,\r\n.btn-outline-success.active:hover,\r\n.btn-outline-success.active:focus,\r\n.btn-outline-success.active.focus,\r\n.open > .btn-outline-success.dropdown-toggle:hover,\r\n.open > .btn-outline-success.dropdown-toggle:focus,\r\n.open > .btn-outline-success.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #398439;\r\n    border-color: #2d672d\r\n}\r\n\r\n.btn-outline-success.disabled:focus,\r\n.btn-outline-success.disabled.focus,\r\n.btn-outline-success:disabled:focus,\r\n.btn-outline-success:disabled.focus {\r\n    border-color: #a3d7a3\r\n}\r\n\r\n.btn-outline-success.disabled:hover,\r\n.btn-outline-success:disabled:hover {\r\n    border-color: #a3d7a3\r\n}\r\n\r\n.btn-outline-warning {\r\n    color: #f0ad4e;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-outline-warning:hover {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-outline-warning:focus,\r\n.btn-outline-warning.focus {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-outline-warning:active,\r\n.btn-outline-warning.active,\r\n.open > .btn-outline-warning.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.btn-outline-warning:active:hover,\r\n.btn-outline-warning:active:focus,\r\n.btn-outline-warning:active.focus,\r\n.btn-outline-warning.active:hover,\r\n.btn-outline-warning.active:focus,\r\n.btn-outline-warning.active.focus,\r\n.open > .btn-outline-warning.dropdown-toggle:hover,\r\n.open > .btn-outline-warning.dropdown-toggle:focus,\r\n.open > .btn-outline-warning.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #d58512;\r\n    border-color: #b06d0f\r\n}\r\n\r\n.btn-outline-warning.disabled:focus,\r\n.btn-outline-warning.disabled.focus,\r\n.btn-outline-warning:disabled:focus,\r\n.btn-outline-warning:disabled.focus {\r\n    border-color: #f8d9ac\r\n}\r\n\r\n.btn-outline-warning.disabled:hover,\r\n.btn-outline-warning:disabled:hover {\r\n    border-color: #f8d9ac\r\n}\r\n\r\n.btn-outline-danger {\r\n    color: #d9534f;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-outline-danger:hover {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-outline-danger:focus,\r\n.btn-outline-danger.focus {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-outline-danger:active,\r\n.btn-outline-danger.active,\r\n.open > .btn-outline-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.btn-outline-danger:active:hover,\r\n.btn-outline-danger:active:focus,\r\n.btn-outline-danger:active.focus,\r\n.btn-outline-danger.active:hover,\r\n.btn-outline-danger.active:focus,\r\n.btn-outline-danger.active.focus,\r\n.open > .btn-outline-danger.dropdown-toggle:hover,\r\n.open > .btn-outline-danger.dropdown-toggle:focus,\r\n.open > .btn-outline-danger.dropdown-toggle.focus {\r\n    color: #fff;\r\n    background-color: #ac2925;\r\n    border-color: #8b211e\r\n}\r\n\r\n.btn-outline-danger.disabled:focus,\r\n.btn-outline-danger.disabled.focus,\r\n.btn-outline-danger:disabled:focus,\r\n.btn-outline-danger:disabled.focus {\r\n    border-color: #eba5a3\r\n}\r\n\r\n.btn-outline-danger.disabled:hover,\r\n.btn-outline-danger:disabled:hover {\r\n    border-color: #eba5a3\r\n}\r\n\r\n.btn-link {\r\n    font-weight: normal;\r\n    color: #0275d8;\r\n    border-radius: 0\r\n}\r\n\r\n.btn-link,\r\n.btn-link:active,\r\n.btn-link.active,\r\n.btn-link:disabled {\r\n    background-color: transparent\r\n}\r\n\r\n.btn-link,\r\n.btn-link:focus,\r\n.btn-link:active {\r\n    border-color: transparent\r\n}\r\n\r\n.btn-link:hover {\r\n    border-color: transparent\r\n}\r\n\r\n.btn-link:focus,\r\n.btn-link:hover {\r\n    color: #014c8c;\r\n    text-decoration: underline;\r\n    background-color: transparent\r\n}\r\n\r\n.btn-link:disabled:focus,\r\n.btn-link:disabled:hover {\r\n    color: #818a91;\r\n    text-decoration: none\r\n}\r\n\r\n.btn-lg,\r\n.btn-group-lg > .btn {\r\n    padding: .75rem 1.5rem;\r\n    font-size: 1.25rem;\r\n    border-radius: .3rem\r\n}\r\n\r\n.btn-sm,\r\n.btn-group-sm > .btn {\r\n    padding: .25rem .5rem;\r\n    font-size: .875rem;\r\n    border-radius: .2rem\r\n}\r\n\r\n.btn-block {\r\n    display: block;\r\n    width: 100%\r\n}\r\n\r\n.btn-block + .btn-block {\r\n    margin-top: .5rem\r\n}\r\n\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n    width: 100%\r\n}\r\n\r\n.fade {\r\n    opacity: 0;\r\n    -webkit-transition: opacity .15s linear;\r\n    transition: opacity .15s linear\r\n}\r\n\r\n.fade.in {\r\n    opacity: 1\r\n}\r\n\r\n.collapse {\r\n    display: none\r\n}\r\n\r\n.collapse.in {\r\n    display: block\r\n}\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-duration: .35s;\r\n            transition-duration: .35s;\r\n    -webkit-transition-property: height;\r\n    transition-property: height\r\n}\r\n\r\n.dropup,\r\n.dropdown {\r\n    position: relative\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    margin-left: .3em;\r\n    vertical-align: middle;\r\n    content: \"\";\r\n    border-top: .3em solid;\r\n    border-right: .3em solid transparent;\r\n    border-left: .3em solid transparent\r\n}\r\n\r\n.dropdown-toggle:focus {\r\n    outline: 0\r\n}\r\n\r\n.dropup .dropdown-toggle::after {\r\n    border-top: 0;\r\n    border-bottom: .3em solid\r\n}\r\n\r\n.dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n    display: none;\r\n    float: left;\r\n    min-width: 160px;\r\n    padding: 5px 0;\r\n    margin: 2px 0 0;\r\n    font-size: 1rem;\r\n    color: #373a3c;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: .25rem\r\n}\r\n\r\n.dropdown-divider {\r\n    height: 1px;\r\n    margin: .5rem 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5\r\n}\r\n\r\n.dropdown-item {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: normal;\r\n    color: #373a3c;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background: none;\r\n    border: 0\r\n}\r\n\r\n.dropdown-item:focus,\r\n.dropdown-item:hover {\r\n    color: #2b2d2f;\r\n    text-decoration: none;\r\n    background-color: #f5f5f5\r\n}\r\n\r\n.dropdown-item.active,\r\n.dropdown-item.active:focus,\r\n.dropdown-item.active:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #0275d8;\r\n    outline: 0\r\n}\r\n\r\n.dropdown-item.disabled,\r\n.dropdown-item.disabled:focus,\r\n.dropdown-item.disabled:hover {\r\n    color: #818a91\r\n}\r\n\r\n.dropdown-item.disabled:focus,\r\n.dropdown-item.disabled:hover {\r\n    text-decoration: none;\r\n    cursor: not-allowed;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"\r\n}\r\n\r\n.open > .dropdown-menu {\r\n    display: block\r\n}\r\n\r\n.open > a {\r\n    outline: 0\r\n}\r\n\r\n.dropdown-menu-right {\r\n    right: 0;\r\n    left: auto\r\n}\r\n\r\n.dropdown-menu-left {\r\n    right: auto;\r\n    left: 0\r\n}\r\n\r\n.dropdown-header {\r\n    display: block;\r\n    padding: 5px 20px;\r\n    font-size: .875rem;\r\n    color: #818a91;\r\n    white-space: nowrap\r\n}\r\n\r\n.dropdown-backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 990\r\n}\r\n\r\n.dropup .caret,\r\n.navbar-fixed-bottom .dropdown .caret {\r\n    content: \"\";\r\n    border-top: 0;\r\n    border-bottom: .3em solid\r\n}\r\n\r\n.dropup .dropdown-menu,\r\n.navbar-fixed-bottom .dropdown .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n    margin-bottom: 2px\r\n}\r\n\r\n.btn-group,\r\n.btn-group-vertical {\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: middle\r\n}\r\n\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n    position: relative;\r\n    float: left\r\n}\r\n\r\n.btn-group > .btn:focus,\r\n.btn-group > .btn:active,\r\n.btn-group > .btn.active,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group-vertical > .btn.active {\r\n    z-index: 2\r\n}\r\n\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover {\r\n    z-index: 2\r\n}\r\n\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group {\r\n    margin-left: -1px\r\n}\r\n\r\n.btn-toolbar {\r\n    margin-left: -0.5rem\r\n}\r\n\r\n.btn-toolbar::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.btn-toolbar .btn-group,\r\n.btn-toolbar .input-group {\r\n    float: left\r\n}\r\n\r\n.btn-toolbar > .btn,\r\n.btn-toolbar > .btn-group,\r\n.btn-toolbar > .input-group {\r\n    margin-left: .5rem\r\n}\r\n\r\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n    border-radius: 0\r\n}\r\n\r\n.btn-group > .btn:first-child {\r\n    margin-left: 0\r\n}\r\n\r\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n    border-bottom-right-radius: 0;\r\n    border-top-right-radius: 0\r\n}\r\n\r\n.btn-group > .btn:last-child:not(:first-child),\r\n.btn-group > .dropdown-toggle:not(:first-child) {\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 0\r\n}\r\n\r\n.btn-group > .btn-group {\r\n    float: left\r\n}\r\n\r\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n    border-radius: 0\r\n}\r\n\r\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n    border-bottom-right-radius: 0;\r\n    border-top-right-radius: 0\r\n}\r\n\r\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 0\r\n}\r\n\r\n.btn-group .dropdown-toggle:active,\r\n.btn-group.open .dropdown-toggle {\r\n    outline: 0\r\n}\r\n\r\n.btn + .dropdown-toggle-split {\r\n    padding-right: .75rem;\r\n    padding-left: .75rem\r\n}\r\n\r\n.btn + .dropdown-toggle-split::after {\r\n    margin-left: 0\r\n}\r\n\r\n.btn-sm + .dropdown-toggle-split,\r\n.btn-group-sm > .btn + .dropdown-toggle-split {\r\n    padding-right: .375rem;\r\n    padding-left: .375rem\r\n}\r\n\r\n.btn-lg + .dropdown-toggle-split,\r\n.btn-group-lg > .btn + .dropdown-toggle-split {\r\n    padding-right: 1.125rem;\r\n    padding-left: 1.125rem\r\n}\r\n\r\n.btn .caret {\r\n    margin-left: 0\r\n}\r\n\r\n.btn-lg .caret,\r\n.btn-group-lg > .btn .caret {\r\n    border-width: .3em .3em 0;\r\n    border-bottom-width: 0\r\n}\r\n\r\n.dropup .btn-lg .caret,\r\n.dropup .btn-group-lg > .btn .caret {\r\n    border-width: 0 .3em .3em\r\n}\r\n\r\n.btn-group-vertical > .btn,\r\n.btn-group-vertical > .btn-group,\r\n.btn-group-vertical > .btn-group > .btn {\r\n    display: block;\r\n    float: none;\r\n    width: 100%;\r\n    max-width: 100%\r\n}\r\n\r\n.btn-group-vertical > .btn-group::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.btn-group-vertical > .btn-group > .btn {\r\n    float: none\r\n}\r\n\r\n.btn-group-vertical > .btn + .btn,\r\n.btn-group-vertical > .btn + .btn-group,\r\n.btn-group-vertical > .btn-group + .btn,\r\n.btn-group-vertical > .btn-group + .btn-group {\r\n    margin-top: -1px;\r\n    margin-left: 0\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\r\n    border-radius: 0\r\n}\r\n\r\n.btn-group-vertical > .btn:first-child:not(:last-child) {\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0\r\n}\r\n\r\n.btn-group-vertical > .btn:last-child:not(:first-child) {\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0\r\n}\r\n\r\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n    border-radius: 0\r\n}\r\n\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0\r\n}\r\n\r\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0\r\n}\r\n\r\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\r\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\r\n    position: absolute;\r\n    clip: rect(0, 0, 0, 0);\r\n    pointer-events: none\r\n}\r\n\r\n.input-group {\r\n    position: relative;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex\r\n}\r\n\r\n.input-group .form-control {\r\n    position: relative;\r\n    z-index: 2;\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    margin-bottom: 0\r\n}\r\n\r\n.input-group .form-control:focus,\r\n.input-group .form-control:active,\r\n.input-group .form-control:hover {\r\n    z-index: 3\r\n}\r\n\r\n.input-group-addon:not(:first-child):not(:last-child),\r\n.input-group-btn:not(:first-child):not(:last-child),\r\n.input-group .form-control:not(:first-child):not(:last-child) {\r\n    border-radius: 0\r\n}\r\n\r\n.input-group-addon,\r\n.input-group-btn {\r\n    white-space: nowrap;\r\n    vertical-align: middle\r\n}\r\n\r\n.input-group-addon {\r\n    padding: .5rem .75rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n    line-height: 1.25;\r\n    color: #55595c;\r\n    text-align: center;\r\n    background-color: #eceeef;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: .25rem\r\n}\r\n\r\n.input-group-addon.form-control-sm,\r\n.input-group-sm > .input-group-addon,\r\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\r\n    padding: .25rem .5rem;\r\n    font-size: .875rem;\r\n    border-radius: .2rem\r\n}\r\n\r\n.input-group-addon.form-control-lg,\r\n.input-group-lg > .input-group-addon,\r\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\r\n    padding: .75rem 1.5rem;\r\n    font-size: 1.25rem;\r\n    border-radius: .3rem\r\n}\r\n\r\n.input-group-addon input[type=\"radio\"],\r\n.input-group-addon input[type=\"checkbox\"] {\r\n    margin-top: 0\r\n}\r\n\r\n.input-group .form-control:not(:last-child),\r\n.input-group-addon:not(:last-child),\r\n.input-group-btn:not(:last-child) > .btn,\r\n.input-group-btn:not(:last-child) > .btn-group > .btn,\r\n.input-group-btn:not(:last-child) > .dropdown-toggle,\r\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\r\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\r\n    border-bottom-right-radius: 0;\r\n    border-top-right-radius: 0\r\n}\r\n\r\n.input-group-addon:not(:last-child) {\r\n    border-right: 0\r\n}\r\n\r\n.input-group .form-control:not(:first-child),\r\n.input-group-addon:not(:first-child),\r\n.input-group-btn:not(:first-child) > .btn,\r\n.input-group-btn:not(:first-child) > .btn-group > .btn,\r\n.input-group-btn:not(:first-child) > .dropdown-toggle,\r\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\r\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 0\r\n}\r\n\r\n.form-control + .input-group-addon:not(:first-child) {\r\n    border-left: 0\r\n}\r\n\r\n.input-group-btn {\r\n    position: relative;\r\n    font-size: 0;\r\n    white-space: nowrap\r\n}\r\n\r\n.input-group-btn > .btn {\r\n    position: relative\r\n}\r\n\r\n.input-group-btn > .btn + .btn {\r\n    margin-left: -1px\r\n}\r\n\r\n.input-group-btn > .btn:focus,\r\n.input-group-btn > .btn:active,\r\n.input-group-btn > .btn:hover {\r\n    z-index: 3\r\n}\r\n\r\n.input-group-btn:not(:last-child) > .btn,\r\n.input-group-btn:not(:last-child) > .btn-group {\r\n    margin-right: -1px\r\n}\r\n\r\n.input-group-btn:not(:first-child) > .btn,\r\n.input-group-btn:not(:first-child) > .btn-group {\r\n    z-index: 2;\r\n    margin-left: -1px\r\n}\r\n\r\n.input-group-btn:not(:first-child) > .btn:focus,\r\n.input-group-btn:not(:first-child) > .btn:active,\r\n.input-group-btn:not(:first-child) > .btn:hover,\r\n.input-group-btn:not(:first-child) > .btn-group:focus,\r\n.input-group-btn:not(:first-child) > .btn-group:active,\r\n.input-group-btn:not(:first-child) > .btn-group:hover {\r\n    z-index: 3\r\n}\r\n\r\n.custom-control {\r\n    position: relative;\r\n    display: inline;\r\n    padding-left: 1.5rem;\r\n    cursor: pointer\r\n}\r\n\r\n.custom-control + .custom-control {\r\n    margin-left: 1rem\r\n}\r\n\r\n.custom-control-input {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0\r\n}\r\n\r\n.custom-control-input:checked ~ .custom-control-indicator {\r\n    color: #fff;\r\n    background-color: #0074d9\r\n}\r\n\r\n.custom-control-input:focus ~ .custom-control-indicator {\r\n    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9\r\n}\r\n\r\n.custom-control-input:active ~ .custom-control-indicator {\r\n    color: #fff;\r\n    background-color: #84c6ff\r\n}\r\n\r\n.custom-control-input:disabled ~ .custom-control-indicator {\r\n    cursor: not-allowed;\r\n    background-color: #eee\r\n}\r\n\r\n.custom-control-input:disabled ~ .custom-control-description {\r\n    color: #767676;\r\n    cursor: not-allowed\r\n}\r\n\r\n.custom-control-indicator {\r\n    position: absolute;\r\n    top: .0625rem;\r\n    left: 0;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    pointer-events: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background-color: #ddd;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: 50% 50%\r\n}\r\n\r\n.custom-checkbox .custom-control-indicator {\r\n    border-radius: .25rem\r\n}\r\n\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")\r\n}\r\n\r\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\r\n    background-color: #0074d9;\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")\r\n}\r\n\r\n.custom-radio .custom-control-indicator {\r\n    border-radius: 50%\r\n}\r\n\r\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")\r\n}\r\n\r\n.custom-controls-stacked .custom-control {\r\n    display: inline\r\n}\r\n\r\n.custom-controls-stacked .custom-control::after {\r\n    display: block;\r\n    margin-bottom: .25rem;\r\n    content: \"\"\r\n}\r\n\r\n.custom-controls-stacked .custom-control + .custom-control {\r\n    margin-left: 0\r\n}\r\n\r\n.custom-select {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    padding: .375rem 1.75rem .375rem .75rem;\r\n    padding-right: .75rem \\9;\r\n    color: #55595c;\r\n    vertical-align: middle;\r\n    background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;\r\n    background-image: none \\9;\r\n    background-size: 8px 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: .25rem;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none\r\n}\r\n\r\n.custom-select:focus {\r\n    border-color: #51a7e8;\r\n    outline: none\r\n}\r\n\r\n.custom-select:focus::-ms-value {\r\n    color: #55595c;\r\n    background-color: #fff\r\n}\r\n\r\n.custom-select:disabled {\r\n    color: #818a91;\r\n    cursor: not-allowed;\r\n    background-color: #eceeef\r\n}\r\n\r\n.custom-select::-ms-expand {\r\n    opacity: 0\r\n}\r\n\r\n.custom-select-sm {\r\n    padding-top: .375rem;\r\n    padding-bottom: .375rem;\r\n    font-size: 75%\r\n}\r\n\r\n.custom-file {\r\n    position: relative;\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: 2.5rem;\r\n    cursor: pointer\r\n}\r\n\r\n.custom-file-input {\r\n    min-width: 14rem;\r\n    max-width: 100%;\r\n    margin: 0;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0\r\n}\r\n\r\n.custom-file-control {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    height: 2.5rem;\r\n    padding: .5rem 1rem;\r\n    line-height: 1.5;\r\n    color: #555;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: .25rem\r\n}\r\n\r\n.custom-file-control:lang(en)::after {\r\n    content: \"Choose file...\"\r\n}\r\n\r\n.custom-file-control::before {\r\n    position: absolute;\r\n    top: -1px;\r\n    right: -1px;\r\n    bottom: -1px;\r\n    z-index: 6;\r\n    display: block;\r\n    height: 2.5rem;\r\n    padding: .5rem 1rem;\r\n    line-height: 1.5;\r\n    color: #555;\r\n    background-color: #eee;\r\n    border: 1px solid #ddd;\r\n    border-radius: 0 .25rem .25rem 0\r\n}\r\n\r\n.custom-file-control:lang(en)::before {\r\n    content: \"Browse\"\r\n}\r\n\r\n.nav {\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none\r\n}\r\n\r\n.nav-link {\r\n    display: inline-block\r\n}\r\n\r\n.nav-link:focus,\r\n.nav-link:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.nav-link.disabled {\r\n    color: #818a91\r\n}\r\n\r\n.nav-link.disabled,\r\n.nav-link.disabled:focus,\r\n.nav-link.disabled:hover {\r\n    color: #818a91;\r\n    cursor: not-allowed;\r\n    background-color: transparent\r\n}\r\n\r\n.nav-inline .nav-item {\r\n    display: inline-block\r\n}\r\n\r\n.nav-inline .nav-item + .nav-item,\r\n.nav-inline .nav-link + .nav-link {\r\n    margin-left: 1rem\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: 1px solid #ddd\r\n}\r\n\r\n.nav-tabs::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.nav-tabs .nav-item {\r\n    float: left;\r\n    margin-bottom: -1px\r\n}\r\n\r\n.nav-tabs .nav-item + .nav-item {\r\n    margin-left: .2rem\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n    display: block;\r\n    padding: 0.5em 1em;\r\n    border: 1px solid transparent;\r\n    border-top-right-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.nav-tabs .nav-link:focus,\r\n.nav-tabs .nav-link:hover {\r\n    border-color: #eceeef #eceeef #ddd\r\n}\r\n\r\n.nav-tabs .nav-link.disabled,\r\n.nav-tabs .nav-link.disabled:focus,\r\n.nav-tabs .nav-link.disabled:hover {\r\n    color: #818a91;\r\n    background-color: transparent;\r\n    border-color: transparent\r\n}\r\n\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-link.active:focus,\r\n.nav-tabs .nav-link.active:hover,\r\n.nav-tabs .nav-item.open .nav-link,\r\n.nav-tabs .nav-item.open .nav-link:focus,\r\n.nav-tabs .nav-item.open .nav-link:hover {\r\n    color: #55595c;\r\n    background-color: #fff;\r\n    border-color: #ddd #ddd transparent\r\n}\r\n\r\n.nav-tabs .dropdown-menu {\r\n    margin-top: -1px;\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0\r\n}\r\n\r\n.nav-pills::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.nav-pills .nav-item {\r\n    float: left\r\n}\r\n\r\n.nav-pills .nav-item + .nav-item {\r\n    margin-left: .2rem\r\n}\r\n\r\n.nav-pills .nav-link {\r\n    display: block;\r\n    padding: 0.5em 1em;\r\n    border-radius: .25rem\r\n}\r\n\r\n.nav-pills .nav-link.active,\r\n.nav-pills .nav-link.active:focus,\r\n.nav-pills .nav-link.active:hover,\r\n.nav-pills .nav-item.open .nav-link,\r\n.nav-pills .nav-item.open .nav-link:focus,\r\n.nav-pills .nav-item.open .nav-link:hover {\r\n    color: #fff;\r\n    cursor: default;\r\n    background-color: #0275d8\r\n}\r\n\r\n.nav-stacked .nav-item {\r\n    display: block;\r\n    float: none\r\n}\r\n\r\n.nav-stacked .nav-item + .nav-item {\r\n    margin-top: .2rem;\r\n    margin-left: 0\r\n}\r\n\r\n.tab-content > .tab-pane {\r\n    display: none\r\n}\r\n\r\n.tab-content > .active {\r\n    display: block\r\n}\r\n\r\n.navbar {\r\n    position: relative;\r\n    padding: .5rem 1rem\r\n}\r\n\r\n.navbar::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .navbar {\r\n        border-radius: .25rem\r\n    }\r\n}\r\n\r\n.navbar-full {\r\n    z-index: 1000\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .navbar-full {\r\n        border-radius: 0\r\n    }\r\n}\r\n\r\n.navbar-fixed-top,\r\n.navbar-fixed-bottom {\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .navbar-fixed-top,\r\n    .navbar-fixed-bottom {\r\n        border-radius: 0\r\n    }\r\n}\r\n\r\n.navbar-fixed-top {\r\n    top: 0\r\n}\r\n\r\n.navbar-fixed-bottom {\r\n    bottom: 0\r\n}\r\n\r\n.navbar-sticky-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1030;\r\n    width: 100%\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .navbar-sticky-top {\r\n        border-radius: 0\r\n    }\r\n}\r\n\r\n.navbar-brand {\r\n    float: left;\r\n    padding-top: .25rem;\r\n    padding-bottom: .25rem;\r\n    margin-right: 1rem;\r\n    font-size: 1.25rem\r\n}\r\n\r\n.navbar-brand:focus,\r\n.navbar-brand:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.navbar-brand > img {\r\n    display: block\r\n}\r\n\r\n.navbar-divider {\r\n    float: left;\r\n    width: 1px;\r\n    padding-top: .425rem;\r\n    padding-bottom: .425rem;\r\n    margin-right: 1rem;\r\n    margin-left: 1rem;\r\n    overflow: hidden\r\n}\r\n\r\n.navbar-divider::before {\r\n    content: \"\\00a0\"\r\n}\r\n\r\n.navbar-toggler {\r\n    padding: .5rem .75rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1;\r\n    background: none;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem\r\n}\r\n\r\n.navbar-toggler:focus,\r\n.navbar-toggler:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.navbar-nav .nav-item {\r\n    float: left\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n    display: block;\r\n    padding-top: .425rem;\r\n    padding-bottom: .425rem\r\n}\r\n\r\n.navbar-nav .nav-link + .nav-link {\r\n    margin-left: 1rem\r\n}\r\n\r\n.navbar-nav .nav-item + .nav-item {\r\n    margin-left: 1rem\r\n}\r\n\r\n.navbar-light .navbar-brand {\r\n    color: rgba(0, 0, 0, 0.8)\r\n}\r\n\r\n.navbar-light .navbar-brand:focus,\r\n.navbar-light .navbar-brand:hover {\r\n    color: rgba(0, 0, 0, 0.8)\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n    color: rgba(0, 0, 0, 0.3)\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:focus,\r\n.navbar-light .navbar-nav .nav-link:hover {\r\n    color: rgba(0, 0, 0, 0.6)\r\n}\r\n\r\n.navbar-light .navbar-nav .open > .nav-link,\r\n.navbar-light .navbar-nav .open > .nav-link:focus,\r\n.navbar-light .navbar-nav .open > .nav-link:hover,\r\n.navbar-light .navbar-nav .active > .nav-link,\r\n.navbar-light .navbar-nav .active > .nav-link:focus,\r\n.navbar-light .navbar-nav .active > .nav-link:hover,\r\n.navbar-light .navbar-nav .nav-link.open,\r\n.navbar-light .navbar-nav .nav-link.open:focus,\r\n.navbar-light .navbar-nav .nav-link.open:hover,\r\n.navbar-light .navbar-nav .nav-link.active,\r\n.navbar-light .navbar-nav .nav-link.active:focus,\r\n.navbar-light .navbar-nav .nav-link.active:hover {\r\n    color: rgba(0, 0, 0, 0.8)\r\n}\r\n\r\n.navbar-light .navbar-divider {\r\n    background-color: rgba(0, 0, 0, 0.075)\r\n}\r\n\r\n.navbar-dark .navbar-brand {\r\n    color: #fff\r\n}\r\n\r\n.navbar-dark .navbar-brand:focus,\r\n.navbar-dark .navbar-brand:hover {\r\n    color: #fff\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: rgba(255, 255, 255, 0.5)\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link:focus,\r\n.navbar-dark .navbar-nav .nav-link:hover {\r\n    color: rgba(255, 255, 255, 0.75)\r\n}\r\n\r\n.navbar-dark .navbar-nav .open > .nav-link,\r\n.navbar-dark .navbar-nav .open > .nav-link:focus,\r\n.navbar-dark .navbar-nav .open > .nav-link:hover,\r\n.navbar-dark .navbar-nav .active > .nav-link,\r\n.navbar-dark .navbar-nav .active > .nav-link:focus,\r\n.navbar-dark .navbar-nav .active > .nav-link:hover,\r\n.navbar-dark .navbar-nav .nav-link.open,\r\n.navbar-dark .navbar-nav .nav-link.open:focus,\r\n.navbar-dark .navbar-nav .nav-link.open:hover,\r\n.navbar-dark .navbar-nav .nav-link.active,\r\n.navbar-dark .navbar-nav .nav-link.active:focus,\r\n.navbar-dark .navbar-nav .nav-link.active:hover {\r\n    color: #fff\r\n}\r\n\r\n.navbar-dark .navbar-divider {\r\n    background-color: rgba(255, 255, 255, 0.075)\r\n}\r\n\r\n.navbar-toggleable-xs::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n@media (max-width: 543px) {\r\n    .navbar-toggleable-xs .navbar-nav .nav-item {\r\n        float: none;\r\n        margin-left: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .navbar-toggleable-xs {\r\n        display: block !important\r\n    }\r\n}\r\n\r\n.navbar-toggleable-sm::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .navbar-toggleable-sm .navbar-nav .nav-item {\r\n        float: none;\r\n        margin-left: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .navbar-toggleable-sm {\r\n        display: block !important\r\n    }\r\n}\r\n\r\n.navbar-toggleable-md::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .navbar-toggleable-md .navbar-nav .nav-item {\r\n        float: none;\r\n        margin-left: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .navbar-toggleable-md {\r\n        display: block !important\r\n    }\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: block;\r\n    margin-bottom: .75rem;\r\n    background-color: #fff;\r\n    border-radius: .25rem;\r\n    border: 1px solid rgba(0, 0, 0, 0.125)\r\n}\r\n\r\n.card-block {\r\n    padding: 1.25rem\r\n}\r\n\r\n.card-block::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.card-title {\r\n    margin-bottom: .75rem\r\n}\r\n\r\n.card-subtitle {\r\n    margin-top: -0.375rem;\r\n    margin-bottom: 0\r\n}\r\n\r\n.card-text:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.card-link:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.card-link + .card-link {\r\n    margin-left: 1.25rem\r\n}\r\n\r\n.card > .list-group:first-child .list-group-item:first-child {\r\n    border-top-right-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.card > .list-group:last-child .list-group-item:last-child {\r\n    border-bottom-right-radius: .25rem;\r\n    border-bottom-left-radius: .25rem\r\n}\r\n\r\n.card-header {\r\n    padding: .75rem 1.25rem;\r\n    background-color: #f5f5f5;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125)\r\n}\r\n\r\n.card-header::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.card-header:first-child {\r\n    border-radius: .25rem .25rem 0 0\r\n}\r\n\r\n.card-footer {\r\n    padding: .75rem 1.25rem;\r\n    background-color: #f5f5f5;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.125)\r\n}\r\n\r\n.card-footer::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.card-footer:last-child {\r\n    border-radius: 0 0 .25rem .25rem\r\n}\r\n\r\n.card-header-tabs {\r\n    margin-right: -0.625rem;\r\n    margin-bottom: -0.75rem;\r\n    margin-left: -0.625rem;\r\n    border-bottom: 0\r\n}\r\n\r\n.card-header-pills {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem\r\n}\r\n\r\n.card-primary {\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.card-primary .card-header,\r\n.card-primary .card-footer {\r\n    background-color: transparent\r\n}\r\n\r\n.card-success {\r\n    background-color: #5cb85c;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.card-success .card-header,\r\n.card-success .card-footer {\r\n    background-color: transparent\r\n}\r\n\r\n.card-info {\r\n    background-color: #5bc0de;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.card-info .card-header,\r\n.card-info .card-footer {\r\n    background-color: transparent\r\n}\r\n\r\n.card-warning {\r\n    background-color: #f0ad4e;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.card-warning .card-header,\r\n.card-warning .card-footer {\r\n    background-color: transparent\r\n}\r\n\r\n.card-danger {\r\n    background-color: #d9534f;\r\n    border-color: #d9534f\r\n}\r\n\r\n.card-danger .card-header,\r\n.card-danger .card-footer {\r\n    background-color: transparent\r\n}\r\n\r\n.card-outline-primary {\r\n    background-color: transparent;\r\n    border-color: #0275d8\r\n}\r\n\r\n.card-outline-secondary {\r\n    background-color: transparent;\r\n    border-color: #ccc\r\n}\r\n\r\n.card-outline-info {\r\n    background-color: transparent;\r\n    border-color: #5bc0de\r\n}\r\n\r\n.card-outline-success {\r\n    background-color: transparent;\r\n    border-color: #5cb85c\r\n}\r\n\r\n.card-outline-warning {\r\n    background-color: transparent;\r\n    border-color: #f0ad4e\r\n}\r\n\r\n.card-outline-danger {\r\n    background-color: transparent;\r\n    border-color: #d9534f\r\n}\r\n\r\n.card-inverse .card-header,\r\n.card-inverse .card-footer {\r\n    border-color: rgba(255, 255, 255, 0.2)\r\n}\r\n\r\n.card-inverse .card-header,\r\n.card-inverse .card-footer,\r\n.card-inverse .card-title,\r\n.card-inverse .card-blockquote {\r\n    color: #fff\r\n}\r\n\r\n.card-inverse .card-link,\r\n.card-inverse .card-text,\r\n.card-inverse .card-subtitle,\r\n.card-inverse .card-blockquote .blockquote-footer {\r\n    color: rgba(255, 255, 255, 0.65)\r\n}\r\n\r\n.card-inverse .card-link:focus,\r\n.card-inverse .card-link:hover {\r\n    color: #fff\r\n}\r\n\r\n.card-blockquote {\r\n    padding: 0;\r\n    margin-bottom: 0;\r\n    border-left: 0\r\n}\r\n\r\n.card-img {\r\n    border-radius: .25rem\r\n}\r\n\r\n.card-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1.25rem\r\n}\r\n\r\n.card-img-top {\r\n    border-top-right-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.card-img-bottom {\r\n    border-bottom-right-radius: .25rem;\r\n    border-bottom-left-radius: .25rem\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .card-deck {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-flow: row wrap;\r\n        margin-right: -0.625rem;\r\n        margin-bottom: .75rem;\r\n        margin-left: -0.625rem\r\n    }\r\n\r\n    .card-deck .card {\r\n        -webkit-box-flex: 1;\r\n                flex: 1 0 0;\r\n        margin-right: .625rem;\r\n        margin-bottom: 0;\r\n        margin-left: .625rem\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .card-group {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-flow: row wrap\r\n    }\r\n\r\n    .card-group .card {\r\n        -webkit-box-flex: 1;\r\n                flex: 1 0 0\r\n    }\r\n\r\n    .card-group .card + .card {\r\n        margin-left: 0;\r\n        border-left: 0\r\n    }\r\n\r\n    .card-group .card:first-child {\r\n        border-bottom-right-radius: 0;\r\n        border-top-right-radius: 0\r\n    }\r\n\r\n    .card-group .card:first-child .card-img-top {\r\n        border-top-right-radius: 0\r\n    }\r\n\r\n    .card-group .card:first-child .card-img-bottom {\r\n        border-bottom-right-radius: 0\r\n    }\r\n\r\n    .card-group .card:last-child {\r\n        border-bottom-left-radius: 0;\r\n        border-top-left-radius: 0\r\n    }\r\n\r\n    .card-group .card:last-child .card-img-top {\r\n        border-top-left-radius: 0\r\n    }\r\n\r\n    .card-group .card:last-child .card-img-bottom {\r\n        border-bottom-left-radius: 0\r\n    }\r\n\r\n    .card-group .card:not(:first-child):not(:last-child) {\r\n        border-radius: 0\r\n    }\r\n\r\n    .card-group .card:not(:first-child):not(:last-child) .card-img-top,\r\n    .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\r\n        border-radius: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .card-columns {\r\n        -webkit-column-count: 3;\r\n           -moz-column-count: 3;\r\n                column-count: 3;\r\n        -webkit-column-gap: 1.25rem;\r\n           -moz-column-gap: 1.25rem;\r\n                column-gap: 1.25rem\r\n    }\r\n\r\n    .card-columns .card {\r\n        display: inline-block;\r\n        width: 100%\r\n    }\r\n}\r\n\r\n.breadcrumb {\r\n    padding: .75rem 1rem;\r\n    margin-bottom: 1rem;\r\n    list-style: none;\r\n    background-color: #eceeef;\r\n    border-radius: .25rem\r\n}\r\n\r\n.breadcrumb::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.breadcrumb-item {\r\n    float: left\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item::before {\r\n    display: inline-block;\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n    color: #818a91;\r\n    content: \"/\"\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n    text-decoration: underline\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n    text-decoration: none\r\n}\r\n\r\n.breadcrumb-item.active {\r\n    color: #818a91\r\n}\r\n\r\n.pagination {\r\n    display: inline-block;\r\n    padding-left: 0;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border-radius: .25rem\r\n}\r\n\r\n.page-item {\r\n    display: inline\r\n}\r\n\r\n.page-item:first-child .page-link {\r\n    margin-left: 0;\r\n    border-bottom-left-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.page-item:last-child .page-link {\r\n    border-bottom-right-radius: .25rem;\r\n    border-top-right-radius: .25rem\r\n}\r\n\r\n.page-item.active .page-link,\r\n.page-item.active .page-link:focus,\r\n.page-item.active .page-link:hover {\r\n    z-index: 2;\r\n    color: #fff;\r\n    cursor: default;\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.page-item.disabled .page-link,\r\n.page-item.disabled .page-link:focus,\r\n.page-item.disabled .page-link:hover {\r\n    color: #818a91;\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n    background-color: #fff;\r\n    border-color: #ddd\r\n}\r\n\r\n.page-link {\r\n    position: relative;\r\n    float: left;\r\n    padding: .5rem .75rem;\r\n    margin-left: -1px;\r\n    color: #0275d8;\r\n    text-decoration: none;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd\r\n}\r\n\r\n.page-link:focus,\r\n.page-link:hover {\r\n    color: #014c8c;\r\n    background-color: #eceeef;\r\n    border-color: #ddd\r\n}\r\n\r\n.pagination-lg .page-link {\r\n    padding: .75rem 1.5rem;\r\n    font-size: 1.25rem\r\n}\r\n\r\n.pagination-lg .page-item:first-child .page-link {\r\n    border-bottom-left-radius: .3rem;\r\n    border-top-left-radius: .3rem\r\n}\r\n\r\n.pagination-lg .page-item:last-child .page-link {\r\n    border-bottom-right-radius: .3rem;\r\n    border-top-right-radius: .3rem\r\n}\r\n\r\n.pagination-sm .page-link {\r\n    padding: .275rem .75rem;\r\n    font-size: .875rem\r\n}\r\n\r\n.pagination-sm .page-item:first-child .page-link {\r\n    border-bottom-left-radius: .2rem;\r\n    border-top-left-radius: .2rem\r\n}\r\n\r\n.pagination-sm .page-item:last-child .page-link {\r\n    border-bottom-right-radius: .2rem;\r\n    border-top-right-radius: .2rem\r\n}\r\n\r\n.tag {\r\n    display: inline-block;\r\n    padding: .25em .4em;\r\n    font-size: 75%;\r\n    font-weight: bold;\r\n    line-height: 1;\r\n    color: #fff;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    border-radius: .25rem\r\n}\r\n\r\n.tag:empty {\r\n    display: none\r\n}\r\n\r\n.btn .tag {\r\n    position: relative;\r\n    top: -1px\r\n}\r\n\r\na.tag:focus,\r\na.tag:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    cursor: pointer\r\n}\r\n\r\n.tag-pill {\r\n    padding-right: .6em;\r\n    padding-left: .6em;\r\n    border-radius: 10rem\r\n}\r\n\r\n.tag-default {\r\n    background-color: #818a91\r\n}\r\n\r\n.tag-default[href]:focus,\r\n.tag-default[href]:hover {\r\n    background-color: #687077\r\n}\r\n\r\n.tag-primary {\r\n    background-color: #0275d8\r\n}\r\n\r\n.tag-primary[href]:focus,\r\n.tag-primary[href]:hover {\r\n    background-color: #025aa5\r\n}\r\n\r\n.tag-success {\r\n    background-color: #5cb85c\r\n}\r\n\r\n.tag-success[href]:focus,\r\n.tag-success[href]:hover {\r\n    background-color: #449d44\r\n}\r\n\r\n.tag-info {\r\n    background-color: #5bc0de\r\n}\r\n\r\n.tag-info[href]:focus,\r\n.tag-info[href]:hover {\r\n    background-color: #31b0d5\r\n}\r\n\r\n.tag-warning {\r\n    background-color: #f0ad4e\r\n}\r\n\r\n.tag-warning[href]:focus,\r\n.tag-warning[href]:hover {\r\n    background-color: #ec971f\r\n}\r\n\r\n.tag-danger {\r\n    background-color: #d9534f\r\n}\r\n\r\n.tag-danger[href]:focus,\r\n.tag-danger[href]:hover {\r\n    background-color: #c9302c\r\n}\r\n\r\n.jumbotron {\r\n    padding: 2rem 1rem;\r\n    margin-bottom: 2rem;\r\n    background-color: #eceeef;\r\n    border-radius: .3rem\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .jumbotron {\r\n        padding: 4rem 2rem\r\n    }\r\n}\r\n\r\n.jumbotron-hr {\r\n    border-top-color: #d0d5d8\r\n}\r\n\r\n.jumbotron-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    border-radius: 0\r\n}\r\n\r\n.alert {\r\n    padding: 15px;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem\r\n}\r\n\r\n.alert-heading {\r\n    color: inherit\r\n}\r\n\r\n.alert-link {\r\n    font-weight: bold\r\n}\r\n\r\n.alert-dismissible {\r\n    padding-right: 35px\r\n}\r\n\r\n.alert-dismissible .close {\r\n    position: relative;\r\n    top: -2px;\r\n    right: -21px;\r\n    color: inherit\r\n}\r\n\r\n.alert-success {\r\n    background-color: #dff0d8;\r\n    border-color: #d0e9c6;\r\n    color: #3c763d\r\n}\r\n\r\n.alert-success hr {\r\n    border-top-color: #c1e2b3\r\n}\r\n\r\n.alert-success .alert-link {\r\n    color: #2b542c\r\n}\r\n\r\n.alert-info {\r\n    background-color: #d9edf7;\r\n    border-color: #bcdff1;\r\n    color: #31708f\r\n}\r\n\r\n.alert-info hr {\r\n    border-top-color: #a6d5ec\r\n}\r\n\r\n.alert-info .alert-link {\r\n    color: #245269\r\n}\r\n\r\n.alert-warning {\r\n    background-color: #fcf8e3;\r\n    border-color: #faf2cc;\r\n    color: #8a6d3b\r\n}\r\n\r\n.alert-warning hr {\r\n    border-top-color: #f7ecb5\r\n}\r\n\r\n.alert-warning .alert-link {\r\n    color: #66512c\r\n}\r\n\r\n.alert-danger {\r\n    background-color: #f2dede;\r\n    border-color: #ebcccc;\r\n    color: #a94442\r\n}\r\n\r\n.alert-danger hr {\r\n    border-top-color: #e4b9b9\r\n}\r\n\r\n.alert-danger .alert-link {\r\n    color: #843534\r\n}\r\n\r\n@-webkit-keyframes progress-bar-stripes {\r\n    from {\r\n        background-position: 1rem 0\r\n    }\r\n    to {\r\n        background-position: 0 0\r\n    }\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n    from {\r\n        background-position: 1rem 0\r\n    }\r\n    to {\r\n        background-position: 0 0\r\n    }\r\n}\r\n\r\n.progress {\r\n    display: block;\r\n    width: 100%;\r\n    height: 1rem;\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.progress[value] {\r\n    background-color: #eee;\r\n    border: 0;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    border-radius: .25rem\r\n}\r\n\r\n.progress[value]::-ms-fill {\r\n    background-color: #0074d9;\r\n    border: 0\r\n}\r\n\r\n.progress[value]::-moz-progress-bar {\r\n    background-color: #0074d9;\r\n    border-bottom-left-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.progress[value]::-webkit-progress-value {\r\n    background-color: #0074d9;\r\n    border-bottom-left-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.progress[value=\"100\"]::-moz-progress-bar {\r\n    border-bottom-right-radius: .25rem;\r\n    border-top-right-radius: .25rem\r\n}\r\n\r\n.progress[value=\"100\"]::-webkit-progress-value {\r\n    border-bottom-right-radius: .25rem;\r\n    border-top-right-radius: .25rem\r\n}\r\n\r\n.progress[value]::-webkit-progress-bar {\r\n    background-color: #eee;\r\n    border-radius: .25rem\r\n}\r\n\r\nbase::-moz-progress-bar,\r\n.progress[value] {\r\n    background-color: #eee;\r\n    border-radius: .25rem\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress {\r\n        background-color: #eee;\r\n        border-radius: .25rem\r\n    }\r\n\r\n    .progress-bar {\r\n        display: inline-block;\r\n        height: 1rem;\r\n        text-indent: -999rem;\r\n        background-color: #0074d9;\r\n        border-bottom-left-radius: .25rem;\r\n        border-top-left-radius: .25rem\r\n    }\r\n\r\n    .progress[width=\"100%\"] {\r\n        border-bottom-right-radius: .25rem;\r\n        border-top-right-radius: .25rem\r\n    }\r\n}\r\n\r\n.progress-striped[value]::-webkit-progress-value {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n    background-size: 1rem 1rem\r\n}\r\n\r\n.progress-striped[value]::-moz-progress-bar {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n    background-size: 1rem 1rem\r\n}\r\n\r\n.progress-striped[value]::-ms-fill {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n    background-size: 1rem 1rem\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress-bar-striped {\r\n        background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n        background-size: 1rem 1rem\r\n    }\r\n}\r\n\r\n.progress-animated[value]::-webkit-progress-value {\r\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\r\n            animation: progress-bar-stripes 2s linear infinite\r\n}\r\n\r\n.progress-animated[value]::-moz-progress-bar {\r\n    animation: progress-bar-stripes 2s linear infinite\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress-animated .progress-bar-striped {\r\n        -webkit-animation: progress-bar-stripes 2s linear infinite;\r\n                animation: progress-bar-stripes 2s linear infinite\r\n    }\r\n}\r\n\r\n.progress-success[value]::-webkit-progress-value {\r\n    background-color: #5cb85c\r\n}\r\n\r\n.progress-success[value]::-moz-progress-bar {\r\n    background-color: #5cb85c\r\n}\r\n\r\n.progress-success[value]::-ms-fill {\r\n    background-color: #5cb85c\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress-success .progress-bar {\r\n        background-color: #5cb85c\r\n    }\r\n}\r\n\r\n.progress-info[value]::-webkit-progress-value {\r\n    background-color: #5bc0de\r\n}\r\n\r\n.progress-info[value]::-moz-progress-bar {\r\n    background-color: #5bc0de\r\n}\r\n\r\n.progress-info[value]::-ms-fill {\r\n    background-color: #5bc0de\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress-info .progress-bar {\r\n        background-color: #5bc0de\r\n    }\r\n}\r\n\r\n.progress-warning[value]::-webkit-progress-value {\r\n    background-color: #f0ad4e\r\n}\r\n\r\n.progress-warning[value]::-moz-progress-bar {\r\n    background-color: #f0ad4e\r\n}\r\n\r\n.progress-warning[value]::-ms-fill {\r\n    background-color: #f0ad4e\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress-warning .progress-bar {\r\n        background-color: #f0ad4e\r\n    }\r\n}\r\n\r\n.progress-danger[value]::-webkit-progress-value {\r\n    background-color: #d9534f\r\n}\r\n\r\n.progress-danger[value]::-moz-progress-bar {\r\n    background-color: #d9534f\r\n}\r\n\r\n.progress-danger[value]::-ms-fill {\r\n    background-color: #d9534f\r\n}\r\n\r\n@media screen and (min-width: 0\\0\r\n) {\r\n    .progress-danger .progress-bar {\r\n        background-color: #d9534f\r\n    }\r\n}\r\n\r\n.media {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.media-body {\r\n    -webkit-box-flex: 1;\r\n            flex: 1\r\n}\r\n\r\n.media-middle {\r\n    align-self: center\r\n}\r\n\r\n.media-bottom {\r\n    align-self: flex-end\r\n}\r\n\r\n.media-object {\r\n    display: block\r\n}\r\n\r\n.media-object.img-thumbnail {\r\n    max-width: none\r\n}\r\n\r\n.media-right {\r\n    padding-left: 10px\r\n}\r\n\r\n.media-left {\r\n    padding-right: 10px\r\n}\r\n\r\n.media-heading {\r\n    margin-top: 0;\r\n    margin-bottom: 5px\r\n}\r\n\r\n.media-list {\r\n    padding-left: 0;\r\n    list-style: none\r\n}\r\n\r\n.list-group {\r\n    padding-left: 0;\r\n    margin-bottom: 0\r\n}\r\n\r\n.list-group-item {\r\n    position: relative;\r\n    display: block;\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: -1px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd\r\n}\r\n\r\n.list-group-item:first-child {\r\n    border-top-right-radius: .25rem;\r\n    border-top-left-radius: .25rem\r\n}\r\n\r\n.list-group-item:last-child {\r\n    margin-bottom: 0;\r\n    border-bottom-right-radius: .25rem;\r\n    border-bottom-left-radius: .25rem\r\n}\r\n\r\n.list-group-item.disabled,\r\n.list-group-item.disabled:focus,\r\n.list-group-item.disabled:hover {\r\n    color: #818a91;\r\n    cursor: not-allowed;\r\n    background-color: #eceeef\r\n}\r\n\r\n.list-group-item.disabled .list-group-item-heading,\r\n.list-group-item.disabled:focus .list-group-item-heading,\r\n.list-group-item.disabled:hover .list-group-item-heading {\r\n    color: inherit\r\n}\r\n\r\n.list-group-item.disabled .list-group-item-text,\r\n.list-group-item.disabled:focus .list-group-item-text,\r\n.list-group-item.disabled:hover .list-group-item-text {\r\n    color: #818a91\r\n}\r\n\r\n.list-group-item.active,\r\n.list-group-item.active:focus,\r\n.list-group-item.active:hover {\r\n    z-index: 2;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #0275d8;\r\n    border-color: #0275d8\r\n}\r\n\r\n.list-group-item.active .list-group-item-heading,\r\n.list-group-item.active .list-group-item-heading > small,\r\n.list-group-item.active .list-group-item-heading > .small,\r\n.list-group-item.active:focus .list-group-item-heading,\r\n.list-group-item.active:focus .list-group-item-heading > small,\r\n.list-group-item.active:focus .list-group-item-heading > .small,\r\n.list-group-item.active:hover .list-group-item-heading,\r\n.list-group-item.active:hover .list-group-item-heading > small,\r\n.list-group-item.active:hover .list-group-item-heading > .small {\r\n    color: inherit\r\n}\r\n\r\n.list-group-item.active .list-group-item-text,\r\n.list-group-item.active:focus .list-group-item-text,\r\n.list-group-item.active:hover .list-group-item-text {\r\n    color: #a8d6fe\r\n}\r\n\r\n.list-group-flush .list-group-item {\r\n    border-radius: 0\r\n}\r\n\r\n.list-group-item-action {\r\n    width: 100%;\r\n    color: #555;\r\n    text-align: inherit\r\n}\r\n\r\n.list-group-item-action .list-group-item-heading {\r\n    color: #333\r\n}\r\n\r\n.list-group-item-action:focus,\r\n.list-group-item-action:hover {\r\n    color: #555;\r\n    text-decoration: none;\r\n    background-color: #f5f5f5\r\n}\r\n\r\n.list-group-item-success {\r\n    color: #3c763d;\r\n    background-color: #dff0d8\r\n}\r\n\r\na.list-group-item-success,\r\nbutton.list-group-item-success {\r\n    color: #3c763d\r\n}\r\n\r\na.list-group-item-success .list-group-item-heading,\r\nbutton.list-group-item-success .list-group-item-heading {\r\n    color: inherit\r\n}\r\n\r\na.list-group-item-success:focus,\r\na.list-group-item-success:hover,\r\nbutton.list-group-item-success:focus,\r\nbutton.list-group-item-success:hover {\r\n    color: #3c763d;\r\n    background-color: #d0e9c6\r\n}\r\n\r\na.list-group-item-success.active,\r\na.list-group-item-success.active:focus,\r\na.list-group-item-success.active:hover,\r\nbutton.list-group-item-success.active,\r\nbutton.list-group-item-success.active:focus,\r\nbutton.list-group-item-success.active:hover {\r\n    color: #fff;\r\n    background-color: #3c763d;\r\n    border-color: #3c763d\r\n}\r\n\r\n.list-group-item-info {\r\n    color: #31708f;\r\n    background-color: #d9edf7\r\n}\r\n\r\na.list-group-item-info,\r\nbutton.list-group-item-info {\r\n    color: #31708f\r\n}\r\n\r\na.list-group-item-info .list-group-item-heading,\r\nbutton.list-group-item-info .list-group-item-heading {\r\n    color: inherit\r\n}\r\n\r\na.list-group-item-info:focus,\r\na.list-group-item-info:hover,\r\nbutton.list-group-item-info:focus,\r\nbutton.list-group-item-info:hover {\r\n    color: #31708f;\r\n    background-color: #c4e3f3\r\n}\r\n\r\na.list-group-item-info.active,\r\na.list-group-item-info.active:focus,\r\na.list-group-item-info.active:hover,\r\nbutton.list-group-item-info.active,\r\nbutton.list-group-item-info.active:focus,\r\nbutton.list-group-item-info.active:hover {\r\n    color: #fff;\r\n    background-color: #31708f;\r\n    border-color: #31708f\r\n}\r\n\r\n.list-group-item-warning {\r\n    color: #8a6d3b;\r\n    background-color: #fcf8e3\r\n}\r\n\r\na.list-group-item-warning,\r\nbutton.list-group-item-warning {\r\n    color: #8a6d3b\r\n}\r\n\r\na.list-group-item-warning .list-group-item-heading,\r\nbutton.list-group-item-warning .list-group-item-heading {\r\n    color: inherit\r\n}\r\n\r\na.list-group-item-warning:focus,\r\na.list-group-item-warning:hover,\r\nbutton.list-group-item-warning:focus,\r\nbutton.list-group-item-warning:hover {\r\n    color: #8a6d3b;\r\n    background-color: #faf2cc\r\n}\r\n\r\na.list-group-item-warning.active,\r\na.list-group-item-warning.active:focus,\r\na.list-group-item-warning.active:hover,\r\nbutton.list-group-item-warning.active,\r\nbutton.list-group-item-warning.active:focus,\r\nbutton.list-group-item-warning.active:hover {\r\n    color: #fff;\r\n    background-color: #8a6d3b;\r\n    border-color: #8a6d3b\r\n}\r\n\r\n.list-group-item-danger {\r\n    color: #a94442;\r\n    background-color: #f2dede\r\n}\r\n\r\na.list-group-item-danger,\r\nbutton.list-group-item-danger {\r\n    color: #a94442\r\n}\r\n\r\na.list-group-item-danger .list-group-item-heading,\r\nbutton.list-group-item-danger .list-group-item-heading {\r\n    color: inherit\r\n}\r\n\r\na.list-group-item-danger:focus,\r\na.list-group-item-danger:hover,\r\nbutton.list-group-item-danger:focus,\r\nbutton.list-group-item-danger:hover {\r\n    color: #a94442;\r\n    background-color: #ebcccc\r\n}\r\n\r\na.list-group-item-danger.active,\r\na.list-group-item-danger.active:focus,\r\na.list-group-item-danger.active:hover,\r\nbutton.list-group-item-danger.active,\r\nbutton.list-group-item-danger.active:focus,\r\nbutton.list-group-item-danger.active:hover {\r\n    color: #fff;\r\n    background-color: #a94442;\r\n    border-color: #a94442\r\n}\r\n\r\n.list-group-item-heading {\r\n    margin-top: 0;\r\n    margin-bottom: 5px\r\n}\r\n\r\n.list-group-item-text {\r\n    margin-bottom: 0;\r\n    line-height: 1.3\r\n}\r\n\r\n.embed-responsive {\r\n    position: relative;\r\n    display: block;\r\n    height: 0;\r\n    padding: 0;\r\n    overflow: hidden\r\n}\r\n\r\n.embed-responsive .embed-responsive-item,\r\n.embed-responsive iframe,\r\n.embed-responsive embed,\r\n.embed-responsive object,\r\n.embed-responsive video {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0\r\n}\r\n\r\n.embed-responsive-21by9 {\r\n    padding-bottom: 42.85714%\r\n}\r\n\r\n.embed-responsive-16by9 {\r\n    padding-bottom: 56.25%\r\n}\r\n\r\n.embed-responsive-4by3 {\r\n    padding-bottom: 75%\r\n}\r\n\r\n.embed-responsive-1by1 {\r\n    padding-bottom: 100%\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    opacity: .2\r\n}\r\n\r\n.close:focus,\r\n.close:hover {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    opacity: .5\r\n}\r\n\r\nbutton.close {\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: 0;\r\n    -webkit-appearance: none\r\n}\r\n\r\n.modal-open {\r\n    overflow: hidden\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    overflow: hidden;\r\n    outline: 0;\r\n    -webkit-overflow-scrolling: touch\r\n}\r\n\r\n.modal.fade .modal-dialog {\r\n    -webkit-transition: -webkit-transform .3s ease-out;\r\n    transition: -webkit-transform .3s ease-out;\r\n    transition: transform .3s ease-out;\r\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\r\n    -webkit-transform: translate(0, -25%);\r\n            transform: translate(0, -25%)\r\n}\r\n\r\n.modal.in .modal-dialog {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0)\r\n}\r\n\r\n.modal-open .modal {\r\n    overflow-x: hidden;\r\n    overflow-y: auto\r\n}\r\n\r\n.modal-dialog {\r\n    position: relative;\r\n    width: auto;\r\n    margin: 10px\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: .3rem;\r\n    outline: 0\r\n}\r\n\r\n.modal-backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1040;\r\n    background-color: #000\r\n}\r\n\r\n.modal-backdrop.fade {\r\n    opacity: 0\r\n}\r\n\r\n.modal-backdrop.in {\r\n    opacity: .5\r\n}\r\n\r\n.modal-header {\r\n    padding: 15px;\r\n    border-bottom: 1px solid #e5e5e5\r\n}\r\n\r\n.modal-header::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -2px\r\n}\r\n\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 1.5\r\n}\r\n\r\n.modal-body {\r\n    position: relative;\r\n    padding: 15px\r\n}\r\n\r\n.modal-footer {\r\n    padding: 15px;\r\n    text-align: right;\r\n    border-top: 1px solid #e5e5e5\r\n}\r\n\r\n.modal-footer::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.modal-scrollbar-measure {\r\n    position: absolute;\r\n    top: -9999px;\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: scroll\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .modal-dialog {\r\n        max-width: 600px;\r\n        margin: 30px auto\r\n    }\r\n\r\n    .modal-sm {\r\n        max-width: 300px\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .modal-lg {\r\n        max-width: 900px\r\n    }\r\n}\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    z-index: 1070;\r\n    display: block;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    letter-spacing: normal;\r\n    line-break: auto;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    text-align: start;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    white-space: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    font-size: .875rem;\r\n    word-wrap: break-word;\r\n    opacity: 0\r\n}\r\n\r\n.tooltip.in {\r\n    opacity: .9\r\n}\r\n\r\n.tooltip.tooltip-top,\r\n.tooltip.bs-tether-element-attached-bottom {\r\n    padding: 5px 0;\r\n    margin-top: -3px\r\n}\r\n\r\n.tooltip.tooltip-top .tooltip-arrow,\r\n.tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px 5px 0;\r\n    border-top-color: #000\r\n}\r\n\r\n.tooltip.tooltip-right,\r\n.tooltip.bs-tether-element-attached-left {\r\n    padding: 0 5px;\r\n    margin-left: 3px\r\n}\r\n\r\n.tooltip.tooltip-right .tooltip-arrow,\r\n.tooltip.bs-tether-element-attached-left .tooltip-arrow {\r\n    top: 50%;\r\n    left: 0;\r\n    margin-top: -5px;\r\n    border-width: 5px 5px 5px 0;\r\n    border-right-color: #000\r\n}\r\n\r\n.tooltip.tooltip-bottom,\r\n.tooltip.bs-tether-element-attached-top {\r\n    padding: 5px 0;\r\n    margin-top: 3px\r\n}\r\n\r\n.tooltip.tooltip-bottom .tooltip-arrow,\r\n.tooltip.bs-tether-element-attached-top .tooltip-arrow {\r\n    top: 0;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 0 5px 5px;\r\n    border-bottom-color: #000\r\n}\r\n\r\n.tooltip.tooltip-left,\r\n.tooltip.bs-tether-element-attached-right {\r\n    padding: 0 5px;\r\n    margin-left: -3px\r\n}\r\n\r\n.tooltip.tooltip-left .tooltip-arrow,\r\n.tooltip.bs-tether-element-attached-right .tooltip-arrow {\r\n    top: 50%;\r\n    right: 0;\r\n    margin-top: -5px;\r\n    border-width: 5px 0 5px 5px;\r\n    border-left-color: #000\r\n}\r\n\r\n.tooltip-inner {\r\n    max-width: 200px;\r\n    padding: 3px 8px;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #000;\r\n    border-radius: .25rem\r\n}\r\n\r\n.tooltip-arrow {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-color: transparent;\r\n    border-style: solid\r\n}\r\n\r\n.popover {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1060;\r\n    display: block;\r\n    max-width: 276px;\r\n    padding: 1px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    letter-spacing: normal;\r\n    line-break: auto;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    text-align: start;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    white-space: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    font-size: .875rem;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: .3rem\r\n}\r\n\r\n.popover.popover-top,\r\n.popover.bs-tether-element-attached-bottom {\r\n    margin-top: -10px\r\n}\r\n\r\n.popover.popover-top .popover-arrow,\r\n.popover.bs-tether-element-attached-bottom .popover-arrow {\r\n    bottom: -11px;\r\n    left: 50%;\r\n    margin-left: -11px;\r\n    border-top-color: rgba(0, 0, 0, 0.25);\r\n    border-bottom-width: 0\r\n}\r\n\r\n.popover.popover-top .popover-arrow::after,\r\n.popover.bs-tether-element-attached-bottom .popover-arrow::after {\r\n    bottom: 1px;\r\n    margin-left: -10px;\r\n    content: \"\";\r\n    border-top-color: #fff;\r\n    border-bottom-width: 0\r\n}\r\n\r\n.popover.popover-right,\r\n.popover.bs-tether-element-attached-left {\r\n    margin-left: 10px\r\n}\r\n\r\n.popover.popover-right .popover-arrow,\r\n.popover.bs-tether-element-attached-left .popover-arrow {\r\n    top: 50%;\r\n    left: -11px;\r\n    margin-top: -11px;\r\n    border-right-color: rgba(0, 0, 0, 0.25);\r\n    border-left-width: 0\r\n}\r\n\r\n.popover.popover-right .popover-arrow::after,\r\n.popover.bs-tether-element-attached-left .popover-arrow::after {\r\n    bottom: -10px;\r\n    left: 1px;\r\n    content: \"\";\r\n    border-right-color: #fff;\r\n    border-left-width: 0\r\n}\r\n\r\n.popover.popover-bottom,\r\n.popover.bs-tether-element-attached-top {\r\n    margin-top: 10px\r\n}\r\n\r\n.popover.popover-bottom .popover-arrow,\r\n.popover.bs-tether-element-attached-top .popover-arrow {\r\n    top: -11px;\r\n    left: 50%;\r\n    margin-left: -11px;\r\n    border-top-width: 0;\r\n    border-bottom-color: rgba(0, 0, 0, 0.25)\r\n}\r\n\r\n.popover.popover-bottom .popover-arrow::after,\r\n.popover.bs-tether-element-attached-top .popover-arrow::after {\r\n    top: 1px;\r\n    margin-left: -10px;\r\n    content: \"\";\r\n    border-top-width: 0;\r\n    border-bottom-color: #fff\r\n}\r\n\r\n.popover.popover-left,\r\n.popover.bs-tether-element-attached-right {\r\n    margin-left: -10px\r\n}\r\n\r\n.popover.popover-left .popover-arrow,\r\n.popover.bs-tether-element-attached-right .popover-arrow {\r\n    top: 50%;\r\n    right: -11px;\r\n    margin-top: -11px;\r\n    border-right-width: 0;\r\n    border-left-color: rgba(0, 0, 0, 0.25)\r\n}\r\n\r\n.popover.popover-left .popover-arrow::after,\r\n.popover.bs-tether-element-attached-right .popover-arrow::after {\r\n    right: 1px;\r\n    bottom: -10px;\r\n    content: \"\";\r\n    border-right-width: 0;\r\n    border-left-color: #fff\r\n}\r\n\r\n.popover-title {\r\n    padding: 8px 14px;\r\n    margin: 0;\r\n    font-size: 1rem;\r\n    background-color: #f7f7f7;\r\n    border-bottom: 1px solid #ebebeb;\r\n    border-radius: .2375rem .2375rem 0 0\r\n}\r\n\r\n.popover-title:empty {\r\n    display: none\r\n}\r\n\r\n.popover-content {\r\n    padding: 9px 14px\r\n}\r\n\r\n.popover-arrow,\r\n.popover-arrow::after {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-color: transparent;\r\n    border-style: solid\r\n}\r\n\r\n.popover-arrow {\r\n    border-width: 11px\r\n}\r\n\r\n.popover-arrow::after {\r\n    content: \"\";\r\n    border-width: 10px\r\n}\r\n\r\n.carousel {\r\n    position: relative\r\n}\r\n\r\n.carousel-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden\r\n}\r\n\r\n.carousel-inner > .carousel-item {\r\n    position: relative;\r\n    display: none;\r\n    -webkit-transition: .6s ease-in-out left;\r\n    transition: .6s ease-in-out left\r\n}\r\n\r\n.carousel-inner > .carousel-item > img,\r\n.carousel-inner > .carousel-item > a > img {\r\n    line-height: 1\r\n}\r\n\r\n@media all and (transform-3d), (-webkit-transform-3d) {\r\n    .carousel-inner > .carousel-item {\r\n        -webkit-transition: -webkit-transform .6s ease-in-out;\r\n        transition: -webkit-transform .6s ease-in-out;\r\n        transition: transform .6s ease-in-out;\r\n        transition: transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\r\n        -webkit-backface-visibility: hidden;\r\n                backface-visibility: hidden;\r\n        -webkit-perspective: 1000px;\r\n                perspective: 1000px\r\n    }\r\n\r\n    .carousel-inner > .carousel-item.next,\r\n    .carousel-inner > .carousel-item.active.right {\r\n        left: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n                transform: translate3d(100%, 0, 0)\r\n    }\r\n\r\n    .carousel-inner > .carousel-item.prev,\r\n    .carousel-inner > .carousel-item.active.left {\r\n        left: 0;\r\n        -webkit-transform: translate3d(-100%, 0, 0);\r\n                transform: translate3d(-100%, 0, 0)\r\n    }\r\n\r\n    .carousel-inner > .carousel-item.next.left,\r\n    .carousel-inner > .carousel-item.prev.right,\r\n    .carousel-inner > .carousel-item.active {\r\n        left: 0;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0)\r\n    }\r\n}\r\n\r\n.carousel-inner > .active,\r\n.carousel-inner > .next,\r\n.carousel-inner > .prev {\r\n    display: block\r\n}\r\n\r\n.carousel-inner > .active {\r\n    left: 0\r\n}\r\n\r\n.carousel-inner > .next,\r\n.carousel-inner > .prev {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%\r\n}\r\n\r\n.carousel-inner > .next {\r\n    left: 100%\r\n}\r\n\r\n.carousel-inner > .prev {\r\n    left: -100%\r\n}\r\n\r\n.carousel-inner > .next.left,\r\n.carousel-inner > .prev.right {\r\n    left: 0\r\n}\r\n\r\n.carousel-inner > .active.left {\r\n    left: -100%\r\n}\r\n\r\n.carousel-inner > .active.right {\r\n    left: 100%\r\n}\r\n\r\n.carousel-control {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 15%;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\r\n    opacity: .5\r\n}\r\n\r\n.carousel-control.left {\r\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\r\n    background-repeat: repeat-x;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)\r\n}\r\n\r\n.carousel-control.right {\r\n    right: 0;\r\n    left: auto;\r\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\r\n    background-repeat: repeat-x;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)\r\n}\r\n\r\n.carousel-control:focus,\r\n.carousel-control:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    outline: 0;\r\n    opacity: .9\r\n}\r\n\r\n.carousel-control .icon-prev,\r\n.carousel-control .icon-next {\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 5;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    font-family: serif;\r\n    line-height: 1\r\n}\r\n\r\n.carousel-control .icon-prev {\r\n    left: 50%;\r\n    margin-left: -10px\r\n}\r\n\r\n.carousel-control .icon-next {\r\n    right: 50%;\r\n    margin-right: -10px\r\n}\r\n\r\n.carousel-control .icon-prev::before {\r\n    content: \"\\2039\"\r\n}\r\n\r\n.carousel-control .icon-next::before {\r\n    content: \"\\203a\"\r\n}\r\n\r\n.carousel-indicators {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 50%;\r\n    z-index: 15;\r\n    width: 60%;\r\n    padding-left: 0;\r\n    margin-left: -30%;\r\n    text-align: center;\r\n    list-style: none\r\n}\r\n\r\n.carousel-indicators li {\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 1px;\r\n    text-indent: -999px;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: 1px solid #fff;\r\n    border-radius: 10px\r\n}\r\n\r\n.carousel-indicators .active {\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: 0;\r\n    background-color: #fff\r\n}\r\n\r\n.carousel-caption {\r\n    position: absolute;\r\n    right: 15%;\r\n    bottom: 20px;\r\n    left: 15%;\r\n    z-index: 10;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6)\r\n}\r\n\r\n.carousel-caption .btn {\r\n    text-shadow: none\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .carousel-control .icon-prev,\r\n    .carousel-control .icon-next {\r\n        width: 30px;\r\n        height: 30px;\r\n        margin-top: -15px;\r\n        font-size: 30px\r\n    }\r\n\r\n    .carousel-control .icon-prev {\r\n        margin-left: -15px\r\n    }\r\n\r\n    .carousel-control .icon-next {\r\n        margin-right: -15px\r\n    }\r\n\r\n    .carousel-caption {\r\n        right: 20%;\r\n        left: 20%;\r\n        padding-bottom: 30px\r\n    }\r\n\r\n    .carousel-indicators {\r\n        bottom: 20px\r\n    }\r\n}\r\n\r\n.bg-inverse {\r\n    background-color: #373a3c\r\n}\r\n\r\n.bg-faded {\r\n    background-color: #f7f7f9\r\n}\r\n\r\n.bg-primary {\r\n    color: #fff !important;\r\n    background-color: #0275d8 !important\r\n}\r\n\r\na.bg-primary:focus,\r\na.bg-primary:hover {\r\n    background-color: #025aa5 !important\r\n}\r\n\r\n.bg-success {\r\n    color: #fff !important;\r\n    background-color: #5cb85c !important\r\n}\r\n\r\na.bg-success:focus,\r\na.bg-success:hover {\r\n    background-color: #449d44 !important\r\n}\r\n\r\n.bg-info {\r\n    color: #fff !important;\r\n    background-color: #5bc0de !important\r\n}\r\n\r\na.bg-info:focus,\r\na.bg-info:hover {\r\n    background-color: #31b0d5 !important\r\n}\r\n\r\n.bg-warning {\r\n    color: #fff !important;\r\n    background-color: #f0ad4e !important\r\n}\r\n\r\na.bg-warning:focus,\r\na.bg-warning:hover {\r\n    background-color: #ec971f !important\r\n}\r\n\r\n.bg-danger {\r\n    color: #fff !important;\r\n    background-color: #d9534f !important\r\n}\r\n\r\na.bg-danger:focus,\r\na.bg-danger:hover {\r\n    background-color: #c9302c !important\r\n}\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.d-block {\r\n    display: block !important\r\n}\r\n\r\n.d-inline-block {\r\n    display: inline-block !important\r\n}\r\n\r\n.d-inline {\r\n    display: inline !important\r\n}\r\n\r\n.flex-xs-first {\r\n    -webkit-box-ordinal-group: 0;\r\n            order: -1\r\n}\r\n\r\n.flex-xs-last {\r\n    -webkit-box-ordinal-group: 2;\r\n            order: 1\r\n}\r\n\r\n.flex-xs-unordered {\r\n    -webkit-box-ordinal-group: 1;\r\n            order: 0\r\n}\r\n\r\n.flex-items-xs-top {\r\n    -webkit-box-align: start;\r\n            align-items: flex-start\r\n}\r\n\r\n.flex-items-xs-middle {\r\n    -webkit-box-align: center;\r\n            align-items: center\r\n}\r\n\r\n.flex-items-xs-bottom {\r\n    -webkit-box-align: end;\r\n            align-items: flex-end\r\n}\r\n\r\n.flex-xs-top {\r\n    align-self: flex-start\r\n}\r\n\r\n.flex-xs-middle {\r\n    align-self: center\r\n}\r\n\r\n.flex-xs-bottom {\r\n    align-self: flex-end\r\n}\r\n\r\n.flex-items-xs-left {\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start\r\n}\r\n\r\n.flex-items-xs-center {\r\n    -webkit-box-pack: center;\r\n            justify-content: center\r\n}\r\n\r\n.flex-items-xs-right {\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end\r\n}\r\n\r\n.flex-items-xs-around {\r\n    justify-content: space-around\r\n}\r\n\r\n.flex-items-xs-between {\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .flex-sm-first {\r\n        -webkit-box-ordinal-group: 0;\r\n                order: -1\r\n    }\r\n\r\n    .flex-sm-last {\r\n        -webkit-box-ordinal-group: 2;\r\n                order: 1\r\n    }\r\n\r\n    .flex-sm-unordered {\r\n        -webkit-box-ordinal-group: 1;\r\n                order: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .flex-items-sm-top {\r\n        -webkit-box-align: start;\r\n                align-items: flex-start\r\n    }\r\n\r\n    .flex-items-sm-middle {\r\n        -webkit-box-align: center;\r\n                align-items: center\r\n    }\r\n\r\n    .flex-items-sm-bottom {\r\n        -webkit-box-align: end;\r\n                align-items: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .flex-sm-top {\r\n        align-self: flex-start\r\n    }\r\n\r\n    .flex-sm-middle {\r\n        align-self: center\r\n    }\r\n\r\n    .flex-sm-bottom {\r\n        align-self: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .flex-items-sm-left {\r\n        -webkit-box-pack: start;\r\n                justify-content: flex-start\r\n    }\r\n\r\n    .flex-items-sm-center {\r\n        -webkit-box-pack: center;\r\n                justify-content: center\r\n    }\r\n\r\n    .flex-items-sm-right {\r\n        -webkit-box-pack: end;\r\n                justify-content: flex-end\r\n    }\r\n\r\n    .flex-items-sm-around {\r\n        justify-content: space-around\r\n    }\r\n\r\n    .flex-items-sm-between {\r\n        -webkit-box-pack: justify;\r\n                justify-content: space-between\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .flex-md-first {\r\n        -webkit-box-ordinal-group: 0;\r\n                order: -1\r\n    }\r\n\r\n    .flex-md-last {\r\n        -webkit-box-ordinal-group: 2;\r\n                order: 1\r\n    }\r\n\r\n    .flex-md-unordered {\r\n        -webkit-box-ordinal-group: 1;\r\n                order: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .flex-items-md-top {\r\n        -webkit-box-align: start;\r\n                align-items: flex-start\r\n    }\r\n\r\n    .flex-items-md-middle {\r\n        -webkit-box-align: center;\r\n                align-items: center\r\n    }\r\n\r\n    .flex-items-md-bottom {\r\n        -webkit-box-align: end;\r\n                align-items: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .flex-md-top {\r\n        align-self: flex-start\r\n    }\r\n\r\n    .flex-md-middle {\r\n        align-self: center\r\n    }\r\n\r\n    .flex-md-bottom {\r\n        align-self: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .flex-items-md-left {\r\n        -webkit-box-pack: start;\r\n                justify-content: flex-start\r\n    }\r\n\r\n    .flex-items-md-center {\r\n        -webkit-box-pack: center;\r\n                justify-content: center\r\n    }\r\n\r\n    .flex-items-md-right {\r\n        -webkit-box-pack: end;\r\n                justify-content: flex-end\r\n    }\r\n\r\n    .flex-items-md-around {\r\n        justify-content: space-around\r\n    }\r\n\r\n    .flex-items-md-between {\r\n        -webkit-box-pack: justify;\r\n                justify-content: space-between\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .flex-lg-first {\r\n        -webkit-box-ordinal-group: 0;\r\n                order: -1\r\n    }\r\n\r\n    .flex-lg-last {\r\n        -webkit-box-ordinal-group: 2;\r\n                order: 1\r\n    }\r\n\r\n    .flex-lg-unordered {\r\n        -webkit-box-ordinal-group: 1;\r\n                order: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .flex-items-lg-top {\r\n        -webkit-box-align: start;\r\n                align-items: flex-start\r\n    }\r\n\r\n    .flex-items-lg-middle {\r\n        -webkit-box-align: center;\r\n                align-items: center\r\n    }\r\n\r\n    .flex-items-lg-bottom {\r\n        -webkit-box-align: end;\r\n                align-items: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .flex-lg-top {\r\n        align-self: flex-start\r\n    }\r\n\r\n    .flex-lg-middle {\r\n        align-self: center\r\n    }\r\n\r\n    .flex-lg-bottom {\r\n        align-self: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .flex-items-lg-left {\r\n        -webkit-box-pack: start;\r\n                justify-content: flex-start\r\n    }\r\n\r\n    .flex-items-lg-center {\r\n        -webkit-box-pack: center;\r\n                justify-content: center\r\n    }\r\n\r\n    .flex-items-lg-right {\r\n        -webkit-box-pack: end;\r\n                justify-content: flex-end\r\n    }\r\n\r\n    .flex-items-lg-around {\r\n        justify-content: space-around\r\n    }\r\n\r\n    .flex-items-lg-between {\r\n        -webkit-box-pack: justify;\r\n                justify-content: space-between\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .flex-xl-first {\r\n        -webkit-box-ordinal-group: 0;\r\n                order: -1\r\n    }\r\n\r\n    .flex-xl-last {\r\n        -webkit-box-ordinal-group: 2;\r\n                order: 1\r\n    }\r\n\r\n    .flex-xl-unordered {\r\n        -webkit-box-ordinal-group: 1;\r\n                order: 0\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .flex-items-xl-top {\r\n        -webkit-box-align: start;\r\n                align-items: flex-start\r\n    }\r\n\r\n    .flex-items-xl-middle {\r\n        -webkit-box-align: center;\r\n                align-items: center\r\n    }\r\n\r\n    .flex-items-xl-bottom {\r\n        -webkit-box-align: end;\r\n                align-items: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .flex-xl-top {\r\n        align-self: flex-start\r\n    }\r\n\r\n    .flex-xl-middle {\r\n        align-self: center\r\n    }\r\n\r\n    .flex-xl-bottom {\r\n        align-self: flex-end\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .flex-items-xl-left {\r\n        -webkit-box-pack: start;\r\n                justify-content: flex-start\r\n    }\r\n\r\n    .flex-items-xl-center {\r\n        -webkit-box-pack: center;\r\n                justify-content: center\r\n    }\r\n\r\n    .flex-items-xl-right {\r\n        -webkit-box-pack: end;\r\n                justify-content: flex-end\r\n    }\r\n\r\n    .flex-items-xl-around {\r\n        justify-content: space-around\r\n    }\r\n\r\n    .flex-items-xl-between {\r\n        -webkit-box-pack: justify;\r\n                justify-content: space-between\r\n    }\r\n}\r\n\r\n.pull-xs-left {\r\n    float: left !important\r\n}\r\n\r\n.pull-xs-right {\r\n    float: right !important\r\n}\r\n\r\n.pull-xs-none {\r\n    float: none !important\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .pull-sm-left {\r\n        float: left !important\r\n    }\r\n\r\n    .pull-sm-right {\r\n        float: right !important\r\n    }\r\n\r\n    .pull-sm-none {\r\n        float: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .pull-md-left {\r\n        float: left !important\r\n    }\r\n\r\n    .pull-md-right {\r\n        float: right !important\r\n    }\r\n\r\n    .pull-md-none {\r\n        float: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .pull-lg-left {\r\n        float: left !important\r\n    }\r\n\r\n    .pull-lg-right {\r\n        float: right !important\r\n    }\r\n\r\n    .pull-lg-none {\r\n        float: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .pull-xl-left {\r\n        float: left !important\r\n    }\r\n\r\n    .pull-xl-right {\r\n        float: right !important\r\n    }\r\n\r\n    .pull-xl-none {\r\n        float: none !important\r\n    }\r\n}\r\n\r\n.sr-only {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip: rect(0, 0, 0, 0);\r\n    border: 0\r\n}\r\n\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n    position: static;\r\n    width: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    clip: auto\r\n}\r\n\r\n.w-100 {\r\n    width: 100% !important\r\n}\r\n\r\n.m-x-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important\r\n}\r\n\r\n.m-a-0 {\r\n    margin: 0 0 !important\r\n}\r\n\r\n.m-t-0 {\r\n    margin-top: 0 !important\r\n}\r\n\r\n.m-r-0 {\r\n    margin-right: 0 !important\r\n}\r\n\r\n.m-b-0 {\r\n    margin-bottom: 0 !important\r\n}\r\n\r\n.m-l-0 {\r\n    margin-left: 0 !important\r\n}\r\n\r\n.m-x-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important\r\n}\r\n\r\n.m-y-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important\r\n}\r\n\r\n.m-a-1 {\r\n    margin: 1rem 1rem !important\r\n}\r\n\r\n.m-t-1 {\r\n    margin-top: 1rem !important\r\n}\r\n\r\n.m-r-1 {\r\n    margin-right: 1rem !important\r\n}\r\n\r\n.m-b-1 {\r\n    margin-bottom: 1rem !important\r\n}\r\n\r\n.m-l-1 {\r\n    margin-left: 1rem !important\r\n}\r\n\r\n.m-x-1 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important\r\n}\r\n\r\n.m-y-1 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important\r\n}\r\n\r\n.m-a-2 {\r\n    margin: 1.5rem 1.5rem !important\r\n}\r\n\r\n.m-t-2 {\r\n    margin-top: 1.5rem !important\r\n}\r\n\r\n.m-r-2 {\r\n    margin-right: 1.5rem !important\r\n}\r\n\r\n.m-b-2 {\r\n    margin-bottom: 1.5rem !important\r\n}\r\n\r\n.m-l-2 {\r\n    margin-left: 1.5rem !important\r\n}\r\n\r\n.m-x-2 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important\r\n}\r\n\r\n.m-y-2 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important\r\n}\r\n\r\n.m-a-3 {\r\n    margin: 3rem 3rem !important\r\n}\r\n\r\n.m-t-3 {\r\n    margin-top: 3rem !important\r\n}\r\n\r\n.m-r-3 {\r\n    margin-right: 3rem !important\r\n}\r\n\r\n.m-b-3 {\r\n    margin-bottom: 3rem !important\r\n}\r\n\r\n.m-l-3 {\r\n    margin-left: 3rem !important\r\n}\r\n\r\n.m-x-3 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important\r\n}\r\n\r\n.m-y-3 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important\r\n}\r\n\r\n.p-a-0 {\r\n    padding: 0 0 !important\r\n}\r\n\r\n.p-t-0 {\r\n    padding-top: 0 !important\r\n}\r\n\r\n.p-r-0 {\r\n    padding-right: 0 !important\r\n}\r\n\r\n.p-b-0 {\r\n    padding-bottom: 0 !important\r\n}\r\n\r\n.p-l-0 {\r\n    padding-left: 0 !important\r\n}\r\n\r\n.p-x-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important\r\n}\r\n\r\n.p-y-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important\r\n}\r\n\r\n.p-a-1 {\r\n    padding: 1rem 1rem !important\r\n}\r\n\r\n.p-t-1 {\r\n    padding-top: 1rem !important\r\n}\r\n\r\n.p-r-1 {\r\n    padding-right: 1rem !important\r\n}\r\n\r\n.p-b-1 {\r\n    padding-bottom: 1rem !important\r\n}\r\n\r\n.p-l-1 {\r\n    padding-left: 1rem !important\r\n}\r\n\r\n.p-x-1 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important\r\n}\r\n\r\n.p-y-1 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important\r\n}\r\n\r\n.p-a-2 {\r\n    padding: 1.5rem 1.5rem !important\r\n}\r\n\r\n.p-t-2 {\r\n    padding-top: 1.5rem !important\r\n}\r\n\r\n.p-r-2 {\r\n    padding-right: 1.5rem !important\r\n}\r\n\r\n.p-b-2 {\r\n    padding-bottom: 1.5rem !important\r\n}\r\n\r\n.p-l-2 {\r\n    padding-left: 1.5rem !important\r\n}\r\n\r\n.p-x-2 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important\r\n}\r\n\r\n.p-y-2 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important\r\n}\r\n\r\n.p-a-3 {\r\n    padding: 3rem 3rem !important\r\n}\r\n\r\n.p-t-3 {\r\n    padding-top: 3rem !important\r\n}\r\n\r\n.p-r-3 {\r\n    padding-right: 3rem !important\r\n}\r\n\r\n.p-b-3 {\r\n    padding-bottom: 3rem !important\r\n}\r\n\r\n.p-l-3 {\r\n    padding-left: 3rem !important\r\n}\r\n\r\n.p-x-3 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important\r\n}\r\n\r\n.p-y-3 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important\r\n}\r\n\r\n.pos-f-t {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030\r\n}\r\n\r\n.text-justify {\r\n    text-align: justify !important\r\n}\r\n\r\n.text-nowrap {\r\n    white-space: nowrap !important\r\n}\r\n\r\n.text-truncate {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap\r\n}\r\n\r\n.text-xs-left {\r\n    text-align: left !important\r\n}\r\n\r\n.text-xs-right {\r\n    text-align: right !important\r\n}\r\n\r\n.text-xs-center {\r\n    text-align: center !important\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .text-sm-left {\r\n        text-align: left !important\r\n    }\r\n\r\n    .text-sm-right {\r\n        text-align: right !important\r\n    }\r\n\r\n    .text-sm-center {\r\n        text-align: center !important\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .text-md-left {\r\n        text-align: left !important\r\n    }\r\n\r\n    .text-md-right {\r\n        text-align: right !important\r\n    }\r\n\r\n    .text-md-center {\r\n        text-align: center !important\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .text-lg-left {\r\n        text-align: left !important\r\n    }\r\n\r\n    .text-lg-right {\r\n        text-align: right !important\r\n    }\r\n\r\n    .text-lg-center {\r\n        text-align: center !important\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .text-xl-left {\r\n        text-align: left !important\r\n    }\r\n\r\n    .text-xl-right {\r\n        text-align: right !important\r\n    }\r\n\r\n    .text-xl-center {\r\n        text-align: center !important\r\n    }\r\n}\r\n\r\n.text-lowercase {\r\n    text-transform: lowercase !important\r\n}\r\n\r\n.text-uppercase {\r\n    text-transform: uppercase !important\r\n}\r\n\r\n.text-capitalize {\r\n    text-transform: capitalize !important\r\n}\r\n\r\n.font-weight-normal {\r\n    font-weight: normal\r\n}\r\n\r\n.font-weight-bold {\r\n    font-weight: bold\r\n}\r\n\r\n.font-italic {\r\n    font-style: italic\r\n}\r\n\r\n.text-muted {\r\n    color: #818a91 !important\r\n}\r\n\r\na.text-muted:focus,\r\na.text-muted:hover {\r\n    color: #687077\r\n}\r\n\r\n.text-primary {\r\n    color: #0275d8 !important\r\n}\r\n\r\na.text-primary:focus,\r\na.text-primary:hover {\r\n    color: #025aa5\r\n}\r\n\r\n.text-success {\r\n    color: #5cb85c !important\r\n}\r\n\r\na.text-success:focus,\r\na.text-success:hover {\r\n    color: #449d44\r\n}\r\n\r\n.text-info {\r\n    color: #5bc0de !important\r\n}\r\n\r\na.text-info:focus,\r\na.text-info:hover {\r\n    color: #31b0d5\r\n}\r\n\r\n.text-warning {\r\n    color: #f0ad4e !important\r\n}\r\n\r\na.text-warning:focus,\r\na.text-warning:hover {\r\n    color: #ec971f\r\n}\r\n\r\n.text-danger {\r\n    color: #d9534f !important\r\n}\r\n\r\na.text-danger:focus,\r\na.text-danger:hover {\r\n    color: #c9302c\r\n}\r\n\r\n.text-hide {\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0\r\n}\r\n\r\n.invisible {\r\n    visibility: hidden !important\r\n}\r\n\r\n.hidden-xs-up {\r\n    display: none !important\r\n}\r\n\r\n@media (max-width: 543px) {\r\n    .hidden-xs-down {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 544px) {\r\n    .hidden-sm-up {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .hidden-sm-down {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .hidden-md-up {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .hidden-md-down {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .hidden-lg-up {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n    .hidden-lg-down {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .hidden-xl-up {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n.hidden-xl-down {\r\n    display: none !important\r\n}\r\n\r\n.visible-print-block {\r\n    display: none !important\r\n}\r\n\r\n@media print {\r\n    .visible-print-block {\r\n        display: block !important\r\n    }\r\n}\r\n\r\n.visible-print-inline {\r\n    display: none !important\r\n}\r\n\r\n@media print {\r\n    .visible-print-inline {\r\n        display: inline !important\r\n    }\r\n}\r\n\r\n.visible-print-inline-block {\r\n    display: none !important\r\n}\r\n\r\n@media print {\r\n    .visible-print-inline-block {\r\n        display: inline-block !important\r\n    }\r\n}\r\n\r\n@media print {\r\n    .hidden-print {\r\n        display: none !important\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=bootstrap-flex.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWxpc3QvcHJvamV0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQWU7WUFBZixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLG1DQUEyQjtJQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVB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QTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBR0EsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9qZXQvcHJvamV0LWxpc3QvcHJvamV0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jYXJkLWRlY2sgZGl2LmNhcmQge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDE2cHggMS42NjY2NiU7XHJcbiAgICBmbGV4OiAwIDEgMzMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogI0FBQTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG5kaXYuY2FyZC1ibG9jayB7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE0cHggMCAxNHB4O1xyXG59XHJcblxyXG5kaXYuY2FyZC1ibG9jayA+IGRpdixcclxuLmNhcmQtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDhweCAwIDAgMDtcclxufVxyXG5cclxuLmNhcmQtYmxvY2sgYTpsaW5rLCBzcGFuIGE6bGluayB7XHJcbiAgICBjb2xvcjogI0ZCOEQwMDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5jYXJkLmF0dHJpYnV0ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOUQyOEI7XHJcbn1cclxuXHJcbi5jYXJkLm1ldHJpYyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMEI3RkY7XHJcbn1cclxuXHJcbi5jYXJkLXNlY3Rpb246Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmNhcmQtc2VjdGlvbjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM4RDhEOEQ7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlLFxyXG4uY2FyZC1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbiAuY2FyZC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkLXNlY3Rpb24gPiAuY2FyZC10ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIC5jYXJkLXRleHQgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbi5mdWxsSGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRMaW5rIHtcclxuICAgIGNvbnRlbnQ6IFwidGVzdFwiICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXMgZWFzZTtcclxufVxyXG5cclxuLnRyaWdnZXIgLnR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmF0dHJpYnV0ZSAudHJpZ2dlciAudHlwZSxcclxuLmF0dHJpYnV0ZVRpcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjlEMjhCO1xyXG59XHJcblxyXG4ubWV0cmljIC50cmlnZ2VyIC50eXBlLFxyXG4ubWV0cmljVGlwIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMEI3RkY7XHJcbn1cclxuXHJcbi50cmlnZ2VyIC50eXBlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udHJpZ2dlciAudHlwZTpiZWZvcmUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYXR0cmlidXRlIC50cmlnZ2VyIC50eXBlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIkF0dHJpYnV0ZSBcIjtcclxufVxyXG5cclxuLm1ldHJpYyAudHJpZ2dlciAudHlwZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJNZXRyaWMgXCI7XHJcbn1cclxuXHJcbi5xdGlwcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIG1heC13aWR0aDogMzM4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDMzOHB4O1xyXG59XHJcblxyXG4ucXRpcHMuYXR0cmlidXRlVGlwIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAycHg7XHJcbn1cclxuXHJcbnF0aXBzLm1ldHJpY1RpcCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xyXG59XHJcblxyXG4ucXRpcC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5xdGlwcyBoMyB7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucXRpcHMgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubGlua1RpcHMge1xyXG4gICAgbWluLXdpZHRoOiA3OTBweDtcclxuICAgIG1heC13aWR0aDogNzkwcHg7XHJcbn1cclxuXHJcbi5saW5rVGlwcyAucXRpcC10aXRsZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MDQwNDA7XHJcbn1cclxuXHJcbi5saW5rVGlwcyAucXRpcC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxufVxyXG5cclxuLmxpbmtUaXBzIC5xdGlwLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG59XHJcblxyXG4ubGlua1RpcHMgLnF0aXAtY29udGVudCBpbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgcGFkZGluZzogMnB4IDRweDtcclxufVxyXG5cclxuLmxpbmtUaXBzIC5xdGlwLWNsb3NlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5saW5rVGlwcyAucXRpcC1jbG9zZSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5saW5rVGlwcyAucXRpcC1jb250ZW50IGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50cmlnZ2VyOmFmdGVyLFxyXG4udHJpZ2dlciAudHlwZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcXGYwNWFcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi50cmlnZ2VyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udHJpZ2dlcjphZnRlciB7XHJcbiAgICBjb2xvcjogI0Q5RDlEOTtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMGQ3XCI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC4yNXM7XHJcbn1cclxuXHJcbi50cmlnZ2VyOmhvdmVyOmFmdGVyLFxyXG4uY2FyZExpbms6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNGQjhEMDA7XHJcbn1cclxuXHJcbi50cmlnZ2VyLmRyb3BwZWREb3duOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uc2hhZG93cyB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4uZWxsaXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5lbGxpcC1saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZWxsaXAsXHJcbi5lbGxpcC1saW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnAudHlwZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsXHJcbn1cclxuXHJcbi5hdHRyaWJ1dGVUaXAge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjlEMjhCO1xyXG59XHJcblxyXG4uYXR0cmlidXRlLFxyXG4ubWV0cmljIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIVxyXG4gICAqIEJvb3RzdHJhcCB2NC4wLjAtYWxwaGEuMyAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tKVxyXG4gICAqIENvcHlyaWdodCAyMDExLTIwMTYgVGhlIEJvb3RzdHJhcCBBdXRob3JzXHJcbiAgICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICAgKi9cclxuXHJcblxyXG4vKiEgbm9ybWFsaXplLmNzcyB2NC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCVcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbm1haW4sXHJcbm1lbnUsXHJcbm5hdixcclxuc2VjdGlvbixcclxuc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG5hdWRpbyxcclxuY2FudmFzLFxyXG5wcm9ncmVzcyxcclxudmlkZW8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAwXHJcbn1cclxuXHJcbnByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZVxyXG59XHJcblxyXG50ZW1wbGF0ZSxcclxuW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5hIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbmE6YWN0aXZlLFxyXG5hOmhvdmVyIHtcclxuICAgIG91dGxpbmUtd2lkdGg6IDBcclxufVxyXG5cclxuYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkXHJcbn1cclxuXHJcbmIsXHJcbnN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdFxyXG59XHJcblxyXG5iLFxyXG5zdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlclxyXG59XHJcblxyXG5kZm4ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiAwLjY3ZW0gMFxyXG59XHJcblxyXG5tYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XHJcbiAgICBjb2xvcjogIzAwMFxyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJVxyXG59XHJcblxyXG5zdWIsXHJcbnN1cCB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lXHJcbn1cclxuXHJcbnN1YiB7XHJcbiAgICBib3R0b206IC0wLjI1ZW1cclxufVxyXG5cclxuc3VwIHtcclxuICAgIHRvcDogLTAuNWVtXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmVcclxufVxyXG5cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG5jb2RlLFxyXG5rYmQsXHJcbnByZSxcclxuc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDFlbVxyXG59XHJcblxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAxZW0gNDBweFxyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlXHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgZm9udDogaW5oZXJpdFxyXG59XHJcblxyXG5vcHRncm91cCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGVcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmVcclxufVxyXG5cclxuYnV0dG9uLFxyXG5bdHlwZT1cImJ1dHRvblwiXSxcclxuW3R5cGU9XCJyZXNldFwiXSxcclxuW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbltkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBbdHlwZT1cImJ1dHRvblwiXSxcclxuW3R5cGU9XCJyZXNldFwiXSxcclxuW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b25cclxufVxyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwXHJcbn1cclxuXHJcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuaW5wdXQ6LW1vei1mb2N1c3Jpbmcge1xyXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtXHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsXHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuXHJcblt0eXBlPVwiY2hlY2tib3hcIl0sXHJcblt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogYXV0b1xyXG59XHJcblxyXG5bdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZFxyXG59XHJcblxyXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lXHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAqLFxyXG4gICAgKjo6YmVmb3JlLFxyXG4gICAgKjo6YWZ0ZXIsXHJcbiAgICAqOjpmaXJzdC1sZXR0ZXIsXHJcbiAgICAqOjpmaXJzdC1saW5lIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIGEsXHJcbiAgICBhOnZpc2l0ZWQge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbiAgICB9XHJcblxyXG4gICAgYWJiclt0aXRsZV06OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCJcclxuICAgIH1cclxuXHJcbiAgICBwcmUsXHJcbiAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZFxyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXBcclxuICAgIH1cclxuXHJcbiAgICB0cixcclxuICAgIGltZyB7XHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkXHJcbiAgICB9XHJcblxyXG4gICAgcCxcclxuICAgIGgyLFxyXG4gICAgaDMge1xyXG4gICAgICAgIG9ycGhhbnM6IDM7XHJcbiAgICAgICAgd2lkb3dzOiAzXHJcbiAgICB9XHJcblxyXG4gICAgaDIsXHJcbiAgICBoMyB7XHJcbiAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWRcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biA+IC5jYXJldCxcclxuICAgIC5kcm9wdXAgPiAuYnRuID4gLmNhcmV0IHtcclxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAudGFnIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwXHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUgdGQsXHJcbiAgICAudGFibGUgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1ib3JkZXJlZCB0aCxcclxuICAgIC50YWJsZS1ib3JkZXJlZCB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXRcclxufVxyXG5cclxuQC1tcy12aWV3cG9ydCB7XHJcbiAgICB3aWR0aDogZGV2aWNlLXdpZHRoXHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMzNzNhM2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcblt0YWJpbmRleD1cIi0xXCJdOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbVxyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbn1cclxuXHJcbmFiYnJbdGl0bGVdLFxyXG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcclxuICAgIGN1cnNvcjogaGVscDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzgxOGE5MVxyXG59XHJcblxyXG5hZGRyZXNzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdFxyXG59XHJcblxyXG5vbCxcclxudWwsXHJcbmRsIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbn1cclxuXHJcbm9sIG9sLFxyXG51bCB1bCxcclxub2wgdWwsXHJcbnVsIG9sIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuZHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuZGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMFxyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICAgIG1hcmdpbjogMCAwIDFyZW1cclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogI0ZCOEQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG5hOmZvY3VzLFxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRkI4RDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcclxufVxyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweFxyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyxcclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6aG92ZXIge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZVxyXG59XHJcblxyXG5wcmUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBvdmVyZmxvdzogYXV0b1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAwIDAgMXJlbVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG59XHJcblxyXG5bcm9sZT1cImJ1dHRvblwiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuYSxcclxuYXJlYSxcclxuYnV0dG9uLFxyXG5bcm9sZT1cImJ1dHRvblwiXSxcclxuaW5wdXQsXHJcbmxhYmVsLFxyXG5zZWxlY3QsXHJcbnN1bW1hcnksXHJcbnRleHRhcmVhIHtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG5jYXB0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gICAgY29sb3I6ICM4MThhOTE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY2FwdGlvbi1zaWRlOiBib3R0b21cclxufVxyXG5cclxudGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdFxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbVxyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZDtcclxuICAgIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvclxyXG59XHJcblxyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxyXG5pbnB1dFt0eXBlPVwibW9udGhcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBsaXN0Ym94XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogdmVydGljYWxcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXRcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmVcclxufVxyXG5cclxub3V0cHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcblxyXG5baGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxuLmgxLFxyXG4uaDIsXHJcbi5oMyxcclxuLmg0LFxyXG4uaDUsXHJcbi5oNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogaW5oZXJpdFxyXG59XHJcblxyXG5oMSxcclxuLmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtXHJcbn1cclxuXHJcbmgyLFxyXG4uaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbn1cclxuXHJcbmgzLFxyXG4uaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtXHJcbn1cclxuXHJcbmg0LFxyXG4uaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW1cclxufVxyXG5cclxuaDUsXHJcbi5oNSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW1cclxufVxyXG5cclxuaDYsXHJcbi5oNiB7XHJcbiAgICBmb250LXNpemU6IDFyZW1cclxufVxyXG5cclxuLmxlYWQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMFxyXG59XHJcblxyXG4uZGlzcGxheS0xIHtcclxuICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxufVxyXG5cclxuLmRpc3BsYXktMiB7XHJcbiAgICBmb250LXNpemU6IDUuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxufVxyXG5cclxuLmRpc3BsYXktMyB7XHJcbiAgICBmb250LXNpemU6IDQuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxufVxyXG5cclxuLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXHJcbn1cclxuXHJcbnNtYWxsLFxyXG4uc21hbGwge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbn1cclxuXHJcbm1hcmssXHJcbi5tYXJrIHtcclxuICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzXHJcbn1cclxuXHJcbi5saXN0LXVuc3R5bGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLmxpc3QtaW5saW5lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLmxpc3QtaW5saW5lLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbi5saXN0LWlubGluZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcclxufVxyXG5cclxuLmluaXRpYWxpc20ge1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcbn1cclxuXHJcbi5ibG9ja3F1b3RlIHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IC4yNXJlbSBzb2xpZCAjZWNlZWVmXHJcbn1cclxuXHJcbi5ibG9ja3F1b3RlLWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICM4MThhOTFcclxufVxyXG5cclxuLmJsb2NrcXVvdGUtZm9vdGVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMTQgXFwwMEEwXCJcclxufVxyXG5cclxuLmJsb2NrcXVvdGUtcmV2ZXJzZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IC4yNXJlbSBzb2xpZCAjZWNlZWVmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBcclxufVxyXG5cclxuLmJsb2NrcXVvdGUtcmV2ZXJzZSAuYmxvY2txdW90ZS1mb290ZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiXHJcbn1cclxuXHJcbi5ibG9ja3F1b3RlLXJldmVyc2UgLmJsb2NrcXVvdGUtZm9vdGVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMDBBMCBcXDIwMTRcIlxyXG59XHJcblxyXG4uaW1nLWZsdWlkLFxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuY2Fyb3VzZWwtaXRlbSA+IGltZyxcclxuLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0gPiBhID4gaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvXHJcbn1cclxuXHJcbi5pbWctcm91bmRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbVxyXG59XHJcblxyXG4uaW1nLXRodW1ibmFpbCB7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG9cclxufVxyXG5cclxuLmltZy1jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbn1cclxuXHJcbi5maWd1cmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbi5maWd1cmUtaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFcclxufVxyXG5cclxuLmZpZ3VyZS1jYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgY29sb3I6ICM4MThhOTFcclxufVxyXG5cclxuY29kZSxcclxua2JkLFxyXG5wcmUsXHJcbnNhbXAge1xyXG4gICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZVxyXG59XHJcblxyXG5jb2RlIHtcclxuICAgIHBhZGRpbmc6IC4ycmVtIC40cmVtO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBjb2xvcjogI2JkNDE0NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxua2JkIHtcclxuICAgIHBhZGRpbmc6IC4ycmVtIC40cmVtO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbVxyXG59XHJcblxyXG5rYmQga2JkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG5wcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgY29sb3I6ICMzNzNhM2NcclxufVxyXG5cclxucHJlIGNvZGUge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5wcmUtc2Nyb2xsYWJsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogNTc2cHhcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDcyMHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5NDBweFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNDBweFxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweFxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4XHJcbn1cclxuXHJcbi5jb2wteHMtMSxcclxuLmNvbC14cy0yLFxyXG4uY29sLXhzLTMsXHJcbi5jb2wteHMtNCxcclxuLmNvbC14cy01LFxyXG4uY29sLXhzLTYsXHJcbi5jb2wteHMtNyxcclxuLmNvbC14cy04LFxyXG4uY29sLXhzLTksXHJcbi5jb2wteHMtMTAsXHJcbi5jb2wteHMtMTEsXHJcbi5jb2wteHMtMTIsXHJcbi5jb2wtc20tMSxcclxuLmNvbC1zbS0yLFxyXG4uY29sLXNtLTMsXHJcbi5jb2wtc20tNCxcclxuLmNvbC1zbS01LFxyXG4uY29sLXNtLTYsXHJcbi5jb2wtc20tNyxcclxuLmNvbC1zbS04LFxyXG4uY29sLXNtLTksXHJcbi5jb2wtc20tMTAsXHJcbi5jb2wtc20tMTEsXHJcbi5jb2wtc20tMTIsXHJcbi5jb2wtbWQtMSxcclxuLmNvbC1tZC0yLFxyXG4uY29sLW1kLTMsXHJcbi5jb2wtbWQtNCxcclxuLmNvbC1tZC01LFxyXG4uY29sLW1kLTYsXHJcbi5jb2wtbWQtNyxcclxuLmNvbC1tZC04LFxyXG4uY29sLW1kLTksXHJcbi5jb2wtbWQtMTAsXHJcbi5jb2wtbWQtMTEsXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbGctMSxcclxuLmNvbC1sZy0yLFxyXG4uY29sLWxnLTMsXHJcbi5jb2wtbGctNCxcclxuLmNvbC1sZy01LFxyXG4uY29sLWxnLTYsXHJcbi5jb2wtbGctNyxcclxuLmNvbC1sZy04LFxyXG4uY29sLWxnLTksXHJcbi5jb2wtbGctMTAsXHJcbi5jb2wtbGctMTEsXHJcbi5jb2wtbGctMTIsXHJcbi5jb2wteGwtMSxcclxuLmNvbC14bC0yLFxyXG4uY29sLXhsLTMsXHJcbi5jb2wteGwtNCxcclxuLmNvbC14bC01LFxyXG4uY29sLXhsLTYsXHJcbi5jb2wteGwtNyxcclxuLmNvbC14bC04LFxyXG4uY29sLXhsLTksXHJcbi5jb2wteGwtMTAsXHJcbi5jb2wteGwtMTEsXHJcbi5jb2wteGwtMTIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5jb2wteHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHhcclxufVxyXG5cclxuLmNvbC14cy0xIHtcclxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcclxuICAgIG1heC13aWR0aDogOC4zMzMzMyVcclxufVxyXG5cclxuLmNvbC14cy0yIHtcclxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XHJcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JVxyXG59XHJcblxyXG4uY29sLXhzLTMge1xyXG4gICAgZmxleDogMCAwIDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlXHJcbn1cclxuXHJcbi5jb2wteHMtNCB7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyVcclxufVxyXG5cclxuLmNvbC14cy01IHtcclxuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XHJcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JVxyXG59XHJcblxyXG4uY29sLXhzLTYge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlXHJcbn1cclxuXHJcbi5jb2wteHMtNyB7XHJcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyVcclxufVxyXG5cclxuLmNvbC14cy04IHtcclxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XHJcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JVxyXG59XHJcblxyXG4uY29sLXhzLTkge1xyXG4gICAgZmxleDogMCAwIDc1JTtcclxuICAgIG1heC13aWR0aDogNzUlXHJcbn1cclxuXHJcbi5jb2wteHMtMTAge1xyXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcclxuICAgIG1heC13aWR0aDogODMuMzMzMzMlXHJcbn1cclxuXHJcbi5jb2wteHMtMTEge1xyXG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcclxuICAgIG1heC13aWR0aDogOTEuNjY2NjclXHJcbn1cclxuXHJcbi5jb2wteHMtMTIge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLnB1bGwteHMtMCB7XHJcbiAgICByaWdodDogYXV0b1xyXG59XHJcblxyXG4ucHVsbC14cy0xIHtcclxuICAgIHJpZ2h0OiA4LjMzMzMzJVxyXG59XHJcblxyXG4ucHVsbC14cy0yIHtcclxuICAgIHJpZ2h0OiAxNi42NjY2NyVcclxufVxyXG5cclxuLnB1bGwteHMtMyB7XHJcbiAgICByaWdodDogMjUlXHJcbn1cclxuXHJcbi5wdWxsLXhzLTQge1xyXG4gICAgcmlnaHQ6IDMzLjMzMzMzJVxyXG59XHJcblxyXG4ucHVsbC14cy01IHtcclxuICAgIHJpZ2h0OiA0MS42NjY2NyVcclxufVxyXG5cclxuLnB1bGwteHMtNiB7XHJcbiAgICByaWdodDogNTAlXHJcbn1cclxuXHJcbi5wdWxsLXhzLTcge1xyXG4gICAgcmlnaHQ6IDU4LjMzMzMzJVxyXG59XHJcblxyXG4ucHVsbC14cy04IHtcclxuICAgIHJpZ2h0OiA2Ni42NjY2NyVcclxufVxyXG5cclxuLnB1bGwteHMtOSB7XHJcbiAgICByaWdodDogNzUlXHJcbn1cclxuXHJcbi5wdWxsLXhzLTEwIHtcclxuICAgIHJpZ2h0OiA4My4zMzMzMyVcclxufVxyXG5cclxuLnB1bGwteHMtMTEge1xyXG4gICAgcmlnaHQ6IDkxLjY2NjY3JVxyXG59XHJcblxyXG4ucHVsbC14cy0xMiB7XHJcbiAgICByaWdodDogMTAwJVxyXG59XHJcblxyXG4ucHVzaC14cy0wIHtcclxuICAgIGxlZnQ6IGF1dG9cclxufVxyXG5cclxuLnB1c2gteHMtMSB7XHJcbiAgICBsZWZ0OiA4LjMzMzMzJVxyXG59XHJcblxyXG4ucHVzaC14cy0yIHtcclxuICAgIGxlZnQ6IDE2LjY2NjY3JVxyXG59XHJcblxyXG4ucHVzaC14cy0zIHtcclxuICAgIGxlZnQ6IDI1JVxyXG59XHJcblxyXG4ucHVzaC14cy00IHtcclxuICAgIGxlZnQ6IDMzLjMzMzMzJVxyXG59XHJcblxyXG4ucHVzaC14cy01IHtcclxuICAgIGxlZnQ6IDQxLjY2NjY3JVxyXG59XHJcblxyXG4ucHVzaC14cy02IHtcclxuICAgIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4ucHVzaC14cy03IHtcclxuICAgIGxlZnQ6IDU4LjMzMzMzJVxyXG59XHJcblxyXG4ucHVzaC14cy04IHtcclxuICAgIGxlZnQ6IDY2LjY2NjY3JVxyXG59XHJcblxyXG4ucHVzaC14cy05IHtcclxuICAgIGxlZnQ6IDc1JVxyXG59XHJcblxyXG4ucHVzaC14cy0xMCB7XHJcbiAgICBsZWZ0OiA4My4zMzMzMyVcclxufVxyXG5cclxuLnB1c2gteHMtMTEge1xyXG4gICAgbGVmdDogOTEuNjY2NjclXHJcbn1cclxuXHJcbi5wdXNoLXhzLTEyIHtcclxuICAgIGxlZnQ6IDEwMCVcclxufVxyXG5cclxuLm9mZnNldC14cy0xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JVxyXG59XHJcblxyXG4ub2Zmc2V0LXhzLTEwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyVcclxufVxyXG5cclxuLm9mZnNldC14cy0xMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmNvbC1zbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHhcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTEge1xyXG4gICAgICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS0yIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTYuNjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogMTYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS0zIHtcclxuICAgICAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgICAgIG1heC13aWR0aDogMjUlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS00IHtcclxuICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS01IHtcclxuICAgICAgICBmbGV4OiAwIDAgNDEuNjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogNDEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS02IHtcclxuICAgICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS03IHtcclxuICAgICAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS04IHtcclxuICAgICAgICBmbGV4OiAwIDAgNjYuNjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogNjYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS05IHtcclxuICAgICAgICBmbGV4OiAwIDAgNzUlO1xyXG4gICAgICAgIG1heC13aWR0aDogNzUlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS0xMCB7XHJcbiAgICAgICAgZmxleDogMCAwIDgzLjMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtc20tMTEge1xyXG4gICAgICAgIGZsZXg6IDAgMCA5MS42NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTEyIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS0wIHtcclxuICAgICAgICByaWdodDogYXV0b1xyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXNtLTEge1xyXG4gICAgICAgIHJpZ2h0OiA4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXNtLTIge1xyXG4gICAgICAgIHJpZ2h0OiAxNi42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS0zIHtcclxuICAgICAgICByaWdodDogMjUlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtc20tNCB7XHJcbiAgICAgICAgcmlnaHQ6IDMzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXNtLTUge1xyXG4gICAgICAgIHJpZ2h0OiA0MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS02IHtcclxuICAgICAgICByaWdodDogNTAlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtc20tNyB7XHJcbiAgICAgICAgcmlnaHQ6IDU4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXNtLTgge1xyXG4gICAgICAgIHJpZ2h0OiA2Ni42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS05IHtcclxuICAgICAgICByaWdodDogNzUlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtc20tMTAge1xyXG4gICAgICAgIHJpZ2h0OiA4My4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS0xMSB7XHJcbiAgICAgICAgcmlnaHQ6IDkxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXNtLTEyIHtcclxuICAgICAgICByaWdodDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTAge1xyXG4gICAgICAgIGxlZnQ6IGF1dG9cclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1zbS0xIHtcclxuICAgICAgICBsZWZ0OiA4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTIge1xyXG4gICAgICAgIGxlZnQ6IDE2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTMge1xyXG4gICAgICAgIGxlZnQ6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTQge1xyXG4gICAgICAgIGxlZnQ6IDMzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTUge1xyXG4gICAgICAgIGxlZnQ6IDQxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTYge1xyXG4gICAgICAgIGxlZnQ6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTcge1xyXG4gICAgICAgIGxlZnQ6IDU4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTgge1xyXG4gICAgICAgIGxlZnQ6IDY2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTkge1xyXG4gICAgICAgIGxlZnQ6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXNtLTEwIHtcclxuICAgICAgICBsZWZ0OiA4My4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1zbS0xMSB7XHJcbiAgICAgICAgbGVmdDogOTEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtc20tMTIge1xyXG4gICAgICAgIGxlZnQ6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXNtLTAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtc20tMSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS0yIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS0zIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS00IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS01IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS02IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS03IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS04IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS05IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzUlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS0xMCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtc20tMTEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyVcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29sLW1kIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxleC1iYXNpczogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweFxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbWQtMSB7XHJcbiAgICAgICAgZmxleDogMCAwIDguMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogOC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTIge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNi42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTMge1xyXG4gICAgICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNSVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTQge1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMy4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTUge1xyXG4gICAgICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTcge1xyXG4gICAgICAgIGZsZXg6IDAgMCA1OC4zMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1OC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTgge1xyXG4gICAgICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2Ni42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTkge1xyXG4gICAgICAgIGZsZXg6IDAgMCA3NSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3NSVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTEwIHtcclxuICAgICAgICBmbGV4OiAwIDAgODMuMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogODMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1tZC0xMSB7XHJcbiAgICAgICAgZmxleDogMCAwIDkxLjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbWQtMTIge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLTAge1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbWQtMSB7XHJcbiAgICAgICAgcmlnaHQ6IDguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbWQtMiB7XHJcbiAgICAgICAgcmlnaHQ6IDE2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLTMge1xyXG4gICAgICAgIHJpZ2h0OiAyNSVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1tZC00IHtcclxuICAgICAgICByaWdodDogMzMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbWQtNSB7XHJcbiAgICAgICAgcmlnaHQ6IDQxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLTYge1xyXG4gICAgICAgIHJpZ2h0OiA1MCVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1tZC03IHtcclxuICAgICAgICByaWdodDogNTguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbWQtOCB7XHJcbiAgICAgICAgcmlnaHQ6IDY2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLTkge1xyXG4gICAgICAgIHJpZ2h0OiA3NSVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1tZC0xMCB7XHJcbiAgICAgICAgcmlnaHQ6IDgzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLTExIHtcclxuICAgICAgICByaWdodDogOTEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbWQtMTIge1xyXG4gICAgICAgIHJpZ2h0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtMCB7XHJcbiAgICAgICAgbGVmdDogYXV0b1xyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLW1kLTEge1xyXG4gICAgICAgIGxlZnQ6IDguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtMiB7XHJcbiAgICAgICAgbGVmdDogMTYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtMyB7XHJcbiAgICAgICAgbGVmdDogMjUlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtNCB7XHJcbiAgICAgICAgbGVmdDogMzMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtNSB7XHJcbiAgICAgICAgbGVmdDogNDEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtNiB7XHJcbiAgICAgICAgbGVmdDogNTAlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtNyB7XHJcbiAgICAgICAgbGVmdDogNTguMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtOCB7XHJcbiAgICAgICAgbGVmdDogNjYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtOSB7XHJcbiAgICAgICAgbGVmdDogNzUlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbWQtMTAge1xyXG4gICAgICAgIGxlZnQ6IDgzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLW1kLTExIHtcclxuICAgICAgICBsZWZ0OiA5MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1tZC0xMiB7XHJcbiAgICAgICAgbGVmdDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbWQtMCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1tZC0xIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTgge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3NSVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LW1kLTEwIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1tZC0xMSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb2wtbGcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1sZy0xIHtcclxuICAgICAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctMiB7XHJcbiAgICAgICAgZmxleDogMCAwIDE2LjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctMyB7XHJcbiAgICAgICAgZmxleDogMCAwIDI1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgICAgZmxleDogMCAwIDMzLjMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctNSB7XHJcbiAgICAgICAgZmxleDogMCAwIDQxLjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctNiB7XHJcbiAgICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctNyB7XHJcbiAgICAgICAgZmxleDogMCAwIDU4LjMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctOCB7XHJcbiAgICAgICAgZmxleDogMCAwIDY2LjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctOSB7XHJcbiAgICAgICAgZmxleDogMCAwIDc1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctMTAge1xyXG4gICAgICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4My4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWxnLTExIHtcclxuICAgICAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogOTEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1sZy0xMiB7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctMCB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG9cclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1sZy0xIHtcclxuICAgICAgICByaWdodDogOC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1sZy0yIHtcclxuICAgICAgICByaWdodDogMTYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctMyB7XHJcbiAgICAgICAgcmlnaHQ6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLWxnLTQge1xyXG4gICAgICAgIHJpZ2h0OiAzMy4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1sZy01IHtcclxuICAgICAgICByaWdodDogNDEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctNiB7XHJcbiAgICAgICAgcmlnaHQ6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLWxnLTcge1xyXG4gICAgICAgIHJpZ2h0OiA1OC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1sZy04IHtcclxuICAgICAgICByaWdodDogNjYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctOSB7XHJcbiAgICAgICAgcmlnaHQ6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLWxnLTEwIHtcclxuICAgICAgICByaWdodDogODMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctMTEge1xyXG4gICAgICAgIHJpZ2h0OiA5MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1sZy0xMiB7XHJcbiAgICAgICAgcmlnaHQ6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy0wIHtcclxuICAgICAgICBsZWZ0OiBhdXRvXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbGctMSB7XHJcbiAgICAgICAgbGVmdDogOC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy0yIHtcclxuICAgICAgICBsZWZ0OiAxNi42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy0zIHtcclxuICAgICAgICBsZWZ0OiAyNSVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy00IHtcclxuICAgICAgICBsZWZ0OiAzMy4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy01IHtcclxuICAgICAgICBsZWZ0OiA0MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy02IHtcclxuICAgICAgICBsZWZ0OiA1MCVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy03IHtcclxuICAgICAgICBsZWZ0OiA1OC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy04IHtcclxuICAgICAgICBsZWZ0OiA2Ni42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy05IHtcclxuICAgICAgICBsZWZ0OiA3NSVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC1sZy0xMCB7XHJcbiAgICAgICAgbGVmdDogODMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gtbGctMTEge1xyXG4gICAgICAgIGxlZnQ6IDkxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLWxnLTEyIHtcclxuICAgICAgICBsZWZ0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1sZy0wIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LWxnLTEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctMyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctNCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctNSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctNiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctNyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctOCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctOSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtbGctMTAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LWxnLTExIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb2wteGwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14bC0xIHtcclxuICAgICAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtMiB7XHJcbiAgICAgICAgZmxleDogMCAwIDE2LjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtMyB7XHJcbiAgICAgICAgZmxleDogMCAwIDI1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtNCB7XHJcbiAgICAgICAgZmxleDogMCAwIDMzLjMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtNSB7XHJcbiAgICAgICAgZmxleDogMCAwIDQxLjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtNiB7XHJcbiAgICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtNyB7XHJcbiAgICAgICAgZmxleDogMCAwIDU4LjMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtOCB7XHJcbiAgICAgICAgZmxleDogMCAwIDY2LjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtOSB7XHJcbiAgICAgICAgZmxleDogMCAwIDc1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteGwtMTAge1xyXG4gICAgICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4My4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhsLTExIHtcclxuICAgICAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogOTEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14bC0xMiB7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtMCB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG9cclxuICAgIH1cclxuXHJcbiAgICAucHVsbC14bC0xIHtcclxuICAgICAgICByaWdodDogOC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC14bC0yIHtcclxuICAgICAgICByaWdodDogMTYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtMyB7XHJcbiAgICAgICAgcmlnaHQ6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXhsLTQge1xyXG4gICAgICAgIHJpZ2h0OiAzMy4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC14bC01IHtcclxuICAgICAgICByaWdodDogNDEuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtNiB7XHJcbiAgICAgICAgcmlnaHQ6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXhsLTcge1xyXG4gICAgICAgIHJpZ2h0OiA1OC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC14bC04IHtcclxuICAgICAgICByaWdodDogNjYuNjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtOSB7XHJcbiAgICAgICAgcmlnaHQ6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLXhsLTEwIHtcclxuICAgICAgICByaWdodDogODMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtMTEge1xyXG4gICAgICAgIHJpZ2h0OiA5MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC14bC0xMiB7XHJcbiAgICAgICAgcmlnaHQ6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC0wIHtcclxuICAgICAgICBsZWZ0OiBhdXRvXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gteGwtMSB7XHJcbiAgICAgICAgbGVmdDogOC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC0yIHtcclxuICAgICAgICBsZWZ0OiAxNi42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC0zIHtcclxuICAgICAgICBsZWZ0OiAyNSVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC00IHtcclxuICAgICAgICBsZWZ0OiAzMy4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC01IHtcclxuICAgICAgICBsZWZ0OiA0MS42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC02IHtcclxuICAgICAgICBsZWZ0OiA1MCVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC03IHtcclxuICAgICAgICBsZWZ0OiA1OC4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC04IHtcclxuICAgICAgICBsZWZ0OiA2Ni42NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC05IHtcclxuICAgICAgICBsZWZ0OiA3NSVcclxuICAgIH1cclxuXHJcbiAgICAucHVzaC14bC0xMCB7XHJcbiAgICAgICAgbGVmdDogODMuMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLnB1c2gteGwtMTEge1xyXG4gICAgICAgIGxlZnQ6IDkxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5wdXNoLXhsLTEyIHtcclxuICAgICAgICBsZWZ0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC14bC0wIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXhsLTEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtMyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtNCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtNSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtNiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtNyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtOCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtOSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQteGwtMTAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXhsLTExIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclXHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlZWVmXHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2VlZWZcclxufVxyXG5cclxuLnRhYmxlIHRib2R5ICsgdGJvZHkge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlY2VlZWZcclxufVxyXG5cclxuLnRhYmxlIC50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi50YWJsZS1zbSB0aCxcclxuLnRhYmxlLXNtIHRkIHtcclxuICAgIHBhZGRpbmc6IC4zcmVtXHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZWVmXHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VlZWZcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRoLFxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4XHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KVxyXG59XHJcblxyXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSlcclxufVxyXG5cclxuLnRhYmxlLWFjdGl2ZSxcclxuLnRhYmxlLWFjdGl2ZSA+IHRoLFxyXG4udGFibGUtYWN0aXZlID4gdGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSlcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSlcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIgPiB0ZCxcclxuLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIgPiB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KVxyXG59XHJcblxyXG4udGFibGUtc3VjY2VzcyxcclxuLnRhYmxlLXN1Y2Nlc3MgPiB0aCxcclxuLnRhYmxlLXN1Y2Nlc3MgPiB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4XHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciAudGFibGUtc3VjY2Vzczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBlOWM2XHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciAudGFibGUtc3VjY2Vzczpob3ZlciA+IHRkLFxyXG4udGFibGUtaG92ZXIgLnRhYmxlLXN1Y2Nlc3M6aG92ZXIgPiB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBlOWM2XHJcbn1cclxuXHJcbi50YWJsZS1pbmZvLFxyXG4udGFibGUtaW5mbyA+IHRoLFxyXG4udGFibGUtaW5mbyA+IHRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjdcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIC50YWJsZS1pbmZvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGUzZjNcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIC50YWJsZS1pbmZvOmhvdmVyID4gdGQsXHJcbi50YWJsZS1ob3ZlciAudGFibGUtaW5mbzpob3ZlciA+IHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGUzZjNcclxufVxyXG5cclxuLnRhYmxlLXdhcm5pbmcsXHJcbi50YWJsZS13YXJuaW5nID4gdGgsXHJcbi50YWJsZS13YXJuaW5nID4gdGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlM1xyXG59XHJcblxyXG4udGFibGUtaG92ZXIgLnRhYmxlLXdhcm5pbmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjJjY1xyXG59XHJcblxyXG4udGFibGUtaG92ZXIgLnRhYmxlLXdhcm5pbmc6aG92ZXIgPiB0ZCxcclxuLnRhYmxlLWhvdmVyIC50YWJsZS13YXJuaW5nOmhvdmVyID4gdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjJjY1xyXG59XHJcblxyXG4udGFibGUtZGFuZ2VyLFxyXG4udGFibGUtZGFuZ2VyID4gdGgsXHJcbi50YWJsZS1kYW5nZXIgPiB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlXHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciAudGFibGUtZGFuZ2VyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmNjY2NcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIC50YWJsZS1kYW5nZXI6aG92ZXIgPiB0ZCxcclxuLnRhYmxlLWhvdmVyIC50YWJsZS1kYW5nZXI6aG92ZXIgPiB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJjY2NjXHJcbn1cclxuXHJcbi50aGVhZC1pbnZlcnNlIHRoIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2EzY1xyXG59XHJcblxyXG4udGhlYWQtZGVmYXVsdCB0aCB7XHJcbiAgICBjb2xvcjogIzU1NTk1YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWZcclxufVxyXG5cclxuLnRhYmxlLWludmVyc2Uge1xyXG4gICAgY29sb3I6ICNlY2VlZWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYTNjXHJcbn1cclxuXHJcbi50YWJsZS1pbnZlcnNlIHRoLFxyXG4udGFibGUtaW52ZXJzZSB0ZCxcclxuLnRhYmxlLWludmVyc2UgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1OTVjXHJcbn1cclxuXHJcbi50YWJsZS1pbnZlcnNlLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogLjAxJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG9cclxufVxyXG5cclxuLnRhYmxlLXJlZmxvdyB0aGVhZCB7XHJcbiAgICBmbG9hdDogbGVmdFxyXG59XHJcblxyXG4udGFibGUtcmVmbG93IHRib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcblxyXG4udGFibGUtcmVmbG93IHRoLFxyXG4udGFibGUtcmVmbG93IHRkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlZWVmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWNlZWVmXHJcbn1cclxuXHJcbi50YWJsZS1yZWZsb3cgdGg6bGFzdC1jaGlsZCxcclxuLnRhYmxlLXJlZmxvdyB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlY2VlZWZcclxufVxyXG5cclxuLnRhYmxlLXJlZmxvdyB0aGVhZDpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgdGgsXHJcbi50YWJsZS1yZWZsb3cgdGhlYWQ6bGFzdC1jaGlsZCB0cjpsYXN0LWNoaWxkIHRkLFxyXG4udGFibGUtcmVmbG93IHRib2R5Omxhc3QtY2hpbGQgdHI6bGFzdC1jaGlsZCB0aCxcclxuLnRhYmxlLXJlZmxvdyB0Ym9keTpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgdGQsXHJcbi50YWJsZS1yZWZsb3cgdGZvb3Q6bGFzdC1jaGlsZCB0cjpsYXN0LWNoaWxkIHRoLFxyXG4udGFibGUtcmVmbG93IHRmb290Omxhc3QtY2hpbGQgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWVlZlxyXG59XHJcblxyXG4udGFibGUtcmVmbG93IHRyIHtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbi50YWJsZS1yZWZsb3cgdHIgdGgsXHJcbi50YWJsZS1yZWZsb3cgdHIgdGQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VlZWZcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICBjb2xvcjogIzU1NTk1YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LW1zLWV4cGFuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNTU1OTVjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcclxuICAgIG91dGxpbmU6IG5vbmVcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQsXHJcbi5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG59XHJcblxyXG5zZWxlY3QuZm9ybS1jb250cm9sOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSB7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbVxyXG59XHJcblxyXG5zZWxlY3QuZm9ybS1jb250cm9sOmZvY3VzOjotbXMtdmFsdWUge1xyXG4gICAgY29sb3I6ICM1NTU5NWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZmlsZSxcclxuLmZvcm0tY29udHJvbC1yYW5nZSB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG4uY29sLWZvcm0tbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uY29sLWZvcm0tbGFiZWwtbGcge1xyXG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW1cclxufVxyXG5cclxuLmNvbC1mb3JtLWxhYmVsLXNtIHtcclxuICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAuODc1cmVtXHJcbn1cclxuXHJcbi5jb2wtZm9ybS1sZWdlbmQge1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXN0YXRpYyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtc3RhdGljLmZvcm0tY29udHJvbC1zbSxcclxuLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbC1zdGF0aWMuZm9ybS1jb250cm9sLFxyXG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLXN0YXRpYy5pbnB1dC1ncm91cC1hZGRvbixcclxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWJ0biA+IC5mb3JtLWNvbnRyb2wtc3RhdGljLmJ0bixcclxuLmZvcm0tY29udHJvbC1zdGF0aWMuZm9ybS1jb250cm9sLWxnLFxyXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLXN0YXRpYy5mb3JtLWNvbnRyb2wsXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LWdyb3VwLWFkZG9uLFxyXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmZvcm0tY29udHJvbC1zdGF0aWMuYnRuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zbSxcclxuLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcclxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWFkZG9uLFxyXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbVxyXG59XHJcblxyXG5zZWxlY3QuZm9ybS1jb250cm9sLXNtOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSxcclxuLmlucHV0LWdyb3VwLXNtID4gc2VsZWN0LmZvcm0tY29udHJvbDpub3QoW3NpemVdKTpub3QoW211bHRpcGxlXSksXHJcbi5pbnB1dC1ncm91cC1zbSA+IHNlbGVjdC5pbnB1dC1ncm91cC1hZGRvbjpub3QoW3NpemVdKTpub3QoW211bHRpcGxlXSksXHJcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiBzZWxlY3QuYnRuOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSB7XHJcbiAgICBoZWlnaHQ6IDEuODEyNXJlbVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWxnLFxyXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxyXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbVxyXG59XHJcblxyXG5zZWxlY3QuZm9ybS1jb250cm9sLWxnOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSxcclxuLmlucHV0LWdyb3VwLWxnID4gc2VsZWN0LmZvcm0tY29udHJvbDpub3QoW3NpemVdKTpub3QoW211bHRpcGxlXSksXHJcbi5pbnB1dC1ncm91cC1sZyA+IHNlbGVjdC5pbnB1dC1ncm91cC1hZGRvbjpub3QoW3NpemVdKTpub3QoW211bHRpcGxlXSksXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1idG4gPiBzZWxlY3QuYnRuOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSB7XHJcbiAgICBoZWlnaHQ6IDMuMTY2NjdyZW1cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG59XHJcblxyXG4uZm9ybS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtXHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtXHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrICsgLmZvcm0tY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogLS4yNXJlbVxyXG59XHJcblxyXG4uZm9ybS1jaGVjay5kaXNhYmxlZCAuZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzgxOGE5MTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWRcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTEuMjVyZW1cclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6b25seS1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljXHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlubGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbmxpbmUgKyAuZm9ybS1jaGVjay1pbmxpbmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbVxyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbmxpbmUuZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXN1Y2Nlc3MsXHJcbi5mb3JtLWNvbnRyb2wtd2FybmluZyxcclxuLmZvcm0tY29udHJvbC1kYW5nZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMi4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgLjYyNXJlbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMS4yNXJlbSAxLjI1cmVtXHJcbn1cclxuXHJcbi5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxyXG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbC1sYWJlbCxcclxuLmhhcy1zdWNjZXNzIC5yYWRpbyxcclxuLmhhcy1zdWNjZXNzIC5jaGVja2JveCxcclxuLmhhcy1zdWNjZXNzIC5yYWRpby1pbmxpbmUsXHJcbi5oYXMtc3VjY2VzcyAuY2hlY2tib3gtaW5saW5lLFxyXG4uaGFzLXN1Y2Nlc3MucmFkaW8gbGFiZWwsXHJcbi5oYXMtc3VjY2Vzcy5jaGVja2JveCBsYWJlbCxcclxuLmhhcy1zdWNjZXNzLnJhZGlvLWlubGluZSBsYWJlbCxcclxuLmhhcy1zdWNjZXNzLmNoZWNrYm94LWlubGluZSBsYWJlbCxcclxuLmhhcy1zdWNjZXNzIC5jdXN0b20tY29udHJvbCB7XHJcbiAgICBjb2xvcjogIzVjYjg1Y1xyXG59XHJcblxyXG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM1Y2I4NWNcclxufVxyXG5cclxuLmhhcy1zdWNjZXNzIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICBjb2xvcjogIzVjYjg1YztcclxuICAgIGJvcmRlci1jb2xvcjogIzVjYjg1YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWY2ZWFcclxufVxyXG5cclxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICM1Y2I4NWNcclxufVxyXG5cclxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBmaWxsPSclMjM1Y2I4NWMnIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLyUzRSUzQy9zdmclM0VcIilcclxufVxyXG5cclxuLmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXHJcbi5oYXMtd2FybmluZyAuZm9ybS1jb250cm9sLWxhYmVsLFxyXG4uaGFzLXdhcm5pbmcgLnJhZGlvLFxyXG4uaGFzLXdhcm5pbmcgLmNoZWNrYm94LFxyXG4uaGFzLXdhcm5pbmcgLnJhZGlvLWlubGluZSxcclxuLmhhcy13YXJuaW5nIC5jaGVja2JveC1pbmxpbmUsXHJcbi5oYXMtd2FybmluZy5yYWRpbyBsYWJlbCxcclxuLmhhcy13YXJuaW5nLmNoZWNrYm94IGxhYmVsLFxyXG4uaGFzLXdhcm5pbmcucmFkaW8taW5saW5lIGxhYmVsLFxyXG4uaGFzLXdhcm5pbmcuY2hlY2tib3gtaW5saW5lIGxhYmVsLFxyXG4uaGFzLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjZjBhZDRlXHJcbn1cclxuXHJcbi5oYXMtd2FybmluZyAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwYWQ0ZVxyXG59XHJcblxyXG4uaGFzLXdhcm5pbmcgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgIGNvbG9yOiAjZjBhZDRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICBjb2xvcjogI2YwYWQ0ZVxyXG59XHJcblxyXG4uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbC13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGZpbGw9JyUyM2YwYWQ0ZScgZD0nTTQuNCA1LjMyNGgtLjh2LTIuNDZoLjh6bTAgMS40MmgtLjhWNS44OWguOHpNMy43Ni42M0wuMDQgNy4wNzVjLS4xMTUuMi4wMTYuNDI1LjI2LjQyNmg3LjM5N2MuMjQyIDAgLjM3Mi0uMjI2LjI1OC0uNDI2QzYuNzI2IDQuOTI0IDUuNDcgMi43OSA0LjI1My42M2MtLjExMy0uMTc0LS4zOS0uMTc0LS40OTQgMHonLyUzRSUzQy9zdmclM0VcIilcclxufVxyXG5cclxuLmhhcy1kYW5nZXIgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcclxuLmhhcy1kYW5nZXIgLmZvcm0tY29udHJvbC1sYWJlbCxcclxuLmhhcy1kYW5nZXIgLnJhZGlvLFxyXG4uaGFzLWRhbmdlciAuY2hlY2tib3gsXHJcbi5oYXMtZGFuZ2VyIC5yYWRpby1pbmxpbmUsXHJcbi5oYXMtZGFuZ2VyIC5jaGVja2JveC1pbmxpbmUsXHJcbi5oYXMtZGFuZ2VyLnJhZGlvIGxhYmVsLFxyXG4uaGFzLWRhbmdlci5jaGVja2JveCBsYWJlbCxcclxuLmhhcy1kYW5nZXIucmFkaW8taW5saW5lIGxhYmVsLFxyXG4uaGFzLWRhbmdlci5jaGVja2JveC1pbmxpbmUgbGFiZWwsXHJcbi5oYXMtZGFuZ2VyIC5jdXN0b20tY29udHJvbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZlxyXG59XHJcblxyXG4uaGFzLWRhbmdlciAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5NTM0ZlxyXG59XHJcblxyXG4uaGFzLWRhbmdlciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOTUzNGY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmN2Y3XHJcbn1cclxuXHJcbi5oYXMtZGFuZ2VyIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLmhhcy1kYW5nZXIgLmZvcm0tY29udHJvbC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNkOTUzNGYnIHZpZXdCb3g9Jy0yIC0yIDcgNyclM0UlM0NwYXRoIHN0cm9rZT0nJTIzZDk1MzRmJyBkPSdNMCAwbDMgM20wLTNMMCAzJy8lM0UlM0NjaXJjbGUgcj0nLjUnLyUzRSUzQ2NpcmNsZSBjeD0nMycgcj0nLjUnLyUzRSUzQ2NpcmNsZSBjeT0nMycgcj0nLjUnLyUzRSUzQ2NpcmNsZSBjeD0nMycgY3k9JzMnIHI9Jy41Jy8lM0UlM0Mvc3ZnJTNFXCIpXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uLFxyXG4gICAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuLFxyXG4gICAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICB3aWR0aDogYXV0b1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1pbmxpbmUgLmZvcm0tY2hlY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWlubGluZSAuZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwXHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1pbmxpbmUgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgICAgICB0b3A6IDBcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5idG46Zm9jdXMsXHJcbi5idG4uZm9jdXMsXHJcbi5idG46YWN0aXZlOmZvY3VzLFxyXG4uYnRuOmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi5hY3RpdmU6Zm9jdXMsXHJcbi5idG4uYWN0aXZlLmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4XHJcbn1cclxuXHJcbi5idG46Zm9jdXMsXHJcbi5idG46aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5idG4uZm9jdXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5idG46YWN0aXZlLFxyXG4uYnRuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgb3V0bGluZTogMFxyXG59XHJcblxyXG4uYnRuLmRpc2FibGVkLFxyXG4uYnRuOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBvcGFjaXR5OiAuNjVcclxufVxyXG5cclxuYS5idG4uZGlzYWJsZWQsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSBhLmJ0biB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDI3NWQ4XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjVhYTU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMTU0OWJcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLXByaW1hcnkuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI1YWE1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDE1NDliXHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeS5hY3RpdmUsXHJcbi5vcGVuID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjVhYTU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMTU0OWI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTphY3RpdmU6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUuZm9jdXMsXHJcbi5idG4tcHJpbWFyeS5hY3RpdmU6aG92ZXIsXHJcbi5idG4tcHJpbWFyeS5hY3RpdmU6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeS5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4gPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3BlbiA+IC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0NjgyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDEzMTVhXHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeS5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeTpkaXNhYmxlZC5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDI3NWQ4XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeS5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMjc1ZDhcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6ICMzNzNhM2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjXHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzczYTNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIGJvcmRlci1jb2xvcjogI2FkYWRhZFxyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpmb2N1cyxcclxuLmJ0bi1zZWNvbmRhcnkuZm9jdXMge1xyXG4gICAgY29sb3I6ICMzNzNhM2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRhZGFkXHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmFjdGl2ZSxcclxuLmJ0bi1zZWNvbmRhcnkuYWN0aXZlLFxyXG4ub3BlbiA+IC5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogIzM3M2EzYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBib3JkZXItY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXNlY29uZGFyeTphY3RpdmUuZm9jdXMsXHJcbi5idG4tc2Vjb25kYXJ5LmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1zZWNvbmRhcnkuYWN0aXZlOmZvY3VzLFxyXG4uYnRuLXNlY29uZGFyeS5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3BlbiA+IC5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4gPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gICAgY29sb3I6ICMzNzNhM2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGM4YzhjXHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5LmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLXNlY29uZGFyeS5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1zZWNvbmRhcnk6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tc2Vjb25kYXJ5OmRpc2FibGVkLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2NcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tc2Vjb25kYXJ5OmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2NcclxufVxyXG5cclxuLmJ0bi1pbmZvIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzViYzBkZVxyXG59XHJcblxyXG4uYnRuLWluZm86aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiMGQ1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmFhYmQyXHJcbn1cclxuXHJcbi5idG4taW5mbzpmb2N1cyxcclxuLmJ0bi1pbmZvLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjBkNTtcclxuICAgIGJvcmRlci1jb2xvcjogIzJhYWJkMlxyXG59XHJcblxyXG4uYnRuLWluZm86YWN0aXZlLFxyXG4uYnRuLWluZm8uYWN0aXZlLFxyXG4ub3BlbiA+IC5idG4taW5mby5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiMGQ1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmFhYmQyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLWluZm86YWN0aXZlOmhvdmVyLFxyXG4uYnRuLWluZm86YWN0aXZlOmZvY3VzLFxyXG4uYnRuLWluZm86YWN0aXZlLmZvY3VzLFxyXG4uYnRuLWluZm8uYWN0aXZlOmhvdmVyLFxyXG4uYnRuLWluZm8uYWN0aXZlOmZvY3VzLFxyXG4uYnRuLWluZm8uYWN0aXZlLmZvY3VzLFxyXG4ub3BlbiA+IC5idG4taW5mby5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5vcGVuID4gLmJ0bi1pbmZvLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4gPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OWFiYztcclxuICAgIGJvcmRlci1jb2xvcjogIzFmN2U5YVxyXG59XHJcblxyXG4uYnRuLWluZm8uZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4taW5mby5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1pbmZvOmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWluZm86ZGlzYWJsZWQuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzViYzBkZVxyXG59XHJcblxyXG4uYnRuLWluZm8uZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4taW5mbzpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWJjMGRlXHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBib3JkZXItY29sb3I6ICM1Y2I4NWNcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NDtcclxuICAgIGJvcmRlci1jb2xvcjogIzQxOTY0MVxyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5idG4tc3VjY2Vzcy5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MTk2NDFcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSxcclxuLmJ0bi1zdWNjZXNzLmFjdGl2ZSxcclxuLm9wZW4gPiAuYnRuLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NDtcclxuICAgIGJvcmRlci1jb2xvcjogIzQxOTY0MTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1zdWNjZXNzLmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1zdWNjZXNzLmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1zdWNjZXNzLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4gPiAuYnRuLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3BlbiA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTg0Mzk7XHJcbiAgICBib3JkZXItY29sb3I6ICMyZDY3MmRcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tc3VjY2VzczpkaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1zdWNjZXNzOmRpc2FibGVkLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBib3JkZXItY29sb3I6ICM1Y2I4NWNcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcclxuICAgIGJvcmRlci1jb2xvcjogIzVjYjg1Y1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlXHJcbn1cclxuXHJcbi5idG4td2FybmluZzpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzk3MWY7XHJcbiAgICBib3JkZXItY29sb3I6ICNlYjkzMTZcclxufVxyXG5cclxuLmJ0bi13YXJuaW5nOmZvY3VzLFxyXG4uYnRuLXdhcm5pbmcuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzFmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWI5MzE2XHJcbn1cclxuXHJcbi5idG4td2FybmluZzphY3RpdmUsXHJcbi5idG4td2FybmluZy5hY3RpdmUsXHJcbi5vcGVuID4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzk3MWY7XHJcbiAgICBib3JkZXItY29sb3I6ICNlYjkzMTY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4td2FybmluZzphY3RpdmU6aG92ZXIsXHJcbi5idG4td2FybmluZzphY3RpdmU6Zm9jdXMsXHJcbi5idG4td2FybmluZzphY3RpdmUuZm9jdXMsXHJcbi5idG4td2FybmluZy5hY3RpdmU6aG92ZXIsXHJcbi5idG4td2FybmluZy5hY3RpdmU6Zm9jdXMsXHJcbi5idG4td2FybmluZy5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuID4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4gPiAuYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3BlbiA+IC5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU4NTEyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjA2ZDBmXHJcbn1cclxuXHJcbi5idG4td2FybmluZy5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi13YXJuaW5nLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXdhcm5pbmc6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4td2FybmluZzpkaXNhYmxlZC5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlXHJcbn1cclxuXHJcbi5idG4td2FybmluZy5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi13YXJuaW5nOmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMGFkNGVcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmXHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYztcclxuICAgIGJvcmRlci1jb2xvcjogI2MxMmUyYVxyXG59XHJcblxyXG4uYnRuLWRhbmdlcjpmb2N1cyxcclxuLmJ0bi1kYW5nZXIuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkzMDJjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzEyZTJhXHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmFjdGl2ZSxcclxuLmJ0bi1kYW5nZXIuYWN0aXZlLFxyXG4ub3BlbiA+IC5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTMwMmM7XHJcbiAgICBib3JkZXItY29sb3I6ICNjMTJlMmE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1kYW5nZXI6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLWRhbmdlcjphY3RpdmUuZm9jdXMsXHJcbi5idG4tZGFuZ2VyLmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1kYW5nZXIuYWN0aXZlOmZvY3VzLFxyXG4uYnRuLWRhbmdlci5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3BlbiA+IC5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4gPiAuYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMyOTI1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGIyMTFlXHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWRhbmdlci5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1kYW5nZXI6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tZGFuZ2VyOmRpc2FibGVkLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tZGFuZ2VyOmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICMwMjc1ZDg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMjc1ZDhcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDI3NWQ4XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMjc1ZDhcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5hY3RpdmUsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyNzVkOFxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTphY3RpdmU6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6YWN0aXZlLmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5hY3RpdmU6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5LmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuYWN0aXZlLmZvY3VzLFxyXG4ub3BlbiA+IC5idG4tb3V0bGluZS1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDY4MjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAxMzE1YVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpkaXNhYmxlZC5mb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0M2E3ZmRcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQzYTdmZFxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmFjdGl2ZSxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2NcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTphY3RpdmU6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5hY3RpdmU6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkuYWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMWExYTE7XHJcbiAgICBib3JkZXItY29sb3I6ICM4YzhjOGNcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpkaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpkaXNhYmxlZC5mb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm8ge1xyXG4gICAgY29sb3I6ICM1YmMwZGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM1YmMwZGVcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm86aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWJjMGRlXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1pbmZvOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtaW5mby5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XHJcbiAgICBib3JkZXItY29sb3I6ICM1YmMwZGVcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm86YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtaW5mby5hY3RpdmUsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzViYzBkZVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtaW5mbzphY3RpdmU6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1pbmZvOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLWluZm86YWN0aXZlLmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtaW5mby5hY3RpdmU6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1pbmZvLmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLWluZm8uYWN0aXZlLmZvY3VzLFxyXG4ub3BlbiA+IC5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtaW5mby5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OWFiYztcclxuICAgIGJvcmRlci1jb2xvcjogIzFmN2U5YVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtaW5mby5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLWluZm8uZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tb3V0bGluZS1pbmZvOmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtaW5mbzpkaXNhYmxlZC5mb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNiMGUxZWZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm8uZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1pbmZvOmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2IwZTFlZlxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzVjYjg1YztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzVjYjg1Y1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBib3JkZXItY29sb3I6ICM1Y2I4NWNcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcclxuICAgIGJvcmRlci1jb2xvcjogIzVjYjg1Y1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzczphY3RpdmUsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmFjdGl2ZSxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWNiODVjXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2VzczphY3RpdmUuZm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuYWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3BlbiA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4NDM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmQ2NzJkXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmRpc2FibGVkLmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2EzZDdhM1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTNkN2EzXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjZjBhZDRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwYWQ0ZVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nOmFjdGl2ZSxcclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuYWN0aXZlLFxyXG4ub3BlbiA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMGFkNGVcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtd2FybmluZzphY3RpdmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS13YXJuaW5nOmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuYWN0aXZlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtd2FybmluZy5hY3RpdmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS13YXJuaW5nLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtd2FybmluZy5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3BlbiA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNTg1MTI7XHJcbiAgICBib3JkZXItY29sb3I6ICNiMDZkMGZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS13YXJuaW5nLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpkaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6ZGlzYWJsZWQuZm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjhkOWFjXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nLmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOGQ5YWNcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5NTM0ZlxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5NTM0ZlxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5NTM0ZlxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmFjdGl2ZSxcclxuLmJ0bi1vdXRsaW5lLWRhbmdlci5hY3RpdmUsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXI6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLWRhbmdlcjphY3RpdmUuZm9jdXMsXHJcbi5idG4tb3V0bGluZS1kYW5nZXIuYWN0aXZlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyLmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLWRhbmdlci5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMyOTI1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGIyMTFlXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXIuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1kYW5nZXIuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tb3V0bGluZS1kYW5nZXI6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1kYW5nZXI6ZGlzYWJsZWQuZm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWJhNWEzXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXIuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1kYW5nZXI6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWJhNWEzXHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMjc1ZDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tbGluayxcclxuLmJ0bi1saW5rOmFjdGl2ZSxcclxuLmJ0bi1saW5rLmFjdGl2ZSxcclxuLmJ0bi1saW5rOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5idG4tbGluayxcclxuLmJ0bi1saW5rOmZvY3VzLFxyXG4uYnRuLWxpbms6YWN0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmJ0bi1saW5rOmZvY3VzLFxyXG4uYnRuLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMTRjOGM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5idG4tbGluazpkaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1saW5rOmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjODE4YTkxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5idG4tbGcsXHJcbi5idG4tZ3JvdXAtbGcgPiAuYnRuIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbVxyXG59XHJcblxyXG4uYnRuLXNtLFxyXG4uYnRuLWdyb3VwLXNtID4gLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbVxyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idG4tYmxvY2ssXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idG4tYmxvY2ssXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uYnRuLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyXHJcbn1cclxuXHJcbi5mYWRlLmluIHtcclxuICAgIG9wYWNpdHk6IDFcclxufVxyXG5cclxuLmNvbGxhcHNlIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLmNvbGxhcHNlLmluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5jb2xsYXBzaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHRcclxufVxyXG5cclxuLmRyb3B1cCxcclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAuM2VtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IC4zZW0gc29saWQgdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwXHJcbn1cclxuXHJcbi5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IC4zZW0gc29saWRcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW46IDJweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzM3M2EzYztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5kcm9wZG93bi1kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTVcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMzNzNhM2M7XHJcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDBcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMmIyZDJmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsXHJcbi5kcm9wZG93bi1pdGVtLmFjdGl2ZTpmb2N1cyxcclxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcclxuICAgIG91dGxpbmU6IDBcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQsXHJcbi5kcm9wZG93bi1pdGVtLmRpc2FibGVkOmZvY3VzLFxyXG4uZHJvcGRvd24taXRlbS5kaXNhYmxlZDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzgxOGE5MVxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbS5kaXNhYmxlZDpmb2N1cyxcclxuLmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKVwiXHJcbn1cclxuXHJcbi5vcGVuID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLm9wZW4gPiBhIHtcclxuICAgIG91dGxpbmU6IDBcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiBhdXRvXHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LWxlZnQge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAwXHJcbn1cclxuXHJcbi5kcm9wZG93bi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIGNvbG9yOiAjODE4YTkxO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcblxyXG4uZHJvcGRvd24tYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTkwXHJcbn1cclxuXHJcbi5kcm9wdXAgLmNhcmV0LFxyXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmNhcmV0IHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjNlbSBzb2xpZFxyXG59XHJcblxyXG4uZHJvcHVwIC5kcm9wZG93bi1tZW51LFxyXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAsXHJcbi5idG4tZ3JvdXAtdmVydGljYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gLmJ0bixcclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnRcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IC5idG46Zm9jdXMsXHJcbi5idG4tZ3JvdXAgPiAuYnRuOmFjdGl2ZSxcclxuLmJ0bi1ncm91cCA+IC5idG4uYWN0aXZlLFxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpmb2N1cyxcclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46YWN0aXZlLFxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi5hY3RpdmUge1xyXG4gICAgei1pbmRleDogMlxyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gLmJ0bjpob3ZlcixcclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46aG92ZXIge1xyXG4gICAgei1pbmRleDogMlxyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4gKyAuYnRuLFxyXG4uYnRuLWdyb3VwIC5idG4gKyAuYnRuLWdyb3VwLFxyXG4uYnRuLWdyb3VwIC5idG4tZ3JvdXAgKyAuYnRuLFxyXG4uYnRuLWdyb3VwIC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4XHJcbn1cclxuXHJcbi5idG4tdG9vbGJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbVxyXG59XHJcblxyXG4uYnRuLXRvb2xiYXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoXHJcbn1cclxuXHJcbi5idG4tdG9vbGJhciAuYnRuLWdyb3VwLFxyXG4uYnRuLXRvb2xiYXIgLmlucHV0LWdyb3VwIHtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbi5idG4tdG9vbGJhciA+IC5idG4sXHJcbi5idG4tdG9vbGJhciA+IC5idG4tZ3JvdXAsXHJcbi5idG4tdG9vbGJhciA+IC5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW1cclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMFxyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gLmJ0bjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMFxyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gLmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiAuYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCksXHJcbi5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwIHtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5idG46bGFzdC1jaGlsZCxcclxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMFxyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMFxyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5kcm9wZG93bi10b2dnbGU6YWN0aXZlLFxyXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBvdXRsaW5lOiAwXHJcbn1cclxuXHJcbi5idG4gKyAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC43NXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjc1cmVtXHJcbn1cclxuXHJcbi5idG4gKyAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0OjphZnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMFxyXG59XHJcblxyXG4uYnRuLXNtICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCxcclxuLmJ0bi1ncm91cC1zbSA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC4zNzVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC4zNzVyZW1cclxufVxyXG5cclxuLmJ0bi1sZyArIC5kcm9wZG93bi10b2dnbGUtc3BsaXQsXHJcbi5idG4tZ3JvdXAtbGcgPiAuYnRuICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjEyNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS4xMjVyZW1cclxufVxyXG5cclxuLmJ0biAuY2FyZXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBcclxufVxyXG5cclxuLmJ0bi1sZyAuY2FyZXQsXHJcbi5idG4tZ3JvdXAtbGcgPiAuYnRuIC5jYXJldCB7XHJcbiAgICBib3JkZXItd2lkdGg6IC4zZW0gLjNlbSAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMFxyXG59XHJcblxyXG4uZHJvcHVwIC5idG4tbGcgLmNhcmV0LFxyXG4uZHJvcHVwIC5idG4tZ3JvdXAtbGcgPiAuYnRuIC5jYXJldCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgLjNlbSAuM2VtXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLFxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cCxcclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJVxyXG59XHJcblxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcclxuICAgIGZsb2F0OiBub25lXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuICsgLmJ0bixcclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4gKyAuYnRuLWdyb3VwLFxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cCArIC5idG4sXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBcclxufVxyXG5cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBcclxufVxyXG5cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5idG46bGFzdC1jaGlsZCxcclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMFxyXG59XHJcblxyXG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdID4gLmJ0biBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbltkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gPiAuYnRuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSA+IC5idG4tZ3JvdXAgPiAuYnRuIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSA+IC5idG4tZ3JvdXAgPiAuYnRuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMsXHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmFjdGl2ZSxcclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgei1pbmRleDogM1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLFxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFkZG9uLFxyXG4uaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgY29sb3I6ICM1NTU5NWM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYWRkb24uZm9ybS1jb250cm9sLXNtLFxyXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXHJcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiAuaW5wdXQtZ3JvdXAtYWRkb24uYnRuIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbi5mb3JtLWNvbnRyb2wtbGcsXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hZGRvbixcclxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWJ0biA+IC5pbnB1dC1ncm91cC1hZGRvbi5idG4ge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbi5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmxhc3QtY2hpbGQpLFxyXG4uaW5wdXQtZ3JvdXAtYWRkb246bm90KDpsYXN0LWNoaWxkKSxcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmxhc3QtY2hpbGQpID4gLmJ0bixcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmxhc3QtY2hpbGQpID4gLmJ0bi1ncm91cCA+IC5idG4sXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpsYXN0LWNoaWxkKSA+IC5kcm9wZG93bi10b2dnbGUsXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1yaWdodDogMFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKSxcclxuLmlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bixcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4tZ3JvdXAgPiAuYnRuLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmRyb3Bkb3duLXRvZ2dsZSxcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmxhc3QtY2hpbGQpID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmxhc3QtY2hpbGQpID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCArIC5pbnB1dC1ncm91cC1hZGRvbjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItbGVmdDogMFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1idG4gPiAuYnRuICsgLmJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYnRuID4gLmJ0bjpmb2N1cyxcclxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG46YWN0aXZlLFxyXG4uaW5wdXQtZ3JvdXAtYnRuID4gLmJ0bjpob3ZlciB7XHJcbiAgICB6LWluZGV4OiAzXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpsYXN0LWNoaWxkKSA+IC5idG4sXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpsYXN0LWNoaWxkKSA+IC5idG4tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bi1ncm91cCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHhcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zm9jdXMsXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOmFjdGl2ZSxcclxuLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46aG92ZXIsXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuLWdyb3VwOmZvY3VzLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bi1ncm91cDphY3RpdmUsXHJcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuLWdyb3VwOmhvdmVyIHtcclxuICAgIHotaW5kZXg6IDNcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCArIC5jdXN0b20tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbVxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvcGFjaXR5OiAwXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDlcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjJyZW0gIzAwNzRkOVxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGM2ZmZcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZVxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQgfiAuY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAuMDYyNXJlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJVxyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbmRpY2F0b3Ige1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGZpbGw9JyUyM2ZmZicgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzRSUzQy9zdmclM0VcIilcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW5kZXRlcm1pbmF0ZSB+IC5jdXN0b20tY29udHJvbC1pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRkOTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM0UlM0NwYXRoIHN0cm9rZT0nJTIzZmZmJyBkPSdNMCAyaDQnLyUzRSUzQy9zdmclM0VcIilcclxufVxyXG5cclxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxyXG59XHJcblxyXG4uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMycgZmlsbD0nJTIzZmZmJy8lM0UlM0Mvc3ZnJTNFXCIpXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbHMtc3RhY2tlZCAuY3VzdG9tLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbHMtc3RhY2tlZCAuY3VzdG9tLWNvbnRyb2w6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgY29udGVudDogXCJcIlxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2xzLXN0YWNrZWQgLmN1c3RvbS1jb250cm9sICsgLmN1c3RvbS1jb250cm9sIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwXHJcbn1cclxuXHJcbi5jdXN0b20tc2VsZWN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gMS43NXJlbSAuMzc1cmVtIC43NXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC43NXJlbSBcXDk7XHJcbiAgICBjb2xvcjogIzU1NTk1YztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM0UlM0NwYXRoIGZpbGw9JyUyMzMzMycgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNFJTNDL3N2ZyUzRVwiKSBuby1yZXBlYXQgcmlnaHQgLjc1cmVtIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgXFw5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4cHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmVcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTFhN2U4O1xyXG4gICAgb3V0bGluZTogbm9uZVxyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdDpmb2N1czo6LW1zLXZhbHVlIHtcclxuICAgIGNvbG9yOiAjNTU1OTVjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdDpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogIzgxOGE5MTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmXHJcbn1cclxuXHJcbi5jdXN0b20tc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuICAgIG9wYWNpdHk6IDBcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Qtc20ge1xyXG4gICAgcGFkZGluZy10b3A6IC4zNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjM3NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogNzUlXHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiAxNHJlbTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIG9wYWNpdHk6IDBcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWNvbnRyb2w6bGFuZyhlbik6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiQ2hvb3NlIGZpbGUuLi5cIlxyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtY29udHJvbDo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm90dG9tOiAtMXB4O1xyXG4gICAgei1pbmRleDogNjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIC4yNXJlbSAuMjVyZW0gMFxyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtY29udHJvbDpsYW5nKGVuKTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiQnJvd3NlXCJcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZVxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbi5uYXYtbGluazpmb2N1cyxcclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4ubmF2LWxpbmsuZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICM4MThhOTFcclxufVxyXG5cclxuLm5hdi1saW5rLmRpc2FibGVkLFxyXG4ubmF2LWxpbmsuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5uYXYtbGluay5kaXNhYmxlZDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzgxOGE5MTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4ubmF2LWlubGluZSAubmF2LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbi5uYXYtaW5saW5lIC5uYXYtaXRlbSArIC5uYXYtaXRlbSxcclxuLm5hdi1pbmxpbmUgLm5hdi1saW5rICsgLm5hdi1saW5rIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtXHJcbn1cclxuXHJcbi5uYXYtdGFicyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZFxyXG59XHJcblxyXG4ubmF2LXRhYnM6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoXHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC4ycmVtXHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluazpmb2N1cyxcclxuLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlY2VlZWYgI2VjZWVlZiAjZGRkXHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmsuZGlzYWJsZWQsXHJcbi5uYXYtdGFicyAubmF2LWxpbmsuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5uYXYtdGFicyAubmF2LWxpbmsuZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICM4MThhOTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlOmZvY3VzLFxyXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZTpob3ZlcixcclxuLm5hdi10YWJzIC5uYXYtaXRlbS5vcGVuIC5uYXYtbGluayxcclxuLm5hdi10YWJzIC5uYXYtaXRlbS5vcGVuIC5uYXYtbGluazpmb2N1cyxcclxuLm5hdi10YWJzIC5uYXYtaXRlbS5vcGVuIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzU1NTk1YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGQgI2RkZCB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMFxyXG59XHJcblxyXG4ubmF2LXBpbGxzOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtaXRlbSB7XHJcbiAgICBmbG9hdDogbGVmdFxyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjJyZW1cclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6Zm9jdXMsXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTpob3ZlcixcclxuLm5hdi1waWxscyAubmF2LWl0ZW0ub3BlbiAubmF2LWxpbmssXHJcbi5uYXYtcGlsbHMgLm5hdi1pdGVtLm9wZW4gLm5hdi1saW5rOmZvY3VzLFxyXG4ubmF2LXBpbGxzIC5uYXYtaXRlbS5vcGVuIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDhcclxufVxyXG5cclxuLm5hdi1zdGFja2VkIC5uYXYtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lXHJcbn1cclxuXHJcbi5uYXYtc3RhY2tlZCAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgPiAudGFiLXBhbmUge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgPiAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbVxyXG59XHJcblxyXG4ubmF2YmFyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWZ1bGwge1xyXG4gICAgei1pbmRleDogMTAwMFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5uYXZiYXItZnVsbCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMFxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWZpeGVkLXRvcCxcclxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAzMFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5uYXZiYXItZml4ZWQtdG9wLFxyXG4gICAgLm5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhci1maXhlZC10b3Age1xyXG4gICAgdG9wOiAwXHJcbn1cclxuXHJcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICAgIGJvdHRvbTogMFxyXG59XHJcblxyXG4ubmF2YmFyLXN0aWNreS10b3Age1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5uYXZiYXItc3RpY2t5LXRvcCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMFxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW1cclxufVxyXG5cclxuLm5hdmJhci1icmFuZDpmb2N1cyxcclxuLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCA+IGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG4ubmF2YmFyLWRpdmlkZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IC40MjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjQyNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4ubmF2YmFyLWRpdmlkZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMDBhMFwiXHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMsXHJcbi5uYXZiYXItdG9nZ2xlcjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAuNDI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC40MjVyZW1cclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1saW5rICsgLm5hdi1saW5rIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtXHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbVxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KVxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQ6Zm9jdXMsXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpXHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMylcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNilcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAub3BlbiA+IC5uYXYtbGluayxcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAub3BlbiA+IC5uYXYtbGluazpmb2N1cyxcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAub3BlbiA+IC5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuYWN0aXZlID4gLm5hdi1saW5rLFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbms6Zm9jdXMsXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsub3BlbixcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsub3Blbjpmb2N1cyxcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsub3Blbjpob3ZlcixcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmU6Zm9jdXMsXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpXHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpXHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kOmZvY3VzLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cyxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVxyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm9wZW4gPiAubmF2LWxpbmssXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAub3BlbiA+IC5uYXYtbGluazpmb2N1cyxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5vcGVuID4gLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbms6Zm9jdXMsXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAuYWN0aXZlID4gLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLm9wZW4sXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsub3Blbjpmb2N1cyxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5vcGVuOmhvdmVyLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmU6Zm9jdXMsXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSlcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVhYmxlLXhzOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQzcHgpIHtcclxuICAgIC5uYXZiYXItdG9nZ2xlYWJsZS14cyAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLm5hdmJhci10b2dnbGVhYmxlLXhzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlYWJsZS1zbTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubmF2YmFyLXRvZ2dsZWFibGUtc20gLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5uYXZiYXItdG9nZ2xlYWJsZS1zbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZWFibGUtbWQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm5hdmJhci10b2dnbGVhYmxlLW1kIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubmF2YmFyLXRvZ2dsZWFibGUtbWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSlcclxufVxyXG5cclxuLmNhcmQtYmxvY2sge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbVxyXG59XHJcblxyXG4uY2FyZC1ibG9jazo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtXHJcbn1cclxuXHJcbi5jYXJkLXN1YnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjM3NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLmNhcmQtbGluayArIC5jYXJkLWxpbmsge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW1cclxufVxyXG5cclxuLmNhcmQgPiAubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLmNhcmQgPiAubGlzdC1ncm91cDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSlcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDBcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KVxyXG59XHJcblxyXG4uY2FyZC1mb290ZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoXHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAuMjVyZW0gLjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci10YWJzIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTAuNjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItcGlsbHMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMC42MjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyNzVkOFxyXG59XHJcblxyXG4uY2FyZC1wcmltYXJ5IC5jYXJkLWhlYWRlcixcclxuLmNhcmQtcHJpbWFyeSAuY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmNhcmQtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWNiODVjXHJcbn1cclxuXHJcbi5jYXJkLXN1Y2Nlc3MgLmNhcmQtaGVhZGVyLFxyXG4uY2FyZC1zdWNjZXNzIC5jYXJkLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uY2FyZC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XHJcbiAgICBib3JkZXItY29sb3I6ICM1YmMwZGVcclxufVxyXG5cclxuLmNhcmQtaW5mbyAuY2FyZC1oZWFkZXIsXHJcbi5jYXJkLWluZm8gLmNhcmQtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5jYXJkLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwYWQ0ZVxyXG59XHJcblxyXG4uY2FyZC13YXJuaW5nIC5jYXJkLWhlYWRlcixcclxuLmNhcmQtd2FybmluZyAuY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmNhcmQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLmNhcmQtZGFuZ2VyIC5jYXJkLWhlYWRlcixcclxuLmNhcmQtZGFuZ2VyIC5jYXJkLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uY2FyZC1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMjc1ZDhcclxufVxyXG5cclxuLmNhcmQtb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2NcclxufVxyXG5cclxuLmNhcmQtb3V0bGluZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWJjMGRlXHJcbn1cclxuXHJcbi5jYXJkLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzVjYjg1Y1xyXG59XHJcblxyXG4uY2FyZC1vdXRsaW5lLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMGFkNGVcclxufVxyXG5cclxuLmNhcmQtb3V0bGluZS1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZSAuY2FyZC1oZWFkZXIsXHJcbi5jYXJkLWludmVyc2UgLmNhcmQtZm9vdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UgLmNhcmQtaGVhZGVyLFxyXG4uY2FyZC1pbnZlcnNlIC5jYXJkLWZvb3RlcixcclxuLmNhcmQtaW52ZXJzZSAuY2FyZC10aXRsZSxcclxuLmNhcmQtaW52ZXJzZSAuY2FyZC1ibG9ja3F1b3RlIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UgLmNhcmQtbGluayxcclxuLmNhcmQtaW52ZXJzZSAuY2FyZC10ZXh0LFxyXG4uY2FyZC1pbnZlcnNlIC5jYXJkLXN1YnRpdGxlLFxyXG4uY2FyZC1pbnZlcnNlIC5jYXJkLWJsb2NrcXVvdGUgLmJsb2NrcXVvdGUtZm9vdGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpXHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UgLmNhcmQtbGluazpmb2N1cyxcclxuLmNhcmQtaW52ZXJzZSAuY2FyZC1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrcXVvdGUge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItbGVmdDogMFxyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkLWltZy1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW1cclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkLWltZy1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5jYXJkLWRlY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjYyNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjYyNXJlbVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWRlY2sgLmNhcmQge1xyXG4gICAgICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjYyNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNjI1cmVtXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmNhcmQtZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWdyb3VwIC5jYXJkIHtcclxuICAgICAgICBmbGV4OiAxIDAgMFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWdyb3VwIC5jYXJkICsgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZ3JvdXAgLmNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZ3JvdXAgLmNhcmQ6Zmlyc3QtY2hpbGQgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ncm91cCAuY2FyZDpmaXJzdC1jaGlsZCAuY2FyZC1pbWctYm90dG9tIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWdyb3VwIC5jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWdyb3VwIC5jYXJkOmxhc3QtY2hpbGQgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWdyb3VwIC5jYXJkOmxhc3QtY2hpbGQgLmNhcmQtaW1nLWJvdHRvbSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWdyb3VwIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ncm91cCAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIC5jYXJkLWltZy10b3AsXHJcbiAgICAuY2FyZC1ncm91cCAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIC5jYXJkLWltZy1ib3R0b20ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XHJcbiAgICAuY2FyZC1jb2x1bW5zIHtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWNvbHVtbnMgLmNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4uYnJlYWRjcnVtYjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5cclxuLmJyZWFkY3J1bWItaXRlbSB7XHJcbiAgICBmbG9hdDogbGVmdFxyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgIGNvbG9yOiAjODE4YTkxO1xyXG4gICAgY29udGVudDogXCIvXCJcclxufVxyXG5cclxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06aG92ZXI6OmJlZm9yZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTpob3Zlcjo6YmVmb3JlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzgxOGE5MVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4ucGFnZS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZVxyXG59XHJcblxyXG4ucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLnBhZ2UtaXRlbTpsYXN0LWNoaWxkIC5wYWdlLWxpbmsge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayxcclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpmb2N1cyxcclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDI3NWQ4XHJcbn1cclxuXHJcbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayxcclxuLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rOmZvY3VzLFxyXG4ucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICM4MThhOTE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkXHJcbn1cclxuXHJcbi5wYWdlLWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIGNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRcclxufVxyXG5cclxuLnBhZ2UtbGluazpmb2N1cyxcclxuLnBhZ2UtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAxNGM4YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRcclxufVxyXG5cclxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtbGluayB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWxnIC5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuM3JlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4zcmVtXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWxnIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuM3JlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuM3JlbVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1zbSAucGFnZS1saW5rIHtcclxuICAgIHBhZGRpbmc6IC4yNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAuODc1cmVtXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMnJlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4ycmVtXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMnJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMnJlbVxyXG59XHJcblxyXG4udGFnIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IC4yNWVtIC40ZW07XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLnRhZzplbXB0eSB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5idG4gLnRhZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xcHhcclxufVxyXG5cclxuYS50YWc6Zm9jdXMsXHJcbmEudGFnOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi50YWctcGlsbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW1cclxufVxyXG5cclxuLnRhZy1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MThhOTFcclxufVxyXG5cclxuLnRhZy1kZWZhdWx0W2hyZWZdOmZvY3VzLFxyXG4udGFnLWRlZmF1bHRbaHJlZl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzA3N1xyXG59XHJcblxyXG4udGFnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkOFxyXG59XHJcblxyXG4udGFnLXByaW1hcnlbaHJlZl06Zm9jdXMsXHJcbi50YWctcHJpbWFyeVtocmVmXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI1YWE1XHJcbn1cclxuXHJcbi50YWctc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjXHJcbn1cclxuXHJcbi50YWctc3VjY2Vzc1tocmVmXTpmb2N1cyxcclxuLnRhZy1zdWNjZXNzW2hyZWZdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDRcclxufVxyXG5cclxuLnRhZy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGVcclxufVxyXG5cclxuLnRhZy1pbmZvW2hyZWZdOmZvY3VzLFxyXG4udGFnLWluZm9baHJlZl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjBkNVxyXG59XHJcblxyXG4udGFnLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZVxyXG59XHJcblxyXG4udGFnLXdhcm5pbmdbaHJlZl06Zm9jdXMsXHJcbi50YWctd2FybmluZ1tocmVmXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzFmXHJcbn1cclxuXHJcbi50YWctZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLnRhZy1kYW5nZXJbaHJlZl06Zm9jdXMsXHJcbi50YWctZGFuZ2VyW2hyZWZdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTMwMmNcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbSAycmVtXHJcbiAgICB9XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24taHIge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2QwZDVkOFxyXG59XHJcblxyXG4uanVtYm90cm9uLWZsdWlkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5hbGVydC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiBpbmhlcml0XHJcbn1cclxuXHJcbi5hbGVydC1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5hbGVydC1kaXNtaXNzaWJsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbi5hbGVydC1kaXNtaXNzaWJsZSAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgcmlnaHQ6IC0yMXB4O1xyXG4gICAgY29sb3I6IGluaGVyaXRcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcclxuICAgIGJvcmRlci1jb2xvcjogI2QwZTljNjtcclxuICAgIGNvbG9yOiAjM2M3NjNkXHJcbn1cclxuXHJcbi5hbGVydC1zdWNjZXNzIGhyIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNjMWUyYjNcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3MgLmFsZXJ0LWxpbmsge1xyXG4gICAgY29sb3I6ICMyYjU0MmNcclxufVxyXG5cclxuLmFsZXJ0LWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcclxuICAgIGJvcmRlci1jb2xvcjogI2JjZGZmMTtcclxuICAgIGNvbG9yOiAjMzE3MDhmXHJcbn1cclxuXHJcbi5hbGVydC1pbmZvIGhyIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNhNmQ1ZWNcclxufVxyXG5cclxuLmFsZXJ0LWluZm8gLmFsZXJ0LWxpbmsge1xyXG4gICAgY29sb3I6ICMyNDUyNjlcclxufVxyXG5cclxuLmFsZXJ0LXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZhZjJjYztcclxuICAgIGNvbG9yOiAjOGE2ZDNiXHJcbn1cclxuXHJcbi5hbGVydC13YXJuaW5nIGhyIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmN2VjYjVcclxufVxyXG5cclxuLmFsZXJ0LXdhcm5pbmcgLmFsZXJ0LWxpbmsge1xyXG4gICAgY29sb3I6ICM2NjUxMmNcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWJjY2NjO1xyXG4gICAgY29sb3I6ICNhOTQ0NDJcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciBociB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZTRiOWI5XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIgLmFsZXJ0LWxpbmsge1xyXG4gICAgY29sb3I6ICM4NDM1MzRcclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcmVtIDBcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBcclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbn1cclxuXHJcbi5wcm9ncmVzc1t2YWx1ZV0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLnByb2dyZXNzW3ZhbHVlXTo6LW1zLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRkOTtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG4ucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGQ5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRkOTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4ucHJvZ3Jlc3NbdmFsdWU9XCIxMDBcIl06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbi5wcm9ncmVzc1t2YWx1ZT1cIjEwMFwiXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4ucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtXHJcbn1cclxuXHJcbmJhc2U6Oi1tb3otcHJvZ3Jlc3MtYmFyLFxyXG4ucHJvZ3Jlc3NbdmFsdWVdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMFxcMFxyXG4pIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAtOTk5cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmVzc1t3aWR0aD1cIjEwMCVcIl0ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtc3RyaXBlZFt2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbVxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtc3RyaXBlZFt2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcmVtIDFyZW1cclxufVxyXG5cclxuLnByb2dyZXNzLXN0cmlwZWRbdmFsdWVdOjotbXMtZmlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMXJlbSAxcmVtXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBcXDBcclxuKSB7XHJcbiAgICAucHJvZ3Jlc3MtYmFyLXN0cmlwZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMXJlbSAxcmVtXHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1hbmltYXRlZFt2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGVcclxufVxyXG5cclxuLnByb2dyZXNzLWFuaW1hdGVkW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGVcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMFxcMFxyXG4pIHtcclxuICAgIC5wcm9ncmVzcy1hbmltYXRlZCAucHJvZ3Jlc3MtYmFyLXN0cmlwZWQge1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1zdWNjZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1zdWNjZXNzW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1Y1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtc3VjY2Vzc1t2YWx1ZV06Oi1tcy1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWNcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMFxcMFxyXG4pIHtcclxuICAgIC5wcm9ncmVzcy1zdWNjZXNzIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWNcclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyZXNzLWluZm9bdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGVcclxufVxyXG5cclxuLnByb2dyZXNzLWluZm9bdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1pbmZvW3ZhbHVlXTo6LW1zLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwXFwwXHJcbikge1xyXG4gICAgLnByb2dyZXNzLWluZm8gLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtd2FybmluZ1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZVxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtd2FybmluZ1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGVcclxufVxyXG5cclxuLnByb2dyZXNzLXdhcm5pbmdbdmFsdWVdOjotbXMtZmlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBcXDBcclxuKSB7XHJcbiAgICAucHJvZ3Jlc3Mtd2FybmluZyAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlXHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1kYW5nZXJbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLnByb2dyZXNzLWRhbmdlclt2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuLnByb2dyZXNzLWRhbmdlclt2YWx1ZV06Oi1tcy1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGZcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMFxcMFxyXG4pIHtcclxuICAgIC5wcm9ncmVzcy1kYW5nZXIgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZlxyXG4gICAgfVxyXG59XHJcblxyXG4ubWVkaWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cclxufVxyXG5cclxuLm1lZGlhLWJvZHkge1xyXG4gICAgZmxleDogMVxyXG59XHJcblxyXG4ubWVkaWEtbWlkZGxlIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlclxyXG59XHJcblxyXG4ubWVkaWEtYm90dG9tIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kXHJcbn1cclxuXHJcbi5tZWRpYS1vYmplY3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLm1lZGlhLW9iamVjdC5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1heC13aWR0aDogbm9uZVxyXG59XHJcblxyXG4ubWVkaWEtcmlnaHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4XHJcbn1cclxuXHJcbi5tZWRpYS1sZWZ0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHhcclxufVxyXG5cclxuLm1lZGlhLWhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweFxyXG59XHJcblxyXG4ubWVkaWEtbGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW1cclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZCxcclxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpmb2N1cyxcclxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzgxOGE5MTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxyXG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcclxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xyXG4gICAgY29sb3I6IGluaGVyaXRcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZCAubGlzdC1ncm91cC1pdGVtLXRleHQsXHJcbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LFxyXG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XHJcbiAgICBjb2xvcjogIzgxOGE5MVxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSxcclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMsXHJcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMjc1ZDhcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiBzbWFsbCxcclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsLFxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXHJcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IHNtYWxsLFxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiAuc21hbGwsXHJcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gc21hbGwsXHJcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IC5zbWFsbCB7XHJcbiAgICBjb2xvcjogaW5oZXJpdFxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSAubGlzdC1ncm91cC1pdGVtLXRleHQsXHJcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCxcclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcclxuICAgIGNvbG9yOiAjYThkNmZlXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWZsdXNoIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMFxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLWFjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdFxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLWFjdGlvbiAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMzMzNcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMsXHJcbi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICMzYzc2M2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4XHJcbn1cclxuXHJcbmEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzNjNzYzZFxyXG59XHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XHJcbiAgICBjb2xvcjogaW5oZXJpdFxyXG59XHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmZvY3VzLFxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmhvdmVyLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3M6Zm9jdXMsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNjNzYzZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGU5YzZcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5hY3RpdmUsXHJcbmEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlOmZvY3VzLFxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpob3ZlcixcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZSxcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpmb2N1cyxcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzc2M2Q7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYzc2M2RcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS1pbmZvIHtcclxuICAgIGNvbG9yOiAjMzE3MDhmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmN1xyXG59XHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8ge1xyXG4gICAgY29sb3I6ICMzMTcwOGZcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mbyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xyXG4gICAgY29sb3I6IGluaGVyaXRcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbzpmb2N1cyxcclxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbzpob3ZlcixcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1pbmZvOmZvY3VzLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm86aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMTcwOGY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlM2YzXHJcbn1cclxuXHJcbmEubGlzdC1ncm91cC1pdGVtLWluZm8uYWN0aXZlLFxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvLmFjdGl2ZTpmb2N1cyxcclxuYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6aG92ZXIsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmUsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6Zm9jdXMsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE3MDhmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzE3MDhmXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZyB7XHJcbiAgICBjb2xvcjogIzhhNmQzYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTNcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZyxcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjOGE2ZDNiXHJcbn1cclxuXHJcbmEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiBpbmhlcml0XHJcbn1cclxuXHJcbmEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmc6Zm9jdXMsXHJcbmEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmc6aG92ZXIsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZzpmb2N1cyxcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOGE2ZDNiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjJjY1xyXG59XHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmFjdGl2ZSxcclxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5hY3RpdmU6Zm9jdXMsXHJcbmEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmhvdmVyLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmZvY3VzLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhNmQzYjtcclxuICAgIGJvcmRlci1jb2xvcjogIzhhNmQzYlxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGVcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MlxyXG59XHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xyXG4gICAgY29sb3I6IGluaGVyaXRcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyOmZvY3VzLFxyXG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXI6aG92ZXIsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyOmZvY3VzLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmNjY2NcclxufVxyXG5cclxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZSxcclxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpmb2N1cyxcclxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpob3ZlcixcclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlLFxyXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmU6Zm9jdXMsXHJcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOTQ0NDI7XHJcbiAgICBib3JkZXItY29sb3I6ICNhOTQ0NDJcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHhcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zXHJcbn1cclxuXHJcbi5lbWJlZC1yZXNwb25zaXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLmVtYmVkLXJlc3BvbnNpdmUgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSxcclxuLmVtYmVkLXJlc3BvbnNpdmUgaWZyYW1lLFxyXG4uZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZCxcclxuLmVtYmVkLXJlc3BvbnNpdmUgb2JqZWN0LFxyXG4uZW1iZWQtcmVzcG9uc2l2ZSB2aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDBcclxufVxyXG5cclxuLmVtYmVkLXJlc3BvbnNpdmUtMjFieTkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQyLjg1NzE0JVxyXG59XHJcblxyXG4uZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlXHJcbn1cclxuXHJcbi5lbWJlZC1yZXNwb25zaXZlLTRieTMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDc1JVxyXG59XHJcblxyXG4uZW1iZWQtcmVzcG9uc2l2ZS0xYnkxIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDAlXHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgICBvcGFjaXR5OiAuMlxyXG59XHJcblxyXG4uY2xvc2U6Zm9jdXMsXHJcbi5jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IC41XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmVcclxufVxyXG5cclxuLm1vZGFsLW9wZW4ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA1MDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaFxyXG59XHJcblxyXG4ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKVxyXG59XHJcblxyXG4ubW9kYWwuaW4gLm1vZGFsLWRpYWxvZyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKVxyXG59XHJcblxyXG4ubW9kYWwtb3BlbiAubW9kYWwge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0b1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XHJcbiAgICBvdXRsaW5lOiAwXHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDQwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3AuZmFkZSB7XHJcbiAgICBvcGFjaXR5OiAwXHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcC5pbiB7XHJcbiAgICBvcGFjaXR5OiAuNVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE1cHhcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNVxyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG4ubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOTk5OXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0b1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1zbSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5tb2RhbC1sZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweFxyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDcwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1icmVhazogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3BhY2l0eTogMFxyXG59XHJcblxyXG4udG9vbHRpcC5pbiB7XHJcbiAgICBvcGFjaXR5OiAuOVxyXG59XHJcblxyXG4udG9vbHRpcC50b29sdGlwLXRvcCxcclxuLnRvb2x0aXAuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTNweFxyXG59XHJcblxyXG4udG9vbHRpcC50b29sdGlwLXRvcCAudG9vbHRpcC1hcnJvdyxcclxuLnRvb2x0aXAuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtYm90dG9tIC50b29sdGlwLWFycm93IHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDA7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwXHJcbn1cclxuXHJcbi50b29sdGlwLnRvb2x0aXAtcmlnaHQsXHJcbi50b29sdGlwLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWxlZnQge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4XHJcbn1cclxuXHJcbi50b29sdGlwLnRvb2x0aXAtcmlnaHQgLnRvb2x0aXAtYXJyb3csXHJcbi50b29sdGlwLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWxlZnQgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMFxyXG59XHJcblxyXG4udG9vbHRpcC50b29sdGlwLWJvdHRvbSxcclxuLnRvb2x0aXAuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtdG9wIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4XHJcbn1cclxuXHJcbi50b29sdGlwLnRvb2x0aXAtYm90dG9tIC50b29sdGlwLWFycm93LFxyXG4udG9vbHRpcC5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC10b3AgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDBcclxufVxyXG5cclxuLnRvb2x0aXAudG9vbHRpcC1sZWZ0LFxyXG4udG9vbHRpcC5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1yaWdodCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4XHJcbn1cclxuXHJcbi50b29sdGlwLnRvb2x0aXAtbGVmdCAudG9vbHRpcC1hcnJvdyxcclxuLnRvb2x0aXAuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtcmlnaHQgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwMFxyXG59XHJcblxyXG4udG9vbHRpcC1pbm5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4udG9vbHRpcC1hcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkXHJcbn1cclxuXHJcbi5wb3BvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDYwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDI3NnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtYnJlYWs6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW1cclxufVxyXG5cclxuLnBvcG92ZXIucG9wb3Zlci10b3AsXHJcbi5wb3BvdmVyLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweFxyXG59XHJcblxyXG4ucG9wb3Zlci5wb3BvdmVyLXRvcCAucG9wb3Zlci1hcnJvdyxcclxuLnBvcG92ZXIuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtYm90dG9tIC5wb3BvdmVyLWFycm93IHtcclxuICAgIGJvdHRvbTogLTExcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMFxyXG59XHJcblxyXG4ucG9wb3Zlci5wb3BvdmVyLXRvcCAucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsXHJcbi5wb3BvdmVyLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWJvdHRvbSAucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBcclxufVxyXG5cclxuLnBvcG92ZXIucG9wb3Zlci1yaWdodCxcclxuLnBvcG92ZXIuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG59XHJcblxyXG4ucG9wb3Zlci5wb3BvdmVyLXJpZ2h0IC5wb3BvdmVyLWFycm93LFxyXG4ucG9wb3Zlci5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1sZWZ0IC5wb3BvdmVyLWFycm93IHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogLTExcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwXHJcbn1cclxuXHJcbi5wb3BvdmVyLnBvcG92ZXItcmlnaHQgLnBvcG92ZXItYXJyb3c6OmFmdGVyLFxyXG4ucG9wb3Zlci5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1sZWZ0IC5wb3BvdmVyLWFycm93OjphZnRlciB7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgbGVmdDogMXB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwXHJcbn1cclxuXHJcbi5wb3BvdmVyLnBvcG92ZXItYm90dG9tLFxyXG4ucG9wb3Zlci5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG59XHJcblxyXG4ucG9wb3Zlci5wb3BvdmVyLWJvdHRvbSAucG9wb3Zlci1hcnJvdyxcclxuLnBvcG92ZXIuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtdG9wIC5wb3BvdmVyLWFycm93IHtcclxuICAgIHRvcDogLTExcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KVxyXG59XHJcblxyXG4ucG9wb3Zlci5wb3BvdmVyLWJvdHRvbSAucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsXHJcbi5wb3BvdmVyLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLXRvcCAucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnBvcG92ZXIucG9wb3Zlci1sZWZ0LFxyXG4ucG9wb3Zlci5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1yaWdodCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHhcclxufVxyXG5cclxuLnBvcG92ZXIucG9wb3Zlci1sZWZ0IC5wb3BvdmVyLWFycm93LFxyXG4ucG9wb3Zlci5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1yaWdodCAucG9wb3Zlci1hcnJvdyB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAtMTFweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSlcclxufVxyXG5cclxuLnBvcG92ZXIucG9wb3Zlci1sZWZ0IC5wb3BvdmVyLWFycm93OjphZnRlcixcclxuLnBvcG92ZXIuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtcmlnaHQgLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5wb3BvdmVyLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjIzNzVyZW0gLjIzNzVyZW0gMCAwXHJcbn1cclxuXHJcbi5wb3BvdmVyLXRpdGxlOmVtcHR5IHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLnBvcG92ZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA5cHggMTRweFxyXG59XHJcblxyXG4ucG9wb3Zlci1hcnJvdyxcclxuLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZFxyXG59XHJcblxyXG4ucG9wb3Zlci1hcnJvdyB7XHJcbiAgICBib3JkZXItd2lkdGg6IDExcHhcclxufVxyXG5cclxuLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHhcclxufVxyXG5cclxuLmNhcm91c2VsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciA+IC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNnMgZWFzZS1pbi1vdXQgbGVmdFxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuY2Fyb3VzZWwtaXRlbSA+IGltZyxcclxuLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0gPiBhID4gaW1nIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxXHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kICh0cmFuc2Zvcm0tM2QpLFxyXG4oLXdlYmtpdC10cmFuc2Zvcm0tM2QpIHtcclxuICAgIC5jYXJvdXNlbC1pbm5lciA+IC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0ubmV4dCxcclxuICAgIC5jYXJvdXNlbC1pbm5lciA+IC5jYXJvdXNlbC1pdGVtLmFjdGl2ZS5yaWdodCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0ucHJldixcclxuICAgIC5jYXJvdXNlbC1pbm5lciA+IC5jYXJvdXNlbC1pdGVtLmFjdGl2ZS5sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0ubmV4dC5sZWZ0LFxyXG4gICAgLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0ucHJldi5yaWdodCxcclxuICAgIC5jYXJvdXNlbC1pbm5lciA+IC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUsXHJcbi5jYXJvdXNlbC1pbm5lciA+IC5uZXh0LFxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAucHJldiB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlIHtcclxuICAgIGxlZnQ6IDBcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyID4gLm5leHQsXHJcbi5jYXJvdXNlbC1pbm5lciA+IC5wcmV2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciA+IC5uZXh0IHtcclxuICAgIGxlZnQ6IDEwMCVcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyID4gLnByZXYge1xyXG4gICAgbGVmdDogLTEwMCVcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyID4gLm5leHQubGVmdCxcclxuLmNhcm91c2VsLWlubmVyID4gLnByZXYucmlnaHQge1xyXG4gICAgbGVmdDogMFxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlLmxlZnQge1xyXG4gICAgbGVmdDogLTEwMCVcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZS5yaWdodCB7XHJcbiAgICBsZWZ0OiAxMDAlXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIG9wYWNpdHk6IC41XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wMDAxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyM4MDAwMDAwMCcsIGVuZENvbG9yc3RyPScjMDAwMDAwMDAnLCBHcmFkaWVudFR5cGU9MSlcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuMDAwMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMwMDAwMDAwMCcsIGVuZENvbG9yc3RyPScjODAwMDAwMDAnLCBHcmFkaWVudFR5cGU9MSlcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2w6Zm9jdXMsXHJcbi5jYXJvdXNlbC1jb250cm9sOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIG9wYWNpdHk6IC45XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHhcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDM5XCJcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDNhXCJcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgei1pbmRleDogMTU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTUlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiAuYnRuIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldixcclxuICAgIC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHhcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogMjBweFxyXG4gICAgfVxyXG59XHJcblxyXG4uYmctaW52ZXJzZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYTNjXHJcbn1cclxuXHJcbi5iZy1mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuYS5iZy1wcmltYXJ5OmZvY3VzLFxyXG5hLmJnLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNWFhNSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5iZy1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnRcclxufVxyXG5cclxuYS5iZy1zdWNjZXNzOmZvY3VzLFxyXG5hLmJnLXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5iZy1pbmZvIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnRcclxufVxyXG5cclxuYS5iZy1pbmZvOmZvY3VzLFxyXG5hLmJnLWluZm86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjBkNSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5iZy13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnRcclxufVxyXG5cclxuYS5iZy13YXJuaW5nOmZvY3VzLFxyXG5hLmJnLXdhcm5pbmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjOTcxZiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5iZy1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudFxyXG59XHJcblxyXG5hLmJnLWRhbmdlcjpmb2N1cyxcclxuYS5iZy1kYW5nZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYyAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5cclxuLmQtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZC1pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmQtaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5mbGV4LXhzLWZpcnN0IHtcclxuICAgIG9yZGVyOiAtMVxyXG59XHJcblxyXG4uZmxleC14cy1sYXN0IHtcclxuICAgIG9yZGVyOiAxXHJcbn1cclxuXHJcbi5mbGV4LXhzLXVub3JkZXJlZCB7XHJcbiAgICBvcmRlcjogMFxyXG59XHJcblxyXG4uZmxleC1pdGVtcy14cy10b3Age1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcclxufVxyXG5cclxuLmZsZXgtaXRlbXMteHMtbWlkZGxlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLmZsZXgtaXRlbXMteHMtYm90dG9tIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZFxyXG59XHJcblxyXG4uZmxleC14cy10b3Age1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydFxyXG59XHJcblxyXG4uZmxleC14cy1taWRkbGUge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXHJcbn1cclxuXHJcbi5mbGV4LXhzLWJvdHRvbSB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZFxyXG59XHJcblxyXG4uZmxleC1pdGVtcy14cy1sZWZ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG59XHJcblxyXG4uZmxleC1pdGVtcy14cy1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmZsZXgtaXRlbXMteHMtcmlnaHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG59XHJcblxyXG4uZmxleC1pdGVtcy14cy1hcm91bmQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxufVxyXG5cclxuLmZsZXgtaXRlbXMteHMtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XHJcbiAgICAuZmxleC1zbS1maXJzdCB7XHJcbiAgICAgICAgb3JkZXI6IC0xXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtc20tbGFzdCB7XHJcbiAgICAgICAgb3JkZXI6IDFcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1zbS11bm9yZGVyZWQge1xyXG4gICAgICAgIG9yZGVyOiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmZsZXgtaXRlbXMtc20tdG9wIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLXNtLW1pZGRsZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLXNtLWJvdHRvbSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmZsZXgtc20tdG9wIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtc20tbWlkZGxlIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1zbS1ib3R0b20ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xyXG4gICAgLmZsZXgtaXRlbXMtc20tbGVmdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMtc20tY2VudGVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLXNtLXJpZ2h0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMtc20tYXJvdW5kIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLXNtLWJldHdlZW4ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mbGV4LW1kLWZpcnN0IHtcclxuICAgICAgICBvcmRlcjogLTFcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1tZC1sYXN0IHtcclxuICAgICAgICBvcmRlcjogMVxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LW1kLXVub3JkZXJlZCB7XHJcbiAgICAgICAgb3JkZXI6IDBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmxleC1pdGVtcy1tZC10b3Age1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMtbWQtbWlkZGxlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMtbWQtYm90dG9tIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmRcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmxleC1tZC10b3Age1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnRcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1tZC1taWRkbGUge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LW1kLWJvdHRvbSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmRcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmxleC1pdGVtcy1tZC1sZWZ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy1tZC1jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMtbWQtcmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy1tZC1hcm91bmQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMtbWQtYmV0d2VlbiB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmZsZXgtbGctZmlyc3Qge1xyXG4gICAgICAgIG9yZGVyOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWxnLWxhc3Qge1xyXG4gICAgICAgIG9yZGVyOiAxXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtbGctdW5vcmRlcmVkIHtcclxuICAgICAgICBvcmRlcjogMFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5mbGV4LWl0ZW1zLWxnLXRvcCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy1sZy1taWRkbGUge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy1sZy1ib3R0b20ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5mbGV4LWxnLXRvcCB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWxnLW1pZGRsZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtbGctYm90dG9tIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5mbGV4LWl0ZW1zLWxnLWxlZnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLWxnLWNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy1sZy1yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLWxnLWFyb3VuZCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy1sZy1iZXR3ZWVuIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmZsZXgteGwtZmlyc3Qge1xyXG4gICAgICAgIG9yZGVyOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LXhsLWxhc3Qge1xyXG4gICAgICAgIG9yZGVyOiAxXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgteGwtdW5vcmRlcmVkIHtcclxuICAgICAgICBvcmRlcjogMFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZmxleC1pdGVtcy14bC10b3Age1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMteGwtbWlkZGxlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtaXRlbXMteGwtYm90dG9tIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmRcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmZsZXgteGwtdG9wIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgteGwtbWlkZGxlIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC14bC1ib3R0b20ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5mbGV4LWl0ZW1zLXhsLWxlZnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLXhsLWNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy14bC1yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWl0ZW1zLXhsLWFyb3VuZCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1pdGVtcy14bC1iZXR3ZWVuIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIH1cclxufVxyXG5cclxuLnB1bGwteHMtbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wdWxsLXhzLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wdWxsLXhzLW5vbmUge1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC5wdWxsLXNtLWxlZnQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS1yaWdodCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1zbS1ub25lIHtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnB1bGwtbWQtbGVmdCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLXJpZ2h0IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC5wdWxsLW1kLW5vbmUge1xyXG4gICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucHVsbC1sZy1sZWZ0IHtcclxuICAgICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctcmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwtbGctbm9uZSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAucHVsbC14bC1sZWZ0IHtcclxuICAgICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtcmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnB1bGwteGwtbm9uZSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG4uc3Itb25seSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICBib3JkZXI6IDBcclxufVxyXG5cclxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSxcclxuLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgY2xpcDogYXV0b1xyXG59XHJcblxyXG4udy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS14LWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWEtMCB7XHJcbiAgICBtYXJnaW46IDAgMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLXQtMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tci0wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWItMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tbC0wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0teC0wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS15LTAge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWEtMSB7XHJcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLXQtMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tci0xIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWItMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tbC0xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0teC0xIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS15LTEge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWEtMiB7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAxLjVyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS10LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tci0yIHtcclxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tYi0yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWwtMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0teC0yIHtcclxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0teS0yIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tYS0zIHtcclxuICAgIG1hcmdpbjogM3JlbSAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tdC0zIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS1yLTMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tYi0zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS1sLTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ubS14LTMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLXktMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtYS0wIHtcclxuICAgIHBhZGRpbmc6IDAgMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXQtMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXItMCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtYi0wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtbC0wIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXgtMCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC15LTAge1xyXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtYS0xIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXQtMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXItMSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtYi0xIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtbC0xIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXgtMSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC15LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtYS0yIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC10LTIge1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXItMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC1iLTIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLWwtMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXgtMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAteS0yIHtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC1hLTMge1xyXG4gICAgcGFkZGluZzogM3JlbSAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtdC0zIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAtci0zIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC1iLTMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucC1sLTMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnAteC0zIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wLXktMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucG9zLWYtdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDMwXHJcbn1cclxuXHJcbi50ZXh0LWp1c3RpZnkge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50ZXh0LW5vd3JhcCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnRleHQtdHJ1bmNhdGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcblxyXG4udGV4dC14cy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4udGV4dC14cy1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50ZXh0LXhzLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcclxuICAgIC50ZXh0LXNtLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LXNtLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtc20tY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC50ZXh0LW1kLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LW1kLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtbWQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50ZXh0LWxnLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWxnLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtbGctY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAudGV4dC14bC1sZWZ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC14bC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LXhsLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtbG93ZXJjYXNlIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudFxyXG59XHJcblxyXG4udGV4dC11cHBlcmNhc2Uge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50ZXh0LWNhcGl0YWxpemUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcclxufVxyXG5cclxuLmZvbnQtd2VpZ2h0LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLmZvbnQtaXRhbGljIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogIzgxOGE5MSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmEudGV4dC1tdXRlZDpmb2N1cyxcclxuYS50ZXh0LW11dGVkOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjg3MDc3XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gICAgY29sb3I6ICMwMjc1ZDggIWltcG9ydGFudFxyXG59XHJcblxyXG5hLnRleHQtcHJpbWFyeTpmb2N1cyxcclxuYS50ZXh0LXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMjVhYTVcclxufVxyXG5cclxuLnRleHQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmEudGV4dC1zdWNjZXNzOmZvY3VzLFxyXG5hLnRleHQtc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogIzQ0OWQ0NFxyXG59XHJcblxyXG4udGV4dC1pbmZvIHtcclxuICAgIGNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnRcclxufVxyXG5cclxuYS50ZXh0LWluZm86Zm9jdXMsXHJcbmEudGV4dC1pbmZvOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzFiMGQ1XHJcbn1cclxuXHJcbi50ZXh0LXdhcm5pbmcge1xyXG4gICAgY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudFxyXG59XHJcblxyXG5hLnRleHQtd2FybmluZzpmb2N1cyxcclxuYS50ZXh0LXdhcm5pbmc6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlYzk3MWZcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnRcclxufVxyXG5cclxuYS50ZXh0LWRhbmdlcjpmb2N1cyxcclxuYS50ZXh0LWRhbmdlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2M5MzAyY1xyXG59XHJcblxyXG4udGV4dC1oaWRlIHtcclxuICAgIGZvbnQ6IDAvMCBhO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG4uaW52aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5oaWRkZW4teHMtdXAge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDNweCkge1xyXG4gICAgLmhpZGRlbi14cy1kb3duIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XHJcbiAgICAuaGlkZGVuLXNtLXVwIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuaGlkZGVuLXNtLWRvd24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oaWRkZW4tbWQtdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5oaWRkZW4tbWQtZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhpZGRlbi1sZy11cCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIC5oaWRkZW4tbGctZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5oaWRkZW4teGwtdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG4uaGlkZGVuLXhsLWRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi52aXNpYmxlLXByaW50LWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLnZpc2libGUtcHJpbnQtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLnZpc2libGUtcHJpbnQtaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLnZpc2libGUtcHJpbnQtaW5saW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG4udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAudmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuaGlkZGVuLXByaW50IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC1mbGV4LmNzcy5tYXAgKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-list/projet-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/projet/projet-list/projet-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProjetListComponent */

  /***/
  function srcAppModulesProjetProjetListProjetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetListComponent", function () {
      return ProjetListComponent;
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


    var _projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng4-loading-spinner */
    "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);

    var ProjetListComponent =
    /*#__PURE__*/
    function () {
      function ProjetListComponent(service, router, spinnerService) {
        _classCallCheck(this, ProjetListComponent);

        this.service = service;
        this.router = router;
        this.spinnerService = spinnerService;
      }

      _createClass(ProjetListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPage(1);
          this.initDisplay(false, null);
        }
      }, {
        key: "parseDate",
        value: function parseDate(date) {
          return date = moment__WEBPACK_IMPORTED_MODULE_4__().format('dd/MM/YYYY');
        } // tslint:disable-next-line: variable-name

      }, {
        key: "getPage",
        value: function getPage(_page) {
          var _this38 = this;

          this.service.query(_page).subscribe(function (response) {
            _this38.projets = response._embeded.projets.content;
            _this38.totalElements = response._embeded.projets.totalElements;
            _this38.totalPages = response._embeded.projets.totalPages;
            _this38.last = response._embeded.projets.last;
            _this38.first = response._embeded.projets.first;
            _this38.sort = response._embeded.projets.first;
            _this38.size = response._embeded.projets.size;
            _this38.number = response._embeded.projets.number;
            _this38.numberOfElements = response._embeded.projets.numberOfElements;
            _this38.empty = response._embeded.projets.empty;
            _this38.pageNumber = response._embeded.projets.pageable.pageNumber;
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          // tslint:disable-next-line: variable-name
          var _page = this.pageNumber + 2;

          this.getPage(_page);
        }
      }, {
        key: "show",
        value: function show() {
          var _this39 = this;

          this.spinnerService.show();
          setTimeout(function () {
            return _this39.spinnerService.hide();
          }, 3000);
        }
      }, {
        key: "previewPage",
        value: function previewPage() {
          var _page = this.pageNumber;
          this.getPage(_page);
        }
      }, {
        key: "onDetail",
        value: function onDetail(slug) {
          this.router.navigateByUrl('projets/' + slug);
        }
      }, {
        key: "onEdit",
        value: function onEdit(slug) {
          this.router.navigateByUrl('projets/edit' + slug);
        }
      }, {
        key: "onDelete",
        value: function onDelete(item) {
          var _this40 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le projet ansi que toutes les taches et espace de travail seront supprimer !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              swalWithBootstrapButtons.fire('Succès!', 'Item supprimé avec succès !.', 'success');

              _this40.service.delete(item.slug).subscribe(function (response) {
                var message = response.message;
                var display = true;

                _this40.initDisplay(true, message);

                _this40.getPage(_this40.pageNumber + 1);
              });
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
              swalWithBootstrapButtons.fire('Annuler', '', 'error');
            }
          });
        }
      }, {
        key: "initDisplay",
        value: function initDisplay(display, message) {
          this.display = display;
          this.message = message;
        } // tslint:disable-next-line: use-lifecycle-interface

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initDisplay(false, null);
        }
      }]);

      return ProjetListComponent;
    }();

    ProjetListComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_2__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]
      }];
    };

    ProjetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-list/projet-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-list.component.css */
      "./src/app/modules/projet/projet-list/projet-list.component.css")).default]
    })], ProjetListComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetMaitreDoeuvrageProjetMaitreDoeuvrageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1tYWl0cmUtZG9ldXZyYWdlL3Byb2pldC1tYWl0cmUtZG9ldXZyYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProjetMaitreDoeuvrageComponent */

  /***/
  function srcAppModulesProjetProjetMaitreDoeuvrageProjetMaitreDoeuvrageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetMaitreDoeuvrageComponent", function () {
      return ProjetMaitreDoeuvrageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetMaitreDoeuvrageComponent =
    /*#__PURE__*/
    function () {
      function ProjetMaitreDoeuvrageComponent() {
        _classCallCheck(this, ProjetMaitreDoeuvrageComponent);
      }

      _createClass(ProjetMaitreDoeuvrageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetMaitreDoeuvrageComponent;
    }();

    ProjetMaitreDoeuvrageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-maitre-doeuvrage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-maitre-doeuvrage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-maitre-doeuvrage.component.css */
      "./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.css")).default]
    })], ProjetMaitreDoeuvrageComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetMaitreDoeuvreProjetMaitreDoeuvreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1tYWl0cmUtZG9ldXZyZS9wcm9qZXQtbWFpdHJlLWRvZXV2cmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ProjetMaitreDoeuvreComponent */

  /***/
  function srcAppModulesProjetProjetMaitreDoeuvreProjetMaitreDoeuvreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetMaitreDoeuvreComponent", function () {
      return ProjetMaitreDoeuvreComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projet.service */
    "./src/app/modules/projet/projet.service.ts");

    var ProjetMaitreDoeuvreComponent =
    /*#__PURE__*/
    function () {
      function ProjetMaitreDoeuvreComponent(projetService, router, route) {
        _classCallCheck(this, ProjetMaitreDoeuvreComponent);

        this.projetService = projetService;
        this.router = router;
        this.route = route;
        this.getSlug();
      }

      _createClass(ProjetMaitreDoeuvreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlug();
          this.select(this.slug);
        }
      }, {
        key: "getSlug",
        value: function getSlug() {
          var _this41 = this;

          this.route.params.subscribe(function (params) {
            _this41.routeParams = params;
            _this41.slug = _this41.routeParams.slug;
          });
        }
      }, {
        key: "goToAddMaitreDoeuvre",
        value: function goToAddMaitreDoeuvre() {
          this.router.navigate(['projets/maitredoeuvre/create/', this.slug]);
        }
      }, {
        key: "select",
        value: function select(slug) {
          var _this42 = this;

          this.projetService.find(slug).subscribe(function (res) {
            _this42.projet = res._embeded.projet;
            console.log(_this42.projet);
          });
        }
      }]);

      return ProjetMaitreDoeuvreComponent;
    }();

    ProjetMaitreDoeuvreComponent.ctorParameters = function () {
      return [{
        type: _projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjetMaitreDoeuvreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-maitre-doeuvre',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-maitre-doeuvre.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-maitre-doeuvre.component.scss */
      "./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.scss")).default]
    })], ProjetMaitreDoeuvreComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-partenaire/projet-partenaire.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/projet/projet-partenaire/projet-partenaire.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetPartenaireProjetPartenaireComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1wYXJ0ZW5haXJlL3Byb2pldC1wYXJ0ZW5haXJlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-partenaire/projet-partenaire.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/projet/projet-partenaire/projet-partenaire.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProjetPartenaireComponent */

  /***/
  function srcAppModulesProjetProjetPartenaireProjetPartenaireComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetPartenaireComponent", function () {
      return ProjetPartenaireComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetPartenaireComponent =
    /*#__PURE__*/
    function () {
      function ProjetPartenaireComponent() {
        _classCallCheck(this, ProjetPartenaireComponent);
      }

      _createClass(ProjetPartenaireComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetPartenaireComponent;
    }();

    ProjetPartenaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-partenaire',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-partenaire.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-partenaire/projet-partenaire.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-partenaire.component.css */
      "./src/app/modules/projet/projet-partenaire/projet-partenaire.component.css")).default]
    })], ProjetPartenaireComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-statistique/projet-statistique.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/projet/projet-statistique/projet-statistique.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetStatistiqueProjetStatistiqueComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC1zdGF0aXN0aXF1ZS9wcm9qZXQtc3RhdGlzdGlxdWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet-statistique/projet-statistique.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/projet/projet-statistique/projet-statistique.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProjetStatistiqueComponent */

  /***/
  function srcAppModulesProjetProjetStatistiqueProjetStatistiqueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetStatistiqueComponent", function () {
      return ProjetStatistiqueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetStatistiqueComponent =
    /*#__PURE__*/
    function () {
      function ProjetStatistiqueComponent() {
        _classCallCheck(this, ProjetStatistiqueComponent);
      }

      _createClass(ProjetStatistiqueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetStatistiqueComponent;
    }();

    ProjetStatistiqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet-statistique',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet-statistique.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet-statistique/projet-statistique.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet-statistique.component.css */
      "./src/app/modules/projet/projet-statistique/projet-statistique.component.css")).default]
    })], ProjetStatistiqueComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/modules/projet/projet.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjetProjetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamV0L3Byb2pldC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/projet/projet.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/projet/projet.component.ts ***!
    \****************************************************/

  /*! exports provided: ProjetComponent */

  /***/
  function srcAppModulesProjetProjetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetComponent", function () {
      return ProjetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetComponent =
    /*#__PURE__*/
    function () {
      function ProjetComponent() {
        _classCallCheck(this, ProjetComponent);
      }

      _createClass(ProjetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetComponent;
    }();

    ProjetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projet/projet.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projet.component.css */
      "./src/app/modules/projet/projet.component.css")).default]
    })], ProjetComponent);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/projet/projet.module.ts ***!
    \*************************************************/

  /*! exports provided: ProjetModule */

  /***/
  function srcAppModulesProjetProjetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetModule", function () {
      return ProjetModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _my_projet_my_projet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-projet/my-projet.component */
    "./src/app/modules/projet/my-projet/my-projet.component.ts");
    /* harmony import */


    var _projet_create_projet_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projet-create/projet-create.component */
    "./src/app/modules/projet/projet-create/projet-create.component.ts");
    /* harmony import */


    var _projet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projet.component */
    "./src/app/modules/projet/projet.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projet_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projet.routes */
    "./src/app/modules/projet/projet.routes.ts");
    /* harmony import */


    var _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projet-list/projet-list.component */
    "./src/app/modules/projet/projet-list/projet-list.component.ts");
    /* harmony import */


    var _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projet-detail/projet-detail.component */
    "./src/app/modules/projet/projet-detail/projet-detail.component.ts");
    /* harmony import */


    var mydatepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! mydatepicker */
    "./node_modules/mydatepicker/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _add_info_modal_add_info_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-info-modal/add-info-modal.component */
    "./src/app/modules/projet/add-info-modal/add-info-modal.component.ts");
    /* harmony import */


    var _projet_bilan_financier_projet_bilan_financier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projet-bilan-financier/projet-bilan-financier.component */
    "./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.ts");
    /* harmony import */


    var _projet_bilan_realisation_projet_bilan_realisation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projet-bilan-realisation/projet-bilan-realisation.component */
    "./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.ts");
    /* harmony import */


    var _projet_statistique_projet_statistique_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projet-statistique/projet-statistique.component */
    "./src/app/modules/projet/projet-statistique/projet-statistique.component.ts");
    /* harmony import */


    var _projet_maitre_doeuvrage_projet_maitre_doeuvrage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./projet-maitre-doeuvrage/projet-maitre-doeuvrage.component */
    "./src/app/modules/projet/projet-maitre-doeuvrage/projet-maitre-doeuvrage.component.ts");
    /* harmony import */


    var _projet_partenaire_projet_partenaire_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./projet-partenaire/projet-partenaire.component */
    "./src/app/modules/projet/projet-partenaire/projet-partenaire.component.ts");
    /* harmony import */


    var src_app_shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/shared-modules/shared-modules.module */
    "./src/app/shared-modules/shared-modules.module.ts");
    /* harmony import */


    var _my_projet_create_my_projet_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./my-projet-create/my-projet-create.component */
    "./src/app/modules/projet/my-projet-create/my-projet-create.component.ts");
    /* harmony import */


    var _projet_edit_projet_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./projet-edit/projet-edit.component */
    "./src/app/modules/projet/projet-edit/projet-edit.component.ts");
    /* harmony import */


    var _projet_maitre_doeuvre_projet_maitre_doeuvre_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./projet-maitre-doeuvre/projet-maitre-doeuvre.component */
    "./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.ts");
    /* harmony import */


    var _mes_soustraitrants_mes_soustraitrants_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./mes-soustraitrants/mes-soustraitrants.component */
    "./src/app/modules/projet/mes-soustraitrants/mes-soustraitrants.component.ts");
    /* harmony import */


    var _mes_partenaires_mes_partenaires_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./mes-partenaires/mes-partenaires.component */
    "./src/app/modules/projet/mes-partenaires/mes-partenaires.component.ts");
    /* harmony import */


    var _projet_etapes_projet_etapes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./projet-etapes/projet-etapes.component */
    "./src/app/modules/projet/projet-etapes/projet-etapes.component.ts");
    /* harmony import */


    var _projet_create_maitredoeuvre_projet_create_maitredoeuvre_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./projet-create-maitredoeuvre/projet-create-maitredoeuvre.component */
    "./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.ts");
    /* harmony import */


    var _projet_bilan_finance_detail_projet_bilan_finance_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./projet-bilan-finance-detail/projet-bilan-finance-detail.component */
    "./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.ts");
    /* harmony import */


    var _projet_etape_create_projet_etape_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./projet-etape-create/projet-etape-create.component */
    "./src/app/modules/projet/projet-etape-create/projet-etape-create.component.ts");
    /* harmony import */


    var _projet_etape_detail_projet_etape_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./projet-etape-detail/projet-etape-detail.component */
    "./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.ts");
    /* harmony import */


    var ng2_date_picker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng2-date-picker */
    "./node_modules/ng2-date-picker/fesm2015/ng2-date-picker.js");

    var ProjetModule = function ProjetModule() {
      _classCallCheck(this, ProjetModule);
    };

    ProjetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_my_projet_my_projet_component__WEBPACK_IMPORTED_MODULE_3__["MyProjetComponent"], _projet_create_projet_create_component__WEBPACK_IMPORTED_MODULE_4__["ProjetCreateComponent"], _projet_component__WEBPACK_IMPORTED_MODULE_5__["ProjetComponent"], _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjetListComponent"], _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProjetDetailComponent"], _add_info_modal_add_info_modal_component__WEBPACK_IMPORTED_MODULE_12__["AddInfoModalComponent"], _projet_bilan_financier_projet_bilan_financier_component__WEBPACK_IMPORTED_MODULE_13__["ProjetBilanFinancierComponent"], _projet_bilan_realisation_projet_bilan_realisation_component__WEBPACK_IMPORTED_MODULE_14__["ProjetBilanRealisationComponent"], _projet_statistique_projet_statistique_component__WEBPACK_IMPORTED_MODULE_15__["ProjetStatistiqueComponent"], _projet_maitre_doeuvrage_projet_maitre_doeuvrage_component__WEBPACK_IMPORTED_MODULE_16__["ProjetMaitreDoeuvrageComponent"], _projet_partenaire_projet_partenaire_component__WEBPACK_IMPORTED_MODULE_17__["ProjetPartenaireComponent"], _my_projet_create_my_projet_create_component__WEBPACK_IMPORTED_MODULE_19__["MyProjetCreateComponent"], _projet_edit_projet_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProjetEditComponent"], _projet_maitre_doeuvre_projet_maitre_doeuvre_component__WEBPACK_IMPORTED_MODULE_21__["ProjetMaitreDoeuvreComponent"], _mes_soustraitrants_mes_soustraitrants_component__WEBPACK_IMPORTED_MODULE_22__["MesSoustraitrantsComponent"], _mes_partenaires_mes_partenaires_component__WEBPACK_IMPORTED_MODULE_23__["MesPartenairesComponent"], _projet_etapes_projet_etapes_component__WEBPACK_IMPORTED_MODULE_24__["ProjetEtapesComponent"], _projet_create_maitredoeuvre_projet_create_maitredoeuvre_component__WEBPACK_IMPORTED_MODULE_25__["ProjetCreateMaitredoeuvreComponent"], _projet_bilan_finance_detail_projet_bilan_finance_detail_component__WEBPACK_IMPORTED_MODULE_26__["ProjetBilanFinanceDetailComponent"], _projet_etape_create_projet_etape_create_component__WEBPACK_IMPORTED_MODULE_27__["ProjetEtapeCreateComponent"], _projet_etape_detail_projet_etape_detail_component__WEBPACK_IMPORTED_MODULE_28__["ProjetEtapeDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_18__["SharedModulesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], mydatepicker__WEBPACK_IMPORTED_MODULE_10__["MyDatePickerModule"], ng2_date_picker__WEBPACK_IMPORTED_MODULE_29__["DpDatePickerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_projet_routes__WEBPACK_IMPORTED_MODULE_7__["projetRoutes"])]
    })], ProjetModule);
    /***/
  },

  /***/
  "./src/app/modules/projet/projet.routes.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/projet/projet.routes.ts ***!
    \*************************************************/

  /*! exports provided: projetRoutes */

  /***/
  function srcAppModulesProjetProjetRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projetRoutes", function () {
      return projetRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _projet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./projet.component */
    "./src/app/modules/projet/projet.component.ts");
    /* harmony import */


    var _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./projet-list/projet-list.component */
    "./src/app/modules/projet/projet-list/projet-list.component.ts");
    /* harmony import */


    var _projet_create_projet_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projet-create/projet-create.component */
    "./src/app/modules/projet/projet-create/projet-create.component.ts");
    /* harmony import */


    var _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projet-detail/projet-detail.component */
    "./src/app/modules/projet/projet-detail/projet-detail.component.ts");
    /* harmony import */


    var src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/auth-guard */
    "./src/app/core/auth-guard.ts");
    /* harmony import */


    var _projet_bilan_financier_projet_bilan_financier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projet-bilan-financier/projet-bilan-financier.component */
    "./src/app/modules/projet/projet-bilan-financier/projet-bilan-financier.component.ts");
    /* harmony import */


    var _projet_bilan_realisation_projet_bilan_realisation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projet-bilan-realisation/projet-bilan-realisation.component */
    "./src/app/modules/projet/projet-bilan-realisation/projet-bilan-realisation.component.ts");
    /* harmony import */


    var _projet_statistique_projet_statistique_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projet-statistique/projet-statistique.component */
    "./src/app/modules/projet/projet-statistique/projet-statistique.component.ts");
    /* harmony import */


    var _my_projet_my_projet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./my-projet/my-projet.component */
    "./src/app/modules/projet/my-projet/my-projet.component.ts");
    /* harmony import */


    var _my_projet_create_my_projet_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./my-projet-create/my-projet-create.component */
    "./src/app/modules/projet/my-projet-create/my-projet-create.component.ts");
    /* harmony import */


    var _projet_edit_projet_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./projet-edit/projet-edit.component */
    "./src/app/modules/projet/projet-edit/projet-edit.component.ts");
    /* harmony import */


    var _projet_partenaire_projet_partenaire_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./projet-partenaire/projet-partenaire.component */
    "./src/app/modules/projet/projet-partenaire/projet-partenaire.component.ts");
    /* harmony import */


    var _projet_maitre_doeuvre_projet_maitre_doeuvre_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projet-maitre-doeuvre/projet-maitre-doeuvre.component */
    "./src/app/modules/projet/projet-maitre-doeuvre/projet-maitre-doeuvre.component.ts");
    /* harmony import */


    var _projet_etapes_projet_etapes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projet-etapes/projet-etapes.component */
    "./src/app/modules/projet/projet-etapes/projet-etapes.component.ts");
    /* harmony import */


    var _mes_partenaires_mes_partenaires_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./mes-partenaires/mes-partenaires.component */
    "./src/app/modules/projet/mes-partenaires/mes-partenaires.component.ts");
    /* harmony import */


    var _projet_create_maitredoeuvre_projet_create_maitredoeuvre_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./projet-create-maitredoeuvre/projet-create-maitredoeuvre.component */
    "./src/app/modules/projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component.ts");
    /* harmony import */


    var _projet_bilan_finance_detail_projet_bilan_finance_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./projet-bilan-finance-detail/projet-bilan-finance-detail.component */
    "./src/app/modules/projet/projet-bilan-finance-detail/projet-bilan-finance-detail.component.ts");
    /* harmony import */


    var _projet_etape_create_projet_etape_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./projet-etape-create/projet-etape-create.component */
    "./src/app/modules/projet/projet-etape-create/projet-etape-create.component.ts");
    /* harmony import */


    var _projet_etape_detail_projet_etape_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./projet-etape-detail/projet-etape-detail.component */
    "./src/app/modules/projet/projet-etape-detail/projet-etape-detail.component.ts");

    var projetRoutes = [{
      path: '',
      component: _projet_component__WEBPACK_IMPORTED_MODULE_1__["ProjetComponent"],
      children: [{
        path: 'list',
        component: _projet_list_projet_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjetListComponent"]
      }, {
        path: 'create',
        component: _projet_create_projet_create_component__WEBPACK_IMPORTED_MODULE_3__["ProjetCreateComponent"]
      }, {
        path: 'finance/:slug',
        component: _projet_bilan_financier_projet_bilan_financier_component__WEBPACK_IMPORTED_MODULE_6__["ProjetBilanFinancierComponent"]
      }, {
        path: 'finance/detail/:slug',
        component: _projet_bilan_finance_detail_projet_bilan_finance_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProjetBilanFinanceDetailComponent"]
      }, {
        path: 'realisation/:slug',
        component: _projet_bilan_realisation_projet_bilan_realisation_component__WEBPACK_IMPORTED_MODULE_7__["ProjetBilanRealisationComponent"]
      }, {
        path: 'statistique/:slug',
        component: _projet_statistique_projet_statistique_component__WEBPACK_IMPORTED_MODULE_8__["ProjetStatistiqueComponent"]
      }, {
        path: 'partenaire/:slug',
        component: _projet_partenaire_projet_partenaire_component__WEBPACK_IMPORTED_MODULE_12__["ProjetPartenaireComponent"]
      }, {
        path: 'enterprise/:slug',
        component: _projet_maitre_doeuvre_projet_maitre_doeuvre_component__WEBPACK_IMPORTED_MODULE_13__["ProjetMaitreDoeuvreComponent"]
      }, {
        path: 'etapes/:slug',
        component: _projet_etapes_projet_etapes_component__WEBPACK_IMPORTED_MODULE_14__["ProjetEtapesComponent"]
      }, {
        path: 'etapes/create/:slug',
        component: _projet_etape_create_projet_etape_create_component__WEBPACK_IMPORTED_MODULE_18__["ProjetEtapeCreateComponent"]
      }, {
        path: 'etapes/detail/:slug',
        component: _projet_etape_detail_projet_etape_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProjetEtapeDetailComponent"]
      }, {
        path: 'edit/:slug',
        component: _projet_edit_projet_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProjetEditComponent"]
      }, {
        path: 'my-project',
        component: _my_projet_my_projet_component__WEBPACK_IMPORTED_MODULE_9__["MyProjetComponent"]
      }, {
        path: 'mes-partenaires/:slug',
        component: _mes_partenaires_mes_partenaires_component__WEBPACK_IMPORTED_MODULE_15__["MesPartenairesComponent"]
      }, {
        path: 'maitredoeuvre/create/:slug',
        component: _projet_create_maitredoeuvre_projet_create_maitredoeuvre_component__WEBPACK_IMPORTED_MODULE_16__["ProjetCreateMaitredoeuvreComponent"]
      }, {
        path: 'maitredoeuvre/:slug',
        component: _projet_maitre_doeuvre_projet_maitre_doeuvre_component__WEBPACK_IMPORTED_MODULE_13__["ProjetMaitreDoeuvreComponent"]
      }, {
        path: 'mes-soustraittants/:slug',
        component: _my_projet_my_projet_component__WEBPACK_IMPORTED_MODULE_9__["MyProjetComponent"]
      }, {
        path: 'my-project',
        component: _my_projet_my_projet_component__WEBPACK_IMPORTED_MODULE_9__["MyProjetComponent"]
      }, {
        path: 'my-project-create',
        component: _my_projet_create_my_projet_create_component__WEBPACK_IMPORTED_MODULE_10__["MyProjetCreateComponent"]
      }, {
        path: ':slug',
        component: _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProjetDetailComponent"]
      }],
      canActivate: [src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];
    /***/
  }
}]);
//# sourceMappingURL=modules-projet-projet-module-es5.js.map