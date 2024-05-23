import {StackBTN} from '@components/StackBTN';
import {BookshelfListItem} from '@components/scenes/bookshelfListItem/BookshelfListItem';
import {useBookshelfReducer} from '@src/reducer/useBookshelfReducer';
import {themePrimary} from '@src/theme';
import {SectionList, View, Text, StyleSheet} from 'react-native';
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
      <View style={{width: '100%', height: 60, backgroundColor: themePrimary, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={[styles.barView, {borderEndWidth: 5}]}>
          <Text style={styles.bar}>Add Book</Text>
        </View>
        <View style={styles.barView} >
          <Text style={styles.bar}>Edit Book</Text>
        </View>
        <View style={[styles.barView, {borderStartWidth: 5}]}>
          <Text style={styles.bar}>Remove Book</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bar: {color: themeSecondary, marginHorizontal: 'auto', justifyContent: 'center', alignItems: 'center'},
  barView: {borderColor: themeSecondary, flex: 1, paddingTop: 5}
})
