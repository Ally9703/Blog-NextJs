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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./helpers/auth.js":
/*!*************************!*\
  !*** ./helpers/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n// Librairie\n\nasync function hashPassword(password) {\n  return await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n}\nasync function verifyPassword(password, hashedPassword) {\n  return await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxlQUFlRSxZQUFmLENBQTRCQyxRQUE1QixFQUFzQztBQUM1QyxTQUFPLE1BQU1ILDhDQUFJLENBQUNHLFFBQUQsRUFBVyxFQUFYLENBQWpCO0FBQ0E7QUFFTSxlQUFlQyxjQUFmLENBQThCRCxRQUE5QixFQUF3Q0UsY0FBeEMsRUFBd0Q7QUFDOUQsU0FBTyxNQUFNSixpREFBTyxDQUFDRSxRQUFELEVBQVdFLGNBQVgsQ0FBcEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vbi1wcmVtaWVyLXByb2pldC1uZXh0Ly4vaGVscGVycy9hdXRoLmpzP2FkOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFpcmllXHJcbmltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcblx0cmV0dXJuIGF3YWl0IGhhc2gocGFzc3dvcmQsIDEyKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xyXG5cdHJldHVybiBhd2FpdCBjb21wYXJlKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImhhc2giLCJjb21wYXJlIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/auth.js\n");

/***/ }),

