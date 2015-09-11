'use strict';

var path = require("path"),
    webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: ['./index'],

  output: {
    path: __dirname,
    filename: "bundle.js",
  },

  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"])
    ])
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

};
