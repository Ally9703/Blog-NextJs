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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/mongodb */ \"./helpers/mongodb.js\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/auth */ \"./helpers/auth.js\");\n// Librairies\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    async authorize(credentials) {\n      const {\n        email,\n        password\n      } = credentials; // Connexion à MongoDB\n\n      const clientMongoDB = await (0,_helpers_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)(); // 1ère étape : l'utilisateur existe-t-il ?\n\n      const utilisateur = await clientMongoDB.db().collection('utilisateurs').findOne({\n        email: email\n      });\n\n      if (!utilisateur) {\n        clientMongoDB.close();\n        throw new Error('Impossible de vous authentifier.');\n      } // 2ème étape : le mot de passe est-il correct avec celui enregistré ?\n\n\n      const isValid = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(password, utilisateur.password);\n\n      if (!isValid) {\n        clientMongoDB.close();\n        throw new Error('Impossible de vous authentifier.');\n      } // Succès\n\n\n      clientMongoDB.close();\n      return {\n        email: utilisateur.email,\n        name: utilisateur.pseudo,\n        id: utilisateur.Credentials_id,\n        roles: utilisateur.roles\n      };\n    }\n\n  })],\n  callbacks: {\n    jwt: async (token, user) => {\n      user && (token.user = user);\n      return token;\n    },\n    session: async (session, user) => {\n      session.user = user.user;\n      return session;\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUVBQWVBLGdEQUFRLENBQUM7QUFDcEJJLEVBQUFBLFNBQVMsRUFBRSxDQUNQSCxzRUFBQSxDQUFzQjtBQUNsQixVQUFNSyxTQUFOLENBQWdCQyxXQUFoQixFQUE2QjtBQUN6QixZQUFNO0FBQUVDLFFBQUFBLEtBQUY7QUFBU0MsUUFBQUE7QUFBVCxVQUFzQkYsV0FBNUIsQ0FEeUIsQ0FHekI7O0FBQ0EsWUFBTUcsYUFBYSxHQUFHLE1BQU1SLG1FQUFpQixFQUE3QyxDQUp5QixDQU16Qjs7QUFDQSxZQUFNUyxXQUFXLEdBQUcsTUFBTUQsYUFBYSxDQUNsQ0UsRUFEcUIsR0FFckJDLFVBRnFCLENBRVYsY0FGVSxFQUdyQkMsT0FIcUIsQ0FHYjtBQUFFTixRQUFBQSxLQUFLLEVBQUVBO0FBQVQsT0FIYSxDQUExQjs7QUFLQSxVQUFJLENBQUNHLFdBQUwsRUFBa0I7QUFDZEQsUUFBQUEsYUFBYSxDQUFDSyxLQUFkO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQ0Ysa0NBREUsQ0FBTjtBQUdILE9BakJ3QixDQW1CekI7OztBQUNBLFlBQU1DLE9BQU8sR0FBRyxNQUFNZCw2REFBYyxDQUNoQ00sUUFEZ0MsRUFFaENFLFdBQVcsQ0FBQ0YsUUFGb0IsQ0FBcEM7O0FBS0EsVUFBSSxDQUFDUSxPQUFMLEVBQWM7QUFDVlAsUUFBQUEsYUFBYSxDQUFDSyxLQUFkO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQ0Ysa0NBREUsQ0FBTjtBQUdILE9BOUJ3QixDQWdDekI7OztBQUNBTixNQUFBQSxhQUFhLENBQUNLLEtBQWQ7QUFDQSxhQUFPO0FBQ0hQLFFBQUFBLEtBQUssRUFBRUcsV0FBVyxDQUFDSCxLQURoQjtBQUVIVSxRQUFBQSxJQUFJLEVBQUVQLFdBQVcsQ0FBQ1EsTUFGZjtBQUdIQyxRQUFBQSxFQUFFLEVBQUVULFdBQVcsQ0FBQ1UsY0FIYjtBQUlIQyxRQUFBQSxLQUFLLEVBQUVYLFdBQVcsQ0FBQ1c7QUFKaEIsT0FBUDtBQU1IOztBQXpDaUIsR0FBdEIsQ0FETyxDQURTO0FBOENwQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1BDLElBQUFBLEdBQUcsRUFBRSxPQUFPQyxLQUFQLEVBQWNDLElBQWQsS0FBdUI7QUFDeEJBLE1BQUFBLElBQUksS0FBS0QsS0FBSyxDQUFDQyxJQUFOLEdBQWFBLElBQWxCLENBQUo7QUFDQSxhQUFPRCxLQUFQO0FBQ0gsS0FKTTtBQUtQRSxJQUFBQSxPQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQkQsSUFBaEIsS0FBeUI7QUFDOUJDLE1BQUFBLE9BQU8sQ0FBQ0QsSUFBUixHQUFlQSxJQUFJLENBQUNBLElBQXBCO0FBQ0EsYUFBT0MsT0FBUDtBQUNIO0FBUk07QUE5Q1MsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vbi1wcmVtaWVyLXByb2pldC1uZXh0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnJhaXJpZXNcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tb25nb2RiJztcclxuaW1wb3J0IHsgdmVyaWZ5UGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2F1dGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29ubmV4aW9uIMOgIE1vbmdvREJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudE1vbmdvREIgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDHDqHJlIMOpdGFwZSA6IGwndXRpbGlzYXRldXIgZXhpc3RlLXQtaWwgP1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXRpbGlzYXRldXIgPSBhd2FpdCBjbGllbnRNb25nb0RCXHJcbiAgICAgICAgICAgICAgICAgICAgLmRiKClcclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbigndXRpbGlzYXRldXJzJylcclxuICAgICAgICAgICAgICAgICAgICAuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxpc2F0ZXVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50TW9uZ29EQi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ltcG9zc2libGUgZGUgdm91cyBhdXRoZW50aWZpZXIuJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMsOobWUgw6l0YXBlIDogbGUgbW90IGRlIHBhc3NlIGVzdC1pbCBjb3JyZWN0IGF2ZWMgY2VsdWkgZW5yZWdpc3Ryw6kgP1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE1vbmdvREIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbXBvc3NpYmxlIGRlIHZvdXMgYXV0aGVudGlmaWVyLidcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIGNsaWVudE1vbmdvREIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHV0aWxpc2F0ZXVyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHV0aWxpc2F0ZXVyLnBzZXVkbyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXRpbGlzYXRldXIuQ3JlZGVudGlhbHNfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZXM6IHV0aWxpc2F0ZXVyLnJvbGVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBqd3Q6IGFzeW5jICh0b2tlbiwgdXNlcikgPT4ge1xyXG4gICAgICAgICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHVzZXIudXNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJjb25uZWN0VG9EYXRhYmFzZSIsInZlcmlmeVBhc3N3b3JkIiwicHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJjbGllbnRNb25nb0RCIiwidXRpbGlzYXRldXIiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJFcnJvciIsImlzVmFsaWQiLCJuYW1lIiwicHNldWRvIiwiaWQiLCJDcmVkZW50aWFsc19pZCIsInJvbGVzIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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