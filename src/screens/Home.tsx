import {View} from 'react-native';
import {bookmarkData, wishlistData} from '@src/data/MockData';
import {styles} from './styles';
import {HomeScreenFlatList} from '@src/feature/HomeScreenFlatList';
import {Text} from '@components/Text';

// The same data should be able to be passed in without edit, adjustments to data should be handled within component
export const Home = () => (
  <>
    <View style={styles.homeTitleView}>
      <Text style={{fontSize: 24, color: 'black'}}>My Bookmarks</Text>
    </View>
    <HomeScreenFlatList data={bookmarkData} />
    <View style={styles.homeTitleView}>
      <Text style={styles.homeTextText}>Wishlist</Text>
    </View>
    <HomeScreenFlatList data={wishlistData} />
  </>
);
