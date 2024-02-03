import React from 'react';
import './index.scss';
import Navbar from '../navbar/index';
import Content from '../content/index';
import { Router } from 'react-router-dom';

const Main = () => {
    return (
        <main className='main'>
            <Navbar />
            <Content />
        </main>
    );
};

export default Main;
