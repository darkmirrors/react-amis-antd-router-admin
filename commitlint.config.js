module.exports = {
  extends: [
    '@commitlint/config-conventional', // scoped packages are not prefixed
  ],
  rules: {
    'type-enum': [2, 'always', ['WIP', 'feat', 'fix', 'refactor', 'docs', 'test', 'style', 'chore', 'revert']],
    'type-case': [2, 'always', ['lower-case', 'upper-case']],
    'scope-case': [0, 'never'],
    'subject-case': [0, 'never'],
    'scope-empty': [0],
  },
}
