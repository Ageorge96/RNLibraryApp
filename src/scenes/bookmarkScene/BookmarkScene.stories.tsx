import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkScene } from './BookmarkScene';
import { BookmarkSceneProps } from '../types';

type Story = StoryObj<typeof BookmarkScene>;

const BookmarkSceneMeta: Meta<typeof BookmarkScene> = {
  title: 'Scenes/BookmarkScene',
  component: BookmarkScene,
};

export default BookmarkSceneMeta;

export const BookmarkSceneStory: Story = {
  args: {
    title: 'title',
    author: 'author',
    bookmark: 22,
  },
};
