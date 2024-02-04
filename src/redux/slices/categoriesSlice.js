import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategories(state, action) {
            state.categories.push(...action.payload);
        },
        setCategories(state, action) {
            state.categories = action.payload;
        },
    },
});

export const { addCategories, setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
