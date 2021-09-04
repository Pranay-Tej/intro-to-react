import React, { useState } from "react";

function MultiSelect({ options = [], initialValue = [] }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>MultiSelect</h3>
      <select
        name="multiSelectDropDown"
        id="multiSelectDropDown"
        value={value}
        onChange={(e) => {
          const selectedOptions = [...e.target.selectedOptions].map(
            (option) => option.value
          );
          setValue(selectedOptions);
        }}
        multiple={true}
      >
        {/* <option value="">Select Values</option> */}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span>Values: {value}</span>
    </div>
  );
}

export default MultiSelect;
