import {render, screen} from '@testing-library/react-native';
import {BookmarkScene} from './BookmarkScene';
import React from 'react';
const {axe, toHaveNoViolations} = require('jest-axe');

expect.extend(toHaveNoViolations);

describe('Bookmark Scene component renders', () => {
  it('should demonstrate this matcher`s usage with react testing library', async () => {
    const {container} = render(
      <BookmarkScene title="Dune" author="John" bookmark={22} />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('renders title in component', () => {
    render(<BookmarkScene title="Dune" author="John" bookmark={22} />);
    screen.getByText(/Dune/i);
  });
  it('cuts off text that it too long and ends string in ellipses', () => {
    const longString = 'This text is too long \nto fit inside the \nbookmarkScene';
    render(<BookmarkScene title={longString} author='Test' bookmark={10}/>)
    screen.getByText('...');
  });
});
