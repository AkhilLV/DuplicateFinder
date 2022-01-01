import { readdirSync, lstatSync } from "fs";
import { normalize } from "path";

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

export default ImageIndex;
