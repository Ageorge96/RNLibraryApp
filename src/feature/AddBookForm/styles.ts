import {backgroundPrimary} from '@src/theme/Theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dropDownInverse: {backgroundColor: backgroundPrimary, borderColor: 'black'},
  dropDownView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    zIndex: 1,
  },
  numInputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  numBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 14,
  },
  sectionView: {width: '100%', flex: 1},
});
