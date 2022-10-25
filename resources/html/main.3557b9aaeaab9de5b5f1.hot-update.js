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

/***/ "./src/apps/boosting/components/Queue.tsx":
/*!************************************************!*\
  !*** ./src/apps/boosting/components/Queue.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_boosting_join_queue_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/boosting/join-queue.png */ \"./src/assets/boosting/join-queue.png\");\n/* harmony import */ var _assets_boosting_leave_queue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/boosting/leave-queue.png */ \"./src/assets/boosting/leave-queue.png\");\n/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Text */ \"./src/apps/boosting/common/Text.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\Queue.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])`\n\tposition: absolute;\n\ttop: 261px;\n\theight: 55px;\n\tdisplay: flex;\n\tleft: 66px;\n\twidth: 270px;\n`;\n_c = Container;\nconst JoinContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])`\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\twidth: 104px;\n\theight: 55px;\n`;\n_c2 = JoinContainer;\nconst JoinImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])`\n\tbackground: url(${_assets_boosting_join_queue_png__WEBPACK_IMPORTED_MODULE_1__}) no-repeat;\n\twidth: 48px;\n\theight: 36px;\n`;\n_c3 = JoinImg;\nconst LeaveContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])`\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\twidth: 115px;\n\theight: 55px;\n\tposition: absolute;\n\tleft: 150px;\n`;\n_c4 = LeaveContainer;\nconst LeaveImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])`\n\tbackground: url(${_assets_boosting_leave_queue_png__WEBPACK_IMPORTED_MODULE_2__}) no-repeat;\n\twidth: 48px;\n\theight: 36px;\n`;\n_c5 = LeaveImg;\n\nconst Queue = _ref => {\n  _s();\n\n  let {\n    joinQueueHandler,\n    leaveQueueHandler\n  } = _ref;\n  const inQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_4__.QueState.inQue);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(JoinContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        disabled: inQueue,\n        onClick: joinQueueHandler,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(JoinImg, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_common_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        textAlign: 'center',\n        width: '104px',\n        children: \"JOIN QUEUE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LeaveContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        disabled: !inQueue,\n        onClick: leaveQueueHandler,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LeaveImg, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_common_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        textAlign: 'center',\n        width: '115px',\n        children: \"LEAVE QUEUE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(Queue, \"z+PCbZkSWYZ1nyFK53UeLQ6R/V0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c6 = Queue;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n__webpack_require__.$Refresh$.register(_c, \"Container\");\n__webpack_require__.$Refresh$.register(_c2, \"JoinContainer\");\n__webpack_require__.$Refresh$.register(_c3, \"JoinImg\");\n__webpack_require__.$Refresh$.register(_c4, \"LeaveContainer\");\n__webpack_require__.$Refresh$.register(_c5, \"LeaveImg\");\n__webpack_require__.$Refresh$.register(_c6, \"Queue\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL1F1ZXVlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQVdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7O0FBdkJBO0FBQ0E7OztBQURBO0FBeUJBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL1F1ZXVlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JveCwgSWNvbkJ1dHRvbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQge3VzZVJlY29pbFZhbHVlfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSm9pblF1ZXVlSW1nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9ib29zdGluZy9qb2luLXF1ZXVlLnBuZyc7XG5pbXBvcnQgTGVhdmVRdWV1ZUltZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvYm9vc3RpbmcvbGVhdmUtcXVldWUucG5nJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL2NvbW1vbi9UZXh0JztcbmltcG9ydCB7UXVlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAyNjFweDtcblx0aGVpZ2h0OiA1NXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRsZWZ0OiA2NnB4O1xuXHR3aWR0aDogMjcwcHg7XG5gO1xuXG5jb25zdCBKb2luQ29udGFpbmVyID0gc3R5bGVkKEJveClgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxMDRweDtcblx0aGVpZ2h0OiA1NXB4O1xuYDtcblxuY29uc3QgSm9pbkltZyA9IHN0eWxlZChCb3gpYFxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtKb2luUXVldWVJbWd9KSBuby1yZXBlYXQ7XG5cdHdpZHRoOiA0OHB4O1xuXHRoZWlnaHQ6IDM2cHg7XG5gO1xuXG5jb25zdCBMZWF2ZUNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR3aWR0aDogMTE1cHg7XG5cdGhlaWdodDogNTVweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAxNTBweDtcbmA7XG5cbmNvbnN0IExlYXZlSW1nID0gc3R5bGVkKEJveClgXG5cdGJhY2tncm91bmQ6IHVybCgke0xlYXZlUXVldWVJbWd9KSBuby1yZXBlYXQ7XG5cdHdpZHRoOiA0OHB4O1xuXHRoZWlnaHQ6IDM2cHg7XG5gO1xuXG5pbnRlcmZhY2UgUXVldWVQcm9wcyB7XG5cdGpvaW5RdWV1ZUhhbmRsZXI6ICgpID0+IGFueTtcblx0bGVhdmVRdWV1ZUhhbmRsZXI6ICgpID0+IGFueTtcbn1cblxuY29uc3QgUXVldWUgPSAoe2pvaW5RdWV1ZUhhbmRsZXIsIGxlYXZlUXVldWVIYW5kbGVyfTogUXVldWVQcm9wcykgPT4ge1xuXHRjb25zdCBpblF1ZXVlID0gdXNlUmVjb2lsVmFsdWUoUXVlU3RhdGUuaW5RdWUpO1xuXG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lcj5cblx0XHRcdDxKb2luQ29udGFpbmVyPlxuXHRcdFx0XHQ8SWNvbkJ1dHRvbiBkaXNhYmxlZD17aW5RdWV1ZX0gb25DbGljaz17am9pblF1ZXVlSGFuZGxlcn0+XG5cdFx0XHRcdFx0PEpvaW5JbWcgLz5cblx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHQ8VGV4dCB0ZXh0QWxpZ249eydjZW50ZXInfSB3aWR0aD17JzEwNHB4J30+XG5cdFx0XHRcdFx0Sk9JTiBRVUVVRVxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L0pvaW5Db250YWluZXI+XG5cdFx0XHQ8TGVhdmVDb250YWluZXI+XG5cdFx0XHRcdDxJY29uQnV0dG9uIGRpc2FibGVkPXshaW5RdWV1ZX0gb25DbGljaz17bGVhdmVRdWV1ZUhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxMZWF2ZUltZyAvPlxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDxUZXh0IHRleHRBbGlnbj17J2NlbnRlcid9IHdpZHRoPXsnMTE1cHgnfT5cblx0XHRcdFx0XHRMRUFWRSBRVUVVRVxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L0xlYXZlQ29udGFpbmVyPlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVldWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/Queue.tsx\n");

