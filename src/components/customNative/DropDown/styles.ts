import {StyleSheet} from 'react-native';
import {styles as BSStyles} from '@src/feature/BookshelfSectionList/styles';
import {themeSecondary} from '@src/theme/Theme';

export const styles = StyleSheet.create({
  QueryView: {flex: 1, marginHorizontal: 10},
  QueryTitle: {color: 'black', marginBottom: 2, marginLeft: 5, fontSize: 18},
  BookshelfDropDown: BSStyles.BookshelfDropDown,
  BookshelfDropDownInverse: BSStyles.BookshelfDropDownInverse,
  ItemSeparator: {width: '75%', marginHorizontal: 'auto'},
  FontStyle: {color: themeSecondary, fontWeight: 'bold'},
  FontStyleInverse: {fontWeight: 'bold'},
  ArrowIcon: {tintColor: themeSecondary},
  ArrowIconInverse: {tintColor: 'black'},
  ContainerProp: {width: 150, marginRight: 10},
});
