import {BookshelfListItem} from '@components/scenes/bookshelfListItem/BookshelfListItem';
import {useBookshelfReducer} from '@src/reducer/useBookshelfReducer';
import {themePrimary} from '@src/theme';
import {SectionList, View, Text, StyleSheet, Pressable} from 'react-native';
import {BookshelfHeader} from './BookshelfHeader';
import {themeSecondary} from '@src/theme/Theme';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const BookshelfSectionList = () => {
  const {transformedBookshelfData} = useBookshelfReducer();
  const navigation = useNavigation();

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
          <View style={styles.itemSeperatorComponent} />
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
        <Pressable
          style={[barStyles.barView, {borderEndWidth: 2}]}
          onPress={() => {navigation.navigate('Add')}}>
          <Text style={barStyles.bar}>Add Book</Text>
        </Pressable>
        <Pressable
          style={barStyles.barView}
          onPress={() => {
            console.log('2');
          }}>
          <Text style={barStyles.bar}>Edit Book</Text>
        </Pressable>
        <Pressable
          style={[barStyles.barView, {borderStartWidth: 2}]}
          onPress={() => {
            console.log('3');
          }}>
          <Text style={barStyles.bar}>Remove Book</Text>
        </Pressable>
      </View>
    </>
  );
};

const barStyles = StyleSheet.create({
  bar: {
    color: themeSecondary,
    fontSize: 18,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barView: {borderColor: themeSecondary, flex: 1, paddingTop: 5},
});
