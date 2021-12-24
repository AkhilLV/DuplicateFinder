import ImageIndex from "./classes/ImageIndex.js"

const index = new ImageIndex(["C:\\Users\\hppc\\Desktop\\All"])

console.log(index.getIndex())
index.deleteDuplicates()
index.deleteDuplicate("C:\\Users\\hppc\\Desktop\\All\DSE2938.jpg")