import {HomeListItemScene} from '@components/scenes/bookmarkScene/HomeListItemScene';
import {HomeSceneProps} from '@components/scenes/types';

export const HomeListItem = ({item}: {item: HomeSceneProps}) => {
  const {title, author, bookmark, cover, rating, price} = item;

  return (
    <>
      <HomeListItemScene
        title={title}
        author={author}
        bookmark={bookmark}
        cover={cover}
        rating={rating}
        price={price}
      />
    </>
  );
};
