import {View, Text} from 'react-native';
import {Button as RNButton} from '../components/Button';

export const Bookshelf = () => (
  <View style={{justifyContent: 'center', marginTop: 400}}>
    <Text>Bookshelf</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button title="Add Book" />
      <Button title="Edit Book" />
      <Button title="Remove Book" />
    </View>
  </View>
);

const Button = ({title}) => (
  <View style={{borderRadius: 25, overflow: 'hidden', flex: 1}}>
    <RNButton title={title} />
  </View>
);