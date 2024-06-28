import {HomeSceneProps} from '@components/scenes/types';
import {FlatList} from 'react-native';
import { HomeListItemScene } from '@components/scenes/homeListItemScene/HomeListItemScene';

export const HomeScreenFlatList = ({data}: {data: HomeSceneProps[]}) => (
  <FlatList
    style={{flexGrow: 0}}
    data={data}
    renderItem={HomeListItemScene}
    horizontal
  />
);
