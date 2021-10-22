"use strict";
self["webpackHotUpdate"]("vue_pages_home_index_mjs",{

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
      outputUrl: ''

    }
  },
  async mounted() {
    __webpack_require__.e(/*! import() */ "node_modules_cropperjs_dist_cropper_min_css").then(__webpack_require__.bind(__webpack_require__, /*! cropperjs/dist/cropper.min.css */ "../node_modules/cropperjs/dist/cropper.min.css"))
    const CropperModule = await __webpack_require__.e(/*! import() */ "defaultVendors-node_modules_cropperjs_dist_cropper_js").then(__webpack_require__.t.bind(__webpack_require__, /*! cropperjs */ "../node_modules/cropperjs/dist/cropper.js", 19))
    const Cropper = CropperModule.default
    this.cropper = new Cropper(this.$refs.image, {
      viewMode: 2,
      dragMode: 'none',
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
      this.outputUrl = this.cropper.getCroppedCanvas().toDataURL('image/png')


    }
  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.6c0b9d061d421e7ebc78.hot-update.js.map