import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {DropDown} from './DropDown';
import React from 'react';
import { styles } from '@src/feature/BookshelfSectionList/styles';

const dropDownItems = {
  placeholder: 'Select an item',
  menuItems: [{label: 'Item 1', value: 'item1'}],
};

describe('DropDown menu component render tests', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(
      <DropDown dropDownItems={dropDownItems} handleSelect={jest.fn()} />,
    );
    expect(getByTestId('dropDown')).toBeTruthy();
  });
  it('renders placeholder', () => {
    render(<DropDown dropDownItems={dropDownItems} handleSelect={jest.fn} />);

    screen.getByText('Select an item');
  });
  // it('should display the dropdown items when pressed', async () => {
  //   const handleSelect = jest.fn();

  //   const dropDownItems = {
  //     placeholder: 'single item test',
  //     menuItems: [{label: 'item 1', value: 'item 1'}],
  //   };

  //   const {getByText, getByTestId, queryByText} = render(
  //     <DropDown dropDownItems={dropDownItems} handleSelect={handleSelect} />
  //   );

  //   // Find the placeholder text
  //   const placeholder = getByText('single item test');
  //   expect(placeholder).toBeTruthy();

  //   // Press the dropdown to open it
  //   fireEvent.press(placeholder);

  //   // Wait for the items to appear
  //   await waitFor(() => {
  //     console.log(screen.debug());
  //     expect(queryByText('item 1')).toBeTruthy();
  //   });
  // });
  it.skip('calls handleSelect with the correct value when an item is selected', () => {
    const handleSelect = jest.fn();
    const {getByText} = render(
      <DropDown dropDownItems={dropDownItems} handleSelect={handleSelect} />,
    );

    // Simulate opening the dropdown
    fireEvent.press(getByText('Select an item'));

    // Simulate selecting an item
    fireEvent.press(getByText('Item 1'));

    expect(handleSelect).toHaveBeenCalledWith('item1');
  });

  it('applies correct styles based on the inverse prop', () => {
    const {getByTestId, rerender} = render(
      <DropDown dropDownItems={dropDownItems} handleSelect={jest.fn()} />,
    );

    // Check default styles
    expect(getByTestId('dropDown').props.style).toMatchObject(
      styles.BookshelfDropDown,
    );

    // Check inverse styles
    rerender(
      <DropDown
        dropDownItems={dropDownItems}
        handleSelect={jest.fn()}
        inverse
      />,
    );
    expect(getByTestId('dropDown').props.style).toMatchObject(
      styles.BookshelfDropDownInverse,
    );
  });
});
