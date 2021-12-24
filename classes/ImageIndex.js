import fs from "fs"

class ImageIndex {
  constructor(directories) { // directories: array
    this.directories = directories
    this.index = {}

    this.directories.forEach((directory) => {
      this.indexFiles(directory)
    })
  }

  getIndex = () => this.index

  indexFiles = (directory) => {
    const files = fs.readdirSync(directory)

    files.forEach(file => {
      if (this.index[file]) {
        this.index[file].push(`${directory}\\${file}`)
      } else if (file.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.index[file] = [`${directory}\\${file}`]
      }

      if (fs.lstatSync(`${directory}\\${file}`).isDirectory())
        this.indexFiles(`${directory}\\${file}`)
    })
  }
}

export default ImageIndex

// test commit