import React from 'react';
import Registartion from './components/registration';
import Header from './components/header';
import Main from './components/main';
import { UseDispatch, useSelector } from 'react-redux';

function App() {
    const loggedIn = useSelector((state) => state.global.loggedIn);
    return (
        <div className='App wrapper'>
            <Header />
            {loggedIn ? <Main /> : <Registartion />}
        </div>
    );
}

export default App;
