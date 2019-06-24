const isWin = placement => {
	let winner
	let nonZeros = 0
	for (let row = 0; row < placement.length; row++) {
		for (let col = 0; col < placement[row].length; col++) {
			const currentPlayer = placement[row][col]
			if (currentPlayer) {
				winner = findLine(placement, currentPlayer, row, col, 0)
				if (winner) return winner
			}
		}
		// keep a tally of filled in rows to determine a draw
		if (!placement[row].includes(0)) nonZeros++
	}
  // -1 is a draw, 0 is an unfinished match
	if (nonZeros === placement.length) return -1
	else return 0
}

const findLine = (placement, currentPlayer, row, col, count, caller) => {
	/* findLine method:
		as long as there is room to move in the matrix, 
		look to the right, below, or diagonal of the current sqaure for a match.
		if there is a match, call findLine again with an incremented counter,
		heading in the same direction that sent you
		(i.e. keep going right, down, or diagonally -> changes in direction are irrelevant)
		once the counter reaches the winning number (index 2 in a 3x3), return winning player
	*/
	if (count === placement.length - 1) {
		return currentPlayer
	} else {	
		if (row < placement.length - 1 && col < placement.length - 1 && placement[row + 1][col + 1] === currentPlayer) {
			if ((!row && !col) || caller === "dr") return findLine(placement, currentPlayer, row + 1, col + 1, count + 1, "dr")
		} 
		if (col < placement.length - 1 && placement[row][col + 1] === currentPlayer) {
			if (!col || caller === "r") return findLine(placement, currentPlayer, row, col + 1, count + 1, "r")
		} 
		if (row < placement.length - 1 && placement[row + 1][col] === currentPlayer) {
			if (!row || caller === "b") return findLine(placement, currentPlayer, row + 1, col, count + 1, "b")
		} 
		if (col > 0 && row < placement.length - 1 && placement[row + 1][col - 1] === currentPlayer) {
			if ((!row && col === placement.length - 1) || caller === "dl") return findLine(placement, currentPlayer, row + 1, col - 1, count + 1, "dl")
		}
	}
}


const determineSnack = player => {
	if (player === 1) return "https://purepng.com/public/uploads/large/pink-creamy-donut-sit.png"
	else return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgL_NeQ_N0Vkb9LiLb0ofWDgbVfwmYyXx1Sv8XoGoBTGHyaGP"
}

const getBorder = (row, col, length) => {
	let borderString = ""
	if (row === 0) borderString = "top-square"
	else if (row === length - 1) borderString = "bottom-square"
	if (col === 0) borderString += " left-square"
	else if (col === length - 1) borderString += " right-square"
	return borderString
}

export { isWin, determineSnack, getBorder }