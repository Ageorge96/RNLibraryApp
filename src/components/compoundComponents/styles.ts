import {backgroundPrimary} from '@src/theme/Theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  queryView: {flex: 1, marginHorizontal: 10},
  queryTitle: {color: 'black', marginBottom: 2, marginLeft: 5, fontSize: 18},
  textField: {
    height: 40,
    width: 'auto',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    marginRight: 5,
  },
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
