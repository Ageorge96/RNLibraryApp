import {useState} from 'react';
import {styles} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {DropDownProps} from './types';
import {themeSecondary} from '@src/theme/Theme';
import {StyleProp} from 'react-native';

export const DropDown = ({
  dropDownItems,
  inverse,
  handleSelect,
}: DropDownProps) => {
  const {placeholder, menuItems} = dropDownItems;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(menuItems);

  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
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
    </>
  );
};
