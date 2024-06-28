import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Cover} from '@components/customNative/Cover/Cover';
import {HomeSceneProps} from '../types';
import {Text} from '@components/Text';

export const HomeListItemScene = ({
  title,
  author,
  bookmark,
  cover,
  rating,
  price,
}: HomeSceneProps) => {
  return (
    <View style={styles.homeListItemScene}>
      <View style={styles.hSContent}>
        <Text style={styles.hSText} numberOfLines={2} ellipsizeMode="tail">
          Title: {title}
        </Text>
        <Text style={styles.hSText}>Author: {author}</Text>
        {rating ? <Text style={styles.hSText}>Rating: {rating}</Text> : null}
        {bookmark ? (
          <Text style={styles.hSText}>Bookmark: {bookmark}</Text>
        ) : (
          <Text style={styles.hSText}>Price: {price}</Text>
        )}
      </View>
      <Cover cover={cover} title={title} style={{flex: 7}} />
    </View>
  );
};
