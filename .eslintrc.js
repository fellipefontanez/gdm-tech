module.exports = {
  ignorePatterns: ['.next/', 'node_modules/', 'dist/'],
  plugins: ['@typescript-eslint', '@next/next'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: true,
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@next/next/no-html-link-for-pages': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-var': 'off',
      },
    },
    {
      files: ['**/*.js'],
      extends: ['eslint:recommended'],
    },
  ],
};
