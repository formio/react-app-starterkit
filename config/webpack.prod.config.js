const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimzeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const paths = require('./paths');

const prod = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.[hash].js',
  },
  plugins: [
    new CleanPlugin('dist', {root: paths.root}),
    new MiniCssExtractPlugin({
      filename: '[id].[hash].style.css',
      // chunkFilename: '[id].[hash].css'
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({cache: true, parallel: true}),
      new OptimzeCssAssetPlugin({}),
    ]
  }
};

module.exports = merge.smart(base, prod);
