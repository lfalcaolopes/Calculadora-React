import { useEffect, useState } from "react";
import Btn from "./Btn";
import Screen from "./Screen";
import "./styles/app.css";

let numbers: string[] = [""];
let counter = 0;
let operation: string;

function calculator(num1: number, num2: number, operation: string) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "×") {
    return num1 * num2;
  } else if (operation === "÷") {
    return num1 / num2;
  }
}

interface screen {
  screenResult: number | undefined;
  screenLastOperation: string | undefined;
}

function App() {
  const [key, setKey] = useState("");
  const [type, setType] = useState("");
  const [screenInfo, setScreenInfo] = useState<screen>({ screenResult: 0, screenLastOperation: "0" });

  const chooseKey = (key: string, type: string) => {
    setKey(key);
    setType(type);
  };

  useEffect(() => {
    if (type === "number") {
      numbers[counter] += key;
    } else if (type === "operation") {
      counter++;
      numbers[counter] = "";
      operation = key;
    } else if (type === "equal") {
      const result = calculator(+numbers[0], +numbers[1], operation);
      setScreenInfo({ screenResult: result, screenLastOperation: `${numbers[0]}${operation}${numbers[1]}` });

      numbers = [`${result}`];
      counter = 0;
    }

    console.log(numbers);
  }, [key]);

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
          <Btn symbol="7" type="num" setKey={chooseKey} />
          <Btn symbol="8" type="num" setKey={chooseKey} />
          <Btn symbol="9" type="num" setKey={chooseKey} />
          <Btn symbol="×" type="operation" setKey={chooseKey} />
        </div>
        <div className="line3 line">
          <Btn symbol="4" type="num" setKey={chooseKey} />
          <Btn symbol="5" type="num" setKey={chooseKey} />
          <Btn symbol="6" type="num" setKey={chooseKey} />
          <Btn symbol="-" type="operation" setKey={chooseKey} />
        </div>
        <div className="line4 line">
          <Btn symbol="1" type="num" setKey={chooseKey} />
          <Btn symbol="2" type="num" setKey={chooseKey} />
          <Btn symbol="3" type="num" setKey={chooseKey} />
          <Btn symbol="+" type="operation" setKey={chooseKey} />
        </div>
        <div className="line5 line">
          <Btn symbol="±" type="none" setKey={chooseKey} />
          <Btn symbol="0" type="num" setKey={chooseKey} />
          <Btn symbol="," type="none" setKey={chooseKey} />
          <Btn symbol="=" type="equal" setKey={chooseKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
