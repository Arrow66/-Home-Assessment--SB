import AccountSelect from "..";

import React from 'react';
import { mount, shallow } from 'enzyme';
import { accountsContext } from "../../../context";
import StyledSelect from "../../Select";


describe('AccountSelect', () => {
  let wrapper;
  const {ValueContext,ValueDispatchContext} = accountsContext;
  const mockDispatch = jest.fn();
  const mockAccounts = {
    '1': { accountName: 'Account 1' },
    '2': { accountName: 'Account 2' },
  };
  const mockSelectedAccount = '1';

  const mockValueContext = {
    selectedAccount: mockSelectedAccount,
    accounts: mockAccounts,
  };



  beforeEach(() => {
    const mockContext = {
        ...mockValueContext
    }

      wrapper = mount(
          <ValueContext.Provider value={mockContext}>
              <ValueDispatchContext.Provider value={mockDispatch}>
                  <AccountSelect />
              </ValueDispatchContext.Provider>
          </ValueContext.Provider>
      );
  });

  it('should render the StyledSelect component', () => {
    expect(wrapper.find(StyledSelect)).toHaveLength(1);
  });

  it('should pass the correct options to the StyledSelect component', () => {
    const expectedOptions = [
      { value: '1', label: 'Account 1', key: '1' },
      { value: '2', label: 'Account 2', key: '2' },
    ];
    expect(wrapper.find(StyledSelect).prop('options')).toEqual(expectedOptions);
  });

  it('should pass the correct value to the StyledSelect component', () => {
    expect(wrapper.find(StyledSelect).prop('value')).toEqual(mockSelectedAccount);
  });

  it('should call setSelectedAccountAction when the StyledSelect value changes', () => {
    const mockEvent = { target: { value: '2' } };
    wrapper.find(StyledSelect).prop('onChange')(mockEvent);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_SELECTED_ACCOUNT',
      payload: '2',
    });
  });
});
