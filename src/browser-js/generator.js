const generateSelectedDirectories = (directories, domElement) => {
  let HTML = "";
  directories.forEach((directory) => {
    HTML += `<p>${directory}</p>`;
  });

  // eslint-disable-next-line no-param-reassign
  domElement.insertAdjacentHTML = "";
  domElement.insertAdjacentHTML("beforeend", HTML);
};

export default generateSelectedDirectories;
