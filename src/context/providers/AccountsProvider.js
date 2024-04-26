import React, {useEffect, createContext,useReducer } from "react";
import mockData, { defaultAccount } from "../../../static/mockData";
import { fetchDataSuccess, setDefaultAccount } from "../utils";
import reducer from "../reducers";



export const ValueContext = createContext(null);
export const ValueDispatchContext = createContext(null);

const {accountsReducer,initialState} = reducer;

 const AccountsProvider  = ({children})=>{

    useEffect(()=>{
        fetchDataSuccess(dispatch,mockData)
        setDefaultAccount(dispatch,defaultAccount)
    },[])
    

    const [accounts,dispatch] = useReducer(accountsReducer,initialState);

    return (
        <ValueContext.Provider value={accounts}>
            <ValueDispatchContext.Provider value={dispatch}>
                {children}
            </ValueDispatchContext.Provider>
        </ValueContext.Provider>
    )

}


export default AccountsProvider;
