import {Text} from '@components/Text';
import {TextInput, View, TextInputProps} from 'react-native';
import {styles} from '../styles';
import {queryProps} from '../types';

type QueryFieldProps = TextInputProps & {queryProps: queryProps};

export const QueryField: React.FC<QueryFieldProps> = ({
  queryProps,
  onChangeText,
}: {
  queryProps: queryProps;
  onChangeText?: ((text: string) => void) | undefined;
}) => {
  const {title, placeholder} = queryProps;

  return (
    <View style={styles.queryView}>
      <Text style={styles.queryTitle}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textField}
        onChangeText={onChangeText ? input => onChangeText(input) : undefined}
      />
    </View>
  );
};
