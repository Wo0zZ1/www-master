import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contests: [
        { title: 'Minecraft', description: 'loremipsum...' },
        {
            title: 'Test #2',
            description: 'lorem ipsum dolor sit amet',
        },
        { title: 'Division 1', description: 'loremipsum...' },
        { title: 'Minecraft', description: 'lorem ipsum dolor sit amet' },
        {
            title: 'test',
            description: '123123',
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
