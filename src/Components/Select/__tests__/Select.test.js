import React from 'react';
import { shallow, mount } from 'enzyme';
import {StyledSelect,Select} from '..';
describe('Select component', () => {
  const options = [
    { value: 'option1', label: 'Option 1', key: 1 },
    { value: 'option2', label: 'Option 2', key: 2 },
    { value: 'option3', label: 'Option 3', key: 3 },
  ];

  it('should render options correctly', () => {
    const wrapper = shallow(<Select options={options} />);
    expect(wrapper.find('option').length).toEqual(options.length);
    options.forEach((option, index) => {
      expect(wrapper.find('option').at(index).prop('value')).toEqual(option.value);
      expect(wrapper.find('option').at(index).key()).toEqual(`${option.key}`);
      expect(wrapper.find('option').at(index).text()).toEqual(option.label);
    });
  });

  it('should call onChange handler when an option is selected', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<Select options={options} onChange={onChangeMock} />);
    wrapper.find('select').simulate('change', { target: { value: 'option2' } });
    expect(onChangeMock).toHaveBeenCalledWith({ target: { value: 'option2' } });
  });
});

