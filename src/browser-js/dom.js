const dom = {
  selectDirectoryBtn: document.getElementById("select-directory"),
  searchDirectoriesBtn: document.getElementById("search-directories"),
  delteDuplicatesBtn: document.getElementById("delete-duplicates"),
  selectedDirectoriesDisplay: document.getElementById("selected-directories"),
  searchResultsDisplay: document.getElementById("search-results"),

  clearAndInsertHTML: (domElement, HTML) => {
    // eslint-disable-next-line no-param-reassign
    domElement.innerHTML = "";
    domElement.insertAdjacentHTML("beforeend", HTML);
  },
};

export default dom;
