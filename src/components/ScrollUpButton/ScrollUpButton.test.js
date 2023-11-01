import React from 'react';
import ScrollUpButton from './ScrollUpButton';
import renderer from 'react-test-renderer';

it('renders a project card', () => {
  const tree = renderer.create(
    <ScrollUpButton />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});