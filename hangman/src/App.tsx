import { useState } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing/HangmanDrawing";
import { HangmanWord } from "./HangmanWord/HangmanWord";
import { Keyboard } from "./Keyboard";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div className='container'>
      <h1 className='win-or-lose-text'>Win Lose</h1>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
};

export default App;
