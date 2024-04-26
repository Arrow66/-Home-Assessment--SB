import React from "react";
import styled from 'styled-components';



const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color:#fff;
`;

const TableBody = styled.tbody`

`

const TableHeader = styled.th`
    border: none;
    border-bottom: 1px solid black;
    padding:10px;
    text-align:left;
    border-spacing: 0px;
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #e8e8e8;
    height: 50px;
`;

const TableHead = styled.thead`
`

const TableCell = styled.td`
padding:10px;
`

const Table  = ({children,...rest})=>{
    return (
        <StyledTable {...rest} role="table">
            {children}
        </StyledTable>
    )
}


const Row = ({ children, ...rest }) => {
    return (
      <TableRow  tabIndex={-1} {...rest}>
        {children}
      </TableRow>
    );
  };

const Header = ({children,...rest})=>{
    return (
        <TableHead {...rest}>
            <Row>
                {children}
            </Row>
        </TableHead>
    )
}
  
  export const Cell = ({ children, ...rest }) => {
    return (
      <TableCell align="left" {...rest}>
        {children}
      </TableCell>
    );
  };

Table.Body = TableBody;
Table.Cell = Cell;
Table.Header = Header;
Table.Row = Row;
Table.Column = TableHeader;

export default Table