import {BookshelfBook} from '../types';
import {BookshelfListing} from './BookshelfListing';
import { BookshelfListingv2 } from './BookshelfListingv2';

export const BookshelfListItem = ({
  item,
  index,
}: {
  item: BookshelfBook;
  index: number;
}) => (
  <>
    <BookshelfListingv2 item={item} />
  </>
);
