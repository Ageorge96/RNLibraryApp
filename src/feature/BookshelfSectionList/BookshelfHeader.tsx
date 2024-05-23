import {View} from 'react-native';
import {Text} from '@components/Text';
import {styles} from './styles';
import {SORT} from '@src/data/screenEnums';
import {DropDown} from '@components/DropDown';

const sortDropDown = {
  placeholder: 'Sorting order',
  menuItems: [
    {label: SORT.ASD, value: SORT.ASD},
    {label: SORT.DESC, value: SORT.DESC},
  ],
};

const typeDropDown = {
  placeholder: 'Select a type',
  menuItems: [
    {label: SORT.TITLE, value: SORT.TITLE},
    {label: SORT.AUTHOR, value: SORT.AUTHOR},
    {label: SORT.GENRE, value: SORT.GENRE},
    {label: SORT.STATUS, value: SORT.STATUS},
    {label: SORT.BOOKMARK, value: SORT.BOOKMARK},
  ],
};

export const BookshelfHeader = () => (
  <View style={styles.BookshelfHeaderContainer}>
    <View style={styles.BookshelfHeaderView}>
      <Text style={{color: 'white', marginHorizontal: 8, fontWeight: 'bold'}}>
        Sort:
      </Text>
      <DropDown dropDownItems={typeDropDown} />
      <DropDown dropDownItems={sortDropDown} />
    </View>
  </View>
);
