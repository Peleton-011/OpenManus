# Sudoku Web Application

## HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Sudoku</h1>
        <table id="sudoku-board">
            </table>
        <div class="controls">
            <button id="check-button">Check</button>
            <button id="reset-button">Reset</button>
        </div>
        <p id="message"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## CSS (style.css)

```css
body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

#sudoku-board {
    border-collapse: collapse;
    margin: 20px auto;
}

#sudoku-board td {
    border: 1px solid #ccc;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 20px;
}

#sudoku-board input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
    padding: 0;
    box-sizing: border-box;
}

.controls button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.controls button:hover {
    background-color: #0056b3;
}

#message {
    margin-top: 20px;
    font-weight: bold;
}
```

## JavaScript (script.js)

```javascript
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('sudoku-board');
    const checkButton = document.getElementById('check-button');
    const resetButton = document.getElementById('reset-button');
    const message = document.getElementById('message');

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
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
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
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];


        for (let i = 0; i < 9; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '1';
                input.max = '9';
                if (puzzle[i][j] !== 0) {
                    input.value = puzzle[i][j];
                    input.disabled = true;
                }
                cell.appendChild(input);
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }

    generateBoard();

        // Check solution
    checkButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('#sudoku-board input');
        let correct = true;

        for (let i = 0; i < inputs.length; i++) {
            const row = Math.floor(i / 9);
            const col = i % 9;
            if (!inputs[i].disabled) { // Only validate user input
                const inputValue = parseInt(inputs[i].value);
                if (isNaN(inputValue) || inputValue !== solution[row][col]) {
                    correct = false;
                    break;
                }
            }
        }

        if (correct) {
            message.textContent = 'Congratulations! You solved it!';
        } else {
            message.textContent = 'Incorrect solution. Try again!';
        }
    });

    // Reset board
    resetButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('#sudoku-board input');
        inputs.forEach(input => {
            if (!input.disabled) {
                input.value = '';
            }
        });
        message.textContent = '';
    });
});
```