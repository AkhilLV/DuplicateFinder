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

  indexFiles = (directory) => { // directory: string
    const files = fs.readdirSync(directory)

    files.forEach(file => {
      const filePath = `${directory}\\${file}`

      if (this.index[file]) {
        this.index[file].push(filePath)
      } else if (file.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.index[file] = [filePath]
      }

      if (fs.lstatSync(filePath).isDirectory())
        this.indexFiles(filePath)
    })
  }
}

export default ImageIndex