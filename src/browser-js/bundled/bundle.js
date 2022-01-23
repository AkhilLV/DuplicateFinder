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
class Directories {
  constructor() {
    this.directories = new Set();
  }

  getDirectories = () => this.directories;

  addDirectory = (directoryPath) => this.directories.add(directoryPath);
}

const directories = new Directories();

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
/* harmony export */   "handleSelectDirectoryClick": () => (/* binding */ handleSelectDirectoryClick),
/* harmony export */   "handleSearchDirectoriesClick": () => (/* binding */ handleSearchDirectoriesClick),
/* harmony export */   "handleDirectoryPathRecieve": () => (/* binding */ handleDirectoryPathRecieve),
/* harmony export */   "handleSearchResultsRecieve": () => (/* binding */ handleSearchResultsRecieve)
/* harmony export */ });
/* harmony import */ var _directories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directories */ "./src/browser-js/directories.js");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator */ "./src/browser-js/generator.js");



const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null); // send (channel, data)
};

// eslint-disable-next-line no-shadow
const getSearchResults = (directories) => {
  if (directories.size === 0) {
    // eslint-disable-next-line no-alert
    alert("Select directory(s) to search");
    return;
  }

  window.api.send("getSearchResults", directories);
};

const handleSelectDirectoryClick = () => {
  getDirectoryPath();
};

const handleSearchDirectoriesClick = () => {
  getSearchResults(_directories__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectories());
};

const handleDirectoryPathRecieve = (directoryPath, dom) => {
  _directories__WEBPACK_IMPORTED_MODULE_0__["default"].addDirectory(directoryPath);

  const HTML = (0,_generator__WEBPACK_IMPORTED_MODULE_1__.generateSelectedDirectoriesHTML)(_directories__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectories());
  dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
};

const handleSearchResultsRecieve = (searchResults, dom) => {
  const HTML = (0,_generator__WEBPACK_IMPORTED_MODULE_1__.generateSearchResultsHTML)(searchResults);
  dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
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
// maybe use reduce here?
// the functions are pretty similar
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
/* eslint-disable no-shadow */




const setupEventListeners = (dom) => {
  dom.selectDirectoryBtn.addEventListener("click", () => {
    (0,_eventHandler__WEBPACK_IMPORTED_MODULE_1__.handleSelectDirectoryClick)();
  });

  window.api.receive("directoryPath", (directoryPath) => {
    (0,_eventHandler__WEBPACK_IMPORTED_MODULE_1__.handleDirectoryPathRecieve)(directoryPath, dom);
  });

  dom.searchDirectoriesBtn.addEventListener("click", () => {
    (0,_eventHandler__WEBPACK_IMPORTED_MODULE_1__.handleSearchDirectoriesClick)();
  });

  window.api.receive("searchResults", (searchResults) => {
    (0,_eventHandler__WEBPACK_IMPORTED_MODULE_1__.handleSearchResultsRecieve)(searchResults, dom);
  });
};

setupEventListeners(_dom__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map