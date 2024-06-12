import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles';
import {Cover} from '@components/customNative/Cover';
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
    <View style={styles.bookmarkScene}>
      <View style={styles.bmSContent}>
        <Text style={styles.bmSText} numberOfLines={2} ellipsizeMode="tail">
          Title: {title}
        </Text>
        <Text style={styles.bmSText}>Author: {author}</Text>
        {rating ? <Text style={styles.bmSText}>Rating: {rating}</Text> : null}
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
