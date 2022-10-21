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

/***/ "./src/apps/bennys/atoms/state.ts":
/*!****************************************!*\
  !*** ./src/apps/bennys/atoms/state.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bennysState\": () => (/* binding */ bennysState),\n/* harmony export */   \"hoverState\": () => (/* binding */ hoverState),\n/* harmony export */   \"PromptState\": () => (/* binding */ PromptState),\n/* harmony export */   \"VehicleState\": () => (/* binding */ VehicleState),\n/* harmony export */   \"DropdownState\": () => (/* binding */ DropdownState),\n/* harmony export */   \"AnchorState\": () => (/* binding */ AnchorState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\nconst bennysState = {\n  vehicleSelected: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'vehicleSelected',\n    default: null\n  }),\n  vehicles: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'vehicles',\n    default: []\n  }),\n  showNotify: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'showNotify',\n    default: false\n  }),\n  impound: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'impound',\n    default: {\n      regularFee: 0,\n      policeFee: 0\n    }\n  })\n};\nconst hoverState = {\n  hoverItem: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'hoverBennys',\n    default: undefined\n  }),\n  anchorItem: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'anchorBennys',\n    default: undefined\n  })\n};\nconst PromptState = {\n  prompt: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'promptBennys',\n    default: {\n      message: '',\n      open: false\n    }\n  })\n};\nconst VehicleState = {\n  vehicle: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'vehicleBennys',\n    default: undefined\n  })\n};\nconst DropdownState = {\n  dropdown: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'dropdownBennys',\n    default: false\n  })\n};\nconst AnchorState = {\n  anchor: (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: 'anchorBennys',\n    default: undefined\n  })\n};\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9iZW5ueXMvYXRvbXMvc3RhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQWJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9iZW5ueXMvYXRvbXMvc3RhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdG9tfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQge1ZlaGljbGV9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvYmVubnlzJztcclxuXHJcbmV4cG9ydCBjb25zdCBiZW5ueXNTdGF0ZSA9IHtcclxuXHR2ZWhpY2xlU2VsZWN0ZWQ6IGF0b208VmVoaWNsZT4oe1xyXG5cdFx0a2V5OiAndmVoaWNsZVNlbGVjdGVkJyxcclxuXHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0fSksXHJcblx0dmVoaWNsZXM6IGF0b20oe1xyXG5cdFx0a2V5OiAndmVoaWNsZXMnLFxyXG5cdFx0ZGVmYXVsdDogW10sXHJcblx0fSksXHJcblx0c2hvd05vdGlmeTogYXRvbSh7XHJcblx0XHRrZXk6ICdzaG93Tm90aWZ5JyxcclxuXHRcdGRlZmF1bHQ6IGZhbHNlLFxyXG5cdH0pLFxyXG5cdGltcG91bmQ6IGF0b20oe1xyXG5cdFx0a2V5OiAnaW1wb3VuZCcsXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJlZ3VsYXJGZWU6IDAsXHJcblx0XHRcdHBvbGljZUZlZTogMCxcclxuXHRcdH0sXHJcblx0fSksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG92ZXJTdGF0ZSA9IHtcclxuXHRob3Zlckl0ZW06IGF0b208VmVoaWNsZT4oe1xyXG5cdFx0a2V5OiAnaG92ZXJCZW5ueXMnLFxyXG5cdFx0ZGVmYXVsdDogdW5kZWZpbmVkLFxyXG5cdH0pLFxyXG5cdGFuY2hvckl0ZW06IGF0b20oe1xyXG5cdFx0a2V5OiAnYW5jaG9yQmVubnlzJyxcclxuXHRcdGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuXHR9KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcclxuXHRwcm9tcHQ6IGF0b20oe1xyXG5cdFx0a2V5OiAncHJvbXB0QmVubnlzJyxcclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0bWVzc2FnZTogJycsXHJcblx0XHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0fSxcclxuXHR9KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWZWhpY2xlU3RhdGUgPSB7XHJcblx0dmVoaWNsZTogYXRvbSh7XHJcblx0XHRrZXk6ICd2ZWhpY2xlQmVubnlzJyxcclxuXHRcdGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuXHR9KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93blN0YXRlID0ge1xyXG5cdGRyb3Bkb3duOiBhdG9tKHtcclxuXHRcdGtleTogJ2Ryb3Bkb3duQmVubnlzJyxcclxuXHRcdGRlZmF1bHQ6IGZhbHNlLFxyXG5cdH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFuY2hvclN0YXRlID0ge1xyXG5cdGFuY2hvcjogYXRvbSh7XHJcblx0XHRrZXk6ICdhbmNob3JCZW5ueXMnLFxyXG5cdFx0ZGVmYXVsdDogdW5kZWZpbmVkLFxyXG5cdH0pLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/bennys/atoms/state.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5d0e35d745282b4c0e30")
/******/ })();
/******/ 
/******/ }
);