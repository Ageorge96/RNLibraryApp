import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Button as RNButton} from '../components/Button';
import { themePrimary } from '../theme';
import { FlatList } from 'react-native-gesture-handler';

export const Bookshelf = () => (
  // Sectionlist
  // header: sort view
  // body: list
  // footer: buttons
  <>
  <View style={{alignItems: 'center', marginTop: 5}}>
    <Text style={{color: 'black'}}>Sort</Text>
  </View>
  <View style={{justifyContent: 'flex-end', alignItems: 'baseline'}}>
    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button title="Add Book" />
      <Button title="Edit Book" />
      <Button title="Remove Book" />
    </View> */}
    <View style={styles.listItem}>
      <View style={{flex: 2}}>
        <Text style={styles.listFont}>Title: </Text>
        <Text style={styles.listFont}>Author: </Text>
        <Text style={styles.listFont}>Genre: </Text>
        <Text style={styles.listFont}>Status: </Text>
      </View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'white'}}></View>
      </View>
    </View>
    <View style={styles.listItem}>
      <View style={{flex: 2}}>
        <Text style={styles.listFont}>1</Text>
        <Text style={styles.listFont}>1</Text>
        <Text style={styles.listFont}>1</Text>
      </View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'white'}}></View>
      </View>
    </View>



    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <StackBTN title='Add Book' />
      <StackBTN title='Edit Book' />
      <StackBTN title='Remove Book' />
    </View>
  </View>
  </>
);

const Button = ({title}) => (
  <View style={{borderRadius: 25, overflow: 'hidden', flex: 1, backgroundColor: 'blue'}}>
    <RNButton title={title} />
  </View>
);

const StackBTN = ({title}: {title: string}) => (
  <Pressable style={styles.stackBtn}>
    <Text style={{color: 'white', fontSize: 14}}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  stackBtn: {
    height: 40,
    width: 10,
    borderRadius: 25,
    flex: 1,
    backgroundColor: themePrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    flexDirection: 'row'
  },
  listFont: {
    fontSize: 20,
  }
});
