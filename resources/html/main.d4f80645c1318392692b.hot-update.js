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

/***/ "./src/apps/boosting/components/QueuePrompt.tsx":
/*!******************************************************!*\
  !*** ./src/apps/boosting/components/QueuePrompt.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Button */ \"./src/apps/boosting/common/Button.tsx\");\n/* harmony import */ var _common_CarWreckImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CarWreckImage */ \"./src/apps/boosting/common/CarWreckImage.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\QueuePrompt.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst Row = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"])`\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n`;\n_c = Row;\n\nconst QueuePrompt = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(_c2 = _s((props, ref) => {\n  _s();\n\n  const [prompt, setPrompt] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n\n  const closePopupHandler = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      style: {\n        display: 'flex',\n        justifyContent: 'center',\n        flexWrap: 'wrap'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Row, {\n        children: prompt.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Row, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_common_CarWreckImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-evenly',\n        paddingTop: '10px'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        clickHandler: closePopupHandler,\n        text: 'OK'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 3\n  }, undefined);\n}, \"wKNHhVPQmJxLmufBWuHWkcgoETM=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState];\n})), \"wKNHhVPQmJxLmufBWuHWkcgoETM=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState];\n});\n\n_c3 = QueuePrompt;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueuePrompt);\n\nvar _c, _c2, _c3;\n\n__webpack_require__.$Refresh$.register(_c, \"Row\");\n__webpack_require__.$Refresh$.register(_c2, \"QueuePrompt$forwardRef\");\n__webpack_require__.$Refresh$.register(_c3, \"QueuePrompt\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL1F1ZXVlUHJvbXB0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBTUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBeEJBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBMEJBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL1F1ZXVlUHJvbXB0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JveH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbW1vbi9CdXR0b24nO1xuaW1wb3J0IENhcldyZWNrSW1hZ2UgZnJvbSAnLi4vY29tbW9uL0NhcldyZWNrSW1hZ2UnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQoQm94KWBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgUXVldWVQcm9tcHQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG5cdGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xuXG5cdGNvbnN0IGNsb3NlUG9wdXBIYW5kbGVyID0gKCkgPT4ge1xuXHRcdHNldFByb21wdCh7XG5cdFx0XHRtZXNzYWdlOiAnJyxcblx0XHRcdG9wZW46IGZhbHNlLFxuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQsXG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Qm94PlxuXHRcdFx0PEJveCBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4V3JhcDogJ3dyYXAnfX0+XG5cdFx0XHRcdDxSb3c+e3Byb21wdC5tZXNzYWdlfTwvUm93PlxuXHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdDxDYXJXcmVja0ltYWdlIC8+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9Cb3g+XG5cdFx0XHQ8Qm94IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsIHBhZGRpbmdUb3A6ICcxMHB4J319PlxuXHRcdFx0XHQ8QnV0dG9uIGNsaWNrSGFuZGxlcj17Y2xvc2VQb3B1cEhhbmRsZXJ9IHRleHQ9eydPSyd9IC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0JveD5cblx0KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZVByb21wdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/QueuePrompt.tsx\n");

/***/ }),

/***/ "./src/apps/boosting/hooks/useBoosting.tsx":
/*!*************************************************!*\
  !*** ./src/apps/boosting/hooks/useBoosting.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBoosting\": () => (/* binding */ useBoosting)\n/* harmony export */ });\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_QueuePrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/QueuePrompt */ \"./src/apps/boosting/components/QueuePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useBoosting.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\nconst useBoosting = () => {\n  _s();\n\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiRequest)();\n  const setBoostProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_7__.BoostProfileState.profile);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__.PromptState.prompt);\n  const setQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_7__.QueState.inQue);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    if (false) {}\n  }, [send]);\n\n  const joinQueueHandler = () => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have joined the queue.',\n      open: true\n    });\n    setQueue(true);\n  };\n\n  const leaveQueueHandler = () => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_QueuePrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }, undefined),\n      message: 'You have left the queue.',\n      open: true\n    });\n    setQueue(false);\n  };\n\n  const setProfileHandler = data => {\n    setBoostProfile(data.profile);\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LOAD_BOOSTING_PROFILE, setProfileHandler);\n  return {\n    joinQueueHandler,\n    leaveQueueHandler\n  };\n};\n\n_s(useBoosting, \"+DHUMsHj9Me4QeC8KcTbxItEtmQ=\", false, function () {\n  return [fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiRequest, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_1__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.LOAD_BOOSTING_PROFILE,\n  data: {\n    uid: 2,\n    level: 4,\n    experience: '53.4'\n  }\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFyQ0E7QUFDQTs7O0FBc0NBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3RpbmcvaG9va3MvdXNlQm9vc3RpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm9vc3RpbmdFdmVudHMsIEJvb3N0aW5nUHJvZmlsZSwgQk9PU1RJTkdfQVBQfSBmcm9tICdAdHlwaW5ncy9ib29zdGluZyc7XHJcbmltcG9ydCB7dXNlTnVpRXZlbnQsIHVzZU51aVJlcXVlc3R9IGZyb20gJ2ZpdmVtLW51aS1yZWFjdC1saWInO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVNldFJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgSW5qZWN0RGVidWdEYXRhIGZyb20gJy4uLy4uLy4uL29zL2RlYnVnL0luamVjdERlYnVnRGF0YSc7XHJcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XHJcbmltcG9ydCBRdWV1ZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXVlUHJvbXB0JztcclxuaW1wb3J0IHtCb29zdFByb2ZpbGVTdGF0ZSwgUXVlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VCb29zdGluZyA9ICgpID0+IHtcclxuXHRjb25zdCB7c2VuZH0gPSB1c2VOdWlSZXF1ZXN0KCk7XHJcblx0Y29uc3Qgc2V0Qm9vc3RQcm9maWxlID0gdXNlU2V0UmVjb2lsU3RhdGUoQm9vc3RQcm9maWxlU3RhdGUucHJvZmlsZSk7XHJcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcclxuXHRjb25zdCBzZXRRdWV1ZSA9IHVzZVNldFJlY29pbFN0YXRlKFF1ZVN0YXRlLmluUXVlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdFx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLkxPQURfQk9PU1RJTkdfUFJPRklMRSk7XHJcblx0XHR9XHJcblx0fSwgW3NlbmRdKTtcclxuXHJcblx0Y29uc3Qgam9pblF1ZXVlSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPFF1ZXVlUHJvbXB0IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnWW91IGhhdmUgam9pbmVkIHRoZSBxdWV1ZS4nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0XHRzZXRRdWV1ZSh0cnVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsZWF2ZVF1ZXVlSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPFF1ZXVlUHJvbXB0IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnWW91IGhhdmUgbGVmdCB0aGUgcXVldWUuJyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdFx0c2V0UXVldWUoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFByb2ZpbGVIYW5kbGVyID0gKGRhdGE6IEJvb3N0aW5nUHJvZmlsZSkgPT4ge1xyXG5cdFx0c2V0Qm9vc3RQcm9maWxlKGRhdGEucHJvZmlsZSlcclxuXHR9O1xyXG5cclxuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLkxPQURfQk9PU1RJTkdfUFJPRklMRSwgc2V0UHJvZmlsZUhhbmRsZXIpO1xyXG5cclxuXHRyZXR1cm4ge2pvaW5RdWV1ZUhhbmRsZXIsIGxlYXZlUXVldWVIYW5kbGVyfTtcclxufTtcclxuXHJcbkluamVjdERlYnVnRGF0YShcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdGFwcDogQk9PU1RJTkdfQVBQLFxyXG5cdFx0XHRtZXRob2Q6IEJvb3N0aW5nRXZlbnRzLkxPQURfQk9PU1RJTkdfUFJPRklMRSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRsZXZlbDogNCxcclxuXHRcdFx0XHRleHBlcmllbmNlOiAnNTMuNCcsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0NTAwLFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useBoosting.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e542ab6d1a4c53304b79")
/******/ })();
/******/ 
/******/ }
);