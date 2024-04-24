import {Image} from 'react-native';

export const Cover = ({cover}: {cover?: string}) => (
  <>
    <Image
      style={{width: '100%', height: '100%'}}
      source={{
        uri: cover,
      }}
    />
  </>
);
