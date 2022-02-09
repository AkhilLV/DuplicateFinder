class Directories {
  constructor() {
    this.directories = new Set();
  }

  getDirectories = () => this.directories;

  addDirectory = (directoryPath) => {
    const [isChildIncluded, childDirectoryPaths] = this.isChildIncluded(directoryPath);

    if (isChildIncluded) {
      childDirectoryPaths.forEach((childDirectoryPath) => {
        this.directories.delete(childDirectoryPath);
        this.directories.add(directoryPath);
      });
    }
  };

  isParentIncluded = (directoryPath) => {
    // if home/pictures is included, home/pictures/new-york is not allowed

    let isParentIncluded = false;

    this.directories.forEach((existingDirectory) => {
      if (directoryPath.match(existingDirectory)) {
        isParentIncluded = true;
      }
    });

    return isParentIncluded;
  };

  isChildIncluded = (directoryPath) => {
    // eslint-disable-next-line max-len
    // if home/pictures/new-york is included, home/pictures is allowed after removing home/pictures/new-york, home/pictures/boston

    let isChildIncluded = false;
    const childDirectoryPaths = [];

    this.directories.forEach((existingDirectory) => {
      if (existingDirectory.match(directoryPath) && existingDirectory !== directoryPath) {
        isChildIncluded = true;
        childDirectoryPaths.push(existingDirectory);
      }
    });

    return [isChildIncluded, childDirectoryPaths];
  };
}

const directories = new Directories();

export default directories;

// home/public/school
// home/public/school/mech -> not allowed
