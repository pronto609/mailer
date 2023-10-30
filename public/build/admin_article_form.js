"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin_article_form"],{

/***/ "./assets/js/admin_article_form.js":
/*!*****************************************!*\
  !*** ./assets/js/admin_article_form.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.mjs");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

















dropzone__WEBPACK_IMPORTED_MODULE_13__["default"].autoDiscover = false;
jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
  var $autoComplete = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-user-autocomplete');

  if (!$autoComplete.is(':disabled')) {
    Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_autocomplete_js_dist_autocomplete_jquery_js"), __webpack_require__.e("assets_js_components_algolia-autocomplete_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/algolia-autocomplete */ "./assets/js/components/algolia-autocomplete.js")).then(function (autocomplete) {
      autocomplete.default($autoComplete, 'users', 'email');
    });
  }

  var $referenceList = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-reference-list');

  if ($referenceList[0]) {
    var referenceList = new ReferenceList(jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-reference-list'));
    initializeDropzone(referenceList);
  }

  var $locationSelect = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-article-form-location');
  var $specificLocationTarget = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-specific-location-target');
  $locationSelect.on('change', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_12___default().ajax({
      url: $locationSelect.data('specific-location-url'),
      data: {
        location: $locationSelect.val()
      },
      success: function success(html) {
        if (!html) {
          $specificLocationTarget.find('select').remove();
          $specificLocationTarget.addClass('d-none');
          return;
        } // Replace the current field and show


        $specificLocationTarget.html(html).removeClass('d-none');
      }
    });
  });
}); // todo - use Webpack Encore so ES6 syntax is transpiled to ES5

