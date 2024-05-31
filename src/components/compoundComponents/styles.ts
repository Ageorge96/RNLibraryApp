import { backgroundPrimary } from "@src/theme/Theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  queryView: {flex: 1, marginHorizontal: 10},
  queryTitle: {color: 'black', marginBottom: 2, marginLeft: 5, fontSize: 18},
  textField: {height: 40, width: 'auto', borderWidth: 1, borderRadius: 10, paddingLeft: 5, marginRight: 5},
  dropDownInverse: {backgroundColor: backgroundPrimary, borderColor: 'black'},
  dropDownView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    zIndex: 1,
  },
});