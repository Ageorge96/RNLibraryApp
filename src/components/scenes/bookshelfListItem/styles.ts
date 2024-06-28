import {backgroundPrimary} from '@src/theme/Theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bookshelfTitleView: {
    fontWeight: 'bold',
    marginTop: 5,
    marginHorizontal: 'auto',
    paddingHorizontal: 15,
  },
  bookshelfListItem: {
    padding: 10,
    flexDirection: 'row',
  },
  listFont: {
    fontSize: 18,
    color: 'black',
  },
  listItemContentView: {
    flex: 2,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  listItemImageView: {
    width: 100,
    height: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {width: 80, height: 120, backgroundColor: 'white'},
  storyView: {
    backgroundColor: backgroundPrimary,
    justifyContent: 'center',
    flex: 1,
  },
});
