import React, { useState } from "react";

function CheckboxGroup({ name = "", options = [], initialValue = [] }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>Checkbox Group</h3>
      {options.map((option) => (
        <div key={option.value}>
          <label htmlFor={option.value}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  setValue((previousValue) => [
                    ...previousValue,
                    e.target.value,
                  ]);
                } else {
                  setValue((previousValue) =>
                    previousValue.filter((v) => v !== e.target.value)
                  );
                }
              }}
            />
            {option.label}
          </label>
        </div>
      ))}
      <span>Value: {value}</span>
    </div>
  );
}

export default CheckboxGroup;
