module.exports = {
  overrides: [
    {
      files: ['*.test.{ts,js,jsx,tsx}', '*.spec.{ts,js,jsx,tsx}'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.test.+(js|jsx|ts|tsx)',
              '**/*.spec.+(js|jsx|ts|tsx)',
            ],
          },
        ],
      },
    },
  ],
};
