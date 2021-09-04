import React, { useState } from "react";

function TextInput({ initialValue = "" }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>Text Input</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>Value: {value}</span>
    </div>
  );
}

export default TextInput;
