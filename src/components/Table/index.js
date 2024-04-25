import React from "react";
import styled from 'styled-components';



const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    border: none;
    border-bottom: 1px solid black;
    border-spacing: 0px;
`;

const TableRow = styled.tr`
    border: 1px solid #e8e8e8;
    height: 50px;
`;



const Table = ({tableData})=>{
    return (
        <StyledTable role="table">
        <thead>
            <tr>
            <TableHeader scope="col">
                Document Type
            </TableHeader>
            <TableHeader scope="col">
                Delivery Method
            </TableHeader>
            </tr>
        </thead>
        <tbody>

            {

                tableData && tableData.docs.map((docTypeAndPaper,index) => (
                    <TableRow key={index}>
                        <td>
                            {docTypeAndPaper.document_type}
                        </td>
                        <td>
                            {docTypeAndPaper.is_paper_flag ? "Paper" : "Paperless"}
                        </td>
                    </TableRow>
                ))
            }

        </tbody>
    </StyledTable>
    )
}

export default Table