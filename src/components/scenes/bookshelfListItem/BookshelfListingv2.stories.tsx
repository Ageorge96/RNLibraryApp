import type { Meta, StoryObj } from '@storybook/react'
import { BookshelfListingv2 } from './BookshelfListingv2'
import { faker } from '@faker-js/faker';

type Story = StoryObj<typeof BookshelfListingv2>;

export const BookshelfListingMeta: Meta<typeof BookshelfListingv2> = {
  title: 'Scenes/BookshelfListing',
  component: BookshelfListingv2,
};

export default BookshelfListingMeta;

export const BookshelfListingStory: Story = {
  args: {
    item: {
      title: 'The Way of Kings: The Stormlight Archives',
      author: 'Brandon Sanderson',
      genre: 'Fantasy',
      status: 'Finished',
      cover: faker.image.url(),
    },
  },
};
