const isWin = placement => {
	let winner
	for (let row = 0; row < placement.length; row++) {
		for (let col = 0; col < placement[row].length; col++) {
			const currentPlayer = placement[row][col]
			if (currentPlayer) {
				winner = findLine(placement, currentPlayer, row, col, 0)
				if (winner) {
					console.log("winner!", winner)
					return winner
				}
			}
		}
	}
	return 0
}

const findLine = (placement, currentPlayer, row, col, count, caller) => {
	if (count === placement.length - 1) {
		console.log('thats a win')
		return currentPlayer
	} else {	
		if (col < placement[row].length - 1 && placement[row][col + 1] === currentPlayer) {
			console.log("to the right")
			if (caller !== "r") count = 0
			return findLine(placement, currentPlayer, row, col + 1, count + 1, "r")
		} 
		if (row < placement.length - 1 && placement[row + 1][col] === currentPlayer) {
			console.log("below")
			if (caller !== "b") count = 0
			return findLine(placement, currentPlayer, row + 1, col, count + 1, "b")
		} 
		if (row < placement.length - 1 && col < placement[row].length - 1 && placement[row + 1][col + 1] === currentPlayer) {
			console.log("diagonal right")
			if (caller !== "dr") count = 0
			return findLine(placement, currentPlayer, row + 1, col + 1, count + 1, "dr")
		} 
		if (col > 0 && row < placement.length - 1 && placement[row + 1][col - 1] === currentPlayer) {
			console.log("diagonal left")
			if (caller !== "dl") count = 0
			return findLine(placement, currentPlayer, row + 1, col - 1, count + 1, "dl")
		}
	}
}

export { isWin }