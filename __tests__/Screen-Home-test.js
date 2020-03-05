import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../src/containers/HomeScreen';

jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
