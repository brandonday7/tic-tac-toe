import React from 'react';
import './App.css';

const EndGame = ({ winner, reset }) => (
  <div>
    <h3>Player {winner} wins!</h3>
    <button onClick={reset}>Play again?</button>
  </div>
)

export default EndGame;
