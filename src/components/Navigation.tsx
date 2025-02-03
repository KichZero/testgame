import React from "react";
import "./Navigation.scss";
import reaction from '../assets/flash-svgrepo-com.svg';
import scissors from '../assets/scissors-svgrepo-com.svg';
import tictactoe from '../assets/tic-tac-toe-svgrepo-com.svg';


interface NavigationProps {
  setGame: (game: "tictactoe" | "rps" | "reaction") => void;
}

const Navigation: React.FC<NavigationProps> = ({ setGame }) => {
  return (
    <div className="navigation">
        
      <button onClick={() => setGame("tictactoe")}><img src={tictactoe} alt="" /></button>
      <button onClick={() => setGame("rps")}><img src={scissors} alt="" /></button>
      <button onClick={() => setGame("reaction")}><img src={reaction} alt="" /></button>
    </div>
  );
};

export default Navigation;