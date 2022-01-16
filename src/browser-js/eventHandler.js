import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "./generator";

import directories from "./directories"; // directories: array

export const requestDirectoryPath = () => {
  window.api.send("getDirectoryPaths", null);
};

export const populateDirectoriesDisplay = (files) => {
  directories.push(...files.filePaths);
  generateSelectedDirectoriesHTML(directories);
};

export const requestSearchResults = () => {
  console.log(directories);
  if (directories.length === 0) { return alert("Select directory(s) to search"); }
  window.api.send("getSearchResults", directories);
};

export const populateSearchResultsDisplay = (searchResults) => {
  console.log(searchResults);
  generateSearchResultsHTML(searchResults);
};
