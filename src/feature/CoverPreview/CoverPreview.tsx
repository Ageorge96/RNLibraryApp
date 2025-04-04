import {QueryField} from '@components/compoundComponents/QueryField/QueryField';
import {Button} from '@components/customNative/Button/Button';
import {Cover} from '@components/index';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Controller} from 'react-hook-form';
import { CoverPreviewProps } from './types';

const coverProps = {
  placeholder: 'Provide an image url',
};

export const CoverPreview = ({route}: CoverPreviewProps) => {
  const navigation = useNavigation();
  const {control, name} = route.params;

  return (
    <View style={styles.coverModal}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <>
            <QueryField queryProps={coverProps} onChangeText={onChange} />
            <View style={styles.imgView}>
              {value ? (
                <Cover cover={value} style={styles.cover} />
              ) : (
                <Image
                  source={require('@src/assets/cover-placeholder.png')}
                  style={styles.coverPlaceholder}
                />
              )}
            </View>
          </>
        )}
      />

      <View style={styles.confirmBtn}>
        <Button title="Confirm" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
