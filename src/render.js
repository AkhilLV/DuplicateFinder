import dom from "./browser-js/dom";
import generateSelectedDirectoriesHTML from "./browser-js/generator";

// eslint-disable-next-line no-shadow
const setupEventListeners = (dom) => {
  dom.selectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    window.api.send("toMain", null);
  });
};

setupEventListeners(dom);

const directories = [];

// eslint-disable-next-line no-undef
window.api.receive("fromMain", (files) => {
  directories.push(...files.filePaths);
  generateSelectedDirectoriesHTML(directories, dom.selectedDirectoriesDisplay);
});

// Structure:
// Dom Elements
// HTML generator functions
