import React, { useState } from "react";

function RadioGroup({ name = "", options = [], initialValue = "" }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>Radio Group</h3>
      {options.map((option) => (
        <div key={option.value}>
          <label htmlFor={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              onChange={(e) => setValue(e.target.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
      <span>Value: {value}</span>
    </div>
  );
}

export default RadioGroup;
