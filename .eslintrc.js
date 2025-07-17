// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off',
    'quotes': 'off',
    'indent': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'vue/valid-template-root': 'error',
    'vue/no-unused-vars': 'warn'
  }
} 