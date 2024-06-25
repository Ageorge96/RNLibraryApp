import {View} from 'react-native';
import {QueryFieldControllerProps} from './QueryFieldController';
import {Controller} from 'react-hook-form';
import {QueryField} from './QueryField';

export const NumberFieldController = ({
  queryProps,
  required,
  ...props
}: QueryFieldControllerProps) => {
  <View>
    <Controller
      {...props}
      rules={{required: required, maxLength: 4, pattern: /^[0-9]+$/}}
      render={({field: {onChange}}) => (
        <QueryField queryProps={queryProps} onChangeText={onChange} />
      )}
    />
  </View>;
};
