import React from "react";
import Board from "./Board";

const TicTacToe: React.FC = () => {
  return (
    <div>
      <h2>Крестики-нолики</h2>
      <Board />
    </div>
  );
};

export default TicTacToe;