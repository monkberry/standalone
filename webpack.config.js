module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'compiler.js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};
