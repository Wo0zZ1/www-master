import React from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { setLogged, setLogin } from '../../redux/slices/globalSlice';
import { useNavigate } from 'react-router-dom';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const Registartion = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const emailHandler = (e) => {
        if (e.target.value.length <= 23) setEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        if (e.target.value.length <= 15) setPassword(e.target.value);
    };

    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (email && password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    dispatch(setLogged(true));
                    dispatch(setLogin(email));
                    navigate('/tests');
                })
                .catch((error) => {
                    alert('Неправильный логин или пароль!');
                });
        }
    };

    const registerHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (email && password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    alert('Успешное создание аккаунта!');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <form
            // onSubmit={submitHandler}
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
                        type='email'
                        value={email}
                        placeholder='Введите почту'
                        autoComplete='true'
                        autoFocus={true}
                        className='form-control'
                        id='login'
                        aria-describedby='emailHelp'
                        onChange={emailHandler}
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
                <div className='buttons'>
                    <button
                        onClick={loginHandler}
                        type='submit'
                        className='btn btn-outline-primary'>
                        Войти
                    </button>
                    <button
                        onClick={registerHandler}
                        type='submit'
                        className='btn btn-outline-primary'>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Registartion;
