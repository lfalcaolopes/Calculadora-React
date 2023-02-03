import "./styles/screen.css";

interface prop {
  screenInfo: {
    screenResult: number | undefined;
    screenLastOperation: string | undefined;
  };
}

function Screen({ screenInfo }: prop) {
  if (screenInfo.screenLastOperation === "") screenInfo.screenLastOperation = "0";
  return (
    <div>
      <div className="last-operation">
        <p>{screenInfo.screenLastOperation}</p>
      </div>
      <div className="result">
        <span>=</span>
        <span>{screenInfo.screenResult}</span>
      </div>
    </div>
  );
}

export default Screen;
