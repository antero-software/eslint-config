# eslint config

This is our
[shareable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs)
to be used for all JavaScript and TypeScript projects.

It enforces some sensible code styling guidelines and encourages consistency
across our projects.

## How to use

install using npm

```sh
npm i github:antero-software/eslint-config --save-dev
```

2. Create `.eslintrc.js` with the following body:

```
module.exports = {
  extends: ["@antero-software/eslint-config"],
};
```

3. lint project using eslint `npx eslint ./src/`