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

/***/ "./src/apps/property/hooks/useProperty.ts":
/*!************************************************!*\
  !*** ./src/apps/property/hooks/useProperty.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useProperty\": () => (/* binding */ useProperty)\n/* harmony export */ });\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\nconst useProperty = () => {\n  _s();\n\n  const [property, setProperty] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)();\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiRequest)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    send(\"npwd:sendOwnedPropertiesToPhone\");\n  }, []);\n\n  const propertyHandler = ownedProperties => {\n    console.log(\"🚀 ~ file: useProperty.ts ~ line 11 ~ propertyHandler ~ ownedProperties\", ownedProperties); // send('pma-property-manager:sendToPhone');\n    // send(DarkMarketEvents.INIATE_TRADE, trade).then(() => {\n    //     setNotifyDisplay(false);\n    //     setTrade((state) => ({ ...state, playerId: '', amount: '' }));\n    //   });\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiEvent)('PROPERTY', 'npwd:getOwnedProperties', propertyHandler); //   useNuiEvent('DARKMARKET', DarkMarketEvents.SHOW_CRYPTO_UI, crypto.setCrypto);\n  //   useNuiEvent('DARKMARKET', DarkMarketEvents.SEND_NOTIFICATION, setNotification);\n  //   useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_SUCCESS, alertSuccessHandler);\n  //   useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_FAILURE, alertFailHandler);\n};\n\n_s(useProperty, \"O99jnShnm9WtIMzrG5I6IAXRdCU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_2__.useSnackbar, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiRequest, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiEvent];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9wcm9wZXJ0eS9ob29rcy91c2VQcm9wZXJ0eS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQTVCQTtBQUNBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9wcm9wZXJ0eS9ob29rcy91c2VQcm9wZXJ0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPd25lZFByb3BlcnR5IH0gZnJvbSAnLi8uLi8uLi8uLi8uLi8uLi90eXBpbmdzL3Byb3BlcnR5JztcclxuaW1wb3J0IHsgdXNlTnVpRXZlbnQsIHVzZU51aVJlcXVlc3QgfSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHsgc2VuZCB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vLi4vb3Mvc25hY2tiYXIvaG9va3MvdXNlU25hY2tiYXInO1xyXG5pbXBvcnQgeyB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvcGVydHkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcHJvcGVydHksIHNldFByb3BlcnR5XSA9IHVzZVNldFJlY29pbFN0YXRlKClcclxuICAgIGNvbnN0IHsgYWRkQWxlcnQgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgICBjb25zdCB7IHNlbmQgfSA9IHVzZU51aVJlcXVlc3QoKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2VuZChcIm5wd2Q6c2VuZE93bmVkUHJvcGVydGllc1RvUGhvbmVcIik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgcHJvcGVydHlIYW5kbGVyID0gKG93bmVkUHJvcGVydGllczogT3duZWRQcm9wZXJ0eVtdKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogdXNlUHJvcGVydHkudHMgfiBsaW5lIDExIH4gcHJvcGVydHlIYW5kbGVyIH4gb3duZWRQcm9wZXJ0aWVzXCIsIG93bmVkUHJvcGVydGllcyk7XHJcblxyXG5cclxuICAgICAgICAvLyBzZW5kKCdwbWEtcHJvcGVydHktbWFuYWdlcjpzZW5kVG9QaG9uZScpO1xyXG4gICAgICAgIC8vIHNlbmQoRGFya01hcmtldEV2ZW50cy5JTklBVEVfVFJBREUsIHRyYWRlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgc2V0Tm90aWZ5RGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgLy8gICAgIHNldFRyYWRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIHBsYXllcklkOiAnJywgYW1vdW50OiAnJyB9KSk7XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlTnVpRXZlbnQoJ1BST1BFUlRZJywgJ25wd2Q6Z2V0T3duZWRQcm9wZXJ0aWVzJywgcHJvcGVydHlIYW5kbGVyKTtcclxuICAgIC8vICAgdXNlTnVpRXZlbnQoJ0RBUktNQVJLRVQnLCBEYXJrTWFya2V0RXZlbnRzLlNIT1dfQ1JZUFRPX1VJLCBjcnlwdG8uc2V0Q3J5cHRvKTtcclxuICAgIC8vICAgdXNlTnVpRXZlbnQoJ0RBUktNQVJLRVQnLCBEYXJrTWFya2V0RXZlbnRzLlNFTkRfTk9USUZJQ0FUSU9OLCBzZXROb3RpZmljYXRpb24pO1xyXG5cclxuICAgIC8vICAgdXNlTnVpRXZlbnQoJ0RBUktNQVJLRVQnLCBEYXJrTWFya2V0RXZlbnRzLkFMRVJUX1NVQ0NFU1MsIGFsZXJ0U3VjY2Vzc0hhbmRsZXIpO1xyXG4gICAgLy8gICB1c2VOdWlFdmVudCgnREFSS01BUktFVCcsIERhcmtNYXJrZXRFdmVudHMuQUxFUlRfRkFJTFVSRSwgYWxlcnRGYWlsSGFuZGxlcik7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/property/hooks/useProperty.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c05bb34c9fb9d414d6d")
/******/ })();
/******/ 
/******/ }
);