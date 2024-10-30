import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import * as tsRules from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
//import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx,js,}', '**/*.interface.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,

        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        sourceType: 'module',
        // project: './tsconfig.json',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsRules,
      '@stylistic/ts': stylisticTs,
      //prettier,
    },
    rules: {
      ...tsRules.configs.recommended.rules,
      'react/jsx-closing-bracket-location': [
        'error',
        { selfClosing: 'tag-aligned' },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      //'prettier/prettier': 'error',
      'react/jsx-max-props-per-line': ['warn', { when: 'always', maximum: 1 }],
      'react/prop-types': 'off',
      'react/jsx-closing-tag-location': 'warn',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-tag-spacing': [
        'warn',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          shorthandFirst: true,
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
      'array-bracket-spacing': ['warn', 'never'],
      'computed-property-spacing': ['warn', 'never'],
      'no-var': 'warn',
      'no-constant-condition': 'off',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-console': 'warn',
      'no-const-assign': 'error',
      'no-trailing-spaces': 'error',
      'jsx-quotes': ['warn', 'prefer-single'],
      semi: ['warn', 'always'],
      'eol-last': 'warn',
      'newline-before-return': 1,
      curly: 'warn',
      'no-else-return': ['error'],
      'no-duplicate-imports': 'error',
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      'prefer-const': ['warn'],
      '@stylistic/ts/indent': [
        'warn',
        2,
        { ignoredNodes: ['TSTypeParameterInstantiation'] },
      ],
      'brace-style': ['warn', '1tbs', { allowSingleLine: true }], //deprecated
      '@stylistic/ts/type-annotation-spacing': [
        'warn',
        {
          before: false,
          after: true,
          overrides: {
            arrow: { before: true, after: true },
          },
        },
      ], //This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/member-delimiter-style': [
        'warn',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/semi': ['warn', 'always'], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/object-curly-spacing': ['warn', 'always'], // This rule has been moved to the ESLint stylistic plugin
      'no-unused-vars': 'warn',
      '@stylistic/ts/quotes': [
        'warn',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/space-before-blocks': ['warn', 'always'], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/comma-dangle': ['warn', 'always-multiline'], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/keyword-spacing': [
        'warn',
        {
          before: true,
          after: true,
        },
      ], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/comma-spacing': ['warn', { before: false, after: true }], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/key-spacing': ['warn', { afterColon: true }], // This rule has been moved to the ESLint stylistic plugin
      '@stylistic/ts/padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: '*',
          next: 'if',
        },
        {
          blankLine: 'always',
          prev: 'if',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
      ],
    },
  },
];
