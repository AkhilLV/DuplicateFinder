import dom from "./dom";
import directories from "./directories";
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
    directories.add(directoryPath);

    populateDirectoriesDisplay(directories);
  });

  dom.searchDirectoriesBtn.addEventListener("click", () => {
    getSearchResults(directories);
  });

  window.api.receive("searchResults", populateSearchResultsDisplay);
};

setupEventListeners(dom);
