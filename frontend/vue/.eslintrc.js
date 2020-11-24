// Datei: mwa/frontend/vue/.eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'array-bracket-spacing': ["error", "always"],
    'no-prototype-builtins': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