/***/ }),

/***/ "./src/apps/boosting/hooks/useBoosting.tsx":
/*!*************************************************!*\
  !*** ./src/apps/boosting/hooks/useBoosting.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBoosting\": () => (/* binding */ useBoosting)\n/* harmony export */ });\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/QueuePrompt */ \"./src/apps/boosting/components/QueuePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useBoosting.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst useBoosting = () => {\n  _s();\n\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  const boostProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.profile);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__.PromptState.prompt);\n  const setQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.QueState.inQue);\n\n  const joinQueueHandler = async () => {\n    await send(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.JOIN_WAITLIST, {\n      boostProfile: boostProfile\n    });\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have joined the queue.',\n      open: true\n    });\n    setQueue(true);\n  };\n\n  const leaveQueueHandler = async () => {\n    await send(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LEAVE_WAITLIST);\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have left the queue.',\n      open: true\n    });\n    setQueue(false);\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LEAVE_WAITLIST, setQueue);\n  return {\n    joinQueueHandler,\n    leaveQueueHandler\n  };\n};\n\n_s(useBoosting, \"hvKy9PG/CdErRiXpjxfwP4mcaSM=\", false, function () {\n  return [fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LOAD_BOOSTING_PROFILE,\n  data: {\n    uid: 2,\n    level: 4,\n    experience: '53.4'\n  }\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBN0JBO0FBQ0E7OztBQThCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUJvb3N0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHN9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XG5pbXBvcnQge3VzZU51aUV2ZW50LCB1c2VOdWlSZXF1ZXN0fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcbmltcG9ydCB7dXNlUmVjb2lsVmFsdWUsIHVzZVNldFJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICcuLi8uLi8uLi9vcy9kZWJ1Zy9JbmplY3REZWJ1Z0RhdGEnO1xuaW1wb3J0IFF1ZXVlUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvUXVldWVQcm9tcHQnO1xuaW1wb3J0IHtCb29zdFByb2ZpbGVTdGF0ZSwgUXVlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcblxuZXhwb3J0IGNvbnN0IHVzZUJvb3N0aW5nID0gKCkgPT4ge1xuXHRjb25zdCB7c2VuZH0gPSB1c2VOdWlSZXF1ZXN0KCk7XG5cdGNvbnN0IGJvb3N0UHJvZmlsZSA9IHVzZVJlY29pbFZhbHVlKEJvb3N0UHJvZmlsZVN0YXRlLnByb2ZpbGUpO1xuXHRjb25zdCBzZXRQcm9tcHQgPSB1c2VTZXRSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xuXHRjb25zdCBzZXRRdWV1ZSA9IHVzZVNldFJlY29pbFN0YXRlKFF1ZVN0YXRlLmluUXVlKTtcblxuXHRjb25zdCBqb2luUXVldWVIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IHNlbmQoQm9vc3RpbmdFdmVudHMuSk9JTl9XQUlUTElTVCwge2Jvb3N0UHJvZmlsZTogYm9vc3RQcm9maWxlfSk7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdGNvbXBvbmVudDogPFF1ZXVlUHJvbXB0IC8+LFxuXHRcdFx0bWVzc2FnZTogJ1lvdSBoYXZlIGpvaW5lZCB0aGUgcXVldWUuJyxcblx0XHRcdG9wZW46IHRydWUsXG5cdFx0fSk7XG5cdFx0c2V0UXVldWUodHJ1ZSk7XG5cdH07XG5cblx0Y29uc3QgbGVhdmVRdWV1ZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgc2VuZChCb29zdGluZ0V2ZW50cy5MRUFWRV9XQUlUTElTVCk7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdGNvbXBvbmVudDogPFF1ZXVlUHJvbXB0IC8+LFxuXHRcdFx0bWVzc2FnZTogJ1lvdSBoYXZlIGxlZnQgdGhlIHF1ZXVlLicsXG5cdFx0XHRvcGVuOiB0cnVlLFxuXHRcdH0pO1xuXHRcdHNldFF1ZXVlKGZhbHNlKTtcblx0fTtcblxuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLkxFQVZFX1dBSVRMSVNULCBzZXRRdWV1ZSk7XG5cblx0cmV0dXJuIHtqb2luUXVldWVIYW5kbGVyLCBsZWF2ZVF1ZXVlSGFuZGxlcn07XG59O1xuXG5JbmplY3REZWJ1Z0RhdGEoXG5cdFtcblx0XHR7XG5cdFx0XHRhcHA6IEJPT1NUSU5HX0FQUCxcblx0XHRcdG1ldGhvZDogQm9vc3RpbmdFdmVudHMuTE9BRF9CT09TVElOR19QUk9GSUxFLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR1aWQ6IDIsXG5cdFx0XHRcdGxldmVsOiA0LFxuXHRcdFx0XHRleHBlcmllbmNlOiAnNTMuNCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdF0sXG5cdDUwMCxcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useBoosting.tsx\n");

