import {DrawerNavigator} from './DrawerNavigator/DrawerNavigator';
import {AddBook} from '@src/screens/AddBook';
import {Profile} from '@src/screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator({
  screens: {
    DrawerNav: {
      screen: DrawerNavigator,
      options: {
        headerShown: false,
      }
    },
    Add: AddBook,
    Profile: {
      screen: Profile,
      options: {
        presentation: 'modal'
      }
    }
  }
})