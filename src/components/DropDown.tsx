import {useState} from 'react';
import {styles} from '@src/feature/BookshelfSectionList/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {DropDownItems} from './types';
import { themeSecondary } from '@src/theme/Theme';

export const DropDown = ({dropDownItems}: {dropDownItems: DropDownItems}) => {
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
        placeholder={placeholder}
        style={styles.BookshelfSortDropdown}
        dropDownContainerStyle={styles.BookshelfSortDropdown}
        textStyle={{color: themeSecondary}}
        arrowIconStyle={{tintColor: themeSecondary}}
        containerProps={{style: {width: 150, marginRight: 10}}}
      />
    </>
  );
};
