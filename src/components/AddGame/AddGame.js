import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGame } from '../GameList/GameListSlice';

function AddGame() {
    const [gameInput, setGameInput] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input 
                type='text' 
                onChange={(event) => {
                    setGameInput(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    dispatch(addGame(gameInput))
                }}
            >
                Add New Game
            </button>
        </div>
    )
};

export default AddGame;