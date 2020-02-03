((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_meeting_selector"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_meeting_selector"] || []).push([[4],{

/***/ "192b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2205":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4aff9027-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MeetingSelector/MeetingDisplay.vue?vue&type=template&id=f5b53bc2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"meeting"},[(_vm.meetingSlot.date)?_c('button',{staticClass:"meeting__button",class:_vm.meetingClass,attrs:{"disabled":!_vm.meetingSlot.date},on:{"click":_vm.meetingSlotClick}},[_vm._v(" "+_vm._s(_vm.time)+" ")]):_c('div',{staticClass:"meeting__empty",class:_vm.meetingEmptyClass},[_vm._v(" — ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MeetingSelector/MeetingDisplay.vue?vue&type=template&id=f5b53bc2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("99de");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("7e84");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js + 1 modules
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MeetingSelector/MeetingDisplay.vue?vue&type=script&lang=ts&










var MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(MeetingsDisplay, _Vue);

  function MeetingsDisplay() {
    Object(classCallCheck["a" /* default */])(this, MeetingsDisplay);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MeetingsDisplay).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MeetingsDisplay, [{
    key: "meetingSlotClick",
    value: function meetingSlotClick() {
      return this.meetingSlot;
    }
  }, {
    key: "meetingClass",
    get: function get() {
      var _ref;

      return _ref = {}, Object(defineProperty["a" /* default */])(_ref, this.meetingButtonClass, true), Object(defineProperty["a" /* default */])(_ref, 'meeting__button--selected', this.isMeetingSelected), _ref;
    }
  }, {
    key: "time",
    get: function get() {
      var date = new Date(this.meetingSlot.date);
      var hours = date.getHours() < 10 ? "0".concat(date.getHours()) : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0".concat(date.getMinutes()) : date.getMinutes();
      return "".concat(hours, ":").concat(minutes);
    }
  }, {
    key: "isMeetingSelected",
    get: function get() {
      if (this.meetingSlotSelected) {
        var meetingSelectedDate = new Date(this.meetingSlotSelected.date);
        var meetingDate = new Date(this.meetingSlot.date);
        return meetingSelectedDate.getTime() === meetingDate.getTime();
      }

      return false;
    }
  }]);

  return MeetingsDisplay;
}(vue_property_decorator["f" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Prop */])({
  default: function _default() {
    return {};
  }
})], MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay.prototype, "meetingSlot", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Prop */])({
  default: function _default() {
    return {};
  }
})], MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay.prototype, "meetingSlotSelected", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Prop */])({
  default: ''
})], MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay.prototype, "meetingButtonClass", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Prop */])({
  default: ''
})], MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay.prototype, "meetingEmptyClass", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Emit */])()], MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay.prototype, "meetingSlotClick", null);

MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay);
/* harmony default export */ var MeetingDisplayvue_type_script_lang_ts_ = (MeetingDisplayvue_type_script_lang_ts_MeetingsDisplay);
// CONCATENATED MODULE: ./src/components/MeetingSelector/MeetingDisplay.vue?vue&type=script&lang=ts&
 /* harmony default export */ var MeetingSelector_MeetingDisplayvue_type_script_lang_ts_ = (MeetingDisplayvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/MeetingSelector/MeetingDisplay.vue?vue&type=style&index=0&id=f5b53bc2&scoped=true&lang=scss&
var MeetingDisplayvue_type_style_index_0_id_f5b53bc2_scoped_true_lang_scss_ = __webpack_require__("26e0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/MeetingSelector/MeetingDisplay.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MeetingSelector_MeetingDisplayvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "f5b53bc2",
  null
  
)

/* harmony default export */ var MeetingDisplay = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "26e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingDisplay_vue_vue_type_style_index_0_id_f5b53bc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("192b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingDisplay_vue_vue_type_style_index_0_id_f5b53bc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingDisplay_vue_vue_type_style_index_0_id_f5b53bc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingDisplay_vue_vue_type_style_index_0_id_f5b53bc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=vue-meeting-selector.umd.4.js.map