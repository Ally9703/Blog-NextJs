"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[client]/[annee]",{

/***/ "./pages/[client]/[annee].js":
/*!***********************************!*\
  !*** ./pages/[client]/[annee].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ProjetsDuClientFiltre; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CarteDeProjet_CarteDeProjet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CarteDeProjet/CarteDeProjet */ \"./components/CarteDeProjet/CarteDeProjet.js\");\n/* harmony import */ var _components_FiltresDeClient_FiltresDeClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FiltresDeClient/FiltresDeClient */ \"./components/FiltresDeClient/FiltresDeClient.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/alliance/Bureau/NextJs/Blog-NextJs/pages/[client]/[annee].js\",\n    _s = $RefreshSig$();\n\n// Librairie\n\n// Composants\n\n\n\n\nvar __N_SSG = true;\nfunction ProjetsDuClientFiltre(props) {\n  _s();\n\n  var _this = this;\n\n  // Variable\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var nomDuClient = router.query.client;\n  var annee = router.query.annee;\n\n  if (nomDuClient === 'perso') {\n    nomDuClient = \"Projets personnels (\".concat(annee, \")\");\n  } else {\n    nomDuClient = \"Projets de \".concat(nomDuClient, \" (\").concat(annee, \")\");\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: nomDuClient\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_FiltresDeClient_FiltresDeClient__WEBPACK_IMPORTED_MODULE_2__.default, {\n      client: router.query.client,\n      annees: props.annees\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      style: {\n        display: 'grid',\n        gridTemplateColumns: 'repeat(3, 1fr)',\n        gap: '10px',\n        marginTop: '15px'\n      },\n      children: props.projets.map(function (projet) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_CarteDeProjet_CarteDeProjet__WEBPACK_IMPORTED_MODULE_1__.default, {\n          projet: projet\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n} // LA PARTIE SERVEUR AVEC LE PROPS ET LE PATHS\n\n_s(ProjetsDuClientFiltre, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = ProjetsDuClientFiltre;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjetsDuClientFiltre\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bY2xpZW50XS9bYW5uZWVdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTRyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFBQTs7QUFBQTs7QUFDakQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBQ0EsTUFBSU0sV0FBVyxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsTUFBL0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRSxLQUEzQjs7QUFFQSxNQUFJSCxXQUFXLEtBQUssT0FBcEIsRUFBNkI7QUFDekJBLElBQUFBLFdBQVcsaUNBQTBCRyxLQUExQixNQUFYO0FBQ0gsR0FGRCxNQUVPO0FBQ0hILElBQUFBLFdBQVcsd0JBQWlCQSxXQUFqQixlQUFpQ0csS0FBakMsTUFBWDtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSw4REFBQyxnRkFBRDtBQUNJLFlBQU0sRUFBRUQsTUFBTSxDQUFDRSxLQUFQLENBQWFDLE1BRHpCO0FBRUksWUFBTSxFQUFFSixLQUFLLENBQUNNO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQVNJO0FBQ0ksV0FBSyxFQUFFO0FBQ0hDLFFBQUFBLE9BQU8sRUFBRSxNQUROO0FBRUhDLFFBQUFBLG1CQUFtQixFQUFFLGdCQUZsQjtBQUdIQyxRQUFBQSxHQUFHLEVBQUUsTUFIRjtBQUlIQyxRQUFBQSxTQUFTLEVBQUU7QUFKUixPQURYO0FBQUEsZ0JBUUtWLEtBQUssQ0FBQ1csT0FBTixDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE1BQUQ7QUFBQSw0QkFDZiw4REFBQyw0RUFBRDtBQUFlLGdCQUFNLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFsQjtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBLGtCQURKO0FBMkJILEVBRUQ7O0dBekN3QmQ7VUFFTEg7OztLQUZLRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bY2xpZW50XS9bYW5uZWVdLmpzP2I2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFpcmllXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi9oZWxwZXJzL21vbmdvZGInO1xyXG5cclxuLy8gQ29tcG9zYW50c1xyXG5pbXBvcnQgQ2FydGVEZVByb2pldCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcnRlRGVQcm9qZXQvQ2FydGVEZVByb2pldCc7XHJcbmltcG9ydCBGaWx0cmVzRGVDbGllbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWx0cmVzRGVDbGllbnQvRmlsdHJlc0RlQ2xpZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2pldHNEdUNsaWVudEZpbHRyZShwcm9wcykge1xyXG4gICAgLy8gVmFyaWFibGVcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IG5vbUR1Q2xpZW50ID0gcm91dGVyLnF1ZXJ5LmNsaWVudDtcclxuICAgIGNvbnN0IGFubmVlID0gcm91dGVyLnF1ZXJ5LmFubmVlO1xyXG5cclxuICAgIGlmIChub21EdUNsaWVudCA9PT0gJ3BlcnNvJykge1xyXG4gICAgICAgIG5vbUR1Q2xpZW50ID0gYFByb2pldHMgcGVyc29ubmVscyAoJHthbm5lZX0pYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9tRHVDbGllbnQgPSBgUHJvamV0cyBkZSAke25vbUR1Q2xpZW50fSAoJHthbm5lZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT57bm9tRHVDbGllbnR9PC9oMT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGaWx0cmVzICovfVxyXG4gICAgICAgICAgICA8RmlsdHJlc0RlQ2xpZW50XHJcbiAgICAgICAgICAgICAgICBjbGllbnQ9e3JvdXRlci5xdWVyeS5jbGllbnR9XHJcbiAgICAgICAgICAgICAgICBhbm5lZXM9e3Byb3BzLmFubmVlc31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMucHJvamV0cy5tYXAoKHByb2pldCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0ZURlUHJvamV0IHByb2pldD17cHJvamV0fSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7LyogPENhcnRlRGVQcm9qZXQgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJ0ZURlUHJvamV0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydGVEZVByb2pldCAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBMQSBQQVJUSUUgU0VSVkVVUiBBVkVDIExFIFBST1BTIEVUIExFIFBBVEhTXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICAvLyBjb25uZXhpb24gw6AgTW9uZ29EQlxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgLy8gUsOpY3Vww6lyZXIgbGVzIHByb2pldHNcclxuICAgIGNvbnN0IHByb2pldHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZXRzJykuZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgICBsZXQgYXJyYXlQYXRocyA9IHByb2pldHMubWFwKChwcm9qZXQpID0+IHtcclxuICAgICAgICBpZiAocHJvamV0LmNsaWVudCA9PSAnUHJvamV0IHBlcnNvbm5lbCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsncGVyc28nLCBwcm9qZXQuYW5uZWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbcHJvamV0LmNsaWVudCwgcHJvamV0LmFubmVlXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcnJheVBhdGhzID0gWy4uLm5ldyBTZXQoYXJyYXlQYXRocyldO1xyXG4gICAgY29uc3QgZHluYW1pY1BhdGhzID0gYXJyYXlQYXRocy5tYXAoKHBhdGgpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7IGNsaWVudDogcGF0aFswXSwgYW5uZWU6IHBhdGhbMV0udG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpO1xyXG4gICAgY29uc29sZS5sb2coZHluYW1pY1BhdGhzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IGR5bmFtaWNQYXRocyxcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAvLyBMZXMgVmFyaWFibGVzXHJcbiAgICBsZXQgcHJvamV0cztcclxuICAgIGxldCBhbm5lZXM7XHJcbiAgICAvLyBsZXQgY2xpZW50O1xyXG5cclxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xyXG4gICAgbGV0IGNsaWVudFBhcmFtID0gcGFyYW1zLmNsaWVudDtcclxuICAgIGxldCBhbm5lZVBhcmFtID0gK3BhcmFtcy5hbm5lZTtcclxuXHJcbiAgICBpZiAoY2xpZW50UGFyYW0gPT0gJ3BlcnNvJykge1xyXG4gICAgICAgIGNsaWVudFBhcmFtID0gJ1Byb2pldCBwZXJzb25uZWwnO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgICAgICAvLyBSw6ljdXBlcmVyIGxlcyBwcm9qZXRzXHJcbiAgICAgICAgcHJvamV0cyA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZXRzJylcclxuICAgICAgICAgICAgLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgJGFuZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgY2xpZW50OiBjbGllbnRQYXJhbSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgYW5uZWU6IGFubmVlUGFyYW0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgcHJvamV0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamV0cykpO1xyXG5cclxuICAgICAgICBhbm5lZXMgPSBwcm9qZXRzLm1hcCgocHJvamV0cykgPT4gcHJvamV0cy5hbm5lZSk7XHJcbiAgICAgICAgYW5uZWVzID0gWy4uLm5ldyBTZXQoYW5uZWVzKV07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHByb2pldHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHByb2pldHM6IHByb2pldHMsXHJcbiAgICAgICAgICAgIGFubmVlczogYW5uZWVzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDYXJ0ZURlUHJvamV0IiwiRmlsdHJlc0RlQ2xpZW50IiwiUHJvamV0c0R1Q2xpZW50RmlsdHJlIiwicHJvcHMiLCJyb3V0ZXIiLCJub21EdUNsaWVudCIsInF1ZXJ5IiwiY2xpZW50IiwiYW5uZWUiLCJhbm5lZXMiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm1hcmdpblRvcCIsInByb2pldHMiLCJtYXAiLCJwcm9qZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[client]/[annee].js\n");

/***/ })

});