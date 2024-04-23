
import {NavigationContainer} from '@react-navigation/native';
import { DrawerNavigator } from './DrawerNavigator';
import { View } from 'react-native';

export const Navigation = () => (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
);
