module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  rules: {
    'prettier/prettier': 'off', // Disable Prettier formatting errors
    '@typescript-eslint/array-type': 'off', // Disable array-type rule
    'react/self-closing-comp': 'off', // Disable self-closing components rule
    'no-console': 'off', // Disable console statement errors
    'jsx-a11y/img-redundant-alt': 'off', // Disable redundant alt attribute warnings
    'import/no-extraneous-dependencies': 'off', // Allow extraneous dependencies
    '@typescript-eslint/method-signature-style': 'off', // Allow function property signature
    'sort-destructure-keys/sort-destructure-keys': 'off', // Disable object key sorting rule
    'arrow-body-style': 'off', // Disable arrow body style rule
    'react/jsx-sort-props': 'off', // Disable props sorting rule
    'react/jsx-no-duplicate-props': 'off', // Allow duplicate props
  },
};
