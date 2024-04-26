import Header from "..";
import React from 'react';
import { shallow } from 'enzyme';

describe('Header', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });
  
    afterEach(() => {
      wrapper.unmount();
    });
  
    it('should render a header element', () => {
      expect(wrapper.find('header').exists()).toBe(true);
    });
  
    it('should have the correct class name', () => {
      expect(wrapper.find('header').hasClass('App-header')).toBe(true);
    });
  
    it('should render an h1 element', () => {
      expect(wrapper.find('h1').exists()).toBe(true);
    });
  
    it('should have the correct text in the h1 element', () => {
      expect(wrapper.find('h1').text()).toEqual('Demo Account and Document Preference Delivery');
    });
  
    it('should have the correct class name for the h1 element', () => {
      expect(wrapper.find('h1').hasClass('App-title')).toBe(true);
    });
  });
  