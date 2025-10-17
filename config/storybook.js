module.exports = {
  overrides: [
    {
      files: ['*.stories.@(js|jsx|ts|tsx)'],
      extends: ['plugin:storybook/recommended'],
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      plugins: ['mdx'],
      settings: {
        'mdx/code-blocks': true,
      },
    },
    {
      files: ['*.mdx', '**/*.mdx/**'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
};
