"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2560],{

/***/ 2560:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_segment: () => (/* binding */ Segment),
/* harmony export */   ion_segment_button: () => (/* binding */ SegmentButton)
/* harmony export */ });
/* harmony import */ var C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dir-babeabeb.js */ 5083);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const segmentIosCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";
const IonSegmentIosStyle0 = segmentIosCss;
const segmentMdCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";
const IonSegmentMdStyle0 = segmentMdCss;
const Segment = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionSelect = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionSelect", 7);
    this.ionStyle = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.segmentViewEl = null;
    this.onClick = ev => {
      const current = ev.target;
      const previous = this.checked;
      // If the current element is a segment then that means
      // the user tried to swipe to a segment button and
      // click a segment button at the same time so we should
      // not update the checked segment button
      if (current.tagName === 'ION-SEGMENT') {
        return;
      }
      this.value = current.value;
      if (current !== previous) {
        this.emitValueChange();
      }
      if (this.segmentViewEl) {
        this.updateSegmentView();
        if (this.scrollable && previous) {
          this.checkButton(previous, current);
        }
      } else if (this.scrollable || !this.swipeGesture) {
        if (previous) {
          this.checkButton(previous, current);
        } else {
          this.setCheckedClasses();
        }
      }
    };
    this.onSlottedItemsChange = () => {
      /**
       * When the slotted segment buttons change we need to
       * ensure that the new segment buttons are checked if
       * the value matches the segment button value.
       */
      this.valueChanged(this.value);
    };
    this.getSegmentButton = selector => {
      var _a, _b;
      const buttons = this.getButtons().filter(button => !button.disabled);
      const currIndex = buttons.findIndex(button => button === document.activeElement);
      switch (selector) {
        case 'first':
          return buttons[0];
        case 'last':
          return buttons[buttons.length - 1];
        case 'next':
          return (_a = buttons[currIndex + 1]) !== null && _a !== void 0 ? _a : buttons[0];
        case 'previous':
          return (_b = buttons[currIndex - 1]) !== null && _b !== void 0 ? _b : buttons[buttons.length - 1];
        default:
          return null;
      }
    };
    this.activated = false;
    this.color = undefined;
    this.disabled = false;
    this.scrollable = false;
    this.swipeGesture = true;
    this.value = undefined;
    this.selectOnFocus = false;
  }
  colorChanged(value, oldValue) {
    /**
     * If color is set after not having
     * previously been set (or vice versa),
     * we need to emit style so the segment-buttons
     * can apply their color classes properly.
     */
    if (oldValue === undefined && value !== undefined || oldValue !== undefined && value === undefined) {
      this.emitStyle();
    }
  }
  swipeGestureChanged() {
    this.gestureChanged();
  }
  valueChanged(value, oldValue) {
    // Force a value to exist if we're using a segment view
    if (this.segmentViewEl && value === undefined) {
      this.value = this.getButtons()[0].value;
      return;
    }
    if (oldValue !== undefined && value !== undefined) {
      const buttons = this.getButtons();
      const previous = buttons.find(button => button.value === oldValue);
      const current = buttons.find(button => button.value === value);
      if (previous && current) {
        if (!this.segmentViewEl) {
          this.checkButton(previous, current);
        } else if (this.triggerScrollOnValueChange !== false) {
          this.updateSegmentView();
        }
      }
    } else if (value !== undefined && oldValue === undefined && this.segmentViewEl) {
      this.updateSegmentView();
    }
    /**
     * `ionSelect` is emitted every time the value changes (internal or external changes).
     * Used by `ion-segment-button` to determine if the button should be checked.
     */
    this.ionSelect.emit({
      value
    });
    // The scroll listener should handle scrolling the active button into view as needed
    if (!this.segmentViewEl) {
      this.scrollActiveButtonIntoView();
    }
    this.triggerScrollOnValueChange = undefined;
  }
  disabledChanged() {
    this.gestureChanged();
    if (!this.segmentViewEl) {
      const buttons = this.getButtons();
      for (const button of buttons) {
        button.disabled = this.disabled;
      }
    } else {
      this.segmentViewEl.disabled = this.disabled;
    }
  }
  gestureChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.scrollable && !this.disabled && this.swipeGesture);
    }
  }
  connectedCallback() {
    this.emitStyle();
    this.segmentViewEl = this.getSegmentView();
  }
  disconnectedCallback() {
    this.segmentViewEl = null;
  }
  componentWillLoad() {
    this.emitStyle();
  }
  componentDidLoad() {
    var _this = this;
    return (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.setCheckedClasses();
      /**
       * We need to wait for the buttons to all be rendered
       * before we can scroll.
       */
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
        /**
         * When the segment loads for the first
         * time we just want to snap the active button into
         * place instead of scroll. Smooth scrolling should only
         * happen when the user interacts with the segment.
         */
        _this.scrollActiveButtonIntoView(false);
      });
      _this.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-39782642.js */ 8607))).createGesture({
        el: _this.el,
        gestureName: 'segment',
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: ev => _this.onStart(ev),
        onMove: ev => _this.onMove(ev),
        onEnd: ev => _this.onEnd(ev)
      });
      _this.gestureChanged();
      if (_this.disabled) {
        _this.disabledChanged();
      }
      // Update segment view based on the initial value,
      // but do not animate the scroll
      _this.updateSegmentView(false);
    })();
  }
  onStart(detail) {
    this.valueBeforeGesture = this.value;
    this.activate(detail);
  }
  onMove(detail) {
    this.setNextIndex(detail);
  }
  onEnd(detail) {
    this.setActivated(false);
    this.setNextIndex(detail, true);
    detail.event.stopImmediatePropagation();
    const value = this.value;
    if (value !== undefined) {
      if (this.valueBeforeGesture !== value) {
        this.emitValueChange();
        this.updateSegmentView();
      }
    }
    this.valueBeforeGesture = undefined;
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    const {
      value
    } = this;
    this.ionChange.emit({
      value
    });
  }
  getButtons() {
    return Array.from(this.el.querySelectorAll('ion-segment-button'));
  }
  get checked() {
    return this.getButtons().find(button => button.value === this.value);
  }
  /*
   * Activate both the segment and the buttons
   * due to a bug with ::slotted in Safari
   */
  setActivated(activated) {
    const buttons = this.getButtons();
    buttons.forEach(button => {
      button.classList.toggle('segment-button-activated', activated);
    });
    this.activated = activated;
  }
  activate(detail) {
    const clicked = detail.event.target;
    const buttons = this.getButtons();
    const checked = buttons.find(button => button.value === this.value);
    // Make sure we are only checking for activation on a segment button
    // since disabled buttons will get the click on the segment
    if (clicked.tagName !== 'ION-SEGMENT-BUTTON') {
      return;
    }
    // If there are no checked buttons, set the current button to checked
    if (!checked) {
      this.value = clicked.value;
      this.setCheckedClasses();
    }
    // If the gesture began on the clicked button with the indicator
    // then we should activate the indicator
    if (this.value === clicked.value) {
      this.setActivated(true);
    }
  }
  getIndicator(button) {
    const root = button.shadowRoot || button;
    return root.querySelector('.segment-button-indicator');
  }
  checkButton(previous, current) {
    const previousIndicator = this.getIndicator(previous);
    const currentIndicator = this.getIndicator(current);
    if (previousIndicator === null || currentIndicator === null) {
      return;
    }
    const previousClientRect = previousIndicator.getBoundingClientRect();
    const currentClientRect = currentIndicator.getBoundingClientRect();
    const widthDelta = previousClientRect.width / currentClientRect.width;
    const xPosition = previousClientRect.left - currentClientRect.left;
    // Scale the indicator width to match the previous indicator width
    // and translate it on top of the previous indicator
    const transform = `translate3d(${xPosition}px, 0, 0) scaleX(${widthDelta})`;
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
      // Remove the transition before positioning on top of the previous indicator
      currentIndicator.classList.remove('segment-button-indicator-animated');
      currentIndicator.style.setProperty('transform', transform);
      // Force a repaint to ensure the transform happens
      currentIndicator.getBoundingClientRect();
      // Add the transition to move the indicator into place
      currentIndicator.classList.add('segment-button-indicator-animated');
      // Remove the transform to slide the indicator back to the button clicked
      currentIndicator.style.setProperty('transform', '');
      this.scrollActiveButtonIntoView(true);
    });
    this.value = current.value;
    this.setCheckedClasses();
  }
  setCheckedClasses() {
    const buttons = this.getButtons();
    const index = buttons.findIndex(button => button.value === this.value);
    const next = index + 1;
    for (const button of buttons) {
      button.classList.remove('segment-button-after-checked');
    }
    if (next < buttons.length) {
      buttons[next].classList.add('segment-button-after-checked');
    }
  }
  getSegmentView() {
    const buttons = this.getButtons();
    // Get the first button with a contentId
    const firstContentId = buttons.find(button => button.contentId);
    // Get the segment content with an id matching the button's contentId
    const segmentContent = document.querySelector(`ion-segment-content[id="${firstContentId === null || firstContentId === void 0 ? void 0 : firstContentId.contentId}"]`);
    // Return the segment view for that matching segment content
    return segmentContent === null || segmentContent === void 0 ? void 0 : segmentContent.closest('ion-segment-view');
  }
  handleSegmentViewScroll(ev) {
    const {
      scrollRatio,
      isManualScroll
    } = ev.detail;
    if (!isManualScroll) {
      return;
    }
    const dispatchedFrom = ev.target;
    const segmentViewEl = this.segmentViewEl;
    const segmentEl = this.el;
    // Only update the indicator if the event was dispatched from the correct segment view
    if (ev.composedPath().includes(segmentViewEl) || (dispatchedFrom === null || dispatchedFrom === void 0 ? void 0 : dispatchedFrom.contains(segmentEl))) {
      const buttons = this.getButtons();
      // If no buttons are found or there is no value set then do nothing
      if (!buttons.length) return;
      const index = buttons.findIndex(button => button.value === this.value);
      const current = buttons[index];
      const nextIndex = Math.round(scrollRatio * (buttons.length - 1));
      if (this.lastNextIndex === undefined || this.lastNextIndex !== nextIndex) {
        this.lastNextIndex = nextIndex;
        this.triggerScrollOnValueChange = false;
        this.checkButton(current, buttons[nextIndex]);
        this.emitValueChange();
      }
    }
  }
  /**
   * Finds the related segment view and sets its current content
   * based on the selected segment button. This method
   * should be called on initial load of the segment,
   * after the gesture is completed (if dragging between segments)
   * and when a segment button is clicked directly.
   */
  updateSegmentView(smoothScroll = true) {
    const buttons = this.getButtons();
    const button = buttons.find(btn => btn.value === this.value);
    // If the button does not have a contentId then there is
    // no associated segment view to update
    if (!(button === null || button === void 0 ? void 0 : button.contentId)) {
      return;
    }
    const segmentView = this.segmentViewEl;
    if (segmentView) {
      segmentView.setContent(button.contentId, smoothScroll);
    }
  }
  scrollActiveButtonIntoView(smoothScroll = true) {
    const {
      scrollable,
      value,
      el
    } = this;
    if (scrollable) {
      const buttons = this.getButtons();
      const activeButton = buttons.find(button => button.value === value);
      if (activeButton !== undefined) {
        const scrollContainerBox = el.getBoundingClientRect();
        const activeButtonBox = activeButton.getBoundingClientRect();
        /**
         * Subtract the active button x position from the scroll
         * container x position. This will give us the x position
         * of the active button within the scroll container.
         */
        const activeButtonLeft = activeButtonBox.x - scrollContainerBox.x;
        /**
         * If we just used activeButtonLeft, then the active button
         * would be aligned with the left edge of the scroll container.
         * Instead, we want the segment button to be centered. As a result,
         * we subtract half of the scroll container width. This will position
         * the left edge of the active button at the midpoint of the scroll container.
         * We then add half of the active button width. This will position the active
         * button such that the midpoint of the active button is at the midpoint of the
         * scroll container.
         */
        const centeredX = activeButtonLeft - scrollContainerBox.width / 2 + activeButtonBox.width / 2;
        /**
         * newScrollPosition is the absolute scroll position that the
         * container needs to move to in order to center the active button.
         * It is calculated by adding the current scroll position
         * (scrollLeft) to the offset needed to center the button
         * (centeredX).
         */
        const newScrollPosition = el.scrollLeft + centeredX;
        /**
         * We intentionally use scrollTo here instead of scrollIntoView
         * to avoid a WebKit bug where accelerated animations break
         * when using scrollIntoView. Using scrollIntoView will cause the
         * segment container to jump during the transition and then snap into place.
         * This is because scrollIntoView can potentially cause parent element
         * containers to also scroll. scrollTo does not have this same behavior, so
         * we use this API instead.
         *
         * scrollTo is used instead of scrollBy because there is a
         * Webkit bug that causes scrollBy to not work smoothly when
         * the active button is near the edge of the scroll container.
         * This leads to the buttons to jump around during the transition.
         *
         * Note that if there is not enough scrolling space to center the element
         * within the scroll container, the browser will attempt
         * to center by as much as it can.
         */
        el.scrollTo({
          top: 0,
          left: newScrollPosition,
          behavior: smoothScroll ? 'smooth' : 'instant'
        });
      }
    }
  }
  setNextIndex(detail, isEnd = false) {
    const rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el);
    const activated = this.activated;
    const buttons = this.getButtons();
    const index = buttons.findIndex(button => button.value === this.value);
    const previous = buttons[index];
    let current;
    let nextIndex;
    if (index === -1) {
      return;
    }
    // Get the element that the touch event started on in case
    // it was the checked button, then we will move the indicator
    const rect = previous.getBoundingClientRect();
    const left = rect.left;
    const width = rect.width;
    // Get the element that the gesture is on top of based on the currentX of the
    // gesture event and the Y coordinate of the starting element, since the gesture
    // can move up and down off of the segment
    const currentX = detail.currentX;
    const previousY = rect.top + rect.height / 2;
    /**
     * Segment can be used inside the shadow dom
     * so doing document.elementFromPoint would never
     * return a segment button in that instance.
     * We use getRootNode to which will return the parent
     * shadow root if used inside a shadow component and
     * returns document otherwise.
     */
    const root = this.el.getRootNode();
    const nextEl = root.elementFromPoint(currentX, previousY);
    const decreaseIndex = rtl ? currentX > left + width : currentX < left;
    const increaseIndex = rtl ? currentX < left : currentX > left + width;
    // If the indicator is currently activated then we have started the gesture
    // on top of the checked button so we need to slide the indicator
    // by checking the button next to it as we move
    if (activated && !isEnd) {
      // Decrease index, move left in LTR & right in RTL
      if (decreaseIndex) {
        const newIndex = index - 1;
        if (newIndex >= 0) {
          nextIndex = newIndex;
        }
        // Increase index, moves right in LTR & left in RTL
      } else if (increaseIndex) {
        if (activated && !isEnd) {
          const newIndex = index + 1;
          if (newIndex < buttons.length) {
            nextIndex = newIndex;
          }
        }
      }
      if (nextIndex !== undefined && !buttons[nextIndex].disabled) {
        current = buttons[nextIndex];
      }
    }
    // If the indicator is not activated then we will just set the indicator
    // to the element where the gesture ended
    if (!activated && isEnd) {
      current = nextEl;
    }
    if (current != null) {
      /**
       * If current element is ion-segment then that means
       * user tried to select a disabled ion-segment-button,
       * and we should not update the ripple.
       */
      if (current.tagName === 'ION-SEGMENT') {
        return false;
      }
      if (previous !== current) {
        this.checkButton(previous, current);
      }
    }
    return true;
  }
  emitStyle() {
    this.ionStyle.emit({
      segment: true
    });
  }
  onKeyDown(ev) {
    const rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el);
    let keyDownSelectsButton = this.selectOnFocus;
    let current;
    switch (ev.key) {
      case 'ArrowRight':
        ev.preventDefault();
        current = rtl ? this.getSegmentButton('previous') : this.getSegmentButton('next');
        break;
      case 'ArrowLeft':
        ev.preventDefault();
        current = rtl ? this.getSegmentButton('next') : this.getSegmentButton('previous');
        break;
      case 'Home':
        ev.preventDefault();
        current = this.getSegmentButton('first');
        break;
      case 'End':
        ev.preventDefault();
        current = this.getSegmentButton('last');
        break;
      case ' ':
      case 'Enter':
        ev.preventDefault();
        current = document.activeElement;
        keyDownSelectsButton = true;
    }
    if (!current) {
      return;
    }
    if (keyDownSelectsButton) {
      const previous = this.checked;
      this.checkButton(previous || current, current);
      if (current !== previous) {
        this.emitValueChange();
      }
    }
    current.setFocus();
  }
  render() {
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '66bd7a565ba73540b3bbe56dd23b95e59bcef9bc',
      role: "tablist",
      onClick: this.onClick,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color, {
        [mode]: true,
        'in-toolbar': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar[color]', this.el),
        'segment-activated': this.activated,
        'segment-disabled': this.disabled,
        'segment-scrollable': this.scrollable
      })
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '782c521b1a33729b8eab1c4b879bc3f2ff48ae1b',
      onSlotchange: this.onSlottedItemsChange
    }));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "color": ["colorChanged"],
      "swipeGesture": ["swipeGestureChanged"],
      "value": ["valueChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
Segment.style = {
  ios: IonSegmentIosStyle0,
  md: IonSegmentMdStyle0
};
const segmentButtonIosCss = ":host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff)));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:\"\";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}.segment-button-indicator{-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;left:0;right:0;top:0;bottom:0}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff)))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff))))}:host(.in-toolbar-color) .segment-button-indicator-background{background:var(--ion-color-contrast)}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}";
const IonSegmentButtonIosStyle0 = segmentButtonIosCss;
const segmentButtonMdCss = ":host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #0054e9));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}";
const IonSegmentButtonMdStyle0 = segmentButtonMdCss;
let ids = 0;
const SegmentButton = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.segmentEl = null;
    this.inheritedAttributes = {};
    this.updateStyle = () => {
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.j)(this);
    };
    this.updateState = () => {
      const {
        segmentEl
      } = this;
      if (segmentEl) {
        this.checked = segmentEl.value === this.value;
        if (segmentEl.disabled) {
          this.disabled = true;
        }
      }
    };
    this.checked = false;
    this.contentId = undefined;
    this.disabled = false;
    this.layout = 'icon-top';
    this.type = 'button';
    this.value = 'ion-sb-' + ids++;
  }
  valueChanged() {
    this.updateState();
  }
  connectedCallback() {
    const segmentEl = this.segmentEl = this.el.closest('ion-segment');
    if (segmentEl) {
      this.updateState();
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.a)(segmentEl, 'ionSelect', this.updateState);
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.a)(segmentEl, 'ionStyle', this.updateStyle);
    }
    // Return if there is no contentId defined
    if (!this.contentId) return;
    // Attempt to find the Segment Content by its contentId
    const segmentContent = document.getElementById(this.contentId);
    // If no associated Segment Content exists, log an error and return
    if (!segmentContent) {
      console.error(`Segment Button: Unable to find Segment Content with id="${this.contentId}".`);
      return;
    }
    // Ensure the found element is a valid ION-SEGMENT-CONTENT
    if (segmentContent.tagName !== 'ION-SEGMENT-CONTENT') {
      console.error(`Segment Button: Element with id="${this.contentId}" is not an <ion-segment-content> element.`);
      return;
    }
    // Prevent buttons from being disabled when associated with segment content
    if (this.disabled) {
      console.warn(`Segment Button: Segment buttons cannot be disabled when associated with an <ion-segment-content>.`);
      this.disabled = false;
    }
  }
  disconnectedCallback() {
    const segmentEl = this.segmentEl;
    if (segmentEl) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.b)(segmentEl, 'ionSelect', this.updateState);
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.b)(segmentEl, 'ionStyle', this.updateStyle);
      this.segmentEl = null;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el, ['aria-label']));
  }
  get hasLabel() {
    return !!this.el.querySelector('ion-label');
  }
  get hasIcon() {
    return !!this.el.querySelector('ion-icon');
  }
  /**
   * @internal
   * Focuses the native <button> element
   * inside of ion-segment-button.
   */
  setFocus() {
    var _this2 = this;
    return (0,C_Personal_loan_calculator_app_loan_calculator_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        nativeEl
      } = _this2;
      if (nativeEl !== undefined) {
        nativeEl.focus();
      }
    })();
  }
  render() {
    const {
      checked,
      type,
      disabled,
      hasIcon,
      hasLabel,
      layout,
      segmentEl
    } = this;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    const hasSegmentColor = () => (segmentEl === null || segmentEl === void 0 ? void 0 : segmentEl.color) !== undefined;
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: 'd50a5d5e2f6206e8523598f258d8217d2903f69b',
      class: {
        [mode]: true,
        'in-toolbar': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar[color]', this.el),
        'in-segment': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-segment', this.el),
        'in-segment-color': hasSegmentColor(),
        'segment-button-has-label': hasLabel,
        'segment-button-has-icon': hasIcon,
        'segment-button-has-label-only': hasLabel && !hasIcon,
        'segment-button-has-icon-only': hasIcon && !hasLabel,
        'segment-button-disabled': disabled,
        'segment-button-checked': checked,
        [`segment-button-layout-${layout}`]: true,
        'ion-activatable': true,
        'ion-activatable-instant': true,
        'ion-focusable': true
      }
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", Object.assign({
      key: 'b4f6f145286ba8ab79669e11035b906daa85ae7e',
      "aria-selected": checked ? 'true' : 'false',
      role: "tab",
      ref: el => this.nativeEl = el,
      type: type,
      class: "button-native",
      part: "native",
      disabled: disabled
    }, this.inheritedAttributes), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      key: '67965996c9ffe70553875e00d3da0ae5b2b1d814',
      class: "button-inner"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '5087988fe45a8fdf388ec44c395d0b745b207806'
    })), mode === 'md' && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      key: 'b24858de0750bbc769b3183fac0077dfe817ba27'
    })), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '97b4359432acd1c9da0816360cd1df9472e183f7',
      part: "indicator",
      class: "segment-button-indicator segment-button-indicator-animated"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '0561738ea15b0986f4ed3d8276d5e6f2d13f7e51',
      part: "indicator-background",
      class: "segment-button-indicator-background"
    })));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
SegmentButton.style = {
  ios: IonSegmentButtonIosStyle0,
  md: IonSegmentButtonMdStyle0
};


/***/ })

}]);