import React from 'react';
import { shallow, mount } from 'enzyme';
import { accountsContext } from '../../../context';
import AccountTable from '..';
import renderer from "react-test-renderer"


describe('AccountTable', () => {
  let wrapper;
  const mockAccounts = {
    'account1': {
      docs: [
        { document_type: 'doc1', is_paper_flag: true },
        { document_type: 'doc2', is_paper_flag: false },
      ],
    },
    'account2': {
      docs: [
        { document_type: 'doc3', is_paper_flag: true },
        { document_type: 'doc4', is_paper_flag: false },
      ],
    },
  };
const {ValueContext} = accountsContext
  const mockContext = {
    selectedAccount: 'account1',
    accounts: mockAccounts,
  };

  beforeEach(() => {
    wrapper = mount(
      <ValueContext.Provider value={mockContext}>
        <AccountTable />
      </ValueContext.Provider>
    );
  });

  it('should render Table component with data-test attribute', () => {
    expect(wrapper.find({"data-testid": "account-table"}).exists()).toBeTruthy();
  });

  it('should render Table.Header component with data-test attribute', () => {
    expect(wrapper.find({"data-testid":"account-table-header"}).exists()).toBeTruthy();
  });

  it('should render Table.Body component with data-test attribute', () => {
    expect(wrapper.find({"data-testid":"account-table-body"}).exists()).toBeTruthy();
  });

  it('should render correct number of Table.Row components with data-test attribute', () => {
    expect(wrapper.find('Table.Row[data-testid="account-table-row"]')).toBeTruthy();
  });

  it('should render correct document types and delivery methods with data-test attribute', () => {
    const rows = wrapper.find({'data-testid':"account-table-row"}).at(0);
    expect(rows.at(0).find({"data-testid":"document_type"}).at(0).text()).toEqual('doc1');
    expect(rows.at(0).find({"data-testid":"delivery-method"}).at(0).text()).toEqual('Paper');
  });

  it('should render empty Table.Body when no data is available', () => {
    const emptyContext = {
      selectedAccount: 'account3',
      accounts: mockAccounts,
    };
    wrapper = mount(
      <ValueContext.Provider value={emptyContext}>
        <AccountTable />
      </ValueContext.Provider>
    );
    expect(wrapper.find('Table.Row[data-testid="account-table-row"]')).toHaveLength(0);
  });

it("should match snap",()=>{
  const tree =   renderer.create(
        <ValueContext.Provider value={mockContext}>
          <AccountTable />
        </ValueContext.Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
})



});
