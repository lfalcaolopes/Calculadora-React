import "./styles/button.css";

interface prop {
  symbol: string;
  type: string;
}

function Btn({ symbol, type }: prop) {
  return (
    <div>
      {type === "none" && <button className="button">{symbol}</button>}
      {type === "operation" && <button className="button operation">{symbol}</button>}
      {type === "equal" && <button className="button equal">{symbol}</button>}
    </div>
  );
}

export default Btn;
