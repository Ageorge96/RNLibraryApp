import {completeBookMockData} from '@src/common/constants/MockData';
import {CompleteBook} from '@src/common/constants/types';
import {
  BookshelfBook,
  BookshelfSectionListProps,
} from '@components/scenes/types';
import {useSelector} from 'react-redux';

export const useBookshelfReducer = () => {
  const library = useSelector(state => state.bookshelf);

  const transformedBookshelfData: BookshelfSectionListProps = [
    {
      title: 'Bookshelf',
      data: library.map(
        (book: BookshelfBook): BookshelfBook => ({
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
