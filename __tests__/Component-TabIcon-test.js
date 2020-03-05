import React from 'react';
import renderer from 'react-test-renderer';
import TabIcon from '../src/components/TabIcon';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<TabIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
