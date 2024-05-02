import {View, Text} from 'react-native';
import {styles} from '../styles';
import {BookshelfBook} from '../types';
import { Cover } from '../../components/Cover';

export const BookshelfListItem = ({book}: {book: BookshelfBook}) => {
  const {title, author, genre, status, cover} = book;

  return (
    <View style={styles.BookshelfListItem}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={styles.listFont}>Title: {title}</Text>
        <Text style={styles.listFont}>Author: {author}</Text>
        <Text style={styles.listFont}>Genre: {genre}</Text>
        <Text style={styles.listFont}>Status: {status}</Text>
      </View>
      <View
        style={{
          width: 100,
          height: 120,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: 80, height: 120, backgroundColor: 'white'}}>
          <Cover cover={cover} />
        </View>
      </View>
    </View>
  );
};
