import { useState } from "react";
import words from "./wordList.json";
import "./App.css";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return <div></div>;
};

export default App;