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

/***/ "./src/apps/bank/components/BankApp.tsx":
/*!**********************************************!*\
  !*** ./src/apps/bank/components/BankApp.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BankApp\": () => (/* binding */ BankApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/styles/makeStyles */ \"./node_modules/@mui/styles/makeStyles/makeStyles.js\");\n/* harmony import */ var _BankTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BankTitle */ \"./src/apps/bank/components/BankTitle.tsx\");\n/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/components */ \"./src/ui/components/index.tsx\");\n/* harmony import */ var _ui_components_AppContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ui/components/AppContent */ \"./src/ui/components/AppContent.tsx\");\n/* harmony import */ var _BankApp_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BankApp.css */ \"./src/apps/bank/components/BankApp.css\");\n/* harmony import */ var _transfers_TransferModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfers/TransferModal */ \"./src/apps/bank/components/transfers/TransferModal.tsx\");\n/* harmony import */ var _hooks_useBankModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useBankModal */ \"./src/apps/bank/hooks/useBankModal.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _navigation_NavigationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/NavigationBar */ \"./src/apps/bank/components/navigation/NavigationBar.tsx\");\n/* harmony import */ var _home_BankHome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/BankHome */ \"./src/apps/bank/components/home/BankHome.tsx\");\n/* harmony import */ var _account_BankAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/BankAccount */ \"./src/apps/bank/components/account/BankAccount.tsx\");\n/* harmony import */ var _transactions_TransactionList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transactions/TransactionList */ \"./src/apps/bank/components/transactions/TransactionList.tsx\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _typings_bank__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @typings/bank */ \"../typings/bank.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\bank\\\\components\\\\BankApp.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_11__[\"default\"])([{\n  app: 'BANK',\n  method: 'setCredentials',\n  data: {\n    name: 'Firstname Lastname',\n    balance: 2000\n  }\n}, {\n  app: 'BANK',\n  method: 'setTransaction',\n  data: [{\n    id: 1,\n    amount: 200,\n    type: 'Deposit',\n    source: 'chip'\n  }, {\n    id: 2,\n    amount: 200,\n    type: 'Withdraw',\n    source: 'chip'\n  }, {\n    id: 3,\n    amount: 200,\n    type: 'Withdraw',\n    source: 'chip'\n  }, {\n    id: 4,\n    amount: 50,\n    type: 'Deposit',\n    source: 'chip'\n  }, {\n    id: 4,\n    amount: 50,\n    type: 'Deposit',\n    source: 'chip'\n  }, {\n    id: 4,\n    amount: 50,\n    type: 'Deposit',\n    source: 'chip'\n  }]\n}]);\nconst useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(theme => ({\n  root: {\n    height: '90px',\n    display: 'flex',\n    justifyContent: 'center',\n    backgroundColor: '#fb8c00',\n    alignItems: 'center'\n  },\n  header: {\n    fontFamily: \"'Bebas Neue', cursive\",\n    textAlign: 'center',\n    fontSize: 50\n  },\n  backgroundModal: {\n    background: 'black',\n    opacity: '0.6',\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0,\n    zIndex: 5\n  }\n}));\nconst BankApp = () => {\n  _s();\n\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_12__.useNuiRequest)();\n  const {\n    showBankModal\n  } = (0,_hooks_useBankModal__WEBPACK_IMPORTED_MODULE_6__.useBankModal)();\n  const classes = useStyles();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    send(_typings_bank__WEBPACK_IMPORTED_MODULE_13__.BankEvents.GET_CREDENTIALS);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ui_components__WEBPACK_IMPORTED_MODULE_2__.AppWrapper, {\n    id: \"bank-app\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_BankTitle__WEBPACK_IMPORTED_MODULE_1__.BankTitle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_transfers_TransferModal__WEBPACK_IMPORTED_MODULE_5__.TransferModal, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"div\", {\n      className: showBankModal ? classes.backgroundModal : undefined\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ui_components_AppContent__WEBPACK_IMPORTED_MODULE_3__.AppContent, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Switch, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {\n          path: \"/bank\",\n          exact: true,\n          component: _home_BankHome__WEBPACK_IMPORTED_MODULE_8__.BankHome\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {\n          path: \"/bank/account\",\n          exact: true,\n          component: _account_BankAccount__WEBPACK_IMPORTED_MODULE_9__.BankAccount\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {\n          path: \"/bank/transactions\",\n          exact: true,\n          component: _transactions_TransactionList__WEBPACK_IMPORTED_MODULE_10__.TransactionList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_navigation_NavigationBar__WEBPACK_IMPORTED_MODULE_7__.NavigationBar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(BankApp, \"tuuH6ZYdWjcdhkGIArfEz/IwST4=\", false, function () {\n  return [fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_12__.useNuiRequest, _hooks_useBankModal__WEBPACK_IMPORTED_MODULE_6__.useBankModal, useStyles];\n});\n\n_c = BankApp;\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"BankApp\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvQmFua0FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFsQ0E7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWJBO0FBeUJBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7O0FBeEJBO0FBQ0E7OztBQURBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvQmFua0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG11aS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB7IEJhbmtUaXRsZSB9IGZyb20gJy4vQmFua1RpdGxlJztcclxuaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gJ0B1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQXBwQ29udGVudCB9IGZyb20gJ0B1aS9jb21wb25lbnRzL0FwcENvbnRlbnQnO1xyXG5pbXBvcnQgJy4vQmFua0FwcC5jc3MnO1xyXG5pbXBvcnQgeyBUcmFuc2Zlck1vZGFsIH0gZnJvbSAnLi90cmFuc2ZlcnMvVHJhbnNmZXJNb2RhbCc7XHJcblxyXG5pbXBvcnQgeyB1c2VCYW5rTW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2VCYW5rTW9kYWwnO1xyXG5cclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyIH0gZnJvbSAnLi9uYXZpZ2F0aW9uL05hdmlnYXRpb25CYXInO1xyXG5cclxuaW1wb3J0IHsgQmFua0hvbWUgfSBmcm9tICcuL2hvbWUvQmFua0hvbWUnO1xyXG5pbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gJy4vYWNjb3VudC9CYW5rQWNjb3VudCc7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uTGlzdCB9IGZyb20gJy4vdHJhbnNhY3Rpb25zL1RyYW5zYWN0aW9uTGlzdCc7XHJcbmltcG9ydCBJbmplY3REZWJ1Z0RhdGEgZnJvbSAnLi4vLi4vLi4vb3MvZGVidWcvSW5qZWN0RGVidWdEYXRhJztcclxuaW1wb3J0IHsgdXNlTnVpUmVxdWVzdCB9IGZyb20gJ2ZpdmVtLW51aS1yZWFjdC1saWInO1xyXG5pbXBvcnQgeyBCYW5rRXZlbnRzIH0gZnJvbSAnQHR5cGluZ3MvYmFuayc7XHJcblxyXG5JbmplY3REZWJ1Z0RhdGEoW1xyXG4gIHtcclxuICAgIGFwcDogJ0JBTksnLFxyXG4gICAgbWV0aG9kOiAnc2V0Q3JlZGVudGlhbHMnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBuYW1lOiAnRmlyc3RuYW1lIExhc3RuYW1lJyxcclxuICAgICAgYmFsYW5jZTogMjAwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBhcHA6ICdCQU5LJyxcclxuICAgIG1ldGhvZDogJ3NldFRyYW5zYWN0aW9uJyxcclxuICAgIGRhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGFtb3VudDogMjAwLFxyXG4gICAgICAgIHR5cGU6ICdEZXBvc2l0JyxcclxuICAgICAgICBzb3VyY2U6ICdjaGlwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGFtb3VudDogMjAwLFxyXG4gICAgICAgIHR5cGU6ICdXaXRoZHJhdycsXHJcbiAgICAgICAgc291cmNlOiAnY2hpcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBhbW91bnQ6IDIwMCxcclxuICAgICAgICB0eXBlOiAnV2l0aGRyYXcnLFxyXG4gICAgICAgIHNvdXJjZTogJ2NoaXAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgYW1vdW50OiA1MCxcclxuICAgICAgICB0eXBlOiAnRGVwb3NpdCcsXHJcbiAgICAgICAgc291cmNlOiAnY2hpcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBhbW91bnQ6IDUwLFxyXG4gICAgICAgIHR5cGU6ICdEZXBvc2l0JyxcclxuICAgICAgICBzb3VyY2U6ICdjaGlwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIGFtb3VudDogNTAsXHJcbiAgICAgICAgdHlwZTogJ0RlcG9zaXQnLFxyXG4gICAgICAgIHNvdXJjZTogJ2NoaXAnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzkwcHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZiOGMwMCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgZm9udEZhbWlseTogXCInQmViYXMgTmV1ZScsIGN1cnNpdmVcIixcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogNTAsXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kTW9kYWw6IHtcclxuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICBvcGFjaXR5OiAnMC42JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgekluZGV4OiA1LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBCYW5rQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2VuZCB9ID0gdXNlTnVpUmVxdWVzdCgpO1xyXG4gIGNvbnN0IHsgc2hvd0JhbmtNb2RhbCB9ID0gdXNlQmFua01vZGFsKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2VuZChCYW5rRXZlbnRzLkdFVF9DUkVERU5USUFMUyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcFdyYXBwZXIgaWQ9XCJiYW5rLWFwcFwiPlxyXG4gICAgICA8QmFua1RpdGxlIC8+XHJcbiAgICAgIDxUcmFuc2Zlck1vZGFsIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93QmFua01vZGFsID8gY2xhc3Nlcy5iYWNrZ3JvdW5kTW9kYWwgOiB1bmRlZmluZWR9IC8+XHJcbiAgICAgIDxBcHBDb250ZW50PlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9iYW5rXCIgZXhhY3QgY29tcG9uZW50PXtCYW5rSG9tZX0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2JhbmsvYWNjb3VudFwiIGV4YWN0IGNvbXBvbmVudD17QmFua0FjY291bnR9IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9iYW5rL3RyYW5zYWN0aW9uc1wiIGV4YWN0IGNvbXBvbmVudD17VHJhbnNhY3Rpb25MaXN0fSAvPlxyXG4gICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICA8L0FwcENvbnRlbnQ+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XHJcbiAgICA8L0FwcFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/bank/components/BankApp.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("025ba9ddb0c41ddc78d5")
/******/ })();
/******/ 
/******/ }
);