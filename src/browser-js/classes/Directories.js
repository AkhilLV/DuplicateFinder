class Directories {
  constructor() {
    this.directories = new Set();
  }

  getDirectories = () => this.directories;

  addDirectory = (directoryPath) => {
    if (!this.isParentIncluded(directoryPath)) {
      this.directories.add(directoryPath);
    }
  };

  isParentIncluded = (directoryPath) => {
    let isParentIncluded = false;

    this.directories.forEach((directory) => {
      const regex = new RegExp(directory);
      if (directoryPath.match(regex)) {
        isParentIncluded = true;
      }
    });

    return isParentIncluded;
  };

  // isChildIncluded = (directoryPath) => {
  //   let isChildIncluded = false;

  //   this.directories.forEach((directory) => {
  //     if ()
  //   });
  // }
}

const directories = new Directories();

export default directories;

// home/public/school
// home/public/school/mech -> not allowed
