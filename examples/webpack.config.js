"use strict";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'app.js': './index.jsx',
  },
  output: {
    path: './lib',
    filename: 'app.js',
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  resolveLoader: {
    modulesDirectories: [
      path.join(__dirname, './node_modules'),
      path.join(__dirname, '../node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
};
