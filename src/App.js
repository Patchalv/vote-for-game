import './App.css';
//import GameList from './components/GameList/GameList';
import AddGame from './components/AddGame/AddGame';
import PlayerColumn from './components/PlayerColumn/PlayerColumn';
import { useSelector } from 'react-redux';
import TogglePlayers from './components/TogglePlayers/TogglePlayers';

function App() {
  const players = useSelector(state => state.playerColumn);

  return (
    <div className="App">
      <h1>Vote for a game</h1>
      <AddGame />
      <TogglePlayers />
      {players.map(player => {
                return (
                    <PlayerColumn key={player.id} name={player.name} />
                )
            })}       
    </div>
  );
};

export default App;
