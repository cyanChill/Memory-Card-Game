import { useState } from "react";
import { defaultCardData } from "../Data";
import MemoryCard from "./MemoryCard";
import { shuffle } from "../helpers/Utility";
import "../styles/Gameboard.style.css";

const Gameboard = () => {
  const [cards, setCards] = useState(shuffle(defaultCardData));
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const resetCards = () => {
    const updatedCards = cards.map((card) => ({ ...card, clicked: false }));
    setCards(shuffle(updatedCards));

    if (currScore > highScore) setHighScore(currScore);

    setCurrScore(0);
  };

  const updateCard = (card) => {
    const cardsCpy = [...cards];
    const idx = cardsCpy.indexOf(card);

    if (card.clicked === true) {
      resetCards();
    } else {
      cardsCpy[idx].clicked = true;
      setCurrScore(currScore + 1);

      setCards(shuffle(cardsCpy));
    }
  };

  return (
    <div className="container">
      <div className="scoreboard">
        <p className="currentScore score">Current Score: {currScore}</p>
        <p className="highScore score">High Score: {highScore}</p>
      </div>
      <div className="gameboard">
        {cards.map((card) => (
          <MemoryCard onUpdate={updateCard} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Gameboard;
