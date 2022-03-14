/* eslint-disable no-shadow */
import dom from "./dom";

import EventHandler from "./classes/EventHandler";

dom.selectDirectoryBtn.addEventListener("click", () => {
  EventHandler.handleSelectDirectoryClick();
});

window.api.receive("directoryPath", (directoryPath) => {
  EventHandler.handleDirectoryPathRecieve(directoryPath);
});

dom.searchDirectoriesBtn.addEventListener("click", () => {
  EventHandler.handleSearchDirectoriesClick();
});

window.api.receive("searchResults", (searchResults) => {
  EventHandler.handleSearchResultsRecieve(searchResults);
});

dom.deleteDuplicatesBtn.addEventListener("click", () => {
  EventHandler.handleDeleteDuplicatesClick();
});

window.api.receive("deletedDuplicates", () => {
  EventHandler.handleDeletedDuplicatesRecieve();
});
