import directories from "./Directories";
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
    window.api.send("deleteDuplicateImages", null);
  };

  // check if parent directory exists !!! Important
  static handleDirectoryPathRecieve = (directoryPath, dom) => {
    directories.addDirectory(directoryPath);

    const HTML = generateSelectedDirectoriesHTML(directories.getDirectories());
    dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
  };

  static handleSearchResultsRecieve = (searchResults, dom) => {
    const HTML = generateSearchResultsHTML(searchResults);
    dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
  };

  static handleDeletedDuplicatesRecieve = () => {
    alert("Deleted duplicates");
  };
}

export default EventHandler;
