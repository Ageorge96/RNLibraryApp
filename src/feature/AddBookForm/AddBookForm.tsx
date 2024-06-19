import {Text} from '@components/Text';
import {QueryField} from '@components/compoundComponents/QueryField/QueryField';
import {styles} from '@components/compoundComponents/styles';
import {queryProps} from '@components/compoundComponents/types';
import {DropDown} from '@components/customNative/DropDown/DropDown';
import {GENRE, STATUS} from '@src/data/screenEnums';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '@components/Button';
import {QueryFieldController} from '@components/compoundComponents/QueryField/QueryFieldController';

const formProps = {
  title: {
    title: 'Title',
    placeholder: 'Enter title',
  },
  author: {
    title: 'Author',
    placeholder: "Enter author's name",
  },
};

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
        queryProps={formProps.title}
      />
      <QueryFieldController
        control={control}
        name="author"
        queryProps={formProps.author}
      />
      {/* <View style={localStyles.sectionView}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => {
            const queryProps: queryProps = {
              title: 'Title',
              placeholder: 'Enter title',
            };

            return (
              <QueryField queryProps={queryProps} onChangeText={onChange} />
            );
          }}
          name="author"
        />
      </View>
      <View style={localStyles.sectionView}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => {
            const queryProps: queryProps = {
              title: 'Author',
              placeholder: "Enter author's name",
            };
            return (
              <QueryField queryProps={queryProps} onChangeText={onChange} />
            );
          }}
          name="author"
        />
      </View> */}
      <View style={styles.dropDownView}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <DropDown
              dropDownItems={sortDropDown}
              handleSelect={onChange}
              inverse
            />
          )}
          name="sort"
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <DropDown
              dropDownItems={typeDropDown}
              handleSelect={onChange}
              inverse
            />
          )}
          name="status"
        />
      </View>
      <View style={localStyles.numInputView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => {
              const queryProps: queryProps = {
                title: 'Pages',
                placeholder: '00',
              };

              return (
                <QueryField queryProps={queryProps} onChangeText={onChange} />
              );
            }}
            name="pages"
          />
        </View>
        <View style={{width: 60, flex: 1, alignItems: 'center'}}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => {
              const queryProps: queryProps = {
                title: 'Bookmark',
                placeholder: '00',
              };

              return (
                <QueryField queryProps={queryProps} onChangeText={onChange} />
              );
            }}
            name="bookmark"
          />
        </View>
      </View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const sortDropDown = {
  placeholder: 'Select a genre',
  menuItems: [
    {label: GENRE.ACTION, value: GENRE.ACTION},
    {label: GENRE.BIOGRAPHICAL, value: GENRE.BIOGRAPHICAL},
    {label: GENRE.CLASSICAL, value: GENRE.CLASSICAL},
    {label: GENRE.CRIME, value: GENRE.CRIME},
    {label: GENRE.FANTASY, value: GENRE.FANTASY},
    {label: GENRE.HISTORICAL, value: GENRE.HISTORICAL},
    {label: GENRE.HORROR, value: GENRE.HORROR},
    {label: GENRE.LITERARY, value: GENRE.LITERARY},
    {label: GENRE.MILITARY, value: GENRE.MILITARY},
    {label: GENRE.MYSTERY, value: GENRE.MYSTERY},
    {label: GENRE.NONFICTION, value: GENRE.NONFICTION},
    {label: GENRE.ROMANCE, value: GENRE.ROMANCE},
    {label: GENRE.SCIFI, value: GENRE.SCIFI},
    {label: GENRE.THRILLER, value: GENRE.THRILLER},
    {label: GENRE.YA, value: GENRE.YA},
  ],
};

const typeDropDown = {
  placeholder: 'Select a status',
  menuItems: [
    {label: STATUS.READY, value: STATUS.READY},
    {label: STATUS.ACTIVE, value: STATUS.ACTIVE},
    {label: STATUS.FINISHED, value: STATUS.FINISHED},
    {label: STATUS.NEXT, value: STATUS.NEXT},
  ],
};

const localStyles = StyleSheet.create({
  textBox: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 14,
  },
  numInputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  numBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 14,
  },
  sectionView: {width: '100%', flex: 1},
});
