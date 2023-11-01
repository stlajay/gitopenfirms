import React from 'react';
import renderer from 'react-test-renderer';
import ButtonLink from './ButtonLink';

it('renders a project card', () => {
  const tree = renderer.create(
    <ButtonLink />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});