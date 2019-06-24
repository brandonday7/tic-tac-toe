import React from 'react';
import './App.css';

const EndGame = ({ winner, reset }) => (
  <div>
    {winner === -1 ? <h3>Draw!</h3> : <h3>Player {winner} wins!</h3>}
    <button onClick={reset}>Play again?</button>
  </div>
)

export default EndGame;
