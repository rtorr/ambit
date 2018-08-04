module.exports = {
  extends: 'airbnb',
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    camelcase: [0, 'as-needed'],
    'array-bracket-spacing': [0, 'as-needed'],
    'arrow-parens': [0, 'as-needed'],
    'brace-style': [0, 'as-needed'],
    'rest-spread-spacing': ['error', 'never'],
    'global-require': 0,
    'arrow-body-style': [0, 'as-needed'],
    'comma-dangle': 0,
    'max-len': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-underscore-dangle': 0,
    'no-bitwise': 0,
    'class-methods-use-this': 0,
    'no-useless-escape': 0,
    'new-cap': 0,
    'no-duplicate-imports': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/export': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-mixed-operators': 0
  }
};
