import { themePrimary } from '@src/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  BookshelfHeaderContainer: {
    backgroundColor: themePrimary,
    padding: 5,
    zIndex: 1,
  },
  BookshelfHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  BookshelfSortDropdown: {
    width: 150,
    backgroundColor: themePrimary,
    borderColor: 'white',
  },
});
