import {render, screen} from '@testing-library/react-native';
import {BookmarkScene} from './BookmarkScene';
import React from 'react';
const {axe, toHaveNoViolations} = require('jest-axe');

expect.extend(toHaveNoViolations);

describe('Bookmark Scene component renders', () => {
  it.skip('should demonstrate this matcher`s usage with react testing library', async () => {
    // const {root} = render(
    //   <BookmarkScene title="Dune" author="John" bookmark={22} />,
    // );

    const render = () => '<BookmarkScene title="Dune" author="John" bookmark={22} />'
    const results = await axe(render());

    expect(results).toHaveNoViolations();
  });
  it('renders title in component', () => {
    render(<BookmarkScene title="Dune" author="John" bookmark={22} />);
    screen.getByText(/Dune/i);
  });
  it('cuts off text that it too long and ends string in ellipses', () => {
    const longString =
      'This text is too long \nto fit inside the \nbookmarkScene';
    render(<BookmarkScene title={longString} author="Test" bookmark={10} />);
    const titleText = screen.getByTestId('title-text');
    const { children } = titleText.props;
    console.log(children)
    // console.log(titleText);
    expect(children).toBe('ellipsis');
  });
  it.skip('cuts off text that it too long and ends string in ellipses', () => {
    const longTitle =
      'This is a very long title that exceeds two lines and should be truncated';
    const { getByTestId } = render(
      <BookmarkScene
        title={longTitle}
        author="John Doe"
        bookmark={3}
        cover="cover.jpg"
      />
    );

    const titleTextComponent = getByTestId('title-text');
    const titleString = titleTextComponent.props.children.toString();
    expect(title.endsWith('...')).toBeTruthy();
  });
});
