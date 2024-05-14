const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
};

// const {generate} = require('@storybook/react-native/scripts/generate');
// const path = require('path');

// generate({
//   configPath: path.resolve(__dirname, './.storybook'),
// });

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
