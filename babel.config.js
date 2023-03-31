module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransromReactJSXExperimental: true},
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
