import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {themePrimary} from '../theme';
import { BookmarkItem } from '@src/scenes/bookmarkScene/BookmarkItem';
import { bookmarkData } from '@src/data/MockData';

export const Home = () => (
  <>
    <View style={{justifyContent: 'center', marginTop: 15, marginLeft: 20}}>
      <Text style={{fontSize: 24, color: 'black'}}>My Bookmarks</Text>
    </View>
    <FlatList data={bookmarkData} renderItem={BookmarkItem} horizontal />
  </>
);


const styles = StyleSheet.create({
  bookmarkScene: {
    width: 225,
    height: 150,
    backgroundColor: themePrimary,
    borderRadius: 35,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
});
