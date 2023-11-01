import React from 'react';
import Card from './MainCards';
import renderer from 'react-test-renderer';

it('renders a main card', () => {
  const tree = renderer.create(
    <Card
              name='Main Project'
              logoLink='http://github.com/logo.jpg'
              mainLink='https://github.com/github'
              description='GitHub Project'
              website='github.com'
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});