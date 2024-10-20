module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@data": "./src/data",
          "@utils": "./src/utils",
          "@assets": "./src/assets",
          "@config": "./src/config",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@constants": "./src/constants",
          "@components": "./src/components",
        }
      }
    ]
  ],
}