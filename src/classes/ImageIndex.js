/* eslint-disable no-console */
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
      this.duplicateImages[imageName].forEach((imagePath, index) => {
        // if (index > 0) {
        //   console.log("Running");
        //   unlink(imagePath, (error) => {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log("Deleted duplicates");
        //     }
        //   });
        // }
      });
    });
  };

  deleteDuplicateImage = (imagePath) => {
    // unlink(imagePath, (error) => {
    //   console.log(error);
    // });
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

// const testInstance = new ImageIndex(["/home/akhil/Public/DuplicateTest"]);
// console.log(testInstance.getDuplicateImages());
// testInstance.deleteDuplicateImages();

module.exports = ImageIndex;
