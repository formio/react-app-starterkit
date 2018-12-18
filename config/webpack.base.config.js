const HtmlPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  context: paths.root,
  target: 'web',
  entry: {
    app: paths.src
  },
  output: {
    path: paths.dist,
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@root': paths.src,
      '@app': paths.app,
    }
  },
  plugins: [
    new HtmlPlugin({template: 'src/index.html'}),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /fonts?\//,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /icons\/|images\//,
        use: [{
          loader: 'file-loader',
          options: {name: '[name].[ext]', outputPath: 'fonts/'}
        }]
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            configFile: paths.babelConfig,
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};
