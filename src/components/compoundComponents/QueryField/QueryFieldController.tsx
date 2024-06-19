import {View} from 'react-native';
import {QueryField} from './QueryField';
import {Controller, ControllerProps} from 'react-hook-form';
import {styles} from '../styles';
import {queryProps} from '../types';

type QueryFieldControllerProps = Omit<ControllerProps, 'render'> & {
  queryProps: queryProps;
};
interface dummyProps {
  ControllerProps: ControllerProps;
  queryProps: queryProps;
}

export const QueryFieldController: React.FC<QueryFieldControllerProps> = ({
  queryProps,
  ...props
}: QueryFieldControllerProps) => {
  console.log(queryProps);
  return (
    <View style={styles.sectionView}>
      <Controller
        {...props}
        render={({field: {onChange}}) => (
          <QueryField queryProps={queryProps} onChangeText={onChange} />
        )}
      />
    </View>
  );
};
