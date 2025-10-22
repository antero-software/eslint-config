module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // Anoying rules that slow dev
    'react/no-unused-prop-types': 'off',

    // I know what i am doing
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    // This should not need to be turned off, its deprecated...
    'react/require-default-props': 'off',
  },
};
