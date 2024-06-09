import {createDrawerNavigator} from '@react-navigation/drawer';
import {Bookshelf} from '@src/screens/Bookshelf';
import {Home} from '@src/screens/Home';
import { themePrimary } from '@src/theme';
import { DrawerCustomerView } from './DrawerCustomerView';
import { NAVIGATORS, SCREENS } from '@src/data/screenEnums';
import { AddBook } from '@src/screens/AddBook';
import { StackNavigator } from './StackNavigator';

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerCustomerView {...props} />}
    screenOptions={{
      drawerStyle: {backgroundColor: themePrimary},
      drawerLabelStyle: {color: 'white', fontSize: 18},
    }}>
    <Screen name={SCREENS.HOME} component={Home} />
    <Screen name={SCREENS.BOOKSHELF} component={Bookshelf} />
    <Screen name={SCREENS.WISHLIST} component={Bookshelf} />
    <Screen name={SCREENS.PROFILE} component={Bookshelf} />
  </Navigator>
);
