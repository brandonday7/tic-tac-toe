import React, { Component } from 'react';
import './App.css';
import { isWin } from "./utils/utils.js"

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			placement: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
		}
	}

	placeSnack = (i, j) => {
		const { placement } = this.state
		if (!placement[i][j]) {
			placement[i][j] = this.props.currentPlayer
			this.setState({ placement }, this.props.nextTurn)
		}
	} 

  render() {
  	const { placement } = this.state
  	const { nextTurn } = this.props
    return (
      <div>
      	{placement.map((row, i) => (
      		<div className="board-row" key={i}>
      			{row.map((snack, j) => (
      				<p key={j} onClick={() => this.placeSnack(i, j)} >{snack}</p>
      			))}
      		</div>
      	))}
      	<h1>{isWin(placement)}</h1>
      </div>
    );

  }
}

export default Board;
