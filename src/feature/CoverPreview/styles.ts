import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  coverModal: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15,
  },
  imgView: {flex: 9, alignItems: 'center', paddingTop: 40},
  cover: {height: '80%', width: '80%'},
  coverPlaceholder: {
    height: '80%',
    width: '80%',
    borderColor: 'black',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  confirmBtn: {flex: 1}
});
