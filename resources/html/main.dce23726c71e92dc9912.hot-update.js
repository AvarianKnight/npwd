"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
globalThis["webpackHotUpdatenpwd_nui"]("main",{

/***/ "./src/apps/boosting/hooks/usePlayer.ts":
/*!**********************************************!*\
  !*** ./src/apps/boosting/hooks/usePlayer.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePlayer\": () => (/* binding */ usePlayer)\n/* harmony export */ });\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nconst usePlayer = () => {\n  _s();\n\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiRequest)();\n  const setPlayersBoosting = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.PlayerState.playersBoosting);\n  const setSelectedPlayer = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.TradeState.selectedPlayerBoosting);\n\n  const playerHandler = players => {\n    setPlayersBoosting(Object.values(players));\n  };\n\n  const selectedPlayerHandler = (event, value) => {\n    setSelectedPlayer(value);\n  };\n\n  const clearSelectHandler = () => {\n    setSelectedPlayer(undefined);\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.GET_PLAYERS, playerHandler);\n  return {\n    selectedPlayerHandler\n  };\n};\n\n_s(usePlayer, \"iyOWR5AX0PVRe5eEZTn9NKF5BkM=\", false, function () {\n  return [fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiRequest, recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiEvent];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VQbGF5ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBeEJBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZVBsYXllci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jvb3N0aW5nRXZlbnRzfSBmcm9tICdAdHlwaW5ncy9ib29zdGluZyc7XHJcbmltcG9ydCB7dXNlTnVpRXZlbnQsIHVzZU51aVJlcXVlc3R9IGZyb20gJ2ZpdmVtLW51aS1yZWFjdC1saWInO1xyXG5pbXBvcnQge1N5bnRoZXRpY0V2ZW50LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3Jlc291cmNlcy9zZXJ2ZXIvcGxheWVycy9wbGF5ZXIuY2xhc3MnO1xyXG5pbXBvcnQge0JPT1NUSU5HX0FQUH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9ib29zdGluZyc7XHJcbmltcG9ydCB7UHJvcGVydHlFdmVudHN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvcHJvcGVydHknO1xyXG5pbXBvcnQge1BsYXllclN0YXRlLCBUcmFkZVN0YXRlfSBmcm9tICcuLi9zdGF0ZS9hdG9tcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHtzZW5kfSA9IHVzZU51aVJlcXVlc3QoKTtcclxuXHRjb25zdCBzZXRQbGF5ZXJzQm9vc3RpbmcgPSB1c2VTZXRSZWNvaWxTdGF0ZShQbGF5ZXJTdGF0ZS5wbGF5ZXJzQm9vc3RpbmcpO1xyXG5cdGNvbnN0IHNldFNlbGVjdGVkUGxheWVyID0gdXNlU2V0UmVjb2lsU3RhdGUoVHJhZGVTdGF0ZS5zZWxlY3RlZFBsYXllckJvb3N0aW5nKTtcclxuXHJcblxyXG5cdGNvbnN0IHBsYXllckhhbmRsZXIgPSAocGxheWVyczogUGxheWVyW10pID0+IHtcclxuXHRcdHNldFBsYXllcnNCb29zdGluZyhPYmplY3QudmFsdWVzKHBsYXllcnMpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZWxlY3RlZFBsYXllckhhbmRsZXIgPSAoXHJcblx0XHRldmVudDogU3ludGhldGljRXZlbnQ8RWxlbWVudCwgRXZlbnQ+LFxyXG5cdFx0dmFsdWU6IHN0cmluZyB8IFBsYXllcixcclxuXHQpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkUGxheWVyKHZhbHVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGVhclNlbGVjdEhhbmRsZXIgPSAoKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZFBsYXllcih1bmRlZmluZWQpO1xyXG5cdH07XHJcblxyXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuR0VUX1BMQVlFUlMsIHBsYXllckhhbmRsZXIpO1xyXG5cclxuXHRyZXR1cm4ge3NlbGVjdGVkUGxheWVySGFuZGxlcn07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/usePlayer.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a87a2bb9ae8f0745057")
/******/ })();
/******/ 
/******/ }
);