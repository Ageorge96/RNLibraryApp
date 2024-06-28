import {View} from 'react-native';
import {Text} from '@components/customNative/Text/Text';
import {styles} from './styles';
import {SORT} from '@src/constants/screenEnums';
import {DropDown} from '@components/customNative/DropDown/DropDown';
import { themeSecondary } from '@src/theme/Theme';
import { categoryDropDown, orderDropDown } from '@src/constants/DropDownMenus';



export const BookshelfHeader = () => (
  <View style={styles.BookshelfHeaderContainer}>
    <View style={styles.BookshelfHeaderView}>
      <Text style={{color: themeSecondary, marginHorizontal: 8, fontWeight: 'bold'}}>
        Sort:
      </Text>
      <DropDown dropDownItems={categoryDropDown} handleSelect={() => null} />
      <DropDown dropDownItems={orderDropDown} handleSelect={() => null} />
    </View>
  </View>
);
