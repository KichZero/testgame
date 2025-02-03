import React, { useState, useRef } from "react";
import "./Reaction.scss";

const Reaction: React.FC = () => {
  const [status, setStatus] = useState<"waiting" | "ready" | "clicked">("waiting");
  const [message, setMessage] = useState("Нажми 'Старт' и жди...");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const startTime = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setStatus("waiting");
    setMessage("Жди...");
    setReactionTime(null);

    const randomTime = Math.floor(Math.random() * 3000) + 2000; // 2-5 сек
    timeoutRef.current = setTimeout(() => {
      setStatus("ready");
      setMessage("ЖМИ!");
      startTime.current = Date.now();
    }, randomTime);
  };

  const handleClick = () => {
    if (status === "waiting") {
      setMessage("Рано! Жди зелёный фон.");
    } else if (status === "ready") {
      const endTime = Date.now();
      setReactionTime(endTime - (startTime.current || 0));
      setMessage("Твой результат:");
      setStatus("clicked");
    }
  };

  return (
    <div className={`reaction ${status}`} onClick={handleClick}>
      <h2>{message}</h2>
      {reactionTime !== null && <h3>{reactionTime} мс</h3>}
      {status !== "ready" && (
        <button onClick={startGame}>Старт</button>
      )}
    </div>
  );
};

export default Reaction;