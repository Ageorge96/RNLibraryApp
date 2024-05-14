import {View, Text} from 'react-native';
import {styles} from '../styles';
import {BookshelfBook} from '../types';
import {Cover} from '../../Cover';
import {BookshelfListing} from './BookshelfListing';

export const BookshelfListItem = ({
  item,
  index,
}: {
  item: BookshelfBook;
  index: number;
}) => (
  <>
    <BookshelfListing item={item} />
  </>
);
