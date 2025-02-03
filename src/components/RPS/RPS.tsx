import React, { useState } from "react";
import "./RPS.scss";

const choices = ["✊", "✌️", "✋"];

const RPS: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const determineWinner = (player: string, computer: string) => {
    if (player === computer) return "Ничья!";
    if (
      (player === "✊" && computer === "✌️") ||
      (player === "✌️" && computer === "✋") ||
      (player === "✋" && computer === "✊")
    ) {
      return "Ты победил! 🎉";
    }
    return "Ты проиграл 😢";
  };

  const handleClick = (choice: string) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(determineWinner(choice, computerRandomChoice));
  };

  return (
    <div className="rps">
      <h2>Камень-ножницы-бумага</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && (
        <div className="result">
          <p>Ты выбрал: {playerChoice}</p>
          <p>Компьютер выбрал: {computerChoice}</p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
};

export default RPS;