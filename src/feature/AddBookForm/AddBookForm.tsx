import {styles} from './styles';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Button} from '@components/customNative/Button/Button';
import {QueryFieldController} from '@components/compoundComponents/QueryField/QueryFieldController';
import {DropDownController} from '@components/customNative/DropDown/DropDownController';
import {NumberFieldController} from '@components/compoundComponents/QueryField/NumberFieldController';
import { genreDropDownMenu, statusDropDownMenu } from '@src/constants/DropDownMenus';
import { useDispatch } from 'react-redux';
import store from '../store/store';
import { AddBook } from '../BookshelfSectionList/bookshelf.slice';
import { BookshelfBook } from '@components/scenes/types';
import { useNavigation } from '@react-navigation/native';

export const AddBookForm = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const onSubmit = (data: BookshelfBook) => {
    console.log(data);
    dispatch(AddBook(data));
    console.log(store.getState());
    navigation.goBack();
  };

  return (
    <View style={styles.formView}>
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
      <QueryFieldController 
        control={control}
        name="cover"
        required={false}
        queryProps={formProps.cover}
      />
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
  cover: {
    title: 'Cover',
    placeholder: 'Provide an image url'
  }
};
