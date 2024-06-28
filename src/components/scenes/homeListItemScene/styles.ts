import {StyleSheet} from 'react-native';
import {themePrimary} from '@src/theme';

// hS = BookmarkScene

export const styles = StyleSheet.create({
  homeListItemScene: {
    width: 245,
    height: 150,
    backgroundColor: themePrimary,
    borderRadius: 35,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  hSText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  hSContent: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 10,
  },
});
