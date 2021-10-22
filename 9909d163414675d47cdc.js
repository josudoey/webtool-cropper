"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_pages_home_index_js"],{

/***/ "../vue/pages/home/render.pug":
/*!************************************!*\
  !*** ../vue/pages/home/render.pug ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid px-0" }, [
    _vm._m(0),
    _c(
      "div",
      { staticClass: "container-fluid px-0" },
      [
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c("b-card-body", [
              _c("img", {
                ref: "image",
                attrs: {
                  src: __webpack_require__(/*! ./lena.png */ "../vue/pages/home/lena.png"),
                  width: "512",
                  height: "512"
                }
              })
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "navbar navbar-dark bg-dark" }, [
      _c("div", { staticClass: "navbar-brand d-flex" }, [
        _c("div", [_vm._v("Webtool Cropper")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "../vue/pages/home/index.js":
/*!**********************************!*\
  !*** ../vue/pages/home/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "../vue/pages/home/render.pug");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  data: () => {
    return {

    }
  },
  async mounted() {


  },
  updated() {
    
  },
  methods: {

  }
});


/***/ }),

/***/ "../vue/pages/home/lena.png":
/*!**********************************!*\
  !*** ../vue/pages/home/lena.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bbba5c1db5c20f8aa84f.png";

/***/ })

}]);
//# sourceMappingURL=9909d163414675d47cdc.js.map