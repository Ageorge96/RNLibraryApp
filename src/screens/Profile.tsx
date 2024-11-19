import {QueryField} from '@components/compoundComponents/QueryField/QueryField';
import {QueryProps} from '@components/compoundComponents/types';
import {View} from 'react-native';

const queryProps: QueryProps = {
  title: 'Username',
  placeholder: 'Enter a username',
};

export const Profile = () => (
  <View style={{justifyContent: 'center', marginVertical: 'auto'}}>
    <QueryField queryProps={queryProps} />
  </View>
);

