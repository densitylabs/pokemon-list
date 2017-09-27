import React from 'react';
import { shallow } from 'enzyme';
import AppWrapper from './index';
import Header from '../Header';

const getWrapper = ({ children } = {}) => {
  if (children) {
    return shallow(
      <AppWrapper>
        { children }
      </AppWrapper>
    );
  }
  return shallow(<AppWrapper />);
};

test('renders without crashing', () => {
  const wrapper = getWrapper();
  expect(wrapper).not.toBeNull();
});

test('renders the Header', () => {
  const wrapper = getWrapper();
  expect(wrapper.find(Header).exists()).toBe(true);
});

test('renders the children components', () => {
  const text = `I'm a child component`;
  const children = <span>{ text }</span>;
  const wrapper = getWrapper({ children });
  expect(wrapper.find('span').exists()).toBe(true);
  expect(wrapper.find('span').text()).toEqual(text);
});
