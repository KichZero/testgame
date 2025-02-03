import React, { useState } from "react";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import RPS from "./components/RPS/RPS";
import Reaction from "./components/Reaction/Reaction";
import Navigation from "./components/Navigation";
import "./App.scss";
import TelegramButton from "./components/TelegramButton"; // Импорт кнопки

const App: React.FC = () => {
  const [game, setGame] = useState<"tictactoe" | "rps" | "reaction">("tictactoe");

  return (
    <div className="app">
      {game === "tictactoe" && <TicTacToe />}
      {game === "rps" && <RPS />}
      {game === "reaction" && <Reaction />}
      <Navigation setGame={setGame} />
      <TelegramButton /> {/* Добавляем кнопку Telegram */}
    </div>
  );
};

export default App;