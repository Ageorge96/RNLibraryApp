import {completeBookMockData} from '@src/data/MockData';
import {CompleteBook} from '@src/data/types';
import {BookshelfBook, BookshelfSectionListProps} from '@src/scenes/types';

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
