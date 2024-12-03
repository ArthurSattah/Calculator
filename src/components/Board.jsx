import Screen from "./Screen";
import Tile from "./Tile";
function Board({ value, arr, handleClick }) {
  return (
    <div className="board">
      <Screen value={value} />
      <Tile arr={arr} handleClick={handleClick} />
    </div>
  );
}

export default Board;
