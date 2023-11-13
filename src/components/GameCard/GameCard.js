import React from 'react';
import './GameCard.css';

function GameCard(props) {
    let title = props.title;
    return (
        <div className='GameCard' > 
            <p>{title}</p>
        </div>
    )
}

export default GameCard