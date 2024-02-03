import React from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { setLogged, setLogin } from '../../redux/slices/globalSlice';
import { useNavigate } from 'react-router-dom';

const Registartion = () => {
    const [login, setLog] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const loginHandler = (e) => {
        if (e.target.value.length <= 10) setLog(e.target.value);
    };

    const passwordHandler = (e) => {
        if (e.target.value.length <= 10) setPassword(e.target.value);
    };

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        // ОСУЩЕСТВИТЬ ЗАПРОС В БАЗУ ДАННЫХ
        e.preventDefault();
        e.stopPropagation();
        if (login && password) {
            dispatch(setLogged(true));
            dispatch(setLogin(login));
        }
        navigate('/tests');
    };

    return (
        <form
            onSubmit={submitHandler}
            className='Registartion d-flex flex-column width-sm'>
            <div className='content bg-light p-4'>
                <div className='mb-3'>
                    <h1 className=' text-uppercase text-center'>Регистрация</h1>
                </div>
                <div className='mb-3'>
                    <label htmlFor='login' className='form-label'>
                        Логин
                    </label>
                    <input
                        type='text'
                        value={login}
                        placeholder='Введите логин'
                        autoComplete='true'
                        autoFocus={true}
                        className='form-control'
                        id='login'
                        aria-describedby='emailHelp'
                        onChange={loginHandler}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                        Пароль
                    </label>
                    <input
                        autoComplete='true'
                        type='password'
                        value={password}
                        placeholder='Введите пароль'
                        className='form-control'
                        id='password'
                        onChange={passwordHandler}
                    />
                </div>
                <button type='submit' className='btn btn-outline-primary'>
                    Войти
                </button>
            </div>
        </form>
    );
};

export default Registartion;
