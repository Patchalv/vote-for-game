import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
    {
        gameId: 1,
        gameTitle: "7 Wonders",
    },
    {
        gameId: 2,
        gameTitle: "Dice Game",
    },
    {
        gameId: 3,
        gameTitle: "Settlers of Catan",
    },
    {
        gameId: 4,
        gameTitle: "Azul",
    },
    {
        gameId: 5,
        gameTitle: "Concordia",
    },
];

export const gameListSlice = createSlice({
    name: "gameList",
    initialState: initialStateValue,
    reducers: {
        addGame:  (state, action) => {
            let newIndex = state.length;
            state.push({ gameId: newIndex + 1, gameTitle: action.payload})
        },
    },
});

export const { addGame } = gameListSlice.actions;


export default gameListSlice.reducer;