const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-2'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.png$|\.gif$|\.svg|\.ttf|\.woff|\.eot|\.ico$|\.jpe?g$/,
        loader: 'file?name=assets/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'moment': 'moment'
    })
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  }
}