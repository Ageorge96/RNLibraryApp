import {View} from 'react-native';
import {Text} from '@components/Text';
import {themePrimary} from '@src/theme';
import {styles} from './styles';
import {SORT} from '@src/data/screenEnums';
import {DropDown} from '@components/DropDown';

const sortDropDown = {
  placeholder: 'Sorting order',
  menuItems: [
    {label: 'Ascending', value: 'ASD'},
    {label: 'Descending', value: 'DESC'},
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

export const BookshelfHeader = () => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: SORT.TITLE, value: SORT.TITLE},
  //   {label: SORT.AUTHOR, value: SORT.AUTHOR},
  //   {label: SORT.GENRE, value: SORT.GENRE},
  //   {label: SORT.STATUS, value: SORT.STATUS},
  //   {label: SORT.BOOKMARK, value: SORT.BOOKMARK},
  // ]);
  // const [sortOpen, setSortOpen] = useState(false);
  // const [sortValue, setSortValue] = useState(null);
  // const [sortItems, setSortItems] = useState([
  //   {label: 'Ascending', value: 'ASD'},
  //   {label: 'Descending', value: 'DESC'},
  // ]);

  return (
    <View style={{backgroundColor: themePrimary, padding: 5, zIndex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'white', marginHorizontal: 8, fontWeight: 'bold'}}>
          Sort:
        </Text>
        <DropDown dropDownItems={typeDropDown} />
        <DropDown dropDownItems={sortDropDown} />
        {/* <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select a type"
          style={styles.BookshelfSortDropdown}
          dropDownContainerStyle={styles.BookshelfSortDropdown}
          textStyle={{color: 'white'}}
          arrowIconStyle={{tintColor: 'white'}}
          containerProps={{style: {width: 150, marginRight: 10}}}
        /> */}
        {/* <DropDownPicker
          open={sortOpen}
          value={sortValue}
          items={sortItems}
          setOpen={setSortOpen}
          setValue={setSortValue}
          placeholder="Sort order"
          style={styles.BookshelfSortDropdown}
          dropDownContainerStyle={styles.BookshelfSortDropdown}
          textStyle={{color: 'white'}}
          arrowIconStyle={{tintColor: 'white'}}
          containerProps={{style: {width: 150, marginRight: 10}}}
        /> */}
      </View>
    </View>
  );
};
