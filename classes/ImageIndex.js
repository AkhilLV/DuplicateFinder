const fs = require('fs')
const path = require('path')

class ImageIndex {
  constructor(directories) { // directories: array
    this.directories = directories
    this.index = {}
    this.duplicateImages = {}

    this.directories.forEach((directory) => {
      this.indexFiles(path.normalize(directory))
    })
  }

  getIndex = () => this.index
  getDuplicateImages = () => this.duplicateImages

  indexFiles = (directory) => { // directory: string
    const files = fs.readdirSync(directory)

    files.forEach(file => {
      const filePath = path.normalize(`${directory}/${file}`)

      if (this.index[file]) {
        this.index[file].push(filePath)
        this.duplicateImages[file] = this.index[file]
      } else if (file.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.index[file] = [filePath]
      }

      if (fs.lstatSync(filePath).isDirectory())
        this.indexFiles(filePath)
    })
  }
}

module.exports = ImageIndex