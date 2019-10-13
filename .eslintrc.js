module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    impliedStrict: true,
    allowImportExportEverywhere: false,
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['webpack.config.js'],
      env: {
        es6: true,
        node: true,
        browser: false,
      },
    },
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      globals: {
        process: true,
        firebase: true,
      },
    },
    {
      files: ['functions/**/*.js'],
      env: {
        es6: true,
        node: true,
        browser: false,
      },
    },
  ],
  rules: {
    // ...
  },
  settings: {
    // ...
  },
};
