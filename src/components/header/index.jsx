import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLogged } from '../../redux/slices/globalSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const login = useSelector((state) => state.global.login);

    const navigate = useNavigate();

    const logoutHandler = (e) => {
        dispatch(setLogged(false));
        dispatch(setLogin(''));
        navigate('/registration');
    };

    return (
        <header className='header'>
            <div className='content'>
                <div className='logo'>
                    <p>ЧГК - мастер</p>
                    <Logo />
                </div>
                <p>Админ панель</p>
                <div className='account'>
                    {login ? (
                        <>
                            <p>ВЫ ВОШЛИ КАК: {login}</p>
                            <button
                                onClick={logoutHandler}
                                type='submit'
                                className='btn btn-lg btn-primary btn-block'>
                                Выйти
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
