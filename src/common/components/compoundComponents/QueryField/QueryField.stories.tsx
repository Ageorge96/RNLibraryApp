import type {Meta, StoryObj} from '@storybook/react';
import { QueryField } from './QueryField';
import { View } from 'react-native';

type Story = StoryObj<typeof QueryField>;

const QueryFieldMeta: Meta<typeof QueryField> = {
  title: 'compoundComponents/QueryField',
  component: QueryField,
  args: {
    queryProps: {
      title: 'Story',
      placeholder: 'Enter query',
    },
  },
};

export default QueryFieldMeta;

export const QueryStory = {};
