import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export const StackBTN = ({title}: {title: string}) => (
  <Pressable style={styles.stackBtn}>
    <Text style={{color: 'white', fontSize: 14}}>{title}</Text>
  </Pressable>
);
