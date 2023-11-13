import React from 'react';
import GameCard from '../GameCard/GameCard';
import { useSelector } from 'react-redux';

function GameList() {
    const games = useSelector(state => state.gameList)

    return games.map(game => {
        return (
          <GameCard title={game.gameTitle}/>
        )
      })
    }

export default GameList