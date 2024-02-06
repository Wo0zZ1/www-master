import React from 'react';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Tests from '../tests/index.jsx';
import Categories from '../categories/index.jsx';

const Content = () => {
    return (
        <div className='Content'>
            <Routes>
                <Route path='tests' element={<Tests />} />
                <Route path='categories' element={<Categories />} />
                <Route path='*' element={<></>} />
            </Routes>
        </div>
    );
};

export default Content;
