import "./style.css";

export const HangmanWord = () => {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <div>
      <div className='words'>
        {word.split("").map((letter, index) => {
          return (
            <span className='letters-underline'>
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
