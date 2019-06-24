import React, { Component } from 'react';
import Board from "./Board.js"
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h2>Tic Tac Toe</h2>
        <Board />
      </div>
    );

  }
}

export default App;
