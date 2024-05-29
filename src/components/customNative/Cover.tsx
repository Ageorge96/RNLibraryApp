import {Image} from 'react-native';

export const Cover = ({cover, title}: {cover?: string; title: string}) => (
  <>
    <Image
      style={{width: '100%', height: '100%'}}
      source={{
        uri: cover,
      }}
      alt={`${title} cover`}
    />
  </>
);
