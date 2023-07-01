import React, { useState, useContext } from 'react';
import { GameContext } from "../../pages/GamePage/GamePage";
import './Dice.css';

export default function Dice() {
  const {diceValue, setDiceValue} = useContext(GameContext);

  // const handleClick = () => {
  //   const newValue = Math.floor(Math.random() * 6) + 1;
  //   setValue(newValue);
  // };

  return (
    <div className="dice-container">
      <div className="dice">{diceValue}</div>
    </div>
  );
}
