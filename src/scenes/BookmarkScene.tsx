import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import { Cover } from '../components/Cover';

export const BookmarkScene = () => (
  <View style={styles.bookmarkScene}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.title}>
        Title: Title
      </Text>
      <Text style={styles.title}>
        Author: Author
      </Text>
      <Text style={styles.title}>
        Bookmark: 000
      </Text>
    </View>
    <View style={{flex: 1}}>
      <Cover />
    </View>
  </View>
);
