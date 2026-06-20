import { useState } from "react";
import FlashCard from "./FlashCard";
import QuestionGuess from "../QuestionGuess";

const CARD_SET_TITLE = "General Trivia";
const CARD_SET_DESCRIPTION =
  "Test your knowledge with a random selection of trivia questions from a variety of categories.";

export default function CardBrowser({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((i) => i + 1);
  }

  function handlePrev() {
    setCurrentIndex((i) => i - 1);
  }

  if (!flashcards || flashcards.length === 0) {
    return <p className="card-browser-loading">Loading cards...</p>;
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === flashcards.length - 1;
  const currentCard = flashcards[currentIndex];

  return (
    <div className="card-browser">
      <div className="card-browser-header">
        <h2 className="card-set-title">{CARD_SET_TITLE}</h2>
        <p className="card-set-description">{CARD_SET_DESCRIPTION}</p>
        <p className="card-set-count">
          Card {currentIndex + 1} of {flashcards.length}
        </p>
      </div>

      <div className="card-browser-display">
        <FlashCard flashcard={currentCard} key={currentIndex} />
      </div>

      {/* key resets QuestionGuess state whenever the card changes */}
      <QuestionGuess correctAnswer={currentCard.answer} key={`guess-${currentIndex}`} />

      <div className="btn-row">
        <button className="prev-btn" onClick={handlePrev} disabled={isFirst}>
          ← Prev
        </button>
        <button className="next-btn" onClick={handleNext} disabled={isLast}>
          Next →
        </button>
      </div>
    </div>
  );
}
