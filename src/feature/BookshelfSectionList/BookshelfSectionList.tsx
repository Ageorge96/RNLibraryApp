import {StackBTN} from '@components/StackBTN';
import {BookshelfListItem} from '@components/scenes/bookshelfListItem/BookshelfListItem';
import {useBookshelfReducer} from '@src/reducer/useBookshelfReducer';
import {themePrimary} from '@src/theme';
import {SectionList, View, Text, StyleSheet, Pressable} from 'react-native';
import { BookshelfHeader } from './BookshelfHeader';
import { themeSecondary } from '@src/theme/Theme';

export const BookshelfSectionList = () => {
  const {transformedBookshelfData} = useBookshelfReducer();

  return (
    // Sectionlist
    // header: sort view
    // body: list
    // footer: buttons
    <>
      <BookshelfHeader />
      <SectionList
        sections={transformedBookshelfData}
        renderItem={BookshelfListItem}
        // ListFooterComponent={() => (
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       justifyContent: 'space-between',
        //       alignItems: 'center',
        //     }}>
        //     <StackBTN title="Add Book" />
        //     <StackBTN title="Edit Book" />
        //     <StackBTN title="Remove Book" />
        //   </View>
        // )}
        ItemSeparatorComponent={() => (
          <View style={{height: 5, backgroundColor: themePrimary}} />
        )}
        stickyHeaderHiddenOnScroll
      />
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: themePrimary,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable style={[styles.barView, {borderEndWidth: 2}]} onPress={() => {console.log('1')}}>
          <Text style={styles.bar}>Add Book</Text>
        </Pressable>
        <Pressable style={styles.barView} onPress={() => {console.log('2')}}>
          <Text style={styles.bar}>Edit Book</Text>
        </Pressable>
        <Pressable style={[styles.barView, {borderStartWidth: 2}]} onPress={() => {console.log('3')}}>
          <Text style={styles.bar}>Remove Book</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bar: {
    color: themeSecondary,
    fontSize: 18,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barView: {borderColor: themeSecondary, flex: 1, paddingTop: 5},
});
