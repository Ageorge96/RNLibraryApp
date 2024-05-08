/* eslint-disable prettier/prettier */
import {View, Text, SectionList} from 'react-native';
import { BookshelfListItem } from '@src/scenes/bookshelfListItem/BookshelfListItem';
import { myBooksMocks } from '@src/data/MockData';
import { Dropdown } from 'react-native-element-dropdown';


import { StackBTN } from '@components/StackBTN';

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
    stickyHeaderHiddenOnScroll
    />
  </>
);

