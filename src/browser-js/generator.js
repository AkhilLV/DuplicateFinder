import dom from "./dom";

export const generateSelectedDirectoriesHTML = (directories) => {
  let HTML = "";
  directories.forEach((directory) => {
    HTML += `<p>${directory}</p>`;
  });

  dom.selectedDirectoriesDisplay.innerHTML = "";
  dom.selectedDirectoriesDisplay.insertAdjacentHTML("beforeend", HTML);
};

export const generateSearchResultsHTML = (searchResults) => {
  let HTML = "";
  // eslint-disable-next-line no-restricted-syntax
  for (const fileName in searchResults) {
    if (Object.prototype.hasOwnProperty.call(searchResults, fileName)) {
      HTML += `
      <div class="duplicate-file">
        <p class="file-name"><strong>${fileName}</strong></p>
        <div class="duplicate-file-paths">
          ${searchResults[fileName].map((filePath) => `<p class="file-path">${filePath}</p>`).join("")}
        </div>
      </div>
    `;
    }
  }

  dom.searchResultsDisplay.innerHTML = "";
  dom.searchResultsDisplay.insertAdjacentHTML("beforeend", HTML);
};
