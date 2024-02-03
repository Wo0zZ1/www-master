import React from 'react';
import './index.scss';
import logo from '../../assets/minecraft.png';

const Test = ({ title, description }) => {
    return (
        <div className='Test'>
            <img src={logo} alt='logo' />
            <div className='content'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Test;
