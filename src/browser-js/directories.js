class Directories {
  constructor() {
    this.directories = new Set();
  }

  getDirectories = () => this.directories;

  addDirectory = (directoryPath) => this.directories.add(directoryPath);
}

const directories = new Directories();

export default directories;
