import { useState } from "react";
import Board from "./Board";
const arr = [
  "(",
  ")",
  "&",
  "|",
  "AC",
  "DE",
  "/",
  "*",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "00",
  "0",
  ".",
  "=",
];
function Calculator() {
  const [value, setValue] = useState("");
  const handleClick = (index) => {
    if (arr[index] === "AC") {
      setValue("");
    } else if (arr[index] === "DE") {
      setValue(value.toString().slice(0, -1));
    } else if (arr[index] === "=") {
      try {
        let newValue = eval(value);
        if (newValue === "Infinity") {
          alert("You can't divide with zero");
          return;
        }
        if (isNaN(newValue)) {
          alert("You can't divide zero by zero");
          return;
        }
        setValue(newValue);
      } catch (e) {
        if (e instanceof SyntaxError) {
          alert("Wrong expression");
          return;
        }
      }
    } else {
      let newvalue = value + arr[index];
      setValue(newvalue);
    }
  };

  return (
    <div className="calculator">
      <Board value={value} arr={arr} handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
