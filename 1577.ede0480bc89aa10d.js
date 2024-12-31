"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1577],{

/***/ 1577:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;
const Text = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.color = undefined;
  }
  render() {
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: 'e134d70c04344b708a2ecf6253722781ad2ca826',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.color, {
        [mode]: true
      })
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: 'da79c760f7ebbcd007ce110439f05a62cb22eac8'
    }));
  }
};
Text.style = IonTextStyle0;


/***/ })

}]);