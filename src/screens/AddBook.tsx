import {Button} from '@components/Button';
import {Text} from '@components/Text';
import {DropDown} from '@components/customNative/DropDown';
import {GENRE, STATUS} from '@src/data/screenEnums';
import {TextInput, View} from 'react-native';
import {styles} from '@components/compoundComponents/styles';
import {QueryField} from '@components/compoundComponents/QueryField';
import {useState} from 'react';

export const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');
  const [pages, setPages] = useState('');

  const setNum = (input: string) => {
    const number = input.replace(/[^0-9]/g, '');
    console.log(number);

    if (number === '') {
      return;
    }
    setPages(number);
  };

  return (
    <View
      style={{
        height: '100%',
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <QueryField
        queryProps={{
          title: 'Title',
          placeholder: 'Enter book title',
          handleSubmit: setTitle,
        }}
      />
      <QueryField
        queryProps={{
          title: 'Author',
          placeholder: "Enter author's name",
          handleSubmit: setAuthor,
        }}
      />
      <View style={[styles.queryView, styles.dropDownView]}>
        <DropDown
          dropDownItems={sortDropDown}
          inverse={true}
          handleSelect={setGenre}
        />
        <DropDown
          dropDownItems={typeDropDown}
          inverse={true}
          handleSelect={setStatus}
        />
      </View>
      <QueryField
        queryProps={{
          title: 'Pages',
          placeholder: 'Enter total pages',
          handleSubmit: setNum,
        }}
      />
      <Text>Cover</Text>
      <TextInput style={styles.textField} />
      <Button
        title="Add book"
        onPress={() => console.log(title + ', ' + author + ', ' + pages)}
      />
    </View>
  );
};

const lis = Object.keys(GENRE);

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

// Once field are complete test form submission with console log
