import React from "react";
import Counter from "../components/Counter";

function Counters() {
  const printCounterValue = (step, value) => {
    console.log({ step, value });
  };

  return (
    <>
      <Counter emitCounterValue={printCounterValue} />
      <Counter step={10} emitCounterValue={printCounterValue} />
    </>
  );
}

export default Counters;
