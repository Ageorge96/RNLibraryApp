import {styles} from './styles';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Button} from '@components/customNative/Button/Button';
import {QueryFieldController} from '@components/compoundComponents/QueryField/QueryFieldController';
import {DropDownController} from '@components/customNative/DropDown/DropDownController';
import {NumberFieldController} from '@components/compoundComponents/QueryField/NumberFieldController';
import { genreDropDownMenu, statusDropDownMenu } from '@src/constants/DropDownMenus';

export const AddBookForm = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => console.log(data);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
      }}>
      <QueryFieldController
        control={control}
        name="title"
        required={true}
        queryProps={formProps.title}
      />
      <QueryFieldController
        control={control}
        name="author"
        required={true}
        queryProps={formProps.author}
      />
      <View style={styles.dropDownView}>
        <DropDownController
          control={control}
          name="genre"
          dropDownItems={genreDropDownMenu}
          inverse
        />
        <DropDownController
          control={control}
          name="status"
          dropDownItems={statusDropDownMenu}
          inverse
        />
      </View>
      <View style={styles.numInputView}>
        <NumberFieldController
          control={control}
          name="pages"
          required={false}
          queryProps={formProps.pages}
        />
        <NumberFieldController
          control={control}
          name="bookmark"
          required={false}
          queryProps={formProps.bookmark}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const formProps = {
  title: {
    title: 'Title',
    placeholder: 'Enter title',
  },
  author: {
    title: 'Author',
    placeholder: "Enter author's name",
  },
  pages: {
    title: 'Total Pages',
    placeholder: '00',
  },
  bookmark: {
    title: 'Bookmark (Optional)',
    placeholder: '00',
  },
};