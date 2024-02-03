import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contests: [
        { title: 'Minecraft', description: 'loremipsum...' },
        {
            title: 'Minecraft',
            description: 'lor4234234emipsum12341234532412342314213423142314',
        },
        { title: 'Minecraft', description: 'loremipsum...' },
        { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        // { title: 'Minecraft', description: 'loremipsum...' },
        {
            title: 'Minecraft',
            description: 'lor4234234emipsum12341234532412342314213423142314',
        },
    ],
};

const contestSlice = createSlice({
    name: 'contest',
    initialState,
    reducers: {
        addContest(state, action) {
            state.contests.push(action.payload);
        },
    },
});

export const { addContest } = contestSlice.actions;

export default contestSlice.reducer;
