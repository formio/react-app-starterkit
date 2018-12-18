const {join} = require('path');
const paths = require('./config/paths');
const wpconf = require('./config/webpack.test.config.js');

const entry = join(paths.tests, 'index.spec.js');

module.exports = function(config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'jasmine'
    ],
    files: [
      entry
    ],
    preprocessors: {
      [entry]: ['webpack']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    webpack: wpconf,
    webpackMiddleware: {
      noInfo: true,
      stats: 'erros-only',
    },
  };

  config.set(configuration);
};
