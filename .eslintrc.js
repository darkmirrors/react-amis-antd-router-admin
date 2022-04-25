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
    'import/prefer-default-export': 'off',
    // 'import/no-default-export': 'error',
    'import/no-anonymous-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'prefer-const': 'error',
    'sort-imports': 'off',
    'no-magic-numbers': 'error',
    'require-await': 'error',
    // 'no-console': 'error',
    'no-unused-vars': 'error',

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-unresolved': ['off'],
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['pages/**', 'pages/api/**', 'global.d.ts', '*.wc.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
        'storybook/hierarchy-separator': 'off',
      },
    },
  ],
}
