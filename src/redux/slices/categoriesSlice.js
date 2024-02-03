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
    },
});

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
