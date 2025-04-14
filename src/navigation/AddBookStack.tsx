import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddBookForm } from '@src/feature/AddBookForm/AddBookForm';
import { CoverModal } from '@src/screens/CoverModal';

export const AddBookStack = createNativeStackNavigator({
  screens: {
    AddBook: AddBookForm,
    Cover: {screen: CoverModal, options: {presentation: 'modal'}}
  },
  screenOptions: {
    headerShown: false,
  },
  initialRouteName: 'AddBook'
});
