import React from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer, removePlayer } from '../PlayerColumn/PlayerColumnSlice';

function TogglePlayers() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                    dispatch(addPlayer())
                }}
            >
                Add Player
            </button>

            <button onClick={() => {
                    dispatch(removePlayer())
                }}
            >
                Remove Player
            </button>

        </div>
    )
}

export default TogglePlayers;