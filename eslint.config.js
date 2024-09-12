export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Global variables for browser and Node.js environments
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
      },
      parser: (await import('@typescript-eslint/parser')).default, // TypeScript parser
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
      react: (await import('eslint-plugin-react')).default,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/prop-types': 'off',
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
