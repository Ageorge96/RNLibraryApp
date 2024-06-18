import {themePrimary} from '@src/theme';
import {GestureResponderEvent, Button as RNBtn} from 'react-native';

export const Button = ({
  title,
  theme = themePrimary,
  onPress,
}: {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) => (
  <>
    <RNBtn title={title} onPress={onPress} color={theme} />
  </>
);
