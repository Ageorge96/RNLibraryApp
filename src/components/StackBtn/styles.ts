import { StyleSheet } from "react-native";
import { themePrimary } from "@src/theme";

export const styles = StyleSheet.create({
  stackBtn: {
    height: 40,
    width: 10,
    borderRadius: 25,
    flex: 1,
    backgroundColor: themePrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
