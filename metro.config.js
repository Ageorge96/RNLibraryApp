/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {generate} = require('@storybook/react-native/scripts/generate');
const path = require('path');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    unstable_allowRequireContext: true,
  },
};
