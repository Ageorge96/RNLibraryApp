import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#eee7d7',
  },
};

export const Navigation = () => (
  <NavigationContainer theme={CustomTheme}>
    <DrawerNavigator />
  </NavigationContainer>
);
