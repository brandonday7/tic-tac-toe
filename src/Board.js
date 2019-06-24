import React, { Component } from 'react';
import EndGame from "./EndGame"
import Snack from "./Snack"
import './App.css';
import { isWin } from "./utils/utils.js"

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			placement: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
			winner: null,
			currentPlayer: 1
		}
	}

  nextTurn = () => this.setState({ currentPlayer: this.state.currentPlayer === 1 ? 2 : 1 })

	placeSnack = (i, j) => {
		const { placement, winner, currentPlayer } = this.state
		if (!placement[i][j] && !winner) {
			placement[i][j] = currentPlayer
			this.setState({ placement }, () => {
				let winner = isWin(this.state.placement)
				if (winner) this.setState({ winner })
				else this.nextTurn()
			})
		}
	} 

	reset = () => {
		this.setState({ 
			placement: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], 
			winner: null,
			currentPlayer: 1 })
	}

  render() {
  	const { placement, winner, currentPlayer } = this.state
    return (
      <div>
      	{placement.map((row, i) => (
      		<div className="board-row" key={i}>
      			{row.map((snack, j) => (
      				<Snack 
      					key={j} 
      					onClick={() => this.placeSnack(i, j)} 
      					player={placement[i][j]}
      				/>
      			))}
      		</div>
      	))}
      	{winner ? <EndGame winner={winner} reset={this.reset}/> : <p>Player {currentPlayer}'s turn</p>}
      </div>
    );

  }
}

export default Board;
