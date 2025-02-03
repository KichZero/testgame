import React from "react";
import  WebApp  from "@twa-dev/sdk";  // Импортируем WebApp объект

const TelegramButton: React.FC = () => {
  const handleClick = () => {
    WebApp.close(); // Закрытие приложения
  };

  return (
    <button onClick={handleClick} className="tg-button">
      Закрыть
    </button>
  );
};

export default TelegramButton;