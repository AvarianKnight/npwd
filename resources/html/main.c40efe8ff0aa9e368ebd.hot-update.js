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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBoosting\": () => (/* binding */ useBoosting)\n/* harmony export */ });\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/QueuePrompt */ \"./src/apps/boosting/components/QueuePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useBoosting.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst useBoosting = () => {\n  _s();\n\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  const boostProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.profile);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__.PromptState.prompt);\n  const setQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.QueState.inQue);\n\n  const joinQueueHandler = async () => {\n    await send(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.JOIN_WAITLIST, {\n      boostProfile: boostProfile\n    });\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have joined the queue.',\n      open: true\n    });\n    setQueue(true);\n  };\n\n  const leaveQueueHandler = async () => {\n    await send(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LEAVE_WAITLIST);\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have left the queue.',\n      open: true\n    });\n    setQueue(false);\n  };\n\n  return {\n    joinQueueHandler,\n    leaveQueueHandler\n  };\n};\n\n_s(useBoosting, \"mT1d6sCZPDpJFw26x7nXUgeQ/nM=\", false, function () {\n  return [fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LOAD_BOOSTING_PROFILE,\n  data: {\n    uid: 2,\n    level: 4,\n    experience: '53.4'\n  }\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQTdCQTtBQUNBOzs7QUE4QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb29zdGluZ0V2ZW50cywgQm9vc3RpbmdQcm9maWxlLCBCT09TVElOR19BUFB9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSAnQHVpL3N0YXRlL1Byb21wdFN0YXRlJztcclxuaW1wb3J0IHt1c2VOdWlFdmVudCwgdXNlTnVpUmVxdWVzdH0gZnJvbSAnZml2ZW0tbnVpLXJlYWN0LWxpYic7XHJcbmltcG9ydCB7dXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICcuLi8uLi8uLi9vcy9kZWJ1Zy9JbmplY3REZWJ1Z0RhdGEnO1xyXG5pbXBvcnQgUXVldWVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9RdWV1ZVByb21wdCc7XHJcbmltcG9ydCB7Qm9vc3RQcm9maWxlU3RhdGUsIENvbnRyYWN0c1N0YXRlLCBRdWVTdGF0ZX0gZnJvbSAnLi4vc3RhdGUvYXRvbXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUJvb3N0aW5nID0gKCkgPT4ge1xyXG5cdGNvbnN0IHtzZW5kfSA9IHVzZU51aVJlcXVlc3QoKTtcclxuXHRjb25zdCBib29zdFByb2ZpbGUgPSB1c2VSZWNvaWxWYWx1ZShCb29zdFByb2ZpbGVTdGF0ZS5wcm9maWxlKTtcclxuXHRjb25zdCBzZXRQcm9tcHQgPSB1c2VTZXRSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xyXG5cdGNvbnN0IHNldFF1ZXVlID0gdXNlU2V0UmVjb2lsU3RhdGUoUXVlU3RhdGUuaW5RdWUpO1xyXG5cclxuXHRjb25zdCBqb2luUXVldWVIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0YXdhaXQgc2VuZChCb29zdGluZ0V2ZW50cy5KT0lOX1dBSVRMSVNULCB7Ym9vc3RQcm9maWxlOiBib29zdFByb2ZpbGV9KTtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPFF1ZXVlUHJvbXB0IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnWW91IGhhdmUgam9pbmVkIHRoZSBxdWV1ZS4nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0XHRzZXRRdWV1ZSh0cnVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsZWF2ZVF1ZXVlSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuXHRcdGF3YWl0IHNlbmQoQm9vc3RpbmdFdmVudHMuTEVBVkVfV0FJVExJU1QpO1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8UXVldWVQcm9tcHQgLz4sXHJcblx0XHRcdG1lc3NhZ2U6ICdZb3UgaGF2ZSBsZWZ0IHRoZSBxdWV1ZS4nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0XHRzZXRRdWV1ZShmYWxzZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRyZXR1cm4ge2pvaW5RdWV1ZUhhbmRsZXIsIGxlYXZlUXVldWVIYW5kbGVyfTtcclxufTtcclxuXHJcbkluamVjdERlYnVnRGF0YShcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdGFwcDogQk9PU1RJTkdfQVBQLFxyXG5cdFx0XHRtZXRob2Q6IEJvb3N0aW5nRXZlbnRzLkxPQURfQk9PU1RJTkdfUFJPRklMRSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRsZXZlbDogNCxcclxuXHRcdFx0XHRleHBlcmllbmNlOiAnNTMuNCcsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0NTAwLFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useBoosting.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c4f98164295cd4f69ae")
/******/ })();
/******/ 
/******/ }
);