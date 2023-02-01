import Btn from "./Btn";
import "./styles/app.css";

function App() {
  return (
    <div className="device">
      <div className="calculo">
        <div className="last-operation">
          <p>1+1</p>
        </div>
        <div className="result">
          <span>=</span>
          <span>2</span>
        </div>
      </div>
      <div className="keyboard">
        <div className="line1 line">
          <Btn symbol="CE" type="none" />
          <Btn symbol="C" type="none" />
          <Btn symbol="%" type="none" />
          <Btn symbol="÷" type="operation" />
        </div>
        <div className="line2 line">
          <Btn symbol="7" type="none" />
          <Btn symbol="8" type="none" />
          <Btn symbol="9" type="none" />
          <Btn symbol="×" type="operation" />
        </div>
        <div className="line3 line">
          <Btn symbol="4" type="none" />
          <Btn symbol="5" type="none" />
          <Btn symbol="6" type="none" />
          <Btn symbol="-" type="operation" />
        </div>
        <div className="line4 line">
          <Btn symbol="1" type="none" />
          <Btn symbol="2" type="none" />
          <Btn symbol="3" type="none" />
          <Btn symbol="+" type="operation" />
        </div>
        <div className="line5 line">
          <Btn symbol="±" type="none" />
          <Btn symbol="0" type="none" />
          <Btn symbol="," type="none" />
          <Btn symbol="=" type="equal" />
        </div>
      </div>
    </div>
  );
}

export default App;
