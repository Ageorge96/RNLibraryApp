import type {Meta, StoryObj} from '@storybook/react';
import {HomeListItemScene} from './HomeListItemScene';
import {faker} from '@faker-js/faker';
import {View} from 'react-native';

type Story = StoryObj<typeof HomeListItemScene>;

const HomeListItemSceneMeta: Meta<typeof HomeListItemScene> = {
  title: 'Scenes/HomeListItemScene',
  component: HomeListItemScene,
  args: {
    author: 'author',
    cover: faker.image.url(),
  },
  argTypes: {
    title: {
      options: ['information', 'clock', 'clock-time-nine', 'calendar'],
      defaultValue: 'information',
      control: { type: 'select' },
    },
  },
  decorators: [
    Story => (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default HomeListItemSceneMeta;

export const BookmarkSceneStory: Story = {
  args: {
    bookmark: 22,
  },
};

export const WishlistSceneStory: Story = {
  args: {
    rating: faker.number.int({min: 0, max: 5}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
};
