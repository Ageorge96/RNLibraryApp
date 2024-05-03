/* eslint-disable prettier/prettier */
import {View, Text, SectionList} from 'react-native';
import {Button as RNButton} from '../components/Button';
import { BookshelfListItem } from '../scenes/bookshelfListItem/BookshelfListItem';
import { myBooksMocks } from '../data/MockData';
import { Dropdown } from 'react-native-element-dropdown';


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
    stickyHeaderHiddenOnScroll
    />
  </>
);

const Button = ({title}) => (
  <View style={{borderRadius: 25, overflow: 'hidden', flex: 1, backgroundColor: 'blue'}}>
    <RNButton title={title} />
  </View>
);
