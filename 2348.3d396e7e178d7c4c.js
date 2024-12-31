"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2348],{

/***/ 2348:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_textarea: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _notch_controller_55b09e11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notch-controller-55b09e11.js */ 9001);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _input_utils_09c71bc7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.utils-09c71bc7.js */ 243);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-a5d50daf.js */ 8476);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 4929);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */








const textareaIosCss = ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0;--padding-end:0;--padding-bottom:8px;--padding-start:0;--border-radius:0;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.textarea-label-placement-floating.sc-ion-textarea-ios-h,.textarea-label-placement-stacked.sc-ion-textarea-ios-h{--padding-top:0px;min-height:56px}[cols].sc-ion-textarea-ios-h:not([auto-grow]){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.ion-color.sc-ion-textarea-ios-h{--highlight-color-focused:var(--ion-color-base);background:initial}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item[slot=start].sc-ion-textarea-ios-h,ion-item [slot=start].sc-ion-textarea-ios-h,ion-item[slot=end].sc-ion-textarea-ios-h,ion-item [slot=end].sc-ion-textarea-ios-h{width:auto}.native-textarea.sc-ion-textarea-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;white-space:pre-wrap;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.cloned-input.sc-ion-textarea-ios{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-textarea-ios{inset-inline-start:0}.cloned-input.sc-ion-textarea-ios:disabled{opacity:1}[auto-grow].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{height:100%}[auto-grow].sc-ion-textarea-ios-h .native-textarea.sc-ion-textarea-ios{overflow:hidden}.textarea-wrapper.sc-ion-textarea-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:0px;padding-bottom:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:start;align-items:flex-start;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-textarea-ios{position:relative;width:100%;height:100%}.has-focus.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{caret-color:var(--highlight-color)}.native-wrapper.sc-ion-textarea-ios textarea.sc-ion-textarea-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.native-wrapper.sc-ion-textarea-ios{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;grid-auto-rows:100%}.native-wrapper.sc-ion-textarea-ios::after{white-space:pre-wrap;content:attr(data-replicated-value) \" \";visibility:hidden}.native-wrapper.sc-ion-textarea-ios::after{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.textarea-wrapper-inner.sc-ion-textarea-ios{display:-ms-flexbox;display:flex;width:100%;min-height:inherit}.ion-touched.ion-invalid.sc-ion-textarea-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-textarea-ios-h{--highlight-color:var(--highlight-color-valid)}.textarea-bottom.sc-ion-textarea-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-textarea-ios-h,.ion-touched.ion-invalid.sc-ion-textarea-ios-h{--border-color:var(--highlight-color)}.textarea-bottom.sc-ion-textarea-ios .error-text.sc-ion-textarea-ios{display:none;color:var(--highlight-color-invalid)}.textarea-bottom.sc-ion-textarea-ios .helper-text.sc-ion-textarea-ios{display:block;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.ion-touched.ion-invalid.sc-ion-textarea-ios-h .textarea-bottom.sc-ion-textarea-ios .error-text.sc-ion-textarea-ios{display:block}.ion-touched.ion-invalid.sc-ion-textarea-ios-h .textarea-bottom.sc-ion-textarea-ios .helper-text.sc-ion-textarea-ios{display:none}.textarea-bottom.sc-ion-textarea-ios .counter.sc-ion-textarea-ios{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.label-text-wrapper.sc-ion-textarea-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-textarea-ios,.sc-ion-textarea-ios-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-textarea-ios,.textarea-outline-notch-hidden.sc-ion-textarea-ios{display:none}.textarea-wrapper.sc-ion-textarea-ios textarea.sc-ion-textarea-ios{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.textarea-label-placement-start.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:row;flex-direction:row}.textarea-label-placement-start.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-end.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-label-placement-end.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-ios-h .label-text.sc-ion-textarea-ios{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.textarea-label-placement-stacked.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:left top;transform-origin:left top;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;max-width:100%;z-index:2}[dir=rtl].sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-label-placement-stacked.sc-ion-textarea-ios-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-label-placement-stacked.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-ios-h .native-wrapper.sc-ion-textarea-ios::after,.textarea-label-placement-floating[auto-grow].sc-ion-textarea-ios-h .native-wrapper.sc-ion-textarea-ios::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:8px;margin-bottom:0px}.sc-ion-textarea-ios-h.textarea-label-placement-stacked.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-stacked .sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-stacked.sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-stacked .sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-floating.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-floating .sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-floating.sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-floating .sc-ion-textarea-ios-s>[slot=end]{margin-top:8px}.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{opacity:0}.has-focus.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.has-value.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{opacity:1}.label-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.start-slot-wrapper.sc-ion-textarea-ios,.end-slot-wrapper.sc-ion-textarea-ios{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:start}.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-s>[slot=end]{margin-top:0}.sc-ion-textarea-ios-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-textarea-ios-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-textarea-ios-h{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--padding-top:10px;--padding-end:0px;--padding-bottom:8px;--padding-start:0px;--highlight-height:0px;font-size:inherit}.textarea-disabled.sc-ion-textarea-ios-h{opacity:0.3}.sc-ion-textarea-ios-s>ion-button[slot=start].button-has-icon-only,.sc-ion-textarea-ios-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";
const IonTextareaIosStyle0 = textareaIosCss;
const textareaMdCss = ".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0;--padding-end:0;--padding-bottom:8px;--padding-start:0;--border-radius:0;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.textarea-label-placement-floating.sc-ion-textarea-md-h,.textarea-label-placement-stacked.sc-ion-textarea-md-h{--padding-top:0px;min-height:56px}[cols].sc-ion-textarea-md-h:not([auto-grow]){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.ion-color.sc-ion-textarea-md-h{--highlight-color-focused:var(--ion-color-base);background:initial}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item[slot=start].sc-ion-textarea-md-h,ion-item [slot=start].sc-ion-textarea-md-h,ion-item[slot=end].sc-ion-textarea-md-h,ion-item [slot=end].sc-ion-textarea-md-h{width:auto}.native-textarea.sc-ion-textarea-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;white-space:pre-wrap;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.cloned-input.sc-ion-textarea-md{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-textarea-md{inset-inline-start:0}.cloned-input.sc-ion-textarea-md:disabled{opacity:1}[auto-grow].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{height:100%}[auto-grow].sc-ion-textarea-md-h .native-textarea.sc-ion-textarea-md{overflow:hidden}.textarea-wrapper.sc-ion-textarea-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:0px;padding-bottom:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:start;align-items:flex-start;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-textarea-md{position:relative;width:100%;height:100%}.has-focus.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{caret-color:var(--highlight-color)}.native-wrapper.sc-ion-textarea-md textarea.sc-ion-textarea-md{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.native-wrapper.sc-ion-textarea-md{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;grid-auto-rows:100%}.native-wrapper.sc-ion-textarea-md::after{white-space:pre-wrap;content:attr(data-replicated-value) \" \";visibility:hidden}.native-wrapper.sc-ion-textarea-md::after{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.textarea-wrapper-inner.sc-ion-textarea-md{display:-ms-flexbox;display:flex;width:100%;min-height:inherit}.ion-touched.ion-invalid.sc-ion-textarea-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-textarea-md-h{--highlight-color:var(--highlight-color-valid)}.textarea-bottom.sc-ion-textarea-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-textarea-md-h,.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}.textarea-bottom.sc-ion-textarea-md .error-text.sc-ion-textarea-md{display:none;color:var(--highlight-color-invalid)}.textarea-bottom.sc-ion-textarea-md .helper-text.sc-ion-textarea-md{display:block;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.ion-touched.ion-invalid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md .error-text.sc-ion-textarea-md{display:block}.ion-touched.ion-invalid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md .helper-text.sc-ion-textarea-md{display:none}.textarea-bottom.sc-ion-textarea-md .counter.sc-ion-textarea-md{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.label-text-wrapper.sc-ion-textarea-md{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-textarea-md,.sc-ion-textarea-md-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-textarea-md,.textarea-outline-notch-hidden.sc-ion-textarea-md{display:none}.textarea-wrapper.sc-ion-textarea-md textarea.sc-ion-textarea-md{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.textarea-label-placement-start.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:row;flex-direction:row}.textarea-label-placement-start.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-end.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-label-placement-end.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-md-h .label-text.sc-ion-textarea-md{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.textarea-label-placement-stacked.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:left top;transform-origin:left top;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;max-width:100%;z-index:2}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-label-placement-stacked.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-label-placement-stacked.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after,.textarea-label-placement-floating[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:8px;margin-bottom:0px}.sc-ion-textarea-md-h.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=end]{margin-top:8px}.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{opacity:0}.has-focus.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.has-value.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{opacity:1}.label-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.start-slot-wrapper.sc-ion-textarea-md,.end-slot-wrapper.sc-ion-textarea-md{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:start}.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-s>[slot=end]{margin-top:0}.sc-ion-textarea-md-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-textarea-md-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.textarea-fill-solid.sc-ion-textarea-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-bottom:var(--border-width) var(--border-style) var(--border-color)}.has-focus.textarea-fill-solid.ion-valid.sc-ion-textarea-md-h,.textarea-fill-solid.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md{border-top:none}@media (any-hover: hover){.textarea-fill-solid.sc-ion-textarea-md-h:hover{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.textarea-fill-solid.has-focus.sc-ion-textarea-md-h{--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}.label-floating.textarea-fill-solid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{max-width:calc(100% / 0.75)}.textarea-fill-outline.sc-ion-textarea-md-h{--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.textarea-fill-outline.textarea-shape-round.sc-ion-textarea-md-h{--border-radius:28px;--padding-start:32px;--padding-end:32px}.has-focus.textarea-fill-outline.ion-valid.sc-ion-textarea-md-h,.textarea-fill-outline.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}@media (any-hover: hover){.textarea-fill-outline.sc-ion-textarea-md-h:hover{--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.textarea-fill-outline.has-focus.sc-ion-textarea-md-h{--border-width:var(--highlight-height);--border-color:var(--highlight-color)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md{border-top:none}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-bottom:none}.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:left top;transform-origin:left top;position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-fill-outline.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{position:relative}.label-floating.textarea-fill-outline.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc(\n    (100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75\n  )}.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after,.textarea-fill-outline.textarea-label-placement-floating[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:12px;margin-bottom:0px}.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=end]{margin-top:12px}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-container.sc-ion-textarea-md{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{pointer-events:none}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md{max-width:calc(100% - var(--padding-start) - var(--padding-end))}.textarea-fill-outline.sc-ion-textarea-md-h .notch-spacer.sc-ion-textarea-md{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none;-webkit-box-sizing:content-box;box-sizing:content-box}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius);-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color);width:calc(var(--padding-start) - 4px)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color);border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px;-ms-flex-positive:1;flex-grow:1}.label-floating.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md{border-top:none}.sc-ion-textarea-md-h{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--padding-top:18px;--padding-end:0px;--padding-bottom:8px;--padding-start:0px;--highlight-height:2px;font-size:inherit}.textarea-bottom.sc-ion-textarea-md .counter.sc-ion-textarea-md{letter-spacing:0.0333333333em}.textarea-label-placement-floating.has-focus.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-stacked.has-focus.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{color:var(--highlight-color)}.has-focus.textarea-label-placement-floating.ion-valid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.ion-touched.ion-invalid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.has-focus.textarea-label-placement-stacked.ion-valid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-stacked.ion-touched.ion-invalid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{color:var(--highlight-color)}.textarea-disabled.sc-ion-textarea-md-h{opacity:0.38}.textarea-highlight.sc-ion-textarea-md{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.textarea-highlight.sc-ion-textarea-md{inset-inline-start:0}.has-focus.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{-webkit-transform:scale(1);transform:scale(1)}.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{bottom:0}.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{inset-inline-start:0}.textarea-shape-round.sc-ion-textarea-md-h{--border-radius:16px}.sc-ion-textarea-md-s>ion-button[slot=start].button-has-icon-only,.sc-ion-textarea-md-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";
const IonTextareaMdStyle0 = textareaMdCss;
const Textarea = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionInput = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInput", 7);
    this.ionBlur = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionFocus = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.inputId = `ion-textarea-${textareaIds++}`;
    this.helperTextId = `${this.inputId}-helper-text`;
    this.errorTextId = `${this.inputId}-error-text`;
    /**
     * `true` if the textarea was cleared as a result of the user typing
     * with `clearOnEdit` enabled.
     *
     * Resets when the textarea loses focus.
     */
    this.didTextareaClearOnEdit = false;
    this.inheritedAttributes = {};
    // `Event` type is used instead of `InputEvent`
    // since the types from Stencil are not derived
    // from the element (e.g. textarea and input
    // should be InputEvent, but all other elements
    // should be Event).
    this.onInput = ev => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.emitInputChange(ev);
    };
    this.onChange = ev => {
      this.emitValueChange(ev);
    };
    this.onFocus = ev => {
      this.hasFocus = true;
      this.focusedValue = this.value;
      this.ionFocus.emit(ev);
    };
    this.onBlur = ev => {
      this.hasFocus = false;
      if (this.focusedValue !== this.value) {
        /**
         * Emits the `ionChange` event when the textarea value
         * is different than the value when the textarea was focused.
         */
        this.emitValueChange(ev);
      }
      this.didTextareaClearOnEdit = false;
      this.ionBlur.emit(ev);
    };
    this.onKeyDown = ev => {
      this.checkClearOnEdit(ev);
    };
    this.hasFocus = false;
    this.color = undefined;
    this.autocapitalize = 'none';
    this.autofocus = false;
    this.clearOnEdit = false;
    this.debounce = undefined;
    this.disabled = false;
    this.fill = undefined;
    this.inputmode = undefined;
    this.enterkeyhint = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.name = this.inputId;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.spellcheck = false;
    this.cols = undefined;
    this.rows = undefined;
    this.wrap = undefined;
    this.autoGrow = false;
    this.value = '';
    this.counter = false;
    this.counterFormatter = undefined;
    this.errorText = undefined;
    this.helperText = undefined;
    this.label = undefined;
    this.labelPlacement = 'start';
    this.shape = undefined;
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
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.e)(ionInput, debounce);
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.runAutoGrow();
  }
  connectedCallback() {
    const {
      el
    } = this;
    this.slotMutationController = (0,_input_utils_09c71bc7_js__WEBPACK_IMPORTED_MODULE_4__.c)(el, ['label', 'start', 'end'], () => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.j)(this));
    this.notchController = (0,_notch_controller_55b09e11_js__WEBPACK_IMPORTED_MODULE_2__.c)(el, () => this.notchSpacerEl, () => this.labelSlot);
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: el
      }));
    }
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el
      }));
    }
    if (this.slotMutationController) {
      this.slotMutationController.destroy();
      this.slotMutationController = undefined;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = undefined;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el)), (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el, ['data-form-type', 'title', 'tabindex']));
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.runAutoGrow();
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  /**
   * Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   *
   * See [managing focus](/docs/developing/managing-focus) for more information.
   */
  setFocus() {
    var _this = this;
    return (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.nativeInput) {
        _this.nativeInput.focus();
      }
    })();
  }
  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  getInputElement() {
    var _this2 = this;
    return (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * If this gets called in certain early lifecycle hooks (ex: Vue onMounted),
       * nativeInput won't be defined yet with the custom elements build, so wait for it to load in.
       */
      if (!_this2.nativeInput) {
        yield new Promise(resolve => (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.c)(_this2.el, resolve));
      }
      return Promise.resolve(_this2.nativeInput);
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
  runAutoGrow() {
    if (this.nativeInput && this.autoGrow) {
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        var _a;
        if (this.textareaWrapper) {
          // Replicated value is an attribute to be used in the stylesheet
          // to set the inner contents of a pseudo element.
          this.textareaWrapper.dataset.replicatedValue = (_a = this.value) !== null && _a !== void 0 ? _a : '';
        }
      });
    }
  }
  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */
  checkClearOnEdit(ev) {
    if (!this.clearOnEdit) {
      return;
    }
    /**
     * The following keys do not modify the
     * contents of the input. As a result, pressing
     * them should not edit the textarea.
     *
     * We can't check to see if the value of the textarea
     * was changed because we call checkClearOnEdit
     * in a keydown listener, and the key has not yet
     * been added to the textarea.
     *
     * Unlike ion-input, the "Enter" key does modify the
     * textarea by adding a new line, so "Enter" is not
     * included in the IGNORED_KEYS array.
     */
    const IGNORED_KEYS = ['Tab', 'Shift', 'Meta', 'Alt', 'Control'];
    const pressedIgnoredKey = IGNORED_KEYS.includes(ev.key);
    /**
     * Clear the textarea if the control has not been previously cleared
     * during focus.
     */
    if (!this.didTextareaClearOnEdit && this.hasValue() && !pressedIgnoredKey) {
      this.value = '';
      this.emitInputChange(ev);
    }
    /**
     * Pressing an IGNORED_KEYS first and
     * then an allowed key will cause the input to not
     * be cleared.
     */
    if (!pressedIgnoredKey) {
      this.didTextareaClearOnEdit = true;
    }
  }
  hasValue() {
    return this.getValue() !== '';
  }
  getValue() {
    return this.value || '';
  }
  renderLabel() {
    const {
      label
    } = this;
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel
      }
    }, label === undefined ? (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "label"
    }) : (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "label-text"
    }, label));
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== undefined || this.labelSlot !== null;
  }
  /**
   * Renders the border container when fill="outline".
   */
  renderLabelContainer() {
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__.b)(this);
    const hasOutlineFill = mode === 'md' && this.fill === 'outline';
    if (hasOutlineFill) {
      /**
       * The outline fill has a special outline
       * that appears around the textarea and the label.
       * Certain stacked and floating label placements cause the
       * label to translate up and create a "cut out"
       * inside of that border by using the notch-spacer element.
       */
      return [(0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "textarea-outline-container"
      }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "textarea-outline-start"
      }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: {
          'textarea-outline-notch': true,
          'textarea-outline-notch-hidden': !this.hasLabel
        }
      }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "notch-spacer",
        "aria-hidden": "true",
        ref: el => this.notchSpacerEl = el
      }, this.label)), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "textarea-outline-end"
      })), this.renderLabel()];
    }
    /**
     * If not using the outline style,
     * we can render just the label.
     */
    return this.renderLabel();
  }
  /**
   * Renders the helper text or error text values
   */
  renderHintText() {
    const {
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    return [(0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: helperTextId,
      class: "helper-text"
    }, helperText), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: errorTextId,
      class: "error-text"
    }, errorText)];
  }
  getHintTextID() {
    const {
      el,
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    if (el.classList.contains('ion-touched') && el.classList.contains('ion-invalid') && errorText) {
      return errorTextId;
    }
    if (helperText) {
      return helperTextId;
    }
    return undefined;
  }
  renderCounter() {
    const {
      counter,
      maxlength,
      counterFormatter,
      value
    } = this;
    if (counter !== true || maxlength === undefined) {
      return;
    }
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "counter"
    }, (0,_input_utils_09c71bc7_js__WEBPACK_IMPORTED_MODULE_4__.g)(value, maxlength, counterFormatter));
  }
  /**
   * Responsible for rendering helper text,
   * error text, and counter. This element should only
   * be rendered if hint text is set or counter is enabled.
   */
  renderBottomContent() {
    const {
      counter,
      helperText,
      errorText,
      maxlength
    } = this;
    /**
     * undefined and empty string values should
     * be treated as not having helper/error text.
     */
    const hasHintText = !!helperText || !!errorText;
    const hasCounter = counter === true && maxlength !== undefined;
    if (!hasHintText && !hasCounter) {
      return;
    }
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "textarea-bottom"
    }, this.renderHintText(), this.renderCounter());
  }
  render() {
    const {
      inputId,
      disabled,
      fill,
      shape,
      labelPlacement,
      el,
      hasFocus
    } = this;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_6__.b)(this);
    const value = this.getValue();
    const inItem = (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__.h)('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    const hasValue = this.hasValue();
    const hasStartEndSlots = el.querySelector('[slot="start"], [slot="end"]') !== null;
    /**
     * If the label is stacked, it should always sit above the textarea.
     * For floating labels, the label should move above the textarea if
     * the textarea has a value, is focused, or has anything in either
     * the start or end slot.
     *
     * If there is content in the start slot, the label would overlap
     * it if not forced to float. This is also applied to the end slot
     * because with the default or solid fills, the textarea is not
     * vertically centered in the container, but the label is. This
     * causes the slots and label to appear vertically offset from each
     * other when the label isn't floating above the input. This doesn't
     * apply to the outline fill, but this was not accounted for to keep
     * things consistent.
     *
     * TODO(FW-5592): Remove hasStartEndSlots condition
     */
    const labelShouldFloat = labelPlacement === 'stacked' || labelPlacement === 'floating' && (hasValue || hasFocus || hasStartEndSlots);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: 'd6e25c83d8eab8cb1a5b6ab411c9a13847f69f8d',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.color, {
        [mode]: true,
        'has-value': hasValue,
        'has-focus': hasFocus,
        'label-floating': labelShouldFloat,
        [`textarea-fill-${fill}`]: fill !== undefined,
        [`textarea-shape-${shape}`]: shape !== undefined,
        [`textarea-label-placement-${labelPlacement}`]: true,
        'textarea-disabled': disabled
      })
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      key: 'f840a5be2b776a4b9c18c6da24e0b7d3d4838fee',
      class: "textarea-wrapper",
      htmlFor: inputId
    }, this.renderLabelContainer(), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '979461fc0d4684926d79d75759c63c6867b7622b',
      class: "textarea-wrapper-inner"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '88f0d5d4bac29597cc2588e5b2ed72fb4fbe153d',
      class: "start-slot-wrapper"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '21dcca0e59c1260e3d0d1e126c1c590de15c4bad',
      name: "start"
    })), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '3c48a4bb3d763a389d3429123e7c110064b9b8d4',
      class: "native-wrapper",
      ref: el => this.textareaWrapper = el
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("textarea", Object.assign({
      key: '1550599ad15b3f215c104c014e90711f073ace8b',
      class: "native-textarea",
      ref: el => this.nativeInput = el,
      id: inputId,
      disabled: disabled,
      autoCapitalize: this.autocapitalize,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      minLength: this.minlength,
      maxLength: this.maxlength,
      name: this.name,
      placeholder: this.placeholder || '',
      readOnly: this.readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      cols: this.cols,
      rows: this.rows,
      wrap: this.wrap,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeyDown,
      "aria-describedby": this.getHintTextID(),
      "aria-invalid": this.getHintTextID() === this.errorTextId
    }, this.inheritedAttributes), value)), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '4f01ab4d2994a6de6f49eb9ed2e310d00daf21b2',
      class: "end-slot-wrapper"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '501e288b6807e039972bb4f0b63906114255518a',
      name: "end"
    }))), shouldRenderHighlight && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'd3008eed34494aa9f8e98a28eac3b465dc4c2bd0',
      class: "textarea-highlight"
    })), this.renderBottomContent());
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "value": ["valueChanged"]
    };
  }
};
let textareaIds = 0;
Textarea.style = {
  ios: IonTextareaIosStyle0,
  md: IonTextareaMdStyle0
};


/***/ })

}]);