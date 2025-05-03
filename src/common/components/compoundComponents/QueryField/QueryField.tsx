import {Text} from '@components/customNative/Text/Text';
import {TextInput, View, TextInputProps} from 'react-native';
import {styles} from './styles';
import {QueryProps} from '../types';

type QueryFieldProps = TextInputProps & {queryProps: QueryProps};

export const QueryField: React.FC<QueryFieldProps> = ({
  queryProps,
  onChangeText,
}: {
  queryProps: QueryProps;
  onChangeText?: ((text: string) => void) | undefined;
}) => {
  const {title, placeholder} = queryProps;

  return (
    <View style={styles.queryView}>
      {title ? <Text style={styles.queryTitle}>{title}</Text> : undefined}
      <TextInput
        placeholder={placeholder}
        style={styles.textField}
        onChangeText={onChangeText ? input => onChangeText(input) : undefined}
      />
    </View>
  );
};
