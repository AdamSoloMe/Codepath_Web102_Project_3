import { useState } from "react";
import FlashCard from "./FlashCard";

//this let's me set the card data
const CARD_SET_TITLE = "General Trivia";
const CARD_SET_DESCRIPTION = "Test your knowledge with a random selection of trivia questions from a variety of categories.";

//I then import the flashcards I already implemented
export default function CardBrowser({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);//which index are we at 

  function handleNext() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * flashcards.length);
    } while (nextIndex === currentIndex && flashcards.length > 1);
    setCurrentIndex(nextIndex);
  }

  if (!flashcards || flashcards.length === 0) {
    return <p className="card-browser-loading">Loading cards...</p>;
  }

  return (
    <div className="card-browser">
      <div className="card-browser-header">
        <h2 className="card-set-title">{CARD_SET_TITLE}</h2>
        <p className="card-set-description">{CARD_SET_DESCRIPTION}</p>
        <p className="card-set-count">{flashcards.length} cards in this set</p>
      </div>

      <div className="card-browser-display">
        {/* key resets flip state whenever the card changes */}
        <FlashCard flashcard={flashcards[currentIndex]} key={currentIndex} />
      </div>

      <button className="next-btn" onClick={handleNext}>
        Next →
      </button>
    </div>
  );
}
