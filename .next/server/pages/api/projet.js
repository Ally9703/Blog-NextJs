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
exports.id = "pages/api/projet";
exports.ids = ["pages/api/projet"];
exports.modules = {

/***/ "./helpers/mongodb.js":
/*!****************************!*\
  !*** ./helpers/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  // connexion à MongoDB\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://Bless:W7lt0FuKcpTJFiOc@cluster0.kh93b.mongodb.net/portfolio?retryWrites=true&w=majority');\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxlQUFlQyxpQkFBZixHQUFtQztBQUN0QztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBQSxDQUNqQix1R0FEaUIsQ0FBckI7QUFJQSxTQUFPRSxNQUFQO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb24tcHJlbWllci1wcm9qZXQtbmV4dC8uL2hlbHBlcnMvbW9uZ29kYi5qcz83ZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgICAvLyBjb25uZXhpb24gw6AgTW9uZ29EQlxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICAgICdtb25nb2RiK3NydjovL0JsZXNzOlc3bHQwRnVLY3BUSkZpT2NAY2x1c3RlcjAua2g5M2IubW9uZ29kYi5uZXQvcG9ydGZvbGlvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgICApO1xuXG4gICAgcmV0dXJuIGNsaWVudDtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/mongodb.js\n");

/***/ }),

