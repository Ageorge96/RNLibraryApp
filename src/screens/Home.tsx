import {SectionList, StyleSheet, Text, View} from 'react-native';

export const Home = () => (
  <>
  <View style={{justifyContent: 'center', marginTop: 15, marginLeft: 20}}>
    <Text style={{fontSize: 24}}>
      My Bookmarks
    </Text>
  </View>
  <View>
    <View style={styles.bookmarkField}>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Text style={styles.title}>Title: Title</Text>
      <Text style={{flex: 1}}>Author: Author</Text>
      <Text style={{flex: 1}}>Bookmark: 000</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: 100, height: 150, backgroundColor: 'green'}}>

        </View>
      </View>
    </View>
  </View>
  </>
);

const styles = StyleSheet.create({
  bookmarkField: {
    width: 300,
    height: 200,
    backgroundColor: '#800020',
    borderRadius: 50,
    margin: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
});
