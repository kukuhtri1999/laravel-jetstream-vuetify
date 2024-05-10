module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // Add specific rules here
    'max-len': 'off',
    'no-bitwise': 'warn',
    'no-shadow': 'warn',
    'prefer-destructuring': 'warn',
    'vue/valid-v-slot': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off', // Allow underscore dangle in Vue components
    'vue/no-multiple-template-root': 'off', // Allow single root template in Vue components
    'vue/multi-word-component-names': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ], // Allow component names to not be multi-word
    'no-undef': 'off', // Ignore 'route' is not defined error
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './resources/js'], // Adjust this path as per your project structure
        ],
        extensions: ['.js', '.vue', '.json'],
      },
    },
  },
};
