import React from 'react';
import { mount } from 'enzyme';
import AppWrapper from './index';

const getWrapper = () =>
  mount(<AppWrapper />);

test('renders without crashing', () => {
  const wrapper = getWrapper();
  expect(wrapper).not.toBeNull();
});

test('renders the logo', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('.App-logo').length).toBe(1);
});

test('renders the title', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('.App-header').text()).toEqual('Pokemon List');
});
