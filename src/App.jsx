import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const printCounterValue = (step, value) => {
    console.log({ step, value });
  };

  return (
    <div className="App">
      <Counter emitCounterValue={printCounterValue} />
      <Counter step={10} emitCounterValue={printCounterValue} />
    </div>
  );
}

export default App;
