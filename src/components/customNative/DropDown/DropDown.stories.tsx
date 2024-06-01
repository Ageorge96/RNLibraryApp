import { Meta, StoryObj } from '@storybook/react';
import { DropDown } from './DropDown';
import { SORT } from '@src/data/screenEnums';
import { View } from 'react-native';
import { backgroundPrimary } from '@src/theme/Theme';

type Story = StoryObj<typeof DropDown>;

const DropDownMeta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  decorators: [
    Story => (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: backgroundPrimary}}>
        <Story />
      </View>
    ),
  ],
};

export default DropDownMeta;

export const DropDownTypeStory: Story = {
  args: {
    dropDownItems: {
      placeholder: 'Select a type',
      menuItems: [
        {label: SORT.TITLE, value: SORT.TITLE},
        {label: SORT.AUTHOR, value: SORT.AUTHOR},
        {label: SORT.GENRE, value: SORT.GENRE},
        {label: SORT.STATUS, value: SORT.STATUS},
        {label: SORT.BOOKMARK, value: SORT.BOOKMARK},
      ],
    },
  },
};

export const DropDownSortStroy: Story = {
  args: {
    dropDownItems: {
      placeholder: 'Sorting order',
      menuItems: [
        {label: SORT.ASD, value: SORT.ASD},
        {label: SORT.DESC, value: SORT.DESC},
      ],
    },
  },
};
