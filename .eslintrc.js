module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
