import type {Meta, StoryObj} from '@storybook/react';
import {BookshelfHeader} from './BookshelfHeader';
import {View} from 'react-native';
import {styles} from './styles';

type Story = StoryObj<typeof BookshelfHeader>;

export const BookshelfHeaderMeta: Meta<typeof BookshelfHeader> = {
  title: 'feature/Bookshelf/BookshelfHeader',
  component: BookshelfHeader,
  decorators: [
    Story => (
      <View style={styles.headerStoryView}>
        <Story />
      </View>
    ),
  ],
};

export default BookshelfHeaderMeta;

export const BookshelfHeaderStory: Story = {};

// export const BookshelfHeaderInverseThemeStory = {};
