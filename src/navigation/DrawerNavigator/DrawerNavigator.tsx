import {createDrawerNavigator} from '@react-navigation/drawer';
import {Bookshelf} from '@src/screens/Bookshelf';
import {HomeScreen} from '@src/screens/HomeScreen';
import {styles} from './styles';
import {Profile} from '@src/screens/Profile';
import { DrawerCustomerView } from './DrawerCustomView';

export const DrawerNavigator = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Bookshelf: Bookshelf,
    Wishlist: Bookshelf,
    Profile: Profile //change to modal
  },
  drawerContent: DrawerCustomerView,
  screenOptions: {
    drawerStyle: styles.drawerStyle,
    drawerLabelStyle: styles.drawerLabelStyle,
  },
  initialRouteName: 'Home'
})
