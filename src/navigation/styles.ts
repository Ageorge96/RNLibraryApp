import {StyleSheet} from 'react-native';
import {themeSecondary} from '../theme/Theme';

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
  drawerHeaderContentContainer: {
    flex: 2,
    justifyContent: 'center',
  }
});
