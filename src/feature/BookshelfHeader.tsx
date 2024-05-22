import {View} from 'react-native';
import {Text} from '@components/Text';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import { themePrimary } from '@src/theme';

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

  return (
    <View style={{alignItems: 'center', marginTop: 5}}>
      <Text style={{color: 'black'}}>Sort:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{width: 200, backgroundColor: themePrimary}}
      />
    </View>
  );
};
