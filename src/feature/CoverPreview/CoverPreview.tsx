import {QueryField} from '@components/compoundComponents/QueryField/QueryField';
import {Button} from '@components/customNative/Button/Button';
import {Cover} from '@components/index';
import {useState} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

const coverProps = {
  placeholder: 'Provide an image url',
};
export const CoverPreview = () => {
  //move state to props once form integration is complete
  const [url, setUrl] = useState<string>('');

  return (
    <View style={styles.coverModal}>
      <QueryField queryProps={coverProps} onChangeText={setUrl} />
      <View style={styles.imgView}>
        {url ? (
          <Cover cover={url} style={styles.cover} />
        ) : (
          <Image
            source={require('@src/assets/cover-placeholder.png')}
            style={styles.coverPlaceholder}
          />
        )}
      </View>
      <View style={styles.confirmBtn}>
        <Button title="Confirm" onPress={undefined} />
      </View>
    </View>
  );
};
