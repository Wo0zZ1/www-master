import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: true,
    login: 'Admin',
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLogged(state, action) {
            state.loggedIn = action.payload;
        },
        setLogin(state, action) {
            state.login = action.payload;
        },
    },
});

export const { setLogged, setLogin } = globalSlice.actions;

export default globalSlice.reducer;
