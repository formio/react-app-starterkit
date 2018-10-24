const path = require('path');

const root = path.resolve(__dirname, '..');
const join = path.join.bind(null, root);

module.exports = {
  babelConfig: join('babel.config.js'),
  tests: join('test'),
  src: join('src'),
  dist: join('dist'),
  app: join('src', 'app'),
  root
};
