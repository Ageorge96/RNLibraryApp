import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {Cover} from '@components/Cover';
import {HomeSceneProps} from '../types';

export const HomeListItemScene = ({
  title,
  author,
  bookmark,
  cover,
  rating,
  price,
}: HomeSceneProps) => {
  return (
    <View style={styles.bookmarkScene}>
      <View style={styles.bmSContent}>
        <Text style={styles.bmSText} numberOfLines={2} ellipsizeMode="tail">
          Title: {title}
        </Text>
        <Text style={styles.bmSText}>Author: {author}</Text>
        {rating && <Text style={styles.bmSText}>Rating: {rating}</Text>}
        {bookmark ? (
          <Text style={styles.bmSText}>Bookmark: {bookmark}</Text>
        ) : (
          <Text style={styles.bmSText}>Price: {price}</Text>
        )}
      </View>
      <View style={{flex: 7}}>
        <Cover cover={cover} title={title} />
      </View>
    </View>
  );
};
