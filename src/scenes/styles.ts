import { StyleSheet } from "react-native";
import { themePrimary } from "../theme";

export const styles = StyleSheet.create({
  bookmarkScene: {
    width: 225,
    height: 150,
    backgroundColor: themePrimary,
    borderRadius: 35,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  content: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 15,
    paddingLeft: 15,
  },
});
