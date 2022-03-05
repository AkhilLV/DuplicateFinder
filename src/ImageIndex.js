/* eslint-disable no-console */
const { readdirSync, lstatSync, unlink } = require("fs");
const { normalize } = require("path");

const getFileSize = require("./helpers/getFileSize");
const isImage = require("./helpers/isImage");

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
      this.duplicateImages[imageName].forEach((imagePath, index) => {
        if (index > 0) { // keep the first duplicate image
          unlink(imagePath, (error) => {
            if (error) {
              console.log(error);
            } else {
              console.log(`Deleted ${imagePath}`);
            }
          });
        }
      });
    });
  };

  deleteDuplicateImage = (imagePath) => {
    unlink(imagePath, (error) => {
      console.log(error);
    });
  };

  indexFiles = (directory) => { // directory: string
    const files = readdirSync(directory);

    files.forEach((file) => {
      const filePath = normalize(`${directory}/${file}`);

      if (this.index[file] && getFileSize(this.index[file][0]) === getFileSize(filePath)) {
        this.index[file].push(filePath);
        this.duplicateImages[file] = this.index[file];
      } else if (isImage(file)) {
        this.index[file] = [filePath];
      }

      if (lstatSync(filePath).isDirectory()) {
        this.indexFiles(filePath);
      }
    });
  };
}

module.exports = ImageIndex;
