import dom from "./dom";

export const getDirectoryPath = () => {
  window.api.send("getDirectoryPath", null);
};

export const getSearchResults = (directories) => {
  if (directories.size === 0) {
    // eslint-disable-next-line no-alert
    alert("Select directory(s) to search");
    return;
  }

  window.api.send("getSearchResults", directories);
};

export const populateDOMElement = (domElement, HTML) => {
  dom.clearAndInsertHTML(domElement, HTML);
};
