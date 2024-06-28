import type { Meta, StoryObj } from '@storybook/react'
import { BookshelfListing } from './BookshelfListing'
import { faker } from '@faker-js/faker';
import { View } from 'react-native';
import { backgroundPrimary } from '@src/theme/Theme';

type Story = StoryObj<typeof BookshelfListing>;

export const BookshelfListingMeta: Meta<typeof BookshelfListing> = {
  title: 'Scenes/BookshelfListing',
  component: BookshelfListing,
  args: {
    item: {
      title: 'The Way of Kings: The Stormlight Archives',
      author: 'Brandon Sanderson',
      genre: 'Fantasy',
      status: 'Finished',
      cover:
        'https://www.gollancz.co.uk/wp-content/uploads/2018/07/hbg-title-9780575097360-847.jpg?w=440',
    },
  },
  decorators: [
    Story => (
      <View style={{backgroundColor: backgroundPrimary, justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default BookshelfListingMeta;

export const BookshelfListingStory: Story = {
  args: {
    item: {
      title: 'The Way of Kings: The Stormlight Archives',
      author: 'Brandon Sanderson',
      genre: 'Fantasy',
      status: 'Finished',
      cover: 'https://www.gollancz.co.uk/wp-content/uploads/2018/07/hbg-title-9780575097360-847.jpg?w=440',
    },
  },
};
