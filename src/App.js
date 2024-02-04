import React from 'react';
import Registartion from './components/registration';
import Header from './components/header';
import Main from './components/main';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { setCategories } from './redux/slices/categoriesSlice';
import { setContests } from './redux/slices/contestSlice';
import app from './firebase';

function App() {
    const db = getFirestore(app);
    const dispatch = useDispatch();
    React.useEffect(() => {
        try {
            getDocs(collection(db, 'categories')).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => doc.data());
                dispatch(setCategories(newData));
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        try {
            getDocs(collection(db, 'contests')).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => doc.data());
                dispatch(setContests(newData));
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        return () => {};
    }, []);

    const loggedIn = useSelector((state) => state.global.loggedIn);

    return (
        <div className='App wrapper'>
            <Header />
            {loggedIn ? <Main /> : <Registartion />}
        </div>
    );
}

export default App;
