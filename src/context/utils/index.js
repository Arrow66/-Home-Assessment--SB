import { FETCH_DATA_SUCCESS,SET_DEFAULT_ACCOUNT,SET_SELECTED_ACCOUNT } from "../actions";


export const fetchDataSuccess = async (dispatch, data) => {

    const { accounts, prefDocuments } = data;
    const finalData = accounts.reduce((acc, account) => {
        const documentbyAccountKey = prefDocuments.find((document) => {
            return document.account_key === account.key;
        })
        acc[account.key] = {
            accountName: account.description + " " + (account.typeDesc !== "IMA" ? account.id.slice(0, 3) + "-" + account.id.slice(3) : account.id) + " " + account.typeDesc,
            docs: documentbyAccountKey.docs
        };

        return acc
    }, {})

    dispatch({ type: FETCH_DATA_SUCCESS, payload: { finalData } })

}



export const setSelectedAccountAction = (dispatch,key)=>{
    dispatch({
       type: SET_SELECTED_ACCOUNT,
       payload:key
    })
}

export const setDefaultAccount  = (dispatch,defaultAccount)=>{
    const {data} = defaultAccount;
    dispatch({
       type: SET_SELECTED_ACCOUNT,
       payload:data.default_accounts[0].account_key
    })
}