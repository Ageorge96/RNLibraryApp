/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import Config from 'react-native-config';

console.log(Config.ENABLE_STORYBOOK);

let AppEntryPoint =
  Config.ENABLE_STORYBOOK === 'true' ? require('./.storybook').default : App;

AppRegistry.registerComponent(appName, () => AppEntryPoint);
