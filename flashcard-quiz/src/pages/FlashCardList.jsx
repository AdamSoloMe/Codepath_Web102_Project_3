import FlashCard from "./FlashCard";

export default function FlashCardList({ flashcards }) {
  if (!flashcards || flashcards.length === 0) {
    return <p className="card-browser-loading">Loading cards...</p>;
  }

  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}
