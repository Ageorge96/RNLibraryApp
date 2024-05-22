import {View} from 'react-native';
import {Text} from '@components/Text';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import { themePrimary } from '@src/theme';
import { backgroundPrimary } from '@src/theme/Theme';
import { styles } from './styles';

const itemsDummy = [
  {label: '1', value: '1'},
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
];

export const BookshelfHeader = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState(null);
  const [sortItems, setSortItems] = useState([
    {label: 'Ascending', value: 'ASD'},
    {label: 'Descending', value: 'DESC'},
  ]);

  return (
    <View style={{backgroundColor: themePrimary, padding: 5, zIndex: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={{color: 'white', marginHorizontal: 8}}>Sort:</Text>
        <DropDownPicker
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
        />
        <DropDownPicker
          open={sortOpen}
          value={sortValue}
          items={sortItems}
          setOpen={setSortOpen}
          setValue={setSortValue}
          setItems={setSortItems}
          placeholder="Sort order"
          style={styles.BookshelfSortDropdown}
          dropDownContainerStyle={styles.BookshelfSortDropdown}
          textStyle={{color: 'white'}}
          arrowIconStyle={{tintColor: 'white'}}
          containerProps={{style: {width: 150, marginRight: 10}}}
        />
      </View>
    </View>
  );
};
