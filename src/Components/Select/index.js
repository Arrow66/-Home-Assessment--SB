import React from "react";
import styled from 'styled-components';



export const Select = ({
    onChange, value, options,'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy, ...rest
}) => (
    <div>
    <select onChange={onChange}
        value={value}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        {...rest}
    >
     {
        options.map((option)=>
           ( <option value={option.value} key={option.key}>{option.label}</option>)
        )
     }
    </select>
    </div>
)


export const StyledSelect = styled(Select)`
    width: 100%;
    padding: 0.5em 2em 0.5em 0.5em;
    font-size: 1em;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    border-radius: 0;
    outline: none;
    box-shadow: none !important;
    height: 50px;
    overflow-y: scroll;
    input:-webkit-autofill {
        background: #fff !important;
    }
`;



export default StyledSelect;