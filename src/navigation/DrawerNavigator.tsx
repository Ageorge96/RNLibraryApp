import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bookshelf} from '../screens/Bookshelf';
import {Home} from '../screens/Home';

const {Navigator, Screen} = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const DrawerNavigator = () => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={Home} />
    <Screen name="Bookshelf" component={Bookshelf} />
  </Navigator>
  // <Tab.Navigator>
  //   <Tab.Screen name="Home" component={Home} />
  //   <Tab.Screen name="Bookshelf" component={Bookshelf} />
  // </Tab.Navigator>
);
