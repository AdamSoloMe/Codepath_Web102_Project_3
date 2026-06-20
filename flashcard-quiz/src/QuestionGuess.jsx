import { useState } from "react";

export default function QuestionGuess({ correctAnswer }) {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null); // null | 'correct' | 'incorrect'

  function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
  }

  function handleSubmit() {
    if (!guess.trim()) return;
    if (normalize(guess) === normalize(correctAnswer)) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  }

  return (
    <div className="question-guess">
      <label className="guess-label">Your answer</label>
      <div className="guess-input-row">
        <input
          className={`guess-input ${feedback ? `guess-input--${feedback}` : ""}`}
          type="text"
          placeholder="Type your answer and hit Submit..."
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
            setFeedback(null);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button className="guess-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {feedback === "correct" && (
        <p className="feedback feedback--correct">✓ Correct!</p>
      )}
      {feedback === "incorrect" && (
        <p className="feedback feedback--incorrect">✗ Incorrect — try again!</p>
      )}
    </div>
  );
}
