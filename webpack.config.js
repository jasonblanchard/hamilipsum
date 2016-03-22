/* eslint-disable no-var */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/entry',
  output: {
    path: './build',
    filename: 'app.js',
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
      },
      {
        test: /\.s?css$/,
        loaders: [
          ExtractTextPlugin.extract('style'),
          'css',
          'autoprefixer?{"browsers":["> 5%","last 2 versions","ie 8"]}',
          'sass?includePaths[]=./node_modules',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
};
