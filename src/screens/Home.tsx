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
import { styles } from './styles';
import { styles as tempstyle } from '../scenes/styles';

// The same data should be able to be passed in without edit, adjustments to data should be handled within component
export const Home = () => (
  <>
    <View style={styles.homeTitleView}>
      <Text style={{fontSize: 24, color: 'black'}}>My Bookmarks</Text>
    </View>
    <FlatList data={bookmarkData} renderItem={BookmarkItem} horizontal />
    <View style={styles.homeTitleView}>
      <Text style={styles.homeTextText}>Wishlist</Text>
    </View>
    <View style={tempstyle.bookmarkScene}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 15, marginTop: 15, flex: 1}}>Title:</Text>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 15, marginTop: 15, flex: 1}}>Title:</Text>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 15, marginTop: 15, flex: 1}}>Title:</Text>
      </View>
    </View>
  </>
);

// const styles = StyleSheet.create({
//   bookmarkScene: {
//     width: 225,
//     height: 150,
//     backgroundColor: themePrimary,
//     borderRadius: 35,
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'white',
//     flex: 1,
//   },
// });
