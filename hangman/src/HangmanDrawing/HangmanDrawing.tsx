import "./styles.css";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }): HangmanDrawingProps => {
  const HEAD = <div className='head'></div>;
  const BODY = <div className='body'></div>;
  const RIGHT_ARM = <div className='right-arm'></div>;
  const LEFT_ARM = <div className='left-arm'></div>;
  const RIGHT_LEG = <div className='right-leg'></div>;
  const LEFT_LEG = <div className='left-leg'></div>;
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div className='container'>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className='top-line' />
      <div className='pole' />
      <div className='upright-line' />
      <div className='bottom-bar' />
    </div>
  );
};
