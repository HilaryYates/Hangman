import "./style.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export const HangmanWord = ({
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div>
      <div className='words'>
        {wordToGuess.split("").map((letter, index) => {
          return (
            <span className='letters-underline' key={index}>
              <span
                style={{
                  visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}
              >
                {letter}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
