import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '@src/constants/screenEnums';
import {AddBook} from '@src/screens/AddBook';
import {Bookshelf} from '@src/screens/Bookshelf';

const {Navigator, Screen} = createStackNavigator();

export const StackNavigator = () => (
  <Navigator initialRouteName={SCREENS.BSSTACK}>
    <Screen
      name={SCREENS.BSSTACK}
      component={Bookshelf}
      options={{headerShown: false}}
    />
    <Screen name={SCREENS.ADDBOOK} component={AddBook} options={{headerShown: true}} />
  </Navigator>
);
