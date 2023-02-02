import "./styles/button.css";

interface prop {
  symbol: string;
  type: string;
  setKey: Function;
}

function Btn({ symbol, type, setKey }: prop) {
  function handleClick(event: React.MouseEvent) {
    const pressedKey = event.currentTarget.textContent;
    const classList = event.currentTarget.classList;
    if (classList.contains("operation")) setKey(pressedKey, "operation");
    else if (classList.contains("number")) setKey(pressedKey, "number");
    else if (classList.contains("equal")) setKey(pressedKey, "equal");
  }
  return (
    <div>
      {type === "none" && (
        <button className="button" onClick={handleClick}>
          {symbol}
        </button>
      )}
      {type === "operation" && (
        <button className="button operation" onClick={handleClick}>
          {symbol}
        </button>
      )}
      {type === "num" && (
        <button className="button number" onClick={handleClick}>
          {symbol}
        </button>
      )}
      {type === "equal" && (
        <button className="button equal" onClick={handleClick}>
          {symbol}
        </button>
      )}
    </div>
  );
}

export default Btn;
