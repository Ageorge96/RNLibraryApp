import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {Text} from '@components/Text';

export const DrawerCustomerView = props => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={styles.drawerHeaderProfilePictureContainer}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../assets/ic_profile.png')}
        />
      </View>
      <View style={styles.drawerHeaderContentContainer}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Andre's Library
        </Text>
      </View>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);
