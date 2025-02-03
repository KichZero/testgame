import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./TicTacToe.scss";

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (squares[index]) return;
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    if (calculateWinner(squares)) {
      alert(`Победил ${isXNext ? "O" : "X"}!`);
      setSquares(Array(9).fill(""));
    }
  }, [squares]);

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;