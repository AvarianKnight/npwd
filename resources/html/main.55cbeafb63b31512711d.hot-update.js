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

/***/ "./src/apps/boosting/hooks/useContracts.tsx":
/*!**************************************************!*\
  !*** ./src/apps/boosting/hooks/useContracts.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_4__.PromptState.prompt);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 24\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.GET_PLAYERS).then(() => {\n      setPrompt({\n        component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          index: index\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 28\n        }, undefined),\n        message: 'TRADE CONTRACT',\n        open: true\n      });\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 24\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    console.log(contracts[index]);\n  }; //TODO error check for what happens when a player logs out?\n\n\n  const tradeHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract traded!',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract deleted.',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"0JGWJcwAOlWannOAWLK37OfrIak=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__.useSnackbar];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7O0FBcEZBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUNvbnRyYWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7Qk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cywgQ29udHJhY3R9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHt1c2VOdWlFdmVudCwgdXNlTnVpUmVxdWVzdH0gZnJvbSAnZml2ZW0tbnVpLXJlYWN0LWxpYic7XHJcbmltcG9ydCB7Q29udHJhY3RzU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICcuLi8uLi8uLi9vcy9kZWJ1Zy9JbmplY3REZWJ1Z0RhdGEnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQgU3RhcnRQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFByb21wdCc7XHJcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcclxuaW1wb3J0IERlY2xpbmVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9EZWNsaW5lUHJvbXB0JztcclxuaW1wb3J0IHt1c2VTbmFja2Jhcn0gZnJvbSAnQG9zL3NuYWNrYmFyL2hvb2tzL3VzZVNuYWNrYmFyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb250cmFjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29udHJhY3RzLCBzZXRDb250cmFjdHNdID0gdXNlUmVjb2lsU3RhdGUoQ29udHJhY3RzU3RhdGUuY29udHJhY3RzKTtcclxuICAgIGNvbnN0IHNldFByb21wdCA9IHVzZVNldFJlY29pbFN0YXRlKFByb21wdFN0YXRlLnByb21wdCk7XHJcbiAgICBjb25zdCB7c2VuZH0gPSB1c2VOdWlSZXF1ZXN0KCk7XHJcbiAgICBjb25zdCB7YWRkQWxlcnR9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcbiAgICBjb25zdCBzdGFydFByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvbXB0KHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiA8U3RhcnRQcm9tcHQgaW5kZXg9e2luZGV4fS8+LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnQVJFIFlPVSBSRUFEWSBUTyBTVEFSVCBZT1VSIE1JU1NJT04/JyxcclxuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHJhZGVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNlbmQoQm9vc3RpbmdFdmVudHMuR0VUX1BMQVlFUlMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9tcHQoe1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiA8VHJhZGVQcm9tcHQgaW5kZXg9e2luZGV4fS8+LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RSQURFIENPTlRSQUNUJyxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWNsaW5lUHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRQcm9tcHQoe1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IDxEZWNsaW5lUHJvbXB0IGluZGV4PXtpbmRleH0vPixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0FSRSBZT1UgU1VSRSBZT1UgV0FOVCBUTyBUUkFTSCBUSElTIENPTlRSQUNUPycsXHJcbiAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHRjb25zdCBjbG9zZVByb21wdCA9ICgpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0XHRvcGVuOiBmYWxzZSxcclxuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuICAgIC8vVE9ETzogd3JpdGUgVUkgLT4gQ2xpZW50IC0+IFNlcnZpY2UgY29kZSA6OjogZGVjbGluZUhhbmRsZXIgZmlyc3RcclxuICAgIGNvbnN0IHN0YXJ0SGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3RzW2luZGV4XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vVE9ETyBlcnJvciBjaGVjayBmb3Igd2hhdCBoYXBwZW5zIHdoZW4gYSBwbGF5ZXIgbG9ncyBvdXQ/XHJcbiAgICBjb25zdCB0cmFkZUhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNlbmQoQm9vc3RpbmdFdmVudHMuVFJBREVfQ09OVFJBQ1QsIGNvbnRyYWN0c1tpbmRleF0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRyYWN0cygocHJldlN0YXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTdGF0ZS5maWx0ZXIoKGNvbnRyYWN0OiBDb250cmFjdCkgPT4gY29udHJhY3QuaWQgIT09IGNvbnRyYWN0c1tpbmRleF0uaWQpLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkZEFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29udHJhY3QgdHJhZGVkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IGFkZEFsZXJ0KHttZXNzYWdlOiBlcnIsIHR5cGU6ICdlcnJvcid9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlY2xpbmVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZW5kKEJvb3N0aW5nRXZlbnRzLkRFTEVURV9DT05UUkFDVCwgY29udHJhY3RzW2luZGV4XSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udHJhY3RzKChwcmV2U3RhdGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlLmZpbHRlcigoY29udHJhY3Q6IENvbnRyYWN0KSA9PiBjb250cmFjdC5pZCAhPT0gY29udHJhY3RzW2luZGV4XS5pZCksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWRkQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb250cmFjdCBkZWxldGVkLicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IGFkZEFsZXJ0KHttZXNzYWdlOiBlcnIsIHR5cGU6ICdlcnJvcid9KSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXJ0UHJvbXB0LFxyXG4gICAgICAgIHN0YXJ0SGFuZGxlcixcclxuICAgICAgICB0cmFkZVByb21wdCxcclxuICAgICAgICBjbG9zZVByb21wdCxcclxuICAgICAgICB0cmFkZUhhbmRsZXIsXHJcbiAgICAgICAgZGVjbGluZVByb21wdCxcclxuICAgICAgICBkZWNsaW5lSGFuZGxlcixcclxuICAgIH07XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e28faa838cbd17e2dc7c")
/******/ })();
/******/ 
/******/ }
);