/***/ "./helpers/mongodb.js":
/*!****************************!*\
  !*** ./helpers/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  // connexion à MongoDB\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://Bless:W7lt0FuKcpTJFiOc@cluster0.kh93b.mongodb.net/portfolio?retryWrites=true&w=majority');\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxlQUFlQyxpQkFBZixHQUFtQztBQUN0QztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBQSxDQUNqQix1R0FEaUIsQ0FBckI7QUFJQSxTQUFPRSxNQUFQO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb24tcHJlbWllci1wcm9qZXQtbmV4dC8uL2hlbHBlcnMvbW9uZ29kYi5qcz83ZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgICAvLyBjb25uZXhpb24gw6AgTW9uZ29EQlxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICAnbW9uZ29kYitzcnY6Ly9CbGVzczpXN2x0MEZ1S2NwVEpGaU9jQGNsdXN0ZXIwLmtoOTNiLm1vbmdvZGIubmV0L3BvcnRmb2xpbz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBjbGllbnQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/mongodb.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/mongodb */ \"./helpers/mongodb.js\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/auth */ \"./helpers/auth.js\");\n// Librairies\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    async authorize(credentials) {\n      const {\n        email,\n        password\n      } = credentials; // Connexion à MongoDB\n\n      const clientMongoDB = await (0,_helpers_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)(); // 1ère étape : l'utilisateur existe-t-il ?\n\n      const utilisateur = await clientMongoDB.db().collection('utilisateurs').findOne({\n        email: email\n      });\n\n      if (!utilisateur) {\n        clientMongoDB.close();\n        throw new Error('Impossible de vous authentifier.');\n      } // 2ème étape : le mot de passe est-il correct avec celui enregistré ?\n\n\n      const isValid = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(password, utilisateur.password);\n\n      if (!isValid) {\n        clientMongoDB.close();\n        throw new Error('Impossible de vous authentifier.');\n      } // Succès\n\n\n      clientMongoDB.close();\n      return {\n        email: utilisateur.email,\n        name: utilisateur.pseudo,\n        id: utilisateur._id,\n        roles: utilisateur.roles\n      };\n    }\n\n  })],\n  callbacks: {\n    jwt: async (token, user) => {\n      user && (token.user = user);\n      return token;\n    },\n    session: async (session, user) => {\n      session.user = user.user;\n      return session;\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUVBQWVBLGdEQUFRLENBQUM7QUFDdkJJLEVBQUFBLFNBQVMsRUFBRSxDQUNWSCxzRUFBQSxDQUFzQjtBQUNyQixVQUFNSyxTQUFOLENBQWdCQyxXQUFoQixFQUE2QjtBQUM1QixZQUFNO0FBQUVDLFFBQUFBLEtBQUY7QUFBU0MsUUFBQUE7QUFBVCxVQUFzQkYsV0FBNUIsQ0FENEIsQ0FHNUI7O0FBQ0EsWUFBTUcsYUFBYSxHQUFHLE1BQU1SLG1FQUFpQixFQUE3QyxDQUo0QixDQU01Qjs7QUFDQSxZQUFNUyxXQUFXLEdBQUcsTUFBTUQsYUFBYSxDQUNyQ0UsRUFEd0IsR0FFeEJDLFVBRndCLENBRWIsY0FGYSxFQUd4QkMsT0FId0IsQ0FHaEI7QUFBRU4sUUFBQUEsS0FBSyxFQUFFQTtBQUFULE9BSGdCLENBQTFCOztBQUtBLFVBQUksQ0FBQ0csV0FBTCxFQUFrQjtBQUNqQkQsUUFBQUEsYUFBYSxDQUFDSyxLQUFkO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQ0wsa0NBREssQ0FBTjtBQUdBLE9BakIyQixDQW1CNUI7OztBQUNBLFlBQU1DLE9BQU8sR0FBRyxNQUFNZCw2REFBYyxDQUNuQ00sUUFEbUMsRUFFbkNFLFdBQVcsQ0FBQ0YsUUFGdUIsQ0FBcEM7O0FBS0EsVUFBSSxDQUFDUSxPQUFMLEVBQWM7QUFDYlAsUUFBQUEsYUFBYSxDQUFDSyxLQUFkO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQ0wsa0NBREssQ0FBTjtBQUdBLE9BOUIyQixDQWdDNUI7OztBQUNBTixNQUFBQSxhQUFhLENBQUNLLEtBQWQ7QUFDQSxhQUFPO0FBQ05QLFFBQUFBLEtBQUssRUFBRUcsV0FBVyxDQUFDSCxLQURiO0FBRU5VLFFBQUFBLElBQUksRUFBRVAsV0FBVyxDQUFDUSxNQUZaO0FBR05DLFFBQUFBLEVBQUUsRUFBRVQsV0FBVyxDQUFDVSxHQUhWO0FBSU5DLFFBQUFBLEtBQUssRUFBRVgsV0FBVyxDQUFDVztBQUpiLE9BQVA7QUFNQTs7QUF6Q29CLEdBQXRCLENBRFUsQ0FEWTtBQThDdkJDLEVBQUFBLFNBQVMsRUFBRTtBQUNWQyxJQUFBQSxHQUFHLEVBQUUsT0FBT0MsS0FBUCxFQUFjQyxJQUFkLEtBQXVCO0FBQzNCQSxNQUFBQSxJQUFJLEtBQUtELEtBQUssQ0FBQ0MsSUFBTixHQUFhQSxJQUFsQixDQUFKO0FBQ0EsYUFBT0QsS0FBUDtBQUNBLEtBSlM7QUFLVkUsSUFBQUEsT0FBTyxFQUFFLE9BQU9BLE9BQVAsRUFBZ0JELElBQWhCLEtBQXlCO0FBQ2pDQyxNQUFBQSxPQUFPLENBQUNELElBQVIsR0FBZUEsSUFBSSxDQUFDQSxJQUFwQjtBQUNBLGFBQU9DLE9BQVA7QUFDQTtBQVJTO0FBOUNZLENBQUQsQ0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb24tcHJlbWllci1wcm9qZXQtbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/OTkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJyYWlyaWVzXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbW9uZ29kYic7XHJcbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hdXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFByb3ZpZGVycy5DcmVkZW50aWFscyh7XHJcblx0XHRcdGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG5cdFx0XHRcdGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcclxuXHJcblx0XHRcdFx0Ly8gQ29ubmV4aW9uIMOgIE1vbmdvREJcclxuXHRcdFx0XHRjb25zdCBjbGllbnRNb25nb0RCID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuXHJcblx0XHRcdFx0Ly8gMcOocmUgw6l0YXBlIDogbCd1dGlsaXNhdGV1ciBleGlzdGUtdC1pbCA/XHJcblx0XHRcdFx0Y29uc3QgdXRpbGlzYXRldXIgPSBhd2FpdCBjbGllbnRNb25nb0RCXHJcblx0XHRcdFx0XHQuZGIoKVxyXG5cdFx0XHRcdFx0LmNvbGxlY3Rpb24oJ3V0aWxpc2F0ZXVycycpXHJcblx0XHRcdFx0XHQuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KTtcclxuXHJcblx0XHRcdFx0aWYgKCF1dGlsaXNhdGV1cikge1xyXG5cdFx0XHRcdFx0Y2xpZW50TW9uZ29EQi5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdFx0XHQnSW1wb3NzaWJsZSBkZSB2b3VzIGF1dGhlbnRpZmllci4nLFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIDLDqG1lIMOpdGFwZSA6IGxlIG1vdCBkZSBwYXNzZSBlc3QtaWwgY29ycmVjdCBhdmVjIGNlbHVpIGVucmVnaXN0csOpID9cclxuXHRcdFx0XHRjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQoXHJcblx0XHRcdFx0XHRwYXNzd29yZCxcclxuXHRcdFx0XHRcdHV0aWxpc2F0ZXVyLnBhc3N3b3JkLFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmICghaXNWYWxpZCkge1xyXG5cdFx0XHRcdFx0Y2xpZW50TW9uZ29EQi5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdFx0XHQnSW1wb3NzaWJsZSBkZSB2b3VzIGF1dGhlbnRpZmllci4nLFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFN1Y2PDqHNcclxuXHRcdFx0XHRjbGllbnRNb25nb0RCLmNsb3NlKCk7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdGVtYWlsOiB1dGlsaXNhdGV1ci5lbWFpbCxcclxuXHRcdFx0XHRcdG5hbWU6IHV0aWxpc2F0ZXVyLnBzZXVkbyxcclxuXHRcdFx0XHRcdGlkOiB1dGlsaXNhdGV1ci5faWQsXHJcblx0XHRcdFx0XHRyb2xlczogdXRpbGlzYXRldXIucm9sZXMsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdF0sXHJcblx0Y2FsbGJhY2tzOiB7XHJcblx0XHRqd3Q6IGFzeW5jICh0b2tlbiwgdXNlcikgPT4ge1xyXG5cdFx0XHR1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XHJcblx0XHRcdHJldHVybiB0b2tlbjtcclxuXHRcdH0sXHJcblx0XHRzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xyXG5cdFx0XHRzZXNzaW9uLnVzZXIgPSB1c2VyLnVzZXI7XHJcblx0XHRcdHJldHVybiBzZXNzaW9uO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ2ZXJpZnlQYXNzd29yZCIsInByb3ZpZGVycyIsIkNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2xpZW50TW9uZ29EQiIsInV0aWxpc2F0ZXVyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNsb3NlIiwiRXJyb3IiLCJpc1ZhbGlkIiwibmFtZSIsInBzZXVkbyIsImlkIiwiX2lkIiwicm9sZXMiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();