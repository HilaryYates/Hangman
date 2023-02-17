import "./style.css";

export const HangmanWord = () => {
  const word = "test";
  return (
    <div>
      <div className='words'>
        {word.split("").map((letter, index) => {
          return <span className='letters'>{letter}</span>;
        })}
      </div>
    </div>
  );
};
