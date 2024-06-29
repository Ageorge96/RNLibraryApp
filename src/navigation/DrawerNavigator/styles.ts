import {StyleSheet} from 'react-native';
import {themePrimary, themeSecondary} from '../../theme/Theme';

export const styles = StyleSheet.create({
  drawerHeader: {
    height: 100,
    width: '100%',
    backgroundColor: themeSecondary,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  drawerHeaderProfilePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  drawerHeaderContentContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  drawerStyle: {
    backgroundColor: themePrimary,
  },
  drawerLabelStyle: {
    color: 'white',
    fontSize: 18,
  },
  drawerHeaderText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
