import {BookmarkSceneProps} from '../types';
import {BookmarkScene} from './BookmarkScene';

export const BookmarkItem = ({item}: {item: BookmarkSceneProps}) => {
  const {title, author, bookmark, cover} = item;

  return (
    <>
      <BookmarkScene
        title={title}
        author={author}
        bookmark={bookmark}
        cover={cover}
      />
    </>
  );
};
