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

/***/ "./src/apps/bank/components/account/AccountTransactions.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/bank/components/account/AccountTransactions.tsx ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountTransactions\": () => (/* binding */ AccountTransactions)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _hooks_useTransactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useTransactions */ \"./src/apps/bank/hooks/useTransactions.ts\");\n/* harmony import */ var _account_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.styles */ \"./src/apps/bank/components/account/account.styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\bank\\\\components\\\\account\\\\AccountTransactions.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nconst AccountTransactions = () => {\n  _s();\n\n  const classes = (0,_account_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const TransactionTypes = {\n    Deposit: classes.depositType,\n    Withdraw: classes.withdrawType,\n    Transfer: classes.depositType\n  };\n  const transactionList = (0,_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_0__.useTransactions)();\n  console.log(transactionList);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"account-section\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: classes.header,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: classes.title,\n        children: \"Transactions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"actionButton\",\n        className: classes.seeAll,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {\n          to: \"/bank/transactions\",\n          children: \"View Transactions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: classes.transcationDiv,\n      children: transactionList.slice(0, 3).map((transaction, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: classes.transactions,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n            className: classes.tranSource,\n            children: transaction.source\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: classes.tranType,\n            children: transaction.type\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: TransactionTypes[transaction.type],\n            children: [transaction.type === 'Withdraw' ? '-' : '+', transaction.amount]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, undefined)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(AccountTransactions, \"OUJC0CoDKZqecpOm5HtyQlcyZKA=\", false, function () {\n  return [_account_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _hooks_useTransactions__WEBPACK_IMPORTED_MODULE_0__.useTransactions];\n});\n\n_c = AccountTransactions;\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"AccountTransactions\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvYWNjb3VudC9BY2NvdW50VHJhbnNhY3Rpb25zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQkE7O0FBdkNBO0FBQ0E7OztBQURBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvYWNjb3VudC9BY2NvdW50VHJhbnNhY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2FjdGlvbnMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUcmFuc2FjdGlvbnMnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vYWNjb3VudC5zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRUcmFuc2FjdGlvbnMgPSAoKTogYW55ID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFRyYW5zYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBEZXBvc2l0OiBjbGFzc2VzLmRlcG9zaXRUeXBlLFxyXG4gICAgV2l0aGRyYXc6IGNsYXNzZXMud2l0aGRyYXdUeXBlLFxyXG4gICAgVHJhbnNmZXI6IGNsYXNzZXMuZGVwb3NpdFR5cGUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHJhbnNhY3Rpb25MaXN0ID0gdXNlVHJhbnNhY3Rpb25zKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9uTGlzdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJhY2NvdW50LXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5UcmFuc2FjdGlvbnM8L2gyPlxyXG4gICAgICAgIDxCdXR0b24gaWQ9XCJhY3Rpb25CdXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuc2VlQWxsfT5cclxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2JhbmsvdHJhbnNhY3Rpb25zXCI+VmlldyBUcmFuc2FjdGlvbnM8L05hdkxpbms+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudHJhbnNjYXRpb25EaXZ9PlxyXG4gICAgICAgIHt0cmFuc2FjdGlvbkxpc3Quc2xpY2UoMCwgMykubWFwKCh0cmFuc2FjdGlvbjogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50cmFuc2FjdGlvbnN9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudHJhblNvdXJjZX0+e3RyYW5zYWN0aW9uLnNvdXJjZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50cmFuVHlwZX0+e3RyYW5zYWN0aW9uLnR5cGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1RyYW5zYWN0aW9uVHlwZXNbdHJhbnNhY3Rpb24udHlwZV19PlxyXG4gICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLnR5cGUgPT09ICdXaXRoZHJhdycgPyAnLScgOiAnKyd9XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uYW1vdW50fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/bank/components/account/AccountTransactions.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0854d022adfae9fe0f0")
/******/ })();
/******/ 
/******/ }
);