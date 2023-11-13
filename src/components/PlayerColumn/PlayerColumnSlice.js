import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
    {
        id: 1,
        name: "Player 1",
    },
    {
        id: 2,
        name: "Player 2",
    },
    {
        id: 3,
        name: "Player 3",
    },
    {
        id: 4,
        name: "Player 4",
    },
];

export const playerColumnSlice = createSlice({
    name: "playerColumn",
    initialState: initialStateValue,
    reducers: {
        addPlayer: (state, action) => {
            let newIndex = state.length;
            state.push({ id: newIndex + 1, name: `Player ${newIndex + 1}`})
        },
        removePlayer: (state, action) => {
            state.pop();
        },
    },
});

export const { addPlayer, removePlayer } = playerColumnSlice.actions;


export default playerColumnSlice.reducer;