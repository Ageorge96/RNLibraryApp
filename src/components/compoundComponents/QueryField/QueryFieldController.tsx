import {View} from 'react-native';
import {QueryField} from './QueryField';
import {Controller, ControllerProps} from 'react-hook-form';
import {styles} from '@src/feature/AddBookForm/styles';
import {QueryProps} from '../types';

export type QueryFieldControllerProps = Pick<
  ControllerProps,
  'control' | 'name'
> & {
  queryProps: QueryProps;
};

export const QueryFieldController = ({
  queryProps,
  ...props
}: QueryFieldControllerProps) => {
  const {required} = queryProps;

  return (
    <View style={styles.sectionView}>
      <Controller
        {...props}
        rules={{required: required}}
        render={({field: {onChange}}) => (
          <QueryField queryProps={queryProps} onChangeText={onChange} />
        )}
      />
    </View>
  );
};
