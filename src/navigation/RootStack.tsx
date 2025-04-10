import {DrawerNavigator} from './DrawerNavigator/DrawerNavigator';
import {Profile} from '@src/screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AddBookStack } from './AddBookStack';

export const RootStack = createNativeStackNavigator({
  screens: {
    DrawerNav: {
      screen: DrawerNavigator,
      options: {
        headerShown: false,
      },
    },
    Add: AddBookStack,
    Profile: {
      screen: Profile,
      options: {
        presentation: 'modal',
      },
    },
  },
});
