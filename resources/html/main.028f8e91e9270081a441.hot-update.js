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

/***/ "./src/apps/boosting/hooks/useBoosting.tsx":
/*!*************************************************!*\
  !*** ./src/apps/boosting/hooks/useBoosting.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBoosting\": () => (/* binding */ useBoosting)\n/* harmony export */ });\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/QueuePrompt */ \"./src/apps/boosting/components/QueuePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useBoosting.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst useBoosting = () => {\n  _s();\n\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  const [boostProfile, setBoostProfile] = useRecoilValue(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.profile);\n  const setContracts = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__.PromptState.prompt);\n  const setQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.QueState.inQue);\n\n  const joinQueueHandler = async () => {\n    await send(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.JOIN_WAITLIST, {\n      boostProfile: boostProfile\n    });\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have joined the queue.',\n      open: true\n    });\n    setQueue(true);\n  };\n\n  const leaveQueueHandler = async () => {\n    await send(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LEAVE_WAITLIST);\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have left the queue.',\n      open: true\n    });\n    setQueue(false);\n  };\n\n  return {\n    joinQueueHandler,\n    leaveQueueHandler\n  };\n};\n\n_s(useBoosting, \"RHCfGGmDBl8McXoB/JD5/BgJv8w=\", true, function () {\n  return [fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LOAD_BOOSTING_PROFILE,\n  data: {\n    uid: 2,\n    level: 4,\n    experience: '53.4'\n  }\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBOUJBO0FBQ0E7OztBQStCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUJvb3N0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jvb3N0aW5nRXZlbnRzLCBCb29zdGluZ1Byb2ZpbGUsIEJPT1NUSU5HX0FQUH0gZnJvbSAnQHR5cGluZ3MvYm9vc3RpbmcnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQge3VzZU51aUV2ZW50LCB1c2VOdWlSZXF1ZXN0fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCBJbmplY3REZWJ1Z0RhdGEgZnJvbSAnLi4vLi4vLi4vb3MvZGVidWcvSW5qZWN0RGVidWdEYXRhJztcclxuaW1wb3J0IFF1ZXVlUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvUXVldWVQcm9tcHQnO1xyXG5pbXBvcnQge0Jvb3N0UHJvZmlsZVN0YXRlLCBDb250cmFjdHNTdGF0ZSwgUXVlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VCb29zdGluZyA9ICgpID0+IHtcclxuXHRjb25zdCB7c2VuZH0gPSB1c2VOdWlSZXF1ZXN0KCk7XHJcblx0Y29uc3QgW2Jvb3N0UHJvZmlsZSwgc2V0Qm9vc3RQcm9maWxlXSA9IHVzZVJlY29pbFZhbHVlKEJvb3N0UHJvZmlsZVN0YXRlLnByb2ZpbGUpO1xyXG5cdGNvbnN0IHNldENvbnRyYWN0cyA9IHVzZVNldFJlY29pbFN0YXRlKENvbnRyYWN0c1N0YXRlLmNvbnRyYWN0cyk7XHJcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcclxuXHRjb25zdCBzZXRRdWV1ZSA9IHVzZVNldFJlY29pbFN0YXRlKFF1ZVN0YXRlLmluUXVlKTtcclxuXHJcblx0Y29uc3Qgam9pblF1ZXVlSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuXHRcdGF3YWl0IHNlbmQoQm9vc3RpbmdFdmVudHMuSk9JTl9XQUlUTElTVCwge2Jvb3N0UHJvZmlsZTogYm9vc3RQcm9maWxlfSk7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRjb21wb25lbnQ6IDxRdWV1ZVByb21wdCAvPixcclxuXHRcdFx0bWVzc2FnZTogJ1lvdSBoYXZlIGpvaW5lZCB0aGUgcXVldWUuJyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdFx0c2V0UXVldWUodHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGVhdmVRdWV1ZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRhd2FpdCBzZW5kKEJvb3N0aW5nRXZlbnRzLkxFQVZFX1dBSVRMSVNUKTtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPFF1ZXVlUHJvbXB0IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnWW91IGhhdmUgbGVmdCB0aGUgcXVldWUuJyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdFx0c2V0UXVldWUoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cmV0dXJuIHtqb2luUXVldWVIYW5kbGVyLCBsZWF2ZVF1ZXVlSGFuZGxlcn07XHJcbn07XHJcblxyXG5JbmplY3REZWJ1Z0RhdGEoXHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRhcHA6IEJPT1NUSU5HX0FQUCxcclxuXHRcdFx0bWV0aG9kOiBCb29zdGluZ0V2ZW50cy5MT0FEX0JPT1NUSU5HX1BST0ZJTEUsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR1aWQ6IDIsXHJcblx0XHRcdFx0bGV2ZWw6IDQsXHJcblx0XHRcdFx0ZXhwZXJpZW5jZTogJzUzLjQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdDUwMCxcclxuKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useBoosting.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d51643f11200607280db")
/******/ })();
/******/ 
/******/ }
);