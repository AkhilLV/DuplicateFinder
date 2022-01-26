const { statSync } = require("fs");

const getFileSize = (filePath) => {
  const stats = statSync(filePath);
  return stats.size;
};

module.exports = getFileSize;
