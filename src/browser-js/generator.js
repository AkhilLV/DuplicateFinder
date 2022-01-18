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
  Object.keys(searchResults).forEach((imageName) => {
    HTML += `
    <div class="duplicate-image">
      <p class="image-name"><strong>${imageName}</strong></p>
      <div class="duplicate-image-paths">
        ${searchResults[imageName].map((imagePath) => `<p class="image-path">${imagePath}</p>`).join("")}
      </div>
    </div>
  `;
  });

  dom.searchResultsDisplay.innerHTML = "";
  dom.searchResultsDisplay.insertAdjacentHTML("beforeend", HTML);
};
