import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {Cover} from '../../components/Cover';
import {BookmarkSceneProps} from '../types';

export const BookmarkScene = ({
  title,
  author,
  bookmark,
  cover,
}: BookmarkSceneProps) => {
  return (
    <View style={styles.bookmarkScene}>
      <View style={styles.content}>
        {/* cap string length */}
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          Title: {title}
        </Text>
        <Text style={styles.title}>Author: {author}</Text>
        <Text style={styles.title}>Bookmark: {bookmark}</Text>
      </View>
      <View style={{flex: 7}}>
        <Cover cover={cover} />
      </View>
    </View>
  );
};
