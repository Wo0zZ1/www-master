import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/globalSlice';
import contestSlice from './slices/contestSlice';

export const store = configureStore({
    reducer: {
        global: globalSlice,
        contest: contestSlice,
    },
});
