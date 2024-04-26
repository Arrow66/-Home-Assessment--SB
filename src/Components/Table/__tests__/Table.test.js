import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from '..';


describe('Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Table>
        <Table.Header>
          <Table.Column>Document Type</Table.Column>
          <Table.Column>Delivery Method</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>Paperless</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>Paperless</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>Paperless</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  });

  it('renders the table with correct structure', () => {
    expect(wrapper.find(Table.Header)).toHaveLength(1);
    expect(wrapper.find(Table.Column)).toHaveLength(2);
    expect(wrapper.find(Table.Body)).toHaveLength(1);
    expect(wrapper.find(Table.Row)).toHaveLength(3);
    expect(wrapper.find(Table.Cell)).toHaveLength(6);
  });

  it('renders the table header cells with correct text', () => {
    const headerCells = wrapper.find(Table.Column);
    expect(headerCells.at(0).text()).toEqual('Document Type');
    expect(headerCells.at(1).text()).toEqual('Delivery Method');
  });

})