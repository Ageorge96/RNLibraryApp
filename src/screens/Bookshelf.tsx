/* eslint-disable prettier/prettier */
import {View, Text, Pressable, StyleSheet, SectionList} from 'react-native';
import {Button as RNButton} from '../components/Button';
import { themePrimary } from '../theme';
import { FlatList } from 'react-native-gesture-handler';
import { BookshelfListItem } from '../scenes/bookshelfListItem/BookshelfListItem';
import { faker } from '@faker-js/faker';
import { myBooksMocks } from '../data/MockData';
import { BookshelfBook, BookshelfSectionListProps } from '../scenes/types';
import { StackBTN } from '../components/StackBTN';

export const Bookshelf = () => (
  // Sectionlist
  // header: sort view
  // body: list
  // footer: buttons
  <>
    <SectionList 
    ListHeaderComponent={() => (
      <View style={{alignItems: 'center', marginTop: 5}}>
      <Text style={{color: 'black'}}>Sort</Text>
    </View>
    )}
    sections={myBooksMocks}
    renderItem={BookshelfListItem}
    ListFooterComponent={() => (<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
    <StackBTN title='Add Book' />
    <StackBTN title='Edit Book' />
    <StackBTN title='Remove Book' />
  </View>)}
    // stickySectionHeadersEnabled={true}
    stickyHeaderHiddenOnScroll
    />
  </>
);

const Button = ({title}) => (
  <View style={{borderRadius: 25, overflow: 'hidden', flex: 1, backgroundColor: 'blue'}}>
    <RNButton title={title} />
  </View>
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
