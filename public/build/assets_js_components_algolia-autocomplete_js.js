"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_js_components_algolia-autocomplete_js"],{

/***/ "./assets/js/components/algolia-autocomplete.js":
/*!******************************************************!*\
  !*** ./assets/js/components/algolia-autocomplete.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autocomplete.js/dist/autocomplete.jquery */ "./node_modules/autocomplete.js/dist/autocomplete.jquery.js");
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/algolia-autocomplete.scss */ "./assets/css/algolia-autocomplete.scss");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($elements, dataKey, displayKey) {
  $elements.each(function () {
    var autocompleteUrl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('autocomplete-url');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).autocomplete({
      hint: false
    }, [{
      source: function source(query, cb) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: autocompleteUrl + '?query=' + query
        }).then(function (data) {
          if (dataKey) {
            data = data[dataKey];
          }

          cb(data);
        });
      },
      displayKey: displayKey,
      debounce: 500 // only request every 1/2 second

    }]);
  });
}
;

/***/ }),

/***/ "./assets/css/algolia-autocomplete.scss":
/*!**********************************************!*\
  !*** ./assets/css/algolia-autocomplete.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2pzX2NvbXBvbmVudHNfYWxnb2xpYS1hdXRvY29tcGxldGVfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsNkJBQWUsb0NBQVNDLFNBQVQsRUFBb0JDLE9BQXBCLEVBQTZCQyxVQUE3QixFQUF5QztFQUNwREYsU0FBUyxDQUFDRyxJQUFWLENBQWUsWUFBVztJQUN0QixJQUFJQyxlQUFlLEdBQUdMLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxrQkFBYixDQUF0QjtJQUVBTiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxZQUFSLENBQXFCO01BQUNDLElBQUksRUFBRTtJQUFQLENBQXJCLEVBQW9DLENBQ2hDO01BQ0lDLE1BQU0sRUFBRSxnQkFBU0MsS0FBVCxFQUFnQkMsRUFBaEIsRUFBb0I7UUFDeEJYLGtEQUFBLENBQU87VUFDSGEsR0FBRyxFQUFFUixlQUFlLEdBQUMsU0FBaEIsR0FBMEJLO1FBRDVCLENBQVAsRUFFR0ksSUFGSCxDQUVRLFVBQVNSLElBQVQsRUFBZTtVQUNuQixJQUFJSixPQUFKLEVBQWE7WUFDVEksSUFBSSxHQUFHQSxJQUFJLENBQUNKLE9BQUQsQ0FBWDtVQUNIOztVQUNEUyxFQUFFLENBQUNMLElBQUQsQ0FBRjtRQUNILENBUEQ7TUFRSCxDQVZMO01BV0lILFVBQVUsRUFBRUEsVUFYaEI7TUFZSVksUUFBUSxFQUFFLEdBWmQsQ0FZa0I7O0lBWmxCLENBRGdDLENBQXBDO0VBZ0JILENBbkJEO0FBb0JIO0FBQUE7Ozs7Ozs7Ozs7O0FDekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWxnb2xpYS1hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hbGdvbGlhLWF1dG9jb21wbGV0ZS5zY3NzPzBhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnYXV0b2NvbXBsZXRlLmpzL2Rpc3QvYXV0b2NvbXBsZXRlLmpxdWVyeSc7XG5pbXBvcnQgJy4uLy4uL2Nzcy9hbGdvbGlhLWF1dG9jb21wbGV0ZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnRzLCBkYXRhS2V5LCBkaXNwbGF5S2V5KSB7XG4gICAgJGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhdXRvY29tcGxldGVVcmwgPSAkKHRoaXMpLmRhdGEoJ2F1dG9jb21wbGV0ZS11cmwnKTtcblxuICAgICAgICAkKHRoaXMpLmF1dG9jb21wbGV0ZSh7aGludDogZmFsc2V9LCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc291cmNlOiBmdW5jdGlvbihxdWVyeSwgY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYXV0b2NvbXBsZXRlVXJsKyc/cXVlcnk9JytxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbZGF0YUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5S2V5OiBkaXNwbGF5S2V5LFxuICAgICAgICAgICAgICAgIGRlYm91bmNlOiA1MDAgLy8gb25seSByZXF1ZXN0IGV2ZXJ5IDEvMiBzZWNvbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICB9KTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsIiRlbGVtZW50cyIsImRhdGFLZXkiLCJkaXNwbGF5S2V5IiwiZWFjaCIsImF1dG9jb21wbGV0ZVVybCIsImRhdGEiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwicXVlcnkiLCJjYiIsImFqYXgiLCJ1cmwiLCJ0aGVuIiwiZGVib3VuY2UiXSwic291cmNlUm9vdCI6IiJ9