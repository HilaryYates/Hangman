import "./style.css";

const KEYS = [
  "a",
  "b",
  "c",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const Keyboard = () => {
  return (
    <div className='keyboard'>
      {KEYS.map((key) => {
        console.log(key);
        return (
          <button className='btn' key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};
