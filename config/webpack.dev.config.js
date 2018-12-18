const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const {HotModuleReplacementPlugin} = require('webpack');
const {devserver} = require('./project.config');

const verbose = process.env.LOG === 'all';

const dev = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].dev.bundle.[hash].js',
  },
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    host: devserver.host,
    port: devserver.port,
    historyApiFallback: true,
    hotOnly: true,
    clientLogLevel: 'error',
    quiet: false,
    noInfo: false,
    stats: verbose ? 'normal' : {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false,
      modules: false,
      moduleTrace: false
    }
  }
};

module.exports = merge(base, dev);
