/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser-js/classes/Directories.js":
/*!***********************************************!*\
  !*** ./src/browser-js/classes/Directories.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Directories {
  constructor() {
    this.directoryPaths = new Set();
  }

  getDirectoryPaths = () => this.directoryPaths;

  addDirectoryPath = (directoryPath) => {
    this.directoryPaths.add(directoryPath);
  };

  deleteDirectoryPath = (directoryPath) => {
    this.directoryPaths.delete(directoryPath);
  };

  isParentIncluded = (directoryPath) => {
    // if home/pictures is included, home/pictures/new-york is not allowed

    let isParentIncluded = false;

    this.directoryPaths.forEach((existingDirectoryPath) => {
      const regex = new RegExp(`${existingDirectoryPath}(?=/)`);

      if (directoryPath.match(regex)) {
        isParentIncluded = true;
      }
    });

    return isParentIncluded;
  };

  getIncludedChildDirectoryPaths = (directoryPath) => {
    // eslint-disable-next-line max-len
    // if home/pictures/new-york is included, home/pictures is allowed after removing home/pictures/new-york, home/pictures/boston

    const childDirectoryPaths = [];

    const regex = new RegExp(`${directoryPath}(?=/)`);

    this.directoryPaths.forEach((existingDirectoryPath) => {
      if (existingDirectoryPath.match(regex)) {
        childDirectoryPaths.push(existingDirectoryPath);
      }
    });

    return childDirectoryPaths;
  };
}

const directoryPaths = new Directories();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (directoryPaths);

// Exported to:
// 1. class/EventHandler.js


/***/ }),

/***/ "./src/browser-js/classes/EventHandler.js":
/*!************************************************!*\
  !*** ./src/browser-js/classes/EventHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Directories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Directories */ "./src/browser-js/classes/Directories.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./src/browser-js/dom.js");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generator */ "./src/browser-js/generator.js");




class EventHandler {
  static handleSelectDirectoryClick = () => {
    window.api.send("getDirectoryPath", null);
  };

  static handleSearchDirectoriesClick = () => {
    if (_Directories__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectoryPaths().size === 0) {
      alert("Select directory(s) to search");
      return;
    }

    window.api.send("getSearchResults", _Directories__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectoryPaths());
  };

  static handleDeleteDuplicatesClick = () => {
    window.api.send("deleteDuplicateImages", null); // (eventName, payload)
  };

  static handleDirectoryPathRecieve = (directoryPath) => {
    if (!_Directories__WEBPACK_IMPORTED_MODULE_0__["default"].isParentIncluded(directoryPath)) {
      _Directories__WEBPACK_IMPORTED_MODULE_0__["default"].addDirectoryPath(directoryPath);
    }

    const childDirectoryPaths = _Directories__WEBPACK_IMPORTED_MODULE_0__["default"].getIncludedChildDirectoryPaths(directoryPath);

    if (childDirectoryPaths.length > 0) {
      childDirectoryPaths.forEach((childDirectoryPath) => {
        _Directories__WEBPACK_IMPORTED_MODULE_0__["default"].deleteDirectoryPath(childDirectoryPath);
      });

      _Directories__WEBPACK_IMPORTED_MODULE_0__["default"].addDirectoryPath(directoryPath);
    }

    const HTML = (0,_generator__WEBPACK_IMPORTED_MODULE_2__.generateSelectedDirectoriesHTML)(_Directories__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectoryPaths());
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearAndInsertHTML(_dom__WEBPACK_IMPORTED_MODULE_1__["default"].selectedDirectoriesDisplay, HTML);
  };

  static handleSearchResultsRecieve = (searchResults) => {
    const HTML = (0,_generator__WEBPACK_IMPORTED_MODULE_2__.generateSearchResultsHTML)(searchResults);
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearAndInsertHTML(_dom__WEBPACK_IMPORTED_MODULE_1__["default"].searchResultsDisplay, HTML);
  };

  static handleDeletedDuplicatesRecieve = () => {
    alert("Deleted duplicates");
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);

// Exported to:
// browser-js/render.js


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
  deleteDuplicatesBtn: document.getElementById("delete-duplicates"),
  selectedDirectoriesDisplay: document.getElementById("selected-directories"),
  searchResultsDisplay: document.getElementById("search-results"),

  clearAndInsertHTML: (domElement, HTML) => {
    // eslint-disable-next-line no-param-reassign
    domElement.innerHTML = "";
    domElement.insertAdjacentHTML("beforeend", HTML);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

// Exported to:
// classes/EventHandler.js
// browser-js/render.js


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
    HTML += `<p class="selected-directory">${directory}</p>`;
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

// Exported to:
// classes/EventHandler.js


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
/* harmony import */ var _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/EventHandler */ "./src/browser-js/classes/EventHandler.js");
/* eslint-disable no-shadow */




_dom__WEBPACK_IMPORTED_MODULE_0__["default"].selectDirectoryBtn.addEventListener("click", () => {
  _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].handleSelectDirectoryClick();
});

window.api.receive("directoryPath", (directoryPath) => {
  _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].handleDirectoryPathRecieve(directoryPath);
});

_dom__WEBPACK_IMPORTED_MODULE_0__["default"].searchDirectoriesBtn.addEventListener("click", () => {
  _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchDirectoriesClick();
});

window.api.receive("searchResults", (searchResults) => {
  _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchResultsRecieve(searchResults);
});

_dom__WEBPACK_IMPORTED_MODULE_0__["default"].deleteDuplicatesBtn.addEventListener("click", () => {
  _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].handleDeleteDuplicatesClick();
});

window.api.receive("deletedDuplicates", () => {
  _classes_EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].handleDeletedDuplicatesRecieve();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map