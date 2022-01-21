import dom from "./dom";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "./generator";

import directories from "./directories"; // directories: array

export const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null);
};

// this function does two things
export const populateDirectoriesDisplay = (directoryPath) => {
  directories.add(directoryPath);

  const HTML = generateSelectedDirectoriesHTML(directories);
  dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
};

// take in directories as a param (research)
export const getSearchResults = () => {
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
