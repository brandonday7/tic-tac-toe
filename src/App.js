import React from 'react';
import Board from "./Board.js"
import './App.css';

const App = () => (
  <div className="game-container">
    <h1 className="title">Tic Tac Toe</h1>
    <Board />
  </div>
)

export default App;
