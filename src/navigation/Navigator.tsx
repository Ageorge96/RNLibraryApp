import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator';
import {CustomTheme} from '@src/navigation/theme';

export const Navigation = () => (
  <NavigationContainer theme={CustomTheme}>
    <DrawerNavigator />
  </NavigationContainer>
);
