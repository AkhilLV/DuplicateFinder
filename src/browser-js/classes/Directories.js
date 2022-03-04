class Directories {
  constructor() {
    this.directoryPaths = new Set();
  }

  getDirectories = () => this.directoryPaths;

  addDirectory = (directoryPath) => {
    this.directoryPaths.add(directoryPath);
  };

  deleteDirectory = (directoryPath) => {
    this.directoryPaths.delete(directoryPath);
  };

  isParentIncluded = (directoryPath) => {
    // if home/pictures is included, home/pictures/new-york is not allowed

    let isParentIncluded = false;

    this.directoryPaths.forEach((existingDirectoryPath) => {
      const regex = new RegExp(`${existingDirectoryPath}(?=/)`);

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

    this.directoryPaths.forEach((existingDirectoryPath) => {
      if (existingDirectoryPath.match(directoryPath) && existingDirectoryPath !== directoryPath) {
        childDirectoryPaths.push(existingDirectoryPath);
      }
    });

    return childDirectoryPaths;
  };
}

const directories = new Directories();

export default directories;
