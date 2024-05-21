import { Pressable } from "react-native";
import { styles } from "./styles";
import {Text} from '@components/Text';

export const StackBTN = ({title}: {title: string}) => (
  <Pressable style={styles.stackBtn}>
    <Text style={{color: 'white', fontSize: 14}}>{title}</Text>
  </Pressable>
);
