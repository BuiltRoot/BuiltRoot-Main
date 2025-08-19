# @builtroot/config

Shared configuration files (ESLint, Prettier, TypeScript) for BuiltRoot projects.

## Usage

### ESLint
In your project’s `.eslintrc.cjs`:
```js
module.exports = {
  extends: ["@builtroot/config/eslint.cjs"]
};
module.exports = require("@builtroot/config/prettier.cjs");
{
  "extends": "@builtroot/config/tsconfig.json"
}
