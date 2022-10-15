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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoostProfileState\": () => (/* binding */ BoostProfileState),\n/* harmony export */   \"QueState\": () => (/* binding */ QueState),\n/* harmony export */   \"ContractsState\": () => (/* binding */ ContractsState),\n/* harmony export */   \"TradeState\": () => (/* binding */ TradeState),\n/* harmony export */   \"PlayerState\": () => (/* binding */ PlayerState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\nconst BoostProfileState = {\n  profile: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'boostProfile',\n    default: undefined\n  })\n};\nconst QueState = {\n  inQue: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'boostingQueue',\n    default: false\n  })\n};\nconst ContractsState = {\n  contracts: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'contracts',\n    default: undefined\n  })\n};\nconst TradeState = {\n  selectedPlayer: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'selectedPlayerTrade',\n    default: undefined\n  })\n};\nconst PlayerState = {\n  playersBoosting: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({})\n};\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9zdGF0ZS9hdG9tcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFEQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3Rpbmcvc3RhdGUvYXRvbXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdG9tfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQge0Jvb3N0UHJvZmlsZSwgQ29udHJhY3R9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvcHJvcGVydHknO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb3N0UHJvZmlsZVN0YXRlID0ge1xyXG5cdHByb2ZpbGU6IGF0b208Qm9vc3RQcm9maWxlPih7XHJcblx0XHRrZXk6ICdib29zdFByb2ZpbGUnLFxyXG5cdFx0ZGVmYXVsdDogdW5kZWZpbmVkLFxyXG5cdH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZVN0YXRlID0ge1xyXG5cdGluUXVlOiBhdG9tPGJvb2xlYW4+KHtcclxuXHRcdGtleTogJ2Jvb3N0aW5nUXVldWUnLFxyXG5cdFx0ZGVmYXVsdDogZmFsc2UsXHJcblx0fSksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ29udHJhY3RzU3RhdGUgPSB7XHJcblx0Y29udHJhY3RzOiBhdG9tPENvbnRyYWN0W10+KHtcclxuXHRcdGtleTogJ2NvbnRyYWN0cycsXHJcblx0XHRkZWZhdWx0OiB1bmRlZmluZWQsXHJcblx0fSksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVHJhZGVTdGF0ZSA9IHtcclxuXHRzZWxlY3RlZFBsYXllcjogYXRvbTxzdHJpbmcgfCBQbGF5ZXI+KHtcclxuXHRcdGtleTogJ3NlbGVjdGVkUGxheWVyVHJhZGUnLFxyXG5cdFx0ZGVmYXVsdDogdW5kZWZpbmVkLFxyXG5cdH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllclN0YXRlID0ge1xyXG5cdHBsYXllcnNCb29zdGluZzogYXRvbTxQbGF5ZXJbXT4oe1xyXG5cclxuXHR9KVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/state/atoms.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f163004b45a333bf65d")
/******/ })();
/******/ 
/******/ }
);