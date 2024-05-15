/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import Config from 'react-native-config';

let AppEntryPoint = App;

console.log(Config.ENABLE_STORYBOOK);
if (Config.ENABLE_STORYBOOK === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

AppRegistry.registerComponent(appName, () => AppEntryPoint);
