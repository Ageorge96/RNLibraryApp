import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {styles} from './styles';

interface LibraryTextProps extends RNTextProps {
  children: React.ReactNode;
}

export const Text: React.FC<LibraryTextProps> = ({style, ...props}) => (
  <RNText style={[style, styles.themeFont]} {...props} />
);
