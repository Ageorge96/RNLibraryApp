import { View, Text } from "react-native";
import { Button } from "../components/Button";


export const Bookshelf = () => (
  <View style={{justifyContent: 'center', marginTop: 400}}>
    <Text>Bookshelf</Text>
    <Button title='Add Book'  />
  </View>
);
