import React,{lazy,Suspense} from 'react'
import '../static/css/App.css'
import Providers from './context/providers';
import Header from './Components/Header';
import Box from "./Components/Box";
const  AccountSelect  = lazy(()=>import('./Components/AccountSelect'));
const  AccountTable  =  lazy(()=>import('./Components/AccountTable'));

const { AccountsProvider } = Providers;

const App = () => {

    return (
        <AccountsProvider>
            <div className='App'>
                <Header />
                <main role='main'>
                    <div className='container'>
                        <Box role='region'>
                            <Suspense fallback={<div>Loading...</div>}>
                            <AccountSelect />
                            </Suspense>
                        </Box>
                        <Box role="region" aria-label='Account Table'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <AccountTable />
                        </Suspense>
                        </Box>
                    </div>
                </main>
            </div>
        </AccountsProvider>
    )
}


export default App;
