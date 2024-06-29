import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator/DrawerNavigator';
import {CustomTheme} from '@src/navigation/theme';
import { RootStack } from './RootStack';

export const Navigation = () => (
  <NavigationContainer theme={CustomTheme}>
    <RootStack />
  </NavigationContainer>
);
