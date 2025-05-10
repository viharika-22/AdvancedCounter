import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [highVal, setHighVal] = useState(1000);
  const [lowVal, setLowVal] = useState(-1000);
  const [countBy, setcountBy] = useState(1);
  const [duration, setDuration] = useState(null);
  function handelAdd() {
    if (count >= highVal) {
      setCount((prev) => prev);
    } else {
      setCount((prev) => prev + Number(countBy));
    }
  }
  function handelSub() {
    if (count <= lowVal) {
      setCount((prev) => prev);
    } else {
      setCount((prev) => prev - countBy);
    }
  }
  function handeAsynclSub() {
    setTimeout(() => handelSub(), Number(duration) * 1000);
  }
  function handelAsyncAdd() {
    setTimeout(() => handelAdd(), Number(duration) * 1000);
  }
  function handelReset() {
    setCount(0);
    setHighVal(1000);
    setLowVal(-1000);
    setcountBy(1);
    setDuration("");
  }

  useEffect(() => {}, []);
  return (
    <div className="App">
      <h3>Advanced Counter</h3>
      <div className="container">
        <div className="counterCont">
          <p>{count}</p>
          <br />
          <div className="btns">
            <button onClick={handelAdd}>+</button>
            <button onClick={handelSub}>-</button>
          </div>
          <div className="btns">
            <button
              onClick={handelAsyncAdd}
              disabled={!duration || duration <= 0}
            >
              Async +
            </button>
            <button
              onClick={handeAsynclSub}
              disabled={!duration || duration <= 0}
            >
              Async -
            </button>
          </div>
          <div className="limits">
            <label htmlFor="countBy">Inc/Dec By : </label>
            <input
              type="text"
              value={countBy}
              onChange={(e) => setcountBy(e.target.value)}
            />
            <label htmlFor="lowLimit">Lower Limit : </label>
            <input
              type="text"
              value={lowVal}
              onChange={(e) => setLowVal(e.target.value)}
            />
            <label htmlFor="lowLimit">Upper Limit : </label>
            <input
              type="text"
              value={highVal}
              onChange={(e) => setHighVal(e.target.value)}
            />
            <label htmlFor="duration">Duration to Delay : </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <button onClick={handelReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
