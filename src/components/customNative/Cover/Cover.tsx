import {Image} from 'react-native';
import {styles} from './styles';

export const Cover = ({cover, title}: {cover?: string; title: string}) => (
  <>
    <Image
      style={styles.ImageStyle}
      source={{
        uri: cover,
      }}
      alt={`${title} cover`}
    />
  </>
);
