import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './DrawerNavigator/DrawerNavigator';
import {NAVIGATORS, SCREENS} from '@src/constants/screenEnums';
import {AddBook} from '@src/screens/AddBook';
import {Profile} from '@src/screens/Profile';

const {Navigator, Group, Screen} = createStackNavigator();
export const RootStack = () => (
  <Navigator>
    <Group
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={NAVIGATORS.DRAWER} component={DrawerNavigator} />
    </Group>
    <Group
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}>
      <Screen
        name={SCREENS.ADDBOOK}
        component={AddBook}
        options={{headerShown: true, headerBackTitle: 'Bookshelf'}}
      />
      <Screen
        name={SCREENS.PROFILE}
        component={Profile}
        options={{headerShown: true}}
      />
    </Group>
  </Navigator>
);
