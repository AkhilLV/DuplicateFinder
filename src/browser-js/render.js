/* eslint-disable no-shadow */
import dom from "./dom";

import {
  handleSelectDirectoryClick,
  handleSearchDirectoriesClick,
  handleDirectoryPathRecieve,
  handleSearchResultsRecieve,
  handleDeleteDuplicatesClick,
  handleDeletedDuplicatesRecieve,
} from "./eventHandler";

const setupEventListeners = (dom) => {
  dom.selectDirectoryBtn.addEventListener("click", () => {
    handleSelectDirectoryClick();
  });

  window.api.receive("directoryPath", (directoryPath) => {
    handleDirectoryPathRecieve(directoryPath, dom);
  });

  dom.searchDirectoriesBtn.addEventListener("click", () => {
    handleSearchDirectoriesClick();
  });

  window.api.receive("searchResults", (searchResults) => {
    handleSearchResultsRecieve(searchResults, dom);
  });

  dom.deleteDuplicatesBtn.addEventListener("click", () => {
    handleDeleteDuplicatesClick();
  });

  window.api.receive("deletedDuplicates", () => {
    handleDeletedDuplicatesRecieve();
  });
};

setupEventListeners(dom);
