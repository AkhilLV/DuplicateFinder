const { readdirSync, lstatSync, unlink } = require("fs");
const { normalize } = require("path");

class ImageIndex {
  constructor(directories) { // directories: array
    this.directories = directories;
    this.index = {};
    this.duplicateImages = {};

    this.directories.forEach((directory) => {
      this.indexFiles(normalize(directory));
    });
  }

  getIndex = () => this.index;

  getDuplicateImages = () => this.duplicateImages;

  deleteDuplicateImages = () => {
    Object.keys(this.duplicateImages).forEach((imageName) => {
      this.duplicateImages[imageName].forEach((index, imagePath) => {
        if (index > 0) { // keep the first image
          unlink(imagePath, (error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
        }
      });
    });
  };

  deleteDuplicateImage = (filePath) => {

  };

  indexFiles = (directory) => { // directory: string
    const files = readdirSync(directory);

    files.forEach((file) => {
      const filePath = normalize(`${directory}/${file}`);

      if (this.index[file]) {
        this.index[file].push(filePath);
        this.duplicateImages[file] = this.index[file];
      } else if (file.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.index[file] = [filePath];
      }

      if (lstatSync(filePath).isDirectory()) {
        this.indexFiles(filePath);
      }
    });
  };
}

module.exports = ImageIndex;
