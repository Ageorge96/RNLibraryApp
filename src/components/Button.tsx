import { themePrimary } from "@src/theme";
import { Button as RNBtn } from "react-native";

export const Button = ({title, theme=themePrimary, onPress}) => (
  <>
    <RNBtn title={title} onPress={onPress} color={theme}/>
  </>
);
