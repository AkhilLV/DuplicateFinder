/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser-js/directories.js":
/*!***************************************!*\
  !*** ./src/browser-js/directories.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const directories = new Set();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (directories);


/***/ }),

/***/ "./src/browser-js/dom.js":
/*!*******************************!*\
  !*** ./src/browser-js/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dom = {
  selectDirectoryBtn: document.getElementById("select-directory"),
  searchDirectoriesBtn: document.getElementById("search-directories"),
  selectedDirectoriesDisplay: document.getElementById("selected-directories"),
  searchResultsDisplay: document.getElementById("search-results"),

  clearAndInsertHTML: (domElement, HTML) => {
    // eslint-disable-next-line no-param-reassign
    domElement.innerHTML = "";
    domElement.insertAdjacentHTML("beforeend", HTML);
  },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/browser-js/eventHandler.js":
/*!****************************************!*\
  !*** ./src/browser-js/eventHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDirectoryPath": () => (/* binding */ getDirectoryPath),
/* harmony export */   "populateDirectoriesDisplay": () => (/* binding */ populateDirectoriesDisplay),
/* harmony export */   "getSearchResults": () => (/* binding */ getSearchResults),
/* harmony export */   "populateSearchResultsDisplay": () => (/* binding */ populateSearchResultsDisplay)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/browser-js/dom.js");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator */ "./src/browser-js/generator.js");
/* harmony import */ var _directories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directories */ "./src/browser-js/directories.js");



 // directories: array

const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null);
};

// this function does two things
const populateDirectoriesDisplay = (directoryPath) => {
  _directories__WEBPACK_IMPORTED_MODULE_2__["default"].add(directoryPath);

  const HTML = (0,_generator__WEBPACK_IMPORTED_MODULE_1__.generateSelectedDirectoriesHTML)(_directories__WEBPACK_IMPORTED_MODULE_2__["default"]);
  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].clearAndInsertHTML(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].selectedDirectoriesDisplay, HTML);
};

// take in directories as a param (research)
const getSearchResults = () => {
  if (_directories__WEBPACK_IMPORTED_MODULE_2__["default"].size === 0) {
    // eslint-disable-next-line no-alert
    alert("Select directory(s) to search");
    return;
  }

  window.api.send("getSearchResults", _directories__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

const populateSearchResultsDisplay = (searchResults) => {
  const HTML = (0,_generator__WEBPACK_IMPORTED_MODULE_1__.generateSearchResultsHTML)(searchResults);
  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].clearAndInsertHTML(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].searchResultsDisplay, HTML);
};


/***/ }),

/***/ "./src/browser-js/generator.js":
/*!*************************************!*\
  !*** ./src/browser-js/generator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateSelectedDirectoriesHTML": () => (/* binding */ generateSelectedDirectoriesHTML),
/* harmony export */   "generateSearchResultsHTML": () => (/* binding */ generateSearchResultsHTML)
/* harmony export */ });
const generateSelectedDirectoriesHTML = (directories) => {
  let HTML = "";
  directories.forEach((directory) => {
    HTML += `<p>${directory}</p>`;
  });

  return HTML;
};

const generateSearchResultsHTML = (searchResults) => {
  let HTML = "";
  Object.keys(searchResults).forEach((imageName) => {
    HTML += `
    <div class="duplicate-image">
      <p class="image-name"><strong>${imageName}</strong></p>
      <div class="duplicate-image-paths">
        ${searchResults[imageName].map((imagePath) => `<p class="image-path">${imagePath}</p>`).join("")}
      </div>
    </div>
  `;
  });

  return HTML;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/browser-js/render.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/browser-js/dom.js");
/* harmony import */ var _eventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandler */ "./src/browser-js/eventHandler.js");



// eslint-disable-next-line no-shadow
const setupEventListeners = (dom) => {
  dom.selectDirectoryBtn.addEventListener("click", () => {
    (0,_eventHandler__WEBPACK_IMPORTED_MODULE_1__.getDirectoryPath)();
  });

  window.api.receive("directoryPath", (directoryPath) => {
    (0,_eventHandler__WEBPACK_IMPORTED_MODULE_1__.populateDirectoriesDisplay)(directoryPath);
  });

  dom.searchDirectoriesBtn.addEventListener("click", _eventHandler__WEBPACK_IMPORTED_MODULE_1__.getSearchResults);
  window.api.receive("searchResults", _eventHandler__WEBPACK_IMPORTED_MODULE_1__.populateSearchResultsDisplay);
};

setupEventListeners(_dom__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map