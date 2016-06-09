var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'monkberry.min.js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: /src/
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    root: path.resolve('./node_modules')
  }
};
