import {Image, ImageStyle, StyleProp, View} from 'react-native';
import {styles} from './styles';

export const Cover = ({
  cover,
  title,
  style,
}: {
  cover: string;
  title?: string;
  style?: StyleProp<ImageStyle>;
}) => (
  <View style={style}>
    <Image
      style={styles.ImageStyle}
      source={{
        uri: cover,
      }}
      alt={`${title} cover`}
    />
  </View>
);
