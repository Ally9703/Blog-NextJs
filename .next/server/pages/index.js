"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/alliance/Bureau/NextJs/Blog-NextJs/pages/index.js\";\n// Les Librairies\n\n\nfunction Index(props) {\n  // const [prixBitcoin, setPrixBitcoin] = useState('En chargement');\n  // useEffect(() => {\n  //     fetch('https://blockchain.info/ticker')\n  //         .then((response) => response.json())\n  //         .then((data) => setPrixBitcoin(data.EUR.last));\n  // }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Bienvenue sur mon portfolio\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: [props.prixBitcoin, \" $\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\nasync function getStaticProps() {\n  let bitcoinEnEuro;\n  await fetch('https://blockchain.info/ticker').then(response => response.json()).then(data => bitcoinEnEuro = data.USD.last);\n  return {\n    props: {\n      prixBitcoin: bitcoinEnEuro\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxpQkFBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7QUFDTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ25DLE1BQUlDLGFBQUo7QUFDQSxRQUFNQyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNEQyxJQURDLENBQ0tDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRGxCLEVBRURGLElBRkMsQ0FFS0csSUFBRCxJQUFXTCxhQUFhLEdBQUdLLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxJQUZ4QyxDQUFOO0FBR0EsU0FBTztBQUNIVixJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsV0FBVyxFQUFFRTtBQURWO0FBREosR0FBUDtBQUtIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uLXByZW1pZXItcHJvamV0LW5leHQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIExlcyBMaWJyYWlyaWVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgLy8gY29uc3QgW3ByaXhCaXRjb2luLCBzZXRQcml4Qml0Y29pbl0gPSB1c2VTdGF0ZSgnRW4gY2hhcmdlbWVudCcpO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBmZXRjaCgnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vdGlja2VyJylcclxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRQcml4Qml0Y29pbihkYXRhLkVVUi5sYXN0KSk7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxPkJpZW52ZW51ZSBzdXIgbW9uIHBvcnRmb2xpbzwvaDE+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5wcml4Qml0Y29pbn0gJDwvcD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGxldCBiaXRjb2luRW5FdXJvO1xyXG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL3RpY2tlcicpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IChiaXRjb2luRW5FdXJvID0gZGF0YS5VU0QubGFzdCkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcml4Qml0Y29pbjogYml0Y29pbkVuRXVybyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmRleCIsInByb3BzIiwicHJpeEJpdGNvaW4iLCJnZXRTdGF0aWNQcm9wcyIsImJpdGNvaW5FbkV1cm8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiVVNEIiwibGFzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();