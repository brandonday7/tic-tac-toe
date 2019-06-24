import React, { Component } from 'react';
import './App.css';

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			placement: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
		}
	}

  render() {
  	const { placement } = this.state
    return (
      <div>
      	{placement.map(row => (
      		<div className="board-row">
      			{row.map(snack => (
      				<p>{snack}</p>
      			))}
      		</div>
      	))}
      </div>
    );

  }
}

export default Board;
