import {createDrawerNavigator} from '@react-navigation/drawer';
import {Bookshelf} from '@src/screens/Bookshelf';
import {Home} from '@src/screens/Home';
import {DrawerCustomerView} from './DrawerCustomView';
import {SCREENS} from '@src/constants/screenEnums';
import {styles} from './styles';
import {Profile} from '@src/screens/Profile';

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Navigator
    initialRouteName={SCREENS.HOME}
    drawerContent={props => <DrawerCustomerView {...props} />}
    screenOptions={{
      drawerStyle: styles.drawerStyle,
      drawerLabelStyle: styles.drawerLabelStyle,
    }}>
    <Screen name={SCREENS.HOME} component={Home} />
    <Screen name={SCREENS.BOOKSHELF} component={Bookshelf} />
    <Screen name={SCREENS.WISHLIST} component={Bookshelf} />
    <Screen
      name={'Placeholder'}
      component={Profile}
      options={{title: SCREENS.PROFILE}}
      listeners={({navigation}) => ({
        drawerItemPress: event => {
          event.preventDefault();
          navigation.navigate(SCREENS.PROFILE);
        },
      })}
    />
  </Navigator>
);
