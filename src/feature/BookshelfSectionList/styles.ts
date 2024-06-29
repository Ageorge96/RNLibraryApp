import { Bookshelf } from '@src/screens/Bookshelf';
import { themePrimary } from '@src/theme';
import { backgroundPrimary, themeSecondary } from '@src/theme/Theme';
import {StyleSheet} from 'react-native';
import { BookshelfHeader } from './BookshelfHeader';

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
  BookshelfHeaderText: {
    color: themeSecondary,
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  BookshelfDropDown: {
    width: 150,
    backgroundColor: themePrimary,
    borderColor: themeSecondary,
  },
  BookshelfDropDownInverse: {
    width: 150,
    backgroundColor: backgroundPrimary,
  },
  itemSeperatorComponent: {height: 5, backgroundColor: themePrimary},
  headerStoryView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: backgroundPrimary,
  },
});
