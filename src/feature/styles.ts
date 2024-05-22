import { Bookshelf } from '@src/screens/Bookshelf';
import { themePrimary } from '@src/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  BookshelfHeaderView: {
    alignItems: 'center',
    marginTop: 5,
  },
  BookshelfSortDropdown: {
    width: 150,
    backgroundColor: themePrimary,
    borderColor: 'white',
  },
});
