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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_boosting_join_queue_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/boosting/join-queue.png */ \"./src/assets/boosting/join-queue.png\");\n/* harmony import */ var _assets_boosting_leave_queue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/boosting/leave-queue.png */ \"./src/assets/boosting/leave-queue.png\");\n/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Text */ \"./src/apps/boosting/common/Text.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\Queue.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\nconst Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"])`\n\tposition: absolute;\n\ttop: 261px;\n\theight: 55px;\n\tdisplay: flex;\n\tleft: 66px;\n\twidth: 270px;\n`;\n_c = Container;\nconst JoinContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"])`\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\twidth: 104px;\n\theight: 55px;\n`;\n_c2 = JoinContainer;\nconst JoinImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"])`\n\tbackground: url(${_assets_boosting_join_queue_png__WEBPACK_IMPORTED_MODULE_1__}) no-repeat;\n\twidth: 48px;\n\theight: 36px;\n`;\n_c3 = JoinImg;\nconst LeaveContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"])`\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\twidth: 115px;\n\theight: 55px;\n\tposition: absolute;\n\tleft: 150px;\n`;\n_c4 = LeaveContainer;\nconst LeaveImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"])`\n\tbackground: url(${_assets_boosting_leave_queue_png__WEBPACK_IMPORTED_MODULE_2__}) no-repeat;\n\twidth: 48px;\n\theight: 36px;\n`;\n_c5 = LeaveImg;\n\nconst Queue = _ref => {\n  _s();\n\n  let {\n    joinQueueHandler,\n    leaveQueueHandler\n  } = _ref;\n  const setQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(QueState.inQue);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(JoinContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onClick: joinQueueHandler,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(JoinImg, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_common_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        textAlign: 'center',\n        width: '104px',\n        children: \"JOIN QUEUE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LeaveContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onClick: leaveQueueHandler,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LeaveImg, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_common_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        textAlign: 'center',\n        width: '115px',\n        children: \"LEAVE QUEUE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(Queue, \"DbExYEI310+3QccCEzMb3w7RO0M=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c6 = Queue;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n__webpack_require__.$Refresh$.register(_c, \"Container\");\n__webpack_require__.$Refresh$.register(_c2, \"JoinContainer\");\n__webpack_require__.$Refresh$.register(_c3, \"JoinImg\");\n__webpack_require__.$Refresh$.register(_c4, \"LeaveContainer\");\n__webpack_require__.$Refresh$.register(_c5, \"LeaveImg\");\n__webpack_require__.$Refresh$.register(_c6, \"Queue\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL1F1ZXVlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQVdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTs7QUF0QkE7QUFDQTs7O0FBREE7QUF3QkEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2NvbXBvbmVudHMvUXVldWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm94LCBJY29uQnV0dG9ufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEpvaW5RdWV1ZUltZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvYm9vc3Rpbmcvam9pbi1xdWV1ZS5wbmcnO1xyXG5pbXBvcnQgTGVhdmVRdWV1ZUltZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvYm9vc3RpbmcvbGVhdmUtcXVldWUucG5nJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tbW9uL1RleHQnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMjYxcHg7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bGVmdDogNjZweDtcclxuXHR3aWR0aDogMjcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBKb2luQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwNHB4O1xyXG5cdGhlaWdodDogNTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEpvaW5JbWcgPSBzdHlsZWQoQm94KWBcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtKb2luUXVldWVJbWd9KSBuby1yZXBlYXQ7XHJcblx0d2lkdGg6IDQ4cHg7XHJcblx0aGVpZ2h0OiAzNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgTGVhdmVDb250YWluZXIgPSBzdHlsZWQoQm94KWBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogMTE1cHg7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAxNTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExlYXZlSW1nID0gc3R5bGVkKEJveClgXHJcblx0YmFja2dyb3VuZDogdXJsKCR7TGVhdmVRdWV1ZUltZ30pIG5vLXJlcGVhdDtcclxuXHR3aWR0aDogNDhweDtcclxuXHRoZWlnaHQ6IDM2cHg7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgUXVldWVQcm9wcyB7XHJcblx0am9pblF1ZXVlSGFuZGxlcjogKCkgPT4gYW55O1xyXG5cdGxlYXZlUXVldWVIYW5kbGVyOiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXVlID0gKHtqb2luUXVldWVIYW5kbGVyLCBsZWF2ZVF1ZXVlSGFuZGxlcn06IFF1ZXVlUHJvcHMpID0+IHtcclxuXHRjb25zdCBzZXRRdWV1ZSA9IHVzZVJlY29pbFZhbHVlKFF1ZVN0YXRlLmluUXVlKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0PEpvaW5Db250YWluZXI+XHJcblx0XHRcdFx0PEljb25CdXR0b24gb25DbGljaz17am9pblF1ZXVlSGFuZGxlcn0+XHJcblx0XHRcdFx0XHQ8Sm9pbkltZyAvPlxyXG5cdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHQ8VGV4dCB0ZXh0QWxpZ249eydjZW50ZXInfSB3aWR0aD17JzEwNHB4J30+XHJcblx0XHRcdFx0XHRKT0lOIFFVRVVFXHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHQ8L0pvaW5Db250YWluZXI+XHJcblx0XHRcdDxMZWF2ZUNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8SWNvbkJ1dHRvbiBvbkNsaWNrPXtsZWF2ZVF1ZXVlSGFuZGxlcn0+XHJcblx0XHRcdFx0XHQ8TGVhdmVJbWcgLz5cclxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0PFRleHQgdGV4dEFsaWduPXsnY2VudGVyJ30gd2lkdGg9eycxMTVweCd9PlxyXG5cdFx0XHRcdFx0TEVBVkUgUVVFVUVcclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdDwvTGVhdmVDb250YWluZXI+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVldWU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/Queue.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d84e60c6df4f9563a887")
/******/ })();
/******/ 
/******/ }
);