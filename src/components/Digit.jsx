function Digit({ value, handleClick }) {
  return (
    <button className="digit" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Digit;
