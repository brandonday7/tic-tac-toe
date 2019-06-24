import React from 'react';
import './App.css';

const EndGame = ({ winner, reset }) => (
  <div className="end-game-container">
    {winner === -1 ? <h3>Draw!</h3> : <h3>Player {winner} wins!</h3>}
    <div className="button" onClick={reset}>Play again?</div>
  </div>
)

export default EndGame;
