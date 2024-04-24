import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {themePrimary} from '../theme';
import * as cover from '../assets/cover.png';
import {BookmarkScene} from '../scenes/bookmarkScene/BookmarkScene';
import {ScrollView} from 'react-native-gesture-handler';
import { BookmarkItem } from '../scenes/bookmarkScene/BookmarkItem';
import { bookmarkData } from '../data/MockData';

export const Home = () => (
  <>
    <View style={{justifyContent: 'center', marginTop: 15, marginLeft: 20}}>
      <Text style={{fontSize: 24, color: 'black'}}>My Bookmarks</Text>
    </View>
    <FlatList data={bookmarkData} renderItem={BookmarkItem} horizontal />
  </>
);

const Cover = () => (
  <>
    <Image
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://d1uvxqwmcz8fl1.cloudfront.net/tes/resources/6441170/45b3db43-ab3d-42a4-9a8a-5053d8fd5013/image?width=500&height=500&version=1474643904786',
      }}
    />
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
