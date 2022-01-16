import dom from "./dom";
import {
  requestDirectoryPath,
  populateDirectoriesDisplay,
  requestSearchResults,
  populateSearchResultsDisplay,
} from "./eventHandler";

// eslint-disable-next-line no-shadow
const setupEventListeners = (dom) => {
  dom.selectDirectoryBtn.addEventListener("click", requestDirectoryPath);
  window.api.receive("directoryPaths", populateDirectoriesDisplay);

  dom.searchDirectoriesBtn.addEventListener("click", requestSearchResults);
  window.api.receive("searchResults", populateSearchResultsDisplay);
};

setupEventListeners(dom);
