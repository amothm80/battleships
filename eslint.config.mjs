// import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
  languageOptions: { globals: pluginJest.environments.globals.globals },
  files: ['**/*.spec.js', '**/*.test.js'],
  plugins: { jest: pluginJest },
},
  pluginJs.configs.recommended,
  {
    rules:{
      "prefer-const":"error",
      // "no-const-assigned":"error",
      "no-var":'error',
      'no-new-object':'error',
      'object-shorthand':'error',
      'no-prototype-builtins':'error',
      'no-array-constructor':'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    }
  }
];