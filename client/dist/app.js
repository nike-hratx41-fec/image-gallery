/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// import React from \"react\";\n// import 'bootstrap/dist/css/bootstrap.min.css';\n// import './styles/index.css';\n// import ReactDOM from \"react-dom\";\n// import ImageGallery from \"./components/ImageGallery.jsx\";\n// import Title from \"./components/Title.jsx\";\n// import ColorSelector from \"./components/ColorSelector.jsx\";\n// import SizeSelector from \"./components/SizeSelector.jsx\";\n// import CartFavoriteButtons from \"./components/CartFavoriteButtons.jsx\";\n// import Description from \"./components/Description.jsx\";\n\n// const initialState = {\n//   sku: \"CJ0066-900\",\n//   isFavorite: false,\n//   color: '',\n//   size: null\n// };\n\n// // export default ImageGallery;\n// ReactDOM.render(\n//   <Title sku={initialState.sku} />,\n//   document.getElementById(\"title\")\n// );\n// ReactDOM.render(\n//   <ImageGallery sku={initialState.sku} />,\n//   document.getElementById(\"image-gallery\")\n// );\n// ReactDOM.render(\n//   <ColorSelector sku={initialState.sku} />,\n//   document.getElementById(\"color-selector\")\n// );\n// ReactDOM.render(\n//   <SizeSelector sku={initialState.sku} />,\n//   document.getElementById(\"size-selector\")\n// );\n// ReactDOM.render(\n//   <CartFavoriteButtons sku={initialState.sku} />,\n//   document.getElementById(\"cart-favorite-buttons\")\n// );\n// ReactDOM.render(\n//   <Description sku={initialState.sku} />,\n//   document.getElementById(\"description\")\n// );\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2luZGV4LmpzeD9mNTE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbi8vIGltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gXCIuL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5LmpzeFwiO1xuLy8gaW1wb3J0IFRpdGxlIGZyb20gXCIuL2NvbXBvbmVudHMvVGl0bGUuanN4XCI7XG4vLyBpbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tIFwiLi9jb21wb25lbnRzL0NvbG9yU2VsZWN0b3IuanN4XCI7XG4vLyBpbXBvcnQgU2l6ZVNlbGVjdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvU2l6ZVNlbGVjdG9yLmpzeFwiO1xuLy8gaW1wb3J0IENhcnRGYXZvcml0ZUJ1dHRvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9DYXJ0RmF2b3JpdGVCdXR0b25zLmpzeFwiO1xuLy8gaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvRGVzY3JpcHRpb24uanN4XCI7XG5cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbi8vICAgc2t1OiBcIkNKMDA2Ni05MDBcIixcbi8vICAgaXNGYXZvcml0ZTogZmFsc2UsXG4vLyAgIGNvbG9yOiAnJyxcbi8vICAgc2l6ZTogbnVsbFxuLy8gfTtcblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgSW1hZ2VHYWxsZXJ5O1xuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gICA8VGl0bGUgc2t1PXtpbml0aWFsU3RhdGUuc2t1fSAvPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKVxuLy8gKTtcbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPEltYWdlR2FsbGVyeSBza3U9e2luaXRpYWxTdGF0ZS5za3V9IC8+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWdhbGxlcnlcIilcbi8vICk7XG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxDb2xvclNlbGVjdG9yIHNrdT17aW5pdGlhbFN0YXRlLnNrdX0gLz4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3Itc2VsZWN0b3JcIilcbi8vICk7XG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxTaXplU2VsZWN0b3Igc2t1PXtpbml0aWFsU3RhdGUuc2t1fSAvPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaXplLXNlbGVjdG9yXCIpXG4vLyApO1xuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gICA8Q2FydEZhdm9yaXRlQnV0dG9ucyBza3U9e2luaXRpYWxTdGF0ZS5za3V9IC8+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtZmF2b3JpdGUtYnV0dG9uc1wiKVxuLy8gKTtcbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPERlc2NyaXB0aW9uIHNrdT17aW5pdGlhbFN0YXRlLnNrdX0gLz4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIilcbi8vICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9pbmRleC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);