import React, { useState } from "react";

function NumberInput({ initialValue = 0 }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>Number Input</h3>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value) || 0)}
      />
      <span>Value: {value}</span>
    </div>
  );
}

export default NumberInput;
