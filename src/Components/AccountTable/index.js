import React, { useContext } from "react"
import Table from "../Table"
import { accountsContext } from "../../context";


const { ValueContext } = accountsContext


const AccountTable = () => {
    const { selectedAccount, accounts } = useContext(ValueContext);
    const tableData = accounts[selectedAccount];
    const { docs } = tableData || {}

    const TableRender = docs && docs.map(({ document_type, is_paper_flag }) => (
        <Table.Row key={document_type} data-testid="account-table-row" role="row">
            <Table.Cell data-testid="document_type" role="cell">{document_type}</Table.Cell>
            <Table.Cell data-testid="delivery-method" role="cell">{is_paper_flag ? "Paper" : "Paperless"}</Table.Cell>
        </Table.Row>
    )) || []

    return (
        <Table data-testid="account-table" role="table" aria-label="Account Table">
            <Table.Header data-testid="account-table-header" role="rowheader">
                <Table.Column role="columnheader"> Document Type</Table.Column>
                <Table.Column role="columnheader">Delivery Method</Table.Column>
            </Table.Header>
            <Table.Body data-testid="account-table-body" role="rowgroup" aria-live="polite">
                {
                    TableRender
                }
            </Table.Body>
        </Table>
    )

}

export default AccountTable;