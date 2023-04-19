module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
  },
};
