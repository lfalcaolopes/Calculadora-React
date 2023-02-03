import "./styles/button.css";

interface prop {
  symbol: string;
  type: string;
  setKey: Function;
}

function Btn({ symbol, type, setKey }: prop) {
  function handleClick(event: React.MouseEvent) {
    const pressedKey = event.currentTarget.textContent;

    setKey(pressedKey, type);
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
      {type === "number" && (
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