/***/ }),

/***/ "./src/apps/boosting/hooks/useContracts.tsx":
/*!**************************************************!*\
  !*** ./src/apps/boosting/hooks/useContracts.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_4__.PromptState.prompt);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.GET_PLAYERS).then(() => {\n      setPrompt({\n        component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          index: index\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 16\n        }, undefined),\n        message: 'TRADE CONTRACT',\n        open: true\n      });\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    console.log(index);\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.START_CONTRACT, contracts[index]).then(() => {\n      closePrompt();\n      addAlert({\n        message: 'Contract started!',\n        type: 'success'\n      });\n    });\n  }; //TODO error check for what happens when a player logs out?\n\n\n  const tradeHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract traded!',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract deleted.',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"0JGWJcwAOlWannOAWLK37OfrIak=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__.useSnackbar];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7QUExRkE7QUFDQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3RpbmcvaG9va3MvdXNlQ29udHJhY3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7Qm9vc3RpbmdFdmVudHMsIENvbnRyYWN0fSBmcm9tICdAdHlwaW5ncy9ib29zdGluZyc7XG5pbXBvcnQge3VzZU51aVJlcXVlc3R9IGZyb20gJ2ZpdmVtLW51aS1yZWFjdC1saWInO1xuaW1wb3J0IHtDb250cmFjdHNTdGF0ZX0gZnJvbSAnLi4vc3RhdGUvYXRvbXMnO1xuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSAnQHVpL3N0YXRlL1Byb21wdFN0YXRlJztcbmltcG9ydCBTdGFydFByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1N0YXJ0UHJvbXB0JztcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcbmltcG9ydCBEZWNsaW5lUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvRGVjbGluZVByb21wdCc7XG5pbXBvcnQge3VzZVNuYWNrYmFyfSBmcm9tICdAb3Mvc25hY2tiYXIvaG9va3MvdXNlU25hY2tiYXInO1xuXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3RzID0gKCkgPT4ge1xuXHRjb25zdCBbY29udHJhY3RzLCBzZXRDb250cmFjdHNdID0gdXNlUmVjb2lsU3RhdGUoQ29udHJhY3RzU3RhdGUuY29udHJhY3RzKTtcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcblx0Y29uc3Qge3NlbmR9ID0gdXNlTnVpUmVxdWVzdCgpO1xuXHRjb25zdCB7YWRkQWxlcnR9ID0gdXNlU25hY2tiYXIoKTtcblxuXHRjb25zdCBzdGFydFByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdGNvbXBvbmVudDogPFN0YXJ0UHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBSRUFEWSBUTyBTVEFSVCBZT1VSIE1JU1NJT04/Jyxcblx0XHRcdG9wZW46IHRydWUsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgdHJhZGVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuR0VUX1BMQVlFUlMpLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0UHJvbXB0KHtcblx0XHRcdFx0Y29tcG9uZW50OiA8VHJhZGVQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcblx0XHRcdFx0bWVzc2FnZTogJ1RSQURFIENPTlRSQUNUJyxcblx0XHRcdFx0b3BlbjogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGRlY2xpbmVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHNldFByb21wdCh7XG5cdFx0XHRjb21wb25lbnQ6IDxEZWNsaW5lUHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBTVVJFIFlPVSBXQU5UIFRPIFRSQVNIIFRISVMgQ09OVFJBQ1Q/Jyxcblx0XHRcdG9wZW46IHRydWUsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgY2xvc2VQcm9tcHQgPSAoKSA9PiB7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdG1lc3NhZ2U6ICcnLFxuXHRcdFx0b3BlbjogZmFsc2UsXG5cdFx0XHRjb21wb25lbnQ6IHVuZGVmaW5lZCxcblx0XHR9KTtcblx0fTtcblxuXHQvL1RPRE86IHdyaXRlIFVJIC0+IENsaWVudCAtPiBTZXJ2aWNlIGNvZGUgOjo6IGRlY2xpbmVIYW5kbGVyIGZpcnN0XG5cdGNvbnN0IHN0YXJ0SGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coaW5kZXgpO1xuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuU1RBUlRfQ09OVFJBQ1QsIGNvbnRyYWN0c1tpbmRleF0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0Y2xvc2VQcm9tcHQoKTtcblx0XHRcdGFkZEFsZXJ0KHtcblx0XHRcdFx0bWVzc2FnZTogJ0NvbnRyYWN0IHN0YXJ0ZWQhJyxcblx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Ly9UT0RPIGVycm9yIGNoZWNrIGZvciB3aGF0IGhhcHBlbnMgd2hlbiBhIHBsYXllciBsb2dzIG91dD9cblx0Y29uc3QgdHJhZGVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjb250cmFjdHNbaW5kZXhdKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZXRDb250cmFjdHMoKHByZXZTdGF0ZSkgPT5cblx0XHRcdFx0XHRwcmV2U3RhdGUuZmlsdGVyKChjb250cmFjdDogQ29udHJhY3QpID0+IGNvbnRyYWN0LmlkICE9PSBjb250cmFjdHNbaW5kZXhdLmlkKSxcblx0XHRcdFx0KTtcblx0XHRcdFx0YWRkQWxlcnQoe1xuXHRcdFx0XHRcdG1lc3NhZ2U6ICdDb250cmFjdCB0cmFkZWQhJyxcblx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyOiBhbnkpID0+IGFkZEFsZXJ0KHttZXNzYWdlOiBlcnIsIHR5cGU6ICdlcnJvcid9KSk7XG5cdH07XG5cblx0Y29uc3QgZGVjbGluZUhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuREVMRVRFX0NPTlRSQUNULCBjb250cmFjdHNbaW5kZXhdKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZXRDb250cmFjdHMoKHByZXZTdGF0ZSkgPT5cblx0XHRcdFx0XHRwcmV2U3RhdGUuZmlsdGVyKChjb250cmFjdDogQ29udHJhY3QpID0+IGNvbnRyYWN0LmlkICE9PSBjb250cmFjdHNbaW5kZXhdLmlkKSxcblx0XHRcdFx0KTtcblx0XHRcdFx0YWRkQWxlcnQoe1xuXHRcdFx0XHRcdG1lc3NhZ2U6ICdDb250cmFjdCBkZWxldGVkLicsXG5cdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycjogYW55KSA9PiBhZGRBbGVydCh7bWVzc2FnZTogZXJyLCB0eXBlOiAnZXJyb3InfSkpO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0c3RhcnRQcm9tcHQsXG5cdFx0c3RhcnRIYW5kbGVyLFxuXHRcdHRyYWRlUHJvbXB0LFxuXHRcdGNsb3NlUHJvbXB0LFxuXHRcdHRyYWRlSGFuZGxlcixcblx0XHRkZWNsaW5lUHJvbXB0LFxuXHRcdGRlY2xpbmVIYW5kbGVyLFxuXHR9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78829dfd7033460f67da")
/******/ })();
/******/ 
/******/ }
);