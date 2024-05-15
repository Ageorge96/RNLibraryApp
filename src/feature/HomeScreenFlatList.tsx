import {HomeSceneProps} from '@components/scenes/types';
import {FlatList} from 'react-native';
import {HomeListItem} from './HomeListItem';

export const HomeScreenFlatList = ({data}: {data: HomeSceneProps[]}) => (
  <FlatList
    style={{flexGrow: 0}}
    data={data}
    renderItem={HomeListItem}
    horizontal
  />
);
