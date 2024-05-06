import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { themePrimary } from "../theme";
import { backgroundPrimary, themeSecondary } from "../theme/Theme";

export const DrawerCustomerView = (props) => (
  <DrawerContentScrollView {...props}>
    
    <View style={{height: 100, width: '100%', backgroundColor: themeSecondary, flexDirection: 'row', paddingLeft: 10}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{width: '100%', height: '100%'}} source={require('../assets/ic_profile.png')}/>
        
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Andre's Library</Text>

      </View>
    </View>
    <DrawerItemList {...props}/>
  </DrawerContentScrollView>
)