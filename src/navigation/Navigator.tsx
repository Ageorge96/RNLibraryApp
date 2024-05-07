import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator';
import { backgroundPrimary } from '@src/theme/Theme';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: backgroundPrimary,
  },
};

export const Navigation = () => (
  <NavigationContainer theme={CustomTheme}>
    <DrawerNavigator />
  </NavigationContainer>
);
