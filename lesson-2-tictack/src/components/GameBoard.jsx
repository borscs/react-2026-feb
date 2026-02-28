import {useState} from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard( {activePlayerSymbol, handlerChangePlayer}) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);
	
	function handleSelection(rowIndex, colIndex) {
		if(gameBoard[rowIndex][colIndex]  !== null) return;
		
		setGameBoard(prevState => {
			const updatedBoard = [...prevState.map(row => [...row])];
			updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
			return updatedBoard;
		});
		
		handlerChangePlayer();
	}
	
	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={'row' + rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={'col' + colIndex}>
								<button onClick={() => handleSelection(rowIndex, colIndex)}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	)
}