var ReferenceList = /*#__PURE__*/function () {
  function ReferenceList($element) {
    var _this = this;

    _classCallCheck(this, ReferenceList);

    var stuff = new WeakSet([]);
    this.$element = $element;
    this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_15__["default"].create(this.$element[0], {
      handle: '.drag-handle',
      animation: 150,
      onEnd: function onEnd() {
        jquery__WEBPACK_IMPORTED_MODULE_12___default().ajax({
          url: _this.$element.data('url') + '/reorder',
          method: 'POST',
          data: JSON.stringify(_this.sortable.toArray())
        });
      }
    });
    this.references = [];
    this.render();
    this.$element.on('click', '.js-reference-delete', function (event) {
      _this.handleReferenceDelete(event);
    });
    this.$element.on('blur', '.js-edit-filename', function (event) {
      _this.handleReferenceEditFilename(event);
    });
    jquery__WEBPACK_IMPORTED_MODULE_12___default().ajax({
      url: this.$element.data('url')
    }).then(function (data) {
      _this.references = data;

      _this.render();
    });
  }

  _createClass(ReferenceList, [{
    key: "addReference",
    value: function addReference(reference) {
      this.references.push(reference);
      this.render();
    }
  }, {
    key: "handleReferenceDelete",
    value: function handleReferenceDelete(event) {
      var _this2 = this;

      var $li = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      $li.addClass('disabled');
      jquery__WEBPACK_IMPORTED_MODULE_12___default().ajax({
        url: '/admin/article/references/' + id,
        method: 'DELETE'
      }).then(function () {
        _this2.references = _this2.references.filter(function (reference) {
          return reference.id !== id;
        });

        _this2.render();
      });
    }
  }, {
    key: "handleReferenceEditFilename",
    value: function handleReferenceEditFilename(event) {
      var $li = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      var reference = this.references.find(function (reference) {
        return reference.id === id;
      });
      reference.originalFilename = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).val();
      jquery__WEBPACK_IMPORTED_MODULE_12___default().ajax({
        url: '/admin/article/references/' + id,
        method: 'PUT',
        data: JSON.stringify(reference)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var itemsHtml = this.references.map(function (reference) {
        return "\n<li class=\"list-group-item d-flex justify-content-between align-items-center\" data-id=\"".concat(reference.id, "\">\n    <span class=\"drag-handle fa fa-reorder\"></span>\n    <input type=\"text\" value=\"").concat(reference.originalFilename, "\" class=\"form-control js-edit-filename\" style=\"width: auto;\">\n\n    <span>\n        <a href=\"/admin/article/references/").concat(reference.id, "/download\" class=\"btn btn-link btn-sm\"><span class=\"fa fa-download\" style=\"vertical-align: middle\"></span></a>\n        <button class=\"js-reference-delete btn btn-link btn-sm\"><span class=\"fa fa-trash\"></span></button>\n    </span>\n</li>\n");
      });
      this.$element.html(itemsHtml.join(''));
    }
  }]);

  return ReferenceList;
}();
/**
 * @param {ReferenceList} referenceList
 */


function initializeDropzone(referenceList) {
  var formElement = document.querySelector('.js-reference-dropzone');

  if (!formElement) {
    return;
  }

  var dropzone = new dropzone__WEBPACK_IMPORTED_MODULE_13__["default"](formElement, {
    paramName: 'reference',
    init: function init() {
      this.on('success', function (file, data) {
        referenceList.addReference(data);
      });
      this.on('error', function (file, data) {
        if (data.detail) {
          this.emit('error', file, data.detail);
        }
      });
    }
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-551874","vendors-node_modules_dropzone_dist_dropzone_css-node_modules_sortablejs_modular_sortable_esm_-46acaa"], function() { return __webpack_exec__("./assets/js/admin_article_form.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztFQUNBLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtJQUNkO0VBQ0g7O0VBRUQsSUFBSUUsUUFBUSxHQUFHLElBQUkzRCxpREFBSixDQUFheUQsV0FBYixFQUEwQjtJQUNyQ0csU0FBUyxFQUFFLFdBRDBCO0lBRXJDQyxJQUFJLEVBQUUsZ0JBQVc7TUFDYixLQUFLN0MsRUFBTCxDQUFRLFNBQVIsRUFBbUIsVUFBUzhDLElBQVQsRUFBZTFDLElBQWYsRUFBcUI7UUFDcENULGFBQWEsQ0FBQ29ELFlBQWQsQ0FBMkIzQyxJQUEzQjtNQUNILENBRkQ7TUFJQSxLQUFLSixFQUFMLENBQVEsT0FBUixFQUFpQixVQUFTOEMsSUFBVCxFQUFlMUMsSUFBZixFQUFxQjtRQUNsQyxJQUFJQSxJQUFJLENBQUM0QyxNQUFULEVBQWlCO1VBQ2IsS0FBS0MsSUFBTCxDQUFVLE9BQVYsRUFBbUJILElBQW5CLEVBQXlCMUMsSUFBSSxDQUFDNEMsTUFBOUI7UUFDSDtNQUNKLENBSkQ7SUFLSDtFQVpvQyxDQUExQixDQUFmO0FBY0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5fYXJ0aWNsZV9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0ICdkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcydcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRhdXRvQ29tcGxldGUgPSAkKCcuanMtdXNlci1hdXRvY29tcGxldGUnKTtcbiAgICBpZiAoISRhdXRvQ29tcGxldGUuaXMoJzpkaXNhYmxlZCcpKSB7XG4gICAgICAgIGltcG9ydCgnLi9jb21wb25lbnRzL2FsZ29saWEtYXV0b2NvbXBsZXRlJykudGhlbigoYXV0b2NvbXBsZXRlKSA9PiB7XG4gICAgICAgICAgICBhdXRvY29tcGxldGUuZGVmYXVsdCgkYXV0b0NvbXBsZXRlLCAndXNlcnMnLCAnZW1haWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgJHJlZmVyZW5jZUxpc3QgPSAkKCcuanMtcmVmZXJlbmNlLWxpc3QnKTtcbiAgICBpZiAoJHJlZmVyZW5jZUxpc3RbMF0pIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUxpc3QgPSBuZXcgUmVmZXJlbmNlTGlzdCgkKCcuanMtcmVmZXJlbmNlLWxpc3QnKSk7XG4gICAgICAgIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KTtcbiAgICB9XG5cbiAgICB2YXIgJGxvY2F0aW9uU2VsZWN0ID0gJCgnLmpzLWFydGljbGUtZm9ybS1sb2NhdGlvbicpO1xuICAgIHZhciAkc3BlY2lmaWNMb2NhdGlvblRhcmdldCA9ICQoJy5qcy1zcGVjaWZpYy1sb2NhdGlvbi10YXJnZXQnKTtcblxuICAgICRsb2NhdGlvblNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkbG9jYXRpb25TZWxlY3QuZGF0YSgnc3BlY2lmaWMtbG9jYXRpb24tdXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICRsb2NhdGlvblNlbGVjdC52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcbiAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldFxuICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIHRvZG8gLSB1c2UgV2VicGFjayBFbmNvcmUgc28gRVM2IHN5bnRheCBpcyB0cmFuc3BpbGVkIHRvIEVTNVxuY2xhc3MgUmVmZXJlbmNlTGlzdFxue1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdHVmZiA9IG5ldyBXZWFrU2V0KFtdKTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUodGhpcy4kZWxlbWVudFswXSwge1xuICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWctaGFuZGxlJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuJGVsZW1lbnQuZGF0YSgndXJsJykrJy9yZW9yZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuc29ydGFibGUudG9BcnJheSgpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gW107XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2snLCAnLmpzLXJlZmVyZW5jZS1kZWxldGUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignYmx1cicsICcuanMtZWRpdC1maWxlbmFtZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3VybCcpXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLmxpc3QtZ3JvdXAtaXRlbScpO1xuICAgICAgICBjb25zdCBpZCA9ICRsaS5kYXRhKCdpZCcpO1xuICAgICAgICAkbGkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJytpZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZS5pZCAhPT0gaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVJlZmVyZW5jZUVkaXRGaWxlbmFtZShldmVudCkge1xuICAgICAgICBjb25zdCAkbGkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgaWQgPSAkbGkuZGF0YSgnaWQnKTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWZlcmVuY2UuaWQgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVmZXJlbmNlLm9yaWdpbmFsRmlsZW5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzLycraWQsXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zSHRtbCA9IHRoaXMucmVmZXJlbmNlcy5tYXAocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG48bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIGRhdGEtaWQ9XCIke3JlZmVyZW5jZS5pZH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImRyYWctaGFuZGxlIGZhIGZhLXJlb3JkZXJcIj48L3NwYW4+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3JlZmVyZW5jZS5vcmlnaW5hbEZpbGVuYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGpzLWVkaXQtZmlsZW5hbWVcIiBzdHlsZT1cIndpZHRoOiBhdXRvO1wiPlxuXG4gICAgPHNwYW4+XG4gICAgICAgIDxhIGhyZWY9XCIvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzLyR7cmVmZXJlbmNlLmlkfS9kb3dubG9hZFwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGVcIj48L3NwYW4+PC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtcmVmZXJlbmNlLWRlbGV0ZSBidG4gYnRuLWxpbmsgYnRuLXNtXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICA8L3NwYW4+XG48L2xpPlxuYFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaXRlbXNIdG1sLmpvaW4oJycpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWZlcmVuY2VMaXN0fSByZWZlcmVuY2VMaXN0XG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KSB7XG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZmVyZW5jZS1kcm9wem9uZScpO1xuICAgIGlmICghZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkcm9wem9uZSA9IG5ldyBEcm9wem9uZShmb3JtRWxlbWVudCwge1xuICAgICAgICBwYXJhbU5hbWU6ICdyZWZlcmVuY2UnLFxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihmaWxlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGlzdC5hZGRSZWZlcmVuY2UoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBmaWxlLCBkYXRhLmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyIkIiwiRHJvcHpvbmUiLCJTb3J0YWJsZSIsImF1dG9EaXNjb3ZlciIsImRvY3VtZW50IiwicmVhZHkiLCIkYXV0b0NvbXBsZXRlIiwiaXMiLCJ0aGVuIiwiYXV0b2NvbXBsZXRlIiwiZGVmYXVsdCIsIiRyZWZlcmVuY2VMaXN0IiwicmVmZXJlbmNlTGlzdCIsIlJlZmVyZW5jZUxpc3QiLCJpbml0aWFsaXplRHJvcHpvbmUiLCIkbG9jYXRpb25TZWxlY3QiLCIkc3BlY2lmaWNMb2NhdGlvblRhcmdldCIsIm9uIiwiZSIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibG9jYXRpb24iLCJ2YWwiLCJzdWNjZXNzIiwiaHRtbCIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGVsZW1lbnQiLCJzdHVmZiIsIldlYWtTZXQiLCJzb3J0YWJsZSIsImNyZWF0ZSIsImhhbmRsZSIsImFuaW1hdGlvbiIsIm9uRW5kIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvQXJyYXkiLCJyZWZlcmVuY2VzIiwicmVuZGVyIiwiZXZlbnQiLCJoYW5kbGVSZWZlcmVuY2VEZWxldGUiLCJoYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUiLCJyZWZlcmVuY2UiLCJwdXNoIiwiJGxpIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJpZCIsImZpbHRlciIsIm9yaWdpbmFsRmlsZW5hbWUiLCJpdGVtc0h0bWwiLCJtYXAiLCJqb2luIiwiZm9ybUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcHpvbmUiLCJwYXJhbU5hbWUiLCJpbml0IiwiZmlsZSIsImFkZFJlZmVyZW5jZSIsImRldGFpbCIsImVtaXQiXSwic291cmNlUm9vdCI6IiJ9