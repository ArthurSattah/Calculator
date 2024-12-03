import Digit from "./Digit";
let arr1 = [0, 1, 2, 3, 4, 5];
let arr2 = [0, 1, 2, 3];
function Tile({ arr, handleClick }) {
  return (
    <div className="tile">
      {arr1.map((index1, key1) => {
        return (
          <div>
            {arr2.map((index2, key2) => {
              return (
                <Digit
                  value={arr[index1 * 4 + index2]}
                  handleClick={() => handleClick(index1 * 4 + index2)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Tile;
