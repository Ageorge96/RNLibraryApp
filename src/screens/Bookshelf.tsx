/* eslint-disable prettier/prettier */
import {View, Text, SectionList} from 'react-native';
import { BookshelfListItem } from '@src/scenes/bookshelfListItem/BookshelfListItem';
import { StackBTN } from '@components/StackBTN';
import { useBookshelfReducer } from '@src/reducer/useBookshelfReducer';

export const Bookshelf = () => {
  const {transformedBookshelfData} = useBookshelfReducer();
  
  return (
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
      sections={transformedBookshelfData}
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
};
