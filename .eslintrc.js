module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: ['**/TableDemo/*.js'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
