import React, { Component } from 'react';
import './App.css';
import { isWin } from "./utils/utils.js"

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			placement: [[1, 1, 1], [0, 0, 0], [0, 0, 1]]
		}
	}

  render() {
  	const { placement } = this.state
    return (
      <div>
      	{placement.map((row, i) => (
      		<div className="board-row" key={i}>
      			{row.map((snack, j) => (
      				<p key={j}>{snack}</p>
      			))}
      		</div>
      	))}
      	<h1>{isWin(placement)}</h1>
      </div>
    );

  }
}

export default Board;
