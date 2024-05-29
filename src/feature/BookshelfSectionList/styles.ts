import { themePrimary } from '@src/theme';
import { backgroundPrimary, themeSecondary } from '@src/theme/Theme';
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
  BookshelfDropDown: {
    width: 150,
    backgroundColor: themePrimary,
    borderColor: themeSecondary,
  },
  BookshelfDropDownInverse: {
    width: 150,
    backgroundColor: backgroundPrimary,
  },
});
