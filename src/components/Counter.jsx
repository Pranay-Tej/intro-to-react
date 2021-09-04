import React, { useMemo, useState } from "react";
import styles from "./Counter.module.css";

function Counter({ step: initialStep = 1, emitCounterValue }) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(initialStep);

  const isNegative = useMemo(() => {
    console.log("memoized: runs only when dependencies (count) change");
    return count < 0 ? true : false;
  }, [count]);

  const handleIncrease = () => {
    console.log(`increasing count by ${step} units`);
    setCount((presentCount) => presentCount + step);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p
        className={` ${styles.count}  ${
          styles[isNegative ? "negative" : "positive"]
        } `}
      >
        {count}
      </p>
      <p>{step}</p>

      <button onClick={handleIncrease}>⬆️ {step}</button>
      <button
        onClick={() => {
          setCount((presentCount) => presentCount - step);
        }}
      >
        ⬇️ {step}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        🚫
      </button>

      <br />
      <label htmlFor="step">Step</label>
      <input
        type="number"
        name="step"
        id="step"
        value={step}
        onChange={(e) => {
          setStep(parseInt(e.target.value) || 0);
        }}
      />
      <br />

      <button onClick={() => emitCounterValue(step, count)}>EmitValue</button>
    </div>
  );
}

export default Counter;
