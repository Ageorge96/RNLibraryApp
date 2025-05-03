import {styles} from './styles';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Button} from '@components/customNative/Button/Button';
import {QueryFieldController} from '@components/compoundComponents/QueryField/QueryFieldController';
import {DropDownController} from '@components/customNative/DropDown/DropDownController';
import {NumberFieldController} from '@components/compoundComponents/QueryField/NumberFieldController';
import {useDispatch} from 'react-redux';
import store from '../store/store';
import {AddBook} from '../BookshelfSectionList/bookshelf.slice';
import {BookshelfBook} from '@components/scenes/types';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '@src/common/constants/screenEnums';
import {CoverNavigationProps} from '../CoverPreview/types';
import {BookshelfFormValues, genreDropDownMenu, statusDropDownMenu} from './AddBookFieldValues';

export const AddBookForm = () => {
  //TODO resolve useform type
  const {control, handleSubmit} = useForm<any>();
  const navigation = useNavigation<CoverNavigationProps>();
  const dispatch = useDispatch();

  const onSubmit = (data: BookshelfBook) => {
    dispatch(AddBook(data));
    console.log(store.getState());
    navigation.goBack();
  };

  const coverParams = {control: control, name: 'cover'};

  const handlePreview = () => {
    navigation.navigate(SCREENS.COVER, coverParams);
  };

  return (
    <View style={styles.formView}>
      <QueryFieldController
        control={control}
        name="title"
        queryProps={BookshelfFormValues.title}
      />
      <QueryFieldController
        control={control}
        name="author"
        queryProps={BookshelfFormValues.author}
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
          queryProps={BookshelfFormValues.pages}
        />
        <NumberFieldController
          control={control}
          name="bookmark"
          queryProps={BookshelfFormValues.bookmark}
        />
      </View>
      <Button title="Preview cover" onPress={handlePreview} />
      <View style={{marginTop: 15}}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
