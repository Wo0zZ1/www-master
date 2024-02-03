import React from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const activeFirst = location.pathname === '/tests';
    return (
        <div className='Navbar'>
            <Link
                to='/tests'
                className={activeFirst ? 'block active' : 'block'}>
                <p>Тесты</p>
            </Link>
            <Link
                to='/categories'
                className={activeFirst ? 'block' : 'block active'}>
                <p>Категории</p>
            </Link>
        </div>
    );
};

export default Navbar;
