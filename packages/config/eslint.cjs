/**
 * Base ESLint config for BuiltRoot projects.
 * Extend this in each app/package:  `extends: ["@builtroot/config/eslint.cjs"]`
 */
module.exports = {
  root: false,
  env: { es2021: true, node: true, browser: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist/**", "node_modules/**"],
  rules: {
    // Add shared rules here as needed
  }
};
