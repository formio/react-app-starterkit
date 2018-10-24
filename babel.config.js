module.exports = function(api) {
  const envPresetOptions = {
    debug: process.env.LOG === 'all',
    useBuiltIns: 'entry',
    modules: false,
  };

  const presets = [
    ['@babel/preset-env', envPresetOptions],
    '@babel/preset-react',
  ];

  const plugins = [
    // Stage 2
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', {loose: false}],
    '@babel/plugin-proposal-json-strings',
    // Runtime
    '@babel/plugin-transform-runtime'
  ];

  if (api.env('test')) {
    return {
      plugins: ['istanbul']
    };
  }

  return {
    presets,
    plugins
  };
};
