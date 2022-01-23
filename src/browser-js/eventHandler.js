import directories from "./directories";
import { generateSelectedDirectoriesHTML, generateSearchResultsHTML } from "./generator";

const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null); // send (channel, data)
};

// eslint-disable-next-line no-shadow
const getSearchResults = (directories) => {
  if (directories.size === 0) {
    // eslint-disable-next-line no-alert
    alert("Select directory(s) to search");
    return;
  }

  window.api.send("getSearchResults", directories);
};

export const handleSelectDirectoryClick = () => {
  getDirectoryPath();
};

export const handleSearchDirectoriesClick = () => {
  getSearchResults(directories);
};

export const handleDirectoryPathRecieve = (directoryPath, dom) => {
  directories.add(directoryPath);

  const HTML = generateSelectedDirectoriesHTML(directories);
  dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
};

export const handleSearchResultsRecieve = (searchResults, dom) => {
  const HTML = generateSearchResultsHTML(searchResults);
  dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
};
