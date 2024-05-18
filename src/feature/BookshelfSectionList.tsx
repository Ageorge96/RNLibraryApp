import {StackBTN} from '@components/StackBTN';
import {BookshelfListItem} from '@components/scenes/bookshelfListItem/BookshelfListItem';
import {useBookshelfReducer} from '@src/reducer/useBookshelfReducer';
import {themePrimary} from '@src/theme';
import {SectionList, View, Text} from 'react-native';

export const BookshelfSectionList = () => {
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
        ListFooterComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <StackBTN title="Add Book" />
            <StackBTN title="Edit Book" />
            <StackBTN title="Remove Book" />
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 5, backgroundColor: themePrimary}} />
        )}
        stickyHeaderHiddenOnScroll
      />
    </>
  );
};
