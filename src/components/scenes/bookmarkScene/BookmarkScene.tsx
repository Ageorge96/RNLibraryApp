import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles';
import { Cover } from '@components/Cover';
import {BookmarkSceneProps} from '../types';
import {Text} from '@components/Text';

export const BookmarkScene = ({
  title,
  author,
  bookmark,
  cover,
}: BookmarkSceneProps) => {
  return (
    <View style={styles.bookmarkScene}>
      <View style={styles.bmSContent}>
        {/* cap string length */}
        <Text
          style={styles.bmSText}
          numberOfLines={2}
          ellipsizeMode="tail"
          testID="title-text">
          Title: {title}
        </Text>
        <Text style={styles.bmSText}>Author: {author}</Text>
        <Text style={styles.bmSText}>Bookmark: {bookmark}</Text>
      </View>
      <View style={{flex: 7}}>
        <Cover cover={cover} title={title} />
      </View>
    </View>
  );
};
