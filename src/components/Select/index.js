import React from "react";
import styled from 'styled-components';



const Select = ({
    onChange, value, options, ...rest
}) => (
    <select onChange={onChange}
        value={value}
        aria-describedby="account_description"
        {...rest}
    >
        <option value="" disabled id='account_description'>Select and Account </option>
        {
            Object.entries(options).map((option) => (
                <option value={option[0]} key={option[0]}>
                    {option[1].accountName}
                </option>
            ))

        }
    </select>
)


const StyledSelect = styled(Select)`
    width: 100%;
    padding: 0.5em 2em 0.5em 0.5em;
    font-size: 1em;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    height: 50px;
    overflow-y: scroll;
`;



export default StyledSelect;