const path = require("path");

module.exports = {
  entry: "./src/browser-js/render.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./src/browser-js/bundled"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
};
