class Directories {
  constructor() {
    this.directoryPaths = new Set();
  }

  getDirectoryPaths = () => this.directoryPaths;

  addDirectoryPath = (directoryPath) => {
    this.directoryPaths.add(directoryPath);
  };

  deleteDirectoryPath = (directoryPath) => {
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

  getIncludedChildDirectoryPaths = (directoryPath) => {
    // eslint-disable-next-line max-len
    // if home/pictures/new-york is included, home/pictures is allowed after removing home/pictures/new-york, home/pictures/boston

    const childDirectoryPaths = [];

    const regex = new RegExp(`${directoryPath}(?=/)`);

    this.directoryPaths.forEach((existingDirectoryPath) => {
      if (existingDirectoryPath.match(regex)) {
        childDirectoryPaths.push(existingDirectoryPath);
      }
    });

    return childDirectoryPaths;
  };
}

const directoryPaths = new Directories();

export default directoryPaths;
