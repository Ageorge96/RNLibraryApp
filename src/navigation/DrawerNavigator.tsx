import {createDrawerNavigator} from '@react-navigation/drawer';
import {Bookshelf} from '../screens/Bookshelf';
import {Home} from '../screens/Home';
import { themePrimary } from '../theme';

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      drawerStyle: {backgroundColor: themePrimary},
      drawerLabelStyle: {color: 'white'},
    }}>
    <Screen name="Home" component={Home} />
    <Screen name="Bookshelf" component={Bookshelf} />
  </Navigator>
);
