module.exports = {
  "extends": ["react-app", "plugin:prettier/recommended"],
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "rules": {
    "react-hooks/exhaustive-deps": "off",
    'prettier/prettier': 1
  }
};