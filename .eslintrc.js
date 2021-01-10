module.exports = {
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['react'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    'no-nested-ternary': ['off'],
  },
};
