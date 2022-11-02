module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'max-len': 'off',
    'react/prop-types': [0],
    'no-lone-blocks': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'global-require': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
