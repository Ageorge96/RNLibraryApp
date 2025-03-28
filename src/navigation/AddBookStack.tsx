import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddBookForm } from '@src/feature/AddBookForm/AddBookForm';

export const AddBookStack = createNativeStackNavigator({
  screens: {
    Addbook: AddBookForm
  },
  screenOptions: {
    headerShown: false,
  }
});
