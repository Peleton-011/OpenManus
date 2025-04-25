// script.js

document.addEventListener("DOMContentLoaded", () => {
	const board = document.getElementById("sudoku-board");
	const checkButton = document.getElementById("check-button");
	const resetButton = document.getElementById("reset-button");
	const message = document.getElementById("message");

	// Generate Sudoku board
	const puzzle = [
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	];

	const solution = [
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9],
	];

	for (let i = 0; i < 9; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < 9; j++) {
			const cell = document.createElement("td");
			const input = document.createElement("input");
			input.type = "number";
			input.min = "1";
			input.max = "9";
			if (puzzle[i][j] !== 0) {
				input.value = puzzle[i][j];
				input.disabled = true;
			}
			cell.appendChild(input);
			row.appendChild(cell);
		}
		board.appendChild(row);
	}

	generateBoard();

	// Check solution
	checkButton.addEventListener("click", () => {
		const inputs = document.querySelectorAll("#sudoku-board input");
		let correct = true;

		for (let i = 0; i < inputs.length; i++) {
			const row = Math.floor(i / 9);
			const col = i % 9;
			if (!inputs[i].disabled) {
				// Only validate user input
				const inputValue = parseInt(inputs[i].value);
				if (isNaN(inputValue) || inputValue !== solution[row][col]) {
					correct = false;
					break;
				}
			}
		}

		if (correct) {
			message.textContent = "Congratulations! You solved it!";
		} else {
			message.textContent = "Incorrect solution. Try again!";
		}
	});

	// Reset board
	resetButton.addEventListener("click", () => {
		const inputs = document.querySelectorAll("#sudoku-board input");
		inputs.forEach((input) => {
			if (!input.disabled) {
				input.value = "";
			}
		});
		message.textContent = "";
	});
});
