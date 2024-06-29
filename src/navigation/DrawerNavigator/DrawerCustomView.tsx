import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {Text} from '@components/customNative/Text/Text';

export const DrawerCustomerView = props => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={styles.drawerHeaderProfilePictureContainer}>
        <Image
          style={styles.profilePicture}
          source={require('@src/assets/ic_profile.png')}
        />
      </View>
      <View style={styles.drawerHeaderContentContainer}>
        <Text style={styles.drawerHeaderText}>Andre's Library</Text>
      </View>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);
