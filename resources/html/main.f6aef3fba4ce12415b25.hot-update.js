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

/***/ "./src/apps/property/components/Home.tsx":
/*!***********************************************!*\
  !*** ./src/apps/property/components/Home.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItemButton/ListItemButton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/state */ \"./src/apps/property/atoms/state.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\property\\\\components\\\\Home.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst Home = props => {\n  _s();\n\n  const ownedPropertyList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_atoms_state__WEBPACK_IMPORTED_MODULE_2__.PropertyState.property);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    return () => {};\n  }, []);\n\n  const selectHome = home => {\n    console.log(\"🚀 ~ file: Home.tsx ~ line 20 ~ selectHome ~ home\", home);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    sx: {\n      width: '100%',\n      maxWidth: 350\n    },\n    children: ownedPropertyList.map(listItem => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: {\n          color: '#DEBE4D',\n          backgroundColor: 'rgb(248, 248, 248)',\n          borderRadius: '10px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          dense: true,\n          onClick: () => selectHome(listItem),\n          children: listItem.label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 25\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }, undefined);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Home, \"n1KC204W2VxYlCpH8sWoR2Gh6CU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue];\n});\n\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Home\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9wcm9wZXJ0eS9jb21wb25lbnRzL0hvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7OztBQUlBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTs7QUExQkE7QUFDQTs7O0FBREE7QUE0QkEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL3Byb3BlcnR5L2NvbXBvbmVudHMvSG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZU51aVJlcXVlc3QgfSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBPd25lZFByb3BlcnR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFByb3BlcnR5U3RhdGUgfSBmcm9tICcuLi9hdG9tcy9zdGF0ZSc7XHJcblxyXG50eXBlIFByb3BzID0ge307XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgb3duZWRQcm9wZXJ0eUxpc3QgPSB1c2VSZWNvaWxWYWx1ZShQcm9wZXJ0eVN0YXRlLnByb3BlcnR5KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0SG9tZSA9IChob21lOiBPd25lZFByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogSG9tZS50c3ggfiBsaW5lIDIwIH4gc2VsZWN0SG9tZSB+IGhvbWVcIiwgaG9tZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3Qgc3g9e3sgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6IDM1MCB9fT5cclxuICAgICAgICAgICAge293bmVkUHJvcGVydHlMaXN0Lm1hcCgobGlzdEl0ZW06IE93bmVkUHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7IGNvbG9yOiAnI0RFQkU0RCcsIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0OCwgMjQ4KScsIGJvcmRlclJhZGl1czogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24gZGVuc2Ugb25DbGljaz17KCkgPT4gc2VsZWN0SG9tZShsaXN0SXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/property/components/Home.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d2d5206910c530a4cb1")
/******/ })();
/******/ 
/******/ }
);