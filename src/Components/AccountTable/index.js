import React, { useContext } from "react"
import Table from "../Table"
import { accountsContext } from "../../context";


const { ValueContext } = accountsContext


const AccountTable = () => {
    const { selectedAccount, accounts } = useContext(ValueContext);
    const tableData = accounts[selectedAccount];
    const { docs } = tableData || {}

    const TableRender = docs&&docs.map(({ document_type, is_paper_flag }) => (
        <Table.Row>
            <Table.Cell>{document_type}</Table.Cell>
            <Table.Cell>{is_paper_flag ? "Paper" : "Paperless"}</Table.Cell>
        </Table.Row>
    ))||[]

    return (
        <Table>
            <Table.Header>
                <Table.Column> Document Type</Table.Column>
                <Table.Column>Delivery Method</Table.Column>
            </Table.Header>
            <Table.Body>
                {
                    TableRender
                }
            </Table.Body>
        </Table>
    )

}

export default AccountTable;