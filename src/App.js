import React, { Component } from 'react';
import Board from "./Board.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 1
    }
  }

  nextTurn = () => this.setState({ currentPlayer: this.state.currentPlayer === 1 ? 2 : 1 })

  render() {
    const { currentPlayer } = this.state
    return (
      <div>
        <h2>Tic Tac Toe</h2>
        <Board nextTurn={this.nextTurn} currentPlayer={currentPlayer}/>
      </div>
    );

  }
}

export default App;
