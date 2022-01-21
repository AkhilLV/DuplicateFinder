import dom from "./dom";
import {
  getDirectoryPath,
  populateDirectoriesDisplay,
  getSearchResults,
  populateSearchResultsDisplay,
} from "./eventHandler";

// eslint-disable-next-line no-shadow
const setupEventListeners = (dom) => {
  dom.selectDirectoryBtn.addEventListener("click", () => {
    getDirectoryPath();
  });

  window.api.receive("directoryPath", (directoryPath) => {
    populateDirectoriesDisplay(directoryPath);
  });

  dom.searchDirectoriesBtn.addEventListener("click", getSearchResults);
  window.api.receive("searchResults", populateSearchResultsDisplay);
};

setupEventListeners(dom);
