import {useState} from 'react';
import {styles} from '@src/feature/BookshelfSectionList/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {DropDownItems} from '../../types';
import {themeSecondary} from '@src/theme/Theme';
import {StyleProp} from 'react-native';

export const DropDown = ({
  dropDownItems,
  inverse,
  handleSelect,
}: {
  dropDownItems: DropDownItems;
  inverse?: boolean;
  handleSelect: Function;
}) => {
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
        onChangeValue={selectedItem => {handleSelect(selectedItem)}}
        placeholder={placeholder}
        itemSeparator={true}
        itemSeparatorStyle={{width: '75%', marginHorizontal: 'auto'}}
        style={
          inverse ? styles.BookshelfDropDownInverse : styles.BookshelfDropDown
        }
        dropDownContainerStyle={
          inverse ? styles.BookshelfDropDownInverse : styles.BookshelfDropDown
        }
        textStyle={
          inverse
            ? {fontWeight: 'bold'}
            : {color: themeSecondary, fontWeight: 'bold'}
        }
        arrowIconStyle={
          inverse ? {tintColor: 'black'} : {tintColor: themeSecondary}
        }
        containerProps={{style: {width: 150, marginRight: 10}}}
      />
    </>
  );
};
