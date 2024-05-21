import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface LibraryTextProps extends RNTextProps {
  children: React.ReactNode;
}

export const Text: React.FC<LibraryTextProps> = ({style, ...props}) => (
  <RNText style={[style, {fontFamily: 'GeezaPro'}]} {...props} />
);
