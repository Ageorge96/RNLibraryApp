import { Button as RNBtn } from "react-native";

export const Button = ({title, theme='#800020', handlePress}) => (
  <>
    <RNBtn title={title} onPress={handlePress} color={theme}/>
  </>
);
