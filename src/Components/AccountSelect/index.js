import React,{ useContext } from "react"
import StyledSelect from "../Select"
import { accountsContext } from "../../context"
import { setSelectedAccountAction } from "../../context/utils"


const { ValueContext, ValueDispatchContext } = accountsContext

const AccountSelect = () => {
    const dispatch = useContext(ValueDispatchContext);
    const { selectedAccount, accounts } = useContext(ValueContext);

    const options = Object.entries(accounts).map(([key, value]) => {
        return {
            value: key,
            label: value.accountName,
            key
        }
    })

    return <StyledSelect options={options} onChange={(e) => {
        setSelectedAccountAction(dispatch, e.target.value)
    }}
        value={selectedAccount}
    />

}

export default AccountSelect