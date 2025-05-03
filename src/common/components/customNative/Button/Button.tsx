import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { styles } from './styles';
import { themePrimary } from '@src/theme';


export const Button = ({
  title,
  theme = themePrimary,
  onPress,
}: {
  title: string;
  theme?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.FormButton, {backgroundColor: theme}]}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
);
