module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    jest: true,
    // jquery: true
  },
  globals: {},
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-template-curly-in-string': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
}
