import dom from "./dom";
import directories from "./directories";
import {
  getDirectoryPath,
  getSearchResults,
} from "./eventHandler";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "./generator";

// eslint-disable-next-line no-shadow
const setupEventListeners = (dom) => {
  dom.selectDirectoryBtn.addEventListener("click", () => {
    getDirectoryPath();
  });

  window.api.receive("directoryPath", (directoryPath) => {
    directories.add(directoryPath);

    const HTML = generateSelectedDirectoriesHTML(directories);
    dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
  });

  dom.searchDirectoriesBtn.addEventListener("click", () => {
    getSearchResults(directories);
  });

  window.api.receive("searchResults", (searchResults) => {
    const HTML = generateSearchResultsHTML(searchResults);
    dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
  });
};

setupEventListeners(dom);
