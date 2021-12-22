import fs from 'fs'

class Controller {
  constructor(directory) {
    this.directory = directory
    this.foundImages = {}
    this.duplicateImages = {}


    this.getSubdirectoryFiles(this.directory)
    this.getDuplicateFiles()
    this.deleteDuplicateImages()
  }

  getSubdirectoryFiles = (directory) => {
    const data = fs.readdirSync(directory)

    data.forEach(entry => {
      if (this.foundImages[entry]) {
        this.foundImages[entry].push(`${directory}\\${entry}`)
      } else {
        this.foundImages[entry] = [`${directory}\\${entry}`]
      }

      if (fs.lstatSync(`${directory}\\${entry}`).isDirectory())
        this.getSubdirectoryFiles(`${directory}\\${entry}`)
    })
  }

  getDuplicateFiles = () => {
    for (const property in this.foundImages) {
      if (this.foundImages[property][1]) {
        this.duplicateImages[property] = this.foundImages[property]
      }
    }
  }

  deleteDuplicateImages = () => {
    for (const property in this.duplicateImages) {
      this.duplicateImages[property].forEach((image, index) => {
        if (index > 0) {
          fs.unlink(image, (err) => { })
        }
      })
    }
  }
}

new Controller(".")