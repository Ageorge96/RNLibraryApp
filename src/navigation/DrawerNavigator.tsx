import {createDrawerNavigator} from '@react-navigation/drawer';
import {Bookshelf} from '../screens/Bookshelf';
import {Home} from '../screens/Home';
import { themePrimary } from '../theme';
import { DrawerCustomerView } from './DrawerCustomerView';

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerCustomerView {...props} />}
    screenOptions={{
      drawerStyle: {backgroundColor: themePrimary},
      drawerLabelStyle: {color: 'white', fontSize: 18},
    }}>
    <Screen name="Home" component={Home} />
    <Screen name="Bookshelf" component={Bookshelf} />
    <Screen name="Wishlist" component={Bookshelf} />
    <Screen name="Profile" component={Bookshelf} />
  </Navigator>
);
