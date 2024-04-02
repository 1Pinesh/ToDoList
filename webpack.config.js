const path = require("path");

module.exports = {
  entry: "./src/header.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
