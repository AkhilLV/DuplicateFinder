import fs from "fs"

import ImageIndex from "./classes/ImageIndex.js"

const index = new ImageIndex(["H:\\Photos"])

fs.writeFile("./images.json", JSON.stringify(index.getDuplicateImages()), (err) => {
  if (err) { return console.log(err) }

  console.log("File saved")
})


// index.deleteDuplicates()
// index.deleteDuplicate("C:\\Users\\hppc\\Desktop\\All\DSE2938.jpg")