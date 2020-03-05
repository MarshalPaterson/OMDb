import React from 'react';
import renderer from 'react-test-renderer';
import AboutScreen from '../src/containers/AboutScreen';

jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer.create(<AboutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});