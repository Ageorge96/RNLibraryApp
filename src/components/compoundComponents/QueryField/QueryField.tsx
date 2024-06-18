import { Text } from "@components/Text";
import { TextInput, View } from "react-native";
import { styles } from "../styles";
import { queryProps } from "../types";


export const QueryField = ({queryProps}: {queryProps: queryProps}) => {
  const {title, placeholder, handleSubmit} = queryProps;

  return (
    <View style={styles.queryView}>
      <Text style={styles.queryTitle}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textField}
        onChangeText={input => handleSubmit(input)}
      />
    </View>
  );
};
