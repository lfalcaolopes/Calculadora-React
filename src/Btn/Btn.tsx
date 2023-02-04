import "./button.css";

interface prop {
  symbol: string;
  type: string;
  setKey: Function;
}

function Btn({ symbol, type, setKey }: prop) {
  function handleClick(event: React.MouseEvent) {
    const pressedKey = event.currentTarget.textContent;

    // Pass the pressed key and type to the parent component
    setKey(pressedKey, type);
  }

  return (
    <div>
      <button className={`button ${type} ${symbol}`} onClick={handleClick}>
        {symbol}
      </button>
    </div>
  );
}

export default Btn;
