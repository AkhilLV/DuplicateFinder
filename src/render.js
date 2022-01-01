import dom from "./browser-js/dom";
import generateSelectedDirectories from "./browser-js/generator";

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
window.api.receive("fromMain", (data) => {
  directories.push(...data.filePaths);
  generateSelectedDirectories(directories, dom.selectedDirectoriesDisplay);
});

// Structure:
// Dom Elements
// HTML generator functions
