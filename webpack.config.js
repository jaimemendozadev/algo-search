const path = require('path');
const entry = path.resolve(__dirname, './dev/index.jsx');

const publicPath = path.resolve(__dirname, './public');

module.exports = {
  entry,
  output: {
    path: publicPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js?x$/, exclude: /node_modules/, loader: 'babel-loader' }      
    ]
  }
}