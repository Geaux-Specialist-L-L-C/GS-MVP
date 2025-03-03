// .eslintrc.js
// Description: ESLint configuration for the Geaux Specialist project
// Created: 2025-03-03

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
  rules: {
    // Error prevention
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'warn',
    'no-duplicate-imports': 'error',
    'no-param-reassign': 'error',
    
    // React specific rules
    'react/prop-types': 'off', // Disabled for development speed
    'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/self-closing-comp': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // Accessibility
    'jsx-a11y/anchor-is-valid': 'warn', // Changed from error to warn
    'jsx-a11y/click-events-have-key-events': 'warn', // Changed from error to warn
    'jsx-a11y/no-static-element-interactions': 'warn', // Changed from error to warn
    
    // Import rules
    'import/order': 'warn',
    'import/no-anonymous-default-export': 'warn',
    'import/no-unresolved': 'warn', // Changed from error to warn
    
    // Code style (complementary to prettier)
    'prettier/prettier': 'warn',
  },
  overrides: [
    // TypeScript specific rules
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'no-unused-vars': 'off', // Replaced by TypeScript rule
      },
    },
    // Jest test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        // Temporarily disabling testing-library rules until properly installed
        'testing-library/await-async-query': 'off',
        'testing-library/no-await-sync-query': 'off',
        'testing-library/no-render-in-setup': 'off',
      },
    },
  ],
};