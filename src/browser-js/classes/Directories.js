class Directories {
  constructor() {
    this.directories = new Set();
  }

  getDirectories = () => this.directories;

  addDirectory = (directoryPath) => {
    this.directories.add(directoryPath);
  };

  deleteDirectory = (directoryPath) => {
    this.directories.delete(directoryPath);
  };

  isParentIncluded = (directoryPath) => {
    // if home/pictures is included, home/pictures/new-york is not allowed

    let isParentIncluded = false;

    this.directories.forEach((existingDirectory) => {
      const regex = new RegExp(`${existingDirectory}(?=/)`);

      if (directoryPath.match(regex)) {
        isParentIncluded = true;
      }
    });

    return isParentIncluded;
  };

  getIncludedChildDirectories = (directoryPath) => {
    // eslint-disable-next-line max-len
    // if home/pictures/new-york is included, home/pictures is allowed after removing home/pictures/new-york, home/pictures/boston

    const childDirectoryPaths = [];

    this.directories.forEach((existingDirectory) => {
      if (existingDirectory.match(directoryPath) && existingDirectory !== directoryPath) {
        childDirectoryPaths.push(existingDirectory);
      }
    });

    return childDirectoryPaths;
  };
}

const directories = new Directories();

export default directories;
