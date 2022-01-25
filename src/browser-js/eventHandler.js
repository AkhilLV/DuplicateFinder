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

const deleteDuplicateImages = () => {
  window.api.send("deleteDuplicateImages", null); // send (channel, data)
};

export const handleSelectDirectoryClick = () => {
  getDirectoryPath();
};

export const handleSearchDirectoriesClick = () => {
  getSearchResults(directories.getDirectories());
};

export const handleDeleteDuplicatesClick = () => {
  deleteDuplicateImages();
};

export const handleDirectoryPathRecieve = (directoryPath, dom) => {
  directories.addDirectory(directoryPath);

  const HTML = generateSelectedDirectoriesHTML(directories.getDirectories());
  dom.clearAndInsertHTML(dom.selectedDirectoriesDisplay, HTML);
};

export const handleSearchResultsRecieve = (searchResults, dom) => {
  const HTML = generateSearchResultsHTML(searchResults);
  dom.clearAndInsertHTML(dom.searchResultsDisplay, HTML);
};
