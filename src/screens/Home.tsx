import {Dimensions, FlatList, View} from 'react-native';
import {bookmarkData, wishlistData} from '@src/data/MockData';
import {styles} from './styles';
import {HomeScreenFlatList} from '@src/feature/HomeFlatListSection/HomeScreenFlatList';
import {Text} from '@components/Text';
// import Carousel from 'react-native-reanimated-carousel';
import {faker} from '@faker-js/faker';
import {V} from '@storybook/react-native/dist/View-9ba91d66';
import {Cover} from '@components/index';
import {themeSecondary} from '@src/theme/Theme';
import {Carousel} from '@src/feature/Carousel/Carousel';
import {DummyScreen} from '@src/feature/Carousel/dumy';

// The same data should be able to be passed in without edit, adjustments to data should be handled within component
export const Home = () => (
  <>
    <View style={styles.homeTitleView}>
      <Text style={{fontSize: 24, color: 'black'}}>My Bookmarks</Text>
    </View>
    <HomeScreenFlatList data={bookmarkData} />
    <View style={[styles.homeTitleView, {marginTop: 5}]}>
      <Text style={styles.homeTextText}>Wishlist</Text>
    </View>
    <HomeScreenFlatList data={wishlistData} />
    {/* <View style={{flex: 1, marginTop: 5}}>
      <Carousel 
        loop
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height / 3}
        autoPlay
        style={{flex: 1, justifyContent: 'center'}}
        
        data={covers}
        renderItem={({index}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: '30%', height: '90%', borderWidth: 1, borderRadius: 25, overflow: 'hidden',}}>
              <Cover cover={covers[index]} title={`${index}`} />
            </View>
          </View>
        )}
      />
    </View> */}
    {/* <Carousel /> */}
    
    <DummyScreen />
  </>
);

const covers = [
  faker.image.url(),
  faker.image.url(),
  faker.image.url(),
  faker.image.url(),
];
