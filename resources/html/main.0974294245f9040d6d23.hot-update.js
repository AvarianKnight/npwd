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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItemButton/ListItemButton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/state */ \"./src/apps/property/atoms/state.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\property\\\\components\\\\Home.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst Home = props => {\n  _s();\n\n  const ownedPropertyList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_atoms_state__WEBPACK_IMPORTED_MODULE_2__.PropertyState.property);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    return () => {};\n  }, []);\n\n  const selectHome = home => {\n    console.log(\"🚀 ~ file: Home.tsx ~ line 20 ~ selectHome ~ home\", home);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    sx: {\n      width: '100%',\n      maxWidth: 350\n    },\n    children: ownedPropertyList.map(listItem => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: {\n          color: '#DEBE4D',\n          backgroundColor: 'rgb(248, 248, 248)'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          dense: true,\n          onClick: () => selectHome(listItem),\n          children: listItem.label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 25\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }, undefined);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Home, \"n1KC204W2VxYlCpH8sWoR2Gh6CU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue];\n});\n\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Home\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9wcm9wZXJ0eS9jb21wb25lbnRzL0hvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7OztBQUlBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7O0FBMUJBO0FBQ0E7OztBQURBO0FBNEJBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9wcm9wZXJ0eS9jb21wb25lbnRzL0hvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VOdWlSZXF1ZXN0IH0gZnJvbSAnZml2ZW0tbnVpLXJlYWN0LWxpYic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgT3duZWRQcm9wZXJ0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvcHJvcGVydHknO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eVN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvc3RhdGUnO1xyXG5cclxudHlwZSBQcm9wcyA9IHt9O1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IG93bmVkUHJvcGVydHlMaXN0ID0gdXNlUmVjb2lsVmFsdWUoUHJvcGVydHlTdGF0ZS5wcm9wZXJ0eSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEhvbWUgPSAoaG9tZTogT3duZWRQcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IEhvbWUudHN4IH4gbGluZSAyMCB+IHNlbGVjdEhvbWUgfiBob21lXCIsIGhvbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IHN4PXt7IHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAzNTAgfX0+XHJcbiAgICAgICAgICAgIHtvd25lZFByb3BlcnR5TGlzdC5tYXAoKGxpc3RJdGVtOiBPd25lZFByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17eyBjb2xvcjogJyNERUJFNEQnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDgsIDI0OCknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24gZGVuc2Ugb25DbGljaz17KCkgPT4gc2VsZWN0SG9tZShsaXN0SXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/property/components/Home.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f6aef3fba4ce12415b25")
/******/ })();
/******/ 
/******/ }
);