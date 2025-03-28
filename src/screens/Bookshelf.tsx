import { BookshelfSectionList } from '@src/feature/BookshelfSectionList/BookshelfSectionList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Bookshelf = createNativeStackNavigator({
  screens: {
    Bookshelf: BookshelfSectionList,
  },
  screenOptions: {
    headerShown: false
  }
})
