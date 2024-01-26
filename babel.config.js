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
          '@storage': './src/storage',
          '@queryclient': './src/query-client',
          '@config': './src/config',
          '@integrations': './src/integrations',
          '@store': './src/store',
          '@rest-client': './src/rest-client',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@views': './src/app/views',
          '@common': './src/app/common',
          '@domain': './src/app/domain',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
