import directories from "./Directories";
import dom from "../dom";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "../generator";

class EventHandler {
  static handleSelectDirectoryClick = () => {
    window.api.send("getDirectoryPath", null);
  };

  static handleSearchDirectoriesClick = () => {
    if (directories.getDirectories().size === 0) {
      alert("Select directory(s) to search");
      return;
    }

    window.api.send("getSearchResults", directories.getDirectories());
  };

  static handleDeleteDuplicatesClick = () => {
    window.api.send("deleteDuplicateImages", null); // (eventName, payload)
  };

  static handleDirectoryPathRecieve = (directoryPath) => {
    if (!directories.isParentIncluded(directoryPath)) {
      directories.addDirectory(directoryPath);
    }

    const childDirectoryPaths = directories.isChildIncluded(directoryPath);

    if (childDirectoryPaths.length > 0) {
      childDirectoryPaths.forEach((childDirectoryPath) => {
        directories.deleteDirectory(childDirectoryPath);
      });

      directories.addDirectory(directoryPath);
    }

    const HTML = generateSelectedDirectoriesHTML(directories.getDirectories());
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
