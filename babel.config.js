module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@views': './src/app/views',
          '@storage': './src/storage',
          '@common': './src/app/common',
          '@store': './src/store',
          '@queryclient': './src/query-client',
        },
      },
    ],
  ],
};
