import { StyleSheet } from "react-native";
import { themePrimary } from "@src/theme";

// bmS = BookmarkScene

export const styles = StyleSheet.create({
  bookmarkScene: {
    width: 245,
    height: 150,
    backgroundColor: themePrimary,
    borderRadius: 35,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  bmSText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  bmSContent: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 10,
  },
  BookshelfListItem: {
    padding: 10,
    flexDirection: 'row',
  },
  listFont: {
    fontSize: 18,
    color: 'black',
  },
});
