import dom from "./dom";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "./generator";

export const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null);
};

export const populateDirectoriesDisplay = (directories) => {
  const HTML = generateSelectedDirectoriesHTML(directories);
  dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
};

// take in directories as a param (research)
export const getSearchResults = (directories) => {
  if (directories.size === 0) {
    // eslint-disable-next-line no-alert
    alert("Select directory(s) to search");
    return;
  }

  window.api.send("getSearchResults", directories);
};

export const populateSearchResultsDisplay = (searchResults) => {
  const HTML = generateSearchResultsHTML(searchResults);
  dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
};
