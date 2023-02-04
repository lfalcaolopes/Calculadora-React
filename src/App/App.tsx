import { useEffect, useState } from "react";
import Btn from "../Btn/Btn";
import Screen from "../Screen/Screen";
import Big from "big.js";
import "./app.css";

let numbers: string[] = [""];
let counter = 0;
let result: number | undefined = 0;
let lastOperation = "";
let shouldReset = false;

function calculator(num1: number, num2: number, operation: string) {
  // Using Big library to avoid decimal numbers imprecision
  const x = new Big(num1);
  if (operation === "+") {
    return +x.plus(num2);
  } else if (operation === "-") {
    return +x.minus(num2);
  } else if (operation === "×") {
    return num1 * num2;
  } else if (operation === "÷") {
    return num1 / num2;
  }
}

function clearCalculator() {
  numbers = [""];
  counter = 0;
  result = 0;
  lastOperation = "";
}

interface screen {
  screenResult: number | undefined;
  screenLastOperation: string | undefined;
}

function App() {
  const [key, setKey] = useState("");
  const [type, setType] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [screenInfo, setScreenInfo] = useState<screen>({ screenResult: 0, screenLastOperation: "0" });

  const chooseKey = (key: string, type: string) => {
    setKey(key);
    setType(type);
    //set timestamp of when the button is clicked to allow the same number being clicked twice
    setTimestamp(Date.now());
  };

  useEffect(() => {
    // Clear everything
    if (key === "CE") {
      clearCalculator();
    } // Clear current cell
    else if (key === "C") {
      numbers[counter] = "";
    } // Turns number in percentage (x/100)
    else if (key === "%") {
      numbers[counter] = `${+numbers[counter] / 100}`;
    } // Adds comma to the number
    else if (key === ",") {
      numbers[counter] += ".";
    } // Inverts number signal
    else if (key === "±") {
      // Removes if the number already includes the - signal
      if (numbers[counter].includes("-")) {
        numbers[counter] = numbers[counter].slice(1);
      } // Adds if the number doesn't have the - signal
      else {
        numbers[counter] = "-" + numbers[counter];
      }
    } // Concatenate number inputs
    else if (type === "number") {
      // Clear calculator if a number is clicked right after the equal button
      if (shouldReset) clearCalculator();
      numbers[counter] += key;
    } // Ends the first number and receives the operation signal
    else if (type === "operation") {
      // Operation signal stored in index 1 of the array
      counter++;
      numbers[counter] = key;
      // Create new cell for the second number
      counter++;
      numbers[counter] = "";
    } // Return the result of the operation
    else if (type === "equal") {
      // numbers = [num1, operation, num2]
      result = calculator(+numbers[0], +numbers[2], numbers[1]);
      counter = 0;
    }
    shouldReset = false;

    // Concatenate num1/operation/num2
    lastOperation = numbers.join("");

    setScreenInfo({ screenResult: result, screenLastOperation: lastOperation });

    // Reset the numbers array for the result as num1
    if (type === "equal") {
      shouldReset = true;
      numbers = [`${result}`];
    }
  }, [key, timestamp]);

  return (
    <div className="device">
      <div className="tela">
        <Screen screenInfo={screenInfo} />
      </div>
      <div className="keyboard">
        <div className="line1 line">
          <Btn symbol="CE" type="none" setKey={chooseKey} />
          <Btn symbol="C" type="none" setKey={chooseKey} />
          <Btn symbol="%" type="none" setKey={chooseKey} />
          <Btn symbol="÷" type="operation" setKey={chooseKey} />
        </div>
        <div className="line2 line">
          <Btn symbol="7" type="number" setKey={chooseKey} />
          <Btn symbol="8" type="number" setKey={chooseKey} />
          <Btn symbol="9" type="number" setKey={chooseKey} />
          <Btn symbol="×" type="operation" setKey={chooseKey} />
        </div>
        <div className="line3 line">
          <Btn symbol="4" type="number" setKey={chooseKey} />
          <Btn symbol="5" type="number" setKey={chooseKey} />
          <Btn symbol="6" type="number" setKey={chooseKey} />
          <Btn symbol="-" type="operation" setKey={chooseKey} />
        </div>
        <div className="line4 line">
          <Btn symbol="1" type="number" setKey={chooseKey} />
          <Btn symbol="2" type="number" setKey={chooseKey} />
          <Btn symbol="3" type="number" setKey={chooseKey} />
          <Btn symbol="+" type="operation" setKey={chooseKey} />
        </div>
        <div className="line5 line">
          <Btn symbol="±" type="none" setKey={chooseKey} />
          <Btn symbol="0" type="number" setKey={chooseKey} />
          <Btn symbol="," type="none" setKey={chooseKey} />
          <Btn symbol="=" type="equal" setKey={chooseKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
