import directoryPaths from "./Directories";
import dom from "../dom";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "../generator";

class EventHandler {
  static handleSelectDirectoryClick = () => {
    window.api.send("getDirectoryPath", null);
  };

  static handleSearchDirectoriesClick = () => {
    if (directoryPaths.getDirectoryPaths().size === 0) {
      alert("Select directory(s) to search");
      return;
    }

    window.api.send("getSearchResults", directoryPaths.getDirectoryPaths());
  };

  static handleDeleteDuplicatesClick = () => {
    window.api.send("deleteDuplicateImages", null); // (eventName, payload)
  };

  static handleDirectoryPathRecieve = (directoryPath) => {
    if (!directoryPaths.isParentIncluded(directoryPath)) {
      directoryPaths.addDirectoryPath(directoryPath);
    }

    const childDirectoryPaths = directoryPaths.getIncludedChildDirectoryPaths(directoryPath);

    if (childDirectoryPaths.length > 0) {
      childDirectoryPaths.forEach((childDirectoryPath) => {
        directoryPaths.deleteDirectoryPath(childDirectoryPath);
      });

      directoryPaths.addDirectoryPath(directoryPath);
    }

    const HTML = generateSelectedDirectoriesHTML(directoryPaths.getDirectoryPaths());
    dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
  };

  static handleSearchResultsRecieve = (searchResults) => {
    const HTML = generateSearchResultsHTML(searchResults);
    dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
  };

  static handleDeletedDuplicatesRecieve = () => {
    alert("Deleted duplicates");
  };
}

export default EventHandler;

// Exported to:
// browser-js/render.js
