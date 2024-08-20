module.exports = {
  env: {
    node: true
  },
  extends: [
    'molindo/typescript',
    'molindo/react',
    'molindo/tailwind',
    'plugin:@next/next/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off' // Disable the no-unused-vars rule for TypeScript
  }
};
