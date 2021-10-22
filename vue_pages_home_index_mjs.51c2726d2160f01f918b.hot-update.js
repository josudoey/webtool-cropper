"use strict";
self["webpackHotUpdate"]("vue_pages_home_index_mjs",{

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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("img", {
                    ref: "image",
                    attrs: { src: __webpack_require__(/*! ./lena.png */ "../vue/pages/home/lena.png") }
                  })
                ]),
                _c("div", { staticClass: "col-6" }, [
                  _vm.outputUrl
                    ? _c("img", {
                        staticClass: "m-auto",
                        attrs: { src: _vm.outputUrl }
                      })
                    : _vm._e()
                ])
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



/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.51c2726d2160f01f918b.hot-update.js.map