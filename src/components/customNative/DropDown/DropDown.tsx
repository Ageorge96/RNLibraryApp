import {useState} from 'react';
import {styles} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {DropDownProps} from './types';
import {View} from 'react-native';
import {Text} from '@components/customNative/Text/Text';

export const DropDown = ({
  dropDownItems,
  inverse,
  handleSelect,
}: DropDownProps) => {
  const {title, placeholder, menuItems, multiple} = dropDownItems;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(menuItems);

  return (
    <View style={styles.QueryView}>
      <Text style={styles.QueryTitle}>{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        multiple={multiple}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={selectedItem => {
          handleSelect(selectedItem);
        }}
        placeholder={placeholder}
        itemSeparator={true}
        itemSeparatorStyle={styles.ItemSeparator}
        style={
          inverse ? styles.BookshelfDropDownInverse : styles.BookshelfDropDown
        }
        dropDownContainerStyle={
          inverse ? styles.BookshelfDropDownInverse : styles.BookshelfDropDown
        }
        textStyle={inverse ? styles.FontStyleInverse : styles.FontStyle}
        arrowIconStyle={inverse ? styles.ArrowIconInverse : styles.ArrowIcon}
        containerProps={{style: {width: 150, marginRight: 10}}}
        testID="dropDown"
      />
    </View>
  );
};
