import React from 'react';
import GameCard from '../GameCard/GameCard';
import { useSelector } from 'react-redux';

import './PlayerColumn.css';

function PlayerColumn(props) {
    const games = useSelector(state => state.gameList);

    return (
        <div className='playerColumn'>
            <h3>{props.name}</h3> 
            {games.map(game => {
                return (
                    <GameCard key={game.gameId} title={game.gameTitle} />
                )
            })}       
        </div>
    )
}

export default PlayerColumn