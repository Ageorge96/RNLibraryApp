import {View} from 'react-native';
import {bookmarkData, wishlistData} from '@src/constants/MockData';
import {styles} from './styles';
import {HomeScreenFlatList} from '@src/feature/HomeFlatListSection/HomeScreenFlatList';
import {Text} from '@components/customNative/Text/Text';
import {DummyScreen} from '@src/feature/Carousel/dumy';

// The same data should be able to be passed in without edit, adjustments to data should be handled within component
export const Home = () => (
  <>
    <View style={styles.homeTitleView}>
      <Text style={styles.homeText}>My Bookmarks</Text>
    </View>
    <HomeScreenFlatList data={bookmarkData} />
    <View style={[styles.homeTitleView, {marginTop: 5}]}>
      <Text style={styles.homeText}>Wishlist</Text>
    </View>
    <HomeScreenFlatList data={wishlistData} />
    {/* <Carousel /> */}
    <DummyScreen />
  </>
);
