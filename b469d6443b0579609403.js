"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_pages_home_index_mjs"],{

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
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.crop } },
          [_vm._v("裁切")]
        ),
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c("b-card-body", [
              _c("div", { staticClass: "w-50" }, [
                _c("img", {
                  ref: "image",
                  attrs: {
                    src: __webpack_require__(/*! ./lena.png */ "../vue/pages/home/lena.png"),
                    width: "512",
                    height: "512"
                  }
                })
              ]),
              _c("div", { staticClass: "w-50" }, [
                _c("canvas", { ref: "canvas" })
              ])
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

/***/ "../vue/pages/home/lena.png":
/*!**********************************!*\
  !*** ../vue/pages/home/lena.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bbba5c1db5c20f8aa84f.png";

/***/ }),

/***/ "../vue/pages/home/index.mjs":
/*!***********************************!*\
  !*** ../vue/pages/home/index.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
    __webpack_require__.e(/*! import() */ "node_modules_cropperjs_dist_cropper_min_css").then(__webpack_require__.bind(__webpack_require__, /*! cropperjs/dist/cropper.min.css */ "../node_modules/cropperjs/dist/cropper.min.css"))
    const CropperModule = await __webpack_require__.e(/*! import() */ "defaultVendors-node_modules_cropperjs_dist_cropper_js").then(__webpack_require__.t.bind(__webpack_require__, /*! cropperjs */ "../node_modules/cropperjs/dist/cropper.js", 19))
    const Cropper = CropperModule.default
    this.cropper = new Cropper(this.$refs.image, {
      minCropBoxWidth: 256,
      minCropBoxHeight: 256,
      aspectRatio: 1,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    })
  },
  updated() {

  },
  methods: {
    crop() {

    }

  }
});


/***/ })

}]);
//# sourceMappingURL=b469d6443b0579609403.js.map