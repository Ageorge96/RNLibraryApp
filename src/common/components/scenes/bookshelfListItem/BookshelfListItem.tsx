import {BookshelfBook} from '../types';
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
