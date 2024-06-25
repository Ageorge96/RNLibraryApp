import {completeBookMockData} from '@src/constants/MockData';
import {CompleteBook} from '@src/constants/types';
import {BookshelfBook, BookshelfSectionListProps} from '@components/scenes/types';

export const useBookshelfReducer = (/*user's book list*/) => {
  const transformedBookshelfData: BookshelfSectionListProps = [
    {
      title: 'Bookshelf',
      data: completeBookMockData.map(
        (book: CompleteBook): BookshelfBook => ({
          title: book.title,
          author: book.author,
          genre: book.genre,
          status: book.status,
          cover: book.cover,
        }),
      ),
    },
  ];
  return {transformedBookshelfData};
};
