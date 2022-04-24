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

/***/ "./src/apps/bank/components/transactions/TransactionList.tsx":
/*!*******************************************************************!*\
  !*** ./src/apps/bank/components/transactions/TransactionList.tsx ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionList\": () => (/* binding */ TransactionList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _bank_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.styles */ \"./src/apps/bank/components/bank.styles.ts\");\n/* harmony import */ var _hooks_useTransactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTransactions */ \"./src/apps/bank/hooks/useTransactions.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\bank\\\\components\\\\transactions\\\\TransactionList.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\nconst TransactionList = () => {\n  _s();\n\n  const transactionList = (0,_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_2__.useTransactions)();\n  const classes = (0,_bank_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);\n  const TransactionTypes = {\n    Deposit: classes.depositType,\n    Withdraw: classes.withdrawType,\n    Transfer: classes.depositType\n  };\n\n  const handleChangePage = (event, newPage) => {\n    setPage(newPage);\n  };\n\n  const handleChangeRowsPerPage = event => {\n    setRowsPerPage(+event.target.value);\n    setPage(0);\n  };\n\n  console.log(transactionList);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    id: \"transaction-section\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: classes.header,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        className: classes.title,\n        children: \"Transactions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: classes.transcationDiv,\n      children: transactionList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(transaction => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: classes.transactions,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\",\n            align\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            className: classes.tranSource,\n            children: transaction.source\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: classes.tranType,\n            children: transaction.type\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 17\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: TransactionTypes[transaction.type],\n            children: [transaction.type === 'Withdraw' ? '-' : '+', transaction.amount]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(TransactionList, \"l3tO/AB9n1RE21K5eaaR38vj6hc=\", false, function () {\n  return [_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_2__.useTransactions, _bank_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = TransactionList;\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"TransactionList\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL1RyYW5zYWN0aW9uTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5QkE7O0FBaERBO0FBQ0E7OztBQURBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL1RyYW5zYWN0aW9uTGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4uL2Jhbmsuc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlUGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zYWN0aW9ucyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRyYW5zYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25MaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uTGlzdCA9IHVzZVRyYW5zYWN0aW9ucygpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xyXG5cclxuICBjb25zdCBUcmFuc2FjdGlvblR5cGVzID0ge1xyXG4gICAgRGVwb3NpdDogY2xhc3Nlcy5kZXBvc2l0VHlwZSxcclxuICAgIFdpdGhkcmF3OiBjbGFzc2VzLndpdGhkcmF3VHlwZSxcclxuICAgIFRyYW5zZmVyOiBjbGFzc2VzLmRlcG9zaXRUeXBlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UGFnZSgwKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbkxpc3QpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0cmFuc2FjdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+VHJhbnNhY3Rpb25zPC9oMj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50cmFuc2NhdGlvbkRpdn0+XHJcbiAgICAgICAge3RyYW5zYWN0aW9uTGlzdFxyXG4gICAgICAgICAgLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAubWFwKCh0cmFuc2FjdGlvbjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRyYW5zYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWdufX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRyYW5Tb3VyY2V9Pnt0cmFuc2FjdGlvbi5zb3VyY2V9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50cmFuVHlwZX0+e3RyYW5zYWN0aW9uLnR5cGV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1RyYW5zYWN0aW9uVHlwZXNbdHJhbnNhY3Rpb24udHlwZV19PlxyXG4gICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24udHlwZSA9PT0gJ1dpdGhkcmF3JyA/ICctJyA6ICcrJ31cclxuICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/bank/components/transactions/TransactionList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c3126624deeb89dd6685")
/******/ })();
/******/ 
/******/ }
);