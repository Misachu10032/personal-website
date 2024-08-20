module.exports = {
  env: {
    node: true,
  },
  extends: [
    'molindo/typescript',
    'molindo/react',
    'molindo/tailwind',
    'plugin:@next/next/recommended',
    'prettier', // Ensure compatibility with Prettier formatting
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // Disable no-unused-vars rule for TypeScript
    'react/function-component-definition': 'off',
    '@next/next/no-img-element': 'off',
    'func-style': 'off',
    'react/button-has-type': 'off',
    'import/order': 'off', // Disable import order rule
    'prettier/prettier': 'off', // Disable prettier errors
    'tailwindcss/classnames-order': 'off', // Disable tailwind classnames order rule
    'react/jsx-sort-props': 'off', // Disable prop sorting rule
    'jsx-a11y/anchor-is-valid': 'off', // Disable a11y rule for anchor validity
    'jsx-a11y/click-events-have-key-events': 'off', // Disable a11y click event key event rule
    'jsx-a11y/no-static-element-interactions': 'off', // Disable a11y rule for static element interactions
  },
};
