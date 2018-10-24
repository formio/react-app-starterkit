const base = require('./webpack.base.config');

module.exports = {
  context: base.context,
  mode: 'none',
  module: base.module,
};
