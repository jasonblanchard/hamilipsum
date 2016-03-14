var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/entry',
  output: {
    path: './public',
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.s?css$/,
        loaders: [
          ExtractTextPlugin.extract('style'),
          'css',
          'autoprefixer?{"browsers":["> 5%","last 2 versions","ie 8"]}',
          'sass?includePaths[]=./node_modules'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
