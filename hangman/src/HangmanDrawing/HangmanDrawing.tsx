import "./styles.css";
export const HangmanDrawing = () => {
  const HEAD = <div className='head'></div>;
  const BODY = <div className='body'></div>;
  const RIGHT_ARM = <div className='right-arm'></div>;
  const LEFT_ARM = <div className='left-arm'></div>;
  const RIGHT_LEG = <div className='right-leg'></div>;
  const LEFT_LEG = <div className='left-leg'></div>;

  return (
    <div className='container'>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className='top-line' />
      <div className='pole' />
      <div className='upright-line' />
      <div className='bottom-bar' />
    </div>
  );
};
