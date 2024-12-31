"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8193],{

/***/ 8193:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_searchbar: () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dir-babeabeb.js */ 5083);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 3992);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #0054e9);--clear-button-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;min-height:60px;contain:content}.searchbar-input-container.sc-ion-searchbar-ios{min-height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:1.375rem;height:100%;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:6px;padding-bottom:6px;height:100%;font-size:1.0625rem;font-weight:400;contain:strict}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.75rem;padding-inline-start:1.75rem;-webkit-padding-end:1.75rem;padding-inline-end:1.75rem}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:1.875rem;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:1.125rem;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:17px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.875rem;padding-inline-start:1.875rem}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;min-height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
const IonSearchbarIosStyle0 = searchbarIosCss;
const searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, var(--ion-text-color-step-100, #1a1a1a));--clear-button-color:initial;--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:1.3125rem;height:1.3125rem}.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.5em}.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:9px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:3.4375rem;padding-inline-start:3.4375rem;-webkit-padding-end:3.4375rem;padding-inline-end:3.4375rem;padding-top:0.375rem;padding-bottom:0.375rem;background-position:left 8px center;height:auto;font-size:1rem;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}@supports selector(:dir(rtl)){.searchbar-input.sc-ion-searchbar-md:dir(rtl){background-position:right 8px center}}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:1.375rem;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}";
const IonSearchbarMdStyle0 = searchbarMdCss;
const Searchbar = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInput = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInput", 7);
    this.ionChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionCancel = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionCancel", 7);
    this.ionClear = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionClear", 7);
    this.ionBlur = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionFocus = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionStyle = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.isCancelVisible = false;
    this.shouldAlignLeft = true;
    this.inputId = `ion-searchbar-${searchbarIds++}`;
    this.inheritedAttributes = {};
    /**
     * Clears the input field and triggers the control change.
     */
    this.onClearInput = /*#__PURE__*/function () {
      var _ref = (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldFocus) {
        _this.ionClear.emit();
        return new Promise(resolve => {
          // setTimeout() fixes https://github.com/ionic-team/ionic-framework/issues/7527
          // wait for 4 frames
          setTimeout(() => {
            const value = _this.getValue();
            if (value !== '') {
              _this.value = '';
              _this.emitInputChange();
              /**
               * When tapping clear button
               * ensure input is focused after
               * clearing input so users
               * can quickly start typing.
               */
              if (shouldFocus && !_this.focused) {
                _this.setFocus();
                /**
                 * The setFocus call above will clear focusedValue,
                 * but ionChange will never have gotten a chance to
                 * fire. Manually revert focusedValue so onBlur can
                 * compare against what was in the box before the clear.
                 */
                _this.focusedValue = value;
              }
            }
            resolve();
          }, 16 * 4);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    this.onCancelSearchbar = /*#__PURE__*/function () {
      var _ref2 = (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        _this.ionCancel.emit();
        // get cached values before clearing the input
        const value = _this.getValue();
        const focused = _this.focused;
        yield _this.onClearInput();
        /**
         * If there used to be something in the box, and we weren't focused
         * beforehand (meaning no blur fired that would already handle this),
         * manually fire ionChange.
         */
        if (value && !focused) {
          _this.emitValueChange(ev);
        }
        if (_this.nativeInput) {
          _this.nativeInput.blur();
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * Update the Searchbar input value when the input changes
     */
    this.onInput = ev => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
      }
      this.emitInputChange(ev);
    };
    this.onChange = ev => {
      this.emitValueChange(ev);
    };
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    this.onBlur = ev => {
      this.focused = false;
      this.ionBlur.emit();
      this.positionElements();
      if (this.focusedValue !== this.value) {
        this.emitValueChange(ev);
      }
      this.focusedValue = undefined;
    };
    /**
     * Sets the Searchbar to focused and active on input focus.
     */
    this.onFocus = () => {
      this.focused = true;
      this.focusedValue = this.value;
      this.ionFocus.emit();
      this.positionElements();
    };
    this.focused = false;
    this.noAnimate = true;
    this.color = undefined;
    this.animated = false;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.cancelButtonIcon = _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__.c.get('backButtonIcon', _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_5__.a);
    this.cancelButtonText = 'Cancel';
    this.clearIcon = undefined;
    this.debounce = undefined;
    this.disabled = false;
    this.inputmode = undefined;
    this.enterkeyhint = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.name = this.inputId;
    this.placeholder = 'Search';
    this.searchIcon = undefined;
    this.showCancelButton = 'never';
    this.showClearButton = 'always';
    this.spellcheck = false;
    this.type = 'search';
    this.value = '';
  }
  /**
   * lang and dir are globally enumerated attributes.
   * As a result, creating these as properties
   * can have unintended side effects. Instead, we
   * listen for attribute changes and inherit them
   * to the inner `<input>` element.
   */
  onLangChanged(newValue) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      lang: newValue
    });
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.j)(this);
  }
  onDirChanged(newValue) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      dir: newValue
    });
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.j)(this);
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    /**
     * If debounce is undefined, we have to manually revert the ionInput emitter in case
     * debounce used to be set to a number. Otherwise, the event would stay debounced.
     */
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.e)(ionInput, debounce);
  }
  valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
  }
  showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.j)(this);
    });
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el, ['lang', 'dir']));
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.positionElements();
    this.debounceChanged();
    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }
  emitStyle() {
    this.ionStyle.emit({
      searchbar: true
    });
  }
  /**
   * Sets focus on the native `input` in `ion-searchbar`. Use this method instead of the global
   * `input.focus()`.
   *
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   *
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   *
   * See [managing focus](/docs/developing/managing-focus) for more information.
   */
  setFocus() {
    var _this2 = this;
    return (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.nativeInput) {
        _this2.nativeInput.focus();
      }
    })();
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    var _this3 = this;
    return (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * If this gets called in certain early lifecycle hooks (ex: Vue onMounted),
       * nativeInput won't be defined yet with the custom elements build, so wait for it to load in.
       */
      if (!_this3.nativeInput) {
        yield new Promise(resolve => (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.c)(_this3.el, resolve));
      }
      return Promise.resolve(_this3.nativeInput);
    })();
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    // Emitting a value change should update the internal state for tracking the focused value
    this.focusedValue = newValue;
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const {
      value
    } = this;
    this.ionInput.emit({
      value,
      event
    });
  }
  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__.b)(this);
    const shouldAlignLeft = !this.animated || value.trim() !== '' || !!this.focused;
    this.shouldAlignLeft = shouldAlignLeft;
    if (mode !== 'ios') {
      return;
    }
    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
    if (this.animated) {
      this.positionCancelButton();
    }
  }
  /**
   * Positions the input placeholder
   */
  positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el);
    const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
    if (this.shouldAlignLeft) {
      inputEl.removeAttribute('style');
      iconEl.removeAttribute('style');
    } else {
      // Create a dummy span to get the placeholder width
      const doc = document;
      const tempSpan = doc.createElement('span');
      tempSpan.innerText = this.placeholder || '';
      doc.body.appendChild(tempSpan);
      // Get the width of the span then remove it
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();
        // Calculate the input padding
        const inputLeft = 'calc(50% - ' + textWidth / 2 + 'px)';
        // Calculate the icon margin
        /**
         * We take the icon width to account
         * for any text scales applied to the icon
         * such as Dynamic Type on iOS as well as 8px
         * of padding.
         */
        const iconLeft = 'calc(50% - ' + (textWidth / 2 + iconEl.clientWidth + 8) + 'px)';
        // Set the input padding start and icon margin start
        if (rtl) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        } else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }
  /**
   * Show the iOS Cancel button on focus, hide it offscreen otherwise
   */
  positionCancelButton() {
    const rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el);
    const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
    const shouldShowCancel = this.shouldShowCancelButton();
    if (cancelButton !== null && shouldShowCancel !== this.isCancelVisible) {
      const cancelStyle = cancelButton.style;
      this.isCancelVisible = shouldShowCancel;
      if (shouldShowCancel) {
        if (rtl) {
          cancelStyle.marginLeft = '0';
        } else {
          cancelStyle.marginRight = '0';
        }
      } else {
        const offset = cancelButton.offsetWidth;
        if (offset > 0) {
          if (rtl) {
            cancelStyle.marginLeft = -offset + 'px';
          } else {
            cancelStyle.marginRight = -offset + 'px';
          }
        }
      }
    }
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue() !== '';
  }
  /**
   * Determines whether or not the cancel button should be visible onscreen.
   * Cancel button should be shown if one of two conditions applies:
   * 1. `showCancelButton` is set to `always`.
   * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowCancelButton() {
    if (this.showCancelButton === 'never' || this.showCancelButton === 'focus' && !this.focused) {
      return false;
    }
    return true;
  }
  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowClearButton() {
    if (this.showClearButton === 'never' || this.showClearButton === 'focus' && !this.focused) {
      return false;
    }
    return true;
  }
  render() {
    const {
      cancelButtonText,
      autocapitalize
    } = this;
    const animated = this.animated && _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__.c.getBoolean('animated', true);
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__.b)(this);
    const clearIcon = this.clearIcon || (mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_5__.b : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_5__.d);
    const searchIcon = this.searchIcon || (mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_5__.s : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_5__.e);
    const shouldShowCancelButton = this.shouldShowCancelButton();
    const cancelButton = this.showCancelButton !== 'never' && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: '0ef595eb1628928d4c7fdb166b8e41768700fa6e',
      "aria-label": cancelButtonText,
      "aria-hidden": shouldShowCancelButton ? undefined : 'true',
      type: "button",
      tabIndex: mode === 'ios' && !shouldShowCancelButton ? -1 : undefined,
      onMouseDown: this.onCancelSearchbar,
      onTouchStart: this.onCancelSearchbar,
      class: "searchbar-cancel-button"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'ea2c9b36d991acf5af7662059cb6b045f683ca94',
      "aria-hidden": "true"
    }, mode === 'md' ? (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      mode: mode,
      icon: this.cancelButtonIcon,
      lazy: false
    }) : cancelButtonText));
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '17d57ece5852d03047e4d53ddad6c9d88a432a00',
      role: "search",
      "aria-disabled": this.disabled ? 'true' : null,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color, {
        [mode]: true,
        'searchbar-animated': animated,
        'searchbar-disabled': this.disabled,
        'searchbar-no-animate': animated && this.noAnimate,
        'searchbar-has-value': this.hasValue(),
        'searchbar-left-aligned': this.shouldAlignLeft,
        'searchbar-has-focus': this.focused,
        'searchbar-should-show-clear': this.shouldShowClearButton(),
        'searchbar-should-show-cancel': this.shouldShowCancelButton()
      })
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'f67c2124e70c24eef0a271516e9c4bdaf7e98ceb',
      class: "searchbar-input-container"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", Object.assign({
      key: '8c7f7ccc6809cca30ccc8c4e98e349d3f916321d',
      "aria-label": "search text",
      disabled: this.disabled,
      ref: el => this.nativeInput = el,
      class: "searchbar-input",
      inputMode: this.inputmode,
      enterKeyHint: this.enterkeyhint,
      name: this.name,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      minLength: this.minlength,
      maxLength: this.maxlength,
      placeholder: this.placeholder,
      type: this.type,
      value: this.getValue(),
      autoCapitalize: autocapitalize === 'default' ? undefined : autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      spellcheck: this.spellcheck
    }, this.inheritedAttributes)), mode === 'md' && cancelButton, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      key: 'f06524d3163b3883bbde937862aa1e0e8f49f6e1',
      "aria-hidden": "true",
      mode: mode,
      icon: searchIcon,
      lazy: false,
      class: "searchbar-search-icon"
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: '9f7ba2bec93412ecb674b197be13db1de308bb57',
      "aria-label": "reset",
      type: "button",
      "no-blur": true,
      class: "searchbar-clear-button",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      },
      onClick: () => this.onClearInput(true)
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      key: '19fc3dbc722acc47ff7eb3c94ad4de8aed38dff4',
      "aria-hidden": "true",
      mode: mode,
      icon: clearIcon,
      lazy: false,
      class: "searchbar-clear-icon"
    }))), mode === 'ios' && cancelButton);
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "lang": ["onLangChanged"],
      "dir": ["onDirChanged"],
      "debounce": ["debounceChanged"],
      "value": ["valueChanged"],
      "showCancelButton": ["showCancelButtonChanged"]
    };
  }
};
let searchbarIds = 0;
Searchbar.style = {
  ios: IonSearchbarIosStyle0,
  md: IonSearchbarMdStyle0
};


/***/ })

}]);