import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddBookForm } from '@src/feature/AddBookForm/AddBookForm';
import { CoverPreview } from '@src/feature/CoverPreview/CoverPreview';

export const AddBookStack = createNativeStackNavigator({
  screens: {
    AddBook: AddBookForm,
    Cover: CoverPreview
  },
  screenOptions: {
    headerShown: false,
  },
  initialRouteName: 'AddBook'
});