/***/ "./pages/api/projet.js":
/*!*****************************!*\
  !*** ./pages/api/projet.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/mongodb */ \"./helpers/mongodb.js\");\n// Librairie\n\nasync function handler(req, res) {\n  const {\n    titre,\n    slug,\n    client,\n    annee,\n    description,\n    contenu\n  } = req.body; // Vérifier que tous les champs soient remplis\n\n  if (!titre || !slug || !client || !annee || !description || !contenu) {\n    res.status(422).json({\n      message: 'Champ du formulaire manquant.'\n    });\n    return;\n  } // Stocker le nouveau projet\n\n\n  const nouveauProjet = {\n    titre,\n    slug,\n    client,\n    annee,\n    description,\n    contenu,\n    dateDePublication: new Date()\n  }; // Connexion à MongoDB\n\n  let clientMongoDB;\n\n  try {\n    clientMongoDB = await (0,_helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n  } catch (error) {\n    res.status(500).json({\n      message: \"Impossible d'effectuer la requête.\"\n    });\n    return;\n  }\n\n  const db = clientMongoDB.db(); // Insérer un nouveau projet\n\n  try {\n    await db.collection('projets').insertOne(nouveauProjet);\n  } catch (error) {\n    clientMongoDB.close();\n    res.status(500).json({\n      message: 'Un problème est survenu.'\n    });\n  } // Succès\n\n\n  clientMongoDB.close();\n  res.status(201).json({\n    message: 'Projet ajouté avec succès.',\n    projet: nouveauProjet\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvamV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM1QyxRQUFNO0FBQUVDLElBQUFBLEtBQUY7QUFBU0MsSUFBQUEsSUFBVDtBQUFlQyxJQUFBQSxNQUFmO0FBQXVCQyxJQUFBQSxLQUF2QjtBQUE4QkMsSUFBQUEsV0FBOUI7QUFBMkNDLElBQUFBO0FBQTNDLE1BQ0ZQLEdBQUcsQ0FBQ1EsSUFEUixDQUQ0QyxDQUk1Qzs7QUFDQSxNQUNJLENBQUNOLEtBQUQsSUFDQSxDQUFDQyxJQURELElBRUEsQ0FBQ0MsTUFGRCxJQUdBLENBQUNDLEtBSEQsSUFJQSxDQUFDQyxXQUpELElBS0EsQ0FBQ0MsT0FOTCxFQU9FO0FBQ0VOLElBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxNQUFBQSxPQUFPLEVBQUU7QUFEUSxLQUFyQjtBQUdBO0FBQ0gsR0FqQjJDLENBbUI1Qzs7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHO0FBQ2xCVixJQUFBQSxLQURrQjtBQUVsQkMsSUFBQUEsSUFGa0I7QUFHbEJDLElBQUFBLE1BSGtCO0FBSWxCQyxJQUFBQSxLQUprQjtBQUtsQkMsSUFBQUEsV0FMa0I7QUFNbEJDLElBQUFBLE9BTmtCO0FBT2xCTSxJQUFBQSxpQkFBaUIsRUFBRSxJQUFJQyxJQUFKO0FBUEQsR0FBdEIsQ0FwQjRDLENBOEI1Qzs7QUFDQSxNQUFJQyxhQUFKOztBQUNBLE1BQUk7QUFDQUEsSUFBQUEsYUFBYSxHQUFHLE1BQU1qQixtRUFBaUIsRUFBdkM7QUFDSCxHQUZELENBRUUsT0FBT2tCLEtBQVAsRUFBYztBQUNaZixJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsTUFBQUEsT0FBTyxFQUFFO0FBRFEsS0FBckI7QUFHQTtBQUNIOztBQUVELFFBQU1NLEVBQUUsR0FBR0YsYUFBYSxDQUFDRSxFQUFkLEVBQVgsQ0F6QzRDLENBMkM1Qzs7QUFDQSxNQUFJO0FBQ0EsVUFBTUEsRUFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUF5QkMsU0FBekIsQ0FBbUNQLGFBQW5DLENBQU47QUFDSCxHQUZELENBRUUsT0FBT0ksS0FBUCxFQUFjO0FBQ1pELElBQUFBLGFBQWEsQ0FBQ0ssS0FBZDtBQUNBbkIsSUFBQUEsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLE1BQUFBLE9BQU8sRUFBRTtBQURRLEtBQXJCO0FBR0gsR0FuRDJDLENBcUQ1Qzs7O0FBQ0FJLEVBQUFBLGFBQWEsQ0FBQ0ssS0FBZDtBQUNBbkIsRUFBQUEsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLElBQUFBLE9BQU8sRUFBRSw0QkFEUTtBQUVqQlUsSUFBQUEsTUFBTSxFQUFFVDtBQUZTLEdBQXJCO0FBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb24tcHJlbWllci1wcm9qZXQtbmV4dC8uL3BhZ2VzL2FwaS9wcm9qZXQuanM/ZGY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJyYWlyaWVcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9tb25nb2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdGl0cmUsIHNsdWcsIGNsaWVudCwgYW5uZWUsIGRlc2NyaXB0aW9uLCBjb250ZW51IH0gPVxuICAgICAgICByZXEuYm9keTtcblxuICAgIC8vIFbDqXJpZmllciBxdWUgdG91cyBsZXMgY2hhbXBzIHNvaWVudCByZW1wbGlzXG4gICAgaWYgKFxuICAgICAgICAhdGl0cmUgfHxcbiAgICAgICAgIXNsdWcgfHxcbiAgICAgICAgIWNsaWVudCB8fFxuICAgICAgICAhYW5uZWUgfHxcbiAgICAgICAgIWRlc2NyaXB0aW9uIHx8XG4gICAgICAgICFjb250ZW51XG4gICAgKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdDaGFtcCBkdSBmb3JtdWxhaXJlIG1hbnF1YW50LicsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RvY2tlciBsZSBub3V2ZWF1IHByb2pldFxuICAgIGNvbnN0IG5vdXZlYXVQcm9qZXQgPSB7XG4gICAgICAgIHRpdHJlLFxuICAgICAgICBzbHVnLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIGFubmVlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY29udGVudSxcbiAgICAgICAgZGF0ZURlUHVibGljYXRpb246IG5ldyBEYXRlKCksXG4gICAgfTtcblxuICAgIC8vIENvbm5leGlvbiDDoCBNb25nb0RCXG4gICAgbGV0IGNsaWVudE1vbmdvREI7XG4gICAgdHJ5IHtcbiAgICAgICAgY2xpZW50TW9uZ29EQiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJJbXBvc3NpYmxlIGQnZWZmZWN0dWVyIGxhIHJlcXXDqnRlLlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRiID0gY2xpZW50TW9uZ29EQi5kYigpO1xuXG4gICAgLy8gSW5zw6lyZXIgdW4gbm91dmVhdSBwcm9qZXRcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZXRzJykuaW5zZXJ0T25lKG5vdXZlYXVQcm9qZXQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNsaWVudE1vbmdvREIuY2xvc2UoKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ1VuIHByb2Jsw6htZSBlc3Qgc3VydmVudS4nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTdWNjw6hzXG4gICAgY2xpZW50TW9uZ29EQi5jbG9zZSgpO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ1Byb2pldCBham91dMOpIGF2ZWMgc3VjY8Oocy4nLFxuICAgICAgICBwcm9qZXQ6IG5vdXZlYXVQcm9qZXQsXG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidGl0cmUiLCJzbHVnIiwiY2xpZW50IiwiYW5uZWUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnUiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJub3V2ZWF1UHJvamV0IiwiZGF0ZURlUHVibGljYXRpb24iLCJEYXRlIiwiY2xpZW50TW9uZ29EQiIsImVycm9yIiwiZGIiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiY2xvc2UiLCJwcm9qZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/projet.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/projet.js"));
module.exports = __webpack_exports__;

})();