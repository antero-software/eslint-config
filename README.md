# eslint config

This is our
[shareable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs)
to be used for all JavaScript and TypeScript projects.

It enforces some sensible code styling guidelines and encourages consistency
across our projects.

## How to use

1. Install the config:

   ```sh
   npm install --save-dev @antero-software/eslint-config
   ```

2. Install all peer dependencies (run again whenever the config version changes):

   ```sh
   npx install-peerdeps --dev @antero-software/eslint-config
   ```

   If you have this repository cloned, you can run `npm run install-peers` to execute the same command.

3. Create `.eslintrc.js` with the following body:

```
module.exports = {
  extends: ["@antero-software/eslint-config"],
};
```

4. lint project using eslint `npx eslint ./src/`

## Releasing

See [`RELEASING_VERSIONS.md`](RELEASING_VERSIONS.md) for the full release checklist using GitHub Actions.
