import {View} from 'react-native';
import {Cover} from '@components/customNative/Cover/Cover';
import {styles} from './styles';
import {BookshelfBook} from '../types';
import {Text} from '@components/customNative/Text/Text';

export const BookshelfListing = ({item}: {item: BookshelfBook}) => {
  const {title, author, genre, status, cover} = item;

  return (
    <>
      <Text
        style={[styles.listFont, styles.bookshelfTitleView]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
      <View style={styles.bookshelfListItem}>
        <View style={styles.listItemContentView}>
          <Text style={styles.listFont}>Author: {author}</Text>
          <Text style={styles.listFont}>Genre: {genre}</Text>
          <Text style={styles.listFont}>Status: {status}</Text>
        </View>
        <View style={styles.listItemImageView}>
          <Cover cover={cover} title={title} style={styles.coverImage} />
        </View>
      </View>
    </>
  );
};
