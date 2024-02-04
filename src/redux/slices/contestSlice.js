import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contests: [],
};

const contestSlice = createSlice({
    name: 'contest',
    initialState,
    reducers: {
        addContest(state, action) {
            state.contests.push(action.payload);
        },
        setContests(state, action) {
            state.contests = action.payload;
        },
    },
});

export const { addContest, setContests } = contestSlice.actions;

export default contestSlice.reducer;
