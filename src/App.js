import React from 'react'
import '../static/css/App.css'
import Providers from './context/providers';
import Header from './Components/Header';
import Box from "./Components/Box";
import AccountSelect from './Components/AccountSelect';
import AccountTable from './Components/AccountTable';

const { AccountsProvider } = Providers;

const App = () => {

    return (
        <AccountsProvider>
            <div className='App'>
                <Header />
                <main>
                    <div className='container'>
                        <Box>
                            <AccountSelect />
                        </Box>
                        <Box>
                            <AccountTable />
                        </Box>
                    </div>
                </main>
            </div>
        </AccountsProvider>
    )
}


export default App;
