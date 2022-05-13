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
exports.id = "pages/api/inscription";
exports.ids = ["pages/api/inscription"];
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

/***/ "./pages/api/inscription.js":
/*!**********************************!*\
  !*** ./pages/api/inscription.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/mongodb */ \"./helpers/mongodb.js\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/auth */ \"./helpers/auth.js\");\n// Librairies\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      pseudo,\n      email\n    } = req.body;\n    let {\n      password\n    } = req.body; // 1ère étape : Vérifier que tous les champs soient remplis\n\n    if (!pseudo || !email || !password) {\n      res.status(422).json({\n        message: 'Champ du formulaire manquant.'\n      });\n      return;\n    } // Etape intermédiaire indispensable : sécuriser le mot de passe\n\n\n    password = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(password); // 2ème étape : Stocker le nouvel utilisateur\n\n    const nouvelUtilisateur = {\n      pseudo,\n      email,\n      password,\n      roles: ['utilisateur']\n    }; // 3ème étape : Vérifier la syntaxe de l'email\n\n    const pattern = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n    if (!pattern.test(email)) {\n      res.status(406).json({\n        message: 'Votre adresse email est invalide.'\n      });\n    } // Connexion à MongoDB\n\n\n    let clientMongoDB;\n\n    try {\n      clientMongoDB = await (0,_helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    } catch (error) {\n      res.status(500).json({\n        message: \"Impossible d'effectuer la requête.\"\n      });\n      return;\n    }\n\n    const db = clientMongoDB.db();\n    let emailDejaUtilise; // 4ème étape : Vérifier que l'adresse email n'est pas utilisée\n\n    try {\n      emailDejaUtilise = await db.collection('utilisateurs').findOne({\n        email: email\n      });\n    } catch (error) {\n      clientMongoDB.close();\n      res.status(500).json({\n        message: 'Un problème est survenu.'\n      });\n      return;\n    }\n\n    if (emailDejaUtilise) {\n      clientMongoDB.close();\n      res.status(403).json({\n        message: 'Cette adresse email est déjà utilisée.'\n      });\n      return;\n    } // 5ème étape : Insérer un nouvel utilisateur\n\n\n    try {\n      await db.collection('utilisateurs').insertOne(nouvelUtilisateur);\n    } catch (error) {\n      clientMongoDB.close();\n      res.status(500).json({\n        message: 'Un problème est survenu.'\n      });\n      return;\n    } // Succès\n\n\n    clientMongoDB.close();\n    res.status(201).json({\n      message: 'Utilisateur enregistré avec succès.',\n      utilisateur: nouvelUtilisateur\n    });\n  } else {\n    res.status(405).json({\n      message: 'Une erreur est survenue.'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBaEIsQ0FBcUI7QUFDakJDLFFBQUFBLE9BQU8sRUFBRTtBQURRLE9BQXJCO0FBR0E7QUFDSCxLQTlFc0IsQ0FnRnZCOzs7QUFDQUssSUFBQUEsYUFBYSxDQUFDTSxLQUFkO0FBQ0FuQixJQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsTUFBQUEsT0FBTyxFQUFFLHFDQURRO0FBRWpCYSxNQUFBQSxXQUFXLEVBQUVaO0FBRkksS0FBckI7QUFJSCxHQXRGRCxNQXNGTztBQUNIVCxJQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsTUFBQUEsT0FBTyxFQUFFO0FBRFEsS0FBckI7QUFHSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uLXByZW1pZXItcHJvamV0LW5leHQvLi9wYWdlcy9hcGkvaW5zY3JpcHRpb24uanM/YTEzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJyYWlyaWVzXHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9tb25nb2RiJztcclxuaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hdXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7IHBzZXVkbywgZW1haWwgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGxldCB7IHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgLy8gMcOocmUgw6l0YXBlIDogVsOpcmlmaWVyIHF1ZSB0b3VzIGxlcyBjaGFtcHMgc29pZW50IHJlbXBsaXNcclxuICAgICAgICBpZiAoIXBzZXVkbyB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDaGFtcCBkdSBmb3JtdWxhaXJlIG1hbnF1YW50LicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFdGFwZSBpbnRlcm3DqWRpYWlyZSBpbmRpc3BlbnNhYmxlIDogc8OpY3VyaXNlciBsZSBtb3QgZGUgcGFzc2VcclxuICAgICAgICBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIC8vIDLDqG1lIMOpdGFwZSA6IFN0b2NrZXIgbGUgbm91dmVsIHV0aWxpc2F0ZXVyXHJcbiAgICAgICAgY29uc3Qgbm91dmVsVXRpbGlzYXRldXIgPSB7XHJcbiAgICAgICAgICAgIHBzZXVkbyxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICByb2xlczogWyd1dGlsaXNhdGV1ciddLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIDPDqG1lIMOpdGFwZSA6IFbDqXJpZmllciBsYSBzeW50YXhlIGRlIGwnZW1haWxcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID1cclxuICAgICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QoZW1haWwpKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA2KS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdWb3RyZSBhZHJlc3NlIGVtYWlsIGVzdCBpbnZhbGlkZS4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbm5leGlvbiDDoCBNb25nb0RCXHJcbiAgICAgICAgbGV0IGNsaWVudE1vbmdvREI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2xpZW50TW9uZ29EQiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbXBvc3NpYmxlIGQnZWZmZWN0dWVyIGxhIHJlcXXDqnRlLlwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnRNb25nb0RCLmRiKCk7XHJcbiAgICAgICAgbGV0IGVtYWlsRGVqYVV0aWxpc2U7XHJcblxyXG4gICAgICAgIC8vIDTDqG1lIMOpdGFwZSA6IFbDqXJpZmllciBxdWUgbCdhZHJlc3NlIGVtYWlsIG4nZXN0IHBhcyB1dGlsaXPDqWVcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBlbWFpbERlamFVdGlsaXNlID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCd1dGlsaXNhdGV1cnMnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmRPbmUoeyBlbWFpbDogZW1haWwgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY2xpZW50TW9uZ29EQi5jbG9zZSgpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW4gcHJvYmzDqG1lIGVzdCBzdXJ2ZW51LicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW1haWxEZWphVXRpbGlzZSkge1xyXG4gICAgICAgICAgICBjbGllbnRNb25nb0RCLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDZXR0ZSBhZHJlc3NlIGVtYWlsIGVzdCBkw6lqw6AgdXRpbGlzw6llLicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA1w6htZSDDqXRhcGUgOiBJbnPDqXJlciB1biBub3V2ZWwgdXRpbGlzYXRldXJcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYlxyXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3V0aWxpc2F0ZXVycycpXHJcbiAgICAgICAgICAgICAgICAuaW5zZXJ0T25lKG5vdXZlbFV0aWxpc2F0ZXVyKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjbGllbnRNb25nb0RCLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbiBwcm9ibMOobWUgZXN0IHN1cnZlbnUuJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN1Y2PDqHNcclxuICAgICAgICBjbGllbnRNb25nb0RCLmNsb3NlKCk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVXRpbGlzYXRldXIgZW5yZWdpc3Ryw6kgYXZlYyBzdWNjw6hzLicsXHJcbiAgICAgICAgICAgIHV0aWxpc2F0ZXVyOiBub3V2ZWxVdGlsaXNhdGV1cixcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUuJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYXNoUGFzc3dvcmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHNldWRvIiwiZW1haWwiLCJib2R5IiwicGFzc3dvcmQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5vdXZlbFV0aWxpc2F0ZXVyIiwicm9sZXMiLCJwYXR0ZXJuIiwidGVzdCIsImNsaWVudE1vbmdvREIiLCJlcnJvciIsImRiIiwiZW1haWxEZWphVXRpbGlzZSIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJpbnNlcnRPbmUiLCJ1dGlsaXNhdGV1ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/inscription.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/inscription.js"));
module.exports = __webpack_exports__;

})();