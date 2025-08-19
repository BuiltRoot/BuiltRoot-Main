# @builtroot/config

Shared configuration files (ESLint, Prettier, TypeScript) for BuiltRoot projects.

## Usage

### ESLint
In your project’s `.eslintrc.cjs`:
~~~js
module.exports = {
  extends: ["@builtroot/config/eslint.cjs"]
};
~~~

### Prettier
In your project’s `prettier.config.cjs`:
~~~js
module.exports = require("@builtroot/config/prettier.cjs");
~~~

### TypeScript
In your project’s `tsconfig.json`:
~~~json
{
  "extends": "@builtroot/config/tsconfig.json"
}
~~~
