const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: './src/index.jsx',
  html: './src/index.html',
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  eslint: {
    emitWarning: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ["eslint"],
        exclude: /node_modules|react\-formio\-helper/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.png$|\.gif$|\.svg|\.ttf|\.woff|\.eot/,
        loader: "file"
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
}