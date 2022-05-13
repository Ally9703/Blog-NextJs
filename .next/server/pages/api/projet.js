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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/mongodb */ \"./helpers/mongodb.js\");\n// Librairie\n\nasync function handler(req, res) {\n  if (req.method == 'POST') {\n    const {\n      titre,\n      slug,\n      client,\n      annee,\n      description,\n      contenu\n    } = req.body; // Vérifier que tous les champs soient remplis\n\n    if (!titre || !slug || !client || !annee || !description || !contenu) {\n      res.status(422).json({\n        message: 'Champ du formulaire manquant.'\n      });\n      return;\n    } // Stocker le nouveau projet\n\n\n    const nouveauProjet = {\n      titre,\n      slug,\n      client,\n      annee,\n      description,\n      contenu,\n      dateDePublication: new Date()\n    }; // Connexion à MongoDB\n\n    let clientMongoDB;\n\n    try {\n      clientMongoDB = await (0,_helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    } catch (error) {\n      res.status(500).json({\n        message: \"Impossible d'effectuer la requête.\"\n      });\n      return;\n    }\n\n    const db = clientMongoDB.db(); // Insérer un nouveau projet\n\n    try {\n      await db.collection('projets').insertOne(nouveauProjet);\n    } catch (error) {\n      clientMongoDB.close();\n      res.status(500).json({\n        message: 'Un problème est survenue.'\n      });\n    } // Succès\n\n\n    clientMongoDB.close();\n    res.status(201).json({\n      message: 'Projet ajouté avec succès.',\n      projet: nouveauProjet\n    });\n  }\n\n  res.status(405).json({\n    message: 'Une erreur est survenue.'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvamV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosSUFBYyxNQUFsQixFQUEwQjtBQUN6QixVQUFNO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUEsSUFBVDtBQUFlQyxNQUFBQSxNQUFmO0FBQXVCQyxNQUFBQSxLQUF2QjtBQUE4QkMsTUFBQUEsV0FBOUI7QUFBMkNDLE1BQUFBO0FBQTNDLFFBQ0xSLEdBQUcsQ0FBQ1MsSUFETCxDQUR5QixDQUl6Qjs7QUFDQSxRQUNDLENBQUNOLEtBQUQsSUFDQSxDQUFDQyxJQURELElBRUEsQ0FBQ0MsTUFGRCxJQUdBLENBQUNDLEtBSEQsSUFJQSxDQUFDQyxXQUpELElBS0EsQ0FBQ0MsT0FORixFQU9FO0FBQ0RQLE1BQUFBLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3BCQyxRQUFBQSxPQUFPLEVBQUU7QUFEVyxPQUFyQjtBQUdBO0FBQ0EsS0FqQndCLENBbUJ6Qjs7O0FBQ0EsVUFBTUMsYUFBYSxHQUFHO0FBQ3JCVixNQUFBQSxLQURxQjtBQUVyQkMsTUFBQUEsSUFGcUI7QUFHckJDLE1BQUFBLE1BSHFCO0FBSXJCQyxNQUFBQSxLQUpxQjtBQUtyQkMsTUFBQUEsV0FMcUI7QUFNckJDLE1BQUFBLE9BTnFCO0FBT3JCTSxNQUFBQSxpQkFBaUIsRUFBRSxJQUFJQyxJQUFKO0FBUEUsS0FBdEIsQ0FwQnlCLENBOEJ6Qjs7QUFDQSxRQUFJQyxhQUFKOztBQUNBLFFBQUk7QUFDSEEsTUFBQUEsYUFBYSxHQUFHLE1BQU1sQixtRUFBaUIsRUFBdkM7QUFDQSxLQUZELENBRUUsT0FBT21CLEtBQVAsRUFBYztBQUNmaEIsTUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDcEJDLFFBQUFBLE9BQU8sRUFBRTtBQURXLE9BQXJCO0FBR0E7QUFDQTs7QUFFRCxVQUFNTSxFQUFFLEdBQUdGLGFBQWEsQ0FBQ0UsRUFBZCxFQUFYLENBekN5QixDQTJDekI7O0FBQ0EsUUFBSTtBQUNILFlBQU1BLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFBeUJDLFNBQXpCLENBQW1DUCxhQUFuQyxDQUFOO0FBQ0EsS0FGRCxDQUVFLE9BQU9JLEtBQVAsRUFBYztBQUNmRCxNQUFBQSxhQUFhLENBQUNLLEtBQWQ7QUFDQXBCLE1BQUFBLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3BCQyxRQUFBQSxPQUFPLEVBQUU7QUFEVyxPQUFyQjtBQUdBLEtBbkR3QixDQXFEekI7OztBQUNBSSxJQUFBQSxhQUFhLENBQUNLLEtBQWQ7QUFDQXBCLElBQUFBLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3BCQyxNQUFBQSxPQUFPLEVBQUUsNEJBRFc7QUFFcEJVLE1BQUFBLE1BQU0sRUFBRVQ7QUFGWSxLQUFyQjtBQUlBOztBQUNEWixFQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNwQkMsSUFBQUEsT0FBTyxFQUFFO0FBRFcsR0FBckI7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vbi1wcmVtaWVyLXByb2pldC1uZXh0Ly4vcGFnZXMvYXBpL3Byb2pldC5qcz9kZjRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnJhaXJpZVxyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0aWYgKHJlcS5tZXRob2QgPT0gJ1BPU1QnKSB7XHJcblx0XHRjb25zdCB7IHRpdHJlLCBzbHVnLCBjbGllbnQsIGFubmVlLCBkZXNjcmlwdGlvbiwgY29udGVudSB9ID1cclxuXHRcdFx0cmVxLmJvZHk7XHJcblxyXG5cdFx0Ly8gVsOpcmlmaWVyIHF1ZSB0b3VzIGxlcyBjaGFtcHMgc29pZW50IHJlbXBsaXNcclxuXHRcdGlmIChcclxuXHRcdFx0IXRpdHJlIHx8XHJcblx0XHRcdCFzbHVnIHx8XHJcblx0XHRcdCFjbGllbnQgfHxcclxuXHRcdFx0IWFubmVlIHx8XHJcblx0XHRcdCFkZXNjcmlwdGlvbiB8fFxyXG5cdFx0XHQhY29udGVudVxyXG5cdFx0KSB7XHJcblx0XHRcdHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuXHRcdFx0XHRtZXNzYWdlOiAnQ2hhbXAgZHUgZm9ybXVsYWlyZSBtYW5xdWFudC4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFN0b2NrZXIgbGUgbm91dmVhdSBwcm9qZXRcclxuXHRcdGNvbnN0IG5vdXZlYXVQcm9qZXQgPSB7XHJcblx0XHRcdHRpdHJlLFxyXG5cdFx0XHRzbHVnLFxyXG5cdFx0XHRjbGllbnQsXHJcblx0XHRcdGFubmVlLFxyXG5cdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0Y29udGVudSxcclxuXHRcdFx0ZGF0ZURlUHVibGljYXRpb246IG5ldyBEYXRlKCksXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIENvbm5leGlvbiDDoCBNb25nb0RCXHJcblx0XHRsZXQgY2xpZW50TW9uZ29EQjtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNsaWVudE1vbmdvREIgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiSW1wb3NzaWJsZSBkJ2VmZmVjdHVlciBsYSByZXF1w6p0ZS5cIixcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkYiA9IGNsaWVudE1vbmdvREIuZGIoKTtcclxuXHJcblx0XHQvLyBJbnPDqXJlciB1biBub3V2ZWF1IHByb2pldFxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgZGIuY29sbGVjdGlvbigncHJvamV0cycpLmluc2VydE9uZShub3V2ZWF1UHJvamV0KTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNsaWVudE1vbmdvREIuY2xvc2UoKTtcclxuXHRcdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG5cdFx0XHRcdG1lc3NhZ2U6ICdVbiBwcm9ibMOobWUgZXN0IHN1cnZlbnVlLicsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFN1Y2PDqHNcclxuXHRcdGNsaWVudE1vbmdvREIuY2xvc2UoKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ1Byb2pldCBham91dMOpIGF2ZWMgc3VjY8Oocy4nLFxyXG5cdFx0XHRwcm9qZXQ6IG5vdXZlYXVQcm9qZXQsXHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVzLnN0YXR1cyg0MDUpLmpzb24oe1xyXG5cdFx0bWVzc2FnZTogJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlLicsXHJcblx0fSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRpdHJlIiwic2x1ZyIsImNsaWVudCIsImFubmVlIiwiZGVzY3JpcHRpb24iLCJjb250ZW51IiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibm91dmVhdVByb2pldCIsImRhdGVEZVB1YmxpY2F0aW9uIiwiRGF0ZSIsImNsaWVudE1vbmdvREIiLCJlcnJvciIsImRiIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImNsb3NlIiwicHJvamV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/projet.js\n");

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