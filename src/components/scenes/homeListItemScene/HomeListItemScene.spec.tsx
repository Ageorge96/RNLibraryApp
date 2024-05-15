import {render, screen} from '@testing-library/react-native';
import { HomeListItemScene } from './HomeListItemScene';
import React from 'react';

describe('HomeListItemScene component render', () => {
  it('renders the title of a book', () => {
    render(<HomeListItemScene title='test-title' author='test-author'/>);
    screen.getByText('Title: test-title');
  })
  it('renders the bookmark when prop is passed in', () => {
    render(<HomeListItemScene title='test-title' author='test-author' bookmark={2}/>);
    screen.getByText('Bookmark: 2');
  })
  it('renders the price when prop is passed in', () => {
    render(<HomeListItemScene title='test-title' author='test-author' price='£1.00'/>);
    screen.getByText('Price: £1.00');
  })
})