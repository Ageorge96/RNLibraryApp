import type { Meta, StoryObj } from '@storybook/react';
import { BookshelfHeader } from './BookshelfHeader';
import { View } from 'react-native';
import { backgroundPrimary } from '@src/theme/Theme';

type Story = StoryObj<typeof BookshelfHeader>;

export const BookshelfHeaderMeta: Meta<typeof BookshelfHeader> = {
  title: 'feature/Bookshelf/BookshelfHeader',
  component: BookshelfHeader,
  decorators: [
    Story => (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: backgroundPrimary}}>
        <Story />
      </View>
    ),
  ],
};

export default BookshelfHeaderMeta;

export const BookshelfHeaderStory: Story = {};

// export const BookshelfHeaderInverseThemeStory = {};