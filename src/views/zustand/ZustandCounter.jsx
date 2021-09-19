import React, { useMemo, useState } from "react";
import useCounterStore from "../../stores/counter/counter.store";
import styles from "./ZustandCounter.module.css";

function ZustandCounter() {
  const { count, step, setStep, increase, decrease } = useCounterStore();

  const isNegative = useMemo(() => {
    // console.log("memoized: runs only when dependencies (count) change");
    return count < 0 ? true : false;
  }, [count]);

  return (
    <div>
      <p
        className={` ${styles.count}  ${
          styles[isNegative ? "negative" : "positive"]
        } `}
      >
        {count}
      </p>
      <p>{step}</p>

      <button onClick={increase}>⬆️ {step}</button>
      <button onClick={decrease}>⬇️ {step}</button>
      <button
      // onClick={TODO}
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
          // useCounterStore.setState({ step: parseInt(e.target.value) || 0 });
        }}
      />
    </div>
  );
}

export default ZustandCounter;
