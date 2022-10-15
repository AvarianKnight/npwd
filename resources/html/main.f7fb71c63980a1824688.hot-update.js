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

/***/ "./src/apps/boosting/state/atoms.ts":
/*!******************************************!*\
  !*** ./src/apps/boosting/state/atoms.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoostProfileState\": () => (/* binding */ BoostProfileState),\n/* harmony export */   \"QueState\": () => (/* binding */ QueState),\n/* harmony export */   \"ContractsState\": () => (/* binding */ ContractsState),\n/* harmony export */   \"TradeState\": () => (/* binding */ TradeState),\n/* harmony export */   \"PlayerState\": () => (/* binding */ PlayerState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\nconst BoostProfileState = {\n  profile: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'boostProfile',\n    default: undefined\n  })\n};\nconst QueState = {\n  inQue: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'boostingQueue',\n    default: false\n  })\n};\nconst ContractsState = {\n  contracts: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'contracts',\n    default: undefined\n  })\n};\nconst TradeState = {\n  selectedPlayer: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'selectedPlayer',\n    default: undefined\n  })\n};\nconst PlayerState = {};\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9zdGF0ZS9hdG9tcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9zdGF0ZS9hdG9tcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F0b219IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7Qm9vc3RQcm9maWxlLCBDb250cmFjdH0gZnJvbSAnQHR5cGluZ3MvYm9vc3RpbmcnO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9wcm9wZXJ0eSc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9vc3RQcm9maWxlU3RhdGUgPSB7XHJcblx0cHJvZmlsZTogYXRvbTxCb29zdFByb2ZpbGU+KHtcclxuXHRcdGtleTogJ2Jvb3N0UHJvZmlsZScsXHJcblx0XHRkZWZhdWx0OiB1bmRlZmluZWQsXHJcblx0fSksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUXVlU3RhdGUgPSB7XHJcblx0aW5RdWU6IGF0b208Ym9vbGVhbj4oe1xyXG5cdFx0a2V5OiAnYm9vc3RpbmdRdWV1ZScsXHJcblx0XHRkZWZhdWx0OiBmYWxzZSxcclxuXHR9KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250cmFjdHNTdGF0ZSA9IHtcclxuXHRjb250cmFjdHM6IGF0b208Q29udHJhY3RbXT4oe1xyXG5cdFx0a2V5OiAnY29udHJhY3RzJyxcclxuXHRcdGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuXHR9KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFkZVN0YXRlID0ge1xyXG5cdHNlbGVjdGVkUGxheWVyOiBhdG9tPHN0cmluZyB8IFBsYXllcj4oe1xyXG5cdFx0a2V5OiAnc2VsZWN0ZWRQbGF5ZXInLFxyXG5cdFx0ZGVmYXVsdDogdW5kZWZpbmVkLFxyXG5cdH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllclN0YXRlID0ge1xyXG5cdFxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/state/atoms.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d3ea12712445f1850814")
/******/ })();
/******/ 
/******/ }
);