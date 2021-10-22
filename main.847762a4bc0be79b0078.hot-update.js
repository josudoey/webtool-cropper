"use strict";
self["webpackHotUpdate"]("main",{

/***/ "../vue/main.mjs":
/*!***********************!*\
  !*** ../vue/main.mjs ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "../node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "../node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "../node_modules/bootstrap-vue/esm/icons/plugin.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.js */ "../vue/routes.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "../node_modules/bootstrap-vue/dist/bootstrap-vue.css");





// Import Bootstrap an BootstrapVue CSS files (order is important)



// Make BootstrapVue available throughout your project
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__.BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__.IconsPlugin)
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_6__["default"])

const router = new vue_router__WEBPACK_IMPORTED_MODULE_6__["default"]({
  mode: 'hash',
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: _routes_js__WEBPACK_IMPORTED_MODULE_0__
})

const vm = window.vm = new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  router:router
})

vm.$mount('#app')


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9707008aaa2b5ab285c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.847762a4bc0be79b0078.hot-update.js.map