"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ajouter",{

/***/ "./pages/ajouter/index.js":
/*!********************************!*\
  !*** ./pages/ajouter/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ajouter; }\n/* harmony export */ });\n/* harmony import */ var _home_alliance_Bureau_NextJs_Blog_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/alliance/Bureau/NextJs/Blog-NextJs/pages/ajouter/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alliance_Bureau_NextJs_Blog_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Les Librairies\n\n\n\n\nfunction Ajouter() {\n  _s();\n\n  // Variables\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.formState.errors; // Les Méthodes\n\n\n  var onSubmitedHandeler = function onSubmitedHandeler(data) {\n    console.log(data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"Ajouter un article\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"Ajouter un projet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n      style: {\n        display: 'flex',\n        justifyContent: 'center'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n        style: {\n          backgroundColor: '#f3f3f3',\n          padding: '30px'\n        },\n        children: [(errors.titre || errors.slug || errors.client || errors.annee || errors.descrition || errors.contenu) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          style: {\n            margin: '15px 0 15px 0',\n            backgroundColor: 'red',\n            color: 'white',\n            padding: '10px'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n          onSubmit: handleSubmit(onSubmitedHandeler),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n              htmlFor: \"titre\",\n              children: \"Titre\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread({\n              id: \"titre\",\n              placeholder: \"Titre du projet\",\n              style: {\n                display: 'block',\n                width: '400px',\n                border: '1px solid gray',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px',\n                marginTop: '5px'\n              }\n            }, register('titre', {\n              required: true\n            })), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n              htmlFor: \"slug\",\n              children: \"Slug\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread({\n              id: \"slug\",\n              placeholder: \"Slug du projet\",\n              style: {\n                display: 'block',\n                width: '400px',\n                border: '1px solid gray',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px',\n                marginTop: '5px'\n              }\n            }, register('slug', {\n              required: true\n            })), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n              htmlFor: \"client\",\n              children: \"CLient\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread({\n              id: \"client\",\n              placeholder: \"Tclient associ\\xE9 au projet\",\n              style: {\n                display: 'block',\n                width: '400px',\n                border: '1px solid gray',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px',\n                marginTop: '5px'\n              }\n            }, register('client', {\n              required: true\n            })), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n              htmlFor: \"annee\",\n              children: \"Ann\\xE9e\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread({\n              id: \"annee\",\n              placeholder: \"Ann\\xE9e de cr\\xE9ation du projet\",\n              style: {\n                display: 'block',\n                width: '400px',\n                border: '1px solid gray',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px',\n                marginTop: '5px'\n              }\n            }, register('annee', {\n              required: true\n            })), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n              htmlFor: \"description\",\n              children: \"Description\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"textarea\", _objectSpread({\n              id: \"description\",\n              placeholder: \"Description du projet\",\n              rows: \"5\",\n              style: {\n                display: 'block',\n                width: '400px',\n                border: '1px solid gray',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px',\n                marginTop: '5px',\n                fontFamily: 'arial'\n              }\n            }, register('description', {\n              required: true\n            })), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n              htmlFor: \"contenu\",\n              children: \"Contenu\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"textarea\", _objectSpread({\n              id: \"contenu\",\n              placeholder: \"Contenu du projet\",\n              rows: \"5\",\n              style: {\n                display: 'block',\n                width: '400px',\n                border: '1px solid gray',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px',\n                marginTop: '5px',\n                fontFamily: 'arial  '\n              }\n            }, register('contenu', {\n              required: true\n            })), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            style: {\n              display: 'flex',\n              justifyContent: 'end'\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              style: {\n                boder: 0,\n                backgroundColor: '#ee6c4d',\n                color: 'white',\n                padding: '10px 15px 10px 15px',\n                borderRadius: '5px'\n              },\n              children: \"Ajouter\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 173,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 167,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Ajouter, \"RyzdsH99oRiC6Tk17zdHQ1P7Rik=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm];\n});\n\n_c = Ajouter;\n\nvar _c;\n\n$RefreshReg$(_c, \"Ajouter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFFLEtBTlI7QUFPSEUsZ0JBQUFBLFVBQVUsRUFBRTtBQVBUO0FBSlgsZUFhUXpCLFFBQVEsQ0FBQyxTQUFELEVBQVk7QUFDcEJ3QixjQUFBQSxRQUFRLEVBQUU7QUFEVSxhQUFaLENBYmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBHSixlQXdISTtBQUNJLGlCQUFLLEVBQUU7QUFDSGhCLGNBQUFBLE9BQU8sRUFBRSxNQUROO0FBRUhDLGNBQUFBLGNBQWMsRUFBRTtBQUZiLGFBRFg7QUFBQSxtQ0FNSTtBQUNJLG1CQUFLLEVBQUU7QUFDSGlCLGdCQUFBQSxLQUFLLEVBQUUsQ0FESjtBQUVIaEIsZ0JBQUFBLGVBQWUsRUFBRSxTQUZkO0FBR0hTLGdCQUFBQSxLQUFLLEVBQUUsT0FISjtBQUlIUixnQkFBQUEsT0FBTyxFQUFFLHFCQUpOO0FBS0hXLGdCQUFBQSxZQUFZLEVBQUU7QUFMWCxlQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQSxrQkFESjtBQTZLSDs7R0F6THVCdkI7VUFNaEJEOzs7S0FOZ0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fqb3V0ZXIvaW5kZXguanM/ZGJmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZXMgTGlicmFpcmllc1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBam91dGVyKCkge1xuICAgIC8vIFZhcmlhYmxlc1xuICAgIGNvbnN0IHtcbiAgICAgICAgcmVnaXN0ZXIsXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIH0gPSB1c2VGb3JtKCk7XG5cbiAgICAvLyBMZXMgTcOpdGhvZGVzXG4gICAgY29uc3Qgb25TdWJtaXRlZEhhbmRlbGVyID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFqb3V0ZXIgdW4gYXJ0aWNsZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aDE+QWpvdXRlciB1biBwcm9qZXQ8L2gxPlxuICAgICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtYWluXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjNmM2YzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoZXJyb3JzLnRpdHJlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuc2x1ZyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmNsaWVudCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmFubmVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZGVzY3JpdGlvbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmNvbnRlbnUpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxNXB4IDAgMTVweCAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0ZWRIYW5kZWxlcil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpdHJlJz5UaXRyZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0aXRyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RpdHJlIGR1IHByb2pldCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3RpdHJlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdzbHVnJz5TbHVnPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NsdWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTbHVnIGR1IHByb2pldCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3NsdWcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NsaWVudCc+Q0xpZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NsaWVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RjbGllbnQgYXNzb2Npw6kgYXUgcHJvamV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMTVweCAxMHB4IDE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY2xpZW50Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdhbm5lZSc+QW5uw6llPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2FubmVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQW5uw6llIGRlIGNyw6lhdGlvbiBkdSBwcm9qZXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNXB4IDEwcHggMTVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdhbm5lZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uIGR1IHByb2pldCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz0nNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdkZXNjcmlwdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NvbnRlbnUnPkNvbnRlbnU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29udGVudSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbnRlbnUgZHUgcHJvamV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMTVweCAxMHB4IDE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnYXJpYWwgICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29udGVudScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZGVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlNmM0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBam91dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRm9ybSIsIkFqb3V0ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0ZWRIYW5kZWxlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInRpdHJlIiwic2x1ZyIsImNsaWVudCIsImFubmVlIiwiZGVzY3JpdGlvbiIsImNvbnRlbnUiLCJtYXJnaW4iLCJjb2xvciIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwicmVxdWlyZWQiLCJmb250RmFtaWx5IiwiYm9kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ajouter/index.js\n");

/***/ })

});