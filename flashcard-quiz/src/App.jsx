import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { SAMPLE_FLASHCARDS } from "./SampleData";
import FlashCardList from "./pages/FlashCardList";
import CardBrowser from "./pages/CardBrowser";
import axios from "axios";
import Navbar from "./Navbar";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  //tuple unpacking (js desturcintg )the useState hook

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer;
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: questionItem.correct_answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        }),
      );
      console.log(res.data);
    });
  }, []);

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <FlashCardList flashcards={flashcards} />;
      break;
    case "/card-browser":
      component =<FlashCardList flashcards={flashcards} /> ;
      break;
    case "/card-test":
      component = <CardBrowser flashcards={flashcards} />;
      break;
    default:
      component = <h2>Page not found</h2>;
  }

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {component}
      </div>
    </>
  );
}

export default App;
