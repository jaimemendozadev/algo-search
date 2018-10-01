const path = require("path");
const Dotenv = require("dotenv-webpack");
const entry = path.resolve(__dirname, "./dev/index.jsx");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = path.resolve(__dirname, "./public");

module.exports = {
  entry,
  output: {
    path: publicPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js?x$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" }), new Dotenv()]
};
