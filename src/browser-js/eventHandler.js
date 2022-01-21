import dom from "./dom";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "./generator";

import directories from "./directories"; // directories: array

export const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null);
};

export const populateDirectoriesDisplay = (files) => {
  directories.push(...files.filePaths);

  const HTML = generateSelectedDirectoriesHTML(directories);
  dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
};

export const getSearchResults = () => {
  if (directories.length === 0) {
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
