import React, { useState } from "react";

function Select({ options = [], initialValue = "" }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>Select</h3>
      <select
        name="selectDropDown"
        id="selectDropDown"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Select Value</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span>Value: {value}</span>
    </div>
  );
}

export default Select;
