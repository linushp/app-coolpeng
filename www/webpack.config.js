var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './js/jsx/src/main.jsx',
  output: {
    filename: './js/react-app-bundle.js'
  },
  externals: {
    'react': 'window.React',
    "_":"window._",
    "$":"window.$",
    "jQuery":"window.jQuery"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['jsx-loader',"babel-loader"] },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'}
    ]
  }
};
