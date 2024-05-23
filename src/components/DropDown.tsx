import {useState} from 'react';
import {styles} from '@src/feature/styles';
import DropDownPicker from 'react-native-dropdown-picker';

export const DropDown = ({
  dropDownItems,
}: {
  dropDownItems: {
    placeholder: string;
    menuItems: {label: string; value: string}[];
  };
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
        placeholder={placeholder}
        style={styles.BookshelfSortDropdown}
        dropDownContainerStyle={styles.BookshelfSortDropdown}
        textStyle={{color: 'white'}}
        arrowIconStyle={{tintColor: 'white'}}
        containerProps={{style: {width: 150, marginRight: 10}}}
      />
    </>
  );
};
