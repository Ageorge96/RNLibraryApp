import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './DrawerNavigator';
import {NAVIGATORS, SCREENS} from '@src/data/screenEnums';
import {AddBook} from '@src/screens/AddBook';

const {Navigator, Group, Screen} = createStackNavigator();
export const RootStack = () => (
  <Navigator>
    <Group screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={NAVIGATORS.DRAWER} component={DrawerNavigator} />
    </Group>
    <Group
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}>
      <Screen name={SCREENS.ADDBOOK} component={AddBook} />
    </Group>
  </Navigator>
);
