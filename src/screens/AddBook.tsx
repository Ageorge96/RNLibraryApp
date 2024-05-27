import {Button} from '@components/Button';
import {Text} from '@components/Text';
import { DropDown } from '@components/customNative/DropDown';
import { GENRE, SORT, STATUS } from '@src/data/screenEnums';
import { backgroundPrimary } from '@src/theme/Theme';
import {StyleSheet, TextInput, View} from 'react-native';

export const AddBook = () => {
  
  return (
    <View
      style={{
        height: '100%',
        marginLeft: 10,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <View style={styles.queryView}>
        <Text>Title</Text>
        <TextInput placeholder="Enter book title" style={styles.textField} />
      </View>
      <View style={styles.queryView}>
        <Text>Author</Text>
        <TextInput placeholder="Enter book author" style={styles.textField} />
      </View>
      <View style={[styles.queryView, styles.dropDownView]}>
        <DropDown dropDownItems={sortDropDown} inverse={true} />
        <DropDown dropDownItems={typeDropDown} inverse={true} />
      </View>
      <View style={styles.queryView}>
        <Text>Pages</Text>
        <TextInput placeholder="Enter book title" style={styles.textField} />
      </View>
      {/* <Text>Cover</Text>
      <TextInput placeholder="Enter book title" style={styles.textField}/> */}
      <Button title="Add book" handlePress={() => console.log(lis)} />
    </View>
  );
};

const lis = Object.keys(GENRE);

const sortDropDown = {
  placeholder: 'Select a genre',
  menuItems: [
    {label: GENRE.ACTION, value: GENRE.ACTION},
    {label: GENRE.BIOGRAPHICAL, value: GENRE.BIOGRAPHICAL},
    {label: GENRE.CLASSICAL, value: GENRE.CLASSICAL},
    {label: GENRE.CRIME, value: GENRE.CRIME},
    {label: GENRE.FANTASY, value: GENRE.FANTASY},
    {label: GENRE.HISTORICAL, value: GENRE.HISTORICAL},
    {label: GENRE.HORROR, value: GENRE.HORROR},
    {label: GENRE.LITERARY, value: GENRE.LITERARY},
    {label: GENRE.MILITARY, value: GENRE.MILITARY},
    {label: GENRE.MYSTERY, value: GENRE.MYSTERY},
    {label: GENRE.NONFICTION, value: GENRE.NONFICTION},
    {label: GENRE.ROMANCE, value: GENRE.ROMANCE},
    {label: GENRE.SCIFI, value: GENRE.SCIFI},
    {label: GENRE.THRILLER, value: GENRE.THRILLER},
    {label: GENRE.YA, value: GENRE.YA},
  ],
};

const typeDropDown = {
  placeholder: 'Select a status',
  menuItems: [
    {label: STATUS.READY, value: STATUS.READY},
    {label: STATUS.ACTIVE, value: STATUS.ACTIVE},
    {label: STATUS.FINISHED, value: STATUS.FINISHED},
    {label: STATUS.NEXT, value: STATUS.NEXT},
  ],
};

// Once field are complete test form submission with console log

const styles = StyleSheet.create({
  queryView: {flex: 1},
  textField: {height: 40, width: 200, borderWidth: 2, borderRadius: 10},
  dropDownInverse: {backgroundColor: backgroundPrimary,
    borderColor: 'black'},
  dropDownView: {flexDirection: 'row', justifyContent: 'center', zIndex: 1},
});
