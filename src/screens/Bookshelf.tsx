import { BookshelfSectionList } from '@src/feature/BookshelfSectionList/BookshelfSectionList';
import { AddBook } from './AddBook';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Bookshelf = createNativeStackNavigator({
  screens: {
    Bookshelf: BookshelfSectionList,
    Add: AddBook
  },
  screenOptions: {
    headerShown: false
  }
})
