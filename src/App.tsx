import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(20);
  const [randomNumber, setrandomNumber] = useState<number>(10);

  function getRandomnumber(): void {
    minValue <= 0 && alert("Invalid");
    maxValue <= 0 && alert("Invalid");

    const result: any = Math.floor(
      Math.random() * (maxValue - minValue + 1) + minValue
    );
    setrandomNumber(result);
  }

  function onChangeMax(value: string): void {
    const v: number = parseInt(value);
    setMinValue(v);
  }
  function onChangeMin(value: string): void {
    const v: number = parseInt(value);
    setMaxValue(v);
  }

  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <span>Random Number: {randomNumber}</span>
          <div className="input">
            <input
              onChange={(e) => onChangeMin(e.target.value)}
              type="number"
              className="min"
            />
            <input
              type="number"
              className="max"
              onChange={(e) => onChangeMax(e.target.value)}
            />
          </div>
          <button onClick={() => getRandomnumber()}>Get Random Number</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
