import React, { useMemo, useState } from "react";
import styles from "./Counter.module.css";

function Counter({ step = 1, emitCounterValue }) {
  const [count, setCount] = useState(0);

  // TODO
  const isNegative = false;

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
      // onClick={TODO}
      >
        ⬇️ {step}
      </button>
      <button
      // onClick={TODO}
      >
        🚫
      </button>
      <button
      // onClick={TODO}
      >
        EmitValue
      </button>
    </div>
  );
}

export default Counter;
